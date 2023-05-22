import React, { useState } from 'react';
import { CodeHighlight } from './codehighlight';

export function DocSectionCode(props) {
    const copyCode = async () => {
        setButtonTooltip('Copied!');
        await navigator.clipboard.writeText(props.code[codeMode]);
    };

    return (
        <div className="relative doc-section-code">
            <div className={props.codeClassName}>
                <CodeHighlight code {...props}>
                    {typeof props.code === 'string' ? props.code : props.code.expanded}
                </CodeHighlight>
            </div>
            <div className="flex surface-card align-items-center justify-content-end absolute" style={{ right: '.75rem', top: '.75rem', gap: '.75rem' }}>
                <button
                    type="button"
                    onClick={copyCode}
                    className="bg-transparent border-circle border-none text-white cursor-pointer hover:bg-white-alpha-20 transition-colors transition-duration-150 h-2rem w-2rem p-0 fadein align-items-center justify-content-center z-5"
                >
                    <span className="pi pi-copy"></span>
                </button>
            </div>
        </div>
    );
}
