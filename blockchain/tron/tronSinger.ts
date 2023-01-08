import {Network} from 'bitcoinjs-lib';
import Signer from '../core/signer';
import TronAccount from './tronAccount';
const TronWeb = require('tronweb');

class TronSigner implements Signer {
  tronWeb = new TronWeb({
    fullHost: 'https://api.trongrid.io',
    privateKey: 'aab',
  });
  async sendTransaction(
    account: TronAccount,
    network: Network,
    recipientAddress: string,
    amount: string,
  ) {
    const transaction = await this.tronWeb.transactionBuilder.sendTrx(
      recipientAddress,
      amount,
      this.tronWeb.defaultAddress.hex,
    );
    const signedTransaction = await this.tronWeb.trx.sign(transaction);
    const receipt = await this.tronWeb.trx.sendRawTransaction(
      signedTransaction,
    );
    return receipt;
  }

  signMessage = async (
    account: TronAccount,
    network: Network,
    message: string,
  ) => {
    const messageHash = TronWeb.sha3(Buffer.from(message));
    const signature = await this.tronWeb.trx.sign(
      messageHash,
      account.privateKey,
    );

    console.log(signature);
  };
}

export default TronSigner;
