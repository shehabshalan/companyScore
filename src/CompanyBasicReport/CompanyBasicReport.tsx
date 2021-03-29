import React from "react";
import CompanyReport from "./components/CompanyReport";
import CompanyInformation from "./components/CompanyInformation";
import CompanyTeam from "./components/CompanyTeam";
import { useState, useEffect } from "react";
// import axios from "axios";
const CompanyBasicReport = () => {
  const [companyData, setCompanyData] = useState([]);

  // // 08037323
  // // 03280532
  // // 04484767

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch(
        "http://localhost:5106/api/Report/basic/08037323"
      );
      const data = await res.json();
      setCompanyData(data);
    }, 3000);
  });
  console.log(companyData);

  return (
    <div>
      {/* BANNER SECTION WHICH HOLDS COMPANY INFORMATION */}
      <CompanyInformation companyData={companyData} />
      {/* MIDDLE SECTION WHICH HOLDS SUMMARY AND REPORT */}
      <CompanyReport companyData={companyData} />
      {/* BUTTOM SECTION WHICH HOLDS LINES OF BUSINESS, DIRECTORS AND PERSONS WITH SIGNIFICANT CONTROL */}
      <CompanyTeam companyData={companyData} />
    </div>
  );
};

export default CompanyBasicReport;
