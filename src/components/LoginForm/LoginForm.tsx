import React, { useEffect } from 'react';

import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { useAppDispatch } from 'hooks';
import { useGetAllUsersQuery } from 'services/usersServices';

import { ILoginUser, IToken } from '../../interface';
import { useLoginUserMutation } from '../../services/authServices';
import { setLoginUser } from '../../store/authSlice';
import { setCurrentUser } from '../../store/userSlice';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginUser>();
  const dispatch = useAppDispatch();
  const { data } = useGetAllUsersQuery();
  const [requestLoginUser, { isLoading, isError }] = useLoginUserMutation();

  const onSubmit: SubmitHandler<ILoginUser> = async (value: ILoginUser) => {
    const user = data?.find((el) => el.username === value.username);
    try {
      const response: {
        data?: IToken;
        error?: FetchBaseQueryError | SerializedError;
      } = await requestLoginUser({
        password: value.password,
        username: value.username,
      });

      if (user && response.data?.token) {
        dispatch(
          setLoginUser({ auth: true, token: response.data.token, username: value.username })
        );
        dispatch(setCurrentUser(user));
      }
    } catch {
      toast.error(`'Username or password incorrect'`);
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error('Username or password incorrect');
    }
  }, [isError]);

  return (
    <>
      {isLoading ? (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-y-4 border-blue-500" />
        </div>
      ) : null}
      <div
        className={`rounded-lg border-2 border-gray-300 bg-gray-200 p-4 ${
          isLoading ? 'opacity-20' : ''
        }`}
      >
        <h1>Login</h1>
        <div className="flex justify-between">
          <form data-testid={'form'} onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="pr-4 text-base font-normal" htmlFor="username">
                User Name
              </label>
              <input
                placeholder="username"
                type="text"
                {...register('username', { maxLength: 80, required: true })}
                className="rounded-lg border-2 border-gray-300 bg-gray-200 pl-2"
              />
              {errors.password && <p className="text-xs">This field has min length max 80.</p>}
            </div>
            <div className="pt-3">
              <label className="pr-7 text-base font-normal" htmlFor="password">
                Password
              </label>
              <input
                placeholder="password"
                type="password"
                {...register('password', { maxLength: 12, minLength: 5, required: true })}
                className="rounded-lg border-2 border-gray-300 bg-gray-200 pl-2"
              />
              {errors.password && (
                <p className="text-xs">This field has min length 5 and max 12.</p>
              )}
            </div>
            <input data-testid={'submit'} type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
