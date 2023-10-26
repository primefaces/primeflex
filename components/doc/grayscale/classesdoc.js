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
                            <td>grayscale</td>
                            <td>filter: grayscale(1);</td>
                        </tr>
                        <tr>
                            <td>grayscale-0</td>
                            <td>filter: grayscale(0);</td>
                        </tr>
                        <tr>
                            <td>grayscale-50</td>
                            <td>filter: grayscale(0.5);</td>
                        </tr>
                        <tr>
                            <td>grayscale-75</td>
                            <td>filter: grayscale(0.75);</td>
                        </tr>
                        <tr>
                            <td>grayscale-100</td>
                            <td>filter: grayscale(1);</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
