const colors = [
    '#FEC8D8', '#957DAD', '#B5EAD7', '#7799CC', '#FF9AA2', '#FFFFD8',
    '#FF756D', '#FFF49C', '#85DE77', '#A1DE93', '#FFD5B8', '#ACECD5'
];

const colorFrom = string => {
    const index = string
        .toString()
        .split('')
        .map(char => char.charCodeAt())
        .reduce((prev, cur) => prev + cur, 0);

    const colorIndex = index % colors.length;

    return colors[colorIndex];
};

export default colorFrom;