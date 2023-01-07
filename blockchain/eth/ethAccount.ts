import Account from '../core/account';
import ConnectorFactory from '../core/connectorFactory';
import EthConnector from './ethConnector';
import Network from '../core/network';
import EthSigner from './ethSigner';

class EthAccount implements Account<EthConnector> {
  address: string;
  balance: string = '';
  connector?: EthConnector;
  publicKey: string;
  privateKey: string;
  signer: EthSigner;
  constructor(address: string, publicKey: string, privateKey: string) {
    this.address = address;
    this.privateKey = privateKey;
    this.publicKey = publicKey;
    this.signer = new EthSigner();
  }

  connect(network: Network): void {
    console.log(network);
    this.connector = ConnectorFactory.factory<EthConnector>(
      EthConnector,
      this,
      network,
    );
  }

  getBalance(): Promise<string> {
    if (this.connector !== undefined) {
      return this.connector.getBalance();
    }
    throw new Error('Connector not connect.');
  }
}

export default EthAccount;
