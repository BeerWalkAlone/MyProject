import React from "react";
import { Button, Container } from "@mui/material";
import ImaBackground from "../Images/about_us.png";
import { Box, fontSize } from "@mui/system";
import { useNavigate } from "react-router-dom";
import "../Style/AboutUs.css";
export default function aboutus() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: { md: "flex", xs: "block" },
        height: "100vh",
        marginTop: 15,
      }}
    >
      <Box flex={1} justifyContent={"center"}>
        <h1 style={{ fontSize: 50, fontFamily: "-moz-initial" }}>About Us</h1>
        <p style={{ fontSize: 18, fontFamily:"revert-layer" }}>
          CTA is more of a marketing term, however, website designers often use
          them to evoke an action from the user, usually something like “click
          here” or “buy now”, you’ll probably be used to seeing the classic “add
          to basket”. All of these terms denote a call to action – essentially
          you are taking action. There’s a whole bunch of research that goes
          into the most effective call to actions.Hosting, huh? Servers, what?
          We all have our specialities. Websites happen to be one of ours.
          However, we know that some of the website terminology used can leave
          people confused.
        </p>
      </Box>
      <Box flex={1}>
        <img src={ImaBackground} width={"70%"} />
      </Box>
    </Container>
  );
}
