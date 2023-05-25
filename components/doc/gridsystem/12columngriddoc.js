import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function TwelweColumnGridDoc(props) {
    const code = `<div class="grid">
    <div class="col-4">
        <div class="text-center p-3 border-round-sm bg-primary font-bold ">4</div>
    </div>
    <div class="col">
        <div class="text-center p-3 border-round-sm bg-primary font-bold ">1</div>
    </div>
    <div class="col">
        <div class="text-center p-3 border-round-sm bg-primary font-bold ">1</div>
    </div>
    <div class="col">
        <div class="text-center p-3 border-round-sm bg-primary font-bold ">1</div>
    </div>
    <div class="col">
        <div class="text-center p-3 border-round-sm bg-primary font-bold ">1</div>
    </div>
    <div class="col">
        <div class="text-center p-3 border-round-sm bg-primary font-bold ">1</div>
    </div>
    <div class="col">
        <div class="text-center p-3 border-round-sm bg-primary font-bold ">1</div>
    </div>
    <div class="col">
        <div class="text-center p-3 border-round-sm bg-primary font-bold ">1</div>
    </div>
    <div class="col">
        <div class="text-center p-3 border-round-sm bg-primary font-bold ">1</div>
    </div>
</div>

<div class="grid">
    <div class="col-2">
        <div class="text-center p-3 border-round-sm bg-primary font-bold ">2</div>
    </div>
    <div class="col-6">
        <div class="text-center p-3 border-round-sm bg-primary font-bold ">6</div>
    </div>
    <div class="col-4">
        <div class="text-center p-3 border-round-sm bg-primary font-bold ">4</div>
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    FlexGrid includes a 12 column based layout utility where width of a column is defined with the <i>col-&#123;number&#125;</i> style class. Columns with prefined widths can be used with columns with auto width (col) as well.
                </p>

                <p>In the first example below, first column covers the 4 units out of 12 and the rest of the columns share the remaining space whereas in the second example, all three columns have explicit units.</p>
            </DocSectionText>
            <div className="card">
                <div className="grid">
                    <div className="col-4">
                        <div className="text-center p-3 border-round-sm bg-primary font-bold ">4</div>
                    </div>
                    <div className="col">
                        <div className="text-center p-3 border-round-sm bg-primary font-bold ">1</div>
                    </div>
                    <div className="col">
                        <div className="text-center p-3 border-round-sm bg-primary font-bold ">1</div>
                    </div>
                    <div className="col">
                        <div className="text-center p-3 border-round-sm bg-primary font-bold ">1</div>
                    </div>
                    <div className="col">
                        <div className="text-center p-3 border-round-sm bg-primary font-bold ">1</div>
                    </div>
                    <div className="col">
                        <div className="text-center p-3 border-round-sm bg-primary font-bold ">1</div>
                    </div>
                    <div className="col">
                        <div className="text-center p-3 border-round-sm bg-primary font-bold ">1</div>
                    </div>
                    <div className="col">
                        <div className="text-center p-3 border-round-sm bg-primary font-bold ">1</div>
                    </div>
                    <div className="col">
                        <div className="text-center p-3 border-round-sm bg-primary font-bold ">1</div>
                    </div>
                </div>

                <div className="grid">
                    <div className="col-2">
                        <div className="text-center p-3 border-round-sm bg-primary font-bold ">2</div>
                    </div>
                    <div className="col-6">
                        <div className="text-center p-3 border-round-sm bg-primary font-bold ">6</div>
                    </div>
                    <div className="col-4">
                        <div className="text-center p-3 border-round-sm bg-primary font-bold ">4</div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
