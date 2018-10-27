import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import AuthenticatedRoute from './AuthenticatedRoute';
import Loading from './Loading';

const AsyncLogin = Loadable({
  loader: () => import('../pages/Login'),
  loading: Loading,
  timeout: 10000,
});

const AsyncRegister = Loadable({
  loader: () => import('../pages/Register'),
  loading: Loading,
  timeout: 10000,
});

const AsyncLanding = Loadable({
  loader: () => import('../pages/Landing'),
  loading: Loading,
  timeout: 10000,
});

const AsyncShare = Loadable({
  loader: () => import('../pages/Share'),
  loading: Loading,
  timeout: 10000,
});

const AsyncJammers = Loadable({
  loader: () => import('../pages/Jammers'),
  loading: Loading,
  timeout: 10000,
});

const AsyncProfile = Loadable({
  loader: () => import('../components/profile/Profile'),
  loading: Loading,
  timeout: 10000,
});

const AsyncPlaylists = Loadable({
  loader: () => import('../pages/Playlists'),
  loading: Loading,
  timeout: 10000,
});

const AsyncPlaylist = Loadable({
  loader: () => import('../pages/Playlist'),
  loading: Loading,
  timeout: 10000,
});

const AsyncTracks = Loadable({
  loader: () => import('../pages/Tracks'),
  loading: Loading,
  timeout: 10000,
});

const AsyncTrack = Loadable({
  loader: () => import('../pages/Track'),
  loading: Loading,
  timeout: 10000,
});

const AsyncArtists = Loadable({
  loader: () => import('../pages/Artists'),
  loading: Loading,
  timeout: 10000,
});

const AsyncArtist = Loadable({
  loader: () => import('../pages/Artist'),
  loading: Loading,
  timeout: 10000,
});

const AsyncAlbums = Loadable({
  loader: () => import('../pages/Albums'),
  loading: Loading,
  timeout: 10000,
});

const AsyncAlbum = Loadable({
  loader: () => import('../pages/Album'),
  loading: Loading,
  timeout: 10000,
});

const AsyncLabels = Loadable({
  loader: () => import('../pages/Labels'),
  loading: Loading,
  timeout: 10000,
});

const AsyncLabel = Loadable({
  loader: () => import('../pages/Label'),
  loading: Loading,
  timeout: 10000,
});

const AsyncDashboard = Loadable({
  loader: () => import('../components/dashboard/Dashboard'),
  loading: Loading,
  timeout: 10000,
});

const AsyncCreateProfile = Loadable({
  loader: () => import('../components/create-profile/CreateProfile'),
  loading: Loading,
  timeout: 10000,
});

const AsyncEditProfile = Loadable({
  loader: () => import('../components/edit-profile/EditProfile'),
  loading: Loading,
  timeout: 10000,
});

const AsyncNotFound = Loadable({
  loader: () => import('../components/not-found/NotFound'),
  loading: Loading,
  timeout: 10000,
});

export default ({ childProps }) => (
  <Switch>
    <Route path="/" exact component={AsyncLanding} props={childProps} />
    <Route path="/login" exact component={AsyncLogin} props={childProps} />
    <Route path="/register" exact component={AsyncRegister} props={childProps} />
    <Route path="/share" exact component={AsyncShare} props={childProps} />
    <Route path="/jammers" exact component={AsyncJammers} props={childProps} />
    <Route path="/profile/:handle" exact component={AsyncProfile} props={childProps} />
    <Route path="/playlists" exact component={AsyncPlaylists} props={childProps} />
    <Route path="/playlist/:id" exact component={AsyncPlaylist} props={childProps} />
    <Route path="/tracks" exact component={AsyncTracks} props={childProps} />
    <Route path="/track/:id" exact component={AsyncTrack} props={childProps} />
    <Route path="/artists" exact component={AsyncArtists} props={childProps} />
    <Route path="/artist/:id" exact component={AsyncArtist} props={childProps} />
    <Route path="/albums" exact component={AsyncAlbums} props={childProps} />
    <Route path="/album/:id" exact component={AsyncAlbum} props={childProps} />
    <Route path="/labels" exact component={AsyncLabels} props={childProps} />
    <Route path="/label/:id" exact component={AsyncLabel} props={childProps} />
    <AuthenticatedRoute path="/dashboard" exact component={AsyncDashboard} props={childProps} />
    <AuthenticatedRoute
      path="/create-profile"
      exact
      component={AsyncCreateProfile}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/edit-profile"
      exact
      component={AsyncEditProfile}
      props={childProps}
    />

    {/* Finally, catch all unmatched routes */}
    <Route component={AsyncNotFound} />
  </Switch>
);
