import styled from 'styled-components/native';

const Space = styled.View`
    height: ${({ horizontal }: { horizontal: number }) => horizontal ? `${horizontal}px` : '0px'};
    width: 100%;
`;

export default Space;
