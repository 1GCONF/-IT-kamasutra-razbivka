import styled from "styled-components";
export const StyledSectionFeed = styled.section`
  max-width: 800px;
  margin: 0 auto;
  min-height: 100vh;
  display: grid;
  grid-template-columns repeat(auto-fill,minmax(50vw,1fr));
  grid-gap: 1ex;
`;
