import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  FirstColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  SecondColumn,
  ImgWrap,
  Img,
} from "./InfoSectionElements";
import { Button } from "./InfoSectionElements";

function InfoSection() {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <FirstColumn>
              <TextWrapper>
                <TopLine>TopLine</TopLine>
                <Heading>Heading</Heading>
                <Subtitle>Subtitle</Subtitle>
                <BtnWrap>
                  <Button to="home" />
                </BtnWrap>
              </TextWrapper>
            </FirstColumn>
            <SecondColumn>
              <ImgWrap>
                <Img />
              </ImgWrap>
            </SecondColumn>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
}

export default InfoSection;
