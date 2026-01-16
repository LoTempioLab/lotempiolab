// src/pages/LabMembers.jsx

import { useMemo, useState } from "react";
import { Row, Col, Typography, Divider, Modal } from "antd";

import king from "../assets/images/king.jpg";
import light from "../assets/images/light.jpeg";
import ann from "../assets/images/Ann-Mccartney-CL-006.jpg";
import donohue from "../assets/images/Donohue.jpg";

const { Title, Paragraph } = Typography;

const bodyText = { fontSize: "1.05rem", lineHeight: 1.6 };

/* Click-to-reveal email component (inside modal) */
function EmailReveal({ email }) {
  const [show, setShow] = useState(false);

  if (!show) {
    return (
      <button
        onClick={() => setShow(true)}
        className="email-reveal"
        type="button"
      >
        Reveal email
      </button>
    );
  }

  return (
    <a className="email-link" href={`mailto:${email}`}>
      {email}
    </a>
  );
}

export default function LabMembers() {
  const members = useMemo(
    () => [
      {
        name: "Lightning Auriga",
        img: light,
        role:
          "Light is a computational geneticist. They hold a BA from Middlebury College and a PhD from Columbia University. Their research interests include software and reproducible workflow development for human microarray and whole-genome sequencing studies, with a particular focus on serving human populations with genetic admixture and those underrepresented in the biomedical sciences.",
      },
      {
        name: "Ann Mc Cartney",
        img: ann,
        role:
          "Ann Mc Cartney is an Associate Researcher at the University of California, Irvine. Her research interests span the intersection of bioinformatics, bioethics, and policy as they relate to human reference genomics, with a particular focus on genomic data management. In 2018, she joined Genomics Aotearoa as a Postdoctoral Researcher, where she gained experience operationalizing Indigenous data sovereignty. In 2020, she joined the Genome Informatics Section at NHGRI as a Visiting Postdoctoral Scholar, contributing to the Telomere-to-Telomere effort to complete the human genome, and also joined the NIH Office of Science Policy. She later joined the University of California, Santa Cruz as an Assistant Researcher, where she continued her work on Indigenous data sovereignty through the D4I TDR project and served as Director for International Outreach for the Human Pangenome Reference Consortium. Today, Ann is part of the LoTempio Lab in the ICTS Department, where she continues to explore the technical and bioethical challenges of building a more representative human genome reference.",
      },
      {
        name: "Christopher Donohue",
        img: donohue,
        email: "donohuc1@uci.edu",
        role:
          "Chris is a philosopher and historian of recent biology, genetics, and medicine, with interest and expertise in post-war genetics and genomics through the Human Genome Project (HGP). He is also an ethicist, particularly concerned with genetic ethics, disability ethics, and ethical data science. He supports the Born Physical/Studied Digitally (BP/SD) Consortium (NSF award #2410335) at Northwestern University and partner institutions, serving as a key advisor on the Consortium’s biomedical archives and informatics initiatives. His current research bridges quantitative and qualitative frameworks, especially in the context of disability health disparity and the life-course impacts of genetics and genomics. A major focus is the ethical and computational challenges of increasing AI/ML implementation in genetics and genomics research, particularly in pediatric and adolescent diagnosis. He also maintains long-standing interests in the history of physics and mathematics in the 20th century and in theoretical biology. For more than a decade, through April 2025, he held a variety of roles at the National Human Genome Research Institute (NHGRI), including co-founding the History of Genomics Program and establishing the genomics archive there. He holds a PhD in History from the University of Maryland, College Park and a BA from Johns Hopkins University.",
      },
      {
        name: "Charles Hadley King",
        img: king,
        role:
          "My research career has bridged computational genomics, data standardization, and the development of auditable digital tools for biomedical research. I have led multiple software and standards efforts that translate complex bioinformatics methods into transparent, reproducible, and regulatorily compliant systems. At the University of California, Irvine, I serve as Technical Lead for the GREGoR Dashboard, a Django + React + PostgreSQL data-management system used by our UCI GREGoR Consortium site to enforce schema-based metadata validation, version control, and interoperability in rare-disease genomics.",
      },
    ],
    []
  );

  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(null);

  const active = activeIdx !== null ? members[activeIdx] : null;

  return (
    <div className="lab-members">
      <Title level={2}>Lab Members</Title>
      <Divider />

      {/* 2x2 grid on desktop; stacks on xs */}
      <Row gutter={[24, 24]}>
        {members.map((m, idx) => (
          <Col key={m.name} xs={24} sm={12}>
            <button
              type="button"
              className="member-tile"
              onClick={() => {
                setActiveIdx(idx);
                setOpen(true);
              }}
            >
              <img className="member-tile-img" src={m.img} alt={m.name} />
              <div className="member-tile-caption">
                <span className="member-tile-name">{m.name}</span>
              </div>
            </button>
          </Col>
        ))}
      </Row>

      <Modal
        open={open}
        onCancel={() => {
          setOpen(false);
          setActiveIdx(null);
        }}
        footer={null}
        centered
        width={900}
        destroyOnClose
      >
        {active && (
          <div className="member-modal">
            <div className="member-modal-header">
              <img
                className="member-modal-img"
                src={active.img}
                alt={active.name}
              />
              <div>
                <Title level={3} style={{ marginTop: 0, marginBottom: 6 }}>
                  {active.name}
                </Title>

                {active.email && (
                  <Paragraph style={{ ...bodyText, marginBottom: 0 }}>
                    <EmailReveal email={active.email} />
                  </Paragraph>
                )}
              </div>
            </div>

            <Divider style={{ margin: "16px 0" }} />

            <Paragraph style={bodyText}>{active.role}</Paragraph>
          </div>
        )}
      </Modal>
    </div>
  );
}
