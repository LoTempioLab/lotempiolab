//src/pages/Home.jsx

import { Card, Space, Tooltip } from "antd";
import Bankruptcy from "../assets/23andMeBankruptcy.png";

export default function Home() {
  return (
    <div className="about">
      <h2>About the LoTempio Lab</h2>
      <p>The LoTempio Lab integrates computational genomics, translational bioinformatics, and bioethics to advance the responsible use of informatic technologies in human health and research. Our work spans three complementary areas: the basic science of human genome informatics, the translational science of informatic technologies, and empirical and conceptual bioethics.</p>
      <Card title="News and Events">
        <a href="https://www.nature.com/articles/s41588-025-02423-8" target="_blank">
          <img src={Bankruptcy}/>
        </a>
      </Card>
    </div>
  );
}
