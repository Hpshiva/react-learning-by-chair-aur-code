import React from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

function User() {
  const [salary, setSalary] = useState(0);
  const user = {
    name: "Chai-aur-code",
    baseSalary: 60001,
    tax: 5000,
    bonus: 10000,
    homeAllowance: 15000,
    fuelAllowance: 5000,
  };

      const grossSalary = useMemo(
        () =>
          user.baseSalary +
          user.bonus +
          user.homeAllowance +
          user.fuelAllowance -
          user.tax,
        [user],
      );
   

  return (
    <div className="p-[10rem]">
      <p className="text-4xl">{`${user.name} has gross salary ${grossSalary}`}</p>
    </div>
  );
}

export default User;
