import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Slider } from 'primereact/slider';
const BlocksSection = () => {
    const [weight, setWeight] = useState(50);
    const [size, setSize] = useState(50);

    const assetsRow1 = ['ec-9-dark', 'ec-2-dark', 'ec-16-dark', 'ec-10-dark', 'app-7-dark', 'app-10-dark', '9', '28', '22', '19', '12'];
    const assetsRow2 = ['ec-8-dark', 'ec-18-dark', 'ec-15-dark', 'ec-11-dark', 'app-8-dark', 'app-11-dark', 'app-1-dark', '4', '23', '2', '17', '13', '10'];
    const assetsRow3 = ['ec-7-dark', 'ec-17-dark', 'app-9-dark', 'app-5-dark', 'app-3-dark', '5', '25', '18', '16', '1'];
    const assetsRow4 = ['ec-6-dark', 'ec-3-dark', 'ec-13-dark', '14', '11', '8', '3', '21', '15'];
    const assetsRow5 = ['ec-5-dark', 'ec-4-dark', 'ec-14-dark', 'ec-12-dark', 'ec-1-dark', 'app-2-dark', '7', '27', '20'];
    const getRow1 = () =>
        assetsRow1.map((name) => ({
            name,
            image: `/images/landing/blocks/dark/${name}.jpg`
        }));

    const getRow2 = () =>
        assetsRow2.map((name) => ({
            name,
            image: `/images/landing/blocks/dark/${name}.jpg`
        }));

    const getRow3 = () =>
        assetsRow3.map((name) => ({
            name,
            image: `/images/landing/blocks/dark/${name}.jpg`
        }));

    const getRow4 = () =>
        assetsRow4.map((name) => ({
            name,
            image: `/images/landing/blocks/dark/${name}.jpg`
        }));
    const getRow5 = () =>
        assetsRow5.map((name) => ({
            name,
            image: `/images/landing/blocks/dark/${name}.jpg`
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
        <section className="landing-blocks-section relative">
            <div className="landing-blocks-container mt-3">
                <div className="landing-blocks-content text-center flex flex-column gap-5 flex-shrink-0 justify-content-center align-items-center mb-5">
                    <h1 className="landing-blocks-title font-semibold m-0">
                        Made with <br></br> PrimeFlex
                    </h1>
                    <h3 className="landing-blocks-subtitle m-0 text-xl font-normal text-center text-white">
                        Unlock consistency and flexibility in your designs with our collection of pre-built components and utility classes, designed to work seamlessly across all screen sizes.
                    </h3>

                    <Link href="/installation" className="linkbox-button active w-9rem fadeinleft animation-duration-2000 animation-ease-out">
                        Learn more
                    </Link>
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
