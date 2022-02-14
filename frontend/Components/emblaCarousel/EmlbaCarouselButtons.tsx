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
  right: -7.2rem;
`;

export const NextButton = ({ enabled, onClick }) => (
  <ButtonNext onClick={onClick} disabled={!enabled}>
    <ButtonSvg viewBox="0 0 25 43">
      <path d="M0.995496 40.9451C0.689003 41.2237 0.666416 41.698 0.945046 42.0045C1.22368 42.311 1.69801 42.3336 2.00451 42.055L0.995496 40.9451ZM23.5 21.5L24.0045 22.055C24.1609 21.9128 24.25 21.7113 24.25 21.5C24.25 21.2887 24.1609 21.0872 24.0045 20.945L23.5 21.5ZM2.00451 0.945051C1.69802 0.66642 1.22368 0.689008 0.945049 0.995501C0.666419 1.30199 0.689007 1.77633 0.9955 2.05496L2.00451 0.945051ZM2.00451 42.055L24.0045 22.055L22.9955 20.945L0.995496 40.9451L2.00451 42.055ZM24.0045 20.945L2.00451 0.945051L0.9955 2.05496L22.9955 22.055L24.0045 20.945Z" />
    </ButtonSvg>
  </ButtonNext>
);
