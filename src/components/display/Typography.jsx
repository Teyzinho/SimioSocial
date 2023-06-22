import styled, { css } from "styled-components";

// Defina as variantes de estilo para a Typography
const variants = {
  h1: css`
    font-size: 2.25rem;
    font-weight: 600;
  `,
  h2: css`
    font-size: 2rem;
    font-weight: 500;
  `,
  h3: css`
    font-size: 1.5rem;
    font-weight: 500;
  `,
    h4: css`
    font-size: 1.25rem;
    font-weight: 500;
  `,
  desc: css`
    font-family: ${({theme}) => theme.fonts.secondary};
    font-size: 1rem;
    font-weight: 400;
  `,
  comment: css`
  font-family: ${({theme}) => theme.fonts.secondary};
    font-size: 1rem;
    font-weight: 300;
  `,
  semi_bold:css`
    font-weight:600;
  `,
  weak:css`
  font-size: 0.9rem;
    color: gray;
    font-weight:300;
  `
};

// Componente Typography
const Typography = styled.p`
  font-family: ${({theme}) => theme.fonts.primary};

  ${({ variant }) => variants[variant]};
`;

export default Typography;
