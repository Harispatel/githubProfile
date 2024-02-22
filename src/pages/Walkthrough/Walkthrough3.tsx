/* eslint-disable prettier/prettier */
import React from 'react';
import {CommonActions} from '@react-navigation/native';
import {ImageBackground, Text, View} from 'react-native';

// Components
import {STACK} from '../../components/common/stackNames';
import {COLORS} from '../../components/common/colors';
import styles from '../../components/common/styles';
import GpButton from '../../components/elements/GpButton';
import GpImage from '../../components/elements/GpImage';
import {txtHead} from '../../components/common/constants';
import {IMAGES} from '../../assets';
import GpText from '../../components/elements/GpText';
import WkContainer from '../../components/wlkthContent';

interface WalkthroughScreenProps {
  navigation: any;
}

const Walkthrough3: React.FC<WalkthroughScreenProps> = ({navigation}) => {
  const handleNext = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: STACK.LOGIN}],
      }),
    );
  };
  const handlePrevious = () => {
    navigation.navigate(STACK.WALKTHROUGH2);
  };
  const handleSkip = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: STACK.LOGIN}],
      }),
    );
  };
  return (
    <View style={styles.viewFlex}>
      <ImageBackground
        source={IMAGES.BGIMG}
        resizeMode="cover"
        style={styles.logo}>
        <GpButton
          onPress={handlePrevious}
          style={{
            ...styles.prevBtn,
          }}>
          <Text style={styles.prvTxt}>➤</Text>
        </GpButton>
      </ImageBackground>
      <WkContainer
        image={IMAGES.COMMUNITY}
        text={'Some Content Walkthrough 3'}
      />
      <View style={styles.walkthroughContainer}>
        <View style={styles.rowDirection}>
          <GpButton
            onPress={handleSkip}
            style={{
              ...styles.skipBtn,
            }}>
            <Text style={styles.skTxt}>Skip</Text>
          </GpButton>
          <GpButton
            onPress={handleNext}
            style={{
              ...styles.nextBtn,
              color: COLORS.white.default,
              backgroundColor: COLORS.green.default,
            }}>
            <Text style={styles.wkTxt}>Next</Text>
          </GpButton>
        </View>
      </View>
    </View>
  );
};

export default Walkthrough3;
