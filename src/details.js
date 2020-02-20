import React from "react";

const details = ({ isShowing, details }) => {
  if (!isShowing) {
    return null;
  }
  if (isShowing && details !== null) {
    return (
      <table>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
        {details.map(({ name, description }, index) => {
          return (
            <tr key={index}>
              <td>{name}</td>
              <td>{description}</td>
            </tr>
          );
        })}
      </table>
    );
  }
};

export default details;
