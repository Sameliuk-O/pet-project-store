import React from 'react';

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
import { Loading } from '../Loading';

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginUser>();
  const dispatch = useAppDispatch();
  const { data } = useGetAllUsersQuery();
  const [requestLoginUser, { isLoading, error }] = useLoginUserMutation();

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
      } else {
        toast.error(`${error || 'Username or password incorrect'}`, {
          autoClose: 5000,
          closeOnClick: true,
          draggable: true,
          hideProgressBar: false,
          pauseOnHover: true,
          position: 'bottom-right',
          progress: undefined,
          theme: 'light',
        });
      }
    } catch {
      toast.error(`${error}`, {
        autoClose: 5000,
        closeOnClick: true,
        draggable: true,
        hideProgressBar: false,
        pauseOnHover: true,
        position: 'bottom-right',
        progress: undefined,
        theme: 'light',
      });
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="rounded-lg border-2 border-gray-300 bg-gray-200 p-4">
          <h1>Login</h1>
          <div className="flex justify-between">
            <form onSubmit={handleSubmit(onSubmit)}>
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
              <input type="submit" />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginForm;
