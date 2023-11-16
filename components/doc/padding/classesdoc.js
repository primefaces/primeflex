import { DocSectionText } from '../common/docsectiontext';

export function ClassesDoc(props) {
    const spacing = {
        0: 0,
        1: 0.25,
        2: 0.5,
        3: 1,
        4: 1.5,
        5: 2,
        6: 3,
        7: 4,
        8: 5,
        9: 6,
        10: 7,
        11: 8,
        12: 9,
        13: 10,
        14: 11,
        15: 12,
        16: 13,
        17: 14,
        18: 15,
        19: 16,
        20: 18,
        21: 20,
        22: 24,
        23: 28,
        24: 32,
        25: 36,
        26: 40,
        27: 44,
        28: 48,
        29: 52,
        30: 56,
        31: 60,
        32: 64
    };

    const paddingTypes = ['p', 'pt', 'pb', 'pr', 'pl', 'px', 'py'];

    const generatePaddingRows = () => {
        let rows = [];

        paddingTypes.forEach((type) => {
            for (const key in spacing) {
                rows.push(
                    <tr key={`${type}-${key}`}>
                        <td>
                            {type}-{key}
                        </td>
                        <td>{generatePaddingProperty(type, spacing[key])}</td>
                    </tr>
                );
            }
        });

        return rows;
    };

    const generatePaddingProperty = (type, value) => {
        switch (type) {
            case 'px':
                return `padding-left: ${value}rem; padding-right: ${value}rem;`;
            case 'py':
                return `padding-top: ${value}rem; padding-bottom: ${value}rem;`;
            case 'pr':
                return `padding-right: ${value}rem;`;
            case 'pl':
                return `padding-left: ${value}rem;`;
            case 'pt':
                return `padding-top: ${value}rem;`;
            case 'pb':
                return `padding-bottom: ${value}rem;`;
            default:
                const paddingSide = type.length > 1 ? type.charAt(1) : '';

                return `padding${paddingSide ? `-${paddingSide}` : ''}: ${value}rem;`;
        }
    };

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
                    <tbody>{generatePaddingRows()}</tbody>
                </table>
            </div>
        </>
    );
}
