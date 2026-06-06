export type Tema = {
  id: string;
  tema: string;
  titulo: string;
  comentarios: string;
  pdf: string;
  infografia?: string;
};

export const temas: Tema[] = [
  {
    id: "clase-01",
    tema: "Tema 01",
    titulo: "Administración y Ética Profesional en Arquitectura",
    comentarios:
      "Esta clase funciona como una introducción importante porque deja claro que la administración no es algo ajeno a la arquitectura, sino una parte básica del ejercicio profesional. En mi opinión, muchas veces se piensa que el arquitecto solo diseña o resuelve espacios, pero en realidad también debe saber organizar recursos, coordinar personas, tomar decisiones y controlar tiempos, costos y resultados. Por eso, la administración se vuelve una herramienta necesaria para que un proyecto no se quede solo en una idea, sino que pueda realizarse de forma ordenada y eficiente. También considero que la parte de ética profesional es fundamental, porque no basta con cumplir objetivos si estos se logran de manera incorrecta o poco transparente. En arquitectura, las decisiones tienen consecuencias reales sobre las personas, el dinero, la seguridad, la ciudad y el ambiente. Por eso, administrar bien implica no solo ser eficiente, sino también actuar con responsabilidad, honestidad y respeto. En conjunto, la administración y la ética ayudan a formar una práctica profesional más confiable, consciente y comprometida.",
    pdf: "/apuntes/clase-01-administracion-y-etico-en-arquitectura.pdf",
    infografia: "/infografias/clase-01-administracion-y-etico-en-arquitectura.webp",
  },
  {
    id: "clase-02",
    tema: "Tema 02",
    titulo: "Ética Profesional y Ejercicio del Arquitecto",
    comentarios:
      "Esta clase ayuda a entender que la arquitectura no puede verse únicamente como una actividad creativa o técnica, porque también tiene una dimensión ética y social muy fuerte. En mi opinión, el arquitecto trabaja con decisiones que afectan directamente a las personas, la ciudad, el medio ambiente y el patrimonio, por lo que no basta con saber proyectar o construir; también es necesario saber actuar con responsabilidad, honestidad y criterio profesional. Me parece importante que se hable de instituciones como ASINEA y CAMSAM porque muestran que la profesión no se ejerce de manera aislada. Existen códigos, asociaciones y organismos que buscan orientar tanto la formación académica como la práctica real del arquitecto. Esto permite entender que ser arquitecto implica pertenecer a un gremio, respetar normas, reconocer el trabajo de otros y asumir compromisos con la sociedad. En conjunto, la ética, los valores y la regulación profesional ayudan a que la arquitectura sea una práctica más consciente, justa y responsable.",
    pdf: "/apuntes/clase-02-etica-profesional-y-ejercicio-del-arquitecto.pdf",
    infografia: "/infografias/clase-02-etica-profesional-y-ejercicio-del-arquitecto.webp",
  },
  {
    id: "clase-03",
    tema: "Tema 03",
    titulo: "El Arquitecto como Administrador de Recursos",
    comentarios:
      "Esta clase me parece importante porque muestra que el arquitecto no puede limitarse únicamente a diseñar espacios, ya que en la práctica profesional también debe saber administrar personas, dinero, materiales, herramientas y tiempos. En mi opinión, esta parte es clave porque muchas veces un proyecto no falla por la idea arquitectónica, sino por una mala organización de recursos, falta de comunicación o poca claridad en los objetivos. También considero que la administración por objetivos es útil para arquitectura porque obliga a definir metas más concretas y no trabajar \"sobre la marcha\". Cuando los objetivos son específicos, medibles, realistas y tienen fecha límite, es más fácil saber qué se espera del equipo y cómo evaluar si el proyecto realmente avanza. Además, las relaciones humanas son igual de importantes, porque ningún proyecto se realiza de manera individual. El arquitecto necesita comunicarse con clientes, coordinar especialistas y resolver conflictos para que el resultado final sea funcional, ordenado y de calidad.",
    pdf: "/apuntes/clase-03-el-arquitecto-como-administrador-de-recursos.pdf",
    infografia: "/infografias/clase-03-el-arquitecto-como-administrador-de-recursos.webp",
  },
  {
    id: "clase-04",
    tema: "Tema 04",
    titulo: "El Arquitecto y las Empresas de la Arquitectura",
    comentarios:
      "Esta clase me parece importante porque amplía la idea de lo que puede hacer un arquitecto dentro del campo profesional. Muchas veces se piensa que el arquitecto trabaja únicamente en un despacho diseñando planos, pero en realidad puede participar en empresas de servicio, constructoras, dependencias públicas, asociaciones, concursos o incluso como promotor de proyectos inmobiliarios. Esto muestra que la arquitectura no es una profesión aislada, sino que se relaciona con la administración, la economía, la gestión, la normatividad y la ejecución material de las obras. En mi opinión, entender los tipos de empresas y modalidades de participación ayuda a tener una visión más realista del trabajo profesional. Un proyecto arquitectónico no depende solo de una buena idea, sino también de saber cómo se organiza, quién lo ejecuta, cómo se financia, qué riesgos existen y qué responsabilidades asume cada parte. También considero que la diferencia entre una empresa de servicio y una constructora es clave, porque permite distinguir entre asesorar, diseñar, gestionar y construir. Al final, esta clase deja claro que el arquitecto necesita conocer el funcionamiento de las empresas para poder integrarse mejor al mercado laboral y tomar decisiones más conscientes sobre su futuro profesional.",
    pdf: "/apuntes/clase-04-el-arquitecto-y-las-empresas-de-arquitectura.pdf",
    infografia: "/infografias/clase-04-el-arquitecto-y-las-empresas-de-arquitectura.webp",
  },
  {
    id: "clase-05",
    tema: "Tema 05",
    titulo: "Constitución de Empresas y Tipos de Sociedades",
    comentarios:
      "Esta clase me parece importante porque muestra que el ejercicio profesional de la arquitectura no se limita al diseño o a la construcción, sino que también requiere entender cómo se formaliza una empresa. En mi opinión, conocer estos temas es necesario porque un arquitecto puede trabajar como independiente, formar un despacho, asociarse con otros profesionistas o participar en empresas más grandes, y en todos esos casos necesita saber qué responsabilidades legales, fiscales y administrativas existen. También considero que la constitución legal de una empresa da más seriedad y seguridad al trabajo profesional. No es lo mismo ofrecer servicios de manera informal que tener una estructura clara, con socios definidos, capital establecido, contratos y responsabilidades. Para la arquitectura esto es especialmente relevante porque los proyectos suelen involucrar dinero, clientes, permisos, obra, personal y riesgos. Por eso, entender los tipos de sociedades y la diferencia entre sociedad y asociación ayuda a tomar mejores decisiones sobre cómo ejercer la profesión de forma más responsable, organizada y profesional.",
    pdf: "/apuntes/clase-05-constitucion-de-empresas-y-tipos-de-sociedades.pdf",
    infografia: "/infografias/clase-05-constitucion-de-empresas-y-tipos-de-sociedades.webp",
  },
  {
    id: "clase-06",
    tema: "Tema 06",
    titulo: "Incubadoras de Negocios y Marco Legal",
    comentarios:
      "Esta clase me parece muy útil porque aterriza la arquitectura desde una visión más profesional y empresarial. En mi opinión, muchas veces durante la carrera se aprende a diseñar, representar y resolver proyectos, pero no siempre se enseña cómo convertir ese trabajo en un despacho real, rentable y legalmente protegido. Por eso, el tema de las incubadoras es importante, porque funciona como un puente entre tener una idea o habilidad profesional y saber transformarla en un negocio que pueda sostenerse en el mercado. También considero que el marco legal es una parte que no se puede dejar para después. Un arquitecto puede tener buenos proyectos, pero si no define contratos, honorarios, responsabilidades, derechos de autor y alcances, puede exponerse a conflictos con clientes o incluso a pérdidas económicas. Esta clase deja claro que emprender en arquitectura no es solo conseguir clientes, sino construir una estructura profesional que proteja el trabajo creativo, el patrimonio del despacho y la relación con los usuarios. En ese sentido, una incubadora puede ayudar a que el arquitecto deje de trabajar de forma improvisada y comience a ejercer con mayor claridad, estrategia y seguridad.",
    pdf: "/apuntes/clase-06-incubadoras-de-negocios-para-arquitectos.pdf",
    infografia: "/infografias/clase-06-incubadoras-de-negocios-para-arquitectos.webp",
  },
  {
    id: "clase-07",
    tema: "Tema 07",
    titulo: "Universo Profesional del Arquitecto e Índices de Costo",
    comentarios:
      "Esta clase me parece importante porque ayuda a ver la arquitectura como una profesión mucho más amplia y compleja de lo que a veces se piensa. En mi opinión, es muy común asociar al arquitecto únicamente con el diseño de edificios, pero en realidad su campo de trabajo incluye obra, planeación urbana, gestión, restauración, sostenibilidad, docencia, investigación y administración de proyectos. Esto permite entender que cada arquitecto puede construir su perfil profesional de formas muy distintas, ya sea dentro del sector público, privado o como independiente. También considero que la parte de costos es fundamental porque conecta directamente el diseño con la realidad. Un proyecto puede ser creativo o atractivo, pero si no considera presupuesto, costos directos, indirectos, imprevistos e índices de costo, puede volverse inviable. Para mí, esta clase deja claro que un buen arquitecto no solo debe saber proyectar, sino también tomar decisiones económicas responsables. Entender los costos no limita la creatividad; más bien ayuda a que las ideas puedan realizarse de forma más clara, controlada y profesional.",
    pdf: "/apuntes/clase-07-universo-profesional-del-arquitecto-e-indices-de-costo.pdf",
    infografia: "/infografias/clase-07-universo-profesional-del-arquitecto-e-indices-de-costo.webp",
  },
  {
    id: "clase-08",
    tema: "Tema 08",
    titulo: "Aranceles y Formas de Contratación en Arquitectura",
    comentarios:
      "Esta clase me parece muy importante porque toca uno de los temas más reales del ejercicio profesional: cómo cobrar correctamente por el trabajo arquitectónico. En mi opinión, muchas veces se habla del diseño como si fuera solo creatividad, pero detrás de cada proyecto hay tiempo, experiencia, responsabilidad legal, conocimiento técnico y riesgo profesional. Por eso, los aranceles ayudan a darle valor al trabajo del arquitecto y evitan que los honorarios se decidan únicamente \"al tanteo\" o por presión del cliente. También considero que entender las formas de contratación es fundamental, porque no todos los proyectos se cobran igual ni implican el mismo nivel de responsabilidad. Un proyecto pequeño puede funcionar con honorarios fijos, pero una obra larga o una remodelación con imprevistos puede necesitar un esquema mixto o por porcentaje de obra. Además, el contrato se vuelve una herramienta indispensable, ya que define alcances, pagos, tiempos y responsabilidades. En conjunto, esta clase deja claro que cobrar bien no es abusar del cliente, sino reconocer el valor profesional del arquitecto y proteger tanto el proyecto como la relación laboral.",
    pdf: "/apuntes/clase-08-aranceles-y-formas-de-contratacion-en-arquitectura.pdf",
    infografia: "/infografias/clase-08-aranceles-y-formas-de-contratacion-en-arquitectura.webp",
  },
  {
    id: "clase-09",
    tema: "Tema 09",
    titulo: "Factibilidad del Proyecto Arquitectónico",
    comentarios:
      "Esta clase me parece importante porque ayuda a entender que un proyecto arquitectónico no puede evaluarse solo por su diseño o por su intención estética. En mi opinión, antes de avanzar con cualquier propuesta es necesario preguntarse si realmente se puede construir, si el cliente puede pagarlo, si cumple con la normativa, si responde al contexto y si no generará problemas técnicos, sociales o ambientales. La factibilidad funciona como una especie de filtro que evita que el proyecto avance con ideas poco realistas o con riesgos que pudieron detectarse desde el inicio. También considero que el tema del triángulo de tiempo, costo y calidad es muy útil porque resume muchos problemas reales de la profesión. Muchas veces se quiere construir rápido, barato y con alta calidad, pero en la práctica esos tres factores siempre se condicionan entre sí. Por eso, el arquitecto debe aprender a tomar decisiones equilibradas, justificar cambios y comunicar claramente los límites del proyecto. Esta clase deja claro que analizar la factibilidad no limita la creatividad; al contrario, permite que las ideas puedan concretarse de forma más responsable, eficiente y viable.",
    pdf: "/apuntes/clase-09-factibildiad-del-proyecto-arquitectonico.pdf",
    infografia: "/infografias/clase-09-factibildiad-del-proyecto-arquitectonico.webp",
  },
  {
    id: "clase-10",
    tema: "Tema 10",
    titulo: "Bitácora de Obra",
    comentarios:
      "Esta clase me parece muy importante porque muestra que la bitácora de obra no es solo un requisito administrativo, sino una herramienta central para proteger y controlar una construcción. En mi opinión, muchas veces se le puede ver como un trámite más, pero en realidad funciona como la memoria legal y técnica del proyecto. Ahí queda registrado lo que se hizo, quién lo autorizó, qué problemas surgieron, qué cambios se aceptaron y cómo se resolvieron las situaciones durante la obra. También considero que la bitácora es fundamental porque evita que todo dependa de acuerdos verbales o recuerdos entre las partes. En una obra pueden surgir retrasos, errores, cambios de diseño, accidentes o sobrecostos, y si no existe un registro claro, es mucho más difícil deslindar responsabilidades. Para el arquitecto, saber usar correctamente una bitácora demuestra profesionalismo, orden y responsabilidad. Además, con la transición hacia bitácoras electrónicas, también se vuelve necesario dominar herramientas digitales para administrar obras de forma más segura, transparente y eficiente.",
    pdf: "/apuntes/clase-10-bitacora-de-obra.pdf",
    infografia: "/infografias/clase-10-bitacora-de-obra.webp",
  },
];
