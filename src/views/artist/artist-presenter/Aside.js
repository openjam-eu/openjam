// @flow

import React from 'react';

import isEmpty from '../../../lib/validation/is-empty';

import Genres from './aside/Genres';
import Socials from './aside/Socials';
import YearsActive from './aside/YearsActive';
import Labels from './aside/Labels';

type Props = {
  artist: {
    genres: [],
    information: {
      website: string,
      years: [{ from: string, to: string }],
      labels: [],
      socials: [],
    },
  },
};

const Aside = ({ artist }: Props) => {
  const {
    genres,
    information: { website, socials, labels, years },
  } = artist;

  return (
    <div>
      {!isEmpty(genres) && <Genres genres={genres} />}
      {!isEmpty(socials) && <Socials {...{ website, socials }} />}
      {!isEmpty(years) && <YearsActive years={years} />}
      {!isEmpty(labels) && <Labels labels={labels} />}
    </div>
  );
};

export default Aside;