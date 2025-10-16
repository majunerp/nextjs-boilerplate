# 产品需求文档（PRD）
# Tip Calculator 工具站点

**文档版本**: v2.0 (简化版)
**创建日期**: 2025-10-16
**更新日期**: 2025-10-16
**产品名称**: Tip Calculator
**域名**: tipcalculator.page
**负责人**: [待填写]

**说明**: 本文档为简化版PRD，去除了难以用Next.js实现或过于复杂的功能（如PWA、复杂测试框架等），专注于核心功能和SEO优化。

---

## 1. 产品概述

### 1.1 产品定位
Tip Calculator 是一款面向全球用户的在线小费计算工具，提供快速、准确、易用的小费计算和账单分摊功能。产品采用移动优先策略，使用Next.js实现服务端渲染，提供快速流畅的使用体验。

### 1.2 市场背景
- **市场规模**: "tip calculator"关键词月搜索量达368K，相关关键词4,308个，总搜索量483K
- **竞争态势**: 主要竞争对手为Calculator.net、Google Play应用、Omni Calculator
- **机会点**: 现有竞品UI复杂、移动体验差、缺乏场景化功能

### 1.3 差异化优势
1. **极简体验** - 一屏完成所有操作，无需滚动
2. **多场景覆盖** - 支持餐厅、外卖、服务等多种场景
3. **移动优先** - 响应式设计，适配所有设备
4. **SEO友好** - Next.js SSR，利于搜索引擎收录

---

## 2. 目标用户

### 2.1 用户画像

**主要用户群体**:
- **餐厅就餐者**: 需要快速计算小费和总账单
- **团体聚餐组织者**: 需要分摊账单
- **服务业消费者**: 出租车、美容、外卖等场景
- **国际旅行者**: 不熟悉当地小费文化

**用户特征**:
- 年龄: 18-55岁
- 设备: 60%移动端，40%桌面端
- 使用场景: 即时计算，低频高需求

### 2.2 用户需求
- **核心需求**: 快速计算小费和总金额
- **次要需求**: 账单分摊、历史记录、多场景支持
- **潜在需求**: 小费文化指南、计算教程

---

## 3. 产品目标

### 3.1 业务目标
- **3个月目标**:
  - 获得3-5个关键词进入Google前3页
  - 月访问量达到5,000+ UV
  - Core Web Vitals全部指标达到"Good"

- **6个月目标**:
  - 2-3个关键词进入Google首页
  - 月访问量达到20,000+ UV
  - 用户回访率>30%

### 3.2 用户目标
- 3秒内完成一次小费计算
- 零学习成本，直观易用
- 跨设备无缝体验

---

## 4. 功能需求

### 4.1 Phase 1: MVP功能（P0优先级）

#### 4.1.1 基础计算器
**需求描述**: 提供核心的小费计算功能

**功能点**:
- [ ] 账单金额输入框
  - 支持数字键盘输入
  - 支持小数点（两位）
  - 最大金额限制：999,999.99
  - 实时验证输入合法性

- [ ] 小费百分比选择器
  - 预设选项：10%, 15%, 18%, 20%, 25%
  - 自定义百分比输入（0-100%）
  - 快捷按钮高亮显示当前选中值

- [ ] 实时计算显示
  - 小费金额（Tip Amount）
  - 总金额（Total Amount）
  - 自动格式化为货币格式

**验收标准**:
- 输入金额后立即显示计算结果（<100ms延迟）
- 所有计算精度保持到小数点后2位
- 支持$0.01 - $999,999.99范围内的任意金额

#### 4.1.2 账单分摊功能
**需求描述**: 支持多人平均分摊账单

**功能点**:
- [ ] 人数选择器
  - 范围：1-99人
  - 支持+/-按钮快速调整
  - 支持直接输入数字

- [ ] 分摊结果显示
  - 每人应付总额
  - 每人小费金额
  - 每人基础账单金额

