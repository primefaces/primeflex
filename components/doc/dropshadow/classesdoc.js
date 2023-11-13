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
                            <td>drop-shadow-none</td>
                            <td>filter: drop-shadow(0 0 0 transparent);</td>
                        </tr>
                        <tr>
                            <td>drop-shadow-1</td>
                            <td>filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.06));</td>
                        </tr>
                        <tr>
                            <td>drop-shadow-2</td>
                            <td>filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.08)), drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.08));</td>
                        </tr>
                        <tr>
                            <td>drop-shadow-3</td>
                            <td>filter: drop-shadow(0px 4px 7px rgba(0, 0, 0, 0.09)), drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.06));</td>
                        </tr>
                        <tr>
                            <td>drop-shadow-4</td>
                            <td>filter: drop-shadow(0px 10px 16px rgba(0, 0, 0, 0.1)), drop-shadow(0px 5px 7px rgba(0, 0, 0, 0.07));</td>
                        </tr>
                        <tr>
                            <td>drop-shadow-5</td>
                            <td>filter: drop-shadow(0px 11px 17px rgba(0, 0, 0, 0.1)), drop-shadow(0px 5px 8px rgba(0, 0, 0, 0.08));</td>
                        </tr>
                        <tr>
                            <td>drop-shadow-6</td>
                            <td>filter: drop-shadow(0px 20px 26px rgba(0, 0, 0, 0.11)), drop-shadow(0px 9px 11px rgba(0, 0, 0, 0.08));</td>
                        </tr>
                        <tr>
                            <td>drop-shadow-7</td>
                            <td>filter: drop-shadow(0px 25px 30px rgba(0, 0, 0, 0.12)), drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.09));</td>
                        </tr>
                        <tr>
                            <td>drop-shadow-8</td>
                            <td>filter: drop-shadow(0px 30px 35px rgba(0, 0, 0, 0.13)), drop-shadow(0px 15px 20px rgba(0, 0, 0, 0.10));</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
