const sudokuUnsolvedSeeds = [
  "g.ca..fi.ida.f........ch.a.dgf....bhb..f.i..da......e.hi..d..f.c.g.ife...b..ea...",
  "..b.ci.h......eg..a..hg..b..a.g.b..d....hc..afhi.dacg..bg.a....hdf.e..a....cf..d.",
  ".g.da...f...e...c.ef.h..ba..c...da..b.e....dcf..ich.bgd....g..ec.f..i...ib..def..",
  "f..bi..c..c.a.h..b..becf..h..cgb.ae.a....d...g....a.idif.hgb..cc......b..eg......",
  ".fd..b...b.ced...ig.....f..d....h.f...hi....a.i.f..hebic.d....he...a.d..ad....egc",
]

const sudokuSolvedSeeds = [
  "ghcabdfieidagfebhcefbichdagdgfeacibhbehfgiacdacidhbgefhiebdgcfacaghifedbfbdceahgi",
  "gfbdciahedihabegcfacehgfdbieacgibhfdbgdfhceiafhiedacgbcbgiadfehhdfbegiacieacfhbdg",
  "hgcdabiefadbeifgchefihgcbadgchbedafibiegfahdcfadichebgdhafbgciecefahidgbibgcdefha",
  "fahbigdceeciadhfgbdgbecfiahhdcgbiaefaifcedbhggbefhacidifahgbedcchdifegbabegdachfi",
  "hfdgibacebacedfghigeichafbddbeachifgfghibecdaciafgdhebicfdegbahehgbacdifadbhfiegc",
]

let sudokuStartBoard = []
let sudokuSolvedBoard = []

// stolen from the internet
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // random index 0..i
    [array[i], array[j]] = [array[j], array[i]];   // swap
  }
  return array;
}

function growSudokuSeed() {
  const rand = Math.floor(Math.random() * 5);
  sudokuStartBoard = sudokuUnsolvedSeeds[rand];
  sudokuSolvedBoard = sudokuSolvedSeeds[rand];

  // Assign a random number (their index after shuffling) to each letter
  let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
  shuffleArray(letters);

  // Replace seed letters with their assigned random number in boards
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    const number = (i + 1).toString();

    // Replace all occurrences of this letter in both boards
    sudokuStartBoard = sudokuStartBoard.split(letter).join(number);
    sudokuSolvedBoard = sudokuSolvedBoard.split(letter).join(number);
  }

  // Apply random mutations

}
