import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchArtist, getArtist, getArtistLoading } from '../redux/modules/page-artist';
import Spinner from '../components/Spinner';
import ArtistPresenter from './artist/ArtistPresenter';

class Artist extends Component {
  state = {
    artistId: null,
  };

  componentDidMount() {
    this.setState({ artistId: this.props.match.params.id }, () =>
      this.props.fetchArtist(this.state.artistId),
    );
  }

  componentWillReceiveProps(newProps) {
    const { params } = newProps.match;

    if (params.id !== this.state.artistId)
      this.setState({ artistId: params.id }, () => this.props.fetchArtist(this.state.artistId));
  }

  render() {
    const { artist, loading } = this.props;

    return artist === null || artist === undefined || loading ? (
      <Spinner />
    ) : (
      <ArtistPresenter artist={artist} loading={loading} />
    );
  }
}

Artist.propTypes = {
  fetchArtist: PropTypes.func.isRequired,
  artist: PropTypes.object,
  loading: PropTypes.bool,
};

Artist.defaultProps = {
  artist: null,
  loading: false,
};

const mapStateToProps = state => ({
  artist: getArtist(state),
  loading: getArtistLoading(state),
});

export default connect(
  mapStateToProps,
  { fetchArtist },
)(Artist);
