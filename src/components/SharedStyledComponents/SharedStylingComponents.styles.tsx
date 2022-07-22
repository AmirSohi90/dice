import styled from "@emotion/styled";
import { breakPoints } from "../../helpers/styles";

const PageLayout = styled.div`
  padding: 16px 5%;
  min-width: 288px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (min-width: ${breakPoints.tablet}) {
    padding: 16px 10%;
  }
`

const HeadingText = styled.h1`
  font-size: 1.5rem;
`;

export {PageLayout, HeadingText}