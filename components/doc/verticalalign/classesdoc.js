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
                            <td>vertical-align-baseline</td>
                            <td>vertical-align: baseline;</td>
                        </tr>
                        <tr>
                            <td>vertical-align-top</td>
                            <td>vertical-align: top;</td>
                        </tr>
                        <tr>
                            <td>vertical-align-middle</td>
                            <td>vertical-align: middle;</td>
                        </tr>
                        <tr>
                            <td>vertical-align-bottom</td>
                            <td>vertical-align: bottom;</td>
                        </tr>
                        <tr>
                            <td>vertical-align-text-top</td>
                            <td>vertical-align: text-top;</td>
                        </tr>
                        <tr>
                            <td>vertical-align-text-bottom</td>
                            <td>vertical-align: text-bottom;</td>
                        </tr>
                        <tr>
                            <td>vertical-align-sub</td>
                            <td>vertical-align: sub;</td>
                        </tr>
                        <tr>
                            <td>vertical-align-super</td>
                            <td>vertical-align: super;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
