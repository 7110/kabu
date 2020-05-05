'use strict';

import pkg from '../package'

export class Kabu {
  constructor() {
    this._data = require('./data/main.json');
    this._manual = require('./data/manual.json');

    this._author = '7110';
    this._version = pkg.version;
  }

  _substitute(item) {
    const res = {};
    if (item && (item.c && item.n)) {
      res.code = item.c;
      res.name = item.n;
      res.market = this._manual.markets[item.m];
      res.industry17 = this._manual.industry17[item.i17];
      res.industry33 = this._manual.industry33[item.i33];
    }
    return res;
  }

  _getIndustry(num) {
    const res = [];
    for (let k in this._manual[`industry${num}`]) {
      res.push(this._manual[`industry${num}`][k]);
    }
    return res;
  }

  _getHalfSize(text) {
    return text.replace(
      /[Ａ-Ｚａ-ｚ０-９]/g,
      s => String.fromCharCode(s.charCodeAt(0) - 0xFEE0)
    )
  }

  // get: return brand name details searched by code
  get(code) {
    const res = this._data.find(brandName => {
      return brandName.c == code;
    });
    return this._substitute(res);
  }

  // search: return list of brand name details searched by keyword
  search(keyword) {
    const keywordHalfSize = this._getHalfSize(keyword).toLowerCase()

    const res = this._data.filter(brandName => {
      const brandNameHalfSize = this._getHalfSize(brandName.n).toLowerCase()
      return (
        brandNameHalfSize.includes(keywordHalfSize)
      );
    });

    const results = [];
    for (let i = 0; i < res.length; i++) {
      results.push(this._substitute(res[i]));
    }
    return results;
  }

  // getIndustry17List: return list of 17 Industry classification
  getIndustry17List() {
    return this._getIndustry('17');
  }

  // getIndustry33List: return list of 33 Industry classification
  getIndustry33List() {
    return this._getIndustry('33');
  }

  // help: print document URL, version, updated date and author
  help() {
    console.log(
      `Kabu.js 📈\ndocument: https://github.com/7110/kabu-data\nversion: ${
        this._version
      }\nauthor: ${this._author}`
    );
  }
}
