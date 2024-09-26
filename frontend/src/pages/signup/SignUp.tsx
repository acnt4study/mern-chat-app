import GenderCheckbox from './GenderCheckbox';

const SignUp = () => {
  return (
    <div className="mx-auto flex min-w-96 flex-col items-center justify-center">
      <div className="w-full rounded-lg bg-gray-400 bg-opacity-0 bg-clip-padding p-6 shadow-md backdrop-blur-lg backdrop-filter">
        <h1 className="text-center text-3xl font-semibold text-gray-300">
          SignUp
          <span className="text-blue-500"> VChat</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="label-text text-base">Fullname</span>
            </label>
            <input
              type="text"
              placeholder="Enter fullname"
              className="input input-bordered h-10 w-full"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="label-text text-base">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="input input-bordered h-10 w-full"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="label-text text-base">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="input input-bordered h-10 w-full"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="label-text text-base">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password again"
              className="input input-bordered h-10 w-full"
            />
          </div>
          <GenderCheckbox />
          <a
            href="#"
            className="mt-2 inline-block text-sm hover:text-blue-600 hover:underline"
          >
            Already have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2">SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
