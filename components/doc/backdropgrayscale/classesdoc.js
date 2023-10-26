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
                            <td>backdrop-grayscale</td>
                            <td>backdrop-filter: grayscale(1);</td>
                        </tr>
                        <tr>
                            <td>backdrop-grayscale-0</td>
                            <td>backdrop-filter: grayscale(0);</td>
                        </tr>
                        <tr>
                            <td>backdrop-grayscale-50</td>
                            <td>backdrop-filter: grayscale(0.5);</td>
                        </tr>
                        <tr>
                            <td>backdrop-grayscale-75</td>
                            <td>backdrop-filter: grayscale(0.75);</td>
                        </tr>
                        <tr>
                            <td>backdrop-grayscale-100</td>
                            <td>backdrop-filter: grayscale(1);</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
