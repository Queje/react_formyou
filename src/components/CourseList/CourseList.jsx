import "./CourseList.scss";
import { useState, useEffect } from "react";
import CourseCard from "components/CourseCard/CourseCard";
import SearchBar from "components/Layout/SearchBar/SearchBar";
import useFetch from "hooks/useFetch";
import Loading from "components/Loading";
import CategoryList from "components/CategoryList/CategoryList";

const CourseList = () => {
  const { data, error, isLoading, get } = useFetch();
  const [course, setCourse] = useState([]);
  const [input, setInput] = useState("");
  const [categoryList, setCategoryList] = useState([]);

  const handleCategoryFilter = (list) => {
    setCategoryList(list)
  }

  useEffect(() => {
    if (categoryList.length < 1){
      get("/courses");
      // eslint-disable-next-line react-hooks/exhaustive-deps
    } else {
      const categories = categoryList.join()
      get(`/courses?categories=${categories}`)
    }
  }, [categoryList]);

  useEffect(() => {
    setCourse(data);
  }, [data])
  
  return (
      <div className="CourseList">
        <div className="displaysearchbar">
          <SearchBar getInput={setInput}/>
          <CategoryList handleCategoryFilter={handleCategoryFilter}/>
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
          ))
        }
      </div>
  );
};

export default CourseList;
