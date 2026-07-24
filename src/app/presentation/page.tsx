import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Deck from '@/components/presentation/Deck';
import Slide from '@/components/presentation/Slide';
import styles from './presentation.module.css';
import { Monitor, Server, Lock, Layers, BarChart, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'LuSam TECH | Corporate Sales Book',
  description: 'Software Empresarial para Empresas en Crecimiento',
};

export default function PresentationPage() {
  return (
    <Deck>
      {/* PÁGINA 1: PORTADA */}
      <Slide>
        <div style={{ textAlign: 'center' }}>
          <h1 className={styles.titlePremium} style={{ fontSize: '5rem', marginBottom: '1rem' }}>
            LUSAM TECH
          </h1>
          <p className={styles.subtitlePremium} style={{ margin: '0 auto' }}>
            Software Empresarial para Empresas en Crecimiento.
          </p>
        </div>
      </Slide>

      {/* PÁGINA 2: ÍNDICE */}
      <Slide>
        <h2 className={styles.titlePremium}>Contenido</h2>
        <div className={styles.twoColumns} style={{ alignItems: 'flex-start' }}>
          <ul style={{ listStyle: 'none', fontSize: '1.5rem', lineHeight: '2.5', color: 'var(--color-text)' }}>
            <li><strong style={{color: 'var(--color-secondary)'}}>01.</strong> Carta del Director General</li>
            <li><strong style={{color: 'var(--color-secondary)'}}>02.</strong> Quiénes Somos</li>
            <li><strong style={{color: 'var(--color-secondary)'}}>03.</strong> Nuestra Filosofía</li>
            <li><strong style={{color: 'var(--color-secondary)'}}>04.</strong> ¿Por qué LuSam TECH?</li>
            <li><strong style={{color: 'var(--color-secondary)'}}>05.</strong> Nuestra Metodología</li>
          </ul>
          <ul style={{ listStyle: 'none', fontSize: '1.5rem', lineHeight: '2.5', color: 'var(--color-text)' }}>
            <li><strong style={{color: 'var(--color-button)'}}>06. Capítulo 1:</strong> LuSam CRM</li>
            <li><strong style={{color: 'var(--color-button)'}}>07. Capítulo 2:</strong> LuSam ERP</li>
            <li><strong style={{color: 'var(--color-button)'}}>08. Capítulo 3:</strong> LuSam Web</li>
            <li><strong style={{color: 'var(--color-secondary)'}}>09.</strong> Tecnologías</li>
            <li><strong style={{color: 'var(--color-secondary)'}}>10.</strong> Contacto</li>
          </ul>
        </div>
      </Slide>

      {/* PÁGINA 4: CARTA DEL DIRECTOR GENERAL */}
      <Slide>
        <h2 className={styles.titlePremium} style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
          El futuro de su empresa no debería estar limitado por su tecnología.
        </h2>
        <div className={styles.textEditorial} style={{ fontSize: '1.125rem', lineHeight: '1.6' }}>
          <p style={{ marginBottom: '1rem' }}>Estimado líder empresarial,</p>
          <p style={{ marginBottom: '1rem' }}>
            El crecimiento trae consigo complejidad. A medida que su empresa escala, los procesos que antes funcionaban comienzan a fragmentarse. La información se dispersa, las decisiones se toman sin datos precisos y el control operativo se vuelve un desafío diario.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            En LuSam TECH, entendemos que la tecnología no es solo una herramienta; es el sistema nervioso de su negocio. Nuestro propósito es devolverle el control. Diseñamos e implementamos ecosistemas de software—CRM, ERP y Plataformas Web—que no solo resuelven los problemas de hoy, sino que construyen la infraestructura para el éxito de mañana.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            No somos solo desarrolladores de software. Somos arquitectos de soluciones empresariales. Bienvenido al siguiente nivel de su empresa. Bienvenido a LuSam TECH.
          </p>
          <p><strong>Director General</strong><br/>LuSam TECH</p>
        </div>
      </Slide>

      {/* PÁGINAS 5-6: QUIÉNES SOMOS */}
      <Slide>
        <h2 className={styles.titlePremium}>Sobre LuSam TECH</h2>
        <p className={styles.subtitlePremium} style={{ marginBottom: '3rem', color: 'var(--color-button)', fontWeight: 600 }}>
          Construyendo los cimientos digitales de las empresas líderes.
        </p>
        <div className={styles.twoColumns}>
          <div>
            <h3 className={styles.cardTitle}>Nuestra Misión</h3>
            <p className={styles.textEditorial}>
              Empoderar a los tomadores de decisiones mediante software elegante, robusto y eficiente que automatice procesos, optimice recursos y acelere el crecimiento sostenido.
            </p>
          </div>
          <div>
            <h3 className={styles.cardTitle}>Nuestra Visión</h3>
            <p className={styles.textEditorial}>
              Ser el socio tecnológico definitivo para las empresas en crecimiento en América Latina y el mundo, reconocidos por nuestra calidad de ingeniería, diseño impecable y resultados tangibles.
            </p>
          </div>
        </div>
      </Slide>

      {/* PÁGINA 7: NUESTRA FILOSOFÍA */}
      <Slide>
        <div style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
          <h2 className={styles.titlePremium} style={{ fontSize: '4.5rem', lineHeight: '1.2', color: 'var(--color-button)' }}>
            &quot;La complejidad oculta la ineficiencia.<br/>La simplicidad revela la rentabilidad.&quot;
          </h2>
          <p className={styles.textEditorial} style={{ margin: '3rem auto 0', fontSize: '1.5rem' }}>
            Creemos en el código limpio, el diseño intuitivo y la arquitectura robusta. Nuestro software se siente familiar desde el primer clic, pero es lo suficientemente potente como para procesar millones de transacciones.
          </p>
        </div>
      </Slide>

      {/* PÁGINAS 8-9: ¿POR QUÉ LUSAM TECH? */}
      <Slide>
        <h2 className={styles.titlePremium}>La ventaja técnica y comercial.</h2>
        <div className={styles.gridCards}>
          <div className={styles.premiumCard}>
            <Server className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Ingeniería de Precisión</h3>
            <p className={styles.cardText}>No usamos plantillas. Escribimos código de grado empresarial diseñado para la seguridad y el alto rendimiento.</p>
          </div>
          <div className={styles.premiumCard}>
            <Layers className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Escalabilidad Infinita</h3>
            <p className={styles.cardText}>Sistemas diseñados en arquitecturas en la nube que crecen al mismo ritmo que sus ventas.</p>
          </div>
          <div className={styles.premiumCard}>
            <Monitor className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Diseño UX</h3>
            <p className={styles.cardText}>Interfaces limpias y minimalistas. Si necesita un manual para usar nuestro software, hemos fracasado.</p>
          </div>
          <div className={styles.premiumCard}>
            <Lock className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Seguridad Bancaria</h3>
            <p className={styles.cardText}>Implementamos cifrado, respaldos automáticos y protocolos de ciberseguridad estrictos.</p>
          </div>
        </div>
      </Slide>

      {/* METODOLOGÍA */}
      <Slide>
        <h2 className={styles.titlePremium}>De la visión a la ejecución impecable.</h2>
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <h3 className={styles.cardTitle} style={{ fontSize: '1.25rem' }}>01. Auditoría</h3>
            <p className={styles.cardText}>Analizamos a fondo su estructura y cuellos de botella.</p>
          </div>
          <div className={styles.timelineItem}>
            <h3 className={styles.cardTitle} style={{ fontSize: '1.25rem' }}>02. Arquitectura</h3>
            <p className={styles.cardText}>Diseñamos bases de datos y flujos antes de programar.</p>
          </div>
          <div className={styles.timelineItem}>
            <h3 className={styles.cardTitle} style={{ fontSize: '1.25rem' }}>03. Desarrollo</h3>
            <p className={styles.cardText}>Ingeniería backend y frontend con las mejores tecnologías.</p>
          </div>
          <div className={styles.timelineItem}>
            <h3 className={styles.cardTitle} style={{ fontSize: '1.25rem' }}>04. Implementación</h3>
            <p className={styles.cardText}>Despliegue seguro, migración de datos y capacitación.</p>
          </div>
        </div>
      </Slide>

      {/* CAPÍTULO 1: CRM */}
      <Slide>
        <div style={{ textAlign: 'center' }}>
          <p className={styles.subtitlePremium} style={{ margin: '0 auto 1rem', color: 'var(--color-button)' }}>CAPÍTULO 01</p>
          <h2 className={styles.titlePremium} style={{ fontSize: '6rem' }}>LUSAM CRM</h2>
        </div>
      </Slide>

      {/* CRM BENEFICIOS */}
      <Slide>
        <h2 className={styles.titlePremium} style={{ fontSize: '3rem' }}>Nunca vuelvas a perder una oportunidad de venta.</h2>
        <div className={styles.twoColumns} style={{ marginTop: '3rem' }}>
          <div>
            <p className={styles.textEditorial} style={{ marginBottom: '2rem' }}>
              El 80% de las ventas B2B requieren al menos 5 seguimientos. Sin embargo, la mayoría de las empresas pierden el rastro después del segundo intento.
            </p>
            <p className={styles.textEditorial}>
              LuSam CRM es una plataforma diseñada para gestionar la relación con sus clientes, automatizar el seguimiento y dotar a su equipo directivo de proyecciones financieras precisas en tiempo real.
            </p>
          </div>
          <div style={{ background: 'var(--color-tertiary)', padding: '3rem', borderRadius: '12px' }}>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.125rem' }}><CheckCircle color="var(--color-button)" /> <strong>Visibilidad Total</strong> en tiempo real.</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.125rem' }}><CheckCircle color="var(--color-button)" /> <strong>Automatización</strong> de seguimientos.</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.125rem' }}><CheckCircle color="var(--color-button)" /> <strong>Gestión de Pipeline</strong> y proyecciones.</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.125rem' }}><CheckCircle color="var(--color-button)" /> <strong>Perfiles 360º</strong> de cada cliente.</li>
            </ul>
          </div>
        </div>
      </Slide>

      {/* CAPÍTULO 2: ERP */}
      <Slide>
        <div style={{ textAlign: 'center' }}>
          <p className={styles.subtitlePremium} style={{ margin: '0 auto 1rem', color: 'var(--color-button)' }}>CAPÍTULO 02</p>
          <h2 className={styles.titlePremium} style={{ fontSize: '6rem' }}>LUSAM ERP</h2>
        </div>
      </Slide>

      {/* ERP BENEFICIOS */}
      <Slide>
        <h2 className={styles.titlePremium} style={{ fontSize: '3.5rem' }}>Recupera el control de tu empresa.</h2>
        <p className={styles.subtitlePremium} style={{ marginBottom: '3rem' }}>
          Crecimiento sin control es igual a caos. LuSam ERP centraliza todas las operaciones.
        </p>
        <div className={styles.gridCards}>
          <div className={styles.premiumCard}>
            <h3 className={styles.cardTitle}>Inventarios & Compras</h3>
            <p className={styles.cardText}>Control multi-almacén, máximos y mínimos, valorización, requisiciones y órdenes.</p>
          </div>
          <div className={styles.premiumCard}>
            <h3 className={styles.cardTitle}>Ventas & Finanzas</h3>
            <p className={styles.cardText}>Integración con puntos de venta, flujo de caja, conciliación bancaria y facturación.</p>
          </div>
          <div className={styles.premiumCard}>
            <BarChart className={styles.cardIcon} style={{ width: '32px', height: '32px', marginBottom: '1rem' }} />
            <h3 className={styles.cardTitle}>Dashboard Directivo</h3>
            <p className={styles.cardText}>KPIs operativos y financieros en tiempo real para el consejo de administración.</p>
          </div>
        </div>
      </Slide>

      {/* CAPÍTULO 3: WEB */}
      <Slide>
        <div style={{ textAlign: 'center' }}>
          <p className={styles.subtitlePremium} style={{ margin: '0 auto 1rem', color: 'var(--color-button)' }}>CAPÍTULO 03</p>
          <h2 className={styles.titlePremium} style={{ fontSize: '6rem' }}>LUSAM WEB</h2>
        </div>
      </Slide>

      <Slide>
        <h2 className={styles.titlePremium}>Tu página web debe generar clientes.</h2>
        <div className={styles.twoColumns} style={{ marginTop: '4rem' }}>
          <div>
            <h3 className={styles.cardTitle}>Presencia de Alto Impacto</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem', fontSize: '1.125rem', color: 'var(--color-text)' }}>
              <li>• Landing Pages orientadas a conversión</li>
              <li>• Sitios Corporativos premium</li>
              <li>• E-Commerce avanzado B2B/B2C</li>
              <li>• Portales de clientes y catálogos</li>
            </ul>
          </div>
          <div>
            <h3 className={styles.cardTitle}>Diseño & Rendimiento</h3>
            <p className={styles.textEditorial} style={{ marginTop: '1.5rem', fontSize: '1.125rem' }}>
              Interfaces diseñadas científicamente para captar leads. Estructuramos el código con SEO Técnico para posicionamiento en Google y garantizamos un diseño responsive inmaculado.
            </p>
          </div>
        </div>
      </Slide>

      {/* CONTACTO */}
      <Slide>
        <div style={{ textAlign: 'center' }}>
          <h2 className={styles.titlePremium} style={{ fontSize: '4rem' }}>Inicie su Transformación Tecnológica.</h2>
          <p className={styles.subtitlePremium} style={{ margin: '2rem auto 4rem' }}>
            Hablemos sobre cómo optimizar su operación comercial y administrativa.
          </p>
          <Link href="/" className="btn btn-primary" style={{ fontSize: '1.25rem', padding: '1rem 3rem' }}>
            Volver al Sitio Web
          </Link>
          <p style={{ marginTop: '4rem', color: 'var(--color-text)' }}>
            <strong>www.lusam.tech</strong><br/>
            contacto@lusam.tech
          </p>
        </div>
      </Slide>
    </Deck>
  );
}
