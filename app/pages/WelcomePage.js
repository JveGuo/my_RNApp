/**
 * 欢迎页
 */
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const HomePage = ({ navigation }) => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    setTimeout(() => {
      if (count > 0) {
        setCount((c: number) => c - 1);
      } else  {
        // navigation.navigate('HomePage');
        navigation.reset({
          index: 0,
          routes: [{ name: 'HomePage' }],
        });
      }
    }, 1000);
  }, [count]);

  return (
    <>
      <View style={styles.body}>
        <Text style={styles.text}>欢迎页</Text>
        <View style={styles.button}>
          <Button
            title={`跳过 ${count}`}
            color="#841584"
            onPress={() => navigation.navigate('HomePage')}
            accessibilityLabel="Learn more about this purple button"
          ></Button>
        </View>
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
  },
  button:{
    marginTop: 30
  }
});

export default HomePage;