// Benchmark core file. This file basically gets called with N=x and will execute a parse test for one file for that step
// I run this through `./t p --build`. This will make ./t call this script in an indefinite loop, passing on incrementing
// values for N until it exits non-zero, and then loops again from N=1. Infinitely.

// You can call this script directly
// (This is not the same because the same node instance is used for all tests so the parsers pollute the GC for each other!);
//    node --experimental-modules --max-old-space-size=8192 tests/perf.mjs -b
//    node --single-threaded --single-threaded-gc --predictable --predictable-gc-schedule --no-compilation-cache --experimental-modules --max-old-space-size=8192 tests/perf.mjs -b

import fs from 'fs';
import {performance} from 'perf_hooks';
import path from 'path';

const TENKO_DEV_FILE = path.resolve('./src/index.mjs');
const TENKO_PROD_FILE = path.resolve('./build/tenko.prod.mjs');
import TenkoBuild from '../build/tenko.prod.mjs';
import {testTenko} from './parse_tenko.mjs';
import {testBabel} from './parse_babel.mjs';
import {testAcorn} from './parse_acorn.mjs';

let filePath = import.meta.url.replace(/^file:\/\//,'');
let dirname = path.dirname(filePath);

const RESET_BASELINE = process.argv.includes('--reset');
const IMPROVE_BASELINE = process.argv.includes('--record');
let N = process.argv.includes('n') ? parseInt(process.argv[process.argv.indexOf('n') + 1]) : -1;
const Nstart = N;
const NO_HEADER = process.argv.includes('--no-header');
const NO_WEBKIT = process.argv.includes('-q'); // Skip the 20mb benchmark, which takes a long time

if (!Number.isInteger(N)) throw new Error('The argument for `n` must be a number');

const BOLD = '\x1b[;1;1m';
const BOLD_GREEN = '\x1b[1;32m';
const DIM = '\x1b[30;1m';
const DIM_RED = '\x1b[;31m';
const DIM_GREEN = '\x1b[;32m';
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const RESET = '\x1b[0m';

let parsers = [
  {name: 'tenko', parse: (code, testVariant) => testTenko(TenkoBuild, code, testVariant, true)}, // tenko, code, testVariant, enableAnnexb
  {name: 'babel', parse: (code, testVariant) => testBabel(code, testVariant)}, // code, mode
  {name: 'acorn', parse: (code, testVariant) => testAcorn(code, testVariant, undefined)}, // code, mode, version
  {name: 'tenk2', parse: (code, testVariant) => testTenko(TenkoBuild, code, testVariant, true)}, // tenko, code, testVariant, enableAnnexb
];

// See ./perf_data.json for example. I tuck it under /ignore because webstorm goes haywire trying to reindex the file while running the benchmark and updating it
// {
//   "es6.tiny": {                            // just a name
//     "path": "ignore/perf/es6.tiny.js",     // path
//     "mode": "module",                      // web | module
//     "baseline": {                          // one entry for each parser (will be fine if its missing)
//       "tenko": 3,
//       "babel": 4,
//       "acorn": 3,
//       "tenk2": 3,
//       ...
//     }
//   },
//   ...
let data = JSON.parse(fs.readFileSync(path.join(dirname, '../ignore/perf_data.json'), 'utf8'));
let files = Object.getOwnPropertyNames(data).filter(s => !!s && (!NO_WEBKIT || s !== 'es5.webkit'));

// Initialize the .code property of each entry to lazy load the input code
files.forEach(title => {
  let obj = data[title];
  Object.defineProperty(obj, 'code', {
    get(){
      let code = fs.readFileSync(obj.path, 'utf8');
      delete obj.code;
      Object.defineProperty(obj, 'code', {
        value: code,
        enumerable: true,
        configurable: true,
      });
      return code;
    },
    enumerable: true,
    configurable: true,
  });
});

function p2(x) {
  return Math.round(x * 100) / 100;
}
let cols = {
  parser: 25,
  prev: 7,
  base: 7,
  btd: 10,
  time: 20,
  td: 17,
  bd: 15,
  ad: 10,
  dprev: 25,
};
function print(name, baseline, time, lastTtime) {
  let base = baseline[name];
  let tbase = baseline.tenko;
  let btd = tbase - base;
  let ftime = Math.floor(time);
  let td = ftime - base;
  let tdta = ftime - baseline.acorn;
  let tdtb = ftime - baseline.babel;
  let ltd = Math.floor(time - (lastTtime|0));

  console.log(
    // Title
    N >= 0 ? DIM + 'n=' + String(Nstart).padStart(2, '0') + RESET : '',
    ('Parse time for ' + name + ': ').padEnd(cols.parser, ' '),
    // Basline for this parser
    DIM + (''+(name === 'tenko' ? lastTtime : '')).padStart(cols.prev, ' ') + RESET,
    DIM + (''+base).padStart(cols.base, ' ') + RESET,
    // Delta between baseline of other parsers and baseline of Tenko
    DIM + (name === 'tenko' ? '' : (btd > 0 ? '+' : '') + btd + '').padStart(cols.btd, ' ') + RESET,
    // Current result of current parser
    (time + ' ms').padStart(cols.time, ' '),
    // Delta between current result and baseline result (of current parser)
    (td < 0 ? (name === 'tenko' ? BOLD_GREEN : DIM_GREEN) : name === 'tenko' ? BOLD : DIM) + (' (b ' + (td > 0 ? '+' : '-') + ' ' + Math.abs(td) + ' ms)').padStart(cols.td, ' ') + RESET,
    '       ',
    // Delta between current result of Tenko and baseline of acorn/babel
    DIM + (name === 'tenko' ? (tdtb <= 0 ? DIM_GREEN : DIM_RED) + ('bb ' + (tdtb < 0 ? '-' : '+') + ' ' + Math.abs(tdtb) + 'ms').padEnd(cols.bd, ' ') : ''.padEnd(cols.bd, ' ')) + RESET,
    DIM + (name === 'tenko' ? (tdta <= 0 ? DIM_GREEN : DIM_RED) + ('aa ' + (tdta < 0 ? '-' : '+') + ' ' + Math.abs(tdta) + 'ms').padEnd(cols.ad, ' ') : ''.padEnd(cols.ad, ' ')) + RESET,

    name === 'tenko' ? '' : '  ' + DIM + ((name.startsWith('tenk') ? '' : ltd >= 0 ? DIM_GREEN : DIM_RED) + ('tprev = ' + lastTtime + ' ' + (ltd > 0 ? '+' : '-') + ' ' + Math.abs(ltd) + 'ms').padEnd(cols.dprev, ' ')) + RESET,
    ''
  );
}

if (!NO_HEADER && N <= 1 && N != -2) {
  console.log('Using parser from:', TENKO_PROD_FILE);
  console.log('\n');
  console.log(' ',
    'parser    '.padStart(cols.parser, ' '),
    'prev'.padStart(cols.prev + 3, ' '),
    'base'.padStart(cols.base, ' '),
    'btd'.padStart(cols.btd, ' '),
    'time'.padStart(cols.time, ' '),
    'td'.padStart(cols.td, ' '),
    'ad'.padStart(cols.ad, ' '),
    'bd'.padStart(cols.bd, ' '),
    'dprev'.padStart(cols.dprev-10, ' '),
    '\n'
  );
}

files.forEach((title) => {
  let obj = data[title];
  if (N <= 1) {
    console.log('File:', obj.code.length, 'bytes:', obj.path);
  }
  parsers.forEach(({name, parse}) => {
    if (--N > 0) return;

    let {path, code, mode, baseline, last} = obj;
    let t1 = performance.now();
    try {
      parse(code, mode);
    } catch (e) {
      console.log('Failed!', name, '->', path, '::', e.message);
    }
    let t2 = performance.now();
    let time = t2 - t1;
    let b = baseline[name];
    let t = p2(time);
    print(name, baseline, t, last);

    let changedStats = false;
    if (RESET_BASELINE || (IMPROVE_BASELINE && t < b)) {
      baseline[name] = Math.floor(t);
      changedStats = true;
    }
    if (name === 'tenko') {
      obj.last = Math.floor(t);
      changedStats = true;
    }
    if (N >= 0) {
      if (changedStats) {
        for (let key in data) delete data[key].code;
        fs.writeFileSync('ignore/perf_data.json', JSON.stringify(data));
      }
      // Signal ./t that this script is not finished, just the current run
      process.exit(0);
    }
  });
});
if (N >= 0) {
  // signals ./t that this script is done
  // console.log('exit(1)')
  process.exit(1);
}
