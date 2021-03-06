import React, { Component } from 'react';
import { ThemeConsumer } from 'styled-components';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Form, Message, Grid, Icon, Header, Segment } from 'semantic-ui-react';

import BackgroundScreen from '../../components/BackgroundScreen';
import Input from '../../components/Input';

class RegisterPresenter extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
    pin: '',
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const { firstName, lastName, email, password, password2, pin } = this.state;
    const { registerUser, history } = this.props;

    const newUser = {
      firstName,
      lastName,
      email,
      password,
      password2,
      pin,
    };

    registerUser(newUser, history);
  };

  render() {
    const { firstName, lastName, email, password, password2, pin } = this.state;
    const { errors, t } = this.props;

    return (
      <ThemeConsumer>
        {theme => (
          <BackgroundScreen>
            <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
              <Grid.Column style={{ maxWidth: 500 }}>
                <Header as="h1" icon inverted>
                  <Icon name="sign in" />
                  {t('pages.register.header')}
                  <Header.Subheader>{t('pages.register.subheader')}</Header.Subheader>
                </Header>

                <Segment stacked>
                  <Form error noValidate onSubmit={this.handleSubmit}>
                    <Form.Group widths="equal">
                      <Input
                        as="text-field"
                        name="firstName"
                        placeholder={t('pages.register.input-firstname')}
                        icon="user"
                        value={firstName}
                        onChange={this.handleChange}
                        error={errors.firstName}
                      />

                      <Input
                        as="text-field"
                        name="lastName"
                        placeholder={t('pages.register.input-lastname')}
                        icon="user"
                        value={lastName}
                        onChange={this.handleChange}
                        error={errors.lastName}
                      />
                    </Form.Group>

                    <Input
                      as="text-field"
                      type="email"
                      name="email"
                      placeholder={t('pages.register.input-email')}
                      icon="mail"
                      value={email}
                      onChange={this.handleChange}
                      error={errors.email}
                      info={t('pages.register.gravatar')}
                    />

                    <Input
                      as="text-field"
                      type="password"
                      name="password"
                      placeholder={t('pages.register.input-password')}
                      icon="lock"
                      value={password}
                      onChange={this.handleChange}
                      error={errors.password}
                    />

                    <Input
                      as="text-field"
                      type="password"
                      name="password2"
                      placeholder={t('pages.register.input-password2')}
                      icon="lock"
                      value={password2}
                      onChange={this.handleChange}
                      error={errors.password2}
                    />

                    <Message info>
                      <Message.Header>{t('pages.register.note')}</Message.Header>
                      <p>{t('pages.register.pin-info')}</p>
                    </Message>

                    <Input
                      as="text-field"
                      name="pin"
                      placeholder={t('pages.register.input-pin')}
                      icon="asterisk"
                      value={pin}
                      onChange={this.handleChange}
                      error={errors.pin}
                    />

                    <Message error header={errors.error} content={errors.message} />

                    <Form.Button
                      fluid
                      size="big"
                      color={theme.primarySemantic}
                      content={t('pages.register.action-submit')}
                    />
                  </Form>
                </Segment>

                <Message style={{ textAlign: 'center' }}>
                  {t('pages.register.already')}
                  <br />
                  <Link to="/login">{t('pages.register.sign-in')}</Link>
                </Message>
              </Grid.Column>
            </Grid>
          </BackgroundScreen>
        )}
      </ThemeConsumer>
    );
  }
}

export default withNamespaces('common')(RegisterPresenter);
