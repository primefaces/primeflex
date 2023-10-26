import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = `
<div class="flex border-bottom-1 surface-border w-full">
    <p class="font-thin mr-3 text-blue-500 text-left w-2">font-thin</p>
    <p class="font-thin w-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
</div>
<div class="flex border-bottom-1 surface-border w-full">
    <p class="font-extralight mr-3 text-blue-500 text-left w-2">font-extralight</p>
    <p class="font-extralight w-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
</div>
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
<div class="flex border-bottom-1 surface-border w-full">
    <p class="font-extrabold mr-3 text-blue-500 w-2">font-extrabold</p>
    <p class="font-extrabold w-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
</div>
<div class="flex border-bottom-1 surface-border w-full">
    <p class="font-black mr-3 text-blue-500 w-2">font-black</p>
    <p class="font-black w-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card flex flex-wrap align-items-center justify-content-center">
                <div className="flex border-bottom-1 surface-border w-full">
                    <p className="font-thin mr-3 text-blue-500 text-left w-2">font-thin</p>
                    <p className="font-thin w-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div className="flex border-bottom-1 surface-border w-full">
                    <p className="font-extralight mr-3 text-blue-500 text-left w-2">font-extralight</p>
                    <p className="font-extralight w-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
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
                <div className="flex border-bottom-1 surface-border w-full">
                    <p className="font-extrabold mr-3 text-blue-500 w-2">font-extrabold</p>
                    <p className="font-extrabold w-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div className="flex border-bottom-1 surface-border w-full">
                    <p className="font-black mr-3 text-blue-500 w-2">font-black</p>
                    <p className="font-black w-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
