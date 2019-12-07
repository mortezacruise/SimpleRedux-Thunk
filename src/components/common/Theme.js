import {screenWidth, screenHeight, screenWidthH} from './Constants';
import {MAIN_COLOR, DEACTIVE_COLOR, ACCENT_COLOR} from './Colors';
import {gray} from 'colorette';

export const iranSans = {fontFamily: 'iran_sans'};
export const twenty = {fontSize: 20};

export const activeButton = {
  width: screenWidth / 2,
  borderRadius: 8,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: MAIN_COLOR,
  height: 48,
};

export const deactivButton = {
  width: screenWidth / 2,
  borderRadius: 8,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: DEACTIVE_COLOR,
  height: 48,
};

export const buttonTitle = {
  color: 'white',
  fontSize: 20,
  fontFamily: 'iran_sans',
};

export const tCenter = {
  textAlign: 'center',
};

export const ofH = {
  overflow: 'hidden',
};

export const tR8 = {
  borderTopRightRadius: 8,
  borderTopLeftRadius: 8,
};
export const bR8 = {
  borderBottomRightRadius: 8,
  borderBottomLeftRadius: 8,
};

export const wwHalf = {
  width: screenWidth / 1.5,
};
export const w1 = {
  width: screenWidth,
};

export const w4 = {
  width: screenWidth / 4,
};

export const Tac = {
  textAlign: 'center',
};

//======================== Radiuses =======================

export const r8 = {
  borderRadius: 8,
};
export const r100 = {borderRadius: 100};
//======================== Positions =======================
export const posAbs = {position: 'absolute'};
export const posRel = {position: 'relative'};
export const tr0 = {top: 0, right: 0};
export const tl0 = {top: 0, left: 0};
export const br0 = {bottom: 0, right: 0};
export const bl0 = {bottom: 0, left: 0};
//======================== Sizes =======================
export const s100 = {
  width: 100,
  height: 100,
};
export const s48 = {
  width: 48,
  height: 48,
};
export const s32 = {
  width: 32,
  height: 32,
};

export const s24 = {
  width: 24,
  height: 24,
};
export const s2 = {
  width: screenWidth / 2,
  height: screenWidth / 2,
};
export const s3 = {
  width: screenWidth / 3,
  height: screenWidth / 3,
};
export const s4 = {
  width: screenWidth / 4,
  height: screenWidth / 4,
};
export const s5 = {
  width: screenWidth / 5,
  height: screenWidth / 5,
};
export const s6 = {
  width: screenWidth / 6,
  height: screenWidth / 6,
};
export const s8 = {
  width: screenWidth / 8,
  height: screenWidth / 8,
};
export const catHome = {
  width: screenWidth / 3,
  height: screenWidth / 5,
};

export const w50 = {
  width: screenWidth / 2,
};
//========================Flexes=======================
export const fRow = {
  flexDirection: 'row',
};
export const spaceA = {
  justifyContent: 'space-around',
};
export const spaceB = {
  justifyContent: 'space-between',
};
export const centerAll = {
  justifyContent: 'center',
  alignItems: 'center',
};

export const asFlexEnd = {
  alignSelf: 'flex-end',
};
export const asFlexStart = {
  alignSelf: 'flex-start',
};

export const center = {
  alignItems: 'center',
};
export const middle = {
  justifyContent: 'center',
};
export const Flex = {
  flex: 1,
};
export const Flex2 = {
  flex: 2,
};
//========================heights=======================
export const hwHalf = {
  height: screenWidth / 1.5,
};
export const height16 = {
  height: screenHeight / 16,
};
export const height13 = {
  height: screenHeight / 13,
};
export const height001 = {
  height: 1.5,
};
//=============================Colors=====================
export const bgMainColor = {
  backgroundColor: MAIN_COLOR,
};
export const bgAccentColor = {
  backgroundColor: ACCENT_COLOR,
};
export const fWhite = {
  color: 'white',
};

export const fMainColor = {
  color: MAIN_COLOR,
};

