const FormatPrice = ({ price, curr }) => {
    switch (curr) {
        case "EUR":
            return Intl.NumberFormat("de-EU", {
                style: "currency",
                currency: "EUR",
                maximumFractionDigits: 2,
            }).format(price / (100 * 90.8));

            break;

        default:
            return Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
                maximumFractionDigits: 2,
            }).format(price / 100);
            break;
    }
};

export default FormatPrice;
