import Network from './network';

interface Connector {
  network: Network;
  getBalance(): Promise<string>;
  getBlockNumber(): Promise<string>;
}

export default Connector;
