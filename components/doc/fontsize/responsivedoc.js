import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ResponsiveDoc(props) {
    const code = `<div class="flex flex-wrap align-items-center justify-content-center">
    <div class="surface-overlay border-round border-1 w-16rem min-h-full p-3 m-3 flex align-items-center">
        <p class="text-lg md:text-6xl m-0">Lorem ipsum dolor sit amet</p>
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Responsive alternatives are available for customizations based on screen size. Add the responsive breakpoint keyword followed by a semi-colon as a prefix such as <i>md:text-lg</i> to use a responsive class.
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
            <div class="card">
                <div class="flex flex-wrap align-items-center justify-content-center">
                    <div class="surface-overlay border-round border-1 w-16rem min-h-full p-3 m-3 flex align-items-center">
                        <p class="text-lg md:text-6xl m-0">Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
