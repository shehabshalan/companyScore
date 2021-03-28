import React from "react";
import {
  Grid,
  Box,
  Typography,
  Paper,
  withStyles,
  makeStyles,
} from "@material-ui/core";

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
}));
const CompanySummary = ({ companyInfo }: { companyInfo: any }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={7}>
      <Paper className={classes.paper}>
        <MainTypography variant="h5">
          <Box fontWeight="fontWeightBold">Summary</Box>
        </MainTypography>
        <br></br>
        <TextTypography align="justify">{companyInfo.summary}</TextTypography>
      </Paper>
    </Grid>
  );
};

export default CompanySummary;
