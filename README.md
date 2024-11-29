# Github Pull Requests Filter

## 要求

- Pull Request のフィルター設定値を知らなくても利用できるようになる
  - 条件の書き方を調べなくても使える
- 自分以外も使える

## 要件 = スコープ決め

- 代表的なフィルター条件を設定できる
  - 指定日以降にマージされた `merged:>=YYYY-MM-DD`
  - いつからいつまでにマージされた `merged:YYYY-MM-DD..YYYY-MM-DD`
  - マージ済み `is:closed`
- GUIでフィルター条件を設定できる
- ブラウザ拡張で GitHub ページを上書きして提供する
  - ブラウザ拡張を配布できるようにする

## 基本設計

- ブラウザ拡張は WXT で開発
  - github.com/{orgName}/{repoName}/pulls でのみ動作する
- TypeScript を使用
- UIライブラリは使わない

## 備考

フィルター例: https://ume-noki.com/github-filter-command/

github-pull-requests-filter
