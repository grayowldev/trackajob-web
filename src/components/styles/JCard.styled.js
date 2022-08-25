import styled from 'styled-components';

export const JCard = styled.div`
    width: 360px;
    height: 120px;
    border-radius: 10px;
    margin: 10px;
    padding-top: 20px;
    border: 1.3px solid;
    border-color: #E0DFDC;
    background-color: white;
    
    #company {
        padding-left: 60px;
        padding-top: 4px;
        text-align: left;
    }

    #position {
        padding-left: 60px;
        text-align: left;
        font-size: 18px;
        color: blue;
    }

    #location {
        padding-left: 60px;
        padding-top: 4px;
        text-align: left;
        font-size: 14px;
    }

    &:hover {
        border-color: blue;
    }
`;