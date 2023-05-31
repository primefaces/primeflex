import { memo, useMemo } from 'react';

const UsersSection = ({ dark }) => {
    const colorScheme = !dark ? 'light' : 'dark';

    const usersData = useMemo(
        () => [
            { name: 'LogoFrame-1', height: '80' },
            { name: 'LogoFrame-2', height: '90' },
            { name: 'LogoFrame-3', height: '80' },
            { name: 'LogoFrame-4', height: '110' },
            { name: 'LogoFrame-5', height: '80' },
            { name: 'LogoFrame-6', height: '80' },
            { name: 'LogoFrame-7', height: '120' },
            { name: 'LogoFrame-8', height: '100' },
            { name: 'LogoFrame-9', height: '80' }
        ],
        []
    );
    const getUsersImages = (usersData, colorScheme) =>
        usersData.map((user) => ({
            name: user.name,
            image: `https://www.primefaces.org/cdn/primeflex/images/landing/users/${colorScheme}/${user.name}.svg`,
            height: user.height
        }));

    const usersImages = useMemo(() => getUsersImages(usersData, colorScheme), [usersData, colorScheme]);
    const Marquee = memo(({ users }) => (
        <div className="marquee-wrapper overflow-hidden flex">
            {Array(3)
                .fill(users)
                .map((users, index) => (
                    <div key={index} className={`marquee`}>
                        {users.map((user) => (
                            <div key={user.name}>
                                <img src={user.image} height={user.height} alt="User" />
                            </div>
                        ))}
                    </div>
                ))}
        </div>
    ));

    return (
        <section className="landing-users-section relative landing-section-border">
            <div className="landing-marquee-container px-5 relative z-5 flex align-items-center">
                <div className="fade-left h-10rem w-6rem block absolute top-0 left-0 z-2" style={{ background: 'linear-gradient(to right, var(--landing-body-bg), transparent)' }}></div>
                <Marquee users={usersImages} />
                <div className="fade-right h-10rem w-6rem block absolute top-0 right-0 z-2" style={{ background: 'linear-gradient(to left, var(--landing-body-bg), transparent)' }}></div>
            </div>
        </section>
    );
};

export default UsersSection;
