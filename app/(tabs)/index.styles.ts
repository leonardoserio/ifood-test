import Label from "@/components/Label";
import LabelBold from "@/components/LabelBold";
import LabelSemiBold from "@/components/LabelSemiBold";
import { Colors } from "@/constants/Colors";
import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${Colors.white};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Title = styled(LabelBold)`
  font-size: 24px;
  color: #000;
`;

export const AdminInfo = styled.TouchableOpacity`
  justify-content: flex-end;
  margin-top:${Platform.OS === "ios" ? "0px" : "50px"};
  flex-direction: row;
  padding-right: 20px;
  align-items:center;
`;

export const AdminText = styled(Label)`
  font-size: 13px;
  color: ${Colors.darkGray};
  margin-right: 5px;
`;

export const SectionContent = styled.View`
  width:100%;
  background-color:${Colors.white};
  justify-content:center;
  padding:20px;
`
export const SectionTitle = styled(Label)`
  font-size: 18px;
  color: #000;
`;

export const OrderCard = styled.TouchableOpacity<{ backgroundColor: string }>`
  width: ${Platform.OS === "ios" ? "88px" : "80px"};
  aspect-ratio:1;
  background-color: ${({ backgroundColor }: { backgroundColor: string }) => backgroundColor || "#fff"};
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  margin-bottom: 10px;
`;

export const OrderText = styled(LabelSemiBold)`
  font-size: 32px;
  color: ${Colors.white};
`;

export const FloatingButton = styled.TouchableOpacity`  
  width: 70px;
  height: 70px;
  background-color: ${Colors.black};
 justify-content: center;
  align-items: center;
  border-radius: 35px;
  elevation: 5;
`;
export const FooterContent = styled.View`
  width:100%;
  bottom:${Platform.OS === "ios" ? "100px" : "10px"};
   justify-content: center;
  align-items: center;
  position: absolute;
  z-index:10
`
