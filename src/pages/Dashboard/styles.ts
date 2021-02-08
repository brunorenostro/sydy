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



a{
  text-text-decoration:none;
}
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
  background-color: #1976D2;
  border-radius: 10px;
  padding: 32px 24px;
  margin: 12px;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;
  color:#fff;
  border: 4px solid transparent;
&:hover{
  border:4px solid #719fb0;
  box-shadow:5px 5px  #719fb0;
}

h1{
  text-align:center;
}

p{
  text-align:center;
font-size:22px;
}

`;