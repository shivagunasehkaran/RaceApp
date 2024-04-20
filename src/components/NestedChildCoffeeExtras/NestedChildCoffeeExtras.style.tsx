import {StyleSheet} from 'react-native';
import {ColourPalette} from '../../assets/styles/ColourPalette';
import {ConstantText} from '../../utils/ConstantText';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: ColourPalette.darkGreen,
    borderRadius: 5,
    marginVertical: 5,
    marginHorizontal: 20,
    padding: 15,
  },
  nameView: {
    flex: 3,
    paddingLeft: 20,
  },
  name: {
    color: ColourPalette.white,
    fontSize: 14,
    fontFamily: ConstantText.font_family2,
    fontWeight: ConstantText.font_bold2,
  },
  imageView: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 20,
  },
});
