import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/img/pepita_logo.png'
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
        title="PEPITA Farm is Ready!"
        subtitle="Stake PEPE LP tokens to claim your very own PEPI!"
      />

      <Container>
        <Balances />
      </Container>
      <Spacer size="lg" />
      <StyledInfo>
        🏆<b>Pro Tip</b>: PEPI-FTM & PEPI-PEPE LP token pool yields 4.20x more
        token rewards per block.
      </StyledInfo>
      <StyledInfo>Love affair APY is secret 👩‍❤️‍💋‍👨</StyledInfo>
      <StyledInfo>
        BONUS MULTIPLIER finished at FTM block 75000000
      </StyledInfo>
      <Spacer size="lg" />
      <StyledInfo>PEPE: 0xD350EcD60912913cc15d312ef38adECa909eCDD5</StyledInfo>
      <StyledInfo>PEPI: 0x71fd222475361258d09a01d71fd71e4d7a0265be</StyledInfo>

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
