import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ElevationDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Number of shadow classes have been reduced from 24 to 8 and <i>p</i> is removed.
                </p>
            </DocSectionText>
        </>
    );
}
