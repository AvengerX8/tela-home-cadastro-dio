import { useNavigate } from 'react-router-dom';
// import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { InputR } from '../../components/InputR';

// import { api } from '../../services/api';
import { Column, Container, AccountText, InfoText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles';

const Register = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/feed')
    }

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com Experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas. 
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubtitleLogin>Faça seu login and make the change.</SubtitleLogin>
                    <form>
                        <InputR name="name" placeholder="Nome completo"/>
                        <InputR name="email" placeholder="E-mail"/>
                        <InputR name="password" placeholder="Senha" type="password"/>
                        <Button title="Entrar" variant="secondary" onClick={handleClickSignIn}/>
                    </form>
                    <Row>
                        <InfoText>
                            Ao clicar em "criar uma conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                        </InfoText><br/>
                        <AccountText>Já tenho uma conta. <a href='/login'>Fazer login</a></AccountText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Register }