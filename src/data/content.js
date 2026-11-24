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
  assignedBlock: 'S13-B · Invitación y consentimiento',
  groupName: 'Grupo 24',
  heroNeedPlaceholder:
    '[Contenido de prueba — Etapa 1] Espacio reservado para redactar con el equipo el resumen de la necesidad académica que da origen a StudyMatch, sin inventar contenido adicional hasta su revisión.',
};

export const RULES = [
  {
    id: 'regla-r3',
    code: 'R3',
    variant: 'r3',
    blockLabel: 'Bloque S13-B · Invitación y consentimiento',
    literalSentence:
      '«Si hay un compañero compatible y el estudiante autoriza contactarlo, el sistema envía una invitación sin incorporarlo automáticamente a un grupo».',
    proposalTitle: 'Invitación inteligente con consentimiento',
    keyClarification:
      'Condición explícita: enviar una invitación no incorpora automáticamente al estudiante a un grupo.',
    diagramTitle: 'Espacio reservado — Diagrama conceptual del flujo R3',
    diagramNote:
      '[Pendiente para próxima etapa] Aquí se incorporará el diagrama independiente de R3 con inicio, entradas, decisión (SÍ / NO), acciones, resultado final, intervención humana y distinción entre regla original y decisiones de diseño del Grupo 24.',
    accordionLabel: 'Ver detalles de la propuesta R3 (Etapa 1 · Contenido de prueba)',
    accordionPlaceholder:
      '[Contenido de prueba — Etapa 1] Espacio reservado para ampliar los detalles operativos, casos límite y decisiones de diseño del Grupo 24 para R3. Este bloque desplegable ya es accesible por clic y teclado.',
  },
  {
    id: 'regla-r4',
    code: 'R4',
    variant: 'r4',
    blockLabel: 'Bloque S13-B · Invitación y consentimiento',
    literalSentence:
      '«Si ambas personas aceptan la invitación y mantienen una disponibilidad común, el sistema habilita el espacio para organizar el encuentro».',
    proposalTitle: 'Habilitación del espacio de encuentro',
    keyClarification:
      'Condición explícita: ambas condiciones (aceptación mutua y disponibilidad común) deben cumplirse para alcanzar el resultado.',
    diagramTitle: 'Espacio reservado — Diagrama conceptual del flujo R4',
    diagramNote:
      '[Pendiente para próxima etapa] Aquí se incorporará el diagrama independiente de R4 con inicio, entradas, evaluación de ambas condiciones (SÍ / NO), acciones, resultado final, intervención humana y distinción entre regla original y decisiones de diseño del Grupo 24.',
    accordionLabel: 'Ver detalles de la propuesta R4 (Etapa 1 · Contenido de prueba)',
    accordionPlaceholder:
      '[Contenido de prueba — Etapa 1] Espacio reservado para detallar la verificación de aceptación mutua, disponibilidad común y excepciones definidas por el Grupo 24 para R4. Este bloque desplegable ya es accesible por clic y teclado.',
  },
];

export const TEAM_MEMBERS = [
  {
    name: 'Brian',
    group: 'Grupo 24 · IFTS 29',
    contribution: '[Contenido de prueba] Aporte individual pendiente de completar.',
  },
  {
    name: 'Ludmila',
    group: 'Grupo 24 · IFTS 29',
    contribution: '[Contenido de prueba] Aporte individual pendiente de completar.',
  },
  {
    name: 'Pedro',
    group: 'Grupo 24 · IFTS 29',
    contribution: '[Contenido de prueba] Aporte individual pendiente de completar.',
  },
  {
    name: 'Flavia',
    group: 'Grupo 24 · IFTS 29',
    contribution: '[Contenido de prueba] Aporte individual pendiente de completar.',
  },
];
