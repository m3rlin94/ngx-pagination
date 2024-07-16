import"./chunk-FDERIQAA.js";var m="[A-Za-z$_][0-9A-Za-z$_]*",x=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],D=["true","false","null","undefined","NaN","Infinity"],k=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],B=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],U=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],h=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],P=[].concat(U,k,B);function J(n){let e=n.regex,f=(a,{after:l})=>{let u="</"+a[0].slice(1);return a.input.indexOf(u,l)!==-1},t=m,g={begin:"<>",end:"</>"},R=/<[A-Za-z0-9\\._:-]+\s*\/>/,o={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(a,l)=>{let u=a[0].length+a.index,T=a.input[u];if(T==="<"||T===","){l.ignoreMatch();return}T===">"&&(f(a,{after:u})||l.ignoreMatch());let p,L=a.input.substring(u);if(p=L.match(/^\s*=/)){l.ignoreMatch();return}if((p=L.match(/^\s+extends\s+/))&&p.index===0){l.ignoreMatch();return}}},c={$pattern:m,keyword:x,literal:D,built_in:P,"variable.language":h},A="[0-9](_?[0-9])*",i=`\\.(${A})`,E="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",_={className:"number",variants:[{begin:`(\\b(${E})((${i})|\\.)?|(${i}))[eE][+-]?(${A})\\b`},{begin:`\\b(${E})\\b((${i})\\b|\\.)?|(${i})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},r={className:"subst",begin:"\\$\\{",end:"\\}",keywords:c,contains:[]},s={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,r],subLanguage:"xml"}},S={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,r],subLanguage:"css"}},N={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,r],subLanguage:"graphql"}},d={className:"string",begin:"`",end:"`",contains:[n.BACKSLASH_ESCAPE,r]},y={className:"comment",variants:[n.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:t+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),n.C_BLOCK_COMMENT_MODE,n.C_LINE_COMMENT_MODE]},O=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,s,S,N,d,{match:/\$\d+/},_];r.contains=O.concat({begin:/\{/,end:/\}/,keywords:c,contains:["self"].concat(O)});let M=[].concat(y,r.contains),I=M.concat([{begin:/(\s*)\(/,end:/\)/,keywords:c,contains:["self"].concat(M)}]),b={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:I},$={variants:[{match:[/class/,/\s+/,t,/\s+/,/extends/,/\s+/,e.concat(t,"(",e.concat(/\./,t),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,t],scope:{1:"keyword",3:"title.class"}}]},v={relevance:0,match:e.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...k,...B]}},F={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},G={variants:[{match:[/function/,/\s+/,t,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[b],illegal:/%/},Z={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function z(a){return e.concat("(?!",a.join("|"),")")}let H={match:e.concat(/\b/,z([...U,"super","import"].map(a=>`${a}\\s*\\(`)),t,e.lookahead(/\s*\(/)),className:"title.function",relevance:0},K={begin:e.concat(/\./,e.lookahead(e.concat(t,/(?![0-9A-Za-z$_(])/))),end:t,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},Y={match:[/get|set/,/\s+/,t,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},b]},w="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+n.UNDERSCORE_IDENT_RE+")\\s*=>",W={match:[/const|var|let/,/\s+/,t,/\s*/,/=\s*/,/(async\s*)?/,e.lookahead(w)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[b]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:c,exports:{PARAMS_CONTAINS:I,CLASS_REFERENCE:v},illegal:/#(?![$_A-z])/,contains:[n.SHEBANG({label:"shebang",binary:"node",relevance:5}),F,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,s,S,N,d,y,{match:/\$\d+/},_,v,{className:"attr",begin:t+e.lookahead(":"),relevance:0},W,{begin:"("+n.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[y,n.REGEXP_MODE,{className:"function",begin:w,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:I}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:g.begin,end:g.end},{match:R},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,end:o.end}],subLanguage:"xml",contains:[{begin:o.begin,end:o.end,skip:!0,contains:["self"]}]}]},G,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+n.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[b,n.inherit(n.TITLE_MODE,{begin:t,className:"title.function"})]},{match:/\.\.\./,relevance:0},K,{match:"\\$"+t,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[b]},H,Z,$,Y,{match:/\$[(.]/}]}}function X(n){let e=J(n),f=m,t=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],g={begin:[/namespace/,/\s+/,n.IDENT_RE],beginScope:{1:"keyword",3:"title.class"}},R={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:t},contains:[e.exports.CLASS_REFERENCE]},o={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},c=["type","interface","public","private","protected","implements","declare","abstract","readonly","enum","override","satisfies"],A={$pattern:m,keyword:x.concat(c),literal:D,built_in:P.concat(t),"variable.language":h},i={className:"meta",begin:"@"+f},E=(s,S,N)=>{let d=s.contains.findIndex(C=>C.label===S);if(d===-1)throw new Error("can not find mode to replace");s.contains.splice(d,1,N)};Object.assign(e.keywords,A),e.exports.PARAMS_CONTAINS.push(i);let _=e.contains.find(s=>s.className==="attr");e.exports.PARAMS_CONTAINS.push([e.exports.CLASS_REFERENCE,_]),e.contains=e.contains.concat([i,g,R]),E(e,"shebang",n.SHEBANG()),E(e,"use_strict",o);let r=e.contains.find(s=>s.label==="func.def");return r.relevance=0,Object.assign(e,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),e}export{X as default};