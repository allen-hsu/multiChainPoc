import {Picker} from '@react-native-picker/picker';
import * as React from 'react';
import {View, Text} from 'react-native';
import AccountFactory, {ChainType} from './blockchain/core/accountFactory';
import NetworkFactory, {NetworkType} from './blockchain/core/networkFactory';
import WalletContext from './WalletContext';
const HomeScreen = () => {
  const [accountAddress, setAccountAddress] = React.useState('');
  const [balance, setBalance] = React.useState('');
  const context = React.useContext(WalletContext);
  React.useEffect(() => {
    const account = AccountFactory.factory(context.chainType);
    const network = NetworkFactory.factory(context.networkType);
    account.connect(network);
    setAccountAddress(account.address);
    if (account.connector !== undefined) {
      account.connector
        .getBalance()
        .then(res => {
          setBalance(res);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }, [context]);

  return (
    <View>
      <Text>Account address: {accountAddress}</Text>
      <Text>Balance: {balance}</Text>
      {/* <Text>Transactions:</Text>
       {transactions.map(transaction => (
        <Text key={transaction.hash}>{transaction.hash}</Text>
      ))}  */}
      <Text>Selector ChainType</Text>
      <Picker
        selectedValue={context.chainType}
        onValueChange={(itemValue, itemIndex) =>
          context.setChainType(itemValue)
        }>
        <Picker.Item label="ETH" value={ChainType.ETH} />
        <Picker.Item label="BTC" value={ChainType.BTC} />
      </Picker>
      <Text>Selector NetworkType</Text>
      <Picker
        selectedValue={context.networkType}
        onValueChange={(itemValue, itemIndex) =>
          context.setNetworkType(itemValue)
        }>
        <Picker.Item label="ETH" value={NetworkType.ETH_GOERLI} />
        <Picker.Item label="BTC" value={NetworkType.BTC} />
      </Picker>
    </View>
  );
};

export default HomeScreen;
