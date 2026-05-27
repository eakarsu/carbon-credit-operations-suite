import {
  Activity,
  BarChart3,
  Bell,
  Blocks,
  Database,
  Bot,
  BriefcaseBusiness,
  CalendarCheck,
  ClipboardList,
  FileText,
  Files,
  LayoutDashboard,
  LucideIcon,
  PackageCheck,
  Plug,
  ShieldCheck,
  UserRound,
  Users,
  Workflow,
} from 'lucide-react';

export type NavItem = { label: string; href: string; icon: LucideIcon };
export type FeatureDefinition = { title: string; href: string; category: string; summary: string; bullets: string[] };
export type PageDefinition = {
  title: string;
  eyebrow: string;
  subtitle: string;
  category: string;
  summary: string;
  bullets: string[];
  metrics: Array<{ label: string; value: string; note: string }>;
};
export type FeatureContext = {
  sourceOwners: string[];
  operatingQueues: string[];
  outputs: string[];
  relatedRoutes: Array<{ label: string; href: string }>;
};

const features = [
  {
    slug: 'records',
    title: 'Accounts',
    href: '/records',
    category: 'Finance',
    icon: BriefcaseBusiness,
    summary: 'Accounts workflow normalized for the Carbon Credit Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Accounts queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Accounts', value: '24', note: 'Active' }, { label: 'Exceptions', value: '3', note: 'Need review' }, { label: 'Due Soon', value: '5', note: 'Next 14 days' }],
  },
  {
    slug: 'applications',
    title: 'Applications',
    href: '/applications',
    category: 'Finance',
    icon: Users,
    summary: 'Applications workflow normalized for the Carbon Credit Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Applications queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Applications', value: '35', note: 'Active' }, { label: 'Exceptions', value: '4', note: 'Need review' }, { label: 'Due Soon', value: '6', note: 'Next 14 days' }],
  },
  {
    slug: 'transactions',
    title: 'Transactions',
    href: '/transactions',
    category: 'Finance',
    icon: ClipboardList,
    summary: 'Transactions workflow normalized for the Carbon Credit Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Transactions queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Transactions', value: '46', note: 'Active' }, { label: 'Exceptions', value: '5', note: 'Need review' }, { label: 'Due Soon', value: '7', note: 'Next 14 days' }],
  },
  {
    slug: 'reviews',
    title: 'Reviews',
    href: '/reviews',
    category: 'Finance',
    icon: CalendarCheck,
    summary: 'Reviews workflow normalized for the Carbon Credit Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Reviews queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Reviews', value: '57', note: 'Active' }, { label: 'Exceptions', value: '6', note: 'Need review' }, { label: 'Due Soon', value: '8', note: 'Next 14 days' }],
  },
  {
    slug: 'approvals',
    title: 'Approvals',
    href: '/approvals',
    category: 'Operations',
    icon: Activity,
    summary: 'Approvals workflow normalized for the Carbon Credit Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Approvals queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Approvals', value: '68', note: 'Active' }, { label: 'Exceptions', value: '7', note: 'Need review' }, { label: 'Due Soon', value: '9', note: 'Next 14 days' }],
  },
  {
    slug: 'exceptions',
    title: 'Exceptions',
    href: '/exceptions',
    category: 'Operations',
    icon: Workflow,
    summary: 'Exceptions workflow normalized for the Carbon Credit Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Exceptions queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Exceptions', value: '79', note: 'Active' }, { label: 'Exceptions', value: '8', note: 'Need review' }, { label: 'Due Soon', value: '10', note: 'Next 14 days' }],
  },
  {
    slug: 'risk-scores',
    title: 'Risk Scores',
    href: '/risk-scores',
    category: 'Operations',
    icon: FileText,
    summary: 'Risk Scores workflow normalized for the Carbon Credit Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Risk Scores queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Risk Scores', value: '90', note: 'Active' }, { label: 'Exceptions', value: '9', note: 'Need review' }, { label: 'Due Soon', value: '11', note: 'Next 14 days' }],
  },
  {
    slug: 'statements',
    title: 'Statements',
    href: '/statements',
    category: 'Operations',
    icon: ShieldCheck,
    summary: 'Statements workflow normalized for the Carbon Credit Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Statements queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Statements', value: '101', note: 'Active' }, { label: 'Exceptions', value: '10', note: 'Need review' }, { label: 'Due Soon', value: '12', note: 'Next 14 days' }],
  },
  {
    slug: 'compliance',
    title: 'Compliance',
    href: '/compliance',
    category: 'Governance',
    icon: BarChart3,
    summary: 'Compliance workflow normalized for the Carbon Credit Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Compliance queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Compliance', value: '112', note: 'Active' }, { label: 'Exceptions', value: '11', note: 'Need review' }, { label: 'Due Soon', value: '13', note: 'Next 14 days' }],
  },
  {
    slug: 'forecasts',
    title: 'Forecasts',
    href: '/forecasts',
    category: 'Governance',
    icon: PackageCheck,
    summary: 'Forecasts workflow normalized for the Carbon Credit Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Forecasts queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Forecasts', value: '123', note: 'Active' }, { label: 'Exceptions', value: '12', note: 'Need review' }, { label: 'Due Soon', value: '14', note: 'Next 14 days' }],
  },
  {
    slug: 'analytics',
    title: 'Analytics',
    href: '/analytics',
    category: 'Intelligence Layer',
    icon: Bell,
    summary: 'Analytics workflow normalized for the Carbon Credit Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Analytics queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Analytics', value: '134', note: 'Active' }, { label: 'Exceptions', value: '13', note: 'Need review' }, { label: 'Due Soon', value: '15', note: 'Next 14 days' }],
  },
  {
    slug: 'reports',
    title: 'Reports',
    href: '/reports',
    category: 'Intelligence Layer',
    icon: Files,
    summary: 'Reports workflow normalized for the Carbon Credit Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Reports queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Reports', value: '145', note: 'Active' }, { label: 'Exceptions', value: '14', note: 'Need review' }, { label: 'Due Soon', value: '16', note: 'Next 14 days' }],
  },
  {
    slug: "carbon-credit-review",
    title: "Carbon Credit Review",
    href: "/carbon-credit-review",
    category: "Carbon Credit Verification",
    icon: Workflow,
    summary: "Offset project, credit vintage, methodology, registry, and issuance review.",
    bullets: ["Carbon Credit Review queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Carbon Credit Review", value: "28", note: 'Active' },
      { label: 'Review', value: "5", note: 'Needs attention' },
      { label: 'Due Soon', value: "3", note: 'Next 14 days' },
    ],
  },
  {
    slug: "registry-validation",
    title: "Registry Validation",
    href: "/registry-validation",
    category: "Carbon Credit Verification",
    icon: Workflow,
    summary: "Registry records, ownership, retirement status, and duplicate credit checks.",
    bullets: ["Registry Validation queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Registry Validation", value: "39", note: 'Active' },
      { label: 'Review', value: "6", note: 'Needs attention' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "offset-project-risk",
    title: "Offset Project Risk",
    href: "/offset-project-risk",
    category: "Carbon Credit Verification",
    icon: Workflow,
    summary: "Additionality, permanence, leakage, verification gaps, and market risk.",
    bullets: ["Offset Project Risk queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Offset Project Risk", value: "50", note: 'Active' },
      { label: 'Review', value: "7", note: 'Needs attention' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "methodology-eligibility",
    title: "Methodology Eligibility",
    href: "/methodology-eligibility",
    category: "Carbon Credit Deep Workflows",
    icon: Workflow,
    summary: "Methodology fit, project activity, documentation, exclusions, and approval readiness.",
    bullets: ["Source-derived workflow","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Methodology Eligibility", value: "34", note: 'Active items' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: "additionality-evidence",
    title: "Additionality Evidence",
    href: "/additionality-evidence",
    category: "Carbon Credit Deep Workflows",
    icon: Workflow,
    summary: "Financial, regulatory, and common-practice evidence supporting additionality claims.",
    bullets: ["Source-derived workflow","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Additionality Evidence", value: "43", note: 'Active items' },
      { label: 'Exceptions', value: "5", note: 'Need review' },
      { label: 'Due Soon', value: "8", note: 'Next 14 days' },
    ],
  },
  {
    slug: "retirement-duplicate-check",
    title: "Retirement Duplicate Check",
    href: "/retirement-duplicate-check",
    category: "Carbon Credit Deep Workflows",
    icon: Workflow,
    summary: "Credit ownership, serial numbers, retirement status, and duplicate risk review.",
    bullets: ["Source-derived workflow","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Retirement Duplicate Check", value: "52", note: 'Active items' },
      { label: 'Exceptions', value: "6", note: 'Need review' },
      { label: 'Due Soon', value: "9", note: 'Next 14 days' },
    ],
  },
  {
    slug: "vintage-price-review",
    title: "Vintage Price Review",
    href: "/vintage-price-review",
    category: "Carbon Credit Deep Workflows",
    icon: Workflow,
    summary: "Vintage, registry, project type, pricing signals, and marketability assessment.",
    bullets: ["Source-derived workflow","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Vintage Price Review", value: "61", note: 'Active items' },
      { label: 'Exceptions', value: "7", note: 'Need review' },
      { label: 'Due Soon', value: "10", note: 'Next 14 days' },
    ],
  },
  {
    slug: 'documents',
    title: 'Documents',
    href: '/documents',
    category: 'Core Platform',
    icon: Files,
    summary: 'Carbon Credit Operations documents, packets, evidence, attachments, and exports.',
    bullets: ['Documents', 'Uploads', 'Exports'],
    metrics: [{ label: 'Documents', value: '640', note: 'Tracked' }, { label: 'In Review', value: '42', note: 'Open' }, { label: 'Uploaded', value: '88', note: 'This month' }],
  },
  {
    slug: 'notifications',
    title: 'Notifications',
    href: '/notifications',
    category: 'Core Platform',
    icon: Bell,
    summary: 'Carbon Credit Operations alerts, reminders, exceptions, and approvals.',
    bullets: ['Alerts', 'Reminders', 'Exceptions'],
    metrics: [{ label: 'Unread', value: '34', note: 'Needs review' }, { label: 'Critical', value: '7', note: 'Escalated' }, { label: 'Resolved', value: '211', note: 'This week' }],
  },
  {
    slug: 'integrations',
    title: 'Integrations',
    href: '/integrations',
    category: 'Core Platform',
    icon: Plug,
    summary: 'Carbon Credit Operations source-system connector health and sync status.',
    bullets: ['Connectors', 'Sync', 'Warnings'],
    metrics: [{ label: 'Connectors', value: '12', note: 'Configured' }, { label: 'Warnings', value: '3', note: 'Need attention' }, { label: 'Last Sync', value: '5m', note: 'Source data' }],
  },
  {
    slug: 'profiles',
    title: 'Profiles',
    href: '/profiles',
    category: 'Core Platform',
    icon: UserRound,
    summary: 'Carbon Credit Operations users, roles, teams, permissions, and ownership settings.',
    bullets: ['Users', 'Roles', 'Teams'],
    metrics: [{ label: 'Users', value: '72', note: 'Active' }, { label: 'Teams', value: '9', note: 'Configured' }, { label: 'Access Reviews', value: '5', note: 'Open' }],
  },
] as const;

