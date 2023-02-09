import Connector from '../core/connector';
import TronAccount from './tronAccount';
import Network from '../core/network';
const TronWeb = require('tronweb');
class TronConnector implements Connector {
  account: TronAccount;
  network: Network;
  tronWeb: typeof TronWeb;
  constructor(account: TronAccount, network: Network) {
    this.account = account;
    this.network = network;
    const HttpProvider = TronWeb.providers.HttpProvider;
    this.tronWeb = new TronWeb(
      new HttpProvider(network.rpcUrl),
      new HttpProvider(network.rpcUrl),
      network.rpcUrl,
    );
  }

  async getBlockNumber(): Promise<string> {
    throw new Error('Method not implemented.');
  }
  async getBalance() {
    if (this.account == null) {
      throw 'Not connect';
    }
    // DO some things
    return '123';
  }
}

export default TronConnector;
