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
                            <td>backdrop-sepia</td>
                            <td>backdrop-filter: sepia(100%);</td>
                        </tr>
                        <tr>
                            <td>backdrop-sepia-50</td>
                            <td>backdrop-filter: sepia(50%);</td>
                        </tr>
                        <tr>
                            <td>backdrop-sepia-0</td>
                            <td>backdrop-filter: sepia(0);</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
