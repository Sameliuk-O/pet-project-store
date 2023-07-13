import { LoginForm } from 'components/LoginForm';

const LoginPage = () => {
  return (
    <div className="flex h-full min-h-screen  items-center  justify-center">
      <div className="rounded-lg border-2 border-gray-300 bg-gray-200 p-4">
        <h1>Login</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
