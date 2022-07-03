import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: ${({ theme }) => theme.space[3]}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.l};
`;

export const Item = styled.li`
  display: flex;
  align-items: center;

  :not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space[3]}px;
  }
`;

export const Text = styled.p`
  display: flex;
  margin-right: ${({ theme }) => theme.space[5]}px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.accent};
`;

export const Number = styled.span`
  margin-left: ${({ theme }) => theme.space[3]}px;
`;

export const Button = styled.button`
  margin-left: auto;
  padding-top: ${({ theme }) => theme.space[2]}px;
  padding-bottom: ${({ theme }) => theme.space[2]}px;
  padding-right: ${({ theme }) => theme.space[4]}px;
  padding-left: ${({ theme }) => theme.space[4]}px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  border-radius: ${({ theme }) => theme.radii.normal};
  cursor: pointer;
  transition: transform ${({ theme }) => theme.transitions.normal};

  :hover,
  :focus {
    transform: scale(1.1);
  }
`;
