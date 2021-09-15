import React, { Component } from 'react';

import {
  Box,
  Container,
  Divider,
  Paper,
  Typography,
  Button,
} from '@material-ui/core';
import LoginForm, { LoginFromValues } from './LoginForm';

interface LoginProps {}

interface LoginState {}

export class Login extends Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.login = this.login.bind(this);
  }

  /**
   * Login
   * @param object event
   */
  async login(values: LoginFromValues) {
    console.log('Login', { values });
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <Paper>
          <Typography component="h1" variant="h4" textAlign="center">
            {'login.title'}
          </Typography>
          <LoginForm onSubmit={this.login} />
          <Box sx={{ marginY: 1 }}>
            <Divider />
          </Box>

          <Box sx={{ marginY: 1, textAlign: 'center' }}>
            <Box sx={{ marginY: 1, textAlign: 'center' }}>
              <Typography component="p" variant="body1">
                {'login.register_message'}
              </Typography>
              {/* <Link to="/signup"> */}
              <Button>{'login.register_link_title'}</Button>
              {/* </Link> */}
            </Box>
            <Box sx={{ marginY: 1, textAlign: 'center' }}>
              <Typography component="p" variant="body1">
                {'login.forgot_password_message'}
              </Typography>
              {/* <Link to="/forgotpassword"> */}
              <Button>{'login.forgot_password_link_title'}</Button>
              {/* </Link> */}
            </Box>
          </Box>
        </Paper>
      </Container>
    );
  }
}
export default Login;