export const fBlack = {
  color: 'black',
};
export const fAccentColor = {
  color: ACCENT_COLOR,
};
export const bgWhite = {
  backgroundColor: 'white',
};
export const bgRed = {
  backgroundColor: 'red',
};
export const bgGray = {
  backgroundColor: '#eeee',
};
export const bgBlack = {
  backgroundColor: '#000',
};
export const bgGreen300 = {
  backgroundColor: '#81C784',
};
export const bgRed300 = {
  backgroundColor: '#FF8A65',
};

export const accentColor = '#F5F5F5';

//=============================Elevation=====================
export const el1 = {
  elevation: 1,
};
export const el2 = {
  elevation: 2,
};
//=============================Fonts=====================

export const responsiveFontH1 = () => {
  if (screenWidth > 400) {
    return 22;
  } else if (screenWidth > 250) {
    return 20;
  } else {
    return 18;
  }
};

export const responsiveFontH2 = () => {
  if (screenWidth > 400) {
    return 20;
  } else if (screenWidth > 250) {
    return 18;
  } else {
    return 16;
  }
};

export const responsiveFontH3 = () => {
  if (screenWidth > 400) {
    return 18;
  } else if (screenWidth > 250) {
    return 16;
  } else {
    return 14;
  }
};

export const responsiveFontH4 = () => {
  if (screenWidth > 400) {
    return 16;
  } else if (screenWidth > 250) {
    return 14;
  } else {
    return 12;
  }
};

export const responsiveFontH5 = () => {
  if (screenWidth > 400) {
    return 14;
  } else if (screenWidth > 250) {
    return 12;
  } else {
    return 10;
  }
};

// export const responsiveFontH2 = () => {
//   if (screenWidth > 400) {
//     return 20;
//   } else if (screenWidth > 250) {
//     return 18;
//   } else {
//     return 16;
//   }
// };

export const f1 = {
  flex: 1,
};

export const h1 = {
  fontSize: responsiveFontH1(),
};

export const h2 = {
  fontSize: responsiveFontH2(),
};

export const h3 = {
  fontSize: responsiveFontH3(),
};
export const h4 = {
  fontSize: responsiveFontH4(),
};
export const h5 = {
  fontSize: responsiveFontH5(),
};
export const h6 = {
  fontSize: 12,
};

export const op50 = {
  opacity: 0.5,
};
//=============================Margins=====================
export const m4 = {
  margin: 4,
};
export const m8 = {
  margin: 8,
};

export const m16 = {
  margin: 16,
};

export const m24 = {
  margin: 24,
};
export const m32 = {
  margin: 32,
};
export const mV4 = {
  marginVertical: 4,
};
export const mV8 = {
  marginVertical: 8,
};
export const mV16 = {
  marginVertical: 16,
};
export const mH8 = {
  marginHorizontal: 8,
};

export const mH16 = {
  marginHorizontal: 16,
};
export const mH32 = {
  marginHorizontal: 32,
};
//=============================Dimentions=====================
export const halfScrenw = {
  width: screenWidthH,
};
//=============================Dimentions=====================
export const bBWidth = {
  borderBottomWidth: 2,
  borderBottomColor: '#50C3C8',
};

//=============================Padding=====================
export const pad4 = {padding: 4};
export const pad8 = {padding: 8};
export const pad16 = {padding: 16};
export const pad32 = {padding: 32};
export const pad64 = {padding: 64};

export const padV4 = {paddingVertical: 4};
export const padV8 = {paddingVertical: 8};
export const padV16 = {paddingVertical: 16};
export const padV32 = {paddingVertical: 32};
export const padV64 = {paddingVertical: 64};

export const padH4 = {paddingHorizontal: 4};
export const padH8 = {paddingHorizontal: 8};
export const padH16 = {paddingHorizontal: 16};
export const padH32 = {paddingHorizontal: 32};
export const padH64 = {paddingHorizontal: 64};

export const greenA400 = '#00E676';
export const fGreen = {color: greenA400};
export const fGray = {color: '#9E9E9E'};
export const redA400 = '#ff1744';
export const fRed = {color: redA400};
