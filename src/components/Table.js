import React from "react";
import { Table } from "reactstrap";
const GenericTable = ({ data }) => {
  debugger;
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Bilgiler</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{item.text}</td>
              <td>{item.icon}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default GenericTable;
