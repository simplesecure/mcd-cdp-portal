import React from 'react';

import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';
import { Link } from 'react-navi';

import OasisLayout from 'layouts/OasisLayout';
import SEO from 'components/SEO';
import Questions from 'components/Questions';

import { Routes } from 'utils/constants';

import { Box, Flex } from '@makerdao/ui-components-core';
import useLanguage from 'hooks/useLanguage';

const TopBackground = styled(Box)`
  position: absolute;
  height: 570px;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background: ${props => props.background};
`;

const Heading = styled(Box)`
  text-align: center;
  letter-spacing: 0.4px;
  margin: 154px auto 0;
  max-width: 500px;

  h1 {
    font-size: 48px;
    font-weight: bold;
    line-height: 58px;
    letter-spacing: 1.7px;
    color: #253a44;
    margin-bottom: 17px;
  }

  p {
    font-size: 18px;
    line-height: 27px;
    color: ${props => props.textColor};
  }

  .button {
    margin-top: 60px;
    color: ${props => props.btnTextColor};
    padding: 0 22px;
    border-radius: 6px;
    display: inline-block;
    font-size: 15px;
    font-weight: 500;
    height: 39px;
    line-height: 38px;
    text-decoration: none;
    box-shadow: 0 2px 2px ${props => props.btnShadowColor};
    transition: all 0.15s ease;
    background-color: white;
  }

  .button:hover {
    box-shadow: 0 5px 5px ${props => props.btnShadowColor};
    transform: translateY(-1px);
  }
`;

const KeyPoints = styled(Box)`
  margin-top: 200px;
  padding: 0 100px 0 148px;
  text-align: left;

  .key-point {
    justify-content: space-between;
    .image {
      width: 300px;
    }
    .content {
      max-width: 500px;

      h1 {
        font-family: 'SF Pro Display', Arial, Helvetica, sans-serif;
        font-size: 30px;
        line-height: 36px;
        letter-spacing: 0.01px;
        color: #231536;
        margin-bottom: 13px;
      }

      p {
        font-size: 18px;
        line-height: 23px;
        color: #48495f;
      }
    }
  }

  .key-point:nth-of-type(2) {
    margin: 350px 0;
  }
`;

const QuestionsSection = styled(Box)`
  margin-top: 328px;

  h3 {
    font-size: 30px;
    font-weight: normal;
    margin-bottom: 20px;
    line-height: 40px;
    color: #000;
  }
`;

const BottomNote = () => (
  <Box textAlign="center" mt="100px" fontSize="12px" lineHeight="14px">
    <Box>Have more questions?</Box>
    <Box mt="10px">Join us on chat and talk to the team</Box>
  </Box>
);

const AboutTrade = hot(() => {
  const { lang } = useLanguage();

  return (
    <OasisLayout style={{ position: 'static' }}>
      <SEO title="Oasis - About: Trade" />
      <TopBackground background="linear-gradient(180deg, rgba(199, 216, 227, 0.53) 0%, rgba(199, 216, 227, 0.53) 0%, rgba(222, 239, 236, 0.37) 63.02%, rgba(222, 239, 236, 0) 100%)" />
      <Heading
        textColor="#14303A"
        btnShadowColor="#C8E4E6"
        btnTextColor="#5894B5"
      >
        <h1>{lang.landing_page.trade_card.title}</h1>
        <p>{lang.landing_page.trade_card.description}</p>
        <a className="button" href={`/${Routes.TRADE}`}>
          {lang.landing_page.trade_card.button}
        </a>
      </Heading>
      <KeyPoints>
        <Flex className="key-point">
          <Box className="content">
            <h1>Decentralized Margin Trading</h1>
            <p>
              Users can choose to lock up their assets, draw DAI, and purchase
              more of that same asset to increase their exposure to their
              original position, without a third party.
            </p>
          </Box>
          <Box className="image" />
        </Flex>
        <Flex className="key-point">
          <Box className="image" />
          <Box className="content">
            <h1>Decentralized Margin Trading</h1>
            <p>
              Users can choose to lock up their assets, draw DAI, and purchase
              more of that same asset to increase their exposure to their
              original position, without a third party.
            </p>
          </Box>
        </Flex>
        <Flex className="key-point">
          <Box className="content">
            <h1>Decentralized Margin Trading</h1>
            <p>
              Users can choose to lock up their assets, draw DAI, and purchase
              more of that same asset to increase their exposure to their
              original position, without a third party.
            </p>
          </Box>
          <Box className="image" />
        </Flex>
      </KeyPoints>
      <QuestionsSection>
        <h3>Trade Questions</h3>
        <Questions />
      </QuestionsSection>
      <BottomNote />
    </OasisLayout>
  );
});

