import styled from 'styled-components';

//Component responsável pela criação do estilo do cabeçalho
export const Container = styled.div`
    width: 100%;
    max-width: 80%;
    height: 47px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`

//Component responsável pelo alinhamento em linha
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

//Component responsável pelo alinhamento em colunas
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
//Component responsável pelo alinhamento do conteúdo
export const Wrapper = styled.div`
    background-color: #151515;
    width: 100%;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
`
//Component responsável pelo input de pesquisa
export const BuscarInputContainer = styled.div`
    width: 175px;
    height: 30px;
    background: #2D2D37;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;

    display: flex;
    align-items: center;
    justify-content: center;
`

//Component responsável pelo menu
export const Menu = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 18px;
    line-height: 25px;
    color: #fff;
    margin-right: 12px;
    text-decoration: none;
`
export const MenuRight = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 12px;
    line-height: 25px;
    color: #fff;
    margin-right: 12px;
    text-decoration: none;
`
//Component responsável pela foto de perfil do usuário
export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 2px solid #fff;
`

//Component responsável pelo Input
export const Input = styled.input`
    background: transparent;
    flex: 1;
    border: 0;
    color: #fff;
`
