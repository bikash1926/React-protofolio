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
  // {
  //   label: 'Reviews',
  //   href: '#reviews'
  // },
  {
    label: 'Contact me',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: ' https://github.com/bikash1926'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/bikash-muduli-a86a33273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app '
  },
  // {
  //   label: 'Twitter X',
  //   href: ' '
  // },
  {
    label: 'Instagram',
    href: ' https://www.instagram.com/bikash_muduli23/profilecard/?igsh=MWxkdXR5Z2lydHlmZw=='
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
              {/* <img src="/images/logo.svg"
                alt="logo"
                width={40}
                height={40}
              /> */}
            </a>

            <p className="text-zinc-500 text-sm"
            >&copy;2025 <span className="text-zinc-200">Biaksh Muduli</span></p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;


