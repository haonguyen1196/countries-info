import { useState } from 'react';
import { MdSearch } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Search() {
    const [ valueInput, setValueInput ] = useState('')
    const navigate = useNavigate()

    const handleOnKeyDown = (e) => {
        if (e.keyCode === 13) {
            valueInput !== '' ? navigate(`/search/${valueInput}`) : navigate('/')
        }
    }

    return (  
        <SearchPane>
            <h3>Search Country:</h3>
            <SearchElement>
                <input type='text' 
                    placeholder='Input the and enter to search...'
                    onChange={e => setValueInput(e.target.value)}
                    value={valueInput}
                    onKeyDown={handleOnKeyDown}
                >
                </input>
                <Link style={{ width: '40px', height: '100%'}} to={valueInput !== '' ? `/search/${valueInput}` : '/'}>
                    <div >
                        <MdSearch className='icon'/>
                    </div>
                </Link >
            </SearchElement>
        </SearchPane>
    );
}

export default Search;

const SearchPane = styled.div`
    width: 320px;
    margin-top: 20px;

    h3 {
        font-size: 18px;
        font-weight: 600;
        text-shadow: var(--text-shadow);
    }
`

const SearchElement = styled.div`
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 34px;
    border-radius: 4px;
    box-shadow: var(--box-shadow);
    overflow: hidden;
    background-color: #fff;

    input {
        width: 100%;
        font-size: 18px;
        margin: 0 8px;
        font-weight: 500;
        border: 0;
        outline: 0;
    }

    .icon {
        width: 100%;
        height: 100%;
        background-color: rgb(170, 170, 170);
        padding: 2px;
        opacity: 0.75;
        cursor: pointer;
        transition: opacity 0.2s linear;

        &:hover {
            opacity: 1;
        }
    }
`