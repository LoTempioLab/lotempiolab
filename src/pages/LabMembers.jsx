//src/pages/Labmembers.jsx

import { Row, Col, Typography, Divider } from "antd";
import king from "../assets/images/king.jpg";
import anon from "../assets/images/anon.png";

const { Title, Paragraph } = Typography;

export default function LabMembers() {
  const members = [
    { name: "Lightning Auriga", img: anon, role: "Light is a computational geneticist. They hold a BA from Middlebury College and a PhD from Columbia University. Their research interests include software and reproducible workflow development for human microarray and whole-genome sequencing studies, with a particular focus on serving human populations with genetic admixture and those underrepresented in the biomedical sciences." },
    { name: "Christopher Donohue", img: anon, role: "Chris is a philosopher and historian of recent biology, genetics and medicine, with interest and expertise in post-war genetics and genomics, through the Human Genome Project (HGP).  He is also an ethicist, particularly concerned with genetic ethics, disability ethics, and ethical data science. He supports the Born Physical/Studied Digitally (BP/SD) Consortium (NSF award #2410335) at Northwestern University and partner institutions, serving as a key advisor on the Consortium’s biomedical archives and informatics initiatives. His current research bridges gaps between quantitative and qualitative research frameworks, especially in the context of disability health disparity, and where genetics and genomics is an important driver of health outcomes across the life-course. The ethical and computational challenges of the ever-increasing implementation of AI/ML in genetics and genomics research, particularly in pediatric and adolescent diagnosis, is as important a current focus. Last, he maintains long-stranding concentrations on the history of physics and mathematics in the 20th century, and in theoretical biology.  For more than a decade, until April 2025, he had a variety of roles at the National Human Genome Research Institute (NHGRI), including co-founding the History of Genomics Program, and establishing the genomics archive there. He holds a PhD in history from the University of Maryland, College Park and a BA from the Johns Hopkins University." },
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
