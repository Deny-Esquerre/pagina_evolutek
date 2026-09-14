"use client";

import { useEffect, useRef, useState } from "react";

import { Barlow, Barlow_Condensed, Montserrat } from "next/font/google";

import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-uns-montserrat",
});
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-uns-barlow",
});
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-uns-barlow-condensed",
});

const FONT_MONTSERRAT = "var(--font-uns-montserrat), sans-serif";
const FONT_BARLOW = "var(--font-uns-barlow), sans-serif";
const FONT_BARLOW_CONDENSED = "var(--font-uns-barlow-condensed), sans-serif";

type NodeKey =
  | "sql"
  | "ts"
  | "erp"
  | "eam"
  | "iot"
  | "mqtt"
  | "opc"
  | "uaf"
  | "uns"
  | "dw"
  | "kafka"
  | "llm"
  | "app";

const EDGES: [NodeKey, NodeKey][] = [
  ["sql", "uaf"],
  ["ts", "uaf"],
  ["erp", "uaf"],
  ["eam", "uaf"],
  ["iot", "uns"],
  ["mqtt", "uns"],
  ["opc", "uns"],
  ["uaf", "dw"],
  ["uaf", "kafka"],
  ["uaf", "llm"],
  ["uaf", "app"],
  ["uns", "dw"],
  ["uns", "kafka"],
  ["uns", "llm"],
  ["uns", "app"],
  ["uaf", "uns"],
];

const NAVY = "#191A55";
const TEAL = "#4A4C9E";

type Side = "l" | "r";

const SIDE: Record<NodeKey, Side> = {
  sql: "r",
  ts: "r",
  erp: "r",
  eam: "r",
  iot: "r",
  mqtt: "r",
  opc: "r",
  uaf: "l",
  uns: "l",
  dw: "l",
  kafka: "l",
  llm: "l",
  app: "l",
};

const FOCUS: Record<NodeKey, [number, number, number, number]> = {
  sql: [64, 30, 380, 200],
  ts: [64, 160, 380, 200],
  erp: [64, 290, 380, 200],
  eam: [64, 420, 380, 200],
  iot: [64, 550, 380, 200],
  mqtt: [64, 680, 380, 200],
  opc: [64, 810, 380, 200],
  dw: [1160, 110, 400, 230],
  kafka: [1160, 305, 400, 230],
  llm: [1160, 500, 400, 230],
  app: [1160, 695, 400, 230],
  uaf: [730, 130, 380, 380],
  uns: [730, 520, 380, 380],
};

interface NodeInfo {
  kicker: string;
  title: string;
  bg: string;
  rule: string;
  bullets: string[];
}

const INFO: Record<NodeKey, NodeInfo> = {
  sql: {
    kicker: "Productor de datos",
    title: "Bases relacionales SQL",
    bg: NAVY,
    rule: TEAL,
    bullets: [
      "SQL Server, MySQL y PostgreSQL guardan el dato transaccional de producción, calidad y laboratorio.",
      "Cada base responde a su propia aplicación, con su modelo y su frecuencia de carga.",
      "El UAF las consulta en su lugar de origen, sin replicar las bases.",
    ],
  },
  ts: {
    kicker: "Productor de datos",
    title: "Time series e historizador",
    bg: NAVY,
    rule: TEAL,
    bullets: [
      "Canary almacena la serie de tiempo del proceso: presión, caudal, temperatura y estados.",
      "Conserva la resolución fina que el negocio necesita para analizar eventos.",
      "Es la fuente histórica del proceso para el UAF.",
    ],
  },
  erp: {
    kicker: "Productor de datos",
    title: "ERP",
    bg: NAVY,
    rule: TEAL,
    bullets: [
      "SAP y Oracle aportan órdenes, lotes, consumos y costos.",
      "Da el contexto de negocio que la planta por sí sola no tiene.",
      "Sin integrarlo, los KPI de producción quedan sin su lado económico.",
    ],
  },
  eam: {
    kicker: "Productor de datos",
    title: "EAM y CMMS",
    bg: NAVY,
    rule: TEAL,
    bullets: [
      "Gestión de activos y mantenimiento: órdenes de trabajo, historial de fallas e intervenciones.",
      "Permite cruzar paradas del proceso con el mantenimiento asociado.",
      "Alimenta los indicadores de disponibilidad y confiabilidad.",
    ],
  },
  iot: {
    kicker: "Productor en tiempo real",
    title: "IoT gateways",
    bg: TEAL,
    rule: NAVY,
    bullets: [
      "Nodos de borde que leen sensores, PLC, RTU e instrumentación en campo.",
      "Normalizan protocolos y publican el dato en el momento en que ocurre.",
      "Son el primer punto de captura de la arquitectura.",
    ],
  },
  mqtt: {
    kicker: "Productor en tiempo real",
    title: "MQTT brokers",
    bg: TEAL,
    rule: NAVY,
    bullets: [
      "Transportan el dato por publicación y suscripción, no por consulta punto a punto.",
      "Desacoplan a quien produce el dato de quien lo consume.",
      "Sostienen el flujo en vivo hacia el UNS.",
    ],
  },
  opc: {
    kicker: "Productor en tiempo real",
    title: "Servidores OPC",
    bg: TEAL,
    rule: NAVY,
    bullets: [
      "Exponen los datos de PLC y SCADA bajo un estándar común mediante OPC UA.",
      "Conectan equipos de distintas marcas y generaciones sin desarrollos a medida.",
      "Entregan al UNS el estado de control de la planta.",
    ],
  },
  uaf: {
    kicker: "Capa analítica",
    title: "Unified Analytics Framework",
    bg: NAVY,
    rule: TEAL,
    bullets: [
      "Modela los datos: define cómo se unen, limpian y transforman los orígenes relacionales, el historizador, el ERP y el EAM.",
      "Estructura el contexto de planta y ejecuta esas reglas para almacenar eventos y medidas de KPI.",
      "Entrega una base de datos federada para consultas históricas, sin mover los sistemas de origen.",
      "Actúa como puente entre el mundo OT y el mundo IT.",
    ],
  },
  uns: {
    kicker: "Capa en tiempo real",
    title: "Unified Namespace",
    bg: TEAL,
    rule: NAVY,
    bullets: [
      "Publica en tiempo real un único espacio de nombres con el estado de toda la planta.",
      "Cada sistema publica y consume del mismo lugar, sin integraciones punto a punto.",
      "El dato llega con su contexto: activo, área y unidad.",
    ],
  },
  dw: {
    kicker: "Consumidor de datos",
    title: "Data warehouse",
    bg: TEAL,
    rule: NAVY,
    bullets: [
      "Snowflake concentra el histórico ya modelado para análisis y reportes corporativos.",
      "Lee del UAF y del UNS, nunca de los sistemas de origen.",
      "Permite comparar plantas y periodos sobre una misma definición de KPI.",
    ],
  },
  kafka: {
    kicker: "Consumidor de datos",
    title: "Streaming",
    bg: TEAL,
    rule: NAVY,
    bullets: [
      "Distribuye los eventos del UNS hacia otras aplicaciones a medida que ocurren.",
      "Habilita alertas y reacciones automáticas sin esperar una carga por lote.",
    ],
  },
  llm: {
    kicker: "Consumidor de datos",
    title: "LLMs",
    bg: TEAL,
    rule: NAVY,
    bullets: [
      "Consultas en lenguaje natural sobre datos ya contextualizados.",
      "El modelo responde con la definición de KPI del UAF, no con interpretaciones sueltas.",
    ],
  },
  app: {
    kicker: "Consumidor de datos",
    title: "Aplicaciones de analítica",
    bg: TEAL,
    rule: NAVY,
    bullets: [
      "Seeq y herramientas equivalentes para el análisis diario de proceso.",
      "El equipo de planta trabaja sobre el mismo dato que usa el negocio.",
      "Agregar una aplicación nueva no exige tocar la planta.",
    ],
  },
};

