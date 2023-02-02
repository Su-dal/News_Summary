import React, { useState } from "react";
import Insert from "../AddNews/Insert";
export default function NewsList() {
  const [news, setNews] = useState([
    { id: "1", text: "뉴스는입니다", status: "true" },
    { id: "2", text: "뉴스속보입니다", status: "false" },
  ]);
  const handleAdd = (inputnews) => setNews([...news, inputnews]);

  return (
    <section>
      <ul>
        {news.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <Insert onAdd={handleAdd} />
    </section>
  );
}
