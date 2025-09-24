import sortHeroesByHealth from '../sortHeroes.js';

describe('sortHeroesByHealth', () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  test('heroes sorted descending by health', () => {
    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];
    expect(sortHeroesByHealth(input)).toEqual(expected);
  });

  test('does not mutate original array', () => {
    const copy = [...input];
    sortHeroesByHealth(input);
    expect(input).toEqual(copy);
  });

  test('handles already sorted array', () => {
    const sorted = [
      { name: 'a', health: 90 },
      { name: 'b', health: 20 },
    ];
    expect(sortHeroesByHealth(sorted)).toEqual(sorted);
  });
});
