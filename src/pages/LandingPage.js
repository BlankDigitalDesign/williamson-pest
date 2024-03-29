import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Heading from "../components/Heading";
import image from "../images/hero1.jpg";
import LeaveReview from "../components/leaveReview/LeaveReview";
import GoogleReviews from "../components/GoogleReviews";
import { ElfsightWidget } from "react-elfsight-widget";
import { Parallax, Background } from "react-parallax";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2} style={{ display: "flex" }}>
        <div>
          <Item id="heading-section">
            <div>
              <Heading
                title="Leaders in the Pest Control Industry"
                subtitle="Your local experts in termite treatments, pest control, and rodent control."
              />
              <Parallax bgImage={image} strength={500}>
                <div style={{ height: 500 }}>
                  <div>HTML inside the parallax</div>
                </div>
              </Parallax>
              {/* <img className="hero-image" src={image} alt="termites" /> */}
            </div>
          </Item>
          <Item id="company-info">
            <div id="company-text">
              Our company is family-owned and operated with over 15 years of
              experience in the pest control industry. We are a team of
              dedicated, positive and knowledgeable members who persistently
              venture to conduct themselves with the highest level of integrity
              and honesty. Our primary focus is providing nonpareil customer
              service by earning our clients' trust and confidence through
              building relationships and delivering exceptional, affordable and
              consistent exterminator services.{" "}
            </div>
          </Item>
          <Item id="leave-review">
            <LeaveReview />
          </Item>
          <Item
            className="content mtop grid3"
            style={{ backgroundColor: "#dad7cd", justifyContent: "center" }}
          >
            <ElfsightWidget widgetID="bb4c5d6f-abb9-4c0e-b6a1-2299ade1df5d" />
            {/* <GoogleReviews /> */}
          </Item>
          <Item id="pest-identification">
            <span>
              Do you know what kind of pest you have? Check out the dictionary.
            </span>
            <span style={{ marginLeft: "3px" }}>
              <a href="/pest-dictionary">
                <button id="pest-button">COMMON PESTS</button>
              </a>
            </span>
          </Item>
        </div>
      </Stack>
    </Box>
  );
};

export default LandingPage;
