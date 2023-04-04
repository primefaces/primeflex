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
                            <td>animation-iteration-1</td>
                            <td>animation-iteration-count: 1;</td>
                        </tr>
                        <tr>
                            <td>animation-iteration-2</td>
                            <td>animation-iteration-count: 2;</td>
                        </tr>
                        <tr>
                            <td>animation-iteration-infinite</td>
                            <td>animation-iteration-count: infinite;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
