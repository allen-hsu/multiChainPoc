import Signer from './signer';

class SignerFactory {
  static factory<T extends Signer>(
    constructor: new (...arg: any) => T,
    ...parameter: any[]
  ): T {
    // should do some account pools and recyclers
    return new constructor(...parameter);
  }
}

export default SignerFactory;
