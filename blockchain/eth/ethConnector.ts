import {ethers} from 'ethers';
import Connector from '../core/connector';
import EthAccount from './ethAccount';
import Network from '../core/network';

class EthConnector implements Connector {
  account: EthAccount;
  network: Network;
  provider: ethers.providers.AlchemyProvider;
  constructor(account: EthAccount, network: Network) {
    this.account = account;
    this.network = network;
    this.provider = new ethers.providers.AlchemyProvider(
      this.network.chainName,
      '',
    );
  }
  async getBalance() {
    if (this.account == null) {
      throw 'Not connect';
    }
    // const balance = await this.provider.getBalance(this.account.address);
    // do some things
    return '456';
  }

  getProvider(): ethers.providers.JsonRpcProvider {
    return this.provider;
  }
}

export default EthConnector;
