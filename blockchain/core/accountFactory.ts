import Account from './account';
import Connector from './connector';
import Wallet from './wallet';

export enum ChainType {
  ETH = 'ETH',
  BTC = 'BTC',
}
class AccountFactory {
  static factory(chainType: ChainType): Account<Connector> {
    // should do some account pools and recyclers
    const account = new Wallet('').derive('', chainType);
    return account;
  }
}

export default AccountFactory;
