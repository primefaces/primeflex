import React, { useState } from 'react';
import { Button } from 'primereact/button';
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
                     <Button
                     type="button"
                     onClick={() => toggleCodeMode('expanded')}
                     className="p-button-rounded p-button-text p-button-plain h-2rem w-2rem p-0 inline-flex align-items-center justify-content-center z-5"
                     icon="pi pi-code"
                     tooltip="Toggle Full Code"
                     tooltipOptions={{ position: 'bottom', className: 'doc-section-code-tooltip' }}
                 ></Button>
                )}
              
                <Button
                    type="button"
                    onClick={copyCode}
                    onMouseLeave={() => setButtonTooltip('Copy code')}
                    className="p-button-rounded p-button-text p-button-plain h-2rem w-2rem p-0 inline-flex align-items-center justify-content-center z-5"
                    icon="pi pi-copy"
                    tooltip={buttonTooltip}
                    tooltipOptions={{ position: 'bottom', className: 'doc-section-code-tooltip' }}
                ></Button>
            </div>
        </div>
    );
}
