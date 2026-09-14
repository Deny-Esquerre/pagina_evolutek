"use client";

import { useEffect, useRef, useState } from "react";

import { useInView } from "motion/react";

const VIEW_WIDTH = 1570;
const VIEW_HEIGHT = 230;
const COLS = 48;
const ROWS = 8;
const CELL_WIDTH = VIEW_WIDTH / COLS;
const CELL_HEIGHT = VIEW_HEIGHT / ROWS;
const REVEAL_WINDOW = 0.9;

// Deterministic pseudo-random so the reveal order is identical on the
// server-rendered and client-hydrated markup.
function pseudoRandom(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

const CELLS = Array.from({ length: COLS * ROWS }, (_, index) => ({
  x: (index % COLS) * CELL_WIDTH,
  y: Math.floor(index / COLS) * CELL_HEIGHT,
  delay: pseudoRandom(index + 1) * REVEAL_WINDOW,
}));

export function FooterWordmark() {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { amount: 0.4, once: false });
  const [revealKey, setRevealKey] = useState(0);

  useEffect(() => {
    if (isInView) {
      setRevealKey((key) => key + 1);
    }
  }, [isInView]);

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
      width={VIEW_WIDTH}
      height={VIEW_HEIGHT}
      className="h-auto w-full"
      color="#191A55"
      role="img"
      aria-label="EVOLUTEK"
    >
      <defs>
        <linearGradient
          id="evolutek-wordmark-text"
          x1="0"
          y1="0"
          x2="0"
          y2={VIEW_HEIGHT}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="currentColor" />
          <stop offset="1" stopColor="#4A4CB8" stopOpacity="0.41" />
        </linearGradient>
        <linearGradient id="evolutek-wordmark-mark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="currentColor" />
          <stop offset="1" stopColor="#4A4CB8" stopOpacity="0.41" />
        </linearGradient>
        <mask
          key={revealKey}
          id="wordmark-pixel-mask"
          maskUnits="userSpaceOnUse"
        >
          {CELLS.map((cell, index) => (
            <rect
              key={index}
              x={cell.x}
              y={cell.y}
              width={CELL_WIDTH + 0.75}
              height={CELL_HEIGHT + 0.75}
              fill="#ffffff"
              className="wordmark-pixel-cell"
              style={{ animationDelay: `${cell.delay}s` }}
            />
          ))}
        </mask>
      </defs>

      <g mask="url(#wordmark-pixel-mask)">
        <g transform="translate(162 0)">
          <g transform="translate(14.286 -1.071) scale(1.785714)">
            <circle cx="62" cy="65" r="56" fill="url(#evolutek-wordmark-mark)" />
            <path
              d="M29.5 73.5 C25.5 72 24.3 68 24.3 60 C24.3 51.5 30 48 38 48 C40.5 39 49.5 31.6 61.9 31.6 C74.3 31.6 83.3 39 85.8 48 C93.8 48 99.5 51.5 99.5 60 C99.5 68 98.3 72 94.3 73.5"
              fill="none"
              stroke="#ffffff"
              strokeWidth="9.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g
              fill="none"
              stroke="#ffffff"
              strokeWidth="10.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M61.8 52.5 V84" />
              <path d="M47.9 68 L61.8 84 L75.7 68" />
            </g>
            <circle cx="40.7" cy="98.5" r="6.9" fill="#ffffff" />
            <circle cx="61.8" cy="98.5" r="6.9" fill="#ffffff" />
            <circle cx="82.8" cy="98.5" r="6.9" fill="#ffffff" />
          </g>
          <text
            x="265"
            y="185"
            textAnchor="start"
            fontFamily="Montserrat, 'Arial Black', sans-serif"
            fontWeight="800"
            fontSize="210"
            letterSpacing="-2"
            textLength="956"
            lengthAdjust="spacingAndGlyphs"
            fill="url(#evolutek-wordmark-text)"
          >
            EVOLUTEK
          </text>
        </g>
      </g>

      <style>{`
        .wordmark-pixel-cell {
          opacity: 0;
          animation: wordmark-pixel-reveal 0.05s ease-out forwards;
        }
        @keyframes wordmark-pixel-reveal {
          to {
            opacity: 1;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .wordmark-pixel-cell {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>
    </svg>
  );
}
