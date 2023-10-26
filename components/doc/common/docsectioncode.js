import React from 'react';
import { CodeHighlight } from './codehighlight';

export function DocSectionCode(props) {
    const copyCode = async () => {
        await navigator.clipboard.writeText(props.code);
    };

    return (
        <div className="relative doc-section-code">
            <div className={props.codeClassName}>
                <CodeHighlight code {...props}>
                    {typeof props.code === 'string' ? props.code : props.code.expanded}
                </CodeHighlight>
            </div>
            <div className="toolbar-content">
                <div className="toolbar-icons">
                    <i className="pi pi-circle-fill"></i>
                    <i className="pi pi-circle-fill"></i>
                    <i className="pi pi-circle-fill"></i>
                </div>
                <button
                    type="button"
                    onClick={copyCode}
                    className="bg-transparent flex border-circle border-none text-primary cursor-pointer hover:bg-white-alpha-20 transition-colors transition-duration-150 h-2rem w-2rem p-0 fadein align-items-center justify-content-center z-5"
                >
                    <span className="pi pi-copy"></span>
                </button>
            </div>
        </div>
    );
}
