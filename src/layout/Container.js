import React from 'react'
import Content from './Content';
import Sidebar from './Sidebar';
import Widgets from './Widgets';

const Container = () => {
    return (
        <div className='flex min-h-screen bg-black max-w-7xl mx-auto border'>
            <Sidebar />
            <Content />
            <Widgets />
        </div>
    )
}

export default Container