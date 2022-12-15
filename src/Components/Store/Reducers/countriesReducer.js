import { 
    GET_COUNTRIES, 
    GET_COUNTRIES_BY_REGION, 
    GET_COUNTRY_BY_NAME, 
    GET_COUNTRY_NAME_BY_CODE, 
    GET_COUNTRIES_BY_NAME, 
    SET_LOADING 
} from "../types";

const CountriesReducerInitState = {
    countries: [],
    country: null,
    countryName: [],
    loading: null,
}

const CountriesReducer = ( state = CountriesReducerInitState, action) => {
    const { type, payload } = action
    switch (type) {
        case GET_COUNTRIES:
            return {...state, countries: payload}

        case GET_COUNTRY_BY_NAME:
            return {...state, country: payload}

        case GET_COUNTRY_NAME_BY_CODE:
            return {...state, countryName: payload}

        case GET_COUNTRIES_BY_REGION:
            return {...state, countries: payload}

        case GET_COUNTRIES_BY_NAME:
            return {...state, countries: payload}

        case SET_LOADING:
            return {...state, loading: payload}
        default:
            return state
    }
}

export default CountriesReducer;