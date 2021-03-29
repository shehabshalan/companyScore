import React from "react";
import {
  Grid,
  Box,
  Typography,
  Paper,
  withStyles,
  makeStyles,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

const MainTypography = withStyles({
  root: {
    color: "#26A69A",
  },
})(Typography);
const TextTypography = withStyles({
  root: {
    fontSize: 18.8,
  },
})(Typography);
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    minHeight: 280,
    textAlign: "left",
    color: "black",
  },
  summaryFont: {
    color: "#26A69A",
    fontWeight: "bold",
  },
}));
const CompanySummary = ({ companyData }: { companyData: any }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={7}>
      <Paper className={classes.paper}>
        {companyData.summary ? (
          <Box>
            <Typography className={classes.summaryFont} variant="h5">
              Summary
            </Typography>

            <br></br>
            <TextTypography align="justify">
              {companyData.summary}
            </TextTypography>
          </Box>
        ) : (
          <Box>
            <Typography className={classes.summaryFont} variant="h5">
              <Skeleton variant="rect" width={100} />
            </Typography>

            <br></br>
            <TextTypography align="justify">
              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
            </TextTypography>
          </Box>
        )}
      </Paper>
    </Grid>
  );
};

export default CompanySummary;
