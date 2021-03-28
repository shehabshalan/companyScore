import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import BusinessIcon from "@material-ui/icons/Business";
import PublicIcon from "@material-ui/icons/Public";
import { Grid, Box, Typography, Container } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DateRangeIcon from "@material-ui/icons/DateRange";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
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
  companyInfo: {
    position: "relative",
    // left: left,
    top: top,
    maxWidth: maxWidth,
    paddingTop: 40,
    paddingBottom: 40,
  },
  companyTypeStatus: {
    maxWidth: maxWidth,
    marginTop: 20,
  },
});

const CompanyTest = ({ companyInfo }: { companyInfo: any }) => {
  const classes = useStyles();
  return (
    <Box className={classes.companyCard}>
      <Container>
        <Box className={classes.companyInfo}>
          <Typography variant="h2">
            <Box fontWeight="fontWeightBold">{companyInfo.companyName}</Box>
          </Typography>
          <br></br>
          <Grid container direction="row" justify="space-between">
            <Grid item>
              <Typography>
                <Box fontWeight="fontWeightLight">Private Limited Company</Box>
              </Typography>
            </Grid>
            <Grid
              item
              className={
                companyInfo.status === "Active"
                  ? classes.companyStatusActive
                  : classes.companyStatusDis
              }
            >
              <Typography>
                <Box style={{ lineHeight: "30px" }} fontWeight="fontWeightBold">
                  {companyInfo.status}
                </Box>
              </Typography>
            </Grid>
          </Grid>
          <br></br>

          <Grid container direction="row" justify="space-between">
            <Grid item>
              <Typography>
                <Box fontWeight="fontWeightLight">
                  <Grid container direction="row" spacing={1}>
                    <Grid item>
                      <BusinessIcon />
                    </Grid>
                    <Grid item>{companyInfo.companyNumber}</Grid>
                  </Grid>
                </Box>
              </Typography>
            </Grid>

            <Grid item>{`${
              companyInfo.hasInsolvencyHistory === false
                ? "Has Insolvency History: YES"
                : ""
            } `}</Grid>
          </Grid>
          <Grid container direction="row" justify="space-between">
            <Grid item>
              <Typography>
                <Box fontWeight="fontWeightLight">
                  <Grid container direction="row" spacing={1}>
                    <Grid item>
                      <LocationOnIcon />
                    </Grid>
                    <Grid
                      item
                    >{`${companyInfo.registeredOfficeAddress}, ${companyInfo.postalCode} `}</Grid>
                  </Grid>
                </Box>
              </Typography>
            </Grid>

            <Grid item>{`${
              companyInfo.hasCharges === true ? "Has Charges: YES" : ""
            } `}</Grid>
          </Grid>
          <Grid container direction="row" justify="space-between">
            <Grid item>
              <Typography>
                <Box fontWeight="fontWeightLight">
                  <Grid container direction="row" spacing={1}>
                    <Grid item>
                      {companyInfo.registeredIn === "UK" ? (
                        <ReactCountryFlag
                          className={classes.flag}
                          countryCode="GB"
                          svg
                          style={{
                            width: "1.5em",
                            height: "1.5em",
                          }}
                          title="GB"
                        />
                      ) : (
                        <ReactCountryFlag
                          countryCode={companyInfo.registeredIn}
                          svg
                          style={{
                            width: "1.5em",
                            height: "1.5em",
                          }}
                          title={companyInfo.registeredIn}
                        />
                      )}
                    </Grid>
                    <Grid item>
                      {companyInfo.registeredIn ? (
                        <Typography>
                          <Box fontWeight="fontWeightBold">
                            {companyInfo.registeredIn}
                          </Box>
                        </Typography>
                      ) : (
                        <Typography>
                          <Box fontWeight="fontWeightBold">N/A</Box>
                        </Typography>
                      )}
                    </Grid>
                  </Grid>
                </Box>
              </Typography>
            </Grid>

            <Grid item>{`${
              companyInfo.hasBeenLiquidated === false
                ? "Has Been Liquidated: YES"
                : ""
            } `}</Grid>
          </Grid>
          <Grid container direction="row" justify="space-between">
            <Grid item>
              <Typography>
                <Box fontWeight="fontWeightLight">
                  <Grid container direction="row" spacing={1}>
                    <Grid item>
                      <DateRangeIcon />
                    </Grid>
                    <Grid item>{companyInfo.incorporatedOn}</Grid>
                  </Grid>
                </Box>
              </Typography>
            </Grid>
          </Grid>
          {/* <Grid
                    container
                    style={{ lineHeight: '30px' }}
                    direction="column"
                    justify="space-around"
                >
                    <Grid container direction="row" spacing={2} >
                        <Grid item>
                            <BusinessIcon />
                        </Grid>
                        <Grid item >
                            <Typography>
                                <Box fontWeight="fontWeightLight">
                                    {companyInfo.companyNumber}

                                </Box>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" spacing={2}>
                        <Grid item>
                            <LocationOnIcon />
                        </Grid>
                        <Grid item>
                            <Typography>
                                <Box fontWeight="fontWeightLight">
                                    {companyInfo.postalCode}

                                </Box>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" spacing={2}>
                        <Grid item>
                            <PublicIcon />
                        </Grid>
                        <Grid item>
                            {companyInfo.registeredIn ? (
                                <Typography>
                                    <Box fontWeight="fontWeightBold">

                                        {companyInfo.registeredIn}
                                    </Box>
                                </Typography>
                            ) : (
                                <Typography>
                                    <Box fontWeight="fontWeightBold">
                                        N/A
                        </Box>
                                </Typography>
                            )}
                        </Grid>
                    </Grid>
                </Grid> */}
        </Box>
      </Container>
    </Box>
  );
};

export default CompanyTest;
