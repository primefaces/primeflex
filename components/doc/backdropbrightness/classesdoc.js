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
                            <td>backdrop-brightness-0</td>
                            <td>backdrop-filter: brightness(0);</td>
                        </tr>
                        <tr>
                            <td>backdrop-brightness-50</td>
                            <td>backdrop-filter: brightness(0.5);</td>
                        </tr>
                        <tr>
                            <td>backdrop-brightness-75</td>
                            <td>backdrop-filter: brightness(0.75);</td>
                        </tr>
                        <tr>
                            <td>backdrop-brightness-90</td>
                            <td>backdrop-filter: brightness(0.9);</td>
                        </tr>
                        <tr>
                            <td>backdrop-brightness-100</td>
                            <td>backdrop-filter: brightness(1);</td>
                        </tr>
                        <tr>
                            <td>backdrop-brightness-105</td>
                            <td>backdrop-filter: brightness(1.05);</td>
                        </tr>
                        <tr>
                            <td>backdrop-brightness-110</td>
                            <td>backdrop-filter: brightness(1.1);</td>
                        </tr>
                        <tr>
                            <td>backdrop-brightness-125</td>
                            <td>backdrop-filter: brightness(1.25);</td>
                        </tr>
                        <tr>
                            <td>backdrop-brightness-150</td>
                            <td>backdrop-filter: brightness(1.5);</td>
                        </tr>
                        <tr>
                            <td>backdrop-brightness-200</td>
                            <td>backdrop-filter: brightness(2);</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
