"use strict";

export class Kabu {
  constructor() {
    this.__main = require("./data/main.json");
    this.__manual = require("./data/manual.json");

    this.__author = "7110";
    this.version = "1.0.5";
    this.updated = "2019/03";
  }

  __substitute(item) {
    const res = {};
    if (item && (item.c && item.n)) {
      res["code"] = item.c;
      res["name"] = item.n;
      res["market"] = this.__manual["markets"][item.m];
      res["industry17"] = this.__manual["industry17"][item.i17];
      res["industry33"] = this.__manual["industry33"][item.i33];
    }
    return res;
  }

  __getIndustry(num) {
    const res = [];
    for (let k in this.__manual[`industry${num}`]) {
      res.push(this.__manual[`industry${num}`][k]);
    }
    return res;
  }

  // get: return brand name details searched by code
  get(code) {
    const res = this.__main.find(item => {
      return item.c == code;
    });
    return this.__substitute(res);
  }

  // search: return list of brand name details searched by keyword
  search(keyword) {
    const res = this.__main.filter(item => {
      return item.n.includes(keyword);
    });

    const results = [];
    for (let i = 0; i < res.length; i++) {
      results.push(this.__substitute(res[i]));
    }
    return results;
  }

  // getIndustry17List: return list of 17 Industry classification
  getIndustry17List() {
    return this.__getIndustry("17");
  }

  // getIndustry33List: return list of 33 Industry classification
  getIndustry33List() {
    return this.__getIndustry("33");
  }

  // help: print document URL, version, updated date and author
  help() {
    console.log(
      `Kabu.js 📈\ndocument: https://github.com/7110/kabu-data\nversion: ${
        this.version
      }\nupdated: ${this.updated}\nauthor: ${this.__author}`
    );
  }
}