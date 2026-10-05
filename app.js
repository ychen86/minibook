const FONT400="__A400__", FONT700="__A700__";
const DOLCH=[
 ["Pre-K","Pre-K (pre-primer)","a and away big blue can come down find for funny go help here I in is it jump little look make me my not one play red run said see the three to two up we where yellow you"],
 ["K","Kindergarten (primer)","all am are at ate be black brown but came did do eat four get good have he into like must new no now on our out please pretty ran ride saw say she so soon that there they this too under want was well went what white who will with yes"],
 ["1st","1st grade","after again an any as ask by could every fly from give going had has her him his how just know let live may of old once open over put round some stop take thank them then think walk were when"],
 ["2nd","2nd grade","always around because been before best both buy call cold does don't fast first five found gave goes green its made many off or pull read right sing sit sleep tell their these those upon us use very wash which why wish work would write your"],
 ["3rd","3rd grade","about better bring carry clean cut done draw drink eight fall far full got grow hold hot hurt if keep kind laugh light long much myself never only own pick seven shall show six small start ten today together try warm"]
];
// tags: f food, F action done to food, b body part (kept for word lists), N animal/person, L place or container, n other thing, v action, T action done to something, d past action, a describing word, p name
const PATS=[
 {g:"Word families (short vowels)",k:"end",items:{
  "-at":"cat:N bat:N rat:N hat:n mat:L sat:d pat:T fat:a Pat:p","-an":"man:N fan:n pan:L van:L ran:d tan:a Dan:p Nan:p Fran:p",
  "-ap":"cap:n map:n trap:n lap:L nap:v clap:v flap:v tap:T zap:T","-ag":"bag:L rag:n flag:n wag:v tag:T drag:T",
  "-ad":"dad:N pad:L mad:a sad:a bad:a glad:a Brad:p Chad:p","-am":"ram:N clam:N jam:f ham:f yam:f Sam:p Pam:p",
  "-ack":"sack:L pack:n snack:f black:a Jack:p","-ip":"ship:L hip:b lip:b chip:b trip:v dip:v drip:n flip:v skip:v sip:F tip:T zip:T yip:v Kip:p Skip:p",
  "-it":"pit:L kit:n sit:v hit:T fit:a Kit:p","-in":"twin:N bin:L pin:n fin:n tin:n win:v spin:v grin:v",
  "-ig":"pig:N wig:n fig:f twig:n dig:v jig:v big:a","-id":"kid:N lid:n hid:d slid:d Sid:p",
  "-ick":"chick:N stick:n brick:n kick:T lick:F pick:T sick:a Rick:p quick:a","-op":"shop:L mop:n top:n hop:v pop:v stop:v drop:T",
  "-ot":"pot:L cot:L spot:L dot:n got:d hot:a Dot:p","-og":"dog:N frog:N hog:N log:L jog:v",
  "-ock":"rock:L block:n sock:n lock:n clock:n","-ug":"bug:N pug:N slug:N rug:L mug:L jug:L hug:T tug:T dug:d",
  "-un":"sun:n bun:f run:v spun:d fun:a","-ut":"hut:L nut:f cut:T shut:T","-ub":"cub:N tub:L club:n rub:T scrub:T sub:f",
  "-uck":"duck:N truck:L stuck:a Chuck:p","-en":"hen:N pen:L den:L Ben:p Jen:p Glen:p","-et":"pet:N vet:N jet:L net:n get:T wet:a Chet:p",
  "-ed":"bed:L sled:L shed:L red:a Ted:p Ned:p","-eg":"leg:b peg:n Meg:p","-ell":"bell:n shell:n yell:v smell:T fell:d Nell:p"}},
 {g:"Beginning blends",k:"start",items:{
  "bl":"block:n blob:n black:a Blake:p","cl":"clam:N clock:n club:n clip:b clap:v Clint:p","fl":"flag:n flap:v flip:v flop:v flat:a",
  "gl":"glob:n glad:a glum:a Glen:p","pl":"plum:f plug:n plop:v plump:a","sl":"slug:N sled:L slip:v slid:d slim:a",
  "br":"brick:n brush:n brag:v Brad:p Brent:p","cr":"crab:N crib:L crash:v","dr":"drum:n dress:n drip:n drag:T drop:T Drake:p",
  "fr":"frog:N fresh:a Fred:p Fran:p","gr":"grub:N grass:L grin:v grab:T grip:T Greg:p grunt:v","pr":"prop:n press:T print:T prod:T",
  "tr":"truck:L tram:L trap:n trip:v trot:v trim:T Trish:p Trent:p","sk":"skin:b skip:v skid:v Skip:p","sm":"smell:T smug:a",
  "sn":"snack:f sniff:v snap:T snip:T snug:a","sp":"spot:L spud:f spin:v spill:T","st":"stick:n stem:n stack:n stop:v step:v stuck:a Stan:p",
  "sw":"swim:v swam:d swift:a","tw":"twin:N twig:n"}},
 {g:"Ending blends",k:"end",items:{
  "-st":"nest:L vest:n list:n dust:n fast:a rest:v","-nd":"sand:L pond:L land:L hand:b band:n","-mp":"camp:L lamp:n bump:n jump:v stamp:v romp:v plump:a damp:a",
  "-nt":"tent:L plant:n hunt:v Clint:p Brent:p Trent:p grunt:v","-sk":"desk:L mask:n tusk:n","-ll":"hill:L bell:n doll:n fill:T spill:T Bill:p"}},
 {g:"Digraphs",k:"any",items:{
  "sh":"fish:N ship:L shop:L dish:L shed:L shell:n wish:v rush:v shut:T Josh:p Trish:p","ch":"chick:N chest:L chip:b chin:b chop:F rich:a Chad:p",
  "th":"moth:N bath:L path:L thin:a thick:a Beth:p","wh":"whip:T whisk:T","ck":"duck:N rock:L sock:n kick:T pick:T Chuck:p peck:v",
  "ng":"king:N ring:n wing:n song:n sing:v long:a"}},
 {g:"Magic e (long vowels)",k:"magic",items:{
  "a_e":"lake:L cave:L cake:f game:n gate:n bake:F Jake:p Kate:p Blake:p Drake:p","i_e":"slide:L bike:n kite:n hike:v Mike:p",
  "o_e":"home:L hole:L rope:n bone:n nose:b Rose:p","u_e":"mule:N cube:n tube:n cute:a Luke:p"}}
];
const BASE="cat:N dog:N pig:N hen:N bug:N sun:n hat:n cup:n box:L bed:L mat:L pot:L rug:L run:v hop:v sit:v dig:v nap:v tap:T sat:d ran:d got:d hid:d dug:d big:a red:a hot:a wet:a sad:a Sam:p Pat:p Tim:p Meg:p Ben:p Dot:p";
// templates: text + sight words the template needs (other fixed words are decodable)
// slots: {N} animal/person, {n} any thing, {L} place, {v} action, {T} action on something, {x} either action, {d} past action, {a} describing word, {p} main name, {p2} friend
const TPL=[
 ["I see a {n}.","i see a"],["I can {v}.","i"],["{p} can {v}.",""],["{x}, {p}, {x}!",""],["The {N} can {v}.","the"],
 ["{p} can {T} the {n}.","the"],["I can {T} the {n}.","i the"],["Can you {T} the {n}?","you the"],["We can {T} the {n}!","we the"],
 ["The {n} is {a}.","the is"],["{p} {d} on the {L}.","the"],["{p} {d} on a {L}.","a"],["Look at the {n}!","look the"],
 ["Look! A {a} {n}!","look a"],["Here is a {n}.","here is a"],["It is a {a} {n}.","is a"],["My {n} is {a}.","my is"],
 ["Can you {v}?","you"],["You can {v} too!","you too"],["I like the {n}.","i like the"],["I like my {N}.","i like my"],
 ["Where is the {n}?","where is the"],["The {n} is in the {L}.","the is"],["The {N} is on the {L}.","the is"],["Come and see the {N}!","come and see the"],
 ["She can {v}.","she"],["He can {v}.","he"],["We can {v}!","we"],["I want a {n}.","i want a"],["The {N} {d} away.","the away"],
 ["{p} said, \"Help!\"","said help"],["Is it a {n}?","is a"],["I have a {n}.","i have a"],["They {d} on the {L}.","they the"],
 ["This {n} is {a}.","this is"],["What is in the {L}?","what is the"],["Look at my {n}!","look my"],["Get the {n}, {p}!","the"],
 ["It is so {a}!","is so"],["{p} and {p2} can {v}.","and"],["{p} has a {a} {n}.","has a"],["{p} can {v} with the {N}.","with the"],
 ["Go, {N}, go!","go"],["Run, {p}, run!",""],["The {N} can not {v}.","the"],["Stop, {N}, stop!",""],["{p} got a {n}.","a"],
 ["{a} {n}! {a} {n}!",""],["We {d} to the {L}.","we to the"],["Down, down, down went the {n}.","down went the"],["I am {a}!","i"],
 ["Look, {p}! A {N}!","look a"],["Thank you, {p}!","thank you"],["The {n} is little.","the is little"],["{p} can jump.","jump"],
 ["Can the {N} play?","the play"],["Yes! The {N} can {v}.","yes the"],["No, no, {p}!","no"],["{p} can {T} it.",""],
 ["{p} got in the {L}.","the"],["{p} can {F} the {f}.","the"],["I can {F} a {f}.","i a"],["Yum! A {f}!","a"],["I like to {F} the {f}.","i like to the"],["{p} has a {f}.","has a"],["The {N} can {F} the {f}.","the"],["The {N} {d} on the {L}.","the"],["Up, up, up went the {N}!","up went the"]
];
const DOLCH_ALL=new Set(DOLCH.flatMap(d=>d[2].toLowerCase().split(" ")));
const COLORS=[["Teal","#007f8a"],["Blue","#2563b0"],["Green","#2f7d3a"],["Purple","#7a4bb7"],["Berry","#b8336a"]];
const IRREG=new Set("i a the he she we me be go no so to do of was is has his as said you are what who put pull full push want walk talk all ball call fall tall small old cold hold told kind find mind wild most post both only one two once any many they there their were where come some done does from son her".split(" "));
const $=id=>document.getElementById(id);
const store={get(k,d){try{const v=localStorage.getItem("mbm_"+k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem("mbm_"+k,JSON.stringify(v))}catch(e){}}};

// ---------- state ----------
const PATKIND={},BANK={};
PATS.forEach(g=>Object.entries(g.items).forEach(([id,str])=>{PATKIND[id]=g.k;BANK[id]=str.split(" ").map(x=>{const[w,t]=x.split(":");return{w,t}})}));
const BASEBANK=BASE.split(" ").map(x=>{const[w,t]=x.split(":");return{w,t}});
let S=Object.assign({grade:"Pre-K",sight:["a","I","the","is","see","and","can","look","my","go"],pats:["dr","-ip","-un"],name:"",pages:8,level:"K",spp:1,storyPick:"any",animalPick:"any",color:"#007f8a",letters:"abcdefghijklmnopqrstuvwxyz".split(""),book:null},store.get("state",{}));

// ---------- reading levels ----------
// Sentences per page by grade, from common guided-reading guidance. Pre-K children mostly listen,
// so Pre-K books are one short sentence to read together.
const LEVELS={
  "Pre-K":{short:"Pre-K",label:"Pre-K (read together)",min:1,max:1,def:1,maxWords:5,hint:"Pre-K children mostly listen and point. Read it to her, and let her find the words she knows."},
  "K":{short:"Kindergarten",label:"Kindergarten",min:1,max:3,def:1,maxWords:7,hint:"Kindergarten books have 1 to 3 short sentences on a page."},
  "1st":{short:"1st grade",label:"1st grade",min:3,max:8,def:4,maxWords:9,hint:"1st grade books have 3 to 8 sentences on a page, with a small picture."},
  "2nd":{short:"2nd grade",label:"2nd grade",min:8,max:15,def:8,maxWords:12,hint:"2nd grade pages are mostly text, 8 to 15 sentences. Longer stories are made of several short chapters."},
  "3rd":{short:"3rd grade",label:"3rd grade",min:15,max:20,def:15,maxWords:14,hint:"3rd grade pages are full paragraphs of 15 or more sentences. Longer stories are made of several short chapters."}
};
const levelCfg=()=>LEVELS[S.level]||LEVELS.K;
// split text into sentences, keeping anything inside quotes together ("Look! I see a fox!" said Jen.)
const splitSent=s=>{const out=[];let cur="",inQ=false;
  for(let i=0;i<s.length;i++){const ch=s[i];cur+=ch;if(ch==='"')inQ=!inQ;
    if(!inQ&&/[.!?"]/.test(ch)&&/\s/.test(s[i+1]||"")){const rest=s.slice(i+1).trimStart();
      if(/[.!?]"?$/.test(cur)&&!/^said\b/.test(rest)&&/^["A-Z]/.test(rest)){out.push(cur.trim());cur=""}}}
  if(cur.trim())out.push(cur.trim());return out};
const sentCount=s=>splitSent(s).length;

// ---------- word analysis ----------
// while a book is being made, the word lists stay the same, so these are worked out once
let GEN_CACHE=null;
const sightSet=()=>GEN_CACHE?GEN_CACHE.sight:new Set(S.sight.map(w=>w.toLowerCase()));
function patSpan(lc,id){
  const k=PATKIND[id];
  if(k==="start"){return lc.startsWith(id)?[0,id.length]:null}
  if(k==="end"){const p=id.replace("-","");const m=lc.match(new RegExp(p+"s?$"));return m?[m.index,m.index+p.length]:null}
  if(k==="any"){const i=lc.indexOf(id);return i>=0?[i,i+id.length]:null}
  if(k==="magic"){const m=lc.match(new RegExp(id[0]+"[^aeiou]e(s)?$"));return m?[m.index,m.index+3]:null}
  return null;
}
function findPat(lc){for(const id of S.pats){const s=patSpan(lc,id);if(s)return{id,s}}return null}
function lettersOk(lc){const L=GEN_CACHE?GEN_CACHE.letters:new Set(S.letters);return [...lc].every(ch=>L.has(ch))}
function decodable(lc){
  if(!/^[a-z]+$/.test(lc)||!lettersOk(lc)||IRREG.has(lc))return false;
  let w=lc;
  const magic=w.match(/^([^aeiou]*)([aeiou])([^aeiouwy])e(s)?$/);
  if(magic){return S.pats.includes(magic[2]+"_e")&&!/r/.test(magic[3])}
  if(/.y/.test(w))return false;
  if(/[aeiou]r/.test(w)||/[aeiou][wy]/.test(w)||/^(w|sw|qu)a/.test(w)||/all?s?$|alk|ald|alt|ind|ild|igh|old|ost$/.test(w))return false;
  const vowels=w.match(/[aeiou]/g)||[];
  if(vowels.length!==1)return false;
  return /^[^aeiou]{0,3}[aeiou][^aeiou]{0,4}$/.test(w);
}
function classify(token){
  if(GEN_CACHE){const c=GEN_CACHE.cl.get(token);if(c)return c;const r=classify0(token);GEN_CACHE.cl.set(token,r);return r}return classify0(token)}
function classify0(token){
  const pre=(token.match(/^[^A-Za-z']*/)||[""])[0];const core=token.slice(pre.length).replace(/[^A-Za-z'].*$/,"");const post=token.slice(pre.length+core.length);
  const lc=core.toLowerCase();
  if(!core)return{segs:[{t:token,k:"plain"}],word:null};
  if(sightSet().has(lc))return{segs:[{t:token,k:"sight"}],word:{w:core,lc,k:"sight"}};
  const p=findPat(lc);const dec=decodable(lc)||(p&&lettersOk(lc)&&!IRREG.has(lc)&&(lc.match(/[aeiou]/g)||[]).length<=2&&!/[aeiou]r/.test(lc));
  const tricky=!dec;
  if(p){const[a,b]=p.s;return{segs:[{t:pre+core.slice(0,a),k:"plain"},{t:core.slice(a,b),k:"pat"},{t:core.slice(b)+post,k:"plain"}].filter(x=>x.t),word:{w:core,lc,k:"pat",tricky}}}
  return{segs:[{t:token,k:"plain"}],word:{w:core,lc,k:tricky?"tricky":"dec",tricky}};
}
function analyze(text){return text.split(/\s+/).filter(Boolean).map(classify)}

// ---------- offline story engine ----------
const rnd=a=>a[Math.floor(Math.random()*a.length)];
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
function usable(e){const lc=e.w.toLowerCase();return lettersOk(lc)&&(decodable(lc)||!!findPat(lc))&&!sightSet().has(lc)}
const TAGS={n:["n","N","L","f"],f:["f"],F:["F"],N:["N"],L:["L"],v:["v"],T:["T"],x:["v","T"],d:["d"],a:["a"],p:["p"]};
function candidates(tag,focus){
  const ok=e=>TAGS[tag].includes(e.t)&&usable(e);
  const f=(BANK[focus]||[]).filter(ok);
  const any=S.pats.flatMap(id=>BANK[id]||[]).filter(ok);
  const base=BASEBANK.filter(ok);
  return{f,any,base};
}
// ---------- story engine: real little plots ----------
// Each plot is a list of story beats in order. A beat has several ways to say the same thing,
// using different sight words. The engine picks one cast (a name, an animal, a place...) and keeps it
// for the whole book, so the sentences follow one story. Beats marked with a lower priority (2, 3)
// can be dropped for short books; beats in the same group are kept or dropped together.
// Slots: {P} main name, {P2} friend, {A} animal, {Q} word that describes the animal, {V} something the animal does,
// {O} a thing, {L} and {L2} places (with {on}/{on2} = "on" or "in"), {C} a ride, {X} a place to visit, {F} a food.
const PLOTS=[
 {id:"lost",titles:["Where Is the {A}?","{P} and the {A}","The {Q} {A}","The {A}","{A}! {A}!"],beats:[
  [1,"INTRO","{P} has a {A}.|This is {P}. {P} has a {A}.|Here is {P}. Here is the {A}.|Look! It is {P} and a {A}.|{P} has a little {A}.|Look at {P} and the {A}.|{P} has a big {A}.|Once upon a time, {P} had a {A}."],
  [0,"SPOT","v@able:The {A} can {w}.|a@adj:The {A} is {w}.|n@toys:The {A} has a {w}."],
  [2,"","The {A} is {Q}.|It is a {Q} {A}.|The {A} is so {Q}!|The {A} is very {Q}.|What a {Q} {A}!|The {A} is little and {Q}.|It is a funny little {A}.|The {A} is black and white.|The {A} is brown and white.|It is a small {A}.|The {A} is old and {Q}.|The {A} is small and {Q}."],
  [3,"","The {A} can {V}.|See the {A} {V}!|Look at the {A} {V}!|{V}, {A}, {V}!|The {A} will {V} and {V}.|The {A} can run and jump.|Look! The {A} can jump!|The {A} is so funny!"],
  [3,"O","{P} got a {O} for the {A}.|Here is a {O} for the {A}.|{P} made a {O} for the {A}.|{P} gave the {A} a {O}.|It is a {O} for the {A}.|{P} made a red {O} for the {A}.|Here is a little {O} for the {A}.|{P} got a blue {O} for the {A}.|Look! A yellow {O} for the {A}!"],
  [3,"O","The {A} can play with the {O}.|The {A} is glad. It can play with the {O}.|The {A} can sit on the {O}."],
  [1,"","Then the {A} ran away!|The {A} is not here!|The {A} ran away!|Help! The {A} ran away!|Where did the {A} go?|The {A} ran away! Where did it go?|Down, down, down! The {A} ran away.|Whiz! The {A} ran away!|The {A} ran off!|Look! The {A} ran off!"],
  [0,"SPOT","x@prints:Look! Little {w}!"],
  [2,"","Where is the {A}?|{P} is sad.|{P} is so sad.|{P} said, \"Come here, {A}!\"|\"Come back, {A}!\" said {P}.|\"Where is my {A}?\" said {P}.|\"I can not find my {A}!\" said {P}.|{P} will call the {A}.|\"Where are you going, {A}?\" said {P}."],
  [1,"","Is it {on} the {L}?|{P} ran to the {L}.|Look {on} the {L}!|Is the {A} {on} the {L}?|{P} went to the {L}.|\"I will look {on} the {L},\" said {P}.|{P} can look {on} the {L}.|Is it under the {L}?|{P} looks all around.|First {P} looks {on} the {L}."],
  [0,"SPOT","in@homebox:Is it in the {w}? No!|by@lostfar:Is it by the {w}? No!|x@snap:Snap! A {w}! Is it the {A}?"],
  [0,"TALK","effort"],
  [2,"","No, it is not.|It is not there.|No {A}!|No, the {A} is not there.|It is not {on} the {L}."],
  [3,"H","{P} will ask {P2}.|{P} ran to get {P2}.|{P2} came to help.|\"Can you help me, {P2}?\" said {P}."],
  [3,"H","{P2} can help.|\"Yes, I will help!\" said {P2}.|{P2} said, \"We will find it!\"|\"I can help you find it,\" said {P2}."],
  [1,"","~They look {on2} the {L2}.|~They ran to the {L2}.|Is it {on2} the {L2}?|Look {on2} the {L2}!|~They went to the {L2}.|{P} went to the {L2}.|~One, two, three! Look {on2} the {L2}!|~They run to the {L2}.|~Come on! Go to the {L2}!"],
  [2,"","Yes! There it is!|Look! There is the {A}!|Here it is!|Yes! It is the {A}!|There is the {A}!|{P} found the {A}!|They found it!"],
  [1,"","The {A} is up {on2} the {L2}.|The {A} sat up {on2} the {L2}.|Look! The {A} is up {on2} the {L2}!"],
  [3,"","The {A} can not get down.|The {A} is stuck.|Come down, {A}!|Jump down, {A}!|The {A} can not jump down.|Come down, {A}! Jump!"],
  [1,"","{P} can hug the {A}.|{P} got the {A}.|Come here, {A}!|{P} is glad. The {A} is glad.|{P} gave the {A} a hug.|{P} can hug the {A}. \"You are my {A}!\"|\"Come here, my little {A}!\" said {P}.|{P} can rub the {A}.|{P} can pet the {A}.|{P} can pick up the {A}.|{P} can carry the {A} back.|{P} will never let it go!"],
  [0,"TALK","happy"],
  [0,"SPOT","c@care:{P} can {w} the {A}.|f@food:The {A} ate a {w}.|f@crunchy:Crunch! The {A} ate a {w}."],
  [3,"","Here is a {F} for you, {A}.|{P} gave the {A} a {F}.|The {A} ate a {F}.|The {A} can eat a {F}. Yum!|The {A} ate a {F}. Yum!|{P} and the {A} eat a {F}."],
  [2,"","Thank you, {P2}!|\"Thank you!\" said {P}.|They ran back to the {L}.|Now they can play.|Now the {A} can {V}."],
  [1,"","{P} and the {A} nap. The end.|\"I like you, {A}!\" said {P}.|Now the {A} can nap.|The {A} is glad to be back.|The end.|\"I like my {A}!\" said {P}.|\"You are my funny little {A}!\" said {P}.|\"We are home!\" said {P}."]]},
 {id:"trip",wild:true,titles:["A Trip to the {X}","The {X} Trip","{P} and the {A}","The {A}"],beats:[
  [1,"","{P} and {P2} go on a trip.|{P} and {P2} will go on a trip.|{P} and {P2} want to go on a trip.|Today {P} and {P2} go on a trip."],
  [0,"SPOT","n@tripgear:{P} packs a {w}."],
  [1,"","They get in the {C}.|They go in the {C}.|Get in the {C}!|In the {C} they go.|They ride in the {C}.|They go in a big red {C}.|Here is a big {C}. Get in!|They get in their {C}."],
  [2,"","The {C} can go fast.|Go, {C}, go!|The {C} went up and down.|It is a big {C}.|The {C} is so fast!|Go, go, go!|One, two, three, go!|Up and down, up and down!|Whiz! Go, {C}, go!|Bump, bump, bump! Up and down!|They sing a song in the {C}.|It is a long trip.|Zip! The {C} can go!|Ding, ding! Go, {C}, go!"],
  [1,"","They stop at the {X}.|They get to the {X}.|Here is the {X}!|Look at the {X}!|They are at the {X}.|Stop! Here is the {X}!|They jog up to the {X}."],
  [0,"SPOT","n@here:{P} can see a {w}."],
  [0,"SPOT","x@prints:Look! Little {w}! What is it?"],
  [3,"","It is a big {X}.|The {X} is so big!|The {X} is pretty.|What a pretty {X}!|It is warm at the {X}."],
  [1,"","{P} can see a {A}.|Look! A {A}!|What is that? It is a {A}!|Look! There is a {A}.|{P2} saw a {A}.|\"Look! I see a {A}!\" said {P}.|\"I see a little {A}!\" said {P}."],
  [0,"SPOT","v@able:The {A} can {w}.|a@adj:The {A} is {w}."],
  [2,"","The {A} is {Q}.|It is a {Q} {A}.|The {A} is so {Q}!|What a {Q} {A}!|It is a funny little {A}.|The {A} is big and {Q}."],
  [1,"","The {A} can {V}.|Look at the {A} {V}!|See the {A} {V}!|{V}, {A}, {V}!|The {A} can run and jump.|Look! The {A} can jump!"],
  [2,"","{P2} said, \"I want to {V} too!\"|\"Can we {V} too?\" said {P}.|\"We can {V} too!\" said {P2}.|\"Let us {V}!\" said {P}.|\"I want to play!\" said {P}.|\"Can I play too?\" said {P2}."],
  [1,"","They {V} with the {A}.|{P} and {P2} {V} with the {A}.|Now they all {V}!|They all {V} together."],
  [0,"TALK","fun"],
  [0,"SPOT","f@food:They eat a {w}.|f@crunchy:Crunch, crunch! They eat a {w}."],
  [2,"","It is so fun!|This is fun!|What fun!|They laugh and laugh.|It is so much fun!|It is so funny!|They play and play!"],
  [3,"F","Here is a {F}. Yum!|They eat a {F}.|{P} has a {F}.|{P} got a {F} for the {A}.|They all ate a {F}.|{P} has a {F}. It is good!"],
  [3,"F","The {A} ate it all!|The {A} ate the {F}!|Yum, yum! The {A} ate it.|The {A} can eat it too."],
  [2,"","Now they must go.|They must go back.|\"Get in the {C}! We must go!\" said {P}.|\"Come on, we must go!\" said {P}.|It is dusk. They must go back."],
  [3,"","The {A} is sad.|\"We will come back!\" said {P}.|\"We will come back, {A}!\" said {P2}.|Thank you, {A}!|\"See you soon!\" said {P}."],
  [1,"","They go back in the {C}.|{P} and {P2} go back in the {C}.|Back they go in the {C}.|They ride back in the {C}.|They walk back to the {C}."],
  [0,"TALK","happy"],
  [1,"","What a fun trip!|What fun! The end.|It is fun to go on a trip. The end.|It was a good trip.|It was a fun trip. The end.|\"I like the {X}!\" said {P2}.|\"We are home!\" said {P}. The end.|They are home. What a fun trip!|It is a fun trip. The end."]]},
 {id:"cook",titles:["{P} and the {K}","The {K}","{P} Can Make a {K}","The {A}"],beats:[
  [1,"","{P} can make a {K}.|{P} can mix a {K}.|\"Let us make a {K}!\" said {P}.|{P} will make a {K}.|Today {P} will make a {K}.|\"I can make a {K}!\" said {P}.|{P} will make a big {K}."],
  [0,"SPOT","f@food:{P} gets a {w} too."],
  [2,"","{P} got a pot and a pan.|{P} gets a big pot.|Here is a pot. Here is a pan.|Get the pot, {P}!|{P} gets a jug. Twist the lid!|Use a big pot, {P}."],
  [1,"","Put it in the pot.|Plop! It is in the pot.|In it goes!|Put it all in!|{P} put it in the pot.|Crack an egg in the pot!"],
  [0,"SPOT","f@food:Put in a {w}!|c@cook:{P} can {w} it.|c@cook:{w} it, {P}!"],
  [0,"TALK","effort"],
  [2,"","Mix, mix, mix!|Mix it up, {P}!|{P} can mix it.|{P} will mix and mix.|{P} can sing and mix."],
  [1,"","The {A} ran in.|In came the {A}.|Look! A {A} came in.|Here is a {A}.|A {A} ran in.|In came a funny little {A}.|Look! A {A} came in to play."],
  [0,"SPOT","v@able:The {A} can {w}.|a@adj:The {A} is {w}."],
  [3,"INTRO","The {A} is {Q}.|It is a {Q} {A}.|The {A} is so {Q}!"],
  [1,"","The {A} can smell it.|Sniff, sniff! The {A} can smell it.|The {A} can smell the {K}."],
  [0,"SPOT","n@cookgrab:Look! The {A} got the {w}!"],
  [1,"","{P} said, \"No, {A}! Not yet!\"|\"Not yet, {A}!\" said {P}.|\"Stop, {A}!\" said {P}.|\"No, no, {A}!\" said {P}.|Get off, {A}! It is hot!"],
  [2,"","The {A} is sad.|The {A} sat and sat.|The {A} sat down. It is sad.|The {A} can not have it yet."],
  [3,"","Tick, tock! Look at the clock.|Tick, tock, tick, tock!|They sit and look at the clock."],
  [1,"","Now the {K} is hot.|Ding! It is done!|It is done!|Now it is done!|The {K} is hot!|The {K} is done!|\"Look! I made a {K}!\" said {P}.|The {K} is big and hot."],
  [3,"","{P} cut the {K}.|Cut, cut, cut!|{P} can cut it.|{P} will cut it up.|\"Can I have some?\" said the {A}."],
  [2,"","\"One for me and one for you!\" said {P}.|Yum! The {A} got a bit.|Here is one for you, {A}.|\"This is for you,\" said {P}.|{P} gave the {A} a bit.|\"Is there any for me?\" said {P2}."],
  [1,"","The {A} is glad.|Yum, yum, yum!|The {A} is so glad!|It is good!"],
  [0,"SPOT","f@food:The {A} ate a {w} too.|f@crunchy:Crunch, crunch! The {A} ate a {w}.|c@care:{P} can {w} the {A}."],
  [0,"TALK","happy"],
  [1,"","{P} and the {A} ate it all.|{P} and the {A} munch and munch.|They ate it all up.|{P} and the {A} are full.|What a good {K}!|They ate it all. They are full!"],
  [3,"","{P} can scrub the pot.|{P} will wash the pot.|Now {P} must scrub the pan.|Scrub, scrub! The pot is clean."],
  [2,"","The end.|Now they nap. The end.|{P} and the {A} nap."]]},
 {id:"mud",titles:["The {A} and the Mud","Mud!","{P} and the {A}","The {A}"],beats:[
  [1,"INTRO","{P} has a {A}.|This is {P} and the {A}.|Here is {P}. Here is a {A}.|Look at {P} and the {A}.|Once upon a time, {P} had a {A}."],
  [0,"SPOT","v@able:The {A} can {w}.|a@adj:The {A} is {w}."],
  [2,"INTRO","The {A} is {Q}.|It is a {Q} {A}.|The {A} is so {Q}!"],
  [1,"","The {A} ran in the mud.|The {A} can jump in the mud.|Look! The {A} is in the mud.|Jump! The {A} is in the mud!|\"Look! My {A} is in the mud!\" said {P}.|Jump, jump, jump! The {A} is in the mud.|The {A} ran and jumped in the mud.|The {A} can dig in the mud."],
  [0,"SPOT","in@yard:The {A} ran to the {w}."],
  [0,"TALK","fun"],
  [2,"","Mud, mud, mud!|The {A} got mud on it.|It is so fun!|The {A} will not stop.|The {A} can run and jump in the mud.|It is so funny!"],
  [1,"","Now the {A} is a mess.|The {A} is a big mess!|Look at the {A}. What a mess!|Now the {A} is a mess. Look! Mud prints!"],
  [1,"","{P} said, \"You must get in the tub!\"|\"Get in the tub, {A}!\" said {P}.|\"Come here, {A}!\" said {P}.|{P} gets the tub.|Tub, {A}! Get the tub!"],
  [2,"","The {A} will not get in.|The {A} ran and ran.|The {A} ran away!|\"No, no, no!\" said the {A}.|Whiz! The {A} ran away!"],
  [2,"","{P} ran after it.|{P} ran and ran.|Come back, {A}!|Stop, {A}, stop!|{P} can drag the {A} back."],
  [1,"","{P} fell in the mud!|Plop! {P} fell in the mud.|Down went {P} in the mud!|Splat! {P} fell in the mud."],
  [2,"","Now {P} is a mess too!|Look at {P}! What a mess!|{P} is a mess. The {A} is a mess."],
  [1,"","They both get in the tub.|Into the tub they go!|They get in the tub.|{P} and the {A} get in the tub.|They get in the tub and sing."],
  [0,"SPOT","n@tubtoys:{P} got a {w} for the tub."],
  [2,"","Scrub, scrub, scrub!|Rub, rub, rub!|{P} can scrub the {A}.|{P} gets a rag. Rub, rub, rub!|{P} can brush the {A}.|Wash, wash, wash!|{P} can wash the {A}."],
  [1,"","Now they are not a mess.|Now it is not a mess.|The {A} is not a mess!|Now they are clean.|Now the {A} is clean.|The {A} is wet, but it is clean."],
  [0,"TALK","happy"],
  [3,"","{P} and the {A} are wet.|The {A} is wet. {P} is wet.|They sit in the sun."],
  [1,"","{P} and the {A} nap. The end.|Now they can nap. The end.|The {A} is glad. The end.|Do not get in the mud, {A}!|\"You are my little {A}!\" said {P}.|They are clean. The end.|It is dusk. They nap. The end."]]},
 {id:"gift",friend:true,titles:["A Gift for {P2}","The Big Box","The Gift"],beats:[
  [1,"","{P} has a gift for {P2}.|Look! A gift!|{P} got a gift.|{P} got a gift for {P2}.|Look! {P} has a gift for {P2}.|\"This gift is for {P2},\" said {P}.|Here is a gift for {P2}.|{P} will bring a gift to {P2}."],
  [2,"","It is in a big box.|The gift is in a box.|What is in the box?|It is a big red box.|The box is big. The box is red.|A red band is on the box.|{P} can carry the big box."],
  [3,"","Look! A {A} sat on the box.|A {A} can smell the box.|The {A} sat on the box.|The {A} can smell the box.|\"Get off the box, {A}!\" said {P}.|The {A} can rub on the box."],
  [0,"SPOT","v@able:The {A} can {w}.|a@adj:The {A} is {w}."],
  [1,"","{P} ran to {P2}.|{P} went to see {P2}.|{P} and the {A} ran to {P2}.|Here is {P2}!|{P} can see {P2}."],
  [1,"","\"This is for you!\" said {P}.|\"Here, {P2}!\" said {P}.|\"Here, {P2}! It is for you!\" said {P}.|{P} gave {P2} the box.|\"A gift for me?\" said {P2}.|{P} hands {P2} the box."],
  [0,"SPOT","n@toys:\"Is it a {w}?\" said {P2}."],
  [2,"","{P2} is so glad.|\"Thank you!\" said {P2}.|{P2} said, \"Can I open it?\"|\"Can I open it now?\" said {P2}.|\"Are these for me?\" said {P2}."],
  [1,"","{P2} can not get it open.|The box will not open.|{P2} tugs and tugs.|Tug, tug, tug!|The lid is stuck.|{P2} can pull and pull."],
  [0,"TALK","effort"],
  [0,"SPOT","x@stuck:{w}, {w}! It is stuck.|n@toys:\"Is it a {w}?\" said {P}."],
  [2,"","\"I will help!\" said {P}.|{P} can help.|They both tug.|{P} and {P2} tug and tug.|{P} can cut the string."],
  [1,"","Pop! It is open!|Pop! The box is open.|Now it is open!|Yes! It is open.|Pop! Got it!|Pop! The lid came off."],
  [1,"","It is a {O}!|In the box is a {O}!|Look! A {O}!|What is it? It is a {O}!|It is a little {O}!|It is a new {O}!"],
  [0,"TALK","happy"],
  [2,"","\"I like it!\" said {P2}.|{P2} is so glad!|\"Thank you, {P}!\" said {P2}.|It is the best gift!"],
  [3,"","The {A} got in the box!|Look! The {A} is in the box.|The {A} jumps in the box.|Whiz! The {A} is in the box.|The {A} got a spot in the box!|Now the {A} can nap in the box."],
  [0,"SPOT","c@care:{P2} can {w} the {A}."],
  [1,"","They play with the {O}.|It is fun! The end.|{P} and {P2} play with the {O}.|They can play and play.|What a fun gift! The end.|They all play. The end.|They play with the {O} in the sun."]]},
 {id:"garden",titles:["The Little Plant","{P} and the Plant","The Plant"],beats:[
  [1,"","{P} has a little plant.|{P} got a plant.|Look! {P} has a plant.|Here is a little plant.|\"I have a plant!\" said {P}."],
  [0,"SPOT","in@pots:The plant is in a {w}."],
  [2,"","It is a little green plant.|The plant is so little.|It is not big yet.|Here is a flag for the plant."],
  [1,"","{P} will dig.|Dig, dig, dig!|{P} can dig a pit.|{P} digs in the sand.|\"I will dig a pit,\" said {P}."],
  [1,"","Put the plant in the pit.|In it goes!|{P} sets the plant in the pit.|Now the plant is in."],
  [2,"","Pat it down. Pat, pat, pat!|Pat, pat, pat!|{P} can pat it down."],
  [1,"","The plant must get wet.|{P} can fill a cup.|Drip, drip, drip!|Splish, splash!"],
  [2,"","The plant gets sun.|The sun is hot.|The sun is on the plant.|Look at the sun!|{P} can sing to the plant."],
  [1,"","Then the {A} came.|Look! It is the {A}!|In came the {A}.|Here is the {A}.|Whiz! In came the {A}."],
  [0,"SPOT","v@able:The {A} can {w}.|a@adj:The {A} is {w}."],
  [1,"","The {A} digs in the sand!|The {A} can dig too.|Dig, dig! The {A} digs up the plant!|The {A} dug up the plant!"],
  [0,"SPOT","x@dugup:The {A} dug up a {w}!|x@prints:Look! {A} {w} in the sand!"],
  [1,"","\"Stop, {A}!\" said {P}.|\"No, no, {A}!\" said {P}.|Stop, {A}! Stop!|\"Not the plant!\" said {P}."],
  [2,"","{P} is sad.|The plant is not in the pit.|{P} can fix it.|{P} will fix it."],
  [1,"","{P} sets it back in.|{P} puts it back.|{P} can put it back in the pit.|Back in it goes!"],
  [2,"","The {A} will not dig. The {A} sits.|The {A} sits and sits.|\"Good {A}!\" said {P}.|Now the {A} is good."],
  [1,"","The plant can grow and grow.|Now the plant is big!|Look! The plant is so big!|Look! A red bud!|Today the plant is big!|Keep it wet and it will grow."],
  [0,"SPOT","f@food:{P} ate a {w} in the sun.|f@crunchy:Crunch! {P} ate a {w}.|c@care:{P} can {w} the {A}."],
  [0,"TALK","happy"],
  [1,"","{P} is glad. The end.|\"What a pretty plant!\" said {P}. The end.|{P} and the {A} sit in the sun. The end.|Now it is a big plant. The end.|It is dusk. {P} is glad. The end.|They sit on a log. The end."]]},
 {id:"pond",friend:true,wild:true,animals:["frog","duck","crab","bug","slug","fox"],titles:["At the Pond","The Pond","{P} and the {A}"],beats:[
  [1,"","{P} and {P2} go to the pond.|Today {P} and {P2} go to the pond.|{P} and {P2} will go to the pond.|{P} and {P2} go and see the pond."],
  [0,"SPOT","in@pondgear:They have a {w} too."],
  [2,"","They get a net.|{P2} has a net.|They have a big net.|{P} gets a net and a cup."],
  [1,"","Look! A {A}!|{P} can see a {A}.|What is that? It is a {A}!|There is a {A} on a log.|\"I see a {A}!\" said {P2}."],
  [0,"SPOT","v@able:The {A} can {w}.|a@adj:The {A} is {w}."],
  [0,"SPOT","n@pondsee:{P2} can see a {w} in the pond.|x@prints:Look! Little {w} in the mud!"],
  [2,"","The {A} is {Q}.|It is a {Q} {A}.|What a {Q} {A}!|It is a funny little {A}."],
  [1,"","\"Can I get it?\" said {P}.|{P} will get it in the net.|\"I will get it!\" said {P}.|{P} can get it.|\"Do not fall in!\" said {P2}."],
  [0,"TALK","effort"],
  [1,"","Swish! {P} got it!|Swish, swish! In the net it goes.|{P} got the {A} in the net!|Swish! Got it!"],
  [1,"","Hop, hop! The {A} is not in the net!|Hop! The {A} got away!|The {A} hops out!|The {A} jumps out of the net.|Hop! It got out!|The {A} got out!|Whiz! The {A} got away!|Splash! The {A} got off!"],
  [1,"","{P2} ran to get it.|{P2} will get it.|\"I will get it!\" said {P2}.|{P2} ran and ran."],
  [1,"","Splash! {P2} fell in the pond!|Splash! {P2} is in the pond!|Down went {P2}. Splash!|{P2} slips. Splash!|Flop! {P2} fell in the pond!"],
  [1,"","{P2} is wet!|Now {P2} is so wet!|Look at {P2}! {P2} is wet!|\"I am wet!\" said {P2}.|{P2} is wet and cold!"],
  [0,"TALK","fun"],
  [2,"","They laugh and laugh.|It is so funny!|{P} and {P2} laugh.|What fun!|Ha, ha, ha!|It is fun!|They clap and laugh.|They sit in the sun and laugh."],
  [2,"","The {A} sat on a log.|Look! The {A} is on a log.|The {A} can see them.|The {A} is glad."],
  [0,"SPOT","f@food:They eat a {w}.|f@crunchy:Crunch, crunch! They eat a {w}."],
  [3,"","\"Let it go,\" said {P}.|They let it go.|The {A} can live in the pond."],
  [1,"","They must go back.|{P} and {P2} ran back.|They ran back.|Now they go back.|The sun is down. They must go back.|It is dusk. They must go back.|They sing and go back.|They walk back."],
  [1,"","It was fun at the pond. The end.|It is fun at the pond. The end.|What fun! The end.|\"We will come back!\" said {P}. The end."]]},
 {id:"camp",friend:true,titles:["{P} Can Camp","At Camp","The Tent"],beats:[
  [1,"","{P} and {P2} will camp.|Today {P} and {P2} go to camp.|{P} and {P2} go to camp."],
  [1,"","They set up a tent.|Here is the tent.|They get the tent up.|Up goes the tent!|They get sticks and twigs.|They set up their tent.|\"This is our tent!\" said {P}.|{P} and {P2} get a tent."],
  [2,"","It is a big tent.|The tent is red.|The tent is so big!|What a big tent!"],
  [2,"","They get in the tent.|In they go!|They sit in the tent.|{P} and {P2} sit in the tent.|They have a light in the tent."],
  [1,"","It is dusk.|Now it is dusk.|The sun is not up. It is dusk.|It is dusk at camp."],
  [0,"SPOT","f@food:They eat a {w}.|f@crunchy:Crunch, crunch! They eat a {w}.|in@campgear:They have a {w} in the tent."],
  [2,"","They sit and sing.|They sing a song.|{P} and {P2} sing and sing.|They have a snack.|They sit on a log.|They sit on a rock and sing."],
  [1,"","What is that?|\"What is that?\" said {P2}.|Tap, tap, tap!|Is it a bug?|\"Is it a big bug?\" said {P}.|What is that? Look! Little prints!"],
  [1,"","It is in the tent!|It ran in the tent!|Look! It is on {P}!|It jumps on {P}!|Whiz! It ran in the tent!"],
  [0,"TALK","surprise"],
  [1,"","No! It is the {A}!|It is the {A}!|Look! It is the {A}!|Ha! It is the {A}!|It is only the {A}!|Ha! The {A} came in!"],
  [0,"SPOT","v@able:The {A} can {w}.|a@adj:The {A} is {w}."],
  [0,"TALK","fun"],
  [2,"","The {A} came to camp too.|The {A} ran in the tent.|\"You came too!\" said {P}.|The {A} is glad.|{P} can rub the {A}.|{P} can pet the {A}."],
  [2,"","They laugh and laugh.|It is so funny!|What a funny {A}!|They all laugh.|Ha, ha, ha!|It is fun!"],
  [1,"","They nap in the tent.|{P}, {P2} and the {A} nap.|All of them nap in the tent.|They all nap. Hush."],
  [1,"","What a fun camp! The end.|Hush. The end.|It was a good camp. The end."]]},
 {id:"race",friend:true,titles:["Run, {P}, Run!","The Fast {A}","Who Is Fast?"],beats:[
  [1,"","{P} and {P2} will run.|{P} and {P2} run fast.|Today {P} and {P2} will run."],
  [2,"","Get set!|Get set. Go!|One, two, three, go!|Set, go!|Here is the flag. Get set!"],
  [1,"","{P} runs fast.|{P} can run so fast!|Run, {P}, run!|Look at {P} run!"],
  [1,"","{P2} runs fast too.|{P2} is fast too!|Run, {P2}, run!|{P2} can run fast.|{P2} is as fast as {P}!"],
  [2,"","Look! A {A} runs with them!|A {A} is fast too!|The {A} runs with them.|The {A} can run too!|Look! The {A} is fast!|The {A} is so fast!"],
  [0,"SPOT","v@able:The {A} can {w}.|a@adj:The {A} is {w}."],
  [1,"","{P} trips on a rock.|{P} trips on a stick.|Bump! {P} fell.|Down went {P}!|{P} trips on a twig.|{P} trips on a log.|Bump! {P} trips on a rock."],
  [1,"","{P} is sad.|{P} is not glad.|\"I fell,\" said {P}.|{P} sits on the grass.|Is {P} hurt?"],
  [1,"","{P2} stops.|{P2} ran back to {P}.|{P2} will help {P} get up.|\"I will help you,\" said {P2}."],
  [0,"TALK","effort"],
  [2,"","{P2} helps {P} up.|{P} gets up.|Up, up, {P}!|Now {P} can run.|{P2} can rub the bump.|{P} can hop up."],
  [1,"","They run on.|{P} and {P2} run and run.|They run and run.|Now they run on and on.|They run up the hill.|They make prints in the sand."],
  [0,"SPOT","in@runto:They run up to the {w}."],
  [0,"TALK","happy"],
  [2,"","It wins! The {A} is the best!|The {A} wins!|Look! The {A} got there!|The {A} is the best!|Whiz! The {A} is the best!|Ding, ding! The {A} wins!|The {A} is first!"],
  [1,"","They all laugh.|Ha, ha, ha!|\"The {A} is so fast!\" said {P}.|It is so funny!|They laugh and laugh."],
  [0,"SPOT","f@food:They all eat a {w}.|f@crunchy:Crunch, crunch! They eat a {w}."],
  [1,"","What a fun run! The end.|They all rest. The end.|\"We can run with the {A}!\" said {P2}. The end.|It was a fun run. The end.|They all rest. It is dusk. The end.|They sing and rest. The end.|They drink and rest. The end.|They were so glad. The end.|It is a fun run. The end."]]},
 {id:"bed",titles:["{P} Can Not Nap","Hush, {A}!","In Bed"],beats:[
  [1,"","{P} is in bed.|{P} gets in bed.|It is dusk. {P} is in bed.|{P} sits in bed.|The sun is not up. {P} is in bed."],
  [0,"SPOT","n@bedtoys:{P} has a {w} in bed too.|n@bedtoys:A {w} is in the bed too."],
  [2,"","{P} has a doll.|{P} has a little doll in bed.|The doll is in bed too.|{P} hugs the doll.|{P} hugs a rag doll.|The doll is in a little crib."],
  [1,"","{P} can not nap.|{P} will not nap.|\"I can not nap!\" said {P}.|Nap? Not yet!|Tick, tock! {P} can not nap.|{P} can not sleep.|\"I can not sleep!\" said {P}.|{P} will read in bed."],
  [1,"","Tap, tap, tap!|What is that?|\"What is that?\" said {P}.|Bump, bump, bump!"],
  [2,"","Is it a bug?|Is it a big bug?|Look! Little prints on the rug!"],
  [1,"","{P} gets up.|{P} can look.|Up gets {P}.|{P} will get up and look."],
  [1,"","It is the {A}!|Look! It is the {A}!|No! It is the {A}!|Ha! It is the {A}!|It is only the {A}!|Ha! The {A} came in!"],
  [0,"SPOT","v@able:The {A} can {w}.|a@adj:The {A} is {w}."],
  [0,"TALK","surprise"],
  [2,"","The {A} can not nap too.|The {A} is sad.|\"I can not nap!\" said the {A}.|The {A} sits on the rug."],
  [1,"","\"Get in, {A}!\" said {P}.|\"Come here, {A}!\" said {P}.|Hop in, {A}!|\"You can nap with me,\" said {P}.|Here is a spot for you, {A}.|{P} pats the bed."],
  [1,"","The {A} gets in the bed.|In gets the {A}!|The {A} jumps in bed.|Whiz! In gets the {A}!"],
  [0,"TALK","happy"],
  [2,"","The {A} is snug.|It is so snug!|They are snug in bed.|{P} and the {A} are snug.|{P} sings a song to the {A}.|{P} can rub the {A}.|{P} can pet the {A}."],
  [1,"","Hush, hush.|Hush. It is dusk.|Now it is still.|Hush, {A}!"],
  [1,"","{P} and the {A} nap. The end.|Now they can nap. The end.|They nap and nap. The end.|They nap like a log. The end."]]}
];
const ANIMALS=new Set("cat bat rat ram pig dog frog hog bug pug slug cub duck hen chick crab mule ant fox".split(" "));
const ADJ_OK=new Set("fat big sad glad wet red black fast slim snug cute thin tan smug plump swift quick".split(" "));
const V_NO=new Set("win wish brag crash trip hunt pop stop flop plop slip skid drip flip spill".split(" "));
const O_NO=new Set("dot drip trap list dust stem blob glob prop song sun bump tusk band plug stack skin tin peg stick twig brick rag lock".split(" "));
const VEH=new Set("van truck jet tram ship sled bus".split(" "));
const OUT=new Set("pond hill camp lake sand cave shop".split(" "));
const L_NO=new Set("mug jug pot pan cup bag sack dish lap pad spot pit bin chest hole home jet tram bath block path land".split(" "));
const COOK=["bun","cake","snack"];
const ONP=new Set("mat rug lap log rock block bed sled hill path grass desk pad spot slide sand land cot ship dish chest".split(" "));
const EXTRA="fox:N bus:L van:L jet:L pond:L hill:L camp:L sand:L log:L box:L cap:n bag:L bun:f jam:f nut:f ham:f plum:f hop:v nap:v dig:v sit:v run:v jog:v fat:a sad:a big:a glad:a".split(" ").map(x=>{const[w,t]=x.split(":");return{w,t}});
const SLOT=/\{(\w+)\}/g;
function wordOk(w){const c=classify(w);return !c.word||c.word.k==="sight"||!c.word.tricky}
function allEntries(){return [...Object.entries(BANK).flatMap(([id,l])=>l),...BASEBANK,...EXTRA]}
function castPools(){
  const E=allEntries();const uniq=f=>[...new Set(E.filter(f).map(e=>e.w))];
  const isL=e=>e.t==="L";
  return{
    P:uniq(e=>e.t==="p"),A:uniq(e=>ANIMALS.has(e.w)),Q:uniq(e=>e.t==="a"&&ADJ_OK.has(e.w)),V:uniq(e=>e.t==="v"&&!V_NO.has(e.w)),
    O:uniq(e=>e.t==="n"&&!O_NO.has(e.w)),L:uniq(e=>isL(e)&&!OUT.has(e.w)&&!L_NO.has(e.w)),K:[...new Set([...allEntries().filter(e=>e.t==="f"&&COOK.includes(e.w)).map(e=>e.w),"bun"])],C:uniq(e=>VEH.has(e.w)),X:uniq(e=>OUT.has(e.w)),F:uniq(e=>e.t==="f"&&!["jam","ham","snack"].includes(e.w))};
}
// =====================================================================
// Chester and Brook
// Chester writes the story. Brook reads what Chester wrote and checks it
// against what the user picked: every chosen sound pattern should appear
// (at least twice when possible) and as many chosen sight words as can fit.
// When Brook finds something missing, Chester repairs the book and Brook
// checks again. Both run instantly inside the page; nothing goes online.
// =====================================================================
const STORY_NAMES={lost:"Lost pet",trip:"Trip",cook:"Cooking",mud:"Mud bath",gift:"Gift",garden:"Garden",pond:"Pond",camp:"Camping",race:"Race",bed:"Bedtime"};
const TAG_OF={};allEntries().forEach(e=>{if(!(e.w in TAG_OF))TAG_OF[e.w]=e.t});
// short "aside" sentences Chester can add to bring in a missing sound pattern
const PAT_ASIDE={
  n:["{P} has a {w}.","The {A} has a {w}.","Look! The {A} has a {w}!","{P} got a {w} for the {A}.","{P} has a {w} too.","{P} got a {w}.","The {A} got a {w}.","Look! The {A} got a {w}!"],
  N:["Look! A {w}!","{P} can see a {w}.","A {w} came to see the {A}.","The {A} can see a {w}."],
  L:["The {A} sat by the {w}.","{P} and the {A} ran to the {w}.","The {A} ran to the {w}."],
  f:["{P} ate a {w}.","The {A} ate a {w}.","{P} has a {w} for the {A}.","Yum! A {w}!"],
  v:["{P} can {w}.","The {A} can {w}.","{w}, {P}, {w}!","Look at {P} {w}!","{w}, {w}, {w}!"],
  T:["{P} can {w} the {O}.","The {A} can {w} the {O}."],
  F:["{P} can {w} the {F}."],
  d:["{P} {w}!","The {A} {w}!"],
  a:["The {A} is {w}.","{P} is {w}."],
  p:["{w} came to see {P}.","{w} ran to {P}.","Here is {w}!","{w} can help {P}."]
};
const ASIDE_NO=new Set("fed hip lip chin leg nose skin hand drip dot list dust stem prop glob blob song twin trap tusk king wing hole home band bump".split(" "));
// short lines of talk Chester can add to bring in missing sight words
// short lines of talk that fit almost anywhere in a story; Chester uses a few of them
// to bring in sight words the story itself didn't use
const TALK={
  happy:["This is the best!","It is just right!","I would like that!","I think this is so much fun!","Thank you for your help!","I always like to play with you!","We did it together!","Now I know it is all right.","I wish we could do this again!","Thank you very much!","That was so much better!","Let us do it again soon!","You are so kind!","I like it very much!","It is warm and good here.","I will never let you go!","What fun!","Hip, hip, hip!","I am so glad!","Yes, yes, yes!","This is good!","I like it!","It is so good!","We did it!","Thank you so much!","I am glad, too!","Now we can play!","I like you!"],
  fun:["Look how fast it can go!","Round and round!","Look at me! I can do it myself!","Let me try it!","Who can play with me?","Can I try it too?","Let me show you how!","Show me how!","Both of us can play!","Shall we play?","May I play too?","One, two, three, four!","Five, six, seven, eight!","When can we play?","What fun!","This is fun!","It is so funny!","We can play!","Look at me!","Here we go!","Up we go!","I want to play!","Come and see!","Come with me!","We will play!"],
  effort:["I think I can do it!","Take my hand!","We must try again!","Do not stop now!","Hold on!","Keep going!","Could you help me?","Do your best!","Work with me!","Give it a try!","Do not give up!","Every one of us can help!","I will call for help!","May I help?","Don't stop!","I will see if I can.","Start now!","It is not far!","Which one? That one!","We can do it!","You can do it!","Let us go!","Please, please!","I will try!","Get set, go!","Come on!"],
  surprise:["Why is it here?","What did you say?","Look at those!","What does it say?","How did it get there?","Who is there?","What could it be?","Do you know what it is?","Look over there!","It is right there!","It was not there before!","Where did it come from?","Tell me what it is!","Is it big or little?","I think I know!","Look at that!","Look here!","I see it!","Can you see it?","What is it?","Well, well!","Oh my!"]
};
const COOKV=new Set("whip whisk chop press pat cut dip fill flip mix mash smash".split(" "));
const CONTAINERS=new Set("box bag mug jug cup pot pan tub bin sack dish nest hut tent shed crib truck van ship sled bus jet cave pen den bed".split(" "));
function plotTitle(plot,cast){
  const small=new Set(["the","a","and","to","in","on","of","for","at","with"]);
  for(const t of plot.titles){const s=fillBeat(t,cast);if(!s)continue;if(!sentWords(s).every(wordOk))continue;
    return s.split(" ").map((w,i)=>i&&small.has(w.toLowerCase())?w.toLowerCase():w.charAt(0).toUpperCase()+w.slice(1)).join(" ")}
  return cast.P||"My Book";
}
// ---- Chester: choose the cast so the chosen sounds land on story words ----
function okCastWord(w){const lc=w.toLowerCase();return lettersOk(lc)&&(decodable(lc)||!!findPat(lc))&&!sightSet().has(lc)}
// ---- story worlds: which animals, places and things belong in each storyline ----
// Every storyline only uses words from its own world, so nothing from one story
// wanders into another (no ships at a hill, no bats running and jumping).
const PETS="cat dog pug rat pig hen chick duck".split(" ");
const LISTS={
  toys:"hat cap bell drum doll sock block flag rope vest wig ring mask kit net lamp clock bag cup mug dress kite bike cube crib top ship".split(" "),
  homebox:"box bag tub bin crib tent shed van truck sack nest den hut pen bed cot".split(" "),
  yard:"tub shed pen hut tent van truck bin box den rock log hill sand bed rug mat crib cot nest".split(" "),
  pots:"cup mug pot pan tub box bin jug dish".split(" "),
  pondgear:"bag sack cup mug jug pot pan net".split(" "),
  pondsee:"log rock stick twig fin shell".split(" "),
  campgear:"lamp bag sack cup mug rug mat net".split(" "),
  bedtoys:"sock cap hat bell block drum rug doll".split(" "),
  prints:"prints tracks".split(" "),
  lostfar:"pond sand hill log rock shed van truck tent hut".split(" "),
  snap:"twig stick".split(" "),
  care:"pet rub pat hug brush".split(" "),
  crunchy:"nut chip snack".split(" "),
  tripgear:"bag cap hat map snack cup jug net rope kite lamp flag".split(" "),
  cookgrab:"bag mug cup lid pan dish jug".split(" "),
  stuck:"tug press twist grip tap bump".split(" "),
  dugup:"twig rock sock bone stick shell".split(" "),
  tubtoys:"cup mug ship net jug block".split(" "),
  runto:"hill hut shed tent van truck rock log pond sand".split(" "),
  homeN:"bug ant hen chick cat dog rat duck frog pig".split(" "),
  mudN:"pig hog duck hen chick dog cat frog bug".split(" "),
  giftN:"cat dog pug rat chick hen duck frog".split(" "),
  gardenN:"bug ant slug hen chick frog duck".split(" "),
  pondN:"frog duck crab bug".split(" "),
  nightN:"fox bug rat cub ant bat".split(" "),
  runN:"hen chick dog pug cat ram pig fox".split(" "),
  bedN:"bug rat cat dog chick".split(" ")
};
const WORLD={
  lost:{A:PETS,L:LISTS.yard,L2:LISTS.yard,O:LISTS.toys},
  cook:{A:PETS},
  mud:{A:PETS.concat(["hog"])},
  gift:{A:PETS,O:LISTS.toys},
  garden:{A:"cat dog pug rat pig hog hen chick".split(" ")},
  pond:{A:LISTS.pondN},
  camp:{A:PETS},
  race:{A:"cat dog pug pig hog hen chick ram duck".split(" ")},
  bed:{A:"cat dog pug rat chick hen duck".split(" ")},
  trip:{X:"hill pond lake camp sand shop cave".split(" "),byX:{
    hill:{C:"van bus truck sled".split(" "),A:"fox ram bug ant hen mule".split(" "),n:"rock stick twig log grass plant path".split(" ")},
    pond:{C:"van bus truck".split(" "),A:"frog duck bug".split(" "),n:"log rock net stick twig plant pad dock".split(" ")},
    lake:{C:"van bus truck ship".split(" "),A:"duck frog crab".split(" "),n:"ship rock log dock sand raft".split(" ")},
    camp:{C:"van bus truck".split(" "),A:"fox bug ant cub".split(" "),n:"tent log stick twig lamp path pond rock".split(" ")},
    sand:{C:"van bus truck ship".split(" "),A:"crab bug".split(" "),n:"shell rock stick ship flag crab".split(" ")},
    shop:{C:"van bus truck tram".split(" "),A:"cat dog pug hen chick duck rat pig".split(" "),n:"drum hat cap doll bell kit mask sock vest ring clock lamp flag block rope wig bag mug jug cup pot pan kite bike dress truck ship top plum bun cake".split(" ")},
    cave:{C:"van bus truck".split(" "),A:"bat bug cub".split(" "),n:"rock stick drip pond hole".split(" ")}}}
};
// what each animal can really do
const ABLE={
  cat:"run jump sit nap rest dig trot sniff lick flop plop spin",dog:"run jump sit nap rest dig swim trot jog wag yip sniff lick flop plop spin romp tug",pug:"run jump sit nap rest dig swim trot jog wag yip sniff lick flop plop spin romp tug",
  rat:"run jump sit nap rest dig sniff lick flop",pig:"run sit nap rest dig trot swim grunt sniff flop plop romp",hog:"run sit nap rest dig trot swim grunt sniff flop plop romp",
  ram:"run jump trot sit nap rest romp",mule:"run trot sit nap rest",hen:"run hop sit nap rest dig peck flap flop plop",chick:"run hop sit nap rest dig peck flap flop plop",
  duck:"swim sit nap rest run flap dip flop plop",fox:"run jump sit nap rest dig trot swim sniff romp lick",cub:"run jump sit nap rest dig swim sniff romp lick flop",
  frog:"hop jump swim sit nap rest flip plop",crab:"dig sit swim rest snap",bug:"sit rest dig",ant:"sit rest dig",bat:"sit nap rest flap",slug:"sit nap rest"
};
const ACTIONS=new Set("run jump hop skip trot jog dig swim spin rest nap sit sing clap grin jig hike rush wag flap peck kick yell stamp stomp tug skid slip yip sniff lick flop plop romp grunt snap dip flip".split(" "));
const VFORM={ran:"run",runs:"run",jumps:"jump",jumped:"jump",hops:"hop",dug:"dig",digs:"dig",sat:"sit",sits:"sit",swam:"swim",swims:"swim",spun:"spin",spins:"spin",
  trots:"trot",naps:"nap",rests:"rest",skips:"skip",jogs:"jog",sings:"sing",claps:"clap",grins:"grin",kicks:"kick",tugs:"tug",yells:"yell"};
const verbOf=w=>VFORM[w]||w;
const canDo=(an,v)=>!ACTIONS.has(v)||(ABLE[an]?ABLE[an].split(" ").includes(v):true);
const PEOPLE_CANT=new Set("wag flap plop peck".split(" "));
function worldOf(plot){return WORLD[plot.id]||{}}
function usableAnimals(id){
  const pools=castPools();const inPool=new Set(pools.A.map(w=>w.toLowerCase()));
  return storyAnimals(id).filter(a=>{if(!inPool.has(a)||!okCastWord(a))return false;
    if(id==="trip"){const W=WORLD.trip;return (pools.X||[]).some(x=>okCastWord(x)&&W.byX[x.toLowerCase()]&&W.byX[x.toLowerCase()].A.includes(a))}
    return true});
}
function storyAnimals(id){const W=WORLD[id]||{};return id==="trip"?[...new Set(Object.values(W.byX).flatMap(x=>x.A))]:(W.A||[])}
const STORY_DESC={lost:"The pet runs away and a friend helps find it.",trip:"Two friends ride somewhere and meet an animal.",cook:"Making a snack while the pet tries to get some.",
  mud:"The pet jumps in the mud and needs a bath.",gift:"A present in a box that won't open.",garden:"Planting a plant while the pet digs it up.",
  pond:"Catching an animal with a net, and someone falls in.",camp:"A noise in the tent at night turns out to be the pet.",race:"A running race the pet wins.",bed:"A child can't sleep until the pet hops into bed."};

function pickCast(plots,opt){opt=opt||{};
  const pools=castPools();
  const chain=plots.length>1;const base0=castPools();const lim=(key,list)=>{const l=(pools[key]||base0[key.replace("2","")]||[]).filter(w=>list.includes(w.toLowerCase()));pools[key]=l};
  // the pet: an animal that fits every storyline it appears in
  let petList=null;plots.filter(p=>!(chain&&p.wild)).forEach(p=>{const a=worldOf(p).A;if(a)petList=petList?petList.filter(x=>a.includes(x)):a.slice()});
  const wantA=opt.animal&&okCastWord(opt.animal)?opt.animal:null;
  const wildFirst=plots[0]&&plots[0].wild;   // trip or pond chosen: the chosen animal is the one they meet
  if(petList)lim("A",wantA&&petList.includes(wantA)&&!wildFirst?[wantA]:(wantA&&wildFirst&&chain?petList.filter(a=>a!==wantA):petList));
  ["L","L2","O"].forEach(k=>{const w=plots.map(worldOf).find(w=>w[k]);if(w)lim(k,w[k])});
  // a wild animal met on the trip or at the pond lives in that place
  const wildKey=chain?"A2":"A";
  const pond=plots.find(p=>p.id==="pond");if(pond&&!plots.find(p=>p.id==="trip"))lim(wildKey,wildFirst&&wantA&&worldOf(pond).A.includes(wantA)?[wantA]:worldOf(pond).A);
  const trip=plots.find(p=>p.id==="trip");
  if(trip){const W=worldOf(trip);const pondA=pond?worldOf(pond).A:null;
    const okX=w=>W.X.includes(w.toLowerCase())&&okCastWord(w)&&(!pondA||W.byX[w.toLowerCase()].A.some(a=>pondA.includes(a)));
    let wantWild=wildFirst&&wantA?wantA:null;
    let xs=shuffle((pools.X||[]).filter(w=>okX(w)&&(!wantWild||W.byX[w.toLowerCase()].A.includes(wantWild))));
    if(!xs.length){wantWild=null;xs=shuffle((pools.X||[]).filter(okX))}
    const X=xs.find(w=>findPat(w.toLowerCase()))||xs[0];
    if(X){pools.X=[X];const bx=W.byX[X.toLowerCase()];lim("C",bx.C);lim(wildKey,wantWild&&bx.A.includes(wantWild)?[wantWild]:pondA?bx.A.filter(a=>pondA.includes(a)):bx.A);pools._here=bx.n}}   // the same wild animal can be met on the trip and at the pond
  const text=plots.map(plot=>plot.beats.map(b=>b[2]).join("|")+plot.titles.join("|")).join("|")+(plots.length>1&&plots.some(p=>p.wild)?"|{A2}{A2}":"");
  if(pools.O){const fixed=new Set((text.replace(/\{\w+\}/g," ").toLowerCase().match(/[a-z]+/g)||[]));const o=pools.O.filter(w=>!fixed.has(w.toLowerCase()));if(o.length)pools.O=o}
  const cnt={};(text.match(/\{(\w+)\}/g)||[]).forEach(m=>{const k=m.slice(1,-1);if(pools[k]||pools[k.replace("2","")])cnt[k]=(cnt[k]||0)+1});
  const poolOf=s=>pools[s]||pools[s.replace("2","")]||[];
  const taken=new Set(),cast={};
  // 1. give each chosen sound its own story slot (the slots used most often first)
  const pats=shuffle(S.pats).map(id=>({id,opts:Object.keys(cnt).filter(s=>poolOf(s).some(w=>okCastWord(w)&&patSpan(w.toLowerCase(),id)))}))
    .sort((a,b)=>a.opts.length-b.opts.length);
  const avoidA=new Set(opt.noAvoid?[]:(S.recentA||[]).slice(0,2));
  for(const p of pats){
    const freshA=poolOf("A").some(w=>okCastWord(w)&&patSpan(w.toLowerCase(),p.id)&&!avoidA.has(w.toLowerCase()));
    // if the only animal with this sound was in the last few books, give the sound to another word this time
    const free=p.opts.filter(s=>!cast[s]).sort((a,b)=>cnt[b]-cnt[a]+(Math.random()-.5)*4+(a==="A"&&!freshA?100:0)-(b==="A"&&!freshA?100:0));
    for(const s of free){const pv=(opt.prev||{})[s];const c=shuffle(poolOf(s).filter(w=>okCastWord(w)&&!taken.has(w.toLowerCase())&&patSpan(w.toLowerCase(),p.id))).sort((a,b)=>(b===pv)-(a===pv)||(s==="A"?avoidA.has(a.toLowerCase())-avoidA.has(b.toLowerCase()):0));
      if(c.length){cast[s]=c[0];taken.add(c[0].toLowerCase());break}}
  }
  // 2. fill the rest, still preferring words with a chosen sound
  Object.keys(cnt).sort((a,b)=>(b==="A")-(a==="A")||cnt[b]-cnt[a]).forEach(s=>{
    if(cast[s])return;const c=shuffle(poolOf(s).filter(w=>okCastWord(w)&&!taken.has(w.toLowerCase()))).sort((a,b)=>s==="A"?avoidA.has(a.toLowerCase())-avoidA.has(b.toLowerCase()):0);
    const fr=x=>!(s==="A"&&avoidA.has(x.toLowerCase()));
    const pv=(opt.prev||{})[s];   // keep last book's name, place or thing when it still fits
    const w=(pv&&c.includes(pv)?pv:null)||c.find(w=>fr(w)&&findPat(w.toLowerCase()))||c.find(fr)||c.find(w=>findPat(w.toLowerCase()))||c[0]||null;if(w)taken.add(w.toLowerCase());cast[s]=w;
  });
  // Sense: the animals' action must be something they can really do
  const animals=[cast.A,cast.A2].filter(Boolean).map(a=>a.toLowerCase());
  const vOK=w=>{const v=w.toLowerCase();return ACTIONS.has(v)&&animals.every(a=>canDo(a,v))&&!PEOPLE_CANT.has(v)};
  if(cnt.V&&(!cast.V||!vOK(cast.V))){const alt=shuffle(poolOf("V").filter(w=>okCastWord(w)&&!taken.has(w.toLowerCase())&&vOK(w)));
    const w=alt.find(w=>findPat(w.toLowerCase()))||alt[0]||null;if(w)taken.add(w.toLowerCase());cast.V=w}
  cast._here=pools._here;
  cast.on=ONP.has((cast.L||"").toLowerCase())?"on":"in";cast.on2=ONP.has((cast.L2||"").toLowerCase())?"on":"in";
  return cast;
}
function fillBeat(t,cast){
  let ok=true;
  const out=t.replace(SLOT,(m,k)=>{const v=cast[k];if(!v){ok=false;return""}return v});
  if(!ok)return null;
  return (out.charAt(0).toUpperCase()+out.slice(1)).replace(/([.!?]\s+"?)([a-z])/g,(m,a,b)=>a+b.toUpperCase()).replace(/^"([a-z])/,(m,a)=>'"'+a.toUpperCase());
}
const sentWords=s=>s.split(/\s+/).map(x=>x.replace(/^[^A-Za-z']+|[^A-Za-z']+$/g,"")).filter(Boolean);
let LAST={unused:[],tips:[]};
function tellChain(plots,cast,opt){opt=opt||{};
  const sw=sightSet();const covered=new Set();let friend=false;const lines=[];const cfg=levelCfg();const spp=+S.spp||1;
  const seenS=new Set(),havePat=new Set();const nrm=x=>x.toLowerCase().replace(/"/g,"").replace(/,?\s*said \w+\.?$/,"").replace(/^\w+ said,\s*/,"").replace(/^(now|then|look!|so|and|yes!)\s+/,"").replace(/[.!?,]/g,"").trim();
  let petKnown=false,skipped=0;const lostGroups=new Set();let uid=0,lastTold=null,prevTold=false,petIntro=false;const skipList=[];
  plots.forEach((plot,ci)=>{
    const last=ci===plots.length-1;
    for(const [pri0,grp,vs0] of plot.beats){
      if(grp==="SPOT"){lines.push({anchor:prevTold?lastTold:null,s:"",n:0,pri:1,grp:"",ch:ci,spot:(plots.length>1&&plot.wild?vs0.replace(/\{A\}/g,"{A2}"):vs0).split("|").map(f=>{const i=f.indexOf(":");const [tag,list]=f.slice(0,i).split("@");return{tag,list,t:f.slice(i+1)}}),friend,plot:plot.id});continue}
      if(grp==="TALK"){lines.push({anchor:prevTold?lastTold:null,s:"",n:0,pri:1,grp:"",ch:ci,talk:vs0,friend});continue}
      prevTold=false;
      if(opt.noFriend&&grp==="H")continue;
      if(grp&&lostGroups.has(ci+grp))continue;   // a step that depends on a step we couldn't tell
      const pri=last&&vs0===plot.beats[plot.beats.length-1][2]?1:(grp==="H"?1:pri0);
      if(petKnown&&grp==="INTRO")continue;
      let vs=vs0;if(plots.length>1&&plot.wild)vs=vs.replace(/\{A\}/g,"{A2}");
      let bestV=null,bestS=-1e9,bestDup=false;
      for(const v0 of shuffle(vs.split("|"))){
        if(v0.startsWith("~")&&!friend)continue;   // needs the friend in the story
        const v=v0.replace(/^~/,"");
        if(petKnown&&/\b[Aa] (funny |little |big )*\{A\}/.test(v))continue;
        if(v.includes("{P2}")&&!friend&&!plot.friend&&!/\{P2\} (came|will|can|said)|get \{P2\}|ask \{P2\}|help me, \{P2\}|and \{P2\}/.test(v))continue;
        let s=fillBeat(v,cast);if(!s)continue;
        if(!last)s=s.replace(/\s*The end\.?\s*$/,"").trim();   // only the last chapter ends the book
        if(!s)continue;
        const dup=splitSent(s).some(x=>sentWords(x).length>=3&&seenS.has(nrm(x)));   // Sense: avoid repeating a sentence
        const ws=sentWords(s);if(!ws.every(wordOk))continue;
        if(!petIntro&&cast.A&&ws.includes(cast.A)&&!petIntroForm(s,cast.A))continue;   // Sense: bring the pet in before talking about it
        if(senseSentence(s,cast).some(i=>["animal","person","voice"].includes(i.type)))continue;
        const parts=splitSent(s);const longest=Math.max(...parts.map(p=>sentWords(p).length));
        const fresh=new Set(S.lastSight||[]);const gw=ws.map(w=>w.toLowerCase()).filter((w,i,a)=>sw.has(w)&&!covered.has(w)&&a.indexOf(w)===i);const gain=gw.reduce((t,w)=>t+(fresh.has(w)?0.6:1.4),0);
        const pg=ws.filter(w=>findPat(w.toLowerCase())).length;
        // a sound the story doesn't have yet is worth more than a sight word
        const needP=S.pats.filter(id=>!havePat.has(id)&&ws.some(x=>!sw.has(x.toLowerCase())&&patSpan(x.toLowerCase(),id))).length;
        let sc=gain*4+pg*1.5+needP*16+Math.random()-(dup?40:0);
        if(longest>cfg.maxWords)sc-=20;
        if(spp===1&&parts.length>1)sc-=3;
        if(spp>=4)sc+=parts.length*0.6;
        if(sc>bestS){bestS=sc;bestV=s;bestDup=dup}
      }
      if(bestV&&bestDup&&pri>1)bestV=null;   // Sense: a side step that can only repeat an earlier line is left out
      if(!bestV){if(grp)lostGroups.add(ci+grp);if(pri===1){skipped++;skipList.push(plot.id+": "+vs0.split("|")[0]);(globalThis.__skips=globalThis.__skips||[]).push(plot.id+": "+vs0.split("|")[0])}continue}
      if(cast.P2&&bestV.includes(cast.P2))friend=true;
      sentWords(bestV).forEach(w=>{if(sw.has(w.toLowerCase()))covered.add(w.toLowerCase())});
      splitSent(bestV).forEach(x=>{if(sentWords(x).length>=3)seenS.add(nrm(x))});
      sentWords(bestV).forEach(x=>{const lc=x.toLowerCase();if(!sw.has(lc))S.pats.forEach(id=>{if(patSpan(lc,id))havePat.add(id)})});
      uid++;lines.push({uid,s:bestV,pri,grp:grp?ci+grp:"",ch:ci,n:sentCount(bestV)});lastTold=uid;prevTold=true;
      if(cast.A&&!petIntro&&sentWords(bestV).includes(cast.A)){petIntro=true;const me=lines[lines.length-1];me.pri=1;me.grp=""}   // keep the line that brings the pet in
    }
    if(!(plots.length>1&&plot.wild))petKnown=true;
  });
  lines.skipped=skipped;lines.skipList=skipList;const endL=[...lines].reverse().find(l=>l.ch===plots.length-1);if(endL)endL.end=true;return lines;
}
const total=ls=>ls.reduce((t,l)=>t+l.n,0);
// a talk or sound line only stays if the story step it belongs to is right before it
function dropOrphans(lines){
  return lines.filter((l,i)=>{if(!(l.spot||l.talk))return true;
    let j=i-1;while(j>=0&&(lines[j].spot||lines[j].talk))j--;
    return l.anchor&&j>=0&&lines[j].uid===l.anchor});
}
// the first time the pet shows up, the sentence brings it in ("a cat", "Here is the cat", "It is the cat!")
function petIntroForm(s,pet){
  const p=pet;return new RegExp(`\\b[Aa] (\\w+ ){0,2}${p}\\b|It is the ${p}\\b|(Here is|In came|Look at \\w+ and|This is \\w+ and|Look! It is \\w+ and) (the|a) ${p}\\b|\\b(the|a) ${p} (came|ran in)\\b|\\w+ has a ${p}\\b`).test(s);
}
function trimLines(lines,target){
  const sw=sightSet();
  const keepWords=(set)=>{const other=[];lines.filter(l=>!set.includes(l)).forEach(l=>sentWords(l.s).forEach(w=>other.push(w.toLowerCase())));
    const words=set.flatMap(l=>sentWords(l.s).map(w=>w.toLowerCase()));
    const sightLoss=new Set(words.filter(w=>sw.has(w)&&!other.includes(w))).size;
    const patLoss=S.pats.filter(id=>words.some(w=>patSpan(w,id))&&other.filter(w=>patSpan(w,id)).length<2).length;
    return sightLoss+patLoss*5};
  // a step that holds the only word with one of the chosen sounds is kept (Brook needs every sound)
  const soleSound=set0=>{const ids=new Set(set0.map(l=>l.uid).filter(Boolean));const set=set0.concat(lines.filter(l=>l.anchor&&ids.has(l.anchor)));const other=lines.filter(l=>!set.includes(l)).flatMap(l=>sentWords(l.s).map(w=>w.toLowerCase()).filter(w=>!sw.has(w)));
    return S.pats.some(id=>set.some(l=>sentWords(l.s).some(w=>!sw.has(w.toLowerCase())&&patSpan(w.toLowerCase(),id)))&&!other.some(w=>patSpan(w,id)))};
  while(total(lines)>target){
    const maxPri=Math.max(...lines.map(l=>l.pri));if(maxPri===1)break;
    const groups={};lines.filter(l=>l.pri===maxPri).forEach(l=>{const k=l.grp||("#"+lines.indexOf(l));(groups[k]=groups[k]||[]).push(l)});
    const free=Object.values(groups).filter(g=>!soleSound(g));
    if(!free.length){Object.values(groups).forEach(g=>g.forEach(l=>l.pri=maxPri-1));continue}
    const best=free.sort((a,b)=>keepWords(a)-keepWords(b)||Math.random()-.5)[0];
    best.forEach(l=>lines.splice(lines.indexOf(l),1));
  }
  return lines;
}
function packPages(lines,n){
  lines=lines.filter(l=>l.s);
  const pages=[];let i=0;let remS=total(lines);
  for(let p=0;p<n&&i<lines.length;p++){
    const target=Math.ceil(remS/(n-p));let cur=[],c=0;
    while(i<lines.length&&(c===0||c+lines[i].n<=target||(p===n-1))){cur.push(lines[i].s);c+=lines[i].n;i++}
    remS-=c;pages.push(cur.join(" "));
  }
  while(i<lines.length){pages[pages.length-1]+=" "+lines[i].s;i++}
  return pages;
}
// pages for chapter books: each chapter starts on a new page with its own heading
function packChapters(lines,n,heads){
  const chs=[...new Set(lines.map(l=>l.ch))];
  if(chs.length<2)return{pages:packPages(lines,n),heads:[]};
  const tot=total(lines);let alloc=chs.map(c=>Math.max(1,Math.round(n*total(lines.filter(l=>l.ch===c))/tot)));
  while(alloc.reduce((a,b)=>a+b,0)>n){const i=alloc.indexOf(Math.max(...alloc));if(alloc[i]<=1)break;alloc[i]--}
  const pages=[],hs=[];
  chs.forEach((c,i)=>{hs[pages.length]=heads[c];packPages(lines.filter(l=>l.ch===c),alloc[i]).forEach(p=>pages.push(p))});
  return{pages,heads:hs};
}
// ---- Chester: repair a story so Brook's checks pass ----
function patCount(lines,id){const sw=sightSet();return lines.reduce((t,l)=>t+sentWords(l.s).filter(w=>!sw.has(w.toLowerCase())&&patSpan(w.toLowerCase(),id)).length,0)}
function asideFor(id,cast,usedTexts,usedFrames){usedFrames=usedFrames||[];
  const words=shuffle(Object.keys(TAG_OF).filter(w=>patSpan(w.toLowerCase(),id)&&okCastWord(w)&&!ASIDE_NO.has(w)&&!V_NO.has(w)&&PAT_ASIDE[TAG_OF[w]]));
  words.sort((a,b)=>usedTexts.includes(a)-usedTexts.includes(b));
  for(const w of words){
    let fr=PAT_ASIDE[TAG_OF[w]];
    if(TAG_OF[w]==="a"&&!ADJ_OK.has(w))continue;
    for(const f of shuffle(fr).sort((a,b)=>usedFrames.filter(x=>x===a).length-usedFrames.filter(x=>x===b).length)){
      if(usedFrames.includes(f)&&fr.some(g=>!usedFrames.includes(g)))continue;
      const s=fillBeat(f.replace(/\{w\}/g,w),cast);if(!s||usedTexts.includes(s.replace(/[.!?]$/,"")))continue;
      asideFor.lastFrame=f;
      if(sentWords(s).every(wordOk)&&!senseSentence(s,cast).length)return s;
    }
  }
  return null;
}
function insertAside(lines,s,tag,cast){
  // spread asides through the middle of the story, never first or last
  const n=lines.length;if(n<3){lines.splice(Math.max(0,n-1),0,{s,pri:1,grp:"",ch:lines[0]?lines[0].ch:0,n:sentCount(s),aside:tag});return}
  const taken=lines.map((l,i)=>l.aside?i:-1).filter(i=>i>=0);
  let best=1,bd=-1;
  const pet=cast&&[cast.A,cast.A2].filter(Boolean).find(a=>sentWords(s).includes(a));
  const minI=pet?lines.findIndex(l=>!l.aside&&sentWords(l.s).includes(pet))+1:1;
  for(let i=Math.max(1,minI);i<n;i++){if(/The end/.test(lines[i-1].s))continue;if(lines[i]&&lines[i].ch!==lines[i-1].ch)continue;if(lines[i-1].aside||(lines[i]&&lines[i].aside))continue;const d=Math.min(...taken.map(t=>Math.abs(t-i)),99)+Math.random()*.5;
    const mid=1-Math.abs(i/n-.5);if(d+mid>bd){bd=d+mid;best=i}}
  lines.splice(best,0,{s,pri:1,grp:"",ch:lines[Math.min(best,n-1)].ch,n:sentCount(s),aside:tag});
}
function spotWords(f,id,cast){
  const animals=[cast.A,cast.A2].filter(Boolean).map(a=>a.toLowerCase());
  let pool;
  if(f.list==="able")pool=(ABLE[((f.t.includes("{A2}")?cast.A2:cast.A)||"").toLowerCase()]||"").split(" ");
  else if(f.list==="adj")pool=[...ADJ_OK];
  else if(f.list==="cook")pool=[...COOKV];
  else if(f.list==="food")pool=Object.keys(TAG_OF).filter(w=>TAG_OF[w]==="f"&&!["jam","ham","snack"].includes(w));
  else if(f.list==="here")pool=cast._here||[];
  else if(f.list==="hereN"){const t=WORLD.trip.byX[(cast.X||"").toLowerCase()];pool=t?t.A:[]}
  else pool=LISTS[f.list]||[];
  const sw=sightSet();const inFrame=sentWords(f.t.replace(/\{\w+\}/g," ")).some(x=>!sw.has(x.toLowerCase())&&patSpan(x.toLowerCase(),id));   // the sound is in the frame itself ("Crunch!")
  return shuffle(pool.filter(w=>{const lc=w.toLowerCase();return (inFrame||patSpan(lc,id))&&okCastWord(w)&&!animals.includes(lc)}));
}
function fillSpot(lines,id,cast){
  const used=lines.map(l=>l.s).join(" ").toLowerCase();
  for(const l of shuffle(lines.filter(x=>x.spot&&!x.s))){
    for(const f of shuffle(l.spot)){
      if(f.t.includes("{P2}")&&!l.friend&&!lines.some(x=>x.s&&cast.P2&&x.s.includes(cast.P2)&&lines.indexOf(x)<lines.indexOf(l)))continue;
      const ws=spotWords(f,id,cast).filter(w=>!new RegExp("\\b"+w.toLowerCase()+"\\b").test(used));
      for(const w of ws){
        if([cast.P,cast.P2,cast.A,cast.A2].includes(w))continue;
        const s=fillBeat(f.t.replace(/\{w\}/g,w),cast);if(!s)continue;
        if(!sentWords(s).every(wordOk)||senseSentence(s,cast).length)continue;
        l.s=s;l.n=sentCount(s);l.aside="sound";return true;
      }
    }
  }
  return false;
}
function chesterRepair(lines,cast,room){
  // sounds: Chester only puts a sound word where the story has room for it
  for(const id of S.pats)if(patCount(lines,id)===0)fillSpot(lines,id,cast);
  for(const id of S.pats)if(patCount(lines,id)===1)fillSpot(lines,id,cast);
  // sight words: a short line of talk at the story's happy, fun, busy or surprising moments
  if(room===0)return lines;
  const sw=sightSet();
  for(const l of lines.filter(x=>x.talk&&!x.s)){
    if(room!==undefined&&total(lines)>=room)break;
    const have=new Set(lines.flatMap(x=>sentWords(x.s).map(w=>w.toLowerCase())));
    const i=lines.indexOf(l);const friendNow=cast.P2&&lines.slice(0,i).some(x=>x.s.includes(cast.P2));
    let best=null,bg=0;const lowP=S.pats.filter(id=>patCount(lines,id)<2);
    for(const t of shuffle(TALK[l.talk]||[])){
      const who=friendNow&&Math.random()<.4?cast.P2:cast.P;
      if(!friendNow&&/\b(we|We|us)\b/.test(t))continue;
      const s=`"${t}" said ${who}.`;if(!sentWords(s).every(wordOk)||lines.some(x=>x.s.startsWith('"'+t)))continue;
      const g=new Set(sentWords(t).map(w=>w.toLowerCase()).filter(w=>sw.has(w)&&!have.has(w))).size
        +2*lowP.filter(id=>sentWords(t).some(w=>!sw.has(w.toLowerCase())&&patSpan(w.toLowerCase(),id))).length;if(g>bg){bg=g;best=s}
    }
    if(best){l.s=best;l.n=1;l.aside="sight";l.pri=3;l.grp="T"+i}
  }
  return lines;
}
// ---- Brook: read a book and check it against the user's choices ----
function brookReview(book){
  const text=book.pages.join(" ");const words=analyze(text).filter(a=>a.word);
  const sw=sightSet();
  const pats=S.pats.map(id=>{const ws=words.filter(a=>a.word.k!=="sight"&&patSpan(a.word.lc,id)).map(a=>a.word.lc);
    const possible=Object.keys(TAG_OF).some(w=>patSpan(w.toLowerCase(),id)&&okCastWord(w));
    return{id,count:ws.length,words:[...new Set(ws)],possible}});
  const usedSight=new Set(words.filter(a=>a.word.k==="sight").map(a=>a.word.lc));
  const sightMissing=[...sw].filter(w=>!usedSight.has(w));
  const tricky=[...new Set(words.filter(a=>a.word.tricky).map(a=>a.word.w))];
  const missingPats=pats.filter(p=>!p.count).map(p=>p.id);
  const weakPats=pats.filter(p=>p.count===1).map(p=>p.id);
  return{pats,missingPats,weakPats,sightUsed:[...usedSight],sightMissing,sightTotal:sw.size,tricky,
    ok:!missingPats.filter(id=>pats.find(p=>p.id===id).possible).length&&!tricky.length};
}
// ---- Sense: read a book and check that it makes sense ----
// Things a reader would notice: an animal doing something it can't, the same
// sentence twice, too many lines of talk in a row, a story step missing,
// extra lines crowding out the story, a pet named before it shows up,
// sentences too long for the level, and anything after "The end."
const ANIMAL_CANT={
  _all:"clap sing grin jig hike knit yell brag",
  slug:"run jump hop skip trot jog dig swim spin stomp kick grab",grub:"run jump hop skip trot jog dig swim spin kick",
  crab:"hop jump skip trot jog",ant:"swim",hen:"swim",chick:"swim",cat:"swim",mule:"hop skip jump",hog:"hop skip"
};
const PERSON_CANT=new Set("wag flap plop peck".split(" "));
const cantFor=a=>new Set((ANIMAL_CANT._all+" "+(ANIMAL_CANT[a]||"")).split(" "));
const base=w=>w.length>4?w.replace(/(ing|es|s)$/,""):w.replace(/s$/,"");
function senseSentence(s,meta){
  const issues=[];const lw=sentWords(s).map(w=>w.toLowerCase());
  for(const an of [meta.A,meta.A2].filter(Boolean).map(x=>x.toLowerCase())){
    lw.forEach((w,at)=>{if(w!==an&&w!==an+"s")return;
      // the words right after the animal ("the bat can run"), and "Run, bat, run!"
      const near=lw.slice(at+1,at+5).filter(x=>!["can","will","is","not","and","the","a","to","too","so","all","up","down","it"].includes(x)).slice(0,3);
      if(at>0&&lw[at+1]===lw[at-1])near.push(lw[at-1]);
      if(at>0&&at<=3&&ACTIONS.has(verbOf(lw[0])))near.push(lw[0]);   // "Hop! The duck got away!"
      const bad=near.map(verbOf).find(v=>!canDo(an,v));
      if(bad&&!issues.some(z=>z.type==="animal"))issues.push({type:"animal",msg:`A ${an} can't ${bad}.`});
    });
  }
  const people=[meta.P,meta.P2].filter(Boolean).map(x=>x.toLowerCase()).concat(["they","we","i","you"]);
  lw.forEach((w,i)=>{if(!people.includes(w))return;const nx=lw.slice(i+1,i+5).filter(x=>!["can","will","and","the","a","to","too","so","all","not"].includes(x)&&!people.includes(x));
    const bad=nx.map(verbOf).find(x=>PEOPLE_CANT.has(x));if(bad&&!issues.some(z=>z.type==="person"))issues.push({type:"person",msg:`People can't ${bad}.`})});
  const plain=s.replace(/"[^"]*"/g,"");
  if(/\b(I|We|we|My|my|me|us)\b/.test(plain))issues.push({type:"voice",msg:`"${s}" says I or we, but nobody is talking.`});
  const maxW=levelCfg().maxWords;splitSent(s).forEach(p=>{if(sentWords(p).length>maxW+2)issues.push({type:"long",msg:`"${p}" is long for this level.`})});
  return issues;
}
function senseWorld(m){
  const out=[];const ids=m.story||[];if(!ids.length)return out;const chain=ids.length>1;
  const low=x=>(x||"").toLowerCase();
  const pet=low(m.A),wild=low(chain?m.A2:m.A);
  ids.forEach(id=>{const W=WORLD[id];if(!W)return;
    if(W.A&&!(chain&&(id==="trip"||id==="pond"))&&pet&&!W.A.includes(pet))out.push(`A ${pet} doesn't belong in the ${STORY_NAMES[id].toLowerCase()} story.`);
    if(id==="pond"&&!ids.includes("trip")&&wild&&!W.A.includes(wild))out.push(`A ${wild} doesn't live in a pond.`);
    if(id==="trip"&&m.X){const bx=W.byX[low(m.X)];if(!bx)out.push(`The ${low(m.X)} isn't a place for a trip.`);
      else{if(m.C&&!bx.C.includes(low(m.C)))out.push(`You can't ride a ${low(m.C)} to the ${low(m.X)}.`);
        if(wild&&!bx.A.includes(wild))out.push(`A ${wild} doesn't live at the ${low(m.X)}.`)}}
    ["L","L2","O"].forEach(k=>{if(W[k]&&m[k]&&!W[k].includes(low(m[k])))out.push(`The ${low(m[k])} doesn't fit the ${STORY_NAMES[id].toLowerCase()} story.`)});
  });
  if(m.V)[pet,ids.includes("trip")||ids.includes("pond")?wild:""].filter(Boolean).forEach(a=>{if(!canDo(a,low(m.V)))out.push(`A ${a} can't ${low(m.V)}.`)});
  return [...new Set(out)];
}
function senseReview(book){
  const meta=book.meta||{};const asides=new Set(meta.asides||[]);
  const sents=[];book.pages.forEach((p,pi)=>splitSent(p).forEach(s=>sents.push({s,pi})));
  const issues=[];const add=(type,msg,pi)=>issues.push({type,msg,page:pi===undefined?null:pi+1});
  // 1. animals doing things they can't
  sents.forEach(x=>senseSentence(x.s,meta).forEach(i=>add(i.type,i.msg,x.pi)));
  // 2. the same sentence twice (short refrains like "Tug, tug, tug!" are fine)
  const seen={};sents.forEach(x=>{const k=x.s.toLowerCase().replace(/[^a-z ]/g,"").trim();if(!k||k==="the end"||/^(\w+) \1 \1$/.test(k))return;
    if(seen[k]!==undefined&&seen[k]!==x.pi&&k.split(" ").length>=3)add("repeat",`"${x.s}" is in the book twice.`,x.pi);seen[k]=x.pi});
  const norm=s=>s.toLowerCase().replace(/[^a-z ]/g,"").trim();
  const NS=sents.map(x=>norm(x.s)),NL=NS.map(x=>x.split(" ").length);
  for(let i=0;i<sents.length;i++){if(NL[i]<5)continue;for(let j=i+1;j<sents.length;j++){const a=NS[i],b=NS[j];
    if(NL[j]>=5&&a!==b&&(a.includes(b)||b.includes(a))){add("repeat",`"${sents[j].s}" is almost the same as "${sents[i].s}".`,sents[j].pi);i=sents.length;break}}}
  const nm=[meta.P,meta.P2,meta.A,meta.A2].filter(Boolean);const shape=s=>(nm.length?s.replace(new RegExp("\\b("+nm.join("|")+")\\b","g"),"X"):s).replace(/a \w+ for/,"a _ for").replace(/(got|has) a \w+/,"$1 a _");
  const shapes={};sents.filter(x=>asides.has(x.s)).forEach(x=>{const k=shape(x.s);shapes[k]=(shapes[k]||0)+1;if(shapes[k]===3)add("samey",`The same kind of line ("${x.s}") shows up three times.`,x.pi)});
  // 3. three or more lines of talk in a row from the same person
  let run=0,who="";sents.forEach(x=>{const m=x.s.match(/said (\w+)\.$/)||x.s.match(/^(\w+) said,/);const sp=m?m[1]:"";
    if(sp&&sp===who)run++;else{run=sp?1:0;who=sp}if(run===3)add("talk",`${sp} talks three times in a row.`,x.pi)});
  // 4. extra lines crowding the story
  const total=sents.length;const nA=sents.filter(x=>asides.has(x.s)).length;
  if(total&&nA/total>0.34)add("crowded",`${nA} of ${total} sentences are extra lines, so the story gets crowded.`);
  // 5. the pet mentioned in an extra line before the story brings it in
  if(meta.A){const first=sents.find(x=>sentWords(x.s).some(w=>w.toLowerCase()===meta.A.toLowerCase()));
    if(first&&asides.has(first.s))add("early",`The ${meta.A} is mentioned before the story brings it in.`,first.pi)}
  // 6. story steps that couldn't be told with the chosen words
  if(meta.skipped)add("gap",`${meta.skipped} story step${meta.skipped>1?"s":""} couldn't be told with these words, so the story may jump a little.`);
  // 7. the book ends with the story's ending
  if(meta.endLine&&!book.pages.join(" ").trim().endsWith(meta.endLine.trim()))add("ending",`The story's ending isn't on the last page.`,book.pages.length-1);
  // 9. "they" or "we" when nobody else is in the story right then
  const friendIn=meta.P2&&sents.some(x=>x.s.includes(meta.P2));
  sents.forEach((x,i)=>{const plain=x.s.replace(/"[^"]*"/g,"");if(!/\b(They|they|them)\b/.test(plain))return;
    const near=sents.slice(Math.max(0,i-10),i+1).map(y=>y.s).join(" ");
    const pet=[meta.A,meta.A2].filter(Boolean).some(a=>near.includes(a));
    if(!pet&&!(friendIn&&sents.slice(0,i+1).some(y=>y.s.includes(meta.P2))))add("they",`"${x.s}" says "they", but nobody else is with ${meta.P||"them"} here.`,x.pi)});
  // 10. a thing called "the ___" before the story brings it in
  if(meta.O){const o=meta.O.toLowerCase();const first=sents.find(x=>sentWords(x.s).some(w=>w.toLowerCase()===o));
    if(first&&!new RegExp("\\b(a|A)( \\w+)? "+o+"\\b").test(first.s))add("early",`The ${o} shows up before the story brings it in.`,first.pi)}
  // 12. the pet is brought in before the story talks about it
  if(meta.A){const p=meta.A;const first=sents.find(x=>sentWords(x.s).includes(p));if(first&&!petIntroForm(first.s,p))add("pet-intro",`The ${p.toLowerCase()} shows up without being brought into the story first.`,first.pi)}
  // 11. everything belongs in its storyline (Sense's "no mix-ups" check)
  senseWorld(meta).forEach(m=>add("mixup",m));
  // 8. nothing after "The end."  
  const endAt=sents.findIndex(x=>/^The end\.?$/i.test(x.s.trim()));
  if(endAt>=0&&endAt<sents.length-1)add("after-end",`There is text after "The end."`,sents[endAt+1].pi);
  return{issues,ok:!issues.filter(i=>i.type!=="gap"&&i.type!=="long").length};
}
// Sense helps Chester fix what she finds by taking out the extra lines that cause it
function senseFix(lines,meta){
  for(let round=0;round<6;round++){
    const book={pages:lines.map(l=>l.s),meta:Object.assign({},meta,{asides:lines.filter(l=>l.aside).map(l=>l.s)})};
    const r=senseReview(book);const bad=r.issues.filter(i=>["repeat","talk","crowded","early","after-end","animal","person","samey","they","voice"].includes(i.type));
    if(!bad.length)break;
    // drop the talk line nearest the first problem; sound lines stay unless they are the problem
    const pi=bad[0].page?bad[0].page-1:null;
    let idx=-1;
    if(pi!==null&&lines[pi]&&lines[pi].aside&&(lines[pi].aside==="sight"||["animal","person","samey","repeat","early","they"].includes(bad[0].type)))idx=pi;
    if(idx<0){const sights=lines.map((l,i)=>l.aside==="sight"?i:-1).filter(i=>i>=0);if(sights.length)idx=pi===null?sights[sights.length-1]:sights.sort((a,b)=>Math.abs(a-pi)-Math.abs(b-pi))[0]}
    if(idx<0)break;lines.splice(idx,1);
  }
  return lines;
}

// ---- Chester, Brook and Sense working together ----
function seededRandom(seed){let h=1779033703^String(seed).length;for(const c of String(seed)){h=Math.imul(h^c.charCodeAt(0),3432918353);h=h<<13|h>>>19}
  let a=h>>>0;return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function generate(opt){
  opt=opt||{};
  if(opt.fresh||!S.seed)S.seed=String(Date.now())+Math.floor(Math.random()*1e6);
  const realRandom=Math.random;Math.random=seededRandom(S.seed);
  GEN_CACHE={sight:new Set(S.sight.map(w=>w.toLowerCase())),letters:new Set(S.letters),cl:new Map()};
  try{return generateInner(opt)}finally{Math.random=realRandom;GEN_CACHE=null}
}
function generateInner(opt){
  const want=+S.pages;const spp=+S.spp||1;const T=want*spp;
  const chainOK=spp>=8;   // only 2nd and 3rd grade books become chapter books
  const tries=[];
  const pickS=S.storyPick&&S.storyPick!=="any"?S.storyPick:null,pickA=S.animalPick&&S.animalPick!=="any"?S.animalPick:null;
  const fitsA=p=>!pickA||storyAnimals(p.id).includes(pickA);
  let firsts=PLOTS.filter(p=>(!pickS||p.id===pickS)&&fitsA(p));if(!firsts.length)firsts=PLOTS.filter(p=>!pickS||p.id===pickS);
  for(const first of shuffle(firsts)){
    // with a chosen animal and a trip or pond story first, the other wild story stays out so the animal can be the one they meet
    let order=chainOK?[first,...shuffle(PLOTS.filter(p=>p!==first&&(!pickA||(p.wild?!first.wild:fitsA(p)))))]:[first];
    if(chainOK){const night=order.filter(p=>p.id==="bed"||p.id==="camp");if(night.length>1)order=order.filter(p=>p!==night[1])}
    for(let k=0;k<4;k++){
      const cast=pickCast(order,{noAvoid:k===3||!!pickA,animal:pickA,prev:!opt.fresh&&k<2&&S.book&&S.book.meta?S.book.meta:null});if(!cast.A||!cast.P)continue;
      const noFriend=k===2||(k===3&&Math.random()<.5);                      // short books can leave out the friend's part
      let lines=null,used=1;
      for(let c=1;c<=order.length;c++){lines=tellChain(order.slice(0,c),cast,{noFriend});used=c;if(total(lines)>=T*0.8)break}
      const skipped=lines.skipped||0,skipList=lines.skipList||[];
      lines=chesterRepair(lines,cast,T);         // Chester puts sound words and talk only where the story has room
      lines=trimLines(lines,T);                  // shortening drops talk lines and extra steps first
      lines=dropOrphans(lines);
      lines=chesterRepair(lines,cast,0);         // and checks the sounds again after shortening
      const meta={A:cast.A,A2:cast.A2,P:cast.P,P2:cast.P2,O:cast.O,X:cast.X,C:cast.C,L:cast.L,L2:cast.L2,V:cast.V,story:order.slice(0,used).map(p=>p.id),skipped,skipList,endLine:(lines.find(l=>l.end)||{}).s};
      lines=senseFix(lines,meta);                // Sense takes out extra lines that don't make sense
      lines=chesterRepair(lines,cast,0);         // put back any sound Sense's fix removed (no new talk lines)
      lines=senseFix(lines,meta);
      lines=dropOrphans(lines);
      const tot=total(lines);
      const maxPages=levelCfg().max===1?want+4:want;   // Pre-K keeps one sentence a page
      const nPages=Math.max(1,Math.min(maxPages,spp===1?tot:Math.ceil(tot/spp)||1));
      const heads=order.slice(0,used).map(p=>plotTitle(p,cast));
      const packed=used>1?packChapters(lines,nPages,heads):{pages:packPages(lines,nPages),heads:[]};
      const book={title:plotTitle(order[0],cast),pages:packed.pages,heads:packed.heads,spp,level:S.level,story:order.slice(0,used).map(p=>p.id),meta:Object.assign(meta,{asides:lines.filter(l=>l.aside).map(l=>l.s)})};
      const r=brookReview(book);const sn=senseReview(book);
      const asides=lines.filter(l=>l.aside).length;
      tries.push({order,cast,book,r,sn,score:sn.issues.filter(i=>i.type==="mixup").length*5000+sn.issues.filter(i=>i.type!=="long").length*120+r.missingPats.length*1000+r.weakPats.length*60+r.tricky.length*500-r.sightUsed.length*4-book.pages.length*3+asides*1.5+Math.random()*4});
    }
  }
  if(!tries.length)return{title:"My Book",pages:["I can read!"],heads:[],spp,level:S.level};
  // Brook keeps the books that pass best; among those, every storyline gets an equal chance
  tries.sort((a,b)=>a.score-b.score);
  const bestMiss=tries[0].r.missingPats.length,bestWeak=Math.min(...tries.filter(t=>t.r.missingPats.length===bestMiss).map(t=>t.r.weakPats.length));
  const maxU=Math.max(...tries.map(t=>t.r.sightUsed.length)),maxP=Math.max(...tries.map(t=>t.book.pages.length));
  const bestSense=Math.min(...tries.filter(t=>t.r.missingPats.length===bestMiss).map(t=>t.sn.issues.length));
  // every book must make sense; among those, a new storyline and a new animal each time
  const clean=(t,gapOK)=>!t.sn.issues.some(i=>!["long"].concat(gapOK?["gap"]:[]).includes(i.type));
  const cl=tries.filter(t=>clean(t,false));const cU=cl.length?Math.max(...cl.map(t=>t.r.sightUsed.length)):maxU,cP=cl.length?Math.max(...cl.map(t=>t.book.pages.length)):maxP;
  const okBook=(t,miss,gapOK)=>t.r.missingPats.length<=miss&&clean(t,gapOK)&&t.r.sightUsed.length>=Math.floor((gapOK?maxU:cU)*0.6)&&t.book.pages.length>=Math.floor((gapOK?maxP:cP)*0.7);
  // a New story press rotates storylines and animals; changing sounds or words keeps the same story and animal when it can
  const prev=S.book&&S.book.meta?{s:(S.book.story||[])[0],a:(S.book.meta.A||"").toLowerCase()}:null;
  const recentP=opt.fresh?(S.recent||[]).slice(0,3):[],recentA=opt.fresh?(S.recentA||[]).slice(0,2):[],lastP=opt.fresh?recentP[0]:null;
  const newA=t=>pickA?true:!recentA.includes((t.cast.A||"").toLowerCase());
  const newP=t=>pickS?true:!recentP.includes(t.order[0].id);
  const same=t=>prev&&t.order[0].id===prev.s&&(t.cast.A||"").toLowerCase()===prev.a;
  const tiers=[...(opt.fresh||!prev?[]:[t=>okBook(t,bestMiss)&&same(t),t=>okBook(t,bestMiss)&&t.order[0].id===prev.s]),t=>okBook(t,bestMiss)&&newP(t)&&newA(t), t=>okBook(t,bestMiss)&&newP(t), t=>okBook(t,bestMiss)&&t.order[0].id!==lastP,
    // if every story that fits all the sounds was just read, let one sound sit out so the story can change (Brook says which one)
    t=>okBook(t,bestMiss+1)&&newP(t), t=>okBook(t,bestMiss),
    // last resort: a story step had to be left out
    t=>okBook(t,bestMiss,true)&&newP(t), t=>okBook(t,bestMiss,true), t=>true];
  let top=[];for(const f of tiers){top=tries.filter(f);if(top.length)break}
  const pickT=top[Math.floor(Math.random()*top.length)];
  S.lastSight=pickT.r.sightUsed;
  if(opt.fresh)S.recent=[pickT.order[0].id,...recentP.filter(x=>x!==pickT.order[0].id)].slice(0,5);
  if(opt.fresh)S.recentA=[(pickT.cast.A||"").toLowerCase(),...recentA.filter(x=>x!==(pickT.cast.A||"").toLowerCase())].slice(0,3);
  const {cast,book}=pickT;
  // helper words that would let more sight words fit
  const unused=pickT.r.sightMissing;const tipCount={};
  PLOTS.forEach(p=>p.beats.forEach(b=>b[2].split("|").forEach(v=>{const s=fillBeat(v,cast);if(!s)return;const ws=sentWords(s).map(w=>w.toLowerCase());
    if(!ws.some(w=>unused.includes(w)))return;const bl=[...new Set(ws.filter(w=>!wordOk(w)))];if(bl.length&&bl.length<=2)bl.forEach(w=>{if(DOLCH_ALL.has(w))tipCount[w]=(tipCount[w]||0)+1})})));
  LAST={unused,tips:Object.entries(tipCount).sort((a,b)=>b[1]-a[1]).slice(0,4).map(x=>x[0])};
  return book;
}
function mostPatNoun(pages){const cnt={};pages.forEach(p=>analyze(p).forEach(a=>{if(a.word&&a.word.k==="pat")cnt[a.word.lc]=(cnt[a.word.lc]||0)+1}));
  const nouns=new Set(Object.values(BANK).flat().filter(e=>"nNLf".includes(e.t)).map(e=>e.w));
  return Object.entries(cnt).filter(([w])=>nouns.has(w)).sort((a,b)=>b[1]-a[1]).map(x=>x[0])[0]}
const cap=w=>w?w.charAt(0).toUpperCase()+w.slice(1):w;

// ---------- UI: controls ----------
function renderTabs(){
  const sw=sightSet();
  $("gradeTabs").innerHTML="";
  DOLCH.forEach(([id,label,words])=>{
    const b=document.createElement("button");b.className="tab";b.setAttribute("role","tab");b.setAttribute("aria-selected",S.grade===id);
    const c=words.split(" ").filter(w=>sw.has(w.toLowerCase())).length;
    b.innerHTML=`${label}<span class="c">${c}/${words.split(" ").length}</span>`;b.onclick=()=>{S.grade=id;renderTabs();renderSight()};$("gradeTabs").append(b);
  });
}
function renderSight(){
  const g=DOLCH.find(d=>d[0]===S.grade);const sw=sightSet();$("swChips").innerHTML="";
  const fit=fitScope();let nNo=0;
  g[2].split(" ").forEach(w=>{const b=document.createElement("button");b.className="chip sw";b.textContent=w;b.setAttribute("aria-pressed",sw.has(w.toLowerCase()));
    if(fit&&!fit.sight.has(w.toLowerCase())){nNo++;b.classList.add("nofit");b.title=`The ${STORY_NAMES[fit.id].toLowerCase()} story doesn't use this word.`}
    b.onclick=()=>{toggleSight(w);};$("swChips").append(b)});
  const tot=g[2].split(" ").length;
  $("swFit").textContent=fit?(nNo?`${tot-nNo} of these ${tot} words fit the ${STORY_NAMES[fit.id].toLowerCase()} story. Dimmed words don't appear in it.`:`All ${tot} of these words fit the ${STORY_NAMES[fit.id].toLowerCase()} story.`):"";
}
function toggleSight(w){const lc=w.toLowerCase();if(sightSet().has(lc))S.sight=S.sight.filter(x=>x.toLowerCase()!==lc);else S.sight.push(w);changed()}
$("swAll").onclick=()=>{const g=DOLCH.find(d=>d[0]===S.grade);const sw=sightSet();g[2].split(" ").forEach(w=>{if(!sw.has(w.toLowerCase()))S.sight.push(w)});changed()};
$("swNone").onclick=()=>{const g=new Set(DOLCH.find(d=>d[0]===S.grade)[2].toLowerCase().split(" "));S.sight=S.sight.filter(w=>!g.has(w.toLowerCase()));changed()};
$("swClearAll").onclick=()=>{S.sight=[];changed()};
// ---- what fits the chosen story and animal ----
// Every story x animal x sound was tested (one sound at a time, 5,229 books, each one checked by Brook and Sense). These are the few
// sounds that have no word that belongs in that story; their chips are dimmed when the story is chosen.
const NOFIT={"trip/crab":["tw"],"trip/cat":["tw"],"trip/dog":["tw"],"trip/pug":["tw"],"trip/chick":["tw"],"trip/rat":["tw"],"trip/pig":["tw"],"cook/cat":["-og"],"cook/rat":["-og"],"cook/pig":["-og"],"cook/hen":["-og"],"cook/chick":["-og"],"cook/duck":["-og"],"mud/cat":["tw"],"mud/dog":["tw"],"mud/pug":["tw"],"mud/rat":["tw"],"mud/pig":["tw"],"mud/hen":["tw"],"mud/chick":["tw"],"mud/duck":["-ig","tw"],"mud/hog":["tw"],"gift/cat":["-og"],"gift/rat":["-og","sp"],"gift/pig":["-og","sp"],"gift/hen":["-og","sp"],"gift/chick":["-og","sp"],"gift/duck":["-og","sp"],"pond/bug":["-ap"],"bed/cat":["-ut","tw"],"bed/dog":["-ut","tw"],"bed/pug":["-ut","tw"],"bed/rat":["-ut","tw"],"bed/chick":["-ut","tw"],"bed/hen":["-ut","tw"],"bed/duck":["-ig","-ut","tw"]};
const _swCache={};
function storySight(id){if(_swCache[id])return _swCache[id];const p=PLOTS.find(x=>x.id===id);
  const txt=(p.beats.map(b=>b[2]).join(" ")+" "+Object.values(TALK).flat().join(" ")).toLowerCase();return _swCache[id]=new Set(txt.match(/[a-z']+/g))}
function fitScope(){if(!S.storyPick||S.storyPick==="any"||(+S.spp||1)>=8)return null;
  const id=S.storyPick,an=S.animalPick&&S.animalPick!=="any"?[S.animalPick]:usableAnimals(id);
  const lists=an.map(a=>NOFIT[id+"/"+a]||[]);const no=new Set(lists.length?lists[0].filter(x=>lists.every(l=>l.includes(x))):[]);
  const who=STORY_NAMES[id].toLowerCase()+" story"+(an.length===1?" with a "+an[0]:"");return{id,no,who,sight:storySight(id)}}
function renderPats(){
  const fit=fitScope();let nNo=0,nAll=0;
  const host=$("patGroups");host.innerHTML="";
  PATS.forEach(g=>{
    const t=document.createElement("div");t.className="group-title";t.innerHTML=`<span>${g.g}</span>`;host.append(t);
    const c=document.createElement("div");c.className="chips";c.style.maxHeight="none";
    Object.keys(g.items).forEach(id=>{const b=document.createElement("button");b.className="chip";b.textContent=id;b.setAttribute("aria-pressed",S.pats.includes(id));nAll++;
      if(fit&&fit.no.has(id)){nNo++;b.classList.add("nofit");b.title=`No word with ${id} belongs in the ${fit.who}.`}
      b.onclick=()=>{S.pats=S.pats.includes(id)?S.pats.filter(x=>x!==id):[...S.pats,id];changed()};c.append(b)});
    host.append(c);
  });
  $("patFit").textContent=fit?(nNo?`${nAll-nNo} of ${nAll} sounds fit the ${fit.who}. The dimmed ones have no word that belongs in this story.`:`All ${nAll} sounds fit the ${fit.who}.`):"";
}
function renderLetters(){
  $("letters").innerHTML="";"abcdefghijklmnopqrstuvwxyz".split("").forEach(l=>{const b=document.createElement("button");b.className="chip";b.textContent=l;b.setAttribute("aria-pressed",S.letters.includes(l));
    b.onclick=()=>{S.letters=S.letters.includes(l)?S.letters.filter(x=>x!==l):[...S.letters,l];changed()};$("letters").append(b)});
}
function renderSwatches(){$("swatches").innerHTML="";COLORS.forEach(([n,c])=>{const b=document.createElement("button");b.className="swatch";b.style.background=c;b.title=n;b.setAttribute("aria-label",n+" book color");b.setAttribute("aria-pressed",S.color===c);b.onclick=()=>{S.color=c;changed()};$("swatches").append(b)})}
let booted=false;
let lastSig="";
function changed(){if(typeof renderStoryPick==="function"&&$("animalPick").options.length)renderStoryPick();const sig=JSON.stringify([S.sight,S.pats,S.letters]);if(booted&&sig!==lastSig){S.book=generate();setStatus("Same story, updated with your choices. Press New story for a different one.")}lastSig=sig;store.set("state",S);renderTabs();renderSight();renderPats();renderLetters();renderSwatches();renderBook()}
$("childName").oninput=e=>{S.name=e.target.value;store.set("state",S);renderBook()};
$("pageCount").onchange=e=>{S.pages=+e.target.value;S.book=generate();store.set("state",S);renderBook()};
function renderStoryPick(){
  const sp=$("storyPick");if(!sp.options.length){const o=document.createElement("option");o.value="any";o.textContent="Surprise me";sp.append(o);
    PLOTS.forEach(p=>{const o=document.createElement("option");o.value=p.id;o.textContent=STORY_NAMES[p.id];sp.append(o)})}
  sp.value=S.storyPick||"any";
  const ap=$("animalPick");ap.innerHTML="";const all=S.storyPick&&S.storyPick!=="any"?storyAnimals(S.storyPick):[...new Set(PLOTS.flatMap(p=>storyAnimals(p.id)))].sort();
  const list=S.storyPick&&S.storyPick!=="any"?usableAnimals(S.storyPick):[...new Set(PLOTS.flatMap(p=>usableAnimals(p.id)))].sort();const hidden=all.length-list.length;
  [["any","Any animal"],...list.map(a=>[a,a.charAt(0).toUpperCase()+a.slice(1)])].forEach(([v,t])=>{const o=document.createElement("option");o.value=v;o.textContent=t;ap.append(o)});
  if(S.animalPick!=="any"&&!list.includes(S.animalPick))S.animalPick="any";
  ap.value=S.animalPick||"any";
  $("storyHint").textContent=(S.storyPick&&S.storyPick!=="any"?STORY_DESC[S.storyPick]+" ":"Chester picks a different story each time. ")+(hidden?`${hidden} animal${hidden>1?"s are":" is"} hidden because ${hidden>1?"they need":"it needs"} letters or sounds she hasn't learned yet.`:"");
}
function renderLevel(){
  const sel=$("level");if(!sel.options.length)Object.entries(LEVELS).forEach(([k,v])=>{const o=document.createElement("option");o.value=k;o.textContent=v.label;sel.append(o)});
  sel.value=S.level in LEVELS?S.level:"K";const c=levelCfg();
  if(!(S.spp>=c.min&&S.spp<=c.max))S.spp=c.def;
  const sp=$("spp");sp.innerHTML="";for(let i=c.min;i<=c.max;i++){const o=document.createElement("option");o.value=i;o.textContent=i;sp.append(o)}sp.value=String(S.spp);sp.disabled=c.min===c.max;
  $("levelHint").textContent=c.hint;
}
$("storyPick").onchange=e=>{S.storyPick=e.target.value;renderStoryPick();renderSight();renderPats();S.book=generate({fresh:true});store.set("state",S);renderBook();setStatus(S.storyPick==="any"?"New story, picked by Chester.":"New "+STORY_NAMES[S.storyPick].toLowerCase()+" story.")};
$("animalPick").onchange=e=>{S.animalPick=e.target.value;renderStoryPick();renderSight();renderPats();S.book=generate({fresh:true});store.set("state",S);renderBook();setStatus(S.animalPick==="any"?"New story with any animal.":"New story with a "+S.animalPick+".")};
$("level").onchange=e=>{S.level=e.target.value;S.spp=levelCfg().def;renderLevel();renderSight();renderPats();S.book=generate();store.set("state",S);renderBook();setStatus("New story made for "+levelCfg().short+".")};
$("spp").onchange=e=>{S.spp=+e.target.value;renderSight();renderPats();S.book=generate();store.set("state",S);renderBook();setStatus(`New story with ${S.spp} sentence${S.spp>1?"s":""} on each page.`)};
$("bookTitle").oninput=e=>{if(S.book){S.book.title=e.target.value;store.set("state",S);renderBook(true)}};

// ---------- page layout (shared by preview and PDF) ----------
function pageGeom(spp){
  if(spp<=1)return{pic:198,label:"Draw the picture!",top:238,bottom:360,align:"center",max:50,min:18,lead:1.2,bold:true};
  if(spp<=3)return{pic:150,label:"Draw the picture!",top:192,bottom:360,align:"center",max:40,min:14,lead:1.25,bold:true};
  if(spp<=8)return{pic:84,label:"Draw a small picture",top:126,bottom:362,align:"left",max:28,min:10,lead:1.4,bold:false};
  return{pic:0,label:"",top:36,bottom:362,align:"left",max:24,min:8,lead:1.42,bold:false};
}
const BOX_X=52,BOX_W=508;
function layoutText(text,g,measure){
  const toks=analyze(text).map(a=>{a.segs.tricky=!!(a.word&&a.word.tricky);return a.segs});const boxH=g.bottom-g.top;
  const tw=(t,sz)=>t.reduce((s,x)=>s+measure(x.t,sz),0);
  let res=null;
  for(let sz=g.max;sz>=g.min;sz--){
    const sp=measure(" ",sz);const lines=[[]];let w=0;
    for(const t of toks){const ww=tw(t,sz);if(lines[lines.length-1].length&&w+sp+ww>BOX_W){lines.push([]);w=0}w+=(lines[lines.length-1].length?sp:0)+ww;lines[lines.length-1].push(t)}
    const h=(lines.length-1)*sz*g.lead+sz;
    res={sz,lines,h,sp};if(h<=boxH)break;
  }
  res.widths=res.lines.map(l=>l.reduce((s,t)=>s+tw(t,res.sz),0)+res.sp*(l.length-1));
  return res;
}
let _cv=null;
function measurePreview(bold){return(t,sz)=>{_cv=_cv||document.createElement("canvas").getContext("2d");_cv.font=`${bold?700:400} ${sz}px Andika, sans-serif`;return _cv.measureText(t).width}}
// ---------- preview ----------
const esc=s=>s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function richHTML(text){return analyze(text).map(a=>a.segs.map(s=>`<span class="${s.k==="sight"?"s-sight":s.k==="pat"?"s-pat":""}${a.word&&a.word.tricky&&s.k!=="sight"?" s-tricky":""}">${esc(s.t)}</span>`).join("")).join(" ")}
function wordLists(book){
  const pat=[],dec=[],heart=[],tricky=[];const seen=new Set();
  book.pages.forEach(p=>analyze(p).forEach(a=>{const w=a.word;if(!w||seen.has(w.lc))return;seen.add(w.lc);
    const disp=w.lc==="i"?"I":(/^[A-Z]/.test(w.w)&&!sightSet().has(w.lc)&&isName(w.w))?w.w:w.lc;
    if(w.k==="sight")heart.push(disp);else if(w.k==="pat")pat.push(disp);else if(w.k==="dec")dec.push(disp);else tricky.push(disp);
    if(w.tricky&&w.k==="pat")tricky.push(disp);}));
  return{pat,dec,heart,tricky:[...new Set(tricky)]};
}
const NAMES=new Set([...Object.values(BANK).flat(),...BASEBANK].filter(e=>e.t==="p").map(e=>e.w));
function isName(w){return NAMES.has(w)}
function patLabel(){return S.pats.length?S.pats.slice(0,3).join("  ")+(S.pats.length>3?` +${S.pats.length-3}`:""):"Aa"}
function shortNote(b){
  const n=b.pages.reduce((t,p)=>t+sentCount(p),0);
  if(sightSet().size<6||!["a","the","is"].every(w=>sightSet().has(w)))return`Only ${b.pages.length} pages fit. Stories need a few Pre-K words like a, the, I and is.`;
  return`The story has ${n} sentences, so it fills ${b.pages.length} pages at ${b.spp||S.spp} a page.`;
}
function sightPill(b){
  const sw=sightSet();if(!sw.size)return`<span class="pill">No sight words chosen</span>`;
  const usedW=new Set();b.pages.concat([b.title]).forEach(p=>analyze(p).forEach(a=>{if(a.word&&a.word.k==="sight")usedW.add(a.word.lc)}));
  const miss=[...sw].filter(w=>!usedW.has(w));
  let h=`<span class="pill ${miss.length?"":"ok"}">Uses ${usedW.size} of ${sw.size} sight words</span>`;
  if(miss.length)h+=`<span class="pill">Not used this time: ${esc(miss.slice(0,14).join(", "))}${miss.length>14?"…":""}</span>`;
  if(miss.length&&LAST.tips.length)h+=`<button class="pill tipbtn" id="tipAdd" title="Add these sight words">Add ${esc(LAST.tips.map(w=>w==="i"?"I":w).join(", "))} to fit more words</button>`;
  return h;
}
function sensePart(b){
  const s=senseReview(b);
  const list=s.issues.slice(0,4).map(i=>`<li>${i.page?`Page ${i.page}: `:""}${esc(i.msg)}</li>`).join("");
  return`<div class="bk-sense"><span class="bk-who">Sense</span> read it for meaning: ${s.issues.length?`<span class="bk-warn">${s.issues.length} thing${s.issues.length>1?"s":""} to look at</span><ul>${list}</ul>`:`<span class="bk-good">the story makes sense ✓</span>`}</div>`;
}
function brookPanel(b){
  const r=brookReview(b);
  const story=(b.story||[]).map(id=>STORY_NAMES[id]).filter(Boolean);
  const chips=r.pats.map(p=>p.count?`<span class="bk-chip ${p.count>=2?"ok":"meh"}"><b>${esc(p.id)}</b> ✓ ${p.count}× <i>${esc(p.words.slice(0,4).join(", "))}</i></span>`
    :`<span class="bk-chip no"><b>${esc(p.id)}</b> ✗ ${p.possible?"not in this book":"no words fit with the letters she knows"}</span>`).join("");
  const sw=r.sightTotal?`<span class="bk-chip ${r.sightMissing.length?"meh":"ok"}">Sight words: ${r.sightUsed.length} of ${r.sightTotal}</span>`:"";
  const tr=r.tricky.length?`<span class="bk-chip no">Tricky words: ${esc(r.tricky.join(", "))}</span>`:`<span class="bk-chip ok">Every word checks out</span>`;
  const verdict=r.ok?(r.weakPats.length?`Every sound you picked is in the book. ${esc(r.weakPats.join(", "))} only shows up once.`:`Every sound you picked is in the book at least twice.`)
    :r.tricky.length?`Some words aren't taught yet. Change them in the boxes under the pages.`:`${esc(r.missingPats.join(", "))} didn't fit this story. Chester only puts a sound where it makes sense, so press New story to try another story, or pick fewer sounds at once.`;
  return`<div class="bk-head"><span class="bk-who">Chester</span> wrote this story${story.length?` (${esc(story.join(" + "))})`:""}. <span class="bk-who">Brook</span> checked the sounds and sight words:</div>
    <div class="bk-verdict ${r.ok?"good":"warn"}">${verdict}</div><div class="bk-chips">${chips}${sw}${tr}</div>${sensePart(b)}${r.sightMissing.length?`<div class="bk-note">One short book can't hold every sight word. The next New story puts the ones left out first, so a few books together cover them all.</div>`:""}`;
}
function renderBook(keepTitle){
  document.documentElement.style.setProperty("--book-col",S.color);
  if(!S.book)S.book=generate({fresh:true});
  const b=S.book;if(!keepTitle)$("bookTitle").value=b.title;
  const L=wordLists(b);const host=$("pages");host.innerHTML="";
  const trickyCount=L.tricky.length;
  const patUses=b.pages.reduce((n,p)=>n+analyze(p).filter(a=>a.word&&a.word.k==="pat").length,0);
  $("brook").innerHTML=brookPanel(b);
  $("stats").innerHTML=`<span class="pill">${b.pages.length} story pages · ${Math.ceil((b.pages.length+2)/2)} sheets · ${b.spp||S.spp} sentence${(b.spp||S.spp)>1?"s":""} a page</span>`+(b.pages.length<S.pages?`<span class="pill warn">${shortNote(b)}</span>`:"")+`${sightPill(b)}`;
  const tb=$("tipAdd");if(tb)tb.onclick=()=>{LAST.tips.forEach(w=>{if(!sightSet().has(w))S.sight.push(w==="i"?"I":w)});S.book=generate();changed();setStatus("Added "+LAST.tips.join(", ")+" and made a new story.")};
  // cover
  const heartOnCover=L.heart.length>9?L.heart.slice(0,8).join(", ")+` and ${L.heart.length-8} more`:L.heart.join(", ");
  const big=S.pats.length?Math.max(5,15-patLabel().length*1.1):12;
  add(`<div class="fr"></div><div class="band">Mini-Book · ${esc((LEVELS[b.level||S.level]||LEVELS.K).short)}</div><div class="title">${richHTML(b.title)}</div><div class="cpic">Draw the cover picture!</div>
    <div class="badge"><div class="big" style="font-size:${big}cqw">${esc(patLabel())}</div><div class="lab">${S.pats.length?"sounds in this book":"sight words"}</div></div>
    <div class="cfoot">${heartOnCover?`Heart words: ${esc(heartOnCover)}`:""}<div class="nm">${S.name?"Read by: "+esc(S.name):"Name: ______________________"}</div></div>`,"Cover");
  const g0=pageGeom(+(b.spp||S.spp)||1);const cq=v=>(v/6.12).toFixed(3)+"cqw";
  b.pages.forEach((p,i)=>{
    const head=b.heads&&b.heads[i];const g=head?Object.assign({},g0,{top:g0.top+30}):g0;
    const r=layoutText(p,g,measurePreview(g.bold));
    const pad=g.align==="center"?(g.bottom-g.top-r.h)/2:0;
    const lines=r.lines.map(l=>`<div style="height:${cq(r.sz*g.lead)};white-space:nowrap">${l.map(t=>t.map(s=>`<span class="${s.k==="sight"?"s-sight":s.k==="pat"?"s-pat":""}${t.tricky&&s.k!=="sight"?" s-tricky":""}">${esc(s.t)}</span>`).join("")).join(" ")}</div>`).join("");
    const pic=g.pic?`<div class="pic" style="top:${cq(33)};height:${cq(g.pic)}">${g.label}</div>`:"";
    const hd=head?`<div class="chead" style="left:${cq(BOX_X)};width:${cq(BOX_W)};top:${cq(g0.top-2)};font-size:${cq(16)};text-align:${g.align}">${esc(head)}</div>`:"";
    add(`<div class="fr"></div>${pic}${hd}<div class="txt" style="left:${cq(BOX_X)};width:${cq(BOX_W)};top:${cq(g.top+pad)};font-size:${cq(r.sz)};line-height:${g.lead};text-align:${g.align};font-weight:${g.bold?700:400}">${lines}</div><div class="pn">page ${i+1}</div>`,`Page ${i+1}`,i);
  });
  const lst=(arr,cls)=>arr.map(w=>`<span class="${cls}">${cls==="s-pat"?richHTML(w):esc(w)}</span>`).join("");
  const nW=L.pat.length+L.dec.length+L.tricky.length+L.heart.length;const wfs=nW>26?2.4:nW>18?3:3.8;
  add(`<div class="fr"></div><div class="wh">Words I can read!</div><div class="wl" style="--wfs:${wfs}cqw">
    ${L.pat.length?`<div class="lb">Sound-pattern words (tap and blend):</div><div class="ws">${lst(L.pat,"s-pat")}</div>`:""}
    ${L.dec.length||L.tricky.length?`<div class="lb">Other words:</div><div class="ws">${lst([...L.dec,...L.tricky.filter(w=>!L.pat.includes(w))],"")}</div>`:""}
    ${L.heart.length?`<div class="lb">Heart words (we just know them!):</div><div class="ws" style="color:#d9480f">${lst(L.heart,"")}</div>`:""}
    </div><div class="wf">Read it again tomorrow. Can you read it faster?</div>`,"Last page");
  function add(inner,label,idx){
    const w=document.createElement("div");w.className="pagewrap";
    w.innerHTML=`<div class="pagelabel"><span>${label}</span></div><div class="page">${inner}</div>`;
    if(idx!==undefined){const inp=document.createElement("textarea");inp.className="edit";inp.id="edit"+idx;inp.value=b.pages[idx];inp.rows=Math.min(8,Math.max(1,Math.ceil(b.pages[idx].length/48)));inp.setAttribute("aria-label",`Edit page ${idx+1}`);
      inp.oninput=e=>{b.pages[idx]=e.target.value;store.set("state",S);clearTimeout(renderBook.t);renderBook.t=setTimeout(()=>{const a=document.activeElement;const f=a&&a.id,pos=a&&a.selectionStart;renderBook(true);if(f&&$(f)){const el=$(f);el.focus();try{el.setSelectionRange(pos,pos)}catch(_){}}},500)};w.append(inp)}
    host.append(w);
  }
}
$("btnNew").onclick=()=>{S.book=generate({fresh:true});store.set("state",S);renderBook();setStatus("New story ready.")};
function setStatus(t){$("status").textContent=t}

// ---------- Claude-written stories ----------
let sampleFn=null;
async function askClaude(){
  const btn=$("btnClaude");btn.disabled=true;setStatus("Claude is writing a story. This can take up to a minute…");
  const ex=S.pats.map(id=>`${id}: ${(BANK[id]||[]).filter(usable).map(e=>e.w).join(", ")}`).join("\n");
  const known=S.letters.join(" ");
  const prompt=`You write decodable mini-books for a young child who is learning to read.
Write a story of exactly ${S.pages} pages for a ${levelCfg().short} reader. Each page has exactly ${S.spp} sentence${S.spp>1?"s":""}.

Rules:
1. Each sentence has 3 to ${levelCfg().maxWords} words.${S.spp>3?" Keep one story going across all pages; you may split it into short chapters.":""}
2. Use ONLY these kinds of words:
   a. these sight words: ${S.sight.length?S.sight.join(", "):"(none)"}
   b. short, one-syllable decodable words with one short vowel (like cat, sit, hop, bed, bug), spelled only with these letters: ${known}${S.pats.some(p=>p.includes("_e"))?"\n   c. magic-e words for these patterns only: "+S.pats.filter(p=>p.includes("_e")).join(", "):""}
3. Use as many words as you can with these sound patterns, and use each pattern on several pages: ${S.pats.length?S.pats.join(", "):"(none, just simple short-vowel words)"}
   Example words:
${ex||"   (none)"}
4. Do NOT use any other word: no two-syllable words, no vowel teams (ee, ea, oa, ai, oo, ow), no r-controlled vowels (ar, or, er), no silent e unless allowed above, and no irregular words that are not in the sight-word list. Names must be short decodable names like Sam, Pat, Ben or Meg.
5. Tell a tiny story with a beginning, a funny moment and a happy ending. Repetition is good.
6. The title is 2 to 5 words and follows the same rules.

Reply with only JSON in this shape: {"title":"...","pages":["...","..."]}`;
  try{
    const r=await sampleFn.json(prompt,{modelTier:"default",cache:false});
    if(!r||!Array.isArray(r.pages)||!r.pages.length)throw{code:"bad",message:"No pages came back."};
    S.book={title:String(r.title||"My Book"),pages:r.pages.map(String).slice(0,S.pages),heads:[],spp:S.spp,level:S.level,story:[]};
    store.set("state",S);renderBook();
    const t=wordLists(S.book).tricky;
    setStatus(t.length?`Claude's story is ready. Check the tricky words: ${t.join(", ")}. You can change them in the boxes under each page.`:"Claude's story is ready, and every word checks out.");
  }catch(e){
    const m={not_granted:"Claude wasn't allowed to write here. You can still use New story.",rate_limited:"Too many requests right now. Try again in a minute.",cancelled:"Stopped."};
    setStatus(m[e&&e.code]||"Claude couldn't write a story this time. Try again, or use New story.");
    if(e&&e.code==="not_granted")btn.hidden=true;
  }finally{btn.disabled=false}
}

// ---------- PDF ----------
let downloads=null;
function hexRgb(h){return[1,3,5].map(i=>parseInt(h.slice(i,i+2),16))}
function buildPdf(){
  const {jsPDF}=window.jspdf;const doc=new jsPDF({unit:"pt",format:"letter"});
  doc.setProperties({title:S.book.title||"Mini Book",author:"Yu Quan Chen",creator:"Mini Book Maker © 2026 Yu Quan Chen",subject:"Decodable mini-book"});doc.addFileToVFS("A4.ttf",FONT400);doc.addFont("A4.ttf","And","normal");doc.addFileToVFS("A7.ttf",FONT700);doc.addFont("A7.ttf","And","bold");
  const NAVY=[27,42,73],OR=[217,72,15],GR=[150,152,158],COL=hexRgb(S.color);const b=S.book;const L=wordLists(b);
  const segColor=k=>k==="sight"?OR:k==="pat"?COL:NAVY;
  const tokens=text=>analyze(text).map(a=>a.segs);
  const tokW=(tk)=>tk.reduce((s,x)=>s+doc.getTextWidth(x.t),0);
  function lineW(line){doc.setFont("And","bold");return line.reduce((s,t)=>s+tokW(t),0)+doc.getTextWidth(" ")*(line.length-1)}
  function layout(text,maxw,sizes){const tk=tokens(text);for(const sz of sizes.filter(z=>z>=40)){doc.setFontSize(sz);if(lineW(tk)<=maxw)return{sz,lines:[tk]}}for(const sz of sizes){doc.setFontSize(sz);const lines=[[]];for(const t of tk){if(lines[lines.length-1].length&&lineW([...lines[lines.length-1],t])>maxw)lines.push([]);lines[lines.length-1].push(t)}if(lines.length<=2||sz===sizes[sizes.length-1])return{sz,lines}}}
  function drawLine(line,cx,y){doc.setFont("And","bold");let x=cx-lineW(line)/2;const sp=doc.getTextWidth(" ");line.forEach(t=>{t.forEach(s=>{doc.setTextColor(...segColor(s.k));doc.text(s.t,x,y);x+=doc.getTextWidth(s.t)});x+=sp})}
  function frame(oy){doc.setDrawColor(...COL);doc.setLineWidth(3);doc.roundedRect(22,oy+18,568,360,14,14,"S")}
  function dash(x,y,w,h,label){doc.setDrawColor(185,189,198);doc.setLineWidth(1.5);doc.setLineDashPattern([6,5],0);doc.roundedRect(x,y,w,h,10,10,"S");doc.setLineDashPattern([],0);doc.setFont("And","normal");doc.setFontSize(11);doc.setTextColor(180,183,191);doc.text(label,x+w/2,y+h-7,{align:"center"})}
  function center(t,y,sz,col,bold){doc.setFont("And",bold?"bold":"normal");doc.setFontSize(sz);doc.setTextColor(...col);doc.text(t,306,y,{align:"center"})}
  const all=[{k:"cover"},...b.pages.map((p,i)=>({k:"story",p,i})),{k:"words"}];if(all.length%2)all.splice(all.length-1,0,{k:"blank"});
  const half=all.length/2;
  function panel(pg,oy){
    frame(oy);
    if(pg.k==="cover"){
      doc.setFillColor(...COL);doc.roundedRect(52,oy+34,508,57,10,10,"F");center("Mini-Book · "+(LEVELS[b.level||S.level]||LEVELS.K).short,oy+68,15,[255,255,255]);
      const r=layout(b.title,500,[44,40,36,32,28]);doc.setFontSize(r.sz);r.lines.forEach((ln,i)=>drawLine(ln,306,oy+146-(r.lines.length-1)*r.sz*0.6+i*r.sz*1.15));
      dash(52,oy+184,270,130,"Draw the cover picture!");
      doc.setFillColor(...COL);doc.roundedRect(350,oy+184,210,130,12,12,"F");
      const lab=patLabel();let sz=lab.length<=3?76:lab.length<=6?52:lab.length<=10?36:28;doc.setFont("And","bold");doc.setFontSize(sz);while(doc.getTextWidth(lab)>190)doc.setFontSize(--sz);
      doc.setTextColor(255,255,255);doc.text(lab,455,oy+266,{align:"center"});doc.setFont("And","normal");doc.setFontSize(13);doc.text(S.pats.length?"sounds in this book":"sight words",455,oy+298,{align:"center"});
      if(L.heart.length){const hw="Heart words: "+(L.heart.length>9?L.heart.slice(0,8).join(", ")+` and ${L.heart.length-8} more`:L.heart.join(", "));center(hw,oy+338,12,NAVY)}
      center(S.name?"Read by: "+S.name:"Name: ______________________",oy+364,10,GR);
    }else if(pg.k==="story"){
      const g0=pageGeom(+(b.spp||S.spp)||1);const head=b.heads&&b.heads[pg.i];const g=head?Object.assign({},g0,{top:g0.top+30}):g0;
      if(g.pic)dash(52,oy+33,508,g.pic,g.label);
      if(head){doc.setFont("And","bold");doc.setFontSize(16);doc.setTextColor(...COL);doc.text(head,g.align==="center"?306:BOX_X,oy+g0.top+14,{align:g.align==="center"?"center":"left"})}
      const wt=g.bold?"bold":"normal";const meas=(t,sz)=>{doc.setFont("And",wt);doc.setFontSize(sz);return doc.getTextWidth(t)};
      const r=layoutText(pg.p,g,meas);const pad=g.align==="center"?(g.bottom-g.top-r.h)/2:0;
      r.lines.forEach((ln,i)=>{let x=g.align==="center"?306-r.widths[i]/2:BOX_X;const y=oy+g.top+pad+r.sz*0.82+i*r.sz*g.lead;
        doc.setFont("And",wt);doc.setFontSize(r.sz);const sp=doc.getTextWidth(" ");
        ln.forEach(t=>{t.forEach(s=>{doc.setTextColor(...segColor(s.k));doc.text(s.t,x,y);x+=doc.getTextWidth(s.t)});x+=sp})});
      center(`page ${pg.i+1}`,oy+369,10,GR);
    }else if(pg.k==="words"){
      center("Words I can read!",oy+68,28,COL,true);
      let y=oy+100;const nW=L.pat.length+L.dec.length+L.tricky.length+L.heart.length;const fs=nW>26?15:nW>18?19:24;const lh=fs*1.25;
      const block=(label,words,kind)=>{if(!words.length)return;doc.setFont("And","normal");doc.setFontSize(12);doc.setTextColor(...GR);doc.text(label,60,y);y+=lh+2;
        doc.setFont("And","bold");doc.setFontSize(fs);let x=60;words.forEach(w=>{const segs=kind==="pat"?analyze(w)[0].segs:[{t:w,k:kind}];const ww=segs.reduce((s,q)=>s+doc.getTextWidth(q.t),0)+fs*0.8;if(x+ww>552){x=60;y+=lh}let xx=x;segs.forEach(q=>{doc.setTextColor(...segColor(q.k));doc.text(q.t,xx,y);xx+=doc.getTextWidth(q.t)});x+=ww});y+=lh+2};
      block("Sound-pattern words (tap and blend):",L.pat,"pat");block("Other words:",[...L.dec,...L.tricky.filter(w=>!L.pat.includes(w))],"plain");block("Heart words (we just know them!):",L.heart,"sight");
      center("Read it again tomorrow. Can you read it faster?",oy+338,12,NAVY);center("I read this book on: ______________   Smiley stickers: ________",oy+356,10,GR);
    }
  }
  for(let i=0;i<half;i++){
    if(i)doc.addPage();panel(all[i],0);panel(all[i+half],396);
    doc.setDrawColor(128,128,128);doc.setLineWidth(.8);doc.setLineDashPattern([4,4],0);doc.line(0,396,612,396);doc.setLineDashPattern([],0);
    doc.setFont("And","normal");doc.setFontSize(8);doc.setTextColor(128,128,128);doc.text("cut here",8,392);
  }
  return doc.output("arraybuffer");
}
$("btnPdf").onclick=async()=>{
  try{setStatus("Making the PDF…");const buf=buildPdf();const fn=(S.book.title||"Mini Book").replace(/[^A-Za-z0-9 ,!'-]/g,"").trim()+".pdf";
    await downloads.save({filename:fn,data:buf});setStatus("PDF saved. Print it single-sided, cut on the dotted lines, and staple.");}
  catch(e){setStatus(e&&e.code==="declined"?"Download cancelled.":e&&e.code?"The download isn't available here right now.":"Something went wrong making the PDF. Try again.")}
};

// ---------- boot ----------
$("childName").value=S.name||"";$("pageCount").value=String(S.pages);renderLevel();renderStoryPick();
if(S.book&&!S.book.spp)S.book=null;
changed();booted=true;
try{document.fonts.load('700 20px Andika').then(()=>document.fonts.load('400 20px Andika')).then(()=>renderBook(true))}catch(e){}
(async()=>{
  if(!window.claude||!window.claude.use)return;
  try{sampleFn=await claude.use("sample");if(sampleFn){$("btnClaude").hidden=false;$("btnClaude").onclick=askClaude}}catch(e){}
  try{downloads=await claude.use("downloads");if(downloads&&window.jspdf)$("btnPdf").hidden=false}catch(e){}
})();
