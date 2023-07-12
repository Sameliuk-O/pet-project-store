import React from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';

import { useAppDispatch } from 'hooks';

import { ILoginUser } from '../../interface';
import { useGetAllUserQuery } from '../../services/GetAllUser';
import { useLoginUserMutation } from '../../services/LoginServices';
import { setLoginUser } from '../../store/loginSlice';
import { setCurrentUser } from '../../store/userSlice';

const LoginForm = () => {
  const { register, handleSubmit } = useForm<ILoginUser>();
  const dispatch = useAppDispatch();
  const { data } = useGetAllUserQuery();
  const [requestLoginUser, { error }] = useLoginUserMutation();

  const onSubmit: SubmitHandler<ILoginUser> = (value: ILoginUser) => {
    const user = data?.find((el) => el.username === value.username);
    try {
      requestLoginUser({ password: value.password, username: value.username })
        .unwrap()
        .then((res) => {
          dispatch(setLoginUser({ auth: true, token: res.token, username: value.username }));
          user != undefined ? dispatch(setCurrentUser(user)) : console.log(error);
        });
    } catch {
      console.log(error);
    }
  };

  return (
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
        </div>
        <div className="flex justify-between">
          <label className="pr-4 text-base font-normal" htmlFor="password">
            Password
          </label>
          <input
            placeholder="password"
            type="password"
            {...register('password', { maxLength: 12, minLength: 5, required: true })}
            className="rounded-lg border-2 border-gray-300 bg-gray-200 pl-2"
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default LoginForm;
