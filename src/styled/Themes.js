const sharedStyles = {
  // 全テーマ共通設定
  buttonFgColor: '#000',
  buttonFgHoverColor: '#fff',
  buttonBgColor: '#34d5df',
  buttonBgHoverColor: '#cb43f5',
};

export const darkTheme = {
  mainBgGradientColor1: '#3D0529',
  mainBgGradientColor2: '#7B103E',
  mainFgColor: '#fff',
  cardBgColor: '#15232D',
  cardTextareaBgColor: '#193549',
  ...sharedStyles,
};

export const lightTheme = {
  mainBgGradientColor1: '#d4d3dd',
  mainBgGradientColor2: '#efefbb',
  mainFgColor: '#333',
  cardBgColor: '#fff',
  cardTextareaBgColor: '#eee',
  ...sharedStyles,
};
