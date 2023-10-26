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
                            <td>cursor-auto</td>
                            <td>cursor: auto;</td>
                        </tr>
                        <tr>
                            <td>cursor-default</td>
                            <td>cursor: default;</td>
                        </tr>
                        <tr>
                            <td>cursor-pointer</td>
                            <td>cursor: pointer;</td>
                        </tr>
                        <tr>
                            <td>cursor-wait</td>
                            <td>cursor: wait;</td>
                        </tr>
                        <tr>
                            <td>cursor-move</td>
                            <td>cursor: move;</td>
                        </tr>
                        <tr>
                            <td>cursor-help</td>
                            <td>cursor: help;</td>
                        </tr>
                        <tr>
                            <td>cursor-text</td>
                            <td>cursor: text;</td>
                        </tr>
                        <tr>
                            <td>cursor-vertical-text</td>
                            <td>cursor: vertical-text;</td>
                        </tr>
                        <tr>
                            <td>cursor-alias</td>
                            <td>cursor: alias;</td>
                        </tr>
                        <tr>
                            <td>cursor-copy</td>
                            <td>cursor: copy;</td>
                        </tr>
                        <tr>
                            <td>cursor-no-drop</td>
                            <td>cursor: no-drop;</td>
                        </tr>
                        <tr>
                            <td>cursor-not-allowed</td>
                            <td>cursor: not-allowed;</td>
                        </tr>
                        <tr>
                            <td>cursor-grab</td>
                            <td>cursor: grab;</td>
                        </tr>
                        <tr>
                            <td>cursor-grabbing</td>
                            <td>cursor: grabbing;</td>
                        </tr>
                        <tr>
                            <td>cursor-col-resize</td>
                            <td>cursor: col-resize;</td>
                        </tr>
                        <tr>
                            <td>cursor-row-resize</td>
                            <td>cursor: row-resize;</td>
                        </tr>
                        <tr>
                            <td>cursor-n-resize</td>
                            <td>cursor: n-resize;</td>
                        </tr>
                        <tr>
                            <td>cursor-e-resize</td>
                            <td>cursor: e-resize;</td>
                        </tr>
                        <tr>
                            <td>cursor-s-resize</td>
                            <td>cursor: s-resize;</td>
                        </tr>
                        <tr>
                            <td>cursor-w-resize</td>
                            <td>cursor: w-resize;</td>
                        </tr>
                        <tr>
                            <td>cursor-ne-resize</td>
                            <td>cursor: ne-resize;</td>
                        </tr>
                        <tr>
                            <td>cursor-nw-resize</td>
                            <td>cursor: nw-resize;</td>
                        </tr>
                        <tr>
                            <td>cursor-se-resize</td>
                            <td>cursor: se-resize;</td>
                        </tr>
                        <tr>
                            <td>cursor-sw-resize</td>
                            <td>cursor: sw-resize;</td>
                        </tr>
                        <tr>
                            <td>cursor-ew-resize</td>
                            <td>cursor: ew-resize;</td>
                        </tr>
                        <tr>
                            <td>cursor-ns-resize</td>
                            <td>cursor: ns-resize;</td>
                        </tr>
                        <tr>
                            <td>cursor-nesw-resize</td>
                            <td>cursor: nesw-resize;</td>
                        </tr>
                        <tr>
                            <td>cursor-nwse-resize</td>
                            <td>cursor: nwse-resize;</td>
                        </tr>
                        <tr>
                            <td>cursor-zoom-in</td>
                            <td>cursor: zoom-in;</td>
                        </tr>
                        <tr>
                            <td>cursor-zoom-out</td>
                            <td>cursor: zoom-out;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
