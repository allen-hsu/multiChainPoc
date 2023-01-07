import Connector from './connector';

class ConnectorFactory {
  static factory<T extends Connector>(
    constructor: new (...arg: any) => T,
    ...parameter: any[]
  ): T {
    // should do some account pools and recyclers
    return new constructor(...parameter);
  }
}

export default ConnectorFactory;
