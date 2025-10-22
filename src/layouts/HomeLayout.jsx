import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Hero from '../pages/Hero';
import WinterTips from '../pages/WinterTips';
import Footer from '../components/Footer';

const HomeLayout = () => {
    const location = useLocation();
    const showBanner = location.pathname === '/';

    return (
        <div className='flex flex-col min-h-screen'>
            {/* Navbar সব page এ */}
            <header>
                <Navbar />
            </header>

            {/* শুধু homepage এ Banner/hero দেখাবে */}
            {showBanner && (
                <section className='liftside'>
                    <Home />
                    <Hero />
                    <WinterTips />
                </section>
            )}

            {/* Child routes */}
            <main className='flex flex-col flex-grow'>
                <Outlet />
            </main>

            {/* Footer সব page এ */}
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default HomeLayout;
