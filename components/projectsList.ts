
export interface ProjProps {
    id: string;
    title: string;
    description: string;
    linkWeb?: string;
    webAvail:boolean;
    img: string;
    skills: string[];
    users?: number;
    fullInfo?:string;
    features?: string[];
    moreImgs?: string[];
}

export const projects: ProjProps[] = [
    
    // {
    //     id: 'race',

    //     title: "Algo Race",
    //     description: "race between different algotithms visualized for better understanding! ",
    //     img: "/imgs/algos.gif",
    //     skills: ["C/C++", "GraphQL", "DSA Concepts"],
    //     webAvail:false,

    // },
     {
        id: 'lunoir',

        title: "Lunoir Wear",
        description: "a marketplace for selling my tshirts. get the craziest but high quality shirts only at lunoirwear",
        linkWeb: "https://www.lunoirwear.com/",
        img: "/imgs/lunoir.gif",
        skills: ["Next.js", "TailwindCSS", "TypeScript"],
        users: 98,
        webAvail:true,

    },

    {
        id: 'your-time',

        title: "Time Is Yours (Web Extension)",
        description: "a web extension that tracks your time spent on websites and gives you a detailed report of your time usage.",
        linkWeb: "https://github.com/farzeenilyaszargar/time-is-yours-extension/",
        img: "/imgs/ext.gif",
        skills: ["JS", "HTML", "CSS"],
        webAvail:false,
        fullInfo: "This project is a web extension designed to track the time users spend on various websites, providing detailed reports on their time usage. The extension aims to help users understand their online habits and improve productivity by visualizing time spent across different sites. It features a user-friendly interface that displays time statistics, allowing users to set goals and receive reminders for excessive usage. The extension is built using JavaScript, HTML, and CSS, ensuring compatibility with major browsers. It includes options for customizing tracking preferences and generating weekly or monthly reports to analyze trends in web activity.",
        features: ["Time tracking for websites",
            "Detailed reports on time usage",
            "User-friendly interface",
            "Compatibility with major browsers"],
        moreImgs: [
                "/imgs/ext2.png",
                "/imgs/ext3.png"

            ]

    },

    
    // {
    //     id: 'music-player',
    //     title: "Calypso Music AI",
    //     description: "i made this AI to distinguish music based on actual musical values and not predective values of the user.",
    //     img: "/imgs/calypso.gif",
    //     webAvail:false,

    //     skills: ["Rust"],
    //     fullInfo:"This placeholder brief outlines a Rust music player project intended to be fast, safe, and pleasant to use. The application targets desktop platforms and optionally a terminal interface, demonstrating modern async design and careful resource management. Core responsibilities are decoding audio, managing a media library, scheduling playback, and presenting a responsive UI. Audio playback will use rodio or cpal for output, wrapped in a small trait to allow swapping backends. Supported formats initially include MP3, FLAC, WAV, OGG, and AAC via symphonia. Files are discovered by a library indexer that walks directories with ignore rules, extracts tags with lofty, computes content hashes for deduplication, and stores metadata in SQLite through sqlx. Indexing runs on Tokio tasks to avoid blocking the UI. The queue and playlist engine provide shuffle, repeat, crossfade, gapless playback, replay gain, and a lightweight ten band equalizer. Smart playlists evaluate simple rules like genre, year, or play count. Streaming HTTP, HLS, and radio sources are buffered with backpressure and graceful reconnects. A small cache reduces bandwidth and supports offline listening for recently played tracks. Two interfaces are planned. A TUI built with ratatui and crossterm offers keyboard driven control in the terminal. A desktop shell using Tauri provides native windowing, tray controls, and media keys. Both share the same core crate to maintain a single source of truth. Telemetry uses tracing for structured logs and optional OpenTelemetry for metrics. Tests cover decoders, queue invariants, and migration safety; property tests with proptest strengthen correctness. Security considerations include sandboxing external artwork fetches, validating playlist URLs, and handling untrusted tags safely. Documentation will include quickstart examples, configuration guides, and an architecture diagram. The roadmap targets a minimal viable player, then plugins for visualizers, scrobbling, and DSP effects. Contributions are welcome and encouraged. Issue templates and code style guidelines ship included."

    // },
    // {
    //     id: 'security-system',

    //     title: "Security System Using Raspberry Pi",
    //     description: "integrating sensors, camera and microprocessor to make a functioning security system.",
    //     img: "/imgs/raspberry.webp",
    //     webAvail:false,

    //     skills: ["Python"],
    //     fullInfo:"This placeholder brief describes a modular home security system built with Raspberry Pi and Python. The objective is dependable detection, quick notification, and easy extension without proprietary lock-in. The core service runs on Raspberry Pi OS, installed as a systemd unit for automatic startup and graceful restarts. A Pi Camera or USB webcam provides video; OpenCV performs motion analysis via background subtraction, morphology filters, and contour heuristics to suppress noise from shadows or small pets. Optional PIR sensors on GPIO pins offer low-power wake triggers and corroboration. Door/window status is supported with magnetic reed switches; a piezo buzzer provides local chirps for arm, disarm, and alarm states. Configuration lives in a human-readable YAML file: arming schedules, sensitivity thresholds, detection zones, clip length, storage limits, and notification channels. When motion is confirmed, the system captures timestamped JPEG bursts or short H.264 segments, writes structured logs, and pushes alerts through email, Telegram, or generic webhooks. A circular disk buffer enforces retention, with spillover to a NAS via SMB/NFS when available. A lightweight Flask dashboard exposes live preview, event history, and settings. Token-based auth protects access; all endpoints prefer HTTPS behind a reverse proxy such as Caddy. The UI emphasizes large status badges, quick arm/disarm controls, and per-sensor health indicators. Health checks verify camera availability, disk space, and clock drift; self-repair routines attempt reconnection before escalating. Development follows a multi-package layout: core detection, devices, notifications, storage, and web UI. Tests include unit coverage for detectors, property tests for state machines, and integration tests with sample clips. Observability uses Python’s logging plus OpenTelemetry traces when enabled. A Makefile and install script handle provisioning, udev rules, and service registration. The roadmap includes person detection with a tiny model, MQTT and Home Assistant integration, secure remote access through Tailscale, multi-camera federation, and an export tool for law-enforcement handoff. Documentation covers wiring diagrams, troubleshooting, and upgrade paths."

    // },
   

    // {
    //     id: 'to-do',
    //     title: "To Do App ",
    //     description: "just a to do app for myself made here!",
    //     img: "/imgs/todo.avif",
    //     skills: ["React-Native"],
    //     webAvail:false,
        
    // },

    
    // {
    //     id: 'sudoku-solver',
    //     title: "Sudoku Solver Algorithm",
    //     description: "solves sudoku with multiple algotithms",
    //     img: "/imgs/sudoku.gif",
    //     skills: ["Next.js", "TailwindCSS"],
    //     webAvail:false,
    //     fullInfo:'This project delivers a fast, reliable Sudoku solver and generator with clean interfaces and strong correctness guarantees. At its core is a hybrid solving engine: constraint propagation (naked/hidden singles, candidate elimination by units, pairs/triples) to shrink the search space, followed by depth-first backtracking with heuristics (MRV/least-remaining-values and forward checking). For advanced performance, an optional exact-cover backend (Algorithm X with Dancing Links) can be toggled for benchmarking or very hard puzzles. The solver validates inputs (no duplicates per row/column/box), detects unsatisfiable boards, and verifies uniqueness of solutions. A generator builds fresh puzzles by carving from complete grids and testing uniqueness, with difficulty estimated from the sequence of techniques required. The project ships with a CLI for batch solving/generation, a minimal web UI for interactive play and hints, and a test suite covering canonical edge cases. Clear module boundaries make it easy to embed the engine in other apps (mobile, desktop, or web workers). Documentation includes an API guide, technique glossary, and performance notes.'
        
    // },

    {
        id: 'img-ascii',
        title: "Convert Image to ASCII Characters",
        description: "just upload files to convert Image to ASCII characters with shadings!",
        img: "/imgs/ascii.gif",
        skills: ["HTML", "CSS", "JavaScript", "Python"],
        webAvail:true,
        linkWeb: "https://www.lunoirwear.com/",

        
    },

    
]



