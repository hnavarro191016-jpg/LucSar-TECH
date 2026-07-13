import styles from './TechnologiesSection.module.css';

export default function TechnologiesSection() {
  const techs = [
    'React', 'Next.js', 'Node.js', 'TypeScript',
    'Python', 'Microsoft Fabric', 'Azure', 'AWS',
    'Docker', 'GitHub', 'PostgreSQL', 'SQL Server',
    'Supabase', 'Power BI', 'REST API', 'GraphQL'
  ];

  return (
    <section id="tecnologias" className="section">
      <div className="container">
        <div className={styles.header}>
          <h2 className="title-section">Tecnologías que utilizamos</h2>
          <p className="subtitle">
            Construimos sobre stacks modernos, probados y escalables a nivel global.
          </p>
        </div>

        <div className={styles.techGrid}>
          {techs.map((tech, idx) => (
            <div key={idx} className={styles.techItem}>
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
