const optimizationQuestions = Array.from({ length: 15 }, (_, index) => {
  const multipleChoice = index >= 5
  const prompts = [
    ['利用者が応答を待つ時間を把握する重要な指標はどれですか。', 'TTFT と総レイテンシーを計測する'],
    ['同じ質問が多いアプリケーションでコストを減らす方法はどれですか。', '鮮度と権限を考慮したキャッシュを利用する'],
    ['単純な要求の推論コストを下げる方法はどれですか。', '要件に合う小さいモデルへルーティングする'],
    ['不要なトークンコストを削減する方法はどれですか。', 'プロンプトと検索コンテキストを必要最小限にする'],
    ['モデルの品質・コスト悪化を検出するために確認するものはどれですか。', 'モデル別のトークン、エラー率、品質指標を監視する']
  ]
  const [question, answer] = prompts[index % prompts.length]
  return multipleChoice
    ? { id: `optimization-multi-${index + 1}`, category: '運用効率・最適化', question: `${question}（2つ選択）`, options: [answer, 'CloudWatch とトレースで傾向を確認する', 'すべて最高性能モデルに固定する', '失敗時に無制限再試行する', 'ユーザー影響を計測しない', 'コストを品質から切り離して判断する'], correct: [0, 1], multipleChoice: true, explanation: '性能、品質、コストを相関させて最適化します。' }
    : { id: `optimization-${index + 1}`, category: '運用効率・最適化', question, options: [answer, '入力を無制限に増やす', '監視を無効化する', '常に同じモデルだけを使う'], correct: 0, explanation: '最小総コストと SLO の両方で判断します。' }
})

export default optimizationQuestions
