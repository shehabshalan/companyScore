import React from "react";
import { Grid, Container } from "@material-ui/core";
import CompanyGauge from "../CompanyGauge";
import CompanySummary from "../CompanySummary";

const CompanyReport = ({ companyData }: { companyData: any }) => {
  return (
    <Container>
      <Grid container direction="row" spacing={5} justify="space-between">
        <CompanySummary companyData={companyData} />
        <CompanyGauge companyData={companyData} />
      </Grid>
    </Container>
  );
};

export default CompanyReport;
