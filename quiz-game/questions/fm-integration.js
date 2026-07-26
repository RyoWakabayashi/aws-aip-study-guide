const fmIntegrationQuestions = Array.from({ length: 15 }, (_, index) => {
  const multipleChoice = index >= 5
  const prompts = [
    ['最新の社内規程を根拠に回答するアシスタントに最も適した方式はどれですか。', 'RAG を実装し、検索結果を根拠として FM に渡す'],
    ['テナント間で検索対象を分離するために必要な対策はどれですか。', 'テナント ID のメタデータフィルターとデータ層の認可を適用する'],
    ['文書の見出し構造を保って検索品質を高めたい。最初に検討することはどれですか。', '文書構造に基づくチャンク化を評価する'],
    ['埋め込みモデルを変更する際の重要な作業はどれですか。', '再埋め込みとインデックス切替を計画する'],
    ['検索精度とキーワード一致を両立させたい。適した検索はどれですか。', 'ベクトル検索とキーワード検索のハイブリッド検索']
  ]
  const [question, answer] = prompts[index % prompts.length]
  return multipleChoice
    ? { id: `fm-integration-multi-${index + 1}`, category: 'FM統合・データ・コンプライアンス', question: `${question}（2つ選択）`, options: [answer, 'データ品質と形式を検証する', 'すべてのアクセス制御をプロンプトに任せる', '無関係な全文書を常に送る', 'ログへ機密データをそのまま記録する', 'モデルの出力だけで認可する'], correct: [0, 1], multipleChoice: true, explanation: 'RAG はデータ品質・アクセス制御・検索品質を組み合わせて設計します。' }
    : { id: `fm-integration-${index + 1}`, category: 'FM統合・データ・コンプライアンス', question, options: [answer, 'モデルの温度を最大にする', 'プロンプトだけでデータアクセスを制御する', '検索を無効にする'], correct: 0, explanation: '要件に合うデータ処理と検索設計を選びます。' }
})

export default fmIntegrationQuestions
