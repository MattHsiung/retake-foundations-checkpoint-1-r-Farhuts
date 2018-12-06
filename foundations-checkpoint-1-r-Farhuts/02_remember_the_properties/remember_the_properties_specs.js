/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('Remember The Properties', () => {
  it('create the function rememberTheProperties', () => {
    expect(rememberTheProperties).toBeDefined();
    expect(typeof rememberTheProperties).toBe('function');
  });

  it('the function "rememberTheProperties" returns a function', () => {
    const memory = rememberTheProperties();
    expect(typeof memory).toBe('function');
    expect(typeof rememberTheProperties()).toBe('function');
  });

  it('the function returned from "rememberTheProperties" returns an object', () => {
    const memory = rememberTheProperties();
    const objReturned = memory({});

    expect(typeof objReturned).toBe('object');
    expect(objReturned).toEqual({ newKeys: [], memory: {} });
    expect(Array.isArray(objReturned.newKeys)).toBe(true);
    expect(typeof objReturned.memory).toBe('object');
  });

  it('the function returned from "rememberTheProperties" adds the key/value pairs from the object argument to the object returned', () => {
    const memory = rememberTheProperties();
    const objectArgument = { hello: 'world', dotted: 'dots' };
    const objReturned = memory(objectArgument);

    expect(Array.isArray(objReturned.newKeys)).toBe(true);
    expect(typeof objReturned.memory).toBe('object');

    expect(objReturned).toEqual({
      newKeys: ['hello', 'dotted'],
      memory: { hello: 'world', dotted: 'dots' },
    });
  });

  it('the function returned from "rememberTheProperties" remembers all the previous object arguments key/value pairs', () => {
    const memory = rememberTheProperties();
    const objectArgument = { goodbye: 'world', ice: 'pop' };
    const objReturned = memory(objectArgument);

    expect(Array.isArray(objReturned.newKeys)).toBe(true);
    expect(typeof objReturned.memory).toBe('object');

    expect(objReturned).toEqual({
      newKeys: ['goodbye', 'ice'],
      memory: { goodbye: 'world', ice: 'pop' },
    });

    expect(memory({})).toEqual({
      newKeys: [],
      memory: { goodbye: 'world', ice: 'pop' },
    });
    expect(memory({ ice: 'is very cold' })).toEqual({
      newKeys: [],
      memory: { goodbye: 'world', ice: 'pop' },
    });
    expect(memory({ goodbye: 'bye' })).toEqual({
      newKeys: [],
      memory: { goodbye: 'world', ice: 'pop' },
    });
    expect(memory({})).toEqual({
      newKeys: [],
      memory: { goodbye: 'world', ice: 'pop' },
    });
    expect(memory({})).toEqual({
      newKeys: [],
      memory: { goodbye: 'world', ice: 'pop' },
    });
    expect(memory({})).toEqual({
      newKeys: [],
      memory: { goodbye: 'world', ice: 'pop' },
    });
    expect(memory({})).toEqual({
      newKeys: [],
      memory: { goodbye: 'world', ice: 'pop' },
    });
  });

  it('the function returned from "rememberTheProperties" remembers all the previous key/value pairs and indicates when a new key/value pair is added', () => {
    const memory = rememberTheProperties();
    const objectArgument = {};
    const objReturned = memory(objectArgument);

    expect(objReturned).toEqual({ newKeys: [], memory: {} });
    expect(memory({ one: 'one' })).toEqual({
      newKeys: ['one'],
      memory: { one: 'one' },
    });
    expect(memory({})).toEqual({ newKeys: [], memory: { one: 'one' } });
    expect(memory({ two: 'two', three: 3, four: 'four' })).toEqual({
      newKeys: ['two', 'three', 'four'],
      memory: { one: 'one', two: 'two', three: 3, four: 'four' },
    });
    expect(memory({})).toEqual({
      newKeys: [],
      memory: { one: 'one', two: 'two', three: 3, four: 'four' },
    });
    expect(memory({ five: 5, ten: 10 })).toEqual({
      newKeys: ['five', 'ten'],
      memory: {
        one: 'one',
        two: 'two',
        three: 3,
        four: 'four',
        five: 5,
        ten: 10,
      },
    });

    expect(memory({})).toEqual({
      newKeys: [],
      memory: {
        one: 'one',
        two: 'two',
        three: 3,
        four: 'four',
        five: 5,
        ten: 10,
      },
    });

    expect(memory({})).toEqual({
      newKeys: [],
      memory: {
        one: 'one',
        two: 'two',
        three: 3,
        four: 'four',
        five: 5,
        ten: 10,
      },
    });

    expect(memory({})).toEqual({
      newKeys: [],
      memory: {
        one: 'one',
        two: 'two',
        three: 3,
        four: 'four',
        five: 5,
        ten: 10,
      },
    });
  });
  it('does NOT place properties/variables on function objects or the global scope', () => {
    // Note: There should NOT be any variables or identifiers defined in the global scope besides the `rememberTheProperties` function
    // these tests do not test if variables are in the global scope. 
    // Points will be deducted if there are variables in the global scope besides the `rememberTheProperties` function

    const memory = rememberTheProperties();
    const objectArgument = {};
    const objReturned = memory(objectArgument);
    const keysArray = Object.keys(memory);

    expect(keysArray.length).toBe(0);
  });
});
