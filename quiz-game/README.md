# AWS Certified Generative AI Developer - Professional クイズ

AIP-C01 の 5 ドメインに対応した、ブラウザで動く学習クイズです。

- 基礎編・上級編・模擬試験・弱点診断モード
- 公式ドメイン比率: 31% / 26% / 20% / 12% / 11%
- 択一選択・複数選択、解説、カテゴリ別の復習
- PWA 対応、フラッシュカードの CSV / Anki TSV エクスポート

基礎編は各ドメイン 75 問の計 375 問、上級編は各ドメイン 5 問の計 25 問を収録しています。全 400 問は問題文が重複せず、基礎編には択一 300 問と複数選択 75 問を含みます。

出題テーマは公式試験ガイドのタスクに合わせ、次の領域を幅広く扱います。

- FM 選定、RAG、ベクトル検索、データ品質、プロンプト統制
- エージェント、MCP、非同期処理、ストリーミング、CI/CD、フォールバック
- Guardrails、プロンプトインジェクション、IAM、プライバシー、責任ある AI
- トークン・キャッシュ・容量の最適化、可観測性、総保有コスト
- モデル評価、RAG の切り分け、ドリフト、負荷・障害試験、インシデント対応

問題を追加する場合は `questions/` または `questions-advanced/` の対応ファイルを編集し、次の生成コマンドを実行します。

```bash
npm install
npm run load-questions
npm run load-advanced-questions
npm test
npm run dev
```

試験内容は変わり得るため、問題の正確性は常に
[AIP-C01 公式試験ガイド](https://docs.aws.amazon.com/ja_jp/aws-certification/latest/ai-professional-01/ai-professional-01.html)
と照合してください。
