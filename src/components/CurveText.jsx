const CurveText = ({ text, radius = 300, fontSize = 280 }) => {
    // Tính toán khung vẽ dựa trên bán kính
    const size = radius * 2 + fontSize; // thêm fontSize để chừa chỗ cho chữ
    const center = size / 2;

    const startX = center - radius;
    const endX = center + radius;

    return (
        <svg
            viewBox={`0 0 ${size} ${size}`}
            className="w-full h-auto"
        >
            <defs>
                <path
                    id="curve"
                    d={`M ${startX},${center} A ${radius},${radius} 0 1,1 ${endX},${center} A ${radius},${radius} 0 1,1 ${startX},${center}`}
                />
            </defs>
            <text fontSize={fontSize} fontFamily="Greenth" fill="black">
                <textPath href="#curve" startOffset="50%" textAnchor="middle">
                    {text}
                </textPath>
            </text>
        </svg>
    );
};

export default CurveText;
