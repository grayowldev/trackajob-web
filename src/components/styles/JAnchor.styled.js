import styled from "styled-components";

export const JAnchor = styled.a`
    float: left;
    margin: 18px;
    display: block;
    text-decoration: none;
    margin-left: ${ e => e.mgLeft ? e.mgLeft : '18px'};
    font-size: larger;
`;