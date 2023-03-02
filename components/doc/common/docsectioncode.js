import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { CodeHighlight } from './codehighlight';

export function DocSectionCode(props) {
    const [buttonTooltip, setButtonTooltip] = useState('Copy code');

    const copyCode = async () => {
        setButtonTooltip('Copied!');
        await navigator.clipboard.writeText(props.code);
    };

    return (
        <div className="relative doc-section-code">
            <div className={props.codeClassName}>
                <CodeHighlight code {...props}>
                    {props.code}
                </CodeHighlight>
            </div>

            <div className="flex surface-card align-items-center justify-content-end absolute" style={{ right: '.75rem', top: '.75rem', gap: '.75rem' }}>
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
