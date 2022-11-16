
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighLight } from './styles';

const Feed = () => {
    return (<>
        <Header autenticado={true} />
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
                <UserInfo percentual={35} name="Alexsander Furtado" image="https://avatars.githubusercontent.com/u/91105206?s=400&u=3b130a01c1579678ea673e7387552f628ea39703&v=4"/>           
                <UserInfo percentual={85} name="Alexsander Furtado" image="https://avatars.githubusercontent.com/u/91105206?s=400&u=3b130a01c1579678ea673e7387552f628ea39703&v=4"/>           
                <UserInfo percentual={55} name="Alexsander Furtado" image="https://avatars.githubusercontent.com/u/91105206?s=400&u=3b130a01c1579678ea673e7387552f628ea39703&v=4"/>           
                <UserInfo percentual={95} name="Alexsander Furtado" image="https://avatars.githubusercontent.com/u/91105206?s=400&u=3b130a01c1579678ea673e7387552f628ea39703&v=4"/>           
                <UserInfo percentual={15} name="Alexsander Furtado" image="https://avatars.githubusercontent.com/u/91105206?s=400&u=3b130a01c1579678ea673e7387552f628ea39703&v=4"/>           
            </Column>
        </Container>
    </>)
}

export { Feed }