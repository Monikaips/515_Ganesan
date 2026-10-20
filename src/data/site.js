import { assetUrl } from '../lib/assetUrl.js';

export const site = {
  name: '515 Ganesan',
  title: 'Social Worker Alangudi Dr. 515 Ganesan',
  email: '515sganesan@gmail.com',
  phone: '+91 8248354118',
  address: 'Alangudi, Pudukottai(Dt), Tamil Nadu.',
  mark: assetUrl('archive/media/logo.jpg'),
  markAlt: '75 years of 515 Ganesan',
  developerUrl: 'https://www.linkedin.com/in/monika-p-30b32a22a/',
  socials: [
    { href: 'https://www.instagram.com/515ganesan_official/?hl=en', icon: 'fab fa-instagram', label: 'Instagram' },
    { href: 'https://www.facebook.com/515GanesanAlangudi/', icon: 'fab fa-facebook-f', label: 'Facebook' },
    { href: 'https://x.com/515ganesan_off', icon: 'fab fa-twitter', label: 'X' },
    { href: 'https://www.linkedin.com/in/515ganesan', icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
    { href: 'https://www.youtube.com/@515ganesan', icon: 'fab fa-youtube', label: 'YouTube' },
  ],
};

/*
  Primary nav stays short on purpose — first-time visitors should
  reach the main journeys in one glance. Everything else lives in
  navMore (menu + footer) so pages are still easy to find.
*/
export const navPrimary = [
  { to: '/the-man', label: 'About' },
  { to: '/the-515', label: 'Why 515' },
  { to: '/service', label: 'His Work' },
  { to: '/archive', label: 'Archive' },
  { to: '/contact', label: 'Contact' },
];

export const navMore = [
  { to: '/disaster-relief', label: 'Disaster Relief' },
  { to: '/journey', label: 'Life Journey' },
  { to: '/awards', label: 'Awards' },
  { to: '/his-voice', label: 'His Voice' },
  { to: '/family', label: 'Family' },
  { to: '/legacy', label: 'Legacy' },
];

/** @deprecated Prefer navPrimary / navMore — kept for any older imports */
export const navLinks = [...navPrimary, ...navMore];
