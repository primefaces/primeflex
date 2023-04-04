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
                            <td>transition-none</td>
                            <td>transition-property: none;</td>
                        </tr>
                        <tr>
                            <td>transition-all</td>
                            <td>transition-property: all;</td>
                        </tr>
                        <tr>
                            <td>transition-colors</td>
                            <td>transition-property: background-color,border-color,color;</td>
                        </tr>
                        <tr>
                            <td>transition-transform</td>
                            <td>transition-property: transform;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
