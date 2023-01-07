import Connector from '../core/connector';
import BtcAccount from './btcAccount';
import Network from '../core/network';

class BtcConnector implements Connector {
  account: BtcAccount;
  network: Network;
  constructor(account: BtcAccount, network: Network) {
    this.account = account;
    this.network = network;
  }
  async getBalance() {
    if (this.account == null) {
      throw 'Not connect';
    }
    // DO some things
    return '123';
  }
}

export default BtcConnector;
