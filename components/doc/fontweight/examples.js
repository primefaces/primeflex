import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = {
        basic: `<div>
    <div class="flex">
        <p class="font-light text-blue-500">font-light</p>
        <p class="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </div>
    <div class="flex">
        <p class="font-normal text-blue-500">font-normal</p>
        <p class="font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </div>
    <div class="flex">
        <p class="font-medium text-blue-500">font-medium</p>
        <p class="font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </div>
    <div class="flex">
        <p class="font-semibold text-blue-500">font-semibold</p>
        <p class="font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </div>
    <div class="flex">
        <p class="font-bold text-blue-500">font-bold</p>
        <p class="font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </div>
</div>
    `,
        expanded: `<div class="card flex flex-wrap align-items-center justify-content-center">
    <div class="flex border-bottom-1 surface-border w-full">
        <p class="font-light mr-3 text-blue-500 text-left w-2">font-light</p>
        <p class="font-light w-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </div>
    <div class="flex border-bottom-1 surface-border w-full">
        <p class="font-normal mr-3 text-blue-500 w-2">font-normal</p>
        <p class="font-normal w-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </div>
    <div class="flex border-bottom-1 surface-border w-full">
        <p class="font-medium mr-3 text-blue-500 w-2">font-medium</p>
        <p class="font-medium w-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </div>
    <div class="flex border-bottom-1 surface-border w-full">
        <p class="font-semibold mr-3 text-blue-500 w-2">font-semibold</p>
        <p class="font-semibold w-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </div>
    <div class="flex border-bottom-1 surface-border w-full">
        <p class="font-bold mr-3 text-blue-500 w-2">font-bold</p>
        <p class="font-bold w-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card flex flex-wrap align-items-center justify-content-center">
                <div className="flex border-bottom-1 surface-border w-full">
                    <p className="font-light mr-3 text-blue-500 text-left w-2">font-light</p>
                    <p className="font-light w-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div className="flex border-bottom-1 surface-border w-full">
                    <p className="font-normal mr-3 text-blue-500 w-2">font-normal</p>
                    <p className="font-normal w-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div className="flex border-bottom-1 surface-border w-full">
                    <p className="font-medium mr-3 text-blue-500 w-2">font-medium</p>
                    <p className="font-medium w-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div className="flex border-bottom-1 surface-border w-full">
                    <p className="font-semibold mr-3 text-blue-500 w-2">font-semibold</p>
                    <p className="font-semibold w-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div className="flex border-bottom-1 surface-border w-full">
                    <p className="font-bold mr-3 text-blue-500 w-2">font-bold</p>
                    <p className="font-bold w-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
