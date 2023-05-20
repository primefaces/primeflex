import '@docsearch/css';
import 'primeicons/primeicons.css';
import { useEffect, useRef, useState } from 'react';
import Layout from '../components/layout/layout';
import '../styles/layout/layout.scss';
import '../styles/lib/primeflex.scss';
import '../styles/prism.scss';

export default function MyApp({ Component }) {
    const [dark, setDark] = useState(false);
    const announcement = useRef(null);

    const props = {
        dark: dark,
        announcement: announcement.current,
        onThemeChange: (dark) => {
            setDark(dark);
        }
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
