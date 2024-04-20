// library imports
import {StyleSheet} from 'react-native';
// styles imports
import {ColourPalette} from '../../assets/styles/ColourPalette';
import { ConstantText } from '../../utils/ConstantText';
// utill imports

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 5,
    borderRadius: 5,
    paddingBottom: 10,
    backgroundColor: ColourPalette.lightGreen,
  },
  item: {
    flexDirection: 'row',
  },
  meeting: {
    flex: 1,
    paddingVertical: 10,

  },
  meetingName: {
    margin: 20,
  },
  raceNumber: {
    marginLeft: 20,
  },
  timer: {
    flex: 1,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    marginTop: 60,
    color: ColourPalette.black,
    fontSize: 12,
    fontFamily: ConstantText.font_family2,
    fontWeight: ConstantText.font_bold2,
  },
  meetingNameText: {
    color: ColourPalette.black,
    fontSize: 14,
    fontFamily: ConstantText.font_family2,
    fontWeight: ConstantText.font_bold2,
  },
  raceNumberText: {
    color: ColourPalette.black,
    fontSize: 12,
    fontFamily: ConstantText.font_family2,
    fontWeight: ConstantText.font_bold2,
  },
  expandContainer: {
    flex: 1,
    backgroundColor: ColourPalette.lightGreen,
  },
  parentLine: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: ColourPalette.lightGreen,
    marginBottom: 10,
  },
  line: {
    flex: 1,
    backgroundColor: ColourPalette.white,
    height: 1,
    marginHorizontal: 20,
  },
});
