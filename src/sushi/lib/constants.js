import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 300000 // orig: 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const addressMap = {
  uniswapFactory: '',
  uniswapFactoryV2: '0x347aAc6D939f98854110Ff48dC5B7beB52D86445',
  PEPE: '0xD350EcD60912913cc15d312ef38adECa909eCDD5',
  PEPI: {
    2330: '0xbB1f8B3a73a0B5084aF9a95e748f9d84DdBA6E88',
    1773: '0x423d3EDBE3Ef7EaD5a16C78e6c7f748A97462f41',
  },
  WETH: {
    2330: '0x48721ADeFE5b97101722c0866c2AffCE797C32b6',
    1773: '0x444a294EA9858A1c61624300978D9b5C49Ba8873',
  },

  UNIRouter: '0xae168Ce47cebca9abbC5107a58df0532f1afa4d6',
}

//     icon: '🍣','🦄','🐢','🐌','🦆','🦍','🦑','🐸',
//     icon: '🐥','🍄','🐗','🐍','🐋','🦏','🐂','🦈' '🍠''🐊👨🏻‍🍳',
//  },
// ]

// JUICYSWAP SETTINGS

export const CHAIN_ID = 1773

export const contractAddresses = {
  sushi: {
    2330: '0xbB1f8B3a73a0B5084aF9a95e748f9d84DdBA6E88', // PEPI, orig: 0x6b43Ff8735c26f591cBf2F7B774Ea6235f982C1f
    1773: '0x423d3EDBE3Ef7EaD5a16C78e6c7f748A97462f41',
  },
  masterChef: {
    2330: '0x0091D19AFE372372c32b7daedB402d5A0CCaA6Db', // Pepitamaster, orig: 0xF1c1a2C89a473d2C9b8eaC1728f99E4aBd612153
    1773: '0x1B582CBc69B2024b679561Ef269b92C0531A2Fc5',
  },
  weth: {
    2330: '0x48721ADeFE5b97101722c0866c2AffCE797C32b6', // walt
    1773: '0x444a294EA9858A1c61624300978D9b5C49Ba8873',
  },
  xSushi: {
    2330: '0x8439881E54A9cA06daFcE50ce342754DfF5Cc0E7', // NOTE: Not in use
    1773: '',
  },
}

export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      1773: '0x71bcE305efF1B4a7fB2c4284E636cbbFb571E527', //  LP Token Address,
    },
    tokenAddresses: {
      1773: '0xD350EcD60912913cc15d312ef38adECa909eCDD5', // Token, "PEPE"
    },
    name: 'Pepes Ponzi',
    symbol: 'GRAMS-PEPE',
    tokenSymbol: 'GRAMS-PEPE',
    icon: '👱',
  },
  {
    pid: 1,
    lpAddresses: {
      1773: '0x67413469dB1c2D45EBcE8C1A9F3Ee108bC4Fb036', //  LP Token Address,
    },
    tokenAddresses: {
      1773: '0x423d3EDBE3Ef7EaD5a16C78e6c7f748A97462f41', // Token, "PEPE"
    },
    name: 'Pepitas Ponzi',
    symbol: 'GRAMS-PEPI',
    tokenSymbol: 'GRAMS-PEPI',
    icon: '👧',
  },
  // {
  //   pid: 1,
  //   lpAddresses: {
  //     2330: '', //  LP Token Address,
  //   },
  //   tokenAddresses: {
  //     2330: '0xbB1f8B3a73a0B5084aF9a95e748f9d84DdBA6E88', // Token, "PEPI"
  //   },
  //   name: 'Pepes Ponzi',
  //  symbol: 'PEPI',
  //  tokenSymbol: 'PEPI',
  //   icon: '👧',
  //  },
  //  {
  //    pid: 2,
  //    lpAddresses: {
  //      2330: '', // PEPEToken Address,
  //    },
  //    tokenAddresses: {
  //      2330: '0xD350EcD60912913cc15d312ef38adECa909eCDD5', // Token, "PEPE"
  //   },
  //    name: 'Pepitas Ponzi',
  //    symbol: 'PEPE',
  //   tokenSymbol: 'PEPE',
  //   icon: '🤠',
  //  },
]
