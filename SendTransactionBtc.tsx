import * as React from 'react';
import {View, Button, TextInput} from 'react-native';
import BtcAccount from './blockchain/btc/btcAccount';
import AccountFactory, {ChainType} from './blockchain/core/accountFactory';
const SendTransactionBtc = () => {
  const [recipientAddress, setRecipientAddress] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [fee, setFee] = React.useState('');
  const sendTransaction = () => {
    const account = AccountFactory.factory(ChainType.BTC) as BtcAccount;
    //Dosome things
    account.signer.sendTransaction(account, recipientAddress, amount, fee);
  };
  return (
    <View>
      <TextInput
        placeholder="Recipient address"
        onChangeText={text => setRecipientAddress(text)}
      />
      <TextInput placeholder="Amount" onChangeText={text => setAmount(text)} />
      <TextInput placeholder="Memo" onChangeText={text => setFee(text)} />
      <Button
        title="Send transaction"
        onPress={() => {
          console.log('Send transaction');
          sendTransaction();
        }}
      />
    </View>
  );
};

export default SendTransactionBtc;
