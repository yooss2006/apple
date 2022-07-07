import React, { useState } from "react";
import styled from "styled-components";
import { MdCancel, MdSearch } from "react-icons/md";
const Search = () => {
  const [text, setText] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleSearchReset = () => {
    setText("");
  };
  return (
    <SearchStyle>
      <div className="icon search">
        <MdSearch />
      </div>
      <input
        type="Search"
        placeholder="apple.com 검색"
        onChange={handleSearch}
        value={text}
      />
      <button type="button" className="icon cancel" onClick={handleSearchReset}>
        <MdCancel />
      </button>
    </SearchStyle>
  );
};

const SearchStyle = styled.div`
  position: relative;
  font-size: 17px;
  .icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .icon.search {
    left: 1em;
  }
  .icon.cancel {
    right: 1em;
    cursor: pointer;
  }
  .icon svg {
    width: 1.1em;
    height: 1.1em;
    color: #86868b;
  }
  input {
    width: calc(100% - 20px);
    margin: 0 10px;
    padding: 10px 2em;
    font-size: inherit;
    display: block;
    border-radius: 10px;
    border: none;
    color: #f5f5f7;
    background-color: #000000c0;
  }
  input:focus {
    outline: none;
  }
`;

export default Search;
