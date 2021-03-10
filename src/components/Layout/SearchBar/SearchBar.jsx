import "./searchbar.scss";

const SearchBar =({getInput}) => {

  const handleChange =(e)=>{
    getInput(e.target.value)
  }

	return(
    <>
      <div className="searchbar">
        <form className="form-inline my-2 my-lg-0" onChange={handleChange}>
          <input id="search-input" className="form-control mr-sm-2" type="search" placeholder="Find a course..." aria-label="Search"/>
          <button id="search-button" className="btn btn-primary my-2 my-sm-0"><i className="fas fa-search"></i></button>
        </form>
      </div>
    </>
	)
}

export default SearchBar;