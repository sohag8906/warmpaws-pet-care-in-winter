import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Hero from '../pages/Hero';
import Rightside from '../pages/WinterTips';
import WinterTips from '../pages/WinterTips';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
             <section className='liftside'>
                    <Home></Home>
                    <Hero></Hero>
                    <WinterTips></WinterTips>

                </section>
            <main className=''>
               
                <section>
                    
                    <Outlet>
                        
                    </Outlet>
                </section>
                <section className='sidebar'>
                    
                </section>
            </main>
        </div>
    );
};

export default HomeLayout;