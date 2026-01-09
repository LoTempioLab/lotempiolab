//src/pages/Contact.jsx

import { Row, Col, Typography, Divider } from "antd";
import jlotempiojr from "../assets/images/jlotempiojr.jpg";

const { Title, Paragraph } = Typography;

export default function Contact () {
    return (
      <div className="lab-members">
        <Title level={2}>Contact LoTempio Lab</Title>
        <p>We are always looking for interesting people to join us. If you think you would be a good fit, or would like to discuss a letter of invitation for a Fulbright grant or other international academic program please reach out.</p>
        <p>If you are interested in doctoral studies, please apply to the University of California, Irvine CMB’s Genetics, Epigenetics, and Genomics Program here:</p>
        <p><a href="https://cmb.uci.edu/" target="_blank">https://cmb.uci.edu/</a></p>
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
              <a href="mailto:jlotempi@hs.uci.edu?cc=kingch2@hs.uci.edu&bcc=secret@example.com&subject=Hello&body=Body%20goes%20here" target="_blank">Email Me</a>
            </Col>
          </Row>  
        </div>
    )
}