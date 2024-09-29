import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';
import { useImmer } from 'use-immer';

const Login = () => {
  const [inputs, setInputs] = useImmer({
    uName: '',
    pswd: '',
  });
  const { isLoading, login } = useLogin();

  const handleChange: React.ChangeEventHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setInputs((inp) => {
      inp[e.target.name] = e.target.value;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(inputs);
  };

  return (
    <div className="mx-auto flex min-w-96 flex-col items-center justify-center">
      <div className="w-full rounded-lg bg-gray-400 bg-opacity-0 bg-clip-padding p-6 shadow-md backdrop-blur-lg backdrop-filter">
        <h1 className="text-center text-3xl font-semibold text-gray-300">
          Login<span className="text-sky-500"> VChat</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              <span className="label label-text text-base">Username</span>
              <input
                type="text"
                name="uName"
                placeholder="Enter username"
                className="input input-bordered h-10 w-full"
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              <span className="label label-text text-base">Password</span>
              <input
                type="password"
                name="pswd"
                placeholder="Enter password"
                className="input input-bordered h-10 w-full"
                onChange={handleChange}
              />
            </label>
          </div>
          <Link
            to="/signup"
            className="mt-2 inline-block text-sm hover:text-blue-600 hover:underline"
          >
            Don't have an account?
          </Link>
          <div>
            <button className="btn btn-sm btn-block mt-2" disabled={isLoading}>
              {isLoading ? (
                <span className="loading loading-spinner" />
              ) : (
                'Login'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
