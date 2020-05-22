import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

export default makeStyles({
  header: {
    textAlign: "center",
    "& h1": {
      color: "#2c3e50",
      margin: "5vh 0 0 0",
      fontSize: "4rem",
      fontWeight: "300",
      "& span": {
        fontWeight: "700",
      },
    },
    "& h2": {
      color: "#2c3e50",
      fontSize: "1.15rem",
      fontWeight: "300",
    },
  },
});

const StyledHeader = styled.div`
  text-align: center;

  @media screen and (max-width: 600px) {
    text-align: left;
  }
`;

const StyledH1 = styled.h1`
  color: ${({ theme }) => theme.colors.primaryText};
  margin: 5vh 0 0 0;
  font-size: 4rem;
  font-weight: 300;
`;

const StyledH2 = styled.h2`
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 1.15rem;
  font-weight: 300;
`;

const StyledSpan = styled.span`
  font-weight: 700;
`;

export { StyledHeader, StyledH1, StyledH2, StyledSpan };
