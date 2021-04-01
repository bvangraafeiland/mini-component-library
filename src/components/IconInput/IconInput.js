import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const sizeVars = {
  small: {
    '--fontSize': `${14 / 16}rem`,
    '--inputHeight': `${24 / 16}rem`,
    '--iconSize': 16,
    '--borderWidth': 1,
    '--padding': '4px',
  },
  large: {
    '--fontSize': `${18 / 16}rem`,
    '--inputHeight': `${36 / 16}rem`,
    '--iconSize': 24,
    '--borderWidth': 2,
    '--padding': '8px',
  },
};
const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const Wrapper = styled.label`
    display: block;
    position: relative;
    width: max-content;
    color: ${COLORS.gray700};

    &:hover,
    &:focus-within {
      color: ${COLORS.black};
    }
  `;
  const Input = styled.input`
    color: inherit;
    font-size: var(--fontSize);
    font-weight: 700;
    width: ${width}px;
    height: var(--inputHeight);
    padding: var(--padding);
    padding-left: var(--inputHeight);
    border: none;
    border-bottom: calc(var(--borderWidth) * 1px) solid;
    outline-offset: 2px;

    &::placeholder {
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
