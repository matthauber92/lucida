import {CSSObject} from 'styled-components';
import { compose, space, layout, flexbox, border, position, color } from 'styled-system';
import css from '@styled-system/css';

export const sx = (props: { sx?: CSSObject }) => css(props.sx);

export const customSystem = compose(
  space,
  layout,
  flexbox,
  border,
  position,
  color
);
