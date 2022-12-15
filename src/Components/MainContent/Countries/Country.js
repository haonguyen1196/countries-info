import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ThemeContext } from "../../ThemeContext/themeContext"

function Country({country}) {
    const themeContext = useContext(ThemeContext)

    return (  
        <Link to={`/country/${country.name}`}>
            <CountryCard className={themeContext.theme}>
                <div className="flag">
                    <img src={country.flag} alt=""/>
                </div>
                <CountryInfo>
                    <h3>{country.name}</h3>
                    <div>
                        Population:  
                        <span>{country.population}</span>
                    </div>
                    <div>
                        Region:  
                        <span>{country.region}</span>
                    </div>
                    <div>
                        Capital:   
                        <span>{country.capital}</span>
                    </div>
                </CountryInfo>
            </CountryCard>
        </Link>
    );
}

export default Country;

const CountryCard = styled.div`
    max-width: 420px;
    width: 100%;
    overflow: hidden;
    border-radius: 4px;
    filter: brightness(1);
    user-select: none;
    cursor: pointer;
    margin-bottom: 12px;
    box-shadow: var(--box-shadow);

    &:hover {
        filter: brightness(0.9);
    }

    &:hover img {
        transform: scale(1.1);
    }

    .flag {
        width: 100%;
        height: 160px;
        overflow: hidden;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: scale 0.2s linear;
        }
    }
`

const CountryInfo = styled.div`
    padding: 10px 16px;

    h3 {
        height: 50px;
        font-size: 20px;
        font-weight: bold;
        margin: 16px 0;
    }

    div {
        font-size: 16px;
        font-weight: bold;
        margin: 4px 0;

        span {
            font-weight: 400;
            padding-left: 4px;
        }
    }
`