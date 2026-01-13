// src/pages/Media.jsx

import { useState } from "react";
import { Row, Col, Typography, Divider } from "antd";
import abgt from "../assets/images/AGBT_2025.jpeg";

const { Title, Paragraph, Link, Text } = Typography;

/* Click-to-reveal email component */
function EmailReveal() {
  const [show, setShow] = useState(false);

  if (!show) {
    return (
      <button
        onClick={() => setShow(true)}
        style={{
          padding: 0,
          border: "none",
          background: "none",
          color: "#255799",
          cursor: "pointer",
          fontWeight: 500,
        }}
      >
        Reveal contact email
      </button>
    );
  }

  return (
    <a href="mailto:jlotempi@hs.uci.edu">
      jlotempi@hs.uci.edu
    </a>
  );
}

export default function Media() {
  return (
    <div className="lab-members">
      {/* Banner */}
      <img
        className="banner"
        src={abgt}
        alt="Rare disease panel at AGBT 2025"
      />

      <Title level={2}>Select Media Coverage</Title>
      <Divider />

      {/* 23andMe / DTC genetics */}
      <Row gutter={[24, 24]} className="member-row">
        <Col xs={24} sm={18} md={20} lg={21}>
          <Title level={3}>23andMe and direct-to-consumer genetics</Title>

          <Paragraph style={{ fontSize: 17, marginBottom: 8 }}>
            <Text strong style={{ fontSize: 18 }}>
              The Economist
            </Text>
            <br />
            <Link
              href="https://www.economist.com/business/2025/03/27/how-safe-is-your-dna-in-a-bankruptcy"
              target="_blank"
              rel="noreferrer"
            >
              How safe is your DNA in a bankruptcy?
            </Link>
          </Paragraph>

          <Paragraph style={{ fontSize: 17 }}>
            <Text strong style={{ fontSize: 18 }}>
              U.S. News &amp; World Report
            </Text>
            <br />
            <Link
              href="https://health.usnews.com/wellness/articles/dna-testing-kits-are-they-worth-it"
              target="_blank"
              rel="noreferrer"
            >
              DNA Testing Kits: Are They Worth It?
            </Link>
          </Paragraph>
        </Col>
      </Row>

      <Divider />

      {/* Chatbots / consent */}
      <Row gutter={[24, 24]} className="member-row">
        <Col xs={24} sm={18} md={20} lg={21}>
          <Title level={3}>Chatbots for research consent</Title>

          <Paragraph style={{ fontSize: 17 }}>
            <Text strong style={{ fontSize: 18 }}>
              Reuters
            </Text>
            <br />
            <Link
              href="https://newslink.reuters.com/public/31781337"
              target="_blank"
              rel="noreferrer"
            >
              Health Rounds: Chatbots may soon be requesting informed consent
            </Link>
            <br />
            <Text type="secondary">
              Lapid, Nancy.{" "}
              <em>
                Implementation of a Chat-Based Consent Tool for Large-Scale Genomic
                Research.
              </em>
            </Text>
          </Paragraph>
        </Col>
      </Row>

      <Divider />

      {/* Media contact */}
      <Row gutter={[24, 24]} className="member-row">
        <Col xs={24} sm={18} md={20} lg={21}>
          <Title level={4}>Media inquiries</Title>
          <Paragraph style={{ fontSize: 17, marginBottom: 0 }}>
            For press inquiries or requests for expert comment, contact{" "}
            <EmailReveal />.
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
}

