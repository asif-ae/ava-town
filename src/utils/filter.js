/**
 * I've build these filters with core JS
 */

export function filterByGender(data, type) {
  return data.filter((r) => r.gender === type);
}

export function filterById(data, id) {
  return data.filter((r) => r.id === id);
}
