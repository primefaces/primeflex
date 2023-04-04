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
                            <td>font-light</td>
                            <td>font-weight: 300;</td>
                        </tr>
                        <tr>
                            <td>font-normal</td>
                            <td>font-weight: 400;</td>
                        </tr>
                        <tr>
                            <td>font-medium</td>
                            <td>font-weight: 500;</td>
                        </tr>
                        <tr>
                            <td>font-semibold</td>
                            <td>font-weight: 600;</td>
                        </tr>
                        <tr>
                            <td>font-bold</td>
                            <td>font-weight: 700;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
