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
                            <td>min-h-0</td>
                            <td>min-height: 0px;</td>
                        </tr>
                        <tr>
                            <td>min-h-full</td>
                            <td>min-height: 100%;</td>
                        </tr>
                        <tr>
                            <td>min-h-screen</td>
                            <td>min-height: 100vh;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
