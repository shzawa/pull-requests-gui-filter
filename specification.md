# Github Pull Requests Filter

- 代表的なフィルター条件を設定できる
  - 指定日以降にマージされた `merged:>=YYYY-MM-DD`
  - いつからいつまでにマージされた `merged:YYYY-MM-DD..YYYY-MM-DD`
  - マージ済み `is:closed`
- GUIでフィルター条件を設定できる
- ブラウザ拡張で GitHub ページを上書きして提供する
  - ブラウザ拡張を配布できるようにする

- ブラウザ拡張は WXT で開発
  - github.com/{orgName}/{repoName}/pulls でのみ動作する
- TypeScript を使用
- UIライブラリは使わない

## 備考

フィルター例: https://ume-noki.com/github-filter-command/
