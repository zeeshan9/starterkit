import React, { Component } from 'react'
import { Text, View } from 'react-native'
import FlatCards from './FlatCards'
import ElevatedCards from './ElevatedCards'
import FancyCard from './FancyCard'
import ActionCard from './ActionCard'
import ContactList from './ContactList'

export class Styler02 extends Component {
  render() {
    return (
      <View>
          <FlatCards />
          <ElevatedCards />
          <FancyCard />
          <ActionCard />
          <ContactList />
      </View>
    )
  }
}

export default Styler02;
