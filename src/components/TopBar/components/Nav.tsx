import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink exact activeClassName="active" to="/">
        Home
      </StyledLink>
      <StyledLink exact activeClassName="active" to="/farms">
        Menu
      </StyledLink>
      <StyledAbsoluteLink href="https://discord.gg/PT2tDQpRe4" target="_blank">
        Discord
      </StyledAbsoluteLink>
      <StyledAbsoluteLink
        href="https://twitter.com/PepeTokensFam"
        target="_blank"
      >
        Twitter
      </StyledAbsoluteLink>
      <StyledAbsoluteLink
        href="https://t.me/PepeTokensOfficial"
        target="_blank"
      >
        Telegram
      </StyledAbsoluteLink>
      <StyledAbsoluteLink
        href="https://dexscreener.com/search?q=0x71Fd222475361258D09a01D71Fd71E4d7a0265be"
        target="_blank"
      >
        PEPE
      </StyledAbsoluteLink>
      <StyledAbsoluteLink
        href="https://dexscreener.com/search?q=0xD350EcD60912913cc15d312ef38adECa909eCDD5"
        target="_blank"
      >
        PEPI
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://swapin.co/" target="_blank">
        Swapin.co
      </StyledAbsoluteLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.color.grey[400]};
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
  &.active {
    color: ${(props) => props.theme.color.primary.main};
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

const StyledAbsoluteLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
  &.active {
    color: ${(props) => props.theme.color.primary.main};
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

export default Nav
