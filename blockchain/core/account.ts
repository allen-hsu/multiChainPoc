import Connector from './connector';
import Network from './network';

interface Account<T extends Connector> {
  address: string;
  balance: string;
  connector?: T;
  publicKey: string;
  privateKey: string;
  connect(network: Network): void;
  getBalance(): Promise<string>;
}

export default Account;
