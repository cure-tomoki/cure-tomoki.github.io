import { Link } from '@components/fragments/links/Link';
import useWindowSize from '@hooks/useWindowSize';
import { Mail } from '@styled-icons/feather';
import * as React from 'react';
import styled from 'styled-components';

import { TopSection } from '../TopSection';
import { data } from './data';
import { Contact } from './types';

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

export const TopContacts: React.FC = () => {
  const { isSP } = useWindowSize();
  return (
    <TopSection headingID="contacts" headingText="Get in touch">
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
        {data.map((contact, idx) => (
          <ContactItem {...contact} key={`contactItem-${idx}`} />
        ))}
      </ContactList>
    </TopSection>
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
