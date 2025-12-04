import { useLocation } from "react-router-dom";
import { MonthFilter } from "../../components/filters/month-filter";
import { Searchbar } from "../../components/filters/search-bar";
import { Container } from "../../globals/styles";
import { StyledButton } from "../../globals/buttons";
import { SubTitle, Title } from "../../globals/texts";
import {
  Divisor,
  Header,
  Table,
  PageWrapper,
  Tag,
  Tbody,
  Thead,
} from "./styles";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoCardOutline } from "react-icons/io5";
import { PiMoneyWavy } from "react-icons/pi";
import { FaLocationDot, FaPix } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
import { FiEye } from "react-icons/fi";

export function Movements() {
  const path = useLocation().pathname;

  return (
    <Container>
      <PageWrapper>
        <Header>
          <Title>
            Movimentações - {path === "/movements/in" ? "Entrada" : "Saída"}
          </Title>
        </Header>
        <MonthFilter />
        <Searchbar placeholder="Buscar gastos" />
        <Header>
          <SubTitle>Total de {path === "/movements/in" ? "entradas" : "saídas"}: R$ 380,50</SubTitle>
          <StyledButton variant="middle">Registrar nova {path === "/movements/in" ? "entrada" : "saída"}</StyledButton>
        </Header>

        <Table>
          <Thead>
            <tr>
              <th>Gasto</th>
              <th>Local</th>
              <th>Categoria</th>
              <th>Valor</th>
              <th>Meio de pagamento</th>
              <th>Data</th>
              <th>Detalhes</th>
            </tr>
          </Thead>
          <Tbody>
            <tr>
              <td>Hambúrguer</td>
              <td>Tradi</td>
              <td>Alimentação</td>
              <td>R$ 60,00</td>
              <td>
                <Tag>
                  <IoCardOutline size={18} />
                  <Divisor />
                  <span>Crédito - à vista</span>
                </Tag>
              </td>
              <td>03/12/2025</td>
              <td>
                <StyledButton variant="light">
                  <FiEye size={18} />
                  Ver detalhes
                </StyledButton>
              </td>
            </tr>
            <tr>
              <td>Sorvete</td>
              <td>Baccio di latte</td>
              <td>Alimentação</td>
              <td>R$ 28,00</td>
              <td>
                <Tag>
                  <IoCardOutline size={18} />
                  <Divisor />
                  <span>Débito</span>
                </Tag>
              </td>
              <td>03/12/2025</td>
              <td>
                <StyledButton variant="light">
                  <FiEye size={18} />
                  Ver detalhes
                </StyledButton>
              </td>
            </tr>
            <tr>
              <td>Mercado</td>
              <td>Barbosa supermecados</td>
              <td>Gasto pessoal</td>
              <td>R$ 18,50</td>
              <td>
                <Tag>
                  <PiMoneyWavy size={18} />
                  <Divisor />
                  <span>Dinheiro</span>
                </Tag>
              </td>
              <td>03/12/2025</td>
              <td>
                <StyledButton variant="light">
                  <FiEye size={18} />
                  Ver detalhes
                </StyledButton>
              </td>
            </tr>
            <tr>
              <td>Gasolina</td>
              <td>Posto Sette</td>
              <td>Gasto pessoal</td>
              <td>R$ 50,00</td>
              <td>
                <Tag>
                  <FaPix size={18} />
                  <Divisor />
                  <span>Pix</span>
                </Tag>
              </td>
              <td>03/12/2025</td>
              <td>
                <StyledButton variant="light">
                  <FiEye size={18} />
                  Ver detalhes
                </StyledButton>
              </td>
            </tr>
          </Tbody>
        </Table>
      </PageWrapper>
    </Container>
  );
}
