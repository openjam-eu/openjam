// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { fetchAlbums, getAlbums, getLoading } from '../reducers/data/album';
import Spinner from '../components/Spinner';

import AlbumsPresenter from './albums/AlbumsPresenter';

type Props = {
  fetchAlbums: () => void,
  albums?: {}[],
  loading: boolean,
};

class Albums extends PureComponent<Props> {
  static defaultProps = {
    albums: null,
  };

  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {
    const { albums, loading } = this.props;

    if (albums === null || loading) {
      return <Spinner />;
    }
    if (albums.length === 0) {
      return <h4>No albums found...</h4>;
    }
    return <AlbumsPresenter albums={albums} />;
  }
}

const mapStateToProps = state => ({
  albums: getAlbums(state),
  loading: getLoading(state),
});

export default connect(
  mapStateToProps,
  { fetchAlbums },
)(Albums);