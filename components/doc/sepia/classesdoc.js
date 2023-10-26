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
                            <td>sepia</td>
                            <td>filter: sepia(100%);</td>
                        </tr>
                        <tr>
                            <td>sepia-50</td>
                            <td>filter: sepia(50%);</td>
                        </tr>
                        <tr>
                            <td>sepia-0</td>
                            <td>filter: sepia(0);</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
