// @flow
/* eslint-disable no-unused-vars */

import axios from 'axios';

import { getApi } from 'api/logion';
import type { PlaylistBasic, PlaylistFilter } from 'lib/types';

const apiPlaylist = `${getApi()}/playlist`;

export async function fetchPlaylists(filter: PlaylistFilter) {
  const baseUrl = `${apiPlaylist}?`;

  const response = await axios.get(`${baseUrl}`);
  return response.data.docs;
}

export function addPlaylist(playlist: PlaylistBasic) {
  console.warn('not implemented', playlist);
}
