import Account, {AccountType} from '../core/account';
import ConnectorFactory from '../core/connectorFactory';
import Network from '../core/network';
import SignerFactory from '../core/signerFactory';
import TronConnector from './tronConnector';
import TronSigner from './tronSinger';

class TronAccount implements Account<TronConnector, TronSigner> {
  address: string;
  connector?: TronConnector;
  publicKey: string;
  signer: TronSigner;
  type: AccountType;
  private privateKey: string;
  constructor(
    address: string,
    publicKey: string,
    privateKey: string,
    type: AccountType,
  ) {
    this.address = address;
    this.privateKey = privateKey;
    this.publicKey = publicKey;
    this.type = type;
    this.signer = this.factorySinger(type);
  }

  factorySinger(type: AccountType): TronSigner {
    if (type === AccountType.NORMAL) {
      return SignerFactory.factory<TronSigner>(TronSigner, this);
    } else {
      throw new Error('Method not implemented.');
    }
  }

  connect(network: Network): void {
    console.log(network);
    this.connector = ConnectorFactory.factory<TronConnector>(
      TronConnector,
      this,
      network,
    );
  }

  drivePrivateKey(): string {
    return this.privateKey;
  }
}

export default TronAccount;
