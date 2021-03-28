import React from "react";
import CompanyReport from "./components/CompanyReport";
import CompanyInfo from "./components/CompanyInfo";
import CompanyTeam from "./components/CompanyTeam";
import CompanyTest from "./components/CompanyTest";
import { useState, useEffect } from "react";
import axios from "axios";
const CompanyScore = () => {
  // const [companyInfo, setCompanyInfo] = useState([]);
  const [companyData, setCompanyData] = useState([]);

  // // 08037323
  // // 03280532
  // // 04484767
  // const App = () => {
  //   let [chars, setChars] = useState([]);
  //   useEffect(async () => {
  //     try{
  //       let response = await axios.get(`https://swapi.co/api/people/`)
  //       let data = await response.json();
  //       setChars(data);
  //     } catch(error) {
  //        console.error(error.message);
  //     }
  //   },[]);
  useEffect(() => {
    (async () => {
      axios
        .get("http://localhost:5106/api/Report/basic/08037323")
        .then((resp) => {
          const company = resp.data;
          setCompanyData(company);
          // console.log(company);
        });
    })();
    // fetchData();
  }, []);

  // const fetchData = () => {
  //   const url = "http://localhost:5106/api/Report/basic/08037323";
  //   fetch(url)
  //     .then((response) => setCompanyData(response.json()))
  //     .catch((error) => console.log(error));
  // };

  // const getInfo = async () => {
  //   const res = await fetch("http://localhost:5106/api/Report/basic/08037323");
  //   const data = await res.json();
  //   setCompanyInfo(data);
  //   console.log(data);
  // };
  // console.log(companyInfo);
  return (
    <div>
      <CompanyInfo companyInfo={companyData} />
      <CompanyReport companyInfo={companyData} />
      {/* <CompanyTest companyInfo={companyData} /> */}
      <CompanyTeam companyInfo={companyData} />
    </div>
  );
};

export default CompanyScore;
