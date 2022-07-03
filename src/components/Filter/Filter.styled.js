import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]}px;
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
