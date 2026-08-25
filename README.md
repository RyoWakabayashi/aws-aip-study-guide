# AWS Certified Generative AI Developer - Professional 学習ガイド

AWS Certified Generative AI Developer - Professional (AIP-C01) の学習教材と、ブラウザで動く400問のクイズゲームです。

## 試験情報

- **試験コード**: AIP-C01
- **対象**: AWS 上で本番品質の生成 AI アプリケーションを実装する GenAI デベロッパー
- **設問**: 採点対象 65 問 + 採点対象外 10 問
- **合格スコア**: 750 / 1,000（スケールドスコア）
- **出題形式**: 択一選択・複数選択

> 試験時間、受験料、提供言語などは変更される可能性があります。申込時は
> [AWS Certification](https://aws.amazon.com/certification/certified-generative-ai-developer-professional/) を確認してください。

## 出題ドメイン

| ドメイン | 比率 | 学習ガイド |
|---|---:|---|
| 1. 基盤モデルの統合、データ管理、コンプライアンス | 31% | [01](./01-compute.md) / [02](./02-storage.md) / [03](./03-database.md) |
| 2. 実装と統合 | 26% | [04](./04-networking.md) / [07](./07-architecture.md) |
| 3. AI の安全性、セキュリティ、ガバナンス | 20% | [05](./05-security.md) |
| 4. GenAI アプリケーションの運用効率と最適化 | 12% | [06](./06-monitoring.md) / [08](./08-cost-optimization.md) |
| 5. テスト、検証、トラブルシューティング | 11% | [09](./09-disaster-recovery.md) / [10](./10-migration.md) |

比率とタスクは [AIP-C01 公式試験ガイド](https://docs.aws.amazon.com/ja_jp/aws-certification/latest/ai-professional-01/ai-professional-01.html)
に基づきます。モデルの学習・トレーニング、高度な ML 手法、データ／特徴量エンジニアリングは主な試験対象外です。

## 教材構成

- [01. 基盤モデルと Amazon Bedrock](./01-compute.md)
- [02. データ管理・RAG](./02-storage.md)
- [03. ベクトルストアと検索](./03-database.md)
- [04. API・エージェント・統合](./04-networking.md)
- [05. AI 安全性・セキュリティ・ガバナンス](./05-security.md)
- [06. オブザーバビリティと運用](./06-monitoring.md)
- [07. GenAI アーキテクチャパターン](./07-architecture.md)
- [08. パフォーマンスとコスト最適化](./08-cost-optimization.md)
- [09. テスト・評価・障害対応](./09-disaster-recovery.md)
- [10. デプロイと継続的改善](./10-migration.md)
- [11. サービス比較チートシート](./11-comparison-cheatsheet.md)
- [12. キーワード対応表](./12-keyword-cheatsheet.md)
- [13. ハンズオン演習](./13-hands-on-labs.md)
- [14. アーキテクチャ図集](./14-architecture-diagrams.md)
- [15. 公式リーディングリスト](./15-whitepapers-and-reading-list.md)
- [実践問題集](./practice-questions.md)
- [クイズゲーム（基礎375問＋上級25問）](./quiz-game/)

## 学習の進め方

1. ドメイン 1 と 2 を中心に、Bedrock、RAG、ベクトル検索、API／エージェント統合を実装レベルで学ぶ。
2. Guardrails、IAM、暗号化、PII、責任ある AI を設計要件と結び付けて復習する。
3. 評価データセット、プロンプト回帰テスト、CloudWatch／X-Ray、コストとレイテンシーのトレードオフを演習する。
4. クイズゲームと実践問題集で弱点を確認し、公式ガイドに戻ってタスク単位で補強する。

## 開発

```bash
npm install
npm test
cd quiz-game && npm install && npm test
```

## 免責事項

本リポジトリーは非公式の個人学習用資料であり、合格を保証するものではありません。AWS の仕様・試験内容は更新されるため、常に公式情報を優先してください。
