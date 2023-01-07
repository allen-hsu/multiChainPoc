import {createContext} from 'react';
import {ChainType} from './blockchain/core/accountFactory';
import {NetworkType} from './blockchain/core/networkFactory';

type WalletContextParameter = {
  chainType: ChainType;
  networkType: NetworkType;
  setNetworkType: (value: NetworkType) => void;
  setChainType: (value: ChainType) => void;
};

export default createContext<WalletContextParameter>({
  chainType: ChainType.BTC,
  networkType: NetworkType.BTC,
  setNetworkType: NetworkType => {
    //
  },
  setChainType: ChainType => {
    //
  },
});
