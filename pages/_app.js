import '@docsearch/css';
import { DomHandler } from 'primereact/utils';
import { useEffect, useRef, useState } from 'react';
import Layout from '../components/layout/layout';
import AnnouncementData from '../data/news.json';
import '../styles/layout/layout.scss';
import '../styles/lib/primeflex.scss';
import '../styles/prism.scss';

export default function MyApp({ Component }) {
    const [dark, setDark] = useState(false);
    const [newsActive, setNewsActive] = useState(false);
    const announcement = useRef(AnnouncementData);
    const storageKey = 'primeflex-news';

    const props = {
        dark: dark,
        newsActive: newsActive && announcement.current,
        announcement: announcement.current,
        onNewsClose: () => {
            setNewsActive(false);

            const item = {
                hiddenNews: announcement.current.id
            };

            localStorage.setItem(storageKey, JSON.stringify(item));
        },
        onThemeChange: (dark) => {
            setDark(dark);
        }
    };

    useEffect(() => {
        const itemString = localStorage.getItem(storageKey);

        if (itemString) {
            const item = JSON.parse(itemString);

            if (item.hiddenNews && item.hiddenNews !== announcement.current.id) {
                setNewsActive(true);
            }
        } else {
            setNewsActive(true);
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const media = window.matchMedia('(prefers-color-scheme: dark)');

            if (media.matches) {
                setDark(true);
            }
        }
    }, []);

    useEffect(() => {
        DomHandler.addClass(document.body, dark ? 'layout-dark' : 'layout-light');

        return () => {
            DomHandler.removeMultipleClasses(document.body, 'layout-dark layout-light');
        };
    }, [dark]);

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
