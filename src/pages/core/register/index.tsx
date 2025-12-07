import { useForm } from "react-hook-form";
import { InputLabel } from "../../../components/inputs/input-label";
import { StyledButton } from "../../../globals/buttons";
import { Title } from "../../../globals/texts";
import { Card, PageWrapper } from "./styles";
import { useNavigate } from "react-router-dom";
import { Redirect } from "../../../globals/styles";

export function RegisterUser() {
  const { register } = useForm();
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <Card>
        <Title>Cadastre-se</Title>
        <InputLabel
          label="Nome"
          name="name"
          register={register}
          placeholder="Seu nome"
        />
        <InputLabel
          label="Email"
          name="email"
          register={register}
          placeholder="exemplo@email.com"
        />
        <InputLabel
          label="Repetir senha"
          name="password"
          type="password"
          register={register}
          placeholder="********"
        />
        <InputLabel
          label="Senha"
          name="password"
          type="password"
          register={register}
          placeholder="********"
        />
        <StyledButton variant="middle" height="6vh">
          Cadastrar
        </StyledButton>
        <span>
          Já possui cadastro? Entre{" "}
          <Redirect onClick={() => navigate("/login")}>aqui.</Redirect>
        </span>
      </Card>
    </PageWrapper>
  );
}
