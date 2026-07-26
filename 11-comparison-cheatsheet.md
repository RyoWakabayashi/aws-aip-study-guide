# 11. サービス比較チートシート

| 比較 | 選択の目安 |
|---|---|
| Bedrock vs SageMaker AI | マネージド FM の利用は Bedrock。独自モデルの訓練・高度なホスティング制御は SageMaker AI。 |
| Knowledge Bases vs 独自 RAG | 迅速なマネージド構築は Knowledge Bases。検索・取り込みを細かく最適化するなら独自構成。 |
| OpenSearch vs Aurora pgvector | 検索機能とハイブリッド検索重視は OpenSearch。既存 PostgreSQL と整合性重視は pgvector。 |
| 同期 vs 非同期推論 | 対話・即時 UI は同期／ストリーミング。長時間・大量処理はキュー経由の非同期。 |
| Guardrails vs IAM | Guardrails は生成内容の安全制御。IAM は AWS リソースへの認可。両方が必要。 |
| キャッシュ vs RAG | キャッシュは再利用による低レイテンシー・低コスト。RAG は最新の外部知識を根拠付きで渡す。 |
