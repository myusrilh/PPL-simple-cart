const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => parseInt(qty) < 2 ? parseInt(qty) : parseInt(qty) - 1;

// function recalculateSubtotal(price, qty) {
//     return price * qty;
// };

function recalculateSubtotal(price, qty, code) {
    var total = parseInt(price) * parseInt(qty);
    if (code == "PROMO25") {
        return total - (total * 0.25);
    } else if (code == "PROMO50") {
        return total - (total * 0.5);
    } else if (code == "PROMO75") {
        return total - (total * 0.75);
    } else{
        return total;
    }
}

module.exports = {
    incrementQty,
    decrementQty,
    recalculateSubtotal
};
