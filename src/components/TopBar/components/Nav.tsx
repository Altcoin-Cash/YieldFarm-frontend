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
      <StyledAbsoluteLink href="https://discord.gg/w9ttbzg4" target="_blank">
        Discord
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://twitter.com/yeh_on_ftm" target="_blank">
        Twitter
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://t.me/YuriYeh" target="_blank">
        Telegram
      </StyledAbsoluteLink>
      <StyledAbsoluteLink
        href="https://dexscreener.com/fantom/0x06cb7fecf5e50cfd8729e1c4f5e75e7e7332ecfb"
        target="_blank"
      >
        YURI
      </StyledAbsoluteLink>
      <StyledAbsoluteLink
        href="https://dexscreener.com/search?q="
        target="_blank"
      >
        YURI+
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://tombplus.com/" target="_blank">
        Tomb+
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
