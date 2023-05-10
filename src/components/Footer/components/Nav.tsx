import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      Add Chains:
      <StyledLink target="_blank" href="https://chainlist.org/chain/2330">
        ALT
      </StyledLink>
      <StyledLink target="_blank" href="https://chainlist.org/chain/1773">
        GRAMS
      </StyledLink>
      <StyledLink target="_blank" href="https://chainlist.org/chain/800001">
        OCTA
      </StyledLink>
      <StyledLink target="_blank" href="https://chainlist.org/chain/1987">
        EGEM
      </StyledLink>
      <StyledLink target="_blank" href="https://chainlist.org/chain/1313114">
        ETHO
      </StyledLink>
      <StyledLink target="_blank" href="https://chainlist.org/chain/2000">
        DOGE
      </StyledLink>
      <StyledLink target="_blank" href="https://chainlist.org/chain/250">
        FTM
      </StyledLink>
      {/*<StyledLink
        target="_blank"
        href="https://uniswap.info/pair/0xce84867c3c02b05dc570d0135103d3fb9cc19433"
      >
        PepitaFarm PEPI-ALT
      </StyledLink> */}
      <StyledLink target="_blank" href="https://discord.gg/PT2tDQpRe4">
        Discord
      </StyledLink>
      <StyledLink target="_blank" href="https://swapin.co">
        Swapin
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/PepeTokensFam">
        Twitter
      </StyledLink>
      <StyledLink target="_blank" href="https://t.me/PepeTokensOfficial">
        Telegram
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
