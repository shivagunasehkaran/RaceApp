// react library imports
import {StyleSheet} from 'react-native';
import {ConstantText} from '../../utils/ConstantText';
import {ColourPalette} from '../../assets/styles/ColourPalette';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColourPalette.white,
  },
  button: {
    backgroundColor: ColourPalette.lightGreen,
    margin: 60,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: ColourPalette.lightGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    margin: 10,
    fontSize: 17,
    fontFamily: ConstantText.font_family,
    fontWeight: ConstantText.font_bold1,
    color: ColourPalette.black,
  },
  flatListView: {
    margin: 10,
    bottom: 50,
  },
});
