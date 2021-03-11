import useFetch from "hooks/useFetch";
import { useEffect, useState } from "react";
import Loading from "components/Loading";

const CategoryList = ({handleCategoryFilter}) => {
  const { data, error, isLoading, get } = useFetch();
  const [categories, setCategories] = useState([]);
  const [listToFilter, setListToFilter] = useState([]);


  const handleCheckboxes =(e) => {
    if (e.target.checked){
      setListToFilter([...listToFilter, e.target.value])
      handleCategoryFilter([...listToFilter, e.target.value])
    } else {
      setListToFilter(listToFilter.filter((category) => category !== e.target.value))
      handleCategoryFilter(listToFilter.filter((category) => category !== e.target.value))
    }
  }

  useEffect(()=>{
    get("/categories")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(() => {
    setCategories(data);
  }, [data])


  return (
    <>
      {error && <h4>{error}</h4>}
      {(isLoading && <Loading />) ||
      (categories && (
        <form className="boxeslist">
          {categories.map((category) => (
            <div key={category.category.id} className="boxes">
              <label>
                <input
                  className="m-2"
                  name={category.category.title}
                  type="checkbox"
                  value={category.category.id}
                  onChange={handleCheckboxes}/>
                {category.category.title}
              </label>
            </div> 
          ))}
        </form>
      ))}
    </>
  )
}

export default CategoryList;