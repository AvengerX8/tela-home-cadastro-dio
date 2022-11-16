import React from 'react'
import logo from '../../assets/logo-dio.png';
import { Button } from '../Button';

//Importando os componentes criados no styles.js do meu Header
import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles';

//Nesta função é onde realizo a estruturação do meu Component da página com os elementos criados
const Header = ({autenticado}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="logo da dio" />
                {autenticado ? (
                    <>
                        <BuscarInputContainer>
                            <Input placeholder='Buscar...'/>
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null}
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src="https://avatars.githubusercontent.com/u/91105206?s=400&u=3b130a01c1579678ea673e7387552f628ea39703&v=4" />   
                ) : (
                    <>
                        <MenuRight href="#">Home</MenuRight>
                        <Button title="Entrar"/>
                        <Button title="Cadastrar"/>
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }
