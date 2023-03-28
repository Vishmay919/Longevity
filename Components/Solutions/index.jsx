import { Box, Button, Container, styled, Typography } from "@mui/material";
import Solutioncard from "./SolutionCard";
import s1 from "../../public/assets/s1.png";
import s2 from "../../public/assets/s2.png";
import s3 from "../../public/assets/s3.png";

const Title = styled(Typography)({
  fontFamily: "DM Sans",
  fontWeight: "500",
  fontSize: "48px",
  lineHeight: "62.5px",
  marginTop: "180px",
  marginBottom: "96px",
});

const CardTitle = styled(Typography)({
  fontFamily: "DM Mono",
  fontWeight: "500",
  fontSize: "36px",
  lineHeight: "47px",
  marginBottom:"84px",
  span: {
    color: "rgba(54, 131, 252, 1)",
  },
});

const BtnActive = styled(Button)({
  borderRadius: "48px",
  padding: "12px 24px",
  backgroundColor: "rgba(54, 131, 252, 1)",
  fontFamily: "DM Mono",
  fontWeight: "500",
  fontSize: "20px",
  lineHeight: "26px",
  textTransform: "none",
  color: "#fff",
});

const Btn = styled(Button)({
  borderRadius: "48px",
  padding: "12px 20px",
  backgroundColor: "rgba(54, 131, 252, 0.1)",
  fontFamily: "DM Mono",
  fontWeight: "400",
  fontSize: "20px",
  lineHeight: "26px",
  textTransform: "none",
  color: "#0C1E3C",

  marginLeft: "48px",
});

const BtnGroup = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginTop: "36px",
  marginBottom: "84px",
});

const Solutions = () => {
  return (
    <Container maxWidth="1604px">
      <Title>Solutions</Title>
      <CardTitle>
        Solutions / <span>APIs</span>
      </CardTitle>
      <BtnGroup>
        <BtnActive>Depersonalization</BtnActive>
        <Btn>Prediction</Btn>
        <Btn>Custom Prediction Model</Btn>
        <Btn>Document Analysis</Btn>
        <Btn>Data Structuring</Btn>
      </BtnGroup>

      <Solutioncard
        imgName={s1}
        header="Depersonalization API"
        para="Remove information that can identify patients Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      />
      <CardTitle>
        Solutions / <span>App</span>
      </CardTitle>
      <Solutioncard
        imgName={s1}
        header="Depersonalization API"
        para="Remove information that can identify patients Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      />
      <CardTitle>
        Solutions / <span>Simulation</span>
      </CardTitle>
      <Solutioncard
        imgName={s1}
        header="Depersonalization API"
        para="Remove information that can identify patients Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      />
    </Container>
  );
};

export default Solutions;