function getCamera(zoom: NodeKey | null) {
  if (!zoom) return "translate(0px,0px) scale(1)";
  const right = SIDE[zoom] === "r";
  const vb: [number, number, number, number] = right
    ? [40, 60, 1000, 900]
    : [604, 60, 1000, 900];
  const fr = FOCUS[zoom];
  const k = Math.min(1.8, Math.min(vb[2] / fr[2], vb[3] / fr[3]));
  const tx = vb[0] - fr[0] * k + (vb[2] - fr[2] * k) / 2;
  const ty = vb[1] - fr[1] * k + (vb[3] - fr[3] * k) / 2;
  return `translate(${tx.toFixed(1)}px,${ty.toFixed(1)}px) scale(${k.toFixed(4)})`;
}

function getPanel(zoom: NodeKey | null) {
  if (!zoom) return null;
  const right = SIDE[zoom] === "r";
  const info = INFO[zoom];
  return {
    left: right ? 1116 : 72,
    bg: info.bg,
    rule: info.rule,
    kicker: info.kicker,
    title: info.title,
    bullets: info.bullets,
  };
}

function IconServer() {
  return (
    <svg
      viewBox="0 0 24 24"
      style={{ width: 17, height: 17, flex: "0 0 17px", display: "block" }}
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </svg>
  );
}

function IconTrend() {
  return (
    <svg
      viewBox="0 0 24 24"
      style={{ width: 17, height: 17, flex: "0 0 17px", display: "block" }}
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 18l5-6 4 3 5-7 4 4" />
      <path d="M3 21h18" />
    </svg>
  );
}

function IconBuilding() {
  return (
    <svg
      viewBox="0 0 24 24"
      style={{ width: 17, height: 17, flex: "0 0 17px", display: "block" }}
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 21V7l8-4 8 4v14" />
      <path d="M9 21v-6h6v6" />
      <path d="M4 12h16" />
    </svg>
  );
}

function IconWrench() {
  return (
    <svg
      viewBox="0 0 24 24"
      style={{ width: 17, height: 17, flex: "0 0 17px", display: "block" }}
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15.5 3.5a5 5 0 0 0-6.2 6.6L3.6 15.8a2 2 0 1 0 2.8 2.8l5.7-5.7a5 5 0 0 0 6.6-6.2l-3.1 3.1-2.5-.5-.5-2.5z" />
    </svg>
  );
}

function IconGateway() {
  return (
    <svg
      viewBox="0 0 24 24"
      style={{ width: 17, height: 17, flex: "0 0 17px", display: "block" }}
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <circle cx="5" cy="5" r="2" />
      <circle cx="19" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <circle cx="19" cy="19" r="2" />
      <path d="M6.5 6.5l3.3 3.3M17.5 6.5l-3.3 3.3M6.5 17.5l3.3-3.3M17.5 17.5l-3.3-3.3" />
    </svg>
  );
}

