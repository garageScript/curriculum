const debounce = require('../2.js');

describe('js7/2.js Debounce', function () {
    it('Debounce should not be called before set time (10ms)', function (done) {
        let counter = 0;
        let z = debounce(() => counter += 1, 10);
        z();
        setTimeout(() => z(), 9);
        setTimeout(() => {
            if (!counter) return done();
            if (counter) {
                return done(new Error('Debounced function is called too early'));
            }
        }, 11);
    });

    it('should call debounced function with correct parameters', function (done) {
        let params = [];;
        const z = debounce((...a) => {
            params = a;
        }, 10);
        z(9, 8, 7);
        z(6, 5, 4);
        z(3, 2, 1);
        setTimeout(() => {
            if (params[0] === 3 && params[1] === 2 && params[2] === 1) {
                return done();
            }
            return done('Debounced function is not called with correct params');
        }, 11);
    });

    it('function should not be called before set time even with multiple calls', function (done) {
        let counter = 0;
        let z = debounce(() => counter += 1, 10);
        z();
        z();
        setTimeout(() => z(), 9);
        setTimeout(() => {
            if (counter) {
                return done(new Error('Debounced function is called too early'));
            }
        }, 11);
        setTimeout(() => {
            if (counter) return done();
            return done(new Error('Debounced function is never called'));
        }, 25);
    });

    it('Debounce should not be called while there are setTimeouts < 100ms', function (done) {
        const xTimeouts = (x, cb, time, i = 0) => {
            if (i === x) return;
            cb();
            setTimeout(() => xTimeouts(x, cb, i + 1, time), time);
        };
        let counter = 0;
        let z = debounce(() => counter += 1, 10);
        xTimeouts(3, () => z(), 8);
        setTimeout(() => {
            if (counter) {
                return done(new Error('Debounced function is called when it should not be'));
            }
        }, 29);
        setTimeout(() => {
            if (counter === 1) return done();
            return done(new Error('Debounced function is never called'));
        }, 33);
    });

    it('Debounce should be called 100ms after the last function call', function (done) {
        const xTimeouts = (x, cb, time, i = 0) => {
            if (i === x) return;
            cb();
            setTimeout(() => xTimeouts(x, cb, i + 1, time), time);
        };
        let counter = 0;
        let z = debounce(() => counter += 1, 10);
        xTimeouts(3, () => z(), 8);
        setTimeout(() => {
            if (counter === 1) return done();
            return done(new Error('Debounced function is either not called or called too many times'));
        }, 33);
    });
});