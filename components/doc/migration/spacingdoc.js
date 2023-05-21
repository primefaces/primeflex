import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function SpacingDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>
                    <i>p</i> prefix is removed.
                </p>
            </DocSectionText>
        </>
    );
}
