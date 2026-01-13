// src/pages/Investigator.jsx

import { useState } from "react";
import { Row, Col, Typography, Divider } from "antd";
import brussels from "../assets/images/Brussels.jpg";
import "./Investigator.css";

const { Title, Paragraph } = Typography;

const bodyText = {
  fontSize: "1.05rem",
  lineHeight: 1.6,
};

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

export default function Investigator() {
  return (
    <div className="lab-members">
      <Title level={2}>Principal Investigator</Title>
      <Divider />

      <Row className="investigator-row" align="top">
        {/* Photo column */}
        <Col flex="288px" className="investigator-photo-col">
          <img
            className="investigator-photo"
            src={brussels}
            alt="Jonathan LoTempio Jr"
          />
        </Col>

        {/* Text column */}
        <Col flex="auto" className="investigator-text-col">
          <Title level={3} style={{ marginTop: 0, marginBottom: 6 }}>
            Jonathan LoTempio Jr
          </Title>

          {/* Positioning statement */}
          <Paragraph style={bodyText}>
            Faculty in computational genomics and bioethics at UC Irvine, with
            expertise in pangenome reference systems, rare disease genomics, and
            governance of data- and AI-driven biomedical research.
          </Paragraph>

          {/* Expertise */}
          <div className="investigator-card">
            <Title level={5} className="investigator-subhead">
              Areas of expertise
            </Title>
            <ul className="investigator-list" style={bodyText}>
              <li>Human genome informatics and pangenomes (graph genomes)</li>
              <li>Rare disease genomics, reanalysis, and learning health systems</li>
              <li>Bioethics and ELSI in genomics (consent, governance, benefit sharing)</li>
              <li>Data privacy, commercialization, and stewardship of genomic data</li>
              <li>Benchmarking and evaluation of AI-enabled biomedical tools</li>
              <li>Conversational AI for informed consent and research engagement</li>
            </ul>
          </div>

          {/* Media topics */}
          <div className="investigator-card">
            <Title level={5} className="investigator-subhead">
              Topics frequently requested by media
            </Title>
            <ul className="investigator-list" style={bodyText}>
              <li>Consumer genetics and 23andMe</li>
              <li>DNA data in bankruptcy and M&amp;A</li>
              <li>Genomic privacy and consent</li>
              <li>Rare disease diagnosis and reanalysis</li>
              <li>Pangenomes and reference bias</li>
              <li>Evaluation of genomic AI</li>
              <li>Chatbots for informed consent</li>
              <li>Auditable AI in health research</li>
              <li>Bioethics of data sharing</li>
            </ul>
          </div>

          {/* Background */}
          <div className="investigator-card">
            <Title level={5} className="investigator-subhead">
              Background
            </Title>
            <ul className="investigator-list" style={bodyText}>
              <li>PhD in Genomics and Bioinformatics</li>
              <li>Training at the National Human Genome Research Institute (NIH)</li>
              <li>Fulbright Schuman fellowship (EU)</li>
              <li>NIH Ruth L. Kirschstein fellowship in bioethics (University of Pennsylvania)</li>
              <li>Leads a lab spanning genome informatics and embedded bioethics</li>
            </ul>
          </div>

          {/* Media inquiries */}
          <div className="investigator-press">
            <Title level={5} className="investigator-subhead" style={{ marginBottom: 6 }}>
              Media inquiries
            </Title>
            <Paragraph style={{ ...bodyText, marginBottom: 0 }}>
              For press inquiries or requests for expert comment, contact{" "}
              <EmailReveal />.
            </Paragraph>
          </div>
        </Col>
      </Row>
    </div>
  );
}
