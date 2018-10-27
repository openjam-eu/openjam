import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Divider, Header, Container } from 'semantic-ui-react';
import TitleBreadcrumb from './TitleBreadcrumb';

const Body = ({ breadcrumbSegments, description, children }) => {
  return (
    <Container>
      <Segment basic>
        <Header as="h1">
          <TitleBreadcrumb breadcrumbSegments={breadcrumbSegments} />
          <Header.Subheader style={{ fontWeight: '300', color: '#999' }}>
            {description ? description : <br />}
          </Header.Subheader>
        </Header>

        <Divider />
        {children}
      </Segment>
    </Container>
  );
};

Body.propTypes = {
  breadcrumbSegments: PropTypes.arrayOf(PropTypes.any).isRequired,
  description: PropTypes.any,
};

export default Body;
