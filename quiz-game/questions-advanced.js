// AWS Certified Generative AI Developer - Professional (AIP-C01) 上級編 - 統合問題ファイル
// このファイルは自動生成されます。直接編集しないでください。

const allAdvancedQuestions = [
  {
    id: 'fm-integration-advanced-1',
    category: 'FM統合・データ・コンプライアンス',
    question: '規制対象文書を扱う RAG を設計する。検索品質とアクセス制御を両立するために選択すべき2つはどれですか。',
    options: [
      '文書にテナント・機密区分メタデータを付与する',
      '検索時にメタデータフィルターを強制する',
      'アクセス制御をプロンプトだけに記述する',
      '全テナントの検索結果を結合する',
      'ログに文書本文を無加工で保存する',
      '埋め込みだけで認可を判断する'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: 'メタデータとデータ層の認可で検索範囲を強制します。'
  },
  {
    id: 'implementation-advanced-1',
    category: '実装・統合',
    question: '注文操作を行うエージェントの安全な実装として選択すべき2つはどれですか。',
    options: [
      'ツール入力をスキーマ検証する',
      '高リスク操作に人間の承認を置く',
      'モデル出力をそのまま実行する',
      'ツールに管理者権限を与える',
      '停止条件を設けない',
      '失敗を再試行し続ける'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '副作用のある操作には検証、最小権限、承認、停止条件が必要です。'
  },
  {
    id: 'safety-advanced-1',
    category: 'AI安全性・セキュリティ・ガバナンス',
    question: '生成 AI アプリケーションで機密情報と不適切出力を扱う対策として選択すべき2つはどれですか。',
    options: [
      'Guardrails を入力・出力に適用する',
      'ログの PII をマスキングする',
      '全ログを全社員へ公開する',
      'IAM を不要にする',
      '外部文書をシステム命令として扱う',
      '監査証跡を削除する'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '安全性の制御と通常のデータセキュリティを併用します。'
  },
  {
    id: 'optimization-advanced-1',
    category: '運用効率・最適化',
    question: '応答品質を保ちながら推論コストを下げる対策として選択すべき2つはどれですか。',
    options: [
      '要求の複雑さに応じてモデルをルーティングする',
      '不要な検索コンテキストを削減する',
      'すべて最大モデルへ固定する',
      'キャッシュの権限を確認しない',
      '品質評価を省略する',
      'レイテンシーを測定しない'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '品質、コスト、レイテンシーの測定に基づき最適化します。'
  },
  {
    id: 'validation-advanced-1',
    category: 'テスト・検証・トラブルシューティング',
    question: '新しいモデルへ切り替える前の品質保証として選択すべき2つはどれですか。',
    options: [
      'バージョン管理した評価データセットで比較する',
      '段階的リリースとロールバックを準備する',
      '本番で初めて品質を確認する',
      '安全性テストを省略する',
      'トレースを無効にする',
      '失敗例を評価から除外する'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: 'モデル変更は評価、段階的展開、ロールバックを伴わせます。'
  }
]

// 上級編問題をグローバル変数として設定
if (typeof window !== 'undefined') {
  window.allAdvancedQuestions = allAdvancedQuestions
} else if (typeof global !== 'undefined') {
  global.allAdvancedQuestions = allAdvancedQuestions
}

// Node.js環境での使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = allAdvancedQuestions
}
