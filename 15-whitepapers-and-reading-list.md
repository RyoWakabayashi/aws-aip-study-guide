# 15. 公式リーディングリスト

すべてを読む必要はありません。最初に試験ガイドを読み、弱いドメインだけ一次資料へ進みます。

## 最優先

1. [AIP-C01 公式試験ガイド](https://docs.aws.amazon.com/ja_jp/aws-certification/latest/ai-professional-01/ai-professional-01.html)
2. [試験対象 AWS サービス](https://docs.aws.amazon.com/aws-certification/latest/ai-professional-01/aip-01-in-scope-services.html)
3. [Amazon Bedrock API の選択](https://docs.aws.amazon.com/bedrock/latest/userguide/apis.html)
4. [Amazon Bedrock Knowledge Bases](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html)
5. [Amazon Bedrock Guardrails](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html)
6. [Amazon Bedrock Evaluations](https://docs.aws.amazon.com/bedrock/latest/userguide/evaluation.html)

## 弱点別

| 弱点 | 公式資料 |
|---|---|
| モデル・可用性 | [モデル一覧](https://docs.aws.amazon.com/bedrock/latest/userguide/models.html) / [クロスリージョン推論](https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html) |
| RAG・検索 | [チャンク方式](https://docs.aws.amazon.com/bedrock/latest/userguide/kb-chunking.html) / [AWS の RAG 選択肢](https://docs.aws.amazon.com/prescriptive-guidance/latest/retrieval-augmented-generation-options/welcome.html) |
| プロンプト・フロー | [Prompt Management](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html) / [Bedrock Flows](https://docs.aws.amazon.com/bedrock/latest/userguide/flows.html) |
| エージェント | [AgentCore](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/what-is-bedrock-agentcore.html) / [AgentCore Evaluations](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/how-it-works-evaluations.html) |
| 非構造データ | [Bedrock Data Automation](https://docs.aws.amazon.com/bedrock/latest/userguide/bda-how-it-works.html) |
| 安全性 | [Automated Reasoning checks](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-automated-reasoning-checks.html) |
| 運用 | [Bedrock モニタリング](https://docs.aws.amazon.com/bedrock/latest/userguide/monitoring.html) / [Generative AI Lens](https://docs.aws.amazon.com/wellarchitected/latest/generative-ai-lens/welcome.html) |

## 読み方

- モデル名・リージョン・料金・クォータは暗記せず、試験直前と設計時に公式表を確認する。
- サービスのチュートリアルより先に「対応モデル」「制限」「セキュリティ」「料金」を確認する。
- ブログ記事と古いハンズオンが「モデルアクセスを事前申請」と説明している場合は、現行の[モデルアクセス](https://docs.aws.amazon.com/bedrock/latest/userguide/model-access.html)を優先する。

最終確認日: 2026-08-23。サービス仕様や試験範囲は変わるため、この日付より新しい公式情報を優先してください。