function IconMqtt() {
  return (
    <svg
      viewBox="0 0 24 24"
      style={{ width: 17, height: 17, flex: "0 0 17px", display: "block" }}
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 18a4 4 0 0 1 .6-8 5.5 5.5 0 0 1 10.5 1.6A3.5 3.5 0 0 1 17.5 18z" />
    </svg>
  );
}

function IconOpc() {
  return (
    <svg
      viewBox="0 0 24 24"
      style={{ width: 17, height: 17, flex: "0 0 17px", display: "block" }}
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="6" rx="1" />
      <rect x="3" y="14" width="18" height="6" rx="1" />
      <path d="M7 7h.01M7 17h.01" />
    </svg>
  );
}

function IconDw() {
  return (
    <svg
      viewBox="0 0 24 24"
      style={{ width: 17, height: 17, flex: "0 0 17px", display: "block" }}
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9l9-5 9 5v11H3z" />
      <path d="M3 13h18M3 17h18" />
    </svg>
  );
}

function IconStream() {
  return (
    <svg
      viewBox="0 0 24 24"
      style={{ width: 17, height: 17, flex: "0 0 17px", display: "block" }}
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12c3-5 6 5 9 0s6-5 9 0" />
      <path d="M3 18c3-5 6 5 9 0s6-5 9 0" />
    </svg>
  );
}

function IconBrain() {
  return (
    <svg
      viewBox="0 0 24 24"
      style={{ width: 17, height: 17, flex: "0 0 17px", display: "block" }}
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="8" />
      <path d="M12 4c3 3 3 13 0 16M12 4c-3 3-3 13 0 16M4.5 9h15M4.5 15h15" />
    </svg>
  );
}

function IconChart() {
  return (
    <svg
      viewBox="0 0 24 24"
      style={{ width: 17, height: 17, flex: "0 0 17px", display: "block" }}
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="13" rx="1.5" />
      <path d="M8 21h8M12 17v4" />
      <path d="M7.5 13l2.5-3 2.5 2 3-4" />
    </svg>
  );
}

interface CardProps {
  left: number;
  top: number;
  width: number;
  height: number;
  color: string;
  icon: React.ReactNode;
  label: string;
  opacity: number;
  onEnter: () => void;
  onLeave: () => void;
  onPick: () => void;
  children: React.ReactNode;
  imgPad?: string;
  imgJustify?: string;
  imgGap?: number;
}

const Card = ({
  left,
  top,
  width,
  height,
  color,
  icon,
  label,
  opacity,
  onEnter,
  onLeave,
  onPick,
  children,
  imgPad = "6px 14px",
  imgJustify = "space-around",
  imgGap = 12,
}: CardProps) => {
  const isNavy = color === NAVY;
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onPick}
      className={
        "absolute flex cursor-zoom-in flex-col border-[1.5px] border-[#c9cad3] bg-white transition-[opacity,border-color,box-shadow] duration-200 " +
        (isNavy
          ? "hover:border-[#191A55] hover:shadow-[0_6px_20px_rgba(25,26,85,.14)]"
          : "hover:border-[#4A4C9E] hover:shadow-[0_6px_20px_rgba(74,76,158,.16)]")
      }
      style={{ left, top, width, height, opacity }}
    >
      <div
        style={{
          background: color,
          color: "#ffffff",
          padding: "7px 12px",
          fontFamily: FONT_MONTSERRAT,
          fontWeight: 700,
          fontSize: 14,
          letterSpacing: ".04em",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        {icon}
        <span>{label}</span>
      </div>
      <div
        style={{
          flex: 1,
          minHeight: 0,
          padding: imgPad,
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: imgJustify,
          gap: imgGap,
        }}
      >
        {children}
      </div>
    </div>
  );
};

interface HubProps {
  left: number;
  top: number;
  color: string;
  opacity: number;
  onEnter: () => void;
  onLeave: () => void;
  onPick: () => void;
  children: React.ReactNode;
}

const Hub = ({ left, top, color, opacity, onEnter, onLeave, onPick, children }: HubProps) => {
  const isNavy = color === NAVY;
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onPick}
      className={
        "absolute flex cursor-zoom-in flex-col items-center justify-center gap-1.5 rounded-full transition-[opacity,box-shadow] duration-200 " +
        (isNavy
          ? "hover:shadow-[0_0_0_10px_rgba(25,26,85,.10)]"
          : "hover:shadow-[0_0_0_10px_rgba(74,76,158,.12)]")
      }
      style={{
        left,
        top,
        width: 300,
        height: 300,
        border: `4px solid ${color}`,
        background: `radial-gradient(circle at 50% 40%,#ffffff 58%,${isNavy ? "#e7e9f4" : "#e2f1f2"} 100%)`,
        padding: 26,
        boxSizing: "border-box",
        opacity,
      }}
    >
      {children}
    </div>
  );
};

const DIAGRAM_WIDTH = 1640;
const DIAGRAM_HEIGHT = 1020;

