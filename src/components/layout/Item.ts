import styled, { css } from 'styled-components';
import { CSSObject } from '@styled-system/css';
import { SpaceProps, LayoutProps, FlexboxProps, BorderProps, PositionProps, ColorProps } from 'styled-system';
import {customSystem, sx} from "../../utils";

interface ItemProps extends SpaceProps, LayoutProps, FlexboxProps, BorderProps, PositionProps, ColorProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  sx?: CSSObject;
}

const getWidth = (span?: number) => {
  if (!span) return;
  const width = (span / 12) * 100;
  return css`
    width: ${width}%;
  `;
};

const Item = styled.div<ItemProps>`
    box-sizing: border-box;
    ${({ xs }) => xs && getWidth(xs)};

    @media (min-width: 576px) {
        ${({ sm }) => sm && getWidth(sm)};
    }

    @media (min-width: 768px) {
        ${({ md }) => md && getWidth(md)};
    }

    @media (min-width: 992px) {
        ${({ lg }) => lg && getWidth(lg)};
    }

    @media (min-width: 1200px) {
        ${({ xl }) => xl && getWidth(xl)};
    }

    ${customSystem}
    ${props => css(sx(props))}
`;

export default Item;
