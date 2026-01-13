// src/pages/Contact.jsx

import { Row, Col, Typography, Divider } from "antd";
import sunset from "../assets/images/Sunset.jpg";
import jlotempiojr from "../assets/images/jlotempiojr.jpg";

const { Title, Paragraph } = Typography;

const bodyText = {
  fontSize: "1.05rem",
  lineHeight: 1.6,
};

export default function Contact() {
  return (
    <div>
      {/* Banner */}
      <img
        src={sunset}
        className="banner"
        alt="Sunset over campus"
      />

      <div className="site-body">
        <Title level={2}>Join LoTempio Lab</Title>

        <Paragraph style={bodyText}>
          We are always looking for interesting people to join us. If you think
          you would be a good fit, or would like to discuss a letter of invitation
          for a Fulbright grant or other international academic program, please
          reach out.
        </Paragraph>

        <Paragraph style={bodyText}>
          If you are interested in doctoral studies, please apply to the
          University of California, Irvine CMB’s Genetics, Epigenetics, and
          Genomics Program here:
        </Paragraph>

        <Paragraph style={bodyText}>
          <a href="https://cmb.uci.edu/" target="_blank" rel="noreferrer">
            https://cmb.uci.edu/
          </a>
        </Paragraph>

        <Divider />

        <Row
          gutter={[24, 24]}
          align="middle"
          className="member-row"
        >
          {/* Photo column */}
          <Col xs={24} sm={6} md={4} lg={3}>
            <img
              className="profile-pic"
              src={jlotempiojr}
              alt="Jonathan LoTempio Jr"
            />
          </Col>

          {/* Info column */}
          <Col xs={24} sm={18} md={20} lg={21}>
            <Title level={3}>Jonathan LoTempio Jr</Title>
            <Paragraph style={bodyText}>
              <a href="mailto:jlotempi@hs.uci.edu">
                Email me
              </a>
            </Paragraph>
          </Col>
        </Row>
      </div>
    </div>
  );
}