**验收标准**:
- 分摊计算精确到分
- 处理除不尽的情况（四舍五入）
- 总计金额与原账单保持一致

#### 4.1.3 货币符号支持
**需求描述**: 支持常见货币符号显示

**功能点**:
- [ ] 货币选择器
  - 默认：USD ($)
  - 支持：EUR (€), GBP (£), CAD (C$), AUD (A$), JPY (¥)
  - 仅切换显示符号，不涉及汇率转换

**验收标准**:
- 切换货币后立即更新符号显示
- 所有货币保持两位小数（除JPY为整数）

#### 4.1.4 响应式设计
**需求描述**: 适配所有设备尺寸

**功能点**:
- [ ] 移动端优化（320px - 768px）
  - 纵向布局
  - 大号触控按钮（最小44x44px）
  - 数字键盘友好

- [ ] 平板/桌面端（>768px）
  - 居中布局，最大宽度600px
  - 横向排列优化

**验收标准**:
- 通过Chrome DevTools所有设备测试
- 无横向滚动条
- 触控目标符合WCAG 2.1标准

---

### 4.2 Phase 2: 增强功能（P1优先级）

#### 4.2.1 场景快速切换
**需求描述**: 为不同场景提供推荐小费比例

**功能点**:
- [ ] 场景选择器（下拉菜单或标签切换）
  - 餐厅服务（推荐15-20%）
  - 外卖配送（推荐10-15%）
  - 出租车（推荐10-15%）
  - 美容美发（推荐15-20%）

- [ ] 场景特性
  - 切换场景时自动选中推荐比例
  - 用户仍可手动调整比例
  - 使用LocalStorage记住最后选择的场景

**验收标准**:
- 场景切换流畅，无延迟
- 推荐比例符合行业标准
- 刷新页面后保持上次选择

#### 4.2.2 简单计算历史
**需求描述**: 本地保存最近的计算记录

**功能点**:
- [ ] 历史记录功能
  - 自动保存每次计算结果
  - 显示最近20条记录
  - 显示内容：日期、账单金额、小费、总额

- [ ] 历史记录操作
  - 点击历史记录快速恢复计算
  - 单条删除
  - 一键清空所有历史

**验收标准**:
- 数据存储在LocalStorage
- 超过20条自动删除最旧记录
- 浏览器隐私模式下不报错

---

### 4.3 Phase 3: SEO增强功能（P2优先级）

#### 4.3.1 内容页面
**需求描述**: 创建SEO友好的内容页面

**页面列表**:
- [ ] /guide/how-to-calculate-tip
  - 标题：How to Calculate Tip: Complete Guide
  - 目标词：how to calculate tip (1,900搜索量)
  - 内容：计算方法、公式、示例

- [ ] /guide/tipping-guide-usa
  - 标题：Tipping Guide USA: When and How Much to Tip
  - 目标词：tipping etiquette, tipping guide
  - 内容：各场景小费标准

- [ ] /guide/tipping-guide-europe
  - 标题：Tipping in Europe: Country-by-Country Guide
  - 目标词：tipping in europe
  - 内容：欧洲各国小费文化

- [ ] /faq
  - 标题：Tip Calculator FAQ
  - 内容：常见问题解答（结构化数据）

**验收标准**:
- 每页字数>800词
- 包含Schema.org标记
- 内部链接网络完整

#### 4.3.2 专题计算器
**需求描述**: 针对长尾关键词创建专题页

**页面列表**:
- [ ] /restaurant - Restaurant Tip Calculator
- [ ] /delivery - Delivery Tip Calculator
- [ ] /percentage - Tip Percentage Calculator
- [ ] /group - Group Tip Calculator & Bill Splitter

**验收标准**:
- 每个页面有独特的H1标题
- Meta描述针对关键词优化
- Canonical标签正确设置

---

## 5. 非功能需求

