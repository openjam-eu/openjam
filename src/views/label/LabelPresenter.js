// @flow

import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';

import Body from '../../components/Body';

type Props = {
  label: { name: string },
  t: any,
};

const LabelPresenter = ({ label, t }: Props) => (
  <Body breadcrumbSegments={[<Link to="/labels">{t('pages.label.labels')}</Link>, label.name]} />
);

export default withNamespaces('common')(LabelPresenter);