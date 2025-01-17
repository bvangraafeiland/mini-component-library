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
  },
  large: {
    '--fontSize': `${18 / 16}rem`,
    '--inputHeight': `${36 / 16}rem`,
    '--iconSize': 24,
    '--borderWidth': 2,
  },
};
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
  width: var(--width);
  height: var(--inputHeight);
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
const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Wrapper style={{ ...sizeVars[size], '--width': width + 'px' }}>
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
