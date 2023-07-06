import React from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import loginUserRequest from './api/loginUserRequest';
import { ILoginUser } from './types';
import { AppDispatch } from '../../store/store';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginUser>();
  const dispatch: AppDispatch = useDispatch();
  const onSubmit: SubmitHandler<ILoginUser> = (data: ILoginUser): void => {
    loginUserRequest(dispatch, data);
    console.log('data', data);
  };
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="username"
        type="text"
        {...register('username', { maxLength: 80, required: true })}
      />
      {/*<input*/}
      {/*  placeholder="Last name"*/}
      {/*  type="text"*/}
      {/*  {...register('Last name', { maxLength: 100, required: true })}*/}
      {/*/>*/}
      {/*<input*/}
      {/*  placeholder="Email"*/}
      {/*  type="text"*/}
      {/*  {...register('Email', { pattern: /^\S+@\S+$/i, required: true })}*/}
      {/*/>*/}
      <input
        placeholder="password"
        type="password"
        {...register('password', { maxLength: 12, minLength: 5, required: true })}
      />

      <input type="submit" />
    </form>
  );
};

export default LoginForm;
