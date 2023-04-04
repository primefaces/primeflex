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
                            <td>translate-x-0</td>
                            <td>transform: translateX(0%);</td>
                        </tr>
                        <tr>
                            <td>translate-x-100</td>
                            <td>transform: translateX(100%);</td>
                        </tr>
                        <tr>
                            <td>-translate-x-100</td>
                            <td>transform: translateX(-100%);</td>
                        </tr>
                        <tr>
                            <td>translate-y-0</td>
                            <td>transform: translateY(0%);</td>
                        </tr>
                        <tr>
                            <td>translate-y-100</td>
                            <td>transform: translateY(100%);</td>
                        </tr>
                        <tr>
                            <td>-translate-y-100</td>
                            <td>transform: translateY(-100%);</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
