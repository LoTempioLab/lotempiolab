//src/pages/Symposia.jsx

import { Row, Col, Typography, Divider } from "antd";
import ihswien from "../assets/images/IHS_2025.jpg";

const { Title, Paragraph } = Typography;

export default function Symposia () {
    return (
        <div className="lab-members">
               {/* Photo column */}
              <img className="banner" src={ihswien} alt="Institute for Advanced Study Vienna Courtyard" />
        
        <Title level={2}>Lab Symposia</Title>
        <Divider />  
          <Row
            gutter={[24, 24]}               // spacing between cols
            align="middle"                   // vertically center content
            className="member-row"
          >
         
            {/* Info column */}
            <Col xs={24} sm={18} md={20} lg={21}>
              <Title level={3}>Vienna, Austria</Title>
              <Paragraph>The LoTempio Lab co-sponsors a yearly meeting of variable topics in Vienna, Austria.
                While initially supported by the US-EU's Fulbright Schuman Program, we have secured annual co-funding 
                from the Austrian and California governments. If you would like to participate or have an idea for
                a panel at next year's symposium, please reach out to us. <br /> <br /> This year's symposium, co-hosted by the Austrian FORWIT will be held on 7th and 8th of May in Vienna, Austria.
                <Divider />  

              </Paragraph>
              <Title level={3}>Orange County, CA</Title>
              <Paragraph>The LoTempio Lab has a yearly in person meeting at the University of California, Irvine.
              <br /> <br />This year's meeting will be held on the 9th and 10th of March. If you would like to attend remotely, 
                please send us an email.

              </Paragraph>
            </Col>
          </Row>  
        </div>
    )
}