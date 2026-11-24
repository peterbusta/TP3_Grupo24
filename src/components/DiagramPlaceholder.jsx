export default function DiagramPlaceholder({ code, title, note }) {
  return (
    <div
      className="diagram-placeholder"
      role="region"
      aria-label={`Espacio reservado para el diagrama del flujo ${code}`}
    >
      <div className="diagram-placeholder__header">
        <h4 className="diagram-placeholder__title">{title}</h4>
        <span className="stage-badge">Etapa siguiente</span>
      </div>
      <p className="diagram-placeholder__text">{note}</p>
      <ul className="diagram-placeholder__checklist">
        <li>Flujo conceptual (sin simulación ni automatización real).</li>
        <li>Inicio, datos de entrada, evaluación/decisión con ramas SÍ / NO, acciones y resultado final.</li>
        <li>Intervención humana identificada explícitamente.</li>
        <li>Distinción visual entre regla original y decisiones de diseño del Grupo 24.</li>
      </ul>
    </div>
  );
}
