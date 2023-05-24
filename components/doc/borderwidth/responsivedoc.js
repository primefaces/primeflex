import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ResponsiveDoc(props) {
    const code = `<div class="flex flex-wrap justify-content-center">
    <div class="border-y-none border-x-2 md:border-x-none md:border-y-2 border-primary-500 w-12rem h-6rem surface-overlay font-bold m-2 flex align-items-center justify-content-center">Responsive Border</div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Responsive alternatives are available for customizations based on screen size. Add the responsive breakpoint keyword followed by a semi-colon as a prefix such as <i>md:border-2</i> to use a responsive class.
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
                <div className="flex flex-wrap justify-content-center">
                    <div className="border-y-none border-x-2 md:border-x-none md:border-y-2 border-primary-500 w-12rem h-6rem surface-overlay font-bold m-2 flex align-items-center justify-content-center">Responsive Border</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
