import styled from "styled-components";
export const StyledSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  display: grid;
   grid-template-columns repeat(auto-fill,minmax(300px,1fr));
  grid-gap: 1ex;
`;
