import * as AlertDialog from '@radix-ui/react-alert-dialog';

import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import logoImg from '../../assets/logo.svg'

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />

                <AlertDialog.Root>
                    <AlertDialog.Trigger asChild>
                        <NewTransactionButton>Nova transação</NewTransactionButton>
                    </AlertDialog.Trigger>

                    <AlertDialog.Portal>
                        <AlertDialog.Overlay />
                        <AlertDialog.Content>
                            <AlertDialog.Title>Nova transação</AlertDialog.Title>
                            <AlertDialog.Cancel />
                        </AlertDialog.Content>
                    </AlertDialog.Portal>
                </AlertDialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}