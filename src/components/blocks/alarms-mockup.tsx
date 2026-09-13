"use client";

import { useEffect, useRef, useState } from "react";

const ALARMS = [
  {
    zone: "FIS",
    dot: "#EA9745",
    title: "Punto de fiscalización sin lectura",
    detail: "Medición de gas · RTU 04",
    tag: "ADVERTENCIA",
    time: "12:33",
  },
  {
    zone: "EDG",
    dot: "#0E7C86",
    title: "Gateway N3uron reconectado",
    detail: "OPC UA · nodo de borde",
    tag: "RESUELTA",
    time: "11:58",
  },
  {
    zone: "SCD",
    dot: "#191A55",
    title: "Comunicación IEC 104 perdida",
    detail: "Enlace a sala de control",
    tag: "CRÍTICA",
    time: "10:41",
  },
  {
    zone: "UNS",
    dot: "#0E7C86",
    title: "Tópico publicado en el UNS",
    detail: "planta/area/caudal",
    tag: "INFO",
    time: "09:12",
  },
];

const AlarmsCard = () => (
  <div
    style={{
      width: 489,
      background: "#ffffff",
      border: "1px solid rgba(0,0,0,.10)",
      borderRadius: 14,
      overflow: "hidden",
      boxShadow: "0 10px 30px rgba(25,26,85,.07)",
      fontFamily: "Barlow, sans-serif",
    }}
  >
    <style jsx global>{`
      @keyframes evRise {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: none;
        }
      }
      @keyframes evPulse {
        0%,
        100% {
          box-shadow: 0 0 0 0 rgba(234, 151, 69, 0);
        }
        50% {
          box-shadow: 0 0 0 5px rgba(234, 151, 69, 0.28);
        }
      }
      @keyframes evScan {
        0%,
        100% {
          background: rgba(255, 255, 255, 0);
        }
        8% {
          background: rgba(14, 124, 134, 0.07);
        }
        22% {
          background: rgba(255, 255, 255, 0);
        }
      }
      @keyframes evTagIn {
        0%,
        100% {
          opacity: 0.85;
        }
        8%,
        22% {
          opacity: 1;
        }
      }
      [data-dot="pulse"] {
        animation: evPulse 2.6s ease-in-out infinite;
      }
      [data-row] {
        animation:
          evRise 0.5s cubic-bezier(0.2, 0.7, 0.3, 1) both,
          evScan 7s linear infinite;
      }
      [data-tag] {
        animation: evTagIn 7s linear infinite;
      }
      [data-row]:nth-child(1) {
        animation-delay: 0.05s, 0s;
      }
      [data-row]:nth-child(2) {
        animation-delay: 0.14s, 0.5s;
      }
      [data-row]:nth-child(3) {
        animation-delay: 0.23s, 1s;
      }
      [data-row]:nth-child(4) {
        animation-delay: 0.32s, 1.5s;
      }
      [data-row]:nth-child(1) [data-tag] {
        animation-delay: 0s;
      }
      [data-row]:nth-child(2) [data-tag] {
        animation-delay: 0.5s;
      }
      [data-row]:nth-child(3) [data-tag] {
        animation-delay: 1s;
      }
      [data-row]:nth-child(4) [data-tag] {
        animation-delay: 1.5s;
      }
      @media (prefers-reduced-motion: reduce) {
        [data-row],
        [data-dot="pulse"],
        [data-tag] {
          animation: none;
        }
      }
    `}</style>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "16px 20px",
        borderBottom: "1px solid rgba(0,0,0,.09)",
      }}
    >
      <div
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 700,
          fontSize: 19,
          color: "#191A55",
        }}
      >
        Alarmas
      </div>
      <div
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 12,
          color: "#7d7d85",
        }}
      >
        24 h
      </div>
      <div style={{ flex: "1 1 auto" }} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          alignItems: "flex-end",
        }}
      >
        <div style={{ width: 16, height: 2, background: "#5a5b66" }} />
        <div style={{ width: 11, height: 2, background: "#5a5b66" }} />
        <div style={{ width: 6, height: 2, background: "#5a5b66" }} />
      </div>
    </div>
    <div style={{ display: "flex", flexDirection: "column" }}>
      {ALARMS.map((a) => (
        <div
          key={a.zone + a.time}
          data-row
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "14px 20px",
            borderBottom: "1px solid rgba(0,0,0,.06)",
          }}
        >
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 8,
              background: "#eceef7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: "0 0 auto",
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11,
              fontWeight: 500,
              color: "#191A55",
            }}
          >
            {a.zone}
          </div>
          <div style={{ flex: "1 1 auto", minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <div
                data-dot="pulse"
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  background: a.dot,
                  flex: "0 0 auto",
                }}
              />
              <div
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                  fontSize: 15,
                  color: "#191A55",
                }}
              >
                {a.title}
              </div>
            </div>
            <div style={{ fontSize: 14, color: "#7d7d85", marginTop: 2 }}>
              {a.detail}
            </div>
          </div>
          <div style={{ textAlign: "right", flex: "0 0 auto" }}>
            <div
              data-tag
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 11,
                color: "#0E7C86",
              }}
            >
              {a.tag}
            </div>
            <div
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 11,
                color: "#7d7d85",
                marginTop: 3,
              }}
            >
              {a.time}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CARD_WIDTH = 489;
const CARD_HEIGHT = 345;
const MAX_RENDER_WIDTH = 340;

export const ScaledAlarmsMockup = () => {
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
        <AlarmsCard />
      </div>
    </div>
  );
};
