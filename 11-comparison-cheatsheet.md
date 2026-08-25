# 11. サービス比較チートシート

| 比較 | 選択の目安 |
|---|---|
| Bedrock vs SageMaker AI | マネージド FM と GenAI 機能の統合は Bedrock。独自モデルの学習・高度なホスティング制御は SageMaker AI。 |
| Converse vs InvokeModel | メッセージ対応モデルの共通インターフェースは Converse。モデル固有形式、埋め込み、画像などの直接制御は InvokeModel。 |
| オンデマンド vs Provisioned Throughput | 変動需要はオンデマンド。予測可能な継続容量は利用率を確認して Provisioned Throughput。 |
| 地理 CRIS vs グローバル CRIS | データ所在地境界が必要なら地理ベース。広域容量・コスト優先ならグローバルを評価。 |
| Knowledge Bases vs 独自 RAG | 標準 RAG を迅速に構築するなら Knowledge Bases。特殊な ACL・前処理・検索制御は独自構成。 |
| Data Automation vs Knowledge Bases | 非構造データからの抽出・要約は Data Automation。質問に応じた検索・根拠付き生成は Knowledge Bases。 |
| OpenSearch vs Aurora pgvector | ハイブリッド検索と検索運用重視は OpenSearch。既存 PostgreSQL とトランザクションの近接は Aurora pgvector。 |
| Bedrock Agents vs Strands Agents | マネージドな Bedrock 統合は Bedrock Agents。コードでエージェントループを制御するなら Strands Agents。 |
| AgentCore vs エージェントフレームワーク | AgentCore は Runtime、Gateway、Identity、Memory、Policy、観測・評価などの本番基盤。推論ループを記述する SDK とは役割が異なる。 |
| MCP vs AgentCore Gateway | MCP はツール接続プロトコル。Gateway は API / Lambda / MCP を認証・ポリシー付きで公開する管理面。 |
| Bedrock Flows vs Step Functions | FM・プロンプト・Knowledge Base 中心のフローは Bedrock Flows。厳密な状態、再試行、長時間処理、承認は Step Functions。 |
| Guardrails vs IAM / Policy | Guardrails は生成内容の安全性。IAM / AgentCore Policy はリソース・ツール操作の強制認可。両方が必要。 |
| コンテキストグラウンディング vs Automated Reasoning | 参照文書への根拠性・関連性は前者。明文化された規則への論理的一貫性は後者。 |
| 応答キャッシュ vs プロンプトキャッシュ | 完成回答の再利用は応答キャッシュ。繰り返す長い接頭辞の計算再利用はプロンプトキャッシュ。 |
| Bedrock Evaluations vs AgentCore Evaluations | モデル・RAG の評価は Bedrock Evaluations。セッション・軌跡・ツールを含むエージェント評価は AgentCore Evaluations。 |

## 覚えておく原則

- 内容の安全制御とアクセス認可を混同しない。
- マネージドサービスを選んでも、データ品質・評価・IAM・監視は不要にならない。
- 「最新モデル」「最大モデル」「最安モデル」だけを根拠に選ばない。
- リージョンとモデルの対応は変わるため、暗記ではなく公式の対応表で確認する。
