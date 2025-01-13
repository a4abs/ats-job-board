import { Typography } from "@mui/material";

const SuccessStories = () => {
  return (
    <section
      className="padding-section-medium side-padding side-margin margin-top-fix"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <div className="w-layout-blockcontainer default-width w-container">
        <div className="one-third-grid testimonials-grid">
          <div className="slide-to-top-0-1s">
            <img
              src="/assets/img/heart-handshake.svg"
              width="72"
              alt="Modern abstract illustration"
              className="margin-bottom margin-medium"
            />
            <h2 className="margin-bottom margin-small">
              Real Stories , <br />
              Real{" "}
              <Typography
                component={"span"}
                sx={{
                  backgroundColor: "#FF6F61",
                  fontFamily: "'Merriweather', sans-serif",
                  fontSize: "40px",
                  lineHeight: "50px",
                  fontWeight: "400",
                  paddingX: 1,
                  color: "#FFFFFF",
                }}
              >
                Success
              </Typography>
            </h2>
            <div className="custom-divider margin-bottom margin-small full-width-animation">
              <div className="divider-detail _24px-wide-animation"></div>
            </div>
            <p className="text-medium-normal text-weight-medium margin-bottom margin-small">
              Our clients are at the heart of everything we do.
            </p>
            <p className="text-medium-normal text-color-darker">
              Here's what they industry leaders have to say about the
              recruitment services they have received from us.
            </p>
          </div>
          <div className="two-column-grid-1-5rem our-team">
            <div>
              <div className="testimonial-container padding-small slide-to-top-0-3s">
                <p className="text-weight-light text-medium-normal">
                  &quot;Savanna HR have always shown sincere interest in the
                  deliverables for skills across levels. Their participation in
                  requirement understanding commendable. I have always relied on
                  for their round the clock availability&quot;
                </p>
                <div className="testimonial-details margin-top margin-small">
                  <img
                    src="/assets/img/peoples/tanvi-jain.png"
                    loading="lazy"
                    width="840"
                    alt="Tanvi Jain HR Pearson"
                    sizes="56px"
                    className="image-2"
                  />
                  <div
                    id="w-node-_13ffa2f2-9d43-b81d-d3ee-17f2257b8c85-fa0497a1"
                    className="inline-flex"
                  >
                    <div>
                      <div className="testimonial-author text-weight-medium">
                        Tanvi Jain
                      </div>
                      <div className="text-size-small text-color-darker">
                        HR, Pearson Education
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-container padding-small margin-top margin-small slide-to-top-0-3s">
                <p className="text-weight-light text-medium-normal">
                  &quot;Swati and her team are very professional and are talent
                  specialists. They have helped us fill critical positions on
                  time. I highly recommend their services and wish them
                  luck.&quot;
                </p>
                <div className="testimonial-details margin-top margin-small">
                  <img
                    src="/assets/img/peoples/sarika.jpeg"
                    loading="lazy"
                    width="840"
                    alt="Middle-aged asian businesswoman on a gold background"
                    sizes="56px"
                    className="image-2"
                  />
                  <div
                    id="w-node-_0c762397-d05f-4225-1bb6-7242e4c9ed0c-fa0497a1"
                    className="inline-flex"
                  >
                    <div>
                      <div className="testimonial-author text-weight-medium">
                        Sarika Sharma
                      </div>
                      <div className="text-size-small text-color-darker">
                        Senior Manager - Talent Aquisition LEAD School
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="w-node-a1d0add6-47ba-4dd4-e589-a536b9127cef-fa0497a1">
              <div className="testimonial-container padding-small slide-to-top-02s">
                <p className="text-weight-light text-medium-normal">
                  &quot;I have worked very closely with the Savanna HR team and
                  they have helped us to close many niche hires. I find the team
                  committed to quality service delivery and open to
                  feedback.&quot;
                </p>
                <div className="testimonial-details margin-top margin-small">
                  <img
                    src="/assets/img/peoples/anusput-nayak.jpeg"
                    loading="lazy"
                    width="840"
                    id="w-node-a1d0add6-47ba-4dd4-e589-a536b9127cf4-fa0497a1"
                    alt="Anustup Nayak"
                    sizes="56px"
                    className="image-2"
                  />
                  <div
                    id="w-node-a1d0add6-47ba-4dd4-e589-a536b9127cf5-fa0497a1"
                    className="inline-flex"
                  >
                    <div>
                      <div className="testimonial-author text-weight-medium">
                        Anustup Nayak
                      </div>
                      <div className="text-size-small text-color-darker">
                        VP, XSEED Education
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-container padding-small margin-top margin-small slide-to-top-0-2s">
                <p className="text-weight-light text-medium-normal">
                  &quot;For top-notch recruitment services, Savanna HR is the
                  way to go. They deliver spot-on solutions with a professional
                  approach, and their knowledgeable team makes all the
                  difference.&quot;
                </p>
                <div className="testimonial-details margin-top margin-small">
                  <img
                    src="/assets/img/peoples/abhinav-sehgal.jpg"
                    width="840"
                    id="w-node-_161818d7-a020-34e1-43bb-212b8fa58af3-fa0497a1"
                    alt="Young caucasian businessman on a gold background"
                    sizes="56px"
                    className="image-2"
                  />
                  <div
                    id="w-node-_161818d7-a020-34e1-43bb-212b8fa58af4-fa0497a1"
                    className="inline-flex"
                  >
                    <div>
                      <div className="testimonial-author text-weight-medium">
                        Abhinav Sehgal
                      </div>
                      <div className="text-size-small text-color-darker">
                        Group Head HR, AAFT
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
