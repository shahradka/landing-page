# design decisions

## Problem

Create two different projects with different stacks (one, with pure javascript. Another use react).

React project must display information about weather, it must be load by js project with a button click.

## Solution

### First attempt  

Create two separate projects and use **modulefederationplugin** in webpack.

Fail: React module did not import into a js project. it was encountered some errors. 

### Second attempt 

Put an Iframe in js project html. to resolve this challenge, I had to modify html template by webpack HtmlWebpackPlugin options.

To tackle different URL challenge I used .env variables. 


For furture contact: email me at shahrad[dot]kashany[At]gmail.com.