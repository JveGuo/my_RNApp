/**
 * 首页
 */
import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const HomePage = ({ navigation, route }) => {
  useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      console.log(route.params)
    }
  }, [route.params?.post]);
  return (
    <>
      <View style={styles.body}>
        <Text style={styles.text}>首页</Text>
        <Button title="跳转测试" onPress={() => navigation.navigate('Settings')}></Button>
        <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
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