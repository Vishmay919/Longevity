import { Box, Container, styled, Typography } from "@mui/material";
import PricingCard from "./PricingCard";

const Title = styled(Typography)({
  fontFamily: "DM Sans",
  fontWeight: "500",
  fontSize: "48px",
  lineHeight: "62.5px",
  marginTop: "180px",
  marginBottom: "96px",
});

const CardGroup = styled(Box)({
  display: "flex",
  justifyContent: "space-evenly",
});

const Pricing = () => {
  return (
    <Container maxWidth="1604px">
      <Title>Pricing</Title>
      <CardGroup>
        <PricingCard
          title="Starter"
          text="Boost your clinic exams with fast diagnosis with help of AI"
          features={[
            "Predictions",
            "Depersonalization",
            "Data Structuring",
            "upto 5 doctors",
          ]}
          price="39"
        />
        <PricingCard
          title="Professional"
          text="For Clinics and hospitals that want to giver personalized experience"
          features={["All in startert", "10 Custom models", "100 doctors"]}
          price="99"
        />
        <PricingCard
          title="Enterprise"
          text="For organizations that need powerful tools and custom services"
          features={[
            "All in professional",
            "Unlimited models and doctors",
            "Multiple organizations panel",
          ]}
          price="39"
        />
      </CardGroup>
    </Container>
  );
};

export default Pricing;
