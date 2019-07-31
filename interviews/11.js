/* Build a function that normalizes the given data structure below. Normalize function should return an array
 * of objects of value properties in the correct order. If children array has objects, function should
 * extract those values as well.
 *
 * @params{Array}
 * @returns{Array}

const example = [
  {
    "value": "value1",
    "children": [
      {
        "value": "value200",
        "children": [
          {
            "value": "value3",
            "children": []
          }
        ]
      },
      {
        "value": "value4",
        "children": []
      }
    ]
  },
  {
    "value": "value5",
    "children": []
  }
];

const result = solution(example)
cosnole.log(result) -> [  {"value":"value1"},
                          {"value":"value200"},
                          {"value":"value3"},
                          {"value":"value4"},
                          {"value":"value5"}  ];
*/
const solution = (arr) => {
  return []
}

module.exports = {
  solution
}

