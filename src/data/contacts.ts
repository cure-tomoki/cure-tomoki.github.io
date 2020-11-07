import { Twitter, Github, Facebook, Instagram } from '@styled-icons/feather';
import { StyledIcon } from '@styled-icons/styled-icon';

export interface Contact {
  serviceName: string;
  accountName: string;
  pageURL: string;
  Icon: StyledIcon;
}

const Contacts: Contact[] = [
  {
    serviceName: 'Twitter',
    accountName: '@cure_tmk',
    pageURL: 'https://twitter.com/cure_tmk',
    Icon: Twitter,
  },

  {
    serviceName: 'GitHub',
    accountName: '@cure-tomoki',
    pageURL: 'https://github.com/cure-tomoki',
    Icon: Github,
  },

  {
    serviceName: 'Instagram',
    accountName: 'cure_tomoki',
    pageURL: 'https://www.instagram.com/cure_tomoki/',
    Icon: Instagram,
  },

  {
    serviceName: 'Facebook',
    accountName: 'Tomoki Kano',
    pageURL: 'https://www.facebook.com/cure.tomoki/',
    Icon: Facebook,
  },
];

export default Contacts;
