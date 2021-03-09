const SearchBar =() => {

	const handleSubmit=(e)=>{
		// updateUserInput(e.target[0].value);
		// window.location.href = `/pagelist/${e.target[0].value}`; 	
	}

	return(
		<form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
			<input id="search-input" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
			<button id="search-button" className="btn btn-primary my-2 my-sm-0"><i className="fas fa-search"></i></button>
		</form>
	)
}

export default SearchBar;