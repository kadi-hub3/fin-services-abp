import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  Topline,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./Info.styles";
import { Button } from "../Button";

const Info = ({ id }) => {
  return (
    <InfoContainer id={id}>
      <InfoWrapper>
        <InfoRow>
          <Column1>
            <TextWrapper>
              <Topline>Topline</Topline>
              <Heading>heading</Heading>
              <Subtitle>subtitle</Subtitle>
              <BtnWrap>
                <Button to="home">Button</Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default Info;
