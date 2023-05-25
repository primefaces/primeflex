import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = `<div class="flex flex-wrap align-items-center justify-content-center">
    <div class="scalein animation-linear animation-duration-500 animation-iteration-infinite flex align-items-center justify-content-center
        font-bold bg-primary border-round m-2 px-5 py-3">
        linear
    </div>
    <div class="scalein animation-ease-in animation-duration-500 animation-iteration-infinite flex align-items-center justify-content-center
        font-bold bg-primary border-round m-2 px-5 py-3">
        ease-in
    </div>
    <div class="scalein animation-ease-out animation-duration-500 animation-iteration-infinite flex align-items-center justify-content-center
        font-bold bg-primary border-round m-2 px-5 py-3">
        ease-out
    </div>
    <div class="scalein animation-ease-in-out animation-duration-500 animation-iteration-infinite flex align-items-center justify-content-center
        font-bold bg-primary border-round m-2 px-5 py-3">
        ease-in-out
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center">
                    <div
                        className="scalein animation-linear animation-duration-500 animation-iteration-infinite flex align-items-center justify-content-center
                        font-bold bg-primary border-round m-2 px-5 py-3"
                    >
                        linear
                    </div>
                    <div
                        className="scalein animation-ease-in animation-duration-500 animation-iteration-infinite flex align-items-center justify-content-center
                        font-bold bg-primary border-round m-2 px-5 py-3"
                    >
                        ease-in
                    </div>
                    <div
                        className="scalein animation-ease-out animation-duration-500 animation-iteration-infinite flex align-items-center justify-content-center
                        font-bold bg-primary border-round m-2 px-5 py-3"
                    >
                        ease-out
                    </div>
                    <div
                        className="scalein animation-ease-in-out animation-duration-500 animation-iteration-infinite flex align-items-center justify-content-center
                        font-bold bg-primary border-round m-2 px-5 py-3"
                    >
                        ease-in-out
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
