import { useId, useState } from 'react';

export default function AccordionDetail({ label, placeholderText }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const buttonId = useId();

  return (
    <div className="accordion">
      <button
        id={buttonId}
        type="button"
        className="accordion__trigger"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{label}</span>
        <span className="accordion__icon" aria-hidden="true">
          {isOpen ? '▲ Ocultar' : '▼ Desplegar'}
        </span>
      </button>

      {isOpen && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          className="accordion__panel"
        >
          <span className="placeholder-notice">Contenido de prueba · Etapa 1</span>
          <p>{placeholderText}</p>
        </div>
      )}
    </div>
  );
}
