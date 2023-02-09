import Account from '../core/account';
import ConnectorFactory from '../core/connectorFactory';
import Network from '../core/network';
import SignerFactory from '../core/signerFactory';
import TronConnector from './tronConnector';
import TronSigner from './tronSinger';

class TronAccount implements Account<TronConnector, TronSigner> {
  address: string;
  connector?: TronConnector;
  publicKey: string;
  privateKey: string;
  signer: TronSigner;
  constructor(address: string, publicKey: string, privateKey: string) {
    this.address = address;
    this.privateKey = privateKey;
    this.publicKey = publicKey;
    this.signer = SignerFactory.factory<TronSigner>(TronSigner, this);
  }

  connect(network: Network): void {
    console.log(network);
    this.connector = ConnectorFactory.factory<TronConnector>(
      TronConnector,
      this,
      network,
    );
  }
}

export default TronAccount;
