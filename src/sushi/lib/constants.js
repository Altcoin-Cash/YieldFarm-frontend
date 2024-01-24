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
  YURI: '0xeF1608b8B01797Df5d46755f51fb126f21D0e7fa',
  YURIPLUS: '0x3b4f6bac86e3fd769d075c647d3b98b2af4375e1',
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
    250: '0x3b4f6bac86e3fd769d075c647d3b98b2af4375e1', // YURI+, Yuri+V2_flattened.sol
  },
  masterChef: {
    250: '0x7452BF8CB727dC7695fcE4793b59A4D9bF19D67C', // Yuri+master
  },
  weth: {
    250: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83', // wftm
  },
  xSushi: {
    250: '0x8439881E54A9cA06daFcE50ce342754DfF5Cc0E7', // NOTE: Not in use
  },
}

export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      250: '0x06cB7fEcf5E50cfd8729e1c4f5E75e7e7332EcFB', // FTM-YURI LP Token Address,
    },
    tokenAddresses: {
      250: '0xeF1608b8B01797Df5d46755f51fb126f21D0e7fa', // Token, "YURI"
    },
    name: 'We Are All YURI',
    symbol: 'FTM-YURI Spooky LP',
    tokenSymbol: 'YURI',
    icon: '👻',
  },
  {
    pid: 1,
    lpAddresses: {
      250: '0xfd537fD130518f23F49B02925DB5f1AA1669E537', // YURI-TOMB+ LP Token Address,
    },
    tokenAddresses: {
      250: '0xE53aFA646d48E9EF68fCd559F2a598880a3f1370', // Token, "TOMB+"
    },
    name: 'We Are All YURI',
    symbol: 'YURI-TOMB+ Spooky LP',
    tokenSymbol: 'TOMB+',
    icon: '👻',
  },
  //{
  //  pid: 2,
  //  lpAddresses: {
  //    250: '', // YURI-YURI+ LP Token Address,
  //  },
  //  tokenAddresses: {
  //    250: '0x3b4f6bac86e3fd769d075c647d3b98b2af4375e1', // Token, "YURI+"
  //  },
  //  name: 'We Are All YURI',
  //  symbol: 'YURI-YURI+ Spooky LP',
  //  tokenSymbol: 'YURI+',
  //  icon: '👻',
  //},
  {
    pid: 3,
    lpAddresses: {
      250: '0x8FB3F4fe92De77CED308Dc2c4E48A893DA6C6737', // YURI-PEPE LP Token Address,
    },
    tokenAddresses: {
      250: '0xD350EcD60912913cc15d312ef38adECa909eCDD5', // Token, "PEPE"
    },
    name: 'We Are All YURI',
    symbol: 'YURI-PEPE Spooky LP',
    tokenSymbol: 'PEPE',
    icon: '🤠',
  },
  {
    pid: 4,
    lpAddresses: {
      250: '0x2C53F1740D305fF2039592C7A027F3e843B9CaC2', // YURI-PEPI LP Token Address
    },
    tokenAddresses: {
      250: '0x71Fd222475361258D09a01D71Fd71E4d7a0265be', // Token, "PEPI"
    },
    name: 'We Are All YURI',
    symbol: 'YURI-PEPI Spooky LP',
    tokenSymbol: 'PEPI',
    icon: '👧',
  },
  {
    pid: 5,
    lpAddresses: {
      250: '0xb59aae70e7e292c2671979e25dddcd4d510b2874', // YURI-YURI+ LP Token Address
    },
    tokenAddresses: {
      250: '0x3b4f6bac86e3fd769d075c647d3b98b2af4375e1', // Token, "YURI+"
    },
    name: 'We Are All YURI',
    symbol: 'YURI-YURI+ Spooky LP',
    tokenSymbol: 'YURI+',
    icon: '👻',
  },
]
