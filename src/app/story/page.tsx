import Image from 'next/image';
import { 
  LineChart, 
  Package, 
  DollarSign, 
  FileText, 
  Settings, 
  Timer, 
  ShieldCheck, 
  Code2, 
  Link as LinkIcon 
} from 'lucide-react';
import styles from './story.module.css';

export default function StoryPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#111', minHeight: '100vh', padding: '20px' }}>
      {/* 
        The container is exactly 1080x1920 (9:16).
        Zoom out your browser or use the screenshot tool to capture it perfectly.
      */}
      <div className={styles.storyContainer}>
        
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.logoBox}>
            <Image src="/logo.png" alt="LucSar Logo" width={100} height={100} style={{ objectFit: 'contain' }} unoptimized priority />
          </div>
          <span className={styles.headerTitle}>LucSar TECH</span>
        </div>

        {/* Main Title */}
        <div className={styles.mainTitleSection}>
          <h1>
            TRANSFORMA<br/>
            TU EMPRESA<br/>
            <span className={styles.highlightGradient}>SOFTWARE A LA MEDIDA</span>
            CON BASES<br/>
            <span className={styles.highlightBlue}>SÓLIDAS</span>
          </h1>
          <p className={styles.subtitle}>
            Automatiza procesos. Ahorra tiempo. <span>Evita errores.</span>
          </p>
        </div>

        {/* Banner Box */}
        <div className={styles.bannerBox}>
          <div className={styles.bannerTag}>ESPECIALISTAS EN</div>
          <div className={styles.bannerTitle}>
            SISTEMAS ERP y CRM <span>con IA</span>
          </div>
          <div className={styles.bannerSub}>
            Tecnología <span>aplicada a tu crecimiento</span>
          </div>
        </div>

        {/* Icons Grid */}
        <div className={styles.iconsSection}>
          <div className={styles.iconsHeader}>
            DOMINA LO QUE <span>REALMENTE IMPORTA</span>
          </div>
          <div className={styles.iconsGrid}>
            <div className={styles.iconCard}>
              <LineChart size={50} />
              <p>Ventas</p>
            </div>
            <div className={styles.iconCard}>
              <Package size={50} />
              <p>Inventario</p>
            </div>
            <div className={styles.iconCard}>
              <DollarSign size={50} />
              <p>Finanzas</p>
            </div>
            <div className={styles.iconCard}>
              <FileText size={50} />
              <p>Reportes</p>
            </div>
            <div className={styles.iconCard}>
              <Settings size={50} />
              <p>Procesos</p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className={styles.benefitsSection}>
          <div className={styles.benefitRow}>
            <Timer size={60} className={styles.benefitIcon} />
            <div className={styles.benefitText}>
              <h3>AUTOMATIZA Y AHORRA TIEMPO</h3>
              <p>Menos tareas manuales, más productividad.</p>
            </div>
          </div>
          <div className={styles.benefitRow}>
            <ShieldCheck size={60} className={styles.benefitIcon} />
            <div className={styles.benefitText}>
              <h3>SEGURIDAD Y CONTROL</h3>
              <p>Ten tu información siempre disponible y segura.</p>
            </div>
          </div>
          <div className={styles.benefitRow}>
            <Code2 size={60} className={styles.benefitIcon} />
            <div className={styles.benefitText}>
              <h3>DESARROLLO A TU MEDIDA</h3>
              <p>Soluciones creadas exactamente para tu operación.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaPill}>
          <LinkIcon size={50} />
          ¿Cómo podemos ayudarte? 🤔
        </div>

      </div>
    </div>
  );
}
