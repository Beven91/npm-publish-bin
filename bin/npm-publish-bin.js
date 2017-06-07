#!/usr/bin/env node
var PackageBinSolution = require('../index.js');

var solution  =new PackageBinSolution(process.cwd());

solution.handlePackage();