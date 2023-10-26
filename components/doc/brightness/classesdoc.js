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
                            <td>brightness-0</td>
                            <td>filter: brightness(0);</td>
                        </tr>
                        <tr>
                            <td>brightness-50</td>
                            <td>filter: brightness(0.5);</td>
                        </tr>
                        <tr>
                            <td>brightness-75</td>
                            <td>filter: brightness(0.75);</td>
                        </tr>
                        <tr>
                            <td>brightness-90</td>
                            <td>filter: brightness(0.9);</td>
                        </tr>
                        <tr>
                            <td>brightness-100</td>
                            <td>filter: brightness(1);</td>
                        </tr>
                        <tr>
                            <td>brightness-105</td>
                            <td>filter: brightness(1.05);</td>
                        </tr>
                        <tr>
                            <td>brightness-110</td>
                            <td>filter: brightness(1.1);</td>
                        </tr>
                        <tr>
                            <td>brightness-125</td>
                            <td>filter: brightness(1.25);</td>
                        </tr>
                        <tr>
                            <td>brightness-150</td>
                            <td>filter: brightness(1.5);</td>
                        </tr>
                        <tr>
                            <td>brightness-200</td>
                            <td>filter: brightness(2);</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
