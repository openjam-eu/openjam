import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavbarDesktop from './layout-presenter/NavbarDesktop';
import NavbarMobile from './layout-presenter/NavbarMobile';
import NavbarSide from './layout-presenter/NavbarSide';
import Player from '../Player';
import { Responsive, Sidebar } from 'semantic-ui-react';
import { Top, Container, Middle, Bottom } from './styles';

class LayoutPresenter extends Component {
  render() {
    const {
      sidebarVisible,
      playing,
      isAuthenticated,
      user,
      children,
      hideSidebar,
      toggleSidebar,
    } = this.props;
    const topbarHeight = 56;
    const playerHeight = 90;
    const containerHeight = `calc(100vh - ${topbarHeight}px - ${playerHeight}px)`;

    return (
      <div>
        <Top>
          <Responsive>
            <NavbarMobile
              height={topbarHeight}
              playing={playing}
              toggleSidebar={toggleSidebar}
              isAuthenticated={isAuthenticated}
              user={user}
            />
          </Responsive>
          <Responsive minWidth={Responsive.onlyTablet.minWidth}>
            <NavbarDesktop height={topbarHeight} />
          </Responsive>
        </Top>

        <Sidebar.Pushable as={Container} style={{ height: containerHeight }}>
          <NavbarSide visible={sidebarVisible} hideSidebar={hideSidebar} />

          <Sidebar.Pusher
            as={Container}
            style={{
              width: '100vw',
              height: containerHeight,
              transform: sidebarVisible && 'translate3d(calc(-100% + 11em), 0, 0)',
            }}
          >
            {/* <Left height={containerHeight} /> */}
            <Middle height={containerHeight}>{children}</Middle>
            {/* <Right height={containerHeight} /> */}
          </Sidebar.Pusher>
        </Sidebar.Pushable>

        <Bottom>
          <Player height={playerHeight} />
        </Bottom>
      </div>
    );
  }
}

LayoutPresenter.propTypes = {
  sidebarVisible: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  hideSidebar: PropTypes.func.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default LayoutPresenter;