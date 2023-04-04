import { Button } from 'primereact/button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function DisplayDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>
                    <i>p-d</i> prefix has been removed from the display classes.
                </p>
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
                                <td>p-d-none</td>
                                <td>hidden</td>
                            </tr>
                            <tr>
                                <td>p-d-inline</td>
                                <td>inline</td>
                            </tr>
                            <tr>
                                <td>p-d-inline-block</td>
                                <td>inline-block</td>
                            </tr>
                            <tr>
                                <td>p-d-block</td>
                                <td>block</td>
                            </tr>
                            <tr>
                                <td>p-d-flex</td>
                                <td>flex</td>
                            </tr>
                            <tr>
                                <td>p-d-inline-flex</td>
                                <td>inline-flex</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSectionText>
        </>
    );
}
