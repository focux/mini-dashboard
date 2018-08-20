import React from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import Icon from '@material-ui/icons/TrendingFlat';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import { StyledForm } from './elements';
import CustomField from '../../../components/Fields/CustomField';

const LoginForm = ({ onChangeInput, inputValues, onSubmit }) => (
  <StyledForm>
  <Grid container direction="column" spacing={24}>
    <Grid item xs={12}>
      <CustomField
        icon={<AccountCircle />}
        id="email"
        label="E-mail"
        onChange={onChangeInput('email')}
        value={inputValues.email || ''}
        type="email"
      />
    </Grid>
    <Grid item xs={12}>
      <CustomField
        icon={<Lock />}
        id="password"
        label="Password"
        onChange={onChangeInput('password')}
        value={inputValues.password || ''}
        type="password"
      />
    </Grid>
    <Grid item container justify="center" xs={12}>
      <Button variant="contained" color="primary" onClick={onSubmit}>
        Iniciar sesion
        <Icon>Iniciar sesion</Icon>
      </Button>
    </Grid>
  </Grid>
</StyledForm>
);

export default LoginForm;