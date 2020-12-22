# Mean Stack Traing

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Guides](#usage)
- [Contributing](../CONTRIBUTING.md)

## About <a name="about"></a>

The Project is dedicated for training of MEAN & MERN Stack development. The End product can be used as a boiler plate for
future projects that are based on the similar dev technologies and SRS related but not limited to the following.

- Authentication with Roles
- Blogging/Newsletter
- Event Management
- Teams/Contributors
- Pages
- API with Basic and Bearer Authentication

## Getting Started <a name="getting_started"></a>

Please follow the instructions

#### Setting up on localhost

- Create a database in postgres `js_cms`
- Create a `.env` file that stores all the credentials for postgres database.
- Create a entry in `etc/hosts` for hosts `127.0.0.1 jscms.test` and a subdomain entry for host `127.0.0.1 subdomain.jscms.test`
- Run `npm i`
- Run the sequelize migrations by running `npm run migrations` for initial install
- Run `npm run dev` to start the server listening to port `6000`
- You can verify configuring your domains by visiting `jscms.test:6000` and `subdomain.jscms.test`

### Prerequisites

- Install Postgres
- Intall PgAdmin 4
- Installing nvm
- Installing and default to nodejs 10.19

### Learning Guide

We will cover the following lessons in the project.

- Nodejs Basics - `nodejs-basics`
- ExpressJs Basics - `expressjs-basics`
- Introduction to AngularJS - `angularjs-basics`
- Conversion to Typescript & Eslint - `typescript-basics`
- RxJs with Angular JS - `rxjs-angular`
- Unit Tests - `unit/testing`
- e2e/automation Testing `e2e/testing`

## Coding Practices and Guides to Follow <a name = "usage"></a>

To get you familiar with KANBAN/SCRUM we will be using Zenhub. Please Install [Zenhub Extension](https://www.zenhub.com/extension) and use with github
account. Each person would work on a issue/ticket with branch named < worktype >/< ticket-title-ticket# > e.g feature/authentication-123, hotfix/login-token-refresh-325, enhancement/bearer-token-hash-improvement-333. The person will be reponsible for moving the cards to correct location, Cards in Review/Q.A will be reviewed, answered and set for revision or merging.
Code will be reviewed in a single commint per issue. Please read rewriting git history [here](https://www.atlassian.com/git/tutorials/rewriting-history). PR against staging after rebasing with latest staging and resolving all conflicts. Code will be directly merged to master or staging by owner or person incharge.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/isheraz"><img src="https://avatars0.githubusercontent.com/u/12581068?v=4" width="100px;" alt=""/><br /><sub><b>Sheraz Ahmed</b></sub></a><br /><a href="#projectManagement-isheraz" title="Project Management">📆</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
