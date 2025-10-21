import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <section>
                    <Outlet></Outlet>
                </section>
                <section className='sidebar'></section>
            </main>
        </div>
    );
};

export default HomeLayout;