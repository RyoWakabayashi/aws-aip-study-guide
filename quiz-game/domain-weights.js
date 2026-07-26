// AIP-C01 の公式ドメイン比率。クイズのカテゴリは公式採点区分に対応させている。
const DOMAIN_INFO = {
  1: { name: 'Domain 1: 基盤モデルの統合、データ管理、コンプライアンス', shortName: 'Domain 1（FM・データ）', weight: 0.31 },
  2: { name: 'Domain 2: 実装と統合', shortName: 'Domain 2（実装・統合）', weight: 0.26 },
  3: { name: 'Domain 3: AI の安全性、セキュリティ、ガバナンス', shortName: 'Domain 3（安全性・統制）', weight: 0.20 },
  4: { name: 'Domain 4: GenAI アプリケーションの運用効率と最適化', shortName: 'Domain 4（運用・最適化）', weight: 0.12 },
  5: { name: 'Domain 5: テスト、検証、トラブルシューティング', shortName: 'Domain 5（テスト・検証）', weight: 0.11 }
}

const CATEGORY_DOMAIN_WEIGHTS = {
  FM統合・データ・コンプライアンス: { 1: 1, 2: 0, 3: 0, 4: 0, 5: 0 },
  実装・統合: { 1: 0, 2: 1, 3: 0, 4: 0, 5: 0 },
  AI安全性・セキュリティ・ガバナンス: { 1: 0, 2: 0, 3: 1, 4: 0, 5: 0 },
  運用効率・最適化: { 1: 0, 2: 0, 3: 0, 4: 1, 5: 0 },
  テスト・検証・トラブルシューティング: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 1 }
}

const DOMAIN_RECOMMENDED_DOCS = {
  1: [{ file: '../01-compute.md', title: '01. 基盤モデルと Amazon Bedrock' }, { file: '../02-storage.md', title: '02. データ管理・RAG' }, { file: '../03-database.md', title: '03. ベクトルストアと検索' }],
  2: [{ file: '../04-networking.md', title: '04. API・エージェント・統合' }, { file: '../07-architecture.md', title: '07. GenAI アーキテクチャパターン' }],
  3: [{ file: '../05-security.md', title: '05. AI 安全性・セキュリティ・ガバナンス' }],
  4: [{ file: '../06-monitoring.md', title: '06. オブザーバビリティと運用' }, { file: '../08-cost-optimization.md', title: '08. パフォーマンスとコスト最適化' }],
  5: [{ file: '../09-disaster-recovery.md', title: '09. テスト・評価・障害対応' }, { file: '../10-migration.md', title: '10. デプロイと継続的改善' }]
}

if (typeof window !== 'undefined') {
  window.DOMAIN_INFO = DOMAIN_INFO
  window.CATEGORY_DOMAIN_WEIGHTS = CATEGORY_DOMAIN_WEIGHTS
  window.DOMAIN_RECOMMENDED_DOCS = DOMAIN_RECOMMENDED_DOCS
}

if (typeof module !== 'undefined' && module.exports) module.exports = { DOMAIN_INFO, CATEGORY_DOMAIN_WEIGHTS, DOMAIN_RECOMMENDED_DOCS }
