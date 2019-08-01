'use strict';

import {
  Kabu
} from '../dist/kabu.js';

describe('Kabu', () => {
  let kabu;

  beforeAll(() => {
    kabu = new Kabu();
  });

  // test of get method
  describe('get', () => {
    const yahoo = {
      code: 4689,
      name: 'ヤフー',
      market: '市場第一部（内国株）',
      industry17: '情報通信・サービスその他 ',
      industry33: '情報・通信業'
    };

    test('not match', () => {
      const res = kabu.get(1111);
      expect(res).toEqual({});
      expect(Object.keys(res)).toEqual([]);
    });

    test('match 4689: Number', () => {
      const res = kabu.get(4689);
      expect(res).toEqual(yahoo);
    });

    test('match 4689: String', () => {
      const res = kabu.get('4689');
      expect(res).toEqual(yahoo);
    });
  });

  // test of search method
  describe('search', () => {
    const sb1 = {
      code: 4726,
      name: 'ソフトバンク・テクノロジー',
      market: '市場第一部（内国株）',
      industry17: '情報通信・サービスその他 ',
      industry33: '情報・通信業'
    };

    const sb2 = {
      code: 9434,
      name: 'ソフトバンク',
      market: '市場第一部（内国株）',
      industry17: '情報通信・サービスその他 ',
      industry33: '情報・通信業'
    };

    const sb3 = {
      code: 9984,
      name: 'ソフトバンクグループ',
      market: '市場第一部（内国株）',
      industry17: '情報通信・サービスその他 ',
      industry33: '情報・通信業'
    };

    test('match ソフトバンク', () => {
      const res = kabu.search('ソフトバンク');
      expect(res.length).toEqual(3);
      expect(res[0]).toEqual(sb1);
      expect(res[1]).toEqual(sb2);
      expect(res[2]).toEqual(sb3);
    });

    test('not match', () => {
      const res = kabu.search('7110');
      expect(res).toEqual([]);
    });

    const ntt = {
      code: 9437,
      industry17: '情報通信・サービスその他 ',
      industry33: '情報・通信業',
      market: '市場第一部（内国株）',
      name: 'ＮＴＴドコモ'
    };

    test('match ntt which is half size text', () => {
      const res = kabu.search('NTT');
      expect(res[0]).toEqual(ntt);
    });
  });
});