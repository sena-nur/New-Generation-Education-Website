import React from "react";
import { useEffect, useState } from "react";
import { getUser } from "../../api/sign";

const Profile = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState("Dashboard");
  const token = localStorage.getItem("token");
  const x = async () => {
    const data1 = await getUser(token);
    console.log("sads", data1);
    setData(data1);
  };

  useEffect(() => {
    x();
  }, []);
  return (
    <section className="w-full overflow-hidden dark:bg-gray-900">
      <div className="flex flex-col">
        {/* Cover Image */}
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjb3ZlcnxlbnwwfDB8fHwxNzEwNzQxNzY0fDA&ixlib=rb-4.0.3&q=80&w=1080"
          alt="User Cover"
          className="w-full h-[20rem] object-cover"
        />

        {/* Profile Image */}
        <div className="relative -top-12 mx-auto ">
          <img
            src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxwZW9wbGV8ZW58MHwwfHx8MTcxMTExMTM4N3ww&ixlib=rb-4.0.3&q=80&w=1080"
            alt="User Profile"
            className="rounded-full w-32 h-32 border-4 border-white shadow-xl"
          />
        </div>

        {/* Name and Role */}
        <div className="text-center ">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white -mt-8">
            {data.name}
          </h1>
          <h2 className="text-lg text-gray-600 dark:text-gray-400">
            Computer Engineer
          </h2>
        </div>

        {/* Description */}
        <p className="mx-6 my-4 text-gray-700 dark:text-gray-400 text-md text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          scelerisque urna eget sem posuere, at feugiat justo varius. Nulla
          facilisi. Mauris euismod sem id nunc venenatis luctus.
        </p>

        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <dl className="text-gray-900 pl-48 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
              <div className="flex flex-col py-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  First Name
                </dt>
                <dd className="text-lg font-semibold">Samuel</dd>
              </div>
              <div className="flex flex-col py-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Last Name
                </dt>
                <dd className="text-lg font-semibold">Abera</dd>
              </div>
              <div className="flex flex-col py-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Date Of Birth
                </dt>
                <dd className="text-lg font-semibold">21/02/1997</dd>
              </div>
              <div className="flex flex-col py-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Gender
                </dt>
                <dd className="text-lg font-semibold">Male</dd>
              </div>
            </dl>
          </div>
          <div>
            <dl className="text-gray-900 pr-48 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
              <div className="flex flex-col py-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Location
                </dt>
                <dd className="text-lg font-semibold">Ethiopia, Addis Ababa</dd>
              </div>
              <div className="flex flex-col py-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Phone Number
                </dt>
                <dd className="text-lg font-semibold">+251913****30</dd>
              </div>
              <div className="flex flex-col py-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Email
                </dt>
                <dd className="text-lg font-semibold">
                  samuelabera87@gmail.com
                </dd>
              </div>
              <div className="flex flex-col py-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Website
                </dt>
                <dd className="text-lg font-semibold">
                  https://www.teclick.com
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Social Links */}
        <div className="fixed right-4 bottom-20 flex flex-col gap-4">
          <a href="https://www.linkedin.com/in/samuel-abera-6593a2209/">
            <div className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600 dark:text-blue-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H5z"
                />
                <path fillRule="evenodd" d="M8 9h2v5H8V9zm3 0h2v5h-2V9z" />
                <path
                  fillRule="evenodd"
                  d="M7 6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2h2V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2h2V6z"
                />
              </svg>
            </div>
          </a>
          <a href="https://twitter.com/Samuel7Abera7">
            <div className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-400 dark:text-blue-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95v-5.62l5.4 2.819-5.4 2.801Z"
                />
              </svg>
            </div>
          </a>
          <a href="">
            <div className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600 dark:text-blue-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a8 8 0 0 0-7.95 7.858A8 8 0 0 0 10 18a8 8 0 0 0 7.95-7.858A8 8 0 0 0 10 2Zm0 14a6 6 0 0 1-5.996-5.858A6 6 0 0 1 10 4a6 6 0 0 1 5.996 5.858A6 6 0 0 1 10 16Zm1-11h2V3h-2v2Zm-4 0h2V3H7v2Zm-3 3h8V8H7v2Zm0 3h8V11H7v2Z"
                />
              </svg>
            </div>
          </a>
          <a href="https://www.youtube.com/@silentcoder7">
            <div className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-600 dark:text-red-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.200a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
