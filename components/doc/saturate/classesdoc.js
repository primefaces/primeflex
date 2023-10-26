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
                            <td>saturate-0</td>
                            <td>filter: saturate(0);</td>
                        </tr>
                        <tr>
                            <td>saturate-50</td>
                            <td>filter: saturate(0.5);</td>
                        </tr>
                        <tr>
                            <td>saturate-100</td>
                            <td>filter: saturate(1);</td>
                        </tr>
                        <tr>
                            <td>saturate-150</td>
                            <td>filter: saturate(1.5);</td>
                        </tr>
                        <tr>
                            <td>saturate-200</td>
                            <td>filter: saturate(2);</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
