import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ResponsiveDoc(props) {
    const code = `<div class="flex align-items-center justify-content-center">
    <div class="h-6rem w-6rem">
        <img src="/images/rotate-placeholder-yellow.svg" class="rotate-90 md:-rotate-90 h-6rem w-6rem" alt="primeflex">
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Responsive alternatives are available for customizations based on screen size. Add the responsive breakpoint keyword followed by a semi-colon as a prefix such as <i>md:rotate-90</i> to use a responsive class.
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
                <div className="flex align-items-center justify-content-center">
                    <div className="h-6rem w-6rem">
                        <img src="https://www.primefaces.org/cdn/primeflex/images/rotate-placeholder-yellow.svg" className="rotate-90 md:-rotate-90 h-6rem w-6rem" alt="primeflex"></img>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
