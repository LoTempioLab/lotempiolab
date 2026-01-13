// src/pages/Home.jsx

import { Card } from "antd";
import Bankruptcy from "../assets/23andMeBankruptcy.png";
import campus from "../assets/images/ICTS-campus.jpeg";

const bodyText = {
  fontSize: "1.05rem",
  lineHeight: 1.6,
};

export default function Home() {
  return (
    <div>
      <img src={campus} className="banner" alt="UCI campus" />

      <div className="site-body">
        <h2>About the LoTempio Lab</h2>

        <p style={bodyText}>
          The LoTempio Lab at the University of California, Irvine integrates
          computational genomics, translational bioinformatics, and bioethics to
          advance the responsible use of informatic technologies in human health
          and research. Our work spans three complementary areas: the basic
          science of human genome informatics, the translational science of
          informatic technologies, and empirical and conceptual bioethics.
        </p>

        <Card title="News and Events">
          <a
            href="https://www.nature.com/articles/s41588-025-02423-8"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Bankruptcy}
              className="news"
              alt="23andMe bankruptcy coverage"
            />
          </a>
        </Card>
      </div>
    </div>
  );
}