import axios from "axios"

import { 
    GET_COUNTRIES, 
    GET_COUNTRY_BY_NAME, 
    GET_COUNTRY_NAME_BY_CODE, 
    GET_COUNTRIES_BY_REGION, 
    GET_COUNTRIES_BY_NAME, 
    SET_LOADING 
} from "../types"

const countriesApi = 'https://restcountries.com/v2'

export const getCountries = () => async (dispatch) => {
    dispatch({ type: SET_LOADING, payload: true})
    await axios.get(countriesApi + '/all')
        .then(res => {
            const countries = res.data.map(country => ({
                name: country.name,
                population: new Intl.NumberFormat().format(country.population),
                region: country.region,
                capital: country.capital,
                flag: country.flag,
            }))
            dispatch({ type: SET_LOADING, payload: false})
            dispatch({ type: GET_COUNTRIES, payload: countries})
        })
        .catch((err) => console.log('Get Countries Api Error: ', err))
}

export const getCountryByName = (name) => async (dispatch) => {
    dispatch({ type: SET_LOADING, payload: true})
    await axios.get(`${countriesApi}/name/${name}`)
        .then(res => {
            dispatch({ type: SET_LOADING, payload: false})
            dispatch({type: GET_COUNTRY_BY_NAME, payload: res.data[0]})
        })
        .catch(err => console.log('Get Country By Name Api: ', err))
}

export const getCountryNameByCode = (code) => async(dispatch) => {
    await axios.get(`${countriesApi}/alpha?codes=${code}`)
        .then(res => {
            dispatch({type : GET_COUNTRY_NAME_BY_CODE, payload : res.data})
        })
        .catch(err => console.log('Get Country Name Api By Code Error: ', err))
}

export const getCountriesByRegion = (region) => async (dispatch) => {
    dispatch({ type: SET_LOADING, payload: true})
    await axios.get(`${countriesApi}/region/${region}`)
        .then(res => {
            const countries = res.data.map(country => ({
                name: country.name,
                population: new Intl.NumberFormat().format(country.population),
                region: country.region,
                capital: country.capital,
                flag: country.flag,
            }))
            dispatch({ type: SET_LOADING, payload: false})
            dispatch({ type: GET_COUNTRIES_BY_REGION , payload: countries})
        })
        .catch(err => console.log('Get Countries Api By Region Error: ', err))
}

export const getCountriesByName = (name) => async (dispatch) => {
    dispatch({ type: SET_LOADING, payload: true})
    await axios.get(`${countriesApi}/name/${name}`)
        .then(res => {
            const countries = res.data.map(country => ({
                name: country.name,
                population: new Intl.NumberFormat().format(country.population),
                region: country.region,
                capital: country.capital,
                flag: country.flag,
            }))
            dispatch({ type: SET_LOADING, payload: false})
            dispatch({ type: GET_COUNTRIES_BY_NAME , payload: countries})
        })
        .catch(err => console.log('Get Countries Api By Name Error: ', err))
}