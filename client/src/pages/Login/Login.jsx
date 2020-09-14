import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { useMutation } from '@apollo/react-hooks';

import {
  Form,
  Input,
  Label,
  Button,
  FormWrapper,
} from 'assets/global/FormInput.styles';
import { LOGIN_USER } from 'graphql/mutations/auth';
import { schemaLogin } from 'utils/authValidation';
import ErrorToast from 'layout/ErrorToast/ErrorToast';

const Login = () => {
  const history = useHistory();
  const [regError, setRegError] = useState({});
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schemaLogin),
  });

  const [addUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, result) {
      history.push('/');
    },
    onError(error) {
      console.log(error.graphQLErrors[0].extensions.exception.errors);
      setRegError(error.graphQLErrors[0].extensions.exception.errors);
    },
  });

  const onSubmit = (data, e) => {
    addUser({ variables: data });
    e.target.reset();
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {Object.keys(regError).length > 0 && <ErrorToast errors={regError} />}
        <div className='mb-4'>
          <Label>Username</Label>
          <Input
            id='username'
            type='text'
            placeholder='Username'
            ref={register}
            name='username'
            hasError={errors.username ? true : false}
          />
          <p className='text-red-500 text-xs italic'>
            {errors.username?.message}
          </p>
        </div>
        <div className='mb-6'>
          <Label>Password</Label>
          <Input
            id='password'
            type='password'
            placeholder='******************'
            ref={register}
            name='password'
            hasError={errors.password ? true : false}
          />
          <p className='text-red-500 text-xs italic'>
            {errors.password?.message}
          </p>
        </div>
        <div className='flex items-center justify-between'>
          <Button type='submit'>SIGN IN</Button>
          <NavLink
            exact
            className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
            to='/register'
          >
            SIGN UP
          </NavLink>
        </div>
      </Form>
      <p className='text-center text-gray-500 text-xs'>
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </FormWrapper>
  );
};

export default Login;
