import Account, {AccountType} from '../core/account';
import ConnectorFactory from '../core/connectorFactory';
import EthConnector from './ethConnector';
import Network from '../core/network';
import EthSigner from './ethSigner';
import SignerFactory from '../core/signerFactory';

class EthAccount implements Account<EthConnector, EthSigner> {
  private privateKey: string;
  address: string;
  connector?: EthConnector;
  publicKey: string;
  signer: EthSigner;
  type: AccountType;
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
    this.signer = this.factorySinger(this.type);
  }

  factorySinger(type: AccountType): EthSigner {
    if (type === AccountType.NORMAL) {
      return SignerFactory.factory<EthSigner>(EthSigner, this);
    } else {
      throw new Error('Method not implemented.');
    }
  }

  connect(network: Network): void {
    console.log(network);
    this.connector = ConnectorFactory.factory<EthConnector>(
      EthConnector,
      this,
      network,
    );
  }

  drivePrivateKey(): string {
    return this.privateKey;
  }
}

export default EthAccount;
