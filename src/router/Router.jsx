import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import Main from '../components/Main/Main';
import PetsSupplies from '../components/PetsSupplies/PetsSupplies';

const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        children: [
            {
                path: '/',
                Component: Main
            },
            {
                path: '/petsSupplies',
                Component: PetsSupplies
            }
        ]
    }
])

export default router;