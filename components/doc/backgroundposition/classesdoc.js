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
                            <td>bg-bottom</td>
                            <td>background-position: bottom;</td>
                        </tr>
                        <tr>
                            <td>bg-center</td>
                            <td>background-position: center;</td>
                        </tr>
                        <tr>
                            <td>bg-left</td>
                            <td>background-position: left;</td>
                        </tr>
                        <tr>
                            <td>bg-left-bottom</td>
                            <td>background-position: left bottom;</td>
                        </tr>
                        <tr>
                            <td>bg-left-top</td>
                            <td>background-position: left top;</td>
                        </tr>
                        <tr>
                            <td>bg-right</td>
                            <td>background-position: right;</td>
                        </tr>
                        <tr>
                            <td>bg-right-top</td>
                            <td>background-position: right top;</td>
                        </tr>
                        <tr>
                            <td>bg-right-bottom</td>
                            <td>background-position: right bottom;</td>
                        </tr>
                        <tr>
                            <td>bg-top</td>
                            <td>background-position: top;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
