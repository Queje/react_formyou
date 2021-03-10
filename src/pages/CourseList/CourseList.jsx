import "./CourseList.scss";
import CourseCard from "components/CourseCard/CourseCard";
import SearchBar from "components/Layout/SearchBar/SearchBar";
import { useState, useEffect } from "react";
import { getCategories } from "services/CategoriesService";
import { getCategoriesCourses } from "services/CategoriesCoursesService";
import { getCourses } from "services/CoursesService";
import CheckBoxCategories from "components/Layout/CheckBoxCategories/CheckBoxCategories";

const CourseList = () => {
  const [course, setCourse] = useState([]);
  const [categories, setCategories] = useState([]);
  const [input, setInput] = useState("");
  const [checkBoxInput, setCheckBoxInput] = useState([]);

  const getCategoriesInfo = async () => {
    const infos = await getCategories()
    const infosCourses = await getCategoriesCourses()
    setCategories(infos);
    console.log(infosCourses)
  }

  const fetchCourse = async () => {
    const courses = await getCourses();
    setCourse(courses);
  };

  useEffect(() => {
    getCategoriesInfo()
    fetchCourse()
  },[])

  console.log(checkBoxInput)

  return (
    <div>
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
      <div>
        {course && (
          <div className="row">
            {course.filter((value) => {
              if(input === ""){return value}
              else if (value.title.toLowerCase().includes(input.toLowerCase())){
                return value}
            }).map((e) => (
              <CourseCard key={e.id} course={e} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseList;
