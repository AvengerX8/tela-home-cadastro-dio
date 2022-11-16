import React from 'react'

import { CardContainer,Content,HasInfo,ImageBackground,PostInfo,UserInfo,UserPicture } from './styles';
const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbQSdV_GDmjpOjRk00W9aoRpyLu7TzVe9dhg&usqp=CAU"/>
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/91105206?s=400&u=3b130a01c1579678ea673e7387552f628ea39703&v=4" />
                <div>
                    <h4>Alexsander Furtado</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito no curso de HTML e CSS no Bootcamp Dio Global Avanade...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>&#128402; 10</p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }
