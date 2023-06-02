import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMountEffect } from 'primereact/hooks';
import { StyleClass } from 'primereact/styleclass';
import { classNames } from 'primereact/utils';
import React, { memo, useEffect, useState } from 'react';
import MenuData from './menu.json';

const Menu = memo((props) => {
    const router = useRouter();
    const [activeSubmenus, setActiveSubmenus] = useState([]);
    const [activeMenuitemOnRouter, setActiveMenuitemOnRouter] = useState(null);

    const isActive = (item) => {
        return activeSubmenus.length && activeSubmenus.includes(item);
    };

    const onMenuItemButtonClick = (menuitem) => {
        if (activeSubmenus.includes(menuitem)) {
            setActiveSubmenus((prevActiveSubmenus) => prevActiveSubmenus.filter((submenuitem) => submenuitem !== menuitem));
        } else {
            setActiveSubmenus((prevActiveSubmenus) => [...prevActiveSubmenus, menuitem]);
        }
    };

    const scrollToActiveItem = () => {
        const activeItem = document.querySelector('.router-link-active');

        if (activeItem) {
            activeItem.scrollIntoView({ block: 'center' });
        }
    };

    useMountEffect(() => {
        (MenuData.data || []).forEach((rootItem) => {
            const isExpanded = rootItem.children && rootItem.children.some((item) => item.to === router.pathname || (item.children && item.children.some((it) => it.to === router.pathname)));

            if (isExpanded) {
                setActiveSubmenus((prevActiveSubmenus) => (prevActiveSubmenus.includes(rootItem) ? prevActiveSubmenus : [...prevActiveSubmenus, rootItem]));
                setActiveMenuitemOnRouter(rootItem);
            }
        });
    });

    useEffect(() => {
        scrollToActiveItem();
    }, [activeMenuitemOnRouter]);

    const renderLink = (item) => {
        const { name, to, href } = item;
        const content = (
            <>
                {item.icon && (
                    <span className="menu-icon">
                        <img src={item.image + (props.darkTheme ? '.svg' : '-light.svg')} alt="icon"></img>
                    </span>
                )}
                {name}
            </>
        );

        if (href) {
            return (
                <a href={href} target="_blank" rel="noopener noreferrer">
                    {item.image && (
                        <span className="menu-icon">
                            <img src={item.image + (props.darkTheme ? '.svg' : '-light.svg')} alt="icon"></img>
                        </span>
                    )}
                    <span>{content}</span>
                </a>
            );
        } else if (to) {
            return (
                <Link href={to} className={classNames({ 'router-link-active': to === router.pathname })}>
                    {item.image && (
                        <span className="menu-icon">
                            <img src={item.image + (props.darkTheme ? '.svg' : '-light.svg')} alt="icon"></img>
                        </span>
                    )}
                    {content}
                </Link>
            );
        } else if (item.separator) {
            return <span className="layout-separator">Utilities</span>;
        }
    };

    const renderChild = (menuitem, key) => {
        if (menuitem.children) {
            return (
                <li key={key}>
                    <span className="menu-child-category">{menuitem.name}</span>
                    <ol>
                        {menuitem.children.map((child, index) => {
                            const link = renderLink(child);

                            return <li key={key + '_' + index}>{link}</li>;
                        })}
                    </ol>
                </li>
            );
        } else {
            const link = renderLink(menuitem);

            return <li key={key}>{link}</li>;
        }
    };

    const renderRootMenuItemChildren = (menuitem, parentIndex) => {
        if (menuitem.children) {
            return (
                <div className={classNames({ hidden: activeMenuitemOnRouter != menuitem }, 'overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out')}>
                    <ol>{menuitem.children.map((item, index) => renderChild(item, parentIndex + '_' + index))}</ol>
                </div>
            );
        }

        return null;
    };

    const renderRootItemButton = (menuitem) => {
        const btnRef = React.createRef();

        return (
            <StyleClass nodeRef={btnRef} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                <button ref={btnRef} type="button" className={classNames('link-button', { 'active-menuitem': isActive(menuitem) })} onClick={() => onMenuItemButtonClick(menuitem)}>
                    <span className="menu-icon">
                        <img src={menuitem.image + (props.darkTheme ? '.svg' : '-light.svg')} alt="Item Icon"></img>
                    </span>
                    <span>{menuitem.name}</span>
                    <i className="menu-toggle-icon pi pi-angle-down"></i>
                </button>
            </StyleClass>
        );
    };

    const renderRootMenuItems = () => {
        return (
            <>
                {MenuData.data &&
                    MenuData.data.map((menuitem, index) => {
                        const label = menuitem.children ? renderRootItemButton(menuitem, index) : renderLink(menuitem);
                        const children = renderRootMenuItemChildren(menuitem, index);

                        return (
                            <li key={'root_' + index}>
                                {label}
                                {children}
                            </li>
                        );
                    })}
            </>
        );
    };

    const menuItems = renderRootMenuItems();
    const sidebarClassName = classNames('layout-sidebar', { active: props.active });

    return (
        <aside className={sidebarClassName}>
            <Link href="/" className="logo" aria-label="PrimeReact logo">
                <img id="topbar-logo" src="https://www.primefaces.org/cdn/primeflex/images/PrimeFlexLogo.svg" alt="prime"></img>
            </Link>
            <nav>
                <ol className="layout-menu">{menuItems}</ol>
            </nav>
        </aside>
    );
});

export default Menu;