export const UnsArchitectureDiagram = () => {
  const [hover, setHover] = useState<NodeKey | null>(null);
  const [zoom, setZoom] = useState<NodeKey | null>(null);
  const [curtain, setCurtain] = useState(true);
  const [opening, setOpening] = useState(false);
  const curtainTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const curtainRef = useRef(curtain);
  const openingRef = useRef(opening);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    curtainRef.current = curtain;
  }, [curtain]);
  useEffect(() => {
    openingRef.current = opening;
  }, [opening]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoom(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      if (curtainTimeout.current) clearTimeout(curtainTimeout.current);
    };
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (curtainTimeout.current) clearTimeout(curtainTimeout.current);
        if (entry.isIntersecting) {
          if (curtainRef.current && !openingRef.current) {
            setOpening(true);
            curtainTimeout.current = setTimeout(() => setCurtain(false), 1250);
          }
        } else {
          setOpening(false);
          setCurtain(true);
          setZoom(null);
          setHover(null);
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hv = zoom ?? hover;
  const lit = new Set<NodeKey>();
  if (hv) {
    lit.add(hv);
    EDGES.forEach(([a, b]) => {
      if (a === hv) lit.add(b);
      if (b === hv) lit.add(a);
    });
  }
  const opacity = (n: NodeKey) => (hv ? (lit.has(n) ? 1 : 0.14) : 1);
  const edgeOpacity = (a: NodeKey, b: NodeKey) =>
    hv ? (a === hv || b === hv ? 1 : 0.06) : 1;

  const handleEnter = (n: NodeKey) => {
    if (!zoom) setHover(n);
  };
  const handleLeave = () => setHover(null);
  const handlePick = (n: NodeKey) => {
    setZoom(n);
    setHover(null);
  };
  const handleReset = () => setZoom(null);
  const handleOpen = () => {
    if (opening || !curtain) return;
    setOpening(true);
    curtainTimeout.current = setTimeout(() => setCurtain(false), 1250);
  };

  const cam = getCamera(zoom);
  const panel = getPanel(zoom);
  const idle = !zoom;
  const curtL = opening ? "unsEvCurtL 1.15s cubic-bezier(.72,0,.24,1) both" : "none";
  const curtR = opening ? "unsEvCurtR 1.15s cubic-bezier(.72,0,.24,1) both" : "none";
  const curtFade = opening ? "unsEvCurtFade .4s ease-out both" : "none";

  return (
    <div
      ref={rootRef}
      className={`${montserrat.variable} ${barlow.variable} ${barlowCondensed.variable}`}
      style={{
        width: DIAGRAM_WIDTH,
        height: DIAGRAM_HEIGHT,
        position: "relative",
        background: "#ffffff",
        fontFamily: FONT_BARLOW,
        color: "#22232e",
        overflow: "hidden",
        borderRadius: 16,
      }}
    >
      <style>{`
        @keyframes unsEvIn { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:none; } }
        @keyframes unsEvCurtL { from { transform:translateX(0); } to { transform:translateX(-100.5%); } }
        @keyframes unsEvCurtR { from { transform:translateX(0); } to { transform:translateX(100.5%); } }
        @keyframes unsEvCurtFade { from { opacity:1; } to { opacity:0; } }
      `}</style>

      <div
        style={{
          position: "absolute",
          inset: 0,
          width: DIAGRAM_WIDTH,
          height: DIAGRAM_HEIGHT,
          transform: cam,
          transformOrigin: "0 0",
          transition: "transform .9s cubic-bezier(.22,.9,.22,1)",
          willChange: "transform",
        }}
      >
        <svg
          viewBox="0 0 1640 1020"
          style={{
            position: "absolute",
            inset: 0,
            width: 1640,
            height: 1020,
            pointerEvents: "none",
          }}
        >
          <defs>
            <marker
              id="uns-ah"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M0 0 L10 5 L0 10 z" fill="#191A55" />
            </marker>
            <marker
              id="uns-at"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M0 0 L10 5 L0 10 z" fill="#4A4C9E" />
            </marker>
          </defs>
          <g fill="none" stroke="#191A55" strokeWidth="2.4" markerEnd="url(#uns-ah)">
            <path d="M404 125 C 560 125, 640 260, 762 300" style={{ opacity: edgeOpacity("sql", "uaf") }} />
            <path d="M404 255 C 560 255, 640 290, 762 312" style={{ opacity: edgeOpacity("ts", "uaf") }} />
            <path d="M404 385 C 560 385, 640 350, 762 328" style={{ opacity: edgeOpacity("erp", "uaf") }} />
            <path d="M404 515 C 560 515, 640 400, 762 342" style={{ opacity: edgeOpacity("eam", "uaf") }} />
          </g>
          <g fill="none" stroke="#4A4C9E" strokeWidth="2.4" markerEnd="url(#uns-at)" markerStart="url(#uns-at)">
            <path d="M404 645 C 560 645, 640 680, 762 692" style={{ opacity: edgeOpacity("iot", "uns") }} />
            <path d="M404 775 C 560 775, 640 740, 762 710" style={{ opacity: edgeOpacity("mqtt", "uns") }} />
            <path d="M404 905 C 560 905, 640 800, 762 730" style={{ opacity: edgeOpacity("opc", "uns") }} />
          </g>
          <g fill="none" stroke="#191A55" strokeWidth="2.4" strokeDasharray="8 7" markerEnd="url(#uns-ah)">
            <path d="M1078 300 C 1120 250, 1140 215, 1196 215" style={{ opacity: edgeOpacity("uaf", "dw") }} />
            <path d="M1078 316 C 1130 330, 1150 410, 1196 410" style={{ opacity: edgeOpacity("uaf", "kafka") }} />
            <path d="M1078 332 C 1140 430, 1150 580, 1196 605" style={{ opacity: edgeOpacity("uaf", "llm") }} />
            <path d="M1078 348 C 1150 520, 1150 770, 1196 800" style={{ opacity: edgeOpacity("uaf", "app") }} />
          </g>
          <g fill="none" stroke="#4A4C9E" strokeWidth="2.4" strokeDasharray="8 7" markerEnd="url(#uns-at)">
            <path d="M1078 682 C 1150 520, 1150 250, 1196 231" style={{ opacity: edgeOpacity("uns", "dw") }} />
            <path d="M1078 698 C 1140 580, 1150 430, 1196 426" style={{ opacity: edgeOpacity("uns", "kafka") }} />
            <path d="M1078 714 C 1130 680, 1150 625, 1196 621" style={{ opacity: edgeOpacity("uns", "llm") }} />
            <path d="M1078 730 C 1120 780, 1140 816, 1196 816" style={{ opacity: edgeOpacity("uns", "app") }} />
          </g>
          <g strokeWidth="3" stroke="#191A55" fill="none" markerEnd="url(#uns-ah)" style={{ opacity: edgeOpacity("uaf", "uns") }}>
            <path d="M900 556 L900 478" />
            <path d="M940 478 L940 556" />
          </g>
        </svg>

        <img
          src="/uns/logos/evolutek.svg"
          alt=""
          style={{
            position: "absolute",
            left: 560,
            top: 430,
            width: 520,
            opacity: 0.05,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 104,
            bottom: 14,
            fontFamily: FONT_BARLOW_CONDENSED,
            fontWeight: 600,
            fontSize: 12,
            letterSpacing: ".16em",
            textTransform: "uppercase",
            color: "#9a9bab",
          }}
        >
          © EVOLUTEK S.R.L. · evolutek.pe
        </div>
        <div
          style={{
            position: "absolute",
            left: 22,
            top: 60,
            width: 48,
            height: 900,
            borderRadius: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#191A55",
          }}
        >
          <div
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              fontFamily: FONT_MONTSERRAT,
              fontWeight: 800,
              fontSize: 21,
              letterSpacing: ".06em",
              color: "#ffffff",
            }}
          >
            PRODUCTORES DE DATOS Y SILOS
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            left: 1570,
            top: 60,
            width: 48,
            height: 900,
            borderRadius: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#4A4C9E",
          }}
        >
          <div
            style={{
              writingMode: "vertical-rl",
              fontFamily: FONT_MONTSERRAT,
              fontWeight: 800,
              fontSize: 21,
              letterSpacing: ".06em",
              color: "#ffffff",
            }}
          >
            CONSUMIDORES DE DATOS
          </div>
        </div>

        <Card
          left={104}
          top={70}
          width={300}
          height={120}
          color="#191A55"
          icon={<IconServer />}
          label="RELACIONAL SQL"
          opacity={opacity("sql")}
          onEnter={() => handleEnter("sql")}
          onLeave={handleLeave}
          onPick={() => handlePick("sql")}
        >
          <img src="/uns/logos/sqlserver.svg" alt="" style={{ display: "block", height: 58, width: "auto", objectFit: "contain" }} />
          <img src="/uns/logos/mysql.svg" alt="" style={{ display: "block", height: 52, width: "auto", objectFit: "contain" }} />
          <img src="/uns/logos/postgresql.svg" alt="" style={{ display: "block", height: 58, width: "auto", objectFit: "contain" }} />
        </Card>

        <Card
          left={104}
          top={200}
          width={300}
          height={120}
          color="#191A55"
          icon={<IconTrend />}
          label="TIME SERIES / HISTORIAN"
          opacity={opacity("ts")}
          onEnter={() => handleEnter("ts")}
          onLeave={handleLeave}
          onPick={() => handlePick("ts")}
          imgJustify="center"
        >
          <img src="/uns/logos/canary.svg" alt="" style={{ display: "block", maxWidth: "100%", maxHeight: 58, width: "auto", height: "auto", objectFit: "contain" }} />
        </Card>

        <Card
          left={104}
          top={330}
          width={300}
          height={120}
          color="#191A55"
          icon={<IconBuilding />}
          label="ERP"
          opacity={opacity("erp")}
          onEnter={() => handleEnter("erp")}
          onLeave={handleLeave}
          onPick={() => handlePick("erp")}
          imgGap={16}
        >
          <img src="/uns/logos/sap.svg" alt="" style={{ display: "block", height: 62, width: "auto", objectFit: "contain" }} />
          <img src="/uns/logos/oracle.svg" alt="" style={{ display: "block", height: 22, width: "auto", objectFit: "contain" }} />
        </Card>

        <Card
          left={104}
          top={460}
          width={300}
          height={120}
          color="#191A55"
          icon={<IconWrench />}
          label="EAM & CMMS"
          opacity={opacity("eam")}
          onEnter={() => handleEnter("eam")}
          onLeave={handleLeave}
          onPick={() => handlePick("eam")}
          imgJustify="center"
          imgPad="4px 10px"
        >
          <img src="/uns/logos/eam-cmms.jpeg" alt="" style={{ display: "block", maxHeight: "100%", maxWidth: "100%", width: "auto", objectFit: "contain" }} />
        </Card>

        <Card
          left={104}
          top={590}
          width={300}
          height={120}
          color="#4A4C9E"
          icon={<IconGateway />}
          label="IOT GATEWAYS"
          opacity={opacity("iot")}
          onEnter={() => handleEnter("iot")}
          onLeave={handleLeave}
          onPick={() => handlePick("iot")}
          imgJustify="center"
          imgPad="4px 10px"
        >
          <img src="/uns/logos/iot-gateways.jpeg" alt="" style={{ display: "block", maxHeight: "100%", maxWidth: "100%", width: "auto", objectFit: "contain" }} />
        </Card>

        <Card
          left={104}
          top={720}
          width={300}
          height={120}
          color="#4A4C9E"
          icon={<IconMqtt />}
          label="MQTT BROKERS"
          opacity={opacity("mqtt")}
          onEnter={() => handleEnter("mqtt")}
          onLeave={handleLeave}
          onPick={() => handlePick("mqtt")}
          imgJustify="center"
          imgPad="4px 10px"
        >
          <img src="/uns/logos/mqtt-brokers.jpeg" alt="" style={{ display: "block", maxHeight: "100%", maxWidth: "100%", width: "auto", objectFit: "contain" }} />
        </Card>

        <Card
          left={104}
          top={850}
          width={300}
          height={120}
          color="#4A4C9E"
          icon={<IconOpc />}
          label="OPC SERVERS"
          opacity={opacity("opc")}
          onEnter={() => handleEnter("opc")}
          onLeave={handleLeave}
          onPick={() => handlePick("opc")}
          imgJustify="center"
          imgPad="2px 8px"
        >
          <img src="/uns/logos/kepware-light.png" alt="" style={{ display: "block", maxHeight: "100%", maxWidth: "100%", width: "auto", objectFit: "contain" }} />
        </Card>

        <Hub
          left={770}
          top={170}
          color={NAVY}
          opacity={opacity("uaf")}
          onEnter={() => handleEnter("uaf")}
          onLeave={handleLeave}
          onPick={() => handlePick("uaf")}
        >
          <div
            style={{
              width: 196,
              height: 70,
              flex: "0 0 70px",
              background: "#191A55",
              borderRadius: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px 14px",
              boxSizing: "border-box",
            }}
          >
            <img src="/uns/logos/flow-software.png" alt="" style={{ display: "block", maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
          </div>
          <div style={{ fontFamily: FONT_MONTSERRAT, fontWeight: 800, fontSize: 30, letterSpacing: ".04em", color: "#191A55" }}>UAF</div>
          <div style={{ fontFamily: FONT_BARLOW_CONDENSED, fontWeight: 600, fontSize: 15, letterSpacing: ".1em", textTransform: "uppercase", color: "#5a5b66", textAlign: "center", lineHeight: 1.2 }}>
            Unified Analytics
            <br />
            Framework
          </div>
        </Hub>

        <Hub
          left={770}
          top={560}
          color={TEAL}
          opacity={opacity("uns")}
          onEnter={() => handleEnter("uns")}
          onLeave={handleLeave}
          onPick={() => handlePick("uns")}
        >
          <div style={{ width: 206, flex: "0 0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 9 }}>
            <img src="/uns/logos/ignition.png" alt="" style={{ display: "block", height: 30, width: "auto" }} />
            <img src="/uns/logos/n3uron.svg" alt="" style={{ display: "block", height: 22, width: "auto" }} />
            <img src="/uns/logos/highbyte.webp" alt="" style={{ display: "block", height: 20, width: "auto" }} />
          </div>
          <div style={{ fontFamily: FONT_MONTSERRAT, fontWeight: 800, fontSize: 30, letterSpacing: ".04em", color: "#4A4C9E" }}>UNS</div>
          <div style={{ fontFamily: FONT_BARLOW_CONDENSED, fontWeight: 600, fontSize: 15, letterSpacing: ".1em", textTransform: "uppercase", color: "#5a5b66", textAlign: "center", lineHeight: 1.2 }}>
            Unified Namespace
            <br />
            Tiempo real
          </div>
        </Hub>

        <Card
          left={1200}
          top={150}
          width={320}
          height={150}
          color="#4A4C9E"
          icon={<IconDw />}
          label="DATA WAREHOUSE"
          opacity={opacity("dw")}
          onEnter={() => handleEnter("dw")}
          onLeave={handleLeave}
          onPick={() => handlePick("dw")}
          imgJustify="center"
          imgPad="8px 16px"
        >
          <img src="/uns/logos/snowflake.svg" alt="" style={{ display: "block", maxHeight: "100%", maxWidth: "100%", width: "auto", objectFit: "contain" }} />
        </Card>

        <Card
          left={1200}
          top={345}
          width={320}
          height={150}
          color="#4A4C9E"
          icon={<IconStream />}
          label="STREAMING"
          opacity={opacity("kafka")}
          onEnter={() => handleEnter("kafka")}
          onLeave={handleLeave}
          onPick={() => handlePick("kafka")}
          imgJustify="center"
          imgPad="8px 16px"
        >
          <img src="/uns/logos/kafka-streams.jpeg" alt="" style={{ display: "block", maxHeight: "100%", maxWidth: "100%", width: "auto", objectFit: "contain" }} />
        </Card>

        <Card
          left={1200}
          top={540}
          width={320}
          height={150}
          color="#4A4C9E"
          icon={<IconBrain />}
          label="LLMS"
          opacity={opacity("llm")}
          onEnter={() => handleEnter("llm")}
          onLeave={handleLeave}
          onPick={() => handlePick("llm")}
          imgPad="6px 14px"
          imgGap={10}
        >
          <img src="/uns/logos/openai.svg" alt="" style={{ display: "block", height: 52, width: "auto", objectFit: "contain" }} />
          <img src="/uns/logos/claude.svg" alt="" style={{ display: "block", height: 52, width: "auto", objectFit: "contain" }} />
          <img src="/uns/logos/gemini.svg" alt="" style={{ display: "block", height: 52, width: "auto", objectFit: "contain" }} />
          <img src="/uns/logos/grok.svg" alt="" style={{ display: "block", height: 52, width: "auto", objectFit: "contain" }} />
        </Card>

        <Card
          left={1200}
          top={735}
          width={320}
          height={150}
          color="#4A4C9E"
          icon={<IconChart />}
          label="APLICACIONES DE ANALÍTICA"
          opacity={opacity("app")}
          onEnter={() => handleEnter("app")}
          onLeave={handleLeave}
          onPick={() => handlePick("app")}
          imgJustify="center"
          imgPad="10px 18px"
        >
          <img src="/uns/logos/seeq.png" alt="" style={{ display: "block", maxHeight: "100%", maxWidth: "100%", width: "auto", objectFit: "contain" }} />
        </Card>
      </div>

      {panel && (
        <div
          style={{
            position: "absolute",
            left: panel.left,
            top: 224,
            width: 452,
            boxSizing: "border-box",
            background: panel.bg,
            color: "#ffffff",
            padding: "30px 34px",
            boxShadow: "0 22px 50px rgba(25,26,85,.30)",
            zIndex: 6,
            animation: "unsEvIn .5s cubic-bezier(.2,.7,.3,1) both",
          }}
        >
          <div style={{ fontFamily: FONT_BARLOW_CONDENSED, fontWeight: 700, fontSize: 13, letterSpacing: ".2em", textTransform: "uppercase", opacity: 0.78 }}>
            {panel.kicker}
          </div>
          <div style={{ marginTop: 10, fontFamily: FONT_MONTSERRAT, fontWeight: 700, fontSize: 30, lineHeight: 1.15, letterSpacing: "-.01em" }}>
            {panel.title}
          </div>
          <div style={{ marginTop: 16, width: 56, height: 4, background: panel.rule }} />
          <div style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 14, fontSize: 18, lineHeight: 1.45 }}>
            {panel.bullets.map((b, i) => (
              <div key={i} style={{ display: "flex", gap: 13 }}>
                <div style={{ width: 7, height: 7, flex: "0 0 7px", marginTop: 9, background: panel.rule, transform: "rotate(45deg)" }} />
                <div>{b}</div>
              </div>
            ))}
          </div>
          <button
            onClick={handleReset}
            className="mt-[26px] inline-flex cursor-pointer items-center gap-[10px] border-[1.5px] border-white/35 px-5 text-[15px] font-semibold transition-all duration-200 hover:border-white hover:bg-white hover:text-[#191A55]"
            style={{ height: 46, fontFamily: FONT_MONTSERRAT }}
          >
            <span style={{ fontWeight: 400 }}>←</span>Ver arquitectura completa
          </button>
        </div>
      )}

      {curtain && (
        <div
          onClick={handleOpen}
          style={{ position: "absolute", inset: 0, zIndex: 30, cursor: "pointer", overflow: "hidden" }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "50.2%",
              height: DIAGRAM_HEIGHT,
              background: "#191A55",
              borderRight: "1.5px solid rgba(255,255,255,.35)",
              animation: curtL,
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              width: "50.2%",
              height: DIAGRAM_HEIGHT,
              background: "#191A55",
              borderLeft: "1.5px solid rgba(255,255,255,.35)",
              animation: curtR,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 48,
              pointerEvents: "none",
              animation: curtFade,
            }}
          >
            <svg viewBox="0 0 512 130" style={{ display: "block", height: 96, width: "auto" }} role="img" aria-label="Evolutek">
              <circle cx="62" cy="65" r="56" fill="#ffffff" />
              <path
                d="M29.5 73.5 C25.5 72 24.3 68 24.3 60 C24.3 51.5 30 48 38 48 C40.5 39 49.5 31.6 61.9 31.6 C74.3 31.6 83.3 39 85.8 48 C93.8 48 99.5 51.5 99.5 60 C99.5 68 98.3 72 94.3 73.5"
                fill="none"
                stroke="#191A55"
                strokeWidth="9.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g fill="none" stroke="#191A55" strokeWidth="10.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M61.8 52.5 V84" />
                <path d="M47.9 68 L61.8 84 L75.7 68" />
              </g>
              <circle cx="40.7" cy="98.5" r="6.9" fill="#191A55" />
              <circle cx="61.8" cy="98.5" r="6.9" fill="#191A55" />
              <circle cx="82.8" cy="98.5" r="6.9" fill="#191A55" />
              <text x="128" y="70" fill="#ffffff" fontFamily="var(--font-uns-montserrat), sans-serif" fontWeight="800" fontSize="83" textLength="378" lengthAdjust="spacingAndGlyphs">
                EVOLUTEK
              </text>
              <text x="130" y="110" fill="#9FA1D4" fontFamily="var(--font-uns-barlow), sans-serif" fontWeight="400" fontSize="26" letterSpacing="1.2" textLength="372" lengthAdjust="spacing">
                TECNOLOGIA E INDUSTRIA 4.0
              </text>
            </svg>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
              <div style={{ width: 1.5, height: 56, background: "linear-gradient(to bottom, rgba(255,255,255,0), rgba(159,161,212,.65))" }} />
              <div
                style={{
                  fontFamily: FONT_BARLOW_CONDENSED,
                  fontWeight: 600,
                  fontSize: 17,
                  letterSpacing: ".26em",
                  textTransform: "uppercase",
                  color: "#9FA1D4",
                }}
              >
                Haga clic para abrir
              </div>
            </div>
          </div>
        </div>
      )}

      {idle && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: 44,
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            gap: 12,
            background: "#ffffff",
            border: "1.5px solid rgba(25,26,85,.14)",
            padding: "12px 22px",
            fontFamily: FONT_BARLOW_CONDENSED,
            fontWeight: 600,
            fontSize: 15,
            letterSpacing: ".14em",
            textTransform: "uppercase",
            color: "#5a5b66",
            zIndex: 6,
          }}
        >
          <div style={{ width: 8, height: 8, background: "#4A4C9E", transform: "rotate(45deg)" }} />
          Presione cualquier bloque para ver su detalle
        </div>
      )}
    </div>
  );
};

