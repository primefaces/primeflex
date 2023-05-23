import { DocSectionText } from '../common/docsectiontext';

export function ClassesDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Class</th>
                            <th>Properties</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>fadein</td>
                            <td>
                                animation: fadein 0.15s linear;
                                <br />
                                <br />
                                @keyframes fadein {'{'}
                                <br />
                                &emsp;0% {'{'}
                                <br />
                                &emsp;&emsp;opacity: 0;
                                <br />
                                &emsp;{'}'}
                                <br />
                                &emsp;100% {'{'}
                                <br />
                                &emsp;&emsp;opacity: 1;
                                <br />
                                &emsp;{'}'}
                                <br />
                                {'}'}
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>fadeout</td>
                            <td>
                                animation: fadeout 0.15s linear;
                                <br />
                                <br />
                                @keyframes fadeout {'{'}
                                <br />
                                &emsp;0% {'{'}
                                <br />
                                &emsp;&emsp;opacity: 1;
                                <br />
                                &emsp;{'}'}
                                <br />
                                &emsp;100% {'{'}
                                <br />
                                &emsp;&emsp;opacity: 0;
                                <br />
                                &emsp;{'}'}
                                <br />
                                {'}'}
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>slidedown</td>
                            <td>
                                animation: slidedown 0.45s linear;
                                <br />
                                <br />
                                @keyframes slidedown {'{'}
                                <br />
                                &emsp;0% {'{'}
                                <br />
                                &emsp;&emsp;max-height: 0;
                                <br />
                                &emsp;{'}'}
                                <br />
                                &emsp;100% {'{'}
                                <br />
                                &emsp;&emsp;max-height: auto;
                                <br />
                                &emsp;{'}'}
                                <br />
                                {'}'}
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>slideup</td>
                            <td>
                                animation: slideup 0.45s cubic-bezier(0, 1, 0, 1);
                                <br />
                                <br />
                                @keyframes slideup {'{'}
                                <br />
                                &emsp;0% {'{'}
                                <br />
                                &emsp;&emsp;max-height: 1000px;
                                <br />
                                &emsp;{'}'}
                                <br />
                                &emsp;100% {'{'}
                                <br />
                                &emsp;&emsp;max-height: 0;
                                <br />
                                &emsp;{'}'}
                                <br />
                                {'}'}
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>scalein</td>
                            <td>
                                animation: scalein 0.15s linear;
                                <br />
                                <br />
                                @keyframes scalein {'{'}
                                <br />
                                &emsp;0% {'{'}
                                <br />
                                &emsp;&emsp;opacity: 0;
                                <br />
                                &emsp;&emsp;transform: scaleY(0.8);
                                <br />
                                &emsp;&emsp;transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
                                <br />
                                &emsp;{'}'}
                                <br />
                                &emsp;100% {'{'}
                                <br />
                                &emsp;&emsp;opacity: 1;
                                <br />
                                &emsp;&emsp;transform: scaleY(1);
                                <br />
                                &emsp;{'}'}
                                <br />
                                {'}'}
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>fadeinleft</td>
                            <td>
                                animation: fadeinleft 0.15s linear;
                                <br />
                                <br />
                                @keyframes fadeinleft {'{'}
                                <br />
                                &emsp;0% {'{'}
                                <br />
                                &emsp;&emsp;opacity: 0;
                                <br />
                                &emsp;&emsp;transform: translateX(-100%);
                                <br />
                                &emsp;&emsp;transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
                                <br />
                                &emsp;{'}'}
                                <br />
                                &emsp;100% {'{'}
                                <br />
                                &emsp;&emsp;opacity: 1;
                                <br />
                                &emsp;&emsp;transform: translateX(0%);
                                <br />
                                &emsp;{'}'}
                                <br />
                                {'}'}
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>fadeoutleft</td>
                            <td>
                                animation: fadeoutleft 0.15s linear;
                                <br />
                                <br />
                                @keyframes fadeoutleft {'{'}
                                <br />
                                &emsp;0% {'{'}
                                <br />
                                &emsp;&emsp;opacity: 0;
                                <br />
                                &emsp;&emsp;transform: translateX(0%);
                                <br />
                                &emsp;&emsp;transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
                                <br />
                                &emsp;{'}'}
                                <br />
                                &emsp;100% {'{'}
                                <br />
                                &emsp;&emsp;opacity: 1;
                                <br />
                                &emsp;&emsp;transform: translateX(-100%);
                                <br />
                                &emsp;{'}'}
                                <br />
                                {'}'}
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>fadeinright</td>
                            <td>
                                animation: fadeinright 0.15s linear;
                                <br />
                                <br />
                                @keyframes fadeinright {'{'}
                                <br />
                                &emsp;0% {'{'}
                                <br />
                                &emsp;&emsp;opacity: 0;
                                <br />
                                &emsp;&emsp;transform: translateX(100%);
                                <br />
                                &emsp;&emsp;transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
                                <br />
                                &emsp;{'}'}
                                <br />
                                &emsp;100% {'{'}
                                <br />
                                &emsp;&emsp;opacity: 1;
                                <br />
                                &emsp;&emsp;transform: translateX(0%);
                                <br />
                                &emsp;{'}'}
                                <br />
                                {'}'}
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>fadeoutright</td>
                            <td>
                                animation: fadeoutright 0.15s linear;
                                <br />
                                <br />
                                @keyframes fadeoutright {'{'}
                                <br />
                                &emsp;0% {'{'}
                                <br />
                                &emsp;&emsp;opacity: 0;
                                <br />
                                &emsp;&emsp;transform: translateX(0%);
                                <br />
                                &emsp;&emsp;transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
                                <br />
                                &emsp;{'}'}
                                <br />
                                &emsp;100% {'{'}
                                <br />
                                &emsp;&emsp;opacity: 1;
                                <br />
                                &emsp;&emsp;transform: translateX(100%);
                                <br />
                                &emsp;{'}'}
                                <br />
                                {'}'}
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>fadeinup</td>
                            <td>
                                animation: fadeinup 0.15s linear;
                                <br />
                                <br />
                                @keyframes fadeinup {'{'}
                                <br />
                                &emsp;0% {'{'}
                                <br />
                                &emsp;&emsp;opacity: 0;
                                <br />
                                &emsp;&emsp;transform: translateY(-100%);
                                <br />
                                &emsp;&emsp;transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
                                <br />
                                &emsp;{'}'}
                                <br />
                                &emsp;100% {'{'}
                                <br />
                                &emsp;&emsp;opacity: 1;
                                <br />
                                &emsp;&emsp;transform: translateY(0%);
                                <br />
                                &emsp;{'}'}
                                <br />
                                {'}'}
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>fadeoutup</td>
                            <td>
                                animation: fadeoutup 0.15s linear;
                                <br />
                                <br />
                                @keyframes fadeoutup {'{'}
                                <br />
                                &emsp;0% {'{'}
                                <br />
                                &emsp;&emsp;opacity: 0;
                                <br />
                                &emsp;&emsp;transform: translateY(0%);
                                <br />
                                &emsp;&emsp;transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
                                <br />
                                &emsp;{'}'}
                                <br />
                                &emsp;100% {'{'}
                                <br />
                                &emsp;&emsp;opacity: 1;
                                <br />
                                &emsp;&emsp;transform: translateY(-100%);
                                <br />
                                &emsp;{'}'}
                                <br />
                                {'}'}
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>fadeindown</td>
                            <td>
                                animation: fadeindown 0.15s linear;
                                <br />
                                <br />
                                @keyframes fadeindown {'{'}
                                <br />
                                &emsp;0% {'{'}
                                <br />
                                &emsp;&emsp;opacity: 0;
                                <br />
                                &emsp;&emsp;transform: translateY(100%);
                                <br />
                                &emsp;&emsp;transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
                                <br />
                                &emsp;{'}'}
                                <br />
                                &emsp;100% {'{'}
                                <br />
                                &emsp;&emsp;opacity: 1;
                                <br />
                                &emsp;&emsp;transform: translateY(0%);
                                <br />
                                &emsp;{'}'}
                                <br />
                                {'}'}
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>fadeoutdown</td>
                            <td>
                                animation: fadeoutdown 0.15s linear;
                                <br />
                                <br />
                                @keyframes fadeoutdown {'{'}
                                <br />
                                &emsp;0% {'{'}
                                <br />
                                &emsp;&emsp;opacity: 0;
                                <br />
                                &emsp;&emsp;transform: translateY(0%);
                                <br />
                                &emsp;&emsp;transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
                                <br />
                                &emsp;{'}'}
                                <br />
                                &emsp;100% {'{'}
                                <br />
                                &emsp;&emsp;opacity: 1;
                                <br />
                                &emsp;&emsp;transform: translateY(100%);
                                <br />
                                &emsp;{'}'}
                                <br />
                                {'}'}
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>animate-width</td>
                            <td>
                                animation: animate-width 1000ms linear;
                                <br />
                                <br />
                                @keyframes animate-width {'{'}
                                <br />
                                &emsp;0% {'{'}
                                <br />
                                &emsp;&emsp;width: 0;
                                <br />
                                &emsp;{'}'}
                                <br />
                                &emsp;100% {'{'}
                                <br />
                                &emsp;&emsp;width: 100%;
                                <br />
                                &emsp;{'}'}
                                <br />
                                {'}'}
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>flip</td>
                            <td>
                                animation: flip .15s linear;
                                <br />
                                <br />
                                @keyframes flip {'{'}
                                <br />
                                &emsp;0% {'{'}
                                <br />
                                &emsp;&emsp;transform: perspective($animationPerspective) rotateX(-100deg);
                                <br />
                                &emsp;{'}'}
                                <br />
                                &emsp;100% {'{'}
                                <br />
                                &emsp;&emsp;transform: perspective($animationPerspective) rotateX(0);
                                <br />
                                &emsp;{'}'}
                                <br />
                                {'}'}
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>flipleft</td>
                            <td>
                                animation: flipleft .15s linear;
                                <br />
                                <br />
                                @keyframes flipleft {'{'}
                                <br />
                                &emsp;0% {'{'}
                                <br />
                                &emsp;&emsp;transform: perspective($animationPerspective) rotateY(-100deg);
                                <br />
                                &emsp;&emsp;opacity: 0;
                                <br />
                                &emsp;{'}'}
                                <br />
                                &emsp;&emsp;transform: perspective($animationPerspective) rotateY(0);
                                <br />
                                &emsp;&emsp;opacity: 1;
                                <br />
                                &emsp;{'}'}
                                <br />
                                {'}'}
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>flipright</td>
                            <td>
                                animation: flipright .15s linear;
                                <br />
                                <br />
                                @keyframes flipright {'{'}
                                <br />
                                &emsp;0% {'{'}
                                <br />
                                &emsp;&emsp;transform: perspective($animationPerspective) rotateY(100deg);
                                <br />
                                &emsp;&emsp;opacity: 0;
                                <br />
                                &emsp;{'}'}
                                <br />
                                &emsp;&emsp;transform: perspective($animationPerspective) rotateY(0);
                                <br />
                                &emsp;&emsp;opacity: 1;
                                <br />
                                &emsp;{'}'}
                                <br />
                                {'}'}
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>flipup</td>
                            <td>
                                animation: flipup .15s linear;
                                <br />
                                <br />
                                @keyframes flipup {'{'}
                                <br />
                                &emsp;0% {'{'}
                                <br />
                                &emsp;&emsp;transform: perspective($animationPerspective) rotateX(-100deg);
                                <br />
                                &emsp;&emsp;opacity: 0;
                                <br />
                                &emsp;{'}'}
                                <br />
                                &emsp;&emsp;transform: perspective($animationPerspective) rotateX(0);
                                <br />
                                &emsp;&emsp;opacity: 1;
                                <br />
                                &emsp;{'}'}
                                <br />
                                {'}'}
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>zoomin</td>
                            <td>
                                animation: zoomin .15s linear;
                                <br />
                                <br />
                                @keyframes zoomin {'{'}
                                <br />
                                &emsp;0% {'{'}
                                <br />
                                &emsp;&emsp;opacity: 0;
                                <br />
                                &emsp;&emsp;transform: scale3d(0.3, 0.3, 0.3);
                                <br />
                                &emsp;{'}'}
                                <br />
                                &emsp;&emsp;opacity: 1;
                                <br />
                                &emsp;{'}'}
                                <br />
                                {'}'}
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>zoomindown</td>
                            <td>
                                animation: zoomindown .15s linear;
                                <br />
                                <br />
                                @keyframes zoomindown {'{'}
                                <br />
                                &emsp;0% {'{'}
                                <br />
                                &emsp;&emsp;opacity: 0;
                                <br />
                                &emsp;&emsp;transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
                                <br />
                                &emsp;{'}'}
                                <br />
                                &emsp;&emsp;opacity: 1;
                                <br />
                                &emsp;&emsp;transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
                                <br />
                                &emsp;{'}'}
                                <br />
                                {'}'}
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>zoominleft</td>
                            <td>
                                animation: zoominleft .15s linear;
                                <br />
                                <br />
                                @keyframes zoominleft {'{'}
                                <br />
                                &emsp;0% {'{'}
                                <br />
                                &emsp;&emsp;opacity: 0;
                                <br />
                                &emsp;&emsp;transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
                                <br />
                                &emsp;{'}'}
                                <br />
                                &emsp;&emsp;opacity: 1;
                                <br />
                                &emsp;&emsp;transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
                                <br />
                                &emsp;{'}'}
                                <br />
                                {'}'}
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>zoomninright</td>
                            <td>
                                animation: zoomninright .15s linear;
                                <br />
                                <br />
                                @keyframes zoomninright {'{'}
                                <br />
                                &emsp;0% {'{'}
                                <br />
                                &emsp;&emsp;opacity: 0;
                                <br />
                                &emsp;&emsp;transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
                                <br />
                                &emsp;{'}'}
                                <br />
                                &emsp;&emsp;opacity: 1;
                                <br />
                                &emsp;&emsp;transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
                                <br />
                                &emsp;{'}'}
                                <br />
                                {'}'}
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>zoominup</td>
                            <td>
                                animation: zoominup .15s linear;
                                <br />
                                <br />
                                @keyframes zoominup {'{'}
                                <br />
                                &emsp;0% {'{'}
                                <br />
                                &emsp;&emsp;opacity: 0;
                                <br />
                                &emsp;&emsp;transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
                                <br />
                                &emsp;{'}'}
                                <br />
                                &emsp;&emsp;opacity: 1;
                                <br />
                                &emsp;&emsp;transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
                                <br />
                                &emsp;{'}'}
                                <br />
                                {'}'}
                                <br />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
