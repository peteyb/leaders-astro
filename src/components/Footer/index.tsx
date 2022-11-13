import styles from './footer.module.scss'
import Container from '../Container'

import IconFacebook from '../../images/icons/social/facebook.svg'
import IconLinkedIn from '../../images/icons/social/linkedin.svg'
import IconTwitter from '../../images/icons/social/twitter.svg'

const Footer = () => {
  const footerData = {
    theKey: [
      {
        id: 1,
        label: 'About',
        url: '/about',
      },
      {
        id: 2,
        label: 'For schools',
        url: '/why-us#school',
      },
      {
        id: 3,
        label: 'For trusts',
        url: '/why-us#trust',
      },
      {
        id: 4,
        label: 'Membership tiers',
        url: 'https://my.thekeysupport.com/pricing/',
      },
    ],
    services: [
      {
        id: 1,
        label: 'Leaders',
        url: 'https://schoolleaders.thekeysupport.com',
      },
      {
        id: 2,
        label: 'Governance',
        url: 'https://schoolgovernors.thekeysupport.com',
      },
      {
        id: 3,
        label: 'Safeguarding',
        url: 'https://safeguarding.thekeysupport.com',
      },
      {
        id: 4,
        label: 'CPD',
        url: 'https://cpd.thekeysupport.com/landing',
      },
    ],
    company: [
      {
        id: 1,
        label: 'About',
        url: '/about',
      },
      {
        id: 2,
        label: 'Blog',
        url: '/blog',
      },
      {
        id: 3,
        label: 'Careers',
        url: '/careers',
      },
      {
        id: 4,
        label: 'About The Key Group',
        url: '/about-group',
      },
    ],
    contact: [
      {
        id: 1,
        label: 'Get in touch',
        url: '/contact',
      },
      {
        id: 2,
        label: '0800 061 4500',
        url: 'tel:0800 061 4500',
      },
      {
        id: 3,
        label: 'Help centre',
        url: 'https://help.thekeysupport.com/hc/en-us/?marker=fromTKSFooter',
      },
    ],
    social: [
      {
        id: 1,
        label: 'Twitter',
        url: 'https://twitter.com/TheKeySL',
        img: IconTwitter,
      },
      {
        id: 2,
        label: 'Facebook',
        url: 'https://www.facebook.com/TheKeySupport',
        img: IconFacebook,
      },
      {
        id: 3,
        label: 'Linkedin',
        url: 'https://www.linkedin.com/company/the-key-support-services-limited',
        img: IconLinkedIn,
      },
    ],
    copyright: [
      {
        id: 1,
        label: 'Privacy',
        url: '/privacy-policy',
      },
      {
        id: 2,
        label: 'Accessibility',
        url: '/accessibility',
      },
      {
        id: 3,
        label: 'Cookies',
        url: '/cookies',
      },
    ],
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <Container>
          <nav
            className={styles.footerAbout}
            aria-labelledby="about-footer-header"
          >
            <h3 id="about-footer-header">The Key</h3>
            {footerData.theKey.map((link) => (
              <a href={link.url} key={link.id}>
                {link.label}
              </a>
            ))}
          </nav>

          <nav
            className={styles.footerServices}
            aria-labelledby="services-footer-header"
          >
            <h3 id="services-footer-header">Services</h3>
            {footerData.services.map((link) => (
              <a href={link.url} target="_blank" rel="noreferrer" key={link.id}>
                {link.label}
              </a>
            ))}
          </nav>

          <nav
            className={styles.footerCompany}
            aria-labelledby="company-footer-header"
          >
            <h3 id="company-footer-header">Company</h3>
            {footerData.company.map((link) => (
              <a href={link.url} key={link.id}>
                {link.label}
              </a>
            ))}
          </nav>

          <nav
            className={styles.footerContact}
            aria-labelledby="contact-footer-header"
          >
            <h3 id="contact-footer-header">Contact</h3>
            {footerData.contact.map((link) => (
              <a href={link.url} key={link.id}>
                {link.label}
              </a>
            ))}
          </nav>
        </Container>
      </div>

      <div className={styles.footerCopyright}>
        <Container>
          <div className={styles.copyrightLinks}>
            <p>
              © The Key | Company: 08268303 |{' '}
              <a href="tel:0800 061 4500">0800 061 4500</a> |{' '}
              <span>
                {footerData.copyright.map((link) => (
                  <a href={link.url} key={link.id}>
                    {link.label}
                  </a>
                ))}
              </span>
            </p>
          </div>

          <nav className={styles.socialLinks}>
            {footerData.social.map((link) => (
              <a href={link.url} target="_blank" rel="noreferrer" key={link.id}>
                <img src={link.img} alt="logo"/>
                <span className="visually-hidden">{link.label}</span>
              </a>
            ))}
          </nav>
        </Container>
      </div>
    </footer>
  )
}
export default Footer
