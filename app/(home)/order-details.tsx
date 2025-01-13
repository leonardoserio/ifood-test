import React, { useState } from "react";
import { SectionList, TouchableOpacity, SafeAreaView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { DashedLine } from "@/assets/svg/DashedLine";
import { Colors } from "@/constants/Colors";
import ArrowBack from "@/assets/svg/ArrowBack";
import { router } from "expo-router";
import { BackButton, CardContainer, ClientInfo, ClientName, Container, Divider, FloatingButton, Footer, FooterActions, FooterContainer, FooterRow, FooterText, FooterTextBold, Header, HeaderSummary, HeaderSummaryText, ItemContainer, ItemDetails, ItemInfo, ItemName, ItemObservation, ItemPrice, MoreButton, OrderNumber, PayButton, PayButtonText, Row, RowText, RowTextBold, SectionContainer, SectionHeader } from "./order-details.styles";

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