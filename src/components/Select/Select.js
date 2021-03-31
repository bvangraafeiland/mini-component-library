import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  const Wrapper = styled.div`
    position: relative;
    display: inline-block;
  `;
  const Select = styled.select`
    padding: 12px 32px 12px 16px;
    color: ${COLORS.gray700};
    background-color: ${COLORS.transparentGray15};
    border-radius: 8px;
    border: none;
    width: ${displayedValue.length * 9 + 48}px;
    font-size: 16px;
    appearance: none;

    &:hover {
      color: ${COLORS.black};
    }

    &:focus {
      outline: 1px auto;
    }
  `;
  const IconWrapper = styled(Icon)`
    position: absolute;
    right: 8px;
    top: 0;
    bottom: 0;
    margin: auto;
  `;
  return (
    <Wrapper>
      <Select value={value} onChange={onChange}>
        {children}
      </Select>
      <IconWrapper id="chevron-down" size={16} strokeWidth={2} />
    </Wrapper>
  );
};

export default Select;
