import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = `<div class="flex flex-wrap align-items-center justify-content-center">
    <div class="surface-overlay border-round border-1 p-3 m-3 w-16rem min-h-full flex align-items-center justify-content-center">
        <p class="underline">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </div>
    <div class="surface-overlay border-round border-1 p-3 m-3 w-16rem min-h-full flex align-items-center justify-content-center">
        <p class="line-through">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </div>
    <div class="surface-overlay border-round border-1 p-3 m-3 w-16rem min-h-full flex align-items-center justify-content-center">
        <a href="#" class="no-underline">
            Link with no underline
        </a>
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center">
                    <div className="surface-overlay border-round border-1 p-3 m-3 w-16rem min-h-full flex align-items-center justify-content-center">
                        <p className="underline">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div className="surface-overlay border-round border-1 p-3 m-3 w-16rem min-h-full flex align-items-center justify-content-center">
                        <p className="line-through">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div className="surface-overlay border-round border-1 p-3 m-3 w-16rem min-h-full flex align-items-center justify-content-center">
                        <a href="#" className="no-underline">
                            Link with no underline
                        </a>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
