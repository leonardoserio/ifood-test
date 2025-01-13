import React, { useState } from "react";
import { SectionList, Text, View, TouchableOpacity, Animated, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { DashedLine } from "@/assets/svg/DashedLine";
import Label from "@/components/Label";
import { Colors } from "@/constants/Colors";
import LabelBold from "@/components/LabelBold";
import ArrowBack from "@/assets/svg/ArrowBack";
import { router } from "expo-router";

// Tipos para a seção e os itens
interface Item {
    id: string;
    name: string;
    details: string;
    price: string;
    observation?: string;
}

interface Section {
    title: string;
    data: Item[];
}

// Dados de exemplo
const sections: Section[] = [
    {
        title: "Itens (5)",
        data: [
            { id: "1", name: "Alabama apimentado", observation: "Sem cebola", details: "+ Bacon (R$ 2,30)", price: "R$ 32,90" },
            { id: "2", name: "Coca-Cola 350ml", details: "", price: "R$ 6,90" },
            { id: "3", name: "Pizza Grande", observation: "Sem cebola", details: "1/2 Calabresa\n1/2 Frango Especial", price: "R$ 72,90" },
            { id: "4", name: "Suco de laranja Natural", observation: "Com gelo, Sem açúcar", details: "", price: "R$ 12,90" },
            { id: "5", name: "Alabama apimentado", observation: "Sem cebola", details: "+ Bacon (R$ 2,30)", price: "R$ 32,90" },
        ],
    },
];



export default () => {
    const [showResumido, setShowResumido] = useState(false);

    const handleScroll = (event: any) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        setShowResumido(offsetY > 60); // Mostra o header resumido após 60px de scroll
    };

    const FooterTotal = () => (
        <FooterContainer>
            <FooterRow>
                <FooterText>Total dos itens</FooterText>
                <FooterTextBold>R$ 102,90</FooterTextBold>
            </FooterRow>
            <FooterRow>
                <FooterText>Taxa de serviço</FooterText>
                <FooterTextBold>R$ 12,90</FooterTextBold>
            </FooterRow>
            <FooterRow>
                <FooterText>Total a pagar</FooterText>
                <FooterTextBold>R$ 124,90</FooterTextBold>
            </FooterRow>
        </FooterContainer>
    );
    const renderItem = ({ item }: { item: Item }) => (
        <>
            <ItemContainer>
                <ItemInfo>
                    <ItemName>{item.name}</ItemName>
                    {item.observation && <ItemObservation>{item.observation}</ItemObservation>}
                    {item.details && <ItemDetails>{item.details}</ItemDetails>}


                </ItemInfo>
                <>
                    <ItemPrice>{item.price}</ItemPrice>
                    <MoreButton>
                        <MaterialIcons name="more-horiz" size={24} color="black" />
                    </MoreButton>
                </>
            </ItemContainer>
            <DashedLine />
        </>
    );

    return (
        <Container>
            {/* Header resumido (animado) */}
            {showResumido && (
                <HeaderSummary>
                    <HeaderSummaryText>Mesa / Comanda 22</HeaderSummaryText>
                </HeaderSummary>
            )}
            <SectionList
                sections={sections}
                keyExtractor={(item, index) => `${item}-${index}`}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title } }) => (
                    <SectionContainer><SectionHeader>{title}</SectionHeader></SectionContainer>
                )}
                contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100 }}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                ListFooterComponent={<FooterTotal />}
                ListHeaderComponent={<Header>
                    <OrderNumber>22</OrderNumber>
                    <CardContainer>
                        <ClientInfo>
                            Cliente: <ClientName>José Maria da Silva</ClientName>
                        </ClientInfo>
                        <Divider />
                        <Row>
                            <RowText>
                                Qtde. pessoas: <RowTextBold>4</RowTextBold>
                            </RowText>
                            <RowText>
                                Tempo total: <RowTextBold>45min.</RowTextBold>
                            </RowText>
                        </Row>
                    </CardContainer>
                </Header>
                }

                stickySectionHeadersEnabled={true}
            />

            <Footer>
                <FloatingButton>
                    <MaterialIcons name="add" size={70} color="white" />
                </FloatingButton>
                <FooterActions>
                    <TouchableOpacity onPress={() => router.back()}>
                        <BackButton>
                            <ArrowBack />
                        </BackButton>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <BackButton>
                            <MaterialIcons name="more-horiz" size={24} color="black" />
                        </BackButton>
                    </TouchableOpacity>
                    <PayButton>
                        <PayButtonText>PAGAR R$ 124,90</PayButtonText>
                    </PayButton>
                </FooterActions>
            </Footer>
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.shadowBlack }} />
        </Container >
    );
};

