import { ArrowUpRight } from 'lucide-react';
import styles from './SuccessCasesSection.module.css';

export default function SuccessCasesSection() {
  const cases = [
    { industry: 'Fumigación Industrial', name: 'Viksa', result: 'Implementación de un CRM productivo para cotizaciones y automatización de reportes certificados en PDF.', highlight: 'CRM y Reportes' },
    { industry: 'Repostería Comercial', name: 'Chicle Repostería', result: 'Desarrollo de un sistema a medida para gestión de cotizaciones y control de inventarios en tiempo real.', highlight: 'Control Total' },
    { industry: 'Servicios Empresariales', name: 'Badilsa', result: 'Creación de un sistema de cotizaciones completamente adaptado a sus necesidades operativas específicas.', highlight: 'A Medida' },
    { industry: 'Construcción y Acero', name: 'Materiales y Aceros Franc', result: 'Diseño y desarrollo de presencia digital corporativa mediante una página web empresarial de alto impacto.', highlight: 'Presencia Digital' },
  ];

  return (
    <section id="casos" className="section bg-light">
      <div className="container">
        <div className={styles.header}>
          <h2 className="title-section">Casos de Éxito</h2>
          <p className="subtitle">
            Resultados medibles y transformaciones reales en diversas industrias a través de soluciones tecnológicas estratégicas.
          </p>
        </div>

        <div className={styles.grid}>
          {cases.map((c, idx) => (
            <div key={idx} className={styles.caseCard}>
              <div className={styles.cardHeader}>
                <span className={styles.industry}>{c.industry}</span>
                <ArrowUpRight size={20} className={styles.icon} />
              </div>
              <div className={styles.highlight}>{c.name}</div>
              <p className={styles.result}>{c.result}</p>
              <div className={styles.badge}>{c.highlight}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
