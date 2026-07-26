// AWS Certified Generative AI Developer - Professional (AIP-C01) クイズ問題データ
// 自動生成ファイル - 手動編集しないでください
// 生成日時: 2026-07-26T14:18:30.986Z

// 全問題データ
const allQuestions = [
  {
    id: 'fm-integration-1',
    category: 'FM統合・データ・コンプライアンス',
    question: '最新の社内規程を根拠に回答するアシスタントに最も適した方式はどれですか。',
    options: [
      'RAG を実装し、検索結果を根拠として FM に渡す',
      'モデルの温度を最大にする',
      'プロンプトだけでデータアクセスを制御する',
      '検索を無効にする'
    ],
    correct: 0,
    explanation: '要件に合うデータ処理と検索設計を選びます。'
  },
  {
    id: 'fm-integration-2',
    category: 'FM統合・データ・コンプライアンス',
    question: 'テナント間で検索対象を分離するために必要な対策はどれですか。',
    options: [
      'テナント ID のメタデータフィルターとデータ層の認可を適用する',
      'モデルの温度を最大にする',
      'プロンプトだけでデータアクセスを制御する',
      '検索を無効にする'
    ],
    correct: 0,
    explanation: '要件に合うデータ処理と検索設計を選びます。'
  },
  {
    id: 'fm-integration-3',
    category: 'FM統合・データ・コンプライアンス',
    question: '文書の見出し構造を保って検索品質を高めたい。最初に検討することはどれですか。',
    options: [
      '文書構造に基づくチャンク化を評価する',
      'モデルの温度を最大にする',
      'プロンプトだけでデータアクセスを制御する',
      '検索を無効にする'
    ],
    correct: 0,
    explanation: '要件に合うデータ処理と検索設計を選びます。'
  },
  {
    id: 'fm-integration-4',
    category: 'FM統合・データ・コンプライアンス',
    question: '埋め込みモデルを変更する際の重要な作業はどれですか。',
    options: [
      '再埋め込みとインデックス切替を計画する',
      'モデルの温度を最大にする',
      'プロンプトだけでデータアクセスを制御する',
      '検索を無効にする'
    ],
    correct: 0,
    explanation: '要件に合うデータ処理と検索設計を選びます。'
  },
  {
    id: 'fm-integration-5',
    category: 'FM統合・データ・コンプライアンス',
    question: '検索精度とキーワード一致を両立させたい。適した検索はどれですか。',
    options: [
      'ベクトル検索とキーワード検索のハイブリッド検索',
      'モデルの温度を最大にする',
      'プロンプトだけでデータアクセスを制御する',
      '検索を無効にする'
    ],
    correct: 0,
    explanation: '要件に合うデータ処理と検索設計を選びます。'
  },
  {
    id: 'fm-integration-multi-6',
    category: 'FM統合・データ・コンプライアンス',
    question: '最新の社内規程を根拠に回答するアシスタントに最も適した方式はどれですか。（2つ選択）',
    options: [
      'RAG を実装し、検索結果を根拠として FM に渡す',
      'データ品質と形式を検証する',
      'すべてのアクセス制御をプロンプトに任せる',
      '無関係な全文書を常に送る',
      'ログへ機密データをそのまま記録する',
      'モデルの出力だけで認可する'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: 'RAG はデータ品質・アクセス制御・検索品質を組み合わせて設計します。'
  },
  {
    id: 'fm-integration-multi-7',
    category: 'FM統合・データ・コンプライアンス',
    question: 'テナント間で検索対象を分離するために必要な対策はどれですか。（2つ選択）',
    options: [
      'テナント ID のメタデータフィルターとデータ層の認可を適用する',
      'データ品質と形式を検証する',
      'すべてのアクセス制御をプロンプトに任せる',
      '無関係な全文書を常に送る',
      'ログへ機密データをそのまま記録する',
      'モデルの出力だけで認可する'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: 'RAG はデータ品質・アクセス制御・検索品質を組み合わせて設計します。'
  },
  {
    id: 'fm-integration-multi-8',
    category: 'FM統合・データ・コンプライアンス',
    question: '文書の見出し構造を保って検索品質を高めたい。最初に検討することはどれですか。（2つ選択）',
    options: [
      '文書構造に基づくチャンク化を評価する',
      'データ品質と形式を検証する',
      'すべてのアクセス制御をプロンプトに任せる',
      '無関係な全文書を常に送る',
      'ログへ機密データをそのまま記録する',
      'モデルの出力だけで認可する'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: 'RAG はデータ品質・アクセス制御・検索品質を組み合わせて設計します。'
  },
  {
    id: 'fm-integration-multi-9',
    category: 'FM統合・データ・コンプライアンス',
    question: '埋め込みモデルを変更する際の重要な作業はどれですか。（2つ選択）',
    options: [
      '再埋め込みとインデックス切替を計画する',
      'データ品質と形式を検証する',
      'すべてのアクセス制御をプロンプトに任せる',
      '無関係な全文書を常に送る',
      'ログへ機密データをそのまま記録する',
      'モデルの出力だけで認可する'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: 'RAG はデータ品質・アクセス制御・検索品質を組み合わせて設計します。'
  },
  {
    id: 'fm-integration-multi-10',
    category: 'FM統合・データ・コンプライアンス',
    question: '検索精度とキーワード一致を両立させたい。適した検索はどれですか。（2つ選択）',
    options: [
      'ベクトル検索とキーワード検索のハイブリッド検索',
      'データ品質と形式を検証する',
      'すべてのアクセス制御をプロンプトに任せる',
      '無関係な全文書を常に送る',
      'ログへ機密データをそのまま記録する',
      'モデルの出力だけで認可する'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: 'RAG はデータ品質・アクセス制御・検索品質を組み合わせて設計します。'
  },
  {
    id: 'fm-integration-multi-11',
    category: 'FM統合・データ・コンプライアンス',
    question: '最新の社内規程を根拠に回答するアシスタントに最も適した方式はどれですか。（2つ選択）',
    options: [
      'RAG を実装し、検索結果を根拠として FM に渡す',
      'データ品質と形式を検証する',
      'すべてのアクセス制御をプロンプトに任せる',
      '無関係な全文書を常に送る',
      'ログへ機密データをそのまま記録する',
      'モデルの出力だけで認可する'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: 'RAG はデータ品質・アクセス制御・検索品質を組み合わせて設計します。'
  },
  {
    id: 'fm-integration-multi-12',
    category: 'FM統合・データ・コンプライアンス',
    question: 'テナント間で検索対象を分離するために必要な対策はどれですか。（2つ選択）',
    options: [
      'テナント ID のメタデータフィルターとデータ層の認可を適用する',
      'データ品質と形式を検証する',
      'すべてのアクセス制御をプロンプトに任せる',
      '無関係な全文書を常に送る',
      'ログへ機密データをそのまま記録する',
      'モデルの出力だけで認可する'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: 'RAG はデータ品質・アクセス制御・検索品質を組み合わせて設計します。'
  },
  {
    id: 'fm-integration-multi-13',
    category: 'FM統合・データ・コンプライアンス',
    question: '文書の見出し構造を保って検索品質を高めたい。最初に検討することはどれですか。（2つ選択）',
    options: [
      '文書構造に基づくチャンク化を評価する',
      'データ品質と形式を検証する',
      'すべてのアクセス制御をプロンプトに任せる',
      '無関係な全文書を常に送る',
      'ログへ機密データをそのまま記録する',
      'モデルの出力だけで認可する'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: 'RAG はデータ品質・アクセス制御・検索品質を組み合わせて設計します。'
  },
  {
    id: 'fm-integration-multi-14',
    category: 'FM統合・データ・コンプライアンス',
    question: '埋め込みモデルを変更する際の重要な作業はどれですか。（2つ選択）',
    options: [
      '再埋め込みとインデックス切替を計画する',
      'データ品質と形式を検証する',
      'すべてのアクセス制御をプロンプトに任せる',
      '無関係な全文書を常に送る',
      'ログへ機密データをそのまま記録する',
      'モデルの出力だけで認可する'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: 'RAG はデータ品質・アクセス制御・検索品質を組み合わせて設計します。'
  },
  {
    id: 'fm-integration-multi-15',
    category: 'FM統合・データ・コンプライアンス',
    question: '検索精度とキーワード一致を両立させたい。適した検索はどれですか。（2つ選択）',
    options: [
      'ベクトル検索とキーワード検索のハイブリッド検索',
      'データ品質と形式を検証する',
      'すべてのアクセス制御をプロンプトに任せる',
      '無関係な全文書を常に送る',
      'ログへ機密データをそのまま記録する',
      'モデルの出力だけで認可する'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: 'RAG はデータ品質・アクセス制御・検索品質を組み合わせて設計します。'
  },
  {
    id: 'implementation-1',
    category: '実装・統合',
    question: 'FM の応答を利用者に逐次表示する API 方式はどれですか。',
    options: [
      'ストリーミング応答を使用する',
      '同期ポーリングだけを使う',
      '認可を FM に任せる',
      'エラーを隠す'
    ],
    correct: 0,
    explanation: 'ワークロード特性と安全な統合パターンで選択します。'
  },
  {
    id: 'implementation-2',
    category: '実装・統合',
    question: 'API スロットリングに対する適切な対策はどれですか。',
    options: [
      '指数バックオフとジッターを伴う再試行を実装する',
      '同期ポーリングだけを使う',
      '認可を FM に任せる',
      'エラーを隠す'
    ],
    correct: 0,
    explanation: 'ワークロード特性と安全な統合パターンで選択します。'
  },
  {
    id: 'implementation-3',
    category: '実装・統合',
    question: 'エージェントが外部ツールを呼び出す際の基本対策はどれですか。',
    options: [
      '入力を検証し最小権限でツールを実行する',
      '同期ポーリングだけを使う',
      '認可を FM に任せる',
      'エラーを隠す'
    ],
    correct: 0,
    explanation: 'ワークロード特性と安全な統合パターンで選択します。'
  },
  {
    id: 'implementation-4',
    category: '実装・統合',
    question: '長時間の文書処理を実装する方式として適切なのはどれですか。',
    options: [
      'キューと非同期ワークフローを使用する',
      '同期ポーリングだけを使う',
      '認可を FM に任せる',
      'エラーを隠す'
    ],
    correct: 0,
    explanation: 'ワークロード特性と安全な統合パターンで選択します。'
  },
  {
    id: 'implementation-5',
    category: '実装・統合',
    question: 'モデル障害時にサービス継続性を高める設計はどれですか。',
    options: [
      'モデルまたはリージョンのフォールバックを用意する',
      '同期ポーリングだけを使う',
      '認可を FM に任せる',
      'エラーを隠す'
    ],
    correct: 0,
    explanation: 'ワークロード特性と安全な統合パターンで選択します。'
  },
  {
    id: 'implementation-multi-6',
    category: '実装・統合',
    question: 'FM の応答を利用者に逐次表示する API 方式はどれですか。（2つ選択）',
    options: [
      'ストリーミング応答を使用する',
      'タイムアウトと停止条件を設定する',
      'モデル出力を無検証で業務 API に渡す',
      'クライアントに永続認証情報を渡す',
      '無制限に再試行する',
      '監査ログを無効化する'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '統合では信頼性、入力検証、最小権限、制御された再試行を実装します。'
  },
  {
    id: 'implementation-multi-7',
    category: '実装・統合',
    question: 'API スロットリングに対する適切な対策はどれですか。（2つ選択）',
    options: [
      '指数バックオフとジッターを伴う再試行を実装する',
      'タイムアウトと停止条件を設定する',
      'モデル出力を無検証で業務 API に渡す',
      'クライアントに永続認証情報を渡す',
      '無制限に再試行する',
      '監査ログを無効化する'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '統合では信頼性、入力検証、最小権限、制御された再試行を実装します。'
  },
  {
    id: 'implementation-multi-8',
    category: '実装・統合',
    question: 'エージェントが外部ツールを呼び出す際の基本対策はどれですか。（2つ選択）',
    options: [
      '入力を検証し最小権限でツールを実行する',
      'タイムアウトと停止条件を設定する',
      'モデル出力を無検証で業務 API に渡す',
      'クライアントに永続認証情報を渡す',
      '無制限に再試行する',
      '監査ログを無効化する'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '統合では信頼性、入力検証、最小権限、制御された再試行を実装します。'
  },
  {
    id: 'implementation-multi-9',
    category: '実装・統合',
    question: '長時間の文書処理を実装する方式として適切なのはどれですか。（2つ選択）',
    options: [
      'キューと非同期ワークフローを使用する',
      'タイムアウトと停止条件を設定する',
      'モデル出力を無検証で業務 API に渡す',
      'クライアントに永続認証情報を渡す',
      '無制限に再試行する',
      '監査ログを無効化する'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '統合では信頼性、入力検証、最小権限、制御された再試行を実装します。'
  },
  {
    id: 'implementation-multi-10',
    category: '実装・統合',
    question: 'モデル障害時にサービス継続性を高める設計はどれですか。（2つ選択）',
    options: [
      'モデルまたはリージョンのフォールバックを用意する',
      'タイムアウトと停止条件を設定する',
      'モデル出力を無検証で業務 API に渡す',
      'クライアントに永続認証情報を渡す',
      '無制限に再試行する',
      '監査ログを無効化する'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '統合では信頼性、入力検証、最小権限、制御された再試行を実装します。'
  },
  {
    id: 'implementation-multi-11',
    category: '実装・統合',
    question: 'FM の応答を利用者に逐次表示する API 方式はどれですか。（2つ選択）',
    options: [
      'ストリーミング応答を使用する',
      'タイムアウトと停止条件を設定する',
      'モデル出力を無検証で業務 API に渡す',
      'クライアントに永続認証情報を渡す',
      '無制限に再試行する',
      '監査ログを無効化する'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '統合では信頼性、入力検証、最小権限、制御された再試行を実装します。'
  },
  {
    id: 'implementation-multi-12',
    category: '実装・統合',
    question: 'API スロットリングに対する適切な対策はどれですか。（2つ選択）',
    options: [
      '指数バックオフとジッターを伴う再試行を実装する',
      'タイムアウトと停止条件を設定する',
      'モデル出力を無検証で業務 API に渡す',
      'クライアントに永続認証情報を渡す',
      '無制限に再試行する',
      '監査ログを無効化する'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '統合では信頼性、入力検証、最小権限、制御された再試行を実装します。'
  },
  {
    id: 'implementation-multi-13',
    category: '実装・統合',
    question: 'エージェントが外部ツールを呼び出す際の基本対策はどれですか。（2つ選択）',
    options: [
      '入力を検証し最小権限でツールを実行する',
      'タイムアウトと停止条件を設定する',
      'モデル出力を無検証で業務 API に渡す',
      'クライアントに永続認証情報を渡す',
      '無制限に再試行する',
      '監査ログを無効化する'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '統合では信頼性、入力検証、最小権限、制御された再試行を実装します。'
  },
  {
    id: 'implementation-multi-14',
    category: '実装・統合',
    question: '長時間の文書処理を実装する方式として適切なのはどれですか。（2つ選択）',
    options: [
      'キューと非同期ワークフローを使用する',
      'タイムアウトと停止条件を設定する',
      'モデル出力を無検証で業務 API に渡す',
      'クライアントに永続認証情報を渡す',
      '無制限に再試行する',
      '監査ログを無効化する'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '統合では信頼性、入力検証、最小権限、制御された再試行を実装します。'
  },
  {
    id: 'implementation-multi-15',
    category: '実装・統合',
    question: 'モデル障害時にサービス継続性を高める設計はどれですか。（2つ選択）',
    options: [
      'モデルまたはリージョンのフォールバックを用意する',
      'タイムアウトと停止条件を設定する',
      'モデル出力を無検証で業務 API に渡す',
      'クライアントに永続認証情報を渡す',
      '無制限に再試行する',
      '監査ログを無効化する'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '統合では信頼性、入力検証、最小権限、制御された再試行を実装します。'
  },
  {
    id: 'safety-1',
    category: 'AI安全性・セキュリティ・ガバナンス',
    question: '有害な生成結果を抑制するために利用する機能はどれですか。',
    options: [
      'Amazon Bedrock Guardrails を設定する',
      'プロンプトを長くするだけ',
      'アクセス制御を省略する',
      'すべての記録を公開する'
    ],
    correct: 0,
    explanation: '生成 AI 固有の安全性と通常の AWS セキュリティの両方が必要です。'
  },
  {
    id: 'safety-2',
    category: 'AI安全性・セキュリティ・ガバナンス',
    question: 'プロンプトインジェクションへの基本的な対策はどれですか。',
    options: [
      '外部コンテンツを命令として扱わずツール入力を検証する',
      'プロンプトを長くするだけ',
      'アクセス制御を省略する',
      'すべての記録を公開する'
    ],
    correct: 0,
    explanation: '生成 AI 固有の安全性と通常の AWS セキュリティの両方が必要です。'
  },
  {
    id: 'safety-3',
    category: 'AI安全性・セキュリティ・ガバナンス',
    question: 'モデル API への AWS 権限を制御する仕組みはどれですか。',
    options: [
      'IAM の最小権限ポリシーを適用する',
      'プロンプトを長くするだけ',
      'アクセス制御を省略する',
      'すべての記録を公開する'
    ],
    correct: 0,
    explanation: '生成 AI 固有の安全性と通常の AWS セキュリティの両方が必要です。'
  },
  {
    id: 'safety-4',
    category: 'AI安全性・セキュリティ・ガバナンス',
    question: 'ログ内の個人情報を守る対策はどれですか。',
    options: [
      'マスキングと保存期間・アクセス権を管理する',
      'プロンプトを長くするだけ',
      'アクセス制御を省略する',
      'すべての記録を公開する'
    ],
    correct: 0,
    explanation: '生成 AI 固有の安全性と通常の AWS セキュリティの両方が必要です。'
  },
  {
    id: 'safety-5',
    category: 'AI安全性・セキュリティ・ガバナンス',
    question: '責任ある AI の評価に含めるべき観点はどれですか。',
    options: [
      'バイアス、有害性、透明性を評価する',
      'プロンプトを長くするだけ',
      'アクセス制御を省略する',
      'すべての記録を公開する'
    ],
    correct: 0,
    explanation: '生成 AI 固有の安全性と通常の AWS セキュリティの両方が必要です。'
  },
  {
    id: 'safety-multi-6',
    category: 'AI安全性・セキュリティ・ガバナンス',
    question: '有害な生成結果を抑制するために利用する機能はどれですか。（2つ選択）',
    options: [
      'Amazon Bedrock Guardrails を設定する',
      '変更履歴と監査証跡を保存する',
      '出力を常に信頼する',
      '全ユーザーに管理者権限を与える',
      '機密情報を平文ログへ保存する',
      'ガードレールを認可の代替にする'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '安全性、認可、データ保護、監査を多層で実装します。'
  },
  {
    id: 'safety-multi-7',
    category: 'AI安全性・セキュリティ・ガバナンス',
    question: 'プロンプトインジェクションへの基本的な対策はどれですか。（2つ選択）',
    options: [
      '外部コンテンツを命令として扱わずツール入力を検証する',
      '変更履歴と監査証跡を保存する',
      '出力を常に信頼する',
      '全ユーザーに管理者権限を与える',
      '機密情報を平文ログへ保存する',
      'ガードレールを認可の代替にする'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '安全性、認可、データ保護、監査を多層で実装します。'
  },
  {
    id: 'safety-multi-8',
    category: 'AI安全性・セキュリティ・ガバナンス',
    question: 'モデル API への AWS 権限を制御する仕組みはどれですか。（2つ選択）',
    options: [
      'IAM の最小権限ポリシーを適用する',
      '変更履歴と監査証跡を保存する',
      '出力を常に信頼する',
      '全ユーザーに管理者権限を与える',
      '機密情報を平文ログへ保存する',
      'ガードレールを認可の代替にする'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '安全性、認可、データ保護、監査を多層で実装します。'
  },
  {
    id: 'safety-multi-9',
    category: 'AI安全性・セキュリティ・ガバナンス',
    question: 'ログ内の個人情報を守る対策はどれですか。（2つ選択）',
    options: [
      'マスキングと保存期間・アクセス権を管理する',
      '変更履歴と監査証跡を保存する',
      '出力を常に信頼する',
      '全ユーザーに管理者権限を与える',
      '機密情報を平文ログへ保存する',
      'ガードレールを認可の代替にする'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '安全性、認可、データ保護、監査を多層で実装します。'
  },
  {
    id: 'safety-multi-10',
    category: 'AI安全性・セキュリティ・ガバナンス',
    question: '責任ある AI の評価に含めるべき観点はどれですか。（2つ選択）',
    options: [
      'バイアス、有害性、透明性を評価する',
      '変更履歴と監査証跡を保存する',
      '出力を常に信頼する',
      '全ユーザーに管理者権限を与える',
      '機密情報を平文ログへ保存する',
      'ガードレールを認可の代替にする'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '安全性、認可、データ保護、監査を多層で実装します。'
  },
  {
    id: 'safety-multi-11',
    category: 'AI安全性・セキュリティ・ガバナンス',
    question: '有害な生成結果を抑制するために利用する機能はどれですか。（2つ選択）',
    options: [
      'Amazon Bedrock Guardrails を設定する',
      '変更履歴と監査証跡を保存する',
      '出力を常に信頼する',
      '全ユーザーに管理者権限を与える',
      '機密情報を平文ログへ保存する',
      'ガードレールを認可の代替にする'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '安全性、認可、データ保護、監査を多層で実装します。'
  },
  {
    id: 'safety-multi-12',
    category: 'AI安全性・セキュリティ・ガバナンス',
    question: 'プロンプトインジェクションへの基本的な対策はどれですか。（2つ選択）',
    options: [
      '外部コンテンツを命令として扱わずツール入力を検証する',
      '変更履歴と監査証跡を保存する',
      '出力を常に信頼する',
      '全ユーザーに管理者権限を与える',
      '機密情報を平文ログへ保存する',
      'ガードレールを認可の代替にする'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '安全性、認可、データ保護、監査を多層で実装します。'
  },
  {
    id: 'safety-multi-13',
    category: 'AI安全性・セキュリティ・ガバナンス',
    question: 'モデル API への AWS 権限を制御する仕組みはどれですか。（2つ選択）',
    options: [
      'IAM の最小権限ポリシーを適用する',
      '変更履歴と監査証跡を保存する',
      '出力を常に信頼する',
      '全ユーザーに管理者権限を与える',
      '機密情報を平文ログへ保存する',
      'ガードレールを認可の代替にする'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '安全性、認可、データ保護、監査を多層で実装します。'
  },
  {
    id: 'safety-multi-14',
    category: 'AI安全性・セキュリティ・ガバナンス',
    question: 'ログ内の個人情報を守る対策はどれですか。（2つ選択）',
    options: [
      'マスキングと保存期間・アクセス権を管理する',
      '変更履歴と監査証跡を保存する',
      '出力を常に信頼する',
      '全ユーザーに管理者権限を与える',
      '機密情報を平文ログへ保存する',
      'ガードレールを認可の代替にする'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '安全性、認可、データ保護、監査を多層で実装します。'
  },
  {
    id: 'safety-multi-15',
    category: 'AI安全性・セキュリティ・ガバナンス',
    question: '責任ある AI の評価に含めるべき観点はどれですか。（2つ選択）',
    options: [
      'バイアス、有害性、透明性を評価する',
      '変更履歴と監査証跡を保存する',
      '出力を常に信頼する',
      '全ユーザーに管理者権限を与える',
      '機密情報を平文ログへ保存する',
      'ガードレールを認可の代替にする'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '安全性、認可、データ保護、監査を多層で実装します。'
  },
  {
    id: 'optimization-1',
    category: '運用効率・最適化',
    question: '利用者が応答を待つ時間を把握する重要な指標はどれですか。',
    options: [
      'TTFT と総レイテンシーを計測する',
      '入力を無制限に増やす',
      '監視を無効化する',
      '常に同じモデルだけを使う'
    ],
    correct: 0,
    explanation: '最小総コストと SLO の両方で判断します。'
  },
  {
    id: 'optimization-2',
    category: '運用効率・最適化',
    question: '同じ質問が多いアプリケーションでコストを減らす方法はどれですか。',
    options: [
      '鮮度と権限を考慮したキャッシュを利用する',
      '入力を無制限に増やす',
      '監視を無効化する',
      '常に同じモデルだけを使う'
    ],
    correct: 0,
    explanation: '最小総コストと SLO の両方で判断します。'
  },
  {
    id: 'optimization-3',
    category: '運用効率・最適化',
    question: '単純な要求の推論コストを下げる方法はどれですか。',
    options: [
      '要件に合う小さいモデルへルーティングする',
      '入力を無制限に増やす',
      '監視を無効化する',
      '常に同じモデルだけを使う'
    ],
    correct: 0,
    explanation: '最小総コストと SLO の両方で判断します。'
  },
  {
    id: 'optimization-4',
    category: '運用効率・最適化',
    question: '不要なトークンコストを削減する方法はどれですか。',
    options: [
      'プロンプトと検索コンテキストを必要最小限にする',
      '入力を無制限に増やす',
      '監視を無効化する',
      '常に同じモデルだけを使う'
    ],
    correct: 0,
    explanation: '最小総コストと SLO の両方で判断します。'
  },
  {
    id: 'optimization-5',
    category: '運用効率・最適化',
    question: 'モデルの品質・コスト悪化を検出するために確認するものはどれですか。',
    options: [
      'モデル別のトークン、エラー率、品質指標を監視する',
      '入力を無制限に増やす',
      '監視を無効化する',
      '常に同じモデルだけを使う'
    ],
    correct: 0,
    explanation: '最小総コストと SLO の両方で判断します。'
  },
  {
    id: 'optimization-multi-6',
    category: '運用効率・最適化',
    question: '利用者が応答を待つ時間を把握する重要な指標はどれですか。（2つ選択）',
    options: [
      'TTFT と総レイテンシーを計測する',
      'CloudWatch とトレースで傾向を確認する',
      'すべて最高性能モデルに固定する',
      '失敗時に無制限再試行する',
      'ユーザー影響を計測しない',
      'コストを品質から切り離して判断する'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '性能、品質、コストを相関させて最適化します。'
  },
  {
    id: 'optimization-multi-7',
    category: '運用効率・最適化',
    question: '同じ質問が多いアプリケーションでコストを減らす方法はどれですか。（2つ選択）',
    options: [
      '鮮度と権限を考慮したキャッシュを利用する',
      'CloudWatch とトレースで傾向を確認する',
      'すべて最高性能モデルに固定する',
      '失敗時に無制限再試行する',
      'ユーザー影響を計測しない',
      'コストを品質から切り離して判断する'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '性能、品質、コストを相関させて最適化します。'
  },
  {
    id: 'optimization-multi-8',
    category: '運用効率・最適化',
    question: '単純な要求の推論コストを下げる方法はどれですか。（2つ選択）',
    options: [
      '要件に合う小さいモデルへルーティングする',
      'CloudWatch とトレースで傾向を確認する',
      'すべて最高性能モデルに固定する',
      '失敗時に無制限再試行する',
      'ユーザー影響を計測しない',
      'コストを品質から切り離して判断する'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '性能、品質、コストを相関させて最適化します。'
  },
  {
    id: 'optimization-multi-9',
    category: '運用効率・最適化',
    question: '不要なトークンコストを削減する方法はどれですか。（2つ選択）',
    options: [
      'プロンプトと検索コンテキストを必要最小限にする',
      'CloudWatch とトレースで傾向を確認する',
      'すべて最高性能モデルに固定する',
      '失敗時に無制限再試行する',
      'ユーザー影響を計測しない',
      'コストを品質から切り離して判断する'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '性能、品質、コストを相関させて最適化します。'
  },
  {
    id: 'optimization-multi-10',
    category: '運用効率・最適化',
    question: 'モデルの品質・コスト悪化を検出するために確認するものはどれですか。（2つ選択）',
    options: [
      'モデル別のトークン、エラー率、品質指標を監視する',
      'CloudWatch とトレースで傾向を確認する',
      'すべて最高性能モデルに固定する',
      '失敗時に無制限再試行する',
      'ユーザー影響を計測しない',
      'コストを品質から切り離して判断する'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '性能、品質、コストを相関させて最適化します。'
  },
  {
    id: 'optimization-multi-11',
    category: '運用効率・最適化',
    question: '利用者が応答を待つ時間を把握する重要な指標はどれですか。（2つ選択）',
    options: [
      'TTFT と総レイテンシーを計測する',
      'CloudWatch とトレースで傾向を確認する',
      'すべて最高性能モデルに固定する',
      '失敗時に無制限再試行する',
      'ユーザー影響を計測しない',
      'コストを品質から切り離して判断する'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '性能、品質、コストを相関させて最適化します。'
  },
  {
    id: 'optimization-multi-12',
    category: '運用効率・最適化',
    question: '同じ質問が多いアプリケーションでコストを減らす方法はどれですか。（2つ選択）',
    options: [
      '鮮度と権限を考慮したキャッシュを利用する',
      'CloudWatch とトレースで傾向を確認する',
      'すべて最高性能モデルに固定する',
      '失敗時に無制限再試行する',
      'ユーザー影響を計測しない',
      'コストを品質から切り離して判断する'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '性能、品質、コストを相関させて最適化します。'
  },
  {
    id: 'optimization-multi-13',
    category: '運用効率・最適化',
    question: '単純な要求の推論コストを下げる方法はどれですか。（2つ選択）',
    options: [
      '要件に合う小さいモデルへルーティングする',
      'CloudWatch とトレースで傾向を確認する',
      'すべて最高性能モデルに固定する',
      '失敗時に無制限再試行する',
      'ユーザー影響を計測しない',
      'コストを品質から切り離して判断する'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '性能、品質、コストを相関させて最適化します。'
  },
  {
    id: 'optimization-multi-14',
    category: '運用効率・最適化',
    question: '不要なトークンコストを削減する方法はどれですか。（2つ選択）',
    options: [
      'プロンプトと検索コンテキストを必要最小限にする',
      'CloudWatch とトレースで傾向を確認する',
      'すべて最高性能モデルに固定する',
      '失敗時に無制限再試行する',
      'ユーザー影響を計測しない',
      'コストを品質から切り離して判断する'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '性能、品質、コストを相関させて最適化します。'
  },
  {
    id: 'optimization-multi-15',
    category: '運用効率・最適化',
    question: 'モデルの品質・コスト悪化を検出するために確認するものはどれですか。（2つ選択）',
    options: [
      'モデル別のトークン、エラー率、品質指標を監視する',
      'CloudWatch とトレースで傾向を確認する',
      'すべて最高性能モデルに固定する',
      '失敗時に無制限再試行する',
      'ユーザー影響を計測しない',
      'コストを品質から切り離して判断する'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '性能、品質、コストを相関させて最適化します。'
  },
  {
    id: 'validation-1',
    category: 'テスト・検証・トラブルシューティング',
    question: 'プロンプト変更による品質低下を検出する方法はどれですか。',
    options: [
      'バージョン管理された評価データセットで回帰テストする',
      '本番だけで確認する',
      '失敗を再現しない',
      '監視データを破棄する'
    ],
    correct: 0,
    explanation: '変更を評価し、原因を層ごとに切り分けます。'
  },
  {
    id: 'validation-2',
    category: 'テスト・検証・トラブルシューティング',
    question: 'RAG の回答に根拠がない場合、最初に確認する項目はどれですか。',
    options: [
      '検索結果、チャンク、メタデータフィルターを確認する',
      '本番だけで確認する',
      '失敗を再現しない',
      '監視データを破棄する'
    ],
    correct: 0,
    explanation: '変更を評価し、原因を層ごとに切り分けます。'
  },
  {
    id: 'validation-3',
    category: 'テスト・検証・トラブルシューティング',
    question: 'モデル呼び出し失敗を調査する最初の手段はどれですか。',
    options: [
      '相関 ID を使ってログと分散トレースを確認する',
      '本番だけで確認する',
      '失敗を再現しない',
      '監視データを破棄する'
    ],
    correct: 0,
    explanation: '変更を評価し、原因を層ごとに切り分けます。'
  },
  {
    id: 'validation-4',
    category: 'テスト・検証・トラブルシューティング',
    question: '生成品質の自動評価を信頼する前に必要なことはどれですか。',
    options: [
      '人手レビューで評価基準を校正する',
      '本番だけで確認する',
      '失敗を再現しない',
      '監視データを破棄する'
    ],
    correct: 0,
    explanation: '変更を評価し、原因を層ごとに切り分けます。'
  },
  {
    id: 'validation-5',
    category: 'テスト・検証・トラブルシューティング',
    question: '高リスクな生成結果を本番投入する前の対策はどれですか。',
    options: [
      '段階的リリースとロールバックを用意する',
      '本番だけで確認する',
      '失敗を再現しない',
      '監視データを破棄する'
    ],
    correct: 0,
    explanation: '変更を評価し、原因を層ごとに切り分けます。'
  },
  {
    id: 'validation-multi-6',
    category: 'テスト・検証・トラブルシューティング',
    question: 'プロンプト変更による品質低下を検出する方法はどれですか。（2つ選択）',
    options: [
      'バージョン管理された評価データセットで回帰テストする',
      '悪意ある入力とエッジケースを評価に含める',
      '変更後の評価を省略する',
      '障害の再現情報を記録しない',
      '品質だけを見て安全性を無視する',
      'ロールバック手順を持たない'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '再現可能な評価と観測可能性がトラブルシューティングの基礎です。'
  },
  {
    id: 'validation-multi-7',
    category: 'テスト・検証・トラブルシューティング',
    question: 'RAG の回答に根拠がない場合、最初に確認する項目はどれですか。（2つ選択）',
    options: [
      '検索結果、チャンク、メタデータフィルターを確認する',
      '悪意ある入力とエッジケースを評価に含める',
      '変更後の評価を省略する',
      '障害の再現情報を記録しない',
      '品質だけを見て安全性を無視する',
      'ロールバック手順を持たない'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '再現可能な評価と観測可能性がトラブルシューティングの基礎です。'
  },
  {
    id: 'validation-multi-8',
    category: 'テスト・検証・トラブルシューティング',
    question: 'モデル呼び出し失敗を調査する最初の手段はどれですか。（2つ選択）',
    options: [
      '相関 ID を使ってログと分散トレースを確認する',
      '悪意ある入力とエッジケースを評価に含める',
      '変更後の評価を省略する',
      '障害の再現情報を記録しない',
      '品質だけを見て安全性を無視する',
      'ロールバック手順を持たない'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '再現可能な評価と観測可能性がトラブルシューティングの基礎です。'
  },
  {
    id: 'validation-multi-9',
    category: 'テスト・検証・トラブルシューティング',
    question: '生成品質の自動評価を信頼する前に必要なことはどれですか。（2つ選択）',
    options: [
      '人手レビューで評価基準を校正する',
      '悪意ある入力とエッジケースを評価に含める',
      '変更後の評価を省略する',
      '障害の再現情報を記録しない',
      '品質だけを見て安全性を無視する',
      'ロールバック手順を持たない'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '再現可能な評価と観測可能性がトラブルシューティングの基礎です。'
  },
  {
    id: 'validation-multi-10',
    category: 'テスト・検証・トラブルシューティング',
    question: '高リスクな生成結果を本番投入する前の対策はどれですか。（2つ選択）',
    options: [
      '段階的リリースとロールバックを用意する',
      '悪意ある入力とエッジケースを評価に含める',
      '変更後の評価を省略する',
      '障害の再現情報を記録しない',
      '品質だけを見て安全性を無視する',
      'ロールバック手順を持たない'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '再現可能な評価と観測可能性がトラブルシューティングの基礎です。'
  },
  {
    id: 'validation-multi-11',
    category: 'テスト・検証・トラブルシューティング',
    question: 'プロンプト変更による品質低下を検出する方法はどれですか。（2つ選択）',
    options: [
      'バージョン管理された評価データセットで回帰テストする',
      '悪意ある入力とエッジケースを評価に含める',
      '変更後の評価を省略する',
      '障害の再現情報を記録しない',
      '品質だけを見て安全性を無視する',
      'ロールバック手順を持たない'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '再現可能な評価と観測可能性がトラブルシューティングの基礎です。'
  },
  {
    id: 'validation-multi-12',
    category: 'テスト・検証・トラブルシューティング',
    question: 'RAG の回答に根拠がない場合、最初に確認する項目はどれですか。（2つ選択）',
    options: [
      '検索結果、チャンク、メタデータフィルターを確認する',
      '悪意ある入力とエッジケースを評価に含める',
      '変更後の評価を省略する',
      '障害の再現情報を記録しない',
      '品質だけを見て安全性を無視する',
      'ロールバック手順を持たない'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '再現可能な評価と観測可能性がトラブルシューティングの基礎です。'
  },
  {
    id: 'validation-multi-13',
    category: 'テスト・検証・トラブルシューティング',
    question: 'モデル呼び出し失敗を調査する最初の手段はどれですか。（2つ選択）',
    options: [
      '相関 ID を使ってログと分散トレースを確認する',
      '悪意ある入力とエッジケースを評価に含める',
      '変更後の評価を省略する',
      '障害の再現情報を記録しない',
      '品質だけを見て安全性を無視する',
      'ロールバック手順を持たない'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '再現可能な評価と観測可能性がトラブルシューティングの基礎です。'
  },
  {
    id: 'validation-multi-14',
    category: 'テスト・検証・トラブルシューティング',
    question: '生成品質の自動評価を信頼する前に必要なことはどれですか。（2つ選択）',
    options: [
      '人手レビューで評価基準を校正する',
      '悪意ある入力とエッジケースを評価に含める',
      '変更後の評価を省略する',
      '障害の再現情報を記録しない',
      '品質だけを見て安全性を無視する',
      'ロールバック手順を持たない'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '再現可能な評価と観測可能性がトラブルシューティングの基礎です。'
  },
  {
    id: 'validation-multi-15',
    category: 'テスト・検証・トラブルシューティング',
    question: '高リスクな生成結果を本番投入する前の対策はどれですか。（2つ選択）',
    options: [
      '段階的リリースとロールバックを用意する',
      '悪意ある入力とエッジケースを評価に含める',
      '変更後の評価を省略する',
      '障害の再現情報を記録しない',
      '品質だけを見て安全性を無視する',
      'ロールバック手順を持たない'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '再現可能な評価と観測可能性がトラブルシューティングの基礎です。'
  }
]

// カテゴリ別統計
const questionStats = {
  FM統合・データ・コンプライアンス: 15,
  実装・統合: 15,
  AI安全性・セキュリティ・ガバナンス: 15,
  運用効率・最適化: 15,
  テスト・検証・トラブルシューティング: 15
}

// ユーティリティ関数
const getQuestionStats = () => questionStats

const getQuestionsByCategory = (category) => {
  return allQuestions.filter(q => q.category === category)
}

const getRandomQuestions = (count = 10) => {
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

const getRandomQuestionsByCategory = (category, count = 5) => {
  const categoryQuestions = getQuestionsByCategory(category)
  const shuffled = [...categoryQuestions].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

const getAllCategories = () => {
  return Object.keys(questionStats)
}

const getQuestionById = (id) => {
  return allQuestions.find(q => q.id === id)
}

// デバッグ用関数
const validateQuestions = () => {
  const errors = []
  const usedIds = new Set()

  allQuestions.forEach((question, index) => {
    // ID重複チェック
    if (usedIds.has(question.id)) {
      errors.push(`Duplicate ID: ${question.id}`)
    } else {
      usedIds.add(question.id)
    }

    // 必須フィールドチェック
    const requiredFields = ['id', 'category', 'question', 'options', 'correct', 'explanation']
    requiredFields.forEach(field => {
      if (!(field in question)) {
        errors.push(`Question ${index + 1}: Missing field '${field}'`)
      }
    })

    // 選択肢数チェック
    if (!Array.isArray(question.options) || question.options.length !== 4) {
      errors.push(`Question ${index + 1}: Must have exactly 4 options`)
    }

    // 正解インデックスチェック
    if (typeof question.correct !== 'number' || question.correct < 0 || question.correct > 3) {
      errors.push(`Question ${index + 1}: Correct answer index must be 0-3`)
    }
  })

  return errors
}

// グローバルスコープで利用可能にする
if (typeof window !== 'undefined') {
  window.allQuestions = allQuestions
  window.questionStats = questionStats
  window.getQuestionStats = getQuestionStats
  window.getQuestionsByCategory = getQuestionsByCategory
  window.getRandomQuestions = getRandomQuestions
  window.getRandomQuestionsByCategory = getRandomQuestionsByCategory
  window.getAllCategories = getAllCategories
  window.getQuestionById = getQuestionById
  window.validateQuestions = validateQuestions
}
