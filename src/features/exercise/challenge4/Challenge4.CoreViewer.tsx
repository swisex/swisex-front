import React, { useEffect, useState } from "react";
import axios from "axios";
import Prism from "prismjs";

interface CodeViewerProps {
  repo: string;
  path: string;
}

export default function CodeViewer({ repo, path }: CodeViewerProps) {
  const [code, setCode] = useState<string>("");

  const url = `https://api.github.com/repos/${repo}/contents/${path}`;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url);
      const base64Content = result.data.content;
      const decodedContent = atob(base64Content);
      setCode(decodedContent);
    };

    fetchData();
  }, [repo, path, url]);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <pre>
      <code className="language-javascript">{code}</code>
    </pre>
  );
}