### 5.1 性能要求
- **页面加载**:
  - LCP (Largest Contentful Paint) < 2.5s
  - FID (First Input Delay) < 100ms
  - CLS (Cumulative Layout Shift) < 0.1

- **运行性能**:
  - 计算响应时间 < 100ms
  - 动画帧率 ≥ 60fps
  - 页面大小 < 500KB（首次加载）

### 5.2 兼容性要求
- **浏览器支持**:
  - Chrome (last 2 versions)
  - Safari (last 2 versions)
  - Firefox (last 2 versions)
  - Edge (last 2 versions)

- **设备支持**:
  - iOS 13+
  - Android 8+
  - 桌面端主流分辨率

### 5.3 可访问性要求
- 符合WCAG 2.1 Level AA标准
- 支持键盘导航
- 支持屏幕阅读器
- 色彩对比度 ≥ 4.5:1

### 5.4 安全要求
- HTTPS强制
- CSP (Content Security Policy)
- 无第三方追踪脚本
- 数据仅本地存储

### 5.5 SEO要求
- Server-side rendering (SSR)
- 语义化HTML
- Schema.org结构化数据
- Open Graph标签
- Sitemap.xml自动生成
- Robots.txt配置

---

## 6. 用户故事

### US-001: 快速计算小费
**作为** 餐厅就餐者
**我想要** 快速计算应付小费
**以便** 我能迅速结账离开

**验收标准**:
- 3步内完成计算（输入金额→选择比例→查看结果）
- 无需滚动页面
- 结果清晰可见

### US-002: 团体分账
**作为** 聚餐组织者
**我想要** 平均分摊账单给所有人
**以便** 每个人知道自己应付多少

**验收标准**:
- 可调整人数
- 显示每人金额
- 计算精确无误

### US-003: 查看历史
**作为** 频繁使用者
**我想要** 查看之前的计算记录
**以便** 我能追踪消费或快速恢复之前的计算

**验收标准**:
- 历史列表清晰易读
- 可快速恢复之前的计算
- 可删除不需要的记录

---

## 7. 技术方案

### 7.1 技术栈

```
前端框架: Next.js 15 + React 19 + TypeScript
样式方案: Tailwind CSS v4
状态管理: React useState + useContext (原生Hooks)
SEO工具: Next.js内置Metadata API + next-sitemap
部署平台: Vercel
数据存储: LocalStorage (计算历史)
```

### 7.2 项目结构

```
app/
├── layout.tsx                 # Root layout
├── page.tsx                   # 主页（主计算器）
├── restaurant/page.tsx        # 餐厅计算器
├── delivery/page.tsx          # 外卖计算器
├── percentage/page.tsx        # 百分比计算器
├── guide/
│   ├── how-to-calculate-tip/page.tsx
│   └── tipping-guide-usa/page.tsx
└── faq/page.tsx

components/
├── calculator/
│   ├── TipCalculator.tsx      # 主计算器组件
│   ├── AmountInput.tsx        # 金额输入
│   ├── TipSelector.tsx        # 小费选择器
│   ├── ResultDisplay.tsx      # 结果显示
│   ├── SplitBill.tsx          # 分账组件
│   └── SceneSelector.tsx      # 场景选择器
├── history/
│   └── HistoryList.tsx        # 历史记录组件
├── ui/
│   ├── Button.tsx
│   └── Input.tsx
└── layout/
    ├── Header.tsx
    └── Footer.tsx

lib/
├── calculations.ts            # 计算逻辑
├── storage.ts                 # LocalStorage封装
└── currency.ts                # 货币格式化

types/
└── index.ts                   # TypeScript类型定义
```

### 7.3 核心计算逻辑

