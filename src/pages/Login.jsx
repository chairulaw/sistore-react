import { Link } from "react-router-dom";
import { bgLoginSignUp } from "../assets/Assets";

const loginForm = [
  { id: "username", type: "text", name: "username", placeholder: "Username" },
  { id: "password", type: "password", name: "password", placeholder: "Password" }
];

const Login = () => {
  return (
    <div className="flex justify-center bg-[#102C57] items-center min-h-screen">
      <div className='bg-[#DFD0B8] p-10 rounded-2xl'>
        <h1 className='flex justify-center text-3xl  font-bold mb-5'>Login</h1>

        <form action="" className="md:w-5xl w-full max-w-md">
          <div className='flex flex-col w-full gap-6'>
            {loginForm.map((field) => (
              <input
                key={field.id}
                className='border bg-white rounded-2xl px-5 h-10'
                type={field.type}
                name={field.name}
                id={field.id}
                placeholder={field.placeholder}
              />
            ))}
            <p className='flex font-semibold text-lg cursor-pointer justify-center hover:text-gray-400 ease-in-out duration-300'>
              Lupa Kata Sandi?
            </p>
            <button className='bg-[#153448] text-white rounded-2xl cursor-pointer font-bold px-5 h-10 hover:bg-[#DFDEDE] ease-in-out duration-300'>
              Login
            </button>
          </div>

          <Link to="/" className='flex font-semibold text-lg cursor-pointer mt-5 justify-center hover:text-gray-500 ease-in-out duration-300'>
            There is no Backend here, Go Away!
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
