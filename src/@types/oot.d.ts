declare namespace OOT {
  interface Location {
    name: string;
    checks: Check[];
    requirements?: {
      access?: {
        itemId: string[];
      }[];
      beat?: {
        itemId: string[];
      }[];
    };
  }

  interface Check {
    name: string;
    id: string;
    requirements?: {
      access?: {
        itemId: string[];
      }[];
    };
  }

  interface Item {
    name: string;
    id: string;
    isRepeatable: boolean;
  }

  interface Hints {
    woth: {
      locations: string[];
    };
  }
}
