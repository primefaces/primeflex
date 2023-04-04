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
                            <td>bg-auto</td>
                            <td>background-size: auto;</td>
                        </tr>
                        <tr>
                            <td>bg-cover</td>
                            <td>background-size: cover;</td>
                        </tr>
                        <tr>
                            <td>bg-contain</td>
                            <td>background-size: contain;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