```typescript
// lib/calculations.ts

export interface TipCalculation {
  billAmount: number;
  tipPercentage: number;
  tipAmount: number;
  totalAmount: number;
  numberOfPeople?: number;
  perPersonTotal?: number;
  perPersonTip?: number;
}

export function calculateTip(
  billAmount: number,
  tipPercentage: number,
  numberOfPeople: number = 1
): TipCalculation {
  const tipAmount = (billAmount * tipPercentage) / 100;
  const totalAmount = billAmount + tipAmount;
  const perPersonTotal = totalAmount / numberOfPeople;
  const perPersonTip = tipAmount / numberOfPeople;

  return {
    billAmount: round(billAmount),
    tipPercentage,
    tipAmount: round(tipAmount),
    totalAmount: round(totalAmount),
    numberOfPeople,
    perPersonTotal: round(perPersonTotal),
    perPersonTip: round(perPersonTip),
  };
}

function round(value: number): number {
  return Math.round(value * 100) / 100;
}
```

### 7.4 SEO实现

#### Next.js Metadata API示例
```typescript
// app/page.tsx

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tip Calculator - Fast & Easy Tip Calculator',
  description: 'Free tip calculator. Calculate tips, split bills, and determine gratuity for any service. Simple, fast, accurate.',
  keywords: ['tip calculator', 'calculate tip', 'bill splitter', 'gratuity calculator'],
  openGraph: {
    title: 'Tip Calculator - Fast & Easy Tip Calculator',
    description: 'Free tip calculator. Calculate tips, split bills, and determine gratuity for any service.',
    type: 'website',
    url: 'https://tipcalculator.page',
  },
}
```

#### Schema.org标记示例
```typescript
// components/SchemaMarkup.tsx

export function CalculatorSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Tip Calculator",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

---

## 8. 页面结构与SEO优化

### 8.1 主页 (/)

**URL**: https://tipcalculator.page/

**Title**: Tip Calculator - Fast & Easy Tip Calculator (52字符)

**Meta Description**:
```
Free tip calculator. Calculate tips, split bills, and determine
gratuity for any service. Simple, fast, accurate. (138字符)
```

**H1**: Tip Calculator

**页面结构**:
```
1. Hero Section
   - H1: Tip Calculator
   - 简短说明文案

2. Calculator Widget
   - 金额输入
   - 小费选择
   - 结果显示
   - 分账功能

3. How It Works
   - H2: How to Use This Calculator
   - 3步说明

4. Common Tipping Percentages
   - H2: Common Tipping Percentages
   - 场景列表

5. Features
   - H2: Why Use Our Tip Calculator
   - 特性列表

6. Internal Links
   - 链接到场景页面
   - 链接到指南页面
```

**Schema Markup**: SoftwareApplication

**Target Keywords**:
- tip calculator (主词)
- calculate tip
- tip calc

---

### 8.2 餐厅计算器 (/restaurant)

**Title**: Restaurant Tip Calculator | Calculate Tips for Dining (60字符)

**Meta Description**:
```
Calculate restaurant tips instantly. Supports tax, service charges,
and bill splitting for dining. Free and easy to use. (135字符)
```

**Target Keywords**:
- restaurant tip calculator
- dining tip calculator

---

### 8.3 指南页面 (/guide/how-to-calculate-tip)

**Title**: How to Calculate Tip: Complete Guide with Examples (58字符)

**Meta Description**:
```
Learn how to calculate tips with our complete guide. Includes
formulas, examples, and tipping etiquette for all situations. (140字符)
```

**Content Outline**:
```
H1: How to Calculate Tip

H2: Basic Tip Calculation Formula
- 公式说明
- 代码示例

H2: Quick Mental Math Methods
- 20% tip trick
- 15% tip trick
- 10% tip trick

H2: Step-by-Step Examples
- Example 1: $50 bill
- Example 2: $127.36 bill

H2: Tipping Scenarios
- Restaurant
- Delivery
- Taxi
- Salon

H2: Common Mistakes to Avoid
- 列表说明

H2: Use Our Calculator
- CTA到主页

