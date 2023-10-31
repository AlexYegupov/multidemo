import React from 'react';
import { Header } from 'ui';
import { Counter } from 'ui2';

var aa = 4;
aa += 'R_OK';

function test(a: number) {
  return a + 'sadf';
}

function f2(a) {
  console.log(a);
  return 1;
}

console.log(React, Header, Counter);
console.log(test('a'), f2(1));
console.log(
  aa,
  'asddasffdas sdfasdfasdf',
  'asddasffdas sdfasdfasdf',
  'asddasffdas sdfasdfasdf',
  'asddasffdas sdfasdfasdf',
  'asddasffdas sdfasdfasdf',
);
console.log(aa === -0);
