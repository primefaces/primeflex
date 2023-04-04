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
                            <td>transition-delay-100</td>
                            <td>transition-delay: 100ms;</td>
                        </tr>
                        <tr>
                            <td>transition-delay-150</td>
                            <td>transition-delay: 150ms;</td>
                        </tr>
                        <tr>
                            <td>transition-delay-200</td>
                            <td>transition-delay: 200ms;</td>
                        </tr>
                        <tr>
                            <td>transition-delay-300</td>
                            <td>transition-delay: 300ms;</td>
                        </tr>
                        <tr>
                            <td>transition-delay-400</td>
                            <td>transition-delay: 400ms;</td>
                        </tr>
                        <tr>
                            <td>transition-delay-500</td>
                            <td>transition-delay: 500ms;</td>
                        </tr>
                        <tr>
                            <td>transition-delay-1000</td>
                            <td>transition-delay: 1000ms;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
