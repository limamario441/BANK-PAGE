import {
  ContainerMain,
  SecaoStyle,
  SecaoNew,
  Cards,
  Card,
  Titulos,
  Lista,
  Cardes2,
  Card2,
  LegendaStyle,
  SecaoEnd,
  FooterStyle,
  FooterStyle1,
  FooterStyle2,
  ImagemStyle,
  End,
 
} from "./styles";
export default function Main() {
  return (
    <ContainerMain>
      <SecaoStyle>     
      <img src="https://www.itau.com.br/media/dam/m/4ca652116de30124/original/desktop_chegouahorade_1920x540_6.gif" alt="" />
      <LegendaStyle>
        <h4>É tempo de crédito no iti Itaú</h4>
        <br />
        <p>Empréstimo do seu jeito, mesmo sem conta. Sujeito a análise.</p>
      </LegendaStyle>
      <img src="https://cdn-icons-png.flaticon.com/128/3670/3670051.png"
       style={{width:'70px',position:'fixed',bottom:'90px',right:'10px',zIndex:'999',cursor:"pointer",height:'50px'}} alt="" />
      </SecaoStyle>

      <SecaoNew>
        <h2>resolva as questões do dia a dia</h2>
        <p>Produtos e serviços para o seu momento de vida.</p>
        <Cards>
          <Card>
            <img
              src="https://www.itau.com.br/media/dam/m/29e03849e7f7054f/original/conta_itau.svg"
              alt="ico"
            />
            <h3>Conta itau</h3>
            <p>a conta que todo mundo ama</p>
          </Card>
          <Card>
            <img
              src="https://www.itau.com.br/media/dam/m/18ea2e60f032ed6f/original/conta_uniclass.svg"
              alt=""
            />
            <h3>Itau Uniclass</h3>
            <p>para quem gosta de praticidade</p>
          </Card>
          <Card>
            <img
              src="https://www.itau.com.br/media/dam/m/5dfcbbd8e57e50fc/original/conta_personnalite.svg"
              alt=""
            />
            <h3>Itau personalité</h3>
            <p>para quem quer exclusividade</p>
          </Card>
        </Cards>
        <Titulos className="container">
          <h2>O cartão de crédito ideal para Você</h2>
          <Lista>
            <img
              src="https://www.itau.com.br/media/dam/m/4cb012c4b5aa2c38/original/1920x540_cartoes_mb.jpg"
              alt=""/>              
           
          </Lista>
        </Titulos>
        <Cardes2>
          <h2>vantagens da conta corrente do Itaú</h2>
          <Card2>
            <h6>investimento</h6>
          </Card2>
          <Card2>
            <h6>iPhone pra Sempre</h6>
          </Card2>
          <Card2>
            <h6>Samsung no Itaú</h6>
          </Card2>
          <Card2>
            <h6>app Itaú</h6>
          </Card2>
          <Card2>
            <h6>cartões de crédito</h6>
          </Card2>
          <Card2>
            <h6>PIX</h6>
          </Card2>
          <Card2>
            <h6>Combinaqui</h6>
          </Card2>
          <Card2>
            <h6>Assistência para o seu Pet</h6>
          </Card2>
          <Card2>
            <h6>Assistência para o seu Pet</h6>
          </Card2>
          <Card2>
            <h6>Assistência para o seu Pet</h6>
          </Card2>
          
        </Cardes2>
      </SecaoNew>
    
    <SecaoEnd>
      <FooterStyle>
        <h3>Nossos produtos</h3>
        <p>conta corrente</p>
        <p>cartões de crédito</p>
        <p>consórcio</p>
        <p>seguros</p>
        <p>investimentos</p>
        <p>renegociação</p>
      </FooterStyle>

      <FooterStyle1>
        <h3>ajuda</h3>
        <p>conta corrente</p>
        <p>cartões de crédito</p>
        <p>consórcio</p>
        <p>seguros</p>
        <p>investimentos</p>
        <p>renegociação</p>
      </FooterStyle1>

      <FooterStyle2>
        <h3>fale com itaú</h3>
        <p>conta corrente</p>
        <p>cartões de crédito</p>
        <p>consórcio</p>
        <p>seguros</p>
        <p>investimentos</p>
        <p>renegociação</p>
      </FooterStyle2>
        
        <ImagemStyle>
         <h4>Baixe App</h4>
        <img src="https://www.itau.com.br/media/dam/m/3a4d25fc28cfb6f6/webimage-app_store_footer_cmsless.png" style={{width:"120px", height:"40px"}} alt="" />
        <img src="https://www.itau.com.br/media/dam/m/4e113c9365e00e2e/webimage-google_play_footer_cmsless.png" style={{width:"120px", height:"40px", marginRight:"10px"}} alt="" />
        </ImagemStyle>
  
    </SecaoEnd>

    <End>
      <h2>abra sua conta</h2>
    </End>
     
    </ContainerMain>
    
  );
}
