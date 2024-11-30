import React, { useState } from "react";
import {
  FaEdit,
  FaPlus,
  FaUpload,
  FaDollarSign,
  FaChalkboardTeacher,
  FaFileUpload,
  FaMinus,
} from "react-icons/fa";
import ChapterCreate from "./ChapterCreate";

const NewCourse = () => {
  const data = {
    courseTitle: "This is example Title",
    courseDescription:
      "Given the context and the error, it's likely that the issue arises from trying to render the courseAttachment state directly when it's a File object. This could happen if you have a line in your JSX that attempts to display courseAttachment directly, such as within a <p> tag or similar. For example, if there's a line like this:",
    courseCategory: "Cryptocurrency",
    courseChapters: [],
    coursePrice: "198",
  };

  const [isChapterCreatePage, setIsChapterCreatePage] = useState(false);

  const [courseTitle, setCourseTitle] = useState(data.courseTitle || "");
  const [isTitleEdit, setIsTitleEdit] = useState(false);

  const [courseDescription, setCourseDescription] = useState(
    data.courseDescription || ""
  );
  const [isDescriptionEdit, setIsDescriptionEdit] = useState(false);

  const [courseImage, setCourseImage] = useState();
  const [isImageEdit, setIsImageEdit] = useState(false);

  const [courseCategory, setCourseCategory] = useState(
    data.courseCategory || ""
  );
  const [isCategoryEdit, setIsCategoryEdit] = useState(false);

  const [courseChapters, setCourseChapters] = useState(
    data.courseChapters || []
  );
  const [chapter, setChapter] = useState("");
  const [isChapterEdit, setIsChapterEdit] = useState(false);

  const [coursePrice, setCoursePrice] = useState(data.coursePrice || "");
  const [isPriceEdit, setIsPriceEdit] = useState(false);

  const [isAttachmentEdit, setIsAttachmentEdit] = useState(false);
  const [attachment, setAttachment] = useState("");

  const chapterComponent = (courseChapters) => {
    return (
      <div className="flex flex-col gap-4 w-full ">
        {courseChapters.map((chapter) => {
          return (
            <div
              key={chapter}
              className="flex justify-between bg-white px-2 py-2 rounded-sm mx-2 my-1"
            >
              <p>{chapter}</p>
              <div className="flex gap-4  ">
                <button
                  onClick={() => {
                    setCourseChapters(
                      courseChapters.filter((item) => item !== chapter)
                    );
                  }}
                >
                  <FaMinus className="w-4 h-4 fill-orange" />
                </button>

                <button
                  onClick={() => {
                    setIsChapterCreatePage(true);
                  }}
                >
                  <FaEdit className="w-4 h-4 fill-custom-blue" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <>
      {isChapterCreatePage ? (
        <ChapterCreate />
      ) : (
        <>
          <div className="mt-28">
            <div className="grid grid-cols-2">
              <div className="flex flex-col gap-6 mx-6  ">
                <div>
                  <div className={style.headerContainer}>
                    <div className={`${style.iconContainer} `}>
                      <FaChalkboardTeacher className={style.icon} />{" "}
                    </div>
                    <p>Customize Your Course</p>
                  </div>
                  <div className={style.sectionContainer}>
                    <div className={style.titleContainer}>
                      <p className={style.title}>Course Title</p>
                      <button onClick={() => setIsTitleEdit(!isTitleEdit)}>
                        <FaEdit className={style.iconSmall} />
                      </button>
                    </div>
                    {isTitleEdit ? (
                      <input
                        type="text"
                        placeholder={
                          courseTitle === "" ? "Enter title" : courseTitle
                        }
                        value={courseTitle}
                        onChange={(e) => setCourseTitle(e.target.value)}
                        className={style.input}
                      />
                    ) : (
                      <p>{courseTitle === "" ? "No Title" : courseTitle}</p>
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
                    <p className={style.title}>Course Description</p>
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
                        courseDescription === ""
                          ? "Enter description"
                          : courseDescription
                      }
                      value={courseDescription}
                      onChange={(e) => setCourseDescription(e.target.value)}
                      className="bg-white w-full"
                      rows="5"
                    />
                  ) : (
                    <p>
                      {courseDescription === ""
                        ? "No Description"
                        : courseDescription}
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

                <div className={style.sectionContainer}>
                  <div className="flex justify-between">
                    <p className={style.title}>Course Image</p>
                    <button onClick={() => setIsImageEdit(!isImageEdit)}>
                      <FaEdit className={style.iconSmall} />
                    </button>
                  </div>
                  <div className="border-2 px-4 py-8 mt-6 mb-2 border-gray rounded-md p-1 relative">
                    <div className="flex items-center gap-2 cursor-pointer">
                      <FaFileUpload className="text-2xl text-custom-blue" />
                      <p className="text-2xl text-custom-blue">
                        Choose Files or Drag and Drop
                      </p>
                      <input
                        type="file"
                        accept="image/png, image/jpeg, image/gif, image/svg+xml, application/pdf"
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
                          setCourseImage(e.target.files[0]);
                          console.log(e.target.files[0]);
                        }}
                      />
                    </div>
                    <p className="text-sm text-gray-500">
                      PNG, JPG, GIF, SVG, or PDF. Max 5MB
                    </p>
                    {courseImage && (
                      <div className="mt-2">
                        <img
                          src={URL.createObjectURL(courseImage)}
                          alt="Preview"
                          className="max-w-full h-auto"
                        />
                      </div>
                    )}
                    <button className="bg-custom-blue text-white p-2 rounded-md mt-2">
                      Upload Image
                    </button>
                  </div>
                  <div className="mt-2 flex justify-end">
                    <button
                      onClick={() => {
                        alert("Image Saved");
                      }}
                      className="px-2 py-1 bg-custom-blue text-white rounded-md"
                    >
                      Save
                    </button>
                  </div>
                </div>

                <div className={style.sectionContainer}>
                  <div className={style.titleContainer}>
                    <p className={style.title}>Course Category</p>
                    <button onClick={() => setIsCategoryEdit(!isCategoryEdit)}>
                      <FaEdit className={style.iconSmall} />
                    </button>
                  </div>
                  {!isCategoryEdit ? (
                    <p>
                      {courseCategory === "" ? "No Category" : courseCategory}
                    </p>
                  ) : (
                    <input
                      value={courseCategory}
                      onChange={(e) => setCourseCategory(e.target.value)}
                      placeholder="Enter Category"
                      type="text"
                      className={style.input}
                    />
                  )}
                  <div className="mt-2 flex justify-end">
                    <button
                      onClick={() => {
                        setIsCategoryEdit(!isCategoryEdit);
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
                      <FaChalkboardTeacher className={style.icon} />{" "}
                    </div>
                    <p>Course Chapters</p>
                  </div>

                  <div className={style.sectionContainer}>
                    <div className="mb-2 mt-2 flex justify-between">
                      <p className={style.title}>Course Chapters</p>
                      <button
                        onClick={() => {
                          setIsChapterEdit(!isChapterEdit);
                        }}
                      >
                        <FaPlus className={style.iconSmall} />
                      </button>
                    </div>
                    {isChapterEdit ? (
                      <>
                        {chapterComponent(courseChapters)}
                        <div className="flex gap-1  w-full mt-6 px-2">
                          <input
                            type="text"
                            value={chapter}
                            onChange={(e) => setChapter(e.target.value)}
                            placeholder="Enter Chapter"
                            className=" bg-white px-5 py-2 rounded-full"
                          />
                          <button
                            onClick={() => {
                              setCourseChapters([
                                ...courseChapters,
                                chapter === "" ? "No Named Chapter" : chapter,
                              ]);
                              setChapter("");
                              setIsChapterEdit(!isChapterEdit);
                            }}
                          >
                            <div className="bg-white rounded-full p-2">
                              <FaPlus className=" w-4 h-4 text-orange" />
                            </div>
                          </button>
                        </div>
                      </>
                    ) : courseChapters.length === 0 ? (
                      <p className="text-sm text-gray-500">
                        To reorder chapters do something..
                      </p>
                    ) : (
                      chapterComponent(courseChapters)
                    )}
                    <div className="mt-2 flex justify-end">
                      <button
                        onClick={() => {
                          alert("Attachment Saved");
                        }}
                        className="px-2 py-1 bg-custom-blue text-white rounded-md"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <div className={style.headerContainer}>
                    <div className={style.iconContainer}>
                      <FaChalkboardTeacher className={style.icon} />
                    </div>
                    <p>Sell Your Course</p>
                  </div>

                  <div className={style.sectionContainer}>
                    <div className={style.titleContainer}>
                      <p className={style.title}>Course Price</p>
                      <button onClick={() => setIsPriceEdit(!isPriceEdit)}>
                        <FaEdit className={style.iconSmall} />
                      </button>
                    </div>
                    {!isPriceEdit ? (
                      <p>
                        <span className="text-lg font-medium">$</span>
                        {coursePrice == "" ? "0" : coursePrice}.00
                      </p>
                    ) : (
                      <input
                        type="text"
                        value={coursePrice}
                        onChange={(e) => setCoursePrice(e.target.value)}
                        className={style.input}
                      />
                    )}
                    <div className="mt-2 flex justify-end">
                      <div className="mt-2 flex justify-end">
                        <button
                          onClick={() => {
                            setIsPriceEdit(!isPriceEdit);
                          }}
                          className="px-2 py-1 bg-custom-blue text-white rounded-md"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className={style.headerContainer}>
                    <div className={style.iconContainer}>
                      <FaUpload className={style.icon} />{" "}
                    </div>
                    <p>Resources & Attachments</p>
                  </div>

                  <div className={style.sectionContainer}>
                    <div className="flex justify-between">
                      <p className={style.title}>Attachments</p>
                      <button
                        onClick={() => setIsAttachmentEdit(!isAttachmentEdit)}
                      >
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
                          accept="image/png, image/jpeg, image/gif, image/svg+xml, application/pdf"
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
                            setAttachment(e.target.files[0]);
                            console.log(e.target.files[0]);
                          }}
                        />
                      </div>
                      <p className="text-sm text-gray-500">
                        PNG, JPG, GIF, SVG, or PDF. Max 15MB
                      </p>
                      {attachment && (
                        <div className="mt-2">
                          <img
                            src={URL.createObjectURL(attachment)}
                            alt="Preview"
                            className="max-w-full h-auto"
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
                          alert("Attachment Saved");
                        }}
                        className="px-2 py-1 bg-custom-blue text-white rounded-md"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button className=" bg-custom-blue text-xl text-white py-3 px-6 rounded-md mt-8">
                    Next Step
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default NewCourse;

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
