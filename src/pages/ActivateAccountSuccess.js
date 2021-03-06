import React from 'react';
import { ThemeConsumer } from 'styled-components';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Grid, Icon, Header, Button, Divider } from 'semantic-ui-react';

import BackgroundScreen from '../components/BackgroundScreen';

const RegisterThanks = ({ t }) => (
  <ThemeConsumer>
    {theme => (
      <BackgroundScreen>
        <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 500 }}>
            <Header as="h1" icon inverted>
              <Icon name="lock open" />
              {t('pages.activate-account-success.header')}
              <Header.Subheader>{t('pages.activate-account-success.subheader')}</Header.Subheader>
            </Header>
            <Divider />
            <Button as={Link} to="login" color={theme.primarySemantic} size="big" fluid>
              {t('pages.activate-account-success.sign-in')}
            </Button>
          </Grid.Column>
        </Grid>
      </BackgroundScreen>
    )}
  </ThemeConsumer>
);

export default withNamespaces('common')(RegisterThanks);
