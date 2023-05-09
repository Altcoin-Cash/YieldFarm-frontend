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
  uniswapFactory: '0x347aAc6D939f98854110Ff48dC5B7beB52D86445',
  uniswapFactoryV2: '0x347aAc6D939f98854110Ff48dC5B7beB52D86445',
  PEPE: '0xD350EcD60912913cc15d312ef38adECa909eCDD5',
  PEPI: '0xbB1f8B3a73a0B5084aF9a95e748f9d84DdBA6E88',
  WETH: '0x48721ADeFE5b97101722c0866c2AffCE797C32b6',
  UNIRouter: '0xae168Ce47cebca9abbC5107a58df0532f1afa4d6',
}

//     icon: '🍣','🦄','🐢','🐌','🦆','🦍','🦑','🐸',
//     icon: '🐥','🍄','🐗','🐍','🐋','🦏','🐂','🦈' '🍠''🐊👨🏻‍🍳',
//  },
// ]

// JUICYSWAP SETTINGS

export const CHAIN_ID = 2330

export const contractAddresses = {
  sushi: {
    2330: '0xbB1f8B3a73a0B5084aF9a95e748f9d84DdBA6E88', // PEPI, orig: 0x6b43Ff8735c26f591cBf2F7B774Ea6235f982C1f
  },
  masterChef: {
    2330: '0xA44F956E4FEA5a5840c4B457c457234c79f99A19', // Pepitamaster, orig: 0xF1c1a2C89a473d2C9b8eaC1728f99E4aBd612153
  },
  weth: {
    2330: '0x48721ADeFE5b97101722c0866c2AffCE797C32b6', // walt
  },
  xSushi: {
    2330: '0x8439881E54A9cA06daFcE50ce342754DfF5Cc0E7', // NOTE: Not in use
  },
}

export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      2330: '0xb1297e255933e6c11bc72d6de2c911e4a05a18d8', // ALT-PEPE LP Token Address,
    },
    tokenAddresses: {
      2330: '0xD350EcD60912913cc15d312ef38adECa909eCDD5', // Token, "PEPE"
    },
    name: 'Pepes Ponzi',
    symbol: 'ALT-PEPE LP',
    tokenSymbol: 'PEPE',
    icon: '👑',
  },
  {
    pid: 1,
    lpAddresses: {
      2330: '0xD350EcD60912913cc15d312ef38adECa909eCDD5', // ALTToken Address,
    },
    tokenAddresses: {
      2330: '0xD350EcD60912913cc15d312ef38adECa909eCDD5', // Token, "PEPE"
    },
    name: 'Pepitas Ponzi',
    symbol: 'PEPI',
    tokenSymbol: 'PEPI',
    icon: '👑',
  },
  {
    pid: 2,
    lpAddresses: {
      2330: '0xb2F8e147d6a2570b19d1731401DDD5A4F62e2C33', // ALT-PEPE LP Token Address,
    },
    tokenAddresses: {
      2330: '0x6645143e49B3a15d8F205658903a55E520444698', // Token, "WATT"
    },
    name: 'Altcoins Ponzi',
    symbol: 'ALT-WATT LP',
    tokenSymbol: 'WATT',
    icon: '👑',
  },
  {
    pid: 3,
    lpAddresses: {
      2330: '0xdc1f931aefba25d1ad442c7235d9aebaf51c9d01', // WATT-PEPE LP Token Address,
    },
    tokenAddresses: {
      2330: '0x6645143e49B3a15d8F205658903a55E520444698', // Token, "WATT"
      2330: '0xD350EcD60912913cc15d312ef38adECa909eCDD5', // Token,  "PEPE"
    },
    name: 'Altcoins Ponzi',
    symbol: 'WATT-PEPE LP',
    tokenSymbol: 'PEPE',
    icon: '👑',
  },
  {
    pid: 4,
    lpAddresses: {
      2330: '0xD350EcD60912913cc15d312ef38adECa909eCDD5', // PEPE Token Address,
    },
    tokenAddresses: {
      2330: '0xD350EcD60912913cc15d312ef38adECa909eCDD5', // Token, "PEPI"
    },
    name: 'Pepes Ponzi',
    symbol: 'PEPE',
    tokenSymbol: 'PEPE',
    icon: '👑',
  },
]
