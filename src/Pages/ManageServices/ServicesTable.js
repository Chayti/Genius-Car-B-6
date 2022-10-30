import React, { useState } from "react";
import ServiceInfoRow from "./ServiceInfoRow";

const ServicesTable = ({ services, setRefetch, setSorted, setLowRange, setUpRange }) => {

  return (
    // Used a table from daisyUI.
    // Table starting
    <div className=" my-10 overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th className="flex lg:block flex-col">
              Product
              <button
                className="mr-3 mb-3 lg:ml-3 lg:mb-0 btn btn-warning"
                onClick={() => setSorted(true)}
              >
                Sort by price
              </button>
              <input
                type="number"
                name="lowerLimit"
                placeholder="LowRange"
                className="input input-bordered mr-3"
                onBlur={(event) => setLowRange(event.target.value)}
              />
              <p className="text-center lg:inline"> to</p>
              <input
                type="number"
                name="upperLimit"
                placeholder="UpRange"
                className="input input-bordered lg:ml-3"
                onBlur={(event) => setUpRange(event.target.value)}
              />
            </th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* Show single item of cart by using map */}
          {services?.map((service) => (
            <ServiceInfoRow service={service} setRefetch={setRefetch} />
          ))}
        </tbody>
      </table>
    </div>
    // Table ends here
  );
};

export default ServicesTable;
