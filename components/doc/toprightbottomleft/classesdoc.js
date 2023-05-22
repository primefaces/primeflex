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
                            <td>top-auto</td>
                            <td>top: auto;</td>
                        </tr>
                        <tr>
                            <td>top-0</td>
                            <td>top: 0;</td>
                        </tr>
                        <tr>
                            <td>top-50</td>
                            <td>top: 50%;</td>
                        </tr>
                        <tr>
                            <td>top-100</td>
                            <td>top: 100%;</td>
                        </tr>

                        <tr>
                            <td>right-auto</td>
                            <td>right: auto;</td>
                        </tr>
                        <tr>
                            <td>right-0</td>
                            <td>right: 0;</td>
                        </tr>
                        <tr>
                            <td>right-50</td>
                            <td>right: 50%;</td>
                        </tr>
                        <tr>
                            <td>right-100</td>
                            <td>right: 100%;</td>
                        </tr>

                        <tr>
                            <td>bottom-auto</td>
                            <td>bottom: auto;</td>
                        </tr>
                        <tr>
                            <td>bottom-0</td>
                            <td>bottom: 0;</td>
                        </tr>
                        <tr>
                            <td>bottom-50</td>
                            <td>bottom: 50%;</td>
                        </tr>
                        <tr>
                            <td>bottom-100</td>
                            <td>bottom: 100%;</td>
                        </tr>

                        <tr>
                            <td>left-auto</td>
                            <td>left: auto;</td>
                        </tr>
                        <tr>
                            <td>left-0</td>
                            <td>left: 0;</td>
                        </tr>
                        <tr>
                            <td>left-50</td>
                            <td>left: 50%;</td>
                        </tr>
                        <tr>
                            <td>left-100</td>
                            <td>left: 100%;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
