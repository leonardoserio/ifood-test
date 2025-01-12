import React from "react";
import { SectionList, View, ListRenderItemInfo, FlatList } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import Label from "@/components/Label";
import LabelBold from "@/components/LabelBold";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
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

const AdminInfo = styled.View`
  justify-content: flex-end;
  flex-direction: row;
  padding-right: 20px;
`;

const AdminText = styled(Label)`
  font-size: 16px;
  color: #888;
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

const OrderCard = styled.View<{ backgroundColor: string }>`
  width: 88px;
  height:88px;
  background-color: ${({ backgroundColor }: { backgroundColor: string }) => backgroundColor || "#fff"};
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  margin-bottom: 10px;
`;

const OrderText = styled(Label)`
  font-size: 32px;
  font-weight: 500;
  color: #fff;
`;

const FloatingButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 80px;
  right: 20px;
  left:20px;
  width: 60px;
  height: 60px;
  background-color: #000;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  elevation: 5;
`;

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
];

const Order: React.FC = () => {

  const renderOrderItem = ({ item }: ListRenderItemInfo<typeof ordersByMe[0]>) => (

    <OrderCard backgroundColor={item.backgroundColor} >
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
        <Ionicons name="person-circle-outline" size={24} color="#888" />
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
      <FloatingButton>
        <Ionicons name="add" size={32} color="#fff" />
      </FloatingButton>
    </Container>
  );
};

export default Order;
