import "./CourseList.scss";
import React, { useState, useEffect } from "react";
import CourseCard from "components/CourseCard/CourseCard";
import SearchBar from "components/Layout/SearchBar/SearchBar";
import CheckBoxCategories from "components/Layout/CheckBoxCategories/CheckBoxCategories";
import useFetch from "hooks/useFetch";
import Loading from "components/Loading";

const CourseList = () => {
  const { data, error, isLoading, get } = useFetch();
  const [course, setCourse] = useState([]);
  const [categories, setCategories] = useState([]);
  const [input, setInput] = useState("");
  const [checkBoxInput, setCheckBoxInput] = useState([]);

  const fetchCourse = async () => {
    get("/courses");
    const courses = await data;
    setCourse(courses);
  };

  const getCategoriesInfo = async () => {
    get ("/categories");
    const infos = await data;
    setCategories(infos);
  }

  useEffect(() => {
    getCategoriesInfo()
    fetchCourse()
  }, []);

  console.log(checkBoxInput)

  return (
    <div className="CourseList">
      <div className="displaysearchbar">
        <SearchBar getInput={setInput}/>
        {categories && (
          <form className="boxeslist">
            {categories.map((category) => (
              <CheckBoxCategories key={category.id} category={category} setCheckBoxInput={setCheckBoxInput}/>
            ))}
          </form>
        )}
      </div>
      {error && <h4>{error}</h4>}
      {(isLoading && <Loading />) ||
        (course && (
          <div className="row">
            {course.filter((value) => {
              if(input === ""){return value}
              else if (value.title.toLowerCase().includes(input.toLowerCase())){
                return value}
            }).map((courseinfo) => (
              <CourseCard key={courseinfo.id} course={courseinfo} />
            ))}
          </div>
        ))}
    </div>
  );
};

export default CourseList;
