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
      
      <StyledAbsoluteLink
        href="https://twitter.com/PepeTokensFam"
        target="_blank"
      >
        Twitter
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://discord.gg/PT2tDQpRe4" target="_blank">
        Discord
      </StyledAbsoluteLink>
      <StyledAbsoluteLink
        href="https://t.me/PepeTokensOfficial"
        target="_blank"
      >
        Telegram
      </StyledAbsoluteLink>
      <StyledAbsoluteLink
        href="https://dexscreener.com/fantom/0x8029488c2a739b43ac2ab89e83b9a6738a531f72"
        target="_blank"
      >
        PEPE
      </StyledAbsoluteLink>
      <StyledAbsoluteLink
        href="https://dexscreener.com/fantom/0x642dcea82ae9fbd28f0ec781a1b31f79fc69566f"
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
