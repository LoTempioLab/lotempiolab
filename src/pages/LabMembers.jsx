//src/pages/Labmembers.jsx

import { Row, Col, Typography, Divider } from "antd";
import king from "../assets/images/king.jpg";
import anon from "../assets/images/anon.png";

const { Title, Paragraph } = Typography;

export default function LabMembers() {
  const members = [
    { name: "Lightning Auriga", img: anon, role: "stuff" },
    { name: "Christopher Donohue", img: anon, role: "stuff" },
    { name: "Charles Hadley King", img: king, role: "My research career has bridged computational genomics, data standardization, and the development of auditable digital tools for biomedical research. I have led multiple software and standards efforts that translate complex bioinformatics methods into transparent, reproducible, and regulatorily compliant systems. At the University of California, Irvine, I serve as Technical Lead for the GREGoR Dashboard, a Django + React + PostgreSQL data-management system used by our UCI GREGoR Consortium site to enforce schema-based metadata validation, version control, and interoperability in rare-disease genomics." },
  ];

  return (
    <div className="lab-members">
      <Title level={2}>Lab Members</Title>
      <Divider />

      {members.map((m, idx) => (
        <Row
          key={idx}
          gutter={[24, 24]}               // spacing between cols
          align="middle"                   // vertically center content
          className="member-row"
        >
          {/* Photo column */}
          <Col xs={24} sm={6} md={4} lg={3}>
            <img className="profile-pic" src={m.img} alt={m.name} />
          </Col>

          {/* Info column */}
          <Col xs={24} sm={18} md={20} lg={21}>
            <Title level={3}>{m.name}</Title>
            <Paragraph>{m.role}</Paragraph>
          </Col>
        </Row>
      ))}
    </div>
  );
}
