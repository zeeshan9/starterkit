import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

//React navigation
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import { PRODUCTS_LIST } from '../../data/constants'
import Separator from '../../components/Separator'
import { RootStackParamsList } from '../../Main'
import ProductItem from '../../components/ProductItem'

// data

type HomeProps = NativeStackScreenProps<RootStackParamsList, "Home">

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <FlatList
      data={PRODUCTS_LIST}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={Separator}
      renderItem={({item}) => (
        <Pressable
        onPress={() => {
          navigation.navigate('Details', {
            product: item
          })
        }}
        >
          <ProductItem product={item}/>
        </Pressable>
      )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',

    padding: 12,
    backgroundColor: '#FFFFFF',
  },
});

export default Home