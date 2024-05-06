import React, { useState } from "react";
import {
  FaEdit,
  FaPlus,
  FaUpload,
  FaDollarSign,
  FaChalkboardTeacher,
  FaFileUpload,
  FaMinus,
  FaTrash,
} from "react-icons/fa";
import NewCourse from "./NewCourse";

const ChapterCreate = () => {
  const data = {
    chapterTitle: "This is example Title",
    chapterDescription:
      "This is example Description long text. this is a long text.  is example Description long text. this is a long text. ",
  };

  const [isNewCoursePage, setIsNewCoursePage] = useState(false);

  const [chapterTitle, setChapterTitle] = useState(data.chapterTitle || "");
  const [isTitleEdit, setIsTitleEdit] = useState(false);

  const [chapterDescription, setChapterDescription] = useState(
    data.chapterDescription || ""
  );
  const [isDescriptionEdit, setIsDescriptionEdit] = useState(false);

  const [isVideoEdit, setIsVideoEdit] = useState(false);
  const [video, setVideo] = useState("");

  return (
    <>
      {isNewCoursePage ? (
        <NewCourse />
      ) : (
        <>
          <div className="mt-20">
            <div className="flex justify-between mx-6">
              <button
                onClick={() => setIsNewCoursePage(true)}
                className=" bg-custom-blue text-xl text-white py-1 px-5 rounded-md mt-8"
              >
                {"<-"}
              </button>
              <div className="flex gap-3 text-center items-center">
                <button className=" bg-custom-blue text-md text-white py-1 px-5 rounded-md mt-8">
                  Publish
                </button>
                <button className=" bg-red-500 text-md text-white py-2 text-md px-3 rounded-md mt-8">
                  <FaTrash className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="flex flex-col gap-6 mx-6  ">
                <div>
                  <div className={style.headerContainer}>
                    <div className={`${style.iconContainer} `}>
                      <FaChalkboardTeacher className={style.icon} />{" "}
                    </div>
                    <p>Customize Your Chapter</p>
                  </div>
                  <div className={style.sectionContainer}>
                    <div className={style.titleContainer}>
                      <p className={style.title}>Chapter Title</p>
                      <button onClick={() => setIsTitleEdit(!isTitleEdit)}>
                        <FaEdit className={style.iconSmall} />
                      </button>
                    </div>
                    {isTitleEdit ? (
                      <input
                        type="text"
                        placeholder={
                          chapterTitle === "" ? "Enter title" : chapterTitle
                        }
                        value={chapterTitle}
                        onChange={(e) => setChapterTitle(e.target.value)}
                        className={style.input}
                      />
                    ) : (
                      <p>{chapterTitle === "" ? "No Title" : chapterTitle}</p>
                    )}
                    <div className="mt-2 flex justify-end">
                      <button
                        onClick={() => {
                          setIsTitleEdit(!isTitleEdit);
                        }}
                        className="px-2 py-1 bg-custom-blue text-white rounded-md"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>

                <div className={style.sectionContainer}>
                  <div className={style.titleContainer}>
                    <p className={style.title}>Chapter Description</p>
                    <button
                      onClick={() => {
                        setIsDescriptionEdit(!isDescriptionEdit);
                      }}
                    >
                      <FaEdit className={style.iconSmall} />
                    </button>
                  </div>
                  {isDescriptionEdit ? (
                    <textarea
                      placeholder={
                        chapterDescription === ""
                          ? "Enter description"
                          : chapterDescription
                      }
                      value={chapterDescription}
                      onChange={(e) => setChapterDescription(e.target.value)}
                      className="bg-white w-full"
                      rows="5"
                    />
                  ) : (
                    <p>
                      {chapterDescription === ""
                        ? "No Description"
                        : chapterDescription}
                    </p>
                  )}

                  <div className="mt-2 flex justify-end">
                    <button
                      onClick={() => {
                        setIsDescriptionEdit(!isDescriptionEdit);
                      }}
                      className="px-2 py-1 bg-custom-blue text-white rounded-md"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>

              <div className=" mx-6  ">
                <div>
                  <div className={style.headerContainer}>
                    <div className={style.iconContainer}>
                      <FaUpload className={style.icon} />{" "}
                    </div>
                    <p>Video</p>
                  </div>

                  <div className={style.sectionContainer}>
                    <div className="flex justify-between">
                      <p className={style.title}>Videos</p>
                      <button onClick={() => setIsVideoEdit(!isVideoEdit)}>
                        <FaEdit className={style.iconSmall} />
                      </button>
                    </div>
                    <div className="border-2 px-2 py-2 mt-2 mb-2 border-gray rounded-md p-1 relative">
                      <div className=" flex items-center gap-2 cursor-pointer">
                        <FaFileUpload className="text-2xl text-custom-blue" />
                        <p className="text-2xl text-custom-blue">
                          Choose Files or Drag and Drop
                        </p>
                        <input
                          type="file"
                          accept="video/mov, .mov, .mp4, .webm, .ogg"
                          style={{
                            opacity: 0,
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            top: 0,
                            left: 0,
                            cursor: "pointer",
                          }}
                          onChange={(e) => {
                            setVideo(e.target.files[0]);
                            console.log(e.target.files[0]);
                          }}
                        />
                      </div>
                      <p className="text-sm text-gray-500">
                        PNG, JPG, GIF, SVG, or PDF. Max 15MB
                      </p>
                      {video && (
                        <div className="mt-2">
                          <video
                            className="VideoInput_video"
                            width="100%"
                            controls
                            src={URL.createObjectURL(video)}
                          />
                        </div>
                      )}
                      <button className="bg-custom-blue text-white p-2 rounded-md mt-2">
                        Upload
                      </button>
                    </div>
                    <div className="mt-2 flex justify-end">
                      <button
                        onClick={() => {
                          alert("Video Saved");
                        }}
                        className="px-2 py-1 bg-custom-blue text-white rounded-md"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ChapterCreate;

const style = {
  icon: "w-8 h-8 text-custom-blue",
  iconSmall: "w-6 h-6 text-custom-blue",
  iconContainer:
    "rounded-full bg-white w-12 h-12 flex justify-center items-center shadow-md",
  headerContainer:
    "mt-6 mb-3 flex gap-2 items-center text-2xl text-custom-blue",
  sectionContainer: "bg-gray-light shadow-lg px-6 py-4 rounded-md",
  header: "text-lg font-semibold",
  headerContainer:
    "flex gap-2 items-center mt-6 mb-3 text-custom-blue text-xl font-medium",
  title: "text-lg font-semibold",
  titleContainer: "flex justify-between mb-2",
  input: "px-2 py-1 rounded-md",
};
