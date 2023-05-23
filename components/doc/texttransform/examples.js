import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = `<div class="flex flex-wrap align-items-center justify-content-center">
    <div class="surface-overlay border-round border-1 p-3 m-3 w-16rem h-16rem flex align-items-center justify-content-center">
        <p class="lowercase">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </div>
    <div class="surface-overlay border-round border-1 p-3 m-3 w-16rem h-16rem flex align-items-center justify-content-center">
        <p class="uppercase">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </div>
    <div class="surface-overlay border-round border-1 p-3 m-3 w-16rem h-16rem flex align-items-center justify-content-center">
        <p class="capitalize">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center">
                    <div className="surface-overlay border-round border-1 p-3 m-3 w-16rem h-16rem flex align-items-center justify-content-center">
                        <p className="lowercase">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div className="surface-overlay border-round border-1 p-3 m-3 w-16rem h-16rem flex align-items-center justify-content-center">
                        <p className="uppercase">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div className="surface-overlay border-round border-1 p-3 m-3 w-16rem h-16rem flex align-items-center justify-content-center">
                        <p className="capitalize">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
