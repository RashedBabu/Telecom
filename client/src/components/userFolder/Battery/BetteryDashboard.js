import React, { useState } from "react";
import AddBattery from "./AddBattery";
import AllBattery from "./AllBattery";

const BetteryDashboard = () => {
  return (
    <>
      <div className="container add-user">
        <div className="row table_m">
          <div className="col-md-8">
            <AllBattery />
          </div>
          <div className="col-md-4">
            <AddBattery />
          </div>
        </div>
      </div>
    </>
  );
};

export default BetteryDashboard;
