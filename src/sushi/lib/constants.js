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
  PEPI: '0xa33c57c0D66d8d243796f74958A2904B90b97245',
  WETH: '0xF30eCf203fae5051ECA8640d2752265f4ED49ACB',
  UNIRouter: '0xae168Ce47cebca9abbC5107a58df0532f1afa4d6',
}

//     icon: '🍣','🦄','🐢','🐌','🦆','🦍','🦑','🐸',
//     icon: '🐥','🍄','🐗','🐍','🐋','🦏','🐂','🦈' '🍠''🐊👨🏻‍🍳',
//  },
// ]

// JUICYSWAP SETTINGS

export const CHAIN_ID = 1313114

export const contractAddresses = {
  sushi: {
    1313114: '0xa33c57c0D66d8d243796f74958A2904B90b97245', // PEPI, orig: 0x6b43Ff8735c26f591cBf2F7B774Ea6235f982C1f
  },
  masterChef: {
    1313114: '0x71Fd222475361258D09a01D71Fd71E4d7a0265be', // Pepitamaster, orig: 0xF1c1a2C89a473d2C9b8eaC1728f99E4aBd612153
  },
  weth: {
    1313114: '0xF30eCf203fae5051ECA8640d2752265f4ED49ACB', // walt
  },
  xSushi: {
    1313114: '0x8439881E54A9cA06daFcE50ce342754DfF5Cc0E7', // NOTE: Not in use
  },
}

export const supportedPools = [
  //  {
  //    pid: 0,
  //    lpAddresses: {
  //      2330: '', //  LP Token Address,
  //    },
  //    tokenAddresses: {
  //      2330: '0xc5E7085Cd72900160206014bc233bdFa0845AF9C', // Token, "PEPE"
  //   },
  //   name: 'Pepes Ponzi',
  //   symbol: 'xPEPI',
  //   tokenSymbol: 'xPEPI',
  //   icon: '👱',
  // },
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
  {
    pid: 0,
    lpAddresses: {
      1313114: '0xc5E7085Cd72900160206014bc233bdFa0845AF9C', // ETHO-PEPE LP Token Address,
    },
    tokenAddresses: {
      1313114: '0xD350EcD60912913cc15d312ef38adECa909eCDD5', // Token, "PEPE"
    },
    name: 'Pepes Ponzi',
    symbol: 'ETHO-PEPE LP',
    tokenSymbol: 'PEPE',
    icon: '🤠',
  },
  {
    pid: 1,
    lpAddresses: {
      1313114: '0x8F3F783776596a502Bc3d73b3373b54ef06427f6', // ETHO-PEPI LP Address,
    },
    tokenAddresses: {
      1313114: '0xa33c57c0D66d8d243796f74958A2904B90b97245', // Token, "PEPI"
    },
    name: 'Pepitas Ponzi',
    symbol: 'ETHO-PEPI',
    tokenSymbol: 'PEPI',
    icon: '👧',
  },
  {
    pid: 2,
    lpAddresses: {
      1313114: '0x71fBD1aC8522609021d83B674605496cE2D01F95', // ETHO-SWAPD LP Address,
    },
    tokenAddresses: {
      1313114: '0x67e7ebdA5CBA73f5830538B03E678A1b45517dd7', // Token, "SWAPD"
    },
    name: 'Swapin DAO',
    symbol: 'ETHO-SWAPD',
    tokenSymbol: 'SWAPD',
    icon: '🦄',
  },
]
