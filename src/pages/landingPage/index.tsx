import {
  Header,
  Functionalities,
  Voluntaries,
  InformationCard,
  Institutions,
  InstitutionsCard,
  Footer,
} from "./styles";

import { Link } from "react-router-dom";
export const LandingPage = () => {
  return (
    <>
      <Header>
        <span>bom ancião</span>
        <div>
          <button><Link to="/login-voluntary">Entrar</Link></button>
          <button>Cadastrar</button>
        </div>
      </Header>
      <Functionalities>
        <div className="func__col-1">
          <img
            src="http://recantoidosoaraxa-com-br.umbler.net/wp-content/uploads/2020/03/3-Desenho-Idosos.png"
            alt=""
          />
        </div>
        <div className="func__col-2">
          <h1>Lorem Ipsum</h1>
          <p>Lorem Ipsum Lorem Ipsum</p>
          <button>Começe Agora</button>
        </div>
      </Functionalities>
      <Voluntaries>
        <h2>Lorem Ipsum</h2>
        <div>
          <InformationCard>Information</InformationCard>
          <InformationCard>Information</InformationCard>
          <InformationCard>Information</InformationCard>
        </div>
      </Voluntaries>
      <Institutions>
        <h2>Lorem Ipsum</h2>
        <div>
          <InstitutionsCard>Information</InstitutionsCard>
          <InstitutionsCard>Information</InstitutionsCard>
          <InstitutionsCard>Information</InstitutionsCard>
        </div>
      </Institutions>
      <Footer>
        <h3>Footer</h3><br/>
        <Link to="/login-institution"><h3>Sou instituição</h3></Link>
      </Footer>
    </>
  );
};