const AboutBorrow = hot(() => {
  const { lang } = useLanguage();

  return (
    <OasisLayout style={{ position: 'static' }}>
      <SEO title="Oasis - About: Borrow" />
      <TopBackground background="linear-gradient(180deg, rgba(238, 231, 217, 0.85) 0%, rgba(252, 234, 220, 0.42) 53.12%, rgba(250, 240, 226, 0) 100%)" />
      <Heading
        textColor="#55301F"
        btnShadowColor="#F1E3DB"
        btnTextColor="#945F47"
      >
        <h1>{lang.landing_page.borrow_card.title}</h1>
        <p>{lang.landing_page.borrow_card.description}</p>
        <Link className="button" href={`/${Routes.BORROW}`}>
          {lang.landing_page.borrow_card.button}
        </Link>
      </Heading>
      <KeyPoints>
        <Flex className="key-point">
          <Box className="content">
            <h1>Completely Permisionless</h1>
            <p>
              There are no restrictions related to prior borrowing history or
              cumbersome application processes. Anyone can access the system
              simply by using an Ethereum wallet address.
            </p>
          </Box>
          <Box className="image" />
        </Flex>
        <Flex className="key-point">
          <Box className="image" />
          <Box className="content">
            <h1>Flexible Repayment</h1>
            <p>
              There are no time limits or repayment schedules involved with
              using Maker Vault. Users are free to create and repay Dai, or add
              additional collateral whenever they choose.
            </p>
          </Box>
        </Flex>
        <Flex className="key-point">
          <Box className="content">
            <h1>No Counterparty Risk</h1>
            <p>
              The system is a set of ownerless, autonomous smart contracts. This
              means you don’t need to trust a counterparty institution to
              successfully manage or release your funds.
            </p>
          </Box>
          <Box className="image" />
        </Flex>
      </KeyPoints>
      <QuestionsSection>
        <h3>Borrow Questions</h3>
        <Questions />
      </QuestionsSection>
      <BottomNote />
    </OasisLayout>
  );
});

const AboutSave = hot(() => {
  const { lang } = useLanguage();

  return (
    <OasisLayout style={{ position: 'static' }}>
      <SEO title="Oasis - About: Save" />
      <TopBackground background="linear-gradient(180deg, rgba(213, 232, 227, 0.63) 0%, rgba(238, 240, 228, 0.56) 50%, rgba(238, 240, 228, 0) 100%)" />
      <Heading
        textColor="#0F2E28"
        btnShadowColor="#D7E9E3"
        btnTextColor="#699C90"
      >
        <h1>{lang.landing_page.save_card.title}</h1>
        <p>{lang.landing_page.save_card.description}</p>
        <Link className="button" href={`/${Routes.SAVE}`}>
          {lang.landing_page.save_card.button}
        </Link>
      </Heading>
      <KeyPoints>
        <Flex className="key-point">
          <Box className="content">
            <h1>Completely Permisionless</h1>
            <p>
              There are no restrictions related to prior borrowing history or
              cumbersome application processes. Anyone can access the system
              simply by using an Ethereum wallet address.
            </p>
          </Box>
          <Box className="image" />
        </Flex>
        <Flex className="key-point">
          <Box className="image" />
          <Box className="content">
            <h1>Flexible Repayment</h1>
            <p>
              There are no time limits or repayment schedules involved with
              using Maker Vault. Users are free to create and repay Dai, or add
              additional collateral whenever they choose.
            </p>
          </Box>
        </Flex>
        <Flex className="key-point">
          <Box className="content">
            <h1>No Counterparty Risk</h1>
            <p>
              The system is a set of ownerless, autonomous smart contracts. This
              means you don’t need to trust a counterparty institution to
              successfully manage or release your funds.
            </p>
          </Box>
          <Box className="image" />
        </Flex>
      </KeyPoints>
      <QuestionsSection>
        <h3>Save Questions</h3>
        <Questions />
      </QuestionsSection>
      <BottomNote />
    </OasisLayout>
  );
});

export { AboutTrade, AboutBorrow, AboutSave };
