import { DocSearch } from '@docsearch/react';
import { classNames } from 'primereact/utils';
import { useCallback, useEffect, useRef } from 'react';
import pkg from '../../package.json';

export default function Topbar(props) {
    const colorSchemeIcon = classNames('pi', { 'pi-sun': props.dark, 'pi-moon': !props.dark });
    const versionsRef = useRef(null);
    const versions = [
        {
            name: `v${pkg.version.split('.')[0]}`,
            version: pkg.version,
            url: 'https://www.primereact.org'
        }
    ];

    const onMenuButtonClick = () => {
        props.onMenuButtonClick();
    };

    const changeColorScheme = () => {
        props.onToggleColorScheme();
    };

    const containerElement = useRef(null);
    const scrollListener = useRef();

    const toggleSticky = useCallback(() => {
        if (containerElement.current) {
            if (window.scrollY > 0) containerElement.current.classList.add('layout-topbar-sticky');
            else containerElement.current.classList.remove('layout-topbar-sticky');
        }
    }, []);

    useEffect(() => {
        toggleSticky();

        scrollListener.current = () => {
            toggleSticky();
        };

        window.addEventListener('scroll', scrollListener.current);

        return () => {
            if (scrollListener.current) {
                window.removeEventListener('scroll', scrollListener.current);
                scrollListener.current = null;
            }
        };
    }, [toggleSticky]);

    return (
        <div ref={containerElement} className="layout-topbar">
            <div className="layout-topbar-inner">
                <button type="button" className="link-button menu-button" onClick={onMenuButtonClick} aria-haspopup aria-label="Menu" style={{ borderColor: 'var(--menu-border-color)' }}>
                    <i className="pi pi-bars"></i>
                </button>
                <DocSearch appId="TLMMWZFW0F" apiKey="e6191f9edfded2e69492f3f3b315e237" indexName="primeflex" container="" debug={false} />

                <ul className="flex list-none m-0 p-0 gap-2 align-items-center ml-2">
                    <li>
                        <a
                            className="flex link-button border-1 border-solid w-2rem h-2rem  border-round surface-card align-items-center justify-content-center transition-all transition-duration-300 hover:border-primary"
                            onClick={changeColorScheme}
                            style={{ borderColor: 'var(--menu-border-color)' }}
                        >
                            <i className={classNames('text-700', colorSchemeIcon)}></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/primefaces/primeflex"
                            className="flex link-button border-1 border-solid w-2rem h-2rem border-round surface-card align-items-center justify-content-center transition-all transition-duration-300 hover:border-primary"
                            style={{ borderColor: 'var(--menu-border-color)' }}
                        >
                            <i className="pi pi-github text-700"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://discord.gg/gzKFYnpmCY"
                            className="flex link-button border-1 border-solid w-2rem h-2rem  border-round surface-card align-items-center justify-content-center transition-all transition-duration-300 hover:border-primary"
                            style={{ borderColor: 'var(--menu-border-color)' }}
                        >
                            <i className="pi pi-discord text-700"></i>
                        </a>
                    </li>

                    {/* <li className="relative">
                        <StyleClass nodeRef={versionsRef} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                            <button
                                ref={versionsRef}
                                type="button"
                                className="link-button flex align-items-center surface-card h-2rem px-3 hover:surface-hover border-1 border-solid transition-all transition-duration-300 hover:border-primary"
                                style={{ borderColor: 'var(--menu-border-color)' }}
                            >
                                <span className="text-900">{versions && versions.length ? versions[0].version : ''}</span>
                                <span className="ml-2 pi pi-angle-down text-600"></span>
                            </button>
                        </StyleClass>
                        <div className="p-3 surface-overlay hidden absolute right-0 top-auto border-round shadow-2 origin-top w-12rem">
                            <ul className="list-none m-0 p-0">
                                {versions.map((version) => {
                                    return (
                                        <li role="none" key={version.version}>
                                            <a href={version.url} className="block p-2 border-round hover:surface-hover w-full">
                                                <span className="font-bold text-900">{version.name}</span>
                                                <span className="ml-2 text-700">({version.version})</span>
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </li> */}
                </ul>
            </div>
        </div>
    );
}
