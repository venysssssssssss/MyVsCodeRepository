import Link from 'next/link';
// import Illustration from '../components/Illustration';
import Image from "next/image";
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>Data</h1>
          <h1>Science</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Vinícius Reis</h1>
            <h6 className={styles.bio}>Data science student
</h6>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <div className={styles.content}>
                  <h4>Skill Set</h4>
                  <div className={styles.tags}>
                    <span key='Research' className='Research'>
                      Python
                    </span>
                    <span key='PyTorch' className='PyTorch'>
                      PyautoGui
                    </span>
                    <span key='Tensorflow' className='Tensorflow'>
                      Tensorflow study
                    </span>
                    <span key='SQL' className='SQL'>
                      SQL
                    </span>
                    <span key='Computer-Vision' className='Computer-Vision'>
                      Want to Study Computer-Vision
                    </span>
                    <span key='MLOps' className='MLOps'>
                      MLOps study
                    </span>
                    <span key='Bots' className='Bots'>
                      Bots implementation
                    </span>
                    <span key='APIs' className='APIs'>
                      APIs study
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/about">
              <button className={styles.button}>About Me</button>
            </Link>
            {/* <Link href="/projects">
              <button className={styles.button}>View Projects</button>
            </Link> */}
            <Link href="/contact">
              <button className={styles.outlined}>Contact</button>
            </Link>
          </div>
          {/* <Illustration className={styles.illustration} /> */}
          <div className={styles.right}>
            <div className={styles.picture_boader}>
              <Image
                className={styles.picture}
                src="/me.jpeg"
                width={300}
                height={290}
                alt="Venys picture"
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
