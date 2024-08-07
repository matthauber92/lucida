import styled, {css, CSSObject} from 'styled-components';
import {customSystem, sx} from "../../utils";
import { SpaceProps, LayoutProps, FlexboxProps, BorderProps, PositionProps, ColorProps } from 'styled-system';

interface ContainerProps extends SpaceProps, LayoutProps, FlexboxProps, BorderProps, PositionProps, ColorProps {
    sx?: CSSObject;
}

const Container = styled.div<ContainerProps>`
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;

    @media (min-width: 576px) {
        max-width: 540px;
    }

    @media (min-width: 768px) {
        max-width: 720px;
    }

    @media (min-width: 992px) {
        max-width: 960px;
    }

    @media (min-width: 1200px) {
        max-width: 1140px;
    }

    ${customSystem}
    ${props => css(sx(props))}
`;

export default Container;
