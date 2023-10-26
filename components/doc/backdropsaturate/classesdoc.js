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
                            <td>backdrop-saturate-0</td>
                            <td>backdrop-filter: saturate(0);</td>
                        </tr>
                        <tr>
                            <td>backdrop-saturate-50</td>
                            <td>backdrop-filter: saturate(0.5);</td>
                        </tr>
                        <tr>
                            <td>backdrop-saturate-100</td>
                            <td>backdrop-filter: saturate(1);</td>
                        </tr>
                        <tr>
                            <td>backdrop-saturate-150</td>
                            <td>backdrop-filter: saturate(1.5);</td>
                        </tr>
                        <tr>
                            <td>backdrop-saturate-200</td>
                            <td>backdrop-filter: saturate(2);</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
