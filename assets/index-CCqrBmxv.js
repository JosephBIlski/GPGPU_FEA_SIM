(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();var zu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Hu(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Cc={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */(function(i){(function(e,t){i.exports=e.document?t(e,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return t(n)}})(typeof window<"u"?window:zu,function(e,t){var n=[],r=Object.getPrototypeOf,a=n.slice,l=n.flat?function(s){return n.flat.call(s)}:function(s){return n.concat.apply([],s)},u=n.push,d=n.indexOf,f={},g=f.toString,_=f.hasOwnProperty,v=_.toString,y=v.call(Object),E={},b=function(o){return typeof o=="function"&&typeof o.nodeType!="number"&&typeof o.item!="function"},x=function(o){return o!=null&&o===o.window},m=e.document,P={type:!0,src:!0,nonce:!0,noModule:!0};function R(s,o,h){h=h||m;var p,M,S=h.createElement("script");if(S.text=s,o)for(p in P)M=o[p]||o.getAttribute&&o.getAttribute(p),M&&S.setAttribute(p,M);h.head.appendChild(S).parentNode.removeChild(S)}function N(s){return s==null?s+"":typeof s=="object"||typeof s=="function"?f[g.call(s)]||"object":typeof s}var q="3.7.1",z=/HTML$/i,c=function(s,o){return new c.fn.init(s,o)};c.fn=c.prototype={jquery:q,constructor:c,length:0,toArray:function(){return a.call(this)},get:function(s){return s==null?a.call(this):s<0?this[s+this.length]:this[s]},pushStack:function(s){var o=c.merge(this.constructor(),s);return o.prevObject=this,o},each:function(s){return c.each(this,s)},map:function(s){return this.pushStack(c.map(this,function(o,h){return s.call(o,h,o)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(c.grep(this,function(s,o){return(o+1)%2}))},odd:function(){return this.pushStack(c.grep(this,function(s,o){return o%2}))},eq:function(s){var o=this.length,h=+s+(s<0?o:0);return this.pushStack(h>=0&&h<o?[this[h]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:n.sort,splice:n.splice},c.extend=c.fn.extend=function(){var s,o,h,p,M,S,A=arguments[0]||{},B=1,F=arguments.length,G=!1;for(typeof A=="boolean"&&(G=A,A=arguments[B]||{},B++),typeof A!="object"&&!b(A)&&(A={}),B===F&&(A=this,B--);B<F;B++)if((s=arguments[B])!=null)for(o in s)p=s[o],!(o==="__proto__"||A===p)&&(G&&p&&(c.isPlainObject(p)||(M=Array.isArray(p)))?(h=A[o],M&&!Array.isArray(h)?S=[]:!M&&!c.isPlainObject(h)?S={}:S=h,M=!1,A[o]=c.extend(G,S,p)):p!==void 0&&(A[o]=p));return A},c.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(s){throw new Error(s)},noop:function(){},isPlainObject:function(s){var o,h;return!s||g.call(s)!=="[object Object]"?!1:(o=r(s),o?(h=_.call(o,"constructor")&&o.constructor,typeof h=="function"&&v.call(h)===y):!0)},isEmptyObject:function(s){var o;for(o in s)return!1;return!0},globalEval:function(s,o,h){R(s,{nonce:o&&o.nonce},h)},each:function(s,o){var h,p=0;if($(s))for(h=s.length;p<h&&o.call(s[p],p,s[p])!==!1;p++);else for(p in s)if(o.call(s[p],p,s[p])===!1)break;return s},text:function(s){var o,h="",p=0,M=s.nodeType;if(!M)for(;o=s[p++];)h+=c.text(o);return M===1||M===11?s.textContent:M===9?s.documentElement.textContent:M===3||M===4?s.nodeValue:h},makeArray:function(s,o){var h=o||[];return s!=null&&($(Object(s))?c.merge(h,typeof s=="string"?[s]:s):u.call(h,s)),h},inArray:function(s,o,h){return o==null?-1:d.call(o,s,h)},isXMLDoc:function(s){var o=s&&s.namespaceURI,h=s&&(s.ownerDocument||s).documentElement;return!z.test(o||h&&h.nodeName||"HTML")},merge:function(s,o){for(var h=+o.length,p=0,M=s.length;p<h;p++)s[M++]=o[p];return s.length=M,s},grep:function(s,o,h){for(var p,M=[],S=0,A=s.length,B=!h;S<A;S++)p=!o(s[S],S),p!==B&&M.push(s[S]);return M},map:function(s,o,h){var p,M,S=0,A=[];if($(s))for(p=s.length;S<p;S++)M=o(s[S],S,h),M!=null&&A.push(M);else for(S in s)M=o(s[S],S,h),M!=null&&A.push(M);return l(A)},guid:1,support:E}),typeof Symbol=="function"&&(c.fn[Symbol.iterator]=n[Symbol.iterator]),c.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(s,o){f["[object "+o+"]"]=o.toLowerCase()});function $(s){var o=!!s&&"length"in s&&s.length,h=N(s);return b(s)||x(s)?!1:h==="array"||o===0||typeof o=="number"&&o>0&&o-1 in s}function I(s,o){return s.nodeName&&s.nodeName.toLowerCase()===o.toLowerCase()}var L=n.pop,V=n.sort,ce=n.splice,Y="[\\x20\\t\\r\\n\\f]",pe=new RegExp("^"+Y+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Y+"+$","g");c.contains=function(s,o){var h=o&&o.parentNode;return s===h||!!(h&&h.nodeType===1&&(s.contains?s.contains(h):s.compareDocumentPosition&&s.compareDocumentPosition(h)&16))};var me=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function le(s,o){return o?s==="\0"?"�":s.slice(0,-1)+"\\"+s.charCodeAt(s.length-1).toString(16)+" ":"\\"+s}c.escapeSelector=function(s){return(s+"").replace(me,le)};var de=m,oe=u;(function(){var s,o,h,p,M,S=oe,A,B,F,G,ae,he=c.expando,Q=0,xe=0,nt=cs(),St=cs(),ct=cs(),tn=cs(),jt=function(U,k){return U===k&&(M=!0),0},Hn="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",kn="(?:\\\\[\\da-fA-F]{1,6}"+Y+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",gt="\\["+Y+"*("+kn+")(?:"+Y+"*([*^$|!~]?=)"+Y+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+kn+"))|)"+Y+"*\\]",Ri=":("+kn+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+gt+")*)|.*)\\)|)",At=new RegExp(Y+"+","g"),Vt=new RegExp("^"+Y+"*,"+Y+"*"),Nr=new RegExp("^"+Y+"*([>+~]|"+Y+")"+Y+"*"),ga=new RegExp(Y+"|>"),Vn=new RegExp(Ri),Fr=new RegExp("^"+kn+"$"),Gn={ID:new RegExp("^#("+kn+")"),CLASS:new RegExp("^\\.("+kn+")"),TAG:new RegExp("^("+kn+"|[*])"),ATTR:new RegExp("^"+gt),PSEUDO:new RegExp("^"+Ri),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+Y+"*(even|odd|(([+-]|)(\\d*)n|)"+Y+"*(?:([+-]|)"+Y+"*(\\d+)|))"+Y+"*\\)|)","i"),bool:new RegExp("^(?:"+Hn+")$","i"),needsContext:new RegExp("^"+Y+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+Y+"*((?:-\\d)?\\d*)"+Y+"*\\)|)(?=[^-]|$)","i")},hi=/^(?:input|select|textarea|button)$/i,fi=/^h\d$/i,An=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_a=/[+~]/,Zn=new RegExp("\\\\[\\da-fA-F]{1,6}"+Y+"?|\\\\([^\\r\\n\\f])","g"),Jn=function(U,k){var Z="0x"+U.slice(1)-65536;return k||(Z<0?String.fromCharCode(Z+65536):String.fromCharCode(Z>>10|55296,Z&1023|56320))},Du=function(){di()},Iu=hs(function(U){return U.disabled===!0&&I(U,"fieldset")},{dir:"parentNode",next:"legend"});function Uu(){try{return A.activeElement}catch{}}try{S.apply(n=a.call(de.childNodes),de.childNodes),n[de.childNodes.length].nodeType}catch{S={apply:function(k,Z){oe.apply(k,a.call(Z))},call:function(k){oe.apply(k,a.call(arguments,1))}}}function Pt(U,k,Z,re){var ue,Ee,Pe,ke,Le,pt,Qe,st=k&&k.ownerDocument,mt=k?k.nodeType:9;if(Z=Z||[],typeof U!="string"||!U||mt!==1&&mt!==9&&mt!==11)return Z;if(!re&&(di(k),k=k||A,F)){if(mt!==11&&(Le=An.exec(U)))if(ue=Le[1]){if(mt===9)if(Pe=k.getElementById(ue)){if(Pe.id===ue)return S.call(Z,Pe),Z}else return Z;else if(st&&(Pe=st.getElementById(ue))&&Pt.contains(k,Pe)&&Pe.id===ue)return S.call(Z,Pe),Z}else{if(Le[2])return S.apply(Z,k.getElementsByTagName(U)),Z;if((ue=Le[3])&&k.getElementsByClassName)return S.apply(Z,k.getElementsByClassName(ue)),Z}if(!tn[U+" "]&&(!G||!G.test(U))){if(Qe=U,st=k,mt===1&&(ga.test(U)||Nr.test(U))){for(st=_a.test(U)&&va(k.parentNode)||k,(st!=k||!E.scope)&&((ke=k.getAttribute("id"))?ke=c.escapeSelector(ke):k.setAttribute("id",ke=he)),pt=Or(U),Ee=pt.length;Ee--;)pt[Ee]=(ke?"#"+ke:":scope")+" "+us(pt[Ee]);Qe=pt.join(",")}try{return S.apply(Z,st.querySelectorAll(Qe)),Z}catch{tn(U,!0)}finally{ke===he&&k.removeAttribute("id")}}}return pl(U.replace(pe,"$1"),k,Z,re)}function cs(){var U=[];function k(Z,re){return U.push(Z+" ")>o.cacheLength&&delete k[U.shift()],k[Z+" "]=re}return k}function Un(U){return U[he]=!0,U}function $i(U){var k=A.createElement("fieldset");try{return!!U(k)}catch{return!1}finally{k.parentNode&&k.parentNode.removeChild(k),k=null}}function Nu(U){return function(k){return I(k,"input")&&k.type===U}}function Fu(U){return function(k){return(I(k,"input")||I(k,"button"))&&k.type===U}}function fl(U){return function(k){return"form"in k?k.parentNode&&k.disabled===!1?"label"in k?"label"in k.parentNode?k.parentNode.disabled===U:k.disabled===U:k.isDisabled===U||k.isDisabled!==!U&&Iu(k)===U:k.disabled===U:"label"in k?k.disabled===U:!1}}function Pi(U){return Un(function(k){return k=+k,Un(function(Z,re){for(var ue,Ee=U([],Z.length,k),Pe=Ee.length;Pe--;)Z[ue=Ee[Pe]]&&(Z[ue]=!(re[ue]=Z[ue]))})})}function va(U){return U&&typeof U.getElementsByTagName<"u"&&U}function di(U){var k,Z=U?U.ownerDocument||U:de;return Z==A||Z.nodeType!==9||!Z.documentElement||(A=Z,B=A.documentElement,F=!c.isXMLDoc(A),ae=B.matches||B.webkitMatchesSelector||B.msMatchesSelector,B.msMatchesSelector&&de!=A&&(k=A.defaultView)&&k.top!==k&&k.addEventListener("unload",Du),E.getById=$i(function(re){return B.appendChild(re).id=c.expando,!A.getElementsByName||!A.getElementsByName(c.expando).length}),E.disconnectedMatch=$i(function(re){return ae.call(re,"*")}),E.scope=$i(function(){return A.querySelectorAll(":scope")}),E.cssHas=$i(function(){try{return A.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),E.getById?(o.filter.ID=function(re){var ue=re.replace(Zn,Jn);return function(Ee){return Ee.getAttribute("id")===ue}},o.find.ID=function(re,ue){if(typeof ue.getElementById<"u"&&F){var Ee=ue.getElementById(re);return Ee?[Ee]:[]}}):(o.filter.ID=function(re){var ue=re.replace(Zn,Jn);return function(Ee){var Pe=typeof Ee.getAttributeNode<"u"&&Ee.getAttributeNode("id");return Pe&&Pe.value===ue}},o.find.ID=function(re,ue){if(typeof ue.getElementById<"u"&&F){var Ee,Pe,ke,Le=ue.getElementById(re);if(Le){if(Ee=Le.getAttributeNode("id"),Ee&&Ee.value===re)return[Le];for(ke=ue.getElementsByName(re),Pe=0;Le=ke[Pe++];)if(Ee=Le.getAttributeNode("id"),Ee&&Ee.value===re)return[Le]}return[]}}),o.find.TAG=function(re,ue){return typeof ue.getElementsByTagName<"u"?ue.getElementsByTagName(re):ue.querySelectorAll(re)},o.find.CLASS=function(re,ue){if(typeof ue.getElementsByClassName<"u"&&F)return ue.getElementsByClassName(re)},G=[],$i(function(re){var ue;B.appendChild(re).innerHTML="<a id='"+he+"' href='' disabled='disabled'></a><select id='"+he+"-\r\\' disabled='disabled'><option selected=''></option></select>",re.querySelectorAll("[selected]").length||G.push("\\["+Y+"*(?:value|"+Hn+")"),re.querySelectorAll("[id~="+he+"-]").length||G.push("~="),re.querySelectorAll("a#"+he+"+*").length||G.push(".#.+[+~]"),re.querySelectorAll(":checked").length||G.push(":checked"),ue=A.createElement("input"),ue.setAttribute("type","hidden"),re.appendChild(ue).setAttribute("name","D"),B.appendChild(re).disabled=!0,re.querySelectorAll(":disabled").length!==2&&G.push(":enabled",":disabled"),ue=A.createElement("input"),ue.setAttribute("name",""),re.appendChild(ue),re.querySelectorAll("[name='']").length||G.push("\\["+Y+"*name"+Y+"*="+Y+`*(?:''|"")`)}),E.cssHas||G.push(":has"),G=G.length&&new RegExp(G.join("|")),jt=function(re,ue){if(re===ue)return M=!0,0;var Ee=!re.compareDocumentPosition-!ue.compareDocumentPosition;return Ee||(Ee=(re.ownerDocument||re)==(ue.ownerDocument||ue)?re.compareDocumentPosition(ue):1,Ee&1||!E.sortDetached&&ue.compareDocumentPosition(re)===Ee?re===A||re.ownerDocument==de&&Pt.contains(de,re)?-1:ue===A||ue.ownerDocument==de&&Pt.contains(de,ue)?1:p?d.call(p,re)-d.call(p,ue):0:Ee&4?-1:1)}),A}Pt.matches=function(U,k){return Pt(U,null,null,k)},Pt.matchesSelector=function(U,k){if(di(U),F&&!tn[k+" "]&&(!G||!G.test(k)))try{var Z=ae.call(U,k);if(Z||E.disconnectedMatch||U.document&&U.document.nodeType!==11)return Z}catch{tn(k,!0)}return Pt(k,A,null,[U]).length>0},Pt.contains=function(U,k){return(U.ownerDocument||U)!=A&&di(U),c.contains(U,k)},Pt.attr=function(U,k){(U.ownerDocument||U)!=A&&di(U);var Z=o.attrHandle[k.toLowerCase()],re=Z&&_.call(o.attrHandle,k.toLowerCase())?Z(U,k,!F):void 0;return re!==void 0?re:U.getAttribute(k)},Pt.error=function(U){throw new Error("Syntax error, unrecognized expression: "+U)},c.uniqueSort=function(U){var k,Z=[],re=0,ue=0;if(M=!E.sortStable,p=!E.sortStable&&a.call(U,0),V.call(U,jt),M){for(;k=U[ue++];)k===U[ue]&&(re=Z.push(ue));for(;re--;)ce.call(U,Z[re],1)}return p=null,U},c.fn.uniqueSort=function(){return this.pushStack(c.uniqueSort(a.apply(this)))},o=c.expr={cacheLength:50,createPseudo:Un,match:Gn,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(U){return U[1]=U[1].replace(Zn,Jn),U[3]=(U[3]||U[4]||U[5]||"").replace(Zn,Jn),U[2]==="~="&&(U[3]=" "+U[3]+" "),U.slice(0,4)},CHILD:function(U){return U[1]=U[1].toLowerCase(),U[1].slice(0,3)==="nth"?(U[3]||Pt.error(U[0]),U[4]=+(U[4]?U[5]+(U[6]||1):2*(U[3]==="even"||U[3]==="odd")),U[5]=+(U[7]+U[8]||U[3]==="odd")):U[3]&&Pt.error(U[0]),U},PSEUDO:function(U){var k,Z=!U[6]&&U[2];return Gn.CHILD.test(U[0])?null:(U[3]?U[2]=U[4]||U[5]||"":Z&&Vn.test(Z)&&(k=Or(Z,!0))&&(k=Z.indexOf(")",Z.length-k)-Z.length)&&(U[0]=U[0].slice(0,k),U[2]=Z.slice(0,k)),U.slice(0,3))}},filter:{TAG:function(U){var k=U.replace(Zn,Jn).toLowerCase();return U==="*"?function(){return!0}:function(Z){return I(Z,k)}},CLASS:function(U){var k=nt[U+" "];return k||(k=new RegExp("(^|"+Y+")"+U+"("+Y+"|$)"))&&nt(U,function(Z){return k.test(typeof Z.className=="string"&&Z.className||typeof Z.getAttribute<"u"&&Z.getAttribute("class")||"")})},ATTR:function(U,k,Z){return function(re){var ue=Pt.attr(re,U);return ue==null?k==="!=":k?(ue+="",k==="="?ue===Z:k==="!="?ue!==Z:k==="^="?Z&&ue.indexOf(Z)===0:k==="*="?Z&&ue.indexOf(Z)>-1:k==="$="?Z&&ue.slice(-Z.length)===Z:k==="~="?(" "+ue.replace(At," ")+" ").indexOf(Z)>-1:k==="|="?ue===Z||ue.slice(0,Z.length+1)===Z+"-":!1):!0}},CHILD:function(U,k,Z,re,ue){var Ee=U.slice(0,3)!=="nth",Pe=U.slice(-4)!=="last",ke=k==="of-type";return re===1&&ue===0?function(Le){return!!Le.parentNode}:function(Le,pt,Qe){var st,mt,Ye,Ft,_n,sn=Ee!==Pe?"nextSibling":"previousSibling",wn=Le.parentNode,Wn=ke&&Le.nodeName.toLowerCase(),Ki=!Qe&&!ke,hn=!1;if(wn){if(Ee){for(;sn;){for(Ye=Le;Ye=Ye[sn];)if(ke?I(Ye,Wn):Ye.nodeType===1)return!1;_n=sn=U==="only"&&!_n&&"nextSibling"}return!0}if(_n=[Pe?wn.firstChild:wn.lastChild],Pe&&Ki){for(mt=wn[he]||(wn[he]={}),st=mt[U]||[],Ft=st[0]===Q&&st[1],hn=Ft&&st[2],Ye=Ft&&wn.childNodes[Ft];Ye=++Ft&&Ye&&Ye[sn]||(hn=Ft=0)||_n.pop();)if(Ye.nodeType===1&&++hn&&Ye===Le){mt[U]=[Q,Ft,hn];break}}else if(Ki&&(mt=Le[he]||(Le[he]={}),st=mt[U]||[],Ft=st[0]===Q&&st[1],hn=Ft),hn===!1)for(;(Ye=++Ft&&Ye&&Ye[sn]||(hn=Ft=0)||_n.pop())&&!((ke?I(Ye,Wn):Ye.nodeType===1)&&++hn&&(Ki&&(mt=Ye[he]||(Ye[he]={}),mt[U]=[Q,hn]),Ye===Le)););return hn-=ue,hn===re||hn%re===0&&hn/re>=0}}},PSEUDO:function(U,k){var Z,re=o.pseudos[U]||o.setFilters[U.toLowerCase()]||Pt.error("unsupported pseudo: "+U);return re[he]?re(k):re.length>1?(Z=[U,U,"",k],o.setFilters.hasOwnProperty(U.toLowerCase())?Un(function(ue,Ee){for(var Pe,ke=re(ue,k),Le=ke.length;Le--;)Pe=d.call(ue,ke[Le]),ue[Pe]=!(Ee[Pe]=ke[Le])}):function(ue){return re(ue,0,Z)}):re}},pseudos:{not:Un(function(U){var k=[],Z=[],re=Sa(U.replace(pe,"$1"));return re[he]?Un(function(ue,Ee,Pe,ke){for(var Le,pt=re(ue,null,ke,[]),Qe=ue.length;Qe--;)(Le=pt[Qe])&&(ue[Qe]=!(Ee[Qe]=Le))}):function(ue,Ee,Pe){return k[0]=ue,re(k,null,Pe,Z),k[0]=null,!Z.pop()}}),has:Un(function(U){return function(k){return Pt(U,k).length>0}}),contains:Un(function(U){return U=U.replace(Zn,Jn),function(k){return(k.textContent||c.text(k)).indexOf(U)>-1}}),lang:Un(function(U){return Fr.test(U||"")||Pt.error("unsupported lang: "+U),U=U.replace(Zn,Jn).toLowerCase(),function(k){var Z;do if(Z=F?k.lang:k.getAttribute("xml:lang")||k.getAttribute("lang"))return Z=Z.toLowerCase(),Z===U||Z.indexOf(U+"-")===0;while((k=k.parentNode)&&k.nodeType===1);return!1}}),target:function(U){var k=e.location&&e.location.hash;return k&&k.slice(1)===U.id},root:function(U){return U===B},focus:function(U){return U===Uu()&&A.hasFocus()&&!!(U.type||U.href||~U.tabIndex)},enabled:fl(!1),disabled:fl(!0),checked:function(U){return I(U,"input")&&!!U.checked||I(U,"option")&&!!U.selected},selected:function(U){return U.parentNode&&U.parentNode.selectedIndex,U.selected===!0},empty:function(U){for(U=U.firstChild;U;U=U.nextSibling)if(U.nodeType<6)return!1;return!0},parent:function(U){return!o.pseudos.empty(U)},header:function(U){return fi.test(U.nodeName)},input:function(U){return hi.test(U.nodeName)},button:function(U){return I(U,"input")&&U.type==="button"||I(U,"button")},text:function(U){var k;return I(U,"input")&&U.type==="text"&&((k=U.getAttribute("type"))==null||k.toLowerCase()==="text")},first:Pi(function(){return[0]}),last:Pi(function(U,k){return[k-1]}),eq:Pi(function(U,k,Z){return[Z<0?Z+k:Z]}),even:Pi(function(U,k){for(var Z=0;Z<k;Z+=2)U.push(Z);return U}),odd:Pi(function(U,k){for(var Z=1;Z<k;Z+=2)U.push(Z);return U}),lt:Pi(function(U,k,Z){var re;for(Z<0?re=Z+k:Z>k?re=k:re=Z;--re>=0;)U.push(re);return U}),gt:Pi(function(U,k,Z){for(var re=Z<0?Z+k:Z;++re<k;)U.push(re);return U})}},o.pseudos.nth=o.pseudos.eq;for(s in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[s]=Nu(s);for(s in{submit:!0,reset:!0})o.pseudos[s]=Fu(s);function dl(){}dl.prototype=o.filters=o.pseudos,o.setFilters=new dl;function Or(U,k){var Z,re,ue,Ee,Pe,ke,Le,pt=St[U+" "];if(pt)return k?0:pt.slice(0);for(Pe=U,ke=[],Le=o.preFilter;Pe;){(!Z||(re=Vt.exec(Pe)))&&(re&&(Pe=Pe.slice(re[0].length)||Pe),ke.push(ue=[])),Z=!1,(re=Nr.exec(Pe))&&(Z=re.shift(),ue.push({value:Z,type:re[0].replace(pe," ")}),Pe=Pe.slice(Z.length));for(Ee in o.filter)(re=Gn[Ee].exec(Pe))&&(!Le[Ee]||(re=Le[Ee](re)))&&(Z=re.shift(),ue.push({value:Z,type:Ee,matches:re}),Pe=Pe.slice(Z.length));if(!Z)break}return k?Pe.length:Pe?Pt.error(U):St(U,ke).slice(0)}function us(U){for(var k=0,Z=U.length,re="";k<Z;k++)re+=U[k].value;return re}function hs(U,k,Z){var re=k.dir,ue=k.next,Ee=ue||re,Pe=Z&&Ee==="parentNode",ke=xe++;return k.first?function(Le,pt,Qe){for(;Le=Le[re];)if(Le.nodeType===1||Pe)return U(Le,pt,Qe);return!1}:function(Le,pt,Qe){var st,mt,Ye=[Q,ke];if(Qe){for(;Le=Le[re];)if((Le.nodeType===1||Pe)&&U(Le,pt,Qe))return!0}else for(;Le=Le[re];)if(Le.nodeType===1||Pe)if(mt=Le[he]||(Le[he]={}),ue&&I(Le,ue))Le=Le[re]||Le;else{if((st=mt[Ee])&&st[0]===Q&&st[1]===ke)return Ye[2]=st[2];if(mt[Ee]=Ye,Ye[2]=U(Le,pt,Qe))return!0}return!1}}function xa(U){return U.length>1?function(k,Z,re){for(var ue=U.length;ue--;)if(!U[ue](k,Z,re))return!1;return!0}:U[0]}function Ou(U,k,Z){for(var re=0,ue=k.length;re<ue;re++)Pt(U,k[re],Z);return Z}function fs(U,k,Z,re,ue){for(var Ee,Pe=[],ke=0,Le=U.length,pt=k!=null;ke<Le;ke++)(Ee=U[ke])&&(!Z||Z(Ee,re,ue))&&(Pe.push(Ee),pt&&k.push(ke));return Pe}function ya(U,k,Z,re,ue,Ee){return re&&!re[he]&&(re=ya(re)),ue&&!ue[he]&&(ue=ya(ue,Ee)),Un(function(Pe,ke,Le,pt){var Qe,st,mt,Ye,Ft=[],_n=[],sn=ke.length,wn=Pe||Ou(k||"*",Le.nodeType?[Le]:Le,[]),Wn=U&&(Pe||!k)?fs(wn,Ft,U,Le,pt):wn;if(Z?(Ye=ue||(Pe?U:sn||re)?[]:ke,Z(Wn,Ye,Le,pt)):Ye=Wn,re)for(Qe=fs(Ye,_n),re(Qe,[],Le,pt),st=Qe.length;st--;)(mt=Qe[st])&&(Ye[_n[st]]=!(Wn[_n[st]]=mt));if(Pe){if(ue||U){if(ue){for(Qe=[],st=Ye.length;st--;)(mt=Ye[st])&&Qe.push(Wn[st]=mt);ue(null,Ye=[],Qe,pt)}for(st=Ye.length;st--;)(mt=Ye[st])&&(Qe=ue?d.call(Pe,mt):Ft[st])>-1&&(Pe[Qe]=!(ke[Qe]=mt))}}else Ye=fs(Ye===ke?Ye.splice(sn,Ye.length):Ye),ue?ue(null,ke,Ye,pt):S.apply(ke,Ye)})}function Ma(U){for(var k,Z,re,ue=U.length,Ee=o.relative[U[0].type],Pe=Ee||o.relative[" "],ke=Ee?1:0,Le=hs(function(st){return st===k},Pe,!0),pt=hs(function(st){return d.call(k,st)>-1},Pe,!0),Qe=[function(st,mt,Ye){var Ft=!Ee&&(Ye||mt!=h)||((k=mt).nodeType?Le(st,mt,Ye):pt(st,mt,Ye));return k=null,Ft}];ke<ue;ke++)if(Z=o.relative[U[ke].type])Qe=[hs(xa(Qe),Z)];else{if(Z=o.filter[U[ke].type].apply(null,U[ke].matches),Z[he]){for(re=++ke;re<ue&&!o.relative[U[re].type];re++);return ya(ke>1&&xa(Qe),ke>1&&us(U.slice(0,ke-1).concat({value:U[ke-2].type===" "?"*":""})).replace(pe,"$1"),Z,ke<re&&Ma(U.slice(ke,re)),re<ue&&Ma(U=U.slice(re)),re<ue&&us(U))}Qe.push(Z)}return xa(Qe)}function Bu(U,k){var Z=k.length>0,re=U.length>0,ue=function(Ee,Pe,ke,Le,pt){var Qe,st,mt,Ye=0,Ft="0",_n=Ee&&[],sn=[],wn=h,Wn=Ee||re&&o.find.TAG("*",pt),Ki=Q+=wn==null?1:Math.random()||.1,hn=Wn.length;for(pt&&(h=Pe==A||Pe||pt);Ft!==hn&&(Qe=Wn[Ft])!=null;Ft++){if(re&&Qe){for(st=0,!Pe&&Qe.ownerDocument!=A&&(di(Qe),ke=!F);mt=U[st++];)if(mt(Qe,Pe||A,ke)){S.call(Le,Qe);break}pt&&(Q=Ki)}Z&&((Qe=!mt&&Qe)&&Ye--,Ee&&_n.push(Qe))}if(Ye+=Ft,Z&&Ft!==Ye){for(st=0;mt=k[st++];)mt(_n,sn,Pe,ke);if(Ee){if(Ye>0)for(;Ft--;)_n[Ft]||sn[Ft]||(sn[Ft]=L.call(Le));sn=fs(sn)}S.apply(Le,sn),pt&&!Ee&&sn.length>0&&Ye+k.length>1&&c.uniqueSort(Le)}return pt&&(Q=Ki,h=wn),_n};return Z?Un(ue):ue}function Sa(U,k){var Z,re=[],ue=[],Ee=ct[U+" "];if(!Ee){for(k||(k=Or(U)),Z=k.length;Z--;)Ee=Ma(k[Z]),Ee[he]?re.push(Ee):ue.push(Ee);Ee=ct(U,Bu(ue,re)),Ee.selector=U}return Ee}function pl(U,k,Z,re){var ue,Ee,Pe,ke,Le,pt=typeof U=="function"&&U,Qe=!re&&Or(U=pt.selector||U);if(Z=Z||[],Qe.length===1){if(Ee=Qe[0]=Qe[0].slice(0),Ee.length>2&&(Pe=Ee[0]).type==="ID"&&k.nodeType===9&&F&&o.relative[Ee[1].type]){if(k=(o.find.ID(Pe.matches[0].replace(Zn,Jn),k)||[])[0],k)pt&&(k=k.parentNode);else return Z;U=U.slice(Ee.shift().value.length)}for(ue=Gn.needsContext.test(U)?0:Ee.length;ue--&&(Pe=Ee[ue],!o.relative[ke=Pe.type]);)if((Le=o.find[ke])&&(re=Le(Pe.matches[0].replace(Zn,Jn),_a.test(Ee[0].type)&&va(k.parentNode)||k))){if(Ee.splice(ue,1),U=re.length&&us(Ee),!U)return S.apply(Z,re),Z;break}}return(pt||Sa(U,Qe))(re,k,!F,Z,!k||_a.test(U)&&va(k.parentNode)||k),Z}E.sortStable=he.split("").sort(jt).join("")===he,di(),E.sortDetached=$i(function(U){return U.compareDocumentPosition(A.createElement("fieldset"))&1}),c.find=Pt,c.expr[":"]=c.expr.pseudos,c.unique=c.uniqueSort,Pt.compile=Sa,Pt.select=pl,Pt.setDocument=di,Pt.tokenize=Or,Pt.escape=c.escapeSelector,Pt.getText=c.text,Pt.isXML=c.isXMLDoc,Pt.selectors=c.expr,Pt.support=c.support,Pt.uniqueSort=c.uniqueSort})();var be=function(s,o,h){for(var p=[],M=h!==void 0;(s=s[o])&&s.nodeType!==9;)if(s.nodeType===1){if(M&&c(s).is(h))break;p.push(s)}return p},De=function(s,o){for(var h=[];s;s=s.nextSibling)s.nodeType===1&&s!==o&&h.push(s);return h},Be=c.expr.match.needsContext,ft=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function vt(s,o,h){return b(o)?c.grep(s,function(p,M){return!!o.call(p,M,p)!==h}):o.nodeType?c.grep(s,function(p){return p===o!==h}):typeof o!="string"?c.grep(s,function(p){return d.call(o,p)>-1!==h}):c.filter(o,s,h)}c.filter=function(s,o,h){var p=o[0];return h&&(s=":not("+s+")"),o.length===1&&p.nodeType===1?c.find.matchesSelector(p,s)?[p]:[]:c.find.matches(s,c.grep(o,function(M){return M.nodeType===1}))},c.fn.extend({find:function(s){var o,h,p=this.length,M=this;if(typeof s!="string")return this.pushStack(c(s).filter(function(){for(o=0;o<p;o++)if(c.contains(M[o],this))return!0}));for(h=this.pushStack([]),o=0;o<p;o++)c.find(s,M[o],h);return p>1?c.uniqueSort(h):h},filter:function(s){return this.pushStack(vt(this,s||[],!1))},not:function(s){return this.pushStack(vt(this,s||[],!0))},is:function(s){return!!vt(this,typeof s=="string"&&Be.test(s)?c(s):s||[],!1).length}});var fe,ye=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Oe=c.fn.init=function(s,o,h){var p,M;if(!s)return this;if(h=h||fe,typeof s=="string")if(s[0]==="<"&&s[s.length-1]===">"&&s.length>=3?p=[null,s,null]:p=ye.exec(s),p&&(p[1]||!o))if(p[1]){if(o=o instanceof c?o[0]:o,c.merge(this,c.parseHTML(p[1],o&&o.nodeType?o.ownerDocument||o:m,!0)),ft.test(p[1])&&c.isPlainObject(o))for(p in o)b(this[p])?this[p](o[p]):this.attr(p,o[p]);return this}else return M=m.getElementById(p[2]),M&&(this[0]=M,this.length=1),this;else return!o||o.jquery?(o||h).find(s):this.constructor(o).find(s);else{if(s.nodeType)return this[0]=s,this.length=1,this;if(b(s))return h.ready!==void 0?h.ready(s):s(c)}return c.makeArray(s,this)};Oe.prototype=c.fn,fe=c(m);var Ue=/^(?:parents|prev(?:Until|All))/,it={children:!0,contents:!0,next:!0,prev:!0};c.fn.extend({has:function(s){var o=c(s,this),h=o.length;return this.filter(function(){for(var p=0;p<h;p++)if(c.contains(this,o[p]))return!0})},closest:function(s,o){var h,p=0,M=this.length,S=[],A=typeof s!="string"&&c(s);if(!Be.test(s)){for(;p<M;p++)for(h=this[p];h&&h!==o;h=h.parentNode)if(h.nodeType<11&&(A?A.index(h)>-1:h.nodeType===1&&c.find.matchesSelector(h,s))){S.push(h);break}}return this.pushStack(S.length>1?c.uniqueSort(S):S)},index:function(s){return s?typeof s=="string"?d.call(c(s),this[0]):d.call(this,s.jquery?s[0]:s):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(s,o){return this.pushStack(c.uniqueSort(c.merge(this.get(),c(s,o))))},addBack:function(s){return this.add(s==null?this.prevObject:this.prevObject.filter(s))}});function at(s,o){for(;(s=s[o])&&s.nodeType!==1;);return s}c.each({parent:function(s){var o=s.parentNode;return o&&o.nodeType!==11?o:null},parents:function(s){return be(s,"parentNode")},parentsUntil:function(s,o,h){return be(s,"parentNode",h)},next:function(s){return at(s,"nextSibling")},prev:function(s){return at(s,"previousSibling")},nextAll:function(s){return be(s,"nextSibling")},prevAll:function(s){return be(s,"previousSibling")},nextUntil:function(s,o,h){return be(s,"nextSibling",h)},prevUntil:function(s,o,h){return be(s,"previousSibling",h)},siblings:function(s){return De((s.parentNode||{}).firstChild,s)},children:function(s){return De(s.firstChild)},contents:function(s){return s.contentDocument!=null&&r(s.contentDocument)?s.contentDocument:(I(s,"template")&&(s=s.content||s),c.merge([],s.childNodes))}},function(s,o){c.fn[s]=function(h,p){var M=c.map(this,o,h);return s.slice(-5)!=="Until"&&(p=h),p&&typeof p=="string"&&(M=c.filter(p,M)),this.length>1&&(it[s]||c.uniqueSort(M),Ue.test(s)&&M.reverse()),this.pushStack(M)}});var $e=/[^\x20\t\r\n\f]+/g;function Lt(s){var o={};return c.each(s.match($e)||[],function(h,p){o[p]=!0}),o}c.Callbacks=function(s){s=typeof s=="string"?Lt(s):c.extend({},s);var o,h,p,M,S=[],A=[],B=-1,F=function(){for(M=M||s.once,p=o=!0;A.length;B=-1)for(h=A.shift();++B<S.length;)S[B].apply(h[0],h[1])===!1&&s.stopOnFalse&&(B=S.length,h=!1);s.memory||(h=!1),o=!1,M&&(h?S=[]:S="")},G={add:function(){return S&&(h&&!o&&(B=S.length-1,A.push(h)),function ae(he){c.each(he,function(Q,xe){b(xe)?(!s.unique||!G.has(xe))&&S.push(xe):xe&&xe.length&&N(xe)!=="string"&&ae(xe)})}(arguments),h&&!o&&F()),this},remove:function(){return c.each(arguments,function(ae,he){for(var Q;(Q=c.inArray(he,S,Q))>-1;)S.splice(Q,1),Q<=B&&B--}),this},has:function(ae){return ae?c.inArray(ae,S)>-1:S.length>0},empty:function(){return S&&(S=[]),this},disable:function(){return M=A=[],S=h="",this},disabled:function(){return!S},lock:function(){return M=A=[],!h&&!o&&(S=h=""),this},locked:function(){return!!M},fireWith:function(ae,he){return M||(he=he||[],he=[ae,he.slice?he.slice():he],A.push(he),o||F()),this},fire:function(){return G.fireWith(this,arguments),this},fired:function(){return!!p}};return G};function H(s){return s}function Dt(s){throw s}function xt(s,o,h,p){var M;try{s&&b(M=s.promise)?M.call(s).done(o).fail(h):s&&b(M=s.then)?M.call(s,o,h):o.apply(void 0,[s].slice(p))}catch(S){h.apply(void 0,[S])}}c.extend({Deferred:function(s){var o=[["notify","progress",c.Callbacks("memory"),c.Callbacks("memory"),2],["resolve","done",c.Callbacks("once memory"),c.Callbacks("once memory"),0,"resolved"],["reject","fail",c.Callbacks("once memory"),c.Callbacks("once memory"),1,"rejected"]],h="pending",p={state:function(){return h},always:function(){return M.done(arguments).fail(arguments),this},catch:function(S){return p.then(null,S)},pipe:function(){var S=arguments;return c.Deferred(function(A){c.each(o,function(B,F){var G=b(S[F[4]])&&S[F[4]];M[F[1]](function(){var ae=G&&G.apply(this,arguments);ae&&b(ae.promise)?ae.promise().progress(A.notify).done(A.resolve).fail(A.reject):A[F[0]+"With"](this,G?[ae]:arguments)})}),S=null}).promise()},then:function(S,A,B){var F=0;function G(ae,he,Q,xe){return function(){var nt=this,St=arguments,ct=function(){var jt,Hn;if(!(ae<F)){if(jt=Q.apply(nt,St),jt===he.promise())throw new TypeError("Thenable self-resolution");Hn=jt&&(typeof jt=="object"||typeof jt=="function")&&jt.then,b(Hn)?xe?Hn.call(jt,G(F,he,H,xe),G(F,he,Dt,xe)):(F++,Hn.call(jt,G(F,he,H,xe),G(F,he,Dt,xe),G(F,he,H,he.notifyWith))):(Q!==H&&(nt=void 0,St=[jt]),(xe||he.resolveWith)(nt,St))}},tn=xe?ct:function(){try{ct()}catch(jt){c.Deferred.exceptionHook&&c.Deferred.exceptionHook(jt,tn.error),ae+1>=F&&(Q!==Dt&&(nt=void 0,St=[jt]),he.rejectWith(nt,St))}};ae?tn():(c.Deferred.getErrorHook?tn.error=c.Deferred.getErrorHook():c.Deferred.getStackHook&&(tn.error=c.Deferred.getStackHook()),e.setTimeout(tn))}}return c.Deferred(function(ae){o[0][3].add(G(0,ae,b(B)?B:H,ae.notifyWith)),o[1][3].add(G(0,ae,b(S)?S:H)),o[2][3].add(G(0,ae,b(A)?A:Dt))}).promise()},promise:function(S){return S!=null?c.extend(S,p):p}},M={};return c.each(o,function(S,A){var B=A[2],F=A[5];p[A[1]]=B.add,F&&B.add(function(){h=F},o[3-S][2].disable,o[3-S][3].disable,o[0][2].lock,o[0][3].lock),B.add(A[3].fire),M[A[0]]=function(){return M[A[0]+"With"](this===M?void 0:this,arguments),this},M[A[0]+"With"]=B.fireWith}),p.promise(M),s&&s.call(M,M),M},when:function(s){var o=arguments.length,h=o,p=Array(h),M=a.call(arguments),S=c.Deferred(),A=function(B){return function(F){p[B]=this,M[B]=arguments.length>1?a.call(arguments):F,--o||S.resolveWith(p,M)}};if(o<=1&&(xt(s,S.done(A(h)).resolve,S.reject,!o),S.state()==="pending"||b(M[h]&&M[h].then)))return S.then();for(;h--;)xt(M[h],A(h),S.reject);return S.promise()}});var Et=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;c.Deferred.exceptionHook=function(s,o){e.console&&e.console.warn&&s&&Et.test(s.name)&&e.console.warn("jQuery.Deferred exception: "+s.message,s.stack,o)},c.readyException=function(s){e.setTimeout(function(){throw s})};var He=c.Deferred();c.fn.ready=function(s){return He.then(s).catch(function(o){c.readyException(o)}),this},c.extend({isReady:!1,readyWait:1,ready:function(s){(s===!0?--c.readyWait:c.isReady)||(c.isReady=!0,!(s!==!0&&--c.readyWait>0)&&He.resolveWith(m,[c]))}}),c.ready.then=He.then;function It(){m.removeEventListener("DOMContentLoaded",It),e.removeEventListener("load",It),c.ready()}m.readyState==="complete"||m.readyState!=="loading"&&!m.documentElement.doScroll?e.setTimeout(c.ready):(m.addEventListener("DOMContentLoaded",It),e.addEventListener("load",It));var Xe=function(s,o,h,p,M,S,A){var B=0,F=s.length,G=h==null;if(N(h)==="object"){M=!0;for(B in h)Xe(s,o,B,h[B],!0,S,A)}else if(p!==void 0&&(M=!0,b(p)||(A=!0),G&&(A?(o.call(s,p),o=null):(G=o,o=function(ae,he,Q){return G.call(c(ae),Q)})),o))for(;B<F;B++)o(s[B],h,A?p:p.call(s[B],B,o(s[B],h)));return M?s:G?o.call(s):F?o(s[0],h):S},tt=/^-ms-/,O=/-([a-z])/g;function w(s,o){return o.toUpperCase()}function ee(s){return s.replace(tt,"ms-").replace(O,w)}var ge=function(s){return s.nodeType===1||s.nodeType===9||!+s.nodeType};function ve(){this.expando=c.expando+ve.uid++}ve.uid=1,ve.prototype={cache:function(s){var o=s[this.expando];return o||(o={},ge(s)&&(s.nodeType?s[this.expando]=o:Object.defineProperty(s,this.expando,{value:o,configurable:!0}))),o},set:function(s,o,h){var p,M=this.cache(s);if(typeof o=="string")M[ee(o)]=h;else for(p in o)M[ee(p)]=o[p];return M},get:function(s,o){return o===void 0?this.cache(s):s[this.expando]&&s[this.expando][ee(o)]},access:function(s,o,h){return o===void 0||o&&typeof o=="string"&&h===void 0?this.get(s,o):(this.set(s,o,h),h!==void 0?h:o)},remove:function(s,o){var h,p=s[this.expando];if(p!==void 0){if(o!==void 0)for(Array.isArray(o)?o=o.map(ee):(o=ee(o),o=o in p?[o]:o.match($e)||[]),h=o.length;h--;)delete p[o[h]];(o===void 0||c.isEmptyObject(p))&&(s.nodeType?s[this.expando]=void 0:delete s[this.expando])}},hasData:function(s){var o=s[this.expando];return o!==void 0&&!c.isEmptyObject(o)}};var K=new ve,Ne=new ve,Te=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ie=/[A-Z]/g;function rt(s){return s==="true"?!0:s==="false"?!1:s==="null"?null:s===+s+""?+s:Te.test(s)?JSON.parse(s):s}function Me(s,o,h){var p;if(h===void 0&&s.nodeType===1)if(p="data-"+o.replace(Ie,"-$&").toLowerCase(),h=s.getAttribute(p),typeof h=="string"){try{h=rt(h)}catch{}Ne.set(s,o,h)}else h=void 0;return h}c.extend({hasData:function(s){return Ne.hasData(s)||K.hasData(s)},data:function(s,o,h){return Ne.access(s,o,h)},removeData:function(s,o){Ne.remove(s,o)},_data:function(s,o,h){return K.access(s,o,h)},_removeData:function(s,o){K.remove(s,o)}}),c.fn.extend({data:function(s,o){var h,p,M,S=this[0],A=S&&S.attributes;if(s===void 0){if(this.length&&(M=Ne.get(S),S.nodeType===1&&!K.get(S,"hasDataAttrs"))){for(h=A.length;h--;)A[h]&&(p=A[h].name,p.indexOf("data-")===0&&(p=ee(p.slice(5)),Me(S,p,M[p])));K.set(S,"hasDataAttrs",!0)}return M}return typeof s=="object"?this.each(function(){Ne.set(this,s)}):Xe(this,function(B){var F;if(S&&B===void 0)return F=Ne.get(S,s),F!==void 0||(F=Me(S,s),F!==void 0)?F:void 0;this.each(function(){Ne.set(this,s,B)})},null,o,arguments.length>1,null,!0)},removeData:function(s){return this.each(function(){Ne.remove(this,s)})}}),c.extend({queue:function(s,o,h){var p;if(s)return o=(o||"fx")+"queue",p=K.get(s,o),h&&(!p||Array.isArray(h)?p=K.access(s,o,c.makeArray(h)):p.push(h)),p||[]},dequeue:function(s,o){o=o||"fx";var h=c.queue(s,o),p=h.length,M=h.shift(),S=c._queueHooks(s,o),A=function(){c.dequeue(s,o)};M==="inprogress"&&(M=h.shift(),p--),M&&(o==="fx"&&h.unshift("inprogress"),delete S.stop,M.call(s,A,S)),!p&&S&&S.empty.fire()},_queueHooks:function(s,o){var h=o+"queueHooks";return K.get(s,h)||K.access(s,h,{empty:c.Callbacks("once memory").add(function(){K.remove(s,[o+"queue",h])})})}}),c.fn.extend({queue:function(s,o){var h=2;return typeof s!="string"&&(o=s,s="fx",h--),arguments.length<h?c.queue(this[0],s):o===void 0?this:this.each(function(){var p=c.queue(this,s,o);c._queueHooks(this,s),s==="fx"&&p[0]!=="inprogress"&&c.dequeue(this,s)})},dequeue:function(s){return this.each(function(){c.dequeue(this,s)})},clearQueue:function(s){return this.queue(s||"fx",[])},promise:function(s,o){var h,p=1,M=c.Deferred(),S=this,A=this.length,B=function(){--p||M.resolveWith(S,[S])};for(typeof s!="string"&&(o=s,s=void 0),s=s||"fx";A--;)h=K.get(S[A],s+"queueHooks"),h&&h.empty&&(p++,h.empty.add(B));return B(),M.promise(o)}});var Ce=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ot=new RegExp("^(?:([+-])=|)("+Ce+")([a-z%]*)$","i"),We=["Top","Right","Bottom","Left"],we=m.documentElement,qe=function(s){return c.contains(s.ownerDocument,s)},et={composed:!0};we.getRootNode&&(qe=function(s){return c.contains(s.ownerDocument,s)||s.getRootNode(et)===s.ownerDocument});var Rt=function(s,o){return s=o||s,s.style.display==="none"||s.style.display===""&&qe(s)&&c.css(s,"display")==="none"};function T(s,o,h,p){var M,S,A=20,B=p?function(){return p.cur()}:function(){return c.css(s,o,"")},F=B(),G=h&&h[3]||(c.cssNumber[o]?"":"px"),ae=s.nodeType&&(c.cssNumber[o]||G!=="px"&&+F)&&ot.exec(c.css(s,o));if(ae&&ae[3]!==G){for(F=F/2,G=G||ae[3],ae=+F||1;A--;)c.style(s,o,ae+G),(1-S)*(1-(S=B()/F||.5))<=0&&(A=0),ae=ae/S;ae=ae*2,c.style(s,o,ae+G),h=h||[]}return h&&(ae=+ae||+F||0,M=h[1]?ae+(h[1]+1)*h[2]:+h[2],p&&(p.unit=G,p.start=ae,p.end=M)),M}var J={};function te(s){var o,h=s.ownerDocument,p=s.nodeName,M=J[p];return M||(o=h.body.appendChild(h.createElement(p)),M=c.css(o,"display"),o.parentNode.removeChild(o),M==="none"&&(M="block"),J[p]=M,M)}function se(s,o){for(var h,p,M=[],S=0,A=s.length;S<A;S++)p=s[S],p.style&&(h=p.style.display,o?(h==="none"&&(M[S]=K.get(p,"display")||null,M[S]||(p.style.display="")),p.style.display===""&&Rt(p)&&(M[S]=te(p))):h!=="none"&&(M[S]="none",K.set(p,"display",h)));for(S=0;S<A;S++)M[S]!=null&&(s[S].style.display=M[S]);return s}c.fn.extend({show:function(){return se(this,!0)},hide:function(){return se(this)},toggle:function(s){return typeof s=="boolean"?s?this.show():this.hide():this.each(function(){Rt(this)?c(this).show():c(this).hide()})}});var _e=/^(?:checkbox|radio)$/i,Ve=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ze=/^$|^module$|\/(?:java|ecma)script/i;(function(){var s=m.createDocumentFragment(),o=s.appendChild(m.createElement("div")),h=m.createElement("input");h.setAttribute("type","radio"),h.setAttribute("checked","checked"),h.setAttribute("name","t"),o.appendChild(h),E.checkClone=o.cloneNode(!0).cloneNode(!0).lastChild.checked,o.innerHTML="<textarea>x</textarea>",E.noCloneChecked=!!o.cloneNode(!0).lastChild.defaultValue,o.innerHTML="<option></option>",E.option=!!o.lastChild})();var yt={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};yt.tbody=yt.tfoot=yt.colgroup=yt.caption=yt.thead,yt.th=yt.td,E.option||(yt.optgroup=yt.option=[1,"<select multiple='multiple'>","</select>"]);function Mt(s,o){var h;return typeof s.getElementsByTagName<"u"?h=s.getElementsByTagName(o||"*"):typeof s.querySelectorAll<"u"?h=s.querySelectorAll(o||"*"):h=[],o===void 0||o&&I(s,o)?c.merge([s],h):h}function dt(s,o){for(var h=0,p=s.length;h<p;h++)K.set(s[h],"globalEval",!o||K.get(o[h],"globalEval"))}var Gt=/<|&#?\w+;/;function Ht(s,o,h,p,M){for(var S,A,B,F,G,ae,he=o.createDocumentFragment(),Q=[],xe=0,nt=s.length;xe<nt;xe++)if(S=s[xe],S||S===0)if(N(S)==="object")c.merge(Q,S.nodeType?[S]:S);else if(!Gt.test(S))Q.push(o.createTextNode(S));else{for(A=A||he.appendChild(o.createElement("div")),B=(Ve.exec(S)||["",""])[1].toLowerCase(),F=yt[B]||yt._default,A.innerHTML=F[1]+c.htmlPrefilter(S)+F[2],ae=F[0];ae--;)A=A.lastChild;c.merge(Q,A.childNodes),A=he.firstChild,A.textContent=""}for(he.textContent="",xe=0;S=Q[xe++];){if(p&&c.inArray(S,p)>-1){M&&M.push(S);continue}if(G=qe(S),A=Mt(he.appendChild(S),"script"),G&&dt(A),h)for(ae=0;S=A[ae++];)Ze.test(S.type||"")&&h.push(S)}return he}var Ln=/^([^.]*)(?:\.(.+)|)/;function Bt(){return!0}function rn(){return!1}function Dn(s,o,h,p,M,S){var A,B;if(typeof o=="object"){typeof h!="string"&&(p=p||h,h=void 0);for(B in o)Dn(s,B,h,p,o[B],S);return s}if(p==null&&M==null?(M=h,p=h=void 0):M==null&&(typeof h=="string"?(M=p,p=void 0):(M=p,p=h,h=void 0)),M===!1)M=rn;else if(!M)return s;return S===1&&(A=M,M=function(F){return c().off(F),A.apply(this,arguments)},M.guid=A.guid||(A.guid=c.guid++)),s.each(function(){c.event.add(this,o,M,p,h)})}c.event={global:{},add:function(s,o,h,p,M){var S,A,B,F,G,ae,he,Q,xe,nt,St,ct=K.get(s);if(ge(s))for(h.handler&&(S=h,h=S.handler,M=S.selector),M&&c.find.matchesSelector(we,M),h.guid||(h.guid=c.guid++),(F=ct.events)||(F=ct.events=Object.create(null)),(A=ct.handle)||(A=ct.handle=function(tn){return typeof c<"u"&&c.event.triggered!==tn.type?c.event.dispatch.apply(s,arguments):void 0}),o=(o||"").match($e)||[""],G=o.length;G--;)B=Ln.exec(o[G])||[],xe=St=B[1],nt=(B[2]||"").split(".").sort(),xe&&(he=c.event.special[xe]||{},xe=(M?he.delegateType:he.bindType)||xe,he=c.event.special[xe]||{},ae=c.extend({type:xe,origType:St,data:p,handler:h,guid:h.guid,selector:M,needsContext:M&&c.expr.match.needsContext.test(M),namespace:nt.join(".")},S),(Q=F[xe])||(Q=F[xe]=[],Q.delegateCount=0,(!he.setup||he.setup.call(s,p,nt,A)===!1)&&s.addEventListener&&s.addEventListener(xe,A)),he.add&&(he.add.call(s,ae),ae.handler.guid||(ae.handler.guid=h.guid)),M?Q.splice(Q.delegateCount++,0,ae):Q.push(ae),c.event.global[xe]=!0)},remove:function(s,o,h,p,M){var S,A,B,F,G,ae,he,Q,xe,nt,St,ct=K.hasData(s)&&K.get(s);if(!(!ct||!(F=ct.events))){for(o=(o||"").match($e)||[""],G=o.length;G--;){if(B=Ln.exec(o[G])||[],xe=St=B[1],nt=(B[2]||"").split(".").sort(),!xe){for(xe in F)c.event.remove(s,xe+o[G],h,p,!0);continue}for(he=c.event.special[xe]||{},xe=(p?he.delegateType:he.bindType)||xe,Q=F[xe]||[],B=B[2]&&new RegExp("(^|\\.)"+nt.join("\\.(?:.*\\.|)")+"(\\.|$)"),A=S=Q.length;S--;)ae=Q[S],(M||St===ae.origType)&&(!h||h.guid===ae.guid)&&(!B||B.test(ae.namespace))&&(!p||p===ae.selector||p==="**"&&ae.selector)&&(Q.splice(S,1),ae.selector&&Q.delegateCount--,he.remove&&he.remove.call(s,ae));A&&!Q.length&&((!he.teardown||he.teardown.call(s,nt,ct.handle)===!1)&&c.removeEvent(s,xe,ct.handle),delete F[xe])}c.isEmptyObject(F)&&K.remove(s,"handle events")}},dispatch:function(s){var o,h,p,M,S,A,B=new Array(arguments.length),F=c.event.fix(s),G=(K.get(this,"events")||Object.create(null))[F.type]||[],ae=c.event.special[F.type]||{};for(B[0]=F,o=1;o<arguments.length;o++)B[o]=arguments[o];if(F.delegateTarget=this,!(ae.preDispatch&&ae.preDispatch.call(this,F)===!1)){for(A=c.event.handlers.call(this,F,G),o=0;(M=A[o++])&&!F.isPropagationStopped();)for(F.currentTarget=M.elem,h=0;(S=M.handlers[h++])&&!F.isImmediatePropagationStopped();)(!F.rnamespace||S.namespace===!1||F.rnamespace.test(S.namespace))&&(F.handleObj=S,F.data=S.data,p=((c.event.special[S.origType]||{}).handle||S.handler).apply(M.elem,B),p!==void 0&&(F.result=p)===!1&&(F.preventDefault(),F.stopPropagation()));return ae.postDispatch&&ae.postDispatch.call(this,F),F.result}},handlers:function(s,o){var h,p,M,S,A,B=[],F=o.delegateCount,G=s.target;if(F&&G.nodeType&&!(s.type==="click"&&s.button>=1)){for(;G!==this;G=G.parentNode||this)if(G.nodeType===1&&!(s.type==="click"&&G.disabled===!0)){for(S=[],A={},h=0;h<F;h++)p=o[h],M=p.selector+" ",A[M]===void 0&&(A[M]=p.needsContext?c(M,this).index(G)>-1:c.find(M,this,null,[G]).length),A[M]&&S.push(p);S.length&&B.push({elem:G,handlers:S})}}return G=this,F<o.length&&B.push({elem:G,handlers:o.slice(F)}),B},addProp:function(s,o){Object.defineProperty(c.Event.prototype,s,{enumerable:!0,configurable:!0,get:b(o)?function(){if(this.originalEvent)return o(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[s]},set:function(h){Object.defineProperty(this,s,{enumerable:!0,configurable:!0,writable:!0,value:h})}})},fix:function(s){return s[c.expando]?s:new c.Event(s)},special:{load:{noBubble:!0},click:{setup:function(s){var o=this||s;return _e.test(o.type)&&o.click&&I(o,"input")&&zn(o,"click",!0),!1},trigger:function(s){var o=this||s;return _e.test(o.type)&&o.click&&I(o,"input")&&zn(o,"click"),!0},_default:function(s){var o=s.target;return _e.test(o.type)&&o.click&&I(o,"input")&&K.get(o,"click")||I(o,"a")}},beforeunload:{postDispatch:function(s){s.result!==void 0&&s.originalEvent&&(s.originalEvent.returnValue=s.result)}}}};function zn(s,o,h){if(!h){K.get(s,o)===void 0&&c.event.add(s,o,Bt);return}K.set(s,o,!1),c.event.add(s,o,{namespace:!1,handler:function(p){var M,S=K.get(this,o);if(p.isTrigger&1&&this[o]){if(S)(c.event.special[o]||{}).delegateType&&p.stopPropagation();else if(S=a.call(arguments),K.set(this,o,S),this[o](),M=K.get(this,o),K.set(this,o,!1),S!==M)return p.stopImmediatePropagation(),p.preventDefault(),M}else S&&(K.set(this,o,c.event.trigger(S[0],S.slice(1),this)),p.stopPropagation(),p.isImmediatePropagationStopped=Bt)}})}c.removeEvent=function(s,o,h){s.removeEventListener&&s.removeEventListener(o,h)},c.Event=function(s,o){if(!(this instanceof c.Event))return new c.Event(s,o);s&&s.type?(this.originalEvent=s,this.type=s.type,this.isDefaultPrevented=s.defaultPrevented||s.defaultPrevented===void 0&&s.returnValue===!1?Bt:rn,this.target=s.target&&s.target.nodeType===3?s.target.parentNode:s.target,this.currentTarget=s.currentTarget,this.relatedTarget=s.relatedTarget):this.type=s,o&&c.extend(this,o),this.timeStamp=s&&s.timeStamp||Date.now(),this[c.expando]=!0},c.Event.prototype={constructor:c.Event,isDefaultPrevented:rn,isPropagationStopped:rn,isImmediatePropagationStopped:rn,isSimulated:!1,preventDefault:function(){var s=this.originalEvent;this.isDefaultPrevented=Bt,s&&!this.isSimulated&&s.preventDefault()},stopPropagation:function(){var s=this.originalEvent;this.isPropagationStopped=Bt,s&&!this.isSimulated&&s.stopPropagation()},stopImmediatePropagation:function(){var s=this.originalEvent;this.isImmediatePropagationStopped=Bt,s&&!this.isSimulated&&s.stopImmediatePropagation(),this.stopPropagation()}},c.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},c.event.addProp),c.each({focus:"focusin",blur:"focusout"},function(s,o){function h(p){if(m.documentMode){var M=K.get(this,"handle"),S=c.event.fix(p);S.type=p.type==="focusin"?"focus":"blur",S.isSimulated=!0,M(p),S.target===S.currentTarget&&M(S)}else c.event.simulate(o,p.target,c.event.fix(p))}c.event.special[s]={setup:function(){var p;if(zn(this,s,!0),m.documentMode)p=K.get(this,o),p||this.addEventListener(o,h),K.set(this,o,(p||0)+1);else return!1},trigger:function(){return zn(this,s),!0},teardown:function(){var p;if(m.documentMode)p=K.get(this,o)-1,p?K.set(this,o,p):(this.removeEventListener(o,h),K.remove(this,o));else return!1},_default:function(p){return K.get(p.target,s)},delegateType:o},c.event.special[o]={setup:function(){var p=this.ownerDocument||this.document||this,M=m.documentMode?this:p,S=K.get(M,o);S||(m.documentMode?this.addEventListener(o,h):p.addEventListener(s,h,!0)),K.set(M,o,(S||0)+1)},teardown:function(){var p=this.ownerDocument||this.document||this,M=m.documentMode?this:p,S=K.get(M,o)-1;S?K.set(M,o,S):(m.documentMode?this.removeEventListener(o,h):p.removeEventListener(s,h,!0),K.remove(M,o))}}}),c.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(s,o){c.event.special[s]={delegateType:o,bindType:o,handle:function(h){var p,M=this,S=h.relatedTarget,A=h.handleObj;return(!S||S!==M&&!c.contains(M,S))&&(h.type=A.origType,p=A.handler.apply(this,arguments),h.type=o),p}}}),c.fn.extend({on:function(s,o,h,p){return Dn(this,s,o,h,p)},one:function(s,o,h,p){return Dn(this,s,o,h,p,1)},off:function(s,o,h){var p,M;if(s&&s.preventDefault&&s.handleObj)return p=s.handleObj,c(s.delegateTarget).off(p.namespace?p.origType+"."+p.namespace:p.origType,p.selector,p.handler),this;if(typeof s=="object"){for(M in s)this.off(M,o,s[M]);return this}return(o===!1||typeof o=="function")&&(h=o,o=void 0),h===!1&&(h=rn),this.each(function(){c.event.remove(this,s,h,o)})}});var Xi=/<script|<style|<link/i,ss=/checked\s*(?:[^=]|=\s*.checked.)/i,qi=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Pr(s,o){return I(s,"table")&&I(o.nodeType!==11?o:o.firstChild,"tr")&&c(s).children("tbody")[0]||s}function as(s){return s.type=(s.getAttribute("type")!==null)+"/"+s.type,s}function aa(s){return(s.type||"").slice(0,5)==="true/"?s.type=s.type.slice(5):s.removeAttribute("type"),s}function os(s,o){var h,p,M,S,A,B,F;if(o.nodeType===1){if(K.hasData(s)&&(S=K.get(s),F=S.events,F)){K.remove(o,"handle events");for(M in F)for(h=0,p=F[M].length;h<p;h++)c.event.add(o,M,F[M][h])}Ne.hasData(s)&&(A=Ne.access(s),B=c.extend({},A),Ne.set(o,B))}}function oa(s,o){var h=o.nodeName.toLowerCase();h==="input"&&_e.test(s.type)?o.checked=s.checked:(h==="input"||h==="textarea")&&(o.defaultValue=s.defaultValue)}function C(s,o,h,p){o=l(o);var M,S,A,B,F,G,ae=0,he=s.length,Q=he-1,xe=o[0],nt=b(xe);if(nt||he>1&&typeof xe=="string"&&!E.checkClone&&ss.test(xe))return s.each(function(St){var ct=s.eq(St);nt&&(o[0]=xe.call(this,St,ct.html())),C(ct,o,h,p)});if(he&&(M=Ht(o,s[0].ownerDocument,!1,s,p),S=M.firstChild,M.childNodes.length===1&&(M=S),S||p)){for(A=c.map(Mt(M,"script"),as),B=A.length;ae<he;ae++)F=M,ae!==Q&&(F=c.clone(F,!0,!0),B&&c.merge(A,Mt(F,"script"))),h.call(s[ae],F,ae);if(B)for(G=A[A.length-1].ownerDocument,c.map(A,aa),ae=0;ae<B;ae++)F=A[ae],Ze.test(F.type||"")&&!K.access(F,"globalEval")&&c.contains(G,F)&&(F.src&&(F.type||"").toLowerCase()!=="module"?c._evalUrl&&!F.noModule&&c._evalUrl(F.src,{nonce:F.nonce||F.getAttribute("nonce")},G):R(F.textContent.replace(qi,""),F,G))}return s}function W(s,o,h){for(var p,M=o?c.filter(o,s):s,S=0;(p=M[S])!=null;S++)!h&&p.nodeType===1&&c.cleanData(Mt(p)),p.parentNode&&(h&&qe(p)&&dt(Mt(p,"script")),p.parentNode.removeChild(p));return s}c.extend({htmlPrefilter:function(s){return s},clone:function(s,o,h){var p,M,S,A,B=s.cloneNode(!0),F=qe(s);if(!E.noCloneChecked&&(s.nodeType===1||s.nodeType===11)&&!c.isXMLDoc(s))for(A=Mt(B),S=Mt(s),p=0,M=S.length;p<M;p++)oa(S[p],A[p]);if(o)if(h)for(S=S||Mt(s),A=A||Mt(B),p=0,M=S.length;p<M;p++)os(S[p],A[p]);else os(s,B);return A=Mt(B,"script"),A.length>0&&dt(A,!F&&Mt(s,"script")),B},cleanData:function(s){for(var o,h,p,M=c.event.special,S=0;(h=s[S])!==void 0;S++)if(ge(h)){if(o=h[K.expando]){if(o.events)for(p in o.events)M[p]?c.event.remove(h,p):c.removeEvent(h,p,o.handle);h[K.expando]=void 0}h[Ne.expando]&&(h[Ne.expando]=void 0)}}}),c.fn.extend({detach:function(s){return W(this,s,!0)},remove:function(s){return W(this,s)},text:function(s){return Xe(this,function(o){return o===void 0?c.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=o)})},null,s,arguments.length)},append:function(){return C(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=Pr(this,s);o.appendChild(s)}})},prepend:function(){return C(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=Pr(this,s);o.insertBefore(s,o.firstChild)}})},before:function(){return C(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this)})},after:function(){return C(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this.nextSibling)})},empty:function(){for(var s,o=0;(s=this[o])!=null;o++)s.nodeType===1&&(c.cleanData(Mt(s,!1)),s.textContent="");return this},clone:function(s,o){return s=s??!1,o=o??s,this.map(function(){return c.clone(this,s,o)})},html:function(s){return Xe(this,function(o){var h=this[0]||{},p=0,M=this.length;if(o===void 0&&h.nodeType===1)return h.innerHTML;if(typeof o=="string"&&!Xi.test(o)&&!yt[(Ve.exec(o)||["",""])[1].toLowerCase()]){o=c.htmlPrefilter(o);try{for(;p<M;p++)h=this[p]||{},h.nodeType===1&&(c.cleanData(Mt(h,!1)),h.innerHTML=o);h=0}catch{}}h&&this.empty().append(o)},null,s,arguments.length)},replaceWith:function(){var s=[];return C(this,arguments,function(o){var h=this.parentNode;c.inArray(this,s)<0&&(c.cleanData(Mt(this)),h&&h.replaceChild(o,this))},s)}}),c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(s,o){c.fn[s]=function(h){for(var p,M=[],S=c(h),A=S.length-1,B=0;B<=A;B++)p=B===A?this:this.clone(!0),c(S[B])[o](p),u.apply(M,p.get());return this.pushStack(M)}});var ne=new RegExp("^("+Ce+")(?!px)[a-z%]+$","i"),ie=/^--/,X=function(s){var o=s.ownerDocument.defaultView;return(!o||!o.opener)&&(o=e),o.getComputedStyle(s)},Se=function(s,o,h){var p,M,S={};for(M in o)S[M]=s.style[M],s.style[M]=o[M];p=h.call(s);for(M in o)s.style[M]=S[M];return p},Re=new RegExp(We.join("|"),"i");(function(){function s(){if(G){F.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",G.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",we.appendChild(F).appendChild(G);var ae=e.getComputedStyle(G);h=ae.top!=="1%",B=o(ae.marginLeft)===12,G.style.right="60%",S=o(ae.right)===36,p=o(ae.width)===36,G.style.position="absolute",M=o(G.offsetWidth/3)===12,we.removeChild(F),G=null}}function o(ae){return Math.round(parseFloat(ae))}var h,p,M,S,A,B,F=m.createElement("div"),G=m.createElement("div");G.style&&(G.style.backgroundClip="content-box",G.cloneNode(!0).style.backgroundClip="",E.clearCloneStyle=G.style.backgroundClip==="content-box",c.extend(E,{boxSizingReliable:function(){return s(),p},pixelBoxStyles:function(){return s(),S},pixelPosition:function(){return s(),h},reliableMarginLeft:function(){return s(),B},scrollboxSize:function(){return s(),M},reliableTrDimensions:function(){var ae,he,Q,xe;return A==null&&(ae=m.createElement("table"),he=m.createElement("tr"),Q=m.createElement("div"),ae.style.cssText="position:absolute;left:-11111px;border-collapse:separate",he.style.cssText="box-sizing:content-box;border:1px solid",he.style.height="1px",Q.style.height="9px",Q.style.display="block",we.appendChild(ae).appendChild(he).appendChild(Q),xe=e.getComputedStyle(he),A=parseInt(xe.height,10)+parseInt(xe.borderTopWidth,10)+parseInt(xe.borderBottomWidth,10)===he.offsetHeight,we.removeChild(ae)),A}}))})();function Fe(s,o,h){var p,M,S,A,B=ie.test(o),F=s.style;return h=h||X(s),h&&(A=h.getPropertyValue(o)||h[o],B&&A&&(A=A.replace(pe,"$1")||void 0),A===""&&!qe(s)&&(A=c.style(s,o)),!E.pixelBoxStyles()&&ne.test(A)&&Re.test(o)&&(p=F.width,M=F.minWidth,S=F.maxWidth,F.minWidth=F.maxWidth=F.width=A,A=h.width,F.width=p,F.minWidth=M,F.maxWidth=S)),A!==void 0?A+"":A}function ze(s,o){return{get:function(){if(s()){delete this.get;return}return(this.get=o).apply(this,arguments)}}}var Ke=["Webkit","Moz","ms"],Je=m.createElement("div").style,je={};function wt(s){for(var o=s[0].toUpperCase()+s.slice(1),h=Ke.length;h--;)if(s=Ke[h]+o,s in Je)return s}function Ut(s){var o=c.cssProps[s]||je[s];return o||(s in Je?s:je[s]=wt(s)||s)}var zt=/^(none|table(?!-c[ea]).+)/,un={position:"absolute",visibility:"hidden",display:"block"},bt={letterSpacing:"0",fontWeight:"400"};function Ge(s,o,h){var p=ot.exec(o);return p?Math.max(0,p[2]-(h||0))+(p[3]||"px"):o}function Wt(s,o,h,p,M,S){var A=o==="width"?1:0,B=0,F=0,G=0;if(h===(p?"border":"content"))return 0;for(;A<4;A+=2)h==="margin"&&(G+=c.css(s,h+We[A],!0,M)),p?(h==="content"&&(F-=c.css(s,"padding"+We[A],!0,M)),h!=="margin"&&(F-=c.css(s,"border"+We[A]+"Width",!0,M))):(F+=c.css(s,"padding"+We[A],!0,M),h!=="padding"?F+=c.css(s,"border"+We[A]+"Width",!0,M):B+=c.css(s,"border"+We[A]+"Width",!0,M));return!p&&S>=0&&(F+=Math.max(0,Math.ceil(s["offset"+o[0].toUpperCase()+o.slice(1)]-S-F-B-.5))||0),F+G}function Tt(s,o,h){var p=X(s),M=!E.boxSizingReliable()||h,S=M&&c.css(s,"boxSizing",!1,p)==="border-box",A=S,B=Fe(s,o,p),F="offset"+o[0].toUpperCase()+o.slice(1);if(ne.test(B)){if(!h)return B;B="auto"}return(!E.boxSizingReliable()&&S||!E.reliableTrDimensions()&&I(s,"tr")||B==="auto"||!parseFloat(B)&&c.css(s,"display",!1,p)==="inline")&&s.getClientRects().length&&(S=c.css(s,"boxSizing",!1,p)==="border-box",A=F in s,A&&(B=s[F])),B=parseFloat(B)||0,B+Wt(s,o,h||(S?"border":"content"),A,p,B)+"px"}c.extend({cssHooks:{opacity:{get:function(s,o){if(o){var h=Fe(s,"opacity");return h===""?"1":h}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(s,o,h,p){if(!(!s||s.nodeType===3||s.nodeType===8||!s.style)){var M,S,A,B=ee(o),F=ie.test(o),G=s.style;if(F||(o=Ut(B)),A=c.cssHooks[o]||c.cssHooks[B],h!==void 0){if(S=typeof h,S==="string"&&(M=ot.exec(h))&&M[1]&&(h=T(s,o,M),S="number"),h==null||h!==h)return;S==="number"&&!F&&(h+=M&&M[3]||(c.cssNumber[B]?"":"px")),!E.clearCloneStyle&&h===""&&o.indexOf("background")===0&&(G[o]="inherit"),(!A||!("set"in A)||(h=A.set(s,h,p))!==void 0)&&(F?G.setProperty(o,h):G[o]=h)}else return A&&"get"in A&&(M=A.get(s,!1,p))!==void 0?M:G[o]}},css:function(s,o,h,p){var M,S,A,B=ee(o),F=ie.test(o);return F||(o=Ut(B)),A=c.cssHooks[o]||c.cssHooks[B],A&&"get"in A&&(M=A.get(s,!0,h)),M===void 0&&(M=Fe(s,o,p)),M==="normal"&&o in bt&&(M=bt[o]),h===""||h?(S=parseFloat(M),h===!0||isFinite(S)?S||0:M):M}}),c.each(["height","width"],function(s,o){c.cssHooks[o]={get:function(h,p,M){if(p)return zt.test(c.css(h,"display"))&&(!h.getClientRects().length||!h.getBoundingClientRect().width)?Se(h,un,function(){return Tt(h,o,M)}):Tt(h,o,M)},set:function(h,p,M){var S,A=X(h),B=!E.scrollboxSize()&&A.position==="absolute",F=B||M,G=F&&c.css(h,"boxSizing",!1,A)==="border-box",ae=M?Wt(h,o,M,G,A):0;return G&&B&&(ae-=Math.ceil(h["offset"+o[0].toUpperCase()+o.slice(1)]-parseFloat(A[o])-Wt(h,o,"border",!1,A)-.5)),ae&&(S=ot.exec(p))&&(S[3]||"px")!=="px"&&(h.style[o]=p,p=c.css(h,o)),Ge(h,p,ae)}}}),c.cssHooks.marginLeft=ze(E.reliableMarginLeft,function(s,o){if(o)return(parseFloat(Fe(s,"marginLeft"))||s.getBoundingClientRect().left-Se(s,{marginLeft:0},function(){return s.getBoundingClientRect().left}))+"px"}),c.each({margin:"",padding:"",border:"Width"},function(s,o){c.cssHooks[s+o]={expand:function(h){for(var p=0,M={},S=typeof h=="string"?h.split(" "):[h];p<4;p++)M[s+We[p]+o]=S[p]||S[p-2]||S[0];return M}},s!=="margin"&&(c.cssHooks[s+o].set=Ge)}),c.fn.extend({css:function(s,o){return Xe(this,function(h,p,M){var S,A,B={},F=0;if(Array.isArray(p)){for(S=X(h),A=p.length;F<A;F++)B[p[F]]=c.css(h,p[F],!1,S);return B}return M!==void 0?c.style(h,p,M):c.css(h,p)},s,o,arguments.length>1)}});function Nt(s,o,h,p,M){return new Nt.prototype.init(s,o,h,p,M)}c.Tween=Nt,Nt.prototype={constructor:Nt,init:function(s,o,h,p,M,S){this.elem=s,this.prop=h,this.easing=M||c.easing._default,this.options=o,this.start=this.now=this.cur(),this.end=p,this.unit=S||(c.cssNumber[h]?"":"px")},cur:function(){var s=Nt.propHooks[this.prop];return s&&s.get?s.get(this):Nt.propHooks._default.get(this)},run:function(s){var o,h=Nt.propHooks[this.prop];return this.options.duration?this.pos=o=c.easing[this.easing](s,this.options.duration*s,0,1,this.options.duration):this.pos=o=s,this.now=(this.end-this.start)*o+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),h&&h.set?h.set(this):Nt.propHooks._default.set(this),this}},Nt.prototype.init.prototype=Nt.prototype,Nt.propHooks={_default:{get:function(s){var o;return s.elem.nodeType!==1||s.elem[s.prop]!=null&&s.elem.style[s.prop]==null?s.elem[s.prop]:(o=c.css(s.elem,s.prop,""),!o||o==="auto"?0:o)},set:function(s){c.fx.step[s.prop]?c.fx.step[s.prop](s):s.elem.nodeType===1&&(c.cssHooks[s.prop]||s.elem.style[Ut(s.prop)]!=null)?c.style(s.elem,s.prop,s.now+s.unit):s.elem[s.prop]=s.now}}},Nt.propHooks.scrollTop=Nt.propHooks.scrollLeft={set:function(s){s.elem.nodeType&&s.elem.parentNode&&(s.elem[s.prop]=s.now)}},c.easing={linear:function(s){return s},swing:function(s){return .5-Math.cos(s*Math.PI)/2},_default:"swing"},c.fx=Nt.prototype.init,c.fx.step={};var yn,Kt,Lr=/^(?:toggle|show|hide)$/,kt=/queueHooks$/;function Tn(){Kt&&(m.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(Tn):e.setTimeout(Tn,c.fx.interval),c.fx.tick())}function ji(){return e.setTimeout(function(){yn=void 0}),yn=Date.now()}function en(s,o){var h,p=0,M={height:s};for(o=o?1:0;p<4;p+=2-o)h=We[p],M["margin"+h]=M["padding"+h]=s;return o&&(M.opacity=M.width=s),M}function Yi(s,o,h){for(var p,M=(In.tweeners[o]||[]).concat(In.tweeners["*"]),S=0,A=M.length;S<A;S++)if(p=M[S].call(h,o,s))return p}function la(s,o,h){var p,M,S,A,B,F,G,ae,he="width"in o||"height"in o,Q=this,xe={},nt=s.style,St=s.nodeType&&Rt(s),ct=K.get(s,"fxshow");h.queue||(A=c._queueHooks(s,"fx"),A.unqueued==null&&(A.unqueued=0,B=A.empty.fire,A.empty.fire=function(){A.unqueued||B()}),A.unqueued++,Q.always(function(){Q.always(function(){A.unqueued--,c.queue(s,"fx").length||A.empty.fire()})}));for(p in o)if(M=o[p],Lr.test(M)){if(delete o[p],S=S||M==="toggle",M===(St?"hide":"show"))if(M==="show"&&ct&&ct[p]!==void 0)St=!0;else continue;xe[p]=ct&&ct[p]||c.style(s,p)}if(F=!c.isEmptyObject(o),!(!F&&c.isEmptyObject(xe))){he&&s.nodeType===1&&(h.overflow=[nt.overflow,nt.overflowX,nt.overflowY],G=ct&&ct.display,G==null&&(G=K.get(s,"display")),ae=c.css(s,"display"),ae==="none"&&(G?ae=G:(se([s],!0),G=s.style.display||G,ae=c.css(s,"display"),se([s]))),(ae==="inline"||ae==="inline-block"&&G!=null)&&c.css(s,"float")==="none"&&(F||(Q.done(function(){nt.display=G}),G==null&&(ae=nt.display,G=ae==="none"?"":ae)),nt.display="inline-block")),h.overflow&&(nt.overflow="hidden",Q.always(function(){nt.overflow=h.overflow[0],nt.overflowX=h.overflow[1],nt.overflowY=h.overflow[2]})),F=!1;for(p in xe)F||(ct?"hidden"in ct&&(St=ct.hidden):ct=K.access(s,"fxshow",{display:G}),S&&(ct.hidden=!St),St&&se([s],!0),Q.done(function(){St||se([s]),K.remove(s,"fxshow");for(p in xe)c.style(s,p,xe[p])})),F=Yi(St?ct[p]:0,p,Q),p in ct||(ct[p]=F.start,St&&(F.end=F.start,F.start=0))}}function ls(s,o){var h,p,M,S,A;for(h in s)if(p=ee(h),M=o[p],S=s[h],Array.isArray(S)&&(M=S[1],S=s[h]=S[0]),h!==p&&(s[p]=S,delete s[h]),A=c.cssHooks[p],A&&"expand"in A){S=A.expand(S),delete s[p];for(h in S)h in s||(s[h]=S[h],o[h]=M)}else o[p]=M}function In(s,o,h){var p,M,S=0,A=In.prefilters.length,B=c.Deferred().always(function(){delete F.elem}),F=function(){if(M)return!1;for(var he=yn||ji(),Q=Math.max(0,G.startTime+G.duration-he),xe=Q/G.duration||0,nt=1-xe,St=0,ct=G.tweens.length;St<ct;St++)G.tweens[St].run(nt);return B.notifyWith(s,[G,nt,Q]),nt<1&&ct?Q:(ct||B.notifyWith(s,[G,1,0]),B.resolveWith(s,[G]),!1)},G=B.promise({elem:s,props:c.extend({},o),opts:c.extend(!0,{specialEasing:{},easing:c.easing._default},h),originalProperties:o,originalOptions:h,startTime:yn||ji(),duration:h.duration,tweens:[],createTween:function(he,Q){var xe=c.Tween(s,G.opts,he,Q,G.opts.specialEasing[he]||G.opts.easing);return G.tweens.push(xe),xe},stop:function(he){var Q=0,xe=he?G.tweens.length:0;if(M)return this;for(M=!0;Q<xe;Q++)G.tweens[Q].run(1);return he?(B.notifyWith(s,[G,1,0]),B.resolveWith(s,[G,he])):B.rejectWith(s,[G,he]),this}}),ae=G.props;for(ls(ae,G.opts.specialEasing);S<A;S++)if(p=In.prefilters[S].call(G,s,ae,G.opts),p)return b(p.stop)&&(c._queueHooks(G.elem,G.opts.queue).stop=p.stop.bind(p)),p;return c.map(ae,Yi,G),b(G.opts.start)&&G.opts.start.call(s,G),G.progress(G.opts.progress).done(G.opts.done,G.opts.complete).fail(G.opts.fail).always(G.opts.always),c.fx.timer(c.extend(F,{elem:s,anim:G,queue:G.opts.queue})),G}c.Animation=c.extend(In,{tweeners:{"*":[function(s,o){var h=this.createTween(s,o);return T(h.elem,s,ot.exec(o),h),h}]},tweener:function(s,o){b(s)?(o=s,s=["*"]):s=s.match($e);for(var h,p=0,M=s.length;p<M;p++)h=s[p],In.tweeners[h]=In.tweeners[h]||[],In.tweeners[h].unshift(o)},prefilters:[la],prefilter:function(s,o){o?In.prefilters.unshift(s):In.prefilters.push(s)}}),c.speed=function(s,o,h){var p=s&&typeof s=="object"?c.extend({},s):{complete:h||!h&&o||b(s)&&s,duration:s,easing:h&&o||o&&!b(o)&&o};return c.fx.off?p.duration=0:typeof p.duration!="number"&&(p.duration in c.fx.speeds?p.duration=c.fx.speeds[p.duration]:p.duration=c.fx.speeds._default),(p.queue==null||p.queue===!0)&&(p.queue="fx"),p.old=p.complete,p.complete=function(){b(p.old)&&p.old.call(this),p.queue&&c.dequeue(this,p.queue)},p},c.fn.extend({fadeTo:function(s,o,h,p){return this.filter(Rt).css("opacity",0).show().end().animate({opacity:o},s,h,p)},animate:function(s,o,h,p){var M=c.isEmptyObject(s),S=c.speed(o,h,p),A=function(){var B=In(this,c.extend({},s),S);(M||K.get(this,"finish"))&&B.stop(!0)};return A.finish=A,M||S.queue===!1?this.each(A):this.queue(S.queue,A)},stop:function(s,o,h){var p=function(M){var S=M.stop;delete M.stop,S(h)};return typeof s!="string"&&(h=o,o=s,s=void 0),o&&this.queue(s||"fx",[]),this.each(function(){var M=!0,S=s!=null&&s+"queueHooks",A=c.timers,B=K.get(this);if(S)B[S]&&B[S].stop&&p(B[S]);else for(S in B)B[S]&&B[S].stop&&kt.test(S)&&p(B[S]);for(S=A.length;S--;)A[S].elem===this&&(s==null||A[S].queue===s)&&(A[S].anim.stop(h),M=!1,A.splice(S,1));(M||!h)&&c.dequeue(this,s)})},finish:function(s){return s!==!1&&(s=s||"fx"),this.each(function(){var o,h=K.get(this),p=h[s+"queue"],M=h[s+"queueHooks"],S=c.timers,A=p?p.length:0;for(h.finish=!0,c.queue(this,s,[]),M&&M.stop&&M.stop.call(this,!0),o=S.length;o--;)S[o].elem===this&&S[o].queue===s&&(S[o].anim.stop(!0),S.splice(o,1));for(o=0;o<A;o++)p[o]&&p[o].finish&&p[o].finish.call(this);delete h.finish})}}),c.each(["toggle","show","hide"],function(s,o){var h=c.fn[o];c.fn[o]=function(p,M,S){return p==null||typeof p=="boolean"?h.apply(this,arguments):this.animate(en(o,!0),p,M,S)}}),c.each({slideDown:en("show"),slideUp:en("hide"),slideToggle:en("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(s,o){c.fn[s]=function(h,p,M){return this.animate(o,h,p,M)}}),c.timers=[],c.fx.tick=function(){var s,o=0,h=c.timers;for(yn=Date.now();o<h.length;o++)s=h[o],!s()&&h[o]===s&&h.splice(o--,1);h.length||c.fx.stop(),yn=void 0},c.fx.timer=function(s){c.timers.push(s),c.fx.start()},c.fx.interval=13,c.fx.start=function(){Kt||(Kt=!0,Tn())},c.fx.stop=function(){Kt=null},c.fx.speeds={slow:600,fast:200,_default:400},c.fn.delay=function(s,o){return s=c.fx&&c.fx.speeds[s]||s,o=o||"fx",this.queue(o,function(h,p){var M=e.setTimeout(h,s);p.stop=function(){e.clearTimeout(M)}})},function(){var s=m.createElement("input"),o=m.createElement("select"),h=o.appendChild(m.createElement("option"));s.type="checkbox",E.checkOn=s.value!=="",E.optSelected=h.selected,s=m.createElement("input"),s.value="t",s.type="radio",E.radioValue=s.value==="t"}();var nl,Dr=c.expr.attrHandle;c.fn.extend({attr:function(s,o){return Xe(this,c.attr,s,o,arguments.length>1)},removeAttr:function(s){return this.each(function(){c.removeAttr(this,s)})}}),c.extend({attr:function(s,o,h){var p,M,S=s.nodeType;if(!(S===3||S===8||S===2)){if(typeof s.getAttribute>"u")return c.prop(s,o,h);if((S!==1||!c.isXMLDoc(s))&&(M=c.attrHooks[o.toLowerCase()]||(c.expr.match.bool.test(o)?nl:void 0)),h!==void 0){if(h===null){c.removeAttr(s,o);return}return M&&"set"in M&&(p=M.set(s,h,o))!==void 0?p:(s.setAttribute(o,h+""),h)}return M&&"get"in M&&(p=M.get(s,o))!==null?p:(p=c.find.attr(s,o),p??void 0)}},attrHooks:{type:{set:function(s,o){if(!E.radioValue&&o==="radio"&&I(s,"input")){var h=s.value;return s.setAttribute("type",o),h&&(s.value=h),o}}}},removeAttr:function(s,o){var h,p=0,M=o&&o.match($e);if(M&&s.nodeType===1)for(;h=M[p++];)s.removeAttribute(h)}}),nl={set:function(s,o,h){return o===!1?c.removeAttr(s,h):s.setAttribute(h,h),h}},c.each(c.expr.match.bool.source.match(/\w+/g),function(s,o){var h=Dr[o]||c.find.attr;Dr[o]=function(p,M,S){var A,B,F=M.toLowerCase();return S||(B=Dr[F],Dr[F]=A,A=h(p,M,S)!=null?F:null,Dr[F]=B),A}});var du=/^(?:input|select|textarea|button)$/i,pu=/^(?:a|area)$/i;c.fn.extend({prop:function(s,o){return Xe(this,c.prop,s,o,arguments.length>1)},removeProp:function(s){return this.each(function(){delete this[c.propFix[s]||s]})}}),c.extend({prop:function(s,o,h){var p,M,S=s.nodeType;if(!(S===3||S===8||S===2))return(S!==1||!c.isXMLDoc(s))&&(o=c.propFix[o]||o,M=c.propHooks[o]),h!==void 0?M&&"set"in M&&(p=M.set(s,h,o))!==void 0?p:s[o]=h:M&&"get"in M&&(p=M.get(s,o))!==null?p:s[o]},propHooks:{tabIndex:{get:function(s){var o=c.find.attr(s,"tabindex");return o?parseInt(o,10):du.test(s.nodeName)||pu.test(s.nodeName)&&s.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),E.optSelected||(c.propHooks.selected={get:function(s){var o=s.parentNode;return o&&o.parentNode&&o.parentNode.selectedIndex,null},set:function(s){var o=s.parentNode;o&&(o.selectedIndex,o.parentNode&&o.parentNode.selectedIndex)}}),c.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){c.propFix[this.toLowerCase()]=this});function wi(s){var o=s.match($e)||[];return o.join(" ")}function Ci(s){return s.getAttribute&&s.getAttribute("class")||""}function ca(s){return Array.isArray(s)?s:typeof s=="string"?s.match($e)||[]:[]}c.fn.extend({addClass:function(s){var o,h,p,M,S,A;return b(s)?this.each(function(B){c(this).addClass(s.call(this,B,Ci(this)))}):(o=ca(s),o.length?this.each(function(){if(p=Ci(this),h=this.nodeType===1&&" "+wi(p)+" ",h){for(S=0;S<o.length;S++)M=o[S],h.indexOf(" "+M+" ")<0&&(h+=M+" ");A=wi(h),p!==A&&this.setAttribute("class",A)}}):this)},removeClass:function(s){var o,h,p,M,S,A;return b(s)?this.each(function(B){c(this).removeClass(s.call(this,B,Ci(this)))}):arguments.length?(o=ca(s),o.length?this.each(function(){if(p=Ci(this),h=this.nodeType===1&&" "+wi(p)+" ",h){for(S=0;S<o.length;S++)for(M=o[S];h.indexOf(" "+M+" ")>-1;)h=h.replace(" "+M+" "," ");A=wi(h),p!==A&&this.setAttribute("class",A)}}):this):this.attr("class","")},toggleClass:function(s,o){var h,p,M,S,A=typeof s,B=A==="string"||Array.isArray(s);return b(s)?this.each(function(F){c(this).toggleClass(s.call(this,F,Ci(this),o),o)}):typeof o=="boolean"&&B?o?this.addClass(s):this.removeClass(s):(h=ca(s),this.each(function(){if(B)for(S=c(this),M=0;M<h.length;M++)p=h[M],S.hasClass(p)?S.removeClass(p):S.addClass(p);else(s===void 0||A==="boolean")&&(p=Ci(this),p&&K.set(this,"__className__",p),this.setAttribute&&this.setAttribute("class",p||s===!1?"":K.get(this,"__className__")||""))}))},hasClass:function(s){var o,h,p=0;for(o=" "+s+" ";h=this[p++];)if(h.nodeType===1&&(" "+wi(Ci(h))+" ").indexOf(o)>-1)return!0;return!1}});var mu=/\r/g;c.fn.extend({val:function(s){var o,h,p,M=this[0];return arguments.length?(p=b(s),this.each(function(S){var A;this.nodeType===1&&(p?A=s.call(this,S,c(this).val()):A=s,A==null?A="":typeof A=="number"?A+="":Array.isArray(A)&&(A=c.map(A,function(B){return B==null?"":B+""})),o=c.valHooks[this.type]||c.valHooks[this.nodeName.toLowerCase()],(!o||!("set"in o)||o.set(this,A,"value")===void 0)&&(this.value=A))})):M?(o=c.valHooks[M.type]||c.valHooks[M.nodeName.toLowerCase()],o&&"get"in o&&(h=o.get(M,"value"))!==void 0?h:(h=M.value,typeof h=="string"?h.replace(mu,""):h??"")):void 0}}),c.extend({valHooks:{option:{get:function(s){var o=c.find.attr(s,"value");return o??wi(c.text(s))}},select:{get:function(s){var o,h,p,M=s.options,S=s.selectedIndex,A=s.type==="select-one",B=A?null:[],F=A?S+1:M.length;for(S<0?p=F:p=A?S:0;p<F;p++)if(h=M[p],(h.selected||p===S)&&!h.disabled&&(!h.parentNode.disabled||!I(h.parentNode,"optgroup"))){if(o=c(h).val(),A)return o;B.push(o)}return B},set:function(s,o){for(var h,p,M=s.options,S=c.makeArray(o),A=M.length;A--;)p=M[A],(p.selected=c.inArray(c.valHooks.option.get(p),S)>-1)&&(h=!0);return h||(s.selectedIndex=-1),S}}}}),c.each(["radio","checkbox"],function(){c.valHooks[this]={set:function(s,o){if(Array.isArray(o))return s.checked=c.inArray(c(s).val(),o)>-1}},E.checkOn||(c.valHooks[this].get=function(s){return s.getAttribute("value")===null?"on":s.value})});var Ir=e.location,il={guid:Date.now()},ua=/\?/;c.parseXML=function(s){var o,h;if(!s||typeof s!="string")return null;try{o=new e.DOMParser().parseFromString(s,"text/xml")}catch{}return h=o&&o.getElementsByTagName("parsererror")[0],(!o||h)&&c.error("Invalid XML: "+(h?c.map(h.childNodes,function(p){return p.textContent}).join(`
`):s)),o};var rl=/^(?:focusinfocus|focusoutblur)$/,sl=function(s){s.stopPropagation()};c.extend(c.event,{trigger:function(s,o,h,p){var M,S,A,B,F,G,ae,he,Q=[h||m],xe=_.call(s,"type")?s.type:s,nt=_.call(s,"namespace")?s.namespace.split("."):[];if(S=he=A=h=h||m,!(h.nodeType===3||h.nodeType===8)&&!rl.test(xe+c.event.triggered)&&(xe.indexOf(".")>-1&&(nt=xe.split("."),xe=nt.shift(),nt.sort()),F=xe.indexOf(":")<0&&"on"+xe,s=s[c.expando]?s:new c.Event(xe,typeof s=="object"&&s),s.isTrigger=p?2:3,s.namespace=nt.join("."),s.rnamespace=s.namespace?new RegExp("(^|\\.)"+nt.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,s.result=void 0,s.target||(s.target=h),o=o==null?[s]:c.makeArray(o,[s]),ae=c.event.special[xe]||{},!(!p&&ae.trigger&&ae.trigger.apply(h,o)===!1))){if(!p&&!ae.noBubble&&!x(h)){for(B=ae.delegateType||xe,rl.test(B+xe)||(S=S.parentNode);S;S=S.parentNode)Q.push(S),A=S;A===(h.ownerDocument||m)&&Q.push(A.defaultView||A.parentWindow||e)}for(M=0;(S=Q[M++])&&!s.isPropagationStopped();)he=S,s.type=M>1?B:ae.bindType||xe,G=(K.get(S,"events")||Object.create(null))[s.type]&&K.get(S,"handle"),G&&G.apply(S,o),G=F&&S[F],G&&G.apply&&ge(S)&&(s.result=G.apply(S,o),s.result===!1&&s.preventDefault());return s.type=xe,!p&&!s.isDefaultPrevented()&&(!ae._default||ae._default.apply(Q.pop(),o)===!1)&&ge(h)&&F&&b(h[xe])&&!x(h)&&(A=h[F],A&&(h[F]=null),c.event.triggered=xe,s.isPropagationStopped()&&he.addEventListener(xe,sl),h[xe](),s.isPropagationStopped()&&he.removeEventListener(xe,sl),c.event.triggered=void 0,A&&(h[F]=A)),s.result}},simulate:function(s,o,h){var p=c.extend(new c.Event,h,{type:s,isSimulated:!0});c.event.trigger(p,null,o)}}),c.fn.extend({trigger:function(s,o){return this.each(function(){c.event.trigger(s,o,this)})},triggerHandler:function(s,o){var h=this[0];if(h)return c.event.trigger(s,o,h,!0)}});var gu=/\[\]$/,al=/\r?\n/g,_u=/^(?:submit|button|image|reset|file)$/i,vu=/^(?:input|select|textarea|keygen)/i;function ha(s,o,h,p){var M;if(Array.isArray(o))c.each(o,function(S,A){h||gu.test(s)?p(s,A):ha(s+"["+(typeof A=="object"&&A!=null?S:"")+"]",A,h,p)});else if(!h&&N(o)==="object")for(M in o)ha(s+"["+M+"]",o[M],h,p);else p(s,o)}c.param=function(s,o){var h,p=[],M=function(S,A){var B=b(A)?A():A;p[p.length]=encodeURIComponent(S)+"="+encodeURIComponent(B??"")};if(s==null)return"";if(Array.isArray(s)||s.jquery&&!c.isPlainObject(s))c.each(s,function(){M(this.name,this.value)});else for(h in s)ha(h,s[h],o,M);return p.join("&")},c.fn.extend({serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var s=c.prop(this,"elements");return s?c.makeArray(s):this}).filter(function(){var s=this.type;return this.name&&!c(this).is(":disabled")&&vu.test(this.nodeName)&&!_u.test(s)&&(this.checked||!_e.test(s))}).map(function(s,o){var h=c(this).val();return h==null?null:Array.isArray(h)?c.map(h,function(p){return{name:o.name,value:p.replace(al,`\r
`)}}):{name:o.name,value:h.replace(al,`\r
`)}}).get()}});var xu=/%20/g,yu=/#.*$/,Mu=/([?&])_=[^&]*/,Su=/^(.*?):[ \t]*([^\r\n]*)$/mg,Eu=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,bu=/^(?:GET|HEAD)$/,Tu=/^\/\//,ol={},fa={},ll="*/".concat("*"),da=m.createElement("a");da.href=Ir.href;function cl(s){return function(o,h){typeof o!="string"&&(h=o,o="*");var p,M=0,S=o.toLowerCase().match($e)||[];if(b(h))for(;p=S[M++];)p[0]==="+"?(p=p.slice(1)||"*",(s[p]=s[p]||[]).unshift(h)):(s[p]=s[p]||[]).push(h)}}function ul(s,o,h,p){var M={},S=s===fa;function A(B){var F;return M[B]=!0,c.each(s[B]||[],function(G,ae){var he=ae(o,h,p);if(typeof he=="string"&&!S&&!M[he])return o.dataTypes.unshift(he),A(he),!1;if(S)return!(F=he)}),F}return A(o.dataTypes[0])||!M["*"]&&A("*")}function pa(s,o){var h,p,M=c.ajaxSettings.flatOptions||{};for(h in o)o[h]!==void 0&&((M[h]?s:p||(p={}))[h]=o[h]);return p&&c.extend(!0,s,p),s}function Au(s,o,h){for(var p,M,S,A,B=s.contents,F=s.dataTypes;F[0]==="*";)F.shift(),p===void 0&&(p=s.mimeType||o.getResponseHeader("Content-Type"));if(p){for(M in B)if(B[M]&&B[M].test(p)){F.unshift(M);break}}if(F[0]in h)S=F[0];else{for(M in h){if(!F[0]||s.converters[M+" "+F[0]]){S=M;break}A||(A=M)}S=S||A}if(S)return S!==F[0]&&F.unshift(S),h[S]}function wu(s,o,h,p){var M,S,A,B,F,G={},ae=s.dataTypes.slice();if(ae[1])for(A in s.converters)G[A.toLowerCase()]=s.converters[A];for(S=ae.shift();S;)if(s.responseFields[S]&&(h[s.responseFields[S]]=o),!F&&p&&s.dataFilter&&(o=s.dataFilter(o,s.dataType)),F=S,S=ae.shift(),S){if(S==="*")S=F;else if(F!=="*"&&F!==S){if(A=G[F+" "+S]||G["* "+S],!A){for(M in G)if(B=M.split(" "),B[1]===S&&(A=G[F+" "+B[0]]||G["* "+B[0]],A)){A===!0?A=G[M]:G[M]!==!0&&(S=B[0],ae.unshift(B[1]));break}}if(A!==!0)if(A&&s.throws)o=A(o);else try{o=A(o)}catch(he){return{state:"parsererror",error:A?he:"No conversion from "+F+" to "+S}}}}return{state:"success",data:o}}c.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ir.href,type:"GET",isLocal:Eu.test(Ir.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ll,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":c.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(s,o){return o?pa(pa(s,c.ajaxSettings),o):pa(c.ajaxSettings,s)},ajaxPrefilter:cl(ol),ajaxTransport:cl(fa),ajax:function(s,o){typeof s=="object"&&(o=s,s=void 0),o=o||{};var h,p,M,S,A,B,F,G,ae,he,Q=c.ajaxSetup({},o),xe=Q.context||Q,nt=Q.context&&(xe.nodeType||xe.jquery)?c(xe):c.event,St=c.Deferred(),ct=c.Callbacks("once memory"),tn=Q.statusCode||{},jt={},Hn={},kn="canceled",gt={readyState:0,getResponseHeader:function(At){var Vt;if(F){if(!S)for(S={};Vt=Su.exec(M);)S[Vt[1].toLowerCase()+" "]=(S[Vt[1].toLowerCase()+" "]||[]).concat(Vt[2]);Vt=S[At.toLowerCase()+" "]}return Vt==null?null:Vt.join(", ")},getAllResponseHeaders:function(){return F?M:null},setRequestHeader:function(At,Vt){return F==null&&(At=Hn[At.toLowerCase()]=Hn[At.toLowerCase()]||At,jt[At]=Vt),this},overrideMimeType:function(At){return F==null&&(Q.mimeType=At),this},statusCode:function(At){var Vt;if(At)if(F)gt.always(At[gt.status]);else for(Vt in At)tn[Vt]=[tn[Vt],At[Vt]];return this},abort:function(At){var Vt=At||kn;return h&&h.abort(Vt),Ri(0,Vt),this}};if(St.promise(gt),Q.url=((s||Q.url||Ir.href)+"").replace(Tu,Ir.protocol+"//"),Q.type=o.method||o.type||Q.method||Q.type,Q.dataTypes=(Q.dataType||"*").toLowerCase().match($e)||[""],Q.crossDomain==null){B=m.createElement("a");try{B.href=Q.url,B.href=B.href,Q.crossDomain=da.protocol+"//"+da.host!=B.protocol+"//"+B.host}catch{Q.crossDomain=!0}}if(Q.data&&Q.processData&&typeof Q.data!="string"&&(Q.data=c.param(Q.data,Q.traditional)),ul(ol,Q,o,gt),F)return gt;G=c.event&&Q.global,G&&c.active++===0&&c.event.trigger("ajaxStart"),Q.type=Q.type.toUpperCase(),Q.hasContent=!bu.test(Q.type),p=Q.url.replace(yu,""),Q.hasContent?Q.data&&Q.processData&&(Q.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(Q.data=Q.data.replace(xu,"+")):(he=Q.url.slice(p.length),Q.data&&(Q.processData||typeof Q.data=="string")&&(p+=(ua.test(p)?"&":"?")+Q.data,delete Q.data),Q.cache===!1&&(p=p.replace(Mu,"$1"),he=(ua.test(p)?"&":"?")+"_="+il.guid+++he),Q.url=p+he),Q.ifModified&&(c.lastModified[p]&&gt.setRequestHeader("If-Modified-Since",c.lastModified[p]),c.etag[p]&&gt.setRequestHeader("If-None-Match",c.etag[p])),(Q.data&&Q.hasContent&&Q.contentType!==!1||o.contentType)&&gt.setRequestHeader("Content-Type",Q.contentType),gt.setRequestHeader("Accept",Q.dataTypes[0]&&Q.accepts[Q.dataTypes[0]]?Q.accepts[Q.dataTypes[0]]+(Q.dataTypes[0]!=="*"?", "+ll+"; q=0.01":""):Q.accepts["*"]);for(ae in Q.headers)gt.setRequestHeader(ae,Q.headers[ae]);if(Q.beforeSend&&(Q.beforeSend.call(xe,gt,Q)===!1||F))return gt.abort();if(kn="abort",ct.add(Q.complete),gt.done(Q.success),gt.fail(Q.error),h=ul(fa,Q,o,gt),!h)Ri(-1,"No Transport");else{if(gt.readyState=1,G&&nt.trigger("ajaxSend",[gt,Q]),F)return gt;Q.async&&Q.timeout>0&&(A=e.setTimeout(function(){gt.abort("timeout")},Q.timeout));try{F=!1,h.send(jt,Ri)}catch(At){if(F)throw At;Ri(-1,At)}}function Ri(At,Vt,Nr,ga){var Vn,Fr,Gn,hi,fi,An=Vt;F||(F=!0,A&&e.clearTimeout(A),h=void 0,M=ga||"",gt.readyState=At>0?4:0,Vn=At>=200&&At<300||At===304,Nr&&(hi=Au(Q,gt,Nr)),!Vn&&c.inArray("script",Q.dataTypes)>-1&&c.inArray("json",Q.dataTypes)<0&&(Q.converters["text script"]=function(){}),hi=wu(Q,hi,gt,Vn),Vn?(Q.ifModified&&(fi=gt.getResponseHeader("Last-Modified"),fi&&(c.lastModified[p]=fi),fi=gt.getResponseHeader("etag"),fi&&(c.etag[p]=fi)),At===204||Q.type==="HEAD"?An="nocontent":At===304?An="notmodified":(An=hi.state,Fr=hi.data,Gn=hi.error,Vn=!Gn)):(Gn=An,(At||!An)&&(An="error",At<0&&(At=0))),gt.status=At,gt.statusText=(Vt||An)+"",Vn?St.resolveWith(xe,[Fr,An,gt]):St.rejectWith(xe,[gt,An,Gn]),gt.statusCode(tn),tn=void 0,G&&nt.trigger(Vn?"ajaxSuccess":"ajaxError",[gt,Q,Vn?Fr:Gn]),ct.fireWith(xe,[gt,An]),G&&(nt.trigger("ajaxComplete",[gt,Q]),--c.active||c.event.trigger("ajaxStop")))}return gt},getJSON:function(s,o,h){return c.get(s,o,h,"json")},getScript:function(s,o){return c.get(s,void 0,o,"script")}}),c.each(["get","post"],function(s,o){c[o]=function(h,p,M,S){return b(p)&&(S=S||M,M=p,p=void 0),c.ajax(c.extend({url:h,type:o,dataType:S,data:p,success:M},c.isPlainObject(h)&&h))}}),c.ajaxPrefilter(function(s){var o;for(o in s.headers)o.toLowerCase()==="content-type"&&(s.contentType=s.headers[o]||"")}),c._evalUrl=function(s,o,h){return c.ajax({url:s,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(p){c.globalEval(p,o,h)}})},c.fn.extend({wrapAll:function(s){var o;return this[0]&&(b(s)&&(s=s.call(this[0])),o=c(s,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&o.insertBefore(this[0]),o.map(function(){for(var h=this;h.firstElementChild;)h=h.firstElementChild;return h}).append(this)),this},wrapInner:function(s){return b(s)?this.each(function(o){c(this).wrapInner(s.call(this,o))}):this.each(function(){var o=c(this),h=o.contents();h.length?h.wrapAll(s):o.append(s)})},wrap:function(s){var o=b(s);return this.each(function(h){c(this).wrapAll(o?s.call(this,h):s)})},unwrap:function(s){return this.parent(s).not("body").each(function(){c(this).replaceWith(this.childNodes)}),this}}),c.expr.pseudos.hidden=function(s){return!c.expr.pseudos.visible(s)},c.expr.pseudos.visible=function(s){return!!(s.offsetWidth||s.offsetHeight||s.getClientRects().length)},c.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var Cu={0:200,1223:204},Ur=c.ajaxSettings.xhr();E.cors=!!Ur&&"withCredentials"in Ur,E.ajax=Ur=!!Ur,c.ajaxTransport(function(s){var o,h;if(E.cors||Ur&&!s.crossDomain)return{send:function(p,M){var S,A=s.xhr();if(A.open(s.type,s.url,s.async,s.username,s.password),s.xhrFields)for(S in s.xhrFields)A[S]=s.xhrFields[S];s.mimeType&&A.overrideMimeType&&A.overrideMimeType(s.mimeType),!s.crossDomain&&!p["X-Requested-With"]&&(p["X-Requested-With"]="XMLHttpRequest");for(S in p)A.setRequestHeader(S,p[S]);o=function(B){return function(){o&&(o=h=A.onload=A.onerror=A.onabort=A.ontimeout=A.onreadystatechange=null,B==="abort"?A.abort():B==="error"?typeof A.status!="number"?M(0,"error"):M(A.status,A.statusText):M(Cu[A.status]||A.status,A.statusText,(A.responseType||"text")!=="text"||typeof A.responseText!="string"?{binary:A.response}:{text:A.responseText},A.getAllResponseHeaders()))}},A.onload=o(),h=A.onerror=A.ontimeout=o("error"),A.onabort!==void 0?A.onabort=h:A.onreadystatechange=function(){A.readyState===4&&e.setTimeout(function(){o&&h()})},o=o("abort");try{A.send(s.hasContent&&s.data||null)}catch(B){if(o)throw B}},abort:function(){o&&o()}}}),c.ajaxPrefilter(function(s){s.crossDomain&&(s.contents.script=!1)}),c.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(s){return c.globalEval(s),s}}}),c.ajaxPrefilter("script",function(s){s.cache===void 0&&(s.cache=!1),s.crossDomain&&(s.type="GET")}),c.ajaxTransport("script",function(s){if(s.crossDomain||s.scriptAttrs){var o,h;return{send:function(p,M){o=c("<script>").attr(s.scriptAttrs||{}).prop({charset:s.scriptCharset,src:s.url}).on("load error",h=function(S){o.remove(),h=null,S&&M(S.type==="error"?404:200,S.type)}),m.head.appendChild(o[0])},abort:function(){h&&h()}}}});var hl=[],ma=/(=)\?(?=&|$)|\?\?/;c.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var s=hl.pop()||c.expando+"_"+il.guid++;return this[s]=!0,s}}),c.ajaxPrefilter("json jsonp",function(s,o,h){var p,M,S,A=s.jsonp!==!1&&(ma.test(s.url)?"url":typeof s.data=="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&ma.test(s.data)&&"data");if(A||s.dataTypes[0]==="jsonp")return p=s.jsonpCallback=b(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback,A?s[A]=s[A].replace(ma,"$1"+p):s.jsonp!==!1&&(s.url+=(ua.test(s.url)?"&":"?")+s.jsonp+"="+p),s.converters["script json"]=function(){return S||c.error(p+" was not called"),S[0]},s.dataTypes[0]="json",M=e[p],e[p]=function(){S=arguments},h.always(function(){M===void 0?c(e).removeProp(p):e[p]=M,s[p]&&(s.jsonpCallback=o.jsonpCallback,hl.push(p)),S&&b(M)&&M(S[0]),S=M=void 0}),"script"}),E.createHTMLDocument=function(){var s=m.implementation.createHTMLDocument("").body;return s.innerHTML="<form></form><form></form>",s.childNodes.length===2}(),c.parseHTML=function(s,o,h){if(typeof s!="string")return[];typeof o=="boolean"&&(h=o,o=!1);var p,M,S;return o||(E.createHTMLDocument?(o=m.implementation.createHTMLDocument(""),p=o.createElement("base"),p.href=m.location.href,o.head.appendChild(p)):o=m),M=ft.exec(s),S=!h&&[],M?[o.createElement(M[1])]:(M=Ht([s],o,S),S&&S.length&&c(S).remove(),c.merge([],M.childNodes))},c.fn.load=function(s,o,h){var p,M,S,A=this,B=s.indexOf(" ");return B>-1&&(p=wi(s.slice(B)),s=s.slice(0,B)),b(o)?(h=o,o=void 0):o&&typeof o=="object"&&(M="POST"),A.length>0&&c.ajax({url:s,type:M||"GET",dataType:"html",data:o}).done(function(F){S=arguments,A.html(p?c("<div>").append(c.parseHTML(F)).find(p):F)}).always(h&&function(F,G){A.each(function(){h.apply(this,S||[F.responseText,G,F])})}),this},c.expr.pseudos.animated=function(s){return c.grep(c.timers,function(o){return s===o.elem}).length},c.offset={setOffset:function(s,o,h){var p,M,S,A,B,F,G,ae=c.css(s,"position"),he=c(s),Q={};ae==="static"&&(s.style.position="relative"),B=he.offset(),S=c.css(s,"top"),F=c.css(s,"left"),G=(ae==="absolute"||ae==="fixed")&&(S+F).indexOf("auto")>-1,G?(p=he.position(),A=p.top,M=p.left):(A=parseFloat(S)||0,M=parseFloat(F)||0),b(o)&&(o=o.call(s,h,c.extend({},B))),o.top!=null&&(Q.top=o.top-B.top+A),o.left!=null&&(Q.left=o.left-B.left+M),"using"in o?o.using.call(s,Q):he.css(Q)}},c.fn.extend({offset:function(s){if(arguments.length)return s===void 0?this:this.each(function(M){c.offset.setOffset(this,s,M)});var o,h,p=this[0];if(p)return p.getClientRects().length?(o=p.getBoundingClientRect(),h=p.ownerDocument.defaultView,{top:o.top+h.pageYOffset,left:o.left+h.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var s,o,h,p=this[0],M={top:0,left:0};if(c.css(p,"position")==="fixed")o=p.getBoundingClientRect();else{for(o=this.offset(),h=p.ownerDocument,s=p.offsetParent||h.documentElement;s&&(s===h.body||s===h.documentElement)&&c.css(s,"position")==="static";)s=s.parentNode;s&&s!==p&&s.nodeType===1&&(M=c(s).offset(),M.top+=c.css(s,"borderTopWidth",!0),M.left+=c.css(s,"borderLeftWidth",!0))}return{top:o.top-M.top-c.css(p,"marginTop",!0),left:o.left-M.left-c.css(p,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var s=this.offsetParent;s&&c.css(s,"position")==="static";)s=s.offsetParent;return s||we})}}),c.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(s,o){var h=o==="pageYOffset";c.fn[s]=function(p){return Xe(this,function(M,S,A){var B;if(x(M)?B=M:M.nodeType===9&&(B=M.defaultView),A===void 0)return B?B[o]:M[S];B?B.scrollTo(h?B.pageXOffset:A,h?A:B.pageYOffset):M[S]=A},s,p,arguments.length)}}),c.each(["top","left"],function(s,o){c.cssHooks[o]=ze(E.pixelPosition,function(h,p){if(p)return p=Fe(h,o),ne.test(p)?c(h).position()[o]+"px":p})}),c.each({Height:"height",Width:"width"},function(s,o){c.each({padding:"inner"+s,content:o,"":"outer"+s},function(h,p){c.fn[p]=function(M,S){var A=arguments.length&&(h||typeof M!="boolean"),B=h||(M===!0||S===!0?"margin":"border");return Xe(this,function(F,G,ae){var he;return x(F)?p.indexOf("outer")===0?F["inner"+s]:F.document.documentElement["client"+s]:F.nodeType===9?(he=F.documentElement,Math.max(F.body["scroll"+s],he["scroll"+s],F.body["offset"+s],he["offset"+s],he["client"+s])):ae===void 0?c.css(F,G,B):c.style(F,G,ae,B)},o,A?M:void 0,A)}})}),c.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(s,o){c.fn[o]=function(h){return this.on(o,h)}}),c.fn.extend({bind:function(s,o,h){return this.on(s,null,o,h)},unbind:function(s,o){return this.off(s,null,o)},delegate:function(s,o,h,p){return this.on(o,s,h,p)},undelegate:function(s,o,h){return arguments.length===1?this.off(s,"**"):this.off(o,s||"**",h)},hover:function(s,o){return this.on("mouseenter",s).on("mouseleave",o||s)}}),c.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(s,o){c.fn[o]=function(h,p){return arguments.length>0?this.on(o,null,h,p):this.trigger(o)}});var Ru=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;c.proxy=function(s,o){var h,p,M;if(typeof o=="string"&&(h=s[o],o=s,s=h),!!b(s))return p=a.call(arguments,2),M=function(){return s.apply(o||this,p.concat(a.call(arguments)))},M.guid=s.guid=s.guid||c.guid++,M},c.holdReady=function(s){s?c.readyWait++:c.ready(!0)},c.isArray=Array.isArray,c.parseJSON=JSON.parse,c.nodeName=I,c.isFunction=b,c.isWindow=x,c.camelCase=ee,c.type=N,c.now=Date.now,c.isNumeric=function(s){var o=c.type(s);return(o==="number"||o==="string")&&!isNaN(s-parseFloat(s))},c.trim=function(s){return s==null?"":(s+"").replace(Ru,"$1")};var Pu=e.jQuery,Lu=e.$;return c.noConflict=function(s){return e.$===c&&(e.$=Lu),s&&e.jQuery===c&&(e.jQuery=Pu),c},typeof t>"u"&&(e.jQuery=e.$=c),c})})(Cc);var ku=Cc.exports;const Vu=Hu(ku);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zo="167",Zi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ji={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gu=0,ml=1,Wu=2,Rc=1,Xu=2,si=3,bi=0,xn=1,ai=2,Si=0,xr=1,gl=2,_l=3,vl=4,qu=5,Bi=100,ju=101,Yu=102,$u=103,Ku=104,Zu=200,Ju=201,Qu=202,eh=203,to=204,no=205,th=206,nh=207,ih=208,rh=209,sh=210,ah=211,oh=212,lh=213,ch=214,uh=0,hh=1,fh=2,Ys=3,dh=4,ph=5,mh=6,gh=7,Ho=0,_h=1,vh=2,Ei=0,xh=1,yh=2,Mh=3,Sh=4,Eh=5,bh=6,Th=7,Pc=300,Sr=301,Er=302,io=303,ro=304,na=306,so=1e3,oi=1001,ao=1002,Qt=1003,Ah=1004,ds=1005,Bn=1006,Ea=1007,Hi=1008,ci=1009,Lc=1010,Dc=1011,Jr=1012,ko=1013,ki=1014,cn=1015,ts=1016,Vo=1017,Go=1018,br=1020,Ic=35902,Uc=1021,Nc=1022,pn=1023,Fc=1024,Oc=1025,yr=1026,Tr=1027,jr=1028,Wo=1029,Bc=1030,Xo=1031,qo=1033,ks=33776,Vs=33777,Gs=33778,Ws=33779,oo=35840,lo=35841,co=35842,uo=35843,ho=36196,fo=37492,po=37496,mo=37808,go=37809,_o=37810,vo=37811,xo=37812,yo=37813,Mo=37814,So=37815,Eo=37816,bo=37817,To=37818,Ao=37819,wo=37820,Co=37821,Xs=36492,Ro=36494,Po=36495,zc=36283,Lo=36284,Do=36285,Io=36286,wh=3200,Ch=3201,Hc=0,Rh=1,Mi="",Xn="srgb",Ai="srgb-linear",jo="display-p3",ia="display-p3-linear",$s="linear",Ot="srgb",Ks="rec709",Zs="p3",Qi=7680,xl=519,Ph=512,Lh=513,Dh=514,kc=515,Ih=516,Uh=517,Nh=518,Fh=519,yl=35044,Uo="300 es",li=2e3,Js=2001;class Wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,l=r.length;a<l;a++)r[a].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ml=1234567;const Yr=Math.PI/180,Qr=180/Math.PI;function wr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function ln(i,e,t){return Math.max(e,Math.min(t,i))}function Yo(i,e){return(i%e+e)%e}function Oh(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Bh(i,e,t){return i!==e?(t-i)/(e-i):0}function $r(i,e,t){return(1-t)*i+t*e}function zh(i,e,t,n){return $r(i,e,1-Math.exp(-t*n))}function Hh(i,e=1){return e-Math.abs(Yo(i,e*2)-e)}function kh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Vh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Gh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Wh(i,e){return i+Math.random()*(e-i)}function Xh(i){return i*(.5-Math.random())}function qh(i){i!==void 0&&(Ml=i);let e=Ml+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jh(i){return i*Yr}function Yh(i){return i*Qr}function $h(i){return(i&i-1)===0&&i!==0}function Kh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Zh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Jh(i,e,t,n,r){const a=Math.cos,l=Math.sin,u=a(t/2),d=l(t/2),f=a((e+n)/2),g=l((e+n)/2),_=a((e-n)/2),v=l((e-n)/2),y=a((n-e)/2),E=l((n-e)/2);switch(r){case"XYX":i.set(u*g,d*_,d*v,u*f);break;case"YZY":i.set(d*v,u*g,d*_,u*f);break;case"ZXZ":i.set(d*_,d*v,u*g,u*f);break;case"XZX":i.set(u*g,d*E,d*y,u*f);break;case"YXY":i.set(d*y,u*g,d*E,u*f);break;case"ZYZ":i.set(d*E,d*y,u*g,u*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function gr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function fn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Qh={DEG2RAD:Yr,RAD2DEG:Qr,generateUUID:wr,clamp:ln,euclideanModulo:Yo,mapLinear:Oh,inverseLerp:Bh,lerp:$r,damp:zh,pingpong:Hh,smoothstep:kh,smootherstep:Vh,randInt:Gh,randFloat:Wh,randFloatSpread:Xh,seededRandom:qh,degToRad:jh,radToDeg:Yh,isPowerOfTwo:$h,ceilPowerOfTwo:Kh,floorPowerOfTwo:Zh,setQuaternionFromProperEuler:Jh,normalize:fn,denormalize:gr};class lt{constructor(e=0,t=0){lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ln(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*n-l*r+e.x,this.y=a*r+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,t,n,r,a,l,u,d,f){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,u,d,f)}set(e,t,n,r,a,l,u,d,f){const g=this.elements;return g[0]=e,g[1]=r,g[2]=u,g[3]=t,g[4]=a,g[5]=d,g[6]=n,g[7]=l,g[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],u=n[3],d=n[6],f=n[1],g=n[4],_=n[7],v=n[2],y=n[5],E=n[8],b=r[0],x=r[3],m=r[6],P=r[1],R=r[4],N=r[7],q=r[2],z=r[5],c=r[8];return a[0]=l*b+u*P+d*q,a[3]=l*x+u*R+d*z,a[6]=l*m+u*N+d*c,a[1]=f*b+g*P+_*q,a[4]=f*x+g*R+_*z,a[7]=f*m+g*N+_*c,a[2]=v*b+y*P+E*q,a[5]=v*x+y*R+E*z,a[8]=v*m+y*N+E*c,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],u=e[5],d=e[6],f=e[7],g=e[8];return t*l*g-t*u*f-n*a*g+n*u*d+r*a*f-r*l*d}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],u=e[5],d=e[6],f=e[7],g=e[8],_=g*l-u*f,v=u*d-g*a,y=f*a-l*d,E=t*_+n*v+r*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=_*b,e[1]=(r*f-g*n)*b,e[2]=(u*n-r*l)*b,e[3]=v*b,e[4]=(g*t-r*d)*b,e[5]=(r*a-u*t)*b,e[6]=y*b,e[7]=(n*d-f*t)*b,e[8]=(l*t-n*a)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,l,u){const d=Math.cos(a),f=Math.sin(a);return this.set(n*d,n*f,-n*(d*l+f*u)+l+e,-r*f,r*d,-r*(-f*l+d*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(ba.makeScale(e,t)),this}rotate(e){return this.premultiply(ba.makeRotation(-e)),this}translate(e,t){return this.premultiply(ba.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ba=new ht;function Vc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ef(){const i=Qs("canvas");return i.style.display="block",i}const Sl={};function Kr(i){i in Sl||(Sl[i]=!0,console.warn(i))}function tf(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const El=new ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),bl=new ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Br={[Ai]:{transfer:$s,primaries:Ks,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Xn]:{transfer:Ot,primaries:Ks,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ia]:{transfer:$s,primaries:Zs,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(bl),fromReference:i=>i.applyMatrix3(El)},[jo]:{transfer:Ot,primaries:Zs,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(bl),fromReference:i=>i.applyMatrix3(El).convertLinearToSRGB()}},nf=new Set([Ai,ia]),Ct={enabled:!0,_workingColorSpace:Ai,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!nf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Br[e].toReference,r=Br[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Br[i].primaries},getTransfer:function(i){return i===Mi?$s:Br[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Br[e].luminanceCoefficients)}};function Mr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ta(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let er;class rf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{er===void 0&&(er=Qs("canvas")),er.width=e.width,er.height=e.height;const n=er.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=er}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let l=0;l<a.length;l++)a[l]=Mr(a[l]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mr(t[n]/255)*255):t[n]=Mr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sf=0;class Gc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=wr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let l=0,u=r.length;l<u;l++)r[l].isDataTexture?a.push(Aa(r[l].image)):a.push(Aa(r[l]))}else a=Aa(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Aa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?rf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let af=0;class mn extends Wi{constructor(e=mn.DEFAULT_IMAGE,t=mn.DEFAULT_MAPPING,n=oi,r=oi,a=Bn,l=Hi,u=pn,d=ci,f=mn.DEFAULT_ANISOTROPY,g=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=wr(),this.name="",this.source=new Gc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=l,this.anisotropy=f,this.format=u,this.internalFormat=null,this.type=d,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case so:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case ao:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case so:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case ao:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=Pc;mn.DEFAULT_ANISOTROPY=1;class Jt{constructor(e=0,t=0,n=0,r=1){Jt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*r+l[12]*a,this.y=l[1]*t+l[5]*n+l[9]*r+l[13]*a,this.z=l[2]*t+l[6]*n+l[10]*r+l[14]*a,this.w=l[3]*t+l[7]*n+l[11]*r+l[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const d=e.elements,f=d[0],g=d[4],_=d[8],v=d[1],y=d[5],E=d[9],b=d[2],x=d[6],m=d[10];if(Math.abs(g-v)<.01&&Math.abs(_-b)<.01&&Math.abs(E-x)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+b)<.1&&Math.abs(E+x)<.1&&Math.abs(f+y+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(f+1)/2,N=(y+1)/2,q=(m+1)/2,z=(g+v)/4,c=(_+b)/4,$=(E+x)/4;return R>N&&R>q?R<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(R),r=z/n,a=c/n):N>q?N<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(N),n=z/r,a=$/r):q<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(q),n=c/a,r=$/a),this.set(n,r,a,t),this}let P=Math.sqrt((x-E)*(x-E)+(_-b)*(_-b)+(v-g)*(v-g));return Math.abs(P)<.001&&(P=1),this.x=(x-E)/P,this.y=(_-b)/P,this.z=(v-g)/P,this.w=Math.acos((f+y+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class of extends Wi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Jt(0,0,e,t),this.scissorTest=!1,this.viewport=new Jt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new mn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const l=n.count;for(let u=0;u<l;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Gc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends of{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Wc extends mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lf extends mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,l,u){let d=n[r+0],f=n[r+1],g=n[r+2],_=n[r+3];const v=a[l+0],y=a[l+1],E=a[l+2],b=a[l+3];if(u===0){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u===1){e[t+0]=v,e[t+1]=y,e[t+2]=E,e[t+3]=b;return}if(_!==b||d!==v||f!==y||g!==E){let x=1-u;const m=d*v+f*y+g*E+_*b,P=m>=0?1:-1,R=1-m*m;if(R>Number.EPSILON){const q=Math.sqrt(R),z=Math.atan2(q,m*P);x=Math.sin(x*z)/q,u=Math.sin(u*z)/q}const N=u*P;if(d=d*x+v*N,f=f*x+y*N,g=g*x+E*N,_=_*x+b*N,x===1-u){const q=1/Math.sqrt(d*d+f*f+g*g+_*_);d*=q,f*=q,g*=q,_*=q}}e[t]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_}static multiplyQuaternionsFlat(e,t,n,r,a,l){const u=n[r],d=n[r+1],f=n[r+2],g=n[r+3],_=a[l],v=a[l+1],y=a[l+2],E=a[l+3];return e[t]=u*E+g*_+d*y-f*v,e[t+1]=d*E+g*v+f*_-u*y,e[t+2]=f*E+g*y+u*v-d*_,e[t+3]=g*E-u*_-d*v-f*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,l=e._order,u=Math.cos,d=Math.sin,f=u(n/2),g=u(r/2),_=u(a/2),v=d(n/2),y=d(r/2),E=d(a/2);switch(l){case"XYZ":this._x=v*g*_+f*y*E,this._y=f*y*_-v*g*E,this._z=f*g*E+v*y*_,this._w=f*g*_-v*y*E;break;case"YXZ":this._x=v*g*_+f*y*E,this._y=f*y*_-v*g*E,this._z=f*g*E-v*y*_,this._w=f*g*_+v*y*E;break;case"ZXY":this._x=v*g*_-f*y*E,this._y=f*y*_+v*g*E,this._z=f*g*E+v*y*_,this._w=f*g*_-v*y*E;break;case"ZYX":this._x=v*g*_-f*y*E,this._y=f*y*_+v*g*E,this._z=f*g*E-v*y*_,this._w=f*g*_+v*y*E;break;case"YZX":this._x=v*g*_+f*y*E,this._y=f*y*_+v*g*E,this._z=f*g*E-v*y*_,this._w=f*g*_-v*y*E;break;case"XZY":this._x=v*g*_-f*y*E,this._y=f*y*_-v*g*E,this._z=f*g*E+v*y*_,this._w=f*g*_+v*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],l=t[1],u=t[5],d=t[9],f=t[2],g=t[6],_=t[10],v=n+u+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-d)*y,this._y=(a-f)*y,this._z=(l-r)*y}else if(n>u&&n>_){const y=2*Math.sqrt(1+n-u-_);this._w=(g-d)/y,this._x=.25*y,this._y=(r+l)/y,this._z=(a+f)/y}else if(u>_){const y=2*Math.sqrt(1+u-n-_);this._w=(a-f)/y,this._x=(r+l)/y,this._y=.25*y,this._z=(d+g)/y}else{const y=2*Math.sqrt(1+_-n-u);this._w=(l-r)/y,this._x=(a+f)/y,this._y=(d+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ln(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,l=e._w,u=t._x,d=t._y,f=t._z,g=t._w;return this._x=n*g+l*u+r*f-a*d,this._y=r*g+l*d+a*u-n*f,this._z=a*g+l*f+n*d-r*u,this._w=l*g-n*u-r*d-a*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,l=this._w;let u=l*e._w+n*e._x+r*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=l,this._x=n,this._y=r,this._z=a,this;const d=1-u*u;if(d<=Number.EPSILON){const y=1-t;return this._w=y*l+t*this._w,this._x=y*n+t*this._x,this._y=y*r+t*this._y,this._z=y*a+t*this._z,this.normalize(),this}const f=Math.sqrt(d),g=Math.atan2(f,u),_=Math.sin((1-t)*g)/f,v=Math.sin(t*g)/f;return this._w=l*_+this._w*v,this._x=n*_+this._x*v,this._y=r*_+this._y*v,this._z=a*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,n=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,l=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*l,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*l,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,l=e.y,u=e.z,d=e.w,f=2*(l*r-u*n),g=2*(u*t-a*r),_=2*(a*n-l*t);return this.x=t+d*f+l*_-u*g,this.y=n+d*g+u*f-a*_,this.z=r+d*_+a*g-l*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,l=t.x,u=t.y,d=t.z;return this.x=r*d-a*u,this.y=a*l-n*d,this.z=n*u-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wa.copy(this).projectOnVector(e),this.sub(wa)}reflect(e){return this.sub(wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ln(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wa=new j,Tl=new Vi;class Cr{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let l=0,u=a.count;l<u;l++)e.isMesh===!0?e.getVertexPosition(l,Nn):Nn.fromBufferAttribute(a,l),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ps.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ps.copy(n.boundingBox)),ps.applyMatrix4(e.matrixWorld),this.union(ps)}const r=e.children;for(let a=0,l=r.length;a<l;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zr),ms.subVectors(this.max,zr),tr.subVectors(e.a,zr),nr.subVectors(e.b,zr),ir.subVectors(e.c,zr),pi.subVectors(nr,tr),mi.subVectors(ir,nr),Li.subVectors(tr,ir);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Li.z,Li.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Li.z,0,-Li.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Li.y,Li.x,0];return!Ca(t,tr,nr,ir,ms)||(t=[1,0,0,0,1,0,0,0,1],!Ca(t,tr,nr,ir,ms))?!1:(gs.crossVectors(pi,mi),t=[gs.x,gs.y,gs.z],Ca(t,tr,nr,ir,ms))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qn=[new j,new j,new j,new j,new j,new j,new j,new j],Nn=new j,ps=new Cr,tr=new j,nr=new j,ir=new j,pi=new j,mi=new j,Li=new j,zr=new j,ms=new j,gs=new j,Di=new j;function Ca(i,e,t,n,r){for(let a=0,l=i.length-3;a<=l;a+=3){Di.fromArray(i,a);const u=r.x*Math.abs(Di.x)+r.y*Math.abs(Di.y)+r.z*Math.abs(Di.z),d=e.dot(Di),f=t.dot(Di),g=n.dot(Di);if(Math.max(-Math.max(d,f,g),Math.min(d,f,g))>u)return!1}return!0}const cf=new Cr,Hr=new j,Ra=new j;class ns{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):cf.setFromPoints(e).getCenter(n);let r=0;for(let a=0,l=e.length;a<l;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hr.subVectors(e,this.center);const t=Hr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Hr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ra.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hr.copy(e.center).add(Ra)),this.expandByPoint(Hr.copy(e.center).sub(Ra))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new j,Pa=new j,_s=new j,gi=new j,La=new j,vs=new j,Da=new j;class ra{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Pa.copy(e).add(t).multiplyScalar(.5),_s.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(Pa);const a=e.distanceTo(t)*.5,l=-this.direction.dot(_s),u=gi.dot(this.direction),d=-gi.dot(_s),f=gi.lengthSq(),g=Math.abs(1-l*l);let _,v,y,E;if(g>0)if(_=l*d-u,v=l*u-d,E=a*g,_>=0)if(v>=-E)if(v<=E){const b=1/g;_*=b,v*=b,y=_*(_+l*v+2*u)+v*(l*_+v+2*d)+f}else v=a,_=Math.max(0,-(l*v+u)),y=-_*_+v*(v+2*d)+f;else v=-a,_=Math.max(0,-(l*v+u)),y=-_*_+v*(v+2*d)+f;else v<=-E?(_=Math.max(0,-(-l*a+u)),v=_>0?-a:Math.min(Math.max(-a,-d),a),y=-_*_+v*(v+2*d)+f):v<=E?(_=0,v=Math.min(Math.max(-a,-d),a),y=v*(v+2*d)+f):(_=Math.max(0,-(l*a+u)),v=_>0?a:Math.min(Math.max(-a,-d),a),y=-_*_+v*(v+2*d)+f);else v=l>0?-a:a,_=Math.max(0,-(l*v+u)),y=-_*_+v*(v+2*d)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(Pa).addScaledVector(_s,v),y}intersectSphere(e,t){ei.subVectors(e.center,this.origin);const n=ei.dot(this.direction),r=ei.dot(ei)-n*n,a=e.radius*e.radius;if(r>a)return null;const l=Math.sqrt(a-r),u=n-l,d=n+l;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,l,u,d;const f=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return f>=0?(n=(e.min.x-v.x)*f,r=(e.max.x-v.x)*f):(n=(e.max.x-v.x)*f,r=(e.min.x-v.x)*f),g>=0?(a=(e.min.y-v.y)*g,l=(e.max.y-v.y)*g):(a=(e.max.y-v.y)*g,l=(e.min.y-v.y)*g),n>l||a>r||((a>n||isNaN(n))&&(n=a),(l<r||isNaN(r))&&(r=l),_>=0?(u=(e.min.z-v.z)*_,d=(e.max.z-v.z)*_):(u=(e.max.z-v.z)*_,d=(e.min.z-v.z)*_),n>d||u>r)||((u>n||n!==n)&&(n=u),(d<r||r!==r)&&(r=d),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,n,r,a){La.subVectors(t,e),vs.subVectors(n,e),Da.crossVectors(La,vs);let l=this.direction.dot(Da),u;if(l>0){if(r)return null;u=1}else if(l<0)u=-1,l=-l;else return null;gi.subVectors(this.origin,e);const d=u*this.direction.dot(vs.crossVectors(gi,vs));if(d<0)return null;const f=u*this.direction.dot(La.cross(gi));if(f<0||d+f>l)return null;const g=-u*gi.dot(Da);return g<0?null:this.at(g/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(e,t,n,r,a,l,u,d,f,g,_,v,y,E,b,x){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,u,d,f,g,_,v,y,E,b,x)}set(e,t,n,r,a,l,u,d,f,g,_,v,y,E,b,x){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=a,m[5]=l,m[9]=u,m[13]=d,m[2]=f,m[6]=g,m[10]=_,m[14]=v,m[3]=y,m[7]=E,m[11]=b,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/rr.setFromMatrixColumn(e,0).length(),a=1/rr.setFromMatrixColumn(e,1).length(),l=1/rr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,l=Math.cos(n),u=Math.sin(n),d=Math.cos(r),f=Math.sin(r),g=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const v=l*g,y=l*_,E=u*g,b=u*_;t[0]=d*g,t[4]=-d*_,t[8]=f,t[1]=y+E*f,t[5]=v-b*f,t[9]=-u*d,t[2]=b-v*f,t[6]=E+y*f,t[10]=l*d}else if(e.order==="YXZ"){const v=d*g,y=d*_,E=f*g,b=f*_;t[0]=v+b*u,t[4]=E*u-y,t[8]=l*f,t[1]=l*_,t[5]=l*g,t[9]=-u,t[2]=y*u-E,t[6]=b+v*u,t[10]=l*d}else if(e.order==="ZXY"){const v=d*g,y=d*_,E=f*g,b=f*_;t[0]=v-b*u,t[4]=-l*_,t[8]=E+y*u,t[1]=y+E*u,t[5]=l*g,t[9]=b-v*u,t[2]=-l*f,t[6]=u,t[10]=l*d}else if(e.order==="ZYX"){const v=l*g,y=l*_,E=u*g,b=u*_;t[0]=d*g,t[4]=E*f-y,t[8]=v*f+b,t[1]=d*_,t[5]=b*f+v,t[9]=y*f-E,t[2]=-f,t[6]=u*d,t[10]=l*d}else if(e.order==="YZX"){const v=l*d,y=l*f,E=u*d,b=u*f;t[0]=d*g,t[4]=b-v*_,t[8]=E*_+y,t[1]=_,t[5]=l*g,t[9]=-u*g,t[2]=-f*g,t[6]=y*_+E,t[10]=v-b*_}else if(e.order==="XZY"){const v=l*d,y=l*f,E=u*d,b=u*f;t[0]=d*g,t[4]=-_,t[8]=f*g,t[1]=v*_+b,t[5]=l*g,t[9]=y*_-E,t[2]=E*_-y,t[6]=u*g,t[10]=b*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uf,e,hf)}lookAt(e,t,n){const r=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),_i.crossVectors(n,Mn),_i.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),_i.crossVectors(n,Mn)),_i.normalize(),xs.crossVectors(Mn,_i),r[0]=_i.x,r[4]=xs.x,r[8]=Mn.x,r[1]=_i.y,r[5]=xs.y,r[9]=Mn.y,r[2]=_i.z,r[6]=xs.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],u=n[4],d=n[8],f=n[12],g=n[1],_=n[5],v=n[9],y=n[13],E=n[2],b=n[6],x=n[10],m=n[14],P=n[3],R=n[7],N=n[11],q=n[15],z=r[0],c=r[4],$=r[8],I=r[12],L=r[1],V=r[5],ce=r[9],Y=r[13],pe=r[2],me=r[6],le=r[10],de=r[14],oe=r[3],be=r[7],De=r[11],Be=r[15];return a[0]=l*z+u*L+d*pe+f*oe,a[4]=l*c+u*V+d*me+f*be,a[8]=l*$+u*ce+d*le+f*De,a[12]=l*I+u*Y+d*de+f*Be,a[1]=g*z+_*L+v*pe+y*oe,a[5]=g*c+_*V+v*me+y*be,a[9]=g*$+_*ce+v*le+y*De,a[13]=g*I+_*Y+v*de+y*Be,a[2]=E*z+b*L+x*pe+m*oe,a[6]=E*c+b*V+x*me+m*be,a[10]=E*$+b*ce+x*le+m*De,a[14]=E*I+b*Y+x*de+m*Be,a[3]=P*z+R*L+N*pe+q*oe,a[7]=P*c+R*V+N*me+q*be,a[11]=P*$+R*ce+N*le+q*De,a[15]=P*I+R*Y+N*de+q*Be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],l=e[1],u=e[5],d=e[9],f=e[13],g=e[2],_=e[6],v=e[10],y=e[14],E=e[3],b=e[7],x=e[11],m=e[15];return E*(+a*d*_-r*f*_-a*u*v+n*f*v+r*u*y-n*d*y)+b*(+t*d*y-t*f*v+a*l*v-r*l*y+r*f*g-a*d*g)+x*(+t*f*_-t*u*y-a*l*_+n*l*y+a*u*g-n*f*g)+m*(-r*u*g-t*d*_+t*u*v+r*l*_-n*l*v+n*d*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],u=e[5],d=e[6],f=e[7],g=e[8],_=e[9],v=e[10],y=e[11],E=e[12],b=e[13],x=e[14],m=e[15],P=_*x*f-b*v*f+b*d*y-u*x*y-_*d*m+u*v*m,R=E*v*f-g*x*f-E*d*y+l*x*y+g*d*m-l*v*m,N=g*b*f-E*_*f+E*u*y-l*b*y-g*u*m+l*_*m,q=E*_*d-g*b*d-E*u*v+l*b*v+g*u*x-l*_*x,z=t*P+n*R+r*N+a*q;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const c=1/z;return e[0]=P*c,e[1]=(b*v*a-_*x*a-b*r*y+n*x*y+_*r*m-n*v*m)*c,e[2]=(u*x*a-b*d*a+b*r*f-n*x*f-u*r*m+n*d*m)*c,e[3]=(_*d*a-u*v*a-_*r*f+n*v*f+u*r*y-n*d*y)*c,e[4]=R*c,e[5]=(g*x*a-E*v*a+E*r*y-t*x*y-g*r*m+t*v*m)*c,e[6]=(E*d*a-l*x*a-E*r*f+t*x*f+l*r*m-t*d*m)*c,e[7]=(l*v*a-g*d*a+g*r*f-t*v*f-l*r*y+t*d*y)*c,e[8]=N*c,e[9]=(E*_*a-g*b*a-E*n*y+t*b*y+g*n*m-t*_*m)*c,e[10]=(l*b*a-E*u*a+E*n*f-t*b*f-l*n*m+t*u*m)*c,e[11]=(g*u*a-l*_*a-g*n*f+t*_*f+l*n*y-t*u*y)*c,e[12]=q*c,e[13]=(g*b*r-E*_*r+E*n*v-t*b*v-g*n*x+t*_*x)*c,e[14]=(E*u*r-l*b*r-E*n*d+t*b*d+l*n*x-t*u*x)*c,e[15]=(l*_*r-g*u*r+g*n*d-t*_*d-l*n*v+t*u*v)*c,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,l=e.x,u=e.y,d=e.z,f=a*l,g=a*u;return this.set(f*l+n,f*u-r*d,f*d+r*u,0,f*u+r*d,g*u+n,g*d-r*l,0,f*d-r*u,g*d+r*l,a*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,l){return this.set(1,n,a,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,l=t._y,u=t._z,d=t._w,f=a+a,g=l+l,_=u+u,v=a*f,y=a*g,E=a*_,b=l*g,x=l*_,m=u*_,P=d*f,R=d*g,N=d*_,q=n.x,z=n.y,c=n.z;return r[0]=(1-(b+m))*q,r[1]=(y+N)*q,r[2]=(E-R)*q,r[3]=0,r[4]=(y-N)*z,r[5]=(1-(v+m))*z,r[6]=(x+P)*z,r[7]=0,r[8]=(E+R)*c,r[9]=(x-P)*c,r[10]=(1-(v+b))*c,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=rr.set(r[0],r[1],r[2]).length();const l=rr.set(r[4],r[5],r[6]).length(),u=rr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Fn.copy(this);const f=1/a,g=1/l,_=1/u;return Fn.elements[0]*=f,Fn.elements[1]*=f,Fn.elements[2]*=f,Fn.elements[4]*=g,Fn.elements[5]*=g,Fn.elements[6]*=g,Fn.elements[8]*=_,Fn.elements[9]*=_,Fn.elements[10]*=_,t.setFromRotationMatrix(Fn),n.x=a,n.y=l,n.z=u,this}makePerspective(e,t,n,r,a,l,u=li){const d=this.elements,f=2*a/(t-e),g=2*a/(n-r),_=(t+e)/(t-e),v=(n+r)/(n-r);let y,E;if(u===li)y=-(l+a)/(l-a),E=-2*l*a/(l-a);else if(u===Js)y=-l/(l-a),E=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=f,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=g,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=y,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,r,a,l,u=li){const d=this.elements,f=1/(t-e),g=1/(n-r),_=1/(l-a),v=(t+e)*f,y=(n+r)*g;let E,b;if(u===li)E=(l+a)*_,b=-2*_;else if(u===Js)E=a*_,b=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=2*f,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*g,d[9]=0,d[13]=-y,d[2]=0,d[6]=0,d[10]=b,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const rr=new j,Fn=new Xt,uf=new j(0,0,0),hf=new j(1,1,1),_i=new j,xs=new j,Mn=new j,Al=new Xt,wl=new Vi;class $n{constructor(e=0,t=0,n=0,r=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],l=r[4],u=r[8],d=r[1],f=r[5],g=r[9],_=r[2],v=r[6],y=r[10];switch(t){case"XYZ":this._y=Math.asin(ln(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(v,f),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(d,f)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(ln(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-ln(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(ln(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,f),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-ln(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(v,f),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Al.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Al,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wl.setFromEuler(this),this.setFromQuaternion(wl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class Xc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ff=0;const Cl=new j,sr=new Vi,ti=new Xt,ys=new j,kr=new j,df=new j,pf=new Vi,Rl=new j(1,0,0),Pl=new j(0,1,0),Ll=new j(0,0,1),Dl={type:"added"},mf={type:"removed"},ar={type:"childadded",child:null},Ia={type:"childremoved",child:null};class gn extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new j,t=new $n,n=new Vi,r=new j(1,1,1);function a(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Xt},normalMatrix:{value:new ht}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.multiply(sr),this}rotateOnWorldAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.premultiply(sr),this}rotateX(e){return this.rotateOnAxis(Rl,e)}rotateY(e){return this.rotateOnAxis(Pl,e)}rotateZ(e){return this.rotateOnAxis(Ll,e)}translateOnAxis(e,t){return Cl.copy(e).applyQuaternion(this.quaternion),this.position.add(Cl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rl,e)}translateY(e){return this.translateOnAxis(Pl,e)}translateZ(e){return this.translateOnAxis(Ll,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ys.copy(e):ys.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(kr,ys,this.up):ti.lookAt(ys,kr,this.up),this.quaternion.setFromRotationMatrix(ti),r&&(ti.extractRotation(r.matrixWorld),sr.setFromRotationMatrix(ti),this.quaternion.premultiply(sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dl),ar.child=e,this.dispatchEvent(ar),ar.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mf),Ia.child=e,this.dispatchEvent(Ia),Ia.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dl),ar.child=e,this.dispatchEvent(ar),ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,e,df),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,pf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let f=0,g=d.length;f<g;f++){const _=d[f];a(e.shapes,_)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,f=this.material.length;d<f;d++)u.push(a(e.materials,this.material[d]));r.material=u}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let u=0;u<this.children.length;u++)r.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];r.animations.push(a(e.animations,d))}}if(t){const u=l(e.geometries),d=l(e.materials),f=l(e.textures),g=l(e.images),_=l(e.shapes),v=l(e.skeletons),y=l(e.animations),E=l(e.nodes);u.length>0&&(n.geometries=u),d.length>0&&(n.materials=d),f.length>0&&(n.textures=f),g.length>0&&(n.images=g),_.length>0&&(n.shapes=_),v.length>0&&(n.skeletons=v),y.length>0&&(n.animations=y),E.length>0&&(n.nodes=E)}return n.object=r,n;function l(u){const d=[];for(const f in u){const g=u[f];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}gn.DEFAULT_UP=new j(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new j,ni=new j,Ua=new j,ii=new j,or=new j,lr=new j,Il=new j,Na=new j,Fa=new j,Oa=new j;class jn{constructor(e=new j,t=new j,n=new j){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),On.subVectors(e,t),r.cross(On);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){On.subVectors(r,t),ni.subVectors(n,t),Ua.subVectors(e,t);const l=On.dot(On),u=On.dot(ni),d=On.dot(Ua),f=ni.dot(ni),g=ni.dot(Ua),_=l*f-u*u;if(_===0)return a.set(0,0,0),null;const v=1/_,y=(f*d-u*g)*v,E=(l*g-u*d)*v;return a.set(1-y-E,E,y)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,t,n,r,a,l,u,d){return this.getBarycoord(e,t,n,r,ii)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,ii.x),d.addScaledVector(l,ii.y),d.addScaledVector(u,ii.z),d)}static isFrontFacing(e,t,n,r){return On.subVectors(n,t),ni.subVectors(e,t),On.cross(ni).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),On.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return jn.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let l,u;or.subVectors(r,n),lr.subVectors(a,n),Na.subVectors(e,n);const d=or.dot(Na),f=lr.dot(Na);if(d<=0&&f<=0)return t.copy(n);Fa.subVectors(e,r);const g=or.dot(Fa),_=lr.dot(Fa);if(g>=0&&_<=g)return t.copy(r);const v=d*_-g*f;if(v<=0&&d>=0&&g<=0)return l=d/(d-g),t.copy(n).addScaledVector(or,l);Oa.subVectors(e,a);const y=or.dot(Oa),E=lr.dot(Oa);if(E>=0&&y<=E)return t.copy(a);const b=y*f-d*E;if(b<=0&&f>=0&&E<=0)return u=f/(f-E),t.copy(n).addScaledVector(lr,u);const x=g*E-y*_;if(x<=0&&_-g>=0&&y-E>=0)return Il.subVectors(a,r),u=(_-g)/(_-g+(y-E)),t.copy(r).addScaledVector(Il,u);const m=1/(x+b+v);return l=b*m,u=v*m,t.copy(n).addScaledVector(or,l).addScaledVector(lr,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function Ba(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class _t{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ct.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ct.workingColorSpace){if(e=Yo(e,1),t=ln(t,0,1),n=ln(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,l=2*n-a;this.r=Ba(l,a,e+1/3),this.g=Ba(l,a,e),this.b=Ba(l,a,e-1/3)}return Ct.toWorkingColorSpace(this,r),this}setStyle(e,t=Xn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const l=r[1],u=r[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xn){const n=qc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}copyLinearToSRGB(e){return this.r=Ta(e.r),this.g=Ta(e.g),this.b=Ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return Ct.fromWorkingColorSpace(on.copy(this),e),Math.round(ln(on.r*255,0,255))*65536+Math.round(ln(on.g*255,0,255))*256+Math.round(ln(on.b*255,0,255))}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(on.copy(this),t);const n=on.r,r=on.g,a=on.b,l=Math.max(n,r,a),u=Math.min(n,r,a);let d,f;const g=(u+l)/2;if(u===l)d=0,f=0;else{const _=l-u;switch(f=g<=.5?_/(l+u):_/(2-l-u),l){case n:d=(r-a)/_+(r<a?6:0);break;case r:d=(a-n)/_+2;break;case a:d=(n-r)/_+4;break}d/=6}return e.h=d,e.s=f,e.l=g,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=Xn){Ct.fromWorkingColorSpace(on.copy(this),e);const t=on.r,n=on.g,r=on.b;return e!==Xn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+t,vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(Ms);const n=$r(vi.h,Ms.h,t),r=$r(vi.s,Ms.s,t),a=$r(vi.l,Ms.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new _t;_t.NAMES=qc;let gf=0;class ui extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=wr(),this.name="",this.type="Material",this.blending=xr,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=to,this.blendDst=no,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xr&&(n.blending=this.blending),this.side!==bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==to&&(n.blendSrc=this.blendSrc),this.blendDst!==no&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const l=[];for(const u in a){const d=a[u];delete d.metadata,l.push(d)}return l}if(t){const a=r(e.textures),l=r(e.images);a.length>0&&(n.textures=a),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class $o extends ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new j,Ss=new lt;class vn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=yl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Kr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ss.fromBufferAttribute(this,t),Ss.applyMatrix3(e),this.setXY(t,Ss.x,Ss.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=gr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gr(t,this.array)),t}setX(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gr(t,this.array)),t}setY(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gr(t,this.array)),t}setW(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array),r=fn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array),r=fn(r,this.array),a=fn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yl&&(e.usage=this.usage),e}}class jc extends vn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ko extends vn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class nn extends vn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let _f=0;const Cn=new Xt,za=new gn,cr=new j,Sn=new Cr,Vr=new Cr,Zt=new j;class bn extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=wr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vc(e)?Ko:jc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new ht().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,n){return Cn.makeTranslation(e,t,n),this.applyMatrix4(Cn),this}scale(e,t,n){return Cn.makeScale(e,t,n),this.applyMatrix4(Cn),this}lookAt(e){return za.lookAt(e),za.updateMatrix(),this.applyMatrix4(za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new nn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Sn.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let a=0,l=t.length;a<l;a++){const u=t[a];Vr.setFromBufferAttribute(u),this.morphTargetsRelative?(Zt.addVectors(Sn.min,Vr.min),Sn.expandByPoint(Zt),Zt.addVectors(Sn.max,Vr.max),Sn.expandByPoint(Zt)):(Sn.expandByPoint(Vr.min),Sn.expandByPoint(Vr.max))}Sn.getCenter(n);let r=0;for(let a=0,l=e.count;a<l;a++)Zt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Zt));if(t)for(let a=0,l=t.length;a<l;a++){const u=t[a],d=this.morphTargetsRelative;for(let f=0,g=u.count;f<g;f++)Zt.fromBufferAttribute(u,f),d&&(cr.fromBufferAttribute(e,f),Zt.add(cr)),r=Math.max(r,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),u=[],d=[];for(let $=0;$<n.count;$++)u[$]=new j,d[$]=new j;const f=new j,g=new j,_=new j,v=new lt,y=new lt,E=new lt,b=new j,x=new j;function m($,I,L){f.fromBufferAttribute(n,$),g.fromBufferAttribute(n,I),_.fromBufferAttribute(n,L),v.fromBufferAttribute(a,$),y.fromBufferAttribute(a,I),E.fromBufferAttribute(a,L),g.sub(f),_.sub(f),y.sub(v),E.sub(v);const V=1/(y.x*E.y-E.x*y.y);isFinite(V)&&(b.copy(g).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(V),x.copy(_).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(V),u[$].add(b),u[I].add(b),u[L].add(b),d[$].add(x),d[I].add(x),d[L].add(x))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let $=0,I=P.length;$<I;++$){const L=P[$],V=L.start,ce=L.count;for(let Y=V,pe=V+ce;Y<pe;Y+=3)m(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const R=new j,N=new j,q=new j,z=new j;function c($){q.fromBufferAttribute(r,$),z.copy(q);const I=u[$];R.copy(I),R.sub(q.multiplyScalar(q.dot(I))).normalize(),N.crossVectors(z,I);const V=N.dot(d[$])<0?-1:1;l.setXYZW($,R.x,R.y,R.z,V)}for(let $=0,I=P.length;$<I;++$){const L=P[$],V=L.start,ce=L.count;for(let Y=V,pe=V+ce;Y<pe;Y+=3)c(e.getX(Y+0)),c(e.getX(Y+1)),c(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let v=0,y=n.count;v<y;v++)n.setXYZ(v,0,0,0);const r=new j,a=new j,l=new j,u=new j,d=new j,f=new j,g=new j,_=new j;if(e)for(let v=0,y=e.count;v<y;v+=3){const E=e.getX(v+0),b=e.getX(v+1),x=e.getX(v+2);r.fromBufferAttribute(t,E),a.fromBufferAttribute(t,b),l.fromBufferAttribute(t,x),g.subVectors(l,a),_.subVectors(r,a),g.cross(_),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,b),f.fromBufferAttribute(n,x),u.add(g),d.add(g),f.add(g),n.setXYZ(E,u.x,u.y,u.z),n.setXYZ(b,d.x,d.y,d.z),n.setXYZ(x,f.x,f.y,f.z)}else for(let v=0,y=t.count;v<y;v+=3)r.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),l.fromBufferAttribute(t,v+2),g.subVectors(l,a),_.subVectors(r,a),g.cross(_),n.setXYZ(v+0,g.x,g.y,g.z),n.setXYZ(v+1,g.x,g.y,g.z),n.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(u,d){const f=u.array,g=u.itemSize,_=u.normalized,v=new f.constructor(d.length*g);let y=0,E=0;for(let b=0,x=d.length;b<x;b++){u.isInterleavedBufferAttribute?y=d[b]*u.data.stride+u.offset:y=d[b]*g;for(let m=0;m<g;m++)v[E++]=f[y++]}return new vn(v,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bn,n=this.index.array,r=this.attributes;for(const u in r){const d=r[u],f=e(d,n);t.setAttribute(u,f)}const a=this.morphAttributes;for(const u in a){const d=[],f=a[u];for(let g=0,_=f.length;g<_;g++){const v=f[g],y=e(v,n);d.push(y)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let u=0,d=l.length;u<d;u++){const f=l[u];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const f in d)d[f]!==void 0&&(e[f]=d[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const f=n[d];e.data.attributes[d]=f.toJSON(e.data)}const r={};let a=!1;for(const d in this.morphAttributes){const f=this.morphAttributes[d],g=[];for(let _=0,v=f.length;_<v;_++){const y=f[_];g.push(y.toJSON(e.data))}g.length>0&&(r[d]=g,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const f in r){const g=r[f];this.setAttribute(f,g.clone(t))}const a=e.morphAttributes;for(const f in a){const g=[],_=a[f];for(let v=0,y=_.length;v<y;v++)g.push(_[v].clone(t));this.morphAttributes[f]=g}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let f=0,g=l.length;f<g;f++){const _=l[f];this.addGroup(_.start,_.count,_.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ul=new Xt,Ii=new ra,Es=new ns,Nl=new j,ur=new j,hr=new j,fr=new j,Ha=new j,bs=new j,Ts=new lt,As=new lt,ws=new lt,Fl=new j,Ol=new j,Bl=new j,Cs=new j,Rs=new j;class En extends gn{constructor(e=new bn,t=new $o){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const u=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const u=this.morphTargetInfluences;if(a&&u){bs.set(0,0,0);for(let d=0,f=a.length;d<f;d++){const g=u[d],_=a[d];g!==0&&(Ha.fromBufferAttribute(_,e),l?bs.addScaledVector(Ha,g):bs.addScaledVector(Ha.sub(t),g))}t.add(bs)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(a),Ii.copy(e.ray).recast(e.near),!(Es.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(Es,Nl)===null||Ii.origin.distanceToSquared(Nl)>(e.far-e.near)**2))&&(Ul.copy(a).invert(),Ii.copy(e.ray).applyMatrix4(Ul),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,n){let r;const a=this.geometry,l=this.material,u=a.index,d=a.attributes.position,f=a.attributes.uv,g=a.attributes.uv1,_=a.attributes.normal,v=a.groups,y=a.drawRange;if(u!==null)if(Array.isArray(l))for(let E=0,b=v.length;E<b;E++){const x=v[E],m=l[x.materialIndex],P=Math.max(x.start,y.start),R=Math.min(u.count,Math.min(x.start+x.count,y.start+y.count));for(let N=P,q=R;N<q;N+=3){const z=u.getX(N),c=u.getX(N+1),$=u.getX(N+2);r=Ps(this,m,e,n,f,g,_,z,c,$),r&&(r.faceIndex=Math.floor(N/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const E=Math.max(0,y.start),b=Math.min(u.count,y.start+y.count);for(let x=E,m=b;x<m;x+=3){const P=u.getX(x),R=u.getX(x+1),N=u.getX(x+2);r=Ps(this,l,e,n,f,g,_,P,R,N),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(d!==void 0)if(Array.isArray(l))for(let E=0,b=v.length;E<b;E++){const x=v[E],m=l[x.materialIndex],P=Math.max(x.start,y.start),R=Math.min(d.count,Math.min(x.start+x.count,y.start+y.count));for(let N=P,q=R;N<q;N+=3){const z=N,c=N+1,$=N+2;r=Ps(this,m,e,n,f,g,_,z,c,$),r&&(r.faceIndex=Math.floor(N/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const E=Math.max(0,y.start),b=Math.min(d.count,y.start+y.count);for(let x=E,m=b;x<m;x+=3){const P=x,R=x+1,N=x+2;r=Ps(this,l,e,n,f,g,_,P,R,N),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}}function vf(i,e,t,n,r,a,l,u){let d;if(e.side===xn?d=n.intersectTriangle(l,a,r,!0,u):d=n.intersectTriangle(r,a,l,e.side===bi,u),d===null)return null;Rs.copy(u),Rs.applyMatrix4(i.matrixWorld);const f=t.ray.origin.distanceTo(Rs);return f<t.near||f>t.far?null:{distance:f,point:Rs.clone(),object:i}}function Ps(i,e,t,n,r,a,l,u,d,f){i.getVertexPosition(u,ur),i.getVertexPosition(d,hr),i.getVertexPosition(f,fr);const g=vf(i,e,t,n,ur,hr,fr,Cs);if(g){r&&(Ts.fromBufferAttribute(r,u),As.fromBufferAttribute(r,d),ws.fromBufferAttribute(r,f),g.uv=jn.getInterpolation(Cs,ur,hr,fr,Ts,As,ws,new lt)),a&&(Ts.fromBufferAttribute(a,u),As.fromBufferAttribute(a,d),ws.fromBufferAttribute(a,f),g.uv1=jn.getInterpolation(Cs,ur,hr,fr,Ts,As,ws,new lt)),l&&(Fl.fromBufferAttribute(l,u),Ol.fromBufferAttribute(l,d),Bl.fromBufferAttribute(l,f),g.normal=jn.getInterpolation(Cs,ur,hr,fr,Fl,Ol,Bl,new j),g.normal.dot(n.direction)>0&&g.normal.multiplyScalar(-1));const _={a:u,b:d,c:f,normal:new j,materialIndex:0};jn.getNormal(ur,hr,fr,_.normal),g.face=_}return g}class is extends bn{constructor(e=1,t=1,n=1,r=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:l};const u=this;r=Math.floor(r),a=Math.floor(a),l=Math.floor(l);const d=[],f=[],g=[],_=[];let v=0,y=0;E("z","y","x",-1,-1,n,t,e,l,a,0),E("z","y","x",1,-1,n,t,-e,l,a,1),E("x","z","y",1,1,e,n,t,r,l,2),E("x","z","y",1,-1,e,n,-t,r,l,3),E("x","y","z",1,-1,e,t,n,r,a,4),E("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(d),this.setAttribute("position",new nn(f,3)),this.setAttribute("normal",new nn(g,3)),this.setAttribute("uv",new nn(_,2));function E(b,x,m,P,R,N,q,z,c,$,I){const L=N/c,V=q/$,ce=N/2,Y=q/2,pe=z/2,me=c+1,le=$+1;let de=0,oe=0;const be=new j;for(let De=0;De<le;De++){const Be=De*V-Y;for(let ft=0;ft<me;ft++){const vt=ft*L-ce;be[b]=vt*P,be[x]=Be*R,be[m]=pe,f.push(be.x,be.y,be.z),be[b]=0,be[x]=0,be[m]=z>0?1:-1,g.push(be.x,be.y,be.z),_.push(ft/c),_.push(1-De/$),de+=1}}for(let De=0;De<$;De++)for(let Be=0;Be<c;Be++){const ft=v+Be+me*De,vt=v+Be+me*(De+1),fe=v+(Be+1)+me*(De+1),ye=v+(Be+1)+me*De;d.push(ft,vt,ye),d.push(vt,fe,ye),oe+=6}u.addGroup(y,oe,I),y+=oe,v+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ar(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function dn(i){const e={};for(let t=0;t<i.length;t++){const n=Ar(i[t]);for(const r in n)e[r]=n[r]}return e}function xf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Yc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const yf={clone:Ar,merge:dn};var Mf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mf,this.fragmentShader=Sf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=xf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $c extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=li}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new j,zl=new lt,Hl=new lt;class Pn extends $c{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qr*2*Math.atan(Math.tan(Yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,zl,Hl),t.subVectors(Hl,zl)}setViewOffset(e,t,n,r,a,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const d=l.fullWidth,f=l.fullHeight;a+=l.offsetX*r/d,t-=l.offsetY*n/f,r*=l.width/d,n*=l.height/f}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const dr=-90,pr=1;class Ef extends gn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pn(dr,pr,e,t);r.layers=this.layers,this.add(r);const a=new Pn(dr,pr,e,t);a.layers=this.layers,this.add(a);const l=new Pn(dr,pr,e,t);l.layers=this.layers,this.add(l);const u=new Pn(dr,pr,e,t);u.layers=this.layers,this.add(u);const d=new Pn(dr,pr,e,t);d.layers=this.layers,this.add(d);const f=new Pn(dr,pr,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,l,u,d]=t;for(const f of t)this.remove(f);if(e===li)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Js)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,l,u,d,f,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,l),e.setRenderTarget(n,2,r),e.render(t,u),e.setRenderTarget(n,3,r),e.render(t,d),e.setRenderTarget(n,4,r),e.render(t,f),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,r),e.render(t,g),e.setRenderTarget(_,v,y),e.xr.enabled=E,n.texture.needsPMREMUpdate=!0}}class Kc extends mn{constructor(e,t,n,r,a,l,u,d,f,g){e=e!==void 0?e:[],t=t!==void 0?t:Sr,super(e,t,n,r,a,l,u,d,f,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bf extends Ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Kc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new is(5,5,5),a=new Kn({name:"CubemapFromEquirect",uniforms:Ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:Si});a.uniforms.tEquirect.value=t;const l=new En(r,a),u=t.minFilter;return t.minFilter===Hi&&(t.minFilter=Bn),new Ef(1,10,this).update(e,l),t.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,r);e.setRenderTarget(a)}}const ka=new j,Tf=new j,Af=new ht;class yi{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ka.subVectors(n,t).cross(Tf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ka),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Af.getNormalMatrix(e),r=this.coplanarPoint(ka).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new ns,Ls=new j;class Zc{constructor(e=new yi,t=new yi,n=new yi,r=new yi,a=new yi,l=new yi){this.planes=[e,t,n,r,a,l]}set(e,t,n,r,a,l){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(n),u[3].copy(r),u[4].copy(a),u[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=li){const n=this.planes,r=e.elements,a=r[0],l=r[1],u=r[2],d=r[3],f=r[4],g=r[5],_=r[6],v=r[7],y=r[8],E=r[9],b=r[10],x=r[11],m=r[12],P=r[13],R=r[14],N=r[15];if(n[0].setComponents(d-a,v-f,x-y,N-m).normalize(),n[1].setComponents(d+a,v+f,x+y,N+m).normalize(),n[2].setComponents(d+l,v+g,x+E,N+P).normalize(),n[3].setComponents(d-l,v-g,x-E,N-P).normalize(),n[4].setComponents(d-u,v-_,x-b,N-R).normalize(),t===li)n[5].setComponents(d+u,v+_,x+b,N+R).normalize();else if(t===Js)n[5].setComponents(u,_,b,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ls.x=r.normal.x>0?e.max.x:e.min.x,Ls.y=r.normal.y>0?e.max.y:e.min.y,Ls.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ls)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jc(){let i=null,e=!1,t=null,n=null;function r(a,l){t(a,l),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function wf(i){const e=new WeakMap;function t(u,d){const f=u.array,g=u.usage,_=f.byteLength,v=i.createBuffer();i.bindBuffer(d,v),i.bufferData(d,f,g),u.onUploadCallback();let y;if(f instanceof Float32Array)y=i.FLOAT;else if(f instanceof Uint16Array)u.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=i.SHORT;else if(f instanceof Uint32Array)y=i.UNSIGNED_INT;else if(f instanceof Int32Array)y=i.INT;else if(f instanceof Int8Array)y=i.BYTE;else if(f instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:_}}function n(u,d,f){const g=d.array,_=d._updateRange,v=d.updateRanges;if(i.bindBuffer(f,u),_.count===-1&&v.length===0&&i.bufferSubData(f,0,g),v.length!==0){for(let y=0,E=v.length;y<E;y++){const b=v[y];i.bufferSubData(f,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}d.clearUpdateRanges()}_.count!==-1&&(i.bufferSubData(f,_.offset*g.BYTES_PER_ELEMENT,g,_.offset,_.count),_.count=-1),d.onUploadCallback()}function r(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=e.get(u);d&&(i.deleteBuffer(d.buffer),e.delete(u))}function l(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const g=e.get(u);(!g||g.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const f=e.get(u);if(f===void 0)e.set(u,t(u,d));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,u,d),f.version=u.version}}return{get:r,remove:a,update:l}}class rs extends bn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,l=t/2,u=Math.floor(n),d=Math.floor(r),f=u+1,g=d+1,_=e/u,v=t/d,y=[],E=[],b=[],x=[];for(let m=0;m<g;m++){const P=m*v-l;for(let R=0;R<f;R++){const N=R*_-a;E.push(N,-P,0),b.push(0,0,1),x.push(R/u),x.push(1-m/d)}}for(let m=0;m<d;m++)for(let P=0;P<u;P++){const R=P+f*m,N=P+f*(m+1),q=P+1+f*(m+1),z=P+1+f*m;y.push(R,N,z),y.push(N,q,z)}this.setIndex(y),this.setAttribute("position",new nn(E,3)),this.setAttribute("normal",new nn(b,3)),this.setAttribute("uv",new nn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Cf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rf=`#ifdef USE_ALPHAHASH
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
#endif`,Pf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Df=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,If=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uf=`#ifdef USE_AOMAP
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
#endif`,Nf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ff=`#ifdef USE_BATCHING
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
#endif`,Of=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kf=`#ifdef USE_IRIDESCENCE
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
#endif`,Vf=`#ifdef USE_BUMPMAP
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
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Zf=`#define PI 3.141592653589793
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
} // validated`,Jf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qf=`vec3 transformedNormal = objectNormal;
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
#endif`,ed=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,td=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,id=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rd="gl_FragColor = linearToOutputTexel( gl_FragColor );",sd=`
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
}`,ad=`#ifdef USE_ENVMAP
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
#endif`,od=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ld=`#ifdef USE_ENVMAP
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
#endif`,cd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ud=`#ifdef USE_ENVMAP
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
#endif`,hd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,md=`#ifdef USE_GRADIENTMAP
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
}`,gd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_d=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xd=`uniform bool receiveShadow;
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
#endif`,yd=`#ifdef USE_ENVMAP
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
#endif`,Md=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ed=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Td=`PhysicalMaterial material;
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
#endif`,Ad=`struct PhysicalMaterial {
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
}`,wd=`
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
#endif`,Cd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ld=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Id=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ud=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Od=`#if defined( USE_POINTS_UV )
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
#endif`,Bd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gd=`#ifdef USE_MORPHTARGETS
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
#endif`,Wd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$d=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kd=`#ifdef USE_NORMALMAP
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
#endif`,Zd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ep=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,np=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ip=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ap=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,op=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,up=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fp=`float getShadowMask() {
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
}`,dp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pp=`#ifdef USE_SKINNING
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
#endif`,mp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gp=`#ifdef USE_SKINNING
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
#endif`,_p=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mp=`#ifdef USE_TRANSMISSION
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
#endif`,Sp=`#ifdef USE_TRANSMISSION
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
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ap=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cp=`uniform sampler2D t2D;
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
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ip=`#include <common>
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
}`,Up=`#if DEPTH_PACKING == 3200
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
}`,Np=`#define DISTANCE
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
}`,Fp=`#define DISTANCE
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
}`,Op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zp=`uniform float scale;
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
}`,Hp=`uniform vec3 diffuse;
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
}`,kp=`#include <common>
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
}`,Vp=`uniform vec3 diffuse;
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
}`,Gp=`#define LAMBERT
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
}`,Wp=`#define LAMBERT
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
}`,Xp=`#define MATCAP
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
}`,qp=`#define MATCAP
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
}`,jp=`#define NORMAL
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
}`,Yp=`#define NORMAL
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
}`,$p=`#define PHONG
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
}`,Kp=`#define PHONG
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
}`,Zp=`#define STANDARD
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
}`,Jp=`#define STANDARD
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
}`,Qp=`#define TOON
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
}`,em=`#define TOON
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
}`,tm=`uniform float size;
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
}`,nm=`uniform vec3 diffuse;
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
}`,im=`#include <common>
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
}`,rm=`uniform vec3 color;
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
}`,sm=`uniform float rotation;
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
}`,am=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:Cf,alphahash_pars_fragment:Rf,alphamap_fragment:Pf,alphamap_pars_fragment:Lf,alphatest_fragment:Df,alphatest_pars_fragment:If,aomap_fragment:Uf,aomap_pars_fragment:Nf,batching_pars_vertex:Ff,batching_vertex:Of,begin_vertex:Bf,beginnormal_vertex:zf,bsdfs:Hf,iridescence_fragment:kf,bumpmap_pars_fragment:Vf,clipping_planes_fragment:Gf,clipping_planes_pars_fragment:Wf,clipping_planes_pars_vertex:Xf,clipping_planes_vertex:qf,color_fragment:jf,color_pars_fragment:Yf,color_pars_vertex:$f,color_vertex:Kf,common:Zf,cube_uv_reflection_fragment:Jf,defaultnormal_vertex:Qf,displacementmap_pars_vertex:ed,displacementmap_vertex:td,emissivemap_fragment:nd,emissivemap_pars_fragment:id,colorspace_fragment:rd,colorspace_pars_fragment:sd,envmap_fragment:ad,envmap_common_pars_fragment:od,envmap_pars_fragment:ld,envmap_pars_vertex:cd,envmap_physical_pars_fragment:yd,envmap_vertex:ud,fog_vertex:hd,fog_pars_vertex:fd,fog_fragment:dd,fog_pars_fragment:pd,gradientmap_pars_fragment:md,lightmap_pars_fragment:gd,lights_lambert_fragment:_d,lights_lambert_pars_fragment:vd,lights_pars_begin:xd,lights_toon_fragment:Md,lights_toon_pars_fragment:Sd,lights_phong_fragment:Ed,lights_phong_pars_fragment:bd,lights_physical_fragment:Td,lights_physical_pars_fragment:Ad,lights_fragment_begin:wd,lights_fragment_maps:Cd,lights_fragment_end:Rd,logdepthbuf_fragment:Pd,logdepthbuf_pars_fragment:Ld,logdepthbuf_pars_vertex:Dd,logdepthbuf_vertex:Id,map_fragment:Ud,map_pars_fragment:Nd,map_particle_fragment:Fd,map_particle_pars_fragment:Od,metalnessmap_fragment:Bd,metalnessmap_pars_fragment:zd,morphinstance_vertex:Hd,morphcolor_vertex:kd,morphnormal_vertex:Vd,morphtarget_pars_vertex:Gd,morphtarget_vertex:Wd,normal_fragment_begin:Xd,normal_fragment_maps:qd,normal_pars_fragment:jd,normal_pars_vertex:Yd,normal_vertex:$d,normalmap_pars_fragment:Kd,clearcoat_normal_fragment_begin:Zd,clearcoat_normal_fragment_maps:Jd,clearcoat_pars_fragment:Qd,iridescence_pars_fragment:ep,opaque_fragment:tp,packing:np,premultiplied_alpha_fragment:ip,project_vertex:rp,dithering_fragment:sp,dithering_pars_fragment:ap,roughnessmap_fragment:op,roughnessmap_pars_fragment:lp,shadowmap_pars_fragment:cp,shadowmap_pars_vertex:up,shadowmap_vertex:hp,shadowmask_pars_fragment:fp,skinbase_vertex:dp,skinning_pars_vertex:pp,skinning_vertex:mp,skinnormal_vertex:gp,specularmap_fragment:_p,specularmap_pars_fragment:vp,tonemapping_fragment:xp,tonemapping_pars_fragment:yp,transmission_fragment:Mp,transmission_pars_fragment:Sp,uv_pars_fragment:Ep,uv_pars_vertex:bp,uv_vertex:Tp,worldpos_vertex:Ap,background_vert:wp,background_frag:Cp,backgroundCube_vert:Rp,backgroundCube_frag:Pp,cube_vert:Lp,cube_frag:Dp,depth_vert:Ip,depth_frag:Up,distanceRGBA_vert:Np,distanceRGBA_frag:Fp,equirect_vert:Op,equirect_frag:Bp,linedashed_vert:zp,linedashed_frag:Hp,meshbasic_vert:kp,meshbasic_frag:Vp,meshlambert_vert:Gp,meshlambert_frag:Wp,meshmatcap_vert:Xp,meshmatcap_frag:qp,meshnormal_vert:jp,meshnormal_frag:Yp,meshphong_vert:$p,meshphong_frag:Kp,meshphysical_vert:Zp,meshphysical_frag:Jp,meshtoon_vert:Qp,meshtoon_frag:em,points_vert:tm,points_frag:nm,shadow_vert:im,shadow_frag:rm,sprite_vert:sm,sprite_frag:am},Ae={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},qn={basic:{uniforms:dn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:dn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new _t(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:dn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:dn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:dn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new _t(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:dn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:dn([Ae.points,Ae.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:dn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:dn([Ae.common,Ae.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:dn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:dn([Ae.sprite,Ae.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:dn([Ae.common,Ae.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:dn([Ae.lights,Ae.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};qn.physical={uniforms:dn([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Ds={r:0,b:0,g:0},Ni=new $n,om=new Xt;function lm(i,e,t,n,r,a,l){const u=new _t(0);let d=a===!0?0:1,f,g,_=null,v=0,y=null;function E(P){let R=P.isScene===!0?P.background:null;return R&&R.isTexture&&(R=(P.backgroundBlurriness>0?t:e).get(R)),R}function b(P){let R=!1;const N=E(P);N===null?m(u,d):N&&N.isColor&&(m(N,1),R=!0);const q=i.xr.getEnvironmentBlendMode();q==="additive"?n.buffers.color.setClear(0,0,0,1,l):q==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(i.autoClear||R)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(P,R){const N=E(R);N&&(N.isCubeTexture||N.mapping===na)?(g===void 0&&(g=new En(new is(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Ar(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(q,z,c){this.matrixWorld.copyPosition(c.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(g)),Ni.copy(R.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),g.material.uniforms.envMap.value=N,g.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(om.makeRotationFromEuler(Ni)),g.material.toneMapped=Ct.getTransfer(N.colorSpace)!==Ot,(_!==N||v!==N.version||y!==i.toneMapping)&&(g.material.needsUpdate=!0,_=N,v=N.version,y=i.toneMapping),g.layers.enableAll(),P.unshift(g,g.geometry,g.material,0,0,null)):N&&N.isTexture&&(f===void 0&&(f=new En(new rs(2,2),new Kn({name:"BackgroundMaterial",uniforms:Ar(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=N,f.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,f.material.toneMapped=Ct.getTransfer(N.colorSpace)!==Ot,N.matrixAutoUpdate===!0&&N.updateMatrix(),f.material.uniforms.uvTransform.value.copy(N.matrix),(_!==N||v!==N.version||y!==i.toneMapping)&&(f.material.needsUpdate=!0,_=N,v=N.version,y=i.toneMapping),f.layers.enableAll(),P.unshift(f,f.geometry,f.material,0,0,null))}function m(P,R){P.getRGB(Ds,Yc(i)),n.buffers.color.setClear(Ds.r,Ds.g,Ds.b,R,l)}return{getClearColor:function(){return u},setClearColor:function(P,R=1){u.set(P),d=R,m(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(P){d=P,m(u,d)},render:b,addToRenderList:x}}function cm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=v(null);let a=r,l=!1;function u(L,V,ce,Y,pe){let me=!1;const le=_(Y,ce,V);a!==le&&(a=le,f(a.object)),me=y(L,Y,ce,pe),me&&E(L,Y,ce,pe),pe!==null&&e.update(pe,i.ELEMENT_ARRAY_BUFFER),(me||l)&&(l=!1,N(L,V,ce,Y),pe!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(pe).buffer))}function d(){return i.createVertexArray()}function f(L){return i.bindVertexArray(L)}function g(L){return i.deleteVertexArray(L)}function _(L,V,ce){const Y=ce.wireframe===!0;let pe=n[L.id];pe===void 0&&(pe={},n[L.id]=pe);let me=pe[V.id];me===void 0&&(me={},pe[V.id]=me);let le=me[Y];return le===void 0&&(le=v(d()),me[Y]=le),le}function v(L){const V=[],ce=[],Y=[];for(let pe=0;pe<t;pe++)V[pe]=0,ce[pe]=0,Y[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ce,attributeDivisors:Y,object:L,attributes:{},index:null}}function y(L,V,ce,Y){const pe=a.attributes,me=V.attributes;let le=0;const de=ce.getAttributes();for(const oe in de)if(de[oe].location>=0){const De=pe[oe];let Be=me[oe];if(Be===void 0&&(oe==="instanceMatrix"&&L.instanceMatrix&&(Be=L.instanceMatrix),oe==="instanceColor"&&L.instanceColor&&(Be=L.instanceColor)),De===void 0||De.attribute!==Be||Be&&De.data!==Be.data)return!0;le++}return a.attributesNum!==le||a.index!==Y}function E(L,V,ce,Y){const pe={},me=V.attributes;let le=0;const de=ce.getAttributes();for(const oe in de)if(de[oe].location>=0){let De=me[oe];De===void 0&&(oe==="instanceMatrix"&&L.instanceMatrix&&(De=L.instanceMatrix),oe==="instanceColor"&&L.instanceColor&&(De=L.instanceColor));const Be={};Be.attribute=De,De&&De.data&&(Be.data=De.data),pe[oe]=Be,le++}a.attributes=pe,a.attributesNum=le,a.index=Y}function b(){const L=a.newAttributes;for(let V=0,ce=L.length;V<ce;V++)L[V]=0}function x(L){m(L,0)}function m(L,V){const ce=a.newAttributes,Y=a.enabledAttributes,pe=a.attributeDivisors;ce[L]=1,Y[L]===0&&(i.enableVertexAttribArray(L),Y[L]=1),pe[L]!==V&&(i.vertexAttribDivisor(L,V),pe[L]=V)}function P(){const L=a.newAttributes,V=a.enabledAttributes;for(let ce=0,Y=V.length;ce<Y;ce++)V[ce]!==L[ce]&&(i.disableVertexAttribArray(ce),V[ce]=0)}function R(L,V,ce,Y,pe,me,le){le===!0?i.vertexAttribIPointer(L,V,ce,pe,me):i.vertexAttribPointer(L,V,ce,Y,pe,me)}function N(L,V,ce,Y){b();const pe=Y.attributes,me=ce.getAttributes(),le=V.defaultAttributeValues;for(const de in me){const oe=me[de];if(oe.location>=0){let be=pe[de];if(be===void 0&&(de==="instanceMatrix"&&L.instanceMatrix&&(be=L.instanceMatrix),de==="instanceColor"&&L.instanceColor&&(be=L.instanceColor)),be!==void 0){const De=be.normalized,Be=be.itemSize,ft=e.get(be);if(ft===void 0)continue;const vt=ft.buffer,fe=ft.type,ye=ft.bytesPerElement,Oe=fe===i.INT||fe===i.UNSIGNED_INT||be.gpuType===ko;if(be.isInterleavedBufferAttribute){const Ue=be.data,it=Ue.stride,at=be.offset;if(Ue.isInstancedInterleavedBuffer){for(let $e=0;$e<oe.locationSize;$e++)m(oe.location+$e,Ue.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let $e=0;$e<oe.locationSize;$e++)x(oe.location+$e);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let $e=0;$e<oe.locationSize;$e++)R(oe.location+$e,Be/oe.locationSize,fe,De,it*ye,(at+Be/oe.locationSize*$e)*ye,Oe)}else{if(be.isInstancedBufferAttribute){for(let Ue=0;Ue<oe.locationSize;Ue++)m(oe.location+Ue,be.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Ue=0;Ue<oe.locationSize;Ue++)x(oe.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let Ue=0;Ue<oe.locationSize;Ue++)R(oe.location+Ue,Be/oe.locationSize,fe,De,Be*ye,Be/oe.locationSize*Ue*ye,Oe)}}else if(le!==void 0){const De=le[de];if(De!==void 0)switch(De.length){case 2:i.vertexAttrib2fv(oe.location,De);break;case 3:i.vertexAttrib3fv(oe.location,De);break;case 4:i.vertexAttrib4fv(oe.location,De);break;default:i.vertexAttrib1fv(oe.location,De)}}}}P()}function q(){$();for(const L in n){const V=n[L];for(const ce in V){const Y=V[ce];for(const pe in Y)g(Y[pe].object),delete Y[pe];delete V[ce]}delete n[L]}}function z(L){if(n[L.id]===void 0)return;const V=n[L.id];for(const ce in V){const Y=V[ce];for(const pe in Y)g(Y[pe].object),delete Y[pe];delete V[ce]}delete n[L.id]}function c(L){for(const V in n){const ce=n[V];if(ce[L.id]===void 0)continue;const Y=ce[L.id];for(const pe in Y)g(Y[pe].object),delete Y[pe];delete ce[L.id]}}function $(){I(),l=!0,a!==r&&(a=r,f(a.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:u,reset:$,resetDefaultState:I,dispose:q,releaseStatesOfGeometry:z,releaseStatesOfProgram:c,initAttributes:b,enableAttribute:x,disableUnusedAttributes:P}}function um(i,e,t){let n;function r(f){n=f}function a(f,g){i.drawArrays(n,f,g),t.update(g,n,1)}function l(f,g,_){_!==0&&(i.drawArraysInstanced(n,f,g,_),t.update(g,n,_))}function u(f,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,g,0,_);let y=0;for(let E=0;E<_;E++)y+=g[E];t.update(y,n,1)}function d(f,g,_,v){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<f.length;E++)l(f[E],g[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(n,f,0,g,0,v,0,_);let E=0;for(let b=0;b<_;b++)E+=g[b];for(let b=0;b<v.length;b++)t.update(E,n,v[b])}}this.setMode=r,this.render=a,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function hm(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(z){return!(z!==pn&&n.convert(z)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(z){const c=z===ts&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==ci&&n.convert(z)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==cn&&!c)}function d(z){if(z==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const g=d(f);g!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",g,"instead."),f=g);const _=t.logarithmicDepthBuffer===!0,v=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),b=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=y>0,q=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:l,textureTypeReadable:u,precision:f,logarithmicDepthBuffer:_,maxTextures:v,maxVertexTextures:y,maxTextureSize:E,maxCubemapSize:b,maxAttributes:x,maxVertexUniforms:m,maxVaryings:P,maxFragmentUniforms:R,vertexTextures:N,maxSamples:q}}function fm(i){const e=this;let t=null,n=0,r=!1,a=!1;const l=new yi,u=new ht,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||n!==0||r;return r=v,n=_.length,y},this.beginShadows=function(){a=!0,g(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,v){t=g(_,v,0)},this.setState=function(_,v,y){const E=_.clippingPlanes,b=_.clipIntersection,x=_.clipShadows,m=i.get(_);if(!r||E===null||E.length===0||a&&!x)a?g(null):f();else{const P=a?0:n,R=P*4;let N=m.clippingState||null;d.value=N,N=g(E,v,R,y);for(let q=0;q!==R;++q)N[q]=t[q];m.clippingState=N,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=P}};function f(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function g(_,v,y,E){const b=_!==null?_.length:0;let x=null;if(b!==0){if(x=d.value,E!==!0||x===null){const m=y+b*4,P=v.matrixWorldInverse;u.getNormalMatrix(P),(x===null||x.length<m)&&(x=new Float32Array(m));for(let R=0,N=y;R!==b;++R,N+=4)l.copy(_[R]).applyMatrix4(P,u),l.normal.toArray(x,N),x[N+3]=l.constant}d.value=x,d.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,x}}function dm(i){let e=new WeakMap;function t(l,u){return u===io?l.mapping=Sr:u===ro&&(l.mapping=Er),l}function n(l){if(l&&l.isTexture){const u=l.mapping;if(u===io||u===ro)if(e.has(l)){const d=e.get(l).texture;return t(d,l.mapping)}else{const d=l.image;if(d&&d.height>0){const f=new bf(d.height);return f.fromEquirectangularTexture(i,l),e.set(l,f),l.addEventListener("dispose",r),t(f.texture,l.mapping)}else return null}}return l}function r(l){const u=l.target;u.removeEventListener("dispose",r);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class Qc extends $c{constructor(e=-1,t=1,n=1,r=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,l=n+e,u=r+t,d=r-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,l=a+f*this.view.width,u-=g*this.view.offsetY,d=u-g*this.view.height}this.projectionMatrix.makeOrthographic(a,l,u,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const vr=4,kl=[.125,.215,.35,.446,.526,.582],zi=20,Va=new Qc,Vl=new _t;let Ga=null,Wa=0,Xa=0,qa=!1;const Oi=(1+Math.sqrt(5))/2,mr=1/Oi,Gl=[new j(-Oi,mr,0),new j(Oi,mr,0),new j(-mr,0,Oi),new j(mr,0,Oi),new j(0,Oi,-mr),new j(0,Oi,mr),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class Wl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ga=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ga,Wa,Xa),this._renderer.xr.enabled=qa,e.scissorTest=!1,Is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Sr||e.mapping===Er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ga=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:ts,format:pn,colorSpace:Ai,depthBuffer:!1},r=Xl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xl(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pm(a)),this._blurMaterial=mm(a,e,t)}return r}_compileMaterial(e){const t=new En(this._lodPlanes[0],e);this._renderer.compile(t,Va)}_sceneToCubeUV(e,t,n,r){const u=new Pn(90,1,t,n),d=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,v=g.toneMapping;g.getClearColor(Vl),g.toneMapping=Ei,g.autoClear=!1;const y=new $o({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),E=new En(new is,y);let b=!1;const x=e.background;x?x.isColor&&(y.color.copy(x),e.background=null,b=!0):(y.color.copy(Vl),b=!0);for(let m=0;m<6;m++){const P=m%3;P===0?(u.up.set(0,d[m],0),u.lookAt(f[m],0,0)):P===1?(u.up.set(0,0,d[m]),u.lookAt(0,f[m],0)):(u.up.set(0,d[m],0),u.lookAt(0,0,f[m]));const R=this._cubeSize;Is(r,P*R,m>2?R:0,R,R),g.setRenderTarget(r),b&&g.render(E,u),g.render(e,u)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=v,g.autoClear=_,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Sr||e.mapping===Er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ql());const a=r?this._cubemapMaterial:this._equirectMaterial,l=new En(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=e;const d=this._cubeSize;Is(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(l,Va)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=Gl[(r-a-1)%Gl.length];this._blur(e,a-1,a,l,u)}t.autoClear=n}_blur(e,t,n,r,a){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,r,"latitudinal",a),this._halfBlur(l,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,l,u){const d=this._renderer,f=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new En(this._lodPlanes[r],f),v=f.uniforms,y=this._sizeLods[n]-1,E=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*zi-1),b=a/E,x=isFinite(a)?1+Math.floor(g*b):zi;x>zi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${zi}`);const m=[];let P=0;for(let c=0;c<zi;++c){const $=c/b,I=Math.exp(-$*$/2);m.push(I),c===0?P+=I:c<x&&(P+=2*I)}for(let c=0;c<m.length;c++)m[c]=m[c]/P;v.envMap.value=e.texture,v.samples.value=x,v.weights.value=m,v.latitudinal.value=l==="latitudinal",u&&(v.poleAxis.value=u);const{_lodMax:R}=this;v.dTheta.value=E,v.mipInt.value=R-n;const N=this._sizeLods[r],q=3*N*(r>R-vr?r-R+vr:0),z=4*(this._cubeSize-N);Is(t,q,z,3*N,2*N),d.setRenderTarget(t),d.render(_,Va)}}function pm(i){const e=[],t=[],n=[];let r=i;const a=i-vr+1+kl.length;for(let l=0;l<a;l++){const u=Math.pow(2,r);t.push(u);let d=1/u;l>i-vr?d=kl[l-i+vr-1]:l===0&&(d=0),n.push(d);const f=1/(u-2),g=-f,_=1+f,v=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,E=6,b=3,x=2,m=1,P=new Float32Array(b*E*y),R=new Float32Array(x*E*y),N=new Float32Array(m*E*y);for(let z=0;z<y;z++){const c=z%3*2/3-1,$=z>2?0:-1,I=[c,$,0,c+2/3,$,0,c+2/3,$+1,0,c,$,0,c+2/3,$+1,0,c,$+1,0];P.set(I,b*E*z),R.set(v,x*E*z);const L=[z,z,z,z,z,z];N.set(L,m*E*z)}const q=new bn;q.setAttribute("position",new vn(P,b)),q.setAttribute("uv",new vn(R,x)),q.setAttribute("faceIndex",new vn(N,m)),e.push(q),r>vr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Xl(i,e,t){const n=new Ti(i,e,t);return n.texture.mapping=na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Is(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function mm(i,e,t){const n=new Float32Array(zi),r=new j(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zo(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function ql(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zo(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function jl(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Zo(){return`

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
	`}function gm(i){let e=new WeakMap,t=null;function n(u){if(u&&u.isTexture){const d=u.mapping,f=d===io||d===ro,g=d===Sr||d===Er;if(f||g){let _=e.get(u);const v=_!==void 0?_.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==v)return t===null&&(t=new Wl(i)),_=f?t.fromEquirectangular(u,_):t.fromCubemap(u,_),_.texture.pmremVersion=u.pmremVersion,e.set(u,_),_.texture;if(_!==void 0)return _.texture;{const y=u.image;return f&&y&&y.height>0||g&&y&&r(y)?(t===null&&(t=new Wl(i)),_=f?t.fromEquirectangular(u):t.fromCubemap(u),_.texture.pmremVersion=u.pmremVersion,e.set(u,_),u.addEventListener("dispose",a),_.texture):null}}}return u}function r(u){let d=0;const f=6;for(let g=0;g<f;g++)u[g]!==void 0&&d++;return d===f}function a(u){const d=u.target;d.removeEventListener("dispose",a);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function _m(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Kr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function vm(i,e,t,n){const r={},a=new WeakMap;function l(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);for(const E in v.morphAttributes){const b=v.morphAttributes[E];for(let x=0,m=b.length;x<m;x++)e.remove(b[x])}v.removeEventListener("dispose",l),delete r[v.id];const y=a.get(v);y&&(e.remove(y),a.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function u(_,v){return r[v.id]===!0||(v.addEventListener("dispose",l),r[v.id]=!0,t.memory.geometries++),v}function d(_){const v=_.attributes;for(const E in v)e.update(v[E],i.ARRAY_BUFFER);const y=_.morphAttributes;for(const E in y){const b=y[E];for(let x=0,m=b.length;x<m;x++)e.update(b[x],i.ARRAY_BUFFER)}}function f(_){const v=[],y=_.index,E=_.attributes.position;let b=0;if(y!==null){const P=y.array;b=y.version;for(let R=0,N=P.length;R<N;R+=3){const q=P[R+0],z=P[R+1],c=P[R+2];v.push(q,z,z,c,c,q)}}else if(E!==void 0){const P=E.array;b=E.version;for(let R=0,N=P.length/3-1;R<N;R+=3){const q=R+0,z=R+1,c=R+2;v.push(q,z,z,c,c,q)}}else return;const x=new(Vc(v)?Ko:jc)(v,1);x.version=b;const m=a.get(_);m&&e.remove(m),a.set(_,x)}function g(_){const v=a.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&f(_)}else f(_);return a.get(_)}return{get:u,update:d,getWireframeAttribute:g}}function xm(i,e,t){let n;function r(v){n=v}let a,l;function u(v){a=v.type,l=v.bytesPerElement}function d(v,y){i.drawElements(n,y,a,v*l),t.update(y,n,1)}function f(v,y,E){E!==0&&(i.drawElementsInstanced(n,y,a,v*l,E),t.update(y,n,E))}function g(v,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,y,0,a,v,0,E);let x=0;for(let m=0;m<E;m++)x+=y[m];t.update(x,n,1)}function _(v,y,E,b){if(E===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<v.length;m++)f(v[m]/l,y[m],b[m]);else{x.multiDrawElementsInstancedWEBGL(n,y,0,a,v,0,b,0,E);let m=0;for(let P=0;P<E;P++)m+=y[P];for(let P=0;P<b.length;P++)t.update(m,n,b[P])}}this.setMode=r,this.setIndex=u,this.render=d,this.renderInstances=f,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function ym(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,l,u){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=u*(a/3);break;case i.LINES:t.lines+=u*(a/2);break;case i.LINE_STRIP:t.lines+=u*(a-1);break;case i.LINE_LOOP:t.lines+=u*a;break;case i.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Mm(i,e,t){const n=new WeakMap,r=new Jt;function a(l,u,d){const f=l.morphTargetInfluences,g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let v=n.get(u);if(v===void 0||v.count!==_){let L=function(){$.dispose(),n.delete(u),u.removeEventListener("dispose",L)};var y=L;v!==void 0&&v.texture.dispose();const E=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,m=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],R=u.morphAttributes.color||[];let N=0;E===!0&&(N=1),b===!0&&(N=2),x===!0&&(N=3);let q=u.attributes.position.count*N,z=1;q>e.maxTextureSize&&(z=Math.ceil(q/e.maxTextureSize),q=e.maxTextureSize);const c=new Float32Array(q*z*4*_),$=new Wc(c,q,z,_);$.type=cn,$.needsUpdate=!0;const I=N*4;for(let V=0;V<_;V++){const ce=m[V],Y=P[V],pe=R[V],me=q*z*4*V;for(let le=0;le<ce.count;le++){const de=le*I;E===!0&&(r.fromBufferAttribute(ce,le),c[me+de+0]=r.x,c[me+de+1]=r.y,c[me+de+2]=r.z,c[me+de+3]=0),b===!0&&(r.fromBufferAttribute(Y,le),c[me+de+4]=r.x,c[me+de+5]=r.y,c[me+de+6]=r.z,c[me+de+7]=0),x===!0&&(r.fromBufferAttribute(pe,le),c[me+de+8]=r.x,c[me+de+9]=r.y,c[me+de+10]=r.z,c[me+de+11]=pe.itemSize===4?r.w:1)}}v={count:_,texture:$,size:new lt(q,z)},n.set(u,v),u.addEventListener("dispose",L)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",l.morphTexture,t);else{let E=0;for(let x=0;x<f.length;x++)E+=f[x];const b=u.morphTargetsRelative?1:1-E;d.getUniforms().setValue(i,"morphTargetBaseInfluence",b),d.getUniforms().setValue(i,"morphTargetInfluences",f)}d.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}return{update:a}}function Sm(i,e,t,n){let r=new WeakMap;function a(d){const f=n.render.frame,g=d.geometry,_=e.get(d,g);if(r.get(_)!==f&&(e.update(_),r.set(_,f)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),r.get(d)!==f&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),r.set(d,f))),d.isSkinnedMesh){const v=d.skeleton;r.get(v)!==f&&(v.update(),r.set(v,f))}return _}function l(){r=new WeakMap}function u(d){const f=d.target;f.removeEventListener("dispose",u),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:l}}class eu extends mn{constructor(e,t,n,r,a,l,u,d,f,g=yr){if(g!==yr&&g!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&g===yr&&(n=ki),n===void 0&&g===Tr&&(n=br),super(null,r,a,l,u,d,g,n,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:Qt,this.minFilter=d!==void 0?d:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const tu=new mn,Yl=new eu(1,1),nu=new Wc,iu=new lf,ru=new Kc,$l=[],Kl=[],Zl=new Float32Array(16),Jl=new Float32Array(9),Ql=new Float32Array(4);function Rr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=$l[r];if(a===void 0&&(a=new Float32Array(r),$l[r]=a),e!==0){n.toArray(a,0);for(let l=1,u=0;l!==e;++l)u+=t,i[l].toArray(a,u)}return a}function Yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function $t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function sa(i,e){let t=Kl[e];t===void 0&&(t=new Int32Array(e),Kl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Em(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2fv(this.addr,e),$t(t,e)}}function Tm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;i.uniform3fv(this.addr,e),$t(t,e)}}function Am(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4fv(this.addr,e),$t(t,e)}}function wm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;Ql.set(n),i.uniformMatrix2fv(this.addr,!1,Ql),$t(t,n)}}function Cm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;Jl.set(n),i.uniformMatrix3fv(this.addr,!1,Jl),$t(t,n)}}function Rm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;Zl.set(n),i.uniformMatrix4fv(this.addr,!1,Zl),$t(t,n)}}function Pm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2iv(this.addr,e),$t(t,e)}}function Dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3iv(this.addr,e),$t(t,e)}}function Im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4iv(this.addr,e),$t(t,e)}}function Um(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2uiv(this.addr,e),$t(t,e)}}function Fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3uiv(this.addr,e),$t(t,e)}}function Om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4uiv(this.addr,e),$t(t,e)}}function Bm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(Yl.compareFunction=kc,a=Yl):a=tu,t.setTexture2D(e||a,r)}function zm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||iu,r)}function Hm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||ru,r)}function km(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||nu,r)}function Vm(i){switch(i){case 5126:return Em;case 35664:return bm;case 35665:return Tm;case 35666:return Am;case 35674:return wm;case 35675:return Cm;case 35676:return Rm;case 5124:case 35670:return Pm;case 35667:case 35671:return Lm;case 35668:case 35672:return Dm;case 35669:case 35673:return Im;case 5125:return Um;case 36294:return Nm;case 36295:return Fm;case 36296:return Om;case 35678:case 36198:case 36298:case 36306:case 35682:return Bm;case 35679:case 36299:case 36307:return zm;case 35680:case 36300:case 36308:case 36293:return Hm;case 36289:case 36303:case 36311:case 36292:return km}}function Gm(i,e){i.uniform1fv(this.addr,e)}function Wm(i,e){const t=Rr(e,this.size,2);i.uniform2fv(this.addr,t)}function Xm(i,e){const t=Rr(e,this.size,3);i.uniform3fv(this.addr,t)}function qm(i,e){const t=Rr(e,this.size,4);i.uniform4fv(this.addr,t)}function jm(i,e){const t=Rr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ym(i,e){const t=Rr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $m(i,e){const t=Rr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Km(i,e){i.uniform1iv(this.addr,e)}function Zm(i,e){i.uniform2iv(this.addr,e)}function Jm(i,e){i.uniform3iv(this.addr,e)}function Qm(i,e){i.uniform4iv(this.addr,e)}function eg(i,e){i.uniform1uiv(this.addr,e)}function tg(i,e){i.uniform2uiv(this.addr,e)}function ng(i,e){i.uniform3uiv(this.addr,e)}function ig(i,e){i.uniform4uiv(this.addr,e)}function rg(i,e,t){const n=this.cache,r=e.length,a=sa(t,r);Yt(n,a)||(i.uniform1iv(this.addr,a),$t(n,a));for(let l=0;l!==r;++l)t.setTexture2D(e[l]||tu,a[l])}function sg(i,e,t){const n=this.cache,r=e.length,a=sa(t,r);Yt(n,a)||(i.uniform1iv(this.addr,a),$t(n,a));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||iu,a[l])}function ag(i,e,t){const n=this.cache,r=e.length,a=sa(t,r);Yt(n,a)||(i.uniform1iv(this.addr,a),$t(n,a));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||ru,a[l])}function og(i,e,t){const n=this.cache,r=e.length,a=sa(t,r);Yt(n,a)||(i.uniform1iv(this.addr,a),$t(n,a));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||nu,a[l])}function lg(i){switch(i){case 5126:return Gm;case 35664:return Wm;case 35665:return Xm;case 35666:return qm;case 35674:return jm;case 35675:return Ym;case 35676:return $m;case 5124:case 35670:return Km;case 35667:case 35671:return Zm;case 35668:case 35672:return Jm;case 35669:case 35673:return Qm;case 5125:return eg;case 36294:return tg;case 36295:return ng;case 36296:return ig;case 35678:case 36198:case 36298:case 36306:case 35682:return rg;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return ag;case 36289:case 36303:case 36311:case 36292:return og}}class cg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Vm(t.type)}}class ug{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lg(t.type)}}class hg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,l=r.length;a!==l;++a){const u=r[a];u.setValue(e,t[u.id],n)}}}const ja=/(\w+)(\])?(\[|\.)?/g;function ec(i,e){i.seq.push(e),i.map[e.id]=e}function fg(i,e,t){const n=i.name,r=n.length;for(ja.lastIndex=0;;){const a=ja.exec(n),l=ja.lastIndex;let u=a[1];const d=a[2]==="]",f=a[3];if(d&&(u=u|0),f===void 0||f==="["&&l+2===r){ec(t,f===void 0?new cg(u,i,e):new ug(u,i,e));break}else{let _=t.map[u];_===void 0&&(_=new hg(u),ec(t,_)),t=_}}}class qs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),l=e.getUniformLocation(t,a.name);fg(a,l,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,l=t.length;a!==l;++a){const u=t[a],d=n[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const l=e[r];l.id in t&&n.push(l)}return n}}function tc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const dg=37297;let pg=0;function mg(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let l=r;l<a;l++){const u=l+1;n.push(`${u===e?">":" "} ${u}: ${t[l]}`)}return n.join(`
`)}function gg(i){const e=Ct.getPrimaries(Ct.workingColorSpace),t=Ct.getPrimaries(i);let n;switch(e===t?n="":e===Zs&&t===Ks?n="LinearDisplayP3ToLinearSRGB":e===Ks&&t===Zs&&(n="LinearSRGBToLinearDisplayP3"),i){case Ai:case ia:return[n,"LinearTransferOETF"];case Xn:case jo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function nc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+mg(i.getShaderSource(e),l)}else return r}function _g(i,e){const t=gg(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function vg(i,e){let t;switch(e){case xh:t="Linear";break;case yh:t="Reinhard";break;case Mh:t="OptimizedCineon";break;case Sh:t="ACESFilmic";break;case bh:t="AgX";break;case Th:t="Neutral";break;case Eh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Us=new j;function xg(){Ct.getLuminanceCoefficients(Us);const i=Us.x.toFixed(4),e=Us.y.toFixed(4),t=Us.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function Mg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Sg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),l=a.name;let u=1;a.type===i.FLOAT_MAT2&&(u=2),a.type===i.FLOAT_MAT3&&(u=3),a.type===i.FLOAT_MAT4&&(u=4),t[l]={type:a.type,location:i.getAttribLocation(e,l),locationSize:u}}return t}function Wr(i){return i!==""}function ic(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Eg=/^[ \t]*#include +<([\w\d./]+)>/gm;function No(i){return i.replace(Eg,Tg)}const bg=new Map;function Tg(i,e){let t=ut[e];if(t===void 0){const n=bg.get(e);if(n!==void 0)t=ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return No(t)}const Ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sc(i){return i.replace(Ag,wg)}function wg(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function ac(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Cg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function Rg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Sr:case Er:e="ENVMAP_TYPE_CUBE";break;case na:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Pg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Er:e="ENVMAP_MODE_REFRACTION";break}return e}function Lg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ho:e="ENVMAP_BLENDING_MULTIPLY";break;case _h:e="ENVMAP_BLENDING_MIX";break;case vh:e="ENVMAP_BLENDING_ADD";break}return e}function Dg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ig(i,e,t,n){const r=i.getContext(),a=t.defines;let l=t.vertexShader,u=t.fragmentShader;const d=Cg(t),f=Rg(t),g=Pg(t),_=Lg(t),v=Dg(t),y=yg(t),E=Mg(a),b=r.createProgram();let x,m,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Wr).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Wr).join(`
`),m.length>0&&(m+=`
`)):(x=[ac(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),m=[ac(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+g:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?ut.tonemapping_pars_fragment:"",t.toneMapping!==Ei?vg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,_g("linearToOutputTexel",t.outputColorSpace),xg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wr).join(`
`)),l=No(l),l=ic(l,t),l=rc(l,t),u=No(u),u=ic(u,t),u=rc(u,t),l=sc(l),u=sc(u),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===Uo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const R=P+x+l,N=P+m+u,q=tc(r,r.VERTEX_SHADER,R),z=tc(r,r.FRAGMENT_SHADER,N);r.attachShader(b,q),r.attachShader(b,z),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function c(V){if(i.debug.checkShaderErrors){const ce=r.getProgramInfoLog(b).trim(),Y=r.getShaderInfoLog(q).trim(),pe=r.getShaderInfoLog(z).trim();let me=!0,le=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(me=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,q,z);else{const de=nc(r,q,"vertex"),oe=nc(r,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ce+`
`+de+`
`+oe)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(Y===""||pe==="")&&(le=!1);le&&(V.diagnostics={runnable:me,programLog:ce,vertexShader:{log:Y,prefix:x},fragmentShader:{log:pe,prefix:m}})}r.deleteShader(q),r.deleteShader(z),$=new qs(r,b),I=Sg(r,b)}let $;this.getUniforms=function(){return $===void 0&&c(this),$};let I;this.getAttributes=function(){return I===void 0&&c(this),I};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(b,dg)),L},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pg++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=q,this.fragmentShader=z,this}let Ug=0;class Ng{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Fg(e),t.set(e,n)),n}}class Fg{constructor(e){this.id=Ug++,this.code=e,this.usedTimes=0}}function Og(i,e,t,n,r,a,l){const u=new Xc,d=new Ng,f=new Set,g=[],_=r.logarithmicDepthBuffer,v=r.vertexTextures;let y=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(I){return f.add(I),I===0?"uv":`uv${I}`}function x(I,L,V,ce,Y){const pe=ce.fog,me=Y.geometry,le=I.isMeshStandardMaterial?ce.environment:null,de=(I.isMeshStandardMaterial?t:e).get(I.envMap||le),oe=de&&de.mapping===na?de.image.height:null,be=E[I.type];I.precision!==null&&(y=r.getMaxPrecision(I.precision),y!==I.precision&&console.warn("THREE.WebGLProgram.getParameters:",I.precision,"not supported, using",y,"instead."));const De=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,Be=De!==void 0?De.length:0;let ft=0;me.morphAttributes.position!==void 0&&(ft=1),me.morphAttributes.normal!==void 0&&(ft=2),me.morphAttributes.color!==void 0&&(ft=3);let vt,fe,ye,Oe;if(be){const dt=qn[be];vt=dt.vertexShader,fe=dt.fragmentShader}else vt=I.vertexShader,fe=I.fragmentShader,d.update(I),ye=d.getVertexShaderID(I),Oe=d.getFragmentShaderID(I);const Ue=i.getRenderTarget(),it=Y.isInstancedMesh===!0,at=Y.isBatchedMesh===!0,$e=!!I.map,Lt=!!I.matcap,H=!!de,Dt=!!I.aoMap,xt=!!I.lightMap,Et=!!I.bumpMap,He=!!I.normalMap,It=!!I.displacementMap,Xe=!!I.emissiveMap,tt=!!I.metalnessMap,O=!!I.roughnessMap,w=I.anisotropy>0,ee=I.clearcoat>0,ge=I.dispersion>0,ve=I.iridescence>0,K=I.sheen>0,Ne=I.transmission>0,Te=w&&!!I.anisotropyMap,Ie=ee&&!!I.clearcoatMap,rt=ee&&!!I.clearcoatNormalMap,Me=ee&&!!I.clearcoatRoughnessMap,Ce=ve&&!!I.iridescenceMap,ot=ve&&!!I.iridescenceThicknessMap,We=K&&!!I.sheenColorMap,we=K&&!!I.sheenRoughnessMap,qe=!!I.specularMap,et=!!I.specularColorMap,Rt=!!I.specularIntensityMap,T=Ne&&!!I.transmissionMap,J=Ne&&!!I.thicknessMap,te=!!I.gradientMap,se=!!I.alphaMap,_e=I.alphaTest>0,Ve=!!I.alphaHash,Ze=!!I.extensions;let yt=Ei;I.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(yt=i.toneMapping);const Mt={shaderID:be,shaderType:I.type,shaderName:I.name,vertexShader:vt,fragmentShader:fe,defines:I.defines,customVertexShaderID:ye,customFragmentShaderID:Oe,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:y,batching:at,batchingColor:at&&Y._colorsTexture!==null,instancing:it,instancingColor:it&&Y.instanceColor!==null,instancingMorph:it&&Y.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Ue===null?i.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:Ai,alphaToCoverage:!!I.alphaToCoverage,map:$e,matcap:Lt,envMap:H,envMapMode:H&&de.mapping,envMapCubeUVHeight:oe,aoMap:Dt,lightMap:xt,bumpMap:Et,normalMap:He,displacementMap:v&&It,emissiveMap:Xe,normalMapObjectSpace:He&&I.normalMapType===Rh,normalMapTangentSpace:He&&I.normalMapType===Hc,metalnessMap:tt,roughnessMap:O,anisotropy:w,anisotropyMap:Te,clearcoat:ee,clearcoatMap:Ie,clearcoatNormalMap:rt,clearcoatRoughnessMap:Me,dispersion:ge,iridescence:ve,iridescenceMap:Ce,iridescenceThicknessMap:ot,sheen:K,sheenColorMap:We,sheenRoughnessMap:we,specularMap:qe,specularColorMap:et,specularIntensityMap:Rt,transmission:Ne,transmissionMap:T,thicknessMap:J,gradientMap:te,opaque:I.transparent===!1&&I.blending===xr&&I.alphaToCoverage===!1,alphaMap:se,alphaTest:_e,alphaHash:Ve,combine:I.combine,mapUv:$e&&b(I.map.channel),aoMapUv:Dt&&b(I.aoMap.channel),lightMapUv:xt&&b(I.lightMap.channel),bumpMapUv:Et&&b(I.bumpMap.channel),normalMapUv:He&&b(I.normalMap.channel),displacementMapUv:It&&b(I.displacementMap.channel),emissiveMapUv:Xe&&b(I.emissiveMap.channel),metalnessMapUv:tt&&b(I.metalnessMap.channel),roughnessMapUv:O&&b(I.roughnessMap.channel),anisotropyMapUv:Te&&b(I.anisotropyMap.channel),clearcoatMapUv:Ie&&b(I.clearcoatMap.channel),clearcoatNormalMapUv:rt&&b(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&b(I.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&b(I.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&b(I.iridescenceThicknessMap.channel),sheenColorMapUv:We&&b(I.sheenColorMap.channel),sheenRoughnessMapUv:we&&b(I.sheenRoughnessMap.channel),specularMapUv:qe&&b(I.specularMap.channel),specularColorMapUv:et&&b(I.specularColorMap.channel),specularIntensityMapUv:Rt&&b(I.specularIntensityMap.channel),transmissionMapUv:T&&b(I.transmissionMap.channel),thicknessMapUv:J&&b(I.thicknessMap.channel),alphaMapUv:se&&b(I.alphaMap.channel),vertexTangents:!!me.attributes.tangent&&(He||w),vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!me.attributes.uv&&($e||se),fog:!!pe,useFog:I.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:I.flatShading===!0,sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:_,skinning:Y.isSkinnedMesh===!0,morphTargets:me.morphAttributes.position!==void 0,morphNormals:me.morphAttributes.normal!==void 0,morphColors:me.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:ft,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:I.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:yt,decodeVideoTexture:$e&&I.map.isVideoTexture===!0&&Ct.getTransfer(I.map.colorSpace)===Ot,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===ai,flipSided:I.side===xn,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:Ze&&I.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&I.extensions.multiDraw===!0||at)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return Mt.vertexUv1s=f.has(1),Mt.vertexUv2s=f.has(2),Mt.vertexUv3s=f.has(3),f.clear(),Mt}function m(I){const L=[];if(I.shaderID?L.push(I.shaderID):(L.push(I.customVertexShaderID),L.push(I.customFragmentShaderID)),I.defines!==void 0)for(const V in I.defines)L.push(V),L.push(I.defines[V]);return I.isRawShaderMaterial===!1&&(P(L,I),R(L,I),L.push(i.outputColorSpace)),L.push(I.customProgramCacheKey),L.join()}function P(I,L){I.push(L.precision),I.push(L.outputColorSpace),I.push(L.envMapMode),I.push(L.envMapCubeUVHeight),I.push(L.mapUv),I.push(L.alphaMapUv),I.push(L.lightMapUv),I.push(L.aoMapUv),I.push(L.bumpMapUv),I.push(L.normalMapUv),I.push(L.displacementMapUv),I.push(L.emissiveMapUv),I.push(L.metalnessMapUv),I.push(L.roughnessMapUv),I.push(L.anisotropyMapUv),I.push(L.clearcoatMapUv),I.push(L.clearcoatNormalMapUv),I.push(L.clearcoatRoughnessMapUv),I.push(L.iridescenceMapUv),I.push(L.iridescenceThicknessMapUv),I.push(L.sheenColorMapUv),I.push(L.sheenRoughnessMapUv),I.push(L.specularMapUv),I.push(L.specularColorMapUv),I.push(L.specularIntensityMapUv),I.push(L.transmissionMapUv),I.push(L.thicknessMapUv),I.push(L.combine),I.push(L.fogExp2),I.push(L.sizeAttenuation),I.push(L.morphTargetsCount),I.push(L.morphAttributeCount),I.push(L.numDirLights),I.push(L.numPointLights),I.push(L.numSpotLights),I.push(L.numSpotLightMaps),I.push(L.numHemiLights),I.push(L.numRectAreaLights),I.push(L.numDirLightShadows),I.push(L.numPointLightShadows),I.push(L.numSpotLightShadows),I.push(L.numSpotLightShadowsWithMaps),I.push(L.numLightProbes),I.push(L.shadowMapType),I.push(L.toneMapping),I.push(L.numClippingPlanes),I.push(L.numClipIntersection),I.push(L.depthPacking)}function R(I,L){u.disableAll(),L.supportsVertexTextures&&u.enable(0),L.instancing&&u.enable(1),L.instancingColor&&u.enable(2),L.instancingMorph&&u.enable(3),L.matcap&&u.enable(4),L.envMap&&u.enable(5),L.normalMapObjectSpace&&u.enable(6),L.normalMapTangentSpace&&u.enable(7),L.clearcoat&&u.enable(8),L.iridescence&&u.enable(9),L.alphaTest&&u.enable(10),L.vertexColors&&u.enable(11),L.vertexAlphas&&u.enable(12),L.vertexUv1s&&u.enable(13),L.vertexUv2s&&u.enable(14),L.vertexUv3s&&u.enable(15),L.vertexTangents&&u.enable(16),L.anisotropy&&u.enable(17),L.alphaHash&&u.enable(18),L.batching&&u.enable(19),L.dispersion&&u.enable(20),L.batchingColor&&u.enable(21),I.push(u.mask),u.disableAll(),L.fog&&u.enable(0),L.useFog&&u.enable(1),L.flatShading&&u.enable(2),L.logarithmicDepthBuffer&&u.enable(3),L.skinning&&u.enable(4),L.morphTargets&&u.enable(5),L.morphNormals&&u.enable(6),L.morphColors&&u.enable(7),L.premultipliedAlpha&&u.enable(8),L.shadowMapEnabled&&u.enable(9),L.doubleSided&&u.enable(10),L.flipSided&&u.enable(11),L.useDepthPacking&&u.enable(12),L.dithering&&u.enable(13),L.transmission&&u.enable(14),L.sheen&&u.enable(15),L.opaque&&u.enable(16),L.pointsUvs&&u.enable(17),L.decodeVideoTexture&&u.enable(18),L.alphaToCoverage&&u.enable(19),I.push(u.mask)}function N(I){const L=E[I.type];let V;if(L){const ce=qn[L];V=yf.clone(ce.uniforms)}else V=I.uniforms;return V}function q(I,L){let V;for(let ce=0,Y=g.length;ce<Y;ce++){const pe=g[ce];if(pe.cacheKey===L){V=pe,++V.usedTimes;break}}return V===void 0&&(V=new Ig(i,L,I,a),g.push(V)),V}function z(I){if(--I.usedTimes===0){const L=g.indexOf(I);g[L]=g[g.length-1],g.pop(),I.destroy()}}function c(I){d.remove(I)}function $(){d.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:N,acquireProgram:q,releaseProgram:z,releaseShaderCache:c,programs:g,dispose:$}}function Bg(){let i=new WeakMap;function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function t(a){i.delete(a)}function n(a,l,u){i.get(a)[l]=u}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function zg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function oc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function lc(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function l(_,v,y,E,b,x){let m=i[e];return m===void 0?(m={id:_.id,object:_,geometry:v,material:y,groupOrder:E,renderOrder:_.renderOrder,z:b,group:x},i[e]=m):(m.id=_.id,m.object=_,m.geometry=v,m.material=y,m.groupOrder=E,m.renderOrder=_.renderOrder,m.z=b,m.group=x),e++,m}function u(_,v,y,E,b,x){const m=l(_,v,y,E,b,x);y.transmission>0?n.push(m):y.transparent===!0?r.push(m):t.push(m)}function d(_,v,y,E,b,x){const m=l(_,v,y,E,b,x);y.transmission>0?n.unshift(m):y.transparent===!0?r.unshift(m):t.unshift(m)}function f(_,v){t.length>1&&t.sort(_||zg),n.length>1&&n.sort(v||oc),r.length>1&&r.sort(v||oc)}function g(){for(let _=e,v=i.length;_<v;_++){const y=i[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:u,unshift:d,finish:g,sort:f}}function Hg(){let i=new WeakMap;function e(n,r){const a=i.get(n);let l;return a===void 0?(l=new lc,i.set(n,[l])):r>=a.length?(l=new lc,a.push(l)):l=a[r],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function kg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new _t};break;case"SpotLight":t={position:new j,direction:new j,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new j,halfWidth:new j,halfHeight:new j};break}return i[e.id]=t,t}}}function Vg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Gg=0;function Wg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Xg(i){const e=new kg,t=Vg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new j);const r=new j,a=new Xt,l=new Xt;function u(f){let g=0,_=0,v=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let y=0,E=0,b=0,x=0,m=0,P=0,R=0,N=0,q=0,z=0,c=0;f.sort(Wg);for(let I=0,L=f.length;I<L;I++){const V=f[I],ce=V.color,Y=V.intensity,pe=V.distance,me=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=ce.r*Y,_+=ce.g*Y,v+=ce.b*Y;else if(V.isLightProbe){for(let le=0;le<9;le++)n.probe[le].addScaledVector(V.sh.coefficients[le],Y);c++}else if(V.isDirectionalLight){const le=e.get(V);if(le.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const de=V.shadow,oe=t.get(V);oe.shadowIntensity=de.intensity,oe.shadowBias=de.bias,oe.shadowNormalBias=de.normalBias,oe.shadowRadius=de.radius,oe.shadowMapSize=de.mapSize,n.directionalShadow[y]=oe,n.directionalShadowMap[y]=me,n.directionalShadowMatrix[y]=V.shadow.matrix,P++}n.directional[y]=le,y++}else if(V.isSpotLight){const le=e.get(V);le.position.setFromMatrixPosition(V.matrixWorld),le.color.copy(ce).multiplyScalar(Y),le.distance=pe,le.coneCos=Math.cos(V.angle),le.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),le.decay=V.decay,n.spot[b]=le;const de=V.shadow;if(V.map&&(n.spotLightMap[q]=V.map,q++,de.updateMatrices(V),V.castShadow&&z++),n.spotLightMatrix[b]=de.matrix,V.castShadow){const oe=t.get(V);oe.shadowIntensity=de.intensity,oe.shadowBias=de.bias,oe.shadowNormalBias=de.normalBias,oe.shadowRadius=de.radius,oe.shadowMapSize=de.mapSize,n.spotShadow[b]=oe,n.spotShadowMap[b]=me,N++}b++}else if(V.isRectAreaLight){const le=e.get(V);le.color.copy(ce).multiplyScalar(Y),le.halfWidth.set(V.width*.5,0,0),le.halfHeight.set(0,V.height*.5,0),n.rectArea[x]=le,x++}else if(V.isPointLight){const le=e.get(V);if(le.color.copy(V.color).multiplyScalar(V.intensity),le.distance=V.distance,le.decay=V.decay,V.castShadow){const de=V.shadow,oe=t.get(V);oe.shadowIntensity=de.intensity,oe.shadowBias=de.bias,oe.shadowNormalBias=de.normalBias,oe.shadowRadius=de.radius,oe.shadowMapSize=de.mapSize,oe.shadowCameraNear=de.camera.near,oe.shadowCameraFar=de.camera.far,n.pointShadow[E]=oe,n.pointShadowMap[E]=me,n.pointShadowMatrix[E]=V.shadow.matrix,R++}n.point[E]=le,E++}else if(V.isHemisphereLight){const le=e.get(V);le.skyColor.copy(V.color).multiplyScalar(Y),le.groundColor.copy(V.groundColor).multiplyScalar(Y),n.hemi[m]=le,m++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=g,n.ambient[1]=_,n.ambient[2]=v;const $=n.hash;($.directionalLength!==y||$.pointLength!==E||$.spotLength!==b||$.rectAreaLength!==x||$.hemiLength!==m||$.numDirectionalShadows!==P||$.numPointShadows!==R||$.numSpotShadows!==N||$.numSpotMaps!==q||$.numLightProbes!==c)&&(n.directional.length=y,n.spot.length=b,n.rectArea.length=x,n.point.length=E,n.hemi.length=m,n.directionalShadow.length=P,n.directionalShadowMap.length=P,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=N,n.spotShadowMap.length=N,n.directionalShadowMatrix.length=P,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=N+q-z,n.spotLightMap.length=q,n.numSpotLightShadowsWithMaps=z,n.numLightProbes=c,$.directionalLength=y,$.pointLength=E,$.spotLength=b,$.rectAreaLength=x,$.hemiLength=m,$.numDirectionalShadows=P,$.numPointShadows=R,$.numSpotShadows=N,$.numSpotMaps=q,$.numLightProbes=c,n.version=Gg++)}function d(f,g){let _=0,v=0,y=0,E=0,b=0;const x=g.matrixWorldInverse;for(let m=0,P=f.length;m<P;m++){const R=f[m];if(R.isDirectionalLight){const N=n.directional[_];N.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(x),_++}else if(R.isSpotLight){const N=n.spot[y];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(x),N.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(x),y++}else if(R.isRectAreaLight){const N=n.rectArea[E];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(x),l.identity(),a.copy(R.matrixWorld),a.premultiply(x),l.extractRotation(a),N.halfWidth.set(R.width*.5,0,0),N.halfHeight.set(0,R.height*.5,0),N.halfWidth.applyMatrix4(l),N.halfHeight.applyMatrix4(l),E++}else if(R.isPointLight){const N=n.point[v];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(x),v++}else if(R.isHemisphereLight){const N=n.hemi[b];N.direction.setFromMatrixPosition(R.matrixWorld),N.direction.transformDirection(x),b++}}}return{setup:u,setupView:d,state:n}}function cc(i){const e=new Xg(i),t=[],n=[];function r(g){f.camera=g,t.length=0,n.length=0}function a(g){t.push(g)}function l(g){n.push(g)}function u(){e.setup(t)}function d(g){e.setupView(t,g)}const f={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:f,setupLights:u,setupLightsView:d,pushLight:a,pushShadow:l}}function qg(i){let e=new WeakMap;function t(r,a=0){const l=e.get(r);let u;return l===void 0?(u=new cc(i),e.set(r,[u])):a>=l.length?(u=new cc(i),l.push(u)):u=l[a],u}function n(){e=new WeakMap}return{get:t,dispose:n}}class jg extends ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Yg extends ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $g=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kg=`uniform sampler2D shadow_pass;
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
}`;function Zg(i,e,t){let n=new Zc;const r=new lt,a=new lt,l=new Jt,u=new jg({depthPacking:Ch}),d=new Yg,f={},g=t.maxTextureSize,_={[bi]:xn,[xn]:bi,[ai]:ai},v=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:$g,fragmentShader:Kg}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new bn;E.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new En(E,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rc;let m=this.type;this.render=function(z,c,$){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||z.length===0)return;const I=i.getRenderTarget(),L=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),ce=i.state;ce.setBlending(Si),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const Y=m!==si&&this.type===si,pe=m===si&&this.type!==si;for(let me=0,le=z.length;me<le;me++){const de=z[me],oe=de.shadow;if(oe===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(oe.autoUpdate===!1&&oe.needsUpdate===!1)continue;r.copy(oe.mapSize);const be=oe.getFrameExtents();if(r.multiply(be),a.copy(oe.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(a.x=Math.floor(g/be.x),r.x=a.x*be.x,oe.mapSize.x=a.x),r.y>g&&(a.y=Math.floor(g/be.y),r.y=a.y*be.y,oe.mapSize.y=a.y)),oe.map===null||Y===!0||pe===!0){const Be=this.type!==si?{minFilter:Qt,magFilter:Qt}:{};oe.map!==null&&oe.map.dispose(),oe.map=new Ti(r.x,r.y,Be),oe.map.texture.name=de.name+".shadowMap",oe.camera.updateProjectionMatrix()}i.setRenderTarget(oe.map),i.clear();const De=oe.getViewportCount();for(let Be=0;Be<De;Be++){const ft=oe.getViewport(Be);l.set(a.x*ft.x,a.y*ft.y,a.x*ft.z,a.y*ft.w),ce.viewport(l),oe.updateMatrices(de,Be),n=oe.getFrustum(),N(c,$,oe.camera,de,this.type)}oe.isPointLightShadow!==!0&&this.type===si&&P(oe,$),oe.needsUpdate=!1}m=this.type,x.needsUpdate=!1,i.setRenderTarget(I,L,V)};function P(z,c){const $=e.update(b);v.defines.VSM_SAMPLES!==z.blurSamples&&(v.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Ti(r.x,r.y)),v.uniforms.shadow_pass.value=z.map.texture,v.uniforms.resolution.value=z.mapSize,v.uniforms.radius.value=z.radius,i.setRenderTarget(z.mapPass),i.clear(),i.renderBufferDirect(c,null,$,v,b,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,i.setRenderTarget(z.map),i.clear(),i.renderBufferDirect(c,null,$,y,b,null)}function R(z,c,$,I){let L=null;const V=$.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(V!==void 0)L=V;else if(L=$.isPointLight===!0?d:u,i.localClippingEnabled&&c.clipShadows===!0&&Array.isArray(c.clippingPlanes)&&c.clippingPlanes.length!==0||c.displacementMap&&c.displacementScale!==0||c.alphaMap&&c.alphaTest>0||c.map&&c.alphaTest>0){const ce=L.uuid,Y=c.uuid;let pe=f[ce];pe===void 0&&(pe={},f[ce]=pe);let me=pe[Y];me===void 0&&(me=L.clone(),pe[Y]=me,c.addEventListener("dispose",q)),L=me}if(L.visible=c.visible,L.wireframe=c.wireframe,I===si?L.side=c.shadowSide!==null?c.shadowSide:c.side:L.side=c.shadowSide!==null?c.shadowSide:_[c.side],L.alphaMap=c.alphaMap,L.alphaTest=c.alphaTest,L.map=c.map,L.clipShadows=c.clipShadows,L.clippingPlanes=c.clippingPlanes,L.clipIntersection=c.clipIntersection,L.displacementMap=c.displacementMap,L.displacementScale=c.displacementScale,L.displacementBias=c.displacementBias,L.wireframeLinewidth=c.wireframeLinewidth,L.linewidth=c.linewidth,$.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const ce=i.properties.get(L);ce.light=$}return L}function N(z,c,$,I,L){if(z.visible===!1)return;if(z.layers.test(c.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&L===si)&&(!z.frustumCulled||n.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,z.matrixWorld);const Y=e.update(z),pe=z.material;if(Array.isArray(pe)){const me=Y.groups;for(let le=0,de=me.length;le<de;le++){const oe=me[le],be=pe[oe.materialIndex];if(be&&be.visible){const De=R(z,be,I,L);z.onBeforeShadow(i,z,c,$,Y,De,oe),i.renderBufferDirect($,null,Y,De,z,oe),z.onAfterShadow(i,z,c,$,Y,De,oe)}}}else if(pe.visible){const me=R(z,pe,I,L);z.onBeforeShadow(i,z,c,$,Y,me,null),i.renderBufferDirect($,null,Y,me,z,null),z.onAfterShadow(i,z,c,$,Y,me,null)}}const ce=z.children;for(let Y=0,pe=ce.length;Y<pe;Y++)N(ce[Y],c,$,I,L)}function q(z){z.target.removeEventListener("dispose",q);for(const $ in f){const I=f[$],L=z.target.uuid;L in I&&(I[L].dispose(),delete I[L])}}}function Jg(i){function e(){let T=!1;const J=new Jt;let te=null;const se=new Jt(0,0,0,0);return{setMask:function(_e){te!==_e&&!T&&(i.colorMask(_e,_e,_e,_e),te=_e)},setLocked:function(_e){T=_e},setClear:function(_e,Ve,Ze,yt,Mt){Mt===!0&&(_e*=yt,Ve*=yt,Ze*=yt),J.set(_e,Ve,Ze,yt),se.equals(J)===!1&&(i.clearColor(_e,Ve,Ze,yt),se.copy(J))},reset:function(){T=!1,te=null,se.set(-1,0,0,0)}}}function t(){let T=!1,J=null,te=null,se=null;return{setTest:function(_e){_e?Oe(i.DEPTH_TEST):Ue(i.DEPTH_TEST)},setMask:function(_e){J!==_e&&!T&&(i.depthMask(_e),J=_e)},setFunc:function(_e){if(te!==_e){switch(_e){case uh:i.depthFunc(i.NEVER);break;case hh:i.depthFunc(i.ALWAYS);break;case fh:i.depthFunc(i.LESS);break;case Ys:i.depthFunc(i.LEQUAL);break;case dh:i.depthFunc(i.EQUAL);break;case ph:i.depthFunc(i.GEQUAL);break;case mh:i.depthFunc(i.GREATER);break;case gh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}te=_e}},setLocked:function(_e){T=_e},setClear:function(_e){se!==_e&&(i.clearDepth(_e),se=_e)},reset:function(){T=!1,J=null,te=null,se=null}}}function n(){let T=!1,J=null,te=null,se=null,_e=null,Ve=null,Ze=null,yt=null,Mt=null;return{setTest:function(dt){T||(dt?Oe(i.STENCIL_TEST):Ue(i.STENCIL_TEST))},setMask:function(dt){J!==dt&&!T&&(i.stencilMask(dt),J=dt)},setFunc:function(dt,Gt,Ht){(te!==dt||se!==Gt||_e!==Ht)&&(i.stencilFunc(dt,Gt,Ht),te=dt,se=Gt,_e=Ht)},setOp:function(dt,Gt,Ht){(Ve!==dt||Ze!==Gt||yt!==Ht)&&(i.stencilOp(dt,Gt,Ht),Ve=dt,Ze=Gt,yt=Ht)},setLocked:function(dt){T=dt},setClear:function(dt){Mt!==dt&&(i.clearStencil(dt),Mt=dt)},reset:function(){T=!1,J=null,te=null,se=null,_e=null,Ve=null,Ze=null,yt=null,Mt=null}}}const r=new e,a=new t,l=new n,u=new WeakMap,d=new WeakMap;let f={},g={},_=new WeakMap,v=[],y=null,E=!1,b=null,x=null,m=null,P=null,R=null,N=null,q=null,z=new _t(0,0,0),c=0,$=!1,I=null,L=null,V=null,ce=null,Y=null;const pe=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let me=!1,le=0;const de=i.getParameter(i.VERSION);de.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(de)[1]),me=le>=1):de.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),me=le>=2);let oe=null,be={};const De=i.getParameter(i.SCISSOR_BOX),Be=i.getParameter(i.VIEWPORT),ft=new Jt().fromArray(De),vt=new Jt().fromArray(Be);function fe(T,J,te,se){const _e=new Uint8Array(4),Ve=i.createTexture();i.bindTexture(T,Ve),i.texParameteri(T,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(T,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ze=0;Ze<te;Ze++)T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY?i.texImage3D(J,0,i.RGBA,1,1,se,0,i.RGBA,i.UNSIGNED_BYTE,_e):i.texImage2D(J+Ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_e);return Ve}const ye={};ye[i.TEXTURE_2D]=fe(i.TEXTURE_2D,i.TEXTURE_2D,1),ye[i.TEXTURE_CUBE_MAP]=fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[i.TEXTURE_2D_ARRAY]=fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ye[i.TEXTURE_3D]=fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),Oe(i.DEPTH_TEST),a.setFunc(Ys),Et(!1),He(ml),Oe(i.CULL_FACE),Dt(Si);function Oe(T){f[T]!==!0&&(i.enable(T),f[T]=!0)}function Ue(T){f[T]!==!1&&(i.disable(T),f[T]=!1)}function it(T,J){return g[T]!==J?(i.bindFramebuffer(T,J),g[T]=J,T===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=J),T===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=J),!0):!1}function at(T,J){let te=v,se=!1;if(T){te=_.get(J),te===void 0&&(te=[],_.set(J,te));const _e=T.textures;if(te.length!==_e.length||te[0]!==i.COLOR_ATTACHMENT0){for(let Ve=0,Ze=_e.length;Ve<Ze;Ve++)te[Ve]=i.COLOR_ATTACHMENT0+Ve;te.length=_e.length,se=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,se=!0);se&&i.drawBuffers(te)}function $e(T){return y!==T?(i.useProgram(T),y=T,!0):!1}const Lt={[Bi]:i.FUNC_ADD,[ju]:i.FUNC_SUBTRACT,[Yu]:i.FUNC_REVERSE_SUBTRACT};Lt[$u]=i.MIN,Lt[Ku]=i.MAX;const H={[Zu]:i.ZERO,[Ju]:i.ONE,[Qu]:i.SRC_COLOR,[to]:i.SRC_ALPHA,[sh]:i.SRC_ALPHA_SATURATE,[ih]:i.DST_COLOR,[th]:i.DST_ALPHA,[eh]:i.ONE_MINUS_SRC_COLOR,[no]:i.ONE_MINUS_SRC_ALPHA,[rh]:i.ONE_MINUS_DST_COLOR,[nh]:i.ONE_MINUS_DST_ALPHA,[ah]:i.CONSTANT_COLOR,[oh]:i.ONE_MINUS_CONSTANT_COLOR,[lh]:i.CONSTANT_ALPHA,[ch]:i.ONE_MINUS_CONSTANT_ALPHA};function Dt(T,J,te,se,_e,Ve,Ze,yt,Mt,dt){if(T===Si){E===!0&&(Ue(i.BLEND),E=!1);return}if(E===!1&&(Oe(i.BLEND),E=!0),T!==qu){if(T!==b||dt!==$){if((x!==Bi||R!==Bi)&&(i.blendEquation(i.FUNC_ADD),x=Bi,R=Bi),dt)switch(T){case xr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gl:i.blendFunc(i.ONE,i.ONE);break;case _l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case xr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case _l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}m=null,P=null,N=null,q=null,z.set(0,0,0),c=0,b=T,$=dt}return}_e=_e||J,Ve=Ve||te,Ze=Ze||se,(J!==x||_e!==R)&&(i.blendEquationSeparate(Lt[J],Lt[_e]),x=J,R=_e),(te!==m||se!==P||Ve!==N||Ze!==q)&&(i.blendFuncSeparate(H[te],H[se],H[Ve],H[Ze]),m=te,P=se,N=Ve,q=Ze),(yt.equals(z)===!1||Mt!==c)&&(i.blendColor(yt.r,yt.g,yt.b,Mt),z.copy(yt),c=Mt),b=T,$=!1}function xt(T,J){T.side===ai?Ue(i.CULL_FACE):Oe(i.CULL_FACE);let te=T.side===xn;J&&(te=!te),Et(te),T.blending===xr&&T.transparent===!1?Dt(Si):Dt(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),a.setFunc(T.depthFunc),a.setTest(T.depthTest),a.setMask(T.depthWrite),r.setMask(T.colorWrite);const se=T.stencilWrite;l.setTest(se),se&&(l.setMask(T.stencilWriteMask),l.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),l.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),Xe(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?Oe(i.SAMPLE_ALPHA_TO_COVERAGE):Ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function Et(T){I!==T&&(T?i.frontFace(i.CW):i.frontFace(i.CCW),I=T)}function He(T){T!==Gu?(Oe(i.CULL_FACE),T!==L&&(T===ml?i.cullFace(i.BACK):T===Wu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ue(i.CULL_FACE),L=T}function It(T){T!==V&&(me&&i.lineWidth(T),V=T)}function Xe(T,J,te){T?(Oe(i.POLYGON_OFFSET_FILL),(ce!==J||Y!==te)&&(i.polygonOffset(J,te),ce=J,Y=te)):Ue(i.POLYGON_OFFSET_FILL)}function tt(T){T?Oe(i.SCISSOR_TEST):Ue(i.SCISSOR_TEST)}function O(T){T===void 0&&(T=i.TEXTURE0+pe-1),oe!==T&&(i.activeTexture(T),oe=T)}function w(T,J,te){te===void 0&&(oe===null?te=i.TEXTURE0+pe-1:te=oe);let se=be[te];se===void 0&&(se={type:void 0,texture:void 0},be[te]=se),(se.type!==T||se.texture!==J)&&(oe!==te&&(i.activeTexture(te),oe=te),i.bindTexture(T,J||ye[T]),se.type=T,se.texture=J)}function ee(){const T=be[oe];T!==void 0&&T.type!==void 0&&(i.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function ge(){try{i.compressedTexImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ve(){try{i.compressedTexImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ne(){try{i.texSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Te(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ie(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function rt(){try{i.texStorage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Me(){try{i.texStorage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ce(){try{i.texImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ot(){try{i.texImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function We(T){ft.equals(T)===!1&&(i.scissor(T.x,T.y,T.z,T.w),ft.copy(T))}function we(T){vt.equals(T)===!1&&(i.viewport(T.x,T.y,T.z,T.w),vt.copy(T))}function qe(T,J){let te=d.get(J);te===void 0&&(te=new WeakMap,d.set(J,te));let se=te.get(T);se===void 0&&(se=i.getUniformBlockIndex(J,T.name),te.set(T,se))}function et(T,J){const se=d.get(J).get(T);u.get(J)!==se&&(i.uniformBlockBinding(J,se,T.__bindingPointIndex),u.set(J,se))}function Rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},oe=null,be={},g={},_=new WeakMap,v=[],y=null,E=!1,b=null,x=null,m=null,P=null,R=null,N=null,q=null,z=new _t(0,0,0),c=0,$=!1,I=null,L=null,V=null,ce=null,Y=null,ft.set(0,0,i.canvas.width,i.canvas.height),vt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:Oe,disable:Ue,bindFramebuffer:it,drawBuffers:at,useProgram:$e,setBlending:Dt,setMaterial:xt,setFlipSided:Et,setCullFace:He,setLineWidth:It,setPolygonOffset:Xe,setScissorTest:tt,activeTexture:O,bindTexture:w,unbindTexture:ee,compressedTexImage2D:ge,compressedTexImage3D:ve,texImage2D:Ce,texImage3D:ot,updateUBOMapping:qe,uniformBlockBinding:et,texStorage2D:rt,texStorage3D:Me,texSubImage2D:K,texSubImage3D:Ne,compressedTexSubImage2D:Te,compressedTexSubImage3D:Ie,scissor:We,viewport:we,reset:Rt}}function uc(i,e,t,n){const r=Qg(n);switch(t){case Uc:return i*e;case Fc:return i*e;case Oc:return i*e*2;case jr:return i*e/r.components*r.byteLength;case Wo:return i*e/r.components*r.byteLength;case Bc:return i*e*2/r.components*r.byteLength;case Xo:return i*e*2/r.components*r.byteLength;case Nc:return i*e*3/r.components*r.byteLength;case pn:return i*e*4/r.components*r.byteLength;case qo:return i*e*4/r.components*r.byteLength;case ks:case Vs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Gs:case Ws:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case lo:case uo:return Math.max(i,16)*Math.max(e,8)/4;case oo:case co:return Math.max(i,8)*Math.max(e,8)/2;case ho:case fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case go:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case _o:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case vo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case xo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case yo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case So:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case bo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case To:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case wo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Co:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Xs:case Ro:case Po:return Math.ceil(i/4)*Math.ceil(e/4)*16;case zc:case Lo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Do:case Io:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qg(i){switch(i){case ci:case Lc:return{byteLength:1,components:1};case Jr:case Dc:case ts:return{byteLength:2,components:1};case Vo:case Go:return{byteLength:2,components:4};case ki:case ko:case cn:return{byteLength:4,components:1};case Ic:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function e_(i,e,t,n,r,a,l){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new lt,g=new WeakMap;let _;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,w){return y?new OffscreenCanvas(O,w):Qs("canvas")}function b(O,w,ee){let ge=1;const ve=tt(O);if((ve.width>ee||ve.height>ee)&&(ge=ee/Math.max(ve.width,ve.height)),ge<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const K=Math.floor(ge*ve.width),Ne=Math.floor(ge*ve.height);_===void 0&&(_=E(K,Ne));const Te=w?E(K,Ne):_;return Te.width=K,Te.height=Ne,Te.getContext("2d").drawImage(O,0,0,K,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+K+"x"+Ne+")."),Te}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),O;return O}function x(O){return O.generateMipmaps&&O.minFilter!==Qt&&O.minFilter!==Bn}function m(O){i.generateMipmap(O)}function P(O,w,ee,ge,ve=!1){if(O!==null){if(i[O]!==void 0)return i[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let K=w;if(w===i.RED&&(ee===i.FLOAT&&(K=i.R32F),ee===i.HALF_FLOAT&&(K=i.R16F),ee===i.UNSIGNED_BYTE&&(K=i.R8)),w===i.RED_INTEGER&&(ee===i.UNSIGNED_BYTE&&(K=i.R8UI),ee===i.UNSIGNED_SHORT&&(K=i.R16UI),ee===i.UNSIGNED_INT&&(K=i.R32UI),ee===i.BYTE&&(K=i.R8I),ee===i.SHORT&&(K=i.R16I),ee===i.INT&&(K=i.R32I)),w===i.RG&&(ee===i.FLOAT&&(K=i.RG32F),ee===i.HALF_FLOAT&&(K=i.RG16F),ee===i.UNSIGNED_BYTE&&(K=i.RG8)),w===i.RG_INTEGER&&(ee===i.UNSIGNED_BYTE&&(K=i.RG8UI),ee===i.UNSIGNED_SHORT&&(K=i.RG16UI),ee===i.UNSIGNED_INT&&(K=i.RG32UI),ee===i.BYTE&&(K=i.RG8I),ee===i.SHORT&&(K=i.RG16I),ee===i.INT&&(K=i.RG32I)),w===i.RGB&&ee===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),w===i.RGBA){const Ne=ve?$s:Ct.getTransfer(ge);ee===i.FLOAT&&(K=i.RGBA32F),ee===i.HALF_FLOAT&&(K=i.RGBA16F),ee===i.UNSIGNED_BYTE&&(K=Ne===Ot?i.SRGB8_ALPHA8:i.RGBA8),ee===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),ee===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function R(O,w){let ee;return O?w===null||w===ki||w===br?ee=i.DEPTH24_STENCIL8:w===cn?ee=i.DEPTH32F_STENCIL8:w===Jr&&(ee=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ki||w===br?ee=i.DEPTH_COMPONENT24:w===cn?ee=i.DEPTH_COMPONENT32F:w===Jr&&(ee=i.DEPTH_COMPONENT16),ee}function N(O,w){return x(O)===!0||O.isFramebufferTexture&&O.minFilter!==Qt&&O.minFilter!==Bn?Math.log2(Math.max(w.width,w.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?w.mipmaps.length:1}function q(O){const w=O.target;w.removeEventListener("dispose",q),c(w),w.isVideoTexture&&g.delete(w)}function z(O){const w=O.target;w.removeEventListener("dispose",z),I(w)}function c(O){const w=n.get(O);if(w.__webglInit===void 0)return;const ee=O.source,ge=v.get(ee);if(ge){const ve=ge[w.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&$(O),Object.keys(ge).length===0&&v.delete(ee)}n.remove(O)}function $(O){const w=n.get(O);i.deleteTexture(w.__webglTexture);const ee=O.source,ge=v.get(ee);delete ge[w.__cacheKey],l.memory.textures--}function I(O){const w=n.get(O);if(O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(w.__webglFramebuffer[ge]))for(let ve=0;ve<w.__webglFramebuffer[ge].length;ve++)i.deleteFramebuffer(w.__webglFramebuffer[ge][ve]);else i.deleteFramebuffer(w.__webglFramebuffer[ge]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ge])}else{if(Array.isArray(w.__webglFramebuffer))for(let ge=0;ge<w.__webglFramebuffer.length;ge++)i.deleteFramebuffer(w.__webglFramebuffer[ge]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ge=0;ge<w.__webglColorRenderbuffer.length;ge++)w.__webglColorRenderbuffer[ge]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ge]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const ee=O.textures;for(let ge=0,ve=ee.length;ge<ve;ge++){const K=n.get(ee[ge]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),l.memory.textures--),n.remove(ee[ge])}n.remove(O)}let L=0;function V(){L=0}function ce(){const O=L;return O>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+r.maxTextures),L+=1,O}function Y(O){const w=[];return w.push(O.wrapS),w.push(O.wrapT),w.push(O.wrapR||0),w.push(O.magFilter),w.push(O.minFilter),w.push(O.anisotropy),w.push(O.internalFormat),w.push(O.format),w.push(O.type),w.push(O.generateMipmaps),w.push(O.premultiplyAlpha),w.push(O.flipY),w.push(O.unpackAlignment),w.push(O.colorSpace),w.join()}function pe(O,w){const ee=n.get(O);if(O.isVideoTexture&&It(O),O.isRenderTargetTexture===!1&&O.version>0&&ee.__version!==O.version){const ge=O.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{vt(ee,O,w);return}}t.bindTexture(i.TEXTURE_2D,ee.__webglTexture,i.TEXTURE0+w)}function me(O,w){const ee=n.get(O);if(O.version>0&&ee.__version!==O.version){vt(ee,O,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ee.__webglTexture,i.TEXTURE0+w)}function le(O,w){const ee=n.get(O);if(O.version>0&&ee.__version!==O.version){vt(ee,O,w);return}t.bindTexture(i.TEXTURE_3D,ee.__webglTexture,i.TEXTURE0+w)}function de(O,w){const ee=n.get(O);if(O.version>0&&ee.__version!==O.version){fe(ee,O,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture,i.TEXTURE0+w)}const oe={[so]:i.REPEAT,[oi]:i.CLAMP_TO_EDGE,[ao]:i.MIRRORED_REPEAT},be={[Qt]:i.NEAREST,[Ah]:i.NEAREST_MIPMAP_NEAREST,[ds]:i.NEAREST_MIPMAP_LINEAR,[Bn]:i.LINEAR,[Ea]:i.LINEAR_MIPMAP_NEAREST,[Hi]:i.LINEAR_MIPMAP_LINEAR},De={[Ph]:i.NEVER,[Fh]:i.ALWAYS,[Lh]:i.LESS,[kc]:i.LEQUAL,[Dh]:i.EQUAL,[Nh]:i.GEQUAL,[Ih]:i.GREATER,[Uh]:i.NOTEQUAL};function Be(O,w){if(w.type===cn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Bn||w.magFilter===Ea||w.magFilter===ds||w.magFilter===Hi||w.minFilter===Bn||w.minFilter===Ea||w.minFilter===ds||w.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,oe[w.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,oe[w.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,oe[w.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,be[w.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,be[w.minFilter]),w.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,De[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Qt||w.minFilter!==ds&&w.minFilter!==Hi||w.type===cn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");i.texParameterf(O,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function ft(O,w){let ee=!1;O.__webglInit===void 0&&(O.__webglInit=!0,w.addEventListener("dispose",q));const ge=w.source;let ve=v.get(ge);ve===void 0&&(ve={},v.set(ge,ve));const K=Y(w);if(K!==O.__cacheKey){ve[K]===void 0&&(ve[K]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,ee=!0),ve[K].usedTimes++;const Ne=ve[O.__cacheKey];Ne!==void 0&&(ve[O.__cacheKey].usedTimes--,Ne.usedTimes===0&&$(w)),O.__cacheKey=K,O.__webglTexture=ve[K].texture}return ee}function vt(O,w,ee){let ge=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ge=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ge=i.TEXTURE_3D);const ve=ft(O,w),K=w.source;t.bindTexture(ge,O.__webglTexture,i.TEXTURE0+ee);const Ne=n.get(K);if(K.version!==Ne.__version||ve===!0){t.activeTexture(i.TEXTURE0+ee);const Te=Ct.getPrimaries(Ct.workingColorSpace),Ie=w.colorSpace===Mi?null:Ct.getPrimaries(w.colorSpace),rt=w.colorSpace===Mi||Te===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let Me=b(w.image,!1,r.maxTextureSize);Me=Xe(w,Me);const Ce=a.convert(w.format,w.colorSpace),ot=a.convert(w.type);let We=P(w.internalFormat,Ce,ot,w.colorSpace,w.isVideoTexture);Be(ge,w);let we;const qe=w.mipmaps,et=w.isVideoTexture!==!0,Rt=Ne.__version===void 0||ve===!0,T=K.dataReady,J=N(w,Me);if(w.isDepthTexture)We=R(w.format===Tr,w.type),Rt&&(et?t.texStorage2D(i.TEXTURE_2D,1,We,Me.width,Me.height):t.texImage2D(i.TEXTURE_2D,0,We,Me.width,Me.height,0,Ce,ot,null));else if(w.isDataTexture)if(qe.length>0){et&&Rt&&t.texStorage2D(i.TEXTURE_2D,J,We,qe[0].width,qe[0].height);for(let te=0,se=qe.length;te<se;te++)we=qe[te],et?T&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,we.width,we.height,Ce,ot,we.data):t.texImage2D(i.TEXTURE_2D,te,We,we.width,we.height,0,Ce,ot,we.data);w.generateMipmaps=!1}else et?(Rt&&t.texStorage2D(i.TEXTURE_2D,J,We,Me.width,Me.height),T&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me.width,Me.height,Ce,ot,Me.data)):t.texImage2D(i.TEXTURE_2D,0,We,Me.width,Me.height,0,Ce,ot,Me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){et&&Rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,J,We,qe[0].width,qe[0].height,Me.depth);for(let te=0,se=qe.length;te<se;te++)if(we=qe[te],w.format!==pn)if(Ce!==null)if(et){if(T)if(w.layerUpdates.size>0){const _e=uc(we.width,we.height,w.format,w.type);for(const Ve of w.layerUpdates){const Ze=we.data.subarray(Ve*_e/we.data.BYTES_PER_ELEMENT,(Ve+1)*_e/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,Ve,we.width,we.height,1,Ce,Ze,0,0)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,we.width,we.height,Me.depth,Ce,we.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,We,we.width,we.height,Me.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?T&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,we.width,we.height,Me.depth,Ce,ot,we.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,We,we.width,we.height,Me.depth,0,Ce,ot,we.data)}else{et&&Rt&&t.texStorage2D(i.TEXTURE_2D,J,We,qe[0].width,qe[0].height);for(let te=0,se=qe.length;te<se;te++)we=qe[te],w.format!==pn?Ce!==null?et?T&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,we.width,we.height,Ce,we.data):t.compressedTexImage2D(i.TEXTURE_2D,te,We,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?T&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,we.width,we.height,Ce,ot,we.data):t.texImage2D(i.TEXTURE_2D,te,We,we.width,we.height,0,Ce,ot,we.data)}else if(w.isDataArrayTexture)if(et){if(Rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,J,We,Me.width,Me.height,Me.depth),T)if(w.layerUpdates.size>0){const te=uc(Me.width,Me.height,w.format,w.type);for(const se of w.layerUpdates){const _e=Me.data.subarray(se*te/Me.data.BYTES_PER_ELEMENT,(se+1)*te/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,se,Me.width,Me.height,1,Ce,ot,_e)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Ce,ot,Me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,We,Me.width,Me.height,Me.depth,0,Ce,ot,Me.data);else if(w.isData3DTexture)et?(Rt&&t.texStorage3D(i.TEXTURE_3D,J,We,Me.width,Me.height,Me.depth),T&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Ce,ot,Me.data)):t.texImage3D(i.TEXTURE_3D,0,We,Me.width,Me.height,Me.depth,0,Ce,ot,Me.data);else if(w.isFramebufferTexture){if(Rt)if(et)t.texStorage2D(i.TEXTURE_2D,J,We,Me.width,Me.height);else{let te=Me.width,se=Me.height;for(let _e=0;_e<J;_e++)t.texImage2D(i.TEXTURE_2D,_e,We,te,se,0,Ce,ot,null),te>>=1,se>>=1}}else if(qe.length>0){if(et&&Rt){const te=tt(qe[0]);t.texStorage2D(i.TEXTURE_2D,J,We,te.width,te.height)}for(let te=0,se=qe.length;te<se;te++)we=qe[te],et?T&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,Ce,ot,we):t.texImage2D(i.TEXTURE_2D,te,We,Ce,ot,we);w.generateMipmaps=!1}else if(et){if(Rt){const te=tt(Me);t.texStorage2D(i.TEXTURE_2D,J,We,te.width,te.height)}T&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ce,ot,Me)}else t.texImage2D(i.TEXTURE_2D,0,We,Ce,ot,Me);x(w)&&m(ge),Ne.__version=K.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function fe(O,w,ee){if(w.image.length!==6)return;const ge=ft(O,w),ve=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+ee);const K=n.get(ve);if(ve.version!==K.__version||ge===!0){t.activeTexture(i.TEXTURE0+ee);const Ne=Ct.getPrimaries(Ct.workingColorSpace),Te=w.colorSpace===Mi?null:Ct.getPrimaries(w.colorSpace),Ie=w.colorSpace===Mi||Ne===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const rt=w.isCompressedTexture||w.image[0].isCompressedTexture,Me=w.image[0]&&w.image[0].isDataTexture,Ce=[];for(let se=0;se<6;se++)!rt&&!Me?Ce[se]=b(w.image[se],!0,r.maxCubemapSize):Ce[se]=Me?w.image[se].image:w.image[se],Ce[se]=Xe(w,Ce[se]);const ot=Ce[0],We=a.convert(w.format,w.colorSpace),we=a.convert(w.type),qe=P(w.internalFormat,We,we,w.colorSpace),et=w.isVideoTexture!==!0,Rt=K.__version===void 0||ge===!0,T=ve.dataReady;let J=N(w,ot);Be(i.TEXTURE_CUBE_MAP,w);let te;if(rt){et&&Rt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,J,qe,ot.width,ot.height);for(let se=0;se<6;se++){te=Ce[se].mipmaps;for(let _e=0;_e<te.length;_e++){const Ve=te[_e];w.format!==pn?We!==null?et?T&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e,0,0,Ve.width,Ve.height,We,Ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e,qe,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?T&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e,0,0,Ve.width,Ve.height,We,we,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e,qe,Ve.width,Ve.height,0,We,we,Ve.data)}}}else{if(te=w.mipmaps,et&&Rt){te.length>0&&J++;const se=tt(Ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,J,qe,se.width,se.height)}for(let se=0;se<6;se++)if(Me){et?T&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ce[se].width,Ce[se].height,We,we,Ce[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,qe,Ce[se].width,Ce[se].height,0,We,we,Ce[se].data);for(let _e=0;_e<te.length;_e++){const Ze=te[_e].image[se].image;et?T&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e+1,0,0,Ze.width,Ze.height,We,we,Ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e+1,qe,Ze.width,Ze.height,0,We,we,Ze.data)}}else{et?T&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,We,we,Ce[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,qe,We,we,Ce[se]);for(let _e=0;_e<te.length;_e++){const Ve=te[_e];et?T&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e+1,0,0,We,we,Ve.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e+1,qe,We,we,Ve.image[se])}}}x(w)&&m(i.TEXTURE_CUBE_MAP),K.__version=ve.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function ye(O,w,ee,ge,ve,K){const Ne=a.convert(ee.format,ee.colorSpace),Te=a.convert(ee.type),Ie=P(ee.internalFormat,Ne,Te,ee.colorSpace);if(!n.get(w).__hasExternalTextures){const Me=Math.max(1,w.width>>K),Ce=Math.max(1,w.height>>K);ve===i.TEXTURE_3D||ve===i.TEXTURE_2D_ARRAY?t.texImage3D(ve,K,Ie,Me,Ce,w.depth,0,Ne,Te,null):t.texImage2D(ve,K,Ie,Me,Ce,0,Ne,Te,null)}t.bindFramebuffer(i.FRAMEBUFFER,O),He(w)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,ve,n.get(ee).__webglTexture,0,Et(w)):(ve===i.TEXTURE_2D||ve>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ge,ve,n.get(ee).__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(O,w,ee){if(i.bindRenderbuffer(i.RENDERBUFFER,O),w.depthBuffer){const ge=w.depthTexture,ve=ge&&ge.isDepthTexture?ge.type:null,K=R(w.stencilBuffer,ve),Ne=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=Et(w);He(w)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,K,w.width,w.height):ee?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,K,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,K,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ne,i.RENDERBUFFER,O)}else{const ge=w.textures;for(let ve=0;ve<ge.length;ve++){const K=ge[ve],Ne=a.convert(K.format,K.colorSpace),Te=a.convert(K.type),Ie=P(K.internalFormat,Ne,Te,K.colorSpace),rt=Et(w);ee&&He(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,Ie,w.width,w.height):He(w)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,Ie,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Ie,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(O,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,O),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),pe(w.depthTexture,0);const ge=n.get(w.depthTexture).__webglTexture,ve=Et(w);if(w.depthTexture.format===yr)He(w)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ge,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ge,0);else if(w.depthTexture.format===Tr)He(w)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ge,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function it(O){const w=n.get(O),ee=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!w.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");Ue(w.__webglFramebuffer,O)}else if(ee){w.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[ge]),w.__webglDepthbuffer[ge]=i.createRenderbuffer(),Oe(w.__webglDepthbuffer[ge],O,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=i.createRenderbuffer(),Oe(w.__webglDepthbuffer,O,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function at(O,w,ee){const ge=n.get(O);w!==void 0&&ye(ge.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ee!==void 0&&it(O)}function $e(O){const w=O.texture,ee=n.get(O),ge=n.get(w);O.addEventListener("dispose",z);const ve=O.textures,K=O.isWebGLCubeRenderTarget===!0,Ne=ve.length>1;if(Ne||(ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture()),ge.__version=w.version,l.memory.textures++),K){ee.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(w.mipmaps&&w.mipmaps.length>0){ee.__webglFramebuffer[Te]=[];for(let Ie=0;Ie<w.mipmaps.length;Ie++)ee.__webglFramebuffer[Te][Ie]=i.createFramebuffer()}else ee.__webglFramebuffer[Te]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Te=0;Te<w.mipmaps.length;Te++)ee.__webglFramebuffer[Te]=i.createFramebuffer()}else ee.__webglFramebuffer=i.createFramebuffer();if(Ne)for(let Te=0,Ie=ve.length;Te<Ie;Te++){const rt=n.get(ve[Te]);rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture(),l.memory.textures++)}if(O.samples>0&&He(O)===!1){ee.__webglMultisampledFramebuffer=i.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Te=0;Te<ve.length;Te++){const Ie=ve[Te];ee.__webglColorRenderbuffer[Te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ee.__webglColorRenderbuffer[Te]);const rt=a.convert(Ie.format,Ie.colorSpace),Me=a.convert(Ie.type),Ce=P(Ie.internalFormat,rt,Me,Ie.colorSpace,O.isXRRenderTarget===!0),ot=Et(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,Ce,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,ee.__webglColorRenderbuffer[Te])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(ee.__webglDepthRenderbuffer=i.createRenderbuffer(),Oe(ee.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,ge.__webglTexture),Be(i.TEXTURE_CUBE_MAP,w);for(let Te=0;Te<6;Te++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ie=0;Ie<w.mipmaps.length;Ie++)ye(ee.__webglFramebuffer[Te][Ie],O,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ie);else ye(ee.__webglFramebuffer[Te],O,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);x(w)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let Te=0,Ie=ve.length;Te<Ie;Te++){const rt=ve[Te],Me=n.get(rt);t.bindTexture(i.TEXTURE_2D,Me.__webglTexture),Be(i.TEXTURE_2D,rt),ye(ee.__webglFramebuffer,O,rt,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,0),x(rt)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let Te=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Te=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Te,ge.__webglTexture),Be(Te,w),w.mipmaps&&w.mipmaps.length>0)for(let Ie=0;Ie<w.mipmaps.length;Ie++)ye(ee.__webglFramebuffer[Ie],O,w,i.COLOR_ATTACHMENT0,Te,Ie);else ye(ee.__webglFramebuffer,O,w,i.COLOR_ATTACHMENT0,Te,0);x(w)&&m(Te),t.unbindTexture()}O.depthBuffer&&it(O)}function Lt(O){const w=O.textures;for(let ee=0,ge=w.length;ee<ge;ee++){const ve=w[ee];if(x(ve)){const K=O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ne=n.get(ve).__webglTexture;t.bindTexture(K,Ne),m(K),t.unbindTexture()}}}const H=[],Dt=[];function xt(O){if(O.samples>0){if(He(O)===!1){const w=O.textures,ee=O.width,ge=O.height;let ve=i.COLOR_BUFFER_BIT;const K=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ne=n.get(O),Te=w.length>1;if(Te)for(let Ie=0;Ie<w.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Ie=0;Ie<w.length;Ie++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ve|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ve|=i.STENCIL_BUFFER_BIT)),Te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ie]);const rt=n.get(w[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,ee,ge,0,0,ee,ge,ve,i.NEAREST),d===!0&&(H.length=0,Dt.length=0,H.push(i.COLOR_ATTACHMENT0+Ie),O.depthBuffer&&O.resolveDepthBuffer===!1&&(H.push(K),Dt.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Dt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,H))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Te)for(let Ie=0;Ie<w.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ie]);const rt=n.get(w[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,rt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&d){const w=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Et(O){return Math.min(r.maxSamples,O.samples)}function He(O){const w=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function It(O){const w=l.render.frame;g.get(O)!==w&&(g.set(O,w),O.update())}function Xe(O,w){const ee=O.colorSpace,ge=O.format,ve=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ee!==Ai&&ee!==Mi&&(Ct.getTransfer(ee)===Ot?(ge!==pn||ve!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),w}function tt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(f.width=O.naturalWidth||O.width,f.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(f.width=O.displayWidth,f.height=O.displayHeight):(f.width=O.width,f.height=O.height),f}this.allocateTextureUnit=ce,this.resetTextureUnits=V,this.setTexture2D=pe,this.setTexture2DArray=me,this.setTexture3D=le,this.setTextureCube=de,this.rebindTextures=at,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=He}function t_(i,e){function t(n,r=Mi){let a;const l=Ct.getTransfer(r);if(n===ci)return i.UNSIGNED_BYTE;if(n===Vo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Go)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ic)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Lc)return i.BYTE;if(n===Dc)return i.SHORT;if(n===Jr)return i.UNSIGNED_SHORT;if(n===ko)return i.INT;if(n===ki)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===ts)return i.HALF_FLOAT;if(n===Uc)return i.ALPHA;if(n===Nc)return i.RGB;if(n===pn)return i.RGBA;if(n===Fc)return i.LUMINANCE;if(n===Oc)return i.LUMINANCE_ALPHA;if(n===yr)return i.DEPTH_COMPONENT;if(n===Tr)return i.DEPTH_STENCIL;if(n===jr)return i.RED;if(n===Wo)return i.RED_INTEGER;if(n===Bc)return i.RG;if(n===Xo)return i.RG_INTEGER;if(n===qo)return i.RGBA_INTEGER;if(n===ks||n===Vs||n===Gs||n===Ws)if(l===Ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===ks)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ws)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===ks)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ws)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oo||n===lo||n===co||n===uo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===oo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===co)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ho||n===fo||n===po)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===ho||n===fo)return l===Ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===po)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===mo||n===go||n===_o||n===vo||n===xo||n===yo||n===Mo||n===So||n===Eo||n===bo||n===To||n===Ao||n===wo||n===Co)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===mo)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===go)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_o)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vo)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xo)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yo)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mo)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===So)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Eo)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bo)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===To)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ao)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wo)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Co)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xs||n===Ro||n===Po)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Xs)return l===Ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ro)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Po)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zc||n===Lo||n===Do||n===Io)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Xs)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Lo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Do)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Io)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===br?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class n_ extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xr extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const i_={type:"move"};class Ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,l=null;const u=this._targetRay,d=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){l=!0;for(const b of e.hand.values()){const x=t.getJointPose(b,n),m=this._getHandJoint(f,b);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}const g=f.joints["index-finger-tip"],_=f.joints["thumb-tip"],v=g.position.distanceTo(_.position),y=.02,E=.005;f.inputState.pinching&&v>y+E?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&v<=y-E&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(i_)))}return u!==null&&(u.visible=r!==null),d!==null&&(d.visible=a!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Xr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const r_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,s_=`
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

}`;class a_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new mn,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Kn({vertexShader:r_,fragmentShader:s_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new En(new rs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class o_ extends Wi{constructor(e,t){super();const n=this;let r=null,a=1,l=null,u="local-floor",d=1,f=null,g=null,_=null,v=null,y=null,E=null;const b=new a_,x=t.getContextAttributes();let m=null,P=null;const R=[],N=[],q=new lt;let z=null;const c=new Pn;c.layers.enable(1),c.viewport=new Jt;const $=new Pn;$.layers.enable(2),$.viewport=new Jt;const I=[c,$],L=new n_;L.layers.enable(1),L.layers.enable(2);let V=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(fe){let ye=R[fe];return ye===void 0&&(ye=new Ya,R[fe]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(fe){let ye=R[fe];return ye===void 0&&(ye=new Ya,R[fe]=ye),ye.getGripSpace()},this.getHand=function(fe){let ye=R[fe];return ye===void 0&&(ye=new Ya,R[fe]=ye),ye.getHandSpace()};function Y(fe){const ye=N.indexOf(fe.inputSource);if(ye===-1)return;const Oe=R[ye];Oe!==void 0&&(Oe.update(fe.inputSource,fe.frame,f||l),Oe.dispatchEvent({type:fe.type,data:fe.inputSource}))}function pe(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",pe),r.removeEventListener("inputsourceschange",me);for(let fe=0;fe<R.length;fe++){const ye=N[fe];ye!==null&&(N[fe]=null,R[fe].disconnect(ye))}V=null,ce=null,b.reset(),e.setRenderTarget(m),y=null,v=null,_=null,r=null,P=null,vt.stop(),n.isPresenting=!1,e.setPixelRatio(z),e.setSize(q.width,q.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(fe){a=fe,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(fe){u=fe,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(fe){f=fe},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(fe){if(r=fe,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",pe),r.addEventListener("inputsourceschange",me),x.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(q),r.renderState.layers===void 0){const ye={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(r,t,ye),r.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new Ti(y.framebufferWidth,y.framebufferHeight,{format:pn,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ye=null,Oe=null,Ue=null;x.depth&&(Ue=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=x.stencil?Tr:yr,Oe=x.stencil?br:ki);const it={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:a};_=new XRWebGLBinding(r,t),v=_.createProjectionLayer(it),r.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),P=new Ti(v.textureWidth,v.textureHeight,{format:pn,type:ci,depthTexture:new eu(v.textureWidth,v.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(d),f=null,l=await r.requestReferenceSpace(u),vt.setContext(r),vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function me(fe){for(let ye=0;ye<fe.removed.length;ye++){const Oe=fe.removed[ye],Ue=N.indexOf(Oe);Ue>=0&&(N[Ue]=null,R[Ue].disconnect(Oe))}for(let ye=0;ye<fe.added.length;ye++){const Oe=fe.added[ye];let Ue=N.indexOf(Oe);if(Ue===-1){for(let at=0;at<R.length;at++)if(at>=N.length){N.push(Oe),Ue=at;break}else if(N[at]===null){N[at]=Oe,Ue=at;break}if(Ue===-1)break}const it=R[Ue];it&&it.connect(Oe)}}const le=new j,de=new j;function oe(fe,ye,Oe){le.setFromMatrixPosition(ye.matrixWorld),de.setFromMatrixPosition(Oe.matrixWorld);const Ue=le.distanceTo(de),it=ye.projectionMatrix.elements,at=Oe.projectionMatrix.elements,$e=it[14]/(it[10]-1),Lt=it[14]/(it[10]+1),H=(it[9]+1)/it[5],Dt=(it[9]-1)/it[5],xt=(it[8]-1)/it[0],Et=(at[8]+1)/at[0],He=$e*xt,It=$e*Et,Xe=Ue/(-xt+Et),tt=Xe*-xt;ye.matrixWorld.decompose(fe.position,fe.quaternion,fe.scale),fe.translateX(tt),fe.translateZ(Xe),fe.matrixWorld.compose(fe.position,fe.quaternion,fe.scale),fe.matrixWorldInverse.copy(fe.matrixWorld).invert();const O=$e+Xe,w=Lt+Xe,ee=He-tt,ge=It+(Ue-tt),ve=H*Lt/w*O,K=Dt*Lt/w*O;fe.projectionMatrix.makePerspective(ee,ge,ve,K,O,w),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert()}function be(fe,ye){ye===null?fe.matrixWorld.copy(fe.matrix):fe.matrixWorld.multiplyMatrices(ye.matrixWorld,fe.matrix),fe.matrixWorldInverse.copy(fe.matrixWorld).invert()}this.updateCamera=function(fe){if(r===null)return;b.texture!==null&&(fe.near=b.depthNear,fe.far=b.depthFar),L.near=$.near=c.near=fe.near,L.far=$.far=c.far=fe.far,(V!==L.near||ce!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),V=L.near,ce=L.far,c.near=V,c.far=ce,$.near=V,$.far=ce,c.updateProjectionMatrix(),$.updateProjectionMatrix(),fe.updateProjectionMatrix());const ye=fe.parent,Oe=L.cameras;be(L,ye);for(let Ue=0;Ue<Oe.length;Ue++)be(Oe[Ue],ye);Oe.length===2?oe(L,c,$):L.projectionMatrix.copy(c.projectionMatrix),De(fe,L,ye)};function De(fe,ye,Oe){Oe===null?fe.matrix.copy(ye.matrixWorld):(fe.matrix.copy(Oe.matrixWorld),fe.matrix.invert(),fe.matrix.multiply(ye.matrixWorld)),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.updateMatrixWorld(!0),fe.projectionMatrix.copy(ye.projectionMatrix),fe.projectionMatrixInverse.copy(ye.projectionMatrixInverse),fe.isPerspectiveCamera&&(fe.fov=Qr*2*Math.atan(1/fe.projectionMatrix.elements[5]),fe.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(v===null&&y===null))return d},this.setFoveation=function(fe){d=fe,v!==null&&(v.fixedFoveation=fe),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=fe)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(L)};let Be=null;function ft(fe,ye){if(g=ye.getViewerPose(f||l),E=ye,g!==null){const Oe=g.views;y!==null&&(e.setRenderTargetFramebuffer(P,y.framebuffer),e.setRenderTarget(P));let Ue=!1;Oe.length!==L.cameras.length&&(L.cameras.length=0,Ue=!0);for(let at=0;at<Oe.length;at++){const $e=Oe[at];let Lt=null;if(y!==null)Lt=y.getViewport($e);else{const Dt=_.getViewSubImage(v,$e);Lt=Dt.viewport,at===0&&(e.setRenderTargetTextures(P,Dt.colorTexture,v.ignoreDepthValues?void 0:Dt.depthStencilTexture),e.setRenderTarget(P))}let H=I[at];H===void 0&&(H=new Pn,H.layers.enable(at),H.viewport=new Jt,I[at]=H),H.matrix.fromArray($e.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray($e.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),at===0&&(L.matrix.copy(H.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ue===!0&&L.cameras.push(H)}const it=r.enabledFeatures;if(it&&it.includes("depth-sensing")){const at=_.getDepthInformation(Oe[0]);at&&at.isValid&&at.texture&&b.init(e,at,r.renderState)}}for(let Oe=0;Oe<R.length;Oe++){const Ue=N[Oe],it=R[Oe];Ue!==null&&it!==void 0&&it.update(Ue,ye,f||l)}Be&&Be(fe,ye),ye.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ye}),E=null}const vt=new Jc;vt.setAnimationLoop(ft),this.setAnimationLoop=function(fe){Be=fe},this.dispose=function(){}}}const Fi=new $n,l_=new Xt;function c_(i,e){function t(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function n(x,m){m.color.getRGB(x.fogColor.value,Yc(i)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function r(x,m,P,R,N){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(x,m):m.isMeshToonMaterial?(a(x,m),_(x,m)):m.isMeshPhongMaterial?(a(x,m),g(x,m)):m.isMeshStandardMaterial?(a(x,m),v(x,m),m.isMeshPhysicalMaterial&&y(x,m,N)):m.isMeshMatcapMaterial?(a(x,m),E(x,m)):m.isMeshDepthMaterial?a(x,m):m.isMeshDistanceMaterial?(a(x,m),b(x,m)):m.isMeshNormalMaterial?a(x,m):m.isLineBasicMaterial?(l(x,m),m.isLineDashedMaterial&&u(x,m)):m.isPointsMaterial?d(x,m,P,R):m.isSpriteMaterial?f(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,t(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,t(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===xn&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,t(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===xn&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,t(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,t(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);const P=e.get(m),R=P.envMap,N=P.envMapRotation;R&&(x.envMap.value=R,Fi.copy(N),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),x.envMapRotation.value.setFromMatrix4(l_.makeRotationFromEuler(Fi)),x.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,x.aoMapTransform))}function l(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,t(m.map,x.mapTransform))}function u(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function d(x,m,P,R){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*P,x.scale.value=R*.5,m.map&&(x.map.value=m.map,t(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function f(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,t(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function g(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function _(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function v(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function y(x,m,P){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===xn&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=P.texture,x.transmissionSamplerSize.value.set(P.width,P.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,m){m.matcap&&(x.matcap.value=m.matcap)}function b(x,m){const P=e.get(m).light;x.referencePosition.value.setFromMatrixPosition(P.matrixWorld),x.nearDistance.value=P.shadow.camera.near,x.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function u_(i,e,t,n){let r={},a={},l=[];const u=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(P,R){const N=R.program;n.uniformBlockBinding(P,N)}function f(P,R){let N=r[P.id];N===void 0&&(E(P),N=g(P),r[P.id]=N,P.addEventListener("dispose",x));const q=R.program;n.updateUBOMapping(P,q);const z=e.render.frame;a[P.id]!==z&&(v(P),a[P.id]=z)}function g(P){const R=_();P.__bindingPointIndex=R;const N=i.createBuffer(),q=P.__size,z=P.usage;return i.bindBuffer(i.UNIFORM_BUFFER,N),i.bufferData(i.UNIFORM_BUFFER,q,z),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,N),N}function _(){for(let P=0;P<u;P++)if(l.indexOf(P)===-1)return l.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(P){const R=r[P.id],N=P.uniforms,q=P.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let z=0,c=N.length;z<c;z++){const $=Array.isArray(N[z])?N[z]:[N[z]];for(let I=0,L=$.length;I<L;I++){const V=$[I];if(y(V,z,I,q)===!0){const ce=V.__offset,Y=Array.isArray(V.value)?V.value:[V.value];let pe=0;for(let me=0;me<Y.length;me++){const le=Y[me],de=b(le);typeof le=="number"||typeof le=="boolean"?(V.__data[0]=le,i.bufferSubData(i.UNIFORM_BUFFER,ce+pe,V.__data)):le.isMatrix3?(V.__data[0]=le.elements[0],V.__data[1]=le.elements[1],V.__data[2]=le.elements[2],V.__data[3]=0,V.__data[4]=le.elements[3],V.__data[5]=le.elements[4],V.__data[6]=le.elements[5],V.__data[7]=0,V.__data[8]=le.elements[6],V.__data[9]=le.elements[7],V.__data[10]=le.elements[8],V.__data[11]=0):(le.toArray(V.__data,pe),pe+=de.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ce,V.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(P,R,N,q){const z=P.value,c=R+"_"+N;if(q[c]===void 0)return typeof z=="number"||typeof z=="boolean"?q[c]=z:q[c]=z.clone(),!0;{const $=q[c];if(typeof z=="number"||typeof z=="boolean"){if($!==z)return q[c]=z,!0}else if($.equals(z)===!1)return $.copy(z),!0}return!1}function E(P){const R=P.uniforms;let N=0;const q=16;for(let c=0,$=R.length;c<$;c++){const I=Array.isArray(R[c])?R[c]:[R[c]];for(let L=0,V=I.length;L<V;L++){const ce=I[L],Y=Array.isArray(ce.value)?ce.value:[ce.value];for(let pe=0,me=Y.length;pe<me;pe++){const le=Y[pe],de=b(le),oe=N%q,be=oe%de.boundary,De=oe+be;N+=be,De!==0&&q-De<de.storage&&(N+=q-De),ce.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=N,N+=de.storage}}}const z=N%q;return z>0&&(N+=q-z),P.__size=N,P.__cache={},this}function b(P){const R={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(R.boundary=4,R.storage=4):P.isVector2?(R.boundary=8,R.storage=8):P.isVector3||P.isColor?(R.boundary=16,R.storage=12):P.isVector4?(R.boundary=16,R.storage=16):P.isMatrix3?(R.boundary=48,R.storage=48):P.isMatrix4?(R.boundary=64,R.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),R}function x(P){const R=P.target;R.removeEventListener("dispose",x);const N=l.indexOf(R.__bindingPointIndex);l.splice(N,1),i.deleteBuffer(r[R.id]),delete r[R.id],delete a[R.id]}function m(){for(const P in r)i.deleteBuffer(r[P]);l=[],r={},a={}}return{bind:d,update:f,dispose:m}}class h_{constructor(e={}){const{canvas:t=ef(),context:n=null,depth:r=!0,stencil:a=!1,alpha:l=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:f=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=l;const y=new Uint32Array(4),E=new Int32Array(4);let b=null,x=null;const m=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xn,this.toneMapping=Ei,this.toneMappingExposure=1;const R=this;let N=!1,q=0,z=0,c=null,$=-1,I=null;const L=new Jt,V=new Jt;let ce=null;const Y=new _t(0);let pe=0,me=t.width,le=t.height,de=1,oe=null,be=null;const De=new Jt(0,0,me,le),Be=new Jt(0,0,me,le);let ft=!1;const vt=new Zc;let fe=!1,ye=!1;const Oe=new Xt,Ue=new j,it=new Jt,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function Lt(){return c===null?de:1}let H=n;function Dt(C,W){return t.getContext(C,W)}try{const C={alpha:!0,depth:r,stencil:a,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:f,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zo}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",_e,!1),H===null){const W="webgl2";if(H=Dt(W,C),H===null)throw Dt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let xt,Et,He,It,Xe,tt,O,w,ee,ge,ve,K,Ne,Te,Ie,rt,Me,Ce,ot,We,we,qe,et,Rt;function T(){xt=new _m(H),xt.init(),qe=new t_(H,xt),Et=new hm(H,xt,e,qe),He=new Jg(H),It=new ym(H),Xe=new Bg,tt=new e_(H,xt,He,Xe,Et,qe,It),O=new dm(R),w=new gm(R),ee=new wf(H),et=new cm(H,ee),ge=new vm(H,ee,It,et),ve=new Sm(H,ge,ee,It),ot=new Mm(H,Et,tt),rt=new fm(Xe),K=new Og(R,O,w,xt,Et,et,rt),Ne=new c_(R,Xe),Te=new Hg,Ie=new qg(xt),Ce=new lm(R,O,w,He,ve,v,d),Me=new Zg(R,ve,Et),Rt=new u_(H,It,Et,He),We=new um(H,xt,It),we=new xm(H,xt,It),It.programs=K.programs,R.capabilities=Et,R.extensions=xt,R.properties=Xe,R.renderLists=Te,R.shadowMap=Me,R.state=He,R.info=It}T();const J=new o_(R,H);this.xr=J,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=xt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=xt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(C){C!==void 0&&(de=C,this.setSize(me,le,!1))},this.getSize=function(C){return C.set(me,le)},this.setSize=function(C,W,ne=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}me=C,le=W,t.width=Math.floor(C*de),t.height=Math.floor(W*de),ne===!0&&(t.style.width=C+"px",t.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(me*de,le*de).floor()},this.setDrawingBufferSize=function(C,W,ne){me=C,le=W,de=ne,t.width=Math.floor(C*ne),t.height=Math.floor(W*ne),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(L)},this.getViewport=function(C){return C.copy(De)},this.setViewport=function(C,W,ne,ie){C.isVector4?De.set(C.x,C.y,C.z,C.w):De.set(C,W,ne,ie),He.viewport(L.copy(De).multiplyScalar(de).round())},this.getScissor=function(C){return C.copy(Be)},this.setScissor=function(C,W,ne,ie){C.isVector4?Be.set(C.x,C.y,C.z,C.w):Be.set(C,W,ne,ie),He.scissor(V.copy(Be).multiplyScalar(de).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(C){He.setScissorTest(ft=C)},this.setOpaqueSort=function(C){oe=C},this.setTransparentSort=function(C){be=C},this.getClearColor=function(C){return C.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(C=!0,W=!0,ne=!0){let ie=0;if(C){let X=!1;if(c!==null){const Se=c.texture.format;X=Se===qo||Se===Xo||Se===Wo}if(X){const Se=c.texture.type,Re=Se===ci||Se===ki||Se===Jr||Se===br||Se===Vo||Se===Go,Fe=Ce.getClearColor(),ze=Ce.getClearAlpha(),Ke=Fe.r,Je=Fe.g,je=Fe.b;Re?(y[0]=Ke,y[1]=Je,y[2]=je,y[3]=ze,H.clearBufferuiv(H.COLOR,0,y)):(E[0]=Ke,E[1]=Je,E[2]=je,E[3]=ze,H.clearBufferiv(H.COLOR,0,E))}else ie|=H.COLOR_BUFFER_BIT}W&&(ie|=H.DEPTH_BUFFER_BIT),ne&&(ie|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Te.dispose(),Ie.dispose(),Xe.dispose(),O.dispose(),w.dispose(),ve.dispose(),et.dispose(),Rt.dispose(),K.dispose(),J.dispose(),J.removeEventListener("sessionstart",Ht),J.removeEventListener("sessionend",Ln),Bt.stop()};function te(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const C=It.autoReset,W=Me.enabled,ne=Me.autoUpdate,ie=Me.needsUpdate,X=Me.type;T(),It.autoReset=C,Me.enabled=W,Me.autoUpdate=ne,Me.needsUpdate=ie,Me.type=X}function _e(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ve(C){const W=C.target;W.removeEventListener("dispose",Ve),Ze(W)}function Ze(C){yt(C),Xe.remove(C)}function yt(C){const W=Xe.get(C).programs;W!==void 0&&(W.forEach(function(ne){K.releaseProgram(ne)}),C.isShaderMaterial&&K.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,ne,ie,X,Se){W===null&&(W=at);const Re=X.isMesh&&X.matrixWorld.determinant()<0,Fe=aa(C,W,ne,ie,X);He.setMaterial(ie,Re);let ze=ne.index,Ke=1;if(ie.wireframe===!0){if(ze=ge.getWireframeAttribute(ne),ze===void 0)return;Ke=2}const Je=ne.drawRange,je=ne.attributes.position;let wt=Je.start*Ke,Ut=(Je.start+Je.count)*Ke;Se!==null&&(wt=Math.max(wt,Se.start*Ke),Ut=Math.min(Ut,(Se.start+Se.count)*Ke)),ze!==null?(wt=Math.max(wt,0),Ut=Math.min(Ut,ze.count)):je!=null&&(wt=Math.max(wt,0),Ut=Math.min(Ut,je.count));const zt=Ut-wt;if(zt<0||zt===1/0)return;et.setup(X,ie,Fe,ne,ze);let un,bt=We;if(ze!==null&&(un=ee.get(ze),bt=we,bt.setIndex(un)),X.isMesh)ie.wireframe===!0?(He.setLineWidth(ie.wireframeLinewidth*Lt()),bt.setMode(H.LINES)):bt.setMode(H.TRIANGLES);else if(X.isLine){let Ge=ie.linewidth;Ge===void 0&&(Ge=1),He.setLineWidth(Ge*Lt()),X.isLineSegments?bt.setMode(H.LINES):X.isLineLoop?bt.setMode(H.LINE_LOOP):bt.setMode(H.LINE_STRIP)}else X.isPoints?bt.setMode(H.POINTS):X.isSprite&&bt.setMode(H.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)bt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))bt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ge=X._multiDrawStarts,Wt=X._multiDrawCounts,Tt=X._multiDrawCount,Nt=ze?ee.get(ze).bytesPerElement:1,yn=Xe.get(ie).currentProgram.getUniforms();for(let Kt=0;Kt<Tt;Kt++)yn.setValue(H,"_gl_DrawID",Kt),bt.render(Ge[Kt]/Nt,Wt[Kt])}else if(X.isInstancedMesh)bt.renderInstances(wt,zt,X.count);else if(ne.isInstancedBufferGeometry){const Ge=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Wt=Math.min(ne.instanceCount,Ge);bt.renderInstances(wt,zt,Wt)}else bt.render(wt,zt)};function Mt(C,W,ne){C.transparent===!0&&C.side===ai&&C.forceSinglePass===!1?(C.side=xn,C.needsUpdate=!0,qi(C,W,ne),C.side=bi,C.needsUpdate=!0,qi(C,W,ne),C.side=ai):qi(C,W,ne)}this.compile=function(C,W,ne=null){ne===null&&(ne=C),x=Ie.get(ne),x.init(W),P.push(x),ne.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(x.pushLight(X),X.castShadow&&x.pushShadow(X))}),C!==ne&&C.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(x.pushLight(X),X.castShadow&&x.pushShadow(X))}),x.setupLights();const ie=new Set;return C.traverse(function(X){const Se=X.material;if(Se)if(Array.isArray(Se))for(let Re=0;Re<Se.length;Re++){const Fe=Se[Re];Mt(Fe,ne,X),ie.add(Fe)}else Mt(Se,ne,X),ie.add(Se)}),P.pop(),x=null,ie},this.compileAsync=function(C,W,ne=null){const ie=this.compile(C,W,ne);return new Promise(X=>{function Se(){if(ie.forEach(function(Re){Xe.get(Re).currentProgram.isReady()&&ie.delete(Re)}),ie.size===0){X(C);return}setTimeout(Se,10)}xt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let dt=null;function Gt(C){dt&&dt(C)}function Ht(){Bt.stop()}function Ln(){Bt.start()}const Bt=new Jc;Bt.setAnimationLoop(Gt),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(C){dt=C,J.setAnimationLoop(C),C===null?Bt.stop():Bt.start()},J.addEventListener("sessionstart",Ht),J.addEventListener("sessionend",Ln),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(W),W=J.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,W,c),x=Ie.get(C,P.length),x.init(W),P.push(x),Oe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),vt.setFromProjectionMatrix(Oe),ye=this.localClippingEnabled,fe=rt.init(this.clippingPlanes,ye),b=Te.get(C,m.length),b.init(),m.push(b),J.enabled===!0&&J.isPresenting===!0){const Se=R.xr.getDepthSensingMesh();Se!==null&&rn(Se,W,-1/0,R.sortObjects)}rn(C,W,0,R.sortObjects),b.finish(),R.sortObjects===!0&&b.sort(oe,be),$e=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,$e&&Ce.addToRenderList(b,C),this.info.render.frame++,fe===!0&&rt.beginShadows();const ne=x.state.shadowsArray;Me.render(ne,C,W),fe===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=b.opaque,X=b.transmissive;if(x.setupLights(),W.isArrayCamera){const Se=W.cameras;if(X.length>0)for(let Re=0,Fe=Se.length;Re<Fe;Re++){const ze=Se[Re];zn(ie,X,C,ze)}$e&&Ce.render(C);for(let Re=0,Fe=Se.length;Re<Fe;Re++){const ze=Se[Re];Dn(b,C,ze,ze.viewport)}}else X.length>0&&zn(ie,X,C,W),$e&&Ce.render(C),Dn(b,C,W);c!==null&&(tt.updateMultisampleRenderTarget(c),tt.updateRenderTargetMipmap(c)),C.isScene===!0&&C.onAfterRender(R,C,W),et.resetDefaultState(),$=-1,I=null,P.pop(),P.length>0?(x=P[P.length-1],fe===!0&&rt.setGlobalState(R.clippingPlanes,x.state.camera)):x=null,m.pop(),m.length>0?b=m[m.length-1]:b=null};function rn(C,W,ne,ie){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)ne=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)x.pushLight(C),C.castShadow&&x.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||vt.intersectsSprite(C)){ie&&it.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Oe);const Re=ve.update(C),Fe=C.material;Fe.visible&&b.push(C,Re,Fe,ne,it.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||vt.intersectsObject(C))){const Re=ve.update(C),Fe=C.material;if(ie&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),it.copy(C.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),it.copy(Re.boundingSphere.center)),it.applyMatrix4(C.matrixWorld).applyMatrix4(Oe)),Array.isArray(Fe)){const ze=Re.groups;for(let Ke=0,Je=ze.length;Ke<Je;Ke++){const je=ze[Ke],wt=Fe[je.materialIndex];wt&&wt.visible&&b.push(C,Re,wt,ne,it.z,je)}}else Fe.visible&&b.push(C,Re,Fe,ne,it.z,null)}}const Se=C.children;for(let Re=0,Fe=Se.length;Re<Fe;Re++)rn(Se[Re],W,ne,ie)}function Dn(C,W,ne,ie){const X=C.opaque,Se=C.transmissive,Re=C.transparent;x.setupLightsView(ne),fe===!0&&rt.setGlobalState(R.clippingPlanes,ne),ie&&He.viewport(L.copy(ie)),X.length>0&&Xi(X,W,ne),Se.length>0&&Xi(Se,W,ne),Re.length>0&&Xi(Re,W,ne),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function zn(C,W,ne,ie){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ie.id]===void 0&&(x.state.transmissionRenderTarget[ie.id]=new Ti(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float")?ts:ci,minFilter:Hi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const Se=x.state.transmissionRenderTarget[ie.id],Re=ie.viewport||L;Se.setSize(Re.z,Re.w);const Fe=R.getRenderTarget();R.setRenderTarget(Se),R.getClearColor(Y),pe=R.getClearAlpha(),pe<1&&R.setClearColor(16777215,.5),R.clear(),$e&&Ce.render(ne);const ze=R.toneMapping;R.toneMapping=Ei;const Ke=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),x.setupLightsView(ie),fe===!0&&rt.setGlobalState(R.clippingPlanes,ie),Xi(C,ne,ie),tt.updateMultisampleRenderTarget(Se),tt.updateRenderTargetMipmap(Se),xt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let je=0,wt=W.length;je<wt;je++){const Ut=W[je],zt=Ut.object,un=Ut.geometry,bt=Ut.material,Ge=Ut.group;if(bt.side===ai&&zt.layers.test(ie.layers)){const Wt=bt.side;bt.side=xn,bt.needsUpdate=!0,ss(zt,ne,ie,un,bt,Ge),bt.side=Wt,bt.needsUpdate=!0,Je=!0}}Je===!0&&(tt.updateMultisampleRenderTarget(Se),tt.updateRenderTargetMipmap(Se))}R.setRenderTarget(Fe),R.setClearColor(Y,pe),Ke!==void 0&&(ie.viewport=Ke),R.toneMapping=ze}function Xi(C,W,ne){const ie=W.isScene===!0?W.overrideMaterial:null;for(let X=0,Se=C.length;X<Se;X++){const Re=C[X],Fe=Re.object,ze=Re.geometry,Ke=ie===null?Re.material:ie,Je=Re.group;Fe.layers.test(ne.layers)&&ss(Fe,W,ne,ze,Ke,Je)}}function ss(C,W,ne,ie,X,Se){C.onBeforeRender(R,W,ne,ie,X,Se),C.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),X.transparent===!0&&X.side===ai&&X.forceSinglePass===!1?(X.side=xn,X.needsUpdate=!0,R.renderBufferDirect(ne,W,ie,X,C,Se),X.side=bi,X.needsUpdate=!0,R.renderBufferDirect(ne,W,ie,X,C,Se),X.side=ai):R.renderBufferDirect(ne,W,ie,X,C,Se),C.onAfterRender(R,W,ne,ie,X,Se)}function qi(C,W,ne){W.isScene!==!0&&(W=at);const ie=Xe.get(C),X=x.state.lights,Se=x.state.shadowsArray,Re=X.state.version,Fe=K.getParameters(C,X.state,Se,W,ne),ze=K.getProgramCacheKey(Fe);let Ke=ie.programs;ie.environment=C.isMeshStandardMaterial?W.environment:null,ie.fog=W.fog,ie.envMap=(C.isMeshStandardMaterial?w:O).get(C.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,Ke===void 0&&(C.addEventListener("dispose",Ve),Ke=new Map,ie.programs=Ke);let Je=Ke.get(ze);if(Je!==void 0){if(ie.currentProgram===Je&&ie.lightsStateVersion===Re)return as(C,Fe),Je}else Fe.uniforms=K.getUniforms(C),C.onBeforeCompile(Fe,R),Je=K.acquireProgram(Fe,ze),Ke.set(ze,Je),ie.uniforms=Fe.uniforms;const je=ie.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(je.clippingPlanes=rt.uniform),as(C,Fe),ie.needsLights=oa(C),ie.lightsStateVersion=Re,ie.needsLights&&(je.ambientLightColor.value=X.state.ambient,je.lightProbe.value=X.state.probe,je.directionalLights.value=X.state.directional,je.directionalLightShadows.value=X.state.directionalShadow,je.spotLights.value=X.state.spot,je.spotLightShadows.value=X.state.spotShadow,je.rectAreaLights.value=X.state.rectArea,je.ltc_1.value=X.state.rectAreaLTC1,je.ltc_2.value=X.state.rectAreaLTC2,je.pointLights.value=X.state.point,je.pointLightShadows.value=X.state.pointShadow,je.hemisphereLights.value=X.state.hemi,je.directionalShadowMap.value=X.state.directionalShadowMap,je.directionalShadowMatrix.value=X.state.directionalShadowMatrix,je.spotShadowMap.value=X.state.spotShadowMap,je.spotLightMatrix.value=X.state.spotLightMatrix,je.spotLightMap.value=X.state.spotLightMap,je.pointShadowMap.value=X.state.pointShadowMap,je.pointShadowMatrix.value=X.state.pointShadowMatrix),ie.currentProgram=Je,ie.uniformsList=null,Je}function Pr(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=qs.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function as(C,W){const ne=Xe.get(C);ne.outputColorSpace=W.outputColorSpace,ne.batching=W.batching,ne.batchingColor=W.batchingColor,ne.instancing=W.instancing,ne.instancingColor=W.instancingColor,ne.instancingMorph=W.instancingMorph,ne.skinning=W.skinning,ne.morphTargets=W.morphTargets,ne.morphNormals=W.morphNormals,ne.morphColors=W.morphColors,ne.morphTargetsCount=W.morphTargetsCount,ne.numClippingPlanes=W.numClippingPlanes,ne.numIntersection=W.numClipIntersection,ne.vertexAlphas=W.vertexAlphas,ne.vertexTangents=W.vertexTangents,ne.toneMapping=W.toneMapping}function aa(C,W,ne,ie,X){W.isScene!==!0&&(W=at),tt.resetTextureUnits();const Se=W.fog,Re=ie.isMeshStandardMaterial?W.environment:null,Fe=c===null?R.outputColorSpace:c.isXRRenderTarget===!0?c.texture.colorSpace:Ai,ze=(ie.isMeshStandardMaterial?w:O).get(ie.envMap||Re),Ke=ie.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Je=!!ne.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),je=!!ne.morphAttributes.position,wt=!!ne.morphAttributes.normal,Ut=!!ne.morphAttributes.color;let zt=Ei;ie.toneMapped&&(c===null||c.isXRRenderTarget===!0)&&(zt=R.toneMapping);const un=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,bt=un!==void 0?un.length:0,Ge=Xe.get(ie),Wt=x.state.lights;if(fe===!0&&(ye===!0||C!==I)){const en=C===I&&ie.id===$;rt.setState(ie,C,en)}let Tt=!1;ie.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Wt.state.version||Ge.outputColorSpace!==Fe||X.isBatchedMesh&&Ge.batching===!1||!X.isBatchedMesh&&Ge.batching===!0||X.isBatchedMesh&&Ge.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ge.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ge.instancing===!1||!X.isInstancedMesh&&Ge.instancing===!0||X.isSkinnedMesh&&Ge.skinning===!1||!X.isSkinnedMesh&&Ge.skinning===!0||X.isInstancedMesh&&Ge.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ge.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ge.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ge.instancingMorph===!1&&X.morphTexture!==null||Ge.envMap!==ze||ie.fog===!0&&Ge.fog!==Se||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==rt.numPlanes||Ge.numIntersection!==rt.numIntersection)||Ge.vertexAlphas!==Ke||Ge.vertexTangents!==Je||Ge.morphTargets!==je||Ge.morphNormals!==wt||Ge.morphColors!==Ut||Ge.toneMapping!==zt||Ge.morphTargetsCount!==bt)&&(Tt=!0):(Tt=!0,Ge.__version=ie.version);let Nt=Ge.currentProgram;Tt===!0&&(Nt=qi(ie,W,X));let yn=!1,Kt=!1,Lr=!1;const kt=Nt.getUniforms(),Tn=Ge.uniforms;if(He.useProgram(Nt.program)&&(yn=!0,Kt=!0,Lr=!0),ie.id!==$&&($=ie.id,Kt=!0),yn||I!==C){kt.setValue(H,"projectionMatrix",C.projectionMatrix),kt.setValue(H,"viewMatrix",C.matrixWorldInverse);const en=kt.map.cameraPosition;en!==void 0&&en.setValue(H,Ue.setFromMatrixPosition(C.matrixWorld)),Et.logarithmicDepthBuffer&&kt.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&kt.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),I!==C&&(I=C,Kt=!0,Lr=!0)}if(X.isSkinnedMesh){kt.setOptional(H,X,"bindMatrix"),kt.setOptional(H,X,"bindMatrixInverse");const en=X.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),kt.setValue(H,"boneTexture",en.boneTexture,tt))}X.isBatchedMesh&&(kt.setOptional(H,X,"batchingTexture"),kt.setValue(H,"batchingTexture",X._matricesTexture,tt),kt.setOptional(H,X,"batchingIdTexture"),kt.setValue(H,"batchingIdTexture",X._indirectTexture,tt),kt.setOptional(H,X,"batchingColorTexture"),X._colorsTexture!==null&&kt.setValue(H,"batchingColorTexture",X._colorsTexture,tt));const ji=ne.morphAttributes;if((ji.position!==void 0||ji.normal!==void 0||ji.color!==void 0)&&ot.update(X,ne,Nt),(Kt||Ge.receiveShadow!==X.receiveShadow)&&(Ge.receiveShadow=X.receiveShadow,kt.setValue(H,"receiveShadow",X.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Tn.envMap.value=ze,Tn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&W.environment!==null&&(Tn.envMapIntensity.value=W.environmentIntensity),Kt&&(kt.setValue(H,"toneMappingExposure",R.toneMappingExposure),Ge.needsLights&&os(Tn,Lr),Se&&ie.fog===!0&&Ne.refreshFogUniforms(Tn,Se),Ne.refreshMaterialUniforms(Tn,ie,de,le,x.state.transmissionRenderTarget[C.id]),qs.upload(H,Pr(Ge),Tn,tt)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(qs.upload(H,Pr(Ge),Tn,tt),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&kt.setValue(H,"center",X.center),kt.setValue(H,"modelViewMatrix",X.modelViewMatrix),kt.setValue(H,"normalMatrix",X.normalMatrix),kt.setValue(H,"modelMatrix",X.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const en=ie.uniformsGroups;for(let Yi=0,la=en.length;Yi<la;Yi++){const ls=en[Yi];Rt.update(ls,Nt),Rt.bind(ls,Nt)}}return Nt}function os(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function oa(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return c},this.setRenderTargetTextures=function(C,W,ne){Xe.get(C.texture).__webglTexture=W,Xe.get(C.depthTexture).__webglTexture=ne;const ie=Xe.get(C);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=ne===void 0,ie.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,W){const ne=Xe.get(C);ne.__webglFramebuffer=W,ne.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,ne=0){c=C,q=W,z=ne;let ie=!0,X=null,Se=!1,Re=!1;if(C){const ze=Xe.get(C);ze.__useDefaultFramebuffer!==void 0?(He.bindFramebuffer(H.FRAMEBUFFER,null),ie=!1):ze.__webglFramebuffer===void 0?tt.setupRenderTarget(C):ze.__hasExternalTextures&&tt.rebindTextures(C,Xe.get(C.texture).__webglTexture,Xe.get(C.depthTexture).__webglTexture);const Ke=C.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Re=!0);const Je=Xe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Je[W])?X=Je[W][ne]:X=Je[W],Se=!0):C.samples>0&&tt.useMultisampledRTT(C)===!1?X=Xe.get(C).__webglMultisampledFramebuffer:Array.isArray(Je)?X=Je[ne]:X=Je,L.copy(C.viewport),V.copy(C.scissor),ce=C.scissorTest}else L.copy(De).multiplyScalar(de).floor(),V.copy(Be).multiplyScalar(de).floor(),ce=ft;if(He.bindFramebuffer(H.FRAMEBUFFER,X)&&ie&&He.drawBuffers(C,X),He.viewport(L),He.scissor(V),He.setScissorTest(ce),Se){const ze=Xe.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+W,ze.__webglTexture,ne)}else if(Re){const ze=Xe.get(C.texture),Ke=W||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,ze.__webglTexture,ne||0,Ke)}$=-1},this.readRenderTargetPixels=function(C,W,ne,ie,X,Se,Re){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Xe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Re!==void 0&&(Fe=Fe[Re]),Fe){He.bindFramebuffer(H.FRAMEBUFFER,Fe);try{const ze=C.texture,Ke=ze.format,Je=ze.type;if(!Et.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-ie&&ne>=0&&ne<=C.height-X&&H.readPixels(W,ne,ie,X,qe.convert(Ke),qe.convert(Je),Se)}finally{const ze=c!==null?Xe.get(c).__webglFramebuffer:null;He.bindFramebuffer(H.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(C,W,ne,ie,X,Se,Re){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Xe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Re!==void 0&&(Fe=Fe[Re]),Fe){He.bindFramebuffer(H.FRAMEBUFFER,Fe);try{const ze=C.texture,Ke=ze.format,Je=ze.type;if(!Et.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=C.width-ie&&ne>=0&&ne<=C.height-X){const je=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,je),H.bufferData(H.PIXEL_PACK_BUFFER,Se.byteLength,H.STREAM_READ),H.readPixels(W,ne,ie,X,qe.convert(Ke),qe.convert(Je),0),H.flush();const wt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);await tf(H,wt,4);try{H.bindBuffer(H.PIXEL_PACK_BUFFER,je),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Se)}finally{H.deleteBuffer(je),H.deleteSync(wt)}return Se}}finally{const ze=c!==null?Xe.get(c).__webglFramebuffer:null;He.bindFramebuffer(H.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(C,W=null,ne=0){C.isTexture!==!0&&(Kr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,C=arguments[1]);const ie=Math.pow(2,-ne),X=Math.floor(C.image.width*ie),Se=Math.floor(C.image.height*ie),Re=W!==null?W.x:0,Fe=W!==null?W.y:0;tt.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,ne,0,0,Re,Fe,X,Se),He.unbindTexture()},this.copyTextureToTexture=function(C,W,ne=null,ie=null,X=0){C.isTexture!==!0&&(Kr("WebGLRenderer: copyTextureToTexture function signature has changed."),ie=arguments[0]||null,C=arguments[1],W=arguments[2],X=arguments[3]||0,ne=null);let Se,Re,Fe,ze,Ke,Je;ne!==null?(Se=ne.max.x-ne.min.x,Re=ne.max.y-ne.min.y,Fe=ne.min.x,ze=ne.min.y):(Se=C.image.width,Re=C.image.height,Fe=0,ze=0),ie!==null?(Ke=ie.x,Je=ie.y):(Ke=0,Je=0);const je=qe.convert(W.format),wt=qe.convert(W.type);tt.setTexture2D(W,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment);const Ut=H.getParameter(H.UNPACK_ROW_LENGTH),zt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),un=H.getParameter(H.UNPACK_SKIP_PIXELS),bt=H.getParameter(H.UNPACK_SKIP_ROWS),Ge=H.getParameter(H.UNPACK_SKIP_IMAGES),Wt=C.isCompressedTexture?C.mipmaps[X]:C.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,Wt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Wt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Fe),H.pixelStorei(H.UNPACK_SKIP_ROWS,ze),C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,X,Ke,Je,Se,Re,je,wt,Wt.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,X,Ke,Je,Wt.width,Wt.height,je,Wt.data):H.texSubImage2D(H.TEXTURE_2D,X,Ke,Je,Se,Re,je,wt,Wt),H.pixelStorei(H.UNPACK_ROW_LENGTH,Ut),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,zt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,un),H.pixelStorei(H.UNPACK_SKIP_ROWS,bt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ge),X===0&&W.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),He.unbindTexture()},this.copyTextureToTexture3D=function(C,W,ne=null,ie=null,X=0){C.isTexture!==!0&&(Kr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,ie=arguments[1]||null,C=arguments[2],W=arguments[3],X=arguments[4]||0);let Se,Re,Fe,ze,Ke,Je,je,wt,Ut;const zt=C.isCompressedTexture?C.mipmaps[X]:C.image;ne!==null?(Se=ne.max.x-ne.min.x,Re=ne.max.y-ne.min.y,Fe=ne.max.z-ne.min.z,ze=ne.min.x,Ke=ne.min.y,Je=ne.min.z):(Se=zt.width,Re=zt.height,Fe=zt.depth,ze=0,Ke=0,Je=0),ie!==null?(je=ie.x,wt=ie.y,Ut=ie.z):(je=0,wt=0,Ut=0);const un=qe.convert(W.format),bt=qe.convert(W.type);let Ge;if(W.isData3DTexture)tt.setTexture3D(W,0),Ge=H.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)tt.setTexture2DArray(W,0),Ge=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment);const Wt=H.getParameter(H.UNPACK_ROW_LENGTH),Tt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Nt=H.getParameter(H.UNPACK_SKIP_PIXELS),yn=H.getParameter(H.UNPACK_SKIP_ROWS),Kt=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,zt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,zt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ze),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ke),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Je),C.isDataTexture||C.isData3DTexture?H.texSubImage3D(Ge,X,je,wt,Ut,Se,Re,Fe,un,bt,zt.data):W.isCompressedArrayTexture?H.compressedTexSubImage3D(Ge,X,je,wt,Ut,Se,Re,Fe,un,zt.data):H.texSubImage3D(Ge,X,je,wt,Ut,Se,Re,Fe,un,bt,zt),H.pixelStorei(H.UNPACK_ROW_LENGTH,Wt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Tt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Nt),H.pixelStorei(H.UNPACK_SKIP_ROWS,yn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Kt),X===0&&W.generateMipmaps&&H.generateMipmap(Ge),He.unbindTexture()},this.initRenderTarget=function(C){Xe.get(C).__webglFramebuffer===void 0&&tt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?tt.setTextureCube(C,0):C.isData3DTexture?tt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?tt.setTexture2DArray(C,0):tt.setTexture2D(C,0),He.unbindTexture()},this.resetState=function(){q=0,z=0,c=null,He.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===jo?"display-p3":"srgb",t.unpackColorSpace=Ct.workingColorSpace===ia?"display-p3":"srgb"}}class Jo{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new _t(e),this.near=t,this.far=n}clone(){return new Jo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class f_ extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class _r extends mn{constructor(e=null,t=1,n=1,r,a,l,u,d,f=Qt,g=Qt,_,v){super(null,l,u,d,f,g,r,a,_,v),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class js extends ui{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ea=new j,ta=new j,hc=new Xt,Gr=new ra,Ns=new ns,$a=new j,fc=new j;class d_ extends gn{constructor(e=new bn,t=new js){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)ea.fromBufferAttribute(t,r-1),ta.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=ea.distanceTo(ta);e.setAttribute("lineDistance",new nn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(r),Ns.radius+=a,e.ray.intersectsSphere(Ns)===!1)return;hc.copy(r).invert(),Gr.copy(e.ray).applyMatrix4(hc);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,f=this.isLineSegments?2:1,g=n.index,v=n.attributes.position;if(g!==null){const y=Math.max(0,l.start),E=Math.min(g.count,l.start+l.count);for(let b=y,x=E-1;b<x;b+=f){const m=g.getX(b),P=g.getX(b+1),R=Fs(this,e,Gr,d,m,P);R&&t.push(R)}if(this.isLineLoop){const b=g.getX(E-1),x=g.getX(y),m=Fs(this,e,Gr,d,b,x);m&&t.push(m)}}else{const y=Math.max(0,l.start),E=Math.min(v.count,l.start+l.count);for(let b=y,x=E-1;b<x;b+=f){const m=Fs(this,e,Gr,d,b,b+1);m&&t.push(m)}if(this.isLineLoop){const b=Fs(this,e,Gr,d,E-1,y);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const u=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function Fs(i,e,t,n,r,a){const l=i.geometry.attributes.position;if(ea.fromBufferAttribute(l,r),ta.fromBufferAttribute(l,a),t.distanceSqToSegment(ea,ta,$a,fc)>n)return;$a.applyMatrix4(i.matrixWorld);const d=e.ray.origin.distanceTo($a);if(!(d<e.near||d>e.far))return{distance:d,point:fc.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,object:i}}const dc=new j,pc=new j;class Fo extends d_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,a=t.count;r<a;r+=2)dc.fromBufferAttribute(t,r),pc.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+dc.distanceTo(pc);e.setAttribute("lineDistance",new nn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qr extends ui{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const mc=new Xt,Oo=new ra,Os=new ns,Bs=new j;class Ka extends gn{constructor(e=new bn,t=new qr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(r),Os.radius+=a,e.ray.intersectsSphere(Os)===!1)return;mc.copy(r).invert(),Oo.copy(e.ray).applyMatrix4(mc);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,f=n.index,_=n.attributes.position;if(f!==null){const v=Math.max(0,l.start),y=Math.min(f.count,l.start+l.count);for(let E=v,b=y;E<b;E++){const x=f.getX(E);Bs.fromBufferAttribute(_,x),gc(Bs,x,d,r,e,t,this)}}else{const v=Math.max(0,l.start),y=Math.min(_.count,l.start+l.count);for(let E=v,b=y;E<b;E++)Bs.fromBufferAttribute(_,E),gc(Bs,E,d,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const u=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function gc(i,e,t,n,r,a,l){const u=Oo.distanceSqToPoint(i);if(u<t){const d=new j;Oo.closestPointToPoint(i,d),d.applyMatrix4(n);const f=r.ray.origin.distanceTo(d);if(f<r.near||f>r.far)return;a.push({distance:f,distanceToRay:Math.sqrt(u),point:d,index:e,face:null,object:l})}}class p_ extends ui{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new _t(16777215),this.specular=new _t(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hc,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const _c={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class m_{constructor(e,t,n){const r=this;let a=!1,l=0,u=0,d;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(g){u++,a===!1&&r.onStart!==void 0&&r.onStart(g,l,u),a=!0},this.itemEnd=function(g){l++,r.onProgress!==void 0&&r.onProgress(g,l,u),l===u&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(g){r.onError!==void 0&&r.onError(g)},this.resolveURL=function(g){return d?d(g):g},this.setURLModifier=function(g){return d=g,this},this.addHandler=function(g,_){return f.push(g,_),this},this.removeHandler=function(g){const _=f.indexOf(g);return _!==-1&&f.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=f.length;_<v;_+=2){const y=f[_],E=f[_+1];if(y.global&&(y.lastIndex=0),y.test(g))return E}return null}}}const g_=new m_;class Qo{constructor(e){this.manager=e!==void 0?e:g_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,a){n.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Qo.DEFAULT_MATERIAL_NAME="__DEFAULT";const ri={};class __ extends Error{constructor(e,t){super(e),this.response=t}}class v_ extends Qo{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=_c.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(ri[e]!==void 0){ri[e].push({onLoad:t,onProgress:n,onError:r});return}ri[e]=[],ri[e].push({onLoad:t,onProgress:n,onError:r});const l=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),u=this.mimeType,d=this.responseType;fetch(l).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;const g=ri[e],_=f.body.getReader(),v=f.headers.get("X-File-Size")||f.headers.get("Content-Length"),y=v?parseInt(v):0,E=y!==0;let b=0;const x=new ReadableStream({start(m){P();function P(){_.read().then(({done:R,value:N})=>{if(R)m.close();else{b+=N.byteLength;const q=new ProgressEvent("progress",{lengthComputable:E,loaded:b,total:y});for(let z=0,c=g.length;z<c;z++){const $=g[z];$.onProgress&&$.onProgress(q)}m.enqueue(N),P()}},R=>{m.error(R)})}}});return new Response(x)}else throw new __(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(d){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(g=>new DOMParser().parseFromString(g,u));case"json":return f.json();default:if(u===void 0)return f.text();{const _=/charset="?([^;"\s]*)"?/i.exec(u),v=_&&_[1]?_[1].toLowerCase():void 0,y=new TextDecoder(v);return f.arrayBuffer().then(E=>y.decode(E))}}}).then(f=>{_c.add(e,f);const g=ri[e];delete ri[e];for(let _=0,v=g.length;_<v;_++){const y=g[_];y.onLoad&&y.onLoad(f)}}).catch(f=>{const g=ri[e];if(g===void 0)throw this.manager.itemError(e),f;delete ri[e];for(let _=0,v=g.length;_<v;_++){const y=g[_];y.onError&&y.onError(f)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class vc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ln(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zo);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class Yn{constructor(e,t,n,r,a="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(a),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),Yn.nextNameID=Yn.nextNameID||0,this.$name.id=`lil-gui-name-${++Yn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class x_ extends Yn{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Bo(i){let e,t;return(e=i.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const y_={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:Bo,toHexString:Bo},es={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},M_={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,e,t=1){const n=es.fromHexString(i);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([i,e,t],n=1){n=255/n;const r=i*n<<16^e*n<<8^t*n<<0;return es.toHexString(r)}},S_={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,e,t=1){const n=es.fromHexString(i);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:i,g:e,b:t},n=1){n=255/n;const r=i*n<<16^e*n<<8^t*n<<0;return es.toHexString(r)}},E_=[y_,es,M_,S_];function b_(i){return E_.find(e=>e.match(i))}class T_ extends Yn{constructor(e,t,n,r){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=b_(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const a=Bo(this.$text.value);a&&this._setValueFromHexString(a)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Za extends Yn{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class A_ extends Yn{constructor(e,t,n,r,a,l){super(e,t,n,"number"),this._initInput(),this.min(r),this.max(a);const u=l!==void 0;this.step(u?l:this._getImplicitStep(),u),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let P=parseFloat(this.$input.value);isNaN(P)||(this._stepExplicit&&(P=this._snap(P)),this.setValue(this._clamp(P)))},n=P=>{const R=parseFloat(this.$input.value);isNaN(R)||(this._snapClampSetValue(R+P),this.$input.value=this.getValue())},r=P=>{P.key==="Enter"&&this.$input.blur(),P.code==="ArrowUp"&&(P.preventDefault(),n(this._step*this._arrowKeyMultiplier(P))),P.code==="ArrowDown"&&(P.preventDefault(),n(this._step*this._arrowKeyMultiplier(P)*-1))},a=P=>{this._inputFocused&&(P.preventDefault(),n(this._step*this._normalizeMouseWheel(P)))};let l=!1,u,d,f,g,_;const v=5,y=P=>{u=P.clientX,d=f=P.clientY,l=!0,g=this.getValue(),_=0,window.addEventListener("mousemove",E),window.addEventListener("mouseup",b)},E=P=>{if(l){const R=P.clientX-u,N=P.clientY-d;Math.abs(N)>v?(P.preventDefault(),this.$input.blur(),l=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(R)>v&&b()}if(!l){const R=P.clientY-f;_-=R*this._step*this._arrowKeyMultiplier(P),g+_>this._max?_=this._max-g:g+_<this._min&&(_=this._min-g),this._snapClampSetValue(g+_)}f=P.clientY},b=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",E),window.removeEventListener("mouseup",b)},x=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",r),this.$input.addEventListener("wheel",a,{passive:!1}),this.$input.addEventListener("mousedown",y),this.$input.addEventListener("focus",x),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(m,P,R,N,q)=>(m-P)/(R-P)*(q-N)+N,t=m=>{const P=this.$slider.getBoundingClientRect();let R=e(m,P.left,P.right,this._min,this._max);this._snapClampSetValue(R)},n=m=>{this._setDraggingStyle(!0),t(m.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",a)},r=m=>{t(m.clientX)},a=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",a)};let l=!1,u,d;const f=m=>{m.preventDefault(),this._setDraggingStyle(!0),t(m.touches[0].clientX),l=!1},g=m=>{m.touches.length>1||(this._hasScrollBar?(u=m.touches[0].clientX,d=m.touches[0].clientY,l=!0):f(m),window.addEventListener("touchmove",_,{passive:!1}),window.addEventListener("touchend",v))},_=m=>{if(l){const P=m.touches[0].clientX-u,R=m.touches[0].clientY-d;Math.abs(P)>Math.abs(R)?f(m):(window.removeEventListener("touchmove",_),window.removeEventListener("touchend",v))}else m.preventDefault(),t(m.touches[0].clientX)},v=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",_),window.removeEventListener("touchend",v)},y=this._callOnFinishChange.bind(this),E=400;let b;const x=m=>{if(Math.abs(m.deltaX)<Math.abs(m.deltaY)&&this._hasScrollBar)return;m.preventDefault();const R=this._normalizeMouseWheel(m)*this._step;this._snapClampSetValue(this.getValue()+R),this.$input.value=this.getValue(),clearTimeout(b),b=setTimeout(y,E)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",g,{passive:!1}),this.$slider.addEventListener("wheel",x,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class w_ extends Yn{constructor(e,t,n,r){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class C_ extends Yn{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const R_=`.lil-gui {
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
}`;function P_(i){const e=document.createElement("style");e.innerHTML=i;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let xc=!1;class el{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:r,title:a="Controls",closeFolders:l=!1,injectStyles:u=!0,touchStyles:d=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",f=>{(f.code==="Enter"||f.code==="Space")&&(f.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(a),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),d&&this.domElement.classList.add("allow-touch-styles"),!xc&&u&&(P_(R_),xc=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=l}add(e,t,n,r,a){if(Object(n)===n)return new w_(this,e,t,n);const l=e[t];switch(typeof l){case"number":return new A_(this,e,t,n,r,a);case"boolean":return new x_(this,e,t);case"string":return new C_(this,e,t);case"function":return new Za(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,l)}addColor(e,t,n=1){return new T_(this,e,t,n)}addFolder(e){const t=new el({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Za||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Za)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=a=>{a.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const L_=new Qc(-1,1,1,-1,0,1);class D_ extends bn{constructor(){super(),this.setAttribute("position",new nn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new nn([0,2,0,0,2,0],2))}}const I_=new D_;class U_{constructor(e){this._mesh=new En(I_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,L_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class N_{constructor(e,t,n){this.variables=[],this.currentTextureIndex=0;let r=cn;const a={passThruTexture:{value:null}},l=f(_(),a),u=new U_(l);this.setDataType=function(v){return r=v,this},this.addVariable=function(v,y,E){const b=this.createShaderMaterial(y),x={name:v,initialValueTexture:E,material:b,dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:Qt,magFilter:Qt};return this.variables.push(x),x},this.setVariableDependencies=function(v,y){v.dependencies=y},this.init=function(){if(n.capabilities.maxVertexTextures===0)return"No support for vertex shader textures.";for(let v=0;v<this.variables.length;v++){const y=this.variables[v];y.renderTargets[0]=this.createRenderTarget(e,t,y.wrapS,y.wrapT,y.minFilter,y.magFilter),y.renderTargets[1]=this.createRenderTarget(e,t,y.wrapS,y.wrapT,y.minFilter,y.magFilter),this.renderTexture(y.initialValueTexture,y.renderTargets[0]),this.renderTexture(y.initialValueTexture,y.renderTargets[1]);const E=y.material,b=E.uniforms;if(y.dependencies!==null)for(let x=0;x<y.dependencies.length;x++){const m=y.dependencies[x];if(m.name!==y.name){let P=!1;for(let R=0;R<this.variables.length;R++)if(m.name===this.variables[R].name){P=!0;break}if(!P)return"Variable dependency not found. Variable="+y.name+", dependency="+m.name}b[m.name]={value:null},E.fragmentShader=`
uniform sampler2D `+m.name+`;
`+E.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){const v=this.currentTextureIndex,y=this.currentTextureIndex===0?1:0;for(let E=0,b=this.variables.length;E<b;E++){const x=this.variables[E];if(x.dependencies!==null){const m=x.material.uniforms;for(let P=0,R=x.dependencies.length;P<R;P++){const N=x.dependencies[P];m[N.name].value=N.renderTargets[v].texture}}this.doRenderTarget(x.material,x.renderTargets[y])}this.currentTextureIndex=y},this.getCurrentRenderTarget=function(v){return v.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(v){return v.renderTargets[this.currentTextureIndex===0?1:0]},this.dispose=function(){u.dispose();const v=this.variables;for(let y=0;y<v.length;y++){const E=v[y];E.initialValueTexture&&E.initialValueTexture.dispose();const b=E.renderTargets;for(let x=0;x<b.length;x++)b[x].dispose()}};function d(v){v.defines.resolution="vec2( "+e.toFixed(1)+", "+t.toFixed(1)+" )"}this.addResolutionDefine=d;function f(v,y){y=y||{};const E=new Kn({name:"GPUComputationShader",uniforms:y,vertexShader:g(),fragmentShader:v});return d(E),E}this.createShaderMaterial=f,this.createRenderTarget=function(v,y,E,b,x,m){return v=v||e,y=y||t,E=E||oi,b=b||oi,x=x||Qt,m=m||Qt,new Ti(v,y,{wrapS:E,wrapT:b,minFilter:x,magFilter:m,format:pn,type:r,depthBuffer:!1})},this.createTexture=function(){const v=new Float32Array(e*t*4),y=new _r(v,e,t,pn,cn);return y.needsUpdate=!0,y},this.renderTexture=function(v,y){a.passThruTexture.value=v,this.doRenderTarget(l,y),a.passThruTexture.value=null},this.doRenderTarget=function(v,y){const E=n.getRenderTarget(),b=n.xr.enabled,x=n.shadowMap.autoUpdate;n.xr.enabled=!1,n.shadowMap.autoUpdate=!1,u.material=v,n.setRenderTarget(y),u.render(n),u.material=l,n.xr.enabled=b,n.shadowMap.autoUpdate=x,n.setRenderTarget(E)};function g(){return`void main()	{

	gl_Position = vec4( position, 1.0 );

}
`}function _(){return`uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`}}}var Zr=function(){var i=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(g){g.preventDefault(),n(++i%e.children.length)},!1);function t(g){return e.appendChild(g.dom),g}function n(g){for(var _=0;_<e.children.length;_++)e.children[_].style.display=_===g?"block":"none";i=g}var r=(performance||Date).now(),a=r,l=0,u=t(new Zr.Panel("FPS","#0ff","#002")),d=t(new Zr.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=t(new Zr.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){r=(performance||Date).now()},end:function(){l++;var g=(performance||Date).now();if(d.update(g-r,200),g>=a+1e3&&(u.update(l*1e3/(g-a),100),a=g,l=0,f)){var _=performance.memory;f.update(_.usedJSHeapSize/1048576,_.jsHeapSizeLimit/1048576)}return g},update:function(){r=this.end()},domElement:e,setMode:n}};Zr.Panel=function(i,e,t){var n=1/0,r=0,a=Math.round,l=a(window.devicePixelRatio||1),u=80*l,d=48*l,f=3*l,g=2*l,_=3*l,v=15*l,y=74*l,E=30*l,b=document.createElement("canvas");b.width=u,b.height=d,b.style.cssText="width:80px;height:48px";var x=b.getContext("2d");return x.font="bold "+9*l+"px Helvetica,Arial,sans-serif",x.textBaseline="top",x.fillStyle=t,x.fillRect(0,0,u,d),x.fillStyle=e,x.fillText(i,f,g),x.fillRect(_,v,y,E),x.fillStyle=t,x.globalAlpha=.9,x.fillRect(_,v,y,E),{dom:b,update:function(m,P){n=Math.min(n,m),r=Math.max(r,m),x.fillStyle=t,x.globalAlpha=1,x.fillRect(0,0,u,v),x.fillStyle=e,x.fillText(a(m)+" "+i+" ("+a(n)+"-"+a(r)+")",f,g),x.drawImage(b,_+l,v,y-l,E,_,v,y-l,E),x.fillRect(_+y-l,v,l,E),x.fillStyle=t,x.globalAlpha=.9,x.fillRect(_+y-l,v,l,a((1-m/P)*E))}}};const yc={type:"change"},Ja={type:"start"},Mc={type:"end"},zs=new ra,Sc=new yi,F_=Math.cos(70*Qh.DEG2RAD);class O_ extends Wi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zi.ROTATE,MIDDLE:Zi.DOLLY,RIGHT:Zi.PAN},this.touches={ONE:Ji.ROTATE,TWO:Ji.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return u.phi},this.getAzimuthalAngle=function(){return u.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",Ie),this._domElementKeyEvents=T},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ie),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(yc),n.update(),a=r.NONE},this.update=function(){const T=new j,J=new Vi().setFromUnitVectors(e.up,new j(0,1,0)),te=J.clone().invert(),se=new j,_e=new Vi,Ve=new j,Ze=2*Math.PI;return function(Mt=null){const dt=n.object.position;T.copy(dt).sub(n.target),T.applyQuaternion(J),u.setFromVector3(T),n.autoRotate&&a===r.NONE&&ce(L(Mt)),n.enableDamping?(u.theta+=d.theta*n.dampingFactor,u.phi+=d.phi*n.dampingFactor):(u.theta+=d.theta,u.phi+=d.phi);let Gt=n.minAzimuthAngle,Ht=n.maxAzimuthAngle;isFinite(Gt)&&isFinite(Ht)&&(Gt<-Math.PI?Gt+=Ze:Gt>Math.PI&&(Gt-=Ze),Ht<-Math.PI?Ht+=Ze:Ht>Math.PI&&(Ht-=Ze),Gt<=Ht?u.theta=Math.max(Gt,Math.min(Ht,u.theta)):u.theta=u.theta>(Gt+Ht)/2?Math.max(Gt,u.theta):Math.min(Ht,u.theta)),u.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,u.phi)),u.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(g,n.dampingFactor):n.target.add(g),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Ln=!1;if(n.zoomToCursor&&z||n.object.isOrthographicCamera)u.radius=De(u.radius);else{const Bt=u.radius;u.radius=De(u.radius*f),Ln=Bt!=u.radius}if(T.setFromSpherical(u),T.applyQuaternion(te),dt.copy(n.target).add(T),n.object.lookAt(n.target),n.enableDamping===!0?(d.theta*=1-n.dampingFactor,d.phi*=1-n.dampingFactor,g.multiplyScalar(1-n.dampingFactor)):(d.set(0,0,0),g.set(0,0,0)),n.zoomToCursor&&z){let Bt=null;if(n.object.isPerspectiveCamera){const rn=T.length();Bt=De(rn*f);const Dn=rn-Bt;n.object.position.addScaledVector(N,Dn),n.object.updateMatrixWorld(),Ln=!!Dn}else if(n.object.isOrthographicCamera){const rn=new j(q.x,q.y,0);rn.unproject(n.object);const Dn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/f)),n.object.updateProjectionMatrix(),Ln=Dn!==n.object.zoom;const zn=new j(q.x,q.y,0);zn.unproject(n.object),n.object.position.sub(zn).add(rn),n.object.updateMatrixWorld(),Bt=T.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Bt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Bt).add(n.object.position):(zs.origin.copy(n.object.position),zs.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(zs.direction))<F_?e.lookAt(n.target):(Sc.setFromNormalAndCoplanarPoint(n.object.up,n.target),zs.intersectPlane(Sc,n.target))))}else if(n.object.isOrthographicCamera){const Bt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/f)),Bt!==n.object.zoom&&(n.object.updateProjectionMatrix(),Ln=!0)}return f=1,z=!1,Ln||se.distanceToSquared(n.object.position)>l||8*(1-_e.dot(n.object.quaternion))>l||Ve.distanceToSquared(n.target)>l?(n.dispatchEvent(yc),se.copy(n.object.position),_e.copy(n.object.quaternion),Ve.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ce),n.domElement.removeEventListener("pointerdown",tt),n.domElement.removeEventListener("pointercancel",w),n.domElement.removeEventListener("wheel",ve),n.domElement.removeEventListener("pointermove",O),n.domElement.removeEventListener("pointerup",w),n.domElement.getRootNode().removeEventListener("keydown",Ne,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ie),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const l=1e-6,u=new vc,d=new vc;let f=1;const g=new j,_=new lt,v=new lt,y=new lt,E=new lt,b=new lt,x=new lt,m=new lt,P=new lt,R=new lt,N=new j,q=new lt;let z=!1;const c=[],$={};let I=!1;function L(T){return T!==null?2*Math.PI/60*n.autoRotateSpeed*T:2*Math.PI/60/60*n.autoRotateSpeed}function V(T){const J=Math.abs(T*.01);return Math.pow(.95,n.zoomSpeed*J)}function ce(T){d.theta-=T}function Y(T){d.phi-=T}const pe=function(){const T=new j;return function(te,se){T.setFromMatrixColumn(se,0),T.multiplyScalar(-te),g.add(T)}}(),me=function(){const T=new j;return function(te,se){n.screenSpacePanning===!0?T.setFromMatrixColumn(se,1):(T.setFromMatrixColumn(se,0),T.crossVectors(n.object.up,T)),T.multiplyScalar(te),g.add(T)}}(),le=function(){const T=new j;return function(te,se){const _e=n.domElement;if(n.object.isPerspectiveCamera){const Ve=n.object.position;T.copy(Ve).sub(n.target);let Ze=T.length();Ze*=Math.tan(n.object.fov/2*Math.PI/180),pe(2*te*Ze/_e.clientHeight,n.object.matrix),me(2*se*Ze/_e.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(pe(te*(n.object.right-n.object.left)/n.object.zoom/_e.clientWidth,n.object.matrix),me(se*(n.object.top-n.object.bottom)/n.object.zoom/_e.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function de(T){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?f/=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function oe(T){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?f*=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function be(T,J){if(!n.zoomToCursor)return;z=!0;const te=n.domElement.getBoundingClientRect(),se=T-te.left,_e=J-te.top,Ve=te.width,Ze=te.height;q.x=se/Ve*2-1,q.y=-(_e/Ze)*2+1,N.set(q.x,q.y,1).unproject(n.object).sub(n.object.position).normalize()}function De(T){return Math.max(n.minDistance,Math.min(n.maxDistance,T))}function Be(T){_.set(T.clientX,T.clientY)}function ft(T){be(T.clientX,T.clientX),m.set(T.clientX,T.clientY)}function vt(T){E.set(T.clientX,T.clientY)}function fe(T){v.set(T.clientX,T.clientY),y.subVectors(v,_).multiplyScalar(n.rotateSpeed);const J=n.domElement;ce(2*Math.PI*y.x/J.clientHeight),Y(2*Math.PI*y.y/J.clientHeight),_.copy(v),n.update()}function ye(T){P.set(T.clientX,T.clientY),R.subVectors(P,m),R.y>0?de(V(R.y)):R.y<0&&oe(V(R.y)),m.copy(P),n.update()}function Oe(T){b.set(T.clientX,T.clientY),x.subVectors(b,E).multiplyScalar(n.panSpeed),le(x.x,x.y),E.copy(b),n.update()}function Ue(T){be(T.clientX,T.clientY),T.deltaY<0?oe(V(T.deltaY)):T.deltaY>0&&de(V(T.deltaY)),n.update()}function it(T){let J=!1;switch(T.code){case n.keys.UP:T.ctrlKey||T.metaKey||T.shiftKey?Y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):le(0,n.keyPanSpeed),J=!0;break;case n.keys.BOTTOM:T.ctrlKey||T.metaKey||T.shiftKey?Y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):le(0,-n.keyPanSpeed),J=!0;break;case n.keys.LEFT:T.ctrlKey||T.metaKey||T.shiftKey?ce(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):le(n.keyPanSpeed,0),J=!0;break;case n.keys.RIGHT:T.ctrlKey||T.metaKey||T.shiftKey?ce(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):le(-n.keyPanSpeed,0),J=!0;break}J&&(T.preventDefault(),n.update())}function at(T){if(c.length===1)_.set(T.pageX,T.pageY);else{const J=et(T),te=.5*(T.pageX+J.x),se=.5*(T.pageY+J.y);_.set(te,se)}}function $e(T){if(c.length===1)E.set(T.pageX,T.pageY);else{const J=et(T),te=.5*(T.pageX+J.x),se=.5*(T.pageY+J.y);E.set(te,se)}}function Lt(T){const J=et(T),te=T.pageX-J.x,se=T.pageY-J.y,_e=Math.sqrt(te*te+se*se);m.set(0,_e)}function H(T){n.enableZoom&&Lt(T),n.enablePan&&$e(T)}function Dt(T){n.enableZoom&&Lt(T),n.enableRotate&&at(T)}function xt(T){if(c.length==1)v.set(T.pageX,T.pageY);else{const te=et(T),se=.5*(T.pageX+te.x),_e=.5*(T.pageY+te.y);v.set(se,_e)}y.subVectors(v,_).multiplyScalar(n.rotateSpeed);const J=n.domElement;ce(2*Math.PI*y.x/J.clientHeight),Y(2*Math.PI*y.y/J.clientHeight),_.copy(v)}function Et(T){if(c.length===1)b.set(T.pageX,T.pageY);else{const J=et(T),te=.5*(T.pageX+J.x),se=.5*(T.pageY+J.y);b.set(te,se)}x.subVectors(b,E).multiplyScalar(n.panSpeed),le(x.x,x.y),E.copy(b)}function He(T){const J=et(T),te=T.pageX-J.x,se=T.pageY-J.y,_e=Math.sqrt(te*te+se*se);P.set(0,_e),R.set(0,Math.pow(P.y/m.y,n.zoomSpeed)),de(R.y),m.copy(P);const Ve=(T.pageX+J.x)*.5,Ze=(T.pageY+J.y)*.5;be(Ve,Ze)}function It(T){n.enableZoom&&He(T),n.enablePan&&Et(T)}function Xe(T){n.enableZoom&&He(T),n.enableRotate&&xt(T)}function tt(T){n.enabled!==!1&&(c.length===0&&(n.domElement.setPointerCapture(T.pointerId),n.domElement.addEventListener("pointermove",O),n.domElement.addEventListener("pointerup",w)),!we(T)&&(ot(T),T.pointerType==="touch"?rt(T):ee(T)))}function O(T){n.enabled!==!1&&(T.pointerType==="touch"?Me(T):ge(T))}function w(T){switch(We(T),c.length){case 0:n.domElement.releasePointerCapture(T.pointerId),n.domElement.removeEventListener("pointermove",O),n.domElement.removeEventListener("pointerup",w),n.dispatchEvent(Mc),a=r.NONE;break;case 1:const J=c[0],te=$[J];rt({pointerId:J,pageX:te.x,pageY:te.y});break}}function ee(T){let J;switch(T.button){case 0:J=n.mouseButtons.LEFT;break;case 1:J=n.mouseButtons.MIDDLE;break;case 2:J=n.mouseButtons.RIGHT;break;default:J=-1}switch(J){case Zi.DOLLY:if(n.enableZoom===!1)return;ft(T),a=r.DOLLY;break;case Zi.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enablePan===!1)return;vt(T),a=r.PAN}else{if(n.enableRotate===!1)return;Be(T),a=r.ROTATE}break;case Zi.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enableRotate===!1)return;Be(T),a=r.ROTATE}else{if(n.enablePan===!1)return;vt(T),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(Ja)}function ge(T){switch(a){case r.ROTATE:if(n.enableRotate===!1)return;fe(T);break;case r.DOLLY:if(n.enableZoom===!1)return;ye(T);break;case r.PAN:if(n.enablePan===!1)return;Oe(T);break}}function ve(T){n.enabled===!1||n.enableZoom===!1||a!==r.NONE||(T.preventDefault(),n.dispatchEvent(Ja),Ue(K(T)),n.dispatchEvent(Mc))}function K(T){const J=T.deltaMode,te={clientX:T.clientX,clientY:T.clientY,deltaY:T.deltaY};switch(J){case 1:te.deltaY*=16;break;case 2:te.deltaY*=100;break}return T.ctrlKey&&!I&&(te.deltaY*=10),te}function Ne(T){T.key==="Control"&&(I=!0,n.domElement.getRootNode().addEventListener("keyup",Te,{passive:!0,capture:!0}))}function Te(T){T.key==="Control"&&(I=!1,n.domElement.getRootNode().removeEventListener("keyup",Te,{passive:!0,capture:!0}))}function Ie(T){n.enabled===!1||n.enablePan===!1||it(T)}function rt(T){switch(qe(T),c.length){case 1:switch(n.touches.ONE){case Ji.ROTATE:if(n.enableRotate===!1)return;at(T),a=r.TOUCH_ROTATE;break;case Ji.PAN:if(n.enablePan===!1)return;$e(T),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(n.touches.TWO){case Ji.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;H(T),a=r.TOUCH_DOLLY_PAN;break;case Ji.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Dt(T),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(Ja)}function Me(T){switch(qe(T),a){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;xt(T),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Et(T),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;It(T),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Xe(T),n.update();break;default:a=r.NONE}}function Ce(T){n.enabled!==!1&&T.preventDefault()}function ot(T){c.push(T.pointerId)}function We(T){delete $[T.pointerId];for(let J=0;J<c.length;J++)if(c[J]==T.pointerId){c.splice(J,1);return}}function we(T){for(let J=0;J<c.length;J++)if(c[J]==T.pointerId)return!0;return!1}function qe(T){let J=$[T.pointerId];J===void 0&&(J=new lt,$[T.pointerId]=J),J.set(T.pageX,T.pageY)}function et(T){const J=T.pointerId===c[0]?c[1]:c[0];return $[J]}n.domElement.addEventListener("contextmenu",Ce),n.domElement.addEventListener("pointerdown",tt),n.domElement.addEventListener("pointercancel",w),n.domElement.addEventListener("wheel",ve,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Ne,{passive:!0,capture:!0}),this.update()}}const B_=/^[og]\s*(.+)?/,z_=/^mtllib /,H_=/^usemtl /,k_=/^usemap /,Ec=/\s+/,bc=new j,Qa=new j,Tc=new j,Ac=new j,Rn=new j,Hs=new _t;function V_(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,a){const l=this._finalize(!1);l&&(l.inherited||l.groupCount<=0)&&this.materials.splice(l.index,1);const u={index:this.materials.length,name:r||"",mtllib:Array.isArray(a)&&a.length>0?a[a.length-1]:"",smooth:l!==void 0?l.smooth:this.smooth,groupStart:l!==void 0?l.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(d){const f={index:typeof d=="number"?d:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return f.clone=this.clone.bind(f),f}};return this.materials.push(u),u},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const a=this.currentMaterial();if(a&&a.groupEnd===-1&&(a.groupEnd=this.geometry.vertices.length/3,a.groupCount=a.groupEnd-a.groupStart,a.inherited=!1),r&&this.materials.length>1)for(let l=this.materials.length-1;l>=0;l--)this.materials[l].groupCount<=0&&this.materials.splice(l,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),a}},n&&n.name&&typeof n.clone=="function"){const r=n.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const r=this.vertices,a=this.object.geometry.vertices;a.push(r[e+0],r[e+1],r[e+2]),a.push(r[t+0],r[t+1],r[t+2]),a.push(r[n+0],r[n+1],r[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const r=this.normals,a=this.object.geometry.normals;a.push(r[e+0],r[e+1],r[e+2]),a.push(r[t+0],r[t+1],r[t+2]),a.push(r[n+0],r[n+1],r[n+2])},addFaceNormal:function(e,t,n){const r=this.vertices,a=this.object.geometry.normals;bc.fromArray(r,e),Qa.fromArray(r,t),Tc.fromArray(r,n),Rn.subVectors(Tc,Qa),Ac.subVectors(bc,Qa),Rn.cross(Ac),Rn.normalize(),a.push(Rn.x,Rn.y,Rn.z),a.push(Rn.x,Rn.y,Rn.z),a.push(Rn.x,Rn.y,Rn.z)},addColor:function(e,t,n){const r=this.colors,a=this.object.geometry.colors;r[e]!==void 0&&a.push(r[e+0],r[e+1],r[e+2]),r[t]!==void 0&&a.push(r[t+0],r[t+1],r[t+2]),r[n]!==void 0&&a.push(r[n+0],r[n+1],r[n+2])},addUV:function(e,t,n){const r=this.uvs,a=this.object.geometry.uvs;a.push(r[e+0],r[e+1]),a.push(r[t+0],r[t+1]),a.push(r[n+0],r[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,r,a,l,u,d,f){const g=this.vertices.length;let _=this.parseVertexIndex(e,g),v=this.parseVertexIndex(t,g),y=this.parseVertexIndex(n,g);if(this.addVertex(_,v,y),this.addColor(_,v,y),u!==void 0&&u!==""){const E=this.normals.length;_=this.parseNormalIndex(u,E),v=this.parseNormalIndex(d,E),y=this.parseNormalIndex(f,E),this.addNormal(_,v,y)}else this.addFaceNormal(_,v,y);if(r!==void 0&&r!==""){const E=this.uvs.length;_=this.parseUVIndex(r,E),v=this.parseUVIndex(a,E),y=this.parseUVIndex(l,E),this.addUV(_,v,y),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,r=e.length;n<r;n++){const a=this.parseVertexIndex(e[n],t);this.addVertexPoint(a),this.addColor(a)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,r=this.uvs.length;for(let a=0,l=e.length;a<l;a++)this.addVertexLine(this.parseVertexIndex(e[a],n));for(let a=0,l=t.length;a<l;a++)this.addUVLine(this.parseUVIndex(t[a],r))}};return i.startObject("",!1),i}class G_ extends Qo{constructor(e){super(e),this.materials=null}load(e,t,n,r){const a=this,l=new v_(this.manager);l.setPath(this.path),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{t(a.parse(u))}catch(d){r?r(d):console.error(d),a.manager.itemError(e)}},n,r)}setMaterials(e){return this.materials=e,this}parse(e){const t=new V_;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let r=[];for(let u=0,d=n.length;u<d;u++){const f=n[u].trimStart();if(f.length===0)continue;const g=f.charAt(0);if(g!=="#")if(g==="v"){const _=f.split(Ec);switch(_[0]){case"v":t.vertices.push(parseFloat(_[1]),parseFloat(_[2]),parseFloat(_[3])),_.length>=7?(Hs.setRGB(parseFloat(_[4]),parseFloat(_[5]),parseFloat(_[6])).convertSRGBToLinear(),t.colors.push(Hs.r,Hs.g,Hs.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(_[1]),parseFloat(_[2]),parseFloat(_[3]));break;case"vt":t.uvs.push(parseFloat(_[1]),parseFloat(_[2]));break}}else if(g==="f"){const v=f.slice(1).trim().split(Ec),y=[];for(let b=0,x=v.length;b<x;b++){const m=v[b];if(m.length>0){const P=m.split("/");y.push(P)}}const E=y[0];for(let b=1,x=y.length-1;b<x;b++){const m=y[b],P=y[b+1];t.addFace(E[0],m[0],P[0],E[1],m[1],P[1],E[2],m[2],P[2])}}else if(g==="l"){const _=f.substring(1).trim().split(" ");let v=[];const y=[];if(f.indexOf("/")===-1)v=_;else for(let E=0,b=_.length;E<b;E++){const x=_[E].split("/");x[0]!==""&&v.push(x[0]),x[1]!==""&&y.push(x[1])}t.addLineGeometry(v,y)}else if(g==="p"){const v=f.slice(1).trim().split(" ");t.addPointGeometry(v)}else if((r=B_.exec(f))!==null){const _=(" "+r[0].slice(1).trim()).slice(1);t.startObject(_)}else if(H_.test(f))t.object.startMaterial(f.substring(7).trim(),t.materialLibraries);else if(z_.test(f))t.materialLibraries.push(f.substring(7).trim());else if(k_.test(f))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(g==="s"){if(r=f.split(" "),r.length>1){const v=r[1].trim().toLowerCase();t.object.smooth=v!=="0"&&v!=="off"}else t.object.smooth=!0;const _=t.object.currentMaterial();_&&(_.smooth=t.object.smooth)}else{if(f==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+f+'"')}}t.finalize();const a=new Xr;if(a.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let u=0,d=t.objects.length;u<d;u++){const f=t.objects[u],g=f.geometry,_=f.materials,v=g.type==="Line",y=g.type==="Points";let E=!1;if(g.vertices.length===0)continue;const b=new bn;b.setAttribute("position",new nn(g.vertices,3)),g.normals.length>0&&b.setAttribute("normal",new nn(g.normals,3)),g.colors.length>0&&(E=!0,b.setAttribute("color",new nn(g.colors,3))),g.hasUVIndices===!0&&b.setAttribute("uv",new nn(g.uvs,2));const x=[];for(let P=0,R=_.length;P<R;P++){const N=_[P],q=N.name+"_"+N.smooth+"_"+E;let z=t.materials[q];if(this.materials!==null){if(z=this.materials.create(N.name),v&&z&&!(z instanceof js)){const c=new js;ui.prototype.copy.call(c,z),c.color.copy(z.color),z=c}else if(y&&z&&!(z instanceof qr)){const c=new qr({size:10,sizeAttenuation:!1});ui.prototype.copy.call(c,z),c.color.copy(z.color),c.map=z.map,z=c}}z===void 0&&(v?z=new js:y?z=new qr({size:1,sizeAttenuation:!1}):z=new p_,z.name=N.name,z.flatShading=!N.smooth,z.vertexColors=E,t.materials[q]=z),x.push(z)}let m;if(x.length>1){for(let P=0,R=_.length;P<R;P++){const N=_[P];b.addGroup(N.groupStart,N.groupCount,P)}v?m=new Fo(b,x):y?m=new Ka(b,x):m=new En(b,x)}else v?m=new Fo(b,x[0]):y?m=new Ka(b,x[0]):m=new En(b,x[0]);m.name=f.name,a.add(m)}else if(t.vertices.length>0){const u=new qr({size:1,sizeAttenuation:!1}),d=new bn;d.setAttribute("position",new nn(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(d.setAttribute("color",new nn(t.colors,3)),u.vertexColors=!0);const f=new Ka(d,u);a.add(f)}return a}}function W_(i,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=i.getIndex(),r=i.getAttribute("position"),a=n?n.count:r.count;let l=0;const u=Object.keys(i.attributes),d={},f={},g=[],_=["getX","getY","getZ","getW"],v=["setX","setY","setZ","setW"];for(let P=0,R=u.length;P<R;P++){const N=u[P],q=i.attributes[N];d[N]=new q.constructor(new q.array.constructor(q.count*q.itemSize),q.itemSize,q.normalized);const z=i.morphAttributes[N];z&&(f[N]||(f[N]=[]),z.forEach((c,$)=>{const I=new c.array.constructor(c.count*c.itemSize);f[N][$]=new c.constructor(I,c.itemSize,c.normalized)}))}const y=e*.5,E=Math.log10(1/e),b=Math.pow(10,E),x=y*b;for(let P=0;P<a;P++){const R=n?n.getX(P):P;let N="";for(let q=0,z=u.length;q<z;q++){const c=u[q],$=i.getAttribute(c),I=$.itemSize;for(let L=0;L<I;L++)N+=`${~~($[_[L]](R)*b+x)},`}if(N in t)g.push(t[N]);else{for(let q=0,z=u.length;q<z;q++){const c=u[q],$=i.getAttribute(c),I=i.morphAttributes[c],L=$.itemSize,V=d[c],ce=f[c];for(let Y=0;Y<L;Y++){const pe=_[Y],me=v[Y];if(V[me](l,$[pe](R)),I)for(let le=0,de=I.length;le<de;le++)ce[le][me](l,I[le][pe](R))}}t[N]=l,g.push(l),l++}}const m=i.clone();for(const P in i.attributes){const R=d[P];if(m.setAttribute(P,new R.constructor(R.array.slice(0,l*R.itemSize),R.itemSize,R.normalized)),P in f)for(let N=0;N<f[P].length;N++){const q=f[P][N];m.morphAttributes[P][N]=new q.constructor(q.array.slice(0,l*q.itemSize),q.itemSize,q.normalized)}}return m.setIndex(g),m}const X_=new G_;let su=new Zr;document.body.appendChild(su.dom);const Gi=new f_;Gi.background=new _t(9022965);Gi.fog=new Jo(13421772,10,15);let D=au();ou();lu();function au(){return{camera:new Pn(75,window.innerWidth/window.innerHeight,.01,1e4),canvas:Vu("#c")[0],renderer:null,controls:null,last:performance.now(),ticks:25,timeDiff:null,gpuCompute:null,cubeUniforms:null,positionVariable:null,velocityVariable:null,accelerationVariable:null,positionUniforms:null,velocityUniforms:null,accelerationUniforms:null,lineUniforms:null,nodeCoordinates:[],vertCoordinates:[],triIndexes:[],lineIndexes:[],initLen:[],nodeNum:null,width:null,height:1,extForce:null,fixedNodes:null,mass:50,damping:50,dampingRatio:null,maxNatFreq:null,EA:100,time:0,delta:1e-4,freq:null,fVertCoords:null,epsFromBot:.01,loadedObj:null,fileName:"/bunny_scaled.obj",resetSim:null,gui:null,floorAtY0:!0,dampingScale:2,gravity:-6,pointerPos:[0,0],pointerClicked:null}}function ou(){D.renderer=new h_({antialias:!0,canvas:D.canvas}),D.renderer.setSize(window.innerWidth,window.innerHeight,!1),D.renderer.render(Gi,D.camera)}function lu(){D.controls=new O_(D.camera,D.renderer.domElement)}uu();cu(D.fileName);function cu(i){hu(Gi),D=au(),D.fileName=i,ou(),lu();const e=new rs(50,50);e.rotateX(-Math.PI*.5);const t=new $o({color:15461355}),n=new En(e,t);Gi.add(n),X_.load(D.fileName,function(r){r.traverse(function(a){if(a.isMesh){let l=a.geometry;console.log(l),l.attributes.normal&&delete l.attributes.normal,l.attributes.uv&&delete l.attributes.uv;let u=W_(l,1e-7);D.vertCoordinates=l.attributes.position.array,D.nodeCoordinates=u.attributes.position.array,D.triIndexes=u.index.array}}),D.nodeNum=D.nodeCoordinates.length/3,D.width=D.nodeCoordinates.length/3/D.height,J_(),j_(D),fu(),D.renderer.setAnimationLoop(tl),Z_(),uu()},r=>{console.log(r.loaded/r.total*100+"% loaded")},r=>{console.log(r)})}function uu(){D.gui=new el;let i=D.gui.add(D,"fileName",["/cube.obj","/bunny_scaled.obj","/teapot.obj"]);i.onFinishChange(a=>{D.renderer.setAnimationLoop(null),D.gui.close(),cu(a)}),i.name("Load File");let e=D.gui.add(D,"EA",1,100,1);e.onFinishChange(()=>{D.accelerationUniforms.EA={value:D.EA},D.accelerationUniforms.m={value:D.mass/D.nodeNum},D.maxNatFreq=Math.sqrt(D.EA/(D.mass/D.nodeNum)),D.damping=2*D.dampingRatio*Math.sqrt(D.mass/D.nodeNum*D.EA),D.accelerationUniforms.c={value:D.damping}}),e.name("Young's Modulus * CrossSec Area");let t=D.gui.add(D,"mass",1,100,1);t.onFinishChange(()=>{D.accelerationUniforms.EA={value:D.EA},D.accelerationUniforms.m={value:D.mass/D.nodeNum},D.maxNatFreq=Math.sqrt(D.EA/(D.mass/D.nodeNum)),D.damping=2*D.dampingRatio*Math.sqrt(D.mass/D.nodeNum*D.EA),D.accelerationUniforms.c={value:D.damping}}),t.name("Total mass of system");let n=D.gui.add(D,"floorAtY0");n.onFinishChange(()=>{D.velocityUniforms.floorOn={value:D.floorAtY0},D.accelerationUniforms.floorOn={value:D.floorAtY0},D.positionUniforms.floorOn={value:D.floorAtY0}}),n.name("Enable Solid Floor");let r=D.gui.add(D,"dampingScale",0,2,.25);r.onFinishChange(()=>{D.maxNatFreq=Math.sqrt(D.EA/(D.mass/D.nodeNum)),D.damping=D.dampingScale*D.dampingRatio*Math.sqrt(D.mass/D.nodeNum*D.EA),D.accelerationUniforms.c={value:D.damping}}),r.name("Damping Factor"),D.gui.add(D,"ticks",1,1e3,10).name("Updates Per Frame"),D.gui.add(D,"delta",[1e-5,1e-4,.001]).name("Simulation deltaT"),D.resetSim=q_,D.gui.add(D,"resetSim").name("Reset Simulation")}function q_(){D.renderer.setAnimationLoop(null),fu(),D.renderer.setAnimationLoop(tl)}const j_=function(i){const e=new Cr;e.setFromObject(i.loadedObj);let t=new j;e.getCenter(t);let n=new j;e.getSize(n);const r=Math.max(n.x,n.y,n.z);i.camera.position.z=i.loadedObj.position.z+r,i.camera.position.y=i.loadedObj.position.y+r,i.camera.position.x=i.loadedObj.position.x+r,e.min.z,i.camera.updateProjectionMatrix(),i.camera.lookAt(t),i.controls.target=t};function Y_(i){D.pointerPos[0]=i.clientX/window.innerWidth*2-1,D.pointerPos[1]=-(i.clientY/window.innerHeight)*2+1}function $_(i){D.pointerClicked=!0}function K_(i){D.pointerClicked=!1}function hu(i){for(;i.children.length>0;)hu(i.children[0]),i.remove(i.children[0]);i.geometry&&i.geometry.dispose(),i.material&&(Object.keys(i.material).forEach(e=>{i.material[e]&&i.material[e]!==null&&typeof i.material[e].dispose=="function"&&i.material[e].dispose()}),i.material.dispose())}function Z_(){window.addEventListener("resize",tv),window.addEventListener("blur",nv),window.addEventListener("focus",iv),window.addEventListener("pointermove",Y_),window.addEventListener("pointerdown",$_),window.addEventListener("pointerup",K_)}function J_(){for(let l=0;l<D.triIndexes.length;l+=3)D.lineIndexes.push(D.triIndexes[l]),D.lineIndexes.push(D.triIndexes[l+1]),D.lineIndexes.push(D.triIndexes[l+1]),D.lineIndexes.push(D.triIndexes[l+2]),D.lineIndexes.push(D.triIndexes[l+2]),D.lineIndexes.push(D.triIndexes[l]);let i=[],e=[];for(let l=0;l<D.lineIndexes.length;l++){let u=D.lineIndexes[l]%D.width/D.width,d=Math.trunc(D.lineIndexes[l]/D.width)/D.height;if(i.push(u),i.push(d),l%2==0){let f=D.lineIndexes[l+1]%D.width/D.width,g=Math.trunc(D.lineIndexes[l+1]/D.width)/D.height;e.push(f),e.push(g)}else{let f=D.lineIndexes[l-1]%D.width/D.width,g=Math.trunc(D.lineIndexes[l-1]/D.width)/D.height;e.push(f),e.push(g)}}for(let l=0;l<D.lineIndexes.length;l+=2){let u=D.nodeCoordinates[3*D.lineIndexes[l]],d=D.nodeCoordinates[3*D.lineIndexes[l]+1],f=D.nodeCoordinates[3*D.lineIndexes[l]+2],g=D.nodeCoordinates[3*D.lineIndexes[l+1]],_=D.nodeCoordinates[3*D.lineIndexes[l+1]+1],v=D.nodeCoordinates[3*D.lineIndexes[l+1]+2];const y=new j(u,d,f),E=new j(g,_,v),b=y.distanceTo(E);D.initLen.push(b),D.initLen.push(b)}let t=[];for(let l=0;l<D.lineIndexes.length;l++){let u=D.nodeCoordinates[3*D.lineIndexes[l]],d=D.nodeCoordinates[3*D.lineIndexes[l]+1],f=D.nodeCoordinates[3*D.lineIndexes[l]+2];t.push(u),t.push(d),t.push(f)}D.fVertCoords=new Float32Array(t);const n=new bn;n.setAttribute("position",new vn(D.fVertCoords,3)),n.setAttribute("uv",new vn(new Float32Array(i),2)),n.setAttribute("initLen",new vn(new Float32Array(D.initLen),1)),n.setAttribute("uvOther",new vn(new Float32Array(e),2)),n.setAttribute("index",new Ko(D.lineIndexes,1)),D.lineUniforms={texturePosition:{value:null},textureVelocity:{value:null},textureAcceleration:{value:null},time:{value:0},width:{value:D.width}};const r=new Kn({uniforms:D.lineUniforms,vertexShader:document.getElementById("lineVS").textContent,fragmentShader:document.getElementById("lineFS").textContent,glslVersion:Uo}),a=new Fo(n,r);D.loadedObj=a,Gi.add(a)}function fu(){D.gpuCompute=new N_(D.width,D.height,D.renderer);const i=new _r(new Float32Array(D.nodeNum*D.nodeNum),D.nodeNum,D.nodeNum,jr,cn),e=new _r(new Float32Array(D.initLen),D.nodeNum,1,jr,cn),t=new _r(new Float32Array(D.nodeNum*4),D.nodeNum,1,pn,cn);wc(t,new Float32Array(D.nodeCoordinates));const n=new _r(new Float32Array(D.nodeNum),D.nodeNum,1,jr,cn),r=new _r(new Float32Array(D.nodeNum*4),D.nodeNum,1,pn,cn),a=D.gpuCompute.createTexture(),l=D.gpuCompute.createTexture(),u=D.gpuCompute.createTexture();wc(u,new Float32Array(D.nodeCoordinates)),eo(l),eo(a),Q_(i,D.lineIndexes,D.nodeNum),eo(n),ev(r),D.positionVariable=D.gpuCompute.addVariable("texturePosition",document.getElementById("fragmentShaderPosition").textContent,u),D.velocityVariable=D.gpuCompute.addVariable("textureVelocity",document.getElementById("fragmentShaderVelocity").textContent,l),D.accelerationVariable=D.gpuCompute.addVariable("textureAcceleration",document.getElementById("fragmentShaderAcceleration").textContent,a),D.gpuCompute.setVariableDependencies(D.positionVariable,[D.positionVariable,D.velocityVariable,D.accelerationVariable]),D.gpuCompute.setVariableDependencies(D.velocityVariable,[D.velocityVariable,D.accelerationVariable,D.positionVariable]),D.gpuCompute.setVariableDependencies(D.accelerationVariable,[D.accelerationVariable,D.positionVariable,D.velocityVariable]),D.maxNatFreq=Math.sqrt(D.EA/(D.mass/D.nodeNum)),D.dampingRatio=.5,D.damping=D.dampingScale*D.dampingRatio*Math.sqrt(D.mass/D.nodeNum*D.EA),console.log("damping",D.damping),console.log("delta",D.delta),D.positionUniforms=D.positionVariable.material.uniforms,D.positionUniforms.time={value:0},D.positionUniforms.delta={value:0},D.positionUniforms.fixedTexture={value:n},D.positionUniforms.prevVel={value:null},D.positionUniforms.prevAccel={value:null},D.positionUniforms.floorOn={value:D.floorAtY0},D.positionUniforms.pointerClicked={value:D.pointerClicked},D.positionUniforms.pointerCoords={value:D.pointerPos},D.velocityUniforms=D.velocityVariable.material.uniforms,D.velocityUniforms.time={value:0},D.velocityUniforms.delta={value:0},D.velocityUniforms.extForceTexture={value:r},D.velocityUniforms.floorOn={value:D.floorAtY0},D.velocityUniforms.prevAccel={value:null},D.accelerationUniforms=D.accelerationVariable.material.uniforms,D.accelerationUniforms.time={value:0},D.accelerationUniforms.delta={value:0},D.accelerationUniforms.textelSize={value:1/D.width},D.accelerationUniforms.connectivityTexture={value:i},D.accelerationUniforms.nodeCount={value:D.nodeNum},D.accelerationUniforms.extForceTexture={value:r},D.accelerationUniforms.initLenTexture={value:e},D.accelerationUniforms.initPosTexture={value:t},D.accelerationUniforms.EA={value:D.EA},D.accelerationUniforms.c={value:D.damping},D.accelerationUniforms.m={value:D.mass/D.nodeNum},D.accelerationUniforms.floorOn={value:D.floorAtY0};const d=D.gpuCompute.init();d!==null&&console.error(d)}function Q_(i,e,t){const n=i.image.data;let r,a;for(let l=0;l<e.length;l+=2)r=e[l],a=e[l+1],n[r*t+a]=1,n[a*t+r]=1;i.needsUpdate=!0}function wc(i,e){let t=i.image.data,n=0;for(let r=0;r<e.length;r+=3){const a=e[r],l=e[r+1],u=e[r+2];t[r+n]=a,t[r+1+n]=l,t[r+2+n]=u,t[r+3+n]=1,n++}i.needsUpdate=!0}function ev(i){let e=i.image.data;for(let t=0;t<e.length;t++)t%4==1?e[t]=D.gravity*D.mass/D.nodeNum:e[t]=0;i.needsUpdate=!0}function eo(i){i.image.data.fill(0),i.needsUpdate=!0}function tv(){D.camera.aspect=window.innerWidth/window.innerHeight,D.camera.updateProjectionMatrix(),D.renderer.setSize(window.innerWidth,window.innerHeight,!1)}function nv(){D.renderer.setAnimationLoop(null)}function iv(){D.renderer.setAnimationLoop(tl)}function tl(){rv(),su.update()}function rv(){for(let i=0;i<D.ticks;i++)D.positionUniforms.delta.value=D.delta,D.positionUniforms.prevAccel.value=D.gpuCompute.getAlternateRenderTarget(D.accelerationVariable).texture,D.positionUniforms.prevVel.value=D.gpuCompute.getAlternateRenderTarget(D.velocityVariable).texture,D.positionUniforms.pointerClicked={value:D.pointerClicked},D.positionUniforms.pointerCoords={value:D.pointerPos},D.velocityUniforms.delta.value=D.delta,D.velocityUniforms.prevAccel.value=D.gpuCompute.getAlternateRenderTarget(D.accelerationVariable).texture,D.accelerationUniforms.delta.value=D.delta,D.gpuCompute.compute(),D.lineUniforms.texturePosition.value=D.gpuCompute.getCurrentRenderTarget(D.positionVariable).texture,D.lineUniforms.textureVelocity.value=D.gpuCompute.getCurrentRenderTarget(D.velocityVariable).texture,D.lineUniforms.textureAcceleration.value=D.gpuCompute.getCurrentRenderTarget(D.accelerationVariable).texture;D.renderer.render(Gi,D.camera),D.last=performance.now()}
