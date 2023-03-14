import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'Email',
    link: 'viniciussport2004@gmail.com',
    href: 'mailto:viniciussport2004@gmail.com',
  },
  {
    social: 'LinkedIn',
    link: 'linkedin.com/in/vinícius-gonçalves-reis-4544a921a',
    href: 'https://www.linkedin.com/in/vinícius-gonçalves-reis-4544a921a/',
  },
  {
    social: 'GitHub',
    link: 'github.com/venysssssssssss',
    href: 'https://github.com/venysssssssssss',
  },
  {
    social: 'Website',
    link: 'venys.tech',
    href: 'https://venys.tech',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
       <p className={styles.line}>
       tag: <a>production</a>
        </p>
      <p className={styles.line}>
        <span>Vinícius</span>&#58;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;&#8212; <span>socials</span>&#58;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
    </div>
  );
};

export default ContactCode;
