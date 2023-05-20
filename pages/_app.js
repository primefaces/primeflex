import '@docsearch/css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';
import { useEffect, useRef, useState } from 'react';
import Layout from '../components/layout/layout';
import '../styles/layout/layout.scss';
import '../styles/lib/primeflex.scss';
import '../styles/prism.scss';

export default function MyApp({ Component }) {
    const [dark, setDark] = useState(false);
    const [theme, setTheme] = useState('bootstrap4-light-blue');
    const announcement = useRef(null);

    const props = {
        dark: dark,
        theme: theme,
        announcement: announcement.current,
        onThemeChange: (newTheme, dark) => {
            setDark(dark);
            changeTheme(newTheme);
        }
    };

    const changeTheme = (newTheme) => {
        const elementId = 'theme-link';
        const linkElement = document.getElementById('theme-link');
        const cloneLinkElement = linkElement.cloneNode(true);
        const newThemeUrl = linkElement.getAttribute('href').replace(theme, newTheme);

        cloneLinkElement.setAttribute('id', elementId + '-clone');
        cloneLinkElement.setAttribute('href', newThemeUrl);
        cloneLinkElement.addEventListener('load', () => {
            linkElement.remove();
            cloneLinkElement.setAttribute('id', elementId);
        });

        linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);
        setTheme(newTheme);
    };

    useEffect(() => {
        document.documentElement.style.fontSize = '14px';
    }, []);

    if (Component.getLayout) {
        return Component.getLayout(<Component {...props} />);
    } else {
        return (
            <Layout {...props}>
                <Component {...props} />
            </Layout>
        );
    }
}
