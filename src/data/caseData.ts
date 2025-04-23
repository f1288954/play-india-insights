
export const caseData = {
  title: "Google Play in India: Playing with Networks",
  description: "Case study analysis of Google's 30% commission policy in Indian app ecosystem",
  keyMetrics: [
    {
      title: "Android OS Market Share",
      value: "95.85%",
      description: "of mobile devices in India (Sep 2020)",
      color: "border-google-green"
    },
    {
      title: "iOS Market Share",
      value: "3.24%",
      description: "of mobile devices in India (Sep 2020)",
      color: "border-google-yellow"
    },
    {
      title: "Google Play Revenue",
      value: "$17.3B",
      description: "Global revenue (July 2020), 20% YoY growth",
      color: "border-google-blue"
    },
    {
      title: "App Downloads",
      value: "7B",
      description: "In India during Q2 2020, #1 globally",
      color: "border-google-red"
    },
    {
      title: "Download Growth",
      value: "190%",
      description: "In India from 2016-2019 (vs 45% global)",
      color: "border-purple-500"
    },
    {
      title: "Free Apps",
      value: "96.5%",
      description: "Proportion of free apps on Google Play (Sep 2020)",
      color: "border-teal-500"
    }
  ],
  
  contextualAnalysis: {
    company: {
      title: "Company Context",
      points: [
        "Android holds 95.85% of India's mobile OS market; Google Play is the effective monopoly app distributor",
        "Google Play global revenue of $17.3B (July 2020), with 20% YoY growth; primarily driven by freemium model (98%)",
        "Asset-light model with near-zero marginal distribution costs and logarithmic cost reduction at scale",
        "Play Store & Services are 'critical core components' for Android functionality"
      ],
      implications: "Google's >95% share makes its commission a market-structuring force, triggering 'essential facility' concerns under CCI rules. Extreme concentration leaves developers no viable alternative. Platform economics provide flexibility for fee adjustments without threatening core profitability."
    },
    market: {
      title: "Market & Consumer Trends",
      points: [
        "India led global app downloads (7B in Q2 2020); 190% download growth (2016-19) vs. 45% global",
        "500M mobile users in India (36% penetration); #2 global smartphone market",
        "High growth in India's daily mobile usage hours (up 37% between 2019 and Q2 2020)",
        "Google Play gaming app downloads surged 101.6% between Q2 2019 and Q2 2020"
      ],
      implications: "India is Google's most critical growth market (64% untapped population), creating mutual leverage: Google needs India for growth; developers/regulators know Google needs India. Rapid growth concentrates fee impact and opposition."
    },
    technology: {
      title: "Technology & Product",
      points: [
        "Powerful direct/indirect network effects lock in users and developers; cross-country effects amplify value",
        "Logarithmic cost reduction enables profitability even at lower commission rates for high-volume markets",
        "Critical mass and technological integration make Play difficult to replicate short-term",
        "Fits CCI 'essential facility' definition due to market necessity and lack of short-term alternatives"
      ],
      implications: "Proven failure of competitors confirms Play's insurmountable network barrier, reinforcing its 'essential facility' status. Google can implement nuanced fees due to its cost structure."
    },
    competition: {
      title: "Competition",
      points: [
        "Extreme duopoly in India (Android 95.85% vs. iOS 3.24% as of Sep 2020)",
        "Global market less concentrated (Android 74.25% vs. iOS 25.15% as of Aug 2020)",
        "Numerous well-funded OS/platform alternatives have failed to gain traction",
        "Mobile devices without Google Play services face significant functionality limitations"
      ],
      implications: "Lack of viable competition removes natural market checks on Google's pricing power, making regulation the primary counterforce. Structural entrenchment, not just product superiority, underpins dominance."
    },
    regulation: {
      title: "Regulation & Public Policy",
      points: [
        "History of CCI fines ($21M fine in 2018), ongoing investigations (2020)",
        "Indian government considering mandatory alternative store ('Atmanirbhar Bharat')",
        "CCI can apply 'essential facilities doctrine' requiring reasonable access to critical infrastructure",
        "Global precedents of regulatory intervention (EU, Russia) increase pressure"
      ],
      implications: "The regulatory environment is actively hostile, moving towards intervention. Mandatory alternatives pose an existential threat to Google's unified network effects in its largest growth market."
    }
  },
  
  keyFigures: [
    {
      title: "App Download Growth",
      data: [
        { year: 2016, googlePlay: 57.8, appStore: 26, total: 83.8, globalTotal: 140 },
        { year: 2017, googlePlay: 66.9, appStore: 27.9, total: 94.8, globalTotal: 175 },
        { year: 2018, googlePlay: 75.5, appStore: 29.8, total: 105.3, globalTotal: 194 },
        { year: 2019, googlePlay: 84.3, appStore: 30.6, total: 114.9, globalTotal: 204 }
      ]
    },
    {
      title: "App Category Growth Q2 2019-2020 (billions)",
      data: [
        { category: "Games", q2_2019: 6.1, q2_2020: 12.3, percentChange: 101.6 },
        { category: "Tools", q2_2019: 1.45, q2_2020: 1.82, percentChange: 25.5 },
        { category: "Entertainment", q2_2019: 1.37, q2_2020: 1.46, percentChange: 6.6 },
        { category: "Social", q2_2019: 1.04, q2_2020: 1.18, percentChange: 13.5 },
        { category: "Video", q2_2019: 0.71, q2_2020: 1.12, percentChange: 57.7 }
      ]
    },
    {
      title: "App Revenue Projections ($ billions)",
      data: [
        { year: 2017, googlePlay: 19.5, appStore: 38.7, total: 58.2 },
        { year: 2018, googlePlay: 24.8, appStore: 46.6, total: 71.4 },
        { year: 2019, googlePlay: 29.0, appStore: 56.0, total: 85.0 },
        { year: 2020, googlePlay: 37.0, appStore: 67.0, total: 104.0 },
        { year: 2021, googlePlay: 45.0, appStore: 78.0, total: 123.0 },
        { year: 2022, googlePlay: 53.0, appStore: 88.0, total: 141.0 },
        { year: 2023, googlePlay: 60.0, appStore: 96.0, total: 156.0 }
      ]
    }
  ],
  
  networkEffects: {
    title: "Network Effects in App Ecosystem",
    description: "How app stores benefit from various network externalities",
    types: [
      {
        type: "Direct Network Effects",
        description: "Benefits existing users gain with each new user joining the network",
        examples: [
          "Multi-player gaming platforms: More players → better experience",
          "Dating/matrimonial apps: Larger user base → more potential matches"
        ]
      },
      {
        type: "Indirect Network Effects",
        description: "Benefits one user group gains when another user group grows",
        examples: [
          "More app developers → more choices for consumers",
          "More consumers → larger market for app developers"
        ]
      },
      {
        type: "Cross-Country Network Effects",
        description: "Benefits derived from users/developers in different geographies",
        examples: [
          "Global game leaderboards and competitions",
          "Apps developed in one region benefiting users globally"
        ]
      }
    ],
    implications: [
      "Critical mass required before value exceeds cost of joining",
      "Logarithmic reduction in costs per unit (unlike traditional U-shaped cost curves)",
      "Near-zero marginal distribution costs after initial development",
      "Winner-take-all dynamics leading to monopolistic tendencies"
    ]
  },
  
  competitionLaw: {
    title: "Competition Commission of India (CCI)",
    description: "Key aspects of CCI's approach to dominance and antitrust",
    dominanceFactors: [
      "Market share and resource size",
      "Size and importance of competitors",
      "Economic power of the enterprise",
      "Vertical integration control of supply chain",
      "Consumer dependence on the enterprise",
      "Entry and exit barriers",
      "Countervailing buying power",
      "Market structure and size",
      "Source of dominant position",
      "Social obligations and economic development contribution"
    ],
    abuseTypes: [
      "Exclusionary practices (denying market access)",
      "Exploitative practices (unfair pricing/terms)",
      "Essential facilities doctrine violations (refusing reasonable access to infrastructure)"
    ],
    remedies: [
      "Cease and desist orders",
      "Mandatory sharing of essential facilities",
      "Monetary penalties based on turnover"
    ]
  },
  
  strategies: {
    title: "Strategic Recommendations",
    options: [
      {
        name: "India Developer Growth Incentive Program",
        description: "Maintain 30% commission but offer significant rebates on incremental annual revenue",
        pros: [
          "Aligns Google with developer success",
          "Incentivizes ecosystem growth",
          "Maintains global policy consistency"
        ],
        cons: [
          "May not satisfy vocal critics demanding direct fee cuts",
          "Complexity in implementation and messaging"
        ]
      },
      {
        name: "India Developer Ecosystem Fund",
        description: "Allocate ~5% of India Google Play revenue to provide grants and resources for local developers",
        pros: [
          "Demonstrates tangible investment in India's digital economy",
          "Supports small developers disproportionately affected by fees",
          "Builds goodwill with government and developer community"
        ],
        cons: [
          "Fund management requires significant oversight",
          "Impact may be difficult to measure"
        ]
      },
      {
        name: "Government & Industry Collaboration",
        description: "Proactively engage with government on 'Atmanirbhar Bharat' app store initiative",
        pros: [
          "Shapes potential regulations constructively",
          "Mitigates risk of mandated unfavorable alternatives",
          "Positions Google as partner rather than opponent"
        ],
        cons: [
          "Risk of being seen as acquiescing to government pressure",
          "May require significant compromises"
        ]
      }
    ]
  },
  
  criticalQuestions: [
    "What is the basis of Google's market power in India's app distribution ecosystem?",
    "How do network effects create barriers to entry for competing platforms?",
    "What are the key components of Google's revenue model for app distribution?",
    "How does the Indian market differ from global markets for app distribution?",
    "What constitutes abuse of dominance under CCI regulations?",
    "How might the 'essential facilities doctrine' apply to Google Play?",
    "What precedents exist for regulatory intervention in digital platforms?",
    "How might Google balance global policy consistency with local market needs?",
    "What strategic options exist beyond simply adjusting commission rates?",
    "How might Google proactively address regulatory concerns while maintaining profitability?"
  ]
};
