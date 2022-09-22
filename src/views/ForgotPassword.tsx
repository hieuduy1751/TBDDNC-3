import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import { LinearGradient } from 'expo-linear-gradient'
import CustomInput from "../components/CustomInput"
import CustomButton from "../components/CustomButton"

const ForgotPassword = (props: any) => {
  const lockImg = require('../../assets/lock.png')
  const emailImg = require('../../assets/mail.png')
  const handleNextBtn = () => {
    console.log('hello')
  }
  return (
    <LinearGradient
      colors={['#c4c4c4', '#28f7ac']}
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <View style={styles.viewContainer}>
        <View style={styles.lockContainer}>
          <Image style={{ width: 150, height: 170 }} source={lockImg} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>FORGOT</Text>
          <Text style={styles.title}>PASSWORD</Text>
        </View>
        <View style={styles.sloganContainer}>
          <Text style={styles.slogan}>
            Provide your account’s email for which you
          </Text>
          <Text style={styles.slogan}>
            want to reset your password
          </Text>
        </View>
        <View style={styles.formWrapper}>
          <CustomInput viewProps={{
            style: styles.inputWrapper
          }}
            imageProps={{
              style: styles.inputIcon,
              source: emailImg
            }}
            inputProps={{
              style: styles.input,
              value: 'Email',
            }}
          />
          <CustomButton title="NEXT" callback={handleNextBtn} styles={{
            buttonContainer: styles.buttonsStyle,
            buttonText: styles.buttonText
          }} />
        </View>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  inputWrapper: {
    height: 45,
    width: 330,
    backgroundColor: '#c4c4c4',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputIcon: {
    width: 25,
    marginHorizontal: 15
  },
  input: {

  },
  viewContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  lockContainer: {
    width: '100%',
    height: 300,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleContainer: {
    height: 130
  },
  sloganContainer: {
    marginBottom: 30
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  slogan: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  formWrapper: {
    height: 150,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonsStyle: {
    backgroundColor: '#E3C000',
    width: 330,
    height: 45,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default ForgotPassword
