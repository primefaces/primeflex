import { memo, useMemo } from 'react';

const UsersSection = ({ dark }) => {
    const colorScheme = !dark ? 'light' : 'dark';
    const usersData = useMemo(() => ['LogoFrame-1', 'LogoFrame-2', 'LogoFrame-3', 'LogoFrame-4', 'LogoFrame-5', 'LogoFrame-6', 'LogoFrame-7', 'LogoFrame-8', 'LogoFrame-9'], []);
    const getUsersImages = (usersData, colorScheme) =>
        usersData.map((name) => ({
            name,
            image: `/images/landing/users/${colorScheme}/${name}.svg`
        }));

    const usersImages = useMemo(() => getUsersImages(usersData, colorScheme), [usersData, colorScheme]);
    const Marquee = memo(({ users }) => (
        <div className="marquee-wrapper overflow-hidden flex">
            {Array(3)
                .fill(users)
                .map((users, index) => (
                    <div key={index} className={`marquee`}>
                        {users.map((user) => (
                            <div className="" key={user.name}>
                                <img src={user.image} alt={`${user.name}`} style={{ mixBlendMode: 'color-dodge' }} />
                            </div>
                        ))}
                    </div>
                ))}
        </div>
    ));

    return (
        <section className="landing-users-section relative">
            <div className="landing-marquee-container px-5 relative z-5 flex align-items-center">
                <div className="fade-left h-full w-6rem block absolute top-0 left-0 z-2" style={{ background: 'linear-gradient(to right, var(--landing-body-bg), transparent)' }}></div>
                <Marquee users={usersImages} />
                <div className="fade-right h-full w-6rem block absolute top-0 right-0 z-2" style={{ background: 'linear-gradient(to left, var(--landing-body-bg), transparent)' }}></div>
            </div>
        </section>
    );
};

export default UsersSection;
