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
  PEPI: '0x71Fd222475361258D09a01D71Fd71E4d7a0265be',
  WETH: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
  UNIRouter: '0xae168Ce47cebca9abbC5107a58df0532f1afa4d6',
}

//     icon: '🍣','🦄','🐢','🐌','🦆','🦍','🦑','🐸',
//     icon: '🐥','🍄','🐗','🐍','🐋','🦏','🐂','🦈' '🍠''🐊👨🏻‍🍳',
//  },
// ]

// JUICYSWAP SETTINGS

export const CHAIN_ID = 250

export const contractAddresses = {
  sushi: {
    250: '0x71Fd222475361258D09a01D71Fd71E4d7a0265be', // PEPI, PepitaV2_flattened.sol
  },
  masterChef: {
    250: '0x21980220ba546B0579AF060D502465e664d17b88', // Pepitamaster
  },
  weth: {
    250: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83', // wftm
  },
  xSushi: {
    250: '0x8439881E54A9cA06daFcE50ce342754DfF5Cc0E7', // NOTE: Not in use
  },
}

export const supportedPools = [
  //  {
  //    pid: 0,
  //    lpAddresses: {
  //      2330: '', //  LP Token Address,
  //    },
  //    tokenAddresses: {
  //      2330: '0x8439881E54A9cA06daFcE50ce342754DfF5Cc0E7', // Token, "xPEPI"
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
      250: '0x9AC2837e3427CF78239D1cA09898e475F9E246C3', // FTM-PEPE LP Token Address,
    },
    tokenAddresses: {
      250: '0xD350EcD60912913cc15d312ef38adECa909eCDD5', // Token, "PEPE"
    },
    name: 'Pepes Ponzi',
    symbol: 'FTM-PEPE Swapin LP',
    tokenSymbol: 'PEPE',
    icon: '🤠',
  },
  {
    pid: 1,
    lpAddresses: {
      250: '0x8029488c2A739b43aC2AB89e83B9a6738a531f72', // FTM-PEPE LP Token Address,
    },
    tokenAddresses: {
      250: '0xD350EcD60912913cc15d312ef38adECa909eCDD5', // Token, "PEPE"
    },
    name: 'Pepes Ponzi',
    symbol: 'FTM-PEPE Spooky LP',
    tokenSymbol: 'PEPE',
    icon: '🤠',
  },
  {
    pid: 2,
    lpAddresses: {
      250: '0x642dcea82AE9fBD28f0eC781A1B31f79fC69566F', // FTM-PEPI LP Token Address,
    },
    tokenAddresses: {
      250: '0x71Fd222475361258D09a01D71Fd71E4d7a0265be', // Token, "PEPI"
    },
    name: 'Pepitas Ponzi',
    symbol: 'FTM-PEPI Spooky LP',
    tokenSymbol: 'PEPI',
    icon: '👧',
  },
]
