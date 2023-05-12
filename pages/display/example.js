import { useContext, useEffect } from 'react';
import AppContentContext from '../../components/layout/appcontentcontext';
import { classNames } from 'primereact/utils';

const DisplayExample = ({ dark, theme }) => {
     const wrapperClassName = classNames('layout-wrapper', {
        'layout-wrapper-dark': dark,
        'layout-wrapper-light': !dark
    });

    useEffect(() => {
        console.log('dark:', dark, 'theme:', theme);
    }, [dark, theme]);

    return (
        <div className={wrapperClassName}>
            <div className="layout-content p-0 m-0 h-screen flex justify-content-center align-items-center">
                <div className="card">
                    <div className="card-container cyan-container inline-flex">
                        <div className="hidden md:block bg-cyan-500 text-white font-bold align-items-center justify-content-center p-4 border-round mr-3">Hide on a small screen</div>
                        <div className="block md:hidden bg-gray-500 text-white font-bold align-items-center justify-content-center p-4 border-round mr-3">Visible on a small screen</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayExample;

DisplayExample.getLayout = function getLayout(page) {
    return page;
};