const MOBILE_GROUPS: { heading: string; keys: NodeKey[] }[] = [
  { heading: "Productores de datos y silos", keys: ["sql", "ts", "erp", "eam"] },
  { heading: "Productores en tiempo real", keys: ["iot", "mqtt", "opc"] },
  { heading: "Capa de integración", keys: ["uaf", "uns"] },
  { heading: "Consumidores de datos", keys: ["dw", "kafka", "llm", "app"] },
];

const MOBILE_ICONS: Record<NodeKey, () => React.JSX.Element> = {
  sql: IconServer,
  ts: IconTrend,
  erp: IconBuilding,
  eam: IconWrench,
  iot: IconGateway,
  mqtt: IconMqtt,
  opc: IconOpc,
  uaf: IconServer,
  uns: IconGateway,
  dw: IconDw,
  kafka: IconStream,
  llm: IconBrain,
  app: IconChart,
};

const MobileAccordionItem = ({
  nodeKey,
  isOpen,
  onToggle,
}: {
  nodeKey: NodeKey;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const info = INFO[nodeKey];
  const Icon = MOBILE_ICONS[nodeKey];

  return (
    <div className="overflow-hidden rounded-xl border border-black/10 bg-white">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-3 px-4 py-3 text-left"
      >
        <span
          className="flex size-9 shrink-0 items-center justify-center rounded-lg"
          style={{ background: info.bg }}
        >
          <Icon />
        </span>
        <span className="min-w-0 flex-1">
          <span className="text-foreground block text-sm font-semibold">
            {info.title}
          </span>
          <span className="text-muted-foreground block text-xs">
            {info.kicker}
          </span>
        </span>
        <ChevronDown
          className={cn(
            "text-muted-foreground size-4 shrink-0 transition-transform duration-200",
            isOpen && "rotate-180",
          )}
        />
      </button>
      {isOpen && (
        <div className="border-t border-black/10 px-4 pt-3 pb-4">
          <div
            className="h-1 w-10 rounded-full"
            style={{ background: info.rule }}
          />
          <ul className="text-muted-foreground mt-3 space-y-2 text-sm leading-relaxed">
            {info.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-2">
                <span
                  className="mt-1.5 size-1.5 shrink-0 rotate-45"
                  style={{ background: info.rule }}
                />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export const MobileUnsDiagram = () => {
  const [openKey, setOpenKey] = useState<NodeKey | null>(null);

  return (
    <div className="flex flex-col gap-6">
      <p className="text-muted-foreground text-sm">
        Toca cada bloque para ver su función en la arquitectura.
      </p>
      {MOBILE_GROUPS.map((group) => (
        <div key={group.heading}>
          <div className="text-muted-foreground mb-2 text-xs font-semibold tracking-widest uppercase">
            {group.heading}
          </div>
          <div className="flex flex-col gap-2">
            {group.keys.map((key) => (
              <MobileAccordionItem
                key={key}
                nodeKey={key}
                isOpen={openKey === key}
                onToggle={() => setOpenKey((prev) => (prev === key ? null : key))}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export const ScaledUnsDiagram = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const width = el.offsetWidth;
      setScale(width / DIAGRAM_WIDTH);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-2xl"
      style={{
        height: DIAGRAM_HEIGHT * scale,
        boxShadow:
          "0 30px 80px -20px rgba(25,26,85,.45), 0 0 140px -25px rgba(74,76,158,.45), 0 8px 30px -10px rgba(25,26,85,.25), 0 0 0 1px rgba(255,255,255,.08)",
      }}
    >
      <div
        style={{
          width: DIAGRAM_WIDTH,
          height: DIAGRAM_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        <UnsArchitectureDiagram />
      </div>
    </div>
  );
};
