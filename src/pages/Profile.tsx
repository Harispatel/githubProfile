/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Button,
  Card,
  WhiteSpace,
  WingBlank,
  SearchBar,
  Text,
} from '@ant-design/react-native';
import {} from '@ant-design/react-native';

import {fetchGithubProfile} from '../components/helpers/ApiHelpers';
import {ShowCustomViewToast} from '../components/common/constants';
import {COLORS} from '../components/common/colors';

const ProfileScreen: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [userData, setUserData] = useState<any>(null);
  const handleResponse = data => {
    setUserData(data);
  };
  const handleError = data => {
    ShowCustomViewToast(data);
  };
  const fetchProfile = () => {
    if (username.length > 0) {
      fetchGithubProfile({handleResponse, handleError, username});
    } else {
      ShowCustomViewToast('Please enter Username');
    }
  };

  return (
    <View style={styles.viewContainer}>
      <SearchBar
        placeholder="Search by Github username"
        aria-label="tests"
        cancelText=" "
        autoFocus
        onSubmit={fetchProfile}
        onChange={text => {
          setUsername(text);
        }}
      />
      <WhiteSpace size="sm" />
      <View style={styles.alignCenter}>
        <Button
          onPress={fetchProfile}
          activeStyle={{backgroundColor: COLORS.OFFWHITE}}
          type="primary"
          style={styles.p5}
          size="medium">
          Search
        </Button>
      </View>
      <WhiteSpace size="lg" />
      {userData && (
        <>
          <WingBlank size="lg">
            <Card>
              <Card.Header
                title={userData.login}
                thumbStyle={styles.cardHeader}
                thumb={userData.avatar_url}
                extra={userData.name}
              />
              <WhiteSpace size="lg" />
              <Card.Body>
                <View style={styles.ml15}>
                  <WhiteSpace size="lg" />
                  <Text>Joined on {userData.created_at}</Text>
                  <Text>Public Repos: {userData.public_repos}</Text>
                </View>
                <WhiteSpace size="lg" />
              </Card.Body>
              <Card.Footer
                content={'Followers: ' + userData.followers}
                extra={'Following: ' + userData.following}
              />
            </Card>
          </WingBlank>
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    padding: 20,
  },
  alignCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  p5: {padding: 5},
  cardHeader: {width: 50, height: 50, borderRadius: 8},
  ml15: {marginLeft: 15},
});
export default ProfileScreen;
