import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>データベースのデータ</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.ja_name}</li>
        ))}
      </ul>
    </div>
  );
}
