# Mini Book Maker

Make printable phonics mini-books for early readers. Pick the sight words and sounds a child is learning, choose a reading level, and get a short decodable story to print, cut in half and staple.

**Try it:** open `index.html` in any web browser, or use the website link on this page (if GitHub Pages is turned on).

## What it does

- **Sight words:** all 220 Dolch words, grouped Pre-K, Kindergarten, 1st, 2nd and 3rd grade.
- **Sounds to practice:** word families (-at, -ip, -un…), beginning blends (dr, st, fl…), ending blends (-nd, -mp…), digraphs (sh, ch, th…) and magic e (a_e, i_e…).
- **Reading levels:** Pre-K (read together), Kindergarten, 1st, 2nd and 3rd grade, with a choice of sentences per page.
- **Story:** every book tells one simple story with the same characters from start to finish.
- **Colors and checking:**
  - Sight words are printed in orange, and the chosen sound pattern in the book's color.
  - Words the child hasn't learned yet are flagged so you can change them.
- **Editing:** every page can be edited before printing.
- **Printable PDF:** two half-pages per sheet. Print single-sided, cut on the dotted line, stack the top halves with the bottom halves underneath, and staple.
- **Privacy:** it works offline and collects no data. Settings are remembered only in your own browser.

## Files

| File | What it is |
|---|---|
| `index.html` | The complete program in one file. |
| `source/src/app.js` | How the program works (story maker, word checker, PDF maker). |
| `source/src/page.html` | Page layout, colors and text. |
| `source/build.py` | Rebuilds `index.html` from the source. Run `python3 build.py` inside `source`. |
| `source/fonts/` | The Andika reading font and its license. |
| `source/lib/` | The jsPDF library and its license. |

## Copyright

Mini Book Maker © 2026 Yu Quan Chen. All rights reserved. See [LICENSE](LICENSE).

You're welcome to use the website to make books for your own children or classroom. Please don't copy, republish or sell the program or its code without permission.

## Credits

- **Andika** font © SIL International, used under the SIL Open Font License 1.1 (`source/fonts/OFL.txt`).
- **Lexend** font © The Lexend Project Authors, SIL Open Font License 1.1, loaded from Google Fonts.
- **jsPDF** © James Hall, yWorks GmbH and contributors, used under the MIT License (`source/lib/jsPDF-LICENSE.txt`).
- Sight words come from the Dolch word lists.

All stories are original text made by the program. Sentences per page are general guides by grade, not official reading-level ratings. This project isn't affiliated with any publisher of children's books or reading programs.
