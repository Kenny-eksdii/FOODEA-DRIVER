import React, {useCallback} from 'react';
import {Alert, Button, Linking, StyleSheet, View, TouchableOpacity} from 'react-native';


const supportedURL = 'https://google.com';


const OpenURLButton = ({url, children}) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <OpenURLButton url={supportedURL}>
        Don't have an account? Sign Up
        </OpenURLButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#000'
  }
});

export default SignUpScreen