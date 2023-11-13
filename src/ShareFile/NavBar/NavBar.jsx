import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import useAuthContext from "../../Hook/useAuthContext";
import Swal from "sweetalert2";

const NavBar = () => {
  const { user, SignOutUser, loading } = useAuthContext();

  if (loading) {
    return <span className="loading loading-spinner text-secondary"></span>;
  }

  const SignOutUse = () => {
    SignOutUser()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Log Out Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(() => {});
  };

  return (
    <div className="navbar bg-[#eeeff8] ">
      <div className="navbar-start z-50">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          {/*========= mobile ============ */}

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content font-roboto font-semibold gap-4 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#6C53F8] bg-[#E2E5FE] rounded-md hover:text-white hover:bg-[#6C53F8] p-2"
                  : "p-2  rounded-md "
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/addjob"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#6C53F8] bg-[#E2E5FE] rounded-md hover:text-white hover:bg-[#6C53F8] p-2"
                  : "p-2  rounded-md"
              }
            >
              Add job
            </NavLink>
            <NavLink
              to="/mypostedjobs"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#6C53F8] bg-[#E2E5FE] rounded-md hover:text-white hover:bg-[#6C53F8] p-2"
                  : "p-2  rounded-md"
              }
            >
              My posted jobs
            </NavLink>
            <NavLink
              to="/mybids"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#6C53F8] bg-[#E2E5FE] rounded-md hover:text-white hover:bg-[#6C53F8] p-2"
                  : "p-2  rounded-md"
              }
            >
              My Bids
            </NavLink>
            <NavLink
              to="/bidrequests"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#6C53F8] bg-[#E2E5FE] rounded-md hover:text-white hover:bg-[#6C53F8] p-2"
                  : "p-2  rounded-md"
              }
            >
              Bid Requests
            </NavLink>
          </ul>
        </div>
        <Logo></Logo>
      </div>
      <div className="navbar-center hidden lg:flex ">
        {/*========= laptop to lg ============ */}

        <ul className="menu menu-horizontal px-1 lg:gap-5 text-lg font-roboto font-semibold">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#6C53F8] bg-[#E2E5FE] rounded-md hover:text-white hover:bg-[#6C53F8] p-2"
                : "p-2  rounded-md"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/addjob"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#6C53F8] bg-[#E2E5FE] rounded-md hover:text-white hover:bg-[#6C53F8] p-2"
                : "p-2  rounded-md"
            }
          >
            Add job
          </NavLink>
          <NavLink
            to="/mypostedjobs"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#6C53F8] bg-[#E2E5FE] rounded-md hover:text-white hover:bg-[#6C53F8] p-2"
                : "p-2  rounded-md"
            }
          >
            My posted jobs
          </NavLink>
          <NavLink
            to="/mybids"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#6C53F8] bg-[#E2E5FE] rounded-md hover:text-white hover:bg-[#6C53F8] p-2"
                : "p-2  rounded-md"
            }
          >
            My Bids
          </NavLink>
          <NavLink
            to="/bidrequests"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#6C53F8] bg-[#E2E5FE] rounded-md hover:text-white hover:bg-[#6C53F8] p-2"
                : "p-2 rounded-md"
            }
          >
            Bid Requests
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end ">
        <div className="flex-none">
          <div className="">
            {user ? (
              <div className="flex gap-4 items-center">
                {user.displayName}
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={user.photoURL} />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a className="justify-between">Profile</a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <button onClick={SignOutUse}>
                      <li>
                        <a>Logout</a>
                      </li>
                    </button>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="text-lg font-roboto font-semibold">
                <NavLink
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#6C53F8]  bg-[#E2E5FE] rounded-md hover:text-white hover:bg-[#6C53F8] p-2"
                      : "p-2  rounded-md"
                  }
                >
                  Log In
                </NavLink>
              </div>
            )}
          </div>
        </div>

        <div className="flex-none"></div>
      </div>
    </div>
  );
};

export default NavBar;
