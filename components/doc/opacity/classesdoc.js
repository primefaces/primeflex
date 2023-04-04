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
                            <td>opacity-0</td>
                            <td>opacity: 0;</td>
                        </tr>
                        <tr>
                            <td>opacity-10</td>
                            <td>opacity: .1;</td>
                        </tr>
                        <tr>
                            <td>opacity-20</td>
                            <td>opacity: .2;</td>
                        </tr>
                        <tr>
                            <td>opacity-30</td>
                            <td>opacity: .3;</td>
                        </tr>
                        <tr>
                            <td>opacity-40</td>
                            <td>opacity: .4;</td>
                        </tr>
                        <tr>
                            <td>opacity-50</td>
                            <td>opacity: .5;</td>
                        </tr>
                        <tr>
                            <td>opacity-60</td>
                            <td>opacity: .6;</td>
                        </tr>
                        <tr>
                            <td>opacity-70</td>
                            <td>opacity: .7;</td>
                        </tr>
                        <tr>
                            <td>opacity-80</td>
                            <td>opacity: .8;</td>
                        </tr>
                        <tr>
                            <td>opacity-90</td>
                            <td>opacity: .9;</td>
                        </tr>
                        <tr>
                            <td>opacity-100</td>
                            <td>opacity: 1;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
