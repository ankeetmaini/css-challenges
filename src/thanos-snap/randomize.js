export default function randomize(arr) {
  const resultSize = arr.length / 2;
  const result = [];
  for (let i = 0; i <= resultSize; i++) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    result.push(arr[randomIndex]);
  }
  return result;
}
