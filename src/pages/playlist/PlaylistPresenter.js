import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Container, Grid, Divider, Header } from 'semantic-ui-react';

import Div from '../../components/Div';
import Flex from '../../components/Flex';
import Hero from '../../components/Hero';
import PlayPause from '../../components/PlayPause';
import PlaylistTracks from '../../components/PlaylistTracks';
import PlaylistCover from '../../components/PlaylistCover';
import Body from '../../components/Body';
import LinkEntity from '../../components/LinkEntity';

const PlaylistPresenter = ({ playlist, t }) => (
  <React.Fragment>
    <Hero src={playlist.tracks[0].coverurl.w800}>
      <Flex fluid row alignCenter>
        <Div mr="16px">
          <PlayPause entity={playlist} />
        </Div>
        <Flex fluid column justifyCenter>
          <Header as="h1" inverted>
            <LinkEntity entity={playlist} as="inverted" alternate />
          </Header>
        </Flex>
      </Flex>
    </Hero>
    <Divider style={{ marginTop: 0 }} />

    <Container>
      <Grid divided stackable reversed="mobile">
        <Grid.Column mobile={8} tablet={6} computer={5}>
          <Grid columns={2} doubling>
            <Grid.Column width={16} only="tablet computer">
              <PlaylistCover tracks={playlist.tracks} />
              <p style={{ marginTop: '1em' }}>{playlist.description}</p>
            </Grid.Column>
          </Grid>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={10} computer={11}>
          <Body
            breadcrumbSegments={[
              <Link to="/playlists">{t('pages.playlists.header')}</Link>,
              playlist.name,
            ]}
          >
            <PlaylistTracks playlist={playlist} />
          </Body>
        </Grid.Column>
      </Grid>
    </Container>
  </React.Fragment>
);

PlaylistPresenter.propTypes = {
  playlist: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default withNamespaces('common')(PlaylistPresenter);
