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
  justify-content: center;

`;

export const Card = styled.div`

display: block;
  position: relative;
  max-width: 262px;
  background-color: #f2f8f9;
  border-radius: 4px;
  padding: 32px 24px;
  margin: 12px;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;

  h1 {
  color: #262626;

  line-height: 24px;
  font-weight: 700;
  margin-bottom: 4px;
}

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: #00838d;
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.25s ease-out;
  }

  &:hover:before {
    transform: scale(21);
  }
}

&:hover {
  p {
    transition: all 0.3s ease-out;
    color: rgba(255, 255, 255, 0.8);
  }z'
  h1 {
    transition: all 0.3s ease-out;
    color: #ffffff;
  }
}

`;