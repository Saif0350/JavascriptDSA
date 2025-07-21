const text = "Saif Alam Ssaif Alam: -- Naif";

const blankSpace = text.replace(/[:\"\s-]+/g, "");

console.log(blankSpace);

//  Explanation:
// : → colon

// \" → double quote

// \s → any whitespace (spaces, tabs, line breaks)

// - → dash (you had -- in your string)

// + → one or more of the above

// g → global (replace all matches)
