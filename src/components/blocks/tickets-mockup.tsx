"use client";

import { useEffect, useRef, useState } from "react";

const TICKETS = [
  {
    code: "OT-118",
    who: "AU",
    title: "Mapeo de señales a UNS",
    meta: "OPC UA",
    project: "Integración IT/OT",
  },
  {
    code: "OT-121",
    who: "HI",
    title: "Historización en Canary",
    meta: "Tags de proceso",
    project: "Datos industriales",
  },
];

const TicketsCard = () => (
  <div
    style={{
      width: 489,
      background: "#f1f1f4",
      borderRadius: 14,
      padding: 18,
      boxSizing: "border-box",
      fontFamily: "Barlow, sans-serif",
    }}
  >
    <style jsx global>{`
      @keyframes evDrag {
        0%,
        60%,
        100% {
          transform: none;
          box-shadow: 0 0 0 rgba(25, 26, 85, 0);
        }
        72%,
        86% {
          transform: translate(8px, -6px) rotate(-1.2deg);
          box-shadow: 0 14px 26px rgba(25, 26, 85, 0.16);
        }
      }
      @keyframes evCheck {
        0%,
        60% {
          border-color: #191a55;
          background: transparent;
        }
        74%,
        100% {
          border-color: #0e7c86;
          background: #0e7c86;
        }
      }
      [data-drag] {
        animation: evDrag 7s cubic-bezier(0.3, 0.7, 0.3, 1) infinite;
      }
      [data-check] {
        animation: evCheck 7s ease-in-out infinite;
      }
      @media (prefers-reduced-motion: reduce) {
        [data-drag],
        [data-check] {
          animation: none;
        }
      }
    `}</style>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 11,
        padding: "0 4px 16px",
      }}
    >
      <div
        style={{
          width: 18,
          height: 18,
          borderRadius: "50%",
          border: "2px dashed #7d7d85",
        }}
      />
      <div
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 700,
          fontSize: 18,
          color: "#191A55",
        }}
      >
        Backlog OT
      </div>
      <div
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 13,
          color: "#7d7d85",
        }}
      >
        46
      </div>
      <div style={{ flex: "1 1 auto" }} />
      <div style={{ fontSize: 20, color: "#7d7d85", lineHeight: 0 }}>+</div>
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {TICKETS.map((t) => (
        <div
          key={t.code}
          data-drag
          style={{
            background: "#ffffff",
            borderRadius: 11,
            padding: "14px 16px",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 13,
                color: "#7d7d85",
                flex: "1 1 auto",
              }}
            >
              {t.code}
            </div>
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                background: "#eceef7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 600,
                fontSize: 12,
                color: "#191A55",
              }}
            >
              {t.who}
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 7,
                background: "#f3f4f8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: "0 0 auto",
              }}
            >
              <div
                data-check
                style={{
                  width: 10,
                  height: 10,
                  border: "2px solid #191A55",
                  borderRadius: "50%",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <div
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 600,
                fontSize: 17,
                color: "#191A55",
              }}
            >
              {t.title}
            </div>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <div
              style={{
                border: "1px solid rgba(0,0,0,.12)",
                borderRadius: 7,
                padding: "5px 11px",
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 12,
                color: "#7d7d85",
              }}
            >
              {t.meta}
            </div>
            <div
              style={{
                border: "1px solid rgba(0,0,0,.12)",
                borderRadius: 7,
                padding: "5px 11px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 12,
                color: "#7d7d85",
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  background: "#0E7C86",
                  transform: "rotate(45deg)",
                }}
              />
              {t.project}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CARD_WIDTH = 489;
const CARD_HEIGHT = 300;
const MAX_RENDER_WIDTH = 340;

export const ScaledTicketsMockup = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const width = Math.min(el.offsetWidth, MAX_RENDER_WIDTH);
      setScale(width / CARD_WIDTH);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height: CARD_HEIGHT * scale }}
    >
      <div
        style={{
          width: CARD_WIDTH,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        <TicketsCard />
      </div>
    </div>
  );
};
