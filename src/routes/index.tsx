import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../shared/components/home-page';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/home' element={<HomePage />} />
            
            // Redirect to home page if no route matches
            <Route path='*' element={<Navigate to='/home' />} /> 
        </Routes>
    );
};