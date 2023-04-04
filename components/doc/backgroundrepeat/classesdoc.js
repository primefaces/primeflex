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
                            <td>bg-repeat</td>
                            <td>background-repeat: repeat;</td>
                        </tr>
                        <tr>
                            <td>bg-no-repeat</td>
                            <td>background-repeat: no-repeat;</td>
                        </tr>
                        <tr>
                            <td>bg-repeat-x</td>
                            <td>background-repeat: repeat-x;</td>
                        </tr>
                        <tr>
                            <td>bg-repeat-y</td>
                            <td>background-repeat: repeat-y;</td>
                        </tr>
                        <tr>
                            <td>bg-repeat-round</td>
                            <td>background-repeat: round;</td>
                        </tr>
                        <tr>
                            <td>bg-repeat-space</td>
                            <td>background-repeat: space;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
