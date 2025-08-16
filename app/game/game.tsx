// app/games/page.tsx
"use client";

import { useEffect, useRef, useState } from "react";

type Obstacle = { id: number; x: number; width: number; height: number };

export default function DinoGame() {
  const [score, setScore] = useState(0);
  const [hi, setHi] = useState(0);
  const [runningState, setRunningState] = useState(true);

  const runningRef = useRef(true);
  const reqRef = useRef<number>(0);
  const lastTsRef = useRef(0);

  const PLY_X = 80, PLY_W = 32, PLY_H = 36;
  const yRef = useRef(0);
  const vRef = useRef(0);
  const jumpingRef = useRef(false);

  const obstaclesRef = useRef<Obstacle[]>([]);
  const nextIdRef = useRef(1);
  const speedRef = useRef(350);     // px/s (ground speed)
  const spawnTimerRef = useRef(0);  // seconds
  const spawnGapRef = useRef(1.4);  // seconds

  const setRunning = (v: boolean) => {
    runningRef.current = v;
    setRunningState(v);
  };

  const jump = () => {
    if (!runningRef.current || jumpingRef.current) return;
    jumpingRef.current = true;
    vRef.current = 700; // upward impulse (px/s)
  };

  const spawnObstacle = () => {
    const w = 18 + Math.floor(Math.random() * 18);  // 18–36
    const h = 20 + Math.floor(Math.random() * 36);  // 20–56
    const xStart = 800; // stage width in px
    obstaclesRef.current.push({ id: nextIdRef.current++, x: xStart, width: w, height: h });

    // next spawn time (seconds), slightly faster with speed
    const base = 0.65, rand = Math.random() * 0.45;
    spawnGapRef.current = Math.max(0.42, base + rand - (speedRef.current / 1000));
    spawnTimerRef.current = 0;
  };

  const collide = (o: Obstacle) => {
    const L1 = PLY_X, 
    R1 = PLY_X + PLY_W, 
    B1 = yRef.current,
    T1 = yRef.current + PLY_H;
    
    const L2 = o.x, 
    R2 = o.x + o.width, 
    B2 = 0, 
    T2 = o.height;
    
    return !(R1 < L2 || L1 > R2 || T1 < B2 || B1 > T2);
  };

  const loop = (ts: number) => {
    const dtSec = Math.min(0.050, (ts - lastTsRef.current) / 1000); // clamp ~32ms
    lastTsRef.current = ts;

    if (runningRef.current) {
      // gravity (downward)
      const G = -2400;                 // px/s^2
      vRef.current += G * dtSec;       // velocity
      yRef.current += vRef.current * dtSec; // position

      // ground clamp
      if (yRef.current <= 0) {
        yRef.current = 0;
        vRef.current = 0;
        jumpingRef.current = false;
      }

      // difficulty ramp (increase ground speed slowly)
      speedRef.current = Math.min(520, speedRef.current + 8 * dtSec);

      // move obstacles & cull off-screen
      const speed = speedRef.current;
      obstaclesRef.current.forEach(o => (o.x -= speed * dtSec));
      obstaclesRef.current = obstaclesRef.current.filter(o => o.x + o.width > 0);

      // spawn timing (seconds)
      spawnTimerRef.current += dtSec;
      if (spawnTimerRef.current >= spawnGapRef.current) spawnObstacle();

      // collisions
      for (const o of obstaclesRef.current) {
        if (collide(o)) {
          setRunning(false);
          setHi(h => {
            const n = Math.max(h, Math.floor(score));
            try { localStorage.setItem("dino_hi", String(n)); } catch { }
            return n;
          });
          break;
        }
      }

      // score by distance
      setScore(s => s + speed * dtSec * 0.05);
    }

    reqRef.current = requestAnimationFrame(loop);
  };

  useEffect(() => {
    // load high score
    try {
      const saved = Number(localStorage.getItem("dino_hi"));
      if (!Number.isNaN(saved)) setHi(saved);
    } catch {
     }
    lastTsRef.current = performance.now();
    reqRef.current = requestAnimationFrame(loop);

    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        jump();
      } else if (e.code === "KeyR") {
        e.preventDefault();
        if (!runningRef.current) reset();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      if (reqRef.current) cancelAnimationFrame(reqRef.current);
    };
  }, []);

  const reset = () => {
    setScore(0);
    yRef.current = 0;
    vRef.current = 0;
    jumpingRef.current = false;
    obstaclesRef.current = [];
    nextIdRef.current = 1;
    speedRef.current = 220;
    spawnTimerRef.current = 0;
    spawnGapRef.current = 0.9;
    setRunning(true);
    lastTsRef.current = performance.now();
  };

  const tapToJump = () => jump();

  const obstacles = obstaclesRef.current;

  return (
    <div className="mx-auto w-full max-w-[900px] p-4">
      {/* HUD */}
      <div className="mb-2 flex items-center justify-between text-sm text-neutral-600">
        <div>
          Press{" "}
          <kbd className="px-1 border rounded">Space</kbd>/<kbd className="px-1 border rounded">↑</kbd> to jump •{" "}
          <kbd className="px-1 border rounded">R</kbd> to restart • Click/tap to jump
        </div>
        <div className="font-mono">
          HI {String(hi).padStart(5, "0")} &nbsp; SCORE {String(Math.floor(score)).padStart(5, "0")}
        </div>
      </div>

      {/* Stage */}
      <div
        onMouseDown={tapToJump}
        onTouchStart={tapToJump}
        className="relative h-[220px] w-[800px] max-w-full overflow-hidden rounded-xl border bg-white select-none"
      >
        {/* Ground */}
        <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-neutral-700" />

        {/* Player */}
        <div
          className="absolute bg-neutral-900 rounded-[4px]"
          style={{
            left: `${PLY_X}px`,
            bottom: `${yRef.current}px`,
            width: `${PLY_W}px`,
            height: `${PLY_H}px`,
            boxShadow: "0 2px 0 rgba(0,0,0,0.2)",
          }}
        />

        {/* Obstacles */}
        {obstacles.map(o => (
          <div
            key={o.id}
            className="absolute bg-neutral-700 rounded-[2px]"
            style={{ left: `${o.x}px`, bottom: "0px", width: `${o.width}px`, height: `${o.height}px` }}
          />
        ))}

        {/* Game Over Overlay */}
        {!runningState && (
          <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px] flex flex-col items-center justify-center gap-3">
            <div className="text-xl font-semibold">Game Over</div>
            <button
              onClick={reset}
              className="px-4 py-2 rounded-xl border border-neutral-900 hover:bg-neutral-900 hover:text-white transition"
            >
              Restart
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        kbd { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 12px; }
      `}</style>
    </div>
  );
}
