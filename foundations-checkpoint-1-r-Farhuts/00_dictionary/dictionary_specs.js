/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('dictionary', () => {
  it('is a constructor function', () => {
    expect(typeof Dictionary).toBe('function');
  });

  it('returns an instance of a dictionary', () => {
    const dictionary = new Dictionary();
    expect(typeof dictionary).toBe('object');
    expect(Object.keys(dictionary).length).toBe(0);
  });

  it('populates the dictionary instance with words and definitions when an array argument is passed', () => {
    const dictionary = new Dictionary([
      ['thankful', 'conscious of benefit received'],
      [
        'empathy',
        'the action of understanding, being aware of, being sensitive to',
      ],
      ['dram', 'a small amount'],
      ['quirk', 'cure, twist'],
      ['audacious', 'intrepidly daring: adventurous'],
    ]);

    expect(typeof dictionary).toBe('object');
    expect(dictionary instanceof Dictionary).toBe(true);
    expect(Object.keys(dictionary).sort()).toEqual(
      ['thankful', 'empathy', 'audacious', 'dram', 'quirk'].sort()
    );
    expect(dictionary.thankful).toBe('conscious of benefit received');
    expect(dictionary.empathy).toBe(
      'the action of understanding, being aware of, being sensitive to'
    );
    expect(dictionary.dram).toBe('a small amount');
    expect(dictionary.quirk).toBe('cure, twist');
    expect(dictionary.audacious).toBe('intrepidly daring: adventurous');
  });

  it('the newEntry method adds a new word and definition to the Dictionary instance', () => {
    const dictionary = new Dictionary();
    dictionary.newEntry(['funny', 'causing laughter']);

    expect(dictionary['funny']).toBe('causing laughter');
    expect(dictionary.hasOwnProperty('funny')).toBe(true);
  });

  it('the getDefinition method finds the definition of the word argument', () => {
    const dictionary = new Dictionary([
      ['dram', 'a small amount'],
      ['quirk', 'cure, twist'],
      ['audacious', 'intrepidly daring: adventurous'],
    ]);

    expect(dictionary.getDefinition('dram')).toBe('a small amount');
    expect(dictionary.getDefinition('quirk')).toBe('cure, twist');
  });

  it('the getDefinition method returns a message if the word is not defined', () => {
    const dictionary = new Dictionary();

    expect(dictionary.getDefinition('soap')).toBe(
      "Can't find the definition for the word soap"
    );
    expect(dictionary.getDefinition('television')).toBe(
      "Can't find the definition for the word television"
    );
  });

  it('the getWordsWithFirstLetter method returns an object of word (keys) and definitions (values) that start with the letter argument', () => {
    const dictionary = new Dictionary([
      ['thankful', 'conscious of benefit received'],
      [
        'empathy',
        'the action of understanding, being aware of, being sensitive to',
      ],
      ['dram', 'a small amount'],
      ['quirk', 'cure, twist'],
      ['audacious', 'intrepidly daring: adventurous'],
      ['apple', 'a fruit'],
      ['ardvark', 'an animal'],
      ['audio', 'sound'],
      ['add', 'to increase'],
    ]);
    expect(dictionary.getWordsWithFirstLetter('a')).toEqual({
      audacious: 'intrepidly daring: adventurous',
      apple: 'a fruit',
      ardvark: 'an animal',
      audio: 'sound',
      add: 'to increase',
    });
  });

  it('newEntry, getDefinition, and getWordsWithFirstLetter are be accessible via the prototype chain and not directly on a Dictionary instance', () => {
    const dictionary = new Dictionary([
      ['dram', 'a small amount'],
      ['quirk', 'cure, twist'],
      ['audacious', 'intrepidly daring: adventurous'],
    ]);

    expect(dictionary.hasOwnProperty('newEntry')).toBe(false);
    expect(dictionary.hasOwnProperty('getDefinition')).toBe(false);
    expect(dictionary.hasOwnProperty('getWordsWithFirstLetter')).toBe(false);
  });
});
