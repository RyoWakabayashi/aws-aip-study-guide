# 04. API・エージェント・統合

この章では、モデル呼び出しだけでなく、モデルがツールを選び、業務システムへ安全に接続するまでを扱います。AI の判断と、アプリケーションが強制する権限・状態遷移を分離することが中心です。

## API パターン

| 要件 | 選択の目安 |
|---|---|
| 短い要求をすぐ返す | 同期 API |
| チャットで早く表示を始める | ConverseStream、SSE、WebSocket |
| 数分かかる文書・メディア処理 | SQS と Step Functions による非同期処理 |
| 複数システムへイベント配布 | EventBridge、SNS |
| バックプレッシャーと再配信 | SQS、同時実行上限、DLQ |

再試行可能な 5xx やスロットリングには、指数バックオフ、ジッター、回数・時間の上限を適用します。認証失敗、入力不正、コンテキスト上限超過などの 4xx を無条件に再試行してはいけません。副作用のある処理には冪等性キーを使います。

## エージェント実装の選択肢

| 選択肢 | 主な役割 |
|---|---|
| Agents for Amazon Bedrock | FM、アクショングループ、Knowledge Base のマネージドなオーケストレーション |
| Strands Agents | コードでエージェントループやツール連携を実装する SDK |
| AWS Agent Squad | 複数エージェントの協調パターン |
| Amazon Bedrock AgentCore | 任意フレームワーク／モデルのエージェントを本番運用するモジュール群 |
| Step Functions | 決定論的な状態、タイムアウト、承認、再試行を明示するワークフロー |

AgentCore は単一のエージェントフレームワークではありません。
Runtime、Memory、Gateway、Identity、Policy、Observability、Evaluations、Browser、Code Interpreter などを必要に応じて利用する本番基盤です。

## AgentCore の判断ポイント

- **Runtime**: 任意フレームワークのエージェントや MCP サーバーを分離されたセッションで実行する。
- **Gateway**: API、Lambda、MCP ツールを管理されたツール面として公開する。
- **Identity**: 外部サービスへの OAuth や API キーをエージェントコードから分離する。
- **Memory**: 短期・長期の会話記憶を管理する。業務上の正規データとは分離する。
- **Policy**: ツール利用の決定論的なポリシーを強制する。
- **Observability / Evaluations**: セッション、トレース、ツール使用、タスク完了を監視・評価する。

## MCP とツールの安全性

MCP はエージェントとツールの接続を標準化しますが、認証・認可を自動的に保証しません。

1. ツール名、説明、入力 JSON Schema、副作用を明確にする。
2. MCP サーバー側で主体・操作対象・テナントを再認可する。
3. 最小権限の実行ロールと短期認証情報を使用する。
4. タイムアウト、出力サイズ、最大ステップ、費用上限を設定する。
5. 高リスク操作は人間の承認を通し、実行履歴を監査する。

## Flows と Step Functions

Amazon Bedrock Flows は、プロンプト、FM、Knowledge Base、Lambda などをノードでつなぐ
GenAI ワークフローに向きます。
Step Functions は、長時間処理、厳密な状態遷移、サービス統合、再試行、承認が中心の業務ワークフローに向きます。
どちらも使える場合は、FM 中心のデータフローか、決定論的な業務オーケストレーションかで選びます。

## 試験での見分け方

- 「逐次表示」→ ストリーミング。
- 「長時間・大量」→ キューと非同期ワークフロー。
- 「再配信で二重注文」→ 冪等性キーと条件付き書き込み。
- 「ツールを標準接続」→ MCP。ただし認可・検証は別途必要。
- 「任意フレームワークのエージェントを本番運用」→ AgentCore。
- 「高リスク操作」→ 決定論的ポリシーと human-in-the-loop。

## 公式リソース

- [AIP-C01 ドメイン 2](https://docs.aws.amazon.com/ja_jp/aws-certification/latest/ai-professional-01/ai-professional-01-domain2.html)
- [Amazon Bedrock AgentCore](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/what-is-bedrock-agentcore.html)
- [Amazon Bedrock Flows](https://docs.aws.amazon.com/bedrock/latest/userguide/flows.html)
