//src/pages/Investigator.jsx

import { Row, Col, Typography, Divider } from "antd";
import jlotempiojr from "../assets/images/jlotempiojr.jpg";

const { Title, Paragraph } = Typography;

export default function Investigator () {
    return (
        <div className="lab-members">
        <Title level={2}>Principle Investigator</Title>
        <Divider />  
          <Row
            gutter={[24, 24]}               // spacing between cols
            align="middle"                   // vertically center content
            className="member-row"
          >
            {/* Photo column */}
            <Col xs={24} sm={6} md={4} lg={3}>
              <img className="profile-pic" src={jlotempiojr} alt="Jonathan LoTempio Jr" />
            </Col>

            {/* Info column */}
            <Col xs={24} sm={18} md={20} lg={21}>
              <Title level={3}>Jonathan LoTempio Jr</Title>
              <Paragraph>Jonathan’s research career has spanned wet and dry lab as well as policy and bioethics. He holds a BS in Biochemistry (distinction) from the University of Rochester and a PhD in Genomics and Bioinformatics from the George Washington University. He completed postbaccalaureate training at the US NIH’s National Human Genome Research Institute, the United Nations University in Bruges and Institute for Advanced Study Vienna as part of a Fulbright Schuman fellowship, and an NIH Ruth L. Kirschstein Fellowship in bioethics at the University of Pennsylvania.</Paragraph>
            </Col>
          </Row>  
        </div>
    )
}