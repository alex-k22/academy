import { useEffect, useState } from 'react';
// import axios from 'axios';
// import cheerio from 'cheerio';


const StandingTable = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      console.log('useEffect called'); // Отладочная информация
  
      const fetchTable = async () => {
        try {
          const response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://dufldo.com.ua/cho-2012-r-n-vishha-liga-2023-2024-rr'));
          const data = await response.json();
          const html = data.contents;
      
          console.log('HTML:', html); // Отладочная информация
      
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
      
          const table = doc.querySelector('table'); // Используем более общий селектор
          console.log('Table:', table); // Отладочная информация
      
          if (!table) {
            console.error('Table not found');
            return;
          }
      
          const rows = table.querySelectorAll('tr');
          const tableData = Array.from(rows).map(row => {
            const cells = row.querySelectorAll('td');
            return Array.from(cells).map(cell => cell.textContent);
          });
      
          console.log('Table Data:', tableData); // Отладочная информация
          setData(tableData);
        } catch (error) {
          console.error('Error fetching table:', error);
        }
      };
      
  
      fetchTable();
    }, []);
  
    return (
      <table>
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
    );
  };
  
  export default StandingTable;