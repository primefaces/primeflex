import React from 'react';
import { DocSectionText } from '../common/docsectiontext';

export function ColorClassesDoc() {
    const colorShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
    const gradientTypes = ['from', 'via', 'to'];
    const colorNames = ['primary', 'blue', 'green', 'yellow', 'cyan', 'pink', 'indigo', 'teal', 'orange', 'bluegray', 'purple', 'red', 'gray'];
    const percentages = Array.from({ length: 11 }, (_, i) => i * 10);

    const createGradientClassRows = () => {
        const rows = [];

        gradientTypes.forEach((type) => {
            colorNames.forEach((color) => {
                colorShades.forEach((shade) => {
                    rows.push(
                        <tr key={`${type}-${color}-${shade}`}>
                            <td>{`${type}-${color}-${shade}`}</td>
                            <td>{`--gradient-${type}: var(--${color}-${shade});`}</td>
                        </tr>
                    );
                });
            });
            percentages.forEach((percentage) => {
                rows.push(
                    <tr key={`${type}-${percentage}%`}>
                        <td>{`${type}-${percentage}%`}</td>
                        <td>{`--gradient-${type}-percentage: ${percentage}%;`}</td>
                    </tr>
                );
            });
        });

        return rows;
    };

    return (
        <>
            <DocSectionText></DocSectionText>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Class</th>
                            <th>Properties</th>
                        </tr>
                    </thead>
                    <tbody>{createGradientClassRows()}</tbody>
                </table>
            </div>
        </>
    );
}
