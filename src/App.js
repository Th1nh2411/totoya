import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { allRoutes } from './Routes';
import DefaultLayout from './layout/DefaultLayout';
import { Fragment, useEffect, useState } from 'react';
import config from './config';
import dayjs from 'dayjs';
import LocalStorageManager from './utils/LocalStorageManager';
import Home from './Pages/Home/Home';
import useModals from './hooks/useModals';
import AuthGuard from './utils/AuthGuard';
import ExceptionPage from './Pages/ExceptionPage';

function App() {
    const { allModals } = useModals();
    return (
        <div className="App">
            <Routes>
                {allRoutes.map((route, index) => {
                    let Layout = DefaultLayout;
                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }
                    const Element = route.component;
                    const renderElement = route.auth ? (
                        <AuthGuard>
                            <Element />
                        </AuthGuard>
                    ) : (
                        <Element />
                    );
                    return <Route exact key={index} path={route.path} element={<Layout>{renderElement}</Layout>} />;
                })}
                <Route exact path={'*'} element={<ExceptionPage status="404" />} />
            </Routes>
            {allModals.map((item, index) => (
                <Fragment key={index}>{item.content}</Fragment>
            ))}
        </div>
    );
}

export default App;
