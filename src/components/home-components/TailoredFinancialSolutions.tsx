import React from "react";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";

const TailoredFinancialSolutions = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 250 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <section className="padding-section-medium side-padding side-margin">
        <div className="w-layout-blockcontainer default-width w-container">
          <div className="w-layout-grid service-title">
            <div>
              <h2 className="margin-bottom margin-huge slide-to-top-0-1s">
                Savanna HR{" "}
                <Typography
                  component={"span"}
                  sx={{
                    backgroundColor: "#FF6F61",
                    fontFamily: "'JetBrains Mono', sans-serif",
                    fontSize: "40px",
                    lineHeight: "50px",
                    fontWeight: "400",
                    paddingX: 1,
                    color: "#FFFFFF",
                  }}
                >
                  Advantage
                </Typography>
              </h2>
            </div>
          </div>
          <div className="four-column-grid four-column-service border-bottom">
            <div
              id="w-node-_6c493317-9626-bbca-e7de-b99c184678c6-184678c5"
              className="slide-to-top-0-1s border-right"
              style={{
                paddingBottom: "15px",
                paddingTop: "1rem",
                paddingRight: "1rem",
              }}
            >
              <Typography
                variant="h3"
                className="text-color-darkest margin-bottom margin-small"
              >
                Community approach
              </Typography>

              <p className="text-color-darker margin-bottom margin-small text-medium-normal text-weight-light">
                We understand client needs, research the market, and deliver
                candidates that match expectations.
              </p>
            </div>
            <div
              id="w-node-_6c493317-9626-bbca-e7de-b99c184678d2-184678c5"
              className="slide-to-top-0-2s border-right"
              style={{
                paddingBottom: "15px",
                paddingTop: "1rem",
                paddingRight: "1rem",
              }}
            >
              <Typography
                variant="h3"
                className="text-color-darkest margin-bottom margin-small"
              >
                Thorough research
              </Typography>

              <p className="text-color-darker margin-bottom margin-small text-medium-normal text-weight-light">
                We research your company, industry peers, and market
                expectations to craft a job opening profile.
              </p>
            </div>
            <div
              id="w-node-e4a32261-dc7f-88e1-0772-9f4d079fc345-184678c5"
              className="slide-to-top-0-3s border-right"
              style={{
                paddingBottom: "15px",
                paddingTop: "1rem",
                paddingRight: "1rem",
              }}
            >
              <Typography
                variant="h3"
                className="text-color-darkest margin-bottom margin-small"
              >
                Focussed Outreach
              </Typography>

              <p className="text-color-darker margin-bottom margin-small text-medium-normal text-weight-light">
                We manage a deep talent pool through our candidate database, job
                board, and social media.
              </p>
            </div>
            <div
              className="slide-to-top-0-4s"
              style={{
                paddingBottom: "15px",
                paddingTop: "1rem",
                paddingRight: "1rem",
              }}
            >
              <Typography
                variant="h3"
                className="text-color-darkest margin-bottom margin-small"
              >
                Rigorous screening
              </Typography>

              <p className="text-color-darker margin-bottom margin-small text-medium-normal text-weight-light">
                We evaluate profiles, align with your preferences, and use our
                expertise to screen candidates.
              </p>
            </div>
          </div>
          <div className="four-column-grid four-column-service">
            <div
              id="w-node-_6c493317-9626-bbca-e7de-b99c184678c6-184678c5"
              className="slide-to-top-0-1s border-right"
              style={{ paddingTop: "15px", paddingRight: "1rem" }}
            >
              <Typography
                variant="h3"
                className="text-color-darkest margin-bottom margin-small"
              >
                Digitally savvy
              </Typography>

              <p className="text-color-darker margin-bottom margin-small text-medium-normal text-weight-light">
                Our digital team develops job boards, ATS, and CRM systems to
                centralize all data.
              </p>
            </div>
            <div
              id="w-node-_6c493317-9626-bbca-e7de-b99c184678d2-184678c5"
              className="slide-to-top-0-2s border-right"
              style={{ paddingTop: "15px", paddingRight: "1rem" }}
            >
              <Typography
                variant="h3"
                className="text-color-darkest margin-bottom margin-small"
              >
                AI enabled
              </Typography>

              <p className="text-color-darker margin-bottom margin-small text-medium-normal text-weight-light">
                We use AI to search and rank CVs efficiently, while our team
                continuously develops new recruitment tools.
              </p>
            </div>
            <div
              id="w-node-_6c493317-9626-bbca-e7de-b99c184678d2-184678c5"
              className="slide-to-top-0-2s border-right"
              style={{ paddingTop: "15px", paddingRight: "1rem" }}
            >
              <Typography
                variant="h3"
                className="text-color-darkest margin-bottom margin-small"
              >
                Global reach
              </Typography>

              <p className="text-color-darker margin-bottom margin-small text-medium-normal text-weight-light">
                We have successfully sourced and placed candidates in APAC
                region, Europe, and the US
              </p>
            </div>
            <div
              id="w-node-_6c493317-9626-bbca-e7de-b99c184678d2-184678c5"
              className="slide-to-top-0-2s"
              style={{ paddingTop: "15px", paddingRight: "1rem" }}
            >
              <Typography
                variant="h3"
                className="text-color-darkest margin-bottom margin-small"
              >
                Data driven culture
              </Typography>
              <p className="text-color-darker margin-bottom margin-small text-medium-normal text-weight-light">
                Our data-driven culture streamlines the hiring process and
                ensures a smooth pipeline.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default TailoredFinancialSolutions;
