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
  async getBlockNumber(): Promise<string> {
    throw new Error('Method not implemented.');
  }

  async getBalance(): Promise<string> {
    if (this.account == null) {
      throw 'Not connect';
    }
    // DO some things
    return '123';
  }

  // getBalance(): Promise<string> {
  //   if (this.connector !== undefined) {
  //     return this.connector.getBalance();
  //   }
  //   throw new Error('Connector not connect.');
  // }
}

export default BtcConnector;
