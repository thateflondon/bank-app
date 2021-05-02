import React from "react";
import {
  ServicesContainer,
  ServicesTitle,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesSubtitle,
  ServicesDescription,
} from "../ServicesSection/ServicesElements";
import icon1 from "../../images/undraw_Savings_re_eq4w.png";
import icon2 from "../../images/virtual-offices.png";
import icon3 from "../../images/undraw_wallet_aym5.png";

function Services() {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesTitle>Our Services</ServicesTitle>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={icon1} />
            <ServicesSubtitle>Reduce expenses</ServicesSubtitle>
            <ServicesDescription>
              We help reduce your fees and increase you overall revenue.
            </ServicesDescription>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={icon2} />
            <ServicesSubtitle>Virtual Offices</ServicesSubtitle>
            <ServicesDescription>
              You can access our platform online anywhere in the world.
            </ServicesDescription>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={icon3} />
            <ServicesSubtitle>Premium benefits</ServicesSubtitle>
            <ServicesDescription>
              Unlock our special membership card and earn 5% cash back.
            </ServicesDescription>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
}

export default Services;
