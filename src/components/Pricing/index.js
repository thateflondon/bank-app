import React from "react";
import { IconContext } from "react-icons";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
  Button,
} from "./PricingElements";
import { GiGoldBar, GiMetalBar, GiCutDiamond } from "react-icons/gi";
import { Icon } from "../SignIn/SignInElements";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#01bf71", size: 64 }}>
      <Icon to="/">ECO</Icon>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Choose your plan</PricingHeading>
          <PricingContainer>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiMetalBar />
                </PricingCardIcon>
                <PricingCardPlan>Silver</PricingCardPlan>
                <PricingCardCost>99.99€</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>100 New Users</PricingCardFeature>
                  <PricingCardFeature>10,000 € Budget</PricingCardFeature>
                  <PricingCardFeature>Retargeting analytics</PricingCardFeature>
                </PricingCardFeatures>
                <Button value={{ color: "#01bf71" }} primary>
                  Choose Plan
                </Button>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiGoldBar />
                </PricingCardIcon>
                <PricingCardPlan>Gold</PricingCardPlan>
                <PricingCardCost>299.99€</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>1000 New Users</PricingCardFeature>
                  <PricingCardFeature>50,000 € Budget</PricingCardFeature>
                  <PricingCardFeature>Lead analytics</PricingCardFeature>
                </PricingCardFeatures>
                <Button>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Diamond</PricingCardPlan>
                <PricingCardCost>999.99€</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Unlimited Users</PricingCardFeature>
                  <PricingCardFeature>Unlimited Budget</PricingCardFeature>
                  <PricingCardFeature>24/7</PricingCardFeature>
                </PricingCardFeatures>
                <Button>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}

export default Pricing;
