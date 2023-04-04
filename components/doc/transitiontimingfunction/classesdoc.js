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
                            <td>transition-linear</td>
                            <td>transition-timing-function: linear;</td>
                        </tr>
                        <tr>
                            <td>transition-ease-in</td>
                            <td>transition-timing-function: cubic-bezier(0.4, 0, 1, 1);</td>
                        </tr>
                        <tr>
                            <td>transition-ease-out</td>
                            <td>transition-timing-function: cubic-bezier(0, 0, 0.2, 1);</td>
                        </tr>
                        <tr>
                            <td>transition-ease-in-out</td>
                            <td>transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
