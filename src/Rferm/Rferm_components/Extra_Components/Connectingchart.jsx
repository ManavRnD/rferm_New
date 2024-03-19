import React, { useState, useEffect } from "react";

const OriginalDataTable = [
  { date: '01/01/2024',  value: '2'},
  { date: '01/02/2024',  value: '5' },
  { date: '01/03/2024',  value: '6'},
  { date: '01/04/2024',  value: "2"},
  { date: '01/05/2024',  value: '4' },
  { date: '01/06/2024',  value: '9' },
  { date: '01/07/2024',  value: 2},
  { date: '08/08/2024',  value: '9' },
  { date: '09/09/2024',  value: '5'},
  { date: '10/10/2024',  value: '4' },
  { date: '01/11/2024',  value: 2 },
  { Date: '01/12/2024',  value: '6' },
  { Date: '01/13/2024',  value: '5'},
  { Date: '01/14/2024',  value: '10' },
  { Date: '01/15/2024',  value:'4.5' },
  { Date: '01/16/2024',  value: '4.5'},
];

const transformData = (originalData) => {
  const transformedData = [];
  let index = 0;
  
  originalData.forEach((entry) => {
    const date = entry.date;
    let obj = { name: date };

    for (const key in entry) {
      if (key !== 'date') {
        obj[key] = isNaN(parseFloat(entry[key])) ? 0 : parseFloat(entry[key]);
      }
    }

    transformedData[index] = obj;
    index++;
  });

  return transformedData;
};

const TransformedDataTable = transformData(OriginalDataTable);

const Connectingchart = () => {
  return (
    <div>
      <h1>Transformed Data Table</h1>
      <ul>
        {TransformedDataTable.map((item, index) => (
          <li key={index}>
            <strong>Date:</strong> {item.name}
            {Object.entries(item).map(([key, value]) => (
              key !== 'name' && <div key={key}><strong>{key}:</strong> {value}</div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Connectingchart;

