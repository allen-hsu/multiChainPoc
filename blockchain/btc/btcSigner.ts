import Signer from '../core/signer';
import BtcAccount from './btcAccount';

class BtcSigner implements Signer {
  async sendTransaction(
    account: BtcAccount,
    toAddress: string,
    value: string,
    fee: string,
  ) {
    //Do somethings
  }
}
export default BtcSigner;
