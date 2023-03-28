import { Padding } from "@mui/icons-material";
import { Box, Container, styled, Typography } from "@mui/material";
import VerifiedIcon from '@mui/icons-material/Verified';

const Title = styled(Typography)({
  fontWeight: "400",
  fontSize: "32px",
  lineHeight: "41px",
  marginBottom: "24px",
});

const Text = styled(Typography)({
  fontWeight: "400",
  fontSize: "20px",
  lineHeight: "26px",
  marginBottom: "36px",
  width:"276px"
});

const Price = styled(Typography)({
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "26px",

    span:{
        fontWeight: "500",
        fontSize: "36px",
        lineHeight: "47px",  
    }
  });

const Card = styled(Box)({
  fontFamily: "DM Sans",
  width: "378px",
  height: "502px",
  borderRadius: "18px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(54, 131, 252, 0.1)",
  color: "#0C1E3C",
  boxShadow: "6px 6px 48px rgba(12, 30, 60, 0.03)",
});

const PricingCard = ({ title, text, features, price }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Text>{text}</Text>
      {features.map((feature)=>{
        return (
            <Text key={feature} sx={{display:"flex", alignItems:"center"}}><VerifiedIcon sx={{marginRight:"20px"}}/> {feature}</Text>
        )
      })}
      <Price>USD <span>${price}</span>/mo</Price>
    </Card>
  );
};

export default PricingCard;
