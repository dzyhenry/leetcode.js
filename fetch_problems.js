#!/usr/bin/env node

// This is a script to fetch problems from leetcode.com automatically.

const https = require('https'); 
const { debuglog } = require('util');
const { readFileSync, writeFileSync } = require('fs');

const HOSTNAME = 'leetcode.com';
const PATH = '/api/problems/all/';
const COOKIE = 'LEETCODE_SESSION=ToBeAddWhenRequired';

const updateReadme = async(problemCount) => {
  // fetch problems
  const problemInfo = await new Promise((resolve, reject) => {
    const req = https.request({
      hostname: HOSTNAME,
      path: PATH,
      headers: {
        // When cookie is added, we could get the problem accepted status.
        cookie: COOKIE,
      },
    }, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('error', (err) => {
        console.error('Fetch response error: ', err);
        reject(err);
      });
      res.on('end', () => {
        debuglog(`info fetched from ${PATH}: ${data}`);
        data = JSON.parse(data);
        console.log(data['stat_status_pairs'].slice(-1));
        resolve(data);
      });
    });
    req.on('error', (err) => {
      console.error('Fetch request error: ', err);
      reject(err);
    });
    req.end();
  });

  // format info
  const problemInfoFomatted = problemInfo['stat_status_pairs'].slice(0 - problemCount).reverse().map((item, idx) => {
    const { question_id, question__title, question__title_slug } = item.stat;
    const difficultyMap = { 1: 'Easy', 2: 'Medium', 3: 'Hard' };

    const link = `[${question__title}](https://leetcode.com/problems/${question__title_slug}/)`;

    // only acceptted problomes has solutions
    const solutions = item.status === 'ac' ? `[JavaScript](./JavaScript/${question_id}.${question__title_slug}.js)` : '';
    const difficulty = difficultyMap[item.difficulty.level];

    const row = `|${question_id}|${link}|${solutions}|${difficulty}|`;
    return row;
  }).join('\n');

  // update README 
  const readmeInfo = readFileSync('./README.md').toString();
  debuglog(`README Info: ${readmeInfo}`);
  const res = readmeInfo.replace(/<!-- problems-start -->([\w\W]+)<!-- problems-end -->/g,
    ($0, $1) =>
`<!-- problems-start -->

## Problems
| # | Title | Solution | Difficulty |
|---| ----- | -------- | ---------- |
${problemInfoFomatted}

<!-- problems-end -->`,
  ); 

  writeFileSync('./README.md', res);
};

updateReadme(200);
