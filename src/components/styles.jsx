import styled from 'styled-components';

export const Container = styled.div`

display: flex;
width: 100%;
height: 70px;
background-color:orangered;

`
export const LogoImg = styled.div`

margin: 12px;
img{
    width: 45px; 
    border-radius:6px
}

`
export const InputStyle = styled.div`
background-color: #333;
display: flex;
justify-content: center;
margin: 10px;
width: 170px;
height: 50px;
border-radius: 3px;
p{
    margin-top: 15px
 }
input{
  background-color: #666;
  display: flex;
  justify-content: center;
  margin-top: 11px;
  border: none;
  width: 60px;
  height: 25px;
  border-radius: 3px;
  text-align: center;

}
`
export const LegendaStyle =styled.div`

    position: absolute;
    left: 10px;
    bottom: 300px;
    color: white;
    font-size: 40px;
 

`
export const ButtonStyle = styled.div`


button{
  background-color: #333;
  width: 50px;
  height: 50px;
  margin: 10px;
  border-radius: 3px;
  cursor: pointer;
  
}
  
  img{
   
    margin-left:13px;
    display: flex;
    width:20px
    
  }
`
export const ButtonBtn = styled.div`

  margin-top: 17px;
  width: 150px;
  height: 35px;
button{   
    font-size: 17px;
    width: 150px;
    height: 35px;
    border: 1px solid #000;
    background-color: orangered;
    cursor: pointer;
}
  button:hover{
  color: orangered;
  background-color: #000;
  }
`
export const NavStyle = styled.div`

margin-left: 390px;
margin-top: 25px;

a{
font-size: 19px;
color: #fff;
text-decoration: none;
margin: 10px;

 
}

a:hover{
  background-color: #000;
 
  
}
`
export const ContainerMain = styled.div`


`
export const SecaoStyle = styled.div`

    left: 10px;
    bottom: 10px;
    color: rgba(255,255,0);
    font-size: 40px;
img{
  margin:0;
  width:100%;
  height:500px;
}

p{
  font-size: 19px;
}
`
export const SecaoNew = styled.div`

background-color: #222;

h2{
  font-size: 30px;
  margin: 20px;
}
p{
  margin: 20px;
}

`
export const Cards = styled.div`

 display: flex;
 margin: 10px;

`
export const Card = styled.div`

width: 420px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  height: 400px;
  justify-content: center;
  align-items: center;
  border: 1px solid #333 ;

  img{
  margin: 10px;
}
`
export const Titulos =styled.div`

h2{
  text-align: center;
  font-size: 35PX;
  color: orangered;
}

h5{
  font-size: 19px;
  text-align: center;
  color: #222;
  margin: 16px;
}
`
export const Lista = styled.div`

img{
  width:100%;
}

`
export const Cardes2 = styled.div`

 margin-left: 120px;
 margin: 20px;

h2{
  color: orangered;
  text-align: center;
 
}

`

export const Card2 =styled.div`

  display: flex;
  float: left;
  width: 200px;
  margin: 30px;
  height: 150px;
  justify-content: center;
  align-items: center;
  background-color: 333;
  border: 1px solid orangered;
  border-radius: 2px;
  cursor: pointer;

`


export const SecaoEnd = styled.div`

display:flex;
background-color: #333;
width:100%;
height:400px;
border-top: 1px solid orangered;
img{

  margin-top: 80px;
  margin-left: 100px;
 
}





`

export const FooterStyle = styled.div`




h3{
  color: orangered;
  margin-top: 20px;
  margin-left: 15px
  
}

p{
  margin: 20px;
  color: #333;
  cursor: pointer;
}

p:hover{

  color: orangered;
}

`
export const FooterStyle1 = styled.div`

h3{
  color: orangered;
  display:flex;
  margin-top:20px;
  margin-left: 100px
}

p{
  margin: 20px;
  margin-left: 100px;
  color: #333;
  cursor: pointer;
  
}

p:hover{

color: orangered;
}


`

export const FooterStyle2 = styled.div`

h3{
  color: orangered;
  display:flex;
  margin-top:20px;
  margin-left: 100px
}
p{
  margin: 20px;
  margin-left: 100px;
  color: #333;
  cursor: pointer;
}

p:hover{

color: orangered;
}


`

export const ImagemStyle = styled.div`

 display:block;
 margin: 70px;

h4{

  color: orangered;
  text-align: center;
  margin-left: 80px
}
`

export const End = styled.div`

background-color: orangered;
height: 50px;
cursor: pointer;

h2{

  text-align:center;
  padding: 10px;
}



`