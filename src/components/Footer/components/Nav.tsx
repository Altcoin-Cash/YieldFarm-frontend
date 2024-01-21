import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      Contracts:
      <StyledLink
        target="_blank"
        href="https://ftmscan.com/token/0xeF1608b8B01797Df5d46755f51fb126f21D0e7fa"
      >
        YURI
      </StyledLink>
      <StyledLink
        target="_blank"
        href="https://ftmscan.com/address/0x3b4f6bac86e3fd769d075c647d3b98b2af4375e1"
      >
        YURI+
      </StyledLink>
      <StyledLink
        target="_blank"
        href="https://ftmscan.com/address/0x7452bf8cb727dc7695fce4793b59a4d9bf19d67c"
      >
        Masterchef
      </StyledLink>
      Addresses:
      <StyledLink
        target="_blank"
        href="https://ftmscan.com/address/0xfabfc2ed994c698ceed5415acd2d786aefbd5f56"
      >
        Deployer Wallet
      </StyledLink>
      <StyledLink
        target="_blank"
        href="https://ftmscan.com/address/0x434774f2ae60d07a2044301bb67e4d4c0af04e4a"
      >
        Community Wallet
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

export default Nav
