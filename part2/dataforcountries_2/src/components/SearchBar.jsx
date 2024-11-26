const SearchBar = ({ search, updateSearch }) => {
  return (
    <p>find countries <input onChange={updateSearch} value={search} type="text" /></p>
  );
}

export default SearchBar;