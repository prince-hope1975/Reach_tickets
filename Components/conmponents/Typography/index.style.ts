import styled from "styled-components";

export const H1 = styled.h1`
  font-family: "Britanica-Black", monospace;
  font-style: normal;
  font-weight: 900;
  font-size: clamp(35px, calc(8vw +  1px), 70px);
  line-height: 120%;
  /* or 48px */
  display: flex;
  align-items: center;
  text-transform: uppercase;
  
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0.41) 151.16%
    );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const H2 = styled.h2`
  /* Lights, camera, reaction */

  /* position: static;
  width: 336px;
  height: 24px;
  left: 0px;
  top: 0px; */

  font-family: "Britanica-Bold", monospace;
  font-style: normal;
  font-weight: 700;
  font-size: clamp(14px, calc(4vw + 1px), 24px);
  line-height: 24px;
  /* identical to box height */
  text-transform: uppercase;

  color: rgba(255, 255, 255, 0.8);

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 12px 0px;
`;
export const P = styled.p`
  /* We make animated videos for businesses looking to tell a story, educate customers, increase revenue. Enter your email address to get started */

  font-family: "Sora";
  font-style: normal;
  font-weight: 400;
  font-size: clamp(13px, calc(2.5vw + 1px), 18px);
  line-height: 160%;
  /* or 22px */

  color: rgba(255, 255, 255, 0.8);

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 12px 0px;
`;

export const H3 = styled.h3`
  /* A video is worth a thousand words */
  font-family: "monospace";
  font-style: normal;
  font-size: clamp(12px, calc(2vw + 1px), 18px);
  line-height: 17px;
  text-transform: uppercase;

  color: rgba(255, 255, 255, 0.8);
`;