import Account, {AccountType} from '../core/account';
import ConnectorFactory from '../core/connectorFactory';
import Network from '../core/network';
import SignerFactory from '../core/signerFactory';
import BtcConnector from './btcConnector';
import BtcSigner from './btcSigner';

class BtcAccount implements Account<BtcConnector, BtcSigner> {
  private privateKey: string;
  address: string;
  segWit: string = '';
  connector?: BtcConnector;
  publicKey: string;
  signer: BtcSigner;
  type: AccountType;

  constructor(
    address: string,
    publicKey: string,
    privateKey: string,
    segWit: string,
    type: AccountType,
  ) {
    this.address = address;
    this.publicKey = publicKey;
    this.privateKey = privateKey;
    this.segWit = segWit;
    this.type = type;
    this.signer = this.factorySinger(type);
  }

  factorySinger(type: AccountType): BtcSigner {
    if (type === AccountType.NORMAL) {
      return SignerFactory.factory<BtcSigner>(BtcSigner, this);
    } else {
      throw new Error('Method not implemented.');
    }
  }

  connect(network: Network): void {
    this.connector = ConnectorFactory.factory<BtcConnector>(
      BtcConnector,
      this,
      network,
    );
  }

  drivePrivateKey(): string {
    return this.privateKey;
  }
}

export default BtcAccount;
