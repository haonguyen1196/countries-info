import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { ThemeContext } from "../../ThemeContext/themeContext";
import CountryInfo from "./CountryInfo";
import { getCountryByName } from "../../Store/Actions/countriesAction";
import Loading from "../../Loading/Loanding";

function CountryDetail() {
    const themeContext = useContext(ThemeContext)
    const slug = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const country = useSelector(state => state.Countries.country)
    const loading = useSelector(state => state.Countries.loading)
    
    useEffect(() => {
        dispatch(getCountryByName(slug.countryName))
    },[slug.countryName, dispatch])

    return ( 
            <Wrapper>
                <div className={`goBackBtn ${themeContext.theme}`} onClick={() => navigate(-1)}>Go back</div>
                {loading ? <Loading/> : 

                <CountryContainer>
                    <div className="flagCountry">
                        <img src={country && country.flag} alt=""/>
                    </div>
                    <CountryInfo/>
                </CountryContainer>
                }
            </Wrapper> 
    );
}

export default CountryDetail;

const Wrapper = styled.div`
    padding-top: 20px;

    .goBackBtn {
        width: 80px;
        height: 28px;
        font-size: 16px;
        font-weight: 500;
        text-align: center;
        line-height: 24px;
        padding: 2px 4px;
        filter: brightness(0.9);
        box-shadow: var(--box-shadow);
        cursor: pointer;
        user-select: none;
        border-radius: 4px;
        transition: all 0.2s linear;

        &:hover {
            filter: brightness(1);
            font-weight: bold;
        }
    }
`

const CountryContainer = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 800px) {
        flex-direction: row;
    }

    .flagCountry {
        max-width: 400px;
        width: 100%;
        height: 100%;
        margin-bottom: 12px;
        box-shadow: var(--box-shadow);

        img {
            width: 100%;
            height: 100%;
        }
    }
`