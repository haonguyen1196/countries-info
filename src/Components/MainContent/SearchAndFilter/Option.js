import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Option({region}) {
    const navigate = useNavigate()

    const handleNavigate = () => {
        if(region.value !== 'All') {
            navigate(`/region/${region.value}`)
        } else {
            navigate('/')
        }
    }

    return (  
        <OptionItem onClick={handleNavigate}>
            <region.icon/>
            <div>{region.value}</div>
        </OptionItem>
    );
}

export default Option;

const OptionItem = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    padding: 4px 8px;
    cursor: pointer;

    span {
        margin-left: 4px;
    }

    &:hover {
        background-color: var(--select-option-color);
        font-weight: bold;
    }
`