import { DocSectionText } from '../common/docsectiontext';

export function ClassesDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Class</th>
                            <th>Properties</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>white-space-normal</td>
                            <td>white-space: normal;</td>
                        </tr>
                        <tr>
                            <td>white-space-nowrap</td>
                            <td>white-space: nowrap;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
