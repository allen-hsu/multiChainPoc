import {ethers} from 'ethers';
import Signer from '../core/signer';
import EthAccount from './ethAccount';

class EthSigner implements Signer {
  async sendTransaction(account: EthAccount, toAddress: string, value: string) {
    const signer = new ethers.Wallet(
      account.privateKey,
      account.connector?.getProvider(),
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
