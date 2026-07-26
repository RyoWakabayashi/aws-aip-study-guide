const validationQuestions = Array.from({ length: 15 }, (_, index) => {
  const multipleChoice = index >= 5
  const prompts = [
    ['プロンプト変更による品質低下を検出する方法はどれですか。', 'バージョン管理された評価データセットで回帰テストする'],
    ['RAG の回答に根拠がない場合、最初に確認する項目はどれですか。', '検索結果、チャンク、メタデータフィルターを確認する'],
    ['モデル呼び出し失敗を調査する最初の手段はどれですか。', '相関 ID を使ってログと分散トレースを確認する'],
    ['生成品質の自動評価を信頼する前に必要なことはどれですか。', '人手レビューで評価基準を校正する'],
    ['高リスクな生成結果を本番投入する前の対策はどれですか。', '段階的リリースとロールバックを用意する']
  ]
  const [question, answer] = prompts[index % prompts.length]
  return multipleChoice
    ? { id: `validation-multi-${index + 1}`, category: 'テスト・検証・トラブルシューティング', question: `${question}（2つ選択）`, options: [answer, '悪意ある入力とエッジケースを評価に含める', '変更後の評価を省略する', '障害の再現情報を記録しない', '品質だけを見て安全性を無視する', 'ロールバック手順を持たない'], correct: [0, 1], multipleChoice: true, explanation: '再現可能な評価と観測可能性がトラブルシューティングの基礎です。' }
    : { id: `validation-${index + 1}`, category: 'テスト・検証・トラブルシューティング', question, options: [answer, '本番だけで確認する', '失敗を再現しない', '監視データを破棄する'], correct: 0, explanation: '変更を評価し、原因を層ごとに切り分けます。' }
})

export default validationQuestions
