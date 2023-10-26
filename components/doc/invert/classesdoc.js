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
                            <td>invert-0</td>
                            <td>filter: invert(0);</td>
                        </tr>
                        <tr>
                            <td>invert</td>
                            <td>filter: invert(1);</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
