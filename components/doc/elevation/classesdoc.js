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
                            <td>shadow-none</td>
                            <td>box-shadow: none;</td>
                        </tr>
                        <tr>
                            <td>shadow-1</td>
                            <td>box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.08);</td>
                        </tr>
                        <tr>
                            <td>shadow-2</td>
                            <td>box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.12);</td>
                        </tr>
                        <tr>
                            <td>shadow-3</td>
                            <td>box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.08), 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 1px 4px -1px rgba(0, 0, 0, 0.1);</td>
                        </tr>
                        <tr>
                            <td>shadow-4</td>
                            <td>box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px -1px rgba(0, 0, 0, 0.2);</td>
                        </tr>
                        <tr>
                            <td>shadow-5</td>
                            <td>box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1), 0px 4px 5px -2px rgba(0, 0, 0, 0.12), 0px 10px 15px -5px rgba(0, 0, 0, 0.2);</td>
                        </tr>
                        <tr>
                            <td>shadow-6</td>
                            <td>box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.06), 0px 7px 9px rgba(0, 0, 0, 0.12), 0px 20px 25px -8px rgba(0, 0, 0, 0.18);</td>
                        </tr>
                        <tr>
                            <td>shadow-7</td>
                            <td>box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.08), 0px 22px 30px 2px rgba(0, 0, 0, 0.15), 0px 8px 10px rgba(0, 0, 0, 0.15);</td>
                        </tr>
                        <tr>
                            <td>shadow-8</td>
                            <td>box-shadow: 0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 11px 15px rgba(0, 0, 0, 0.2);</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
