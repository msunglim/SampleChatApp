import {Dimensions, Text, View, Image} from 'react-native';
import styled from 'styled-components';

export const lightGrey = '#DDDDDD';
export const grey = '#AAAAAA';
export const darkGrey = '#666666';
export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;
export const freeImageURL1 =
  'https://www.pngitem.com/pimgs/m/184-1846102_buzz-georgia-tech-black-and-white-clipart-png.png';
export const freeImageURL2 =
  'https://m.media-amazon.com/images/I/31Al2Cn7G9L.jpg';
export const FlexCenterView = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  align-content: center;
  align-self: center;
`;
export const FlexView = styled(View)`
  flex: 1;
`;
export const CenterView = styled(View)`
  justify-content: center;
  align-items: center;
  align-content: center;
  align-self: center;
  width: 100%;
  height: 100%;
`;
export const RedBorderView = styled(View)`
  border-color: red;
  border-width: 1px;
`;
export const FullView = styled(View)`
  width: ${WIDTH + 'px'};
  height: ${HEIGHT + 'px'};
  padding: 2%;
`;
export const PaddingView = styled(View)`
  width: ${WIDTH + 'px'};
  padding: 2%;
`;
export const PaddingViewWithNav = styled(View)`
  width: ${WIDTH + 'px'};
  padding: 2%;
  flex: 1;
`;
export const MiddleSizeBlackText = styled(Text)`
  font-size: 18px;
  color: black;
  text-align-vertical: center;
`;
export const SmallSizeBlackText = styled(Text)`
  font-size: 13px;
  color: black;
  text-align-vertical: center;
`;
export const SmallSizeGreyText = styled(Text)`
  font-size: 13px;
  color: ${grey};
  text-align-vertical: center;
`;
export const ExcuseMeVerticallyThreePercent = styled(View)`
  height: 3%;
`;
export const ExcuseMeVerticallyFivePercent = styled(View)`
  height: 5%;
`;
export const ExcuseMeHorizontallyThreePercent = styled(View)`
  width: 3%;
`;
export const ExcuseMeHorizontallyFivePercent = styled(View)`
  width: 5%;
`;
export const ExcuseMeHorizontallyFivePX = styled(View)`
  width: 5px;
`;
export const ExcuseMeHorizontallyTenPX = styled(View)`
  width: 10px;
`;

export const IconImageContainer = styled(View)`
  overflow: hidden;
  border-radius: 15px;
  border-color: ${grey};
  border-width: 1px;
`;
export const IconSize = 65;
export const IconSizeImage = styled(Image)`
  width: ${IconSize + 'px'};
  height: ${IconSize + 'px'};
`;
export const PostSizeImage = styled(Image)`
  width: ${150 + 'px'};
  height: ${150 + 'px'};
`
export const HorizontalAlignedView = styled(View)`
  flex-direction: row;
  width: 100%;
`;
export const LeftAlignedView = styled(View)`
  justify-content: flex-start;
  align-self: center;
  width: 50%;
`;
export const RightAlignedView = styled(View)`
  justify-content: flex-end;
  align-self: center;
  width: 50%;
`;
export const TrueDivier = styled(View)`
  width: 100%;
  border-color: ${lightGrey};
  border-width: 1px;
`;
