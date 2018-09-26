import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import LinkEntity from '../../../elements/Links/LinkEntity';
import LinkArtistNames from '../../../elements/Links/LinkArtistNames';

const TableTracks = ({ tracks }) => {
  return (
    <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Artist</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {tracks.map(track => (
          <Table.Row key={track._id}>
            <Table.Cell>{track.track_number}</Table.Cell>
            <Table.Cell>
              <LinkEntity entity={track} />
            </Table.Cell>
            <Table.Cell>
              <LinkArtistNames artists={track.artists} />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

TableTracks.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      track_number: PropTypes.number.isRequired,
      artists: PropTypes.array.isRequired,
    }).isRequired,
  ).isRequired,
};

export default TableTracks;
