export const NAV_ITEMS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#identidad', label: 'Identidad' },
  { href: '#regla-r3', label: 'Sentencia R3' },
  { href: '#regla-r4', label: 'Sentencia R4' },
  { href: '#equipo', label: 'Grupo 24' },
];

export const PROJECT_INFO = {
  startupName: 'StudyMatch',
  originInstitution: 'IFTS 16',
  presentingInstitution: 'IFTS 29',
  tpTitle: 'TP3 «Dos sentencias, dos soluciones»',
  area: 'Educación y colaboración',
  objective:
    'Red que conecta estudiantes por materias, intereses, necesidades y disponibilidad.',
  assignedBlock: 'Invitación y consentimiento',
  groupName: 'Grupo 24',
  heroNeedText:
    'Estudiar en grupo potencia el aprendizaje, pero encontrar compañeros afines suele derivar en contactos no deseados, invitaciones invasivas o coordinaciones fallidas por incompatibilidad horaria. StudyMatch ayuda a estudiantes a conectar con pares compatibles por materias, intereses, necesidades y disponibilidad, cuidando el consentimiento y la disponibilidad real en cada paso.',
};

export const IDENTITY_SECTION = {
  eyebrow: 'ARTICULACIÓN IFTS 16 · IFTS 29',
  title: 'Origen de StudyMatch y propuesta del Grupo 24',
  subtitlePrefix:
    'Esta landing respeta la identidad original de la startup creada en el IFTS 16 y presenta las dos soluciones conceptuales del bloque ',
  subtitleStrong: 'Invitación y consentimiento',
  subtitleSuffix: ', elaboradas por estudiantes del IFTS 29.',
  cards: [
    {
      variant: 'accent',
      title: 'Identidad original de la startup',
      items: [
        { label: 'Startup:', value: 'StudyMatch.' },
        {
          label: 'Origen:',
          value:
            'Creada por estudiantes del IFTS 16, quienes definieron sus condiciones de funcionamiento mediante lógica proposicional.',
        },
        { label: 'Área:', value: 'Educación y colaboración.' },
        {
          label: 'Objetivo:',
          value:
            'Red que conecta estudiantes por materias, intereses, necesidades y disponibilidad.',
        },
      ],
    },
    {
      variant: 'sky',
      title: 'Propuesta del Grupo 24 (IFTS 29)',
      items: [
        {
          label: 'Equipo y materia:',
          value: 'Grupo 24 · Desarrollo de Sistemas Web (Front End), IFTS 29.',
        },
        {
          label: 'Bloque trabajado:',
          value: 'Invitación y consentimiento (Sentencias R3 y R4).',
        },
        {
          label: 'Alcance de la propuesta:',
          value:
            'Diseño y comunicación visual de dos flujos agénticos conceptuales que respetan las reglas originales e incorporan casos límite e intervención humana.',
        },
        {
          label: 'Metodología:',
          value:
            'Construcción 100% agéntica dirigida, revisada y validada por el equipo (TP3 «Dos sentencias, dos soluciones»).',
        },
      ],
    },
  ],
};

