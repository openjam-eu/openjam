import React from 'react';
import PropTypes from 'prop-types';
import PlaylistItem from './playlists-presenter/PlaylistItem';
import Body from '../../components/Body';
import Flex from '../../components/Flex';
import H2 from '../../components/H2';

const PlaylistsPresenter = ({ playlists }) => (
  <Body breadcrumbSegments={['Playlists']} description="Pick some music by playlist.">
    <H2 header="What's new" />
    <Flex wrap justifyStart>
      {playlists.map(playlist => (
        <PlaylistItem key={playlist._id} playlist={playlist} />
      ))}
    </Flex>
  </Body>
);

PlaylistsPresenter.propTypes = {
  playlists: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default PlaylistsPresenter;
