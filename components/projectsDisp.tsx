// components/AlternatingSlideshowSync.tsx
"use client";

import React, { useEffect, useMemo, useRef } from "react";

type Props = {
    children: React.ReactNode;
    itemWidth?: number;
    itemHeight?: number;
    gap?: number;
    shiftPx?: number;
    moveMs?: number;
    pauseMs?: number;
    xSpeed?: number; // px/sec during move
};

export default function AlternatingSlideshowSync({
    children,
    itemWidth = 260,
    itemHeight = 200,
    gap = 24,
    shiftPx = 16,
    moveMs = 1000,
    pauseMs = 1000,
    xSpeed = 200,
}: Props) {
    const items = useMemo(() => React.Children.toArray(children), [children]);
    const doubled = useMemo(() => [...items, ...items], [items]);

    const trackRef = useRef<HTMLDivElement>(null);
    const innerRefs = useRef<HTMLDivElement[]>([]);

    const perItem = itemWidth + gap;
    const setWidth = items.length * perItem;

    useEffect(() => {
        const track = trackRef.current;
        if (!track || items.length === 0) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const cycle = moveMs + pauseMs;
        const bigPeriod = 2 * cycle; // move→pause→move(reverse)→pause
        let start = performance.now();
        let raf = 0;
        let offsetX = 0;
        let last = start;

        const ease = (t: number) => 1 - Math.pow(1 - t, 3); // easeOutCubic
        const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

        const tick = (now: number) => {
            const elapsed = now - start;
            const t = elapsed % bigPeriod;

            const inFirstMove = t < moveMs;
            const inFirstPause = !inFirstMove && t < moveMs + pauseMs;
            const inSecondMove = !inFirstMove && !inFirstPause && t < moveMs + pauseMs + moveMs;
            const moving = inFirstMove || inSecondMove;

            // horizontal movement only during move windows
            const dt = now - last;
            last = now;
            if (moving && xSpeed > 0) {
                offsetX -= (xSpeed * dt) / 1000;
                if (offsetX <= -setWidth) offsetX += setWidth; // seamless wrap
            }
            track.style.transform = `translate3d(${offsetX}px,0,0)`;

            // vertical alternating
            let phaseProgress = 0, from = -shiftPx, to = +shiftPx;
            if (inFirstMove) {
                phaseProgress = ease(t / moveMs); from = -shiftPx; to = +shiftPx;
            } else if (inFirstPause) {
                phaseProgress = 1; from = +shiftPx; to = +shiftPx;
            } else if (inSecondMove) {
                const tt = (t - (moveMs + pauseMs)) / moveMs;
                phaseProgress = ease(tt); from = +shiftPx; to = -shiftPx;
            } else {
                phaseProgress = 1; from = -shiftPx; to = -shiftPx;
            }
            const baseY = lerp(from, to, phaseProgress);

            innerRefs.current.forEach((el, i) => {
                if (!el) return;
                const sign = i % 2 === 0 ? 1 : -1;
                el.style.transform = `translate3d(0, ${sign * baseY}px, 0)`;
            });

            raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [items.length, setWidth, shiftPx, moveMs, pauseMs, xSpeed]);

    const slotStyle: React.CSSProperties = {
        width: `${itemWidth}px`,
        height: `${itemHeight}px`,
        flex: "0 0 auto",
        marginRight: `${gap}px`,
    };

    return (
        <div
            className="
        mx-auto w-full relative overflow-hidden mt-5
        [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]
        [-webkit-mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]
      "
            style={{ paddingTop: shiftPx, paddingBottom: shiftPx }}
        >
            <div
                ref={trackRef}
                className="flex will-change-transform"
                style={{ transform: "translate3d(0,0,0)" }}
            >
                {doubled.map((child, i) => (
                    <div key={i} style={slotStyle}>
                        <div
                            className="h-full will-change-transform transition-transform duration-[1000ms] [transition-timing-function:cubic-bezier(.2,.8,.2,1)]"
                            ref={(el) => (innerRefs.current[i] = el!)}
                        >
                            {child}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
