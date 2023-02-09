import Connector from './connector';
import Network from './network';
import Signer from './signer';

interface Account<T extends Connector, U extends Signer> {
  address: string;
  connector?: T;
  signer: U;
  publicKey: string;
  privateKey: string;
  connect(network: Network): void;
}

export default Account;
