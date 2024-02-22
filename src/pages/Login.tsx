/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const LoginScreen: React.FC = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // MemoizedComponent using react.memo
  // const MemoizedComponent = memo(({data}) => {
  //   console.log(`Rendering MemoizedComponent for data: ${data}`);
  //   return <View>{data}</View>;
  // });

  const handleLogin = () => {
    // Authentication logic
    console.warn('Logging in with:', {username, password});
  };
  // UserDetails component
  // const UserDetails = ({ user }) => {
  //   return (
  //     <div>
  //       <MemoizedComponent data={user.name} />
  //       <MemoizedComponent data={user.email} />
  //     </div>
  //   );
  // };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default LoginScreen;
