import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/img/weareallyuri.jpg'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'

const Home: React.FC = () => {
  return (
    <Page>
      <PageHeader
        icon={<img src={logo} height={120} />}
        title="YURI+ Farm is Ready after block 74700000!"
        subtitle="Stake YURI LP tokens to claim YURI+!"
      />

      <Container>
        <Balances />
      </Container>
      <Spacer size="lg" />
      <StyledInfo>
        🏆<b>Pro Tip</b>: YURI-FTM LP token pool yields 4.20x more token rewards
        per block.
      </StyledInfo>
      <StyledInfo>
        BONUS MULTIPLIER=10 ongoing until FTM block 75000000
      </StyledInfo>
      <Spacer size="lg" />
      <StyledInfo>YURI: 0xeF1608b8B01797Df5d46755f51fb126f21D0e7fa</StyledInfo>
      <StyledInfo>YURI+: coming</StyledInfo>

      <Spacer size="lg" />
      <div
        style={{
          margin: '0 auto',
        }}
      >
        <Button text="🔪 See the Menu" to="/farms" variant="secondary" />
      </div>
    </Page>
  )
}

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[500]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;

  > b {
    color: ${(props) => props.theme.color.grey[600]};
  }
`

export default Home
