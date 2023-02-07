import { MagnifyingGlass } from "phosphor-react";
import { StyledSearchForm } from "./styles";

export function SearchForm() {
  return (
    <>
      <StyledSearchForm>
        <input type="text" placeholder="Search transaction(s)" />
        <button type="submit">
          <MagnifyingGlass size={20} /> Search
        </button>
      </StyledSearchForm>
    </>
  );
}
