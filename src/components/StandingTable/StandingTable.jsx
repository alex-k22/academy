import { useEffect, useState } from "react";
// import axios from 'axios';
// import cheerio from 'cheerio';

const StandingTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("useEffect called"); // Отладочная информация

    const fetchTable = async () => {
      try {
        const response = await fetch(
          "https://api.allorigins.win/get?url=" +
            encodeURIComponent(
              "https://dufldo.com.ua/cho-z-futbolu-sered-yunakiv-2012-r-n-persha-liga-11-11-2024-2025"
            )
        );
        const data = await response.json();
        const html = data.contents;

        console.log("HTML:", html); // Отладочная информация

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        const table = doc.querySelector("table"); // Используем более общий селектор
        console.log("Table:", table); // Отладочная информация

        if (!table) {
          console.error("Table not found");
          return;
        }

        const rows = table.querySelectorAll("tr");
        const tableData = Array.from(rows).map((row) => {
          const cells = row.querySelectorAll("td");
          return Array.from(cells).map((cell) => cell.textContent);
        });

        console.log("Table Data:", tableData); // Отладочная информация
        setData(tableData);
      } catch (error) {
        console.error("Error fetching table:", error);
      }
    };

    fetchTable();
  }, []);

  return (
    <div>
      <h2>Турнірна таблиця</h2>
      <table>
        <thead>
          <tr role="row">
            <th
              // class="data-rank sorting"
              tabIndex="0"
              aria-controls="DataTables_Table_0"
              rowSpan="1"
              colSpan="1"
              aria-label="№"
            >
              №
            </th>
            <th
              // class="data-name sorting"
              tabIndex="0"
              aria-controls="DataTables_Table_0"
              rowSpan="1"
              colSpan="1"
              aria-label="Команда"
            >
              Команда
            </th>
            <th
              // class="data-p sorting"
              tabIndex="0"
              aria-controls="DataTables_Table_0"
              rowSpan="1"
              colSpan="1"
              aria-label="И"
            >
              И
            </th>
            <th
              // class="data-w sorting"
              tabIndex="0"
              aria-controls="DataTables_Table_0"
              rowSpan="1"
              colSpan="1"
              aria-label="В"
            >
              В
            </th>
            <th
              // class="data-d sorting"
              tabIndex="0"
              aria-controls="DataTables_Table_0"
              rowSpan="1"
              colSpan="1"
              aria-label="Н"
            >
              Н
            </th>
            <th
              // class="data-l sorting"
              tabIndex="0"
              aria-controls="DataTables_Table_0"
              rowSpan="1"
              colSpan="1"
              aria-label="П"
            >
              П
            </th>
            <th
              // class="data-f sorting"
              tabIndex="0"
              aria-controls="DataTables_Table_0"
              rowSpan="1"
              colSpan="1"
              aria-label="З"
            >
              З
            </th>
            <th
              // class="data-a sorting"
              tabIndex="0"
              aria-controls="DataTables_Table_0"
              rowSpan="1"
              colSpan="1"
              aria-label="П"
            >
              П
            </th>
            <th
              // class="data-gd sorting"
              tabIndex="0"
              aria-controls="DataTables_Table_0"
              rowSpan="1"
              colSpan="1"
              aria-label="Р"
            >
              Р
            </th>
            <th
              // class="data-pts sorting"
              tabIndex="0"
              aria-controls="DataTables_Table_0"
              rowSpan="1"
              colSpan="1"
              aria-label="О"
            >
              О
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StandingTable;
