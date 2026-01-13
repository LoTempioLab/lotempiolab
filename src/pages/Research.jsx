// src/pages/Research.jsx

import graphGenome from "../assets/images/Graph_genome_2025.png";

const bodyText = {
  fontSize: "1.05rem",
  lineHeight: 1.6,
};

export default function Research() {
  return (
    <div>
      {/* Banner at the very top (like Home.jsx) */}
      <img
        src={graphGenome}
        className="banner"
        alt="Graph genome visualization"
      />

      <div className="site-body">
        <h2>Basic science of human genome informatics</h2>

        <p style={bodyText}>
          Human genomics is at an inflection point. Long-read sequencing is becoming
          cost-competitive with short-read technologies, and new informatic tools
          now make telomere-to-telomere genome assembly broadly accessible. The next
          challenge is organizational: how to represent many high-quality genomes
          in a way that supports analysis, comparison, and discovery. Graph-based
          genome representations offer clear advantages by naturally capturing
          alternative alleles and complex variation.
        </p>

        <p style={bodyText}>
          At the same time, the vast existing collections of genomes and exomes can
          be reused to represent more human diversity and to rigorously evaluate
          methods at scale. This multi-platform, multi-omic landscape creates
          opportunities to build new reference resources, analytical tools, and
          novel biological insights.
        </p>

        <h4>Representative publication</h4>
        <ul className="publication">
          <li>
          Benchmarking long-read genome sequence alignment tools for human genomics applications. <strong>PeerJ</strong> (2023).

            <a
              href="https://doi.org/10.7717/peerj.16515"
              target="_blank"
              rel="noreferrer"
            >
              https://doi.org/10.7717/peerj.16515
            </a>
          </li>
        </ul>

        <h2>Translational science of informatic technologies</h2>

        <p style={bodyText}>
          Emerging informatic technologies are rapidly entering research and
          clinical workflows, yet robust evidence of their performance often lags
          behind adoption. The lab focuses on establishing clear benchmarks to
          demonstrate non-inferiority—and where possible, superiority—of new genome
          reference materials and analytic approaches relative to established
          standards.
        </p>

        <p style={bodyText}>
          Beyond genomics, we apply these translational principles to conversational
          AI. Chatbots now play a growing role in digital health and biomedical
          research, but many systems remain opaque and difficult to audit. Our work
          emphasizes ethically grounded, versioned, and auditable chatbot systems
          for informed consent and other high-stakes decision contexts.
        </p>

        <h4>Representative publications and resources</h4>
        <ul className="publication">
          <li>
          Using a chat-based informed consent tool in large-scale genomic research.{" "}
          <strong>JAMIA</strong> (2024).
            <a
              href="https://doi.org/10.1093/jamia/ocad217"
              target="_blank"
              rel="noreferrer"
            >
              https://doi.org/10.1093/jamia/ocad217
            </a>
          </li>
          <li>
            Documentation for our current, graph-based chatbot:{" "}
            <a
              href="https://github.com/UCI-ICTS/mia"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/UCI-ICTS/mia
            </a>
          </li>
        </ul>

        <h2>Empirical and conceptual bioethics</h2>

        <p style={bodyText}>
          Genomics and bioinformatics continually raise ethical questions that are
          both practical and conceptual. Lab members are supported to explore
          bioethical issues emerging directly from their technical work, while
          applying empirical approaches ranging from quantitative analysis to
          clinical trial design to study the ethics–technology interface.
        </p>

        <p style={bodyText}>
          Our approach embeds ethical reflection throughout scientific workflows,
          from data governance and consent to data sharing and system design. This
          integration allows us to generate evidence about how ethics can be
          operationalized in rapidly evolving fields.
        </p>

        <h4>Representative publications</h4>
        <ul className="publication">
          <li>
            Overcoming challenges associated with broad sharing of human genomic
            data. <strong>Nature Genetics</strong> (2025).{" "}
            <a
              href="https://doi.org/10.1038/s41588-024-02049-2"
              target="_blank"
              rel="noreferrer"
            >
              https://doi.org/10.1038/s41588-024-02049-2
            </a>
          </li>
          <li>
            Ethics choices during the Human Genome Project reflected their policy
            world, not ours. <strong>Cell Genomics</strong> (2025).{" "}
            <a
              href="https://doi.org/10.1016/j.xgen.2025.100497"
              target="_blank"
              rel="noreferrer"
            >
              https://doi.org/10.1016/j.xgen.2025.100497
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
