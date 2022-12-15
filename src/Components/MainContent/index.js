import Countries from "./Countries";
import CountryDetail from "./CountryDetail";
import SearchAndFilter from "./SearchAndFilter";

function MainContent() {
    return (  
        <div>
            <SearchAndFilter/>
            <Countries/>
        </div>
    );
}

export default MainContent;