
import {Container, LogoImg, InputStyle,ButtonStyle,NavStyle,ButtonBtn,} from '../styles';

export default function Header() {
  return (
    <Container>
        <LogoImg>
            <img src="https://i.pinimg.com/564x/28/d2/64/28d2644092c1a80ef874bc01bf2dedb0.jpg" alt="logo" />
        </LogoImg>
      <InputStyle>
        <input className='ag' type="text" placeholder='agência'/>
         <p>|</p>
        <input type="text" placeholder='conta' />
      </InputStyle>
           <ButtonStyle>
           <button>
              <img   src="https://cdn-icons-png.flaticon.com/128/7971/7971272.png" alt="" />
          </button>
           </ButtonStyle>
         <NavStyle>
            <a href="">Cliente</a>
            <a href="">Empresa</a>
            <a href="">Finaciamentos</a>
            <a href="">Credito</a>
         </NavStyle>
        <ButtonBtn>
        <button>abra sua conta</button>
        </ButtonBtn> 
    </Container>
  )
}
