//src/pages/Publications.jsx

import { Row, Col, Typography, Divider } from "antd";
import jlotempiojr from "../assets/images/jlotempiojr.jpg";

const { Title, Paragraph } = Typography;

const pubs = [
  { 
    citation: "Genome sequencing reveals the impact of pseudoexons in rare genetic disease. Genet Med. 2025 Sep 06; 101574. Pitsava G, Hawley M, Auriga L, de Dios I, Ko A, Marmolejos S, Almalvez M, Chen I, Scozzaro K, Zhao J, Barrick R, Mew NA, Fusaro VA, LoTempio J, Taylor M, Mestroni L, Graw S, Milewicz D, Guo D, Murdock DR, Bujakowska KM, UCI-GREGoR Consortium, Xiao C, Délot EC, Berger SI, Vilain E. PMID: 40927908.",
    link: "https://doi.org/10.1016/j.gim.2025.101574"
  },
  { 
    citation: "Ethics choices during the Human Genome Project reflected their policy world, not ours. Cell Genom. 2025 May 14; 5(5):100841. LoTempio JE, Donohue CR, Moreno JD, Cook-Deegan R. PMID: 40373741;",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12143320"
  },
  { 
    citation: "Identification of de novo variants from parent-proband duos via long-read sequencing. medRxiv. 2025 Feb 26. Boukas L, Délot EC, Pitsava G, Lambert C, Fanslow C, Baybayan P, Belhadj S, Losic B, Harting J, Bluske K, LoTempio J, Al-Kouatly H, Karam R, Rowell W, Xiao C, Vilain E, Berger SI. PMID: 40061346; PMCID:",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11888490"
  },
  { 
    citation: "Overcoming challenges associated with broad sharing of human genomic data. Nat Genet. 2025 Feb; 57(2):287-294. LoTempio JE, Moreno JD. PMID: 39843657; ",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11849138"
  }
]
export default function Publications () {
  return (
    <div className="lab-members">
      <Title level={2}>Publications</Title>
      <Divider />
      {pubs.map((pub, index) => (
        <Row
          key={index}
          gutter={[24, 24]}               // spacing between cols
          align="middle"                   // vertically center content
          className="member-row"
        >
            <p className="publication">
                {pub.citation} <a href={pub.link} target="_blank">{pub.link}</a>
            </p>
        </Row>
      ))}
    </div>
  )
};