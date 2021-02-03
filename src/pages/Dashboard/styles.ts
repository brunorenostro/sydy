import styled from 'styled-components';

export const Container = styled.div`
width:100%;
max-width:1120px;
min-width:300px;
margin:0 auto;
margin-top:40px;
padding:40px 20px;
min-height:800px;
border-radius:30px;

`;


export const CardContainer = styled.div`
width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  

`;

export const Card = styled.div`

  display: block;
  position: relative;
  max-width: 262px;
  min-width:200px ;
  background-color: #a4a8d1;
  border-radius: 10px;
  padding: 32px 24px;
  margin: 12px;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;
  color:#fff;

h1{
  text-align:center;
}

`;