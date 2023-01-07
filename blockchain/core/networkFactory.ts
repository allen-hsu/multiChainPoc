import Network from './network';

export enum NetworkType {
  ETH,
  BTC,
}

class NetworkFactory {
  static factory(networkType: NetworkType): Network {
    if (networkType === NetworkType.BTC) {
      return {
        caip2: '',
        chainName: 'goerli',
        chainId: '',
        rpcUrl: '',
      };
    } else if (networkType === NetworkType.ETH) {
      return {
        caip2: '',
        chainName: 'goerli',
        chainId: '',
        rpcUrl: '',
      };
    } else {
      throw new Error('not support this type');
    }
  }
}

export default NetworkFactory;
