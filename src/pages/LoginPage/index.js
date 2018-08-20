import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet'
import { Grid } from '@material-ui/core';
import { Container, RightSide, LeftSide, BoxContainer, Title, StyledProgressBar, ErrorMessage } from './elements';
import LoginForm from './LoginForm';
import Auth from '../../services/auth';


export default class LoginPage extends Component {
  state = {
    inputValues: {},
    loading: false,
    error: ''
  };

  onChangeInput = (inputName) => (e) => {
    const value = e.target.value;
    this.setState((prevState) => {
      let inputValues = {...prevState.inputValues};
      inputValues[inputName] = value;
      return {
        inputValues
      }
  })};

  onSubmit = () => {
    this.setState({
      loading: true
    }, async () => {
      const { email, password } = this.state.inputValues;
      console.log('email', password)
      const response = await Auth.login({ email: email, password: password });
      if (response.status !== 200) {
        this.setState({
          loading: false,
          error: response.error
        })
      } else {
        this.setState({
          loading: false,
          error: ''
        }, () => this.props.history.push('/'))
      }
      console.log(response);
    })
  }

  render () {
    const { loading } = this.state;
    return (
      <Fragment>
      <Helmet>
        <title>Applebees | Admin Authentication</title>
      </Helmet>
      <Container> 
        <BoxContainer item container justify="center" spacing={0} xs={7}>
          <Grid item xs={5}>
            <RightSide>
            {loading && <StyledProgressBar color="secondary" />}
            <Grid container direction="column">
              <Grid>
                <Title>Log in</Title>
              </Grid>
              <Grid style={{marginTop: 10}}>
                <LoginForm onSubmit={this.onSubmit} onChangeInput={this.onChangeInput} inputValues={this.state.inputValues} />
                {this.state.error &&
                    <ErrorMessage>{this.state.error}</ErrorMessage>
                 }
              </Grid>
            </Grid>
            </RightSide>
          </Grid>
          <Grid item xs={7}>
            <LeftSide />
          </Grid>
        </BoxContainer>
      </Container>
      </Fragment>
    )
  }
}
