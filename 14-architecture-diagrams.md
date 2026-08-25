# 14. アーキテクチャ図集

図では、モデルの前後にある認可・検証と、オンライン経路から分離された取り込み経路に注目してください。

## 認可付き RAG

```mermaid
flowchart LR
  U[利用者] --> API[API Gateway / App]
  API --> AUTH[認証・業務認可]
  AUTH --> GRIN[入力 Guardrail]
  GRIN --> RET[ACL フィルター付き検索]
  RET --> VS[ベクトルストア]
  RET --> FM[Amazon Bedrock]
  FM --> GROUT[出力 Guardrail・根拠確認]
  GROUT --> API

  DOC[S3 / 業務データ] --> VAL[品質・PII・権利検証]
  VAL --> ING[チャンク・埋め込み・版管理]
  ING --> VS
```

重要点は、テナント ACL を FM ではなく検索前に強制することです。Guardrail と業務認可は別の責務です。

## 承認付きエージェント

```mermaid
flowchart LR
  U[利用者] --> A[エージェント]
  A --> G[Gateway / ツール候補]
  G --> V[入力スキーマ・認可・Policy]
  V --> R{高リスク?}
  R -- はい --> H[人間の承認]
  R -- いいえ --> T[最小権限ツール]
  H --> T
  T --> O[結果検証・監査ログ]
  O --> A
```

最大ステップ、時間、トークン、費用の予算はエージェントループの外側から強制します。

## AgentCore を使う本番エージェント

```mermaid
flowchart TB
  APP[アプリケーション] --> RT[AgentCore Runtime]
  RT --> MEM[Memory]
  RT --> GW[Gateway]
  GW --> ID[Identity]
  GW --> POL[Policy]
  GW --> TOOLS[API / Lambda / MCP]
  RT --> OBS[Observability]
  OBS --> EVAL[Evaluations]
  OBS --> CW[CloudWatch]
```

AgentCore の各機能は独立して利用できます。Runtime を使えば認可や評価が自動的に完成するわけではありません。

## 非同期データ処理

```mermaid
flowchart LR
  S3[S3 イベント] --> Q[SQS]
  Q --> SF[Step Functions]
  SF --> BDA[Data Automation / FM]
  BDA --> VAL[スキーマ・品質検証]
  VAL --> OK[結果保存]
  VAL --> REVIEW[人手レビュー]
  SF --> DLQ[失敗隔離・再処理]
```

ジョブと項目ごとの状態、冪等性、部分再処理が長時間ワークフローの要点です。
