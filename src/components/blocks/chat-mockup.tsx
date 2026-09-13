"use client";

import { useEffect, useRef, useState } from "react";

const ChatCard = () => (
  <div style={{ width: 512, fontFamily: "Barlow, sans-serif" }}>
    <style jsx global>{`
      @keyframes evPop {
        from {
          opacity: 0;
          transform: scale(0.97);
        }
        to {
          opacity: 1;
          transform: none;
        }
      }
      @keyframes evMsg {
        0% {
          opacity: 0;
          transform: translateY(12px);
        }
        8%,
        90% {
          opacity: 1;
          transform: none;
        }
        100% {
          opacity: 0;
          transform: translateY(12px);
        }
      }
      @keyframes evDots {
        0%,
        100% {
          transform: none;
          opacity: 0.4;
        }
        30% {
          transform: translateY(-4px);
          opacity: 1;
        }
      }
      [data-pop] {
        animation: evPop 0.55s cubic-bezier(0.2, 0.7, 0.3, 1) both;
      }
      [data-msg] {
        animation: evMsg 11s ease-out infinite both;
      }
      [data-msg="2"] {
        animation-delay: 1.4s;
      }
      [data-msg="3"] {
        animation-delay: 3s;
      }
      [data-msg="4"] {
        animation-delay: 4.6s;
      }
      [data-dots] > div {
        animation: evDots 1.2s ease-in-out infinite;
      }
      [data-dots] > div:nth-child(2) {
        animation-delay: 0.15s;
      }
      [data-dots] > div:nth-child(3) {
        animation-delay: 0.3s;
      }
      @media (prefers-reduced-motion: reduce) {
        [data-pop],
        [data-msg],
        [data-dots] > div {
          animation: none;
        }
      }
    `}</style>

    <div
      data-pop
      style={{
        background: "#ffffff",
        borderRadius: 16,
        padding: "18px 22px",
        display: "flex",
        gap: 14,
        boxShadow: "0 12px 26px rgba(25,26,85,.10)",
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: "#eceef7",
          flex: "0 0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 700,
          fontSize: 15,
          color: "#191A55",
        }}
      >
        RS
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 9 }}>
          <div
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: 16,
              color: "#191A55",
            }}
          >
            Rosa Salas
          </div>
          <div
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 13,
              color: "#7d7d85",
            }}
          >
            10:26
          </div>
        </div>
        <div
          style={{
            fontSize: 17,
            lineHeight: 1.4,
            color: "#5a5b66",
            marginTop: 4,
          }}
        >
          El nodo de borde ya publica presión y caudal en el Unified
          Namespace. Falta contextualizar por área.
        </div>
      </div>
    </div>

    <div
      data-msg="2"
      style={{
        background: "#ffffff",
        borderRadius: 16,
        padding: "16px 20px",
        display: "flex",
        gap: 14,
        boxShadow: "0 10px 22px rgba(25,26,85,.09)",
        marginTop: 12,
      }}
    >
      <div
        style={{
          width: 38,
          height: 38,
          borderRadius: "50%",
          background: "#e3f0f1",
          flex: "0 0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 700,
          fontSize: 14,
          color: "#0E7C86",
        }}
      >
        MA
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 9 }}>
          <div
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: 15,
              color: "#191A55",
            }}
          >
            Marvin Arévalo
          </div>
          <div
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 13,
              color: "#7d7d85",
            }}
          >
            10:28
          </div>
        </div>
        <div
          style={{
            fontSize: 16,
            lineHeight: 1.4,
            color: "#5a5b66",
            marginTop: 3,
          }}
        >
          Lo agrupo por área y lo dejo publicado en el UNS.
        </div>
      </div>
    </div>

    <div
      data-msg="3"
      style={{
        background: "#ffffff",
        borderRadius: 16,
        padding: "16px 20px",
        display: "flex",
        gap: 14,
        boxShadow: "0 10px 22px rgba(25,26,85,.09)",
        marginTop: 12,
      }}
    >
      <div
        style={{
          width: 38,
          height: 38,
          borderRadius: "50%",
          background: "#eceef7",
          flex: "0 0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 700,
          fontSize: 14,
          color: "#191A55",
        }}
      >
        CS
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 9 }}>
          <div
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: 15,
              color: "#191A55",
            }}
          >
            Coty Saldarriaga
          </div>
          <div
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 13,
              color: "#7d7d85",
            }}
          >
            10:31
          </div>
        </div>
        <div
          style={{
            fontSize: 16,
            lineHeight: 1.4,
            color: "#5a5b66",
            marginTop: 3,
          }}
        >
          Perfecto, así lo historizamos con el resto de la planta.
        </div>
      </div>
    </div>

    <div
      data-msg="4"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        margin: "14px 0 0 10px",
      }}
    >
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: "50%",
          background: "#e3f0f1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 600,
          fontSize: 11,
          color: "#0E7C86",
        }}
      >
        MA
      </div>
      <div
        data-dots
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          background: "#ffffff",
          borderRadius: 14,
          padding: "11px 16px",
          boxShadow: "0 8px 18px rgba(25,26,85,.08)",
        }}
      >
        <div
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#7d7d85",
          }}
        />
        <div
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#7d7d85",
          }}
        />
        <div
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#7d7d85",
          }}
        />
      </div>
    </div>
  </div>
);

const CARD_WIDTH = 512;
const CARD_HEIGHT = 360;
const MAX_RENDER_WIDTH = 340;

export const ScaledChatMockup = () => {
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
        <ChatCard />
      </div>
    </div>
  );
};
