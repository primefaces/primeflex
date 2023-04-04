import { Button } from 'primereact/button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function GridDoc(props) {

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    <i>p</i> prefix is removed and <i>p-nogutter</i> has been renamed to <i>grid-nogutter</i>
                </p>
            </DocSectionText>
        </>
    );
}
