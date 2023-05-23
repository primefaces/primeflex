import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = `<div class="flex flex-wrap align-items-center justify-content-center">
    <div class="shadow-none m-3 surface-card text-center p-3 border-round-sm h-6rem w-9rem flex align-items-center justify-content-center font-semibold">shadow-none</div>
    <div class="shadow-1 m-3 surface-card text-center p-3 border-round-sm h-6rem w-9rem flex align-items-center justify-content-center font-semibold">shadow-1</div>
    <div class="shadow-2 m-3 surface-card text-center p-3 border-round-sm h-6rem w-9rem flex align-items-center justify-content-center font-semibold">shadow-2</div>
</div>
<div class="flex flex-wrap align-items-center justify-content-center">
    <div class="shadow-3 m-3 surface-card text-center p-3 border-round-sm h-6rem w-9rem flex align-items-center justify-content-center font-semibold">shadow-3</div>
    <div class="shadow-4 m-3 surface-card text-center p-3 border-round-sm h-6rem w-9rem flex align-items-center justify-content-center font-semibold">shadow-4</div>
    <div class="shadow-5 m-3 surface-card text-center p-3 border-round-sm h-6rem w-9rem flex align-items-center justify-content-center font-semibold">shadow-5</div>
</div>
<div class="flex flex-wrap align-items-center justify-content-center">
    <div class="shadow-6 m-3 surface-card text-center p-3 border-round-sm h-6rem w-9rem flex align-items-center justify-content-center font-semibold">shadow-6</div>
    <div class="shadow-7 m-3 surface-card text-center p-3 border-round-sm h-6rem w-9rem flex align-items-center justify-content-center font-semibold">shadow-7</div>
    <div class="shadow-8 m-3 surface-card text-center p-3 border-round-sm h-6rem w-9rem flex align-items-center justify-content-center font-semibold">shadow-8</div>
</div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center">
                    <div className="shadow-none m-3 surface-card text-center p-3 border-round-sm h-6rem w-9rem flex align-items-center justify-content-center font-semibold">shadow-none</div>
                    <div className="shadow-1 m-3 surface-card text-center p-3 border-round-sm h-6rem w-9rem flex align-items-center justify-content-center font-semibold">shadow-1</div>
                    <div className="shadow-2 m-3 surface-card text-center p-3 border-round-sm h-6rem w-9rem flex align-items-center justify-content-center font-semibold">shadow-2</div>
                </div>
                <div className="flex flex-wrap align-items-center justify-content-center">
                    <div className="shadow-3 m-3 surface-card text-center p-3 border-round-sm h-6rem w-9rem flex align-items-center justify-content-center font-semibold">shadow-3</div>
                    <div className="shadow-4 m-3 surface-card text-center p-3 border-round-sm h-6rem w-9rem flex align-items-center justify-content-center font-semibold">shadow-4</div>
                    <div className="shadow-5 m-3 surface-card text-center p-3 border-round-sm h-6rem w-9rem flex align-items-center justify-content-center font-semibold">shadow-5</div>
                </div>
                <div className="flex flex-wrap align-items-center justify-content-center">
                    <div className="shadow-6 m-3 surface-card text-center p-3 border-round-sm h-6rem w-9rem flex align-items-center justify-content-center font-semibold">shadow-6</div>
                    <div className="shadow-7 m-3 surface-card text-center p-3 border-round-sm h-6rem w-9rem flex align-items-center justify-content-center font-semibold">shadow-7</div>
                    <div className="shadow-8 m-3 surface-card text-center p-3 border-round-sm h-6rem w-9rem flex align-items-center justify-content-center font-semibold">shadow-8</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
