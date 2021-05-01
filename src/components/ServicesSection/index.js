import React from "react";

function Services() {
  return (
    <>
      <ServicesContainer>
        <ServicesTitle>Our Services</ServicesTitle>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon />
            <ServicesSubtitle>Reduce expenses</ServicesSubtitle>
            <ServicesDescription>
              We help reduce your fees and increase you overall revenue
            </ServicesDescription>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
}

export default Services;
