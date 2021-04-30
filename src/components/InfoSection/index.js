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
import { Button } from "../ButtonElements";
/* import { homeObjectOne } from "../components/InfoSection/Data";
 */
function InfoSection({
  id,
  lightBg,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) {
  return (
    <>
      <InfoContainer id={id} lightBg={lightBg}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <FirstColumn>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </FirstColumn>
            <SecondColumn>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </SecondColumn>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
}

export default InfoSection;
