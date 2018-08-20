import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet'
import { Grid } from '@material-ui/core';
import { Container, Main, BoxContainer } from './elements';
import SideMenu from '../../components/SideMenu';
import InnerRouter from '../../routers/InnerRouter';
import CustomProgressBar from '../../components/CustomProgressBar';


export default class Dashboard extends Component {
  state = {
    loading: false
  };

  setLoading = (isLoading) => this.setState({ loading: isLoading });

  render () {
    const { loading } = this.state;
    return (
      <Fragment>
      <Helmet>
        <title>Applebees | Admin Authentication</title>
      </Helmet>
      <Container> 
        <Grid item xs={10}>
          <BoxContainer>
            <Grid container justify="center" spacing={0} style={{height: '90vh'}}>
              <Grid item xs={3}>
                <SideMenu />
              </Grid>
              <Grid item xs={9}>
                <Main>
                  {loading && <CustomProgressBar />}
                  <InnerRouter setLoading={this.setLoading} loading={loading} />
                </Main>
              </Grid>
            </Grid>
          </BoxContainer>
        </Grid>
      </Container>
      </Fragment>
    )
  }
}
