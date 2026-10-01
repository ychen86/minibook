"""
Mini Book Maker (c) 2026 Yu Quan Chen. All rights reserved.

Rebuilds the two ready-to-use HTML files from the source code.
Run from this folder:   python3 build.py
Needs only Python 3 (no extra packages).

Makes:
  ../index.html                    - stand-alone file (the website). Works in any browser, even offline.
                                     "Download printable PDF" saves straight to the computer.
  claude-version.html  - the version published on claude.ai (loads the PDF library
                                     from a CDN and uses Claude's download and "Write with Claude" features).
"""
import base64, os

here = os.path.dirname(os.path.abspath(__file__))
rd = lambda *p: open(os.path.join(here, *p), encoding="utf-8").read()

a400 = base64.b64encode(open(os.path.join(here, "fonts", "Andika-400.ttf"), "rb").read()).decode()
a700 = base64.b64encode(open(os.path.join(here, "fonts", "Andika-700.ttf"), "rb").read()).decode()
page, app = rd("src", "page.html"), rd("src", "app.js")

# 1) Claude version: page content only (claude.ai adds the <html>/<head>/<body> wrapper).
claude = (page + "<script>\n" + app + "</script>\n").replace("__A400__", a400).replace("__A700__", a700)
open(os.path.join(here, "claude-version.html"), "w", encoding="utf-8").write(claude)

# 2) Stand-alone version: full HTML document, PDF library built in, normal browser download.
s = claude
jspdf = rd("lib", "jspdf.umd.min.js").replace("</script", "<\\/script")
s = s.replace('<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>',
              "<script>" + jspdf + "</script>")
old = "    await downloads.save({filename:fn,data:buf});"
new = ('    if(downloads){await downloads.save({filename:fn,data:buf});}\n'
       '    else{const url=URL.createObjectURL(new Blob([buf],{type:"application/pdf"}));const a=document.createElement("a");'
       'a.href=url;a.download=fn;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),4000);}')
assert old in s, "download line not found - check src/app.js"
s = s.replace(old, new)
boot = "(async()=>{\n  if(!window.claude||!window.claude.use)return;"
assert boot in s, "boot block not found - check src/app.js"
s = s.replace(boot, 'if(window.jspdf)$("btnPdf").hidden=false;\n' + boot)
s = s.replace('try{downloads=await claude.use("downloads");if(downloads&&window.jspdf)$("btnPdf").hidden=false}catch(e){}',
              'try{downloads=await claude.use("downloads")}catch(e){}')
i = s.index('<div class="wrap">')
out = ('<!doctype html>\n<html lang="en"><head><meta charset="utf-8">'
       '<meta name="viewport" content="width=device-width,initial-scale=1">\n'
       + s[:i] + "</head><body>\n" + s[i:] + "\n</body></html>\n")
open(os.path.join(here, "..", "index.html"), "w", encoding="utf-8").write(out)
print("Built ../index.html and claude-version.html")
