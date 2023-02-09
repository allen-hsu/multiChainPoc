import * as React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import AccountFactory, {ChainType} from './blockchain/core/accountFactory';
import EthAccount from './blockchain/eth/ethAccount';

const SendTransactionEth = () => {
  const [recipientAddress, setRecipientAddress] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const sendTransaction = () => {
    const account = AccountFactory.factory(ChainType.ETH) as EthAccount;
    //Dosome things
    const tx = account.signer.sendTransaction('', '');
  };

  return (
    <View>
      <TextInput
        placeholder="Recipient address"
        onChangeText={text => setRecipientAddress(text)}
      />
      <TextInput placeholder="Amount" onChangeText={text => setAmount(text)} />
      <Button
        title="Send transaction"
        onPress={() => {
          //btc Account do some sign
          sendTransaction();
          console.log('Send transaction');
        }}
      />
    </View>
  );
};

export default SendTransactionEth;
