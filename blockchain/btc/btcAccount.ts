import Account from '../core/account';
import ConnectorFactory from '../core/connectorFactory';
import Network from '../core/network';
import SignerFactory from '../core/signerFactory';
import BtcConnector from './btcConnector';
import BtcSigner from './btcSigner';

class BtcAccount implements Account<BtcConnector, BtcSigner> {
  address: string;
  segWit: string = '';
  connector?: BtcConnector;
  publicKey: string;
  privateKey: string;
  signer: BtcSigner;

  constructor(
    address: string,
    publicKey: string,
    privateKey: string,
    segWit: string,
  ) {
    this.address = address;
    this.publicKey = publicKey;
    this.privateKey = privateKey;
    this.signer = SignerFactory.factory<BtcSigner>(BtcSigner, this);
    this.segWit = segWit;
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
