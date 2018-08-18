/*
 * From TripleByte:
 * Your function will accept an array representing a stream of event timestamps
 * and return an array representing the times that a callback should
 * have been called.
 *
 * If event happens within wait time of the previous event,
 * its part of the same cluster.
 *
 * Your function should return an array of events that should be fired every
 * interval milliseconds during a cluster.
 *
 * Depending on the input, fire once on the first event in a cluster
 * Depending on the input, fire once after the last event in a cluster
 *
 * Examples:
 * Input: 20, false, true, 0, [0, 10, 20, 30]
 * Return: [0]
 *
 * Input: 20, true, false, 0, [0, 10, 20, 30]
 * Return: [50]
 *
 * Input: 20, false, true, 20, [0, 10, 20, 30]
 * Return: [0, 20]
 *
 * Input: 20, false, true, 0, [0, 10, 40]
 * Return: [0, 40]
 *
 */


const solution = (wait, onLast, onFirst, interval, timestamps) => {
  return [];
};

module.exports = {
  solution,
};
