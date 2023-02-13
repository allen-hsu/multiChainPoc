import Signer from '../core/signer';
import TronAccount from './tronAccount';
const TronWeb = require('tronweb');

class TronSigner implements Signer {
  account: TronAccount;

  constructor(account: TronAccount) {
    this.account = account;
  }
  async sendTransaction(recipientAddress: string, amount: string) {
    const transaction =
      await this.account.connector?.tronWeb.transactionBuilder.sendTrx(
        recipientAddress,
        amount,
        this.account.connector?.tronWeb.defaultAddress.hex,
      );
    const signedTransaction = await this.account.connector?.tronWeb.trx.sign(
      transaction,
    );
    const receipt =
      await this.account.connector?.tronWeb.trx.sendRawTransaction(
        signedTransaction,
      );
    return receipt;
  }

  signMessage = async (account: TronAccount, message: string) => {
    const messageHash = TronWeb.sha3(Buffer.from(message));
    const signature = await account.connector?.tronWeb.trx.sign(
      messageHash,
      account.drivePrivateKey(),
    );
  };
}

export default TronSigner;
