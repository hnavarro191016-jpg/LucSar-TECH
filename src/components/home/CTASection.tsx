import styles from './CTASection.module.css';

export default function CTASection() {
  return (
    <section id="contacto" className={`section ${styles.ctaSection}`}>
      <div className={`container ${styles.ctaContainer}`}>
        <h2 className={styles.ctaTitle}>¿Listo para transformar tu empresa?</h2>
        <p className={styles.ctaText}>
          Agenda una reunión con nuestros especialistas y descubre cómo la tecnología puede ayudarte a crecer.
        </p>
        <a href="https://wa.me/528115187738?text=Hola%20LucSar%20TECH,%20quiero%20empezar%20mi%20transformaci%C3%B3n%20digital" target="_blank" rel="noopener noreferrer" className={`btn btn-primary ${styles.ctaBtn}`}>
          Agenda una Consultoría Gratuita
        </a>
      </div>
    </section>
  );
}
