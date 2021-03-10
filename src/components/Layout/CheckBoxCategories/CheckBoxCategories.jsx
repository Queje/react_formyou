import "./CheckBoxCategories.scss";
import {useState} from "react";

const CheckBoxCategories =({category, setCheckBoxInput}) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxes =(e) => {
    if (isChecked === false){
      console.log(e.target.value)
      setIsChecked(true)
      setCheckBoxInput(e.target.value)
    } else {
      setIsChecked(false)
    }
  }

  return (
    <div className="boxes">
      <label>
      {category.title}
      <input
        name={category.title}
        type="checkbox"
        checked={isChecked}
        value={category.title}
        onChange={handleCheckboxes}/>
      </label>
    </div> 
  )
}

export default CheckBoxCategories;
