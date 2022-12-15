import styles from './CountryInfoStyle.module.scss';
import clsx from 'clsx';
import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ThemeContext } from '../../ThemeContext/themeContext';
import { getCountryNameByCode } from '../../Store/Actions/countriesAction'
import { Link } from 'react-router-dom';
import ScrollBar from 'react-perfect-scrollbar';

function CountryInfo() {
    const themeContext = useContext(ThemeContext)
    const country = useSelector(state => state.Countries.country)
    const dispatch = useDispatch()
    const countryName = useSelector(state => state.Countries.countryName)

    useEffect(() => {
        if(country) {
            dispatch(getCountryNameByCode(country.borders))
        }
    },[dispatch, country])

    const handleLanguages = (country) => {
        let result = ''
        country.languages.map((language) => {
            if (result === '') {
                return result += language.name
            } else {
                return result = result + '-' + language.name
            }
        })
        return result
    }

    return (  
        <ScrollBar style={{ maxHeight: '70vh', overflow: 'hidden'}}>
            <div className={styles.countryInfo}>
                { country && 
                    <>
                        <h3 className={styles.countryName}>{country.name}</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td className={styles.countryInfoTitle}>Native Name</td>
                                    <td>:</td>
                                    <td className={styles.countryInfoValue}>{country.nativeName}</td>
                                </tr>
                                <tr>
                                    <td className={styles.countryInfoTitle}>Official</td>
                                    <td>:</td>
                                    <td className={styles.countryInfoValue}>{country.altSpellings ? country.altSpellings[1] : undefined}</td>
                                </tr>
                                <tr>
                                    <td className={styles.countryInfoTitle}>Population</td>
                                    <td>:</td>
                                    <td className={styles.countryInfoValue}>{new Intl.NumberFormat().format(country.population)}</td>
                                </tr>
                                <tr>
                                    <td className={styles.countryInfoTitle}>Region</td>
                                    <td>:</td>
                                    <td className={styles.countryInfoValue}>{country.region}</td>
                                </tr>
                                <tr>
                                    <td className={styles.countryInfoTitle}>Sub Region</td>
                                    <td>:</td>
                                    <td className={styles.countryInfoValue}>{country.subregion}</td>
                                </tr>
                                <tr>
                                    <td className={styles.countryInfoTitle}>Capital</td>
                                    <td>:</td>
                                    <td className={styles.countryInfoValue}>{country.capital}</td>
                                </tr>
                                <tr>
                                    <td className={styles.countryInfoTitle}>Top Level Domain</td>
                                    <td>:</td>
                                    <td className={styles.countryInfoValue}>{country.topLevelDomain[0]}</td>
                                </tr>
                                <tr>
                                    <td className={styles.countryInfoTitle}>Currencies</td>
                                    <td>:</td>
                                    <td className={styles.countryInfoValue}>{country.currencies ? `${country.currencies[0].code} - ${country.currencies[0].name}` : undefined}</td>
                                </tr>
                                <tr>
                                    <td className={styles.countryInfoTitle}>Languages</td>
                                    <td>:</td>
                                    <td className={styles.countryInfoValue}>{handleLanguages(country)}</td>
                                </tr>
                                <tr>
                                    <td className={styles.countryInfoTitle}>Border Countries</td>
                                    <td>:</td>
                                    <td className={styles.borderList}>
                                        { countryName && countryName.map((country, index) => 
                                            <Link to={`/country/${country.name}`} key={index}>
                                                <div className={clsx(styles.borderItem, themeContext.theme)}>{country.name}</div>
                                            </Link>
                                        )}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                }
            </div>
        </ScrollBar >
    );
}

export default CountryInfo;