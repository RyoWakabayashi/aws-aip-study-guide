const safetyQuestions = Array.from({ length: 15 }, (_, index) => {
  const multipleChoice = index >= 5
  const prompts = [
    ['有害な生成結果を抑制するために利用する機能はどれですか。', 'Amazon Bedrock Guardrails を設定する'],
    ['プロンプトインジェクションへの基本的な対策はどれですか。', '外部コンテンツを命令として扱わずツール入力を検証する'],
    ['モデル API への AWS 権限を制御する仕組みはどれですか。', 'IAM の最小権限ポリシーを適用する'],
    ['ログ内の個人情報を守る対策はどれですか。', 'マスキングと保存期間・アクセス権を管理する'],
    ['責任ある AI の評価に含めるべき観点はどれですか。', 'バイアス、有害性、透明性を評価する']
  ]
  const [question, answer] = prompts[index % prompts.length]
  return multipleChoice
    ? { id: `safety-multi-${index + 1}`, category: 'AI安全性・セキュリティ・ガバナンス', question: `${question}（2つ選択）`, options: [answer, '変更履歴と監査証跡を保存する', '出力を常に信頼する', '全ユーザーに管理者権限を与える', '機密情報を平文ログへ保存する', 'ガードレールを認可の代替にする'], correct: [0, 1], multipleChoice: true, explanation: '安全性、認可、データ保護、監査を多層で実装します。' }
    : { id: `safety-${index + 1}`, category: 'AI安全性・セキュリティ・ガバナンス', question, options: [answer, 'プロンプトを長くするだけ', 'アクセス制御を省略する', 'すべての記録を公開する'], correct: 0, explanation: '生成 AI 固有の安全性と通常の AWS セキュリティの両方が必要です。' }
})

export default safetyQuestions
