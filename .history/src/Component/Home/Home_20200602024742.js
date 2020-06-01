import React from 'react';
import './Home.css'
import './'
import About from './About';
import WhyUs from './WhyUs';
import Trainning from './Trainning';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <>

                <About></About>
                {/* <Trainning></Trainning> */}
                <WhyUs></WhyUs>
                <Footer></Footer>
  
            {/* <section>
                <About></About>
            </section>

            <section>
                <Trainning></Trainning>
            </section>

            <section>
                <WhyUs></WhyUs>
            </section>
            <section>
                <Footer></Footer>
            </section> */}
        </>
    );
};

export default Home;