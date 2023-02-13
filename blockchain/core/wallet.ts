class Wallet {
  private privateKey: string;
  constructor(privateKey: string) {
    this.privateKey = privateKey;
  }

  getPrivateKey(path: string): string {
    console.log(path);
    return this.privateKey;
  }
}

export default Wallet;
