// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Button, GridRow, GridColumn } from 'semantic-ui-react';

import isEmpty from '../../lib/validation/is-empty';
import Social from '../../components/Social';

type Props = {
  profile: {
    user: {
      avatar: string,
      fullname: string,
    },
    status: string,
    company: string,
    location: string,
    website: string,
    social: {
      soundcloud: string,
      twitter: string,
      facebook: string,
      linkedin: string,
      instagram: string,
      youtube: string,
    },
  },
};

const ProfileGithub = ({ profile }: Props) => (
  <React.Fragment>
    <GridRow>
      <GridColumn width={16} color="blue" style={{ borderRadius: '.28571429rem .28571429rem 0 0' }}>
        <Button as={Link} to="/jammers" floated="left">
          Back to Profiles
        </Button>
      </GridColumn>
    </GridRow>
    <GridRow textAlign="center">
      <GridColumn width={16} color="blue">
        <Image src={profile.user.avatar} circular centered />
        <h1>{profile.user.fullname}</h1>
        <p>
          {profile.status}
          {isEmpty(profile.company) ? null : <span>{` at ${profile.company}`}</span>}
        </p>
        {isEmpty(profile.location) ? null : <p>{profile.location}</p>}

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'flex', margin: 'auto 0', padding: '5px' }}>
            {isEmpty(profile.website) ? null : <Social href={profile.website} />}

            {isEmpty(profile.social && profile.social.soundcloud) ? null : (
              <Social href={profile.social.soundcloud} />
            )}

            {isEmpty(profile.social && profile.social.twitter) ? null : (
              <Social href={profile.social.twitter} />
            )}

            {isEmpty(profile.social && profile.social.facebook) ? null : (
              <Social href={profile.social.facebook} />
            )}

            {isEmpty(profile.social && profile.social.linkedin) ? null : (
              <Social href={profile.social.linkedin} />
            )}

            {isEmpty(profile.social && profile.social.instagram) ? null : (
              <Social href={profile.social.instagram} />
            )}

            {isEmpty(profile.social && profile.social.youtube) ? null : (
              <Social href={profile.social.youtube} />
            )}
          </div>
        </div>
      </GridColumn>
    </GridRow>
  </React.Fragment>
);

export default ProfileGithub;
