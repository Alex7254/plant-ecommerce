import React from "react";
import styled, { css } from "styled-components";

const sharedButtonStyles = css`
  background-color: transparent;
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  border: 0;
  width: 5rem;
  height: 5rem;
  justify-content: center;
  align-items: center;
  padding: 0;

  &:not(:disabled) {
    cursor: pointer;
    fill: #bc6c25;
  }

  &:disabled {
    fill: #e9e9e9;
  }
`;

const ButtonPrev = styled.button`
  ${sharedButtonStyles}
  left: -7.2rem;
`;

const ButtonSvg = styled.svg`
  width: 1.563rem;
  height: 2.688rem;
`;

export const PrevButton = ({ enabled, onClick }) => (
  <ButtonPrev onClick={onClick} disabled={!enabled}>
    <ButtonSvg viewBox="0 0 25 43">
      <path d="M24.0045 2.05496C24.311 1.77632 24.3336 1.30199 24.055 0.995495C23.7763 0.689002 23.302 0.666415 22.9955 0.945045L24.0045 2.05496ZM1.49999 21.5L0.995487 20.9451C0.839131 21.0872 0.749991 21.2887 0.749991 21.5C0.749991 21.7113 0.839131 21.9128 0.995487 22.055L1.49999 21.5ZM22.9955 42.055C23.302 42.3336 23.7763 42.311 24.055 42.0045C24.3336 41.698 24.311 41.2237 24.0045 40.945L22.9955 42.055ZM22.9955 0.945045L0.995487 20.9451L2.0045 22.055L24.0045 2.05496L22.9955 0.945045ZM0.995487 22.055L22.9955 42.055L24.0045 40.945L2.0045 20.9451L0.995487 22.055Z" />
    </ButtonSvg>
  </ButtonPrev>
);

const ButtonNext = styled.button`
  ${sharedButtonStyles}
  right: 0.7rem;
`;

export const NextButton = ({ enabled, onClick }) => (
  <ButtonNext onClick={onClick} disabled={!enabled}>
    <ButtonSvg viewBox="0 0 238.003 238.003">
      <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
    </ButtonSvg>
  </ButtonNext>
);
