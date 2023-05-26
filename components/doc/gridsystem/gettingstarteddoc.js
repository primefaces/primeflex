import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function GettingStartedDoc(props) {
    const code = `<div class="grid">
    <div class="col">
        <div class="text-center p-3 border-round-sm bg-primary font-bold">1</div>
    </div>
    <div class="col">
        <div class="text-center p-3 border-round-sm bg-primary font-bold ">2</div>
    </div>
    <div class="col">
        <div class="text-center p-3 border-round-sm bg-primary font-bold ">3</div>
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    FlexGrid is a CSS utility based on flexbox. For more information about Flex, visit{' '}
                    <a target="_blank" href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">
                        A Complete Guide to Flexbox
                    </a>
                    . A basic grid is defined by giving a container <i>grid</i> class and children the <i>col</i> class. Children of the grid will have the same width and scale according to the width of the parent.
                </p>
            </DocSectionText>
            <div className="card">
                <div className="grid">
                    <div className="col">
                        <div className="text-center p-3 border-round-sm bg-primary font-bold ">1</div>
                    </div>
                    <div className="col">
                        <div className="text-center p-3 border-round-sm bg-primary font-bold ">2</div>
                    </div>
                    <div className="col">
                        <div className="text-center p-3 border-round-sm bg-primary font-bold ">3</div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
