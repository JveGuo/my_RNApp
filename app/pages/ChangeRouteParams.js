/**
 * 首页
 */
import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const HomePage = ({navigation}) => {
  return (
    <>
      <View style={styles.body}>
        <Text style={styles.text}>修改参数页</Text>
        <Button title='修改'  onPress={() => navigation.navigate('Home', { post: '123' })}></Button>
        <Button title='修改标题'  onPress={() => navigation.setOptions({
          title: 'Updated!',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
        })}></Button>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: '600',
  }
});

export default HomePage;