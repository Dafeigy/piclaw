var pF=Object.defineProperty;var rF=(_)=>_;function nF(_,$){this[_]=rF.bind(null,$)}var _1=(_,$)=>{for(var j in $)pF(_,j,{get:$[j],enumerable:!0,configurable:!0,set:nF.bind($,j)})};var O_=(_,$)=>()=>(_&&($=_(_=0)),$);var SG={};_1(SG,{useState:()=>C,useRef:()=>u,useReducer:()=>PG,useMemo:()=>Y0,useLayoutEffect:()=>G5,useImperativeHandle:()=>$U,useErrorBoundary:()=>ZU,useEffect:()=>g,useDebugValue:()=>GU,useContext:()=>jU,useCallback:()=>f,render:()=>L$,html:()=>F,h:()=>E3,createContext:()=>_U,Component:()=>n5});function B$(_,$){for(var j in $)_[j]=$[j];return _}function H3(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function E3(_,$,j){var G,Z,X,Y={};for(X in $)X=="key"?G=$[X]:X=="ref"?Z=$[X]:Y[X]=$[X];if(arguments.length>2&&(Y.children=arguments.length>3?G2.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(X in _.defaultProps)Y[X]===void 0&&(Y[X]=_.defaultProps[X]);return t6(_,Y,G,Z,null)}function t6(_,$,j,G,Z){var X={type:_,props:$,key:j,ref:G,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Z==null?++OG:Z,__i:-1,__u:0};return Z==null&&y_.vnode!=null&&y_.vnode(X),X}function X2(_){return _.children}function n5(_,$){this.props=_,this.context=$}function _5(_,$){if($==null)return _.__?_5(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?_5(_):null}function iF(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,G=[],Z=[],X=B$({},$);X.__v=$.__v+1,y_.vnode&&y_.vnode(X),W3(_.__P,X,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,G,j==null?_5($):j,!!(32&$.__u),Z),X.__v=$.__v,X.__.__k[X.__i]=X,yG(G,X,Z),$.__e=$.__=null,X.__e!=j&&MG(X)}}function MG(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),MG(_)}function N3(_){(!_.__d&&(_.__d=!0)&&v$.push(_)&&!j2.__r++||qG!=y_.debounceRendering)&&((qG=y_.debounceRendering)||zG)(j2)}function j2(){try{for(var _,$=1;v$.length;)v$.length>$&&v$.sort(JG),_=v$.shift(),$=v$.length,iF(_)}finally{v$.length=j2.__r=0}}function TG(_,$,j,G,Z,X,Y,V,Q,q,B){var K,N,L,U,E,H,D,M=G&&G.__k||$2,z=$.length;for(Q=sF(j,$,M,Q,z),K=0;K<z;K++)(L=j.__k[K])!=null&&(N=L.__i!=-1&&M[L.__i]||_2,L.__i=K,H=W3(_,L,N,Z,X,Y,V,Q,q,B),U=L.__e,L.ref&&N.ref!=L.ref&&(N.ref&&O3(N.ref,null,L),B.push(L.ref,L.__c||U,L)),E==null&&U!=null&&(E=U),(D=!!(4&L.__u))||N.__k===L.__k?(Q=wG(L,Q,_,D),D&&N.__e&&(N.__e=null)):typeof L.type=="function"&&H!==void 0?Q=H:U&&(Q=U.nextSibling),L.__u&=-7);return j.__e=E,Q}function sF(_,$,j,G,Z){var X,Y,V,Q,q,B=j.length,K=B,N=0;for(_.__k=Array(Z),X=0;X<Z;X++)(Y=$[X])!=null&&typeof Y!="boolean"&&typeof Y!="function"?(typeof Y=="string"||typeof Y=="number"||typeof Y=="bigint"||Y.constructor==String?Y=_.__k[X]=t6(null,Y,null,null,null):Z2(Y)?Y=_.__k[X]=t6(X2,{children:Y},null,null,null):Y.constructor===void 0&&Y.__b>0?Y=_.__k[X]=t6(Y.type,Y.props,Y.key,Y.ref?Y.ref:null,Y.__v):_.__k[X]=Y,Q=X+N,Y.__=_,Y.__b=_.__b+1,V=null,(q=Y.__i=aF(Y,j,Q,K))!=-1&&(K--,(V=j[q])&&(V.__u|=2)),V==null||V.__v==null?(q==-1&&(Z>B?N--:Z<B&&N++),typeof Y.type!="function"&&(Y.__u|=4)):q!=Q&&(q==Q-1?N--:q==Q+1?N++:(q>Q?N--:N++,Y.__u|=4))):_.__k[X]=null;if(K)for(X=0;X<B;X++)(V=j[X])!=null&&(2&V.__u)==0&&(V.__e==G&&(G=_5(V)),xG(V,V));return G}function wG(_,$,j,G){var Z,X;if(typeof _.type=="function"){for(Z=_.__k,X=0;Z&&X<Z.length;X++)Z[X]&&(Z[X].__=_,$=wG(Z[X],$,j,G));return $}_.__e!=$&&(G&&($&&_.type&&!$.parentNode&&($=_5(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function aF(_,$,j,G){var Z,X,Y,V=_.key,Q=_.type,q=$[j],B=q!=null&&(2&q.__u)==0;if(q===null&&V==null||B&&V==q.key&&Q==q.type)return j;if(G>(B?1:0)){for(Z=j-1,X=j+1;Z>=0||X<$.length;)if((q=$[Y=Z>=0?Z--:X++])!=null&&(2&q.__u)==0&&V==q.key&&Q==q.type)return Y}return-1}function QG(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||oF.test($)?j:j+"px"}function s6(_,$,j,G,Z){var X,Y;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof G=="string"&&(_.style.cssText=G=""),G)for($ in G)j&&$ in j||QG(_.style,$,"");if(j)for($ in j)G&&j[$]==G[$]||QG(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")X=$!=($=$.replace(AG,"$1")),Y=$.toLowerCase(),$=Y in _||$=="onFocusOut"||$=="onFocusIn"?Y.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+X]=j,j?G?j[r5]=G[r5]:(j[r5]=D3,_.addEventListener($,X?L3:B3,X)):_.removeEventListener($,X?L3:B3,X);else{if(Z=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(V){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function KG(_){return function($){if(this.l){var j=this.l[$.type+_];if($[a6]==null)$[a6]=D3++;else if($[a6]<j[r5])return;return j(y_.event?y_.event($):$)}}}function W3(_,$,j,G,Z,X,Y,V,Q,q){var B,K,N,L,U,E,H,D,M,z,O,x,I,J,k,W=$.type;if($.constructor!==void 0)return null;128&j.__u&&(Q=!!(32&j.__u),X=[V=$.__e=j.__e]),(B=y_.__b)&&B($);_:if(typeof W=="function")try{if(D=$.props,M=W.prototype&&W.prototype.render,z=(B=W.contextType)&&G[B.__c],O=B?z?z.props.value:B.__:G,j.__c?H=(K=$.__c=j.__c).__=K.__E:(M?$.__c=K=new W(D,O):($.__c=K=new n5(D,O),K.constructor=W,K.render=eF),z&&z.sub(K),K.state||(K.state={}),K.__n=G,N=K.__d=!0,K.__h=[],K._sb=[]),M&&K.__s==null&&(K.__s=K.state),M&&W.getDerivedStateFromProps!=null&&(K.__s==K.state&&(K.__s=B$({},K.__s)),B$(K.__s,W.getDerivedStateFromProps(D,K.__s))),L=K.props,U=K.state,K.__v=$,N)M&&W.getDerivedStateFromProps==null&&K.componentWillMount!=null&&K.componentWillMount(),M&&K.componentDidMount!=null&&K.__h.push(K.componentDidMount);else{if(M&&W.getDerivedStateFromProps==null&&D!==L&&K.componentWillReceiveProps!=null&&K.componentWillReceiveProps(D,O),$.__v==j.__v||!K.__e&&K.shouldComponentUpdate!=null&&K.shouldComponentUpdate(D,K.__s,O)===!1){$.__v!=j.__v&&(K.props=D,K.state=K.__s,K.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(T){T&&(T.__=$)}),$2.push.apply(K.__h,K._sb),K._sb=[],K.__h.length&&Y.push(K);break _}K.componentWillUpdate!=null&&K.componentWillUpdate(D,K.__s,O),M&&K.componentDidUpdate!=null&&K.__h.push(function(){K.componentDidUpdate(L,U,E)})}if(K.context=O,K.props=D,K.__P=_,K.__e=!1,x=y_.__r,I=0,M)K.state=K.__s,K.__d=!1,x&&x($),B=K.render(K.props,K.state,K.context),$2.push.apply(K.__h,K._sb),K._sb=[];else do K.__d=!1,x&&x($),B=K.render(K.props,K.state,K.context),K.state=K.__s;while(K.__d&&++I<25);K.state=K.__s,K.getChildContext!=null&&(G=B$(B$({},G),K.getChildContext())),M&&!N&&K.getSnapshotBeforeUpdate!=null&&(E=K.getSnapshotBeforeUpdate(L,U)),J=B!=null&&B.type===X2&&B.key==null?IG(B.props.children):B,V=TG(_,Z2(J)?J:[J],$,j,G,Z,X,Y,V,Q,q),K.base=$.__e,$.__u&=-161,K.__h.length&&Y.push(K),H&&(K.__E=K.__=null)}catch(T){if($.__v=null,Q||X!=null)if(T.then){for($.__u|=Q?160:128;V&&V.nodeType==8&&V.nextSibling;)V=V.nextSibling;X[X.indexOf(V)]=null,$.__e=V}else{for(k=X.length;k--;)H3(X[k]);F3($)}else $.__e=j.__e,$.__k=j.__k,T.then||F3($);y_.__e(T,$,j)}else X==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):V=$.__e=tF(j.__e,$,j,G,Z,X,Y,Q,q);return(B=y_.diffed)&&B($),128&$.__u?void 0:V}function F3(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(F3))}function yG(_,$,j){for(var G=0;G<j.length;G++)O3(j[G],j[++G],j[++G]);y_.__c&&y_.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(X){X.call(Z)})}catch(X){y_.__e(X,Z.__v)}})}function IG(_){return typeof _!="object"||_==null||_.__b>0?_:Z2(_)?_.map(IG):B$({},_)}function tF(_,$,j,G,Z,X,Y,V,Q){var q,B,K,N,L,U,E,H=j.props||_2,D=$.props,M=$.type;if(M=="svg"?Z="http://www.w3.org/2000/svg":M=="math"?Z="http://www.w3.org/1998/Math/MathML":Z||(Z="http://www.w3.org/1999/xhtml"),X!=null){for(q=0;q<X.length;q++)if((L=X[q])&&"setAttribute"in L==!!M&&(M?L.localName==M:L.nodeType==3)){_=L,X[q]=null;break}}if(_==null){if(M==null)return document.createTextNode(D);_=document.createElementNS(Z,M,D.is&&D),V&&(y_.__m&&y_.__m($,X),V=!1),X=null}if(M==null)H===D||V&&_.data==D||(_.data=D);else{if(X=X&&G2.call(_.childNodes),!V&&X!=null)for(H={},q=0;q<_.attributes.length;q++)H[(L=_.attributes[q]).name]=L.value;for(q in H)L=H[q],q=="dangerouslySetInnerHTML"?K=L:q=="children"||(q in D)||q=="value"&&("defaultValue"in D)||q=="checked"&&("defaultChecked"in D)||s6(_,q,null,L,Z);for(q in D)L=D[q],q=="children"?N=L:q=="dangerouslySetInnerHTML"?B=L:q=="value"?U=L:q=="checked"?E=L:V&&typeof L!="function"||H[q]===L||s6(_,q,L,H[q],Z);if(B)V||K&&(B.__html==K.__html||B.__html==_.innerHTML)||(_.innerHTML=B.__html),$.__k=[];else if(K&&(_.innerHTML=""),TG($.type=="template"?_.content:_,Z2(N)?N:[N],$,j,G,M=="foreignObject"?"http://www.w3.org/1999/xhtml":Z,X,Y,X?X[0]:j.__k&&_5(j,0),V,Q),X!=null)for(q=X.length;q--;)H3(X[q]);V||(q="value",M=="progress"&&U==null?_.removeAttribute("value"):U!=null&&(U!==_[q]||M=="progress"&&!U||M=="option"&&U!=H[q])&&s6(_,q,U,H[q],Z),q="checked",E!=null&&E!=_[q]&&s6(_,q,E,H[q],Z))}return _}function O3(_,$,j){try{if(typeof _=="function"){var G=typeof _.__u=="function";G&&_.__u(),G&&$==null||(_.__u=_($))}else _.current=$}catch(Z){y_.__e(Z,j)}}function xG(_,$,j){var G,Z;if(y_.unmount&&y_.unmount(_),(G=_.ref)&&(G.current&&G.current!=_.__e||O3(G,null,$)),(G=_.__c)!=null){if(G.componentWillUnmount)try{G.componentWillUnmount()}catch(X){y_.__e(X,$)}G.base=G.__P=null}if(G=_.__k)for(Z=0;Z<G.length;Z++)G[Z]&&xG(G[Z],$,j||typeof _.type!="function");j||H3(_.__e),_.__c=_.__=_.__e=void 0}function eF(_,$,j){return this.constructor(_,j)}function L$(_,$,j){var G,Z,X,Y;$==document&&($=document.documentElement),y_.__&&y_.__(_,$),Z=(G=typeof j=="function")?null:j&&j.__k||$.__k,X=[],Y=[],W3($,_=(!G&&j||$).__k=E3(X2,null,[_]),Z||_2,_2,$.namespaceURI,!G&&j?[j]:Z?null:$.firstChild?G2.call($.childNodes):null,X,!G&&j?j:Z?Z.__e:$.firstChild,G,Y),yG(X,_,Y)}function _U(_){function $(j){var G,Z;return this.getChildContext||(G=new Set,(Z={})[$.__c]=this,this.getChildContext=function(){return Z},this.componentWillUnmount=function(){G=null},this.shouldComponentUpdate=function(X){this.props.value!=X.value&&G.forEach(function(Y){Y.__e=!0,N3(Y)})},this.sub=function(X){G.add(X);var Y=X.componentWillUnmount;X.componentWillUnmount=function(){G&&G.delete(X),Y&&Y.call(X)}}),j.children}return $.__c="__cC"+kG++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,G){return j.children(G)}).contextType=$,$}function j5(_,$){g_.__h&&g_.__h(w_,_,$5||$),$5=0;var j=w_.__H||(w_.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function C(_){return $5=1,PG(RG,_)}function PG(_,$,j){var G=j5(m$++,2);if(G.t=_,!G.__c&&(G.__=[j?j($):RG(void 0,$),function(V){var Q=G.__N?G.__N[0]:G.__[0],q=G.t(Q,V);Q!==q&&(G.__N=[q,G.__[1]],G.__c.setState({}))}],G.__c=w_,!w_.__f)){var Z=function(V,Q,q){if(!G.__c.__H)return!0;var B=G.__c.__H.__.filter(function(N){return N.__c});if(B.every(function(N){return!N.__N}))return!X||X.call(this,V,Q,q);var K=G.__c.props!==V;return B.some(function(N){if(N.__N){var L=N.__[0];N.__=N.__N,N.__N=void 0,L!==N.__[0]&&(K=!0)}}),X&&X.call(this,V,Q,q)||K};w_.__f=!0;var{shouldComponentUpdate:X,componentWillUpdate:Y}=w_;w_.componentWillUpdate=function(V,Q,q){if(this.__e){var B=X;X=void 0,Z(V,Q,q),X=B}Y&&Y.call(this,V,Q,q)},w_.shouldComponentUpdate=Z}return G.__N||G.__}function g(_,$){var j=j5(m$++,3);!g_.__s&&z3(j.__H,$)&&(j.__=_,j.u=$,w_.__H.__h.push(j))}function G5(_,$){var j=j5(m$++,4);!g_.__s&&z3(j.__H,$)&&(j.__=_,j.u=$,w_.__h.push(j))}function u(_){return $5=5,Y0(function(){return{current:_}},[])}function $U(_,$,j){$5=6,G5(function(){if(typeof _=="function"){var G=_($());return function(){_(null),G&&typeof G=="function"&&G()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function Y0(_,$){var j=j5(m$++,7);return z3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function f(_,$){return $5=8,Y0(function(){return _},$)}function jU(_){var $=w_.context[_.__c],j=j5(m$++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(w_)),$.props.value):_.__}function GU(_,$){g_.useDebugValue&&g_.useDebugValue($?$(_):_)}function ZU(_){var $=j5(m$++,10),j=C();return $.__=_,w_.componentDidCatch||(w_.componentDidCatch=function(G,Z){$.__&&$.__(G,Z),j[1](G)}),[j[0],function(){j[1](void 0)}]}function XU(){for(var _;_=CG.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(e6),$.__h.some(U3),$.__h=[]}catch(j){$.__h=[],g_.__e(j,_.__v)}}}function YU(_){var $,j=function(){clearTimeout(G),EG&&cancelAnimationFrame($),setTimeout(_)},G=setTimeout(j,35);EG&&($=requestAnimationFrame(j))}function e6(_){var $=w_,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),w_=$}function U3(_){var $=w_;_.__c=_.__(),w_=$}function z3(_,$){return!_||_.length!==$.length||$.some(function(j,G){return j!==_[G]})}function RG(_,$){return typeof $=="function"?$(_):$}function VU(_){var $=WG.get(this);return $||($=new Map,WG.set(this,$)),($=fG(this,$.get(_)||($.set(_,$=function(j){for(var G,Z,X=1,Y="",V="",Q=[0],q=function(N){X===1&&(N||(Y=Y.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?Q.push(0,N,Y):X===3&&(N||Y)?(Q.push(3,N,Y),X=2):X===2&&Y==="..."&&N?Q.push(4,N,0):X===2&&Y&&!N?Q.push(5,0,!0,Y):X>=5&&((Y||!N&&X===5)&&(Q.push(X,0,Y,Z),X=6),N&&(Q.push(X,N,0,Z),X=6)),Y=""},B=0;B<j.length;B++){B&&(X===1&&q(),q(B));for(var K=0;K<j[B].length;K++)G=j[B][K],X===1?G==="<"?(q(),Q=[Q],X=3):Y+=G:X===4?Y==="--"&&G===">"?(X=1,Y=""):Y=G+Y[0]:V?G===V?V="":Y+=G:G==='"'||G==="'"?V=G:G===">"?(q(),X=1):X&&(G==="="?(X=5,Z=Y,Y=""):G==="/"&&(X<5||j[B][K+1]===">")?(q(),X===3&&(Q=Q[0]),X=Q,(Q=Q[0]).push(2,0,X),X=0):G===" "||G==="\t"||G===`
`||G==="\r"?(q(),X=2):Y+=G),X===3&&Y==="!--"&&(X=4,Q=Q[0])}return q(),Q}(_)),$),arguments,[])).length>1?$:$[0]}var G2,y_,OG,dF,v$,qG,zG,JG,Q3,a6,r5,AG,D3,B3,L3,kG,_2,$2,oF,Z2,m$,w_,K3,BG,$5=0,CG,g_,LG,NG,FG,UG,DG,HG,EG,fG=function(_,$,j,G){var Z;$[0]=0;for(var X=1;X<$.length;X++){var Y=$[X++],V=$[X]?($[0]|=Y?1:2,j[$[X++]]):$[++X];Y===3?G[0]=V:Y===4?G[1]=Object.assign(G[1]||{},V):Y===5?(G[1]=G[1]||{})[$[++X]]=V:Y===6?G[1][$[++X]]+=V+"":Y?(Z=_.apply(V,fG(_,V,j,["",null])),G.push(Z),V[0]?$[0]|=2:($[X-2]=0,$[X]=Z)):G.push(V)}return G},WG,F;var k0=O_(()=>{_2={},$2=[],oF=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Z2=Array.isArray;G2=$2.slice,y_={__e:function(_,$,j,G){for(var Z,X,Y;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((X=Z.constructor)&&X.getDerivedStateFromError!=null&&(Z.setState(X.getDerivedStateFromError(_)),Y=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_,G||{}),Y=Z.__d),Y)return Z.__E=Z}catch(V){_=V}throw _}},OG=0,dF=function(_){return _!=null&&_.constructor===void 0},n5.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=B$({},this.state),typeof _=="function"&&(_=_(B$({},j),this.props)),_&&B$(j,_),_!=null&&this.__v&&($&&this._sb.push($),N3(this))},n5.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),N3(this))},n5.prototype.render=X2,v$=[],zG=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,JG=function(_,$){return _.__v.__b-$.__v.__b},j2.__r=0,Q3=Math.random().toString(8),a6="__d"+Q3,r5="__a"+Q3,AG=/(PointerCapture)$|Capture$/i,D3=0,B3=KG(!1),L3=KG(!0),kG=0;CG=[],g_=y_,LG=g_.__b,NG=g_.__r,FG=g_.diffed,UG=g_.__c,DG=g_.unmount,HG=g_.__;g_.__b=function(_){w_=null,LG&&LG(_)},g_.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),HG&&HG(_,$)},g_.__r=function(_){NG&&NG(_),m$=0;var $=(w_=_.__c).__H;$&&(K3===w_?($.__h=[],w_.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(e6),$.__h.some(U3),$.__h=[],m$=0)),K3=w_},g_.diffed=function(_){FG&&FG(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(CG.push($)!==1&&BG===g_.requestAnimationFrame||((BG=g_.requestAnimationFrame)||YU)(XU)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),K3=w_=null},g_.__c=function(_,$){$.some(function(j){try{j.__h.some(e6),j.__h=j.__h.filter(function(G){return!G.__||U3(G)})}catch(G){$.some(function(Z){Z.__h&&(Z.__h=[])}),$=[],g_.__e(G,j.__v)}}),UG&&UG(_,$)},g_.unmount=function(_){DG&&DG(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(G){try{e6(G)}catch(Z){$=Z}}),j.__H=void 0,$&&g_.__e($,j.__v))};EG=typeof requestAnimationFrame=="function";WG=new Map;F=VU.bind(E3)});function W1(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function q_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{return}}function U$(_,$=!1){let j=W1(_);if(j===null)return $;return j==="true"}function O4(_,$=null){let j=W1(_);if(j===null)return $;let G=parseInt(j,10);return Number.isFinite(G)?G:$}function W2(_){let $=W1(_);if(!$)return null;try{return JSON.parse($)}catch{return null}}function Y7(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function jX(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let G=j.length===3?j.split("").map((X)=>X+X).join(""):j,Z=parseInt(G,16);return{r:Z>>16&255,g:Z>>8&255,b:Z&255,hex:`#${G.toLowerCase()}`}}function JH(_,$){try{if(document.body){_.style.display="none",document.body.appendChild(_);let j=getComputedStyle(_).color||_.style.color;return document.body.removeChild(_),j}}catch{return $}return $}function AH(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=JH(j,j.style.color).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Z)return null;let X=parseInt(Z[1],10),Y=parseInt(Z[2],10),V=parseInt(Z[3],10);if(![X,Y,V].every((q)=>Number.isFinite(q)))return null;let Q=`#${[X,Y,V].map((q)=>q.toString(16).padStart(2,"0")).join("")}`;return{r:X,g:Y,b:V,hex:Q}}function z4(_){return jX(_)||AH(_)}function V7(_,$,j){let G=Math.round(_.r+($.r-_.r)*j),Z=Math.round(_.g+($.g-_.g)*j),X=Math.round(_.b+($.b-_.b)*j);return`rgb(${G} ${Z} ${X})`}function O2(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function kH(_){let $=_.r/255,j=_.g/255,G=_.b/255,Z=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),X=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),Y=G<=0.03928?G/12.92:Math.pow((G+0.055)/1.055,2.4);return 0.2126*Z+0.7152*X+0.0722*Y}function MH(_){return kH(_)>0.4?"#000000":"#ffffff"}function GX(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function q7(_){return eZ[_]||eZ.default}function TH(_){return _.mode==="auto"?GX():_.mode}function ZX(_,$){let j=q7(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||H$}function D$(_,$,j){let G=z4(_);if(!G)return _;return V7(G,$,j)}function XX(_,$,j){let G=z4($);if(!G)return _;let X=jX(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:D$(_.bgPrimary,G,0.08),bgSecondary:D$(_.bgSecondary,G,0.12),bgHover:D$(_.bgHover,G,0.16),textPrimary:D$(_.textPrimary,G,j==="dark"?0.08:0.06),textSecondary:D$(_.textSecondary,G,j==="dark"?0.12:0.1),borderColor:D$(_.borderColor,G,0.1),accent:G.hex,accentHover:X?V7(G,X,0.18):G.hex,warning:D$(_.warning||H$.warning,G,0.14),danger:D$(_.danger,G,0.16),success:D$(_.success,G,0.16)}}function wH(_,$){let j=z4(_?.warning);if(j)return j.hex;let G=z4($==="dark"?A2.warning:H$.warning)||z4(H$.warning),Z=z4(_?.accent);if(G&&Z)return V7(G,Z,$==="dark"?0.18:0.14);return $==="dark"?A2.warning:H$.warning}function yH(_,$){if(typeof document>"u")return;let j=document.documentElement,G=_.accent,Z=z4(G),X=Z?O2(Z,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,Y=Z?O2(Z,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",V=Z?O2(Z,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",Q=Z?MH(Z):$==="dark"?"#000000":"#ffffff",q=Z?O2(Z,$==="dark"?0.35:0.25):"rgba(29, 155, 240, 0.25)",B=wH(_,$),K={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":G,"--accent-hover":_.accentHover||G,"--accent-color-alpha":q,"--accent-soft":Y,"--accent-soft-strong":V,"--accent-contrast-text":Q,"--warning-color":B,"--danger-color":_.danger||H$.danger,"--success-color":_.success||H$.success,"--search-highlight-color":X||"rgba(29, 155, 240, 0.2)"};Object.entries(K).forEach(([N,L])=>{if(L)j.style.setProperty(N,L)})}function IH(){if(typeof document>"u")return;let _=document.documentElement;zH.forEach(($)=>_.style.removeProperty($))}function F5(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,G=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!G)G=document.createElement("meta"),document.head.appendChild(G);if(G.setAttribute("name",_),j)G.setAttribute("id",j);return G}function _X(_){let $=Y7(J4?.theme||"default"),j=J4?.tint?String(J4.tint).trim():null,G=ZX($,_);if($==="default"&&j)G=XX(G,j,_);if(G?.bgPrimary)return G.bgPrimary;return _==="dark"?A2.bgPrimary:H$.bgPrimary}function xH(_,$){if(typeof document>"u")return;let j=F5("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let G=F5("theme-color",{id:"theme-color-light"});if(G)G.setAttribute("media","(prefers-color-scheme: light)"),G.setAttribute("content",_X("light"));let Z=F5("theme-color",{id:"theme-color-dark"});if(Z)Z.setAttribute("media","(prefers-color-scheme: dark)"),Z.setAttribute("content",_X("dark"));let X=F5("msapplication-TileColor");if(X&&_)X.setAttribute("content",_);let Y=F5("msapplication-navbutton-color");if(Y&&_)Y.setAttribute("content",_);let V=F5("apple-mobile-web-app-status-bar-style");if(V)V.setAttribute("content",$==="dark"?"black-translucent":"default")}function CH(){if(typeof window>"u")return;let _={...J4,mode:$X};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function PH(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function RH(_){if(typeof document>"u"||!_)return;let $=document.documentElement;if($?.style)$.style.background=_;if(document.body?.style)document.body.style.background=_}function Q7(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=Y7(_?.theme||"default"),G=_?.tint?String(_.tint).trim():null,Z=q7(j),X=TH(Z),Y=ZX(j,X);J4={theme:j,tint:G},$X=X;let V=document.documentElement;V.dataset.theme=X,V.dataset.colorTheme=j,V.dataset.tint=G?String(G):"",V.style.colorScheme=X;let Q=Y;if(j==="default"&&G)Q=XX(Y,G,X);if(j==="default"&&!G)IH();else yH(Q,X);if(RH(Q.bgPrimary),xH(Q.bgPrimary,X),CH(),$.persist!==!1)if(q_(X7,j),G)q_(J2,G);else q_(J2,"")}function z2(){if(q7(J4.theme).mode!=="auto")return;Q7(J4,{persist:!1})}function K7(){if(typeof window>"u")return;let _=Y7(W1(X7)||"default"),$=(()=>{let j=W1(J2);return j?j.trim():null})();Q7({theme:_,tint:$},{persist:!1})}function YX(){if(typeof window>"u")return()=>{};if(K7(),window.matchMedia&&!Z7){let _=window.matchMedia("(prefers-color-scheme: dark)");if(_.addEventListener)_.addEventListener("change",z2);else if(_.addListener)_.addListener(z2);return Z7=!0,()=>{if(_.removeEventListener)_.removeEventListener("change",z2);else if(_.removeListener)_.removeListener(z2);Z7=!1}}return()=>{}}function U5(_){if(!_||typeof _!=="object")return;let $=PH(),j=_.chat_jid||_.chatJid||null,G=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(!j||j===$)Q7({theme:G||"default",tint:Z},{persist:!1});q_(X7,G||"default"),q_(J2,Z||"")}function VX(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return GX()}var X7="piclaw_theme",J2="piclaw_tint",H$,A2,eZ,zH,J4,$X="light",Z7=!1;var $6=O_(()=>{H$={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},A2={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},eZ={default:{label:"Default",mode:"auto",light:H$,dark:A2},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},zH=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-color-alpha","--accent-contrast-text","--accent-soft","--accent-soft-strong","--warning-color","--danger-color","--success-color","--search-highlight-color"],J4={theme:"default",tint:null}});function DX(_=typeof window<"u"?window:null){return _||null}function M2(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function Y6(_,$){return`${_}:${$}`}function HX(_){return`${_}-${Math.random().toString(36).slice(2,10)}-${Date.now().toString(36)}`}function EX(_,$){if(_.length<=$)return;_.splice(0,_.length-$)}function k4(_){if(!_||typeof _!=="object")return null;return{..._}}function w4(_){if(!_)return null;return M4.find(($)=>$.id===_)||null}function L7(_,$){if(typeof performance>"u"||typeof performance.mark!=="function")return;try{performance.mark(`piclaw:${_}:${$}`)}catch(j){console.debug("[app-perf] Ignoring performance.mark failure.",j,{traceId:_,phase:$})}}function WX(_){if(typeof performance>"u"||typeof performance.clearMarks!=="function")return;try{performance.clearMarks(`piclaw:${_}:start`);let $=w4(_);if(!$)return;for(let j of $.phases)performance.clearMarks(`piclaw:${_}:${j.phase}`)}catch($){console.debug("[app-perf] Ignoring performance.clearMarks failure.",$,{traceId:_})}}function UX(_,$,j){let G=T4.get(Y6(_,$));if(G&&w4(G)?.status==="active")X6(G,"cancelled","superseded",{replacementType:_,replacementChatJid:$});let Z=HX(_),X={id:Z,type:_,chatJid:$,startedAt:M2(),detail:k4(j),phases:[],status:"active"};return M4.push(X),EX(M4,100),T4.set(Y6(_,$),Z),L7(Z,"start"),Z}function X6(_,$,j,G,Z){let X=w4(_);if(!X||X.status!=="active")return;if(j)X.phases.push({phase:j,at:M2(),detail:k4(G)}),L7(X.id,j);if(X.status=$,X.completedAt=M2(),X.durationMs=X.completedAt-X.startedAt,Z!==void 0)X.error=Z instanceof Error?Z.message:String(Z);let Y=Y6(X.type,X.chatJid);if(T4.get(Y)===X.id)T4.delete(Y);WX(X.id)}function _E(_=DX()){let $=_?.__PICLAW_PERF__;if($)return $;if(_)_.__PICLAW_PERF__=T2;return T2}function D5(_=DX()){return _E(_)}function OX(_,$,j){return D5().ensureTrace(_,$,j)}function w2(_,$){return D5().getActiveTraceId(_,$)}function X1(_,$,j){D5().markTrace(_,$,j)}function y2(_,$,j="settled",G){let Z=w4(_);if(!Z||Z.status!=="active")return!1;let X=new Set(Z.phases.map((Y)=>Y.phase));if(!$.every((Y)=>X.has(Y)))return!1;return X6(_,"completed",j,G),!0}function zX(_,$,j="failed",G){D5().failTrace(_,$,j,G)}function JX(_,$="cancelled",j){D5().cancelTrace(_,$,j)}function N7(_){return D5().recordRequest(_)}var M4,Z6,T4,T2;var V6=O_(()=>{M4=[],Z6=[],T4=new Map;T2={startTrace(_,$,j){return UX(_,$,j)},ensureTrace(_,$,j){let G=T4.get(Y6(_,$));if(G&&w4(G)?.status==="active")return G;return UX(_,$,j)},getActiveTraceId(_,$){let j=T4.get(Y6(_,$));return j&&w4(j)?.status==="active"?j:null},markTrace(_,$,j){let G=w4(_);if(!G||G.status!=="active")return;G.phases.push({phase:$,at:M2(),detail:k4(j)}),L7(G.id,$)},completeTrace(_,$="settled",j){X6(_,"completed",$,j)},failTrace(_,$,j="failed",G){X6(_,"failed",j,G,$)},cancelTrace(_,$="cancelled",j){X6(_,"cancelled",$,j)},recordRequest(_){let $=HX("req");return Z6.push({..._,id:$,detail:k4(_.detail)}),EX(Z6,300),$},getTraces(){return M4.map((_)=>({..._,detail:k4(_.detail),phases:_.phases.map(($)=>({...$,detail:k4($.detail)}))}))},getRequests(){return Z6.map((_)=>({..._,detail:k4(_.detail)}))},clear(){M4.forEach((_)=>WX(_.id)),M4.splice(0,M4.length),Z6.splice(0,Z6.length),T4.clear()},printSummary(){let _={traces:T2.getTraces(),requests:T2.getRequests()};return console.table(_.traces.map(($)=>({id:$.id,type:$.type,chatJid:$.chatJid,status:$.status,durationMs:Number($.durationMs||0).toFixed(1),lastPhase:$.phases[$.phases.length-1]?.phase||"start"}))),_}}});function H5(_){let $=Number(_||0);return Number.isFinite($)&&$>0?$:null}function $E(_){try{return Boolean(_?.matchMedia?.("(pointer: coarse)")?.matches)}catch{return!1}}function jE(_){let $=String(_?.navigator?.userAgent||"");return/Android|webOS|iPhone|iPod|Mobile|Windows Phone/i.test($)}function AX(_){let $=String(_?.navigator?.userAgent||"");return/iPad|Tablet|PlayBook|Silk/i.test($)}function kX(_=typeof window<"u"?window:null){let $=H5(_?.innerWidth)??H5(_?.screen?.availWidth)??H5(_?.screen?.width)??0,j=H5(_?.innerHeight)??H5(_?.screen?.availHeight)??H5(_?.screen?.height)??0,G=$&&j?Math.min($,j):$||j,Z=$&&j?Math.max($,j):$||j,X=$E(_),Y=Number(_?.navigator?.maxTouchPoints||0),V=X||Y>1;if(G>0&&G<=640)return"mobile";if(jE(_)&&!AX(_))return"mobile";if(AX(_))return"tablet";if(V&&G>0&&G<=1100)return"tablet";if(Z>0&&Z<=1180&&G>0&&G<=900)return"tablet";return"desktop"}var F6={};_1(F6,{uploadWorkspaceFile:()=>P2,uploadMedia:()=>R7,updateWorkspaceFile:()=>fE,updateScheduledTask:()=>E7,submitAdaptiveCardAction:()=>f7,streamSidePrompt:()=>xE,stopSessionRecording:()=>z7,stopAutoresearch:()=>AE,steerAgentQueueItem:()=>wE,startSessionRecording:()=>O7,setWorkspaceVisibility:()=>L6,setAgentThoughtVisibility:()=>PE,sessionRecordingPlaybackUrl:()=>A7,sessionRecordingExportUrl:()=>q6,sendPeerAgentMessage:()=>EE,sendAgentMessage:()=>O1,searchPosts:()=>ZE,saveWorkspaceSettings:()=>w7,saveWebPushSubscription:()=>C7,saveUiState:()=>M7,saveQuickActionsSettings:()=>T7,saveEnvironmentOverride:()=>x2,restoreChatBranch:()=>HE,respondToAgentRequest:()=>E5,reorderAgentQueueItem:()=>yE,renameWorkspaceFile:()=>p7,renameChatJid:()=>DE,renameChatBranch:()=>LE,removeAgentQueueItem:()=>TE,reindexWorkspace:()=>m7,purgeChatBranch:()=>UE,pruneChatBranch:()=>FE,previewSessionRecordingRedaction:()=>k7,moveWorkspaceEntry:()=>r7,mergeChatBranchIntoParent:()=>NE,getWorkspaceTree:()=>B6,getWorkspaceRawUrl:()=>N6,getWorkspaceIndexStatus:()=>v7,getWorkspaceFileStat:()=>h7,getWorkspaceFileDownloadUrl:()=>R2,getWorkspaceFile:()=>c7,getWorkspaceDownloadUrl:()=>f2,getWorkspaceBranch:()=>b7,getWebPushPublicKey:()=>x7,getTimeline:()=>p$,getThumbnailUrl:()=>g7,getThread:()=>XE,getSystemMetrics:()=>D7,getSessionRecordings:()=>W7,getSessionRecording:()=>I2,getScheduledTasks:()=>H7,getQuickActionsSettings:()=>K6,getPostsByHashtag:()=>U7,getMediaUrl:()=>u1,getMediaText:()=>RE,getMediaInfo:()=>C2,getMediaBlob:()=>u7,getEnvironmentSettings:()=>y7,getChatBranches:()=>KE,getAutoresearchStatus:()=>JE,getAgents:()=>WE,getAgentThought:()=>CE,getAgentStatus:()=>OE,getAgentQueueState:()=>ME,getAgentModels:()=>y4,getAgentContext:()=>zE,getAgentCommands:()=>Q6,getActiveChatAgents:()=>QE,forkChatBranch:()=>BE,dismissAutoresearch:()=>kE,deleteWorkspaceFile:()=>n7,deleteWebPushSubscription:()=>P7,deleteSessionRecording:()=>J7,deletePost:()=>qE,createWorkspaceFile:()=>l7,createRootChatSession:()=>I7,createReply:()=>VE,createPost:()=>YE,completeInstanceOobe:()=>IE,attachWorkspaceFile:()=>SE,addToWhitelist:()=>S7,SSEClient:()=>S2});async function b0(_,$={}){let j=typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now(),G;try{G=await fetch(h_+_,{...$,headers:{"Content-Type":"application/json",...$.headers}})}catch(X){throw N7({method:String($.method||"GET").toUpperCase(),url:_,startedAt:j,durationMs:(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-j,ok:!1,detail:{failedBeforeResponse:!0}}),X}let Z=(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-j;if(N7({method:String($.method||"GET").toUpperCase(),url:_,startedAt:j,durationMs:Z,status:G.status,ok:G.ok,requestId:G.headers?.get?.("x-request-id")||null,serverTiming:G.headers?.get?.("Server-Timing")||null}),!G.ok){let X=await G.json().catch(()=>({error:"Unknown error"}));throw Error(X.error||`HTTP ${G.status}`)}return G.json()}function MX(_){let $=String(_||"").split(`
`),j="message",G=[];for(let X of $)if(X.startsWith("event:"))j=X.slice(6).trim()||"message";else if(X.startsWith("data:"))G.push(X.slice(5).trim());let Z=G.join(`
`);if(!Z)return null;try{return{event:j,data:JSON.parse(Z)}}catch{return{event:j,data:Z}}}async function GE(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),G=new TextDecoder,Z="";while(!0){let{value:Y,done:V}=await j.read();if(V)break;Z+=G.decode(Y,{stream:!0});let Q=Z.split(`

`);Z=Q.pop()||"";for(let q of Q){let B=MX(q);if(B)$(B.event,B.data)}}Z+=G.decode();let X=MX(Z);if(X)$(X.event,X.data)}async function p$(_=10,$=null,j=null){let G=`/timeline?limit=${_}`;if($)G+=`&before=${$}`;if(j)G+=`&chat_jid=${encodeURIComponent(j)}`;return b0(G)}async function U7(_,$=50,j=0,G=null){let Z=G?`&chat_jid=${encodeURIComponent(G)}`:"";return b0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Z}`)}async function ZE(_,$=50,j=0,G=null,Z="current",X=null,Y=null){let V=G?`&chat_jid=${encodeURIComponent(G)}`:"",Q=Z?`&scope=${encodeURIComponent(Z)}`:"",q=X?`&root_chat_jid=${encodeURIComponent(X)}`:"",B=Y?.images?"&images=1":"",K=Y?.attachments?"&attachments=1":"";return b0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${V}${Q}${q}${B}${K}`)}async function XE(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return b0(`/thread/${_}${j}`)}async function D7(){return b0("/agent/system-metrics")}async function H7(_={}){let $=new URLSearchParams;if(_?.id)$.set("id",String(_.id));if(_?.chatJid)$.set("chat_jid",String(_.chatJid));if(_?.status&&_.status!=="all")$.set("status",String(_.status));if(_?.limit)$.set("limit",String(_.limit));if(_?.includeRunLogs)$.set("include_run_logs","1");if(_?.runLogLimit)$.set("run_log_limit",String(_.runLogLimit));let j=$.toString()?`?${$.toString()}`:"";return b0(`/agent/scheduled-tasks${j}`)}async function E7(_,$,j={}){return b0("/agent/scheduled-tasks/action",{method:"POST",body:JSON.stringify({action:_,id:$,allow_internal:j?.allowInternal===!0})})}async function W7(){return b0("/agent/recordings")}async function I2(_){return b0(`/agent/recordings/${encodeURIComponent(_)}`)}async function O7(_={}){return b0("/agent/recordings/start",{method:"POST",body:JSON.stringify(_||{})})}async function z7(_={}){return b0("/agent/recordings/stop",{method:"POST",body:JSON.stringify(_||{})})}async function J7(_){return b0(`/agent/recordings/${encodeURIComponent(_)}`,{method:"DELETE"})}function q6(_,$="json"){return`/agent/recordings/${encodeURIComponent(_)}/export?format=${encodeURIComponent($)}`}function A7(_){return`/recordings/playback?id=${encodeURIComponent(_)}`}async function k7(_,$={}){return b0("/agent/recordings/redact-preview",{method:"POST",body:JSON.stringify({payload:_,...$})})}async function M7(_){return b0("/agent/ui-state",{method:"POST",body:JSON.stringify(_||{})})}async function YE(_,$=[],j=null){let G=j?`?chat_jid=${encodeURIComponent(j)}`:"";return b0(`/post${G}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function VE(_,$,j=[],G=null){let Z=G?`?chat_jid=${encodeURIComponent(G)}`:"";return b0(`/post/reply${Z}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function qE(_,$=!1,j=null){let G=j?`&chat_jid=${encodeURIComponent(j)}`:"",Z=`/post/${_}?cascade=${$?"true":"false"}${G}`;return b0(Z,{method:"DELETE"})}async function O1(_,$,j=null,G=[],Z=null,X=null){let Y=X?`?chat_jid=${encodeURIComponent(X)}`:"",V={content:$,thread_id:j,media_ids:G,client_context:{screen_hint:kX()}};if(Z==="auto"||Z==="queue"||Z==="steer")V.mode=Z;return b0(`/agent/${_}/message${Y}`,{method:"POST",body:JSON.stringify(V)})}async function Q6(_="web:default"){let $=typeof _==="string"&&_.trim()?_.trim():"web:default";return b0(`/agent/commands?chat_jid=${encodeURIComponent($)}`)}async function K6(){return b0("/agent/settings/quick-actions")}async function T7(_){return b0("/agent/settings/quick-actions",{method:"POST",body:JSON.stringify(_||{})})}async function w7(_){return b0("/agent/settings/workspace",{method:"POST",body:JSON.stringify(_||{})})}async function y7(){return b0("/agent/settings/environment")}async function x2(_){return b0("/agent/settings/environment",{method:"POST",body:JSON.stringify(_||{})})}async function QE(){return b0("/agent/active-chats")}async function KE(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let G=j.toString()?`?${j.toString()}`:"";return b0(`/agent/branches${G}`)}async function BE(_,$={}){return b0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function I7(_){return b0("/agent/root-session",{method:"POST",body:JSON.stringify({agent_name:_})})}async function LE(_,$={}){return b0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function NE(_){return b0("/agent/branch-merge-parent",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function FE(_){return b0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function UE(_){return b0("/agent/branch-purge",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function DE(_,$){return b0("/agent/rename-jid",{method:"POST",body:JSON.stringify({old_jid:_,new_jid:$})})}async function HE(_,$={}){return b0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function EE(_,$,j,G="auto",Z={}){let X={source_chat_jid:_,content:j,mode:G,...Z?.sourceAgentName?{source_agent_name:Z.sourceAgentName}:{},...Z?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return b0("/agent/peer-message",{method:"POST",body:JSON.stringify(X)})}async function x7(){return b0("/agent/push/vapid-public-key")}async function C7(_,$={}){let j={subscription:_,...$?.deviceId?{device_id:$.deviceId}:{}};return b0("/agent/push/subscription",{method:"POST",body:JSON.stringify(j)})}async function P7(_,$={}){let j={subscription:_,...$?.deviceId?{device_id:$.deviceId}:{}};return b0("/agent/push/subscription",{method:"DELETE",body:JSON.stringify(j)})}async function WE(){return b0("/agent/roster")}async function OE(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return b0(`/agent/status${$}`)}async function zE(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return b0(`/agent/context${$}`)}async function JE(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return b0(`/agent/autoresearch/status${$}`)}async function AE(_=null,$={}){return b0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function kE(_=null){return b0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function ME(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return b0(`/agent/queue-state${$}`)}async function TE(_,$=null){let j=await fetch(h_+"/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function wE(_,$=null){let j=await fetch(h_+"/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function yE(_,$,j=null){let G=await fetch(h_+"/agent/queue-reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({from_index:_,to_index:$,chat_jid:j||void 0})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Failed to reorder queued item"}));throw Error(Z.error||`HTTP ${G.status}`)}return G.json()}async function y4(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return b0(`/agent/models${$}`)}async function IE(_="provider-ready"){return b0("/agent/oobe/complete",{method:"POST",body:JSON.stringify({kind:_})})}async function R7(_){let $=new FormData;$.append("file",_);let j=await fetch(h_+"/media/upload",{method:"POST",body:$});if(!j.ok){let G=await j.json().catch(()=>({error:"Upload failed"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function E5(_,$,j=null){let G=await fetch(h_+"/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Failed to respond"}));throw Error(Z.error||`HTTP ${G.status}`)}return G.json()}async function f7(_){let $=await fetch(h_+"/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function xE(_,$={}){let j=await fetch(h_+"/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let X=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(X.error||`HTTP ${j.status}`)}let G=null,Z=null;if(await GE(j,(X,Y)=>{if($.onEvent?.(X,Y),X==="side_prompt_thinking_delta")$.onThinkingDelta?.(Y?.delta||"");else if(X==="side_prompt_text_delta")$.onTextDelta?.(Y?.delta||"");else if(X==="side_prompt_done")G=Y;else if(X==="side_prompt_error")Z=Y}),Z){let X=Error(Z?.error||"Side prompt failed");throw X.payload=Z,X}return G}async function S7(_,$){let j=await fetch(h_+"/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function CE(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return b0(j)}async function PE(_,$,j){return b0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function u1(_){return`${h_}/media/${_}`}function g7(_){return`${h_}/media/${_}/thumbnail`}async function C2(_){let $=await fetch(`${h_}/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function RE(_){let $=await fetch(`${h_}/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function u7(_){let $=await fetch(`${h_}/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function B6(_="",$=2,j=!1){let G=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return b0(G)}async function b7(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return b0($)}async function v7(_="all"){let $=`/workspace/index-status?scope=${encodeURIComponent(_||"all")}`;return b0($)}async function m7(_="all"){return b0("/workspace/reindex",{method:"POST",body:JSON.stringify({scope:_})})}async function c7(_,$=20000,j=null){let G=j?`&mode=${encodeURIComponent(j)}`:"",Z=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${G}`;return b0(Z)}async function h7(_){return b0(`/workspace/stat?path=${encodeURIComponent(_)}`)}async function fE(_,$){return b0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function SE(_){return b0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}function uE(_,$="",j={}){let G=new URLSearchParams;if($)G.set("path",$);if(j.overwrite)G.set("overwrite","1");let Z=G.toString();return Z?`${_}?${Z}`:_}function bE(){if(globalThis.crypto?.randomUUID)return globalThis.crypto.randomUUID();return`upload-${Date.now()}-${Math.random().toString(36).slice(2)}`}function vE(_,$,j,G){return new Promise((Z,X)=>{let Y=new XMLHttpRequest;Y.open("POST",h_+$);for(let[V,Q]of Object.entries(j||{}))if(Q!==void 0&&Q!==null)Y.setRequestHeader(V,String(Q));Y.upload.onprogress=(V)=>{if(typeof G==="function")G({loaded:V.lengthComputable?V.loaded:0,total:V.lengthComputable?V.total:_.size,lengthComputable:V.lengthComputable})},Y.onload=()=>{try{let V=Y.responseText?JSON.parse(Y.responseText):{};if(Y.status>=200&&Y.status<300)Z(V);else{let Q=Error(V.error||`HTTP ${Y.status}`);Q.status=Y.status,Q.code=V.code,X(Q)}}catch{let V=Error(`HTTP ${Y.status}`);V.status=Y.status,X(V)}},Y.onerror=()=>X(Error("Upload failed (network error)")),Y.ontimeout=()=>X(Error("Upload timed out")),Y.send(_)})}async function mE(_,$="",j={}){let G=bE(),Z=uE("/workspace/upload-chunk",$,j),X=Math.max(1,Math.min(F7,Number(j.chunkSize)||gE)),Y=Math.max(0,Number(_?.size)||0),V=Math.max(1,Math.ceil(Y/X)),Q=0,q=null;for(let B=0;B<V;B+=1){let K=B*X,N=Math.min(Y,K+X),L=_.slice(K,N),U=L.size;if(q=await vE(L,Z,{"X-Upload-Id":G,"X-Chunk-Index":B,"X-Chunk-Total":V,"X-File-Name":_?.name||"upload.bin","X-File-Size":Y},(E)=>{if(typeof j.onProgress!=="function")return;let H=Math.min(Y,Q+(E?.loaded||0)),D=Y||1;j.onProgress({loaded:H,total:D,percent:Math.round(H/D*100),chunkIndex:B,chunkTotal:V})}),Q+=U,typeof j.onProgress==="function"){let E=Y||1,H=Y?Q:E;j.onProgress({loaded:H,total:E,percent:Math.round(H/E*100),chunkIndex:B+1,chunkTotal:V})}}return q}async function P2(_,$="",j={}){if(_?.size>F7){let G=(_.size/1048576).toFixed(0),Z=(F7/1048576).toFixed(0),X=Error(`File too large (${G} MB). Maximum upload size is ${Z} MB.`);throw X.code="file_too_large",X}return await mE(_,$,j)}async function l7(_,$,j=""){let G=await fetch(h_+"/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Create failed"})),X=Error(Z.error||`HTTP ${G.status}`);throw X.status=G.status,X.code=Z.code,X}return G.json()}async function p7(_,$){let j=await fetch(h_+"/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Rename failed"})),Z=Error(G.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=G.code,Z}return j.json()}async function r7(_,$){let j=await fetch(h_+"/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Move failed"})),Z=Error(G.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=G.code,Z}return j.json()}async function n7(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return b0($,{method:"DELETE"})}async function L6(_,$=!1){return b0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function N6(_,$={}){let j=new URLSearchParams({path:String(_||"")});if($.download)j.set("download","1");return`${h_}/workspace/raw?${j.toString()}`}function R2(_){return N6(_,{download:!0})}function f2(_,$=!1){let j=`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`;return`${h_}/workspace/download?${j}`}class S2{onEvent;onStatusChange;chatJid;eventSource;reconnectTimeout;reconnectDelay;status;reconnectAttempts;cooldownUntil;connecting;lastActivityAt;staleCheckTimer;staleThresholdMs;constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource(h_+"/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(G)=>{this.markActivity(),this.onEvent(j,JSON.parse(G.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),$("ui_meters"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let G=Math.max(this.cooldownUntil-j,0),Z=Math.max(this.reconnectDelay,G);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Z),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}var h_="",F7=1073741824,gE=8388608;var M_=O_(()=>{V6()});function O5(_){let $=typeof _==="string"?_.trim():"";return $?$:null}function i1(_={}){if(typeof window>"u")return;let $=O5(_.section);try{if(window.__piclawSettingsOpenRequested=!0,$)window.__piclawSettingsRequestedSection=$;else delete window.__piclawSettingsRequestedSection}catch(j){console.debug("[settings-dialog-events] failed to record open request flags",j)}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:$?{section:$}:void 0}))}function Y9(){if(typeof window>"u")return null;return O5(window.__piclawSettingsRequestedSection)}function v2(){if(typeof window>"u")return{open:!1,section:null};let _=Boolean(window.__piclawSettingsOpenRequested),$=Y9();try{window.__piclawSettingsOpenRequested=!1,delete window.__piclawSettingsRequestedSection}catch(j){console.debug("[settings-dialog-events] failed to clear open request flags",j)}return{open:_,section:$}}function d$({children:_,className:$=""}){let[j,G]=C(null);return g(()=>{if(typeof document>"u")return;let Z=document.createElement("div");return Z.className=$||"",document.body.appendChild(Z),G(Z),()=>{try{L$(null,Z)}finally{Z.remove()}}},[]),g(()=>{if(!j)return;j.className=$||"";return},[$,j]),G5(()=>{if(!j)return;L$(_,j);return},[_,j]),null}var m2=O_(()=>{k0()});function V9(_,$){let j=String(_.label||"").localeCompare(String($.label||""),void 0,{sensitivity:"base"});if(j!==0)return j;return String(_.id||"").localeCompare(String($.id||""),void 0,{sensitivity:"base"})}function o$(_){let $=x4.findIndex((j)=>j.id===_.id);if($>=0)x4[$]=_;else x4.push(_);x4.sort(V9)}function LY(_){let $=x4.findIndex((j)=>j.id===_);if($>=0)x4.splice($,1)}function NY(){return[...x4]}function q9(){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent("piclaw:settings-panes-changed"))}var x4;var z5=O_(()=>{x4=[]});function QW(_){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(C4,{detail:{enabled:Boolean(_)}}))}function DY(_){if(typeof fetch!=="function")return;M7({ui_meters:_}).catch(($)=>{console.debug("[meters] Failed to persist meters UI state.",$)})}function KW(_){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(h2,{detail:{collapsed:Boolean(_)}}))}function z6(_=!1){return U$(FY,_)}function HY(_=!1){return U$(UY,_)}function c2(_,$={}){let j=$.persist!==!1,G=$.persistServer!==!1,Z=Boolean(_);if(j)q_(FY,Z?"true":"false");if(G)DY({enabled:Z});return QW(Z),Z}function Q9(_,$={}){let j=$.persist!==!1,G=$.persistServer!==!1,Z=Boolean(_);if(j)q_(UY,Z?"true":"false");if(G)DY({collapsed:Z});return KW(Z),Z}function K9(_){let $=typeof _?.mode==="string"?_.mode.trim().toLowerCase():"";if(typeof _?.enabled==="boolean")c2(Boolean(_.enabled),{persistServer:!1});else if($==="toggle"){let j=!z6(!1);c2(j,{persistServer:!1})}if(typeof _?.collapsed==="boolean")Q9(Boolean(_.collapsed),{persistServer:!1})}var FY="piclaw_system_meters_enabled",UY="piclaw_system_meters_collapsed",C4="piclaw-meters-change",h2="piclaw-meters-collapsed-change";var l2=O_(()=>{M_()});function EY(_,$){if(_===""||_===null||_===void 0)return $;let j=Number(_);return Number.isFinite(j)?j:$}function WY(_,{min:$=-1/0,max:j=1/0}={}){let G=Number.isFinite(Number($))?Number($):-1/0,Z=Number.isFinite(Number(j))?Number(j):1/0;return Math.min(Z,Math.max(G,Number(_)))}function z$(_,{fallback:$=0,min:j=-1/0,max:G=1/0}={}){let Z=EY(_,$);return WY(Z,{min:j,max:G})}function BW(_,{direction:$=1,step:j=1,fallback:G=0,min:Z=-1/0,max:X=1/0}={}){let Y=z$(_,{fallback:G,min:Z,max:X}),V=Math.abs(EY(j,1))||1,Q=Number($)<0?-1:1;return WY(Y+Q*V,{min:Z,max:X})}function v_({value:_,min:$,max:j,step:G=1,fallback:Z,width:X="80px",disabled:Y=!1,label:V,onChange:Q}){let q=Number.isFinite(Number(Z))?Number(Z):z$(_,{fallback:0,min:$,max:j}),[B,K]=C(String(_??q)),N=u(!1);g(()=>{if(!N.current)K(String(_??q))},[_,q]);let L=f((E)=>{N.current=!1;let H=z$(E,{fallback:q,min:$,max:j});K(String(H)),Q?.(H)},[q,$,j,Q]),U=f((E)=>{N.current=!1;let H=BW(_,{direction:E,step:G,fallback:q,min:$,max:j});K(String(H)),Q?.(H)},[q,j,$,Q,G,_]);return F`
        <span class="settings-number-stepper">
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Decrease ${V||"value"}`}
                title=${`Decrease ${V||"value"}`}
                disabled=${Y}
                onClick=${()=>U(-1)}
            >−</button>
            <input
                class="settings-number-input"
                type="text"
                inputmode="numeric"
                pattern="[0-9]*"
                value=${B}
                disabled=${Y}
                style=${`width:${X}`}
                onInput=${(E)=>{N.current=!0,K(E.target.value)}}
                onBlur=${(E)=>L(E.target.value)}
                onKeyDown=${(E)=>{if(E.key==="Enter")E.preventDefault(),L(E.target.value),E.target.blur()}}
            />
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Increase ${V||"value"}`}
                title=${`Increase ${V||"value"}`}
                disabled=${Y}
                onClick=${()=>U(1)}
            >+</button>
        </span>
    `}var P4=O_(()=>{k0()});function OY(_){let $=String(_||"").trim();if(!$)return"";if($.startsWith("http://")||$.startsWith("https://")||$.startsWith("data:")||$.startsWith("blob:"))return $;if($.startsWith("/workspace/"))return`/workspace/file?path=${encodeURIComponent($.slice(11))}`;if($.startsWith("/"))return"";if(/^[a-zA-Z]:[\\/]/.test($))return"";if($.startsWith("\\\\"))return"";if($.includes("\\"))return"";return`/workspace/file?path=${encodeURIComponent($.replace(/^\.\//,""))}`}function zY({value:_,onChange:$}){let j=u(null),[G,Z]=C(OY(_));g(()=>{Z(OY(_))},[_]);let X=f((Y)=>{let V=Y.target.files?.[0];if(!V)return;let Q=new FileReader;Q.onload=()=>{let q=Q.result;Z(q),$?.(q)},Q.readAsDataURL(V)},[$]);return F`
        <div class="settings-avatar-inline" onClick=${()=>j.current?.click()} title="Click to upload">
            ${G?F`<img src=${G} alt="avatar" />`:F`<span class="settings-avatar-placeholder">+</span>`}
            <input type="file" accept="image/*" ref=${j} style="display:none" onChange=${X} />
        </div>
    `}function JY(_={}){return{userName:_.userName||"",userAvatar:_.userAvatar||"",assistantName:_.assistantName||"",assistantAvatar:_.assistantAvatar||"",composeUploadLimitMb:_.composeUploadLimitMb??32,workspaceUploadLimitMb:_.workspaceUploadLimitMb??256}}async function LW(_,$={}){let j=typeof _==="string"?_:"";if(!j)return!1;let G=$.navigator??(typeof navigator<"u"?navigator:null),Z=$.document??(typeof document<"u"?document:null);if(G?.clipboard?.writeText)try{return await G.clipboard.writeText(j),!0}catch(X){}try{if(!Z?.body||typeof Z.createElement!=="function"||typeof Z.execCommand!=="function")return!1;let X=Z.createElement("textarea");X.value=j,X.setAttribute?.("readonly",""),X.style.position="fixed",X.style.left="-9999px",X.style.top="0",X.style.opacity="0",Z.body.appendChild(X),X.focus?.(),X.select?.();let Y=Boolean(Z.execCommand("copy"));return Z.body.removeChild(X),Y}catch(X){return!1}}function B9({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(""),[X,Y]=C(""),[V,Q]=C(""),[q,B]=C(""),[K,N]=C(32),[L,U]=C(256),[E,H]=C(""),[D,M]=C(!1),[z,O]=C(!1),[x,I]=C(!1),[J,k]=C(()=>z6(!1)),[W,T]=C(!1),w=u(""),A=u(null),P=u(!0);g(()=>{return P.current=!0,()=>{P.current=!1}},[]);let R=f((Z0)=>{let j0=JY(Z0);Z(j0.userName),Y(j0.userAvatar),Q(j0.assistantName),B(j0.assistantAvatar),N(j0.composeUploadLimitMb),U(j0.workspaceUploadLimitMb),H(Z0?.widgetToken||""),w.current=JSON.stringify(j0)},[]);g(()=>{R(_||{})},[_,R]),g(()=>{let Z0=(j0)=>{k(Boolean(j0?.detail?.enabled))};return window.addEventListener(C4,Z0),()=>window.removeEventListener(C4,Z0)},[]);let b=Y0(()=>JSON.stringify(JY({userName:G,userAvatar:X,assistantName:V,assistantAvatar:q,composeUploadLimitMb:K,workspaceUploadLimitMb:L})),[G,X,V,q,K,L]);g(()=>{if(b===w.current)return;if(A.current)clearTimeout(A.current);return A.current=setTimeout(async()=>{if(!P.current)return;let Z0=document.activeElement;if(Z0&&Z0.closest?.(".settings-number-stepper"))return;try{let j0=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:b}),V0=await j0.json().catch(()=>({}));if(!P.current)return;if(!j0.ok||!V0?.ok||!V0?.settings)return;w.current=b,j?.(V0.settings),T(!0),setTimeout(()=>{if(P.current)T(!1)},4000)}catch(j0){console.warn("[settings/general] Failed to persist general settings snapshot.",j0)}},800),()=>{if(A.current)clearTimeout(A.current)}},[b,j]);let c=_?.instanceTotp||{configured:!1,issuer:V||"Piclaw",label:G?`${V||"Piclaw"}:${G}`:V||"Piclaw",secret:"",otpauth:"",qrSvg:""},r=f(async()=>{if(!E)return;if(await LW(E))O(!0),setTimeout(()=>{if(P.current)O(!1)},3000);else $?.("Could not copy widget token. Select the token field and copy manually."),console.warn("[settings/general] Failed to copy widget token. Clipboard APIs unavailable or blocked.")},[E,$]),e=f(async()=>{if(x)return;if(!confirm("Regenerate the widget token? Existing macOS widgets using the old token will stop updating."))return;I(!0);try{let Z0=await fetch("/agent/settings/widget-token/regenerate",{method:"POST"}),j0=await Z0.json().catch(()=>({}));if(!Z0.ok||!j0?.ok||!j0?.settings)throw Error(j0?.error||"Failed to regenerate widget token.");H(j0.settings.widgetToken||""),j?.(j0.settings),T(!0),setTimeout(()=>{if(P.current)T(!1)},4000)}catch(Z0){console.warn("[settings/general] Failed to regenerate widget token.",Z0)}finally{if(P.current)I(!1)}},[x,j]),m=typeof window<"u"&&window.isSecureContext,_0=E?"•".repeat(Math.min(Math.max(E.length,16),48)):"—",E0=D?E||"—":_0;return F`
        <div class="settings-section">
            ${W&&F`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Identity</h3>
            <div class="settings-row">
                <label>User</label>
                <${zY} value=${X} onChange=${Y} />
                <input type="text" value=${G} onInput=${(Z0)=>Z(Z0.target.value)} placeholder="Your name" />
            </div>
            <div class="settings-row">
                <label>Agent</label>
                <${zY} value=${q} onChange=${B} />
                <input type="text" value=${V} onInput=${(Z0)=>Q(Z0.target.value)} placeholder="Agent name" />
            </div>

            <h3 style="margin-top:20px">Notifications</h3>
            ${m?F`
                <div class="settings-row">
                    <label>Browser notifications</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span class="settings-hint" style="margin:0">
                            Use the 🔔 bell button in the compose bar to enable/disable notifications.
                            Web Push requires HTTPS or localhost.
                        </span>
                    </div>
                </div>
            `:F`
                <div class="settings-row">
                    <label>Browser notifications</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span class="settings-hint" style="margin:0; color: var(--error-color, #e55)">
                            ⚠ Not available — requires a secure context (HTTPS or localhost).
                            Access via SSH tunnel or reverse proxy with TLS to enable.
                        </span>
                    </div>
                </div>
            `}

            <h3 style="margin-top:20px">Display</h3>
            <div class="settings-row">
                <label>System meters</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${J}
                        onChange=${()=>{let Z0=c2(!J);k(Z0)}} />
                    <span class="settings-hint" style="margin:0">CPU/memory/network meters in the status bar. This browser only.</span>
                </div>
            </div>

            <h3 style="margin-top:20px">Instance Configuration</h3>
            <div class="settings-row">
                <label>Compose upload (MB)</label>
                <${v_}
                    label="compose upload limit"
                    value=${K}
                    min=${1}
                    max=${512}
                    fallback=${32}
                    width="80px"
                    onChange=${N}
                />
                <span class="settings-hint" style="margin:0">chat/media attachments</span>
            </div>
            <div class="settings-row">
                <label>Workspace upload (MB)</label>
                <${v_}
                    label="workspace upload limit"
                    value=${L}
                    min=${1}
                    max=${1024}
                    fallback=${256}
                    width="80px"
                    onChange=${U}
                />
                <span class="settings-hint" style="margin:0">defaults to 256 MB; chunked uploads allow up to 1 GB</span>
            </div>

            <h3 style="margin-top:20px">Authentication</h3>
            <div class="settings-row settings-row-vertical settings-widget-token-row">
                <label>Widget bearer token</label>
                <div class="settings-keychain-reveal-panel settings-widget-token-panel">
                    <div class="settings-keychain-reveal-field settings-widget-token-field">
                        <span class="settings-keychain-reveal-label">Token</span>
                        <code class="settings-keychain-reveal-value settings-widget-token-value">${E0}</code>
                        <button class=${`settings-keychain-reveal-btn${D?" active":""}`}
                            type="button"
                            onClick=${()=>M((Z0)=>!Z0)}
                            disabled=${!E}
                            title=${D?"Hide token":"Reveal token"}>
                            ${D?F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                        </button>
                        <button class="settings-keychain-copy-btn" type="button" onClick=${r} disabled=${!E} title="Copy token">
                            ${z?F`<span class="settings-widget-token-copied">Copied</span>`:F`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`}
                        </button>
                        <button class="settings-keychain-prompt-submit settings-widget-token-regenerate" type="button" onClick=${e} disabled=${x}>${x?"Regenerating…":"Regenerate"}</button>
                    </div>
                </div>
                <span class="settings-hint" style="margin:6px 0 0 0;">
                    Read-only token for <code>GET /api/state</code> and <code>GET /api/state/events</code>. Use as <code>Authorization: Bearer …</code>.
                </span>
            </div>
            <div class="settings-totp-panel">
                <div class="settings-totp-header">
                    <div>
                        <strong>TOTP setup QR</strong>
                        <div class="settings-hint" style="margin:6px 0 0 0;">
                            ${c.configured?"Current web-login authenticator secret. Scan this QR to add another authenticator device.":"TOTP is not configured for this instance yet, so no setup QR is available."}
                        </div>
                    </div>
                </div>
                ${c.configured?F`
                    <div class="settings-totp-grid">
                        <div class="settings-totp-qr" dangerouslySetInnerHTML=${{__html:c.qrSvg}}></div>
                        <div class="settings-totp-meta">
                            <div class="settings-row settings-row-vertical">
                                <label>Issuer</label>
                                <input type="text" readonly value=${c.issuer||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>Label</label>
                                <input type="text" readonly value=${c.label||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>Secret</label>
                                <input type="text" readonly value=${c.secret||""} />
                            </div>
                        </div>
                    </div>
                `:null}
            </div>
        </div>
    `}var AY=O_(()=>{k0();l2();P4()});var MY={};_1(MY,{SessionsSection:()=>NW});function kY(_={}){return{sessionAutoRotate:_.sessionAutoRotate!==!1,sessionMaxSizeMb:_.sessionMaxSizeMb??16,sessionMaxLines:_.sessionMaxLines??4000,sessionMaxCompactions:_.sessionMaxCompactions??3,sessionIsolation:_.sessionIsolation||"none",toolUseBudget:_.toolUseBudget??64}}function NW({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(!0),[X,Y]=C(16),[V,Q]=C(4000),[q,B]=C(3),[K,N]=C(64),[L,U]=C("none"),[E,H]=C(!1),D=u(""),M=u(null),z=u(!0);g(()=>{return z.current=!0,()=>{z.current=!1}},[]);let O=f((I)=>{let J=kY(I);Z(J.sessionAutoRotate),Y(J.sessionMaxSizeMb),Q(J.sessionMaxLines),B(J.sessionMaxCompactions),N(J.toolUseBudget),U(J.sessionIsolation),D.current=JSON.stringify(J)},[]);g(()=>{O(_||{})},[_,O]);let x=Y0(()=>JSON.stringify(kY({sessionAutoRotate:G,sessionMaxSizeMb:X,sessionMaxLines:V,sessionMaxCompactions:q,toolUseBudget:K,sessionIsolation:L})),[G,X,V,q,K,L]);return g(()=>{if(x===D.current)return;if(M.current)clearTimeout(M.current);return M.current=setTimeout(async()=>{if(!z.current)return;let I=document.activeElement;if(I&&I.closest?.(".settings-number-stepper"))return;try{let J=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:x}),k=await J.json().catch(()=>({}));if(!z.current)return;if(!J.ok||!k?.ok||!k?.settings)return;D.current=x,j?.(k.settings),H(!0),setTimeout(()=>{if(z.current)H(!1)},4000)}catch(J){console.warn("[settings/sessions] Failed to persist session settings.",J)}},800),()=>{if(M.current)clearTimeout(M.current)}},[x,j]),F`
        <div class="settings-section">
            ${E&&F`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Session Lifecycle</h3>
            <div class="settings-row">
                <label>Auto-rotate sessions</label>
                <input type="checkbox" checked=${G} onChange=${(I)=>Z(I.target.checked)} />
            </div>
            <div class="settings-row">
                <label>Max session size (MB)</label>
                <${v_}
                    label="max session size"
                    value=${X}
                    min=${1}
                    max=${256}
                    fallback=${32}
                    width="80px"
                    onChange=${Y}
                />
            </div>

            <h3 style="margin-top:20px">Agent Behaviour</h3>
            <div class="settings-row">
                <label>Tool use budget</label>
                <${v_}
                    label="tool use budget"
                    value=${K}
                    min=${8}
                    max=${512}
                    fallback=${64}
                    width="80px"
                    onChange=${N}
                />
                <span class="settings-hint" style="margin:0">max tool-call messages per turn</span>
            </div>
            <div class="settings-row">
                <label>Session isolation</label>
                <select value=${L} onChange=${(I)=>U(I.target.value)}>
                    <option value="none">None — full cross-session visibility</option>
                    <option value="summary">Summary — tools visible, no arguments</option>
                    <option value="full">Full — sessions cannot see each other</option>
                </select>
            </div>
        </div>
    `}var TY=O_(()=>{k0();P4()});var wY={};_1(wY,{__recordingsSettingsTest:()=>HW,RecordingsSection:()=>DW});function r2(_){if(!_)return"—";let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function L9(_){if(_==="full")return"full / trusted";if(_==="metadata")return"metadata only";return"redacted"}function p2({children:_,type:$="neutral"}){return F`<span class=${`settings-task-pill settings-task-pill-${$}`}>${_}</span>`}function FW(){if(typeof window>"u")return"web:default";return String(window.__piclawCurrentChatJid||"web:default")}function J6(_){return String(_||"").split(`
`).map(($)=>$.trim()).filter(Boolean)}function UW({recording:_,details:$,onDelete:j,onRefresh:G}){if(!_)return F`<div class="settings-task-detail-empty">Select a recording to inspect, replay, export, or delete it.</div>`;let Z=$?.meta||_,X=Array.isArray($?.events)?$.events:[],Y=X.reduce((Q,q)=>Q+(Array.isArray(q.redactions)?q.redactions.length:0),0),V=X.reduce((Q,q)=>{let B=q.kind||"event";return Q[B]=(Q[B]||0)+1,Q},{});return F`
        <div class="settings-task-detail settings-recording-detail">
            <div class="settings-task-detail-header">
                <div>
                    <h4>${Z.title||Z.id}</h4>
                    <code>${Z.id}</code>
                </div>
                <div class="settings-task-detail-actions">
                    <button onClick=${()=>window.open(A7(Z.id),"_blank","noopener,noreferrer")}>Playback</button>
                    <button onClick=${G}>Refresh</button>
                    <button class="danger" onClick=${()=>j(Z)}>Delete</button>
                </div>
            </div>
            <div class="settings-task-detail-grid">
                <span>Status</span><strong>${Z.status||"—"}</strong>
                <span>Mode</span><strong>${L9(Z.mode)}</strong>
                <span>Chat</span><code>${Z.chatJid||"—"}</code>
                <span>Started</span><strong>${r2(Z.startedAt)}</strong>
                <span>Ended</span><strong>${r2(Z.endedAt)}</strong>
                <span>Events</span><strong>${Z.eventCount??X.length}</strong>
                <span>Redactions</span><strong>${Y}</strong>
            </div>
            <div class="settings-recording-export-row">
                <a href=${q6(Z.id,"json")}>Export JSON</a>
                <a href=${q6(Z.id,"jsonl")}>Export JSONL</a>
                <a href=${q6(Z.id,"html")}>Export standalone HTML</a>
            </div>
            <h4>Event summary</h4>
            ${X.length===0&&F`<p class="settings-hint">Open or refresh details to inspect trace events.</p>`}
            ${X.length>0&&F`
                <div class="settings-recording-event-summary">
                    ${Object.entries(V).map(([Q,q])=>F`<${p2}>${Q}: ${q}<//>`)}
                </div>
                <div class="settings-task-command-block">
                    <strong>First events</strong>
                    <pre>${JSON.stringify(X.slice(0,5),null,2)}</pre>
                </div>
            `}
        </div>
    `}function DW({filter:_="",setStatus:$}){let[j,G]=C([]),[Z,X]=C([]),[Y,V]=C(!0),[Q,q]=C(null),[B,K]=C(null),[N,L]=C(null),[U,E]=C(!1),[H,D]=C(FW),[M,z]=C(""),[O,x]=C("redacted"),[I,J]=C(!0),[k,W]=C(""),[T,w]=C(""),[A,P]=C('{"Authorization":"Bearer abc1234567890","content":"hello"}'),[R,b]=C(null);g(()=>{let h=($0)=>{let Q0=String($0?.detail?.chatJid||"").trim();if(Q0)D(Q0)};return window.addEventListener("piclaw:current-chat-changed",h),()=>window.removeEventListener("piclaw:current-chat-changed",h)},[]);let c=f(async(h=B)=>{V(!0),q(null);try{let $0=await W7(),Q0=$0.recordings||[];G(Q0),X($0.active||[]);let O0=Q0.find((a)=>a.id===h)||Q0[0]||null;if(K(O0?.id||null),O0?.id)L(await I2(O0.id));else L(null)}catch($0){q($0?.message||"Failed to load recordings.")}finally{V(!1)}},[B]);g(()=>{c()},[c]);let r=Y0(()=>j.find((h)=>h.id===B)||null,[j,B]),e=Y0(()=>Z.find((h)=>h.chatJid===H)||null,[Z,H]),m=String(_||"").trim().toLowerCase(),_0=Y0(()=>{if(!m)return j;return j.filter((h)=>[h.id,h.title,h.chatJid,h.status,h.mode].some(($0)=>String($0||"").toLowerCase().includes(m)))},[j,m]),E0=f(async(h)=>{if(K(h?.id||null),L(null),!h?.id)return;try{L(await I2(h.id))}catch($0){$?.($0?.message||"Failed to load recording.","error")}},[$]),Z0=f(async()=>{if(U)return;E(!0);try{let h={keys:J6(k),patterns:J6(T)},$0=await O7({chat_jid:H,title:M||void 0,mode:O,include_timeline_snapshot:I,timeline_snapshot_limit:80,redaction:h});$?.(`Recording started for ${H}.`,"success"),await c($0?.recording?.id)}catch(h){$?.(h?.message||"Failed to start recording.","error")}finally{E(!1)}},[U,H,k,T,I,c,O,$,M]),j0=f(async(h=e)=>{if(!h||U)return;E(!0);try{let $0=await z7({id:h.id});$?.(`Recording stopped for ${h.chatJid}.`,"success"),await c($0?.recording?.id)}catch($0){$?.($0?.message||"Failed to stop recording.","error")}finally{E(!1)}},[U,e,c,$]),V0=f(async(h)=>{if(!h||U)return;if(!window.confirm(`Delete recording ${h.id}?

${h.title||""}`))return;E(!0);try{await J7(h.id),$?.("Recording deleted.","success"),await c(null)}catch($0){$?.($0?.message||"Failed to delete recording.","error")}finally{E(!1)}},[U,c,$]),N0=f(async()=>{try{let h=JSON.parse(A||"null"),$0=await k7(h,{mode:O,redaction:{keys:J6(k),patterns:J6(T)}});b($0.preview)}catch(h){b({error:h?.message||"Preview failed."})}},[k,T,O,A]);return F`
        <div class="settings-section settings-recordings-section">
            <div class="settings-recording-start-card">
                <h3>Session Recording</h3>
                <p class="settings-hint">Opt-in trace capture for deterministic playback and screen-recording exports. Playback never calls live agent or tool endpoints.</p>
                <div class="settings-recording-form-grid">
                    <label>Chat JID<input value=${H} onInput=${(h)=>D(h.target.value)} /></label>
                    <label>Title<input placeholder="Demo recording" value=${M} onInput=${(h)=>z(h.target.value)} /></label>
                    <label>Mode<select value=${O} onChange=${(h)=>x(h.target.value)}><option value="redacted">Redacted</option><option value="metadata">Metadata only</option><option value="full">Full / trusted local</option></select></label>
                    <label class="settings-recording-checkbox"><input type="checkbox" checked=${I} onChange=${(h)=>J(h.target.checked)} /> Include timeline snapshot</label>
                </div>
                <div class="settings-recording-form-grid settings-recording-redaction-grid">
                    <label>Extra redacted keys<textarea rows="2" placeholder="customer_id\ninternal_code" value=${k} onInput=${(h)=>W(h.target.value)} /></label>
                    <label>Extra regex patterns<textarea rows="2" placeholder="ACME-[0-9]+" value=${T} onInput=${(h)=>w(h.target.value)} /></label>
                </div>
                <div class="settings-task-detail-actions">
                    ${e?F`<button onClick=${()=>j0(e)} disabled=${U}>Stop current chat recording</button>`:F`<button onClick=${Z0} disabled=${U}>Start recording</button>`}
                    <button onClick=${()=>c()} disabled=${Y}>Refresh</button>
                </div>
                ${Z.length>0&&F`<div class="settings-recording-active-row">${Z.map((h)=>F`<${p2} type="active">REC ${h.chatJid}<//>`)}</div>`}
            </div>

            <details class="settings-recording-preview">
                <summary>Redaction preview</summary>
                <textarea rows="4" value=${A} onInput=${(h)=>P(h.target.value)} />
                <div class="settings-task-detail-actions"><button onClick=${N0}>Preview redaction</button></div>
                ${R&&F`<pre>${JSON.stringify(R,null,2)}</pre>`}
            </details>

            ${Y&&F`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>Loading recordings…</span></div>`}
            ${Q&&F`<div class="settings-error-state">${Q}</div>`}
            ${!Y&&!Q&&j.length===0&&F`<div class="settings-empty-state"><strong>No recordings yet.</strong><p>Start a recording above, then use playback/export for deterministic screen capture.</p></div>`}
            ${!Y&&!Q&&j.length>0&&F`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label="Session recordings">
                        ${_0.map((h)=>F`
                            <button class=${`settings-task-row ${h.id===B?"active":""}`} onClick=${()=>E0(h)}>
                                <span class="settings-task-row-main"><strong>${h.title||h.id}</strong><span>${h.chatJid} · ${r2(h.startedAt)}</span></span>
                                <span class="settings-task-row-meta"><${p2} type=${h.status==="recording"?"active":"completed"}>${h.status}<//><${p2}>${L9(h.mode)}<//></span>
                                <span class="settings-task-row-times">${h.eventCount||0} events</span>
                            </button>
                        `)}
                        ${_0.length===0&&F`<p class="settings-hint">No recordings match “${_}”.</p>`}
                    </div>
                    <${UW} recording=${r} details=${N} onDelete=${V0} onRefresh=${()=>r&&E0(r)} />
                </div>
            `}
        </div>
    `}var HW;var yY=O_(()=>{k0();M_();HW={formatDateTime:r2,modeLabel:L9,parseList:J6}});var IY={};_1(IY,{CompactionSection:()=>WW});function EW(_={}){return{compactionTimeoutSec:_.compactionTimeoutSec??180,compactionBackoffBaseMin:_.compactionBackoffBaseMin??15,compactionBackoffMaxMin:_.compactionBackoffMaxMin??360,compactionThresholdPercent:_.compactionThresholdPercent??75,compactionBackoffDecayFactor:_.compactionBackoffDecayFactor??0.5,progressWatchdogEnabled:Boolean(_.progressWatchdogEnabled??!1),progressWatchdogTimeoutSec:_.progressWatchdogTimeoutSec??120,compactionBackoffs:Array.isArray(_.compactionBackoffs)?_.compactionBackoffs:[],progressWatchdogPhases:Array.isArray(_.progressWatchdogPhases)?_.progressWatchdogPhases:[]}}function N9(_){let $=String(_||"").trim();if(!$)return"—";let j=new Date($);if(Number.isNaN(j.getTime()))return $;return j.toLocaleString()}function WW({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(180),[X,Y]=C(15),[V,Q]=C(360),[q,B]=C(75),[K,N]=C(0.5),[L,U]=C(!1),[E,H]=C(120),[D,M]=C([]),[z,O]=C([]),[x,I]=C(!1),J=u(""),k=u(null),W=u(!0);g(()=>{return W.current=!0,()=>{W.current=!1}},[]);let T=f((P)=>{let R=EW(P);Z(R.compactionTimeoutSec),Y(R.compactionBackoffBaseMin),Q(R.compactionBackoffMaxMin),B(R.compactionThresholdPercent),N(R.compactionBackoffDecayFactor),U(R.progressWatchdogEnabled),H(R.progressWatchdogTimeoutSec),M(R.compactionBackoffs),O(R.progressWatchdogPhases),J.current=JSON.stringify({compactionTimeoutSec:R.compactionTimeoutSec,compactionBackoffBaseMin:R.compactionBackoffBaseMin,compactionBackoffMaxMin:R.compactionBackoffMaxMin,compactionThresholdPercent:R.compactionThresholdPercent,compactionBackoffDecayFactor:R.compactionBackoffDecayFactor,progressWatchdogEnabled:R.progressWatchdogEnabled,progressWatchdogTimeoutSec:R.progressWatchdogTimeoutSec})},[]);g(()=>{T(_||{})},[_,T]);let w=Y0(()=>JSON.stringify({compactionTimeoutSec:G,compactionBackoffBaseMin:X,compactionBackoffMaxMin:V,compactionThresholdPercent:q,compactionBackoffDecayFactor:K,progressWatchdogEnabled:L,progressWatchdogTimeoutSec:E}),[G,X,V,q,K,L,E]);g(()=>{if(w===J.current)return;if(k.current)clearTimeout(k.current);return k.current=setTimeout(async()=>{if(!W.current)return;let P=document.activeElement;if(P&&P.closest?.(".settings-number-stepper"))return;try{$?.("Saving compaction settings…","info");let R=await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:w}),b=await R.json().catch(()=>({}));if(!W.current)return;if(!R.ok||!b?.ok||!b?.settings){$?.(b?.error||"Failed to save compaction settings.","error");return}J.current=w,j?.(b.settings),T({..._||{},...b.settings||{}}),$?.("Compaction settings saved.","success"),I(!0),setTimeout(()=>{if(W.current)I(!1),$?.(null)},4000)}catch(R){if(console.warn("[settings/compaction] Failed to persist compaction settings.",R),W.current)$?.("Failed to save compaction settings.","error")}},800),()=>{if(k.current)clearTimeout(k.current)}},[w,j,$,T,_]);let A=f(async(P)=>{try{$?.(`Clearing compaction suppression for ${P}…`,"info");let R=await fetch("/agent/settings/compaction/reset-backoff",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chatJid:P})}),b=await R.json().catch(()=>({}));if(!R.ok||!b?.ok||!b?.settings){$?.(b?.error||"Failed to clear compaction suppression.","error");return}j?.(b.settings),T({..._||{},...b.settings||{}}),$?.(`Cleared compaction suppression for ${P}.`,"success")}catch(R){console.warn("[settings/compaction] Failed to clear compaction suppression.",R),$?.("Failed to clear compaction suppression.","error")}},[T,j,$,_]);return F`
        <div class="settings-section">
            ${x&&F`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Compaction settings applied. Existing turns keep their current timers; new turns use the updated values.
                </div>
            `}

            <h3>Automatic compaction</h3>
            <div class="settings-row">
                <label>Compaction threshold (%)</label>
                <${v_}
                    label="compaction threshold"
                    value=${q}
                    min=${10}
                    max=${95}
                    fallback=${75}
                    width="80px"
                    onChange=${B}
                />
                <span class="settings-hint" style="margin:0">auto-compact when context exceeds this % of window</span>
            </div>
            <div class="settings-row">
                <label>Compaction timeout (sec)</label>
                <${v_}
                    label="compaction timeout"
                    value=${G}
                    min=${1}
                    max=${3600}
                    fallback=${180}
                    width="90px"
                    onChange=${Z}
                />
                <span class="settings-hint" style="margin:0">Abort a stuck pre-prompt/manual compaction instead of hanging forever.</span>
            </div>
            <div class="settings-row">
                <label>Failure backoff base (min)</label>
                <${v_}
                    label="compaction backoff base"
                    value=${X}
                    min=${1}
                    max=${1440}
                    fallback=${15}
                    width="90px"
                    onChange=${Y}
                />
                <span class="settings-hint" style="margin:0">First suppression window after a compaction failure.</span>
            </div>
            <div class="settings-row">
                <label>Failure backoff max (min)</label>
                <${v_}
                    label="compaction backoff max"
                    value=${V}
                    min=${1}
                    max=${10080}
                    fallback=${360}
                    width="90px"
                    onChange=${Q}
                />
                <span class="settings-hint" style="margin:0">Upper bound for exponential suppression after repeated failures.</span>
            </div>

            <div class="settings-row">
                <label>Backoff decay factor</label>
                <${v_}
                    label="backoff decay factor"
                    value=${Math.round(K*100)}
                    min=${10}
                    max=${100}
                    fallback=${50}
                    width="80px"
                    onChange=${(P)=>N(P/100)}
                />
                <span class="settings-hint" style="margin:0">% — halves backoff after each successful compaction</span>
            </div>

            <h3 style="margin-top:20px">Stall watchdog</h3>
            <div class="settings-row">
                <label>Enable watchdog</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${L} onChange=${(P)=>U(Boolean(P.target.checked))} />
                    <span class="settings-hint" style="margin:0">Disabled by default. When enabled, a helper process terminates the runtime if an active phase stops heartbeating.</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Watchdog timeout (sec)</label>
                <${v_}
                    label="watchdog timeout"
                    value=${E}
                    min=${0}
                    max=${3600}
                    fallback=${120}
                    width="90px"
                    disabled=${!L}
                    onChange=${H}
                />
                <span class="settings-hint" style="margin:0">How long an active phase can go without a heartbeat before the watchdog kills the runtime.</span>
            </div>

            <h3 style="margin-top:20px">Active compaction suppressions</h3>
            ${D.length===0?F`
                <p class="settings-hint">No chats are currently under compaction backoff.</p>
            `:F`
                <div class="settings-table-wrapper">
                    <table class="settings-table">
                        <thead>
                            <tr>
                                <th>Chat</th>
                                <th>Failures</th>
                                <th>Suppressed until</th>
                                <th>Last error</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            ${D.map((P)=>F`
                                <tr>
                                    <td><code>${P.chatJid}</code></td>
                                    <td>${P.failureCount}</td>
                                    <td>${N9(P.backoffUntil)}</td>
                                    <td title=${P.lastErrorMessage||""}>${P.lastErrorMessage||"—"}</td>
                                    <td>
                                        <button class="settings-secondary-btn" onClick=${()=>A(P.chatJid)}>
                                            Clear
                                        </button>
                                    </td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </div>
            `}

            <h3 style="margin-top:20px">Live watchdog phases</h3>
            ${z.length===0?F`
                <p class="settings-hint">No active tracked phases right now.</p>
            `:F`
                <div class="settings-table-wrapper">
                    <table class="settings-table">
                        <thead>
                            <tr>
                                <th>Chat</th>
                                <th>Phase</th>
                                <th>Started</th>
                                <th>Last heartbeat</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${z.map((P)=>F`
                                <tr>
                                    <td><code>${P.chatJid}</code></td>
                                    <td>${P.phase}</td>
                                    <td>${N9(P.startedAt)}</td>
                                    <td>${N9(P.lastProgressAt)}</td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </div>
            `}
        </div>
    `}var xY=O_(()=>{k0();P4()});function PY(_){let $=String(_||"").trim().toLowerCase();if(!$)return null;let j=JW[$]||$;if(/^f(?:[1-9]|1[0-2])$/.test(j))return j;if(AW.has(j))return j;if(j.length===1)return j;if(/^[a-z0-9]+$/.test(j))return j;return null}function J5(_){let $=String(_||"").trim();if(!$)return null;let j=$.split("+").map((X)=>X.trim()).filter(Boolean);if(!j.length)return null;let G={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let X of j){let Y=X.toLowerCase(),V=zW[Y];if(V){G[V]=!0;continue}if(G.key)return null;let Q=PY(X);if(!Q||Q==="escape")return null;G.key=Q}if(!G.key)return null;let Z=[];if(G.ctrl)Z.push("ctrl");if(G.meta)Z.push("meta");if(G.alt)Z.push("alt");if(G.shift)Z.push("shift");return Z.push(G.key),Z.join("+")}function RY(_){return String(_||"").split(/[\n,]/).map(($)=>J5($)).filter(($)=>Boolean($))}function s$(_){return _.join(", ")}function U9(){let _=W2(CY);if(!_||typeof _!=="object")return{};let $={};for(let j of i$){let G=_[j.id];if(!Array.isArray(G))continue;let Z=G.map((X)=>J5(String(X||""))).filter((X)=>Boolean(X));$[j.id]=[...new Set(Z)]}return $}function F9(_){if(q_(CY,JSON.stringify(_)),typeof window<"u")window.dispatchEvent(new CustomEvent("piclaw:keyboard-shortcuts-changed",{detail:{config:_}}))}function fY(_){return OW.get(_)}function A6(_){let $=U9()[_];if(Array.isArray($))return $;return[...fY(_).defaultBindings]}function SY(_,$){let j=U9(),G=fY(_).defaultBindings,Z=[...new Set($.map((X)=>J5(X)).filter((X)=>Boolean(X)))];if(Z.length===G.length&&Z.every((X,Y)=>X===G[Y]))delete j[_];else j[_]=Z;F9(j)}function D9(_){if(!_){F9({});return}let $=U9();delete $[_],F9($)}function n2(){let _={};for(let $ of i$)_[$.id]=A6($.id);return _}function kW(_){let $=typeof _==="string"?_:"";if(!$)return"";if($.length===1)return $.toLowerCase();return PY($)||$.toLowerCase()}function MW(_){let $=J5(_);if(!$)return null;let j={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let G of $.split("+")){if(G==="ctrl"||G==="meta"||G==="alt"||G==="shift"){j[G]=!0;continue}j.key=G}return j.key?j:null}function TW(_,$){let j=MW($);if(!j)return!1;if(kW(_?.key)!==j.key)return!1;let Z=!j.shift&&j.key.length===1&&/[^a-z0-9]/i.test(j.key);return Boolean(_?.ctrlKey)===j.ctrl&&Boolean(_?.metaKey)===j.meta&&Boolean(_?.altKey)===j.alt&&(Z||Boolean(_?.shiftKey)===j.shift)}function J$(_,$){return A6($).some((j)=>TW(_,j))}var CY="piclaw_keyboard_shortcuts_v1",i$,OW,zW,JW,AW;var d2=O_(()=>{i$=[{id:"openHelp",label:"Open keyboard help",description:"Open Settings → Keyboard. Default: question mark and quote when focus is outside compose and other editable fields.",defaultBindings:["?",'"']},{id:"openSettings",label:"Open settings",description:"Open the settings dialog.",defaultBindings:["ctrl+,","meta+,","alt+,"]},{id:"previousChat",label:"Previous session",description:"Switch to the previous visible chat/session.",defaultBindings:["["]},{id:"nextChat",label:"Next session",description:"Switch to the next visible chat/session.",defaultBindings:["]"]},{id:"toggleDock",label:"Toggle dock",description:"Show or hide the bottom dock panes.",defaultBindings:["ctrl+`"]},{id:"toggleZenMode",label:"Toggle zen mode",description:"Collapse surrounding chrome for a focused chat view.",defaultBindings:["ctrl+shift+z","meta+shift+z"]}],OW=new Map(i$.map((_)=>[_.id,_])),zW={cmd:"meta",command:"meta",meta:"meta",super:"meta",ctrl:"ctrl",control:"ctrl",alt:"alt",option:"alt",shift:"shift"},JW={esc:"escape",return:"enter",spacebar:"space"},AW=new Set(["tab","enter","space","backspace","delete","insert","clear","home","end","pageup","pagedown","up","down","left","right"])});var gY={};_1(gY,{KeyboardSection:()=>yW});function wW(_,$,j){let G=String(_||"").trim().toLowerCase();if(!G)return!0;return[$.label,$.description,j,...$.defaultBindings||[]].some((Z)=>String(Z||"").toLowerCase().includes(G))}function yW({filter:_="",setStatus:$}){let[j,G]=C(()=>{let Q=n2();return Object.fromEntries(Object.entries(Q).map(([q,B])=>[q,s$(B)]))});g(()=>{let Q=()=>{let q=n2();G(Object.fromEntries(Object.entries(q).map(([B,K])=>[B,s$(K)])))};return window.addEventListener("piclaw:keyboard-shortcuts-changed",Q),()=>window.removeEventListener("piclaw:keyboard-shortcuts-changed",Q)},[]);let Z=Y0(()=>i$.filter((Q)=>{let q=String(j[Q.id]||"");return wW(_,Q,q)}),[j,_]),X=(Q)=>{let q=String(j[Q]||"").trim(),K=(q?q.split(/[\n,]/).map((L)=>L.trim()).filter(Boolean):[]).filter((L)=>!J5(L));if(K.length>0){$?.(`Invalid shortcut: ${K[0]}. Escape is reserved and cannot be rebound.`,"error");return}let N=RY(q);SY(Q,N),G((L)=>({...L,[Q]:s$(A6(Q))})),$?.("Keyboard shortcuts saved.","success")},Y=(Q)=>{D9(Q),G((q)=>({...q,[Q]:s$(A6(Q))})),$?.("Keyboard shortcut reset to default.","success")};return F`
        <div class="settings-section">
            <h3>Keyboard</h3>
            <p class="settings-hint">
                Customize app-wide shortcuts as comma-separated bindings. Changes apply immediately.
                <code>Escape</code> is reserved for dismiss/abort and cannot be rebound.
            </p>
            <p class="settings-hint">
                <code>/help</code> and typing <code>"</code> outside the compose box open this pane.
            </p>

            <div class="settings-row" style="align-items:center; gap:10px; margin-bottom:18px; justify-content:flex-end;">
                <button class="settings-addon-btn" style="min-width:180px; height:40px; font-size:14px;" onClick=${()=>{D9();let Q=n2();G(Object.fromEntries(Object.entries(Q).map(([q,B])=>[q,s$(B)]))),$?.("Keyboard shortcuts reset to defaults.","success")}}>Reset all to defaults</button>
            </div>

            <div class="settings-shortcut-list" style="display:grid; gap:16px;">
                ${Z.map((Q)=>F`
                    <div class="settings-shortcut-card" key=${Q.id} style="display:grid; grid-template-columns:minmax(240px, 1.25fr) minmax(320px, 1fr); gap:18px; align-items:start; padding:18px 20px; border:1px solid var(--border-color, rgba(120,120,120,.22)); border-radius:16px; background:var(--panel-bg, rgba(255,255,255,.04));">
                        <div class="settings-shortcut-copy" style="min-width:0;">
                            <div class="settings-shortcut-title" style="font-size:17px; font-weight:700; line-height:1.3;">${Q.label}</div>
                            <div class="settings-hint" style="margin:6px 0 0 0; font-size:14px; line-height:1.5;">${Q.description}</div>
                            <div class="settings-shortcut-default" style="margin-top:10px; font-size:13px; color:var(--text-secondary);">Default: <code style="font-size:13px;">${s$(Q.defaultBindings)}</code></div>
                        </div>
                        <div class="settings-shortcut-controls" style="display:grid; gap:10px; min-width:0;">
                            <input
                                type="text"
                                value=${j[Q.id]||""}
                                placeholder=${s$(Q.defaultBindings)}
                                onInput=${(q)=>G((B)=>({...B,[Q.id]:q.target.value}))}
                                style="width:100%; min-height:46px; padding:10px 14px; font-size:16px; line-height:1.35; font-family:var(--font-mono, ui-monospace, monospace); border-radius:12px;"
                            />
                            <div class="settings-shortcut-actions" style="display:flex; justify-content:flex-end; align-items:center; gap:10px; flex-wrap:wrap;">
                                <button class="settings-addon-btn settings-addon-btn-install" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>X(Q.id)}>Save</button>
                                <button class="settings-addon-btn" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>Y(Q.id)}>Default</button>
                            </div>
                        </div>
                    </div>
                `)}
                ${Z.length===0&&F`<div class="settings-hint">No shortcuts match this filter.</div>`}
            </div>
        </div>
    `}var uY=O_(()=>{k0();d2()});function bY(_,$=H9){let j=Number(_);if(!Number.isFinite(j))return $;return Math.min(300,Math.max(15,Math.round(j)))}function vY(_,$=E9){let j=Number(_);if(!Number.isFinite(j))return $;return Math.min(8,Math.max(0,Math.round(j)))}function A5(){return{refreshIntervalSec:bY(O4(i2,H9),H9),folderPreviewDepth:vY(O4(s2,E9),E9)}}function mY(_={}){let $=A5(),j={refreshIntervalSec:bY(Object.prototype.hasOwnProperty.call(_,"refreshIntervalSec")?_.refreshIntervalSec:$.refreshIntervalSec,$.refreshIntervalSec),folderPreviewDepth:vY(Object.prototype.hasOwnProperty.call(_,"folderPreviewDepth")?_.folderPreviewDepth:$.folderPreviewDepth,$.folderPreviewDepth)};if(q_(i2,String(j.refreshIntervalSec)),q_(s2,String(j.folderPreviewDepth)),typeof window<"u")window.dispatchEvent(new CustomEvent(o2,{detail:{settings:j}}));return j}var o2="piclaw:workspace-client-settings-updated",i2="workspaceRefreshIntervalSec",s2="workspaceFolderPreviewDepth",H9=60,E9=3;var W9=()=>{};var hY={};_1(hY,{WorkspaceSection:()=>IW});function cY(_={}){let $=_.workspaceSettings||{};return{webTerminalEnabled:$.webTerminalEnabled!==!1,vncAllowDirect:$.vncAllowDirect!==!1,treeMaxDepth:$.treeMaxDepth??4,treeMaxEntries:$.treeMaxEntries??5000}}function IW({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(!0),[X,Y]=C(!0),[V,Q]=C(4),[q,B]=C(5000),[K,N]=C(60),[L,U]=C(3),[E,H]=C(!1),[D,M]=C(!1),z=u(""),O=u(null),x=u(null),I=u(null),J=u(!0);g(()=>{return J.current=!0,()=>{if(J.current=!1,O.current)clearTimeout(O.current);if(x.current)clearTimeout(x.current);if(I.current)clearTimeout(I.current)}},[]);let k=f((w)=>{let A=cY(w),P=A5();Z(A.webTerminalEnabled),Y(A.vncAllowDirect),Q(A.treeMaxDepth),B(A.treeMaxEntries),N(P.refreshIntervalSec),U(P.folderPreviewDepth),z.current=JSON.stringify(A)},[]);g(()=>{k(_||{})},[_,k]);let W=Y0(()=>JSON.stringify(cY({workspaceSettings:{webTerminalEnabled:G,vncAllowDirect:X,treeMaxDepth:V,treeMaxEntries:q}})),[G,X,V,q]);g(()=>{if(W===z.current)return;if(O.current)clearTimeout(O.current);return O.current=setTimeout(async()=>{if(!J.current)return;let w=document.activeElement;if(w&&w.closest?.(".settings-number-stepper"))return;try{let A=await w7(JSON.parse(W));if(!J.current||!A?.ok||!A?.settings)return;if(z.current=W,j?.({workspaceSettings:A.settings}),$?.(null),H(!0),x.current)clearTimeout(x.current);x.current=setTimeout(()=>{if(J.current)H(!1)},4000)}catch(A){$?.(String(A?.message||A),"error")}},800),()=>{if(O.current)clearTimeout(O.current)}},[W,j,$]);let T=f((w)=>{let A=mY(w);if(N(A.refreshIntervalSec),U(A.folderPreviewDepth),M(!0),I.current)clearTimeout(I.current);I.current=setTimeout(()=>{if(J.current)M(!1)},3000)},[]);return F`
        <div class="settings-section">
            ${E&&F`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Workspace settings applied. Server-side limits affect new workspace requests immediately.
                </div>
            `}
            ${D&&F`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Browser workspace settings applied immediately in this tab.
                </div>
            `}

            <h3>Access</h3>
            <div class="settings-row">
                <label>Enable web terminal</label>
                <input type="checkbox" checked=${G} onChange=${(w)=>Z(w.target.checked)} />
            </div>
            <div class="settings-row">
                <label>Allow direct VNC targets</label>
                <input type="checkbox" checked=${X} onChange=${(w)=>Y(w.target.checked)} />
            </div>
            <p class="settings-hint">Terminal access updates immediately. Direct VNC target policy applies to new VNC requests.</p>

            <h3 style="margin-top:20px">Server scan guardrails</h3>
            <div class="settings-row">
                <label>Max tree depth</label>
                <${v_}
                    label="workspace tree max depth"
                    value=${V}
                    min=${1}
                    max=${8}
                    fallback=${4}
                    width="80px"
                    onChange=${Q}
                />
                <span class="settings-hint" style="margin:0">caps all <code>/workspace/tree</code> requests</span>
            </div>
            <div class="settings-row">
                <label>Max entries per scan</label>
                <${v_}
                    label="workspace tree max entries"
                    value=${q}
                    min=${250}
                    max=${5000}
                    step=${250}
                    fallback=${5000}
                    width="92px"
                    onChange=${B}
                />
                <span class="settings-hint" style="margin:0">truncate oversized tree walks earlier</span>
            </div>

            <h3 style="margin-top:20px">This browser</h3>
            <div class="settings-row">
                <label>Refresh interval (seconds)</label>
                <${v_}
                    label="workspace refresh interval"
                    value=${K}
                    min=${15}
                    max=${300}
                    step=${15}
                    fallback=${60}
                    width="92px"
                    onChange=${(w)=>T({refreshIntervalSec:w})}
                />
            </div>
            <div class="settings-row">
                <label>Folder preview scan depth</label>
                <${v_}
                    label="folder preview scan depth"
                    value=${L}
                    min=${0}
                    max=${8}
                    fallback=${3}
                    width="80px"
                    onChange=${(w)=>T({folderPreviewDepth:w})}
                />
                <span class="settings-hint" style="margin:0">set to <code>0</code> to disable folder size preview scans</span>
            </div>
            <p class="settings-hint">Root and folder-expansion tree loads remain shallow; the folder size preview is the deepest workspace scan in the UI.</p>
        </div>
    `}var lY=O_(()=>{k0();M_();W9();P4()});var pY={};_1(pY,{EnvironmentSection:()=>xW});function O9(_={}){let $=_.environmentSettings||_.settings||_.environment||{};return{variables:Array.isArray($.variables)?$.variables:[],overrides:$.overrides&&typeof $.overrides==="object"?$.overrides:{},count:Number($.count||0),overrideCount:Number($.overrideCount||0),keychainEnvNames:Array.isArray($.keychainEnvNames)?$.keychainEnvNames:[]}}function xW({settingsData:_,filter:$="",setStatus:j,mergeSettingsData:G}){let[Z,X]=C(()=>O9(_||{})),[Y,V]=C({}),[Q,q]=C(""),[B,K]=C(""),[N,L]=C(null);g(()=>{X(O9(_||{})),V({})},[_]);let U=f((O)=>{let x=O9({environmentSettings:O?.settings||O});return X(x),G?.({environmentSettings:x}),V({}),x},[G]),E=f(async()=>{try{let O=await y7();if(O?.ok)U(O.settings);j?.("Environment refreshed.","info")}catch(O){j?.(String(O?.message||O),"error")}},[U,j]),H=f(async(O,x)=>{let I=String(O||"").trim();if(!I)return;L(I);try{let J=await x2({action:"set",name:I,value:String(x??"")});if(J?.ok)U(J.settings);if(j?.(`Saved environment override for ${I}.`,"info"),I===Q.trim())q(""),K("")}catch(J){j?.(String(J?.message||J),"error")}finally{L(null)}},[U,Q,j]),D=f(async(O)=>{let x=String(O||"").trim();if(!x)return;L(x);try{let I=await x2({action:"clear",name:x});if(I?.ok)U(I.settings);j?.(`Cleared environment override for ${x}.`,"info")}catch(I){j?.(String(I?.message||I),"error")}finally{L(null)}},[U,j]),M=Y0(()=>{let O=String($||"").trim().toLowerCase(),x=Array.isArray(Z.variables)?Z.variables:[];if(!O)return x;return x.filter((I)=>{return`${I?.name||""} ${I?.value||""} ${I?.source||""}`.toLowerCase().includes(O)})},[Z.variables,$]),z=f((O,x)=>{V((I)=>({...I||{},[O]:x}))},[]);return F`
        <div class="settings-section">
            <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:12px; margin-bottom:12px;">
                <div>
                    <h3 style="margin-top:0">Environment</h3>
                    <p class="settings-hint" style="margin-top:4px">
                        Showing non-keychain environment variables only. Overrides are stored in extension KV and applied to <code>process.env</code>, so subsequent tool calls inherit them.
                    </p>
                </div>
                <button type="button" class="settings-secondary-btn" onClick=${E}>Refresh</button>
            </div>

            <div class="settings-row" style="align-items:flex-start; gap:10px;">
                <label>Add override</label>
                <div style="display:grid; grid-template-columns:minmax(180px, 0.7fr) minmax(240px, 1fr) auto; gap:8px; flex:1;">
                    <input
                        type="text"
                        value=${Q}
                        placeholder="VARIABLE_NAME"
                        spellcheck="false"
                        onInput=${(O)=>q(O.target.value)}
                    />
                    <input
                        type="text"
                        value=${B}
                        placeholder="value"
                        spellcheck="false"
                        onInput=${(O)=>K(O.target.value)}
                    />
                    <button
                        type="button"
                        disabled=${!Q.trim()||N===Q.trim()}
                        onClick=${()=>H(Q,B)}
                    >Save</button>
                </div>
            </div>

            <p class="settings-hint">
                ${Z.count} variables visible • ${Z.overrideCount} overrides active • ${Z.keychainEnvNames.length} keychain-injected variables hidden
            </p>

            <div class="settings-tool-list" style="max-height:58vh; overflow:auto;">
                ${M.map((O)=>{let x=String(O?.name||""),I=Object.prototype.hasOwnProperty.call(Y,x)?Y[x]:O.value,J=I!==O.value,k=N===x;return F`
                        <div class="settings-tool-row" key=${x} style="grid-template-columns:minmax(180px,0.45fr) minmax(240px,1fr) auto auto; align-items:center;">
                            <span class="settings-tool-name" title=${x}>${x}</span>
                            <input
                                type="text"
                                value=${I}
                                spellcheck="false"
                                onInput=${(W)=>z(x,W.target.value)}
                                style="min-width:0; width:100%; font-family:var(--font-mono, monospace);"
                            />
                            <span class="settings-tool-kind" title=${O.overridden?"Overridden in KV":"Inherited from process environment"}>
                                ${O.overridden?"override":"process"}
                            </span>
                            <span style="display:flex; gap:6px; justify-content:flex-end;">
                                <button type="button" disabled=${k||!J} onClick=${()=>H(x,I)}>Save</button>
                                <button type="button" disabled=${k||!O.overridden} onClick=${()=>D(x)}>Clear</button>
                            </span>
                        </div>
                    `})}
                ${M.length===0&&F`<p class="settings-hint">No environment variables match "${$}".</p>`}
            </div>
        </div>
    `}var rY=O_(()=>{k0();M_()});var nY={};_1(nY,{ProvidersSection:()=>PW});function CW(_){switch(_){case"oauth":return"OAuth";case"api_key":return"API key";case"custom":return"Configured";default:return"Configured"}}function PW({providers:_,setStatus:$}){let[j,G]=C(null),[Z,X]=C(null),[Y,V]=C({}),Q=f((H,D)=>{V((M)=>({...M,[H]:D}))},[]),q=f(async(H)=>{let D=(Y.apiKey||"").trim();if(!D){$?.("API key cannot be empty.","error");return}G(H),$?.(`Configuring ${H}…`,"info");try{let M=JSON.stringify({provider:H,method:"api_key",api_key:D}),z=await O1("default",`/login __step2 ${M}`,null,[]);if(z?.command?.status==="error"){$?.(z.command.message,"error");return}$?.(z?.command?.message||`${H} configured.`,"success"),X(null),V({})}catch(M){$?.(String(M.message||M),"error")}finally{G(null)}},[Y,$]),B=f(async(H,D)=>{G(H),$?.(`Configuring ${H}…`,"info");try{let M={provider:H,method:"custom"};for(let x of D.customFields||[])M[x.key]=(Y[x.key]||"").trim();let z=JSON.stringify(M),O=await O1("default",`/login __step2 ${z}`,null,[]);if(O?.command?.status==="error"){$?.(O.command.message,"error");return}$?.(O?.command?.message||`${H} configured.`,"success"),X(null),V({})}catch(M){$?.(String(M.message||M),"error")}finally{G(null)}},[Y,$]),K=f(async(H)=>{G(H),$?.(`Starting OAuth for ${H}…`,"info");try{let D=JSON.stringify({provider:H}),z=(await O1("default",`/login __step1 ${D}`,null,[]))?.command?.message||"";if(z.includes("http")){let O=z.match(/(https?:\/\/[^\s)]+)/);if(O)window.open(O[1],"_blank","noopener"),$?.("OAuth window opened. Complete the sign-in flow, then close this message.","success");else $?.(z,"success")}else $?.(z||`OAuth flow started for ${H}. Check the chat.`,"success")}catch(D){$?.(String(D.message||D),"error")}finally{G(null)}},[$]),N=f(async(H)=>{if(j)return;G(H),$?.(`Logging out ${H}…`,"info");try{await O1("default",`/logout ${H}`,null,[]),$?.(`Logged out ${H}. Restart may be needed.`,"success")}catch(D){$?.(String(D.message||D),"error")}finally{G(null)}},[j,$]),L=_||[],U=(H)=>Z===H,E=(H)=>{X((D)=>D===H?null:H),V({})};return F`
        <div class="settings-section">
            <h3>Providers</h3>
            <div class="settings-provider-list">
                ${L.map((H)=>F`
                    <div class=${`settings-provider-card${H.configured?" configured":""}`}>
                        <div class="settings-provider-card-header" onClick=${()=>!H.configured&&E(H.id)}>
                            <div class="settings-provider-card-title">
                                <strong>${H.name}</strong>
                                <span class="settings-provider-id">${H.id}</span>
                                ${H.configured&&F`<span class="settings-tag settings-tag-skill">${CW(H.authType)}</span>`}
                            </div>
                            <div class="settings-provider-card-meta">
                                ${H.hasOAuth&&F`<span class="settings-tag">OAuth</span>`}
                                ${H.hasApiKey&&F`<span class="settings-tag">API Key</span>`}
                                ${H.isCustom&&F`<span class="settings-tag">Custom</span>`}
                            </div>
                            <div class="settings-provider-card-actions">
                                ${H.configured?F`
                                    <button class="settings-addon-btn settings-addon-btn-remove"
                                        disabled=${j===H.id} onClick=${(D)=>{D.stopPropagation(),N(H.id)}}
                                    >${j===H.id?"…":"Logout"}</button>
                                    <button class="settings-addon-btn"
                                        disabled=${j===H.id} onClick=${(D)=>{D.stopPropagation(),E(H.id)}}
                                    >Reconfigure</button>
                                `:F`
                                    <button class="settings-addon-btn settings-addon-btn-install"
                                        disabled=${j===H.id} onClick=${(D)=>{D.stopPropagation(),E(H.id)}}
                                    >Set up</button>
                                `}
                            </div>
                        </div>

                        ${U(H.id)&&F`
                            <div class="settings-provider-setup">
                                <p class="settings-hint settings-provider-setup-hint">Sign-in flows open in the browser. In narrow panes the setup form stacks vertically to avoid clipping.</p>
                                ${H.hasOAuth&&F`
                                    <div class="settings-provider-method">
                                        <button class="settings-addon-btn settings-addon-btn-install"
                                            disabled=${j===H.id}
                                            onClick=${()=>K(H.id)}>
                                            ${j===H.id?"Starting…":"Sign in with OAuth"}
                                        </button>
                                    </div>
                                `}
                                ${H.hasApiKey&&F`
                                    <div class="settings-provider-method">
                                        <div class="settings-provider-field-row">
                                            <label>API Key</label>
                                            <input type="password" value=${Y.apiKey||""}
                                                onInput=${(D)=>Q("apiKey",D.target.value)}
                                                placeholder=${H.apiKeyHint||"Enter API key"} />
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${j===H.id||!(Y.apiKey||"").trim()}
                                                onClick=${()=>q(H.id)}>
                                                ${j===H.id?"…":"Save"}
                                            </button>
                                        </div>
                                    </div>
                                `}
                                ${H.isCustom&&F`
                                    <div class="settings-provider-method">
                                        ${(H.customFields||[]).map((D)=>F`
                                            <div class="settings-provider-field-row">
                                                <label>${D.label}${D.required?" *":""}</label>
                                                <input type="text" value=${Y[D.key]||""}
                                                    onInput=${(M)=>Q(D.key,M.target.value)}
                                                    placeholder=${D.placeholder||""} />
                                            </div>
                                        `)}
                                        <div class="settings-provider-form-actions">
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${j===H.id}
                                                onClick=${()=>B(H.id,H)}>
                                                ${j===H.id?"Configuring…":"Save configuration"}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                    </div>
                `)}
            </div>
        </div>
    `}var dY=O_(()=>{k0();M_()});var oY={};_1(oY,{ModelsSection:()=>uW});function SW(_){return typeof _==="string"&&_.toLowerCase()==="anthropic"}function gW({thinkingLevel:_,supportsThinking:$,provider:j,availableLevels:G,onSetLevel:Z,disabled:X}){let Y=SW(j)?RW:fW,V=G&&G.length>1?G:["off","minimal","low","medium","high"],Q=Math.max(0,V.indexOf(_??"off"));if(!$)return F`<div class="settings-thinking-slider"><label>Thinking level</label><p class="settings-hint" style="margin:4px 0 0">Current model does not support thinking.</p></div>`;return F`
        <div class="settings-thinking-slider">
            <label>Thinking level: <strong>${Y[V[Q]]||V[Q]}</strong></label>
            <div class="settings-slider-track">
                <input type="range" min="0" max=${V.length-1} step="1" value=${Q} disabled=${X}
                    onInput=${(q)=>Z(V[parseInt(q.target.value,10)])} />
                <div class="settings-slider-labels">
                    ${V.map((q,B)=>F`<span class=${B===Q?"active":""} onClick=${()=>!X&&Z(q)}>${Y[q]||q}</span>`)}
                </div>
            </div>
        </div>
    `}function uW({filter:_=""}){let[$,j]=C(null),[G,Z]=C(!1),[X,Y]=C("off"),[V,Q]=C(!1),[q,B]=C(["off"]),[K,N]=C(!1),L=f(async()=>{let I=await y4();if(j(I),I.thinking_level)Y(I.thinking_level);if(Q(Boolean(I.supports_thinking)),Array.isArray(I.available_thinking_levels)&&I.available_thinking_levels.length>0)B(I.available_thinking_levels);return I},[]);g(()=>{L().catch(()=>j({models:[],model_options:[]}))},[]);let U=f(async(I)=>{if(G)return;Z(!0);try{await O1("default",`/model ${I}`,null,[]),await L()}catch(J){console.error("Failed to switch model:",J)}finally{Z(!1)}},[G,L]),E=f(async(I)=>{if(K)return;N(!0),Y(I);try{let J=await O1("default",`/thinking ${I}`,null,[]);if(J?.command?.thinking_level)Y(J.command.thinking_level);Q(J?.command?.supports_thinking!==!1),await L()}catch(J){console.error("Failed to set thinking:",J),await L().catch((k)=>{})}finally{N(!1)}},[K,L]);if(!$)return F`<div class="settings-loading">Loading models\u2026</div>`;let H=$.model_options||[],D=$.current,z=H.find((I)=>I.label===D)?.provider||"",O=_.toLowerCase(),x=O?H.filter((I)=>I.label.toLowerCase().includes(O)||(I.provider||"").toLowerCase().includes(O)):H;return F`
        <div class="settings-models-split">
            <div class="settings-models-summary settings-hint">Model and provider names may wrap in narrow panes to avoid clipping.</div>
            <div class="settings-models-list">
                <table class="settings-table settings-borderless settings-models-table">
                    <thead><tr><th style="width:32px"></th><th>Model</th><th>Provider</th><th>Context</th><th style="text-align:center">Reasoning</th></tr></thead>
                    <tbody>
                        ${x.map((I)=>F`
                            <tr class=${I.label===D?"settings-row-active":""}>
                                <td><input type="radio" name="settings-model" checked=${I.label===D} disabled=${G} onChange=${()=>U(I.label)} /></td>
                                <td>${I.name||I.label}</td><td>${I.provider}</td>
                                <td>${I.context_window?(I.context_window/1000).toFixed(0)+"K":"—"}</td>
                                <td style="text-align:center">${I.reasoning?"\uD83E\uDDE0":"—"}</td>
                            </tr>
                        `)}
                        ${x.length===0&&F`<tr><td colspan="5" class="settings-empty">No models match "${_}"</td></tr>`}
                    </tbody>
                </table>
            </div>
            <div class="settings-models-footer">
                <${gW}
                    thinkingLevel=${X}
                    supportsThinking=${V}
                    provider=${z}
                    availableLevels=${q}
                    onSetLevel=${E}
                    disabled=${K||G} />
            </div>
        </div>
    `}var RW,fW;var iY=O_(()=>{k0();M_();RW={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"max"},fW={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"xhigh"}});var aY={};_1(aY,{ThemeSection:()=>bW});function sY(_={}){return{uiTheme:typeof _.uiTheme==="string"&&_.uiTheme.trim()?_.uiTheme.trim():"default",uiTint:typeof _.uiTint==="string"&&_.uiTint.trim()?_.uiTint.trim():""}}function bW({themes:_,colorKeys:$,settingsData:j,setStatus:G,mergeSettingsData:Z}){let[X,Y]=C("default"),[V,Q]=C(""),[q,B]=C(!1),K=u(""),N=u(null),L=u(!0);g(()=>{return L.current=!0,()=>{L.current=!1}},[]);let U=f((z)=>{let O=sY(z);Y(O.uiTheme),Q(O.uiTint),K.current=JSON.stringify(O)},[]);g(()=>{if(j){U(j);return}U({uiTheme:document.documentElement.dataset.colorTheme||"default",uiTint:document.documentElement.dataset.tint||""})},[j,U]);let E=f((z,O)=>{U5({theme:z,tint:O||null}),Y(z||"default"),Q(O||"")},[]),H=Y0(()=>JSON.stringify(sY({uiTheme:X,uiTint:V})),[X,V]);g(()=>{if(H===K.current)return;if(N.current)clearTimeout(N.current);return N.current=setTimeout(async()=>{if(!L.current)return;B(!0);try{let z=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:H}),O=await z.json().catch(()=>({}));if(!L.current)return;if(!z.ok||!O?.ok||!O?.settings){G?.(O?.error||"Failed to save appearance settings.","error");return}K.current=H,Z?.(O.settings),G?.("Appearance synced across clients.","success")}catch(z){if(!L.current)return;console.warn("[settings/appearance] Failed to persist appearance settings.",z),G?.("Failed to save appearance settings.","error")}finally{if(L.current)B(!1)}},250),()=>{if(N.current)clearTimeout(N.current)}},[H,Z,G]);let D=$||[],M=_||[];return F`
        <div class="settings-section">
            ${q&&F`<div class="settings-hint" style="margin:0 0 12px 0;">Syncing appearance…</div>`}
            <div class="settings-tint-row">
                <label class="settings-tint-label">
                    <input type="radio" name="settings-theme"
                        checked=${X==="default"}
                        onChange=${()=>E("default",V)} />
                    <strong>Default</strong>
                    <span class="settings-hint" style="margin:0 0 0 6px">auto (light/dark)</span>
                </label>
                <div class="settings-tint-picker">
                    <label class="settings-hint" style="margin:0">Tint:</label>
                    <input type="color"
                        value=${V||"#1d9bf0"}
                        onInput=${(z)=>{let O=z.target.value;if(Q(O),X==="default")U5({theme:"default",tint:O})}} />
                    ${V&&F`
                        <button class="settings-tint-clear" onClick=${()=>E("default","")}
                            title="Clear tint">\u2715</button>
                    `}
                    <span class="settings-tint-hex">${V||"none"}</span>
                </div>
            </div>

            <table class="settings-table settings-borderless settings-theme-table">
                <thead>
                    <tr>
                        <th></th><th>Theme</th><th>Mode</th>
                        ${D.map((z)=>F`<th class="settings-swatch-header">${z.replace(/([A-Z])/g," $1").trim()}</th>`)}
                    </tr>
                </thead>
                <tbody>
                    ${M.filter((z)=>z.name!=="default").map((z)=>F`
                        <tr class=${z.name===X?"settings-row-active":""}
                            style="cursor:pointer" onClick=${()=>E(z.name,"")}>
                            <td><input type="radio" name="settings-theme" checked=${z.name===X} onChange=${()=>E(z.name,"")} /></td>
                            <td><strong>${z.label}</strong></td>
                            <td>${z.mode}</td>
                            ${D.map((O)=>{let x=z.colors?.[O];return F`<td class="settings-swatch-cell">
                                    ${x?F`<span class="settings-color-swatch" style=${"background:"+x} title=${x}></span>`:"—"}
                                </td>`})}
                        </tr>
                    `)}
                </tbody>
            </table>
        </div>
    `}var tY=O_(()=>{k0();$6()});var _V={};_1(_V,{__scheduledTasksSettingsTest:()=>pW,ScheduledTasksSection:()=>lW});function R4(_){if(!_)return"—";let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function eY(_){let $=Number(_);if(!Number.isFinite($))return"—";if($<1000)return`${Math.round($)}ms`;return`${($/1000).toFixed($<1e4?1:0)}s`}function z9(_){if(!_)return"—";if(_.schedule_type==="once")return`once · ${R4(_.schedule_value)}`;if(_.schedule_type==="interval")return`interval · ${_.schedule_value}`;if(_.schedule_type==="cron")return`cron · ${_.schedule_value}`;return`${_.schedule_type||"schedule"} · ${_.schedule_value||"—"}`}function J9(_){let $=_?.task_kind||"agent";return $==="internal"?"internal/protected":$}function A9(_){return(_?.task_kind||"agent")==="internal"}function mW(_){if(!_)return"";let $=String(_).replace(/\s+/g," ").trim();return $.length>180?`${$.slice(0,179)}…`:$}function k5({children:_,type:$="neutral"}){return F`<span class=${`settings-task-pill settings-task-pill-${$}`}>${_}</span>`}function cW({task:_}){let $=Array.isArray(_?.recent_run_logs)?_.recent_run_logs:[];if(!$.length)return F`<p class="settings-hint">No run logs recorded yet.</p>`;return F`
        <div class="settings-task-run-list">
            ${$.map((j)=>F`
                <div class=${`settings-task-run-row settings-task-run-${j.status||"unknown"}`}>
                    <div class="settings-task-run-meta">
                        <${k5} type=${j.status==="error"?"error":"success"}>${j.status||"unknown"}<//>
                        <span>${R4(j.run_at)}</span>
                        <span>${eY(j.duration_ms)}</span>
                    </div>
                    <div class="settings-task-run-summary">
                        ${j.error_summary||mW(j.error)||j.result_summary||j.result||"No summary"}
                    </div>
                </div>
            `)}
        </div>
    `}function hW({task:_,onAction:$}){if(!_)return F`<div class="settings-task-detail-empty">Select a task to inspect schedule, status, and run history.</div>`;let j=A9(_);return F`
        <div class="settings-task-detail">
            <div class="settings-task-detail-header">
                <div>
                    <h4>${_.summary||_.id}</h4>
                    <code>${_.id}</code>
                </div>
                <div class="settings-task-detail-actions">
                    ${_.status==="active"&&F`<button onClick=${()=>$("pause",_)}>Pause</button>`}
                    ${_.status==="paused"&&F`<button onClick=${()=>$("resume",_)}>Resume</button>`}
                    <button class="danger" onClick=${()=>$("delete",_)}>Delete</button>
                </div>
            </div>
            <div class="settings-task-detail-grid">
                <span>Status</span><strong>${_.status||"—"}</strong>
                <span>Kind</span><strong>${J9(_)}</strong>
                <span>Schedule</span><strong>${z9(_)}</strong>
                <span>Next run</span><strong>${R4(_.next_run)}</strong>
                <span>Last run</span><strong>${R4(_.last_run)}</strong>
                <span>Last result</span><strong>${_.latest_run_log?.status||_.last_result||"—"}</strong>
                <span>Chat</span><code>${_.chat_jid||"—"}</code>
                <span>Model</span><code>${_.model||"default"}</code>
                ${_.cwd&&F`<span>CWD</span><code>${_.cwd}</code>`}
                ${_.timeout_sec&&F`<span>Timeout</span><strong>${_.timeout_sec}s</strong>`}
                ${j&&F`<span>Protection</span><strong>Internal task actions require explicit confirmation.</strong>`}
            </div>
            <div class="settings-task-command-block">
                <strong>${_.task_kind==="shell"?"Command":"Prompt"}</strong>
                <pre>${_.command||_.prompt||_.command_summary||_.prompt_summary||_.summary||"—"}</pre>
            </div>
            <h4>Recent runs</h4>
            <${cW} task=${_} />
        </div>
    `}function lW({filter:_="",setStatus:$}){let[j,G]=C([]),[Z,X]=C({active:0,paused:0,completed:0}),[Y,V]=C("all"),[Q,q]=C(""),[B,K]=C(!0),[N,L]=C(null),[U,E]=C(null),[H,D]=C(null),[M,z]=C(!1),O=f(async(W={})=>{K(!0),L(null);try{let T=await H7({status:Y,chatJid:Q.trim()||void 0,limit:50,includeRunLogs:!0,runLogLimit:5});G(T.tasks||[]),X(T.counts||{active:0,paused:0,completed:0});let w=W.selectedId||U,A=(T.tasks||[]).find((P)=>P.id===w)||(T.tasks||[])[0]||null;E(A?.id||null),D(A)}catch(T){L(T?.message||"Failed to load scheduled tasks.")}finally{K(!1)}},[Y,Q,U]);g(()=>{O()},[O]);let x=String(_||"").trim().toLowerCase(),I=Y0(()=>{if(!x)return j;return j.filter((W)=>[W.id,W.chat_jid,W.status,W.task_kind,W.schedule_type,W.schedule_value,W.summary,W.prompt_summary,W.command_summary,W.latest_run_log?.error_summary].some((T)=>String(T||"").toLowerCase().includes(x)))},[j,x]),J=f((W)=>{E(W?.id||null),D(W||null)},[]),k=f(async(W,T)=>{if(!T||M)return;let w=A9(T),A=T.summary||T.command_summary||T.prompt_summary||T.id,P=W==="delete"?`Delete scheduled task ${T.id}?

${A}`:`${W==="pause"?"Pause":"Resume"} scheduled task ${T.id}?

${A}`;if(!window.confirm(P))return;if(w&&!window.confirm(`Task ${T.id} is internal/protected. Continue with ${W}?`))return;z(!0),$?.(`${W==="delete"?"Deleting":W==="pause"?"Pausing":"Resuming"} ${T.id}…`,"info");try{await E7(W,T.id,{allowInternal:w}),$?.(`Scheduled task ${T.id} ${W==="delete"?"deleted":W==="pause"?"paused":"resumed"}.`,"success"),await O({selectedId:W==="delete"?null:T.id})}catch(R){$?.(R?.message||`Failed to ${W} task.`,"error")}finally{z(!1)}},[M,O,$]);return F`
        <div class="settings-section settings-scheduled-tasks-section">
            <div class="settings-task-toolbar">
                <div class="settings-task-counts">
                    <${k5} type="active">Active ${Z.active||0}<//>
                    <${k5} type="paused">Paused ${Z.paused||0}<//>
                    <${k5} type="completed">Completed ${Z.completed||0}<//>
                </div>
                <div class="settings-task-filters">
                    <select value=${Y} onChange=${(W)=>V(W.target.value)}>
                        ${vW.map((W)=>F`<option value=${W}>${W==="all"?"All statuses":W}</option>`)}
                    </select>
                    <input type="text" placeholder="Filter chat JID…" value=${Q} onInput=${(W)=>q(W.target.value)} />
                    <button onClick=${()=>O()} disabled=${B}>Refresh</button>
                </div>
            </div>

            ${B&&F`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>Loading scheduled tasks…</span></div>`}
            ${N&&F`<div class="settings-error-state">${N}</div>`}
            ${!B&&!N&&j.length===0&&F`
                <div class="settings-empty-state">
                    <strong>No scheduled tasks found.</strong>
                    <p>Tasks created with reminders, `/j`, or the scheduler tool will appear here.</p>
                </div>
            `}
            ${!B&&!N&&j.length>0&&F`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label="Scheduled tasks">
                        ${I.map((W)=>F`
                            <button class=${`settings-task-row ${W.id===U?"active":""}`} onClick=${()=>J(W)}>
                                <span class="settings-task-row-main">
                                    <strong>${W.summary||W.id}</strong>
                                    <span>${z9(W)}</span>
                                </span>
                                <span class="settings-task-row-meta">
                                    <${k5} type=${W.status||"neutral"}>${W.status}<//>
                                    <${k5}>${J9(W)}<//>
                                </span>
                                <span class="settings-task-row-times">Next ${R4(W.next_run)} · Last ${R4(W.last_run)}${W.latest_run_log?.status?` · ${W.latest_run_log.status}`:""}</span>
                            </button>
                        `)}
                        ${I.length===0&&F`<p class="settings-hint">No tasks match “${_}”.</p>`}
                    </div>
                    <${hW} task=${H&&I.some((W)=>W.id===H.id)?H:I[0]} onAction=${k} />
                </div>
            `}
        </div>
    `}var vW,pW;var $V=O_(()=>{k0();M_();vW=["all","active","paused","completed"];pW={formatDateTime:R4,formatDuration:eY,labelForSchedule:z9,kindLabel:J9,isProtectedTask:A9}});function jV(_){return String(_||"").toLowerCase().replace(/^[@/]+/,"").replace(/\s+/g," ").trim()}function M5(_){return typeof _==="string"&&_.trim().length>0}function k9(_,...$){let j=jV(_);if(!j)return!0;let G=$.map((Z)=>jV(Z)).filter(Boolean);for(let Z of G)if(Z.startsWith(j)||Z.includes(j))return!0;return!1}function GV(_){if(!Array.isArray(_))return null;let $=[],j=new Set;for(let G of _){let Z=String(G||"").trim();if(!Z)continue;let X=Z.toLowerCase();if(j.has(X))continue;j.add(X),$.push(Z)}return $}function t$(_){let $=_&&typeof _==="object"?_:{};return{workspaceCommands:GV($.workspaceCommands),slashCommands:GV($.slashCommands)}}function ZV(_,$){if(!Array.isArray(_))return!0;return _.some((j)=>j.toLowerCase()===$.toLowerCase())}function rW(_){let $=Array.isArray(_?.commands)?_.commands:[],j=t$(_?.settings),G=String(_?.query||"");return $.filter((Z)=>ZV(j.workspaceCommands,Z.id)).filter((Z)=>k9(G,Z.label,Z.description,...Z.keywords||[])).map((Z)=>({key:`workspace:${Z.id}`,kind:"workspace",title:Z.label,subtitle:Z.description,searchText:`${Z.label} ${Z.description} ${(Z.keywords||[]).join(" ")}`.trim(),visualHint:Z.label.slice(0,1).toUpperCase()||"W",categoryLabel:"Workspace",actionHint:"Run",commandId:Z.id}))}function nW(_){let $=Array.isArray(_?.agents)?_.agents:[],j=String(_?.query||""),G=new Set;return $.filter((Z)=>{let X=M5(Z?.chat_jid)?Z.chat_jid.trim():"";if(!X||G.has(X))return!1;if(Z?.archived_at)return!1;return G.add(X),!0}).filter((Z)=>k9(j,`@${String(Z?.agent_name||"").trim()}`,Z?.session_name,Z?.chat_jid)).map((Z)=>{let X=M5(Z?.agent_name)?Z.agent_name.trim():String(Z?.chat_jid||"").replace(/^[^:]+:/,""),Y=M5(Z?.session_name)?Z.session_name.trim():"",V=String(Z?.chat_jid||"").trim();return{key:`agent:${V}`,kind:"agent",title:`@${X}`,subtitle:Y||V,searchText:`@${X} ${Y} ${V}`.trim(),visualHint:X.slice(0,1).toUpperCase()||"@",categoryLabel:"Agent",actionHint:"Open",chatJid:V}})}function dW(_){let $=Array.isArray(_?.slashCommands)?_.slashCommands:[],j=t$(_?.settings),G=String(_?.query||""),Z=new Set;return $.filter((X)=>{let Y=M5(X?.name)?X.name.trim():"";if(!Y||Z.has(Y.toLowerCase()))return!1;return Z.add(Y.toLowerCase()),ZV(j.slashCommands,Y)}).filter((X)=>k9(G,X?.name,X?.description,X?.source)).map((X)=>{let Y=String(X?.name||"").trim(),V=M5(X?.description)?X.description.trim():"slash command",Q=M5(X?.source)?X.source.trim():"";return{key:`slash:${Y}`,kind:"slash",title:Y,subtitle:V,searchText:`${Y} ${V} ${String(X?.source||"")}`.trim(),visualHint:"/",categoryLabel:Q||"Slash",actionHint:"Insert",commandName:Y}})}function XV(_){return[...nW({agents:_?.agents,query:_?.query}),...rW({commands:_?.workspaceCommands,settings:_?.settings,query:_?.query}),...dW({slashCommands:_?.slashCommands,settings:_?.settings,query:_?.query})]}var a$;var M9=O_(()=>{a$=[{id:"toggle-workspace",label:"Toggle workspace",description:"Show or hide the workspace sidebar.",keywords:["workspace","sidebar","explorer"]},{id:"open-explorer",label:"Open explorer",description:"Open the workspace explorer sidebar.",keywords:["workspace","explorer","sidebar"]},{id:"toggle-chat-only",label:"Chat-only mode",description:"Toggle chat-only mode.",keywords:["chat","mode","layout"]},{id:"open-terminal-tab",label:"Open terminal in tab",description:"Open the terminal pane in a workspace tab.",keywords:["terminal","shell","tab"]},{id:"open-vnc-tab",label:"Open VNC in tab",description:"Open the VNC viewer in a workspace tab.",keywords:["vnc","remote","desktop","tab"]},{id:"toggle-terminal-dock",label:"Toggle terminal dock",description:"Show or hide the terminal dock.",keywords:["terminal","dock","shell"]},{id:"open-settings",label:"Settings",description:"Open the settings dialog.",keywords:["settings","preferences","config"]}]});var qV={};_1(qV,{QuickActionsSection:()=>oW});function YV(_,...$){let j=String(_||"").trim().toLowerCase();if(!j)return!0;return $.some((G)=>String(G||"").toLowerCase().includes(j))}function VV(_){if(!Array.isArray(_))return null;return new Set(_.map(($)=>String($||"").trim().toLowerCase()).filter(Boolean))}function oW({filter:_="",setStatus:$,mergeSettingsData:j}){let[G,Z]=C(()=>a$.map((I)=>I.id)),[X,Y]=C([]),[V,Q]=C([]),[q,B]=C(!0),[K,N]=C(!1),L=f(async()=>{B(!0);try{let[I,J]=await Promise.all([K6(),Q6("web:default").catch(()=>({commands:[]}))]),k=t$(I?.settings),W=Array.isArray(J?.commands)?J.commands:[];Q(W),Z(Array.isArray(k.workspaceCommands)?k.workspaceCommands:a$.map((T)=>T.id)),Y(Array.isArray(k.slashCommands)?k.slashCommands:W.map((T)=>String(T?.name||"").trim()).filter(Boolean))}catch(I){$?.(String(I?.message||I),"error")}finally{B(!1)}},[$]);g(()=>{L()},[L]);let U=Y0(()=>VV(G),[G]),E=Y0(()=>VV(X),[X]),H=Y0(()=>a$.filter((I)=>YV(_,I.label,I.description,...I.keywords||[])),[_]),D=Y0(()=>V.filter((I)=>YV(_,I?.name,I?.description,I?.source)),[V,_]),M=f((I)=>{Z((J)=>{let k=new Set((Array.isArray(J)?J:[]).map((W)=>String(W||"").trim()).filter(Boolean));if(k.has(I))k.delete(I);else k.add(I);return a$.map((W)=>W.id).filter((W)=>k.has(W))})},[]),z=f((I)=>{Y((J)=>{let k=new Set((Array.isArray(J)?J:[]).map((W)=>String(W||"").trim()).filter(Boolean));if(k.has(I))k.delete(I);else k.add(I);return V.map((W)=>String(W?.name||"").trim()).filter((W)=>W&&k.has(W))})},[V]),O=f(()=>{Z(a$.map((I)=>I.id)),Y(V.map((I)=>String(I?.name||"").trim()).filter(Boolean))},[V]),x=f(async()=>{if(K)return;N(!0),$?.("Saving quick actions…","info");try{let I=await T7({workspaceCommands:G,slashCommands:X}),J=t$(I?.settings);j?.({quickActions:J}),window.dispatchEvent(new CustomEvent("piclaw:quick-actions-settings-updated",{detail:{settings:J}})),$?.("Quick Actions saved.","success")}catch(I){$?.(String(I?.message||I),"error")}finally{N(!1)}},[j,K,$,X,G]);if(q)return F`<div class="settings-loading">Loading…</div>`;return F`
        <div class="settings-section">
            <h3>Timeline Quick Actions</h3>
            <p class="settings-hint">
                Choose which actions appear in the timeline typeahead. Agents are always pinned first, then workspace commands, then slash commands.
            </p>

            <div class="settings-row" style="align-items:center; gap:10px; margin-bottom:12px;">
                <button class="settings-addon-btn" onClick=${O} disabled=${K}>Enable all</button>
                <button class="settings-addon-btn settings-addon-btn-install" onClick=${x} disabled=${K}>
                    ${K?"Saving…":"Save & apply"}
                </button>
            </div>

            <h3 style="margin-top:8px;">Workspace commands</h3>
            <div class="settings-subsection-list">
                ${H.map((I)=>{let J=U?U.has(I.id.toLowerCase()):!0;return F`
                        <label class="settings-checkbox-row" key=${I.id}>
                            <input type="checkbox" checked=${J} onChange=${()=>M(I.id)} />
                            <div>
                                <div>${I.label}</div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${I.description}</div>
                            </div>
                        </label>
                    `})}
                ${H.length===0&&F`<div class="settings-hint">No workspace commands match this filter.</div>`}
            </div>

            <h3 style="margin-top:20px;">Slash commands</h3>
            <div class="settings-subsection-list">
                ${D.map((I)=>{let J=String(I?.name||"").trim(),k=E?E.has(J.toLowerCase()):!0;return F`
                        <label class="settings-checkbox-row" key=${J}>
                            <input type="checkbox" checked=${k} onChange=${()=>z(J)} />
                            <div>
                                <div><code>${J}</code></div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${I?.description||"slash command"}</div>
                            </div>
                        </label>
                    `})}
                ${D.length===0&&F`<div class="settings-hint">No slash commands match this filter.</div>`}
            </div>
        </div>
    `}var QV=O_(()=>{k0();M_();M9()});var KV={};_1(KV,{KeychainSection:()=>aW});function iW(_){if(!_)return"—";try{return new Date(_).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return _}}function aW({filter:_=""}){let[$,j]=C([]),[G,Z]=C(!0),[X,Y]=C(null),[V,Q]=C(!1),[q,B]=C(""),[K,N]=C(""),[L,U]=C(""),[E,H]=C(""),[D,M]=C(""),[z,O]=C("secret"),[x,I]=C(!1),[J,k]=C({}),[W,T]=C(null),[w,A]=C(null),[P,R]=C(null),b=u(null),c=u(null),r=u(null),e=f(async()=>{Z(!0),Y(null);try{let X0=await(await fetch("/agent/keychain")).json();if(X0?.ok)j(X0.entries||[]);else Y(X0?.error||"Failed to load keychain.")}catch(a){Y("Failed to load keychain.")}finally{Z(!1)}},[]);g(()=>{e()},[e]);let m=f(async()=>{let a=q.trim(),X0=K;if(!a||!X0)return;I(!0);try{let P0=await(await fetch("/agent/keychain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a,secret:X0,type:z,username:L.trim()||void 0,userNote:E,agentNote:D})})).json();if(P0?.ok)B(""),N(""),U(""),H(""),M(""),O("secret"),Q(!1),await e();else Y(P0?.error||"Failed to add entry.")}catch{Y("Failed to add entry.")}finally{I(!1)}},[q,K,L,E,D,z,e]),_0=f(async(a)=>{try{let W0=await(await fetch("/agent/keychain",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a})})).json();if(W0?.ok)A(null),R((P0)=>P0?.name===a?null:P0),await e();else Y(W0?.error||"Failed to delete entry.")}catch{Y("Failed to delete entry.")}},[e]),E0=f(async(a)=>{let X0=a?.name;if(!X0)return;let W0=J[X0]||{},P0=Object.prototype.hasOwnProperty.call(W0,"userNote")?W0.userNote:a.userNote||"",l0=Object.prototype.hasOwnProperty.call(W0,"agentNote")?W0.agentNote:a.agentNote||"";T(X0);try{let G_=await(await fetch("/agent/keychain/notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:X0,userNote:P0,agentNote:l0})})).json();if(G_?.ok)k((h0)=>{let s0={...h0||{}};return delete s0[X0],s0}),await e();else Y(G_?.error||"Failed to save notes.")}catch{Y("Failed to save notes.")}finally{T(null)}},[J,e]),Z0=f((a,X0,W0)=>{k((P0)=>({...P0||{},[a]:{...(P0||{})[a]||{},[X0]:W0}}))},[]),j0=f(async(a,X0,W0)=>{try{let l0=await(await fetch("/agent/keychain/reveal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a,master_password:X0||void 0,totp_code:W0||void 0})})).json();if(l0?.ok)R({name:a,phase:"revealed",secret:l0.secret,username:l0.username,masterPassword:X0});else if(l0?.needs_master_password)R((u0)=>({name:a,phase:"password",masterPassword:"",error:u0?.name===a&&u0?.masterPassword?l0.error:null})),requestAnimationFrame(()=>c.current?.focus());else if(l0?.needs_totp)R((u0)=>({name:a,phase:"totp",masterPassword:X0,totpCode:"",error:u0?.name===a&&u0?.phase==="totp"&&u0?.totpCode?l0.error:null})),requestAnimationFrame(()=>r.current?.focus());else R({name:a,phase:"error",error:l0?.error||"Failed to reveal."})}catch{R({name:a,phase:"error",error:"Failed to reveal."})}},[]),V0=f((a)=>{if(P?.name===a&&P?.phase==="revealed"){R(null);return}j0(a,null,null)},[P,j0]),N0=f((a)=>{let X0=P?.masterPassword||"";if(!X0)return;j0(a,X0,null)},[P,j0]),h=f((a)=>{let X0=P?.totpCode||"";if(X0.length<6)return;j0(a,P?.masterPassword,X0)},[P,j0]),$0=f(async(a)=>{try{await navigator.clipboard.writeText(a)}catch{let X0=document.createElement("textarea");X0.value=a,X0.style.position="fixed",X0.style.opacity="0",document.body.appendChild(X0),X0.select(),document.execCommand("copy"),document.body.removeChild(X0)}},[]);g(()=>{if(V)requestAnimationFrame(()=>b.current?.focus())},[V]);let Q0=_.toLowerCase(),O0=Y0(()=>{if(!Q0)return $;return $.filter((a)=>a.name.toLowerCase().includes(Q0)||(a.type||"").toLowerCase().includes(Q0)||(a.envVar||"").toLowerCase().includes(Q0)||(a.userNote||"").toLowerCase().includes(Q0)||(a.agentNote||"").toLowerCase().includes(Q0))},[$,Q0]);if(G)return F`<div class="settings-section"><div class="settings-loading">Loading keychain…</div></div>`;return F`
        <div class="settings-section">
            ${X&&F`
                <div class="settings-keychain-error" role="alert">
                    ${X}
                    <button class="settings-keychain-dismiss" onClick=${()=>Y(null)}>✕</button>
                </div>
            `}
            <div class="settings-keychain-toolbar" style="display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
                <span class="settings-hint" style="margin:0; display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <span>${O0.length} entr${O0.length===1?"y":"ies"}${Q0?` matching "${_}"`:""}, encrypted at rest.</span>
                    <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>Click</span>
                        <span aria-hidden="true" style="display:inline-flex; width:18px; height:18px; align-items:center; justify-content:center; border-radius:999px; border:1px solid var(--border-color, rgba(120,120,120,.22)); background:var(--panel-bg, rgba(255,255,255,.04));">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        </span>
                        <span>to reveal.</span>
                    </span>
                </span>
                <button class="settings-keychain-add-btn" onClick=${()=>Q(!V)}>
                    ${V?"Cancel":"+ Add entry"}
                </button>
            </div>

            ${V&&F`
                <div class="settings-keychain-add-form">
                    <div class="settings-keychain-add-row">
                        <input ref=${b} type="text" placeholder="Entry name (e.g. github/my-token)"
                            value=${q} onInput=${(a)=>B(a.target.value)}
                            class="settings-keychain-input" />
                        <select value=${z} onChange=${(a)=>O(a.target.value)}
                            class="settings-keychain-select">
                            ${sW.map((a)=>F`<option value=${a}>${a}</option>`)}
                        </select>
                    </div>
                    <div class="settings-keychain-add-row">
                        <input type="password" placeholder="Secret value"
                            value=${K} onInput=${(a)=>N(a.target.value)}
                            class="settings-keychain-input settings-keychain-secret" />
                        <input type="text" placeholder="Username (optional)"
                            value=${L} onInput=${(a)=>U(a.target.value)}
                            class="settings-keychain-input" style="max-width:200px" />
                        <button class="settings-keychain-save-btn" onClick=${m}
                            disabled=${x||!q.trim()||!K}>
                            ${x?"Saving…":"Save"}
                        </button>
                    </div>
                    <div class="settings-keychain-add-row" style="align-items:stretch">
                        <textarea placeholder="User note (visible in this UI only)"
                            value=${E} onInput=${(a)=>H(a.target.value)}
                            class="settings-keychain-input" rows="2" style="resize:vertical; min-height:56px"></textarea>
                        <textarea placeholder="Agent note (safe to expose to agents)"
                            value=${D} onInput=${(a)=>M(a.target.value)}
                            class="settings-keychain-input" rows="2" style="resize:vertical; min-height:56px"></textarea>
                    </div>
                </div>
            `}

            <div class="settings-keychain-table-wrap">
                <table class="settings-table settings-keychain-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Env var</th>
                            <th>Updated</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${O0.length===0&&F`
                            <tr><td colspan="5" class="settings-keychain-empty">
                                ${Q0?"No entries match the filter.":"No keychain entries."}
                            </td></tr>
                        `}
                        ${O0.map((a)=>{let X0=P?.name===a.name?P:null,W0=X0?.phase==="revealed",P0=X0?.phase==="password",l0=X0?.phase==="totp",u0=X0?.phase==="error",G_=J[a.name]||{},h0=Object.prototype.hasOwnProperty.call(G_,"userNote")?G_.userNote:a.userNote||"",s0=Object.prototype.hasOwnProperty.call(G_,"agentNote")?G_.agentNote:a.agentNote||"",R0=h0!==(a.userNote||"")||s0!==(a.agentNote||""),o0=W===a.name;return F`
                            <tr class="settings-keychain-row" key=${a.name}>
                                <td class="settings-keychain-name">${a.name}</td>
                                <td><span class="settings-keychain-type-badge">${a.type}</span></td>
                                <td class="settings-keychain-env">${a.envVar?F`<code>$${a.envVar}</code>`:"—"}</td>
                                <td class="settings-keychain-date">${iW(a.updatedAt)}</td>
                                <td class="settings-keychain-actions">
                                    <button class=${`settings-keychain-reveal-btn${W0?" active":""}`}
                                        onClick=${()=>V0(a.name)}
                                        title=${W0?"Hide secret":"Reveal secret"}>
                                        ${W0?F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                                    </button>
                                    ${w===a.name?F`
                                            <span class="settings-keychain-confirm">Delete?
                                                <button class="settings-keychain-confirm-yes" onClick=${()=>_0(a.name)}>Yes</button>
                                                <button class="settings-keychain-confirm-no" onClick=${()=>A(null)}>No</button>
                                            </span>
                                        `:F`<button class="settings-keychain-delete-btn" onClick=${()=>A(a.name)} title="Delete">🗑</button>`}
                                </td>
                            </tr>
                            <tr class="settings-keychain-notes-row" key=${a.name+"-notes"}>
                                <td colspan="5">
                                    <div style="display:grid; grid-template-columns:1fr 1fr auto; gap:8px; align-items:start; padding:8px 0 10px 0;">
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">User note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Human/UI note only"
                                                value=${h0}
                                                onInput=${(v0)=>Z0(a.name,"userNote",v0.target.value)}></textarea>
                                        </label>
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">Agent-readable note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Safe guidance for agents"
                                                value=${s0}
                                                onInput=${(v0)=>Z0(a.name,"agentNote",v0.target.value)}></textarea>
                                        </label>
                                        <button class="settings-keychain-save-btn" style="margin-top:20px" disabled=${!R0||o0} onClick=${()=>E0(a)}>
                                            ${o0?"Saving…":"Save notes"}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            ${P0&&F`
                                <tr class="settings-keychain-prompt-row" key=${a.name+"-pw"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">Master password:</span>
                                            <input ref=${c} type="password" autocomplete="off"
                                                placeholder="Enter keychain master password"
                                                class="settings-keychain-prompt-input"
                                                value=${X0?.masterPassword||""}
                                                onInput=${(v0)=>R((t0)=>({...t0,masterPassword:v0.target.value}))}
                                                onKeyDown=${(v0)=>{if(v0.key==="Enter")N0(a.name);if(v0.key==="Escape")R(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>N0(a.name)}
                                                disabled=${!X0?.masterPassword}>Unlock</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>R(null)}>Cancel</button>
                                            ${X0?.error&&F`<span class="settings-keychain-prompt-error">${X0.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${l0&&F`
                                <tr class="settings-keychain-prompt-row" key=${a.name+"-totp"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">TOTP code:</span>
                                            <input ref=${r} type="text" inputmode="numeric" autocomplete="one-time-code"
                                                maxlength="6" placeholder="000000"
                                                class="settings-keychain-prompt-input" style="width:90px;text-align:center;letter-spacing:0.15em"
                                                value=${X0?.totpCode||""}
                                                onInput=${(v0)=>R((t0)=>({...t0,totpCode:v0.target.value.replace(/\\D/g,"").slice(0,6)}))}
                                                onKeyDown=${(v0)=>{if(v0.key==="Enter")h(a.name);if(v0.key==="Escape")R(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>h(a.name)}
                                                disabled=${(X0?.totpCode||"").length<6}>Verify</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>R(null)}>Cancel</button>
                                            ${X0?.error&&F`<span class="settings-keychain-prompt-error">${X0.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${W0&&F`
                                <tr class="settings-keychain-reveal-row" key=${a.name+"-reveal"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel">
                                            ${X0.username&&F`
                                                <div class="settings-keychain-reveal-field">
                                                    <span class="settings-keychain-reveal-label">Username</span>
                                                    <code class="settings-keychain-reveal-value">${X0.username}</code>
                                                    <button class="settings-keychain-copy-btn" onClick=${()=>$0(X0.username)} title="Copy username">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                    </button>
                                                </div>
                                            `}
                                            <div class="settings-keychain-reveal-field">
                                                <span class="settings-keychain-reveal-label">Secret</span>
                                                <code class="settings-keychain-reveal-value">${X0.secret}</code>
                                                <button class="settings-keychain-copy-btn" onClick=${()=>$0(X0.secret)} title="Copy secret">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${u0&&F`
                                <tr class="settings-keychain-reveal-row" key=${a.name+"-error"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel" style="color: var(--error-color, #e55)">${X0.error}</div>
                                    </td>
                                </tr>
                            `}
                        `})}
                    </tbody>
                </table>
            </div>
        </div>
    `}var sW;var BV=O_(()=>{k0();sW=["secret","token","password","basic"]});var LV={};_1(LV,{ToolsSection:()=>jO});function jO({toolsets:_,filter:$="",settingsData:j,mergeSettingsData:G}){let Z=_||[],[X,Y]=C(()=>{let N={};for(let L of Z)N[L.name]=!0;return N}),V=f((N)=>{Y((L)=>({...L,[N]:!L[N]}))},[]),Q=j?.searchMatchMode||"or",q=f(async()=>{let N=Q==="or"?"and":"or";try{let U=await(await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:N})})).json().catch(()=>({}));if(U?.ok&&U?.settings)G?.(U.settings)}catch(L){console.warn("[settings/tools] Failed to save search match mode.",L)}},[Q,G]),B=$.toLowerCase(),K=Y0(()=>{if(!B)return Z;return Z.map((N)=>{let L=N.tools.filter((U)=>U.name.toLowerCase().includes(B)||N.name.toLowerCase().includes(B)||(U.summary||"").toLowerCase().includes(B));return L.length>0?{...N,tools:L}:null}).filter(Boolean)},[Z,B]);if(Z.length===0)return F`<div class="settings-section"><p class="settings-hint">Tool data not available.</p></div>`;return F`
        <div class="settings-section">
            <div class="settings-search-options">
                <h4 style="margin:0 0 8px 0">Search</h4>
                <div class="settings-row">
                    <label>Match mode</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <input type="checkbox" checked=${Q==="and"} onChange=${q} />
                        <span class="settings-hint" style="margin:0">
                            ${Q==="or"?"Any keyword (OR) — results match at least one search term":"All keywords (AND) — results must match every search term"}
                        </span>
                    </div>
                </div>
            </div>
            ${K.map((N)=>{let L=X[N.name]!==!1;return F`
                <div class="settings-toolset">
                    <div class="settings-toolset-header">
                        <label class="settings-toolset-toggle">
                            <input type="checkbox" checked=${L} onChange=${()=>V(N.name)} />
                            <span class="settings-toolset-icon">${tW[N.name]||$O}</span>
                            <strong>${N.name}</strong>
                        </label>
                        <span class="settings-hint" style="margin:0">${N.description}</span>
                    </div>
                    ${L&&F`<div class="settings-tool-list">${N.tools.map((U)=>F`
                        <div class="settings-tool-row">
                            <input type="checkbox" checked disabled />
                            <span class="settings-tool-name">${U.name}</span>
                            <span class="settings-tool-kind" title=${U.kind}>${_O[U.kind]||"?"}</span>
                            ${U.summary&&F`<span class="settings-tool-summary">${U.summary}</span>`}
                            <span class="settings-tool-source">${eW[U.name]||N.name}</span>
                        </div>
                    `)}</div>`}
                </div>
            `})}
            ${K.length===0&&F`<p class="settings-hint">No tools match "${$}"</p>`}
            <p class="settings-hint">Tool activation is managed by the agent runtime. Group checkboxes collapse/expand; individual tools use <code>activate_tools</code>.</p>
        </div>
    `}var tW,eW,_O,$O;var NV=O_(()=>{k0();tW={core:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M7.5 10l2.5 2-2.5 2"/><path d="M12.5 15H16"/></svg>`,discovery:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,attachments:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`,"model-control":F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M9 15c.83.67 2 1 3 1s2.17-.33 3-1"/></svg>`,data:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,workspace:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,automation:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,remote:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,browser:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,ui:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,experiments:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v7l4.6 7.7A1 1 0 0 1 18.7 19H5.3a1 1 0 0 1-.9-1.3L9 10z"/><line x1="9" y1="3" x2="15" y2="3"/></svg>`,lifecycle:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`},eW={read:"pi-core",write:"pi-core",edit:"pi-core",bash:"pi-core",powershell:"pi-core",find:"pi-core",grep:"pi-core",ls:"pi-core",list_tools:"internal-tools",activate_tools:"tool-activation",reset_active_tools:"tool-activation",list_scripts:"runtime-scripts",attach_file:"file-attachments",read_attachment:"file-attachments",export_attachment:"file-attachments",get_model_state:"model-control",list_models:"model-control",switch_model:"model-control",switch_thinking:"model-control",messages:"messages-crud",introspect_sql:"sql-introspect",keychain:"keychain-tools",search_workspace:"workspace-search",refresh_workspace_index:"workspace-search",open_office_viewer:"office-viewer",office_read:"office-viewer",office_write:"office-viewer",open_workspace_file:"open-workspace-file",image_process:"image-processing",schedule_task:"scheduled-tasks",scheduled_tasks:"scheduled-tasks",bun_run:"bun-runner",exec_batch:"exec-batch",search_tool_output:"search-tool-output",ssh:"ssh",proxmox:"proxmox",portainer:"portainer",mcp:"mcp",cdp_browser:"cdp-browser",send_adaptive_card:"send-adaptive-card",send_dashboard_widget:"send-dashboard-widget",start_autoresearch:"autoresearch",stop_autoresearch:"autoresearch",autoresearch_status:"autoresearch",exit_process:"exit-process",env:"env-tools"},_O={"read-only":"\uD83D\uDD0D",mutating:"✏️",mixed:"\uD83D\uDD04"},$O=F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`});var FV={};_1(FV,{AddonsSection:()=>GO});function GO({setStatus:_,filter:$=""}){let[j,G]=C(null),[Z,X]=C(!0),[Y,V]=C(null),[Q,q]=C(!1),[B,K]=C({runtime:"",windowsNative:!1}),[N,L]=C([]),[U,E]=C([]);function H(){let W=new URLSearchParams;try{let w=(localStorage.getItem("piclaw_addons_catalog_url")||"").trim(),A=(localStorage.getItem("piclaw_addons_catalog_urls")||"").split(/\r?\n/).map((R)=>R.trim()).filter(Boolean),P=localStorage.getItem("piclaw_addons_repo_url");if(w)W.append("catalog_url",w);for(let R of A)W.append("catalog_url",R);if(P)W.set("repo_url",P)}catch(w){}let T=W.toString();return T?`?${T}`:""}let D=f(async()=>{try{let[W,T]=await Promise.all([fetch(`/agent/addons${H()}`),fetch("/agent/settings-data")]),w=await W.json();if(w.error)throw Error(w.error);G(w.addons||[]),L(w.sources||[]),E(w.failed_sources||[]);let A=await T.json().catch(()=>({})),P=typeof A?.runtimePlatform==="string"?A.runtimePlatform:"";K({runtime:P,windowsNative:P==="win32"})}catch(W){G(null),_?.(String(W.message||W),"error")}finally{X(!1)}},[_]);g(()=>{D()},[]);let M=f(async(W)=>{if(Y)return;V({slug:W,action:"install"}),_?.(`Installing ${W}…`,"info");try{let w=await(await fetch(`/agent/addons/install${H()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:W})})).json();if(w.error){_?.(w.error,"error");return}q(!0);let A=[w.message,w.warning].filter(Boolean).join(" ");_?.(A||"Add-on installed.","success"),await D()}catch(T){_?.(String(T.message||T),"error")}finally{V(null)}},[Y,D,_]),z=f(async(W)=>{if(Y)return;V({slug:W,action:"remove"}),_?.(`Removing ${W}…`,"info");try{let w=await(await fetch(`/agent/addons/uninstall${H()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:W})})).json();if(w.error){_?.(w.error,"error");return}q(!0);let A=[w.message,w.warning].filter(Boolean).join(" ");_?.(A||"Add-on removed.","success"),await D()}catch(T){_?.(String(T.message||T),"error")}finally{V(null)}},[Y,D,_]),O=f(async()=>{if(Y)return;V({slug:null,action:"restart"}),_?.("Restarting piclaw…","info");try{let T=await(await fetch("/agent/addons/restart",{method:"POST"})).json();if(T.error){_?.(T.error,"error"),V(null);return}_?.(T.message||"Restarting piclaw…","success"),q(!1),(async(A=30,P=2000)=>{for(let R=0;R<A;R++){await new Promise((b)=>setTimeout(b,P));try{if((await fetch("/agent/addons",{signal:AbortSignal.timeout(3000)})).ok){await D(),V(null),_?.("Restart complete — add-ons refreshed.","success");return}}catch(b){}}V(null),_?.("Backend did not return in time. Reload the page manually.","warning")})()}catch(W){_?.(String(W.message||W),"error"),V(null)}},[Y,_,D]);if(Z)return F`<div class="settings-loading">Fetching add-ons\u2026</div>`;if(!j)return F`<div class="settings-section"><p class="settings-hint">Could not load add-ons.</p></div>`;let x=$.toLowerCase(),I=x?j.filter((W)=>W.slug.toLowerCase().includes(x)||(W.description||"").toLowerCase().includes(x)||(W.tags||[]).some((T)=>T.toLowerCase().includes(x))):j,J=Y?.slug||null,k=Y?Y.action==="remove"?`Removing ${Y.slug}…`:Y.action==="restart"?"Restarting piclaw…":`Installing ${Y.slug}…`:"";return F`
        <div class=${`settings-section settings-addon-panel${Y?" busy":""}`} aria-busy=${Y?"true":"false"}>
            <div class="settings-addon-toolbar">
                <div>
                    <p class="settings-hint">
                        ${N.length<=1?F`Catalog from <a href="https://github.com/rcarmo/piclaw-addons" target="_blank">rcarmo/piclaw-addons</a>.`:F`${N.length} catalog sources merged.`}
                        ${" "}Package-first install via Bun; restart required after install/uninstall.
                    </p>
                    ${U.length>0&&F`
                        <div class="settings-addon-error" role="alert">
                            Failed to fetch ${U.length} catalog source${U.length>1?"s":""}:
                            ${U.map((W)=>F` <code style="font-size:0.82em;word-break:break-all">${W}</code>`)}
                        </div>
                    `}
                    ${N.length>1&&F`
                        <details class="settings-hint" style="margin-top:4px">
                            <summary style="cursor:pointer">Active catalog sources (${N.length})</summary>
                            <ul style="margin:4px 0 0 16px;font-size:0.82em">
                                ${N.map((W)=>F`<li style="word-break:break-all"><code>${W}</code></li>`)}
                            </ul>
                        </details>
                    `}
                    ${B.windowsNative&&F`
                        <div class="settings-addon-error" role="alert">
                            Native Windows add-on installs are higher risk: Bun package installs, symlink cleanup, locked files, and restart timing can all be less predictable than in Linux/WSL. Prefer WSL or a container when possible.
                        </div>
                    `}
                </div>
            </div>
            ${Y&&F`
                <div class="settings-addon-panel-overlay" role="status" aria-live="polite" aria-label=${k}>
                    <div class="settings-addon-panel-overlay-card">
                        <div class="settings-spinner"></div>
                        <span>${k}</span>
                    </div>
                </div>
            `}
            <div class="settings-addon-list">
                ${I.map((W)=>{let T=(W.skills||[]).length>0,w=W.type==="extension",A=T&&w?"extension + skill":T?"skill":"extension",P=T&&!w?"settings-tag-skill":"",R=typeof W.homepage==="string"&&W.homepage.trim()?W.homepage.trim():"";return F`
                    <div class=${`settings-addon-card${W.installed?" installed":""}`}>
                        <div class="settings-addon-card-header">
                            ${R?F`<a class="settings-addon-name-link" href=${R} target="_blank" rel="noopener noreferrer">${W.slug}</a>`:F`<strong>${W.slug}</strong>`}
                            <span class=${`settings-tag settings-tag-type ${P}`}>${A}</span>
                            <span class="settings-addon-version">${W.installed?W.installedVersion||"?":W.version||""}</span>
                            ${W.installKind&&F`<span class="settings-tag">${W.installKind}</span>`}
                            ${W.hasUpdate&&F`<span class="settings-tag settings-tag-skill">\u2191 ${W.version}</span>`}
                            <div class="settings-addon-actions">
                                ${W.installed?F`
                                    ${W.hasUpdate&&F`<button class="settings-addon-btn settings-addon-btn-upgrade" disabled=${Boolean(Y)} onClick=${()=>M(W.slug)}>${J===W.slug?"…":"Update"}</button>`}
                                    <button class="settings-addon-btn settings-addon-btn-remove" disabled=${Boolean(Y)} onClick=${()=>z(W.slug)}>${J===W.slug?"…":"Remove"}</button>
                                `:F`
                                    <button class="settings-addon-btn settings-addon-btn-install" disabled=${Boolean(Y)} onClick=${()=>M(W.slug)}>${J===W.slug?"…":"Install"}</button>
                                `}
                            </div>
                        </div>
                        <div class="settings-addon-card-body">${W.description}</div>
                        <div class="settings-addon-card-footer">
                            <div class="settings-addon-tags">${(W.tags||[]).map((b)=>F`<span class="settings-tag">${b}</span>`)}${(W.skills||[]).map((b)=>F`<span class="settings-tag settings-tag-skill">\ud83d\udcdd ${b}</span>`)}</div>
                        </div>
                    </div>
                `})}
                ${I.length===0&&F`<p class="settings-hint">No add-ons match "${$}"</p>`}
            </div>
            ${Q&&F`
                <div class="settings-addon-restart-notice" role="status" aria-live="polite">
                    <span>Extension changes are installed but inactive until piclaw restarts.</span>
                    <button class="settings-addon-btn settings-addon-btn-restart-now" type="button" disabled=${Boolean(Y)} onClick=${O}>Restart Now</button>
                </div>
            `}
        </div>
    `}var UV=O_(()=>{k0()});var KO={};function T9(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function a2(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function ZO(_,$){try{return localStorage.getItem(_)||$}catch{return $}}function XO(_,$){try{localStorage.setItem(_,$)}catch(j){}}function YO(_,$,j,G){try{return z$(localStorage.getItem(_),{fallback:$,min:j,max:G})}catch{return z$($,{fallback:$,min:j,max:G})}}function VO(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function qO(){let[_,$]=C(()=>T9("piclaw_vim_mode",!1)),[j,G]=C(()=>T9("piclaw_show_whitespace",!0)),[Z,X]=C(()=>T9("piclaw_md_live_preview",!0)),[Y,V]=C(()=>YO("piclaw_editor_font_size",13,10,24)),[Q,q]=C(()=>ZO("piclaw_editor_font_family","")),B=f((K,N,L)=>{let U=!N;L(U),a2(K,U)},[]);return F`
        <div class="settings-section">
            <h3>Editor</h3>
            <div class="settings-row">
                <label>Vim mode</label>
                <input type="checkbox" checked=${_}
                    onChange=${()=>{let K=!_;$(K),a2("piclaw_vim_mode",K)}} />
            </div>
            <div class="settings-row">
                <label>Show whitespace</label>
                <input type="checkbox" checked=${j}
                    onChange=${()=>{let K=!j;G(K),a2("piclaw_show_whitespace",K)}} />
            </div>
            <div class="settings-row">
                <label>Markdown live preview</label>
                <input type="checkbox" checked=${Z}
                    onChange=${()=>{let K=!Z;X(K),a2("piclaw_md_live_preview",K)}} />
            </div>
            <div class="settings-row">
                <label>Font size (px)</label>
                <${v_}
                    label="editor font size"
                    value=${Y}
                    min=${10}
                    max=${24}
                    fallback=${13}
                    width="70px"
                    onChange=${(K)=>{V(K),VO("piclaw_editor_font_size",K)}}
                />
            </div>
            <div class="settings-row">
                <label>Font family</label>
                <input type="text" value=${Q}
                    onInput=${(K)=>{let N=K.target.value;q(N),XO("piclaw_editor_font_family",N)}}
                    placeholder="monospace (default)" />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Editor changes are stored in local browser storage and take effect when you next open or reload a file tab.</p>
        </div>
    `}var QO;var DV=O_(()=>{k0();z5();P4();QO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;o$({id:"editor",label:"Editor",icon:QO,component:qO,order:150})});var UO={};function HV(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function EV(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function BO(_,$,j,G){try{return z$(localStorage.getItem(_),{fallback:$,min:j,max:G})}catch{return z$($,{fallback:$,min:j,max:G})}}function LO(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function NO(){let[_,$]=C(()=>HV("piclaw_mindmap_auto_expand",!0)),[j,G]=C(()=>BO("piclaw_mindmap_node_spacing",40,20,100)),[Z,X]=C(()=>HV("piclaw_mindmap_animate",!0));return F`
        <div class="settings-section">
            <h3>Mind Map</h3>
            <div class="settings-row">
                <label>Auto-expand nodes</label>
                <input type="checkbox" checked=${_}
                    onChange=${()=>{let Y=!_;$(Y),EV("piclaw_mindmap_auto_expand",Y)}} />
            </div>
            <div class="settings-row">
                <label>Node spacing (px)</label>
                <${v_}
                    label="node spacing"
                    value=${j}
                    min=${20}
                    max=${100}
                    fallback=${40}
                    width="70px"
                    onChange=${(Y)=>{G(Y),LO("piclaw_mindmap_node_spacing",Y)}}
                />
            </div>
            <div class="settings-row">
                <label>Animate transitions</label>
                <input type="checkbox" checked=${Z}
                    onChange=${()=>{let Y=!Z;X(Y),EV("piclaw_mindmap_animate",Y)}} />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Opens <code>.mindmap.yaml</code> files. Changes take effect on the next map open.</p>
        </div>
    `}var FO;var WV=O_(()=>{k0();z5();P4();FO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><line x1="9.5" y1="9.5" x2="6.5" y2="6.5"/><line x1="14.5" y1="9.5" x2="17.5" y2="6.5"/><line x1="9.5" y1="14.5" x2="6.5" y2="17.5"/><line x1="14.5" y1="14.5" x2="17.5" y2="17.5"/></svg>`;o$({id:"mindmap",label:"Mind Map",icon:FO,component:NO,order:170})});var EO={};function w9(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function y9(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function I9(_,$){try{return localStorage.getItem(_)||$}catch{return $}}function x9(_,$){try{localStorage.setItem(_,$)}catch(j){}}function DO(){let[_,$]=C(()=>w9("piclaw_dev_mode",!1)),[j,G]=C(()=>I9("piclaw_addons_catalog_url","")),[Z,X]=C(()=>I9("piclaw_addons_catalog_urls","")),[Y,V]=C(()=>I9("piclaw_addons_repo_url","")),[Q,q]=C(()=>w9("piclaw_debug_sse",!1)),[B,K]=C(()=>w9("piclaw_debug_tool_calls",!1)),N=f(()=>{let L=!_;$(L),y9("piclaw_dev_mode",L)},[_]);return F`
        <div class="settings-section">
            <h3>Developer</h3>
            <div class="settings-row">
                <label>Developer mode</label>
                <input type="checkbox" checked=${_} onChange=${N} />
            </div>

            <p class="settings-hint settings-local-only-hint">This browser only. Developer-mode toggles and add-on catalog overrides are stored in local browser storage.</p>

            ${_&&F`
                <h3 style="margin-top:16px">Add-on Sources</h3>
                <div class="settings-row">
                    <label>Catalog URL</label>
                    <input type="text" value=${j}
                        onInput=${(L)=>{let U=L.target.value;G(U),x9("piclaw_addons_catalog_url",U)}}
                        placeholder="https://raw.githubusercontent.com/.../catalog.json" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Primary add-on catalog URL. Leave empty to use the default (<code>rcarmo/piclaw-addons</code>).</p>
                <div class="settings-row" style="align-items:flex-start;">
                    <label>Additional catalog URLs</label>
                    <textarea
                        value=${Z}
                        onInput=${(L)=>{let U=L.target.value;X(U),x9("piclaw_addons_catalog_urls",U)}}
                        placeholder="One URL per line\nhttps://example.com/catalog.json"
                        style="max-width:400px; min-height:86px; resize:vertical;"
                    ></textarea>
                </div>
                <p class="settings-hint" style="margin-top:0">Fetched in addition to the primary/default catalog. One URL per line.</p>
                <div class="settings-row">
                    <label>Repo URL</label>
                    <input type="text" value=${Y}
                        onInput=${(L)=>{let U=L.target.value;V(U),x9("piclaw_addons_repo_url",U)}}
                        placeholder="https://github.com/.../piclaw-addons.git" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Override the git repo used for <code>bun add</code> installs. Leave empty for default.</p>

                <h3 style="margin-top:16px">Debug</h3>
                <div class="settings-row">
                    <label>Log SSE events</label>
                    <input type="checkbox" checked=${Q}
                        onChange=${()=>{let L=!Q;q(L),y9("piclaw_debug_sse",L)}} />
                </div>
                <div class="settings-row">
                    <label>Log tool calls</label>
                    <input type="checkbox" checked=${B}
                        onChange=${()=>{let L=!B;K(L),y9("piclaw_debug_tool_calls",L)}} />
                </div>
                <p class="settings-hint">Debug flags take effect on next page reload.</p>
            `}
        </div>
    `}var HO;var OV=O_(()=>{k0();z5();HO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`;o$({id:"developer",label:"Developer",icon:HO,component:DO,order:900})});var MV={};_1(MV,{openSettingsDialog:()=>vO,SettingsDialogContent:()=>kV,SettingsDialog:()=>bO});function M6(_){k6.push({ts:performance.now(),label:_})}function WO(){if(!k6.length)return;let _=k6[0].ts,$=k6.map((j)=>`+${(j.ts-_).toFixed(1)}ms ${j.label}`);console.info(`[settings-dialog perf]
`+$.join(`
`));try{window.__piclawSettingsPerfLog=$}catch(j){}try{fetch("/agent/client-perf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:"settings-dialog",lines:$})}).catch((j)=>{})}catch(j){}k6.length=0}function JO(_){let $=_8.get(_);if($)return Promise.resolve($);let j=t2.get(_);if(j)return j;let G=OO[_]().then((Z)=>{return _8.set(_,Z),t2.delete(_),Z}).catch((Z)=>{throw t2.delete(_),Z});return t2.set(_,G),G}function e2(_="Loading…"){return F`
        <div class="settings-loading settings-loading-pane" role="status" aria-live="polite">
            <span class="settings-spinner"></span>
            <span>${_}</span>
        </div>
    `}function kV({onClose:_}){M6("SettingsDialogContent-render-start");let[$,j]=C(()=>Y9()||"general"),[G,Z]=C(zV),[X,Y]=C(null),[V,Q]=C(""),[,q]=C(0),[B,K]=C(()=>Object.fromEntries(_8.entries())),[N,L]=C(null),[U,E]=C({compact:!1,narrow:!1}),H=u(null),D=u(null);g(()=>{M6("SettingsDialogContent-mounted"),WO()},[]),g(()=>{let A=(P)=>{if(P.key==="Escape")_()};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[_]),g(()=>{let A=(P)=>{let R=typeof P?.detail?.section==="string"?P.detail.section.trim():"";if(R)j(R),Q("")};return window.addEventListener("piclaw:open-settings",A),()=>window.removeEventListener("piclaw:open-settings",A)},[]),g(()=>{let A=()=>q((P)=>P+1);return window.addEventListener("piclaw:settings-panes-changed",A),()=>window.removeEventListener("piclaw:settings-panes-changed",A)},[]),g(()=>{fetch("/agent/settings-data").then((A)=>A.json()).then((A)=>{zV=A,Z(A)}).catch(()=>Z({}))},[]),g(()=>{let A=D.current;if(!A)return;let P=()=>{let R=A.clientWidth||0;E((b)=>{let c={compact:R>0&&R<=860,narrow:R>0&&R<=720};return b.compact===c.compact&&b.narrow===c.narrow?b:c})};if(P(),typeof ResizeObserver==="function"){let R=new ResizeObserver(()=>P());return R.observe(A),()=>R.disconnect()}return window.addEventListener("resize",P),()=>window.removeEventListener("resize",P)},[]);let M=[...AV].sort((A,P)=>(A.order??500)-(P.order??500)),O=NY().map((A)=>({id:A.id,label:A.label,icon:A.icon,searchable:A.searchable||!1,placeholder:A.searchPlaceholder,order:A.order??500,isExtension:!0,component:A.component})).sort(V9),x=[...M,...O],I=x.find((A)=>A.id===$)||AV.find((A)=>A.id===$);g(()=>{if(I?.searchable)requestAnimationFrame(()=>H.current?.focus())},[$]),g(()=>{if(I?.isExtension){L(null);return}let A=!1;if(B[$]){L(null);return}return L($),JO($).then((P)=>{if(A)return;K((R)=>R?.[$]?R:{...R||{},[$]:P})}).catch((P)=>{if(A)return;console.error(`[settings-dialog] Failed to lazy-load section "${$}".`,P)}).finally(()=>{if(!A)L((P)=>P===$?null:P)}),()=>{A=!0}},[$,I?.isExtension,B]);let J=f((A,P="info")=>{Y(A?{text:A,type:P}:null)},[]),k=f((A)=>{j(A),Q("");let P=zO[A];if(P&&!JV.has(A))JV.add(A),P().then(()=>q((R)=>R+1)).catch((R)=>{})},[]),W=f((A)=>{Z((P)=>({...P||{},...A||{}}))},[]),T=()=>{if(I?.isExtension){if(!I.component)return e2("Loading pane…");let P=I.component;return F`<${P} filter=${V} />`}let A=B[$];if(!A||N===$)return e2(`Loading ${I?.label||"settings"}…`);switch($){case"general":return F`<${A} settingsData=${G} setStatus=${J} mergeSettingsData=${W} />`;case"sessions":return F`<${A} settingsData=${G} setStatus=${J} mergeSettingsData=${W} />`;case"compaction":return F`<${A} settingsData=${G} setStatus=${J} mergeSettingsData=${W} />`;case"keyboard":return F`<${A} filter=${V} setStatus=${J} />`;case"workspace":return F`<${A} settingsData=${G} setStatus=${J} mergeSettingsData=${W} />`;case"environment":return F`<${A} settingsData=${G} filter=${V} setStatus=${J} mergeSettingsData=${W} />`;case"providers":return F`<${A} providers=${G?.providers} setStatus=${J} />`;case"models":return F`<${A} filter=${V} />`;case"theme":return F`<${A} themes=${G?.themes} colorKeys=${G?.colorKeys} settingsData=${G} setStatus=${J} mergeSettingsData=${W} />`;case"scheduled-tasks":return F`<${A} filter=${V} setStatus=${J} />`;case"quick-actions":return F`<${A} filter=${V} setStatus=${J} mergeSettingsData=${W} />`;case"keychain":return F`<${A} filter=${V} />`;case"tools":return F`<${A} toolsets=${G?.toolsets} filter=${V} settingsData=${G} mergeSettingsData=${W} />`;case"addons":return F`<${A} setStatus=${J} filter=${V} />`;default:return e2("Loading settings…")}},w=!I;return M6("SettingsDialogContent-render-end"),F`
        <div class="settings-dialog-backdrop" onClick=${(A)=>{if(A.target===A.currentTarget)_()}}>
            <div ref=${D} data-testid="settings-dialog" class=${`settings-dialog${U.compact?" settings-dialog-compact":""}${U.narrow?" settings-dialog-narrow":""}`}>
                <div class="settings-dialog-header">
                    <span class="settings-dialog-title">Settings</span>
                    ${I?.searchable&&F`
                        <input ref=${H} type="text" class="settings-header-filter"
                            placeholder=${I.placeholder||"Filter…"}
                            value=${V} onInput=${(A)=>Q(A.target.value)} />
                    `}
                    <button class="settings-dialog-close" onClick=${_} title="Close (Esc)">✕</button>
                </div>
                <div class="settings-dialog-body">
                    <nav class="settings-nav">
                        ${x.map((A,P)=>{let R=P>0&&!x[P-1].isExtension,b=A.isExtension&&R;return F`
                                ${b&&F`<div class="settings-nav-separator"></div>`}
                                <button class=${`settings-nav-item ${A.id===$?"active":""}`} onClick=${()=>k(A.id)}>
                                    <span class="settings-nav-icon">${A.icon}</span>
                                    <span class="settings-nav-label">${A.label}</span>
                                </button>
                            `})}
                    </nav>
                    <main class="settings-content">
                        ${w?e2("Loading settings…"):T()}
                    </main>
                </div>
                ${X&&F`
                    <div class=${`settings-status-bar settings-status-bar-${X.type}`}>
                        ${X.type==="info"&&F`<span class="settings-spinner"></span>`}
                        <span>${X.text}</span>
                        ${X.type!=="info"&&F`<button class="settings-status-dismiss" onClick=${()=>Y(null)}>✕</button>`}
                    </div>
                `}
            </div>
        </div>
    `}function bO(){let[_,$]=C(!1);if(g(()=>{let j=(Z)=>{let X=O5(Z?.detail?.section);if(X)try{window.__piclawSettingsRequestedSection=X}catch(Y){}$(!0)};window.addEventListener("piclaw:open-settings",j);let G=v2();if(G.open){if(G.section)try{window.__piclawSettingsRequestedSection=G.section}catch(Z){}$(!0)}return()=>window.removeEventListener("piclaw:open-settings",j)},[]),!_)return null;return F`<${d$} className="settings-portal"><${kV} onClose=${()=>$(!1)} /><//>`}function vO(_={}){i1(_)}var k6,zV=null,_8,t2,OO,zO,JV,AO,kO,MO,TO,wO,yO,IO,xO,CO,PO,RO,fO,SO,gO,uO,AV;var TV=O_(()=>{k0();m2();z5();AY();k6=[];M6("module-eval-start");M6("imports-done");_8=new Map,t2=new Map;_8.set("general",B9);OO={general:()=>Promise.resolve(B9),sessions:()=>Promise.resolve().then(() => (TY(),MY)).then((_)=>_.SessionsSection),recordings:()=>Promise.resolve().then(() => (yY(),wY)).then((_)=>_.RecordingsSection),compaction:()=>Promise.resolve().then(() => (xY(),IY)).then((_)=>_.CompactionSection),keyboard:()=>Promise.resolve().then(() => (uY(),gY)).then((_)=>_.KeyboardSection),workspace:()=>Promise.resolve().then(() => (lY(),hY)).then((_)=>_.WorkspaceSection),environment:()=>Promise.resolve().then(() => (rY(),pY)).then((_)=>_.EnvironmentSection),providers:()=>Promise.resolve().then(() => (dY(),nY)).then((_)=>_.ProvidersSection),models:()=>Promise.resolve().then(() => (iY(),oY)).then((_)=>_.ModelsSection),theme:()=>Promise.resolve().then(() => (tY(),aY)).then((_)=>_.ThemeSection),"scheduled-tasks":()=>Promise.resolve().then(() => ($V(),_V)).then((_)=>_.ScheduledTasksSection),"quick-actions":()=>Promise.resolve().then(() => (QV(),qV)).then((_)=>_.QuickActionsSection),keychain:()=>Promise.resolve().then(() => (BV(),KV)).then((_)=>_.KeychainSection),tools:()=>Promise.resolve().then(() => (NV(),LV)).then((_)=>_.ToolsSection),addons:()=>Promise.resolve().then(() => (UV(),FV)).then((_)=>_.AddonsSection)},zO={"editor-settings":()=>Promise.resolve().then(() => (DV(),KO)).then(()=>{}),"mindmap-settings":()=>Promise.resolve().then(() => (WV(),UO)).then(()=>{}),developer:()=>Promise.resolve().then(() => (OV(),EO)).then(()=>{})},JV=new Set;AO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M8.5 5.9L9.6 2.3h4.8l1.1 3.6 3.7-.8 2.4 4.1-2.6 2.8 2.6 2.8-2.4 4.1-3.7-.8-1.1 3.6H9.6l-1.1-3.6-3.7.8-2.4-4.1L5 12 2.4 9.2l2.4-4.1z"/></svg>`,kO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,MO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="12" r="2.2"/><path d="m13 10 4-2.5v9L13 14z"/></svg>`,TO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><polyline points="3 4 3 10 9 10"/><path d="M12 7v5l3 3"/></svg>`,wO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,yO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/><path d="M8 7v10"/><path d="M16 7v10"/></svg>`,IO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01"/><path d="M10 9h.01"/><path d="M14 9h.01"/><path d="M18 9h.01"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M7 17h10"/></svg>`,xO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,CO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="9" width="14" height="10" rx="2"/><circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none"/><line x1="12" y1="9" x2="12" y2="5"/><circle cx="12" cy="4" r="1.5"/></svg>`,PO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2 0-.53-.21-1.01-.55-1.36-.34-.36-.55-.84-.55-1.37 0-1.1.9-2 2-2h2.36c3.08 0 5.64-2.56 5.64-5.64C22.9 5.85 18.05 2 12 2z"/><circle cx="8" cy="10" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="16" cy="10" r="1.5" fill="currentColor" stroke="none"/></svg>`,RO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/><path d="M7 3.5 4 6"/><path d="m17 3.5 3 2.5"/></svg>`,fO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,SO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,gO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="14" r="3"/><path d="M11 14h9"/><path d="M16 14v-2"/><path d="M19 14v2"/></svg>`,uO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,AV=[{id:"general",label:"General",icon:AO,searchable:!1,order:10},{id:"sessions",label:"Sessions",icon:kO,searchable:!1,order:12},{id:"recordings",label:"Recordings",icon:MO,searchable:!0,placeholder:"Filter recordings…",order:12.5},{id:"compaction",label:"Compaction",icon:TO,searchable:!1,order:13},{id:"keyboard",label:"Keyboard",icon:IO,searchable:!0,placeholder:"Filter shortcuts…",order:14},{id:"workspace",label:"Workspace",icon:wO,searchable:!1,order:15},{id:"environment",label:"Environment",icon:yO,searchable:!0,placeholder:"Filter environment…",order:16},{id:"providers",label:"Providers",icon:xO,searchable:!1,order:20},{id:"models",label:"Models",icon:CO,searchable:!0,placeholder:"Filter models…",order:30},{id:"theme",label:"Appearance",icon:PO,searchable:!1,order:40},{id:"scheduled-tasks",label:"Scheduled Tasks",icon:RO,searchable:!0,placeholder:"Filter scheduled tasks…",order:65},{id:"quick-actions",label:"Quick Actions",icon:SO,searchable:!0,placeholder:"Filter quick actions…",order:70},{id:"keychain",label:"Keychain",icon:gO,searchable:!0,placeholder:"Filter entries…",order:75},{id:"tools",label:"Tools",icon:fO,searchable:!0,placeholder:"Filter tools…",order:80},{id:"addons",label:"Add-ons",icon:uO,searchable:!0,placeholder:"Filter add-ons…",order:90}]});k0();class gG{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let G of this.extensions.values()){if(G.placement!=="tabs")continue;if(!G.canHandle)continue;try{let Z=G.canHandle(_);if(Z===!1||Z===0)continue;let X=Z===!0?0:typeof Z==="number"?Z:0;if(X>j)j=X,$=G}catch(Z){console.warn(`[PaneRegistry] canHandle() error for "${G.id}":`,Z)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var Y_=new gG;var Y2=null,J3=null;function qU(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function uG(){if(J3)return Promise.resolve(J3);if(!Y2)Y2=import(qU()).then((_)=>{return J3=_,_}).catch((_)=>{throw Y2=null,_});return Y2}class bG{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedContentChangeCb=null;queuedContentChangeUnsubscribe=null;queuedViewState=null;queuedDiffMode=void 0;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await uG();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedContentChangeCb&&typeof this.real.onContentChange==="function")this.queuedContentChangeUnsubscribe=this.real.onContentChange(this.queuedContentChangeCb)||null;if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState));if(this.queuedDiffMode!==void 0&&typeof this.real.setDiffMode==="function")this.real.setDiffMode(this.queuedDiffMode)}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null,this.queuedContentChangeCb=null,this.queuedContentChangeUnsubscribe?.(),this.queuedContentChangeUnsubscribe=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}beforeDetachFromHost(_){return this.real?.beforeDetachFromHost?.(_)}afterAttachToHost(_){return this.real?.afterAttachToHost?.(_)}moveHost(_,$){return this.real?.moveHost?.(_,$)??!1}exportHostTransferState(){return this.real?.exportHostTransferState?.()??null}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}onContentChange(_){return this.queuedContentChangeUnsubscribe?.(),this.queuedContentChangeCb=_,this.queuedContentChangeUnsubscribe=this.real?.onContentChange?.(_)||null,()=>{if(this.queuedContentChangeCb===_)this.queuedContentChangeCb=null;this.queuedContentChangeUnsubscribe?.(),this.queuedContentChangeUnsubscribe=null}}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}setDiffMode(_){this.queuedDiffMode=_,this.real?.setDiffMode?.(_)}}var A3={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new bG(_,$)}};function k3(){uG().catch((_)=>{console.warn("[editor-loader] Background preload failed; the editor will retry on demand.",_)})}function vG(_){try{return typeof _?.crypto?.randomUUID==="function"?_.crypto.randomUUID():null}catch($){return null}}function V2(_,$){try{return _?.removeItem?.($),!0}catch(j){return!1}}var mG="piclaw:editor-popout:",QU=300000;function cG(_){try{return _?.localStorage??null}catch{return null}}function KU(_=Date.now()){return`editor-popout-${_.toString(36)}-${Math.random().toString(36).slice(2,10)}`}function hG(_){return typeof _==="string"?_.trim():""}function lG(_){return(typeof _==="string"?_.trim():"")||null}function pG(_){return typeof _==="string"?_:void 0}function rG(_){if(_===void 0)return;if(typeof _!=="string")return null;return _.trim()||null}function nG(_){if(!_||typeof _!=="object")return null;let $=_,j={};if(typeof $.cursorLine==="number"&&Number.isFinite($.cursorLine))j.cursorLine=$.cursorLine;if(typeof $.cursorCol==="number"&&Number.isFinite($.cursorCol))j.cursorCol=$.cursorCol;if(typeof $.scrollTop==="number"&&Number.isFinite($.scrollTop))j.scrollTop=$.scrollTop;return Object.keys(j).length>0?j:null}function Z5(_,$=globalThis){let j=$?.window??$;if(!j?.location?.href)return null;try{let G=new URL(j.location.href),Z=G.searchParams.get(_)?.trim()||"";if(!Z)return null;return G.searchParams.delete(_),j.history?.replaceState?.(j.history.state,j.document?.title||"",G.toString()),Z}catch{return null}}function BU(_,$=globalThis,j=Date.now()){let G=cG($),Z=hG(_?.path);if(!G||!Z)return null;let X={path:Z,content:pG(_?.content),mtime:rG(_?.mtime),paneOverrideId:lG(_?.paneOverrideId),viewState:nG(_?.viewState),capturedAt:j};if(!Boolean(X.content!==void 0||X.paneOverrideId||X.viewState||X.mtime))return null;let V=KU(j);try{return G.setItem(`${mG}${V}`,JSON.stringify(X)),V}catch{return null}}function M3(_,$=globalThis,j=Date.now()){let G=typeof _==="string"?_.trim():"",Z=cG($);if(!G||!Z)return null;let X=`${mG}${G}`,Y="";try{Y=Z.getItem(X)||""}catch{return null}if(!Y)return null;V2(Z,X);try{let V=JSON.parse(Y),Q=typeof V?.capturedAt==="number"&&Number.isFinite(V.capturedAt)?V.capturedAt:j;if(Q+QU<j)return null;let q=hG(V?.path);if(!q)return null;return{path:q,content:pG(V?.content),mtime:rG(V?.mtime),paneOverrideId:lG(V?.paneOverrideId),viewState:nG(V?.viewState),capturedAt:Q}}catch{return null}}function q2(_,$=globalThis,j=Date.now()){let G=BU(_,$,j);return G?{editor_popout:G}:null}function R1(_){try{return _(),!0}catch($){return!1}}function dG(_){let{ownerWindow:$,themeChangeListener:j,mediaQuery:G,mediaQueryListener:Z,dockResizeListener:X,windowResizeListener:Y,themeObserver:V,resizeObserver:Q}=_;R1(()=>{if(j)$?.removeEventListener?.("piclaw-theme-change",j)}),R1(()=>{if(G&&Z){if(G.removeEventListener)G.removeEventListener("change",Z);else if(G.removeListener)G.removeListener(Z)}}),R1(()=>{if(X)$?.removeEventListener?.("dock-resize",X);if(Y)$?.removeEventListener?.("resize",Y)}),R1(()=>{V?.disconnect?.()}),R1(()=>{Q?.disconnect?.()})}function oG(_){_.syncHostLayout(),R1(()=>{_.terminal?.renderer?.remeasureFont?.()}),R1(()=>{_.fitAddon?.fit?.()}),_.sendResize()}function iG(_){let{resizeFrame:$=0,cancelAnimationFrameFn:j=cancelAnimationFrame,socket:G,fitAddon:Z,terminal:X,termEl:Y}=_;if($)R1(()=>{j($)});return R1(()=>{G?.close?.()}),R1(()=>{Z?.dispose?.()}),R1(()=>{X?.dispose?.()}),Y?.remove?.(),0}function l1(_){try{return _(),!0}catch($){return!1}}function sG(_){let{termEl:$,bodyEl:j,terminal:G,theme:Z,themeChanged:X=!1,socket:Y,resize:V}=_;if(l1(()=>{if($?.style)$.style.backgroundColor=Z.background,$.style.color=Z.foreground;if(j?.style)j.style.backgroundColor=Z.background,j.style.color=Z.foreground;let Q=j?.querySelector?.(".terminal-live-host");if(Q&&typeof Q==="object"&&"style"in Q)Q.style.backgroundColor=Z.background,Q.style.color=Z.foreground;let q=j?.querySelector?.("canvas");if(q&&typeof q==="object"&&"style"in q)q.style.backgroundColor=Z.background,q.style.color=Z.foreground}),l1(()=>{if(G?.options)G.options.theme=Z}),X)l1(()=>{G?.reset?.()});l1(()=>{G?.renderer?.setTheme?.(Z),G?.renderer?.clear?.()}),l1(()=>{G?.loadFonts?.()}),l1(()=>{G?.renderer?.remeasureFont?.()}),l1(()=>{if(G?.wasmTerm&&G?.renderer?.render)G.renderer.render(G.wasmTerm,!0,G.viewportY||0,G),G.renderer.render(G.wasmTerm,!1,G.viewportY||0,G)}),l1(()=>{V?.()}),l1(()=>{if(X&&Y?.readyState===1)Y.send?.(JSON.stringify({type:"input",data:"\f"}))}),l1(()=>{G?.refresh?.()})}var LU="/static/js/vendor/ghostty-web.js",NU="/static/js/vendor/ghostty-vt.wasm",Y5="piclaw://terminal",FU='FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',UU='400 13px "FiraCode Nerd Font Mono"',DU='700 13px "FiraCode Nerd Font Mono"',jZ="x-piclaw-terminal-client",aG="piclaw_terminal_client",HU={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},EU={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},Q2=null,T3=null;function w3(_){if(!_)return"";let $=String(_.code||"").trim().toLowerCase();if($)return $;let j=String(_.key||"").trim().toLowerCase();if(!j)return"";if(j.length===1&&/[a-z]/.test(j))return`key${j}`;if(j==="insert")return"insert";return j}function WU(_){if(!_)return!1;if(!_.shiftKey||_.altKey)return!1;if(!(_.ctrlKey||_.metaKey))return!1;return w3(_)==="keyc"}function OU(_){if(!_)return!1;if(_.shiftKey&&!_.ctrlKey&&!_.metaKey&&!_.altKey&&w3(_)==="insert")return!0;if(!_.shiftKey||_.altKey)return!1;if(!(_.ctrlKey||_.metaKey))return!1;return w3(_)==="keyv"}async function zU(_=typeof navigator<"u"?navigator:null){let $=_?.clipboard?.readText;if(typeof $!=="function")return null;try{let j=await $.call(_.clipboard);return typeof j==="string"?j:null}catch(j){return console.debug("[terminal-pane] Clipboard read failed.",j),null}}function JU(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function AU(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL(NU,window.location.origin).href,G=(Z,X)=>{let Y=Z instanceof Request?Z.url:Z instanceof URL?Z.href:String(Z);if(!JU(Y))return $(Z,X);if(Z instanceof Request)return $(new Request(j,Z));return $(j,X)};globalThis.fetch=G;try{return await _()}finally{globalThis.fetch=$}}async function kU(){let $=await import(new URL(LU,window.location.origin).href);if(!Q2)Q2=AU(()=>Promise.resolve($.init?.())).catch((j)=>{throw Q2=null,j});return await Q2,$}async function MU(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!T3)T3=Promise.allSettled([document.fonts.load(UU),document.fonts.load(DU),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await T3}function tG(_=typeof window<"u"?window:null){try{if(typeof _?.crypto?.randomUUID==="function")return _.crypto.randomUUID()}catch($){console.debug("[terminal-pane] Failed to generate crypto-backed terminal client token; falling back.",$)}return`terminal-client-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function I3(_=typeof window<"u"?window:null){if(!_)return null;try{let $=_.localStorage,j=typeof $?.getItem==="function"?String($.getItem(aG)||"").trim():"";if(j)return j;let G=tG(_);return $?.setItem?.(aG,G),G}catch($){return tG(_)}}async function TU(_=I3()){let $=await fetch("/terminal/session",{method:"GET",credentials:"same-origin",headers:_?{[jZ]:_}:void 0}),j=await $.json().catch(()=>({}));if(!$.ok)throw Error(j?.error||`HTTP ${$.status}`);return j}async function wU(_=I3()){let $=await fetch("/terminal/handoff",{method:"POST",credentials:"same-origin",headers:_?{[jZ]:_}:void 0}),j=await $.json().catch(()=>({}));if(!$.ok)throw Error(j?.error||`HTTP ${$.status}`);return typeof j?.handoff?.token==="string"&&j.handoff.token.trim()?j.handoff.token.trim():null}function yU(_,$=null,j=I3()){let G=window.location.protocol==="https:"?"wss:":"ws:",Z=new URL(`${G}//${window.location.host}${_}`);if($)Z.searchParams.set("handoff",String($));if(j)Z.searchParams.set("client",String(j));return Z.toString()}function IU(_=typeof window<"u"?window:null,$=typeof document<"u"?document:null){if(!_||!$)return!1;let{documentElement:j,body:G}=$,Z=j?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(Z==="dark")return!0;if(Z==="light")return!1;if(j?.classList?.contains("dark")||G?.classList?.contains("dark"))return!0;if(j?.classList?.contains("light")||G?.classList?.contains("light"))return!1;return Boolean(_.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function U4(_,$="",j=typeof document<"u"?document:null){if(!j)return $;return getComputedStyle(j.documentElement).getPropertyValue(_)?.trim()||$}function X5(_){let $=String(_||"").trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(/^[0-9a-fA-F]{3}$/.test(j)||/^[0-9a-fA-F]{6}$/.test(j)){let Z=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,X=parseInt(Z,16);return{r:X>>16&255,g:X>>8&255,b:X&255}}let G=$.match(/rgba?\(\s*(\d+)[,\s]\s*(\d+)[,\s]\s*(\d+)/i);if(G)return{r:parseInt(G[1],10),g:parseInt(G[2],10),b:parseInt(G[3],10)};return null}function eG(_){let $=(j)=>{let G=j/255;return G<=0.03928?G/12.92:Math.pow((G+0.055)/1.055,2.4)};return 0.2126*$(_.r)+0.7152*$(_.g)+0.0722*$(_.b)}function d5(_,$){let j=eG(_),G=eG($),Z=Math.max(j,G),X=Math.min(j,G);return(Z+0.05)/(X+0.05)}function GZ(_){let $=X5(_);if(!$)return"#ffffff";let j={r:255,g:255,b:255},G={r:0,g:0,b:0};return d5($,j)>=d5($,G)?"#ffffff":"#000000"}function K2(_){let $=(j)=>Math.max(0,Math.min(255,Math.round(j||0)));return`#${[_.r,_.g,_.b].map((j)=>$(j).toString(16).padStart(2,"0")).join("")}`}function _Z(_,$,j){let G=Math.max(0,Math.min(1,Number.isFinite(j)?j:0));return{r:_.r+($.r-_.r)*G,g:_.g+($.g-_.g)*G,b:_.b+($.b-_.b)*G}}function G1(_,$,j=4.5){let G=X5(_),Z=X5($);if(!G||!Z)return $;if(d5(G,Z)>=j)return K2(Z);let X=X5(GZ(_));if(!X)return K2(Z);let Y=X,V=1,Q=0,q=1;for(let N=0;N<14;N+=1){let L=(Q+q)/2,U=_Z(Z,X,L);if(d5(G,U)>=j)Y=U,V=L,q=L;else Q=L}let B=K2(Y),K=X5(B);while(K&&d5(G,K)<j&&V<1)V=Math.min(1,V+0.01),B=K2(_Z(Z,X,V)),K=X5(B);return B}function xU(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function $Z(_=typeof window<"u"?window:null,$=typeof document<"u"?document:null){let j=IU(_,$),G=j?EU:HU,Z=U4("--bg-primary",j?"#000000":"#ffffff",$),X=U4("--text-primary",j?"#e7e9ea":"#0f1419",$),Y=G1(Z,X||GZ(Z),7),V=U4("--accent-color","#1d9bf0",$),Q=U4("--danger-color",j?"#ff7b72":"#cf222e",$),q=U4("--success-color",j?"#7ee787":"#1a7f37",$),B=U4("--bg-hover",j?"#1d1f23":"#e8ebed",$),K=U4("--accent-soft-strong",xU(V,j?"47":"33"),$);return{background:Z,foreground:Y,cursor:G1(Z,V,3),cursorAccent:Z,selectionBackground:K,selectionForeground:Y,black:G1(Z,B,3),red:G1(Z,Q,4.5),green:G1(Z,q,4.5),yellow:G1(Z,G.yellow,4.5),blue:G1(Z,V,4.5),magenta:G1(Z,G.magenta,4.5),cyan:G1(Z,G.cyan,4.5),white:Y,brightBlack:G1(Z,G.brightBlack,3),brightRed:G1(Z,G.brightRed,4.5),brightGreen:G1(Z,G.brightGreen,4.5),brightYellow:G1(Z,G.brightYellow,4.5),brightBlue:G1(Z,G.brightBlue,4.5),brightMagenta:G1(Z,G.brightMagenta,4.5),brightCyan:G1(Z,G.brightCyan,4.5),brightWhite:Y}}function ZZ(_){let $=_?.activeElement;if(!$||$===_?.body||$===_?.documentElement)return!1;if(typeof $.blur!=="function")return!1;return $.blur(),!0}function y3(_,$){let j=[_?.inputElement,_?.textarea,_?.container,$,$?.querySelector?.("textarea")].filter((G,Z,X)=>Boolean(G)&&X.indexOf(G)===Z);for(let G of j)try{let Z=G.ownerDocument?.defaultView||window,X=typeof Z.CompositionEvent==="function"?new Z.CompositionEvent("compositionend",{data:""}):new Z.Event("compositionend");G.dispatchEvent?.(X)}catch(Z){console.debug("[terminal-pane] Failed to dispatch best-effort IME composition reset.",Z)}if(_&&typeof _==="object")_.isComposing=!1,_.pendingKeyAfterComposition=null,_.compositionJustEnded=!1}function CU(_){if(ZZ(_.ownerDocument),y3(_.terminal,_.terminalHost||null),typeof _.terminal?.focus==="function")_.terminal.focus();else _.termEl?.focus?.();y3(_.terminal,_.terminalHost||null)}class x3{container;ownerDocument;ownerWindow;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;resizeRetryTimers=new Set;lastAppliedThemeSignature=null;lastResizeSignature=null;pendingHandoffToken=null;standbyHandoffToken=null;standbyHandoffRequest=null;constructor(_,$){this.container=_,this.ownerDocument=_.ownerDocument||document,this.ownerWindow=this.ownerDocument.defaultView||window;let j=typeof $?.transferState?.handoffToken==="string"&&$.transferState.handoffToken.trim()?$.transferState.handoffToken.trim():null,G=Z5("terminal_handoff");this.pendingHandoffToken=j||G||null,this.termEl=this.ownerDocument.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.termEl.setAttribute("inputmode","none"),this.statusEl=this.ownerDocument.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=this.ownerDocument.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.style.display="flex",this.bodyEl.style.flex="1 1 auto",this.bodyEl.style.minHeight="0",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,G=Number.isFinite(_?.height)?_.height:0,Z=Number.isFinite($?.width)?$.width:0,X=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(G)}:${Math.round(Z)}x${Math.round(X)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;_.style.display="flex",_.style.flex="1 1 auto",_.style.width="100%",_.style.height="100%",_.style.minWidth="0",_.style.minHeight="0",_.style.overflow="hidden";let $=_.querySelector("canvas");if($ instanceof HTMLElement)$.style.display="block"}queueResizeRetries(_=[32,96,180,320,520,900]){if(this.disposed||!this.ownerWindow)return;this.clearResizeRetries();for(let $ of _){let j=this.ownerWindow.setTimeout(()=>{if(this.resizeRetryTimers.delete(j),this.disposed)return;this.scheduleResize(!0)},$);this.resizeRetryTimers.add(j)}}clearResizeRetries(){if(!this.ownerWindow||this.resizeRetryTimers.size===0)return;for(let _ of Array.from(this.resizeRetryTimers))try{this.ownerWindow.clearTimeout(_)}catch($){console.debug("[terminal-pane] Ignoring timeout clear failure during resize retry drain.",$,{timer:_})}this.resizeRetryTimers.clear()}scheduleResize(_=!1){if(this.disposed)return;let $=this.getResizeSignature();if(!_&&this.lastResizeSignature===$)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await kU();if(await MU(),this.disposed)return;this.bodyEl.innerHTML="";let $=this.ownerDocument.createElement("div");$.className="terminal-live-host",$.style.display="flex",$.style.flex="1 1 auto",$.style.width="100%",$.style.height="100%",$.style.minWidth="0",$.style.minHeight="0",$.setAttribute("inputmode","none"),this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:FU,fontSize:13,theme:$Z(this.ownerWindow,this.ownerDocument)}),G=null;if(typeof _.FitAddon==="function")G=new _.FitAddon,j.loadAddon?.(G);ZZ(this.ownerDocument),await j.open($),$.__terminal=j,y3(j,$),this.syncHostLayout(),j.loadFonts?.(),G?.observeResize?.(),this.terminal=j,this.fitAddon=G,this.installClipboardShortcutBridge(),this.installThemeSync(),this.installResizeSync(),this.scheduleResize(!0),this.queueResizeRetries([32,96,180,320]),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}installClipboardShortcutBridge(){let _=this.terminal;if(!_||typeof _.attachCustomKeyEventHandler!=="function")return;_.attachCustomKeyEventHandler(($)=>{if(WU($)){try{if(!_.copySelection?.()){let G=typeof _.getSelection==="function"?String(_.getSelection()||""):"";if(G)this.ownerWindow?.navigator?.clipboard?.writeText?.(G).catch((Z)=>{console.debug("[terminal-pane] Clipboard write fallback failed.",Z)})}}catch(j){console.debug("[terminal-pane] Clipboard copy shortcut failed.",j)}return!0}if(OU($)){if(typeof this.ownerWindow?.navigator?.clipboard?.readText!=="function")return;return zU(this.ownerWindow?.navigator).then((j)=>{if(typeof j!=="string"||!j.length||this.disposed)return;_.paste?.(j)}),!0}return})}applyTheme(){if(!this.terminal)return;let _=$Z(this.ownerWindow,this.ownerDocument),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;sG({termEl:this.termEl,bodyEl:this.bodyEl,terminal:this.terminal,theme:_,themeChanged:j,socket:this.socket,resize:()=>this.resize()}),this.lastAppliedThemeSignature=$}installThemeSync(){if(!this.ownerWindow||!this.ownerDocument)return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();this.ownerWindow.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=this.ownerWindow.matchMedia?.("(prefers-color-scheme: dark)"),G=()=>_();if(j?.addEventListener)j.addEventListener("change",G);else if(j?.addListener)j.addListener(G);this.mediaQuery=j,this.mediaQueryListener=G;let Z=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Z?.observe(this.ownerDocument.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),this.ownerDocument.body)Z?.observe(this.ownerDocument.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Z}installResizeSync(){if(!this.ownerWindow)return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(this.ownerWindow.addEventListener("dock-resize",_),this.ownerWindow.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),j.observe(this.termEl),j.observe(this.bodyEl),this.resizeObserver=j}}consumeStandbyHandoffToken(){let _=this.standbyHandoffToken||null;return this.standbyHandoffToken=null,_}async ensureStandbyHandoffToken(_=!1){if(this.disposed)return null;if(!_&&this.standbyHandoffToken)return this.standbyHandoffToken;if(this.standbyHandoffRequest)return await this.standbyHandoffRequest;return this.standbyHandoffRequest=wU().then(($)=>{if(!$||this.disposed)return null;return this.standbyHandoffToken=$,$}).catch(($)=>{return console.warn("[terminal-pane] Failed to prepare standby handoff token:",$),null}).finally(()=>{this.standbyHandoffRequest=null}),await this.standbyHandoffRequest}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await TU();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=this.pendingHandoffToken||null,G=new WebSocket(yU($.ws_path||"/terminal/ws",j));this.socket=G,this.setStatus(j?"Transferring…":"Connecting…"),_.onData?.((Z)=>{if(G.readyState===WebSocket.OPEN)G.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:X})=>{if(G.readyState===WebSocket.OPEN)G.send(JSON.stringify({type:"resize",cols:Z,rows:X}))}),G.addEventListener("open",()=>{if(this.disposed)return;if(j&&this.pendingHandoffToken===j)this.pendingHandoffToken=null;this.ensureStandbyHandoffToken(!1),this.setStatus("Connected"),this.scheduleResize(!0),this.queueResizeRetries([24,72,160,320])}),G.addEventListener("message",(Z)=>{if(this.disposed)return;let X=null;try{X=JSON.parse(String(Z.data))}catch{X={type:"output",data:String(Z.data)}}if(X?.type==="session"){let Y=typeof X.session_id==="string"?X.session_id:null;if(_.__piclawSessionMeta={sessionId:Y,createdAt:typeof X.created_at==="string"?X.created_at:null,processPid:typeof X.process_pid==="number"?X.process_pid:null},!this.standbyHandoffToken)this.ensureStandbyHandoffToken(!1);return}if(X?.type==="output"&&typeof X.data==="string"){_.write?.(X.data);return}if(X?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),G.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),G.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}detachHostListeners(){dG({ownerWindow:this.ownerWindow,themeChangeListener:this.themeChangeListener,mediaQuery:this.mediaQuery,mediaQueryListener:this.mediaQueryListener,dockResizeListener:this.dockResizeListener,windowResizeListener:this.windowResizeListener,themeObserver:this.themeObserver,resizeObserver:this.resizeObserver}),this.themeChangeListener=null,this.mediaQuery=null,this.mediaQueryListener=null,this.themeObserver=null,this.resizeObserver=null,this.dockResizeListener=null,this.windowResizeListener=null}beforeDetachFromHost(){this.setStatus("Moving terminal…")}afterAttachToHost(_){let $=typeof _?.transferState?.handoffToken==="string"&&_.transferState.handoffToken.trim()?_.transferState.handoffToken.trim():null;if($)this.pendingHandoffToken=$;if(this.installThemeSync(),this.installResizeSync(),this.socket?.readyState===WebSocket.OPEN)this.setStatus("Connected");else if(this.pendingHandoffToken)this.setStatus("Transferring…");else if(this.socket?.readyState===WebSocket.CONNECTING)this.setStatus("Connecting…");this.scheduleResize(!0),this.queueResizeRetries([32,96,180,320]),requestAnimationFrame(()=>this.focus())}moveHost(_){return!1}exportHostTransferState(){let _=this.standbyHandoffToken||this.pendingHandoffToken||null;return _?{kind:"terminal",live:!1,handoffToken:_}:null}async preparePopoutTransfer(){let _=this.consumeStandbyHandoffToken();if(!_)await this.ensureStandbyHandoffToken(!0),_=this.consumeStandbyHandoffToken();if(!_)return null;return this.pendingHandoffToken=_,{terminal_handoff:_}}getContent(){return}isDirty(){return!1}focus(){let _=this.bodyEl.querySelector(".terminal-live-host");CU({terminal:this.terminal,terminalHost:_,termEl:this.termEl,ownerDocument:this.ownerDocument})}resize(){oG({syncHostLayout:()=>this.syncHostLayout(),terminal:this.terminal,fitAddon:this.fitAddon,sendResize:()=>this.sendResize()})}dispose(){if(this.disposed)return;this.disposed=!0,this.standbyHandoffToken=null,this.standbyHandoffRequest=null,this.clearResizeRetries(),this.detachHostListeners(),this.resizeFrame=iG({resizeFrame:this.resizeFrame,socket:this.socket,fitAddon:this.fitAddon,terminal:this.terminal,termEl:this.termEl})}}var C3={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new x3(_,$)}},P3={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path===Y5?1e4:!1},mount(_,$){return new x3(_,$)}};function f1(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Z)=>{try{return Boolean($.matchMedia(Z)?.matches)}catch{return!1}})}function B2(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let G=String(j?.userAgent||""),Z=Number(j?.maxTouchPoints||0),X=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(G),Y=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(X||Z>1||Y)}function XZ(_,$={}){if(f1($))return null;if(B2($))return{target:"_blank",features:void 0,mode:"tab"};return{target:PU(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function R3(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function f3(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),G=String($.message||"Preparing a new branch window…");_.document.title=j;let Z=_.document.body;if(!Z)return;if(typeof _.document.createElement!=="function"){Z.textContent=`${j}
${G}`;return}let X=_.document.createElement("div");X.setAttribute("style","font-family: system-ui, sans-serif; padding: 24px; color: #222;");let Y=_.document.createElement("h1");Y.setAttribute("style","font-size: 18px; margin: 0 0 12px;"),Y.textContent=j;let V=_.document.createElement("p");if(V.setAttribute("style","margin: 0; line-height: 1.5;"),V.textContent=G,X.appendChild(Y),X.appendChild(V),typeof Z.replaceChildren==="function")Z.replaceChildren(X);else Z.innerHTML="",Z.appendChild(X)}catch{return}}function S3(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{return}}function g3(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{return}}function w1(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(G.searchParams.set("chat_jid",Z),G.searchParams.delete("branch_loader"),G.searchParams.delete("branch_source_chat_jid"),G.searchParams.delete("pane_popout"),G.searchParams.delete("pane_path"),G.searchParams.delete("pane_label"),j.chatOnly!==!1)G.searchParams.set("chat_only","1");return G.toString()}function u3(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(G.searchParams.set("branch_loader","1"),G.searchParams.set("branch_source_chat_jid",Z),G.searchParams.delete("chat_jid"),G.searchParams.delete("pane_popout"),G.searchParams.delete("pane_path"),G.searchParams.delete("pane_label"),j.chatOnly!==!1)G.searchParams.set("chat_only","1");return G.toString()}function YZ(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim();if(!Z)return G.toString();if(G.searchParams.set("pane_popout","1"),G.searchParams.set("pane_path",Z),j?.label)G.searchParams.set("pane_label",String(j.label));else G.searchParams.delete("pane_label");if(j?.chatJid)G.searchParams.set("chat_jid",String(j.chatJid));let X=j?.params&&typeof j.params==="object"?j.params:null;if(X)for(let[Y,V]of Object.entries(X)){let Q=String(Y||"").trim();if(!Q)continue;if(V===null||V===void 0||V==="")G.searchParams.delete(Q);else G.searchParams.set(Q,String(V))}return G.searchParams.delete("chat_only"),G.searchParams.delete("branch_loader"),G.searchParams.delete("branch_source_chat_jid"),G.toString()}function PU(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function RU(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function VZ(_,$={}){if(f1($))return null;if(B2($))return{target:"_blank",features:void 0,mode:"tab"};return{target:RU(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function D4(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let G=j.toLowerCase();if(G.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(G.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(G.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(G.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(G.includes("failed to fork branch")||G.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function fU(_){try{return JSON.parse(_)}catch{return null}}function SU(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function gU(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}function qZ(_){try{return _?.close?.(),!0}catch($){return!1}}class b3{socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;pendingOutbound=[];constructor(_){this.options=_}connect(){if(this.disposed)return;qZ(this.socket);let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.flushPendingOutbound(_),this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=gU($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let G=this.options.parseControlMessage||fU;this.options.onMessage?.({kind:"control",raw:$.data,payload:G($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed)return;let $=this.socket;if(!$||$.readyState!==WebSocket.OPEN){this.pendingOutbound.push(_);return}this.sendNow($,_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0,qZ(this.socket),this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}sendNow(_,$){let j=SU($);this.bytesOut+=j,this.emitMetrics(),_.send($)}flushPendingOutbound(_){if(this.pendingOutbound.length===0)return;let $=this.pendingOutbound.splice(0);for(let j=0;j<$.length;j+=1){if(this.disposed||this.socket!==_||_.readyState!==WebSocket.OPEN){this.pendingOutbound.unshift(...$.slice(j));return}this.sendNow(_,$[j])}}}var o5=()=>{throw Error("Operation requires compiling with --exportRuntime")},uU=typeof BigUint64Array<"u",i5=Symbol();var bU=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function QZ(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,G=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...G);try{return bU.decode(G)}catch{let Z="",X=0;while(j-X>1024)Z+=String.fromCharCode(...G.subarray(X,X+=1024));return Z+String.fromCharCode(...G.subarray(X))}}function KZ(_){let $={};function j(Z,X){if(!Z)return"<yet unknown>";return QZ(Z.buffer,X)}let G=_.env=_.env||{};return G.abort=G.abort||function(X,Y,V,Q){let q=$.memory||G.memory;throw Error(`abort: ${j(q,X)} at ${j(q,Y)}:${V}:${Q}`)},G.trace=G.trace||function(X,Y,...V){let Q=$.memory||G.memory;console.log(`trace: ${j(Q,X)}${Y?" ":""}${V.slice(0,Y).join(", ")}`)},G.seed=G.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function BZ(_,$){let j=$.exports,G=j.memory,Z=j.table,X=j.__new||o5,Y=j.__pin||o5,V=j.__unpin||o5,Q=j.__collect||o5,q=j.__rtti_base,B=q?(T)=>T[q>>>2]:o5;_.__new=X,_.__pin=Y,_.__unpin=V,_.__collect=Q;function K(T){let w=new Uint32Array(G.buffer);if((T>>>=0)>=B(w))throw Error(`invalid id: ${T}`);return w[(q+4>>>2)+T]}function N(T){let w=K(T);if(!(w&7))throw Error(`not an array: ${T}, flags=${w}`);return w}function L(T){return 31-Math.clz32(T>>>6&31)}function U(T){if(T==null)return 0;let w=T.length,A=X(w<<1,2),P=new Uint16Array(G.buffer);for(let R=0,b=A>>>1;R<w;++R)P[b+R]=T.charCodeAt(R);return A}_.__newString=U;function E(T){if(T==null)return 0;let w=new Uint8Array(T),A=X(w.length,1);return new Uint8Array(G.buffer).set(w,A),A}_.__newArrayBuffer=E;function H(T){if(!T)return null;let w=G.buffer;if(new Uint32Array(w)[T+-8>>>2]!==2)throw Error(`not a string: ${T}`);return QZ(w,T)}_.__getString=H;function D(T,w,A){let P=G.buffer;if(A)switch(T){case 2:return new Float32Array(P);case 3:return new Float64Array(P)}else switch(T){case 0:return new(w?Int8Array:Uint8Array)(P);case 1:return new(w?Int16Array:Uint16Array)(P);case 2:return new(w?Int32Array:Uint32Array)(P);case 3:return new(w?BigInt64Array:BigUint64Array)(P)}throw Error(`unsupported align: ${T}`)}function M(T,w=0){let A=w,P=N(T),R=L(P),b=typeof A!=="number",c=b?A.length:A,r=X(c<<R,P&4?T:1),e;if(P&4)e=r;else{Y(r);let m=X(P&2?16:12,T);V(r);let _0=new Uint32Array(G.buffer);if(_0[m+0>>>2]=r,_0[m+4>>>2]=r,_0[m+8>>>2]=c<<R,P&2)_0[m+12>>>2]=c;e=m}if(b){let m=D(R,P&2048,P&4096),_0=r>>>R;if(P&16384)for(let E0=0;E0<c;++E0)m[_0+E0]=A[E0];else m.set(A,_0)}return e}_.__newArray=M;function z(T){let w=new Uint32Array(G.buffer),A=w[T+-8>>>2],P=N(A),R=L(P),b=P&4?T:w[T+4>>>2],c=P&2?w[T+12>>>2]:w[b+-4>>>2]>>>R;return D(R,P&2048,P&4096).subarray(b>>>=R,b+c)}_.__getArrayView=z;function O(T){let w=z(T),A=w.length,P=Array(A);for(let R=0;R<A;R++)P[R]=w[R];return P}_.__getArray=O;function x(T){let w=G.buffer,A=new Uint32Array(w)[T+-4>>>2];return w.slice(T,T+A)}_.__getArrayBuffer=x;function I(T){if(!Z)throw Error("Operation requires compiling with --exportTable");let w=new Uint32Array(G.buffer)[T>>>2];return Z.get(w)}_.__getFunction=I;function J(T,w,A){return new T(k(T,w,A))}function k(T,w,A){let P=G.buffer,R=new Uint32Array(P);return new T(P,R[A+4>>>2],R[A+8>>>2]>>>w)}function W(T,w,A){_[`__get${w}`]=J.bind(null,T,A),_[`__get${w}View`]=k.bind(null,T,A)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((T)=>{W(T,T.name,31-Math.clz32(T.BYTES_PER_ELEMENT))}),uU)[BigUint64Array,BigInt64Array].forEach((T)=>{W(T,T.name.slice(3),3)});return _.memory=_.memory||G,_.table=_.table||Z,mU(j,_)}function LZ(_){return typeof Response<"u"&&_ instanceof Response}function vU(_){return _ instanceof WebAssembly.Module}async function v3(_,$={}){if(LZ(_=await _))return L2(_,$);let j=vU(_)?_:await WebAssembly.compile(_),G=KZ($),Z=await WebAssembly.instantiate(j,$),X=BZ(G,Z);return{module:j,instance:Z,exports:X}}async function L2(_,$={}){if(!WebAssembly.instantiateStreaming)return v3(LZ(_=await _)?_.arrayBuffer():_,$);let j=KZ($),G=await WebAssembly.instantiateStreaming(_,$),Z=BZ(j,G.instance);return{...G,exports:Z}}function mU(_,$={}){let j=_.__argumentsLength?(G)=>{_.__argumentsLength.value=G}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let G of Object.keys(_)){let Z=_[G],X=G.split("."),Y=$;while(X.length>1){let q=X.shift();if(!Object.hasOwn(Y,q))Y[q]={};Y=Y[q]}let V=X[0],Q=V.indexOf("#");if(Q>=0){let q=V.substring(0,Q),B=Y[q];if(typeof B>"u"||!B.prototype){let K=function(...N){return K.wrap(K.prototype.constructor(0,...N))};if(K.prototype={valueOf(){return this[i5]}},K.wrap=function(N){return Object.create(K.prototype,{[i5]:{value:N,writable:!1}})},B)Object.getOwnPropertyNames(B).forEach((N)=>Object.defineProperty(K,N,Object.getOwnPropertyDescriptor(B,N)));Y[q]=K}if(V=V.substring(Q+1),Y=Y[q].prototype,/^(get|set):/.test(V)){if(!Object.hasOwn(Y,V=V.substring(4))){let K=_[G.replace("set:","get:")],N=_[G.replace("get:","set:")];Object.defineProperty(Y,V,{get(){return K(this[i5])},set(L){N(this[i5],L)},enumerable:!0})}}else if(V==="constructor")(Y[V]=function(...K){return j(K.length),Z(...K)}).original=Z;else(Y[V]=function(...K){return j(K.length),Z(this[i5],...K)}).original=Z}else if(/^(get|set):/.test(V)){if(!Object.hasOwn(Y,V=V.substring(4)))Object.defineProperty(Y,V,{get:_[G.replace("set:","get:")],set:_[G.replace("get:","set:")],enumerable:!0})}else if(typeof Z==="function"&&Z!==j)(Y[V]=(...q)=>{return j(q.length),Z(...q)}).original=Z;else Y[V]=Z}return $}function m3(_){try{return _?.__collect?.(),!0}catch($){return!1}}var hU="/static/js/vendor/remote-display-decoder.wasm",N2=null;function NZ(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function FZ(){if(N2)return N2;return N2=(async()=>{try{let G=function(Z,X,Y,V,Q,q,B){let K=NZ(X),N=j.__pin(j.__newArrayBuffer(K));try{return j[Z](N,Y,V,Q,q,B.bitsPerPixel,B.bigEndian?1:0,B.trueColor?1:0,B.redMax,B.greenMax,B.blueMax,B.redShift,B.greenShift,B.blueShift)}finally{j.__unpin(N),m3(j)}},_=await fetch(hU,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof L2==="function"?await L2(_,{}):await v3(await _.arrayBuffer(),{})).exports;for(let Z of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Z]!=="function")throw Error(`${Z} export is missing.`);return{initFramebuffer(Z,X){j.initFramebuffer(Z,X)},getFramebuffer(){let Z=j.getFramebufferPtr(),X=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Z,X).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Z,X,Y,V,Q,q){return G("processRawRect",Z,X,Y,V,Q,q)},processCopyRect(Z,X,Y,V,Q,q){return j.processCopyRect(Z,X,Y,V,Q,q)},processRreRect(Z,X,Y,V,Q,q){return G("processRreRect",Z,X,Y,V,Q,q)},processHextileRect(Z,X,Y,V,Q,q){return G("processHextileRect",Z,X,Y,V,Q,q)},processZrleTileData(Z,X,Y,V,Q,q){return G("processZrleTileData",Z,X,Y,V,Q,q)},decodeRawRectToRgba(Z,X,Y,V){let Q=NZ(Z),q=j.__pin(j.__newArrayBuffer(Q));try{let B=j.__pin(j.decodeRawRectToRgba(q,X,Y,V.bitsPerPixel,V.bigEndian?1:0,V.trueColor?1:0,V.redMax,V.greenMax,V.blueMax,V.redShift,V.greenShift,V.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(B))}finally{j.__unpin(B)}}finally{j.__unpin(q),m3(j)}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),N2}function V5(_,$,j){return Math.max($,Math.min(j,_))}function F2(_,$,j){let G=new Uint8Array(6),Z=V5(Math.floor(Number($||0)),0,65535),X=V5(Math.floor(Number(j||0)),0,65535);return G[0]=5,G[1]=V5(Math.floor(Number(_||0)),0,255),G[2]=Z>>8&255,G[3]=Z&255,G[4]=X>>8&255,G[5]=X&255,G}function c$(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function h3(_){let $=c$(_?.button);if($)return $;let j=String(_?.pointerType||"").toLowerCase();if(j==="touch"||j==="pen")return c$(0);let G=Number(_?.buttons||0);if(G&1)return c$(0);if(G&4)return c$(1);if(G&2)return c$(2);return 0}function H4(_){let $=String(_?.type||"").toLowerCase();if($==="pointerup"||$==="pointercancel"||$==="lostpointercapture")return!0;let j=Number(_?.buttons);if(Number.isFinite(j)&&j===0&&$!=="pointerdown")return!0;let G=String(_?.pointerType||"").toLowerCase(),Z=Number(_?.pressure);if(G==="touch"||G==="pen"){if($==="pointerleave"||$==="pointerout")return!0;if(Number.isFinite(Z)&&Z<=0&&$!=="pointerdown")return!0}return!1}function UZ(_){let $=String(_?.type||"").toLowerCase();if($==="touchend"||$==="touchcancel")return!0;if($==="touchmove")return Number(_?.touches?.length||0)<=0;return!1}function p1(_){return String(_||"").toLowerCase()==="touch"}function lU(_,$,j,G){let Z=Number(j||0)-Number(_||0),X=Number(G||0)-Number($||0);return Math.hypot(Z,X)}function l3(_){let $=Number.isFinite(_?.maxDistancePx)?Number(_.maxDistancePx):14;return lU(_?.startX,_?.startY,_?.clientX,_?.clientY)>$}function DZ(_){let $=Number.isFinite(_?.maxElapsedMs)?Number(_.maxElapsedMs):300;if(Number(_?.elapsedMs||0)>$)return!1;return!l3(_)}function HZ(_){return String(_||"").toLowerCase()!=="mouse"}function p3(_,$,j,G,Z){let X=Math.max(1,Math.floor(Number(G||0))),Y=Math.max(1,Math.floor(Number(Z||0))),V=Math.max(1,Number(j?.width||0)),Q=Math.max(1,Number(j?.height||0)),q=(Number(_||0)-Number(j?.left||0))/V,B=(Number($||0)-Number(j?.top||0))/Q;return{x:V5(Math.floor(q*X),0,Math.max(0,X-1)),y:V5(Math.floor(B*Y),0,Math.max(0,Y-1))}}function EZ(_,$,j,G=0){let Z=Number(_)<0?8:16,X=V5(Number(G||0)|Z,0,255);return[F2(X,$,j),F2(Number(G||0),$,j)]}function WZ(_,$){let j=new Uint8Array(8),G=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=G>>>24&255,j[5]=G>>>16&255,j[6]=G>>>8&255,j[7]=G&255,j}function OZ(_,$,j=!1){if(_==null||$==null)return!1;return Boolean(j)||Number(_)===Number($)}function E4(_){if(typeof _!=="string")return null;return _.length>0?_:null}function zZ(_,$,j,G){let Z=Math.max(1,Math.floor(Number(_||0))),X=Math.max(1,Math.floor(Number($||0))),Y=Math.max(1,Math.floor(Number(j||0))),V=Math.max(1,Math.floor(Number(G||0))),Q=Math.min(Z/Y,X/V);if(!Number.isFinite(Q)||Q<=0)return 1;return Math.max(0.01,Q)}var c3={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)c3[`F${_}`]=65470+(_-1);function r3(_){let $=[_?.key,_?.code];for(let X of $)if(X&&Object.prototype.hasOwnProperty.call(c3,X))return c3[X];let j=String(_?.key||""),G=j?j.codePointAt(0):null,Z=G==null?0:G>65535?2:1;if(G!=null&&j.length===Z){if(G<=255)return G;return(16777216|G)>>>0}return null}var o_=Uint8Array,E1=Uint16Array,_7=Int32Array,U2=new o_([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),D2=new o_([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s3=new o_([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),MZ=function(_,$){var j=new E1(31);for(var G=0;G<31;++G)j[G]=$+=1<<_[G-1];var Z=new _7(j[30]);for(var G=1;G<30;++G)for(var X=j[G];X<j[G+1];++X)Z[X]=X-j[G]<<5|G;return{b:j,r:Z}},TZ=MZ(U2,2),wZ=TZ.b,a3=TZ.r;wZ[28]=258,a3[258]=28;var yZ=MZ(D2,0),pU=yZ.b,JZ=yZ.r,t3=new E1(32768);for(K_=0;K_<32768;++K_)r1=(K_&43690)>>1|(K_&21845)<<1,r1=(r1&52428)>>2|(r1&13107)<<2,r1=(r1&61680)>>4|(r1&3855)<<4,t3[K_]=((r1&65280)>>8|(r1&255)<<8)>>1;var r1,K_,n1=function(_,$,j){var G=_.length,Z=0,X=new E1($);for(;Z<G;++Z)if(_[Z])++X[_[Z]-1];var Y=new E1($);for(Z=1;Z<$;++Z)Y[Z]=Y[Z-1]+X[Z-1]<<1;var V;if(j){V=new E1(1<<$);var Q=15-$;for(Z=0;Z<G;++Z)if(_[Z]){var q=Z<<4|_[Z],B=$-_[Z],K=Y[_[Z]-1]++<<B;for(var N=K|(1<<B)-1;K<=N;++K)V[t3[K]>>Q]=q}}else{V=new E1(G);for(Z=0;Z<G;++Z)if(_[Z])V[Z]=t3[Y[_[Z]-1]++]>>15-_[Z]}return V},h$=new o_(288);for(K_=0;K_<144;++K_)h$[K_]=8;var K_;for(K_=144;K_<256;++K_)h$[K_]=9;var K_;for(K_=256;K_<280;++K_)h$[K_]=7;var K_;for(K_=280;K_<288;++K_)h$[K_]=8;var K_,e5=new o_(32);for(K_=0;K_<32;++K_)e5[K_]=5;var K_,rU=n1(h$,9,0),nU=n1(h$,9,1),dU=n1(e5,5,0),oU=n1(e5,5,1),n3=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},S1=function(_,$,j){var G=$/8|0;return(_[G]|_[G+1]<<8)>>($&7)&j},d3=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},$7=function(_){return(_+7)/8|0},t5=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new o_(_.subarray($,j))};var iU=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],L1=function(_,$,j){var G=Error($||iU[_]);if(G.code=_,Error.captureStackTrace)Error.captureStackTrace(G,L1);if(!j)throw G;return G},sU=function(_,$,j,G){var Z=_.length,X=G?G.length:0;if(!Z||$.f&&!$.l)return j||new o_(0);var Y=!j,V=Y||$.i!=2,Q=$.i;if(Y)j=new o_(Z*3);var q=function(X0){var W0=j.length;if(X0>W0){var P0=new o_(Math.max(W0*2,X0));P0.set(j),j=P0}},B=$.f||0,K=$.p||0,N=$.b||0,L=$.l,U=$.d,E=$.m,H=$.n,D=Z*8;do{if(!L){B=S1(_,K,1);var M=S1(_,K+1,3);if(K+=3,!M){var z=$7(K)+4,O=_[z-4]|_[z-3]<<8,x=z+O;if(x>Z){if(Q)L1(0);break}if(V)q(N+O);j.set(_.subarray(z,x),N),$.b=N+=O,$.p=K=x*8,$.f=B;continue}else if(M==1)L=nU,U=oU,E=9,H=5;else if(M==2){var I=S1(_,K,31)+257,J=S1(_,K+10,15)+4,k=I+S1(_,K+5,31)+1;K+=14;var W=new o_(k),T=new o_(19);for(var w=0;w<J;++w)T[s3[w]]=S1(_,K+w*3,7);K+=J*3;var A=n3(T),P=(1<<A)-1,R=n1(T,A,1);for(var w=0;w<k;){var b=R[S1(_,K,P)];K+=b&15;var z=b>>4;if(z<16)W[w++]=z;else{var c=0,r=0;if(z==16)r=3+S1(_,K,3),K+=2,c=W[w-1];else if(z==17)r=3+S1(_,K,7),K+=3;else if(z==18)r=11+S1(_,K,127),K+=7;while(r--)W[w++]=c}}var e=W.subarray(0,I),m=W.subarray(I);E=n3(e),H=n3(m),L=n1(e,E,1),U=n1(m,H,1)}else L1(1);if(K>D){if(Q)L1(0);break}}if(V)q(N+131072);var _0=(1<<E)-1,E0=(1<<H)-1,Z0=K;for(;;Z0=K){var c=L[d3(_,K)&_0],j0=c>>4;if(K+=c&15,K>D){if(Q)L1(0);break}if(!c)L1(2);if(j0<256)j[N++]=j0;else if(j0==256){Z0=K,L=null;break}else{var V0=j0-254;if(j0>264){var w=j0-257,N0=U2[w];V0=S1(_,K,(1<<N0)-1)+wZ[w],K+=N0}var h=U[d3(_,K)&E0],$0=h>>4;if(!h)L1(3);K+=h&15;var m=pU[$0];if($0>3){var N0=D2[$0];m+=d3(_,K)&(1<<N0)-1,K+=N0}if(K>D){if(Q)L1(0);break}if(V)q(N+131072);var Q0=N+V0;if(N<m){var O0=X-m,a=Math.min(m,Q0);if(O0+N<0)L1(3);for(;N<a;++N)j[N]=G[O0+N]}for(;N<Q0;++N)j[N]=j[N-m]}}if($.l=L,$.p=Z0,$.b=N,$.f=B,L)B=1,$.m=E,$.d=U,$.n=H}while(!B);return N!=j.length&&Y?t5(j,0,N):j.subarray(0,N)},N$=function(_,$,j){j<<=$&7;var G=$/8|0;_[G]|=j,_[G+1]|=j>>8},s5=function(_,$,j){j<<=$&7;var G=$/8|0;_[G]|=j,_[G+1]|=j>>8,_[G+2]|=j>>16},o3=function(_,$){var j=[];for(var G=0;G<_.length;++G)if(_[G])j.push({s:G,f:_[G]});var Z=j.length,X=j.slice();if(!Z)return{t:xZ,l:0};if(Z==1){var Y=new o_(j[0].s+1);return Y[j[0].s]=1,{t:Y,l:1}}j.sort(function(x,I){return x.f-I.f}),j.push({s:-1,f:25001});var V=j[0],Q=j[1],q=0,B=1,K=2;j[0]={s:-1,f:V.f+Q.f,l:V,r:Q};while(B!=Z-1)V=j[j[q].f<j[K].f?q++:K++],Q=j[q!=B&&j[q].f<j[K].f?q++:K++],j[B++]={s:-1,f:V.f+Q.f,l:V,r:Q};var N=X[0].s;for(var G=1;G<Z;++G)if(X[G].s>N)N=X[G].s;var L=new E1(N+1),U=e3(j[B-1],L,0);if(U>$){var G=0,E=0,H=U-$,D=1<<H;X.sort(function(I,J){return L[J.s]-L[I.s]||I.f-J.f});for(;G<Z;++G){var M=X[G].s;if(L[M]>$)E+=D-(1<<U-L[M]),L[M]=$;else break}E>>=H;while(E>0){var z=X[G].s;if(L[z]<$)E-=1<<$-L[z]++-1;else++G}for(;G>=0&&E;--G){var O=X[G].s;if(L[O]==$)--L[O],++E}U=$}return{t:new o_(L),l:U}},e3=function(_,$,j){return _.s==-1?Math.max(e3(_.l,$,j+1),e3(_.r,$,j+1)):$[_.s]=j},AZ=function(_){var $=_.length;while($&&!_[--$]);var j=new E1(++$),G=0,Z=_[0],X=1,Y=function(Q){j[G++]=Q};for(var V=1;V<=$;++V)if(_[V]==Z&&V!=$)++X;else{if(!Z&&X>2){for(;X>138;X-=138)Y(32754);if(X>2)Y(X>10?X-11<<5|28690:X-3<<5|12305),X=0}else if(X>3){Y(Z),--X;for(;X>6;X-=6)Y(8304);if(X>2)Y(X-3<<5|8208),X=0}while(X--)Y(Z);X=1,Z=_[V]}return{c:j.subarray(0,G),n:$}},a5=function(_,$){var j=0;for(var G=0;G<$.length;++G)j+=_[G]*$[G];return j},IZ=function(_,$,j){var G=j.length,Z=$7($+2);_[Z]=G&255,_[Z+1]=G>>8,_[Z+2]=_[Z]^255,_[Z+3]=_[Z+1]^255;for(var X=0;X<G;++X)_[Z+X+4]=j[X];return(Z+4+G)*8},kZ=function(_,$,j,G,Z,X,Y,V,Q,q,B){N$($,B++,j),++Z[256];var K=o3(Z,15),N=K.t,L=K.l,U=o3(X,15),E=U.t,H=U.l,D=AZ(N),M=D.c,z=D.n,O=AZ(E),x=O.c,I=O.n,J=new E1(19);for(var k=0;k<M.length;++k)++J[M[k]&31];for(var k=0;k<x.length;++k)++J[x[k]&31];var W=o3(J,7),T=W.t,w=W.l,A=19;for(;A>4&&!T[s3[A-1]];--A);var P=q+5<<3,R=a5(Z,h$)+a5(X,e5)+Y,b=a5(Z,N)+a5(X,E)+Y+14+3*A+a5(J,T)+2*J[16]+3*J[17]+7*J[18];if(Q>=0&&P<=R&&P<=b)return IZ($,B,_.subarray(Q,Q+q));var c,r,e,m;if(N$($,B,1+(b<R)),B+=2,b<R){c=n1(N,L,0),r=N,e=n1(E,H,0),m=E;var _0=n1(T,w,0);N$($,B,z-257),N$($,B+5,I-1),N$($,B+10,A-4),B+=14;for(var k=0;k<A;++k)N$($,B+3*k,T[s3[k]]);B+=3*A;var E0=[M,x];for(var Z0=0;Z0<2;++Z0){var j0=E0[Z0];for(var k=0;k<j0.length;++k){var V0=j0[k]&31;if(N$($,B,_0[V0]),B+=T[V0],V0>15)N$($,B,j0[k]>>5&127),B+=j0[k]>>12}}}else c=rU,r=h$,e=dU,m=e5;for(var k=0;k<V;++k){var N0=G[k];if(N0>255){var V0=N0>>18&31;if(s5($,B,c[V0+257]),B+=r[V0+257],V0>7)N$($,B,N0>>23&31),B+=U2[V0];var h=N0&31;if(s5($,B,e[h]),B+=m[h],h>3)s5($,B,N0>>5&8191),B+=D2[h]}else s5($,B,c[N0]),B+=r[N0]}return s5($,B,c[256]),B+r[256]},aU=new _7([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),xZ=new o_(0),tU=function(_,$,j,G,Z,X){var Y=X.z||_.length,V=new o_(G+Y+5*(1+Math.ceil(Y/7000))+Z),Q=V.subarray(G,V.length-Z),q=X.l,B=(X.r||0)&7;if($){if(B)Q[0]=X.r>>3;var K=aU[$-1],N=K>>13,L=K&8191,U=(1<<j)-1,E=X.p||new E1(32768),H=X.h||new E1(U+1),D=Math.ceil(j/3),M=2*D,z=function(l0){return(_[l0]^_[l0+1]<<D^_[l0+2]<<M)&U},O=new _7(25000),x=new E1(288),I=new E1(32),J=0,k=0,W=X.i||0,T=0,w=X.w||0,A=0;for(;W+2<Y;++W){var P=z(W),R=W&32767,b=H[P];if(E[R]=b,H[P]=R,w<=W){var c=Y-W;if((J>7000||T>24576)&&(c>423||!q)){B=kZ(_,Q,0,O,x,I,k,T,A,W-A,B),T=J=k=0,A=W;for(var r=0;r<286;++r)x[r]=0;for(var r=0;r<30;++r)I[r]=0}var e=2,m=0,_0=L,E0=R-b&32767;if(c>2&&P==z(W-E0)){var Z0=Math.min(N,c)-1,j0=Math.min(32767,W),V0=Math.min(258,c);while(E0<=j0&&--_0&&R!=b){if(_[W+e]==_[W+e-E0]){var N0=0;for(;N0<V0&&_[W+N0]==_[W+N0-E0];++N0);if(N0>e){if(e=N0,m=E0,N0>Z0)break;var h=Math.min(E0,N0-2),$0=0;for(var r=0;r<h;++r){var Q0=W-E0+r&32767,O0=E[Q0],a=Q0-O0&32767;if(a>$0)$0=a,b=Q0}}}R=b,b=E[R],E0+=R-b&32767}}if(m){O[T++]=268435456|a3[e]<<18|JZ[m];var X0=a3[e]&31,W0=JZ[m]&31;k+=U2[X0]+D2[W0],++x[257+X0],++I[W0],w=W+e,++J}else O[T++]=_[W],++x[_[W]]}}for(W=Math.max(W,w);W<Y;++W)O[T++]=_[W],++x[_[W]];if(B=kZ(_,Q,q,O,x,I,k,T,A,W-A,B),!q)X.r=B&7|Q[B/8|0]<<3,B-=7,X.h=H,X.p=E,X.i=W,X.w=w}else{for(var W=X.w||0;W<Y+q;W+=65535){var P0=W+65535;if(P0>=Y)Q[B/8|0]=q,P0=Y;B=IZ(Q,B+1,_.subarray(W,P0))}X.i=Y}return t5(V,0,G+$7(B)+Z)};var CZ=function(){var _=1,$=0;return{p:function(j){var G=_,Z=$,X=j.length|0;for(var Y=0;Y!=X;){var V=Math.min(Y+2655,X);for(;Y<V;++Y)Z+=G+=j[Y];G=(G&65535)+15*(G>>16),Z=(Z&65535)+15*(Z>>16)}_=G,$=Z},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},eU=function(_,$,j,G,Z){if(!Z){if(Z={l:1},$.dictionary){var X=$.dictionary.subarray(-32768),Y=new o_(X.length+_.length);Y.set(X),Y.set(_,X.length),_=Y,Z.w=X.length}}return tU(_,$.level==null?6:$.level,$.mem==null?Z.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,G,Z)};var PZ=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var _D=function(_,$){var j=$.level,G=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=G<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Z=CZ();Z.p($.dictionary),PZ(_,2,Z.d())}},$D=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)L1(6,"invalid zlib data");if((_[1]>>5&1)==+!$)L1(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var i3=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var G=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:G?G.length:0},this.o=new o_(32768),this.p=new o_(0),G)this.o.set(G)}return _.prototype.e=function($){if(!this.ondata)L1(5);if(this.d)L1(4);if(!this.p.length)this.p=$;else if($.length){var j=new o_(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,G=sU(this.p,this.s,this.o);this.ondata(t5(G,j,this.s.b),this.d),this.o=t5(G,this.s.b-32768),this.s.b=this.o.length,this.p=t5(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function RZ(_,$){if(!$)$={};var j=CZ();j.p(_);var G=eU(_,$,$.dictionary?6:2,4);return _D(G,$),PZ(G,G.length-4,j.d()),G}var fZ=function(){function _($,j){i3.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(i3.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray($D(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)L1(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}i3.prototype.c.call(this,j)},_}();var jD=typeof TextDecoder<"u"&&new TextDecoder,GD=0;try{jD.decode(xZ,{stream:!0}),GD=1}catch(_){}var ZD=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],XD=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],YD=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],VD=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],qD=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],QD=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],KD=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],BD=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],uZ=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;uZ[_]=$}function bZ(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function vZ(_){let $=0n,j=bZ(_);for(let G of j)$=$<<8n|BigInt(G);return $}function LD(_,$){let j=new Uint8Array($),G=BigInt(_);for(let Z=$-1;Z>=0;Z-=1)j[Z]=Number(G&0xffn),G>>=8n;return j}function q5(_,$,j){let G=0n;for(let Z of $){let X=BigInt(_)>>BigInt(j-Z)&1n;G=G<<1n|X}return G}function SZ(_,$){let j=28n,G=(1n<<j)-1n,Z=BigInt($%28);return(_<<Z|_>>j-Z)&G}function ND(_){let $=q5(vZ(_),qD,64),j=$>>28n&0x0fffffffn,G=$&0x0fffffffn,Z=[];for(let X of KD){j=SZ(j,X),G=SZ(G,X);let Y=j<<28n|G;Z.push(q5(Y,QD,56))}return Z}function FD(_){let $=0n;for(let j=0;j<8;j+=1){let G=BigInt((7-j)*6),Z=Number(_>>G&0x3fn),X=(Z&32)>>4|Z&1,Y=Z>>1&15;$=$<<4n|BigInt(BD[j][X][Y])}return $}function UD(_,$){let j=q5(_,YD,32)^BigInt($),G=FD(j);return q5(G,VD,32)}function gZ(_,$){let j=ND($),G=q5(vZ(_),ZD,64),Z=G>>32n&0xffffffffn,X=G&0xffffffffn;for(let V of j){let Q=X,q=(Z^UD(X,V))&0xffffffffn;Z=Q,X=q}let Y=X<<32n|Z;return LD(q5(Y,XD,64),8)}function DD(_){let $=String(_??""),j=new Uint8Array(8);for(let G=0;G<8;G+=1){let Z=G<$.length?$.charCodeAt(G)&255:0;j[G]=uZ[Z]}return j}function mZ(_,$){let j=bZ($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let G=DD(_),Z=new Uint8Array(16);return Z.set(gZ(j.slice(0,8),G),0),Z.set(gZ(j.slice(8,16),G),8),Z}var g1="vnc";function HD(_){return Number(_)}function ED(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Z)=>Z.trim()).filter((Z)=>Z.length>0):[],j=[],G=new Set;for(let Z of $){let X=HD(Z);if(!Number.isFinite(X))continue;let Y=Number(X);if(!G.has(Y))j.push(Y),G.add(Y)}if(j.length>0)return j;return[5,2,1,0,-223]}function B5(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function WD(_,$){let j=B5(_),G=B5($);if(!j.byteLength)return new Uint8Array(G);if(!G.byteLength)return new Uint8Array(j);let Z=new Uint8Array(j.byteLength+G.byteLength);return Z.set(j,0),Z.set(G,j.byteLength),Z}function OD(_){let $=0;for(let Z of _||[])$+=Z?.byteLength||0;let j=new Uint8Array($),G=0;for(let Z of _||[]){let X=B5(Z);j.set(X,G),G+=X.byteLength}return j}function zD(){return(_)=>{let $=B5(_);try{let j=[],G=new fZ((Z)=>{j.push(new Uint8Array(Z))});if(G.push($,!0),G.err)throw Error(G.msg||"zlib decompression error");return OD(j)}catch(j){try{let G=RZ($);return G instanceof Uint8Array?G:new Uint8Array(G)}catch(G){let Z=G instanceof Error?G.message:"unexpected EOF";throw Error(`unexpected EOF: ${Z}`)}}}}function JD(_){return new TextEncoder().encode(String(_||""))}function Q5(_){return new TextDecoder().decode(B5(_))}function AD(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function kD(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function cZ(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function MD(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function TD(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),G=new DataView(j);G.setUint8(0,2),G.setUint8(1,0),G.setUint16(2,$.length,!1);let Z=4;for(let X of $)G.setInt32(Z,Number(X||0),!1),Z+=4;return new Uint8Array(j)}function hZ(_,$,j,G=0,Z=0){let X=new ArrayBuffer(10),Y=new DataView(X);return Y.setUint8(0,3),Y.setUint8(1,_?1:0),Y.setUint16(2,G,!1),Y.setUint16(4,Z,!1),Y.setUint16(6,Math.max(0,$||0),!1),Y.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(X)}function K5(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function pZ(_,$,j,G){if(j===1)return _[$];if(j===2)return G?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return G?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return G?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function wD(_,$,j,G){let Z=G||L5,X=B5(_),Y=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8)),V=Math.max(0,$||0)*Math.max(0,j||0)*Y;if(X.byteLength<V)throw Error(`Incomplete raw rectangle payload: expected ${V} byte(s), got ${X.byteLength}`);if(!Z.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let Q=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),q=0,B=0;for(let K=0;K<Math.max(0,$||0)*Math.max(0,j||0);K+=1){let N=pZ(X,q,Y,Z.bigEndian),L=K5(N>>>Z.redShift&Z.redMax,Z.redMax),U=K5(N>>>Z.greenShift&Z.greenMax,Z.greenMax),E=K5(N>>>Z.blueShift&Z.blueMax,Z.blueMax);Q[B]=L,Q[B+1]=U,Q[B+2]=E,Q[B+3]=255,q+=Y,B+=4}return Q}function F$(_,$,j){let G=j||L5,Z=Math.max(1,Math.floor(Number(G.bitsPerPixel||0)/8));if(_.byteLength<$+Z)return null;let X=pZ(_,$,Z,G.bigEndian);return{rgba:[K5(X>>>G.redShift&G.redMax,G.redMax),K5(X>>>G.greenShift&G.greenMax,G.greenMax),K5(X>>>G.blueShift&G.blueMax,G.blueMax),255],bytesPerPixel:Z}}function l$(_,$,j,G,Z,X,Y){if(!Y)return;for(let V=0;V<X;V+=1)for(let Q=0;Q<Z;Q+=1){let q=((G+V)*$+(j+Q))*4;_[q]=Y[0],_[q+1]=Y[1],_[q+2]=Y[2],_[q+3]=Y[3]}}function rZ(_,$,j,G,Z,X,Y){for(let V=0;V<X;V+=1){let Q=V*Z*4,q=((G+V)*$+j)*4;_.set(Y.subarray(Q,Q+Z*4),q)}}function lZ(_,$){let j=$,G=1;while(!0){if(_.byteLength<j+1)return null;let Z=_[j++];if(G+=Z,Z!==255)break}return{consumed:j-$,runLength:G}}function yD(_,$,j,G,Z,X,Y){let V=Z||L5,Q=Math.max(1,Math.floor(Number(V.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let q=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+q)return null;let B=_.slice($+4,$+4+q),K;try{K=Y(B)}catch{return{consumed:4+q,skipped:!0}}let N=0,L=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4);for(let U=0;U<G;U+=64){let E=Math.min(64,G-U);for(let H=0;H<j;H+=64){let D=Math.min(64,j-H);if(K.byteLength<N+1)return null;let M=K[N++],z=M&127,O=(M&128)!==0;if(!O&&z===0){let x=D*E*Q;if(K.byteLength<N+x)return null;let I=X(K.slice(N,N+x),D,E,V);N+=x,rZ(L,j,H,U,D,E,I);continue}if(!O&&z===1){let x=F$(K,N,V);if(!x)return null;N+=x.bytesPerPixel,l$(L,j,H,U,D,E,x.rgba);continue}if(!O&&z>1&&z<=16){let x=[];for(let W=0;W<z;W+=1){let T=F$(K,N,V);if(!T)return null;N+=T.bytesPerPixel,x.push(T.rgba)}let I=z<=2?1:z<=4?2:4,J=Math.ceil(D*I/8),k=J*E;if(K.byteLength<N+k)return null;for(let W=0;W<E;W+=1){let T=N+W*J;for(let w=0;w<D;w+=1){let A=w*I,P=T+(A>>3),R=8-I-(A&7),b=K[P]>>R&(1<<I)-1;l$(L,j,H+w,U+W,1,1,x[b])}}N+=k;continue}if(O&&z===0){let x=0,I=0;while(I<E){let J=F$(K,N,V);if(!J)return null;N+=J.bytesPerPixel;let k=lZ(K,N);if(!k)return null;N+=k.consumed;for(let W=0;W<k.runLength;W+=1)if(l$(L,j,H+x,U+I,1,1,J.rgba),x+=1,x>=D){if(x=0,I+=1,I>=E)break}}continue}if(O&&z>0){let x=[];for(let k=0;k<z;k+=1){let W=F$(K,N,V);if(!W)return null;N+=W.bytesPerPixel,x.push(W.rgba)}let I=0,J=0;while(J<E){if(K.byteLength<N+1)return null;let k=K[N++],W=k,T=1;if(k&128){W=k&127;let A=lZ(K,N);if(!A)return null;N+=A.consumed,T=A.runLength}let w=x[W];if(!w)return null;for(let A=0;A<T;A+=1)if(l$(L,j,H+I,U+J,1,1,w),I+=1,I>=D){if(I=0,J+=1,J>=E)break}}continue}return{consumed:4+q,skipped:!0}}}return{consumed:4+q,rgba:L,decompressed:K}}function ID(_,$,j,G,Z){let X=Z||L5,Y=Math.max(1,Math.floor(Number(X.bitsPerPixel||0)/8));if(_.byteLength<$+4+Y)return null;let Q=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),q=4+Y+Q*(Y+8);if(_.byteLength<$+q)return null;let B=$+4,K=F$(_,B,X);if(!K)return null;B+=K.bytesPerPixel;let N=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4);l$(N,j,0,0,j,G,K.rgba);for(let L=0;L<Q;L+=1){let U=F$(_,B,X);if(!U)return null;if(B+=U.bytesPerPixel,_.byteLength<B+8)return null;let E=new DataView(_.buffer,_.byteOffset+B,8),H=E.getUint16(0,!1),D=E.getUint16(2,!1),M=E.getUint16(4,!1),z=E.getUint16(6,!1);B+=8,l$(N,j,H,D,M,z,U.rgba)}return{consumed:B-$,rgba:N}}function xD(_,$,j,G,Z,X){let Y=Z||L5,V=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8)),Q=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4),q=$,B=[0,0,0,255],K=[255,255,255,255];for(let N=0;N<G;N+=16){let L=Math.min(16,G-N);for(let U=0;U<j;U+=16){let E=Math.min(16,j-U);if(_.byteLength<q+1)return null;let H=_[q++];if(H&1){let D=E*L*V;if(_.byteLength<q+D)return null;let M=X(_.slice(q,q+D),E,L,Y);q+=D,rZ(Q,j,U,N,E,L,M);continue}if(H&2){let D=F$(_,q,Y);if(!D)return null;B=D.rgba,q+=D.bytesPerPixel}if(l$(Q,j,U,N,E,L,B),H&4){let D=F$(_,q,Y);if(!D)return null;K=D.rgba,q+=D.bytesPerPixel}if(H&8){if(_.byteLength<q+1)return null;let D=_[q++];for(let M=0;M<D;M+=1){let z=K;if(H&16){let T=F$(_,q,Y);if(!T)return null;z=T.rgba,q+=T.bytesPerPixel}if(_.byteLength<q+2)return null;let O=_[q++],x=_[q++],I=O>>4,J=O&15,k=(x>>4)+1,W=(x&15)+1;l$(Q,j,U+I,N+J,k,W,z)}}}}return{consumed:q-$,rgba:Q}}var L5={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class H2{protocol=g1;state;framebufferWidth;framebufferHeight;serverName;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:wD,this.pipeline=_.pipeline||null,this.encodings=ED(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...L5},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:zD()}receive(_){if(_)this.buffer=WD(this.buffer,_);let $=[],j=[],G=!0;while(G){if(G=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Z=this.consume(12),X=Q5(Z),Y=AD(X);if(!Y)throw Error(`Unsupported RFB version banner: ${X||"<empty>"}`);this.serverVersion=Y,this.clientVersionText=kD(Y),j.push(JD(this.clientVersionText)),$.push({type:"protocol-version",protocol:g1,server:Y.text.trim(),client:this.clientVersionText.trim()}),this.state=Y.minor>=7?"security-types":"security-type-33",G=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<5)break;let Q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+Q)break;this.consume(1);let q=Q5(this.consume(4+Q).slice(4));throw Error(q||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Z)break;this.consume(1);let X=Array.from(this.consume(Z));$.push({type:"security-types",protocol:g1,types:X});let Y=null;if(X.includes(2)&&this.password!==null)Y=2;else if(X.includes(1))Y=1;else if(X.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${X.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(Y)),$.push({type:"security-selected",protocol:g1,securityType:Y,label:Y===2?"VNC Authentication":"None"}),this.state=Y===2?"security-challenge":"security-result",G=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let X=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),X===0){if(this.buffer.byteLength<4)break;let V=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+V)break;let Q=Q5(this.consume(4+V).slice(4));throw Error(Q||"VNC server rejected the connection.")}if(X===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:g1,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",G=!0;continue}if(X!==1)throw Error(`Unsupported VNC security type ${X}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:g1,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",G=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Z=this.consume(16);j.push(mZ(this.password,Z)),this.state="security-result",G=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let X=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),X!==0){if(this.buffer.byteLength>=4){let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+Y){let V=Q5(this.consume(4+Y).slice(4));throw Error(V||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:g1,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",G=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Z=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),X=Z.getUint16(0,!1),Y=Z.getUint16(2,!1),V=cZ(Z,4),Q=Z.getUint32(20,!1);if(this.buffer.byteLength<24+Q)break;let q=this.consume(24),B=new DataView(q.buffer,q.byteOffset,q.byteLength);if(this.framebufferWidth=B.getUint16(0,!1),this.framebufferHeight=B.getUint16(2,!1),this.serverPixelFormat=cZ(B,4),this.serverName=Q5(this.consume(Q)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(MD(this.clientPixelFormat)),j.push(TD(this.encodings)),j.push(hZ(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:g1,width:X,height:Y,name:this.serverName,pixelFormat:V}),G=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),V=4,Q=[],q=!1,B=!!this.pipeline;for(let N=0;N<Y;N+=1){if(this.buffer.byteLength<V+12){q=!0;break}let L=new DataView(this.buffer.buffer,this.buffer.byteOffset+V,12),U=L.getUint16(0,!1),E=L.getUint16(2,!1),H=L.getUint16(4,!1),D=L.getUint16(6,!1),M=L.getInt32(8,!1);if(V+=12,M===0){let z=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),O=H*D*z;if(this.buffer.byteLength<V+O){q=!0;break}let x=this.buffer.slice(V,V+O);if(V+=O,B)this.pipeline.processRawRect(x,U,E,H,D,this.clientPixelFormat),Q.push({kind:"pipeline",x:U,y:E,width:H,height:D});else Q.push({kind:"rgba",x:U,y:E,width:H,height:D,rgba:this.decodeRawRect(x,H,D,this.clientPixelFormat)});continue}if(M===2){let z=ID(this.buffer,V,H,D,this.clientPixelFormat);if(!z){q=!0;break}if(B){let O=this.buffer.slice(V,V+z.consumed);this.pipeline.processRreRect(O,U,E,H,D,this.clientPixelFormat),Q.push({kind:"pipeline",x:U,y:E,width:H,height:D})}else Q.push({kind:"rgba",x:U,y:E,width:H,height:D,rgba:z.rgba});V+=z.consumed;continue}if(M===1){if(this.buffer.byteLength<V+4){q=!0;break}let z=new DataView(this.buffer.buffer,this.buffer.byteOffset+V,4),O=z.getUint16(0,!1),x=z.getUint16(2,!1);if(V+=4,B)this.pipeline.processCopyRect(U,E,H,D,O,x),Q.push({kind:"pipeline",x:U,y:E,width:H,height:D});else Q.push({kind:"copy",x:U,y:E,width:H,height:D,srcX:O,srcY:x});continue}if(M===16){let z=yD(this.buffer,V,H,D,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!z){q=!0;break}if(V+=z.consumed,z.skipped)continue;if(B&&z.decompressed)this.pipeline.processZrleTileData(z.decompressed,U,E,H,D,this.clientPixelFormat),Q.push({kind:"pipeline",x:U,y:E,width:H,height:D});else Q.push({kind:"rgba",x:U,y:E,width:H,height:D,rgba:z.rgba});continue}if(M===5){let z=xD(this.buffer,V,H,D,this.clientPixelFormat,this.decodeRawRect);if(!z){q=!0;break}if(B){let O=this.buffer.slice(V,V+z.consumed);this.pipeline.processHextileRect(O,U,E,H,D,this.clientPixelFormat),Q.push({kind:"pipeline",x:U,y:E,width:H,height:D})}else Q.push({kind:"rgba",x:U,y:E,width:H,height:D,rgba:z.rgba});V+=z.consumed;continue}if(M===-223){if(this.framebufferWidth=H,this.framebufferHeight=D,B)this.pipeline.initFramebuffer(H,D);Q.push({kind:"resize",x:U,y:E,width:H,height:D});continue}throw Error(`Unsupported VNC rectangle encoding ${M}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(q)break;this.consume(V);let K={type:"framebuffer-update",protocol:g1,width:this.framebufferWidth,height:this.framebufferHeight,rects:Q};if(B)K.framebuffer=this.pipeline.getFramebuffer();$.push(K),j.push(hZ(!0,this.framebufferWidth,this.framebufferHeight)),G=!0;continue}if(Z===2){this.consume(1),$.push({type:"bell",protocol:g1}),G=!0;continue}if(Z===3){if(this.buffer.byteLength<8)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+Y)break;this.consume(8);let V=Q5(this.consume(Y));$.push({type:"clipboard",protocol:g1,text:V}),G=!0;continue}throw Error(`Unsupported VNC server message type ${Z}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var o1="piclaw://vnc";function oZ(_){let $=String(_||"").trim();return $?`${o1}/${encodeURIComponent($)}`:o1}var j7="piclaw:vnc-popout:",CD=60000;function iZ(_=globalThis){try{return _?.localStorage??null}catch{return null}}function PD(_=globalThis){let $=vG(_);if($)return $;return`vnc-popout-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function sZ(_,$=Date.now()){if(!_||typeof _.key!=="function"||!Number.isFinite(_.length))return;let j=[];for(let G=0;G<Number(_.length||0);G+=1){let Z=_.key(G);if(Z&&Z.startsWith(j7))j.push(Z)}for(let G of j)try{let Z=_.getItem(G);if(!Z){_.removeItem(G);continue}let X=JSON.parse(Z),Y=Number(X?.expiresAt||0);if(!Number.isFinite(Y)||Y<=$)_.removeItem(G)}catch{V2(_,G)}}function RD(_,$=globalThis,j=Date.now()){let G=E4(_);if(G===null)return null;let Z=iZ($);if(!Z)return null;sZ(Z,j);let X=PD($);try{return Z.setItem(`${j7}${X}`,JSON.stringify({password:G,expiresAt:j+CD})),X}catch{return null}}function fD(_,$=globalThis,j=Date.now()){let G=String(_||"").trim();if(!G)return null;let Z=iZ($);if(!Z)return null;sZ(Z,j);let X=`${j7}${G}`;try{let Y=Z.getItem(X);if(Z.removeItem(X),!Y)return null;let V=JSON.parse(Y),Q=Number(V?.expiresAt||0);if(!Number.isFinite(Q)||Q<=j)return null;return E4(V?.password)}catch{try{Z.removeItem(X)}catch{}return null}}function SD(_,$,j=globalThis){let G=String(_||"").trim();if(!G)return null;let Z={pane_path:oZ(G)},X=RD($,j);if(X)Z.vnc_secret=X;return Z}function gD(_){let $=String(_||"");if($===o1)return null;if(!$.startsWith(`${o1}/`))return null;let j=$.slice(`${o1}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function d1(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function uD(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),G=await j.json().catch(()=>({}));if(!j.ok)throw Error(G?.error||`HTTP ${j.status}`);return G}function bD(){if(typeof window>"u")return!1;try{let _=new URLSearchParams(window.location.search).get("pane_popout"),$=String(_||"").trim().toLowerCase();return $==="1"||$==="true"||$==="yes"}catch{return!1}}function vD(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",G=new URL(`${j}//${window.location.host}/vnc/ws`);if(G.searchParams.set("target",String(_||"")),$)G.searchParams.set("handoff",String($));return G.toString()}function mD(_){return String(_||"").trim()||"localhost"}function cD(_,$){let j=mD(_),G=Math.floor(Number($||0));if(!Number.isFinite(G)||G<=0||G>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${G}`}function hD(_={}){let $=Boolean(_?.enabled),j=Boolean(_?.directConnectEnabled);if((Array.isArray(_?.targets)?_.targets.length:Number(_?.targetCount||0))>0)return{title:"",body:""};if(j)return{title:"No saved VNC targets yet.",body:"Connect directly above."};if(!$)return{title:"VNC is not configured yet.",body:"No saved targets are available and direct connect is disabled on this host."};return{title:"No saved VNC targets yet.",body:"This host has no configured VNC targets, and direct connect is disabled."}}function nZ(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}function dZ(_){if(!String(_?.handoffToken||"").trim())return!1;return Number(_?.bytesIn||0)<=0&&!Boolean(_?.hasRenderedFrame)&&Number(_?.reconnectAttempts||0)<=0}function lD(_,$){if(!_||!$||typeof $.appendChild!=="function")return!1;try{$.innerHTML=""}catch{}return $.appendChild(_),!0}class aZ{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pointerInputAbortController=null;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=gD($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=nZ("vnc_handoff");let j=nZ("vnc_secret"),G=fD(j);if(G!==null)this.authPassword=G;this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(_=null){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let $=Math.min(8000,1500+this.reconnectAttempts*1000),j=Number.isFinite(_)?Math.max(0,Number(_)):$;this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},j)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=null;try{this.pointerInputAbortController?.abort?.()}catch{}if(this.pointerInputAbortController=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled),G=hD({enabled:_?.enabled,directConnectEnabled:j,targets:$});this.bodyEl.innerHTML=`
            <div style="width:100%;height:100%;min-height:0;display:grid;align-content:start;justify-items:center;gap:16px;overflow:auto;padding:24px;box-sizing:border-box;">
                ${j?`
                    <div style="width:min(540px,100%);padding:16px 16px 18px;border:1px solid var(--border-color);border-radius:10px;background:transparent;display:grid;gap:12px;box-shadow:none;">
                        <div style="display:grid;gap:6px;">
                            <div style="font-size:18px;font-weight:700;">Connect to VNC</div>
                            <div style="font-size:12px;color:var(--text-secondary);">Enter a server target to start a direct session.</div>
                        </div>
                        <div style="display:grid;gap:10px;align-items:end;">
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Server</span>
                                <input type="text" data-vnc-direct-host value="localhost" placeholder="localhost" spellcheck="false" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;color:inherit;" />
                            </label>
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Port</span>
                                <input type="number" data-vnc-direct-port min="1" max="65535" step="1" placeholder="5900" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;color:inherit;" />
                            </label>
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Password</span>
                                <input type="password" data-vnc-direct-password placeholder="Optional" autocomplete="current-password" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;color:inherit;" />
                            </label>
                            <button type="button" data-direct-open-tab="1" style="padding:10px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;cursor:pointer;color:inherit;min-height:40px;font-weight:500;">Connect</button>
                        </div>
                    </div>
                `:""}
                ${$.length?`
                    <div style="width:min(100%,900px);min-height:0;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));align-content:start;">
                        ${$.map((X)=>`
                            <div style="text-align:left;padding:14px;border:1px solid var(--border-color);border-radius:10px;background:transparent;color:inherit;display:flex;flex-direction:column;gap:10px;">
                                <div>
                                    <div style="font-weight:600;margin-bottom:6px;">${d1(X.label||X.id)}</div>
                                    <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);">${d1(X.id)}</div>
                                    <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${X.readOnly?"Read-only target":"Interactive target"}</div>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                                    <button type="button" data-target-open-tab="${d1(X.id)}" data-target-label="${d1(X.label||X.id)}" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;cursor:pointer;color:inherit;">Connect</button>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                `:`
                    <div style="min-height:0;display:grid;place-items:center;justify-items:center;">
                        <div style="width:min(100%,540px);text-align:center;padding:24px 20px;border:1px dashed var(--border-color);border-radius:10px;background:transparent;font-size:13px;color:var(--text-secondary);line-height:1.5;display:grid;gap:6px;">
                            <div style="font-weight:600;color:var(--text-primary);">${d1(G.title)}</div>
                            <div>${d1(G.body)}</div>
                        </div>
                    </div>
                `}
            </div>
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Z=()=>{let X=cD(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!X)return;this.authPassword=E4(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(X,X)};this.directHostInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.directPortInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.directPasswordInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Z());for(let X of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))X.addEventListener("click",()=>{let Y=X.getAttribute("data-target-open-tab"),V=X.getAttribute("data-target-label")||Y||"VNC";if(!Y)return;this.openTargetTab(Y,V)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target",G=bD();if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=G?`
                <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:6px;">
                    <div data-vnc-session-chrome style="padding:6px 8px;border:1px solid var(--border-color);border-radius:8px;background:transparent;display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
                        <div data-display-info style="min-width:0;flex:1 1 240px;font-size:12px;color:var(--text-secondary);line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Negotiating remote display…</div>
                        <input type="password" data-vnc-password placeholder="Password" autocomplete="current-password" style="width:150px;max-width:100%;padding:6px 8px;border:1px solid var(--border-color);border-radius:6px;background:transparent;color:inherit;" />
                        <button type="button" data-vnc-reconnect="1" style="padding:6px 10px;border:1px solid var(--border-color);border-radius:6px;background:transparent;cursor:pointer;color:inherit;">Reconnect</button>
                    </div>
                    <div data-display-stage style="min-height:0;height:100%;border:1px solid var(--border-color);border-radius:8px;background:#0a0a0a;display:flex;align-items:center;justify-content:center;padding:4px;position:relative;overflow:hidden;">
                        <canvas data-display-canvas tabindex="0" style="display:none;max-width:100%;max-height:100%;width:auto;height:auto;image-rendering:auto;box-shadow:none;border-radius:2px;background:#000;"></canvas>
                        <div data-display-placeholder style="max-width:520px;text-align:center;color:#d7d7d7;line-height:1.5;">
                            <div style="font-weight:600;font-size:14px;margin-bottom:6px;">${d1(j)}</div>
                            <div style="font-size:12px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                        </div>
                    </div>
                </div>
            `:`
                <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:12px;">
                    <div data-vnc-session-chrome style="padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:transparent;display:grid;gap:10px;">
                        <div style="display:grid;gap:4px;min-width:0;">
                            <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${d1($.id||this.targetId||"")} · ${$.read_only?"read-only":"interactive"} · websocket → TCP proxy</div>
                            <div data-display-info style="font-size:13px;color:var(--text-primary);line-height:1.4;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Negotiating remote display…</div>
                            <div data-display-meta style="font:11px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"></div>
                        </div>
                        <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:end;">
                            <label style="display:grid;gap:4px;min-width:160px;flex:1 1 180px;">
                                <span style="font-size:11px;color:var(--text-secondary);">VNC password</span>
                                <input type="password" data-vnc-password placeholder="Optional" autocomplete="current-password" style="width:100%;padding:8px 10px;border:1px solid var(--border-color);border-radius:8px;background:transparent;color:inherit;" />
                            </label>
                            <button type="button" data-vnc-reconnect="1" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;cursor:pointer;color:inherit;">Reconnect</button>
                            <button type="button" data-open-target-picker="1" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;cursor:pointer;color:inherit;">Target</button>
                        </div>
                    </div>
                    <div data-display-stage style="min-height:0;height:100%;border:1px solid var(--border-color);border-radius:10px;background:#0a0a0a;display:flex;align-items:center;justify-content:center;padding:8px;position:relative;overflow:hidden;">
                        <canvas data-display-canvas tabindex="0" style="display:none;max-width:100%;max-height:100%;width:auto;height:auto;image-rendering:auto;box-shadow:none;border-radius:4px;background:#000;"></canvas>
                        <div data-display-placeholder style="max-width:520px;text-align:center;color:#d7d7d7;line-height:1.6;">
                            <div style="font-weight:700;font-size:18px;margin-bottom:8px;">${d1(j)}</div>
                            <div style="font-size:13px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                        </div>
                    </div>
                </div>
            `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=E4(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=E4(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",G=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Z=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",X=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${G}${Z}${X}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let G=j?.reveal===!0;if(this.canvas.style.display=G||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=G||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let G=zZ($,j,this.canvas.width,this.canvas.height);this.displayScale=G,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*G))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*G))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return p3(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(F2(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none";try{this.pointerInputAbortController?.abort?.()}catch{}let _=new AbortController;this.pointerInputAbortController=_;let $=_.signal,j=this.canvas.ownerDocument||document,G=j.defaultView||window,Z=new Map,X=new Map,Y=new Map,V=new Map,Q=new Set,q=!1,B=(J)=>this.getFramebufferPointFromEvent(J)||X.get(J?.pointerId)||{x:0,y:0},K=(J)=>{if(!J||!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let k=this.canvas.getBoundingClientRect?.();if(!k||!k.width||!k.height)return null;return p3(J.clientX,J.clientY,k,this.protocol.framebufferWidth,this.protocol.framebufferHeight)},N=(J)=>{let k=Y.get(J);if(k)G.clearTimeout(k),Y.delete(J)},L=(J)=>{let k=V.get(J);if(k?.holdTimer)G.clearTimeout(k.holdTimer);V.delete(J)},U=()=>{for(let J of V.keys())L(J)},E=()=>{if(!Q.size)q=!1},H=(J,k=80)=>{let W=String(J?.pointerType||"").toLowerCase();if(!HZ(W))return;let T=Number(J?.pointerId);if(!Number.isFinite(T))return;N(T);let w=G.setTimeout(()=>{if(Y.delete(T),!Z.has(T)&&!this.pointerButtonMask)return;M({pointerId:T,pointerType:W,type:"pointercancel",clientX:J?.clientX,clientY:J?.clientY},{resetAll:!0})},k);Y.set(T,w)},D=(J=null)=>{if(!Z.size&&!this.pointerButtonMask&&!V.size)return;for(let W of Y.keys())N(W);U(),Q.clear(),q=!1;let k=J||X.values().next().value||{x:0,y:0};Z.clear(),X.clear(),this.pointerButtonMask=0,this.sendPointerEvent(0,k.x,k.y)},M=(J,k={})=>{if(k.resetAll){let P=Number(J?.pointerId);N(P),D(B(J));try{this.canvas?.releasePointerCapture?.(P)}catch{}return}let W=B(J),T=Number(J?.pointerId);N(T),L(T),Q.delete(T),E();let w=Z.has(T),A=Z.get(T)??h3(J);if(!w&&!A&&!this.pointerButtonMask)return;if(Z.delete(T),X.delete(T),A)this.pointerButtonMask&=~A;else if(!Z.size)this.pointerButtonMask=0;this.sendPointerEvent(this.pointerButtonMask,W.x,W.y);try{this.canvas?.releasePointerCapture?.(T)}catch{}},z=(J)=>{if(q)return;let k=V.get(J);if(!k||k.dragActivated)return;k.dragActivated=!0,k.holdTimer=null;let W=c$(0);if(!W)return;Z.set(J,(Z.get(J)??0)|W),this.pointerButtonMask|=W,H({pointerId:J,pointerType:"touch",clientX:k.lastClientX,clientY:k.lastClientY}),this.sendPointerEvent(this.pointerButtonMask,k.lastPoint.x,k.lastPoint.y)},O=(J,k,W={})=>{let T=V.get(J);if(!T)return!1;let w=k||T.lastPoint||{x:0,y:0},A=Number.isFinite(W.clientX)?Number(W.clientX):T.lastClientX,P=Number.isFinite(W.clientY)?Number(W.clientY):T.lastClientY;if(Q.delete(J),W.cancelled||q){if(L(J),E(),Z.has(J)||this.pointerButtonMask)D(w);return!0}if(T.dragActivated||Z.has(J))return M({pointerId:J,pointerType:"touch",type:"pointerup",clientX:A,clientY:P}),E(),!0;let R=Date.now()-T.startedAt,b=DZ({startX:T.startClientX,startY:T.startClientY,clientX:A,clientY:P,elapsedMs:R});if(N(J),L(J),X.delete(J),E(),b){let c=c$(0);this.sendPointerEvent(c,w.x,w.y),this.sendPointerEvent(0,w.x,w.y)}else this.sendPointerEvent(this.pointerButtonMask,w.x,w.y);return!0};this.canvas.addEventListener("contextmenu",(J)=>{J.preventDefault()},{signal:$}),this.canvas.addEventListener("pointermove",(J)=>{let k=this.getFramebufferPointFromEvent(J);if(!k)return;let W=String(J?.pointerType||"").toLowerCase(),T=p1(W);if(X.set(J.pointerId,k),T){let w=V.get(J.pointerId);if(w){if(w.lastClientX=Number(J?.clientX||0),w.lastClientY=Number(J?.clientY||0),w.lastPoint=k,!w.dragActivated&&l3({startX:w.startClientX,startY:w.startClientY,clientX:w.lastClientX,clientY:w.lastClientY}))L(J.pointerId),V.set(J.pointerId,{...w,holdTimer:null,dragActivated:!1});if(!w.dragActivated){this.sendPointerEvent(this.pointerButtonMask,k.x,k.y);return}}if(q)return}if(Z.has(J.pointerId)&&H4(J)){M(J,{resetAll:!0});return}if(this.pointerButtonMask&&!Z.has(J.pointerId)&&H4(J)){D(k);return}if(Z.has(J.pointerId))H(J);this.sendPointerEvent(this.pointerButtonMask,k.x,k.y)},{signal:$}),this.canvas.addEventListener("pointerdown",(J)=>{let k=this.getFramebufferPointFromEvent(J);if(!k)return;let W=String(J?.pointerType||"").toLowerCase(),T=p1(W);if(J.preventDefault(),this.canvas?.focus?.(),X.set(J.pointerId,k),T){if(Q.add(J.pointerId),Q.size>1){let P=[...Q];q=!0,D(k);for(let R of P)Q.add(R);q=!0;return}L(J.pointerId);let A={startClientX:Number(J?.clientX||0),startClientY:Number(J?.clientY||0),lastClientX:Number(J?.clientX||0),lastClientY:Number(J?.clientY||0),startedAt:Date.now(),lastPoint:k,holdTimer:null,dragActivated:!1};A.holdTimer=G.setTimeout(()=>{z(J.pointerId)},260),V.set(J.pointerId,A),this.sendPointerEvent(this.pointerButtonMask,k.x,k.y);return}if(W==="mouse")try{this.canvas?.setPointerCapture?.(J.pointerId)}catch{}let w=h3(J);if(!w)return;Z.set(J.pointerId,(Z.get(J.pointerId)??0)|w),this.pointerButtonMask|=w,H(J),this.sendPointerEvent(this.pointerButtonMask,k.x,k.y)},{signal:$,passive:!1}),this.canvas.addEventListener("pointerup",(J)=>{if(J.preventDefault(),p1(J?.pointerType)){let k=B(J);if(O(J.pointerId,k,{clientX:J?.clientX,clientY:J?.clientY}))return}M(J)},{signal:$,passive:!1}),this.canvas.addEventListener("pointercancel",(J)=>{if(J.preventDefault(),p1(J?.pointerType)){let k=B(J);if(O(J.pointerId,k,{clientX:J?.clientX,clientY:J?.clientY,cancelled:!0}))return}M(J,{resetAll:!0})},{signal:$,passive:!1}),this.canvas.addEventListener("pointerleave",(J)=>{if(V.has(J.pointerId)&&p1(J?.pointerType)){O(J.pointerId,B(J),{clientX:J?.clientX,clientY:J?.clientY,cancelled:!0});return}if(!Z.has(J.pointerId))return;if(!H4(J))return;M(J,{resetAll:!0})},{signal:$}),this.canvas.addEventListener("pointerout",(J)=>{if(V.has(J.pointerId)&&p1(J?.pointerType)){O(J.pointerId,B(J),{clientX:J?.clientX,clientY:J?.clientY,cancelled:!0});return}if(!Z.has(J.pointerId))return;if(!H4(J))return;M(J,{resetAll:!0})},{signal:$}),this.canvas.addEventListener("lostpointercapture",(J)=>{M(J,{resetAll:!0})},{signal:$}),G.addEventListener("pointermove",(J)=>{if(!Z.size&&!this.pointerButtonMask||!H4(J))return;if(!Z.has(J.pointerId)&&!this.pointerButtonMask)return;M(J,{resetAll:!0})},{signal:$}),G.addEventListener("pointerup",(J)=>{if(!Z.has(J.pointerId)&&!this.pointerButtonMask&&!V.has(J.pointerId))return;if(J.preventDefault?.(),p1(J?.pointerType)){let k=B(J);if(O(J.pointerId,k,{clientX:J?.clientX,clientY:J?.clientY}))return}M(J,{resetAll:!Z.has(J.pointerId)})},{signal:$,passive:!1}),G.addEventListener("pointercancel",(J)=>{if(!Z.has(J.pointerId)&&!this.pointerButtonMask&&!V.has(J.pointerId))return;if(J.preventDefault?.(),p1(J?.pointerType)){let k=B(J);if(O(J.pointerId,k,{clientX:J?.clientX,clientY:J?.clientY,cancelled:!0}))return}M(J,{resetAll:!0})},{signal:$,passive:!1});let x=(J)=>{if(!Z.size&&!this.pointerButtonMask&&!V.size)return;if(!UZ(J))return;let k=J?.changedTouches?.[0]||J?.touches?.[0]||null,W=K(k)||X.values().next().value||V.values().next().value?.lastPoint||{x:0,y:0};if(!Z.size&&!this.pointerButtonMask&&V.size===1){let[T]=V.entries().next().value||[];if(Number.isFinite(T)){O(T,W,{clientX:k?.clientX,clientY:k?.clientY,cancelled:J?.type==="touchcancel"});return}}D(W)},I=(J,k={})=>{if(!Z.size&&!this.pointerButtonMask&&!V.has(J?.pointerId))return;if(!H4(J))return;if(J?.preventDefault?.(),p1(J?.pointerType)){let W=B(J);if(O(J.pointerId,W,{clientX:J?.clientX,clientY:J?.clientY,cancelled:k.resetAll===!0}))return}M(J,{resetAll:k.resetAll===!0||!Z.has(J?.pointerId)})};this.canvas.addEventListener("touchend",x,{signal:$,passive:!0,capture:!0}),this.canvas.addEventListener("touchcancel",x,{signal:$,passive:!0,capture:!0}),j.addEventListener("touchend",x,{signal:$,passive:!0,capture:!0}),j.addEventListener("touchcancel",x,{signal:$,passive:!0,capture:!0}),G.addEventListener("touchend",x,{signal:$,passive:!0,capture:!0}),G.addEventListener("touchcancel",x,{signal:$,passive:!0,capture:!0}),j.addEventListener("pointerup",(J)=>{I(J)},{signal:$,passive:!1,capture:!0}),j.addEventListener("pointercancel",(J)=>{I(J,{resetAll:!0})},{signal:$,passive:!1,capture:!0}),G.addEventListener("mouseup",()=>{if(!Z.size&&!this.pointerButtonMask&&!V.size)return;D()},{signal:$}),G.addEventListener("blur",()=>{if(!Z.size&&!this.pointerButtonMask&&!V.size)return;D()},{signal:$}),j.addEventListener("visibilitychange",()=>{if(j.visibilityState==="hidden")D()},{signal:$}),this.canvas.addEventListener("wheel",(J)=>{let k=this.getFramebufferPointFromEvent(J);if(!k)return;J.preventDefault();for(let W of EZ(J.deltaY,k.x,k.y,this.pointerButtonMask))this.socketBoundary?.send?.(W)},{signal:$,passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(WZ(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=r3(_);if($==null)return;let j=_.code||_.key,G=this.pressedKeysyms.get(j);if(OZ(G,$,_.repeat)){_.preventDefault();return}_.preventDefault(),this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??r3(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((G)=>G.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Z of _.rects||[])if(Z.kind==="resize")this.ensureCanvasSize(Z.width,Z.height);let G=this.canvas?.getContext("2d",{alpha:!1});if(G){let Z=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);G.putImageData(Z,0,0),$=!0}}else for(let G of _.rects||[]){if(G.kind==="resize"){this.ensureCanvasSize(G.width,G.height);continue}if(G.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(G),$=!0;continue}if(G.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(G),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let G=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${G}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${G}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new H2);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,G=$.receive(j);for(let Z of G.outgoing||[])this.socketBoundary?.send?.(Z);for(let Z of G.events||[])this.applyRemoteDisplayEvent(Z)}catch(j){let G=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${G}`),this.updateDisplayInfo(`Display protocol error: ${G}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(G))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),G=await FZ(),Z={};if(G)Z.pipeline=G,Z.decodeRawRect=(V,Q,q,B)=>G.decodeRawRectToRgba(V,Q,q,B);let X=E4(this.authPassword);if(X!==null)Z.password=X;if(j)Z.encodings=j;let Y=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new H2(Z),this.hasRenderedFrame=Y,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=Y?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Y?"none":"";this.socketBoundary=new b3({url:vD(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(V)=>{this.applyMetrics(V)},onMessage:(V)=>{this.handleSocketMessage(V)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(dZ({handoffToken:$,bytesIn:this.bytesIn,hasRenderedFrame:this.hasRenderedFrame,reconnectAttempts:this.reconnectAttempts})){this.pendingHandoffToken=null,this.setStatus("Transferred VNC session was not ready yet. Retrying…"),this.updateDisplayInfo("Transferred VNC session was not ready yet. Retrying without handoff…"),this.updateDisplayMeta("handoff-retrying"),this.scheduleReconnect(150);return}if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),dZ({handoffToken:$,bytesIn:this.bytesIn,hasRenderedFrame:this.hasRenderedFrame,reconnectAttempts:this.reconnectAttempts})){this.pendingHandoffToken=null,this.setStatus("Transferred VNC session was not ready yet. Retrying…"),this.updateDisplayInfo("Transferred VNC session was not ready yet. Retrying without handoff…"),this.updateDisplayMeta("handoff-retrying"),this.scheduleReconnect(150);return}if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await uD(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${d1(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}beforeDetachFromHost(){this.releasePressedKeys(),this.setStatus("Moving VNC session…"),this.updateDisplayInfo("Moving VNC session to a new window…"),this.updateDisplayMeta("moving")}afterAttachToHost(){this.attachDisplayResizeObserver(),this.updateCanvasScale(),requestAnimationFrame(()=>this.focus())}moveHost(_){if(this.disposed||!this.root)return!1;if(this.releasePressedKeys(),this.container=_,!lD(this.root,_))return!1;return this.afterAttachToHost(),!0}async preparePopoutTransfer(){return SD(this.targetId,this.authPassword)}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var G7={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===o1||$.startsWith(`${o1}/`)?9000:!1},mount(_,$){return new aZ(_,$)}};import{classHighlighter as pD,highlightTree as rD,StreamLanguage as N5,cssLanguage as nD,cppLanguage as dD,goLanguage as oD,htmlLanguage as iD,javascriptLanguage as sD,jsxLanguage as aD,tsxLanguage as tD,typescriptLanguage as eD,jsonLanguage as _H,markdownLanguage as $H,pythonLanguage as jH,rustLanguage as GH,StandardSQL as ZH,xmlLanguage as XH,yamlLanguage as YH,dockerFile as VH,powerShell as qH,ruby as QH,shell as KH,swift as BH,toml as LH}from"#editor-vendor/codemirror";function W4(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var NH={js:"JavaScript",javascript:"JavaScript",ts:"TypeScript",typescript:"TypeScript",jsx:"JSX",tsx:"TSX",py:"Python",python:"Python",sh:"Shell",shell:"Shell",bash:"Bash",zsh:"Zsh",ps1:"PowerShell",powershell:"PowerShell",md:"Markdown",markdown:"Markdown",yml:"YAML",yaml:"YAML",json:"JSON",html:"HTML",css:"CSS",sql:"SQL",go:"Go",c:"C",cc:"C++",cpp:"C++","c++":"C++",cxx:"C++",h:"C/C++",hh:"C++",hpp:"C++",hxx:"C++",rust:"Rust",rs:"Rust",ruby:"Ruby",swift:"Swift",toml:"TOML",dockerfile:"Dockerfile"},FH=N5.define(KH).parser,UH=N5.define(qH).parser,DH=N5.define(VH).parser,HH=N5.define(QH).parser,EH=N5.define(BH).parser,WH=N5.define(LH).parser;function tZ(_){let $=String(_||"").trim().toLowerCase();if(!$)return"text";return NH[$]||String(_||"").trim()}function OH(_){switch(String(_||"").trim().toLowerCase()){case"js":case"javascript":return sD.parser;case"ts":case"typescript":return eD.parser;case"jsx":return aD.parser;case"tsx":return tD.parser;case"py":case"python":return jH.parser;case"json":return _H.parser;case"css":return nD.parser;case"html":return iD.parser;case"xml":return XH.parser;case"yaml":case"yml":return YH.parser;case"md":case"markdown":return $H.parser;case"sql":return ZH.language.parser;case"go":return oD.parser;case"c":case"cc":case"cpp":case"cxx":case"c++":case"h":case"hh":case"hpp":case"hxx":return dD.parser;case"sh":case"bash":case"shell":case"zsh":return FH;case"ps1":case"powershell":return UH;case"dockerfile":return DH;case"rb":case"ruby":return HH;case"rs":case"rust":return GH.parser;case"swift":return EH;case"toml":return WH;default:return null}}function E2(_,$){let j=OH($);if(!j)return W4(_);let G=[];try{let Y=j.parse(_);rD(Y,pD,(V,Q,q)=>{if(!q||V>=Q)return;G.push({from:V,to:Q,cls:q})})}catch{return W4(_)}if(!G.length)return W4(_);G.sort((Y,V)=>Y.from-V.from||Y.to-V.to);let Z=0,X="";for(let Y of G){if(Y.from>Z)X+=W4(_.slice(Z,Y.from));X+=`<span class="${W4(Y.cls)}">${W4(_.slice(Y.from,Y.to))}</span>`,Z=Math.max(Z,Y.to)}if(Z<_.length)X+=W4(_.slice(Z));return X}$6();var k2=/#(\w+)/g,fH=new Set(["strong","em","b","i","u","s","del","ins","sub","sup","mark","small","br","p","ul","ol","li","blockquote","ruby","rt","rp","span","input"]),SH=new Set(["a","abbr","blockquote","br","code","del","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","input","ins","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","small","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),gH=new Set(["class","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),qX={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"]),input:new Set(["type","checked","disabled"])},uH=new Set(["http:","https:","mailto:",""]);function bH(_,$){let j=String(_||"").toLowerCase(),G=String($||"").toLowerCase();if(!G||G.startsWith("on"))return!1;if(G.startsWith("data-")||G.startsWith("aria-"))return!0;return(qX[j]||new Set).has(G)||gH.has(G)}function B7(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function A4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let G=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!uH.has(G.protocol))return null;return G.href}catch{return null}}function QX(_,$={}){if(!_)return"";if($?.sanitize===!1)return _;let j=new DOMParser().parseFromString(_,"text/html"),G=[],Z=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),X;while(X=Z.nextNode())G.push(X);for(let Y of G){let V=Y.tagName.toLowerCase();if(!SH.has(V)){let q=Y.parentNode;if(!q)continue;while(Y.firstChild)q.insertBefore(Y.firstChild,Y);q.removeChild(Y);continue}let Q=qX[V]||new Set;for(let q of Array.from(Y.attributes)){let B=q.name.toLowerCase(),K=q.value;if(B.startsWith("on")){Y.removeAttribute(q.name);continue}if(bH(V,B)){if(B==="href"){let N=A4(K);if(!N)Y.removeAttribute(q.name);else if(Y.setAttribute(q.name,N),V==="a"){if(!Y.getAttribute("rel"))Y.setAttribute("rel","noopener noreferrer");if(/^https?:\/\//i.test(N))Y.setAttribute("target","_blank")}}else if(B==="src"){let N=V==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(K):K,L=A4(N,{allowDataImage:V==="img"});if(!L)Y.removeAttribute(q.name);else Y.setAttribute(q.name,L)}continue}Y.removeAttribute(q.name)}}return j.body.innerHTML}function KX(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function j6(_,$=2){if(!_)return _;let j=_;for(let G=0;G<$;G+=1){let Z=KX(j);if(Z===j)break;j=Z}return j}function vH(_){if(!_)return{text:"",frontmatter:null};let $=_.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!$.startsWith(`---
`))return{text:$,frontmatter:null};let j=$.split(`
`),G=-1;for(let Y=1;Y<j.length;Y+=1)if(/^(---|\.\.\.)\s*$/.test(j[Y])){G=Y;break}if(G<=0)return{text:$,frontmatter:null};let Z=j.slice(1,G).join(`
`);return{text:j.slice(G+1).join(`
`).replace(/^\n+/,""),frontmatter:Z}}function mH(_){let{text:$,frontmatter:j}=vH(_);if(j===null)return $;return["<!--frontmatter-block-start-->","```yaml",j,"```","<!--frontmatter-block-end-->",$].filter(Boolean).join(`

`)}function cH(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=[],Z=[],X=!1,Y=[];for(let V of j){if(!X&&V.trim().match(/^```mermaid\s*$/i)){X=!0,Y=[];continue}if(X&&V.trim().match(/^```\s*$/)){let Q=G.length;G.push(Y.join(`
`)),Z.push(`@@MERMAID_BLOCK_${Q}@@`),X=!1,Y=[];continue}if(X)Y.push(V);else Z.push(V)}if(X)Z.push("```mermaid"),Z.push(...Y);return{text:Z.join(`
`),blocks:G}}function hH(_){if(!_)return _;return j6(_,5)}function lH(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let G of $)j+=String.fromCharCode(G);return btoa(j)}function pH(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let G=0;G<$.length;G+=1)j[G]=$.charCodeAt(G);return new TextDecoder().decode(j)}function rH(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,G)=>{let Z=Number(G),X=$[Z]??"",Y=hH(X);return`<div class="mermaid-container" data-mermaid="${lH(Y)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function BX(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}function nH(_){if(!_)return _;return _.replace(/<pre><code(?:\s+class="language-([A-Za-z0-9_+-]+)")?>([\s\S]*?)<\/code><\/pre>/g,(j,G,Z)=>{let X=String(G||"").trim().toLowerCase(),Y=j6(Z,2),V=X||"plaintext",Q=E2(Y,X);return`<pre><code class="hljs language-${B7(V)}">${Q}</code></pre>`}).replace(/<!--frontmatter-block-start-->\s*<pre>/g,'<pre class="frontmatter-block">').replace(/<\/pre>\s*<!--frontmatter-block-end-->/g,"</pre>")}var dH={span:new Set(["title","class","lang","dir"]),input:new Set(["type","checked","disabled"])};function oH(_,$){let j=dH[_];if(!j||!$)return"";let G=[],Z=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,X;while(X=Z.exec($)){let Y=(X[1]||"").toLowerCase();if(!Y||Y.startsWith("on")||!j.has(Y))continue;let V=X[2]??X[3]??X[4]??"";G.push(` ${Y}="${B7(V)}"`)}return G.join("")}function LX(_){if(!_)return _;return _.replace(/&lt;((?:[^"'<>]|"[^"]*"|'[^']*')*?)(?:&gt;|>)/g,($,j)=>{let G=j.trim(),Z=G.startsWith("/"),X=Z?G.slice(1).trim():G,V=X.endsWith("/")?X.slice(0,-1).trim():X,[Q=""]=V.split(/\s+/,1),q=Q.toLowerCase();if(!q||!fH.has(q))return $;if(q==="br")return Z?"":"<br>";if(Z)return`</${q}>`;let B=V.slice(Q.length).trim(),K=oH(q,B);return`<${q}${K}>`})}function NX(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,G)=>`<pre><code>${$(G)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,G)=>`<code>${$(G)}</code>`)}function FX(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),G=(X)=>X.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Z;while(Z=j.nextNode()){if(!Z.nodeValue)continue;let X=G(Z.nodeValue);if(X!==Z.nodeValue)Z.nodeValue=X}return $.body.innerHTML}function iH(_){if(!window.katex)return _;let $=(Y)=>KX(Y).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(Y)=>{let V=[],Q=Y.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(q)=>{let B=V.length;return V.push(q),`@@CODE_BLOCK_${B}@@`});return Q=Q.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(q)=>{let B=V.length;return V.push(q),`@@CODE_INLINE_${B}@@`}),{html:Q,blocks:V}},G=(Y,V)=>{if(!V.length)return Y;return Y.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(Q,q)=>{let B=Number(q);return V[B]??""})},Z=j(_),X=Z.html;return X=X.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(Y,V,Q)=>{try{let q=katex.renderToString($(Q.trim()),{displayMode:!0,throwOnError:!1});return`${V}${q}`}catch(q){let B=q instanceof Error?q.message:String(q);return`<span class="math-error" title="${B7(B)}">${Y}</span>`}}),G(X,Z.blocks)}function sH(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),G=[],Z;while(Z=j.nextNode())G.push(Z);for(let X of G){let Y=X.nodeValue;if(!Y)continue;if(k2.lastIndex=0,!k2.test(Y))continue;k2.lastIndex=0;let V=X.parentElement;if(V&&(V.closest("a")||V.closest("code")||V.closest("pre")))continue;let Q=Y.split(k2);if(Q.length<=1)continue;let q=$.createDocumentFragment();Q.forEach((B,K)=>{if(K%2===1){let N=$.createElement("a");N.setAttribute("href","#"),N.className="hashtag",N.setAttribute("data-hashtag",B),N.textContent=`#${B}`,q.appendChild(N)}else q.appendChild($.createTextNode(B))}),X.parentNode?.replaceChild(q,X)}return $.body.innerHTML}function aH(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=[],Z=!1;for(let X of j){if(!Z&&X.trim().match(/^```(?:math|katex|latex)\s*$/i)){Z=!0,G.push("$$");continue}if(Z&&X.trim().match(/^```\s*$/)){Z=!1,G.push("$$");continue}G.push(X)}return G.join(`
`)}function tH(_){let $=mH(_||""),j=aH($),{text:G,blocks:Z}=cH(j),X=j6(G,2),V=BX(X).replace(/</g,"&lt;");return{safeHtml:LX(V),mermaidBlocks:Z}}function Z1(_,$,j={}){if(!_)return"";let{safeHtml:G,mermaidBlocks:Z}=tH(_),X=window.marked?marked.parse(G,{headerIds:!1,mangle:!1}):G.replace(/\n/g,"<br>");return X=NX(X),X=FX(X),X=nH(X),X=iH(X),X=sH(X),X=rH(X,Z),X=QX(X,j),X}function G6(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=j6($,2),Z=BX(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),X=LX(Z),Y=window.marked?marked.parse(X):X.replace(/\n/g,"<br>");return Y=NX(Y),Y=FX(Y),Y=QX(Y),Y}function eH(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,G,Z,X)=>{let Y=Z.trim().split(/\s+/).map((Q)=>{let[q,B]=Q.split(",").map(Number);return{x:q,y:B}});if(Y.length<3)return`<polyline${G}points="${Z}"${X}/>`;let V=[`M ${Y[0].x},${Y[0].y}`];for(let Q=1;Q<Y.length-1;Q++){let q=Y[Q-1],B=Y[Q],K=Y[Q+1],N=B.x-q.x,L=B.y-q.y,U=K.x-B.x,E=K.y-B.y,H=Math.sqrt(N*N+L*L),D=Math.sqrt(U*U+E*E),M=Math.min($,H/2,D/2);if(M<0.5){V.push(`L ${B.x},${B.y}`);continue}let z=B.x-N/H*M,O=B.y-L/H*M,x=B.x+U/D*M,I=B.y+E/D*M,k=N*E-L*U>0?1:0;V.push(`L ${z},${O}`),V.push(`A ${M},${M} 0 0 ${k} ${x},${I}`)}return V.push(`L ${Y[Y.length-1].x},${Y[Y.length-1].y}`),`<path${G}d="${V.join(" ")}"${X}/>`})}async function E$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Z=VX()==="dark"?j["tokyo-night"]:j["github-light"],X=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let Y of X)try{let V=Y.dataset.mermaid,Q=pH(V||""),q=j6(Q,2),B=await $(q,{...Z,transparent:!0});B=eH(B),Y.innerHTML=B,Y.removeAttribute("data-mermaid")}catch(V){console.error("Mermaid render error:",V);let Q=document.createElement("pre");Q.className="mermaid-error",Q.textContent=`Diagram error: ${V.message}`,Y.innerHTML="",Y.appendChild(Q),Y.removeAttribute("data-mermaid")}}M_();function TX(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let G=new Date().getTime()-$.getTime(),Z=G/1000,X=86400000;if(G<X){if(Z<60)return"just now";if(Z<3600)return`${Math.floor(Z/60)}m`;return`${Math.floor(Z/3600)}h`}if(G<5*X){let Q=$.toLocaleDateString(void 0,{weekday:"short"}),q=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${Q} ${q}`}let Y=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),V=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${Y} ${V}`}function U6(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function a_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function I4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}function r$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function cE(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let G=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Z=G?.[1]||j,X=G?.[2]||"",Y=G?.[3]||"",V=String($||"").split("/").slice(0,-1).join("/"),q=Z.startsWith("/")?Z:`${V?`${V}/`:""}${Z}`,B=[];for(let N of q.split("/")){if(!N||N===".")continue;if(N===".."){if(B.length>0)B.pop();continue}B.push(N)}let K=B.join("/");return`${N6(K)}${X}${Y}`}function D6(_){return _?.preview||null}function hE(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),G=j>=0?$.slice(j+1):$,Z=G.lastIndexOf(".");if(Z<=0||Z===G.length-1)return"none";return G.slice(Z+1)}function lE(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function pE(_,$){let j=$?.path||_?.path||"",G=[];if($?.content_type)G.push(`<span><strong>type:</strong> ${r$($.content_type)}</span>`);if(typeof $?.size==="number")G.push(`<span><strong>size:</strong> ${r$(a_($.size))}</span>`);if($?.mtime)G.push(`<span><strong>modified:</strong> ${r$(I4($.mtime))}</span>`);if(G.push(`<span><strong>kind:</strong> ${r$(lE($))}</span>`),G.push(`<span><strong>extension:</strong> ${r$(hE(j))}</span>`),j)G.push(`<span><strong>path:</strong> ${r$(j)}</span>`);if($?.truncated)G.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${G.join("")}</div>`}function rE(_){let $=D6(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=pE(_,$);if($.kind==="image"){let G=$.url||($.path?N6($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${r$(G)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let G=Z1($.text||"",null,{rewriteImageSrc:(Z)=>cE(Z,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${G}</div>`}return`${j}<pre class="workspace-preview-text"><code>${r$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class d7{container;context;disposed=!1;host;constructor(_,$){this.container=_,this.context=$,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=rE(this.context)}getContent(){let _=D6(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=D6(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var o7={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=D6(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new d7(_,$)}},i7={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return D6(_)||_?.path?1:!1},mount(_,$){return new d7(_,$)}};var nE=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),dE={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},oE={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function yX(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function wX(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class IX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document",Z=yX(j),X=oE[Z]||"\uD83D\uDCC4",Y=dE[Z]||"Office Document",V=document.createElement("div");V.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",V.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${X}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${wX(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${wX(Y)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(V);let Q=V.querySelector("#ov-open-tab");if(Q)Q.addEventListener("click",()=>{let q=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class xX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,X=`/office-viewer/?url=${encodeURIComponent(Z)}&name=${encodeURIComponent(G)}`;this.iframe=document.createElement("iframe"),this.iframe.src=X,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var s7={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=yX(_?.path);if(!$||!nE.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new IX(_,$);return new xX(_,$)}};var iE=/\.(csv|tsv)$/i;function CX(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class PX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"table.csv",Z=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${CX(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${CX(Z)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let Y=X.querySelector("#csv-open-tab");if(Y)Y.addEventListener("click",()=>{let V=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(V)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class RX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var a7={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!iE.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new PX(_,$);return new RX(_,$)}};var sE=/\.pdf$/i;function aE(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class fX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document.pdf",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${aE(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let X=Z.querySelector("#pdf-open-tab");if(X)X.addEventListener("click",()=>{let Y=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class SX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var t7={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!sE.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new fX(_,$);return new SX(_,$)}};var tE=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function e7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class gX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"image",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${e7(Z)}" alt="${e7(G)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${e7(G)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let Y=X.querySelector("#img-open-tab");if(Y)Y.addEventListener("click",()=>{let V=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(V)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class uX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var _9={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!tE.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new gX(_,$);return new uX(_,$)}};var eE=/\.(html|htm)$/i;function bX(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class vX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"index.html",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:48px;margin-bottom:12px;">\uD83C\uDF10</div>
                    <div style="font-size:14px;color:var(--text-primary,#e2e8f0);font-weight:500;margin-bottom:4px;">${bX(G)}</div>
                    <div style="font-size:12px;color:var(--text-secondary,#94a3b8);">HTML document</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${bX(j)}</div>
                <div style="display:flex;gap:8px;flex-shrink:0;">
                    <button id="html-edit-btn" style="padding:5px 14px;background:var(--surface-color,rgba(148,163,184,.12));color:var(--text-primary,#e2e8f0);
                        border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;
                        transition:background 0.15s;">
                        Edit Source
                    </button>
                    <button id="html-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                        border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;
                        transition:background 0.15s;"
                        onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                        onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                        Preview in Tab
                    </button>
                </div>
            </div>
        `,_.appendChild(Z);let X=Z.querySelector("#html-open-tab");if(X)X.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("html-viewer:open-tab",{bubbles:!0,detail:{path:j}}))});let Y=Z.querySelector("#html-edit-btn");if(Y)Y.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("html-viewer:edit-source",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class mX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/html-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#fff;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var $9={id:"html-viewer",label:"HTML Preview",icon:"code",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!eE.test($))return!1;return 30},mount(_,$){if($?.mode==="view")return new vX(_,$);return new mX(_,$)}};var _W=/\.(mp4|m4v|mov|webm|ogv)$/i;function $W(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class cX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"video.mp4",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${$W(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let X=Z.querySelector("#video-open-tab");if(X)X.addEventListener("click",()=>{let Y=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class hX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var j9={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!_W.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new cX(_,$);return new hX(_,$)}};M_();function jW(_){let $=_.includes(".")?_.slice(_.lastIndexOf(".")):"",j=_.includes(".")?_.slice(0,_.lastIndexOf(".")):_,G=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19);return`${j}.${G}${$}`}function lX(_){let{path:$,getCurrentMtime:j,anchorParent:G,anchorBefore:Z,onReload:X,onSaveCopy:Y,onOverwrite:V,pollMs:Q=3000,ownerDocument:q=document}=_,B=null,K=null,N=!1,L=!1,U=!1;async function E(){if(L||U||N)return;let O=j();if(!O)return;try{let x=await h7($);if(L||U||!x?.mtime)return;if(x.mtime!==O)N=!0,D(),M()}catch(x){if(typeof console<"u")console.debug("[file-conflict-monitor] mtime poll skipped:",x)}}function H(){if(D(),L)return;B=setInterval(E,Q)}function D(){if(B)clearInterval(B),B=null}function M(){if(K||L)return;let O=q.createElement("div");O.className="editor-conflict-bar",O.innerHTML=`
      <span class="editor-conflict-text">File changed on disk</span>
      <div class="editor-conflict-actions">
        <button class="editor-conflict-btn" data-action="reload" title="Discard and reload from disk">Reload</button>
        <button class="editor-conflict-btn" data-action="save-copy" title="Save current content with a new name">Save copy</button>
        <button class="editor-conflict-btn" data-action="overwrite" title="Overwrite the disk version">Overwrite</button>
        <button class="editor-conflict-btn editor-conflict-dismiss" data-action="dismiss" title="Dismiss">×</button>
      </div>
    `,O.addEventListener("click",(x)=>{let I=x.target.closest("[data-action]");if(!I)return;let J=I.getAttribute("data-action");if(J==="reload")z(),X();else if(J==="save-copy"){let k=jW($);Y(k)}else if(J==="overwrite")z(),V();else if(J==="dismiss")z()}),K=O,G.insertBefore(O,Z)}function z(){if(K)K.remove(),K=null;N=!1,H()}return{start(){H()},stop(){D()},onSaved(O){N=!1,U=!1,H()},dispose(){if(L=!0,D(),K)K.remove(),K=null}}}var GW=/\.mindmap\.ya?ml$/i,g2=String(Date.now());function ZW(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function pX(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function G9(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let G=document.querySelector(`script[src="${$}"]`);if(G)G.remove();return new Promise((Z,X)=>{let Y=document.createElement("script");Y.src=_,Y.dataset.src=$,Y.onload=()=>Z(),Y.onerror=()=>X(Error(`Failed to load ${_}`)),document.head.appendChild(Y)})}function XW(_){let $=_.split("?")[0],j=document.querySelector(`link[data-href="${$}"]`);if(j&&j.href.endsWith(_))return;document.querySelectorAll(`link[data-href="${$}"], link[href="${$}"]`).forEach((Z)=>Z.remove());let G=document.createElement("link");G.rel="stylesheet",G.href=_,G.dataset.href=$,document.head.appendChild(G)}function YW(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
        <select id="layout-select">
            <option value="horizontal-tree">Horizontal Tree</option>
            <option value="vertical-tree">Vertical Tree</option>
            <option value="radial">Radial</option>
            <option value="force-directed">Force Directed</option>
        </select>
        <button type="button" id="zoom-fit" title="Fit to view">⊞</button>
        <button type="button" id="zoom-in"  title="Zoom in">+</button>
        <button type="button" id="zoom-out" title="Zoom out">−</button>
        <button type="button" id="mindmap-undo" title="Undo (Ctrl+Z)" disabled>Undo</button>
        <button type="button" id="mindmap-redo" title="Redo (Ctrl+Shift+Z)" disabled>Redo</button>
        <button type="button" id="reset-layout" title="Reset layout">↻</button>
    `,_.appendChild(j);let G=document.createElement("div");G.id="context-menu",G.className="context-menu hidden",G.innerHTML=`
        <button data-action="cut">Cut</button>
        <button data-action="copy">Copy</button>
        <button data-action="paste">Paste</button>
        <hr/>
        <button data-action="add-child">Add child</button>
        <button data-action="add-sibling">Add sibling</button>
        <hr/>
        <button data-action="delete">Delete</button>
    `,_.appendChild(G)}class rX{container;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"mindmap",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83E\uDDE0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${ZW(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Mindmap Editor</div>
                <button id="mm-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">Edit in Tab</button>
            </div>`,_.appendChild(Z),Z.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class nX{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";currentMtime=null;conflictMonitor=null;themeListener=()=>{window.__mindmapEditor?.setTheme?.(pX())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{let j=await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json();if(j?.mtime)this.currentMtime=j.mtime;return j?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,XW("/static/css/mindmap.css?v="+g2),await Promise.all([G9("/static/js/vendor/d3-mindmap.min.js?v="+g2),G9("/static/js/vendor/js-yaml.min.js?v="+g2)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),YW(this.mindmapEl);let j=pX(),G=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await G9("/static/js/vendor/mindmap-editor.js?v="+g2),this.disposed)return;let Z=window.__mindmapEditor;if(!Z)throw Error("__mindmapEditor not found");if(Z.mount({content:$,isDark:j,onEdit:(X)=>{this.lastContent=X,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(X)},resolveImagePath:(X)=>{if(X.startsWith("data:")||X.startsWith("http"))return X;return`/workspace/raw?path=${encodeURIComponent(G+"/"+X)}`}}),this.pendingContent!==null)Z.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener),this.initConflictMonitor()}catch(Z){if(console.error("[mindmap] Failed to load mindmap renderer:",Z),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);let j=await $.json().catch(()=>({}));this.currentMtime=j?.mtime||this.currentMtime,this.conflictMonitor?.onSaved(this.currentMtime),this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}initConflictMonitor(){if(this.conflictMonitor?.dispose(),!this.filePath)return;this.conflictMonitor=lX({path:this.filePath,getCurrentMtime:()=>this.currentMtime,anchorParent:this.container,anchorBefore:this.mindmapEl||this.container.firstElementChild,onReload:async()=>{try{let $=await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json();if(this.disposed)return;this.currentMtime=$?.mtime||null;let j=$?.text||"";this.lastContent=j;let G=window.__mindmapEditor;if(G?.update)G.update(j);this.dirty=!1,this.dirtyCallback?.(!1),this.conflictMonitor?.onSaved(this.currentMtime)}catch(_){console.error("[mindmap] Reload failed:",_)}},onSaveCopy:async(_)=>{try{await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,content:this.lastContent})})}catch($){console.error("[mindmap] Save copy failed:",$)}},onOverwrite:()=>this.saveToWorkspace(this.lastContent)}),this.conflictMonitor.start()}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,this.conflictMonitor?.dispose(),window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var Z9={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!GW.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new rX(_,$);return new nX(_,$)}};class dX{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(G){console.warn("[tab-store] Change listener failed:",G)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((G)=>G!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let G=this.tabs.get(_);if(!G)return;if(this.tabs.delete(_),G.id=$,G.path=$,G.label=j||$.split("/").pop()||$,this.tabs.set($,G),this.mruOrder=this.mruOrder.map((Z)=>Z===_?$:Z),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((G)=>G.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((G)=>G.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var $_=new dX;var W5=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};k0();function oX(){let[_,$]=C(null),[j,G]=C({text:"",totalLines:0}),[Z,X]=C(""),[Y,V]=C({text:"",totalLines:0}),[Q,q]=C(null),[B,K]=C(null),[N,L]=C(null),U=u(null),E=u(0),H=u(!1),D=u(""),M=u(""),z=u(!1),O=u(0),x=u(null),I=u(null),J=u(null),k=u(null),W=u(!1),T=u(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:G,agentPlan:Z,setAgentPlan:X,agentThought:Y,setAgentThought:V,pendingRequest:Q,setPendingRequest:q,currentTurnId:B,setCurrentTurnId:K,steerQueuedTurnId:N,setSteerQueuedTurnId:L,lastAgentEventRef:U,lastSilenceNoticeRef:E,isAgentRunningRef:H,draftBufferRef:D,thoughtBufferRef:M,previewResyncPendingRef:z,previewResyncGenerationRef:O,pendingRequestRef:x,stalledPostIdRef:I,currentTurnIdRef:J,steerQueuedTurnIdRef:k,thoughtExpandedRef:W,draftExpandedRef:T}}k0();var VW=0.1,eX=4,_Y=4,iX=160,sX=1600,aX=200,tX=1600;function W$(){if(typeof window>"u")return 0;return Number(window.innerWidth)||0}function $Y(_=W$()){return _>0?Math.floor(_*VW):0}function H6(_,$=W$(),j=0){let G=$Y($)+eX+(j>0?_Y+Math.max(0,j):0),Z=$>0?Math.floor($-G):sX;return Math.min(Math.max(Number(_)||0,iX),Math.max(iX,Math.min(sX,Z)))}function E6(_,$=W$(),j=0){let G=$Y($)+_Y+(j>0?eX+Math.max(0,j):0),Z=$>0?Math.floor($-G):tX;return Math.min(Math.max(Number(_)||0,aX),Math.max(aX,Math.min(tX,Z)))}function jY({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:G}){let Z=u((B)=>{B.preventDefault();let K=_.current;if(!K)return;let N=B.clientX,L=$.current||280,U=B.currentTarget;U.classList.add("dragging"),K.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let E=N,H=(M)=>{E=M.clientX;let z=H6(L+(M.clientX-N),W$(),j?.current||0);K.style.setProperty("--sidebar-width",`${z}px`),$.current=z},D=()=>{let M=H6(L+(E-N),W$(),j?.current||0);$.current=M,U.classList.remove("dragging"),K.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",q_("sidebarWidth",String(Math.round(M))),document.removeEventListener("mousemove",H),document.removeEventListener("mouseup",D)};document.addEventListener("mousemove",H),document.addEventListener("mouseup",D)}).current,X=u((B)=>{B.preventDefault();let K=_.current;if(!K)return;let N=B.touches[0];if(!N)return;let L=N.clientX,U=$.current||280,E=B.currentTarget;E.classList.add("dragging"),K.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let H=(M)=>{let z=M.touches[0];if(!z)return;M.preventDefault();let O=H6(U+(z.clientX-L),W$(),j?.current||0);K.style.setProperty("--sidebar-width",`${O}px`),$.current=O},D=()=>{E.classList.remove("dragging"),K.classList.remove("sidebar-resizing"),document.body.style.userSelect="",q_("sidebarWidth",String(Math.round($.current||U))),document.removeEventListener("touchmove",H),document.removeEventListener("touchend",D),document.removeEventListener("touchcancel",D)};document.addEventListener("touchmove",H,{passive:!1}),document.addEventListener("touchend",D),document.addEventListener("touchcancel",D)}).current,Y=u((B)=>{B.preventDefault();let K=_.current;if(!K)return;let N=B.clientX,L=j.current||$.current||280,U=B.currentTarget;U.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let E=N,H=(M)=>{E=M.clientX;let z=E6(L+(M.clientX-N),W$(),$?.current||0);K.style.setProperty("--editor-width",`${z}px`),j.current=z},D=()=>{let M=E6(L+(E-N),W$(),$?.current||0);j.current=M,U.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",q_("editorWidth",String(Math.round(M))),document.removeEventListener("mousemove",H),document.removeEventListener("mouseup",D)};document.addEventListener("mousemove",H),document.addEventListener("mouseup",D)}).current,V=u((B)=>{B.preventDefault();let K=_.current;if(!K)return;let N=B.touches[0];if(!N)return;let L=N.clientX,U=j.current||$.current||280,E=B.currentTarget;E.classList.add("dragging"),document.body.style.userSelect="none";let H=(M)=>{let z=M.touches[0];if(!z)return;M.preventDefault();let O=E6(U+(z.clientX-L),W$(),$?.current||0);K.style.setProperty("--editor-width",`${O}px`),j.current=O},D=()=>{E.classList.remove("dragging"),document.body.style.userSelect="",q_("editorWidth",String(Math.round(j.current||U))),document.removeEventListener("touchmove",H),document.removeEventListener("touchend",D),document.removeEventListener("touchcancel",D)};document.addEventListener("touchmove",H,{passive:!1}),document.addEventListener("touchend",D),document.addEventListener("touchcancel",D)}).current,Q=u((B)=>{B.preventDefault();let K=_.current;if(!K)return;let N=B.clientY,L=G?.current||200,U=B.currentTarget;U.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let E=N,H=(M)=>{E=M.clientY;let z=Math.min(Math.max(L-(M.clientY-N),100),window.innerHeight*0.5);if(K.style.setProperty("--dock-height",`${z}px`),G)G.current=z;window.dispatchEvent(new CustomEvent("dock-resize"))},D=()=>{let M=Math.min(Math.max(L-(E-N),100),window.innerHeight*0.5);if(G)G.current=M;U.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",q_("dockHeight",String(Math.round(M))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",H),document.removeEventListener("mouseup",D)};document.addEventListener("mousemove",H),document.addEventListener("mouseup",D)}).current,q=u((B)=>{B.preventDefault();let K=_.current;if(!K)return;let N=B.touches[0];if(!N)return;let L=N.clientY,U=G?.current||200,E=B.currentTarget;E.classList.add("dragging"),document.body.style.userSelect="none";let H=(M)=>{let z=M.touches[0];if(!z)return;M.preventDefault();let O=Math.min(Math.max(U-(z.clientY-L),100),window.innerHeight*0.5);if(K.style.setProperty("--dock-height",`${O}px`),G)G.current=O;window.dispatchEvent(new CustomEvent("dock-resize"))},D=()=>{E.classList.remove("dragging"),document.body.style.userSelect="",q_("dockHeight",String(Math.round(G?.current||U))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",H),document.removeEventListener("touchend",D),document.removeEventListener("touchcancel",D)};document.addEventListener("touchmove",H,{passive:!1}),document.addEventListener("touchend",D),document.addEventListener("touchcancel",D)}).current;return{handleSplitterMouseDown:Z,handleSplitterTouchStart:X,handleEditorSplitterMouseDown:Y,handleEditorSplitterTouchStart:V,handleDockSplitterMouseDown:Q,handleDockSplitterTouchStart:q}}k0();function X9(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},G=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Z=j[_]??window[G],X=Number(Z);return Number.isFinite(X)?X:$}catch{return $}}var GY=X9("warning",30000),ZY=X9("finalize",120000),XY=X9("refresh",30000),YY=30000;function VY(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function W6(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function qY(_=30000){let[,$]=C(0);g(()=>{let j=setInterval(()=>$((G)=>G+1),_);return()=>clearInterval(j)},[_])}function QY(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((G,Z)=>G+Math.max(1,Math.ceil(Z.length/$)),0)}function u2(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function qW(_){if(!_||typeof _!=="object")return null;let $=_.retry_at??_.retryAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function n$(_){if(!_||typeof _!=="object")return null;let $=_.last_event_at??_.lastEventAt??_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function O$(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function b2(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.tool_name??_.toolName;if(typeof j==="string"&&j.trim())return j.trim();let G=_.status;if(typeof G==="string"&&G.trim())return G.trim();return O$(_)?"Compacting context":"Working..."}function KY(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,G=Math.floor($/60)%60,Z=Math.floor($/3600);if(Z>0)return`${Z}:${String(G).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${G}:${String(j).padStart(2,"0")}`}function O6(_,$=Date.now()){let j=u2(_);if(j===null)return null;return KY(Math.max(0,$-j))}function BY(_,$=Date.now()){let j=qW(_);if(j===null)return null;let G=j-$;if(G<=0)return"retrying now";return`retry in ${KY(G)}`}k0();function wV(_={}){i1(_)}function yV(){let[_,$]=C(!1);if(g(()=>{let Z=(Y)=>{let V=O5(Y?.detail?.section);if(V)try{window.__piclawSettingsRequestedSection=V}catch(Q){}$(!0)};window.addEventListener("piclaw:open-settings",Z);let X=v2();if(X.open){if(X.section)try{window.__piclawSettingsRequestedSection=X.section}catch(Y){}$(!0)}return()=>window.removeEventListener("piclaw:open-settings",Z)},[]),!_)return null;let[j,G]=C(null);if(g(()=>{Promise.resolve().then(() => (TV(),MV)).then((Z)=>{G(()=>Z.SettingsDialogContent)})},[]),!j)return F`
            <div class="settings-dialog-backdrop" onClick=${()=>$(!1)}>
                <div class="settings-dialog settings-dialog-loading-shell" data-testid="settings-dialog">
                    <div class="settings-loading-shell-body">
                        <span class="settings-spinner"></span>
                        <span>Loading settings…</span>
                    </div>
                </div>
            </div>
        `;return F`
        <div class="settings-dialog-backdrop" onClick=${(Z)=>{if(Z.target===Z.currentTarget)$(!1)}}>
            <${j} onClose=${()=>$(!1)} />
        </div>
    `}k0();function mO(_,$){return new URL(String(_||""),$).toString()}function IV(){let[_,$]=C(()=>typeof window>"u"?"http://localhost/":window.location.href);g(()=>{if(typeof window>"u")return;let Z=()=>$(window.location.href);return window.addEventListener("popstate",Z),()=>window.removeEventListener("popstate",Z)},[]);let j=f((Z,X={})=>{if(typeof window>"u")return;let{replace:Y=!1}=X||{},V=mO(Z,window.location.href);if(Y)window.history.replaceState(null,"",V);else window.history.pushState(null,"",V);$(window.location.href)},[]);return{locationParams:Y0(()=>new URL(_).searchParams,[_]),navigate:j}}k0();k0();function xV(_,$,j,G){try{let Z=_?.getItem?.($),X=Z?Number(Z):Number.NaN;return Number.isFinite(X)&&X>=j?X:G}catch(Z){return G}}function C9(_,$,j){try{return _?.setItem?.($,String(Math.round(j))),!0}catch(G){return!1}}var cO=120,hO=100,P9=60,lO=220,R9="mdPreviewHeight";function pO(){return xV(localStorage,R9,P9,lO)}function $8({getContent:_,subscribeContentChange:$,path:j,onClose:G}){let[Z,X]=C(""),[Y,V]=C(pO),Q=u(null),q=u(null),B=u(null),K=u(null),N=u(null),L=u(_),U=u($);return L.current=_,U.current=$,g(()=>{let D=!1,M=()=>{if(K.current!==null)clearTimeout(K.current),K.current=null},z=()=>{if(N.current!==null)clearTimeout(N.current),N.current=null},O=(k)=>{if(D)return;if(k===B.current)return;B.current=k;try{let W=Z1(k,null);X(W)}catch{X('<p style="color:var(--text-secondary)">Preview unavailable</p>')}},x=(k)=>{M(),K.current=setTimeout(()=>{K.current=null,O(k||"")},cO)},I=null,J=()=>{if(D||I)return;let k=typeof U.current==="function"?U.current((W)=>x(W||"")):null;if(typeof k==="function"){I=k;return}N.current=setTimeout(J,hO)};return O(L.current?.()||""),J(),()=>{if(D=!0,M(),z(),typeof I==="function")I()}},[j]),g(()=>{if(Q.current&&Z)E$(Q.current).catch((D)=>{console.debug("[markdown-preview] Mermaid rendering failed for the live preview.",D,{path:j})})},[Z]),F`
        <div
            class="md-preview-splitter"
            onMouseDown=${(D)=>{D.preventDefault();let M=D.clientY,z=q.current?.offsetHeight||Y,O=q.current?.parentElement,x=O?O.offsetHeight*0.7:500,I=D.currentTarget;I.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let J=(W)=>{let T=Math.min(Math.max(z-(W.clientY-M),P9),x);V(T)},k=()=>{I.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",C9(localStorage,R9,q.current?.offsetHeight||Y),document.removeEventListener("mousemove",J),document.removeEventListener("mouseup",k)};document.addEventListener("mousemove",J),document.addEventListener("mouseup",k)}}
            onTouchStart=${(D)=>{D.preventDefault();let M=D.touches[0];if(!M)return;let z=M.clientY,O=q.current?.offsetHeight||Y,x=q.current?.parentElement,I=x?x.offsetHeight*0.7:500,J=D.currentTarget;J.classList.add("dragging"),document.body.style.userSelect="none";let k=(T)=>{let w=T.touches[0];if(!w)return;T.preventDefault();let A=Math.min(Math.max(O-(w.clientY-z),P9),I);V(A)},W=()=>{J.classList.remove("dragging"),document.body.style.userSelect="",C9(localStorage,R9,q.current?.offsetHeight||Y),document.removeEventListener("touchmove",k),document.removeEventListener("touchend",W),document.removeEventListener("touchcancel",W)};document.addEventListener("touchmove",k,{passive:!1}),document.addEventListener("touchend",W),document.addEventListener("touchcancel",W)}}
        ></div>
        <div class="md-preview-panel" ref=${q} style=${{height:Y+"px"}}>
            <div class="md-preview-header">
                <span class="md-preview-title">Preview</span>
                <button class="md-preview-close" onClick=${G} title="Close preview" aria-label="Close preview">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>
            <div
                class="md-preview-body post-content"
                ref=${Q}
                dangerouslySetInnerHTML=${{__html:Z}}
            />
        </div>
    `}function CV(_){if(_.branchLoaderMode)return"branch-loader";if(_.panePopoutMode)return"pane-popout";return"main"}function rO(_){return _==="error"?"Could not open branch window":"Opening branch…"}function PV(_){return F`
    <div class="app-shell chat-only">
      <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
        <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
          <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
            ${rO(_.status)}
          </h1>
          <p style=${{margin:0,lineHeight:1.6}}>${_.message}</p>
        </div>
      </div>
    </div>
  `}function RV(_){let{appShellRef:$,editorOpen:j,hidePanePopoutControls:G,panePopoutHasMenuActions:Z,panePopoutTitle:X,tabStripTabs:Y,tabStripActiveId:V,handleTabActivate:Q,previewTabs:q,diffTabs:B,handleTabTogglePreview:K,handleTabToggleDiff:N,editorContainerRef:L,getPaneContent:U,subscribePaneContentChange:E,panePopoutPath:H}=_,D=j&&!G&&Z,M=X?`Pane window controls for ${X}`:"Pane window controls";return F`
    <div class=${`app-shell pane-popout${j?" editor-open":""}`} ref=${$}>
      <div class="editor-pane-container pane-popout-container">
        ${D&&F`
          <div class="pane-popout-hover-zone" aria-hidden="true"></div>
          <div class="pane-popout-controls" role="toolbar" aria-label=${M}>
            <details class="pane-popout-controls-menu">
              <summary
                class="pane-popout-controls-trigger pane-popout-controls-icon-button"
                aria-label=${M}
                title=${M}
              >
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M3 4.75h10" />
                  <path d="M5 8h8" />
                  <path d="M7 11.25h6" />
                </svg>
              </summary>
              <div class="pane-popout-controls-panel">
                ${Y.length>1&&F`
                  <div class="pane-popout-controls-section">
                    <div class="pane-popout-controls-section-title">Open panes</div>
                    <div class="pane-popout-controls-list">
                      ${Y.map((z)=>F`
                        <button
                          type="button"
                          class=${`pane-popout-controls-item${z.id===V?" active":""}`}
                          onClick=${(O)=>{Q(z.id),O.currentTarget.closest("details")?.removeAttribute("open")}}
                        >
                          ${z.label}
                        </button>
                      `)}
                    </div>
                  </div>
                `}
                ${V&&B.has(V)&&F`
                  <button
                    type="button"
                    class="pane-popout-controls-action"
                    onClick=${(z)=>{N(V),z.currentTarget.closest("details")?.removeAttribute("open")}}
                  >
                    Hide diff
                  </button>
                `}
                ${V&&q.has(V)&&F`
                  <button
                    type="button"
                    class="pane-popout-controls-action"
                    onClick=${(z)=>{K(V),z.currentTarget.closest("details")?.removeAttribute("open")}}
                  >
                    Hide preview
                  </button>
                `}
              </div>
            </details>
          </div>
        `}
        ${j?F`<div class="editor-pane-host" ref=${L}></div>`:F`
            <div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
              <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
              <p style=${{margin:0,lineHeight:1.6}}>${H||"No pane path provided."}</p>
            </div>
          `}
        ${j&&V&&q.has(V)&&F`
          <${$8}
            getContent=${U}
            subscribeContentChange=${E}
            path=${V}
            onClose=${()=>K(V)}
          />
        `}
      </div>
    </div>
  `}k0();k0();function j8(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function nO(_,$){let j=j8(_),G=j8($);if(!G)return!1;return j.startsWith(G)||j.includes(G)}function T6(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function f9(_,$,j=Date.now(),G=700){let Z=_&&typeof _==="object"?_:{value:"",updatedAt:0},X=String($||"").trim().toLowerCase();if(!X)return{value:"",updatedAt:j};return{value:!Z.value||!Number.isFinite(Z.updatedAt)||j-Z.updatedAt>G?X:`${Z.value}${X}`,updatedAt:j}}function dO(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Z=((Number.isInteger($)?$:0)%j+j)%j,X=[];for(let Y=0;Y<j;Y+=1)X.push((Z+Y)%j);return X}function oO(_,$,j=0,G=(Z)=>Z){let Z=j8($);if(!Z)return-1;let X=Array.isArray(_)?_:[],Y=dO(X.length,j),V=X.map((Q)=>j8(G(Q)));for(let Q of Y)if(V[Q].startsWith(Z))return Q;for(let Q of Y)if(V[Q].includes(Z))return Q;return-1}function S9(_,$,j=-1,G=(Z)=>Z){let Z=Array.isArray(_)?_:[];if(j>=0&&j<Z.length){let X=G(Z[j]);if(nO(X,$))return j}return oO(Z,$,0,G)}M_();function G8(_){return String(_||"").trim().toLowerCase()}function g9(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return G8($[1]||"")}function iO(_){let $=new Set,j=[];for(let G of Array.isArray(_)?_:[]){let Z=G8(G?.agent_name);if(!Z||$.has(Z))continue;$.add(Z),j.push(G)}return j}function fV(_,$,j={}){let G=g9($);if(G==null)return[];let Z=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return iO(_).filter((X)=>{if(Z&&X?.chat_jid===Z)return!1;return G8(X?.agent_name).startsWith(G)})}function u9(_){let $=G8(_);return $?`@${$} `:""}function SV(_={}){if(_.searchMode)return!1;return Boolean(_.showSessionSwitcherButton)}function gV(_,$,j={}){if(!_||_.isComposing)return!1;if(!SV(j))return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function b9(_,$={}){if(!SV($))return!1;return String(_||"")==="@"}function v9(_){let $=m9(_);return $?`@${$}`:""}function m9(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function Z8(_,$=""){let j=String(_||""),G=m9(j),Z=m9($);if(!j.trim())return{normalized:G,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!G)return{normalized:G,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let X=`@${G}`;if(G===Z)return{normalized:G,handle:X,canSubmit:!1,kind:"info",message:`Already using ${X}.`};if(G!==j.trim())return{normalized:G,handle:X,canSubmit:!0,kind:"info",message:`Will save as ${X}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:G,handle:X,canSubmit:!0,kind:"success",message:`Saving as ${X}.`}}function sO(_,$={}){let j=[],G=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Z=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(G&&Z===G)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function X8(_,$={}){let j=v9(_?.agent_name)||String(_?.chat_jid||"").trim(),G=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Z=sO(_,$);return Z.length>0?`${j} — ${G} • ${Z.join(" • ")}`:`${j} — ${G}`}function uV(_,$,j){let G=v9(_),Z=v9($),X=String(j||"").trim();if(G&&Z&&G!==Z)return`Restored archived ${G} as ${Z} because ${G} is already in use.`;if(Z)return`Restored ${Z}.`;if(G)return`Restored ${G}.`;return`Restored ${X||"branch"}.`}function Y8({steerQueued:_=!1,pulsing:$=!1}={}){let j=["turn-dot"];if(_)j.push("turn-dot-queued");if($)j.push("turn-dot-pulsing");return j.join(" ")}function c9({pulsing:_=!1}={}){let $=["compose-inline-status-dot"];if(_)$.push("compose-inline-status-dot-pulsing");return $.join(" ")}function w6(_,{isLastActivity:$=!1,pendingRequest:j=!1}={}){if(j)return"dot";if($)return"none";if(_?.type==="error")return"none";let G=typeof _?.type==="string"?_.type:"";if(Boolean(typeof _?.tool_name==="string"&&_.tool_name.trim()||_?.tool_args))return"spinner";if(_?.type==="intent")return"dot";if(G==="tool_call"||G==="tool_status"||G==="thinking"||G==="waiting")return"spinner";return"dot"}function bV(_,$={}){return w6(_,$)==="dot"}k0();var vV=350;function aO(_){return String(_||"Connecting").replace(/[-_]+/g," ").replace(/^./,($)=>$.toUpperCase())}function tO(_,$={}){let j=typeof _==="string"&&_.trim()?_.trim():"connecting";if(j==="connected")return{show:!1,statusClass:"connected",label:"Connected",title:"Connection: Connected"};if(j!=="disconnected"){let V=aO(j);return{show:!0,statusClass:j,label:V,title:`Connection: ${V}`}}let G=Number.isFinite(Number($?.delayMs))?Math.max(0,Number($.delayMs)):vV,Z=Number.isFinite(Number($?.nowMs))?Number($.nowMs):Date.now(),X=Number.isFinite(Number($?.disconnectedAtMs))?Number($.disconnectedAtMs):Z;return Z-X>=G?{show:!0,statusClass:"disconnected",label:"Reconnecting",title:"Reconnecting"}:{show:!1,statusClass:"connecting",label:"Connecting",title:"Connecting"}}function h9(_,$={}){let j=Number.isFinite(Number($?.delayMs))?Math.max(0,Number($.delayMs)):vV,[G,Z]=C(null),[X,Y]=C(()=>Date.now());return g(()=>{if(_==="disconnected"){let V=Date.now();Z((Q)=>Q??V),Y(V);return}Z(null),Y(Date.now())},[_]),g(()=>{if(_!=="disconnected"||G===null)return;let V=j-(Date.now()-G);if(V<=0)return;let Q=0,q=0,B=setTimeout(()=>{if(typeof requestAnimationFrame!=="function"){Y(Date.now());return}Q=requestAnimationFrame(()=>{q=requestAnimationFrame(()=>{Y(Date.now())})})},V);return()=>{if(clearTimeout(B),Q)cancelAnimationFrame(Q);if(q)cancelAnimationFrame(q)}},[_,G,j]),Y0(()=>tO(_,{delayMs:j,disconnectedAtMs:G,nowMs:X}),[_,j,G,X])}k0();function V1({prefix:_="file",label:$,title:j,onRemove:G,onClick:Z,removeTitle:X="Remove",icon:Y="file"}){let V=`${_}-file-pill`,Q=`${_}-file-name`,q=`${_}-file-remove`,B=Y==="message"?F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:Y==="folder"?F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        </svg>`:F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
        </svg>`;return F`
    <span class=${V} title=${j||$} onClick=${Z}>
      ${B}
      <span class=${Q}>${$}</span>
      ${G&&F`
        <button
          class=${q}
          onClick=${(K)=>{K.preventDefault(),K.stopPropagation(),G()}}
          title=${X}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}async function l9(_,$,j){if(typeof _!=="function")return!1;try{let G=await _($);if(!G)return!1;return j(G),!0}catch(G){return!1}}function eO(_={}){let $=_.navigator??(typeof navigator<"u"?navigator:null);if(!$)return!1;let j=String($.userAgent||"");if(/iPad|iPhone/.test(j))return!0;return $.platform==="MacIntel"&&Number($.maxTouchPoints||0)>1}function _z(_={}){let $=_.window??(typeof window<"u"?window:null);if(!$)return null;return $.SpeechRecognition||$.webkitSpeechRecognition||null}function p9(_={}){let $=_.window??(typeof window<"u"?window:null),j=typeof _.secureContext==="boolean"?_.secureContext:Boolean($?.isSecureContext),G=f1(_),Z=eO(_),X=_z(_);if(!j)return{mode:"unavailable",showButton:!1,canStart:!1,reason:"secure-context-required",title:"Voice input requires HTTPS",detail:"Native browser speech input needs a secure context (HTTPS or localhost).",recognitionCtor:null,ios:Z,standalone:G,secureContext:j};if(Z&&G)return{mode:"fallback",showButton:!0,canStart:!1,reason:"ios-standalone-fallback",title:"Use keyboard dictation",detail:"Speech input is intentionally downgraded in iPhone/iPad standalone web apps because browser-native recognition is not reliable there. Focus the compose box and use the keyboard dictation mic instead.",recognitionCtor:X,ios:Z,standalone:G,secureContext:j};if(!X){if(Z)return{mode:"fallback",showButton:!0,canStart:!1,reason:"ios-keyboard-dictation",title:"Use keyboard dictation",detail:"This browser does not expose native in-page speech recognition here. Focus the compose box and use the keyboard dictation mic instead.",recognitionCtor:null,ios:Z,standalone:G,secureContext:j};return{mode:"unavailable",showButton:!1,canStart:!1,reason:"unsupported",title:"Voice input unavailable",detail:"This browser does not expose native speech recognition in this context.",recognitionCtor:null,ios:Z,standalone:G,secureContext:j}}return{mode:"native",showButton:!0,canStart:!0,reason:"supported",title:"Start voice input",detail:Z?"Browser-native speech input is available here, but Safari/WebKit reliability may still vary.":"Browser-native speech input is available.",recognitionCtor:X,ios:Z,standalone:G,secureContext:j}}function mV(_,$="",j=""){let G=String(_||""),Z=String($||"").trim(),X=String(j||"").trim(),Y=[Z,X].filter(Boolean).join(" ").trim();if(!Y)return G;if(!G)return Y;let V=/[\s\n]$/.test(G)?"":" ";return`${G}${V}${Y}`}function cV(_,$=0){let j="",G="",Z=_&&typeof _.length==="number"?_:[];for(let X=Math.max(0,$);X<Z.length;X+=1){let Y=Z[X];if(!Y||!Y[0])continue;let V=String(Y[0].transcript||"").trim();if(!V)continue;if(Y.isFinal)j=`${j} ${V}`.trim();else G=`${G} ${V}`.trim()}return{finalText:j,interimText:G}}function r9(_,$=null){let j=String(_||"").trim().toLowerCase();switch(j){case"not-allowed":case"service-not-allowed":return $?.ios?"Microphone or speech-recognition permission was denied. On iPhone/iPad, using keyboard dictation may be more reliable.":"Microphone or speech-recognition permission was denied by the browser.";case"no-speech":return"No speech was detected. Try again and speak after the listening indicator appears.";case"audio-capture":return"The browser could not access a microphone for speech recognition.";case"network":return"The browser speech-recognition service reported a network or service failure.";case"aborted":return"Voice input was stopped.";default:return j?`Voice input failed (${j}).`:"Voice input failed."}}var $z=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking/effort level"},{name:"/effort",description:"Show or set thinking/effort level (alias for /thinking)"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/meters",description:"Toggle the top-right CPU/RAM HUD (/meters on|off|toggle)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/session-rotate",description:"Rotate the current persisted session into an archived file"},{name:"/rollup",description:"Merge the current branch chat back into its parent chat"},{name:"/clone",description:"Duplicate the current active branch into a new session"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/dream",description:"Run Dream memory maintenance over recent days (default 7)"},{name:"/tasks",description:"List scheduled tasks"},{name:"/scheduled",description:"List scheduled tasks"},{name:"/pair",description:"Manage remote peer connections (/pair request <url> | /pair list)"},{name:"/ask",description:"Send a prompt to a paired remote instance (/ask <instance_id|fingerprint> <prompt>)"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/exit",description:"Exit the current piclaw process immediately (Supervisor will restart it)"},{name:"/login",description:"Login to an AI model provider (OAuth or API key)"},{name:"/logout",description:"Logout from an AI model provider"},{name:"/settings",description:"Open the settings pane"},{name:"/help",description:"Open keyboard shortcuts help"},{name:"/commands",description:"List available commands"},{name:"/skill:",description:"Run a workspace skill (e.g. /skill:visual-artifact-generator, /skill:web-search)"}],hV="piclaw_compose_history";function jz(_,$,j=!1){if(j)return{shouldApply:!1,nextToken:$,text:""};if(!_||typeof _!=="object")return{shouldApply:!1,nextToken:$,text:""};let G=typeof _.token==="string"?_.token:"",Z=typeof _.text==="string"?_.text:"";if(!G||G===$||!Z.trim())return{shouldApply:!1,nextToken:$,text:""};return{shouldApply:!0,nextToken:G,text:Z}}function Gz(_="web:default"){let $=typeof _==="string"&&_.trim()?_.trim():"web:default";if($==="web:default")return hV;return`${hV}:${encodeURIComponent($)}`}function Zz(_,$=null){let j=new Set,G=[];for(let Z of Array.isArray(_)?_:[]){let X=typeof Z?.chat_jid==="string"?Z.chat_jid.trim():"";if(!X||j.has(X))continue;if(!(typeof Z?.agent_name==="string"?Z.agent_name.trim():""))continue;j.add(X),G.push(Z)}return G.sort((Z,X)=>{let Y=Boolean(Z?.archived_at),V=Boolean(X?.archived_at);if(Y!==V)return Y?1:-1;let Q=String(Z?.agent_name||"").trim(),q=String(X?.agent_name||"").trim(),B=Q.localeCompare(q,void 0,{sensitivity:"base"});if(B!==0)return B;let K=String(Z?.chat_jid||"").trim(),N=String(X?.chat_jid||"").trim();return K.localeCompare(N,void 0,{sensitivity:"base"})}),G}function Xz(_){return Boolean(_?.is_active&&!_?.archived_at)}function Yz(_,$=null){let j=Array.isArray(_)?_:[],G=typeof $==="string"?$.trim():"";if(G){let X=j.findIndex((Y)=>{if(Y?.disabled)return!1;if(Y?.type!=="session")return!1;return(typeof Y?.chat?.chat_jid==="string"?Y.chat.chat_jid.trim():"")===G});if(X>=0)return X}let Z=j.findIndex((X)=>!X?.disabled);return Z>=0?Z:0}function lV(_,$){let j=typeof $?.command?.message==="string"?$.command.message.trim():"";if(!$?.ui_only||!j)return null;let G=typeof _==="string"?_.trim():"";if(!G.startsWith("/"))return null;let Z=G.split(/\s+/).filter(Boolean),X=Z[0]?.toLowerCase()||"";if(!(Z.length>1)&&(X==="/model"||X==="/thinking"||X==="/effort"))return j;return null}function Vz(_,$,j=!1){if(_)return{mode:"queue",className:"icon-btn send-btn queue-mode",title:"Queue follow-up (Enter)",ariaLabel:"Queue follow-up message",disabled:!$};return{mode:"send",className:"icon-btn send-btn",title:"Send (Enter)",ariaLabel:"Send message",disabled:!$}}function pV(_,$,j={}){if(!_||j.searchMode)return!1;if(!(_.key===" "||_.key==="Spacebar"||_.code==="Space"))return!1;if(_.ctrlKey||_.metaKey||_.altKey||_.repeat)return!1;if(!j.speechButtonVisible||j.speechButtonActive)return!1;if(!j.canStartSpeech)return!1;return String($||"").trim().length===0}function qz(_,$){if(!$||!_)return!1;return _.key===" "||_.key==="Spacebar"||_.code==="Space"}function Qz(_,$=!1){if(!_)return null;if($)return{mode:"compacting",className:"icon-btn send-btn abort-mode compacting-mode",title:"Compacting context — Stop response",ariaLabel:"Compacting context — Stop response",disabled:!1};return{mode:"abort",className:"icon-btn send-btn abort-mode",title:"Stop response",ariaLabel:"Stop response",disabled:!1}}function Kz(_){return _==="abort"||_==="compacting"}function Bz(_,$=0){if(_?.visible===!1)return{visible:!1,title:"",indicatorText:null,animateDot:!1,animateSpinner:!1};let j=typeof _?.message==="string"&&_.message.trim()?_.message.trim():null,G=_?.indicator&&typeof _.indicator==="object"?_.indicator:null;if(!j&&!G)return{visible:!1,title:"",indicatorText:null,animateDot:!1,animateSpinner:!1};if(G?.mode==="hidden")return{visible:Boolean(j),title:j||"Working…",indicatorText:null,animateDot:!1,animateSpinner:!1};if(G?.mode==="custom"&&Array.isArray(G.frames)&&G.frames.length>0){let Z=G.frames,X=Number.isFinite($)&&$>=0?Math.floor($)%Z.length:0;return{visible:!0,title:j||"Working…",indicatorText:Z[X],animateDot:!1,animateSpinner:!1}}return{visible:!0,title:j||"Working…",indicatorText:null,animateDot:!1,animateSpinner:!0}}function Lz({usage:_,onCompact:$,compactionLabel:j="",compactionTitle:G=""}){let Z=Math.min(100,Math.max(0,_.percent||0)),X=_.tokens,Y=_.contextWindow,V="Compact context",Q=X!=null?`Context: ${y6(X)} / ${y6(Y)} tokens (${Z.toFixed(0)}%)`:`Context: ${Z.toFixed(0)}%`,q=typeof j==="string"?j.trim():"",B=typeof G==="string"?G.trim():"",K=q?`${Q} — ${B||"Smart compaction"} · ${q}`:`${Q} — ${"Compact context"}`,N=9,L=2*Math.PI*9,U=Z/100*L,E=Z>90?"var(--context-red, #ef4444)":Z>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return F`
        <button
            class=${`compose-context-pie icon-btn${q?" is-compacting":""}`}
            type="button"
            title=${K}
            aria-label=${q?`Smart compaction ${q}`:"Compact context"}
            onClick=${(H)=>{H.preventDefault(),H.stopPropagation(),$?.()}}
        >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke=${E}
                    stroke-width="2.5"
                    stroke-dasharray=${`${U} ${L}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
            ${q&&F`<span class="compose-context-pie-timer">${q}</span>`}
        </button>
    `}function y6(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function Nz(_){let $=Number(_?.tokens);return Number.isFinite($)&&$>0?$:null}function rV(_,$){let j=Number(_?.contextWindow??_?.context_window),G=Nz($);if(!Number.isFinite(j)||j<=0||!Number.isFinite(G)||G<=0)return{blocked:!1,note:"",title:"",tokens:G??null,contextWindow:Number.isFinite(j)&&j>0?j:null};if(G<=j)return{blocked:!1,note:"",title:"",tokens:G,contextWindow:j};return{blocked:!0,note:"Current context won’t fit — compact first",title:`Current context uses ${y6(G)} tokens, but this model only fits ${y6(j)}. Compact first.`,tokens:G,contextWindow:j}}function n9(_){let $=Number(_);if(!Number.isFinite($)||$<=0)return"";return`${y6($)} ctx`}function Fz(_,$){let j=typeof _==="string"?_.trim():"",G=n9($);if(!j)return G;if(!G)return j;return`${j} • ${G}`}function Uz(_,$="",j=""){let G=typeof _==="string"?_.trim():"";if(G)return G;let Z=typeof $==="string"?$.trim():"",X=typeof j==="string"?j.trim():"";if(Z&&X)return`${Z}/${X}`;return X||Z||""}function oV(_){let $=Array.isArray(_?.model_options)?_.model_options:null,j=Array.isArray(_?.models)?_.models:[],G=$&&$.length>0?$:j,Z=[];for(let X of G){if(typeof X==="string"){let K=X.trim();if(!K)continue;let N=K.indexOf("/"),L=N>0?K.slice(0,N).trim():"",U=N>0?K.slice(N+1).trim():K;Z.push({label:K,provider:L,id:U,name:null,contextWindow:null,reasoning:!1});continue}if(!X||typeof X!=="object")continue;let Y=typeof X.provider==="string"?X.provider.trim():"",V=typeof X.id==="string"?X.id.trim():"",Q=Uz(X.label,Y,V);if(!Q)continue;let q=typeof X.name==="string"&&X.name.trim()?X.name.trim():null,B=Number(X.context_window??X.contextWindow);Z.push({label:Q,provider:Y,id:V,name:q,contextWindow:Number.isFinite(B)&&B>0?B:null,reasoning:Boolean(X.reasoning)})}return Z.sort((X,Y)=>X.label.localeCompare(Y.label,void 0,{sensitivity:"base"})),Z}function Dz(_){if(!_||typeof _!=="object")return"";return[_.label,_.provider,_.id,_.name,n9(_.contextWindow)].filter(Boolean).join(" ")}function Hz(_,$){let j=typeof _==="string"?_.trim():"";if(j)return{showPicker:!0,label:j,hasAvailableModels:!0};let G=oV($).length>0;return{showPicker:G,label:G?"Select model":"",hasAvailableModels:G}}function V8(_){return(typeof _==="string"?_.trim():"")||null}function nV(_){return V8(_)?.toLowerCase()??null}function dV(_,$){let j=nV(_),G=nV($);if(!j||!G)return!1;return j===G||j.endsWith(`/${G}`)||G.endsWith(`/${j}`)}function Ez(_,$){let j=$&&typeof $==="object"?$:{},G=V8(j.latest_response_model??j.response_model??j.responseModel??j.routed_model??j.routedModel);if(!G)return null;let Z=V8(j.latest_requested_model??j.requested_model??j.requestedModel??j.current??j.model??_);if(Z&&dV(G,Z))return null;let X=V8(_??j.current??j.model);if(X&&Z&&!dV(X,Z))return null;return{label:`Routed: ${G}`,title:Z?`Requested model: ${Z} • Routed model: ${G}`:`Routed model: ${G}`,requestedModel:Z,responseModel:G}}function Wz(_){if(!_)return _;let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!$.includes(" @ ")||!$.includes(`:
`))return _;let j=$.split(`
`),G=[],Z=0,X=!1;while(Z<j.length){let V=j[Z].trim();if(!V){Z+=1;continue}if(V==="Messages:"||V.startsWith("Channel:")||V.startsWith("Chat:")){X=!0,Z+=1;continue}if(/^[^\n]+\s@\s[^\n]+:$/.test(V)){X=!0,Z+=1;let Q=[];while(Z<j.length){let q=j[Z],B=q.trim();if(/^[^\n]+\s@\s[^\n]+:$/.test(B))break;if(B.startsWith("Channel:")||B.startsWith("Chat:")||B==="Messages:")break;Q.push(q.startsWith("  ")?q.slice(2):q),Z+=1}if(Q.length>0)G.push(Q.join(`
`).trim());continue}return _}return X&&G.length>0?G.filter(Boolean).join(`

`):_}function iV(_){let $=String(_||"").trim(),j=$.match(/^`([^`]+)`$/);return(j?j[1]:$).trim()}function Oz(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Files:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){G=q;break}if(G===-1)return{content:_,fileRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let q=j[X];if(/^\s*-\s+/.test(q)){let B=iV(q.replace(/^\s*-\s+/,"").trim());if(B)Z.push(B)}else if(!q.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let Y=j.slice(0,G),V=j.slice(X);return{content:[...Y,...V].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Z}}function zz(_){if(!_)return{content:_,folderRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Folders:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){G=q;break}if(G===-1)return{content:_,folderRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let q=j[X];if(/^\s*-\s+/.test(q)){let B=iV(q.replace(/^\s*-\s+/,"").trim());if(B)Z.push(B)}else if(!q.trim())break;else break}if(Z.length===0)return{content:_,folderRefs:[]};let Y=j.slice(0,G),V=j.slice(X);return{content:[...Y,...V].join(`
`).replace(/\n{3,}/g,`

`).trim(),folderRefs:Z}}function Jz(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Referenced messages:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){G=q;break}if(G===-1)return{content:_,messageRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let q=j[X];if(/^\s*-\s+/.test(q)){let B=q.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(B)Z.push(B[1])}else if(!q.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let Y=j.slice(0,G),V=j.slice(X);return{content:[...Y,...V].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Z}}function Az(_){if(!_)return{content:_,attachmentRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Attachments:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){G=q;break}if(G===-1)return{content:_,attachmentRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let q=j[X];if(/^\s*-\s+/.test(q)){let B=q.replace(/^\s*-\s+/,"").trim(),K=B.match(/^attachment:(\d+)(?:\s*\((.+)\))?$/i);if(K)Z.push({id:K[1],label:(K[2]||"").trim()||`attachment:${K[1]}`,raw:B})}else if(!q.trim())break;else break}if(Z.length===0)return{content:_,attachmentRefs:[]};let Y=j.slice(0,G),V=j.slice(X);return{content:[...Y,...V].join(`
`).replace(/\n{3,}/g,`

`).trim(),attachmentRefs:Z}}function sV(_){let $=Wz(_||""),j=Oz($||""),G=zz(j.content||""),Z=Jz(G.content||""),X=Az(Z.content||"");return{text:X.content||"",fileRefs:j.fileRefs,folderRefs:G.folderRefs,messageRefs:Z.messageRefs,attachmentRefs:X.attachmentRefs}}function kz(_){let $=sV(_),j=$.attachmentRefs.length>0?`Attachments:
${$.attachmentRefs.map((Z)=>`- ${Z.raw}`).join(`
`)}`:"";return{content:[String($.text||"").trim(),j].filter(Boolean).join(`

`).trim(),fileRefs:[...$.fileRefs],folderRefs:[...$.folderRefs],messageRefs:[...$.messageRefs],attachmentRefs:[...$.attachmentRefs]}}function Mz(_){let{queuedItem:$,buildDraft:j=kz,onRemoveQueuedFollowup:G,setSubmitError:Z,setSubmitNotice:X,setMediaFiles:Y,onSetFileRefs:V,onSetFolderRefs:Q,onSetMessageRefs:q,setContent:B,textareaRef:K,resizeTextarea:N=()=>{},scheduleTimeout:L=(M,z=0)=>setTimeout(M,z),scheduleRaf:U=(M)=>requestAnimationFrame(M),logger:E=console}=_||{};if(!$)return!1;let H=j($?.content||""),D=H.content;return E?.info?.("[compose-box] Returning queued item to editor",{text:D?.slice(0,80),fileRefs:H.fileRefs?.length,folderRefs:H.folderRefs?.length,messageRefs:H.messageRefs?.length}),Z?.(null),X?.(null),Y?.([]),V?.(H.fileRefs),Q?.(H.folderRefs),q?.(H.messageRefs),B?.(D),U(()=>{let M=K?.current;if(!M)return;if(M.value=D,typeof M.dispatchEvent==="function")M.dispatchEvent(new Event("input",{bubbles:!0}));N();let z=D.length;M.selectionStart=z,M.selectionEnd=z,M.focus()}),L(()=>{try{G?.($)}catch(M){E?.warn?.("[compose-box] Failed to remove returned queued follow-up.",M)}},0),!0}function Tz({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onMoveQueuedFollowup:G,onReturnQueuedFollowup:Z,onOpenFilePill:X}){if(!Array.isArray(_)||_.length===0)return null;return F`
        <div class="compose-queue-stack">
            ${_.map((Y,V)=>{let Q=typeof Y?.content==="string"?Y.content:"",q=sV(Q);if(!q.text.trim()&&q.fileRefs.length===0&&q.folderRefs.length===0&&q.messageRefs.length===0&&q.attachmentRefs.length===0)return null;let B=V>0,K=V<_.length-1,N=!0;return F`
                    <div class="compose-queue-stack-item" data-testid="queue-item" role="listitem">
                        <div class="compose-queue-stack-content" title=${Q}>
                            ${q.text.trim()&&F`<div class="compose-queue-stack-text">${q.text}</div>`}
                            ${(q.messageRefs.length>0||q.fileRefs.length>0||q.folderRefs.length>0||q.attachmentRefs.length>0)&&F`
                                <div class="compose-queue-stack-refs">
                                    ${q.messageRefs.map((L)=>F`
                                        <${V1}
                                            key=${"queue-msg-"+L}
                                            prefix="compose"
                                            label=${"msg:"+L}
                                            title=${"Message reference: "+L}
                                            icon="message"
                                        />
                                    `)}
                                    ${q.fileRefs.map((L)=>{let U=L.split("/").pop()||L;return F`
                                            <${V1}
                                                key=${"queue-file-"+L}
                                                prefix="compose"
                                                label=${U}
                                                title=${L}
                                                onClick=${()=>X?.(L)}
                                            />
                                        `})}
                                    ${q.folderRefs.map((L)=>{let U=L.split("/").pop()||L;return F`
                                            <${V1}
                                                key=${"queue-folder-"+L}
                                                prefix="compose"
                                                label=${U}
                                                title=${L}
                                                icon="folder"
                                                onClick=${()=>X?.(L)}
                                            />
                                        `})}
                                    ${q.attachmentRefs.map((L)=>F`
                                        <${V1}
                                            key=${"queue-attachment-"+L.id}
                                            prefix="compose"
                                            label=${L.label}
                                            title=${L.raw}
                                        />
                                    `)}
                                </div>
                            `}
                        </div>
                        <div class="compose-queue-stack-actions" role="group" aria-label="Queued follow-up controls">
                            ${_.length>1&&F`
                                <button
                                    class="compose-queue-stack-move-btn"
                                    data-action="move-up"
                                    type="button"
                                    title="Move up"
                                    aria-label="Move up in queue"
                                    disabled=${!B}
                                    onClick=${()=>B&&G?.(V,V-1)}
                                >
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="18 15 12 9 6 15"></polyline>
                                    </svg>
                                </button>
                                <button
                                    class="compose-queue-stack-move-btn"
                                    data-action="move-down"
                                    type="button"
                                    title="Move down"
                                    aria-label="Move down in queue"
                                    disabled=${!K}
                                    onClick=${()=>K&&G?.(V,V+1)}
                                >
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </button>
                            `}
                            ${N&&F`
                                <button
                                    class="compose-queue-stack-move-btn queue-edit"
                                    data-action="edit"
                                    type="button"
                                    title="Edit in compose"
                                    aria-label="Return queued message to editor"
                                    onClick=${(L)=>{L.stopPropagation(),Z?.(Y)}}
                                >
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                    </svg>
                                </button>
                            `}
                            <button
                                class="compose-queue-stack-steer-btn"
                                type="button"
                                title="Inject queued follow-up as steer"
                                aria-label="Inject queued follow-up as steer"
                                onClick=${()=>$?.(Y)}
                            >
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M4 20h12a2 2 0 0 0 2-2V8" />
                                    <polyline points="14 12 18 8 22 12" />
                                </svg>
                                <span>Steer</span>
                            </button>
                            <button
                                class="compose-queue-stack-close-btn queue-remove"
                                data-action="remove"
                                type="button"
                                title="Cancel queued message"
                                aria-label="Cancel queued message"
                                onClick=${()=>j?.(Y)}
                            >
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>
                    </div>
                `})}
        </div>
    `}function aV({onPost:_,onFocus:$,searchMode:j,searchScope:G="current",onSearch:Z,onSearchScopeChange:X,onEnterSearch:Y,onExitSearch:V,fileRefs:Q=[],onRemoveFileRef:q,onClearFileRefs:B,folderRefs:K=[],onRemoveFolderRef:N,onClearFolderRefs:L,messageRefs:U=[],onRemoveMessageRef:E,onClearMessageRefs:H,activeModel:D=null,agentModelsPayload:M=null,modelUsage:z=null,thinkingLevel:O=null,supportsThinking:x=!1,contextUsage:I=null,onContextCompact:J,notificationsEnabled:k=!1,notificationPermission:W="default",onToggleNotifications:T,onModelChange:w,onModelStateChange:A,activeEditorPath:P=null,onAttachEditorFile:R,onOpenFilePill:b,followupQueueItems:c=[],onInjectQueuedFollowup:r,onRemoveQueuedFollowup:e,onMoveQueuedFollowup:m,onSubmitIntercept:_0,onMessageResponse:E0,isAgentActive:Z0=!1,activeChatAgents:j0=[],currentChatJid:V0="web:default",connectionStatus:N0="connected",stateAccessFailed:h=!1,onSetFileRefs:$0,onSetFolderRefs:Q0,onSetMessageRefs:O0,onSubmitError:a,onSwitchChat:X0,onRenameSession:W0,isRenameSessionInProgress:P0=!1,onCreateSession:l0,onCreateRootSession:u0,onDeleteSession:G_,onPurgeArchivedSession:h0,onRestoreSession:s0,showQueueStack:R0=!0,statusNotice:o0=null,extensionWorkingState:v0=null,prefillRequest:t0=null}){let[i0,F_]=C(""),[Z_,m0]=C(""),[z0,V_]=C(!1),[d0,H_]=C(!1),[D0,g0]=C("or"),[x0,r0]=C([]),[z_,Q_]=C(!1),[U_,N_]=C([]),[J_,I_]=C(0),[P_,E_]=C(!1),i_=u(null),[R_,q0]=C([]),[v,n]=C(0),[s,G0]=C(!1),[F0,T0]=C(!1),[A0,M0]=C(!1),[w0,c0]=C(!1),[S0,n0]=C([]),[e0,I0]=C(0),[y0,D_]=C(0),[__,d]=C(!1),[L0,p0]=C(!1),[j_,f_]=C(0),[F1,u_]=C(null),[z1,x_]=C(null),[A_,J1]=C(()=>p9()),[W_,k_]=C({kind:"idle",title:"",detail:""}),[A1,l_]=C(()=>Date.now()),[s_,t_]=C(0),L_=u(null),y1=u(null),U1=u(null),b1=u(null),k1=u(null),_$=u(null),h4=u(null),k$=u(null),e_=u({value:"",updatedAt:0}),m_=u(null),M1=u(""),D1=u(""),$1=u(""),M$=u(""),T$=u(!1),$$=u(!1),T_=u(!1),q1=u(0),w$=u(!1),l4=200,j$=Gz(V0),p4=(y)=>{let l=new Set,i=[];for(let B0 of y||[]){if(typeof B0!=="string")continue;let f0=B0.trim();if(!f0||l.has(f0))continue;l.add(f0),i.push(f0)}return i},r4=(y=j$)=>{let l=W1(y);if(!l)return[];try{let i=JSON.parse(l);if(!Array.isArray(i))return[];return p4(i)}catch{return[]}},y$=(y,l=j$)=>{q_(l,JSON.stringify(y))},I$=u(r4(j$)),v1=u(-1),m1=u(""),n4=u("");g(()=>{I$.current=r4(j$),v1.current=-1,m1.current=""},[j$]),g(()=>{if(!j)return;fetch("/agent/settings-data").then((y)=>y.json()).then((y)=>{if(y?.searchMatchMode)g0(y.searchMatchMode)}).catch(()=>{})},[j]),g(()=>{let y=!1;return fetch(`/agent/commands?chat_jid=${encodeURIComponent(V0||"web:default")}`).then((i)=>i.ok?i.json():null).then((i)=>{if(y||!i?.commands)return;i_.current=i.commands.map((B0)=>({name:B0.name,description:B0.description||""}))}).catch((i)=>{console.debug("[compose] failed to fetch dynamic commands",i)}),()=>{y=!0}},[V0]),g(()=>{let y=jz(t0,n4.current,j);if(!y.shouldApply)return;n4.current=y.nextToken,u_(null),F_(y.text),H0(y.text),p_(y.text),requestAnimationFrame(()=>{C0();let l=L_.current;if(!l)return;try{l.focus({preventScroll:!0})}catch{l.focus()}let i=y.text.length;l.setSelectionRange?.(i,i)})},[t0,j]),g(()=>{J1(p9())},[]);let Q1=i0.trim()||x0.length>0||Q.length>0||K.length>0||U.length>0,S_=W_.kind!=="idle",d4=W_.kind==="requesting_permission"||W_.kind==="listening",I1=!j&&Boolean(A_?.showButton),x$=W_.kind==="requesting_permission"||W_.kind==="listening",o4=x$?"Stop voice input":A_?.title||"Voice input",b5=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),v5=typeof window<"u"&&typeof Notification<"u",Y4=typeof window<"u"?Boolean(window.isSecureContext):!1,i4=v5&&Y4&&W!=="denied",s4=W==="granted"&&k,K1=O$(o0),P$=b2(o0),V4=typeof o0?.detail==="string"&&o0.detail.trim()?o0.detail.trim():"",q4=K1?O6(o0,A1):null,x1=Bz(v0,s_),H1=v0?.indicator&&typeof v0.indicator==="object"?v0.indicator:null,m5=s4?"Disable notifications":"Enable notifications",Q4=x0.length>0||Q.length>0||K.length>0||U.length>0,G$=h9(h?N0:"connected"),r_=G$.label,R$=G$.title,a4=Vz(Z0,Q1,K1),Z$=Qz(Z0,K1),h6=(Array.isArray(j0)?j0:[]).filter((y)=>!y?.archived_at),b_=(()=>{for(let y of Array.isArray(j0)?j0:[]){let l=typeof y?.chat_jid==="string"?y.chat_jid.trim():"";if(l&&l===V0)return y}return null})(),e8=Boolean(b_&&b_.chat_jid===(b_.root_chat_jid||b_.chat_jid)),_3=Boolean(e8&&(b_?.chat_jid||V0)==="web:default"),C1=(()=>{let y=typeof b_?.parent_branch_id==="string"?b_.parent_branch_id.trim():"",l=typeof b_?.branch_id==="string"?b_.branch_id.trim():"";if(!b_||!y||!l||b_.archived_at)return null;if((Array.isArray(j0)?j0:[]).filter((f0)=>{let B_=typeof f0?.parent_branch_id==="string"?f0.parent_branch_id.trim():"";return B_&&B_===l}).length>0)return null;return(Array.isArray(j0)?j0:[]).find((f0)=>{let B_=typeof f0?.branch_id==="string"?f0.branch_id.trim():"";return B_&&B_===y&&!f0?.archived_at})||null})(),K4=Y0(()=>Zz(j0,V0),[j0,V0]),f$=K4.length>0,S$=f$&&typeof X0==="function",g$=f$&&typeof s0==="function",t4=Boolean(P0||w$.current),X$=!j&&typeof W0==="function"&&!t4,Y$=!j&&typeof l0==="function",B4=!j&&typeof u0==="function",L4=!j&&!Z0&&!L0&&Boolean(C1?.chat_jid),V$=!j&&typeof G_==="function"&&!_3,l6=!j&&typeof h0==="function",q$=!j&&(S$||g$||X$||Y$||B4||L4||V$||l6),p6=Hz(D,M),c5=p6.showPicker,h5=p6.label,l5=x&&O?` (${O})`:"",$3=l5.trim()?`${O}`:"",S=Ez(D,M),p=typeof z?.hint_short==="string"?z.hint_short.trim():"",o=[$3||null,S?.label||null,p||null].filter(Boolean).join(" • "),t=[D?`Current model: ${h5}${l5}`:null,S?.title||null,z?.plan?`Plan: ${z.plan}`:null,p||null,z?.primary?.reset_description||null,z?.secondary?.reset_description||null].filter(Boolean),U0=F0?"Switching model…":t.join(" • ")||(c5?"Select a model (tap to open model picker)":`Current model: ${h5}${l5} (tap to open model picker)`),K0=!j&&(c5||I&&I.percent!=null),J0=(y)=>{if(!y||typeof y!=="object")return;let l=y.model??y.current;if(typeof A==="function")A({...y,model:l??null,thinking_level:y.thinking_level??null,thinking_level_label:y.thinking_level_label??null,supports_thinking:y.supports_thinking,provider_usage:y.provider_usage??null});if(l&&typeof w==="function")w(l)},C0=(y)=>{let l=y||L_.current;if(!l)return;l.style.height="auto",l.style.height=`${l.scrollHeight}px`,l.style.overflowY="hidden"},H0=(y)=>{if(!y.startsWith("/")||y.includes(`
`)){E_(!1),N_([]);return}let l=y.toLowerCase().split(" ")[0];if(l.length<1){E_(!1),N_([]);return}let B0=(i_.current||$z).filter((f0)=>f0.name.startsWith(l)||f0.name.replace(/-/g,"").startsWith(l.replace(/-/g,"")));if(B0.length>0&&!(B0.length===1&&B0[0].name===l))G0(!1),q0([]),N_(B0),I_(0),E_(!0);else E_(!1),N_([])},a0=(y)=>{let l=i0,i=l.indexOf(" "),B0=i>=0?l.slice(i):"",f0=y.name+B0;F_(f0),E_(!1),N_([]),requestAnimationFrame(()=>{let B_=L_.current;if(!B_)return;let d_=f0.length;B_.selectionStart=d_,B_.selectionEnd=d_,B_.focus()})},p_=(y)=>{if(b9(y,{searchMode:j,showSessionSwitcherButton:q$})){G0(!1),q0([]);return}if(g9(y)==null){G0(!1),q0([]);return}let l=fV(h6,y,{currentChatJid:V0});if(l.length>0&&!(l.length===1&&u9(l[0].agent_name).trim().toLowerCase()===String(y||"").trim().toLowerCase()))E_(!1),N_([]),q0(l),n(0),G0(!0);else G0(!1),q0([])},j1=(y)=>{let l=u9(y?.agent_name);if(!l)return;F_(l),G0(!1),q0([]),requestAnimationFrame(()=>{let i=L_.current;if(!i)return;let B0=l.length;i.selectionStart=B0,i.selectionEnd=B0,i.focus()})},Q$=()=>{if(j||!S$&&!g$&&!X$&&!Y$&&!V$)return!1;return e_.current={value:"",updatedAt:0},M0(!1),E_(!1),N_([]),G0(!1),q0([]),c0(!0),!0},aj=(y)=>{if(y?.preventDefault?.(),y?.stopPropagation?.(),j||!S$&&!g$&&!X$&&!Y$&&!V$)return;if(w0){e_.current={value:"",updatedAt:0},c0(!1);return}Q$()},tj=(y)=>{let l=typeof y==="string"?y.trim():"";if(c0(!1),!l||l===V0){requestAnimationFrame(()=>L_.current?.focus());return}X0?.(l)},ej=async(y)=>{let l=typeof y==="string"?y.trim():"";if(c0(!1),!l||typeof s0!=="function"){requestAnimationFrame(()=>L_.current?.focus());return}try{await s0(l)}catch(i){console.warn("Failed to restore session:",i),requestAnimationFrame(()=>L_.current?.focus())}},n_=Y0(()=>{let y=[];for(let l of K4){let i=Boolean(l?.archived_at),B0=typeof l?.agent_name==="string"?l.agent_name.trim():"",f0=typeof l?.chat_jid==="string"?l.chat_jid.trim():"";if(!B0||!f0)continue;y.push({type:"session",key:`session:${f0}`,label:`@${B0} — ${f0}${l?.is_active?" active":""}${i?" archived":""}`,chat:l,disabled:i?!g$:!S$})}if(Y$)y.push({type:"action",key:"action:new",label:"New branch",action:"new",disabled:!1});if(B4)y.push({type:"action",key:"action:new-root",label:"New root session…",action:"new-root",disabled:!1});if(C1?.chat_jid)y.push({type:"action",key:"action:rollup",label:"Merge current w/ parent",action:"rollup",disabled:!L4});if(X$)y.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:t4});if(V$)y.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return y},[K4,g$,S$,Y$,B4,C1,L4,X$,V$,t4]),_G=async(y)=>{if(y?.preventDefault)y.preventDefault();if(y?.stopPropagation)y.stopPropagation();if(typeof W0!=="function"||P0||w$.current)return;w$.current=!0,c0(!1);try{await W0()}catch(l){console.warn("Failed to rename session:",l)}finally{w$.current=!1}requestAnimationFrame(()=>L_.current?.focus())},$G=async()=>{if(typeof l0!=="function")return;c0(!1);try{await l0()}catch(y){console.warn("Failed to create session:",y)}requestAnimationFrame(()=>L_.current?.focus())},jG=async()=>{if(typeof u0!=="function")return;c0(!1);let y=typeof window<"u"?window.prompt("New root session handle (for example: ops)"):"",l=String(y||"").trim();if(!l){requestAnimationFrame(()=>L_.current?.focus());return}try{await u0(l)}catch(i){console.warn("Failed to create root session:",i)}requestAnimationFrame(()=>L_.current?.focus())},GG=async()=>{let y=typeof C1?.chat_jid==="string"?C1.chat_jid.trim():"";if(!y||L0||Z0)return;c0(!1),u_(null),x_(null),p0(!0);try{let l=await O1("default","/rollup",null,[],null,V0);E0?.(l),_?.(l);let i=l?.command;if(i?.status==="error"){let f0=i?.message||"Failed to merge current session with parent.";u_(f0),a?.(f0);return}let B0=typeof i?.rolled_up_to==="string"&&i.rolled_up_to.trim()?i.rolled_up_to.trim():y;X0?.(B0)}catch(l){let i=l?.message||"Failed to merge current session with parent.";u_(i),a?.(i),console.warn("Failed to merge session with parent:",l)}finally{p0(!1)}requestAnimationFrame(()=>L_.current?.focus())},ZG=async()=>{if(typeof G_!=="function")return;c0(!1);try{await G_(V0)}catch(y){console.warn("Failed to delete session:",y)}requestAnimationFrame(()=>L_.current?.focus())},u$=(y)=>{if(j)m0(y);else F_(y),H0(y),p_(y);requestAnimationFrame(()=>C0())},UF=(y)=>{let l=j?Z_:i0,i=l&&!l.endsWith(`
`)?`
`:"",B0=`${l}${i}${y}`.trimStart();u$(B0)},j3=f(()=>{requestAnimationFrame(()=>{let y=L_.current;if(!y)return;try{y.focus({preventScroll:!0})}catch{y.focus()}})},[]),c1=f(()=>{k_({kind:"idle",title:"",detail:""})},[]),G3=f((y=D1.current,l=$1.current)=>{if(j)return;u$(mV(M1.current,y,l))},[j]),h1=f(()=>{T$.current=!0;let y=m_.current;if(!y){c1();return}try{y.stop()}catch{m_.current=null,c1()}},[c1]),Z3=f(()=>{if(u_(null),x_(null),m_.current){h1();return}if(!A_?.showButton)return;if(A_.mode==="fallback"){j3(),k_({kind:"guidance",title:A_.title||"Use keyboard dictation",detail:A_.detail||"Use your keyboard dictation mic for voice input here."});return}if(!A_?.canStart||!A_?.recognitionCtor){k_({kind:"error",title:A_?.title||"Voice input unavailable",detail:A_?.detail||"This browser does not expose native speech recognition in this context."});return}try{let y=new A_.recognitionCtor;if(m_.current=y,M1.current=String(i0||""),D1.current="",$1.current="",M$.current="",T$.current=!1,y.lang=typeof navigator<"u"&&navigator.language?navigator.language:"en-US",y.interimResults=!0,y.continuous=!1,"maxAlternatives"in y)y.maxAlternatives=1;y.onstart=()=>{k_({kind:"listening",title:"Listening…",detail:"Speak now. Tap the mic again to stop."})},y.onresult=(l)=>{let{finalText:i,interimText:B0}=cV(l?.results,l?.resultIndex||0);if(i)D1.current=`${D1.current} ${i}`.trim();$1.current=B0,G3(),k_({kind:"listening",title:"Listening…",detail:B0?`Heard: ${B0}`:"Speak now. Tap the mic again to stop."})},y.onerror=(l)=>{let i=String(l?.error||"").trim();if(M$.current=i,m_.current=null,$1.current="",i==="aborted"){c1();return}k_({kind:"error",title:"Voice input failed",detail:r9(i,A_)})},y.onend=()=>{let l=M$.current,i=T$.current,B0=Boolean(D1.current.trim()||$1.current.trim());if(m_.current=null,T$.current=!1,M$.current="",$1.current.trim())D1.current=`${D1.current} ${$1.current}`.trim(),$1.current="";if(B0)G3(D1.current,"");if(l&&l!=="aborted")return;if(!B0&&!i){k_({kind:"error",title:"No speech detected",detail:r9("no-speech",A_)});return}c1()},k_({kind:"requesting_permission",title:"Starting voice input…",detail:"Allow microphone access if the browser asks."}),j3(),y.start()}catch(y){m_.current=null,k_({kind:"error",title:"Voice input failed",detail:y?.message||"Could not start native browser speech recognition."})}},[G3,c1,i0,j3,A_,h1]),DF=(y)=>{let l=y?.command?.model_label;if(l)return l;let i=y?.command?.message;if(typeof i==="string"){let B0=i.match(/•\s+([^\n]+?)\s+\(current\)/);if(B0?.[1])return B0[1].trim()}return null},XG=async(y)=>{if(j||F0)return;u_(null),x_(null),T0(!0);try{let l=await O1("default",y,null,[],null,V0),i=DF(l);return J0({model:i??D??null,thinking_level:l?.command?.thinking_level,thinking_level_label:l?.command?.thinking_level_label,supports_thinking:l?.command?.supports_thinking}),await l9(y4,V0,J0),x_(lV(y,l)),_?.(l),!0}catch(l){return console.error("Failed to switch model:",l),alert("Failed to switch model: "+l.message),!1}finally{T0(!1)}},HF=(y)=>{if(y.pointerType==="mouse")return;let l=L_.current?.value??(j?Z_:i0);if(!pV(y,l,{searchMode:j,speechButtonVisible:I1,speechButtonActive:x$,canStartSpeech:Boolean(A_?.canStart&&A_?.recognitionCtor)}))return;y.preventDefault(),$$.current=!0,T_.current=!0,Z3()},X3=(y)=>{if(!$$.current)return;if(y?.preventDefault?.(),$$.current=!1,m_.current)h1()},EF=(y)=>{if(T_.current){T_.current=!1,y.preventDefault();return}Z3()},WF=async()=>{await XG("/cycle-model")},Y3=async(y)=>{let l=typeof y==="string"?y:typeof y?.label==="string"?y.label:"";if(!l||F0)return;let i=rV(y,I);if(i.blocked){u_(null),x_(i.note);return}if(await XG(`/model ${l}`))M0(!1)},OF=(y)=>{if(!y||y.disabled)return;if(y.type==="session"){let l=y.chat;if(l?.archived_at)ej(l.chat_jid);else tj(l.chat_jid);return}if(y.type==="action"){if(y.action==="new"){$G();return}if(y.action==="new-root"){jG();return}if(y.action==="rollup"){GG();return}if(y.action==="rename"){_G();return}if(y.action==="delete")ZG()}},zF=(y)=>{y.preventDefault(),y.stopPropagation(),e_.current={value:"",updatedAt:0},c0(!1),M0((l)=>!l)},JF=async()=>{if(j)return;J?.(),await e4("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeFolderRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},AF=(y)=>{if(y==="queue"||y==="steer"||y==="auto")return y;return Z0?"queue":void 0},e4=async(y,l,i={})=>{let B0=typeof y==="string"?y:i0;if(/^\/settings\s*$/i.test(B0.trim())){F_(""),requestAnimationFrame(()=>C0()),i1();return}if(/^\/help\s*$/i.test(B0.trim())){F_(""),requestAnimationFrame(()=>C0()),i1({section:"keyboard"});return}let{includeMedia:f0=!0,includeFileRefs:B_=!0,includeFolderRefs:d_=!0,includeMessageRefs:c_=!0,clearAfterSubmit:P1=!0,recordHistory:T1=!0}=i||{},YG=typeof y==="string"?y:y&&typeof y?.target?.value==="string"?y.target.value:i0,VG=typeof YG==="string"?YG:"";if(!VG.trim()&&(f0?x0.length===0:!0)&&(B_?Q.length===0:!0)&&(d_?K.length===0:!0)&&(c_?U.length===0:!0))return;if(m_.current)h1();c1(),E_(!1),N_([]),G0(!1),q0([]),c0(!1),u_(null),x_(null);let r6=f0?[...x0]:[],n6=B_?[...Q]:[],d6=d_?[...K]:[],o6=c_?[...U]:[],N4=VG.trim();if(T1&&N4){let F4=I$.current,B1=p4(F4.filter((q3)=>q3!==N4));if(B1.push(N4),B1.length>200)B1.splice(0,B1.length-200);I$.current=B1,y$(B1),v1.current=-1,m1.current=""}let bF=()=>{if(f0)r0([...r6]);if(B_)$0?.(n6);if(d_)Q0?.(d6);if(c_)O0?.(o6);F_(N4),requestAnimationFrame(()=>C0())};if(P1)F_(""),r0([]),B?.(),L?.(),H?.();(async()=>{try{let F4=await _0?.({content:N4,submitMode:l,fileRefs:n6,folderRefs:d6,messageRefs:o6,mediaFiles:r6});if(F4){_?.(F4);return}let B1=[];for(let K$ of r6){let i6=await R7(K$);B1.push(i6.id)}let q3=n6.length?`Files:
${n6.map((K$)=>`- ${K$}`).join(`
`)}`:"",vF=d6.length?`Folders:
${d6.map((K$)=>`- ${K$}`).join(`
`)}`:"",mF=o6.length?`Referenced messages:
${o6.map((K$)=>`- message:${K$}`).join(`
`)}`:"",cF=B1.length?`Attachments:
${B1.map((K$,i6)=>{let lF=r6[i6]?.name||`attachment-${i6+1}`;return`- attachment:${K$} (${lF})`}).join(`
`)}`:"",hF=[N4,q3,vF,mF,cF].filter(Boolean).join(`

`),b$=await O1("default",hF,null,B1,AF(l),V0);if(E0?.(b$),b$?.command)J0({model:b$.command.model_label??D??null,thinking_level:b$.command.thinking_level,thinking_level_label:b$.command.thinking_level_label,supports_thinking:b$.command.supports_thinking}),await l9(y4,V0,J0);x_(lV(N4,b$)),_?.(b$)}catch(F4){if(P1)bF();let B1=F4?.message||"Failed to send message.";u_(B1),a?.(B1),console.error("Failed to post:",F4)}})()},kF=(y)=>{r?.(y)},MF=f((y)=>{Mz({queuedItem:y,onRemoveQueuedFollowup:e,setSubmitError:u_,setSubmitNotice:x_,setMediaFiles:r0,onSetFileRefs:$0,onSetFolderRefs:Q0,onSetMessageRefs:O0,setContent:F_,textareaRef:L_,resizeTextarea:C0})},[e,$0,Q0,O0,C0]),p5=f((y)=>{if(j||!A0&&!w0||y?.isComposing)return!1;let l=()=>{y.preventDefault?.(),y.stopPropagation?.()},i=()=>{e_.current={value:"",updatedAt:0}};if(y.key==="Escape"){if(l(),i(),A0)M0(!1);if(w0)c0(!1);return!0}if(A0){if(y.key==="ArrowDown"){if(l(),i(),S0.length>0)I0((B0)=>(B0+1)%S0.length);return!0}if(y.key==="ArrowUp"){if(l(),i(),S0.length>0)I0((B0)=>(B0-1+S0.length)%S0.length);return!0}if((y.key==="Enter"||y.key==="Tab")&&S0.length>0)return l(),i(),Y3(S0[Math.max(0,Math.min(e0,S0.length-1))]),!0;if(T6(y)&&S0.length>0){l();let B0=f9(e_.current,y.key);e_.current=B0;let f0=S9(S0,B0.value,e0,(B_)=>Dz(B_));if(f0>=0)I0(f0);return!0}}if(w0){if(y.key==="ArrowDown"){if(l(),i(),n_.length>0)D_((B0)=>(B0+1)%n_.length);return!0}if(y.key==="ArrowUp"){if(l(),i(),n_.length>0)D_((B0)=>(B0-1+n_.length)%n_.length);return!0}if((y.key==="Enter"||y.key==="Tab")&&n_.length>0)return l(),i(),OF(n_[Math.max(0,Math.min(y0,n_.length-1))]),!0;if(T6(y)&&n_.length>0){l();let B0=f9(e_.current,y.key);e_.current=B0;let f0=S9(n_,B0.value,y0,(B_)=>B_.label);if(f0>=0)D_(f0);return!0}}return!1},[j,A0,w0,S0,e0,n_,y0,Y3]),TF=(y)=>{if(y.isComposing)return;if(j&&y.key==="Escape"){y.preventDefault(),m0(""),V?.();return}if(p5(y))return;let l=L_.current?.value??(j?Z_:i0);if(pV(y,l,{searchMode:j,speechButtonVisible:I1,speechButtonActive:x$,canStartSpeech:Boolean(A_?.canStart&&A_?.recognitionCtor)})){y.preventDefault(),$$.current=!0,Z3();return}if(gV(y,l,{searchMode:j,showSessionSwitcherButton:q$})){y.preventDefault(),Q$();return}if(s&&R_.length>0){let i=L_.current?.value??(j?Z_:i0);if(!String(i||"").match(/^@([a-zA-Z0-9_-]*)$/))G0(!1),q0([]);else{if(y.key==="ArrowDown"){y.preventDefault(),n((B0)=>(B0+1)%R_.length);return}if(y.key==="ArrowUp"){y.preventDefault(),n((B0)=>(B0-1+R_.length)%R_.length);return}if(y.key==="Tab"||y.key==="Enter"){y.preventDefault(),j1(R_[v]);return}if(y.key==="Escape"){y.preventDefault(),G0(!1),q0([]);return}}}if(P_&&U_.length>0){let i=L_.current?.value??(j?Z_:i0);if(!String(i||"").startsWith("/"))E_(!1),N_([]);else{if(y.key==="ArrowDown"){y.preventDefault(),I_((B0)=>(B0+1)%U_.length);return}if(y.key==="ArrowUp"){y.preventDefault(),I_((B0)=>(B0-1+U_.length)%U_.length);return}if(y.key==="Tab"){y.preventDefault(),a0(U_[J_]);return}if(y.key==="Enter"&&!y.shiftKey){if(!l.includes(" ")){y.preventDefault();let f0=U_[J_];E_(!1),N_([]),e4(f0.name);return}}if(y.key==="Escape"){y.preventDefault(),E_(!1),N_([]);return}}}if(!j&&(y.key==="ArrowUp"||y.key==="ArrowDown")&&!y.metaKey&&!y.ctrlKey&&!y.altKey&&!y.shiftKey){let i=L_.current;if(!i)return;let B0=i.value||"",f0=i.selectionStart===0&&i.selectionEnd===0,B_=i.selectionStart===B0.length&&i.selectionEnd===B0.length;if(y.key==="ArrowUp"&&f0||y.key==="ArrowDown"&&B_){let d_=I$.current;if(!d_.length)return;y.preventDefault();let c_=v1.current;if(y.key==="ArrowUp"){if(c_===-1)m1.current=B0,c_=d_.length-1;else if(c_>0)c_-=1;v1.current=c_,u$(d_[c_]||"")}else{if(c_===-1)return;if(c_<d_.length-1)c_+=1,v1.current=c_,u$(d_[c_]||"");else v1.current=-1,u$(m1.current||""),m1.current=""}requestAnimationFrame(()=>{let P1=L_.current;if(!P1)return;let T1=P1.value.length;P1.selectionStart=T1,P1.selectionEnd=T1});return}}if(y.key==="Enter"&&!y.shiftKey&&(y.ctrlKey||y.metaKey)){if(y.preventDefault(),j){if(l.trim())Z?.(l.trim(),G,{images:z0,attachments:d0})}else e4(l,"steer");return}if(y.key==="Enter"&&!y.shiftKey){if(y.preventDefault(),j){if(l.trim())Z?.(l.trim(),G,{images:z0,attachments:d0})}else e4(l);return}if(y.key==="Escape"){if(A0||w0||P_||s)return;y.preventDefault(),L_.current?.blur()}},wF=(y)=>{if(qz(y,$$.current)){if(y.preventDefault(),$$.current=!1,m_.current)h1()}},V3=(y)=>{let l=Array.from(y||[]).filter((i)=>i instanceof File&&!String(i.name||"").startsWith(".DS_Store"));if(!l.length)return;r0((i)=>[...i,...l]),u_(null)},yF=(y)=>{V3(y.target.files),y.target.value=""},IF=(y)=>{if(j)return;y.preventDefault(),y.stopPropagation(),q1.current+=1,Q_(!0)},xF=(y)=>{if(j)return;if(y.preventDefault(),y.stopPropagation(),q1.current=Math.max(0,q1.current-1),q1.current===0)Q_(!1)},CF=(y)=>{if(j)return;if(y.preventDefault(),y.stopPropagation(),y.dataTransfer)y.dataTransfer.dropEffect="copy";Q_(!0)},PF=(y)=>{if(j)return;y.preventDefault(),y.stopPropagation(),q1.current=0,Q_(!1),V3(y.dataTransfer?.files||[])},RF=(y)=>{if(j)return;let l=y.clipboardData?.items;if(!l||!l.length)return;let i=[];for(let B0 of l){if(B0.kind!=="file")continue;let f0=B0.getAsFile?.();if(f0)i.push(f0)}if(i.length>0)y.preventDefault(),V3(i)},fF=(y)=>{r0((l)=>l.filter((i,B0)=>B0!==y))},SF=()=>{u_(null),r0([]),B?.(),L?.(),H?.()},gF=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((y)=>{let{latitude:l,longitude:i,accuracy:B0}=y.coords,f0=`${l.toFixed(5)}, ${i.toFixed(5)}`,B_=Number.isFinite(B0)?` ±${Math.round(B0)}m`:"",d_=`https://maps.google.com/?q=${l},${i}`,c_=`Location: ${f0}${B_} ${d_}`;UF(c_)},(y)=>{let l=y?.message||"Unable to retrieve location.";alert(`Location error: ${l}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};g(()=>{if(!A0)return;e_.current={value:"",updatedAt:0},d(!0),y4(V0).then((y)=>{n0(oV(y)),J0(y)}).catch((y)=>{console.warn("Failed to load model list:",y),n0([])}).finally(()=>{d(!1)})},[A0,D]),g(()=>{if(j)M0(!1),c0(!1),E_(!1),N_([]),G0(!1),q0([])},[j]),g(()=>{if(w0&&!q$)c0(!1)},[w0,q$]),g(()=>{if(!A0)return;let y=S0.findIndex((l)=>l?.label===D);I0(y>=0?y:0)},[A0,S0,D]),g(()=>{if(!w0)return;D_(Yz(n_,V0)),e_.current={value:"",updatedAt:0}},[w0,V0,n_]),g(()=>{if(!A0)return;let y=(l)=>{let i=b1.current,B0=k1.current,f0=l.target;if(i&&i.contains(f0))return;if(B0&&B0.contains(f0))return;M0(!1)};return document.addEventListener("pointerdown",y),()=>document.removeEventListener("pointerdown",y)},[A0]),g(()=>{if(!w0)return;let y=(l)=>{let i=_$.current,B0=h4.current,f0=l.target;if(i&&i.contains(f0))return;if(B0&&B0.contains(f0))return;c0(!1)};return document.addEventListener("pointerdown",y),()=>document.removeEventListener("pointerdown",y)},[w0]),g(()=>{if(j||!A0&&!w0)return;let y=(l)=>{p5(l)};return document.addEventListener("keydown",y,!0),()=>document.removeEventListener("keydown",y,!0)},[j,A0,w0,p5]),g(()=>{if(!A0)return;let y=b1.current;y?.focus?.(),y?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[A0,e0,S0]),g(()=>{if(!w0)return;let y=_$.current;y?.focus?.(),y?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[w0,y0,n_.length]),g(()=>{if(!s||!U1.current)return;U1.current.querySelector?.(".slash-item.active")?.scrollIntoView?.({block:"nearest"})},[s,v,R_.length]),g(()=>{if(!P_||!y1.current)return;y1.current.querySelector?.(".slash-item.active")?.scrollIntoView?.({block:"nearest"})},[P_,J_,U_.length]),g(()=>{let y=(i)=>{if(!i||typeof i!=="object")return!1;if(i.isContentEditable)return!0;if(typeof i.closest!=="function")return!1;return Boolean(i.closest('input, textarea, select, [contenteditable="true"], .compose-box, .compose-model-popup, .compose-session-popup, .settings-dialog, .workspace-sidebar, .editor-pane-container, .dock-panel, .timeline-menu-dropdown, .rename-branch-overlay, .agent-request-modal, .attachment-preview-modal, .vnc-pane-shell, .kanban-plugin, .mindmap-editor, .timeline-quick-actions'))},l=(i)=>{if(i.ctrlKey||i.metaKey||i.altKey)return;let B0=L_.current;if(!B0)return;let f0=document.activeElement===B0;if(i.key==="Escape"&&!f0&&!y(i.target)){i.preventDefault(),B0.focus();return}if(i.key==="/"&&!f0&&!y(i.target))i.preventDefault(),u$("/"),requestAnimationFrame(()=>{B0.focus(),B0.selectionStart=1,B0.selectionEnd=1,H0("/")})};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[]),g(()=>{let y=()=>{let B_=k$.current?.clientWidth||0;f_((d_)=>d_===B_?d_:B_)};y();let l=k$.current,i=0,B0=()=>{if(i)cancelAnimationFrame(i);i=requestAnimationFrame(()=>{i=0,y()})},f0=null;if(l&&typeof ResizeObserver<"u")f0=new ResizeObserver(()=>B0()),f0.observe(l);if(typeof window<"u")window.addEventListener("resize",B0);return()=>{if(i)cancelAnimationFrame(i);if(f0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",B0)}},[j,D,b_?.agent_name,q$,I?.percent]);let uF=(y)=>{let l=y.target.value;if(m_.current&&y?.isTrusted)h1();if(u_(null),x_(null),W_.kind==="guidance"||W_.kind==="error")c1();if(w0)c0(!1);if(C0(y.target),b9(l,{searchMode:j,showSessionSwitcherButton:q$})){u$(""),requestAnimationFrame(()=>{let i=L_.current;if(!i)return;i.value="",i.selectionStart=0,i.selectionEnd=0,i.focus()}),Q$();return}u$(l)};return g(()=>{requestAnimationFrame(()=>C0())},[i0,Z_,j]),g(()=>{if(!j)return;if(m_.current)h1();return},[j,h1]),g(()=>{if(m_.current)h1();c1()},[V0,c1,h1]),g(()=>{return()=>{if(!m_.current)return;try{m_.current.stop()}catch(y){console.debug("[compose] failed to stop speech recognition during cleanup",y)}m_.current=null}},[]),g(()=>{if(!K1)return;l_(Date.now());let y=setInterval(()=>l_(Date.now()),1000);return()=>clearInterval(y)},[K1,o0?.started_at,o0?.startedAt]),g(()=>{if(t_(0),H1?.mode!=="custom"||!Array.isArray(H1.frames)||H1.frames.length<=1)return;let y=typeof H1.intervalMs==="number"&&Number.isFinite(H1.intervalMs)&&H1.intervalMs>0?H1.intervalMs:120,l=setInterval(()=>{t_((i)=>(i+1)%H1.frames.length)},y);return()=>clearInterval(l)},[H1]),g(()=>{if(j)return;p_(i0)},[h6,V0,i0,j]),F`
        <div class="compose-box" data-testid="compose-box">
            ${S_&&F`
                <div class=${`compose-inline-status compose-speech-status compose-speech-status-${W_.kind}`} role="status" aria-live="polite">
                    <div class="compose-inline-status-row">
                        <span class=${c9({pulsing:d4})} aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${W_.title}</span>
                    </div>
                    ${W_.detail&&F`<div class="compose-inline-status-detail">${W_.detail}</div>`}
                </div>
            `}
            ${R0&&!j&&F`
                <${Tz}
                    items=${c}
                    onInjectQueuedFollowup=${kF}
                    onRemoveQueuedFollowup=${e}
                    onMoveQueuedFollowup=${m}
                    onReturnQueuedFollowup=${MF}
                    onOpenFilePill=${b}
                />
            `}
            ${x1.visible&&F`
                <div class="compose-inline-status extension-working" role="status" aria-live="polite">
                    <div class="compose-inline-status-row">
                        ${x1.indicatorText?F`<span class="compose-inline-status-glyph" aria-hidden="true">${x1.indicatorText}</span>`:x1.animateSpinner?F`<div class="compose-inline-status-spinner" aria-hidden="true"></div>`:x1.animateDot?F`<span class=${c9({pulsing:!0})} aria-hidden="true"></span>`:null}
                        <span class="compose-inline-status-title">${x1.title}</span>
                    </div>
                </div>
            `}
            ${o0&&!K1&&F`
                <div
                    class="compose-inline-status"
                    role="status"
                    aria-live="polite"
                    title=${V4||""}
                >
                    <div class="compose-inline-status-row">
                        <div class="compose-inline-status-spinner" aria-hidden="true"></div>
                        <span class="compose-inline-status-title">${P$}</span>
                        ${q4&&F`<span class="compose-inline-status-elapsed">${q4}</span>`}
                    </div>
                    ${V4&&F`<div class="compose-inline-status-detail">${V4}</div>`}
                </div>
            `}
            ${z1&&F`
                <div class="compose-inline-status compose-command-notice" role="status" aria-live="polite">
                    <div class="compose-inline-status-detail compose-command-notice-text" dangerouslySetInnerHTML=${{__html:Z1(z1)}}></div>
                </div>
            `}
            <div
                class=${`compose-input-wrapper${z_?" drag-active":""}`}
                onDragEnter=${IF}
                onDragOver=${CF}
                onDragLeave=${xF}
                onDrop=${PF}
            >
                ${q$&&F`
                    <div
                        ref=${h4}
                        class="compose-session-trigger-group compose-session-trigger-top"
                    >
                        <button
                            type="button"
                            class=${`compose-session-trigger compose-session-trigger-pill${w0?" active":""}`}
                            data-testid="session-switcher"
                            onClick=${aj}
                            title=${b_?.chat_jid||V0}
                            aria-label=${b_?.agent_name?`Manage sessions for @${b_.agent_name}`:"Manage Sessions/Agents"}
                            aria-expanded=${w0?"true":"false"}
                        >
                            <span class="compose-current-agent-label active">${b_?.agent_name?`@${b_.agent_name}`:"Sessions"}</span>
                        </button>
                    </div>
                `}
                <div class="compose-input-main">
                    ${Q4&&F`
                        <div class="compose-file-refs">
                            ${U.map((y)=>{return F`
                                    <${V1}
                                        key=${"msg-"+y}
                                        prefix="compose"
                                        label=${"msg:"+y}
                                        title=${"Message reference: "+y}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>E?.(y)}
                                    />
                                `})}
                            ${Q.map((y)=>{let l=y.split("/").pop()||y;return F`
                                    <${V1}
                                        prefix="compose"
                                        label=${l}
                                        title=${y}
                                        onClick=${()=>b?.(y)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>q?.(y)}
                                    />
                                `})}
                            ${K.map((y)=>{let l=y.split("/").pop()||y;return F`
                                    <${V1}
                                        prefix="compose"
                                        label=${l}
                                        title=${y}
                                        icon="folder"
                                        onClick=${()=>b?.(y)}
                                        removeTitle="Remove folder hint"
                                        onRemove=${()=>N?.(y)}
                                    />
                                `})}
                            ${x0.map((y,l)=>{let i=y?.name||`attachment-${l+1}`;return F`
                                    <${V1}
                                        key=${i+l}
                                        prefix="compose"
                                        label=${i}
                                        title=${i}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>fF(l)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${SF}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    <textarea
                        ref=${L_}
                        data-testid="compose-input"
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?Z_:i0}
                        onInput=${uF}
                        onKeyDown=${TF}
                        onKeyUp=${wF}
                        onPaste=${RF}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${s&&R_.length>0&&F`
                        <div class="slash-autocomplete" ref=${U1}>
                            ${R_.map((y,l)=>F`
                                <div
                                    key=${y.chat_jid||y.agent_name}
                                    class=${`slash-item${l===v?" active":""}`}
                                    onMouseDown=${(i)=>{i.preventDefault(),j1(y)}}
                                    onMouseEnter=${()=>n(l)}
                                >
                                    <span class="slash-name">@${y.agent_name}</span>
                                    <span class="slash-desc">${y.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${P_&&U_.length>0&&F`
                        <div class="slash-autocomplete" ref=${y1}>
                            ${U_.map((y,l)=>F`
                                <div
                                    key=${y.name}
                                    class=${`slash-item${l===J_?" active":""}`}
                                    onMouseDown=${(i)=>{i.preventDefault(),a0(y)}}
                                    onMouseEnter=${()=>I_(l)}
                                >
                                    <span class="slash-name">${y.name}</span>
                                    <span class="slash-desc">${y.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${A0&&!j&&F`
                        <div class="compose-model-popup" ref=${b1} tabIndex="-1" onKeyDown=${p5}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${__&&F`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!__&&S0.length===0&&F`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!__&&S0.map((y,l)=>{let i=typeof y?.label==="string"?y.label:"",B0=n9(y?.contextWindow),f0=y?.name||null,B_=rV(y,I);return F`
                                        <button
                                            key=${i}
                                            type="button"
                                            role="menuitem"
                                            class=${`compose-model-popup-item compose-model-popup-model-item${e0===l?" active":""}${D===i?" current-model":""}${B_.blocked?" context-blocked":""}`}
                                            onClick=${()=>{Y3(y)}}
                                            disabled=${F0||B_.blocked}
                                            title=${[i,f0,B0,B_.title].filter(Boolean).join(" • ")}
                                        >
                                            <span class="compose-model-popup-model-stack">
                                                <span class="compose-model-popup-model-label">${Fz(i,y?.contextWindow)}${f0?F` <span class="compose-model-popup-model-subtitle">${f0}</span>`:""}</span>
                                                ${B_.blocked&&F`<span class="compose-model-popup-model-note">${B_.note}</span>`}
                                            </span>
                                        </button>
                                    `})}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{WF()}}
                                    disabled=${F0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${w0&&!j&&F`
                        <div class="compose-model-popup" data-testid="session-popup" ref=${_$} tabIndex="-1" onKeyDown=${p5}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${!f$&&F`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${f$&&K4.map((y,l)=>{let i=Boolean(y.archived_at),B0=y.chat_jid===(y.root_chat_jid||y.chat_jid),f0=!B0&&!y.is_active&&!i&&typeof G_==="function",B_=i&&l6,d_=X8(y,{currentChatJid:V0});return F`
                                        <div key=${y.chat_jid} class=${`compose-model-popup-item-row${i?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item session-item${i?" archived":""}${y0===l?" active":""}`}
                                                data-testid="session-item"
                                                onClick=${()=>{if(i){ej(y.chat_jid);return}tj(y.chat_jid)}}
                                                disabled=${i?!g$:!S$}
                                                title=${i?`Restore archived ${`@${y.agent_name}`}`:`Switch to ${`@${y.agent_name}`}`}
                                            >
                                                <span style=${Xz(y)?"font-weight:700":""}>${d_}</span>
                                            </button>
                                            <button
                                                type="button"
                                                class="compose-model-popup-item-popout"
                                                title=${`Open @${y.agent_name} in new window`}
                                                aria-label=${`Open @${y.agent_name} in new window`}
                                                onClick=${(c_)=>{c_.stopPropagation(),c0(!1);let P1=new URL(window.location.href);P1.searchParams.set("chat_jid",y.chat_jid),P1.searchParams.set("chat_only","1");let T1=document.createElement("a");T1.href=P1.toString(),T1.target="_blank",T1.rel="noopener",T1.style.display="none",document.body.appendChild(T1),T1.click(),T1.remove()}}
                                            >
                                                <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M6 2h8v8"/>
                                                    <path d="M14 2 7 9"/>
                                                    <path d="M12 9v5H2V4h5"/>
                                                </svg>
                                            </button>
                                            ${(f0||B_)&&F`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title=${B_?B0?"Permanently delete this archived session":"Permanently delete this archived branch":"Delete this branch"}
                                                    aria-label=${B_?B0?`Permanently delete archived session @${y.agent_name}`:`Permanently delete archived branch @${y.agent_name}`:`Delete @${y.agent_name}`}
                                                    onClick=${(c_)=>{if(c_.stopPropagation(),c0(!1),B_){h0?.(y.chat_jid);return}G_(y.chat_jid)}}
                                                >
                                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                                        <line x1="18" y1="6" x2="6" y2="18" />
                                                        <line x1="6" y1="6" x2="18" y2="18" />
                                                    </svg>
                                                </button>
                                            `}
                                        </div>
                                    `})}
                            </div>
                            ${(Y$||B4||X$||V$)&&F`
                                <div class="compose-model-popup-actions">
                                    ${Y$&&F`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${n_.findIndex((y)=>y.key==="action:new")===y0?" active":""}`}
                                            onClick=${()=>{$G()}}
                                            title="Create a new branch from this chat"
                                        >
                                            New branch
                                        </button>
                                    `}
                                    ${B4&&F`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${n_.findIndex((y)=>y.key==="action:new-root")===y0?" active":""}`}
                                            onClick=${()=>{jG()}}
                                            title="Create a clean root session such as web:ops"
                                        >
                                            New root…
                                        </button>
                                    `}
                                    ${C1?.chat_jid&&F`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${n_.findIndex((y)=>y.key==="action:rollup")===y0?" active":""}`}
                                            onClick=${()=>{GG()}}
                                            title=${L4?`Merge this branch into ${C1.agent_name?`@${C1.agent_name}`:C1.chat_jid}`:"This branch cannot be merged while active or while it has children"}
                                            disabled=${!L4}
                                        >
                                            Merge current w/ parent
                                        </button>
                                    `}
                                    ${X$&&F`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${n_.findIndex((y)=>y.key==="action:rename")===y0?" active":""}`}
                                            onClick=${(y)=>{_G(y)}}
                                            title="Rename the current session"
                                            disabled=${t4}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${V$&&F`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${n_.findIndex((y)=>y.key==="action:delete")===y0?" active":""}`}
                                            onClick=${()=>{ZG()}}
                                            title="Delete (prune) current agent/session branch"
                                        >
                                            Delete current…
                                        </button>
                                    `}
                                </div>
                            `}
                        </div>
                    `}
                </div>
                <div class="compose-footer" ref=${k$}>
                    ${G$.show&&F`
                        <span class="compose-connection-status connection-status ${G$.statusClass}" title=${R$}>
                            ${r_}
                        </span>
                    `}
                    ${K0&&F`
                    <div class="compose-meta-row">
                        ${c5&&F`
                            <div class="compose-model-meta">
                                <button
                                    ref=${k1}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${U0}
                                    aria-label="Open model picker"
                                    onClick=${zF}
                                    disabled=${F0}
                                >
                                    ${F0?"Switching…":h5}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!F0&&o&&F`
                                        <span class="compose-model-usage-hint" title=${U0}>
                                            ${o}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&I&&I.percent!=null&&F`
                            <${Lz}
                                usage=${I}
                                onCompact=${JF}
                                compactionLabel=${K1?q4||"0:00":""}
                                compactionTitle=${K1?P$||"Smart compaction":""}
                            />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${j&&F`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${G}
                                onChange=${(y)=>X?.(y.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                        <label class="compose-search-filter-wrap" title="Only show messages with images">
                            <input type="checkbox" checked=${z0} onChange=${()=>V_((y)=>!y)} />
                            <span class="compose-search-filter-label">Images</span>
                        </label>
                        <label class="compose-search-filter-wrap" title="Only show messages with attachments">
                            <input type="checkbox" checked=${d0} onChange=${()=>H_((y)=>!y)} />
                            <span class="compose-search-filter-label">Attachments</span>
                        </label>
                        <button
                            class=${`compose-search-match-toggle ${D0==="and"?"active":""}`}
                            onClick=${()=>{let y=D0==="or"?"and":"or";g0(y),fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:y})}).catch((l)=>{})}}
                            title=${D0==="or"?"Any keyword (OR) — click for all keywords (AND)":"All keywords (AND) — click for any keyword (OR)"}
                            type="button"
                        >
                            ${D0==="or"?"OR":"AND"}
                        </button>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?V:Y}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?F`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:F`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${b5&&!j&&F`
                        <button
                            class="icon-btn location-btn"
                            onClick=${gF}
                            title="Share location"
                            type="button"
                            disabled=${!1}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 2a14 14 0 0 1 0 20a14 14 0 0 1 0-20" />
                                <path d="M2 12h20" />
                            </svg>
                        </button>
                    `}
                    ${I1&&F`
                        <button
                            class=${`icon-btn voice-input-btn${x$?" active":""}${A_.mode==="fallback"?" fallback":""}`}
                            onClick=${EF}
                            onPointerDown=${HF}
                            onPointerUp=${X3}
                            onPointerCancel=${X3}
                            onPointerLeave=${X3}
                            title=${o4}
                            aria-label=${o4}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z" />
                                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                                <path d="M12 19v3" />
                            </svg>
                        </button>
                    `}
                    ${i4&&!j&&F`
                        <button
                            class=${`icon-btn notification-btn${s4?" active":""}`}
                            onClick=${T}
                            title=${m5}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&F`
                        ${P&&R&&F`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${R}
                                title=${`Attach open file: ${P}`}
                                type="button"
                                disabled=${Q.includes(P)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${yF} />
                        </label>
                    `}
                    ${!j&&F`
                        <div class="compose-send-stack">
                                <button 
                                    class=${a4.className}
                                    data-testid="send-button"
                                    type="button"
                                    onClick=${()=>{e4()}}
                                    disabled=${a4.disabled}
                                    title=${a4.title}
                                    aria-label=${a4.ariaLabel}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                                </button>
                                ${Z$&&F`
                                    <button 
                                        class=${Z$.className}
                                        data-testid="stop-button"
                                        type="button"
                                        onClick=${()=>{if(Kz(Z$.mode))e4("/abort","steer",{clearAfterSubmit:!1,includeMedia:!1,includeFileRefs:!1,includeFolderRefs:!1,includeMessageRefs:!1,recordHistory:!1})}}
                                        disabled=${Z$.disabled}
                                        title=${Z$.title}
                                        aria-label=${Z$.ariaLabel}
                                    >
                                        ${Z$.mode==="compacting"?F`
                                                <span class="compose-submit-spinner" aria-hidden="true">
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                                        <circle class="compose-submit-spinner-ring" cx="12" cy="12" r="10.5" stroke-width="2.25" stroke-linecap="round"></circle>
                                                        <rect class="compose-submit-spinner-stop" x="6" y="6" width="12" height="12" rx="0" fill="currentColor"></rect>
                                                    </svg>
                                                </span>
                                            `:F`<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16" rx="2.5"/></svg>`}
                                    </button>
                                `}
                        </div>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}k0();function tV({kind:_="hidden",onSetupProvider:$,onDismiss:j}){if(_==="hidden")return null;let G=_==="provider-missing",Z=G?"Instance needs setup":"Instance is configured",X=G?"This instance is not yet configured. Open Settings and set up AI providers/models to start sending requests.":"This instance looks configured. Review or update provider and model settings in Settings.";return F`
    <section class=${`oobe-panel oobe-panel-${_}`} aria-label="Getting started">
      <div class="oobe-panel-copy">
        <div class="oobe-panel-eyebrow">Getting started</div>
        <h2 class="oobe-panel-title">${Z}</h2>
        <p class="oobe-panel-body">${X}</p>
      </div>
      <div class="oobe-panel-actions">
        <button type="button" class="oobe-panel-btn oobe-panel-btn-primary" onClick=${()=>$?.()}>
          Open Settings
        </button>
        <button type="button" class="oobe-panel-btn" onClick=${()=>j?.()}>
          ${G?"Dismiss":"Done"}
        </button>
      </div>
    </section>
  `}k0();function eV(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function _q(_){return String(_||"").trim()||"web:default"}function $q(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function jq(_){if(!_)return!1;return _.status!=="running"}function Gq(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function Zq({session:_,onClose:$,onInject:j,onRetry:G}){let Z=u(null),X=u(null),Y=_?.thinking?G6(_.thinking):"",V=_?.answer?Z1(_.answer,null):"";if(g(()=>{if(Z.current&&Y)E$(Z.current).catch((E)=>{console.debug("[btw-panel] Mermaid rendering failed for BTW thinking content.",E)})},[Y]),g(()=>{if(X.current&&V)E$(X.current).catch((E)=>{console.debug("[btw-panel] Mermaid rendering failed for BTW answer content.",E)})},[V]),!_)return null;let Q=_.status==="running",q=Boolean(String(_.answer||"").trim()),B=Boolean(String(_.thinking||"").trim()),K=$q(_),N=jq(_),L=!Q&&q,U=Q?"Thinking…":_.status==="error"?"Error":"Done";return F`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${U}</span>
                </div>
                <button class="btw-panel-close" onClick=${()=>$?.()} title="Close BTW" aria-label="Close BTW">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>

            ${_.question&&F`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&F`<div class="btw-block btw-error">${_.error}</div>`}
            ${B&&F`
                <details class="btw-block btw-thinking" open=${Q?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${Z}
                        dangerouslySetInnerHTML=${{__html:Y}}
                    ></div>
                </details>
            `}
            ${K&&F`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${X}
                        dangerouslySetInnerHTML=${{__html:V}}
                    ></div>
                </div>
            `}

            ${N&&F`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&F`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>G?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!L}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}k0();function d9(_,$){try{if(_)_.name=$;return!0}catch(j){return!1}}function o9(_,$){try{return _?.contentWindow?.postMessage?.($,"*"),!0}catch(j){return!1}}function wz(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg"&&j!=="session_tree")return null;if(j==="html"){let Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Z?{kind:j,html:Z}:null}if(j==="svg"){let Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Z?{kind:j,svg:Z}:null}let G=$.tree&&typeof $.tree==="object"?$.tree:_?.tree&&typeof _.tree==="object"?_.tree:null;return{kind:j,tree:G}}function yz(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",G=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Z=$.tree&&typeof $.tree==="object"?$.tree:_?.tree&&typeof _.tree==="object"?_.tree:null,X=$.kind||_?.kind||null,Y=X==="session_tree"?"session_tree":X==="svg"||j?"svg":"html";if(Y==="session_tree")return{kind:Y,tree:Z};if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return G?{kind:Y,html:G}:{kind:Y}}function e$(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function X_(_){return typeof _==="string"&&_.trim()?_.trim():null}function Yq(_,$=!1){let G=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Z)=>typeof Z==="string").map((Z)=>Z.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(G))}var Vq="__PICLAW_WIDGET_HOST__:";function Xq(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function i9(_,$){if(!_||_.type!=="generated_widget")return null;let j=wz(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:Yq(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function qq(_){if(!_||typeof _!=="object")return null;let $=yz(_),j=X_(_?.widget_id)||X_(_?.widgetId)||X_(_?.tool_call_id)||X_(_?.toolCallId),G=X_(_?.tool_call_id)||X_(_?.toolCallId),Z=X_(_?.turn_id)||X_(_?.turnId),X=X_(_?.title)||X_(_?.name)||"Generated widget",Y=X_(_?.subtitle)||"",V=X_(_?.description)||Y,Q=X_(_?.status),q=Q==="loading"||Q==="streaming"||Q==="final"||Q==="error"?Q:"streaming";return{title:X,subtitle:Y,description:V,originPostId:e$(_?.origin_post_id)??e$(_?.originPostId),originChatJid:X_(_?.origin_chat_jid)||X_(_?.originChatJid)||X_(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:Yq(_?.capabilities,!0),source:"live",status:q,turnId:Z,toolCallId:G,width:e$(_?.width),height:e$(_?.height),error:X_(_?.error)}}function Qq(_){return i9(_,null)!==null}function N1(_){let $=X_(_?.toolCallId)||X_(_?.tool_call_id);if($)return $;let j=X_(_?.widgetId)||X_(_?.widget_id);if(j)return j;let G=e$(_?.originPostId)??e$(_?.origin_post_id);if(G!==null)return`post:${G}`;return null}function Kq(_){let j=(_?.artifact||{}).kind||_?.kind||null,Z=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((X)=>typeof X==="string"&&X.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Z)}function Bq(_){return Kq(_)?"allow-downloads allow-scripts allow-same-origin allow-forms":"allow-downloads"}function q8(_){return{title:X_(_?.title)||"Generated widget",widgetId:X_(_?.widgetId)||X_(_?.widget_id),toolCallId:X_(_?.toolCallId)||X_(_?.tool_call_id),turnId:X_(_?.turnId)||X_(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:X_(_?.status)||"final"}}function Q8(_){return{...q8(_),subtitle:X_(_?.subtitle)||"",description:X_(_?.description)||"",error:X_(_?.error)||null,width:e$(_?.width),height:e$(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function K8(_){return`${Vq}${JSON.stringify(Q8(_))}`}function Lq(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=X_(_.text)||X_(_.content)||X_(_.message)||X_(_.prompt)||X_(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let G=X_(j.text)||X_(j.content)||X_(j.message)||X_(j.prompt)||X_(j.value);if(G)return G}return null}function Nq(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function Fq(_){let $=X_(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return X_(_?.error)||"Widget failed to load.";if((_?.artifact?.kind||_?.kind)==="session_tree")return"Session tree widget is unavailable.";return"Widget artifact is missing or unsupported."}function Iz(_){let $=q8(_);return`<script>
(function () {
  const meta = ${Xq($)};
  function post(kind, payload) {
    try {
      window.parent.postMessage({
        __piclawGeneratedWidget: true,
        kind,
        widgetId: meta.widgetId || null,
        toolCallId: meta.toolCallId || null,
        turnId: meta.turnId || null,
        payload: payload || {}
      }, '*');
    } catch {
      /* expected: parent bridge may be unavailable while the iframe is unloading. */
    }
  }

  const windowNamePrefix = ${Xq(Vq)};
  let lastWindowName = null;
  let pendingHostEnvelope = null;
  let pendingHostEnvelopeFrame = 0;
  let lastDispatchedEnvelopeKey = null;

  function getEnvelopeKey(data) {
    try {
      return JSON.stringify([
        data?.type || null,
        data?.widgetId || null,
        data?.toolCallId || null,
        data?.turnId || null,
        data?.payload || null,
      ]);
    } catch {
      return null;
    }
  }

  function flushHostEnvelope() {
    pendingHostEnvelopeFrame = 0;
    const data = pendingHostEnvelope;
    pendingHostEnvelope = null;
    if (!data) return;

    window.piclawWidget.lastHostMessage = data;
    const nextPayload = data.payload || null;
    if (data.type === 'widget.init') {
      const previous = window.piclawWidget.hostState && typeof window.piclawWidget.hostState === 'object'
        ? window.piclawWidget.hostState
        : null;
      if (nextPayload && typeof nextPayload === 'object') {
        window.piclawWidget.hostState = {
          ...(previous || {}),
          ...nextPayload,
          ...(Object.prototype.hasOwnProperty.call(nextPayload, 'runtimeState')
            ? {}
            : { runtimeState: previous?.runtimeState ?? null }),
        };
      } else {
        window.piclawWidget.hostState = previous || null;
      }
    } else if (data.type === 'widget.update' || data.type === 'widget.complete' || data.type === 'widget.error') {
      window.piclawWidget.hostState = nextPayload;
    }

    const effectivePayload = window.piclawWidget.hostState ?? nextPayload ?? null;
    const detail = (effectivePayload === data.payload)
      ? data
      : { ...data, payload: effectivePayload };
    const envelopeKey = getEnvelopeKey(detail);
    if (envelopeKey && envelopeKey === lastDispatchedEnvelopeKey) return;
    lastDispatchedEnvelopeKey = envelopeKey;
    window.dispatchEvent(new CustomEvent('piclaw:widget-message', { detail }));
  }

  function scheduleHostEnvelope(data) {
    if (!data) return;
    pendingHostEnvelope = data;
    if (pendingHostEnvelopeFrame) return;
    const schedule = typeof requestAnimationFrame === 'function'
      ? requestAnimationFrame
      : (cb) => setTimeout(cb, 0);
    pendingHostEnvelopeFrame = schedule(flushHostEnvelope);
  }

  function readWindowNameState() {
    try {
      const raw = window.name || '';
      if (!raw || raw === lastWindowName || !raw.startsWith(windowNamePrefix)) return;
      lastWindowName = raw;
      const payload = JSON.parse(raw.slice(windowNamePrefix.length));
      scheduleHostEnvelope({
        __piclawGeneratedWidgetHost: true,
        type: 'widget.update',
        widgetId: meta.widgetId || null,
        toolCallId: meta.toolCallId || null,
        turnId: meta.turnId || null,
        payload,
      });
    } catch {
      /* expected: host window.name payload can be absent or mid-update while polling. */
    }
  }

  window.piclawWidget = {
    meta,
    lastHostMessage: null,
    hostState: null,
    ready(payload) { post('widget.ready', payload); },
    close(payload) { post('widget.close', payload); },
    requestRefresh(payload) { post('widget.request_refresh', payload); },
    submit(payload) { post('widget.submit', payload); },
  };

  window.addEventListener('message', function (event) {
    const data = event && event.data;
    if (!data || data.__piclawGeneratedWidgetHost !== true) return;
    if ((data.widgetId || null) !== (meta.widgetId || null)) return;
    scheduleHostEnvelope(data);
  });

  function announceReady() {
    readWindowNameState();
    post('widget.ready', { title: document.title || meta.title || 'Generated widget' });
  }

  setInterval(readWindowNameState, 250);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', announceReady, { once: true });
  } else {
    announceReady();
  }
})();
</script>`}function Uq(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,G=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",X=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",Y=j==="svg"?Z:G;if(!Y)return"";let V=Kq(_),Q=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src 'self' data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",V?"script-src 'unsafe-inline' 'self'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),q=j==="svg"?`<div class="widget-svg-shell">${Y}</div>`:Y,B=V?Iz(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${Q}" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${X.replace(/[<&>]/g,"")}</title>
<style>
:root { color-scheme: dark light; }
html, body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  background: #0f1117;
  color: #f5f7fb;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
body {
  box-sizing: border-box;
}
.widget-svg-shell {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;
}
.widget-svg-shell svg {
  max-width: 100%;
  height: auto;
}
</style>
${B}
</head>
<body>${q}</body>
</html>`}k0();function xz(_){let $=new Map,j=[];for(let Y of _||[])$.set(Y.id,{...Y,children:[],depth:0});for(let Y of _||[]){let V=$.get(Y.id);if(!V)continue;let Q=Y.parentId?$.get(Y.parentId):null;if(Q)Q.children.push(V);else j.push(V)}let G=new Set;for(let[,Y]of $){if(Y.role!=="assistant"||!Y.toolName)continue;if(Y.children.length!==1)continue;let V=Y.children[0];if(V.role!=="toolResult")continue;Y.resultDetail=V.detail||null,Y.resultLength=V.contentLength||0,Y.resultId=V.id,Y.merged=!0,Y.children=V.children;for(let Q of Y.children)Q.parentId=Y.id;G.add(V.id)}let Z=j.filter((Y)=>!G.has(Y.id)),X=[];for(let Y=Z.length-1;Y>=0;Y--)Z[Y].depth=0,X.push(Z[Y]);while(X.length>0){let Y=X.pop(),V=Y.children.length>1;for(let Q=Y.children.length-1;Q>=0;Q--)Y.children[Q].depth=V?Y.depth+1:Y.depth,X.push(Y.children[Q])}return Z}function Cz(_){let $=[],j=[];for(let G=_.length-1;G>=0;G--)j.push(_[G]);while(j.length>0){let G=j.pop();$.push(G);for(let Z=G.children.length-1;Z>=0;Z--)j.push(G.children[Z])}return $}function Dq(_){if(!_||_<=0)return"";if(_<1000)return`${_}`;if(_<1e6)return`${(_/1000).toFixed(1)}k`;return`${(_/1e6).toFixed(1)}M`}function T5(_){if(!_||_<=0)return"";if(_<1000)return`${_} chars`;if(_<1e6)return`${(_/1000).toFixed(1)}k chars`;return`${(_/1e6).toFixed(1)}M chars`}function Pz(_){let $=_.type;if($==="model_change")return{tag:"model",tagClass:"system",text:`${_.preview?.replace("[model ","").replace("]","")||""}`};if($==="thinking_level_change")return{tag:"thinking",tagClass:"system",text:_.preview?.replace("[thinking ","").replace("]","")||""};if($==="compaction")return{tag:"compaction",tagClass:"system",text:_.preview?.replace("[compaction: ","").replace("]","")||""};if($==="label")return{tag:"label",tagClass:"system",text:_.preview?.replace("[label ","").replace("]","")||""};if($==="session_info")return{tag:"session",tagClass:"system",text:_.preview?.replace("[session name ","").replace("]","")||""};if($==="branch_summary")return{tag:"summary",tagClass:"system",text:_.preview||""};if($!=="message")return{tag:$||"?",tagClass:"system",text:_.preview||""};let j=_.role||"message";if(_.merged&&_.toolName){let Z=(_.toolInput||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:_.toolName,tagClass:"tool",text:X||""}}if(j==="assistant"&&_.toolName){let Z=(_.toolInput||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:_.toolName,tagClass:"tool",text:X||"…"}}if(j==="toolResult"){let Z=(_.detail||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:`→ ${_.toolName||"result"}`,tagClass:"result",text:X}}if(j==="user"){let X=(_.previewText||_.detail||_.preview||"").replace(/^user:\s*"?/,"").replace(/"?\s*$/,"").split(`
`)[0];return{tag:"user",tagClass:"user",text:X.length>120?X.slice(0,119)+"…":X}}if(j==="assistant"){let X=(_.detail||_.preview||"").replace(/^assistant:\s*"?/,"").replace(/"?\s*$/,"").split(`
`)[0];return{tag:"assistant",tagClass:"assistant",text:X.length>120?X.slice(0,119)+"…":X}}return{tag:j,tagClass:"other",text:_.preview||""}}function Rz(_,$=!1){let j=typeof _==="string"?_.trim():"";if(!j)return null;return{text:$?`/tree ${j} --summarize`:`/tree ${j}`,navigateTargetId:j,summarize:Boolean($)}}function Hq(_){let $=typeof _==="string"?_.trim():"";if(!$.startsWith("/tree"))return null;let j=$.split(/\s+/).filter(Boolean);if(j[0]!=="/tree")return null;let G=null,Z=!1;for(let X=1;X<j.length;X++){let Y=j[X];if(Y==="--summarize"){Z=!0;continue}if(!G&&!Y.startsWith("--"))G=Y}return G?{targetId:G,summarize:Z}:null}function fz(_,$,j,G){let Z=Array.isArray(_)?_:[];if(Z.length===0)return null;let X=(V)=>typeof V==="string"&&Z.some((Q)=>Q?.id===V);if(X($))return $;if(X(j))return j;if(X(G))return G;let Y=Z.find((V)=>V?.active);if(Y?.id)return Y.id;return Z[0]?.id||null}function Sz(_){if(!_||typeof _!=="object")return null;let $=typeof _.type==="string"?_.type:"",j=typeof _.preview==="string"?_.preview.trim():"",G=typeof _.error==="string"?_.error.trim():"",Z=Hq(j),X=j||"tree command";if($==="submit_pending")return{tone:"pending",text:Z?`Sending ${X}`:"Sending tree command…",refreshDelays:[]};if($==="submit_sent")return{tone:"info",text:Z?`Running ${X}`:"Tree command sent.",refreshDelays:Z?[500,1500,3500,8000]:[]};if($==="submit_queued")return{tone:"info",text:Z?`Queued ${X}`:"Tree command queued.",refreshDelays:Z?[1200,3200,7000,12000]:[]};if($==="submit_failed")return{tone:"error",text:G?`Tree command failed: ${G}`:"Tree command failed.",refreshDelays:[]};if($==="refresh_building")return{tone:"pending",text:"Refreshing widget…",refreshDelays:[]};if($==="refresh_failed")return{tone:"error",text:G?`Refresh failed: ${G}`:"Refresh failed.",refreshDelays:[]};if($==="refresh_dashboard"||$==="refresh_ack")return{tone:"success",text:"Widget refreshed.",refreshDelays:[]};return null}function Eq({widget:_,onWidgetEvent:$}){let j=_?.artifact?.tree&&typeof _.artifact.tree==="object"?_.artifact.tree:null,G=typeof _?.originChatJid==="string"&&_.originChatJid.trim()?_.originChatJid.trim():null,Z=_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null,X=Z?.lastHostUpdate&&typeof Z.lastHostUpdate==="object"?Z.lastHostUpdate:null,[Y,V]=C(()=>({loading:!j,error:null,data:j})),[Q,q]=C(()=>j?.leafId||null),[B,K]=C(""),N=u(null),L=u(null),U=u(j?.leafId||null),E=u(null),H=u(""),D=async()=>{V((k)=>({...k,loading:!0,error:null}));try{let k=G?`?chat_jid=${encodeURIComponent(G)}`:"",W=await fetch(`/agent/session-tree${k}`,{method:"GET",credentials:"same-origin",headers:{Accept:"application/json"}}),T=await W.json().catch(()=>({}));if(!W.ok)throw Error(T?.error||`HTTP ${W.status}`);V({loading:!1,error:null,data:T})}catch(k){V((W)=>({loading:!1,error:k?.message||"Failed to load tree.",data:W?.data||j||null}))}};E.current=D,g(()=>{D()},[G]);let M=Y0(()=>{let k=Y.data;if(!k||!Array.isArray(k.nodes)||k.nodes.length===0)return[];return Cz(k.flat?xz(k.nodes):k.nodes)},[Y.data]);g(()=>{let k=fz(M,Q,U.current,Y.data?.leafId||null);if(k!==Q)q(k);if(U.current&&Y.data?.leafId===U.current)U.current=null},[M,Q,Y.data?.leafId]);let z=Y0(()=>{let k=(B||"").trim().toLowerCase();if(!k)return M;return M.filter((W)=>{return[W.preview,W.toolInput,W.toolInputFull,W.detail,W.toolName,W.role,W.id,W.resultDetail,W.type,W.label].some((w)=>typeof w==="string"&&w.toLowerCase().includes(k))})},[M,B]),O=Y0(()=>z.find((k)=>k.id===Q)||null,[z,Q]),x=Y0(()=>Sz(X),[X?.type,X?.preview,X?.error,X?.submittedAt]);g(()=>{if(L.current)L.current.scrollIntoView({block:"center",behavior:"auto"})},[Q,Y.data?.leafId,z.length]),g(()=>{let k=Hq(X?.preview);if(k?.targetId)U.current=k.targetId;let W=x?.refreshDelays||[];if(!W.length)return;let T=[G||"",X?.type||"",X?.submittedAt||"",X?.preview||""].join("|");if(H.current===T)return;H.current=T;let w=W.map((A)=>setTimeout(()=>E.current?.(),A));return()=>w.forEach((A)=>clearTimeout(A))},[G,X?.type,X?.submittedAt,X?.preview,x?.refreshDelays]);let I=(k=!1)=>{let W=O?.id,T=Rz(W,k);if(!T)return;U.current=T.navigateTargetId,$?.({kind:"widget.submit",payload:T},_)},J=x?.tone||"info";return F`
        <div class="session-tree-widget">
            <div class="session-tree-toolbar">
                <div class="session-tree-toolbar-left">
                    <button class="session-tree-btn" type="button" onClick=${()=>D()} disabled=${Y.loading}>${Y.loading?"Loading…":"Refresh"}</button>
                    <input ref=${N}
                        class="st-search-input" type="text" placeholder="Filter\u2026"
                        value=${B}
                        onInput=${(k)=>K(k.currentTarget.value)}
                        onKeyDown=${(k)=>{if(k.key==="Escape")K(""),k.currentTarget.blur()}}
                    />
                    ${B&&F`<span class="session-tree-meta">${z.length} match${z.length!==1?"es":""}</span>`}
                    ${Y.error&&F`<span class="session-tree-error-inline">${Y.error}</span>`}
                </div>
                <div class="session-tree-toolbar-right">
                    ${x?.text&&F`<span class=${`session-tree-host-update ${J}`}>${x.text}</span>`}
                    ${Y.data?.capped&&F`<span class="session-tree-meta">Showing ${Y.data?.nodes?.length||0} of ${Y.data?.total||0}</span>`}
                    ${G&&F`<span class="session-tree-meta">${G}</span>`}
                </div>
            </div>

            <div class="session-tree-content">
                <div class="session-tree-list" role="tree" aria-label="Session tree">
                    ${Y.loading&&z.length===0&&!B&&F`<div class="session-tree-empty">Loading session tree\u2026</div>`}
                    ${!Y.loading&&z.length===0&&!B&&F`<div class="session-tree-empty">Session tree is empty.</div>`}
                    ${!Y.loading&&z.length===0&&B&&F`<div class="session-tree-empty">No entries match \u201c${B}\u201d</div>`}
                    ${z.map((k)=>{let W=Q===k.id,T=`st-row${k.active?" active":""}${W?" selected":""}`,w=(k.children||[]).length>1,A=Pz(k);return F`
                            <button key=${k.id} ref=${k.active||W?L:null}
                                class=${T} type="button" role="treeitem" aria-selected=${W}
                                onClick=${()=>q(k.id)}>
                                <span class="st-indent" style=${`width:${(k.depth||0)*16+6}px`}></span>
                                <span class=${`st-dot${k.active?" active":w?" branch":""}`}></span>
                                <span class=${`st-tag ${A.tagClass}`}>${A.tag}</span>
                                <span class="st-text">${A.text}</span>
                                ${k.merged&&k.resultLength>0&&F`<span class="st-size">${Dq(k.resultLength)}</span>`}
                                ${!k.merged&&k.contentLength>3000&&F`<span class="st-size">${Dq(k.contentLength)}</span>`}
                                ${k.hasThinking&&F`<span class="st-badge thinking">\u{1F4AD}</span>`}
                                ${k.label&&F`<span class="st-label">${k.label}</span>`}
                                ${k.active&&F`<span class="st-active">\u25C0</span>`}
                            </button>
                        `})}
                </div>

                <aside class="session-tree-sidebar">
                    ${O?F`
                        <div class="st-side-section">
                            <div class="st-side-label">Entry</div>
                            <div class="st-side-mono">${O.id}${O.resultId?` → ${O.resultId}`:""}</div>
                        </div>
                        <div class="st-side-section">
                            <div class="st-side-label">Type</div>
                            <div class="st-side-value">${O.role||O.type||"entry"}${O.toolName?` → ${O.toolName}`:""}${O.merged?" (merged)":""}</div>
                        </div>
                        ${O.toolInputFull&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">${O.toolName==="bash"?"Command":"Input"}</div>
                                <pre class="st-side-code">${O.toolInputFull}</pre>
                            </div>
                        `}
                        ${O.resultDetail&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">Result${O.resultLength?` (${T5(O.resultLength)})`:""}</div>
                                <pre class="st-side-code">${O.resultDetail}</pre>
                            </div>
                        `}
                        ${O.detail&&!O.toolInput&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">${O.role==="toolResult"?"Output":"Content"}${O.contentLength?` (${T5(O.contentLength)})`:""}</div>
                                <pre class="st-side-code">${O.detail}</pre>
                            </div>
                        `}
                        ${O.rawDetail&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">Raw prompt${O.rawContentLength?` (${T5(O.rawContentLength)})`:""}</div>
                                <pre class="st-side-code">${O.rawDetail}</pre>
                            </div>
                        `}
                        ${O.timestamp&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">Time</div>
                                <div class="st-side-value">${new Date(O.timestamp).toLocaleString()}</div>
                            </div>
                        `}
                        ${(O.contentLength>0||O.hasThinking)&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">Size</div>
                                <div class="st-side-badges">
                                    ${O.contentLength>0&&F`<span class="st-pill">${T5(O.contentLength)} content</span>`}
                                    ${O.hasThinking&&F`<span class="st-pill thinking">${T5(O.thinkingLength)} thinking</span>`}
                                    ${O.merged&&O.resultLength>0&&F`<span class="st-pill">${T5(O.resultLength)} result</span>`}
                                </div>
                            </div>
                        `}
                        <div class="st-side-actions">
                            <button class="session-tree-btn primary" type="button" onClick=${()=>I(!1)}>Navigate here</button>
                            <button class="session-tree-btn" type="button" onClick=${()=>I(!0)}>Navigate + summarize</button>
                        </div>
                    `:F`<div class="session-tree-empty side">Select an entry to inspect.</div>`}
                </aside>
            </div>
        </div>
    `}function gz(_=!1){return`floating-widget-backdrop${_?" maximized":""}`}function uz(_=!1){return`floating-widget-pane${_?" maximized":""}`}function Wq({widget:_,onClose:$,onWidgetEvent:j}){let G=u(null),Z=u(!1),[X,Y]=C(!1),V=N1(_),Q=Y0(()=>Uq(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(g(()=>{Y(!1)},[V]),g(()=>{if(!_)return;let O=(x)=>{if(x.key!=="Escape")return;if(X){Y(!1);return}$?.()};return document.addEventListener("keydown",O),()=>document.removeEventListener("keydown",O)},[X,_,$]),g(()=>{Z.current=!1},[Q]),g(()=>{if(!_)return;let O=G.current;if(!O)return;let x=(T)=>{let w=K8(_),A=T==="widget.init"?q8(_):Q8(_);d9(O,w),o9(O,{__piclawGeneratedWidgetHost:!0,type:T,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:A})},I=()=>{x("widget.init"),x("widget.update")},J=()=>{Z.current=!0,I()};O.addEventListener("load",J);let W=[0,40,120,300,800].map((T)=>setTimeout(I,T));return()=>{O.removeEventListener("load",J),W.forEach((T)=>clearTimeout(T))}},[Q,_?.widgetId,_?.toolCallId,_?.turnId]),g(()=>{if(!_)return;let O=G.current;if(!O?.contentWindow)return;let x=K8(_),I=Q8(_);d9(O,x),o9(O,{__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:I});return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),g(()=>{if(!_)return;let O=(x)=>{let I=x?.data;if(!I||I.__piclawGeneratedWidget!==!0)return;let J=G.current,k=N1(_),W=N1({widgetId:I.widgetId,toolCallId:I.toolCallId});if(W&&k&&W!==k)return;if(!W&&J?.contentWindow&&x.source!==J.contentWindow)return;j?.(I,_)};return window.addEventListener("message",O),()=>window.removeEventListener("message",O)},[_,j]),!_)return null;let B=(_?.artifact||{}).kind||_?.kind||"html",K=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",N=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",L=_?.source==="live"?"live":"timeline",U=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",E=L==="live"?`Live widget • ${U.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",H=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",D=!Q,M=Fq(_),z=Bq(_);return F`
        <div class=${gz(X)} onClick=${()=>$?.()}>
            <section
                class=${uz(X)}
                aria-label=${K}
                onClick=${(O)=>O.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${E} • ${B.toUpperCase()}</div>
                        <div class="floating-widget-title">${K}</div>
                        ${(N||H)&&F`
                            <div class="floating-widget-subtitle">${N||H}</div>
                        `}
                    </div>
                    <div class="floating-widget-header-actions">
                        <button
                            class="floating-widget-action floating-widget-maximize"
                            type="button"
                            onClick=${()=>Y((O)=>!O)}
                            title=${X?"Exit zen mode":"Enter zen mode"}
                            aria-label=${X?"Exit zen mode":"Enter zen mode"}
                            aria-pressed=${X?"true":"false"}
                        >
                            ${X?"Restore":"Maximize"}
                        </button>
                        <button
                            class="floating-widget-close"
                            type="button"
                            onClick=${()=>$?.()}
                            title="Close widget"
                            aria-label="Close widget"
                        >
                            Close
                        </button>
                    </div>
                </div>
                <div class="floating-widget-body">
                    ${B==="session_tree"?F`<${Eq} widget=${_} onWidgetEvent=${j} />`:D?F`<div class="floating-widget-empty">${M}</div>`:F`
                                <iframe
                                    ref=${G}
                                    class="floating-widget-frame"
                                    title=${K}
                                    name=${K8(_)}
                                    sandbox=${z}
                                    allow="microphone; clipboard-read; clipboard-write"
                                    referrerpolicy="no-referrer"
                                    srcdoc=${Q}
                                ></iframe>
                            `}
                </div>
            </section>
        </div>
    `}k0();m2();M_();z5();var bz=new Set,Oq=new Set,s9=new Set,f4=new Map,zq=!1,B8=null;function vz(_=typeof window<"u"?window:null){let $=typeof _?.__piclawCurrentChatJid==="string"?_.__piclawCurrentChatJid.trim():"";if($)return $;try{let j=_?.location?.href||"http://localhost/",G=new URL(j).searchParams.get("chat_jid")?.trim()||"";if(G)return G}catch(j){}return"web:default"}function mz(_,$){let j=typeof _==="string"?_.trim():"";if(!j)return null;try{return new URL(j,$).href}catch{return null}}function Jq(_){if(!_||typeof _.id!=="string"||!_.id.trim())return!1;return Y_.register(_),bz.add(_.id),!0}function cz(_){return Jq(_)}function hz(_){if(!_||typeof _.id!=="string"||!_.id.trim())return()=>{};return o$(_),Oq.add(_.id),q9(),()=>{LY(_.id),Oq.delete(_.id),q9()}}function lz(_){if(typeof _!=="function")return()=>{};return s9.add(_),()=>{s9.delete(_)}}function Aq(_,$={}){let j=typeof _==="string"?_.trim():"";if(!j)return null;for(let G of[...s9].reverse())try{let Z=G(j,$);if(typeof Z==="string"&&Z.trim())return Z.trim()}catch(Z){console.warn("[addon-web] standalone tab URL resolver failed:",Z)}return null}function pz(_){if(!_||typeof _.id!=="string"||!_.id.trim()||typeof _.match!=="function"||typeof _.buildFrameUrl!=="function")return()=>{};return f4.set(_.id,_),()=>{if(f4.get(_.id)===_)f4.delete(_.id)}}function L8(_,$){for(let j of Array.from(f4.values()).reverse())try{if(j.match(_,$))return j}catch(G){console.warn("[addon-web] attachment preview matcher failed:",G)}return null}function kq(_){let $=typeof _==="string"?_.trim():"";if(!$)return null;return f4.get($)?.label||null}function Mq(_){let $=typeof _==="string"?_.trim():"";if(!$)return null;return f4.get($)?.note||null}function Tq(_,$,j){let G=typeof _==="string"?_.trim():"";if(!G)return null;let Z=f4.get(G);if(!Z)return null;try{return Z.buildFrameUrl($,j)||null}catch(X){return console.warn("[addon-web] attachment preview URL builder failed:",X),null}}function rz(_=typeof window<"u"?window:null){return{registerPane:cz,registerWorkspacePane:Jq,registerSettingsPane:hz,registerStandaloneTabUrlResolver:lz,registerAttachmentPreview:pz,getCurrentChatJid:()=>vz(_)}}function a9(_=typeof window<"u"?window:null){let $=rz(_);if(!_||zq)return $;return _.__piclaw_web=$,_.__piclaw_registerPane=$.registerPane,_.__piclaw_registerWorkspacePane=$.registerWorkspacePane,_.__piclaw_registerSettingsPane=$.registerSettingsPane,_.__piclaw_registerStandaloneTabUrlResolver=$.registerStandaloneTabUrlResolver,_.__piclaw_registerAttachmentPreview=$.registerAttachmentPreview,_.__piclawSettingsPaneRegistry={registerSettingsPane:$.registerSettingsPane,notifySettingsPanesChanged:()=>_?.dispatchEvent?.(new CustomEvent("piclaw:settings-panes-changed"))},zq=!0,$}async function wq(_=typeof window<"u"?window:null){if(!_)return;if(B8)return B8;return B8=(async()=>{a9(_);try{let $=await fetch("/agent/addons/web-entries",{credentials:"same-origin"});if(!$.ok)return;let j=await $.json().catch(()=>null),G=Array.isArray(j?.entries)?j.entries:[],Z=_.location?.origin||"http://localhost";for(let X of G){let Y=mz(X?.url,Z);if(!Y)continue;try{await import(Y)}catch(V){console.warn("[addon-web] Failed to load installed addon web entry:",Y,V)}}}catch($){console.warn("[addon-web] Failed to fetch installed addon web entries:",$)}})(),B8}var nz=["\t",",",";","|"];function yq(_){return typeof _==="string"?_.trim().toLowerCase():""}function Iq(_){return typeof _==="string"?_.split(";")[0]?.trim().toLowerCase()||"":""}function xq(_,$){let j=Iq(_),G=yq($);return j==="text/csv"||j==="application/csv"||j==="text/tab-separated-values"||j==="text/tsv"||G.endsWith(".csv")||G.endsWith(".tsv")||G.endsWith(".tab")}function Cq(_,$){let j=Iq(_),G=yq($);if(j==="text/tab-separated-values"||j==="text/tsv"||G.endsWith(".tsv")||G.endsWith(".tab"))return"\t";if(j==="text/csv"||j==="application/csv"||G.endsWith(".csv"))return",";return null}function dz(_,$){let j=0,G=!1;for(let Z=0;Z<_.length;Z+=1){let X=_[Z];if(X==='"')if(G&&_[Z+1]==='"')Z+=1;else G=!G;else if(!G&&X===$)j+=1}return j}function oz(_){let $=_.split(/\r?\n/).map((G)=>G.trimEnd()).filter((G)=>G.trim().length>0).slice(0,10),j={delimiter:"\t",score:-1};for(let G of nz){let Z=$.map((Q)=>dz(Q,G)).filter((Q)=>Q>0);if(!Z.length)continue;let X=Z.reduce((Q,q)=>Q+q,0)/Z.length,Y=Z.filter((Q)=>Math.abs(Q-X)<1).length/Z.length,V=X*Y*Z.length;if(V>j.score)j={delimiter:G,score:V}}return j.delimiter}function iz(_,$,j){let G=[],Z=[],X="",Y=!1,V=!1,Q=()=>{Z.push(X),X=""},q=()=>{if(Q(),!(Z.length===1&&Z[0]===""&&G.length>0))G.push(Z);if(Z=[],G.length>=j)V=!0};for(let B=0;B<_.length;B+=1){if(V)break;let K=_[B];if(K==='"')if(Y&&_[B+1]==='"')X+='"',B+=1;else Y=!Y;else if(!Y&&K===$)Q();else if(!Y&&(K===`
`||K==="\r")){if(K==="\r"&&_[B+1]===`
`)B+=1;q()}else X+=K}if(!V&&(X.length>0||Z.length>0))q();return{rows:G,truncatedRows:V}}function sz(_,$){return _.map((j)=>{let G=j.slice(0,$);while(G.length<$)G.push("");return G})}function Pq(_,$={}){let j=Math.max(1,$.maxRows??500),G=Math.max(1,$.maxColumns??80),Z=$.delimiter||oz(_),X=iz(_,Z,j+1),Y=X.rows.slice(0,j),V=Y.reduce((H,D)=>Math.max(H,D.length),0),Q=Math.min(Math.max(1,V),G),q=V>G,B=sz(Y,Q),K=B[0]||[],N=B.slice(1),L=K.some((H)=>H.trim().length>0)&&N.length>0,U=L?K.map((H,D)=>H.trim()||`Column ${D+1}`):Array.from({length:Q},(H,D)=>`Column ${D+1}`),E=L?N:B;return{delimiter:Z,headers:U,rows:E,columnCount:Q,rowCount:E.length,truncatedRows:X.truncatedRows||X.rows.length>j,truncatedColumns:q}}var az=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/x-yaml","text/xml","text/yaml"]),tz=new Set(["text/markdown"]),ez=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),_J=new Set(["application/eml","message/rfc822"]);function _4(_){return typeof _==="string"?_.trim().toLowerCase():""}function $J(_){let $=_4(_);return!!$&&$.endsWith(".eml")}function jJ(_){let $=_4(_);return!!$&&$.endsWith(".pdf")}function GJ(_){let $=_4(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}var ZJ=new Set(["application/zip","application/x-zip-compressed"]);function XJ(_){let $=_4(_);return!!$&&$.endsWith(".zip")}function YJ(_){let $=_4(_);return!!$&&($.endsWith(".html")||$.endsWith(".htm"))}function VJ(_){let $=_4(_);if(!$)return!1;return $.endsWith(".sh")||$.endsWith(".bash")||$.endsWith(".zsh")||$.endsWith(".sb")||$.endsWith(".yaml")||$.endsWith(".yml")}function I6(_,$){let j=L8(_,$);if(j?.id)return j.id;let G=_4(_);if(jJ($)||G==="application/pdf")return"pdf";if(GJ($)||ez.has(G))return"office";if($J($)||_J.has(G))return"eml";if(XJ($)||ZJ.has(G))return"archive";if(YJ($)||G==="text/html")return"html";if(xq(G,$))return"delimited";if(VJ($))return"text";if(!G)return"unsupported";if(G.startsWith("video/"))return"video";if(G.startsWith("image/"))return"image";if(az.has(G)||G.startsWith("text/"))return"text";return"unsupported"}function Rq(_){let $=_4(_);return tz.has($)}function N8(_){switch(_){case"image":return"Image preview";case"video":return"Video player";case"pdf":return"PDF preview";case"office":return"Office viewer";case"eml":return"Email preview";case"html":return"HTML preview";case"text":return"Text preview";case"delimited":return"Table preview";case"archive":return"ZIP archive preview";default:return kq(_)||"Preview unavailable"}}var qJ=new TextDecoder("utf-8",{fatal:!1});function w5(_,$){return _[$]|_[$+1]<<8}function S4(_,$){return(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24)>>>0}function fq(_,$,j){return qJ.decode(_.subarray($,$+j))}function QJ(_){let $=Math.max(0,_.length-65557);for(let j=_.length-22;j>=$;j-=1)if(S4(_,j)===101010256)return j;return-1}function KJ(_,$){let j=Math.max(0,$-20);for(let G=j;G<=$-4;G+=1)if(S4(_,G)===117853008)return!0;return!1}function BJ(_){let $=new Set;for(let j of _){let G=j.path.replace(/\/+/g,"/");if(!G)continue;if(j.isDirectory){$.add(G.endsWith("/")?G.slice(0,-1):G);continue}let Z=G.split("/").filter(Boolean);if(Z.length<=1)continue;let X="";for(let Y=0;Y<Z.length-1;Y+=1)X=X?`${X}/${Z[Y]}`:Z[Y],$.add(X)}return $}function LJ(_){return String(_||"").replace(/\\/g,"/").trim()}function Sq(_){switch(Number(_)){case 0:return"Stored";case 8:return"Deflate";case 9:return"Deflate64";case 12:return"BZIP2";case 14:return"LZMA";case 93:return"Zstandard";default:return`Method ${_}`}}function gq(_){let $=_ instanceof Uint8Array?_:_ instanceof ArrayBuffer?new Uint8Array(_):new Uint8Array(_.buffer,_.byteOffset,_.byteLength);if($.length<22)throw Error("ZIP archive is too small to contain a valid directory.");let j=QJ($);if(j<0)throw Error("ZIP archive directory could not be found.");if(KJ($,j))throw Error("ZIP64 archives are not previewable yet.");let G=w5($,j+10),Z=S4($,j+12),X=S4($,j+16);if(X+Z>$.length)throw Error("ZIP archive directory is truncated.");let Y=[],V=X,Q=X+Z;while(V<Q){if(V+46>$.length)throw Error("ZIP archive directory entry is truncated.");if(S4($,V)!==33639248)throw Error("ZIP archive directory contains an unexpected record.");let K=w5($,V+8),N=w5($,V+10),L=S4($,V+20),U=S4($,V+24),E=w5($,V+28),H=w5($,V+30),D=w5($,V+32),M=V+46,z=M+E+H,O=z+D;if(O>$.length)throw Error("ZIP archive directory entry metadata is truncated.");let x=(K&2048)===2048,I=LJ(fq($,M,E)),J=fq($,z,D),k=I.endsWith("/");if(I)Y.push({path:I,isDirectory:k,compressedSize:L,uncompressedSize:U,compressionMethod:N,comment:x?J:J});V=O}Y.sort((K,N)=>{if(K.isDirectory!==N.isDirectory)return K.isDirectory?-1:1;return K.path.localeCompare(N.path)});let q=Y.filter((K)=>!K.isDirectory),B=BJ(Y);return{entries:Y,summary:{fileCount:q.length,directoryCount:B.size,totalEntries:Y.length,compressedBytes:q.reduce((K,N)=>K+N.compressedSize,0),uncompressedBytes:q.reduce((K,N)=>K+N.uncompressedSize,0)}}}function uq(_){if(!_)return null;if(_.uncompressedBytes<=0)return null;let $=1-_.compressedBytes/_.uncompressedBytes;if(!Number.isFinite($))return null;return`${Math.round($*100)}% smaller`}var NJ="allow-scripts";function FJ(_=!1){return`image-modal attachment-preview-modal${_?" maximized":""}`}function UJ(_){if(!(_ instanceof Uint8Array)||_.length===0)return!0;let $=0,j=_.subarray(0,Math.min(_.length,4096));for(let G of j){if(G===0)return!1;if(G<32&&G!==9&&G!==10&&G!==13&&G!==12)$+=1}return $/j.length<0.02}function DJ(_,$){let j=String(_?.content_type||"").trim().toLowerCase(),G=String($||"").trim().toLowerCase();if(j.startsWith("text/")||j==="application/json"||j==="application/xml")return!1;return j==="application/octet-stream"||G.endsWith(".sb")||G.endsWith(".sh")}function HJ(_){try{return new TextDecoder("utf-8",{fatal:!1}).decode(_)}catch{return new TextDecoder().decode(_)}}function EJ(_){if(_==="\t")return"Tab";if(_===",")return"Comma";if(_===";")return"Semicolon";if(_==="|")return"Pipe";return null}function WJ(_,$=null,j=null,G=null){let Z=_?.metadata?.size,X=_?.content_type||"application/octet-stream",Y=j?.summary||null;return[{label:"Type",value:X},{label:"Syntax",value:$},{label:"Delimiter",value:G?EJ(G.delimiter):null},{label:"Rows",value:G?`${G.rowCount}${G.truncatedRows?"+":""}`:null},{label:"Columns",value:G?`${G.columnCount}${G.truncatedColumns?"+":""}`:null},{label:"Entries",value:Y?String(Y.totalEntries):null},{label:"Files",value:Y?String(Y.fileCount):null},{label:"Folders",value:Y?String(Y.directoryCount):null},{label:"Compressed",value:Y?a_(Y.compressedBytes):null},{label:"Uncompressed",value:Y?a_(Y.uncompressedBytes):null},{label:"Savings",value:uq(Y)},{label:"Size",value:typeof Z==="number"?a_(Z):null},{label:"Added",value:_?.created_at?I4(_.created_at):null}].filter((V)=>V.value)}function OJ(_,$){let j=String(_?.content_type||"").trim().toLowerCase(),G=String($||"").trim().toLowerCase(),Z=G.split("/").pop()||G;if(G.endsWith(".yaml")||G.endsWith(".yml")||j==="text/yaml"||j==="application/yaml")return"yaml";if(G.endsWith(".json")||G.endsWith(".jsonl")||j==="application/json")return"json";if(G.endsWith(".xml")||G.endsWith(".svg")||j==="application/xml"||j==="text/xml"||j==="image/svg+xml")return"xml";if(G.endsWith(".html")||G.endsWith(".htm")||j==="text/html")return"html";if(G.endsWith(".css")||j==="text/css")return"css";if(G.endsWith(".ts")||G.endsWith(".tsx")||j==="text/typescript")return G.endsWith(".tsx")?"tsx":"ts";if(G.endsWith(".js")||G.endsWith(".jsx")||j==="text/javascript"||j==="application/javascript")return G.endsWith(".jsx")?"jsx":"js";if(G.endsWith(".py")||j==="text/x-python"||j==="application/x-python-code")return"python";if(G.endsWith(".go")||j==="text/x-go")return"go";if(G.endsWith(".c++")||G.endsWith(".cc")||G.endsWith(".cp")||G.endsWith(".cpp")||G.endsWith(".cxx")||G.endsWith(".hh")||G.endsWith(".hpp")||G.endsWith(".hxx")||j==="text/x-c++src"||j==="text/x-c++hdr")return"cpp";if(G.endsWith(".rb")||j==="text/x-ruby")return"ruby";if(G.endsWith(".rs")||j==="text/x-rustsrc")return"rust";if(G.endsWith(".ps1")||G.endsWith(".psm1")||G.endsWith(".psd1")||j==="text/x-powershell")return"powershell";if(Z==="dockerfile"||G.endsWith(".dockerfile"))return"dockerfile";if(G.endsWith(".md")||G.endsWith(".markdown")||j==="text/markdown")return"markdown";if(G.endsWith(".sh")||G.endsWith(".bash")||G.endsWith(".zsh")||Z===".bashrc"||Z===".bash_profile"||Z===".profile"||Z===".zshrc"||Z===".zprofile"||Z===".zshenv"||Z===".env"||Z.startsWith(".env.")||j==="text/x-shellscript")return"bash";if(G.endsWith(".sql"))return"sql";if(G.endsWith(".toml")||G.endsWith(".ini")||G.endsWith(".cfg")||G.endsWith(".conf")||G.endsWith(".properties")||j==="text/toml")return"toml";return null}function zJ(_,$,j){let G=encodeURIComponent($||`attachment-${_}`),Z=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Z}&name=${G}#media=${Z}&name=${G}`;if(j==="office"){let X=u1(_);return`/office-viewer/?url=${encodeURIComponent(X)}&name=${G}`}if(j==="eml")return`/eml-viewer/?media=${Z}&name=${G}`;return null}function bq({mediaId:_,info:$,onClose:j}){let G=$?.filename||`attachment-${_}`,Z=Y0(()=>L8($?.content_type,G),[$?.content_type,G]),X=Y0(()=>I6($?.content_type,G),[$?.content_type,G]),Y=Z?.label||N8(X),V=Y0(()=>Rq($?.content_type),[$?.content_type]),[Q,q]=C(X==="text"||X==="html"||X==="archive"||X==="delimited"),[B,K]=C(""),[N,L]=C(null),[U,E]=C(null),[H,D]=C(null),[M,z]=C(!1),O=u(null),x=Y0(()=>OJ($,G),[$,G]),I=Y0(()=>x?tZ(x):null,[x]),J=Y0(()=>WJ($,!V?I:null,N,U),[$,V,I,N,U]),k=Y0(()=>Z?Tq(Z.id,_,G):zJ(_,G,X),[Z,_,G,X]),W=Y0(()=>Mq(Z?.id||X),[Z?.id,X]),T=Y0(()=>{if(!V||!B)return"";return Z1(B)},[V,B]),w=Y0(()=>{if(V||!B||!x)return"";return E2(B,x)},[V,B,x]);return g(()=>{let A=(P)=>{if(P.key!=="Escape")return;if(M){z(!1);return}j()};return document.addEventListener("keydown",A),()=>document.removeEventListener("keydown",A)},[M,j]),g(()=>{if(!O.current||!T)return;E$(O.current);return},[T]),g(()=>{let A=!1;async function P(){if(X!=="text"&&X!=="html"&&X!=="archive"&&X!=="delimited"){q(!1),D(null),K(""),L(null),E(null);return}q(!0),D(null),K(""),L(null),E(null);try{let R=await u7(_),b=new Uint8Array(await R.arrayBuffer());if(X==="text"||X==="html"||X==="delimited"){if(X==="text"&&DJ($,G)&&!UJ(b))throw Error("Attachment does not appear to contain text content.");let r=HJ(b);if(!A){if(K(r),X==="delimited")E(Pq(r,{delimiter:Cq($?.content_type,G)}))}return}let c=gq(b);if(!A)L(c)}catch(R){if(!A){let b=R instanceof Error?R.message:String(R||"Unknown error");D(X==="archive"?`Failed to load ZIP preview. ${b}`:X==="delimited"?`Failed to load table preview. ${b}`:`Failed to load text preview. ${b}`)}}finally{if(!A)q(!1)}}return P(),()=>{A=!0}},[_,X,$?.content_type,G]),F`
        <${d$} className="attachment-preview-portal-root">
            <div class=${FJ(M)} onClick=${j}>
                <div class="attachment-preview-shell" onClick=${(A)=>{A.stopPropagation()}}>
                    <div class="attachment-preview-header">
                        <div class="attachment-preview-heading">
                            <div class="attachment-preview-title">${G}</div>
                            <div class="attachment-preview-subtitle">${Y}</div>
                        </div>
                        <div class="attachment-preview-header-actions">
                            <button
                                class="attachment-preview-zen"
                                type="button"
                                onClick=${()=>z((A)=>!A)}
                                title=${M?"Exit zen mode":"Enter zen mode"}
                                aria-label=${M?"Exit zen mode":"Enter zen mode"}
                                aria-pressed=${M?"true":"false"}
                            >
                                ${M?"Restore":"Maximize"}
                            </button>
                            ${k&&F`
                                <a
                                    href=${k}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="attachment-preview-download"
                                    onClick=${(A)=>A.stopPropagation()}
                                >
                                    Open in Tab
                                </a>
                            `}
                            <a
                                href=${u1(_)}
                                download=${G}
                                class="attachment-preview-download"
                                onClick=${(A)=>A.stopPropagation()}
                            >
                                Download
                            </a>
                            <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                        </div>
                    </div>
                    <div class="attachment-preview-body">
                        ${Q&&F`<div class="attachment-preview-state">Loading preview…</div>`}
                        ${!Q&&H&&F`<div class="attachment-preview-state">${H}</div>`}
                        ${!Q&&!H&&X==="image"&&F`
                            <img class="attachment-preview-image" src=${u1(_)} alt=${G} />
                        `}
                        ${!Q&&!H&&X==="video"&&F`
                            <video class="attachment-preview-video" src=${u1(_)} controls autoplay style="max-width:100%;max-height:100%;" />
                        `}
                        ${!Q&&!H&&X==="html"&&F`
                            <iframe class="attachment-preview-frame" srcdoc=${B||""} sandbox=${NJ} title=${G}></iframe>
                        `}
                        ${!Q&&!H&&(X==="pdf"||X==="office"||X==="eml"||Boolean(Z))&&k&&F`
                            <iframe class="attachment-preview-frame" src=${k} title=${G}></iframe>
                        `}
                        ${!Q&&!H&&W&&F`
                            <div class="attachment-preview-readonly-note">${W}</div>
                        `}
                        ${!Q&&!H&&X==="delimited"&&U&&F`
                            <div class="attachment-preview-delimited">
                                ${(U.truncatedRows||U.truncatedColumns)&&F`
                                    <div class="attachment-preview-delimited-note">
                                        Showing first ${U.rowCount} rows and ${U.columnCount} columns.
                                        Download the file for the complete dataset.
                                    </div>
                                `}
                                <div class="attachment-preview-delimited-table-wrap">
                                    <table class="attachment-preview-delimited-table">
                                        <thead>
                                            <tr>
                                                ${U.headers.map((A,P)=>F`
                                                    <th key=${`h-${P}`}>${A}</th>
                                                `)}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${U.rows.map((A,P)=>F`
                                                <tr key=${`r-${P}`}>
                                                    ${A.map((R,b)=>F`
                                                        <td key=${`c-${P}-${b}`}>${R}</td>
                                                    `)}
                                                </tr>
                                            `)}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        `}
                        ${!Q&&!H&&X==="archive"&&N&&F`
                            <div class="attachment-preview-archive">
                                <div class="attachment-preview-archive-summary">
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Files</span>
                                        <strong class="attachment-preview-archive-card-value">${N.summary.fileCount}</strong>
                                    </div>
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Folders</span>
                                        <strong class="attachment-preview-archive-card-value">${N.summary.directoryCount}</strong>
                                    </div>
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Compressed</span>
                                        <strong class="attachment-preview-archive-card-value">${a_(N.summary.compressedBytes)}</strong>
                                    </div>
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Uncompressed</span>
                                        <strong class="attachment-preview-archive-card-value">${a_(N.summary.uncompressedBytes)}</strong>
                                    </div>
                                </div>
                                <div class="attachment-preview-archive-table-wrap">
                                    <table class="attachment-preview-archive-table">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Type</th>
                                                <th>Method</th>
                                                <th>Compressed</th>
                                                <th>Size</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${N.entries.map((A)=>F`
                                                <tr key=${A.path}>
                                                    <td class="attachment-preview-archive-name">${A.path}</td>
                                                    <td>${A.isDirectory?"Folder":"File"}</td>
                                                    <td>${A.isDirectory?"—":Sq(A.compressionMethod)}</td>
                                                    <td>${A.isDirectory?"—":a_(A.compressedSize)}</td>
                                                    <td>${A.isDirectory?"—":a_(A.uncompressedSize)}</td>
                                                </tr>
                                            `)}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        `}
                        ${!Q&&!H&&X==="text"&&V&&F`
                            <div
                                ref=${O}
                                class="attachment-preview-markdown post-content"
                                dangerouslySetInnerHTML=${{__html:T}}
                            />
                        `}
                        ${!Q&&!H&&X==="text"&&!V&&w&&F`
                            <pre class="attachment-preview-text attachment-preview-code"><code dangerouslySetInnerHTML=${{__html:w}} /></pre>
                        `}
                        ${!Q&&!H&&X==="text"&&!V&&!w&&F`
                            <pre class="attachment-preview-text">${B}</pre>
                        `}
                        ${!Q&&!H&&X==="unsupported"&&F`
                            <div class="attachment-preview-state">
                                Preview is not available for this file type yet. You can still download it directly.
                            </div>
                        `}
                    </div>
                    <div class="attachment-preview-meta">
                        ${J.map((A)=>F`
                            <div class="attachment-preview-meta-item" key=${A.label}>
                                <span class="attachment-preview-meta-label">${A.label}</span>
                                <span class="attachment-preview-meta-value">${A.value}</span>
                            </div>
                        `)}
                    </div>
                </div>
            </div>
        </${d$}>
    `}k0();M_();d2();M9();function JJ(_){if(!_||typeof _!=="object")return!1;if(_.isContentEditable)return!0;if(typeof _.closest!=="function")return!1;return Boolean(_.closest(["input","textarea","select",'[contenteditable="true"]',".compose-box",".compose-model-popup",".compose-session-popup",".settings-dialog",".workspace-sidebar",".workspace-explorer",".editor-pane-container",".dock-panel",".timeline-menu-dropdown",".rename-branch-overlay",".agent-request-modal",".attachment-preview-modal",".vnc-pane-shell",".kanban-plugin",".mindmap-editor"].join(", ")))}function AJ(_){if(!_||typeof _!=="object")return!0;if(JJ(_))return!1;let $=String(_.tagName||"").toUpperCase();if($==="BODY"||$==="HTML")return!0;if(typeof _.closest!=="function")return!0;return Boolean(_.closest(".container, .timeline, .post, .post-body, .post-content, .agent-status-panel"))}function kJ(_){if(!T6(_))return!1;if(!AJ(_?.target))return!1;return!i$.some((j)=>J$(_,j.id))}function vq(_){let $=new URL(window.location.href);if(_)$.searchParams.delete("chat_only");else $.searchParams.set("chat_only","1");window.location.href=$.toString()}function MJ(_){let $=[],j=new Map(a$.map((Z)=>[Z.id,Z])),G=(Z,X={})=>{let Y=j.get(Z);if(!Y)return;$.push({...Y,...X})};if(G("toggle-workspace",{label:_.workspaceOpen?"Hide workspace":"Show workspace",description:_.workspaceOpen?"Hide the workspace sidebar.":"Show the workspace sidebar."}),!_.workspaceOpen&&!_.chatOnlyMode)G("open-explorer");if(G("toggle-chat-only",{label:_.chatOnlyMode?"Exit chat-only mode":"Chat-only mode",description:_.chatOnlyMode?"Return to the split workspace layout.":"Switch to the chat-only layout."}),typeof _.onOpenTerminalTab==="function")G("open-terminal-tab");if(typeof _.onOpenVncTab==="function")G("open-vnc-tab");if(typeof _.onToggleTerminalDock==="function")G("toggle-terminal-dock",{label:_.terminalVisible?"Hide terminal dock":"Show terminal dock",description:_.terminalVisible?"Hide the terminal dock.":"Show the terminal dock."});return G("open-settings"),$}function mq(_){if(_==="agent")return"Agents";if(_==="workspace")return"Workspace";return"Slash commands"}function TJ(_){if(_?.imageUrl)return F`<img class="timeline-quick-actions-item-avatar" src=${_.imageUrl} alt="" aria-hidden="true" />`;return F`<span class="timeline-quick-actions-item-placeholder" aria-hidden="true">${_?.visualHint||""}</span>`}function F8(_,$){return F`
        <span class="timeline-quick-actions-keyhint">
            <kbd>${$}</kbd>
            <span>${_}</span>
        </span>
    `}function wJ(_){let $=new URL(window.location.href);$.searchParams.set("chat_jid",_),$.searchParams.set("chat_only","1");let j=document.createElement("a");j.href=$.toString(),j.target="_blank",j.rel="noopener",j.style.display="none",document.body.appendChild(j),j.click(),j.remove()}function cq({activeChatAgents:_=[],currentChatJid:$="web:default",workspaceOpen:j=!1,chatOnlyMode:G=!1,terminalVisible:Z=!1,onSwitchChat:X,onToggleWorkspace:Y,onOpenTerminalTab:V,onOpenVncTab:Q,onToggleTerminalDock:q,onPrefillCompose:B}){let[K,N]=C(!1),[L,U]=C(""),[E,H]=C(0),[D,M]=C([]),[z,O]=C({workspaceCommands:null,slashCommands:null}),x=u(null),I=u(null),J=f(async()=>{try{let w=await K6();O(t$(w?.settings))}catch{O({workspaceCommands:null,slashCommands:null})}},[]);g(()=>{J()},[J]),g(()=>{let w=!1;return Q6($).then((A)=>{if(w)return;M(Array.isArray(A?.commands)?A.commands:[])}).catch(()=>{if(w)return;M([])}),()=>{w=!0}},[$]);let k=Y0(()=>MJ({workspaceOpen:j,chatOnlyMode:G,terminalVisible:Z,onOpenTerminalTab:V,onOpenVncTab:Q,onToggleTerminalDock:q}),[G,V,Q,q,Z,j]),W=Y0(()=>XV({agents:_,workspaceCommands:k,slashCommands:D,settings:z,query:L}),[_,L,z,D,k]);if(g(()=>{if(W.length===0){H(-1);return}if(!L.trim()){H(0);return}let w=L.toLowerCase().replace(/^[@/]+/,"").trim();if(!w){H(0);return}let A=0,P=0;for(let R=0;R<W.length;R++){let b=W[R],c=(b.title||"").toLowerCase().replace(/^[@/]+/,"");if(c===w){A=R;break}let r=0;if(c.startsWith(w))r=3;else if(c.includes(w))r=2;else if((b.subtitle||"").toLowerCase().includes(w))r=1;if(r>P)P=r,A=R}H(A)},[W,L]),g(()=>{if(!K)return;requestAnimationFrame(()=>I.current?.focus?.())},[K]),g(()=>{let w=(P)=>{if(!K){if(!kJ(P))return;P.preventDefault(),U(String(P.key||"")),H(0),N(!0);return}if(P.key==="Escape"){P.preventDefault(),N(!1),U("");return}if(P.key==="ArrowDown"){P.preventDefault(),H((R)=>W.length>0?(R+1+W.length)%W.length:0);return}if(P.key==="ArrowUp"){P.preventDefault(),H((R)=>W.length>0?(R-1+W.length)%W.length:0);return}if(P.key==="Enter"&&W[E]){P.preventDefault();let R=W[E],b=P.altKey;if(R){if(R.kind==="agent"&&R.chatJid)if(b)wJ(R.chatJid);else X?.(R.chatJid);else if(R.kind==="workspace"&&R.commandId){if(R.commandId==="toggle-workspace"||R.commandId==="open-explorer")Y?.();if(R.commandId==="toggle-chat-only")vq(G);if(R.commandId==="open-terminal-tab")V?.();if(R.commandId==="open-vnc-tab")Q?.();if(R.commandId==="toggle-terminal-dock")q?.();if(R.commandId==="open-settings")window.dispatchEvent(new CustomEvent("piclaw:open-settings"))}else if(R.kind==="slash"&&R.commandName)B?.(R.commandName)}N(!1),U("")}},A=(P)=>{if(!K)return;if(x.current?.contains(P.target))return;N(!1),U("")};return window.addEventListener("keydown",w,!0),document.addEventListener("pointerdown",A,!0),()=>{window.removeEventListener("keydown",w,!0),document.removeEventListener("pointerdown",A,!0)}},[G,E,W,V,Q,B,X,q,Y,K]),g(()=>{let w=(A)=>{let P=t$(A?.detail?.settings);if(A?.detail?.settings){O(P);return}J()};return window.addEventListener("focus",w),window.addEventListener("piclaw:quick-actions-settings-updated",w),()=>{window.removeEventListener("focus",w),window.removeEventListener("piclaw:quick-actions-settings-updated",w)}},[J]),!K)return null;let T=null;return F`
        <div class="timeline-quick-actions-portal">
            <div class="timeline-quick-actions-overlay">
                <div class="timeline-quick-actions" ref=${x}>
                    <div class="timeline-quick-actions-header">
                        <div class="timeline-quick-actions-search-row">
                            <input
                                ref=${I}
                                class="timeline-quick-actions-input"
                                type="text"
                                value=${L}
                                placeholder="Type to jump to an agent, workspace action, or slash command…"
                                onInput=${(w)=>{U(w.currentTarget?.value||""),H(0)}}
                            />
                            <div class="timeline-quick-actions-hints" aria-hidden="true">
                                ${F8("Move","↑↓")}
                                ${F8("Select","↵")}
                                ${F8("Pop out","Alt+↵")}
                                ${F8("Close","Esc")}
                            </div>
                        </div>
                    </div>
                    <div class="timeline-quick-actions-list">
                        ${W.length===0&&F`<div class="timeline-quick-actions-empty">No quick actions match.</div>`}
                        ${W.map((w,A)=>{let P=w.kind!==T;return T=w.kind,F`
                                ${P&&F`<div class="timeline-quick-actions-section">${mq(w.kind)}</div>`}
                                <button
                                    key=${w.key}
                                    type="button"
                                    class=${`timeline-quick-actions-item timeline-quick-actions-item-${w.kind}${A===E?" active":""}`}
                                    onMouseEnter=${null}
                                    onClick=${()=>{if(w.kind==="agent"&&w.chatJid)X?.(w.chatJid);if(w.kind==="workspace"&&w.commandId==="toggle-workspace")Y?.();if(w.kind==="workspace"&&w.commandId==="open-explorer")Y?.();if(w.kind==="workspace"&&w.commandId==="toggle-chat-only")vq(G);if(w.kind==="workspace"&&w.commandId==="open-terminal-tab")V?.();if(w.kind==="workspace"&&w.commandId==="open-vnc-tab")Q?.();if(w.kind==="workspace"&&w.commandId==="toggle-terminal-dock")q?.();if(w.kind==="workspace"&&w.commandId==="open-settings")window.dispatchEvent(new CustomEvent("piclaw:open-settings"));if(w.kind==="slash"&&w.commandName)B?.(w.commandName);N(!1),U("")}}
                                >
                                    <span class="timeline-quick-actions-item-media">
                                        ${TJ(w)}
                                    </span>
                                    <span class="timeline-quick-actions-item-copy">
                                        <span class="timeline-quick-actions-item-title-row">
                                            <span class="timeline-quick-actions-item-title">${w.title}</span>
                                            ${w.actionHint?F`<span class="timeline-quick-actions-item-action-hint">${w.actionHint}</span>`:null}
                                        </span>
                                        <span class="timeline-quick-actions-item-subtitle">${w.subtitle}</span>
                                    </span>
                                    <span class="timeline-quick-actions-item-category">${w.categoryLabel||mq(w.kind)}</span>
                                </button>
                            `})}
                    </div>
                </div>
            </div>
        </div>
    `}k0();function hq({workspaceOpen:_,toggleWorkspace:$,chatOnlyMode:j,onOpenTerminalTab:G,onOpenVncTab:Z,onToggleTerminal:X,terminalVisible:Y}){let[V,Q]=C(!1),[q,B]=C({top:8,left:8}),K=u(null),N=u(null),L=u(null);g(()=>{if(typeof document>"u")return;let D=document.createElement("div");return D.className="timeline-menu-portal in-chat",document.body.appendChild(D),L.current=D,()=>{D.remove(),L.current=null}},[]),g(()=>{let D=()=>{if(_){let O=document.querySelector(".workspace-sidebar");if(O){let x=O.getBoundingClientRect();B({top:x.top+8,left:x.left+8})}}else B({top:8,left:8})};D();let M=new ResizeObserver(D),z=document.querySelector(".workspace-sidebar");if(z)M.observe(z);return window.addEventListener("resize",D),()=>{M.disconnect(),window.removeEventListener("resize",D)}},[_]),g(()=>{if(L.current)L.current.className=`timeline-menu-portal ${_?"in-workspace":"in-chat"}`},[_]),g(()=>{if(!L.current)return;let D=L.current.style;D.top=`${q.top}px`,D.left=`${q.left}px`,D.right="auto"},[q]),g(()=>{if(!V)return;let D=(M)=>{if(K.current?.contains(M.target))return;if(N.current?.contains(M.target))return;Q(!1)};return document.addEventListener("mousedown",D,!0),()=>document.removeEventListener("mousedown",D,!0)},[V]),g(()=>{if(!V)return;let D=(M)=>{if(M.key==="Escape")Q(!1)};return document.addEventListener("keydown",D),()=>document.removeEventListener("keydown",D)},[V]),g(()=>{Q(!1)},[_]);let U=f((D)=>{Q(!1),D?.()},[]),E=f(()=>{let D=new URL(window.location.href);if(j)D.searchParams.delete("chat_only");else D.searchParams.set("chat_only","1");window.location.href=D.toString()},[j]),H=F`
        <button ref=${N} class=${`timeline-menu-btn${V?" active":""}`}
            onClick=${()=>Q((D)=>!D)} title="Menu" aria-label="Menu"
            aria-haspopup="menu" aria-expanded=${V?"true":"false"}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
        </button>
        ${V&&F`
            <div class="workspace-menu-dropdown timeline-menu-dropdown" ref=${K} role="menu">
                <button class="workspace-menu-item" role="menuitem" onClick=${()=>U($)}>
                    ${_?"Hide workspace":"Show workspace"}
                </button>
                ${!_&&!j&&F`
                    <button class="workspace-menu-item" role="menuitem" onClick=${()=>U(()=>{$()})}>
                        Open explorer
                    </button>
                `}
                <button class=${`workspace-menu-item${j?" active":""}`} role="menuitem" onClick=${()=>U(E)}>
                    ${j?"Exit chat-only mode":"Chat-only mode"}
                </button>

                ${(G||Z||X)&&F`<div class="workspace-menu-separator"></div>`}
                ${G&&F`<button class="workspace-menu-item" role="menuitem" onClick=${()=>U(G)}>Open terminal in tab</button>`}
                ${Z&&F`<button class="workspace-menu-item" role="menuitem" onClick=${()=>U(Z)}>Open VNC in tab</button>`}
                ${X&&F`<button class="workspace-menu-item" role="menuitem" onClick=${()=>U(X)}>${Y?"Hide terminal dock":"Show terminal dock"}</button>`}

                <div class="workspace-menu-separator"></div>
                <button class="workspace-menu-item" role="menuitem" onClick=${()=>U(()=>window.dispatchEvent(new CustomEvent("piclaw:open-settings")))}>Settings</button>
            </div>
        `}
    `;return G5(()=>{if(L.current)L$(H,L.current)}),null}k0();M_();var lq="PiClaw";function t9(_,$,j=!1){let G=_||"PiClaw",Z=G.charAt(0).toUpperCase(),X=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],Y=Z.charCodeAt(0)%X.length,V=X[Y],Q=G.trim().toLowerCase(),q=typeof $==="string"?$.trim():"",B=q?q:null,K=j||Q==="PiClaw".toLowerCase()||Q==="pi";return{letter:Z,color:V,image:B||(K?"/static/icon-192.png":null)}}function pq(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function rq(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function nq(_){if(!_)return null;if(typeof document<"u"){let X=document.documentElement,Y=X?.dataset?.colorTheme||"",V=X?.dataset?.tint||"",Q=getComputedStyle(X).getPropertyValue("--accent-color")?.trim();if(Q&&(V||Y&&Y!=="default"))return Q}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),G=0;for(let X=0;X<j.length;X+=1)G=(G*31+j.charCodeAt(X))%2147483647;let Z=Math.abs(G)%$.length;return $[Z]}function e9(..._){for(let $ of _)if(typeof $==="string"&&$.trim())return $.trim();return null}function yJ(_){if(_.startsWith('"')&&_.endsWith('"')||_.startsWith("'")&&_.endsWith("'"))return _.slice(1,-1);return _}function dq(_){if(typeof _!=="string"||!_.trim())return null;let $=_.match(/^\s*cd\s+(.+?)(?:\s*(?:&&|;|\n))/s);if(!$?.[1])return null;return yJ($[1].trim())||null}function oq(_,$){let j=$&&typeof $==="object"?$:null;if(!j)return null;let G=e9(j.cwd,j.working_directory,j.workingDirectory);if(G)return G;let Z=e9(j.project_dir,j.projectDir,j.repo_path,j.repoPath);if(Z)return Z;let X=e9(j.command),Y=dq(X);if(Y)return Y;if(Array.isArray(j.commands))for(let V of j.commands){let Q=dq(V);if(Q)return Q}return null}k0();var iq={right:"3 2 8 5 3 8",down:"2 3 8 3 5 8",up:"2 7 8 7 5 2",left:"7 2 2 5 7 8"};function sq(_){return _==="down"||_==="up"||_==="left"?_:"right"}function aq(_,$=""){return["ui-disclosure-triangle",`ui-disclosure-triangle-${_}`,$.trim()].filter(Boolean).join(" ")}function s1(_="right",$=""){let j=sq(_);return F`
    <svg class=${aq(j,$)} viewBox="0 0 10 10" aria-hidden="true" focusable="false">
      <polygon points=${iq[j]}></polygon>
    </svg>
  `}function _j(_="right",$=""){let j=sq(_);return`<svg class="${aq(j,$)}" viewBox="0 0 10 10" aria-hidden="true" focusable="false"><polygon points="${iq[j]}"></polygon></svg>`}var IJ=F`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`,xJ=F`
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        <path d="M6 3v12"></path>
        <circle cx="18" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <path d="M18 9a9 9 0 0 1-9 9"></path>
    </svg>
`,CJ=F`
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M12 7v5l3 2"></path>
    </svg>
`,PJ=1e4,tq=132;function RJ(_,$=tq){let j=Number.isFinite($)&&$>0?Math.floor($):tq;return String(_||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`).map((G)=>G.length>j?`${G.slice(0,j)}…`:G).join(`
`)}function fJ(_){return(Array.isArray(_)?_:_&&Array.isArray(_.status_hints)?_.status_hints:[]).filter((j)=>j&&typeof j==="object").map((j,G)=>({key:typeof j.key==="string"&&j.key.trim()?j.key.trim():`hint-${G}`,iconSvg:typeof j.icon_svg==="string"?j.icon_svg.trim():"",label:typeof j.label==="string"?j.label.trim():"",title:typeof j.title==="string"?j.title.trim():""})).filter((j)=>j.iconSvg&&j.label)}function SJ(_){if(!(_ instanceof Set)||_.size===0)return null;let $=Array.from(_.values());for(let j=$.length-1;j>=0;j-=1){let G=$[j];if(G==="thought"||G==="draft")return G}return null}function gJ(_){if(!Array.isArray(_)||_.length===0)return[];let $=new Map([["ssh",0]]);return _.map((j,G)=>({hint:j,index:G})).sort((j,G)=>{let Z=$.get(j.hint?.key)??100,X=$.get(G.hint?.key)??100;if(Z!==X)return Z-X;return j.index-G.index}).map((j)=>j.hint)}function uJ(_,$){let j=typeof _==="string"?_.trim():"",G=typeof $==="string"?$.trim():"";return[j?j.split(/[\\/]+/).filter(Boolean).pop()||j:"",G].filter(Boolean).join(" • ")}function eq(_){if(!_||typeof _!=="object")return!1;let $=typeof _.type==="string"?_.type:"",j=Boolean(_.last_activity||_.lastActivity),G=$==="tool_call"||$==="tool_status"||Boolean(_.tool_name||_.tool_args);if(!j&&!G)return!1;return n$(_)!==null}function _Q(_){if(!_||typeof _!=="object")return!1;return _.type==="intent"&&u2(_)!==null}function bJ(_,$=Date.now()){if(!Number.isFinite(_))return!1;return $-_>=PJ}function vJ(_,$=Date.now()){if(!eq(_))return null;let j=n$(_);if(j===null||!bJ(j,$))return null;let G=qQ(new Date(j).toISOString(),$);return G?`${G} ago`:null}function mJ(_,$=Date.now()){if(!_Q(_))return null;if(u2(_)===null)return null;return O6(_,$)}function $Q(_){return typeof _==="string"&&/^streaming output\.{3}$/i.test(_.trim())}function cJ(_){if(typeof _!=="string")return"";return _.replace(/[…]+/g,".").replace(/\s+/g," ").trim().replace(/[\s:;,.!?-]+$/g,"").toLowerCase()}function hJ(_){if(!_||typeof _!=="object")return!1;let $=typeof _.type==="string"?_.type:"";return $==="tool_call"||$==="tool_status"||Boolean(_.tool_name||_.toolName||_.tool_args||_.toolArgs)}function jQ(_){if(!hJ(_))return"";let $=_?.status||_?.tool_status||_?.toolStatus;if($Q($))return"";return cJ($)}function GQ(_,$){let j=typeof _==="string"?_:"",G=typeof $==="string"?$.trim():"";if(!j||!G)return j;let Z=G.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return j.replace(new RegExp(`\\s*[:—-]\\s*${Z}\\s*$`,"i"),"")}function U8(_){return _?F`<span class="agent-tool-status-pill">${_}</span>`:null}function ZQ(_){let $=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"";if($)return $;let j=typeof(_?.tool_name||_?.toolName)==="string"?String(_.tool_name||_.toolName).trim():"";if(!j)return"";let[G]=YQ(_);return G?`${j}: ${G}`:j}function lJ(_,$={}){let j=$?.isLastActivity??Boolean(_?.last_activity||_?.lastActivity),G=ZQ(_),Z=_?.status,X="";if(_?.type==="plan")X=G?`Planning: ${G}`:"Planning...";else if(_?.type==="tool_call")X=G?`Running: ${G}`:"Running tool...";else if(_?.type==="tool_status")X=G&&$Q(Z)?G:G?`${G}: ${Z||"Working..."}`:Z||"Working...";else if(_?.type==="error")X=G||"Agent error";else X=G||Z||"Working...";if(!j)return X;if(X&&X!=="Working...")return`Recent activity: ${X}`;return"Last activity"}function pJ(_){let $=_?.tool_name||_?.toolName||"";return typeof $==="string"?$.trim().toLowerCase():""}function rJ(_){let $=typeof _==="string"?_.replace(/\s+/g," ").trim():"";if(!$)return"";let j=120;return $.length>j?`${$.slice(0,j)}…`:$}function XQ(_){if(!_)return null;if(typeof _==="string")try{let $=JSON.parse(_);return XQ($)}catch{return null}if(typeof _==="object"){let $=_,j=$.arguments||$.input||$.params||$.parameters||$.args||$.payload;return j&&typeof j==="object"?j:$}return null}function YQ(_){let $=XQ(_?.tool_args||_?.toolArgs);if(!$)return[];let j=[],G=(Z)=>{let X=rJ(Z);if(X&&!j.includes(X))j.push(X)};if(G($.command),Array.isArray($.commands))G($.commands.filter((Z)=>typeof Z==="string").join(" && "));if(G($.path||$.filePath||$.target),Array.isArray($.paths))G($.paths.filter((Z)=>typeof Z==="string").join(", "));return G($.fileName||$.filename||$.file),G($.url),G($.query),j.sort((Z,X)=>X.length-Z.length)}function VQ(_,$){let j=typeof _==="string"?_:"";if(!j)return null;let G=YQ($);for(let Y of G){let V=j.indexOf(Y);if(V>=0)return{prefix:j.slice(0,V),argument:Y,suffix:j.slice(V+Y.length)}}let Z=pJ($);if(!Z)return null;let X=j.match(/^([^:]+:\s*)(.+)$/is);if(!X||X[1].trim().replace(/:$/,"").toLowerCase()!==Z)return null;return{prefix:X[1],argument:X[2],suffix:""}}function nJ(_,$){let j=$?.status||$?.tool_status||$?.toolStatus,G=jQ($),Z=G?GQ(_,j):typeof _==="string"?_:"",X=ZQ($),Y=VQ(X,$);if(!Y?.argument)return G?F`${Z} ${U8(G)}`:Z;let V=Z.lastIndexOf(Y.argument);if(V<0)return G?F`${Z} ${U8(G)}`:Z;let Q=V+Y.argument.length;return F`
        ${Z.slice(0,V)}<span class="agent-tool-argument">${Y.argument}</span>${Z.slice(Q)}${G?F` ${U8(G)}`:""}
    `}function dJ(_,$){let j=VQ(_,$);if(!j?.argument)return _;let G=$?.status||$?.tool_status||$?.toolStatus,Z=jQ($),X=Z?GQ(j.suffix||"",G):j.suffix||"";return F`
        ${j.prefix}<span class="agent-tool-argument">${j.argument}</span>${X}${Z?F` ${U8(Z)}`:""}
    `}function qQ(_,$=Date.now()){if(!_)return null;let j=$-new Date(_).getTime();if(!Number.isFinite(j)||j<0)return null;let G=Math.floor(j/1000),Z=Math.floor(G/3600),X=Math.floor(G%3600/60),Y=G%60;if(Z>0)return`${Z}h ${X}m`;if(X>0)return`${X}m ${Y}s`;return`${Y}s`}function $j({status:_,draft:$,plan:j,thought:G,pendingRequest:Z,intent:X,extensionPanels:Y=[],pendingPanelActions:V=new Set,onExtensionPanelAction:Q,turnId:q,steerQueued:B,onPanelToggle:K,showCorePanels:N=!0,showExtensionPanels:L=!0}){let D=(v)=>{if(!v)return{text:"",totalLines:0,fullText:""};if(typeof v==="string"){let F0=v,T0=F0?F0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:F0,totalLines:T0,fullText:F0}}let n=v.text||"",s=v.fullText||v.full_text||n,G0=Number.isFinite(v.totalLines)?v.totalLines:s?s.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:n,totalLines:G0,fullText:s}},M=160,z=(v)=>String(v||"").replace(/<\/?internal>/gi,""),O=(v)=>{if(!v)return 1;return Math.max(1,Math.ceil(v.length/160))},x=(v,n,s,G0={})=>{let F0=(v||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!F0)return{text:"",omitted:0,totalLines:Number.isFinite(s)?s:0,visibleLines:0};let T0=F0.split(`
`),A0=G0.direction==="tail",M0=T0.length>n?(A0?T0.slice(-n):T0.slice(0,n)).join(`
`):F0,w0=Number.isFinite(s)?s:T0.reduce((n0,e0)=>n0+O(e0),0),c0=M0?M0.split(`
`).reduce((n0,e0)=>n0+O(e0),0):0,S0=Math.max(w0-c0,0);return{text:M0,omitted:S0,totalLines:w0,visibleLines:c0}},I=D(j),J=D(G),k=D($),W=D({text:_?.output_preview||_?.outputPreview||"",fullText:_?.output_preview||_?.outputPreview||"",totalLines:_?.output_total_lines||_?.outputTotalLines}),T=Boolean(I.text)||I.totalLines>0,w=Boolean(J.text)||J.totalLines>0,A=Boolean(k.fullText?.trim()||k.text?.trim()),P=Boolean(W.fullText?.trim()||W.text?.trim()),R=Boolean(_||A||T||w||P||Z||X),b=Array.isArray(Y)&&Y.length>0,[c,r]=C(new Set),[e,m]=C(null),[_0,E0]=C({}),Z0=u(new Map),[j0,V0]=C(()=>Date.now()),N0=(v)=>r((n)=>{let s=new Set(n),G0=!s.has(v);if(G0)s.add(v);else s.delete(v);if(typeof K==="function")K(v,G0);return s});g(()=>{r(new Set),m(null)},[q]),g(()=>{let v={},n=new Set(["thought","draft"]);for(let[s,G0]of Z0.current.entries()){if(!G0||typeof G0!=="object")continue;let F0=Number(G0.scrollHeight),T0=Number(G0.clientHeight);if(!Number.isFinite(F0)||!Number.isFinite(T0)||T0<=0)continue;if(F0>T0+1)v[s]=!0;if(n.has(s))G0.scrollTop=Math.max(0,F0-T0)}E0((s)=>{let G0=Object.keys(s||{}).filter((T0)=>s[T0]).sort(),F0=Object.keys(v).sort();if(G0.length===F0.length&&G0.every((T0,A0)=>T0===F0[A0]))return s;return v})},[k.fullText,k.text,J.fullText,J.text,W.fullText,W.text,c]),g(()=>{if(!(Array.isArray(Y)&&Y.some((s)=>s?.started_at||s?.last_activity_at)))return;let n=setInterval(()=>V0(Date.now()),1000);return()=>clearInterval(n)},[Y]);let h=Y0(()=>SJ(c),[c]);g(()=>{if(!h||typeof document>"u")return;let v=(n)=>{if(n?.defaultPrevented)return;if(n?.key!=="Escape")return;if(n?.altKey||n?.ctrlKey||n?.metaKey||n?.shiftKey)return;let s=n?.target;if(s instanceof Element){if(s.closest?.('input, textarea, select, [contenteditable="true"]'))return;if(s.isContentEditable)return}if(r((G0)=>{if(!(G0 instanceof Set)||!G0.has(h))return G0;let F0=new Set(G0);return F0.delete(h),F0}),typeof K==="function")K(h,!1);n.preventDefault?.(),n.stopPropagation?.()};return document.addEventListener("keydown",v),()=>document.removeEventListener("keydown",v)},[h,K]);let $0=O$(_),Q0=Boolean(_?.last_activity||_?.lastActivity),O0=Y0(()=>eq(_),[_]),a=Y0(()=>_Q(_),[_]),X0=Y0(()=>oq(_?.tool_name,_?.tool_args),[_?.tool_name,_?.tool_args]),[W0,P0]=C(null);g(()=>{if(!Boolean(a||_?.retry_at||_?.retryAt||O0))return;V0(Date.now());let n=setInterval(()=>V0(Date.now()),1000);return()=>clearInterval(n)},[O0,a,_?.retry_at,_?.retryAt,_?.last_event_at,_?.lastEventAt,_?.started_at,_?.startedAt,_?.type,_?.tool_name,_?.tool_args]),g(()=>{if(!(_?.type==="tool_call"||_?.type==="tool_status")||!X0){P0(null);return}let n=!0;return b7(X0).then((s)=>{if(!n)return;if(s?.branch)P0({branch:s.branch,repoPath:s.repo_path||null,path:X0});else P0(null)}).catch(()=>{if(n)P0(null)}),()=>{n=!1}},[_?.type,X0]);let l0=_?.turn_id||q,u0=nq(l0),G_=(v)=>v,h0=bV(_,{isLastActivity:Q0}),s0=w6(_,{isLastActivity:Q0}),R0=Y8({steerQueued:B,pulsing:h0&&s0==="dot"&&!Q0}),o0=w6(null,{pendingRequest:!0}),v0=(v)=>v==="warning"?"#f59e0b":v==="error"?"var(--danger-color)":v==="success"?"var(--success-color)":u0,t0=X?.kind||"info",i0=v0(t0),F_=v0(_?.kind||($0?"warning":"info")),Z_=lJ(_,{isLastActivity:Q0}),m0=vJ(_,j0),z0=W0?.repoPath||"",V_=W0?.branch||"",d0=W0?uJ(z0,V_):"",H_=fJ(_?.status_hints||_?.statusHints),D0=Y0(()=>gJ(H_),[H_]),g0=Y0(()=>D0.filter((v)=>v?.key==="ssh"),[D0]),x0=Y0(()=>D0.filter((v)=>v?.key!=="ssh"),[D0]);if((!N||!R)&&(!L||!b))return null;let r0=({panelTitle:v,text:n,fullText:s,totalLines:G0,maxLines:F0,titleClass:T0,panelKey:A0})=>{let M0=c.has(A0),w0=s||n||"",c0=A0==="thought"||A0==="draft"?z(w0):w0,S0=typeof F0==="number",n0=A0==="tool-output",e0=S0?x(c0,F0,G0,{direction:n0?"tail":"head"}):{text:c0||"",omitted:0,totalLines:Number.isFinite(G0)?G0:0},I0=n0&&!M0?RJ(e0.text):c0;if(!c0&&!(Number.isFinite(e0.totalLines)&&e0.totalLines>0))return null;let y0=`agent-thinking-body${S0?" agent-thinking-body-collapsible":""}`,D_=S0?`--agent-thinking-collapsed-lines: ${F0};`:"",__=S0&&e0.omitted>0,d=Boolean(A0&&_0[A0]),L0=__||d,j_=(!M0&&L0||M0&&L0)&&F`
            <button
                class="agent-thinking-truncation"
                onClick=${()=>N0(A0)}
                title=${M0?`Show fewer ${v} lines`:`Show more ${v}`}
            >
                <span class="agent-thinking-truncation-arrow" aria-hidden="true">${s1(M0?"up":"down")}</span>
                <span>${M0?"less":"more…"}</span>
            </button>
        `;return F`
            <div
                class="agent-thinking"
                data-expanded=${M0?"true":"false"}
                data-collapsible=${S0?"true":"false"}
                data-panel-key=${A0||""}
                style=${u0?`--turn-color: ${u0};`:""}
            >
                <div class="agent-thinking-title ${T0||""}">
                    ${u0&&F`<span class=${R0} aria-hidden="true"></span>`}
                    ${v}
                    ${j_}
                </div>
                <div
                    class=${y0}
                    style=${D_}
                    ref=${(f_)=>{if(!A0)return;if(f_)Z0.current.set(A0,f_);else Z0.current.delete(A0)}}
                    dangerouslySetInnerHTML=${{__html:G6(I0)}}
                />
            </div>
        `},z_=Z?.tool_call?.title,Q_=z_?`Awaiting approval: ${z_}`:"Awaiting approval",U_=mJ(_,j0),N_=(v,n,s=null)=>{let G0=b2(v),F0=BY(v,j0),T0=[s,F0].filter(Boolean).join(" · "),A0=Y8({steerQueued:B,pulsing:O$(v)||Boolean(F0)}),M0=w6(v);return F`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${n?`--turn-color: ${n};`:""}
                title=${v?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${n&&M0==="dot"&&F`<span class=${A0} aria-hidden="true"></span>`}
                    ${M0==="spinner"&&F`<div class="agent-status-spinner" aria-hidden="true"></div>`}
                    <span class="agent-thinking-title-text">${dJ(G0,v)}</span>
                    ${T0&&F`<span class="agent-status-elapsed">${T0}</span>`}
                </div>
                ${v.detail&&F`<div class="agent-thinking-body">${v.detail}</div>`}
            </div>
        `},J_=(v,n,s,G0,F0,T0,A0,M0=8,w0=8)=>{let c0=Math.max(F0-G0,0.000000001),S0=Math.max(n-M0*2,1),n0=Math.max(s-w0*2,1),e0=Math.max(A0-T0,1),I0=A0===T0?n/2:M0+(v.run-T0)/e0*S0,y0=w0+(n0-(v.value-G0)/c0*n0);return{x:I0,y:y0}},I_=(v,n,s,G0,F0,T0,A0,M0=8,w0=8)=>{if(!Array.isArray(v)||v.length===0)return"";return v.map((c0,S0)=>{let{x:n0,y:e0}=J_(c0,n,s,G0,F0,T0,A0,M0,w0);return`${S0===0?"M":"L"} ${n0.toFixed(2)} ${e0.toFixed(2)}`}).join(" ")},P_=(v,n="")=>{if(!Number.isFinite(v))return"—";return`${Math.abs(v)>=100?v.toFixed(0):v.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${n}`},E_=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],i_=(v,n)=>{let s=E_;if(!Array.isArray(s)||s.length===0)return"var(--accent-color)";if(s.length===1||!Number.isFinite(n)||n<=1)return s[0];let F0=Math.max(0,Math.min(Number.isFinite(v)?v:0,n-1))/Math.max(1,n-1)*(s.length-1),T0=Math.floor(F0),A0=Math.min(s.length-1,T0+1),M0=F0-T0,w0=s[T0],c0=s[A0];if(!c0||T0===A0||M0<=0.001)return w0;if(M0>=0.999)return c0;let S0=Math.round((1-M0)*1000)/10,n0=Math.round(M0*1000)/10;return`color-mix(in oklab, ${w0} ${S0}%, ${c0} ${n0}%)`},R_=(v,n="autoresearch")=>{let s=Array.isArray(v)?v.map((I0)=>({...I0,points:Array.isArray(I0?.points)?I0.points.filter((y0)=>Number.isFinite(y0?.value)&&Number.isFinite(y0?.run)):[]})).filter((I0)=>I0.points.length>0):[],G0=s.map((I0,y0)=>({...I0,color:i_(y0,s.length)}));if(G0.length===0)return null;let F0=320,T0=120,A0=G0.flatMap((I0)=>I0.points),M0=A0.map((I0)=>I0.value),w0=A0.map((I0)=>I0.run),c0=Math.min(...M0),S0=Math.max(...M0),n0=Math.min(...w0),e0=Math.max(...w0);return F`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${G0.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${F0} ${T0}`} preserveAspectRatio="none" aria-hidden="true">
                        ${G0.map((I0)=>{let y0=I0?.key||I0?.label||"series",D_=e?.panelKey===n&&e?.seriesKey===y0;return F`
                                <g key=${y0}>
                                    <path
                                        class=${`agent-series-chart-line${D_?" is-hovered":""}`}
                                        d=${I_(I0.points,F0,T0,c0,S0,n0,e0)}
                                        style=${`--agent-series-color: ${I0.color};`}
                                        onMouseEnter=${()=>m({panelKey:n,seriesKey:y0})}
                                        onMouseLeave=${()=>m((__)=>__?.panelKey===n&&__?.seriesKey===y0?null:__)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${G0.flatMap((I0)=>{let y0=typeof I0?.unit==="string"?I0.unit:"",D_=I0?.key||I0?.label||"series";return I0.points.map((__,d)=>{let L0=J_(__,F0,T0,c0,S0,n0,e0);return F`
                                    <button
                                        key=${`${D_}-point-${d}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${I0.color}; left:${L0.x/F0*100}%; top:${L0.y/T0*100}%;`}
                                        onMouseEnter=${()=>m({panelKey:n,seriesKey:D_,run:__.run,value:__.value,unit:y0})}
                                        onMouseLeave=${()=>m((p0)=>p0?.panelKey===n?null:p0)}
                                        onFocus=${()=>m({panelKey:n,seriesKey:D_,run:__.run,value:__.value,unit:y0})}
                                        onBlur=${()=>m((p0)=>p0?.panelKey===n?null:p0)}
                                        aria-label=${`${I0?.label||"Series"} ${P_(__.value,y0)} at run ${__.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${G0.map((I0)=>{let y0=I0.points[I0.points.length-1]?.value,D_=typeof I0?.unit==="string"?I0.unit:"",__=I0?.key||I0?.label||"series",d=e?.panelKey===n&&e?.seriesKey===__?e:null,L0=d&&Number.isFinite(d.value)?d.value:y0,p0=d&&typeof d.unit==="string"?d.unit:D_,j_=d&&Number.isFinite(d.run)?d.run:null;return F`
                            <div key=${`${__}-legend`} class=${`agent-series-legend-item${d?" is-hovered":""}`} style=${`--agent-series-color: ${I0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${I0.color};`}></span>
                                <span class="agent-series-legend-label">${I0?.label||"Series"}</span>
                                ${j_!==null&&F`<span class="agent-series-legend-run">run ${j_}</span>`}
                                <span class="agent-series-legend-value">${P_(L0,p0)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},q0=(v)=>{if(!v)return null;let n=typeof v?.key==="string"?v.key:`panel-${Math.random()}`,s=c.has(n),G0=v?.title||"Extension status",F0=v?.collapsed_text||"",T0=String(v?.state||"").replace(/[-_]+/g," ").replace(/^./,(L0)=>L0.toUpperCase()),A0=v0(v?.state==="completed"?"success":v?.state==="failed"?"error":v?.state==="stopped"?"warning":"info"),M0=Y8({steerQueued:B,pulsing:v?.state==="running"}),w0=typeof v?.detail_markdown==="string"?v.detail_markdown.trim():"",c0=typeof v?.last_run_text==="string"?v.last_run_text.trim():"",S0=typeof v?.tmux_command==="string"?v.tmux_command.trim():"",n0=Array.isArray(v?.series)?v.series:[],e0=Array.isArray(v?.actions)?v.actions:[],I0=v?.started_at?O6(v,j0):null,y0=F0,D_=Boolean(w0||S0||I0),__=Boolean(w0||n0.length>0||S0),d=[G0,y0].filter(Boolean).join(" — ");return F`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${s?"true":"false"}
                style=${A0?`--turn-color: ${A0};`:""}
                title=${!s?d||G0:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>__?N0(n):null}
                    >
                        ${A0&&F`<span class=${M0} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${G0}</span>
                        ${y0&&F`<span class="agent-thinking-title-meta">${y0}</span>`}
                        ${I0&&F`<span class="agent-status-elapsed">${I0}</span>`}
                    </button>
                    ${(e0.length>0||__)&&F`
                        <div class="agent-thinking-tools-inline">
                            ${e0.length>0&&F`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${e0.map((L0)=>{let p0=`${n}:${L0?.key||""}`,j_=V?.has?.(p0);return F`
                                            <button
                                                key=${p0}
                                                class=${`agent-thinking-action-btn${L0?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>Q?.(v,L0)}
                                                disabled=${Boolean(j_)}
                                            >
                                                ${j_?"Working…":L0?.label||"Run"}
                                            </button>
                                        `})}
                                </div>
                            `}
                            ${__&&F`
                                <button
                                    class="agent-thinking-corner-toggle agent-thinking-corner-toggle-inline"
                                    type="button"
                                    aria-label=${`${s?"Collapse":"Expand"} ${G0}`}
                                    title=${s?"Collapse details":"Expand details"}
                                    onClick=${()=>N0(n)}
                                >
                                    ${s1(s?"down":"up")}
                                </button>
                            `}
                        </div>
                    `}
                </div>
                ${s&&F`
                    <div class=${`agent-thinking-autoresearch-layout${D_?"":" chart-only"}`}>
                        ${D_&&F`
                            <div class="agent-thinking-autoresearch-meta-stack">
                                ${I0&&F`
                                    <div class="agent-thinking-autoresearch-elapsed">
                                        <span title="Experiment duration">⏱ ${I0}</span>
                                        ${v?.last_activity_at&&v?.state==="running"&&F`<span title="Since last activity">⟳ ${qQ(v.last_activity_at)} ago</span>`}
                                    </div>
                                `}
                                ${w0&&F`
                                    <div
                                        class="agent-thinking-body agent-thinking-autoresearch-detail"
                                        dangerouslySetInnerHTML=${{__html:G6(w0)}}
                                    />
                                `}
                                ${S0&&F`
                                    <div class="agent-series-chart-command">
                                        <div class="agent-series-chart-command-header">
                                            <span>Attach to session</span>
                                        </div>
                                        <div class="agent-series-chart-command-shell">
                                            <pre class="agent-series-chart-command-code">${S0}</pre>
                                            <button
                                                type="button"
                                                class="agent-series-chart-command-copy"
                                                aria-label="Copy tmux command"
                                                title="Copy tmux command"
                                                onClick=${()=>Q?.(v,{key:"copy_tmux",action_type:"autoresearch.copy_tmux",label:"Copy tmux"})}
                                            >
                                                ${IJ}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                        ${n0.length>0?F`
                                <div class="agent-series-chart-stack">
                                    ${R_(n0,n)}
                                    ${c0&&F`<div class="agent-series-chart-note">${c0}</div>`}
                                </div>
                            `:F`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return F`
        <div class="agent-status-panel">
            ${N&&X&&N_(X,i0)}
            ${L&&Array.isArray(Y)&&Y.map((v)=>q0(v))}
            ${N&&_?.type==="intent"&&N_(_,F_,U_)}
            ${N&&Z&&F`
                <div class="agent-status agent-status-request" aria-live="polite" style=${u0?`--turn-color: ${u0};`:""}>
                    ${o0==="dot"&&F`<span class=${R0} aria-hidden="true"></span>`}
                    ${o0==="spinner"&&F`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${Q_}</span>
                </div>
            `}
            ${N&&T&&r0({panelTitle:G_("Planning"),text:I.text,fullText:I.fullText,totalLines:I.totalLines,panelKey:"plan"})}
            ${N&&A&&r0({panelTitle:G_("Draft"),text:k.text,fullText:k.fullText,totalLines:k.totalLines,maxLines:9,titleClass:"thought",panelKey:"draft"})}
            ${N&&w&&r0({panelTitle:G_("Thoughts"),text:J.text,fullText:J.fullText,totalLines:J.totalLines,maxLines:9,titleClass:"thought",panelKey:"thought"})}
            ${N&&P&&r0({panelTitle:G_("Output"),text:W.text,fullText:W.fullText,totalLines:W.totalLines,maxLines:6,titleClass:"tool-output",panelKey:"tool-output"})}
            ${N&&_&&_?.type!=="intent"&&F`
                <div class=${`agent-status${Q0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}${d0||H_.length>0||m0?" agent-status-multiline":""}`} aria-live="polite" style=${u0?`--turn-color: ${u0};`:""}>
                    ${u0&&h0&&F`<span class=${R0} aria-hidden="true"></span>`}
                    ${_?.type==="error"?F`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:s0==="spinner"&&F`<div class="agent-status-spinner"></div>`}
                    <div class="agent-status-copy">
                        <span class="agent-status-text">${nJ(Z_,_)}</span>
                        ${(d0||D0.length>0||m0)&&F`
                            <span class="agent-status-meta-row">
                                ${g0.map((v)=>F`
                                    <span key=${v.key} class="agent-status-hint-row" title=${v.title||v.label}>
                                        <span class="agent-status-hint-icon" dangerouslySetInnerHTML=${{__html:v.iconSvg}}></span>
                                        <span class="agent-status-hint-label">${v.label}</span>
                                    </span>
                                `)}
                                ${d0&&F`
                                    <span class="agent-status-git-row" title=${X0||d0}>
                                        <span class="agent-status-git-icon">${xJ}</span>
                                        <span class="agent-status-git-label">
                                            ${z0&&F`<span class="agent-status-git-part">${z0}</span>`}
                                            ${z0&&V_&&F`<span class="agent-status-git-separator" aria-hidden="true">•</span>`}
                                            ${V_&&F`<span class="agent-status-git-part">${V_}</span>`}
                                        </span>
                                    </span>
                                `}
                                ${x0.map((v)=>F`
                                    <span key=${v.key} class="agent-status-hint-row" title=${v.title||v.label}>
                                        <span class="agent-status-hint-icon" dangerouslySetInnerHTML=${{__html:v.iconSvg}}></span>
                                        <span class="agent-status-hint-label">${v.label}</span>
                                    </span>
                                `)}
                                ${m0&&F`
                                    <span class="agent-status-hint-row agent-status-activity-row" title=${`${Q0?"Recent activity":"Last event"} ${m0}`}>
                                        <span class="agent-status-hint-icon">${CJ}</span>
                                        <span class="agent-status-hint-label">${m0}</span>
                                    </span>
                                `}
                            </span>
                        `}
                    </div>
                </div>
            `}
        </div>
    `}function QQ({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:G,options:Z,chat_jid:X}=_,Y=G?.title||"Agent Request",V=G?.kind||"other",Q=G?.rawInput||{},q=Q.command||Q.commands&&Q.commands[0]||null,B=Q.diff||null,K=Q.fileName||Q.path||null,N=G?.description||Q.description||Q.explanation||null,U=(Array.isArray(G?.locations)?G.locations:[]).map((z)=>z?.path).filter((z)=>Boolean(z)),E=Array.from(new Set([K,...U].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:G,options:Z});let H=async(z)=>{try{await E5(j,z,X||null),$()}catch(O){console.error("Failed to respond to agent request:",O)}},D=async()=>{try{await S7(Y,`Auto-approved: ${Y}`),await E5(j,"approved",X||null),$()}catch(z){console.error("Failed to add to whitelist:",z)}},M=Z&&Z.length>0;return F`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${Y}</div>
                </div>
                ${(N||q||B||E.length>0)&&F`
                    <div class="agent-request-body">
                        ${N&&F`
                            <div class="agent-request-description">${N}</div>
                        `}
                        ${E.length>0&&F`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${E.map((z,O)=>F`<li key=${O}>${z}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${q&&F`
                            <pre class="agent-request-command">${q}</pre>
                        `}
                        ${B&&F`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${B}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${M?Z.map((z)=>F`
                            <button 
                                key=${z.optionId||z.id||String(z)}
                                class="agent-request-btn ${z.kind==="allow_once"||z.kind==="allow_always"?"primary":""}"
                                onClick=${()=>H(z.optionId||z.id||z)}
                            >
                                ${z.name||z.label||z.optionId||z.id||String(z)}
                            </button>
                        `):F`
                        <button class="agent-request-btn primary" onClick=${()=>H("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>H("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${D}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}k0();k0();M_();function x6(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>x6($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${x6(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function KQ(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:x6(j)})).filter(($)=>$.value)}function oJ(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function jj(_){if(!Array.isArray(_))return[];return _.filter(oJ)}function D8(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let G=x6(j);return G?`Card submission: ${$} — ${G}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=KQ(j).map(({key:X,value:Y})=>`${X}: ${Y}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function BQ(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=KQ(_.data),G=j.length>0?j.slice(0,2).map(({key:X,value:Y})=>`${X}: ${Y}`).join(", "):x6(_.data)||null,Z=j.length;return{title:$,summary:G,fields:j,fieldCount:Z,submittedAt:_.submitted_at}}function C_(_){return typeof _==="string"?_.trim():""}function LQ(_){return _.map(($)=>String($||"").trim()).filter(Boolean).join(`

`).replace(/\n{3,}/g,`

`).trim()}function iJ(_,$){let j=[],G=[],Z=[];if(_.forEach((X,Y)=>{if(!X||typeof X!=="object")return;let V=C_(X.type);if(V==="text"){let Q=C_(X.text)||C_(X.content);if(Q)j.push(Q);return}if(V==="resource_link"){let Q=C_(X.uri),q=C_(X.title)||C_(X.name)||Q;if(Q&&q)j.push(q===Q?Q:`[${q}](${Q})`);return}if(V==="resource"){let Q=C_(X.title)||C_(X.name)||C_(X.uri)||"Embedded resource",q=C_(X.text);if(q)j.push(`### ${Q}

\`\`\`
${q}
\`\`\``);else j.push(`### ${Q}`);return}if(V==="generated_widget"){let Q=C_(X.title)||C_(X.name)||"Generated widget",q=C_(X.description)||C_(X.subtitle);j.push(LQ([`### ${Q}`,q]));return}if(V==="adaptive_card"&&C_(X.fallback_text)){j.push(C_(X.fallback_text));return}if(V==="adaptive_card_submission"){let Q=D8(X);if(C_(Q))j.push(C_(Q));return}if(V==="file"){let Q=C_(X.name)||C_(X.filename)||C_(X.title)||`attachment:${$[Y]??Y+1}`;G.push(`- ${Q}`);return}if(V==="image"||!V){let Q=C_(X.name)||C_(X.filename)||C_(X.title)||`attachment:${$[Y]??Y+1}`;Z.push(`- ${Q}`)}}),Z.length>0)j.push(`Images:
${Z.join(`
`)}`);if(G.length>0)j.push(`Attachments:
${G.join(`
`)}`);return LQ(j)}function H8(_){let $=_?.data||{},j=typeof $.content==="string"?$.content.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd():"";if(j.trim())return j;let G=Array.isArray($.content_blocks)?$.content_blocks:[],Z=Array.isArray($.media_ids)?$.media_ids:[];return iJ(G,Z)}function NQ(_,$,j){try{return _.setAttribute($,j),!0}catch(G){return!1}}function FQ(_,$){try{return _[$]=!0,!0}catch(j){return!1}}function UQ(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;if(NQ(j,"aria-disabled","true"),NQ(j,"tabindex","-1"),"disabled"in j)FQ(j,"disabled");if("readOnly"in j)FQ(j,"readOnly")}}function sJ(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let G=j[1].length===3?j[1].split("").map((Z)=>`${Z}${Z}`).join(""):j[1];return{r:parseInt(G.slice(0,2),16),g:parseInt(G.slice(2,4),16),b:parseInt(G.slice(4,6),16)}}function aJ(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let G=Number(j[1]),Z=Number(j[2]),X=Number(j[3]);if(![G,Z,X].every((Y)=>Number.isFinite(Y)))return null;return{r:G,g:Z,b:X}}function DQ(_){return sJ(_)||aJ(_)}function E8(_){let $=(X)=>{let Y=X/255;return Y<=0.03928?Y/12.92:((Y+0.055)/1.055)**2.4},j=$(_.r),G=$(_.g),Z=$(_.b);return 0.2126*j+0.7152*G+0.0722*Z}function tJ(_,$){let j=Math.max(E8(_),E8($)),G=Math.min(E8(_),E8($));return(j+0.05)/(G+0.05)}function eJ(_,$,j="#ffffff"){let G=DQ(_);if(!G)return j;let Z=j,X=-1;for(let Y of $){let V=DQ(Y);if(!V)continue;let Q=tJ(G,V);if(Q>X)Z=Y,X=Q}return Z}function Gj(){let _=getComputedStyle(document.documentElement),$=(U,E)=>{for(let H of U){let D=_.getPropertyValue(H).trim();if(D)return D}return E},j=$(["--text-primary","--color-text"],"#0f1419"),G=$(["--text-secondary","--color-text-muted"],"#536471"),Z=$(["--bg-primary","--color-bg-primary"],"#ffffff"),X=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),Y=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),V=$(["--accent-color","--color-accent"],"#1d9bf0"),Q=$(["--success-color","--color-success"],"#00ba7c"),q=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),B=$(["--danger-color","--color-error"],"#f4212e"),K=$(["--border-color","--color-border"],"#eff3f4"),N=$(["--font-family"],"system-ui, sans-serif"),L=eJ(V,[j,Z],j);return{fg:j,fgMuted:G,bgPrimary:Z,bg:X,bgEmphasis:Y,accent:V,good:Q,warning:q,attention:B,border:K,fontFamily:N,buttonTextColor:L}}function HQ(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:G,accent:Z,good:X,warning:Y,attention:V,border:Q,fontFamily:q}=Gj();return{fontFamily:q,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:X,subtle:X},warning:{default:Y,subtle:Y},attention:{default:V,subtle:V}}},emphasis:{backgroundColor:G,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:X,subtle:X},warning:{default:Y,subtle:Y},attention:{default:V,subtle:V}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:Q},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var _A=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),EQ=!1,W8=null,WQ=!1;function Zj(_){_.querySelector(".adaptive-card-notice")?.remove()}function $A(_,$,j="error"){Zj(_);let G=document.createElement("div");G.className=`adaptive-card-notice adaptive-card-notice-${j}`,G.textContent=$,_.appendChild(G)}function jA(_,$=(j)=>Z1(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function GA(_=($)=>Z1($,null)){return($,j)=>{try{let G=jA($,_);j.outputHtml=G.outputHtml,j.didProcess=G.didProcess}catch(G){console.error("[adaptive-card] Failed to process markdown:",G),j.outputHtml=String($??""),j.didProcess=!1}}}function ZA(_){if(WQ||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=GA(),WQ=!0}async function XA(){if(EQ)return;if(W8)return W8;return W8=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{EQ=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),W8}function YA(){return globalThis.AdaptiveCards}function VA(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function qA(_){return _A.has(_)}function Yj(_){if(!Array.isArray(_))return[];return _.filter(VA)}function QA(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",G=(typeof _?.url==="string"?_.url:"")||void 0,Z=_?.data??void 0;return{type:$,title:j,data:Z,url:G,raw:_}}function Xj(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>Xj($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,G])=>`${j}: ${Xj(G)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function KA(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return Xj($);return typeof $==="string"?$:String($)}function BA(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,G=(Z)=>{if(Array.isArray(Z))return Z.map((V)=>G(V));if(!Z||typeof Z!=="object")return Z;let Y={...Z};if(typeof Y.id==="string"&&Y.id in j&&String(Y.type||"").startsWith("Input."))Y.value=KA(Y.type,j[Y.id],Y);for(let[V,Q]of Object.entries(Y))if(Array.isArray(Q)||Q&&typeof Q==="object")Y[V]=G(Q);return Y};return G(_)}function LA(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function NA(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,G=j&&typeof j.title==="string"?j.title.trim():"",Z=LA(_.completed_at||j?.submitted_at),X=[G||null,Z||null].filter(Boolean).join(" · ")||null;return{label:$,detail:X}}async function OQ(_,$,j){if(!qA($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await XA()}catch(G){return console.error("[adaptive-card] Failed to load SDK:",G),!1}try{let G=YA();ZA(G);let Z=new G.AdaptiveCard,X=Gj();Z.hostConfig=new G.HostConfig(HQ());let Y=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,V=$.state==="active"?$.payload:BA($.payload,Y);Z.parse(V),Z.onExecuteAction=(B)=>{let K=QA(B);if(j?.onAction)Zj(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(K)).catch((N)=>{console.error("[adaptive-card] Action failed:",N);let L=N instanceof Error?N.message:String(N||"Action failed.");$A(_,L||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",K)};let Q=Z.render();if(!Q)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",X.buttonTextColor);let q=NA($);if(q){_.classList.add("adaptive-card-finished");let B=document.createElement("div");B.className=`adaptive-card-status adaptive-card-status-${$.state}`;let K=document.createElement("span");if(K.className="adaptive-card-status-label",K.textContent=q.label,B.appendChild(K),q.detail){let N=document.createElement("span");N.className="adaptive-card-status-detail",N.textContent=q.detail,B.appendChild(N)}_.appendChild(B)}if(Zj(_),_.appendChild(Q),q)UQ(Q);return!0}catch(G){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,G),!1}}k0();m2();function zQ({src:_,onClose:$}){return g(()=>{let j=(G)=>{if(G.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),F`
        <${d$} className="image-modal-portal-root">
            <div class="image-modal" onClick=${$}>
                <img src=${_} alt="Full size" />
            </div>
        </${d$}>
    `}var O8=0,Vj=null,C6={activePostId:null,speaking:!1},qj=new Set;function Kj(_={}){return _.window??(typeof window<"u"?window:null)}function JQ(_={}){return Kj(_)?.speechSynthesis||null}function Qj(){let _={...C6};for(let $ of qj)try{$(_)}catch(j){console.warn("[post-speech] playback listener failed:",j)}}function Bj(){return{...C6}}function AQ(_){if(typeof _!=="function")return()=>{};return qj.add(_),_(Bj()),()=>qj.delete(_)}function kQ(_={}){let $=Kj(_);return Boolean($&&$.speechSynthesis&&typeof $.SpeechSynthesisUtterance==="function")}function MQ(_){let $=H8(_);if(!$)return"";return String($).replace(/```[\s\S]*?```/g," Code block omitted. ").replace(/`([^`]+)`/g,"$1").replace(/!\[([^\]]*)\]\(([^)]+)\)/g,"$1").replace(/\[([^\]]+)\]\(([^)]+)\)/g,"$1").replace(/^#{1,6}\s+/gm,"").replace(/^>\s?/gm,"").replace(/^[-*+]\s+/gm,"• ").replace(/\n{3,}/g,`

`).replace(/\n\n+/g,". ").replace(/\s+/g," ").replace(/\s+([.,;:!?])/g,"$1").trim().slice(0,1600)}function TQ(_={}){let $=JQ(_);if(O8+=1,Vj=null,C6={activePostId:null,speaking:!1},$)try{$.cancel()}catch(j){console.warn("[post-speech] cancel failed:",j)}Qj()}function wQ(_,$,j={}){let G=Kj(j),Z=JQ(j);if(!G||!Z||typeof G.SpeechSynthesisUtterance!=="function")return!1;let X=String($||"").trim();if(!X)return!1;let Y=O8+1;O8=Y;try{Z.cancel()}catch{}let V=new G.SpeechSynthesisUtterance(X);Vj=V,C6={activePostId:_,speaking:!0},Qj();let Q=()=>{if(Y!==O8)return;Vj=null,C6={activePostId:null,speaking:!1},Qj()};V.onend=Q,V.onerror=Q;try{return Z.speak(V),!0}catch(q){return console.warn("[post-speech] speak failed:",q),Q(),!1}}async function IQ(_,$){try{return await _?.writeText?.($),!0}catch(j){return!1}}function Lj(_,$){let j=typeof $?.text==="string"?$.text:"",G=typeof $?.html==="string"?$.html:"";if(!_||!j||typeof _.createElement!=="function"||typeof _.execCommand!=="function")return!1;let Z=null,X=!1,Y=(V)=>{let Q=V?.clipboardData;if(!Q||typeof Q.setData!=="function")return;if(Q.setData("text/plain",j),G)Q.setData("text/html",G);if(typeof V.preventDefault==="function")V.preventDefault();X=!0};try{if(Z=_.createElement("textarea"),Z.value=j,typeof Z.setAttribute==="function")Z.setAttribute("readonly","");if(Z.style)Z.style.position="fixed",Z.style.opacity="0",Z.style.pointerEvents="none";if(_.body?.appendChild?.(Z),typeof Z.select==="function")Z.select();if(typeof Z.setSelectionRange==="function")Z.setSelectionRange(0,Z.value.length);_.addEventListener?.("copy",Y,!0);let V=_.execCommand("copy");return Boolean(X||V)}catch{return!1}finally{if(_.removeEventListener?.("copy",Y,!0),Z)_.body?.removeChild?.(Z)}}function yQ(_){if(!_||typeof _!=="object")return null;let $=_;if(typeof $.nodeType==="number"&&$.nodeType===3)return $.parentNode||null;return $}function xQ(_,$){let j=_?.clipboardData,G=$?.root,Z=$?.selection;if(!j||typeof j.setData!=="function"||!G||!Z)return!1;if(Z.isCollapsed)return!1;let X=!1;if(Number(Z.rangeCount||0)>0&&typeof Z.getRangeAt==="function")try{let Q=Z.getRangeAt(0);if(Q&&typeof Q.intersectsNode==="function")X=Boolean(Q.intersectsNode(G))}catch{X=!1}if(!X&&typeof G.contains==="function"){let Q=yQ(Z.anchorNode),q=yQ(Z.focusNode);X=Boolean(Q&&G.contains(Q)||q&&G.contains(q))}if(!X)return!1;let V=typeof Z.toString==="function"?String(Z.toString()||"").replace(/\u00a0/g," "):"";if(!V)return!1;return j.setData("text/plain",V),_?.preventDefault?.(),!0}function CQ(_,$){try{return Boolean(_?.getItem?.($))}catch(j){return!1}}function PQ(_,$,j){try{return _?.setItem?.($,j),!0}catch(G){return!1}}function RQ(_,$){let j=typeof _==="string"&&_.trim()?_.trim():null;if(j)return j;if(!$)return null;try{return new URL($).hostname}catch(G){return $}}function FA({mediaId:_,onPreview:$}){let[j,G]=C(null);if(g(()=>{C2(_).then(G).catch((q)=>{console.warn("[post] Failed to load attachment metadata for file card:",_,q)})},[_]),!j)return null;let Z=j.filename||"file",X=j.metadata?.size,Y=X?a_(X):"",Q=I6(j.content_type,j.filename)!=="unsupported";return F`
        <div class="file-attachment" onClick=${(q)=>q.stopPropagation()}>
            <a href=${u1(_)} download=${Z} class="file-attachment-main">
                <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
                <div class="file-info">
                    <span class="file-name">${Z}</span>
                    <span class="file-meta-row">
                        ${Y&&F`<span class="file-size">${Y}</span>`}
                        ${j.content_type&&F`<span class="file-size">${j.content_type}</span>`}
                    </span>
                </div>
                <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
            </a>
            ${Q&&F`
                <button
                    class="file-attachment-preview"
                    type="button"
                    onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),$?.({mediaId:_,info:j})}}
                >
                    Preview
                </button>
            `}
        </div>
    `}function UA(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="recovery_marker"&&$.recovered)}function DA(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="timeout_marker"&&($.timed_out??!0))}function HA(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="turn_outcome_marker")}function EA(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="peer_message")}function WA(_){return String(_||"").split(/[:/]/).filter(Boolean).pop()||"agent"}function fQ(_){let $=EA(_)[0]||null;if(!$)return null;let j=typeof $.source_chat_jid==="string"?$.source_chat_jid.trim():"",G=typeof $.source_agent_name==="string"&&$.source_agent_name.trim()?$.source_agent_name.trim():WA(j),Z=typeof $.target_chat_jid==="string"?$.target_chat_jid.trim():"",X=typeof $.target_agent_name==="string"?$.target_agent_name.trim():"",Y=typeof $.body==="string"?$.body:"";return{block:$,sourceChatJid:j,sourceAgentName:G,targetChatJid:Z,targetAgentName:X,body:Y}}function OA(_,$){let j=fQ($),G=typeof _==="string"?_:"";if(!j)return G;if(j.body&&j.body.trim())return j.body;let Z=j.sourceAgentName?j.sourceAgentName.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):"[^\\s>]+",X=j.sourceChatJid?j.sourceChatJid.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):"[^>\\n]+";return G.replace(new RegExp(`^from:\\s+@${Z}\\s+<jid:${X}>\\s*\\n\\n`,"i"),"")||G}var zA={context_recover:"context limit exceeded",rate_limit:"rate limit hit",api_error:"API error",timeout:"request timeout",overloaded:"service overloaded",connection:"connection error"};function JA(_){let $=Number(_?.attempts_used||0),j=String(_?.classifier||"").trim(),G=zA[j]||(j?j.replace(/_/g," "):""),Z=["Recovered automatically"];if($>1)Z[0]=`Recovered after ${$} attempts`;if(G)Z.push(G);return Z.join(" — ")}function AA(_){let $=typeof _?.tool_action_summary==="string"?_.tool_action_summary.trim():"",j=_?.draft_recovered?" Showing recovered draft.":"";return $?`Turn timed out — ${$}${j}`:`Turn timed out before the model finished responding${j}`}function kA({marker:_}){let[$,j]=C(!1),G=f((K)=>{K.stopPropagation(),j((N)=>!N)},[]),Z=typeof _?.title==="string"?_.title.trim():"",X=typeof _?.detail==="string"?_.detail.trim():"",Y=typeof _?.tool_action_summary==="string"?_.tool_action_summary.trim():"",V=_?.draft_recovered,Q=String(_?.severity||"warning"),q=Y||Z||String(_?.label||_?.kind||"issue"),B=Boolean(X||Z&&Y);return F`
        <div class=${`post-outcome-pill post-outcome-pill-${Q}`}>
            <div class="post-outcome-pill-header" onClick=${B?G:void 0}>
                ${B&&F`
                    <span class="post-outcome-pill-toggle" aria-hidden="true">${s1($?"down":"right")}</span>
                `}
                <span class="post-outcome-pill-label">${q}</span>
                ${V&&F`<span class="post-outcome-pill-badge">draft recovered</span>`}
            </div>
            ${$&&B&&F`
                <div class="post-outcome-pill-detail">
                    ${Z&&F`<div><strong>${Z}</strong></div>`}
                    ${X&&X!==Z&&F`<div>${X}</div>`}
                </div>
            `}
        </div>
    `}function MA({attachment:_,onPreview:$}){let j=Number(_?.id),[G,Z]=C(null);g(()=>{if(!Number.isFinite(j))return;C2(j).then(Z).catch((B)=>{console.warn("[post] Failed to load attachment metadata for attachment pill:",j,B)});return},[j]);let X=G?.filename||_.label||`attachment-${_.id}`,Y=Number.isFinite(j)?u1(j):null,V=I6(G?.content_type,G?.filename||_?.label),Q=N8(V),q=V!=="unsupported";return F`
        <span class="attachment-pill" title=${X}>
            ${Y?F`
                    <a href=${Y} download=${X} class="attachment-pill-main" onClick=${(B)=>B.stopPropagation()}>
                        <${V1}
                            prefix="post"
                            label=${_.label}
                            title=${X}
                        />
                    </a>
                `:F`
                    <${V1}
                        prefix="post"
                        label=${_.label}
                        title=${X}
                    />
                `}
            ${Number.isFinite(j)&&G&&q&&F`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${Q}
                    onClick=${(B)=>{B.preventDefault(),B.stopPropagation(),$?.({mediaId:j,info:G})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function z8({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:G}=_,Z=G?I4(G):null;return F`
        <div class="content-annotations">
            ${$&&$.length>0&&F`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&F`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${Z&&F`
                <span class="content-annotation">Updated: ${Z}</span>
            `}
        </div>
    `}function TA({block:_}){let $=_.title||_.name||_.uri,j=_.description,G=_.size?a_(_.size):"",Z=_.mime_type||"",X=IA(Z),Y=A4(_.uri);return F`
        <a
            href=${Y||"#"}
            class="resource-link"
            target=${Y?"_blank":void 0}
            rel=${Y?"noopener noreferrer":void 0}
            onClick=${(V)=>V.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${X}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&F`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${Z&&F`<span>${Z}</span>`}
                    ${G&&F`<span>${G}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function wA({block:_}){let[$,j]=C(!1),G=_.uri||"Embedded resource",Z=_.text||"",X=Boolean(_.data),Y=_.mime_type||"";return F`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),j(!$)}}>
                ${s1($?"down":"right")} ${G}
            </button>
            ${$&&F`
                ${Z&&F`<pre class="resource-embed-content">${Z}</pre>`}
                ${X&&F`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${Y&&F`<span class="resource-embed-blob-meta">${Y}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(V)=>{V.preventDefault(),V.stopPropagation();let Q=new Blob([Uint8Array.from(atob(_.data),(K)=>K.charCodeAt(0))],{type:Y||"application/octet-stream"}),q=URL.createObjectURL(Q),B=document.createElement("a");B.href=q,B.download=G.split("/").pop()||"resource",B.click(),URL.revokeObjectURL(q)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function yA({block:_,post:$,onOpenWidget:j}){if(!_)return null;let G=i9(_,$),Z=Qq(_),X=G?.artifact?.kind||_?.artifact?.kind||_?.kind||null,Y=G?.title||_.title||_.name||"Generated widget",V=G?.description||_.description||_.subtitle||"",Q=_.open_label||"Open widget",q=u(!1),B=(K)=>{if(K)K.preventDefault(),K.stopPropagation();if(!G)return;j?.(G)};return g(()=>{if(!_?.auto_open||!G||!Z||q.current)return;let K=$?.timestamp?new Date($.timestamp).getTime():0;if(K&&Date.now()-K>1e4)return;let N=`widget_opened_${_.widget_id||$?.id||""}`;if(CQ(sessionStorage,N))return;q.current=!0,PQ(sessionStorage,N,"1"),j?.(G)},[_?.auto_open,G,Z]),F`
        <div class="generated-widget-launch" onClick=${(K)=>K.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${X?` • ${String(X).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${Y}</div>
            </div>
            ${V&&F`<div class="generated-widget-launch-description">${V}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!Z}
                    onClick=${B}
                    title=${Z?"Open widget in a floating pane with a zen-mode toggle":"Unsupported widget artifact"}
                >
                    ${Q}
                </button>
                <span class="generated-widget-launch-note">
                    ${Z?"Opens in a dismissible floating pane with a zen-mode toggle.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function IA(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function xA(_){let $=A4(_,{allowDataImage:!0});return $?{backgroundImage:`url("${$}")`}:void 0}function CA({preview:_}){let $=A4(_.url),j=xA(_.image),G=RQ(_.site_name,$);return F`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(Z)=>Z.stopPropagation()}
            style=${j}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${G||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&F`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function PA(_,$){return typeof _==="string"?_:""}var SQ=1800,RA=40,fA=24576,SA=16,gA=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,uA=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,bA=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`,vA=`
<style>
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.6;
    color: #1a1a1a;
  }
  h1 { font-size: 1.6em; font-weight: 700; margin: 0.6em 0 0.4em; }
  h2 { font-size: 1.35em; font-weight: 700; margin: 0.6em 0 0.4em; }
  h3 { font-size: 1.15em; font-weight: 700; margin: 0.5em 0 0.3em; }
  h4, h5, h6 { font-size: 1em; font-weight: 700; margin: 0.5em 0 0.3em; }
  p { margin: 0.5em 0; }
  pre {
    background: #f6f8fa;
    border: 1px solid #d0d7de;
    border-radius: 6px;
    padding: 12px 16px;
    overflow-x: auto;
    margin: 0.5em 0;
  }
  code {
    font-family: "Fira Code", "Cascadia Code", Consolas, "Courier New", monospace;
    font-size: 0.9em;
  }
  pre code { background: none; padding: 0; border: none; }
  :not(pre) > code { background: #f0f2f5; padding: 2px 5px; border-radius: 3px; }
  blockquote { border-left: 3px solid #d0d7de; margin: 0.5em 0; padding-left: 12px; color: #57606a; }
  table { border-collapse: collapse; margin: 0.5em 0; }
  th, td { border: 1px solid #d0d7de; padding: 6px 12px; text-align: left; }
  th { background: #f6f8fa; font-weight: 600; }
  ul, ol { margin: 0.4em 0; padding-left: 1.8em; }
  li { margin: 0.15em 0; }
  a { color: #0969da; text-decoration: none; }
  hr { border: none; border-top: 1px solid #d0d7de; margin: 1em 0; }
  img { max-width: 100%; }
</style>`;function mA(_,$={}){let j=typeof _==="string"?_:"",G=j?j.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`):[],Z=new TextEncoder().encode(j).byteLength,X=Number.isFinite($.lineThreshold)?$.lineThreshold:RA,Y=Number.isFinite($.byteThreshold)?$.byteThreshold:fA,V=G.length>X||Z>Y,Q=Math.min(G.length,Number.isFinite($.previewLines)?$.previewLines:SA);return{shouldCollapse:V,lineCount:G.length,byteLength:Z,visibleLines:Q,omittedLines:Math.max(0,G.length-Q)}}async function gQ(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(Lj(document,{text:$}))return!0;if(await IQ(navigator.clipboard,$))return!0;try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let G=document.execCommand("copy");return document.body.removeChild(j),G}catch{return!1}}async function cA(_){let $=typeof _==="string"?_:"";if(!$)return!1;let j=Z1($,null),G=`<html><head>${vA}</head><body>${j}</body></html>`;if(Lj(document,{text:$,html:G}))return!0;if(navigator.clipboard?.write&&typeof ClipboardItem<"u")try{let Z=new ClipboardItem({"text/plain":new Blob([$],{type:"text/plain"}),"text/html":new Blob([G],{type:"text/html"})});return await navigator.clipboard.write([Z]),!0}catch(Z){console.warn("[post] Rich clipboard write failed, falling back to plain text copy.",Z)}return gQ($)}function hA(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,G=[],Z=(Y)=>{let V=window.getSelection?.();if(!V||V.isCollapsed)return;for(let Q of $)if(xQ(Y,{root:Q,selection:V}))return};document.addEventListener("copy",Z,!0),G.push(()=>document.removeEventListener("copy",Z,!0));let X=(Y,V)=>{let Q=V||"idle";if(Y.dataset.copyState=Q,Q==="success")Y.innerHTML=uA,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(Q==="error")Y.innerHTML=bA,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=gA,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let V=document.createElement("div");V.className="post-code-block";let Q=Y.querySelector("code"),q=mA(Q?.textContent||"");if(q.shouldCollapse){V.classList.add("post-code-block-collapsed"),V.style.setProperty("--post-code-preview-lines",String(q.visibleLines));let N=document.createElement("button");N.type="button",N.className="post-code-expand-btn";let L=()=>{let E=V.classList.contains("post-code-block-expanded");N.innerHTML=E?`${_j("up")} <span>Collapse output</span>`:`${_j("right")} <span>Expand output · ${q.lineCount.toLocaleString()} lines · ${a_(q.byteLength)}${q.omittedLines?` · ${q.omittedLines.toLocaleString()} hidden`:""}</span>`,N.setAttribute("aria-expanded",E?"true":"false")},U=(E)=>{E.preventDefault(),E.stopPropagation(),V.classList.toggle("post-code-block-expanded"),L()};N.addEventListener("click",U),L(),V.appendChild(N),G.push(()=>N.removeEventListener("click",U))}Y.parentNode?.insertBefore(V,Y),V.appendChild(Y);let B=document.createElement("button");B.type="button",B.className="post-code-copy-btn",X(B,"idle"),V.appendChild(B);let K=async(N)=>{N.preventDefault(),N.stopPropagation();let U=Y.querySelector("code")?.textContent||"",E=await gQ(U);X(B,E?"success":"error");let H=j.get(B);if(H)clearTimeout(H);let D=setTimeout(()=>{X(B,"idle"),j.delete(B)},SQ);j.set(B,D)};B.addEventListener("click",K),G.push(()=>{B.removeEventListener("click",K);let N=j.get(B);if(N)clearTimeout(N);if(V.parentNode)V.parentNode.insertBefore(Y,V),V.remove()})}),()=>{G.forEach((Y)=>Y())}}function uQ(_){let $=String(_||"").trim(),j=$.match(/^`([^`]+)`$/);return(j?j[1]:$).trim()}function lA(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Files:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){G=q;break}if(G===-1)return{content:_,fileRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let q=j[X];if(/^\s*-\s+/.test(q)){let B=uQ(q.replace(/^\s*-\s+/,"").trim());if(B)Z.push(B)}else if(!q.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let Y=j.slice(0,G),V=j.slice(X),Q=[...Y,...V].join(`
`);return Q=Q.replace(/\n{3,}/g,`

`).trim(),{content:Q,fileRefs:Z}}function pA(_){if(!_)return{content:_,folderRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Folders:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){G=q;break}if(G===-1)return{content:_,folderRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let q=j[X];if(/^\s*-\s+/.test(q)){let B=uQ(q.replace(/^\s*-\s+/,"").trim());if(B)Z.push(B)}else if(!q.trim())break;else break}if(Z.length===0)return{content:_,folderRefs:[]};let Y=j.slice(0,G),V=j.slice(X),Q=[...Y,...V].join(`
`);return Q=Q.replace(/\n{3,}/g,`

`).trim(),{content:Q,folderRefs:Z}}function rA(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Referenced messages:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){G=q;break}if(G===-1)return{content:_,messageRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let q=j[X];if(/^\s*-\s+/.test(q)){let K=q.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(K)Z.push(K[1])}else if(!q.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let Y=j.slice(0,G),V=j.slice(X),Q=[...Y,...V].join(`
`);return Q=Q.replace(/\n{3,}/g,`

`).trim(),{content:Q,messageRefs:Z}}function nA(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let q=0;q<j.length;q+=1){let B=j[q].trim();if((B==="Images:"||B==="Attachments:")&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){G=q;break}}if(G===-1)return{content:_,attachments:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let q=j[X];if(/^\s*-\s+/.test(q)){let B=q.replace(/^\s*-\s+/,"").trim(),K=B.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||B.match(/^attachment:([^\s]+)\s+(.+)$/i);if(K){let N=K[1],L=(K[2]||"").trim()||N;Z.push({id:N,label:L,raw:B})}else Z.push({id:null,label:B,raw:B})}else if(!q.trim())break;else break}if(Z.length===0)return{content:_,attachments:[]};let Y=j.slice(0,G),V=j.slice(X),Q=[...Y,...V].join(`
`);return Q=Q.replace(/\n{3,}/g,`

`).trim(),{content:Q,attachments:Z}}function dA(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function oA(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let G=j.map(dA).sort((B,K)=>K.length-B.length),Z=new RegExp(`(${G.join("|")})`,"gi"),X=new RegExp(`^(${G.join("|")})$`,"i"),Y=new DOMParser().parseFromString(_,"text/html"),V=Y.createTreeWalker(Y.body,NodeFilter.SHOW_TEXT),Q=[],q;while(q=V.nextNode())Q.push(q);for(let B of Q){let K=B.nodeValue;if(!K||!Z.test(K)){Z.lastIndex=0;continue}Z.lastIndex=0;let N=B.parentElement;if(N&&N.closest("code, pre, script, style"))continue;let L=K.split(Z).filter((E)=>E!=="");if(L.length===0)continue;let U=Y.createDocumentFragment();for(let E of L)if(X.test(E)){let H=Y.createElement("mark");H.className="search-highlight-term",H.textContent=E,U.appendChild(H)}else U.appendChild(Y.createTextNode(E));B.parentNode.replaceChild(U,B)}return Y.body.innerHTML}function bQ({post:_,onClick:$,onHashtagClick:j,onMessageRef:G,onScrollToMessage:Z,agentName:X,agentAvatarUrl:Y,userName:V,userAvatarUrl:Q,userAvatarBackground:q,onDelete:B,isThreadReply:K,isThreadPrev:N,isThreadNext:L,isRemoving:U,highlightQuery:E,onFileRef:H,onOpenWidget:D,onOpenAttachmentPreview:M}){let[z,O]=C(null),[x,I]=C("idle"),[J,k]=C(()=>Bj()),W=u(null),T=u(null),w=_.data,A=w.type==="agent_response",P=V||"You",R=A?X||lq:P,b=typeof _.chat_agent_name==="string"?_.chat_agent_name.trim():"",c=Boolean(A&&E&&b&&b!==R),r=A?t9(X,Y,!0):t9(P,Q),e=typeof q==="string"?q.trim().toLowerCase():"",m=!A&&r.image&&(e==="clear"||e==="transparent"),_0=A&&Boolean(r.image),E0=`background-color: ${m||_0?"transparent":r.color}`,Z0=w.content_meta,j0=Boolean(Z0?.truncated),V0=Boolean(Z0?.preview),N0=j0&&!V0,h=j0?{originalLength:Number.isFinite(Z0?.original_length)?Z0.original_length:w.content?w.content.length:0,maxLength:Number.isFinite(Z0?.max_length)?Z0.max_length:0}:null,$0=w.content_blocks||[],Q0=w.media_ids||[],O0=fQ($0),a=Boolean(O0?.sourceAgentName),X0=PA(w.content,w.link_previews);X0=OA(X0,$0);let{content:W0,fileRefs:P0}=lA(X0),{content:l0,folderRefs:u0}=pA(W0),{content:G_,messageRefs:h0}=rA(l0),s0=(d)=>{d?.preventDefault?.(),d?.stopPropagation?.(),G?.(_.id,_.chat_jid||null)},R0=(d)=>{if(d.key==="Enter"||d.key===" ")s0(d)},{content:o0,attachments:v0}=nA(G_);X0=o0;let t0=Yj($0),i0=jj($0),Z_=UA($0)[0]||null,z0=DA($0)[0]||null,d0=HA($0)[0]||null,H_=t0.length===1&&typeof t0[0]?.fallback_text==="string"?t0[0].fallback_text.trim():"",D0=i0.length===1?D8(i0[0]).trim():"",g0=Boolean(H_)&&X0?.trim()===H_||Boolean(D0)&&X0?.trim()===D0,x0=Boolean(X0)&&!N0&&!g0,r0=typeof E==="string"?E.trim():"",z_=Y0(()=>{if(!X0||g0)return"";let d=Z1(X0,j);return r0?oA(d,r0):d},[X0,g0,r0]),Q_=Y0(()=>H8(_),[_]),U_=Y0(()=>kQ(),[]),N_=Y0(()=>MQ(_),[_]),J_=Boolean(J.speaking&&J.activePostId===_.id),I_=(d,L0)=>{d.stopPropagation(),O(u1(L0))},P_=(d)=>{M?.(d)},E_=(d)=>{d.stopPropagation(),B?.(_)},i_=async(d)=>{d.stopPropagation();let L0=await cA(Q_);if(I(L0?"success":"error"),T.current)clearTimeout(T.current);T.current=setTimeout(()=>{T.current=null,I("idle")},SQ)},R_=(d)=>{if(d.stopPropagation(),J_){TQ();return}wQ(_.id,N_)},q0=(d,L0)=>{let p0=new Set;if(!d||L0.length===0)return{content:d,usedIds:p0};return{content:d.replace(/attachment:([^\s)"']+)/g,(f_,F1,u_,z1)=>{let x_=F1.replace(/^\/+/,""),J1=L0.find((k_)=>k_.name&&k_.name.toLowerCase()===x_.toLowerCase()&&!p0.has(k_.id))||L0.find((k_)=>!p0.has(k_.id));if(!J1)return f_;if(p0.add(J1.id),z1.slice(Math.max(0,u_-2),u_)==="](")return`/media/${J1.id}`;return J1.name||"attachment"}),usedIds:p0}},v=[],n=[],s=[],G0=[],F0=[],T0=[],A0=[],M0=0;if($0.length>0)$0.forEach((d)=>{if(d?.type==="text"&&d.annotations)A0.push(d.annotations);if(d?.type==="generated_widget")T0.push(d);else if(d?.type==="resource_link")G0.push(d);else if(d?.type==="resource")F0.push(d);else if(d?.type==="file"){let L0=Q0[M0++];if(L0)n.push(L0),s.push({id:L0,name:d?.name||d?.filename||d?.title})}else if(d?.type==="image"||!d?.type){let L0=Q0[M0++];if(L0){let p0=typeof d?.mime_type==="string"?d.mime_type:void 0;v.push({id:L0,annotations:d?.annotations,mimeType:p0}),s.push({id:L0,name:d?.name||d?.filename||d?.title})}}});else if(Q0.length>0){let d=v0.length>0;Q0.forEach((L0,p0)=>{let j_=v0[p0]||null;if(s.push({id:L0,name:j_?.label||null}),d)n.push(L0);else v.push({id:L0,annotations:null})})}if(v0.length>0)v0.forEach((d)=>{if(!d?.id)return;let L0=s.find((p0)=>String(p0.id)===String(d.id));if(L0&&!L0.name)L0.name=d.label});let{content:w0,usedIds:c0}=q0(X0,s);X0=w0;let S0=v.filter(({id:d})=>!c0.has(d)),n0=n.filter((d)=>!c0.has(d)),e0=v0.length>0?v0.map((d,L0)=>({id:d.id||`attachment-${L0+1}`,label:d.label||`attachment-${L0+1}`})):s.map((d,L0)=>({id:d.id,label:d.name||`attachment-${L0+1}`})),I0=Y0(()=>Yj($0),[$0]),y0=Y0(()=>jj($0),[$0]),D_=Y0(()=>{return I0.map((d)=>`${d.card_id}:${d.state}`).join("|")},[I0]);g(()=>{if(!W.current)return;return E$(W.current),hA(W.current)},[z_]),g(()=>{return AQ((d)=>{k(d)})},[]),g(()=>()=>{if(T.current)clearTimeout(T.current)},[]);let __=u(null);return g(()=>{if(!__.current||I0.length===0)return;let d=__.current;d.innerHTML="";for(let L0 of I0){let p0=document.createElement("div");d.appendChild(p0),OQ(p0,L0,{onAction:async(j_)=>{if(j_.type==="Action.OpenUrl"){let f_=A4(j_.url||"");if(!f_)throw Error("Invalid URL");window.open(f_,"_blank","noopener,noreferrer");return}if(j_.type==="Action.Submit"){await f7({post_id:_.id,thread_id:w.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:L0.card_id,action:{type:j_.type,title:j_.title||"",data:j_.data}});return}console.warn("[post] unsupported adaptive card action:",j_.type,j_)}}).catch((j_)=>{console.error("[post] adaptive card render error:",j_),p0.textContent=L0.fallback_text||"Card failed to render."})}},[D_,_.id]),F`
        <div id=${`post-${_.id}`} class="post ${A?"agent-post":""} ${K?"thread-reply":""} ${N?"thread-prev":""} ${L?"thread-next":""} ${U?"removing":""}" onClick=${$}>
            <div class="post-avatar ${A?"agent-avatar":""} ${r.image?"has-image":""}" style=${E0}>
                ${r.image?F`<img src=${r.image} alt=${R} />`:r.letter}
            </div>
            <div class="post-body">
                <div class="post-actions">
                    ${A&&U_&&N_&&F`
                        <button
                            class=${`post-action-btn post-speak-btn${J_?" is-active":""}`}
                            type="button"
                            title=${J_?"Stop reading aloud":"Read aloud"}
                            aria-label=${J_?"Stop reading aloud":"Read aloud"}
                            onClick=${R_}
                        >
                            ${J_?F`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="6" y="6" width="12" height="12" rx="2"></rect></svg>`:F`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18 6a8.5 8.5 0 0 1 0 12"></path></svg>`}
                        </button>
                    `}
                    <button
                        class=${`post-action-btn post-copy-btn${x==="success"?" is-success":x==="error"?" is-error":""}`}
                        type="button"
                        title=${x==="success"?"Copied":x==="error"?"Copy failed":"Copy message"}
                        aria-label=${x==="success"?"Copied":x==="error"?"Copy failed":"Copy message"}
                        onClick=${i_}
                        disabled=${!Q_}
                    >
                        ${x==="success"?F`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 6L9 17l-5-5"></path></svg>`:x==="error"?F`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9"></circle><path d="M9 9l6 6M15 9l-6 6"></path></svg>`:F`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="9" y="9" width="10" height="10" rx="2"></rect><path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path></svg>`}
                    </button>
                    <button
                        class="post-action-btn post-delete-btn"
                        type="button"
                        title="Delete message"
                        aria-label="Delete message"
                        onClick=${E_}
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="post-meta">
                    <span class="post-author">${R}</span>
                    ${a&&F`
                        <span
                            class="post-chat-agent-tag"
                            title=${`From ${O0?.sourceChatJid||""}`.trim()}
                        >
                            @${O0?.sourceAgentName}
                        </span>
                    `}
                    ${c&&F`
                        <span
                            class="post-chat-agent-tag"
                            role="button"
                            tabIndex="0"
                            style="cursor:pointer"
                            title=${`Open ${b} and reference this message`}
                            onClick=${s0}
                            onKeyDown=${R0}
                        >
                            @${b}
                        </span>
                    `}
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${s0}>${TX(_.timestamp)}</a>
                    ${Z_&&F`
                        <span
                            class="post-recovery-chip"
                            title=${JA(Z_)}
                        >
                            recovered
                        </span>
                    `}
                    ${z0&&F`
                        <span
                            class="post-recovery-chip post-timeout-chip"
                            title=${AA(z0)}
                        >
                            timeout
                        </span>
                    `}
                    ${d0&&F`
                        <span
                            class=${`post-recovery-chip post-outcome-chip post-outcome-chip-${String(d0.severity||"warning")}${d0.kind==="tool_budget"?" post-outcome-chip-tool-budget":""}`}
                            title=${String(d0.label||d0.kind||"issue")}
                        >
                            ${String(d0.label||d0.kind||"issue")}
                        </span>
                    `}
                </div>
                ${d0&&F`
                    <${kA} marker=${d0} />
                `}
                ${N0&&h&&F`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${U6(h.originalLength)} chars
                            ${h.maxLength?F` • Display limit: ${U6(h.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${V0&&h&&F`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${U6(h.maxLength)} of ${U6(h.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(P0.length>0||u0.length>0||h0.length>0||e0.length>0)&&F`
                    <div class="post-file-refs">
                        ${h0.map((d)=>{let L0=(p0)=>{if(p0.preventDefault(),p0.stopPropagation(),Z)Z(d,_.chat_jid||null);else{let j_=document.getElementById("post-"+d);if(j_)j_.scrollIntoView({behavior:"smooth",block:"center"}),j_.classList.add("post-highlight"),setTimeout(()=>j_.classList.remove("post-highlight"),2000)}};return F`
                                <a href=${`#msg-${d}`} class="post-msg-pill-link" onClick=${L0}>
                                    <${V1}
                                        prefix="post"
                                        label=${"msg:"+d}
                                        title=${"Message "+d}
                                        icon="message"
                                        onClick=${L0}
                                    />
                                </a>
                            `})}
                        ${P0.map((d)=>{let L0=d.split("/").pop()||d;return F`
                                <${V1}
                                    prefix="post"
                                    label=${L0}
                                    title=${d}
                                    onClick=${()=>H?.(d)}
                                />
                            `})}
                        ${u0.map((d)=>{let L0=d.split("/").pop()||d;return F`
                                <${V1}
                                    prefix="post"
                                    label=${L0}
                                    title=${d}
                                    icon="folder"
                                />
                            `})}
                        ${e0.map((d)=>F`
                            <${MA}
                                key=${d.id}
                                attachment=${d}
                                onPreview=${P_}
                            />
                        `)}
                    </div>
                `}
                ${x0&&F`
                    <div 
                        ref=${W}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:z_}}
                        onClick=${(d)=>{if(d.target.classList.contains("hashtag")){d.preventDefault(),d.stopPropagation();let L0=d.target.dataset.hashtag;if(L0)j?.(L0)}else if(d.target.tagName==="IMG")d.preventDefault(),d.stopPropagation(),O(d.target.src)}}
                    />
                `}
                ${I0.length>0&&F`
                    <div ref=${__} class="post-adaptive-cards" />
                `}
                ${y0.length>0&&F`
                    <div class="post-adaptive-card-submissions">
                        ${y0.map((d,L0)=>{let p0=BQ(d),j_=`${d.card_id}-${L0}`;return F`
                                <div key=${j_} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${p0.title}</span>
                                        </div>
                                    </div>
                                    ${p0.fields.length>0&&F`
                                        <div class="adaptive-card-submission-fields">
                                            ${p0.fields.map((f_)=>F`
                                                <span class="adaptive-card-submission-field" title=${`${f_.key}: ${f_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${f_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${f_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${I4(p0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${T0.length>0&&F`
                    <div class="generated-widget-launches">
                        ${T0.map((d,L0)=>F`
                            <${yA}
                                key=${d.widget_id||d.id||`${_.id}-widget-${L0}`}
                                block=${d}
                                post=${_}
                                onOpenWidget=${D}
                            />
                        `)}
                    </div>
                `}
                ${A0.length>0&&F`
                    ${A0.map((d,L0)=>F`
                        <${z8} key=${L0} annotations=${d} />
                    `)}
                `}
                ${S0.length>0&&F`
                    <div class="media-preview">
                        ${S0.map(({id:d,mimeType:L0})=>{let j_=typeof L0==="string"&&L0.toLowerCase().startsWith("image/svg")?u1(d):g7(d);return F`
                                <img
                                    key=${d}
                                    src=${j_}
                                    alt="Media"
                                    loading="lazy"
                                    decoding="async"
                                    onClick=${(f_)=>I_(f_,d)}
                                />
                            `})}
                    </div>
                `}
                ${S0.length>0&&F`
                    ${S0.map(({annotations:d},L0)=>F`
                        ${d&&F`<${z8} key=${L0} annotations=${d} />`}
                    `)}
                `}
                ${n0.length>0&&F`
                    <div class="file-attachments">
                        ${n0.map((d)=>F`
                            <${FA} key=${d} mediaId=${d} onPreview=${P_} />
                        `)}
                    </div>
                `}
                ${G0.length>0&&F`
                    <div class="resource-links">
                        ${G0.map((d,L0)=>F`
                            <div key=${L0}>
                                <${TA} block=${d} />
                                <${z8} annotations=${d.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${F0.length>0&&F`
                    <div class="resource-embeds">
                        ${F0.map((d,L0)=>F`
                            <div key=${L0}>
                                <${wA} block=${d} />
                                <${z8} annotations=${d.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${w.link_previews?.length>0&&F`
                    <div class="link-previews">
                        ${w.link_previews.map((d,L0)=>F`
                            <${CA} key=${L0} preview=${d} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${z&&F`<${zQ} src=${z} onClose=${()=>O(null)} />`}

    `}function vQ({posts:_,hasMore:$,onLoadMore:j,onPostClick:G,onHashtagClick:Z,onMessageRef:X,onScrollToMessage:Y,onFileRef:V,onOpenWidget:Q,onOpenAttachmentPreview:q,emptyMessage:B,timelineRef:K,agents:N,user:L,onDeletePost:U,reverse:E=!0,removingPostIds:H,searchQuery:D}){let[M,z]=C(!1),O=u(null),x=typeof IntersectionObserver<"u",I=f(async()=>{if(!j||!$||M)return;z(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{z(!1)}},[$,M,j]),J=f((b)=>{let{scrollTop:c,scrollHeight:r,clientHeight:e}=b.target,m=E?r-e-c:c,_0=Math.max(300,e);if(m<_0)I()},[E,I]);g(()=>{if(!x)return;let b=O.current,c=K?.current;if(!b||!c)return;let r=300,e=new IntersectionObserver((m)=>{for(let _0 of m){if(!_0.isIntersecting)continue;I()}},{root:c,rootMargin:`${r}px 0px ${r}px 0px`,threshold:0});return e.observe(b),()=>e.disconnect()},[x,$,j,K,I]);let k=u(I);if(k.current=I,g(()=>{if(x)return;if(!K?.current)return;let{scrollTop:b,scrollHeight:c,clientHeight:r}=K.current,e=E?c-r-b:b,m=Math.max(300,r);if(e<m)k.current?.()},[x,_,$,E,K]),g(()=>{if(!K?.current)return;if(!$||M)return;let{scrollTop:b,scrollHeight:c,clientHeight:r}=K.current,e=E?c-r-b:b,m=Math.max(300,r);if(c<=r+1||e<m)k.current?.()},[_,$,M,E,K]),!_)return F`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return F`
            <div class="timeline" ref=${K}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${B||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let W=_.slice().sort((b,c)=>b.id-c.id),T=(b)=>{let c=b?.data?.thread_id;if(c===null||c===void 0||c==="")return null;let r=Number(c);return Number.isFinite(r)?r:null},w=new Map;for(let b=0;b<W.length;b+=1){let c=W[b],r=Number(c?.id),e=T(c);if(e!==null){let m=w.get(e)||{anchorIndex:-1,replyIndexes:[]};m.replyIndexes.push(b),w.set(e,m)}else if(Number.isFinite(r)){let m=w.get(r)||{anchorIndex:-1,replyIndexes:[]};m.anchorIndex=b,w.set(r,m)}}let A=new Map;for(let[b,c]of w.entries()){let r=new Set;if(c.anchorIndex>=0)r.add(c.anchorIndex);for(let e of c.replyIndexes)r.add(e);A.set(b,Array.from(r).sort((e,m)=>e-m))}let P=W.map((b,c)=>{let r=T(b);if(r===null)return{hasThreadPrev:!1,hasThreadNext:!1};let e=A.get(r);if(!e||e.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let m=e.indexOf(c);if(m<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:m>0,hasThreadNext:m<e.length-1}}),R=F`<div class="timeline-sentinel" ref=${O}></div>`;return F`
        <div class="timeline ${E?"reverse":"normal"}" ref=${K} onScroll=${J}>
            <div class="timeline-content">
                ${E?R:null}
                ${W.map((b,c)=>{let r=Boolean(b.data?.thread_id&&b.data.thread_id!==b.id),e=H?.has?.(b.id),m=P[c]||{};return F`
                    <${bQ}
                        key=${b.id}
                        post=${b}
                        isThreadReply=${r}
                        isThreadPrev=${m.hasThreadPrev}
                        isThreadNext=${m.hasThreadNext}
                        isRemoving=${e}
                        highlightQuery=${D}
                        agentName=${pq(b.data?.agent_id,N||{})}
                        agentAvatarUrl=${rq(b.data?.agent_id,N||{})}
                        userName=${L?.name||L?.user_name}
                        userAvatarUrl=${L?.avatar_url||L?.avatarUrl||L?.avatar}
                        userAvatarBackground=${L?.avatar_background||L?.avatarBackground}
                        onClick=${()=>G?.(b)}
                        onHashtagClick=${Z}
                        onMessageRef=${X}
                        onScrollToMessage=${Y}
                        onFileRef=${V}
                        onOpenWidget=${Q}
                        onDelete=${U}
                        onOpenAttachmentPreview=${q}
                    />
                `})}
                ${E?null:R}
            </div>
        </div>
    `}k0();M_();function mQ(_){try{return _?.focus?.(),_?.select?.(),!0}catch($){return!1}}var J8="workspaceExplorerScale",iA=["compact","default","comfortable"],sA=new Set(iA),aA={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function cQ(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return sA.has(j)?j:$}function Nj(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),G=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||G&&j}}function tA(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function eA(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function Fj(_={}){let $=tA(_),j=_.stored?cQ(_.stored,$):$;return eA(j,_)}function hQ(_){return aA[cQ(_)]}W9();function _k(_){if(!_||_.kind!=="text")return!1;let $=Number(_.size);return!Number.isFinite($)||$<=262144}function Uj(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let G=$({path:j,mode:"edit"});if(!G||typeof G!=="object")return!1;return G.id!=="editor"}function lQ(_,$,j={}){let G=j.resolvePane;if(Uj(_,G))return!0;return _k($)}var oQ=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function $k(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return Uj($,(j)=>Y_.resolve(j))}function iQ(_,$,j,G=0,Z=[]){if(!j&&oQ(_))return Z;if(!_)return Z;if(Z.push({node:_,depth:G}),_.type==="dir"&&_.children&&$.has(_.path))for(let X of _.children)iQ(X,$,j,G+1,Z);return Z}function pQ(_,$,j){if(!_)return"";let G=[],Z=(X)=>{if(!j&&oQ(X))return;if(G.push(X.type==="dir"?`d:${X.path}`:`f:${X.path}`),X.children&&$?.has(X.path))for(let Y of X.children)Z(Y)};return Z(_),G.join("|")}function Wj(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,G=Array.isArray($.children)?$.children:null;if(!G)return _;let Z=j?new Map(j.map((V)=>[V?.path,V])):new Map,X=!j||j.length!==G.length,Y=G.map((V)=>{let Q=Wj(Z.get(V.path),V);if(Q!==Z.get(V.path))X=!0;return Q});return X?{...$,children:Y}:_}function Hj(_,$,j){if(!_)return _;if(_.path===$)return Wj(_,j);if(!Array.isArray(_.children))return _;let G=!1,Z=_.children.map((X)=>{let Y=Hj(X,$,j);if(Y!==X)G=!0;return Y});return G?{..._,children:Z}:_}var sQ=4,Dj=14,jk=16;function aQ(_){if(!_)return 0;if(_.type==="file"){let G=Math.max(0,Number(_.size)||0);return _.__bytes=G,G}let $=Array.isArray(_.children)?_.children:[],j=0;for(let G of $)j+=aQ(G);return _.__bytes=j,j}function tQ(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),G={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=sQ)return G;let Z=Array.isArray(_.children)?_.children:[],X=[];for(let V of Z){let Q=Math.max(0,Number(V?.__bytes??V?.size??0));if(Q<=0)continue;if(V.type==="dir")X.push({kind:"dir",node:V,size:Q});else X.push({kind:"file",name:V.name,path:V.path,size:Q})}X.sort((V,Q)=>Q.size-V.size);let Y=X;if(X.length>Dj){let V=X.slice(0,Dj-1),Q=X.slice(Dj-1),q=Q.reduce((B,K)=>B+K.size,0);V.push({kind:"other",name:`+${Q.length} more`,path:`${G.path}/[other]`,size:q}),Y=V}return G.children=Y.map((V)=>{if(V.kind==="dir")return tQ(V.node,$+1);return{name:V.name,path:V.path,size:V.size,children:[]}}),G}function rQ(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function eQ(_,$,j){let G=((_+Math.PI/2)*180/Math.PI+360)%360,Z=j?Math.max(30,70-$*10):Math.max(34,66-$*8),X=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${G.toFixed(1)} ${Z}% ${X}%)`}function A8(_,$,j,G){return{x:_+j*Math.cos(G),y:$+j*Math.sin(G)}}function Oj(_,$,j,G,Z,X){let Y=Math.PI*2-0.0001,V=X-Z>Y?Z+Y:X,Q=A8(_,$,G,Z),q=A8(_,$,G,V),B=A8(_,$,j,V),K=A8(_,$,j,Z),N=V-Z>Math.PI?1:0;return[`M ${Q.x.toFixed(3)} ${Q.y.toFixed(3)}`,`A ${G} ${G} 0 ${N} 1 ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,`L ${B.x.toFixed(3)} ${B.y.toFixed(3)}`,`A ${j} ${j} 0 ${N} 0 ${K.x.toFixed(3)} ${K.y.toFixed(3)}`,"Z"].join(" ")}var _K={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function $K(_,$,j){let G=[],Z=[],X=Math.max(0,Number($)||0),Y=(V,Q,q,B)=>{let K=Array.isArray(V?.children)?V.children:[];if(!K.length)return;let N=Math.max(0,Number(V.size)||0);if(N<=0)return;let L=q-Q,U=Q;K.forEach((E,H)=>{let D=Math.max(0,Number(E.size)||0);if(D<=0)return;let M=D/N,z=U,O=H===K.length-1?q:U+L*M;if(U=O,O-z<0.003)return;let x=_K[B];if(x){let I=eQ(z,B,j);if(G.push({key:E.path,path:E.path,label:E.name,size:D,color:I,depth:B,startAngle:z,endAngle:O,innerRadius:x[0],outerRadius:x[1],d:Oj(120,120,x[0],x[1],z,O)}),B===1)Z.push({key:E.path,name:E.name,size:D,pct:X>0?D/X*100:0,color:I})}if(B<sQ)Y(E,z,O,B+1)})};return Y(_,-Math.PI/2,Math.PI*3/2,1),{segments:G,legend:Z}}function Ej(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let G of j){let Z=Ej(G,$);if(Z)return Z}return null}function jK(_,$,j,G){if(!j||j<=0)return{segments:[],legend:[]};let Z=_K[1];if(!Z)return{segments:[],legend:[]};let X=-Math.PI/2,Y=Math.PI*3/2,V=eQ(X,1,G),q=`${$||"."}/[files]`;return{segments:[{key:q,path:q,label:_,size:j,color:V,depth:1,startAngle:X,endAngle:Y,innerRadius:Z[0],outerRadius:Z[1],d:Oj(120,120,Z[0],Z[1],X,Y)}],legend:[{key:q,name:_,size:j,pct:100,color:V}]}}function nQ(_,$=!1,j=!1){if(!_)return null;let G=aQ(_),Z=tQ(_,0),X=Z.size||G,{segments:Y,legend:V}=$K(Z,X,j);if(!Y.length&&X>0){let Q=jK("[files]",Z.path,X,j);Y=Q.segments,V=Q.legend}return{root:Z,totalSize:X,segments:Y,legend:V,truncated:$,isDarkTheme:j}}function Gk({payload:_}){if(!_)return null;let[$,j]=C(null),[G,Z]=C(_?.root?.path||"."),[X,Y]=C(()=>[_?.root?.path||"."]),[V,Q]=C(!1);g(()=>{let T=_?.root?.path||".";Z(T),Y([T]),j(null)},[_?.root?.path,_?.totalSize]),g(()=>{if(!G)return;Q(!0);let T=setTimeout(()=>Q(!1),180);return()=>clearTimeout(T)},[G]);let q=Y0(()=>{return Ej(_.root,G)||_.root},[_?.root,G]),B=q?.size||_.totalSize||0,{segments:K,legend:N}=Y0(()=>{let T=$K(q,B,_.isDarkTheme);if(T.segments.length>0)return T;if(B<=0)return T;let w=q?.children?.length?"Total":"[files]";return jK(w,q?.path||_?.root?.path||".",B,_.isDarkTheme)},[q,B,_.isDarkTheme,_?.root?.path]),[L,U]=C(K),E=u(new Map),H=u(0);g(()=>{let T=E.current,w=new Map(K.map((b)=>[b.key,b])),A=performance.now(),P=220,R=(b)=>{let c=Math.min(1,(b-A)/220),r=c*(2-c),e=K.map((m)=>{let E0=T.get(m.key)||{startAngle:m.startAngle,endAngle:m.startAngle,innerRadius:m.innerRadius,outerRadius:m.innerRadius},Z0=($0,Q0)=>$0+(Q0-$0)*r,j0=Z0(E0.startAngle,m.startAngle),V0=Z0(E0.endAngle,m.endAngle),N0=Z0(E0.innerRadius,m.innerRadius),h=Z0(E0.outerRadius,m.outerRadius);return{...m,d:Oj(120,120,N0,h,j0,V0)}});if(U(e),c<1)H.current=requestAnimationFrame(R)};if(H.current)cancelAnimationFrame(H.current);return H.current=requestAnimationFrame(R),E.current=w,()=>{if(H.current)cancelAnimationFrame(H.current)}},[K]);let D=L.length?L:K,M=B>0?a_(B):"0 B",z=q?.name||"",x=(z&&z!=="."?z:"Total")||"Total",I=M,J=X.length>1,k=(T)=>{if(!T?.path)return;let w=Ej(_.root,T.path);if(!w||!Array.isArray(w.children)||w.children.length===0)return;Y((A)=>[...A,w.path]),Z(w.path),j(null)},W=()=>{if(!J)return;Y((T)=>{let w=T.slice(0,-1);return Z(w[w.length-1]||_?.root?.path||"."),w}),j(null)};return F`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${V?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${q?.path||_?.root?.path||"."}`}
                data-segments=${D.length}
                data-base-size=${B}>
                ${D.map((T)=>F`
                    <path
                        key=${T.key}
                        d=${T.d}
                        fill=${T.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===T.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(T)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(T)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>k(T)}
                    >
                        <title>${T.label} — ${a_(T.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${J?" is-drill":""}`}
                    onClick=${W}
                    role="button"
                    aria-label="Zoom out"
                >
                    <circle
                        cx="120"
                        cy="120"
                        r="24"
                        fill="var(--bg-secondary)"
                        stroke="var(--border-color)"
                        stroke-width="1"
                        class="workspace-folder-starburst-center"
                    />
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${x}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${I}</text>
                </g>
            </svg>
            ${N.length>0&&F`
                <div class="workspace-folder-starburst-legend">
                    ${N.slice(0,8).map((T)=>F`
                        <div key=${T.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${T.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${T.name}>${T.name}</span>
                            <span class="workspace-folder-starburst-size">${a_(T.size)}</span>
                            <span class="workspace-folder-starburst-pct">${T.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&F`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function dQ(_){if(typeof document>"u"||!_)return;let $=document.createElement("a");$.href=_,$.setAttribute("download",""),$.rel="noopener",$.style.display="none",document.body.appendChild($),$.click(),$.remove()}function GK(_){switch(_?.state){case"indexing":return"Indexing workspace…";case"ready":return"Workspace index ready";case"stale":return"Workspace index may be stale";case"failed":return"Workspace index failed";case"never_indexed":return"Workspace index not built yet";default:return"Checking workspace index…"}}function Zk(_){if(!_)return"Workspace index status";let $=[GK(_)];if(_.last_indexed_at)$.push(`Last indexed: ${_.last_indexed_at}`);if(typeof _.indexed_file_count==="number")$.push(`Indexed files: ${_.indexed_file_count}`);if(Array.isArray(_.roots)&&_.roots.length)$.push(`Roots: ${_.roots.join(", ")}`);if(_.last_error)$.push(`Error: ${_.last_error}`);return $.join(`
`)}function Xk(_){let $=_?.target;if($&&typeof $==="object")return $;return $?.parentElement||null}function Yk(_){return Boolean(_?.closest?.(".workspace-node-icon, .workspace-label-text"))}function Vk(_,$=null){let j=Xk(_),G=j?.closest?.(".workspace-row");if(!G)return null;let Z=G.dataset.type,X=G.dataset.path;if(!X||X===".")return null;if($===X)return null;let Y=_?.touches?.[0];if(!Y)return null;return{type:Z,path:X,dragPath:Yk(j)?X:null,startX:Y.clientX,startY:Y.clientY}}function ZK({onFileSelect:_,onFolderSelect:$,visible:j=!0,active:G=void 0,onOpenEditor:Z,onOpenTerminalTab:X,onOpenVncTab:Y,onToggleTerminal:V,terminalVisible:Q=!1}){let[q,B]=C(null),[K,N]=C(new Set(["."])),[L,U]=C(null),[E,H]=C(null),[D,M]=C(""),[z,O]=C(null),[,x]=C(null),[I,J]=C(!0),[k,W]=C(!1),[T,w]=C(null),[A,P]=C(()=>U$("workspaceShowHidden",!1)),[R,b]=C(!1),[c,r]=C(null),[e,m]=C(null),[_0,E0]=C(null),[Z0,j0]=C(!1),[V0,N0]=C(null),[h,$0]=C(null),[Q0,O0]=C(null),[a,X0]=C(!1),[W0,P0]=C(()=>A5()),[l0,u0]=C(()=>rQ()),[G_,h0]=C(()=>Fj({stored:W1(J8),...Nj()})),[s0,R0]=C(!1),o0=Math.max(15000,(Number(W0?.refreshIntervalSec)||60)*1000),v0=Math.max(0,Number(W0?.folderPreviewDepth)||0),t0=u(K),i0=u(""),F_=u(null),Z_=u(0),m0=u(new Set),z0=u(null),V_=u(null),d0=u(new Map),H_=u(_),D0=u($),g0=u(Z),x0=u(null),r0=u(null),z_=u(null),Q_=u(null),U_=u(null),N_=u(null),J_=u("."),I_=u(0),P_=u({path:null,dragging:!1,startX:0,startY:0}),E_=u({path:null,dragging:!1,startX:0,startY:0}),i_=u({path:null,timer:0}),R_=u(!1),q0=u(0),v=u(new Map),n=u(null),s=u(null),G0=u(null),F0=u(null),T0=u(null),A0=u(null),M0=u(A),w0=u(j),c0=u(G??j),S0=u(0),n0=u(_0),e0=u(R),I0=u(c),y0=u(null),D_=u({x:0,y:0}),__=u(0),d=u(null),L0=u(L),p0=u(E),j_=u(null),f_=u(z);H_.current=_,D0.current=$,g0.current=Z,g(()=>{t0.current=K},[K]),g(()=>{M0.current=A},[A]),g(()=>{w0.current=j},[j]),g(()=>{c0.current=G??j},[G,j]),g(()=>{n0.current=_0},[_0]);let F1=f(()=>{if(!I_.current)return;clearTimeout(I_.current),I_.current=0},[]);g(()=>()=>F1(),[F1]),g(()=>{if(typeof window>"u")return;let S=()=>{h0(Fj({stored:W1(J8),...Nj()}))};S();let p=()=>S(),o=()=>S(),t=(H0)=>{if(!H0||H0.key===null||H0.key===J8)S()};window.addEventListener("resize",p),window.addEventListener("focus",o),window.addEventListener("storage",t);let U0=window.matchMedia?.("(pointer: coarse)"),K0=window.matchMedia?.("(hover: none)"),J0=(H0,a0)=>{if(!H0)return;if(H0.addEventListener)H0.addEventListener("change",a0);else if(H0.addListener)H0.addListener(a0)},C0=(H0,a0)=>{if(!H0)return;if(H0.removeEventListener)H0.removeEventListener("change",a0);else if(H0.removeListener)H0.removeListener(a0)};return J0(U0,p),J0(K0,p),()=>{window.removeEventListener("resize",p),window.removeEventListener("focus",o),window.removeEventListener("storage",t),C0(U0,p),C0(K0,p)}},[]),g(()=>{if(typeof window>"u")return;let S=()=>{P0(A5())},p=(U0)=>{if(!U0||U0.key===null||U0.key===i2||U0.key===s2)S()},o=()=>S(),t=(U0)=>{let K0=U0?.detail?.settings;if(K0&&typeof K0==="object"){P0({refreshIntervalSec:Number(K0.refreshIntervalSec)||60,folderPreviewDepth:Math.max(0,Number(K0.folderPreviewDepth)||0)});return}S()};return window.addEventListener("focus",o),window.addEventListener("storage",p),window.addEventListener(o2,t),()=>{window.removeEventListener("focus",o),window.removeEventListener("storage",p),window.removeEventListener(o2,t)}},[]),g(()=>{let S=(p)=>{let o=p?.detail?.path;if(!o)return;let t=o.split("/"),U0=[];for(let K0=1;K0<t.length;K0++)U0.push(t.slice(0,K0).join("/"));if(U0.length)N((K0)=>{let J0=new Set(K0);J0.add(".");for(let C0 of U0)J0.add(C0);return J0});U(o),requestAnimationFrame(()=>{let K0=document.querySelector(`[data-path="${CSS.escape(o)}"]`);if(K0)K0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",S),()=>window.removeEventListener("workspace-reveal-path",S)},[]),g(()=>{e0.current=R},[R]),g(()=>{I0.current=c},[c]),g(()=>{L0.current=L},[L]),g(()=>{p0.current=E},[E]),g(()=>{f_.current=z},[z]),g(()=>{if(typeof window>"u"||typeof document>"u")return;let S=()=>u0(rQ());S();let p=window.matchMedia?.("(prefers-color-scheme: dark)"),o=()=>S();if(p?.addEventListener)p.addEventListener("change",o);else if(p?.addListener)p.addListener(o);let t=typeof MutationObserver<"u"?new MutationObserver(()=>S()):null;if(t?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)t?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(p?.removeEventListener)p.removeEventListener("change",o);else if(p?.removeListener)p.removeListener(o);t?.disconnect()}},[]),g(()=>{if(!E)return;let S=U_.current;if(!S)return;let p=requestAnimationFrame(()=>{mQ(S)});return()=>cancelAnimationFrame(p)},[E]),g(()=>{if(!s0)return;let S=(o)=>{let t=o?.target;if(!(t instanceof Element))return;if(T0.current?.contains(t))return;if(A0.current?.contains(t))return;R0(!1)},p=(o)=>{if(o?.key==="Escape")R0(!1),A0.current?.focus?.()};return document.addEventListener("mousedown",S),document.addEventListener("touchstart",S,{passive:!0}),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",S),document.removeEventListener("touchstart",S),document.removeEventListener("keydown",p)}},[s0]);let u_=async(S,p={})=>{let o=Boolean(p?.autoOpen),t=String(S||"").trim();W(!0),O(null),x(null);try{let U0=await c7(t,20000);if(o&&t&&lQ(t,U0,{resolvePane:(K0)=>Y_.resolve(K0)}))return g0.current?.(t,U0),U0;return O(U0),U0}catch(U0){let K0={error:U0.message||"Failed to load preview"};return O(K0),K0}finally{W(!1)}};x0.current=u_;let z1=f(async()=>{try{let S=await v7("all");return O0(S),S}catch(S){return console.warn("[workspace-explorer] Failed to load workspace index status:",S),null}},[]);V_.current=z1;let x_=f(()=>{V_.current?.()},[]),A_=async()=>{if(!w0.current)return;try{let S=await B6("",1,M0.current),p=pQ(S.root,t0.current,M0.current);if(p===i0.current){J(!1);return}if(i0.current=p,F_.current=S.root,!Z_.current)Z_.current=requestAnimationFrame(()=>{Z_.current=0,B((o)=>Wj(o,F_.current)),J(!1)})}catch(S){w(S.message||"Failed to load workspace"),J(!1)}},J1=async(S)=>{if(!S)return;if(m0.current.has(S))return;m0.current.add(S);try{let p=await B6(S,1,M0.current);B((o)=>Hj(o,S,p.root))}catch(p){w(p.message||"Failed to load workspace")}finally{m0.current.delete(S)}};r0.current=J1;let W_=f(()=>{let S=L;if(!S)return".";let p=d0.current?.get(S);if(p&&p.type==="dir")return p.path;if(S==="."||!S.includes("/"))return".";let o=S.split("/");return o.pop(),o.join("/")||"."},[L]),k_=f((S)=>{let p=S?.closest?.(".workspace-row");if(!p)return null;let o=p.dataset.path,t=p.dataset.type;if(!o)return null;if(t==="dir")return o;if(o.includes("/")){let U0=o.split("/");return U0.pop(),U0.join("/")||"."}return"."},[]),A1=f((S)=>{return k_(S?.target||null)},[k_]),l_=f((S)=>{n0.current=S,E0(S)},[]),s_=f(()=>{let S=i_.current;if(S?.timer)clearTimeout(S.timer);i_.current={path:null,timer:0}},[]),t_=f((S)=>{if(!S||S==="."){s_();return}let p=d0.current?.get(S);if(!p||p.type!=="dir"){s_();return}if(t0.current?.has(S)){s_();return}if(i_.current?.path===S)return;s_();let o=setTimeout(()=>{i_.current={path:null,timer:0},r0.current?.(S),N((t)=>{let U0=new Set(t);return U0.add(S),U0})},600);i_.current={path:S,timer:o}},[s_]),L_=f((S,p)=>{if(D_.current={x:S,y:p},__.current)return;__.current=requestAnimationFrame(()=>{__.current=0;let o=y0.current;if(!o)return;let t=D_.current;o.style.transform=`translate(${t.x+12}px, ${t.y+12}px)`})},[]),y1=f((S)=>{if(!S)return;let o=(d0.current?.get(S)?.name||S.split("/").pop()||S).trim();if(!o)return;m({path:S,label:o})},[]),U1=f(()=>{if(m(null),__.current)cancelAnimationFrame(__.current),__.current=0;if(y0.current)y0.current.style.transform="translate(-9999px, -9999px)"},[]),b1=f((S)=>{if(!S)return".";let p=d0.current?.get(S);if(p&&p.type==="dir")return p.path;if(S==="."||!S.includes("/"))return".";let o=S.split("/");return o.pop(),o.join("/")||"."},[]),k1=f(()=>{H(null),M("")},[]),_$=f((S)=>{if(!S)return;let o=(d0.current?.get(S)?.name||S.split("/").pop()||S).trim();if(!o||S===".")return;H(S),M(o)},[]),h4=f(async()=>{let S=p0.current;if(!S)return;let p=(D||"").trim();if(!p){k1();return}let o=d0.current?.get(S),t=(o?.name||S.split("/").pop()||S).trim();if(p===t){k1();return}try{let K0=(await p7(S,p))?.path||S,J0=S.includes("/")?S.split("/").slice(0,-1).join("/")||".":".";if(k1(),w(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:S,newPath:K0,type:o?.type||"file"}})),o?.type==="dir")N((C0)=>{let H0=new Set;for(let a0 of C0)if(a0===S)H0.add(K0);else if(a0.startsWith(`${S}/`))H0.add(`${K0}${a0.slice(S.length)}`);else H0.add(a0);return H0});if(U(K0),o?.type==="dir")O(null),W(!1),x(null);else x0.current?.(K0);r0.current?.(J0),x_()}catch(U0){w(U0?.message||"Failed to rename file")}},[k1,D,x_]),k$=f(async(S)=>{let t=S||".";for(let U0=0;U0<50;U0+=1){let J0=`untitled${U0===0?"":`-${U0}`}.md`;try{let H0=(await l7(t,J0,""))?.path||(t==="."?J0:`${t}/${J0}`);if(t&&t!==".")N((a0)=>new Set([...a0,t]));U(H0),w(null),r0.current?.(t),x0.current?.(H0),x_();return}catch(C0){if(C0?.status===409||C0?.code==="file_exists")continue;w(C0?.message||"Failed to create file");return}}w("Failed to create file (untitled name already in use).")},[]),e_=f((S)=>{if(S?.stopPropagation?.(),Z0)return;let p=b1(L0.current);k$(p)},[Z0,b1,k$]);g(()=>{if(typeof window>"u")return;let S=(p)=>{let o=p?.detail?.updates||[];if(!Array.isArray(o)||o.length===0)return;B((C0)=>{let H0=C0;for(let a0 of o){if(!a0?.root)continue;if(!H0||a0.path==="."||!a0.path)H0=a0.root;else H0=Hj(H0,a0.path,a0.root)}if(H0)i0.current=pQ(H0,t0.current,M0.current);return J(!1),H0});let t=L0.current;if(Boolean(t)&&o.some((C0)=>{let H0=C0?.path||"";if(!H0||H0===".")return!0;return t===H0||t.startsWith(`${H0}/`)||H0.startsWith(`${t}/`)}))v.current.clear();if(x_(),!t||!f_.current)return;let K0=d0.current?.get(t);if(K0&&K0.type==="dir")return;if(o.some((C0)=>{let H0=C0?.path||"";if(!H0||H0===".")return!0;return t===H0||t.startsWith(`${H0}/`)}))x0.current?.(t)};return window.addEventListener("workspace-update",S),()=>window.removeEventListener("workspace-update",S)},[]),z0.current=A_;let m_=u(()=>{if(typeof window>"u")return;let S=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),p=c0.current??w0.current,o=document.visibilityState!=="hidden"&&(p||S.matches&&w0.current);L6(o,M0.current).catch((t)=>{console.debug("[workspace-explorer] Workspace visibility ping failed.",t,{visible:o,showHidden:M0.current})})}).current,M1=u(0),D1=u(()=>{if(M1.current)clearTimeout(M1.current);M1.current=setTimeout(()=>{M1.current=0,m_()},250)}).current;g(()=>{if(w0.current)z0.current?.(),V_.current?.();D1()},[j,G]),g(()=>{z0.current(),V_.current?.();let S=setInterval(()=>{z0.current(),V_.current?.()},o0);return()=>clearInterval(S)},[o0]),g(()=>{m_();let S=O4("previewHeight",null),p=Number.isFinite(S)?Math.min(Math.max(S,80),600):280;if(q0.current=p,z_.current)z_.current.style.setProperty("--preview-height",`${p}px`);let o=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),t=()=>D1();if(o.addEventListener)o.addEventListener("change",t);else if(o.addListener)o.addListener(t);return document.addEventListener("visibilitychange",t),()=>{if(Z_.current)cancelAnimationFrame(Z_.current),Z_.current=0;if(o.removeEventListener)o.removeEventListener("change",t);else if(o.removeListener)o.removeListener(t);if(document.removeEventListener("visibilitychange",t),M1.current)clearTimeout(M1.current),M1.current=0;L6(!1,M0.current).catch((U0)=>{console.debug("[workspace-explorer] Workspace visibility teardown ping failed.",U0,{showHidden:M0.current})})}},[]);let $1=Y0(()=>iQ(q,K,A),[q,K,A]),M$=Y0(()=>new Map($1.map((S)=>[S.node.path,S.node])),[$1]),T$=Y0(()=>hQ(G_),[G_]);d0.current=M$;let T_=(L?d0.current.get(L):null)?.type==="dir";g(()=>{if(!L||!T_){$0(null),n.current=null,s.current=null;return}if(v0<=0){$0({loading:!1,error:null,payload:null,disabled:!0}),n.current=null,s.current=null;return}let S=L,p=`${A?"hidden":"visible"}:${v0}:${L}`,o=v.current,t=o.get(p);if(t?.root){o.delete(p),o.set(p,t);let J0=nQ(t.root,Boolean(t.truncated),l0);if(J0)n.current=J0,s.current=L,$0({loading:!1,error:null,payload:J0,disabled:!1});return}let U0=n.current,K0=s.current;$0({loading:!0,error:null,payload:K0===L?U0:null,disabled:!1}),B6(L,v0,A).then((J0)=>{if(L0.current!==S)return;let C0={root:J0?.root,truncated:Boolean(J0?.truncated)};o.delete(p),o.set(p,C0);while(o.size>jk){let a0=o.keys().next().value;if(!a0)break;o.delete(a0)}let H0=nQ(C0.root,C0.truncated,l0);n.current=H0,s.current=L,$0({loading:!1,error:null,payload:H0,disabled:!1})}).catch((J0)=>{if(L0.current!==S)return;$0({loading:!1,error:J0?.message||"Failed to load folder size chart",payload:K0===L?U0:null,disabled:!1})})},[L,T_,A,l0,v0]);let q1=Boolean(z&&z.kind==="text"&&!T_&&(!z.size||z.size<=262144)),w$=q1?"Open in editor":z?.size>262144?"File too large to edit":"File is not editable",l4=Boolean(L&&!T_&&$k(L)),j$=Boolean(L&&L!=="."),p4=Boolean(L&&!T_),r4=Boolean(L&&!T_),y$=L&&T_?f2(L,A):null,I$=GK(Q0),v1=Zk(Q0),m1=Q0?.state||"never_indexed",n4=m1!=="ready",Q1=f(()=>R0(!1),[]),S_=f(async(S)=>{Q1();try{await S?.()}catch(p){console.warn("[workspace-explorer] Header menu action failed:",p)}},[Q1]),d4=f(async(S)=>{S?.stopPropagation?.(),X0(!0),O0((p)=>({scope:"all",last_indexed_at:p?.last_indexed_at||null,last_error:null,indexed_file_count:p?.indexed_file_count||0,roots:p?.roots||[],updated_at:p?.updated_at||null,state:"indexing"}));try{let p=await m7("all");O0(p),w(null),i0.current="",z0.current?.()}catch(p){let o=p?.message||"Failed to reindex workspace";O0((t)=>({scope:"all",last_indexed_at:t?.last_indexed_at||null,last_error:o,indexed_file_count:t?.indexed_file_count||0,roots:t?.roots||[],updated_at:t?.updated_at||null,state:"failed"})),w(o)}finally{X0(!1)}},[]);g(()=>{let S=G0.current;if(F0.current)F0.current.dispose(),F0.current=null;if(!S)return;if(S.innerHTML="",!L||T_||!z||z.error)return;let p={path:L,content:typeof z.text==="string"?z.text:void 0,mtime:z.mtime,size:z.size,preview:z,mode:"view"},o=Y_.resolve(p)||Y_.get("workspace-preview-default");if(!o)return;let t=o.mount(S,p);return F0.current=t,()=>{if(F0.current===t)t.dispose(),F0.current=null;S.innerHTML=""}},[L,T_,z]);let I1=(S)=>{let p=S?.target;if(p instanceof Element)return p;return p?.parentElement||null},x$=(S)=>{return Boolean(S?.closest?.(".workspace-node-icon, .workspace-label-text"))},o4=(S)=>{if(!S)return!1;if(S.closest?.('input, textarea, [contenteditable="true"]'))return!0;return Boolean(S.isContentEditable)},b5=u((S)=>{let p=I1(S),o=p?.closest?.("[data-path]");if(!o)return;let t=o.dataset.path;if(!t||t===".")return;let U0=Boolean(p?.closest?.("button"))||Boolean(p?.closest?.("a"))||Boolean(p?.closest?.("input")),K0=Boolean(p?.closest?.(".workspace-caret"));if(U0||K0)return;if(p0.current===t)return;_$(t)}).current,v5=u((S)=>{if(R_.current){R_.current=!1;return}let p=I1(S),o=p?.closest?.("[data-path]");if(Q_.current?.focus?.(),!o)return;let t=o.dataset.path,U0=o.dataset.type,K0=Boolean(p?.closest?.(".workspace-caret")),J0=Boolean(p?.closest?.("button"))||Boolean(p?.closest?.("a"))||Boolean(p?.closest?.("input")),C0=L0.current===t,H0=p0.current;if(H0){if(H0===t)return;k1()}if(U0==="dir"){if(j_.current=null,U(t),O(null),x(null),W(!1),!t0.current.has(t))r0.current?.(t);if(C0&&!K0)return;N((p_)=>{let j1=new Set(p_);if(j1.has(t))j1.delete(t);else j1.add(t);return j1})}else{j_.current=null,U(t);let a0=d0.current.get(t);if(a0)H_.current?.(a0.path,a0);if(!J0&&!K0)x0.current?.(t)}}).current,Y4=u(()=>{i0.current="",z0.current(),V_.current?.(),Array.from(t0.current||[]).filter((p)=>p&&p!==".").forEach((p)=>r0.current?.(p))}).current,C$=u(()=>{j_.current=null,U(null),O(null),x(null),W(!1)}).current,i4=u(()=>{P((S)=>{let p=!S;if(typeof window<"u")q_("workspaceShowHidden",String(p));return M0.current=p,L6(!0,p).catch((t)=>{console.debug("[workspace-explorer] Workspace visibility refresh after toggling hidden files failed.",t,{showHidden:p})}),i0.current="",z0.current?.(),Array.from(t0.current||[]).filter((t)=>t&&t!==".").forEach((t)=>r0.current?.(t)),p})}).current,s4=u((S)=>{if(I1(S)?.closest?.("[data-path]"))return;C$()}).current,K1=f(async(S)=>{if(!S)return;let p=S.split("/").pop()||S;if(!window.confirm(`Delete "${p}"? This cannot be undone.`))return;try{await n7(S);let t=S.includes("/")?S.split("/").slice(0,-1).join("/")||".":".";if(L0.current===S)C$();r0.current?.(t),w(null),x_()}catch(t){O((U0)=>({...U0||{},error:t.message||"Failed to delete file"}))}},[C$]),P$=f((S)=>{let p=Q_.current;if(!p||!S||typeof CSS>"u"||typeof CSS.escape!=="function")return;p.querySelector(`[data-path="${CSS.escape(S)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),V4=f((S)=>{let p=I1(S);if(p0.current||o4(p))return;let o=$1;if(!o||o.length===0)return;let t=L?o.findIndex((U0)=>U0.node.path===L):-1;if(S.key==="ArrowDown"){S.preventDefault();let U0=Math.min(t+1,o.length-1),K0=o[U0];if(!K0)return;if(U(K0.node.path),K0.node.type!=="dir")H_.current?.(K0.node.path,K0.node),x0.current?.(K0.node.path);else O(null),W(!1),x(null);P$(K0.node.path);return}if(S.key==="ArrowUp"){S.preventDefault();let U0=t<=0?0:t-1,K0=o[U0];if(!K0)return;if(U(K0.node.path),K0.node.type!=="dir")H_.current?.(K0.node.path,K0.node),x0.current?.(K0.node.path);else O(null),W(!1),x(null);P$(K0.node.path);return}if(S.key==="ArrowRight"&&t>=0){let U0=o[t];if(U0?.node?.type==="dir"&&!K.has(U0.node.path))S.preventDefault(),r0.current?.(U0.node.path),N((K0)=>new Set([...K0,U0.node.path]));return}if(S.key==="ArrowLeft"&&t>=0){let U0=o[t];if(U0?.node?.type==="dir"&&K.has(U0.node.path))S.preventDefault(),N((K0)=>{let J0=new Set(K0);return J0.delete(U0.node.path),J0});return}if(S.key==="Enter"&&t>=0){S.preventDefault();let U0=o[t];if(!U0)return;let K0=U0.node.path;if(U0.node.type==="dir"){if(!t0.current.has(K0))r0.current?.(K0);N((C0)=>{let H0=new Set(C0);if(H0.has(K0))H0.delete(K0);else H0.add(K0);return H0}),O(null),x(null),W(!1)}else H_.current?.(K0,U0.node),x0.current?.(K0);return}if((S.key==="Delete"||S.key==="Backspace")&&t>=0){let U0=o[t];if(!U0||U0.node.type==="dir")return;S.preventDefault(),K1(U0.node.path);return}if(S.key==="Escape")S.preventDefault(),C$()},[C$,K1,K,$1,P$,L]),q4=f((S)=>{let p=Vk(S,p0.current);if(!p)return;P_.current={path:p.dragPath,dragging:!1,startX:p.startX,startY:p.startY}},[]),x1=f(()=>{let S=P_.current;if(S?.dragging&&S.path){let p=n0.current||W_(),o=d.current;if(typeof o==="function")o(S.path,p)}P_.current={path:null,dragging:!1,startX:0,startY:0},S0.current=0,b(!1),r(null),l_(null),s_(),U1()},[W_,U1,l_,s_]),H1=f((S)=>{let p=P_.current,o=S?.touches?.[0];if(!o||!p?.path)return;let t=Math.abs(o.clientX-p.startX),U0=Math.abs(o.clientY-p.startY),K0=t>8||U0>8;if(!p.dragging&&K0)p.dragging=!0,b(!0),r("move"),y1(p.path);if(p.dragging){S.preventDefault(),L_(o.clientX,o.clientY);let J0=document.elementFromPoint(o.clientX,o.clientY),C0=k_(J0)||W_();if(n0.current!==C0)l_(C0);t_(C0)}},[k_,W_,y1,L_,l_,t_]),m5=u((S)=>{S.preventDefault();let p=z_.current;if(!p)return;let o=S.clientY,t=q0.current||280,U0=S.currentTarget;U0.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let K0=o,J0=(H0)=>{K0=H0.clientY;let a0=p.clientHeight-80,p_=Math.min(Math.max(t-(H0.clientY-o),80),a0);p.style.setProperty("--preview-height",`${p_}px`),q0.current=p_},C0=()=>{let H0=p.clientHeight-80,a0=Math.min(Math.max(t-(K0-o),80),H0);q0.current=a0,U0.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",q_("previewHeight",String(Math.round(a0))),document.removeEventListener("mousemove",J0),document.removeEventListener("mouseup",C0)};document.addEventListener("mousemove",J0),document.addEventListener("mouseup",C0)}).current,Q4=u((S)=>{S.preventDefault();let p=z_.current;if(!p)return;let o=S.touches[0];if(!o)return;let t=o.clientY,U0=q0.current||280,K0=S.currentTarget;K0.classList.add("dragging"),document.body.style.userSelect="none";let J0=(H0)=>{let a0=H0.touches[0];if(!a0)return;H0.preventDefault();let p_=p.clientHeight-80,j1=Math.min(Math.max(U0-(a0.clientY-t),80),p_);p.style.setProperty("--preview-height",`${j1}px`),q0.current=j1},C0=()=>{K0.classList.remove("dragging"),document.body.style.userSelect="",q_("previewHeight",String(Math.round(q0.current||U0))),document.removeEventListener("touchmove",J0),document.removeEventListener("touchend",C0),document.removeEventListener("touchcancel",C0)};document.addEventListener("touchmove",J0,{passive:!1}),document.addEventListener("touchend",C0),document.addEventListener("touchcancel",C0)}).current,G$=f((S=L)=>{if(!S)return;dQ(R2(S))},[L]),r_=async()=>{if(!L||T_)return;await K1(L)},R$=(S)=>{return Array.from(S?.dataTransfer?.types||[]).includes("Files")},a4=f((S)=>{if(!R$(S))return;if(S.preventDefault(),S0.current+=1,!e0.current)b(!0);r("upload");let p=A1(S)||W_();l_(p),t_(p)},[W_,A1,l_,t_]),Z$=f((S)=>{if(!R$(S))return;if(S.preventDefault(),S.dataTransfer)S.dataTransfer.dropEffect="copy";if(!e0.current)b(!0);if(I0.current!=="upload")r("upload");let p=A1(S)||W_();if(n0.current!==p)l_(p);t_(p)},[W_,A1,l_,t_]),h6=f((S)=>{if(!R$(S))return;if(S.preventDefault(),S0.current=Math.max(0,S0.current-1),S0.current===0)b(!1),r(null),l_(null),s_()},[l_,s_]),b_=f(async(S,p=".")=>{let o=Array.from(S||[]);if(o.length===0)return;let t=p&&p!==""?p:".",U0=t!=="."?t:"workspace root";F1(),j0(!0),N0({current:0,total:o.length,name:"",percent:0,done:!1,error:null});try{let K0=null;for(let J0=0;J0<o.length;J0++){let C0=o[J0],H0=C0?.name||`file ${J0+1}`;N0((p_)=>({...p_,current:J0+1,name:H0,percent:0}));let a0=(p_)=>N0((j1)=>({...j1,percent:p_.percent}));try{K0=await P2(C0,t,{onProgress:a0})}catch(p_){let j1=p_?.status,Q$=p_?.code;if(j1===409||Q$==="file_exists"){if(!window.confirm(`"${H0}" already exists in ${U0}. Overwrite?`))continue;K0=await P2(C0,t,{overwrite:!0,onProgress:a0})}else throw p_}}if(K0?.path)j_.current=K0.path,U(K0.path),x0.current?.(K0.path);r0.current?.(t),x_(),N0((J0)=>({...J0,done:!0})),F1(),I_.current=window.setTimeout(()=>{I_.current=0,N0(null)},1500)}catch(K0){w(K0.message||"Failed to upload file"),N0((J0)=>J0?{...J0,error:K0.message||"Upload failed"}:null),F1(),I_.current=window.setTimeout(()=>{I_.current=0,N0(null)},4000)}finally{j0(!1)}},[F1]),e8=f(async(S,p)=>{if(!S)return;let o=d0.current?.get(S);if(!o)return;let t=p&&p!==""?p:".",U0=S.includes("/")?S.split("/").slice(0,-1).join("/")||".":".";if(t===U0)return;try{let J0=(await r7(S,t))?.path||S;if(o.type==="dir")N((C0)=>{let H0=new Set;for(let a0 of C0)if(a0===S)H0.add(J0);else if(a0.startsWith(`${S}/`))H0.add(`${J0}${a0.slice(S.length)}`);else H0.add(a0);return H0});if(U(J0),o.type==="dir")O(null),W(!1),x(null);else x0.current?.(J0);r0.current?.(U0),r0.current?.(t),x_()}catch(K0){w(K0?.message||"Failed to move entry")}},[]);d.current=e8;let _3=f(async(S)=>{if(!R$(S))return;S.preventDefault(),S0.current=0,b(!1),r(null),E0(null),s_();let p=Array.from(S?.dataTransfer?.files||[]);if(p.length===0)return;let o=n0.current||A1(S)||W_();await b_(p,o)},[W_,A1,b_]),C1=f((S)=>{if(S?.stopPropagation?.(),Z0)return;let p=S?.currentTarget?.dataset?.uploadTarget||".";J_.current=p,N_.current?.click()},[Z0]),K4=f((S)=>{S?.preventDefault?.(),S?.stopPropagation?.();let p=S?.currentTarget?.dataset?.folderHintTarget||L0.current||".";if(!p)return;D0.current?.(p,d0.current.get(p))},[]),f$=f(()=>{if(Z0)return;let S=L0.current,p=S?d0.current?.get(S):null;J_.current=p?.type==="dir"?p.path:".",N_.current?.click()},[Z0]),S$=f(()=>{S_(()=>e_(null))},[S_,e_]),g$=f(()=>{S_(()=>f$())},[S_,f$]),t4=f(()=>{S_(()=>Y4())},[S_,Y4]),X$=f(()=>{S_(()=>i4())},[S_,i4]),Y$=f(()=>{if(!L||!l4)return;S_(()=>g0.current?.(L,z))},[S_,L,l4,z]),B4=f(()=>{if(!L||!q1)return;S_(()=>g0.current?.(L,z))},[S_,L,q1,z]),L4=f(()=>{if(!L||L===".")return;S_(()=>_$(L))},[S_,L,_$]),V$=f(()=>{if(!L||T_)return;S_(()=>r_())},[S_,L,T_,r_]),l6=f(()=>{if(!L||T_)return;S_(()=>G$())},[S_,L,T_,G$]),q$=f(()=>{if(!y$)return;Q1(),dQ(y$)},[Q1,y$]),p6=f(()=>{Q1(),X?.()},[Q1,X]),c5=f(()=>{Q1(),Y?.()},[Q1,Y]),h5=f(()=>{Q1(),V?.()},[Q1,V]),l5=f((S)=>{if(!S||S.button!==0)return;let p=S.currentTarget;if(!p||!p.dataset)return;let o=p.dataset.path;if(!o||o===".")return;if(p0.current===o)return;let t=I1(S);if(t?.closest?.("button, a, input, .workspace-caret"))return;if(!x$(t))return;S.preventDefault(),E_.current={path:o,dragging:!1,startX:S.clientX,startY:S.clientY};let U0=(J0)=>{let C0=E_.current;if(!C0?.path)return;let H0=Math.abs(J0.clientX-C0.startX),a0=Math.abs(J0.clientY-C0.startY),p_=H0>4||a0>4;if(!C0.dragging&&p_)C0.dragging=!0,R_.current=!0,b(!0),r("move"),y1(C0.path),L_(J0.clientX,J0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(C0.dragging){J0.preventDefault(),L_(J0.clientX,J0.clientY);let j1=document.elementFromPoint(J0.clientX,J0.clientY),Q$=k_(j1)||W_();if(n0.current!==Q$)l_(Q$);t_(Q$)}},K0=()=>{document.removeEventListener("mousemove",U0),document.removeEventListener("mouseup",K0);let J0=E_.current;if(J0?.dragging&&J0.path){let C0=n0.current||W_(),H0=d.current;if(typeof H0==="function")H0(J0.path,C0)}E_.current={path:null,dragging:!1,startX:0,startY:0},S0.current=0,b(!1),r(null),l_(null),s_(),U1(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{R_.current=!1},0)};document.addEventListener("mousemove",U0),document.addEventListener("mouseup",K0)},[k_,W_,y1,L_,U1,l_,t_,s_]),$3=f(async(S)=>{let p=Array.from(S?.target?.files||[]);if(p.length===0)return;let o=J_.current||".";if(await b_(p,o),J_.current=".",S?.target)S.target.value=""},[b_]);return F`
        <aside
            class=${`workspace-sidebar${R?" workspace-drop-active":""}`}
            data-workspace-scale=${G_}
            ref=${z_}
            onDragEnter=${a4}
            onDragOver=${Z$}
            onDragLeave=${h6}
            onDrop=${_3}
        >
            <input type="file" multiple style="display:none" ref=${N_} onChange=${$3} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${A0}
                            class=${`workspace-menu-button${s0?" active":""}`}
                            onClick=${(S)=>{S.stopPropagation(),R0((p)=>!p)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${s0?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${s0&&F`
                            <div class="workspace-menu-dropdown" ref=${T0} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${S$} disabled=${Z0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${g$} disabled=${Z0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${t4}>Refresh tree</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${()=>S_(()=>d4())} disabled=${a}>
                                    ${a?"Reindexing workspace…":"Reindex workspace"}
                                </button>
                                <button class=${`workspace-menu-item${A?" active":""}`} role="menuitem" onClick=${X$}>
                                    ${A?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${(X||Y||V)&&F`<div class="workspace-menu-separator"></div>`}
                                ${X&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${p6}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Y&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${c5}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${V&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${h5}>
                                        ${Q?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}

                                ${L&&F`<div class="workspace-menu-separator"></div>`}
                                ${l4&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Y$}>Open in tab</button>
                                `}
                                ${L&&!T_&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${B4} disabled=${!q1}>Open in editor</button>
                                `}
                                ${j$&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${L4}>Rename selected</button>
                                `}
                                ${r4&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${l6}>Download selected file</button>
                                `}
                                ${y$&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${q$}>Download selected folder (zip)</button>
                                `}
                                ${p4&&F`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${V$}>Delete selected file</button>
                                `}
                                <div class="workspace-menu-separator"></div>
                                <button class="workspace-menu-item" role="menuitem" onClick=${()=>{R0(!1),window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:{section:"workspace"}}))}}>Settings</button>
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${e_} title="New file" disabled=${Z0}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${Y4} title="Refresh tree">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            ${n4&&F`
                <div class="workspace-index-status-row">
                    <div class=${`workspace-index-status-chip state-${m1}`} title=${v1}>
                        <span class="workspace-index-status-dot" aria-hidden="true"></span>
                        <span>${I$}</span>
                    </div>
                </div>
            `}
            <div class="workspace-tree" onClick=${s4}>
                ${V0&&F`
                    <div class="workspace-upload-strip">
                        <div class="workspace-upload-strip-text">
                            ${V0.error?F`<span class="workspace-upload-strip-error">${V0.error}</span>`:V0.done?F`<span>Done</span>`:F`<span>${V0.total>1?`Uploading ${V0.current}/${V0.total}: ${V0.name}`:`Uploading ${V0.name}`}${V0.percent>0?` (${V0.percent}%)`:"…"}</span>`}
                        </div>
                        ${!V0.done&&!V0.error&&F`
                            <div class="workspace-upload-strip-bar">
                                <div class="workspace-upload-strip-fill" style=${`width:${V0.percent||0}%`}></div>
                            </div>
                        `}
                    </div>
                `}
                ${I&&F`<div class="workspace-loading">Loading…</div>`}
                ${T&&F`<div class="workspace-error">${T}</div>`}
                ${q&&F`
                    <div
                        class="workspace-tree-list"
                        ref=${Q_}
                        tabIndex="0"
                        onClick=${v5}
                        onDblClick=${b5}
                        onKeyDown=${V4}
                        onTouchStart=${q4}
                        onTouchEnd=${x1}
                        onTouchMove=${H1}
                        onTouchCancel=${x1}
                    >
                        ${$1.map(({node:S,depth:p})=>{let o=S.type==="dir",t=S.path===L,U0=S.path===E,K0=o&&K.has(S.path),J0=_0&&S.path===_0,C0=Array.isArray(S.children)&&S.children.length>0?S.children.length:Number(S.child_count)||0;return F`
                                <div
                                    key=${S.path}
                                    class=${`workspace-row${t?" selected":""}${J0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+p*T$.indentPx}px`}}
                                    data-path=${S.path}
                                    data-type=${S.type}
                                    onMouseDown=${l5}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${o?s1(K0?"down":"right"):null}
                                    </span>
                                    <svg class=${`workspace-node-icon${o?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${o?F`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:F`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${U0?F`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${U_}
                                                value=${D}
                                                onInput=${(H0)=>M(H0?.target?.value||"")}
                                                onKeyDown=${(H0)=>{if(H0.stopPropagation(),H0.key==="Enter")H0.preventDefault(),h4();else if(H0.key==="Escape")H0.preventDefault(),k1()}}
                                                onBlur=${k1}
                                                onClick=${(H0)=>H0.stopPropagation()}
                                            />
                                        `:F`<span class="workspace-label"><span class="workspace-label-text">${S.name}</span></span>`}
                                    ${o&&!K0&&C0>0&&F`
                                        <span class="workspace-count">${C0}</span>
                                    `}
                                    ${o&&F`
                                        <button
                                            class="workspace-folder-upload"
                                            data-folder-hint-target=${S.path}
                                            title="Add folder hint to compose"
                                            aria-label=${`Add folder hint for ${S.path}`}
                                            onClick=${K4}
                                        >
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                                <path d="M12 11v6"/>
                                                <path d="M9 14h6"/>
                                            </svg>
                                        </button>
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${S.path}
                                            title="Upload files to this folder"
                                            onClick=${C1}
                                            disabled=${Z0}
                                        >
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                                <polyline points="7 8 12 3 17 8"/>
                                                <line x1="12" y1="3" x2="12" y2="15"/>
                                            </svg>
                                        </button>
                                    `}
                                </div>
                            `})}
                    </div>
                `}
            </div>
            ${L&&F`
                <div class="workspace-preview-splitter-h" onMouseDown=${m5} onTouchStart=${Q4}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${L}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${e_} title="New file" disabled=${Z0}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!T_&&F`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>q1&&g0.current?.(L,z)}
                                    title=${w$}
                                    disabled=${!q1}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${r_}
                                    title="Delete file"
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <polyline points="3 6 5 6 21 6" />
                                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                                        <line x1="10" y1="11" x2="10" y2="17" />
                                        <line x1="14" y1="11" x2="14" y2="17" />
                                    </svg>
                                </button>
                            `}
                            ${T_?F`
                                    <button
                                        class="workspace-download"
                                        data-folder-hint-target=${L}
                                        onClick=${K4}
                                        title="Add folder hint to compose"
                                        aria-label=${`Add folder hint for ${L}`}
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                            <path d="M12 11v6"/>
                                            <path d="M9 14h6"/>
                                        </svg>
                                    </button>
                                    <button class="workspace-download" onClick=${f$}
                                        title="Upload files to this folder" disabled=${Z0}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${f2(L,A)} download
                                        title="Download folder as zip" onClick=${(S)=>S.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:F`<a class="workspace-download" href=${R2(L)} download
                                        title="Download" onClick=${(S)=>S.stopPropagation()}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </a>`}
                        </div>
                    </div>
                    ${k&&F`<div class="workspace-loading">Loading preview…</div>`}
                    ${z?.error&&F`<div class="workspace-error">${z.error}</div>`}
                    ${T_&&F`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${h?.disabled&&F`<div class="workspace-preview-text">Folder size preview scanning is disabled in Workspace settings.</div>`}
                        ${h?.loading&&F`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${h?.error&&F`<div class="workspace-error">${h.error}</div>`}
                        ${h?.payload&&h.payload.segments?.length>0&&F`
                            <${Gk} payload=${h.payload} />
                        `}
                        ${h?.payload&&(!h.payload.segments||h.payload.segments.length===0)&&F`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${z&&!z.error&&!T_&&F`
                        <div class="workspace-preview-body" ref=${G0}></div>
                    `}
                </div>
            `}
            ${e&&F`
                <div class="workspace-drag-ghost" ref=${y0}>${e.label}</div>
            `}
        </aside>
    `}k0();var qk=new Set(["html-viewer","kanban-editor","mindmap-editor"]);function k8(_,$,j){let G=String(_||"").trim();if(!G)return null;if($)return $;if(typeof j!=="function")return null;return j({path:G,mode:"edit"})?.id||null}function XK(_,$,j){let G=k8(_,$,j);return G!=null&&qk.has(G)}function YK(_,$,j){return k8(_,$,j)==="html-viewer"?"Edit":"Edit Source"}function VK(_,$,j){return k8(_,$,j)==="editor"}var Qk=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,Kk=/\.(csv|tsv)$/i,Bk=/\.pdf$/i,Lk=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function Nk(_,{hasPopOutTab:$=!1}={}){let j=typeof _==="string"?_.trim():"";if(!j)return null;let G=Aq(j,{hasPopOutTab:$});if(G)return G;if(Qk.test(j)){let Z="/workspace/raw?path="+encodeURIComponent(j),X=j.split("/").pop()||"document";return"/office-viewer/?url="+encodeURIComponent(Z)+"&name="+encodeURIComponent(X)}if(Kk.test(j))return"/csv-viewer/?path="+encodeURIComponent(j);if(Bk.test(j))return"/workspace/raw?path="+encodeURIComponent(j);if(Lk.test(j))return"/image-viewer/?path="+encodeURIComponent(j);return null}function qK({tabs:_,activeId:$,onActivate:j,onClose:G,onCloseOthers:Z,onCloseAll:X,onTogglePin:Y,onTogglePreview:V,onToggleDiff:Q,onEditSource:q,previewTabs:B,diffTabs:K,paneOverrides:N,detachedTabs:L,onReattachTab:U,onToggleDock:E,dockVisible:H,onToggleZen:D,zenMode:M,onPopOutTab:z}){let[O,x]=C(null),I=u(null);g(()=>{if(!O)return;let m=(_0)=>{if(_0.type==="keydown"&&_0.key!=="Escape")return;x(null)};return document.addEventListener("click",m),document.addEventListener("keydown",m),()=>{document.removeEventListener("click",m),document.removeEventListener("keydown",m)}},[O]),g(()=>{let m=(_0)=>{if(_0.ctrlKey&&_0.key==="Tab"){if(_0.preventDefault(),!_.length)return;let E0=_.findIndex((Z0)=>Z0.id===$);if(_0.shiftKey){let Z0=_[(E0-1+_.length)%_.length];j?.(Z0.id)}else{let Z0=_[(E0+1)%_.length];j?.(Z0.id)}return}if((_0.ctrlKey||_0.metaKey)&&_0.key==="w"){let E0=document.querySelector(".editor-pane");if(E0&&E0.contains(document.activeElement)){if(_0.preventDefault(),$)G?.($)}}};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[_,$,j,G]);let J=f((m,_0)=>{if(m.button===0){j?.(_0);return}if(m.button===1)m.preventDefault(),G?.(_0)},[j,G]),k=f((m,_0)=>{if(m.defaultPrevented)return;if(m.button===0)j?.(_0)},[j]),W=f((m,_0)=>{m.preventDefault(),x({id:_0,x:m.clientX,y:m.clientY})},[]),T=f((m)=>{m.stopPropagation()},[]),w=f((m,_0)=>{m.preventDefault(),m.stopPropagation(),G?.(_0)},[G]);g(()=>{if(!$||!I.current)return;let m=I.current.querySelector(".tab-item.active");if(m)m.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let A=f((m)=>{if(!(N instanceof Map))return null;return N.get(m)||null},[N]),P=Y0(()=>_.find((m)=>m.id===O?.id)||null,[O?.id,_]),R=Y0(()=>{let m=O?.id;if(!m)return!1;return XK(m,A(m),(_0)=>Y_.resolve(_0))},[O?.id,A]),b=Y0(()=>{let m=O?.id;if(!m)return"Edit Source";return YK(m,A(m),(_0)=>Y_.resolve(_0))},[O?.id,A]),c=Y0(()=>{let m=O?.id;if(!m||!(L instanceof Map))return!1;return L.has(m)},[O?.id,L]),r=Y0(()=>{let m=O?.id;if(!m||!(K instanceof Set))return!1;return K.has(m)},[O?.id,K]),e=Y0(()=>{let m=O?.id;if(!m)return!1;let _0=_.find((Z0)=>Z0.id===m)||null;if(!_0)return!1;return VK(m,A(m),(Z0)=>Y_.resolve(Z0))&&Boolean(_0.dirty||r)},[O?.id,r,A,_]);if(!_.length)return null;return F`
        <div class="tab-strip" ref=${I} role="tablist">
            ${_.map((m)=>F`
                <div
                    key=${m.id}
                    class=${`tab-item${m.id===$?" active":""}${m.dirty?" dirty":""}${m.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${m.id===$}
                    title=${m.path}
                    onMouseDown=${(_0)=>J(_0,m.id)}
                    onClick=${(_0)=>k(_0,m.id)}
                    onContextMenu=${(_0)=>W(_0,m.id)}
                >
                    ${m.pinned&&F`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${m.label}</span>
                    ${L instanceof Map&&L.has(m.id)&&F`
                        <span class="tab-detached-badge" aria-label="Detached" title="Open in separate window">↗</span>
                    `}
                    <button
                        type="button"
                        class="tab-close"
                        onPointerDown=${T}
                        onMouseDown=${T}
                        onClick=${(_0)=>w(_0,m.id)}
                        title=${m.dirty?"Unsaved changes":"Close"}
                        aria-label=${m.dirty?"Unsaved changes":`Close ${m.label}`}
                    >
                        ${m.dirty?F`<span class="tab-dirty-dot" aria-hidden="true"></span>`:F`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${E&&F`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${H?" active":""}`}
                    onClick=${E}
                    title=${`${H?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${H?"Hide":"Show"} terminal`}
                    aria-pressed=${H?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
            ${D&&F`
                <button
                    class=${`tab-strip-zen-toggle${M?" active":""}`}
                    onClick=${D}
                    title=${`${M?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${M?"Exit":"Enter"} zen mode`}
                    aria-pressed=${M?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${M?F`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:F`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${O&&F`
            <div class="tab-context-menu" style=${{left:O.x+"px",top:O.y+"px"}}>
                <button onClick=${()=>{G?.(O.id),x(null)}}>Close</button>
                <button onClick=${()=>{Z?.(O.id),x(null)}}>Close Others</button>
                <button onClick=${()=>{X?.(),x(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{Y?.(O.id),x(null)}}>
                    ${P?.pinned?"Unpin":"Pin"}
                </button>
                ${R&&q&&F`
                    <button onClick=${()=>{q(O.id),x(null)}}>${b}</button>
                `}
                ${c&&U&&F`
                    <button onClick=${()=>{U(O.id),x(null)}}>Reattach</button>
                `}
                ${z&&!c&&F`
                    <button onClick=${()=>{let m=_.find((_0)=>_0.id===O.id);z(O.id,m?.label),x(null)}}>Open in Window</button>
                `}
                ${e&&Q&&F`
                    <hr />
                    <button onClick=${()=>{j?.(O.id),Q(O.id),x(null)}}>${r?"Hide Diff":"Compare to Saved"}</button>
                `}
                ${V&&/\.(md|mdx|markdown)$/i.test(O.id)&&F`
                    <hr />
                    <button onClick=${()=>{V(O.id),x(null)}}>
                        ${B?.has(O.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${(()=>{let m=Nk(O.id,{hasPopOutTab:typeof z==="function"});if(!m)return null;return F`
                        <hr />
                        <button onClick=${()=>{window.open(m,"_blank","noopener"),x(null)}}>Open in New Tab</button>
                    `})()}
            </div>
        `}
    `}k0();M_();l2();function g4(_,$=30){let j=Array.isArray(_)?_.map((G)=>Number(G)).filter((G)=>Number.isFinite(G)):[];return j.length>$?j.slice(j.length-$):j}function M8(_,$=30){return g4(_,$).map((j)=>Math.max(0,Math.min(100,j)))}function y5(_,$=56,j=16,G={}){let Z=g4(_);if(Z.length===0)return"";let X=Number.isFinite(G.min)?Number(G.min):Math.min(...Z),Y=Number.isFinite(G.max)?Number(G.max):Math.max(...Z);if(!(Y>X)){let V=(j/2).toFixed(2);return`M 0 ${V} L ${$} ${V}`}if(Z.length===1){let V=(Z[0]-X)/(Y-X),Q=(j-V*j).toFixed(2);return`M 0 ${Q} L ${$} ${Q}`}return Z.map((V,Q)=>{let q=Q/(Z.length-1||1)*$,B=(V-X)/(Y-X),K=j-B*j;return`${Q===0?"M":"L"} ${q.toFixed(2)} ${K.toFixed(2)}`}).join(" ")}function $4(_){return`${Math.round(Number(_)||0)}%`}function zj(_){let $=Number(_);if(!Number.isFinite($)||$<=0)return"0B";let j=["B","K","M","G","T"],G=0,Z=$;while(Z>=1024&&G<j.length-1)Z/=1024,G+=1;let X=Z>=100||G===0?0:Z>=10?0:1;return`${Z.toFixed(X)}${j[G]}`}function Fk(_){let $=[`CPU ${$4(_?.cpu_percent)}`,`RAM ${$4(_?.ram_percent)}`];if(Number(_?.buffer_cache_bytes)>0)$.push(`BUF ${zj(_?.buffer_cache_bytes)}`);if(KK(_))$.push(`VRAM ${$4(_?.vram_percent)}`);if(Number.isFinite(Number(_?.swap_percent))&&Number(_?.swap_total_bytes)>0)$.push(`SWP ${$4(_?.swap_percent)}`);return $.join(" • ")}function QK(_){return Number(_?.process_memory?.vm_rss_bytes)>0?Number(_.process_memory.vm_rss_bytes):Number(_?.process_memory?.rss_bytes)||0}function Uk(_){return QK(_)>0&&g4(_?.process_rss_series_bytes).length>0}function KK(_){return _?.vram_percent!==null&&_?.vram_percent!==void 0&&Number.isFinite(Number(_?.vram_percent))&&Number(_?.vram_total_bytes)>0&&Number(_?.vram_used_bytes)>=0&&g4(_?.vram_series).length>0}function Dk(){if(typeof window>"u"||typeof window.matchMedia!=="function")return!1;return window.matchMedia("(max-width: 900px)").matches}function BK({mode:_="overlay"}){let[$,j]=C(()=>z6(!1)),[G,Z]=C(()=>HY(!1)),[X,Y]=C(()=>Dk()),[V,Q]=C({cpu_percent:0,ram_percent:0,swap_percent:null,cpu_series:[],ram_series:[],swap_series:[],vram_percent:null,vram_series:[],vram_total_bytes:0,vram_used_bytes:0,gpu_provider:null,buffer_cache_bytes:null,buffer_cache_series_bytes:[],process_rss_series_bytes:[],process_memory:{rss_bytes:0,vm_rss_bytes:null},swap_total_bytes:0,swap_used_bytes:0,sample_interval_ms:2000,platform:""}),[q,B]=C(!1);g(()=>{let w=(P)=>{j(Boolean(P?.detail?.enabled))},A=(P)=>{Z(Boolean(P?.detail?.collapsed))};return window.addEventListener(C4,w),window.addEventListener(h2,A),()=>{window.removeEventListener(C4,w),window.removeEventListener(h2,A)}},[]),g(()=>{if(typeof window>"u"||typeof window.matchMedia!=="function")return;let w=window.matchMedia("(max-width: 900px)"),A=()=>Y(Boolean(w.matches));if(A(),typeof w.addEventListener==="function")return w.addEventListener("change",A),()=>w.removeEventListener("change",A);return w.addListener(A),()=>w.removeListener(A)},[]);let N=_==="overlay";g(()=>{if(!$||!N)return;let w=!1,A=0,P=async()=>{B((R)=>R||V.cpu_series.length>0?R:!0);try{let R=await D7();if(w)return;Q({cpu_percent:Number(R?.cpu_percent)||0,ram_percent:Number(R?.ram_percent)||0,swap_percent:Number.isFinite(Number(R?.swap_percent))?Number(R?.swap_percent):null,vram_percent:Number.isFinite(Number(R?.vram_percent))?Number(R?.vram_percent):null,cpu_series:M8(R?.cpu_series),ram_series:M8(R?.ram_series),swap_series:M8(R?.swap_series),vram_series:M8(R?.vram_series),vram_total_bytes:Number(R?.vram_total_bytes)||0,vram_used_bytes:Number(R?.vram_used_bytes)||0,gpu_provider:typeof R?.gpu_provider==="string"&&R.gpu_provider.trim()?R.gpu_provider.trim():null,buffer_cache_bytes:Number.isFinite(Number(R?.buffer_cache_bytes))?Number(R?.buffer_cache_bytes):null,buffer_cache_series_bytes:g4(R?.buffer_cache_series_bytes),process_rss_series_bytes:g4(R?.process_rss_series_bytes),process_memory:{rss_bytes:Number(R?.process_memory?.rss_bytes)||0,vm_rss_bytes:Number.isFinite(Number(R?.process_memory?.vm_rss_bytes))?Number(R?.process_memory?.vm_rss_bytes):null},swap_total_bytes:Number(R?.swap_total_bytes)||0,swap_used_bytes:Number(R?.swap_used_bytes)||0,sample_interval_ms:Number(R?.sample_interval_ms)||2000,platform:String(R?.platform||"")})}catch{if(w)return}finally{if(!w)B(!1)}};return P(),A=window.setInterval(()=>{if(document?.visibilityState==="hidden")return;P()},Math.max(1000,Number(V.sample_interval_ms)||2000)),()=>{if(w=!0,A)window.clearInterval(A)}},[$,N]);let L=Y0(()=>y5(V.cpu_series,56,16,{min:0,max:100}),[V.cpu_series]),U=Y0(()=>y5(V.ram_series,56,16,{min:0,max:100}),[V.ram_series]),E=Y0(()=>y5(V.swap_series,56,16,{min:0,max:100}),[V.swap_series]),H=Y0(()=>y5(V.vram_series,56,16,{min:0,max:100}),[V.vram_series]),D=Y0(()=>y5(V.buffer_cache_series_bytes),[V.buffer_cache_series_bytes]),M=Y0(()=>y5(V.process_rss_series_bytes),[V.process_rss_series_bytes]),z=Number(V.buffer_cache_bytes)>0&&g4(V.buffer_cache_series_bytes).length>0,O=Number.isFinite(Number(V.swap_percent))&&V.swap_total_bytes>0,x=KK(V),I=QK(V),J=Uk(V),k=Y0(()=>Fk(V),[V]);if(!$||!N)return null;let W=G?"Show system meters":q?"Updating system meters… Click to collapse.":"System meters — click to collapse.",T=(w)=>{w?.stopPropagation?.();let A=!G;Z(A),Q9(A)};return F`
        <div class=${`system-meters-hud system-meters-hud-${_}${G?" is-collapsed":""}`} aria-live="polite">
            <button
                class="system-meters-card"
                type="button"
                title=${W}
                aria-label=${W}
                aria-expanded=${G?"false":"true"}
                onClick=${T}
            >
                ${G?F`<span class="system-meters-collapse-tab" aria-hidden="true">${s1("left")}</span>`:X?F`<span class="system-meters-compact-summary">${k}</span>`:F`
                            <div class="system-meters-row cpu">
                                <span class="system-meters-label">CPU</span>
                                <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                    <path d=${L}></path>
                                </svg>
                                <span class="system-meters-value">${$4(V.cpu_percent)}</span>
                            </div>
                            <div class="system-meters-row ram">
                                <span class="system-meters-label">RAM</span>
                                <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                    <path d=${U}></path>
                                </svg>
                                <span class="system-meters-value">${$4(V.ram_percent)}</span>
                            </div>
                            ${J&&F`
                                <div class="system-meters-row rss">
                                    <span class="system-meters-label">RSS</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${M}></path>
                                    </svg>
                                    <span class="system-meters-value">${zj(I)}</span>
                                </div>
                            `}
                            ${x&&F`
                                <div class="system-meters-row vram" title=${V.gpu_provider?`GPU telemetry: ${V.gpu_provider}`:"GPU memory telemetry"}>
                                    <span class="system-meters-label">VRAM</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${H}></path>
                                    </svg>
                                    <span class="system-meters-value">${$4(V.vram_percent)}</span>
                                </div>
                            `}
                            ${z&&F`
                                <div class="system-meters-row buf">
                                    <span class="system-meters-label">BUF</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${D}></path>
                                    </svg>
                                    <span class="system-meters-value">${zj(V.buffer_cache_bytes)}</span>
                                </div>
                            `}
                            ${O&&F`
                                <div class="system-meters-row swap">
                                    <span class="system-meters-label">SWP</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${E}></path>
                                    </svg>
                                    <span class="system-meters-value">${$4(V.swap_percent)}</span>
                                </div>
                            `}
                        `}
            </button>
        </div>
    `}function Hk(_){let{workspaceOpen:$,editorOpen:j,chatOnlyMode:G,zenMode:Z}=_;return`app-shell${$?"":" workspace-collapsed"}${j?" editor-open":""}${G?" chat-only":""}${Z?" zen-mode":""}`}function Ek(_){let $=_?.user_message?.id??_?.row_id;if($===null||$===void 0||$==="")return null;let j=Number($);return Number.isFinite(j)?j:null}function Wk(_){let{id:$,scrollToBottom:j,getElementById:G=(q)=>document.getElementById(q),scheduleRaf:Z=(q)=>requestAnimationFrame(q),scheduleTimeout:X=(q,B)=>{setTimeout(q,B)},maxAttempts:Y=12}=_,V=(q)=>{q.scrollIntoView({behavior:"smooth",block:"center"}),q.classList.add("post-highlight"),X(()=>q.classList.remove("post-highlight"),2000)},Q=(q)=>{let B=G(`post-${$}`);if(B){V(B);return}if(q<=0){j?.();return}Z(()=>{X(()=>Q(q-1),40)})};Q(Y)}function Ok(_){let{response:$,viewStateRef:j,scrollToBottom:G,scrollPostedMessage:Z=(Q)=>Wk({id:Q,scrollToBottom:G})}=_,{searchQuery:X,searchOpen:Y}=j.current||{};if(X||Y)return;let V=Ek($);if(V){Z(V);return}G()}function LK(_){let{appShellRef:$,workspaceOpen:j,editorOpen:G,chatOnlyMode:Z,zenMode:X,isRenameBranchFormOpen:Y,closeRenameCurrentBranchForm:V,handleRenameCurrentBranch:Q,renameBranchNameDraft:q,renameBranchNameInputRef:B,setRenameBranchNameDraft:K,renameBranchDraftState:N,isRenamingBranch:L,addFileRef:U,addFolderRef:E,openEditor:H,openTerminalTab:D,openVncTab:M,hasDockPanes:z,toggleDock:O,dockVisible:x,handleSplitterMouseDown:I,handleSplitterTouchStart:J,showEditorPaneContainer:k,tabStripTabs:W,tabStripActiveId:T,handleTabActivate:w,handleTabClose:A,handleTabCloseOthers:P,handleTabCloseAll:R,handleTabTogglePin:b,handleTabTogglePreview:c,handleTabToggleDiff:r,handleTabEditSource:e,handleReattachPane:m,previewTabs:_0,diffTabs:E0,tabPaneOverrides:Z0,toggleZenMode:j0,handlePopOutPane:V0,isWebAppMode:N0,editorContainerRef:h,editorInstanceRef:$0,detachedTabs:Q0,activeDetachedTab:O0,detachedDockPane:a,handleDockSplitterMouseDown:X0,handleDockSplitterTouchStart:W0,TERMINAL_TAB_PATH:P0,dockContainerRef:l0,handleEditorSplitterMouseDown:u0,handleEditorSplitterTouchStart:G_,searchQuery:h0,isIOSDevice:s0,currentBranchRecord:R0,currentChatJid:o0,currentChatBranches:v0,handleBranchPickerChange:t0,formatBranchPickerLabel:i0,openRenameCurrentBranchForm:F_,handlePruneCurrentBranch:Z_,handlePurgeArchivedBranch:m0,currentHashtag:z0,handleBackToTimeline:V_,activeSearchScopeLabel:d0,oobePanelState:H_,composePrefillRequest:D0,requestComposePrefill:g0,handleOobeSetupProvider:x0,handleOobeShowModelPicker:r0,handleOobeOpenWorkspace:z_,handleDismissProviderMissingOobe:Q_,handleCompleteProviderReadyOobe:U_,posts:N_,isMainTimelineView:J_,hasMore:I_,loadMore:P_,timelineRef:E_,handleHashtagClick:i_,addMessageRef:R_,scrollToMessage:q0,openFileFromPill:v,openTimelineFileFromPill:n,handleDeletePost:s,handleOpenFloatingWidget:G0,agents:F0,userProfile:T0,removingPostIds:A0,agentStatus:M0,isCompactionStatus:w0,agentDraft:c0,agentPlan:S0,agentThought:n0,pendingRequest:e0,intentToast:I0,currentTurnId:y0,steerQueued:D_,handlePanelToggle:__,btwSession:d,closeBtwPanel:L0,handleBtwRetry:p0,handleBtwInject:j_,floatingWidget:f_,handleCloseFloatingWidget:F1,handleFloatingWidgetEvent:u_,attachmentPreview:z1,setAttachmentPreview:x_,extensionStatusPanels:A_,pendingExtensionPanelActions:J1,handleExtensionPanelAction:W_,searchOpen:k_,followupQueueItems:A1,handleInjectQueuedFollowup:l_,handleRemoveQueuedFollowup:s_,handleMoveQueuedFollowup:t_,viewStateRef:L_,loadPosts:y1,scrollToBottom:U1,searchScope:b1,handleSearch:k1,handleSearchScopeChange:_$,setSearchScope:h4,enterSearchMode:k$,exitSearchMode:e_,fileRefs:m_,removeFileRef:M1,clearFileRefs:D1,setFileRefsFromCompose:$1,folderRefs:M$,removeFolderRef:T$,clearFolderRefs:$$,setFolderRefsFromCompose:T_,messageRefs:q1,removeMessageRef:w$,clearMessageRefs:l4,setMessageRefsFromCompose:j$,handleCreateSessionFromCompose:p4,handleCreateRootSessionFromCompose:r4,handleRestoreBranch:y$,attachActiveEditorFile:I$,followupQueueCount:v1,handleBtwIntercept:m1,handleMessageResponse:n4,handleComposeSubmitError:Q1,isComposeBoxAgentActive:S_,activeChatAgents:d4,connectionStatus:I1,stateAccessFailed:x$,activeModel:o4,agentModelsPayload:b5,activeModelUsage:v5,activeThinkingLevel:Y4,supportsThinking:C$,contextUsage:i4,extensionWorkingState:s4,notificationsEnabled:K1,notificationPermission:P$,handleToggleNotifications:V4,setActiveModel:q4,applyModelState:x1,setPendingRequest:H1,pendingRequestRef:m5,toggleWorkspace:Q4}=_,G$=()=>{if(s0())return;U1()};return F`
    <div class=${Hk({workspaceOpen:j,editorOpen:G,chatOnlyMode:Z,zenMode:X})} ref=${$}>
      <${BK} mode="overlay" />
      ${Y&&F`
        <div class="rename-branch-overlay" onPointerDown=${(r_)=>{if(r_.target===r_.currentTarget)V()}}>
          <form
            class="rename-branch-panel"
            onSubmit=${(r_)=>{r_.preventDefault(),Q(q)}}
          >
            <div class="rename-branch-title">Rename session</div>
            <input
              ref=${B}
              value=${q}
              onInput=${(r_)=>{let R$=r_.currentTarget?.value??"";K(String(R$))}}
              onKeyDown=${(r_)=>{if(r_.key==="Escape")r_.preventDefault(),V()}}
              autocomplete="off"
              placeholder="Session handle (letters, numbers, - and _ only)"
            />
            <div class=${`rename-branch-help ${N.kind||"info"}`}>
              ${N.message}
            </div>
            <div class="rename-branch-actions">
              <button type="submit" class="compose-model-popup-btn primary" disabled=${L||!N.canSubmit}>
                ${L?"Renaming…":"Save"}
              </button>
              <button
                type="button"
                class="compose-model-popup-btn"
                onClick=${V}
                disabled=${L}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      `}
      ${!Z&&F`
        <${ZK}
          onFileSelect=${U}
          onFolderSelect=${E}
          visible=${j}
          active=${j||G}
          onOpenEditor=${H}
          onOpenTerminalTab=${D}
          onOpenVncTab=${M}
          onToggleTerminal=${z?O:void 0}
          terminalVisible=${Boolean(z&&x)}
        />
        <button
          class=${`workspace-toggle-tab${j?" open":" closed"}`}
          onClick=${Q4}
          title=${j?"Hide workspace":"Show workspace"}
          aria-label=${j?"Hide workspace":"Show workspace"}
        >
          <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 3 11 8 6 13" />
          </svg>
        </button>
        <div class="workspace-splitter" onMouseDown=${I} onTouchStart=${J}></div>
      `}
      ${k&&F`
        <div class="editor-pane-container">
          ${X&&F`<div class="zen-hover-zone"></div>`}
          ${G&&F`
            <${qK}
              tabs=${W}
              activeId=${T}
              onActivate=${w}
              onClose=${A}
              onCloseOthers=${P}
              onCloseAll=${R}
              onTogglePin=${b}
              onTogglePreview=${c}
              onToggleDiff=${r}
              onEditSource=${e}
              previewTabs=${_0}
              diffTabs=${E0}
              paneOverrides=${Z0}
              detachedTabs=${Q0}
              onReattachTab=${m}
              onToggleDock=${z?O:void 0}
              dockVisible=${z&&x}
              onToggleZen=${j0}
              zenMode=${X}
              onPopOutTab=${N0?void 0:V0}
            />
          `}
          ${G&&O0&&F`
            <div class="editor-pane-host editor-pane-detached-host">
              <div class="editor-empty-state">
                <div class="editor-empty-state-title">${O0.label||O0.panePath||"Detached pane"}</div>
                <div class="editor-empty-state-body">This pane is detached into another window.</div>
                <div class="editor-empty-state-actions">
                  <button class="editor-empty-state-button" onClick=${()=>m(O0.panePath)}>Reattach here</button>
                </div>
              </div>
            </div>
          `}
          ${G&&!O0&&F`<div class="editor-pane-host" ref=${h}></div>`}
          ${G&&!O0&&T&&_0.has(T)&&F`
            <${$8}
              getContent=${()=>$0.current?.getContent?.()}
              subscribeContentChange=${(r_)=>$0.current?.onContentChange?.(r_)}
              path=${T}
              onClose=${()=>c(T)}
            />
          `}
          ${z&&x&&F`<div class="dock-splitter" onMouseDown=${X0} onTouchStart=${W0}></div>`}
          ${z&&F`<div class=${`dock-panel${x?"":" hidden"}${G?"":" standalone"}`}>
            <div class="dock-panel-header">
              <span class="dock-panel-title">Terminal</span>
              <div class="dock-panel-actions">
                ${!N0&&!a&&F`
                  <button class="dock-panel-action" onClick=${()=>V0(P0,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2.25" y="2.25" width="8.5" height="8.5" rx="1.5"/>
                      <path d="M8.5 2.25h5.25v5.25"/>
                      <path d="M13.75 2.25 7.75 8.25"/>
                    </svg>
                  </button>
                `}
                ${a&&F`
                  <button class="dock-panel-action" onClick=${()=>m(P0)} title="Reattach terminal" aria-label="Reattach terminal">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2.25" y="2.25" width="11.5" height="11.5" rx="1.5"/>
                      <path d="M5.25 8h5.5"/>
                      <path d="M8 5.25v5.5"/>
                    </svg>
                  </button>
                `}
                <button class="dock-panel-close" onClick=${O} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                  <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    <line x1="4" y1="4" x2="12" y2="12"/>
                    <line x1="12" y1="4" x2="4" y2="12"/>
                  </svg>
                </button>
              </div>
            </div>
            ${a?F`
                <div class="dock-panel-body dock-panel-body-detached">
                  <div class="editor-empty-state">
                    <div class="editor-empty-state-title">Terminal detached</div>
                    <div class="editor-empty-state-body">The terminal is open in another window.</div>
                    <div class="editor-empty-state-actions">
                      <button class="editor-empty-state-button" onClick=${()=>m(P0)}>Reattach here</button>
                    </div>
                  </div>
                </div>
              `:F`<div class="dock-panel-body" ref=${l0}></div>`}
          </div>`}
        </div>
        <div class="editor-splitter" onMouseDown=${u0} onTouchStart=${G_}></div>
      `}
      <${hq}
        workspaceOpen=${j}
        toggleWorkspace=${Q4}
        chatOnlyMode=${Z}
        onOpenTerminalTab=${D}
        onOpenVncTab=${M}
        onToggleTerminal=${z?O:void 0}
        terminalVisible=${Boolean(z&&x)}
      />
      <${cq}
        activeChatAgents=${d4}
        currentChatJid=${o0}
        workspaceOpen=${j}
        chatOnlyMode=${Z}
        terminalVisible=${Boolean(z&&x)}
        onSwitchChat=${t0}
        onToggleWorkspace=${Q4}
        onOpenTerminalTab=${D}
        onOpenVncTab=${M}
        onToggleTerminalDock=${z?O:void 0}
        onPrefillCompose=${g0}
      />
      <div class="container">
        ${h0&&s0()&&F`<div class="search-results-spacer"></div>`}
        ${(z0||h0)&&F`
          <div class="hashtag-header">
            <button class="back-btn" onClick=${V_}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <span>${z0?`#${z0}`:`Search: ${h0} · ${d0}`}</span>
          </div>
        `}
        ${H_?.kind&&H_.kind!=="hidden"&&F`
          <${tV}
            kind=${H_.kind}
            onSetupProvider=${x0}
            onShowModelPicker=${r0}
            onOpenWorkspace=${z_}
            onDismiss=${H_.kind==="provider-missing"?Q_:U_}
          />
        `}
        <${vQ}
          posts=${N_}
          hasMore=${J_?I_:!1}
          onLoadMore=${J_?P_:void 0}
          timelineRef=${E_}
          onHashtagClick=${i_}
          onMessageRef=${R_}
          onScrollToMessage=${q0}
          onFileRef=${n||v}
          onPostClick=${void 0}
          onDeletePost=${s}
          onOpenWidget=${G0}
          onOpenAttachmentPreview=${x_}
          emptyMessage=${z0?`No posts with #${z0}`:h0?`No results for "${h0}"`:void 0}
          agents=${F0}
          user=${T0}
          reverse=${J_}
          removingPostIds=${A0}
          searchQuery=${h0}
        />
        <${$j}
          status=${w0(M0)?null:M0}
          draft=${c0}
          plan=${S0}
          thought=${n0}
          pendingRequest=${e0}
          intent=${I0}
          turnId=${y0}
          steerQueued=${D_}
          onPanelToggle=${__}
          showExtensionPanels=${!1}
        />
        <${Zq}
          session=${d}
          onClose=${L0}
          onRetry=${p0}
          onInject=${j_}
        />
        <${Wq}
          widget=${f_}
          onClose=${F1}
          onWidgetEvent=${u_}
        />
        ${z1&&F`
          <${bq}
            mediaId=${z1.mediaId}
            info=${z1.info}
            onClose=${()=>x_(null)}
          />
        `}
        <${yV} />
        <${$j}
          extensionPanels=${Array.from(A_.values())}
          pendingPanelActions=${J1}
          onExtensionPanelAction=${W_}
          turnId=${y0}
          steerQueued=${D_}
          onPanelToggle=${__}
          showCorePanels=${!1}
        />
        <${aV}
          onPost=${(r_)=>{Ok({response:r_,viewStateRef:L_,scrollToBottom:U1})}}
          onFocus=${G$}
          searchMode=${k_}
          searchScope=${b1}
          onSearch=${k1}
          onSearchScopeChange=${_$||h4}
          onEnterSearch=${k$}
          onExitSearch=${e_}
          fileRefs=${m_}
          onRemoveFileRef=${M1}
          onClearFileRefs=${D1}
          onSetFileRefs=${$1}
          folderRefs=${M$}
          onRemoveFolderRef=${T$}
          onClearFolderRefs=${$$}
          onSetFolderRefs=${T_}
          messageRefs=${q1}
          onRemoveMessageRef=${w$}
          onClearMessageRefs=${l4}
          onSetMessageRefs=${j$}
          onSwitchChat=${t0}
          onRenameSession=${Q}
          isRenameSessionInProgress=${L}
          onCreateSession=${p4}
          onCreateRootSession=${r4}
          onDeleteSession=${Z_}
          onPurgeArchivedSession=${m0}
          onRestoreSession=${y$}
          activeEditorPath=${Z?null:T}
          onAttachEditorFile=${Z?void 0:I$}
          onOpenFilePill=${v}
          followupQueueCount=${v1}
          followupQueueItems=${A1}
          onInjectQueuedFollowup=${l_}
          onRemoveQueuedFollowup=${s_}
          onMoveQueuedFollowup=${t_}
          onSubmitIntercept=${m1}
          onMessageResponse=${n4}
          onSubmitError=${Q1}
          isAgentActive=${S_}
          activeChatAgents=${d4}
          currentChatJid=${o0}
          connectionStatus=${I1}
          stateAccessFailed=${x$}
          activeModel=${o4}
          agentModelsPayload=${b5}
          modelUsage=${v5}
          thinkingLevel=${Y4}
          supportsThinking=${C$}
          contextUsage=${i4}
          notificationsEnabled=${K1}
          notificationPermission=${P$}
          onToggleNotifications=${V4}
          onModelChange=${q4}
          onModelStateChange=${x1}
          statusNotice=${w0(M0)?M0:null}
          extensionWorkingState=${s4}
          prefillRequest=${D0}
        />
        <${QQ}
          request=${e0}
          onRespond=${()=>{H1(null),m5.current=null}}
        />
      </div>
    </div>
  `}function NK(_){let{branchLoaderMode:$,panePopoutMode:j,branchLoaderState:G,panePopoutOptions:Z,mainShellOptions:X,renderers:Y}=_,V=CV({branchLoaderMode:$,panePopoutMode:j}),Q=Y?.renderBranchLoaderMode||PV,q=Y?.renderPanePopoutMode||RV,B=Y?.renderMainShell||LK;if(V==="branch-loader")return Q(G);if(V==="pane-popout")return q(Z);return B(X)}var w8="piclaw_btw_session",UK=900,FK="__piclawRenameBranchFormLock__";function zk(){try{return import.meta.url}catch{return null}}function Jj(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $==="1"||$==="true"||$==="yes"}function Jk(_){try{let $=_?new URL(_).searchParams.get("v"):null;return $&&$.trim()?$.trim():null}catch{return null}}function T8(_,$,j=""){let G=_?.get?.($);return G&&G.trim()?G.trim():j}function DK(_={}){let $=_.importMetaUrl===void 0?zk():_.importMetaUrl,j=_.document===void 0?typeof document<"u"?document:null:_.document,G=_.origin===void 0?typeof window<"u"?window.location.origin:"http://localhost":_.origin||"http://localhost",Z=Jk($);if(Z)return Z;try{let Y=Array.from(j?.querySelectorAll?.('script[type="module"][src]')||[]).find((q)=>String(q?.getAttribute?.("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute?.("src")||"";if(!Y)return null;let Q=new URL(Y,G).searchParams.get("v");return Q&&Q.trim()?Q.trim():null}catch{return null}}function HK(_={}){let $=_.window===void 0?typeof window<"u"?window:null:_.window;if(!$)return null;let j=$[FK];if(j&&typeof j==="object")return j;let G={inFlight:!1,cooldownUntil:0};return $[FK]=G,G}function EK(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function WK(_={}){let $=typeof _.readItem==="function"?_.readItem:W1,j=_.storageKey||w8,G=$(j);if(!G)return null;try{let Z=JSON.parse(G);if(!Z||typeof Z!=="object")return null;let X=typeof Z.question==="string"?Z.question:"",Y=typeof Z.answer==="string"?Z.answer:"",V=typeof Z.thinking==="string"?Z.thinking:"",Q=typeof Z.error==="string"&&Z.error.trim()?Z.error:null,q=Z.status==="running"?"error":Z.status==="success"||Z.status==="error"?Z.status:"success";return{question:X,answer:Y,thinking:V,error:q==="error"?Q||"BTW stream interrupted. You can retry.":Q,model:null,status:q}}catch{return null}}function OK(_,$={}){let j=$.defaultChatJid||"web:default",G=T8(_,"chat_jid",j),Z=Jj(_?.get?.("chat_only")||_?.get?.("chat-only")),X=Jj(_?.get?.("pane_popout")),Y=T8(_,"pane_path"),V=T8(_,"pane_label"),Q=Jj(_?.get?.("branch_loader")),q=T8(_,"branch_source_chat_jid",G);return{currentChatJid:G,chatOnlyMode:Z,panePopoutMode:X,panePopoutPath:Y,panePopoutLabel:V,branchLoaderMode:Q,branchLoaderSourceChatJid:q}}function zK(_,$){let j=Array.isArray(_)?_:[];return j.find((G)=>G?.id===$)||j[0]||null}function JK(_,$){if(!$||!_||typeof _.get!=="function")return null;return _.get($)||null}function Aj(_,$,j){return _||$?.label||j||"Pane"}function AK(_,$,j){return`${Aj(_,$,j)} · PiClaw`}function kK(_,$,j,G){let Z=Array.isArray(_)?_.length:0,X=Boolean(G&&$?.has?.(G)),Y=Boolean(G&&j?.has?.(G));return Z>1||X||Y}function MK(_,$){let j=typeof _==="string"?_:"";return j===$||j.startsWith(`${$}/`)}function TK(_,$,j,G){return _===$&&!j||G}function wK(_,$,j,G,Z){return _||!$&&(j||G&&Z)}M_();function Ak(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function Y1(_,$,j){let G=_?.[$];return typeof G==="function"?G:Ak($,j)}var yK=!1,IK=!1,xK=!1;function kk(_){if(!_||typeof _.setOptions!=="function")return;_.setOptions({breaks:!0,gfm:!0})}function Mk(_=typeof window<"u"?window:null){if(!_||IK)return;let $=(j)=>{let G=String(j?.message||j?.error?.message||"").trim();if(!/ResizeObserver loop (completed with undelivered notifications|limit exceeded)/i.test(G)){if(!(G==="Script error."&&(j?.lineno===0||!j?.filename)))return}j.preventDefault?.(),j.stopImmediatePropagation?.()};_.addEventListener("error",$,!0),IK=!0}function Tk(){Y_.register(A3),Y_.register(i7),Y_.register(o7),Y_.register(s7),Y_.register(a7),Y_.register(t7),Y_.register(_9),Y_.register($9),Y_.register(j9),Y_.register(Z9),Y_.register(G7),k3(),Y_.register(C3),Y_.register(P3)}function wk(_=typeof window<"u"?window:null){if(!_||xK)return;if(!_.isSecureContext)return;if(!("serviceWorker"in _.navigator))return;xK=!0,_.navigator.serviceWorker.register("/sw.js").catch(($)=>{console.warn("Failed to register app service worker:",$)})}async function CK(){if(yK)return;let _=typeof window<"u"?window:null,$=_?_?.marked:null;if(kk($),Mk(_),a9(_),_)try{let j=await Promise.resolve().then(() => (k0(),SG));_.__piclawPreactHtm=j,_.__piclawPreact=j}catch(j){}Tk(),await wq(_),wk(_),yK=!0}function yk(_=F6){return{searchPosts:_.searchPosts,deletePost:_.deletePost,getAgents:_.getAgents,getAgentThought:_.getAgentThought,setAgentThoughtVisibility:_.setAgentThoughtVisibility,getAgentStatus:_.getAgentStatus,getWorkspaceFile:_.getWorkspaceFile,getThread:_.getThread,getTimeline:_.getTimeline,sendAgentMessage:_.sendAgentMessage,forkChatBranch:_.forkChatBranch,getAgentContext:Y1(_,"getAgentContext",null),getAutoresearchStatus:Y1(_,"getAutoresearchStatus",null),stopAutoresearch:Y1(_,"stopAutoresearch",{status:"ok"}),dismissAutoresearch:Y1(_,"dismissAutoresearch",{status:"ok"}),getAgentModels:Y1(_,"getAgentModels",{current:null,models:[]}),completeInstanceOobe:Y1(_,"completeInstanceOobe",{status:"ok"}),getActiveChatAgents:Y1(_,"getActiveChatAgents",{chats:[]}),getChatBranches:Y1(_,"getChatBranches",{chats:[]}),renameChatBranch:Y1(_,"renameChatBranch",null),pruneChatBranch:Y1(_,"pruneChatBranch",null),restoreChatBranch:Y1(_,"restoreChatBranch",null),getAgentQueueState:Y1(_,"getAgentQueueState",{count:0}),steerAgentQueueItem:Y1(_,"steerAgentQueueItem",{removed:!1,queued:"steer"}),removeAgentQueueItem:Y1(_,"removeAgentQueueItem",{removed:!1}),streamSidePrompt:Y1(_,"streamSidePrompt",null)}}var PK=yk(F6);function RK(_){let{routing:$,paneRuntime:j,splitters:G,branchPaneActions:Z,timelineViewActions:X,composeReferenceActions:Y,sidepanelActions:V,shellState:Q,agentState:q,composeState:B,modelState:K}=_,N={appShellRef:Q.appShellRef,editorOpen:Q.editorOpen,hidePanePopoutControls:j.hidePanePopoutControls,panePopoutHasMenuActions:j.panePopoutHasMenuActions,panePopoutTitle:j.panePopoutTitle,tabStripTabs:Q.tabStripTabs,tabStripActiveId:Q.tabStripActiveId,handleTabActivate:Q.handleTabActivate,previewTabs:Q.previewTabs,diffTabs:Q.diffTabs,handleTabTogglePreview:Q.handleTabTogglePreview,handleTabToggleDiff:Q.handleTabToggleDiff,editorContainerRef:j.editorContainerRef,getPaneContent:()=>j.editorInstanceRef?.current?.getContent?.(),subscribePaneContentChange:(U)=>j.editorInstanceRef?.current?.onContentChange?.(U),panePopoutPath:Q.panePopoutPath,canReattachPane:j.canReattachPanePopout,handleReattachPane:j.requestPanePopoutReattach},L={appShellRef:Q.appShellRef,workspaceOpen:Q.workspaceOpen,editorOpen:Q.editorOpen,chatOnlyMode:Q.chatOnlyMode,zenMode:j.zenMode,isRenameBranchFormOpen:Q.isRenameBranchFormOpen,closeRenameCurrentBranchForm:Z.closeRenameCurrentBranchForm,handleRenameCurrentBranch:Z.handleRenameCurrentBranch,renameBranchNameDraft:Q.renameBranchNameDraft,renameBranchNameInputRef:Q.renameBranchNameInputRef,setRenameBranchNameDraft:Q.setRenameBranchNameDraft,renameBranchDraftState:Q.renameBranchDraftState,isRenamingBranch:Q.isRenamingBranch,hasDockPanes:j.hasDockPanes,toggleDock:j.toggleDock,dockVisible:j.dockVisible,showEditorPaneContainer:j.showEditorPaneContainer,toggleZenMode:j.toggleZenMode,isWebAppMode:Q.isWebAppMode,editorContainerRef:j.editorContainerRef,editorInstanceRef:j.editorInstanceRef,dockContainerRef:j.dockContainerRef,detachedTabs:j.detachedTabs,activeDetachedTab:j.activeDetachedTab,detachedDockPane:j.detachedDockPane,TERMINAL_TAB_PATH:Q.TERMINAL_TAB_PATH,isIOSDevice:Q.isIOSDevice,currentBranchRecord:Q.currentBranchRecord,currentChatJid:Q.currentChatJid,currentChatBranches:Q.currentChatBranches,formatBranchPickerLabel:Q.formatBranchPickerLabel,activeSearchScopeLabel:Q.activeSearchScopeLabel,currentHashtag:Q.currentHashtag,searchQuery:Q.searchQuery,oobePanelState:Q.oobePanelState,composePrefillRequest:Q.composePrefillRequest,requestComposePrefill:Q.requestComposePrefill,handleOobeSetupProvider:Q.handleOobeSetupProvider,handleOobeShowModelPicker:Q.handleOobeShowModelPicker,handleOobeOpenWorkspace:Q.handleOobeOpenWorkspace,handleDismissProviderMissingOobe:Q.handleDismissProviderMissingOobe,handleCompleteProviderReadyOobe:Q.handleCompleteProviderReadyOobe,posts:Q.posts,hasMore:Q.hasMore,loadMore:Q.loadMore,timelineRef:Q.timelineRef,agents:Q.agents,userProfile:Q.userProfile,removingPostIds:Q.removingPostIds,extensionStatusPanels:Q.extensionStatusPanels,pendingExtensionPanelActions:Q.pendingExtensionPanelActions,searchOpen:Q.searchOpen,followupQueueItems:Q.followupQueueItems,viewStateRef:Q.viewStateRef,loadPosts:Q.loadPosts,scrollToBottom:Q.scrollToBottom,searchScope:Q.searchScope,tabStripTabs:Q.tabStripTabs,tabStripActiveId:Q.tabStripActiveId,handleTabActivate:Q.handleTabActivate,previewTabs:Q.previewTabs,diffTabs:Q.diffTabs,handleTabTogglePreview:Q.handleTabTogglePreview,handleTabToggleDiff:Q.handleTabToggleDiff,panePopoutPath:Q.panePopoutPath,tabPaneOverrides:Q.tabPaneOverrides,handleTabClose:Q.handleTabClose,handleTabCloseOthers:Q.handleTabCloseOthers,handleTabCloseAll:Q.handleTabCloseAll,handleTabTogglePin:Q.handleTabTogglePin,handleTabEditSource:Q.handleTabEditSource,handleReattachPane:j.reattachPane,openEditor:Q.openEditor,openTerminalTab:Q.openTerminalTab,openVncTab:Q.openVncTab,fileRefs:B.fileRefs,folderRefs:B.folderRefs,messageRefs:B.messageRefs,followupQueueCount:B.followupQueueCount,attachmentPreview:B.attachmentPreview,setAttachmentPreview:B.setAttachmentPreview,extensionWorkingState:B.extensionWorkingState,activeChatAgents:K.activeChatAgents,connectionStatus:K.connectionStatus,stateAccessFailed:K.stateAccessFailed,activeModel:K.activeModel,activeModelUsage:K.activeModelUsage,activeThinkingLevel:K.activeThinkingLevel,supportsThinking:K.supportsThinking,contextUsage:K.contextUsage,notificationsEnabled:K.notificationsEnabled,notificationPermission:K.notificationPermission,handleToggleNotifications:K.handleToggleNotifications,setActiveModel:K.setActiveModel,applyModelState:K.applyModelState,setPendingRequest:q.setPendingRequest,pendingRequestRef:q.pendingRequestRef,...G,...Z,...X,...Y,...V,...q,...B,...K};return{branchLoaderMode:$.branchLoaderMode,panePopoutMode:$.panePopoutMode,branchLoaderState:$.branchLoaderState,panePopoutOptions:N,mainShellOptions:L}}function Ik(_){let{steerQueuedTurnId:$,currentTurnId:j,agentStatus:G}=_;return Boolean($&&$===(G?.turn_id||j))}function fK(_){let $=Ik({steerQueuedTurnId:_.agentState.steerQueuedTurnId,currentTurnId:_.agentState.currentTurnId,agentStatus:_.agentState.agentStatus});return RK({routing:{branchLoaderMode:_.routeState.branchLoaderMode,panePopoutMode:_.routeState.panePopoutMode,branchLoaderState:_.surface.branchLoaderState},paneRuntime:_.paneRuntime,splitters:_.splitters,branchPaneActions:_.orchestration.branchPaneActions,timelineViewActions:_.orchestration.timelineViewActions,composeReferenceActions:_.interaction.composeReferenceActions,sidepanelActions:_.orchestration.sidepanelActions,shellState:{appShellRef:_.surface.appShellRef,workspaceOpen:_.surface.workspaceOpen,editorOpen:_.editorState.editorOpen,chatOnlyMode:_.routeState.chatOnlyMode,isRenameBranchFormOpen:_.surface.isRenameBranchFormOpen,renameBranchNameDraft:_.surface.renameBranchNameDraft,renameBranchNameInputRef:_.surface.renameBranchNameInputRef,setRenameBranchNameDraft:_.surface.setRenameBranchNameDraft,renameBranchDraftState:_.surface.renameBranchDraftState,isRenamingBranch:_.surface.isRenamingBranch,isWebAppMode:_.surface.isWebAppMode,TERMINAL_TAB_PATH:_.helpers.terminalTabPath,isIOSDevice:_.helpers.isIOSDevice,currentBranchRecord:_.surface.currentBranchRecord,currentChatJid:_.routeState.currentChatJid,currentChatBranches:_.surface.currentChatBranches,formatBranchPickerLabel:_.helpers.formatBranchPickerLabel,activeSearchScopeLabel:_.surface.activeSearchScopeLabel,currentHashtag:_.surface.currentHashtag,searchQuery:_.surface.searchQuery,oobePanelState:_.surface.oobePanelState,composePrefillRequest:_.surface.composePrefillRequest,requestComposePrefill:_.surface.requestComposePrefill,handleOobeSetupProvider:_.surface.handleOobeSetupProvider,handleOobeShowModelPicker:_.surface.handleOobeShowModelPicker,handleOobeOpenWorkspace:_.surface.handleOobeOpenWorkspace,handleDismissProviderMissingOobe:_.surface.handleDismissProviderMissingOobe,handleCompleteProviderReadyOobe:_.surface.handleCompleteProviderReadyOobe,posts:_.timeline.posts,hasMore:_.timeline.hasMore,loadMore:_.timeline.loadMore,timelineRef:_.surface.timelineRef,agents:_.surface.agents,userProfile:_.surface.userProfile,removingPostIds:_.surface.removingPostIds,extensionStatusPanels:_.surface.extensionStatusPanels,pendingExtensionPanelActions:_.surface.pendingExtensionPanelActions,searchOpen:_.surface.searchOpen,followupQueueItems:_.surface.followupQueueItems,viewStateRef:_.surface.viewStateRef,loadPosts:_.timeline.loadPosts,scrollToBottom:_.timeline.scrollToBottom,searchScope:_.surface.searchScope,tabStripTabs:_.editorState.tabStripTabs,tabStripActiveId:_.editorState.tabStripActiveId,handleTabActivate:_.editorState.handleTabActivate,previewTabs:_.editorState.previewTabs,diffTabs:_.editorState.diffTabs,handleTabTogglePreview:_.editorState.handleTabTogglePreview,handleTabToggleDiff:_.editorState.handleTabToggleDiff,panePopoutPath:_.routeState.panePopoutPath,tabPaneOverrides:_.editorState.tabPaneOverrides,handleTabClose:_.editorState.handleTabClose,handleTabCloseOthers:_.editorState.handleTabCloseOthers,handleTabCloseAll:_.editorState.handleTabCloseAll,handleTabTogglePin:_.editorState.handleTabTogglePin,handleTabEditSource:_.editorState.handleTabEditSource,openEditor:_.editorState.openEditor,openTerminalTab:_.paneRuntime.openTerminalTab,openVncTab:_.paneRuntime.openVncTab},agentState:{agentStatus:_.agentState.agentStatus,isCompactionStatus:_.agentState.isCompactionStatus,agentDraft:_.agentState.agentDraft,agentPlan:_.agentState.agentPlan,agentThought:_.agentState.agentThought,pendingRequest:_.agentState.pendingRequest,intentToast:_.surface.intentToast,currentTurnId:_.agentState.currentTurnId,steerQueued:$,handlePanelToggle:_.interaction.handlePanelToggle,setPendingRequest:_.agentState.setPendingRequest,pendingRequestRef:_.agentState.pendingRequestRef,handleInjectQueuedFollowup:_.orchestration.followupActions.handleInjectQueuedFollowup,handleRemoveQueuedFollowup:_.orchestration.followupActions.handleRemoveQueuedFollowup,handleMoveQueuedFollowup:_.orchestration.followupActions.handleMoveQueuedFollowup},composeState:{btwSession:_.surface.btwSession,floatingWidget:_.surface.floatingWidget,fileRefs:_.surface.fileRefs,folderRefs:_.surface.folderRefs,messageRefs:_.surface.messageRefs,followupQueueCount:_.surface.followupQueueCount,attachmentPreview:_.surface.attachmentPreview,setAttachmentPreview:_.surface.setAttachmentPreview,handleMessageResponse:_.orchestration.followupActions.handleMessageResponse,isComposeBoxAgentActive:_.orchestration.isComposeBoxAgentActive,extensionWorkingState:_.surface.extensionWorkingState},modelState:{activeChatAgents:_.surface.activeChatAgents,connectionStatus:_.surface.connectionStatus,stateAccessFailed:_.surface.stateAccessFailed,activeModel:_.surface.activeModel,agentModelsPayload:_.surface.agentModelsPayload,activeModelUsage:_.surface.activeModelUsage,activeThinkingLevel:_.surface.activeThinkingLevel,supportsThinking:_.surface.supportsThinking,contextUsage:_.surface.contextUsage,notificationsEnabled:_.surface.notificationsEnabled,notificationPermission:_.surface.notificationPermission,handleToggleNotifications:_.surface.handleToggleNotifications,setActiveModel:_.surface.setActiveModel,applyModelState:_.orchestration.chatRefreshLifecycle.applyModelState}})}k0();var gK="(min-width: 1024px) and (orientation: landscape)";function kj(_=typeof window<"u"?window:null){return _&&typeof _==="object"?_:null}function SK(_,$){let j=kj(_);if(!j?.localStorage?.getItem)return null;try{let G=j.localStorage.getItem($);if(G===null)return null;return G==="true"}catch{return null}}function xk(_,$,j){let G=kj(_);if(!G?.localStorage?.setItem)return;try{G.localStorage.setItem($,String(Boolean(j)))}catch{return}}function P6(_=typeof window<"u"?window:null){let $=kj(_);if(!$?.matchMedia)return"desktop";return $.matchMedia("(min-width: 1024px) and (orientation: landscape)").matches?"desktop":"narrow"}function uK(_){return _==="narrow"?"workspaceOpen.narrow":"workspaceOpen.desktop"}function bK(_={}){let{runtime:$=typeof window<"u"?window:null,bucket:j=null,allowLegacyFallback:G=!1,defaultValue:Z=!1}=_,X=j||P6($),Y=uK(X),V=SK($,Y);if(typeof V==="boolean")return V;if(G&&X==="desktop"){let Q=SK($,"workspaceOpen");if(typeof Q==="boolean")return Q}return Z}function vK(_,$={}){let{runtime:j=typeof window<"u"?window:null,bucket:G=null}=$,Z=G||P6(j);xk(j,uK(Z),Boolean(_))}$6();var Ck=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function mK(_,$={}){let j=$.window??(typeof window<"u"?window:null),G=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Z=()=>{_(f1({window:j,navigator:G}))};Z();let Y=Ck.map((V)=>{try{return j.matchMedia?.(V)??null}catch{return null}}).filter(Boolean).map((V)=>{if(typeof V.addEventListener==="function")return V.addEventListener("change",Z),()=>V.removeEventListener("change",Z);if(typeof V.addListener==="function")return V.addListener(Z),()=>V.removeListener(Z);return()=>{}});return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),()=>{for(let V of Y)V();j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z)}}function y8(_,$={}){let j=$.window??(typeof window<"u"?window:null),G=$.document??(typeof document<"u"?document:null);if(!j||!G||typeof _!=="function")return()=>{};let Z=()=>{if(G.visibilityState&&G.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),G.addEventListener?.("visibilitychange",Z),()=>{j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z),G.removeEventListener?.("visibilitychange",Z)}}function cK(_={}){return f1(_)&&B2(_)}function Pk(_){let $=_?.activeElement;if(!$)return!1;let j=String($.tagName||$.nodeName||"").toLowerCase();if(j==="textarea"||j==="select")return!0;if(j==="input"){let G=String($.type||"text").toLowerCase();return!["button","checkbox","color","file","hidden","image","radio","range","reset","submit"].includes(G)}if($.isContentEditable===!0)return!0;if(typeof $.closest==="function")try{return Boolean($.closest('[contenteditable="true"], [contenteditable="plaintext-only"]'))}catch(G){console.debug("[mobile-viewport] Ignoring activeElement.closest failure during keyboard detection.",G)}return!1}function Rk(_={},$={}){let j=_.window??(typeof window<"u"?window:null),G=Number(j?.visualViewport?.height||0),Z=Number(j?.innerHeight||0),X=Number.isFinite(G)&&G>0,Y=Number.isFinite(Z)&&Z>0;if(X){if($.keyboardActive===!0){let V=Number(j?.visualViewport?.offsetTop||0),Q=G+Math.max(0,Number.isFinite(V)?V:0);return Math.round(Q)}if($.ignoreStandaloneChromeGap===!0&&Y&&Z>G)return Math.round(Z);return Math.round(G)}if(Y)return Math.round(Z);return null}function fk(_={},$={}){if(!cK(_))return null;let j=_.window??(typeof window<"u"?window:null),G=_.document??(typeof document<"u"?document:null);if(!j||!G?.documentElement)return null;let Z=Pk(G),X=Rk({window:j},{ignoreStandaloneChromeGap:!0,keyboardActive:Z});if(X&&X>0)G.documentElement.style.setProperty("--app-height",`${X}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch(Y){console.debug("[mobile-viewport] Ignoring scrollTo failure during standalone viewport reset.",Y)}try{if(G.scrollingElement)G.scrollingElement.scrollTop=0,G.scrollingElement.scrollLeft=0;if(G.documentElement)G.documentElement.scrollTop=0,G.documentElement.scrollLeft=0;if(G.body)G.body.scrollTop=0,G.body.scrollLeft=0}catch(Y){console.debug("[mobile-viewport] Ignoring DOM scroll reset failure during standalone viewport sync.",Y)}}return X}function hK(_={}){if(!cK(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};j.documentElement?.style?.setProperty?.("--app-height","100vh");let G=0,Z=new Set,X=()=>{if(G)$.cancelAnimationFrame?.(G),G=0;for(let K of Z)$.clearTimeout?.(K);Z.clear()},Y=()=>{G=0,fk({window:$,document:j})},V=()=>{if(G)$.cancelAnimationFrame?.(G);G=$.requestAnimationFrame?.(Y)??0},Q=()=>{V();for(let K of[80,220,420]){let N=$.setTimeout?.(()=>{Z.delete(N),V()},K);if(N!=null)Z.add(N)}},q=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;Q()},B=$.visualViewport;return Q(),$.addEventListener("focus",Q),$.addEventListener("pageshow",Q),$.addEventListener("resize",Q),$.addEventListener("orientationchange",Q),j.addEventListener("visibilitychange",q),j.addEventListener("focusin",Q,!0),B?.addEventListener?.("resize",Q),B?.addEventListener?.("scroll",Q),()=>{X(),$.removeEventListener("focus",Q),$.removeEventListener("pageshow",Q),$.removeEventListener("resize",Q),$.removeEventListener("orientationchange",Q),j.removeEventListener("visibilitychange",q),j.removeEventListener("focusin",Q,!0),B?.removeEventListener?.("resize",Q),B?.removeEventListener?.("scroll",Q)}}var Mj="resume-layout-settling",Sk=220,I5=new WeakMap;function gk(_){if(!_){q_(w8,"");return}q_(w8,JSON.stringify({question:_.question||"",answer:_.answer||"",thinking:_.thinking||"",error:_.error||null,status:_.status||"success"}))}function uk(_={}){if(_.panePopoutMode)return!1;let $=typeof _.search==="string"?_.search:"";return!/(?:^|[?&])pane_popout=1(?:&|$)/.test($)}function bk(_,$={}){if(!_)return()=>{};let{durationMs:j=Sk,scheduleTimeout:G=setTimeout,clearScheduledTimeout:Z=clearTimeout}=$,X=I5.get(_);if(X)Z(X);_.classList.add(Mj);let Y=G(()=>{if(I5.get(_)===Y)_.classList.remove(Mj),I5.delete(_)},j);return I5.set(_,Y),()=>{let V=I5.get(_);if(V)Z(V),I5.delete(_);_.classList.remove(Mj)}}function vk(_,$){if(!_?.getElementById)return;let j=encodeURIComponent(String($||"0")),G={"dynamic-manifest":`/manifest.json?v=${j}`,"dynamic-favicon":`/favicon.ico?v=${j}`,"dynamic-apple-touch-icon":`/apple-touch-icon.png?v=${j}`,"dynamic-apple-touch-icon-180":`/apple-touch-icon-180x180.png?v=${j}`,"dynamic-apple-touch-icon-167":`/apple-touch-icon-167x167.png?v=${j}`,"dynamic-apple-touch-icon-152":`/apple-touch-icon-152x152.png?v=${j}`,"dynamic-apple-touch-icon-precomposed":`/apple-touch-icon-precomposed.png?v=${j}`};for(let[Z,X]of Object.entries(G)){let Y=_.getElementById(Z);if(Y&&Y.href!==X)Y.href=X}}function lK(_){let{isRenameBranchFormOpen:$,renameBranchNameInputRef:j,appShellRef:G,setIsWebAppMode:Z,workspaceOpen:X,setWorkspaceOpen:Y,btwSession:V,agents:Q,agentsRef:q,currentChatJid:B,activeChatJidRef:K,userProfile:N,userProfileRef:L,brandingRef:U,panePopoutMode:E=!1}=_;qY(30000),g(()=>{if(!$)return;requestAnimationFrame(()=>{if($)j.current?.focus?.(),j.current?.select?.()})},[$,j]),g(()=>YX(),[]),g(()=>mK(Z),[Z]),g(()=>{let M=()=>{},z=y8(()=>{K7(),M(),M=bk(G.current)});return()=>{z(),M()}},[G]);let H=u(P6());return g(()=>{vK(X,{bucket:H.current})},[X]),g(()=>{if(typeof window>"u"||!window.matchMedia)return;let M=window.matchMedia(gK),z=()=>{let O=P6(window);if(H.current===O)return;let x=H.current;if(H.current=O,x==="desktop"&&O==="narrow")Y(!1)};if(M.addEventListener)M.addEventListener("change",z);else if(M.addListener)M.addListener(z);return()=>{if(M.removeEventListener)M.removeEventListener("change",z);else if(M.removeListener)M.removeListener(z)}},[Y]),g(()=>hK(),[]),g(()=>{gk(V)},[V]),g(()=>{q.current=Q||{}},[Q,q]),g(()=>{K.current=B},[K,B]),g(()=>{L.current=N||{name:"You",avatar_url:null,avatar_background:null}},[N,L]),{applyBranding:f((M,z,O=null)=>{if(typeof document>"u")return;let x=(M||"").trim()||"PiClaw";if(U.current.title!==x){if(uk({panePopoutMode:E,search:typeof window<"u"?window.location.search:""})){document.title=x;let J=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(J&&J.getAttribute("content")!==x)J.setAttribute("content",x)}U.current.title=x}let I=z?`${z}|${O||""}`:"";if(U.current.avatarBase!==I){U.current.avatarBase=I;let J=O||Date.now();vk(document,J)}},[U])}}k0();function pK(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen&&!$.autoOpenEditor)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function Tj(_){if(typeof _==="string")return _.trim();if(typeof _==="number")return Number.isFinite(_)?String(_):"";if(typeof _==="bigint")return String(_);return""}function I8(_,$){let j=Array.isArray(_)?_:[],G=Tj($);if(!G)return j;if(j.includes(G))return j;return[...j,G]}function x8(_,$){let j=Array.isArray(_)?_:[],G=Tj($);if(!G)return j;if(!j.includes(G))return j;return j.filter((Z)=>Z!==G)}function C8(_){if(!Array.isArray(_))return[];let $=[],j=new Set;for(let G of _){let Z=Tj(G);if(!Z||j.has(Z))continue;j.add(Z),$.push(Z)}return $}async function rK(_){let{hashtag:$,setCurrentHashtag:j,setPosts:G,loadPosts:Z}=_;j($),G(null),await Z($)}async function nK(_){let{setCurrentHashtag:$,setSearchQuery:j,setPosts:G,loadPosts:Z}=_;$(null),j(null),G(null),await Z()}async function wj(_){let{query:$,scope:j,currentChatJid:G,currentRootChatJid:Z,searchPosts:X,setSearchScope:Y,setSearchQuery:V,setCurrentHashtag:Q,setPosts:q,setHasMore:B}=_,K=typeof $==="string"?$.trim():"";if(!K)return;let N=j==="root"||j==="all"?j:"current";Y(N),V(K),Q(null),q(null);try{let L=await X(K,50,0,G,N,Z,_.filters);q(Array.isArray(L?.results)?L.results:[]),B(!1)}catch(L){console.error("Failed to search:",L),q([])}}async function dK(_){let{post:$,posts:j,currentChatJid:G,deletePost:Z,preserveTimelineScrollTop:X,setPosts:Y,setRemovingPostIds:V,hasMoreRef:Q,loadMoreRef:q,confirm:B=(D)=>window.confirm(D),showAlert:K=(D)=>alert(D),scheduleTimeout:N=(D,M)=>{setTimeout(D,M)}}=_;if(!$)return;let L=$.id,U=typeof $?.chat_jid==="string"&&$.chat_jid.trim()?$.chat_jid.trim():G,E=j?.filter((D)=>D?.data?.thread_id===L&&D?.id!==L).length||0;if(E>0){if(!B(`Delete this message and its ${E} replies?`))return}let H=(D)=>{if(!D.length)return;V((M)=>{let z=new Set(M);return D.forEach((O)=>z.add(O)),z}),N(()=>{if(X(()=>{Y((M)=>M?M.filter((z)=>!D.includes(z.id)):M)}),V((M)=>{let z=new Set(M);return D.forEach((O)=>z.delete(O)),z}),Q.current)q.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let D=await Z(L,E>0,U);if(D?.ids?.length)H(D.ids)}catch(D){let M=D instanceof Error?D.message:String(D||"");if(E===0&&M.includes("Replies exist")){if(!B("Delete this message and its replies?"))return;let O=await Z(L,!0,U);if(O?.ids?.length)H(O.ids);return}console.error("Failed to delete post:",D),K(`Failed to delete message: ${M}`)}}async function oK(_){let{id:$,targetChatJid:j,currentChatJid:G,getThread:Z,setPosts:X,getElementById:Y=(K)=>document.getElementById(K),scheduleRaf:V=(K)=>requestAnimationFrame(K),scheduleTimeout:Q=(K,N)=>{setTimeout(K,N)}}=_,q=(K)=>{K.scrollIntoView({behavior:"smooth",block:"center"}),K.classList.add("post-highlight"),Q(()=>K.classList.remove("post-highlight"),2000)},B=Y(`post-${$}`);if(B){q(B);return}try{let K=typeof j==="string"&&j.trim()?j.trim():G,L=(await Z($,K))?.thread?.[0];if(!L)return;X((U)=>{if(!U)return[L];if(U.some((E)=>E.id===L.id))return U;return[...U,L]}),V(()=>{Q(()=>{let U=Y(`post-${$}`);if(U)q(U)},50)})}catch(K){console.error("[scrollToMessage] Failed to fetch message",$,K)}}function mk(_){if(typeof _==="string"&&_.trim())return _.trim();return"Could not send your message."}function ck(_){let{id:$,targetChatJid:j=null,currentChatJid:G,currentHashtag:Z=null,searchQuery:X=null,searchOpen:Y=!1,setCurrentHashtag:V,setSearchQuery:Q,setSearchOpen:q,setMessageRefs:B,navigate:K,chatOnlyMode:N,baseHref:L=typeof window<"u"?window.location.href:"http://localhost/"}=_,U=String($??"").trim();if(!U)return!1;let E=typeof j==="string"&&j.trim()?j.trim():G,H=E!==G,D=Boolean(Y||X||Z);if(!H&&!D)return B((M)=>I8(M,U)),!0;if(B([U]),V?.(null),Q?.(null),q?.(!1),H&&typeof K==="function"){let M=w1(L,E,{chatOnly:N});K(M)}return!0}function iK(_){let{setIntentToast:$,intentToastTimerRef:j,editorOpen:G,openEditor:Z,resolvePane:X,tabStripActiveId:Y,setFileRefs:V,setFolderRefs:Q,setMessageRefs:q,currentChatJid:B,currentHashtag:K,searchQuery:N,searchOpen:L,setCurrentHashtag:U,setSearchQuery:E,setSearchOpen:H,navigate:D,chatOnlyMode:M,baseHref:z,getThread:O,setPosts:x}=_,I=f(()=>{if(j.current)clearTimeout(j.current),j.current=null;$(null)},[j,$]);g(()=>{return()=>{I()}},[I]);let J=f((h)=>{V(($0)=>I8($0,h))},[V]),k=f((h)=>{V(($0)=>x8($0,h))},[V]),W=f(()=>{V([])},[V]),T=f((h)=>{V(C8(h))},[V]),w=f((h)=>{Q(($0)=>I8($0,h))},[Q]),A=f((h)=>{Q(($0)=>x8($0,h))},[Q]),P=f(()=>{Q([])},[Q]),R=f((h)=>{Q(C8(h))},[Q]),b=f((h,$0=null,Q0="info",O0=3000)=>{I(),$({title:h,detail:$0||null,kind:Q0||"info"}),j.current=setTimeout(()=>{$((a)=>a?.title===h?null:a)},O0)},[I,j,$]),c=f((h,{autoOpenEditor:$0=!1}={})=>{let Q0=pK(h,{editorOpen:G,autoOpenEditor:$0,resolvePane:X});if(Q0.kind==="open"){Z(Q0.path);return}if(Q0.kind==="toast")b(Q0.title,Q0.detail,Q0.level)},[G,Z,X,b]),r=f((h)=>{c(h,{autoOpenEditor:!1})},[c]),e=f((h)=>{c(h,{autoOpenEditor:!0})},[c]),m=f(()=>{let h=Y;if(h)J(h)},[J,Y]),_0=f((h,$0=null)=>{ck({id:h,targetChatJid:$0,currentChatJid:B,currentHashtag:K,searchQuery:N,searchOpen:L,setCurrentHashtag:U,setSearchQuery:E,setSearchOpen:H,setMessageRefs:q,navigate:D,chatOnlyMode:M,baseHref:z})},[z,M,B,K,D,L,N,U,q,H,E]),E0=f(async(h,$0=null)=>{await oK({id:h,targetChatJid:$0,currentChatJid:B,getThread:O,setPosts:x})},[B,O,x]),Z0=f((h)=>{q(($0)=>x8($0,h))},[q]),j0=f(()=>{q([])},[q]),V0=f((h)=>{q(C8(h))},[q]),N0=f((h)=>{b("Compose failed",mk(h),"error",5000)},[b]);return{clearIntentToast:I,addFileRef:J,removeFileRef:k,clearFileRefs:W,setFileRefsFromCompose:T,addFolderRef:w,removeFolderRef:A,clearFolderRefs:P,setFolderRefsFromCompose:R,showIntentToast:b,openFileFromPill:r,openTimelineFileFromPill:e,attachActiveEditorFile:m,addMessageRef:_0,scrollToMessage:E0,removeMessageRef:Z0,clearMessageRefs:j0,setMessageRefsFromCompose:V0,handleComposeSubmitError:N0}}k0();async function sK(_){let{panelKey:$,expanded:j,currentTurnIdRef:G,thoughtExpandedRef:Z,draftExpandedRef:X,setAgentThoughtVisibility:Y,getAgentThought:V,thoughtBufferRef:Q,draftBufferRef:q,setAgentThought:B,setAgentDraft:K}=_;if($!=="thought"&&$!=="draft")return;let N=G.current;if($==="thought"){if(Z.current=j,N)try{await Y(N,"thought",j)}catch(L){console.warn("Failed to update thought visibility:",L)}if(!j)return;try{let L=N?await V(N,"thought"):null;if(L?.text)Q.current=L.text;B((U)=>({...U||{text:"",totalLines:0},fullText:Q.current||U?.fullText||"",totalLines:Number.isFinite(L?.total_lines)?L.total_lines:U?.totalLines||0}))}catch(L){console.warn("Failed to fetch full thought:",L)}return}if(X.current=j,N)try{await Y(N,"draft",j)}catch(L){console.warn("Failed to update draft visibility:",L)}if(!j)return;try{let L=N?await V(N,"draft"):null;if(L?.text)q.current=L.text;K((U)=>({...U||{text:"",totalLines:0},fullText:q.current||U?.fullText||"",totalLines:Number.isFinite(L?.total_lines)?L.total_lines:U?.totalLines||0}))}catch(L){console.warn("Failed to fetch full draft:",L)}}function hk(_){if(!_)return _;if(!(_.last_activity||_.lastActivity))return _;let{last_activity:$,lastActivity:j,...G}=_;return G}function lk(_){if(!_||typeof _!=="object")return{type:"active",last_activity:!0};return{..._,last_activity:!0}}function aK(_){let{lastActivityTtlMs:$,lastActivityTimerRef:j,lastActivityTokenRef:G,lastAgentEventRef:Z,lastSilenceNoticeRef:X,isAgentRunningRef:Y,setIsAgentTurnActive:V,setAgentStatus:Q,draftBufferRef:q,thoughtBufferRef:B,pendingRequestRef:K,lastAgentResponseRef:N,currentTurnIdRef:L,steerQueuedTurnIdRef:U,agentStatusRef:E,silentRecoveryRef:H,thoughtExpandedRef:D,draftExpandedRef:M,setCurrentTurnId:z,setSteerQueuedTurnId:O,currentTurnIdRefForPanel:x,setAgentThoughtVisibility:I,getAgentThought:J,setAgentThought:k,setAgentDraft:W}=_,T=f((c={})=>{let r=Number(c.atMs),e=Number.isFinite(r)&&r>0?r:Date.now();if(Z.current=e,c.running)Y.current=!0,V((m)=>m?m:!0);if(c.clearSilence)X.current=0},[Y,Z,X,V]),w=f(()=>{if(j.current)clearTimeout(j.current),j.current=null;G.current=0},[j,G]);g(()=>()=>{w()},[w]);let A=f(()=>{w(),Q((c)=>hk(c))},[w,Q]),P=f((c)=>{if(!c)return;w();let r=Date.now();G.current=r,Q(lk(c)),j.current=setTimeout(()=>{if(G.current!==r)return;Q((e)=>{if(!e||!(e.last_activity||e.lastActivity))return e;return null})},$)},[w,j,G,$,Q]),R=f(()=>{Y.current=!1,V(!1),Z.current=null,X.current=0,q.current="",B.current="",K.current=null,N.current=null,L.current=null,U.current=null,E.current=null,H.current={inFlight:!1,lastAttemptAt:0,turnId:null},w(),z(null),O(null),D.current=!1,M.current=!1},[E,w,L,q,M,Y,Z,N,X,K,z,V,O,H,U,B,D]),b=f(async(c,r)=>{await sK({panelKey:c,expanded:r,currentTurnIdRef:x,thoughtExpandedRef:D,draftExpandedRef:M,setAgentThoughtVisibility:I,getAgentThought:J,thoughtBufferRef:B,draftBufferRef:q,setAgentThought:k,setAgentDraft:W})},[x,q,M,J,W,k,I,B,D]);return{noteAgentActivity:T,clearLastActivityTimer:w,clearLastActivityFlag:A,showLastActivity:P,clearAgentRunState:R,handlePanelToggle:b}}k0();function P8(_){return _?{..._}:{text:"",totalLines:0}}function tK(_){return Array.isArray(_)?_.map(($)=>({...$})):[]}function pk(_){return{inFlight:Boolean(_?.inFlight),lastAttemptAt:Number(_?.lastAttemptAt||0),turnId:typeof _?.turnId==="string"?_.turnId:null}}function rk(){return{agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}}function eK(_){return{agentStatus:_.agentStatus,agentDraft:P8(_.agentDraft),agentPlan:_.agentPlan||"",agentThought:P8(_.agentThought),pendingRequest:_.pendingRequest,currentTurnId:_.currentTurnId||null,steerQueuedTurnId:_.steerQueuedTurnId||null,isAgentTurnActive:Boolean(_.isAgentTurnActive),followupQueueItems:tK(_.followupQueueItems),activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:Boolean(_.supportsThinking),activeModelUsage:_.activeModelUsage,contextUsage:_.contextUsage,isAgentRunning:Boolean(_.isAgentRunning),wasAgentActive:Boolean(_.wasAgentActive),draftBuffer:_.draftBuffer||"",thoughtBuffer:_.thoughtBuffer||"",lastAgentEvent:_.lastAgentEvent||null,lastSilenceNotice:Number(_.lastSilenceNotice||0),lastAgentResponse:_.lastAgentResponse||null,currentTurnIdRef:_.currentTurnIdRef||null,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef||null,thoughtExpanded:Boolean(_.thoughtExpanded),draftExpanded:Boolean(_.draftExpanded),agentStatusRef:_.agentStatusRef||null,silentRecovery:pk(_.silentRecovery)}}function _B(_){let $=_.snapshot||rk(),{refs:j,setters:G}=_;return _.clearLastActivityTimer?.(),j.isAgentRunningRef.current=Boolean($.isAgentRunning),j.wasAgentActiveRef.current=Boolean($.wasAgentActive),G.setIsAgentTurnActive(Boolean($.isAgentTurnActive)),j.lastAgentEventRef.current=$.lastAgentEvent||null,j.lastSilenceNoticeRef.current=Number($.lastSilenceNotice||0),j.draftBufferRef.current=$.draftBuffer||"",j.thoughtBufferRef.current=$.thoughtBuffer||"",j.pendingRequestRef.current=$.pendingRequest||null,j.lastAgentResponseRef.current=$.lastAgentResponse||null,j.currentTurnIdRef.current=$.currentTurnIdRef||null,j.steerQueuedTurnIdRef.current=$.steerQueuedTurnIdRef||null,j.agentStatusRef.current=$.agentStatusRef||null,j.silentRecoveryRef.current=$.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},j.thoughtExpandedRef.current=Boolean($.thoughtExpanded),j.draftExpandedRef.current=Boolean($.draftExpanded),G.setAgentStatus($.agentStatus||null),G.setAgentDraft(P8($.agentDraft)),G.setAgentPlan($.agentPlan||""),G.setAgentThought(P8($.agentThought)),G.setPendingRequest($.pendingRequest||null),G.setCurrentTurnId($.currentTurnId||null),G.setSteerQueuedTurnId($.steerQueuedTurnId||null),G.setFollowupQueueItems(tK($.followupQueueItems)),G.setActiveModel($.activeModel||null),G.setActiveThinkingLevel($.activeThinkingLevel||null),G.setSupportsThinking(Boolean($.supportsThinking)),G.setActiveModelUsage($.activeModelUsage??null),G.setContextUsage($.contextUsage??null),$}function yj(_){return String(_||"").trim()||"web:default"}function $B({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function nk(_){return $B(_)}function dk(_){let $=String(_?.data?.content||"").trim();if($)return $.replace(/\s+/g," ").slice(0,200);if((Array.isArray(_?.data?.content_blocks)?_.data.content_blocks:[]).length>0)return"Sent an attachment.";return""}function jB(_){let{isAgentTurnActive:$,steerQueuedTurnId:j,currentTurnId:G,steerQueuedTurnIdRef:Z,setSteerQueuedTurnId:X,agentStatus:Y,agentDraft:V,agentPlan:Q,agentThought:q,pendingRequest:B,pendingRequestRef:K,followupQueueItems:N,activeModel:L,activeThinkingLevel:U,supportsThinking:E,activeModelUsage:H,contextUsage:D,isAgentRunningRef:M,wasAgentActiveRef:z,draftBufferRef:O,thoughtBufferRef:x,lastAgentEventRef:I,lastSilenceNoticeRef:J,lastAgentResponseRef:k,currentTurnIdRef:W,thoughtExpandedRef:T,draftExpandedRef:w,agentStatusRef:A,silentRecoveryRef:P,clearLastActivityTimer:R,setIsAgentTurnActive:b,setAgentStatus:c,setAgentDraft:r,setAgentPlan:e,setAgentThought:m,setPendingRequest:_0,setCurrentTurnId:E0,setFollowupQueueItems:Z0,setActiveModel:j0,setActiveThinkingLevel:V0,setSupportsThinking:N0,setActiveModelUsage:h,setContextUsage:$0,lastNotifiedIdRef:Q0,agentsRef:O0,notify:a,shouldNotifyLocallyForChat:X0}=_,W0=f((h0)=>{if(!nk({remainingQueueCount:h0,steerQueuedTurnId:Z.current,currentTurnId:W.current,isAgentTurnActive:$}))return;Z.current=null,X(null)},[$,W,X,Z]),P0=f(()=>eK({agentStatus:Y,agentDraft:V,agentPlan:Q,agentThought:q,pendingRequest:B,currentTurnId:G,steerQueuedTurnId:j,isAgentTurnActive:$,followupQueueItems:N,activeModel:L,activeThinkingLevel:U,supportsThinking:E,activeModelUsage:H,contextUsage:D,isAgentRunning:M.current,wasAgentActive:z.current,draftBuffer:O.current,thoughtBuffer:x.current,lastAgentEvent:I.current,lastSilenceNotice:J.current,lastAgentResponse:k.current,currentTurnIdRef:W.current,steerQueuedTurnIdRef:Z.current,thoughtExpanded:T.current,draftExpanded:w.current,agentStatusRef:A.current,silentRecovery:P.current}),[L,H,U,V,Q,Y,q,D,G,N,$,B,j,E,M,z,O,x,I,J,k,W,Z,T,w,A,P]),l0=f((h0)=>{_B({snapshot:h0,clearLastActivityTimer:R,refs:{isAgentRunningRef:M,wasAgentActiveRef:z,lastAgentEventRef:I,lastSilenceNoticeRef:J,draftBufferRef:O,thoughtBufferRef:x,pendingRequestRef:K,lastAgentResponseRef:k,currentTurnIdRef:W,steerQueuedTurnIdRef:Z,agentStatusRef:A,silentRecoveryRef:P,thoughtExpandedRef:T,draftExpandedRef:w},setters:{setIsAgentTurnActive:b,setAgentStatus:c,setAgentDraft:r,setAgentPlan:e,setAgentThought:m,setPendingRequest:_0,setCurrentTurnId:E0,setSteerQueuedTurnId:X,setFollowupQueueItems:Z0,setActiveModel:j0,setActiveThinkingLevel:V0,setSupportsThinking:N0,setActiveModelUsage:h,setContextUsage:$0}})},[A,R,W,O,w,M,I,k,J,K,j0,h,V0,r,e,c,m,$0,E0,Z0,b,_0,X,N0,P,Z,x,T,z]),u0=f((h0)=>{if(!h0)return;if(W.current===h0)return;W.current=h0,P.current={inFlight:!1,lastAttemptAt:0,turnId:h0},E0(h0),Z.current=null,X(null),O.current="",x.current="",r({text:"",totalLines:0}),e(""),m({text:"",totalLines:0}),_0(null),K.current=null,k.current=null,T.current=!1,w.current=!1},[W,O,w,k,K,r,e,m,E0,_0,X,P,Z,x,T]),G_=f((h0)=>{let s0=k.current;if(!s0||!s0.post)return;if(h0&&s0.turnId&&s0.turnId!==h0)return;let R0=s0.post,o0=typeof R0?.chat_jid==="string"&&R0.chat_jid.trim()?R0.chat_jid.trim():"";if(!o0||!X0(o0))return;if(R0.id&&Q0.current===R0.id)return;let v0=dk(R0);if(!v0)return;Q0.current=R0.id||Q0.current,k.current=null;let t0=O0.current||{},F_=(R0?.data?.agent_id?t0[R0.data.agent_id]:null)?.name||"Pi";a(F_,v0,{sourceLabel:"Local"})},[O0,k,Q0,a,X0]);return{clearQueuedSteerStateIfStale:W0,snapshotCurrentChatPaneState:P0,restoreChatPaneState:l0,setActiveTurn:u0,notifyForFinalResponse:G_}}k0();function R8(_){return _?.turn_id||_?.turnId||null}function x5(_){if(typeof _?.text!=="string"||!_.text)return null;let $=Number.isFinite(_?.totalLines)?Number(_.totalLines):Number.isFinite(_?.total_lines)?Number(_.total_lines):0;return{text:_.text,totalLines:$}}function Ij(_,$){return typeof _?.text==="string"&&_.text.length>=$.length}function xj(_,$){return Number.isFinite($)?Number($):_?_.replace(/\r\n/g,`
`).split(`
`).length:0}function f8(_,$){return{text:_,totalLines:xj(_,$)}}function Cj(_,$){return{text:$?.text||"",totalLines:QY(_),fullText:_}}function GB(_,$,j){return j==="replace"?$:`${_||""}${$}`}function ZB(_,$){let j=_||"";if($?.reset)j="";if($?.delta)j+=String($.delta);return j}function XB(_,$){let j=_||"";if($?.reset)j="";if(typeof $?.delta==="string")j+=$.delta;return j}function a1(_){return!_?.currentHashtag&&!_?.searchQuery&&!_?.searchOpen}function YB(_,$,j){return Boolean($&&j&&(_==="new_post"||_==="new_reply"||_==="agent_response"))}function Pj(_,$){return _&&$}function VB(_,$){if(!Array.isArray(_)||_.length===0)return[$];if(_.some((j)=>j?.id===$?.id))return _;return[..._,$]}function qB(_,$){if(!Array.isArray(_))return _;if(!_.some((j)=>j?.id===$?.id))return _;return _.map((j)=>j?.id===$?.id?$:j)}function QB(_,$){if(!Array.isArray(_))return _;let j=Array.isArray($)?$:[];if(j.length===0)return _;let G=new Set(j),Z=_.filter((X)=>!G.has(X?.id));return Z.length===_.length?_:Z}async function KB(_){let{currentChatJid:$,getAgentStatus:j,activeChatJidRef:G,wasAgentActiveRef:Z,viewStateRef:X,refreshTimeline:Y,clearAgentRunState:V,agentStatusRef:Q,pendingRequestRef:q,thoughtBufferRef:B,draftBufferRef:K,setAgentStatus:N,setAgentDraft:L,setAgentPlan:U,setAgentThought:E,setPendingRequest:H,setActiveTurn:D,noteAgentActivity:M,clearLastActivityFlag:z,onStateAccessResult:O}=_,x=$;try{let I=await j(x);if(O?.(!1),G.current!==x)return null;if(!I||I.status!=="active"||!I.data){if(Z.current&&a1(X.current))Y();return Z.current=!1,V(),Q.current=null,N(null),L({text:"",totalLines:0}),U(""),E({text:"",totalLines:0}),H(null),q.current=null,I??null}Z.current=!0;let J=I.data;Q.current=J;let k=R8(J);if(k)D(k);M({running:!0,clearSilence:!0,atMs:n$(J)??Date.now()}),z(),N(J);let W=x5(I.thought);if(W)E((w)=>{if(Ij(w,W.text))return w;return B.current=W.text,W});let T=x5(I.draft);if(T)L((w)=>{if(Ij(w,T.text))return w;return K.current=T.text,T});return I}catch(I){return O?.(!0),console.warn("Failed to fetch agent status:",I),null}}async function BB(_){let{isAgentRunningRef:$,pendingRequestRef:j,currentTurnIdRef:G,silentRecoveryRef:Z,silenceRefreshMs:X,viewStateRef:Y,refreshTimeline:V,refreshQueueState:Q,refreshAgentStatus:q,now:B=()=>Date.now()}=_;if(!$.current)return null;if(j.current)return null;let K=G.current||null,N=Z.current,L=B();if(N.inFlight)return null;if(N.turnId===K&&L-N.lastAttemptAt<X)return null;N.inFlight=!0,N.lastAttemptAt=L,N.turnId=K;try{if(a1(Y.current))await V();return await Q(),await q()}finally{N.inFlight=!1}}function ok(_){if(!_||typeof _!=="object")return!1;let $=typeof _.type==="string"?_.type:"";if($==="tool_call"||$==="tool_status"||$==="intent")return!0;return Boolean(_.tool_name||_.tool_args)}function LB(_){let{isAgentRunningRef:$,pendingRequestRef:j,lastAgentEventRef:G,lastSilenceNoticeRef:Z,agentStatusRef:X,silenceWarningMs:Y,silenceFinalizeMs:V,silenceRefreshMs:Q,isCompactionStatus:q,setAgentStatus:B,reconcileSilentTurn:K,now:N=()=>Date.now()}=_;if(!$.current)return;if(j.current)return;let L=G.current;if(!L)return;let U=N(),E=U-L,H=X.current,D=q(H),M=ok(H);if(E>=V){if(!D&&!M)B({type:"waiting",title:"Re-syncing after a quiet period…"});K();return}if(E>=Y&&U-Z.current>=Q){if(!D&&!M){let z=Math.floor(E/1000);B({type:"waiting",title:`Waiting for model… No events for ${z}s`})}Z.current=U,K()}}function ik(_){if(!_||typeof _!=="object")return null;let $=typeof _.type==="string"?_.type:"",j=typeof _.title==="string"&&_.title.trim()?_.title.trim():null,G=typeof _.tool_name==="string"&&_.tool_name.trim()?_.tool_name.trim():null,Z=typeof _.status==="string"&&_.status.trim()?_.status.trim():null;if($==="tool_call")return{summary:`Timed out while running ${j||G||"tool"}`,title:j,toolName:G,statusText:Z};if($==="tool_status"){let X=j||G||"tool";return{summary:Z?`Timed out after ${X}: ${Z}`:`Timed out after ${X}`,title:j,toolName:G,statusText:Z}}if(G||j)return{summary:`Timed out after ${j||G||"tool"}`,title:j,toolName:G,statusText:Z};return null}function NB(_){let{isAgentRunningRef:$,lastSilenceNoticeRef:j,lastAgentEventRef:G,currentTurnIdRef:Z,thoughtExpandedRef:X,draftExpandedRef:Y,draftBufferRef:V,thoughtBufferRef:Q,pendingRequestRef:q,lastAgentResponseRef:B,agentStatusRef:K,stalledPostIdRef:N,scrollToBottomRef:L,setCurrentTurnId:U,setAgentDraft:E,setAgentPlan:H,setAgentThought:D,setPendingRequest:M,setAgentStatus:z,setPosts:O,dedupePosts:x,now:I=()=>Date.now(),nowIso:J=()=>new Date().toISOString()}=_;if(!$.current)return;let k=ik(K.current);$.current=!1,j.current=0,G.current=null,K.current=null,Z.current=null,U(null),X.current=!1,Y.current=!1;let W=(V.current||"").trim();if(V.current="",Q.current="",H(""),D({text:"",totalLines:0}),M(null),q.current=null,B.current=null,!W){E({text:"",totalLines:0}),z({type:"error",title:"Response stalled - No content received"});return}E({text:W,totalLines:xj(W,null),fullText:W});let T=W,w=I(),A=J(),P={id:w,timestamp:A,data:{type:"agent_response",content:T,content_blocks:[{type:"timeout_marker",timed_out:!0,title:"Timed out",tool_action_summary:k?.summary||"",tool_title:k?.title||"",tool_name:k?.toolName||"",tool_status:k?.statusText||"",draft_recovered:!0}],agent_id:"default",is_local_stall:!0}};N.current=w,O((R)=>R?x([...R,P]):[P]),L.current?.(),z(null)}function sk(_){let{stalledPostIdRef:$,setPosts:j}=_,G=$.current;if(!G)return;j((Z)=>Z?Z.filter((X)=>X.id!==G):Z),$.current=null}function ak(_){NB(_)}function FB(_){let{viewStateRef:$,currentHashtag:j,searchQuery:G,searchOpen:Z}=_;g(()=>{$.current={currentHashtag:j,searchQuery:G,searchOpen:Z}},[j,Z,G,$])}function UB(_){let{stalledPostIdRef:$,setPosts:j,isAgentRunningRef:G,lastSilenceNoticeRef:Z,lastAgentEventRef:X,currentTurnIdRef:Y,thoughtExpandedRef:V,draftExpandedRef:Q,draftBufferRef:q,thoughtBufferRef:B,pendingRequestRef:K,lastAgentResponseRef:N,agentStatusRef:L,scrollToBottomRef:U,setCurrentTurnId:E,setAgentDraft:H,setAgentPlan:D,setAgentThought:M,setPendingRequest:z,setAgentStatus:O,dedupePosts:x}=_,I=f(()=>{sk({stalledPostIdRef:$,setPosts:j})},[j,$]),J=f(()=>{ak({isAgentRunningRef:G,lastSilenceNoticeRef:Z,lastAgentEventRef:X,currentTurnIdRef:Y,thoughtExpandedRef:V,draftExpandedRef:Q,draftBufferRef:q,thoughtBufferRef:B,pendingRequestRef:K,lastAgentResponseRef:N,agentStatusRef:L,stalledPostIdRef:$,scrollToBottomRef:U,setCurrentTurnId:E,setAgentDraft:H,setAgentPlan:D,setAgentThought:M,setPendingRequest:z,setAgentStatus:O,setPosts:j,dedupePosts:x})},[Y,x,q,Q,G,X,N,L,Z,K,U,H,D,O,M,E,z,j,$,B,V]);return{removeStalledPost:I,finalizeStalledResponse:J}}function tk(_){let{removeFileRefRef:$,composeReferenceActions:j}=_;$.current=j.removeFileRef||null}function ek(_){return{applyBranding:_.applyBranding,composeReferenceActions:_.composeReferenceActions,..._.agentActivity,..._.chatPaneRuntime,recoveryCallbacks:_.recoveryCallbacks}}function DB(_){let{environment:$,composeReferences:j,agentActivity:G,chatPaneRuntime:Z,recovery:X,viewState:Y,removeFileRefRef:V}=_,{applyBranding:Q}=lK($),q=iK(j);tk({removeFileRefRef:V,composeReferenceActions:q});let B=aK(G),K=jB({...Z,clearLastActivityTimer:B.clearLastActivityTimer}),N=UB(X);return FB(Y),ek({applyBranding:Q,composeReferenceActions:q,agentActivity:B,chatPaneRuntime:K,recoveryCallbacks:N})}k0();k0();M_();var S8=new Map,Rj=new Map;function HB(){return Date.now()}function R6(_){return String(_||"").trim()}function EB(_,$=600000){return Boolean(_&&HB()-_.cachedAt<=$)}function _M(_){while(_.size>24){let $=_.keys().next().value;if(!$)break;_.delete($)}}function WB(_,$){return S8.delete(_),S8.set(_,$),_M(S8),$}function g8(_,$){let j=R6(_);if(!j)return null;let G={posts:Array.isArray($?.posts)?$.posts:[],has_more:Boolean($?.has_more),cachedAt:HB()};return WB(j,G)}function fj(_,$={}){let j=R6(_);if(!j)return null;let G=Number.isFinite($.maxAgeMs)?Number($.maxAgeMs):600000,Z=S8.get(j)||null;if(!EB(Z,G))return null;return WB(j,Z)}function OB(_,$,j=5){if(!Array.isArray(_))return[];let G=R6($),Z=Number.isFinite(j)?Math.max(1,Math.min(8,Number(j))):5,X=new Set,Y=[];for(let V of _){let Q=R6(V?.chat_jid);if(!Q||Q===G||X.has(Q))continue;if(X.add(Q),Y.push(Q),Y.length>=Z)break}return Y}async function zB(_){let $=Array.from(new Set((_.chatJids||[]).map((V)=>R6(V)).filter(Boolean)));if($.length===0)return;let j=Number.isFinite(_.maxAgeMs)?Number(_.maxAgeMs):600000,G=Number.isFinite(_.maxConcurrent)?Math.max(1,Math.min(4,Number(_.maxConcurrent))):2,Z=$.filter((V)=>!EB(fj(V,{maxAgeMs:j}),j)),X=0,Y=Array.from({length:Math.min(G,Z.length)},async()=>{while(X<Z.length){let V=Z[X++],Q=Rj.get(V);if(Q){await Q;continue}let q=(async()=>{try{let B=await _.fetchTimeline(V);g8(V,B)}catch(B){console.debug("[app-timeline-cache] Ignoring timeline prewarm failure for a best-effort background fetch.",B,{chatJid:V})}finally{Rj.delete(V)}})();Rj.set(V,q),await q}});await Promise.all(Y)}function JB(_,$){let j=Array.isArray(_)?_:[],G=Array.isArray($)?$:null;if(!G)return j;if(G.length===0)return G;if(j.length===0)return G;let Z=1/0;for(let Y of G){let V=Y?.id;if(typeof V==="number"&&Number.isFinite(V)&&V<Z)Z=V}if(!Number.isFinite(Z))return W5([...G,...j]);let X=j.filter((Y)=>{let V=Y?.id;return typeof V==="number"&&Number.isFinite(V)&&V<Z});return W5([...G,...X])}function AB({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null,currentHashtag:G=null,searchQuery:Z=null}){let[X,Y]=C(null),[V,Q]=C(!1),q=u(!1),B=u(null),K=u(!1),N=u(null),L=u(null),U=u(0),E=u(0);g(()=>{q.current=V},[V]),g(()=>{L.current=X},[X]);let H=!G&&!Z,D=u(H);g(()=>{D.current=H},[H]),g(()=>{U.current+=1,Y(null),L.current=null,N.current=null,K.current=!1,q.current=!1,Q(!1),E.current=0},[j]);let M=f((k,W)=>{if(!H)return;g8(j,{posts:Array.isArray(k)?k:[],has_more:Boolean(W)})},[j,H]),z=f((k,W)=>{L.current=Array.isArray(k)?k:[],q.current=Boolean(W),Y(L.current),Q(q.current),M(L.current,q.current)},[M]),O=f(async(k=null)=>{let W=U.current;try{if(k){let P=await U7(k,50,0,j);if(W!==U.current)return;Y(P.posts),Q(!1);return}let T=(P)=>{if(W!==U.current)return;let R=Array.isArray(P?.posts)?P.posts:[],b=Boolean(P?.has_more);z(R,b)},w=fj(j);if(w){z(w.posts,w.has_more);let P=E.current;p$(10,null,j).then((R)=>{if(W!==U.current||E.current!==P)return;if(!D.current)return;let b=Array.isArray(R?.posts)?R.posts:[],c=Boolean(R?.has_more);z(JB(L.current,b),c)}).catch((R)=>{if(W!==U.current)return;console.error("Failed to refresh cached timeline:",R)});return}let A=await p$(10,null,j);T(A)}catch(T){if(W!==U.current)return;throw console.error("Failed to load posts:",T),T}},[j,z]),x=f(async()=>{let k=U.current;try{let W=await p$(10,null,j);if(k!==U.current)return;z(JB(L.current,W?.posts),Boolean(W?.has_more))}catch(W){if(k!==U.current)return;console.error("Failed to refresh timeline:",W)}},[j,z]),I=f(async(k={})=>{let W=U.current,T=L.current;if(!T||T.length===0)return;if(K.current)return;let{preserveScroll:w=!0,preserveMode:A="top",allowRepeat:P=!1}=k,R=(r)=>{if(!w){r();return}if(A==="top")$(r);else _(r)},c=T.slice().sort((r,e)=>r.id-e.id)[0]?.id;if(!Number.isFinite(c))return;if(!P&&N.current===c)return;K.current=!0,N.current=c;try{let r=await p$(10,c,j);if(W!==U.current)return;if(E.current+=1,r.posts.length>0)R(()=>{let e=W5([...r.posts,...L.current||[]]);z(e,r.has_more)});else z(L.current||[],!1)}catch(r){if(W!==U.current)return;console.error("Failed to load more posts:",r)}finally{if(W===U.current)K.current=!1}},[j,_,$,z]);g(()=>{B.current=I},[I]);let J=f((k)=>{Y((W)=>{let T=typeof k==="function"?k(W):k;if(L.current=T,Array.isArray(T)){if(E.current+=1,H)g8(j,{posts:T,has_more:q.current})}return T})},[j,H]);return{posts:X,setPosts:J,hasMore:V,setHasMore:Q,hasMoreRef:q,loadPosts:O,refreshTimeline:x,loadMore:I,loadMoreRef:B,loadingMoreRef:K,lastBeforeIdRef:N}}k0();function $M(_){if(!_?.data?.is_bot_message)return!1;let $=_.data.content;return $==="Queued as a follow-up (one-at-a-time)."||$==="⁣"}function kB(_,$){if(!_||!Array.isArray(_))return _;let j=new Set($||[]),G=_.filter((Z)=>!j.has(Z?.id)&&!$M(Z));return G.length===_.length?_:G}function MB(_,$){let j=$||new Set;return Array.isArray(_)?_.map((G)=>({...G})).filter((G)=>!j.has(G.row_id)):[]}function TB(_,$){if(!Array.isArray(_)||!Array.isArray($))return!1;return _.length===$.length&&_.every((j,G)=>j?.row_id===$[G]?.row_id)}function j4(_,$){let j=Array.isArray(_)&&$!=null?_.filter((G)=>G?.row_id!==$):Array.isArray(_)?[..._]:[];return{items:j,remainingQueueCount:j.length}}function wB(_,$){let j=Array.isArray(_)?_:[],G=$?.row_id,Z=$?.content;if(G==null||typeof Z!=="string"||!Z.trim())return j;if(j.some((X)=>X?.row_id===G))return j;return[...j,{row_id:G,content:Z,timestamp:$?.timestamp||null,thread_id:$?.thread_id??null}]}function yB(_){if(!_||typeof _!=="object")return!1;if(_.queued==="followup"||_.queued==="steer")return!0;let $=_.command;return Boolean($&&typeof $==="object"&&($.queued_followup||$.queued_steer))}function jM(_,$=150){return Math.abs(_)<=$}function IB(_){let{timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G}=_,Z=f(()=>{let Q=$.current;if(!Q)return;if(jM(Q.scrollTop))Q.scrollTop=0},[$]),X=f((Q)=>{let q=$.current;if(!q||typeof Q!=="function"){Q?.();return}let{currentHashtag:B,searchQuery:K,searchOpen:N}=j.current||{},L=!((K||N)&&!B),U=L?q.scrollHeight-q.scrollTop:q.scrollTop;Q(),requestAnimationFrame(()=>{let E=$.current;if(!E)return;if(L){let H=Math.max(E.scrollHeight-U,0);E.scrollTop=H}else{let H=Math.max(E.scrollHeight-E.clientHeight,0),D=Math.min(U,H);E.scrollTop=D}})},[$,j]),Y=f((Q)=>{let q=$.current;if(!q||typeof Q!=="function"){Q?.();return}let B=q.scrollTop;Q(),requestAnimationFrame(()=>{let K=$.current;if(!K)return;let N=Math.max(K.scrollHeight-K.clientHeight,0);K.scrollTop=Math.min(B,N)})},[$]),V=f((Q)=>{return kB(Q,G.current)},[G]);return{scrollToBottom:Z,preserveTimelineScroll:X,preserveTimelineScrollTop:Y,filterQueuedPosts:V}}function GM(_){let{rawPosts:$,filterQueuedPosts:j}=_;return j($)}function ZM(_){_.scrollToBottomRef.current=_.scrollToBottom}function xB(_){let{timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G,currentChatJid:Z,currentHashtag:X,searchQuery:Y,followupQueueItems:V}=_,Q=u(null),{scrollToBottom:q,preserveTimelineScroll:B,preserveTimelineScrollTop:K,filterQueuedPosts:N}=IB({timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G});ZM({scrollToBottomRef:Q,scrollToBottom:q});let{posts:L,setPosts:U,hasMore:E,setHasMore:H,hasMoreRef:D,loadPosts:M,refreshTimeline:z,loadMore:O,loadMoreRef:x}=AB({preserveTimelineScroll:B,preserveTimelineScrollTop:K,chatJid:Z,currentHashtag:X,searchQuery:Y}),I=Y0(()=>GM({rawPosts:L,followupQueueItems:V,filterQueuedPosts:N}),[N,V,L]);return{scrollToBottomRef:Q,scrollToBottom:q,preserveTimelineScroll:B,preserveTimelineScrollTop:K,rawPosts:L,setPosts:U,hasMore:E,setHasMore:H,hasMoreRef:D,loadPosts:M,refreshTimeline:z,loadMore:O,loadMoreRef:x,posts:I}}k0();function XM(_){let{currentHashtag:$,searchQuery:j,searchOpen:G}=_;return!$&&!j&&!G}function CB(_){let{currentHashtag:$,searchQuery:j,searchOpen:G,searchScope:Z,currentChatJid:X,currentRootChatJid:Y,posts:V,loadPosts:Q,searchPosts:q,setCurrentHashtag:B,setSearchQuery:K,setSearchOpen:N,setSearchScope:L,setPosts:U,setHasMore:E,preserveTimelineScrollTop:H,setRemovingPostIds:D,deletePost:M,hasMoreRef:z,loadMoreRef:O}=_,x=f(async(P)=>{await rK({hashtag:P,setCurrentHashtag:B,setPosts:U,loadPosts:Q})},[Q,B,U]),I=f(async()=>{await nK({setCurrentHashtag:B,setSearchQuery:K,setPosts:U,loadPosts:Q})},[Q,B,U,K]),J=f(async(P,R=Z,b)=>{await wj({query:P,scope:R,currentChatJid:X,currentRootChatJid:Y,searchPosts:q,setSearchScope:L,setSearchQuery:K,setCurrentHashtag:B,setPosts:U,setHasMore:E,filters:b})},[X,Y,q,Z,B,E,U,K,L]),k=f((P)=>{if(L(P),j&&j.trim())wj({query:j,scope:P,currentChatJid:X,currentRootChatJid:Y,searchPosts:q,setSearchScope:L,setSearchQuery:K,setCurrentHashtag:B,setPosts:U,setHasMore:E})},[X,Y,q,j,B,E,U,K,L]),W=f(()=>{N(!0),K(null),B(null),L("current"),U([])},[B,U,N,K,L]),T=f(()=>{N(!1),K(null),Q()},[Q,N,K]),w=Y0(()=>XM({currentHashtag:$,searchQuery:j,searchOpen:G}),[$,G,j]),A=f(async(P)=>{await dK({post:P,posts:V,currentChatJid:X,deletePost:M,preserveTimelineScrollTop:H,setPosts:U,setRemovingPostIds:D,hasMoreRef:z,loadMoreRef:O})},[X,M,z,O,V,H,U,D]);return{handleHashtagClick:x,handleBackToTimeline:I,handleSearch:J,handleSearchScopeChange:k,enterSearchMode:W,exitSearchMode:T,isMainTimelineView:w,handleDeletePost:A}}k0();function Sj(_){if(!Array.isArray(_?.content))return null;return _.content.find((j)=>j?.type==="status_panel"&&j?.panel)?.panel||null}function PB(_,$){let j=new Map(_),G=Sj($);if(typeof $?.key==="string"&&$.key&&G)j.set($.key,G);else j.delete("autoresearch");return j}function RB(_,$){let j=typeof $?.key==="string"?$.key:"";if(!j)return _;let G=new Map(_),Z=Sj($);if($?.options?.remove||!Z)G.delete(j);else G.set(j,Z);return G}function fB(_){if(_?.options?.remove)return!0;return Sj(_)?.state!=="running"}function gj(_,$){return`${_}:${$}`}function SB(_,$,j){let G=gj($,j);if(_.has(G))return _;let Z=new Set(_);return Z.add(G),Z}function gB(_,$){if(!_.has($))return _;let j=new Set(_);return j.delete($),j}function u8(_,$){if(_.size===0)return _;let j=`${$}:`,G=new Set(Array.from(_).filter((Z)=>!String(Z).startsWith(j)));return G.size===_.size?_:G}async function uB(_){let $=typeof _.action?.action_type==="string"?_.action.action_type:"",j=typeof _.action?.key==="string"?_.action.key:"";if($==="autoresearch.stop")return await _.stopAutoresearch(_.currentChatJid,{generateReport:!0}),{refreshAutoresearchStatus:!0};if($==="autoresearch.dismiss")return await _.dismissAutoresearch(_.currentChatJid),{refreshAutoresearchStatus:!0};if($==="autoresearch.copy_tmux"){let G=typeof _.panel?.tmux_command==="string"?_.panel.tmux_command.trim():"";if(!G)throw Error("No tmux command available.");return await _.writeClipboard(G),{refreshAutoresearchStatus:!1,toast:{title:"Copied",detail:"tmux command copied to clipboard.",kind:"success"}}}throw Error(`Unsupported panel action: ${$||j}`)}var bB="piclaw:ctx:";function G4(_){if(!_||typeof _!=="object")return null;let $=_,j=$.tokens==null?null:Number($.tokens),G=$.contextWindow==null?null:Number($.contextWindow),Z=$.percent==null?null:Number($.percent);return{tokens:Number.isFinite(j)?j:null,contextWindow:Number.isFinite(G)?G:null,percent:Number.isFinite(Z)?Z:null}}function u4(_,$){let j=G4(_),G=G4($);if(!j&&!G)return!0;if(!j||!G)return!1;return j.tokens===G.tokens&&j.contextWindow===G.contextWindow&&j.percent===G.percent}function C5(_,$){if(!_||!$||typeof $!=="object")return;if($.percent==null)return;try{q_(bB+_,JSON.stringify($))}catch(G){console.debug("[app-status-refresh] Ignoring best-effort context usage persistence failure.",G,{chatJid:_})}}function vB(_){if(!_)return null;return W2(bB+_)}async function mB(_){let{currentChatJid:$,queueRefreshGenRef:j,activeChatJidRef:G,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:V}=_,Q=++j.current,q=$;try{let B=await X(q);if(Q!==j.current)return;if(G.current!==q)return;let K=Z.current,N=Array.isArray(B?.items)?B.items:[],L=MB(N,K);if(L.length){Y((U)=>TB(U,L)?U:L);return}if(N.length>0)return;K.clear(),V(0),Y((U)=>U.length===0?U:[])}catch{if(Q!==j.current)return;if(G.current!==q)return;Y((B)=>B.length===0?B:[])}}async function cB(_){let{currentChatJid:$,activeChatJidRef:j,getAgentContext:G,setContextUsage:Z}=_,X=$;try{let Y=G4(await G(X));if(j.current!==X)return;if(Y&&Y.percent!=null)Z((V)=>u4(V,Y)?V:Y),C5(X,Y)}catch(Y){if(j.current!==X)return;console.warn("Failed to fetch agent context:",Y)}}async function hB(_){let{currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:G,setExtensionStatusPanels:Z,setPendingExtensionPanelActions:X}=_,Y=$;try{let V=await G(Y);if(j.current!==Y)return;Z((Q)=>PB(Q,V)),X((Q)=>u8(Q,"autoresearch"))}catch(V){if(j.current!==Y)return;console.warn("Failed to fetch autoresearch status:",V)}}function lB(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshQueueState:Z,refreshContextUsage:X,refreshAutoresearchStatus:Y}=_;$(),j(),G(),Z(),X(),Y()}function pB(_){let{viewStateRef:$,refreshTimeline:j,refreshModelAndQueueState:G}=_;if(a1($.current))j();G()}V6();var b8=new Map,v8=new Map,YM=250,rB=1500,nB=300000;function P5(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function VM(_,$){return`${_}:${$}`}function qM(_){for(let[$,j]of v8.entries())if(_-j>nB)v8.delete($)}function QM(_){for(let[$,j]of b8.entries()){if(j.inFlight)continue;if(!Number.isFinite(j.lastCompletedAt)||_-j.lastCompletedAt>nB)b8.delete($)}}function dB(_=P5()){qM(_),QM(_)}function oB(_){let{chatJid:$,nowMs:j=P5()}=_;if(!$)return;v8.set($,j),dB(j)}function f6(_,$=rB,j=P5()){if(!_)return!1;let G=v8.get(_);if(!Number.isFinite(G))return!1;return j-Number(G)<=$}async function A$(_){let{kind:$,chatJid:j,run:G,cooldownMs:Z=YM,activationWindowMs:X=rB,nowMs:Y=P5()}=_;dB(Y);let V=VM($,j),Q=b8.get(V)||{inFlight:null,lastCompletedAt:Number.NaN,lastValue:null};if(b8.set(V,Q),Q.inFlight)return await Q.inFlight;if(Boolean(w2("thread-switch",j)||f6(j,X,Y))&&Number.isFinite(Q.lastCompletedAt)&&Y-Q.lastCompletedAt<=Z)return Q.lastValue;let B=Promise.resolve().then(G).then((K)=>{return Q.lastCompletedAt=P5(),Q.lastValue=K??null,Q.inFlight=null,K}).catch((K)=>{throw Q.lastCompletedAt=P5(),Q.inFlight=null,K});return Q.inFlight=B,await B}function iB(_){let{serverVersion:$,currentAppAssetVersion:j,staleUiVersionRef:G,staleUiReloadScheduledRef:Z,tabStoreHasUnsaved:X,isAgentRunningRef:Y,pendingRequestRef:V,showIntentToast:Q}=_,q=typeof $==="string"&&$.trim()?$.trim():null;if(!q||!j||q===j)return!1;if(G.current===q)return!0;G.current=q;let B=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!X()&&!B&&!Y.current&&!V.current&&!Z.current);return Q("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0}function uj(_){let{currentHashtag:$,searchQuery:j,searchOpen:G}=_||{};return!$&&!j&&!G}function sB(_){let{currentChatJid:$,status:j,setConnectionStatus:G,setAgentStatus:Z,setAgentDraft:X,setAgentPlan:Y,setAgentThought:V,setPendingRequest:Q,pendingRequestRef:q,clearAgentRunState:B,hasConnectedOnceRef:K,viewStateRef:N,refreshTimeline:L,refreshAgentStatus:U,refreshQueueState:E,refreshContextUsage:H}=_;if(G(j),j!=="connected"){Z(null),X({text:"",totalLines:0}),Y(""),V({text:"",totalLines:0}),Q(null),q.current=null,B();return}if(!K.current){if(K.current=!0,Z(null),X({text:"",totalLines:0}),Y(""),V({text:"",totalLines:0}),Q(null),q.current=null,B(),f6($))return;if(uj(N.current))L();U(),E(),H();return}if(uj(N.current))L();U(),E(),H()}function aB(_){let{viewStateRef:$,isAgentActive:j,refreshTimeline:G,refreshQueueState:Z,refreshAgentStatus:X,refreshContextUsage:Y,refreshAutoresearchStatus:V}=_,Q=uj($.current);if(j){if(Q)G();Z(),X(),Y(),V();return}if(Q)G();X(),Y(),V()}function KM(_){return Math.min(1000,Math.max(100,Math.floor(_/2)))}function tB(_){let{currentChatJid:$,activeChatJidRef:j,queueRefreshGenRef:G,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:V,getAgentContext:Q,setContextUsage:q,getAutoresearchStatus:B,setExtensionStatusPanels:K,setPendingExtensionPanelActions:N,getAgentStatus:L,wasAgentActiveRef:U,viewStateRef:E,refreshTimeline:H,clearAgentRunState:D,agentStatusRef:M,pendingRequestRef:z,thoughtBufferRef:O,draftBufferRef:x,setAgentStatus:I,setAgentDraft:J,setAgentPlan:k,setAgentThought:W,setPendingRequest:T,setActiveTurn:w,noteAgentActivity:A,clearLastActivityFlag:P,isAgentRunningRef:R,currentTurnIdRef:b,silentRecoveryRef:c,silenceRefreshMs:r,lastAgentEventRef:e,lastSilenceNoticeRef:m,silenceWarningMs:_0,silenceFinalizeMs:E0,isCompactionStatus:Z0,serverVersionContext:j0,setConnectionStatus:V0,setStateAccessFailed:N0,setPendingRequestForConnection:h,hasConnectedOnceRef:$0}=_,Q0=f(()=>{return A$({kind:"queue-state",chatJid:$,run:async()=>{return await mB({currentChatJid:$,queueRefreshGenRef:G,activeChatJidRef:j,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:V}),null}})},[j,V,$,Z,X,G,Y]),O0=f(async()=>{await A$({kind:"context-usage",chatJid:$,run:async()=>{return await cB({currentChatJid:$,activeChatJidRef:j,getAgentContext:Q,setContextUsage:q}),null}})},[j,$,Q,q]),a=f(async()=>{await A$({kind:"autoresearch-status",chatJid:$,run:async()=>{return await hB({currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:B,setExtensionStatusPanels:K,setPendingExtensionPanelActions:N}),null}})},[j,$,B,K,N]),X0=f(async()=>{return await A$({kind:"agent-status",chatJid:$,run:async()=>{return await KB({currentChatJid:$,getAgentStatus:L,activeChatJidRef:j,wasAgentActiveRef:U,viewStateRef:E,refreshTimeline:H,clearAgentRunState:D,agentStatusRef:M,pendingRequestRef:z,thoughtBufferRef:O,draftBufferRef:x,setAgentStatus:I,setAgentDraft:J,setAgentPlan:k,setAgentThought:W,setPendingRequest:T,setActiveTurn:w,noteAgentActivity:A,clearLastActivityFlag:P,onStateAccessResult:N0})}})},[j,M,D,P,$,x,L,A,z,H,w,J,k,I,W,T,N0,O,E,U]),W0=f(async()=>{return await BB({isAgentRunningRef:R,pendingRequestRef:z,currentTurnIdRef:b,silentRecoveryRef:c,silenceRefreshMs:r,viewStateRef:E,refreshTimeline:H,refreshQueueState:Q0,refreshAgentStatus:X0})},[b,R,z,X0,Q0,H,r,c,E]);g(()=>{let u0=KM(_0),G_=setInterval(()=>{LB({isAgentRunningRef:R,pendingRequestRef:z,lastAgentEventRef:e,lastSilenceNoticeRef:m,agentStatusRef:M,silenceWarningMs:_0,silenceFinalizeMs:E0,silenceRefreshMs:r,isCompactionStatus:Z0,setAgentStatus:I,reconcileSilentTurn:W0})},u0);return()=>clearInterval(G_)},[M,R,Z0,e,m,z,W0,I,E0,r,_0]);let P0=f((u0)=>{return iB({serverVersion:u0,...j0})},[j0]),l0=f((u0)=>{if(u0==="connected")N0(!1);sB({currentChatJid:$,status:u0,setConnectionStatus:V0,setAgentStatus:I,setAgentDraft:J,setAgentPlan:k,setAgentThought:W,setPendingRequest:h,pendingRequestRef:z,clearAgentRunState:D,hasConnectedOnceRef:$0,viewStateRef:E,refreshTimeline:H,refreshAgentStatus:X0,refreshQueueState:Q0,refreshContextUsage:O0})},[D,$,$0,z,X0,O0,Q0,H,J,k,I,W,V0,h,N0,E]);return{refreshQueueState:Q0,refreshContextUsage:O0,refreshAutoresearchStatus:a,refreshAgentStatus:X0,handleUiVersionDrift:P0,handleConnectionStatusChange:l0}}k0();function S6(_){return typeof _==="string"}function g6(_){return typeof _==="string"&&_.trim().length>0}function m8(_){if(!g6(_))return 0;let $=Date.parse(_);return Number.isFinite($)?$:0}function bj(_){if(!Array.isArray(_))return[];return _.filter(($)=>g6($?.chat_jid)&&g6($?.agent_name))}function eB(_){if(!Array.isArray(_))return[];return _.filter(($)=>S6($?.chat_jid)&&S6($?.agent_name))}function _L(_,$,j){if(!Array.isArray($)||$.length===0)return Array.isArray(_)?_:[];let G=new Map;if(Array.isArray(_)){for(let Y of _)if(S6(Y?.chat_jid))G.set(Y.chat_jid,Y)}let Z=$.map((Y)=>{if(!S6(Y?.chat_jid))return Y;let V=G.get(Y.chat_jid);return V?{...Y,...V,is_active:V.is_active??Y.is_active}:Y}),X=S6(j)?j:"";return Z.sort((Y,V)=>{if(Y.chat_jid===X&&V.chat_jid!==X)return-1;if(V.chat_jid===X&&Y.chat_jid!==X)return 1;let Q=Boolean(Y.archived_at),q=Boolean(V.archived_at);if(Q!==q)return Q?1:-1;if(Boolean(Y.is_active)!==Boolean(V.is_active))return Y.is_active?-1:1;let B=m8(Y.updated_at)||m8(Y.created_at),K=m8(V.updated_at)||m8(V.created_at);if(B!==K)return K-B;let N=g6(Y.agent_name)?Y.agent_name.trim():"",L=g6(V.agent_name)?V.agent_name.trim():"",U=N.localeCompare(L,void 0,{sensitivity:"base"});if(U!==0)return U;return String(Y.chat_jid).localeCompare(String(V.chat_jid))}),Z}var BM={hasModel:!1,model:void 0,hasThinkingLevel:!1,thinkingLevel:null,thinkingLevelLabel:null,hasSupportsThinking:!1,supportsThinking:!1,hasProviderUsage:!1,providerUsage:null};function $L(_){if(!_||typeof _!=="object")return BM;let $=_.model??_.current;return{hasModel:$!==void 0,model:$,hasThinkingLevel:_.thinking_level!==void 0,thinkingLevel:_.thinking_level??null,thinkingLevelLabel:_.thinking_level_label??_.thinking_level??null,hasSupportsThinking:_.supports_thinking!==void 0,supportsThinking:Boolean(_.supports_thinking),hasProviderUsage:_.provider_usage!==void 0,providerUsage:_.provider_usage??null}}function jL(_){let j=(Array.isArray(_)?_:[]).find((G)=>G?.id==="default");return{name:j?.name,avatarUrl:j?.avatar_url}}function GL(_,$){if(!_||typeof _!=="object")return null;let j=_.agent_id;if(!j)return null;let G=String(j),Z=_.agent_name,X=_.agent_avatar;if(!Z&&X===void 0)return null;let Y=$||{id:G},V=Y.name||null,Q=Y.avatar_url??Y.avatarUrl??Y.avatar??null,q=!1,B=!1;if(Z&&Z!==Y.name)V=Z,q=!0;if(X!==void 0){let K=typeof X==="string"?X.trim():null,N=typeof Q==="string"?Q.trim():null,L=K||null;if(L!==(N||null))Q=L,B=!0}if(!q&&!B)return null;return{agentId:G,nameChanged:q,avatarChanged:B,resolvedName:V,resolvedAvatar:Q}}function ZL(_,$){let j=typeof $?.name==="string"&&$.name.trim()?$.name.trim():"You",G=typeof $?.avatar_url==="string"?$.avatar_url.trim():null,Z=typeof $?.avatar_background==="string"&&$.avatar_background.trim()?$.avatar_background.trim():null;if(_.name===j&&_.avatar_url===G&&_.avatar_background===Z)return _;return{name:j,avatar_url:G,avatar_background:Z}}function XL(_,$){if(!$||typeof $!=="object")return _;let j=$.user_name??$.userName,G=$.user_avatar??$.userAvatar,Z=$.user_avatar_background??$.userAvatarBackground;if(j===void 0&&G===void 0&&Z===void 0)return _;let X=typeof j==="string"&&j.trim()?j.trim():_.name||"You",Y=G===void 0?_.avatar_url:typeof G==="string"&&G.trim()?G.trim():null,V=Z===void 0?_.avatar_background:typeof Z==="string"&&Z.trim()?Z.trim():null;if(_.name===X&&_.avatar_url===Y&&_.avatar_background===V)return _;return{name:X,avatar_url:Y,avatar_background:V}}async function VL(_){let{getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z}=_;try{let X=await $();j(VY(X));let Y=X?.user||{};G((Q)=>ZL(Q,Y));let V=jL(X?.agents);Z(V.name,V.avatarUrl)}catch(X){console.warn("Failed to load agents:",X)}}function qL(_){let{payload:$,agentsRef:j,setAgents:G,applyBranding:Z}=_,X=GL($,$?.agent_id?j.current?.[String($.agent_id)]||{id:String($.agent_id)}:null);if(!X)return;if(G((Y)=>{let Q={...Y[X.agentId]||{id:X.agentId}};if(X.nameChanged)Q.name=X.resolvedName;if(X.avatarChanged)Q.avatar_url=X.resolvedAvatar;return{...Y,[X.agentId]:Q}}),X.agentId==="default")Z(X.resolvedName,X.resolvedAvatar,X.avatarChanged?Date.now():null)}function QL(_){let{payload:$,setUserProfile:j}=_;j((G)=>XL(G,$))}function YL(_,$){if(Object.is(_,$))return!0;try{return JSON.stringify(_)===JSON.stringify($)}catch{return!1}}function KL(_){let{payload:$,setActiveModel:j,setActiveThinkingLevel:G,setSupportsThinking:Z,setActiveModelUsage:X,setAgentModelsPayload:Y,setHasLoadedAgentModels:V}=_;if($&&typeof $==="object")Y?.((q)=>YL(q,$)?q:$),V?.(!0);let Q=$L($);if(Q.hasModel)j((q)=>Object.is(q,Q.model)?q:Q.model);if(Q.hasThinkingLevel){let q=Q.thinkingLevelLabel??Q.thinkingLevel;G((B)=>Object.is(B,q)?B:q)}if(Q.hasSupportsThinking)Z((q)=>q===Q.supportsThinking?q:Q.supportsThinking);if(Q.hasProviderUsage)X((q)=>YL(q,Q.providerUsage)?q:Q.providerUsage)}async function BL(_){let{currentChatJid:$,getActiveChatAgents:j,getChatBranches:G,activeChatJidRef:Z,setActiveChatAgents:X}=_,Y=$;try{let[V,Q]=await Promise.all([j().catch(()=>({chats:[]})),G(null,{includeArchived:!0}).catch(()=>({chats:[]}))]);if(Z.current!==Y)return[];let q=bj(V?.chats),B=bj(Q?.chats),K=_L(q,B,Y);return X(K),K}catch{if(Z.current!==Y)return[];return X([]),[]}}async function LL(_){let{currentRootChatJid:$,getChatBranches:j,setCurrentChatBranches:G}=_;try{let Z=await j($);G(eB(Z?.chats))}catch{G([])}}function NL(_){let{response:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshContextUsage:Z,refreshAutoresearchStatus:X,refreshQueueState:Y}=_;if(!$||typeof $!=="object")return;if(j(),G(),Z(),X(),yB($))Y()}function FL(_){let{readStoredNumber:$,sidebarWidthRef:j,shellElement:G,minWidth:Z=160,maxWidth:X=600,fallbackWidth:Y=280}=_,V=$("sidebarWidth",null),Q=Number.isFinite(V)?Math.min(Math.max(Number(V),Z),X):Y;if(j.current=Q,G)G.style.setProperty("--sidebar-width",`${Q}px`);return Q}async function UL(_){let{currentHashtag:$,searchQuery:j,searchScope:G,currentChatJid:Z,currentRootChatJid:X,loadPosts:Y,searchPosts:V,setPosts:Q,setHasMore:q,scrollToBottom:B,isCancelled:K,scheduleRaf:N=(O)=>{if(typeof requestAnimationFrame==="function"){requestAnimationFrame(O);return}setTimeout(O,0)},scheduleTimeout:L=(O,x)=>{setTimeout(O,x)},onTimelineLoadStart:U,onTimelineDataReady:E,onTimelineFirstPaint:H,onTimelineError:D}=_,M=(O)=>{if(K())return;N(()=>{if(K())return;N(()=>{if(K())return;H?.(O)})})},z=()=>{if(K())return;N(()=>{if(K())return;L(()=>{if(K())return;B()},0)})};if($){U?.({mode:"hashtag",hashtag:$});try{if(await Y($),K())return;E?.({mode:"hashtag",hashtag:$}),M({mode:"hashtag"})}catch(O){if(K())return;throw D?.(O,{mode:"hashtag",hashtag:$}),O}return}if(j){U?.({mode:"search",searchQuery:j,searchScope:G});try{let O=await V(j,50,0,Z,G,X);if(K())return;Q(Array.isArray(O?.results)?O.results:[]),q(!1),E?.({mode:"search",resultCount:Array.isArray(O?.results)?O.results.length:0}),M({mode:"search"})}catch(O){if(K())return;D?.(O,{mode:"search",searchQuery:j,searchScope:G}),console.error("Failed to search:",O),Q([]),q(!1)}return}U?.({mode:"timeline"});try{if(await Y(),K())return;E?.({mode:"timeline"}),M({mode:"timeline"}),z()}catch(O){if(K())return;D?.(O,{mode:"timeline"}),console.error("Failed to load timeline:",O)}}V6();M_();function LM(_){let{refreshModelAndQueueState:$,refreshModelState:j,refreshActiveChatAgents:G,refreshCurrentChatBranches:Z,refreshQueueState:X,runImmediately:Y=!0,intervalMs:V=60000,scheduleInterval:Q=(K,N)=>setInterval(K,N),clearScheduledInterval:q=(K)=>clearInterval(K)}=_;if(Y)$();let B=Q(()=>{j(),G(),Z(),X()},V);return()=>{q(B)}}function NM(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshQueueState:Z,refreshContextUsage:X,refreshAutoresearchStatus:Y,prewarmLimit:V=5}=_;$(),j({prewarmRecent:!0,prewarmLimit:V}),G(),Z(),X(),Y()}function FM(_){let $=OB(_.chats,_.currentChatJid,_.prewarmLimit??5);if($.length===0)return;zB({chatJids:$,fetchTimeline:_.fetchTimeline??((j)=>p$(10,null,j))})}function DL(_){let{getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z,readStoredNumber:X,sidebarWidthRef:Y,appShellRef:V,currentChatJid:Q,currentRootChatJid:q,getAgentModels:B,getAgentContext:K,getActiveChatAgents:N,getChatBranches:L,activeChatJidRef:U,setActiveChatAgents:E,setCurrentChatBranches:H,setActiveModel:D,setActiveThinkingLevel:M,setSupportsThinking:z,setActiveModelUsage:O,setAgentModelsPayload:x,setHasLoadedAgentModels:I,agentsRef:J,refreshQueueState:k,refreshContextUsage:W,refreshAutoresearchStatus:T,setContextUsage:w,setExtensionWorkingState:A}=_,P=f(async()=>{await VL({getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z})},[Z,$,j,G]);g(()=>{P(),FL({readStoredNumber:X,sidebarWidthRef:Y,shellElement:V.current,maxWidth:H6(Number.POSITIVE_INFINITY)})},[V,P,X,Y]);let R=f((j0)=>{KL({payload:j0,setActiveModel:D,setActiveThinkingLevel:M,setSupportsThinking:z,setActiveModelUsage:O,setAgentModelsPayload:x,setHasLoadedAgentModels:I})},[D,O,M,x,I,z]),b=f(()=>w2("thread-switch",Q),[Q]),c=f(()=>{return A$({kind:"model-state",chatJid:Q,run:async()=>{let j0=b();if(j0)X1(j0,"runtime-hydration-start",{phase:"model-state"});let V0=Q;try{let[h,$0]=await Promise.all([(async()=>{let O0=j0||b();if(O0)X1(O0,"model-request-start",{chatJid:V0});let a=await B(V0);if(O0)X1(O0,"model-request-ready",{chatJid:V0,hasCurrent:Boolean(a?.current),modelCount:Array.isArray(a?.models)?a.models.length:0});return a})(),K(V0).catch(()=>null)]);if(U.current&&U.current!==V0)return null;R(h);let Q0=G4($0);if(Q0&&Q0.percent!=null)w((O0)=>u4(O0,Q0)?O0:Q0),C5(V0,Q0)}catch{if(U.current&&U.current!==V0)return null;R(null)}let N0=j0||b();if(N0)X1(N0,"runtime-hydration-ready",{chatJid:Q}),y2(N0,["runtime-hydration-ready","timeline-first-paint"],"settled",{chatJid:Q});return null}})},[U,R,Q,K,B,b,w]);g(()=>{oB({chatJid:Q}),D(null),M(null),z(!1),O(null),I(!1),x(null),A({message:null,indicator:null,visible:!0});let j0=vB(Q);if(j0)w(j0);else w(null);c()},[Q,c,D,O,M,x,w,A,I,z]);let r=f((j0)=>{qL({payload:j0,agentsRef:J,setAgents:j,applyBranding:Z})},[J,Z,j]),e=f((j0)=>{QL({payload:j0,setUserProfile:G})},[G]),m=f((j0)=>{let V0=Boolean(j0?.prewarmRecent),N0=Number.isFinite(j0?.prewarmLimit)?Number(j0?.prewarmLimit):5;return A$({kind:"active-chat-agents",chatJid:Q,run:async()=>{let h=b(),$0=await BL({currentChatJid:Q,getActiveChatAgents:async()=>{if(h)X1(h,"active-chat-list-request-start",{chatJid:Q});let Q0=await N(Q);if(h)X1(h,"active-chat-list-request-ready",{rowCount:Array.isArray(Q0?.chats)?Q0.chats.length:0});return Q0},getChatBranches:async(Q0,O0)=>{if(h)X1(h,"branch-list-request-start",{rootChatJid:Q0});let a=await L(Q0,O0);if(h)X1(h,"branch-list-request-ready",{rootChatJid:Q0,rowCount:Array.isArray(a?.chats)?a.chats.length:0});return a},activeChatJidRef:U,setActiveChatAgents:E});if(V0)FM({chats:$0,currentChatJid:Q,prewarmLimit:N0});return null}})},[U,Q,N,L,b,E]),_0=f(()=>{return A$({kind:"current-chat-branches",chatJid:Q,run:async()=>{let j0=b();return await LL({currentRootChatJid:q,getChatBranches:async(V0,N0)=>{if(j0)X1(j0,"root-branch-request-start",{rootChatJid:V0});let h=await L(V0,N0);if(j0)X1(j0,"root-branch-request-ready",{rootChatJid:V0,rowCount:Array.isArray(h?.chats)?h.chats.length:0});return h},setCurrentChatBranches:H}),null}})},[Q,q,L,b,H]),E0=f(()=>{lB({refreshModelState:c,refreshActiveChatAgents:m,refreshCurrentChatBranches:_0,refreshQueueState:k,refreshContextUsage:W,refreshAutoresearchStatus:T})},[m,T,W,_0,c,k]),Z0=f(()=>{NM({refreshModelState:c,refreshActiveChatAgents:m,refreshCurrentChatBranches:_0,refreshQueueState:k,refreshContextUsage:W,refreshAutoresearchStatus:T,prewarmLimit:5})},[m,T,W,_0,c,k]);return g(()=>LM({refreshModelAndQueueState:E0,refreshModelState:c,refreshActiveChatAgents:m,refreshCurrentChatBranches:_0,refreshQueueState:k,runImmediately:!1}),[m,_0,E0,c,k]),g(()=>{let j0=setInterval(()=>{c()},5000);return()=>clearInterval(j0)},[c]),{updateAgentProfile:r,updateUserProfile:e,applyModelState:R,refreshModelState:c,refreshActiveChatAgents:m,refreshCurrentChatBranches:_0,refreshModelAndQueueState:E0,refreshPostPaintThreadState:Z0}}k0();function UM(_,$){let j=N1(_);return Boolean(_&&j===$)}function R5(_,$,j){if(!UM(_,$))return _;return{..._,runtimeState:{..._?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:{},...j}}}function HL(_,$){return{..._,openedAt:$}}function EL(_){let $=N1(_);return{nextWidget:null,dismissedSessionKey:_?.source==="live"&&$?$:null}}function WL(_,$,j){let G=qq({...$,...$&&$.status?{}:{status:j.fallbackStatus||"streaming"}});if(!G)return _;let Z=N1(G);if(Z&&j.dismissedSessionKeys?.has(Z))return _;let X=N1(_),Y=Boolean(Z&&X&&Z===X),V={...Y&&_?.artifact?_.artifact:{},...G.artifact||{}};return{...Y&&_?_:{},...G,artifact:V,source:"live",originChatJid:G.originChatJid||j.currentChatJid,openedAt:Y&&_?.openedAt?_.openedAt:j.updatedAt,liveUpdatedAt:j.updatedAt}}function OL(_,$){if(!_||_?.source!=="live")return _||null;let j=N1($),G=N1(_);if(j&&G&&j!==G)return _;return null}function zL(_,$,j){return R5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,lastSubmitAt:j.submittedAt,lastHostUpdate:{type:"submit_pending",submittedAt:j.submittedAt,preview:j.submissionText||null}})}function vj(_,$,j){if(j.errorMessage)return R5(_,$,{lastHostUpdate:{type:"submit_failed",submittedAt:j.submittedAt,preview:j.submissionText,error:j.errorMessage}});return R5(_,$,{lastHostUpdate:{type:j.queued==="followup"?"submit_queued":"submit_sent",submittedAt:j.submittedAt,preview:j.submissionText,queued:j.queued||null}})}function JL(_,$,j){return R5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,...j.kind==="widget.ready"?{readyAt:j.eventAt,lastHostUpdate:{type:"ready_ack",at:j.eventAt}}:{},...j.kind==="widget.request_refresh"?{lastRefreshRequestAt:j.eventAt,refreshCount:j.nextRefreshCount,lastHostUpdate:{type:j.shouldBuildDashboard?"refresh_building":"refresh_ack",at:j.eventAt,count:j.nextRefreshCount,echo:j.payload||null}}:{}})}function AL(_,$,j){return R5(_,$,{dashboard:j.dashboard,lastHostUpdate:{type:"refresh_dashboard",at:j.at,count:j.count,echo:j.echo||null}})}function kL(_,$,j){return R5(_,$,{lastHostUpdate:{type:"refresh_failed",at:j.at,count:j.count,error:j.errorMessage}})}V6();function DM(_){let{setExtensionStatusPanels:$,setPendingExtensionPanelActions:j,setExtensionWorkingState:G}=_;$(new Map),j(new Set),G({message:null,indicator:null,visible:!0})}function ML(_){let{refreshAgentStatus:$,refreshPostPaintThreadState:j}=_;j(),$()}function TL(_){let{currentChatJid:$,currentRootChatJid:j,currentHashtag:G,searchQuery:Z,searchScope:X,loadPosts:Y,searchPosts:V,setPosts:Q,setHasMore:q,scrollToBottom:B,setExtensionStatusPanels:K,setPendingExtensionPanelActions:N,setExtensionWorkingState:L,paneStateOwnerChatJidRef:U,chatPaneStateByChatRef:E,snapshotCurrentChatPaneState:H,restoreChatPaneState:D,dismissedQueueRowIdsRef:M,refreshAgentStatus:z,viewStateRef:O,refreshTimeline:x,refreshModelAndQueueState:I,refreshPostPaintThreadState:J,setFloatingWidget:k,dismissedLiveWidgetKeysRef:W}=_;g(()=>{DM({setExtensionStatusPanels:K,setPendingExtensionPanelActions:N,setExtensionWorkingState:L})},[$,K,N,L]),g(()=>{let A=!1,P=OX("thread-switch",$,{currentRootChatJid:j,currentHashtag:G||null,searchQuery:Z||null,searchScope:X});return X1(P,"route-effect-start",{currentChatJid:$,currentRootChatJid:j}),UL({currentHashtag:G,searchQuery:Z,searchScope:X,currentChatJid:$,currentRootChatJid:j,loadPosts:Y,searchPosts:V,setPosts:Q,setHasMore:q,scrollToBottom:B,isCancelled:()=>A,onTimelineLoadStart:(R)=>{X1(P,"timeline-load-start",R||null)},onTimelineDataReady:(R)=>{X1(P,"timeline-data-ready",R||null)},onTimelineFirstPaint:(R)=>{X1(P,"timeline-first-paint",R||null),y2(P,["runtime-hydration-ready","timeline-first-paint"],"settled",R||null),ML({refreshAgentStatus:z,refreshPostPaintThreadState:J})},onTimelineError:(R,b)=>{zX(P,R,"timeline-load-failed",b||null),ML({refreshAgentStatus:z,refreshPostPaintThreadState:J})}}),()=>{A=!0,JX(P,"route-effect-cancelled",{currentChatJid:$})}},[$,G,Z,X,j,Y,B,V,q,Q,z,J]),g(()=>{let A=U.current||$;E.current.set(A,H())},[E,$,U,H]),g(()=>{let A=U.current||$;if(A===$)return;E.current.set(A,H()),U.current=$,M.current.clear(),D(E.current.get($)||null)},[E,$,M,U,D,H]);let T=f(()=>{pB({viewStateRef:O,refreshTimeline:x,refreshModelAndQueueState:I})},[I,x,O]),w=f((A,P="streaming")=>{let R=new Date().toISOString();k((b)=>WL(b,A,{fallbackStatus:P,currentChatJid:$,dismissedSessionKeys:W.current,updatedAt:R}))},[$,W,k]);return{refreshCurrentView:T,applyLiveGeneratedWidgetUpdate:w}}k0();k0();M_();function HM({sse:_,onWake:$},j={}){let G=j.window??(typeof window<"u"?window:null),Z=j.document??(typeof document<"u"?document:null);if(!G||!Z||!_)return()=>{};let X=()=>{if(typeof _.forceReconnect==="function"){_.forceReconnect();return}_.reconnectIfNeeded()},Y=typeof j.useFocusReconnect==="boolean"?j.useFocusReconnect:!W6(),V=Z.visibilityState&&Z.visibilityState!=="visible",Q=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return V=!0,!0;return!1},q=()=>{if(Q())return;if(V)V=!1,X(),$?.()},B=()=>{if(Q())return;if(V){q();return}if(Y)_.reconnectIfNeeded()},K=()=>{q()},N=()=>{q()};return G.addEventListener("focus",B),G.addEventListener("pageshow",K),Z.addEventListener("visibilitychange",N),()=>{G.removeEventListener("focus",B),G.removeEventListener("pageshow",K),Z.removeEventListener("visibilitychange",N)}}function wL({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:G,chatJid:Z}){let X=u(_);X.current=_;let Y=u($);Y.current=$;let V=u(j);V.current=j;let Q=u(G);Q.current=G,g(()=>{let q=new S2((K,N)=>X.current(K,N),(K)=>Y.current(K),{chatJid:Z});q.connect();let B=HM({sse:q,onWake:()=>Q.current?.()});return()=>{B(),q.disconnect()}},[Z])}$6();l2();function b4(_,$){return Boolean(_)&&Boolean($)&&_!==$}function f5(_,$){return Boolean(_)&&!Boolean($)}function yL(_,$){return _||$||null}function IL(_){switch(_){case"generated_widget_open":return{kind:"update",fallbackStatus:"loading",shouldAdoptTurn:!0};case"generated_widget_delta":return{kind:"update",fallbackStatus:"streaming",shouldAdoptTurn:!0};case"generated_widget_final":return{kind:"update",fallbackStatus:"final",shouldAdoptTurn:!0};case"generated_widget_error":return{kind:"update",fallbackStatus:"error",shouldAdoptTurn:!1};case"generated_widget_close":return{kind:"close",fallbackStatus:null,shouldAdoptTurn:!1};default:return{kind:null,fallbackStatus:null,shouldAdoptTurn:!1}}}function S5(_,$){let j=$?.row_id??$?.id;if(j==null||typeof j!=="string"&&typeof j!=="number")return null;let G=j4(_,j);return{rowId:j,items:G.items,remainingQueueCount:G.remainingQueueCount}}function mj(_){if(_==="steer")return{title:"Failed to steer message",detail:"The queued message could not be sent as steering."};return{title:"Failed to remove message",detail:"The queued message could not be removed."}}function EM(_,$){return typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():$}function xL(_,$,j){return{isStatusPanelWidgetEvent:_==="extension_ui_widget"&&$?.options?.surface==="status-panel",eventChatJid:EM($,j),panelKey:typeof $?.key==="string"?$.key:""}}function WM(_,$){if(_!=="extension_ui_working_indicator")return;if(!Array.isArray($?.frames))return{mode:"default",frames:[],intervalMs:null};let j=$.frames.filter((X)=>typeof X==="string"),G=$.interval_ms??$.intervalMs,Z=typeof G==="number"&&Number.isFinite(G)&&G>0?G:null;if(j.length===0)return{mode:"hidden",frames:[],intervalMs:Z};return{mode:"custom",frames:j,intervalMs:Z}}function CL(_,$,j){if($==="extension_ui_working_visible"){let Z=j?.visible!==!1;if(Z===_.visible)return;return{..._,visible:Z}}if($==="extension_ui_working")return{message:typeof j?.message==="string"&&j.message.trim()?j.message.trim():null,indicator:_.indicator,visible:_.visible};if($==="extension_ui_status"){if(j?.key==="context_usage")return;return{message:typeof j?.text==="string"&&j.text.trim()?j.text.trim():null,indicator:_.indicator,visible:_.visible}}let G=WM($,j);if(G===void 0)return;return{message:_.message,indicator:G,visible:_.visible}}function PL(_,$){if(_!=="extension_ui_status")return null;if($?.key!=="context_usage")return null;let j=typeof $?.text==="string"?$.text.trim():"";if(!j)return null;try{let G=JSON.parse(j);if(!G||typeof G!=="object")return null;let Z=G,X=Z.tokens==null?null:Number(Z.tokens),Y=Z.contextWindow==null?null:Number(Z.contextWindow),V=Z.percent==null?null:Number(Z.percent);return{tokens:Number.isFinite(X)?X:null,contextWindow:Number.isFinite(Y)?Y:null,percent:Number.isFinite(V)?V:null,estimated:Z.estimated===!0,source:typeof Z.source==="string"?Z.source:null,phase:typeof Z.phase==="string"?Z.phase:null}}catch{return null}}function RL(_,$){if(_==="extension_ui_notify"&&typeof $?.message==="string")return{title:$.message,detail:null,kind:typeof $?.type==="string"&&$.type.trim()?$.type:"info"};if(_==="extension_ui_error"){let j=$?.error;return{title:"Extension UI error",detail:typeof j==="string"?j:j&&typeof j==="object"&&typeof j.error==="string"?j.error:j?String(j):"Unknown extension error",kind:"error",durationMs:5000}}return null}var OM=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function fL(_){return OM.has(String(_||"").trim())}function zM(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function c8(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let G={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:G})),j.dispatchEvent(new CustomEvent(zM(_),{detail:G})),!0}function SL(_,$,j){let G=$?.turn_id,Z=$?.chat_jid,X=typeof Z==="string"&&Z.trim()?Z.trim():null,Y=_==="connected"||_==="workspace_update";return{turnId:G,eventChatJid:X,isGlobalUiEvent:Y,isCurrentChatEvent:X?X===j:Y}}function gL(_){return _==="agent_draft_delta"||_==="agent_thought_delta"||_==="agent_draft"||_==="agent_thought"}function uL(_,$,j){let{currentChatJid:G,updateAgentProfile:Z,updateUserProfile:X,currentTurnIdRef:Y,activeChatJidRef:V,pendingRequestRef:Q,draftBufferRef:q,thoughtBufferRef:B,previewResyncPendingRef:K,previewResyncGenerationRef:N,steerQueuedTurnIdRef:L,thoughtExpandedRef:U,draftExpandedRef:E,draftThrottleRef:H,thoughtThrottleRef:D,viewStateRef:M,followupQueueItemsRef:z,dismissedQueueRowIdsRef:O,scrollToBottomRef:x,hasMoreRef:I,loadMoreRef:J,lastAgentResponseRef:k,wasAgentActiveRef:W,setActiveTurn:T,applyLiveGeneratedWidgetUpdate:w,setFloatingWidget:A,clearLastActivityFlag:P,handleUiVersionDrift:R,setAgentStatus:b,setAgentDraft:c,setAgentPlan:r,setAgentThought:e,setPendingRequest:m,clearAgentRunState:_0,getAgentStatus:E0,noteAgentActivity:Z0,showLastActivity:j0,refreshTimeline:V0,refreshModelAndQueueState:N0,refreshActiveChatAgents:h,refreshCurrentChatBranches:$0,notifyForFinalResponse:Q0,setContextUsage:O0,refreshContextUsage:a,refreshQueueState:X0,setFollowupQueueItems:W0,clearQueuedSteerStateIfStale:P0,setSteerQueuedTurnId:l0,applyModelState:u0,getAgentContext:G_,setExtensionStatusPanels:h0,setPendingExtensionPanelActions:s0,setExtensionWorkingState:R0,refreshActiveEditorFromWorkspace:o0,showIntentToast:v0,removeStalledPost:t0,setPosts:i0,preserveTimelineScrollTop:F_,openEditor:Z_}=j,{turnId:m0,isCurrentChatEvent:z0}=SL(_,$,G);if(z0)Z($),X($);if(_==="ui_theme"){U5($);return}if(_==="ui_meters"){K9($);return}if(_==="ui_open_tab"){let D0=typeof $?.path==="string"?$.path.trim():"",g0=typeof $?.label==="string"?$.label.trim():void 0;if(D0==="piclaw://settings"){let x0=typeof $?.section==="string"?$.section.trim():"";window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:x0?{section:x0}:void 0}));return}if(D0&&typeof Z_==="function")Z_(D0,g0?{label:g0}:void 0);return}let V_=IL(_);if(V_.kind==="update"){if(!z0)return;if(V_.shouldAdoptTurn&&f5(m0,Y.current))T(m0);w($,V_.fallbackStatus||"streaming");return}if(V_.kind==="close"){if(!z0)return;A((D0)=>OL(D0,$));return}if(_?.startsWith("agent_")&&!gL(_))P();if(_==="connected"){if(R($?.app_asset_version))return;if($?.ui_theme){let x0=$.ui_theme.theme||"default",r0=$.ui_theme.tint||null;U5({theme:x0,tint:r0})}if($?.ui_meters)K9($.ui_meters);let D0=N.current+1;if(N.current=D0,K.current=!0,q.current="",B.current="",b(null),c({text:"",totalLines:0}),r(""),e({text:"",totalLines:0}),R0({message:null,indicator:null,visible:!0}),m(null),Q.current=null,_0(),f6(G)){if(N.current===D0)K.current=!1;return}let g0=G;if(E0(g0).then((x0)=>{if(V.current!==g0)return;if(!x0||x0.status!=="active"||!x0.data)return;let r0=x0.data,z_=R8(r0);if(z_)T(z_);b(r0),Z0({clearSilence:!0,atMs:n$(r0)??Date.now()}),j0(r0);let Q_=x5(x0.thought);if(Q_)B.current=Q_.text,e(Q_);let U_=x5(x0.draft);if(U_)q.current=U_.text,c(U_)}).catch((x0)=>{console.warn("Failed to fetch agent status:",x0)}).finally(()=>{if(N.current===D0)K.current=!1}),a1(M.current))V0();N0();return}if(_==="agent_status"){if(!z0){if($?.type==="done"||$?.type==="error")h(),$0();return}let D0=G4($.context_usage);if(D0&&D0.percent!=null)O0((g0)=>u4(g0,D0)?g0:D0),C5(G,D0);if($.type==="context_usage")return;if($.type==="done"||$.type==="error"){if(b4(m0,Y.current))return;if($.type==="done"){if(Q0(m0||Y.current),a1(M.current))V0()}if(a(),W.current=!1,_0(),O.current.clear(),h(),N0(),c({text:"",totalLines:0}),r(""),e({text:"",totalLines:0}),R0({message:null,indicator:null,visible:!0}),m(null),$.type==="error")b({type:"error",title:$.title||"Agent error"}),setTimeout(()=>b(null),8000);else b(null)}else{if(m0)T(m0);if(Z0({running:!0,clearSilence:!0,atMs:n$($)??Date.now()}),$.type==="thinking")q.current="",B.current="",c({text:"",totalLines:0}),r(""),e({text:"",totalLines:0});b($)}return}if(_==="agent_steer_queued"){if(!z0)return;if(b4(m0,Y.current))return;let D0=yL(m0,Y.current);if(!D0)return;L.current=D0,l0(D0);return}if(_==="agent_followup_queued"){if(!z0)return;W0((D0)=>wB(D0,$)),X0();return}if(_==="agent_followup_consumed"){if(!z0)return;let D0=S5(z.current,$);if(D0)P0(D0.remainingQueueCount),W0((g0)=>j4(g0,D0.rowId).items);if(X0(),a1(M.current))V0();return}if(_==="agent_followup_removed"){if(!z0)return;let D0=S5(z.current,$);if(D0)O.current.add(D0.rowId),P0(D0.remainingQueueCount),W0((g0)=>j4(g0,D0.rowId).items);X0();return}if(_==="agent_draft_delta"){if(!z0)return;if(K.current)return;if(b4(m0,Y.current))return;if(f5(m0,Y.current))T(m0);Z0({running:!0,clearSilence:!0}),q.current=ZB(q.current,$);let D0=Date.now();if(!H.current||D0-H.current>=100){H.current=D0;let g0=q.current;if(E.current)c((x0)=>Cj(g0,x0));else c(f8(g0,null))}return}if(_==="agent_draft"){if(!z0)return;if(K.current)return;if(b4(m0,Y.current))return;if(f5(m0,Y.current))T(m0);Z0({running:!0,clearSilence:!0});let D0=$.text||"",g0=$.mode||($.kind==="plan"?"replace":"append");if($.kind==="plan")r((x0)=>GB(x0,D0,g0));else if(!E.current)q.current=D0,c(f8(D0,$.total_lines));return}if(_==="agent_thought_delta"){if(!z0)return;if(K.current)return;if(b4(m0,Y.current))return;if(f5(m0,Y.current))T(m0);Z0({running:!0,clearSilence:!0}),B.current=XB(B.current,$);let D0=Date.now();if(U.current&&(!D.current||D0-D.current>=100)){D.current=D0;let g0=B.current;e((x0)=>Cj(g0,x0))}return}if(_==="agent_thought"){if(!z0)return;if(K.current)return;if(b4(m0,Y.current))return;if(f5(m0,Y.current))T(m0);Z0({running:!0,clearSilence:!0});let D0=$.text||"";if(!U.current)B.current=D0,e(f8(D0,$.total_lines));return}if(_==="model_changed"){if(!z0)return;u0($);let D0=G;G_(D0).then((g0)=>{if(V.current!==D0)return;let x0=G4(g0);if(x0&&x0.percent!=null)O0((r0)=>u4(r0,x0)?r0:x0),C5(D0,x0)}).catch(()=>{if(V.current!==D0)return});return}let d0=xL(_,$,G);if(d0.isStatusPanelWidgetEvent){if(d0.eventChatJid!==G)return;if(!d0.panelKey)return;if(h0((D0)=>RB(D0,$)),fB($))s0((D0)=>u8(D0,d0.panelKey));c8(_,$);return}if(_==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:$}));o0($?.updates);return}if(fL(_)){if(_==="extension_ui_title"){h(),$0(),c8(_,$);return}if(!z0)return;let D0=PL(_,$);if(D0&&D0.percent!=null)O0((x0)=>u4(x0,D0)?x0:D0);R0((x0)=>{return CL(x0,_,$)??x0}),c8(_,$);let g0=RL(_,$);if(g0)v0(g0.title,g0.detail,g0.kind,g0.durationMs);return}let H_=a1(M.current);if(_==="agent_response"){if(!z0)return;R0({message:null,indicator:null,visible:!0}),t0(),k.current={post:$,turnId:Y.current}}if(YB(_,z0,H_))i0((D0)=>VB(D0,$)),x.current?.();if(_==="interaction_updated"){if(!Pj(z0,H_))return;i0((D0)=>qB(D0,$))}if(_==="interaction_deleted"){if(!Pj(z0,H_))return;let D0=$?.ids||[];if(D0.length){if(F_(()=>{i0((g0)=>QB(g0,D0))}),I.current)J.current?.({preserveScroll:!0,preserveMode:"top"})}}}function JM(_){return _?15000:60000}function bL(_){let{currentChatJid:$,posts:j,scrollToMessage:G,handleConnectionStatusChange:Z,loadPosts:X,refreshCurrentView:Y,updateAgentProfile:V,updateUserProfile:Q,currentTurnIdRef:q,activeChatJidRef:B,pendingRequestRef:K,draftBufferRef:N,thoughtBufferRef:L,previewResyncPendingRef:U,previewResyncGenerationRef:E,steerQueuedTurnIdRef:H,thoughtExpandedRef:D,draftExpandedRef:M,draftThrottleRef:z,thoughtThrottleRef:O,viewStateRef:x,followupQueueItemsRef:I,dismissedQueueRowIdsRef:J,scrollToBottomRef:k,hasMoreRef:W,loadMoreRef:T,lastAgentResponseRef:w,wasAgentActiveRef:A,setActiveTurn:P,applyLiveGeneratedWidgetUpdate:R,setFloatingWidget:b,clearLastActivityFlag:c,handleUiVersionDrift:r,setAgentStatus:e,setAgentDraft:m,setAgentPlan:_0,setAgentThought:E0,setPendingRequest:Z0,clearAgentRunState:j0,getAgentStatus:V0,noteAgentActivity:N0,showLastActivity:h,refreshTimeline:$0,refreshModelAndQueueState:Q0,refreshActiveChatAgents:O0,refreshCurrentChatBranches:a,notifyForFinalResponse:X0,setContextUsage:W0,refreshContextUsage:P0,refreshQueueState:l0,setFollowupQueueItems:u0,clearQueuedSteerStateIfStale:G_,setSteerQueuedTurnId:h0,applyModelState:s0,getAgentContext:R0,setExtensionStatusPanels:o0,setPendingExtensionPanelActions:v0,setExtensionWorkingState:t0,refreshActiveEditorFromWorkspace:i0,showIntentToast:F_,removeStalledPost:Z_,setPosts:m0,preserveTimelineScrollTop:z0,openEditor:V_,finalizeStalledResponse:d0,connectionStatus:H_,agentStatus:D0,refreshAgentStatus:g0,refreshAutoresearchStatus:x0}=_,r0=f((Q_,U_)=>{uL(Q_,U_,{currentChatJid:$,updateAgentProfile:V,updateUserProfile:Q,currentTurnIdRef:q,activeChatJidRef:B,pendingRequestRef:K,draftBufferRef:N,thoughtBufferRef:L,previewResyncPendingRef:U,previewResyncGenerationRef:E,steerQueuedTurnIdRef:H,thoughtExpandedRef:D,draftExpandedRef:M,draftThrottleRef:z,thoughtThrottleRef:O,viewStateRef:x,followupQueueItemsRef:I,dismissedQueueRowIdsRef:J,scrollToBottomRef:k,hasMoreRef:W,loadMoreRef:T,lastAgentResponseRef:w,wasAgentActiveRef:A,setActiveTurn:P,applyLiveGeneratedWidgetUpdate:R,setFloatingWidget:b,clearLastActivityFlag:c,handleUiVersionDrift:r,setAgentStatus:e,setAgentDraft:m,setAgentPlan:_0,setAgentThought:E0,setPendingRequest:Z0,clearAgentRunState:j0,getAgentStatus:V0,noteAgentActivity:N0,showLastActivity:h,refreshTimeline:$0,refreshModelAndQueueState:Q0,refreshActiveChatAgents:O0,refreshCurrentChatBranches:a,notifyForFinalResponse:X0,setContextUsage:W0,refreshContextUsage:P0,refreshQueueState:l0,setFollowupQueueItems:u0,clearQueuedSteerStateIfStale:G_,setSteerQueuedTurnId:h0,applyModelState:s0,getAgentContext:R0,setExtensionStatusPanels:o0,setPendingExtensionPanelActions:v0,setExtensionWorkingState:t0,refreshActiveEditorFromWorkspace:i0,showIntentToast:F_,removeStalledPost:Z_,setPosts:m0,preserveTimelineScrollTop:z0,openEditor:V_})},[B,R,s0,j0,c,G_,$,q,J,N,M,z,I,R0,V0,r,W,w,T,N0,X0,K,z0,E,U,O0,i0,P0,a,Q0,l0,$0,Z_,k,P,m,_0,e,E0,W0,o0,t0,b,u0,v0,Z0,m0,h0,F_,h,H,L,D,O,V,Q,x,A,V_]);g(()=>{if(typeof window>"u")return;let Q_=window.__PICLAW_TEST_API||{};return Q_.emit=r0,Q_.reset=()=>{Z_(),j0(),e(null),m({text:"",totalLines:0}),_0(""),E0({text:"",totalLines:0}),t0({message:null,indicator:null,visible:!0}),Z0(null)},Q_.finalize=()=>d0(),window.__PICLAW_TEST_API=Q_,()=>{if(window.__PICLAW_TEST_API===Q_)window.__PICLAW_TEST_API=void 0}},[j0,d0,r0,Z_,m,_0,e,E0,t0,Z0]),wL({handleSseEvent:r0,handleConnectionStatusChange:Z,loadPosts:X,onWake:Y,chatJid:$}),g(()=>{if(!j||j.length===0)return;let Q_=location.hash;if(!Q_||!Q_.startsWith("#msg-"))return;let U_=Q_.slice(5);G(U_),history.replaceState(null,"",location.pathname+location.search)},[j,G]);let z_=D0!==null;g(()=>{if(H_!=="connected")return;let Q_=JM(z_),U_=setInterval(()=>{aB({viewStateRef:x,isAgentActive:z_,refreshTimeline:$0,refreshQueueState:l0,refreshAgentStatus:g0,refreshContextUsage:P0,refreshAutoresearchStatus:x0})},Q_);return()=>clearInterval(U_)},[H_,z_,g0,x0,P0,l0,$0,x]),g(()=>{return y8(()=>{g0(),P0(),l0(),x0()})},[g0,x0,P0,l0])}function AM(_){return{currentChatJid:_.currentChatJid,activeChatJidRef:_.activeChatJidRef,queueRefreshGenRef:_.queueRefreshGenRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,getAgentQueueState:_.getAgentQueueState,setFollowupQueueItems:_.setFollowupQueueItems,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,getAgentContext:_.getAgentContext,setContextUsage:_.setContextUsage,getAutoresearchStatus:_.getAutoresearchStatus,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,getAgentStatus:_.getAgentStatus,wasAgentActiveRef:_.wasAgentActiveRef,viewStateRef:_.viewStateRef,refreshTimeline:_.refreshTimeline,clearAgentRunState:_.clearAgentRunState,agentStatusRef:_.agentStatusRef,pendingRequestRef:_.pendingRequestRef,thoughtBufferRef:_.thoughtBufferRef,draftBufferRef:_.draftBufferRef,setAgentStatus:_.setAgentStatus,setAgentDraft:_.setAgentDraft,setAgentPlan:_.setAgentPlan,setAgentThought:_.setAgentThought,setPendingRequest:_.setPendingRequest,setActiveTurn:_.setActiveTurn,noteAgentActivity:_.noteAgentActivity,clearLastActivityFlag:_.clearLastActivityFlag,isAgentRunningRef:_.isAgentRunningRef,currentTurnIdRef:_.currentTurnIdRef,silentRecoveryRef:_.silentRecoveryRef,silenceRefreshMs:_.silenceRefreshMs,lastAgentEventRef:_.lastAgentEventRef,lastSilenceNoticeRef:_.lastSilenceNoticeRef,silenceWarningMs:_.silenceWarningMs,silenceFinalizeMs:_.silenceFinalizeMs,isCompactionStatus:_.isCompactionStatus,serverVersionContext:_.serverVersionContext,setConnectionStatus:_.setConnectionStatus,setStateAccessFailed:_.setStateAccessFailed,setPendingRequestForConnection:_.setPendingRequest,hasConnectedOnceRef:_.hasConnectedOnceRef}}function kM(_){return{getAgents:_.getAgents,setAgents:_.setAgents,setUserProfile:_.setUserProfile,applyBranding:_.applyBranding,readStoredNumber:_.readStoredNumber,sidebarWidthRef:_.sidebarWidthRef,appShellRef:_.appShellRef,currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,getAgentModels:_.getAgentModels,getAgentContext:_.getAgentContext,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,activeChatJidRef:_.activeChatJidRef,setActiveChatAgents:_.setActiveChatAgents,setCurrentChatBranches:_.setCurrentChatBranches,setActiveModel:_.setActiveModel,setActiveThinkingLevel:_.setActiveThinkingLevel,setSupportsThinking:_.setSupportsThinking,setActiveModelUsage:_.setActiveModelUsage,setAgentModelsPayload:_.setAgentModelsPayload,setHasLoadedAgentModels:_.setHasLoadedAgentModels,agentsRef:_.agentsRef,refreshQueueState:_.refreshQueueState,refreshContextUsage:_.refreshContextUsage,refreshAutoresearchStatus:_.refreshAutoresearchStatus,setContextUsage:_.setContextUsage,setExtensionWorkingState:_.setExtensionWorkingState}}function MM(_){return{currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,currentHashtag:_.currentHashtag,searchQuery:_.searchQuery,searchScope:_.searchScope,loadPosts:_.loadPosts,searchPosts:_.searchPosts,setPosts:_.setPosts,setHasMore:_.setHasMore,scrollToBottom:_.scrollToBottom,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,setExtensionWorkingState:_.setExtensionWorkingState,paneStateOwnerChatJidRef:_.paneStateOwnerChatJidRef,chatPaneStateByChatRef:_.chatPaneStateByChatRef,snapshotCurrentChatPaneState:_.snapshotCurrentChatPaneState,restoreChatPaneState:_.restoreChatPaneState,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,refreshQueueState:_.refreshQueueState,refreshAgentStatus:_.refreshAgentStatus,refreshContextUsage:_.refreshContextUsage,viewStateRef:_.viewStateRef,refreshTimeline:_.refreshTimeline,refreshModelAndQueueState:_.refreshModelAndQueueState,refreshPostPaintThreadState:_.refreshPostPaintThreadState,setFloatingWidget:_.setFloatingWidget,dismissedLiveWidgetKeysRef:_.dismissedLiveWidgetKeysRef}}function TM(_){return{currentChatJid:_.currentChatJid,posts:_.posts,scrollToMessage:_.scrollToMessage,handleConnectionStatusChange:_.handleConnectionStatusChange,loadPosts:_.loadPosts,refreshCurrentView:_.refreshCurrentView,updateAgentProfile:_.updateAgentProfile,updateUserProfile:_.updateUserProfile,currentTurnIdRef:_.currentTurnIdRef,activeChatJidRef:_.activeChatJidRef,pendingRequestRef:_.pendingRequestRef,draftBufferRef:_.draftBufferRef,thoughtBufferRef:_.thoughtBufferRef,previewResyncPendingRef:_.previewResyncPendingRef,previewResyncGenerationRef:_.previewResyncGenerationRef,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef,thoughtExpandedRef:_.thoughtExpandedRef,draftExpandedRef:_.draftExpandedRef,draftThrottleRef:_.draftThrottleRef,thoughtThrottleRef:_.thoughtThrottleRef,viewStateRef:_.viewStateRef,followupQueueItemsRef:_.followupQueueItemsRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,scrollToBottomRef:_.scrollToBottomRef,hasMoreRef:_.hasMoreRef,loadMoreRef:_.loadMoreRef,lastAgentResponseRef:_.lastAgentResponseRef,wasAgentActiveRef:_.wasAgentActiveRef,setActiveTurn:_.setActiveTurn,applyLiveGeneratedWidgetUpdate:_.applyLiveGeneratedWidgetUpdate,setFloatingWidget:_.setFloatingWidget,clearLastActivityFlag:_.clearLastActivityFlag,handleUiVersionDrift:_.handleUiVersionDrift,setAgentStatus:_.setAgentStatus,setAgentDraft:_.setAgentDraft,setAgentPlan:_.setAgentPlan,setAgentThought:_.setAgentThought,setPendingRequest:_.setPendingRequest,clearAgentRunState:_.clearAgentRunState,getAgentStatus:_.getAgentStatus,noteAgentActivity:_.noteAgentActivity,showLastActivity:_.showLastActivity,refreshTimeline:_.refreshTimeline,refreshModelAndQueueState:_.refreshModelAndQueueState,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,notifyForFinalResponse:_.notifyForFinalResponse,setContextUsage:_.setContextUsage,refreshContextUsage:_.refreshContextUsage,refreshQueueState:_.refreshQueueState,setFollowupQueueItems:_.setFollowupQueueItems,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,setSteerQueuedTurnId:_.setSteerQueuedTurnId,applyModelState:_.applyModelState,getAgentContext:_.getAgentContext,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,setExtensionWorkingState:_.setExtensionWorkingState,refreshActiveEditorFromWorkspace:_.refreshActiveEditorFromWorkspace,showIntentToast:_.showIntentToast,removeStalledPost:_.removeStalledPost,setPosts:_.setPosts,preserveTimelineScrollTop:_.preserveTimelineScrollTop,finalizeStalledResponse:_.finalizeStalledResponse,connectionStatus:_.connectionStatus,agentStatus:_.agentStatus,refreshAgentStatus:_.refreshAgentStatus,refreshAutoresearchStatus:_.refreshAutoresearchStatus}}function vL(_){let $=tB(AM(_)),j=DL(kM({..._,refreshQueueState:$.refreshQueueState,refreshContextUsage:$.refreshContextUsage,refreshAutoresearchStatus:$.refreshAutoresearchStatus})),G=TL(MM({..._,refreshQueueState:$.refreshQueueState,refreshAgentStatus:$.refreshAgentStatus,refreshContextUsage:$.refreshContextUsage,refreshModelAndQueueState:j.refreshModelAndQueueState,refreshPostPaintThreadState:j.refreshPostPaintThreadState}));return bL(TM({..._,handleConnectionStatusChange:$.handleConnectionStatusChange,handleUiVersionDrift:$.handleUiVersionDrift,refreshCurrentView:G.refreshCurrentView,updateAgentProfile:j.updateAgentProfile,updateUserProfile:j.updateUserProfile,applyLiveGeneratedWidgetUpdate:G.applyLiveGeneratedWidgetUpdate,refreshModelAndQueueState:j.refreshModelAndQueueState,refreshActiveChatAgents:j.refreshActiveChatAgents,refreshCurrentChatBranches:j.refreshCurrentChatBranches,refreshContextUsage:$.refreshContextUsage,refreshQueueState:$.refreshQueueState,applyModelState:j.applyModelState,refreshAgentStatus:$.refreshAgentStatus,refreshAutoresearchStatus:$.refreshAutoresearchStatus})),{agentStatusLifecycle:$,chatRefreshLifecycle:j,viewRefreshLifecycle:G}}k0();var mL="piclaw:pane-host-transfer:",wM=300000;function cL(_){try{return _?.localStorage??null}catch{return null}}function hL(_){return typeof _==="string"?_.trim():""}function lL(_){if(!_||typeof _!=="object"||Array.isArray(_))return null;return _}function yM(_=Date.now()){return`pane-transfer-${_.toString(36)}-${Math.random().toString(36).slice(2,10)}`}function IM(_,$){try{return _?.removeItem($),!0}catch(j){return!1}}function xM(_,$=globalThis,j=Date.now()){let G=cL($),Z=hL(_?.path),X=lL(_?.payload);if(!G||!Z||!X)return null;let Y=yM(j);try{return G.setItem(`${mL}${Y}`,JSON.stringify({path:Z,payload:X,capturedAt:j})),Y}catch{return null}}function cj(_,$=globalThis,j=Date.now()){let G=typeof _==="string"?_.trim():"",Z=cL($);if(!G||!Z)return null;let X=`${mL}${G}`,Y="";try{Y=Z.getItem(X)||""}catch{return null}if(!Y)return null;IM(Z,X);try{let V=JSON.parse(Y),Q=typeof V?.capturedAt==="number"&&Number.isFinite(V.capturedAt)?V.capturedAt:j;if(Q+wM<j)return null;let q=hL(V?.path),B=lL(V?.payload);if(!q||!B)return null;return{path:q,payload:B,capturedAt:Q}}catch{return null}}function h8(_,$=globalThis,j=Date.now()){let G=xM(_,$,j);return G?{pane_transfer:G}:null}function pL(_=globalThis,$=Date.now()){let j=Z5("pane_transfer",_);return cj(j,_,$)}function v4(_){return typeof _==="string"?_.trim():""}function CM(_){return Boolean(_)&&typeof _.get==="function"&&typeof _.set==="function"&&typeof _.delete==="function"&&typeof _.entries==="function"}function hj(_){if(!_)return null;let $=_.__piclawPaneLiveTransferRegistry__;if(CM($))return $;let j=new Map;return _.__piclawPaneLiveTransferRegistry__=j,j}function PM(_){try{return _?.(),!0}catch($){return!1}}function g5(_,$=typeof window<"u"?window:null){let j=hj($),G=v4(_?.panePath),Z=v4(_?.paneInstanceId),X=v4(_?.paneWindowId);if(!j||!G||!Z||!X||typeof _?.instance?.moveHost!=="function")return!1;return j.set(X,{..._,panePath:G,paneInstanceId:Z,paneWindowId:X,registeredAt:typeof _?.registeredAt==="number"?_.registeredAt:Date.now()}),!0}function rL(_,$=typeof window<"u"?window:null){let j=hj($),G=v4(_);if(!j||!G)return;for(let[Z,X]of j.entries())if(X?.panePath===G)j.delete(Z)}async function nL(_,$,j,G){let Z=hj(_),X=v4($?.panePath),Y=v4($?.paneInstanceId),V=v4($?.paneWindowId);if(!Z||!X||!Y||!V)return null;let Q=Z.get(V)||null;if(!Q)return null;if(Q.panePath!==X||Q.paneInstanceId!==Y)return null;if(typeof Q.instance?.moveHost!=="function")return null;if(!await Q.instance.moveHost(j,G))return null;return Z.delete(V),PM(Q.releaseSourceHost),Q.instance}d2();function u6(_){if(!_||typeof _!=="object")return!1;let $=_;if(typeof $.closest==="function"&&$.closest('input, textarea, select, [contenteditable="true"], .compose-box, .compose-model-popup, .compose-session-popup'))return!0;return Boolean($.isContentEditable)}function dL(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=_?.openTab,Z=_?.editSource,X=_?.popOutPane,Y=(B)=>{let K=B?.detail?.path,N=typeof B?.detail?.label==="string"&&B.detail.label.trim()?B.detail.label.trim():void 0;if(K)G?.(K,N)},V=(B)=>{let K=B?.detail?.path,N=typeof B?.detail?.label==="string"&&B.detail.label.trim()?B.detail.label.trim():void 0;if(K)Z?.(K,N)},Q=(B)=>{let K=B?.detail?.path,N=typeof B?.detail?.label==="string"&&B.detail.label.trim()?B.detail.label.trim():void 0;if(K)X?.(K,N)},q=["pane:open-tab","office-viewer:open-tab","csv-viewer:open-tab","pdf-viewer:open-tab","image-viewer:open-tab","video-viewer:open-tab","html-viewer:open-tab","mindmap:open-tab","vnc:open-tab"];return q.forEach((B)=>j.addEventListener(B,Y)),j.addEventListener("html-viewer:edit-source",V),j.addEventListener("pane:popout",Q),()=>{q.forEach((B)=>j.removeEventListener(B,Y)),j.removeEventListener("html-viewer:edit-source",V),j.removeEventListener("pane:popout",Q)}}function oL(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=(Z)=>{if(u6(Z?.target))return;if(!J$(Z,"toggleDock"))return;Z.preventDefault?.(),_?.()};return j.addEventListener("keydown",G),()=>j.removeEventListener("keydown",G)}function iL(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=_?.toggleZenMode,Z=_?.exitZenMode,X=typeof _?.isZenModeActive==="function"?_.isZenModeActive:()=>Boolean(_?.zenMode),Y=(V)=>{if(J$(V,"toggleZenMode")){V.preventDefault?.(),G?.();return}if(u6(V?.target))return;if(V?.key==="Escape"&&X())V.preventDefault?.(),Z?.()};return j.addEventListener("keydown",Y),()=>j.removeEventListener("keydown",Y)}function sL(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=(Z)=>{if(u6(Z?.target))return;if(J$(Z,"previousChat")){Z.preventDefault?.(),_?.previousChat?.();return}if(J$(Z,"nextChat"))Z.preventDefault?.(),_?.nextChat?.()};return j.addEventListener("keydown",G),()=>j.removeEventListener("keydown",G)}function aL(_={}){let $=_.document??(typeof document<"u"?document:null);if(!$)return()=>{};let j=(G)=>{if(u6(G?.target))return;if(!J$(G,"openSettings"))return;G.preventDefault(),i1()};return $.addEventListener("keydown",j),()=>$.removeEventListener("keydown",j)}function tL(_={}){let $=_.document??(typeof document<"u"?document:null);if(!$)return()=>{};let j=(G)=>{if(u6(G?.target))return;if(!J$(G,"openHelp"))return;G.preventDefault(),i1({section:"keyboard"})};return $.addEventListener("keydown",j),()=>$.removeEventListener("keydown",j)}function eL(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,renameBranchInFlight:G,renameBranchLockUntil:Z,getFormLock:X,setRenameBranchNameDraft:Y,setIsRenameBranchFormOpen:V,now:Q=Date.now()}=_;if(!$||!j?.chat_jid)return!1;let q=X?.()||null;if(!q)return!1;if(G||Q<Number(Z||0)||q.inFlight||Q<Number(q.cooldownUntil||0))return!1;return Y?.(j.agent_name||""),V?.(!0),!0}function _N(_){let{setIsRenameBranchFormOpen:$,setRenameBranchNameDraft:j}=_;$?.(!1),j?.("")}async function $N(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,nextName:G,openRenameForm:Z,renameBranchInFlightRef:X,renameBranchLockUntilRef:Y,getFormLock:V,setIsRenamingBranch:Q,renameChatBranch:q,refreshActiveChatAgents:B,refreshCurrentChatBranches:K,navigate:N,baseHref:L,chatOnlyMode:U,showIntentToast:E,closeRenameForm:H,now:D=()=>Date.now()}=_;if(!$||!j?.chat_jid)return!1;if(typeof G!=="string")return Z?.(),!1;let M=D(),z=V?.()||null;if(!z)return!1;if(X.current||M<Number(Y.current||0)||z.inFlight||M<Number(z.cooldownUntil||0))return!1;X.current=!0,z.inFlight=!0,Q?.(!0);try{let O=j.agent_name||"",x=Z8(G,O);if(!x.canSubmit)return E?.("Could not rename session",x.message||"Enter a valid session handle.","warning",4000),!1;let I=x.normalized||O,J=await q(j.chat_jid,{agentName:I});await Promise.allSettled([B?.(),K?.()]);let k=J?.branch?.agent_name||I||O;return E?.("Session renamed",`@${k}`,"info",3500),H?.(),!0}catch(O){let x=O instanceof Error?O.message:String(O||"Could not rename session."),I=/already in use/i.test(x||"")?`${x} Switch to or restore that existing session from the session manager.`:x;return E?.("Could not rename session",I||"Could not rename session.","warning",5000),!1}finally{X.current=!1,Q?.(!1);let O=D()+UK;Y.current=O;let x=V?.()||null;if(x)x.inFlight=!1,x.cooldownUntil=O}}async function jN(_){let{hasWindow:$=typeof window<"u",targetChatJid:j=null,currentChatJid:G,currentBranchRecord:Z,currentChatBranches:X=[],activeChatAgents:Y=[],pruneChatBranch:V,refreshActiveChatAgents:Q,refreshCurrentChatBranches:q,showIntentToast:B,baseHref:K,chatOnlyMode:N,navigate:L,confirm:U=(k)=>window.confirm(k)}=_;if(!$)return!1;let E=typeof j==="string"&&j.trim()?j.trim():"",H=typeof G==="string"&&G.trim()?G.trim():"",D=E||Z?.chat_jid||H;if(!D)return B?.("Could not prune branch","No active session is selected yet.","warning",4000),!1;let M=(Z?.chat_jid===D?Z:null)||X.find((k)=>k?.chat_jid===D)||Y.find((k)=>k?.chat_jid===D)||null,z=M?.chat_jid===(M?.root_chat_jid||M?.chat_jid),O=Boolean(z&&D==="web:default"),x=Boolean(z&&X.some((k)=>{let W=typeof k?.chat_jid==="string"?k.chat_jid.trim():"",T=typeof k?.root_chat_jid==="string"?k.root_chat_jid.trim():W;return W&&W!==D&&T===D&&!k?.archived_at}));if(O)return B?.("Cannot archive session","The default chat session cannot be archived.","warning",4000),!1;if(x)return B?.("Cannot archive session","Archive or delete the child branch sessions first.","warning",4500),!1;let I=`@${M?.agent_name||D}${M?.chat_jid?` — ${M.chat_jid}`:""}`;if(!U(z?`Archive ${I}?

This removes the session from the session picker. Chat history is preserved.`:`Prune ${I}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return!1;try{await V(D),await Promise.allSettled([Q?.(),q?.()]);let k=z?"web:default":M?.root_chat_jid||"web:default";B?.(z?"Session archived":"Branch pruned",`${I} has been archived.`,"info",3000);let W=w1(K,k,{chatOnly:N});return L?.(W),!0}catch(k){let W=k instanceof Error?k.message:String(k||"Could not prune branch.");return B?.("Could not prune branch",W||"Could not prune branch.","warning",5000),!1}}async function GN(_){let{targetChatJid:$,purgeChatBranch:j,currentChatBranches:G=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,confirm:V=(E)=>window.confirm(E)}=_,Q=typeof $==="string"?$.trim():"";if(!Q||typeof j!=="function")return!1;let q=G.find((E)=>E?.chat_jid===Q)||null;if(!Boolean(q?.archived_at))return Y?.("Could not delete branch","Only archived sessions can be permanently deleted.","warning",4500),!1;let K=Boolean(q?.chat_jid&&q.chat_jid===(q.root_chat_jid||q.chat_jid)),N=`@${q?.agent_name||Q}`;if(!V(`Permanently delete ${N}?

This removes all chat history, token usage, cursor state, scheduled tasks, and session files for this ${K?"session":"branch"}. It cannot be undone.`))return!1;try{return await j(Q),await Promise.allSettled([Z?.(),X?.()]),Y?.(K?"Archived session deleted":"Archived branch deleted",`${N} was permanently deleted.`,"info",4000),!0}catch(E){let H=E instanceof Error?E.message:String(E||`Could not permanently delete archived ${K?"session":"branch"}.`);return Y?.("Could not delete branch",H||`Could not permanently delete archived ${K?"session":"branch"}.`,"warning",5000),!1}}async function ZN(_){let{targetChatJid:$,restoreChatBranch:j,currentChatBranches:G=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,baseHref:V,chatOnlyMode:Q,navigate:q}=_,B=typeof $==="string"?$.trim():"";if(!B||typeof j!=="function")return!1;try{let K=G.find((D)=>D?.chat_jid===B)||null,N=await j(B);await Promise.allSettled([Z?.(),X?.()]);let L=N?.branch,U=typeof L?.chat_jid==="string"&&L.chat_jid.trim()?L.chat_jid.trim():B,E=uV(K?.agent_name,L?.agent_name,U);Y?.("Branch restored",E,"info",4200);let H=w1(V,U,{chatOnly:Q});return q?.(H),!0}catch(K){let N=K instanceof Error?K.message:String(K||"Could not restore branch.");return Y?.("Could not restore branch",N||"Could not restore branch.","warning",5000),!1}}async function XN(_){let{branchLoaderSourceChatJid:$,forkChatBranch:j,setBranchLoaderState:G,navigate:Z,baseHref:X,isCancelled:Y=()=>!1}=_;try{G?.({status:"running",message:"Preparing a new chat branch…"});let V=await j($);if(Y())return!1;let Q=V?.branch,q=typeof Q?.chat_jid==="string"&&Q.chat_jid.trim()?Q.chat_jid.trim():null;if(!q)throw Error("Branch fork did not return a chat id.");let B=w1(X,q,{chatOnly:!0});return Z?.(B,{replace:!0}),!0}catch(V){if(Y())return!1;return G?.({status:"error",message:D4(V)}),!1}}function VN(_){let{hasWindow:$=typeof window<"u",nextChatJid:j,currentChatJid:G,chatOnlyMode:Z,currentHref:X,navigate:Y}=_;if(!$)return!1;let V=typeof j==="string"?j.trim():"";if(!V||V===G)return!1;let Q=w1(X,V,{chatOnly:Z});return Y?.(Q),!0}function RM(_){return typeof _==="string"?_.trim():""}function fM(_){return new Promise(($)=>setTimeout($,_))}async function YN(_,$){if(typeof _?.beforeDetachFromHost!=="function")return;await _.beforeDetachFromHost({path:$,target:"popout"})}async function qN(_){let{panePath:$,tabStripActiveId:j,editorInstanceRef:G,dockInstanceRef:Z,terminalTabPath:X,activateTab:Y,getActiveTabId:V,resolveTab:Q,buildEditorPopoutTransfer:q}=_,B=$===X&&Boolean(Q?.($));if($===X&&!B){let E=Z.current;if(await YN(E,$),typeof E?.preparePopoutTransfer!=="function")return null;return await E.preparePopoutTransfer()}let K=()=>RM(V?.()??j),N=K(),L=G.current;if(N!==$)Y?.($);let U=N===$?G.current:null;if(typeof U?.preparePopoutTransfer!=="function")for(let E=0;E<12;E+=1){if(E>0)await fM(16);else await Promise.resolve();let H=K(),D=G.current,M=H===$,z=D!==L;if(!M||typeof D?.preparePopoutTransfer!=="function")continue;if(N===$||z||E>0){U=D;break}}if(await YN(U,$),typeof U?.preparePopoutTransfer==="function"){let E=await U.preparePopoutTransfer();if(E)return E}return q?.($)??null}function QN(_){let{panePath:$,terminalTabPath:j,dockVisible:G,resolveTab:Z,closeTab:X,setDockVisible:Y}=_,V=Z($);if(V&&!V.dirty){X($);return}if($===j&&G)Y(!1)}function KN(_){let{hasWindow:$=typeof window<"u",editorOpen:j,shellElement:G,editorWidthRef:Z,dockHeightRef:X,sidebarWidthRef:Y,readStoredNumber:V}=_;if(!j||!$||!G)return;if(!Z.current){let Q=V("editorWidth",null),q=Y.current||280,B=Number.isFinite(Q)?Number(Q):q;Z.current=E6(B,typeof window<"u"?window.innerWidth:0,Y.current||0)}if(G.style.setProperty("--editor-width",`${Z.current}px`),!X.current){let Q=V("dockHeight",null);X.current=Number.isFinite(Q)?Number(Q):200}G.style.setProperty("--dock-height",`${X.current}px`)}M_();async function BN(_){if(typeof _!=="function")return null;try{return await _()}catch{return null}}async function LN(_){let{currentChatJid:$,chatOnlyMode:j,forkChatBranch:G,refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,navigate:V,baseHref:Q}=_;if(typeof V==="function")try{let q=u3(Q,$,{chatOnly:j});return V(q),!0}catch(q){return Y?.("Could not create branch",D4(q),"warning",5000),!1}try{let B=(await G($))?.branch,K=typeof B?.chat_jid==="string"&&B.chat_jid.trim()?B.chat_jid.trim():null;if(!K)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([Z?.(),X?.()]);let N=B?.agent_name?`@${B.agent_name}`:K;Y?.("New branch created",`Switched to ${N}.`,"info",2500);let L=w1(Q,K,{chatOnly:j});return V?.(L),!0}catch(q){return Y?.("Could not create branch",D4(q),"warning",5000),!1}}async function NN(_){let{rootName:$,chatOnlyMode:j,createRootChatSession:G,refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,navigate:V,baseHref:Q}=_,q=String($||"").trim();if(!q)return!1;try{let N=(await(typeof G==="function"?G:I7)(q))?.branch,L=typeof N?.chat_jid==="string"&&N.chat_jid.trim()?N.chat_jid.trim():null;if(!L)throw Error("Root session creation did not return a chat id.");await Promise.allSettled([Z?.(),X?.()]);let U=N?.agent_name?`@${N.agent_name}`:L;Y?.("Root session created",`Switched to ${U}.`,"info",2500);let E=w1(Q,L,{chatOnly:j});return V?.(E),!0}catch(B){return Y?.("Could not create root session",D4(B),"warning",5000),!1}}async function FN(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,path:G,label:Z,showIntentToast:X,resolveSourceTransfer:Y,closeSourcePaneIfTransferred:V,onPaneWindowOpened:Q,currentChatJid:q,baseHref:B}=_;if(!$||j)return!1;let K=typeof G==="string"&&G.trim()?G.trim():"";if(!K)return!1;let N=VZ(K);if(!N)return X?.("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000),!1;let L=R3(N);if(!L)return X?.("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000),!1;f3(L,{title:typeof Z==="string"&&Z.trim()?`Opening ${Z}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});try{let U=await Y?.(K),E=Boolean(U&&Object.keys(U).length>0),H=YZ(B,K,{label:typeof Z==="string"&&Z.trim()?Z.trim():void 0,chatJid:q,params:U});if(S3(L,H),Q?.(K,L,U||null),E&&!Q)V?.(K);return!0}catch(U){g3(L);let E=U instanceof Error?U.message:"Could not transfer pane state to the new window.";return X?.("Could not open pane window",E,"warning",5000),!1}}async function UN(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,currentChatJid:G,currentRootChatJid:Z,forkChatBranch:X,getActiveChatAgents:Y,getChatBranches:V,setActiveChatAgents:Q,setCurrentChatBranches:q,showIntentToast:B,baseHref:K}=_;if(!$||j)return!1;let N=XZ(G);if(!N)return B?.("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000),!1;if(N.mode==="tab"){let U=u3(K,G,{chatOnly:!0});if(!window.open(U,N.target))return B?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;return!0}let L=R3(N);if(!L)return B?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;f3(L,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let E=(await X(G))?.branch,H=typeof E?.chat_jid==="string"&&E.chat_jid.trim()?E.chat_jid.trim():null;if(!H)throw Error("Branch fork did not return a chat id.");let D=await BN(()=>Y?.());if(D)Q?.(Array.isArray(D?.chats)?D.chats:[]);let M=await BN(()=>V?.(Z));if(M)q?.(Array.isArray(M?.chats)?M.chats:[]);let z=w1(K,H,{chatOnly:!0});return S3(L,z),!0}catch(U){return g3(L),B?.("Could not open branch window",D4(U),"error",5000),!1}}function SM(_){_(($)=>!$)}function gM(_){let{nextChatJid:$,currentChatJid:j,chatOnlyMode:G,navigate:Z,hasWindow:X=typeof window<"u",currentHref:Y=X?window.location.href:"http://localhost/"}=_;return VN({hasWindow:X,nextChatJid:$,currentChatJid:j,chatOnlyMode:G,currentHref:Y,navigate:Z})}function uM(_){let{currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:G,getFormLock:Z,setRenameBranchNameDraft:X,setIsRenameBranchFormOpen:Y,hasWindow:V=typeof window<"u"}=_;return eL({hasWindow:V,currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:G,getFormLock:Z,setRenameBranchNameDraft:X,setIsRenameBranchFormOpen:Y})}function bM(_){_N(_)}async function vM(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await $N({hasWindow:$,baseHref:String(j||"").trim()||($?window.location.href:"http://localhost/"),...G})}async function mM(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await jN({hasWindow:$,baseHref:j,...G})}async function cM(_){await GN(_)}async function hM(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await ZN({baseHref:j,...G})}function lM(_){let{branchLoaderMode:$,branchLoaderSourceChatJid:j,forkChatBranch:G,setBranchLoaderState:Z,navigate:X,hasWindow:Y=typeof window<"u",baseHref:V=Y?window.location.href:"http://localhost/",runBranchLoaderImpl:Q=XN}=_;if(!$||!Y)return;let q=!1;return Q({branchLoaderSourceChatJid:j,forkChatBranch:G,setBranchLoaderState:Z,navigate:X,baseHref:V,isCancelled:()=>q}),()=>{q=!0}}async function pM(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await LN({baseHref:j,...G})}async function rM(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await NN({baseHref:j,...G})}async function nM(_){let{isWebAppMode:$,path:j,label:G,showIntentToast:Z,currentChatJid:X,activateTab:Y,tabStripActiveId:V,editorInstanceRef:Q,dockInstanceRef:q,terminalTabPath:B,tabPaneOverrides:K,buildPaneDetachTransfer:N,registerDetachedPaneWindow:L,dockVisible:U,resolveTab:E,closeTab:H,setDockVisible:D,hasWindow:M=typeof window<"u",baseHref:z=M?window.location.href:"http://localhost/"}=_,O=N?.(j)||null;return await FN({hasWindow:M,isWebAppMode:$,path:j,label:G,showIntentToast:Z,currentChatJid:X,baseHref:z,resolveSourceTransfer:async(x)=>{let I=await qN({panePath:x,activateTab:Y,getActiveTabId:()=>$_.getActiveId(),tabStripActiveId:V,editorInstanceRef:Q,dockInstanceRef:q,terminalTabPath:B,resolveTab:E,buildEditorPopoutTransfer:(T)=>{if(!T||T===B)return null;let w=Q.current,A=typeof w?.getContent==="function"?w.getContent():void 0,P=typeof w?.isDirty==="function"?w.isDirty():!1,R=K instanceof Map?K.get(T)||null:null,b=$_.getViewState(T)||null;return q2({path:T,content:P?A:void 0,paneOverrideId:R,viewState:b})}}),J=x===B&&!E(x)?q.current:Q.current,k=typeof J?.exportHostTransferState==="function"?J.exportHostTransferState():null,W=k?h8({path:x,payload:k}):null;if(O?.paneInstanceId&&O?.paneWindowId&&J&&x!==B&&k?.kind!=="terminal")g5({panePath:x,paneInstanceId:O.paneInstanceId,paneWindowId:O.paneWindowId,instance:J,releaseSourceHost:()=>{if(x===B){if(q.current===J)q.current=null;if(Q.current===J)Q.current=null;return}if(Q.current===J)Q.current=null}});return{...I||{},...W||{},...O?.params||{}}},onPaneWindowOpened:L?(x,I,J)=>{L(x,G,I,J)}:void 0,closeSourcePaneIfTransferred:L?void 0:(x)=>{QN({panePath:x,terminalTabPath:B,dockVisible:U,resolveTab:E,closeTab:H,setDockVisible:D})}})}function dM(_){let{openEditor:$,popOutPane:j,watchPaneOpenEventsImpl:G=dL}=_;return G({openTab:(Z,X)=>$(Z,X?{label:X}:void 0),editSource:(Z,X)=>$(Z,{...X?{label:X}:{},paneOverrideId:"editor"}),popOutPane:(Z,X)=>{j(Z,X)}})}async function oM(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await UN({hasWindow:$,baseHref:j,...G})}function iM(_){let{hasWindow:$=typeof window<"u",...j}=_;KN({hasWindow:$,...j})}function DN(_){let{setWorkspaceOpen:$,currentChatJid:j,chatOnlyMode:G,navigate:Z,currentBranchRecord:X,renameBranchInFlightRef:Y,renameBranchLockUntilRef:V,getFormLock:Q,setRenameBranchNameDraft:q,setIsRenameBranchFormOpen:B,setIsRenamingBranch:K,renameChatBranch:N,refreshActiveChatAgents:L,refreshCurrentChatBranches:U,showIntentToast:E,currentChatBranches:H,activeChatAgents:D,pruneChatBranch:M,purgeChatBranch:z,restoreChatBranch:O,branchLoaderMode:x,branchLoaderSourceChatJid:I,forkChatBranch:J,createRootChatSession:k,setBranchLoaderState:W,currentRootChatJid:T,isWebAppMode:w,getActiveChatAgents:A,getChatBranches:P,setActiveChatAgents:R,setCurrentChatBranches:b,openEditor:c,activateTab:r,tabStripActiveId:e,editorInstanceRef:m,dockInstanceRef:_0,terminalTabPath:E0,tabPaneOverrides:Z0,buildPaneDetachTransfer:j0,registerDetachedPaneWindow:V0,dockVisible:N0,resolveTab:h,closeTab:$0,setDockVisible:Q0,editorOpen:O0,shellElement:a,editorWidthRef:X0,dockHeightRef:W0,sidebarWidthRef:P0,readStoredNumber:l0}=_,u0=f(()=>{SM($)},[$]),G_=f((z0)=>{gM({nextChatJid:z0,currentChatJid:j,chatOnlyMode:G,navigate:Z})},[G,j,Z]),h0=f(()=>{uM({currentBranchRecord:X,renameBranchInFlight:Y.current,renameBranchLockUntil:V.current,getFormLock:Q,setRenameBranchNameDraft:q,setIsRenameBranchFormOpen:B})},[X,Q,Y,V,B,q]),s0=f(()=>{bM({setIsRenameBranchFormOpen:B,setRenameBranchNameDraft:q})},[B,q]),R0=f(async(z0)=>{await vM({currentBranchRecord:X,nextName:z0,openRenameForm:h0,renameBranchInFlightRef:Y,renameBranchLockUntilRef:V,getFormLock:Q,setIsRenamingBranch:K,renameChatBranch:N,refreshActiveChatAgents:L,refreshCurrentChatBranches:U,navigate:Z,chatOnlyMode:G,showIntentToast:E,closeRenameForm:s0})},[s0,X,G,Q,Z,h0,L,U,Y,V,N,K,E]),o0=f(async(z0=null)=>{await mM({targetChatJid:z0,currentChatJid:j,currentBranchRecord:X,currentChatBranches:H,activeChatAgents:D,pruneChatBranch:M,refreshActiveChatAgents:L,refreshCurrentChatBranches:U,showIntentToast:E,chatOnlyMode:G,navigate:Z})},[D,G,X,H,j,Z,M,L,U,E]),v0=f(async(z0)=>{await cM({targetChatJid:z0,purgeChatBranch:z,currentChatBranches:H,refreshActiveChatAgents:L,refreshCurrentChatBranches:U,showIntentToast:E})},[H,z,L,U,E]),t0=f(async(z0)=>{await hM({targetChatJid:z0,restoreChatBranch:O,currentChatBranches:H,refreshActiveChatAgents:L,refreshCurrentChatBranches:U,showIntentToast:E,chatOnlyMode:G,navigate:Z})},[G,H,Z,L,U,O,E]);g(()=>lM({branchLoaderMode:x,branchLoaderSourceChatJid:I,forkChatBranch:J,setBranchLoaderState:W,navigate:Z}),[x,I,J,Z,W]);let i0=f(async()=>{await pM({currentChatJid:j,chatOnlyMode:G,forkChatBranch:J,refreshActiveChatAgents:L,refreshCurrentChatBranches:U,showIntentToast:E,navigate:Z})},[G,j,J,Z,L,U,E]),F_=f(async(z0)=>{await rM({rootName:z0,chatOnlyMode:G,createRootChatSession:k,refreshActiveChatAgents:L,refreshCurrentChatBranches:U,showIntentToast:E,navigate:Z})},[G,k,Z,L,U,E]),Z_=f(async(z0,V_)=>{return await nM({isWebAppMode:w,path:z0,label:V_,showIntentToast:E,currentChatJid:j,activateTab:r,tabStripActiveId:e,editorInstanceRef:m,dockInstanceRef:_0,terminalTabPath:E0,tabPaneOverrides:Z0,buildPaneDetachTransfer:j0,registerDetachedPaneWindow:V0,dockVisible:N0,resolveTab:h,closeTab:$0,setDockVisible:Q0})},[r,j0,$0,j,_0,N0,m,w,V0,h,Q0,E,Z0,e,E0]);g(()=>dM({openEditor:c,popOutPane:(z0,V_)=>{Z_(z0,V_)}}),[Z_,c]);let m0=f(async()=>{await oM({isWebAppMode:w,currentChatJid:j,currentRootChatJid:T,forkChatBranch:J,getActiveChatAgents:A,getChatBranches:P,setActiveChatAgents:R,setCurrentChatBranches:b,showIntentToast:E})},[j,T,J,A,P,w,R,b,E]);return g(()=>{iM({editorOpen:O0,shellElement:a,editorWidthRef:X0,dockHeightRef:W0,sidebarWidthRef:P0,readStoredNumber:l0})},[W0,O0,X0,l0,a,P0]),{toggleWorkspace:u0,handleBranchPickerChange:G_,openRenameCurrentBranchForm:h0,closeRenameCurrentBranchForm:s0,handleRenameCurrentBranch:R0,handlePruneCurrentBranch:o0,handlePurgeArchivedBranch:v0,handleRestoreBranch:t0,handleCreateSessionFromCompose:i0,handleCreateRootSessionFromCompose:F_,handlePopOutPane:Z_,handlePopOutChat:m0}}k0();function Z4(_){return _.status==="fulfilled"?_.value:null}function l8(_){return Math.max(0,Math.min(100,_))}function HN(_){let $=Array.isArray(_.timelinePayload?.posts)?_.timelinePayload.posts:Array.isArray(_.rawPosts)?_.rawPosts:[],j=$.length?$[$.length-1]:null,G=$.filter((H)=>H?.data?.is_bot_message).length,Z=$.filter((H)=>!H?.data?.is_bot_message).length,X=Number(_.queuePayload?.count??_.followupQueueItems?.length??0)||0,Y=Array.isArray(_.activeChatsPayload?.chats)?_.activeChatsPayload.chats.length:Array.isArray(_.activeChatAgents)?_.activeChatAgents.length:0,V=Array.isArray(_.branchesPayload?.chats)?_.branchesPayload.chats.length:Array.isArray(_.currentChatBranches)?_.currentChatBranches.length:0,Q=Number(_.contextPayload?.percent??_.contextUsage?.percent??0)||0,q=Number(_.contextPayload?.tokens??_.contextUsage?.tokens??0)||0,B=Number(_.contextPayload?.contextWindow??_.contextUsage?.contextWindow??0)||0,K=_.modelsPayload?.current??_.activeModel??null,N=_.modelsPayload?.thinking_level??_.activeThinkingLevel??null,L=_.modelsPayload?.supports_thinking??_.supportsThinking,U=_.statusPayload?.status||(_.isAgentTurnActive?"active":"idle"),E=_.statusPayload?.data?.type||_.statusPayload?.type||null;return{generatedAt:_.generatedAt,request:_.request,chat:{currentChatJid:_.currentChatJid,rootChatJid:_.currentRootChatJid,activeChats:Y,branches:V},agent:{status:U,phase:E,running:Boolean(_.isAgentTurnActive)},model:{current:K,thinkingLevel:N,supportsThinking:Boolean(L)},context:{tokens:q,contextWindow:B,percent:Q},queue:{count:X},timeline:{loadedPosts:$.length,botPosts:G,userPosts:Z,latestPostId:j?.id??null,latestTimestamp:j?.timestamp??null},bars:[{key:"context",label:"Context",value:l8(Math.round(Q))},{key:"queue",label:"Queue",value:l8(X*18)},{key:"activeChats",label:"Active chats",value:l8(Y*12)},{key:"posts",label:"Timeline load",value:l8($.length*5)}]}}function EN(_){if(_==="followup")return{title:"Widget submission queued",detail:"The widget message was queued because the agent is busy.",kind:"info",durationMs:3500};return{title:"Widget submission sent",detail:"The widget message was sent to the chat.",kind:"info",durationMs:3500}}function WN(_){return{title:"Widget submission failed",detail:_||"Could not send the widget message.",kind:"warning",durationMs:5000}}function ON(_,$){return{shouldBuildDashboard:_?.buildDashboard!==!1,nextRefreshCount:Number($||0)+1}}function zN(){return{title:"Dashboard built",detail:"Live dashboard state pushed into the widget.",kind:"info",durationMs:3000}}function JN(_){return{title:"Dashboard build failed",detail:_||"Could not build dashboard.",kind:"warning",durationMs:5000}}function AN(){return{title:"Widget refresh requested",detail:"The widget received a host acknowledgement update.",kind:"info",durationMs:3000}}async function kN(_){let{requestPayload:$=null,currentChatJid:j,currentRootChatJid:G,getAgentStatus:Z,getAgentContext:X,getAgentQueueState:Y,getAgentModels:V,getActiveChatAgents:Q,getChatBranches:q,getTimeline:B,rawPosts:K,activeChatAgents:N,currentChatBranches:L,contextUsage:U,followupQueueItems:E,activeModel:H,activeThinkingLevel:D,supportsThinking:M,isAgentTurnActive:z}=_,[O,x,I,J,k,W,T]=await Promise.allSettled([Z(j),X(j),Y(j),V(j),Q(),q(G),B(20,null,j)]);return HN({generatedAt:new Date().toISOString(),request:$,currentChatJid:j,currentRootChatJid:G,statusPayload:Z4(O),contextPayload:Z4(x),queuePayload:Z4(I),modelsPayload:Z4(J),activeChatsPayload:Z4(k),branchesPayload:Z4(W),timelinePayload:Z4(T),rawPosts:K,activeChatAgents:N,currentChatBranches:L,contextUsage:U,followupQueueItems:E,activeModel:H,activeThinkingLevel:D,supportsThinking:M,isAgentTurnActive:z})}function MN(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:Z,refreshQueueState:X,setFollowupQueueItems:Y,showIntentToast:V,steerAgentQueueItem:Q}=_,q=S5(j.current,$);if(!q)return;let{rowId:B}=q;G.current.add(B),Y((K)=>j4(K,B).items),Q(B,yj(Z)).then(()=>{X()}).catch((K)=>{console.warn("[queue] Failed to steer queued item:",K);let N=mj("steer");V(N.title,N.detail,"warning"),G.current.delete(B),X()})}function TN(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:Z,refreshQueueState:X,setFollowupQueueItems:Y,showIntentToast:V,clearQueuedSteerStateIfStale:Q,removeAgentQueueItem:q}=_,B=S5(j.current,$);if(!B)return;let{rowId:K}=B;G.current.add(K),Q?.(B.remainingQueueCount),Y((N)=>j4(N,K).items),q(K,yj(Z)).then(()=>{X()}).catch((N)=>{console.warn("[queue] Failed to remove queued item:",N);let L=mj("remove");V(L.title,L.detail,"warning"),G.current.delete(K),X()})}function wN(_){let{widget:$,dismissedLiveWidgetKeysRef:j,setFloatingWidget:G}=_;if(!$||typeof $!=="object")return;let Z=N1($);if(Z)j.current.delete(Z);G(HL($,new Date().toISOString()))}function yN(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;j((G)=>{let Z=EL(G);if(Z.dismissedSessionKey)$.current.add(Z.dismissedSessionKey);return Z.nextWidget})}function IN(_){let{event:$,widget:j,currentChatJid:G,isComposeBoxAgentActive:Z,setFloatingWidget:X,handleCloseFloatingWidget:Y,handleMessageResponse:V,showIntentToast:Q,sendAgentMessage:q,buildFloatingWidgetDashboardSnapshot:B}=_,K=typeof $?.kind==="string"?$.kind:"",N=N1(j);if(!K||!N)return;if(K==="widget.close"){Y();return}if(K==="widget.submit"){let L=Lq($?.payload),U=Nq($?.payload),E=new Date().toISOString();if(X((H)=>zL(H,N,{kind:K,payload:$?.payload||null,submittedAt:E,submissionText:L})),!L){if(Q("Widget submission received","The widget submitted data without a message payload yet.","info",3500),U)Y();return}(async()=>{try{let H=await q("default",L,null,[],Z?"queue":null,G);V(H),X((M)=>vj(M,N,{submittedAt:E,submissionText:L,queued:H?.queued||null}));let D=EN(H?.queued);if(Q(D.title,D.detail,D.kind,D.durationMs),U)Y()}catch(H){X((M)=>vj(M,N,{submittedAt:E,submissionText:L,errorMessage:H?.message||"Could not send the widget message."}));let D=WN(H?.message);Q(D.title,D.detail,D.kind,D.durationMs)}})();return}if(K==="widget.ready"||K==="widget.request_refresh"){let L=new Date().toISOString(),U=ON($?.payload||null,j?.runtimeState?.refreshCount);if(X((E)=>JL(E,N,{kind:K,payload:$?.payload||null,eventAt:L,nextRefreshCount:U.nextRefreshCount,shouldBuildDashboard:U.shouldBuildDashboard})),K==="widget.request_refresh")if(U.shouldBuildDashboard)(async()=>{try{let E=await B($?.payload||null);X((D)=>AL(D,N,{dashboard:E,at:new Date().toISOString(),count:U.nextRefreshCount,echo:$?.payload||null}));let H=zN();Q(H.title,H.detail,H.kind,H.durationMs)}catch(E){X((D)=>kL(D,N,{errorMessage:E?.message||"Could not build dashboard.",at:new Date().toISOString(),count:U.nextRefreshCount}));let H=JN(E?.message);Q(H.title,H.detail,H.kind,H.durationMs)}})();else{let E=AN();Q(E.title,E.detail,E.kind,E.durationMs)}}}function sM(_,$=MN){$(_)}function aM(_,$=TN){$(_)}function tM(_,$,j=NL){j({response:_,refreshActiveChatAgents:$.refreshActiveChatAgents,refreshCurrentChatBranches:$.refreshCurrentChatBranches,refreshContextUsage:$.refreshContextUsage,refreshAutoresearchStatus:$.refreshAutoresearchStatus,refreshQueueState:$.refreshQueueState})}function xN(_){let{currentChatJid:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,clearQueuedSteerStateIfStale:V,steerAgentQueueItem:Q,removeAgentQueueItem:q,refreshActiveChatAgents:B,refreshCurrentChatBranches:K,refreshContextUsage:N,refreshAutoresearchStatus:L}=_,U=f((M)=>{sM({queuedItem:M,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:$,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,steerAgentQueueItem:Q,removeAgentQueueItem:q})},[$,G,j,Z,q,X,Y,Q]),E=f((M)=>{aM({queuedItem:M,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:$,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,clearQueuedSteerStateIfStale:V,steerAgentQueueItem:Q,removeAgentQueueItem:q})},[V,$,G,j,Z,q,X,Y,Q]),H=f(async(M,z)=>{X((O)=>{if(!Array.isArray(O)||M<0||z<0||M>=O.length||z>=O.length||M===z)return O;let x=[...O],[I]=x.splice(M,1);return x.splice(z,0,I),x});try{let{reorderAgentQueueItem:O}=await Promise.resolve().then(() => (M_(),F6));await O(M,z,$)}catch(O){console.warn("Failed to persist queue reorder:",O),Z()}},[$,Z,X]),D=f((M)=>{tM(M,{refreshActiveChatAgents:B,refreshCurrentChatBranches:K,refreshContextUsage:N,refreshAutoresearchStatus:L,refreshQueueState:Z})},[B,L,N,K,Z]);return{handleInjectQueuedFollowup:U,handleRemoveQueuedFollowup:E,handleMoveQueuedFollowup:H,handleMessageResponse:D}}k0();function CN(_){let{btwAbortRef:$,setBtwSession:j}=_;if($.current)$.current.abort(),$.current=null;j(null)}async function PN(_){let{question:$,currentChatJid:j,streamSidePrompt:G,resolveBtwChatJid:Z,showIntentToast:X,btwAbortRef:Y,setBtwSession:V}=_,Q=String($||"").trim();if(!Q)return X("BTW needs a question","Usage: /btw <question>","warning"),!0;if(Y.current)Y.current.abort();let q=new AbortController;Y.current=q,V({question:Q,answer:"",thinking:"",error:null,model:null,status:"running"});try{let B=await G(Q,{signal:q.signal,chatJid:Z(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(K)=>{if(K==="side_prompt_start")V((N)=>N?{...N,status:"running"}:N)},onThinkingDelta:(K)=>{V((N)=>N?{...N,thinking:`${N.thinking||""}${K||""}`}:N)},onTextDelta:(K)=>{V((N)=>N?{...N,answer:`${N.answer||""}${K||""}`}:N)}});if(Y.current!==q)return!0;V((K)=>K?{...K,answer:B?.result||K.answer||"",thinking:B?.thinking||K.thinking||"",model:B?.model||null,status:"success",error:null}:K)}catch(B){if(q.signal.aborted)return!0;V((K)=>K?{...K,status:"error",error:B?.payload?.error||B?.message||"BTW request failed."}:K)}finally{if(Y.current===q)Y.current=null}return!0}async function RN(_){let{content:$,parseBtwCommand:j,closeBtwPanel:G,runBtwPrompt:Z,showIntentToast:X}=_,Y=j($);if(!Y)return!1;if(Y.type==="help")return X("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(Y.type==="clear")return G(),X("BTW cleared","Closed the side conversation panel.","info"),!0;if(Y.type==="ask")return await Z(Y.question),!0;return!1}async function fN(_){let{btwSession:$,buildBtwInjectionText:j,isComposeBoxAgentActive:G,currentChatJid:Z,sendAgentMessage:X,handleMessageResponse:Y,showIntentToast:V}=_,Q=j($);if(!Q)return!1;try{let q=await X("default",Q,null,[],G?"queue":null,Z);return Y(q),V(q?.queued==="followup"?"BTW queued":"BTW injected",q?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500),!0}catch(q){return V("BTW inject failed",q?.message||"Could not inject BTW answer into chat.","warning"),!1}}async function eM(_){let $=typeof _==="string"?_:"";if(!$)return!1;let j=null;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch(G){j=G}try{let G=document.createElement("textarea");G.value=$,G.setAttribute("readonly",""),G.style.position="fixed",G.style.opacity="0",G.style.pointerEvents="none",document.body.appendChild(G),G.select(),G.setSelectionRange(0,G.value.length);let Z=document.execCommand("copy");return document.body.removeChild(G),Z}catch(G){return console.debug("[sidepanel] Clipboard copy failed after falling back from navigator.clipboard.",G,{clipboardApiAvailable:Boolean(navigator.clipboard?.writeText),clipboardApiError:j}),!1}}function _T(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;$.current.clear(),j(null)}function SN(_){let{currentChatJid:$,currentRootChatJid:j,isComposeBoxAgentActive:G,showIntentToast:Z,setPendingExtensionPanelActions:X,refreshAutoresearchStatus:Y,stopAutoresearch:V,dismissAutoresearch:Q,streamSidePrompt:q,btwAbortRef:B,btwSession:K,setBtwSession:N,sendAgentMessage:L,handleMessageResponse:U,dismissedLiveWidgetKeysRef:E,setFloatingWidget:H,getAgentStatus:D,getAgentContext:M,getAgentQueueState:z,getAgentModels:O,getActiveChatAgents:x,getChatBranches:I,getTimeline:J,rawPosts:k,activeChatAgents:W,currentChatBranches:T,contextUsage:w,followupQueueItemsRef:A,activeModel:P,activeThinkingLevel:R,supportsThinking:b,isAgentTurnActive:c}=_,r=f(async($0,Q0)=>{let O0=typeof $0?.key==="string"?$0.key:"",a=typeof Q0?.key==="string"?Q0.key:"",X0=gj(O0,a);if(!O0||!a)return;X((W0)=>SB(W0,O0,a));try{let W0=await uB({panel:$0,action:Q0,currentChatJid:$,stopAutoresearch:V,dismissAutoresearch:Q,writeClipboard:async(P0)=>{if(!await eM(P0))throw Error("Clipboard access is unavailable.")}});if(W0.refreshAutoresearchStatus)Y();if(W0.toast)Z(W0.toast.title,W0.toast.detail,W0.toast.kind,W0.toast.durationMs)}catch(W0){Z("Panel action failed",W0?.message||"Could not complete that action.","warning")}finally{X((W0)=>gB(W0,X0))}},[$,Q,Y,X,Z,V]),e=f(()=>{CN({btwAbortRef:B,setBtwSession:N})},[B,N]),m=f(async($0)=>{return await PN({question:$0,currentChatJid:$,streamSidePrompt:q,resolveBtwChatJid:_q,showIntentToast:Z,btwAbortRef:B,setBtwSession:N})},[B,$,N,Z,q]),_0=f(async({content:$0})=>{return await RN({content:$0,parseBtwCommand:eV,closeBtwPanel:e,runBtwPrompt:m,showIntentToast:Z})},[e,m,Z]),E0=f(()=>{if(K?.question)m(K.question)},[K,m]),Z0=f(async()=>{await fN({btwSession:K,buildBtwInjectionText:Gq,isComposeBoxAgentActive:G,currentChatJid:$,sendAgentMessage:L,handleMessageResponse:U,showIntentToast:Z})},[K,$,U,G,L,Z]),j0=f(async($0=null)=>{return kN({requestPayload:$0,currentChatJid:$,currentRootChatJid:j,getAgentStatus:D,getAgentContext:M,getAgentQueueState:z,getAgentModels:O,getActiveChatAgents:x,getChatBranches:I,getTimeline:J,rawPosts:k,activeChatAgents:W,currentChatBranches:T,contextUsage:w,followupQueueItems:A.current,activeModel:P,activeThinkingLevel:R,supportsThinking:b,isAgentTurnActive:c})},[W,P,R,w,T,$,j,A,x,M,O,z,D,I,J,c,k,b]),V0=f(($0)=>{wN({widget:$0,dismissedLiveWidgetKeysRef:E,setFloatingWidget:H})},[E,H]),N0=f(()=>{yN({dismissedLiveWidgetKeysRef:E,setFloatingWidget:H})},[E,H]),h=f(($0,Q0)=>{IN({event:$0,widget:Q0,currentChatJid:$,isComposeBoxAgentActive:G,setFloatingWidget:H,handleCloseFloatingWidget:N0,handleMessageResponse:U,showIntentToast:Z,sendAgentMessage:L,buildFloatingWidgetDashboardSnapshot:j0})},[j0,$,N0,U,G,L,H,Z]);return g(()=>{_T({dismissedLiveWidgetKeysRef:E,setFloatingWidget:H})},[$,E,H]),{handleExtensionPanelAction:r,closeBtwPanel:e,handleBtwIntercept:_0,handleBtwRetry:E0,handleBtwInject:Z0,handleOpenFloatingWidget:V0,handleCloseFloatingWidget:N0,handleFloatingWidgetEvent:h}}k0();function $T(_){let{hasDockPanes:$,chatOnlyMode:j}=_;return Boolean($&&!j)}function jT(_){return!_}function gN(_){let{hasDockPanes:$,chatOnlyMode:j,toggleDock:G,toggleZenMode:Z,exitZenMode:X,zenMode:Y,previousChat:V,nextChat:Q}=_;g(()=>{if(!$T({hasDockPanes:$,chatOnlyMode:j}))return;return oL(G)},[j,$,G]),g(()=>{if(!jT(j))return;return iL({toggleZenMode:Z,exitZenMode:X,zenMode:Y,isZenModeActive:()=>Y})},[j,X,Z,Y]),g(()=>{if(typeof V!=="function"&&typeof Q!=="function")return;return sL({previousChat:V,nextChat:Q})},[Q,V]),g(()=>tL(),[]),g(()=>aL(),[])}function GT(_){return Boolean(_&&typeof _.closest==="function")}function uN(_=typeof window<"u"?window:null){if(!_||typeof _.getSelection!=="function")return!1;try{let $=_.getSelection();if(!$||$.isCollapsed)return!1;return String($.toString()||"").trim().length>0}catch{return!1}}function ZT(){return{active:!1,horizontalLocked:!1,cancelled:!1,startX:0,startY:0,lastX:0,lastY:0,startedAt:0}}function XT(){return{lastTriggeredAt:0,accumX:0}}function lj(_){if(!_)return;_.active=!1,_.horizontalLocked=!1,_.cancelled=!1,_.startX=0,_.startY=0,_.lastX=0,_.lastY=0,_.startedAt=0}var YT=["input","textarea","select","button","label","a[href]",'[contenteditable="true"]','[role="button"]',"[data-no-chat-swipe]",".compose-box",".compose-model-popup",".compose-session-popup",".workspace-explorer",".editor-pane-container",".dock-panel",".terminal-pane-content",".attachment-preview-modal",".rename-branch-overlay",".agent-request-modal",".adaptive-card-container",".adaptive-card-container input",".adaptive-card-container textarea",".adaptive-card-container select",".adaptive-card-container button"].join(", "),VT=[".agent-thinking",".agent-status-panel",".agent-thinking-intent"].join(", ");function bN(_){if(!_||!GT(_))return!1;let $=_.closest(YT);if(!$)return!0;return Boolean($.closest(VT))}function mN(_,$){if(!Array.isArray(_))return $?[$]:[];let j=new Set,G=_.filter((X)=>Boolean(X&&typeof X==="object")).filter((X)=>{let Y=typeof X.chat_jid==="string"?X.chat_jid.trim():"";if(!Y||j.has(Y))return!1;if(X.archived_at)return!1;return j.add(Y),!0});G.sort((X,Y)=>{if(Boolean(X.is_active)!==Boolean(Y.is_active))return X.is_active?-1:1;return String(X.chat_jid).localeCompare(String(Y.chat_jid))});let Z=G.map((X)=>String(X.chat_jid).trim());if($&&!j.has($))Z.unshift($);return Z}function pj(_){let $=mN(_.candidates,_.currentChatJid);if($.length<=1)return null;let j=$.indexOf(_.currentChatJid);if(j<0)return $[0]??null;let G=_.direction==="next"?(j+1)%$.length:(j-1+$.length)%$.length;return $[G]??null}function vN(_,$){let j=_.find((Z)=>Z.chat_jid===$);if(!j)return $.replace(/^[^:]+:/,"");return(typeof j.agent_name==="string"?j.agent_name.trim():"")||$.replace(/^[^:]+:/,"")}function qT(_){let $=mN(_.candidates,_.currentChatJid);if($.length<=1)return{prev:null,next:null};let j=$.indexOf(_.currentChatJid);if(j<0)return{prev:null,next:null};let G=$[(j-1+$.length)%$.length],Z=$[(j+1)%$.length];return{prev:{chatJid:G,name:vN(_.candidates,G)},next:{chatJid:Z,name:vN(_.candidates,Z)}}}function QT(_){let $=Number.isFinite(_.minDistancePx)?Number(_.minDistancePx):72,j=Number.isFinite(_.axisRatio)?Number(_.axisRatio):1.35;return Math.abs(_.dx)>=$&&Math.abs(_.dx)>Math.abs(_.dy)*j}function KT(_){let $=document.querySelector(".chat-swipe-indicator");if(!$)$=document.createElement("div"),$.className="chat-swipe-indicator",$.innerHTML='<span class="chat-swipe-chevron"></span><span class="chat-swipe-name"></span>',document.body.appendChild($);return $}function BT(_,$,j,G){let Z=Math.abs($),X=Math.min(Z/100,1),Y=Z>=72;_.style.display="flex",_.style.opacity=String(Math.min(X*2.5,1)),_.classList.toggle("chat-swipe-indicator--ready",Y);let V=$<0,Q=V?G.next:G.prev,q=_.querySelector(".chat-swipe-chevron");if(q)q.textContent=V?"›":"‹",q.style.order=V?"2":"0";let B=_.querySelector(".chat-swipe-name");if(B)B.textContent=Q?.name??""}function b6(_){_.style.display="none",_.style.opacity="0"}function cN(_){let{timelineRef:$,activeChatAgents:j,currentChatJid:G,onSwitch:Z,isIOSDevice:X,isLikelySafari:Y}=_,V=$.current;if(!V)return()=>{};let Q=X(),q=typeof Y==="function"?Y():!1;if(!Q&&!q)return()=>{};let B=ZT(),K=XT(),N=null,L={prev:null,next:null},U=!1;function E(){L=qT({candidates:j,currentChatJid:G})}E();function H(){if(!N)N=KT(V);return N}function D(k){let W=k==="next"?L.next:L.prev;if(W)Z(W.chatJid)}function M(k){U=String(k.pointerType||"").toLowerCase()==="pen"}function z(k){if(lj(B),E(),!Q)return;if(k.touches.length!==1)return;if(U)return;if(uN())return;if(!bN(k.target))return;let W=k.touches[0];B.active=!0,B.startX=W.clientX,B.startY=W.clientY,B.lastX=W.clientX,B.lastY=W.clientY,B.startedAt=Date.now()}function O(k){if(!B.active||B.cancelled)return;if(uN()){B.cancelled=!0,b6(H());return}let W=k.touches[0];if(!W)return;B.lastX=W.clientX,B.lastY=W.clientY;let T=B.lastX-B.startX,w=B.lastY-B.startY;if(!B.horizontalLocked){if(Math.abs(w)>16&&Math.abs(w)>=Math.abs(T)){B.cancelled=!0,b6(H());return}if(Math.abs(T)>12&&Math.abs(T)>Math.abs(w)*1.15)B.horizontalLocked=!0}if(B.horizontalLocked){if(k.cancelable)k.preventDefault();BT(H(),T,V.clientWidth,L)}}function x(){if(!B.active)return;let k=B.lastX-B.startX,W=B.lastY-B.startY,T=!B.cancelled&&QT({dx:k,dy:W});if(b6(H()),lj(B),T)D(k<0?"next":"prev")}function I(){b6(H()),lj(B)}function J(k){if(Q)return;if(!q)return;if(!bN(k.target))return;let{deltaX:W,deltaY:T}=k;if(!Number.isFinite(W)||Math.abs(W)<72)return;if(Math.abs(W)<=Math.abs(T)*1.35)return;if(k.cancelable)k.preventDefault();let w=Date.now();if(w-K.lastTriggeredAt<450)return;K.lastTriggeredAt=w,D(W>0?"next":"prev")}return V.addEventListener("pointerdown",M,{passive:!0}),V.addEventListener("touchstart",z,{passive:!0}),V.addEventListener("touchmove",O,{passive:!1}),V.addEventListener("touchend",x,{passive:!0}),V.addEventListener("touchcancel",I,{passive:!0}),V.addEventListener("wheel",J,{passive:!1}),()=>{if(V.removeEventListener("pointerdown",M),V.removeEventListener("touchstart",z),V.removeEventListener("touchmove",O),V.removeEventListener("touchend",x),V.removeEventListener("touchcancel",I),V.removeEventListener("wheel",J),N)b6(N),N.remove(),N=null}}function LT(_){return{currentChatJid:_.currentChatJid,followupQueueItemsRef:_.followupQueueItemsRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,refreshQueueState:_.refreshQueueState,setFollowupQueueItems:_.setFollowupQueueItems,showIntentToast:_.showIntentToast,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,steerAgentQueueItem:_.steerAgentQueueItem,removeAgentQueueItem:_.removeAgentQueueItem,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,refreshContextUsage:_.refreshContextUsage,refreshAutoresearchStatus:_.refreshAutoresearchStatus}}function NT(_){return{currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,isComposeBoxAgentActive:_.isComposeBoxAgentActive,showIntentToast:_.showIntentToast,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,refreshAutoresearchStatus:_.refreshAutoresearchStatus,stopAutoresearch:_.stopAutoresearch,dismissAutoresearch:_.dismissAutoresearch,streamSidePrompt:_.streamSidePrompt,btwAbortRef:_.btwAbortRef,btwSession:_.btwSession,setBtwSession:_.setBtwSession,sendAgentMessage:_.sendAgentMessage,handleMessageResponse:_.handleMessageResponse,dismissedLiveWidgetKeysRef:_.dismissedLiveWidgetKeysRef,setFloatingWidget:_.setFloatingWidget,getAgentStatus:_.getAgentStatus,getAgentContext:_.getAgentContext,getAgentQueueState:_.getAgentQueueState,getAgentModels:_.getAgentModels,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,getTimeline:_.getTimeline,rawPosts:_.rawPosts,activeChatAgents:_.activeChatAgents,currentChatBranches:_.currentChatBranches,contextUsage:_.contextUsage,followupQueueItemsRef:_.followupQueueItemsRef,activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:_.supportsThinking,isAgentTurnActive:_.isAgentTurnActive}}function FT(_){return{setWorkspaceOpen:_.setWorkspaceOpen,currentChatJid:_.currentChatJid,chatOnlyMode:_.chatOnlyMode,navigate:_.navigate,currentBranchRecord:_.currentBranchRecord,renameBranchInFlightRef:_.renameBranchInFlightRef,renameBranchLockUntilRef:_.renameBranchLockUntilRef,getFormLock:_.getFormLock,setRenameBranchNameDraft:_.setRenameBranchNameDraft,setIsRenameBranchFormOpen:_.setIsRenameBranchFormOpen,setIsRenamingBranch:_.setIsRenamingBranch,renameChatBranch:_.renameChatBranch,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,showIntentToast:_.showIntentToast,currentChatBranches:_.currentChatBranches,activeChatAgents:_.activeChatAgents,pruneChatBranch:_.pruneChatBranch,purgeChatBranch:_.purgeChatBranch,restoreChatBranch:_.restoreChatBranch,branchLoaderMode:_.branchLoaderMode,branchLoaderSourceChatJid:_.branchLoaderSourceChatJid,forkChatBranch:_.forkChatBranch,createRootChatSession:_.createRootChatSession,setBranchLoaderState:_.setBranchLoaderState,currentRootChatJid:_.currentRootChatJid,isWebAppMode:_.isWebAppMode,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,setActiveChatAgents:_.setActiveChatAgents,setCurrentChatBranches:_.setCurrentChatBranches,openEditor:_.openEditor,activateTab:_.activateTab,tabStripActiveId:_.tabStripActiveId,editorInstanceRef:_.editorInstanceRef,dockInstanceRef:_.dockInstanceRef,terminalTabPath:_.terminalTabPath,tabPaneOverrides:_.tabPaneOverrides,buildPaneDetachTransfer:_.buildPaneDetachTransfer,registerDetachedPaneWindow:_.registerDetachedPaneWindow,dockVisible:_.dockVisible,resolveTab:_.resolveTab,closeTab:_.closeTab,setDockVisible:_.setDockVisible,editorOpen:_.editorOpen,shellElement:_.shellElement,editorWidthRef:_.editorWidthRef,dockHeightRef:_.dockHeightRef,sidebarWidthRef:_.sidebarWidthRef,readStoredNumber:_.readStoredNumber}}function UT(_){return{hasDockPanes:_.hasDockPanes,chatOnlyMode:_.chatOnlyMode,toggleDock:_.toggleDock,toggleZenMode:_.toggleZenMode,exitZenMode:_.exitZenMode,zenMode:_.zenMode,previousChat:()=>{let $=pj({candidates:_.activeChatAgents,currentChatJid:_.currentChatJid,direction:"prev"});if($)_.handleBranchPickerChange?.($)},nextChat:()=>{let $=pj({candidates:_.activeChatAgents,currentChatJid:_.currentChatJid,direction:"next"});if($)_.handleBranchPickerChange?.($)}}}function hN(_){let $=xN(LT(_)),j=SN(NT({..._,handleMessageResponse:$.handleMessageResponse})),G=DN(FT(_));return gN(UT({..._,handleBranchPickerChange:G.handleBranchPickerChange})),{followupActions:$,sidepanelActions:j,branchPaneActions:G}}function DT(_,$){return Boolean(_||$!==null)}function HT(_){return{..._.agentStatusLifecycleBundle,..._.actionBundle,timelineViewActions:_.timelineViewActions,isComposeBoxAgentActive:_.isComposeBoxAgentActive}}function ET(_,$){let{routeState:j,searchState:G,shellState:Z,timeline:X,interaction:Y,paneRuntime:V,refs:Q,setters:q,services:B,helpers:K}=_;return{currentChatJid:j.currentChatJid,activeChatJidRef:Q.activeChatJidRef,queueRefreshGenRef:Q.queueRefreshGenRef,dismissedQueueRowIdsRef:Q.dismissedQueueRowIdsRef,getAgentQueueState:B.getAgentQueueState,setFollowupQueueItems:q.setFollowupQueueItems,clearQueuedSteerStateIfStale:Y.clearQueuedSteerStateIfStale,getAgentContext:B.getAgentContext,setContextUsage:q.setContextUsage,getAutoresearchStatus:B.getAutoresearchStatus,setExtensionStatusPanels:q.setExtensionStatusPanels,setPendingExtensionPanelActions:q.setPendingExtensionPanelActions,setExtensionWorkingState:q.setExtensionWorkingState,getAgentStatus:B.getAgentStatus,wasAgentActiveRef:Q.wasAgentActiveRef,viewStateRef:Q.viewStateRef,refreshTimeline:X.refreshTimeline,clearAgentRunState:Y.clearAgentRunState,agentStatusRef:Q.agentStatusRef,pendingRequestRef:Q.pendingRequestRef,thoughtBufferRef:Q.thoughtBufferRef,draftBufferRef:Q.draftBufferRef,previewResyncPendingRef:Q.previewResyncPendingRef,previewResyncGenerationRef:Q.previewResyncGenerationRef,setAgentStatus:q.setAgentStatus,setAgentDraft:q.setAgentDraft,setAgentPlan:q.setAgentPlan,setAgentThought:q.setAgentThought,setPendingRequest:q.setPendingRequest,setActiveTurn:Y.setActiveTurn,noteAgentActivity:Y.noteAgentActivity,showLastActivity:Y.showLastActivity,clearLastActivityFlag:Y.clearLastActivityFlag,isAgentRunningRef:Q.isAgentRunningRef,currentTurnIdRef:Q.currentTurnIdRef,silentRecoveryRef:Q.silentRecoveryRef,silenceRefreshMs:B.silenceRefreshMs,lastAgentEventRef:Q.lastAgentEventRef,lastSilenceNoticeRef:Q.lastSilenceNoticeRef,silenceWarningMs:B.silenceWarningMs,silenceFinalizeMs:B.silenceFinalizeMs,isCompactionStatus:B.isCompactionStatus,serverVersionContext:{currentAppAssetVersion:B.currentAppAssetVersion,staleUiVersionRef:Q.staleUiVersionRef,staleUiReloadScheduledRef:Q.staleUiReloadScheduledRef,tabStoreHasUnsaved:B.tabStoreHasUnsaved,isAgentRunningRef:Q.isAgentRunningRef,pendingRequestRef:Q.pendingRequestRef,showIntentToast:$},setConnectionStatus:q.setConnectionStatus,setStateAccessFailed:q.setStateAccessFailed,hasConnectedOnceRef:Q.hasConnectedOnceRef,getAgents:B.getAgents,setAgents:q.setAgents,setUserProfile:q.setUserProfile,applyBranding:Y.applyBranding,readStoredNumber:K.readStoredNumber,sidebarWidthRef:Q.sidebarWidthRef,appShellRef:Q.appShellRef,currentRootChatJid:j.currentRootChatJid,getAgentModels:B.getAgentModels,getActiveChatAgents:B.getActiveChatAgents,getChatBranches:B.getChatBranches,setActiveChatAgents:q.setActiveChatAgents,setCurrentChatBranches:q.setCurrentChatBranches,setActiveModel:q.setActiveModel,setActiveThinkingLevel:q.setActiveThinkingLevel,setSupportsThinking:q.setSupportsThinking,setActiveModelUsage:q.setActiveModelUsage,setAgentModelsPayload:q.setAgentModelsPayload,setHasLoadedAgentModels:q.setHasLoadedAgentModels,agentsRef:Q.agentsRef,currentHashtag:G.currentHashtag,searchQuery:G.searchQuery,searchScope:G.searchScope,loadPosts:X.loadPosts,searchPosts:B.searchPosts,setPosts:X.setPosts,setHasMore:X.setHasMore,scrollToBottom:X.scrollToBottom,paneStateOwnerChatJidRef:Q.paneStateOwnerChatJidRef,chatPaneStateByChatRef:Q.chatPaneStateByChatRef,snapshotCurrentChatPaneState:Y.snapshotCurrentChatPaneState,restoreChatPaneState:Y.restoreChatPaneState,setFloatingWidget:q.setFloatingWidget,dismissedLiveWidgetKeysRef:Q.dismissedLiveWidgetKeysRef,posts:X.posts,scrollToMessage:Y.composeReferenceActions.scrollToMessage,draftThrottleRef:Q.draftThrottleRef,thoughtThrottleRef:Q.thoughtThrottleRef,followupQueueItemsRef:Q.followupQueueItemsRef,scrollToBottomRef:X.scrollToBottomRef,hasMoreRef:X.hasMoreRef,loadMoreRef:X.loadMoreRef,lastAgentResponseRef:Q.lastAgentResponseRef,notifyForFinalResponse:Y.notifyForFinalResponse,setSteerQueuedTurnId:q.setSteerQueuedTurnId,refreshActiveEditorFromWorkspace:V.refreshActiveEditorFromWorkspace,showIntentToast:$,removeStalledPost:Y.recoveryCallbacks.removeStalledPost,preserveTimelineScrollTop:X.preserveTimelineScrollTop,finalizeStalledResponse:()=>{q.setExtensionWorkingState({message:null,indicator:null,visible:!0}),Y.recoveryCallbacks.finalizeStalledResponse()},connectionStatus:Z.connectionStatus,agentStatus:B.agentStatus,thoughtExpandedRef:Q.thoughtExpandedRef,draftExpandedRef:Q.draftExpandedRef,steerQueuedTurnIdRef:Q.steerQueuedTurnIdRef}}function lN(_){let{routeState:$,searchState:j,shellState:G,timeline:Z,interaction:X,paneRuntime:Y,refs:V,setters:Q,services:q,helpers:B}=_,K=X.composeReferenceActions.showIntentToast,N=CB({currentHashtag:j.currentHashtag,searchQuery:j.searchQuery,searchOpen:j.searchOpen,searchScope:j.searchScope,currentChatJid:$.currentChatJid,currentRootChatJid:$.currentRootChatJid,posts:Z.posts,loadPosts:Z.loadPosts,searchPosts:q.searchPosts,setCurrentHashtag:j.setCurrentHashtag,setSearchQuery:j.setSearchQuery,setSearchOpen:j.setSearchOpen,setSearchScope:j.setSearchScope,setPosts:Z.setPosts,setHasMore:Z.setHasMore,preserveTimelineScrollTop:Z.preserveTimelineScrollTop,setRemovingPostIds:Q.setRemovingPostIds,deletePost:q.deletePost,hasMoreRef:Z.hasMoreRef,loadMoreRef:Z.loadMoreRef}),L=vL(ET(_,K)),U=DT(q.isAgentTurnActive,q.agentStatus),E=hN({currentChatJid:$.currentChatJid,followupQueueItemsRef:V.followupQueueItemsRef,dismissedQueueRowIdsRef:V.dismissedQueueRowIdsRef,setFollowupQueueItems:Q.setFollowupQueueItems,showIntentToast:K,clearQueuedSteerStateIfStale:X.clearQueuedSteerStateIfStale,steerAgentQueueItem:q.steerAgentQueueItem,removeAgentQueueItem:q.removeAgentQueueItem,refreshQueueState:L.agentStatusLifecycle.refreshQueueState,refreshActiveChatAgents:L.chatRefreshLifecycle.refreshActiveChatAgents,refreshCurrentChatBranches:L.chatRefreshLifecycle.refreshCurrentChatBranches,refreshContextUsage:L.agentStatusLifecycle.refreshContextUsage,refreshAutoresearchStatus:L.agentStatusLifecycle.refreshAutoresearchStatus,currentRootChatJid:$.currentRootChatJid,isComposeBoxAgentActive:U,setPendingExtensionPanelActions:Q.setPendingExtensionPanelActions,stopAutoresearch:q.stopAutoresearch,dismissAutoresearch:q.dismissAutoresearch,streamSidePrompt:q.streamSidePrompt,btwAbortRef:V.btwAbortRef,btwSession:G.btwSession,setBtwSession:Q.setBtwSession,sendAgentMessage:q.sendAgentMessage,dismissedLiveWidgetKeysRef:V.dismissedLiveWidgetKeysRef,setFloatingWidget:Q.setFloatingWidget,getAgentStatus:q.getAgentStatus,getAgentContext:q.getAgentContext,getAgentQueueState:q.getAgentQueueState,getAgentModels:q.getAgentModels,getActiveChatAgents:q.getActiveChatAgents,getChatBranches:q.getChatBranches,getTimeline:q.getTimeline,rawPosts:Z.rawPosts,activeChatAgents:G.activeChatAgents,currentChatBranches:G.currentChatBranches,contextUsage:G.contextUsage,activeModel:G.activeModel,activeThinkingLevel:G.activeThinkingLevel,supportsThinking:G.supportsThinking,isAgentTurnActive:q.isAgentTurnActive,chatOnlyMode:$.chatOnlyMode,navigate:$.navigate,setWorkspaceOpen:G.setWorkspaceOpen,currentBranchRecord:G.currentBranchRecord,renameBranchInFlightRef:V.renameBranchInFlightRef,renameBranchLockUntilRef:V.renameBranchLockUntilRef,getFormLock:B.getFormLock,setRenameBranchNameDraft:Q.setRenameBranchNameDraft,setIsRenameBranchFormOpen:Q.setIsRenameBranchFormOpen,setIsRenamingBranch:Q.setIsRenamingBranch,renameChatBranch:q.renameChatBranch,pruneChatBranch:q.pruneChatBranch,purgeChatBranch:q.purgeChatBranch,restoreChatBranch:q.restoreChatBranch,branchLoaderMode:$.branchLoaderMode,branchLoaderSourceChatJid:$.branchLoaderSourceChatJid,forkChatBranch:q.forkChatBranch,createRootChatSession:q.createRootChatSession,setBranchLoaderState:Q.setBranchLoaderState,isWebAppMode:$.isWebAppMode,setActiveChatAgents:Q.setActiveChatAgents,setCurrentChatBranches:Q.setCurrentChatBranches,openEditor:q.openEditor,tabStripActiveId:q.tabStripActiveId,editorInstanceRef:Y.editorInstanceRef,dockInstanceRef:Y.dockInstanceRef,terminalTabPath:q.terminalTabPath,tabPaneOverrides:q.tabPaneOverrides,buildPaneDetachTransfer:Y.buildPaneDetachTransfer,registerDetachedPaneWindow:Y.registerDetachedPaneWindow,dockVisible:Y.dockVisible,resolveTab:q.resolveTab,closeTab:q.closeTab,setDockVisible:Y.setDockVisible,editorOpen:q.editorOpen,shellElement:V.appShellRef.current,editorWidthRef:V.editorWidthRef,dockHeightRef:V.dockHeightRef,sidebarWidthRef:V.sidebarWidthRef,readStoredNumber:B.readStoredNumber,hasDockPanes:Y.hasDockPanes,toggleDock:Y.toggleDock,toggleZenMode:Y.toggleZenMode,exitZenMode:Y.exitZenMode,zenMode:Y.zenMode});return HT({agentStatusLifecycleBundle:L,actionBundle:E,timelineViewActions:N,isComposeBoxAgentActive:U})}k0();M_();k0();function pN(_){try{return _?.focus?.(),!0}catch($){return!1}}function v6(_,$){if(!_||!$)return null;try{return _.getItem($)}catch{return null}}function rj(_,$,j){if(!_||!$)return;try{_.setItem($,j)}catch{return}}function rN(_,$){if(!_||!$)return;try{_.removeItem($)}catch{return}}function nN(_="piclaw"){try{if(typeof crypto<"u"&&typeof crypto.randomUUID==="function")return`${_}-${crypto.randomUUID()}`}catch($){console.debug("[notification-delivery-coordinator] crypto.randomUUID threw; falling back to Math.random-based id.",$)}return`${_}-${Math.random().toString(36).slice(2)}-${Date.now().toString(36)}`}function X4(_=typeof window<"u"?window:null){let $=_?.localStorage,j=v6($,"piclaw.notifications.deviceId");if(j)return j;let G=nN("device");return rj($,"piclaw.notifications.deviceId",G),v6($,"piclaw.notifications.deviceId")||G}function m6(_=typeof window<"u"?window:null){let $=_?.sessionStorage,j=v6($,"piclaw.notifications.clientId");if(j)return j;let G=_?.__PICLAW_NOTIFICATION_CLIENT_ID__;if(typeof G==="string"&&G.trim())return G.trim();let Z=nN("client");if(rj($,"piclaw.notifications.clientId",Z),_)_.__PICLAW_NOTIFICATION_CLIENT_ID__=v6($,"piclaw.notifications.clientId")||Z;return _?.__PICLAW_NOTIFICATION_CLIENT_ID__||Z}function dN(_,$){return`piclaw.notifications.presence.${String(_||"").trim()}:${String($||"").trim()}`}function nj(_={}){let $=_.runtimeWindow??(typeof window<"u"?window:null),j=_.runtimeDocument??(typeof document<"u"?document:null),G=typeof _.chatJid==="string"&&_.chatJid.trim()?_.chatJid.trim():"",Z=typeof _.deviceId==="string"&&_.deviceId.trim()?_.deviceId.trim():X4($),X=typeof _.clientId==="string"&&_.clientId.trim()?_.clientId.trim():m6($),Y=Number.isFinite(_.updatedAtMs)?Number(_.updatedAtMs):Date.now(),V=Boolean(typeof j?.hasFocus==="function"?j.hasFocus():!0),q=String(j?.visibilityState||"").trim().toLowerCase()==="hidden"?"hidden":"visible";return{deviceId:Z,clientId:X,chatJid:G,visibilityState:q,hasFocus:V,updatedAtMs:Y}}function oN(_,$=typeof window<"u"?window:null){let j=$?.localStorage,G=typeof _?.deviceId==="string"?_.deviceId.trim():"",Z=typeof _?.clientId==="string"?_.clientId.trim():"",X=typeof _?.chatJid==="string"?_.chatJid.trim():"";if(!j||!G||!Z||!X)return!1;return rj(j,dN(G,Z),JSON.stringify({deviceId:G,clientId:Z,chatJid:X,visibilityState:_.visibilityState==="hidden"?"hidden":"visible",hasFocus:Boolean(_.hasFocus),updatedAtMs:Number.isFinite(_.updatedAtMs)?Number(_.updatedAtMs):Date.now()})),!0}function iN(_,$=typeof window<"u"?window:null){let j=$?.localStorage,G=typeof _?.deviceId==="string"?_.deviceId.trim():"",Z=typeof _?.clientId==="string"?_.clientId.trim():"";if(!j||!G||!Z)return!1;return rN(j,dN(G,Z)),!0}function WT(_={}){let $=_.runtimeWindow??(typeof window<"u"?window:null),j=$?.localStorage,G=typeof _.deviceId==="string"&&_.deviceId.trim()?_.deviceId.trim():X4($),Z=Number.isFinite(_.nowMs)?Number(_.nowMs):Date.now(),X=Number.isFinite(_.ttlMs)?Number(_.ttlMs):120000;if(!j||!G)return[];let Y=`piclaw.notifications.presence.${G}:`,V=[],Q=[];for(let q=0;q<j.length;q+=1){let B=j.key(q);if(!B||!B.startsWith(Y))continue;let K=v6(j,B);if(!K){Q.push(B);continue}try{let N=JSON.parse(K),L=Number(N?.updatedAtMs);if(!Number.isFinite(L)||Z-L>X){Q.push(B);continue}let U=typeof N?.chatJid==="string"?N.chatJid.trim():"",E=typeof N?.clientId==="string"?N.clientId.trim():"";if(!U||!E){Q.push(B);continue}V.push({deviceId:G,clientId:E,chatJid:U,visibilityState:N?.visibilityState==="hidden"?"hidden":"visible",hasFocus:Boolean(N?.hasFocus),updatedAtMs:L})}catch{Q.push(B)}}return Q.forEach((q)=>rN(j,q)),V.sort((q,B)=>q.clientId.localeCompare(B.clientId))}function sN(_={}){let $=nj(_),j=$.chatJid;if(!j)return!1;let G=WT({runtimeWindow:_.runtimeWindow,deviceId:$.deviceId,nowMs:$.updatedAtMs,ttlMs:_.ttlMs}).filter((Y)=>Y.chatJid===j&&Y.clientId!==$.clientId),Z=[$,...G];if(Z.some((Y)=>Y.visibilityState==="visible"))return!1;let X=[...Z].sort((Y,V)=>Y.clientId.localeCompare(V.clientId))[0]||null;return Boolean(X&&X.clientId===$.clientId)}function OT(_=typeof window<"u"?window:null){return Boolean(_?.__PICLAW_NOTIFICATION_SOURCE_LABELS_ENABLED__)}function zT(_,$="",j=typeof window<"u"?window:null){let G=typeof _==="string"&&_.trim()?_.trim():"PiClaw",Z=OT(j)&&typeof $==="string"?$.trim():"";return Z?`${G} [${Z}]`:G}function JT(_){let $=String(_||"").replace(/-/g,"+").replace(/_/g,"/"),j=$.padEnd(Math.ceil($.length/4)*4,"="),G=atob(j),Z=new Uint8Array(G.length);for(let X=0;X<G.length;X+=1)Z[X]=G.charCodeAt(X);return Z}function p8(_=typeof window<"u"?window:null){if(!_||!_.isSecureContext)return!1;return"serviceWorker"in _.navigator&&"PushManager"in _}async function tN(_){return await _.navigator.serviceWorker.register("/sw.js",{updateViaCache:"none"}),await _.navigator.serviceWorker.ready}async function AT(_){let $=await tN(_),j=await $.pushManager.getSubscription();if(j)return j;let G=await x7(),Z=typeof G?.publicKey==="string"?G.publicKey.trim():"";if(!Z)throw Error("Missing web push public key.");return $.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:JT(Z)})}async function aN(_,$){if(!p8(_))return!1;let j=await AT(_);return await C7(j.toJSON?j.toJSON():j,{deviceId:$}),!0}async function kT(_,$){if(!p8(_))return!1;let G=await(await tN(_)).pushManager.getSubscription();if(!G)return!1;let Z=G.toJSON?G.toJSON():G;try{await P7(Z,{deviceId:$})}catch(X){console.warn("Failed to remove web push subscription from the server:",X)}try{await G.unsubscribe()}catch(X){console.warn("Failed to unsubscribe from web push notifications:",X)}return!0}function MT(_,$={}){let j=$.runtimeWindow??(typeof window<"u"?window:null);if(!j?.fetch)return Promise.resolve(!1);return j.fetch("/agent/push/presence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_),keepalive:Boolean($.keepalive)}).then(()=>!0).catch(()=>!1)}function TT(_,$=typeof window<"u"?window:null){try{if($?.navigator?.sendBeacon){let j=new Blob([JSON.stringify(_)],{type:"application/json"});return $.navigator.sendBeacon("/agent/push/presence",j)}}catch(j){console.debug("[use-notifications] Ignoring sendBeacon failure for best-effort notification presence teardown.",j,{hasNavigator:Boolean($?.navigator)})}return!1}function eN(_={}){let $=typeof _?.chatJid==="string"&&_.chatJid.trim()?_.chatJid.trim():"web:default",[j,G]=C(!1),[Z,X]=C("default"),Y=u(!1),V=u(null),Q=u(null);g(()=>{let L=U$("notificationsEnabled",!1);if(Y.current=L,G(L),typeof window<"u")V.current=X4(window),Q.current=m6(window);if(typeof Notification>"u")return;let U=Notification.permission;if(X(U),U==="denied"&&L){Y.current=!1,G(!1),q_("notificationsEnabled","false");return}if(U==="granted"&&L&&typeof window<"u"&&p8(window))aN(window,V.current||X4(window)).catch((E)=>{console.warn("Failed to refresh stored web push subscription:",E)})},[]),g(()=>{Y.current=j},[j]),g(()=>{if(typeof window>"u"||typeof document>"u")return;let L=V.current||X4(window),U=Q.current||m6(window);V.current=L,Q.current=U;let E=(z=!0,O="fetch")=>{let x=nj({chatJid:$,runtimeWindow:window,runtimeDocument:document,deviceId:L,clientId:U});if(z)oN(x,window);else iN({deviceId:L,clientId:U},window);let I={device_id:L,client_id:U,chat_jid:$,visibility_state:x.visibilityState,has_focus:x.hasFocus,active:z};if(!z&&O==="beacon"&&TT(I,window))return;MT(I,{runtimeWindow:window,keepalive:!z||O==="keepalive"})},H=()=>E(!0),D=()=>E(!1,"beacon");E(!0);let M=setInterval(()=>E(!0),15000);return document.addEventListener("visibilitychange",H),window.addEventListener("focus",H),window.addEventListener("blur",H),window.addEventListener("pageshow",H),window.addEventListener("pagehide",D),window.addEventListener("beforeunload",D),()=>{clearInterval(M),document.removeEventListener("visibilitychange",H),window.removeEventListener("focus",H),window.removeEventListener("blur",H),window.removeEventListener("pageshow",H),window.removeEventListener("pagehide",D),window.removeEventListener("beforeunload",D),E(!1,"beacon")}},[$]);let q=f(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let L=Notification.requestPermission();if(L&&typeof L.then==="function")return L;return Promise.resolve(L)}catch(L){return console.debug("[use-notifications] Notification permission request threw; returning default permission state.",L),Promise.resolve("default")}},[]),B=f(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){X("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let E=await q();if(X(E||"default"),E!=="granted"){Y.current=!1,G(!1),q_("notificationsEnabled","false");return}}let L=!Y.current;Y.current=L,G(L),q_("notificationsEnabled",String(L));let U=V.current||X4(window);if(V.current=U,p8(window))try{if(L)await aN(window,U);else await kT(window,U)}catch(E){if(console.warn("Failed to sync web push notifications:",E),L)alert("Notifications were enabled, but web push setup failed. If you are on iPhone or iPad, reopen PiClaw from the Home Screen and try again.")}},[q]),K=f((L,U,E={})=>{if(!Y.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let H=new Notification(zT(L,E?.sourceLabel||"",window),{body:U});return H.onclick=()=>{pN(window)},!0}catch(H){return console.debug("[use-notifications] Local notification creation failed.",H,{title:typeof L==="string"?L:null}),!1}},[]),N=f((L)=>{if(typeof window>"u"||typeof document>"u")return!1;return sN({chatJid:typeof L==="string"&&L.trim()?L.trim():$,runtimeWindow:window,runtimeDocument:document,deviceId:V.current||X4(window),clientId:Q.current||m6(window)})},[$]);return{notificationsEnabled:j,notificationPermission:Z,toggleNotifications:B,notify:K,shouldNotifyLocallyForChat:N}}function wT(_){let{activeChatAgents:$,currentChatBranches:j,currentChatJid:G}=_,Z=j.find((X)=>X?.chat_jid===G);if(Z)return Z;return $.find((X)=>X?.chat_jid===G)||null}function yT(_){return{status:_?"running":"idle",message:_?"Preparing a new chat branch…":""}}function IT(_,$){let j=typeof $?.root_chat_jid==="string"?$.root_chat_jid.trim():"";if(j)return j;let G=typeof _==="string"?_.trim():"";if(!G)return"web:default";let Z=G.indexOf(":branch:");if(Z<=0)return G;return G.slice(0,Z)||G}function _F(_){let{currentChatJid:$,branchLoaderMode:j}=_,[G,Z]=C("disconnected"),[X,Y]=C(!1),[V,Q]=C(()=>f1()),[q,B]=C(null),[K,N]=C(null),[L,U]=C(!1),[E,H]=C("current"),[D,M]=C([]),[z,O]=C([]),[x,I]=C([]),[J,k]=C(null),[W,T]=C({}),[w,A]=C(null),[P,R]=C(null),[b,c]=C(!1),[r,e]=C(null),[m,_0]=C(null),[E0,Z0]=C(!1),[j0,V0]=C([]),[N0,h]=C([]),[$0,Q0]=C(null),[O0,a]=C(()=>new Map),[X0,W0]=C(()=>new Set),[P0,l0]=C(()=>({message:null,indicator:null,visible:!0})),[u0,G_]=C([]),[h0,s0]=C(!1),[R0,o0]=C(()=>WK()),[v0,t0]=C(null),[i0,F_]=C(null),Z_=u(new Set),m0=Y0(()=>wT({activeChatAgents:j0,currentChatBranches:N0,currentChatJid:$}),[j0,N0,$]),z0=Y0(()=>IT($,m0),[m0,$]),V_=EK(E),[d0,H_]=C(()=>yT(j)),D0=u0.length,g0=u(new Set),x0=u([]),r0=u(new Set),z_=u(0),Q_=u({inFlight:!1,lastAttemptAt:0,turnId:null});g0.current=new Set(u0.map((b1)=>b1.row_id)),x0.current=u0;let{notificationsEnabled:U_,notificationPermission:N_,toggleNotifications:J_,notify:I_,shouldNotifyLocallyForChat:P_}=eN({chatJid:$}),[E_,i_]=C(()=>new Set),[R_,q0]=C(()=>bK({allowLegacyFallback:!0,defaultValue:!1})),[v,n]=C({name:"You",avatar_url:null,avatar_background:null}),s=u(null),G0=u(!1),F0=u(!1),T0=u(!1),A0=u(null),M0=u($),w0=u(new Map),c0=u($),S0=u(0),n0=u(0),e0=u({}),I0=u({name:null,avatar_url:null}),y0=u({currentHashtag:null,searchQuery:null,searchOpen:!1}),D_=u(null),__=u(null),d=u(0),L0=u(0),p0=u(0),j_=u(null),f_=u(null),F1=u(null),u_=u(null),z1=u(0),x_=u({title:null,avatarBase:null}),A_=u(null),J1=u(!1),[W_,k_]=C(!1),A1=u(0),[l_,s_]=C(!1),[t_,L_]=C(""),y1=Y0(()=>Z8(t_,m0?.agent_name||""),[m0?.agent_name,t_]),U1=u(null);return{connectionStatus:G,setConnectionStatus:Z,stateAccessFailed:X,setStateAccessFailed:Y,isWebAppMode:V,setIsWebAppMode:Q,currentHashtag:q,setCurrentHashtag:B,searchQuery:K,setSearchQuery:N,searchOpen:L,setSearchOpen:U,searchScope:E,setSearchScope:H,fileRefs:D,setFileRefs:M,folderRefs:z,setFolderRefs:O,messageRefs:x,setMessageRefs:I,intentToast:J,setIntentToast:k,agents:W,setAgents:T,activeModel:w,setActiveModel:A,activeThinkingLevel:P,setActiveThinkingLevel:R,supportsThinking:b,setSupportsThinking:c,activeModelUsage:r,setActiveModelUsage:e,agentModelsPayload:m,setAgentModelsPayload:_0,hasLoadedAgentModels:E0,setHasLoadedAgentModels:Z0,activeChatAgents:j0,setActiveChatAgents:V0,currentChatBranches:N0,setCurrentChatBranches:h,contextUsage:$0,setContextUsage:Q0,extensionStatusPanels:O0,setExtensionStatusPanels:a,pendingExtensionPanelActions:X0,setPendingExtensionPanelActions:W0,extensionWorkingState:P0,setExtensionWorkingState:l0,followupQueueItems:u0,setFollowupQueueItems:G_,isAgentTurnActive:h0,setIsAgentTurnActive:s0,btwSession:R0,setBtwSession:o0,floatingWidget:v0,setFloatingWidget:t0,attachmentPreview:i0,setAttachmentPreview:F_,dismissedLiveWidgetKeysRef:Z_,currentBranchRecord:m0,currentRootChatJid:z0,activeSearchScopeLabel:V_,branchLoaderState:d0,setBranchLoaderState:H_,followupQueueCount:D0,followupQueueRowIdsRef:g0,followupQueueItemsRef:x0,dismissedQueueRowIdsRef:r0,queueRefreshGenRef:z_,silentRecoveryRef:Q_,notificationsEnabled:U_,notificationPermission:N_,handleToggleNotifications:J_,notify:I_,shouldNotifyLocallyForChat:P_,removingPostIds:E_,setRemovingPostIds:i_,workspaceOpen:R_,setWorkspaceOpen:q0,userProfile:v,setUserProfile:n,staleUiVersionRef:s,staleUiReloadScheduledRef:G0,hasConnectedOnceRef:F0,wasAgentActiveRef:T0,agentStatusRef:A0,activeChatJidRef:M0,chatPaneStateByChatRef:w0,paneStateOwnerChatJidRef:c0,draftThrottleRef:S0,thoughtThrottleRef:n0,agentsRef:e0,userProfileRef:I0,viewStateRef:y0,timelineRef:D_,appShellRef:__,sidebarWidthRef:d,editorWidthRef:L0,dockHeightRef:p0,lastNotifiedIdRef:j_,lastAgentResponseRef:f_,btwAbortRef:F1,lastActivityTimerRef:u_,lastActivityTokenRef:z1,brandingRef:x_,intentToastTimerRef:A_,renameBranchInFlightRef:J1,isRenamingBranch:W_,setIsRenamingBranch:k_,renameBranchLockUntilRef:A1,isRenameBranchFormOpen:l_,setIsRenameBranchFormOpen:s_,renameBranchNameDraft:t_,setRenameBranchNameDraft:L_,renameBranchDraftState:y1,renameBranchNameInputRef:U1}}k0();k0();function xT(_,$,j,G){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Z=!1,X=new Map;for(let[Y,V]of _.entries()){let Q=Y;if(G==="dir"){if(Y===$)Q=j,Z=!0;else if(Y.startsWith(`${$}/`))Q=`${j}${Y.slice($.length)}`,Z=!0}else if(Y===$)Q=j,Z=!0;X.set(Q,V)}return Z?X:_}function $F(_,$,j,G){if(!(_ instanceof Set)||_.size===0||!$||!j)return _;let Z=!1,X=new Set;for(let Y of _.values()){let V=Y;if(G==="dir"){if(Y===$)V=j,Z=!0;else if(Y.startsWith(`${$}/`))V=`${j}${Y.slice($.length)}`,Z=!0}else if(Y===$)V=j,Z=!0;X.add(V)}return Z?X:_}function jF({onTabClosed:_}={}){let $=u(_);$.current=_;let[j,G]=C(()=>$_.getTabs()),[Z,X]=C(()=>$_.getActiveId()),[Y,V]=C(()=>$_.getTabs().length>0);g(()=>{return $_.onChange((A,P)=>{G(A),X(P),V(A.length>0)})},[]);let[Q,q]=C(()=>new Set),[B,K]=C(()=>new Set),[N,L]=C(()=>new Map),U=f((A)=>{q((P)=>{let R=new Set(P);if(R.has(A))R.delete(A);else R.add(A);return R})},[]),E=f((A)=>{q((P)=>{if(!P.has(A))return P;let R=new Set(P);return R.delete(A),R})},[]),H=f((A)=>{K((P)=>{if(!P.has(A))return P;let R=new Set(P);return R.delete(A),R})},[]),D=f((A)=>{L((P)=>{if(!P.has(A))return P;let R=new Map(P);return R.delete(A),R})},[]),M=f((A,P={})=>{if(!A)return;let R=typeof P?.paneOverrideId==="string"&&P.paneOverrideId.trim()?P.paneOverrideId.trim():null,b={path:A,mode:"edit"};try{if(!(R?Y_.get(R):Y_.resolve(b))){if(!Y_.get("editor")){console.warn(`[openEditor] No pane handler for: ${A}`);return}}}catch(m){console.warn(`[openEditor] paneRegistry.resolve() error for "${A}":`,m)}let c=typeof P?.label==="string"&&P.label.trim()?P.label.trim():void 0,r=P?.viewState&&typeof P.viewState==="object"?P.viewState:null,e=P?.diffMode==="saved"?"saved":null;if($_.open(A,c),r)$_.saveViewState(A,r);if(R)L((m)=>{if(m.get(A)===R)return m;let _0=new Map(m);return _0.set(A,R),_0});if(e==="saved")K((m)=>{if(m.has(A))return m;let _0=new Set(m);return _0.add(A),_0})},[]),z=f(()=>{let A=$_.getActiveId();if(A){let P=$_.get(A);if(P?.dirty){if(!window.confirm(`"${P.label}" has unsaved changes. Close anyway?`))return}$_.close(A),E(A),H(A),D(A),$.current?.(A)}},[H,D,E]),O=f((A)=>{let P=$_.get(A);if(P?.dirty){if(!window.confirm(`"${P.label}" has unsaved changes. Close anyway?`))return}$_.close(A),E(A),H(A),D(A),$.current?.(A)},[H,D,E]),x=f((A)=>{$_.activate(A)},[]),I=f((A)=>{let P=$_.getTabs().filter((c)=>c.id!==A&&!c.pinned),R=P.filter((c)=>c.dirty).length;if(R>0){if(!window.confirm(`${R} unsaved tab${R>1?"s":""} will be closed. Continue?`))return}let b=P.map((c)=>c.id);$_.closeOthers(A),b.forEach((c)=>{E(c),H(c),D(c),$.current?.(c)})},[H,D,E]),J=f(()=>{let A=$_.getTabs().filter((b)=>!b.pinned),P=A.filter((b)=>b.dirty).length;if(P>0){if(!window.confirm(`${P} unsaved tab${P>1?"s":""} will be closed. Continue?`))return}let R=A.map((b)=>b.id);$_.closeAll(),R.forEach((b)=>{E(b),H(b),D(b),$.current?.(b)})},[H,D,E]),k=f((A)=>{$_.togglePin(A)},[]),W=f((A)=>{if(!A)return;K((P)=>{let R=new Set(P);if(R.has(A))R.delete(A);else R.add(A);return R}),$_.activate(A)},[]),T=f((A)=>{if(!A)return;L((P)=>{if(P.get(A)==="editor")return P;let R=new Map(P);return R.set(A,"editor"),R}),$_.activate(A)},[]),w=f(()=>{let A=$_.getActiveId();if(A)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:A}}))},[]);return g(()=>{let A=(P)=>{let{oldPath:R,newPath:b,type:c}=P.detail||{};if(!R||!b)return;if(c==="dir"){for(let r of $_.getTabs())if(r.path===R||r.path.startsWith(`${R}/`)){let e=`${b}${r.path.slice(R.length)}`;$_.rename(r.id,e)}}else $_.rename(R,b);q((r)=>$F(r,R,b,c)),K((r)=>$F(r,R,b,c)),L((r)=>xT(r,R,b,c))};return window.addEventListener("workspace-file-renamed",A),()=>window.removeEventListener("workspace-file-renamed",A)},[]),g(()=>{let A=(P)=>{if($_.hasUnsaved())P.preventDefault(),P.returnValue=""};return window.addEventListener("beforeunload",A),()=>window.removeEventListener("beforeunload",A)},[]),{editorOpen:Y,tabStripTabs:j,tabStripActiveId:Z,previewTabs:Q,diffTabs:B,tabPaneOverrides:N,openEditor:M,closeEditor:z,handleTabClose:O,handleTabActivate:x,handleTabCloseOthers:I,handleTabCloseAll:J,handleTabTogglePin:k,handleTabTogglePreview:U,handleTabToggleDiff:W,handleTabEditSource:T,revealInExplorer:w}}k0();function t1(_){return typeof _==="string"&&_.trim()?_.trim():null}function CT(_=globalThis){try{return typeof _?.crypto?.randomUUID==="function"?_.crypto.randomUUID():null}catch($){return null}}function m4(_="pane"){let $=CT();if($)return`${_}-${$}`;return`${_}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function GF(_){let $=t1(_?.paneInstanceId),j=t1(_?.paneWindowId);if(!$||!j)return{};let G=t1(_?.paneSourceWindowId);return{pane_instance_id:$,pane_window_id:j,...G?{pane_source_window_id:G}:{}}}function ZF(_={}){let $=new URLSearchParams(_.search||"");return{panePath:t1($.get("pane_path"))||t1(_.panePath),paneLabel:t1($.get("pane_label"))||t1(_.paneLabel),paneInstanceId:t1($.get("pane_instance_id")),paneWindowId:t1($.get("pane_window_id")),paneSourceWindowId:t1($.get("pane_source_window_id"))}}function c4(_){return Boolean(_?.panePath&&_?.paneInstanceId&&_?.paneWindowId)}function e1(_){return typeof _==="string"&&_.trim()?_.trim():null}function XF(_){let $=e1(_?.panePath),j=e1(_?.paneInstanceId),G=e1(_?.ownerWindowId);if(!$||!j||!G)return null;let Z=e1(_?.now)||new Date().toISOString();return{panePath:$,paneInstanceId:j,ownerWindowId:G,detachedAt:Z,requestedAt:Z,label:e1(_?.label),sourceWindowId:e1(_?.sourceWindowId)}}function dj(_,$){if(!_||!$)return!1;return e1($.panePath)===_.panePath&&e1($.paneInstanceId)===_.paneInstanceId&&e1($.paneWindowId)===_.ownerWindowId}function oj(_,$){if(!_)return null;return{panePath:_.panePath,paneInstanceId:_.paneInstanceId,ownerWindowId:_.ownerWindowId,detachedAt:e1($)||new Date().toISOString(),label:_.label||null}}function r8(_){try{return _?.close?.(),!0}catch($){return!1}}function ij(_,$,j){try{return _?.postMessage?.($,j),!0}catch(G){return!1}}function PT(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;if(_.openTabIds?.has($))return!0;if(_.pendingDetachedTabPaths?.has?.($))return!0;if(_.detachedTabPaths?.has?.($))return!0;if($===_.terminalTabPath)return Boolean(_.hasPendingDetachedDockPane||_.hasDetachedDockPane);return!1}function YF(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return;let j=_?.sourceHost==="dock"?"dock":"tab";if($===_.terminalTabPath&&j==="dock"){_.setDockVisible?.(!1);return}_.closeTab?.($)}var RT=400;function fT(_){let $=Array.isArray(_?.changed_paths)?_.changed_paths.map((G)=>typeof G==="string"?G.trim():"").filter(Boolean):[];if($.length>0)return $;let j=typeof _?.path==="string"?_.path.trim():"";return j?[j]:["."]}function ST(_,$){if(!_)return!1;if(!Array.isArray($)||$.length===0)return!0;return $.some((j)=>{return fT(j).some((Z)=>Z==="."||Z===_)})}async function VF(_,$){if(typeof _?.afterAttachToHost!=="function")return;await _.afterAttachToHost($)}function gT(_=typeof document<"u"?document:null){if(!_)return!0;let $=typeof _.visibilityState==="string"?_.visibilityState:"";return!$||$==="visible"}function o8(_=typeof navigator<"u"?navigator:null){if(!_)return!1;let $=String(_.userAgent||""),j=String(_.vendor||""),G=/AppleWebKit/i.test($),Z=/Safari/i.test($),X=/Chrome|Chromium|CriOS|EdgiOS|EdgA|Edg\//i.test($),Y=/FxiOS/i.test($);return G&&(j.includes("Apple")||Z)&&!X&&!Y}function qF(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;if($!==_.terminalTabPath)return!1;if((_?.reason==="message"?"message":"closed-window")==="closed-window")return!0;return _?.allowLiveTransfer===!1}function n8(_){if(!qF(_))return!1;return o8(_?.runtimeNavigator)}function d8(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$||$!==_?.terminalTabPath)return!1;return o8(_?.runtimeNavigator)}function u5(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;return $!==_?.terminalTabPath}function uT(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return null;let j=_?.runtime??globalThis,G=typeof _?.nowMs==="number"?_.nowMs:Date.now(),Z=typeof _?.paneInstanceId==="string"?_.paneInstanceId.trim():"",X=typeof _?.paneOverrideId==="string"?_.paneOverrideId.trim():"",Y=typeof _?.terminalTabPath==="string"?_.terminalTabPath:"piclaw://terminal",V=_?.allowLiveTransfer!==!1,Q=_?.instance||null,q=typeof Q?.exportHostTransferState==="function"?Q.exportHostTransferState():null,B=$===Y,K=q&&!B?h8({path:$,payload:q},j,G):null,N=null;if($!==Y){let L=q&&typeof q==="object"?typeof q.mtime==="string"?q.mtime:q.mtime===null?null:void 0:void 0,U=typeof Q?.isDirty==="function"?Q.isDirty():!1,E=typeof Q?.getContent==="function"?Q.getContent():void 0;N=q2({path:$,content:U?E:void 0,mtime:L,paneOverrideId:X||null,viewState:_?.viewState||null},j,G)}return{type:"piclaw-pane-reattach-request",panePath:$,...Z?{paneInstanceId:Z}:{},...N?.editor_popout?{editorPopoutToken:N.editor_popout}:{},...K?.pane_transfer?{paneTransferToken:K.pane_transfer}:{},...B&&q?{paneTransferPayload:q}:{},...V?{}:{allowLiveTransfer:!1}}}function bT(_){let $=typeof _?.payload?.panePath==="string"?_.payload.panePath.trim():"";if(!$)return null;let j=_?.runtime??globalThis,G=typeof _?.nowMs==="number"?_.nowMs:Date.now(),Z=typeof _?.payload?.paneInstanceId==="string"&&_.payload.paneInstanceId.trim()?_.payload.paneInstanceId.trim():null,X=typeof _?.payload?.editorPopoutToken==="string"?_.payload.editorPopoutToken.trim():"",Y=typeof _?.payload?.paneTransferToken==="string"?_.payload.paneTransferToken.trim():"",V=_?.payload?.paneTransferPayload&&typeof _.payload.paneTransferPayload==="object"&&!Array.isArray(_.payload.paneTransferPayload)?_.payload.paneTransferPayload:null,Q=X?M3(X,j,G):null,q=V?{panePath:$,path:$,payload:V,capturedAt:G}:Y?cj(Y,j,G):null;return{panePath:$,paneInstanceId:Z,editorTransfer:Q?.path===$?Q:null,hostTransfer:q?.path===$?q:null,allowLiveTransfer:_?.payload?.allowLiveTransfer!==!1}}function QF(_){let{panePopoutMode:$,panePopoutPath:j,panePopoutLabel:G,chatOnlyMode:Z,editorOpen:X,tabStripTabs:Y,tabStripActiveId:V,previewTabs:Q,diffTabs:q,tabPaneOverrides:B,terminalTabPath:K,vncTabPrefix:N,openEditor:L,closeEditor:U,getWorkspaceFile:E}=_,H=u(null),D=u(null),M=u(null),z=u(null),O=u((()=>{if(!$)return null;let q0=Z5("editor_popout");return M3(q0)})()),x=u((()=>{if(!$)return null;return pL()})()),I=u(ZF({search:typeof window<"u"?window.location.search:"",panePath:j,paneLabel:G})),J=u(I.current.paneWindowId||m4("pane-window")),k=u(new Map),W=u(new Map),T=u(new Map),w=u(new Map),A=u(!1),P=u(new Map),R=u(m4("pane-instance")),b=u(new Map),c=u(new Map),r=u(new Set),[e,m]=C(()=>new Map),_0=u(e);_0.current=e;let[E0,Z0]=C(()=>new Map),j0=u(E0);j0.current=E0;let[V0,N0]=C(null),h=u(V0);h.current=V0;let[$0,Q0]=C(null),O0=u($0);O0.current=$0;let a=Y_.getDockPanes().length>0,[X0,W0]=C(!1),P0=f(()=>W0((q0)=>!q0),[]),l0=f(()=>{L(K,{label:"Terminal"})},[L,K]),u0=f(()=>{L(N,{label:"VNC"})},[L,N]),G_=f((q0)=>{let v=typeof q0==="string"?q0.trim():"";if(!v)return m4("pane-instance");if(v===K&&!$_.get(v)){if(!R.current)R.current=m4("pane-instance");return R.current}let s=P.current.get(v);if(s)return s;let G0=m4("pane-instance");return P.current.set(v,G0),G0},[K]),h0=Y0(()=>!$&&V?E0.get(V)||null:null,[E0,$,V]),s0=!$?$0:null,R0=f((q0)=>{if(!q0)return;rL(q0),c.current.delete(q0),r.current.delete(q0),N0((v)=>v?.panePath===q0?null:v),m((v)=>{if(!v.has(q0))return v;let n=new Map(v);return n.delete(q0),n})},[]),o0=f((q0)=>{if(!q0)return;b.current.delete(q0),c.current.delete(q0),r.current.delete(q0),R0(q0),Q0((v)=>v?.panePath===q0?null:v),Z0((v)=>{if(!v.has(q0))return v;let n=new Map(v);return n.delete(q0),n})},[R0]),v0=f((q0,v={})=>{let n=typeof q0==="string"?q0.trim():"";if(!n)return!1;if(d8({panePath:n,terminalTabPath:K}))return!1;let s=b.current.get(n),G0=Boolean(j0.current.get(n)),F0=Boolean(O0.current?.panePath===n);if(o0(n),n===K&&F0&&!G0)W0(!0);else if(n===K&&G0)L(n,{label:"Terminal"});else if($_.get(n))$_.activate(n);else L(n);if(v.closeDetachedWindow!==!1&&s&&typeof s.close==="function")r8(s);return!0},[o0,L,W0,K]),t0=f(()=>{if($)return;if(!gT())return;let q0=Date.now();for(let[v,n]of c.current.entries()){if(n>q0)continue;c.current.delete(v),v0(v,{closeDetachedWindow:!1})}},[$,v0]),i0=f((q0,v={})=>{let n=typeof q0==="string"?q0.trim():"";if(!n)return!1;let s={panePath:n,terminalTabPath:K,allowLiveTransfer:v.allowLiveTransfer,reason:v.reason};if(n8(s))return b.current.delete(n),c.current.delete(n),r.current.add(n),!0;if(!qF(s))return v0(n,{closeDetachedWindow:!1});return c.current.set(n,Date.now()+RT),t0(),!0},[t0,v0,K]),F_=f((q0)=>{let v=typeof q0==="string"?q0.trim():"";if(!v)return null;let n=G_(v),s=m4("pane-window");return{paneInstanceId:n,paneWindowId:s,params:GF({paneInstanceId:n,paneWindowId:s,paneSourceWindowId:J.current})}},[G_]),Z_=f((q0,v,n,s)=>{let G0=typeof q0==="string"?q0.trim():"";if(!G0||!s)return;let F0=XF({panePath:G0,paneInstanceId:s.pane_instance_id,ownerWindowId:s.pane_window_id,sourceWindowId:s.pane_source_window_id,label:v});if(!F0)return;if(b.current.set(G0,n||null),G0===K&&!$_.get(G0)){N0(F0);return}m((A0)=>{let M0=new Map(A0);return M0.set(G0,F0),M0})},[K]),m0=f((q0,v)=>{let n=typeof q0?.panePath==="string"?q0.panePath.trim():"";if(!n)return!1;let s=b.current.get(n);if(s&&v&&s!==v)return!1;let G0=_0.current.get(n)||null;if(dj(G0,q0)){let w0=D.current,c0=u5({panePath:n,terminalTabPath:K});if(c0&&w0&&typeof w0.moveHost==="function")g5({panePath:n,paneInstanceId:G0.paneInstanceId,paneWindowId:G0.ownerWindowId,instance:w0,releaseSourceHost:()=>{if(D.current===w0)D.current=null}});if(c0&&D.current)D.current=null;let S0=oj(G0);if(!S0)return!1;return m((n0)=>{if(!n0.has(n))return n0;let e0=new Map(n0);return e0.delete(n),e0}),Z0((n0)=>{let e0=new Map(n0);return e0.set(n,S0),e0}),YF({panePath:n,terminalTabPath:K,closeTab:(n0)=>$_.close(n0),sourceHost:"tab"}),!0}if(n!==K)return!1;let F0=h.current,T0=z.current,A0=u5({panePath:n,terminalTabPath:K});if(A0&&F0&&T0&&typeof T0.moveHost==="function")g5({panePath:n,paneInstanceId:F0.paneInstanceId,paneWindowId:F0.ownerWindowId,instance:T0,releaseSourceHost:()=>{if(z.current===T0)z.current=null}});if(A0&&z.current)z.current=null;if(!dj(F0,q0))return!1;let M0=oj(F0);if(!M0)return!1;return N0(null),Q0(M0),YF({panePath:n,terminalTabPath:K,setDockVisible:W0,sourceHost:"dock"}),!0},[W0,K]),z0=f((q0=!1,v=!0)=>{if(!$)return!1;let n=I.current;if(!c4(n))return!1;if(typeof window>"u"||!window.opener||window.opener.closed)return!1;if(A.current){if(q0)r8(window);return!0}let s=n.panePath||j,G0=s===K?z.current||D.current:D.current,F0=v&&u5({panePath:s,terminalTabPath:K}),T0=uT({panePath:s,paneInstanceId:n.paneInstanceId,paneOverrideId:s===K?null:typeof B?.get==="function"?B.get(s)||null:null,terminalTabPath:K,viewState:s===K?null:$_.getViewState(s)||null,allowLiveTransfer:F0,instance:G0});if(!T0)return!1;if(F0&&T0.paneTransferToken&&typeof G0?.moveHost==="function"){if(z.current===G0)z.current=null;if(D.current===G0)D.current=null}if(!ij(window.opener,T0,window.location.origin))return!1;if(A.current=!0,q0)r8(window);return!0},[$,j,B,K]),V_=f(()=>z0(!0,!0),[z0]);g(()=>{if(!$||typeof window>"u")return;let q0=()=>{let v=I.current,n=c4(v)?v.panePath||j||"":"";if(n8({panePath:n,terminalTabPath:K,allowLiveTransfer:!1,reason:"closed-window"}))return;z0(!1,!1)};return window.addEventListener("pagehide",q0),window.addEventListener("beforeunload",q0),()=>{window.removeEventListener("pagehide",q0),window.removeEventListener("beforeunload",q0)}},[$,z0]);let d0=Y0(()=>zK(Y,V),[V,Y]),H_=Y0(()=>JK(B,V),[B,V]),D0=Y0(()=>Aj(G,d0,j),[d0,G,j]),g0=Y0(()=>V&&q.has(V)?"saved":null,[q,V]),x0=u(g0);g(()=>{x0.current=g0},[g0]);let r0=Y0(()=>kK(Y,Q,q,V),[q,Q,V,Y]),z_=Y0(()=>MK(j,N),[j,N]),Q_=Y0(()=>TK(j,K,r0,z_),[z_,r0,j,K]),U_=wK($,Z,X,a,X0),[N_,J_]=C(!1),I_=u(!1),P_=f(()=>{if(!X||Z)return;if(I_.current=X0,X0)W0(!1);J_(!0)},[Z,X0,X]),E_=f(()=>{if(!N_)return;if(J_(!1),I_.current)W0(!0),I_.current=!1},[N_]),i_=f(()=>{if(N_){E_();return}P_()},[P_,E_,N_]);g(()=>{if(N_&&!X)E_()},[X,E_,N_]),g(()=>{let q0=new Set(Y.map((s)=>s.id)),v=new Set(_0.current.keys()),n=new Set(j0.current.keys());for(let s of Array.from(P.current.keys()))if(!PT({panePath:s,openTabIds:q0,pendingDetachedTabPaths:v,detachedTabPaths:n,terminalTabPath:K,hasPendingDetachedDockPane:Boolean(h.current),hasDetachedDockPane:Boolean(O0.current)}))P.current.delete(s)},[Y,K]),g(()=>{if($||typeof window>"u")return;let q0=(v)=>{if(v.origin!==window.location.origin)return;let n=v.data;if(!n||typeof n!=="object")return;if(n.type==="piclaw-pane-detach-claim"){m0({panePath:n.panePath,paneInstanceId:n.paneInstanceId,paneWindowId:n.paneWindowId},v.source);return}if(n.type!=="piclaw-pane-reattach-request")return;let s=bT({payload:n}),G0=s?.panePath||"";if(!G0)return;if(s?.editorTransfer)k.current.set(G0,s.editorTransfer);if(s?.hostTransfer)if(W.current.set(G0,s.hostTransfer),s.allowLiveTransfer&&v.source)T.current.set(G0,v.source);else T.current.delete(G0);let F0=j0.current.get(G0)||null,T0=G0===K?O0.current:null,A0=u5({panePath:G0,terminalTabPath:K}),M0=F0||T0;if(!M0)return;if(s?.paneInstanceId&&s.paneInstanceId!==M0.paneInstanceId)return;if(d8({panePath:G0,terminalTabPath:K})){T.current.delete(G0),w.current.delete(G0),W.current.delete(G0),k.current.delete(G0);return}if(s?.hostTransfer&&s.allowLiveTransfer&&A0)w.current.set(G0,{panePath:G0,paneInstanceId:M0.paneInstanceId,paneWindowId:M0.ownerWindowId});else w.current.delete(G0);if(n8({panePath:G0,terminalTabPath:K,allowLiveTransfer:s?.allowLiveTransfer,reason:"message"})){T.current.delete(G0),b.current.delete(G0),c.current.delete(G0),r.current.add(G0);return}i0(G0,{allowLiveTransfer:s?.allowLiveTransfer,reason:"message"})};return window.addEventListener("message",q0),()=>window.removeEventListener("message",q0)},[m0,$,i0,K]),g(()=>{if($||typeof window>"u"||typeof document>"u")return;let q0=()=>t0();window.addEventListener("focus",q0),window.addEventListener("pageshow",q0),document.addEventListener("visibilitychange",q0);let v=setInterval(()=>{t0();for(let[n,s]of b.current.entries()){if(!s||!s.closed)continue;if(n===K?Boolean(h.current):_0.current.has(n)){b.current.delete(n),R0(n);continue}if(d8({panePath:n,terminalTabPath:K})){o0(n);continue}if(n8({panePath:n,terminalTabPath:K,allowLiveTransfer:!1,reason:"closed-window"})){b.current.delete(n),c.current.delete(n),r.current.add(n);continue}if(r.current.has(n)){b.current.delete(n);continue}i0(n,{allowLiveTransfer:!1,reason:"closed-window"})}},750);return()=>{window.removeEventListener("focus",q0),window.removeEventListener("pageshow",q0),document.removeEventListener("visibilitychange",q0),clearInterval(v)}},[o0,R0,t0,$,i0,K]),g(()=>{if(!$||!j)return;if($_.getActiveId()===j)return;let v=O.current?.path===j?O.current:null,n=x.current?.path===j?x.current:null;L(j,{...G?{label:G}:{},...v?.paneOverrideId?{paneOverrideId:v.paneOverrideId}:{},...v?.viewState?{viewState:v.viewState}:{},...n?.payload?.diffMode?{diffMode:n.payload.diffMode}:{}})},[L,G,$,j]),g(()=>{if(!$)return;let q0=I.current;if(!c4(q0))return;if(typeof window>"u"||!window.opener||window.opener.closed)return;ij(window.opener,{type:"piclaw-pane-detach-claim",panePath:q0.panePath,paneInstanceId:q0.paneInstanceId,paneWindowId:q0.paneWindowId},window.location.origin)},[$]),g(()=>{let q0=H.current;if(!q0)return;if(D.current)D.current.dispose(),D.current=null;let v=V;if(!v)return;if(!$&&h0?.panePath===v){q0.innerHTML="";return}let n=O.current?.path===v?O.current:null,s=k.current.get(v)||null,G0=n||s,F0=x.current?.path===v?x.current:null,T0=W.current.get(v)||null,A0=F0||T0,M0=H_||G0?.paneOverrideId||null,w0=A0?.payload?{...A0.payload}:null;if(x0.current)w0={...w0||{},diffMode:x0.current};else if(w0&&"diffMode"in w0)delete w0.diffMode;let c0={path:v,mode:"edit",...G0?.content!==void 0?{content:G0.content}:{},...G0?.mtime!==void 0?{mtime:G0.mtime}:{},...w0?{transferState:w0}:{}},S0=(M0?Y_.get(M0):null)||Y_.resolve(c0)||Y_.get("editor");if(!S0){q0.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let n0=null,e0=!1,I0=(y0)=>{n0=y0,D.current=y0,y0.onDirtyChange?.((d)=>{$_.setDirty(v,d)}),y0.onSaveRequest?.(()=>{}),y0.onClose?.(()=>{U()});let D_=$_.getViewState(v);if(D_&&typeof y0.restoreViewState==="function")requestAnimationFrame(()=>y0.restoreViewState(D_));if(typeof y0.onViewStateChange==="function")y0.onViewStateChange((d)=>{$_.saveViewState(v,d)});let __=I.current;if($&&c4(__)&&typeof y0?.moveHost==="function"&&u5({panePath:v,terminalTabPath:K}))g5({panePath:v,paneInstanceId:__.paneInstanceId||"",paneWindowId:__.paneWindowId||"",instance:y0,releaseSourceHost:()=>{if(z.current===y0)z.current=null;if(D.current===y0)D.current=null}});VF(y0,{path:v,hostMode:$?"popout":"main",transferState:w0}).catch((d)=>{console.warn("[pane-attach] afterAttachToHost failed:",d)}),requestAnimationFrame(()=>y0.focus?.())};return(async()=>{let y0=I.current,D_=$&&c4(y0)&&y0.panePath===v?{panePath:v,paneInstanceId:y0.paneInstanceId||"",paneWindowId:y0.paneWindowId||""}:null,__=w.current.get(v)||null,d=u5({panePath:v,terminalTabPath:K})?D_||__:null,L0=$?typeof window<"u"&&window.opener&&!window.opener.closed?window.opener:null:T.current.get(v)||null,p0=$?"popout":"main";if(A0&&d&&L0)try{let j_=await nL(L0,d,q0,{path:v,hostMode:p0,transferState:w0});if(!e0&&j_){if(I0(j_),n)O.current=null;if(s)k.current.delete(v);if(F0)x.current=null;if(T0)W.current.delete(v);T.current.delete(v),w.current.delete(v);return}}catch(j_){console.warn("[pane-live-transfer] Failed to claim live pane instance:",j_)}if(e0)return;if(I0(S0.mount(q0,c0)),n)O.current=null;if(s)k.current.delete(v);if(F0)x.current=null;if(T0)W.current.delete(v);T.current.delete(v),w.current.delete(v)})(),()=>{if(e0=!0,D.current===n0)n0.dispose(),D.current=null}},[h0,H_,U,$,V]),g(()=>{let q0=V,v=D.current;if(!q0||typeof v?.setDiffMode!=="function")return;v.setDiffMode(g0)},[g0,V]);let R_=f(async(q0)=>{let v=typeof V==="string"?V.trim():"",n=D.current;if(!v||!n?.setContent)return;if(typeof n.isDirty==="function"&&n.isDirty())return;if(!ST(v,q0))return;try{let s=await E(v,1e6,"edit"),G0=typeof s?.text==="string"?s.text:"",F0=typeof s?.mtime==="string"&&s.mtime.trim()?s.mtime.trim():new Date().toISOString();n.setContent(G0,F0)}catch(s){console.warn("[workspace_update] Failed to refresh active pane:",s)}},[E,V]);return g(()=>{let q0=M.current;if(z.current)z.current.dispose(),z.current=null;if(!q0||!a||!X0)return;if(!$&&s0?.panePath===K){q0.innerHTML="";return}let v=Y_.getDockPanes()[0];if(!v){q0.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let n=x.current?.path===K?x.current:null,s=W.current.get(K)||null,G0=n||s,F0=v.mount(q0,{mode:"view",...G0?.payload?{transferState:G0.payload}:{}});if(z.current=F0,VF(F0,{path:K,hostMode:$?"popout":"main",transferState:G0?.payload||null}).catch((T0)=>{console.warn("[pane-attach] afterAttachToHost failed:",T0)}),n)x.current=null;if(s)W.current.delete(K);return requestAnimationFrame(()=>F0.focus?.()),()=>{if(z.current===F0)F0.dispose(),z.current=null}},[s0,X0,a,$,K]),{editorContainerRef:H,editorInstanceRef:D,dockContainerRef:M,dockInstanceRef:z,hasDockPanes:a,dockVisible:X0,setDockVisible:W0,toggleDock:P0,openTerminalTab:l0,openVncTab:u0,panePopoutTitle:D0,panePopoutHasMenuActions:r0,hidePanePopoutControls:Q_,showEditorPaneContainer:U_,zenMode:N_,exitZenMode:E_,toggleZenMode:i_,refreshActiveEditorFromWorkspace:R_,detachedTabs:E0,activeDetachedTab:h0,detachedDockPane:s0,buildPaneDetachTransfer:F_,registerDetachedPaneWindow:Z_,reattachPane:v0,requestPanePopoutReattach:V_,canReattachPanePopout:$&&c4(I.current)&&!d8({panePath:j||"",terminalTabPath:K})}}function vT(_){return{removeFileRefRef:_.removeFileRefRef,editorState:_.editorState,paneRuntime:_.paneRuntime}}function KF(_){let $=u(null),j=jF({onTabClosed:(Z)=>$.current?.(Z)}),G=QF({panePopoutMode:_.panePopoutMode,panePopoutPath:_.panePopoutPath,panePopoutLabel:_.panePopoutLabel,chatOnlyMode:_.chatOnlyMode,editorOpen:j.editorOpen,tabStripTabs:j.tabStripTabs,tabStripActiveId:j.tabStripActiveId,previewTabs:j.previewTabs,diffTabs:j.diffTabs,tabPaneOverrides:j.tabPaneOverrides,terminalTabPath:_.terminalTabPath,vncTabPrefix:_.vncTabPrefix,openEditor:j.openEditor,closeEditor:j.closeEditor,getWorkspaceFile:_.getWorkspaceFile});return vT({removeFileRefRef:$,editorState:j,paneRuntime:G})}M_();var s8=1280,a8=820;function i8(_){if(typeof _!=="number"||!Number.isFinite(_)||_<=0)return null;return _}function c6(_){return typeof _==="string"&&_.trim()?_.trim():null}function mT(_){let $=c6(_);if(!$)return!1;if($.startsWith("/")||$.startsWith("\\"))return!1;if($.includes("://"))return!1;if($==="."||$===".."||$.startsWith("../"))return!1;return!0}function cT(_){if(_.isMobile)return!1;let $=i8(_.windowWidth),j=i8(_.windowHeight);if($===null||j===null)return!1;if($<s8||j<a8)return!1;let G=i8(_.screenWidth),Z=i8(_.screenHeight);if(G!==null&&G<s8)return!1;if(Z!==null&&Z<a8)return!1;return!0}function hT(_){let $=_?.navigator,j=String($?.userAgent||""),G=Number($?.maxTouchPoints||0);return(typeof _?.matchMedia==="function"?Boolean(_.matchMedia("(pointer: coarse)")?.matches):!1)||G>1||/Android|iPhone|iPad|iPod/i.test(j)}function lT(_){if(!_||_.kind!=="custom")return null;let $=c6(_.request_id),j=_.options&&typeof _.options==="object"?_.options:null;if(!$||!j||j.action!=="open_workspace_file")return null;let G=c6(j.path);if(!mT(G))return null;let Z=j.target==="tab"?"tab":"popout";return{requestId:$,chatJid:c6(_.chat_jid),path:G,label:c6(j.label),target:Z}}async function pT(_,$,j){await E5(_,$,j||void 0)}async function BF(_,$){let j=lT(_?.detail?.payload);if(!j)return!1;if(j.chatJid&&j.chatJid!==$.currentChatJid)return!1;let G=$.respond||pT,Z=$.windowObject||(typeof window<"u"?window:void 0),X={width:Number(Z?.innerWidth||0)||void 0,height:Number(Z?.innerHeight||0)||void 0},Y={width:s8,height:a8};if(j.target==="popout"){if(!cT({windowWidth:Z?.innerWidth,windowHeight:Z?.innerHeight,screenWidth:Z?.screen?.availWidth,screenHeight:Z?.screen?.availHeight,isMobile:hT(Z)}))return $.showIntentToast?.("Editor popout unavailable",`Need at least ${s8}×${a8} viewport space for a separate editor window.`,"warning",4500),await G(j.requestId,{ok:!1,opened:!1,reason:"insufficient_screen_space",detail:"Browser viewport is too small for a separate editor window.",target:j.target,path:j.path,viewport:X,minimum_viewport:Y},j.chatJid),!0;let Q=await $.popOutPane(j.path,j.label);return await G(j.requestId,{ok:Q,opened:Q,reason:Q?void 0:"popout_failed",detail:Q?void 0:"The browser blocked the editor popout window.",target:j.target,path:j.path},j.chatJid),!0}return $.openEditor(j.path),await G(j.requestId,{ok:!0,opened:!0,target:j.target,path:j.path},j.chatJid),!0}var sj="piclaw:oobe:provider-missing:dismissed";function rT(_){if(!_||typeof _!=="object")return 0;let $=Array.isArray(_.model_options)?_.model_options.filter(Boolean):[];if($.length>0)return $.length;return(Array.isArray(_.models)?_.models.filter((G)=>typeof G==="string"&&G.trim()):[]).length}function nT(_){if(!_||typeof _!=="object")return!1;let $=_.current;return typeof $==="string"&&$.trim().length>0}function LF(_){let{panePopoutMode:$=!1,modelsLoaded:j,modelPayload:G,providerMissingDismissed:Z=!1}=_,X=rT(G),Y=X>0,V=nT(G),Q=Y||V;if($||!j)return{kind:"hidden",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:V};if(Q)return{kind:"hidden",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:V};return{kind:Z?"hidden":"provider-missing",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:V}}var dT=DK();await CK();var{searchPosts:oT,deletePost:iT,getAgents:sT,getAgentThought:NF,setAgentThoughtVisibility:FF,getAgentStatus:aT,getAgentContext:tT,getAutoresearchStatus:eT,stopAutoresearch:_w,dismissAutoresearch:$w,getAgentModels:jw,getActiveChatAgents:Gw,getChatBranches:Zw,renameChatBranch:Xw,pruneChatBranch:Yw,purgeChatBranch:Vw,restoreChatBranch:qw,getAgentQueueState:Qw,steerAgentQueueItem:Kw,removeAgentQueueItem:Bw,streamSidePrompt:Lw,getWorkspaceFile:Nw,getThread:Fw,getTimeline:Uw,sendAgentMessage:Dw,forkChatBranch:Hw,createRootChatSession:Ew}=PK;function Ww({locationParams:_,navigate:$}){let{currentChatJid:j,chatOnlyMode:G,panePopoutMode:Z,panePopoutPath:X,panePopoutLabel:Y,branchLoaderMode:V,branchLoaderSourceChatJid:Q}=Y0(()=>OK(_),[_]);g(()=>{if(typeof window>"u")return;window.__piclawCurrentChatJid=j,window.dispatchEvent?.(new CustomEvent("piclaw:current-chat-changed",{detail:{chatJid:j}}))},[j]);let q=_F({currentChatJid:j,branchLoaderMode:V}),[B,K]=C(()=>U$(sj,!1)),[N,L]=C(null),U=f((R0)=>{let o0=typeof R0==="string"?R0:"";if(!o0.trim())return;L({token:`prefill-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,text:o0})},[]),{agentStatus:E,setAgentStatus:H,agentDraft:D,setAgentDraft:M,agentPlan:z,setAgentPlan:O,agentThought:x,setAgentThought:I,pendingRequest:J,setPendingRequest:k,currentTurnId:W,setCurrentTurnId:T,steerQueuedTurnId:w,setSteerQueuedTurnId:A,lastAgentEventRef:P,lastSilenceNoticeRef:R,isAgentRunningRef:b,draftBufferRef:c,thoughtBufferRef:r,previewResyncPendingRef:e,previewResyncGenerationRef:m,pendingRequestRef:_0,stalledPostIdRef:E0,currentTurnIdRef:Z0,steerQueuedTurnIdRef:j0,thoughtExpandedRef:V0,draftExpandedRef:N0}=oX(),h=KF({panePopoutMode:Z,panePopoutPath:X,panePopoutLabel:Y,chatOnlyMode:G,terminalTabPath:Y5,vncTabPrefix:o1,getWorkspaceFile:Nw}),$0=xB({timelineRef:q.timelineRef,viewStateRef:q.viewStateRef,followupQueueRowIdsRef:q.followupQueueRowIdsRef,currentChatJid:j,currentHashtag:q.currentHashtag,searchQuery:q.searchQuery,followupQueueItems:q.followupQueueItems,onIdentity:f((R0)=>{if(!R0)return;let{assistant_name:o0,assistant_avatar_url:v0}=R0;if(o0||v0)q.setAgents((m0)=>{let z0=m0.default||{id:"default"},V_=o0&&!z0.name,d0=v0&&!z0.avatar_url;if(!V_&&!d0)return m0;return{...m0,["default"]:{...z0,...V_?{name:o0}:{},...d0?{avatar_url:v0}:{}}}});let{user_name:t0,user_avatar_url:i0,user_avatar_background:F_}=R0;if(t0||i0||F_)q.setUserProfile((Z_)=>{let m0=t0&&!Z_.name,z0=i0&&!Z_.avatar_url,V_=F_&&!Z_.avatar_background;if(!m0&&!z0&&!V_)return Z_;return{...Z_,...m0?{name:t0}:{},...z0?{avatar_url:i0}:{},...V_?{avatar_background:F_}:{}}})},[q.setAgents,q.setUserProfile])}),Q0=DB({environment:{isRenameBranchFormOpen:q.isRenameBranchFormOpen,renameBranchNameInputRef:q.renameBranchNameInputRef,appShellRef:q.appShellRef,setIsWebAppMode:q.setIsWebAppMode,workspaceOpen:q.workspaceOpen,setWorkspaceOpen:q.setWorkspaceOpen,btwSession:q.btwSession,agents:q.agents,agentsRef:q.agentsRef,currentChatJid:j,activeChatJidRef:q.activeChatJidRef,userProfile:q.userProfile,userProfileRef:q.userProfileRef,brandingRef:q.brandingRef,panePopoutMode:Z},composeReferences:{setIntentToast:q.setIntentToast,intentToastTimerRef:q.intentToastTimerRef,editorOpen:h.editorState.editorOpen,openEditor:h.editorState.openEditor,resolvePane:(R0)=>Y_.resolve(R0),tabStripActiveId:h.editorState.tabStripActiveId,setFileRefs:q.setFileRefs,setFolderRefs:q.setFolderRefs,setMessageRefs:q.setMessageRefs,currentChatJid:j,currentHashtag:q.currentHashtag,searchQuery:q.searchQuery,searchOpen:q.searchOpen,setCurrentHashtag:q.setCurrentHashtag,setSearchQuery:q.setSearchQuery,setSearchOpen:q.setSearchOpen,navigate:$,chatOnlyMode:G,getThread:Fw,setPosts:$0.setPosts},agentActivity:{lastActivityTtlMs:YY,lastActivityTimerRef:q.lastActivityTimerRef,lastActivityTokenRef:q.lastActivityTokenRef,lastAgentEventRef:P,lastSilenceNoticeRef:R,isAgentRunningRef:b,setIsAgentTurnActive:q.setIsAgentTurnActive,setAgentStatus:H,draftBufferRef:c,thoughtBufferRef:r,pendingRequestRef:_0,lastAgentResponseRef:q.lastAgentResponseRef,currentTurnIdRef:Z0,steerQueuedTurnIdRef:j0,agentStatusRef:q.agentStatusRef,silentRecoveryRef:q.silentRecoveryRef,thoughtExpandedRef:V0,draftExpandedRef:N0,setCurrentTurnId:T,setSteerQueuedTurnId:A,currentTurnIdRefForPanel:Z0,setAgentThoughtVisibility:FF,getAgentThought:NF,setAgentThought:I,setAgentDraft:M},chatPaneRuntime:{isAgentTurnActive:q.isAgentTurnActive,steerQueuedTurnId:w,currentTurnId:W,steerQueuedTurnIdRef:j0,setSteerQueuedTurnId:A,agentStatus:E,agentDraft:D,agentPlan:z,agentThought:x,pendingRequest:J,pendingRequestRef:_0,followupQueueItems:q.followupQueueItems,activeModel:q.activeModel,activeThinkingLevel:q.activeThinkingLevel,supportsThinking:q.supportsThinking,activeModelUsage:q.activeModelUsage,contextUsage:q.contextUsage,isAgentRunningRef:b,wasAgentActiveRef:q.wasAgentActiveRef,draftBufferRef:c,thoughtBufferRef:r,lastAgentEventRef:P,lastSilenceNoticeRef:R,lastAgentResponseRef:q.lastAgentResponseRef,currentTurnIdRef:Z0,thoughtExpandedRef:V0,draftExpandedRef:N0,agentStatusRef:q.agentStatusRef,silentRecoveryRef:q.silentRecoveryRef,setIsAgentTurnActive:q.setIsAgentTurnActive,setAgentStatus:H,setAgentDraft:M,setAgentPlan:O,setAgentThought:I,setPendingRequest:k,setCurrentTurnId:T,setFollowupQueueItems:q.setFollowupQueueItems,setActiveModel:q.setActiveModel,setActiveThinkingLevel:q.setActiveThinkingLevel,setSupportsThinking:q.setSupportsThinking,setActiveModelUsage:q.setActiveModelUsage,setContextUsage:q.setContextUsage,lastNotifiedIdRef:q.lastNotifiedIdRef,agentsRef:q.agentsRef,notify:q.notify,shouldNotifyLocallyForChat:q.shouldNotifyLocallyForChat},recovery:{isAgentRunningRef:b,lastSilenceNoticeRef:R,lastAgentEventRef:P,currentTurnIdRef:Z0,thoughtExpandedRef:V0,draftExpandedRef:N0,draftBufferRef:c,thoughtBufferRef:r,pendingRequestRef:_0,lastAgentResponseRef:q.lastAgentResponseRef,agentStatusRef:q.agentStatusRef,stalledPostIdRef:E0,scrollToBottomRef:$0.scrollToBottomRef,setCurrentTurnId:T,setAgentDraft:M,setAgentPlan:O,setAgentThought:I,setPendingRequest:k,setAgentStatus:H,setPosts:$0.setPosts,dedupePosts:W5},viewState:{viewStateRef:q.viewStateRef,currentHashtag:q.currentHashtag,searchQuery:q.searchQuery,searchOpen:q.searchOpen},removeFileRefRef:h.removeFileRefRef}),O0=jY({appShellRef:q.appShellRef,sidebarWidthRef:q.sidebarWidthRef,editorWidthRef:q.editorWidthRef,dockHeightRef:q.dockHeightRef}),{chatRefreshLifecycle:a,timelineViewActions:X0,isComposeBoxAgentActive:W0,followupActions:P0,sidepanelActions:l0,branchPaneActions:u0}=lN({routeState:{currentChatJid:j,currentRootChatJid:q.currentRootChatJid,chatOnlyMode:G,navigate:$,branchLoaderMode:V,branchLoaderSourceChatJid:Q,isWebAppMode:q.isWebAppMode},searchState:{currentHashtag:q.currentHashtag,setCurrentHashtag:q.setCurrentHashtag,searchQuery:q.searchQuery,setSearchQuery:q.setSearchQuery,searchOpen:q.searchOpen,setSearchOpen:q.setSearchOpen,searchScope:q.searchScope,setSearchScope:q.setSearchScope},shellState:{activeChatAgents:q.activeChatAgents,currentChatBranches:q.currentChatBranches,currentBranchRecord:q.currentBranchRecord,contextUsage:q.contextUsage,activeModel:q.activeModel,activeThinkingLevel:q.activeThinkingLevel,supportsThinking:q.supportsThinking,activeModelUsage:q.activeModelUsage,connectionStatus:q.connectionStatus,notificationsEnabled:q.notificationsEnabled,notificationPermission:q.notificationPermission,workspaceOpen:q.workspaceOpen,setWorkspaceOpen:q.setWorkspaceOpen,userProfile:q.userProfile,agents:q.agents,removingPostIds:q.removingPostIds,btwSession:q.btwSession},timeline:$0,interaction:Q0,paneRuntime:h.paneRuntime,refs:{activeChatJidRef:q.activeChatJidRef,queueRefreshGenRef:q.queueRefreshGenRef,dismissedQueueRowIdsRef:q.dismissedQueueRowIdsRef,wasAgentActiveRef:q.wasAgentActiveRef,viewStateRef:q.viewStateRef,agentStatusRef:q.agentStatusRef,pendingRequestRef:_0,thoughtBufferRef:r,draftBufferRef:c,previewResyncPendingRef:e,previewResyncGenerationRef:m,isAgentRunningRef:b,currentTurnIdRef:Z0,silentRecoveryRef:q.silentRecoveryRef,lastAgentEventRef:P,lastSilenceNoticeRef:R,staleUiVersionRef:q.staleUiVersionRef,staleUiReloadScheduledRef:q.staleUiReloadScheduledRef,hasConnectedOnceRef:q.hasConnectedOnceRef,sidebarWidthRef:q.sidebarWidthRef,appShellRef:q.appShellRef,agentsRef:q.agentsRef,paneStateOwnerChatJidRef:q.paneStateOwnerChatJidRef,chatPaneStateByChatRef:q.chatPaneStateByChatRef,dismissedLiveWidgetKeysRef:q.dismissedLiveWidgetKeysRef,draftThrottleRef:q.draftThrottleRef,thoughtThrottleRef:q.thoughtThrottleRef,followupQueueItemsRef:q.followupQueueItemsRef,lastAgentResponseRef:q.lastAgentResponseRef,thoughtExpandedRef:V0,draftExpandedRef:N0,steerQueuedTurnIdRef:j0,btwAbortRef:q.btwAbortRef,renameBranchInFlightRef:q.renameBranchInFlightRef,renameBranchLockUntilRef:q.renameBranchLockUntilRef,editorWidthRef:q.editorWidthRef,dockHeightRef:q.dockHeightRef},setters:{setFollowupQueueItems:q.setFollowupQueueItems,setContextUsage:q.setContextUsage,setExtensionStatusPanels:q.setExtensionStatusPanels,setPendingExtensionPanelActions:q.setPendingExtensionPanelActions,setExtensionWorkingState:q.setExtensionWorkingState,setAgentStatus:H,setAgentDraft:M,setAgentPlan:O,setAgentThought:I,setPendingRequest:k,setConnectionStatus:q.setConnectionStatus,setStateAccessFailed:q.setStateAccessFailed,setAgents:q.setAgents,setUserProfile:q.setUserProfile,setActiveChatAgents:q.setActiveChatAgents,setCurrentChatBranches:q.setCurrentChatBranches,setActiveModel:q.setActiveModel,setActiveThinkingLevel:q.setActiveThinkingLevel,setSupportsThinking:q.setSupportsThinking,setActiveModelUsage:q.setActiveModelUsage,setAgentModelsPayload:q.setAgentModelsPayload,setHasLoadedAgentModels:q.setHasLoadedAgentModels,setHasMore:$0.setHasMore,setFloatingWidget:q.setFloatingWidget,setSteerQueuedTurnId:A,setRemovingPostIds:q.setRemovingPostIds,setBtwSession:q.setBtwSession,setWorkspaceOpen:q.setWorkspaceOpen,setRenameBranchNameDraft:q.setRenameBranchNameDraft,setIsRenameBranchFormOpen:q.setIsRenameBranchFormOpen,setIsRenamingBranch:q.setIsRenamingBranch},services:{searchPosts:oT,deletePost:iT,getAgentQueueState:Qw,getAgentContext:tT,getAutoresearchStatus:eT,getAgentStatus:aT,getAgents:sT,getAgentModels:jw,getActiveChatAgents:Gw,getChatBranches:Zw,getTimeline:Uw,stopAutoresearch:_w,dismissAutoresearch:$w,streamSidePrompt:Lw,sendAgentMessage:Dw,renameChatBranch:Xw,pruneChatBranch:Yw,purgeChatBranch:Vw,restoreChatBranch:qw,forkChatBranch:Hw,createRootChatSession:Ew,steerAgentQueueItem:Kw,removeAgentQueueItem:Bw,getAgentThought:NF,setAgentThoughtVisibility:FF,silenceRefreshMs:XY,silenceWarningMs:GY,silenceFinalizeMs:ZY,isCompactionStatus:O$,currentAppAssetVersion:dT,tabStoreHasUnsaved:()=>$_.hasUnsaved(),agentStatus:E,isAgentTurnActive:q.isAgentTurnActive,openEditor:h.editorState.openEditor,activateTab:h.editorState.handleTabActivate,tabStripActiveId:h.editorState.tabStripActiveId,terminalTabPath:Y5,resolveTab:(R0)=>$_.get(R0),closeTab:h.editorState.handleTabClose,editorOpen:h.editorState.editorOpen},helpers:{getFormLock:HK,readStoredNumber:O4}});g(()=>{return cN({timelineRef:q.timelineRef,activeChatAgents:q.activeChatAgents,currentChatJid:j,onSwitch:(R0)=>u0.handleBranchPickerChange(R0),isIOSDevice:W6,isLikelySafari:o8})},[q.timelineRef,q.activeChatAgents,j,u0.handleBranchPickerChange]);let G_=Y0(()=>LF({panePopoutMode:Z,modelsLoaded:q.hasLoadedAgentModels,modelPayload:q.agentModelsPayload,providerMissingDismissed:B}),[Z,q.hasLoadedAgentModels,q.agentModelsPayload,B]),h0=f(()=>{wV()},[]),s0=f(()=>{K(!0),q_(sj,"true")},[]);return g(()=>{if(!Z||typeof document>"u")return;document.title=AK(Y,h.paneRuntime.activePaneTab,X)},[h.paneRuntime.activePaneTab,Y,Z,X]),g(()=>{if(typeof window>"u")return;let R0=(o0)=>{BF(o0,{currentChatJid:j,openEditor:h.editorState.openEditor,popOutPane:u0.handlePopOutPane,showIntentToast:Q0.composeReferenceActions.showIntentToast})};return window.addEventListener("piclaw-extension-ui:request",R0),()=>{window.removeEventListener("piclaw-extension-ui:request",R0)}},[u0.handlePopOutPane,j,Q0.composeReferenceActions.showIntentToast,h.editorState.openEditor]),NK(fK({routeState:{branchLoaderMode:V,panePopoutMode:Z,currentChatJid:j,chatOnlyMode:G,panePopoutPath:X},paneRuntime:h.paneRuntime,splitters:O0,orchestration:{branchPaneActions:u0,timelineViewActions:X0,sidepanelActions:l0,followupActions:P0,chatRefreshLifecycle:a,isComposeBoxAgentActive:W0},interaction:Q0,timeline:$0,surface:{...q,oobePanelState:G_,composePrefillRequest:N,requestComposePrefill:U,handleOobeSetupProvider:h0,handleOobeShowModelPicker:h0,handleOobeOpenWorkspace:h0,handleDismissProviderMissingOobe:s0},editorState:h.editorState,agentState:{agentStatus:E,agentDraft:D,agentPlan:z,agentThought:x,pendingRequest:J,currentTurnId:W,steerQueuedTurnId:w,setPendingRequest:k,pendingRequestRef:_0,isCompactionStatus:O$},helpers:{formatBranchPickerLabel:X8,isIOSDevice:W6,terminalTabPath:Y5}}))}function Ow(){let{locationParams:_,navigate:$}=IV();return F`<${Ww} locationParams=${_} navigate=${$} />`}var t8=document.getElementById("app");if(typeof window<"u")window.__PICLAW_APP_BOOTED__=!1;if(t8){if(L$(null,t8),t8.replaceChildren(),L$(F`<${Ow} />`,t8),typeof window<"u")window.__PICLAW_APP_BOOTED__=!0}

//# debugId=2D477A52A64FFBD864756E2164756E21
//# sourceMappingURL=app.bundle.js.map
