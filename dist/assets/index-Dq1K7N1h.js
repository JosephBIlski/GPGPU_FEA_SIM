(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();var Fu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ou(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Tc={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */(function(i){(function(e,t){i.exports=e.document?t(e,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return t(n)}})(typeof window<"u"?window:Fu,function(e,t){var n=[],r=Object.getPrototypeOf,a=n.slice,c=n.flat?function(s){return n.flat.call(s)}:function(s){return n.concat.apply([],s)},u=n.push,f=n.indexOf,d={},g=d.toString,v=d.hasOwnProperty,_=v.toString,y=_.call(Object),E={},b=function(o){return typeof o=="function"&&typeof o.nodeType!="number"&&typeof o.item!="function"},x=function(o){return o!=null&&o===o.window},m=e.document,L={type:!0,src:!0,nonce:!0,noModule:!0};function R(s,o,h){h=h||m;var p,M,S=h.createElement("script");if(S.text=s,o)for(p in L)M=o[p]||o.getAttribute&&o.getAttribute(p),M&&S.setAttribute(p,M);h.head.appendChild(S).parentNode.removeChild(S)}function N(s){return s==null?s+"":typeof s=="object"||typeof s=="function"?d[g.call(s)]||"object":typeof s}var q="3.7.1",z=/HTML$/i,l=function(s,o){return new l.fn.init(s,o)};l.fn=l.prototype={jquery:q,constructor:l,length:0,toArray:function(){return a.call(this)},get:function(s){return s==null?a.call(this):s<0?this[s+this.length]:this[s]},pushStack:function(s){var o=l.merge(this.constructor(),s);return o.prevObject=this,o},each:function(s){return l.each(this,s)},map:function(s){return this.pushStack(l.map(this,function(o,h){return s.call(o,h,o)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(l.grep(this,function(s,o){return(o+1)%2}))},odd:function(){return this.pushStack(l.grep(this,function(s,o){return o%2}))},eq:function(s){var o=this.length,h=+s+(s<0?o:0);return this.pushStack(h>=0&&h<o?[this[h]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:n.sort,splice:n.splice},l.extend=l.fn.extend=function(){var s,o,h,p,M,S,A=arguments[0]||{},B=1,F=arguments.length,G=!1;for(typeof A=="boolean"&&(G=A,A=arguments[B]||{},B++),typeof A!="object"&&!b(A)&&(A={}),B===F&&(A=this,B--);B<F;B++)if((s=arguments[B])!=null)for(o in s)p=s[o],!(o==="__proto__"||A===p)&&(G&&p&&(l.isPlainObject(p)||(M=Array.isArray(p)))?(h=A[o],M&&!Array.isArray(h)?S=[]:!M&&!l.isPlainObject(h)?S={}:S=h,M=!1,A[o]=l.extend(G,S,p)):p!==void 0&&(A[o]=p));return A},l.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(s){throw new Error(s)},noop:function(){},isPlainObject:function(s){var o,h;return!s||g.call(s)!=="[object Object]"?!1:(o=r(s),o?(h=v.call(o,"constructor")&&o.constructor,typeof h=="function"&&_.call(h)===y):!0)},isEmptyObject:function(s){var o;for(o in s)return!1;return!0},globalEval:function(s,o,h){R(s,{nonce:o&&o.nonce},h)},each:function(s,o){var h,p=0;if($(s))for(h=s.length;p<h&&o.call(s[p],p,s[p])!==!1;p++);else for(p in s)if(o.call(s[p],p,s[p])===!1)break;return s},text:function(s){var o,h="",p=0,M=s.nodeType;if(!M)for(;o=s[p++];)h+=l.text(o);return M===1||M===11?s.textContent:M===9?s.documentElement.textContent:M===3||M===4?s.nodeValue:h},makeArray:function(s,o){var h=o||[];return s!=null&&($(Object(s))?l.merge(h,typeof s=="string"?[s]:s):u.call(h,s)),h},inArray:function(s,o,h){return o==null?-1:f.call(o,s,h)},isXMLDoc:function(s){var o=s&&s.namespaceURI,h=s&&(s.ownerDocument||s).documentElement;return!z.test(o||h&&h.nodeName||"HTML")},merge:function(s,o){for(var h=+o.length,p=0,M=s.length;p<h;p++)s[M++]=o[p];return s.length=M,s},grep:function(s,o,h){for(var p,M=[],S=0,A=s.length,B=!h;S<A;S++)p=!o(s[S],S),p!==B&&M.push(s[S]);return M},map:function(s,o,h){var p,M,S=0,A=[];if($(s))for(p=s.length;S<p;S++)M=o(s[S],S,h),M!=null&&A.push(M);else for(S in s)M=o(s[S],S,h),M!=null&&A.push(M);return c(A)},guid:1,support:E}),typeof Symbol=="function"&&(l.fn[Symbol.iterator]=n[Symbol.iterator]),l.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(s,o){d["[object "+o+"]"]=o.toLowerCase()});function $(s){var o=!!s&&"length"in s&&s.length,h=N(s);return b(s)||x(s)?!1:h==="array"||o===0||typeof o=="number"&&o>0&&o-1 in s}function I(s,o){return s.nodeName&&s.nodeName.toLowerCase()===o.toLowerCase()}var P=n.pop,V=n.sort,ce=n.splice,Y="[\\x20\\t\\r\\n\\f]",pe=new RegExp("^"+Y+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Y+"+$","g");l.contains=function(s,o){var h=o&&o.parentNode;return s===h||!!(h&&h.nodeType===1&&(s.contains?s.contains(h):s.compareDocumentPosition&&s.compareDocumentPosition(h)&16))};var me=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function le(s,o){return o?s==="\0"?"�":s.slice(0,-1)+"\\"+s.charCodeAt(s.length-1).toString(16)+" ":"\\"+s}l.escapeSelector=function(s){return(s+"").replace(me,le)};var de=m,oe=u;(function(){var s,o,h,p,M,S=oe,A,B,F,G,ae,he=l.expando,Q=0,xe=0,nt=ls(),St=ls(),ct=ls(),nn=ls(),jt=function(U,H){return U===H&&(M=!0),0},kn="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Hn="(?:\\\\[\\da-fA-F]{1,6}"+Y+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",gt="\\["+Y+"*("+Hn+")(?:"+Y+"*([*^$|!~]?=)"+Y+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Hn+"))|)"+Y+"*\\]",Ri=":("+Hn+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+gt+")*)|.*)\\)|)",At=new RegExp(Y+"+","g"),Vt=new RegExp("^"+Y+"*,"+Y+"*"),Nr=new RegExp("^"+Y+"*([>+~]|"+Y+")"+Y+"*"),ga=new RegExp(Y+"|>"),Vn=new RegExp(Ri),Fr=new RegExp("^"+Hn+"$"),Gn={ID:new RegExp("^#("+Hn+")"),CLASS:new RegExp("^\\.("+Hn+")"),TAG:new RegExp("^("+Hn+"|[*])"),ATTR:new RegExp("^"+gt),PSEUDO:new RegExp("^"+Ri),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+Y+"*(even|odd|(([+-]|)(\\d*)n|)"+Y+"*(?:([+-]|)"+Y+"*(\\d+)|))"+Y+"*\\)|)","i"),bool:new RegExp("^(?:"+kn+")$","i"),needsContext:new RegExp("^"+Y+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+Y+"*((?:-\\d)?\\d*)"+Y+"*\\)|)(?=[^-]|$)","i")},hi=/^(?:input|select|textarea|button)$/i,fi=/^h\d$/i,Tn=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_a=/[+~]/,Zn=new RegExp("\\\\[\\da-fA-F]{1,6}"+Y+"?|\\\\([^\\r\\n\\f])","g"),Jn=function(U,H){var Z="0x"+U.slice(1)-65536;return H||(Z<0?String.fromCharCode(Z+65536):String.fromCharCode(Z>>10|55296,Z&1023|56320))},Ru=function(){di()},Pu=us(function(U){return U.disabled===!0&&I(U,"fieldset")},{dir:"parentNode",next:"legend"});function Lu(){try{return A.activeElement}catch{}}try{S.apply(n=a.call(de.childNodes),de.childNodes),n[de.childNodes.length].nodeType}catch{S={apply:function(H,Z){oe.apply(H,a.call(Z))},call:function(H){oe.apply(H,a.call(arguments,1))}}}function Pt(U,H,Z,re){var ue,Ee,Pe,He,Le,pt,Qe,st=H&&H.ownerDocument,mt=H?H.nodeType:9;if(Z=Z||[],typeof U!="string"||!U||mt!==1&&mt!==9&&mt!==11)return Z;if(!re&&(di(H),H=H||A,F)){if(mt!==11&&(Le=Tn.exec(U)))if(ue=Le[1]){if(mt===9)if(Pe=H.getElementById(ue)){if(Pe.id===ue)return S.call(Z,Pe),Z}else return Z;else if(st&&(Pe=st.getElementById(ue))&&Pt.contains(H,Pe)&&Pe.id===ue)return S.call(Z,Pe),Z}else{if(Le[2])return S.apply(Z,H.getElementsByTagName(U)),Z;if((ue=Le[3])&&H.getElementsByClassName)return S.apply(Z,H.getElementsByClassName(ue)),Z}if(!nn[U+" "]&&(!G||!G.test(U))){if(Qe=U,st=H,mt===1&&(ga.test(U)||Nr.test(U))){for(st=_a.test(U)&&va(H.parentNode)||H,(st!=H||!E.scope)&&((He=H.getAttribute("id"))?He=l.escapeSelector(He):H.setAttribute("id",He=he)),pt=Or(U),Ee=pt.length;Ee--;)pt[Ee]=(He?"#"+He:":scope")+" "+cs(pt[Ee]);Qe=pt.join(",")}try{return S.apply(Z,st.querySelectorAll(Qe)),Z}catch{nn(U,!0)}finally{He===he&&H.removeAttribute("id")}}}return hl(U.replace(pe,"$1"),H,Z,re)}function ls(){var U=[];function H(Z,re){return U.push(Z+" ")>o.cacheLength&&delete H[U.shift()],H[Z+" "]=re}return H}function Un(U){return U[he]=!0,U}function Yi(U){var H=A.createElement("fieldset");try{return!!U(H)}catch{return!1}finally{H.parentNode&&H.parentNode.removeChild(H),H=null}}function Du(U){return function(H){return I(H,"input")&&H.type===U}}function Iu(U){return function(H){return(I(H,"input")||I(H,"button"))&&H.type===U}}function cl(U){return function(H){return"form"in H?H.parentNode&&H.disabled===!1?"label"in H?"label"in H.parentNode?H.parentNode.disabled===U:H.disabled===U:H.isDisabled===U||H.isDisabled!==!U&&Pu(H)===U:H.disabled===U:"label"in H?H.disabled===U:!1}}function Pi(U){return Un(function(H){return H=+H,Un(function(Z,re){for(var ue,Ee=U([],Z.length,H),Pe=Ee.length;Pe--;)Z[ue=Ee[Pe]]&&(Z[ue]=!(re[ue]=Z[ue]))})})}function va(U){return U&&typeof U.getElementsByTagName<"u"&&U}function di(U){var H,Z=U?U.ownerDocument||U:de;return Z==A||Z.nodeType!==9||!Z.documentElement||(A=Z,B=A.documentElement,F=!l.isXMLDoc(A),ae=B.matches||B.webkitMatchesSelector||B.msMatchesSelector,B.msMatchesSelector&&de!=A&&(H=A.defaultView)&&H.top!==H&&H.addEventListener("unload",Ru),E.getById=Yi(function(re){return B.appendChild(re).id=l.expando,!A.getElementsByName||!A.getElementsByName(l.expando).length}),E.disconnectedMatch=Yi(function(re){return ae.call(re,"*")}),E.scope=Yi(function(){return A.querySelectorAll(":scope")}),E.cssHas=Yi(function(){try{return A.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),E.getById?(o.filter.ID=function(re){var ue=re.replace(Zn,Jn);return function(Ee){return Ee.getAttribute("id")===ue}},o.find.ID=function(re,ue){if(typeof ue.getElementById<"u"&&F){var Ee=ue.getElementById(re);return Ee?[Ee]:[]}}):(o.filter.ID=function(re){var ue=re.replace(Zn,Jn);return function(Ee){var Pe=typeof Ee.getAttributeNode<"u"&&Ee.getAttributeNode("id");return Pe&&Pe.value===ue}},o.find.ID=function(re,ue){if(typeof ue.getElementById<"u"&&F){var Ee,Pe,He,Le=ue.getElementById(re);if(Le){if(Ee=Le.getAttributeNode("id"),Ee&&Ee.value===re)return[Le];for(He=ue.getElementsByName(re),Pe=0;Le=He[Pe++];)if(Ee=Le.getAttributeNode("id"),Ee&&Ee.value===re)return[Le]}return[]}}),o.find.TAG=function(re,ue){return typeof ue.getElementsByTagName<"u"?ue.getElementsByTagName(re):ue.querySelectorAll(re)},o.find.CLASS=function(re,ue){if(typeof ue.getElementsByClassName<"u"&&F)return ue.getElementsByClassName(re)},G=[],Yi(function(re){var ue;B.appendChild(re).innerHTML="<a id='"+he+"' href='' disabled='disabled'></a><select id='"+he+"-\r\\' disabled='disabled'><option selected=''></option></select>",re.querySelectorAll("[selected]").length||G.push("\\["+Y+"*(?:value|"+kn+")"),re.querySelectorAll("[id~="+he+"-]").length||G.push("~="),re.querySelectorAll("a#"+he+"+*").length||G.push(".#.+[+~]"),re.querySelectorAll(":checked").length||G.push(":checked"),ue=A.createElement("input"),ue.setAttribute("type","hidden"),re.appendChild(ue).setAttribute("name","D"),B.appendChild(re).disabled=!0,re.querySelectorAll(":disabled").length!==2&&G.push(":enabled",":disabled"),ue=A.createElement("input"),ue.setAttribute("name",""),re.appendChild(ue),re.querySelectorAll("[name='']").length||G.push("\\["+Y+"*name"+Y+"*="+Y+`*(?:''|"")`)}),E.cssHas||G.push(":has"),G=G.length&&new RegExp(G.join("|")),jt=function(re,ue){if(re===ue)return M=!0,0;var Ee=!re.compareDocumentPosition-!ue.compareDocumentPosition;return Ee||(Ee=(re.ownerDocument||re)==(ue.ownerDocument||ue)?re.compareDocumentPosition(ue):1,Ee&1||!E.sortDetached&&ue.compareDocumentPosition(re)===Ee?re===A||re.ownerDocument==de&&Pt.contains(de,re)?-1:ue===A||ue.ownerDocument==de&&Pt.contains(de,ue)?1:p?f.call(p,re)-f.call(p,ue):0:Ee&4?-1:1)}),A}Pt.matches=function(U,H){return Pt(U,null,null,H)},Pt.matchesSelector=function(U,H){if(di(U),F&&!nn[H+" "]&&(!G||!G.test(H)))try{var Z=ae.call(U,H);if(Z||E.disconnectedMatch||U.document&&U.document.nodeType!==11)return Z}catch{nn(H,!0)}return Pt(H,A,null,[U]).length>0},Pt.contains=function(U,H){return(U.ownerDocument||U)!=A&&di(U),l.contains(U,H)},Pt.attr=function(U,H){(U.ownerDocument||U)!=A&&di(U);var Z=o.attrHandle[H.toLowerCase()],re=Z&&v.call(o.attrHandle,H.toLowerCase())?Z(U,H,!F):void 0;return re!==void 0?re:U.getAttribute(H)},Pt.error=function(U){throw new Error("Syntax error, unrecognized expression: "+U)},l.uniqueSort=function(U){var H,Z=[],re=0,ue=0;if(M=!E.sortStable,p=!E.sortStable&&a.call(U,0),V.call(U,jt),M){for(;H=U[ue++];)H===U[ue]&&(re=Z.push(ue));for(;re--;)ce.call(U,Z[re],1)}return p=null,U},l.fn.uniqueSort=function(){return this.pushStack(l.uniqueSort(a.apply(this)))},o=l.expr={cacheLength:50,createPseudo:Un,match:Gn,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(U){return U[1]=U[1].replace(Zn,Jn),U[3]=(U[3]||U[4]||U[5]||"").replace(Zn,Jn),U[2]==="~="&&(U[3]=" "+U[3]+" "),U.slice(0,4)},CHILD:function(U){return U[1]=U[1].toLowerCase(),U[1].slice(0,3)==="nth"?(U[3]||Pt.error(U[0]),U[4]=+(U[4]?U[5]+(U[6]||1):2*(U[3]==="even"||U[3]==="odd")),U[5]=+(U[7]+U[8]||U[3]==="odd")):U[3]&&Pt.error(U[0]),U},PSEUDO:function(U){var H,Z=!U[6]&&U[2];return Gn.CHILD.test(U[0])?null:(U[3]?U[2]=U[4]||U[5]||"":Z&&Vn.test(Z)&&(H=Or(Z,!0))&&(H=Z.indexOf(")",Z.length-H)-Z.length)&&(U[0]=U[0].slice(0,H),U[2]=Z.slice(0,H)),U.slice(0,3))}},filter:{TAG:function(U){var H=U.replace(Zn,Jn).toLowerCase();return U==="*"?function(){return!0}:function(Z){return I(Z,H)}},CLASS:function(U){var H=nt[U+" "];return H||(H=new RegExp("(^|"+Y+")"+U+"("+Y+"|$)"))&&nt(U,function(Z){return H.test(typeof Z.className=="string"&&Z.className||typeof Z.getAttribute<"u"&&Z.getAttribute("class")||"")})},ATTR:function(U,H,Z){return function(re){var ue=Pt.attr(re,U);return ue==null?H==="!=":H?(ue+="",H==="="?ue===Z:H==="!="?ue!==Z:H==="^="?Z&&ue.indexOf(Z)===0:H==="*="?Z&&ue.indexOf(Z)>-1:H==="$="?Z&&ue.slice(-Z.length)===Z:H==="~="?(" "+ue.replace(At," ")+" ").indexOf(Z)>-1:H==="|="?ue===Z||ue.slice(0,Z.length+1)===Z+"-":!1):!0}},CHILD:function(U,H,Z,re,ue){var Ee=U.slice(0,3)!=="nth",Pe=U.slice(-4)!=="last",He=H==="of-type";return re===1&&ue===0?function(Le){return!!Le.parentNode}:function(Le,pt,Qe){var st,mt,Ye,Ft,_n,sn=Ee!==Pe?"nextSibling":"previousSibling",An=Le.parentNode,Wn=He&&Le.nodeName.toLowerCase(),$i=!Qe&&!He,hn=!1;if(An){if(Ee){for(;sn;){for(Ye=Le;Ye=Ye[sn];)if(He?I(Ye,Wn):Ye.nodeType===1)return!1;_n=sn=U==="only"&&!_n&&"nextSibling"}return!0}if(_n=[Pe?An.firstChild:An.lastChild],Pe&&$i){for(mt=An[he]||(An[he]={}),st=mt[U]||[],Ft=st[0]===Q&&st[1],hn=Ft&&st[2],Ye=Ft&&An.childNodes[Ft];Ye=++Ft&&Ye&&Ye[sn]||(hn=Ft=0)||_n.pop();)if(Ye.nodeType===1&&++hn&&Ye===Le){mt[U]=[Q,Ft,hn];break}}else if($i&&(mt=Le[he]||(Le[he]={}),st=mt[U]||[],Ft=st[0]===Q&&st[1],hn=Ft),hn===!1)for(;(Ye=++Ft&&Ye&&Ye[sn]||(hn=Ft=0)||_n.pop())&&!((He?I(Ye,Wn):Ye.nodeType===1)&&++hn&&($i&&(mt=Ye[he]||(Ye[he]={}),mt[U]=[Q,hn]),Ye===Le)););return hn-=ue,hn===re||hn%re===0&&hn/re>=0}}},PSEUDO:function(U,H){var Z,re=o.pseudos[U]||o.setFilters[U.toLowerCase()]||Pt.error("unsupported pseudo: "+U);return re[he]?re(H):re.length>1?(Z=[U,U,"",H],o.setFilters.hasOwnProperty(U.toLowerCase())?Un(function(ue,Ee){for(var Pe,He=re(ue,H),Le=He.length;Le--;)Pe=f.call(ue,He[Le]),ue[Pe]=!(Ee[Pe]=He[Le])}):function(ue){return re(ue,0,Z)}):re}},pseudos:{not:Un(function(U){var H=[],Z=[],re=Sa(U.replace(pe,"$1"));return re[he]?Un(function(ue,Ee,Pe,He){for(var Le,pt=re(ue,null,He,[]),Qe=ue.length;Qe--;)(Le=pt[Qe])&&(ue[Qe]=!(Ee[Qe]=Le))}):function(ue,Ee,Pe){return H[0]=ue,re(H,null,Pe,Z),H[0]=null,!Z.pop()}}),has:Un(function(U){return function(H){return Pt(U,H).length>0}}),contains:Un(function(U){return U=U.replace(Zn,Jn),function(H){return(H.textContent||l.text(H)).indexOf(U)>-1}}),lang:Un(function(U){return Fr.test(U||"")||Pt.error("unsupported lang: "+U),U=U.replace(Zn,Jn).toLowerCase(),function(H){var Z;do if(Z=F?H.lang:H.getAttribute("xml:lang")||H.getAttribute("lang"))return Z=Z.toLowerCase(),Z===U||Z.indexOf(U+"-")===0;while((H=H.parentNode)&&H.nodeType===1);return!1}}),target:function(U){var H=e.location&&e.location.hash;return H&&H.slice(1)===U.id},root:function(U){return U===B},focus:function(U){return U===Lu()&&A.hasFocus()&&!!(U.type||U.href||~U.tabIndex)},enabled:cl(!1),disabled:cl(!0),checked:function(U){return I(U,"input")&&!!U.checked||I(U,"option")&&!!U.selected},selected:function(U){return U.parentNode&&U.parentNode.selectedIndex,U.selected===!0},empty:function(U){for(U=U.firstChild;U;U=U.nextSibling)if(U.nodeType<6)return!1;return!0},parent:function(U){return!o.pseudos.empty(U)},header:function(U){return fi.test(U.nodeName)},input:function(U){return hi.test(U.nodeName)},button:function(U){return I(U,"input")&&U.type==="button"||I(U,"button")},text:function(U){var H;return I(U,"input")&&U.type==="text"&&((H=U.getAttribute("type"))==null||H.toLowerCase()==="text")},first:Pi(function(){return[0]}),last:Pi(function(U,H){return[H-1]}),eq:Pi(function(U,H,Z){return[Z<0?Z+H:Z]}),even:Pi(function(U,H){for(var Z=0;Z<H;Z+=2)U.push(Z);return U}),odd:Pi(function(U,H){for(var Z=1;Z<H;Z+=2)U.push(Z);return U}),lt:Pi(function(U,H,Z){var re;for(Z<0?re=Z+H:Z>H?re=H:re=Z;--re>=0;)U.push(re);return U}),gt:Pi(function(U,H,Z){for(var re=Z<0?Z+H:Z;++re<H;)U.push(re);return U})}},o.pseudos.nth=o.pseudos.eq;for(s in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[s]=Du(s);for(s in{submit:!0,reset:!0})o.pseudos[s]=Iu(s);function ul(){}ul.prototype=o.filters=o.pseudos,o.setFilters=new ul;function Or(U,H){var Z,re,ue,Ee,Pe,He,Le,pt=St[U+" "];if(pt)return H?0:pt.slice(0);for(Pe=U,He=[],Le=o.preFilter;Pe;){(!Z||(re=Vt.exec(Pe)))&&(re&&(Pe=Pe.slice(re[0].length)||Pe),He.push(ue=[])),Z=!1,(re=Nr.exec(Pe))&&(Z=re.shift(),ue.push({value:Z,type:re[0].replace(pe," ")}),Pe=Pe.slice(Z.length));for(Ee in o.filter)(re=Gn[Ee].exec(Pe))&&(!Le[Ee]||(re=Le[Ee](re)))&&(Z=re.shift(),ue.push({value:Z,type:Ee,matches:re}),Pe=Pe.slice(Z.length));if(!Z)break}return H?Pe.length:Pe?Pt.error(U):St(U,He).slice(0)}function cs(U){for(var H=0,Z=U.length,re="";H<Z;H++)re+=U[H].value;return re}function us(U,H,Z){var re=H.dir,ue=H.next,Ee=ue||re,Pe=Z&&Ee==="parentNode",He=xe++;return H.first?function(Le,pt,Qe){for(;Le=Le[re];)if(Le.nodeType===1||Pe)return U(Le,pt,Qe);return!1}:function(Le,pt,Qe){var st,mt,Ye=[Q,He];if(Qe){for(;Le=Le[re];)if((Le.nodeType===1||Pe)&&U(Le,pt,Qe))return!0}else for(;Le=Le[re];)if(Le.nodeType===1||Pe)if(mt=Le[he]||(Le[he]={}),ue&&I(Le,ue))Le=Le[re]||Le;else{if((st=mt[Ee])&&st[0]===Q&&st[1]===He)return Ye[2]=st[2];if(mt[Ee]=Ye,Ye[2]=U(Le,pt,Qe))return!0}return!1}}function xa(U){return U.length>1?function(H,Z,re){for(var ue=U.length;ue--;)if(!U[ue](H,Z,re))return!1;return!0}:U[0]}function Uu(U,H,Z){for(var re=0,ue=H.length;re<ue;re++)Pt(U,H[re],Z);return Z}function hs(U,H,Z,re,ue){for(var Ee,Pe=[],He=0,Le=U.length,pt=H!=null;He<Le;He++)(Ee=U[He])&&(!Z||Z(Ee,re,ue))&&(Pe.push(Ee),pt&&H.push(He));return Pe}function ya(U,H,Z,re,ue,Ee){return re&&!re[he]&&(re=ya(re)),ue&&!ue[he]&&(ue=ya(ue,Ee)),Un(function(Pe,He,Le,pt){var Qe,st,mt,Ye,Ft=[],_n=[],sn=He.length,An=Pe||Uu(H||"*",Le.nodeType?[Le]:Le,[]),Wn=U&&(Pe||!H)?hs(An,Ft,U,Le,pt):An;if(Z?(Ye=ue||(Pe?U:sn||re)?[]:He,Z(Wn,Ye,Le,pt)):Ye=Wn,re)for(Qe=hs(Ye,_n),re(Qe,[],Le,pt),st=Qe.length;st--;)(mt=Qe[st])&&(Ye[_n[st]]=!(Wn[_n[st]]=mt));if(Pe){if(ue||U){if(ue){for(Qe=[],st=Ye.length;st--;)(mt=Ye[st])&&Qe.push(Wn[st]=mt);ue(null,Ye=[],Qe,pt)}for(st=Ye.length;st--;)(mt=Ye[st])&&(Qe=ue?f.call(Pe,mt):Ft[st])>-1&&(Pe[Qe]=!(He[Qe]=mt))}}else Ye=hs(Ye===He?Ye.splice(sn,Ye.length):Ye),ue?ue(null,He,Ye,pt):S.apply(He,Ye)})}function Ma(U){for(var H,Z,re,ue=U.length,Ee=o.relative[U[0].type],Pe=Ee||o.relative[" "],He=Ee?1:0,Le=us(function(st){return st===H},Pe,!0),pt=us(function(st){return f.call(H,st)>-1},Pe,!0),Qe=[function(st,mt,Ye){var Ft=!Ee&&(Ye||mt!=h)||((H=mt).nodeType?Le(st,mt,Ye):pt(st,mt,Ye));return H=null,Ft}];He<ue;He++)if(Z=o.relative[U[He].type])Qe=[us(xa(Qe),Z)];else{if(Z=o.filter[U[He].type].apply(null,U[He].matches),Z[he]){for(re=++He;re<ue&&!o.relative[U[re].type];re++);return ya(He>1&&xa(Qe),He>1&&cs(U.slice(0,He-1).concat({value:U[He-2].type===" "?"*":""})).replace(pe,"$1"),Z,He<re&&Ma(U.slice(He,re)),re<ue&&Ma(U=U.slice(re)),re<ue&&cs(U))}Qe.push(Z)}return xa(Qe)}function Nu(U,H){var Z=H.length>0,re=U.length>0,ue=function(Ee,Pe,He,Le,pt){var Qe,st,mt,Ye=0,Ft="0",_n=Ee&&[],sn=[],An=h,Wn=Ee||re&&o.find.TAG("*",pt),$i=Q+=An==null?1:Math.random()||.1,hn=Wn.length;for(pt&&(h=Pe==A||Pe||pt);Ft!==hn&&(Qe=Wn[Ft])!=null;Ft++){if(re&&Qe){for(st=0,!Pe&&Qe.ownerDocument!=A&&(di(Qe),He=!F);mt=U[st++];)if(mt(Qe,Pe||A,He)){S.call(Le,Qe);break}pt&&(Q=$i)}Z&&((Qe=!mt&&Qe)&&Ye--,Ee&&_n.push(Qe))}if(Ye+=Ft,Z&&Ft!==Ye){for(st=0;mt=H[st++];)mt(_n,sn,Pe,He);if(Ee){if(Ye>0)for(;Ft--;)_n[Ft]||sn[Ft]||(sn[Ft]=P.call(Le));sn=hs(sn)}S.apply(Le,sn),pt&&!Ee&&sn.length>0&&Ye+H.length>1&&l.uniqueSort(Le)}return pt&&(Q=$i,h=An),_n};return Z?Un(ue):ue}function Sa(U,H){var Z,re=[],ue=[],Ee=ct[U+" "];if(!Ee){for(H||(H=Or(U)),Z=H.length;Z--;)Ee=Ma(H[Z]),Ee[he]?re.push(Ee):ue.push(Ee);Ee=ct(U,Nu(ue,re)),Ee.selector=U}return Ee}function hl(U,H,Z,re){var ue,Ee,Pe,He,Le,pt=typeof U=="function"&&U,Qe=!re&&Or(U=pt.selector||U);if(Z=Z||[],Qe.length===1){if(Ee=Qe[0]=Qe[0].slice(0),Ee.length>2&&(Pe=Ee[0]).type==="ID"&&H.nodeType===9&&F&&o.relative[Ee[1].type]){if(H=(o.find.ID(Pe.matches[0].replace(Zn,Jn),H)||[])[0],H)pt&&(H=H.parentNode);else return Z;U=U.slice(Ee.shift().value.length)}for(ue=Gn.needsContext.test(U)?0:Ee.length;ue--&&(Pe=Ee[ue],!o.relative[He=Pe.type]);)if((Le=o.find[He])&&(re=Le(Pe.matches[0].replace(Zn,Jn),_a.test(Ee[0].type)&&va(H.parentNode)||H))){if(Ee.splice(ue,1),U=re.length&&cs(Ee),!U)return S.apply(Z,re),Z;break}}return(pt||Sa(U,Qe))(re,H,!F,Z,!H||_a.test(U)&&va(H.parentNode)||H),Z}E.sortStable=he.split("").sort(jt).join("")===he,di(),E.sortDetached=Yi(function(U){return U.compareDocumentPosition(A.createElement("fieldset"))&1}),l.find=Pt,l.expr[":"]=l.expr.pseudos,l.unique=l.uniqueSort,Pt.compile=Sa,Pt.select=hl,Pt.setDocument=di,Pt.tokenize=Or,Pt.escape=l.escapeSelector,Pt.getText=l.text,Pt.isXML=l.isXMLDoc,Pt.selectors=l.expr,Pt.support=l.support,Pt.uniqueSort=l.uniqueSort})();var be=function(s,o,h){for(var p=[],M=h!==void 0;(s=s[o])&&s.nodeType!==9;)if(s.nodeType===1){if(M&&l(s).is(h))break;p.push(s)}return p},De=function(s,o){for(var h=[];s;s=s.nextSibling)s.nodeType===1&&s!==o&&h.push(s);return h},Be=l.expr.match.needsContext,ft=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function vt(s,o,h){return b(o)?l.grep(s,function(p,M){return!!o.call(p,M,p)!==h}):o.nodeType?l.grep(s,function(p){return p===o!==h}):typeof o!="string"?l.grep(s,function(p){return f.call(o,p)>-1!==h}):l.filter(o,s,h)}l.filter=function(s,o,h){var p=o[0];return h&&(s=":not("+s+")"),o.length===1&&p.nodeType===1?l.find.matchesSelector(p,s)?[p]:[]:l.find.matches(s,l.grep(o,function(M){return M.nodeType===1}))},l.fn.extend({find:function(s){var o,h,p=this.length,M=this;if(typeof s!="string")return this.pushStack(l(s).filter(function(){for(o=0;o<p;o++)if(l.contains(M[o],this))return!0}));for(h=this.pushStack([]),o=0;o<p;o++)l.find(s,M[o],h);return p>1?l.uniqueSort(h):h},filter:function(s){return this.pushStack(vt(this,s||[],!1))},not:function(s){return this.pushStack(vt(this,s||[],!0))},is:function(s){return!!vt(this,typeof s=="string"&&Be.test(s)?l(s):s||[],!1).length}});var fe,ye=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Oe=l.fn.init=function(s,o,h){var p,M;if(!s)return this;if(h=h||fe,typeof s=="string")if(s[0]==="<"&&s[s.length-1]===">"&&s.length>=3?p=[null,s,null]:p=ye.exec(s),p&&(p[1]||!o))if(p[1]){if(o=o instanceof l?o[0]:o,l.merge(this,l.parseHTML(p[1],o&&o.nodeType?o.ownerDocument||o:m,!0)),ft.test(p[1])&&l.isPlainObject(o))for(p in o)b(this[p])?this[p](o[p]):this.attr(p,o[p]);return this}else return M=m.getElementById(p[2]),M&&(this[0]=M,this.length=1),this;else return!o||o.jquery?(o||h).find(s):this.constructor(o).find(s);else{if(s.nodeType)return this[0]=s,this.length=1,this;if(b(s))return h.ready!==void 0?h.ready(s):s(l)}return l.makeArray(s,this)};Oe.prototype=l.fn,fe=l(m);var Ue=/^(?:parents|prev(?:Until|All))/,it={children:!0,contents:!0,next:!0,prev:!0};l.fn.extend({has:function(s){var o=l(s,this),h=o.length;return this.filter(function(){for(var p=0;p<h;p++)if(l.contains(this,o[p]))return!0})},closest:function(s,o){var h,p=0,M=this.length,S=[],A=typeof s!="string"&&l(s);if(!Be.test(s)){for(;p<M;p++)for(h=this[p];h&&h!==o;h=h.parentNode)if(h.nodeType<11&&(A?A.index(h)>-1:h.nodeType===1&&l.find.matchesSelector(h,s))){S.push(h);break}}return this.pushStack(S.length>1?l.uniqueSort(S):S)},index:function(s){return s?typeof s=="string"?f.call(l(s),this[0]):f.call(this,s.jquery?s[0]:s):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(s,o){return this.pushStack(l.uniqueSort(l.merge(this.get(),l(s,o))))},addBack:function(s){return this.add(s==null?this.prevObject:this.prevObject.filter(s))}});function at(s,o){for(;(s=s[o])&&s.nodeType!==1;);return s}l.each({parent:function(s){var o=s.parentNode;return o&&o.nodeType!==11?o:null},parents:function(s){return be(s,"parentNode")},parentsUntil:function(s,o,h){return be(s,"parentNode",h)},next:function(s){return at(s,"nextSibling")},prev:function(s){return at(s,"previousSibling")},nextAll:function(s){return be(s,"nextSibling")},prevAll:function(s){return be(s,"previousSibling")},nextUntil:function(s,o,h){return be(s,"nextSibling",h)},prevUntil:function(s,o,h){return be(s,"previousSibling",h)},siblings:function(s){return De((s.parentNode||{}).firstChild,s)},children:function(s){return De(s.firstChild)},contents:function(s){return s.contentDocument!=null&&r(s.contentDocument)?s.contentDocument:(I(s,"template")&&(s=s.content||s),l.merge([],s.childNodes))}},function(s,o){l.fn[s]=function(h,p){var M=l.map(this,o,h);return s.slice(-5)!=="Until"&&(p=h),p&&typeof p=="string"&&(M=l.filter(p,M)),this.length>1&&(it[s]||l.uniqueSort(M),Ue.test(s)&&M.reverse()),this.pushStack(M)}});var $e=/[^\x20\t\r\n\f]+/g;function Lt(s){var o={};return l.each(s.match($e)||[],function(h,p){o[p]=!0}),o}l.Callbacks=function(s){s=typeof s=="string"?Lt(s):l.extend({},s);var o,h,p,M,S=[],A=[],B=-1,F=function(){for(M=M||s.once,p=o=!0;A.length;B=-1)for(h=A.shift();++B<S.length;)S[B].apply(h[0],h[1])===!1&&s.stopOnFalse&&(B=S.length,h=!1);s.memory||(h=!1),o=!1,M&&(h?S=[]:S="")},G={add:function(){return S&&(h&&!o&&(B=S.length-1,A.push(h)),function ae(he){l.each(he,function(Q,xe){b(xe)?(!s.unique||!G.has(xe))&&S.push(xe):xe&&xe.length&&N(xe)!=="string"&&ae(xe)})}(arguments),h&&!o&&F()),this},remove:function(){return l.each(arguments,function(ae,he){for(var Q;(Q=l.inArray(he,S,Q))>-1;)S.splice(Q,1),Q<=B&&B--}),this},has:function(ae){return ae?l.inArray(ae,S)>-1:S.length>0},empty:function(){return S&&(S=[]),this},disable:function(){return M=A=[],S=h="",this},disabled:function(){return!S},lock:function(){return M=A=[],!h&&!o&&(S=h=""),this},locked:function(){return!!M},fireWith:function(ae,he){return M||(he=he||[],he=[ae,he.slice?he.slice():he],A.push(he),o||F()),this},fire:function(){return G.fireWith(this,arguments),this},fired:function(){return!!p}};return G};function k(s){return s}function Dt(s){throw s}function xt(s,o,h,p){var M;try{s&&b(M=s.promise)?M.call(s).done(o).fail(h):s&&b(M=s.then)?M.call(s,o,h):o.apply(void 0,[s].slice(p))}catch(S){h.apply(void 0,[S])}}l.extend({Deferred:function(s){var o=[["notify","progress",l.Callbacks("memory"),l.Callbacks("memory"),2],["resolve","done",l.Callbacks("once memory"),l.Callbacks("once memory"),0,"resolved"],["reject","fail",l.Callbacks("once memory"),l.Callbacks("once memory"),1,"rejected"]],h="pending",p={state:function(){return h},always:function(){return M.done(arguments).fail(arguments),this},catch:function(S){return p.then(null,S)},pipe:function(){var S=arguments;return l.Deferred(function(A){l.each(o,function(B,F){var G=b(S[F[4]])&&S[F[4]];M[F[1]](function(){var ae=G&&G.apply(this,arguments);ae&&b(ae.promise)?ae.promise().progress(A.notify).done(A.resolve).fail(A.reject):A[F[0]+"With"](this,G?[ae]:arguments)})}),S=null}).promise()},then:function(S,A,B){var F=0;function G(ae,he,Q,xe){return function(){var nt=this,St=arguments,ct=function(){var jt,kn;if(!(ae<F)){if(jt=Q.apply(nt,St),jt===he.promise())throw new TypeError("Thenable self-resolution");kn=jt&&(typeof jt=="object"||typeof jt=="function")&&jt.then,b(kn)?xe?kn.call(jt,G(F,he,k,xe),G(F,he,Dt,xe)):(F++,kn.call(jt,G(F,he,k,xe),G(F,he,Dt,xe),G(F,he,k,he.notifyWith))):(Q!==k&&(nt=void 0,St=[jt]),(xe||he.resolveWith)(nt,St))}},nn=xe?ct:function(){try{ct()}catch(jt){l.Deferred.exceptionHook&&l.Deferred.exceptionHook(jt,nn.error),ae+1>=F&&(Q!==Dt&&(nt=void 0,St=[jt]),he.rejectWith(nt,St))}};ae?nn():(l.Deferred.getErrorHook?nn.error=l.Deferred.getErrorHook():l.Deferred.getStackHook&&(nn.error=l.Deferred.getStackHook()),e.setTimeout(nn))}}return l.Deferred(function(ae){o[0][3].add(G(0,ae,b(B)?B:k,ae.notifyWith)),o[1][3].add(G(0,ae,b(S)?S:k)),o[2][3].add(G(0,ae,b(A)?A:Dt))}).promise()},promise:function(S){return S!=null?l.extend(S,p):p}},M={};return l.each(o,function(S,A){var B=A[2],F=A[5];p[A[1]]=B.add,F&&B.add(function(){h=F},o[3-S][2].disable,o[3-S][3].disable,o[0][2].lock,o[0][3].lock),B.add(A[3].fire),M[A[0]]=function(){return M[A[0]+"With"](this===M?void 0:this,arguments),this},M[A[0]+"With"]=B.fireWith}),p.promise(M),s&&s.call(M,M),M},when:function(s){var o=arguments.length,h=o,p=Array(h),M=a.call(arguments),S=l.Deferred(),A=function(B){return function(F){p[B]=this,M[B]=arguments.length>1?a.call(arguments):F,--o||S.resolveWith(p,M)}};if(o<=1&&(xt(s,S.done(A(h)).resolve,S.reject,!o),S.state()==="pending"||b(M[h]&&M[h].then)))return S.then();for(;h--;)xt(M[h],A(h),S.reject);return S.promise()}});var Et=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;l.Deferred.exceptionHook=function(s,o){e.console&&e.console.warn&&s&&Et.test(s.name)&&e.console.warn("jQuery.Deferred exception: "+s.message,s.stack,o)},l.readyException=function(s){e.setTimeout(function(){throw s})};var ke=l.Deferred();l.fn.ready=function(s){return ke.then(s).catch(function(o){l.readyException(o)}),this},l.extend({isReady:!1,readyWait:1,ready:function(s){(s===!0?--l.readyWait:l.isReady)||(l.isReady=!0,!(s!==!0&&--l.readyWait>0)&&ke.resolveWith(m,[l]))}}),l.ready.then=ke.then;function It(){m.removeEventListener("DOMContentLoaded",It),e.removeEventListener("load",It),l.ready()}m.readyState==="complete"||m.readyState!=="loading"&&!m.documentElement.doScroll?e.setTimeout(l.ready):(m.addEventListener("DOMContentLoaded",It),e.addEventListener("load",It));var Xe=function(s,o,h,p,M,S,A){var B=0,F=s.length,G=h==null;if(N(h)==="object"){M=!0;for(B in h)Xe(s,o,B,h[B],!0,S,A)}else if(p!==void 0&&(M=!0,b(p)||(A=!0),G&&(A?(o.call(s,p),o=null):(G=o,o=function(ae,he,Q){return G.call(l(ae),Q)})),o))for(;B<F;B++)o(s[B],h,A?p:p.call(s[B],B,o(s[B],h)));return M?s:G?o.call(s):F?o(s[0],h):S},tt=/^-ms-/,O=/-([a-z])/g;function w(s,o){return o.toUpperCase()}function ee(s){return s.replace(tt,"ms-").replace(O,w)}var ge=function(s){return s.nodeType===1||s.nodeType===9||!+s.nodeType};function ve(){this.expando=l.expando+ve.uid++}ve.uid=1,ve.prototype={cache:function(s){var o=s[this.expando];return o||(o={},ge(s)&&(s.nodeType?s[this.expando]=o:Object.defineProperty(s,this.expando,{value:o,configurable:!0}))),o},set:function(s,o,h){var p,M=this.cache(s);if(typeof o=="string")M[ee(o)]=h;else for(p in o)M[ee(p)]=o[p];return M},get:function(s,o){return o===void 0?this.cache(s):s[this.expando]&&s[this.expando][ee(o)]},access:function(s,o,h){return o===void 0||o&&typeof o=="string"&&h===void 0?this.get(s,o):(this.set(s,o,h),h!==void 0?h:o)},remove:function(s,o){var h,p=s[this.expando];if(p!==void 0){if(o!==void 0)for(Array.isArray(o)?o=o.map(ee):(o=ee(o),o=o in p?[o]:o.match($e)||[]),h=o.length;h--;)delete p[o[h]];(o===void 0||l.isEmptyObject(p))&&(s.nodeType?s[this.expando]=void 0:delete s[this.expando])}},hasData:function(s){var o=s[this.expando];return o!==void 0&&!l.isEmptyObject(o)}};var K=new ve,Ne=new ve,Te=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ie=/[A-Z]/g;function rt(s){return s==="true"?!0:s==="false"?!1:s==="null"?null:s===+s+""?+s:Te.test(s)?JSON.parse(s):s}function Me(s,o,h){var p;if(h===void 0&&s.nodeType===1)if(p="data-"+o.replace(Ie,"-$&").toLowerCase(),h=s.getAttribute(p),typeof h=="string"){try{h=rt(h)}catch{}Ne.set(s,o,h)}else h=void 0;return h}l.extend({hasData:function(s){return Ne.hasData(s)||K.hasData(s)},data:function(s,o,h){return Ne.access(s,o,h)},removeData:function(s,o){Ne.remove(s,o)},_data:function(s,o,h){return K.access(s,o,h)},_removeData:function(s,o){K.remove(s,o)}}),l.fn.extend({data:function(s,o){var h,p,M,S=this[0],A=S&&S.attributes;if(s===void 0){if(this.length&&(M=Ne.get(S),S.nodeType===1&&!K.get(S,"hasDataAttrs"))){for(h=A.length;h--;)A[h]&&(p=A[h].name,p.indexOf("data-")===0&&(p=ee(p.slice(5)),Me(S,p,M[p])));K.set(S,"hasDataAttrs",!0)}return M}return typeof s=="object"?this.each(function(){Ne.set(this,s)}):Xe(this,function(B){var F;if(S&&B===void 0)return F=Ne.get(S,s),F!==void 0||(F=Me(S,s),F!==void 0)?F:void 0;this.each(function(){Ne.set(this,s,B)})},null,o,arguments.length>1,null,!0)},removeData:function(s){return this.each(function(){Ne.remove(this,s)})}}),l.extend({queue:function(s,o,h){var p;if(s)return o=(o||"fx")+"queue",p=K.get(s,o),h&&(!p||Array.isArray(h)?p=K.access(s,o,l.makeArray(h)):p.push(h)),p||[]},dequeue:function(s,o){o=o||"fx";var h=l.queue(s,o),p=h.length,M=h.shift(),S=l._queueHooks(s,o),A=function(){l.dequeue(s,o)};M==="inprogress"&&(M=h.shift(),p--),M&&(o==="fx"&&h.unshift("inprogress"),delete S.stop,M.call(s,A,S)),!p&&S&&S.empty.fire()},_queueHooks:function(s,o){var h=o+"queueHooks";return K.get(s,h)||K.access(s,h,{empty:l.Callbacks("once memory").add(function(){K.remove(s,[o+"queue",h])})})}}),l.fn.extend({queue:function(s,o){var h=2;return typeof s!="string"&&(o=s,s="fx",h--),arguments.length<h?l.queue(this[0],s):o===void 0?this:this.each(function(){var p=l.queue(this,s,o);l._queueHooks(this,s),s==="fx"&&p[0]!=="inprogress"&&l.dequeue(this,s)})},dequeue:function(s){return this.each(function(){l.dequeue(this,s)})},clearQueue:function(s){return this.queue(s||"fx",[])},promise:function(s,o){var h,p=1,M=l.Deferred(),S=this,A=this.length,B=function(){--p||M.resolveWith(S,[S])};for(typeof s!="string"&&(o=s,s=void 0),s=s||"fx";A--;)h=K.get(S[A],s+"queueHooks"),h&&h.empty&&(p++,h.empty.add(B));return B(),M.promise(o)}});var Ce=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ot=new RegExp("^(?:([+-])=|)("+Ce+")([a-z%]*)$","i"),We=["Top","Right","Bottom","Left"],we=m.documentElement,qe=function(s){return l.contains(s.ownerDocument,s)},et={composed:!0};we.getRootNode&&(qe=function(s){return l.contains(s.ownerDocument,s)||s.getRootNode(et)===s.ownerDocument});var Rt=function(s,o){return s=o||s,s.style.display==="none"||s.style.display===""&&qe(s)&&l.css(s,"display")==="none"};function T(s,o,h,p){var M,S,A=20,B=p?function(){return p.cur()}:function(){return l.css(s,o,"")},F=B(),G=h&&h[3]||(l.cssNumber[o]?"":"px"),ae=s.nodeType&&(l.cssNumber[o]||G!=="px"&&+F)&&ot.exec(l.css(s,o));if(ae&&ae[3]!==G){for(F=F/2,G=G||ae[3],ae=+F||1;A--;)l.style(s,o,ae+G),(1-S)*(1-(S=B()/F||.5))<=0&&(A=0),ae=ae/S;ae=ae*2,l.style(s,o,ae+G),h=h||[]}return h&&(ae=+ae||+F||0,M=h[1]?ae+(h[1]+1)*h[2]:+h[2],p&&(p.unit=G,p.start=ae,p.end=M)),M}var J={};function te(s){var o,h=s.ownerDocument,p=s.nodeName,M=J[p];return M||(o=h.body.appendChild(h.createElement(p)),M=l.css(o,"display"),o.parentNode.removeChild(o),M==="none"&&(M="block"),J[p]=M,M)}function se(s,o){for(var h,p,M=[],S=0,A=s.length;S<A;S++)p=s[S],p.style&&(h=p.style.display,o?(h==="none"&&(M[S]=K.get(p,"display")||null,M[S]||(p.style.display="")),p.style.display===""&&Rt(p)&&(M[S]=te(p))):h!=="none"&&(M[S]="none",K.set(p,"display",h)));for(S=0;S<A;S++)M[S]!=null&&(s[S].style.display=M[S]);return s}l.fn.extend({show:function(){return se(this,!0)},hide:function(){return se(this)},toggle:function(s){return typeof s=="boolean"?s?this.show():this.hide():this.each(function(){Rt(this)?l(this).show():l(this).hide()})}});var _e=/^(?:checkbox|radio)$/i,Ve=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ze=/^$|^module$|\/(?:java|ecma)script/i;(function(){var s=m.createDocumentFragment(),o=s.appendChild(m.createElement("div")),h=m.createElement("input");h.setAttribute("type","radio"),h.setAttribute("checked","checked"),h.setAttribute("name","t"),o.appendChild(h),E.checkClone=o.cloneNode(!0).cloneNode(!0).lastChild.checked,o.innerHTML="<textarea>x</textarea>",E.noCloneChecked=!!o.cloneNode(!0).lastChild.defaultValue,o.innerHTML="<option></option>",E.option=!!o.lastChild})();var yt={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};yt.tbody=yt.tfoot=yt.colgroup=yt.caption=yt.thead,yt.th=yt.td,E.option||(yt.optgroup=yt.option=[1,"<select multiple='multiple'>","</select>"]);function Mt(s,o){var h;return typeof s.getElementsByTagName<"u"?h=s.getElementsByTagName(o||"*"):typeof s.querySelectorAll<"u"?h=s.querySelectorAll(o||"*"):h=[],o===void 0||o&&I(s,o)?l.merge([s],h):h}function dt(s,o){for(var h=0,p=s.length;h<p;h++)K.set(s[h],"globalEval",!o||K.get(o[h],"globalEval"))}var Gt=/<|&#?\w+;/;function kt(s,o,h,p,M){for(var S,A,B,F,G,ae,he=o.createDocumentFragment(),Q=[],xe=0,nt=s.length;xe<nt;xe++)if(S=s[xe],S||S===0)if(N(S)==="object")l.merge(Q,S.nodeType?[S]:S);else if(!Gt.test(S))Q.push(o.createTextNode(S));else{for(A=A||he.appendChild(o.createElement("div")),B=(Ve.exec(S)||["",""])[1].toLowerCase(),F=yt[B]||yt._default,A.innerHTML=F[1]+l.htmlPrefilter(S)+F[2],ae=F[0];ae--;)A=A.lastChild;l.merge(Q,A.childNodes),A=he.firstChild,A.textContent=""}for(he.textContent="",xe=0;S=Q[xe++];){if(p&&l.inArray(S,p)>-1){M&&M.push(S);continue}if(G=qe(S),A=Mt(he.appendChild(S),"script"),G&&dt(A),h)for(ae=0;S=A[ae++];)Ze.test(S.type||"")&&h.push(S)}return he}var Ln=/^([^.]*)(?:\.(.+)|)/;function Bt(){return!0}function rn(){return!1}function Dn(s,o,h,p,M,S){var A,B;if(typeof o=="object"){typeof h!="string"&&(p=p||h,h=void 0);for(B in o)Dn(s,B,h,p,o[B],S);return s}if(p==null&&M==null?(M=h,p=h=void 0):M==null&&(typeof h=="string"?(M=p,p=void 0):(M=p,p=h,h=void 0)),M===!1)M=rn;else if(!M)return s;return S===1&&(A=M,M=function(F){return l().off(F),A.apply(this,arguments)},M.guid=A.guid||(A.guid=l.guid++)),s.each(function(){l.event.add(this,o,M,p,h)})}l.event={global:{},add:function(s,o,h,p,M){var S,A,B,F,G,ae,he,Q,xe,nt,St,ct=K.get(s);if(ge(s))for(h.handler&&(S=h,h=S.handler,M=S.selector),M&&l.find.matchesSelector(we,M),h.guid||(h.guid=l.guid++),(F=ct.events)||(F=ct.events=Object.create(null)),(A=ct.handle)||(A=ct.handle=function(nn){return typeof l<"u"&&l.event.triggered!==nn.type?l.event.dispatch.apply(s,arguments):void 0}),o=(o||"").match($e)||[""],G=o.length;G--;)B=Ln.exec(o[G])||[],xe=St=B[1],nt=(B[2]||"").split(".").sort(),xe&&(he=l.event.special[xe]||{},xe=(M?he.delegateType:he.bindType)||xe,he=l.event.special[xe]||{},ae=l.extend({type:xe,origType:St,data:p,handler:h,guid:h.guid,selector:M,needsContext:M&&l.expr.match.needsContext.test(M),namespace:nt.join(".")},S),(Q=F[xe])||(Q=F[xe]=[],Q.delegateCount=0,(!he.setup||he.setup.call(s,p,nt,A)===!1)&&s.addEventListener&&s.addEventListener(xe,A)),he.add&&(he.add.call(s,ae),ae.handler.guid||(ae.handler.guid=h.guid)),M?Q.splice(Q.delegateCount++,0,ae):Q.push(ae),l.event.global[xe]=!0)},remove:function(s,o,h,p,M){var S,A,B,F,G,ae,he,Q,xe,nt,St,ct=K.hasData(s)&&K.get(s);if(!(!ct||!(F=ct.events))){for(o=(o||"").match($e)||[""],G=o.length;G--;){if(B=Ln.exec(o[G])||[],xe=St=B[1],nt=(B[2]||"").split(".").sort(),!xe){for(xe in F)l.event.remove(s,xe+o[G],h,p,!0);continue}for(he=l.event.special[xe]||{},xe=(p?he.delegateType:he.bindType)||xe,Q=F[xe]||[],B=B[2]&&new RegExp("(^|\\.)"+nt.join("\\.(?:.*\\.|)")+"(\\.|$)"),A=S=Q.length;S--;)ae=Q[S],(M||St===ae.origType)&&(!h||h.guid===ae.guid)&&(!B||B.test(ae.namespace))&&(!p||p===ae.selector||p==="**"&&ae.selector)&&(Q.splice(S,1),ae.selector&&Q.delegateCount--,he.remove&&he.remove.call(s,ae));A&&!Q.length&&((!he.teardown||he.teardown.call(s,nt,ct.handle)===!1)&&l.removeEvent(s,xe,ct.handle),delete F[xe])}l.isEmptyObject(F)&&K.remove(s,"handle events")}},dispatch:function(s){var o,h,p,M,S,A,B=new Array(arguments.length),F=l.event.fix(s),G=(K.get(this,"events")||Object.create(null))[F.type]||[],ae=l.event.special[F.type]||{};for(B[0]=F,o=1;o<arguments.length;o++)B[o]=arguments[o];if(F.delegateTarget=this,!(ae.preDispatch&&ae.preDispatch.call(this,F)===!1)){for(A=l.event.handlers.call(this,F,G),o=0;(M=A[o++])&&!F.isPropagationStopped();)for(F.currentTarget=M.elem,h=0;(S=M.handlers[h++])&&!F.isImmediatePropagationStopped();)(!F.rnamespace||S.namespace===!1||F.rnamespace.test(S.namespace))&&(F.handleObj=S,F.data=S.data,p=((l.event.special[S.origType]||{}).handle||S.handler).apply(M.elem,B),p!==void 0&&(F.result=p)===!1&&(F.preventDefault(),F.stopPropagation()));return ae.postDispatch&&ae.postDispatch.call(this,F),F.result}},handlers:function(s,o){var h,p,M,S,A,B=[],F=o.delegateCount,G=s.target;if(F&&G.nodeType&&!(s.type==="click"&&s.button>=1)){for(;G!==this;G=G.parentNode||this)if(G.nodeType===1&&!(s.type==="click"&&G.disabled===!0)){for(S=[],A={},h=0;h<F;h++)p=o[h],M=p.selector+" ",A[M]===void 0&&(A[M]=p.needsContext?l(M,this).index(G)>-1:l.find(M,this,null,[G]).length),A[M]&&S.push(p);S.length&&B.push({elem:G,handlers:S})}}return G=this,F<o.length&&B.push({elem:G,handlers:o.slice(F)}),B},addProp:function(s,o){Object.defineProperty(l.Event.prototype,s,{enumerable:!0,configurable:!0,get:b(o)?function(){if(this.originalEvent)return o(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[s]},set:function(h){Object.defineProperty(this,s,{enumerable:!0,configurable:!0,writable:!0,value:h})}})},fix:function(s){return s[l.expando]?s:new l.Event(s)},special:{load:{noBubble:!0},click:{setup:function(s){var o=this||s;return _e.test(o.type)&&o.click&&I(o,"input")&&zn(o,"click",!0),!1},trigger:function(s){var o=this||s;return _e.test(o.type)&&o.click&&I(o,"input")&&zn(o,"click"),!0},_default:function(s){var o=s.target;return _e.test(o.type)&&o.click&&I(o,"input")&&K.get(o,"click")||I(o,"a")}},beforeunload:{postDispatch:function(s){s.result!==void 0&&s.originalEvent&&(s.originalEvent.returnValue=s.result)}}}};function zn(s,o,h){if(!h){K.get(s,o)===void 0&&l.event.add(s,o,Bt);return}K.set(s,o,!1),l.event.add(s,o,{namespace:!1,handler:function(p){var M,S=K.get(this,o);if(p.isTrigger&1&&this[o]){if(S)(l.event.special[o]||{}).delegateType&&p.stopPropagation();else if(S=a.call(arguments),K.set(this,o,S),this[o](),M=K.get(this,o),K.set(this,o,!1),S!==M)return p.stopImmediatePropagation(),p.preventDefault(),M}else S&&(K.set(this,o,l.event.trigger(S[0],S.slice(1),this)),p.stopPropagation(),p.isImmediatePropagationStopped=Bt)}})}l.removeEvent=function(s,o,h){s.removeEventListener&&s.removeEventListener(o,h)},l.Event=function(s,o){if(!(this instanceof l.Event))return new l.Event(s,o);s&&s.type?(this.originalEvent=s,this.type=s.type,this.isDefaultPrevented=s.defaultPrevented||s.defaultPrevented===void 0&&s.returnValue===!1?Bt:rn,this.target=s.target&&s.target.nodeType===3?s.target.parentNode:s.target,this.currentTarget=s.currentTarget,this.relatedTarget=s.relatedTarget):this.type=s,o&&l.extend(this,o),this.timeStamp=s&&s.timeStamp||Date.now(),this[l.expando]=!0},l.Event.prototype={constructor:l.Event,isDefaultPrevented:rn,isPropagationStopped:rn,isImmediatePropagationStopped:rn,isSimulated:!1,preventDefault:function(){var s=this.originalEvent;this.isDefaultPrevented=Bt,s&&!this.isSimulated&&s.preventDefault()},stopPropagation:function(){var s=this.originalEvent;this.isPropagationStopped=Bt,s&&!this.isSimulated&&s.stopPropagation()},stopImmediatePropagation:function(){var s=this.originalEvent;this.isImmediatePropagationStopped=Bt,s&&!this.isSimulated&&s.stopImmediatePropagation(),this.stopPropagation()}},l.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},l.event.addProp),l.each({focus:"focusin",blur:"focusout"},function(s,o){function h(p){if(m.documentMode){var M=K.get(this,"handle"),S=l.event.fix(p);S.type=p.type==="focusin"?"focus":"blur",S.isSimulated=!0,M(p),S.target===S.currentTarget&&M(S)}else l.event.simulate(o,p.target,l.event.fix(p))}l.event.special[s]={setup:function(){var p;if(zn(this,s,!0),m.documentMode)p=K.get(this,o),p||this.addEventListener(o,h),K.set(this,o,(p||0)+1);else return!1},trigger:function(){return zn(this,s),!0},teardown:function(){var p;if(m.documentMode)p=K.get(this,o)-1,p?K.set(this,o,p):(this.removeEventListener(o,h),K.remove(this,o));else return!1},_default:function(p){return K.get(p.target,s)},delegateType:o},l.event.special[o]={setup:function(){var p=this.ownerDocument||this.document||this,M=m.documentMode?this:p,S=K.get(M,o);S||(m.documentMode?this.addEventListener(o,h):p.addEventListener(s,h,!0)),K.set(M,o,(S||0)+1)},teardown:function(){var p=this.ownerDocument||this.document||this,M=m.documentMode?this:p,S=K.get(M,o)-1;S?K.set(M,o,S):(m.documentMode?this.removeEventListener(o,h):p.removeEventListener(s,h,!0),K.remove(M,o))}}}),l.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(s,o){l.event.special[s]={delegateType:o,bindType:o,handle:function(h){var p,M=this,S=h.relatedTarget,A=h.handleObj;return(!S||S!==M&&!l.contains(M,S))&&(h.type=A.origType,p=A.handler.apply(this,arguments),h.type=o),p}}}),l.fn.extend({on:function(s,o,h,p){return Dn(this,s,o,h,p)},one:function(s,o,h,p){return Dn(this,s,o,h,p,1)},off:function(s,o,h){var p,M;if(s&&s.preventDefault&&s.handleObj)return p=s.handleObj,l(s.delegateTarget).off(p.namespace?p.origType+"."+p.namespace:p.origType,p.selector,p.handler),this;if(typeof s=="object"){for(M in s)this.off(M,o,s[M]);return this}return(o===!1||typeof o=="function")&&(h=o,o=void 0),h===!1&&(h=rn),this.each(function(){l.event.remove(this,s,h,o)})}});var Wi=/<script|<style|<link/i,rs=/checked\s*(?:[^=]|=\s*.checked.)/i,Xi=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Pr(s,o){return I(s,"table")&&I(o.nodeType!==11?o:o.firstChild,"tr")&&l(s).children("tbody")[0]||s}function ss(s){return s.type=(s.getAttribute("type")!==null)+"/"+s.type,s}function aa(s){return(s.type||"").slice(0,5)==="true/"?s.type=s.type.slice(5):s.removeAttribute("type"),s}function as(s,o){var h,p,M,S,A,B,F;if(o.nodeType===1){if(K.hasData(s)&&(S=K.get(s),F=S.events,F)){K.remove(o,"handle events");for(M in F)for(h=0,p=F[M].length;h<p;h++)l.event.add(o,M,F[M][h])}Ne.hasData(s)&&(A=Ne.access(s),B=l.extend({},A),Ne.set(o,B))}}function oa(s,o){var h=o.nodeName.toLowerCase();h==="input"&&_e.test(s.type)?o.checked=s.checked:(h==="input"||h==="textarea")&&(o.defaultValue=s.defaultValue)}function C(s,o,h,p){o=c(o);var M,S,A,B,F,G,ae=0,he=s.length,Q=he-1,xe=o[0],nt=b(xe);if(nt||he>1&&typeof xe=="string"&&!E.checkClone&&rs.test(xe))return s.each(function(St){var ct=s.eq(St);nt&&(o[0]=xe.call(this,St,ct.html())),C(ct,o,h,p)});if(he&&(M=kt(o,s[0].ownerDocument,!1,s,p),S=M.firstChild,M.childNodes.length===1&&(M=S),S||p)){for(A=l.map(Mt(M,"script"),ss),B=A.length;ae<he;ae++)F=M,ae!==Q&&(F=l.clone(F,!0,!0),B&&l.merge(A,Mt(F,"script"))),h.call(s[ae],F,ae);if(B)for(G=A[A.length-1].ownerDocument,l.map(A,aa),ae=0;ae<B;ae++)F=A[ae],Ze.test(F.type||"")&&!K.access(F,"globalEval")&&l.contains(G,F)&&(F.src&&(F.type||"").toLowerCase()!=="module"?l._evalUrl&&!F.noModule&&l._evalUrl(F.src,{nonce:F.nonce||F.getAttribute("nonce")},G):R(F.textContent.replace(Xi,""),F,G))}return s}function W(s,o,h){for(var p,M=o?l.filter(o,s):s,S=0;(p=M[S])!=null;S++)!h&&p.nodeType===1&&l.cleanData(Mt(p)),p.parentNode&&(h&&qe(p)&&dt(Mt(p,"script")),p.parentNode.removeChild(p));return s}l.extend({htmlPrefilter:function(s){return s},clone:function(s,o,h){var p,M,S,A,B=s.cloneNode(!0),F=qe(s);if(!E.noCloneChecked&&(s.nodeType===1||s.nodeType===11)&&!l.isXMLDoc(s))for(A=Mt(B),S=Mt(s),p=0,M=S.length;p<M;p++)oa(S[p],A[p]);if(o)if(h)for(S=S||Mt(s),A=A||Mt(B),p=0,M=S.length;p<M;p++)as(S[p],A[p]);else as(s,B);return A=Mt(B,"script"),A.length>0&&dt(A,!F&&Mt(s,"script")),B},cleanData:function(s){for(var o,h,p,M=l.event.special,S=0;(h=s[S])!==void 0;S++)if(ge(h)){if(o=h[K.expando]){if(o.events)for(p in o.events)M[p]?l.event.remove(h,p):l.removeEvent(h,p,o.handle);h[K.expando]=void 0}h[Ne.expando]&&(h[Ne.expando]=void 0)}}}),l.fn.extend({detach:function(s){return W(this,s,!0)},remove:function(s){return W(this,s)},text:function(s){return Xe(this,function(o){return o===void 0?l.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=o)})},null,s,arguments.length)},append:function(){return C(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=Pr(this,s);o.appendChild(s)}})},prepend:function(){return C(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=Pr(this,s);o.insertBefore(s,o.firstChild)}})},before:function(){return C(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this)})},after:function(){return C(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this.nextSibling)})},empty:function(){for(var s,o=0;(s=this[o])!=null;o++)s.nodeType===1&&(l.cleanData(Mt(s,!1)),s.textContent="");return this},clone:function(s,o){return s=s??!1,o=o??s,this.map(function(){return l.clone(this,s,o)})},html:function(s){return Xe(this,function(o){var h=this[0]||{},p=0,M=this.length;if(o===void 0&&h.nodeType===1)return h.innerHTML;if(typeof o=="string"&&!Wi.test(o)&&!yt[(Ve.exec(o)||["",""])[1].toLowerCase()]){o=l.htmlPrefilter(o);try{for(;p<M;p++)h=this[p]||{},h.nodeType===1&&(l.cleanData(Mt(h,!1)),h.innerHTML=o);h=0}catch{}}h&&this.empty().append(o)},null,s,arguments.length)},replaceWith:function(){var s=[];return C(this,arguments,function(o){var h=this.parentNode;l.inArray(this,s)<0&&(l.cleanData(Mt(this)),h&&h.replaceChild(o,this))},s)}}),l.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(s,o){l.fn[s]=function(h){for(var p,M=[],S=l(h),A=S.length-1,B=0;B<=A;B++)p=B===A?this:this.clone(!0),l(S[B])[o](p),u.apply(M,p.get());return this.pushStack(M)}});var ne=new RegExp("^("+Ce+")(?!px)[a-z%]+$","i"),ie=/^--/,X=function(s){var o=s.ownerDocument.defaultView;return(!o||!o.opener)&&(o=e),o.getComputedStyle(s)},Se=function(s,o,h){var p,M,S={};for(M in o)S[M]=s.style[M],s.style[M]=o[M];p=h.call(s);for(M in o)s.style[M]=S[M];return p},Re=new RegExp(We.join("|"),"i");(function(){function s(){if(G){F.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",G.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",we.appendChild(F).appendChild(G);var ae=e.getComputedStyle(G);h=ae.top!=="1%",B=o(ae.marginLeft)===12,G.style.right="60%",S=o(ae.right)===36,p=o(ae.width)===36,G.style.position="absolute",M=o(G.offsetWidth/3)===12,we.removeChild(F),G=null}}function o(ae){return Math.round(parseFloat(ae))}var h,p,M,S,A,B,F=m.createElement("div"),G=m.createElement("div");G.style&&(G.style.backgroundClip="content-box",G.cloneNode(!0).style.backgroundClip="",E.clearCloneStyle=G.style.backgroundClip==="content-box",l.extend(E,{boxSizingReliable:function(){return s(),p},pixelBoxStyles:function(){return s(),S},pixelPosition:function(){return s(),h},reliableMarginLeft:function(){return s(),B},scrollboxSize:function(){return s(),M},reliableTrDimensions:function(){var ae,he,Q,xe;return A==null&&(ae=m.createElement("table"),he=m.createElement("tr"),Q=m.createElement("div"),ae.style.cssText="position:absolute;left:-11111px;border-collapse:separate",he.style.cssText="box-sizing:content-box;border:1px solid",he.style.height="1px",Q.style.height="9px",Q.style.display="block",we.appendChild(ae).appendChild(he).appendChild(Q),xe=e.getComputedStyle(he),A=parseInt(xe.height,10)+parseInt(xe.borderTopWidth,10)+parseInt(xe.borderBottomWidth,10)===he.offsetHeight,we.removeChild(ae)),A}}))})();function Fe(s,o,h){var p,M,S,A,B=ie.test(o),F=s.style;return h=h||X(s),h&&(A=h.getPropertyValue(o)||h[o],B&&A&&(A=A.replace(pe,"$1")||void 0),A===""&&!qe(s)&&(A=l.style(s,o)),!E.pixelBoxStyles()&&ne.test(A)&&Re.test(o)&&(p=F.width,M=F.minWidth,S=F.maxWidth,F.minWidth=F.maxWidth=F.width=A,A=h.width,F.width=p,F.minWidth=M,F.maxWidth=S)),A!==void 0?A+"":A}function ze(s,o){return{get:function(){if(s()){delete this.get;return}return(this.get=o).apply(this,arguments)}}}var Ke=["Webkit","Moz","ms"],Je=m.createElement("div").style,je={};function wt(s){for(var o=s[0].toUpperCase()+s.slice(1),h=Ke.length;h--;)if(s=Ke[h]+o,s in Je)return s}function Ut(s){var o=l.cssProps[s]||je[s];return o||(s in Je?s:je[s]=wt(s)||s)}var zt=/^(none|table(?!-c[ea]).+)/,un={position:"absolute",visibility:"hidden",display:"block"},bt={letterSpacing:"0",fontWeight:"400"};function Ge(s,o,h){var p=ot.exec(o);return p?Math.max(0,p[2]-(h||0))+(p[3]||"px"):o}function Wt(s,o,h,p,M,S){var A=o==="width"?1:0,B=0,F=0,G=0;if(h===(p?"border":"content"))return 0;for(;A<4;A+=2)h==="margin"&&(G+=l.css(s,h+We[A],!0,M)),p?(h==="content"&&(F-=l.css(s,"padding"+We[A],!0,M)),h!=="margin"&&(F-=l.css(s,"border"+We[A]+"Width",!0,M))):(F+=l.css(s,"padding"+We[A],!0,M),h!=="padding"?F+=l.css(s,"border"+We[A]+"Width",!0,M):B+=l.css(s,"border"+We[A]+"Width",!0,M));return!p&&S>=0&&(F+=Math.max(0,Math.ceil(s["offset"+o[0].toUpperCase()+o.slice(1)]-S-F-B-.5))||0),F+G}function Tt(s,o,h){var p=X(s),M=!E.boxSizingReliable()||h,S=M&&l.css(s,"boxSizing",!1,p)==="border-box",A=S,B=Fe(s,o,p),F="offset"+o[0].toUpperCase()+o.slice(1);if(ne.test(B)){if(!h)return B;B="auto"}return(!E.boxSizingReliable()&&S||!E.reliableTrDimensions()&&I(s,"tr")||B==="auto"||!parseFloat(B)&&l.css(s,"display",!1,p)==="inline")&&s.getClientRects().length&&(S=l.css(s,"boxSizing",!1,p)==="border-box",A=F in s,A&&(B=s[F])),B=parseFloat(B)||0,B+Wt(s,o,h||(S?"border":"content"),A,p,B)+"px"}l.extend({cssHooks:{opacity:{get:function(s,o){if(o){var h=Fe(s,"opacity");return h===""?"1":h}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(s,o,h,p){if(!(!s||s.nodeType===3||s.nodeType===8||!s.style)){var M,S,A,B=ee(o),F=ie.test(o),G=s.style;if(F||(o=Ut(B)),A=l.cssHooks[o]||l.cssHooks[B],h!==void 0){if(S=typeof h,S==="string"&&(M=ot.exec(h))&&M[1]&&(h=T(s,o,M),S="number"),h==null||h!==h)return;S==="number"&&!F&&(h+=M&&M[3]||(l.cssNumber[B]?"":"px")),!E.clearCloneStyle&&h===""&&o.indexOf("background")===0&&(G[o]="inherit"),(!A||!("set"in A)||(h=A.set(s,h,p))!==void 0)&&(F?G.setProperty(o,h):G[o]=h)}else return A&&"get"in A&&(M=A.get(s,!1,p))!==void 0?M:G[o]}},css:function(s,o,h,p){var M,S,A,B=ee(o),F=ie.test(o);return F||(o=Ut(B)),A=l.cssHooks[o]||l.cssHooks[B],A&&"get"in A&&(M=A.get(s,!0,h)),M===void 0&&(M=Fe(s,o,p)),M==="normal"&&o in bt&&(M=bt[o]),h===""||h?(S=parseFloat(M),h===!0||isFinite(S)?S||0:M):M}}),l.each(["height","width"],function(s,o){l.cssHooks[o]={get:function(h,p,M){if(p)return zt.test(l.css(h,"display"))&&(!h.getClientRects().length||!h.getBoundingClientRect().width)?Se(h,un,function(){return Tt(h,o,M)}):Tt(h,o,M)},set:function(h,p,M){var S,A=X(h),B=!E.scrollboxSize()&&A.position==="absolute",F=B||M,G=F&&l.css(h,"boxSizing",!1,A)==="border-box",ae=M?Wt(h,o,M,G,A):0;return G&&B&&(ae-=Math.ceil(h["offset"+o[0].toUpperCase()+o.slice(1)]-parseFloat(A[o])-Wt(h,o,"border",!1,A)-.5)),ae&&(S=ot.exec(p))&&(S[3]||"px")!=="px"&&(h.style[o]=p,p=l.css(h,o)),Ge(h,p,ae)}}}),l.cssHooks.marginLeft=ze(E.reliableMarginLeft,function(s,o){if(o)return(parseFloat(Fe(s,"marginLeft"))||s.getBoundingClientRect().left-Se(s,{marginLeft:0},function(){return s.getBoundingClientRect().left}))+"px"}),l.each({margin:"",padding:"",border:"Width"},function(s,o){l.cssHooks[s+o]={expand:function(h){for(var p=0,M={},S=typeof h=="string"?h.split(" "):[h];p<4;p++)M[s+We[p]+o]=S[p]||S[p-2]||S[0];return M}},s!=="margin"&&(l.cssHooks[s+o].set=Ge)}),l.fn.extend({css:function(s,o){return Xe(this,function(h,p,M){var S,A,B={},F=0;if(Array.isArray(p)){for(S=X(h),A=p.length;F<A;F++)B[p[F]]=l.css(h,p[F],!1,S);return B}return M!==void 0?l.style(h,p,M):l.css(h,p)},s,o,arguments.length>1)}});function Nt(s,o,h,p,M){return new Nt.prototype.init(s,o,h,p,M)}l.Tween=Nt,Nt.prototype={constructor:Nt,init:function(s,o,h,p,M,S){this.elem=s,this.prop=h,this.easing=M||l.easing._default,this.options=o,this.start=this.now=this.cur(),this.end=p,this.unit=S||(l.cssNumber[h]?"":"px")},cur:function(){var s=Nt.propHooks[this.prop];return s&&s.get?s.get(this):Nt.propHooks._default.get(this)},run:function(s){var o,h=Nt.propHooks[this.prop];return this.options.duration?this.pos=o=l.easing[this.easing](s,this.options.duration*s,0,1,this.options.duration):this.pos=o=s,this.now=(this.end-this.start)*o+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),h&&h.set?h.set(this):Nt.propHooks._default.set(this),this}},Nt.prototype.init.prototype=Nt.prototype,Nt.propHooks={_default:{get:function(s){var o;return s.elem.nodeType!==1||s.elem[s.prop]!=null&&s.elem.style[s.prop]==null?s.elem[s.prop]:(o=l.css(s.elem,s.prop,""),!o||o==="auto"?0:o)},set:function(s){l.fx.step[s.prop]?l.fx.step[s.prop](s):s.elem.nodeType===1&&(l.cssHooks[s.prop]||s.elem.style[Ut(s.prop)]!=null)?l.style(s.elem,s.prop,s.now+s.unit):s.elem[s.prop]=s.now}}},Nt.propHooks.scrollTop=Nt.propHooks.scrollLeft={set:function(s){s.elem.nodeType&&s.elem.parentNode&&(s.elem[s.prop]=s.now)}},l.easing={linear:function(s){return s},swing:function(s){return .5-Math.cos(s*Math.PI)/2},_default:"swing"},l.fx=Nt.prototype.init,l.fx.step={};var Mn,Zt,Lr=/^(?:toggle|show|hide)$/,Ht=/queueHooks$/;function bn(){Zt&&(m.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(bn):e.setTimeout(bn,l.fx.interval),l.fx.tick())}function qi(){return e.setTimeout(function(){Mn=void 0}),Mn=Date.now()}function tn(s,o){var h,p=0,M={height:s};for(o=o?1:0;p<4;p+=2-o)h=We[p],M["margin"+h]=M["padding"+h]=s;return o&&(M.opacity=M.width=s),M}function ji(s,o,h){for(var p,M=(In.tweeners[o]||[]).concat(In.tweeners["*"]),S=0,A=M.length;S<A;S++)if(p=M[S].call(h,o,s))return p}function la(s,o,h){var p,M,S,A,B,F,G,ae,he="width"in o||"height"in o,Q=this,xe={},nt=s.style,St=s.nodeType&&Rt(s),ct=K.get(s,"fxshow");h.queue||(A=l._queueHooks(s,"fx"),A.unqueued==null&&(A.unqueued=0,B=A.empty.fire,A.empty.fire=function(){A.unqueued||B()}),A.unqueued++,Q.always(function(){Q.always(function(){A.unqueued--,l.queue(s,"fx").length||A.empty.fire()})}));for(p in o)if(M=o[p],Lr.test(M)){if(delete o[p],S=S||M==="toggle",M===(St?"hide":"show"))if(M==="show"&&ct&&ct[p]!==void 0)St=!0;else continue;xe[p]=ct&&ct[p]||l.style(s,p)}if(F=!l.isEmptyObject(o),!(!F&&l.isEmptyObject(xe))){he&&s.nodeType===1&&(h.overflow=[nt.overflow,nt.overflowX,nt.overflowY],G=ct&&ct.display,G==null&&(G=K.get(s,"display")),ae=l.css(s,"display"),ae==="none"&&(G?ae=G:(se([s],!0),G=s.style.display||G,ae=l.css(s,"display"),se([s]))),(ae==="inline"||ae==="inline-block"&&G!=null)&&l.css(s,"float")==="none"&&(F||(Q.done(function(){nt.display=G}),G==null&&(ae=nt.display,G=ae==="none"?"":ae)),nt.display="inline-block")),h.overflow&&(nt.overflow="hidden",Q.always(function(){nt.overflow=h.overflow[0],nt.overflowX=h.overflow[1],nt.overflowY=h.overflow[2]})),F=!1;for(p in xe)F||(ct?"hidden"in ct&&(St=ct.hidden):ct=K.access(s,"fxshow",{display:G}),S&&(ct.hidden=!St),St&&se([s],!0),Q.done(function(){St||se([s]),K.remove(s,"fxshow");for(p in xe)l.style(s,p,xe[p])})),F=ji(St?ct[p]:0,p,Q),p in ct||(ct[p]=F.start,St&&(F.end=F.start,F.start=0))}}function os(s,o){var h,p,M,S,A;for(h in s)if(p=ee(h),M=o[p],S=s[h],Array.isArray(S)&&(M=S[1],S=s[h]=S[0]),h!==p&&(s[p]=S,delete s[h]),A=l.cssHooks[p],A&&"expand"in A){S=A.expand(S),delete s[p];for(h in S)h in s||(s[h]=S[h],o[h]=M)}else o[p]=M}function In(s,o,h){var p,M,S=0,A=In.prefilters.length,B=l.Deferred().always(function(){delete F.elem}),F=function(){if(M)return!1;for(var he=Mn||qi(),Q=Math.max(0,G.startTime+G.duration-he),xe=Q/G.duration||0,nt=1-xe,St=0,ct=G.tweens.length;St<ct;St++)G.tweens[St].run(nt);return B.notifyWith(s,[G,nt,Q]),nt<1&&ct?Q:(ct||B.notifyWith(s,[G,1,0]),B.resolveWith(s,[G]),!1)},G=B.promise({elem:s,props:l.extend({},o),opts:l.extend(!0,{specialEasing:{},easing:l.easing._default},h),originalProperties:o,originalOptions:h,startTime:Mn||qi(),duration:h.duration,tweens:[],createTween:function(he,Q){var xe=l.Tween(s,G.opts,he,Q,G.opts.specialEasing[he]||G.opts.easing);return G.tweens.push(xe),xe},stop:function(he){var Q=0,xe=he?G.tweens.length:0;if(M)return this;for(M=!0;Q<xe;Q++)G.tweens[Q].run(1);return he?(B.notifyWith(s,[G,1,0]),B.resolveWith(s,[G,he])):B.rejectWith(s,[G,he]),this}}),ae=G.props;for(os(ae,G.opts.specialEasing);S<A;S++)if(p=In.prefilters[S].call(G,s,ae,G.opts),p)return b(p.stop)&&(l._queueHooks(G.elem,G.opts.queue).stop=p.stop.bind(p)),p;return l.map(ae,ji,G),b(G.opts.start)&&G.opts.start.call(s,G),G.progress(G.opts.progress).done(G.opts.done,G.opts.complete).fail(G.opts.fail).always(G.opts.always),l.fx.timer(l.extend(F,{elem:s,anim:G,queue:G.opts.queue})),G}l.Animation=l.extend(In,{tweeners:{"*":[function(s,o){var h=this.createTween(s,o);return T(h.elem,s,ot.exec(o),h),h}]},tweener:function(s,o){b(s)?(o=s,s=["*"]):s=s.match($e);for(var h,p=0,M=s.length;p<M;p++)h=s[p],In.tweeners[h]=In.tweeners[h]||[],In.tweeners[h].unshift(o)},prefilters:[la],prefilter:function(s,o){o?In.prefilters.unshift(s):In.prefilters.push(s)}}),l.speed=function(s,o,h){var p=s&&typeof s=="object"?l.extend({},s):{complete:h||!h&&o||b(s)&&s,duration:s,easing:h&&o||o&&!b(o)&&o};return l.fx.off?p.duration=0:typeof p.duration!="number"&&(p.duration in l.fx.speeds?p.duration=l.fx.speeds[p.duration]:p.duration=l.fx.speeds._default),(p.queue==null||p.queue===!0)&&(p.queue="fx"),p.old=p.complete,p.complete=function(){b(p.old)&&p.old.call(this),p.queue&&l.dequeue(this,p.queue)},p},l.fn.extend({fadeTo:function(s,o,h,p){return this.filter(Rt).css("opacity",0).show().end().animate({opacity:o},s,h,p)},animate:function(s,o,h,p){var M=l.isEmptyObject(s),S=l.speed(o,h,p),A=function(){var B=In(this,l.extend({},s),S);(M||K.get(this,"finish"))&&B.stop(!0)};return A.finish=A,M||S.queue===!1?this.each(A):this.queue(S.queue,A)},stop:function(s,o,h){var p=function(M){var S=M.stop;delete M.stop,S(h)};return typeof s!="string"&&(h=o,o=s,s=void 0),o&&this.queue(s||"fx",[]),this.each(function(){var M=!0,S=s!=null&&s+"queueHooks",A=l.timers,B=K.get(this);if(S)B[S]&&B[S].stop&&p(B[S]);else for(S in B)B[S]&&B[S].stop&&Ht.test(S)&&p(B[S]);for(S=A.length;S--;)A[S].elem===this&&(s==null||A[S].queue===s)&&(A[S].anim.stop(h),M=!1,A.splice(S,1));(M||!h)&&l.dequeue(this,s)})},finish:function(s){return s!==!1&&(s=s||"fx"),this.each(function(){var o,h=K.get(this),p=h[s+"queue"],M=h[s+"queueHooks"],S=l.timers,A=p?p.length:0;for(h.finish=!0,l.queue(this,s,[]),M&&M.stop&&M.stop.call(this,!0),o=S.length;o--;)S[o].elem===this&&S[o].queue===s&&(S[o].anim.stop(!0),S.splice(o,1));for(o=0;o<A;o++)p[o]&&p[o].finish&&p[o].finish.call(this);delete h.finish})}}),l.each(["toggle","show","hide"],function(s,o){var h=l.fn[o];l.fn[o]=function(p,M,S){return p==null||typeof p=="boolean"?h.apply(this,arguments):this.animate(tn(o,!0),p,M,S)}}),l.each({slideDown:tn("show"),slideUp:tn("hide"),slideToggle:tn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(s,o){l.fn[s]=function(h,p,M){return this.animate(o,h,p,M)}}),l.timers=[],l.fx.tick=function(){var s,o=0,h=l.timers;for(Mn=Date.now();o<h.length;o++)s=h[o],!s()&&h[o]===s&&h.splice(o--,1);h.length||l.fx.stop(),Mn=void 0},l.fx.timer=function(s){l.timers.push(s),l.fx.start()},l.fx.interval=13,l.fx.start=function(){Zt||(Zt=!0,bn())},l.fx.stop=function(){Zt=null},l.fx.speeds={slow:600,fast:200,_default:400},l.fn.delay=function(s,o){return s=l.fx&&l.fx.speeds[s]||s,o=o||"fx",this.queue(o,function(h,p){var M=e.setTimeout(h,s);p.stop=function(){e.clearTimeout(M)}})},function(){var s=m.createElement("input"),o=m.createElement("select"),h=o.appendChild(m.createElement("option"));s.type="checkbox",E.checkOn=s.value!=="",E.optSelected=h.selected,s=m.createElement("input"),s.value="t",s.type="radio",E.radioValue=s.value==="t"}();var Qo,Dr=l.expr.attrHandle;l.fn.extend({attr:function(s,o){return Xe(this,l.attr,s,o,arguments.length>1)},removeAttr:function(s){return this.each(function(){l.removeAttr(this,s)})}}),l.extend({attr:function(s,o,h){var p,M,S=s.nodeType;if(!(S===3||S===8||S===2)){if(typeof s.getAttribute>"u")return l.prop(s,o,h);if((S!==1||!l.isXMLDoc(s))&&(M=l.attrHooks[o.toLowerCase()]||(l.expr.match.bool.test(o)?Qo:void 0)),h!==void 0){if(h===null){l.removeAttr(s,o);return}return M&&"set"in M&&(p=M.set(s,h,o))!==void 0?p:(s.setAttribute(o,h+""),h)}return M&&"get"in M&&(p=M.get(s,o))!==null?p:(p=l.find.attr(s,o),p??void 0)}},attrHooks:{type:{set:function(s,o){if(!E.radioValue&&o==="radio"&&I(s,"input")){var h=s.value;return s.setAttribute("type",o),h&&(s.value=h),o}}}},removeAttr:function(s,o){var h,p=0,M=o&&o.match($e);if(M&&s.nodeType===1)for(;h=M[p++];)s.removeAttribute(h)}}),Qo={set:function(s,o,h){return o===!1?l.removeAttr(s,h):s.setAttribute(h,h),h}},l.each(l.expr.match.bool.source.match(/\w+/g),function(s,o){var h=Dr[o]||l.find.attr;Dr[o]=function(p,M,S){var A,B,F=M.toLowerCase();return S||(B=Dr[F],Dr[F]=A,A=h(p,M,S)!=null?F:null,Dr[F]=B),A}});var uu=/^(?:input|select|textarea|button)$/i,hu=/^(?:a|area)$/i;l.fn.extend({prop:function(s,o){return Xe(this,l.prop,s,o,arguments.length>1)},removeProp:function(s){return this.each(function(){delete this[l.propFix[s]||s]})}}),l.extend({prop:function(s,o,h){var p,M,S=s.nodeType;if(!(S===3||S===8||S===2))return(S!==1||!l.isXMLDoc(s))&&(o=l.propFix[o]||o,M=l.propHooks[o]),h!==void 0?M&&"set"in M&&(p=M.set(s,h,o))!==void 0?p:s[o]=h:M&&"get"in M&&(p=M.get(s,o))!==null?p:s[o]},propHooks:{tabIndex:{get:function(s){var o=l.find.attr(s,"tabindex");return o?parseInt(o,10):uu.test(s.nodeName)||hu.test(s.nodeName)&&s.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),E.optSelected||(l.propHooks.selected={get:function(s){var o=s.parentNode;return o&&o.parentNode&&o.parentNode.selectedIndex,null},set:function(s){var o=s.parentNode;o&&(o.selectedIndex,o.parentNode&&o.parentNode.selectedIndex)}}),l.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){l.propFix[this.toLowerCase()]=this});function wi(s){var o=s.match($e)||[];return o.join(" ")}function Ci(s){return s.getAttribute&&s.getAttribute("class")||""}function ca(s){return Array.isArray(s)?s:typeof s=="string"?s.match($e)||[]:[]}l.fn.extend({addClass:function(s){var o,h,p,M,S,A;return b(s)?this.each(function(B){l(this).addClass(s.call(this,B,Ci(this)))}):(o=ca(s),o.length?this.each(function(){if(p=Ci(this),h=this.nodeType===1&&" "+wi(p)+" ",h){for(S=0;S<o.length;S++)M=o[S],h.indexOf(" "+M+" ")<0&&(h+=M+" ");A=wi(h),p!==A&&this.setAttribute("class",A)}}):this)},removeClass:function(s){var o,h,p,M,S,A;return b(s)?this.each(function(B){l(this).removeClass(s.call(this,B,Ci(this)))}):arguments.length?(o=ca(s),o.length?this.each(function(){if(p=Ci(this),h=this.nodeType===1&&" "+wi(p)+" ",h){for(S=0;S<o.length;S++)for(M=o[S];h.indexOf(" "+M+" ")>-1;)h=h.replace(" "+M+" "," ");A=wi(h),p!==A&&this.setAttribute("class",A)}}):this):this.attr("class","")},toggleClass:function(s,o){var h,p,M,S,A=typeof s,B=A==="string"||Array.isArray(s);return b(s)?this.each(function(F){l(this).toggleClass(s.call(this,F,Ci(this),o),o)}):typeof o=="boolean"&&B?o?this.addClass(s):this.removeClass(s):(h=ca(s),this.each(function(){if(B)for(S=l(this),M=0;M<h.length;M++)p=h[M],S.hasClass(p)?S.removeClass(p):S.addClass(p);else(s===void 0||A==="boolean")&&(p=Ci(this),p&&K.set(this,"__className__",p),this.setAttribute&&this.setAttribute("class",p||s===!1?"":K.get(this,"__className__")||""))}))},hasClass:function(s){var o,h,p=0;for(o=" "+s+" ";h=this[p++];)if(h.nodeType===1&&(" "+wi(Ci(h))+" ").indexOf(o)>-1)return!0;return!1}});var fu=/\r/g;l.fn.extend({val:function(s){var o,h,p,M=this[0];return arguments.length?(p=b(s),this.each(function(S){var A;this.nodeType===1&&(p?A=s.call(this,S,l(this).val()):A=s,A==null?A="":typeof A=="number"?A+="":Array.isArray(A)&&(A=l.map(A,function(B){return B==null?"":B+""})),o=l.valHooks[this.type]||l.valHooks[this.nodeName.toLowerCase()],(!o||!("set"in o)||o.set(this,A,"value")===void 0)&&(this.value=A))})):M?(o=l.valHooks[M.type]||l.valHooks[M.nodeName.toLowerCase()],o&&"get"in o&&(h=o.get(M,"value"))!==void 0?h:(h=M.value,typeof h=="string"?h.replace(fu,""):h??"")):void 0}}),l.extend({valHooks:{option:{get:function(s){var o=l.find.attr(s,"value");return o??wi(l.text(s))}},select:{get:function(s){var o,h,p,M=s.options,S=s.selectedIndex,A=s.type==="select-one",B=A?null:[],F=A?S+1:M.length;for(S<0?p=F:p=A?S:0;p<F;p++)if(h=M[p],(h.selected||p===S)&&!h.disabled&&(!h.parentNode.disabled||!I(h.parentNode,"optgroup"))){if(o=l(h).val(),A)return o;B.push(o)}return B},set:function(s,o){for(var h,p,M=s.options,S=l.makeArray(o),A=M.length;A--;)p=M[A],(p.selected=l.inArray(l.valHooks.option.get(p),S)>-1)&&(h=!0);return h||(s.selectedIndex=-1),S}}}}),l.each(["radio","checkbox"],function(){l.valHooks[this]={set:function(s,o){if(Array.isArray(o))return s.checked=l.inArray(l(s).val(),o)>-1}},E.checkOn||(l.valHooks[this].get=function(s){return s.getAttribute("value")===null?"on":s.value})});var Ir=e.location,el={guid:Date.now()},ua=/\?/;l.parseXML=function(s){var o,h;if(!s||typeof s!="string")return null;try{o=new e.DOMParser().parseFromString(s,"text/xml")}catch{}return h=o&&o.getElementsByTagName("parsererror")[0],(!o||h)&&l.error("Invalid XML: "+(h?l.map(h.childNodes,function(p){return p.textContent}).join(`
`):s)),o};var tl=/^(?:focusinfocus|focusoutblur)$/,nl=function(s){s.stopPropagation()};l.extend(l.event,{trigger:function(s,o,h,p){var M,S,A,B,F,G,ae,he,Q=[h||m],xe=v.call(s,"type")?s.type:s,nt=v.call(s,"namespace")?s.namespace.split("."):[];if(S=he=A=h=h||m,!(h.nodeType===3||h.nodeType===8)&&!tl.test(xe+l.event.triggered)&&(xe.indexOf(".")>-1&&(nt=xe.split("."),xe=nt.shift(),nt.sort()),F=xe.indexOf(":")<0&&"on"+xe,s=s[l.expando]?s:new l.Event(xe,typeof s=="object"&&s),s.isTrigger=p?2:3,s.namespace=nt.join("."),s.rnamespace=s.namespace?new RegExp("(^|\\.)"+nt.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,s.result=void 0,s.target||(s.target=h),o=o==null?[s]:l.makeArray(o,[s]),ae=l.event.special[xe]||{},!(!p&&ae.trigger&&ae.trigger.apply(h,o)===!1))){if(!p&&!ae.noBubble&&!x(h)){for(B=ae.delegateType||xe,tl.test(B+xe)||(S=S.parentNode);S;S=S.parentNode)Q.push(S),A=S;A===(h.ownerDocument||m)&&Q.push(A.defaultView||A.parentWindow||e)}for(M=0;(S=Q[M++])&&!s.isPropagationStopped();)he=S,s.type=M>1?B:ae.bindType||xe,G=(K.get(S,"events")||Object.create(null))[s.type]&&K.get(S,"handle"),G&&G.apply(S,o),G=F&&S[F],G&&G.apply&&ge(S)&&(s.result=G.apply(S,o),s.result===!1&&s.preventDefault());return s.type=xe,!p&&!s.isDefaultPrevented()&&(!ae._default||ae._default.apply(Q.pop(),o)===!1)&&ge(h)&&F&&b(h[xe])&&!x(h)&&(A=h[F],A&&(h[F]=null),l.event.triggered=xe,s.isPropagationStopped()&&he.addEventListener(xe,nl),h[xe](),s.isPropagationStopped()&&he.removeEventListener(xe,nl),l.event.triggered=void 0,A&&(h[F]=A)),s.result}},simulate:function(s,o,h){var p=l.extend(new l.Event,h,{type:s,isSimulated:!0});l.event.trigger(p,null,o)}}),l.fn.extend({trigger:function(s,o){return this.each(function(){l.event.trigger(s,o,this)})},triggerHandler:function(s,o){var h=this[0];if(h)return l.event.trigger(s,o,h,!0)}});var du=/\[\]$/,il=/\r?\n/g,pu=/^(?:submit|button|image|reset|file)$/i,mu=/^(?:input|select|textarea|keygen)/i;function ha(s,o,h,p){var M;if(Array.isArray(o))l.each(o,function(S,A){h||du.test(s)?p(s,A):ha(s+"["+(typeof A=="object"&&A!=null?S:"")+"]",A,h,p)});else if(!h&&N(o)==="object")for(M in o)ha(s+"["+M+"]",o[M],h,p);else p(s,o)}l.param=function(s,o){var h,p=[],M=function(S,A){var B=b(A)?A():A;p[p.length]=encodeURIComponent(S)+"="+encodeURIComponent(B??"")};if(s==null)return"";if(Array.isArray(s)||s.jquery&&!l.isPlainObject(s))l.each(s,function(){M(this.name,this.value)});else for(h in s)ha(h,s[h],o,M);return p.join("&")},l.fn.extend({serialize:function(){return l.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var s=l.prop(this,"elements");return s?l.makeArray(s):this}).filter(function(){var s=this.type;return this.name&&!l(this).is(":disabled")&&mu.test(this.nodeName)&&!pu.test(s)&&(this.checked||!_e.test(s))}).map(function(s,o){var h=l(this).val();return h==null?null:Array.isArray(h)?l.map(h,function(p){return{name:o.name,value:p.replace(il,`\r
`)}}):{name:o.name,value:h.replace(il,`\r
`)}}).get()}});var gu=/%20/g,_u=/#.*$/,vu=/([?&])_=[^&]*/,xu=/^(.*?):[ \t]*([^\r\n]*)$/mg,yu=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mu=/^(?:GET|HEAD)$/,Su=/^\/\//,rl={},fa={},sl="*/".concat("*"),da=m.createElement("a");da.href=Ir.href;function al(s){return function(o,h){typeof o!="string"&&(h=o,o="*");var p,M=0,S=o.toLowerCase().match($e)||[];if(b(h))for(;p=S[M++];)p[0]==="+"?(p=p.slice(1)||"*",(s[p]=s[p]||[]).unshift(h)):(s[p]=s[p]||[]).push(h)}}function ol(s,o,h,p){var M={},S=s===fa;function A(B){var F;return M[B]=!0,l.each(s[B]||[],function(G,ae){var he=ae(o,h,p);if(typeof he=="string"&&!S&&!M[he])return o.dataTypes.unshift(he),A(he),!1;if(S)return!(F=he)}),F}return A(o.dataTypes[0])||!M["*"]&&A("*")}function pa(s,o){var h,p,M=l.ajaxSettings.flatOptions||{};for(h in o)o[h]!==void 0&&((M[h]?s:p||(p={}))[h]=o[h]);return p&&l.extend(!0,s,p),s}function Eu(s,o,h){for(var p,M,S,A,B=s.contents,F=s.dataTypes;F[0]==="*";)F.shift(),p===void 0&&(p=s.mimeType||o.getResponseHeader("Content-Type"));if(p){for(M in B)if(B[M]&&B[M].test(p)){F.unshift(M);break}}if(F[0]in h)S=F[0];else{for(M in h){if(!F[0]||s.converters[M+" "+F[0]]){S=M;break}A||(A=M)}S=S||A}if(S)return S!==F[0]&&F.unshift(S),h[S]}function bu(s,o,h,p){var M,S,A,B,F,G={},ae=s.dataTypes.slice();if(ae[1])for(A in s.converters)G[A.toLowerCase()]=s.converters[A];for(S=ae.shift();S;)if(s.responseFields[S]&&(h[s.responseFields[S]]=o),!F&&p&&s.dataFilter&&(o=s.dataFilter(o,s.dataType)),F=S,S=ae.shift(),S){if(S==="*")S=F;else if(F!=="*"&&F!==S){if(A=G[F+" "+S]||G["* "+S],!A){for(M in G)if(B=M.split(" "),B[1]===S&&(A=G[F+" "+B[0]]||G["* "+B[0]],A)){A===!0?A=G[M]:G[M]!==!0&&(S=B[0],ae.unshift(B[1]));break}}if(A!==!0)if(A&&s.throws)o=A(o);else try{o=A(o)}catch(he){return{state:"parsererror",error:A?he:"No conversion from "+F+" to "+S}}}}return{state:"success",data:o}}l.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ir.href,type:"GET",isLocal:yu.test(Ir.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sl,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":l.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(s,o){return o?pa(pa(s,l.ajaxSettings),o):pa(l.ajaxSettings,s)},ajaxPrefilter:al(rl),ajaxTransport:al(fa),ajax:function(s,o){typeof s=="object"&&(o=s,s=void 0),o=o||{};var h,p,M,S,A,B,F,G,ae,he,Q=l.ajaxSetup({},o),xe=Q.context||Q,nt=Q.context&&(xe.nodeType||xe.jquery)?l(xe):l.event,St=l.Deferred(),ct=l.Callbacks("once memory"),nn=Q.statusCode||{},jt={},kn={},Hn="canceled",gt={readyState:0,getResponseHeader:function(At){var Vt;if(F){if(!S)for(S={};Vt=xu.exec(M);)S[Vt[1].toLowerCase()+" "]=(S[Vt[1].toLowerCase()+" "]||[]).concat(Vt[2]);Vt=S[At.toLowerCase()+" "]}return Vt==null?null:Vt.join(", ")},getAllResponseHeaders:function(){return F?M:null},setRequestHeader:function(At,Vt){return F==null&&(At=kn[At.toLowerCase()]=kn[At.toLowerCase()]||At,jt[At]=Vt),this},overrideMimeType:function(At){return F==null&&(Q.mimeType=At),this},statusCode:function(At){var Vt;if(At)if(F)gt.always(At[gt.status]);else for(Vt in At)nn[Vt]=[nn[Vt],At[Vt]];return this},abort:function(At){var Vt=At||Hn;return h&&h.abort(Vt),Ri(0,Vt),this}};if(St.promise(gt),Q.url=((s||Q.url||Ir.href)+"").replace(Su,Ir.protocol+"//"),Q.type=o.method||o.type||Q.method||Q.type,Q.dataTypes=(Q.dataType||"*").toLowerCase().match($e)||[""],Q.crossDomain==null){B=m.createElement("a");try{B.href=Q.url,B.href=B.href,Q.crossDomain=da.protocol+"//"+da.host!=B.protocol+"//"+B.host}catch{Q.crossDomain=!0}}if(Q.data&&Q.processData&&typeof Q.data!="string"&&(Q.data=l.param(Q.data,Q.traditional)),ol(rl,Q,o,gt),F)return gt;G=l.event&&Q.global,G&&l.active++===0&&l.event.trigger("ajaxStart"),Q.type=Q.type.toUpperCase(),Q.hasContent=!Mu.test(Q.type),p=Q.url.replace(_u,""),Q.hasContent?Q.data&&Q.processData&&(Q.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(Q.data=Q.data.replace(gu,"+")):(he=Q.url.slice(p.length),Q.data&&(Q.processData||typeof Q.data=="string")&&(p+=(ua.test(p)?"&":"?")+Q.data,delete Q.data),Q.cache===!1&&(p=p.replace(vu,"$1"),he=(ua.test(p)?"&":"?")+"_="+el.guid+++he),Q.url=p+he),Q.ifModified&&(l.lastModified[p]&&gt.setRequestHeader("If-Modified-Since",l.lastModified[p]),l.etag[p]&&gt.setRequestHeader("If-None-Match",l.etag[p])),(Q.data&&Q.hasContent&&Q.contentType!==!1||o.contentType)&&gt.setRequestHeader("Content-Type",Q.contentType),gt.setRequestHeader("Accept",Q.dataTypes[0]&&Q.accepts[Q.dataTypes[0]]?Q.accepts[Q.dataTypes[0]]+(Q.dataTypes[0]!=="*"?", "+sl+"; q=0.01":""):Q.accepts["*"]);for(ae in Q.headers)gt.setRequestHeader(ae,Q.headers[ae]);if(Q.beforeSend&&(Q.beforeSend.call(xe,gt,Q)===!1||F))return gt.abort();if(Hn="abort",ct.add(Q.complete),gt.done(Q.success),gt.fail(Q.error),h=ol(fa,Q,o,gt),!h)Ri(-1,"No Transport");else{if(gt.readyState=1,G&&nt.trigger("ajaxSend",[gt,Q]),F)return gt;Q.async&&Q.timeout>0&&(A=e.setTimeout(function(){gt.abort("timeout")},Q.timeout));try{F=!1,h.send(jt,Ri)}catch(At){if(F)throw At;Ri(-1,At)}}function Ri(At,Vt,Nr,ga){var Vn,Fr,Gn,hi,fi,Tn=Vt;F||(F=!0,A&&e.clearTimeout(A),h=void 0,M=ga||"",gt.readyState=At>0?4:0,Vn=At>=200&&At<300||At===304,Nr&&(hi=Eu(Q,gt,Nr)),!Vn&&l.inArray("script",Q.dataTypes)>-1&&l.inArray("json",Q.dataTypes)<0&&(Q.converters["text script"]=function(){}),hi=bu(Q,hi,gt,Vn),Vn?(Q.ifModified&&(fi=gt.getResponseHeader("Last-Modified"),fi&&(l.lastModified[p]=fi),fi=gt.getResponseHeader("etag"),fi&&(l.etag[p]=fi)),At===204||Q.type==="HEAD"?Tn="nocontent":At===304?Tn="notmodified":(Tn=hi.state,Fr=hi.data,Gn=hi.error,Vn=!Gn)):(Gn=Tn,(At||!Tn)&&(Tn="error",At<0&&(At=0))),gt.status=At,gt.statusText=(Vt||Tn)+"",Vn?St.resolveWith(xe,[Fr,Tn,gt]):St.rejectWith(xe,[gt,Tn,Gn]),gt.statusCode(nn),nn=void 0,G&&nt.trigger(Vn?"ajaxSuccess":"ajaxError",[gt,Q,Vn?Fr:Gn]),ct.fireWith(xe,[gt,Tn]),G&&(nt.trigger("ajaxComplete",[gt,Q]),--l.active||l.event.trigger("ajaxStop")))}return gt},getJSON:function(s,o,h){return l.get(s,o,h,"json")},getScript:function(s,o){return l.get(s,void 0,o,"script")}}),l.each(["get","post"],function(s,o){l[o]=function(h,p,M,S){return b(p)&&(S=S||M,M=p,p=void 0),l.ajax(l.extend({url:h,type:o,dataType:S,data:p,success:M},l.isPlainObject(h)&&h))}}),l.ajaxPrefilter(function(s){var o;for(o in s.headers)o.toLowerCase()==="content-type"&&(s.contentType=s.headers[o]||"")}),l._evalUrl=function(s,o,h){return l.ajax({url:s,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(p){l.globalEval(p,o,h)}})},l.fn.extend({wrapAll:function(s){var o;return this[0]&&(b(s)&&(s=s.call(this[0])),o=l(s,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&o.insertBefore(this[0]),o.map(function(){for(var h=this;h.firstElementChild;)h=h.firstElementChild;return h}).append(this)),this},wrapInner:function(s){return b(s)?this.each(function(o){l(this).wrapInner(s.call(this,o))}):this.each(function(){var o=l(this),h=o.contents();h.length?h.wrapAll(s):o.append(s)})},wrap:function(s){var o=b(s);return this.each(function(h){l(this).wrapAll(o?s.call(this,h):s)})},unwrap:function(s){return this.parent(s).not("body").each(function(){l(this).replaceWith(this.childNodes)}),this}}),l.expr.pseudos.hidden=function(s){return!l.expr.pseudos.visible(s)},l.expr.pseudos.visible=function(s){return!!(s.offsetWidth||s.offsetHeight||s.getClientRects().length)},l.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var Tu={0:200,1223:204},Ur=l.ajaxSettings.xhr();E.cors=!!Ur&&"withCredentials"in Ur,E.ajax=Ur=!!Ur,l.ajaxTransport(function(s){var o,h;if(E.cors||Ur&&!s.crossDomain)return{send:function(p,M){var S,A=s.xhr();if(A.open(s.type,s.url,s.async,s.username,s.password),s.xhrFields)for(S in s.xhrFields)A[S]=s.xhrFields[S];s.mimeType&&A.overrideMimeType&&A.overrideMimeType(s.mimeType),!s.crossDomain&&!p["X-Requested-With"]&&(p["X-Requested-With"]="XMLHttpRequest");for(S in p)A.setRequestHeader(S,p[S]);o=function(B){return function(){o&&(o=h=A.onload=A.onerror=A.onabort=A.ontimeout=A.onreadystatechange=null,B==="abort"?A.abort():B==="error"?typeof A.status!="number"?M(0,"error"):M(A.status,A.statusText):M(Tu[A.status]||A.status,A.statusText,(A.responseType||"text")!=="text"||typeof A.responseText!="string"?{binary:A.response}:{text:A.responseText},A.getAllResponseHeaders()))}},A.onload=o(),h=A.onerror=A.ontimeout=o("error"),A.onabort!==void 0?A.onabort=h:A.onreadystatechange=function(){A.readyState===4&&e.setTimeout(function(){o&&h()})},o=o("abort");try{A.send(s.hasContent&&s.data||null)}catch(B){if(o)throw B}},abort:function(){o&&o()}}}),l.ajaxPrefilter(function(s){s.crossDomain&&(s.contents.script=!1)}),l.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(s){return l.globalEval(s),s}}}),l.ajaxPrefilter("script",function(s){s.cache===void 0&&(s.cache=!1),s.crossDomain&&(s.type="GET")}),l.ajaxTransport("script",function(s){if(s.crossDomain||s.scriptAttrs){var o,h;return{send:function(p,M){o=l("<script>").attr(s.scriptAttrs||{}).prop({charset:s.scriptCharset,src:s.url}).on("load error",h=function(S){o.remove(),h=null,S&&M(S.type==="error"?404:200,S.type)}),m.head.appendChild(o[0])},abort:function(){h&&h()}}}});var ll=[],ma=/(=)\?(?=&|$)|\?\?/;l.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var s=ll.pop()||l.expando+"_"+el.guid++;return this[s]=!0,s}}),l.ajaxPrefilter("json jsonp",function(s,o,h){var p,M,S,A=s.jsonp!==!1&&(ma.test(s.url)?"url":typeof s.data=="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&ma.test(s.data)&&"data");if(A||s.dataTypes[0]==="jsonp")return p=s.jsonpCallback=b(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback,A?s[A]=s[A].replace(ma,"$1"+p):s.jsonp!==!1&&(s.url+=(ua.test(s.url)?"&":"?")+s.jsonp+"="+p),s.converters["script json"]=function(){return S||l.error(p+" was not called"),S[0]},s.dataTypes[0]="json",M=e[p],e[p]=function(){S=arguments},h.always(function(){M===void 0?l(e).removeProp(p):e[p]=M,s[p]&&(s.jsonpCallback=o.jsonpCallback,ll.push(p)),S&&b(M)&&M(S[0]),S=M=void 0}),"script"}),E.createHTMLDocument=function(){var s=m.implementation.createHTMLDocument("").body;return s.innerHTML="<form></form><form></form>",s.childNodes.length===2}(),l.parseHTML=function(s,o,h){if(typeof s!="string")return[];typeof o=="boolean"&&(h=o,o=!1);var p,M,S;return o||(E.createHTMLDocument?(o=m.implementation.createHTMLDocument(""),p=o.createElement("base"),p.href=m.location.href,o.head.appendChild(p)):o=m),M=ft.exec(s),S=!h&&[],M?[o.createElement(M[1])]:(M=kt([s],o,S),S&&S.length&&l(S).remove(),l.merge([],M.childNodes))},l.fn.load=function(s,o,h){var p,M,S,A=this,B=s.indexOf(" ");return B>-1&&(p=wi(s.slice(B)),s=s.slice(0,B)),b(o)?(h=o,o=void 0):o&&typeof o=="object"&&(M="POST"),A.length>0&&l.ajax({url:s,type:M||"GET",dataType:"html",data:o}).done(function(F){S=arguments,A.html(p?l("<div>").append(l.parseHTML(F)).find(p):F)}).always(h&&function(F,G){A.each(function(){h.apply(this,S||[F.responseText,G,F])})}),this},l.expr.pseudos.animated=function(s){return l.grep(l.timers,function(o){return s===o.elem}).length},l.offset={setOffset:function(s,o,h){var p,M,S,A,B,F,G,ae=l.css(s,"position"),he=l(s),Q={};ae==="static"&&(s.style.position="relative"),B=he.offset(),S=l.css(s,"top"),F=l.css(s,"left"),G=(ae==="absolute"||ae==="fixed")&&(S+F).indexOf("auto")>-1,G?(p=he.position(),A=p.top,M=p.left):(A=parseFloat(S)||0,M=parseFloat(F)||0),b(o)&&(o=o.call(s,h,l.extend({},B))),o.top!=null&&(Q.top=o.top-B.top+A),o.left!=null&&(Q.left=o.left-B.left+M),"using"in o?o.using.call(s,Q):he.css(Q)}},l.fn.extend({offset:function(s){if(arguments.length)return s===void 0?this:this.each(function(M){l.offset.setOffset(this,s,M)});var o,h,p=this[0];if(p)return p.getClientRects().length?(o=p.getBoundingClientRect(),h=p.ownerDocument.defaultView,{top:o.top+h.pageYOffset,left:o.left+h.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var s,o,h,p=this[0],M={top:0,left:0};if(l.css(p,"position")==="fixed")o=p.getBoundingClientRect();else{for(o=this.offset(),h=p.ownerDocument,s=p.offsetParent||h.documentElement;s&&(s===h.body||s===h.documentElement)&&l.css(s,"position")==="static";)s=s.parentNode;s&&s!==p&&s.nodeType===1&&(M=l(s).offset(),M.top+=l.css(s,"borderTopWidth",!0),M.left+=l.css(s,"borderLeftWidth",!0))}return{top:o.top-M.top-l.css(p,"marginTop",!0),left:o.left-M.left-l.css(p,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var s=this.offsetParent;s&&l.css(s,"position")==="static";)s=s.offsetParent;return s||we})}}),l.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(s,o){var h=o==="pageYOffset";l.fn[s]=function(p){return Xe(this,function(M,S,A){var B;if(x(M)?B=M:M.nodeType===9&&(B=M.defaultView),A===void 0)return B?B[o]:M[S];B?B.scrollTo(h?B.pageXOffset:A,h?A:B.pageYOffset):M[S]=A},s,p,arguments.length)}}),l.each(["top","left"],function(s,o){l.cssHooks[o]=ze(E.pixelPosition,function(h,p){if(p)return p=Fe(h,o),ne.test(p)?l(h).position()[o]+"px":p})}),l.each({Height:"height",Width:"width"},function(s,o){l.each({padding:"inner"+s,content:o,"":"outer"+s},function(h,p){l.fn[p]=function(M,S){var A=arguments.length&&(h||typeof M!="boolean"),B=h||(M===!0||S===!0?"margin":"border");return Xe(this,function(F,G,ae){var he;return x(F)?p.indexOf("outer")===0?F["inner"+s]:F.document.documentElement["client"+s]:F.nodeType===9?(he=F.documentElement,Math.max(F.body["scroll"+s],he["scroll"+s],F.body["offset"+s],he["offset"+s],he["client"+s])):ae===void 0?l.css(F,G,B):l.style(F,G,ae,B)},o,A?M:void 0,A)}})}),l.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(s,o){l.fn[o]=function(h){return this.on(o,h)}}),l.fn.extend({bind:function(s,o,h){return this.on(s,null,o,h)},unbind:function(s,o){return this.off(s,null,o)},delegate:function(s,o,h,p){return this.on(o,s,h,p)},undelegate:function(s,o,h){return arguments.length===1?this.off(s,"**"):this.off(o,s||"**",h)},hover:function(s,o){return this.on("mouseenter",s).on("mouseleave",o||s)}}),l.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(s,o){l.fn[o]=function(h,p){return arguments.length>0?this.on(o,null,h,p):this.trigger(o)}});var Au=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;l.proxy=function(s,o){var h,p,M;if(typeof o=="string"&&(h=s[o],o=s,s=h),!!b(s))return p=a.call(arguments,2),M=function(){return s.apply(o||this,p.concat(a.call(arguments)))},M.guid=s.guid=s.guid||l.guid++,M},l.holdReady=function(s){s?l.readyWait++:l.ready(!0)},l.isArray=Array.isArray,l.parseJSON=JSON.parse,l.nodeName=I,l.isFunction=b,l.isWindow=x,l.camelCase=ee,l.type=N,l.now=Date.now,l.isNumeric=function(s){var o=l.type(s);return(o==="number"||o==="string")&&!isNaN(s-parseFloat(s))},l.trim=function(s){return s==null?"":(s+"").replace(Au,"$1")};var wu=e.jQuery,Cu=e.$;return l.noConflict=function(s){return e.$===l&&(e.$=Cu),s&&e.jQuery===l&&(e.jQuery=wu),l},typeof t>"u"&&(e.jQuery=e.$=l),l})})(Tc);var Bu=Tc.exports;const zu=Ou(Bu);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bo="167",Ki={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ku=0,fl=1,Hu=2,Ac=1,Vu=2,si=3,bi=0,xn=1,ai=2,Si=0,vr=1,dl=2,pl=3,ml=4,Gu=5,Bi=100,Wu=101,Xu=102,qu=103,ju=104,Yu=200,$u=201,Ku=202,Zu=203,to=204,no=205,Ju=206,Qu=207,eh=208,th=209,nh=210,ih=211,rh=212,sh=213,ah=214,oh=0,lh=1,ch=2,qs=3,uh=4,hh=5,fh=6,dh=7,zo=0,ph=1,mh=2,Ei=0,gh=1,_h=2,vh=3,xh=4,yh=5,Mh=6,Sh=7,wc=300,Mr=301,Sr=302,io=303,ro=304,ta=306,so=1e3,oi=1001,ao=1002,en=1003,Eh=1004,fs=1005,Bn=1006,Ea=1007,ki=1008,ci=1009,Cc=1010,Rc=1011,Jr=1012,ko=1013,Hi=1014,cn=1015,ts=1016,Ho=1017,Vo=1018,Er=1020,Pc=35902,Lc=1021,Dc=1022,pn=1023,Ic=1024,Uc=1025,xr=1026,br=1027,jr=1028,Go=1029,Nc=1030,Wo=1031,Xo=1033,ks=33776,Hs=33777,Vs=33778,Gs=33779,oo=35840,lo=35841,co=35842,uo=35843,ho=36196,fo=37492,po=37496,mo=37808,go=37809,_o=37810,vo=37811,xo=37812,yo=37813,Mo=37814,So=37815,Eo=37816,bo=37817,To=37818,Ao=37819,wo=37820,Co=37821,Ws=36492,Ro=36494,Po=36495,Fc=36283,Lo=36284,Do=36285,Io=36286,bh=3200,Th=3201,Oc=0,Ah=1,Mi="",Xn="srgb",Ai="srgb-linear",qo="display-p3",na="display-p3-linear",js="linear",Ot="srgb",Ys="rec709",$s="p3",Ji=7680,gl=519,wh=512,Ch=513,Rh=514,Bc=515,Ph=516,Lh=517,Dh=518,Ih=519,_l=35044,Uo="300 es",li=2e3,Ks=2001;class Gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,c=r.length;a<c;a++)r[a].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vl=1234567;const Yr=Math.PI/180,Qr=180/Math.PI;function wr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function ln(i,e,t){return Math.max(e,Math.min(t,i))}function jo(i,e){return(i%e+e)%e}function Uh(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Nh(i,e,t){return i!==e?(t-i)/(e-i):0}function $r(i,e,t){return(1-t)*i+t*e}function Fh(i,e,t,n){return $r(i,e,1-Math.exp(-t*n))}function Oh(i,e=1){return e-Math.abs(jo(i,e*2)-e)}function Bh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function zh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function kh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Hh(i,e){return i+Math.random()*(e-i)}function Vh(i){return i*(.5-Math.random())}function Gh(i){i!==void 0&&(vl=i);let e=vl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wh(i){return i*Yr}function Xh(i){return i*Qr}function qh(i){return(i&i-1)===0&&i!==0}function jh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Yh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $h(i,e,t,n,r){const a=Math.cos,c=Math.sin,u=a(t/2),f=c(t/2),d=a((e+n)/2),g=c((e+n)/2),v=a((e-n)/2),_=c((e-n)/2),y=a((n-e)/2),E=c((n-e)/2);switch(r){case"XYX":i.set(u*g,f*v,f*_,u*d);break;case"YZY":i.set(f*_,u*g,f*v,u*d);break;case"ZXZ":i.set(f*v,f*_,u*g,u*d);break;case"XZX":i.set(u*g,f*E,f*y,u*d);break;case"YXY":i.set(f*y,u*g,f*E,u*d);break;case"ZYZ":i.set(f*E,f*y,u*g,u*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function mr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function fn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Kh={DEG2RAD:Yr,RAD2DEG:Qr,generateUUID:wr,clamp:ln,euclideanModulo:jo,mapLinear:Uh,inverseLerp:Nh,lerp:$r,damp:Fh,pingpong:Oh,smoothstep:Bh,smootherstep:zh,randInt:kh,randFloat:Hh,randFloatSpread:Vh,seededRandom:Gh,degToRad:Wh,radToDeg:Xh,isPowerOfTwo:qh,ceilPowerOfTwo:jh,floorPowerOfTwo:Yh,setQuaternionFromProperEuler:$h,normalize:fn,denormalize:mr};class lt{constructor(e=0,t=0){lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ln(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*n-c*r+e.x,this.y=a*r+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,t,n,r,a,c,u,f,d){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,c,u,f,d)}set(e,t,n,r,a,c,u,f,d){const g=this.elements;return g[0]=e,g[1]=r,g[2]=u,g[3]=t,g[4]=a,g[5]=f,g[6]=n,g[7]=c,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,c=n[0],u=n[3],f=n[6],d=n[1],g=n[4],v=n[7],_=n[2],y=n[5],E=n[8],b=r[0],x=r[3],m=r[6],L=r[1],R=r[4],N=r[7],q=r[2],z=r[5],l=r[8];return a[0]=c*b+u*L+f*q,a[3]=c*x+u*R+f*z,a[6]=c*m+u*N+f*l,a[1]=d*b+g*L+v*q,a[4]=d*x+g*R+v*z,a[7]=d*m+g*N+v*l,a[2]=_*b+y*L+E*q,a[5]=_*x+y*R+E*z,a[8]=_*m+y*N+E*l,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],c=e[4],u=e[5],f=e[6],d=e[7],g=e[8];return t*c*g-t*u*d-n*a*g+n*u*f+r*a*d-r*c*f}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],c=e[4],u=e[5],f=e[6],d=e[7],g=e[8],v=g*c-u*d,_=u*f-g*a,y=d*a-c*f,E=t*v+n*_+r*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=v*b,e[1]=(r*d-g*n)*b,e[2]=(u*n-r*c)*b,e[3]=_*b,e[4]=(g*t-r*f)*b,e[5]=(r*a-u*t)*b,e[6]=y*b,e[7]=(n*f-d*t)*b,e[8]=(c*t-n*a)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,c,u){const f=Math.cos(a),d=Math.sin(a);return this.set(n*f,n*d,-n*(f*c+d*u)+c+e,-r*d,r*f,-r*(-d*c+f*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(ba.makeScale(e,t)),this}rotate(e){return this.premultiply(ba.makeRotation(-e)),this}translate(e,t){return this.premultiply(ba.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ba=new ht;function zc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Zs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zh(){const i=Zs("canvas");return i.style.display="block",i}const xl={};function Kr(i){i in xl||(xl[i]=!0,console.warn(i))}function Jh(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const yl=new ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ml=new ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Br={[Ai]:{transfer:js,primaries:Ys,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Xn]:{transfer:Ot,primaries:Ys,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[na]:{transfer:js,primaries:$s,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Ml),fromReference:i=>i.applyMatrix3(yl)},[qo]:{transfer:Ot,primaries:$s,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ml),fromReference:i=>i.applyMatrix3(yl).convertLinearToSRGB()}},Qh=new Set([Ai,na]),Ct={enabled:!0,_workingColorSpace:Ai,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Qh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Br[e].toReference,r=Br[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Br[i].primaries},getTransfer:function(i){return i===Mi?js:Br[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Br[e].luminanceCoefficients)}};function yr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ta(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Qi;class ef{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qi===void 0&&(Qi=Zs("canvas")),Qi.width=e.width,Qi.height=e.height;const n=Qi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let c=0;c<a.length;c++)a[c]=yr(a[c]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yr(t[n]/255)*255):t[n]=yr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tf=0;class kc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=wr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let c=0,u=r.length;c<u;c++)r[c].isDataTexture?a.push(Aa(r[c].image)):a.push(Aa(r[c]))}else a=Aa(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Aa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ef.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nf=0;class mn extends Gi{constructor(e=mn.DEFAULT_IMAGE,t=mn.DEFAULT_MAPPING,n=oi,r=oi,a=Bn,c=ki,u=pn,f=ci,d=mn.DEFAULT_ANISOTROPY,g=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=wr(),this.name="",this.source=new kc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=c,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=f,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case so:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case ao:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case so:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case ao:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=wc;mn.DEFAULT_ANISOTROPY=1;class Qt{constructor(e=0,t=0,n=0,r=1){Qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*r+c[12]*a,this.y=c[1]*t+c[5]*n+c[9]*r+c[13]*a,this.z=c[2]*t+c[6]*n+c[10]*r+c[14]*a,this.w=c[3]*t+c[7]*n+c[11]*r+c[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const f=e.elements,d=f[0],g=f[4],v=f[8],_=f[1],y=f[5],E=f[9],b=f[2],x=f[6],m=f[10];if(Math.abs(g-_)<.01&&Math.abs(v-b)<.01&&Math.abs(E-x)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+b)<.1&&Math.abs(E+x)<.1&&Math.abs(d+y+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(d+1)/2,N=(y+1)/2,q=(m+1)/2,z=(g+_)/4,l=(v+b)/4,$=(E+x)/4;return R>N&&R>q?R<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(R),r=z/n,a=l/n):N>q?N<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(N),n=z/r,a=$/r):q<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(q),n=l/a,r=$/a),this.set(n,r,a,t),this}let L=Math.sqrt((x-E)*(x-E)+(v-b)*(v-b)+(_-g)*(_-g));return Math.abs(L)<.001&&(L=1),this.x=(x-E)/L,this.y=(v-b)/L,this.z=(_-g)/L,this.w=Math.acos((d+y+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rf extends Gi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new mn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const c=n.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new kc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends rf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Hc extends mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sf extends mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,c,u){let f=n[r+0],d=n[r+1],g=n[r+2],v=n[r+3];const _=a[c+0],y=a[c+1],E=a[c+2],b=a[c+3];if(u===0){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(u===1){e[t+0]=_,e[t+1]=y,e[t+2]=E,e[t+3]=b;return}if(v!==b||f!==_||d!==y||g!==E){let x=1-u;const m=f*_+d*y+g*E+v*b,L=m>=0?1:-1,R=1-m*m;if(R>Number.EPSILON){const q=Math.sqrt(R),z=Math.atan2(q,m*L);x=Math.sin(x*z)/q,u=Math.sin(u*z)/q}const N=u*L;if(f=f*x+_*N,d=d*x+y*N,g=g*x+E*N,v=v*x+b*N,x===1-u){const q=1/Math.sqrt(f*f+d*d+g*g+v*v);f*=q,d*=q,g*=q,v*=q}}e[t]=f,e[t+1]=d,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,n,r,a,c){const u=n[r],f=n[r+1],d=n[r+2],g=n[r+3],v=a[c],_=a[c+1],y=a[c+2],E=a[c+3];return e[t]=u*E+g*v+f*y-d*_,e[t+1]=f*E+g*_+d*v-u*y,e[t+2]=d*E+g*y+u*_-f*v,e[t+3]=g*E-u*v-f*_-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,c=e._order,u=Math.cos,f=Math.sin,d=u(n/2),g=u(r/2),v=u(a/2),_=f(n/2),y=f(r/2),E=f(a/2);switch(c){case"XYZ":this._x=_*g*v+d*y*E,this._y=d*y*v-_*g*E,this._z=d*g*E+_*y*v,this._w=d*g*v-_*y*E;break;case"YXZ":this._x=_*g*v+d*y*E,this._y=d*y*v-_*g*E,this._z=d*g*E-_*y*v,this._w=d*g*v+_*y*E;break;case"ZXY":this._x=_*g*v-d*y*E,this._y=d*y*v+_*g*E,this._z=d*g*E+_*y*v,this._w=d*g*v-_*y*E;break;case"ZYX":this._x=_*g*v-d*y*E,this._y=d*y*v+_*g*E,this._z=d*g*E-_*y*v,this._w=d*g*v+_*y*E;break;case"YZX":this._x=_*g*v+d*y*E,this._y=d*y*v+_*g*E,this._z=d*g*E-_*y*v,this._w=d*g*v-_*y*E;break;case"XZY":this._x=_*g*v-d*y*E,this._y=d*y*v-_*g*E,this._z=d*g*E+_*y*v,this._w=d*g*v+_*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],c=t[1],u=t[5],f=t[9],d=t[2],g=t[6],v=t[10],_=n+u+v;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(g-f)*y,this._y=(a-d)*y,this._z=(c-r)*y}else if(n>u&&n>v){const y=2*Math.sqrt(1+n-u-v);this._w=(g-f)/y,this._x=.25*y,this._y=(r+c)/y,this._z=(a+d)/y}else if(u>v){const y=2*Math.sqrt(1+u-n-v);this._w=(a-d)/y,this._x=(r+c)/y,this._y=.25*y,this._z=(f+g)/y}else{const y=2*Math.sqrt(1+v-n-u);this._w=(c-r)/y,this._x=(a+d)/y,this._y=(f+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ln(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,c=e._w,u=t._x,f=t._y,d=t._z,g=t._w;return this._x=n*g+c*u+r*d-a*f,this._y=r*g+c*f+a*u-n*d,this._z=a*g+c*d+n*f-r*u,this._w=c*g-n*u-r*f-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,c=this._w;let u=c*e._w+n*e._x+r*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=n,this._y=r,this._z=a,this;const f=1-u*u;if(f<=Number.EPSILON){const y=1-t;return this._w=y*c+t*this._w,this._x=y*n+t*this._x,this._y=y*r+t*this._y,this._z=y*a+t*this._z,this.normalize(),this}const d=Math.sqrt(f),g=Math.atan2(d,u),v=Math.sin((1-t)*g)/d,_=Math.sin(t*g)/d;return this._w=c*v+this._w*_,this._x=n*v+this._x*_,this._y=r*v+this._y*_,this._z=a*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,n=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,c=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*c,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*c,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,c=e.y,u=e.z,f=e.w,d=2*(c*r-u*n),g=2*(u*t-a*r),v=2*(a*n-c*t);return this.x=t+f*d+c*v-u*g,this.y=n+f*g+u*d-a*v,this.z=r+f*v+a*g-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,c=t.x,u=t.y,f=t.z;return this.x=r*f-a*u,this.y=a*c-n*f,this.z=n*u-r*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wa.copy(this).projectOnVector(e),this.sub(wa)}reflect(e){return this.sub(wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ln(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wa=new j,Sl=new Vi;class Cr{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Nn):Nn.fromBufferAttribute(a,c),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ds.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ds.copy(n.boundingBox)),ds.applyMatrix4(e.matrixWorld),this.union(ds)}const r=e.children;for(let a=0,c=r.length;a<c;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zr),ps.subVectors(this.max,zr),er.subVectors(e.a,zr),tr.subVectors(e.b,zr),nr.subVectors(e.c,zr),pi.subVectors(tr,er),mi.subVectors(nr,tr),Li.subVectors(er,nr);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Li.z,Li.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Li.z,0,-Li.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Li.y,Li.x,0];return!Ca(t,er,tr,nr,ps)||(t=[1,0,0,0,1,0,0,0,1],!Ca(t,er,tr,nr,ps))?!1:(ms.crossVectors(pi,mi),t=[ms.x,ms.y,ms.z],Ca(t,er,tr,nr,ps))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qn=[new j,new j,new j,new j,new j,new j,new j,new j],Nn=new j,ds=new Cr,er=new j,tr=new j,nr=new j,pi=new j,mi=new j,Li=new j,zr=new j,ps=new j,ms=new j,Di=new j;function Ca(i,e,t,n,r){for(let a=0,c=i.length-3;a<=c;a+=3){Di.fromArray(i,a);const u=r.x*Math.abs(Di.x)+r.y*Math.abs(Di.y)+r.z*Math.abs(Di.z),f=e.dot(Di),d=t.dot(Di),g=n.dot(Di);if(Math.max(-Math.max(f,d,g),Math.min(f,d,g))>u)return!1}return!0}const af=new Cr,kr=new j,Ra=new j;class ns{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):af.setFromPoints(e).getCenter(n);let r=0;for(let a=0,c=e.length;a<c;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kr.subVectors(e,this.center);const t=kr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(kr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ra.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kr.copy(e.center).add(Ra)),this.expandByPoint(kr.copy(e.center).sub(Ra))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new j,Pa=new j,gs=new j,gi=new j,La=new j,_s=new j,Da=new j;class ia{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Pa.copy(e).add(t).multiplyScalar(.5),gs.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(Pa);const a=e.distanceTo(t)*.5,c=-this.direction.dot(gs),u=gi.dot(this.direction),f=-gi.dot(gs),d=gi.lengthSq(),g=Math.abs(1-c*c);let v,_,y,E;if(g>0)if(v=c*f-u,_=c*u-f,E=a*g,v>=0)if(_>=-E)if(_<=E){const b=1/g;v*=b,_*=b,y=v*(v+c*_+2*u)+_*(c*v+_+2*f)+d}else _=a,v=Math.max(0,-(c*_+u)),y=-v*v+_*(_+2*f)+d;else _=-a,v=Math.max(0,-(c*_+u)),y=-v*v+_*(_+2*f)+d;else _<=-E?(v=Math.max(0,-(-c*a+u)),_=v>0?-a:Math.min(Math.max(-a,-f),a),y=-v*v+_*(_+2*f)+d):_<=E?(v=0,_=Math.min(Math.max(-a,-f),a),y=_*(_+2*f)+d):(v=Math.max(0,-(c*a+u)),_=v>0?a:Math.min(Math.max(-a,-f),a),y=-v*v+_*(_+2*f)+d);else _=c>0?-a:a,v=Math.max(0,-(c*_+u)),y=-v*v+_*(_+2*f)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,v),r&&r.copy(Pa).addScaledVector(gs,_),y}intersectSphere(e,t){ei.subVectors(e.center,this.origin);const n=ei.dot(this.direction),r=ei.dot(ei)-n*n,a=e.radius*e.radius;if(r>a)return null;const c=Math.sqrt(a-r),u=n-c,f=n+c;return f<0?null:u<0?this.at(f,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,c,u,f;const d=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return d>=0?(n=(e.min.x-_.x)*d,r=(e.max.x-_.x)*d):(n=(e.max.x-_.x)*d,r=(e.min.x-_.x)*d),g>=0?(a=(e.min.y-_.y)*g,c=(e.max.y-_.y)*g):(a=(e.max.y-_.y)*g,c=(e.min.y-_.y)*g),n>c||a>r||((a>n||isNaN(n))&&(n=a),(c<r||isNaN(r))&&(r=c),v>=0?(u=(e.min.z-_.z)*v,f=(e.max.z-_.z)*v):(u=(e.max.z-_.z)*v,f=(e.min.z-_.z)*v),n>f||u>r)||((u>n||n!==n)&&(n=u),(f<r||r!==r)&&(r=f),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,n,r,a){La.subVectors(t,e),_s.subVectors(n,e),Da.crossVectors(La,_s);let c=this.direction.dot(Da),u;if(c>0){if(r)return null;u=1}else if(c<0)u=-1,c=-c;else return null;gi.subVectors(this.origin,e);const f=u*this.direction.dot(_s.crossVectors(gi,_s));if(f<0)return null;const d=u*this.direction.dot(La.cross(gi));if(d<0||f+d>c)return null;const g=-u*gi.dot(Da);return g<0?null:this.at(g/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(e,t,n,r,a,c,u,f,d,g,v,_,y,E,b,x){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,c,u,f,d,g,v,_,y,E,b,x)}set(e,t,n,r,a,c,u,f,d,g,v,_,y,E,b,x){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=a,m[5]=c,m[9]=u,m[13]=f,m[2]=d,m[6]=g,m[10]=v,m[14]=_,m[3]=y,m[7]=E,m[11]=b,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ir.setFromMatrixColumn(e,0).length(),a=1/ir.setFromMatrixColumn(e,1).length(),c=1/ir.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,c=Math.cos(n),u=Math.sin(n),f=Math.cos(r),d=Math.sin(r),g=Math.cos(a),v=Math.sin(a);if(e.order==="XYZ"){const _=c*g,y=c*v,E=u*g,b=u*v;t[0]=f*g,t[4]=-f*v,t[8]=d,t[1]=y+E*d,t[5]=_-b*d,t[9]=-u*f,t[2]=b-_*d,t[6]=E+y*d,t[10]=c*f}else if(e.order==="YXZ"){const _=f*g,y=f*v,E=d*g,b=d*v;t[0]=_+b*u,t[4]=E*u-y,t[8]=c*d,t[1]=c*v,t[5]=c*g,t[9]=-u,t[2]=y*u-E,t[6]=b+_*u,t[10]=c*f}else if(e.order==="ZXY"){const _=f*g,y=f*v,E=d*g,b=d*v;t[0]=_-b*u,t[4]=-c*v,t[8]=E+y*u,t[1]=y+E*u,t[5]=c*g,t[9]=b-_*u,t[2]=-c*d,t[6]=u,t[10]=c*f}else if(e.order==="ZYX"){const _=c*g,y=c*v,E=u*g,b=u*v;t[0]=f*g,t[4]=E*d-y,t[8]=_*d+b,t[1]=f*v,t[5]=b*d+_,t[9]=y*d-E,t[2]=-d,t[6]=u*f,t[10]=c*f}else if(e.order==="YZX"){const _=c*f,y=c*d,E=u*f,b=u*d;t[0]=f*g,t[4]=b-_*v,t[8]=E*v+y,t[1]=v,t[5]=c*g,t[9]=-u*g,t[2]=-d*g,t[6]=y*v+E,t[10]=_-b*v}else if(e.order==="XZY"){const _=c*f,y=c*d,E=u*f,b=u*d;t[0]=f*g,t[4]=-v,t[8]=d*g,t[1]=_*v+b,t[5]=c*g,t[9]=y*v-E,t[2]=E*v-y,t[6]=u*g,t[10]=b*v+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(of,e,lf)}lookAt(e,t,n){const r=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),_i.crossVectors(n,Sn),_i.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),_i.crossVectors(n,Sn)),_i.normalize(),vs.crossVectors(Sn,_i),r[0]=_i.x,r[4]=vs.x,r[8]=Sn.x,r[1]=_i.y,r[5]=vs.y,r[9]=Sn.y,r[2]=_i.z,r[6]=vs.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,c=n[0],u=n[4],f=n[8],d=n[12],g=n[1],v=n[5],_=n[9],y=n[13],E=n[2],b=n[6],x=n[10],m=n[14],L=n[3],R=n[7],N=n[11],q=n[15],z=r[0],l=r[4],$=r[8],I=r[12],P=r[1],V=r[5],ce=r[9],Y=r[13],pe=r[2],me=r[6],le=r[10],de=r[14],oe=r[3],be=r[7],De=r[11],Be=r[15];return a[0]=c*z+u*P+f*pe+d*oe,a[4]=c*l+u*V+f*me+d*be,a[8]=c*$+u*ce+f*le+d*De,a[12]=c*I+u*Y+f*de+d*Be,a[1]=g*z+v*P+_*pe+y*oe,a[5]=g*l+v*V+_*me+y*be,a[9]=g*$+v*ce+_*le+y*De,a[13]=g*I+v*Y+_*de+y*Be,a[2]=E*z+b*P+x*pe+m*oe,a[6]=E*l+b*V+x*me+m*be,a[10]=E*$+b*ce+x*le+m*De,a[14]=E*I+b*Y+x*de+m*Be,a[3]=L*z+R*P+N*pe+q*oe,a[7]=L*l+R*V+N*me+q*be,a[11]=L*$+R*ce+N*le+q*De,a[15]=L*I+R*Y+N*de+q*Be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],c=e[1],u=e[5],f=e[9],d=e[13],g=e[2],v=e[6],_=e[10],y=e[14],E=e[3],b=e[7],x=e[11],m=e[15];return E*(+a*f*v-r*d*v-a*u*_+n*d*_+r*u*y-n*f*y)+b*(+t*f*y-t*d*_+a*c*_-r*c*y+r*d*g-a*f*g)+x*(+t*d*v-t*u*y-a*c*v+n*c*y+a*u*g-n*d*g)+m*(-r*u*g-t*f*v+t*u*_+r*c*v-n*c*_+n*f*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],c=e[4],u=e[5],f=e[6],d=e[7],g=e[8],v=e[9],_=e[10],y=e[11],E=e[12],b=e[13],x=e[14],m=e[15],L=v*x*d-b*_*d+b*f*y-u*x*y-v*f*m+u*_*m,R=E*_*d-g*x*d-E*f*y+c*x*y+g*f*m-c*_*m,N=g*b*d-E*v*d+E*u*y-c*b*y-g*u*m+c*v*m,q=E*v*f-g*b*f-E*u*_+c*b*_+g*u*x-c*v*x,z=t*L+n*R+r*N+a*q;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const l=1/z;return e[0]=L*l,e[1]=(b*_*a-v*x*a-b*r*y+n*x*y+v*r*m-n*_*m)*l,e[2]=(u*x*a-b*f*a+b*r*d-n*x*d-u*r*m+n*f*m)*l,e[3]=(v*f*a-u*_*a-v*r*d+n*_*d+u*r*y-n*f*y)*l,e[4]=R*l,e[5]=(g*x*a-E*_*a+E*r*y-t*x*y-g*r*m+t*_*m)*l,e[6]=(E*f*a-c*x*a-E*r*d+t*x*d+c*r*m-t*f*m)*l,e[7]=(c*_*a-g*f*a+g*r*d-t*_*d-c*r*y+t*f*y)*l,e[8]=N*l,e[9]=(E*v*a-g*b*a-E*n*y+t*b*y+g*n*m-t*v*m)*l,e[10]=(c*b*a-E*u*a+E*n*d-t*b*d-c*n*m+t*u*m)*l,e[11]=(g*u*a-c*v*a-g*n*d+t*v*d+c*n*y-t*u*y)*l,e[12]=q*l,e[13]=(g*b*r-E*v*r+E*n*_-t*b*_-g*n*x+t*v*x)*l,e[14]=(E*u*r-c*b*r-E*n*f+t*b*f+c*n*x-t*u*x)*l,e[15]=(c*v*r-g*u*r+g*n*f-t*v*f-c*n*_+t*u*_)*l,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,c=e.x,u=e.y,f=e.z,d=a*c,g=a*u;return this.set(d*c+n,d*u-r*f,d*f+r*u,0,d*u+r*f,g*u+n,g*f-r*c,0,d*f-r*u,g*f+r*c,a*f*f+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,c){return this.set(1,n,a,0,e,1,c,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,c=t._y,u=t._z,f=t._w,d=a+a,g=c+c,v=u+u,_=a*d,y=a*g,E=a*v,b=c*g,x=c*v,m=u*v,L=f*d,R=f*g,N=f*v,q=n.x,z=n.y,l=n.z;return r[0]=(1-(b+m))*q,r[1]=(y+N)*q,r[2]=(E-R)*q,r[3]=0,r[4]=(y-N)*z,r[5]=(1-(_+m))*z,r[6]=(x+L)*z,r[7]=0,r[8]=(E+R)*l,r[9]=(x-L)*l,r[10]=(1-(_+b))*l,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=ir.set(r[0],r[1],r[2]).length();const c=ir.set(r[4],r[5],r[6]).length(),u=ir.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Fn.copy(this);const d=1/a,g=1/c,v=1/u;return Fn.elements[0]*=d,Fn.elements[1]*=d,Fn.elements[2]*=d,Fn.elements[4]*=g,Fn.elements[5]*=g,Fn.elements[6]*=g,Fn.elements[8]*=v,Fn.elements[9]*=v,Fn.elements[10]*=v,t.setFromRotationMatrix(Fn),n.x=a,n.y=c,n.z=u,this}makePerspective(e,t,n,r,a,c,u=li){const f=this.elements,d=2*a/(t-e),g=2*a/(n-r),v=(t+e)/(t-e),_=(n+r)/(n-r);let y,E;if(u===li)y=-(c+a)/(c-a),E=-2*c*a/(c-a);else if(u===Ks)y=-c/(c-a),E=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=d,f[4]=0,f[8]=v,f[12]=0,f[1]=0,f[5]=g,f[9]=_,f[13]=0,f[2]=0,f[6]=0,f[10]=y,f[14]=E,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,n,r,a,c,u=li){const f=this.elements,d=1/(t-e),g=1/(n-r),v=1/(c-a),_=(t+e)*d,y=(n+r)*g;let E,b;if(u===li)E=(c+a)*v,b=-2*v;else if(u===Ks)E=a*v,b=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=2*d,f[4]=0,f[8]=0,f[12]=-_,f[1]=0,f[5]=2*g,f[9]=0,f[13]=-y,f[2]=0,f[6]=0,f[10]=b,f[14]=-E,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ir=new j,Fn=new Xt,of=new j(0,0,0),lf=new j(1,1,1),_i=new j,vs=new j,Sn=new j,El=new Xt,bl=new Vi;class $n{constructor(e=0,t=0,n=0,r=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],c=r[4],u=r[8],f=r[1],d=r[5],g=r[9],v=r[2],_=r[6],y=r[10];switch(t){case"XYZ":this._y=Math.asin(ln(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-v,a),this._z=0);break;case"ZXY":this._x=Math.asin(ln(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-ln(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(ln(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-v,a)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-ln(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return El.makeRotationFromQuaternion(e),this.setFromRotationMatrix(El,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bl.setFromEuler(this),this.setFromQuaternion(bl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class Vc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cf=0;const Tl=new j,rr=new Vi,ti=new Xt,xs=new j,Hr=new j,uf=new j,hf=new Vi,Al=new j(1,0,0),wl=new j(0,1,0),Cl=new j(0,0,1),Rl={type:"added"},ff={type:"removed"},sr={type:"childadded",child:null},Ia={type:"childremoved",child:null};class gn extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new j,t=new $n,n=new Vi,r=new j(1,1,1);function a(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Xt},normalMatrix:{value:new ht}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.multiply(rr),this}rotateOnWorldAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.premultiply(rr),this}rotateX(e){return this.rotateOnAxis(Al,e)}rotateY(e){return this.rotateOnAxis(wl,e)}rotateZ(e){return this.rotateOnAxis(Cl,e)}translateOnAxis(e,t){return Tl.copy(e).applyQuaternion(this.quaternion),this.position.add(Tl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Al,e)}translateY(e){return this.translateOnAxis(wl,e)}translateZ(e){return this.translateOnAxis(Cl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xs.copy(e):xs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(Hr,xs,this.up):ti.lookAt(xs,Hr,this.up),this.quaternion.setFromRotationMatrix(ti),r&&(ti.extractRotation(r.matrixWorld),rr.setFromRotationMatrix(ti),this.quaternion.premultiply(rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rl),sr.child=e,this.dispatchEvent(sr),sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ff),Ia.child=e,this.dispatchEvent(Ia),Ia.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rl),sr.child=e,this.dispatchEvent(sr),sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,c=r.length;a<c;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,e,uf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,hf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,c=r.length;a<c;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let d=0,g=f.length;d<g;d++){const v=f[d];a(e.shapes,v)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,d=this.material.length;f<d;f++)u.push(a(e.materials,this.material[f]));r.material=u}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let u=0;u<this.children.length;u++)r.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];r.animations.push(a(e.animations,f))}}if(t){const u=c(e.geometries),f=c(e.materials),d=c(e.textures),g=c(e.images),v=c(e.shapes),_=c(e.skeletons),y=c(e.animations),E=c(e.nodes);u.length>0&&(n.geometries=u),f.length>0&&(n.materials=f),d.length>0&&(n.textures=d),g.length>0&&(n.images=g),v.length>0&&(n.shapes=v),_.length>0&&(n.skeletons=_),y.length>0&&(n.animations=y),E.length>0&&(n.nodes=E)}return n.object=r,n;function c(u){const f=[];for(const d in u){const g=u[d];delete g.metadata,f.push(g)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}gn.DEFAULT_UP=new j(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new j,ni=new j,Ua=new j,ii=new j,ar=new j,or=new j,Pl=new j,Na=new j,Fa=new j,Oa=new j;class jn{constructor(e=new j,t=new j,n=new j){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),On.subVectors(e,t),r.cross(On);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){On.subVectors(r,t),ni.subVectors(n,t),Ua.subVectors(e,t);const c=On.dot(On),u=On.dot(ni),f=On.dot(Ua),d=ni.dot(ni),g=ni.dot(Ua),v=c*d-u*u;if(v===0)return a.set(0,0,0),null;const _=1/v,y=(d*f-u*g)*_,E=(c*g-u*f)*_;return a.set(1-y-E,E,y)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,t,n,r,a,c,u,f){return this.getBarycoord(e,t,n,r,ii)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,ii.x),f.addScaledVector(c,ii.y),f.addScaledVector(u,ii.z),f)}static isFrontFacing(e,t,n,r){return On.subVectors(n,t),ni.subVectors(e,t),On.cross(ni).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),On.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return jn.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let c,u;ar.subVectors(r,n),or.subVectors(a,n),Na.subVectors(e,n);const f=ar.dot(Na),d=or.dot(Na);if(f<=0&&d<=0)return t.copy(n);Fa.subVectors(e,r);const g=ar.dot(Fa),v=or.dot(Fa);if(g>=0&&v<=g)return t.copy(r);const _=f*v-g*d;if(_<=0&&f>=0&&g<=0)return c=f/(f-g),t.copy(n).addScaledVector(ar,c);Oa.subVectors(e,a);const y=ar.dot(Oa),E=or.dot(Oa);if(E>=0&&y<=E)return t.copy(a);const b=y*d-f*E;if(b<=0&&d>=0&&E<=0)return u=d/(d-E),t.copy(n).addScaledVector(or,u);const x=g*E-y*v;if(x<=0&&v-g>=0&&y-E>=0)return Pl.subVectors(a,r),u=(v-g)/(v-g+(y-E)),t.copy(r).addScaledVector(Pl,u);const m=1/(x+b+_);return c=b*m,u=_*m,t.copy(n).addScaledVector(ar,c).addScaledVector(or,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},ys={h:0,s:0,l:0};function Ba(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class _t{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ct.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ct.workingColorSpace){if(e=jo(e,1),t=ln(t,0,1),n=ln(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,c=2*n-a;this.r=Ba(c,a,e+1/3),this.g=Ba(c,a,e),this.b=Ba(c,a,e-1/3)}return Ct.toWorkingColorSpace(this,r),this}setStyle(e,t=Xn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=r[1],u=r[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xn){const n=Gc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}copyLinearToSRGB(e){return this.r=Ta(e.r),this.g=Ta(e.g),this.b=Ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return Ct.fromWorkingColorSpace(on.copy(this),e),Math.round(ln(on.r*255,0,255))*65536+Math.round(ln(on.g*255,0,255))*256+Math.round(ln(on.b*255,0,255))}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(on.copy(this),t);const n=on.r,r=on.g,a=on.b,c=Math.max(n,r,a),u=Math.min(n,r,a);let f,d;const g=(u+c)/2;if(u===c)f=0,d=0;else{const v=c-u;switch(d=g<=.5?v/(c+u):v/(2-c-u),c){case n:f=(r-a)/v+(r<a?6:0);break;case r:f=(a-n)/v+2;break;case a:f=(n-r)/v+4;break}f/=6}return e.h=f,e.s=d,e.l=g,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=Xn){Ct.fromWorkingColorSpace(on.copy(this),e);const t=on.r,n=on.g,r=on.b;return e!==Xn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+t,vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(ys);const n=$r(vi.h,ys.h,t),r=$r(vi.s,ys.s,t),a=$r(vi.l,ys.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new _t;_t.NAMES=Gc;let df=0;class ui extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=wr(),this.name="",this.type="Material",this.blending=vr,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=to,this.blendDst=no,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(n.blending=this.blending),this.side!==bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==to&&(n.blendSrc=this.blendSrc),this.blendDst!==no&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const c=[];for(const u in a){const f=a[u];delete f.metadata,c.push(f)}return c}if(t){const a=r(e.textures),c=r(e.images);a.length>0&&(n.textures=a),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Wc extends ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new j,Ms=new lt;class vn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_l,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Kr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ms.fromBufferAttribute(this,t),Ms.applyMatrix3(e),this.setXY(t,Ms.x,Ms.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=mr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mr(t,this.array)),t}setX(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mr(t,this.array)),t}setY(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mr(t,this.array)),t}setW(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array),r=fn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array),r=fn(r,this.array),a=fn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_l&&(e.usage=this.usage),e}}class Xc extends vn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yo extends vn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Yt extends vn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let pf=0;const wn=new Xt,za=new gn,lr=new j,En=new Cr,Vr=new Cr,Jt=new j;class yn extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=wr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zc(e)?Yo:Xc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new ht().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,n){return wn.makeTranslation(e,t,n),this.applyMatrix4(wn),this}scale(e,t,n){return wn.makeScale(e,t,n),this.applyMatrix4(wn),this}lookAt(e){return za.lookAt(e),za.updateMatrix(),this.applyMatrix4(za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Yt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];En.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];Vr.setFromBufferAttribute(u),this.morphTargetsRelative?(Jt.addVectors(En.min,Vr.min),En.expandByPoint(Jt),Jt.addVectors(En.max,Vr.max),En.expandByPoint(Jt)):(En.expandByPoint(Vr.min),En.expandByPoint(Vr.max))}En.getCenter(n);let r=0;for(let a=0,c=e.count;a<c;a++)Jt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Jt));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],f=this.morphTargetsRelative;for(let d=0,g=u.count;d<g;d++)Jt.fromBufferAttribute(u,d),f&&(lr.fromBufferAttribute(e,d),Jt.add(lr)),r=Math.max(r,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*n.count),4));const c=this.getAttribute("tangent"),u=[],f=[];for(let $=0;$<n.count;$++)u[$]=new j,f[$]=new j;const d=new j,g=new j,v=new j,_=new lt,y=new lt,E=new lt,b=new j,x=new j;function m($,I,P){d.fromBufferAttribute(n,$),g.fromBufferAttribute(n,I),v.fromBufferAttribute(n,P),_.fromBufferAttribute(a,$),y.fromBufferAttribute(a,I),E.fromBufferAttribute(a,P),g.sub(d),v.sub(d),y.sub(_),E.sub(_);const V=1/(y.x*E.y-E.x*y.y);isFinite(V)&&(b.copy(g).multiplyScalar(E.y).addScaledVector(v,-y.y).multiplyScalar(V),x.copy(v).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(V),u[$].add(b),u[I].add(b),u[P].add(b),f[$].add(x),f[I].add(x),f[P].add(x))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let $=0,I=L.length;$<I;++$){const P=L[$],V=P.start,ce=P.count;for(let Y=V,pe=V+ce;Y<pe;Y+=3)m(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const R=new j,N=new j,q=new j,z=new j;function l($){q.fromBufferAttribute(r,$),z.copy(q);const I=u[$];R.copy(I),R.sub(q.multiplyScalar(q.dot(I))).normalize(),N.crossVectors(z,I);const V=N.dot(f[$])<0?-1:1;c.setXYZW($,R.x,R.y,R.z,V)}for(let $=0,I=L.length;$<I;++$){const P=L[$],V=P.start,ce=P.count;for(let Y=V,pe=V+ce;Y<pe;Y+=3)l(e.getX(Y+0)),l(e.getX(Y+1)),l(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let _=0,y=n.count;_<y;_++)n.setXYZ(_,0,0,0);const r=new j,a=new j,c=new j,u=new j,f=new j,d=new j,g=new j,v=new j;if(e)for(let _=0,y=e.count;_<y;_+=3){const E=e.getX(_+0),b=e.getX(_+1),x=e.getX(_+2);r.fromBufferAttribute(t,E),a.fromBufferAttribute(t,b),c.fromBufferAttribute(t,x),g.subVectors(c,a),v.subVectors(r,a),g.cross(v),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,b),d.fromBufferAttribute(n,x),u.add(g),f.add(g),d.add(g),n.setXYZ(E,u.x,u.y,u.z),n.setXYZ(b,f.x,f.y,f.z),n.setXYZ(x,d.x,d.y,d.z)}else for(let _=0,y=t.count;_<y;_+=3)r.fromBufferAttribute(t,_+0),a.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),g.subVectors(c,a),v.subVectors(r,a),g.cross(v),n.setXYZ(_+0,g.x,g.y,g.z),n.setXYZ(_+1,g.x,g.y,g.z),n.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(u,f){const d=u.array,g=u.itemSize,v=u.normalized,_=new d.constructor(f.length*g);let y=0,E=0;for(let b=0,x=f.length;b<x;b++){u.isInterleavedBufferAttribute?y=f[b]*u.data.stride+u.offset:y=f[b]*g;for(let m=0;m<g;m++)_[E++]=d[y++]}return new vn(_,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yn,n=this.index.array,r=this.attributes;for(const u in r){const f=r[u],d=e(f,n);t.setAttribute(u,d)}const a=this.morphAttributes;for(const u in a){const f=[],d=a[u];for(let g=0,v=d.length;g<v;g++){const _=d[g],y=e(_,n);f.push(y)}t.morphAttributes[u]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,f=c.length;u<f;u++){const d=c[u];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const f in n){const d=n[f];e.data.attributes[f]=d.toJSON(e.data)}const r={};let a=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],g=[];for(let v=0,_=d.length;v<_;v++){const y=d[v];g.push(y.toJSON(e.data))}g.length>0&&(r[f]=g,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const d in r){const g=r[d];this.setAttribute(d,g.clone(t))}const a=e.morphAttributes;for(const d in a){const g=[],v=a[d];for(let _=0,y=v.length;_<y;_++)g.push(v[_].clone(t));this.morphAttributes[d]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,g=c.length;d<g;d++){const v=c[d];this.addGroup(v.start,v.count,v.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ll=new Xt,Ii=new ia,Ss=new ns,Dl=new j,cr=new j,ur=new j,hr=new j,ka=new j,Es=new j,bs=new lt,Ts=new lt,As=new lt,Il=new j,Ul=new j,Nl=new j,ws=new j,Cs=new j;class Pn extends gn{constructor(e=new yn,t=new Wc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=r.length;a<c;a++){const u=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const u=this.morphTargetInfluences;if(a&&u){Es.set(0,0,0);for(let f=0,d=a.length;f<d;f++){const g=u[f],v=a[f];g!==0&&(ka.fromBufferAttribute(v,e),c?Es.addScaledVector(ka,g):Es.addScaledVector(ka.sub(t),g))}t.add(Es)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere),Ss.applyMatrix4(a),Ii.copy(e.ray).recast(e.near),!(Ss.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(Ss,Dl)===null||Ii.origin.distanceToSquared(Dl)>(e.far-e.near)**2))&&(Ll.copy(a).invert(),Ii.copy(e.ray).applyMatrix4(Ll),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,n){let r;const a=this.geometry,c=this.material,u=a.index,f=a.attributes.position,d=a.attributes.uv,g=a.attributes.uv1,v=a.attributes.normal,_=a.groups,y=a.drawRange;if(u!==null)if(Array.isArray(c))for(let E=0,b=_.length;E<b;E++){const x=_[E],m=c[x.materialIndex],L=Math.max(x.start,y.start),R=Math.min(u.count,Math.min(x.start+x.count,y.start+y.count));for(let N=L,q=R;N<q;N+=3){const z=u.getX(N),l=u.getX(N+1),$=u.getX(N+2);r=Rs(this,m,e,n,d,g,v,z,l,$),r&&(r.faceIndex=Math.floor(N/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const E=Math.max(0,y.start),b=Math.min(u.count,y.start+y.count);for(let x=E,m=b;x<m;x+=3){const L=u.getX(x),R=u.getX(x+1),N=u.getX(x+2);r=Rs(this,c,e,n,d,g,v,L,R,N),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(f!==void 0)if(Array.isArray(c))for(let E=0,b=_.length;E<b;E++){const x=_[E],m=c[x.materialIndex],L=Math.max(x.start,y.start),R=Math.min(f.count,Math.min(x.start+x.count,y.start+y.count));for(let N=L,q=R;N<q;N+=3){const z=N,l=N+1,$=N+2;r=Rs(this,m,e,n,d,g,v,z,l,$),r&&(r.faceIndex=Math.floor(N/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const E=Math.max(0,y.start),b=Math.min(f.count,y.start+y.count);for(let x=E,m=b;x<m;x+=3){const L=x,R=x+1,N=x+2;r=Rs(this,c,e,n,d,g,v,L,R,N),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}}function mf(i,e,t,n,r,a,c,u){let f;if(e.side===xn?f=n.intersectTriangle(c,a,r,!0,u):f=n.intersectTriangle(r,a,c,e.side===bi,u),f===null)return null;Cs.copy(u),Cs.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(Cs);return d<t.near||d>t.far?null:{distance:d,point:Cs.clone(),object:i}}function Rs(i,e,t,n,r,a,c,u,f,d){i.getVertexPosition(u,cr),i.getVertexPosition(f,ur),i.getVertexPosition(d,hr);const g=mf(i,e,t,n,cr,ur,hr,ws);if(g){r&&(bs.fromBufferAttribute(r,u),Ts.fromBufferAttribute(r,f),As.fromBufferAttribute(r,d),g.uv=jn.getInterpolation(ws,cr,ur,hr,bs,Ts,As,new lt)),a&&(bs.fromBufferAttribute(a,u),Ts.fromBufferAttribute(a,f),As.fromBufferAttribute(a,d),g.uv1=jn.getInterpolation(ws,cr,ur,hr,bs,Ts,As,new lt)),c&&(Il.fromBufferAttribute(c,u),Ul.fromBufferAttribute(c,f),Nl.fromBufferAttribute(c,d),g.normal=jn.getInterpolation(ws,cr,ur,hr,Il,Ul,Nl,new j),g.normal.dot(n.direction)>0&&g.normal.multiplyScalar(-1));const v={a:u,b:f,c:d,normal:new j,materialIndex:0};jn.getNormal(cr,ur,hr,v.normal),g.face=v}return g}class is extends yn{constructor(e=1,t=1,n=1,r=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:c};const u=this;r=Math.floor(r),a=Math.floor(a),c=Math.floor(c);const f=[],d=[],g=[],v=[];let _=0,y=0;E("z","y","x",-1,-1,n,t,e,c,a,0),E("z","y","x",1,-1,n,t,-e,c,a,1),E("x","z","y",1,1,e,n,t,r,c,2),E("x","z","y",1,-1,e,n,-t,r,c,3),E("x","y","z",1,-1,e,t,n,r,a,4),E("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(f),this.setAttribute("position",new Yt(d,3)),this.setAttribute("normal",new Yt(g,3)),this.setAttribute("uv",new Yt(v,2));function E(b,x,m,L,R,N,q,z,l,$,I){const P=N/l,V=q/$,ce=N/2,Y=q/2,pe=z/2,me=l+1,le=$+1;let de=0,oe=0;const be=new j;for(let De=0;De<le;De++){const Be=De*V-Y;for(let ft=0;ft<me;ft++){const vt=ft*P-ce;be[b]=vt*L,be[x]=Be*R,be[m]=pe,d.push(be.x,be.y,be.z),be[b]=0,be[x]=0,be[m]=z>0?1:-1,g.push(be.x,be.y,be.z),v.push(ft/l),v.push(1-De/$),de+=1}}for(let De=0;De<$;De++)for(let Be=0;Be<l;Be++){const ft=_+Be+me*De,vt=_+Be+me*(De+1),fe=_+(Be+1)+me*(De+1),ye=_+(Be+1)+me*De;f.push(ft,vt,ye),f.push(vt,fe,ye),oe+=6}u.addGroup(y,oe,I),y+=oe,_+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Tr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function dn(i){const e={};for(let t=0;t<i.length;t++){const n=Tr(i[t]);for(const r in n)e[r]=n[r]}return e}function gf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function qc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const _f={clone:Tr,merge:dn};var vf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vf,this.fragmentShader=xf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Tr(e.uniforms),this.uniformsGroups=gf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const c=this.uniforms[r].value;c&&c.isTexture?t.uniforms[r]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[r]={type:"m4",value:c.toArray()}:t.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class jc extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=li}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new j,Fl=new lt,Ol=new lt;class Rn extends jc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qr*2*Math.atan(Math.tan(Yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,Fl,Ol),t.subVectors(Ol,Fl)}setViewOffset(e,t,n,r,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,d=c.fullHeight;a+=c.offsetX*r/f,t-=c.offsetY*n/d,r*=c.width/f,n*=c.height/d}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fr=-90,dr=1;class yf extends gn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Rn(fr,dr,e,t);r.layers=this.layers,this.add(r);const a=new Rn(fr,dr,e,t);a.layers=this.layers,this.add(a);const c=new Rn(fr,dr,e,t);c.layers=this.layers,this.add(c);const u=new Rn(fr,dr,e,t);u.layers=this.layers,this.add(u);const f=new Rn(fr,dr,e,t);f.layers=this.layers,this.add(f);const d=new Rn(fr,dr,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,c,u,f]=t;for(const d of t)this.remove(d);if(e===li)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,f,d,g]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,c),e.setRenderTarget(n,2,r),e.render(t,u),e.setRenderTarget(n,3,r),e.render(t,f),e.setRenderTarget(n,4,r),e.render(t,d),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,r),e.render(t,g),e.setRenderTarget(v,_,y),e.xr.enabled=E,n.texture.needsPMREMUpdate=!0}}class Yc extends mn{constructor(e,t,n,r,a,c,u,f,d,g){e=e!==void 0?e:[],t=t!==void 0?t:Mr,super(e,t,n,r,a,c,u,f,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mf extends Ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Yc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new is(5,5,5),a=new Kn({name:"CubemapFromEquirect",uniforms:Tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:Si});a.uniforms.tEquirect.value=t;const c=new Pn(r,a),u=t.minFilter;return t.minFilter===ki&&(t.minFilter=Bn),new yf(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,r);e.setRenderTarget(a)}}const Ha=new j,Sf=new j,Ef=new ht;class yi{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ha.subVectors(n,t).cross(Sf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ha),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ef.getNormalMatrix(e),r=this.coplanarPoint(Ha).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new ns,Ps=new j;class $c{constructor(e=new yi,t=new yi,n=new yi,r=new yi,a=new yi,c=new yi){this.planes=[e,t,n,r,a,c]}set(e,t,n,r,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(n),u[3].copy(r),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=li){const n=this.planes,r=e.elements,a=r[0],c=r[1],u=r[2],f=r[3],d=r[4],g=r[5],v=r[6],_=r[7],y=r[8],E=r[9],b=r[10],x=r[11],m=r[12],L=r[13],R=r[14],N=r[15];if(n[0].setComponents(f-a,_-d,x-y,N-m).normalize(),n[1].setComponents(f+a,_+d,x+y,N+m).normalize(),n[2].setComponents(f+c,_+g,x+E,N+L).normalize(),n[3].setComponents(f-c,_-g,x-E,N-L).normalize(),n[4].setComponents(f-u,_-v,x-b,N-R).normalize(),t===li)n[5].setComponents(f+u,_+v,x+b,N+R).normalize();else if(t===Ks)n[5].setComponents(u,v,b,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ps.x=r.normal.x>0?e.max.x:e.min.x,Ps.y=r.normal.y>0?e.max.y:e.min.y,Ps.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ps)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kc(){let i=null,e=!1,t=null,n=null;function r(a,c){t(a,c),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function bf(i){const e=new WeakMap;function t(u,f){const d=u.array,g=u.usage,v=d.byteLength,_=i.createBuffer();i.bindBuffer(f,_),i.bufferData(f,d,g),u.onUploadCallback();let y;if(d instanceof Float32Array)y=i.FLOAT;else if(d instanceof Uint16Array)u.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=i.SHORT;else if(d instanceof Uint32Array)y=i.UNSIGNED_INT;else if(d instanceof Int32Array)y=i.INT;else if(d instanceof Int8Array)y=i.BYTE;else if(d instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:v}}function n(u,f,d){const g=f.array,v=f._updateRange,_=f.updateRanges;if(i.bindBuffer(d,u),v.count===-1&&_.length===0&&i.bufferSubData(d,0,g),_.length!==0){for(let y=0,E=_.length;y<E;y++){const b=_[y];i.bufferSubData(d,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}f.clearUpdateRanges()}v.count!==-1&&(i.bufferSubData(d,v.offset*g.BYTES_PER_ELEMENT,g,v.offset,v.count),v.count=-1),f.onUploadCallback()}function r(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=e.get(u);f&&(i.deleteBuffer(f.buffer),e.delete(u))}function c(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const g=e.get(u);(!g||g.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const d=e.get(u);if(d===void 0)e.set(u,t(u,f));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,u,f),d.version=u.version}}return{get:r,remove:a,update:c}}class ra extends yn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,c=t/2,u=Math.floor(n),f=Math.floor(r),d=u+1,g=f+1,v=e/u,_=t/f,y=[],E=[],b=[],x=[];for(let m=0;m<g;m++){const L=m*_-c;for(let R=0;R<d;R++){const N=R*v-a;E.push(N,-L,0),b.push(0,0,1),x.push(R/u),x.push(1-m/f)}}for(let m=0;m<f;m++)for(let L=0;L<u;L++){const R=L+d*m,N=L+d*(m+1),q=L+1+d*(m+1),z=L+1+d*m;y.push(R,N,z),y.push(N,q,z)}this.setIndex(y),this.setAttribute("position",new Yt(E,3)),this.setAttribute("normal",new Yt(b,3)),this.setAttribute("uv",new Yt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.width,e.height,e.widthSegments,e.heightSegments)}}var Tf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Af=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Df=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,If=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Uf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ff=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Of=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Yf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$f=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Kf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ed=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,td="gl_FragColor = linearToOutputTexel( gl_FragColor );",nd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,id=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ad=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,od=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ld=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ud=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,md=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_d=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Md=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ed=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Td=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ad=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ld=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Id=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ud=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Od=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Hd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Yd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$d=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ep=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,np=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ip=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ap=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,op=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,up=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_p=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ep=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Lp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Dp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ip=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Np=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Op=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$p=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,em=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,im=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:Tf,alphahash_pars_fragment:Af,alphamap_fragment:wf,alphamap_pars_fragment:Cf,alphatest_fragment:Rf,alphatest_pars_fragment:Pf,aomap_fragment:Lf,aomap_pars_fragment:Df,batching_pars_vertex:If,batching_vertex:Uf,begin_vertex:Nf,beginnormal_vertex:Ff,bsdfs:Of,iridescence_fragment:Bf,bumpmap_pars_fragment:zf,clipping_planes_fragment:kf,clipping_planes_pars_fragment:Hf,clipping_planes_pars_vertex:Vf,clipping_planes_vertex:Gf,color_fragment:Wf,color_pars_fragment:Xf,color_pars_vertex:qf,color_vertex:jf,common:Yf,cube_uv_reflection_fragment:$f,defaultnormal_vertex:Kf,displacementmap_pars_vertex:Zf,displacementmap_vertex:Jf,emissivemap_fragment:Qf,emissivemap_pars_fragment:ed,colorspace_fragment:td,colorspace_pars_fragment:nd,envmap_fragment:id,envmap_common_pars_fragment:rd,envmap_pars_fragment:sd,envmap_pars_vertex:ad,envmap_physical_pars_fragment:_d,envmap_vertex:od,fog_vertex:ld,fog_pars_vertex:cd,fog_fragment:ud,fog_pars_fragment:hd,gradientmap_pars_fragment:fd,lightmap_pars_fragment:dd,lights_lambert_fragment:pd,lights_lambert_pars_fragment:md,lights_pars_begin:gd,lights_toon_fragment:vd,lights_toon_pars_fragment:xd,lights_phong_fragment:yd,lights_phong_pars_fragment:Md,lights_physical_fragment:Sd,lights_physical_pars_fragment:Ed,lights_fragment_begin:bd,lights_fragment_maps:Td,lights_fragment_end:Ad,logdepthbuf_fragment:wd,logdepthbuf_pars_fragment:Cd,logdepthbuf_pars_vertex:Rd,logdepthbuf_vertex:Pd,map_fragment:Ld,map_pars_fragment:Dd,map_particle_fragment:Id,map_particle_pars_fragment:Ud,metalnessmap_fragment:Nd,metalnessmap_pars_fragment:Fd,morphinstance_vertex:Od,morphcolor_vertex:Bd,morphnormal_vertex:zd,morphtarget_pars_vertex:kd,morphtarget_vertex:Hd,normal_fragment_begin:Vd,normal_fragment_maps:Gd,normal_pars_fragment:Wd,normal_pars_vertex:Xd,normal_vertex:qd,normalmap_pars_fragment:jd,clearcoat_normal_fragment_begin:Yd,clearcoat_normal_fragment_maps:$d,clearcoat_pars_fragment:Kd,iridescence_pars_fragment:Zd,opaque_fragment:Jd,packing:Qd,premultiplied_alpha_fragment:ep,project_vertex:tp,dithering_fragment:np,dithering_pars_fragment:ip,roughnessmap_fragment:rp,roughnessmap_pars_fragment:sp,shadowmap_pars_fragment:ap,shadowmap_pars_vertex:op,shadowmap_vertex:lp,shadowmask_pars_fragment:cp,skinbase_vertex:up,skinning_pars_vertex:hp,skinning_vertex:fp,skinnormal_vertex:dp,specularmap_fragment:pp,specularmap_pars_fragment:mp,tonemapping_fragment:gp,tonemapping_pars_fragment:_p,transmission_fragment:vp,transmission_pars_fragment:xp,uv_pars_fragment:yp,uv_pars_vertex:Mp,uv_vertex:Sp,worldpos_vertex:Ep,background_vert:bp,background_frag:Tp,backgroundCube_vert:Ap,backgroundCube_frag:wp,cube_vert:Cp,cube_frag:Rp,depth_vert:Pp,depth_frag:Lp,distanceRGBA_vert:Dp,distanceRGBA_frag:Ip,equirect_vert:Up,equirect_frag:Np,linedashed_vert:Fp,linedashed_frag:Op,meshbasic_vert:Bp,meshbasic_frag:zp,meshlambert_vert:kp,meshlambert_frag:Hp,meshmatcap_vert:Vp,meshmatcap_frag:Gp,meshnormal_vert:Wp,meshnormal_frag:Xp,meshphong_vert:qp,meshphong_frag:jp,meshphysical_vert:Yp,meshphysical_frag:$p,meshtoon_vert:Kp,meshtoon_frag:Zp,points_vert:Jp,points_frag:Qp,shadow_vert:em,shadow_frag:tm,sprite_vert:nm,sprite_frag:im},Ae={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},qn={basic:{uniforms:dn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:dn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new _t(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:dn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:dn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:dn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new _t(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:dn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:dn([Ae.points,Ae.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:dn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:dn([Ae.common,Ae.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:dn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:dn([Ae.sprite,Ae.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:dn([Ae.common,Ae.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:dn([Ae.lights,Ae.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};qn.physical={uniforms:dn([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Ls={r:0,b:0,g:0},Ni=new $n,rm=new Xt;function sm(i,e,t,n,r,a,c){const u=new _t(0);let f=a===!0?0:1,d,g,v=null,_=0,y=null;function E(L){let R=L.isScene===!0?L.background:null;return R&&R.isTexture&&(R=(L.backgroundBlurriness>0?t:e).get(R)),R}function b(L){let R=!1;const N=E(L);N===null?m(u,f):N&&N.isColor&&(m(N,1),R=!0);const q=i.xr.getEnvironmentBlendMode();q==="additive"?n.buffers.color.setClear(0,0,0,1,c):q==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(i.autoClear||R)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(L,R){const N=E(R);N&&(N.isCubeTexture||N.mapping===ta)?(g===void 0&&(g=new Pn(new is(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Tr(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(q,z,l){this.matrixWorld.copyPosition(l.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(g)),Ni.copy(R.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),g.material.uniforms.envMap.value=N,g.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(rm.makeRotationFromEuler(Ni)),g.material.toneMapped=Ct.getTransfer(N.colorSpace)!==Ot,(v!==N||_!==N.version||y!==i.toneMapping)&&(g.material.needsUpdate=!0,v=N,_=N.version,y=i.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):N&&N.isTexture&&(d===void 0&&(d=new Pn(new ra(2,2),new Kn({name:"BackgroundMaterial",uniforms:Tr(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=N,d.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,d.material.toneMapped=Ct.getTransfer(N.colorSpace)!==Ot,N.matrixAutoUpdate===!0&&N.updateMatrix(),d.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||_!==N.version||y!==i.toneMapping)&&(d.material.needsUpdate=!0,v=N,_=N.version,y=i.toneMapping),d.layers.enableAll(),L.unshift(d,d.geometry,d.material,0,0,null))}function m(L,R){L.getRGB(Ls,qc(i)),n.buffers.color.setClear(Ls.r,Ls.g,Ls.b,R,c)}return{getClearColor:function(){return u},setClearColor:function(L,R=1){u.set(L),f=R,m(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(L){f=L,m(u,f)},render:b,addToRenderList:x}}function am(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=_(null);let a=r,c=!1;function u(P,V,ce,Y,pe){let me=!1;const le=v(Y,ce,V);a!==le&&(a=le,d(a.object)),me=y(P,Y,ce,pe),me&&E(P,Y,ce,pe),pe!==null&&e.update(pe,i.ELEMENT_ARRAY_BUFFER),(me||c)&&(c=!1,N(P,V,ce,Y),pe!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(pe).buffer))}function f(){return i.createVertexArray()}function d(P){return i.bindVertexArray(P)}function g(P){return i.deleteVertexArray(P)}function v(P,V,ce){const Y=ce.wireframe===!0;let pe=n[P.id];pe===void 0&&(pe={},n[P.id]=pe);let me=pe[V.id];me===void 0&&(me={},pe[V.id]=me);let le=me[Y];return le===void 0&&(le=_(f()),me[Y]=le),le}function _(P){const V=[],ce=[],Y=[];for(let pe=0;pe<t;pe++)V[pe]=0,ce[pe]=0,Y[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ce,attributeDivisors:Y,object:P,attributes:{},index:null}}function y(P,V,ce,Y){const pe=a.attributes,me=V.attributes;let le=0;const de=ce.getAttributes();for(const oe in de)if(de[oe].location>=0){const De=pe[oe];let Be=me[oe];if(Be===void 0&&(oe==="instanceMatrix"&&P.instanceMatrix&&(Be=P.instanceMatrix),oe==="instanceColor"&&P.instanceColor&&(Be=P.instanceColor)),De===void 0||De.attribute!==Be||Be&&De.data!==Be.data)return!0;le++}return a.attributesNum!==le||a.index!==Y}function E(P,V,ce,Y){const pe={},me=V.attributes;let le=0;const de=ce.getAttributes();for(const oe in de)if(de[oe].location>=0){let De=me[oe];De===void 0&&(oe==="instanceMatrix"&&P.instanceMatrix&&(De=P.instanceMatrix),oe==="instanceColor"&&P.instanceColor&&(De=P.instanceColor));const Be={};Be.attribute=De,De&&De.data&&(Be.data=De.data),pe[oe]=Be,le++}a.attributes=pe,a.attributesNum=le,a.index=Y}function b(){const P=a.newAttributes;for(let V=0,ce=P.length;V<ce;V++)P[V]=0}function x(P){m(P,0)}function m(P,V){const ce=a.newAttributes,Y=a.enabledAttributes,pe=a.attributeDivisors;ce[P]=1,Y[P]===0&&(i.enableVertexAttribArray(P),Y[P]=1),pe[P]!==V&&(i.vertexAttribDivisor(P,V),pe[P]=V)}function L(){const P=a.newAttributes,V=a.enabledAttributes;for(let ce=0,Y=V.length;ce<Y;ce++)V[ce]!==P[ce]&&(i.disableVertexAttribArray(ce),V[ce]=0)}function R(P,V,ce,Y,pe,me,le){le===!0?i.vertexAttribIPointer(P,V,ce,pe,me):i.vertexAttribPointer(P,V,ce,Y,pe,me)}function N(P,V,ce,Y){b();const pe=Y.attributes,me=ce.getAttributes(),le=V.defaultAttributeValues;for(const de in me){const oe=me[de];if(oe.location>=0){let be=pe[de];if(be===void 0&&(de==="instanceMatrix"&&P.instanceMatrix&&(be=P.instanceMatrix),de==="instanceColor"&&P.instanceColor&&(be=P.instanceColor)),be!==void 0){const De=be.normalized,Be=be.itemSize,ft=e.get(be);if(ft===void 0)continue;const vt=ft.buffer,fe=ft.type,ye=ft.bytesPerElement,Oe=fe===i.INT||fe===i.UNSIGNED_INT||be.gpuType===ko;if(be.isInterleavedBufferAttribute){const Ue=be.data,it=Ue.stride,at=be.offset;if(Ue.isInstancedInterleavedBuffer){for(let $e=0;$e<oe.locationSize;$e++)m(oe.location+$e,Ue.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let $e=0;$e<oe.locationSize;$e++)x(oe.location+$e);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let $e=0;$e<oe.locationSize;$e++)R(oe.location+$e,Be/oe.locationSize,fe,De,it*ye,(at+Be/oe.locationSize*$e)*ye,Oe)}else{if(be.isInstancedBufferAttribute){for(let Ue=0;Ue<oe.locationSize;Ue++)m(oe.location+Ue,be.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Ue=0;Ue<oe.locationSize;Ue++)x(oe.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let Ue=0;Ue<oe.locationSize;Ue++)R(oe.location+Ue,Be/oe.locationSize,fe,De,Be*ye,Be/oe.locationSize*Ue*ye,Oe)}}else if(le!==void 0){const De=le[de];if(De!==void 0)switch(De.length){case 2:i.vertexAttrib2fv(oe.location,De);break;case 3:i.vertexAttrib3fv(oe.location,De);break;case 4:i.vertexAttrib4fv(oe.location,De);break;default:i.vertexAttrib1fv(oe.location,De)}}}}L()}function q(){$();for(const P in n){const V=n[P];for(const ce in V){const Y=V[ce];for(const pe in Y)g(Y[pe].object),delete Y[pe];delete V[ce]}delete n[P]}}function z(P){if(n[P.id]===void 0)return;const V=n[P.id];for(const ce in V){const Y=V[ce];for(const pe in Y)g(Y[pe].object),delete Y[pe];delete V[ce]}delete n[P.id]}function l(P){for(const V in n){const ce=n[V];if(ce[P.id]===void 0)continue;const Y=ce[P.id];for(const pe in Y)g(Y[pe].object),delete Y[pe];delete ce[P.id]}}function $(){I(),c=!0,a!==r&&(a=r,d(a.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:u,reset:$,resetDefaultState:I,dispose:q,releaseStatesOfGeometry:z,releaseStatesOfProgram:l,initAttributes:b,enableAttribute:x,disableUnusedAttributes:L}}function om(i,e,t){let n;function r(d){n=d}function a(d,g){i.drawArrays(n,d,g),t.update(g,n,1)}function c(d,g,v){v!==0&&(i.drawArraysInstanced(n,d,g,v),t.update(g,n,v))}function u(d,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,g,0,v);let y=0;for(let E=0;E<v;E++)y+=g[E];t.update(y,n,1)}function f(d,g,v,_){if(v===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<d.length;E++)c(d[E],g[E],_[E]);else{y.multiDrawArraysInstancedWEBGL(n,d,0,g,0,_,0,v);let E=0;for(let b=0;b<v;b++)E+=g[b];for(let b=0;b<_.length;b++)t.update(E,n,_[b])}}this.setMode=r,this.render=a,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function lm(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function c(z){return!(z!==pn&&n.convert(z)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(z){const l=z===ts&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==ci&&n.convert(z)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==cn&&!l)}function f(z){if(z==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const g=f(d);g!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const v=t.logarithmicDepthBuffer===!0,_=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),b=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=y>0,q=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:u,precision:d,logarithmicDepthBuffer:v,maxTextures:_,maxVertexTextures:y,maxTextureSize:E,maxCubemapSize:b,maxAttributes:x,maxVertexUniforms:m,maxVaryings:L,maxFragmentUniforms:R,vertexTextures:N,maxSamples:q}}function cm(i){const e=this;let t=null,n=0,r=!1,a=!1;const c=new yi,u=new ht,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const y=v.length!==0||_||n!==0||r;return r=_,n=v.length,y},this.beginShadows=function(){a=!0,g(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(v,_){t=g(v,_,0)},this.setState=function(v,_,y){const E=v.clippingPlanes,b=v.clipIntersection,x=v.clipShadows,m=i.get(v);if(!r||E===null||E.length===0||a&&!x)a?g(null):d();else{const L=a?0:n,R=L*4;let N=m.clippingState||null;f.value=N,N=g(E,_,R,y);for(let q=0;q!==R;++q)N[q]=t[q];m.clippingState=N,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=L}};function d(){f.value!==t&&(f.value=t,f.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function g(v,_,y,E){const b=v!==null?v.length:0;let x=null;if(b!==0){if(x=f.value,E!==!0||x===null){const m=y+b*4,L=_.matrixWorldInverse;u.getNormalMatrix(L),(x===null||x.length<m)&&(x=new Float32Array(m));for(let R=0,N=y;R!==b;++R,N+=4)c.copy(v[R]).applyMatrix4(L,u),c.normal.toArray(x,N),x[N+3]=c.constant}f.value=x,f.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,x}}function um(i){let e=new WeakMap;function t(c,u){return u===io?c.mapping=Mr:u===ro&&(c.mapping=Sr),c}function n(c){if(c&&c.isTexture){const u=c.mapping;if(u===io||u===ro)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const d=new Mf(f.height);return d.fromEquirectangularTexture(i,c),e.set(c,d),c.addEventListener("dispose",r),t(d.texture,c.mapping)}else return null}}return c}function r(c){const u=c.target;u.removeEventListener("dispose",r);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class Zc extends jc{constructor(e=-1,t=1,n=1,r=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,c=n+e,u=r+t,f=r-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,c=a+d*this.view.width,u-=g*this.view.offsetY,f=u-g*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _r=4,Bl=[.125,.215,.35,.446,.526,.582],zi=20,Va=new Zc,zl=new _t;let Ga=null,Wa=0,Xa=0,qa=!1;const Oi=(1+Math.sqrt(5))/2,pr=1/Oi,kl=[new j(-Oi,pr,0),new j(Oi,pr,0),new j(-pr,0,Oi),new j(pr,0,Oi),new j(0,Oi,-pr),new j(0,Oi,pr),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class Hl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ga=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ga,Wa,Xa),this._renderer.xr.enabled=qa,e.scissorTest=!1,Ds(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mr||e.mapping===Sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ga=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:ts,format:pn,colorSpace:Ai,depthBuffer:!1},r=Vl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vl(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hm(a)),this._blurMaterial=fm(a,e,t)}return r}_compileMaterial(e){const t=new Pn(this._lodPlanes[0],e);this._renderer.compile(t,Va)}_sceneToCubeUV(e,t,n,r){const u=new Rn(90,1,t,n),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,_=g.toneMapping;g.getClearColor(zl),g.toneMapping=Ei,g.autoClear=!1;const y=new Wc({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),E=new Pn(new is,y);let b=!1;const x=e.background;x?x.isColor&&(y.color.copy(x),e.background=null,b=!0):(y.color.copy(zl),b=!0);for(let m=0;m<6;m++){const L=m%3;L===0?(u.up.set(0,f[m],0),u.lookAt(d[m],0,0)):L===1?(u.up.set(0,0,f[m]),u.lookAt(0,d[m],0)):(u.up.set(0,f[m],0),u.lookAt(0,0,d[m]));const R=this._cubeSize;Ds(r,L*R,m>2?R:0,R,R),g.setRenderTarget(r),b&&g.render(E,u),g.render(e,u)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=_,g.autoClear=v,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Mr||e.mapping===Sr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gl());const a=r?this._cubemapMaterial:this._equirectMaterial,c=new Pn(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=e;const f=this._cubeSize;Ds(t,0,0,3*f,2*f),n.setRenderTarget(t),n.render(c,Va)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=kl[(r-a-1)%kl.length];this._blur(e,a-1,a,c,u)}t.autoClear=n}_blur(e,t,n,r,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,r,"latitudinal",a),this._halfBlur(c,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,c,u){const f=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Pn(this._lodPlanes[r],d),_=d.uniforms,y=this._sizeLods[n]-1,E=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*zi-1),b=a/E,x=isFinite(a)?1+Math.floor(g*b):zi;x>zi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${zi}`);const m=[];let L=0;for(let l=0;l<zi;++l){const $=l/b,I=Math.exp(-$*$/2);m.push(I),l===0?L+=I:l<x&&(L+=2*I)}for(let l=0;l<m.length;l++)m[l]=m[l]/L;_.envMap.value=e.texture,_.samples.value=x,_.weights.value=m,_.latitudinal.value=c==="latitudinal",u&&(_.poleAxis.value=u);const{_lodMax:R}=this;_.dTheta.value=E,_.mipInt.value=R-n;const N=this._sizeLods[r],q=3*N*(r>R-_r?r-R+_r:0),z=4*(this._cubeSize-N);Ds(t,q,z,3*N,2*N),f.setRenderTarget(t),f.render(v,Va)}}function hm(i){const e=[],t=[],n=[];let r=i;const a=i-_r+1+Bl.length;for(let c=0;c<a;c++){const u=Math.pow(2,r);t.push(u);let f=1/u;c>i-_r?f=Bl[c-i+_r-1]:c===0&&(f=0),n.push(f);const d=1/(u-2),g=-d,v=1+d,_=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,E=6,b=3,x=2,m=1,L=new Float32Array(b*E*y),R=new Float32Array(x*E*y),N=new Float32Array(m*E*y);for(let z=0;z<y;z++){const l=z%3*2/3-1,$=z>2?0:-1,I=[l,$,0,l+2/3,$,0,l+2/3,$+1,0,l,$,0,l+2/3,$+1,0,l,$+1,0];L.set(I,b*E*z),R.set(_,x*E*z);const P=[z,z,z,z,z,z];N.set(P,m*E*z)}const q=new yn;q.setAttribute("position",new vn(L,b)),q.setAttribute("uv",new vn(R,x)),q.setAttribute("faceIndex",new vn(N,m)),e.push(q),r>_r&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Vl(i,e,t){const n=new Ti(i,e,t);return n.texture.mapping=ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ds(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function fm(i,e,t){const n=new Float32Array(zi),r=new j(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Gl(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Wl(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function $o(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dm(i){let e=new WeakMap,t=null;function n(u){if(u&&u.isTexture){const f=u.mapping,d=f===io||f===ro,g=f===Mr||f===Sr;if(d||g){let v=e.get(u);const _=v!==void 0?v.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==_)return t===null&&(t=new Hl(i)),v=d?t.fromEquirectangular(u,v):t.fromCubemap(u,v),v.texture.pmremVersion=u.pmremVersion,e.set(u,v),v.texture;if(v!==void 0)return v.texture;{const y=u.image;return d&&y&&y.height>0||g&&y&&r(y)?(t===null&&(t=new Hl(i)),v=d?t.fromEquirectangular(u):t.fromCubemap(u),v.texture.pmremVersion=u.pmremVersion,e.set(u,v),u.addEventListener("dispose",a),v.texture):null}}}return u}function r(u){let f=0;const d=6;for(let g=0;g<d;g++)u[g]!==void 0&&f++;return f===d}function a(u){const f=u.target;f.removeEventListener("dispose",a);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function pm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Kr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function mm(i,e,t,n){const r={},a=new WeakMap;function c(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);for(const E in _.morphAttributes){const b=_.morphAttributes[E];for(let x=0,m=b.length;x<m;x++)e.remove(b[x])}_.removeEventListener("dispose",c),delete r[_.id];const y=a.get(_);y&&(e.remove(y),a.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function u(v,_){return r[_.id]===!0||(_.addEventListener("dispose",c),r[_.id]=!0,t.memory.geometries++),_}function f(v){const _=v.attributes;for(const E in _)e.update(_[E],i.ARRAY_BUFFER);const y=v.morphAttributes;for(const E in y){const b=y[E];for(let x=0,m=b.length;x<m;x++)e.update(b[x],i.ARRAY_BUFFER)}}function d(v){const _=[],y=v.index,E=v.attributes.position;let b=0;if(y!==null){const L=y.array;b=y.version;for(let R=0,N=L.length;R<N;R+=3){const q=L[R+0],z=L[R+1],l=L[R+2];_.push(q,z,z,l,l,q)}}else if(E!==void 0){const L=E.array;b=E.version;for(let R=0,N=L.length/3-1;R<N;R+=3){const q=R+0,z=R+1,l=R+2;_.push(q,z,z,l,l,q)}}else return;const x=new(zc(_)?Yo:Xc)(_,1);x.version=b;const m=a.get(v);m&&e.remove(m),a.set(v,x)}function g(v){const _=a.get(v);if(_){const y=v.index;y!==null&&_.version<y.version&&d(v)}else d(v);return a.get(v)}return{get:u,update:f,getWireframeAttribute:g}}function gm(i,e,t){let n;function r(_){n=_}let a,c;function u(_){a=_.type,c=_.bytesPerElement}function f(_,y){i.drawElements(n,y,a,_*c),t.update(y,n,1)}function d(_,y,E){E!==0&&(i.drawElementsInstanced(n,y,a,_*c,E),t.update(y,n,E))}function g(_,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,y,0,a,_,0,E);let x=0;for(let m=0;m<E;m++)x+=y[m];t.update(x,n,1)}function v(_,y,E,b){if(E===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<_.length;m++)d(_[m]/c,y[m],b[m]);else{x.multiDrawElementsInstancedWEBGL(n,y,0,a,_,0,b,0,E);let m=0;for(let L=0;L<E;L++)m+=y[L];for(let L=0;L<b.length;L++)t.update(m,n,b[L])}}this.setMode=r,this.setIndex=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function _m(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,c,u){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=u*(a/3);break;case i.LINES:t.lines+=u*(a/2);break;case i.LINE_STRIP:t.lines+=u*(a-1);break;case i.LINE_LOOP:t.lines+=u*a;break;case i.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function vm(i,e,t){const n=new WeakMap,r=new Qt;function a(c,u,f){const d=c.morphTargetInfluences,g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=g!==void 0?g.length:0;let _=n.get(u);if(_===void 0||_.count!==v){let P=function(){$.dispose(),n.delete(u),u.removeEventListener("dispose",P)};var y=P;_!==void 0&&_.texture.dispose();const E=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,m=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],R=u.morphAttributes.color||[];let N=0;E===!0&&(N=1),b===!0&&(N=2),x===!0&&(N=3);let q=u.attributes.position.count*N,z=1;q>e.maxTextureSize&&(z=Math.ceil(q/e.maxTextureSize),q=e.maxTextureSize);const l=new Float32Array(q*z*4*v),$=new Hc(l,q,z,v);$.type=cn,$.needsUpdate=!0;const I=N*4;for(let V=0;V<v;V++){const ce=m[V],Y=L[V],pe=R[V],me=q*z*4*V;for(let le=0;le<ce.count;le++){const de=le*I;E===!0&&(r.fromBufferAttribute(ce,le),l[me+de+0]=r.x,l[me+de+1]=r.y,l[me+de+2]=r.z,l[me+de+3]=0),b===!0&&(r.fromBufferAttribute(Y,le),l[me+de+4]=r.x,l[me+de+5]=r.y,l[me+de+6]=r.z,l[me+de+7]=0),x===!0&&(r.fromBufferAttribute(pe,le),l[me+de+8]=r.x,l[me+de+9]=r.y,l[me+de+10]=r.z,l[me+de+11]=pe.itemSize===4?r.w:1)}}_={count:v,texture:$,size:new lt(q,z)},n.set(u,_),u.addEventListener("dispose",P)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let E=0;for(let x=0;x<d.length;x++)E+=d[x];const b=u.morphTargetsRelative?1:1-E;f.getUniforms().setValue(i,"morphTargetBaseInfluence",b),f.getUniforms().setValue(i,"morphTargetInfluences",d)}f.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:a}}function xm(i,e,t,n){let r=new WeakMap;function a(f){const d=n.render.frame,g=f.geometry,v=e.get(f,g);if(r.get(v)!==d&&(e.update(v),r.set(v,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),r.get(f)!==d&&(t.update(f.instanceMatrix,i.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,i.ARRAY_BUFFER),r.set(f,d))),f.isSkinnedMesh){const _=f.skeleton;r.get(_)!==d&&(_.update(),r.set(_,d))}return v}function c(){r=new WeakMap}function u(f){const d=f.target;d.removeEventListener("dispose",u),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:c}}class Jc extends mn{constructor(e,t,n,r,a,c,u,f,d,g=xr){if(g!==xr&&g!==br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&g===xr&&(n=Hi),n===void 0&&g===br&&(n=Er),super(null,r,a,c,u,f,g,n,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:en,this.minFilter=f!==void 0?f:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Qc=new mn,Xl=new Jc(1,1),eu=new Hc,tu=new sf,nu=new Yc,ql=[],jl=[],Yl=new Float32Array(16),$l=new Float32Array(9),Kl=new Float32Array(4);function Rr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=ql[r];if(a===void 0&&(a=new Float32Array(r),ql[r]=a),e!==0){n.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,i[c].toArray(a,u)}return a}function $t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function sa(i,e){let t=jl[e];t===void 0&&(t=new Int32Array(e),jl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ym(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Mm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2fv(this.addr,e),Kt(t,e)}}function Sm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;i.uniform3fv(this.addr,e),Kt(t,e)}}function Em(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4fv(this.addr,e),Kt(t,e)}}function bm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,n))return;Kl.set(n),i.uniformMatrix2fv(this.addr,!1,Kl),Kt(t,n)}}function Tm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,n))return;$l.set(n),i.uniformMatrix3fv(this.addr,!1,$l),Kt(t,n)}}function Am(i,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,n))return;Yl.set(n),i.uniformMatrix4fv(this.addr,!1,Yl),Kt(t,n)}}function wm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Cm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2iv(this.addr,e),Kt(t,e)}}function Rm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3iv(this.addr,e),Kt(t,e)}}function Pm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4iv(this.addr,e),Kt(t,e)}}function Lm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2uiv(this.addr,e),Kt(t,e)}}function Im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3uiv(this.addr,e),Kt(t,e)}}function Um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4uiv(this.addr,e),Kt(t,e)}}function Nm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(Xl.compareFunction=Bc,a=Xl):a=Qc,t.setTexture2D(e||a,r)}function Fm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||tu,r)}function Om(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||nu,r)}function Bm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||eu,r)}function zm(i){switch(i){case 5126:return ym;case 35664:return Mm;case 35665:return Sm;case 35666:return Em;case 35674:return bm;case 35675:return Tm;case 35676:return Am;case 5124:case 35670:return wm;case 35667:case 35671:return Cm;case 35668:case 35672:return Rm;case 35669:case 35673:return Pm;case 5125:return Lm;case 36294:return Dm;case 36295:return Im;case 36296:return Um;case 35678:case 36198:case 36298:case 36306:case 35682:return Nm;case 35679:case 36299:case 36307:return Fm;case 35680:case 36300:case 36308:case 36293:return Om;case 36289:case 36303:case 36311:case 36292:return Bm}}function km(i,e){i.uniform1fv(this.addr,e)}function Hm(i,e){const t=Rr(e,this.size,2);i.uniform2fv(this.addr,t)}function Vm(i,e){const t=Rr(e,this.size,3);i.uniform3fv(this.addr,t)}function Gm(i,e){const t=Rr(e,this.size,4);i.uniform4fv(this.addr,t)}function Wm(i,e){const t=Rr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Xm(i,e){const t=Rr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function qm(i,e){const t=Rr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function jm(i,e){i.uniform1iv(this.addr,e)}function Ym(i,e){i.uniform2iv(this.addr,e)}function $m(i,e){i.uniform3iv(this.addr,e)}function Km(i,e){i.uniform4iv(this.addr,e)}function Zm(i,e){i.uniform1uiv(this.addr,e)}function Jm(i,e){i.uniform2uiv(this.addr,e)}function Qm(i,e){i.uniform3uiv(this.addr,e)}function eg(i,e){i.uniform4uiv(this.addr,e)}function tg(i,e,t){const n=this.cache,r=e.length,a=sa(t,r);$t(n,a)||(i.uniform1iv(this.addr,a),Kt(n,a));for(let c=0;c!==r;++c)t.setTexture2D(e[c]||Qc,a[c])}function ng(i,e,t){const n=this.cache,r=e.length,a=sa(t,r);$t(n,a)||(i.uniform1iv(this.addr,a),Kt(n,a));for(let c=0;c!==r;++c)t.setTexture3D(e[c]||tu,a[c])}function ig(i,e,t){const n=this.cache,r=e.length,a=sa(t,r);$t(n,a)||(i.uniform1iv(this.addr,a),Kt(n,a));for(let c=0;c!==r;++c)t.setTextureCube(e[c]||nu,a[c])}function rg(i,e,t){const n=this.cache,r=e.length,a=sa(t,r);$t(n,a)||(i.uniform1iv(this.addr,a),Kt(n,a));for(let c=0;c!==r;++c)t.setTexture2DArray(e[c]||eu,a[c])}function sg(i){switch(i){case 5126:return km;case 35664:return Hm;case 35665:return Vm;case 35666:return Gm;case 35674:return Wm;case 35675:return Xm;case 35676:return qm;case 5124:case 35670:return jm;case 35667:case 35671:return Ym;case 35668:case 35672:return $m;case 35669:case 35673:return Km;case 5125:return Zm;case 36294:return Jm;case 36295:return Qm;case 36296:return eg;case 35678:case 36198:case 36298:case 36306:case 35682:return tg;case 35679:case 36299:case 36307:return ng;case 35680:case 36300:case 36308:case 36293:return ig;case 36289:case 36303:case 36311:case 36292:return rg}}class ag{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zm(t.type)}}class og{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sg(t.type)}}class lg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,c=r.length;a!==c;++a){const u=r[a];u.setValue(e,t[u.id],n)}}}const ja=/(\w+)(\])?(\[|\.)?/g;function Zl(i,e){i.seq.push(e),i.map[e.id]=e}function cg(i,e,t){const n=i.name,r=n.length;for(ja.lastIndex=0;;){const a=ja.exec(n),c=ja.lastIndex;let u=a[1];const f=a[2]==="]",d=a[3];if(f&&(u=u|0),d===void 0||d==="["&&c+2===r){Zl(t,d===void 0?new ag(u,i,e):new og(u,i,e));break}else{let v=t.map[u];v===void 0&&(v=new lg(u),Zl(t,v)),t=v}}}class Xs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),c=e.getUniformLocation(t,a.name);cg(a,c,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,c=t.length;a!==c;++a){const u=t[a],f=n[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const c=e[r];c.id in t&&n.push(c)}return n}}function Jl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ug=37297;let hg=0;function fg(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=r;c<a;c++){const u=c+1;n.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return n.join(`
`)}function dg(i){const e=Ct.getPrimaries(Ct.workingColorSpace),t=Ct.getPrimaries(i);let n;switch(e===t?n="":e===$s&&t===Ys?n="LinearDisplayP3ToLinearSRGB":e===Ys&&t===$s&&(n="LinearSRGBToLinearDisplayP3"),i){case Ai:case na:return[n,"LinearTransferOETF"];case Xn:case qo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ql(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+fg(i.getShaderSource(e),c)}else return r}function pg(i,e){const t=dg(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function mg(i,e){let t;switch(e){case gh:t="Linear";break;case _h:t="Reinhard";break;case vh:t="OptimizedCineon";break;case xh:t="ACESFilmic";break;case Mh:t="AgX";break;case Sh:t="Neutral";break;case yh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Is=new j;function gg(){Ct.getLuminanceCoefficients(Is);const i=Is.x.toFixed(4),e=Is.y.toFixed(4),t=Is.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _g(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function vg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),c=a.name;let u=1;a.type===i.FLOAT_MAT2&&(u=2),a.type===i.FLOAT_MAT3&&(u=3),a.type===i.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:i.getAttribLocation(e,c),locationSize:u}}return t}function Wr(i){return i!==""}function ec(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yg=/^[ \t]*#include +<([\w\d./]+)>/gm;function No(i){return i.replace(yg,Sg)}const Mg=new Map;function Sg(i,e){let t=ut[e];if(t===void 0){const n=Mg.get(e);if(n!==void 0)t=ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return No(t)}const Eg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nc(i){return i.replace(Eg,bg)}function bg(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function ic(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Tg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ac?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Vu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function Ag(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Mr:case Sr:e="ENVMAP_TYPE_CUBE";break;case ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Sr:e="ENVMAP_MODE_REFRACTION";break}return e}function Cg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case zo:e="ENVMAP_BLENDING_MULTIPLY";break;case ph:e="ENVMAP_BLENDING_MIX";break;case mh:e="ENVMAP_BLENDING_ADD";break}return e}function Rg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Pg(i,e,t,n){const r=i.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const f=Tg(t),d=Ag(t),g=wg(t),v=Cg(t),_=Rg(t),y=_g(t),E=vg(a),b=r.createProgram();let x,m,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Wr).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Wr).join(`
`),m.length>0&&(m+=`
`)):(x=[ic(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),m=[ic(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?ut.tonemapping_pars_fragment:"",t.toneMapping!==Ei?mg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,pg("linearToOutputTexel",t.outputColorSpace),gg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wr).join(`
`)),c=No(c),c=ec(c,t),c=tc(c,t),u=No(u),u=ec(u,t),u=tc(u,t),c=nc(c),u=nc(u),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===Uo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const R=L+x+c,N=L+m+u,q=Jl(r,r.VERTEX_SHADER,R),z=Jl(r,r.FRAGMENT_SHADER,N);r.attachShader(b,q),r.attachShader(b,z),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function l(V){if(i.debug.checkShaderErrors){const ce=r.getProgramInfoLog(b).trim(),Y=r.getShaderInfoLog(q).trim(),pe=r.getShaderInfoLog(z).trim();let me=!0,le=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(me=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,q,z);else{const de=Ql(r,q,"vertex"),oe=Ql(r,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ce+`
`+de+`
`+oe)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(Y===""||pe==="")&&(le=!1);le&&(V.diagnostics={runnable:me,programLog:ce,vertexShader:{log:Y,prefix:x},fragmentShader:{log:pe,prefix:m}})}r.deleteShader(q),r.deleteShader(z),$=new Xs(r,b),I=xg(r,b)}let $;this.getUniforms=function(){return $===void 0&&l(this),$};let I;this.getAttributes=function(){return I===void 0&&l(this),I};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(b,ug)),P},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hg++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=q,this.fragmentShader=z,this}let Lg=0;class Dg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(r)===!1&&(c.add(r),r.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ig(e),t.set(e,n)),n}}class Ig{constructor(e){this.id=Lg++,this.code=e,this.usedTimes=0}}function Ug(i,e,t,n,r,a,c){const u=new Vc,f=new Dg,d=new Set,g=[],v=r.logarithmicDepthBuffer,_=r.vertexTextures;let y=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(I){return d.add(I),I===0?"uv":`uv${I}`}function x(I,P,V,ce,Y){const pe=ce.fog,me=Y.geometry,le=I.isMeshStandardMaterial?ce.environment:null,de=(I.isMeshStandardMaterial?t:e).get(I.envMap||le),oe=de&&de.mapping===ta?de.image.height:null,be=E[I.type];I.precision!==null&&(y=r.getMaxPrecision(I.precision),y!==I.precision&&console.warn("THREE.WebGLProgram.getParameters:",I.precision,"not supported, using",y,"instead."));const De=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,Be=De!==void 0?De.length:0;let ft=0;me.morphAttributes.position!==void 0&&(ft=1),me.morphAttributes.normal!==void 0&&(ft=2),me.morphAttributes.color!==void 0&&(ft=3);let vt,fe,ye,Oe;if(be){const dt=qn[be];vt=dt.vertexShader,fe=dt.fragmentShader}else vt=I.vertexShader,fe=I.fragmentShader,f.update(I),ye=f.getVertexShaderID(I),Oe=f.getFragmentShaderID(I);const Ue=i.getRenderTarget(),it=Y.isInstancedMesh===!0,at=Y.isBatchedMesh===!0,$e=!!I.map,Lt=!!I.matcap,k=!!de,Dt=!!I.aoMap,xt=!!I.lightMap,Et=!!I.bumpMap,ke=!!I.normalMap,It=!!I.displacementMap,Xe=!!I.emissiveMap,tt=!!I.metalnessMap,O=!!I.roughnessMap,w=I.anisotropy>0,ee=I.clearcoat>0,ge=I.dispersion>0,ve=I.iridescence>0,K=I.sheen>0,Ne=I.transmission>0,Te=w&&!!I.anisotropyMap,Ie=ee&&!!I.clearcoatMap,rt=ee&&!!I.clearcoatNormalMap,Me=ee&&!!I.clearcoatRoughnessMap,Ce=ve&&!!I.iridescenceMap,ot=ve&&!!I.iridescenceThicknessMap,We=K&&!!I.sheenColorMap,we=K&&!!I.sheenRoughnessMap,qe=!!I.specularMap,et=!!I.specularColorMap,Rt=!!I.specularIntensityMap,T=Ne&&!!I.transmissionMap,J=Ne&&!!I.thicknessMap,te=!!I.gradientMap,se=!!I.alphaMap,_e=I.alphaTest>0,Ve=!!I.alphaHash,Ze=!!I.extensions;let yt=Ei;I.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(yt=i.toneMapping);const Mt={shaderID:be,shaderType:I.type,shaderName:I.name,vertexShader:vt,fragmentShader:fe,defines:I.defines,customVertexShaderID:ye,customFragmentShaderID:Oe,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:y,batching:at,batchingColor:at&&Y._colorsTexture!==null,instancing:it,instancingColor:it&&Y.instanceColor!==null,instancingMorph:it&&Y.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:Ue===null?i.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:Ai,alphaToCoverage:!!I.alphaToCoverage,map:$e,matcap:Lt,envMap:k,envMapMode:k&&de.mapping,envMapCubeUVHeight:oe,aoMap:Dt,lightMap:xt,bumpMap:Et,normalMap:ke,displacementMap:_&&It,emissiveMap:Xe,normalMapObjectSpace:ke&&I.normalMapType===Ah,normalMapTangentSpace:ke&&I.normalMapType===Oc,metalnessMap:tt,roughnessMap:O,anisotropy:w,anisotropyMap:Te,clearcoat:ee,clearcoatMap:Ie,clearcoatNormalMap:rt,clearcoatRoughnessMap:Me,dispersion:ge,iridescence:ve,iridescenceMap:Ce,iridescenceThicknessMap:ot,sheen:K,sheenColorMap:We,sheenRoughnessMap:we,specularMap:qe,specularColorMap:et,specularIntensityMap:Rt,transmission:Ne,transmissionMap:T,thicknessMap:J,gradientMap:te,opaque:I.transparent===!1&&I.blending===vr&&I.alphaToCoverage===!1,alphaMap:se,alphaTest:_e,alphaHash:Ve,combine:I.combine,mapUv:$e&&b(I.map.channel),aoMapUv:Dt&&b(I.aoMap.channel),lightMapUv:xt&&b(I.lightMap.channel),bumpMapUv:Et&&b(I.bumpMap.channel),normalMapUv:ke&&b(I.normalMap.channel),displacementMapUv:It&&b(I.displacementMap.channel),emissiveMapUv:Xe&&b(I.emissiveMap.channel),metalnessMapUv:tt&&b(I.metalnessMap.channel),roughnessMapUv:O&&b(I.roughnessMap.channel),anisotropyMapUv:Te&&b(I.anisotropyMap.channel),clearcoatMapUv:Ie&&b(I.clearcoatMap.channel),clearcoatNormalMapUv:rt&&b(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&b(I.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&b(I.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&b(I.iridescenceThicknessMap.channel),sheenColorMapUv:We&&b(I.sheenColorMap.channel),sheenRoughnessMapUv:we&&b(I.sheenRoughnessMap.channel),specularMapUv:qe&&b(I.specularMap.channel),specularColorMapUv:et&&b(I.specularColorMap.channel),specularIntensityMapUv:Rt&&b(I.specularIntensityMap.channel),transmissionMapUv:T&&b(I.transmissionMap.channel),thicknessMapUv:J&&b(I.thicknessMap.channel),alphaMapUv:se&&b(I.alphaMap.channel),vertexTangents:!!me.attributes.tangent&&(ke||w),vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!me.attributes.uv&&($e||se),fog:!!pe,useFog:I.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:I.flatShading===!0,sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:Y.isSkinnedMesh===!0,morphTargets:me.morphAttributes.position!==void 0,morphNormals:me.morphAttributes.normal!==void 0,morphColors:me.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:ft,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:I.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:yt,decodeVideoTexture:$e&&I.map.isVideoTexture===!0&&Ct.getTransfer(I.map.colorSpace)===Ot,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===ai,flipSided:I.side===xn,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:Ze&&I.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&I.extensions.multiDraw===!0||at)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return Mt.vertexUv1s=d.has(1),Mt.vertexUv2s=d.has(2),Mt.vertexUv3s=d.has(3),d.clear(),Mt}function m(I){const P=[];if(I.shaderID?P.push(I.shaderID):(P.push(I.customVertexShaderID),P.push(I.customFragmentShaderID)),I.defines!==void 0)for(const V in I.defines)P.push(V),P.push(I.defines[V]);return I.isRawShaderMaterial===!1&&(L(P,I),R(P,I),P.push(i.outputColorSpace)),P.push(I.customProgramCacheKey),P.join()}function L(I,P){I.push(P.precision),I.push(P.outputColorSpace),I.push(P.envMapMode),I.push(P.envMapCubeUVHeight),I.push(P.mapUv),I.push(P.alphaMapUv),I.push(P.lightMapUv),I.push(P.aoMapUv),I.push(P.bumpMapUv),I.push(P.normalMapUv),I.push(P.displacementMapUv),I.push(P.emissiveMapUv),I.push(P.metalnessMapUv),I.push(P.roughnessMapUv),I.push(P.anisotropyMapUv),I.push(P.clearcoatMapUv),I.push(P.clearcoatNormalMapUv),I.push(P.clearcoatRoughnessMapUv),I.push(P.iridescenceMapUv),I.push(P.iridescenceThicknessMapUv),I.push(P.sheenColorMapUv),I.push(P.sheenRoughnessMapUv),I.push(P.specularMapUv),I.push(P.specularColorMapUv),I.push(P.specularIntensityMapUv),I.push(P.transmissionMapUv),I.push(P.thicknessMapUv),I.push(P.combine),I.push(P.fogExp2),I.push(P.sizeAttenuation),I.push(P.morphTargetsCount),I.push(P.morphAttributeCount),I.push(P.numDirLights),I.push(P.numPointLights),I.push(P.numSpotLights),I.push(P.numSpotLightMaps),I.push(P.numHemiLights),I.push(P.numRectAreaLights),I.push(P.numDirLightShadows),I.push(P.numPointLightShadows),I.push(P.numSpotLightShadows),I.push(P.numSpotLightShadowsWithMaps),I.push(P.numLightProbes),I.push(P.shadowMapType),I.push(P.toneMapping),I.push(P.numClippingPlanes),I.push(P.numClipIntersection),I.push(P.depthPacking)}function R(I,P){u.disableAll(),P.supportsVertexTextures&&u.enable(0),P.instancing&&u.enable(1),P.instancingColor&&u.enable(2),P.instancingMorph&&u.enable(3),P.matcap&&u.enable(4),P.envMap&&u.enable(5),P.normalMapObjectSpace&&u.enable(6),P.normalMapTangentSpace&&u.enable(7),P.clearcoat&&u.enable(8),P.iridescence&&u.enable(9),P.alphaTest&&u.enable(10),P.vertexColors&&u.enable(11),P.vertexAlphas&&u.enable(12),P.vertexUv1s&&u.enable(13),P.vertexUv2s&&u.enable(14),P.vertexUv3s&&u.enable(15),P.vertexTangents&&u.enable(16),P.anisotropy&&u.enable(17),P.alphaHash&&u.enable(18),P.batching&&u.enable(19),P.dispersion&&u.enable(20),P.batchingColor&&u.enable(21),I.push(u.mask),u.disableAll(),P.fog&&u.enable(0),P.useFog&&u.enable(1),P.flatShading&&u.enable(2),P.logarithmicDepthBuffer&&u.enable(3),P.skinning&&u.enable(4),P.morphTargets&&u.enable(5),P.morphNormals&&u.enable(6),P.morphColors&&u.enable(7),P.premultipliedAlpha&&u.enable(8),P.shadowMapEnabled&&u.enable(9),P.doubleSided&&u.enable(10),P.flipSided&&u.enable(11),P.useDepthPacking&&u.enable(12),P.dithering&&u.enable(13),P.transmission&&u.enable(14),P.sheen&&u.enable(15),P.opaque&&u.enable(16),P.pointsUvs&&u.enable(17),P.decodeVideoTexture&&u.enable(18),P.alphaToCoverage&&u.enable(19),I.push(u.mask)}function N(I){const P=E[I.type];let V;if(P){const ce=qn[P];V=_f.clone(ce.uniforms)}else V=I.uniforms;return V}function q(I,P){let V;for(let ce=0,Y=g.length;ce<Y;ce++){const pe=g[ce];if(pe.cacheKey===P){V=pe,++V.usedTimes;break}}return V===void 0&&(V=new Pg(i,P,I,a),g.push(V)),V}function z(I){if(--I.usedTimes===0){const P=g.indexOf(I);g[P]=g[g.length-1],g.pop(),I.destroy()}}function l(I){f.remove(I)}function $(){f.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:N,acquireProgram:q,releaseProgram:z,releaseShaderCache:l,programs:g,dispose:$}}function Ng(){let i=new WeakMap;function e(a){let c=i.get(a);return c===void 0&&(c={},i.set(a,c)),c}function t(a){i.delete(a)}function n(a,c,u){i.get(a)[c]=u}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Fg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function rc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function sc(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function c(v,_,y,E,b,x){let m=i[e];return m===void 0?(m={id:v.id,object:v,geometry:_,material:y,groupOrder:E,renderOrder:v.renderOrder,z:b,group:x},i[e]=m):(m.id=v.id,m.object=v,m.geometry=_,m.material=y,m.groupOrder=E,m.renderOrder=v.renderOrder,m.z=b,m.group=x),e++,m}function u(v,_,y,E,b,x){const m=c(v,_,y,E,b,x);y.transmission>0?n.push(m):y.transparent===!0?r.push(m):t.push(m)}function f(v,_,y,E,b,x){const m=c(v,_,y,E,b,x);y.transmission>0?n.unshift(m):y.transparent===!0?r.unshift(m):t.unshift(m)}function d(v,_){t.length>1&&t.sort(v||Fg),n.length>1&&n.sort(_||rc),r.length>1&&r.sort(_||rc)}function g(){for(let v=e,_=i.length;v<_;v++){const y=i[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:u,unshift:f,finish:g,sort:d}}function Og(){let i=new WeakMap;function e(n,r){const a=i.get(n);let c;return a===void 0?(c=new sc,i.set(n,[c])):r>=a.length?(c=new sc,a.push(c)):c=a[r],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function Bg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new _t};break;case"SpotLight":t={position:new j,direction:new j,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new j,halfWidth:new j,halfHeight:new j};break}return i[e.id]=t,t}}}function zg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let kg=0;function Hg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Vg(i){const e=new Bg,t=zg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new j);const r=new j,a=new Xt,c=new Xt;function u(d){let g=0,v=0,_=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let y=0,E=0,b=0,x=0,m=0,L=0,R=0,N=0,q=0,z=0,l=0;d.sort(Hg);for(let I=0,P=d.length;I<P;I++){const V=d[I],ce=V.color,Y=V.intensity,pe=V.distance,me=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=ce.r*Y,v+=ce.g*Y,_+=ce.b*Y;else if(V.isLightProbe){for(let le=0;le<9;le++)n.probe[le].addScaledVector(V.sh.coefficients[le],Y);l++}else if(V.isDirectionalLight){const le=e.get(V);if(le.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const de=V.shadow,oe=t.get(V);oe.shadowIntensity=de.intensity,oe.shadowBias=de.bias,oe.shadowNormalBias=de.normalBias,oe.shadowRadius=de.radius,oe.shadowMapSize=de.mapSize,n.directionalShadow[y]=oe,n.directionalShadowMap[y]=me,n.directionalShadowMatrix[y]=V.shadow.matrix,L++}n.directional[y]=le,y++}else if(V.isSpotLight){const le=e.get(V);le.position.setFromMatrixPosition(V.matrixWorld),le.color.copy(ce).multiplyScalar(Y),le.distance=pe,le.coneCos=Math.cos(V.angle),le.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),le.decay=V.decay,n.spot[b]=le;const de=V.shadow;if(V.map&&(n.spotLightMap[q]=V.map,q++,de.updateMatrices(V),V.castShadow&&z++),n.spotLightMatrix[b]=de.matrix,V.castShadow){const oe=t.get(V);oe.shadowIntensity=de.intensity,oe.shadowBias=de.bias,oe.shadowNormalBias=de.normalBias,oe.shadowRadius=de.radius,oe.shadowMapSize=de.mapSize,n.spotShadow[b]=oe,n.spotShadowMap[b]=me,N++}b++}else if(V.isRectAreaLight){const le=e.get(V);le.color.copy(ce).multiplyScalar(Y),le.halfWidth.set(V.width*.5,0,0),le.halfHeight.set(0,V.height*.5,0),n.rectArea[x]=le,x++}else if(V.isPointLight){const le=e.get(V);if(le.color.copy(V.color).multiplyScalar(V.intensity),le.distance=V.distance,le.decay=V.decay,V.castShadow){const de=V.shadow,oe=t.get(V);oe.shadowIntensity=de.intensity,oe.shadowBias=de.bias,oe.shadowNormalBias=de.normalBias,oe.shadowRadius=de.radius,oe.shadowMapSize=de.mapSize,oe.shadowCameraNear=de.camera.near,oe.shadowCameraFar=de.camera.far,n.pointShadow[E]=oe,n.pointShadowMap[E]=me,n.pointShadowMatrix[E]=V.shadow.matrix,R++}n.point[E]=le,E++}else if(V.isHemisphereLight){const le=e.get(V);le.skyColor.copy(V.color).multiplyScalar(Y),le.groundColor.copy(V.groundColor).multiplyScalar(Y),n.hemi[m]=le,m++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=g,n.ambient[1]=v,n.ambient[2]=_;const $=n.hash;($.directionalLength!==y||$.pointLength!==E||$.spotLength!==b||$.rectAreaLength!==x||$.hemiLength!==m||$.numDirectionalShadows!==L||$.numPointShadows!==R||$.numSpotShadows!==N||$.numSpotMaps!==q||$.numLightProbes!==l)&&(n.directional.length=y,n.spot.length=b,n.rectArea.length=x,n.point.length=E,n.hemi.length=m,n.directionalShadow.length=L,n.directionalShadowMap.length=L,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=N,n.spotShadowMap.length=N,n.directionalShadowMatrix.length=L,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=N+q-z,n.spotLightMap.length=q,n.numSpotLightShadowsWithMaps=z,n.numLightProbes=l,$.directionalLength=y,$.pointLength=E,$.spotLength=b,$.rectAreaLength=x,$.hemiLength=m,$.numDirectionalShadows=L,$.numPointShadows=R,$.numSpotShadows=N,$.numSpotMaps=q,$.numLightProbes=l,n.version=kg++)}function f(d,g){let v=0,_=0,y=0,E=0,b=0;const x=g.matrixWorldInverse;for(let m=0,L=d.length;m<L;m++){const R=d[m];if(R.isDirectionalLight){const N=n.directional[v];N.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(x),v++}else if(R.isSpotLight){const N=n.spot[y];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(x),N.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(x),y++}else if(R.isRectAreaLight){const N=n.rectArea[E];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(x),c.identity(),a.copy(R.matrixWorld),a.premultiply(x),c.extractRotation(a),N.halfWidth.set(R.width*.5,0,0),N.halfHeight.set(0,R.height*.5,0),N.halfWidth.applyMatrix4(c),N.halfHeight.applyMatrix4(c),E++}else if(R.isPointLight){const N=n.point[_];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(x),_++}else if(R.isHemisphereLight){const N=n.hemi[b];N.direction.setFromMatrixPosition(R.matrixWorld),N.direction.transformDirection(x),b++}}}return{setup:u,setupView:f,state:n}}function ac(i){const e=new Vg(i),t=[],n=[];function r(g){d.camera=g,t.length=0,n.length=0}function a(g){t.push(g)}function c(g){n.push(g)}function u(){e.setup(t)}function f(g){e.setupView(t,g)}const d={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:u,setupLightsView:f,pushLight:a,pushShadow:c}}function Gg(i){let e=new WeakMap;function t(r,a=0){const c=e.get(r);let u;return c===void 0?(u=new ac(i),e.set(r,[u])):a>=c.length?(u=new ac(i),c.push(u)):u=c[a],u}function n(){e=new WeakMap}return{get:t,dispose:n}}class Wg extends ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xg extends ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Yg(i,e,t){let n=new $c;const r=new lt,a=new lt,c=new Qt,u=new Wg({depthPacking:Th}),f=new Xg,d={},g=t.maxTextureSize,v={[bi]:xn,[xn]:bi,[ai]:ai},_=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:qg,fragmentShader:jg}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const E=new yn;E.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Pn(E,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ac;let m=this.type;this.render=function(z,l,$){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||z.length===0)return;const I=i.getRenderTarget(),P=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),ce=i.state;ce.setBlending(Si),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const Y=m!==si&&this.type===si,pe=m===si&&this.type!==si;for(let me=0,le=z.length;me<le;me++){const de=z[me],oe=de.shadow;if(oe===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(oe.autoUpdate===!1&&oe.needsUpdate===!1)continue;r.copy(oe.mapSize);const be=oe.getFrameExtents();if(r.multiply(be),a.copy(oe.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(a.x=Math.floor(g/be.x),r.x=a.x*be.x,oe.mapSize.x=a.x),r.y>g&&(a.y=Math.floor(g/be.y),r.y=a.y*be.y,oe.mapSize.y=a.y)),oe.map===null||Y===!0||pe===!0){const Be=this.type!==si?{minFilter:en,magFilter:en}:{};oe.map!==null&&oe.map.dispose(),oe.map=new Ti(r.x,r.y,Be),oe.map.texture.name=de.name+".shadowMap",oe.camera.updateProjectionMatrix()}i.setRenderTarget(oe.map),i.clear();const De=oe.getViewportCount();for(let Be=0;Be<De;Be++){const ft=oe.getViewport(Be);c.set(a.x*ft.x,a.y*ft.y,a.x*ft.z,a.y*ft.w),ce.viewport(c),oe.updateMatrices(de,Be),n=oe.getFrustum(),N(l,$,oe.camera,de,this.type)}oe.isPointLightShadow!==!0&&this.type===si&&L(oe,$),oe.needsUpdate=!1}m=this.type,x.needsUpdate=!1,i.setRenderTarget(I,P,V)};function L(z,l){const $=e.update(b);_.defines.VSM_SAMPLES!==z.blurSamples&&(_.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Ti(r.x,r.y)),_.uniforms.shadow_pass.value=z.map.texture,_.uniforms.resolution.value=z.mapSize,_.uniforms.radius.value=z.radius,i.setRenderTarget(z.mapPass),i.clear(),i.renderBufferDirect(l,null,$,_,b,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,i.setRenderTarget(z.map),i.clear(),i.renderBufferDirect(l,null,$,y,b,null)}function R(z,l,$,I){let P=null;const V=$.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(V!==void 0)P=V;else if(P=$.isPointLight===!0?f:u,i.localClippingEnabled&&l.clipShadows===!0&&Array.isArray(l.clippingPlanes)&&l.clippingPlanes.length!==0||l.displacementMap&&l.displacementScale!==0||l.alphaMap&&l.alphaTest>0||l.map&&l.alphaTest>0){const ce=P.uuid,Y=l.uuid;let pe=d[ce];pe===void 0&&(pe={},d[ce]=pe);let me=pe[Y];me===void 0&&(me=P.clone(),pe[Y]=me,l.addEventListener("dispose",q)),P=me}if(P.visible=l.visible,P.wireframe=l.wireframe,I===si?P.side=l.shadowSide!==null?l.shadowSide:l.side:P.side=l.shadowSide!==null?l.shadowSide:v[l.side],P.alphaMap=l.alphaMap,P.alphaTest=l.alphaTest,P.map=l.map,P.clipShadows=l.clipShadows,P.clippingPlanes=l.clippingPlanes,P.clipIntersection=l.clipIntersection,P.displacementMap=l.displacementMap,P.displacementScale=l.displacementScale,P.displacementBias=l.displacementBias,P.wireframeLinewidth=l.wireframeLinewidth,P.linewidth=l.linewidth,$.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const ce=i.properties.get(P);ce.light=$}return P}function N(z,l,$,I,P){if(z.visible===!1)return;if(z.layers.test(l.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&P===si)&&(!z.frustumCulled||n.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,z.matrixWorld);const Y=e.update(z),pe=z.material;if(Array.isArray(pe)){const me=Y.groups;for(let le=0,de=me.length;le<de;le++){const oe=me[le],be=pe[oe.materialIndex];if(be&&be.visible){const De=R(z,be,I,P);z.onBeforeShadow(i,z,l,$,Y,De,oe),i.renderBufferDirect($,null,Y,De,z,oe),z.onAfterShadow(i,z,l,$,Y,De,oe)}}}else if(pe.visible){const me=R(z,pe,I,P);z.onBeforeShadow(i,z,l,$,Y,me,null),i.renderBufferDirect($,null,Y,me,z,null),z.onAfterShadow(i,z,l,$,Y,me,null)}}const ce=z.children;for(let Y=0,pe=ce.length;Y<pe;Y++)N(ce[Y],l,$,I,P)}function q(z){z.target.removeEventListener("dispose",q);for(const $ in d){const I=d[$],P=z.target.uuid;P in I&&(I[P].dispose(),delete I[P])}}}function $g(i){function e(){let T=!1;const J=new Qt;let te=null;const se=new Qt(0,0,0,0);return{setMask:function(_e){te!==_e&&!T&&(i.colorMask(_e,_e,_e,_e),te=_e)},setLocked:function(_e){T=_e},setClear:function(_e,Ve,Ze,yt,Mt){Mt===!0&&(_e*=yt,Ve*=yt,Ze*=yt),J.set(_e,Ve,Ze,yt),se.equals(J)===!1&&(i.clearColor(_e,Ve,Ze,yt),se.copy(J))},reset:function(){T=!1,te=null,se.set(-1,0,0,0)}}}function t(){let T=!1,J=null,te=null,se=null;return{setTest:function(_e){_e?Oe(i.DEPTH_TEST):Ue(i.DEPTH_TEST)},setMask:function(_e){J!==_e&&!T&&(i.depthMask(_e),J=_e)},setFunc:function(_e){if(te!==_e){switch(_e){case oh:i.depthFunc(i.NEVER);break;case lh:i.depthFunc(i.ALWAYS);break;case ch:i.depthFunc(i.LESS);break;case qs:i.depthFunc(i.LEQUAL);break;case uh:i.depthFunc(i.EQUAL);break;case hh:i.depthFunc(i.GEQUAL);break;case fh:i.depthFunc(i.GREATER);break;case dh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}te=_e}},setLocked:function(_e){T=_e},setClear:function(_e){se!==_e&&(i.clearDepth(_e),se=_e)},reset:function(){T=!1,J=null,te=null,se=null}}}function n(){let T=!1,J=null,te=null,se=null,_e=null,Ve=null,Ze=null,yt=null,Mt=null;return{setTest:function(dt){T||(dt?Oe(i.STENCIL_TEST):Ue(i.STENCIL_TEST))},setMask:function(dt){J!==dt&&!T&&(i.stencilMask(dt),J=dt)},setFunc:function(dt,Gt,kt){(te!==dt||se!==Gt||_e!==kt)&&(i.stencilFunc(dt,Gt,kt),te=dt,se=Gt,_e=kt)},setOp:function(dt,Gt,kt){(Ve!==dt||Ze!==Gt||yt!==kt)&&(i.stencilOp(dt,Gt,kt),Ve=dt,Ze=Gt,yt=kt)},setLocked:function(dt){T=dt},setClear:function(dt){Mt!==dt&&(i.clearStencil(dt),Mt=dt)},reset:function(){T=!1,J=null,te=null,se=null,_e=null,Ve=null,Ze=null,yt=null,Mt=null}}}const r=new e,a=new t,c=new n,u=new WeakMap,f=new WeakMap;let d={},g={},v=new WeakMap,_=[],y=null,E=!1,b=null,x=null,m=null,L=null,R=null,N=null,q=null,z=new _t(0,0,0),l=0,$=!1,I=null,P=null,V=null,ce=null,Y=null;const pe=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let me=!1,le=0;const de=i.getParameter(i.VERSION);de.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(de)[1]),me=le>=1):de.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),me=le>=2);let oe=null,be={};const De=i.getParameter(i.SCISSOR_BOX),Be=i.getParameter(i.VIEWPORT),ft=new Qt().fromArray(De),vt=new Qt().fromArray(Be);function fe(T,J,te,se){const _e=new Uint8Array(4),Ve=i.createTexture();i.bindTexture(T,Ve),i.texParameteri(T,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(T,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ze=0;Ze<te;Ze++)T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY?i.texImage3D(J,0,i.RGBA,1,1,se,0,i.RGBA,i.UNSIGNED_BYTE,_e):i.texImage2D(J+Ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_e);return Ve}const ye={};ye[i.TEXTURE_2D]=fe(i.TEXTURE_2D,i.TEXTURE_2D,1),ye[i.TEXTURE_CUBE_MAP]=fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[i.TEXTURE_2D_ARRAY]=fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ye[i.TEXTURE_3D]=fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),c.setClear(0),Oe(i.DEPTH_TEST),a.setFunc(qs),Et(!1),ke(fl),Oe(i.CULL_FACE),Dt(Si);function Oe(T){d[T]!==!0&&(i.enable(T),d[T]=!0)}function Ue(T){d[T]!==!1&&(i.disable(T),d[T]=!1)}function it(T,J){return g[T]!==J?(i.bindFramebuffer(T,J),g[T]=J,T===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=J),T===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=J),!0):!1}function at(T,J){let te=_,se=!1;if(T){te=v.get(J),te===void 0&&(te=[],v.set(J,te));const _e=T.textures;if(te.length!==_e.length||te[0]!==i.COLOR_ATTACHMENT0){for(let Ve=0,Ze=_e.length;Ve<Ze;Ve++)te[Ve]=i.COLOR_ATTACHMENT0+Ve;te.length=_e.length,se=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,se=!0);se&&i.drawBuffers(te)}function $e(T){return y!==T?(i.useProgram(T),y=T,!0):!1}const Lt={[Bi]:i.FUNC_ADD,[Wu]:i.FUNC_SUBTRACT,[Xu]:i.FUNC_REVERSE_SUBTRACT};Lt[qu]=i.MIN,Lt[ju]=i.MAX;const k={[Yu]:i.ZERO,[$u]:i.ONE,[Ku]:i.SRC_COLOR,[to]:i.SRC_ALPHA,[nh]:i.SRC_ALPHA_SATURATE,[eh]:i.DST_COLOR,[Ju]:i.DST_ALPHA,[Zu]:i.ONE_MINUS_SRC_COLOR,[no]:i.ONE_MINUS_SRC_ALPHA,[th]:i.ONE_MINUS_DST_COLOR,[Qu]:i.ONE_MINUS_DST_ALPHA,[ih]:i.CONSTANT_COLOR,[rh]:i.ONE_MINUS_CONSTANT_COLOR,[sh]:i.CONSTANT_ALPHA,[ah]:i.ONE_MINUS_CONSTANT_ALPHA};function Dt(T,J,te,se,_e,Ve,Ze,yt,Mt,dt){if(T===Si){E===!0&&(Ue(i.BLEND),E=!1);return}if(E===!1&&(Oe(i.BLEND),E=!0),T!==Gu){if(T!==b||dt!==$){if((x!==Bi||R!==Bi)&&(i.blendEquation(i.FUNC_ADD),x=Bi,R=Bi),dt)switch(T){case vr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dl:i.blendFunc(i.ONE,i.ONE);break;case pl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ml:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case vr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case pl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ml:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}m=null,L=null,N=null,q=null,z.set(0,0,0),l=0,b=T,$=dt}return}_e=_e||J,Ve=Ve||te,Ze=Ze||se,(J!==x||_e!==R)&&(i.blendEquationSeparate(Lt[J],Lt[_e]),x=J,R=_e),(te!==m||se!==L||Ve!==N||Ze!==q)&&(i.blendFuncSeparate(k[te],k[se],k[Ve],k[Ze]),m=te,L=se,N=Ve,q=Ze),(yt.equals(z)===!1||Mt!==l)&&(i.blendColor(yt.r,yt.g,yt.b,Mt),z.copy(yt),l=Mt),b=T,$=!1}function xt(T,J){T.side===ai?Ue(i.CULL_FACE):Oe(i.CULL_FACE);let te=T.side===xn;J&&(te=!te),Et(te),T.blending===vr&&T.transparent===!1?Dt(Si):Dt(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),a.setFunc(T.depthFunc),a.setTest(T.depthTest),a.setMask(T.depthWrite),r.setMask(T.colorWrite);const se=T.stencilWrite;c.setTest(se),se&&(c.setMask(T.stencilWriteMask),c.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),c.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),Xe(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?Oe(i.SAMPLE_ALPHA_TO_COVERAGE):Ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function Et(T){I!==T&&(T?i.frontFace(i.CW):i.frontFace(i.CCW),I=T)}function ke(T){T!==ku?(Oe(i.CULL_FACE),T!==P&&(T===fl?i.cullFace(i.BACK):T===Hu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ue(i.CULL_FACE),P=T}function It(T){T!==V&&(me&&i.lineWidth(T),V=T)}function Xe(T,J,te){T?(Oe(i.POLYGON_OFFSET_FILL),(ce!==J||Y!==te)&&(i.polygonOffset(J,te),ce=J,Y=te)):Ue(i.POLYGON_OFFSET_FILL)}function tt(T){T?Oe(i.SCISSOR_TEST):Ue(i.SCISSOR_TEST)}function O(T){T===void 0&&(T=i.TEXTURE0+pe-1),oe!==T&&(i.activeTexture(T),oe=T)}function w(T,J,te){te===void 0&&(oe===null?te=i.TEXTURE0+pe-1:te=oe);let se=be[te];se===void 0&&(se={type:void 0,texture:void 0},be[te]=se),(se.type!==T||se.texture!==J)&&(oe!==te&&(i.activeTexture(te),oe=te),i.bindTexture(T,J||ye[T]),se.type=T,se.texture=J)}function ee(){const T=be[oe];T!==void 0&&T.type!==void 0&&(i.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function ge(){try{i.compressedTexImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ve(){try{i.compressedTexImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ne(){try{i.texSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Te(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ie(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function rt(){try{i.texStorage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Me(){try{i.texStorage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ce(){try{i.texImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ot(){try{i.texImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function We(T){ft.equals(T)===!1&&(i.scissor(T.x,T.y,T.z,T.w),ft.copy(T))}function we(T){vt.equals(T)===!1&&(i.viewport(T.x,T.y,T.z,T.w),vt.copy(T))}function qe(T,J){let te=f.get(J);te===void 0&&(te=new WeakMap,f.set(J,te));let se=te.get(T);se===void 0&&(se=i.getUniformBlockIndex(J,T.name),te.set(T,se))}function et(T,J){const se=f.get(J).get(T);u.get(J)!==se&&(i.uniformBlockBinding(J,se,T.__bindingPointIndex),u.set(J,se))}function Rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},oe=null,be={},g={},v=new WeakMap,_=[],y=null,E=!1,b=null,x=null,m=null,L=null,R=null,N=null,q=null,z=new _t(0,0,0),l=0,$=!1,I=null,P=null,V=null,ce=null,Y=null,ft.set(0,0,i.canvas.width,i.canvas.height),vt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),c.reset()}return{buffers:{color:r,depth:a,stencil:c},enable:Oe,disable:Ue,bindFramebuffer:it,drawBuffers:at,useProgram:$e,setBlending:Dt,setMaterial:xt,setFlipSided:Et,setCullFace:ke,setLineWidth:It,setPolygonOffset:Xe,setScissorTest:tt,activeTexture:O,bindTexture:w,unbindTexture:ee,compressedTexImage2D:ge,compressedTexImage3D:ve,texImage2D:Ce,texImage3D:ot,updateUBOMapping:qe,uniformBlockBinding:et,texStorage2D:rt,texStorage3D:Me,texSubImage2D:K,texSubImage3D:Ne,compressedTexSubImage2D:Te,compressedTexSubImage3D:Ie,scissor:We,viewport:we,reset:Rt}}function oc(i,e,t,n){const r=Kg(n);switch(t){case Lc:return i*e;case Ic:return i*e;case Uc:return i*e*2;case jr:return i*e/r.components*r.byteLength;case Go:return i*e/r.components*r.byteLength;case Nc:return i*e*2/r.components*r.byteLength;case Wo:return i*e*2/r.components*r.byteLength;case Dc:return i*e*3/r.components*r.byteLength;case pn:return i*e*4/r.components*r.byteLength;case Xo:return i*e*4/r.components*r.byteLength;case ks:case Hs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Vs:case Gs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case lo:case uo:return Math.max(i,16)*Math.max(e,8)/4;case oo:case co:return Math.max(i,8)*Math.max(e,8)/2;case ho:case fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case go:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case _o:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case vo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case xo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case yo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case So:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case bo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case To:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case wo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Co:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ws:case Ro:case Po:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Fc:case Lo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Do:case Io:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kg(i){switch(i){case ci:case Cc:return{byteLength:1,components:1};case Jr:case Rc:case ts:return{byteLength:2,components:1};case Ho:case Vo:return{byteLength:2,components:4};case Hi:case ko:case cn:return{byteLength:4,components:1};case Pc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Zg(i,e,t,n,r,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new lt,g=new WeakMap;let v;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,w){return y?new OffscreenCanvas(O,w):Zs("canvas")}function b(O,w,ee){let ge=1;const ve=tt(O);if((ve.width>ee||ve.height>ee)&&(ge=ee/Math.max(ve.width,ve.height)),ge<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const K=Math.floor(ge*ve.width),Ne=Math.floor(ge*ve.height);v===void 0&&(v=E(K,Ne));const Te=w?E(K,Ne):v;return Te.width=K,Te.height=Ne,Te.getContext("2d").drawImage(O,0,0,K,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+K+"x"+Ne+")."),Te}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),O;return O}function x(O){return O.generateMipmaps&&O.minFilter!==en&&O.minFilter!==Bn}function m(O){i.generateMipmap(O)}function L(O,w,ee,ge,ve=!1){if(O!==null){if(i[O]!==void 0)return i[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let K=w;if(w===i.RED&&(ee===i.FLOAT&&(K=i.R32F),ee===i.HALF_FLOAT&&(K=i.R16F),ee===i.UNSIGNED_BYTE&&(K=i.R8)),w===i.RED_INTEGER&&(ee===i.UNSIGNED_BYTE&&(K=i.R8UI),ee===i.UNSIGNED_SHORT&&(K=i.R16UI),ee===i.UNSIGNED_INT&&(K=i.R32UI),ee===i.BYTE&&(K=i.R8I),ee===i.SHORT&&(K=i.R16I),ee===i.INT&&(K=i.R32I)),w===i.RG&&(ee===i.FLOAT&&(K=i.RG32F),ee===i.HALF_FLOAT&&(K=i.RG16F),ee===i.UNSIGNED_BYTE&&(K=i.RG8)),w===i.RG_INTEGER&&(ee===i.UNSIGNED_BYTE&&(K=i.RG8UI),ee===i.UNSIGNED_SHORT&&(K=i.RG16UI),ee===i.UNSIGNED_INT&&(K=i.RG32UI),ee===i.BYTE&&(K=i.RG8I),ee===i.SHORT&&(K=i.RG16I),ee===i.INT&&(K=i.RG32I)),w===i.RGB&&ee===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),w===i.RGBA){const Ne=ve?js:Ct.getTransfer(ge);ee===i.FLOAT&&(K=i.RGBA32F),ee===i.HALF_FLOAT&&(K=i.RGBA16F),ee===i.UNSIGNED_BYTE&&(K=Ne===Ot?i.SRGB8_ALPHA8:i.RGBA8),ee===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),ee===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function R(O,w){let ee;return O?w===null||w===Hi||w===Er?ee=i.DEPTH24_STENCIL8:w===cn?ee=i.DEPTH32F_STENCIL8:w===Jr&&(ee=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Hi||w===Er?ee=i.DEPTH_COMPONENT24:w===cn?ee=i.DEPTH_COMPONENT32F:w===Jr&&(ee=i.DEPTH_COMPONENT16),ee}function N(O,w){return x(O)===!0||O.isFramebufferTexture&&O.minFilter!==en&&O.minFilter!==Bn?Math.log2(Math.max(w.width,w.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?w.mipmaps.length:1}function q(O){const w=O.target;w.removeEventListener("dispose",q),l(w),w.isVideoTexture&&g.delete(w)}function z(O){const w=O.target;w.removeEventListener("dispose",z),I(w)}function l(O){const w=n.get(O);if(w.__webglInit===void 0)return;const ee=O.source,ge=_.get(ee);if(ge){const ve=ge[w.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&$(O),Object.keys(ge).length===0&&_.delete(ee)}n.remove(O)}function $(O){const w=n.get(O);i.deleteTexture(w.__webglTexture);const ee=O.source,ge=_.get(ee);delete ge[w.__cacheKey],c.memory.textures--}function I(O){const w=n.get(O);if(O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(w.__webglFramebuffer[ge]))for(let ve=0;ve<w.__webglFramebuffer[ge].length;ve++)i.deleteFramebuffer(w.__webglFramebuffer[ge][ve]);else i.deleteFramebuffer(w.__webglFramebuffer[ge]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ge])}else{if(Array.isArray(w.__webglFramebuffer))for(let ge=0;ge<w.__webglFramebuffer.length;ge++)i.deleteFramebuffer(w.__webglFramebuffer[ge]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ge=0;ge<w.__webglColorRenderbuffer.length;ge++)w.__webglColorRenderbuffer[ge]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ge]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const ee=O.textures;for(let ge=0,ve=ee.length;ge<ve;ge++){const K=n.get(ee[ge]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),c.memory.textures--),n.remove(ee[ge])}n.remove(O)}let P=0;function V(){P=0}function ce(){const O=P;return O>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+r.maxTextures),P+=1,O}function Y(O){const w=[];return w.push(O.wrapS),w.push(O.wrapT),w.push(O.wrapR||0),w.push(O.magFilter),w.push(O.minFilter),w.push(O.anisotropy),w.push(O.internalFormat),w.push(O.format),w.push(O.type),w.push(O.generateMipmaps),w.push(O.premultiplyAlpha),w.push(O.flipY),w.push(O.unpackAlignment),w.push(O.colorSpace),w.join()}function pe(O,w){const ee=n.get(O);if(O.isVideoTexture&&It(O),O.isRenderTargetTexture===!1&&O.version>0&&ee.__version!==O.version){const ge=O.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{vt(ee,O,w);return}}t.bindTexture(i.TEXTURE_2D,ee.__webglTexture,i.TEXTURE0+w)}function me(O,w){const ee=n.get(O);if(O.version>0&&ee.__version!==O.version){vt(ee,O,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ee.__webglTexture,i.TEXTURE0+w)}function le(O,w){const ee=n.get(O);if(O.version>0&&ee.__version!==O.version){vt(ee,O,w);return}t.bindTexture(i.TEXTURE_3D,ee.__webglTexture,i.TEXTURE0+w)}function de(O,w){const ee=n.get(O);if(O.version>0&&ee.__version!==O.version){fe(ee,O,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture,i.TEXTURE0+w)}const oe={[so]:i.REPEAT,[oi]:i.CLAMP_TO_EDGE,[ao]:i.MIRRORED_REPEAT},be={[en]:i.NEAREST,[Eh]:i.NEAREST_MIPMAP_NEAREST,[fs]:i.NEAREST_MIPMAP_LINEAR,[Bn]:i.LINEAR,[Ea]:i.LINEAR_MIPMAP_NEAREST,[ki]:i.LINEAR_MIPMAP_LINEAR},De={[wh]:i.NEVER,[Ih]:i.ALWAYS,[Ch]:i.LESS,[Bc]:i.LEQUAL,[Rh]:i.EQUAL,[Dh]:i.GEQUAL,[Ph]:i.GREATER,[Lh]:i.NOTEQUAL};function Be(O,w){if(w.type===cn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Bn||w.magFilter===Ea||w.magFilter===fs||w.magFilter===ki||w.minFilter===Bn||w.minFilter===Ea||w.minFilter===fs||w.minFilter===ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,oe[w.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,oe[w.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,oe[w.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,be[w.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,be[w.minFilter]),w.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,De[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===en||w.minFilter!==fs&&w.minFilter!==ki||w.type===cn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");i.texParameterf(O,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function ft(O,w){let ee=!1;O.__webglInit===void 0&&(O.__webglInit=!0,w.addEventListener("dispose",q));const ge=w.source;let ve=_.get(ge);ve===void 0&&(ve={},_.set(ge,ve));const K=Y(w);if(K!==O.__cacheKey){ve[K]===void 0&&(ve[K]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,ee=!0),ve[K].usedTimes++;const Ne=ve[O.__cacheKey];Ne!==void 0&&(ve[O.__cacheKey].usedTimes--,Ne.usedTimes===0&&$(w)),O.__cacheKey=K,O.__webglTexture=ve[K].texture}return ee}function vt(O,w,ee){let ge=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ge=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ge=i.TEXTURE_3D);const ve=ft(O,w),K=w.source;t.bindTexture(ge,O.__webglTexture,i.TEXTURE0+ee);const Ne=n.get(K);if(K.version!==Ne.__version||ve===!0){t.activeTexture(i.TEXTURE0+ee);const Te=Ct.getPrimaries(Ct.workingColorSpace),Ie=w.colorSpace===Mi?null:Ct.getPrimaries(w.colorSpace),rt=w.colorSpace===Mi||Te===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let Me=b(w.image,!1,r.maxTextureSize);Me=Xe(w,Me);const Ce=a.convert(w.format,w.colorSpace),ot=a.convert(w.type);let We=L(w.internalFormat,Ce,ot,w.colorSpace,w.isVideoTexture);Be(ge,w);let we;const qe=w.mipmaps,et=w.isVideoTexture!==!0,Rt=Ne.__version===void 0||ve===!0,T=K.dataReady,J=N(w,Me);if(w.isDepthTexture)We=R(w.format===br,w.type),Rt&&(et?t.texStorage2D(i.TEXTURE_2D,1,We,Me.width,Me.height):t.texImage2D(i.TEXTURE_2D,0,We,Me.width,Me.height,0,Ce,ot,null));else if(w.isDataTexture)if(qe.length>0){et&&Rt&&t.texStorage2D(i.TEXTURE_2D,J,We,qe[0].width,qe[0].height);for(let te=0,se=qe.length;te<se;te++)we=qe[te],et?T&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,we.width,we.height,Ce,ot,we.data):t.texImage2D(i.TEXTURE_2D,te,We,we.width,we.height,0,Ce,ot,we.data);w.generateMipmaps=!1}else et?(Rt&&t.texStorage2D(i.TEXTURE_2D,J,We,Me.width,Me.height),T&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me.width,Me.height,Ce,ot,Me.data)):t.texImage2D(i.TEXTURE_2D,0,We,Me.width,Me.height,0,Ce,ot,Me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){et&&Rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,J,We,qe[0].width,qe[0].height,Me.depth);for(let te=0,se=qe.length;te<se;te++)if(we=qe[te],w.format!==pn)if(Ce!==null)if(et){if(T)if(w.layerUpdates.size>0){const _e=oc(we.width,we.height,w.format,w.type);for(const Ve of w.layerUpdates){const Ze=we.data.subarray(Ve*_e/we.data.BYTES_PER_ELEMENT,(Ve+1)*_e/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,Ve,we.width,we.height,1,Ce,Ze,0,0)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,we.width,we.height,Me.depth,Ce,we.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,We,we.width,we.height,Me.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?T&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,we.width,we.height,Me.depth,Ce,ot,we.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,We,we.width,we.height,Me.depth,0,Ce,ot,we.data)}else{et&&Rt&&t.texStorage2D(i.TEXTURE_2D,J,We,qe[0].width,qe[0].height);for(let te=0,se=qe.length;te<se;te++)we=qe[te],w.format!==pn?Ce!==null?et?T&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,we.width,we.height,Ce,we.data):t.compressedTexImage2D(i.TEXTURE_2D,te,We,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?T&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,we.width,we.height,Ce,ot,we.data):t.texImage2D(i.TEXTURE_2D,te,We,we.width,we.height,0,Ce,ot,we.data)}else if(w.isDataArrayTexture)if(et){if(Rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,J,We,Me.width,Me.height,Me.depth),T)if(w.layerUpdates.size>0){const te=oc(Me.width,Me.height,w.format,w.type);for(const se of w.layerUpdates){const _e=Me.data.subarray(se*te/Me.data.BYTES_PER_ELEMENT,(se+1)*te/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,se,Me.width,Me.height,1,Ce,ot,_e)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Ce,ot,Me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,We,Me.width,Me.height,Me.depth,0,Ce,ot,Me.data);else if(w.isData3DTexture)et?(Rt&&t.texStorage3D(i.TEXTURE_3D,J,We,Me.width,Me.height,Me.depth),T&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Ce,ot,Me.data)):t.texImage3D(i.TEXTURE_3D,0,We,Me.width,Me.height,Me.depth,0,Ce,ot,Me.data);else if(w.isFramebufferTexture){if(Rt)if(et)t.texStorage2D(i.TEXTURE_2D,J,We,Me.width,Me.height);else{let te=Me.width,se=Me.height;for(let _e=0;_e<J;_e++)t.texImage2D(i.TEXTURE_2D,_e,We,te,se,0,Ce,ot,null),te>>=1,se>>=1}}else if(qe.length>0){if(et&&Rt){const te=tt(qe[0]);t.texStorage2D(i.TEXTURE_2D,J,We,te.width,te.height)}for(let te=0,se=qe.length;te<se;te++)we=qe[te],et?T&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,Ce,ot,we):t.texImage2D(i.TEXTURE_2D,te,We,Ce,ot,we);w.generateMipmaps=!1}else if(et){if(Rt){const te=tt(Me);t.texStorage2D(i.TEXTURE_2D,J,We,te.width,te.height)}T&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ce,ot,Me)}else t.texImage2D(i.TEXTURE_2D,0,We,Ce,ot,Me);x(w)&&m(ge),Ne.__version=K.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function fe(O,w,ee){if(w.image.length!==6)return;const ge=ft(O,w),ve=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+ee);const K=n.get(ve);if(ve.version!==K.__version||ge===!0){t.activeTexture(i.TEXTURE0+ee);const Ne=Ct.getPrimaries(Ct.workingColorSpace),Te=w.colorSpace===Mi?null:Ct.getPrimaries(w.colorSpace),Ie=w.colorSpace===Mi||Ne===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const rt=w.isCompressedTexture||w.image[0].isCompressedTexture,Me=w.image[0]&&w.image[0].isDataTexture,Ce=[];for(let se=0;se<6;se++)!rt&&!Me?Ce[se]=b(w.image[se],!0,r.maxCubemapSize):Ce[se]=Me?w.image[se].image:w.image[se],Ce[se]=Xe(w,Ce[se]);const ot=Ce[0],We=a.convert(w.format,w.colorSpace),we=a.convert(w.type),qe=L(w.internalFormat,We,we,w.colorSpace),et=w.isVideoTexture!==!0,Rt=K.__version===void 0||ge===!0,T=ve.dataReady;let J=N(w,ot);Be(i.TEXTURE_CUBE_MAP,w);let te;if(rt){et&&Rt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,J,qe,ot.width,ot.height);for(let se=0;se<6;se++){te=Ce[se].mipmaps;for(let _e=0;_e<te.length;_e++){const Ve=te[_e];w.format!==pn?We!==null?et?T&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e,0,0,Ve.width,Ve.height,We,Ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e,qe,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?T&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e,0,0,Ve.width,Ve.height,We,we,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e,qe,Ve.width,Ve.height,0,We,we,Ve.data)}}}else{if(te=w.mipmaps,et&&Rt){te.length>0&&J++;const se=tt(Ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,J,qe,se.width,se.height)}for(let se=0;se<6;se++)if(Me){et?T&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ce[se].width,Ce[se].height,We,we,Ce[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,qe,Ce[se].width,Ce[se].height,0,We,we,Ce[se].data);for(let _e=0;_e<te.length;_e++){const Ze=te[_e].image[se].image;et?T&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e+1,0,0,Ze.width,Ze.height,We,we,Ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e+1,qe,Ze.width,Ze.height,0,We,we,Ze.data)}}else{et?T&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,We,we,Ce[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,qe,We,we,Ce[se]);for(let _e=0;_e<te.length;_e++){const Ve=te[_e];et?T&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e+1,0,0,We,we,Ve.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e+1,qe,We,we,Ve.image[se])}}}x(w)&&m(i.TEXTURE_CUBE_MAP),K.__version=ve.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function ye(O,w,ee,ge,ve,K){const Ne=a.convert(ee.format,ee.colorSpace),Te=a.convert(ee.type),Ie=L(ee.internalFormat,Ne,Te,ee.colorSpace);if(!n.get(w).__hasExternalTextures){const Me=Math.max(1,w.width>>K),Ce=Math.max(1,w.height>>K);ve===i.TEXTURE_3D||ve===i.TEXTURE_2D_ARRAY?t.texImage3D(ve,K,Ie,Me,Ce,w.depth,0,Ne,Te,null):t.texImage2D(ve,K,Ie,Me,Ce,0,Ne,Te,null)}t.bindFramebuffer(i.FRAMEBUFFER,O),ke(w)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,ve,n.get(ee).__webglTexture,0,Et(w)):(ve===i.TEXTURE_2D||ve>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ge,ve,n.get(ee).__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(O,w,ee){if(i.bindRenderbuffer(i.RENDERBUFFER,O),w.depthBuffer){const ge=w.depthTexture,ve=ge&&ge.isDepthTexture?ge.type:null,K=R(w.stencilBuffer,ve),Ne=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=Et(w);ke(w)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,K,w.width,w.height):ee?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,K,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,K,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ne,i.RENDERBUFFER,O)}else{const ge=w.textures;for(let ve=0;ve<ge.length;ve++){const K=ge[ve],Ne=a.convert(K.format,K.colorSpace),Te=a.convert(K.type),Ie=L(K.internalFormat,Ne,Te,K.colorSpace),rt=Et(w);ee&&ke(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,Ie,w.width,w.height):ke(w)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,Ie,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Ie,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(O,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,O),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),pe(w.depthTexture,0);const ge=n.get(w.depthTexture).__webglTexture,ve=Et(w);if(w.depthTexture.format===xr)ke(w)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ge,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ge,0);else if(w.depthTexture.format===br)ke(w)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ge,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function it(O){const w=n.get(O),ee=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!w.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");Ue(w.__webglFramebuffer,O)}else if(ee){w.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[ge]),w.__webglDepthbuffer[ge]=i.createRenderbuffer(),Oe(w.__webglDepthbuffer[ge],O,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=i.createRenderbuffer(),Oe(w.__webglDepthbuffer,O,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function at(O,w,ee){const ge=n.get(O);w!==void 0&&ye(ge.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ee!==void 0&&it(O)}function $e(O){const w=O.texture,ee=n.get(O),ge=n.get(w);O.addEventListener("dispose",z);const ve=O.textures,K=O.isWebGLCubeRenderTarget===!0,Ne=ve.length>1;if(Ne||(ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture()),ge.__version=w.version,c.memory.textures++),K){ee.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(w.mipmaps&&w.mipmaps.length>0){ee.__webglFramebuffer[Te]=[];for(let Ie=0;Ie<w.mipmaps.length;Ie++)ee.__webglFramebuffer[Te][Ie]=i.createFramebuffer()}else ee.__webglFramebuffer[Te]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Te=0;Te<w.mipmaps.length;Te++)ee.__webglFramebuffer[Te]=i.createFramebuffer()}else ee.__webglFramebuffer=i.createFramebuffer();if(Ne)for(let Te=0,Ie=ve.length;Te<Ie;Te++){const rt=n.get(ve[Te]);rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture(),c.memory.textures++)}if(O.samples>0&&ke(O)===!1){ee.__webglMultisampledFramebuffer=i.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Te=0;Te<ve.length;Te++){const Ie=ve[Te];ee.__webglColorRenderbuffer[Te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ee.__webglColorRenderbuffer[Te]);const rt=a.convert(Ie.format,Ie.colorSpace),Me=a.convert(Ie.type),Ce=L(Ie.internalFormat,rt,Me,Ie.colorSpace,O.isXRRenderTarget===!0),ot=Et(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,Ce,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,ee.__webglColorRenderbuffer[Te])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(ee.__webglDepthRenderbuffer=i.createRenderbuffer(),Oe(ee.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,ge.__webglTexture),Be(i.TEXTURE_CUBE_MAP,w);for(let Te=0;Te<6;Te++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ie=0;Ie<w.mipmaps.length;Ie++)ye(ee.__webglFramebuffer[Te][Ie],O,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ie);else ye(ee.__webglFramebuffer[Te],O,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);x(w)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let Te=0,Ie=ve.length;Te<Ie;Te++){const rt=ve[Te],Me=n.get(rt);t.bindTexture(i.TEXTURE_2D,Me.__webglTexture),Be(i.TEXTURE_2D,rt),ye(ee.__webglFramebuffer,O,rt,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,0),x(rt)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let Te=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Te=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Te,ge.__webglTexture),Be(Te,w),w.mipmaps&&w.mipmaps.length>0)for(let Ie=0;Ie<w.mipmaps.length;Ie++)ye(ee.__webglFramebuffer[Ie],O,w,i.COLOR_ATTACHMENT0,Te,Ie);else ye(ee.__webglFramebuffer,O,w,i.COLOR_ATTACHMENT0,Te,0);x(w)&&m(Te),t.unbindTexture()}O.depthBuffer&&it(O)}function Lt(O){const w=O.textures;for(let ee=0,ge=w.length;ee<ge;ee++){const ve=w[ee];if(x(ve)){const K=O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ne=n.get(ve).__webglTexture;t.bindTexture(K,Ne),m(K),t.unbindTexture()}}}const k=[],Dt=[];function xt(O){if(O.samples>0){if(ke(O)===!1){const w=O.textures,ee=O.width,ge=O.height;let ve=i.COLOR_BUFFER_BIT;const K=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ne=n.get(O),Te=w.length>1;if(Te)for(let Ie=0;Ie<w.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Ie=0;Ie<w.length;Ie++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ve|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ve|=i.STENCIL_BUFFER_BIT)),Te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ie]);const rt=n.get(w[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,ee,ge,0,0,ee,ge,ve,i.NEAREST),f===!0&&(k.length=0,Dt.length=0,k.push(i.COLOR_ATTACHMENT0+Ie),O.depthBuffer&&O.resolveDepthBuffer===!1&&(k.push(K),Dt.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Dt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,k))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Te)for(let Ie=0;Ie<w.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ie]);const rt=n.get(w[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,rt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&f){const w=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Et(O){return Math.min(r.maxSamples,O.samples)}function ke(O){const w=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function It(O){const w=c.render.frame;g.get(O)!==w&&(g.set(O,w),O.update())}function Xe(O,w){const ee=O.colorSpace,ge=O.format,ve=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ee!==Ai&&ee!==Mi&&(Ct.getTransfer(ee)===Ot?(ge!==pn||ve!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),w}function tt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(d.width=O.naturalWidth||O.width,d.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(d.width=O.displayWidth,d.height=O.displayHeight):(d.width=O.width,d.height=O.height),d}this.allocateTextureUnit=ce,this.resetTextureUnits=V,this.setTexture2D=pe,this.setTexture2DArray=me,this.setTexture3D=le,this.setTextureCube=de,this.rebindTextures=at,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=ke}function Jg(i,e){function t(n,r=Mi){let a;const c=Ct.getTransfer(r);if(n===ci)return i.UNSIGNED_BYTE;if(n===Ho)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Vo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Pc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cc)return i.BYTE;if(n===Rc)return i.SHORT;if(n===Jr)return i.UNSIGNED_SHORT;if(n===ko)return i.INT;if(n===Hi)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===ts)return i.HALF_FLOAT;if(n===Lc)return i.ALPHA;if(n===Dc)return i.RGB;if(n===pn)return i.RGBA;if(n===Ic)return i.LUMINANCE;if(n===Uc)return i.LUMINANCE_ALPHA;if(n===xr)return i.DEPTH_COMPONENT;if(n===br)return i.DEPTH_STENCIL;if(n===jr)return i.RED;if(n===Go)return i.RED_INTEGER;if(n===Nc)return i.RG;if(n===Wo)return i.RG_INTEGER;if(n===Xo)return i.RGBA_INTEGER;if(n===ks||n===Hs||n===Vs||n===Gs)if(c===Ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===ks)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===ks)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oo||n===lo||n===co||n===uo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===oo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===co)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ho||n===fo||n===po)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===ho||n===fo)return c===Ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===po)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===mo||n===go||n===_o||n===vo||n===xo||n===yo||n===Mo||n===So||n===Eo||n===bo||n===To||n===Ao||n===wo||n===Co)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===mo)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===go)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_o)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vo)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xo)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yo)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mo)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===So)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Eo)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bo)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===To)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ao)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wo)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Co)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ws||n===Ro||n===Po)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Ws)return c===Ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ro)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Po)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fc||n===Lo||n===Do||n===Io)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Ws)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Lo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Do)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Io)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Er?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Qg extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xr extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const e_={type:"move"};class Ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,c=null;const u=this._targetRay,f=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const b of e.hand.values()){const x=t.getJointPose(b,n),m=this._getHandJoint(d,b);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}const g=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],_=g.position.distanceTo(v.position),y=.02,E=.005;d.inputState.pinching&&_>y+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&_<=y-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(e_)))}return u!==null&&(u.visible=r!==null),f!==null&&(f.visible=a!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Xr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const t_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class i_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new mn,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Kn({vertexShader:t_,fragmentShader:n_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pn(new ra(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class r_ extends Gi{constructor(e,t){super();const n=this;let r=null,a=1,c=null,u="local-floor",f=1,d=null,g=null,v=null,_=null,y=null,E=null;const b=new i_,x=t.getContextAttributes();let m=null,L=null;const R=[],N=[],q=new lt;let z=null;const l=new Rn;l.layers.enable(1),l.viewport=new Qt;const $=new Rn;$.layers.enable(2),$.viewport=new Qt;const I=[l,$],P=new Qg;P.layers.enable(1),P.layers.enable(2);let V=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(fe){let ye=R[fe];return ye===void 0&&(ye=new Ya,R[fe]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(fe){let ye=R[fe];return ye===void 0&&(ye=new Ya,R[fe]=ye),ye.getGripSpace()},this.getHand=function(fe){let ye=R[fe];return ye===void 0&&(ye=new Ya,R[fe]=ye),ye.getHandSpace()};function Y(fe){const ye=N.indexOf(fe.inputSource);if(ye===-1)return;const Oe=R[ye];Oe!==void 0&&(Oe.update(fe.inputSource,fe.frame,d||c),Oe.dispatchEvent({type:fe.type,data:fe.inputSource}))}function pe(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",pe),r.removeEventListener("inputsourceschange",me);for(let fe=0;fe<R.length;fe++){const ye=N[fe];ye!==null&&(N[fe]=null,R[fe].disconnect(ye))}V=null,ce=null,b.reset(),e.setRenderTarget(m),y=null,_=null,v=null,r=null,L=null,vt.stop(),n.isPresenting=!1,e.setPixelRatio(z),e.setSize(q.width,q.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(fe){a=fe,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(fe){u=fe,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(fe){d=fe},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(fe){if(r=fe,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",pe),r.addEventListener("inputsourceschange",me),x.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(q),r.renderState.layers===void 0){const ye={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(r,t,ye),r.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new Ti(y.framebufferWidth,y.framebufferHeight,{format:pn,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ye=null,Oe=null,Ue=null;x.depth&&(Ue=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=x.stencil?br:xr,Oe=x.stencil?Er:Hi);const it={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:a};v=new XRWebGLBinding(r,t),_=v.createProjectionLayer(it),r.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),L=new Ti(_.textureWidth,_.textureHeight,{format:pn,type:ci,depthTexture:new Jc(_.textureWidth,_.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(f),d=null,c=await r.requestReferenceSpace(u),vt.setContext(r),vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function me(fe){for(let ye=0;ye<fe.removed.length;ye++){const Oe=fe.removed[ye],Ue=N.indexOf(Oe);Ue>=0&&(N[Ue]=null,R[Ue].disconnect(Oe))}for(let ye=0;ye<fe.added.length;ye++){const Oe=fe.added[ye];let Ue=N.indexOf(Oe);if(Ue===-1){for(let at=0;at<R.length;at++)if(at>=N.length){N.push(Oe),Ue=at;break}else if(N[at]===null){N[at]=Oe,Ue=at;break}if(Ue===-1)break}const it=R[Ue];it&&it.connect(Oe)}}const le=new j,de=new j;function oe(fe,ye,Oe){le.setFromMatrixPosition(ye.matrixWorld),de.setFromMatrixPosition(Oe.matrixWorld);const Ue=le.distanceTo(de),it=ye.projectionMatrix.elements,at=Oe.projectionMatrix.elements,$e=it[14]/(it[10]-1),Lt=it[14]/(it[10]+1),k=(it[9]+1)/it[5],Dt=(it[9]-1)/it[5],xt=(it[8]-1)/it[0],Et=(at[8]+1)/at[0],ke=$e*xt,It=$e*Et,Xe=Ue/(-xt+Et),tt=Xe*-xt;ye.matrixWorld.decompose(fe.position,fe.quaternion,fe.scale),fe.translateX(tt),fe.translateZ(Xe),fe.matrixWorld.compose(fe.position,fe.quaternion,fe.scale),fe.matrixWorldInverse.copy(fe.matrixWorld).invert();const O=$e+Xe,w=Lt+Xe,ee=ke-tt,ge=It+(Ue-tt),ve=k*Lt/w*O,K=Dt*Lt/w*O;fe.projectionMatrix.makePerspective(ee,ge,ve,K,O,w),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert()}function be(fe,ye){ye===null?fe.matrixWorld.copy(fe.matrix):fe.matrixWorld.multiplyMatrices(ye.matrixWorld,fe.matrix),fe.matrixWorldInverse.copy(fe.matrixWorld).invert()}this.updateCamera=function(fe){if(r===null)return;b.texture!==null&&(fe.near=b.depthNear,fe.far=b.depthFar),P.near=$.near=l.near=fe.near,P.far=$.far=l.far=fe.far,(V!==P.near||ce!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),V=P.near,ce=P.far,l.near=V,l.far=ce,$.near=V,$.far=ce,l.updateProjectionMatrix(),$.updateProjectionMatrix(),fe.updateProjectionMatrix());const ye=fe.parent,Oe=P.cameras;be(P,ye);for(let Ue=0;Ue<Oe.length;Ue++)be(Oe[Ue],ye);Oe.length===2?oe(P,l,$):P.projectionMatrix.copy(l.projectionMatrix),De(fe,P,ye)};function De(fe,ye,Oe){Oe===null?fe.matrix.copy(ye.matrixWorld):(fe.matrix.copy(Oe.matrixWorld),fe.matrix.invert(),fe.matrix.multiply(ye.matrixWorld)),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.updateMatrixWorld(!0),fe.projectionMatrix.copy(ye.projectionMatrix),fe.projectionMatrixInverse.copy(ye.projectionMatrixInverse),fe.isPerspectiveCamera&&(fe.fov=Qr*2*Math.atan(1/fe.projectionMatrix.elements[5]),fe.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(_===null&&y===null))return f},this.setFoveation=function(fe){f=fe,_!==null&&(_.fixedFoveation=fe),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=fe)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(P)};let Be=null;function ft(fe,ye){if(g=ye.getViewerPose(d||c),E=ye,g!==null){const Oe=g.views;y!==null&&(e.setRenderTargetFramebuffer(L,y.framebuffer),e.setRenderTarget(L));let Ue=!1;Oe.length!==P.cameras.length&&(P.cameras.length=0,Ue=!0);for(let at=0;at<Oe.length;at++){const $e=Oe[at];let Lt=null;if(y!==null)Lt=y.getViewport($e);else{const Dt=v.getViewSubImage(_,$e);Lt=Dt.viewport,at===0&&(e.setRenderTargetTextures(L,Dt.colorTexture,_.ignoreDepthValues?void 0:Dt.depthStencilTexture),e.setRenderTarget(L))}let k=I[at];k===void 0&&(k=new Rn,k.layers.enable(at),k.viewport=new Qt,I[at]=k),k.matrix.fromArray($e.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray($e.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),at===0&&(P.matrix.copy(k.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Ue===!0&&P.cameras.push(k)}const it=r.enabledFeatures;if(it&&it.includes("depth-sensing")){const at=v.getDepthInformation(Oe[0]);at&&at.isValid&&at.texture&&b.init(e,at,r.renderState)}}for(let Oe=0;Oe<R.length;Oe++){const Ue=N[Oe],it=R[Oe];Ue!==null&&it!==void 0&&it.update(Ue,ye,d||c)}Be&&Be(fe,ye),ye.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ye}),E=null}const vt=new Kc;vt.setAnimationLoop(ft),this.setAnimationLoop=function(fe){Be=fe},this.dispose=function(){}}}const Fi=new $n,s_=new Xt;function a_(i,e){function t(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function n(x,m){m.color.getRGB(x.fogColor.value,qc(i)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function r(x,m,L,R,N){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(x,m):m.isMeshToonMaterial?(a(x,m),v(x,m)):m.isMeshPhongMaterial?(a(x,m),g(x,m)):m.isMeshStandardMaterial?(a(x,m),_(x,m),m.isMeshPhysicalMaterial&&y(x,m,N)):m.isMeshMatcapMaterial?(a(x,m),E(x,m)):m.isMeshDepthMaterial?a(x,m):m.isMeshDistanceMaterial?(a(x,m),b(x,m)):m.isMeshNormalMaterial?a(x,m):m.isLineBasicMaterial?(c(x,m),m.isLineDashedMaterial&&u(x,m)):m.isPointsMaterial?f(x,m,L,R):m.isSpriteMaterial?d(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,t(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,t(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===xn&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,t(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===xn&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,t(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,t(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);const L=e.get(m),R=L.envMap,N=L.envMapRotation;R&&(x.envMap.value=R,Fi.copy(N),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),x.envMapRotation.value.setFromMatrix4(s_.makeRotationFromEuler(Fi)),x.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,x.aoMapTransform))}function c(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,t(m.map,x.mapTransform))}function u(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function f(x,m,L,R){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*L,x.scale.value=R*.5,m.map&&(x.map.value=m.map,t(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function d(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,t(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function g(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function v(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function _(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function y(x,m,L){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===xn&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=L.texture,x.transmissionSamplerSize.value.set(L.width,L.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,m){m.matcap&&(x.matcap.value=m.matcap)}function b(x,m){const L=e.get(m).light;x.referencePosition.value.setFromMatrixPosition(L.matrixWorld),x.nearDistance.value=L.shadow.camera.near,x.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function o_(i,e,t,n){let r={},a={},c=[];const u=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function f(L,R){const N=R.program;n.uniformBlockBinding(L,N)}function d(L,R){let N=r[L.id];N===void 0&&(E(L),N=g(L),r[L.id]=N,L.addEventListener("dispose",x));const q=R.program;n.updateUBOMapping(L,q);const z=e.render.frame;a[L.id]!==z&&(_(L),a[L.id]=z)}function g(L){const R=v();L.__bindingPointIndex=R;const N=i.createBuffer(),q=L.__size,z=L.usage;return i.bindBuffer(i.UNIFORM_BUFFER,N),i.bufferData(i.UNIFORM_BUFFER,q,z),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,N),N}function v(){for(let L=0;L<u;L++)if(c.indexOf(L)===-1)return c.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(L){const R=r[L.id],N=L.uniforms,q=L.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let z=0,l=N.length;z<l;z++){const $=Array.isArray(N[z])?N[z]:[N[z]];for(let I=0,P=$.length;I<P;I++){const V=$[I];if(y(V,z,I,q)===!0){const ce=V.__offset,Y=Array.isArray(V.value)?V.value:[V.value];let pe=0;for(let me=0;me<Y.length;me++){const le=Y[me],de=b(le);typeof le=="number"||typeof le=="boolean"?(V.__data[0]=le,i.bufferSubData(i.UNIFORM_BUFFER,ce+pe,V.__data)):le.isMatrix3?(V.__data[0]=le.elements[0],V.__data[1]=le.elements[1],V.__data[2]=le.elements[2],V.__data[3]=0,V.__data[4]=le.elements[3],V.__data[5]=le.elements[4],V.__data[6]=le.elements[5],V.__data[7]=0,V.__data[8]=le.elements[6],V.__data[9]=le.elements[7],V.__data[10]=le.elements[8],V.__data[11]=0):(le.toArray(V.__data,pe),pe+=de.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ce,V.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(L,R,N,q){const z=L.value,l=R+"_"+N;if(q[l]===void 0)return typeof z=="number"||typeof z=="boolean"?q[l]=z:q[l]=z.clone(),!0;{const $=q[l];if(typeof z=="number"||typeof z=="boolean"){if($!==z)return q[l]=z,!0}else if($.equals(z)===!1)return $.copy(z),!0}return!1}function E(L){const R=L.uniforms;let N=0;const q=16;for(let l=0,$=R.length;l<$;l++){const I=Array.isArray(R[l])?R[l]:[R[l]];for(let P=0,V=I.length;P<V;P++){const ce=I[P],Y=Array.isArray(ce.value)?ce.value:[ce.value];for(let pe=0,me=Y.length;pe<me;pe++){const le=Y[pe],de=b(le),oe=N%q,be=oe%de.boundary,De=oe+be;N+=be,De!==0&&q-De<de.storage&&(N+=q-De),ce.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=N,N+=de.storage}}}const z=N%q;return z>0&&(N+=q-z),L.__size=N,L.__cache={},this}function b(L){const R={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(R.boundary=4,R.storage=4):L.isVector2?(R.boundary=8,R.storage=8):L.isVector3||L.isColor?(R.boundary=16,R.storage=12):L.isVector4?(R.boundary=16,R.storage=16):L.isMatrix3?(R.boundary=48,R.storage=48):L.isMatrix4?(R.boundary=64,R.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),R}function x(L){const R=L.target;R.removeEventListener("dispose",x);const N=c.indexOf(R.__bindingPointIndex);c.splice(N,1),i.deleteBuffer(r[R.id]),delete r[R.id],delete a[R.id]}function m(){for(const L in r)i.deleteBuffer(r[L]);c=[],r={},a={}}return{bind:f,update:d,dispose:m}}class l_{constructor(e={}){const{canvas:t=Zh(),context:n=null,depth:r=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=c;const y=new Uint32Array(4),E=new Int32Array(4);let b=null,x=null;const m=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xn,this.toneMapping=Ei,this.toneMappingExposure=1;const R=this;let N=!1,q=0,z=0,l=null,$=-1,I=null;const P=new Qt,V=new Qt;let ce=null;const Y=new _t(0);let pe=0,me=t.width,le=t.height,de=1,oe=null,be=null;const De=new Qt(0,0,me,le),Be=new Qt(0,0,me,le);let ft=!1;const vt=new $c;let fe=!1,ye=!1;const Oe=new Xt,Ue=new j,it=new Qt,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function Lt(){return l===null?de:1}let k=n;function Dt(C,W){return t.getContext(C,W)}try{const C={alpha:!0,depth:r,stencil:a,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bo}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",_e,!1),k===null){const W="webgl2";if(k=Dt(W,C),k===null)throw Dt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let xt,Et,ke,It,Xe,tt,O,w,ee,ge,ve,K,Ne,Te,Ie,rt,Me,Ce,ot,We,we,qe,et,Rt;function T(){xt=new pm(k),xt.init(),qe=new Jg(k,xt),Et=new lm(k,xt,e,qe),ke=new $g(k),It=new _m(k),Xe=new Ng,tt=new Zg(k,xt,ke,Xe,Et,qe,It),O=new um(R),w=new dm(R),ee=new bf(k),et=new am(k,ee),ge=new mm(k,ee,It,et),ve=new xm(k,ge,ee,It),ot=new vm(k,Et,tt),rt=new cm(Xe),K=new Ug(R,O,w,xt,Et,et,rt),Ne=new a_(R,Xe),Te=new Og,Ie=new Gg(xt),Ce=new sm(R,O,w,ke,ve,_,f),Me=new Yg(R,ve,Et),Rt=new o_(k,It,Et,ke),We=new om(k,xt,It),we=new gm(k,xt,It),It.programs=K.programs,R.capabilities=Et,R.extensions=xt,R.properties=Xe,R.renderLists=Te,R.shadowMap=Me,R.state=ke,R.info=It}T();const J=new r_(R,k);this.xr=J,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=xt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=xt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(C){C!==void 0&&(de=C,this.setSize(me,le,!1))},this.getSize=function(C){return C.set(me,le)},this.setSize=function(C,W,ne=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}me=C,le=W,t.width=Math.floor(C*de),t.height=Math.floor(W*de),ne===!0&&(t.style.width=C+"px",t.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(me*de,le*de).floor()},this.setDrawingBufferSize=function(C,W,ne){me=C,le=W,de=ne,t.width=Math.floor(C*ne),t.height=Math.floor(W*ne),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(De)},this.setViewport=function(C,W,ne,ie){C.isVector4?De.set(C.x,C.y,C.z,C.w):De.set(C,W,ne,ie),ke.viewport(P.copy(De).multiplyScalar(de).round())},this.getScissor=function(C){return C.copy(Be)},this.setScissor=function(C,W,ne,ie){C.isVector4?Be.set(C.x,C.y,C.z,C.w):Be.set(C,W,ne,ie),ke.scissor(V.copy(Be).multiplyScalar(de).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(C){ke.setScissorTest(ft=C)},this.setOpaqueSort=function(C){oe=C},this.setTransparentSort=function(C){be=C},this.getClearColor=function(C){return C.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(C=!0,W=!0,ne=!0){let ie=0;if(C){let X=!1;if(l!==null){const Se=l.texture.format;X=Se===Xo||Se===Wo||Se===Go}if(X){const Se=l.texture.type,Re=Se===ci||Se===Hi||Se===Jr||Se===Er||Se===Ho||Se===Vo,Fe=Ce.getClearColor(),ze=Ce.getClearAlpha(),Ke=Fe.r,Je=Fe.g,je=Fe.b;Re?(y[0]=Ke,y[1]=Je,y[2]=je,y[3]=ze,k.clearBufferuiv(k.COLOR,0,y)):(E[0]=Ke,E[1]=Je,E[2]=je,E[3]=ze,k.clearBufferiv(k.COLOR,0,E))}else ie|=k.COLOR_BUFFER_BIT}W&&(ie|=k.DEPTH_BUFFER_BIT),ne&&(ie|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Te.dispose(),Ie.dispose(),Xe.dispose(),O.dispose(),w.dispose(),ve.dispose(),et.dispose(),Rt.dispose(),K.dispose(),J.dispose(),J.removeEventListener("sessionstart",kt),J.removeEventListener("sessionend",Ln),Bt.stop()};function te(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const C=It.autoReset,W=Me.enabled,ne=Me.autoUpdate,ie=Me.needsUpdate,X=Me.type;T(),It.autoReset=C,Me.enabled=W,Me.autoUpdate=ne,Me.needsUpdate=ie,Me.type=X}function _e(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ve(C){const W=C.target;W.removeEventListener("dispose",Ve),Ze(W)}function Ze(C){yt(C),Xe.remove(C)}function yt(C){const W=Xe.get(C).programs;W!==void 0&&(W.forEach(function(ne){K.releaseProgram(ne)}),C.isShaderMaterial&&K.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,ne,ie,X,Se){W===null&&(W=at);const Re=X.isMesh&&X.matrixWorld.determinant()<0,Fe=aa(C,W,ne,ie,X);ke.setMaterial(ie,Re);let ze=ne.index,Ke=1;if(ie.wireframe===!0){if(ze=ge.getWireframeAttribute(ne),ze===void 0)return;Ke=2}const Je=ne.drawRange,je=ne.attributes.position;let wt=Je.start*Ke,Ut=(Je.start+Je.count)*Ke;Se!==null&&(wt=Math.max(wt,Se.start*Ke),Ut=Math.min(Ut,(Se.start+Se.count)*Ke)),ze!==null?(wt=Math.max(wt,0),Ut=Math.min(Ut,ze.count)):je!=null&&(wt=Math.max(wt,0),Ut=Math.min(Ut,je.count));const zt=Ut-wt;if(zt<0||zt===1/0)return;et.setup(X,ie,Fe,ne,ze);let un,bt=We;if(ze!==null&&(un=ee.get(ze),bt=we,bt.setIndex(un)),X.isMesh)ie.wireframe===!0?(ke.setLineWidth(ie.wireframeLinewidth*Lt()),bt.setMode(k.LINES)):bt.setMode(k.TRIANGLES);else if(X.isLine){let Ge=ie.linewidth;Ge===void 0&&(Ge=1),ke.setLineWidth(Ge*Lt()),X.isLineSegments?bt.setMode(k.LINES):X.isLineLoop?bt.setMode(k.LINE_LOOP):bt.setMode(k.LINE_STRIP)}else X.isPoints?bt.setMode(k.POINTS):X.isSprite&&bt.setMode(k.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)bt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))bt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ge=X._multiDrawStarts,Wt=X._multiDrawCounts,Tt=X._multiDrawCount,Nt=ze?ee.get(ze).bytesPerElement:1,Mn=Xe.get(ie).currentProgram.getUniforms();for(let Zt=0;Zt<Tt;Zt++)Mn.setValue(k,"_gl_DrawID",Zt),bt.render(Ge[Zt]/Nt,Wt[Zt])}else if(X.isInstancedMesh)bt.renderInstances(wt,zt,X.count);else if(ne.isInstancedBufferGeometry){const Ge=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Wt=Math.min(ne.instanceCount,Ge);bt.renderInstances(wt,zt,Wt)}else bt.render(wt,zt)};function Mt(C,W,ne){C.transparent===!0&&C.side===ai&&C.forceSinglePass===!1?(C.side=xn,C.needsUpdate=!0,Xi(C,W,ne),C.side=bi,C.needsUpdate=!0,Xi(C,W,ne),C.side=ai):Xi(C,W,ne)}this.compile=function(C,W,ne=null){ne===null&&(ne=C),x=Ie.get(ne),x.init(W),L.push(x),ne.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(x.pushLight(X),X.castShadow&&x.pushShadow(X))}),C!==ne&&C.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(x.pushLight(X),X.castShadow&&x.pushShadow(X))}),x.setupLights();const ie=new Set;return C.traverse(function(X){const Se=X.material;if(Se)if(Array.isArray(Se))for(let Re=0;Re<Se.length;Re++){const Fe=Se[Re];Mt(Fe,ne,X),ie.add(Fe)}else Mt(Se,ne,X),ie.add(Se)}),L.pop(),x=null,ie},this.compileAsync=function(C,W,ne=null){const ie=this.compile(C,W,ne);return new Promise(X=>{function Se(){if(ie.forEach(function(Re){Xe.get(Re).currentProgram.isReady()&&ie.delete(Re)}),ie.size===0){X(C);return}setTimeout(Se,10)}xt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let dt=null;function Gt(C){dt&&dt(C)}function kt(){Bt.stop()}function Ln(){Bt.start()}const Bt=new Kc;Bt.setAnimationLoop(Gt),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(C){dt=C,J.setAnimationLoop(C),C===null?Bt.stop():Bt.start()},J.addEventListener("sessionstart",kt),J.addEventListener("sessionend",Ln),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(W),W=J.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,W,l),x=Ie.get(C,L.length),x.init(W),L.push(x),Oe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),vt.setFromProjectionMatrix(Oe),ye=this.localClippingEnabled,fe=rt.init(this.clippingPlanes,ye),b=Te.get(C,m.length),b.init(),m.push(b),J.enabled===!0&&J.isPresenting===!0){const Se=R.xr.getDepthSensingMesh();Se!==null&&rn(Se,W,-1/0,R.sortObjects)}rn(C,W,0,R.sortObjects),b.finish(),R.sortObjects===!0&&b.sort(oe,be),$e=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,$e&&Ce.addToRenderList(b,C),this.info.render.frame++,fe===!0&&rt.beginShadows();const ne=x.state.shadowsArray;Me.render(ne,C,W),fe===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=b.opaque,X=b.transmissive;if(x.setupLights(),W.isArrayCamera){const Se=W.cameras;if(X.length>0)for(let Re=0,Fe=Se.length;Re<Fe;Re++){const ze=Se[Re];zn(ie,X,C,ze)}$e&&Ce.render(C);for(let Re=0,Fe=Se.length;Re<Fe;Re++){const ze=Se[Re];Dn(b,C,ze,ze.viewport)}}else X.length>0&&zn(ie,X,C,W),$e&&Ce.render(C),Dn(b,C,W);l!==null&&(tt.updateMultisampleRenderTarget(l),tt.updateRenderTargetMipmap(l)),C.isScene===!0&&C.onAfterRender(R,C,W),et.resetDefaultState(),$=-1,I=null,L.pop(),L.length>0?(x=L[L.length-1],fe===!0&&rt.setGlobalState(R.clippingPlanes,x.state.camera)):x=null,m.pop(),m.length>0?b=m[m.length-1]:b=null};function rn(C,W,ne,ie){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)ne=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)x.pushLight(C),C.castShadow&&x.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||vt.intersectsSprite(C)){ie&&it.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Oe);const Re=ve.update(C),Fe=C.material;Fe.visible&&b.push(C,Re,Fe,ne,it.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||vt.intersectsObject(C))){const Re=ve.update(C),Fe=C.material;if(ie&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),it.copy(C.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),it.copy(Re.boundingSphere.center)),it.applyMatrix4(C.matrixWorld).applyMatrix4(Oe)),Array.isArray(Fe)){const ze=Re.groups;for(let Ke=0,Je=ze.length;Ke<Je;Ke++){const je=ze[Ke],wt=Fe[je.materialIndex];wt&&wt.visible&&b.push(C,Re,wt,ne,it.z,je)}}else Fe.visible&&b.push(C,Re,Fe,ne,it.z,null)}}const Se=C.children;for(let Re=0,Fe=Se.length;Re<Fe;Re++)rn(Se[Re],W,ne,ie)}function Dn(C,W,ne,ie){const X=C.opaque,Se=C.transmissive,Re=C.transparent;x.setupLightsView(ne),fe===!0&&rt.setGlobalState(R.clippingPlanes,ne),ie&&ke.viewport(P.copy(ie)),X.length>0&&Wi(X,W,ne),Se.length>0&&Wi(Se,W,ne),Re.length>0&&Wi(Re,W,ne),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function zn(C,W,ne,ie){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ie.id]===void 0&&(x.state.transmissionRenderTarget[ie.id]=new Ti(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float")?ts:ci,minFilter:ki,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const Se=x.state.transmissionRenderTarget[ie.id],Re=ie.viewport||P;Se.setSize(Re.z,Re.w);const Fe=R.getRenderTarget();R.setRenderTarget(Se),R.getClearColor(Y),pe=R.getClearAlpha(),pe<1&&R.setClearColor(16777215,.5),R.clear(),$e&&Ce.render(ne);const ze=R.toneMapping;R.toneMapping=Ei;const Ke=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),x.setupLightsView(ie),fe===!0&&rt.setGlobalState(R.clippingPlanes,ie),Wi(C,ne,ie),tt.updateMultisampleRenderTarget(Se),tt.updateRenderTargetMipmap(Se),xt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let je=0,wt=W.length;je<wt;je++){const Ut=W[je],zt=Ut.object,un=Ut.geometry,bt=Ut.material,Ge=Ut.group;if(bt.side===ai&&zt.layers.test(ie.layers)){const Wt=bt.side;bt.side=xn,bt.needsUpdate=!0,rs(zt,ne,ie,un,bt,Ge),bt.side=Wt,bt.needsUpdate=!0,Je=!0}}Je===!0&&(tt.updateMultisampleRenderTarget(Se),tt.updateRenderTargetMipmap(Se))}R.setRenderTarget(Fe),R.setClearColor(Y,pe),Ke!==void 0&&(ie.viewport=Ke),R.toneMapping=ze}function Wi(C,W,ne){const ie=W.isScene===!0?W.overrideMaterial:null;for(let X=0,Se=C.length;X<Se;X++){const Re=C[X],Fe=Re.object,ze=Re.geometry,Ke=ie===null?Re.material:ie,Je=Re.group;Fe.layers.test(ne.layers)&&rs(Fe,W,ne,ze,Ke,Je)}}function rs(C,W,ne,ie,X,Se){C.onBeforeRender(R,W,ne,ie,X,Se),C.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),X.transparent===!0&&X.side===ai&&X.forceSinglePass===!1?(X.side=xn,X.needsUpdate=!0,R.renderBufferDirect(ne,W,ie,X,C,Se),X.side=bi,X.needsUpdate=!0,R.renderBufferDirect(ne,W,ie,X,C,Se),X.side=ai):R.renderBufferDirect(ne,W,ie,X,C,Se),C.onAfterRender(R,W,ne,ie,X,Se)}function Xi(C,W,ne){W.isScene!==!0&&(W=at);const ie=Xe.get(C),X=x.state.lights,Se=x.state.shadowsArray,Re=X.state.version,Fe=K.getParameters(C,X.state,Se,W,ne),ze=K.getProgramCacheKey(Fe);let Ke=ie.programs;ie.environment=C.isMeshStandardMaterial?W.environment:null,ie.fog=W.fog,ie.envMap=(C.isMeshStandardMaterial?w:O).get(C.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,Ke===void 0&&(C.addEventListener("dispose",Ve),Ke=new Map,ie.programs=Ke);let Je=Ke.get(ze);if(Je!==void 0){if(ie.currentProgram===Je&&ie.lightsStateVersion===Re)return ss(C,Fe),Je}else Fe.uniforms=K.getUniforms(C),C.onBeforeCompile(Fe,R),Je=K.acquireProgram(Fe,ze),Ke.set(ze,Je),ie.uniforms=Fe.uniforms;const je=ie.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(je.clippingPlanes=rt.uniform),ss(C,Fe),ie.needsLights=oa(C),ie.lightsStateVersion=Re,ie.needsLights&&(je.ambientLightColor.value=X.state.ambient,je.lightProbe.value=X.state.probe,je.directionalLights.value=X.state.directional,je.directionalLightShadows.value=X.state.directionalShadow,je.spotLights.value=X.state.spot,je.spotLightShadows.value=X.state.spotShadow,je.rectAreaLights.value=X.state.rectArea,je.ltc_1.value=X.state.rectAreaLTC1,je.ltc_2.value=X.state.rectAreaLTC2,je.pointLights.value=X.state.point,je.pointLightShadows.value=X.state.pointShadow,je.hemisphereLights.value=X.state.hemi,je.directionalShadowMap.value=X.state.directionalShadowMap,je.directionalShadowMatrix.value=X.state.directionalShadowMatrix,je.spotShadowMap.value=X.state.spotShadowMap,je.spotLightMatrix.value=X.state.spotLightMatrix,je.spotLightMap.value=X.state.spotLightMap,je.pointShadowMap.value=X.state.pointShadowMap,je.pointShadowMatrix.value=X.state.pointShadowMatrix),ie.currentProgram=Je,ie.uniformsList=null,Je}function Pr(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=Xs.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function ss(C,W){const ne=Xe.get(C);ne.outputColorSpace=W.outputColorSpace,ne.batching=W.batching,ne.batchingColor=W.batchingColor,ne.instancing=W.instancing,ne.instancingColor=W.instancingColor,ne.instancingMorph=W.instancingMorph,ne.skinning=W.skinning,ne.morphTargets=W.morphTargets,ne.morphNormals=W.morphNormals,ne.morphColors=W.morphColors,ne.morphTargetsCount=W.morphTargetsCount,ne.numClippingPlanes=W.numClippingPlanes,ne.numIntersection=W.numClipIntersection,ne.vertexAlphas=W.vertexAlphas,ne.vertexTangents=W.vertexTangents,ne.toneMapping=W.toneMapping}function aa(C,W,ne,ie,X){W.isScene!==!0&&(W=at),tt.resetTextureUnits();const Se=W.fog,Re=ie.isMeshStandardMaterial?W.environment:null,Fe=l===null?R.outputColorSpace:l.isXRRenderTarget===!0?l.texture.colorSpace:Ai,ze=(ie.isMeshStandardMaterial?w:O).get(ie.envMap||Re),Ke=ie.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Je=!!ne.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),je=!!ne.morphAttributes.position,wt=!!ne.morphAttributes.normal,Ut=!!ne.morphAttributes.color;let zt=Ei;ie.toneMapped&&(l===null||l.isXRRenderTarget===!0)&&(zt=R.toneMapping);const un=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,bt=un!==void 0?un.length:0,Ge=Xe.get(ie),Wt=x.state.lights;if(fe===!0&&(ye===!0||C!==I)){const tn=C===I&&ie.id===$;rt.setState(ie,C,tn)}let Tt=!1;ie.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Wt.state.version||Ge.outputColorSpace!==Fe||X.isBatchedMesh&&Ge.batching===!1||!X.isBatchedMesh&&Ge.batching===!0||X.isBatchedMesh&&Ge.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ge.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ge.instancing===!1||!X.isInstancedMesh&&Ge.instancing===!0||X.isSkinnedMesh&&Ge.skinning===!1||!X.isSkinnedMesh&&Ge.skinning===!0||X.isInstancedMesh&&Ge.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ge.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ge.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ge.instancingMorph===!1&&X.morphTexture!==null||Ge.envMap!==ze||ie.fog===!0&&Ge.fog!==Se||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==rt.numPlanes||Ge.numIntersection!==rt.numIntersection)||Ge.vertexAlphas!==Ke||Ge.vertexTangents!==Je||Ge.morphTargets!==je||Ge.morphNormals!==wt||Ge.morphColors!==Ut||Ge.toneMapping!==zt||Ge.morphTargetsCount!==bt)&&(Tt=!0):(Tt=!0,Ge.__version=ie.version);let Nt=Ge.currentProgram;Tt===!0&&(Nt=Xi(ie,W,X));let Mn=!1,Zt=!1,Lr=!1;const Ht=Nt.getUniforms(),bn=Ge.uniforms;if(ke.useProgram(Nt.program)&&(Mn=!0,Zt=!0,Lr=!0),ie.id!==$&&($=ie.id,Zt=!0),Mn||I!==C){Ht.setValue(k,"projectionMatrix",C.projectionMatrix),Ht.setValue(k,"viewMatrix",C.matrixWorldInverse);const tn=Ht.map.cameraPosition;tn!==void 0&&tn.setValue(k,Ue.setFromMatrixPosition(C.matrixWorld)),Et.logarithmicDepthBuffer&&Ht.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Ht.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),I!==C&&(I=C,Zt=!0,Lr=!0)}if(X.isSkinnedMesh){Ht.setOptional(k,X,"bindMatrix"),Ht.setOptional(k,X,"bindMatrixInverse");const tn=X.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Ht.setValue(k,"boneTexture",tn.boneTexture,tt))}X.isBatchedMesh&&(Ht.setOptional(k,X,"batchingTexture"),Ht.setValue(k,"batchingTexture",X._matricesTexture,tt),Ht.setOptional(k,X,"batchingIdTexture"),Ht.setValue(k,"batchingIdTexture",X._indirectTexture,tt),Ht.setOptional(k,X,"batchingColorTexture"),X._colorsTexture!==null&&Ht.setValue(k,"batchingColorTexture",X._colorsTexture,tt));const qi=ne.morphAttributes;if((qi.position!==void 0||qi.normal!==void 0||qi.color!==void 0)&&ot.update(X,ne,Nt),(Zt||Ge.receiveShadow!==X.receiveShadow)&&(Ge.receiveShadow=X.receiveShadow,Ht.setValue(k,"receiveShadow",X.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(bn.envMap.value=ze,bn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&W.environment!==null&&(bn.envMapIntensity.value=W.environmentIntensity),Zt&&(Ht.setValue(k,"toneMappingExposure",R.toneMappingExposure),Ge.needsLights&&as(bn,Lr),Se&&ie.fog===!0&&Ne.refreshFogUniforms(bn,Se),Ne.refreshMaterialUniforms(bn,ie,de,le,x.state.transmissionRenderTarget[C.id]),Xs.upload(k,Pr(Ge),bn,tt)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Xs.upload(k,Pr(Ge),bn,tt),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Ht.setValue(k,"center",X.center),Ht.setValue(k,"modelViewMatrix",X.modelViewMatrix),Ht.setValue(k,"normalMatrix",X.normalMatrix),Ht.setValue(k,"modelMatrix",X.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const tn=ie.uniformsGroups;for(let ji=0,la=tn.length;ji<la;ji++){const os=tn[ji];Rt.update(os,Nt),Rt.bind(os,Nt)}}return Nt}function as(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function oa(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return l},this.setRenderTargetTextures=function(C,W,ne){Xe.get(C.texture).__webglTexture=W,Xe.get(C.depthTexture).__webglTexture=ne;const ie=Xe.get(C);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=ne===void 0,ie.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,W){const ne=Xe.get(C);ne.__webglFramebuffer=W,ne.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,ne=0){l=C,q=W,z=ne;let ie=!0,X=null,Se=!1,Re=!1;if(C){const ze=Xe.get(C);ze.__useDefaultFramebuffer!==void 0?(ke.bindFramebuffer(k.FRAMEBUFFER,null),ie=!1):ze.__webglFramebuffer===void 0?tt.setupRenderTarget(C):ze.__hasExternalTextures&&tt.rebindTextures(C,Xe.get(C.texture).__webglTexture,Xe.get(C.depthTexture).__webglTexture);const Ke=C.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Re=!0);const Je=Xe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Je[W])?X=Je[W][ne]:X=Je[W],Se=!0):C.samples>0&&tt.useMultisampledRTT(C)===!1?X=Xe.get(C).__webglMultisampledFramebuffer:Array.isArray(Je)?X=Je[ne]:X=Je,P.copy(C.viewport),V.copy(C.scissor),ce=C.scissorTest}else P.copy(De).multiplyScalar(de).floor(),V.copy(Be).multiplyScalar(de).floor(),ce=ft;if(ke.bindFramebuffer(k.FRAMEBUFFER,X)&&ie&&ke.drawBuffers(C,X),ke.viewport(P),ke.scissor(V),ke.setScissorTest(ce),Se){const ze=Xe.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+W,ze.__webglTexture,ne)}else if(Re){const ze=Xe.get(C.texture),Ke=W||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,ze.__webglTexture,ne||0,Ke)}$=-1},this.readRenderTargetPixels=function(C,W,ne,ie,X,Se,Re){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Xe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Re!==void 0&&(Fe=Fe[Re]),Fe){ke.bindFramebuffer(k.FRAMEBUFFER,Fe);try{const ze=C.texture,Ke=ze.format,Je=ze.type;if(!Et.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-ie&&ne>=0&&ne<=C.height-X&&k.readPixels(W,ne,ie,X,qe.convert(Ke),qe.convert(Je),Se)}finally{const ze=l!==null?Xe.get(l).__webglFramebuffer:null;ke.bindFramebuffer(k.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(C,W,ne,ie,X,Se,Re){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Xe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Re!==void 0&&(Fe=Fe[Re]),Fe){ke.bindFramebuffer(k.FRAMEBUFFER,Fe);try{const ze=C.texture,Ke=ze.format,Je=ze.type;if(!Et.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=C.width-ie&&ne>=0&&ne<=C.height-X){const je=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,je),k.bufferData(k.PIXEL_PACK_BUFFER,Se.byteLength,k.STREAM_READ),k.readPixels(W,ne,ie,X,qe.convert(Ke),qe.convert(Je),0),k.flush();const wt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);await Jh(k,wt,4);try{k.bindBuffer(k.PIXEL_PACK_BUFFER,je),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Se)}finally{k.deleteBuffer(je),k.deleteSync(wt)}return Se}}finally{const ze=l!==null?Xe.get(l).__webglFramebuffer:null;ke.bindFramebuffer(k.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(C,W=null,ne=0){C.isTexture!==!0&&(Kr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,C=arguments[1]);const ie=Math.pow(2,-ne),X=Math.floor(C.image.width*ie),Se=Math.floor(C.image.height*ie),Re=W!==null?W.x:0,Fe=W!==null?W.y:0;tt.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,ne,0,0,Re,Fe,X,Se),ke.unbindTexture()},this.copyTextureToTexture=function(C,W,ne=null,ie=null,X=0){C.isTexture!==!0&&(Kr("WebGLRenderer: copyTextureToTexture function signature has changed."),ie=arguments[0]||null,C=arguments[1],W=arguments[2],X=arguments[3]||0,ne=null);let Se,Re,Fe,ze,Ke,Je;ne!==null?(Se=ne.max.x-ne.min.x,Re=ne.max.y-ne.min.y,Fe=ne.min.x,ze=ne.min.y):(Se=C.image.width,Re=C.image.height,Fe=0,ze=0),ie!==null?(Ke=ie.x,Je=ie.y):(Ke=0,Je=0);const je=qe.convert(W.format),wt=qe.convert(W.type);tt.setTexture2D(W,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);const Ut=k.getParameter(k.UNPACK_ROW_LENGTH),zt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),un=k.getParameter(k.UNPACK_SKIP_PIXELS),bt=k.getParameter(k.UNPACK_SKIP_ROWS),Ge=k.getParameter(k.UNPACK_SKIP_IMAGES),Wt=C.isCompressedTexture?C.mipmaps[X]:C.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,Wt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Wt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Fe),k.pixelStorei(k.UNPACK_SKIP_ROWS,ze),C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,X,Ke,Je,Se,Re,je,wt,Wt.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,X,Ke,Je,Wt.width,Wt.height,je,Wt.data):k.texSubImage2D(k.TEXTURE_2D,X,Ke,Je,Se,Re,je,wt,Wt),k.pixelStorei(k.UNPACK_ROW_LENGTH,Ut),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,zt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,un),k.pixelStorei(k.UNPACK_SKIP_ROWS,bt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ge),X===0&&W.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),ke.unbindTexture()},this.copyTextureToTexture3D=function(C,W,ne=null,ie=null,X=0){C.isTexture!==!0&&(Kr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,ie=arguments[1]||null,C=arguments[2],W=arguments[3],X=arguments[4]||0);let Se,Re,Fe,ze,Ke,Je,je,wt,Ut;const zt=C.isCompressedTexture?C.mipmaps[X]:C.image;ne!==null?(Se=ne.max.x-ne.min.x,Re=ne.max.y-ne.min.y,Fe=ne.max.z-ne.min.z,ze=ne.min.x,Ke=ne.min.y,Je=ne.min.z):(Se=zt.width,Re=zt.height,Fe=zt.depth,ze=0,Ke=0,Je=0),ie!==null?(je=ie.x,wt=ie.y,Ut=ie.z):(je=0,wt=0,Ut=0);const un=qe.convert(W.format),bt=qe.convert(W.type);let Ge;if(W.isData3DTexture)tt.setTexture3D(W,0),Ge=k.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)tt.setTexture2DArray(W,0),Ge=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);const Wt=k.getParameter(k.UNPACK_ROW_LENGTH),Tt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Nt=k.getParameter(k.UNPACK_SKIP_PIXELS),Mn=k.getParameter(k.UNPACK_SKIP_ROWS),Zt=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,zt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,zt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ze),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ke),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Je),C.isDataTexture||C.isData3DTexture?k.texSubImage3D(Ge,X,je,wt,Ut,Se,Re,Fe,un,bt,zt.data):W.isCompressedArrayTexture?k.compressedTexSubImage3D(Ge,X,je,wt,Ut,Se,Re,Fe,un,zt.data):k.texSubImage3D(Ge,X,je,wt,Ut,Se,Re,Fe,un,bt,zt),k.pixelStorei(k.UNPACK_ROW_LENGTH,Wt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Tt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Nt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Mn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Zt),X===0&&W.generateMipmaps&&k.generateMipmap(Ge),ke.unbindTexture()},this.initRenderTarget=function(C){Xe.get(C).__webglFramebuffer===void 0&&tt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?tt.setTextureCube(C,0):C.isData3DTexture?tt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?tt.setTexture2DArray(C,0):tt.setTexture2D(C,0),ke.unbindTexture()},this.resetState=function(){q=0,z=0,l=null,ke.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===qo?"display-p3":"srgb",t.unpackColorSpace=Ct.workingColorSpace===na?"display-p3":"srgb"}}class c_ extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class gr extends mn{constructor(e=null,t=1,n=1,r,a,c,u,f,d=en,g=en,v,_){super(null,c,u,f,d,g,r,a,v,_),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zr extends ui{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Js=new j,Qs=new j,lc=new Xt,Gr=new ia,Us=new ns,$a=new j,cc=new j;class u_ extends gn{constructor(e=new yn,t=new Zr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)Js.fromBufferAttribute(t,r-1),Qs.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Js.distanceTo(Qs);e.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(r),Us.radius+=a,e.ray.intersectsSphere(Us)===!1)return;lc.copy(r).invert(),Gr.copy(e.ray).applyMatrix4(lc);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,d=this.isLineSegments?2:1,g=n.index,_=n.attributes.position;if(g!==null){const y=Math.max(0,c.start),E=Math.min(g.count,c.start+c.count);for(let b=y,x=E-1;b<x;b+=d){const m=g.getX(b),L=g.getX(b+1),R=Ns(this,e,Gr,f,m,L);R&&t.push(R)}if(this.isLineLoop){const b=g.getX(E-1),x=g.getX(y),m=Ns(this,e,Gr,f,b,x);m&&t.push(m)}}else{const y=Math.max(0,c.start),E=Math.min(_.count,c.start+c.count);for(let b=y,x=E-1;b<x;b+=d){const m=Ns(this,e,Gr,f,b,b+1);m&&t.push(m)}if(this.isLineLoop){const b=Ns(this,e,Gr,f,E-1,y);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=r.length;a<c;a++){const u=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function Ns(i,e,t,n,r,a){const c=i.geometry.attributes.position;if(Js.fromBufferAttribute(c,r),Qs.fromBufferAttribute(c,a),t.distanceSqToSegment(Js,Qs,$a,cc)>n)return;$a.applyMatrix4(i.matrixWorld);const f=e.ray.origin.distanceTo($a);if(!(f<e.near||f>e.far))return{distance:f,point:cc.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,object:i}}const uc=new j,hc=new j;class ea extends u_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,a=t.count;r<a;r+=2)uc.fromBufferAttribute(t,r),hc.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+uc.distanceTo(hc);e.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qr extends ui{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const fc=new Xt,Fo=new ia,Fs=new ns,Os=new j;class Ka extends gn{constructor(e=new yn,t=new qr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere),Fs.applyMatrix4(r),Fs.radius+=a,e.ray.intersectsSphere(Fs)===!1)return;fc.copy(r).invert(),Fo.copy(e.ray).applyMatrix4(fc);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,d=n.index,v=n.attributes.position;if(d!==null){const _=Math.max(0,c.start),y=Math.min(d.count,c.start+c.count);for(let E=_,b=y;E<b;E++){const x=d.getX(E);Os.fromBufferAttribute(v,x),dc(Os,x,f,r,e,t,this)}}else{const _=Math.max(0,c.start),y=Math.min(v.count,c.start+c.count);for(let E=_,b=y;E<b;E++)Os.fromBufferAttribute(v,E),dc(Os,E,f,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=r.length;a<c;a++){const u=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function dc(i,e,t,n,r,a,c){const u=Fo.distanceSqToPoint(i);if(u<t){const f=new j;Fo.closestPointToPoint(i,f),f.applyMatrix4(n);const d=r.ray.origin.distanceTo(f);if(d<r.near||d>r.far)return;a.push({distance:d,distanceToRay:Math.sqrt(u),point:f,index:e,face:null,object:c})}}class h_ extends ui{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new _t(16777215),this.specular=new _t(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oc,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const pc={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class f_{constructor(e,t,n){const r=this;let a=!1,c=0,u=0,f;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(g){u++,a===!1&&r.onStart!==void 0&&r.onStart(g,c,u),a=!0},this.itemEnd=function(g){c++,r.onProgress!==void 0&&r.onProgress(g,c,u),c===u&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(g){r.onError!==void 0&&r.onError(g)},this.resolveURL=function(g){return f?f(g):g},this.setURLModifier=function(g){return f=g,this},this.addHandler=function(g,v){return d.push(g,v),this},this.removeHandler=function(g){const v=d.indexOf(g);return v!==-1&&d.splice(v,2),this},this.getHandler=function(g){for(let v=0,_=d.length;v<_;v+=2){const y=d[v],E=d[v+1];if(y.global&&(y.lastIndex=0),y.test(g))return E}return null}}}const d_=new f_;class Ko{constructor(e){this.manager=e!==void 0?e:d_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,a){n.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ko.DEFAULT_MATERIAL_NAME="__DEFAULT";const ri={};class p_ extends Error{constructor(e,t){super(e),this.response=t}}class m_ extends Ko{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=pc.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(ri[e]!==void 0){ri[e].push({onLoad:t,onProgress:n,onError:r});return}ri[e]=[],ri[e].push({onLoad:t,onProgress:n,onError:r});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),u=this.mimeType,f=this.responseType;fetch(c).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const g=ri[e],v=d.body.getReader(),_=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),y=_?parseInt(_):0,E=y!==0;let b=0;const x=new ReadableStream({start(m){L();function L(){v.read().then(({done:R,value:N})=>{if(R)m.close();else{b+=N.byteLength;const q=new ProgressEvent("progress",{lengthComputable:E,loaded:b,total:y});for(let z=0,l=g.length;z<l;z++){const $=g[z];$.onProgress&&$.onProgress(q)}m.enqueue(N),L()}},R=>{m.error(R)})}}});return new Response(x)}else throw new p_(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(f){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(g=>new DOMParser().parseFromString(g,u));case"json":return d.json();default:if(u===void 0)return d.text();{const v=/charset="?([^;"\s]*)"?/i.exec(u),_=v&&v[1]?v[1].toLowerCase():void 0,y=new TextDecoder(_);return d.arrayBuffer().then(E=>y.decode(E))}}}).then(d=>{pc.add(e,d);const g=ri[e];delete ri[e];for(let v=0,_=g.length;v<_;v++){const y=g[v];y.onLoad&&y.onLoad(d)}}).catch(d=>{const g=ri[e];if(g===void 0)throw this.manager.itemError(e),d;delete ri[e];for(let v=0,_=g.length;v<_;v++){const y=g[v];y.onError&&y.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class mc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ln(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class g_ extends ea{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new yn;r.setAttribute("position",new Yt(t,3)),r.setAttribute("color",new Yt(n,3));const a=new Zr({vertexColors:!0,toneMapped:!1});super(r,a),this.type="AxesHelper"}setColors(e,t,n){const r=new _t,a=this.geometry.attributes.color.array;return r.set(e),r.toArray(a,0),r.toArray(a,3),r.set(t),r.toArray(a,6),r.toArray(a,9),r.set(n),r.toArray(a,12),r.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bo);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class Yn{constructor(e,t,n,r,a="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(a),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),Yn.nextNameID=Yn.nextNameID||0,this.$name.id=`lil-gui-name-${++Yn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class __ extends Yn{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Oo(i){let e,t;return(e=i.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const v_={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:Oo,toHexString:Oo},es={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},x_={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,e,t=1){const n=es.fromHexString(i);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([i,e,t],n=1){n=255/n;const r=i*n<<16^e*n<<8^t*n<<0;return es.toHexString(r)}},y_={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,e,t=1){const n=es.fromHexString(i);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:i,g:e,b:t},n=1){n=255/n;const r=i*n<<16^e*n<<8^t*n<<0;return es.toHexString(r)}},M_=[v_,es,x_,y_];function S_(i){return M_.find(e=>e.match(i))}class E_ extends Yn{constructor(e,t,n,r){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=S_(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const a=Oo(this.$text.value);a&&this._setValueFromHexString(a)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Za extends Yn{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class b_ extends Yn{constructor(e,t,n,r,a,c){super(e,t,n,"number"),this._initInput(),this.min(r),this.max(a);const u=c!==void 0;this.step(u?c:this._getImplicitStep(),u),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let L=parseFloat(this.$input.value);isNaN(L)||(this._stepExplicit&&(L=this._snap(L)),this.setValue(this._clamp(L)))},n=L=>{const R=parseFloat(this.$input.value);isNaN(R)||(this._snapClampSetValue(R+L),this.$input.value=this.getValue())},r=L=>{L.key==="Enter"&&this.$input.blur(),L.code==="ArrowUp"&&(L.preventDefault(),n(this._step*this._arrowKeyMultiplier(L))),L.code==="ArrowDown"&&(L.preventDefault(),n(this._step*this._arrowKeyMultiplier(L)*-1))},a=L=>{this._inputFocused&&(L.preventDefault(),n(this._step*this._normalizeMouseWheel(L)))};let c=!1,u,f,d,g,v;const _=5,y=L=>{u=L.clientX,f=d=L.clientY,c=!0,g=this.getValue(),v=0,window.addEventListener("mousemove",E),window.addEventListener("mouseup",b)},E=L=>{if(c){const R=L.clientX-u,N=L.clientY-f;Math.abs(N)>_?(L.preventDefault(),this.$input.blur(),c=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(R)>_&&b()}if(!c){const R=L.clientY-d;v-=R*this._step*this._arrowKeyMultiplier(L),g+v>this._max?v=this._max-g:g+v<this._min&&(v=this._min-g),this._snapClampSetValue(g+v)}d=L.clientY},b=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",E),window.removeEventListener("mouseup",b)},x=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",r),this.$input.addEventListener("wheel",a,{passive:!1}),this.$input.addEventListener("mousedown",y),this.$input.addEventListener("focus",x),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(m,L,R,N,q)=>(m-L)/(R-L)*(q-N)+N,t=m=>{const L=this.$slider.getBoundingClientRect();let R=e(m,L.left,L.right,this._min,this._max);this._snapClampSetValue(R)},n=m=>{this._setDraggingStyle(!0),t(m.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",a)},r=m=>{t(m.clientX)},a=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",a)};let c=!1,u,f;const d=m=>{m.preventDefault(),this._setDraggingStyle(!0),t(m.touches[0].clientX),c=!1},g=m=>{m.touches.length>1||(this._hasScrollBar?(u=m.touches[0].clientX,f=m.touches[0].clientY,c=!0):d(m),window.addEventListener("touchmove",v,{passive:!1}),window.addEventListener("touchend",_))},v=m=>{if(c){const L=m.touches[0].clientX-u,R=m.touches[0].clientY-f;Math.abs(L)>Math.abs(R)?d(m):(window.removeEventListener("touchmove",v),window.removeEventListener("touchend",_))}else m.preventDefault(),t(m.touches[0].clientX)},_=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",v),window.removeEventListener("touchend",_)},y=this._callOnFinishChange.bind(this),E=400;let b;const x=m=>{if(Math.abs(m.deltaX)<Math.abs(m.deltaY)&&this._hasScrollBar)return;m.preventDefault();const R=this._normalizeMouseWheel(m)*this._step;this._snapClampSetValue(this.getValue()+R),this.$input.value=this.getValue(),clearTimeout(b),b=setTimeout(y,E)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",g,{passive:!1}),this.$slider.addEventListener("wheel",x,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class T_ extends Yn{constructor(e,t,n,r){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class A_ extends Yn{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const w_=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function C_(i){const e=document.createElement("style");e.innerHTML=i;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let gc=!1;class Zo{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:r,title:a="Controls",closeFolders:c=!1,injectStyles:u=!0,touchStyles:f=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",d=>{(d.code==="Enter"||d.code==="Space")&&(d.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(a),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),f&&this.domElement.classList.add("allow-touch-styles"),!gc&&u&&(C_(w_),gc=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=c}add(e,t,n,r,a){if(Object(n)===n)return new T_(this,e,t,n);const c=e[t];switch(typeof c){case"number":return new b_(this,e,t,n,r,a);case"boolean":return new __(this,e,t);case"string":return new A_(this,e,t);case"function":return new Za(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,c)}addColor(e,t,n=1){return new E_(this,e,t,n)}addFolder(e){const t=new Zo({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Za||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Za)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=a=>{a.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const R_=new Zc(-1,1,1,-1,0,1);class P_ extends yn{constructor(){super(),this.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Yt([0,2,0,0,2,0],2))}}const L_=new P_;class D_{constructor(e){this._mesh=new Pn(L_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,R_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class I_{constructor(e,t,n){this.variables=[],this.currentTextureIndex=0;let r=cn;const a={passThruTexture:{value:null}},c=d(v(),a),u=new D_(c);this.setDataType=function(_){return r=_,this},this.addVariable=function(_,y,E){const b=this.createShaderMaterial(y),x={name:_,initialValueTexture:E,material:b,dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:en,magFilter:en};return this.variables.push(x),x},this.setVariableDependencies=function(_,y){_.dependencies=y},this.init=function(){if(n.capabilities.maxVertexTextures===0)return"No support for vertex shader textures.";for(let _=0;_<this.variables.length;_++){const y=this.variables[_];y.renderTargets[0]=this.createRenderTarget(e,t,y.wrapS,y.wrapT,y.minFilter,y.magFilter),y.renderTargets[1]=this.createRenderTarget(e,t,y.wrapS,y.wrapT,y.minFilter,y.magFilter),this.renderTexture(y.initialValueTexture,y.renderTargets[0]),this.renderTexture(y.initialValueTexture,y.renderTargets[1]);const E=y.material,b=E.uniforms;if(y.dependencies!==null)for(let x=0;x<y.dependencies.length;x++){const m=y.dependencies[x];if(m.name!==y.name){let L=!1;for(let R=0;R<this.variables.length;R++)if(m.name===this.variables[R].name){L=!0;break}if(!L)return"Variable dependency not found. Variable="+y.name+", dependency="+m.name}b[m.name]={value:null},E.fragmentShader=`
uniform sampler2D `+m.name+`;
`+E.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){const _=this.currentTextureIndex,y=this.currentTextureIndex===0?1:0;for(let E=0,b=this.variables.length;E<b;E++){const x=this.variables[E];if(x.dependencies!==null){const m=x.material.uniforms;for(let L=0,R=x.dependencies.length;L<R;L++){const N=x.dependencies[L];m[N.name].value=N.renderTargets[_].texture}}this.doRenderTarget(x.material,x.renderTargets[y])}this.currentTextureIndex=y},this.getCurrentRenderTarget=function(_){return _.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(_){return _.renderTargets[this.currentTextureIndex===0?1:0]},this.dispose=function(){u.dispose();const _=this.variables;for(let y=0;y<_.length;y++){const E=_[y];E.initialValueTexture&&E.initialValueTexture.dispose();const b=E.renderTargets;for(let x=0;x<b.length;x++)b[x].dispose()}};function f(_){_.defines.resolution="vec2( "+e.toFixed(1)+", "+t.toFixed(1)+" )"}this.addResolutionDefine=f;function d(_,y){y=y||{};const E=new Kn({name:"GPUComputationShader",uniforms:y,vertexShader:g(),fragmentShader:_});return f(E),E}this.createShaderMaterial=d,this.createRenderTarget=function(_,y,E,b,x,m){return _=_||e,y=y||t,E=E||oi,b=b||oi,x=x||en,m=m||en,new Ti(_,y,{wrapS:E,wrapT:b,minFilter:x,magFilter:m,format:pn,type:r,depthBuffer:!1})},this.createTexture=function(){const _=new Float32Array(e*t*4),y=new gr(_,e,t,pn,cn);return y.needsUpdate=!0,y},this.renderTexture=function(_,y){a.passThruTexture.value=_,this.doRenderTarget(c,y),a.passThruTexture.value=null},this.doRenderTarget=function(_,y){const E=n.getRenderTarget(),b=n.xr.enabled,x=n.shadowMap.autoUpdate;n.xr.enabled=!1,n.shadowMap.autoUpdate=!1,u.material=_,n.setRenderTarget(y),u.render(n),u.material=c,n.xr.enabled=b,n.shadowMap.autoUpdate=x,n.setRenderTarget(E)};function g(){return`void main()	{

	gl_Position = vec4( position, 1.0 );

}
`}function v(){return`uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`}}}const _c={type:"change"},Ja={type:"start"},vc={type:"end"},Bs=new ia,xc=new yi,U_=Math.cos(70*Kh.DEG2RAD);class N_ extends Gi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ki.ROTATE,MIDDLE:Ki.DOLLY,RIGHT:Ki.PAN},this.touches={ONE:Zi.ROTATE,TWO:Zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return u.phi},this.getAzimuthalAngle=function(){return u.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",Ie),this._domElementKeyEvents=T},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ie),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(_c),n.update(),a=r.NONE},this.update=function(){const T=new j,J=new Vi().setFromUnitVectors(e.up,new j(0,1,0)),te=J.clone().invert(),se=new j,_e=new Vi,Ve=new j,Ze=2*Math.PI;return function(Mt=null){const dt=n.object.position;T.copy(dt).sub(n.target),T.applyQuaternion(J),u.setFromVector3(T),n.autoRotate&&a===r.NONE&&ce(P(Mt)),n.enableDamping?(u.theta+=f.theta*n.dampingFactor,u.phi+=f.phi*n.dampingFactor):(u.theta+=f.theta,u.phi+=f.phi);let Gt=n.minAzimuthAngle,kt=n.maxAzimuthAngle;isFinite(Gt)&&isFinite(kt)&&(Gt<-Math.PI?Gt+=Ze:Gt>Math.PI&&(Gt-=Ze),kt<-Math.PI?kt+=Ze:kt>Math.PI&&(kt-=Ze),Gt<=kt?u.theta=Math.max(Gt,Math.min(kt,u.theta)):u.theta=u.theta>(Gt+kt)/2?Math.max(Gt,u.theta):Math.min(kt,u.theta)),u.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,u.phi)),u.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(g,n.dampingFactor):n.target.add(g),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Ln=!1;if(n.zoomToCursor&&z||n.object.isOrthographicCamera)u.radius=De(u.radius);else{const Bt=u.radius;u.radius=De(u.radius*d),Ln=Bt!=u.radius}if(T.setFromSpherical(u),T.applyQuaternion(te),dt.copy(n.target).add(T),n.object.lookAt(n.target),n.enableDamping===!0?(f.theta*=1-n.dampingFactor,f.phi*=1-n.dampingFactor,g.multiplyScalar(1-n.dampingFactor)):(f.set(0,0,0),g.set(0,0,0)),n.zoomToCursor&&z){let Bt=null;if(n.object.isPerspectiveCamera){const rn=T.length();Bt=De(rn*d);const Dn=rn-Bt;n.object.position.addScaledVector(N,Dn),n.object.updateMatrixWorld(),Ln=!!Dn}else if(n.object.isOrthographicCamera){const rn=new j(q.x,q.y,0);rn.unproject(n.object);const Dn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/d)),n.object.updateProjectionMatrix(),Ln=Dn!==n.object.zoom;const zn=new j(q.x,q.y,0);zn.unproject(n.object),n.object.position.sub(zn).add(rn),n.object.updateMatrixWorld(),Bt=T.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Bt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Bt).add(n.object.position):(Bs.origin.copy(n.object.position),Bs.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Bs.direction))<U_?e.lookAt(n.target):(xc.setFromNormalAndCoplanarPoint(n.object.up,n.target),Bs.intersectPlane(xc,n.target))))}else if(n.object.isOrthographicCamera){const Bt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/d)),Bt!==n.object.zoom&&(n.object.updateProjectionMatrix(),Ln=!0)}return d=1,z=!1,Ln||se.distanceToSquared(n.object.position)>c||8*(1-_e.dot(n.object.quaternion))>c||Ve.distanceToSquared(n.target)>c?(n.dispatchEvent(_c),se.copy(n.object.position),_e.copy(n.object.quaternion),Ve.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ce),n.domElement.removeEventListener("pointerdown",tt),n.domElement.removeEventListener("pointercancel",w),n.domElement.removeEventListener("wheel",ve),n.domElement.removeEventListener("pointermove",O),n.domElement.removeEventListener("pointerup",w),n.domElement.getRootNode().removeEventListener("keydown",Ne,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ie),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const c=1e-6,u=new mc,f=new mc;let d=1;const g=new j,v=new lt,_=new lt,y=new lt,E=new lt,b=new lt,x=new lt,m=new lt,L=new lt,R=new lt,N=new j,q=new lt;let z=!1;const l=[],$={};let I=!1;function P(T){return T!==null?2*Math.PI/60*n.autoRotateSpeed*T:2*Math.PI/60/60*n.autoRotateSpeed}function V(T){const J=Math.abs(T*.01);return Math.pow(.95,n.zoomSpeed*J)}function ce(T){f.theta-=T}function Y(T){f.phi-=T}const pe=function(){const T=new j;return function(te,se){T.setFromMatrixColumn(se,0),T.multiplyScalar(-te),g.add(T)}}(),me=function(){const T=new j;return function(te,se){n.screenSpacePanning===!0?T.setFromMatrixColumn(se,1):(T.setFromMatrixColumn(se,0),T.crossVectors(n.object.up,T)),T.multiplyScalar(te),g.add(T)}}(),le=function(){const T=new j;return function(te,se){const _e=n.domElement;if(n.object.isPerspectiveCamera){const Ve=n.object.position;T.copy(Ve).sub(n.target);let Ze=T.length();Ze*=Math.tan(n.object.fov/2*Math.PI/180),pe(2*te*Ze/_e.clientHeight,n.object.matrix),me(2*se*Ze/_e.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(pe(te*(n.object.right-n.object.left)/n.object.zoom/_e.clientWidth,n.object.matrix),me(se*(n.object.top-n.object.bottom)/n.object.zoom/_e.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function de(T){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?d/=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function oe(T){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?d*=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function be(T,J){if(!n.zoomToCursor)return;z=!0;const te=n.domElement.getBoundingClientRect(),se=T-te.left,_e=J-te.top,Ve=te.width,Ze=te.height;q.x=se/Ve*2-1,q.y=-(_e/Ze)*2+1,N.set(q.x,q.y,1).unproject(n.object).sub(n.object.position).normalize()}function De(T){return Math.max(n.minDistance,Math.min(n.maxDistance,T))}function Be(T){v.set(T.clientX,T.clientY)}function ft(T){be(T.clientX,T.clientX),m.set(T.clientX,T.clientY)}function vt(T){E.set(T.clientX,T.clientY)}function fe(T){_.set(T.clientX,T.clientY),y.subVectors(_,v).multiplyScalar(n.rotateSpeed);const J=n.domElement;ce(2*Math.PI*y.x/J.clientHeight),Y(2*Math.PI*y.y/J.clientHeight),v.copy(_),n.update()}function ye(T){L.set(T.clientX,T.clientY),R.subVectors(L,m),R.y>0?de(V(R.y)):R.y<0&&oe(V(R.y)),m.copy(L),n.update()}function Oe(T){b.set(T.clientX,T.clientY),x.subVectors(b,E).multiplyScalar(n.panSpeed),le(x.x,x.y),E.copy(b),n.update()}function Ue(T){be(T.clientX,T.clientY),T.deltaY<0?oe(V(T.deltaY)):T.deltaY>0&&de(V(T.deltaY)),n.update()}function it(T){let J=!1;switch(T.code){case n.keys.UP:T.ctrlKey||T.metaKey||T.shiftKey?Y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):le(0,n.keyPanSpeed),J=!0;break;case n.keys.BOTTOM:T.ctrlKey||T.metaKey||T.shiftKey?Y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):le(0,-n.keyPanSpeed),J=!0;break;case n.keys.LEFT:T.ctrlKey||T.metaKey||T.shiftKey?ce(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):le(n.keyPanSpeed,0),J=!0;break;case n.keys.RIGHT:T.ctrlKey||T.metaKey||T.shiftKey?ce(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):le(-n.keyPanSpeed,0),J=!0;break}J&&(T.preventDefault(),n.update())}function at(T){if(l.length===1)v.set(T.pageX,T.pageY);else{const J=et(T),te=.5*(T.pageX+J.x),se=.5*(T.pageY+J.y);v.set(te,se)}}function $e(T){if(l.length===1)E.set(T.pageX,T.pageY);else{const J=et(T),te=.5*(T.pageX+J.x),se=.5*(T.pageY+J.y);E.set(te,se)}}function Lt(T){const J=et(T),te=T.pageX-J.x,se=T.pageY-J.y,_e=Math.sqrt(te*te+se*se);m.set(0,_e)}function k(T){n.enableZoom&&Lt(T),n.enablePan&&$e(T)}function Dt(T){n.enableZoom&&Lt(T),n.enableRotate&&at(T)}function xt(T){if(l.length==1)_.set(T.pageX,T.pageY);else{const te=et(T),se=.5*(T.pageX+te.x),_e=.5*(T.pageY+te.y);_.set(se,_e)}y.subVectors(_,v).multiplyScalar(n.rotateSpeed);const J=n.domElement;ce(2*Math.PI*y.x/J.clientHeight),Y(2*Math.PI*y.y/J.clientHeight),v.copy(_)}function Et(T){if(l.length===1)b.set(T.pageX,T.pageY);else{const J=et(T),te=.5*(T.pageX+J.x),se=.5*(T.pageY+J.y);b.set(te,se)}x.subVectors(b,E).multiplyScalar(n.panSpeed),le(x.x,x.y),E.copy(b)}function ke(T){const J=et(T),te=T.pageX-J.x,se=T.pageY-J.y,_e=Math.sqrt(te*te+se*se);L.set(0,_e),R.set(0,Math.pow(L.y/m.y,n.zoomSpeed)),de(R.y),m.copy(L);const Ve=(T.pageX+J.x)*.5,Ze=(T.pageY+J.y)*.5;be(Ve,Ze)}function It(T){n.enableZoom&&ke(T),n.enablePan&&Et(T)}function Xe(T){n.enableZoom&&ke(T),n.enableRotate&&xt(T)}function tt(T){n.enabled!==!1&&(l.length===0&&(n.domElement.setPointerCapture(T.pointerId),n.domElement.addEventListener("pointermove",O),n.domElement.addEventListener("pointerup",w)),!we(T)&&(ot(T),T.pointerType==="touch"?rt(T):ee(T)))}function O(T){n.enabled!==!1&&(T.pointerType==="touch"?Me(T):ge(T))}function w(T){switch(We(T),l.length){case 0:n.domElement.releasePointerCapture(T.pointerId),n.domElement.removeEventListener("pointermove",O),n.domElement.removeEventListener("pointerup",w),n.dispatchEvent(vc),a=r.NONE;break;case 1:const J=l[0],te=$[J];rt({pointerId:J,pageX:te.x,pageY:te.y});break}}function ee(T){let J;switch(T.button){case 0:J=n.mouseButtons.LEFT;break;case 1:J=n.mouseButtons.MIDDLE;break;case 2:J=n.mouseButtons.RIGHT;break;default:J=-1}switch(J){case Ki.DOLLY:if(n.enableZoom===!1)return;ft(T),a=r.DOLLY;break;case Ki.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enablePan===!1)return;vt(T),a=r.PAN}else{if(n.enableRotate===!1)return;Be(T),a=r.ROTATE}break;case Ki.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enableRotate===!1)return;Be(T),a=r.ROTATE}else{if(n.enablePan===!1)return;vt(T),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(Ja)}function ge(T){switch(a){case r.ROTATE:if(n.enableRotate===!1)return;fe(T);break;case r.DOLLY:if(n.enableZoom===!1)return;ye(T);break;case r.PAN:if(n.enablePan===!1)return;Oe(T);break}}function ve(T){n.enabled===!1||n.enableZoom===!1||a!==r.NONE||(T.preventDefault(),n.dispatchEvent(Ja),Ue(K(T)),n.dispatchEvent(vc))}function K(T){const J=T.deltaMode,te={clientX:T.clientX,clientY:T.clientY,deltaY:T.deltaY};switch(J){case 1:te.deltaY*=16;break;case 2:te.deltaY*=100;break}return T.ctrlKey&&!I&&(te.deltaY*=10),te}function Ne(T){T.key==="Control"&&(I=!0,n.domElement.getRootNode().addEventListener("keyup",Te,{passive:!0,capture:!0}))}function Te(T){T.key==="Control"&&(I=!1,n.domElement.getRootNode().removeEventListener("keyup",Te,{passive:!0,capture:!0}))}function Ie(T){n.enabled===!1||n.enablePan===!1||it(T)}function rt(T){switch(qe(T),l.length){case 1:switch(n.touches.ONE){case Zi.ROTATE:if(n.enableRotate===!1)return;at(T),a=r.TOUCH_ROTATE;break;case Zi.PAN:if(n.enablePan===!1)return;$e(T),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(n.touches.TWO){case Zi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;k(T),a=r.TOUCH_DOLLY_PAN;break;case Zi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Dt(T),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(Ja)}function Me(T){switch(qe(T),a){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;xt(T),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Et(T),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;It(T),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Xe(T),n.update();break;default:a=r.NONE}}function Ce(T){n.enabled!==!1&&T.preventDefault()}function ot(T){l.push(T.pointerId)}function We(T){delete $[T.pointerId];for(let J=0;J<l.length;J++)if(l[J]==T.pointerId){l.splice(J,1);return}}function we(T){for(let J=0;J<l.length;J++)if(l[J]==T.pointerId)return!0;return!1}function qe(T){let J=$[T.pointerId];J===void 0&&(J=new lt,$[T.pointerId]=J),J.set(T.pageX,T.pageY)}function et(T){const J=T.pointerId===l[0]?l[1]:l[0];return $[J]}n.domElement.addEventListener("contextmenu",Ce),n.domElement.addEventListener("pointerdown",tt),n.domElement.addEventListener("pointercancel",w),n.domElement.addEventListener("wheel",ve,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Ne,{passive:!0,capture:!0}),this.update()}}const F_=/^[og]\s*(.+)?/,O_=/^mtllib /,B_=/^usemtl /,z_=/^usemap /,yc=/\s+/,Mc=new j,Qa=new j,Sc=new j,Ec=new j,Cn=new j,zs=new _t;function k_(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,a){const c=this._finalize(!1);c&&(c.inherited||c.groupCount<=0)&&this.materials.splice(c.index,1);const u={index:this.materials.length,name:r||"",mtllib:Array.isArray(a)&&a.length>0?a[a.length-1]:"",smooth:c!==void 0?c.smooth:this.smooth,groupStart:c!==void 0?c.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(f){const d={index:typeof f=="number"?f:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return d.clone=this.clone.bind(d),d}};return this.materials.push(u),u},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const a=this.currentMaterial();if(a&&a.groupEnd===-1&&(a.groupEnd=this.geometry.vertices.length/3,a.groupCount=a.groupEnd-a.groupStart,a.inherited=!1),r&&this.materials.length>1)for(let c=this.materials.length-1;c>=0;c--)this.materials[c].groupCount<=0&&this.materials.splice(c,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),a}},n&&n.name&&typeof n.clone=="function"){const r=n.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const r=this.vertices,a=this.object.geometry.vertices;a.push(r[e+0],r[e+1],r[e+2]),a.push(r[t+0],r[t+1],r[t+2]),a.push(r[n+0],r[n+1],r[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const r=this.normals,a=this.object.geometry.normals;a.push(r[e+0],r[e+1],r[e+2]),a.push(r[t+0],r[t+1],r[t+2]),a.push(r[n+0],r[n+1],r[n+2])},addFaceNormal:function(e,t,n){const r=this.vertices,a=this.object.geometry.normals;Mc.fromArray(r,e),Qa.fromArray(r,t),Sc.fromArray(r,n),Cn.subVectors(Sc,Qa),Ec.subVectors(Mc,Qa),Cn.cross(Ec),Cn.normalize(),a.push(Cn.x,Cn.y,Cn.z),a.push(Cn.x,Cn.y,Cn.z),a.push(Cn.x,Cn.y,Cn.z)},addColor:function(e,t,n){const r=this.colors,a=this.object.geometry.colors;r[e]!==void 0&&a.push(r[e+0],r[e+1],r[e+2]),r[t]!==void 0&&a.push(r[t+0],r[t+1],r[t+2]),r[n]!==void 0&&a.push(r[n+0],r[n+1],r[n+2])},addUV:function(e,t,n){const r=this.uvs,a=this.object.geometry.uvs;a.push(r[e+0],r[e+1]),a.push(r[t+0],r[t+1]),a.push(r[n+0],r[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,r,a,c,u,f,d){const g=this.vertices.length;let v=this.parseVertexIndex(e,g),_=this.parseVertexIndex(t,g),y=this.parseVertexIndex(n,g);if(this.addVertex(v,_,y),this.addColor(v,_,y),u!==void 0&&u!==""){const E=this.normals.length;v=this.parseNormalIndex(u,E),_=this.parseNormalIndex(f,E),y=this.parseNormalIndex(d,E),this.addNormal(v,_,y)}else this.addFaceNormal(v,_,y);if(r!==void 0&&r!==""){const E=this.uvs.length;v=this.parseUVIndex(r,E),_=this.parseUVIndex(a,E),y=this.parseUVIndex(c,E),this.addUV(v,_,y),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,r=e.length;n<r;n++){const a=this.parseVertexIndex(e[n],t);this.addVertexPoint(a),this.addColor(a)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,r=this.uvs.length;for(let a=0,c=e.length;a<c;a++)this.addVertexLine(this.parseVertexIndex(e[a],n));for(let a=0,c=t.length;a<c;a++)this.addUVLine(this.parseUVIndex(t[a],r))}};return i.startObject("",!1),i}class H_ extends Ko{constructor(e){super(e),this.materials=null}load(e,t,n,r){const a=this,c=new m_(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{t(a.parse(u))}catch(f){r?r(f):console.error(f),a.manager.itemError(e)}},n,r)}setMaterials(e){return this.materials=e,this}parse(e){const t=new k_;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let r=[];for(let u=0,f=n.length;u<f;u++){const d=n[u].trimStart();if(d.length===0)continue;const g=d.charAt(0);if(g!=="#")if(g==="v"){const v=d.split(yc);switch(v[0]){case"v":t.vertices.push(parseFloat(v[1]),parseFloat(v[2]),parseFloat(v[3])),v.length>=7?(zs.setRGB(parseFloat(v[4]),parseFloat(v[5]),parseFloat(v[6])).convertSRGBToLinear(),t.colors.push(zs.r,zs.g,zs.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(v[1]),parseFloat(v[2]),parseFloat(v[3]));break;case"vt":t.uvs.push(parseFloat(v[1]),parseFloat(v[2]));break}}else if(g==="f"){const _=d.slice(1).trim().split(yc),y=[];for(let b=0,x=_.length;b<x;b++){const m=_[b];if(m.length>0){const L=m.split("/");y.push(L)}}const E=y[0];for(let b=1,x=y.length-1;b<x;b++){const m=y[b],L=y[b+1];t.addFace(E[0],m[0],L[0],E[1],m[1],L[1],E[2],m[2],L[2])}}else if(g==="l"){const v=d.substring(1).trim().split(" ");let _=[];const y=[];if(d.indexOf("/")===-1)_=v;else for(let E=0,b=v.length;E<b;E++){const x=v[E].split("/");x[0]!==""&&_.push(x[0]),x[1]!==""&&y.push(x[1])}t.addLineGeometry(_,y)}else if(g==="p"){const _=d.slice(1).trim().split(" ");t.addPointGeometry(_)}else if((r=F_.exec(d))!==null){const v=(" "+r[0].slice(1).trim()).slice(1);t.startObject(v)}else if(B_.test(d))t.object.startMaterial(d.substring(7).trim(),t.materialLibraries);else if(O_.test(d))t.materialLibraries.push(d.substring(7).trim());else if(z_.test(d))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(g==="s"){if(r=d.split(" "),r.length>1){const _=r[1].trim().toLowerCase();t.object.smooth=_!=="0"&&_!=="off"}else t.object.smooth=!0;const v=t.object.currentMaterial();v&&(v.smooth=t.object.smooth)}else{if(d==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+d+'"')}}t.finalize();const a=new Xr;if(a.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let u=0,f=t.objects.length;u<f;u++){const d=t.objects[u],g=d.geometry,v=d.materials,_=g.type==="Line",y=g.type==="Points";let E=!1;if(g.vertices.length===0)continue;const b=new yn;b.setAttribute("position",new Yt(g.vertices,3)),g.normals.length>0&&b.setAttribute("normal",new Yt(g.normals,3)),g.colors.length>0&&(E=!0,b.setAttribute("color",new Yt(g.colors,3))),g.hasUVIndices===!0&&b.setAttribute("uv",new Yt(g.uvs,2));const x=[];for(let L=0,R=v.length;L<R;L++){const N=v[L],q=N.name+"_"+N.smooth+"_"+E;let z=t.materials[q];if(this.materials!==null){if(z=this.materials.create(N.name),_&&z&&!(z instanceof Zr)){const l=new Zr;ui.prototype.copy.call(l,z),l.color.copy(z.color),z=l}else if(y&&z&&!(z instanceof qr)){const l=new qr({size:10,sizeAttenuation:!1});ui.prototype.copy.call(l,z),l.color.copy(z.color),l.map=z.map,z=l}}z===void 0&&(_?z=new Zr:y?z=new qr({size:1,sizeAttenuation:!1}):z=new h_,z.name=N.name,z.flatShading=!N.smooth,z.vertexColors=E,t.materials[q]=z),x.push(z)}let m;if(x.length>1){for(let L=0,R=v.length;L<R;L++){const N=v[L];b.addGroup(N.groupStart,N.groupCount,L)}_?m=new ea(b,x):y?m=new Ka(b,x):m=new Pn(b,x)}else _?m=new ea(b,x[0]):y?m=new Ka(b,x[0]):m=new Pn(b,x[0]);m.name=d.name,a.add(m)}else if(t.vertices.length>0){const u=new qr({size:1,sizeAttenuation:!1}),f=new yn;f.setAttribute("position",new Yt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(f.setAttribute("color",new Yt(t.colors,3)),u.vertexColors=!0);const d=new Ka(f,u);a.add(d)}return a}}function V_(i,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=i.getIndex(),r=i.getAttribute("position"),a=n?n.count:r.count;let c=0;const u=Object.keys(i.attributes),f={},d={},g=[],v=["getX","getY","getZ","getW"],_=["setX","setY","setZ","setW"];for(let L=0,R=u.length;L<R;L++){const N=u[L],q=i.attributes[N];f[N]=new q.constructor(new q.array.constructor(q.count*q.itemSize),q.itemSize,q.normalized);const z=i.morphAttributes[N];z&&(d[N]||(d[N]=[]),z.forEach((l,$)=>{const I=new l.array.constructor(l.count*l.itemSize);d[N][$]=new l.constructor(I,l.itemSize,l.normalized)}))}const y=e*.5,E=Math.log10(1/e),b=Math.pow(10,E),x=y*b;for(let L=0;L<a;L++){const R=n?n.getX(L):L;let N="";for(let q=0,z=u.length;q<z;q++){const l=u[q],$=i.getAttribute(l),I=$.itemSize;for(let P=0;P<I;P++)N+=`${~~($[v[P]](R)*b+x)},`}if(N in t)g.push(t[N]);else{for(let q=0,z=u.length;q<z;q++){const l=u[q],$=i.getAttribute(l),I=i.morphAttributes[l],P=$.itemSize,V=f[l],ce=d[l];for(let Y=0;Y<P;Y++){const pe=v[Y],me=_[Y];if(V[me](c,$[pe](R)),I)for(let le=0,de=I.length;le<de;le++)ce[le][me](c,I[le][pe](R))}}t[N]=c,g.push(c),c++}}const m=i.clone();for(const L in i.attributes){const R=f[L];if(m.setAttribute(L,new R.constructor(R.array.slice(0,c*R.itemSize),R.itemSize,R.normalized)),L in d)for(let N=0;N<d[L].length;N++){const q=d[L][N];m.morphAttributes[L][N]=new q.constructor(q.array.slice(0,c*q.itemSize),q.itemSize,q.normalized)}}return m.setIndex(g),m}const G_=new H_,Ar=new c_;Ar.background=new _t(10922155);let D=iu();ru();su();function iu(){return{camera:new Rn(75,window.innerWidth/window.innerHeight,.01,1e4),canvas:zu("#c")[0],renderer:null,controls:null,last:performance.now(),ticks:100,timeDiff:null,gpuCompute:null,cubeUniforms:null,positionVariable:null,velocityVariable:null,accelerationVariable:null,positionUniforms:null,velocityUniforms:null,accelerationUniforms:null,lineUniforms:null,nodeCoordinates:[],vertCoordinates:[],triIndexes:[],lineIndexes:[],initLen:[],nodeNum:null,width:null,height:1,extForce:null,fixedNodes:null,mass:50,damping:50,dampingRatio:null,maxNatFreq:null,EA:100,time:0,delta:1e-4,freq:null,fVertCoords:null,epsFromBot:.01,loadedObj:null,fileName:"/cube.obj",resetSim:null,gui:null,floorAtY0:!0,dampingScale:2,gravity:-6,pointerPos:[0,0],pointerClicked:null}}function ru(){D.renderer=new l_({antialias:!0,canvas:D.canvas}),D.renderer.setSize(window.innerWidth,window.innerHeight,!1),D.renderer.render(Ar,D.camera)}function su(){D.controls=new N_(D.camera,D.renderer.domElement)}ou();au("./teapot.obj");function au(i){lu(Ar),D=iu(),D.fileName=i,ru(),su();const e=new g_(5);Ar.add(e),G_.load(D.fileName,function(t){t.traverse(function(n){if(n.isMesh){let r=n.geometry;console.log(r),r.attributes.normal&&delete r.attributes.normal,r.attributes.uv&&delete r.attributes.uv;let a=V_(r,1e-7);D.vertCoordinates=r.attributes.position.array,D.nodeCoordinates=a.attributes.position.array,D.triIndexes=a.index.array}}),D.nodeNum=D.nodeCoordinates.length/3,D.width=D.nodeCoordinates.length/3/D.height,K_(),X_(D),cu(),D.renderer.setAnimationLoop(Jo),$_(),ou()},t=>{console.log(t.loaded/t.total*100+"% loaded")},t=>{console.log(t)})}function ou(){D.gui=new Zo,D.gui.add(D,"fileName",["./cube.obj","./bunny_scaled.obj","./teapot.obj"]).onFinishChange(i=>{D.renderer.setAnimationLoop(null),D.gui.close(),au(i)}),D.gui.add(D,"EA",1,100,1).onFinishChange(()=>{D.accelerationUniforms.EA={value:D.EA},D.accelerationUniforms.m={value:D.mass/D.nodeNum},D.maxNatFreq=Math.sqrt(D.EA/(D.mass/D.nodeNum)),D.damping=2*D.dampingRatio*Math.sqrt(D.mass/D.nodeNum*D.EA),D.accelerationUniforms.c={value:D.damping}}),D.gui.add(D,"mass",1,100,1).onFinishChange(()=>{D.accelerationUniforms.EA={value:D.EA},D.accelerationUniforms.m={value:D.mass/D.nodeNum},D.maxNatFreq=Math.sqrt(D.EA/(D.mass/D.nodeNum)),D.damping=2*D.dampingRatio*Math.sqrt(D.mass/D.nodeNum*D.EA),D.accelerationUniforms.c={value:D.damping}}),D.gui.add(D,"floorAtY0").onFinishChange(()=>{D.velocityUniforms.floorOn={value:D.floorAtY0},D.accelerationUniforms.floorOn={value:D.floorAtY0},D.positionUniforms.floorOn={value:D.floorAtY0}}),D.gui.add(D,"dampingScale",0,2,.25).onFinishChange(()=>{D.maxNatFreq=Math.sqrt(D.EA/(D.mass/D.nodeNum)),D.damping=D.dampingScale*D.dampingRatio*Math.sqrt(D.mass/D.nodeNum*D.EA),D.accelerationUniforms.c={value:D.damping}}),D.gui.add(D,"ticks",1,1e3,10),D.gui.add(D,"delta",1e-5,.01,1e3),D.resetSim=W_,D.gui.add(D,"resetSim")}function W_(){D.renderer.setAnimationLoop(null),cu(),D.renderer.setAnimationLoop(Jo)}const X_=function(i){const e=new Cr;e.setFromObject(i.loadedObj);let t=new j;e.getCenter(t);let n=new j;e.getSize(n);const r=Math.max(n.x,n.y,n.z);i.camera.position.z=i.loadedObj.position.z+r,i.camera.position.y=i.loadedObj.position.y+r,i.camera.position.x=i.loadedObj.position.x+r,e.min.z,i.camera.updateProjectionMatrix(),i.camera.lookAt(t),i.controls.target=t};function q_(i){D.pointerPos[0]=i.clientX/window.innerWidth*2-1,D.pointerPos[1]=-(i.clientY/window.innerHeight)*2+1}function j_(i){D.pointerClicked=!0}function Y_(i){D.pointerClicked=!1}function lu(i){for(;i.children.length>0;)lu(i.children[0]),i.remove(i.children[0]);i.geometry&&i.geometry.dispose(),i.material&&(Object.keys(i.material).forEach(e=>{i.material[e]&&i.material[e]!==null&&typeof i.material[e].dispose=="function"&&i.material[e].dispose()}),i.material.dispose())}function $_(){window.addEventListener("resize",Q_),window.addEventListener("blur",ev),window.addEventListener("focus",tv),window.addEventListener("pointermove",q_),window.addEventListener("pointerdown",j_),window.addEventListener("pointerup",Y_)}function K_(){for(let c=0;c<D.triIndexes.length;c+=3)D.lineIndexes.push(D.triIndexes[c]),D.lineIndexes.push(D.triIndexes[c+1]),D.lineIndexes.push(D.triIndexes[c+1]),D.lineIndexes.push(D.triIndexes[c+2]),D.lineIndexes.push(D.triIndexes[c+2]),D.lineIndexes.push(D.triIndexes[c]);let i=[],e=[];for(let c=0;c<D.lineIndexes.length;c++){let u=D.lineIndexes[c]%D.width/D.width,f=~~(D.lineIndexes[c]/D.width)/D.height;if(i.push(u),i.push(f),c%2==0){let d=D.lineIndexes[c+1]%D.width/D.width,g=~~(D.lineIndexes[c+1]/D.width)/D.height;e.push(d),e.push(g)}else{let d=D.lineIndexes[c-1]%D.width/D.width,g=~~(D.lineIndexes[c-1]/D.width)/D.height;e.push(d),e.push(g)}}for(let c=0;c<D.lineIndexes.length;c+=2){let u=D.nodeCoordinates[3*D.lineIndexes[c]],f=D.nodeCoordinates[3*D.lineIndexes[c]+1],d=D.nodeCoordinates[3*D.lineIndexes[c]+2],g=D.nodeCoordinates[3*D.lineIndexes[c+1]],v=D.nodeCoordinates[3*D.lineIndexes[c+1]+1],_=D.nodeCoordinates[3*D.lineIndexes[c+1]+2];const y=new j(u,f,d),E=new j(g,v,_),b=y.distanceTo(E);D.initLen.push(b),D.initLen.push(b)}let t=[];for(let c=0;c<D.lineIndexes.length;c++){let u=D.nodeCoordinates[3*D.lineIndexes[c]],f=D.nodeCoordinates[3*D.lineIndexes[c]+1],d=D.nodeCoordinates[3*D.lineIndexes[c]+2];t.push(u),t.push(f),t.push(d)}D.fVertCoords=new Float32Array(t);const n=new yn;n.setAttribute("position",new vn(D.fVertCoords,3)),n.setAttribute("uv",new vn(new Float32Array(i),2)),n.setAttribute("initLen",new vn(new Float32Array(D.initLen),1)),n.setAttribute("uvOther",new vn(new Float32Array(e),2)),n.setAttribute("index",new Yo(D.lineIndexes,1)),D.lineUniforms={texturePosition:{value:null},textureVelocity:{value:null},textureAcceleration:{value:null},time:{value:0},width:{value:D.width}};const r=new Kn({uniforms:D.lineUniforms,vertexShader:document.getElementById("lineVS").textContent,fragmentShader:document.getElementById("lineFS").textContent,glslVersion:Uo}),a=new ea(n,r);D.loadedObj=a,Ar.add(a)}function cu(){D.gpuCompute=new I_(D.width,D.height,D.renderer);const i=new gr(new Float32Array(D.nodeNum*D.nodeNum),D.nodeNum,D.nodeNum,jr,cn),e=new gr(new Float32Array(D.initLen),D.nodeNum,1,jr,cn),t=new gr(new Float32Array(D.nodeNum*4),D.nodeNum,1,pn,cn);bc(t,new Float32Array(D.nodeCoordinates));const n=new gr(new Float32Array(D.nodeNum),D.nodeNum,1,jr,cn),r=new gr(new Float32Array(D.nodeNum*4),D.nodeNum,1,pn,cn),a=D.gpuCompute.createTexture(),c=D.gpuCompute.createTexture(),u=D.gpuCompute.createTexture();bc(u,new Float32Array(D.nodeCoordinates)),eo(c),eo(a),Z_(i,D.lineIndexes,D.nodeNum),eo(n),J_(r),D.positionVariable=D.gpuCompute.addVariable("texturePosition",document.getElementById("fragmentShaderPosition").textContent,u),D.velocityVariable=D.gpuCompute.addVariable("textureVelocity",document.getElementById("fragmentShaderVelocity").textContent,c),D.accelerationVariable=D.gpuCompute.addVariable("textureAcceleration",document.getElementById("fragmentShaderAcceleration").textContent,a),D.gpuCompute.setVariableDependencies(D.positionVariable,[D.positionVariable,D.velocityVariable,D.accelerationVariable]),D.gpuCompute.setVariableDependencies(D.velocityVariable,[D.velocityVariable,D.accelerationVariable,D.positionVariable]),D.gpuCompute.setVariableDependencies(D.accelerationVariable,[D.accelerationVariable,D.positionVariable,D.velocityVariable]),D.maxNatFreq=Math.sqrt(D.EA/(D.mass/D.nodeNum)),D.dampingRatio=.5,D.damping=D.dampingScale*D.dampingRatio*Math.sqrt(D.mass/D.nodeNum*D.EA),console.log("damping",D.damping),console.log("delta",D.delta),D.positionUniforms=D.positionVariable.material.uniforms,D.positionUniforms.time={value:0},D.positionUniforms.delta={value:0},D.positionUniforms.fixedTexture={value:n},D.positionUniforms.prevVel={value:null},D.positionUniforms.prevAccel={value:null},D.positionUniforms.floorOn={value:D.floorAtY0},D.positionUniforms.pointerClicked={value:D.pointerClicked},D.positionUniforms.pointerCoords={value:D.pointerPos},D.velocityUniforms=D.velocityVariable.material.uniforms,D.velocityUniforms.time={value:0},D.velocityUniforms.delta={value:0},D.velocityUniforms.extForceTexture={value:r},D.velocityUniforms.floorOn={value:D.floorAtY0},D.velocityUniforms.prevAccel={value:null},D.accelerationUniforms=D.accelerationVariable.material.uniforms,D.accelerationUniforms.time={value:0},D.accelerationUniforms.delta={value:0},D.accelerationUniforms.textelSize={value:1/D.width},D.accelerationUniforms.connectivityTexture={value:i},D.accelerationUniforms.nodeCount={value:D.nodeNum},D.accelerationUniforms.extForceTexture={value:r},D.accelerationUniforms.initLenTexture={value:e},D.accelerationUniforms.initPosTexture={value:t},D.accelerationUniforms.EA={value:D.EA},D.accelerationUniforms.c={value:D.damping},D.accelerationUniforms.m={value:D.mass/D.nodeNum},D.accelerationUniforms.floorOn={value:D.floorAtY0};const f=D.gpuCompute.init();f!==null&&console.error(f)}function Z_(i,e,t){const n=i.image.data;let r,a;for(let c=0;c<e.length;c+=2)r=e[c],a=e[c+1],n[r*t+a]=1,n[a*t+r]=1;i.needsUpdate=!0}function bc(i,e){let t=i.image.data,n=0;for(let r=0;r<e.length;r+=3){const a=e[r],c=e[r+1],u=e[r+2];t[r+n]=a,t[r+1+n]=c,t[r+2+n]=u,t[r+3+n]=1,n++}i.needsUpdate=!0}function J_(i){let e=i.image.data;for(let t=0;t<e.length;t++)t%4==1?e[t]=D.gravity*D.mass/D.nodeNum:e[t]=0;i.needsUpdate=!0}function eo(i){i.image.data.fill(0),i.needsUpdate=!0}function Q_(){D.camera.aspect=window.innerWidth/window.innerHeight,D.camera.updateProjectionMatrix(),D.renderer.setSize(window.innerWidth,window.innerHeight,!1)}function ev(){D.renderer.setAnimationLoop(null)}function tv(){D.renderer.setAnimationLoop(Jo)}function Jo(){nv()}function nv(){for(let i=0;i<D.ticks;i++)D.positionUniforms.delta.value=D.delta,D.positionUniforms.prevAccel.value=D.gpuCompute.getAlternateRenderTarget(D.accelerationVariable).texture,D.positionUniforms.prevVel.value=D.gpuCompute.getAlternateRenderTarget(D.velocityVariable).texture,D.positionUniforms.pointerClicked={value:D.pointerClicked},D.positionUniforms.pointerCoords={value:D.pointerPos},D.velocityUniforms.delta.value=D.delta,D.velocityUniforms.prevAccel.value=D.gpuCompute.getAlternateRenderTarget(D.accelerationVariable).texture,D.accelerationUniforms.delta.value=D.delta,D.gpuCompute.compute(),D.lineUniforms.texturePosition.value=D.gpuCompute.getCurrentRenderTarget(D.positionVariable).texture,D.lineUniforms.textureVelocity.value=D.gpuCompute.getCurrentRenderTarget(D.velocityVariable).texture,D.lineUniforms.textureAcceleration.value=D.gpuCompute.getCurrentRenderTarget(D.accelerationVariable).texture;D.renderer.render(Ar,D.camera),D.last=performance.now()}
