import React, { useState } from "react";
import GhorBari_Logo from "../../assets/Ghorbari_Logo.svg";
import BSRM_Logo from "../../assets/BSRM_Logo.svg";
import BounceLoader from "react-spinners/BounceLoader";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);

  const navigate = useNavigate();

  const handleLoginButtonClick = (e) => {
    e.preventDefault();

    setLoginLoading(true);

    setTimeout(() => {
      setLoginLoading(false);
      navigate("/retailer/dashboard");
    }, 2000);
  };

  return (
    <section id="login-section">
      <div className="border h-screen flex items-center justify-center bg-[#f7f9fc] bg-shadow-image bg-no-repeat bg-right-bottom">
        <div className="form-container flex-1 max-w-sm">
          <form className="bg-white p-5 rounded-xl">
            <div className="flex justify-center mt-3 mb-10">
              <img src={GhorBari_Logo} alt="Ghorbari Logo" />
            </div>
            <div className="">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <div className="mt-2.5 rounded-md flex border px-3 items-center bg-white border-slate-300">
                <span className="border-r pr-3">
                  <i class="fa-regular fa-envelope"></i>
                </span>
                <input
                  type="email"
                  className="w-full outline-none p-2"
                  id="email"
                  autoComplete="off"
                  placeholder="admin@gmail.com"
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="password" className="font-semibold">
                Password
              </label>
              <div className="mt-2.5 rounded-md flex border px-3 items-center bg-white border-slate-300">
                <span className="border-r pr-3">
                  <i class="fa-solid fa-key"></i>
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full outline-none p-2"
                  id="password"
                  placeholder="******"
                />
                <span
                  className="cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <i class="fa-regular fa-eye-slash"></i>
                  ) : (
                    <i class="fa-regular fa-eye"></i>
                  )}
                </span>
              </div>
            </div>

            <button
              onClick={handleLoginButtonClick}
              className="text-lg bg-primary text-white font-semibold w-full py-2 rounded-md mt-4"
              disabled={loginLoading}
            >
              <span>
                {loginLoading ? (
                  <div className="flex justify-center items-center gap-2">
                    <BounceLoader
                      color={"#fff"}
                      cssOverride={{
                        borderColor: "#fff",
                      }}
                      size={20}
                    />
                    <span>Loading...</span>
                  </div>
                ) : (
                  "Log in"
                )}
              </span>
            </button>

            <div className="flex justify-between items-center mt-4">
              <div className="flex gap-1.5">
                <input
                  type="checkbox"
                  className="cursor-pointer"
                  id="remember_me"
                />
                <label
                  htmlFor="remember_me"
                  className="font-semibold  cursor-pointer"
                >
                  Remember me
                </label>
              </div>

              <div className="text-slate-600 text-sm cursor-pointer">
                Forgot password?
              </div>
            </div>
          </form>
        </div>
      </div>
      <footer className="flex justify-center items-center py-2 gap-2 text-sm font-bold">
        <span>Powered by</span>
        <img src={BSRM_Logo} alt="BSRM Logo" />
      </footer>
    </section>
  );
};

export default Login;
