import styled, {css, CSSObject} from 'styled-components';
import { SpaceProps, LayoutProps, FlexboxProps, BorderProps, PositionProps, ColorProps } from 'styled-system';
import {customSystem, sx} from "../../utils";

interface RowProps extends SpaceProps, LayoutProps, FlexboxProps, BorderProps, PositionProps, ColorProps {
  spacing?: number;
  rowSpacing?: number;
  sx?: CSSObject;
}

const Row = styled.div<RowProps>`
    display: flex;
    flex-wrap: wrap;
    margin-left: -${props => props.spacing ? props.spacing * 8 : 0}px;
    margin-right: -${props => props.spacing ? props.spacing * 8 : 0}px;
    ${({ rowSpacing }) => rowSpacing && `margin-bottom: -${rowSpacing * 8}px;`}

    > * {
        padding-left: ${props => props.spacing ? props.spacing * 8 : 0}px;
        padding-right: ${props => props.spacing ? props.spacing * 8 : 0}px;
        ${({ rowSpacing }) => rowSpacing && `margin-bottom: ${rowSpacing * 8}px;`}
    }

    ${customSystem}
    ${props => css(sx(props))}
`;

export default Row;
