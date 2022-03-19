import { useRef } from "react";
import search from "../../assets/SearchInput/search.svg";
import "./index.css";

const SearchInput = ({ onFilterItemsHandler }) => {
  const searchInputRef = useRef();
  const inputFilterBValueHandler = () => {
    const searchValue = searchInputRef.current.value;
    onFilterItemsHandler(searchValue);
  };
  return (
    <form className="search-form">
      <input className="search-form__input" type="text" placeholder="Поиск" onInput={inputFilterBValueHandler} ref={searchInputRef} />
      <img className="search-form__img" src={search} width="22px" alt="search" />
    </form>
  );
};

export default SearchInput;
