import Account from '../core/account';
import ConnectorFactory from '../core/connectorFactory';
import EthConnector from './ethConnector';
import Network from '../core/network';
import EthSigner from './ethSigner';
import SignerFactory from '../core/signerFactory';

class EthAccount implements Account<EthConnector, EthSigner> {
  address: string;
  connector?: EthConnector;
  publicKey: string;
  privateKey: string;
  signer: EthSigner;
  constructor(address: string, publicKey: string, privateKey: string) {
    this.address = address;
    this.privateKey = privateKey;
    this.publicKey = publicKey;
    this.signer = SignerFactory.factory<EthSigner>(EthSigner, this);
  }

  connect(network: Network): void {
    console.log(network);
    this.connector = ConnectorFactory.factory<EthConnector>(
      EthConnector,
      this,
      network,
    );
  }
}

export default EthAccount;
