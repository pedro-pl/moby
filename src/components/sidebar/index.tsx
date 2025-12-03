import {
  Container,
  Header,
  Item,
  NavigateSection,
  Section,
  Separator,
} from "./styles";
import Logo from "../../assets/logos/moby-logo-full.png";
import { GearIcon, TextOutdentIcon } from "@phosphor-icons/react";
import { TbLayoutDashboard } from "react-icons/tb";
import { PiChartLineUpBold } from "react-icons/pi";
import {
  MdOutlineArrowCircleUp,
  MdOutlineArrowCircleDown,
} from "react-icons/md";
import { PiPiggyBankBold } from "react-icons/pi";
import { LuCalendarDays } from "react-icons/lu";

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: (e: boolean) => void;
};

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <Container open={isOpen}>
      <Header>
        <img src={Logo} alt="" />
        <TextOutdentIcon
          size={24}
          weight="bold"
          onClick={() => setIsOpen(false)}
        />
      </Header>
      <Separator />
      <Section>
        <NavigateSection>
          <Item to="/">
            <TbLayoutDashboard size={22} />
            Resumo
          </Item>
          <Item to="/investments">
            <PiChartLineUpBold size={22} />
            Investimentos
          </Item>
          <Item to="/movements/in">
            <MdOutlineArrowCircleUp size={22} />
            Entradas
          </Item>
          <Item to="/movements/out">
            <MdOutlineArrowCircleDown size={22} />
            Saídas
          </Item>
          <Item to="/goals">
            <PiPiggyBankBold size={22} />
            Objetivos
          </Item>
          <Item to="/calendar">
            <LuCalendarDays size={22} />
            Calendário
          </Item>
        </NavigateSection>
        <Item to="/invest">
            <GearIcon size={22} weight="bold" />
            Configurações
        </Item>
      </Section>
    </Container>
  );
}
