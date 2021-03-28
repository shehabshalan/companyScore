import React from "react";
import { Grid, Container } from "@material-ui/core";
import CompanyGauge from "../CompanyGauge";
import CompanySummary from "../CompanySummary";

const CompanyReport = ({ companyInfo }: { companyInfo: any }) => {
  return (
    <Container>
      <Grid container direction="row" spacing={5} justify="space-between">
        <CompanySummary companyInfo={companyInfo} />
        <CompanyGauge companyInfo={companyInfo} />
      </Grid>
    </Container>
  );
};

export default CompanyReport;
