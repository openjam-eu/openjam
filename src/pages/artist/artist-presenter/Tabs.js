import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Header, Tab, Card, Label } from 'semantic-ui-react';

import getYears from '../../../utils/getYears';
import Section from '../../../components/Section';

const Tabs = ({ artist, loading }) => {
  const { description, members } = artist.information;
  const hasDescription = description && description[0].length > 0;

  const titlesPane = {
    menuItem: 'Titles',
    render: () => (
      <Tab.Pane attached color="teal" loading={loading}>
        {artist.tracks !== null && (
          <Section
            title="Titles"
            items={artist.tracks.map(t => t.track)}
            maxHeight={256}
            showDivider={false}
          />
        )}
      </Tab.Pane>
    ),
  };

  const descriptionPane = {
    menuItem: 'Description',
    render: () => (
      <Tab.Pane attached color="teal">
        <Header as="h2">Description</Header>
        <div>
          {hasDescription ? (
            description.map(_ => <ReactMarkdown key={_} source={_} />)
          ) : (
            <span>There is no description for this artist</span>
          )}
        </div>
        <br />

        {members && (
          <React.Fragment>
            <Header as="h2">Members</Header>
            <Card.Group itemsPerRow={2} doubling>
              {members.map(_ => (
                <Card key={_.name} color="teal">
                  <Card.Content>
                    <Card.Header>{_.name}</Card.Header>
                    {_.years && <Card.Meta>{getYears(_.years)}</Card.Meta>}
                    {_.roles && (
                      <Card.Description>
                        {_.roles.map(role => (
                          <Label key={role} style={{ margin: '0px 4px 4px 0' }}>
                            {role}
                          </Label>
                        ))}
                      </Card.Description>
                    )}
                  </Card.Content>
                </Card>
              ))}
            </Card.Group>
          </React.Fragment>
        )}
      </Tab.Pane>
    ),
  };

  const panes = [titlesPane, descriptionPane];

  return <Tab menu={{ secondary: true, pointing: true }} panes={panes} />;
};

Tabs.propTypes = {
  artist: PropTypes.shape({
    tracks: PropTypes.array,
  }).isRequired,
  loading: PropTypes.bool,
};

Tabs.defaultProps = {
  loading: false,
};

export default Tabs;
