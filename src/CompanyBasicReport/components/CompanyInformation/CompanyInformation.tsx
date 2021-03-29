import React from "react";
import ReactCountryFlag from "react-country-flag";
import BusinessIcon from "@material-ui/icons/Business";
import PublicIcon from "@material-ui/icons/Public";
import { Grid, Box, Typography, Container } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DateRangeIcon from "@material-ui/icons/DateRange";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Skeleton from "@material-ui/lab/Skeleton";
// import CompanyTeam from "../CompanyTeam";
const maxWidth = "35%";
const top = "6%";

const useStyles = makeStyles({
  companyCard: {
    backgroundColor: "#104641",
    color: "#ffffff",
    minHeight: 350,
    marginBottom: 60,
    paddingTop: 40,
    paddingBottom: 40,
    fontWeight: "bold",
  },
  companyName: {
    fontWeight: "bold",
  },
  companyType: {
    fontWeight: "bold",
  },
  flag: {
    marginBottom: 5,
  },
  companyStatusActive: {
    paddingRight: 25,
    paddingLeft: 25,
    height: 30,
    borderRadius: 5,
    backgroundColor: "#7fa6a3",
    color: "#ffffff",
  },
  companyStatusDis: {
    paddingRight: 25,
    paddingLeft: 25,
    height: 30,
    borderRadius: 5,
    backgroundColor: "#854b44",
    color: "#ffffff",
  },
  // companyData: {
  //   position: "relative",
  //   // left: left,
  //   top: top,
  //   maxWidth: maxWidth,
  //   paddingTop: 40,
  //   paddingBottom: 40,
  // },
  companyTypeStatus: {
    maxWidth: maxWidth,
    marginTop: 20,
  },
});
const CompanyInformation = ({ companyData }: { companyData: any }) => {
  console.log("yo");
  // console.log(companyData);
  const classes = useStyles();
  return (
    <Box className={classes.companyCard}>
      <Container>
        {/* COMPANY NAME --START */}
        <Box>
          {companyData.companyName ? (
            <Typography
              className={classes.companyName}
              variant="h2"
              component="h1"
            >
              {companyData.companyName}
            </Typography>
          ) : (
            <Typography variant="h2">
              <Skeleton animation="wave" />
            </Typography>
          )}
        </Box>

        {/* COMPANY NAME --END */}

        {/* COMPANY TYPE AND STATUS --START */}
        <Box className={classes.companyTypeStatus}>
          <Grid container direction="row" justify="space-between">
            {companyData.type ? (
              <Grid item>
                <Typography className={classes.companyType} variant="h6">
                  {companyData.type && `${companyData.type.toUpperCase()}`}
                </Typography>
              </Grid>
            ) : (
              <Grid item>
                <Typography variant="h6">
                  <Skeleton animation="wave" width={60} height={20} />
                </Typography>
              </Grid>
            )}
            {companyData.status ? (
              <Grid
                item
                className={
                  companyData.status === "Active"
                    ? classes.companyStatusActive
                    : classes.companyStatusDis
                }
              >
                <Typography
                  style={{ fontWeight: "bolder", lineHeight: "30px" }}
                >
                  {companyData.status}
                </Typography>
              </Grid>
            ) : (
              <Grid item>
                <Typography
                  style={{ fontWeight: "bolder", lineHeight: "30px" }}
                >
                  <Skeleton animation="wave" width={60} height={20} />
                </Typography>
              </Grid>
            )}
          </Grid>
        </Box>

        {/* COMPANY TYPE AND STATUS --END */}

        <Box style={{ marginTop: "30px", maxWidth: "60%" }}>
          <Grid container direction="row" justify="space-between" spacing={1}>
            {/* COMPANY INFORMATION --START */}
            <Grid item container direction="column" xs={12} md={6} spacing={2}>
              {companyData.companyNumber ? (
                <Grid item container direction="row" spacing={1}>
                  {" "}
                  <Grid item>
                    {" "}
                    <BusinessIcon />
                  </Grid>
                  <Grid item>{companyData.companyNumber}</Grid>
                </Grid>
              ) : (
                <Grid item container direction="row" spacing={1}>
                  {" "}
                  <Grid item>
                    {" "}
                    <Skeleton
                      animation="wave"
                      variant="text"
                      width={60}
                      height={20}
                    />
                  </Grid>
                </Grid>
              )}
              {companyData.registeredOfficeAddress ? (
                <Grid item container direction="row" spacing={1}>
                  {" "}
                  <Grid item>
                    {" "}
                    <LocationOnIcon />
                  </Grid>
                  <Grid
                    item
                  >{`${companyData.registeredOfficeAddress}, ${companyData.postalCode} `}</Grid>
                </Grid>
              ) : (
                <Grid item container direction="row" spacing={1}>
                  {" "}
                  <Grid item>
                    <Skeleton
                      animation="wave"
                      variant="text"
                      width={60}
                      height={20}
                    />
                  </Grid>
                </Grid>
              )}
              {/* {companyData.registeredIn ? () : ()} */}
              {companyData.registeredIn ? (
                <Grid item container direction="row" spacing={1}>
                  {" "}
                  <Grid item>
                    {" "}
                    <ReactCountryFlag
                      countryCode={companyData.registeredIn}
                      svg
                      style={{
                        width: "1.5em",
                        height: "1.5em",
                      }}
                      title={companyData.registeredIn}
                    />
                  </Grid>
                  <Grid item>
                    <Typography
                      style={{ fontWeight: "bolder", fontSize: "18px" }}
                    >
                      {companyData.registeredIn}
                    </Typography>
                  </Grid>
                </Grid>
              ) : (
                <Grid item>
                  <Typography
                    style={{ fontWeight: "bolder", fontSize: "20px" }}
                  >
                    N/A
                  </Typography>
                </Grid>
              )}
              {companyData.incorporatedOn ? (
                <Grid item container direction="row" spacing={1}>
                  {" "}
                  <Grid item>
                    {" "}
                    <DateRangeIcon />
                  </Grid>
                  <Grid item>{companyData.incorporatedOn}</Grid>
                </Grid>
              ) : (
                <Skeleton
                  animation="wave"
                  variant="text"
                  width={60}
                  height={20}
                />
              )}
            </Grid>
            {/* COMPANY INFORMATION --END */}

            {/* COMPANY HAS --START */}
            <Grid
              item
              container
              direction="column"
              justify="space-between"
              spacing={4}
              xs={12}
              md={6}
            >
              <Grid item>{`${
                companyData.hasInsolvencyHistory === true
                  ? "Has Insolvency History: YES"
                  : "Has Insolvency History: N/A"
              } `}</Grid>
              <Grid item>{`${
                companyData.hasCharges === true
                  ? "Has Charges: YES"
                  : "Has Charges: N/A"
              } `}</Grid>
              <Grid item>{`${
                companyData.hasBeenLiquidated === true
                  ? "Has Been Liquidated: YES"
                  : "Has Been Liquidated: N/A"
              } `}</Grid>
            </Grid>
            {/* COMPANY HAS --END */}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default CompanyInformation;
