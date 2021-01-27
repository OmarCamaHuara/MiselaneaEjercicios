import styled from 'styled-components';
import db from '../db.json';

import Widget from '../src/components/Widget'

const BackgroundImage = styled.div`
  background-image: url(${ db.bg });
  flex: 1;
  background-size: cover;
  background-position: center;
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <BackgroundImage>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            2021
          </Widget.Header>
          <Widget.Content>
            <h1>Omar</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magni quaerat, optio laborum quas maiores dicta officia itaque, iusto dolor porro dolorum voluptate nam ad aliquam? Blanditiis eius officiis minus?</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>42</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magni quaerat, optio laborum quas maiores dicta officia itaque, iusto dolor porro dolorum voluptate nam ad aliquam? Blanditiis eius officiis minus?</p>
          </Widget.Content>
        </Widget>
      </QuizContainer>
    </BackgroundImage>
  )
}
