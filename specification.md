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

## 検索条件

- Event
  - Operatorが未選択ならOperatorにデフォルト値(at)が入る
  - 値
    - 未選択
    - closed
    - created
    - merged
    - updated
- Operator
  - デフォルト状態は非活性
    - Eventが選択されるとデフォルト値(at)が入る
  - 選択されると `${Eventの値}:${Operatorの値}` で内部データを設定
  - 値
    - 未選択
    - at
      - Date1を活性化
    - between
      - Date1,2を活性化
      - 内部データは `..`
    - since
      - Date1を活性化
      - 内部データは `>=`
    - until
      - Date2を活性化
      - 内部データは `<=`
- Date
  - 2項目並ぶ
  - デフォルト状態は非活性
    - Operatorの選択値次第でそれぞれ活性化する

- Sort
  - Orderが未選択ならOrderにデフォルト値(desc)が入る
  - 値
    - 未選択
    - commented
    - created
    - updated
- Order
  - デフォルト状態は非活性
    - Sortが選択されるとデフォルト値(desc)が入る
  - 選択されると `${Sortの値}:${Orderの値}` で内部データを設定
  - 値
    - 未選択
    - asc
      - 内部データは
    - desc

## 備考

フィルター例: https://ume-noki.com/github-filter-command/
