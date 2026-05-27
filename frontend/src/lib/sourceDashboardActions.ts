export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "carbon-credit-deep-workflows",
    "label": "Carbon Credit Deep Workflows",
    "description": "Open deeper Carbon Credit Deep Workflows workflows elevated from AICarbonCreditMarketplaceVerifier.",
    "href": "/methodology-eligibility",
    "sourceProjects": [
      "AICarbonCreditMarketplaceVerifier"
    ],
    "examples": [
      "Methodology Eligibility",
      "Additionality Evidence",
      "Retirement Duplicate Check",
      "Vintage Price Review"
    ],
    "count": 1
  },
  {
    "id": "carbon-credit-verification",
    "label": "Carbon Credit Verification",
    "description": "Open Carbon Credit Verification workflows elevated from AICarbonCreditMarketplaceVerifier.",
    "href": "/carbon-credit-review",
    "sourceProjects": [
      "AICarbonCreditMarketplaceVerifier"
    ],
    "examples": [
      "Carbon Credit Review",
      "Registry Validation",
      "Offset Project Risk"
    ],
    "count": 1
  }
];
