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

    const marginTypes = ['m', 'mt', 'mb', 'mr', 'ml', 'mx', 'my'];

    const generateMarginRows = () => {
        let rows = [];

        marginTypes.forEach((type) => {
            for (const key in spacing) {
                const value = spacing[key];

                rows.push(
                    <tr key={`${type}-${key}`}>
                        <td>
                            {type}-{key}
                        </td>
                        <td>{generateMarginProperty(type, spacing[key])}</td>
                    </tr>
                );
            }

            for (const key in spacing) {
                if (spacing[key] !== 0) {
                    rows.push(
                        <tr key={`-${type}-${key}`}>
                            <td>
                                -{type}-{key}
                            </td>
                            <td>{generateMarginProperty(type, -spacing[key])}</td>
                        </tr>
                    );
                }
            }
        });
        marginTypes.forEach((type) => {
            rows.push(
                <tr key={`${type}-auto`}>
                    <td>{type}-auto</td>
                    <td>{generateMarginProperty(type, 'auto')}</td>
                </tr>
            );
        });

        return rows;
    };

    const generateMarginProperty = (type, value) => {
        switch (type) {
            case 'mx':
                return `margin-left: ${value}rem; margin-right: ${value}rem;`;
            case 'my':
                return `margin-top: ${value}rem; margin-bottom: ${value}rem;`;
            case 'mr':
                return `margin-right: ${value}rem;`;
            case 'ml':
                return `margin-left: ${value}rem;`;
            case 'mt':
                return `margin-top: ${value}rem;`;
            case 'mb':
                return `margin-bottom: ${value}rem;`;
            default:
                const marginSide = type.length > 1 ? type.charAt(1) : '';

                return `margin${marginSide ? `-${marginSide}` : ''}: ${value}rem;`;
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
                    <tbody>{generateMarginRows()}</tbody>
                </table>
            </div>
        </>
    );
}
