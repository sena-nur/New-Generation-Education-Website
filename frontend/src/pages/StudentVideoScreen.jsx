import React, { useState } from "react";
import TopBar from "../components/studentVideoScreen/TopBar";
import CourseVideo from "../components/studentVideoScreen/CourseVideo";
import BottomBar from "../components/studentVideoScreen/BottomBar";
import SideBar from "../components/studentVideoScreen/SideBar";
import courses from "../data/courses.json";
import Certificate from "../components/studentVideoScreen/Certificate";

const StudentVideoScreen = () => {
  const data = courses.courses[0];
  console.log("data", data);

  const [certificatePage, setCertificatePage] = useState(false);
  return (
    <div>
      <div>{certificatePage && <Certificate data={data} />}</div>
      {!certificatePage && (
        <>
          <div>
            <TopBar data={data} setCertificatePage={setCertificatePage} />

            <div className="grid grid-cols-4  h-screen">
              <div className="col-span-3 ">
                <div>
                  <CourseVideo data={data} />
                </div>
                <div className="">
                  <BottomBar
                    data={data}
                    setCertificatePage={setCertificatePage}
                  />
                </div>
              </div>

              <div class="">
                <SideBar data={data} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default StudentVideoScreen;
