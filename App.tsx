/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import FlatCards from './src/styler02/FlatCards';
import AnimalSoundsGame from './src/components/AnimalSoundGame';
import Styler02 from './src/styler02/Styler02';
import PasswordGenerator03 from './src/passwordgenerator03';
import BgChange from './src/bgChange.tsx';
import RollTheDice from './src/rollthedice/RollTheDice.tsx';
import CurrencyConverter from './src/currencyconverter05/index.tsx';
import SpotifyMusic from './src/spotifymusic/components/SpotifyMusic.tsx';
import Main from './src/navigation/Main/index.tsx';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View>
            <SpotifyMusic />
            <RollTheDice />
            <BgChange /> 
            <PasswordGenerator03 />
            <Styler02 />
            <AnimalSoundsGame></AnimalSoundsGame>
          </View>
        </ScrollView>
      </SafeAreaView>
      <Main />
      <CurrencyConverter />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
