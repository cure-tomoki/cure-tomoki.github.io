import { Mail } from '@styled-icons/feather';
import * as React from 'react';
import styled from 'styled-components';

import Link from '~/atoms/Link';
import Contacts, { Contact } from '~/data/contacts';
import useWindowSize from '~/hooks/useWindowSize';
import { SP_MAX_WIDTH } from '~/theme';

const ContactItem = ({ serviceName, accountName, pageURL, Icon }: Contact) => {
  const { isSP } = useWindowSize();
  return (
    <_ContactItem>
      <ContactLink href={pageURL} target="_blank">
        <Icon
          aria-hidden="false"
          aria-label={serviceName}
          height={isSP ? 24 : 32}
          width={isSP ? 24 : 32}
        />
        <AccountName>{accountName}</AccountName>
      </ContactLink>
    </_ContactItem>
  );
};

const ContactsContent: React.FC = () => {
  const { isSP } = useWindowSize();
  return (
    <>
      <ContactsBodyText>
        Feel free to get in touch with me. I am always open to discussing new
        projects, ideas or opportunities to be a part of your vision. Please
        contact me via email or Twitter DM, and I will (hopefully) get back in
        touch with you！
      </ContactsBodyText>
      <Email>
        <ContactLink href="mailto:kano_tomoki@cyberagent.co.jp">
          <Mail
            aria-hidden="false"
            aria-label={'email'}
            height={isSP ? 24 : 32}
            width={isSP ? 24 : 32}
          />
          <AccountName>cure.tomoki@gmail.com</AccountName>
        </ContactLink>
      </Email>
      <ContactsBodyText>You can also find me here:</ContactsBodyText>
      <ContactList>
        {Contacts.map((contact, idx) => (
          <ContactItem {...contact} key={`contactItem-${idx}`} />
        ))}
      </ContactList>
    </>
  );
};

const ContactsBodyText = styled.p(({ theme }) => ({
  marginBottom: theme.spacing.double,
}));

const Email = styled.div({
  display: 'flex',
  justifyContent: 'center',
});

const ContactList = styled.ul({
  columnCount: 2,
  columnWidth: SP_MAX_WIDTH / 3,
});

const _ContactItem = styled.li(({ theme }) => ({
  fontSize: theme.fontSize.s,
}));

const ContactLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing.double,
  color: theme.color.onSurface,
  '&:visited': {
    color: theme.color.onSurface,
  },
  '&:hover': {
    color: theme.color.primaryLight,
  },
}));

const AccountName = styled.span(({ theme }) => ({
  marginLeft: theme.spacing.normal,
}));

export default ContactsContent;