export const RULES = [
  {
    id: 'regla-r3',
    code: 'R3',
    variant: 'r3',
    blockLabel: 'Invitación y consentimiento',
    literalSentence:
      '«Si hay un compañero compatible y el estudiante autoriza contactarlo, el sistema envía una invitación sin incorporarlo automáticamente a un grupo».',
    proposalTitle: 'Invitación inteligente con consentimiento',
    keyClarification:
      'Enviar una invitación no incorpora automáticamente al estudiante a un grupo.',
    diagram: {
      title: 'Diagrama conceptual del flujo R3 — Invitación inteligente con consentimiento',
      start: 'Se detecta un posible compañero compatible.',
      inputs: [
        'Perfil compatible (materia, interés, disponibilidad).',
        'Estado de autorización del estudiante para contactar.',
      ],
      decision: '¿Existe compañero compatible Y el estudiante autorizó contactarlo?',
      yesBranch: {
        label: 'SÍ',
        sourceTag: 'Regla original R3',
        actionTitle: 'Envío de invitación con consentimiento',
        actionText:
          'El agente envía la invitación de contacto al compañero compatible SIN incorporar automáticamente al estudiante a un grupo.',
        endText: 'Fin · Invitación enviada (sin alta automática en un grupo)',
      },
      noBranch: {
        label: 'NO',
        sourceTag: 'Decisión de diseño · Grupo 24',
        humanIntervention: true,
        actionTitle: 'Bloqueo preventivo y espera de autorización',
        actionText:
          'No se envía la invitación. Si hay compatibilidad pero falta autorización, el agente bloquea el envío y deja la sugerencia en espera para revisión manual del estudiante.',
        endText: 'Fin · Envío bloqueado (en espera de revisión manual)',
      },
    },
    accordionLabel: 'Ver detalle funcional y decisiones de diseño de R3',
    details: {
      inputs:
        'Perfil del compañero potencialmente compatible (materias en curso, intereses académicos, necesidades de estudio y franjas de disponibilidad) junto con el estado de autorización explícita del estudiante para iniciar el contacto.',
      conceptualTools:
        'Motor conceptual de compatibilidad académica (para contrastar perfiles) y gestor conceptual de consentimiento (para verificar si el estudiante habilitó el contacto). Uso estrictamente conceptual, sin implementación técnica.',
      condition:
        'Evalúa de forma conjunta dos requisitos: que exista un compañero compatible y que el estudiante haya autorizado explícitamente contactarlo.',
      actionAndResult:
        'Propone enviar una invitación de contacto personalizada hacia el compañero compatible. El resultado esperado es una invitación emitida bajo consentimiento, sin incorporar automáticamente al estudiante a ningún grupo de estudio.',
      originalRuleScope:
        'La exigencia de compatibilidad más autorización previa para enviar la invitación, y la restricción explícita de no sumar automáticamente al estudiante a un grupo.',
      groupDesignDecision:
        'Ante el caso límite donde existe compatibilidad pero falta autorización del estudiante, el agente bloquea el envío para evitar contactos no deseados y deja la sugerencia en espera, requiriendo intervención humana (revisión manual del estudiante) para autorizarla o descartarla.',
    },
  },
  {
    id: 'regla-r4',
    code: 'R4',
    variant: 'r4',
    blockLabel: 'Invitación y consentimiento',
    literalSentence:
      '«Si ambas personas aceptan la invitación y mantienen una disponibilidad común, el sistema habilita el espacio para organizar el encuentro».',
    proposalTitle: 'Habilitación del espacio de encuentro',
    keyClarification:
      'Ambas condiciones (aceptación mutua y disponibilidad común vigente) deben cumplirse para alcanzar el resultado.',
    diagram: {
      title: 'Diagrama conceptual del flujo R4 — Habilitación del espacio de encuentro',
      start: 'Se reciben respuestas a una invitación enviada.',
      inputs: [
        'Estado de aceptación de ambas personas.',
        'Agendas de disponibilidad actualizadas de ambos estudiantes.',
      ],
      decision: '¿Ambas personas aceptaron la invitación Y mantienen una disponibilidad común?',
      yesBranch: {
        label: 'SÍ',
        sourceTag: 'Regla original R4',
        actionTitle: 'Habilitación del espacio privado',
        actionText:
          'El agente habilita el espacio privado para que ambos estudiantes organicen su encuentro de estudio.',
        endText: 'Fin · Espacio privado de encuentro habilitado',
      },
      noBranch: {
        label: 'NO',
        sourceTag: 'Decisión de diseño · Grupo 24',
        humanIntervention: true,
        actionTitle: 'Pausa ante choque de horarios y aviso',
        actionText:
          'No se habilita el espacio. Si ambos aceptaron pero uno modificó su horario y ya no coinciden, el agente pausa la habilitación, notifica el choque de horarios y solicita intervención humana para acordar una nueva franja.',
        endText: 'Fin · Habilitación pausada (pendiente de acuerdo humano)',
      },
    },
    accordionLabel: 'Ver detalle funcional y decisiones de diseño de R4',
    details: {
      inputs:
        'Estado de respuesta a la invitación de ambas personas (aceptada, pendiente o rechazada) y agendas de disponibilidad horaria actualizadas de los dos estudiantes.',
      conceptualTools:
        'Registro conceptual de estado de invitaciones (para validar la aceptación bilateral) y comparador conceptual de agendas horarias (para verificar coincidencias vigentes). Uso estrictamente conceptual, sin implementación técnica.',
      condition:
        'Evalúa en simultáneo que las dos personas hayan aceptado la invitación y que continúen manteniendo al menos una franja de disponibilidad común.',
      actionAndResult:
        'Propone habilitar el espacio privado de coordinación entre los dos estudiantes. El resultado esperado es un entorno consensuado y listo para organizar el encuentro sin fricciones horarias.',
      originalRuleScope:
        'La habilitación del espacio para organizar el encuentro condicionada al cumplimiento conjunto de la aceptación mutua y la disponibilidad común.',
      groupDesignDecision:
        'Ante el caso límite en el que ambas personas aceptaron la invitación pero una modificó su horario y se perdió la coincidencia, el agente pausa la habilitación, notifica el choque de horarios y solicita intervención humana para que acuerden una nueva franja común (y si alguna parte no aceptó, directamente no se habilita el espacio).',
    },
  },
];

export const TEAM_MEMBERS = [
  {
    name: 'Brian',
    group: 'Grupo 24 · IFTS 29',
    contribution: 'Aporte individual a completar por el equipo.',
  },
  {
    name: 'Ludmila',
    group: 'Grupo 24 · IFTS 29',
    contribution: 'Aporte individual a completar por el equipo.',
  },
  {
    name: 'Pedro',
    group: 'Grupo 24 · IFTS 29',
    contribution: 'Aporte individual a completar por el equipo.',
  },
  {
    name: 'Flavia',
    group: 'Grupo 24 · IFTS 29',
    contribution: 'Aporte individual a completar por el equipo.',
  },
];