FAQ Section (Schema: FAQPage)
```

**Schema Markup**: Article, HowTo, FAQPage

**Target Keywords**:
- how to calculate tip (1,900搜索量)
- tip calculation formula
- how to figure out tip

---

## 9. 开发里程碑

### 9.1 Sprint 1 (Week 1): MVP核心功能

**目标**: 完成可用的基础计算器

**任务清单**:
- [ ] 项目初始化
  - 配置Tailwind CSS
  - 配置TypeScript
  - 创建基础项目结构

- [ ] 核心组件开发
  - AmountInput组件
  - TipSelector组件
  - ResultDisplay组件
  - SplitBill组件

- [ ] 计算逻辑实现
  - 小费计算函数（lib/calculations.ts）
  - 分账计算函数
  - 货币格式化函数

- [ ] 主页UI实现
  - 响应式布局
  - 移动端优化

- [ ] 基础SEO设置
  - Metadata配置
  - 基础Schema标记

**交付物**:
- 可运行的MVP版本
- 部署到Vercel

---

### 9.2 Sprint 2 (Week 2): 增强功能与内容页面

**目标**: 添加场景切换、历史记录和SEO内容页

**任务清单**:
- [ ] 场景切换功能
  - 场景选择器组件
  - 场景配置数据
  - LocalStorage持久化

- [ ] 计算历史功能
  - LocalStorage封装（lib/storage.ts）
  - 历史列表组件
  - 删除和清空功能

- [ ] 场景专题页面
  - /restaurant页面
  - /delivery页面
  - /percentage页面

- [ ] 指南内容页面（至少1-2页）
  - /guide/how-to-calculate-tip
  - /faq页面

**交付物**:
- 完整功能版本
- 基础内容页面上线

---

### 9.3 Sprint 3 (Week 3): SEO优化与上线

**目标**: 完善SEO和正式发布

**任务清单**:
- [ ] 完善所有内容页面
  - 补充剩余指南页面
  - 优化文案内容
  - 添加内部链接

- [ ] SEO优化
  - 完善所有页面Meta标签
  - 添加Schema标记
  - 配置next-sitemap
  - 生成sitemap.xml
  - 配置robots.txt

- [ ] 性能优化
  - 图片优化
  - Core Web Vitals优化
  - Lighthouse测试（目标>90分）

- [ ] 上线准备
  - 域名DNS配置到Vercel
  - SSL证书自动配置
  - Google Search Console提交
  - Google Analytics（可选）

- [ ] 最终测试
  - 跨浏览器测试
  - 移动设备测试
  - 功能回归测试

**交付物**:
- 生产环境就绪
- 正式发布到tipcalculator.page

---

## 10. 测试计划

### 10.1 功能测试
**测试内容**:
- 基础计算逻辑准确性
- 分账功能准确性
- 场景切换正常工作
- 历史记录保存和恢复
- 货币符号正确显示

**测试方法**: 手动测试 + 浏览器DevTools

### 10.2 响应式测试
**测试内容**:
- 移动端显示正常（iPhone、Android）
- 平板端显示正常（iPad）
- 桌面端显示正常（1920px、1366px）

**测试方法**: Chrome DevTools设备模拟 + 真实设备

### 10.3 兼容性测试
**测试内容**:
- Chrome、Safari、Firefox、Edge最新版本
- iOS Safari、Android Chrome

**测试方法**: BrowserStack或手动测试

### 10.4 性能测试
**测试内容**:
- Lighthouse性能评分 >90
- Core Web Vitals达标
- 首屏加载时间 < 2秒

**测试方法**: Lighthouse + PageSpeed Insights

### 10.5 SEO测试
**测试内容**:
- 所有页面Meta标签正确
- Schema标记验证通过
- Sitemap.xml可访问
- Robots.txt正确配置

**测试方法**: Google Rich Results Test + 手动检查

---

## 11. 成功指标（KPI）

### 11.1 SEO指标

**3个月目标**:
| 指标 | 目标值 | 测量方法 |
|------|--------|----------|
| Google排名（前3页） | 3-5个关键词 | Google Search Console |
| 自然搜索流量 | 5,000+ UV/月 | Google Analytics |
| 关键词曝光量 | 100,000+/月 | Search Console |
| 平均排名位置 | <30 | Search Console |
| Core Web Vitals | 全绿 | PageSpeed Insights |

**6个月目标**:
| 指标 | 目标值 | 测量方法 |
|------|--------|----------|
| Google排名（首页） | 2-3个关键词 | Google Search Console |
| 自然搜索流量 | 20,000+ UV/月 | Google Analytics |
| 关键词曝光量 | 500,000+/月 | Search Console |
| 平均排名位置 | <10 | Search Console |

### 11.2 用户体验指标

| 指标 | 目标值 | 测量方法 |
|------|--------|----------|
| 页面加载时间(LCP) | <2.5s | Web Vitals |
| 首次输入延迟(FID) | <100ms | Web Vitals |
| 累计布局偏移(CLS) | <0.1 | Web Vitals |
| 跳出率 | <60% | Google Analytics |
| 平均会话时长 | >1min | Google Analytics |
| 回访率 | >30% | Google Analytics |

### 11.3 业务指标

| 指标 | 目标值 | 测量方法 |
|------|--------|----------|
| 计算完成率 | >90% | Google Analytics事件 |
| 场景使用率 | >40% | 自定义事件 |
| 历史记录使用率 | >20% | 自定义事件 |

---

## 12. 风险与应对

### 12.1 技术风险

| 风险 | 影响 | 概率 | 应对措施 |
|------|------|------|----------|
| 性能不达标 | 高 | 低 | Next.js原生优化，持续监控 |
| SEO效果不佳 | 高 | 中 | 持续优化内容，A/B测试 |
| LocalStorage兼容性 | 低 | 低 | 优雅降级，不影响核心功能 |

### 12.2 市场风险

| 风险 | 影响 | 概率 | 应对措施 |
|------|------|------|----------|
| 竞品优化 | 中 | 高 | 持续创新功能，提升体验 |
| 搜索算法变化 | 高 | 中 | 关注官方公告，快速调整 |
| 用户需求变化 | 中 | 低 | 用户反馈机制，快速迭代 |

---

## 13. 附录

### 13.1 参考资料
- Next.js文档: https://nextjs.org/docs
- Google Search Central: https://developers.google.com/search
- Web.dev: https://web.dev/
- Schema.org: https://schema.org/

### 13.2 关键词列表

**主要关键词** (KD 40-60):
- tip calculator (368K搜索量, KD 58)
- calculate tip calculator (12K, KD 54)
- tip calculator app (12K, KD 56)

**次要关键词** (KD 20-40):
- tip calculator google (14K, KD 47)
- restaurant tip calculator (1.9K, KD 45)
- how to calculate tip (1.9K, KD 47)

**长尾关键词** (KD <20):
- tip percentage calculator (1.9K, KD 48)
- tip.calculator (2.4K, KD 56)
- tip calculator tip calculator (3.6K, KD 56)

### 13.3 竞品分析详情

**Calculator.net** (75 DA, 341.6K 流量):
- 优势：权威性高，流量大
- 劣势：UI老旧，移动体验差

**Google Play App** (98 DA, 129.1K 流量):
- 优势：品牌效应，用户信任
- 劣势：需要下载安装

**Omni Calculator** (69 DA, 6.2K 流量):
- 优势：UI现代，功能丰富
- 劣势：页面复杂，加载慢

### 13.4 更新日志

| 版本 | 日期 | 更新内容 | 作者 |
|------|------|----------|------|
| v1.0 | 2025-10-16 | 初始版本 | - |
| v2.0 | 2025-10-16 | 简化版：去除PWA、高级分账、CSV导出、复杂测试等难以实现的功能，专注核心功能和SEO | - |

---

**文档结束**
