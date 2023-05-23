import { DocSectionText } from '../common/docsectiontext';

export function ProductionSizeDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>
                    When using a utility CSS library like PrimeFlex, it is likely to use only a set of classes from the library leaving the rest of the library as unused. To avoid including the unused part from your application, it is strongly
                    recommended to use a tool like{' '}
                    <a href="https://purgecss.com/" target="_blank">
                        PurgeCSS
                    </a>{' '}
                    that analyzes your code and generates an optimized primeflex file that only contains the utilities you've used.
                </p>
            </DocSectionText>
        </>
    );
}
