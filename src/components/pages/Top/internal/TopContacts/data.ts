import { Twitter, Github, Facebook, Instagram } from '@styled-icons/feather';

import { Contact } from './types';

export const data: Contact[] = [
  {
    serviceName: 'Twitter',
    accountName: '@cure_tmk',
    pageURL: 'https://twitter.com/cure_tmk',
    Icon: Twitter,
  },

  {
    serviceName: 'GitHub',
    accountName: '@cure-tmk',
    pageURL: 'https://github.com/cure-tmk',
    Icon: Github,
  },

  {
    serviceName: 'Instagram',
    accountName: '@cure_tmk',
    pageURL: 'https://www.instagram.com/cure_tmk/',
    Icon: Instagram,
  },

  {
    serviceName: 'Facebook',
    accountName: 'Tomoki Kano',
    pageURL: 'https://www.facebook.com/cure.tmk/',
    Icon: Facebook,
  },
];
