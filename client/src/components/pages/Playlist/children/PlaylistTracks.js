import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import LinkEntity from '../../../../elements/Links/LinkEntity';
import LinkArtistNames from '../../../../elements/Links/LinkArtistNames';
import { HeaderCell, Row, Wrapper, Cover, Overlay, Icon } from './style';

const PlaylistTracks = ({ tracks, currentId, playing }) => {
  return (
    <Table basic="very">
      <Table.Header>
        <Table.Row>
          <HeaderCell colSpan="2">Track</HeaderCell>
          <HeaderCell>Artist</HeaderCell>
          <HeaderCell>Album</HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {tracks.map(track => (
          <Row key={track._id} active={track._id === currentId}>
            <Table.Cell style={{ padding: 0 }}>
              <Wrapper>
                <Cover
                  src={track.coverurl.w200}
                  style={{ width: '3em', height: '3em', borderRadius: '5%' }}
                  alt={track.title}
                />
                <Overlay onClick={() => console.log(`${track.title} is playing`)}>
                  <Icon
                    name={`${!playing ? 'play' : 'pause'} circle outline`}
                    inverted
                    color="grey"
                    size="large"
                    style={{ marginRight: 0 }}
                  />
                </Overlay>
              </Wrapper>
            </Table.Cell>
            <Table.Cell style={{ paddingLeft: 0 }}>
              <LinkEntity entity={track} as="table" strong={true} />
            </Table.Cell>
            <Table.Cell>
              <LinkArtistNames artists={track.artists} as="table" />
            </Table.Cell>
            <Table.Cell>
              <LinkEntity entity={track.album} as="table" />
            </Table.Cell>
          </Row>
        ))}
      </Table.Body>
    </Table>
  );
};

PlaylistTracks.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      track_number: PropTypes.number.isRequired,
      artists: PropTypes.array.isRequired,
    }).isRequired,
  ).isRequired,
  currentId: PropTypes.string.isRequired,
  playing: PropTypes.bool.isRequired,
};

export default PlaylistTracks;
