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
import FlatCards from './src/hitesh-course-apps/styler02/FlatCards.tsx';
import AnimalSoundsGame from './src/hitesh-course-apps/components/AnimalSoundGame.tsx';
import Styler02 from './src/hitesh-course-apps/styler02/Styler02.tsx';
import PasswordGenerator03 from './src/hitesh-course-apps/passwordgenerator03/index.tsx';
import BgChange from './src/hitesh-course-apps/bgChange.tsx/index.tsx';
import RollTheDice from './src/hitesh-course-apps/rollthedice/RollTheDice.tsx';
import CurrencyConverter from './src/hitesh-course-apps/currencyconverter05/index.tsx';
import SpotifyMusic from './src/hitesh-course-apps/spotifymusic/components/SpotifyMusic.tsx';
import Main from './src/hitesh-course-apps/navigation/Main/index.tsx';
import AppNavigator from './src/navigation/AppNavigator.tsx';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
    <AppNavigator />
      {/* <SafeAreaView>
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
      </SafeAreaView> */}
      {/* <Main /> */}
      {/* <CurrencyConverter /> */}
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
