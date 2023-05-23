import React from 'react';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ResponsiveDoc(props) {
    const code = `<div class="inline-flex">
    <div class="hidden md:block bg-primary font-bold align-items-center justify-content-center p-4 border-round mr-3">Hide on a small screen</div>
    <div class="block md:hidden bg-primary font-bold align-items-center justify-content-center p-4 border-round mr-3">Visible on a small screen</div>
</div>
`;

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
            <div className="card">
                <div className="inline-flex">
                    <div className="hidden md:block bg-primary font-bold align-items-center justify-content-center p-4 border-round mr-3">Hide on a small screen</div>
                    <div className="block md:hidden bg-primary font-bold align-items-center justify-content-center p-4 border-round mr-3">Visible on a small screen</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
