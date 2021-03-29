/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  height: var(--barHeight);
  padding: var(--barPadding);
  border-radius: var(--wrapperRadius, 4px);
  overflow: hidden;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: 100%;
  width: var(--barProgress);
`;

const PaddingWrapper = styled.div`
  height: 100%;
  border-radius: var(--barRadius);
  overflow: hidden;
`;

const sizeVariables = {
  small: {
    '--barHeight': '8px',
  },
  medium: {
    '--barHeight': '12px',
  },
  large: {
    '--barHeight': '24px',
    '--barPadding': '4px',
    '--wrapperRadius': '8px',
    '--barRadius': '4px',
  },
};
const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      style={{ ...sizeVariables[size], '--barProgress': `${value}%` }}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <PaddingWrapper>
        <Bar />
      </PaddingWrapper>
    </Wrapper>
  );
};

export default ProgressBar;
