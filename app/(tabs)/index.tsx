import React from "react";
import { SectionList, View, ListRenderItemInfo, FlatList, SafeAreaView, Platform } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import Label from "@/components/Label";
import LabelBold from "@/components/LabelBold";
import { Colors } from "@/constants/Colors";
import UserCircle from "@/assets/svg/UserCircle";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import LabelSemiBold from "@/components/LabelSemiBold";

const ordersByMe = [
  { id: "1", number: "9", backgroundColor: "#5B9878" },
  { id: "2", number: "12", backgroundColor: "#5B9878" },
  { id: "3", number: "15", backgroundColor: "#d4af4a" },
  { id: "4", number: "22", backgroundColor: "#5B9878" },
];


const allOrders = [
  ...ordersByMe,
  { id: "5", number: "23", backgroundColor: "#5B9878" },
  { id: "6", number: "25", backgroundColor: "#d4af4a" },
  { id: "7", number: "31", backgroundColor: "#5B9878" },
  { id: "8", number: "33", backgroundColor: "#d4af4a" },
  { id: "9", number: "34", backgroundColor: "#5B9878" },
  { id: "10", number: "35", backgroundColor: "#5B9878" },
  { id: "11", number: "40", backgroundColor: "#5B9878" },
  { id: "8", number: "33", backgroundColor: "#d4af4a" },
  { id: "9", number: "34", backgroundColor: "#5B9878" },
  { id: "10", number: "35", backgroundColor: "#5B9878" },
  { id: "11", number: "40", backgroundColor: "#5B9878" },
];

const Order: React.FC = () => {

  const renderOrderItem = ({ item }: ListRenderItemInfo<typeof ordersByMe[0]>) => (

    <OrderCard backgroundColor={item.backgroundColor} onPress={() => router.navigate("/(home)/order-details")}>
      <OrderText>{item.number}</OrderText>
    </OrderCard >
  );
  const fillEmptySpaces = (data: typeof ordersByMe, numColumns: number) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);
    let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
      data.push({ id: `empty-${numberOfElementsLastRow}`, number: '', backgroundColor: 'transparent' });
      numberOfElementsLastRow++;
    }
    return data;
  };

  const renderOrderRow = ({ item }: { item: typeof ordersByMe }) => {
    const filledData = fillEmptySpaces(item, 4);

    return (<FlatList
      data={filledData}
      renderItem={renderOrderItem}
      numColumns={4}
      keyExtractor={item => item.id}
      columnWrapperStyle={{
        justifyContent: "space-between",
        paddingHorizontal: 20,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
    />
    );
  }


  const sections = [
    { title: `Abertos por mim (${ordersByMe.length})`, data: [ordersByMe] },
    { title: `Todos (${allOrders.length})`, data: [allOrders] },
  ];

  return (
    <Container>
      <AdminInfo>
        <AdminText>admin</AdminText>
        <UserCircle />
      </AdminInfo>
      <Header>
        <Title>Pedidos Abertos</Title>
      </Header>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => String(index)}
        renderItem={renderOrderRow}
        renderSectionHeader={({ section: { title } }) => (
          <SectionContent><SectionTitle>{title}</SectionTitle></SectionContent>
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
      <FooterContent>
        <FloatingButton>
          <Ionicons name="add" size={32} color="#fff" />
        </FloatingButton>
      </FooterContent>

    </Container>
  );
};

export default Order;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${Colors.white};
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Title = styled(LabelBold)`
  font-size: 24px;
  color: #000;
`;

const AdminInfo = styled.TouchableOpacity`
  justify-content: flex-end;
  margin-top:${Platform.OS === "ios" ? "0px" : "50px"};
  flex-direction: row;
  padding-right: 20px;
  align-items:center;
`;

const AdminText = styled(Label)`
  font-size: 13px;
  color: ${Colors.darkGray};
  margin-right: 5px;
`;

const SectionContent = styled.View`
  width:100%;
  background-color:#fff;
  justify-content:center;
  padding:20px;
`
const SectionTitle = styled(Label)`
  font-size: 18px;
  color: #000;
`;

const OrderCard = styled.TouchableOpacity<{ backgroundColor: string }>`
  width: ${Platform.OS === "ios" ? "88px" : "80px"};
  aspect-ratio:1;
  background-color: ${({ backgroundColor }: { backgroundColor: string }) => backgroundColor || "#fff"};
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  margin-bottom: 10px;
`;

const OrderText = styled(LabelSemiBold)`
  font-size: 32px;
  color: ${Colors.white};
`;

const FloatingButton = styled.TouchableOpacity`  
  width: 60px;
  height: 60px;
  background-color: #000;
 justify-content: center;
  align-items: center;
  border-radius: 30px;
  elevation: 5;
`;
const FooterContent = styled.View`
  width:100%;
  bottom:${Platform.OS === "ios" ? "100px" : "10px"};
   justify-content: center;
  align-items: center;
  position: absolute;
  z-index:10
`
