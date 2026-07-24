import { TrendingUp, Users, DollarSign } from 'lucide-react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section id="inicio" className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        
        {/* Left Content */}
        <div className={`${styles.heroContent} fade-in`}>
          <h1 className="title-main">
            Tecnología que impulsa <span className={styles.highlight}>empresas.</span>
          </h1>
          <p className="subtitle">
            Desarrollamos software empresarial que automatiza procesos, mejora la productividad y acelera el crecimiento de tu organización.
          </p>
          <div className={styles.ctaGroup}>
            <a href="https://wa.me/528116637766?text=Hola%20LuSam%20TECH,%20quiero%20solicitar%20asesor%C3%ADa" target="_blank" rel="noopener noreferrer" className={`btn btn-primary ${styles.heroBtn}`}>
              Solicitar Asesoría
            </a>
            <a href="#servicios" className={`btn btn-secondary ${styles.heroBtn}`}>
              Ver Soluciones
            </a>
          </div>
        </div>

        {/* Right Dashboard Mockup */}
        <div className={`${styles.heroVisual} slide-up`}>
          <div className={styles.dashboardMockup}>
            {/* Top Bar */}
            <div className={styles.mockupHeader}>
              <div className={styles.macControls}>
                <span></span><span></span><span></span>
              </div>
              <div className={styles.mockupTitle}>LuSam ERP - Dashboard</div>
            </div>

            {/* Dashboard Body */}
            <div className={styles.mockupBody}>
              {/* KPIs */}
              <div className={styles.kpiGrid}>
                <div className={styles.kpiCard}>
                  <div className={styles.kpiHeader}>
                    <DollarSign size={16} className={styles.kpiIcon} />
                    <span>Ventas Totales</span>
                  </div>
                  <div className={styles.kpiValue}>$124,500</div>
                  <div className={styles.kpiTrend}>+12.5% vs mes anterior</div>
                </div>
                <div className={styles.kpiCard}>
                  <div className={styles.kpiHeader}>
                    <Users size={16} className={styles.kpiIcon} />
                    <span>Nuevos Clientes</span>
                  </div>
                  <div className={styles.kpiValue}>342</div>
                  <div className={styles.kpiTrend}>+5.2% vs mes anterior</div>
                </div>
              </div>

              {/* Charts Section */}
              <div className={styles.chartsArea}>
                <div className={styles.mainChart}>
                  <div className={styles.chartTitle}>Crecimiento Anual</div>
                  <div className={styles.chartBarArea}>
                    <div className={styles.bar} style={{height: '40%'}}></div>
                    <div className={styles.bar} style={{height: '60%'}}></div>
                    <div className={styles.bar} style={{height: '45%'}}></div>
                    <div className={styles.bar} style={{height: '80%'}}></div>
                    <div className={styles.bar} style={{height: '70%'}}></div>
                    <div className={styles.bar} style={{height: '100%'}}></div>
                  </div>
                </div>
                <div className={styles.sideChart}>
                  <div className={styles.chartTitle}>Eficiencia</div>
                  <div className={styles.circleChart}>
                    <TrendingUp size={32} color="var(--color-success)" />
                    <span>98%</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
