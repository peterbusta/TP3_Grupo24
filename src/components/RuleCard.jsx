import AccordionDetail from './AccordionDetail';
import FlowDiagram from './FlowDiagram';

export default function RuleCard({ rule }) {
  return (
    <article
      id={rule.id}
      className={`rule-card rule-card--${rule.variant}`}
      aria-labelledby={`${rule.id}-title`}
    >
      <div className="rule-card__top">
        <span className={`rule-badge rule-badge--${rule.variant}`}>
          Sentencia {rule.code}
        </span>
        <span className="eyebrow" style={{ marginBottom: 0 }}>
          {rule.blockLabel}
        </span>
      </div>

      <h3 id={`${rule.id}-title`} className="rule-card__proposal">
        Propuesta: {rule.proposalTitle}
      </h3>

      <blockquote className="literal-quote">
        <span className="literal-quote__label">
          Sentencia original {rule.code} (texto literal)
        </span>
        <p className="literal-quote__text">{rule.literalSentence}</p>
      </blockquote>

      <p className="rule-key-point">
        <strong>Aclaración clave:</strong> {rule.keyClarification}
      </p>

      <FlowDiagram code={rule.code} diagram={rule.diagram} />

      <AccordionDetail
        code={rule.code}
        label={rule.accordionLabel}
        details={rule.details}
      />
    </article>
  );
}
