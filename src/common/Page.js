import styled from 'styled-components';

const Page = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: ${({theme}) => theme.spacing.unit * 2 }px;
`;

Page.displayName = 'Page';

export default Page;
