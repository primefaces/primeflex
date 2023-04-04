import { Button } from 'primereact/button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ResponsiveDoc(props) {
    const code = {
        basic: `<div class="relative">
    <div class="static" style="min-width: 300px; min-height: 200px;">
        <p>Static</p>
        <div class="static md:absolute bottom-0 left-0" style="min-width: 120px; min-height: 70px">
            Absolute on medium screens / Static on small screens
        </div>
    </div>
</div>
    `,
        expanded: `<div class="card">
    <div class="relative card-container orange-container md:p-5">
        <div class="static bg-orange-100 font-bold text-gray-900 border-round p-4" style="min-width: 300px; min-height: 200px;">
            <p class="mt-0">Static</p>
            <div class="static md:absolute bottom-0 left-0 bg-orange-500 border-round font-bold text-white p-4" style="min-width: 120px; min-height: 70px">
                Absolute on medium screens / Static on small screens
            </div>
        </div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Responsive alternatives are available for customizations based on screen size. Add the responsive breakpoint keyword followed by a semi-colon as a prefix such as <i>md:absolute</i> to use a responsive class.
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
                <div className="relative card-container orange-container md:p-5">
                    <div className="static bg-orange-100 font-bold text-gray-900 border-round p-4" style={{ minWidth: '300px',minHeight:'200px' }}>
                        <p classNameclass="mt-0">Static</p>
                        <div className="static md:absolute bottom-0 left-0 bg-orange-500 border-round font-bold text-white p-4" style={{ minWidth: '120px',minHeight:'70px' }}>
                            Absolute on medium screens / Static on small screens
                        </div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
