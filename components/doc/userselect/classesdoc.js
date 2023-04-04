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
                            <td>select-none</td>
                            <td>user-select: none;</td>
                        </tr>
                        <tr>
                            <td>select-text</td>
                            <td>user-select: text;</td>
                        </tr>
                        <tr>
                            <td>select-all</td>
                            <td>user-select: all;</td>
                        </tr>
                        <tr>
                            <td>select-auto</td>
                            <td>user-select: auto;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
