/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

import { COLORS } from './colors';
import { Typography } from './typography';
import { Constants, width } from './constants';

export default StyleSheet.create({
  titleContainer: {
    backgroundColor: COLORS.green,
    padding: Constants.GAP,
  },

  title: Object.assign({}, Typography.heading3, {
    color: COLORS.black,
  }),

  contentContainer: {
    padding: Constants.GAP,
  },

  content: Object.assign({}, Typography.bodyText),
  nextBtn:{
    padding:15,
    paddingLeft:25,
    borderBottomStartRadius:30,
    borderTopStartRadius:30,
  },
  skipBtn:{
    marginRight:width-150,
    padding:15,
    paddingLeft:25,
    color:COLORS.black.absolute,
  },
  prevBtn:{
    width:60,
    borderRadius:50,
    padding:5,
  },
  // Walkthrough Styling
  walkthroughContainer:{
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    paddingBottom:20,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  wkTxt: {
    color: COLORS.white.default,
  },
  skTxt: {
    color: COLORS.black.absolute,
  },
  prvTxt: {
    color: COLORS.green.default,
    transform: [{ rotate: '180deg'}],
    marginTop:10,
    fontSize:30,
    textAlign:'center'
  },
  
  logo: {
    width: width,
    height: 250,
  },
  description:{
    textAlign:'center'
  },
  // Common Styling
  rowDirection:{
    flexDirection: 'row'
  },
  viewFlex:{
    flex: 1
  }

});
