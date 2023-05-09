import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="https://rinkeby.etherscan.io/address/0xF1c1a2C89a473d2C9b8eaC1728f99E4aBd612153#code"
      >
        JuiceMaster Contract
      </StyledLink>
      {/*<StyledLink
        target="_blank"
        href="https://uniswap.info/pair/0xce84867c3c02b05dc570d0135103d3fb9cc19433"
      >
        SushiSwap PEPI-ALT
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
