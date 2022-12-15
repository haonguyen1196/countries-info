import { FaChevronDown } from 'react-icons/fa'
import styled from 'styled-components';
import { useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ThemeContext } from '../../ThemeContext/themeContext'
import Options from './Options';

function Filter() {
    const themeContext = useContext(ThemeContext)
    const [isShowOption, setIsShowOption] = useState(false)
    const refSelect = useRef()
    const {regionName} = useParams()
    const [optionValue, setOptionValue] = useState('All')

    useEffect(() => {
        if(regionName) {
            setOptionValue(regionName)
        } else {
            setOptionValue('All')
        }
    }, [regionName])

    const handleShowOption = (e) => {
        if (refSelect.current) {
            setIsShowOption(refSelect.current.contains(e.target))
        } else {
            setIsShowOption(refSelect.current.contains(e.target))
        }       
    }

    useEffect(() => {
            document.addEventListener('click', handleShowOption)
        return () => {
            document.removeEventListener('click', handleShowOption)
        }
    },[isShowOption])


    return (  
        <FilterPane >
            <h3>Filter by regions:</h3>
            <SelectPane>
                <Select className={themeContext.theme} ref={refSelect} onClick={handleShowOption} >
                    <span>{optionValue}</span>
                    <FaChevronDown/>
                </Select>
                <Options isShowOption={isShowOption}/>
            </SelectPane>
        </FilterPane>
    );
}

export default Filter;

const FilterPane = styled.div`
    margin-top: 20px;
    max-width: 160px;
    width: 100%;

    h3 {
        font-size: 18px;
        font-weight: 600;
        text-shadow: var(--text-shadow)
    }
`

const SelectPane = styled.div`
    width: 100%;
    margin-top: 8px;
`

const Select = styled.div`
    height: 34px;
    box-shadow: var(--box-shadow);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px;
    border-radius: 4px;
    user-select: none;
    position: relative;
    cursor: pointer;
    
    span {
        font-size: 18px;
        font-weight: bold;
    }
`