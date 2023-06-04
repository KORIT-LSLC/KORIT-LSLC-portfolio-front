/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

export const map = css`
  position: relative;
  width: 100%;
  height: 93vh;
  z-index: 3;
`;

export const guideBox = css`
  position: absolute;
  top:30px;
  left: 550px;
  z-index: 2;
`;

export const guideButton = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 8px;
  width: 100px;
  height: 50px;
  border-radius: 5px;
  background-color: #ffffffb3;
  box-shadow: 0 4px 8px 0;
`;