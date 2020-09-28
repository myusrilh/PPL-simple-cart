/*
    Gunakan file ini untuk membuat test case dengan Jest
*/
const{
    incrementQty,
    decrementQty,
    recalculateSubtotal
} = require("../helpers");

test('Qty 1 ditambah 1 harusnya 2', ()=>{
    expect(incrementQty(1)).toBe(2);
});

test('Qty "1" ditambah 1 harusnya 2', ()=>{
    expect(incrementQty("1")).toBe(2);
});

test('Qty 2 dikurang 1 harusnya 1', ()=>{
    expect(decrementQty(2)).toBe(1);
});

test('Price 50000 dikali Qty 2 harusnya 100000', ()=>{
    expect(recalculateSubtotal(50000,2)).toBe(100000);
});
test('Price 50000 dikali Qty 4 dengan PROMO200 harusnya 200000', ()=>{
    expect(recalculateSubtotal(50000,4,"PROMO200")).toBe(200000);
});

test('Price 50000 dikali Qty 2 dengan PROMO25 harusnya 75000', ()=>{
    expect(recalculateSubtotal(50000,2,"PROMO25")).toBe(75000);
});

test('Price "50000" dikali Qty 2 dengan PROMO25 harusnya 75000', ()=>{
    expect(recalculateSubtotal("50000",2,"PROMO25")).toBe(75000);
});

test('Price "50000" dikali Qty "2" dengan PROMO50 harusnya 50000', ()=>{
    expect(recalculateSubtotal("50000","2","PROMO50")).toBe(50000);
});