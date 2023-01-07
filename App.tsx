import '@ethersproject/shims';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import {ChainType} from './blockchain/core/accountFactory';
import WalletContext from './WalletContext';
import {NetworkType} from './blockchain/core/networkFactory';
import {Picker} from '@react-native-picker/picker';
const App = () => {
  const [chainType, setChainType] = useState(ChainType.ETH);
  const [networkType, setNetworkType] = useState(NetworkType.ETH);
  return (
    <WalletContext.Provider
      value={{chainType, setChainType, networkType, setNetworkType}}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </WalletContext.Provider>
  );
};

export default App;
