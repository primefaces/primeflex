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
                            <td>static</td>
                            <td>position: static;</td>
                        </tr>
                        <tr>
                            <td>fixed</td>
                            <td>position: fixed;</td>
                        </tr>
                        <tr>
                            <td>relative</td>
                            <td>position: relative;</td>
                        </tr>
                        <tr>
                            <td>absolute</td>
                            <td>position: absolute;</td>
                        </tr>
                        <tr>
                            <td>sticky</td>
                            <td>position: sticky;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
