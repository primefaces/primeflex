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
                            <td>cursor-auto</td>
                            <td>cursor: auto;</td>
                        </tr>
                        <tr>
                            <td>cursor-pointer</td>
                            <td>cursor: pointer;</td>
                        </tr>
                        <tr>
                            <td>cursor-wait</td>
                            <td>cursor: wait;</td>
                        </tr>
                        <tr>
                            <td>cursor-move</td>
                            <td>cursor: move;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
