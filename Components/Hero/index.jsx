import { styled, Typography, Container, Box, Button, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React from "react";

const Title = styled(Typography)({
  fontFamily: "DM Mono",
  fontWeight: "500",
  fontSize: "64px",
  lineHeight: "83.33px",
  textAlign: "center",
});

const SubTitle = styled(Typography)({
  fontWeight: 500,
  fontFamily: "DM Mono",
  fontSize: "48px",
  lineHeight: "62.5px",
  textAlign: "center",
  marginBottom: "64px",
});

const Text = styled(Typography)({
  maxWidth: "623px",
  fontFamily: "DM Mono",
  fontWeight: 400,
  fontSize: "32px",
  lineHeight: "42px",
  marginBottom: "35px",
  textAlign: "center",
});

const Background = styled(Box)({
  backgroundColor: "rgba(54, 131, 252, 0.1)",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const Wrapper = styled(Box)({
  padding: "0",
  margin: "0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

});

const Btn = styled(Button)({
  width: "280px",
  height: "72px",
  borderRadius: "10px",
  padding: "15px 30px",
  fontFamily: "DM Sans",
  fontWeight: "500",
  fontSize: "32px",
  lineHeight: "42px",
  backgroundColor: "#3683FC",
  textTransform: "none",
  marginBottom: "137px",
});

const Hero = () => {
  return (
    <Background>
      <Container>
        <Wrapper>
          <Title>An AI that can predict diseases of your patients</Title>
          <SubTitle> And help cure them InTime</SubTitle>
          <Btn variant="contained">Book a Demo</Btn>
          <Text>discover our solutions for business and doctors</Text>
          <IconButton sx={{display:"flex", flexDirection:"column"}}>
          <KeyboardArrowDownIcon sx={{ fontSize: "50px", marginBottom:"-15px" }} />
          <KeyboardArrowDownIcon sx={{ fontSize: "30px" }} />
          </IconButton>
        </Wrapper>
      </Container>
    </Background>
  );
};

export default Hero;
