import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native'

const Customer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleBar}></View>

        <View style={{ alignSelf: 'center' }}></View>
        <View style={styles.profileImage}>
          <Image
            source={require('../images/placeholderImage.png')}
            style={styles.image}
            resizeMode="center"
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={[styles.Text, { fontWeight: '200', fontSize: 36 }]}>
            Carl Larsen
          </Text>
          <Text>Email: test@gmail.com</Text>
          <Text>Address: Test44 gade 1</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Customer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginHorizontal: 16,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
  },
  infoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  starImage: {
    width: 60,
    height: 60,
  },
})