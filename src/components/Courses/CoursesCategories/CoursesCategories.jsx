import React, {useState, useEffect} from 'react';
import useFetch from "hooks/useFetch";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import './CoursesCategories.scss'

const CoursesCategories = ({ getCategory, previousCategory }) => {

  const { data, get } = useFetch();
  const [category, setCategory] = useState();
  const animatedComponents = makeAnimated();

  const handleChange = (value) => {
    let list = [];
    value.forEach(category => {
      list.push(category.value)
    })
    setCategory(list);
    getCategory(list);
  };

  const options = () => {
    if(data){
      let list = [];
      data.forEach(category => {
        const info = {value: category.id, label: category.title};
        list.push(info)
      })
      return list
    }
  }

  useEffect(() => {get("/admin/categories");}, []);

  return (
    <Select
      className="select"
      closeMenuOnSelect={false}
      components={animatedComponents}
      onChange={handleChange}
      isMulti
      options={options()}
    />
  )
};

export default CoursesCategories;

