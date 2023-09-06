'use client';
import { Container } from '@/components/atoms/Container';
import Logo from '@/components/atoms/Logo';
import HeaderIcons from '@/components/molecules/HeaderIcons';
import SearchBar from '@/components/molecules/SerachBar';
import { images } from '@/mock/data';
import { Flex } from '@/styles/customStyle';
import React from 'react';
import { styled } from 'styled-components';

const Header = ({ showSearch = true }) => {
  return (
    <HeaderSection>
      <Container>
        <HeaderContainer>
          <MobileLogoContainer>
            <Logo />
            <MobileIcons>
              <Icon src={images.mobileCart} />
              <Icon src={images.mobileProfile} />
            </MobileIcons>
          </MobileLogoContainer>

          {showSearch && <SearchBar />}
          <HeaderIcons />
        </HeaderContainer>
      </Container>
    </HeaderSection>
  );
};

export default Header;

const HeaderSection = styled.header`
  background-color: ${({ theme }) => theme.pallet.base_white};
`;

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 2fr;
  align-items: center;
  gap: 5%;

  padding: 1.2rem 0;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;
const MobileLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Icon = styled.img``;
const MobileIcons = styled.div`
  display: none;

  @media screen and (max-width: 1200px) {
    display: flex;
    align-items: center;
    gap: 24px;
  }
`;
