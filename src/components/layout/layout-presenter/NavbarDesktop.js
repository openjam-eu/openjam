import React, { Component } from 'react';
import { ThemeConsumer } from 'styled-components';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Menu, Container, Image, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

import LanguageDropdown from './LanguageDropdown';

import { logoutUser } from '../../../redux/modules/auth';
import { clearCurrentProfile } from '../../../redux/modules/profile';
import logo from '../../../images/logos/logo_white.svg';

class NavbarDesktop extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLogoutClick = e => {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  };

  render() {
    const { auth, playing, height, t } = this.props;
    const { activeItem } = this.state;
    const { isAuthenticated, user } = auth;

    const leftLinks = (
      <React.Fragment>
        <Menu.Item
          as={Link}
          to="/explore"
          name="explore"
          active={activeItem === 'explore'}
          onClick={this.handleItemClick}
        >
          {t('components.navbar.explore')}
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/share"
          name="share"
          active={activeItem === 'share'}
          onClick={this.handleItemClick}
        >
          {t('components.navbar.share')}
        </Menu.Item>
        {/* <Menu.Item>
          <Input className="icon" icon="search" placeholder="Search..." inverted />
        </Menu.Item> */}
      </React.Fragment>
    );

    const guestLinks = (
      <ThemeConsumer>
        {theme => (
          <Menu.Item as={Link} to="/login" name="landing" onClick={this.handleItemClick}>
            <Button color={theme.primarySemantic}>{t('components.navbar.sign-in')}</Button>
          </Menu.Item>
        )}
      </ThemeConsumer>
    );

    const authLinks = (
      <React.Fragment>
        <Menu.Item
          as={Link}
          to="/dashboard"
          name="dashboard"
          active={activeItem === 'dashboard'}
          onClick={this.handleItemClick}
        >
          <Image
            src={user.profileImageUrl}
            alt={`${user.firstName} ${user.lastName}`}
            circular
            size="mini"
            title="You must have a Gravatar connected to your email to display an image."
          />
          <span style={{ marginLeft: '0.5em' }}>{user.firstName}</span>
        </Menu.Item>
        <Menu.Item onClick={this.handleLogoutClick}>{t('components.navbar.logout')}</Menu.Item>
      </React.Fragment>
    );

    return (
      <ThemeConsumer>
        {theme => (
          <Menu inverted fixed="top" style={{ height: `${height}px`, backgroundColor: 'black' }}>
            <Container>
              <Menu.Item
                header
                as={Link}
                to="/"
                name="landing"
                active
                onClick={this.handleItemClick}
                color={theme.primarySemantic}
              >
                <img
                  src={logo}
                  style={
                    playing
                      ? {
                          margin: '0.5em 0.5em 0.5em 0',
                          animationName: 'spin',
                          animationDuration: '5000ms',
                          animationIterationCount: 'infinite',
                          animationTimingFunction: 'linear',
                        }
                      : { margin: '0.5em 0.5em 0.5em 0' }
                  }
                  alt="logo"
                />
                <strong style={{ fontFamily: 'Comfortaa' }}>{t('app')}</strong>
              </Menu.Item>

              {leftLinks}

              <Menu.Menu position="right">
                <LanguageDropdown />
                {isAuthenticated ? authLinks : guestLinks}
              </Menu.Menu>
            </Container>
          </Menu>
        )}
      </ThemeConsumer>
    );
  }
}

NavbarDesktop.propTypes = {
  height: PropTypes.number.isRequired,
  logoutUser: PropTypes.func.isRequired,
  clearCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  playing: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  playing: state.player.playing,
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile },
)(withNamespaces('common')(NavbarDesktop));
