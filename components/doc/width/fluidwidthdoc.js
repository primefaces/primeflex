import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function FluidWidthDoc(props) {
    const code = {
        basic: `<div>
    <div class="flex">
        <div class="w-2">w-2</div>
        <div class="w-10">w-10</div>
    </div>
    <div class="flex">
        <div class="w-4">w-4</div>
        <div class="w-8">w-8</div>
    </div>
    <div class="flex">
        <div class="w-5">w-5</div>
        <div class="w-7">w-7</div>
    </div>
    <div class="flex">
        <div class="w-6">w-6</div>
        <div class="w-6">w-6</div>
    </div>
    <div class="flex">
        <div class="w-9">w-9</div>
        <div class="w-3">w-3</div>
    </div>
    <div class="flex">
        <div class="w-12">w-12</div>
    </div>
</div>
    `,
        expanded: `<div class="card">
    <div class="card-container green-container">
        <div class="flex border-round bg-green-100 p-3 m-3">
            <div class="w-2 bg-green-300 text-gray-900 font-bold p-2 flex align-items-center justify-content-center">w-2</div>
            <div class="w-10 bg-green-500 text-white font-bold p-3 flex align-items-center justify-content-center">w-10</div>
        </div>
        <div class="flex border-round bg-green-100 p-3 m-3">
            <div class="w-4 bg-green-300 text-gray-900 font-bold p-3 flex align-items-center justify-content-center">w-4</div>
            <div class="w-8 bg-green-500 text-white font-bold p-3 flex align-items-center justify-content-center">w-8</div>
        </div>
        <div class="flex border-round bg-green-100 p-3 m-3">
            <div class="w-5 bg-green-300 text-gray-900 font-bold p-3 flex align-items-center justify-content-center">w-5</div>
            <div class="w-7 bg-green-500 text-white font-bold p-3 flex align-items-center justify-content-center">w-7</div>
        </div>
        <div class="flex border-round bg-green-100 p-3 m-3">
            <div class="w-6 bg-green-300 text-gray-900 font-bold p-3 flex align-items-center justify-content-center">w-6</div>
            <div class="w-6 bg-green-500 text-white font-bold p-3 flex align-items-center justify-content-center">w-6</div>
        </div>
        <div class="flex border-round bg-green-100 p-3 m-3">
            <div class="w-9 bg-green-300 text-gray-900 font-bold p-3 flex align-items-center justify-content-center">w-9</div>
            <div class="w-3 bg-green-500 text-white font-bold p-3 flex align-items-center justify-content-center">w-3</div>
        </div>
        <div class="flex border-round bg-green-100 p-3 m-3">
            <div class="w-12 bg-green-300 text-gray-900 font-bold p-3 flex align-items-center justify-content-center">w-12</div>
        </div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Fluid widths are based on percentages on a 12 grid system.</p>
            </DocSectionText>
            <div className="card">
                <div className="card-container green-container">
                    <div className="flex border-round bg-green-100 p-3 m-3">
                        <div className="w-2 bg-green-300 text-gray-900 font-bold p-2 flex align-items-center justify-content-center">w-2</div>
                        <div className="w-10 bg-green-500 text-white font-bold p-3 flex align-items-center justify-content-center">w-10</div>
                    </div>
                    <div className="flex border-round bg-green-100 p-3 m-3">
                        <div className="w-4 bg-green-300 text-gray-900 font-bold p-3 flex align-items-center justify-content-center">w-4</div>
                        <div className="w-8 bg-green-500 text-white font-bold p-3 flex align-items-center justify-content-center">w-8</div>
                    </div>
                    <div className="flex border-round bg-green-100 p-3 m-3">
                        <div className="w-5 bg-green-300 text-gray-900 font-bold p-3 flex align-items-center justify-content-center">w-5</div>
                        <div className="w-7 bg-green-500 text-white font-bold p-3 flex align-items-center justify-content-center">w-7</div>
                    </div>
                    <div className="flex border-round bg-green-100 p-3 m-3">
                        <div className="w-6 bg-green-300 text-gray-900 font-bold p-3 flex align-items-center justify-content-center">w-6</div>
                        <div className="w-6 bg-green-500 text-white font-bold p-3 flex align-items-center justify-content-center">w-6</div>
                    </div>
                    <div className="flex border-round bg-green-100 p-3 m-3">
                        <div className="w-9 bg-green-300 text-gray-900 font-bold p-3 flex align-items-center justify-content-center">w-9</div>
                        <div className="w-3 bg-green-500 text-white font-bold p-3 flex align-items-center justify-content-center">w-3</div>
                    </div>
                    <div className="flex border-round bg-green-100 p-3 m-3">
                        <div className="w-12 bg-green-300 text-gray-900 font-bold p-3 flex align-items-center justify-content-center">w-12</div>
                    </div>
                </div>
            </div>

            <DocSectionCode code={code} />
        </>
    );
}
