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
  "-at":"cat:N bat:N rat:N hat:n mat:L sat:d pat:T fat:a Pat:p","-an":"man:N fan:n pan:L van:L ran:d tan:a Dan:p Nan:p",
  "-ap":"cap:n map:n trap:n lap:L nap:v clap:v flap:v tap:T zap:T","-ag":"bag:L rag:n flag:n wag:v tag:T drag:T",
  "-ad":"dad:N pad:L mad:a sad:a bad:a glad:a Brad:p Chad:p","-am":"ram:N clam:N jam:f ham:f yam:f Sam:p Pam:p",
  "-ack":"sack:L pack:n snack:f black:a Jack:p","-ip":"ship:L hip:b lip:b chip:b trip:v dip:v drip:n flip:v skip:v sip:F tip:T zip:T",
  "-it":"pit:L kit:n sit:v hit:T fit:a","-in":"twin:N bin:L pin:n fin:n tin:n win:v spin:v grin:v",
  "-ig":"pig:N wig:n fig:f twig:n dig:v jig:v big:a","-id":"kid:N lid:n hid:d slid:d Sid:p",
  "-ick":"chick:N stick:n brick:n kick:T lick:F pick:T sick:a Rick:p","-op":"shop:L mop:n top:n hop:v pop:v stop:v drop:T",
  "-ot":"pot:L cot:L spot:L dot:n got:d hot:a Dot:p","-og":"dog:N frog:N hog:N log:L jog:v",
  "-ock":"rock:L block:n sock:n lock:n clock:n","-ug":"bug:N pug:N slug:N rug:L mug:L jug:L hug:T tug:T dug:d",
  "-un":"sun:n bun:f run:v spun:d fun:a","-ut":"hut:L nut:f cut:T shut:T","-ub":"cub:N tub:L club:n rub:T scrub:T",
  "-uck":"duck:N truck:L stuck:a","-en":"hen:N pen:L den:L Ben:p Jen:p","-et":"pet:N vet:N jet:L net:n get:T wet:a",
  "-ed":"bed:L sled:L shed:L red:a Ted:p Ned:p","-eg":"leg:b peg:n Meg:p","-ell":"bell:n shell:n yell:v smell:T fell:d Nell:p"}},
 {g:"Beginning blends",k:"start",items:{
  "bl":"block:n blob:n black:a","cl":"clam:N clock:n club:n clip:b clap:v","fl":"flag:n flap:v flip:v flop:v flat:a",
  "gl":"glob:n glad:a glum:a","pl":"plum:f plug:n plop:v","sl":"slug:N sled:L slip:v slid:d slim:a",
  "br":"brick:n brush:n brag:v Brad:p","cr":"crab:N crib:L crash:v","dr":"drum:n dress:n drip:n drag:T drop:T",
  "fr":"frog:N fresh:a Fred:p","gr":"grub:N grass:L grin:v grab:T grip:T Greg:p","pr":"prop:n press:T",
  "tr":"truck:L tram:L trap:n trip:v trot:v trim:T","sk":"skin:b skip:v skid:v","sm":"smell:T smug:a",
  "sn":"snack:f sniff:v snap:T snip:T snug:a","sp":"spot:L spud:f spin:v spill:T","st":"stick:n stem:n stack:n stop:v step:v stuck:a Stan:p",
  "sw":"swim:v swam:d","tw":"twin:N twig:n"}},
 {g:"Ending blends",k:"end",items:{
  "-st":"nest:L vest:n list:n dust:n fast:a rest:v","-nd":"sand:L pond:L land:L hand:b band:n","-mp":"camp:L lamp:n bump:n jump:v stamp:v",
  "-nt":"tent:L plant:n hunt:v","-sk":"desk:L mask:n tusk:n","-ll":"hill:L bell:n doll:n fill:T spill:T Bill:p"}},
 {g:"Digraphs",k:"any",items:{
  "sh":"fish:N ship:L shop:L dish:L shed:L shell:n wish:v rush:v shut:T","ch":"chick:N chest:L chip:b chin:b chop:F rich:a Chad:p",
  "th":"moth:N bath:L path:L thin:a thick:a Beth:p","wh":"whip:T whisk:T","ck":"duck:N rock:L sock:n kick:T pick:T",
  "ng":"king:N ring:n wing:n song:n sing:v long:a"}},
 {g:"Magic e (long vowels)",k:"magic",items:{
  "a_e":"lake:L cave:L cake:f game:n gate:n bake:F Jake:p","i_e":"slide:L bike:n kite:n hike:v Mike:p",
  "o_e":"home:L hole:L rope:n bone:n nose:b Rose:p","u_e":"mule:N cube:n tube:n cute:a"}}
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
let S=Object.assign({grade:"Pre-K",sight:["a","I","the","is","see","and","can","look","my","go"],pats:["dr","-ip","-un"],name:"",pages:8,level:"K",spp:1,color:"#007f8a",letters:"abcdefghijklmnopqrstuvwxyz".split(""),book:null},store.get("state",{}));

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
const splitSent=s=>s.split(/(?<=[.!?]"?)\s+(?=["A-Z])/).filter(Boolean);
const sentCount=s=>splitSent(s).length;

