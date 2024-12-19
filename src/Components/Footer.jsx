import React from 'react'
import { ButtonPrimary } from './Button';

const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Work',
    href: '#work'
  },
  {
    label: 'Reviews',
    href: '#reviews'
  },
  {
    label: 'Contact me',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: ' '
  },
  {
    label: 'LinkedIn',
    href: ' '
  },
  {
    label: 'Twitter X',
    href: ' '
  },
  {
    label: 'Instagram',
    href: ' '
  },
  {
    label: 'CodePen',
    href: ' '
  }
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch]">Let&apos;s work together today!</h2>
            <ButtonPrimary
              href="mailto:bikashmuduli543@gmail.com"
              label="Start Project"
              icon="chevron_right"
            />
          </div>

          <div className="grid grid-cols-2">
            <div>
              <p className="mb-2">Sitemap</p>
              <ul className="">
                {sitemap.map(({ label, href }) => (
                  <li key={label} className="">
                    <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
           

          
            <div>
              <p className="mb-2">Social</p>
              <ul className="">
                {socials.map(({ label, href }) => (
                  <li key={label} className="">
                    <a href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                      target='_blank'
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            </div>
          

          <div className="flex items-center justify-between pt-10 mb-8 ">
            <a
              href=""
              className=''
            >
              <img src="/images/logo.svg"
                alt="logo"
                width={40}
                height={40}
              />
            </a>

            <p className="text-zinc-500 text-sm"
            >&copy;2024 <span className="text-zinc-200">biaksh</span></p>
          </div>

        </div>
      </div>
    </footer>
  );
};

// Add this line to fix the issue
export default Footer;


