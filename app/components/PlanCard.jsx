import { Check, CircleHelp, Clock3 } from "lucide-react";

const WHATSAPP_NUMBER = "542494373738";

export default function PlanCard({ plan, onInfo }) {
  const whatsapp = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(plan.message)}`;
  return (
    <article className={`plan-card plan-card--offer ${plan.badge ? "plan-card--featured" : ""}`} data-plan-id={plan.id}>
      {plan.badge && <span className="plan-card__badge">{plan.badge}</span>}
      <div className="plan-card__head">
        <span className="plan-card__label">Plan</span>
        <div className="plan-card__title-row">
          <h3>{plan.name.replace("Plan ", "")}</h3>
          <div className={`plan-card__price plan-card__price--mobile ${plan.price.custom ? "plan-card__price--custom" : ""}`}>
            {plan.price.originalAmount && <del>{plan.price.originalAmount}</del>}
            <strong>{plan.price.amount}</strong>
            <span>{plan.price.caption}</span>
            <small>{plan.price.promo}</small>
          </div>
        </div>
        <p className="plan-card__eyebrow">{plan.eyebrow}</p>
        <p className="plan-card__description">{plan.description}</p>
        <p className="plan-card__timeline"><Clock3 size={17} />{plan.timeline}</p>
      </div>
      <ul>{plan.features.map((feature) => <li key={feature}><Check size={17} />{feature}</li>)}</ul>
      <div className="plan-card__info-row">
        {plan.hasModal && <button type="button" className="plan-card__info" onClick={onInfo}><CircleHelp size={16} /> ¿Qué significa agregar funcionalidades?</button>}
      </div>
      <div className={`plan-card__price plan-card__price--desktop ${plan.price.custom ? "plan-card__price--custom" : ""}`}>
        {plan.price.originalAmount && <del>{plan.price.originalAmount}</del>}
        <strong>{plan.price.amount}</strong>
        <span>{plan.price.caption}</span>
        <small>{plan.price.promo}</small>
      </div>
      <a className="button button--plan" href={whatsapp} target="_blank" rel="noreferrer">Consultar este plan <span aria-hidden="true">↗</span></a>
    </article>
  );
}