const MoreButton = styled.TouchableOpacity`
    margin-left:10px;
`

const HeaderSummary = styled(Animated.View)`
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

const HeaderSummaryText = styled(LabelBold)`
  font-size: 18px;
  color: ${Colors.black}
`;
const CardContainer = styled.View`
                background-color:${Colors.lightBackground};
                border-radius: 15px;
                padding: 16px;
                margin: 16px;
                width:100%;
                elevation: 2;
                `;
const Row = styled.View`
                flex-direction: row;
                justify-content: space-between;
                `;

const RowText = styled(Label)`
                font-size: 15px;
                color: ${Colors.black}
                `;

const RowTextBold = styled(LabelBold)``;

const ClientInfo = styled(Label)`
                font-size: 16px;
                color: ${Colors.black};
                `;

const ClientName = styled(ClientInfo)`
                font-weight: bold;
           
                `;
const FooterTextBold = styled(LabelBold)`
                font-size: 16px;
                `;

const FooterContainer = styled.View`
                margin-top: 16px;
                
                `;

const FooterRow = styled.View`
                flex-direction: row;
                justify-content: space-between;
                margin-bottom: 8px;
                `;

const FooterText = styled(Label)`
                font-size: 16px;
                color: ${Colors.black};
                `;

const Container = styled.View`
                flex: 1;
                background-color:${Colors.white};
                `;

const Header = styled.View`

                padding-top: 10px;
                align-items: center;
                `;

const OrderNumber = styled(LabelBold)`
                font-size: 62px;
                font-weight: bold;
                color: ${Colors.black};
                `;

const Divider = styled.View`
                border-bottom-width: 1px;
                border-color: #ddd;
                margin: 15px 0;
                `;

const SectionHeader = styled(Label)`
                font-size: 17px;
                margin-top: 16px;
                margin-bottom: 8px;

                `;

const SectionContainer = styled.View`
                width:100%;
                background-color:${Colors.white};
                `


const ItemContainer = styled.View`
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                padding: 12px 0;
                `;

const ItemInfo = styled.View`
                flex: 1;
                margin-right: 8px;
                justify-content:center;
                `;

const ItemName = styled.Text`
                font-size: 16px;
                font-weight: bold;
                `;

const ItemDetails = styled(Label)`
                font-size: 15px;
                color:${Colors.black};
                margin-top: 4px;
                `;
const ItemObservation = styled(ItemDetails)`
                color:${Colors.darkGray};
                `

const ItemPrice = styled.Text`
                font-size: 16px;
                font-weight: bold;
                color: ${Colors.black};
                `;

const Footer = styled.View`
                padding: 16px;
                background-color: ${Colors.shadowBlack};
                border-top-width: 1px;
                border-color: #ddd;
                
                `;

const FloatingButton = styled.TouchableOpacity`
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

const FooterActions = styled.View`
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                `;

const BackButton = styled.View`
                width: 65px;
                height: 65px;
                justify-content: center;
                align-items: center;
                border-radius: 8px;
                border-width: 2px;
                border-color: ${Colors.black};
                margin-right: 16px;
                `;

const PayButton = styled.TouchableOpacity`
                flex: 1;
                background-color: ${Colors.black};
                padding: 16px;
                
                border-radius: 8px;
                justify-content: center;
                align-items: center;
                height:65px;
                `;

const PayButtonText = styled.Text`
                font-size: 16px;
                font-weight: bold;
                color: #fff;
                `;