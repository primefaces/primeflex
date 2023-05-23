import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = `<div class="flex flex-column justify-content-center">
    <p class="font-bold">Try clicking the caret icon to open the dropdown</p>
    <p>pointer-events-auto (event captured)</p>
    <div class="relative w-12rem mb-3">
        <select class="block appearance-none w-full p-2 border-round">
            <option>Indiana</option>
            <option>Michigan</option>
            <option>Ohio</option>
        </select>
        <div class="pointer-events-auto absolute flex align-items-center p-2 border-round-right" style="top:0; bottom: 0; right: 0">
            <svg class="h-1rem w-1rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
            </svg>
        </div>
    </div>

    <p>pointer-events-none (event passes through)</p>
    <div class="relative w-12rem">
        <select class="block appearance-none w-full p-2 border-round">
            <option>Indiana</option>
            <option>Michigan</option>
            <option>Ohio</option>
        </select>
        <div class="pointer-events-none absolute flex flex align-items-center p-2 border-round-right" style="top:0; bottom: 0; right: 0">
            <svg class="h-1rem w-1rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
            </svg>
        </div>
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div class="card">
                <div class="flex flex-column justify-content-center">
                    <p class="font-bold">Try clicking the caret icon to open the dropdown</p>
                    <p>pointer-events-auto (event captured)</p>
                    <div class="relative w-12rem mb-3">
                        <select class="block appearance-none w-full p-2 border-round">
                            <option>Indiana</option>
                            <option>Michigan</option>
                            <option>Ohio</option>
                        </select>
                        <div class="pointer-events-auto absolute flex align-items-center p-2 border-round-right top-0 bottom-0 right-0">
                            <svg class="h-1rem w-1rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                            </svg>
                        </div>
                    </div>

                    <p>pointer-events-none (event passes through)</p>
                    <div class="relative w-12rem">
                        <select class="block appearance-none w-full p-2 border-round">
                            <option>Indiana</option>
                            <option>Michigan</option>
                            <option>Ohio</option>
                        </select>
                        <div class="pointer-events-none absolute flex flex align-items-center p-2 border-round-right  top-0 bottom-0 right-0">
                            <svg class="h-1rem w-1rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
