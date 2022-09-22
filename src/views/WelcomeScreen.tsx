import { StyleSheet, View, Text, Image, GestureResponderEvent } from "react-native";
import CustomButton, { CustomButtonProps } from "../components/CustomButton";
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
  wsWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  flex: {
    flex: 1
  },
  circleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  circleImage: {
    width: 150,
    height: 150
  },
  growText: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  sloganText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    flexDirection: 'row'
  },
  buttonContainer: {
    backgroundColor: '#E3C000',
    width: 125,
    height: 45,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
})


export default function WelcomeScreen() {
  const circleImg = require('../../assets/circle.png')

  const handleLoginBtn = (e?: GestureResponderEvent) => {
    console.log('hello')
  }

  const handleSignupBtn = (e?: GestureResponderEvent) => {
    console.log('hello 2');
  }

  const loginBtnProps: CustomButtonProps = {
    title: 'LOGIN',
    styles: {
      buttonContainer: styles.buttonContainer,
      buttonText: styles.buttonText
    },
    callback: handleLoginBtn
  }

  const signUpBtnProps: CustomButtonProps = {
    title: 'SIGN UP',
    styles: {
      buttonContainer: styles.buttonContainer,
      buttonText: styles.buttonText
    },
    callback: handleSignupBtn
  }

  return (
    <LinearGradient
      colors={['#C4C4C4', '#28F7AC']}
    >
      <View style={styles.wsWrapper}>
        <View style={{
          ...{ flex: 3 },
          ...styles.circleContainer
        }}
        >
          <Image
            source={circleImg}
            style={styles.circleImage}
          />
        </View>
        <View style={styles.flex}>
          <Text style={styles.growText}>GROW</Text>
          <Text style={styles.growText}>YOUR BUSINESS</Text>
        </View>
        <View style={styles.flex}>
          <Text style={styles.sloganText}>
            We will help you to grow your business using
          </Text>
          <Text style={styles.sloganText}>online server</Text>
        </View>
        <View style={{ ...styles.flex, ...styles.buttonsContainer }}>
          <CustomButton {...loginBtnProps} />
          <CustomButton {...signUpBtnProps} />
        </View>
        <View style={styles.flex}>
          <Text style={{ ...styles.buttonText, ...{ textAlign: 'center' } }}>HOW WE WORK?</Text>
        </View>
      </View>
    </LinearGradient >
  )
}
