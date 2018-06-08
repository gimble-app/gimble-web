import styled from "styled-components";

const FlexContainer = styled.div`
  justify-content: ${({justifyContent}) => justifyContent || "inherit"};
  align-items: ${({alignItems}) => alignItems || "inherit"};
  display: flex;
  flex-wrap: wrap;
`;


export default FlexContainer;
