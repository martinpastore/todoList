import styled from "styled-components";

const Header = styled.div`
  text-align: center;
`;

const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.primaryText};
  margin: 5vh 0 0 0;
  font-size: 4rem;
  font-weight: 300;
`;

const Span = styled.span`
  font-weight: 700;
`;

const H2 = styled.h2`
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 1.15rem;
  font-weight: 300;
`;

const Button = styled.button`
  padding: 1rem;
  border-radius: 1px;
  border: 2px solid ${({ theme }) => theme.colors.button};
  font-size: 1rem;
  background: ${({ theme }) => theme.colors.background};
`;

export { Header, H1, Span, H2, Button };
