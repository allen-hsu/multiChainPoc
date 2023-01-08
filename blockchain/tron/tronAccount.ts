import Account from '../core/account';
import ConnectorFactory from '../core/connectorFactory';
import Network from '../core/network';
import TronConnector from './tronConnector';
import TronSigner from './tronSinger';

class TronAccount implements Account<TronConnector, TronSigner> {
  address: string;
  balance: string = '';
  connector?: TronConnector;
  publicKey: string;
  privateKey: string;
  signer: TronSigner;
  constructor(address: string, publicKey: string, privateKey: string) {
    this.address = address;
    this.privateKey = privateKey;
    this.publicKey = publicKey;
    this.signer = new TronSigner();
  }

  connect(network: Network): void {
    console.log(network);
    this.connector = ConnectorFactory.factory<TronConnector>(
      TronConnector,
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

export default TronAccount;
