import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
interface Props {}

const SearchInput = (props: Props) => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <CiSearch />
    </div>
  );
};

export default SearchInput;
