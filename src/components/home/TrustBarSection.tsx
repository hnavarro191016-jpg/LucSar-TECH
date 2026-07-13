import { Briefcase, Clock, ShieldCheck, Headphones } from 'lucide-react';
import Image from 'next/image';
import styles from './TrustBarSection.module.css';

export default function TrustBarSection() {
  const stats = [
    { icon: <Briefcase size={24} />, value: '4+', label: 'Clientes Activos' },
    { icon: <Clock size={24} />, value: '100%', label: 'Compromiso' },
    { icon: <ShieldCheck size={24} />, value: '99.9%', label: 'Disponibilidad' },
    { icon: <Headphones size={24} />, value: '24/7', label: 'Soporte especializado' },
  ];

  return (
    <section className={styles.trustSection}>
      <div className={`container ${styles.trustContainer}`}>
        
        <div className={styles.statsGrid}>
          {stats.map((stat, idx) => (
            <div key={idx} className={styles.statItem}>
              <div className={styles.iconWrapper}>{stat.icon}</div>
              <div>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.logosArea}>
          <p className={styles.logosTitle}>Empresas que confían en nuestra tecnología</p>
          <div className={styles.logosGrid}>
            <div className={styles.logoItem}>
              <Image src="/badilsa.png" alt="Badilsa" width={280} height={120} className={styles.clientImage} />
            </div>
            <div className={styles.logoItem}>
              <Image src="/Viksa.png" alt="Viksa" width={280} height={120} className={styles.clientImage} />
            </div>
            <div className={styles.logoItem}>
              <Image src="/chicle.png" alt="Chicle Repostería" width={280} height={120} className={styles.clientImage} />
            </div>
            <div className={styles.logoItem}>
              <Image src="/franc.png" alt="Materiales y Aceros Franc" width={280} height={120} className={styles.clientImage} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
