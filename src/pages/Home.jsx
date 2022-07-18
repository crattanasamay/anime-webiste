import React from "react";
import Navbar from "./components/Navbar";
import HomeSlider from "./components/HomeSlider";
import Features from "./components/Features";
import Footer from "./components/Footer"
import BestFeatures from "./components/BestFeatures";



import styled from "styled-components";



const HomePage = styled.div`
    margin: 0px;
    padding: 0px;
    height: auto;
    background-color: #12112a;
`

const Home = () =>{

    return(
        <HomePage>
            <Navbar/>
            <HomeSlider/>
            <BestFeatures/>
            <Features/>
            <Footer/>
        </HomePage>
    
    
    )
}

export default Home;