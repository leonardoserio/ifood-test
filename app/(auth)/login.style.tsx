import Label from "@/components/Label";
import { Colors } from "@/constants/Colors";
import styled from "styled-components/native";

export const FormContainer = styled.View`
  align-items: center;
`;
export const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  padding: 0px 20px;
  background-color: ${Colors.white};
  border: 1px solid ${Colors.gray};
  border-radius: 5px;
  font-size: 17px;
  
`;

export const ButtonText = styled.Text`
  color:${Colors.white};
  font-size: 18px;
  font-weight: bold;
`;

export const FooterText = styled.Text`
  margin-top: 13px;
  font-size: 15px;
  color: ${Colors.mediumGray};
  text-align: center;
`;

export const Title = styled(Label)`
    font-weight: 500;
    font-size: 20px;
    margin-bottom:20px;
    line-height: 30px;
`