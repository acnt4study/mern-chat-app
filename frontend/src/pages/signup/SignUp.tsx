import { Link } from 'react-router-dom';
import GenderCheckbox from './GenderCheckbox';
import { useImmer } from 'use-immer';
import useSignup from '../../hooks/useSignup';

type inputsObj = {
  fName: string;
  uName: string;
  pswd: string;
  cpswd: string;
  gender: string;
};

const SignUp = () => {
  const [inputs, setInputs] = useImmer<inputsObj>({
    fName: '',
    uName: '',
    pswd: '',
    cpswd: '',
    gender: '',
  });

  const { isLoading, signup } = useSignup();

  const handleChange: React.ChangeEventHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setInputs((inp) => {
      inp[e.target.name] = e.target.value;
    });
  };

  const handleGender = (gen: string) => {
    setInputs((inp) => {
      inp.gender = gen;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="mx-auto flex min-w-96 flex-col items-center justify-center">
      <div className="w-full rounded-lg bg-gray-400 bg-opacity-0 bg-clip-padding p-6 shadow-md backdrop-blur-lg backdrop-filter">
        <h1 className="text-center text-3xl font-semibold text-gray-300">
          SignUp<span className="text-sky-500"> VChat</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              <span className="label label-text text-base">Fullname</span>
              <input
                type="text"
                name="fName"
                value={inputs.fName}
                placeholder="Enter fullname"
                className="input input-bordered h-10 w-full"
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              <span className="label label-text text-base">Username</span>
              <input
                type="text"
                name="uName"
                value={inputs.uName}
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
                value={inputs.pswd}
                placeholder="Enter password"
                className="input input-bordered h-10 w-full"
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              <span className="label label-text text-base">
                Confirm Password
              </span>
              <input
                type="password"
                name="cpswd"
                value={inputs.cpswd}
                placeholder="Enter password again"
                className="input input-bordered h-10 w-full"
                onChange={handleChange}
              />
            </label>
          </div>
          <GenderCheckbox onChange={handleGender} val={inputs.gender} />
          <Link
            to="/login"
            className="mt-2 inline-block text-sm hover:text-blue-600 hover:underline"
          >
            Already have an account?
          </Link>
          <div>
            <button className="btn btn-sm btn-block mt-2" disabled={isLoading}>
              {isLoading ? (
                <span className="loading loading-spinner" />
              ) : (
                'SignUp'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
