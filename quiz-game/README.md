# AWS Certified Generative AI Developer - Professional クイズ

AIP-C01 の 5 ドメインに対応した、ブラウザで動く学習クイズです。

- 基礎編・上級編・模擬試験・弱点診断モード
- 公式ドメイン比率: 31% / 26% / 20% / 12% / 11%
- 択一選択・複数選択、解説、カテゴリ別の復習
- PWA 対応、フラッシュカードの CSV / Anki TSV エクスポート

初期状態では各ドメイン 15 問、計 75 問のスターター問題セットを収録しています。問題を追加する場合は `questions/` の対応するファイルを編集し、`npm run load-questions` を実行してください。

```bash
npm install
npm test
npm run dev
```

試験内容は変わり得るため、問題の正確性は常に
[AIP-C01 公式試験ガイド](https://docs.aws.amazon.com/ja_jp/aws-certification/latest/ai-professional-01/ai-professional-01.html)
と照合してください。
