import Head from 'next/head';

const ResponsiveExample = () => {
    return (
        <>
            <Head>
                <style>
                    {`
.light{
--body-bg:  linear-gradient(95.24deg, #FAFBFC 0%, rgba(250, 251, 252, 0) 100%);
--body-bg-color: #fff;
--example-topbar-bg: #FAFBFC;
--example-text-color: #24292E;
--example-button-text-color: #fff;
--example-button-bg:#0366D6;
}
.dark {
    --body-bg: linear-gradient(95.24deg, #040506 0%, rgba(4, 5, 6, 0) 100%);
    --body-bg-color: #00031A;
    --example-topbar-bg: #24292E;
    --example-text-color: #fff;
    --example-button-text-color: #24292E;
    --example-button-bg:#79B8FF;
}
                    `}
                </style>
            </Head>
            <div className="layout-example">
                <div className="w-full h-screen flex flex-column">
                    <div className="example-topbar w-full absolute top-0  left-0  flex align-items-center justify-content-between p-5">
                        <div className="flex align-items-center gap-3">
                            <div>
                                <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M18.9999 38.5C29.4933 38.5 37.9999 29.9934 37.9999 19.5C37.9999 9.00659 29.4933 0.5 18.9999 0.5C8.50653 0.5 -6.10352e-05 9.00659 -6.10352e-05 19.5C-6.10352e-05 21.7147 0.37885 23.8408 1.07538 25.8172C3.8249 18.1477 13.5403 13.802 21.829 10.0945C24.8231 8.75528 27.631 7.4993 29.8572 6.2C25.0961 12.9273 19.0143 16.6863 13.5226 20.0806C9.1316 22.7946 5.11784 25.2754 2.45814 28.8539C2.6841 29.2526 2.92407 29.6424 3.17738 30.0225C5.74787 26.7733 10.8147 24.3159 16.2314 21.6889C21.2155 19.2717 26.4958 16.7108 30.4001 13.2571C27.3798 20.5659 20.5436 24.0015 14.3298 27.1242C10.8711 28.8624 7.60514 30.5037 5.29746 32.6622C5.59912 32.9761 5.91146 33.2798 6.23391 33.5724C9.06778 31.1477 13.5411 30.1511 18.283 29.0947C21.8192 28.3069 25.5049 27.4858 28.7713 26.0143C23.4669 32.1202 17.867 33.2474 13.3784 34.1509C11.5904 34.5108 9.9787 34.8352 8.63228 35.4247C11.6136 37.3696 15.1748 38.5 18.9999 38.5Z"
                                        fill="url(#paint0_linear_359_122675)"
                                    />
                                    <defs>
                                        <linearGradient id="paint0_linear_359_122675" x1="18.9999" y1="0.5" x2="38.9047" y2="38.5" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#0366D6" />
                                            <stop offset="1" stopColor="#96C7FF" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <span className="text-3xl block  font-semibold">Untitled</span>
                        </div>
                        <button className="flex align-items-center justify-content-center border-none bg-transparent cursor-pointer hover:surface-600 p-2">
                            <i className="pi pi-bars "></i>
                        </button>
                    </div>
                    <div className="flex w-full flex-grow-1 flex-column md:flex-row h-full p-5 align-items-center justify-content-center md:justify-content-between mt-6 gap-4">
                        <div className="flex align-items-center justify-content-center">
                            <img alt="example" src="https://www.primefaces.org/cdn/primeflex/images/landing/asset.png" className="w-15rem h-auto sm:w-25rem"></img>
                        </div>
                        <div className="flex flex-column justify-content-center md:justify-content-start align-items-center md:align-items-start gap-5">
                            <span className="text-2xl sm:text-4xl block md:text-left text-center">Est placerat in egestas erat imperdiet sed tincidunt nunc pulvinar sapien et ligula.</span>
                            <button className="flex align-items-center justify-content-center border-none  cursor-pointer hover:bg-blue-400 p-3">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResponsiveExample;

ResponsiveExample.getLayout = function getLayout(page) {
    return page;
};
