import React from 'react';
import PropTypes from 'prop-types';
import LinkEntity from './LinkEntity';

const LinkArtistNames = ({ artists, as }) =>
  artists.length > 0 &&
  artists
    .map(artist => {
      if (!artist.images && !artist.information) {
        return artist.name;
      }

      if (artist !== null) {
        return <LinkEntity key={artist._id} entity={artist} as={as} />;
      }
      return null;
    })
    .reduce((prev, curr) => [prev, ' & ', curr]);

LinkArtistNames.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  as: PropTypes.oneOf(['link', 'table', 'inverted']),
};

LinkEntity.defaultProps = {
  as: 'link',
};

export default LinkArtistNames;
