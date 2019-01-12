"use strict";

import {
  Kabu
} from "../dist/kabu.js";

describe("Kabu", () => {
  let kabu;

  beforeAll(() => {
    kabu = new Kabu();
  });

  // test of get method
  describe("get", () => {
    let yahoo = {
      code: 4689,
      name: "ヤフー",
      market: "市場第一部（内国株）",
      industry17: "情報通信・サービスその他 ",
      industry33: "情報・通信業"
    };

    test("not match", () => {
      let res = kabu.get(1111);
      expect(res).toEqual({});
      expect(Object.keys(res)).toEqual([]);
    });

    test("match 4689: Number", () => {
      let res = kabu.get(4689);
      expect(res).toEqual(yahoo);
    });

    test("match 4689: String", () => {
      let res = kabu.get("4689");
      expect(res).toEqual(yahoo);
    });
  });

  // test of search method
  describe("search", () => {
    let sb1 = {
      code: 4726,
      name: "ソフトバンク・テクノロジー",
      market: "市場第一部（内国株）",
      industry17: "情報通信・サービスその他 ",
      industry33: "情報・通信業"
    };

    let sb2 = {
      code: 9434,
      name: "ソフトバンク",
      market: "市場第一部（内国株）",
      industry17: "情報通信・サービスその他 ",
      industry33: "情報・通信業"
    };

    let sb3 = {
      code: 9984,
      name: "ソフトバンクグループ",
      market: "市場第一部（内国株）",
      industry17: "情報通信・サービスその他 ",
      industry33: "情報・通信業"
    };

    test("not match", () => {
      let res = kabu.search("7110");
      expect(res).toEqual([]);
    });

    test("match ソフトバンク", () => {
      let res = kabu.search("ソフトバンク");
      expect(res.length).toEqual(3);
      expect(res[0]).toEqual(sb1);
      expect(res[1]).toEqual(sb2);
      expect(res[2]).toEqual(sb3);
    });
  });
});