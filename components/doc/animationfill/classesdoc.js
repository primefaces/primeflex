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
                            <td>animation-fill-none</td>
                            <td>animation-fill-mode: none;</td>
                        </tr>
                        <tr>
                            <td>animation-fill-forwards</td>
                            <td>animation-fill-mode: forwards;</td>
                        </tr>
                        <tr>
                            <td>animation-fill-backwards</td>
                            <td>animation-fill-mode: backwards;</td>
                        </tr>
                        <tr>
                            <td>animation-fill-both</td>
                            <td>animation-fill-mode: both;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
