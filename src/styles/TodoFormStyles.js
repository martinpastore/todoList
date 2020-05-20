import styled from "styled-components";

const Todo = styled.form`
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  height: 2rem;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.icon};
  color: ${({ theme }) => theme.colors.icon};
  font-size: 1.2rem;
  font-weight: 300;
  outline: none;
`;

export { Todo, Input };
