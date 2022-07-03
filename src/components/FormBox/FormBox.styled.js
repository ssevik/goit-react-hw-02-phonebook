import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: ${({ theme }) => theme.space[4]}px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]}px;

  :not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space[4]}px;
  }
`;

export const LabelTitle = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.fontSizes.s};
`;

export const Input = styled.input`
  padding: ${({ theme }) => theme.space[4]}px;
  width: 250px;
  height: 30px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  border: ${({ theme }) => theme.borders.normal};
  border-radius: ${({ theme }) => theme.radii.normal};
  border-color: ${({ theme }) => theme.colors.black};
  outline: none;
  transition: border-color ${({ theme }) => theme.transitions.normal};

  :hover,
  :focus {
    border-color: ${({ theme }) => theme.colors.hoverBtn};
  }
`;

export const Button = styled.button`
  padding: ${({ theme }) => theme.space[3]}px;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.hoverBtn};
  border-radius: ${({ theme }) => theme.radii.normal};
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transitions.normal};

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;
