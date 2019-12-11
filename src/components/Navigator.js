import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import Avatar from './Avatar'
import Music from './Music'
import Cv from './Cv'
import Contact from './Contact'
import {screens} from '../data/NavigationData'



class Navigator extends Component {
  constructor(props){
    super(props) 
    this.state = {
      screenIndex: 1,
    }
    this.changeScreen = this.changeScreen.bind(this)
    this.avatarToAbout = this.avatarToAbout.bind(this)
  }

  //this is state check to change screens
  changeScreen(screenIndex){
    this.setState({
      screenIndex: screenIndex,
    })
  }

<<<<<<< HEAD
  //testing merge conflict
=======
  //click for about
>>>>>>> master
  avatarToAbout(){
     this.setState({
      screenIndex: 0,
    })
  }

  renderScreen() {
    const { screenIndex } = this.state

    switch (screenIndex) {
        case 0:
          return (
            <About />
          )
          break;

        case 1:
          return (
            <Music />
          )
        break;

        case 2:
          return (
            <Cv />
          )
        break;

        case 3:
          return (
            <Contact />
          )
        break;

    }    
  }

  //render the screen
  render() {
    const {screenIndex} = this.state
    console.log(screenIndex)
    return (
      <View style={styles.container}>
        <Header avatarToAbout={this.avatarToAbout} screen={screens[screenIndex]}/>
        {
          this.renderScreen()
        }
            {/*make Component about and replace the above view with my name inside of it*/}
        <Footer selectedScreenIndex={screenIndex} changeScreen={this.changeScreen} screens={screens} test={'test'}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Navigator