// ---------- word analysis ----------
const sightSet=()=>new Set(S.sight.map(w=>w.toLowerCase()));
function patSpan(lc,id){
  const k=PATKIND[id];
  if(k==="start"){return lc.startsWith(id)?[0,id.length]:null}
  if(k==="end"){const p=id.replace("-","");const m=lc.match(new RegExp(p+"s?$"));return m?[m.index,m.index+p.length]:null}
  if(k==="any"){const i=lc.indexOf(id);return i>=0?[i,i+id.length]:null}
  if(k==="magic"){const m=lc.match(new RegExp(id[0]+"[^aeiou]e(s)?$"));return m?[m.index,m.index+3]:null}
  return null;
}
function findPat(lc){for(const id of S.pats){const s=patSpan(lc,id);if(s)return{id,s}}return null}
function lettersOk(lc){const L=new Set(S.letters);return [...lc].every(ch=>L.has(ch))}
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
  [1,"INTRO","{P} has a {A}.|This is {P}. {P} has a {A}.|Here is {P}. Here is the {A}.|Look! It is {P} and a {A}.|{P} has a little {A}.|Look at {P} and the {A}.|{P} has a big {A}.|I see {P}. I see a {A}."],
  [2,"","The {A} is {Q}.|It is a {Q} {A}.|The {A} is so {Q}!|The {A} is very {Q}.|What a {Q} {A}!|The {A} is little and {Q}.|It is a funny little {A}."],
  [3,"","The {A} can {V}.|See the {A} {V}!|Look at the {A} {V}!|{V}, {A}, {V}!|The {A} will {V} and {V}.|The {A} can run and jump.|Look! The {A} can jump!|The {A} is so funny!"],
  [3,"O","{P} got a {O} for the {A}.|Here is a {O} for the {A}.|{P} made a {O} for the {A}.|{P} gave the {A} a {O}.|It is a {O} for the {A}.|{P} made a red {O} for the {A}.|Here is a little {O} for the {A}.|{P} got a blue {O} for the {A}.|Look! A yellow {O} for the {A}!"],
  [3,"O","The {A} can play with the {O}.|The {A} is glad. It can play with the {O}.|The {A} can sit on the {O}."],
  [1,"","Then the {A} ran away!|The {A} ran away!|Help! The {A} ran away!|The {A} is not {on} the {L}!|Where did the {A} go?|The {A} ran away! Where did it go?|Down, down, down! The {A} ran away."],
  [2,"","Where is the {A}?|{P} is sad.|{P} is so sad.|{P} said, \"Come here, {A}!\"|\"Come back, {A}!\" said {P}.|\"Where is my {A}?\" said {P}.|\"I can not find my {A}!\" said {P}."],
  [1,"","Is it {on} the {L}?|{P} ran to the {L}.|Look {on} the {L}!|Is the {A} {on} the {L}?|{P} went to the {L}.|\"I will look {on} the {L},\" said {P}.|{P} can look {on} the {L}."],
  [2,"","No, it is not.|It is not there.|No {A}!|No, the {A} is not there.|It is not {on} the {L}."],
  [3,"H","{P} will ask {P2}.|{P} ran to get {P2}.|{P2} came to help.|\"Can you help me, {P2}?\" said {P}."],
  [3,"H","{P2} can help.|\"Yes, I will help!\" said {P2}.|{P2} said, \"We will find it!\"|\"I can help you find it,\" said {P2}."],
  [1,"","They look {on2} the {L2}.|They ran to the {L2}.|Is it {on2} the {L2}?|Look {on2} the {L2}!|They went to the {L2}.|One, two, three! Look {on2} the {L2}!|They run to the {L2}.|Come on! Go to the {L2}!"],
  [2,"","Yes! There it is!|Look! There is the {A}!|Here it is!|Yes! It is the {A}!|There is the {A}!"],
  [1,"","The {A} is {on2} the {L2}.|The {A} sat {on2} the {L2}.|The {A} is up {on2} the {L2}.|The {A} was {on2} the {L2}."],
  [3,"","The {A} can not get down.|The {A} is stuck.|Come down, {A}!|Jump down, {A}!|The {A} can not jump down.|Come down, {A}! Jump!"],
  [1,"","{P} can hug the {A}.|{P} got the {A}.|Come here, {A}!|{P} is glad. The {A} is glad.|{P} gave the {A} a hug.|{P} can hug the {A}. \"You are my {A}!\"|\"Come here, my little {A}!\" said {P}."],
  [3,"","Here is a {F} for you, {A}.|{P} gave the {A} a {F}.|The {A} ate a {F}.|The {A} can eat a {F}. Yum!|The {A} ate a {F}. Yum!|{P} and the {A} eat a {F}."],
  [2,"","Thank you, {P2}!|\"Thank you!\" said {P}.|They ran back to the {L}.|Now they can play.|Now the {A} can {V}."],
  [1,"","{P} and the {A} nap. The end.|\"I like you, {A}!\" said {P}.|Now the {A} can nap.|The {A} is glad to be back.|The end.|\"I like my {A}!\" said {P}.|\"You are my funny little {A}!\" said {P}.|\"We are home!\" said {P}."]]},
 {id:"trip",titles:["A Trip to the {X}","The {X} Trip","{P} and the {A}","The {A}"],beats:[
  [1,"","{P} and {P2} will go on a trip.|{P} and {P2} want to go on a trip.|\"Let us go on a trip!\" said {P}.|Today {P} and {P2} go on a trip.|\"Can we go on a trip?\" said {P2}."],
  [1,"","They get in the {C}.|They go in the {C}.|Get in the {C}!|In the {C} they go.|They ride in the {C}.|They go in a big red {C}.|Here is a big {C}. Get in!"],
  [2,"","The {C} can go fast.|Go, {C}, go!|The {C} went up and down.|It is a big {C}.|The {C} is so fast!|Go, go, go!|One, two, three, go!|Up and down, up and down!"],
  [1,"","They stop at the {X}.|They get to the {X}.|Here is the {X}!|Look at the {X}!|They are at the {X}."],
  [3,"","It is a big {X}.|The {X} is so big!|The {X} is pretty.|What a pretty {X}!|It is warm at the {X}."],
  [1,"","{P} can see a {A}.|Look! A {A}!|What is that? It is a {A}!|Look! There is a {A}.|{P2} saw a {A}.|Look! I see a {A}!|\"I see a little {A}!\" said {P}."],
  [2,"","The {A} is {Q}.|It is a {Q} {A}.|The {A} is so {Q}!|What a {Q} {A}!|It is a funny little {A}.|The {A} is big and {Q}."],
  [1,"","The {A} can {V}.|Look at the {A} {V}!|See the {A} {V}!|{V}, {A}, {V}!|The {A} can run and jump.|Look! The {A} can jump!"],
  [2,"","{P2} said, \"I want to {V} too!\"|\"Can we {V} too?\" said {P}.|\"We can {V} too!\" said {P2}.|\"Let us {V}!\" said {P}.|\"I want to play!\" said {P}.|\"Can I play too?\" said {P2}."],
  [1,"","They {V} with the {A}.|{P} and {P2} {V} with the {A}.|Now they all {V}!|They all {V} together."],
  [2,"","It is so fun!|This is fun!|What fun!|They laugh and laugh.|It is so much fun!|It is so funny!|We can play and play!"],
  [3,"F","Here is a {F}. Yum!|They eat a {F}.|{P} has a {F}.|{P} got a {F} for the {A}.|They all ate a {F}.|{P} has a {F}. It is good!"],
  [3,"F","The {A} ate it all!|The {A} ate the {F}!|Yum, yum! The {A} ate it.|The {A} can eat it too."],
  [2,"","Now they must go.|They must go back.|Get in the {C}! We must go.|\"Come on, we must go!\" said {P}."],
  [3,"","The {A} is sad.|\"We will come back!\" said {P}.|We will come back, {A}!|Thank you, {A}!"],
  [1,"","They go back in the {C}.|The {C} went back.|Back they go in the {C}.|They ride back in the {C}."],
  [1,"","What a fun trip!|It was a good trip.|It was a fun trip. The end.|\"I like the {X}!\" said {P2}.|\"We are home!\" said {P}. The end.|They are home. What a fun trip!"]]},
 {id:"cook",titles:["{P} and the {K}","The {K}","{P} Can Make a {K}","The {A}"],beats:[
  [1,"","{P} can make a {K}.|\"Let us make a {K}!\" said {P}.|{P} will make a {K}.|Today {P} will make a {K}.|\"I can make a {K}!\" said {P}.|{P} will make a big {K}."],
  [2,"","{P} got a pot and a pan.|{P} gets a big pot.|Here is a pot. Here is a pan.|Get the pot, {P}!"],
  [1,"","Put it in the pot.|In it goes!|Put it all in!|{P} put it in the pot."],
  [2,"","Mix, mix, mix!|Mix it up, {P}!|{P} can mix it.|{P} will mix and mix."],
  [1,"","In came the {A}.|Look! A {A} came in.|Here is a {A}.|A {A} ran in.|In came a funny little {A}.|Look! A {A} came in to play."],
  [3,"INTRO","The {A} is {Q}.|It is a {Q} {A}.|The {A} is so {Q}!"],
  [1,"","The {A} can smell it.|Sniff, sniff! The {A} can smell it.|The {A} can smell the {K}."],
  [1,"","{P} said, \"No, {A}! Not yet!\"|\"Not yet, {A}!\" said {P}.|\"Stop, {A}!\" said {P}.|\"No, no, {A}!\" said {P}."],
  [2,"","The {A} is sad.|The {A} sat and sat.|The {A} sat down. It is sad.|The {A} can not have it yet."],
  [1,"","Now the {K} is hot.|It is done!|Now it is done!|The {K} is hot!|The {K} is done!|Look! I made a {K}!|The {K} is big and hot."],
  [3,"","{P} cut the {K}.|Cut, cut, cut!|{P} can cut it.|{P} will cut it up."],
  [2,"","One for me and one for you!|Here is one for you, {A}.|\"This is for you,\" said {P}.|{P} gave the {A} a bit."],
  [1,"","The {A} is glad.|Yum, yum, yum!|The {A} is so glad!|It is good!"],
  [1,"","{P} and the {A} ate it all.|They ate it all up.|{P} and the {A} are full.|What a good {K}!|They ate it all. They are full!"],
  [2,"","The end.|Now they nap. The end.|{P} and the {A} nap."]]},
 {id:"mud",titles:["The {A} and the Mud","Mud!","{P} and the {A}","The {A}"],beats:[
  [1,"INTRO","{P} has a {A}.|This is {P} and the {A}.|Here is {P}. Here is a {A}.|Look at {P} and the {A}."],
  [2,"INTRO","The {A} is {Q}.|It is a {Q} {A}.|The {A} is so {Q}!"],
  [1,"","The {A} ran in the mud.|The {A} can jump in the mud.|Look! The {A} is in the mud.|Jump! The {A} is in the mud!|Look! My {A} is in the mud!|Jump, jump, jump! The {A} is in the mud.|The {A} ran and jumped in the mud."],
  [2,"","Mud, mud, mud!|The {A} got mud on it.|It is so fun!|The {A} will not stop.|The {A} can run and jump in the mud.|It is so funny!"],
  [1,"","Now the {A} is a mess.|The {A} is a big mess!|Look at the {A}. What a mess!"],
  [1,"","{P} said, \"You must get in the tub!\"|\"Get in the tub, {A}!\" said {P}.|\"Come here, {A}!\" said {P}."],
  [2,"","The {A} will not get in.|The {A} ran and ran.|The {A} ran away!|\"No, no, no!\" said the {A}."],
  [2,"","{P} ran after it.|{P} ran and ran.|Come back, {A}!|Stop, {A}, stop!"],
  [1,"","{P} fell in the mud!|Plop! {P} fell in the mud.|Down went {P} in the mud!|Splat! {P} fell in the mud."],
  [2,"","Now {P} is a mess too!|Look at {P}! What a mess!|{P} is a mess. The {A} is a mess."],
  [1,"","They both get in the tub.|Into the tub they go!|They get in the tub.|{P} and the {A} get in the tub."],
  [2,"","Scrub, scrub, scrub!|Rub, rub, rub!|{P} can scrub the {A}."],
  [1,"","Now they are not a mess.|Now they are clean.|Now the {A} is clean.|The {A} is wet, but it is clean."],
  [3,"","{P} and the {A} are wet.|The {A} is wet. {P} is wet."],
  [1,"","{P} and the {A} nap. The end.|Now they can nap. The end.|The {A} is glad. The end.|Do not get in the mud, {A}!|\"You are my little {A}!\" said {P}.|They are clean. The end."]]}
];
const ANIMALS=new Set("cat bat rat ram pig dog frog hog bug pug slug cub duck hen chick crab mule ant fox".split(" "));
const ADJ_OK=new Set("fat big sad glad wet red black fast slim snug cute thin tan".split(" "));
const V_NO=new Set("win wish brag crash trip press hunt".split(" "));
const O_NO=new Set("dot drip trap list dust stem blob glob prop song sun bump tusk band plug stack skin tin peg".split(" "));
const VEH=new Set("van truck jet tram ship sled bus".split(" "));
const OUT=new Set("pond hill camp lake sand cave shop grass".split(" "));
const L_NO=new Set("mug jug pot pan cup bag sack dish lap pad spot pit bin chest hole jet tram bath block path land".split(" "));
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
function pickCast(plots){
  const pools=castPools();const usedPat=new Set();const taken=new Set();const cast={};
  const ok=w=>lettersOk(w.toLowerCase())&&(decodable(w.toLowerCase())||!!findPat(w.toLowerCase()))&&!sightSet().has(w.toLowerCase());
  const choose=(slot,pool)=>{
    const c=shuffle(pool.filter(w=>ok(w)&&!taken.has(w.toLowerCase())));
    const withPat=c.filter(w=>findPat(w.toLowerCase()));
    const fresh=withPat.filter(w=>!usedPat.has(findPat(w.toLowerCase()).id));
    const w=fresh[0]||withPat[0]||c[0]||null;
    if(w){taken.add(w.toLowerCase());const p=findPat(w.toLowerCase());if(p)usedPat.add(p.id)}
    cast[slot]=w;
  };
  // the animal and main name first, so the most-repeated words carry the pattern
  const text=plots.map(plot=>plot.beats.map(b=>b[2]).join("|")+plot.titles.join("|")).join("|")+(plots.length>1&&plots.some(p=>p.id==="trip")?"|{A2}{A2}":"");const cnt={};(text.match(/\{(\w+)\}/g)||[]).forEach(m=>{const k=m.slice(1,-1);if(pools[k.replace("2","")])cnt[k]=(cnt[k]||0)+1});
  Object.keys(cnt).sort((a,b)=>(b==="A")-(a==="A")||cnt[b]-cnt[a]).forEach(s=>choose(s,pools[s.replace("2","")]));
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
function tellChain(plots,cast){
  const sw=sightSet();const covered=new Set();let friend=false;const lines=[];const cfg=levelCfg();const spp=+S.spp||1;
  let petKnown=false;
  plots.forEach((plot,ci)=>{
    const last=ci===plots.length-1;
    for(const [pri,grp,vs0] of plot.beats){
      if(petKnown&&grp==="INTRO")continue;
      let vs=vs0;if(plots.length>1&&plot.id==="trip")vs=vs.replace(/\{A\}/g,"{A2}");
      let bestV=null,bestS=-1e9;
      for(const v of shuffle(vs.split("|"))){
        if(!last&&/The end/.test(v))continue;
        if(petKnown&&/\b[Aa] (funny |little |big )*\{A\}/.test(v))continue;
        if(v.includes("{P2}")&&!friend&&!/\{P2\} (came|will|can|said)|get \{P2\}|ask \{P2\}|help me, \{P2\}|and \{P2\}/.test(v))continue;
        const s=fillBeat(v,cast);if(!s)continue;
        const ws=sentWords(s);if(!ws.every(wordOk))continue;
        const parts=splitSent(s);const longest=Math.max(...parts.map(p=>sentWords(p).length));
        const gain=new Set(ws.map(w=>w.toLowerCase()).filter(w=>sw.has(w)&&!covered.has(w))).size;
        let sc=gain*4+Math.random();
        if(longest>cfg.maxWords)sc-=20;
        if(spp===1&&parts.length>1)sc-=3;
        if(spp>=4)sc+=parts.length*0.6;
        if(sc>bestS){bestS=sc;bestV=s}
      }
      if(!bestV)continue;
      if(cast.P2&&bestV.includes(cast.P2))friend=true;
      sentWords(bestV).forEach(w=>{if(sw.has(w.toLowerCase()))covered.add(w.toLowerCase())});
      lines.push({s:bestV,pri,grp:grp?ci+grp:"",ch:ci,n:sentCount(bestV)});
    }
    if(!(plots.length>1&&plot.id==="trip"))petKnown=true;
  });
  if(cast.P2&&!lines.some(l=>l.pri===1&&l.s.includes(cast.P2)))lines.forEach(l=>{if(l.s.includes(cast.P2)){l.pri=3;l.grp="H"}});
  return lines;
}
const total=ls=>ls.reduce((t,l)=>t+l.n,0);
function trimLines(lines,target){
  const sw=sightSet();
  const uniqueGain=(set)=>{const other=new Set();lines.filter(l=>!set.includes(l)).forEach(l=>sentWords(l.s).forEach(w=>other.add(w.toLowerCase())));
    return new Set(set.flatMap(l=>sentWords(l.s).map(w=>w.toLowerCase())).filter(w=>sw.has(w)&&!other.has(w))).size};
  while(total(lines)>target){
    const maxPri=Math.max(...lines.map(l=>l.pri));if(maxPri===1)break;
    const groups={};lines.filter(l=>l.pri===maxPri).forEach(l=>{const k=l.grp||("#"+lines.indexOf(l));(groups[k]=groups[k]||[]).push(l)});
    const best=Object.values(groups).sort((a,b)=>uniqueGain(a)-uniqueGain(b)||Math.random()-.5)[0];
    best.forEach(l=>lines.splice(lines.indexOf(l),1));
  }
  return lines;
}
function packPages(lines,n){
  const pages=[];let i=0;let remS=total(lines);
  for(let p=0;p<n&&i<lines.length;p++){
    const target=Math.ceil(remS/(n-p));let cur=[],c=0;
    while(i<lines.length&&(c===0||c+lines[i].n<=target||(p===n-1))){cur.push(lines[i].s);c+=lines[i].n;i++}
    remS-=c;pages.push(cur.join(" "));
  }
  while(i<lines.length){pages[pages.length-1]+=" "+lines[i].s;i++}
  return pages;
}
function generate(){
  const want=+S.pages;const spp=+S.spp||1;const sw=sightSet();const T=want*spp;
  const tries=[];
  for(const first of shuffle(PLOTS)){
    const order=[first,...shuffle(PLOTS.filter(p=>p!==first))];
    for(let k=0;k<2;k++){
      const cast=pickCast(order);if(!cast.A||!cast.P)continue;
      let lines=null,used=1;
      for(let c=1;c<=order.length;c++){lines=tellChain(order.slice(0,c),cast);used=c;if(total(lines)>=T)break}
      lines=trimLines(lines,T);
      const tot=total(lines);
      const nPages=Math.max(1,Math.min(want,spp===1?tot:Math.floor(tot/spp)||1));
      const pages=packPages(lines,nPages);
      const usedW=new Set(pages.flatMap(p=>sentWords(p).map(w=>w.toLowerCase())).filter(w=>sw.has(w)));
      const patUses=pages.reduce((t,p)=>t+sentWords(p).filter(w=>findPat(w.toLowerCase())).length,0);
      tries.push({order,cast,pages,chapters:used,score:usedW.size*3+Math.min(patUses,24)+pages.length*6-used*2+Math.random()*6});
    }
  }
  tries.sort((a,b)=>b.score-a.score);
  const pickT=tries.length?tries[Math.floor(Math.random()*Math.min(2,tries.length))]:null;
  if(!pickT)return{title:"My Book",pages:["I can read!"]};
  const {order,cast,pages}=pickT;
  const small=new Set(["the","a","and","to","in","on","of"]);
  let title=cast.P;
  for(const t of order[0].titles){const s=fillBeat(t,cast);if(!s)continue;if(!sentWords(s).every(wordOk))continue;
    title=s.split(" ").map((w,i)=>i&&small.has(w.toLowerCase())?w.toLowerCase():w.charAt(0).toUpperCase()+w.slice(1)).join(" ");break}
  const used=new Set(pages.flatMap(p=>sentWords(p).map(w=>w.toLowerCase())));
  const unused=[...sw].filter(w=>!used.has(w));const tipCount={};
  PLOTS.forEach(p=>p.beats.forEach(b=>b[2].split("|").forEach(v=>{const s=fillBeat(v,cast);if(!s)return;const ws=sentWords(s).map(w=>w.toLowerCase());
    if(!ws.some(w=>unused.includes(w)))return;const bl=[...new Set(ws.filter(w=>!wordOk(w)))];if(bl.length&&bl.length<=2)bl.forEach(w=>{if(DOLCH_ALL.has(w))tipCount[w]=(tipCount[w]||0)+1})})));
  LAST={unused,tips:Object.entries(tipCount).sort((a,b)=>b[1]-a[1]).slice(0,4).map(x=>x[0])};
  return{title,pages,spp,level:S.level};
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
  g[2].split(" ").forEach(w=>{const b=document.createElement("button");b.className="chip sw";b.textContent=w;b.setAttribute("aria-pressed",sw.has(w.toLowerCase()));
    b.onclick=()=>{toggleSight(w);};$("swChips").append(b)});
}
function toggleSight(w){const lc=w.toLowerCase();if(sightSet().has(lc))S.sight=S.sight.filter(x=>x.toLowerCase()!==lc);else S.sight.push(w);changed()}
$("swAll").onclick=()=>{const g=DOLCH.find(d=>d[0]===S.grade);const sw=sightSet();g[2].split(" ").forEach(w=>{if(!sw.has(w.toLowerCase()))S.sight.push(w)});changed()};
$("swNone").onclick=()=>{const g=new Set(DOLCH.find(d=>d[0]===S.grade)[2].toLowerCase().split(" "));S.sight=S.sight.filter(w=>!g.has(w.toLowerCase()));changed()};
$("swClearAll").onclick=()=>{S.sight=[];changed()};
function renderPats(){
  const host=$("patGroups");host.innerHTML="";
  PATS.forEach(g=>{
    const t=document.createElement("div");t.className="group-title";t.innerHTML=`<span>${g.g}</span>`;host.append(t);
    const c=document.createElement("div");c.className="chips";c.style.maxHeight="none";
    Object.keys(g.items).forEach(id=>{const b=document.createElement("button");b.className="chip";b.textContent=id;b.setAttribute("aria-pressed",S.pats.includes(id));
      b.onclick=()=>{S.pats=S.pats.includes(id)?S.pats.filter(x=>x!==id):[...S.pats,id];changed()};c.append(b)});
    host.append(c);
  });
}
function renderLetters(){
  $("letters").innerHTML="";"abcdefghijklmnopqrstuvwxyz".split("").forEach(l=>{const b=document.createElement("button");b.className="chip";b.textContent=l;b.setAttribute("aria-pressed",S.letters.includes(l));
    b.onclick=()=>{S.letters=S.letters.includes(l)?S.letters.filter(x=>x!==l):[...S.letters,l];changed()};$("letters").append(b)});
}
function renderSwatches(){$("swatches").innerHTML="";COLORS.forEach(([n,c])=>{const b=document.createElement("button");b.className="swatch";b.style.background=c;b.title=n;b.setAttribute("aria-label",n+" book color");b.setAttribute("aria-pressed",S.color===c);b.onclick=()=>{S.color=c;changed()};$("swatches").append(b)})}
let booted=false;
let lastSig="";
function changed(){const sig=JSON.stringify([S.sight,S.pats,S.letters]);if(booted&&sig!==lastSig){S.book=generate();setStatus("New story made with your choices.")}lastSig=sig;store.set("state",S);renderTabs();renderSight();renderPats();renderLetters();renderSwatches();renderBook()}
$("childName").oninput=e=>{S.name=e.target.value;store.set("state",S);renderBook()};
$("pageCount").onchange=e=>{S.pages=+e.target.value;S.book=generate();store.set("state",S);renderBook()};
function renderLevel(){
  const sel=$("level");if(!sel.options.length)Object.entries(LEVELS).forEach(([k,v])=>{const o=document.createElement("option");o.value=k;o.textContent=v.label;sel.append(o)});
  sel.value=S.level in LEVELS?S.level:"K";const c=levelCfg();
  if(!(S.spp>=c.min&&S.spp<=c.max))S.spp=c.def;
  const sp=$("spp");sp.innerHTML="";for(let i=c.min;i<=c.max;i++){const o=document.createElement("option");o.value=i;o.textContent=i;sp.append(o)}sp.value=String(S.spp);sp.disabled=c.min===c.max;
  $("levelHint").textContent=c.hint;
}
$("level").onchange=e=>{S.level=e.target.value;S.spp=levelCfg().def;renderLevel();S.book=generate();store.set("state",S);renderBook();setStatus("New story made for "+levelCfg().short+".")};
$("spp").onchange=e=>{S.spp=+e.target.value;S.book=generate();store.set("state",S);renderBook();setStatus(`New story with ${S.spp} sentence${S.spp>1?"s":""} on each page.`)};
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
function renderBook(keepTitle){
  document.documentElement.style.setProperty("--book-col",S.color);
  if(!S.book)S.book=generate();
  const b=S.book;if(!keepTitle)$("bookTitle").value=b.title;
  const L=wordLists(b);const host=$("pages");host.innerHTML="";
  const trickyCount=L.tricky.length;
  const patUses=b.pages.reduce((n,p)=>n+analyze(p).filter(a=>a.word&&a.word.k==="pat").length,0);
  $("stats").innerHTML=`<span class="pill">${b.pages.length} story pages · ${Math.ceil((b.pages.length+2)/2)} sheets · ${b.spp||S.spp} sentence${(b.spp||S.spp)>1?"s":""} a page</span>`+(b.pages.length<S.pages?`<span class="pill warn">${shortNote(b)}</span>`:"")+`${sightPill(b)}<span class="pill ok">${patUses} pattern words</span>`+
    (trickyCount?`<span class="pill warn">${trickyCount} tricky: ${esc(L.tricky.join(", "))}</span>`:`<span class="pill ok">Every word checks out</span>`);
  const tb=$("tipAdd");if(tb)tb.onclick=()=>{LAST.tips.forEach(w=>{if(!sightSet().has(w))S.sight.push(w==="i"?"I":w)});S.book=generate();changed();setStatus("Added "+LAST.tips.join(", ")+" and made a new story.")};
  // cover
  const heartOnCover=L.heart.length>9?L.heart.slice(0,8).join(", ")+` and ${L.heart.length-8} more`:L.heart.join(", ");
  const big=S.pats.length?Math.max(5,15-patLabel().length*1.1):12;
  add(`<div class="fr"></div><div class="band">Mini-Book · ${esc((LEVELS[b.level||S.level]||LEVELS.K).short)}</div><div class="title">${richHTML(b.title)}</div><div class="cpic">Draw the cover picture!</div>
    <div class="badge"><div class="big" style="font-size:${big}cqw">${esc(patLabel())}</div><div class="lab">${S.pats.length?"sounds in this book":"sight words"}</div></div>
    <div class="cfoot">${heartOnCover?`Heart words: ${esc(heartOnCover)}`:""}<div class="nm">${S.name?"Read by: "+esc(S.name):"Name: ______________________"}</div></div>`,"Cover");
  const g=pageGeom(+(b.spp||S.spp)||1);const cq=v=>(v/6.12).toFixed(3)+"cqw";
  b.pages.forEach((p,i)=>{
    const r=layoutText(p,g,measurePreview(g.bold));
    const pad=g.align==="center"?(g.bottom-g.top-r.h)/2:0;
    const lines=r.lines.map(l=>`<div style="height:${cq(r.sz*g.lead)};white-space:nowrap">${l.map(t=>t.map(s=>`<span class="${s.k==="sight"?"s-sight":s.k==="pat"?"s-pat":""}${t.tricky&&s.k!=="sight"?" s-tricky":""}">${esc(s.t)}</span>`).join("")).join(" ")}</div>`).join("");
    const pic=g.pic?`<div class="pic" style="top:${cq(33)};height:${cq(g.pic)}">${g.label}</div>`:"";
    add(`<div class="fr"></div>${pic}<div class="txt" style="left:${cq(BOX_X)};width:${cq(BOX_W)};top:${cq(g.top+pad)};font-size:${cq(r.sz)};line-height:${g.lead};text-align:${g.align};font-weight:${g.bold?700:400}">${lines}</div><div class="pn">page ${i+1}</div>`,`Page ${i+1}`,i);
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
$("btnNew").onclick=()=>{S.book=generate();store.set("state",S);renderBook();setStatus("New story ready.")};
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
    S.book={title:String(r.title||"My Book"),pages:r.pages.map(String).slice(0,S.pages),spp:S.spp,level:S.level};
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
      const g=pageGeom(+(b.spp||S.spp)||1);
      if(g.pic)dash(52,oy+33,508,g.pic,g.label);
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
$("childName").value=S.name||"";$("pageCount").value=String(S.pages);renderLevel();
if(S.book&&!S.book.spp)S.book=null;
changed();booted=true;
try{document.fonts.load('700 20px Andika').then(()=>document.fonts.load('400 20px Andika')).then(()=>renderBook(true))}catch(e){}
(async()=>{
  if(!window.claude||!window.claude.use)return;
  try{sampleFn=await claude.use("sample");if(sampleFn){$("btnClaude").hidden=false;$("btnClaude").onclick=askClaude}}catch(e){}
  try{downloads=await claude.use("downloads");if(downloads&&window.jspdf)$("btnPdf").hidden=false}catch(e){}
})();
