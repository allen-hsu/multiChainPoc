import * as React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {ChainType} from './blockchain/core/accountFactory';
import SendTransactionBtc from './SendTransactionBtc';
import SendTransactionEth from './SendTransactionEth';
import WalletContext from './WalletContext';
const SendTransactionScreen = () => {
  const [recipientAddress, setRecipientAddress] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [memo, setMemo] = React.useState('');
  const context = React.useContext(WalletContext);
  const getTransactionComponent = () => {
    if (context.chainType === ChainType.BTC) {
      return SendTransactionBtc();
    } else {
      return SendTransactionEth();
    }
  };
  return (
    <View>
      {getTransactionComponent()}
      <Text>Wallet Chain: {context.chainType}</Text>
    </View>
  );
};

export default SendTransactionScreen;
