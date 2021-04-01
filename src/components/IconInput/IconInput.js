import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const sizeVars = {
  small: {
    '--fontSize': `${14 / 16}rem`,
    '--lineHeight': `${16 / 16}rem`,
    '--iconPadding': '20px',
    '--iconSize': 16,
    '--borderWidth': 1,
  },
  large: {
    '--fontSize': `${18 / 16}rem`,
    '--lineHeight': `${21 / 16}rem`,
    '--iconPadding': '28px',
    '--iconSize': 20,
    '--borderWidth': 2,
  },
};
const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const Wrapper = styled.label`
    display: block;
    position: relative;
    border-bottom: calc(var(--borderWidth) * 1px) solid;
    width: ${width}px;
    color: ${COLORS.gray700};
    padding: 4px;
    padding-left: var(--iconPadding);
    line-height: var(--lineHeight);

    &:focus-within {
      outline: 1px auto;
      outline-offset: 2px;
    }
    &:hover,
    &:focus-within {
      color: ${COLORS.black};
    }
  `;
  const Input = styled.input`
    color: inherit;
    font-size: var(--fontSize);
    border: none;
    font-weight: 700;
    outline: none;
    width: 100%;
    height: var(--lineHeight);

    &:placeholder-shown {
      font-weight: 400;
      color: ${COLORS.gray500};
    }
  `;
  const CustomIcon = styled(Icon)`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  `;
  return (
    <Wrapper style={sizeVars[size]}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <CustomIcon
        id={icon}
        size={sizeVars[size]['--iconSize']}
        strokeWidth={sizeVars[size]['--borderWidth']}
      />
      <Input type="text" placeholder={placeholder} />
    </Wrapper>
  );
};

export default IconInput;
