import Signer from '../core/signer';
import BtcAccount from './btcAccount';

class BtcSigner implements Signer {
  account: BtcAccount;

  constructor(account: BtcAccount) {
    this.account = account;
  }

  async sendTransaction(toAddress: string, value: string, fee: string) {
    //Do somethings
  }
}
export default BtcSigner;