const aiFeatures = [
  {
    slug: 'ai-assistant',
    title: 'AI Assistant',
    href: '/features/ai-assistant',
    category: 'Intelligence Layer',
    icon: Bot,
    summary: 'Carbon Credit Operations assistant for triage, summaries, drafting, recommendations, and operational review.',
    bullets: ['Triage support', 'Drafting', 'Review guidance'],
    metrics: [
      { label: 'Sessions', value: '128', note: 'Last 24 hours' },
      { label: 'Drafts', value: '204', note: 'Generated' },
      { label: 'Escalations', value: '14', note: 'Expert review' },
    ],
  },
  {
    slug: 'ai-tools',
    title: 'AI Tools',
    href: '/features/ai-tools',
    category: 'Intelligence Layer',
    icon: Activity,
    summary: 'Targeted AI tools for scoring, classification, extraction, exception review, and reporting.',
    bullets: ['Scoring', 'Classification', 'Exception review'],
    metrics: [
      { label: 'Runs', value: '318', note: 'Last 24 hours' },
      { label: 'Signals', value: '88', note: 'New alerts' },
      { label: 'Accepted', value: '117', note: 'Reviewer accepted' },
    ],
  },
] as const;

const allFeatures = [...features, ...aiFeatures];

export const primaryNav: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'All Features', href: '/features', icon: Blocks },
  { label: 'Documents', href: '/documents', icon: Files },
  { label: 'Source Tables', href: '/source-tables', icon: Database },
  { label: 'Profiles', href: '/profiles', icon: UserRound },
];

