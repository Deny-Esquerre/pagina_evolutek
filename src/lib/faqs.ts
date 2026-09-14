export const categorizedFaqs = [
  {
    category: "Soluciones",
    icon: null,
    faqs: [
      {
        question: "¿Qué tipo de soluciones ofrece EVOLUTEK?",
        answer:
          "Ofrecemos automatización industrial, IoT, Industria 4.0, integración IT/OT, gestión de datos industriales y fiscalización de hidrocarburos. Nuestras soluciones cubren desde la instrumentación y el control en planta hasta la analítica y visualización de datos para la toma de decisiones, adaptándose a la realidad operativa de cada cliente.",
      },
      {
        question: "¿Qué es la integración IT/OT?",
        answer:
          "Es conectar el mundo de la operación industrial (PLC, SCADA, instrumentación, sistemas de control) con los sistemas de información de negocio (ERP, BI, cloud). Esta convergencia elimina silos de información, evita la duplicidad de trabajo manual y permite que los datos de planta fluyan de forma segura y contextualizada hacia donde generan valor: reportes, análisis y decisiones estratégicas.",
      },
      {
        question: "¿Cómo funciona el ciclo del dato industrial?",
        answer:
          "Seguimos un ciclo integral: capturamos el dato desde el campo, lo conectamos e integramos entre sistemas, lo contextualizamos con información de negocio, lo historizamos para análisis futuros, y finalmente lo analizamos y visualizamos en dashboards o reportes. Este enfoque asegura que cada dato tenga trazabilidad y contexto antes de convertirse en una decisión.",
      },
      {
        question:
          "¿Qué beneficios obtiene mi empresa al implementar estas soluciones?",
        answer:
          "Mayor visibilidad en tiempo real de tus procesos, reducción de tiempos muertos y fallas no planificadas, decisiones basadas en datos confiables en lugar de suposiciones, y una base tecnológica escalable que crece junto con tu operación sin necesidad de reemplazar toda tu infraestructura existente.",
      },
    ],
  },
  {
    category: "Industrias",
    icon: null,
    faqs: [
      {
        question: "¿En qué industrias trabaja EVOLUTEK?",
        answer:
          "Atendemos principalmente los sectores de Oil & Gas, Energía, Minería, Manufactura, Agroindustria e Industria pesquera. En cada uno de estos sectores aplicamos nuestro conocimiento en automatización, datos y control de procesos a los retos específicos de la operación, ya sea en campo, planta o centros de control.",
      },
      {
        question: "¿Tienen experiencia en fiscalización de hidrocarburos?",
        answer:
          "Sí, es una de nuestras áreas especializadas. Cubrimos medición fiscal, mantenimiento preventivo, correctivo y predictivo de sistemas de medición, diseño y soporte de puntos de fiscalización de gas y líquidos, y acompañamiento técnico especializado durante todo el ciclo de vida del sistema, cumpliendo con la normativa y estándares del sector.",
      },
      {
        question: "¿Trabajan con empresas fuera de Perú?",
        answer:
          "Sí, contamos con experiencia profesional en proyectos ejecutados en Perú, Bolivia y Brasil, lo que nos ha permitido adaptarnos a distintos marcos regulatorios, condiciones operativas y equipos de trabajo en la región.",
      },
      {
        question:
          "¿Solo trabajan con grandes empresas o también con operaciones más pequeñas?",
        answer:
          "Trabajamos con operaciones de distintos tamaños. Adaptamos el alcance del proyecto —desde una mejora puntual en un proceso hasta una plataforma completa de datos industriales— según la madurez tecnológica, el presupuesto y los objetivos de cada cliente.",
      },
    ],
  },
  {
    category: "Tecnología y experiencia",
    icon: null,
    faqs: [
      {
        question: "¿Con qué plataformas y tecnologías trabaja EVOLUTEK?",
        answer:
          "Trabajamos con plataformas especializadas en IoT, historización, DataOps y SCADA como N3uron, Canary, Kepware, HighByte, Flow Software, Tatsoft FrameWorX, Ignition y CygNet. La selección de la plataforma se define según los requerimientos técnicos, la infraestructura existente y los objetivos de cada proyecto, priorizando siempre la interoperabilidad.",
      },
      {
        question: "¿Dónde tiene presencia EVOLUTEK?",
        answer:
          "Operamos desde Talara, Piura, Perú, y contamos con experiencia profesional acumulada de más de 25 años en automatización industrial, control de procesos y transformación digital, lo que nos permite atender proyectos tanto locales como en otros países de la región.",
      },
      {
        question: "¿Qué arquitecturas manejan?",
        answer:
          "Diseñamos arquitecturas industriales modernas basadas en estándares y conceptos como ISA-95, el Modelo de Purdue, Unified Namespace, convergencia IT/OT, edge computing y cloud. Esto nos permite construir soluciones escalables, seguras y preparadas para crecer junto con las necesidades futuras de la operación.",
      },
      {
        question:
          "¿Necesito reemplazar mi infraestructura actual para trabajar con ustedes?",
        answer:
          "No necesariamente. Evaluamos primero los equipos, sistemas de control y sensores que ya tienes instalados para identificar qué se puede integrar o reutilizar. En muchos casos, la solución consiste en conectar e integrar lo existente antes de proponer inversiones en nuevo hardware o software.",
      },
    ],
  },
  {
    category: "Contacto y proyectos",
    icon: null,
    faqs: [
      {
        question: "¿Cómo empiezo un proyecto con EVOLUTEK?",
        answer:
          "Escríbenos a través de nuestro formulario de contacto contándonos el desafío de tu operación. Un especialista se pondrá en contacto contigo para entender tu contexto, evaluar el alcance del proyecto y proponerte los siguientes pasos, ya sea una visita técnica, un diagnóstico o una propuesta inicial.",
      },
      {
        question: "¿Ofrecen soluciones personalizadas?",
        answer:
          "Sí. No trabajamos con paquetes cerrados: diseñamos soluciones adaptadas a las necesidades específicas de cada cliente, desde la integración de equipos y señales puntuales hasta plataformas completas de datos industriales, ajustando el alcance y la tecnología a la realidad de cada operación.",
      },
      {
        question: "¿Cuánto tiempo toma implementar un proyecto?",
        answer:
          "El tiempo depende del alcance: una integración puntual o un piloto puede tomar pocas semanas, mientras que una plataforma completa de datos industriales o un proyecto de fiscalización puede tomar varios meses. Durante la etapa de evaluación inicial te damos un estimado de plazos según tus objetivos y la complejidad de tu operación.",
      },
      {
        question: "¿Ofrecen soporte y mantenimiento después de la implementación?",
        answer:
          "Sí, brindamos acompañamiento técnico posterior a la implementación, incluyendo mantenimiento preventivo, correctivo y predictivo, para asegurar que la solución siga funcionando correctamente y evolucione junto con las necesidades de tu operación.",
      },
    ],
  },
];

export type Faq = (typeof categorizedFaqs)[number]["faqs"][number];