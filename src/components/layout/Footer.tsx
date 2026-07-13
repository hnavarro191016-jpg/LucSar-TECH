import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        
        <div className={styles.brandCol}>
          <Link href="/" className={styles.logoWrapper}>
            <Image src="/logo.png" alt="LucSar TECH Logo" width={160} height={160} className={styles.logoImage} />
          </Link>
          <p className={styles.brandDesc}>
            Desarrollo de software corporativo y soluciones tecnológicas avanzadas para empresas que buscan liderar el mercado.
          </p>
        </div>

        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Navegación</h4>
          <nav className={styles.footerNav}>
            <Link href="#inicio">Inicio</Link>
            <Link href="#servicios">Servicios</Link>
            <Link href="#soluciones">Soluciones</Link>
            <Link href="#nosotros">Nosotros</Link>
          </nav>
        </div>

        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Legal</h4>
          <nav className={styles.footerNav}>
            <Link href="#">Aviso de Privacidad</Link>
            <Link href="#">Términos y Condiciones</Link>
            <Link href="#">Políticas de Seguridad</Link>
          </nav>
        </div>

        <div className={styles.contactCol}>
          <h4 className={styles.colTitle}>Contacto</h4>
          <div className={styles.contactList}>
            <a href="mailto:info.lucsartech@gmail.com" className={styles.contactItem}>
              <Mail size={18} /> info.lucsartech@gmail.com
            </a>
            <a href="https://wa.me/528115187738" className={styles.contactItem} target="_blank" rel="noreferrer">
              <Phone size={18} /> WhatsApp: 811 518 7738
            </a>
            <div className={styles.contactItem}>
              <MapPin size={18} /> Corporativo Internacional
            </div>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} LucSar TECH. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
