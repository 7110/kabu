# _kabu.js_

[![npm version](https://badge.fury.io/js/kabu.svg)](https://badge.fury.io/js/kabu)
[![Build Status](https://travis-ci.org/7110/kabu.svg?branch=master)](https://travis-ci.org/7110/kabu)

> kabu.js is a JavaScript library about listed stocks.


## Feature

_kabu.js_ is a stock informations library. It has dictionary data on all stocks in Japan!


## Getting Started

### read script file from HTML

```html
<script src="https://7110.github.io/kabu/dist/kabu.js"></script>
```

### using `npm` or `yarn`

```bash
# using npm
npm install kabu --save

# using yarn
yarn add kabu
```


## Using _kabu.js_

### instantiation

```javascript
var kabu = new Kabu();
```

### some of methods

#### search

`search` method is able to search by company name

```javascript
kabu.search("ソフトバンク");
```

```text
[
  {
    code: 9434,
    name: "ソフトバンク",
    market: "市場第一部（内国株）",
    industry17: "情報通信・サービスその他 ",
    industry33: "情報・通信業"
  },
  {
    code: 9984,
    name: "ソフトバンクグループ",
    market: "市場第一部（内国株）",
    industry17: "情報通信・サービスその他 ",
    industry33: "情報・通信業"
  }
]
```

#### get

`get` method is able to get data by stock code

```javascript
kabu.get(4689);
```

```text
{
  code: 4689,
  name: "Ｚホールディングス",
  market: "市場第一部（内国株）",
  industry17: "情報通信・サービスその他 ",
  industry33: "情報・通信業"
}
```

#### help

`help` method is going to print version, updated and so on on console


## Data

**_kabu.js_'s data is made on https://github.com/7110/kabu-data**