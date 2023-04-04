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
                            <td>flex-order-0</td>
                            <td>order: 0;</td>
                        </tr>
                        <tr>
                            <td>flex-order-1</td>
                            <td>order: 1;</td>
                        </tr>
                        <tr>
                            <td>flex-order-2</td>
                            <td>order: 2;</td>
                        </tr>
                        <tr>
                            <td>flex-order-3</td>
                            <td>order: 3;</td>
                        </tr>
                        <tr>
                            <td>flex-order-4</td>
                            <td>order: 4;</td>
                        </tr>
                        <tr>
                            <td>flex-order-5</td>
                            <td>order: 5;</td>
                        </tr>
                        <tr>
                            <td>flex-order-6</td>
                            <td>order: 6;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
