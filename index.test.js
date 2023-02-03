const add = require('./index')

test('1と2を渡した時、3を返す', ()=> {
    expect(add(1, 2)).toBe(3);
});

test('0と0を渡した時、0を返す', ()=> {
    expect(add(0, 0)).toBe(0);
});