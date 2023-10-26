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
                            <td>hue-rotate-0</td>
                            <td>filter: hue-rotate(0deg);</td>
                        </tr>
                        <tr>
                            <td>hue-rotate-15</td>
                            <td>filter: hue-rotate(15deg);</td>
                        </tr>
                        <tr>
                            <td>hue-rotate-30</td>
                            <td>filter: hue-rotate(30deg);</td>
                        </tr>
                        <tr>
                            <td>hue-rotate-45</td>
                            <td>filter: hue-rotate(45deg);</td>
                        </tr>
                        <tr>
                            <td>hue-rotate-60</td>
                            <td>filter: hue-rotate(60deg);</td>
                        </tr>
                        <tr>
                            <td>hue-rotate-75</td>
                            <td>filter: hue-rotate(75deg);</td>
                        </tr>
                        <tr>
                            <td>hue-rotate-90</td>
                            <td>filter: hue-rotate(90deg);</td>
                        </tr>
                        <tr>
                            <td>hue-rotate-105</td>
                            <td>filter: hue-rotate(105deg);</td>
                        </tr>
                        <tr>
                            <td>hue-rotate-120</td>
                            <td>filter: hue-rotate(120deg);</td>
                        </tr>
                        <tr>
                            <td>hue-rotate-135</td>
                            <td>filter: hue-rotate(135deg);</td>
                        </tr>
                        <tr>
                            <td>hue-rotate-150</td>
                            <td>filter: hue-rotate(150deg);</td>
                        </tr>
                        <tr>
                            <td>hue-rotate-165</td>
                            <td>filter: hue-rotate(165deg);</td>
                        </tr>
                        <tr>
                            <td>hue-rotate-180</td>
                            <td>filter: hue-rotate(180deg);</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
