import Account from '../core/account';
import ConnectorFactory from '../core/connectorFactory';
import Network from '../core/network';
import BtcConnector from './btcConnector';
import BtcSigner from './btcSigner';

class BtcAccount implements Account<BtcConnector> {
  address: string;
  balance: string = '';
  connector?: BtcConnector;
  publicKey: string;
  privateKey: string;
  signer: BtcSigner;

  constructor(address: string, publicKey: string, privateKey: string) {
    this.address = address;
    this.publicKey = publicKey;
    this.privateKey = privateKey;
    this.signer = new BtcSigner();
  }

  getBalance(): Promise<string> {
    if (this.connector !== undefined) {
      return this.connector.getBalance();
    }
    throw new Error('Connector not connect.');
  }

  connect(network: Network): void {
    this.connector = ConnectorFactory.factory<BtcConnector>(
      BtcConnector,
      this,
      network,
    );
  }
}

export default BtcAccount;
