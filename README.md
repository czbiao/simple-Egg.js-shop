# simple-egg-shop

simple-egg-shop api


# 数据库操作
执行 migrate 进行数据库变更
### 升级数据库
npx sequelize db:migrate
### 如果有问题需要回滚，可以通过 `db:migrate:undo` 回退一个变更
npx sequelize db:migrate:undo
### 可以通过 `db:migrate:undo:all` 回退到初始状态
npx sequelize db:migrate:undo:all

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org