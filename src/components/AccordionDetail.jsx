import { useId, useState } from 'react';
import {
  CheckCircleIcon,
  CpuIcon,
  DatabaseIcon,
  GitBranchIcon,
  ShieldCheckIcon,
  UserCheckIcon,
} from './Icons';

export default function AccordionDetail({ code, variant = 'r3', label, details }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const buttonId = useId();

  return (
    <div className={`accordion accordion--${variant}`}>
      <button
        id={buttonId}
        type="button"
        className="accordion__trigger"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{label}</span>
        <span className="accordion__status">
          <span className="accordion__icon" aria-hidden="true">
            {isOpen ? '▲' : '▼'}
          </span>
          {isOpen ? 'Ocultar detalle' : 'Desplegar detalle'}
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="accordion__panel"
        hidden={!isOpen}
      >
        <div className="detail-grid">
          <div className="detail-item">
            <h4 className="detail-item__title">
              <span className="detail-item__icon">
                <DatabaseIcon />
              </span>
              <span>1. Qué datos entran</span>
            </h4>
            <p className="detail-item__text">{details.inputs}</p>
          </div>

          <div className="detail-item">
            <h4 className="detail-item__title">
              <span className="detail-item__icon">
                <CpuIcon />
              </span>
              <span>2. Herramienta conceptual del futuro agente</span>
            </h4>
            <p className="detail-item__text">{details.conceptualTools}</p>
          </div>

          <div className="detail-item">
            <h4 className="detail-item__title">
              <span className="detail-item__icon">
                <GitBranchIcon />
              </span>
              <span>3. Qué condición evalúa</span>
            </h4>
            <p className="detail-item__text">{details.condition}</p>
          </div>

          <div className="detail-item">
            <h4 className="detail-item__title">
              <span className="detail-item__icon">
                <CheckCircleIcon />
              </span>
              <span>4. Acción propuesta y resultado esperado</span>
            </h4>
            <p className="detail-item__text">{details.actionAndResult}</p>
          </div>
        </div>

        <div className="detail-comparison">
          <div className="detail-box detail-box--rule">
            <span className="flow-source flow-source--rule">
              <ShieldCheckIcon className="flow-source__icon" />
              Surge de la regla original ({code})
            </span>
            <p className="detail-item__text">{details.originalRuleScope}</p>
          </div>

          <div className="detail-box detail-box--design">
            <div className="detail-box__tags">
              <span className="flow-source flow-source--design">
                Decisión de diseño · Grupo 24
              </span>
              <span className="flow-source flow-source--human">
                <UserCheckIcon className="flow-source__icon" />
                Caso límite e intervención humana
              </span>
            </div>
            <p className="detail-item__text">{details.groupDesignDecision}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
