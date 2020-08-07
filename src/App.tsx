import React from "react";
import NavigationBar from "./components/NavigationBar";
import styled from "styled-components";
import NoticeBar from "./components/NoticeBar";

const Container = styled.div`
  margin: 0 4rem;
  display: grid;
  grid-template-rows: repeat(5, 100px);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.5rem;
`;

const NoticeWrapper = styled.div`
  display: grid;
  grid-column: 1 / 3;

  margin-bottom: 1rem;
`;

const SectionOneStyle = styled.section`
  display: grid;
  grid-column: 1 / 2;
  grid-row: 2 / 6;
`;

const SectionTwoStyle = styled.section`
  display: grid;
  grid-column: 2 / 3;
  grid-row: 2 / 6;
`;

const App: React.FC = () => {
  return (
    <>
      <NavigationBar />
      <Container>
        <NoticeWrapper>
          <NoticeBar>(대충 공지 같이 보이는 글)</NoticeBar>
        </NoticeWrapper>

        <SectionOneStyle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at
            lorem diam. Vivamus ultrices mollis sem, eu mattis augue elementum
            nec. Donec ligula libero, tincidunt placerat tincidunt eget, congue
            ut dolor. Aenean varius pellentesque rutrum. Fusce diam lacus,
            venenatis ac iaculis vitae, vehicula non massa. Aliquam dignissim at
            elit at fringilla. Ut ac est nulla. Nulla sodales sagittis
            scelerisque. Nam imperdiet at nisl eget varius. Aenean molestie
            aliquet elit, congue molestie mauris consequat et. Vivamus commodo
            id odio vitae volutpat. Integer pretium tempus mauris lacinia
            scelerisque. Aliquam et nibh a mi lacinia pretium. Duis tellus elit,
            semper blandit justo vel, hendrerit malesuada purus. Fusce sed
            consectetur sapien.
          </p>
        </SectionOneStyle>

        <SectionTwoStyle>
          <p>
            In et aliquam lacus. Phasellus lobortis risus eu erat auctor
            placerat. Etiam semper nibh neque, et viverra nulla gravida sit
            amet. Sed id nibh id quam laoreet vestibulum sed non dolor. Proin
            dignissim elementum pharetra. Mauris sed erat arcu. In quis ante
            aliquam, vestibulum dui quis, ullamcorper dolor. Nullam a tempor
            erat. Cras luctus a ante in posuere. Donec augue lacus, tincidunt in
            elit posuere, placerat tincidunt lorem. Nulla iaculis mi arcu, ut
            scelerisque arcu fermentum porta. Phasellus condimentum lorem lacus,
            eu convallis leo elementum id. Aliquam porta tempus luctus.
          </p>
        </SectionTwoStyle>
      </Container>
    </>
  );
};

export default App;
