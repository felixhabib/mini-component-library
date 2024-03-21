/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    height: 24,
    fontSize: 14,
    bottomBorderSize: 1,
    iconSize: 16,
    paddingLeft: 24,
  },
  large: {
    height: 36,
    fontSize: 18,
    bottomBorderSize: 2,
    iconSize: 24,
    paddingLeft: 36,
  },
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <TextInput
        type="text"
        id={label}
        name={label}
        size={size}
        {...delegated}
        style={{
          "--width": width + "px",
          "--height": styles.height + "px",
          "--font-size": styles.fontSize / 16 + "rem",
          "--padding-left": styles.paddingLeft + "px",
          "--bottom-border-size": styles.bottomBorderSize + "px",
        }}
      />
      <IconWrapper style={{ "--icon-size": styles.iconSize + "px" }}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
    </Wrapper>
  );
};

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: var(--icon-size);
  height: var(--icon-size);
  pointer-events: none;
`;

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);  const styles = STYLES[size];
  font-weight: 700;
  border: none;
  padding-left: var(--padding-left);
  border-bottom: var(--bottom-border-size) solid ${COLORS.black};
  color: inherit;

  &:focus {
    outline-offset: 2px;
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const Wrapper = styled.div`
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

export default IconInput;
