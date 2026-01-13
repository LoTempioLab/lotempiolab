// src/pages/Publications.jsx

import { Typography, Divider } from "antd";
import journalBanner from "../assets/images/journal_covers_banner_wide.png";

const { Title, Paragraph, Link } = Typography;

const bodyText = {
  fontSize: "1.05rem",
  lineHeight: 1.6,
};

const pubs = [
  {
    title: "Impact of the 23andMe bankruptcy on preserving the public benefit of scientific data.",
    journal: "Nature Genetics",
    rest: "2025. LoTempio J, Donohue C, Moreno J, Santos Rutschman A, Sarnoff J, Sinha MS, Stoeger T, Contreras JL.",
    link: "https://doi.org/10.1038/s41588-025-02423-8",
  },
  {
    title: "Genome sequencing reveals the impact of pseudoexons in rare genetic disease.",
    journal: "Genetics in Medicine",
    rest: "2025 Sep 06; 101574. Pitsava G, Hawley M, Auriga L, de Dios I, Ko A, Marmolejos S, Almalvez M, Chen I, Scozzaro K, Zhao J, Barrick R, Mew NA, Fusaro VA, LoTempio J, Taylor M, Mestroni L, Graw S, Milewicz D, Guo D, Murdock DR, Bujakowska KM, UCI-GREGoR Consortium, Xiao C, Délot EC, Berger SI, Vilain E. PMID: 40927908.",
    link: "https://doi.org/10.1016/j.gim.2025.101574",
  },
  {
    title: "Ethics choices during the Human Genome Project reflected their policy world, not ours.",
    journal: "Cell Genomics",
    rest: "2025 May 14; 5(5):100841. LoTempio JE, Donohue CR, Moreno JD, Cook-Deegan R. PMID: 40373741.",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12143320",
  },
  {
    title: "Identification of de novo variants from parent-proband duos via long-read sequencing.",
    journal: "medRxiv",
    rest: "2025 Feb 26. Boukas L, Délot EC, Pitsava G, Lambert C, Fanslow C, Baybayan P, Belhadj S, Losic B, Harting J, Bluske K, LoTempio J, Al-Kouatly H, Karam R, Rowell W, Xiao C, Vilain E, Berger SI.",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11888490",
  },
  {
    title: "Overcoming challenges associated with broad sharing of human genomic data.",
    journal: "Nature Genetics",
    rest: "2025 Feb; 57(2):287–294. LoTempio JE, Moreno JD. PMID: 39843657.",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11849138",
  },
];

export default function Publications() {
  return (
    <div>
      {/* Banner */}
      <img
  src={journalBanner}
  className="banner banner-publications"
  alt="Journal cover collage featuring Nature Genetics, Cell Genomics, Genetics in Medicine, and Nature"
/>

      <div className="site-body">
        <Title level={2}>Publications</Title>
        <Divider />

        <ol style={{ paddingLeft: "1.25rem" }}>
          {pubs.map((pub, index) => (
            <li key={index} style={{ marginBottom: "1.4rem" }}>
              <Paragraph style={{ ...bodyText, marginBottom: "0.35rem" }}>
                <em>{pub.title}</em>{" "}
                <strong style={{ fontWeight: 600 }}>{pub.journal}</strong>.{" "}
                {pub.rest}
              </Paragraph>

              <Paragraph style={{ marginBottom: 0 }}>
                <Link href={pub.link} target="_blank" rel="noreferrer">
                  {pub.link}
                </Link>
              </Paragraph>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
