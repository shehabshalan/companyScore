import React from "react";
import GaugeChart from "react-gauge-chart";
import {
  Grid,
  Box,
  Typography,
  Paper,
  withStyles,
  makeStyles,
  Container,
  useMediaQuery,
} from "@material-ui/core";
import { calcualteScore } from "../../../UTILS/percentage";
import Skeleton from "@material-ui/lab/Skeleton";

const width = "100%";
const useStyles = makeStyles((theme) => ({
  paper: {
    height: 330,
    width: 540,
    textAlign: "left",

    color: "black",
  },
  main: {
    // backgroundColor: "black",
    display: "flex",
    alignItems: "center",
  },
  subMain: {
    // backgroundColor: "blue",

    marginTop: 20,
  },
}));
const CompanyGauge = ({ companyData }: { companyData: any }) => {
  const classes = useStyles();
  const chartStyle = {
    maxHeight: 243,
    maxWidth: 500,
  };

  return (
    <Grid item xs={12} md={5}>
      <Box className={classes.main}>
        <Paper className={classes.paper}>
          {companyData.percentage ? (
            <Box className={classes.subMain}>
              <GaugeChart
                id="gauge-chart5"
                style={chartStyle}
                textColor="black"
                animateDuration={8000}
                nrOfLevels={420}
                // arcsLength={[0.33, 0.38, 0.09, 0.2]}
                arcsLength={[0.25, 0.25, 0.25, 0.25]}
                colors={["#EA4228", "#FFA500", "#F5CD19", "#5BE12C"]}
                hideText
                // 0.125, 0.375, 0.675, 0.875
                percent={calcualteScore(companyData.percentage)}
                arcPadding={0.01}
              />

              <Typography
                variant="h5"
                align="center"
                style={{ fontWeight: "bolder", lineHeight: "100px" }}
              >
                Score
              </Typography>
            </Box>
          ) : (
            <Box className={classes.subMain}>
              <Skeleton width={500} height={243} />

              <Typography variant="h5" align="center">
                <Skeleton variant="text" />
              </Typography>
            </Box>
          )}
        </Paper>
      </Box>
    </Grid>
  );
};

export default CompanyGauge;
