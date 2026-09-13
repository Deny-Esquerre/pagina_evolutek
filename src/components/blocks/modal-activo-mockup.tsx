"use client";

import { useEffect, useRef, useState } from "react";

const ModalActivo = () => (
  <div
    style={{
      width: 742,
      height: 279,
      boxSizing: "border-box",
      background: "#ffffff",
      border: "1px solid rgba(0,0,0,.10)",
      borderRadius: 16,
      overflow: "hidden",
      boxShadow: "0 22px 50px rgba(25,26,85,.12)",
      fontFamily: "Barlow, sans-serif",
      animation: "evModal .5s cubic-bezier(.2,.7,.3,1) both",
    }}
  >
    <style jsx global>{`
      @keyframes evType {
        0% {
          clip-path: inset(0 100% 0 0);
        }
        30% {
          clip-path: inset(0 0 0 0);
        }
        94% {
          clip-path: inset(0 0 0 0);
        }
        100% {
          clip-path: inset(0 100% 0 0);
        }
      }
      @keyframes evCaret {
        0%,
        49% {
          opacity: 1;
        }
        50%,
        100% {
          opacity: 0;
        }
      }
      @keyframes evCaretMove {
        0% {
          transform: translateX(-486px);
        }
        30%,
        100% {
          transform: none;
        }
      }
      @keyframes evKnob {
        0%,
        42% {
          transform: translateX(-24px);
        }
        56%,
        100% {
          transform: none;
        }
      }
      @keyframes evTrack {
        0%,
        42% {
          background: #c9cdda;
        }
        56%,
        100% {
          background: #0e7c86;
        }
      }
      @keyframes evPress {
        0%,
        80%,
        100% {
          transform: none;
          box-shadow: 0 6px 18px rgba(25, 26, 85, 0.18);
        }
        88% {
          transform: scale(0.97);
          box-shadow: 0 2px 8px rgba(25, 26, 85, 0.22);
        }
      }
      @keyframes evChip {
        0%,
        18% {
          opacity: 0;
          transform: translateY(6px);
        }
        34%,
        100% {
          opacity: 1;
          transform: none;
        }
      }
      @keyframes evModal {
        from {
          opacity: 0;
          transform: scale(0.98) translateY(8px);
        }
        to {
          opacity: 1;
          transform: none;
        }
      }
      @media (prefers-reduced-motion: reduce) {
        [data-type],
        [data-caret],
        [data-caret-wrap],
        [data-knob],
        [data-track],
        [data-press],
        [data-chip],
        [data-modal] {
          animation: none;
        }
      }
    `}</style>

    <div
      style={{
        padding: "28px 32px 22px",
        position: "relative",
        boxSizing: "border-box",
        height: 226,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 22,
          right: 26,
          width: 16,
          height: 16,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 7,
            left: 0,
            width: 16,
            height: 1.8,
            background: "#9a9aa4",
            transform: "rotate(45deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 7,
            left: 0,
            width: 16,
            height: 1.8,
            background: "#9a9aa4",
            transform: "rotate(-45deg)",
          }}
        />
      </div>
      <div
        style={{
          maxWidth: 560,
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 600,
          fontSize: 24,
          lineHeight: 1.42,
          color: "#191A55",
          position: "relative",
        }}
      >
        <span
          data-type
          style={{
            display: "inline-block",
            animation: "evType 9s linear infinite",
          }}
        >
          Describe el activo, su criticidad y las señales que debe publicar
          al Unified Namespace
        </span>
        <span
          data-caret-wrap
          style={{
            display: "inline-block",
            animation: "evCaretMove 9s linear infinite",
          }}
        >
          <span
            data-caret
            style={{
              display: "inline-block",
              width: 2,
              height: 22,
              background: "#0E7C86",
              verticalAlign: -4,
              animation: "evCaret 1s steps(1) infinite",
            }}
          />
        </span>
      </div>
      <div style={{ flex: "1 1 auto" }} />
      <div style={{ display: "flex", gap: 14 }}>
        <div
          data-chip
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "11px 18px",
            background: "#f3f4f8",
            borderRadius: 9,
            fontSize: 16,
            color: "#5a5b66",
            animation: "evChip 9s ease-out infinite",
          }}
        >
          <div
            style={{
              width: 13,
              height: 13,
              border: "1.6px solid #7d7d85",
              borderRadius: "50%",
            }}
          />
          Vincular activo
        </div>
        <div
          data-chip
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "11px 18px",
            background: "#f3f4f8",
            borderRadius: 9,
            fontSize: 16,
            color: "#5a5b66",
            animation: "evChip 9s ease-out infinite",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              background: "#0E7C86",
              transform: "rotate(45deg)",
            }}
          />
          Modelo de datos
        </div>
      </div>
    </div>

    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "0 32px",
        height: 53,
        borderTop: "1px solid rgba(0,0,0,.09)",
        boxSizing: "border-box",
      }}
    >
      <div
        data-track
        style={{
          width: 50,
          height: 26,
          borderRadius: 13,
          background: "#0E7C86",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: 3,
          boxSizing: "border-box",
          animation: "evTrack 9s ease-in-out infinite",
        }}
      >
        <div
          data-knob
          style={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: "#ffffff",
            animation: "evKnob 9s cubic-bezier(.3,.8,.3,1) infinite",
          }}
        />
      </div>
      <div style={{ fontSize: 17, color: "#5a5b66" }}>Crear otro</div>
      <div style={{ flex: "1 1 auto" }} />
      <div
        data-press
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          background: "#191A55",
          color: "#ffffff",
          padding: "0 26px",
          height: 44,
          borderRadius: 9,
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 600,
          fontSize: 17,
          animation: "evPress 9s ease-in-out infinite",
        }}
      >
        Agregar activo
        <span
          style={{
            fontFamily: "Barlow, sans-serif",
            fontWeight: 400,
            opacity: 0.8,
          }}
        >
          &#8629;
        </span>
      </div>
    </div>
  </div>
);

const MODAL_WIDTH = 742;
const MODAL_HEIGHT = 279;
const MAX_RENDER_WIDTH = 470;

export const ScaledModalActivo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const width = Math.min(el.offsetWidth, MAX_RENDER_WIDTH);
      setScale(width / MODAL_WIDTH);
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
      style={{ height: MODAL_HEIGHT * scale }}
    >
      <div
        style={{
          width: MODAL_WIDTH,
          height: MODAL_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        <ModalActivo />
      </div>
    </div>
  );
};
