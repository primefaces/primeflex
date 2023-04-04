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
                            <td>min-w-0</td>
                            <td>min-width: 0px;</td>
                        </tr>
                        <tr>
                            <td>min-w-full</td>
                            <td>min-width: 100%;</td>
                        </tr>
                        <tr>
                            <td>min-w-screen</td>
                            <td>min-width: 100vw;</td>
                        </tr>
                        <tr>
                            <td>min-w-min</td>
                            <td>min-width: min-content;</td>
                        </tr>
                        <tr>
                            <td>min-w-max</td>
                            <td>min-width: max-content;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
