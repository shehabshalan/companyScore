import { Grid, Box, Typography, Container, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import Divider from "@material-ui/core/Divider";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CompareArrowsOutlined } from "@material-ui/icons";
import Skeleton from "@material-ui/lab/Skeleton";
import BusinessIcon from "@material-ui/icons/Business";
const useStyles = makeStyles({
  companyFooter: {
    backgroundColor: "#9bbdba",
    color: "#ffffff",
    minHeight: 500,
    marginTop: 60,
    alignSelf: "stretch",
  },
  skeletonParent: {
    marginTop: 20,
  },
  skeletonChild: {
    marginTop: 20,
    marginBottom: 20,
    maxWidth: 300,
  },
});

const CompanyTeam = ({ companyInfo }: { companyInfo: any }) => {
  // const [companyDirectors, setDirectors] = useState<any>([]);
  // const [companyInfo, setCompany] = useState<any>(company);
  const companyDirectors = companyInfo.directors;
  const companyPSCS = companyInfo.pscs;
  const companySics = companyInfo.sics;
  const classes = useStyles();
  return (
    <Box className={classes.companyFooter}>
      <Container maxWidth={"lg"} disableGutters>
        <Grid container direction="row" spacing={3}>
          <Grid
            style={{ marginTop: 20 }}
            container
            item
            spacing={10}
            justify="space-between"
            alignItems="flex-start"
          >
            <Grid item xs={12} lg={4}>
              <Box
                fontWeight="fontWeightBold"
                textAlign="center"
                style={{ marginBottom: 25 }}
              >
                <Typography variant={"h5"}>Nature of Business</Typography>
              </Box>
              <Container>
                <Grid
                  container
                  direction="column"
                  item
                  spacing={3}
                  justify="space-between"
                >
                  {companySics ? (
                    companySics.map((business: any) => {
                      return (
                        <Grid item xs={12} lg={12}>
                          <Card>
                            <CardContent>
                              <Box>
                                <Typography variant="body2">
                                  <span style={{ fontWeight: "bolder" }}>
                                    Code
                                  </span>{" "}
                                  <span>{business.code}</span>
                                  {/* <span>{director.name}</span> */}
                                </Typography>
                              </Box>
                              <Box style={{ marginBottom: 10, marginTop: 10 }}>
                                <Typography variant="body2">
                                  <span style={{ fontWeight: "bolder" }}>
                                    Section
                                  </span>{" "}
                                  <span>{business.section}</span>
                                </Typography>
                              </Box>
                              <Box>
                                <Typography variant="body2">
                                  <span style={{ fontWeight: "bolder" }}>
                                    Line of Business
                                  </span>{" "}
                                  <span>{business.lineOfBusiness}</span>
                                </Typography>
                              </Box>
                            </CardContent>
                          </Card>
                        </Grid>
                      );
                    })
                  ) : (
                    <Grid item xs={12} lg={12}>
                      <Skeleton variant="rect" width={300} height={120} />
                    </Grid>
                  )}
                </Grid>
              </Container>
            </Grid>

            <Grid item xs={12} lg={4}>
              <Box fontWeight="fontWeightBold" textAlign="center">
                <Typography variant={"h5"}>Directors</Typography>
              </Box>
              <Container>
                <Grid container direction="column" item spacing={2}>
                  {companyDirectors ? (
                    companyDirectors.map((director: any) => {
                      return (
                        <Grid item xs={12} sm={6} lg={12}>
                          <List>
                            <ListItem>
                              <ListItemAvatar>
                                <Avatar>
                                  <AccountCircleRoundedIcon />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                primary={director.name}
                                secondary={director.countryOfResidence}
                              />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                          </List>
                        </Grid>
                      );
                    })
                  ) : (
                    <Grid item xs={12} sm={6} lg={12}>
                      <Box className={classes.skeletonParent}>
                        <Box className={classes.skeletonChild}>
                          <Skeleton variant="circle" width={40} height={40} />
                          <Skeleton variant="text" />
                        </Box>
                        <Box className={classes.skeletonChild}>
                          <Skeleton variant="circle" width={40} height={40} />
                          <Skeleton variant="text" />
                        </Box>
                      </Box>
                    </Grid>
                  )}
                </Grid>
              </Container>
            </Grid>

            <Grid item xs={12} lg={4}>
              <Box fontWeight="fontWeightBold" textAlign="center">
                <Typography variant={"h5"}>
                  Persons with Significant Control
                </Typography>
              </Box>
              <Container>
                <Grid container direction="column" item spacing={2}>
                  {companyPSCS ? (
                    companyPSCS.map((pscs: any) => {
                      return (
                        <Grid item xs={12} sm={6} lg={12}>
                          <List>
                            <ListItem>
                              <ListItemAvatar>
                                <Avatar>
                                  <AccountCircleRoundedIcon />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                primary={pscs.name}
                                secondary={pscs.countryOfResidence}
                              />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                          </List>
                        </Grid>
                      );
                    })
                  ) : (
                    <Grid item xs={12} sm={6} lg={12}>
                      <Box className={classes.skeletonParent}>
                        <Box className={classes.skeletonChild}>
                          <Skeleton variant="circle" width={40} height={40} />
                          <Skeleton variant="text" />
                        </Box>
                        <Box className={classes.skeletonChild}>
                          <Skeleton variant="circle" width={40} height={40} />
                          <Skeleton variant="text" />
                        </Box>
                      </Box>
                    </Grid>
                  )}
                </Grid>
              </Container>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Box
          style={{
            padding: 10,
            marginTop: 50,
          }}
        >
          <Typography
            variant="body1"
            style={{
              fontSize: 13,
              fontWeight: "lighter",
            }}
          >
            * {companyInfo.disclaimer}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default CompanyTeam;
