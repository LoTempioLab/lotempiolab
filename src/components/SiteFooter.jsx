//src/components/SiteFooter.jsx

import { Footer } from "antd/es/layout/layout";
import { Space, Tooltip } from "antd";
import { GithubOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import "../App.css";

export default function SiteFooter() {

  return (
    <Footer>
      <Tooltip title="Lotempio Lab, established 2025" >Est. 2025 </Tooltip>
      <> </>
      <Tooltip title="LoTempio Lab GitHub">
        <GithubOutlined />
        <a
          href="https://github.com/jlotempiojr"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        > GitHub</a>
      </Tooltip>
    </Footer>
  );
}
