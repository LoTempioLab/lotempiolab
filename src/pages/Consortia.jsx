// src/pages/Consortia.jsx

import consortiaBanner from "../assets/images/Consortia.png";

const bodyText = {
  fontSize: "1.05rem",
  lineHeight: 1.6,
};

export default function Consortia() {
  return (
    <div>
      {/* Header image / banner */}
      <img
        src={consortiaBanner}
        className="banner"
        alt="Consortia logos: HPRC, GREGoR, and UDN"
      />

      <div className="site-body">
        <h2>Consortia</h2>

        <h3>Human Pangenome Reference Consortium (HPRC)</h3>
        <p style={bodyText}>
          The Human Pangenome Reference Consortium is building a more representative
          set of human reference genomes to better capture global genetic diversity
          and improve the accuracy of genomic analysis across populations. The
          LoTempio Lab contributes to HPRC through work on genome informatics,
          benchmarking, and evaluation of reference resources, with an emphasis on
          translating pangenome methods into reliable and auditable research and
          clinical tools.
        </p>
        <p style={bodyText}>
          In parallel, the lab helps lead the HPRC ELSI team,
          focusing on the ethical, legal, and social implications of pangenome
          research. This work addresses questions of representation, data
          governance, consent, benefit sharing, and the downstream consequences of
          deploying new reference infrastructures in research and healthcare
          settings.
        </p>

        <h3>
          GREGoR Consortium (Genomics Research to Elucidate the Genetics of Rare
          Disease)
        </h3>
        <p style={bodyText}>
          The GREGoR Consortium is an NIH-funded effort to improve diagnosis and gene
          discovery for rare and undiagnosed conditions through coordinated genomic
          sequencing, deep phenotyping, and cross-site collaboration. The LoTempio
          Lab plays a leadership role in developing the informatic infrastructure
          that enables GREGoR to function, as well as contributing to the conceptual
          development of systems-level rare disease thinking.
        </p>
        <p style={bodyText}>
          Our work within GREGoR focuses on interoperable data models, auditable
          analytic pipelines, and tools that support routine reanalysis and reuse of
          evidence across cases and institutions, helping convert individual
          diagnoses into shared, cumulative knowledge.
        </p>

        <h3>Undiagnosed Diseases Network (UDN)</h3>
        <p style={bodyText}>
          The Undiagnosed Diseases Network is a national clinical-research network
          dedicated to evaluating patients with unresolved conditions using
          team-based clinical assessment and advanced genomic methods. The lab’s
          work aligns with UDN’s mission by focusing on the informatic and ethical
          systems required to shorten diagnostic journeys and manage uncertainty in
          rare disease care.
        </p>
        <p style={bodyText}>
          We are particularly interested in how reanalysis, data sharing, and
          transparent interpretation practices can be operationalized in ways that
          respect participants while improving diagnostic yield over time.
        </p>
      </div>
    </div>
  );
}
