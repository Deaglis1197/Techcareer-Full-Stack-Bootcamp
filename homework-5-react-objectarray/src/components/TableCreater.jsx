import React from "react";
import { suppliers } from "../repo/SuppliersRepo";

function TableCreater() {
  return (
    <>
      <table className="w3-table w3-striped">
        <thead className="w3-green">
          <tr>
            <td>Company Name</td>
            <td>Contact Name</td>
            <td>Contact Title</td>
            <td>Address</td>
          </tr>
        </thead>
        <tbody>
          {suppliers &&
            suppliers.map((item) => {
              return (
                <tr tr class="w3-hover-text-green">
                  <td>{item.companyName}</td>
                  <td>{item.contactName}</td>
                  <td>{item.contactTitle}</td>
                  <td>
                    {item.address.street +
                      " - " +
                      item.address.city +
                      "/" +
                      item.address.country}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default TableCreater;
