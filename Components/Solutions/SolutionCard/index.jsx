import { Grid, Link, styled, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Title = styled(Typography)({
  fontFamily: "DM Mono",
  fontWeight: "400",
  fontSize: "36px",
  lineHeight: "47px",
  marginBottom: "28px",
});

const Para = styled(Typography)({
  fontFamily: "DM Mono",
  fontWeight: "400",
  fontSize: "24px",
  lineHeight: "31px",
  color: "rgba(33, 53, 92, 1)",
});

const LinkComponent = styled(Link)({
  fontFamily: "DM Sans",
  fontWeight: "500",
  fontSize: "24px",
  lineHeight: "31px",
  color: "rgba(54, 131, 252, 1)",
  textDecoration: "none",
  display:"flex",
  alignItems:"center",
  margin:"126px 0 200px 0"

});

const Solutioncard = ({ imgName, header, para }) => {
  return (
    <div>
      <Grid container>
        <Grid item xs={3} sx={{display:"flex", justifyContent:"center"} }>
          <Image src={imgName} alt="img" />
        </Grid>
        <Grid item xs={9}>
          <Title>{header}</Title>
          <Para>{para}</Para>
          <LinkComponent href="#">
            Learn More
            <ArrowOutwardIcon />{" "}
          </LinkComponent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Solutioncard;
