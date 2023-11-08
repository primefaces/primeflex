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
                            <td>bg-none</td>
                            <td>background-image: none;</td>
                        </tr>
                        <tr>
                            <td>bg-gradient-to-t</td>
                            <td>background-image: linear-gradient(to top, , var(--gradient-from) var(--gradient-from-percentage, 0%), var(--gradient-to, var(--gradient-from),transparent) var(--gradient-to-percentage, 100%));</td>
                        </tr>
                        <tr>
                            <td>bg-gradient-to-tr</td>
                            <td>background-image: linear-gradient(to top right, , var(--gradient-from) var(--gradient-from-percentage, 0%), var(--gradient-to, var(--gradient-from),transparent) var(--gradient-to-percentage, 100%));</td>
                        </tr>
                        <tr>
                            <td>bg-gradient-to-r</td>
                            <td>background-image: linear-gradient(to right, , var(--gradient-from) var(--gradient-from-percentage, 0%), var(--gradient-to, var(--gradient-from),transparent) var(--gradient-to-percentage, 100%));</td>
                        </tr>
                        <tr>
                            <td>bg-gradient-to-br</td>
                            <td>background-image: linear-gradient(to bottom right, , var(--gradient-from) var(--gradient-from-percentage, 0%), var(--gradient-to, var(--gradient-from),transparent) var(--gradient-to-percentage, 100%));</td>
                        </tr>
                        <tr>
                            <td>bg-gradient-to-b</td>
                            <td>background-image: linear-gradient(to bottom, , var(--gradient-from) var(--gradient-from-percentage, 0%), var(--gradient-to, var(--gradient-from),transparent) var(--gradient-to-percentage, 100%));</td>
                        </tr>
                        <tr>
                            <td>bg-gradient-to-bl</td>
                            <td>background-image: linear-gradient(to bottom left, , var(--gradient-from) var(--gradient-from-percentage, 0%), var(--gradient-to, var(--gradient-from),transparent) var(--gradient-to-percentage, 100%));</td>
                        </tr>
                        <tr>
                            <td>bg-gradient-to-l</td>
                            <td>background-image: linear-gradient(to left, , var(--gradient-from) var(--gradient-from-percentage, 0%), var(--gradient-to, var(--gradient-from),transparent) var(--gradient-to-percentage, 100%));</td>
                        </tr>
                        <tr>
                            <td>bg-gradient-to-tl</td>
                            <td>background-image: linear-gradient(to top left, , var(--gradient-from) var(--gradient-from-percentage, 0%), var(--gradient-to, var(--gradient-from),transparent) var(--gradient-to-percentage, 100%));</td>
                        </tr>

                        <tr>
                            <td>bg-radial-gradient-to-t</td>
                            <td>background-image: radial-gradient(at top, , var(--gradient-from) var(--gradient-from-percentage, 0%), var(--gradient-to, var(--gradient-from),transparent) var(--gradient-to-percentage, 100%));</td>
                        </tr>
                        <tr>
                            <td>bg-radial-gradient-to-tr</td>
                            <td>background-image: radial-gradient(at top right, , var(--gradient-from) var(--gradient-from-percentage, 0%), var(--gradient-to, var(--gradient-from),transparent) var(--gradient-to-percentage, 100%));</td>
                        </tr>
                        <tr>
                            <td>bg-radial-gradient-to-r</td>
                            <td>background-image: radial-gradient(at right, , var(--gradient-from) var(--gradient-from-percentage, 0%), var(--gradient-to, var(--gradient-from),transparent) var(--gradient-to-percentage, 100%));</td>
                        </tr>
                        <tr>
                            <td>bg-radial-gradient-to-br</td>
                            <td>background-image: radial-gradient(at bottom right, , var(--gradient-from) var(--gradient-from-percentage, 0%), var(--gradient-to, var(--gradient-from),transparent) var(--gradient-to-percentage, 100%));</td>
                        </tr>
                        <tr>
                            <td>bg-radial-gradient-to-b</td>
                            <td>background-image: radial-gradient(at bottom, , var(--gradient-from) var(--gradient-from-percentage, 0%), var(--gradient-to, var(--gradient-from),transparent) var(--gradient-to-percentage, 100%));</td>
                        </tr>
                        <tr>
                            <td>bg-radial-gradient-to-bl</td>
                            <td>background-image: radial-gradient(at bottom left, , var(--gradient-from) var(--gradient-from-percentage, 0%), var(--gradient-to, var(--gradient-from),transparent) var(--gradient-to-percentage, 100%));</td>
                        </tr>
                        <tr>
                            <td>bg-radial-gradient-to-l</td>
                            <td>background-image: radial-gradient(at left, , var(--gradient-from) var(--gradient-from-percentage, 0%), var(--gradient-to, var(--gradient-from),transparent) var(--gradient-to-percentage, 100%));</td>
                        </tr>
                        <tr>
                            <td>bg-radial-gradient-to-tl</td>
                            <td>background-image: radial-gradient(at top left, , var(--gradient-from) var(--gradient-from-percentage, 0%), var(--gradient-to, var(--gradient-from),transparent) var(--gradient-to-percentage, 100%));</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
