// src/pages/Symposia.jsx

import { Row, Col, Typography, Divider } from "antd";
import ihswien from "../assets/images/IHS_2025.jpg";

const { Title, Paragraph } = Typography;

// Match typography used elsewhere on the site
const bodyText = {
  fontSize: "1.05rem",
  lineHeight: 1.6,
};

export default function Symposia() {
  return (
    <div className="lab-members">
      {/* Banner */}
      <img
        className="banner"
        src={ihswien}
        alt="Institute for Advanced Study Vienna Courtyard"
      />

      <Title level={2}>Lab Symposia</Title>
      <Divider />

      {/* Intro text */}
      <Paragraph style={{ ...bodyText, maxWidth: 900 }}>
        While we may work all over the world, ideas are enhanced and people are
        brought closer in unexpected ways through in-person meetings.
        Accordingly, the lab sponsors various symposia over the academic year.
      </Paragraph>

      <Row gutter={[24, 24]} align="middle" className="member-row">
        <Col xs={24} sm={18} md={20} lg={21}>
          <Title level={3}>Vienna, Austria</Title>
          <Paragraph style={bodyText}>
            The LoTempio Lab co-sponsors a yearly meeting on variable topics in
            Vienna, Austria. While initially supported by the US–EU Fulbright
            Schuman Program, we have secured annual co-funding from the Austrian
            and California governments. If you would like to participate or have
            an idea for a panel at next year's symposium, please reach out to us.
            <br />
            <br />
            This year's symposium, co-hosted by the Austrian FORWIT, will be held
            on the 7th and 8th of May in Vienna, Austria. The theme is{" "}
            <em>Disruption: research</em>, where we will explore the changing
            global research commons, technology transfer, and whether artificial
            intelligence will actually be disruptive—or just slop.
          </Paragraph>

          <Divider />

          <Title level={3}>Orange County, California</Title>
          <Paragraph style={bodyText}>
            The LoTempio Lab has a yearly in-person meeting at the University of
            California, Irvine.
            <br />
            <br />
            This year's meeting will be held on the 9th and 10th of March. If you
            would like to attend remotely, please send us an email. Alternatively,
            if you find yourself in Orange County, you are welcome to attend in
            person as well.
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
}
