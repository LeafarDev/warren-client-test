import React from 'react';
import { toFixed } from '../number';

describe('toFixed', () => {
  it('should return a valid fixed decimal', () => {
    expect(toFixed(1.9999, 2))
      .toBe(1.99);
  });
});
