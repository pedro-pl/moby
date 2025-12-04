import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { ActionButton, ActualMonth, Container, OtherMonths } from "./styles";

export function MonthFilter(){
    return (
        <Container>
            <ActionButton>
                <CaretLeftIcon size={36} weight="bold" />
            </ActionButton>
            <OtherMonths>OUT - 2025</OtherMonths>
            <OtherMonths>NOV - 2025</OtherMonths>
            <ActualMonth>DEZ - 2025</ActualMonth>
            <OtherMonths>JAN - 2026</OtherMonths>
            <OtherMonths>FEV - 2026</OtherMonths>
            <ActionButton>
                <CaretRightIcon size={36} weight="bold" />
            </ActionButton>
        </Container>
    )
}