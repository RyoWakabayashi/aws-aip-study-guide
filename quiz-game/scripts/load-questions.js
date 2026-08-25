#!/usr/bin/env node

/**
 * 問題データローダー
 * カテゴリ別の問題ファイルを統合してquestions.jsを生成
 */

const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

console.log(chalk.blue('📚 Loading and combining question files...'))

const questionsDir = path.join(__dirname, '..', 'questions')
const outputFile = path.join(__dirname, '..', 'questions.js')

// カテゴリファイルのマッピング
const categoryFiles = {
  'fm-integration': 'FM統合・データ・コンプライアンス',
  implementation: '実装・統合',
  safety: 'AI安全性・セキュリティ・ガバナンス',
  optimization: '運用効率・最適化',
  validation: 'テスト・検証・トラブルシューティング'
}

let allQuestions = []
const categoryStats = {}

// 各カテゴリファイルを読み込み
Object.keys(categoryFiles).forEach((categoryKey) => {
  const filePath = path.join(questionsDir, `${categoryKey}.js`)

  if (fs.existsSync(filePath)) {
    try {
      delete require.cache[require.resolve(filePath)]
      const questions = require(filePath)

      if (Array.isArray(questions)) {
        allQuestions = allQuestions.concat(questions)
        categoryStats[categoryFiles[categoryKey]] = questions.length
        console.log(
          chalk.green(`✅ ${categoryKey}.js: ${questions.length} questions`)
        )
      } else {
        console.log(
          chalk.yellow(`⚠️  ${categoryKey}.js: No valid questions array found`)
        )
      }
    } catch (error) {
      console.log(
        chalk.red(`❌ Error loading ${categoryKey}.js: ${error.message}`)
      )
    }
  } else {
    console.log(chalk.yellow(`⚠️  ${categoryKey}.js: File not found`))
  }
})

// 統合されたquestions.jsファイルを生成
const outputContent = `// AWS Certified Generative AI Developer - Professional (AIP-C01) クイズ問題データ
// 自動生成ファイル - 手動編集しないでください
// 生成日時: ${new Date().toISOString()}

// 全問題データ
const allQuestions = ${JSON.stringify(allQuestions, null, 2).replace(
  /'/g,
  '"'
)};

// カテゴリ別統計
const questionStats = ${JSON.stringify(categoryStats, null, 2).replace(
  /'/g,
  '"'
)};

// ユーティリティ関数
const getQuestionStats = () => questionStats;

const getQuestionsByCategory = (category) => {
    return allQuestions.filter(q => q.category === category);
};

const getRandomQuestions = (count = 10) => {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

const getRandomQuestionsByCategory = (category, count = 5) => {
    const categoryQuestions = getQuestionsByCategory(category);
    const shuffled = [...categoryQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

const getAllCategories = () => {
    return Object.keys(questionStats);
};

const getQuestionById = (id) => {
    return allQuestions.find(q => q.id === id);
};

// デバッグ用関数
const validateQuestions = () => {
    const errors = [];
    const usedIds = new Set();
    
    allQuestions.forEach((question, index) => {
        // ID重複チェック
        if (usedIds.has(question.id)) {
            errors.push(\`Duplicate ID: \${question.id}\`);
        } else {
            usedIds.add(question.id);
        }
        
        // 必須フィールドチェック
        const requiredFields = ['id', 'category', 'question', 'options', 'correct', 'explanation'];
        requiredFields.forEach(field => {
            if (!(field in question)) {
                errors.push(\`Question \${index + 1}: Missing field '\${field}'\`);
            }
        });
        
        // 選択肢数と正解インデックスチェック
        const expectedOptionCount = question.multipleChoice ? 6 : 4;
        if (!Array.isArray(question.options) || question.options.length !== expectedOptionCount) {
            errors.push(\`Question \${index + 1}: Must have exactly \${expectedOptionCount} options\`);
        }

        if (question.multipleChoice) {
            const validAnswers = Array.isArray(question.correct) &&
                question.correct.length >= 2 &&
                question.correct.length <= 3 &&
                new Set(question.correct).size === question.correct.length &&
                question.correct.every(answer => Number.isInteger(answer) && answer >= 0 && answer < 6);
            if (!validAnswers) {
                errors.push(\`Question \${index + 1}: Multiple choice answers must contain 2-3 unique indices from 0-5\`);
            }
        } else if (!Number.isInteger(question.correct) || question.correct < 0 || question.correct > 3) {
            errors.push(\`Question \${index + 1}: Correct answer index must be 0-3\`);
        }
    });
    
    return errors;
};

// グローバルスコープで利用可能にする
if (typeof window !== 'undefined') {
    window.allQuestions = allQuestions;
    window.questionStats = questionStats;
    window.getQuestionStats = getQuestionStats;
    window.getQuestionsByCategory = getQuestionsByCategory;
    window.getRandomQuestions = getRandomQuestions;
    window.getRandomQuestionsByCategory = getRandomQuestionsByCategory;
    window.getAllCategories = getAllCategories;
    window.getQuestionById = getQuestionById;
    window.validateQuestions = validateQuestions;
}
`

// ファイルに書き込み
fs.writeFileSync(outputFile, outputContent)

// 結果表示
console.log('\n' + chalk.blue('📊 Question Loading Summary:'))
console.log(chalk.gray('─'.repeat(50)))
console.log(chalk.green(`✅ Total questions loaded: ${allQuestions.length}`))
console.log(chalk.green(`✅ Categories: ${Object.keys(categoryStats).length}`))

console.log('\n' + chalk.blue('📈 Questions by Category:'))
Object.entries(categoryStats)
  .sort(([, a], [, b]) => b - a)
  .forEach(([category, count]) => {
    const percentage = ((count / allQuestions.length) * 100).toFixed(1)
    console.log(chalk.gray(`  ${category}: ${count} (${percentage}%)`))
  })

console.log(
  '\n' + chalk.green('✅ Combined questions.js generated successfully!')
)
console.log(chalk.gray(`📁 Output: ${outputFile}`))

// 基本的な検証
const errors = []
const usedIds = new Set()

allQuestions.forEach((question, index) => {
  if (usedIds.has(question.id)) {
    errors.push(`Duplicate ID: ${question.id}`)
  } else {
    usedIds.add(question.id)
  }
})

if (errors.length > 0) {
  console.log('\n' + chalk.red('❌ Validation Errors:'))
  errors.forEach((error) => console.log(chalk.red(`  ${error}`)))
  process.exit(1)
} else {
  console.log('\n' + chalk.green('✅ All questions validated successfully!'))
}
