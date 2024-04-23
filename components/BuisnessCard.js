import styled from 'styled-components';

export default function BusinessCard(){
    return <BusinessCardStyling/>
};




const BusinessCardStyling = styled.div`
position: relative;
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-items: center;
/* justify-content: flex-end; */
height: 100vh;
width: 100vw;
justify-content: flex-start;
padding: 1rem;
`