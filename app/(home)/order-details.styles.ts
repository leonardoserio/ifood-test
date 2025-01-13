import Label from "@/components/Label";
import LabelBold from "@/components/LabelBold";
import { Colors } from "@/constants/Colors";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const MoreButton = styled.TouchableOpacity`
    margin-left:10px;
`

export const HeaderSummary = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color:${Colors.white};
  justify-content: center;
  align-items: center;
  z-index: 10;
  shadow-color: ${Colors.black};
  shadow-opacity: 0.1;
  shadow-radius: 6px;
  elevation: 6;
`;

export const HeaderSummaryText = styled(LabelBold)`
  font-size: 18px;
  color: ${Colors.black}
`;
export const CardContainer = styled.View`
                background-color:${Colors.lightBackground};
                border-radius: 15px;
                padding: 16px;
                margin: 16px;
                width:100%;
                elevation: 2;
                `;
export const Row = styled.View`
                flex-direction: row;
                justify-content: space-between;
                `;

export const RowText = styled(Label)`
                font-size: 15px;
                color: ${Colors.black}
                `;

export const RowTextBold = styled(LabelBold)``;

export const ClientInfo = styled(Label)`
                font-size: 16px;
                color: ${Colors.black};
                `;

export const ClientName = styled(ClientInfo)`
                font-weight: bold;
           
                `;
export const FooterTextBold = styled(LabelBold)`
                font-size: 16px;
                `;

export const FooterContainer = styled.View`
                margin-top: 16px;
                
                `;

export const FooterRow = styled.View`
                flex-direction: row;
                justify-content: space-between;
                margin-bottom: 8px;
                `;

export const FooterText = styled(Label)`
                font-size: 16px;
                color: ${Colors.black};
                `;

export const Container = styled.View`
                flex: 1;
                background-color:${Colors.white};
                `;

export const Header = styled.View`

                padding-top: 10px;
                align-items: center;
                `;

export const OrderNumber = styled(LabelBold)`
                font-size: 62px;
                font-weight: bold;
                color: ${Colors.black};
                `;

export const Divider = styled.View`
                border-bottom-width: 1px;
                border-color: #ddd;
                margin: 15px 0;
                `;

export const SectionHeader = styled(Label)`
                font-size: 17px;
                margin-top: 16px;
                margin-bottom: 8px;

                `;

export const SectionContainer = styled.View`
                width:100%;
                background-color:${Colors.white};
                `


export const ItemContainer = styled.View`
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                padding: 12px 0;
                `;

export const ItemInfo = styled.View`
                flex: 1;
                margin-right: 8px;
                justify-content:center;
                `;

export const ItemName = styled.Text`
                font-size: 16px;
                font-weight: bold;
                `;

export const ItemDetails = styled(Label)`
                font-size: 15px;
                color:${Colors.black};
                margin-top: 4px;
                `;
export const ItemObservation = styled(ItemDetails)`
                color:${Colors.darkGray};
                `

export const ItemPrice = styled.Text`
                font-size: 16px;
                font-weight: bold;
                color: ${Colors.black};
                `;

export const Footer = styled.View`
                padding: 16px;
                background-color: ${Colors.shadowBlack};
                border-top-width: 1px;
                border-color: #ddd;
                
                `;

export const FloatingButton = styled.TouchableOpacity`
                width: 70px;
                height: 70px;
                background-color:${Colors.green};
                border-radius: 35px;
                justify-content: center;
                align-items: center;
                position: absolute;
                bottom: 110px;
                right: 16px;
                shadow-color: ${Colors.black};
                shadow-offset: 0px 2px;
                shadow-opacity: 0.3;
                shadow-radius: 4px;
                elevation: 4;
                `;

export const FooterActions = styled.View`
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                `;

export const BackButton = styled.View`
                width: 65px;
                height: 65px;
                justify-content: center;
                align-items: center;
                border-radius: 8px;
                border-width: 2px;
                border-color: ${Colors.black};
                margin-right: 16px;
                `;

export const PayButton = styled.TouchableOpacity`
                flex: 1;
                background-color: ${Colors.black};
                padding: 16px;
                
                border-radius: 8px;
                justify-content: center;
                align-items: center;
                height:65px;
                `;

export const PayButtonText = styled.Text`
                font-size: 16px;
                font-weight: bold;
                color: #fff;
                `;