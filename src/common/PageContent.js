import styled from "styled-components";

const PageContent = styled.main`
  padding: ${({theme}) => theme.spacing.unit * 2 }px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

PageContent.displayName = 'PageContent';

export default PageContent;
