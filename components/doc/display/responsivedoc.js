import { Button } from 'primereact/button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import React, { useEffect, useRef } from 'react';

export function ResponsiveDoc(props) {
    const code = {
        basic: `<div>
    <div class="hidden md:block">Hide on a small screen</div>
    <div class="block md:hidden">Visible on a small screen</div>
</div>
    `,
        expanded: `<div class="card">
    <div class="card-container cyan-container inline-flex">
        <div class="hidden md:block bg-cyan-500 text-white font-bold align-items-center justify-content-center p-4 border-round mr-3">Hide on a small screen</div>
        <div class="block md:hidden bg-gray-500 text-white font-bold align-items-center justify-content-center p-4 border-round mr-3">Visible on a small screen</div>
    </div>
</div>
`
    };
    
    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Responsive alternatives are available for customizations based on screen size. Add the responsive breakpoint keyword followed by a semi-colon as a prefix such as <i>md:block</i> to use a responsive class.
                </p>
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Class</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>sm:</td>
                                <td>small screens e.g. phones</td>
                            </tr>
                            <tr>
                                <td>md:</td>
                                <td>medium screens e.g. tablets</td>
                            </tr>
                            <tr>
                                <td>lg:</td>
                                <td>large screens e.g. notebooks</td>
                            </tr>
                            <tr>
                                <td>xl:</td>
                                <td>larger screens e.g monitors</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSectionText>
            <Splitter style={{ height: '300px', border: 'none' }}>
                <SplitterPanel className="flex align-items-center justify-content-center">
                    <iframe src='/display/example' className="w-full h-full pointer-events-none z-5 relative" width="100%" height="500" frameBorder="0" scrolling="no" />
                </SplitterPanel>
                <SplitterPanel className="opacity-0"></SplitterPanel>
            </Splitter>
            <DocSectionCode code={code} />
        </>
    );
}

