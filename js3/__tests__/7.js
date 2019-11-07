const solution = require('../7').solution;

solution()

describe('map', () => {
   it('should not run callback on empty object, return empty arr', () =>{
    const info = {};
    const result = info.map((key, value, i) => {
      return key + i + value;
    });
    expect(result).toEqual([])
  });
  it('should run callback on object, return array ', () => {
    const info = {ironman: 'arrogant', spiderman: 'naive', hulk: 'strong',};
    const result = info.map((key, value, i) => {
      return key + i + value;
    });
    expect(result).toEqual(['ironman0arrogant', 'spiderman1naive', 'hulk2strong']);
  });
  it('should run callback on object, return array ', () => {
    const info = {jet: 'superfast', yacht: 'luxurious', car: 'practical'};
    const result = info.map((key, value, i) => {
      return key + i + value;
    });
    expect(result).toEqual(['jet0superfast', 'yacht1luxurious', 'car2practical']);
  });
});
