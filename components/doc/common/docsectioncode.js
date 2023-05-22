import React, { useState } from 'react';
import { CodeHighlight } from './codehighlight';

export function DocSectionCode(props) {
    const [buttonTooltip, setButtonTooltip] = useState('Copy code');
    const [codeMode, setCodeMode] = useState('basic');

    const toggleCodeMode = (content) => {
        if (codeMode === 'data') {
            setCodeMode('expanded');
        } else {
            setCodeMode(codeMode === 'basic' ? content : 'basic');
        }
    };

    const copyCode = async () => {
        setButtonTooltip('Copied!');
        await navigator.clipboard.writeText(props.code[codeMode]);
    };

    return (
        <div className="relative doc-section-code">
            {codeMode === 'basic' && (
                <div className={props.codeClassName}>
                    <CodeHighlight code {...props}>
                        {props.code.basic}
                    </CodeHighlight>
                </div>
            )}
            {codeMode === 'expanded' && (
                <div className={props.codeClassName}>
                    <CodeHighlight code {...props}>
                        {props.code.expanded}
                    </CodeHighlight>
                </div>
            )}

            <div className="flex surface-card align-items-center justify-content-end absolute" style={{ right: '.75rem', top: '.75rem', gap: '.75rem' }}>
                {props.code.expanded && (
                    <button
                        type="button"
                        onClick={() => toggleCodeMode('expanded')}
                        className="bg-transparent border-circle border-none text-white cursor-pointer hover:bg-white-alpha-20 transition-colors transition-duration-150 h-2rem w-2rem p-0 inline-flex align-items-center justify-content-center z-5"
                    >
                        <span className="pi pi-code"></span>
                    </button>
                )}

                <button
                    type="button"
                    onClick={copyCode}
                    className="bg-transparent border-circle border-none text-white cursor-pointer hover:bg-white-alpha-20 transition-colors transition-duration-150 h-2rem w-2rem p-0 inline-flex align-items-center justify-content-center z-5"
                >
                    <span className="pi pi-copy"></span>
                </button>
            </div>
        </div>
    );
}
