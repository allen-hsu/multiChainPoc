import {ethers} from 'ethers';
import Signer from '../core/signer';
import EthAccount from './ethAccount';

class EthSigner implements Signer {
  account: EthAccount;

  constructor(account: EthAccount) {
    this.account = account;
  }

  async sendTransaction(toAddress: string, value: string) {
    const signer = new ethers.Wallet(
      this.account.privateKey,
      this.account.connector?.provider,
    );
    const txReceipt = await signer.sendTransaction({
      to: toAddress,
      value: ethers.utils.parseEther(value),
    });
    const receipt = await txReceipt.wait();
    return receipt;
  }
}

export default EthSigner;
