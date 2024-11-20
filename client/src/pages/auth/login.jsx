// function AuthLogin() {
//     return (
//         <>
//         <div className="flex items-center justify-center min-h-screen bg-gray-100 w-full">
//             <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
//                 <h2 className="text-2xl font-bold text-center">Login</h2>
//                 <form className="space-y-4">
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Email</label>
//                         <input
//                             type="email"
//                             className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Password</label>
//                         <input
//                             type="password"
//                             className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
//                             required
//                         />
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                     >
//                         Login
//                     </button>
//                 </form>
//             </div>
//         </div>
            
//         </>
//     );
// }

// export default AuthLogin;

import CommonForm from "@/components/common/form";
import { loginFormControls } from "@/config";
import { useToast } from "@/hooks/use-toast";
import { loginUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

function AuthLogin() {
  const [formData, setFormData] = useState({ initialState });
  const dispatch = useDispatch();
  const { toast } = useToast();
  // const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    dispatch(loginUser(formData)).then((data) => {
      // console.log(data);
      if(data?.payload?.success){
        toast({
          title: data?.payload?.message,
          description: "You have successfully logged in",
        });
        // navigate("/shopping/home");
      }
      else{
        toast({
          title: data?.payload?.message,
          description: "Please try again",
          variant: "destructive",
        });
      }
    });
    // console.log(formData);
  }

  return (
    <>
      {/* <div className="flex items-center justify-center min-h-screen bg-gray-100 w-full">
          <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold text-center">Register</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
              >
                Register
              </button>
            </form>
          </div>
        </div> */}
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Sign in to your account
          </h1>
          <p className="mt-2">
            Don't have an account ?
            <Link
              to="/auth/register"
              className="font-medium ml-2 text-primary hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
        <CommonForm
          formControls={loginFormControls}
          buttonText={"Sign In"}
          formData={formData}
          setFormData={setFormData}
          onSubmit={onSubmit}
        />
      </div>
    </>
  );
}

export default AuthLogin;