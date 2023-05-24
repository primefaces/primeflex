import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function NamedThemeColorDoc(props) {
    const code = `<div class="flex flex-wrap md:justify-content-between justify-content-center">
    <div class="surface-ground hover:surface-500 border-round surface-border border-3 text-surface-100 font-bold m-2 flex align-items-center justify-content-center" style="min-width: 200px; min-height: 100px">
        surface-ground <br/> surface-border
    </div>
    <div class="surface-section hover:surface-500 border-round text-surface-100 font-bold m-2 flex align-items-center justify-content-center" style="min-width: 200px; min-height: 100px">
        surface-section
    </div>
    <div class="surface-card hover:surface-500 border-round surface-border border-3 text-surface-100 font-bold m-2 flex align-items-center justify-content-center" style="min-width: 200px; min-height: 100px">
        surface-card
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Focus, Hover and Active states are available with the <i>focus:</i>, <i>hover:</i>, <i>active:</i> prefixes respectively.
                </p>
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Class</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>.surface-ground</td>
                                <td>Ground color like body background</td>
                            </tr>
                            <tr>
                                <td>.surface-section</td>
                                <td>Background of a content section</td>
                            </tr>
                            <tr>
                                <td>.surface-card</td>
                                <td>Background of an elevated card element</td>
                            </tr>
                            <tr>
                                <td>.surface-overlay</td>
                                <td>Overlay elements like modals</td>
                            </tr>
                            <tr>
                                <td>.surface-border</td>
                                <td>Border colors to divide content</td>
                            </tr>
                            <tr>
                                <td>.surface-hover</td>
                                <td>Background color of an element in hover state</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-wrap md:justify-content-between justify-content-center">
                    <div className="surface-ground hover:surface-500 border-round surface-border border-3 text-surface-100 font-bold m-2 flex align-items-center justify-content-center" style={{ minWidth: '200px', minHeight: '100px' }}>
                        surface-ground <br /> surface-border
                    </div>
                    <div className="surface-section hover:surface-500 border-round text-surface-100 font-bold m-2 flex align-items-center justify-content-center" style={{ minWidth: '200px', minHeight: '100px' }}>
                        surface-section
                    </div>
                    <div className="surface-card hover:bg-orange-700 border-round surface-border border-3 text-surface-100 font-bold m-2 flex align-items-center justify-content-center" style={{ minWidth: '200px', minHeight: '100px' }}>
                        hover:bg-orange-700
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
