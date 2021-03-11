import React, {useState, useEffect} from 'react';
import useFetch from "hooks/useFetch";
import MultiSelect from "react-multi-select-component";

const CoursesCategories = ({ getCategory }) => {
  const { data, get } = useFetch();
  const [selected, setSelected] = useState([]);

  const options = () => {
    let list = []
    data.forEach(category =>{
      const option ={
        label: category.title,
        value: category.title
      }
      list.push(option)
    })
    return list
  }


  useEffect(() => {get("/categories");}, []);


  console.log("data categories", data)

  return (
    <div>
      <h1>Select Categories</h1>
      <pre>{JSON.stringify(selected)}</pre>
      <MultiSelect
        options={options()}
        value={selected}
        onChange={setSelected}
        labelledBy={"Select"}
      />
    </div>
  )
};

export default CoursesCategories;
