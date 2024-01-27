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
  {
    pid: 3,
    lpAddresses: {
      250: '0xd511c71fEaeF2DDF9413cE800dA2e243F65c5DD5', // FTM-PEPE LP Token Address,
    },
    tokenAddresses: {
      250: '0xD350EcD60912913cc15d312ef38adECa909eCDD5', // Token, "PEPE"
    },
    name: 'Pepes Ponzi',
    symbol: 'FTM-PEPE Spiritswap LP',
    tokenSymbol: 'PEPE',
    icon: '🤠',
  },
  {
    pid: 4,
    lpAddresses: {
      250: '0x1F4b9B645088a84DA7114b0B6B414831AF9FAe5f', // PEPE-PEPI LP Token Address, 42 rewards
    },
    tokenAddresses: {
      250: '0x71Fd222475361258D09a01D71Fd71E4d7a0265be', // Token, "PEPI"
    },
    name: 'Love Affair',
    symbol: 'PEPE-PEPI Spooky LP',
    tokenSymbol: 'PEPI',
    icon: '👩‍❤️‍💋‍👨',
  },
  {
    pid: 5,
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
    pid: 6,
    lpAddresses: {
      250: '0x8a8fdfc324884cf4a3f7dd25c26c8fdfa72bd576', // FTM-THC LP Token Address,
    },
    tokenAddresses: {
      250: '0x479673391b3818f5e3ED2fa69A58e13d685BEcf6', // Token, "THC"
    },
    name: 'Fantom Degens',
    symbol: 'FTM-THC Spooky LP',
    tokenSymbol: 'THC',
    icon: '😈',
  },
  {
    pid: 7,
    lpAddresses: {
      250: '0x4bbecd638188ed3f871bf44422f4016c22f2de3a', // FTM-VERSUS LP Token Address,
    },
    tokenAddresses: {
      250: '0xe816B19b673088C02F3c9e03bC4A66E1eF676CF7', // Token, "VERSUS"
    },
    name: 'Fantom Degens',
    symbol: 'FTM-VERSUS Spooky LP',
    tokenSymbol: 'VERSUS',
    icon: '😈',
  },

  
  {
    pid: 8,
    lpAddresses: {
      250: '0x8FB3F4fe92De77CED308Dc2c4E48A893DA6C6737', // YURI-PEPE LP Token Address,
    },
    tokenAddresses: {
      250: '0xeF1608b8B01797Df5d46755f51fb126f21D0e7fa', // Token, "YURI"
    },
    name: 'We Are All YURI',
    symbol: 'YURI-PEPE Spooky LP',
    tokenSymbol: 'YURI',
    icon: '👻',
  },
  {
    pid: 9,
    lpAddresses: {
      250: '0x2C53F1740D305fF2039592C7A027F3e843B9CaC2', // YURI-PEPI LP Token Address
    },
    tokenAddresses: {
      250: '0xeF1608b8B01797Df5d46755f51fb126f21D0e7fa', // Token, "YURI"
    },
    name: 'We Are All YURI',
    symbol: 'YURI-PEPI Spooky LP',
    tokenSymbol: 'YURI',
    icon: '👻',
  },
  {
    pid: 10,
    lpAddresses: {
      250: '0xecad5e6f290504ebda51ce4d63634a8f6651974d', // FTM-TOMB+ LP Token Address
    },
    tokenAddresses: {
      250: '0xE53aFA646d48E9EF68fCd559F2a598880a3f1370', // Token, "TOMB+"
    },
    name: 'We Are All YURI',
    symbol: 'FTM-TOMB+ Equalizer LP',
    tokenSymbol: 'TOMB+',
    icon: '👻',
  },


  
  {
    pid: 11,
    lpAddresses: {
      250: '0xb2b93d2aec7a01361f54669265ead859463845b0', // FTM-BEER LP Token Address
    },
    tokenAddresses: {
      250: '0x94ba6241bc7e6f7f24a5b95fe6726b31c74881ab', // Token, "BEER"
    },
    name: 'Have a BEER',
    symbol: 'FTM-BEER Swapin LP',
    tokenSymbol: 'BEER',
    icon: '🍻',
  },
 {
    pid: 12,
    lpAddresses: {
      250: '0x865a7135c582e5622f7db331239ef16e271caa70', // FTM-BEER LP Token Address
    },
    tokenAddresses: {
      250: '0x94ba6241bc7e6f7f24a5b95fe6726b31c74881ab', // Token, "BEER"
    },
    name: 'Have a BEER',
    symbol: 'FTM-BEER Spooky LP',
    tokenSymbol: 'BEER',
    icon: '🍻',
  },
 
  
]
