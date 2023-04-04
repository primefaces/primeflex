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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>animation-delay-100</td>
                            <td>animation-delay: 100ms;</td>
                        </tr>
                        <tr>
                            <td>animation-delay-150</td>
                            <td>animation-delay: 150ms;</td>
                        </tr>
                        <tr>
                            <td>animation-delay-200</td>
                            <td>animation-delay: 200ms;</td>
                        </tr>
                        <tr>
                            <td>animation-delay-300</td>
                            <td>animation-delay: 300ms;</td>
                        </tr>
                        <tr>
                            <td>animation-delay-400</td>
                            <td>animation-delay: 400ms;</td>
                        </tr>
                        <tr>
                            <td>animation-delay-500</td>
                            <td>animation-delay: 500ms;</td>
                        </tr>
                        <tr>
                            <td>animation-delay-1000</td>
                            <td>animation-delay: 1000ms;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
