import React from "react";
import styled from "styled-components";

const Home = () => (
  <>
  <h1>CDC Guidline Compliance</h1>
  <h2>Nursing Home Safety</h2>
    <Hero>
    </Hero>
  </>
);

const Hero = styled.div`
  width: 100%;
  height: 70%;
  left: 0px;
  right: 10px;
  background: url("https://www.easttexasmatters.com/wp-content/uploads/sites/34/2020/06/cdc-covid-banner-1.jpg?w=640&h=360&crop=1");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  margin: 30px;
`

export default Home;