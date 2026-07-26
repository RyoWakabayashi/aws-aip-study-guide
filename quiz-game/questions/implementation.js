const implementationQuestions = Array.from({ length: 15 }, (_, index) => {
  const multipleChoice = index >= 5
  const prompts = [
    ['FM の応答を利用者に逐次表示する API 方式はどれですか。', 'ストリーミング応答を使用する'],
    ['API スロットリングに対する適切な対策はどれですか。', '指数バックオフとジッターを伴う再試行を実装する'],
    ['エージェントが外部ツールを呼び出す際の基本対策はどれですか。', '入力を検証し最小権限でツールを実行する'],
    ['長時間の文書処理を実装する方式として適切なのはどれですか。', 'キューと非同期ワークフローを使用する'],
    ['モデル障害時にサービス継続性を高める設計はどれですか。', 'モデルまたはリージョンのフォールバックを用意する']
  ]
  const [question, answer] = prompts[index % prompts.length]
  return multipleChoice
    ? { id: `implementation-multi-${index + 1}`, category: '実装・統合', question: `${question}（2つ選択）`, options: [answer, 'タイムアウトと停止条件を設定する', 'モデル出力を無検証で業務 API に渡す', 'クライアントに永続認証情報を渡す', '無制限に再試行する', '監査ログを無効化する'], correct: [0, 1], multipleChoice: true, explanation: '統合では信頼性、入力検証、最小権限、制御された再試行を実装します。' }
    : { id: `implementation-${index + 1}`, category: '実装・統合', question, options: [answer, '同期ポーリングだけを使う', '認可を FM に任せる', 'エラーを隠す'], correct: 0, explanation: 'ワークロード特性と安全な統合パターンで選択します。' }
})

export default implementationQuestions
