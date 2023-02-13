import Connector from './connector';
import Network from './network';
import Signer from './signer';

export enum AccountType {
  NORMAL,
  EXTERNAL,
  OBSERVE,
}

interface Account<T extends Connector, U extends Signer> {
  address: string;
  connector?: T;
  signer: U;
  publicKey: string;
  type: AccountType;
  drivePrivateKey(): string;
  connect(network: Network): void;
  factorySinger(type: AccountType): U;
}

export default Account;
