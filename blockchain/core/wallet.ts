import Account from './account';
import BtcAccount from '../btc/btcAccount';
import Connector from './connector';
import EthAccount from '../eth/ethAccount';
import {ChainType} from './accountFactory';

class Wallet {
  private privateKey: string;
  constructor(privateKey: string) {
    this.privateKey = privateKey;
  }

  getPrivateKey(path: string): string {
    return this.privateKey;
  }

  derive(path: string, chainType: ChainType): Account<Connector> {
    if (chainType === ChainType.BTC) {
      // Hardcode, Just Do some test
      return new BtcAccount(
        '2Mu5PE4z7YefuVE3nVtcby5XjyDRGUnQ5Xh',
        'publicKey',
        this.getPrivateKey(path),
      );
    } else if (chainType === ChainType.ETH) {
      // Hardcode, Just Do some test
      return new EthAccount(
        '0xd21b2c4fd19561270bA4333b6A8ae77b31b01E48',
        'publicKey',
        this.getPrivateKey(path),
      );
    }
    throw new Error('this chain not support');
  }
}

export default Wallet;
