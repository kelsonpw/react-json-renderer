export const data1 = {
  prop1: "hello",
  prop2: "there",
  prop3: true,
  prop4: 12.4,
};

export const data2 = {
  prop1: "hello",
  prop2: "there",
  prop3: true,
  prop4: 12.4,
  prop5: data1,
  prop6: {
    data1,
    prop7: {
      hello: "hi",
      there: 7,
    },
  },
};

export const data3 = {
  prop1: "hello",
  prop2: "there",
  prop3: {},
  prop4: 12.4,
  prop5: data1,
  blal: [1],
  prop6: ["cat", "dog"],
  prop62: ["cat", "dog"],
  prop7: [],
  prop8: {
    prop5: data1,
    prop6: ["cat", "dog", "bear", 168.01, data1, [data1]],
    data2,
  },
};
