import { styled } from "styled-components";
import { ContainerProps } from "./types";

export const Container = styled.div<ContainerProps>`
  width: 1440px;
  height: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div<ContainerProps>`
  width: 1360px;
  height: 860px;
  background-color: #D0E5F7;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
`;
export const WrapperLeft = styled.div`
  width: 600px;
  height: 840px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  flex-direction: column;
`;

export const WrapperRight = styled.div`
  width: 549px;
  height: 235px;
  background-color: #D0E5F7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 96px;
`;

export const Image = styled.img`
  width: 92px;
  height: 92px;
  margin-bottom: 24px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const Title = styled.div``;


