import AccordionDetail from './AccordionDetail';
import FlowDiagram from './FlowDiagram';
import { CalendarCheckIcon, SendIcon } from './Icons';

const STAGE_META = {
  R3: {
    step: '01',
    stageName: 'R3 · Invitación',
    Icon: SendIcon,
  },
  R4: {
    step: '02',
    stageName: 'R4 · Encuentro',
    Icon: CalendarCheckIcon,
  },
};

export default function RuleCard({ rule }) {
  const stage = STAGE_META[rule.code] || STAGE_META.R3;
  const StageIcon = stage.Icon;

  return (
    <article
      id={rule.id}
      className={`rule-card rule-card--${rule.variant}`}
      aria-labelledby={`${rule.id}-title`}
    >
      <div className="rule-card__header">
        <div className="rule-stage">
          <span className={`rule-stage__num rule-stage__num--${rule.variant}`} aria-hidden="true">
            {stage.step}
          </span>
          <div className="rule-stage__meta">
            <div className="rule-card__top">
              <span className={`rule-badge rule-badge--${rule.variant}`}>
                <StageIcon className="rule-badge__icon" />
                <span>Sentencia {rule.code}</span>
              </span>
              <span className={`rule-stage__tag rule-stage__tag--${rule.variant}`}>
                {stage.stageName}
              </span>
              <span className="eyebrow eyebrow--muted" style={{ marginBottom: 0 }}>
                {rule.blockLabel}
              </span>
            </div>

            <h3 id={`${rule.id}-title`} className="rule-card__proposal">
              Propuesta: {rule.proposalTitle}
            </h3>
          </div>
        </div>
      </div>

      <blockquote className={`literal-quote literal-quote--${rule.variant}`}>
        <span className="literal-quote__label">
          Sentencia original {rule.code} (texto literal)
        </span>
        <p className="literal-quote__text">{rule.literalSentence}</p>
      </blockquote>

      <p className={`rule-key-point rule-key-point--${rule.variant}`}>
        <strong>Aclaración clave:</strong> {rule.keyClarification}
      </p>

      <FlowDiagram code={rule.code} variant={rule.variant} diagram={rule.diagram} />

      <AccordionDetail
        code={rule.code}
        variant={rule.variant}
        label={rule.accordionLabel}
        details={rule.details}
      />
    </article>
  );
}
