import {
  ButtonGoogle,
  Card,
  PageWrapper,
  SeparatorContainer,
} from "./styles";
import { Title } from "../../../globals/texts";
import { InputLabel } from "../../../components/inputs/input-label";
import { useForm } from "react-hook-form";
import { Redirect, Separator } from "../../../globals/styles";
import GoogleLogo from "../../../assets/images/google-logo.svg";
import { StyledButton } from "../../../globals/buttons";
import { useNavigate } from "react-router-dom";

export function Login() {
  const { register } = useForm();
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <Card>
        <Title>Acesse sua conta</Title>
        <ButtonGoogle>
          <img src={GoogleLogo} alt="" />
          Vincular com Google
        </ButtonGoogle>
        <SeparatorContainer>
          <Separator width="20%" height="1px" variant="dark" />
          <span>ou</span>
          <Separator width="20%" height="1px" variant="dark" />
        </SeparatorContainer>
        <InputLabel
          label="Email"
          name="email"
          register={register}
          placeholder="exemplo@email.com"
        />
        <InputLabel
          label="Senha"
          name="password"
          type="password"
          register={register}
          placeholder="********"
        />
        <Redirect onClick={() => navigate("#")}>Esqueci minha senha</Redirect>
        <StyledButton variant="middle" height="6vh">
          Entrar
        </StyledButton>
        <span>
          Ainda não possui cadastro? Cadastre-se <Redirect onClick={() => navigate("/register")}>aqui.</Redirect>
        </span>
      </Card>
    </PageWrapper>
  );
}
