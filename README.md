ポートフォリオ
1. 概要
- C言語やVC++での開発経験をベースに、メンテナンス性の高いフロントエンド実装を追求したポートフォリオサイトです。

2. 使用技術
- HTML5
- SCSS
- JavaScript (jQuery)

3. フォルダ構成
```text
.
├── index.html          # トップページ
├── contact.html        # お問い合わせページ
├── README.md           # プロジェクト説明書
├── .gitignore          # Git管理除外設定
├── css/
│   ├── style.css       # コンパイル済みCSS
│   └── style.css.map   # デバッグ用ソースマップ
├── js/
│   ├── slick.js        # slickスライダーライブラリ
│   └── main.js         # メインロジック
├── images/             # 画像
└── scss/               # Scssソースファイル
    ├── abstracts/
    │   ├── _mixin.scss     # 共通関数
    │   └── _variables.scss # 定数定義
    ├── layout/
    │   ├── _footer.scss    # フッター用スタイル
    │   └── _header.scss    # ヘッダー用スタイル
    └── style.scss
