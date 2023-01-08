import Account from './account';
import Connector from './connector';
import Signer from './signer';
import Wallet from './wallet';

export enum ChainType {
  ETH = 'ETH',
  BTC = 'BTC',
  TRON = 'TRON',
}
class AccountFactory {
  static factory(chainType: ChainType): Account<Connector, Signer> {
    // should do some account pools and recyclers
    const account = new Wallet('').derive('', chainType);
    return account;
  }
}

export default AccountFactory;
