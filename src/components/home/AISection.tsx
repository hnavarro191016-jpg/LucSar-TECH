import { Bot, Network, FileBarChart, LineChart, MessageSquare, Cog } from 'lucide-react';
import styles from './AISection.module.css';

export default function AISection() {
  const aiUseCases = [
    { icon: <Cog size={24} />, title: 'Automatización de procesos', desc: 'Reduce tareas repetitivas mediante flujos de trabajo inteligentes.' },
    { icon: <Network size={24} />, title: 'Clasificación automática', desc: 'Categorización de documentos y correos con machine learning.' },
    { icon: <FileBarChart size={24} />, title: 'Generación de reportes', desc: 'Creación de informes ejecutivos en tiempo real a partir de datos crudos.' },
    { icon: <LineChart size={24} />, title: 'Predicción de ventas', desc: 'Modelos predictivos para anticipar la demanda y optimizar inventario.' },
    { icon: <MessageSquare size={24} />, title: 'Chatbots empresariales', desc: 'Asistentes virtuales entrenados con el conocimiento de tu empresa.' },
    { icon: <Bot size={24} />, title: 'Optimización operativa', desc: 'Algoritmos que mejoran rutas, tiempos y asignación de recursos.' },
  ];

  return (
    <section className="section bg-dark">
      <div className="container">
        <div className={styles.containerGrid}>
          
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>Inteligencia Artificial aplicada a tu negocio</h2>
            <p className={styles.sectionSubtitle}>
              Implementamos modelos de IA de última generación para transformar datos en decisiones estratégicas y automatizar tu operación a niveles sin precedentes.
            </p>
            <div className={styles.featuresList}>
              {aiUseCases.map((useCase, idx) => (
                <div key={idx} className={styles.featureItem}>
                  <div className={styles.iconBox}>{useCase.icon}</div>
                  <div>
                    <h4 className={styles.featureTitle}>{useCase.title}</h4>
                    <p className={styles.featureDesc}>{useCase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.visualContent}>
            <div className={styles.aiNetworkMockup}>
              {/* Central Node */}
              <div className={styles.centralNode}>
                <Bot size={40} className={styles.botIcon} />
                <div className={styles.pulseRing}></div>
                <div className={styles.pulseRing2}></div>
              </div>

              {/* Connecting Nodes */}
              <div className={`${styles.node} ${styles.node1}`}>Datos</div>
              <div className={`${styles.node} ${styles.node2}`}>Análisis</div>
              <div className={`${styles.node} ${styles.node3}`}>Decisión</div>
              <div className={`${styles.node} ${styles.node4}`}>Acción</div>

              {/* Connecting Lines (SVG) */}
              <svg className={styles.connectionsSvg} viewBox="0 0 400 400">
                <line x1="200" y1="200" x2="80" y2="100" />
                <line x1="200" y1="200" x2="320" y2="100" />
                <line x1="200" y1="200" x2="80" y2="300" />
                <line x1="200" y1="200" x2="320" y2="300" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
