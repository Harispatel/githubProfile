/* eslint-disable prettier/prettier */
import {Toast} from '@ant-design/react-native';
import {ToastViewT} from '../../utility/types/type';
import {Dimensions, Text} from 'react-native';
import {COLORS} from './colors';
export const Constants = {
  GAP: 20,
};

export const {width, height} = Dimensions.get('window');

export const txtHead = {
  heading1: 'heading1',
  heading2: 'heading2',
  heading3: 'heading3',
};

export function ShowCustomViewToast(data: ToastViewT) {
  // console.log('Meesssage', data);
  // Toast.info({content: <Text style={{color: 'red'}}>{message}</Text>}, 2);
  // setTimeout(() => {
  Toast.info(
    {
      content: (
        <>
          <Text style={{color: COLORS.ERROR}}>{data}</Text>
        </>
      ),
    },
    2,
  );
  // }, 2500);
}
