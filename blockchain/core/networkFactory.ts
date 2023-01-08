import Network from './network';

export enum NetworkType {
  ETH_GOERLI,
  BTC,
  TRON,
}

class NetworkFactory {
  static factory(networkType: NetworkType): Network {
    if (networkType === NetworkType.BTC) {
      return {
        caip2: '',
        chainName: 'btc',
        chainId: '',
        rpcUrl: '',
      };
    } else if (networkType === NetworkType.ETH_GOERLI) {
      return {
        caip2: '',
        chainName: 'goerli',
        chainId: '',
        rpcUrl: '',
      };
    } else if (networkType === NetworkType.TRON) {
      return {
        caip2: '',
        chainName: 'tron',
        chainId: '',
        rpcUrl: '',
      };
    } else {
      throw new Error('not support this type');
    }
  }
}

export default NetworkFactory;
