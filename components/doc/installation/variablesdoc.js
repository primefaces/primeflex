import { DocSectionText } from '../common/docsectiontext';

export function VariablesDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>
                    SASS variables are available to customize and create your own primeflex build. To begin with clone the <a href="https://github.com/primefaces/primeflex">primeflex repo</a> and then build the primeflex.scss file after your
                    customizations. Refer to <a href="https://sass-lang.com/install">Sass</a> documentation for more information about how to build scss files.
                </p>
            </DocSectionText>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Variable</th>
                            <th>Description</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>$sm</td>
                            <td>Breakpoint of screens such as phones.</td>
                            <td>576px</td>
                        </tr>
                        <tr>
                            <td>$md</td>
                            <td>Breakpoint of screens such as tablets.</td>
                            <td>768px</td>
                        </tr>
                        <tr>
                            <td>$lg</td>
                            <td>Breakpoint of screens such as notebook monitors.</td>
                            <td>992px</td>
                        </tr>
                        <tr>
                            <td>$xl</td>
                            <td>Breakpoint of smaller screens such as desktop monitors.</td>
                            <td>1200px</td>
                        </tr>
                        <tr>
                            <td>$gutter</td>
                            <td>Padding of a grid column.</td>
                            <td>.5rem</td>
                        </tr>
                        <tr>
                            <td>$fieldMargin</td>
                            <td>Spacing of a field. Can be vertical of horizontal depending on form layout.</td>
                            <td>1rem</td>
                        </tr>
                        <tr>
                            <td>$fieldLabelMargin</td>
                            <td>Spacing of a field label. Can be vertical of horizontal depending on form layout.</td>
                            <td>.5rem</td>
                        </tr>
                        <tr>
                            <td>$helperTextMargin</td>
                            <td>Top spacing of a helper text.</td>
                            <td>.25rem</td>
                        </tr>
                        <tr>
                            <td>$spacer</td>
                            <td>Base value to use in spacing utilities, view spacing documentation for details.</td>
                            <td>1rem</td>
                        </tr>
                        <tr>
                            <td>$separator</td>
                            <td>
                                Separator between responsive breakpoints like <i>md:</i> and pseudo classes like <i>hover:</i>.
                            </td>
                            <td>:</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
