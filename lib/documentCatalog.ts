export type DocumentItem = {
  title: string;
  description: string;
  category: string;
  built: boolean;
  href?: string;
  keywords: string[];
};

export const documentCatalog: DocumentItem[] = [
  {
    category: "Estate & Life Planning",
    title: "Financial Power of Attorney",
    description: "Let someone handle finances, property, banking, or legal matters for you.",
    built: true,
    href: "/form",
    keywords: [
      "power of attorney",
      "financial power of attorney",
      "handle my finances",
      "manage my finances",
      "someone to handle my finances",
      "someone to pay my bills",
      "banking authority",
      "financial authority",
      "attorney in fact",
    ],
  },
  {
    category: "Affidavits & Statements",
    title: "Custom Notarized Statement",
    description: "Create a flexible notarized statement when no standard form fits.",
    built: true,
    href: "/form/custom-statement",
    keywords: [
      "notarized statement",
      "custom statement",
      "sworn statement",
      "statement",
      "write my own statement",
      "build my own",
      "custom document",
      "notary",
    ],
  },
  {
    category: "Estate & Life Planning",
    title: "Medical Power of Attorney",
    description: "Authorize someone to make healthcare decisions for you.",
    built: false,
    keywords: ["medical power of attorney", "healthcare decisions", "medical decisions", "hospital decisions"],
  },
  {
    category: "Estate & Life Planning",
    title: "Living Will / Advance Directive",
    description: "State your medical care wishes if you cannot speak for yourself.",
    built: false,
    keywords: ["living will", "advance directive", "end of life", "medical wishes"],
  },
  {
    category: "Estate & Life Planning",
    title: "Last Will and Testament",
    description: "Plan who receives your property after death.",
    built: false,
    keywords: ["last will", "will and testament", "inheritance", "after death", "estate"],
  },
  {
    category: "Estate & Life Planning",
    title: "Trust Starter Worksheet",
    description: "Organize information needed to start a trust.",
    built: false,
    keywords: ["trust", "living trust", "trust worksheet"],
  },
  {
    category: "Estate & Life Planning",
    title: "HIPAA Authorization",
    description: "Allow someone to access or discuss your medical information.",
    built: false,
    keywords: ["hipaa", "medical records", "health information"],
  },
  {
    category: "Estate & Life Planning",
    title: "Final Wishes",
    description: "Document funeral, burial, and personal final wishes.",
    built: false,
    keywords: ["final wishes", "funeral", "burial", "cremation"],
  },

  {
    category: "Family & Child",
    title: "Minor Child Authorization",
    description: "Authorize another adult to care for, travel with, or make decisions for your child.",
    built: true,
    href: "/form/minor-child-consent",
    keywords: [
      "minor child",
      "child consent",
      "child authorization",
      "travel consent child",
      "medical consent child",
      "school pickup authorization",
      "guardian permission",
      "child permission",
      "minor travel consent",
      "child travel",
      "travel with child",
      "permission to travel",
      "child medical consent",
      "child doctor",
      "medical care for child",
      "authorize medical treatment",
      "temporary guardianship",
      "temporary guardian",
      "care for my child",
      "school pickup",
      "pick up my child",
      "sister pick up my child",
      "pickup authorization",
    ],
  },

  {
    category: "Sales & Property",
    title: "Vehicle Bill of Sale",
    description: "Document the sale of a car, motorcycle, trailer, or other vehicle.",
    built: true,
    href: "/form/vehicle-bill-of-sale",
    keywords: ["vehicle bill of sale", "sell my motorcycle", "sell my car", "sell my truck", "motorcycle sale"],
  },
  {
    category: "Sales & Property",
    title: "General Bill of Sale",
    description: "Document the sale of personal property.",
    built: false,
    keywords: ["bill of sale", "sell personal property", "selling an item", "sold an item"],
  },
  {
    category: "Sales & Property",
    title: "Personal Property Sale Agreement",
    description: "Create a simple agreement for selling personal property.",
    built: false,
    keywords: ["personal property sale", "sale agreement", "sell furniture", "sell equipment"],
  },
  {
    category: "Sales & Property",
    title: "Gift Letter",
    description: "Document that money or property was given as a gift.",
    built: false,
    keywords: ["gift letter", "gave money as gift", "gifted property"],
  },

  {
    category: "Affidavits & Statements",
    title: "Affidavit of Identity",
    description: "Swear to or confirm your identity.",
    built: false,
    keywords: ["affidavit of identity", "prove my identity", "confirm identity"],
  },
  {
    category: "Affidavits & Statements",
    title: "Affidavit of Residence",
    description: "Confirm where you live.",
    built: true,
    href: "/form/affidavit-of-residence",
    keywords: [
      "residency",
      "proof of residency",
      "proof of address",
      "residence",
      "affidavit of residence",
      "address verification",
      "school enrollment",
      "DMV",
      "verify where I live",
      "living at an address",
      "proof of residence",
    ],
  },
  {
    category: "Affidavits & Statements",
    title: "Affidavit of Support",
    description: "State that you financially support another person.",
    built: false,
    keywords: ["affidavit of support", "financial support", "support someone financially"],
  },
  {
    category: "Affidavits & Statements",
    title: "Affidavit of Lost Document",
    description: "Explain that an important document was lost.",
    built: false,
    keywords: ["lost document", "lost title", "lost certificate", "missing document"],
  },
  {
    category: "Affidavits & Statements",
    title: "Incident Statement",
    description: "Document what happened in an incident, dispute, or damage situation.",
    built: false,
    keywords: ["incident statement", "document damage", "apartment damage", "damage to my apartment", "what happened"],
  },

  {
    category: "Money & Agreements",
    title: "Promissory Note",
    description: "Create a promise to repay money.",
    built: true,
    href: "/form/promissory-note",
    keywords: ["promissory note", "promise to repay", "repay money", "money owed"],
  },
  {
    category: "Money & Agreements",
    title: "Personal Loan Agreement",
    description: "Document a personal loan between individuals.",
    built: false,
    keywords: ["personal loan agreement", "loan money", "lend money", "borrow money", "loan with terms"],
  },
  {
    category: "Money & Agreements",
    title: "Payment Plan Agreement",
    description: "Create a repayment schedule.",
    built: false,
    keywords: ["payment plan", "repayment plan", "installments", "pay over time"],
  },
  {
    category: "Money & Agreements",
    title: "Debt Acknowledgment",
    description: "Confirm that a debt is owed.",
    built: false,
    keywords: ["debt acknowledgment", "owe money", "acknowledge debt"],
  },

  {
    category: "Court / Self-Representation Support",
    title: "Statement of Facts",
    description: "Organize facts for a legal or court-related matter.",
    built: false,
    keywords: ["statement of facts", "court facts", "facts for court"],
  },
  {
    category: "Court / Self-Representation Support",
    title: "Timeline of Events",
    description: "Create a clean timeline of what happened.",
    built: false,
    keywords: ["timeline of events", "timeline", "sequence of events"],
  },
  {
    category: "Court / Self-Representation Support",
    title: "Declaration",
    description: "Prepare a written declaration for a matter.",
    built: false,
    keywords: ["declaration", "court declaration", "written declaration"],
  },
  {
    category: "Court / Self-Representation Support",
    title: "Exhibit Cover Sheet",
    description: "Label and organize exhibits.",
    built: false,
    keywords: ["exhibit cover sheet", "exhibit", "evidence label"],
  },
  {
    category: "Court / Self-Representation Support",
    title: "Response Letter Draft",
    description: "Draft a response letter for a dispute or request.",
    built: false,
    keywords: ["response letter", "reply letter", "respond to letter"],
  },
];

export const categories = Array.from(
  new Set(documentCatalog.map((doc) => doc.category))
);

export function findDocumentMatches(query: string) {
  const normalized = query.toLowerCase().trim();

  if (!normalized) return [];

  const customStatement = documentCatalog.find(
    (doc) => doc.title === "Custom Notarized Statement"
  );

  const results = documentCatalog
    .filter((doc) => doc.title !== "Custom Notarized Statement")
    .map((doc) => {
      let score = 0;

      const title = doc.title.toLowerCase();

      if (normalized.includes(title)) {
        score += 30;
      }

      doc.keywords.forEach((keyword) => {
        const normalizedKeyword = keyword.toLowerCase();

        if (normalized.includes(normalizedKeyword)) {
          score += 20;
        }

        const keywordWords = normalizedKeyword
          .split(" ")
          .filter((word) => word.length > 3);

        keywordWords.forEach((word) => {
          if (normalized.includes(word)) {
            score += 3;
          }
        });
      });

      return { ...doc, score };
    })
    .filter((doc) => doc.score >= 6)
    .sort((a, b) => b.score - a.score);

  if (results.length === 0 && customStatement) {
    return [{ ...customStatement, score: 1 }];
  }

  return results.slice(0, 3);
}