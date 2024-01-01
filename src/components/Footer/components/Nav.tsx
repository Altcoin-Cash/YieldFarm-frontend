import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink target="_blank" href="https://chainlist.org/chain/250">
        Current: FTM
      </StyledLink>
      Go to:
      <StyledLink target="_blank" href="https://alt.pepetokens.fun/">
        ALT Altcoinchain
      </StyledLink>
      <StyledLink target="_blank" href="https://grams.pepetokens.fun/">
        GRAMS Partychain
      </StyledLink>
      <StyledLink target="_blank" href="https://etho.pepetokens.fun/">
        ETHO protocol
      </StyledLink>
      Coming:
      <StyledLink target="_blank" href="https://chainlist.org/chain/800001">
        OCTA
      </StyledLink>
      <StyledLink target="_blank" href="https://chainlist.org/chain/1987">
        EGEM
      </StyledLink>
      <StyledLink target="_blank" href="https://chainlist.org/chain/2000">
        DOGE
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
