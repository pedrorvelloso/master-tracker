declare namespace MM {
  interface Item {
    name: string;
    opensChecks: boolean;
    isRepeatable: boolean;
  }

  interface Location {
    name: string;
    checks: string[];
  }

  interface Hints {
    woth: {
      locations: string[];
    };
  }
}
