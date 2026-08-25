const VARIANT_LEADS = [
  '本番導入前の設計レビューで、',
  '要件を満たす最初の改善として、',
  '障害と品質低下を予防するため、',
  '運用チームが再現可能に実装するには、'
]

const rotate = (items, offset) => {
  const shift = offset % items.length
  return [...items.slice(shift), ...items.slice(0, shift)]
}

const buildCategoryQuestions = ({ prefix, category, topics }) => {
  if (topics.length !== 15) {
    throw new Error(`${prefix}: exactly 15 topics are required`)
  }

  return topics.flatMap((topic, topicIndex) => {
    if (topic.scenarios.length !== 4 || topic.distractors.length !== 3 || topic.multiDistractors.length !== 4) {
      throw new Error(`${prefix} topic ${topicIndex + 1}: invalid topic shape`)
    }

    const singleChoice = topic.scenarios.map((scenario, variantIndex) => {
      const answerOffset = (topicIndex + variantIndex) % 4
      const options = rotate([topic.answer, ...topic.distractors], answerOffset)
      return {
        id: `${prefix}-${topicIndex * 5 + variantIndex + 1}`,
        category,
        question: `${scenario}${VARIANT_LEADS[variantIndex]}最も適切な対応はどれですか。`,
        options,
        correct: options.indexOf(topic.answer),
        explanation: topic.explanation
      }
    })

    const multipleOptions = rotate(
      [topic.answer, topic.partner, ...topic.multiDistractors],
      topicIndex % 6
    )
    const multipleChoice = {
      id: `${prefix}-multi-${topicIndex * 5 + 5}`,
      category,
      question: `${topic.multiScenario}選択すべき対応はどれですか。（2つ選択）`,
      options: multipleOptions,
      correct: [
        multipleOptions.indexOf(topic.answer),
        multipleOptions.indexOf(topic.partner)
      ].sort((a, b) => a - b),
      multipleChoice: true,
      explanation: `${topic.explanation} また、${topic.partnerReason}`
    }

    return [...singleChoice, multipleChoice]
  })
}

module.exports = buildCategoryQuestions
