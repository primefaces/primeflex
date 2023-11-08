import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function viaDoc(props) {
    const code = `<div class="flex flex-column gap-5">
    <div class="bg-gradient-to-r from-blue-500 via-cyan-400 to-pink-500 h-4rem w-full border-round"></div>
    <div class="bg-gradient-to-r from-purple-500 via-pink-400 to-purple-500/60 h-4rem w-full border-round"></div>
    <div class="bg-gradient-to-r from-green-500/60 via-cyan-400 to-blue-400 h-4rem w-full border-round"></div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>Background image is repeated vertically only.</p>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-column gap-5">
                    <div className="bg-gradient-to-r from-blue-500 via-purple-400 to-green-500 h-4rem w-full border-round"></div>
                    <div className="bg-gradient-to-r from-purple-500 via-pink-400 to-purple-500/60 h-4rem w-full border-round"></div>
                    <div className="bg-gradient-to-r from-green-500/60 via-cyan-400 to-blue-400 h-4rem w-full border-round"></div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
