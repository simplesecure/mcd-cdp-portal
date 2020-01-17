import React from 'react';

import { hot } from 'react-hot-loader/root';

import styled from 'styled-components';
import { Link, useCurrentRoute } from 'react-navi';

import OasisLayout from '../layouts/OasisLayout';
import SEO from '../components/SEO';
import mixpanel from 'mixpanel-browser';
import { Routes } from '../utils/constants';

import {
  Box
} from '@makerdao/ui-components-core';
import useLanguage from 'hooks/useLanguage';

const TopBackground = styled.div`
  position: absolute;
  height: 570px;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background: ${props => props.background}
`;

const AboutTrade = hot(() => {

  return (
    <OasisLayout style={{position: 'static'}}>
      <TopBackground background="linear-gradient(180deg, rgba(199, 216, 227, 0.53) 0%, rgba(199, 216, 227, 0.53) 0%, rgba(222, 239, 236, 0.37) 63.02%, rgba(222, 239, 236, 0) 100%)"/>
      <SEO title="Oasis - About: Trade" />
      <h1>Trade</h1>
    </OasisLayout>
  );
});

const AboutBorrow = () => <OasisLayout>
  <h1>Borrow</h1>
</OasisLayout>;

const AboutSave = hot(() => <OasisLayout>
  <h1>Save</h1>
</OasisLayout>);

export { AboutTrade, AboutBorrow, AboutSave };