export const featureNav: NavItem[] = allFeatures.map((feature) => ({ label: feature.title, href: feature.href, icon: feature.icon }));
export const featureCatalog: FeatureDefinition[] = allFeatures.map((feature) => ({ title: feature.title, href: feature.href, category: feature.category, summary: feature.summary, bullets: [...feature.bullets] }));

export const featureFamilies = [
  { name: 'Finance', features: ['Accounts', 'Applications', 'Transactions', 'Reviews'] },
  { name: 'Operations', features: ['Approvals', 'Exceptions', 'Risk Scores', 'Statements'] },
  { name: 'Governance', features: ['Compliance', 'Forecasts'] },
  { name: 'Carbon Credit Verification', features: ["Carbon Credit Review","Registry Validation","Offset Project Risk"] },
  { name: "Carbon Credit Deep Workflows", features: ["Methodology Eligibility","Additionality Evidence","Retirement Duplicate Check","Vintage Price Review"] },
  { name: 'Intelligence Layer', features: ['Analytics', 'Reports', 'AI Assistant', 'AI Tools'] },
  { name: 'Core Platform', features: ['Documents', 'Notifications', 'Integrations', 'Profiles'] },
];

function toPage(feature: (typeof allFeatures)[number]): PageDefinition {
  return {
    title: feature.title,
    eyebrow: feature.category,
    subtitle: feature.summary,
    category: feature.category,
    summary: `${feature.title} is normalized from source applications into one merged suite workflow.`,
    bullets: [...feature.bullets],
    metrics: [...feature.metrics],
  };
}

export const pageRegistry: Record<string, PageDefinition> = Object.fromEntries(features.map((feature) => [feature.slug, toPage(feature)]));
export const aiFeatureRegistry: Record<string, PageDefinition> = Object.fromEntries(aiFeatures.map((feature) => [feature.slug, toPage(feature)]));
export const featureContexts: Record<string, FeatureContext> = Object.fromEntries(
  allFeatures.map((feature) => [
    feature.title,
    {
      sourceOwners: ['AICarbonCreditOperationsAssistant', 'AICarbonCreditOperationsOperations where applicable'],
      operatingQueues: [`${feature.title} records`, `${feature.title} approvals`, `${feature.title} exceptions`],
      outputs: [`${feature.title} dashboard`, `${feature.title} export`, `${feature.title} audit trail`],
      relatedRoutes: [{ label: 'Dashboard', href: '/dashboard' }, { label: 'All Features', href: '/features' }, { label: 'Reports', href: '/reports' }],
    },
  ]),
);
