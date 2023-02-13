import BtcAccount from '../btc/btcAccount';
import EthAccount from '../eth/ethAccount';
import TronAccount from '../tron/tronAccount';
import Account, {AccountType} from './account';
import Connector from './connector';
import Signer from './signer';
import Wallet from './wallet';

export enum ChainType {
  ETH = 'ETH',
  BTC = 'BTC',
  TRON = 'TRON',
}
class AccountFactory {
  // Can split to abstract factory
  static factory(
    wallet: Wallet,
    chainType: ChainType,
    path: string,
  ): Account<Connector, Signer> {
    // should do some account pools and recyclers
    if (chainType === ChainType.BTC) {
      // Hardcode, Just Do some test
      return new BtcAccount(
        '2Mu5PE4z7YefuVE3nVtcby5XjyDRGUnQ5Xh',
        'publicKey',
        wallet.getPrivateKey(path),
        'P2WPKH',
        AccountType.NORMAL,
      );
    } else if (chainType === ChainType.ETH) {
      // Hardcode, Just Do some test
      return new EthAccount(
        '0xd21b2c4fd19561270bA4333b6A8ae77b31b01E48',
        'publicKey',
        wallet.getPrivateKey(path),
        AccountType.NORMAL,
      );
    } else if (chainType === ChainType.TRON) {
      return new TronAccount(
        '0xd21b2c4fd19561270bA4333b6A8ae77b31b01E48',
        'publicKey',
        wallet.getPrivateKey(path),
        AccountType.NORMAL,
      );
    }
    throw new Error('this chain not support');
  }

  static factoryExternal(
    chainType: ChainType,
    address: string,
    publicKey: string,
  ): Account<Connector, Signer> {
    if (chainType === ChainType.BTC) {
      // Hardcode, Just Do some test
      return new BtcAccount(address, publicKey, '', '', AccountType.EXTERNAL);
    } else if (chainType === ChainType.ETH) {
      // Hardcode, Just Do some test
      return new EthAccount(address, publicKey, '', AccountType.EXTERNAL);
    } else if (chainType === ChainType.TRON) {
      return new TronAccount(address, publicKey, '', AccountType.EXTERNAL);
    }
    throw new Error('TODO');
  }

  static factoryObserve(
    chainType: ChainType,
    address: string,
    publicKey: string,
  ): Account<Connector, Signer> {
    if (chainType === ChainType.BTC) {
      // Hardcode, Just Do some test
      return new BtcAccount(address, publicKey, '', '', AccountType.OBSERVE);
    } else if (chainType === ChainType.ETH) {
      // Hardcode, Just Do some test
      return new EthAccount(address, publicKey, '', AccountType.OBSERVE);
    } else if (chainType === ChainType.TRON) {
      return new TronAccount(address, publicKey, '', AccountType.OBSERVE);
    }
    throw new Error('TODO');
  }
}

export default AccountFactory;
