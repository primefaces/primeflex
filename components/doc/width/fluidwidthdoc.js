import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function FluidWidthDoc(props) {
    const code = `<div class="flex border-round bg-primary-100 p-3 m-3">
    <div class="w-2 bg-green-300 font-bold p-2 flex align-items-center justify-content-center">w-2</div>
    <div class="w-10 bg-primary font-bold p-3 flex align-items-center justify-content-center">w-10</div>
</div>
<div class="flex border-round bg-primary-100 p-3 m-3">
    <div class="w-4 bg-green-300 font-bold p-3 flex align-items-center justify-content-center">w-4</div>
    <div class="w-8 bg-primary font-bold p-3 flex align-items-center justify-content-center">w-8</div>
</div>
<div class="flex border-round bg-primary-100 p-3 m-3">
    <div class="w-5 bg-green-300 font-bold p-3 flex align-items-center justify-content-center">w-5</div>
    <div class="w-7 bg-primary font-bold p-3 flex align-items-center justify-content-center">w-7</div>
</div>
<div class="flex border-round bg-primary-100 p-3 m-3">
    <div class="w-6 bg-green-300 font-bold p-3 flex align-items-center justify-content-center">w-6</div>
    <div class="w-6 bg-primary font-bold p-3 flex align-items-center justify-content-center">w-6</div>
</div>
<div class="flex border-round bg-primary-100 p-3 m-3">
    <div class="w-9 bg-green-300 font-bold p-3 flex align-items-center justify-content-center">w-9</div>
    <div class="w-3 bg-primary font-bold p-3 flex align-items-center justify-content-center">w-3</div>
</div>
<div class="flex border-round bg-primary-100 p-3 m-3">
    <div class="w-12 bg-green-300 font-bold p-3 flex align-items-center justify-content-center">w-12</div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>Fluid widths are based on percentages on a 12 grid system.</p>
            </DocSectionText>
            <div className="card">
                <div className="flex border-round bg-primary-100 p-3 m-3">
                    <div className="w-2 bg-green-300 font-bold p-2 flex align-items-center justify-content-center">w-2</div>
                    <div className="w-10 bg-primary font-bold p-3 flex align-items-center justify-content-center">w-10</div>
                </div>
                <div className="flex border-round bg-primary-100 p-3 m-3">
                    <div className="w-4 bg-green-300 font-bold p-3 flex align-items-center justify-content-center">w-4</div>
                    <div className="w-8 bg-primary font-bold p-3 flex align-items-center justify-content-center">w-8</div>
                </div>
                <div className="flex border-round bg-primary-100 p-3 m-3">
                    <div className="w-5 bg-green-300 font-bold p-3 flex align-items-center justify-content-center">w-5</div>
                    <div className="w-7 bg-primary font-bold p-3 flex align-items-center justify-content-center">w-7</div>
                </div>
                <div className="flex border-round bg-primary-100 p-3 m-3">
                    <div className="w-6 bg-green-300 font-bold p-3 flex align-items-center justify-content-center">w-6</div>
                    <div className="w-6 bg-primary font-bold p-3 flex align-items-center justify-content-center">w-6</div>
                </div>
                <div className="flex border-round bg-primary-100 p-3 m-3">
                    <div className="w-9 bg-green-300 font-bold p-3 flex align-items-center justify-content-center">w-9</div>
                    <div className="w-3 bg-primary font-bold p-3 flex align-items-center justify-content-center">w-3</div>
                </div>
                <div className="flex border-round bg-primary-100 p-3 m-3">
                    <div className="w-12 bg-green-300 font-bold p-3 flex align-items-center justify-content-center">w-12</div>
                </div>
            </div>

            <DocSectionCode code={code} />
        </>
    );
}
