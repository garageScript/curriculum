const expect = require('chai').expect;
const solution = require('../5').solution;

describe('5.js Distance to a node', () => {
    it('should return distance 1 for tree with left node', () => {
        const a = {
            val: 'a'
        };
        const b = {
            val: 'b'
        };
        a.left = b;
        const result = solution(a, b);
        expect(result).to.equal(1);
    });
    it('should return distance 1 for tree with right node', () => {
        const a = {
            val: 'a'
        };
        const b = {
            val: 'b'
        };
        a.right = b;
        const result = solution(a, b);
        expect(result).to.equal(1);
    });
    it('should return distance 0 for finding itself', () => {
        const a = {
            val: 'a'
        };
        const b = {
            val: 'b'
        };
        const c = {
            val: 'c'
        };
        const d = {
            val: 'd'
        };
        const e = {
            val: 'e'
        };
        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        const result = solution(a, a);
        expect(result).to.equal(0);
    });
    it('should return distance 2 using right child nodes', () => {
        const a = {
            val: 'a'
        };
        const b = {
            val: 'b'
        };
        const c = {
            val: 'c'
        };
        const d = {
            val: 'd'
        };
        const e = {
            val: 'e'
        };
        const f = {
            val: 'f'
        };
        const g = {
            val: 'g'
        };
        const h = {
            val: 'h'
        };
        const i = {
            val: 'i'
        };
        a.left = b;
        a.right = c;
        c.left = d;
        c.right = e;
        d.left = f;
        e.left = g;
        f.left = h;
        g.right = i;
        const result = solution(a, e);
        expect(result).to.equal(2);
    });
    it('should return distance 4 using long left child distraction', () => {
        const a = {
            val: 'a'
        };
        const b = {
            val: 'b'
        };
        const c = {
            val: 'c'
        };
        const d = {
            val: 'd'
        };
        const e = {
            val: 'e'
        };
        const f = {
            val: 'f'
        };
        const g = {
            val: 'g'
        };
        const h = {
            val: 'h'
        };
        const i = {
            val: 'i'
        };
        const j = {
            val: 'j'
        };
        const k = {
            val: 'k'
        };
        const l = {
            val: 'l'
        };
        const m = {
            val: 'm'
        };
        const n = {
            val: 'n'
        };
        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        d.left = f;
        e.left = g;
        f.left = h;
        g.right = i;
        h.left = j;
        j.left = k;
        k.left = l;
        l.left = m;
        m.left = n;
        const result = solution(a, i);
        expect(result).to.equal(4);
    });
});
