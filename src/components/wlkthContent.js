/* eslint-disable prettier/prettier */
import React from "react";
import { View } from "react-native";
import GpImage from "./elements/GpImage";
import styles from "./common/styles";
import { txtHead } from "./common/constants";
import GpText from "./elements/GpText";

export default function WkContainer(props) {
  return (
    <View>
        <GpImage
          style={styles.logo}
          resizeMode="contain"
          source={props?.image}
        />
        <GpText type={txtHead.heading2} style={styles.description}>
          {props.text}
        </GpText>
      </View>
  )
}