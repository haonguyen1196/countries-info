import styled from "styled-components";
import Filter from "./Filter";
import Search from "./Search";

function SearchAndFilter() {
    return (  
        <SeacrhAndFilterPane>
            <Search/>
            <Filter/>
        </SeacrhAndFilterPane>
    );
}

export default SearchAndFilter;

const SeacrhAndFilterPane = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`