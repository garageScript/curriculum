const solution = require('../1.js');
const oldTimeout = setTimeout;
solution();

describe('js7/1.js sum of 2 numbers', function () {
    it('should handle setTimeouts normally', function (done) {
        let start = Date.now();
        let end = Date.now();
        setTimeout(() => {
            end = Date.now();
        }, 10);
        setTimeout(() => {
            return end - start >= 5 ?
                done() :
                done('setTimeout stopped working normally');
        }, 15);
    });

    it('normal cleartimeout still works', function (done) {
        let timedOut = false;
        const timer = setTimeout(() => timedOut = true, 10);
        setTimeout(() => {
            return timedOut ? done() : done('setTimeout stopped working normally');
        }, 15);
    });

    it('should clear timeout immediately', function (done) {
        cat();
        setTimeout(() => {
            done("timeout is not cleared");
        }, 10);
        setTimeout(() => {
            done("timeout is not cleared");
        }, 10);
        cat();
        oldTimeout(() => {
            done();
        }, 15);
    });

    it('should clear timeout after a small wait', function (done) {
        cat();
        setTimeout(() => {
            done("timeout is not cleared");
        }, 10);
        setTimeout(() => {
            cat();
        }, 5);
        oldTimeout(() => {
            done();
        }, 15);
    });
});