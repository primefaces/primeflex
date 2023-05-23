import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function VerticalAndHorizontalRadioButtonDoc(props) {
    const code = `<p>Vertical</p>
<div class="field-radiobutton">
    <input type="radio" id="city1"></input>
    <label for="city1">Chicago</label>
</div>
<div class="field-radiobutton">
    <input type="radio" id="city2"></input>
    <label for="city2">Los Angeles</label>
</div>

<p>Horizontal</p>
<div class="formgroup-inline">
    <div class="field-radiobutton">
        <input type="radio" id="city3"></input>
        <label for="city3">Chicago</label>
    </div>
    <div class="field-radiobutton">
        <input type="radio" id="city4"></input>
        <label for="city4">Los Angeles</label>
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <p>Vertical</p>
                <div className="field-radiobutton">
                    <input type="radio" id="city1"></input>
                    <label htmlFor="city1">Chicago</label>
                </div>
                <div className="field-radiobutton">
                    <input type="radio" id="city2"></input>
                    <label htmlFor="city2">Los Angeles</label>
                </div>

                <p>Horizontal</p>
                <div className="formgroup-inline">
                    <div className="field-radiobutton">
                        <input type="radio" id="city3"></input>
                        <label htmlFor="city3">Chicago</label>
                    </div>
                    <div className="field-radiobutton">
                        <input type="radio" id="city4"></input>
                        <label htmlFor="city4">Los Angeles</label>
                    </div>
                </div>
            </div>

            <DocSectionCode code={code} />
        </>
    );
}
