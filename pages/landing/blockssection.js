import { useState } from 'react';

const BlocksSection = ({ dark }) => {
    const [weight, setWeight] = useState(50);
    const [size, setSize] = useState(50);
    const assetsRow1 = ['ec-9', 'ec-2', 'ec-16', 'ec-10', 'app-7', 'app-10', '9', '28', '22', '19', '12'];
    const assetsRow2 = ['ec-8', 'ec-18', 'ec-15', 'ec-11', 'app-8', 'app-11', 'app-1', '4', '23', '2', '17', '13', '10'];
    const assetsRow3 = ['ec-7', 'ec-17', 'app-9', 'app-5', 'app-3', '5', '25', '18', '16', '1'];
    const assetsRow4 = ['ec-6', 'ec-3', 'ec-13', '14', '11', '8', '3', '21', '15'];
    const assetsRow5 = ['ec-5', 'ec-4', 'ec-14', 'ec-12', 'ec-1', 'app-2', '7', '27', '20'];

    const getRow1 = () =>
        assetsRow1.map((name) => ({
            name,
            image: `https://www.primefaces.org/cdn/primeflex/images/landing/blocks/${dark ? 'dark' : 'light'}/${name}.jpg`
        }));

    const getRow2 = () =>
        assetsRow2.map((name) => ({
            name,
            image: `https://www.primefaces.org/cdn/primeflex/images/landing/blocks/${dark ? 'dark' : 'light'}/${name}.jpg`
        }));

    const getRow3 = () =>
        assetsRow3.map((name) => ({
            name,
            image: `https://www.primefaces.org/cdn/primeflex/images/landing/blocks/${dark ? 'dark' : 'light'}/${name}.jpg`
        }));

    const getRow4 = () =>
        assetsRow4.map((name) => ({
            name,
            image: `https://www.primefaces.org/cdn/primeflex/images/landing/blocks/${dark ? 'dark' : 'light'}/${name}.jpg`
        }));
    const getRow5 = () =>
        assetsRow5.map((name) => ({
            name,
            image: `https://www.primefaces.org/cdn/primeflex/images/landing/blocks/${dark ? 'dark' : 'light'}/${name}.jpg`
        }));

    const Marquee = ({ users, reverse }) => (
        <div className="marquee-wrapper  flex">
            {Array(3)
                .fill(users)
                .map((users, index) => (
                    <div key={index} className={`marquee${reverse ? ' marquee-reverse' : ''}`}>
                        {users.map((user) => (
                            <div className="w-full" key={user.name}>
                                <img src={user.image} alt={`${user.name}`} />
                            </div>
                        ))}
                    </div>
                ))}
        </div>
    );

    const row1 = getRow1();
    const row2 = getRow2();
    const row3 = getRow3();
    const row4 = getRow4();
    const row5 = getRow5();

    return (
        <section className="landing-blocks-section relative landing-section-border">
            <div className="landing-blocks-container mt-3">
                <div className="landing-blocks-content text-center flex flex-column gap-5 flex-shrink-0 justify-content-center align-items-center mb-5">
                    <h1 className="landing-title font-bold m-0 text-7xl">Made with PrimeFlex</h1>
                    <h3 className="landing-subtitle m-0 text-2xl font-normal text-center">
                        Leverage PrimeBlocks, the building blocks crafted with PrimeFlex. Streamline your project and concentrate on core functionalities, leaving the aesthetics to us.
                    </h3>

                    <div className="blocks-selection ">
                        <ul className="list-none ">
                            <li>
                                <a href="https://blocks.primeng.org/#/" target="_blank">
                                    <img src="https://www.primefaces.org/cdn/primeflex/images/landing/angular-logo.svg" alt="Angular"></img>
                                    <span>Angular</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://blocks.primevue.org/#/" target="_blank">
                                    <img src="https://www.primefaces.org/cdn/primeflex/images/landing/vue-logo.svg" alt="Vue"></img>
                                    <span>Vue</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://blocks.primereact.org/" target="_blank">
                                    <img src="https://www.primefaces.org/cdn/primeflex/images/landing/react-logo.svg" alt="React"></img>
                                    <span>React</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.primefaces.org/primeblocks-jsf/" target="_blank">
                                    <img src="https://www.primefaces.org/cdn/primeflex/images/landing/jsf-logo.svg" alt="JSF"></img>
                                    <span>JSF</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="blocks-background">
                    <div className="blocks-marquees">
                        <Marquee users={row1} />
                        <Marquee users={row2} reverse />
                        <Marquee users={row3} />
                        <Marquee users={row4} reverse />
                        <Marquee users={row5} />
                        <Marquee users={row1} reverse />
                        <Marquee users={row2} />
                        <Marquee users={row3} reverse />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlocksSection;
