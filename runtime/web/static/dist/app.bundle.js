var WU=Object.defineProperty;var OU=(_)=>_;function zU(_,$){this[_]=OU.bind(null,$)}var $1=(_,$)=>{for(var j in $)WU(_,j,{get:$[j],enumerable:!0,configurable:!0,set:zU.bind($,j)})};var z_=(_,$)=>()=>(_&&($=_(_=0)),$);var uG={};$1(uG,{useState:()=>C,useRef:()=>u,useReducer:()=>fG,useMemo:()=>Z0,useLayoutEffect:()=>X5,useImperativeHandle:()=>xU,useErrorBoundary:()=>RU,useEffect:()=>g,useDebugValue:()=>PU,useContext:()=>CU,useCallback:()=>f,render:()=>F$,html:()=>N,h:()=>O3,createContext:()=>IU,Component:()=>d5});function B$(_,$){for(var j in $)_[j]=$[j];return _}function W3(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function O3(_,$,j){var G,Y,X,Z={};for(X in $)X=="key"?G=$[X]:X=="ref"?Y=$[X]:Z[X]=$[X];if(arguments.length>2&&(Z.children=arguments.length>3?X2.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(X in _.defaultProps)Z[X]===void 0&&(Z[X]=_.defaultProps[X]);return _2(_,Z,G,Y,null)}function _2(_,$,j,G,Y){var X={type:_,props:$,key:j,ref:G,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Y==null?++AG:Y,__i:-1,__u:0};return Y==null&&I_.vnode!=null&&I_.vnode(X),X}function L2(_){return _.children}function d5(_,$){this.props=_,this.context=$}function j5(_,$){if($==null)return _.__?j5(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?j5(_):null}function kU(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,G=[],Y=[],X=B$({},$);X.__v=$.__v+1,I_.vnode&&I_.vnode(X),z3(_.__P,X,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,G,j==null?j5($):j,!!(32&$.__u),Y),X.__v=$.__v,X.__.__k[X.__i]=X,xG(G,X,Y),$.__e=$.__=null,X.__e!=j&&yG(X)}}function yG(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),yG(_)}function U3(_){(!_.__d&&(_.__d=!0)&&m$.push(_)&&!Y2.__r++||QG!=I_.debounceRendering)&&((QG=I_.debounceRendering)||JG)(Y2)}function Y2(){try{for(var _,$=1;m$.length;)m$.length>$&&m$.sort(kG),_=m$.shift(),$=m$.length,kU(_)}finally{m$.length=Y2.__r=0}}function wG(_,$,j,G,Y,X,Z,L,V,q,K){var Q,F,B,U,H,D,E,M=G&&G.__k||G2,z=$.length;for(V=MU(j,$,M,V,z),Q=0;Q<z;Q++)(B=j.__k[Q])!=null&&(F=B.__i!=-1&&M[B.__i]||j2,B.__i=Q,D=z3(_,B,F,Y,X,Z,L,V,q,K),U=B.__e,B.ref&&F.ref!=B.ref&&(F.ref&&A3(F.ref,null,B),K.push(B.ref,B.__c||U,B)),H==null&&U!=null&&(H=U),(E=!!(4&B.__u))||F.__k===B.__k?(V=IG(B,V,_,E),E&&F.__e&&(F.__e=null)):typeof B.type=="function"&&D!==void 0?V=D:U&&(V=U.nextSibling),B.__u&=-7);return j.__e=H,V}function MU(_,$,j,G,Y){var X,Z,L,V,q,K=j.length,Q=K,F=0;for(_.__k=Array(Y),X=0;X<Y;X++)(Z=$[X])!=null&&typeof Z!="boolean"&&typeof Z!="function"?(typeof Z=="string"||typeof Z=="number"||typeof Z=="bigint"||Z.constructor==String?Z=_.__k[X]=_2(null,Z,null,null,null):Z2(Z)?Z=_.__k[X]=_2(L2,{children:Z},null,null,null):Z.constructor===void 0&&Z.__b>0?Z=_.__k[X]=_2(Z.type,Z.props,Z.key,Z.ref?Z.ref:null,Z.__v):_.__k[X]=Z,V=X+F,Z.__=_,Z.__b=_.__b+1,L=null,(q=Z.__i=TU(Z,j,V,Q))!=-1&&(Q--,(L=j[q])&&(L.__u|=2)),L==null||L.__v==null?(q==-1&&(Y>K?F--:Y<K&&F++),typeof Z.type!="function"&&(Z.__u|=4)):q!=V&&(q==V-1?F--:q==V+1?F++:(q>V?F--:F++,Z.__u|=4))):_.__k[X]=null;if(Q)for(X=0;X<K;X++)(L=j[X])!=null&&(2&L.__u)==0&&(L.__e==G&&(G=j5(L)),PG(L,L));return G}function IG(_,$,j,G){var Y,X;if(typeof _.type=="function"){for(Y=_.__k,X=0;Y&&X<Y.length;X++)Y[X]&&(Y[X].__=_,$=IG(Y[X],$,j,G));return $}_.__e!=$&&(G&&($&&_.type&&!$.parentNode&&($=j5(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function TU(_,$,j,G){var Y,X,Z,L=_.key,V=_.type,q=$[j],K=q!=null&&(2&q.__u)==0;if(q===null&&L==null||K&&L==q.key&&V==q.type)return j;if(G>(K?1:0)){for(Y=j-1,X=j+1;Y>=0||X<$.length;)if((q=$[Z=Y>=0?Y--:X++])!=null&&(2&q.__u)==0&&L==q.key&&V==q.type)return Z}return-1}function KG(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||JU.test($)?j:j+"px"}function t6(_,$,j,G,Y){var X,Z;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof G=="string"&&(_.style.cssText=G=""),G)for($ in G)j&&$ in j||KG(_.style,$,"");if(j)for($ in j)G&&j[$]==G[$]||KG(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")X=$!=($=$.replace(MG,"$1")),Z=$.toLowerCase(),$=Z in _||$=="onFocusOut"||$=="onFocusIn"?Z.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+X]=j,j?G?j[n5]=G[n5]:(j[n5]=H3,_.addEventListener($,X?N3:F3,X)):_.removeEventListener($,X?N3:F3,X);else{if(Y=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(L){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function BG(_){return function($){if(this.l){var j=this.l[$.type+_];if($[e6]==null)$[e6]=H3++;else if($[e6]<j[n5])return;return j(I_.event?I_.event($):$)}}}function z3(_,$,j,G,Y,X,Z,L,V,q){var K,Q,F,B,U,H,D,E,M,z,O,x,I,A,k,W=$.type;if($.constructor!==void 0)return null;128&j.__u&&(V=!!(32&j.__u),X=[L=$.__e=j.__e]),(K=I_.__b)&&K($);_:if(typeof W=="function")try{if(E=$.props,M=W.prototype&&W.prototype.render,z=(K=W.contextType)&&G[K.__c],O=K?z?z.props.value:K.__:G,j.__c?D=(Q=$.__c=j.__c).__=Q.__E:(M?$.__c=Q=new W(E,O):($.__c=Q=new d5(E,O),Q.constructor=W,Q.render=wU),z&&z.sub(Q),Q.state||(Q.state={}),Q.__n=G,F=Q.__d=!0,Q.__h=[],Q._sb=[]),M&&Q.__s==null&&(Q.__s=Q.state),M&&W.getDerivedStateFromProps!=null&&(Q.__s==Q.state&&(Q.__s=B$({},Q.__s)),B$(Q.__s,W.getDerivedStateFromProps(E,Q.__s))),B=Q.props,U=Q.state,Q.__v=$,F)M&&W.getDerivedStateFromProps==null&&Q.componentWillMount!=null&&Q.componentWillMount(),M&&Q.componentDidMount!=null&&Q.__h.push(Q.componentDidMount);else{if(M&&W.getDerivedStateFromProps==null&&E!==B&&Q.componentWillReceiveProps!=null&&Q.componentWillReceiveProps(E,O),$.__v==j.__v||!Q.__e&&Q.shouldComponentUpdate!=null&&Q.shouldComponentUpdate(E,Q.__s,O)===!1){$.__v!=j.__v&&(Q.props=E,Q.state=Q.__s,Q.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(T){T&&(T.__=$)}),G2.push.apply(Q.__h,Q._sb),Q._sb=[],Q.__h.length&&Z.push(Q);break _}Q.componentWillUpdate!=null&&Q.componentWillUpdate(E,Q.__s,O),M&&Q.componentDidUpdate!=null&&Q.__h.push(function(){Q.componentDidUpdate(B,U,H)})}if(Q.context=O,Q.props=E,Q.__P=_,Q.__e=!1,x=I_.__r,I=0,M)Q.state=Q.__s,Q.__d=!1,x&&x($),K=Q.render(Q.props,Q.state,Q.context),G2.push.apply(Q.__h,Q._sb),Q._sb=[];else do Q.__d=!1,x&&x($),K=Q.render(Q.props,Q.state,Q.context),Q.state=Q.__s;while(Q.__d&&++I<25);Q.state=Q.__s,Q.getChildContext!=null&&(G=B$(B$({},G),Q.getChildContext())),M&&!F&&Q.getSnapshotBeforeUpdate!=null&&(H=Q.getSnapshotBeforeUpdate(B,U)),A=K!=null&&K.type===L2&&K.key==null?CG(K.props.children):K,L=wG(_,Z2(A)?A:[A],$,j,G,Y,X,Z,L,V,q),Q.base=$.__e,$.__u&=-161,Q.__h.length&&Z.push(Q),D&&(Q.__E=Q.__=null)}catch(T){if($.__v=null,V||X!=null)if(T.then){for($.__u|=V?160:128;L&&L.nodeType==8&&L.nextSibling;)L=L.nextSibling;X[X.indexOf(L)]=null,$.__e=L}else{for(k=X.length;k--;)W3(X[k]);E3($)}else $.__e=j.__e,$.__k=j.__k,T.then||E3($);I_.__e(T,$,j)}else X==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):L=$.__e=yU(j.__e,$,j,G,Y,X,Z,V,q);return(K=I_.diffed)&&K($),128&$.__u?void 0:L}function E3(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(E3))}function xG(_,$,j){for(var G=0;G<j.length;G++)A3(j[G],j[++G],j[++G]);I_.__c&&I_.__c($,_),_.some(function(Y){try{_=Y.__h,Y.__h=[],_.some(function(X){X.call(Y)})}catch(X){I_.__e(X,Y.__v)}})}function CG(_){return typeof _!="object"||_==null||_.__b>0?_:Z2(_)?_.map(CG):B$({},_)}function yU(_,$,j,G,Y,X,Z,L,V){var q,K,Q,F,B,U,H,D=j.props||j2,E=$.props,M=$.type;if(M=="svg"?Y="http://www.w3.org/2000/svg":M=="math"?Y="http://www.w3.org/1998/Math/MathML":Y||(Y="http://www.w3.org/1999/xhtml"),X!=null){for(q=0;q<X.length;q++)if((B=X[q])&&"setAttribute"in B==!!M&&(M?B.localName==M:B.nodeType==3)){_=B,X[q]=null;break}}if(_==null){if(M==null)return document.createTextNode(E);_=document.createElementNS(Y,M,E.is&&E),L&&(I_.__m&&I_.__m($,X),L=!1),X=null}if(M==null)D===E||L&&_.data==E||(_.data=E);else{if(X=X&&X2.call(_.childNodes),!L&&X!=null)for(D={},q=0;q<_.attributes.length;q++)D[(B=_.attributes[q]).name]=B.value;for(q in D)B=D[q],q=="dangerouslySetInnerHTML"?Q=B:q=="children"||(q in E)||q=="value"&&("defaultValue"in E)||q=="checked"&&("defaultChecked"in E)||t6(_,q,null,B,Y);for(q in E)B=E[q],q=="children"?F=B:q=="dangerouslySetInnerHTML"?K=B:q=="value"?U=B:q=="checked"?H=B:L&&typeof B!="function"||D[q]===B||t6(_,q,B,D[q],Y);if(K)L||Q&&(K.__html==Q.__html||K.__html==_.innerHTML)||(_.innerHTML=K.__html),$.__k=[];else if(Q&&(_.innerHTML=""),wG($.type=="template"?_.content:_,Z2(F)?F:[F],$,j,G,M=="foreignObject"?"http://www.w3.org/1999/xhtml":Y,X,Z,X?X[0]:j.__k&&j5(j,0),L,V),X!=null)for(q=X.length;q--;)W3(X[q]);L||(q="value",M=="progress"&&U==null?_.removeAttribute("value"):U!=null&&(U!==_[q]||M=="progress"&&!U||M=="option"&&U!=D[q])&&t6(_,q,U,D[q],Y),q="checked",H!=null&&H!=_[q]&&t6(_,q,H,D[q],Y))}return _}function A3(_,$,j){try{if(typeof _=="function"){var G=typeof _.__u=="function";G&&_.__u(),G&&$==null||(_.__u=_($))}else _.current=$}catch(Y){I_.__e(Y,j)}}function PG(_,$,j){var G,Y;if(I_.unmount&&I_.unmount(_),(G=_.ref)&&(G.current&&G.current!=_.__e||A3(G,null,$)),(G=_.__c)!=null){if(G.componentWillUnmount)try{G.componentWillUnmount()}catch(X){I_.__e(X,$)}G.base=G.__P=null}if(G=_.__k)for(Y=0;Y<G.length;Y++)G[Y]&&PG(G[Y],$,j||typeof _.type!="function");j||W3(_.__e),_.__c=_.__=_.__e=void 0}function wU(_,$,j){return this.constructor(_,j)}function F$(_,$,j){var G,Y,X,Z;$==document&&($=document.documentElement),I_.__&&I_.__(_,$),Y=(G=typeof j=="function")?null:j&&j.__k||$.__k,X=[],Z=[],z3($,_=(!G&&j||$).__k=O3(L2,null,[_]),Y||j2,j2,$.namespaceURI,!G&&j?[j]:Y?null:$.firstChild?X2.call($.childNodes):null,X,!G&&j?j:Y?Y.__e:$.firstChild,G,Z),xG(X,_,Z)}function IU(_){function $(j){var G,Y;return this.getChildContext||(G=new Set,(Y={})[$.__c]=this,this.getChildContext=function(){return Y},this.componentWillUnmount=function(){G=null},this.shouldComponentUpdate=function(X){this.props.value!=X.value&&G.forEach(function(Z){Z.__e=!0,U3(Z)})},this.sub=function(X){G.add(X);var Z=X.componentWillUnmount;X.componentWillUnmount=function(){G&&G.delete(X),Z&&Z.call(X)}}),j.children}return $.__c="__cC"+TG++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,G){return j.children(G)}).contextType=$,$}function Y5(_,$){u_.__h&&u_.__h(w_,_,G5||$),G5=0;var j=w_.__H||(w_.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function C(_){return G5=1,fG(SG,_)}function fG(_,$,j){var G=Y5(c$++,2);if(G.t=_,!G.__c&&(G.__=[j?j($):SG(void 0,$),function(L){var V=G.__N?G.__N[0]:G.__[0],q=G.t(V,L);V!==q&&(G.__N=[q,G.__[1]],G.__c.setState({}))}],G.__c=w_,!w_.__f)){var Y=function(L,V,q){if(!G.__c.__H)return!0;var K=G.__c.__H.__.filter(function(F){return F.__c});if(K.every(function(F){return!F.__N}))return!X||X.call(this,L,V,q);var Q=G.__c.props!==L;return K.some(function(F){if(F.__N){var B=F.__[0];F.__=F.__N,F.__N=void 0,B!==F.__[0]&&(Q=!0)}}),X&&X.call(this,L,V,q)||Q};w_.__f=!0;var{shouldComponentUpdate:X,componentWillUpdate:Z}=w_;w_.componentWillUpdate=function(L,V,q){if(this.__e){var K=X;X=void 0,Y(L,V,q),X=K}Z&&Z.call(this,L,V,q)},w_.shouldComponentUpdate=Y}return G.__N||G.__}function g(_,$){var j=Y5(c$++,3);!u_.__s&&J3(j.__H,$)&&(j.__=_,j.u=$,w_.__H.__h.push(j))}function X5(_,$){var j=Y5(c$++,4);!u_.__s&&J3(j.__H,$)&&(j.__=_,j.u=$,w_.__h.push(j))}function u(_){return G5=5,Z0(function(){return{current:_}},[])}function xU(_,$,j){G5=6,X5(function(){if(typeof _=="function"){var G=_($());return function(){_(null),G&&typeof G=="function"&&G()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function Z0(_,$){var j=Y5(c$++,7);return J3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function f(_,$){return G5=8,Z0(function(){return _},$)}function CU(_){var $=w_.context[_.__c],j=Y5(c$++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(w_)),$.props.value):_.__}function PU(_,$){u_.useDebugValue&&u_.useDebugValue($?$(_):_)}function RU(_){var $=Y5(c$++,10),j=C();return $.__=_,w_.componentDidCatch||(w_.componentDidCatch=function(G,Y){$.__&&$.__(G,Y),j[1](G)}),[j[0],function(){j[1](void 0)}]}function fU(){for(var _;_=RG.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some($2),$.__h.some(D3),$.__h=[]}catch(j){$.__h=[],u_.__e(j,_.__v)}}}function SU(_){var $,j=function(){clearTimeout(G),OG&&cancelAnimationFrame($),setTimeout(_)},G=setTimeout(j,35);OG&&($=requestAnimationFrame(j))}function $2(_){var $=w_,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),w_=$}function D3(_){var $=w_;_.__c=_.__(),w_=$}function J3(_,$){return!_||_.length!==$.length||$.some(function(j,G){return j!==_[G]})}function SG(_,$){return typeof $=="function"?$(_):$}function gU(_){var $=zG.get(this);return $||($=new Map,zG.set(this,$)),($=gG(this,$.get(_)||($.set(_,$=function(j){for(var G,Y,X=1,Z="",L="",V=[0],q=function(F){X===1&&(F||(Z=Z.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?V.push(0,F,Z):X===3&&(F||Z)?(V.push(3,F,Z),X=2):X===2&&Z==="..."&&F?V.push(4,F,0):X===2&&Z&&!F?V.push(5,0,!0,Z):X>=5&&((Z||!F&&X===5)&&(V.push(X,0,Z,Y),X=6),F&&(V.push(X,F,0,Y),X=6)),Z=""},K=0;K<j.length;K++){K&&(X===1&&q(),q(K));for(var Q=0;Q<j[K].length;Q++)G=j[K][Q],X===1?G==="<"?(q(),V=[V],X=3):Z+=G:X===4?Z==="--"&&G===">"?(X=1,Z=""):Z=G+Z[0]:L?G===L?L="":Z+=G:G==='"'||G==="'"?L=G:G===">"?(q(),X=1):X&&(G==="="?(X=5,Y=Z,Z=""):G==="/"&&(X<5||j[K][Q+1]===">")?(q(),X===3&&(V=V[0]),X=V,(V=V[0]).push(2,0,X),X=0):G===" "||G==="\t"||G===`
`||G==="\r"?(q(),X=2):Z+=G),X===3&&Z==="!--"&&(X=4,V=V[0])}return q(),V}(_)),$),arguments,[])).length>1?$:$[0]}var X2,I_,AG,AU,m$,QG,JG,kG,K3,e6,n5,MG,H3,F3,N3,TG,j2,G2,JU,Z2,c$,w_,B3,FG,G5=0,RG,u_,NG,UG,EG,DG,HG,WG,OG,gG=function(_,$,j,G){var Y;$[0]=0;for(var X=1;X<$.length;X++){var Z=$[X++],L=$[X]?($[0]|=Z?1:2,j[$[X++]]):$[++X];Z===3?G[0]=L:Z===4?G[1]=Object.assign(G[1]||{},L):Z===5?(G[1]=G[1]||{})[$[++X]]=L:Z===6?G[1][$[++X]]+=L+"":Z?(Y=_.apply(L,gG(_,L,j,["",null])),G.push(Y),L[0]?$[0]|=2:($[X-2]=0,$[X]=Y)):G.push(L)}return G},zG,N;var k0=z_(()=>{j2={},G2=[],JU=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Z2=Array.isArray;X2=G2.slice,I_={__e:function(_,$,j,G){for(var Y,X,Z;$=$.__;)if((Y=$.__c)&&!Y.__)try{if((X=Y.constructor)&&X.getDerivedStateFromError!=null&&(Y.setState(X.getDerivedStateFromError(_)),Z=Y.__d),Y.componentDidCatch!=null&&(Y.componentDidCatch(_,G||{}),Z=Y.__d),Z)return Y.__E=Y}catch(L){_=L}throw _}},AG=0,AU=function(_){return _!=null&&_.constructor===void 0},d5.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=B$({},this.state),typeof _=="function"&&(_=_(B$({},j),this.props)),_&&B$(j,_),_!=null&&this.__v&&($&&this._sb.push($),U3(this))},d5.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),U3(this))},d5.prototype.render=L2,m$=[],JG=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,kG=function(_,$){return _.__v.__b-$.__v.__b},Y2.__r=0,K3=Math.random().toString(8),e6="__d"+K3,n5="__a"+K3,MG=/(PointerCapture)$|Capture$/i,H3=0,F3=BG(!1),N3=BG(!0),TG=0;RG=[],u_=I_,NG=u_.__b,UG=u_.__r,EG=u_.diffed,DG=u_.__c,HG=u_.unmount,WG=u_.__;u_.__b=function(_){w_=null,NG&&NG(_)},u_.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),WG&&WG(_,$)},u_.__r=function(_){UG&&UG(_),c$=0;var $=(w_=_.__c).__H;$&&(B3===w_?($.__h=[],w_.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some($2),$.__h.some(D3),$.__h=[],c$=0)),B3=w_},u_.diffed=function(_){EG&&EG(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(RG.push($)!==1&&FG===u_.requestAnimationFrame||((FG=u_.requestAnimationFrame)||SU)(fU)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),B3=w_=null},u_.__c=function(_,$){$.some(function(j){try{j.__h.some($2),j.__h=j.__h.filter(function(G){return!G.__||D3(G)})}catch(G){$.some(function(Y){Y.__h&&(Y.__h=[])}),$=[],u_.__e(G,j.__v)}}),DG&&DG(_,$)},u_.unmount=function(_){HG&&HG(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(G){try{$2(G)}catch(Y){$=Y}}),j.__H=void 0,$&&u_.__e($,j.__v))};OG=typeof requestAnimationFrame=="function";zG=new Map;N=gU.bind(O3)});function O1(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function V_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{return}}function E$(_,$=!1){let j=O1(_);if(j===null)return $;return j==="true"}function z4(_,$=null){let j=O1(_);if(j===null)return $;let G=parseInt(j,10);return Number.isFinite(G)?G:$}function z2(_){let $=O1(_);if(!$)return null;try{return JSON.parse($)}catch{return null}}function B7(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function CX(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let G=j.length===3?j.split("").map((X)=>X+X).join(""):j,Y=parseInt(G,16);return{r:Y>>16&255,g:Y>>8&255,b:Y&255,hex:`#${G.toLowerCase()}`}}function UW(_,$){try{if(document.body){_.style.display="none",document.body.appendChild(_);let j=getComputedStyle(_).color||_.style.color;return document.body.removeChild(_),j}}catch{return $}return $}function EW(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Y=UW(j,j.style.color).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Y)return null;let X=parseInt(Y[1],10),Z=parseInt(Y[2],10),L=parseInt(Y[3],10);if(![X,Z,L].every((q)=>Number.isFinite(q)))return null;let V=`#${[X,Z,L].map((q)=>q.toString(16).padStart(2,"0")).join("")}`;return{r:X,g:Z,b:L,hex:V}}function A4(_){return CX(_)||EW(_)}function F7(_,$,j){let G=Math.round(_.r+($.r-_.r)*j),Y=Math.round(_.g+($.g-_.g)*j),X=Math.round(_.b+($.b-_.b)*j);return`rgb(${G} ${Y} ${X})`}function A2(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function DW(_){let $=_.r/255,j=_.g/255,G=_.b/255,Y=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),X=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),Z=G<=0.03928?G/12.92:Math.pow((G+0.055)/1.055,2.4);return 0.2126*Y+0.7152*X+0.0722*Z}function HW(_){return DW(_)>0.4?"#000000":"#ffffff"}function PX(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function N7(_){return wX[_]||wX.default}function WW(_){return _.mode==="auto"?PX():_.mode}function RX(_,$){let j=N7(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||H$}function D$(_,$,j){let G=A4(_);if(!G)return _;return F7(G,$,j)}function fX(_,$,j){let G=A4($);if(!G)return _;let X=CX(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:D$(_.bgPrimary,G,0.08),bgSecondary:D$(_.bgSecondary,G,0.12),bgHover:D$(_.bgHover,G,0.16),textPrimary:D$(_.textPrimary,G,j==="dark"?0.08:0.06),textSecondary:D$(_.textSecondary,G,j==="dark"?0.12:0.1),borderColor:D$(_.borderColor,G,0.1),accent:G.hex,accentHover:X?F7(G,X,0.18):G.hex,warning:D$(_.warning||H$.warning,G,0.14),danger:D$(_.danger,G,0.16),success:D$(_.success,G,0.16)}}function OW(_,$){let j=A4(_?.warning);if(j)return j.hex;let G=A4($==="dark"?M2.warning:H$.warning)||A4(H$.warning),Y=A4(_?.accent);if(G&&Y)return F7(G,Y,$==="dark"?0.18:0.14);return $==="dark"?M2.warning:H$.warning}function zW(_,$){if(typeof document>"u")return;let j=document.documentElement,G=_.accent,Y=A4(G),X=Y?A2(Y,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,Z=Y?A2(Y,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",L=Y?A2(Y,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",V=Y?HW(Y):$==="dark"?"#000000":"#ffffff",q=Y?A2(Y,$==="dark"?0.35:0.25):"rgba(29, 155, 240, 0.25)",K=OW(_,$),Q={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":G,"--accent-hover":_.accentHover||G,"--accent-color-alpha":q,"--accent-soft":Z,"--accent-soft-strong":L,"--accent-contrast-text":V,"--warning-color":K,"--danger-color":_.danger||H$.danger,"--success-color":_.success||H$.success,"--search-highlight-color":X||"rgba(29, 155, 240, 0.2)"};Object.entries(Q).forEach(([F,B])=>{if(B)j.style.setProperty(F,B)})}function AW(){if(typeof document>"u")return;let _=document.documentElement;NW.forEach(($)=>_.style.removeProperty($))}function U5(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,G=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!G)G=document.createElement("meta"),document.head.appendChild(G);if(G.setAttribute("name",_),j)G.setAttribute("id",j);return G}function IX(_){let $=B7(J4?.theme||"default"),j=J4?.tint?String(J4.tint).trim():null,G=RX($,_);if($==="default"&&j)G=fX(G,j,_);if(G?.bgPrimary)return G.bgPrimary;return _==="dark"?M2.bgPrimary:H$.bgPrimary}function JW(_,$){if(typeof document>"u")return;let j=U5("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let G=U5("theme-color",{id:"theme-color-light"});if(G)G.setAttribute("media","(prefers-color-scheme: light)"),G.setAttribute("content",IX("light"));let Y=U5("theme-color",{id:"theme-color-dark"});if(Y)Y.setAttribute("media","(prefers-color-scheme: dark)"),Y.setAttribute("content",IX("dark"));let X=U5("msapplication-TileColor");if(X&&_)X.setAttribute("content",_);let Z=U5("msapplication-navbutton-color");if(Z&&_)Z.setAttribute("content",_);let L=U5("apple-mobile-web-app-status-bar-style");if(L)L.setAttribute("content",$==="dark"?"black-translucent":"default")}function kW(){if(typeof window>"u")return;let _={...J4,mode:xX};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function MW(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function TW(_){if(typeof document>"u"||!_)return;let $=document.documentElement;if($?.style)$.style.background=_;if(document.body?.style)document.body.style.background=_}function U7(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=B7(_?.theme||"default"),G=_?.tint?String(_.tint).trim():null,Y=N7(j),X=WW(Y),Z=RX(j,X);J4={theme:j,tint:G},xX=X;let L=document.documentElement;L.dataset.theme=X,L.dataset.colorTheme=j,L.dataset.tint=G?String(G):"",L.style.colorScheme=X;let V=Z;if(j==="default"&&G)V=fX(Z,G,X);if(j==="default"&&!G)AW();else zW(V,X);if(TW(V.bgPrimary),JW(V.bgPrimary,X),kW(),$.persist!==!1)if(V_(K7,j),G)V_(k2,G);else V_(k2,"")}function J2(){if(N7(J4.theme).mode!=="auto")return;U7(J4,{persist:!1})}function E7(){if(typeof window>"u")return;let _=B7(O1(K7)||"default"),$=(()=>{let j=O1(k2);return j?j.trim():null})();U7({theme:_,tint:$},{persist:!1})}function SX(){if(typeof window>"u")return()=>{};if(E7(),window.matchMedia&&!Q7){let _=window.matchMedia("(prefers-color-scheme: dark)");if(_.addEventListener)_.addEventListener("change",J2);else if(_.addListener)_.addListener(J2);return Q7=!0,()=>{if(_.removeEventListener)_.removeEventListener("change",J2);else if(_.removeListener)_.removeListener(J2);Q7=!1}}return()=>{}}function E5(_){if(!_||typeof _!=="object")return;let $=MW(),j=_.chat_jid||_.chatJid||null,G=_.theme??_.name??_.colorTheme,Y=_.tint??null;if(!j||j===$)U7({theme:G||"default",tint:Y},{persist:!1});V_(K7,G||"default"),V_(k2,Y||"")}function gX(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return PX()}var K7="piclaw_theme",k2="piclaw_tint",H$,M2,wX,NW,J4,xX="light",Q7=!1;var G6=z_(()=>{H$={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},M2={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},wX={default:{label:"Default",mode:"auto",light:H$,dark:M2},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},NW=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-color-alpha","--accent-contrast-text","--accent-soft","--accent-soft-strong","--warning-color","--danger-color","--success-color","--search-highlight-color"],J4={theme:"default",tint:null}});function rX(_=typeof window<"u"?window:null){return _||null}function y2(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function q6(_,$){return`${_}:${$}`}function nX(_){return`${_}-${Math.random().toString(36).slice(2,10)}-${Date.now().toString(36)}`}function dX(_,$){if(_.length<=$)return;_.splice(0,_.length-$)}function M4(_){if(!_||typeof _!=="object")return null;return{..._}}function w4(_){if(!_)return null;return T4.find(($)=>$.id===_)||null}function H7(_,$){if(typeof performance>"u"||typeof performance.mark!=="function")return;try{performance.mark(`piclaw:${_}:${$}`)}catch(j){console.debug("[app-perf] Ignoring performance.mark failure.",j,{traceId:_,phase:$})}}function oX(_){if(typeof performance>"u"||typeof performance.clearMarks!=="function")return;try{performance.clearMarks(`piclaw:${_}:start`);let $=w4(_);if(!$)return;for(let j of $.phases)performance.clearMarks(`piclaw:${_}:${j.phase}`)}catch($){console.debug("[app-perf] Ignoring performance.clearMarks failure.",$,{traceId:_})}}function pX(_,$,j){let G=y4.get(q6(_,$));if(G&&w4(G)?.status==="active")L6(G,"cancelled","superseded",{replacementType:_,replacementChatJid:$});let Y=nX(_),X={id:Y,type:_,chatJid:$,startedAt:y2(),detail:M4(j),phases:[],status:"active"};return T4.push(X),dX(T4,100),y4.set(q6(_,$),Y),H7(Y,"start"),Y}function L6(_,$,j,G,Y){let X=w4(_);if(!X||X.status!=="active")return;if(j)X.phases.push({phase:j,at:y2(),detail:M4(G)}),H7(X.id,j);if(X.status=$,X.completedAt=y2(),X.durationMs=X.completedAt-X.startedAt,Y!==void 0)X.error=Y instanceof Error?Y.message:String(Y);let Z=q6(X.type,X.chatJid);if(y4.get(Z)===X.id)y4.delete(Z);oX(X.id)}function dW(_=rX()){let $=_?.__PICLAW_PERF__;if($)return $;if(_)_.__PICLAW_PERF__=w2;return w2}function D5(_=rX()){return dW(_)}function iX(_,$,j){return D5().ensureTrace(_,$,j)}function I2(_,$){return D5().getActiveTraceId(_,$)}function Z1(_,$,j){D5().markTrace(_,$,j)}function x2(_,$,j="settled",G){let Y=w4(_);if(!Y||Y.status!=="active")return!1;let X=new Set(Y.phases.map((Z)=>Z.phase));if(!$.every((Z)=>X.has(Z)))return!1;return L6(_,"completed",j,G),!0}function sX(_,$,j="failed",G){D5().failTrace(_,$,j,G)}function aX(_,$="cancelled",j){D5().cancelTrace(_,$,j)}function W7(_){return D5().recordRequest(_)}var T4,Z6,y4,w2;var V6=z_(()=>{T4=[],Z6=[],y4=new Map;w2={startTrace(_,$,j){return pX(_,$,j)},ensureTrace(_,$,j){let G=y4.get(q6(_,$));if(G&&w4(G)?.status==="active")return G;return pX(_,$,j)},getActiveTraceId(_,$){let j=y4.get(q6(_,$));return j&&w4(j)?.status==="active"?j:null},markTrace(_,$,j){let G=w4(_);if(!G||G.status!=="active")return;G.phases.push({phase:$,at:y2(),detail:M4(j)}),H7(G.id,$)},completeTrace(_,$="settled",j){L6(_,"completed",$,j)},failTrace(_,$,j="failed",G){L6(_,"failed",j,G,$)},cancelTrace(_,$="cancelled",j){L6(_,"cancelled",$,j)},recordRequest(_){let $=nX("req");return Z6.push({..._,id:$,detail:M4(_.detail)}),dX(Z6,300),$},getTraces(){return T4.map((_)=>({..._,detail:M4(_.detail),phases:_.phases.map(($)=>({...$,detail:M4($.detail)}))}))},getRequests(){return Z6.map((_)=>({..._,detail:M4(_.detail)}))},clear(){T4.forEach((_)=>oX(_.id)),T4.splice(0,T4.length),Z6.splice(0,Z6.length),y4.clear()},printSummary(){let _={traces:w2.getTraces(),requests:w2.getRequests()};return console.table(_.traces.map(($)=>({id:$.id,type:$.type,chatJid:$.chatJid,status:$.status,durationMs:Number($.durationMs||0).toFixed(1),lastPhase:$.phases[$.phases.length-1]?.phase||"start"}))),_}}});function H5(_){let $=Number(_||0);return Number.isFinite($)&&$>0?$:null}function oW(_){try{return Boolean(_?.matchMedia?.("(pointer: coarse)")?.matches)}catch{return!1}}function iW(_){let $=String(_?.navigator?.userAgent||"");return/Android|webOS|iPhone|iPod|Mobile|Windows Phone/i.test($)}function tX(_){let $=String(_?.navigator?.userAgent||"");return/iPad|Tablet|PlayBook|Silk/i.test($)}function eX(_=typeof window<"u"?window:null){let $=H5(_?.innerWidth)??H5(_?.screen?.availWidth)??H5(_?.screen?.width)??0,j=H5(_?.innerHeight)??H5(_?.screen?.availHeight)??H5(_?.screen?.height)??0,G=$&&j?Math.min($,j):$||j,Y=$&&j?Math.max($,j):$||j,X=oW(_),Z=Number(_?.navigator?.maxTouchPoints||0),L=X||Z>1;if(G>0&&G<=640)return"mobile";if(iW(_)&&!tX(_))return"mobile";if(tX(_))return"tablet";if(L&&G>0&&G<=1100)return"tablet";if(Y>0&&Y<=1180&&G>0&&G<=900)return"tablet";return"desktop"}var E6={};$1(E6,{uploadWorkspaceFile:()=>f2,uploadMedia:()=>v7,updateWorkspaceFile:()=>yO,updateScheduledTask:()=>k7,submitAdaptiveCardAction:()=>m7,streamSidePrompt:()=>JO,stopSessionRecording:()=>y7,stopAutoresearch:()=>EO,steerAgentQueueItem:()=>OO,startSessionRecording:()=>T7,setWorkspaceVisibility:()=>N6,setAgentThoughtVisibility:()=>MO,sessionRecordingPlaybackUrl:()=>I7,sessionRecordingExportUrl:()=>Q6,sendPeerAgentMessage:()=>KO,sendAgentMessage:()=>z1,searchPosts:()=>aW,saveWorkspaceSettings:()=>R7,saveWebPushSubscription:()=>u7,saveUiState:()=>C7,saveQuickActionsSettings:()=>P7,saveEnvironmentOverride:()=>P2,restoreChatBranch:()=>QO,respondToAgentRequest:()=>W5,reorderAgentQueueItem:()=>zO,renameWorkspaceFile:()=>s7,renameChatJid:()=>VO,renameChatBranch:()=>XO,removeAgentQueueItem:()=>WO,reindexWorkspace:()=>n7,purgeChatBranch:()=>qO,pruneChatBranch:()=>LO,previewSessionRecordingRedaction:()=>x7,moveWorkspaceEntry:()=>a7,mergeChatBranchIntoParent:()=>ZO,getWorkspaceTree:()=>F6,getWorkspaceRawUrl:()=>U6,getWorkspaceIndexStatus:()=>r7,getWorkspaceFileStat:()=>o7,getWorkspaceFileDownloadUrl:()=>S2,getWorkspaceFile:()=>d7,getWorkspaceDownloadUrl:()=>g2,getWorkspaceBranch:()=>p7,getWebPushPublicKey:()=>g7,getTimeline:()=>r$,getThumbnailUrl:()=>h7,getThread:()=>tW,getSystemMetrics:()=>A7,getSessionRecordings:()=>M7,getSessionRecording:()=>C2,getScheduledTasks:()=>J7,getQuickActionsSettings:()=>B6,getPostsByHashtag:()=>z7,getMediaUrl:()=>b1,getMediaText:()=>TO,getMediaInfo:()=>R2,getMediaBlob:()=>l7,getEnvironmentSettings:()=>f7,getChatBranches:()=>GO,getAutoresearchStatus:()=>UO,getAgents:()=>BO,getAgentThought:()=>kO,getAgentStatus:()=>FO,getAgentQueueState:()=>HO,getAgentModels:()=>I4,getAgentContext:()=>NO,getAgentCommands:()=>K6,getActiveChatAgents:()=>jO,forkChatBranch:()=>YO,dismissAutoresearch:()=>DO,deleteWorkspaceFile:()=>t7,deleteWebPushSubscription:()=>b7,deleteSessionRecording:()=>w7,deletePost:()=>$O,createWorkspaceFile:()=>i7,createRootChatSession:()=>S7,createReply:()=>_O,createPost:()=>eW,completeInstanceOobe:()=>AO,attachWorkspaceFile:()=>wO,addToWhitelist:()=>c7,SSEClient:()=>u2});async function b0(_,$={}){let j=typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now(),G;try{G=await fetch(l_+_,{...$,headers:{"Content-Type":"application/json",...$.headers}})}catch(X){throw W7({method:String($.method||"GET").toUpperCase(),url:_,startedAt:j,durationMs:(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-j,ok:!1,detail:{failedBeforeResponse:!0}}),X}let Y=(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-j;if(W7({method:String($.method||"GET").toUpperCase(),url:_,startedAt:j,durationMs:Y,status:G.status,ok:G.ok,requestId:G.headers?.get?.("x-request-id")||null,serverTiming:G.headers?.get?.("Server-Timing")||null}),!G.ok){let X=await G.json().catch(()=>({error:"Unknown error"}));throw Error(X.error||`HTTP ${G.status}`)}return G.json()}function _Z(_){let $=String(_||"").split(`
`),j="message",G=[];for(let X of $)if(X.startsWith("event:"))j=X.slice(6).trim()||"message";else if(X.startsWith("data:"))G.push(X.slice(5).trim());let Y=G.join(`
`);if(!Y)return null;try{return{event:j,data:JSON.parse(Y)}}catch{return{event:j,data:Y}}}async function sW(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),G=new TextDecoder,Y="";while(!0){let{value:Z,done:L}=await j.read();if(L)break;Y+=G.decode(Z,{stream:!0});let V=Y.split(`

`);Y=V.pop()||"";for(let q of V){let K=_Z(q);if(K)$(K.event,K.data)}}Y+=G.decode();let X=_Z(Y);if(X)$(X.event,X.data)}async function r$(_=10,$=null,j=null){let G=`/timeline?limit=${_}`;if($)G+=`&before=${$}`;if(j)G+=`&chat_jid=${encodeURIComponent(j)}`;return b0(G)}async function z7(_,$=50,j=0,G=null){let Y=G?`&chat_jid=${encodeURIComponent(G)}`:"";return b0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Y}`)}async function aW(_,$=50,j=0,G=null,Y="current",X=null,Z=null){let L=G?`&chat_jid=${encodeURIComponent(G)}`:"",V=Y?`&scope=${encodeURIComponent(Y)}`:"",q=X?`&root_chat_jid=${encodeURIComponent(X)}`:"",K=Z?.images?"&images=1":"",Q=Z?.attachments?"&attachments=1":"";return b0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${L}${V}${q}${K}${Q}`)}async function tW(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return b0(`/thread/${_}${j}`)}async function A7(){return b0("/agent/system-metrics")}async function J7(_={}){let $=new URLSearchParams;if(_?.id)$.set("id",String(_.id));if(_?.chatJid)$.set("chat_jid",String(_.chatJid));if(_?.status&&_.status!=="all")$.set("status",String(_.status));if(_?.limit)$.set("limit",String(_.limit));if(_?.includeRunLogs)$.set("include_run_logs","1");if(_?.runLogLimit)$.set("run_log_limit",String(_.runLogLimit));let j=$.toString()?`?${$.toString()}`:"";return b0(`/agent/scheduled-tasks${j}`)}async function k7(_,$,j={}){return b0("/agent/scheduled-tasks/action",{method:"POST",body:JSON.stringify({action:_,id:$,allow_internal:j?.allowInternal===!0})})}async function M7(){return b0("/agent/recordings")}async function C2(_){return b0(`/agent/recordings/${encodeURIComponent(_)}`)}async function T7(_={}){return b0("/agent/recordings/start",{method:"POST",body:JSON.stringify(_||{})})}async function y7(_={}){return b0("/agent/recordings/stop",{method:"POST",body:JSON.stringify(_||{})})}async function w7(_){return b0(`/agent/recordings/${encodeURIComponent(_)}`,{method:"DELETE"})}function Q6(_,$="json"){return`/agent/recordings/${encodeURIComponent(_)}/export?format=${encodeURIComponent($)}`}function I7(_){return`/recordings/playback?id=${encodeURIComponent(_)}`}async function x7(_,$={}){return b0("/agent/recordings/redact-preview",{method:"POST",body:JSON.stringify({payload:_,...$})})}async function C7(_){return b0("/agent/ui-state",{method:"POST",body:JSON.stringify(_||{})})}async function eW(_,$=[],j=null){let G=j?`?chat_jid=${encodeURIComponent(j)}`:"";return b0(`/post${G}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function _O(_,$,j=[],G=null){let Y=G?`?chat_jid=${encodeURIComponent(G)}`:"";return b0(`/post/reply${Y}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function $O(_,$=!1,j=null){let G=j?`&chat_jid=${encodeURIComponent(j)}`:"",Y=`/post/${_}?cascade=${$?"true":"false"}${G}`;return b0(Y,{method:"DELETE"})}async function z1(_,$,j=null,G=[],Y=null,X=null){let Z=X?`?chat_jid=${encodeURIComponent(X)}`:"",L={content:$,thread_id:j,media_ids:G,client_context:{screen_hint:eX()}};if(Y==="auto"||Y==="queue"||Y==="steer")L.mode=Y;return b0(`/agent/${_}/message${Z}`,{method:"POST",body:JSON.stringify(L)})}async function K6(_="web:default"){let $=typeof _==="string"&&_.trim()?_.trim():"web:default";return b0(`/agent/commands?chat_jid=${encodeURIComponent($)}`)}async function B6(){return b0("/agent/settings/quick-actions")}async function P7(_){return b0("/agent/settings/quick-actions",{method:"POST",body:JSON.stringify(_||{})})}async function R7(_){return b0("/agent/settings/workspace",{method:"POST",body:JSON.stringify(_||{})})}async function f7(){return b0("/agent/settings/environment")}async function P2(_){return b0("/agent/settings/environment",{method:"POST",body:JSON.stringify(_||{})})}async function jO(){return b0("/agent/active-chats")}async function GO(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let G=j.toString()?`?${j.toString()}`:"";return b0(`/agent/branches${G}`)}async function YO(_,$={}){return b0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function S7(_){return b0("/agent/root-session",{method:"POST",body:JSON.stringify({agent_name:_})})}async function XO(_,$={}){return b0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function ZO(_){return b0("/agent/branch-merge-parent",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function LO(_){return b0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function qO(_){return b0("/agent/branch-purge",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function VO(_,$){return b0("/agent/rename-jid",{method:"POST",body:JSON.stringify({old_jid:_,new_jid:$})})}async function QO(_,$={}){return b0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function KO(_,$,j,G="auto",Y={}){let X={source_chat_jid:_,content:j,mode:G,...Y?.sourceAgentName?{source_agent_name:Y.sourceAgentName}:{},...Y?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return b0("/agent/peer-message",{method:"POST",body:JSON.stringify(X)})}async function g7(){return b0("/agent/push/vapid-public-key")}async function u7(_,$={}){let j={subscription:_,...$?.deviceId?{device_id:$.deviceId}:{}};return b0("/agent/push/subscription",{method:"POST",body:JSON.stringify(j)})}async function b7(_,$={}){let j={subscription:_,...$?.deviceId?{device_id:$.deviceId}:{}};return b0("/agent/push/subscription",{method:"DELETE",body:JSON.stringify(j)})}async function BO(){return b0("/agent/roster")}async function FO(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return b0(`/agent/status${$}`)}async function NO(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return b0(`/agent/context${$}`)}async function UO(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return b0(`/agent/autoresearch/status${$}`)}async function EO(_=null,$={}){return b0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function DO(_=null){return b0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function HO(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return b0(`/agent/queue-state${$}`)}async function WO(_,$=null){let j=await fetch(l_+"/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function OO(_,$=null){let j=await fetch(l_+"/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function zO(_,$,j=null){let G=await fetch(l_+"/agent/queue-reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({from_index:_,to_index:$,chat_jid:j||void 0})});if(!G.ok){let Y=await G.json().catch(()=>({error:"Failed to reorder queued item"}));throw Error(Y.error||`HTTP ${G.status}`)}return G.json()}async function I4(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return b0(`/agent/models${$}`)}async function AO(_="provider-ready"){return b0("/agent/oobe/complete",{method:"POST",body:JSON.stringify({kind:_})})}async function v7(_){let $=new FormData;$.append("file",_);let j=await fetch(l_+"/media/upload",{method:"POST",body:$});if(!j.ok){let G=await j.json().catch(()=>({error:"Upload failed"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function W5(_,$,j=null){let G=await fetch(l_+"/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!G.ok){let Y=await G.json().catch(()=>({error:"Failed to respond"}));throw Error(Y.error||`HTTP ${G.status}`)}return G.json()}async function m7(_){let $=await fetch(l_+"/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function JO(_,$={}){let j=await fetch(l_+"/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let X=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(X.error||`HTTP ${j.status}`)}let G=null,Y=null;if(await sW(j,(X,Z)=>{if($.onEvent?.(X,Z),X==="side_prompt_thinking_delta")$.onThinkingDelta?.(Z?.delta||"");else if(X==="side_prompt_text_delta")$.onTextDelta?.(Z?.delta||"");else if(X==="side_prompt_done")G=Z;else if(X==="side_prompt_error")Y=Z}),Y){let X=Error(Y?.error||"Side prompt failed");throw X.payload=Y,X}return G}async function c7(_,$){let j=await fetch(l_+"/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function kO(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return b0(j)}async function MO(_,$,j){return b0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function b1(_){return`${l_}/media/${_}`}function h7(_){return`${l_}/media/${_}/thumbnail`}async function R2(_){let $=await fetch(`${l_}/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function TO(_){let $=await fetch(`${l_}/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function l7(_){let $=await fetch(`${l_}/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function F6(_="",$=2,j=!1){let G=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return b0(G)}async function p7(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return b0($)}async function r7(_="all"){let $=`/workspace/index-status?scope=${encodeURIComponent(_||"all")}`;return b0($)}async function n7(_="all"){return b0("/workspace/reindex",{method:"POST",body:JSON.stringify({scope:_})})}async function d7(_,$=20000,j=null){let G=j?`&mode=${encodeURIComponent(j)}`:"",Y=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${G}`;return b0(Y)}async function o7(_){return b0(`/workspace/stat?path=${encodeURIComponent(_)}`)}async function yO(_,$){return b0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function wO(_){return b0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}function xO(_,$="",j={}){let G=new URLSearchParams;if($)G.set("path",$);if(j.overwrite)G.set("overwrite","1");let Y=G.toString();return Y?`${_}?${Y}`:_}function CO(){if(globalThis.crypto?.randomUUID)return globalThis.crypto.randomUUID();return`upload-${Date.now()}-${Math.random().toString(36).slice(2)}`}function PO(_,$,j,G){return new Promise((Y,X)=>{let Z=new XMLHttpRequest;Z.open("POST",l_+$);for(let[L,V]of Object.entries(j||{}))if(V!==void 0&&V!==null)Z.setRequestHeader(L,String(V));Z.upload.onprogress=(L)=>{if(typeof G==="function")G({loaded:L.lengthComputable?L.loaded:0,total:L.lengthComputable?L.total:_.size,lengthComputable:L.lengthComputable})},Z.onload=()=>{try{let L=Z.responseText?JSON.parse(Z.responseText):{};if(Z.status>=200&&Z.status<300)Y(L);else{let V=Error(L.error||`HTTP ${Z.status}`);V.status=Z.status,V.code=L.code,X(V)}}catch{let L=Error(`HTTP ${Z.status}`);L.status=Z.status,X(L)}},Z.onerror=()=>X(Error("Upload failed (network error)")),Z.ontimeout=()=>X(Error("Upload timed out")),Z.send(_)})}async function RO(_,$="",j={}){let G=CO(),Y=xO("/workspace/upload-chunk",$,j),X=Math.max(1,Math.min(O7,Number(j.chunkSize)||IO)),Z=Math.max(0,Number(_?.size)||0),L=Math.max(1,Math.ceil(Z/X)),V=0,q=null;for(let K=0;K<L;K+=1){let Q=K*X,F=Math.min(Z,Q+X),B=_.slice(Q,F),U=B.size;if(q=await PO(B,Y,{"X-Upload-Id":G,"X-Chunk-Index":K,"X-Chunk-Total":L,"X-File-Name":_?.name||"upload.bin","X-File-Size":Z},(H)=>{if(typeof j.onProgress!=="function")return;let D=Math.min(Z,V+(H?.loaded||0)),E=Z||1;j.onProgress({loaded:D,total:E,percent:Math.round(D/E*100),chunkIndex:K,chunkTotal:L})}),V+=U,typeof j.onProgress==="function"){let H=Z||1,D=Z?V:H;j.onProgress({loaded:D,total:H,percent:Math.round(D/H*100),chunkIndex:K+1,chunkTotal:L})}}return q}async function f2(_,$="",j={}){if(_?.size>O7){let G=(_.size/1048576).toFixed(0),Y=(O7/1048576).toFixed(0),X=Error(`File too large (${G} MB). Maximum upload size is ${Y} MB.`);throw X.code="file_too_large",X}return await RO(_,$,j)}async function i7(_,$,j=""){let G=await fetch(l_+"/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!G.ok){let Y=await G.json().catch(()=>({error:"Create failed"})),X=Error(Y.error||`HTTP ${G.status}`);throw X.status=G.status,X.code=Y.code,X}return G.json()}async function s7(_,$){let j=await fetch(l_+"/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Rename failed"})),Y=Error(G.error||`HTTP ${j.status}`);throw Y.status=j.status,Y.code=G.code,Y}return j.json()}async function a7(_,$){let j=await fetch(l_+"/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Move failed"})),Y=Error(G.error||`HTTP ${j.status}`);throw Y.status=j.status,Y.code=G.code,Y}return j.json()}async function t7(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return b0($,{method:"DELETE"})}async function N6(_,$=!1){return b0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function U6(_,$={}){let j=new URLSearchParams({path:String(_||"")});if($.download)j.set("download","1");return`${l_}/workspace/raw?${j.toString()}`}function S2(_){return U6(_,{download:!0})}function g2(_,$=!1){let j=`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`;return`${l_}/workspace/download?${j}`}class u2{onEvent;onStatusChange;chatJid;eventSource;reconnectTimeout;reconnectDelay;status;reconnectAttempts;cooldownUntil;connecting;lastActivityAt;staleCheckTimer;staleThresholdMs;constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource(l_+"/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(G)=>{this.markActivity(),this.onEvent(j,JSON.parse(G.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),$("ui_meters"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let G=Math.max(this.cooldownUntil-j,0),Y=Math.max(this.reconnectDelay,G);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Y),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}var l_="",O7=1073741824,IO=8388608;var T_=z_(()=>{V6()});function z5(_){let $=typeof _==="string"?_.trim():"";return $?$:null}function s1(_={}){if(typeof window>"u")return;let $=z5(_.section);try{if(window.__piclawSettingsOpenRequested=!0,$)window.__piclawSettingsRequestedSection=$;else delete window.__piclawSettingsRequestedSection}catch(j){console.debug("[settings-dialog-events] failed to record open request flags",j)}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:$?{section:$}:void 0}))}function q9(){if(typeof window>"u")return null;return z5(window.__piclawSettingsRequestedSection)}function c2(){if(typeof window>"u")return{open:!1,section:null};let _=Boolean(window.__piclawSettingsOpenRequested),$=q9();try{window.__piclawSettingsOpenRequested=!1,delete window.__piclawSettingsRequestedSection}catch(j){console.debug("[settings-dialog-events] failed to clear open request flags",j)}return{open:_,section:$}}function o$({children:_,className:$=""}){let[j,G]=C(null);return g(()=>{if(typeof document>"u")return;let Y=document.createElement("div");return Y.className=$||"",document.body.appendChild(Y),G(Y),()=>{try{F$(null,Y)}finally{Y.remove()}}},[]),g(()=>{if(!j)return;j.className=$||"";return},[$,j]),X5(()=>{if(!j)return;F$(_,j);return},[_,j]),null}var h2=z_(()=>{k0()});function V9(_,$){let j=String(_.label||"").localeCompare(String($.label||""),void 0,{sensitivity:"base"});if(j!==0)return j;return String(_.id||"").localeCompare(String($.id||""),void 0,{sensitivity:"base"})}function i$(_){let $=P4.findIndex((j)=>j.id===_.id);if($>=0)P4[$]=_;else P4.push(_);P4.sort(V9)}function cZ(_){let $=P4.findIndex((j)=>j.id===_);if($>=0)P4.splice($,1)}function hZ(){return[...P4]}function Q9(){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent("piclaw:settings-panes-changed"))}var P4;var A5=z_(()=>{P4=[]});function $z(_){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(R4,{detail:{enabled:Boolean(_)}}))}function rZ(_){if(typeof fetch!=="function")return;C7({ui_meters:_}).catch(($)=>{console.debug("[meters] Failed to persist meters UI state.",$)})}function jz(_){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(p2,{detail:{collapsed:Boolean(_)}}))}function J6(_=!1){return E$(lZ,_)}function nZ(_=!1){return E$(pZ,_)}function l2(_,$={}){let j=$.persist!==!1,G=$.persistServer!==!1,Y=Boolean(_);if(j)V_(lZ,Y?"true":"false");if(G)rZ({enabled:Y});return $z(Y),Y}function K9(_,$={}){let j=$.persist!==!1,G=$.persistServer!==!1,Y=Boolean(_);if(j)V_(pZ,Y?"true":"false");if(G)rZ({collapsed:Y});return jz(Y),Y}function B9(_){let $=typeof _?.mode==="string"?_.mode.trim().toLowerCase():"";if(typeof _?.enabled==="boolean")l2(Boolean(_.enabled),{persistServer:!1});else if($==="toggle"){let j=!J6(!1);l2(j,{persistServer:!1})}if(typeof _?.collapsed==="boolean")K9(Boolean(_.collapsed),{persistServer:!1})}var lZ="piclaw_system_meters_enabled",pZ="piclaw_system_meters_collapsed",R4="piclaw-meters-change",p2="piclaw-meters-collapsed-change";var r2=z_(()=>{T_()});function dZ(_,$){if(_===""||_===null||_===void 0)return $;let j=Number(_);return Number.isFinite(j)?j:$}function oZ(_,{min:$=-1/0,max:j=1/0}={}){let G=Number.isFinite(Number($))?Number($):-1/0,Y=Number.isFinite(Number(j))?Number(j):1/0;return Math.min(Y,Math.max(G,Number(_)))}function A$(_,{fallback:$=0,min:j=-1/0,max:G=1/0}={}){let Y=dZ(_,$);return oZ(Y,{min:j,max:G})}function Gz(_,{direction:$=1,step:j=1,fallback:G=0,min:Y=-1/0,max:X=1/0}={}){let Z=A$(_,{fallback:G,min:Y,max:X}),L=Math.abs(dZ(j,1))||1,V=Number($)<0?-1:1;return oZ(Z+V*L,{min:Y,max:X})}function m_({value:_,min:$,max:j,step:G=1,fallback:Y,width:X="80px",disabled:Z=!1,label:L,onChange:V}){let q=Number.isFinite(Number(Y))?Number(Y):A$(_,{fallback:0,min:$,max:j}),[K,Q]=C(String(_??q)),F=u(!1);g(()=>{if(!F.current)Q(String(_??q))},[_,q]);let B=f((H)=>{F.current=!1;let D=A$(H,{fallback:q,min:$,max:j});Q(String(D)),V?.(D)},[q,$,j,V]),U=f((H)=>{F.current=!1;let D=Gz(_,{direction:H,step:G,fallback:q,min:$,max:j});Q(String(D)),V?.(D)},[q,j,$,V,G,_]);return N`
        <span class="settings-number-stepper">
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Decrease ${L||"value"}`}
                title=${`Decrease ${L||"value"}`}
                disabled=${Z}
                onClick=${()=>U(-1)}
            >−</button>
            <input
                class="settings-number-input"
                type="text"
                inputmode="numeric"
                pattern="[0-9]*"
                value=${K}
                disabled=${Z}
                style=${`width:${X}`}
                onInput=${(H)=>{F.current=!0,Q(H.target.value)}}
                onBlur=${(H)=>B(H.target.value)}
                onKeyDown=${(H)=>{if(H.key==="Enter")H.preventDefault(),B(H.target.value),H.target.blur()}}
            />
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Increase ${L||"value"}`}
                title=${`Increase ${L||"value"}`}
                disabled=${Z}
                onClick=${()=>U(1)}
            >+</button>
        </span>
    `}var f4=z_(()=>{k0()});function iZ(_){let $=String(_||"").trim();if(!$)return"";if($.startsWith("http://")||$.startsWith("https://")||$.startsWith("data:")||$.startsWith("blob:"))return $;if($.startsWith("/workspace/"))return`/workspace/file?path=${encodeURIComponent($.slice(11))}`;if($.startsWith("/"))return"";if(/^[a-zA-Z]:[\\/]/.test($))return"";if($.startsWith("\\\\"))return"";if($.includes("\\"))return"";return`/workspace/file?path=${encodeURIComponent($.replace(/^\.\//,""))}`}function sZ({value:_,onChange:$}){let j=u(null),[G,Y]=C(iZ(_));g(()=>{Y(iZ(_))},[_]);let X=f((Z)=>{let L=Z.target.files?.[0];if(!L)return;let V=new FileReader;V.onload=()=>{let q=V.result;Y(q),$?.(q)},V.readAsDataURL(L)},[$]);return N`
        <div class="settings-avatar-inline" onClick=${()=>j.current?.click()} title="Click to upload">
            ${G?N`<img src=${G} alt="avatar" />`:N`<span class="settings-avatar-placeholder">+</span>`}
            <input type="file" accept="image/*" ref=${j} style="display:none" onChange=${X} />
        </div>
    `}function aZ(_={}){return{userName:_.userName||"",userAvatar:_.userAvatar||"",assistantName:_.assistantName||"",assistantAvatar:_.assistantAvatar||"",composeUploadLimitMb:_.composeUploadLimitMb??32,workspaceUploadLimitMb:_.workspaceUploadLimitMb??256}}async function Yz(_,$={}){let j=typeof _==="string"?_:"";if(!j)return!1;let G=$.navigator??(typeof navigator<"u"?navigator:null),Y=$.document??(typeof document<"u"?document:null);if(G?.clipboard?.writeText)try{return await G.clipboard.writeText(j),!0}catch(X){}try{if(!Y?.body||typeof Y.createElement!=="function"||typeof Y.execCommand!=="function")return!1;let X=Y.createElement("textarea");X.value=j,X.setAttribute?.("readonly",""),X.style.position="fixed",X.style.left="-9999px",X.style.top="0",X.style.opacity="0",Y.body.appendChild(X),X.focus?.(),X.select?.();let Z=Boolean(Y.execCommand("copy"));return Y.body.removeChild(X),Z}catch(X){return!1}}function F9({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Y]=C(""),[X,Z]=C(""),[L,V]=C(""),[q,K]=C(""),[Q,F]=C(32),[B,U]=C(256),[H,D]=C(""),[E,M]=C(!1),[z,O]=C(!1),[x,I]=C(!1),[A,k]=C(()=>J6(!1)),[W,T]=C(!1),y=u(""),J=u(null),P=u(!0);g(()=>{return P.current=!0,()=>{P.current=!1}},[]);let R=f((Y0)=>{let j0=aZ(Y0);Y(j0.userName),Z(j0.userAvatar),V(j0.assistantName),K(j0.assistantAvatar),F(j0.composeUploadLimitMb),U(j0.workspaceUploadLimitMb),D(Y0?.widgetToken||""),y.current=JSON.stringify(j0)},[]);g(()=>{R(_||{})},[_,R]),g(()=>{let Y0=(j0)=>{k(Boolean(j0?.detail?.enabled))};return window.addEventListener(R4,Y0),()=>window.removeEventListener(R4,Y0)},[]);let b=Z0(()=>JSON.stringify(aZ({userName:G,userAvatar:X,assistantName:L,assistantAvatar:q,composeUploadLimitMb:Q,workspaceUploadLimitMb:B})),[G,X,L,q,Q,B]);g(()=>{if(b===y.current)return;if(J.current)clearTimeout(J.current);return J.current=setTimeout(async()=>{if(!P.current)return;let Y0=document.activeElement;if(Y0&&Y0.closest?.(".settings-number-stepper"))return;try{let j0=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:b}),L0=await j0.json().catch(()=>({}));if(!P.current)return;if(!j0.ok||!L0?.ok||!L0?.settings)return;y.current=b,j?.(L0.settings),T(!0),setTimeout(()=>{if(P.current)T(!1)},4000)}catch(j0){console.warn("[settings/general] Failed to persist general settings snapshot.",j0)}},800),()=>{if(J.current)clearTimeout(J.current)}},[b,j]);let c=_?.instanceTotp||{configured:!1,issuer:L||"Piclaw",label:G?`${L||"Piclaw"}:${G}`:L||"Piclaw",secret:"",otpauth:"",qrSvg:""},r=f(async()=>{if(!H)return;if(await Yz(H))O(!0),setTimeout(()=>{if(P.current)O(!1)},3000);else $?.("Could not copy widget token. Select the token field and copy manually."),console.warn("[settings/general] Failed to copy widget token. Clipboard APIs unavailable or blocked.")},[H,$]),e=f(async()=>{if(x)return;if(!confirm("Regenerate the widget token? Existing macOS widgets using the old token will stop updating."))return;I(!0);try{let Y0=await fetch("/agent/settings/widget-token/regenerate",{method:"POST"}),j0=await Y0.json().catch(()=>({}));if(!Y0.ok||!j0?.ok||!j0?.settings)throw Error(j0?.error||"Failed to regenerate widget token.");D(j0.settings.widgetToken||""),j?.(j0.settings),T(!0),setTimeout(()=>{if(P.current)T(!1)},4000)}catch(Y0){console.warn("[settings/general] Failed to regenerate widget token.",Y0)}finally{if(P.current)I(!1)}},[x,j]),m=typeof window<"u"&&window.isSecureContext,_0=H?"•".repeat(Math.min(Math.max(H.length,16),48)):"—",H0=E?H||"—":_0;return N`
        <div class="settings-section">
            ${W&&N`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Identity</h3>
            <div class="settings-row">
                <label>User</label>
                <${sZ} value=${X} onChange=${Z} />
                <input type="text" value=${G} onInput=${(Y0)=>Y(Y0.target.value)} placeholder="Your name" />
            </div>
            <div class="settings-row">
                <label>Agent</label>
                <${sZ} value=${q} onChange=${K} />
                <input type="text" value=${L} onInput=${(Y0)=>V(Y0.target.value)} placeholder="Agent name" />
            </div>

            <h3 style="margin-top:20px">Notifications</h3>
            ${m?N`
                <div class="settings-row">
                    <label>Browser notifications</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span class="settings-hint" style="margin:0">
                            Use the 🔔 bell button in the compose bar to enable/disable notifications.
                            Web Push requires HTTPS or localhost.
                        </span>
                    </div>
                </div>
            `:N`
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
                    <input type="checkbox" checked=${A}
                        onChange=${()=>{let Y0=l2(!A);k(Y0)}} />
                    <span class="settings-hint" style="margin:0">CPU/memory/network meters in the status bar. This browser only.</span>
                </div>
            </div>

            <h3 style="margin-top:20px">Instance Configuration</h3>
            <div class="settings-row">
                <label>Compose upload (MB)</label>
                <${m_}
                    label="compose upload limit"
                    value=${Q}
                    min=${1}
                    max=${512}
                    fallback=${32}
                    width="80px"
                    onChange=${F}
                />
                <span class="settings-hint" style="margin:0">chat/media attachments</span>
            </div>
            <div class="settings-row">
                <label>Workspace upload (MB)</label>
                <${m_}
                    label="workspace upload limit"
                    value=${B}
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
                        <code class="settings-keychain-reveal-value settings-widget-token-value">${H0}</code>
                        <button class=${`settings-keychain-reveal-btn${E?" active":""}`}
                            type="button"
                            onClick=${()=>M((Y0)=>!Y0)}
                            disabled=${!H}
                            title=${E?"Hide token":"Reveal token"}>
                            ${E?N`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:N`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                        </button>
                        <button class="settings-keychain-copy-btn" type="button" onClick=${r} disabled=${!H} title="Copy token">
                            ${z?N`<span class="settings-widget-token-copied">Copied</span>`:N`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`}
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
                ${c.configured?N`
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
    `}var tZ=z_(()=>{k0();r2();f4()});var _L={};$1(_L,{SessionsSection:()=>Xz});function eZ(_={}){return{sessionAutoRotate:_.sessionAutoRotate!==!1,sessionMaxSizeMb:_.sessionMaxSizeMb??16,sessionMaxLines:_.sessionMaxLines??4000,sessionMaxCompactions:_.sessionMaxCompactions??3,sessionIsolation:_.sessionIsolation||"none",toolUseBudget:_.toolUseBudget??64}}function Xz({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Y]=C(!0),[X,Z]=C(16),[L,V]=C(4000),[q,K]=C(3),[Q,F]=C(64),[B,U]=C("none"),[H,D]=C(!1),E=u(""),M=u(null),z=u(!0);g(()=>{return z.current=!0,()=>{z.current=!1}},[]);let O=f((I)=>{let A=eZ(I);Y(A.sessionAutoRotate),Z(A.sessionMaxSizeMb),V(A.sessionMaxLines),K(A.sessionMaxCompactions),F(A.toolUseBudget),U(A.sessionIsolation),E.current=JSON.stringify(A)},[]);g(()=>{O(_||{})},[_,O]);let x=Z0(()=>JSON.stringify(eZ({sessionAutoRotate:G,sessionMaxSizeMb:X,sessionMaxLines:L,sessionMaxCompactions:q,toolUseBudget:Q,sessionIsolation:B})),[G,X,L,q,Q,B]);return g(()=>{if(x===E.current)return;if(M.current)clearTimeout(M.current);return M.current=setTimeout(async()=>{if(!z.current)return;let I=document.activeElement;if(I&&I.closest?.(".settings-number-stepper"))return;try{let A=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:x}),k=await A.json().catch(()=>({}));if(!z.current)return;if(!A.ok||!k?.ok||!k?.settings)return;E.current=x,j?.(k.settings),D(!0),setTimeout(()=>{if(z.current)D(!1)},4000)}catch(A){console.warn("[settings/sessions] Failed to persist session settings.",A)}},800),()=>{if(M.current)clearTimeout(M.current)}},[x,j]),N`
        <div class="settings-section">
            ${H&&N`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Session Lifecycle</h3>
            <div class="settings-row">
                <label>Auto-rotate sessions</label>
                <input type="checkbox" checked=${G} onChange=${(I)=>Y(I.target.checked)} />
            </div>
            <div class="settings-row">
                <label>Max session size (MB)</label>
                <${m_}
                    label="max session size"
                    value=${X}
                    min=${1}
                    max=${256}
                    fallback=${32}
                    width="80px"
                    onChange=${Z}
                />
            </div>

            <h3 style="margin-top:20px">Agent Behaviour</h3>
            <div class="settings-row">
                <label>Tool use budget</label>
                <${m_}
                    label="tool use budget"
                    value=${Q}
                    min=${8}
                    max=${512}
                    fallback=${64}
                    width="80px"
                    onChange=${F}
                />
                <span class="settings-hint" style="margin:0">max tool-call messages per turn</span>
            </div>
            <div class="settings-row">
                <label>Session isolation</label>
                <select value=${B} onChange=${(I)=>U(I.target.value)}>
                    <option value="none">None — full cross-session visibility</option>
                    <option value="summary">Summary — tools visible, no arguments</option>
                    <option value="full">Full — sessions cannot see each other</option>
                </select>
            </div>
        </div>
    `}var $L=z_(()=>{k0();f4()});var jL={};$1(jL,{__recordingsSettingsTest:()=>Vz,RecordingsSection:()=>qz});function d2(_){if(!_)return"—";let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function N9(_){if(_==="full")return"full / trusted";if(_==="metadata")return"metadata only";return"redacted"}function n2({children:_,type:$="neutral"}){return N`<span class=${`settings-task-pill settings-task-pill-${$}`}>${_}</span>`}function Zz(){if(typeof window>"u")return"web:default";return String(window.__piclawCurrentChatJid||"web:default")}function k6(_){return String(_||"").split(`
`).map(($)=>$.trim()).filter(Boolean)}function Lz({recording:_,details:$,onDelete:j,onRefresh:G}){if(!_)return N`<div class="settings-task-detail-empty">Select a recording to inspect, replay, export, or delete it.</div>`;let Y=$?.meta||_,X=Array.isArray($?.events)?$.events:[],Z=X.reduce((V,q)=>V+(Array.isArray(q.redactions)?q.redactions.length:0),0),L=X.reduce((V,q)=>{let K=q.kind||"event";return V[K]=(V[K]||0)+1,V},{});return N`
        <div class="settings-task-detail settings-recording-detail">
            <div class="settings-task-detail-header">
                <div>
                    <h4>${Y.title||Y.id}</h4>
                    <code>${Y.id}</code>
                </div>
                <div class="settings-task-detail-actions">
                    <button onClick=${()=>window.open(I7(Y.id),"_blank","noopener,noreferrer")}>Playback</button>
                    <button onClick=${G}>Refresh</button>
                    <button class="danger" onClick=${()=>j(Y)}>Delete</button>
                </div>
            </div>
            <div class="settings-task-detail-grid">
                <span>Status</span><strong>${Y.status||"—"}</strong>
                <span>Mode</span><strong>${N9(Y.mode)}</strong>
                <span>Chat</span><code>${Y.chatJid||"—"}</code>
                <span>Started</span><strong>${d2(Y.startedAt)}</strong>
                <span>Ended</span><strong>${d2(Y.endedAt)}</strong>
                <span>Events</span><strong>${Y.eventCount??X.length}</strong>
                <span>Redactions</span><strong>${Z}</strong>
            </div>
            <div class="settings-recording-export-row">
                <a href=${Q6(Y.id,"json")}>Export JSON</a>
                <a href=${Q6(Y.id,"jsonl")}>Export JSONL</a>
                <a href=${Q6(Y.id,"html")}>Export standalone HTML</a>
            </div>
            <h4>Event summary</h4>
            ${X.length===0&&N`<p class="settings-hint">Open or refresh details to inspect trace events.</p>`}
            ${X.length>0&&N`
                <div class="settings-recording-event-summary">
                    ${Object.entries(L).map(([V,q])=>N`<${n2}>${V}: ${q}<//>`)}
                </div>
                <div class="settings-task-command-block">
                    <strong>First events</strong>
                    <pre>${JSON.stringify(X.slice(0,5),null,2)}</pre>
                </div>
            `}
        </div>
    `}function qz({filter:_="",setStatus:$}){let[j,G]=C([]),[Y,X]=C([]),[Z,L]=C(!0),[V,q]=C(null),[K,Q]=C(null),[F,B]=C(null),[U,H]=C(!1),[D,E]=C(Zz),[M,z]=C(""),[O,x]=C("redacted"),[I,A]=C(!0),[k,W]=C(""),[T,y]=C(""),[J,P]=C('{"Authorization":"Bearer abc1234567890","content":"hello"}'),[R,b]=C(null);g(()=>{let h=($0)=>{let V0=String($0?.detail?.chatJid||"").trim();if(V0)E(V0)};return window.addEventListener("piclaw:current-chat-changed",h),()=>window.removeEventListener("piclaw:current-chat-changed",h)},[]);let c=f(async(h=K)=>{L(!0),q(null);try{let $0=await M7(),V0=$0.recordings||[];G(V0),X($0.active||[]);let O0=V0.find((a)=>a.id===h)||V0[0]||null;if(Q(O0?.id||null),O0?.id)B(await C2(O0.id));else B(null)}catch($0){q($0?.message||"Failed to load recordings.")}finally{L(!1)}},[K]);g(()=>{c()},[c]);let r=Z0(()=>j.find((h)=>h.id===K)||null,[j,K]),e=Z0(()=>Y.find((h)=>h.chatJid===D)||null,[Y,D]),m=String(_||"").trim().toLowerCase(),_0=Z0(()=>{if(!m)return j;return j.filter((h)=>[h.id,h.title,h.chatJid,h.status,h.mode].some(($0)=>String($0||"").toLowerCase().includes(m)))},[j,m]),H0=f(async(h)=>{if(Q(h?.id||null),B(null),!h?.id)return;try{B(await C2(h.id))}catch($0){$?.($0?.message||"Failed to load recording.","error")}},[$]),Y0=f(async()=>{if(U)return;H(!0);try{let h={keys:k6(k),patterns:k6(T)},$0=await T7({chat_jid:D,title:M||void 0,mode:O,include_timeline_snapshot:I,timeline_snapshot_limit:80,redaction:h});$?.(`Recording started for ${D}.`,"success"),await c($0?.recording?.id)}catch(h){$?.(h?.message||"Failed to start recording.","error")}finally{H(!1)}},[U,D,k,T,I,c,O,$,M]),j0=f(async(h=e)=>{if(!h||U)return;H(!0);try{let $0=await y7({id:h.id});$?.(`Recording stopped for ${h.chatJid}.`,"success"),await c($0?.recording?.id)}catch($0){$?.($0?.message||"Failed to stop recording.","error")}finally{H(!1)}},[U,e,c,$]),L0=f(async(h)=>{if(!h||U)return;if(!window.confirm(`Delete recording ${h.id}?

${h.title||""}`))return;H(!0);try{await w7(h.id),$?.("Recording deleted.","success"),await c(null)}catch($0){$?.($0?.message||"Failed to delete recording.","error")}finally{H(!1)}},[U,c,$]),F0=f(async()=>{try{let h=JSON.parse(J||"null"),$0=await x7(h,{mode:O,redaction:{keys:k6(k),patterns:k6(T)}});b($0.preview)}catch(h){b({error:h?.message||"Preview failed."})}},[k,T,O,J]);return N`
        <div class="settings-section settings-recordings-section">
            <div class="settings-recording-start-card">
                <h3>Session Recording</h3>
                <p class="settings-hint">Opt-in trace capture for deterministic playback and screen-recording exports. Playback never calls live agent or tool endpoints.</p>
                <div class="settings-recording-form-grid">
                    <label>Chat JID<input value=${D} onInput=${(h)=>E(h.target.value)} /></label>
                    <label>Title<input placeholder="Demo recording" value=${M} onInput=${(h)=>z(h.target.value)} /></label>
                    <label>Mode<select value=${O} onChange=${(h)=>x(h.target.value)}><option value="redacted">Redacted</option><option value="metadata">Metadata only</option><option value="full">Full / trusted local</option></select></label>
                    <label class="settings-recording-checkbox"><input type="checkbox" checked=${I} onChange=${(h)=>A(h.target.checked)} /> Include timeline snapshot</label>
                </div>
                <div class="settings-recording-form-grid settings-recording-redaction-grid">
                    <label>Extra redacted keys<textarea rows="2" placeholder="customer_id\ninternal_code" value=${k} onInput=${(h)=>W(h.target.value)} /></label>
                    <label>Extra regex patterns<textarea rows="2" placeholder="ACME-[0-9]+" value=${T} onInput=${(h)=>y(h.target.value)} /></label>
                </div>
                <div class="settings-task-detail-actions">
                    ${e?N`<button onClick=${()=>j0(e)} disabled=${U}>Stop current chat recording</button>`:N`<button onClick=${Y0} disabled=${U}>Start recording</button>`}
                    <button onClick=${()=>c()} disabled=${Z}>Refresh</button>
                </div>
                ${Y.length>0&&N`<div class="settings-recording-active-row">${Y.map((h)=>N`<${n2} type="active">REC ${h.chatJid}<//>`)}</div>`}
            </div>

            <details class="settings-recording-preview">
                <summary>Redaction preview</summary>
                <textarea rows="4" value=${J} onInput=${(h)=>P(h.target.value)} />
                <div class="settings-task-detail-actions"><button onClick=${F0}>Preview redaction</button></div>
                ${R&&N`<pre>${JSON.stringify(R,null,2)}</pre>`}
            </details>

            ${Z&&N`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>Loading recordings…</span></div>`}
            ${V&&N`<div class="settings-error-state">${V}</div>`}
            ${!Z&&!V&&j.length===0&&N`<div class="settings-empty-state"><strong>No recordings yet.</strong><p>Start a recording above, then use playback/export for deterministic screen capture.</p></div>`}
            ${!Z&&!V&&j.length>0&&N`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label="Session recordings">
                        ${_0.map((h)=>N`
                            <button class=${`settings-task-row ${h.id===K?"active":""}`} onClick=${()=>H0(h)}>
                                <span class="settings-task-row-main"><strong>${h.title||h.id}</strong><span>${h.chatJid} · ${d2(h.startedAt)}</span></span>
                                <span class="settings-task-row-meta"><${n2} type=${h.status==="recording"?"active":"completed"}>${h.status}<//><${n2}>${N9(h.mode)}<//></span>
                                <span class="settings-task-row-times">${h.eventCount||0} events</span>
                            </button>
                        `)}
                        ${_0.length===0&&N`<p class="settings-hint">No recordings match “${_}”.</p>`}
                    </div>
                    <${Lz} recording=${r} details=${F} onDelete=${L0} onRefresh=${()=>r&&H0(r)} />
                </div>
            `}
        </div>
    `}var Vz;var GL=z_(()=>{k0();T_();Vz={formatDateTime:d2,modeLabel:N9,parseList:k6}});var YL={};$1(YL,{CompactionSection:()=>Kz});function Qz(_={}){return{compactionTimeoutSec:_.compactionTimeoutSec??180,compactionBackoffBaseMin:_.compactionBackoffBaseMin??15,compactionBackoffMaxMin:_.compactionBackoffMaxMin??360,compactionThresholdPercent:_.compactionThresholdPercent??75,compactionBackoffDecayFactor:_.compactionBackoffDecayFactor??0.5,progressWatchdogEnabled:Boolean(_.progressWatchdogEnabled??!1),progressWatchdogTimeoutSec:_.progressWatchdogTimeoutSec??120,compactionBackoffs:Array.isArray(_.compactionBackoffs)?_.compactionBackoffs:[],progressWatchdogPhases:Array.isArray(_.progressWatchdogPhases)?_.progressWatchdogPhases:[]}}function U9(_){let $=String(_||"").trim();if(!$)return"—";let j=new Date($);if(Number.isNaN(j.getTime()))return $;return j.toLocaleString()}function Kz({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Y]=C(180),[X,Z]=C(15),[L,V]=C(360),[q,K]=C(75),[Q,F]=C(0.5),[B,U]=C(!1),[H,D]=C(120),[E,M]=C([]),[z,O]=C([]),[x,I]=C(!1),A=u(""),k=u(null),W=u(!0);g(()=>{return W.current=!0,()=>{W.current=!1}},[]);let T=f((P)=>{let R=Qz(P);Y(R.compactionTimeoutSec),Z(R.compactionBackoffBaseMin),V(R.compactionBackoffMaxMin),K(R.compactionThresholdPercent),F(R.compactionBackoffDecayFactor),U(R.progressWatchdogEnabled),D(R.progressWatchdogTimeoutSec),M(R.compactionBackoffs),O(R.progressWatchdogPhases),A.current=JSON.stringify({compactionTimeoutSec:R.compactionTimeoutSec,compactionBackoffBaseMin:R.compactionBackoffBaseMin,compactionBackoffMaxMin:R.compactionBackoffMaxMin,compactionThresholdPercent:R.compactionThresholdPercent,compactionBackoffDecayFactor:R.compactionBackoffDecayFactor,progressWatchdogEnabled:R.progressWatchdogEnabled,progressWatchdogTimeoutSec:R.progressWatchdogTimeoutSec})},[]);g(()=>{T(_||{})},[_,T]);let y=Z0(()=>JSON.stringify({compactionTimeoutSec:G,compactionBackoffBaseMin:X,compactionBackoffMaxMin:L,compactionThresholdPercent:q,compactionBackoffDecayFactor:Q,progressWatchdogEnabled:B,progressWatchdogTimeoutSec:H}),[G,X,L,q,Q,B,H]);g(()=>{if(y===A.current)return;if(k.current)clearTimeout(k.current);return k.current=setTimeout(async()=>{if(!W.current)return;let P=document.activeElement;if(P&&P.closest?.(".settings-number-stepper"))return;try{$?.("Saving compaction settings…","info");let R=await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:y}),b=await R.json().catch(()=>({}));if(!W.current)return;if(!R.ok||!b?.ok||!b?.settings){$?.(b?.error||"Failed to save compaction settings.","error");return}A.current=y,j?.(b.settings),T({..._||{},...b.settings||{}}),$?.("Compaction settings saved.","success"),I(!0),setTimeout(()=>{if(W.current)I(!1),$?.(null)},4000)}catch(R){if(console.warn("[settings/compaction] Failed to persist compaction settings.",R),W.current)$?.("Failed to save compaction settings.","error")}},800),()=>{if(k.current)clearTimeout(k.current)}},[y,j,$,T,_]);let J=f(async(P)=>{try{$?.(`Clearing compaction suppression for ${P}…`,"info");let R=await fetch("/agent/settings/compaction/reset-backoff",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chatJid:P})}),b=await R.json().catch(()=>({}));if(!R.ok||!b?.ok||!b?.settings){$?.(b?.error||"Failed to clear compaction suppression.","error");return}j?.(b.settings),T({..._||{},...b.settings||{}}),$?.(`Cleared compaction suppression for ${P}.`,"success")}catch(R){console.warn("[settings/compaction] Failed to clear compaction suppression.",R),$?.("Failed to clear compaction suppression.","error")}},[T,j,$,_]);return N`
        <div class="settings-section">
            ${x&&N`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Compaction settings applied. Existing turns keep their current timers; new turns use the updated values.
                </div>
            `}

            <h3>Automatic compaction</h3>
            <div class="settings-row">
                <label>Compaction threshold (%)</label>
                <${m_}
                    label="compaction threshold"
                    value=${q}
                    min=${10}
                    max=${95}
                    fallback=${75}
                    width="80px"
                    onChange=${K}
                />
                <span class="settings-hint" style="margin:0">auto-compact when context exceeds this % of window</span>
            </div>
            <div class="settings-row">
                <label>Compaction timeout (sec)</label>
                <${m_}
                    label="compaction timeout"
                    value=${G}
                    min=${1}
                    max=${3600}
                    fallback=${180}
                    width="90px"
                    onChange=${Y}
                />
                <span class="settings-hint" style="margin:0">Abort a stuck pre-prompt/manual compaction instead of hanging forever.</span>
            </div>
            <div class="settings-row">
                <label>Failure backoff base (min)</label>
                <${m_}
                    label="compaction backoff base"
                    value=${X}
                    min=${1}
                    max=${1440}
                    fallback=${15}
                    width="90px"
                    onChange=${Z}
                />
                <span class="settings-hint" style="margin:0">First suppression window after a compaction failure.</span>
            </div>
            <div class="settings-row">
                <label>Failure backoff max (min)</label>
                <${m_}
                    label="compaction backoff max"
                    value=${L}
                    min=${1}
                    max=${10080}
                    fallback=${360}
                    width="90px"
                    onChange=${V}
                />
                <span class="settings-hint" style="margin:0">Upper bound for exponential suppression after repeated failures.</span>
            </div>

            <div class="settings-row">
                <label>Backoff decay factor</label>
                <${m_}
                    label="backoff decay factor"
                    value=${Math.round(Q*100)}
                    min=${10}
                    max=${100}
                    fallback=${50}
                    width="80px"
                    onChange=${(P)=>F(P/100)}
                />
                <span class="settings-hint" style="margin:0">% — halves backoff after each successful compaction</span>
            </div>

            <h3 style="margin-top:20px">Stall watchdog</h3>
            <div class="settings-row">
                <label>Enable watchdog</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${B} onChange=${(P)=>U(Boolean(P.target.checked))} />
                    <span class="settings-hint" style="margin:0">Disabled by default. When enabled, a helper process terminates the runtime if an active phase stops heartbeating.</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Watchdog timeout (sec)</label>
                <${m_}
                    label="watchdog timeout"
                    value=${H}
                    min=${0}
                    max=${3600}
                    fallback=${120}
                    width="90px"
                    disabled=${!B}
                    onChange=${D}
                />
                <span class="settings-hint" style="margin:0">How long an active phase can go without a heartbeat before the watchdog kills the runtime.</span>
            </div>

            <h3 style="margin-top:20px">Active compaction suppressions</h3>
            ${E.length===0?N`
                <p class="settings-hint">No chats are currently under compaction backoff.</p>
            `:N`
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
                            ${E.map((P)=>N`
                                <tr>
                                    <td><code>${P.chatJid}</code></td>
                                    <td>${P.failureCount}</td>
                                    <td>${U9(P.backoffUntil)}</td>
                                    <td title=${P.lastErrorMessage||""}>${P.lastErrorMessage||"—"}</td>
                                    <td>
                                        <button class="settings-secondary-btn" onClick=${()=>J(P.chatJid)}>
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
            ${z.length===0?N`
                <p class="settings-hint">No active tracked phases right now.</p>
            `:N`
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
                            ${z.map((P)=>N`
                                <tr>
                                    <td><code>${P.chatJid}</code></td>
                                    <td>${P.phase}</td>
                                    <td>${U9(P.startedAt)}</td>
                                    <td>${U9(P.lastProgressAt)}</td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </div>
            `}
        </div>
    `}var XL=z_(()=>{k0();f4()});function LL(_){let $=String(_||"").trim().toLowerCase();if(!$)return null;let j=Nz[$]||$;if(/^f(?:[1-9]|1[0-2])$/.test(j))return j;if(Uz.has(j))return j;if(j.length===1)return j;if(/^[a-z0-9]+$/.test(j))return j;return null}function J5(_){let $=String(_||"").trim();if(!$)return null;let j=$.split("+").map((X)=>X.trim()).filter(Boolean);if(!j.length)return null;let G={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let X of j){let Z=X.toLowerCase(),L=Fz[Z];if(L){G[L]=!0;continue}if(G.key)return null;let V=LL(X);if(!V||V==="escape")return null;G.key=V}if(!G.key)return null;let Y=[];if(G.ctrl)Y.push("ctrl");if(G.meta)Y.push("meta");if(G.alt)Y.push("alt");if(G.shift)Y.push("shift");return Y.push(G.key),Y.join("+")}function qL(_){return String(_||"").split(/[\n,]/).map(($)=>J5($)).filter(($)=>Boolean($))}function a$(_){return _.join(", ")}function D9(){let _=z2(ZL);if(!_||typeof _!=="object")return{};let $={};for(let j of s$){let G=_[j.id];if(!Array.isArray(G))continue;let Y=G.map((X)=>J5(String(X||""))).filter((X)=>Boolean(X));$[j.id]=[...new Set(Y)]}return $}function E9(_){if(V_(ZL,JSON.stringify(_)),typeof window<"u")window.dispatchEvent(new CustomEvent("piclaw:keyboard-shortcuts-changed",{detail:{config:_}}))}function VL(_){return Bz.get(_)}function M6(_){let $=D9()[_];if(Array.isArray($))return $;return[...VL(_).defaultBindings]}function QL(_,$){let j=D9(),G=VL(_).defaultBindings,Y=[...new Set($.map((X)=>J5(X)).filter((X)=>Boolean(X)))];if(Y.length===G.length&&Y.every((X,Z)=>X===G[Z]))delete j[_];else j[_]=Y;E9(j)}function H9(_){if(!_){E9({});return}let $=D9();delete $[_],E9($)}function o2(){let _={};for(let $ of s$)_[$.id]=M6($.id);return _}function Ez(_){let $=typeof _==="string"?_:"";if(!$)return"";if($.length===1)return $.toLowerCase();return LL($)||$.toLowerCase()}function Dz(_){let $=J5(_);if(!$)return null;let j={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let G of $.split("+")){if(G==="ctrl"||G==="meta"||G==="alt"||G==="shift"){j[G]=!0;continue}j.key=G}return j.key?j:null}function Hz(_,$){let j=Dz($);if(!j)return!1;if(Ez(_?.key)!==j.key)return!1;let Y=!j.shift&&j.key.length===1&&/[^a-z0-9]/i.test(j.key);return Boolean(_?.ctrlKey)===j.ctrl&&Boolean(_?.metaKey)===j.meta&&Boolean(_?.altKey)===j.alt&&(Y||Boolean(_?.shiftKey)===j.shift)}function J$(_,$){return M6($).some((j)=>Hz(_,j))}var ZL="piclaw_keyboard_shortcuts_v1",s$,Bz,Fz,Nz,Uz;var i2=z_(()=>{s$=[{id:"openHelp",label:"Open keyboard help",description:"Open Settings → Keyboard. Default: question mark and quote when focus is outside compose and other editable fields.",defaultBindings:["?",'"']},{id:"openSettings",label:"Open settings",description:"Open the settings dialog.",defaultBindings:["ctrl+,","meta+,","alt+,"]},{id:"previousChat",label:"Previous session",description:"Switch to the previous visible chat/session.",defaultBindings:["["]},{id:"nextChat",label:"Next session",description:"Switch to the next visible chat/session.",defaultBindings:["]"]},{id:"toggleDock",label:"Toggle dock",description:"Show or hide the bottom dock panes.",defaultBindings:["ctrl+`"]},{id:"toggleZenMode",label:"Toggle zen mode",description:"Collapse surrounding chrome for a focused chat view.",defaultBindings:["ctrl+shift+z","meta+shift+z"]}],Bz=new Map(s$.map((_)=>[_.id,_])),Fz={cmd:"meta",command:"meta",meta:"meta",super:"meta",ctrl:"ctrl",control:"ctrl",alt:"alt",option:"alt",shift:"shift"},Nz={esc:"escape",return:"enter",spacebar:"space"},Uz=new Set(["tab","enter","space","backspace","delete","insert","clear","home","end","pageup","pagedown","up","down","left","right"])});var KL={};$1(KL,{KeyboardSection:()=>Oz});function Wz(_,$,j){let G=String(_||"").trim().toLowerCase();if(!G)return!0;return[$.label,$.description,j,...$.defaultBindings||[]].some((Y)=>String(Y||"").toLowerCase().includes(G))}function Oz({filter:_="",setStatus:$}){let[j,G]=C(()=>{let V=o2();return Object.fromEntries(Object.entries(V).map(([q,K])=>[q,a$(K)]))});g(()=>{let V=()=>{let q=o2();G(Object.fromEntries(Object.entries(q).map(([K,Q])=>[K,a$(Q)])))};return window.addEventListener("piclaw:keyboard-shortcuts-changed",V),()=>window.removeEventListener("piclaw:keyboard-shortcuts-changed",V)},[]);let Y=Z0(()=>s$.filter((V)=>{let q=String(j[V.id]||"");return Wz(_,V,q)}),[j,_]),X=(V)=>{let q=String(j[V]||"").trim(),Q=(q?q.split(/[\n,]/).map((B)=>B.trim()).filter(Boolean):[]).filter((B)=>!J5(B));if(Q.length>0){$?.(`Invalid shortcut: ${Q[0]}. Escape is reserved and cannot be rebound.`,"error");return}let F=qL(q);QL(V,F),G((B)=>({...B,[V]:a$(M6(V))})),$?.("Keyboard shortcuts saved.","success")},Z=(V)=>{H9(V),G((q)=>({...q,[V]:a$(M6(V))})),$?.("Keyboard shortcut reset to default.","success")};return N`
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
                <button class="settings-addon-btn" style="min-width:180px; height:40px; font-size:14px;" onClick=${()=>{H9();let V=o2();G(Object.fromEntries(Object.entries(V).map(([q,K])=>[q,a$(K)]))),$?.("Keyboard shortcuts reset to defaults.","success")}}>Reset all to defaults</button>
            </div>

            <div class="settings-shortcut-list" style="display:grid; gap:16px;">
                ${Y.map((V)=>N`
                    <div class="settings-shortcut-card" key=${V.id} style="display:grid; grid-template-columns:minmax(240px, 1.25fr) minmax(320px, 1fr); gap:18px; align-items:start; padding:18px 20px; border:1px solid var(--border-color, rgba(120,120,120,.22)); border-radius:16px; background:var(--panel-bg, rgba(255,255,255,.04));">
                        <div class="settings-shortcut-copy" style="min-width:0;">
                            <div class="settings-shortcut-title" style="font-size:17px; font-weight:700; line-height:1.3;">${V.label}</div>
                            <div class="settings-hint" style="margin:6px 0 0 0; font-size:14px; line-height:1.5;">${V.description}</div>
                            <div class="settings-shortcut-default" style="margin-top:10px; font-size:13px; color:var(--text-secondary);">Default: <code style="font-size:13px;">${a$(V.defaultBindings)}</code></div>
                        </div>
                        <div class="settings-shortcut-controls" style="display:grid; gap:10px; min-width:0;">
                            <input
                                type="text"
                                value=${j[V.id]||""}
                                placeholder=${a$(V.defaultBindings)}
                                onInput=${(q)=>G((K)=>({...K,[V.id]:q.target.value}))}
                                style="width:100%; min-height:46px; padding:10px 14px; font-size:16px; line-height:1.35; font-family:var(--font-mono, ui-monospace, monospace); border-radius:12px;"
                            />
                            <div class="settings-shortcut-actions" style="display:flex; justify-content:flex-end; align-items:center; gap:10px; flex-wrap:wrap;">
                                <button class="settings-addon-btn settings-addon-btn-install" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>X(V.id)}>Save</button>
                                <button class="settings-addon-btn" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>Z(V.id)}>Default</button>
                            </div>
                        </div>
                    </div>
                `)}
                ${Y.length===0&&N`<div class="settings-hint">No shortcuts match this filter.</div>`}
            </div>
        </div>
    `}var BL=z_(()=>{k0();i2()});function FL(_,$=W9){let j=Number(_);if(!Number.isFinite(j))return $;return Math.min(300,Math.max(15,Math.round(j)))}function NL(_,$=O9){let j=Number(_);if(!Number.isFinite(j))return $;return Math.min(8,Math.max(0,Math.round(j)))}function k5(){return{refreshIntervalSec:FL(z4(a2,W9),W9),folderPreviewDepth:NL(z4(t2,O9),O9)}}function UL(_={}){let $=k5(),j={refreshIntervalSec:FL(Object.prototype.hasOwnProperty.call(_,"refreshIntervalSec")?_.refreshIntervalSec:$.refreshIntervalSec,$.refreshIntervalSec),folderPreviewDepth:NL(Object.prototype.hasOwnProperty.call(_,"folderPreviewDepth")?_.folderPreviewDepth:$.folderPreviewDepth,$.folderPreviewDepth)};if(V_(a2,String(j.refreshIntervalSec)),V_(t2,String(j.folderPreviewDepth)),typeof window<"u")window.dispatchEvent(new CustomEvent(s2,{detail:{settings:j}}));return j}var s2="piclaw:workspace-client-settings-updated",a2="workspaceRefreshIntervalSec",t2="workspaceFolderPreviewDepth",W9=60,O9=3;var z9=()=>{};var DL={};$1(DL,{WorkspaceSection:()=>zz});function EL(_={}){let $=_.workspaceSettings||{};return{webTerminalEnabled:$.webTerminalEnabled!==!1,vncAllowDirect:$.vncAllowDirect!==!1,treeMaxDepth:$.treeMaxDepth??4,treeMaxEntries:$.treeMaxEntries??5000}}function zz({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Y]=C(!0),[X,Z]=C(!0),[L,V]=C(4),[q,K]=C(5000),[Q,F]=C(60),[B,U]=C(3),[H,D]=C(!1),[E,M]=C(!1),z=u(""),O=u(null),x=u(null),I=u(null),A=u(!0);g(()=>{return A.current=!0,()=>{if(A.current=!1,O.current)clearTimeout(O.current);if(x.current)clearTimeout(x.current);if(I.current)clearTimeout(I.current)}},[]);let k=f((y)=>{let J=EL(y),P=k5();Y(J.webTerminalEnabled),Z(J.vncAllowDirect),V(J.treeMaxDepth),K(J.treeMaxEntries),F(P.refreshIntervalSec),U(P.folderPreviewDepth),z.current=JSON.stringify(J)},[]);g(()=>{k(_||{})},[_,k]);let W=Z0(()=>JSON.stringify(EL({workspaceSettings:{webTerminalEnabled:G,vncAllowDirect:X,treeMaxDepth:L,treeMaxEntries:q}})),[G,X,L,q]);g(()=>{if(W===z.current)return;if(O.current)clearTimeout(O.current);return O.current=setTimeout(async()=>{if(!A.current)return;let y=document.activeElement;if(y&&y.closest?.(".settings-number-stepper"))return;try{let J=await R7(JSON.parse(W));if(!A.current||!J?.ok||!J?.settings)return;if(z.current=W,j?.({workspaceSettings:J.settings}),$?.(null),D(!0),x.current)clearTimeout(x.current);x.current=setTimeout(()=>{if(A.current)D(!1)},4000)}catch(J){$?.(String(J?.message||J),"error")}},800),()=>{if(O.current)clearTimeout(O.current)}},[W,j,$]);let T=f((y)=>{let J=UL(y);if(F(J.refreshIntervalSec),U(J.folderPreviewDepth),M(!0),I.current)clearTimeout(I.current);I.current=setTimeout(()=>{if(A.current)M(!1)},3000)},[]);return N`
        <div class="settings-section">
            ${H&&N`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Workspace settings applied. Server-side limits affect new workspace requests immediately.
                </div>
            `}
            ${E&&N`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Browser workspace settings applied immediately in this tab.
                </div>
            `}

            <h3>Access</h3>
            <div class="settings-row">
                <label>Enable web terminal</label>
                <input type="checkbox" checked=${G} onChange=${(y)=>Y(y.target.checked)} />
            </div>
            <div class="settings-row">
                <label>Allow direct VNC targets</label>
                <input type="checkbox" checked=${X} onChange=${(y)=>Z(y.target.checked)} />
            </div>
            <p class="settings-hint">Terminal access updates immediately. Direct VNC target policy applies to new VNC requests.</p>

            <h3 style="margin-top:20px">Server scan guardrails</h3>
            <div class="settings-row">
                <label>Max tree depth</label>
                <${m_}
                    label="workspace tree max depth"
                    value=${L}
                    min=${1}
                    max=${8}
                    fallback=${4}
                    width="80px"
                    onChange=${V}
                />
                <span class="settings-hint" style="margin:0">caps all <code>/workspace/tree</code> requests</span>
            </div>
            <div class="settings-row">
                <label>Max entries per scan</label>
                <${m_}
                    label="workspace tree max entries"
                    value=${q}
                    min=${250}
                    max=${5000}
                    step=${250}
                    fallback=${5000}
                    width="92px"
                    onChange=${K}
                />
                <span class="settings-hint" style="margin:0">truncate oversized tree walks earlier</span>
            </div>

            <h3 style="margin-top:20px">This browser</h3>
            <div class="settings-row">
                <label>Refresh interval (seconds)</label>
                <${m_}
                    label="workspace refresh interval"
                    value=${Q}
                    min=${15}
                    max=${300}
                    step=${15}
                    fallback=${60}
                    width="92px"
                    onChange=${(y)=>T({refreshIntervalSec:y})}
                />
            </div>
            <div class="settings-row">
                <label>Folder preview scan depth</label>
                <${m_}
                    label="folder preview scan depth"
                    value=${B}
                    min=${0}
                    max=${8}
                    fallback=${3}
                    width="80px"
                    onChange=${(y)=>T({folderPreviewDepth:y})}
                />
                <span class="settings-hint" style="margin:0">set to <code>0</code> to disable folder size preview scans</span>
            </div>
            <p class="settings-hint">Root and folder-expansion tree loads remain shallow; the folder size preview is the deepest workspace scan in the UI.</p>
        </div>
    `}var HL=z_(()=>{k0();T_();z9();f4()});var WL={};$1(WL,{EnvironmentSection:()=>Az});function A9(_={}){let $=_.environmentSettings||_.settings||_.environment||{};return{variables:Array.isArray($.variables)?$.variables:[],overrides:$.overrides&&typeof $.overrides==="object"?$.overrides:{},count:Number($.count||0),overrideCount:Number($.overrideCount||0),keychainEnvNames:Array.isArray($.keychainEnvNames)?$.keychainEnvNames:[]}}function Az({settingsData:_,filter:$="",setStatus:j,mergeSettingsData:G}){let[Y,X]=C(()=>A9(_||{})),[Z,L]=C({}),[V,q]=C(""),[K,Q]=C(""),[F,B]=C(null);g(()=>{X(A9(_||{})),L({})},[_]);let U=f((O)=>{let x=A9({environmentSettings:O?.settings||O});return X(x),G?.({environmentSettings:x}),L({}),x},[G]),H=f(async()=>{try{let O=await f7();if(O?.ok)U(O.settings);j?.("Environment refreshed.","info")}catch(O){j?.(String(O?.message||O),"error")}},[U,j]),D=f(async(O,x)=>{let I=String(O||"").trim();if(!I)return;B(I);try{let A=await P2({action:"set",name:I,value:String(x??"")});if(A?.ok)U(A.settings);if(j?.(`Saved environment override for ${I}.`,"info"),I===V.trim())q(""),Q("")}catch(A){j?.(String(A?.message||A),"error")}finally{B(null)}},[U,V,j]),E=f(async(O)=>{let x=String(O||"").trim();if(!x)return;B(x);try{let I=await P2({action:"clear",name:x});if(I?.ok)U(I.settings);j?.(`Cleared environment override for ${x}.`,"info")}catch(I){j?.(String(I?.message||I),"error")}finally{B(null)}},[U,j]),M=Z0(()=>{let O=String($||"").trim().toLowerCase(),x=Array.isArray(Y.variables)?Y.variables:[];if(!O)return x;return x.filter((I)=>{return`${I?.name||""} ${I?.value||""} ${I?.source||""}`.toLowerCase().includes(O)})},[Y.variables,$]),z=f((O,x)=>{L((I)=>({...I||{},[O]:x}))},[]);return N`
        <div class="settings-section">
            <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:12px; margin-bottom:12px;">
                <div>
                    <h3 style="margin-top:0">Environment</h3>
                    <p class="settings-hint" style="margin-top:4px">
                        Showing non-keychain environment variables only. Overrides are stored in extension KV and applied to <code>process.env</code>, so subsequent tool calls inherit them.
                    </p>
                </div>
                <button type="button" class="settings-secondary-btn" onClick=${H}>Refresh</button>
            </div>

            <div class="settings-row" style="align-items:flex-start; gap:10px;">
                <label>Add override</label>
                <div style="display:grid; grid-template-columns:minmax(180px, 0.7fr) minmax(240px, 1fr) auto; gap:8px; flex:1;">
                    <input
                        type="text"
                        value=${V}
                        placeholder="VARIABLE_NAME"
                        spellcheck="false"
                        onInput=${(O)=>q(O.target.value)}
                    />
                    <input
                        type="text"
                        value=${K}
                        placeholder="value"
                        spellcheck="false"
                        onInput=${(O)=>Q(O.target.value)}
                    />
                    <button
                        type="button"
                        disabled=${!V.trim()||F===V.trim()}
                        onClick=${()=>D(V,K)}
                    >Save</button>
                </div>
            </div>

            <p class="settings-hint">
                ${Y.count} variables visible • ${Y.overrideCount} overrides active • ${Y.keychainEnvNames.length} keychain-injected variables hidden
            </p>

            <div class="settings-tool-list" style="max-height:58vh; overflow:auto;">
                ${M.map((O)=>{let x=String(O?.name||""),I=Object.prototype.hasOwnProperty.call(Z,x)?Z[x]:O.value,A=I!==O.value,k=F===x;return N`
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
                                <button type="button" disabled=${k||!A} onClick=${()=>D(x,I)}>Save</button>
                                <button type="button" disabled=${k||!O.overridden} onClick=${()=>E(x)}>Clear</button>
                            </span>
                        </div>
                    `})}
                ${M.length===0&&N`<p class="settings-hint">No environment variables match "${$}".</p>`}
            </div>
        </div>
    `}var OL=z_(()=>{k0();T_()});var zL={};$1(zL,{ProvidersSection:()=>kz});function Jz(_){switch(_){case"oauth":return"OAuth";case"api_key":return"API key";case"custom":return"Configured";default:return"Configured"}}function kz({providers:_,setStatus:$}){let[j,G]=C(null),[Y,X]=C(null),[Z,L]=C({}),V=f((D,E)=>{L((M)=>({...M,[D]:E}))},[]),q=f(async(D)=>{let E=(Z.apiKey||"").trim();if(!E){$?.("API key cannot be empty.","error");return}G(D),$?.(`Configuring ${D}…`,"info");try{let M=JSON.stringify({provider:D,method:"api_key",api_key:E}),z=await z1("default",`/login __step2 ${M}`,null,[]);if(z?.command?.status==="error"){$?.(z.command.message,"error");return}$?.(z?.command?.message||`${D} configured.`,"success"),X(null),L({})}catch(M){$?.(String(M.message||M),"error")}finally{G(null)}},[Z,$]),K=f(async(D,E)=>{G(D),$?.(`Configuring ${D}…`,"info");try{let M={provider:D,method:"custom"};for(let x of E.customFields||[])M[x.key]=(Z[x.key]||"").trim();let z=JSON.stringify(M),O=await z1("default",`/login __step2 ${z}`,null,[]);if(O?.command?.status==="error"){$?.(O.command.message,"error");return}$?.(O?.command?.message||`${D} configured.`,"success"),X(null),L({})}catch(M){$?.(String(M.message||M),"error")}finally{G(null)}},[Z,$]),Q=f(async(D)=>{G(D),$?.(`Starting OAuth for ${D}…`,"info");try{let E=JSON.stringify({provider:D}),z=(await z1("default",`/login __step1 ${E}`,null,[]))?.command?.message||"";if(z.includes("http")){let O=z.match(/(https?:\/\/[^\s)]+)/);if(O)window.open(O[1],"_blank","noopener"),$?.("OAuth window opened. Complete the sign-in flow, then close this message.","success");else $?.(z,"success")}else $?.(z||`OAuth flow started for ${D}. Check the chat.`,"success")}catch(E){$?.(String(E.message||E),"error")}finally{G(null)}},[$]),F=f(async(D)=>{if(j)return;G(D),$?.(`Logging out ${D}…`,"info");try{await z1("default",`/logout ${D}`,null,[]),$?.(`Logged out ${D}. Restart may be needed.`,"success")}catch(E){$?.(String(E.message||E),"error")}finally{G(null)}},[j,$]),B=_||[],U=(D)=>Y===D,H=(D)=>{X((E)=>E===D?null:D),L({})};return N`
        <div class="settings-section">
            <h3>Providers</h3>
            <div class="settings-provider-list">
                ${B.map((D)=>N`
                    <div class=${`settings-provider-card${D.configured?" configured":""}`}>
                        <div class="settings-provider-card-header" onClick=${()=>!D.configured&&H(D.id)}>
                            <div class="settings-provider-card-title">
                                <strong>${D.name}</strong>
                                <span class="settings-provider-id">${D.id}</span>
                                ${D.configured&&N`<span class="settings-tag settings-tag-skill">${Jz(D.authType)}</span>`}
                            </div>
                            <div class="settings-provider-card-meta">
                                ${D.hasOAuth&&N`<span class="settings-tag">OAuth</span>`}
                                ${D.hasApiKey&&N`<span class="settings-tag">API Key</span>`}
                                ${D.isCustom&&N`<span class="settings-tag">Custom</span>`}
                            </div>
                            <div class="settings-provider-card-actions">
                                ${D.configured?N`
                                    <button class="settings-addon-btn settings-addon-btn-remove"
                                        disabled=${j===D.id} onClick=${(E)=>{E.stopPropagation(),F(D.id)}}
                                    >${j===D.id?"…":"Logout"}</button>
                                    <button class="settings-addon-btn"
                                        disabled=${j===D.id} onClick=${(E)=>{E.stopPropagation(),H(D.id)}}
                                    >Reconfigure</button>
                                `:N`
                                    <button class="settings-addon-btn settings-addon-btn-install"
                                        disabled=${j===D.id} onClick=${(E)=>{E.stopPropagation(),H(D.id)}}
                                    >Set up</button>
                                `}
                            </div>
                        </div>

                        ${U(D.id)&&N`
                            <div class="settings-provider-setup">
                                <p class="settings-hint settings-provider-setup-hint">Sign-in flows open in the browser. In narrow panes the setup form stacks vertically to avoid clipping.</p>
                                ${D.hasOAuth&&N`
                                    <div class="settings-provider-method">
                                        <button class="settings-addon-btn settings-addon-btn-install"
                                            disabled=${j===D.id}
                                            onClick=${()=>Q(D.id)}>
                                            ${j===D.id?"Starting…":"Sign in with OAuth"}
                                        </button>
                                    </div>
                                `}
                                ${D.hasApiKey&&N`
                                    <div class="settings-provider-method">
                                        <div class="settings-provider-field-row">
                                            <label>API Key</label>
                                            <input type="password" value=${Z.apiKey||""}
                                                onInput=${(E)=>V("apiKey",E.target.value)}
                                                placeholder=${D.apiKeyHint||"Enter API key"} />
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${j===D.id||!(Z.apiKey||"").trim()}
                                                onClick=${()=>q(D.id)}>
                                                ${j===D.id?"…":"Save"}
                                            </button>
                                        </div>
                                    </div>
                                `}
                                ${D.isCustom&&N`
                                    <div class="settings-provider-method">
                                        ${(D.customFields||[]).map((E)=>N`
                                            <div class="settings-provider-field-row">
                                                <label>${E.label}${E.required?" *":""}</label>
                                                <input type="text" value=${Z[E.key]||""}
                                                    onInput=${(M)=>V(E.key,M.target.value)}
                                                    placeholder=${E.placeholder||""} />
                                            </div>
                                        `)}
                                        <div class="settings-provider-form-actions">
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${j===D.id}
                                                onClick=${()=>K(D.id,D)}>
                                                ${j===D.id?"Configuring…":"Save configuration"}
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
    `}var AL=z_(()=>{k0();T_()});var JL={};$1(JL,{ModelsSection:()=>Iz});function yz(_){return typeof _==="string"&&_.toLowerCase()==="anthropic"}function wz({thinkingLevel:_,supportsThinking:$,provider:j,availableLevels:G,onSetLevel:Y,disabled:X}){let Z=yz(j)?Mz:Tz,L=G&&G.length>1?G:["off","minimal","low","medium","high"],V=Math.max(0,L.indexOf(_??"off"));if(!$)return N`<div class="settings-thinking-slider"><label>Thinking level</label><p class="settings-hint" style="margin:4px 0 0">Current model does not support thinking.</p></div>`;return N`
        <div class="settings-thinking-slider">
            <label>Thinking level: <strong>${Z[L[V]]||L[V]}</strong></label>
            <div class="settings-slider-track">
                <input type="range" min="0" max=${L.length-1} step="1" value=${V} disabled=${X}
                    onInput=${(q)=>Y(L[parseInt(q.target.value,10)])} />
                <div class="settings-slider-labels">
                    ${L.map((q,K)=>N`<span class=${K===V?"active":""} onClick=${()=>!X&&Y(q)}>${Z[q]||q}</span>`)}
                </div>
            </div>
        </div>
    `}function Iz({filter:_=""}){let[$,j]=C(null),[G,Y]=C(!1),[X,Z]=C("off"),[L,V]=C(!1),[q,K]=C(["off"]),[Q,F]=C(!1),B=f(async()=>{let I=await I4();if(j(I),I.thinking_level)Z(I.thinking_level);if(V(Boolean(I.supports_thinking)),Array.isArray(I.available_thinking_levels)&&I.available_thinking_levels.length>0)K(I.available_thinking_levels);return I},[]);g(()=>{B().catch(()=>j({models:[],model_options:[]}))},[]);let U=f(async(I)=>{if(G)return;Y(!0);try{await z1("default",`/model ${I}`,null,[]),await B()}catch(A){console.error("Failed to switch model:",A)}finally{Y(!1)}},[G,B]),H=f(async(I)=>{if(Q)return;F(!0),Z(I);try{let A=await z1("default",`/thinking ${I}`,null,[]);if(A?.command?.thinking_level)Z(A.command.thinking_level);V(A?.command?.supports_thinking!==!1),await B()}catch(A){console.error("Failed to set thinking:",A),await B().catch((k)=>{})}finally{F(!1)}},[Q,B]);if(!$)return N`<div class="settings-loading">Loading models\u2026</div>`;let D=$.model_options||[],E=$.current,z=D.find((I)=>I.label===E)?.provider||"",O=_.toLowerCase(),x=O?D.filter((I)=>I.label.toLowerCase().includes(O)||(I.provider||"").toLowerCase().includes(O)):D;return N`
        <div class="settings-models-split">
            <div class="settings-models-summary settings-hint">Model and provider names may wrap in narrow panes to avoid clipping.</div>
            <div class="settings-models-list">
                <table class="settings-table settings-borderless settings-models-table">
                    <thead><tr><th style="width:32px"></th><th>Model</th><th>Provider</th><th>Context</th><th style="text-align:center">Reasoning</th></tr></thead>
                    <tbody>
                        ${x.map((I)=>N`
                            <tr class=${I.label===E?"settings-row-active":""}>
                                <td><input type="radio" name="settings-model" checked=${I.label===E} disabled=${G} onChange=${()=>U(I.label)} /></td>
                                <td>${I.name||I.label}</td><td>${I.provider}</td>
                                <td>${I.context_window?(I.context_window/1000).toFixed(0)+"K":"—"}</td>
                                <td style="text-align:center">${I.reasoning?"\uD83E\uDDE0":"—"}</td>
                            </tr>
                        `)}
                        ${x.length===0&&N`<tr><td colspan="5" class="settings-empty">No models match "${_}"</td></tr>`}
                    </tbody>
                </table>
            </div>
            <div class="settings-models-footer">
                <${wz}
                    thinkingLevel=${X}
                    supportsThinking=${L}
                    provider=${z}
                    availableLevels=${q}
                    onSetLevel=${H}
                    disabled=${Q||G} />
            </div>
        </div>
    `}var Mz,Tz;var kL=z_(()=>{k0();T_();Mz={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"max"},Tz={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"xhigh"}});var TL={};$1(TL,{ThemeSection:()=>xz});function ML(_={}){return{uiTheme:typeof _.uiTheme==="string"&&_.uiTheme.trim()?_.uiTheme.trim():"default",uiTint:typeof _.uiTint==="string"&&_.uiTint.trim()?_.uiTint.trim():""}}function xz({themes:_,colorKeys:$,settingsData:j,setStatus:G,mergeSettingsData:Y}){let[X,Z]=C("default"),[L,V]=C(""),[q,K]=C(!1),Q=u(""),F=u(null),B=u(!0);g(()=>{return B.current=!0,()=>{B.current=!1}},[]);let U=f((z)=>{let O=ML(z);Z(O.uiTheme),V(O.uiTint),Q.current=JSON.stringify(O)},[]);g(()=>{if(j){U(j);return}U({uiTheme:document.documentElement.dataset.colorTheme||"default",uiTint:document.documentElement.dataset.tint||""})},[j,U]);let H=f((z,O)=>{E5({theme:z,tint:O||null}),Z(z||"default"),V(O||"")},[]),D=Z0(()=>JSON.stringify(ML({uiTheme:X,uiTint:L})),[X,L]);g(()=>{if(D===Q.current)return;if(F.current)clearTimeout(F.current);return F.current=setTimeout(async()=>{if(!B.current)return;K(!0);try{let z=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:D}),O=await z.json().catch(()=>({}));if(!B.current)return;if(!z.ok||!O?.ok||!O?.settings){G?.(O?.error||"Failed to save appearance settings.","error");return}Q.current=D,Y?.(O.settings),G?.("Appearance synced across clients.","success")}catch(z){if(!B.current)return;console.warn("[settings/appearance] Failed to persist appearance settings.",z),G?.("Failed to save appearance settings.","error")}finally{if(B.current)K(!1)}},250),()=>{if(F.current)clearTimeout(F.current)}},[D,Y,G]);let E=$||[],M=_||[];return N`
        <div class="settings-section">
            ${q&&N`<div class="settings-hint" style="margin:0 0 12px 0;">Syncing appearance…</div>`}
            <div class="settings-tint-row">
                <label class="settings-tint-label">
                    <input type="radio" name="settings-theme"
                        checked=${X==="default"}
                        onChange=${()=>H("default",L)} />
                    <strong>Default</strong>
                    <span class="settings-hint" style="margin:0 0 0 6px">auto (light/dark)</span>
                </label>
                <div class="settings-tint-picker">
                    <label class="settings-hint" style="margin:0">Tint:</label>
                    <input type="color"
                        value=${L||"#1d9bf0"}
                        onInput=${(z)=>{let O=z.target.value;if(V(O),X==="default")E5({theme:"default",tint:O})}} />
                    ${L&&N`
                        <button class="settings-tint-clear" onClick=${()=>H("default","")}
                            title="Clear tint">\u2715</button>
                    `}
                    <span class="settings-tint-hex">${L||"none"}</span>
                </div>
            </div>

            <table class="settings-table settings-borderless settings-theme-table">
                <thead>
                    <tr>
                        <th></th><th>Theme</th><th>Mode</th>
                        ${E.map((z)=>N`<th class="settings-swatch-header">${z.replace(/([A-Z])/g," $1").trim()}</th>`)}
                    </tr>
                </thead>
                <tbody>
                    ${M.filter((z)=>z.name!=="default").map((z)=>N`
                        <tr class=${z.name===X?"settings-row-active":""}
                            style="cursor:pointer" onClick=${()=>H(z.name,"")}>
                            <td><input type="radio" name="settings-theme" checked=${z.name===X} onChange=${()=>H(z.name,"")} /></td>
                            <td><strong>${z.label}</strong></td>
                            <td>${z.mode}</td>
                            ${E.map((O)=>{let x=z.colors?.[O];return N`<td class="settings-swatch-cell">
                                    ${x?N`<span class="settings-color-swatch" style=${"background:"+x} title=${x}></span>`:"—"}
                                </td>`})}
                        </tr>
                    `)}
                </tbody>
            </table>
        </div>
    `}var yL=z_(()=>{k0();G6()});var IL={};$1(IL,{__scheduledTasksSettingsTest:()=>gz,ScheduledTasksSection:()=>Sz});function S4(_){if(!_)return"—";let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function wL(_){let $=Number(_);if(!Number.isFinite($))return"—";if($<1000)return`${Math.round($)}ms`;return`${($/1000).toFixed($<1e4?1:0)}s`}function J9(_){if(!_)return"—";if(_.schedule_type==="once")return`once · ${S4(_.schedule_value)}`;if(_.schedule_type==="interval")return`interval · ${_.schedule_value}`;if(_.schedule_type==="cron")return`cron · ${_.schedule_value}`;return`${_.schedule_type||"schedule"} · ${_.schedule_value||"—"}`}function k9(_){let $=_?.task_kind||"agent";return $==="internal"?"internal/protected":$}function M9(_){return(_?.task_kind||"agent")==="internal"}function Pz(_){if(!_)return"";let $=String(_).replace(/\s+/g," ").trim();return $.length>180?`${$.slice(0,179)}…`:$}function M5({children:_,type:$="neutral"}){return N`<span class=${`settings-task-pill settings-task-pill-${$}`}>${_}</span>`}function Rz({task:_}){let $=Array.isArray(_?.recent_run_logs)?_.recent_run_logs:[];if(!$.length)return N`<p class="settings-hint">No run logs recorded yet.</p>`;return N`
        <div class="settings-task-run-list">
            ${$.map((j)=>N`
                <div class=${`settings-task-run-row settings-task-run-${j.status||"unknown"}`}>
                    <div class="settings-task-run-meta">
                        <${M5} type=${j.status==="error"?"error":"success"}>${j.status||"unknown"}<//>
                        <span>${S4(j.run_at)}</span>
                        <span>${wL(j.duration_ms)}</span>
                    </div>
                    <div class="settings-task-run-summary">
                        ${j.error_summary||Pz(j.error)||j.result_summary||j.result||"No summary"}
                    </div>
                </div>
            `)}
        </div>
    `}function fz({task:_,onAction:$}){if(!_)return N`<div class="settings-task-detail-empty">Select a task to inspect schedule, status, and run history.</div>`;let j=M9(_);return N`
        <div class="settings-task-detail">
            <div class="settings-task-detail-header">
                <div>
                    <h4>${_.summary||_.id}</h4>
                    <code>${_.id}</code>
                </div>
                <div class="settings-task-detail-actions">
                    ${_.status==="active"&&N`<button onClick=${()=>$("pause",_)}>Pause</button>`}
                    ${_.status==="paused"&&N`<button onClick=${()=>$("resume",_)}>Resume</button>`}
                    <button class="danger" onClick=${()=>$("delete",_)}>Delete</button>
                </div>
            </div>
            <div class="settings-task-detail-grid">
                <span>Status</span><strong>${_.status||"—"}</strong>
                <span>Kind</span><strong>${k9(_)}</strong>
                <span>Schedule</span><strong>${J9(_)}</strong>
                <span>Next run</span><strong>${S4(_.next_run)}</strong>
                <span>Last run</span><strong>${S4(_.last_run)}</strong>
                <span>Last result</span><strong>${_.latest_run_log?.status||_.last_result||"—"}</strong>
                <span>Chat</span><code>${_.chat_jid||"—"}</code>
                <span>Model</span><code>${_.model||"default"}</code>
                ${_.cwd&&N`<span>CWD</span><code>${_.cwd}</code>`}
                ${_.timeout_sec&&N`<span>Timeout</span><strong>${_.timeout_sec}s</strong>`}
                ${j&&N`<span>Protection</span><strong>Internal task actions require explicit confirmation.</strong>`}
            </div>
            <div class="settings-task-command-block">
                <strong>${_.task_kind==="shell"?"Command":"Prompt"}</strong>
                <pre>${_.command||_.prompt||_.command_summary||_.prompt_summary||_.summary||"—"}</pre>
            </div>
            <h4>Recent runs</h4>
            <${Rz} task=${_} />
        </div>
    `}function Sz({filter:_="",setStatus:$}){let[j,G]=C([]),[Y,X]=C({active:0,paused:0,completed:0}),[Z,L]=C("all"),[V,q]=C(""),[K,Q]=C(!0),[F,B]=C(null),[U,H]=C(null),[D,E]=C(null),[M,z]=C(!1),O=f(async(W={})=>{Q(!0),B(null);try{let T=await J7({status:Z,chatJid:V.trim()||void 0,limit:50,includeRunLogs:!0,runLogLimit:5});G(T.tasks||[]),X(T.counts||{active:0,paused:0,completed:0});let y=W.selectedId||U,J=(T.tasks||[]).find((P)=>P.id===y)||(T.tasks||[])[0]||null;H(J?.id||null),E(J)}catch(T){B(T?.message||"Failed to load scheduled tasks.")}finally{Q(!1)}},[Z,V,U]);g(()=>{O()},[O]);let x=String(_||"").trim().toLowerCase(),I=Z0(()=>{if(!x)return j;return j.filter((W)=>[W.id,W.chat_jid,W.status,W.task_kind,W.schedule_type,W.schedule_value,W.summary,W.prompt_summary,W.command_summary,W.latest_run_log?.error_summary].some((T)=>String(T||"").toLowerCase().includes(x)))},[j,x]),A=f((W)=>{H(W?.id||null),E(W||null)},[]),k=f(async(W,T)=>{if(!T||M)return;let y=M9(T),J=T.summary||T.command_summary||T.prompt_summary||T.id,P=W==="delete"?`Delete scheduled task ${T.id}?

${J}`:`${W==="pause"?"Pause":"Resume"} scheduled task ${T.id}?

${J}`;if(!window.confirm(P))return;if(y&&!window.confirm(`Task ${T.id} is internal/protected. Continue with ${W}?`))return;z(!0),$?.(`${W==="delete"?"Deleting":W==="pause"?"Pausing":"Resuming"} ${T.id}…`,"info");try{await k7(W,T.id,{allowInternal:y}),$?.(`Scheduled task ${T.id} ${W==="delete"?"deleted":W==="pause"?"paused":"resumed"}.`,"success"),await O({selectedId:W==="delete"?null:T.id})}catch(R){$?.(R?.message||`Failed to ${W} task.`,"error")}finally{z(!1)}},[M,O,$]);return N`
        <div class="settings-section settings-scheduled-tasks-section">
            <div class="settings-task-toolbar">
                <div class="settings-task-counts">
                    <${M5} type="active">Active ${Y.active||0}<//>
                    <${M5} type="paused">Paused ${Y.paused||0}<//>
                    <${M5} type="completed">Completed ${Y.completed||0}<//>
                </div>
                <div class="settings-task-filters">
                    <select value=${Z} onChange=${(W)=>L(W.target.value)}>
                        ${Cz.map((W)=>N`<option value=${W}>${W==="all"?"All statuses":W}</option>`)}
                    </select>
                    <input type="text" placeholder="Filter chat JID…" value=${V} onInput=${(W)=>q(W.target.value)} />
                    <button onClick=${()=>O()} disabled=${K}>Refresh</button>
                </div>
            </div>

            ${K&&N`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>Loading scheduled tasks…</span></div>`}
            ${F&&N`<div class="settings-error-state">${F}</div>`}
            ${!K&&!F&&j.length===0&&N`
                <div class="settings-empty-state">
                    <strong>No scheduled tasks found.</strong>
                    <p>Tasks created with reminders, `/j`, or the scheduler tool will appear here.</p>
                </div>
            `}
            ${!K&&!F&&j.length>0&&N`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label="Scheduled tasks">
                        ${I.map((W)=>N`
                            <button class=${`settings-task-row ${W.id===U?"active":""}`} onClick=${()=>A(W)}>
                                <span class="settings-task-row-main">
                                    <strong>${W.summary||W.id}</strong>
                                    <span>${J9(W)}</span>
                                </span>
                                <span class="settings-task-row-meta">
                                    <${M5} type=${W.status||"neutral"}>${W.status}<//>
                                    <${M5}>${k9(W)}<//>
                                </span>
                                <span class="settings-task-row-times">Next ${S4(W.next_run)} · Last ${S4(W.last_run)}${W.latest_run_log?.status?` · ${W.latest_run_log.status}`:""}</span>
                            </button>
                        `)}
                        ${I.length===0&&N`<p class="settings-hint">No tasks match “${_}”.</p>`}
                    </div>
                    <${fz} task=${D&&I.some((W)=>W.id===D.id)?D:I[0]} onAction=${k} />
                </div>
            `}
        </div>
    `}var Cz,gz;var xL=z_(()=>{k0();T_();Cz=["all","active","paused","completed"];gz={formatDateTime:S4,formatDuration:wL,labelForSchedule:J9,kindLabel:k9,isProtectedTask:M9}});function CL(_){return String(_||"").toLowerCase().replace(/^[@/]+/,"").replace(/\s+/g," ").trim()}function T5(_){return typeof _==="string"&&_.trim().length>0}function T9(_,...$){let j=CL(_);if(!j)return!0;let G=$.map((Y)=>CL(Y)).filter(Boolean);for(let Y of G)if(Y.startsWith(j)||Y.includes(j))return!0;return!1}function PL(_){if(!Array.isArray(_))return null;let $=[],j=new Set;for(let G of _){let Y=String(G||"").trim();if(!Y)continue;let X=Y.toLowerCase();if(j.has(X))continue;j.add(X),$.push(Y)}return $}function e$(_){let $=_&&typeof _==="object"?_:{};return{workspaceCommands:PL($.workspaceCommands),slashCommands:PL($.slashCommands)}}function RL(_,$){if(!Array.isArray(_))return!0;return _.some((j)=>j.toLowerCase()===$.toLowerCase())}function uz(_){let $=Array.isArray(_?.commands)?_.commands:[],j=e$(_?.settings),G=String(_?.query||"");return $.filter((Y)=>RL(j.workspaceCommands,Y.id)).filter((Y)=>T9(G,Y.label,Y.description,...Y.keywords||[])).map((Y)=>({key:`workspace:${Y.id}`,kind:"workspace",title:Y.label,subtitle:Y.description,searchText:`${Y.label} ${Y.description} ${(Y.keywords||[]).join(" ")}`.trim(),visualHint:Y.label.slice(0,1).toUpperCase()||"W",categoryLabel:"Workspace",actionHint:"Run",commandId:Y.id}))}function bz(_){let $=Array.isArray(_?.agents)?_.agents:[],j=String(_?.query||""),G=new Set;return $.filter((Y)=>{let X=T5(Y?.chat_jid)?Y.chat_jid.trim():"";if(!X||G.has(X))return!1;if(Y?.archived_at)return!1;return G.add(X),!0}).filter((Y)=>T9(j,`@${String(Y?.agent_name||"").trim()}`,Y?.session_name,Y?.chat_jid)).map((Y)=>{let X=T5(Y?.agent_name)?Y.agent_name.trim():String(Y?.chat_jid||"").replace(/^[^:]+:/,""),Z=T5(Y?.session_name)?Y.session_name.trim():"",L=String(Y?.chat_jid||"").trim();return{key:`agent:${L}`,kind:"agent",title:`@${X}`,subtitle:Z||L,searchText:`@${X} ${Z} ${L}`.trim(),visualHint:X.slice(0,1).toUpperCase()||"@",categoryLabel:"Agent",actionHint:"Open",chatJid:L}})}function vz(_){let $=Array.isArray(_?.slashCommands)?_.slashCommands:[],j=e$(_?.settings),G=String(_?.query||""),Y=new Set;return $.filter((X)=>{let Z=T5(X?.name)?X.name.trim():"";if(!Z||Y.has(Z.toLowerCase()))return!1;return Y.add(Z.toLowerCase()),RL(j.slashCommands,Z)}).filter((X)=>T9(G,X?.name,X?.description,X?.source)).map((X)=>{let Z=String(X?.name||"").trim(),L=T5(X?.description)?X.description.trim():"slash command",V=T5(X?.source)?X.source.trim():"";return{key:`slash:${Z}`,kind:"slash",title:Z,subtitle:L,searchText:`${Z} ${L} ${String(X?.source||"")}`.trim(),visualHint:"/",categoryLabel:V||"Slash",actionHint:"Insert",commandName:Z}})}function fL(_){return[...bz({agents:_?.agents,query:_?.query}),...uz({commands:_?.workspaceCommands,settings:_?.settings,query:_?.query}),...vz({slashCommands:_?.slashCommands,settings:_?.settings,query:_?.query})]}var t$;var y9=z_(()=>{t$=[{id:"toggle-workspace",label:"Toggle workspace",description:"Show or hide the workspace sidebar.",keywords:["workspace","sidebar","explorer"]},{id:"open-explorer",label:"Open explorer",description:"Open the workspace explorer sidebar.",keywords:["workspace","explorer","sidebar"]},{id:"toggle-chat-only",label:"Chat-only mode",description:"Toggle chat-only mode.",keywords:["chat","mode","layout"]},{id:"open-terminal-tab",label:"Open terminal in tab",description:"Open the terminal pane in a workspace tab.",keywords:["terminal","shell","tab"]},{id:"open-vnc-tab",label:"Open VNC in tab",description:"Open the VNC viewer in a workspace tab.",keywords:["vnc","remote","desktop","tab"]},{id:"toggle-terminal-dock",label:"Toggle terminal dock",description:"Show or hide the terminal dock.",keywords:["terminal","dock","shell"]},{id:"open-settings",label:"Settings",description:"Open the settings dialog.",keywords:["settings","preferences","config"]}]});var uL={};$1(uL,{QuickActionsSection:()=>mz});function SL(_,...$){let j=String(_||"").trim().toLowerCase();if(!j)return!0;return $.some((G)=>String(G||"").toLowerCase().includes(j))}function gL(_){if(!Array.isArray(_))return null;return new Set(_.map(($)=>String($||"").trim().toLowerCase()).filter(Boolean))}function mz({filter:_="",setStatus:$,mergeSettingsData:j}){let[G,Y]=C(()=>t$.map((I)=>I.id)),[X,Z]=C([]),[L,V]=C([]),[q,K]=C(!0),[Q,F]=C(!1),B=f(async()=>{K(!0);try{let[I,A]=await Promise.all([B6(),K6("web:default").catch(()=>({commands:[]}))]),k=e$(I?.settings),W=Array.isArray(A?.commands)?A.commands:[];V(W),Y(Array.isArray(k.workspaceCommands)?k.workspaceCommands:t$.map((T)=>T.id)),Z(Array.isArray(k.slashCommands)?k.slashCommands:W.map((T)=>String(T?.name||"").trim()).filter(Boolean))}catch(I){$?.(String(I?.message||I),"error")}finally{K(!1)}},[$]);g(()=>{B()},[B]);let U=Z0(()=>gL(G),[G]),H=Z0(()=>gL(X),[X]),D=Z0(()=>t$.filter((I)=>SL(_,I.label,I.description,...I.keywords||[])),[_]),E=Z0(()=>L.filter((I)=>SL(_,I?.name,I?.description,I?.source)),[L,_]),M=f((I)=>{Y((A)=>{let k=new Set((Array.isArray(A)?A:[]).map((W)=>String(W||"").trim()).filter(Boolean));if(k.has(I))k.delete(I);else k.add(I);return t$.map((W)=>W.id).filter((W)=>k.has(W))})},[]),z=f((I)=>{Z((A)=>{let k=new Set((Array.isArray(A)?A:[]).map((W)=>String(W||"").trim()).filter(Boolean));if(k.has(I))k.delete(I);else k.add(I);return L.map((W)=>String(W?.name||"").trim()).filter((W)=>W&&k.has(W))})},[L]),O=f(()=>{Y(t$.map((I)=>I.id)),Z(L.map((I)=>String(I?.name||"").trim()).filter(Boolean))},[L]),x=f(async()=>{if(Q)return;F(!0),$?.("Saving quick actions…","info");try{let I=await P7({workspaceCommands:G,slashCommands:X}),A=e$(I?.settings);j?.({quickActions:A}),window.dispatchEvent(new CustomEvent("piclaw:quick-actions-settings-updated",{detail:{settings:A}})),$?.("Quick Actions saved.","success")}catch(I){$?.(String(I?.message||I),"error")}finally{F(!1)}},[j,Q,$,X,G]);if(q)return N`<div class="settings-loading">Loading…</div>`;return N`
        <div class="settings-section">
            <h3>Timeline Quick Actions</h3>
            <p class="settings-hint">
                Choose which actions appear in the timeline typeahead. Agents are always pinned first, then workspace commands, then slash commands.
            </p>

            <div class="settings-row" style="align-items:center; gap:10px; margin-bottom:12px;">
                <button class="settings-addon-btn" onClick=${O} disabled=${Q}>Enable all</button>
                <button class="settings-addon-btn settings-addon-btn-install" onClick=${x} disabled=${Q}>
                    ${Q?"Saving…":"Save & apply"}
                </button>
            </div>

            <h3 style="margin-top:8px;">Workspace commands</h3>
            <div class="settings-subsection-list">
                ${D.map((I)=>{let A=U?U.has(I.id.toLowerCase()):!0;return N`
                        <label class="settings-checkbox-row" key=${I.id}>
                            <input type="checkbox" checked=${A} onChange=${()=>M(I.id)} />
                            <div>
                                <div>${I.label}</div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${I.description}</div>
                            </div>
                        </label>
                    `})}
                ${D.length===0&&N`<div class="settings-hint">No workspace commands match this filter.</div>`}
            </div>

            <h3 style="margin-top:20px;">Slash commands</h3>
            <div class="settings-subsection-list">
                ${E.map((I)=>{let A=String(I?.name||"").trim(),k=H?H.has(A.toLowerCase()):!0;return N`
                        <label class="settings-checkbox-row" key=${A}>
                            <input type="checkbox" checked=${k} onChange=${()=>z(A)} />
                            <div>
                                <div><code>${A}</code></div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${I?.description||"slash command"}</div>
                            </div>
                        </label>
                    `})}
                ${E.length===0&&N`<div class="settings-hint">No slash commands match this filter.</div>`}
            </div>
        </div>
    `}var bL=z_(()=>{k0();T_();y9()});var vL={};$1(vL,{KeychainSection:()=>lz});function cz(_){if(!_)return"—";try{return new Date(_).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return _}}function lz({filter:_=""}){let[$,j]=C([]),[G,Y]=C(!0),[X,Z]=C(null),[L,V]=C(!1),[q,K]=C(""),[Q,F]=C(""),[B,U]=C(""),[H,D]=C(""),[E,M]=C(""),[z,O]=C("secret"),[x,I]=C(!1),[A,k]=C({}),[W,T]=C(null),[y,J]=C(null),[P,R]=C(null),b=u(null),c=u(null),r=u(null),e=f(async()=>{Y(!0),Z(null);try{let X0=await(await fetch("/agent/keychain")).json();if(X0?.ok)j(X0.entries||[]);else Z(X0?.error||"Failed to load keychain.")}catch(a){Z("Failed to load keychain.")}finally{Y(!1)}},[]);g(()=>{e()},[e]);let m=f(async()=>{let a=q.trim(),X0=Q;if(!a||!X0)return;I(!0);try{let P0=await(await fetch("/agent/keychain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a,secret:X0,type:z,username:B.trim()||void 0,userNote:H,agentNote:E})})).json();if(P0?.ok)K(""),F(""),U(""),D(""),M(""),O("secret"),V(!1),await e();else Z(P0?.error||"Failed to add entry.")}catch{Z("Failed to add entry.")}finally{I(!1)}},[q,Q,B,H,E,z,e]),_0=f(async(a)=>{try{let W0=await(await fetch("/agent/keychain",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a})})).json();if(W0?.ok)J(null),R((P0)=>P0?.name===a?null:P0),await e();else Z(W0?.error||"Failed to delete entry.")}catch{Z("Failed to delete entry.")}},[e]),H0=f(async(a)=>{let X0=a?.name;if(!X0)return;let W0=A[X0]||{},P0=Object.prototype.hasOwnProperty.call(W0,"userNote")?W0.userNote:a.userNote||"",p0=Object.prototype.hasOwnProperty.call(W0,"agentNote")?W0.agentNote:a.agentNote||"";T(X0);try{let Y_=await(await fetch("/agent/keychain/notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:X0,userNote:P0,agentNote:p0})})).json();if(Y_?.ok)k((l0)=>{let a0={...l0||{}};return delete a0[X0],a0}),await e();else Z(Y_?.error||"Failed to save notes.")}catch{Z("Failed to save notes.")}finally{T(null)}},[A,e]),Y0=f((a,X0,W0)=>{k((P0)=>({...P0||{},[a]:{...(P0||{})[a]||{},[X0]:W0}}))},[]),j0=f(async(a,X0,W0)=>{try{let p0=await(await fetch("/agent/keychain/reveal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a,master_password:X0||void 0,totp_code:W0||void 0})})).json();if(p0?.ok)R({name:a,phase:"revealed",secret:p0.secret,username:p0.username,masterPassword:X0});else if(p0?.needs_master_password)R((u0)=>({name:a,phase:"password",masterPassword:"",error:u0?.name===a&&u0?.masterPassword?p0.error:null})),requestAnimationFrame(()=>c.current?.focus());else if(p0?.needs_totp)R((u0)=>({name:a,phase:"totp",masterPassword:X0,totpCode:"",error:u0?.name===a&&u0?.phase==="totp"&&u0?.totpCode?p0.error:null})),requestAnimationFrame(()=>r.current?.focus());else R({name:a,phase:"error",error:p0?.error||"Failed to reveal."})}catch{R({name:a,phase:"error",error:"Failed to reveal."})}},[]),L0=f((a)=>{if(P?.name===a&&P?.phase==="revealed"){R(null);return}j0(a,null,null)},[P,j0]),F0=f((a)=>{let X0=P?.masterPassword||"";if(!X0)return;j0(a,X0,null)},[P,j0]),h=f((a)=>{let X0=P?.totpCode||"";if(X0.length<6)return;j0(a,P?.masterPassword,X0)},[P,j0]),$0=f(async(a)=>{try{await navigator.clipboard.writeText(a)}catch{let X0=document.createElement("textarea");X0.value=a,X0.style.position="fixed",X0.style.opacity="0",document.body.appendChild(X0),X0.select(),document.execCommand("copy"),document.body.removeChild(X0)}},[]);g(()=>{if(L)requestAnimationFrame(()=>b.current?.focus())},[L]);let V0=_.toLowerCase(),O0=Z0(()=>{if(!V0)return $;return $.filter((a)=>a.name.toLowerCase().includes(V0)||(a.type||"").toLowerCase().includes(V0)||(a.envVar||"").toLowerCase().includes(V0)||(a.userNote||"").toLowerCase().includes(V0)||(a.agentNote||"").toLowerCase().includes(V0))},[$,V0]);if(G)return N`<div class="settings-section"><div class="settings-loading">Loading keychain…</div></div>`;return N`
        <div class="settings-section">
            ${X&&N`
                <div class="settings-keychain-error" role="alert">
                    ${X}
                    <button class="settings-keychain-dismiss" onClick=${()=>Z(null)}>✕</button>
                </div>
            `}
            <div class="settings-keychain-toolbar" style="display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
                <span class="settings-hint" style="margin:0; display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <span>${O0.length} entr${O0.length===1?"y":"ies"}${V0?` matching "${_}"`:""}, encrypted at rest.</span>
                    <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>Click</span>
                        <span aria-hidden="true" style="display:inline-flex; width:18px; height:18px; align-items:center; justify-content:center; border-radius:999px; border:1px solid var(--border-color, rgba(120,120,120,.22)); background:var(--panel-bg, rgba(255,255,255,.04));">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        </span>
                        <span>to reveal.</span>
                    </span>
                </span>
                <button class="settings-keychain-add-btn" onClick=${()=>V(!L)}>
                    ${L?"Cancel":"+ Add entry"}
                </button>
            </div>

            ${L&&N`
                <div class="settings-keychain-add-form">
                    <div class="settings-keychain-add-row">
                        <input ref=${b} type="text" placeholder="Entry name (e.g. github/my-token)"
                            value=${q} onInput=${(a)=>K(a.target.value)}
                            class="settings-keychain-input" />
                        <select value=${z} onChange=${(a)=>O(a.target.value)}
                            class="settings-keychain-select">
                            ${hz.map((a)=>N`<option value=${a}>${a}</option>`)}
                        </select>
                    </div>
                    <div class="settings-keychain-add-row">
                        <input type="password" placeholder="Secret value"
                            value=${Q} onInput=${(a)=>F(a.target.value)}
                            class="settings-keychain-input settings-keychain-secret" />
                        <input type="text" placeholder="Username (optional)"
                            value=${B} onInput=${(a)=>U(a.target.value)}
                            class="settings-keychain-input" style="max-width:200px" />
                        <button class="settings-keychain-save-btn" onClick=${m}
                            disabled=${x||!q.trim()||!Q}>
                            ${x?"Saving…":"Save"}
                        </button>
                    </div>
                    <div class="settings-keychain-add-row" style="align-items:stretch">
                        <textarea placeholder="User note (visible in this UI only)"
                            value=${H} onInput=${(a)=>D(a.target.value)}
                            class="settings-keychain-input" rows="2" style="resize:vertical; min-height:56px"></textarea>
                        <textarea placeholder="Agent note (safe to expose to agents)"
                            value=${E} onInput=${(a)=>M(a.target.value)}
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
                        ${O0.length===0&&N`
                            <tr><td colspan="5" class="settings-keychain-empty">
                                ${V0?"No entries match the filter.":"No keychain entries."}
                            </td></tr>
                        `}
                        ${O0.map((a)=>{let X0=P?.name===a.name?P:null,W0=X0?.phase==="revealed",P0=X0?.phase==="password",p0=X0?.phase==="totp",u0=X0?.phase==="error",Y_=A[a.name]||{},l0=Object.prototype.hasOwnProperty.call(Y_,"userNote")?Y_.userNote:a.userNote||"",a0=Object.prototype.hasOwnProperty.call(Y_,"agentNote")?Y_.agentNote:a.agentNote||"",R0=l0!==(a.userNote||"")||a0!==(a.agentNote||""),i0=W===a.name;return N`
                            <tr class="settings-keychain-row" key=${a.name}>
                                <td class="settings-keychain-name">${a.name}</td>
                                <td><span class="settings-keychain-type-badge">${a.type}</span></td>
                                <td class="settings-keychain-env">${a.envVar?N`<code>$${a.envVar}</code>`:"—"}</td>
                                <td class="settings-keychain-date">${cz(a.updatedAt)}</td>
                                <td class="settings-keychain-actions">
                                    <button class=${`settings-keychain-reveal-btn${W0?" active":""}`}
                                        onClick=${()=>L0(a.name)}
                                        title=${W0?"Hide secret":"Reveal secret"}>
                                        ${W0?N`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:N`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                                    </button>
                                    ${y===a.name?N`
                                            <span class="settings-keychain-confirm">Delete?
                                                <button class="settings-keychain-confirm-yes" onClick=${()=>_0(a.name)}>Yes</button>
                                                <button class="settings-keychain-confirm-no" onClick=${()=>J(null)}>No</button>
                                            </span>
                                        `:N`<button class="settings-keychain-delete-btn" onClick=${()=>J(a.name)} title="Delete">🗑</button>`}
                                </td>
                            </tr>
                            <tr class="settings-keychain-notes-row" key=${a.name+"-notes"}>
                                <td colspan="5">
                                    <div style="display:grid; grid-template-columns:1fr 1fr auto; gap:8px; align-items:start; padding:8px 0 10px 0;">
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">User note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Human/UI note only"
                                                value=${l0}
                                                onInput=${(m0)=>Y0(a.name,"userNote",m0.target.value)}></textarea>
                                        </label>
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">Agent-readable note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Safe guidance for agents"
                                                value=${a0}
                                                onInput=${(m0)=>Y0(a.name,"agentNote",m0.target.value)}></textarea>
                                        </label>
                                        <button class="settings-keychain-save-btn" style="margin-top:20px" disabled=${!R0||i0} onClick=${()=>H0(a)}>
                                            ${i0?"Saving…":"Save notes"}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            ${P0&&N`
                                <tr class="settings-keychain-prompt-row" key=${a.name+"-pw"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">Master password:</span>
                                            <input ref=${c} type="password" autocomplete="off"
                                                placeholder="Enter keychain master password"
                                                class="settings-keychain-prompt-input"
                                                value=${X0?.masterPassword||""}
                                                onInput=${(m0)=>R((e0)=>({...e0,masterPassword:m0.target.value}))}
                                                onKeyDown=${(m0)=>{if(m0.key==="Enter")F0(a.name);if(m0.key==="Escape")R(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>F0(a.name)}
                                                disabled=${!X0?.masterPassword}>Unlock</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>R(null)}>Cancel</button>
                                            ${X0?.error&&N`<span class="settings-keychain-prompt-error">${X0.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${p0&&N`
                                <tr class="settings-keychain-prompt-row" key=${a.name+"-totp"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">TOTP code:</span>
                                            <input ref=${r} type="text" inputmode="numeric" autocomplete="one-time-code"
                                                maxlength="6" placeholder="000000"
                                                class="settings-keychain-prompt-input" style="width:90px;text-align:center;letter-spacing:0.15em"
                                                value=${X0?.totpCode||""}
                                                onInput=${(m0)=>R((e0)=>({...e0,totpCode:m0.target.value.replace(/\\D/g,"").slice(0,6)}))}
                                                onKeyDown=${(m0)=>{if(m0.key==="Enter")h(a.name);if(m0.key==="Escape")R(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>h(a.name)}
                                                disabled=${(X0?.totpCode||"").length<6}>Verify</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>R(null)}>Cancel</button>
                                            ${X0?.error&&N`<span class="settings-keychain-prompt-error">${X0.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${W0&&N`
                                <tr class="settings-keychain-reveal-row" key=${a.name+"-reveal"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel">
                                            ${X0.username&&N`
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
                            ${u0&&N`
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
    `}var hz;var mL=z_(()=>{k0();hz=["secret","token","password","basic"]});var cL={};$1(cL,{ToolsSection:()=>oz});function oz({toolsets:_,filter:$="",settingsData:j,mergeSettingsData:G}){let Y=_||[],[X,Z]=C(()=>{let F={};for(let B of Y)F[B.name]=!0;return F}),L=f((F)=>{Z((B)=>({...B,[F]:!B[F]}))},[]),V=j?.searchMatchMode||"or",q=f(async()=>{let F=V==="or"?"and":"or";try{let U=await(await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:F})})).json().catch(()=>({}));if(U?.ok&&U?.settings)G?.(U.settings)}catch(B){console.warn("[settings/tools] Failed to save search match mode.",B)}},[V,G]),K=$.toLowerCase(),Q=Z0(()=>{if(!K)return Y;return Y.map((F)=>{let B=F.tools.filter((U)=>U.name.toLowerCase().includes(K)||F.name.toLowerCase().includes(K)||(U.summary||"").toLowerCase().includes(K));return B.length>0?{...F,tools:B}:null}).filter(Boolean)},[Y,K]);if(Y.length===0)return N`<div class="settings-section"><p class="settings-hint">Tool data not available.</p></div>`;return N`
        <div class="settings-section">
            <div class="settings-search-options">
                <h4 style="margin:0 0 8px 0">Search</h4>
                <div class="settings-row">
                    <label>Match mode</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <input type="checkbox" checked=${V==="and"} onChange=${q} />
                        <span class="settings-hint" style="margin:0">
                            ${V==="or"?"Any keyword (OR) — results match at least one search term":"All keywords (AND) — results must match every search term"}
                        </span>
                    </div>
                </div>
            </div>
            ${Q.map((F)=>{let B=X[F.name]!==!1;return N`
                <div class="settings-toolset">
                    <div class="settings-toolset-header">
                        <label class="settings-toolset-toggle">
                            <input type="checkbox" checked=${B} onChange=${()=>L(F.name)} />
                            <span class="settings-toolset-icon">${pz[F.name]||dz}</span>
                            <strong>${F.name}</strong>
                        </label>
                        <span class="settings-hint" style="margin:0">${F.description}</span>
                    </div>
                    ${B&&N`<div class="settings-tool-list">${F.tools.map((U)=>N`
                        <div class="settings-tool-row">
                            <input type="checkbox" checked disabled />
                            <span class="settings-tool-name">${U.name}</span>
                            <span class="settings-tool-kind" title=${U.kind}>${nz[U.kind]||"?"}</span>
                            ${U.summary&&N`<span class="settings-tool-summary">${U.summary}</span>`}
                            <span class="settings-tool-source">${rz[U.name]||F.name}</span>
                        </div>
                    `)}</div>`}
                </div>
            `})}
            ${Q.length===0&&N`<p class="settings-hint">No tools match "${$}"</p>`}
            <p class="settings-hint">Tool activation is managed by the agent runtime. Group checkboxes collapse/expand; individual tools use <code>activate_tools</code>.</p>
        </div>
    `}var pz,rz,nz,dz;var hL=z_(()=>{k0();pz={core:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M7.5 10l2.5 2-2.5 2"/><path d="M12.5 15H16"/></svg>`,discovery:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,attachments:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`,"model-control":N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M9 15c.83.67 2 1 3 1s2.17-.33 3-1"/></svg>`,data:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,workspace:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,automation:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,remote:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,browser:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,ui:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,experiments:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v7l4.6 7.7A1 1 0 0 1 18.7 19H5.3a1 1 0 0 1-.9-1.3L9 10z"/><line x1="9" y1="3" x2="15" y2="3"/></svg>`,lifecycle:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`},rz={read:"pi-core",write:"pi-core",edit:"pi-core",bash:"pi-core",powershell:"pi-core",find:"pi-core",grep:"pi-core",ls:"pi-core",list_tools:"internal-tools",activate_tools:"tool-activation",reset_active_tools:"tool-activation",list_scripts:"runtime-scripts",attach_file:"file-attachments",read_attachment:"file-attachments",export_attachment:"file-attachments",get_model_state:"model-control",list_models:"model-control",switch_model:"model-control",switch_thinking:"model-control",messages:"messages-crud",introspect_sql:"sql-introspect",keychain:"keychain-tools",search_workspace:"workspace-search",refresh_workspace_index:"workspace-search",open_office_viewer:"office-viewer",office_read:"office-viewer",office_write:"office-viewer",open_workspace_file:"open-workspace-file",image_process:"image-processing",schedule_task:"scheduled-tasks",scheduled_tasks:"scheduled-tasks",bun_run:"bun-runner",exec_batch:"exec-batch",search_tool_output:"search-tool-output",ssh:"ssh",proxmox:"proxmox",portainer:"portainer",mcp:"mcp",cdp_browser:"cdp-browser",send_adaptive_card:"send-adaptive-card",send_dashboard_widget:"send-dashboard-widget",start_autoresearch:"autoresearch",stop_autoresearch:"autoresearch",autoresearch_status:"autoresearch",exit_process:"exit-process",env:"env-tools"},nz={"read-only":"\uD83D\uDD0D",mutating:"✏️",mixed:"\uD83D\uDD04"},dz=N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`});var lL={};$1(lL,{AddonsSection:()=>iz});function iz({setStatus:_,filter:$=""}){let[j,G]=C(null),[Y,X]=C(!0),[Z,L]=C(null),[V,q]=C(!1),[K,Q]=C({runtime:"",windowsNative:!1}),[F,B]=C([]),[U,H]=C([]);function D(){let W=new URLSearchParams;try{let y=(localStorage.getItem("piclaw_addons_catalog_url")||"").trim(),J=(localStorage.getItem("piclaw_addons_catalog_urls")||"").split(/\r?\n/).map((R)=>R.trim()).filter(Boolean),P=localStorage.getItem("piclaw_addons_repo_url");if(y)W.append("catalog_url",y);for(let R of J)W.append("catalog_url",R);if(P)W.set("repo_url",P)}catch(y){}let T=W.toString();return T?`?${T}`:""}let E=f(async()=>{try{let[W,T]=await Promise.all([fetch(`/agent/addons${D()}`),fetch("/agent/settings-data")]),y=await W.json();if(y.error)throw Error(y.error);G(y.addons||[]),B(y.sources||[]),H(y.failed_sources||[]);let J=await T.json().catch(()=>({})),P=typeof J?.runtimePlatform==="string"?J.runtimePlatform:"";Q({runtime:P,windowsNative:P==="win32"})}catch(W){G(null),_?.(String(W.message||W),"error")}finally{X(!1)}},[_]);g(()=>{E()},[]);let M=f(async(W)=>{if(Z)return;L({slug:W,action:"install"}),_?.(`Installing ${W}…`,"info");try{let y=await(await fetch(`/agent/addons/install${D()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:W})})).json();if(y.error){_?.(y.error,"error");return}q(!0);let J=[y.message,y.warning].filter(Boolean).join(" ");_?.(J||"Add-on installed.","success"),await E()}catch(T){_?.(String(T.message||T),"error")}finally{L(null)}},[Z,E,_]),z=f(async(W)=>{if(Z)return;L({slug:W,action:"remove"}),_?.(`Removing ${W}…`,"info");try{let y=await(await fetch(`/agent/addons/uninstall${D()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:W})})).json();if(y.error){_?.(y.error,"error");return}q(!0);let J=[y.message,y.warning].filter(Boolean).join(" ");_?.(J||"Add-on removed.","success"),await E()}catch(T){_?.(String(T.message||T),"error")}finally{L(null)}},[Z,E,_]),O=f(async()=>{if(Z)return;L({slug:null,action:"restart"}),_?.("Restarting piclaw…","info");try{let T=await(await fetch("/agent/addons/restart",{method:"POST"})).json();if(T.error){_?.(T.error,"error"),L(null);return}_?.(T.message||"Restarting piclaw…","success"),q(!1),(async(J=30,P=2000)=>{for(let R=0;R<J;R++){await new Promise((b)=>setTimeout(b,P));try{if((await fetch("/agent/addons",{signal:AbortSignal.timeout(3000)})).ok){await E(),L(null),_?.("Restart complete — add-ons refreshed.","success");return}}catch(b){}}L(null),_?.("Backend did not return in time. Reload the page manually.","warning")})()}catch(W){_?.(String(W.message||W),"error"),L(null)}},[Z,_,E]);if(Y)return N`<div class="settings-loading">Fetching add-ons\u2026</div>`;if(!j)return N`<div class="settings-section"><p class="settings-hint">Could not load add-ons.</p></div>`;let x=$.toLowerCase(),I=x?j.filter((W)=>W.slug.toLowerCase().includes(x)||(W.description||"").toLowerCase().includes(x)||(W.tags||[]).some((T)=>T.toLowerCase().includes(x))):j,A=Z?.slug||null,k=Z?Z.action==="remove"?`Removing ${Z.slug}…`:Z.action==="restart"?"Restarting piclaw…":`Installing ${Z.slug}…`:"";return N`
        <div class=${`settings-section settings-addon-panel${Z?" busy":""}`} aria-busy=${Z?"true":"false"}>
            <div class="settings-addon-toolbar">
                <div>
                    <p class="settings-hint">
                        ${F.length<=1?N`Catalog from <a href="https://github.com/rcarmo/piclaw-addons" target="_blank">rcarmo/piclaw-addons</a>.`:N`${F.length} catalog sources merged.`}
                        ${" "}Package-first install via Bun; restart required after install/uninstall.
                    </p>
                    ${U.length>0&&N`
                        <div class="settings-addon-error" role="alert">
                            Failed to fetch ${U.length} catalog source${U.length>1?"s":""}:
                            ${U.map((W)=>N` <code style="font-size:0.82em;word-break:break-all">${W}</code>`)}
                        </div>
                    `}
                    ${F.length>1&&N`
                        <details class="settings-hint" style="margin-top:4px">
                            <summary style="cursor:pointer">Active catalog sources (${F.length})</summary>
                            <ul style="margin:4px 0 0 16px;font-size:0.82em">
                                ${F.map((W)=>N`<li style="word-break:break-all"><code>${W}</code></li>`)}
                            </ul>
                        </details>
                    `}
                    ${K.windowsNative&&N`
                        <div class="settings-addon-error" role="alert">
                            Native Windows add-on installs are higher risk: Bun package installs, symlink cleanup, locked files, and restart timing can all be less predictable than in Linux/WSL. Prefer WSL or a container when possible.
                        </div>
                    `}
                </div>
            </div>
            ${Z&&N`
                <div class="settings-addon-panel-overlay" role="status" aria-live="polite" aria-label=${k}>
                    <div class="settings-addon-panel-overlay-card">
                        <div class="settings-spinner"></div>
                        <span>${k}</span>
                    </div>
                </div>
            `}
            <div class="settings-addon-list">
                ${I.map((W)=>{let T=(W.skills||[]).length>0,y=W.type==="extension",J=T&&y?"extension + skill":T?"skill":"extension",P=T&&!y?"settings-tag-skill":"",R=typeof W.homepage==="string"&&W.homepage.trim()?W.homepage.trim():"";return N`
                    <div class=${`settings-addon-card${W.installed?" installed":""}`}>
                        <div class="settings-addon-card-header">
                            ${R?N`<a class="settings-addon-name-link" href=${R} target="_blank" rel="noopener noreferrer">${W.slug}</a>`:N`<strong>${W.slug}</strong>`}
                            <span class=${`settings-tag settings-tag-type ${P}`}>${J}</span>
                            <span class="settings-addon-version">${W.installed?W.installedVersion||"?":W.version||""}</span>
                            ${W.installKind&&N`<span class="settings-tag">${W.installKind}</span>`}
                            ${W.hasUpdate&&N`<span class="settings-tag settings-tag-skill">\u2191 ${W.version}</span>`}
                            <div class="settings-addon-actions">
                                ${W.installed?N`
                                    ${W.hasUpdate&&N`<button class="settings-addon-btn settings-addon-btn-upgrade" disabled=${Boolean(Z)} onClick=${()=>M(W.slug)}>${A===W.slug?"…":"Update"}</button>`}
                                    <button class="settings-addon-btn settings-addon-btn-remove" disabled=${Boolean(Z)} onClick=${()=>z(W.slug)}>${A===W.slug?"…":"Remove"}</button>
                                `:N`
                                    <button class="settings-addon-btn settings-addon-btn-install" disabled=${Boolean(Z)} onClick=${()=>M(W.slug)}>${A===W.slug?"…":"Install"}</button>
                                `}
                            </div>
                        </div>
                        <div class="settings-addon-card-body">${W.description}</div>
                        <div class="settings-addon-card-footer">
                            <div class="settings-addon-tags">${(W.tags||[]).map((b)=>N`<span class="settings-tag">${b}</span>`)}${(W.skills||[]).map((b)=>N`<span class="settings-tag settings-tag-skill">\ud83d\udcdd ${b}</span>`)}</div>
                        </div>
                    </div>
                `})}
                ${I.length===0&&N`<p class="settings-hint">No add-ons match "${$}"</p>`}
            </div>
            ${V&&N`
                <div class="settings-addon-restart-notice" role="status" aria-live="polite">
                    <span>Extension changes are installed but inactive until piclaw restarts.</span>
                    <button class="settings-addon-btn settings-addon-btn-restart-now" type="button" disabled=${Boolean(Z)} onClick=${O}>Restart Now</button>
                </div>
            `}
        </div>
    `}var pL=z_(()=>{k0()});var jA={};function w9(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function e2(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function sz(_,$){try{return localStorage.getItem(_)||$}catch{return $}}function az(_,$){try{localStorage.setItem(_,$)}catch(j){}}function tz(_,$,j,G){try{return A$(localStorage.getItem(_),{fallback:$,min:j,max:G})}catch{return A$($,{fallback:$,min:j,max:G})}}function ez(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function _A(){let[_,$]=C(()=>w9("piclaw_vim_mode",!1)),[j,G]=C(()=>w9("piclaw_show_whitespace",!0)),[Y,X]=C(()=>w9("piclaw_md_live_preview",!0)),[Z,L]=C(()=>tz("piclaw_editor_font_size",13,10,24)),[V,q]=C(()=>sz("piclaw_editor_font_family","")),K=f((Q,F,B)=>{let U=!F;B(U),e2(Q,U)},[]);return N`
        <div class="settings-section">
            <h3>Editor</h3>
            <div class="settings-row">
                <label>Vim mode</label>
                <input type="checkbox" checked=${_}
                    onChange=${()=>{let Q=!_;$(Q),e2("piclaw_vim_mode",Q)}} />
            </div>
            <div class="settings-row">
                <label>Show whitespace</label>
                <input type="checkbox" checked=${j}
                    onChange=${()=>{let Q=!j;G(Q),e2("piclaw_show_whitespace",Q)}} />
            </div>
            <div class="settings-row">
                <label>Markdown live preview</label>
                <input type="checkbox" checked=${Y}
                    onChange=${()=>{let Q=!Y;X(Q),e2("piclaw_md_live_preview",Q)}} />
            </div>
            <div class="settings-row">
                <label>Font size (px)</label>
                <${m_}
                    label="editor font size"
                    value=${Z}
                    min=${10}
                    max=${24}
                    fallback=${13}
                    width="70px"
                    onChange=${(Q)=>{L(Q),ez("piclaw_editor_font_size",Q)}}
                />
            </div>
            <div class="settings-row">
                <label>Font family</label>
                <input type="text" value=${V}
                    onInput=${(Q)=>{let F=Q.target.value;q(F),az("piclaw_editor_font_family",F)}}
                    placeholder="monospace (default)" />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Editor changes are stored in local browser storage and take effect when you next open or reload a file tab.</p>
        </div>
    `}var $A;var rL=z_(()=>{k0();A5();f4();$A=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;i$({id:"editor",label:"Editor",icon:$A,component:_A,order:150})});var LA={};function nL(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function dL(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function GA(_,$,j,G){try{return A$(localStorage.getItem(_),{fallback:$,min:j,max:G})}catch{return A$($,{fallback:$,min:j,max:G})}}function YA(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function XA(){let[_,$]=C(()=>nL("piclaw_mindmap_auto_expand",!0)),[j,G]=C(()=>GA("piclaw_mindmap_node_spacing",40,20,100)),[Y,X]=C(()=>nL("piclaw_mindmap_animate",!0));return N`
        <div class="settings-section">
            <h3>Mind Map</h3>
            <div class="settings-row">
                <label>Auto-expand nodes</label>
                <input type="checkbox" checked=${_}
                    onChange=${()=>{let Z=!_;$(Z),dL("piclaw_mindmap_auto_expand",Z)}} />
            </div>
            <div class="settings-row">
                <label>Node spacing (px)</label>
                <${m_}
                    label="node spacing"
                    value=${j}
                    min=${20}
                    max=${100}
                    fallback=${40}
                    width="70px"
                    onChange=${(Z)=>{G(Z),YA("piclaw_mindmap_node_spacing",Z)}}
                />
            </div>
            <div class="settings-row">
                <label>Animate transitions</label>
                <input type="checkbox" checked=${Y}
                    onChange=${()=>{let Z=!Y;X(Z),dL("piclaw_mindmap_animate",Z)}} />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Opens <code>.mindmap.yaml</code> files. Changes take effect on the next map open.</p>
        </div>
    `}var ZA;var oL=z_(()=>{k0();A5();f4();ZA=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><line x1="9.5" y1="9.5" x2="6.5" y2="6.5"/><line x1="14.5" y1="9.5" x2="17.5" y2="6.5"/><line x1="9.5" y1="14.5" x2="6.5" y2="17.5"/><line x1="14.5" y1="14.5" x2="17.5" y2="17.5"/></svg>`;i$({id:"mindmap",label:"Mind Map",icon:ZA,component:XA,order:170})});var QA={};function I9(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function x9(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function C9(_,$){try{return localStorage.getItem(_)||$}catch{return $}}function P9(_,$){try{localStorage.setItem(_,$)}catch(j){}}function qA(){let[_,$]=C(()=>I9("piclaw_dev_mode",!1)),[j,G]=C(()=>C9("piclaw_addons_catalog_url","")),[Y,X]=C(()=>C9("piclaw_addons_catalog_urls","")),[Z,L]=C(()=>C9("piclaw_addons_repo_url","")),[V,q]=C(()=>I9("piclaw_debug_sse",!1)),[K,Q]=C(()=>I9("piclaw_debug_tool_calls",!1)),F=f(()=>{let B=!_;$(B),x9("piclaw_dev_mode",B)},[_]);return N`
        <div class="settings-section">
            <h3>Developer</h3>
            <div class="settings-row">
                <label>Developer mode</label>
                <input type="checkbox" checked=${_} onChange=${F} />
            </div>

            <p class="settings-hint settings-local-only-hint">This browser only. Developer-mode toggles and add-on catalog overrides are stored in local browser storage.</p>

            ${_&&N`
                <h3 style="margin-top:16px">Add-on Sources</h3>
                <div class="settings-row">
                    <label>Catalog URL</label>
                    <input type="text" value=${j}
                        onInput=${(B)=>{let U=B.target.value;G(U),P9("piclaw_addons_catalog_url",U)}}
                        placeholder="https://raw.githubusercontent.com/.../catalog.json" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Primary add-on catalog URL. Leave empty to use the default (<code>rcarmo/piclaw-addons</code>).</p>
                <div class="settings-row" style="align-items:flex-start;">
                    <label>Additional catalog URLs</label>
                    <textarea
                        value=${Y}
                        onInput=${(B)=>{let U=B.target.value;X(U),P9("piclaw_addons_catalog_urls",U)}}
                        placeholder="One URL per line\nhttps://example.com/catalog.json"
                        style="max-width:400px; min-height:86px; resize:vertical;"
                    ></textarea>
                </div>
                <p class="settings-hint" style="margin-top:0">Fetched in addition to the primary/default catalog. One URL per line.</p>
                <div class="settings-row">
                    <label>Repo URL</label>
                    <input type="text" value=${Z}
                        onInput=${(B)=>{let U=B.target.value;L(U),P9("piclaw_addons_repo_url",U)}}
                        placeholder="https://github.com/.../piclaw-addons.git" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Override the git repo used for <code>bun add</code> installs. Leave empty for default.</p>

                <h3 style="margin-top:16px">Debug</h3>
                <div class="settings-row">
                    <label>Log SSE events</label>
                    <input type="checkbox" checked=${V}
                        onChange=${()=>{let B=!V;q(B),x9("piclaw_debug_sse",B)}} />
                </div>
                <div class="settings-row">
                    <label>Log tool calls</label>
                    <input type="checkbox" checked=${K}
                        onChange=${()=>{let B=!K;Q(B),x9("piclaw_debug_tool_calls",B)}} />
                </div>
                <p class="settings-hint">Debug flags take effect on next page reload.</p>
            `}
        </div>
    `}var VA;var iL=z_(()=>{k0();A5();VA=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`;i$({id:"developer",label:"Developer",icon:VA,component:qA,order:900})});var _q={};$1(_q,{openSettingsDialog:()=>CA,SettingsDialogContent:()=>eL,SettingsDialog:()=>xA});function y6(_){T6.push({ts:performance.now(),label:_})}function KA(){if(!T6.length)return;let _=T6[0].ts,$=T6.map((j)=>`+${(j.ts-_).toFixed(1)}ms ${j.label}`);console.info(`[settings-dialog perf]
`+$.join(`
`));try{window.__piclawSettingsPerfLog=$}catch(j){}try{fetch("/agent/client-perf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:"settings-dialog",lines:$})}).catch((j)=>{})}catch(j){}T6.length=0}function NA(_){let $=j8.get(_);if($)return Promise.resolve($);let j=_8.get(_);if(j)return j;let G=BA[_]().then((Y)=>{return j8.set(_,Y),_8.delete(_),Y}).catch((Y)=>{throw _8.delete(_),Y});return _8.set(_,G),G}function $8(_="Loading…"){return N`
        <div class="settings-loading settings-loading-pane" role="status" aria-live="polite">
            <span class="settings-spinner"></span>
            <span>${_}</span>
        </div>
    `}function eL({onClose:_}){y6("SettingsDialogContent-render-start");let[$,j]=C(()=>q9()||"general"),[G,Y]=C(sL),[X,Z]=C(null),[L,V]=C(""),[,q]=C(0),[K,Q]=C(()=>Object.fromEntries(j8.entries())),[F,B]=C(null),[U,H]=C({compact:!1,narrow:!1}),D=u(null),E=u(null);g(()=>{y6("SettingsDialogContent-mounted"),KA()},[]),g(()=>{let J=(P)=>{if(P.key==="Escape")_()};return window.addEventListener("keydown",J),()=>window.removeEventListener("keydown",J)},[_]),g(()=>{let J=(P)=>{let R=typeof P?.detail?.section==="string"?P.detail.section.trim():"";if(R)j(R),V("")};return window.addEventListener("piclaw:open-settings",J),()=>window.removeEventListener("piclaw:open-settings",J)},[]),g(()=>{let J=()=>q((P)=>P+1);return window.addEventListener("piclaw:settings-panes-changed",J),()=>window.removeEventListener("piclaw:settings-panes-changed",J)},[]),g(()=>{fetch("/agent/settings-data").then((J)=>J.json()).then((J)=>{sL=J,Y(J)}).catch(()=>Y({}))},[]),g(()=>{let J=E.current;if(!J)return;let P=()=>{let R=J.clientWidth||0;H((b)=>{let c={compact:R>0&&R<=860,narrow:R>0&&R<=720};return b.compact===c.compact&&b.narrow===c.narrow?b:c})};if(P(),typeof ResizeObserver==="function"){let R=new ResizeObserver(()=>P());return R.observe(J),()=>R.disconnect()}return window.addEventListener("resize",P),()=>window.removeEventListener("resize",P)},[]);let M=[...tL].sort((J,P)=>(J.order??500)-(P.order??500)),O=hZ().map((J)=>({id:J.id,label:J.label,icon:J.icon,searchable:J.searchable||!1,placeholder:J.searchPlaceholder,order:J.order??500,isExtension:!0,component:J.component})).sort(V9),x=[...M,...O],I=x.find((J)=>J.id===$)||tL.find((J)=>J.id===$);g(()=>{if(I?.searchable)requestAnimationFrame(()=>D.current?.focus())},[$]),g(()=>{if(I?.isExtension){B(null);return}let J=!1;if(K[$]){B(null);return}return B($),NA($).then((P)=>{if(J)return;Q((R)=>R?.[$]?R:{...R||{},[$]:P})}).catch((P)=>{if(J)return;console.error(`[settings-dialog] Failed to lazy-load section "${$}".`,P)}).finally(()=>{if(!J)B((P)=>P===$?null:P)}),()=>{J=!0}},[$,I?.isExtension,K]);let A=f((J,P="info")=>{Z(J?{text:J,type:P}:null)},[]),k=f((J)=>{j(J),V("");let P=FA[J];if(P&&!aL.has(J))aL.add(J),P().then(()=>q((R)=>R+1)).catch((R)=>{})},[]),W=f((J)=>{Y((P)=>({...P||{},...J||{}}))},[]),T=()=>{if(I?.isExtension){if(!I.component)return $8("Loading pane…");let P=I.component;return N`<${P} filter=${L} />`}let J=K[$];if(!J||F===$)return $8(`Loading ${I?.label||"settings"}…`);switch($){case"general":return N`<${J} settingsData=${G} setStatus=${A} mergeSettingsData=${W} />`;case"sessions":return N`<${J} settingsData=${G} setStatus=${A} mergeSettingsData=${W} />`;case"compaction":return N`<${J} settingsData=${G} setStatus=${A} mergeSettingsData=${W} />`;case"keyboard":return N`<${J} filter=${L} setStatus=${A} />`;case"workspace":return N`<${J} settingsData=${G} setStatus=${A} mergeSettingsData=${W} />`;case"environment":return N`<${J} settingsData=${G} filter=${L} setStatus=${A} mergeSettingsData=${W} />`;case"providers":return N`<${J} providers=${G?.providers} setStatus=${A} />`;case"models":return N`<${J} filter=${L} />`;case"theme":return N`<${J} themes=${G?.themes} colorKeys=${G?.colorKeys} settingsData=${G} setStatus=${A} mergeSettingsData=${W} />`;case"scheduled-tasks":return N`<${J} filter=${L} setStatus=${A} />`;case"quick-actions":return N`<${J} filter=${L} setStatus=${A} mergeSettingsData=${W} />`;case"keychain":return N`<${J} filter=${L} />`;case"tools":return N`<${J} toolsets=${G?.toolsets} filter=${L} settingsData=${G} mergeSettingsData=${W} />`;case"addons":return N`<${J} setStatus=${A} filter=${L} />`;default:return $8("Loading settings…")}},y=!I;return y6("SettingsDialogContent-render-end"),N`
        <div class="settings-dialog-backdrop" onClick=${(J)=>{if(J.target===J.currentTarget)_()}}>
            <div ref=${E} data-testid="settings-dialog" class=${`settings-dialog${U.compact?" settings-dialog-compact":""}${U.narrow?" settings-dialog-narrow":""}`}>
                <div class="settings-dialog-header">
                    <span class="settings-dialog-title">Settings</span>
                    ${I?.searchable&&N`
                        <input ref=${D} type="text" class="settings-header-filter"
                            placeholder=${I.placeholder||"Filter…"}
                            value=${L} onInput=${(J)=>V(J.target.value)} />
                    `}
                    <button class="settings-dialog-close" onClick=${_} title="Close (Esc)">✕</button>
                </div>
                <div class="settings-dialog-body">
                    <nav class="settings-nav">
                        ${x.map((J,P)=>{let R=P>0&&!x[P-1].isExtension,b=J.isExtension&&R;return N`
                                ${b&&N`<div class="settings-nav-separator"></div>`}
                                <button class=${`settings-nav-item ${J.id===$?"active":""}`} onClick=${()=>k(J.id)}>
                                    <span class="settings-nav-icon">${J.icon}</span>
                                    <span class="settings-nav-label">${J.label}</span>
                                </button>
                            `})}
                    </nav>
                    <main class="settings-content">
                        ${y?$8("Loading settings…"):T()}
                    </main>
                </div>
                ${X&&N`
                    <div class=${`settings-status-bar settings-status-bar-${X.type}`}>
                        ${X.type==="info"&&N`<span class="settings-spinner"></span>`}
                        <span>${X.text}</span>
                        ${X.type!=="info"&&N`<button class="settings-status-dismiss" onClick=${()=>Z(null)}>✕</button>`}
                    </div>
                `}
            </div>
        </div>
    `}function xA(){let[_,$]=C(!1);if(g(()=>{let j=(Y)=>{let X=z5(Y?.detail?.section);if(X)try{window.__piclawSettingsRequestedSection=X}catch(Z){}$(!0)};window.addEventListener("piclaw:open-settings",j);let G=c2();if(G.open){if(G.section)try{window.__piclawSettingsRequestedSection=G.section}catch(Y){}$(!0)}return()=>window.removeEventListener("piclaw:open-settings",j)},[]),!_)return null;return N`<${o$} className="settings-portal"><${eL} onClose=${()=>$(!1)} /><//>`}function CA(_={}){s1(_)}var T6,sL=null,j8,_8,BA,FA,aL,UA,EA,DA,HA,WA,OA,zA,AA,JA,kA,MA,TA,yA,wA,IA,tL;var $q=z_(()=>{k0();h2();A5();tZ();T6=[];y6("module-eval-start");y6("imports-done");j8=new Map,_8=new Map;j8.set("general",F9);BA={general:()=>Promise.resolve(F9),sessions:()=>Promise.resolve().then(() => ($L(),_L)).then((_)=>_.SessionsSection),recordings:()=>Promise.resolve().then(() => (GL(),jL)).then((_)=>_.RecordingsSection),compaction:()=>Promise.resolve().then(() => (XL(),YL)).then((_)=>_.CompactionSection),keyboard:()=>Promise.resolve().then(() => (BL(),KL)).then((_)=>_.KeyboardSection),workspace:()=>Promise.resolve().then(() => (HL(),DL)).then((_)=>_.WorkspaceSection),environment:()=>Promise.resolve().then(() => (OL(),WL)).then((_)=>_.EnvironmentSection),providers:()=>Promise.resolve().then(() => (AL(),zL)).then((_)=>_.ProvidersSection),models:()=>Promise.resolve().then(() => (kL(),JL)).then((_)=>_.ModelsSection),theme:()=>Promise.resolve().then(() => (yL(),TL)).then((_)=>_.ThemeSection),"scheduled-tasks":()=>Promise.resolve().then(() => (xL(),IL)).then((_)=>_.ScheduledTasksSection),"quick-actions":()=>Promise.resolve().then(() => (bL(),uL)).then((_)=>_.QuickActionsSection),keychain:()=>Promise.resolve().then(() => (mL(),vL)).then((_)=>_.KeychainSection),tools:()=>Promise.resolve().then(() => (hL(),cL)).then((_)=>_.ToolsSection),addons:()=>Promise.resolve().then(() => (pL(),lL)).then((_)=>_.AddonsSection)},FA={"editor-settings":()=>Promise.resolve().then(() => (rL(),jA)).then(()=>{}),"mindmap-settings":()=>Promise.resolve().then(() => (oL(),LA)).then(()=>{}),developer:()=>Promise.resolve().then(() => (iL(),QA)).then(()=>{})},aL=new Set;UA=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M8.5 5.9L9.6 2.3h4.8l1.1 3.6 3.7-.8 2.4 4.1-2.6 2.8 2.6 2.8-2.4 4.1-3.7-.8-1.1 3.6H9.6l-1.1-3.6-3.7.8-2.4-4.1L5 12 2.4 9.2l2.4-4.1z"/></svg>`,EA=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,DA=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="12" r="2.2"/><path d="m13 10 4-2.5v9L13 14z"/></svg>`,HA=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><polyline points="3 4 3 10 9 10"/><path d="M12 7v5l3 3"/></svg>`,WA=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,OA=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/><path d="M8 7v10"/><path d="M16 7v10"/></svg>`,zA=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01"/><path d="M10 9h.01"/><path d="M14 9h.01"/><path d="M18 9h.01"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M7 17h10"/></svg>`,AA=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,JA=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="9" width="14" height="10" rx="2"/><circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none"/><line x1="12" y1="9" x2="12" y2="5"/><circle cx="12" cy="4" r="1.5"/></svg>`,kA=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2 0-.53-.21-1.01-.55-1.36-.34-.36-.55-.84-.55-1.37 0-1.1.9-2 2-2h2.36c3.08 0 5.64-2.56 5.64-5.64C22.9 5.85 18.05 2 12 2z"/><circle cx="8" cy="10" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="16" cy="10" r="1.5" fill="currentColor" stroke="none"/></svg>`,MA=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/><path d="M7 3.5 4 6"/><path d="m17 3.5 3 2.5"/></svg>`,TA=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,yA=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,wA=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="14" r="3"/><path d="M11 14h9"/><path d="M16 14v-2"/><path d="M19 14v2"/></svg>`,IA=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,tL=[{id:"general",label:"General",icon:UA,searchable:!1,order:10},{id:"sessions",label:"Sessions",icon:EA,searchable:!1,order:12},{id:"recordings",label:"Recordings",icon:DA,searchable:!0,placeholder:"Filter recordings…",order:12.5},{id:"compaction",label:"Compaction",icon:HA,searchable:!1,order:13},{id:"keyboard",label:"Keyboard",icon:zA,searchable:!0,placeholder:"Filter shortcuts…",order:14},{id:"workspace",label:"Workspace",icon:WA,searchable:!1,order:15},{id:"environment",label:"Environment",icon:OA,searchable:!0,placeholder:"Filter environment…",order:16},{id:"providers",label:"Providers",icon:AA,searchable:!1,order:20},{id:"models",label:"Models",icon:JA,searchable:!0,placeholder:"Filter models…",order:30},{id:"theme",label:"Appearance",icon:kA,searchable:!1,order:40},{id:"scheduled-tasks",label:"Scheduled Tasks",icon:MA,searchable:!0,placeholder:"Filter scheduled tasks…",order:65},{id:"quick-actions",label:"Quick Actions",icon:yA,searchable:!0,placeholder:"Filter quick actions…",order:70},{id:"keychain",label:"Keychain",icon:wA,searchable:!0,placeholder:"Filter entries…",order:75},{id:"tools",label:"Tools",icon:TA,searchable:!0,placeholder:"Filter tools…",order:80},{id:"addons",label:"Add-ons",icon:IA,searchable:!0,placeholder:"Filter add-ons…",order:90}]});k0();class bG{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let G of this.extensions.values()){if(G.placement!=="tabs")continue;if(!G.canHandle)continue;try{let Y=G.canHandle(_);if(Y===!1||Y===0)continue;let X=Y===!0?0:typeof Y==="number"?Y:0;if(X>j)j=X,$=G}catch(Y){console.warn(`[PaneRegistry] canHandle() error for "${G.id}":`,Y)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var q_=new bG;var q2=null,k3=null;function uU(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function vG(){if(k3)return Promise.resolve(k3);if(!q2)q2=import(uU()).then((_)=>{return k3=_,_}).catch((_)=>{throw q2=null,_});return q2}class mG{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedContentChangeCb=null;queuedContentChangeUnsubscribe=null;queuedViewState=null;queuedDiffMode=void 0;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await vG();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedContentChangeCb&&typeof this.real.onContentChange==="function")this.queuedContentChangeUnsubscribe=this.real.onContentChange(this.queuedContentChangeCb)||null;if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState));if(this.queuedDiffMode!==void 0&&typeof this.real.setDiffMode==="function")this.real.setDiffMode(this.queuedDiffMode)}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null,this.queuedContentChangeCb=null,this.queuedContentChangeUnsubscribe?.(),this.queuedContentChangeUnsubscribe=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}beforeDetachFromHost(_){return this.real?.beforeDetachFromHost?.(_)}afterAttachToHost(_){return this.real?.afterAttachToHost?.(_)}moveHost(_,$){return this.real?.moveHost?.(_,$)??!1}exportHostTransferState(){return this.real?.exportHostTransferState?.()??null}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}onContentChange(_){return this.queuedContentChangeUnsubscribe?.(),this.queuedContentChangeCb=_,this.queuedContentChangeUnsubscribe=this.real?.onContentChange?.(_)||null,()=>{if(this.queuedContentChangeCb===_)this.queuedContentChangeCb=null;this.queuedContentChangeUnsubscribe?.(),this.queuedContentChangeUnsubscribe=null}}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}setDiffMode(_){this.queuedDiffMode=_,this.real?.setDiffMode?.(_)}}var M3={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new mG(_,$)}};function T3(){vG().catch((_)=>{console.warn("[editor-loader] Background preload failed; the editor will retry on demand.",_)})}function cG(_){try{return typeof _?.crypto?.randomUUID==="function"?_.crypto.randomUUID():null}catch($){return null}}function V2(_,$){try{return _?.removeItem?.($),!0}catch(j){return!1}}var hG="piclaw:editor-popout:",bU=300000;function lG(_){try{return _?.localStorage??null}catch{return null}}function vU(_=Date.now()){return`editor-popout-${_.toString(36)}-${Math.random().toString(36).slice(2,10)}`}function pG(_){return typeof _==="string"?_.trim():""}function rG(_){return(typeof _==="string"?_.trim():"")||null}function nG(_){return typeof _==="string"?_:void 0}function dG(_){if(_===void 0)return;if(typeof _!=="string")return null;return _.trim()||null}function oG(_){if(!_||typeof _!=="object")return null;let $=_,j={};if(typeof $.cursorLine==="number"&&Number.isFinite($.cursorLine))j.cursorLine=$.cursorLine;if(typeof $.cursorCol==="number"&&Number.isFinite($.cursorCol))j.cursorCol=$.cursorCol;if(typeof $.scrollTop==="number"&&Number.isFinite($.scrollTop))j.scrollTop=$.scrollTop;return Object.keys(j).length>0?j:null}function Z5(_,$=globalThis){let j=$?.window??$;if(!j?.location?.href)return null;try{let G=new URL(j.location.href),Y=G.searchParams.get(_)?.trim()||"";if(!Y)return null;return G.searchParams.delete(_),j.history?.replaceState?.(j.history.state,j.document?.title||"",G.toString()),Y}catch{return null}}function mU(_,$=globalThis,j=Date.now()){let G=lG($),Y=pG(_?.path);if(!G||!Y)return null;let X={path:Y,content:nG(_?.content),mtime:dG(_?.mtime),paneOverrideId:rG(_?.paneOverrideId),viewState:oG(_?.viewState),capturedAt:j};if(!Boolean(X.content!==void 0||X.paneOverrideId||X.viewState||X.mtime))return null;let L=vU(j);try{return G.setItem(`${hG}${L}`,JSON.stringify(X)),L}catch{return null}}function y3(_,$=globalThis,j=Date.now()){let G=typeof _==="string"?_.trim():"",Y=lG($);if(!G||!Y)return null;let X=`${hG}${G}`,Z="";try{Z=Y.getItem(X)||""}catch{return null}if(!Z)return null;V2(Y,X);try{let L=JSON.parse(Z),V=typeof L?.capturedAt==="number"&&Number.isFinite(L.capturedAt)?L.capturedAt:j;if(V+bU<j)return null;let q=pG(L?.path);if(!q)return null;return{path:q,content:nG(L?.content),mtime:dG(L?.mtime),paneOverrideId:rG(L?.paneOverrideId),viewState:oG(L?.viewState),capturedAt:V}}catch{return null}}function Q2(_,$=globalThis,j=Date.now()){let G=mU(_,$,j);return G?{editor_popout:G}:null}function f1(_){try{return _(),!0}catch($){return!1}}function iG(_){let{ownerWindow:$,themeChangeListener:j,mediaQuery:G,mediaQueryListener:Y,dockResizeListener:X,windowResizeListener:Z,themeObserver:L,resizeObserver:V}=_;f1(()=>{if(j)$?.removeEventListener?.("piclaw-theme-change",j)}),f1(()=>{if(G&&Y){if(G.removeEventListener)G.removeEventListener("change",Y);else if(G.removeListener)G.removeListener(Y)}}),f1(()=>{if(X)$?.removeEventListener?.("dock-resize",X);if(Z)$?.removeEventListener?.("resize",Z)}),f1(()=>{L?.disconnect?.()}),f1(()=>{V?.disconnect?.()})}function sG(_){_.syncHostLayout(),f1(()=>{_.terminal?.renderer?.remeasureFont?.()}),f1(()=>{_.fitAddon?.fit?.()}),_.sendResize()}function aG(_){let{resizeFrame:$=0,cancelAnimationFrameFn:j=cancelAnimationFrame,socket:G,fitAddon:Y,terminal:X,termEl:Z}=_;if($)f1(()=>{j($)});return f1(()=>{G?.close?.()}),f1(()=>{Y?.dispose?.()}),f1(()=>{X?.dispose?.()}),Z?.remove?.(),0}function p1(_){try{return _(),!0}catch($){return!1}}function tG(_){let{termEl:$,bodyEl:j,terminal:G,theme:Y,themeChanged:X=!1,socket:Z,resize:L}=_;if(p1(()=>{if($?.style)$.style.backgroundColor=Y.background,$.style.color=Y.foreground;if(j?.style)j.style.backgroundColor=Y.background,j.style.color=Y.foreground;let V=j?.querySelector?.(".terminal-live-host");if(V&&typeof V==="object"&&"style"in V)V.style.backgroundColor=Y.background,V.style.color=Y.foreground;let q=j?.querySelector?.("canvas");if(q&&typeof q==="object"&&"style"in q)q.style.backgroundColor=Y.background,q.style.color=Y.foreground}),p1(()=>{if(G?.options)G.options.theme=Y}),X)p1(()=>{G?.reset?.()});p1(()=>{G?.renderer?.setTheme?.(Y),G?.renderer?.clear?.()}),p1(()=>{G?.loadFonts?.()}),p1(()=>{G?.renderer?.remeasureFont?.()}),p1(()=>{if(G?.wasmTerm&&G?.renderer?.render)G.renderer.render(G.wasmTerm,!0,G.viewportY||0,G),G.renderer.render(G.wasmTerm,!1,G.viewportY||0,G)}),p1(()=>{L?.()}),p1(()=>{if(X&&Z?.readyState===1)Z.send?.(JSON.stringify({type:"input",data:"\f"}))}),p1(()=>{G?.refresh?.()})}var cU="/static/js/vendor/ghostty-web.js",hU="/static/js/vendor/ghostty-vt.wasm",q5="piclaw://terminal",lU='FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',pU='400 13px "FiraCode Nerd Font Mono"',rU='700 13px "FiraCode Nerd Font Mono"',YY="x-piclaw-terminal-client",eG="piclaw_terminal_client",nU={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},dU={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},K2=null,w3=null;function I3(_){if(!_)return"";let $=String(_.code||"").trim().toLowerCase();if($)return $;let j=String(_.key||"").trim().toLowerCase();if(!j)return"";if(j.length===1&&/[a-z]/.test(j))return`key${j}`;if(j==="insert")return"insert";return j}function oU(_){if(!_)return!1;if(!_.shiftKey||_.altKey)return!1;if(!(_.ctrlKey||_.metaKey))return!1;return I3(_)==="keyc"}function iU(_){if(!_)return!1;if(_.shiftKey&&!_.ctrlKey&&!_.metaKey&&!_.altKey&&I3(_)==="insert")return!0;if(!_.shiftKey||_.altKey)return!1;if(!(_.ctrlKey||_.metaKey))return!1;return I3(_)==="keyv"}async function sU(_=typeof navigator<"u"?navigator:null){let $=_?.clipboard?.readText;if(typeof $!=="function")return null;try{let j=await $.call(_.clipboard);return typeof j==="string"?j:null}catch(j){return console.debug("[terminal-pane] Clipboard read failed.",j),null}}function aU(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function tU(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL(hU,window.location.origin).href,G=(Y,X)=>{let Z=Y instanceof Request?Y.url:Y instanceof URL?Y.href:String(Y);if(!aU(Z))return $(Y,X);if(Y instanceof Request)return $(new Request(j,Y));return $(j,X)};globalThis.fetch=G;try{return await _()}finally{globalThis.fetch=$}}async function eU(){let $=await import(new URL(cU,window.location.origin).href);if(!K2)K2=tU(()=>Promise.resolve($.init?.())).catch((j)=>{throw K2=null,j});return await K2,$}async function _E(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!w3)w3=Promise.allSettled([document.fonts.load(pU),document.fonts.load(rU),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await w3}function _Y(_=typeof window<"u"?window:null){try{if(typeof _?.crypto?.randomUUID==="function")return _.crypto.randomUUID()}catch($){console.debug("[terminal-pane] Failed to generate crypto-backed terminal client token; falling back.",$)}return`terminal-client-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function C3(_=typeof window<"u"?window:null){if(!_)return null;try{let $=_.localStorage,j=typeof $?.getItem==="function"?String($.getItem(eG)||"").trim():"";if(j)return j;let G=_Y(_);return $?.setItem?.(eG,G),G}catch($){return _Y(_)}}async function $E(_=C3()){let $=await fetch("/terminal/session",{method:"GET",credentials:"same-origin",headers:_?{[YY]:_}:void 0}),j=await $.json().catch(()=>({}));if(!$.ok)throw Error(j?.error||`HTTP ${$.status}`);return j}async function jE(_=C3()){let $=await fetch("/terminal/handoff",{method:"POST",credentials:"same-origin",headers:_?{[YY]:_}:void 0}),j=await $.json().catch(()=>({}));if(!$.ok)throw Error(j?.error||`HTTP ${$.status}`);return typeof j?.handoff?.token==="string"&&j.handoff.token.trim()?j.handoff.token.trim():null}function GE(_,$=null,j=C3()){let G=window.location.protocol==="https:"?"wss:":"ws:",Y=new URL(`${G}//${window.location.host}${_}`);if($)Y.searchParams.set("handoff",String($));if(j)Y.searchParams.set("client",String(j));return Y.toString()}function YE(_=typeof window<"u"?window:null,$=typeof document<"u"?document:null){if(!_||!$)return!1;let{documentElement:j,body:G}=$,Y=j?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(Y==="dark")return!0;if(Y==="light")return!1;if(j?.classList?.contains("dark")||G?.classList?.contains("dark"))return!0;if(j?.classList?.contains("light")||G?.classList?.contains("light"))return!1;return Boolean(_.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function E4(_,$="",j=typeof document<"u"?document:null){if(!j)return $;return getComputedStyle(j.documentElement).getPropertyValue(_)?.trim()||$}function L5(_){let $=String(_||"").trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(/^[0-9a-fA-F]{3}$/.test(j)||/^[0-9a-fA-F]{6}$/.test(j)){let Y=j.length===3?j.split("").map((Z)=>Z+Z).join(""):j,X=parseInt(Y,16);return{r:X>>16&255,g:X>>8&255,b:X&255}}let G=$.match(/rgba?\(\s*(\d+)[,\s]\s*(\d+)[,\s]\s*(\d+)/i);if(G)return{r:parseInt(G[1],10),g:parseInt(G[2],10),b:parseInt(G[3],10)};return null}function $Y(_){let $=(j)=>{let G=j/255;return G<=0.03928?G/12.92:Math.pow((G+0.055)/1.055,2.4)};return 0.2126*$(_.r)+0.7152*$(_.g)+0.0722*$(_.b)}function o5(_,$){let j=$Y(_),G=$Y($),Y=Math.max(j,G),X=Math.min(j,G);return(Y+0.05)/(X+0.05)}function XY(_){let $=L5(_);if(!$)return"#ffffff";let j={r:255,g:255,b:255},G={r:0,g:0,b:0};return o5($,j)>=o5($,G)?"#ffffff":"#000000"}function B2(_){let $=(j)=>Math.max(0,Math.min(255,Math.round(j||0)));return`#${[_.r,_.g,_.b].map((j)=>$(j).toString(16).padStart(2,"0")).join("")}`}function jY(_,$,j){let G=Math.max(0,Math.min(1,Number.isFinite(j)?j:0));return{r:_.r+($.r-_.r)*G,g:_.g+($.g-_.g)*G,b:_.b+($.b-_.b)*G}}function Y1(_,$,j=4.5){let G=L5(_),Y=L5($);if(!G||!Y)return $;if(o5(G,Y)>=j)return B2(Y);let X=L5(XY(_));if(!X)return B2(Y);let Z=X,L=1,V=0,q=1;for(let F=0;F<14;F+=1){let B=(V+q)/2,U=jY(Y,X,B);if(o5(G,U)>=j)Z=U,L=B,q=B;else V=B}let K=B2(Z),Q=L5(K);while(Q&&o5(G,Q)<j&&L<1)L=Math.min(1,L+0.01),K=B2(jY(Y,X,L)),Q=L5(K);return K}function XE(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function GY(_=typeof window<"u"?window:null,$=typeof document<"u"?document:null){let j=YE(_,$),G=j?dU:nU,Y=E4("--bg-primary",j?"#000000":"#ffffff",$),X=E4("--text-primary",j?"#e7e9ea":"#0f1419",$),Z=Y1(Y,X||XY(Y),7),L=E4("--accent-color","#1d9bf0",$),V=E4("--danger-color",j?"#ff7b72":"#cf222e",$),q=E4("--success-color",j?"#7ee787":"#1a7f37",$),K=E4("--bg-hover",j?"#1d1f23":"#e8ebed",$),Q=E4("--accent-soft-strong",XE(L,j?"47":"33"),$);return{background:Y,foreground:Z,cursor:Y1(Y,L,3),cursorAccent:Y,selectionBackground:Q,selectionForeground:Z,black:Y1(Y,K,3),red:Y1(Y,V,4.5),green:Y1(Y,q,4.5),yellow:Y1(Y,G.yellow,4.5),blue:Y1(Y,L,4.5),magenta:Y1(Y,G.magenta,4.5),cyan:Y1(Y,G.cyan,4.5),white:Z,brightBlack:Y1(Y,G.brightBlack,3),brightRed:Y1(Y,G.brightRed,4.5),brightGreen:Y1(Y,G.brightGreen,4.5),brightYellow:Y1(Y,G.brightYellow,4.5),brightBlue:Y1(Y,G.brightBlue,4.5),brightMagenta:Y1(Y,G.brightMagenta,4.5),brightCyan:Y1(Y,G.brightCyan,4.5),brightWhite:Z}}function ZY(_){let $=_?.activeElement;if(!$||$===_?.body||$===_?.documentElement)return!1;if(typeof $.blur!=="function")return!1;return $.blur(),!0}function x3(_,$){let j=[_?.inputElement,_?.textarea,_?.container,$,$?.querySelector?.("textarea")].filter((G,Y,X)=>Boolean(G)&&X.indexOf(G)===Y);for(let G of j)try{let Y=G.ownerDocument?.defaultView||window,X=typeof Y.CompositionEvent==="function"?new Y.CompositionEvent("compositionend",{data:""}):new Y.Event("compositionend");G.dispatchEvent?.(X)}catch(Y){console.debug("[terminal-pane] Failed to dispatch best-effort IME composition reset.",Y)}if(_&&typeof _==="object")_.isComposing=!1,_.pendingKeyAfterComposition=null,_.compositionJustEnded=!1}function ZE(_){if(ZY(_.ownerDocument),x3(_.terminal,_.terminalHost||null),typeof _.terminal?.focus==="function")_.terminal.focus();else _.termEl?.focus?.();x3(_.terminal,_.terminalHost||null)}class P3{container;ownerDocument;ownerWindow;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;resizeRetryTimers=new Set;lastAppliedThemeSignature=null;lastResizeSignature=null;pendingHandoffToken=null;standbyHandoffToken=null;standbyHandoffRequest=null;constructor(_,$){this.container=_,this.ownerDocument=_.ownerDocument||document,this.ownerWindow=this.ownerDocument.defaultView||window;let j=typeof $?.transferState?.handoffToken==="string"&&$.transferState.handoffToken.trim()?$.transferState.handoffToken.trim():null,G=Z5("terminal_handoff");this.pendingHandoffToken=j||G||null,this.termEl=this.ownerDocument.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.termEl.setAttribute("inputmode","none"),this.statusEl=this.ownerDocument.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=this.ownerDocument.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.style.display="flex",this.bodyEl.style.flex="1 1 auto",this.bodyEl.style.minHeight="0",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,G=Number.isFinite(_?.height)?_.height:0,Y=Number.isFinite($?.width)?$.width:0,X=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(G)}:${Math.round(Y)}x${Math.round(X)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;_.style.display="flex",_.style.flex="1 1 auto",_.style.width="100%",_.style.height="100%",_.style.minWidth="0",_.style.minHeight="0",_.style.overflow="hidden";let $=_.querySelector("canvas");if($ instanceof HTMLElement)$.style.display="block"}queueResizeRetries(_=[32,96,180,320,520,900]){if(this.disposed||!this.ownerWindow)return;this.clearResizeRetries();for(let $ of _){let j=this.ownerWindow.setTimeout(()=>{if(this.resizeRetryTimers.delete(j),this.disposed)return;this.scheduleResize(!0)},$);this.resizeRetryTimers.add(j)}}clearResizeRetries(){if(!this.ownerWindow||this.resizeRetryTimers.size===0)return;for(let _ of Array.from(this.resizeRetryTimers))try{this.ownerWindow.clearTimeout(_)}catch($){console.debug("[terminal-pane] Ignoring timeout clear failure during resize retry drain.",$,{timer:_})}this.resizeRetryTimers.clear()}scheduleResize(_=!1){if(this.disposed)return;let $=this.getResizeSignature();if(!_&&this.lastResizeSignature===$)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await eU();if(await _E(),this.disposed)return;this.bodyEl.innerHTML="";let $=this.ownerDocument.createElement("div");$.className="terminal-live-host",$.style.display="flex",$.style.flex="1 1 auto",$.style.width="100%",$.style.height="100%",$.style.minWidth="0",$.style.minHeight="0",$.setAttribute("inputmode","none"),this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:lU,fontSize:13,theme:GY(this.ownerWindow,this.ownerDocument)}),G=null;if(typeof _.FitAddon==="function")G=new _.FitAddon,j.loadAddon?.(G);ZY(this.ownerDocument),await j.open($),$.__terminal=j,x3(j,$),this.syncHostLayout(),j.loadFonts?.(),G?.observeResize?.(),this.terminal=j,this.fitAddon=G,this.installClipboardShortcutBridge(),this.installThemeSync(),this.installResizeSync(),this.scheduleResize(!0),this.queueResizeRetries([32,96,180,320]),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}installClipboardShortcutBridge(){let _=this.terminal;if(!_||typeof _.attachCustomKeyEventHandler!=="function")return;_.attachCustomKeyEventHandler(($)=>{if(oU($)){try{if(!_.copySelection?.()){let G=typeof _.getSelection==="function"?String(_.getSelection()||""):"";if(G)this.ownerWindow?.navigator?.clipboard?.writeText?.(G).catch((Y)=>{console.debug("[terminal-pane] Clipboard write fallback failed.",Y)})}}catch(j){console.debug("[terminal-pane] Clipboard copy shortcut failed.",j)}return!0}if(iU($)){if(typeof this.ownerWindow?.navigator?.clipboard?.readText!=="function")return;return sU(this.ownerWindow?.navigator).then((j)=>{if(typeof j!=="string"||!j.length||this.disposed)return;_.paste?.(j)}),!0}return})}applyTheme(){if(!this.terminal)return;let _=GY(this.ownerWindow,this.ownerDocument),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;tG({termEl:this.termEl,bodyEl:this.bodyEl,terminal:this.terminal,theme:_,themeChanged:j,socket:this.socket,resize:()=>this.resize()}),this.lastAppliedThemeSignature=$}installThemeSync(){if(!this.ownerWindow||!this.ownerDocument)return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();this.ownerWindow.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=this.ownerWindow.matchMedia?.("(prefers-color-scheme: dark)"),G=()=>_();if(j?.addEventListener)j.addEventListener("change",G);else if(j?.addListener)j.addListener(G);this.mediaQuery=j,this.mediaQueryListener=G;let Y=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Y?.observe(this.ownerDocument.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),this.ownerDocument.body)Y?.observe(this.ownerDocument.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Y}installResizeSync(){if(!this.ownerWindow)return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(this.ownerWindow.addEventListener("dock-resize",_),this.ownerWindow.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),j.observe(this.termEl),j.observe(this.bodyEl),this.resizeObserver=j}}consumeStandbyHandoffToken(){let _=this.standbyHandoffToken||null;return this.standbyHandoffToken=null,_}async ensureStandbyHandoffToken(_=!1){if(this.disposed)return null;if(!_&&this.standbyHandoffToken)return this.standbyHandoffToken;if(this.standbyHandoffRequest)return await this.standbyHandoffRequest;return this.standbyHandoffRequest=jE().then(($)=>{if(!$||this.disposed)return null;return this.standbyHandoffToken=$,$}).catch(($)=>{return console.warn("[terminal-pane] Failed to prepare standby handoff token:",$),null}).finally(()=>{this.standbyHandoffRequest=null}),await this.standbyHandoffRequest}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await $E();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=this.pendingHandoffToken||null,G=new WebSocket(GE($.ws_path||"/terminal/ws",j));this.socket=G,this.setStatus(j?"Transferring…":"Connecting…"),_.onData?.((Y)=>{if(G.readyState===WebSocket.OPEN)G.send(JSON.stringify({type:"input",data:Y}))}),_.onResize?.(({cols:Y,rows:X})=>{if(G.readyState===WebSocket.OPEN)G.send(JSON.stringify({type:"resize",cols:Y,rows:X}))}),G.addEventListener("open",()=>{if(this.disposed)return;if(j&&this.pendingHandoffToken===j)this.pendingHandoffToken=null;this.ensureStandbyHandoffToken(!1),this.setStatus("Connected"),this.scheduleResize(!0),this.queueResizeRetries([24,72,160,320])}),G.addEventListener("message",(Y)=>{if(this.disposed)return;let X=null;try{X=JSON.parse(String(Y.data))}catch{X={type:"output",data:String(Y.data)}}if(X?.type==="session"){let Z=typeof X.session_id==="string"?X.session_id:null;if(_.__piclawSessionMeta={sessionId:Z,createdAt:typeof X.created_at==="string"?X.created_at:null,processPid:typeof X.process_pid==="number"?X.process_pid:null},!this.standbyHandoffToken)this.ensureStandbyHandoffToken(!1);return}if(X?.type==="output"&&typeof X.data==="string"){_.write?.(X.data);return}if(X?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),G.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),G.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}detachHostListeners(){iG({ownerWindow:this.ownerWindow,themeChangeListener:this.themeChangeListener,mediaQuery:this.mediaQuery,mediaQueryListener:this.mediaQueryListener,dockResizeListener:this.dockResizeListener,windowResizeListener:this.windowResizeListener,themeObserver:this.themeObserver,resizeObserver:this.resizeObserver}),this.themeChangeListener=null,this.mediaQuery=null,this.mediaQueryListener=null,this.themeObserver=null,this.resizeObserver=null,this.dockResizeListener=null,this.windowResizeListener=null}beforeDetachFromHost(){this.setStatus("Moving terminal…")}afterAttachToHost(_){let $=typeof _?.transferState?.handoffToken==="string"&&_.transferState.handoffToken.trim()?_.transferState.handoffToken.trim():null;if($)this.pendingHandoffToken=$;if(this.installThemeSync(),this.installResizeSync(),this.socket?.readyState===WebSocket.OPEN)this.setStatus("Connected");else if(this.pendingHandoffToken)this.setStatus("Transferring…");else if(this.socket?.readyState===WebSocket.CONNECTING)this.setStatus("Connecting…");this.scheduleResize(!0),this.queueResizeRetries([32,96,180,320]),requestAnimationFrame(()=>this.focus())}moveHost(_){return!1}exportHostTransferState(){let _=this.standbyHandoffToken||this.pendingHandoffToken||null;return _?{kind:"terminal",live:!1,handoffToken:_}:null}async preparePopoutTransfer(){let _=this.consumeStandbyHandoffToken();if(!_)await this.ensureStandbyHandoffToken(!0),_=this.consumeStandbyHandoffToken();if(!_)return null;return this.pendingHandoffToken=_,{terminal_handoff:_}}getContent(){return}isDirty(){return!1}focus(){let _=this.bodyEl.querySelector(".terminal-live-host");ZE({terminal:this.terminal,terminalHost:_,termEl:this.termEl,ownerDocument:this.ownerDocument})}resize(){sG({syncHostLayout:()=>this.syncHostLayout(),terminal:this.terminal,fitAddon:this.fitAddon,sendResize:()=>this.sendResize()})}dispose(){if(this.disposed)return;this.disposed=!0,this.standbyHandoffToken=null,this.standbyHandoffRequest=null,this.clearResizeRetries(),this.detachHostListeners(),this.resizeFrame=aG({resizeFrame:this.resizeFrame,socket:this.socket,fitAddon:this.fitAddon,terminal:this.terminal,termEl:this.termEl})}}var R3={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new P3(_,$)}},f3={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path===q5?1e4:!1},mount(_,$){return new P3(_,$)}};function S1(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Y)=>{try{return Boolean($.matchMedia(Y)?.matches)}catch{return!1}})}function F2(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let G=String(j?.userAgent||""),Y=Number(j?.maxTouchPoints||0),X=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(G),Z=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(X||Y>1||Z)}function LY(_,$={}){if(S1($))return null;if(F2($))return{target:"_blank",features:void 0,mode:"tab"};return{target:LE(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function S3(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function g3(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),G=String($.message||"Preparing a new branch window…");_.document.title=j;let Y=_.document.body;if(!Y)return;if(typeof _.document.createElement!=="function"){Y.textContent=`${j}
${G}`;return}let X=_.document.createElement("div");X.setAttribute("style","font-family: system-ui, sans-serif; padding: 24px; color: #222;");let Z=_.document.createElement("h1");Z.setAttribute("style","font-size: 18px; margin: 0 0 12px;"),Z.textContent=j;let L=_.document.createElement("p");if(L.setAttribute("style","margin: 0; line-height: 1.5;"),L.textContent=G,X.appendChild(Z),X.appendChild(L),typeof Y.replaceChildren==="function")Y.replaceChildren(X);else Y.innerHTML="",Y.appendChild(X)}catch{return}}function u3(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{return}}function b3(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{return}}function w1(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Y=String($||"").trim()||"web:default";if(G.searchParams.set("chat_jid",Y),G.searchParams.delete("branch_loader"),G.searchParams.delete("branch_source_chat_jid"),G.searchParams.delete("pane_popout"),G.searchParams.delete("pane_path"),G.searchParams.delete("pane_label"),j.chatOnly!==!1)G.searchParams.set("chat_only","1");return G.toString()}function v3(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Y=String($||"").trim()||"web:default";if(G.searchParams.set("branch_loader","1"),G.searchParams.set("branch_source_chat_jid",Y),G.searchParams.delete("chat_jid"),G.searchParams.delete("pane_popout"),G.searchParams.delete("pane_path"),G.searchParams.delete("pane_label"),j.chatOnly!==!1)G.searchParams.set("chat_only","1");return G.toString()}function qY(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Y=String($||"").trim();if(!Y)return G.toString();if(G.searchParams.set("pane_popout","1"),G.searchParams.set("pane_path",Y),j?.label)G.searchParams.set("pane_label",String(j.label));else G.searchParams.delete("pane_label");if(j?.chatJid)G.searchParams.set("chat_jid",String(j.chatJid));let X=j?.params&&typeof j.params==="object"?j.params:null;if(X)for(let[Z,L]of Object.entries(X)){let V=String(Z||"").trim();if(!V)continue;if(L===null||L===void 0||L==="")G.searchParams.delete(V);else G.searchParams.set(V,String(L))}return G.searchParams.delete("chat_only"),G.searchParams.delete("branch_loader"),G.searchParams.delete("branch_source_chat_jid"),G.toString()}function LE(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function qE(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function VY(_,$={}){if(S1($))return null;if(F2($))return{target:"_blank",features:void 0,mode:"tab"};return{target:qE(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function D4(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let G=j.toLowerCase();if(G.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(G.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(G.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(G.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(G.includes("failed to fork branch")||G.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function VE(_){try{return JSON.parse(_)}catch{return null}}function QE(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function KE(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}function QY(_){try{return _?.close?.(),!0}catch($){return!1}}class m3{socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;pendingOutbound=[];constructor(_){this.options=_}connect(){if(this.disposed)return;QY(this.socket);let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.flushPendingOutbound(_),this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=KE($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let G=this.options.parseControlMessage||VE;this.options.onMessage?.({kind:"control",raw:$.data,payload:G($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed)return;let $=this.socket;if(!$||$.readyState!==WebSocket.OPEN){this.pendingOutbound.push(_);return}this.sendNow($,_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0,QY(this.socket),this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}sendNow(_,$){let j=QE($);this.bytesOut+=j,this.emitMetrics(),_.send($)}flushPendingOutbound(_){if(this.pendingOutbound.length===0)return;let $=this.pendingOutbound.splice(0);for(let j=0;j<$.length;j+=1){if(this.disposed||this.socket!==_||_.readyState!==WebSocket.OPEN){this.pendingOutbound.unshift(...$.slice(j));return}this.sendNow(_,$[j])}}}var i5=()=>{throw Error("Operation requires compiling with --exportRuntime")},BE=typeof BigUint64Array<"u",s5=Symbol();var FE=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function KY(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,G=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...G);try{return FE.decode(G)}catch{let Y="",X=0;while(j-X>1024)Y+=String.fromCharCode(...G.subarray(X,X+=1024));return Y+String.fromCharCode(...G.subarray(X))}}function BY(_){let $={};function j(Y,X){if(!Y)return"<yet unknown>";return KY(Y.buffer,X)}let G=_.env=_.env||{};return G.abort=G.abort||function(X,Z,L,V){let q=$.memory||G.memory;throw Error(`abort: ${j(q,X)} at ${j(q,Z)}:${L}:${V}`)},G.trace=G.trace||function(X,Z,...L){let V=$.memory||G.memory;console.log(`trace: ${j(V,X)}${Z?" ":""}${L.slice(0,Z).join(", ")}`)},G.seed=G.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function FY(_,$){let j=$.exports,G=j.memory,Y=j.table,X=j.__new||i5,Z=j.__pin||i5,L=j.__unpin||i5,V=j.__collect||i5,q=j.__rtti_base,K=q?(T)=>T[q>>>2]:i5;_.__new=X,_.__pin=Z,_.__unpin=L,_.__collect=V;function Q(T){let y=new Uint32Array(G.buffer);if((T>>>=0)>=K(y))throw Error(`invalid id: ${T}`);return y[(q+4>>>2)+T]}function F(T){let y=Q(T);if(!(y&7))throw Error(`not an array: ${T}, flags=${y}`);return y}function B(T){return 31-Math.clz32(T>>>6&31)}function U(T){if(T==null)return 0;let y=T.length,J=X(y<<1,2),P=new Uint16Array(G.buffer);for(let R=0,b=J>>>1;R<y;++R)P[b+R]=T.charCodeAt(R);return J}_.__newString=U;function H(T){if(T==null)return 0;let y=new Uint8Array(T),J=X(y.length,1);return new Uint8Array(G.buffer).set(y,J),J}_.__newArrayBuffer=H;function D(T){if(!T)return null;let y=G.buffer;if(new Uint32Array(y)[T+-8>>>2]!==2)throw Error(`not a string: ${T}`);return KY(y,T)}_.__getString=D;function E(T,y,J){let P=G.buffer;if(J)switch(T){case 2:return new Float32Array(P);case 3:return new Float64Array(P)}else switch(T){case 0:return new(y?Int8Array:Uint8Array)(P);case 1:return new(y?Int16Array:Uint16Array)(P);case 2:return new(y?Int32Array:Uint32Array)(P);case 3:return new(y?BigInt64Array:BigUint64Array)(P)}throw Error(`unsupported align: ${T}`)}function M(T,y=0){let J=y,P=F(T),R=B(P),b=typeof J!=="number",c=b?J.length:J,r=X(c<<R,P&4?T:1),e;if(P&4)e=r;else{Z(r);let m=X(P&2?16:12,T);L(r);let _0=new Uint32Array(G.buffer);if(_0[m+0>>>2]=r,_0[m+4>>>2]=r,_0[m+8>>>2]=c<<R,P&2)_0[m+12>>>2]=c;e=m}if(b){let m=E(R,P&2048,P&4096),_0=r>>>R;if(P&16384)for(let H0=0;H0<c;++H0)m[_0+H0]=J[H0];else m.set(J,_0)}return e}_.__newArray=M;function z(T){let y=new Uint32Array(G.buffer),J=y[T+-8>>>2],P=F(J),R=B(P),b=P&4?T:y[T+4>>>2],c=P&2?y[T+12>>>2]:y[b+-4>>>2]>>>R;return E(R,P&2048,P&4096).subarray(b>>>=R,b+c)}_.__getArrayView=z;function O(T){let y=z(T),J=y.length,P=Array(J);for(let R=0;R<J;R++)P[R]=y[R];return P}_.__getArray=O;function x(T){let y=G.buffer,J=new Uint32Array(y)[T+-4>>>2];return y.slice(T,T+J)}_.__getArrayBuffer=x;function I(T){if(!Y)throw Error("Operation requires compiling with --exportTable");let y=new Uint32Array(G.buffer)[T>>>2];return Y.get(y)}_.__getFunction=I;function A(T,y,J){return new T(k(T,y,J))}function k(T,y,J){let P=G.buffer,R=new Uint32Array(P);return new T(P,R[J+4>>>2],R[J+8>>>2]>>>y)}function W(T,y,J){_[`__get${y}`]=A.bind(null,T,J),_[`__get${y}View`]=k.bind(null,T,J)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((T)=>{W(T,T.name,31-Math.clz32(T.BYTES_PER_ELEMENT))}),BE)[BigUint64Array,BigInt64Array].forEach((T)=>{W(T,T.name.slice(3),3)});return _.memory=_.memory||G,_.table=_.table||Y,UE(j,_)}function NY(_){return typeof Response<"u"&&_ instanceof Response}function NE(_){return _ instanceof WebAssembly.Module}async function c3(_,$={}){if(NY(_=await _))return N2(_,$);let j=NE(_)?_:await WebAssembly.compile(_),G=BY($),Y=await WebAssembly.instantiate(j,$),X=FY(G,Y);return{module:j,instance:Y,exports:X}}async function N2(_,$={}){if(!WebAssembly.instantiateStreaming)return c3(NY(_=await _)?_.arrayBuffer():_,$);let j=BY($),G=await WebAssembly.instantiateStreaming(_,$),Y=FY(j,G.instance);return{...G,exports:Y}}function UE(_,$={}){let j=_.__argumentsLength?(G)=>{_.__argumentsLength.value=G}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let G of Object.keys(_)){let Y=_[G],X=G.split("."),Z=$;while(X.length>1){let q=X.shift();if(!Object.hasOwn(Z,q))Z[q]={};Z=Z[q]}let L=X[0],V=L.indexOf("#");if(V>=0){let q=L.substring(0,V),K=Z[q];if(typeof K>"u"||!K.prototype){let Q=function(...F){return Q.wrap(Q.prototype.constructor(0,...F))};if(Q.prototype={valueOf(){return this[s5]}},Q.wrap=function(F){return Object.create(Q.prototype,{[s5]:{value:F,writable:!1}})},K)Object.getOwnPropertyNames(K).forEach((F)=>Object.defineProperty(Q,F,Object.getOwnPropertyDescriptor(K,F)));Z[q]=Q}if(L=L.substring(V+1),Z=Z[q].prototype,/^(get|set):/.test(L)){if(!Object.hasOwn(Z,L=L.substring(4))){let Q=_[G.replace("set:","get:")],F=_[G.replace("get:","set:")];Object.defineProperty(Z,L,{get(){return Q(this[s5])},set(B){F(this[s5],B)},enumerable:!0})}}else if(L==="constructor")(Z[L]=function(...Q){return j(Q.length),Y(...Q)}).original=Y;else(Z[L]=function(...Q){return j(Q.length),Y(this[s5],...Q)}).original=Y}else if(/^(get|set):/.test(L)){if(!Object.hasOwn(Z,L=L.substring(4)))Object.defineProperty(Z,L,{get:_[G.replace("set:","get:")],set:_[G.replace("get:","set:")],enumerable:!0})}else if(typeof Y==="function"&&Y!==j)(Z[L]=(...q)=>{return j(q.length),Y(...q)}).original=Y;else Z[L]=Y}return $}function h3(_){try{return _?.__collect?.(),!0}catch($){return!1}}var DE="/static/js/vendor/remote-display-decoder.wasm",U2=null;function UY(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function EY(){if(U2)return U2;return U2=(async()=>{try{let G=function(Y,X,Z,L,V,q,K){let Q=UY(X),F=j.__pin(j.__newArrayBuffer(Q));try{return j[Y](F,Z,L,V,q,K.bitsPerPixel,K.bigEndian?1:0,K.trueColor?1:0,K.redMax,K.greenMax,K.blueMax,K.redShift,K.greenShift,K.blueShift)}finally{j.__unpin(F),h3(j)}},_=await fetch(DE,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof N2==="function"?await N2(_,{}):await c3(await _.arrayBuffer(),{})).exports;for(let Y of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Y]!=="function")throw Error(`${Y} export is missing.`);return{initFramebuffer(Y,X){j.initFramebuffer(Y,X)},getFramebuffer(){let Y=j.getFramebufferPtr(),X=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Y,X).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Y,X,Z,L,V,q){return G("processRawRect",Y,X,Z,L,V,q)},processCopyRect(Y,X,Z,L,V,q){return j.processCopyRect(Y,X,Z,L,V,q)},processRreRect(Y,X,Z,L,V,q){return G("processRreRect",Y,X,Z,L,V,q)},processHextileRect(Y,X,Z,L,V,q){return G("processHextileRect",Y,X,Z,L,V,q)},processZrleTileData(Y,X,Z,L,V,q){return G("processZrleTileData",Y,X,Z,L,V,q)},decodeRawRectToRgba(Y,X,Z,L){let V=UY(Y),q=j.__pin(j.__newArrayBuffer(V));try{let K=j.__pin(j.decodeRawRectToRgba(q,X,Z,L.bitsPerPixel,L.bigEndian?1:0,L.trueColor?1:0,L.redMax,L.greenMax,L.blueMax,L.redShift,L.greenShift,L.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(K))}finally{j.__unpin(K)}}finally{j.__unpin(q),h3(j)}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),U2}function V5(_,$,j){return Math.max($,Math.min(j,_))}function E2(_,$,j){let G=new Uint8Array(6),Y=V5(Math.floor(Number($||0)),0,65535),X=V5(Math.floor(Number(j||0)),0,65535);return G[0]=5,G[1]=V5(Math.floor(Number(_||0)),0,255),G[2]=Y>>8&255,G[3]=Y&255,G[4]=X>>8&255,G[5]=X&255,G}function h$(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function p3(_){let $=h$(_?.button);if($)return $;let j=String(_?.pointerType||"").toLowerCase();if(j==="touch"||j==="pen")return h$(0);let G=Number(_?.buttons||0);if(G&1)return h$(0);if(G&4)return h$(1);if(G&2)return h$(2);return 0}function H4(_){let $=String(_?.type||"").toLowerCase();if($==="pointerup"||$==="pointercancel"||$==="lostpointercapture")return!0;let j=Number(_?.buttons);if(Number.isFinite(j)&&j===0&&$!=="pointerdown")return!0;let G=String(_?.pointerType||"").toLowerCase(),Y=Number(_?.pressure);if(G==="touch"||G==="pen"){if($==="pointerleave"||$==="pointerout")return!0;if(Number.isFinite(Y)&&Y<=0&&$!=="pointerdown")return!0}return!1}function DY(_){let $=String(_?.type||"").toLowerCase();if($==="touchend"||$==="touchcancel")return!0;if($==="touchmove")return Number(_?.touches?.length||0)<=0;return!1}function r1(_){return String(_||"").toLowerCase()==="touch"}function HE(_,$,j,G){let Y=Number(j||0)-Number(_||0),X=Number(G||0)-Number($||0);return Math.hypot(Y,X)}function r3(_){let $=Number.isFinite(_?.maxDistancePx)?Number(_.maxDistancePx):14;return HE(_?.startX,_?.startY,_?.clientX,_?.clientY)>$}function HY(_){let $=Number.isFinite(_?.maxElapsedMs)?Number(_.maxElapsedMs):300;if(Number(_?.elapsedMs||0)>$)return!1;return!r3(_)}function WY(_){return String(_||"").toLowerCase()!=="mouse"}function n3(_,$,j,G,Y){let X=Math.max(1,Math.floor(Number(G||0))),Z=Math.max(1,Math.floor(Number(Y||0))),L=Math.max(1,Number(j?.width||0)),V=Math.max(1,Number(j?.height||0)),q=(Number(_||0)-Number(j?.left||0))/L,K=(Number($||0)-Number(j?.top||0))/V;return{x:V5(Math.floor(q*X),0,Math.max(0,X-1)),y:V5(Math.floor(K*Z),0,Math.max(0,Z-1))}}function OY(_,$,j,G=0){let Y=Number(_)<0?8:16,X=V5(Number(G||0)|Y,0,255);return[E2(X,$,j),E2(Number(G||0),$,j)]}function zY(_,$){let j=new Uint8Array(8),G=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=G>>>24&255,j[5]=G>>>16&255,j[6]=G>>>8&255,j[7]=G&255,j}function AY(_,$,j=!1){if(_==null||$==null)return!1;return Boolean(j)||Number(_)===Number($)}function W4(_){if(typeof _!=="string")return null;return _.length>0?_:null}function JY(_,$,j,G){let Y=Math.max(1,Math.floor(Number(_||0))),X=Math.max(1,Math.floor(Number($||0))),Z=Math.max(1,Math.floor(Number(j||0))),L=Math.max(1,Math.floor(Number(G||0))),V=Math.min(Y/Z,X/L);if(!Number.isFinite(V)||V<=0)return 1;return Math.max(0.01,V)}var l3={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)l3[`F${_}`]=65470+(_-1);function d3(_){let $=[_?.key,_?.code];for(let X of $)if(X&&Object.prototype.hasOwnProperty.call(l3,X))return l3[X];let j=String(_?.key||""),G=j?j.codePointAt(0):null,Y=G==null?0:G>65535?2:1;if(G!=null&&j.length===Y){if(G<=255)return G;return(16777216|G)>>>0}return null}var i_=Uint8Array,W1=Uint16Array,j7=Int32Array,D2=new i_([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),H2=new i_([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),t3=new i_([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),yY=function(_,$){var j=new W1(31);for(var G=0;G<31;++G)j[G]=$+=1<<_[G-1];var Y=new j7(j[30]);for(var G=1;G<30;++G)for(var X=j[G];X<j[G+1];++X)Y[X]=X-j[G]<<5|G;return{b:j,r:Y}},wY=yY(D2,2),IY=wY.b,e3=wY.r;IY[28]=258,e3[258]=28;var xY=yY(H2,0),WE=xY.b,kY=xY.r,_7=new W1(32768);for(K_=0;K_<32768;++K_)n1=(K_&43690)>>1|(K_&21845)<<1,n1=(n1&52428)>>2|(n1&13107)<<2,n1=(n1&61680)>>4|(n1&3855)<<4,_7[K_]=((n1&65280)>>8|(n1&255)<<8)>>1;var n1,K_,d1=function(_,$,j){var G=_.length,Y=0,X=new W1($);for(;Y<G;++Y)if(_[Y])++X[_[Y]-1];var Z=new W1($);for(Y=1;Y<$;++Y)Z[Y]=Z[Y-1]+X[Y-1]<<1;var L;if(j){L=new W1(1<<$);var V=15-$;for(Y=0;Y<G;++Y)if(_[Y]){var q=Y<<4|_[Y],K=$-_[Y],Q=Z[_[Y]-1]++<<K;for(var F=Q|(1<<K)-1;Q<=F;++Q)L[_7[Q]>>V]=q}}else{L=new W1(G);for(Y=0;Y<G;++Y)if(_[Y])L[Y]=_7[Z[_[Y]-1]++]>>15-_[Y]}return L},l$=new i_(288);for(K_=0;K_<144;++K_)l$[K_]=8;var K_;for(K_=144;K_<256;++K_)l$[K_]=9;var K_;for(K_=256;K_<280;++K_)l$[K_]=7;var K_;for(K_=280;K_<288;++K_)l$[K_]=8;var K_,_6=new i_(32);for(K_=0;K_<32;++K_)_6[K_]=5;var K_,OE=d1(l$,9,0),zE=d1(l$,9,1),AE=d1(_6,5,0),JE=d1(_6,5,1),o3=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},g1=function(_,$,j){var G=$/8|0;return(_[G]|_[G+1]<<8)>>($&7)&j},i3=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},G7=function(_){return(_+7)/8|0},e5=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new i_(_.subarray($,j))};var kE=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],F1=function(_,$,j){var G=Error($||kE[_]);if(G.code=_,Error.captureStackTrace)Error.captureStackTrace(G,F1);if(!j)throw G;return G},ME=function(_,$,j,G){var Y=_.length,X=G?G.length:0;if(!Y||$.f&&!$.l)return j||new i_(0);var Z=!j,L=Z||$.i!=2,V=$.i;if(Z)j=new i_(Y*3);var q=function(X0){var W0=j.length;if(X0>W0){var P0=new i_(Math.max(W0*2,X0));P0.set(j),j=P0}},K=$.f||0,Q=$.p||0,F=$.b||0,B=$.l,U=$.d,H=$.m,D=$.n,E=Y*8;do{if(!B){K=g1(_,Q,1);var M=g1(_,Q+1,3);if(Q+=3,!M){var z=G7(Q)+4,O=_[z-4]|_[z-3]<<8,x=z+O;if(x>Y){if(V)F1(0);break}if(L)q(F+O);j.set(_.subarray(z,x),F),$.b=F+=O,$.p=Q=x*8,$.f=K;continue}else if(M==1)B=zE,U=JE,H=9,D=5;else if(M==2){var I=g1(_,Q,31)+257,A=g1(_,Q+10,15)+4,k=I+g1(_,Q+5,31)+1;Q+=14;var W=new i_(k),T=new i_(19);for(var y=0;y<A;++y)T[t3[y]]=g1(_,Q+y*3,7);Q+=A*3;var J=o3(T),P=(1<<J)-1,R=d1(T,J,1);for(var y=0;y<k;){var b=R[g1(_,Q,P)];Q+=b&15;var z=b>>4;if(z<16)W[y++]=z;else{var c=0,r=0;if(z==16)r=3+g1(_,Q,3),Q+=2,c=W[y-1];else if(z==17)r=3+g1(_,Q,7),Q+=3;else if(z==18)r=11+g1(_,Q,127),Q+=7;while(r--)W[y++]=c}}var e=W.subarray(0,I),m=W.subarray(I);H=o3(e),D=o3(m),B=d1(e,H,1),U=d1(m,D,1)}else F1(1);if(Q>E){if(V)F1(0);break}}if(L)q(F+131072);var _0=(1<<H)-1,H0=(1<<D)-1,Y0=Q;for(;;Y0=Q){var c=B[i3(_,Q)&_0],j0=c>>4;if(Q+=c&15,Q>E){if(V)F1(0);break}if(!c)F1(2);if(j0<256)j[F++]=j0;else if(j0==256){Y0=Q,B=null;break}else{var L0=j0-254;if(j0>264){var y=j0-257,F0=D2[y];L0=g1(_,Q,(1<<F0)-1)+IY[y],Q+=F0}var h=U[i3(_,Q)&H0],$0=h>>4;if(!h)F1(3);Q+=h&15;var m=WE[$0];if($0>3){var F0=H2[$0];m+=i3(_,Q)&(1<<F0)-1,Q+=F0}if(Q>E){if(V)F1(0);break}if(L)q(F+131072);var V0=F+L0;if(F<m){var O0=X-m,a=Math.min(m,V0);if(O0+F<0)F1(3);for(;F<a;++F)j[F]=G[O0+F]}for(;F<V0;++F)j[F]=j[F-m]}}if($.l=B,$.p=Y0,$.b=F,$.f=K,B)K=1,$.m=H,$.d=U,$.n=D}while(!K);return F!=j.length&&Z?e5(j,0,F):j.subarray(0,F)},N$=function(_,$,j){j<<=$&7;var G=$/8|0;_[G]|=j,_[G+1]|=j>>8},a5=function(_,$,j){j<<=$&7;var G=$/8|0;_[G]|=j,_[G+1]|=j>>8,_[G+2]|=j>>16},s3=function(_,$){var j=[];for(var G=0;G<_.length;++G)if(_[G])j.push({s:G,f:_[G]});var Y=j.length,X=j.slice();if(!Y)return{t:PY,l:0};if(Y==1){var Z=new i_(j[0].s+1);return Z[j[0].s]=1,{t:Z,l:1}}j.sort(function(x,I){return x.f-I.f}),j.push({s:-1,f:25001});var L=j[0],V=j[1],q=0,K=1,Q=2;j[0]={s:-1,f:L.f+V.f,l:L,r:V};while(K!=Y-1)L=j[j[q].f<j[Q].f?q++:Q++],V=j[q!=K&&j[q].f<j[Q].f?q++:Q++],j[K++]={s:-1,f:L.f+V.f,l:L,r:V};var F=X[0].s;for(var G=1;G<Y;++G)if(X[G].s>F)F=X[G].s;var B=new W1(F+1),U=$7(j[K-1],B,0);if(U>$){var G=0,H=0,D=U-$,E=1<<D;X.sort(function(I,A){return B[A.s]-B[I.s]||I.f-A.f});for(;G<Y;++G){var M=X[G].s;if(B[M]>$)H+=E-(1<<U-B[M]),B[M]=$;else break}H>>=D;while(H>0){var z=X[G].s;if(B[z]<$)H-=1<<$-B[z]++-1;else++G}for(;G>=0&&H;--G){var O=X[G].s;if(B[O]==$)--B[O],++H}U=$}return{t:new i_(B),l:U}},$7=function(_,$,j){return _.s==-1?Math.max($7(_.l,$,j+1),$7(_.r,$,j+1)):$[_.s]=j},MY=function(_){var $=_.length;while($&&!_[--$]);var j=new W1(++$),G=0,Y=_[0],X=1,Z=function(V){j[G++]=V};for(var L=1;L<=$;++L)if(_[L]==Y&&L!=$)++X;else{if(!Y&&X>2){for(;X>138;X-=138)Z(32754);if(X>2)Z(X>10?X-11<<5|28690:X-3<<5|12305),X=0}else if(X>3){Z(Y),--X;for(;X>6;X-=6)Z(8304);if(X>2)Z(X-3<<5|8208),X=0}while(X--)Z(Y);X=1,Y=_[L]}return{c:j.subarray(0,G),n:$}},t5=function(_,$){var j=0;for(var G=0;G<$.length;++G)j+=_[G]*$[G];return j},CY=function(_,$,j){var G=j.length,Y=G7($+2);_[Y]=G&255,_[Y+1]=G>>8,_[Y+2]=_[Y]^255,_[Y+3]=_[Y+1]^255;for(var X=0;X<G;++X)_[Y+X+4]=j[X];return(Y+4+G)*8},TY=function(_,$,j,G,Y,X,Z,L,V,q,K){N$($,K++,j),++Y[256];var Q=s3(Y,15),F=Q.t,B=Q.l,U=s3(X,15),H=U.t,D=U.l,E=MY(F),M=E.c,z=E.n,O=MY(H),x=O.c,I=O.n,A=new W1(19);for(var k=0;k<M.length;++k)++A[M[k]&31];for(var k=0;k<x.length;++k)++A[x[k]&31];var W=s3(A,7),T=W.t,y=W.l,J=19;for(;J>4&&!T[t3[J-1]];--J);var P=q+5<<3,R=t5(Y,l$)+t5(X,_6)+Z,b=t5(Y,F)+t5(X,H)+Z+14+3*J+t5(A,T)+2*A[16]+3*A[17]+7*A[18];if(V>=0&&P<=R&&P<=b)return CY($,K,_.subarray(V,V+q));var c,r,e,m;if(N$($,K,1+(b<R)),K+=2,b<R){c=d1(F,B,0),r=F,e=d1(H,D,0),m=H;var _0=d1(T,y,0);N$($,K,z-257),N$($,K+5,I-1),N$($,K+10,J-4),K+=14;for(var k=0;k<J;++k)N$($,K+3*k,T[t3[k]]);K+=3*J;var H0=[M,x];for(var Y0=0;Y0<2;++Y0){var j0=H0[Y0];for(var k=0;k<j0.length;++k){var L0=j0[k]&31;if(N$($,K,_0[L0]),K+=T[L0],L0>15)N$($,K,j0[k]>>5&127),K+=j0[k]>>12}}}else c=OE,r=l$,e=AE,m=_6;for(var k=0;k<L;++k){var F0=G[k];if(F0>255){var L0=F0>>18&31;if(a5($,K,c[L0+257]),K+=r[L0+257],L0>7)N$($,K,F0>>23&31),K+=D2[L0];var h=F0&31;if(a5($,K,e[h]),K+=m[h],h>3)a5($,K,F0>>5&8191),K+=H2[h]}else a5($,K,c[F0]),K+=r[F0]}return a5($,K,c[256]),K+r[256]},TE=new j7([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),PY=new i_(0),yE=function(_,$,j,G,Y,X){var Z=X.z||_.length,L=new i_(G+Z+5*(1+Math.ceil(Z/7000))+Y),V=L.subarray(G,L.length-Y),q=X.l,K=(X.r||0)&7;if($){if(K)V[0]=X.r>>3;var Q=TE[$-1],F=Q>>13,B=Q&8191,U=(1<<j)-1,H=X.p||new W1(32768),D=X.h||new W1(U+1),E=Math.ceil(j/3),M=2*E,z=function(p0){return(_[p0]^_[p0+1]<<E^_[p0+2]<<M)&U},O=new j7(25000),x=new W1(288),I=new W1(32),A=0,k=0,W=X.i||0,T=0,y=X.w||0,J=0;for(;W+2<Z;++W){var P=z(W),R=W&32767,b=D[P];if(H[R]=b,D[P]=R,y<=W){var c=Z-W;if((A>7000||T>24576)&&(c>423||!q)){K=TY(_,V,0,O,x,I,k,T,J,W-J,K),T=A=k=0,J=W;for(var r=0;r<286;++r)x[r]=0;for(var r=0;r<30;++r)I[r]=0}var e=2,m=0,_0=B,H0=R-b&32767;if(c>2&&P==z(W-H0)){var Y0=Math.min(F,c)-1,j0=Math.min(32767,W),L0=Math.min(258,c);while(H0<=j0&&--_0&&R!=b){if(_[W+e]==_[W+e-H0]){var F0=0;for(;F0<L0&&_[W+F0]==_[W+F0-H0];++F0);if(F0>e){if(e=F0,m=H0,F0>Y0)break;var h=Math.min(H0,F0-2),$0=0;for(var r=0;r<h;++r){var V0=W-H0+r&32767,O0=H[V0],a=V0-O0&32767;if(a>$0)$0=a,b=V0}}}R=b,b=H[R],H0+=R-b&32767}}if(m){O[T++]=268435456|e3[e]<<18|kY[m];var X0=e3[e]&31,W0=kY[m]&31;k+=D2[X0]+H2[W0],++x[257+X0],++I[W0],y=W+e,++A}else O[T++]=_[W],++x[_[W]]}}for(W=Math.max(W,y);W<Z;++W)O[T++]=_[W],++x[_[W]];if(K=TY(_,V,q,O,x,I,k,T,J,W-J,K),!q)X.r=K&7|V[K/8|0]<<3,K-=7,X.h=D,X.p=H,X.i=W,X.w=y}else{for(var W=X.w||0;W<Z+q;W+=65535){var P0=W+65535;if(P0>=Z)V[K/8|0]=q,P0=Z;K=CY(V,K+1,_.subarray(W,P0))}X.i=Z}return e5(L,0,G+G7(K)+Y)};var RY=function(){var _=1,$=0;return{p:function(j){var G=_,Y=$,X=j.length|0;for(var Z=0;Z!=X;){var L=Math.min(Z+2655,X);for(;Z<L;++Z)Y+=G+=j[Z];G=(G&65535)+15*(G>>16),Y=(Y&65535)+15*(Y>>16)}_=G,$=Y},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},wE=function(_,$,j,G,Y){if(!Y){if(Y={l:1},$.dictionary){var X=$.dictionary.subarray(-32768),Z=new i_(X.length+_.length);Z.set(X),Z.set(_,X.length),_=Z,Y.w=X.length}}return yE(_,$.level==null?6:$.level,$.mem==null?Y.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,G,Y)};var fY=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var IE=function(_,$){var j=$.level,G=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=G<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Y=RY();Y.p($.dictionary),fY(_,2,Y.d())}},xE=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)F1(6,"invalid zlib data");if((_[1]>>5&1)==+!$)F1(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var a3=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var G=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:G?G.length:0},this.o=new i_(32768),this.p=new i_(0),G)this.o.set(G)}return _.prototype.e=function($){if(!this.ondata)F1(5);if(this.d)F1(4);if(!this.p.length)this.p=$;else if($.length){var j=new i_(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,G=ME(this.p,this.s,this.o);this.ondata(e5(G,j,this.s.b),this.d),this.o=e5(G,this.s.b-32768),this.s.b=this.o.length,this.p=e5(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function SY(_,$){if(!$)$={};var j=RY();j.p(_);var G=wE(_,$,$.dictionary?6:2,4);return IE(G,$),fY(G,G.length-4,j.d()),G}var gY=function(){function _($,j){a3.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(a3.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(xE(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)F1(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}a3.prototype.c.call(this,j)},_}();var CE=typeof TextDecoder<"u"&&new TextDecoder,PE=0;try{CE.decode(PY,{stream:!0}),PE=1}catch(_){}var RE=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],fE=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],SE=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],gE=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],uE=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],bE=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],vE=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],mE=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],vY=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;vY[_]=$}function mY(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function cY(_){let $=0n,j=mY(_);for(let G of j)$=$<<8n|BigInt(G);return $}function cE(_,$){let j=new Uint8Array($),G=BigInt(_);for(let Y=$-1;Y>=0;Y-=1)j[Y]=Number(G&0xffn),G>>=8n;return j}function Q5(_,$,j){let G=0n;for(let Y of $){let X=BigInt(_)>>BigInt(j-Y)&1n;G=G<<1n|X}return G}function uY(_,$){let j=28n,G=(1n<<j)-1n,Y=BigInt($%28);return(_<<Y|_>>j-Y)&G}function hE(_){let $=Q5(cY(_),uE,64),j=$>>28n&0x0fffffffn,G=$&0x0fffffffn,Y=[];for(let X of vE){j=uY(j,X),G=uY(G,X);let Z=j<<28n|G;Y.push(Q5(Z,bE,56))}return Y}function lE(_){let $=0n;for(let j=0;j<8;j+=1){let G=BigInt((7-j)*6),Y=Number(_>>G&0x3fn),X=(Y&32)>>4|Y&1,Z=Y>>1&15;$=$<<4n|BigInt(mE[j][X][Z])}return $}function pE(_,$){let j=Q5(_,SE,32)^BigInt($),G=lE(j);return Q5(G,gE,32)}function bY(_,$){let j=hE($),G=Q5(cY(_),RE,64),Y=G>>32n&0xffffffffn,X=G&0xffffffffn;for(let L of j){let V=X,q=(Y^pE(X,L))&0xffffffffn;Y=V,X=q}let Z=X<<32n|Y;return cE(Q5(Z,fE,64),8)}function rE(_){let $=String(_??""),j=new Uint8Array(8);for(let G=0;G<8;G+=1){let Y=G<$.length?$.charCodeAt(G)&255:0;j[G]=vY[Y]}return j}function hY(_,$){let j=mY($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let G=rE(_),Y=new Uint8Array(16);return Y.set(bY(j.slice(0,8),G),0),Y.set(bY(j.slice(8,16),G),8),Y}var u1="vnc";function nE(_){return Number(_)}function dE(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Y)=>Y.trim()).filter((Y)=>Y.length>0):[],j=[],G=new Set;for(let Y of $){let X=nE(Y);if(!Number.isFinite(X))continue;let Z=Number(X);if(!G.has(Z))j.push(Z),G.add(Z)}if(j.length>0)return j;return[5,2,1,0,-223]}function F5(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function oE(_,$){let j=F5(_),G=F5($);if(!j.byteLength)return new Uint8Array(G);if(!G.byteLength)return new Uint8Array(j);let Y=new Uint8Array(j.byteLength+G.byteLength);return Y.set(j,0),Y.set(G,j.byteLength),Y}function iE(_){let $=0;for(let Y of _||[])$+=Y?.byteLength||0;let j=new Uint8Array($),G=0;for(let Y of _||[]){let X=F5(Y);j.set(X,G),G+=X.byteLength}return j}function sE(){return(_)=>{let $=F5(_);try{let j=[],G=new gY((Y)=>{j.push(new Uint8Array(Y))});if(G.push($,!0),G.err)throw Error(G.msg||"zlib decompression error");return iE(j)}catch(j){try{let G=SY($);return G instanceof Uint8Array?G:new Uint8Array(G)}catch(G){let Y=G instanceof Error?G.message:"unexpected EOF";throw Error(`unexpected EOF: ${Y}`)}}}}function aE(_){return new TextEncoder().encode(String(_||""))}function K5(_){return new TextDecoder().decode(F5(_))}function tE(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function eE(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function lY(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function _D(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function $D(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),G=new DataView(j);G.setUint8(0,2),G.setUint8(1,0),G.setUint16(2,$.length,!1);let Y=4;for(let X of $)G.setInt32(Y,Number(X||0),!1),Y+=4;return new Uint8Array(j)}function pY(_,$,j,G=0,Y=0){let X=new ArrayBuffer(10),Z=new DataView(X);return Z.setUint8(0,3),Z.setUint8(1,_?1:0),Z.setUint16(2,G,!1),Z.setUint16(4,Y,!1),Z.setUint16(6,Math.max(0,$||0),!1),Z.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(X)}function B5(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function nY(_,$,j,G){if(j===1)return _[$];if(j===2)return G?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return G?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return G?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function jD(_,$,j,G){let Y=G||N5,X=F5(_),Z=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8)),L=Math.max(0,$||0)*Math.max(0,j||0)*Z;if(X.byteLength<L)throw Error(`Incomplete raw rectangle payload: expected ${L} byte(s), got ${X.byteLength}`);if(!Y.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let V=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),q=0,K=0;for(let Q=0;Q<Math.max(0,$||0)*Math.max(0,j||0);Q+=1){let F=nY(X,q,Z,Y.bigEndian),B=B5(F>>>Y.redShift&Y.redMax,Y.redMax),U=B5(F>>>Y.greenShift&Y.greenMax,Y.greenMax),H=B5(F>>>Y.blueShift&Y.blueMax,Y.blueMax);V[K]=B,V[K+1]=U,V[K+2]=H,V[K+3]=255,q+=Z,K+=4}return V}function U$(_,$,j){let G=j||N5,Y=Math.max(1,Math.floor(Number(G.bitsPerPixel||0)/8));if(_.byteLength<$+Y)return null;let X=nY(_,$,Y,G.bigEndian);return{rgba:[B5(X>>>G.redShift&G.redMax,G.redMax),B5(X>>>G.greenShift&G.greenMax,G.greenMax),B5(X>>>G.blueShift&G.blueMax,G.blueMax),255],bytesPerPixel:Y}}function p$(_,$,j,G,Y,X,Z){if(!Z)return;for(let L=0;L<X;L+=1)for(let V=0;V<Y;V+=1){let q=((G+L)*$+(j+V))*4;_[q]=Z[0],_[q+1]=Z[1],_[q+2]=Z[2],_[q+3]=Z[3]}}function dY(_,$,j,G,Y,X,Z){for(let L=0;L<X;L+=1){let V=L*Y*4,q=((G+L)*$+j)*4;_.set(Z.subarray(V,V+Y*4),q)}}function rY(_,$){let j=$,G=1;while(!0){if(_.byteLength<j+1)return null;let Y=_[j++];if(G+=Y,Y!==255)break}return{consumed:j-$,runLength:G}}function GD(_,$,j,G,Y,X,Z){let L=Y||N5,V=Math.max(1,Math.floor(Number(L.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let q=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+q)return null;let K=_.slice($+4,$+4+q),Q;try{Q=Z(K)}catch{return{consumed:4+q,skipped:!0}}let F=0,B=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4);for(let U=0;U<G;U+=64){let H=Math.min(64,G-U);for(let D=0;D<j;D+=64){let E=Math.min(64,j-D);if(Q.byteLength<F+1)return null;let M=Q[F++],z=M&127,O=(M&128)!==0;if(!O&&z===0){let x=E*H*V;if(Q.byteLength<F+x)return null;let I=X(Q.slice(F,F+x),E,H,L);F+=x,dY(B,j,D,U,E,H,I);continue}if(!O&&z===1){let x=U$(Q,F,L);if(!x)return null;F+=x.bytesPerPixel,p$(B,j,D,U,E,H,x.rgba);continue}if(!O&&z>1&&z<=16){let x=[];for(let W=0;W<z;W+=1){let T=U$(Q,F,L);if(!T)return null;F+=T.bytesPerPixel,x.push(T.rgba)}let I=z<=2?1:z<=4?2:4,A=Math.ceil(E*I/8),k=A*H;if(Q.byteLength<F+k)return null;for(let W=0;W<H;W+=1){let T=F+W*A;for(let y=0;y<E;y+=1){let J=y*I,P=T+(J>>3),R=8-I-(J&7),b=Q[P]>>R&(1<<I)-1;p$(B,j,D+y,U+W,1,1,x[b])}}F+=k;continue}if(O&&z===0){let x=0,I=0;while(I<H){let A=U$(Q,F,L);if(!A)return null;F+=A.bytesPerPixel;let k=rY(Q,F);if(!k)return null;F+=k.consumed;for(let W=0;W<k.runLength;W+=1)if(p$(B,j,D+x,U+I,1,1,A.rgba),x+=1,x>=E){if(x=0,I+=1,I>=H)break}}continue}if(O&&z>0){let x=[];for(let k=0;k<z;k+=1){let W=U$(Q,F,L);if(!W)return null;F+=W.bytesPerPixel,x.push(W.rgba)}let I=0,A=0;while(A<H){if(Q.byteLength<F+1)return null;let k=Q[F++],W=k,T=1;if(k&128){W=k&127;let J=rY(Q,F);if(!J)return null;F+=J.consumed,T=J.runLength}let y=x[W];if(!y)return null;for(let J=0;J<T;J+=1)if(p$(B,j,D+I,U+A,1,1,y),I+=1,I>=E){if(I=0,A+=1,A>=H)break}}continue}return{consumed:4+q,skipped:!0}}}return{consumed:4+q,rgba:B,decompressed:Q}}function YD(_,$,j,G,Y){let X=Y||N5,Z=Math.max(1,Math.floor(Number(X.bitsPerPixel||0)/8));if(_.byteLength<$+4+Z)return null;let V=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),q=4+Z+V*(Z+8);if(_.byteLength<$+q)return null;let K=$+4,Q=U$(_,K,X);if(!Q)return null;K+=Q.bytesPerPixel;let F=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4);p$(F,j,0,0,j,G,Q.rgba);for(let B=0;B<V;B+=1){let U=U$(_,K,X);if(!U)return null;if(K+=U.bytesPerPixel,_.byteLength<K+8)return null;let H=new DataView(_.buffer,_.byteOffset+K,8),D=H.getUint16(0,!1),E=H.getUint16(2,!1),M=H.getUint16(4,!1),z=H.getUint16(6,!1);K+=8,p$(F,j,D,E,M,z,U.rgba)}return{consumed:K-$,rgba:F}}function XD(_,$,j,G,Y,X){let Z=Y||N5,L=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8)),V=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4),q=$,K=[0,0,0,255],Q=[255,255,255,255];for(let F=0;F<G;F+=16){let B=Math.min(16,G-F);for(let U=0;U<j;U+=16){let H=Math.min(16,j-U);if(_.byteLength<q+1)return null;let D=_[q++];if(D&1){let E=H*B*L;if(_.byteLength<q+E)return null;let M=X(_.slice(q,q+E),H,B,Z);q+=E,dY(V,j,U,F,H,B,M);continue}if(D&2){let E=U$(_,q,Z);if(!E)return null;K=E.rgba,q+=E.bytesPerPixel}if(p$(V,j,U,F,H,B,K),D&4){let E=U$(_,q,Z);if(!E)return null;Q=E.rgba,q+=E.bytesPerPixel}if(D&8){if(_.byteLength<q+1)return null;let E=_[q++];for(let M=0;M<E;M+=1){let z=Q;if(D&16){let T=U$(_,q,Z);if(!T)return null;z=T.rgba,q+=T.bytesPerPixel}if(_.byteLength<q+2)return null;let O=_[q++],x=_[q++],I=O>>4,A=O&15,k=(x>>4)+1,W=(x&15)+1;p$(V,j,U+I,F+A,k,W,z)}}}}return{consumed:q-$,rgba:V}}var N5={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class W2{protocol=u1;state;framebufferWidth;framebufferHeight;serverName;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:jD,this.pipeline=_.pipeline||null,this.encodings=dE(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...N5},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:sE()}receive(_){if(_)this.buffer=oE(this.buffer,_);let $=[],j=[],G=!0;while(G){if(G=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Y=this.consume(12),X=K5(Y),Z=tE(X);if(!Z)throw Error(`Unsupported RFB version banner: ${X||"<empty>"}`);this.serverVersion=Z,this.clientVersionText=eE(Z),j.push(aE(this.clientVersionText)),$.push({type:"protocol-version",protocol:u1,server:Z.text.trim(),client:this.clientVersionText.trim()}),this.state=Z.minor>=7?"security-types":"security-type-33",G=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Y=this.buffer[0];if(Y===0){if(this.buffer.byteLength<5)break;let V=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+V)break;this.consume(1);let q=K5(this.consume(4+V).slice(4));throw Error(q||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Y)break;this.consume(1);let X=Array.from(this.consume(Y));$.push({type:"security-types",protocol:u1,types:X});let Z=null;if(X.includes(2)&&this.password!==null)Z=2;else if(X.includes(1))Z=1;else if(X.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${X.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(Z)),$.push({type:"security-selected",protocol:u1,securityType:Z,label:Z===2?"VNC Authentication":"None"}),this.state=Z===2?"security-challenge":"security-result",G=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let X=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),X===0){if(this.buffer.byteLength<4)break;let L=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+L)break;let V=K5(this.consume(4+L).slice(4));throw Error(V||"VNC server rejected the connection.")}if(X===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:u1,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",G=!0;continue}if(X!==1)throw Error(`Unsupported VNC security type ${X}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:u1,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",G=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Y=this.consume(16);j.push(hY(this.password,Y)),this.state="security-result",G=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let X=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),X!==0){if(this.buffer.byteLength>=4){let Z=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+Z){let L=K5(this.consume(4+Z).slice(4));throw Error(L||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:u1,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",G=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),X=Y.getUint16(0,!1),Z=Y.getUint16(2,!1),L=lY(Y,4),V=Y.getUint32(20,!1);if(this.buffer.byteLength<24+V)break;let q=this.consume(24),K=new DataView(q.buffer,q.byteOffset,q.byteLength);if(this.framebufferWidth=K.getUint16(0,!1),this.framebufferHeight=K.getUint16(2,!1),this.serverPixelFormat=lY(K,4),this.serverName=K5(this.consume(V)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(_D(this.clientPixelFormat)),j.push($D(this.encodings)),j.push(pY(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:u1,width:X,height:Z,name:this.serverName,pixelFormat:L}),G=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Y=this.buffer[0];if(Y===0){if(this.buffer.byteLength<4)break;let Z=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),L=4,V=[],q=!1,K=!!this.pipeline;for(let F=0;F<Z;F+=1){if(this.buffer.byteLength<L+12){q=!0;break}let B=new DataView(this.buffer.buffer,this.buffer.byteOffset+L,12),U=B.getUint16(0,!1),H=B.getUint16(2,!1),D=B.getUint16(4,!1),E=B.getUint16(6,!1),M=B.getInt32(8,!1);if(L+=12,M===0){let z=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),O=D*E*z;if(this.buffer.byteLength<L+O){q=!0;break}let x=this.buffer.slice(L,L+O);if(L+=O,K)this.pipeline.processRawRect(x,U,H,D,E,this.clientPixelFormat),V.push({kind:"pipeline",x:U,y:H,width:D,height:E});else V.push({kind:"rgba",x:U,y:H,width:D,height:E,rgba:this.decodeRawRect(x,D,E,this.clientPixelFormat)});continue}if(M===2){let z=YD(this.buffer,L,D,E,this.clientPixelFormat);if(!z){q=!0;break}if(K){let O=this.buffer.slice(L,L+z.consumed);this.pipeline.processRreRect(O,U,H,D,E,this.clientPixelFormat),V.push({kind:"pipeline",x:U,y:H,width:D,height:E})}else V.push({kind:"rgba",x:U,y:H,width:D,height:E,rgba:z.rgba});L+=z.consumed;continue}if(M===1){if(this.buffer.byteLength<L+4){q=!0;break}let z=new DataView(this.buffer.buffer,this.buffer.byteOffset+L,4),O=z.getUint16(0,!1),x=z.getUint16(2,!1);if(L+=4,K)this.pipeline.processCopyRect(U,H,D,E,O,x),V.push({kind:"pipeline",x:U,y:H,width:D,height:E});else V.push({kind:"copy",x:U,y:H,width:D,height:E,srcX:O,srcY:x});continue}if(M===16){let z=GD(this.buffer,L,D,E,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!z){q=!0;break}if(L+=z.consumed,z.skipped)continue;if(K&&z.decompressed)this.pipeline.processZrleTileData(z.decompressed,U,H,D,E,this.clientPixelFormat),V.push({kind:"pipeline",x:U,y:H,width:D,height:E});else V.push({kind:"rgba",x:U,y:H,width:D,height:E,rgba:z.rgba});continue}if(M===5){let z=XD(this.buffer,L,D,E,this.clientPixelFormat,this.decodeRawRect);if(!z){q=!0;break}if(K){let O=this.buffer.slice(L,L+z.consumed);this.pipeline.processHextileRect(O,U,H,D,E,this.clientPixelFormat),V.push({kind:"pipeline",x:U,y:H,width:D,height:E})}else V.push({kind:"rgba",x:U,y:H,width:D,height:E,rgba:z.rgba});L+=z.consumed;continue}if(M===-223){if(this.framebufferWidth=D,this.framebufferHeight=E,K)this.pipeline.initFramebuffer(D,E);V.push({kind:"resize",x:U,y:H,width:D,height:E});continue}throw Error(`Unsupported VNC rectangle encoding ${M}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(q)break;this.consume(L);let Q={type:"framebuffer-update",protocol:u1,width:this.framebufferWidth,height:this.framebufferHeight,rects:V};if(K)Q.framebuffer=this.pipeline.getFramebuffer();$.push(Q),j.push(pY(!0,this.framebufferWidth,this.framebufferHeight)),G=!0;continue}if(Y===2){this.consume(1),$.push({type:"bell",protocol:u1}),G=!0;continue}if(Y===3){if(this.buffer.byteLength<8)break;let Z=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+Z)break;this.consume(8);let L=K5(this.consume(Z));$.push({type:"clipboard",protocol:u1,text:L}),G=!0;continue}throw Error(`Unsupported VNC server message type ${Y}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var i1="piclaw://vnc";function sY(_){let $=String(_||"").trim();return $?`${i1}/${encodeURIComponent($)}`:i1}var Y7="piclaw:vnc-popout:",ZD=60000;function aY(_=globalThis){try{return _?.localStorage??null}catch{return null}}function LD(_=globalThis){let $=cG(_);if($)return $;return`vnc-popout-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function tY(_,$=Date.now()){if(!_||typeof _.key!=="function"||!Number.isFinite(_.length))return;let j=[];for(let G=0;G<Number(_.length||0);G+=1){let Y=_.key(G);if(Y&&Y.startsWith(Y7))j.push(Y)}for(let G of j)try{let Y=_.getItem(G);if(!Y){_.removeItem(G);continue}let X=JSON.parse(Y),Z=Number(X?.expiresAt||0);if(!Number.isFinite(Z)||Z<=$)_.removeItem(G)}catch{V2(_,G)}}function qD(_,$=globalThis,j=Date.now()){let G=W4(_);if(G===null)return null;let Y=aY($);if(!Y)return null;tY(Y,j);let X=LD($);try{return Y.setItem(`${Y7}${X}`,JSON.stringify({password:G,expiresAt:j+ZD})),X}catch{return null}}function VD(_,$=globalThis,j=Date.now()){let G=String(_||"").trim();if(!G)return null;let Y=aY($);if(!Y)return null;tY(Y,j);let X=`${Y7}${G}`;try{let Z=Y.getItem(X);if(Y.removeItem(X),!Z)return null;let L=JSON.parse(Z),V=Number(L?.expiresAt||0);if(!Number.isFinite(V)||V<=j)return null;return W4(L?.password)}catch{try{Y.removeItem(X)}catch{}return null}}function QD(_,$,j=globalThis){let G=String(_||"").trim();if(!G)return null;let Y={pane_path:sY(G)},X=qD($,j);if(X)Y.vnc_secret=X;return Y}function KD(_){let $=String(_||"");if($===i1)return null;if(!$.startsWith(`${i1}/`))return null;let j=$.slice(`${i1}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function o1(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function BD(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),G=await j.json().catch(()=>({}));if(!j.ok)throw Error(G?.error||`HTTP ${j.status}`);return G}function FD(){if(typeof window>"u")return!1;try{let _=new URLSearchParams(window.location.search).get("pane_popout"),$=String(_||"").trim().toLowerCase();return $==="1"||$==="true"||$==="yes"}catch{return!1}}function ND(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",G=new URL(`${j}//${window.location.host}/vnc/ws`);if(G.searchParams.set("target",String(_||"")),$)G.searchParams.set("handoff",String($));return G.toString()}function UD(_){return String(_||"").trim()||"localhost"}function ED(_,$){let j=UD(_),G=Math.floor(Number($||0));if(!Number.isFinite(G)||G<=0||G>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${G}`}function DD(_={}){let $=Boolean(_?.enabled),j=Boolean(_?.directConnectEnabled);if((Array.isArray(_?.targets)?_.targets.length:Number(_?.targetCount||0))>0)return{title:"",body:""};if(j)return{title:"No saved VNC targets yet.",body:"Connect directly above."};if(!$)return{title:"VNC is not configured yet.",body:"No saved targets are available and direct connect is disabled on this host."};return{title:"No saved VNC targets yet.",body:"This host has no configured VNC targets, and direct connect is disabled."}}function oY(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}function iY(_){if(!String(_?.handoffToken||"").trim())return!1;return Number(_?.bytesIn||0)<=0&&!Boolean(_?.hasRenderedFrame)&&Number(_?.reconnectAttempts||0)<=0}function HD(_,$){if(!_||!$||typeof $.appendChild!=="function")return!1;try{$.innerHTML=""}catch{}return $.appendChild(_),!0}class eY{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pointerInputAbortController=null;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=KD($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=oY("vnc_handoff");let j=oY("vnc_secret"),G=VD(j);if(G!==null)this.authPassword=G;this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(_=null){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let $=Math.min(8000,1500+this.reconnectAttempts*1000),j=Number.isFinite(_)?Math.max(0,Number(_)):$;this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},j)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=null;try{this.pointerInputAbortController?.abort?.()}catch{}if(this.pointerInputAbortController=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled),G=DD({enabled:_?.enabled,directConnectEnabled:j,targets:$});this.bodyEl.innerHTML=`
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
                                    <div style="font-weight:600;margin-bottom:6px;">${o1(X.label||X.id)}</div>
                                    <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);">${o1(X.id)}</div>
                                    <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${X.readOnly?"Read-only target":"Interactive target"}</div>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                                    <button type="button" data-target-open-tab="${o1(X.id)}" data-target-label="${o1(X.label||X.id)}" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;cursor:pointer;color:inherit;">Connect</button>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                `:`
                    <div style="min-height:0;display:grid;place-items:center;justify-items:center;">
                        <div style="width:min(100%,540px);text-align:center;padding:24px 20px;border:1px dashed var(--border-color);border-radius:10px;background:transparent;font-size:13px;color:var(--text-secondary);line-height:1.5;display:grid;gap:6px;">
                            <div style="font-weight:600;color:var(--text-primary);">${o1(G.title)}</div>
                            <div>${o1(G.body)}</div>
                        </div>
                    </div>
                `}
            </div>
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Y=()=>{let X=ED(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!X)return;this.authPassword=W4(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(X,X)};this.directHostInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Y()}),this.directPortInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Y()}),this.directPasswordInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Y()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Y());for(let X of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))X.addEventListener("click",()=>{let Z=X.getAttribute("data-target-open-tab"),L=X.getAttribute("data-target-label")||Z||"VNC";if(!Z)return;this.openTargetTab(Z,L)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target",G=FD();if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=G?`
                <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:6px;">
                    <div data-vnc-session-chrome style="padding:6px 8px;border:1px solid var(--border-color);border-radius:8px;background:transparent;display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
                        <div data-display-info style="min-width:0;flex:1 1 240px;font-size:12px;color:var(--text-secondary);line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Negotiating remote display…</div>
                        <input type="password" data-vnc-password placeholder="Password" autocomplete="current-password" style="width:150px;max-width:100%;padding:6px 8px;border:1px solid var(--border-color);border-radius:6px;background:transparent;color:inherit;" />
                        <button type="button" data-vnc-reconnect="1" style="padding:6px 10px;border:1px solid var(--border-color);border-radius:6px;background:transparent;cursor:pointer;color:inherit;">Reconnect</button>
                    </div>
                    <div data-display-stage style="min-height:0;height:100%;border:1px solid var(--border-color);border-radius:8px;background:#0a0a0a;display:flex;align-items:center;justify-content:center;padding:4px;position:relative;overflow:hidden;">
                        <canvas data-display-canvas tabindex="0" style="display:none;max-width:100%;max-height:100%;width:auto;height:auto;image-rendering:auto;box-shadow:none;border-radius:2px;background:#000;"></canvas>
                        <div data-display-placeholder style="max-width:520px;text-align:center;color:#d7d7d7;line-height:1.5;">
                            <div style="font-weight:600;font-size:14px;margin-bottom:6px;">${o1(j)}</div>
                            <div style="font-size:12px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                        </div>
                    </div>
                </div>
            `:`
                <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:12px;">
                    <div data-vnc-session-chrome style="padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:transparent;display:grid;gap:10px;">
                        <div style="display:grid;gap:4px;min-width:0;">
                            <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${o1($.id||this.targetId||"")} · ${$.read_only?"read-only":"interactive"} · websocket → TCP proxy</div>
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
                            <div style="font-weight:700;font-size:18px;margin-bottom:8px;">${o1(j)}</div>
                            <div style="font-size:13px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                        </div>
                    </div>
                </div>
            `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=W4(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=W4(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",G=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Y=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",X=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${G}${Y}${X}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let G=j?.reveal===!0;if(this.canvas.style.display=G||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=G||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let G=JY($,j,this.canvas.width,this.canvas.height);this.displayScale=G,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*G))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*G))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return n3(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(E2(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none";try{this.pointerInputAbortController?.abort?.()}catch{}let _=new AbortController;this.pointerInputAbortController=_;let $=_.signal,j=this.canvas.ownerDocument||document,G=j.defaultView||window,Y=new Map,X=new Map,Z=new Map,L=new Map,V=new Set,q=!1,K=(A)=>this.getFramebufferPointFromEvent(A)||X.get(A?.pointerId)||{x:0,y:0},Q=(A)=>{if(!A||!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let k=this.canvas.getBoundingClientRect?.();if(!k||!k.width||!k.height)return null;return n3(A.clientX,A.clientY,k,this.protocol.framebufferWidth,this.protocol.framebufferHeight)},F=(A)=>{let k=Z.get(A);if(k)G.clearTimeout(k),Z.delete(A)},B=(A)=>{let k=L.get(A);if(k?.holdTimer)G.clearTimeout(k.holdTimer);L.delete(A)},U=()=>{for(let A of L.keys())B(A)},H=()=>{if(!V.size)q=!1},D=(A,k=80)=>{let W=String(A?.pointerType||"").toLowerCase();if(!WY(W))return;let T=Number(A?.pointerId);if(!Number.isFinite(T))return;F(T);let y=G.setTimeout(()=>{if(Z.delete(T),!Y.has(T)&&!this.pointerButtonMask)return;M({pointerId:T,pointerType:W,type:"pointercancel",clientX:A?.clientX,clientY:A?.clientY},{resetAll:!0})},k);Z.set(T,y)},E=(A=null)=>{if(!Y.size&&!this.pointerButtonMask&&!L.size)return;for(let W of Z.keys())F(W);U(),V.clear(),q=!1;let k=A||X.values().next().value||{x:0,y:0};Y.clear(),X.clear(),this.pointerButtonMask=0,this.sendPointerEvent(0,k.x,k.y)},M=(A,k={})=>{if(k.resetAll){let P=Number(A?.pointerId);F(P),E(K(A));try{this.canvas?.releasePointerCapture?.(P)}catch{}return}let W=K(A),T=Number(A?.pointerId);F(T),B(T),V.delete(T),H();let y=Y.has(T),J=Y.get(T)??p3(A);if(!y&&!J&&!this.pointerButtonMask)return;if(Y.delete(T),X.delete(T),J)this.pointerButtonMask&=~J;else if(!Y.size)this.pointerButtonMask=0;this.sendPointerEvent(this.pointerButtonMask,W.x,W.y);try{this.canvas?.releasePointerCapture?.(T)}catch{}},z=(A)=>{if(q)return;let k=L.get(A);if(!k||k.dragActivated)return;k.dragActivated=!0,k.holdTimer=null;let W=h$(0);if(!W)return;Y.set(A,(Y.get(A)??0)|W),this.pointerButtonMask|=W,D({pointerId:A,pointerType:"touch",clientX:k.lastClientX,clientY:k.lastClientY}),this.sendPointerEvent(this.pointerButtonMask,k.lastPoint.x,k.lastPoint.y)},O=(A,k,W={})=>{let T=L.get(A);if(!T)return!1;let y=k||T.lastPoint||{x:0,y:0},J=Number.isFinite(W.clientX)?Number(W.clientX):T.lastClientX,P=Number.isFinite(W.clientY)?Number(W.clientY):T.lastClientY;if(V.delete(A),W.cancelled||q){if(B(A),H(),Y.has(A)||this.pointerButtonMask)E(y);return!0}if(T.dragActivated||Y.has(A))return M({pointerId:A,pointerType:"touch",type:"pointerup",clientX:J,clientY:P}),H(),!0;let R=Date.now()-T.startedAt,b=HY({startX:T.startClientX,startY:T.startClientY,clientX:J,clientY:P,elapsedMs:R});if(F(A),B(A),X.delete(A),H(),b){let c=h$(0);this.sendPointerEvent(c,y.x,y.y),this.sendPointerEvent(0,y.x,y.y)}else this.sendPointerEvent(this.pointerButtonMask,y.x,y.y);return!0};this.canvas.addEventListener("contextmenu",(A)=>{A.preventDefault()},{signal:$}),this.canvas.addEventListener("pointermove",(A)=>{let k=this.getFramebufferPointFromEvent(A);if(!k)return;let W=String(A?.pointerType||"").toLowerCase(),T=r1(W);if(X.set(A.pointerId,k),T){let y=L.get(A.pointerId);if(y){if(y.lastClientX=Number(A?.clientX||0),y.lastClientY=Number(A?.clientY||0),y.lastPoint=k,!y.dragActivated&&r3({startX:y.startClientX,startY:y.startClientY,clientX:y.lastClientX,clientY:y.lastClientY}))B(A.pointerId),L.set(A.pointerId,{...y,holdTimer:null,dragActivated:!1});if(!y.dragActivated){this.sendPointerEvent(this.pointerButtonMask,k.x,k.y);return}}if(q)return}if(Y.has(A.pointerId)&&H4(A)){M(A,{resetAll:!0});return}if(this.pointerButtonMask&&!Y.has(A.pointerId)&&H4(A)){E(k);return}if(Y.has(A.pointerId))D(A);this.sendPointerEvent(this.pointerButtonMask,k.x,k.y)},{signal:$}),this.canvas.addEventListener("pointerdown",(A)=>{let k=this.getFramebufferPointFromEvent(A);if(!k)return;let W=String(A?.pointerType||"").toLowerCase(),T=r1(W);if(A.preventDefault(),this.canvas?.focus?.(),X.set(A.pointerId,k),T){if(V.add(A.pointerId),V.size>1){let P=[...V];q=!0,E(k);for(let R of P)V.add(R);q=!0;return}B(A.pointerId);let J={startClientX:Number(A?.clientX||0),startClientY:Number(A?.clientY||0),lastClientX:Number(A?.clientX||0),lastClientY:Number(A?.clientY||0),startedAt:Date.now(),lastPoint:k,holdTimer:null,dragActivated:!1};J.holdTimer=G.setTimeout(()=>{z(A.pointerId)},260),L.set(A.pointerId,J),this.sendPointerEvent(this.pointerButtonMask,k.x,k.y);return}if(W==="mouse")try{this.canvas?.setPointerCapture?.(A.pointerId)}catch{}let y=p3(A);if(!y)return;Y.set(A.pointerId,(Y.get(A.pointerId)??0)|y),this.pointerButtonMask|=y,D(A),this.sendPointerEvent(this.pointerButtonMask,k.x,k.y)},{signal:$,passive:!1}),this.canvas.addEventListener("pointerup",(A)=>{if(A.preventDefault(),r1(A?.pointerType)){let k=K(A);if(O(A.pointerId,k,{clientX:A?.clientX,clientY:A?.clientY}))return}M(A)},{signal:$,passive:!1}),this.canvas.addEventListener("pointercancel",(A)=>{if(A.preventDefault(),r1(A?.pointerType)){let k=K(A);if(O(A.pointerId,k,{clientX:A?.clientX,clientY:A?.clientY,cancelled:!0}))return}M(A,{resetAll:!0})},{signal:$,passive:!1}),this.canvas.addEventListener("pointerleave",(A)=>{if(L.has(A.pointerId)&&r1(A?.pointerType)){O(A.pointerId,K(A),{clientX:A?.clientX,clientY:A?.clientY,cancelled:!0});return}if(!Y.has(A.pointerId))return;if(!H4(A))return;M(A,{resetAll:!0})},{signal:$}),this.canvas.addEventListener("pointerout",(A)=>{if(L.has(A.pointerId)&&r1(A?.pointerType)){O(A.pointerId,K(A),{clientX:A?.clientX,clientY:A?.clientY,cancelled:!0});return}if(!Y.has(A.pointerId))return;if(!H4(A))return;M(A,{resetAll:!0})},{signal:$}),this.canvas.addEventListener("lostpointercapture",(A)=>{M(A,{resetAll:!0})},{signal:$}),G.addEventListener("pointermove",(A)=>{if(!Y.size&&!this.pointerButtonMask||!H4(A))return;if(!Y.has(A.pointerId)&&!this.pointerButtonMask)return;M(A,{resetAll:!0})},{signal:$}),G.addEventListener("pointerup",(A)=>{if(!Y.has(A.pointerId)&&!this.pointerButtonMask&&!L.has(A.pointerId))return;if(A.preventDefault?.(),r1(A?.pointerType)){let k=K(A);if(O(A.pointerId,k,{clientX:A?.clientX,clientY:A?.clientY}))return}M(A,{resetAll:!Y.has(A.pointerId)})},{signal:$,passive:!1}),G.addEventListener("pointercancel",(A)=>{if(!Y.has(A.pointerId)&&!this.pointerButtonMask&&!L.has(A.pointerId))return;if(A.preventDefault?.(),r1(A?.pointerType)){let k=K(A);if(O(A.pointerId,k,{clientX:A?.clientX,clientY:A?.clientY,cancelled:!0}))return}M(A,{resetAll:!0})},{signal:$,passive:!1});let x=(A)=>{if(!Y.size&&!this.pointerButtonMask&&!L.size)return;if(!DY(A))return;let k=A?.changedTouches?.[0]||A?.touches?.[0]||null,W=Q(k)||X.values().next().value||L.values().next().value?.lastPoint||{x:0,y:0};if(!Y.size&&!this.pointerButtonMask&&L.size===1){let[T]=L.entries().next().value||[];if(Number.isFinite(T)){O(T,W,{clientX:k?.clientX,clientY:k?.clientY,cancelled:A?.type==="touchcancel"});return}}E(W)},I=(A,k={})=>{if(!Y.size&&!this.pointerButtonMask&&!L.has(A?.pointerId))return;if(!H4(A))return;if(A?.preventDefault?.(),r1(A?.pointerType)){let W=K(A);if(O(A.pointerId,W,{clientX:A?.clientX,clientY:A?.clientY,cancelled:k.resetAll===!0}))return}M(A,{resetAll:k.resetAll===!0||!Y.has(A?.pointerId)})};this.canvas.addEventListener("touchend",x,{signal:$,passive:!0,capture:!0}),this.canvas.addEventListener("touchcancel",x,{signal:$,passive:!0,capture:!0}),j.addEventListener("touchend",x,{signal:$,passive:!0,capture:!0}),j.addEventListener("touchcancel",x,{signal:$,passive:!0,capture:!0}),G.addEventListener("touchend",x,{signal:$,passive:!0,capture:!0}),G.addEventListener("touchcancel",x,{signal:$,passive:!0,capture:!0}),j.addEventListener("pointerup",(A)=>{I(A)},{signal:$,passive:!1,capture:!0}),j.addEventListener("pointercancel",(A)=>{I(A,{resetAll:!0})},{signal:$,passive:!1,capture:!0}),G.addEventListener("mouseup",()=>{if(!Y.size&&!this.pointerButtonMask&&!L.size)return;E()},{signal:$}),G.addEventListener("blur",()=>{if(!Y.size&&!this.pointerButtonMask&&!L.size)return;E()},{signal:$}),j.addEventListener("visibilitychange",()=>{if(j.visibilityState==="hidden")E()},{signal:$}),this.canvas.addEventListener("wheel",(A)=>{let k=this.getFramebufferPointFromEvent(A);if(!k)return;A.preventDefault();for(let W of OY(A.deltaY,k.x,k.y,this.pointerButtonMask))this.socketBoundary?.send?.(W)},{signal:$,passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(zY(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=d3(_);if($==null)return;let j=_.code||_.key,G=this.pressedKeysyms.get(j);if(AY(G,$,_.repeat)){_.preventDefault();return}_.preventDefault(),this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??d3(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((G)=>G.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Y of _.rects||[])if(Y.kind==="resize")this.ensureCanvasSize(Y.width,Y.height);let G=this.canvas?.getContext("2d",{alpha:!1});if(G){let Y=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);G.putImageData(Y,0,0),$=!0}}else for(let G of _.rects||[]){if(G.kind==="resize"){this.ensureCanvasSize(G.width,G.height);continue}if(G.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(G),$=!0;continue}if(G.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(G),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let G=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${G}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${G}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new W2);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,G=$.receive(j);for(let Y of G.outgoing||[])this.socketBoundary?.send?.(Y);for(let Y of G.events||[])this.applyRemoteDisplayEvent(Y)}catch(j){let G=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${G}`),this.updateDisplayInfo(`Display protocol error: ${G}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(G))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),G=await EY(),Y={};if(G)Y.pipeline=G,Y.decodeRawRect=(L,V,q,K)=>G.decodeRawRectToRgba(L,V,q,K);let X=W4(this.authPassword);if(X!==null)Y.password=X;if(j)Y.encodings=j;let Z=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new W2(Y),this.hasRenderedFrame=Z,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=Z?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Z?"none":"";this.socketBoundary=new m3({url:ND(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(L)=>{this.applyMetrics(L)},onMessage:(L)=>{this.handleSocketMessage(L)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(iY({handoffToken:$,bytesIn:this.bytesIn,hasRenderedFrame:this.hasRenderedFrame,reconnectAttempts:this.reconnectAttempts})){this.pendingHandoffToken=null,this.setStatus("Transferred VNC session was not ready yet. Retrying…"),this.updateDisplayInfo("Transferred VNC session was not ready yet. Retrying without handoff…"),this.updateDisplayMeta("handoff-retrying"),this.scheduleReconnect(150);return}if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),iY({handoffToken:$,bytesIn:this.bytesIn,hasRenderedFrame:this.hasRenderedFrame,reconnectAttempts:this.reconnectAttempts})){this.pendingHandoffToken=null,this.setStatus("Transferred VNC session was not ready yet. Retrying…"),this.updateDisplayInfo("Transferred VNC session was not ready yet. Retrying without handoff…"),this.updateDisplayMeta("handoff-retrying"),this.scheduleReconnect(150);return}if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await BD(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${o1(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}beforeDetachFromHost(){this.releasePressedKeys(),this.setStatus("Moving VNC session…"),this.updateDisplayInfo("Moving VNC session to a new window…"),this.updateDisplayMeta("moving")}afterAttachToHost(){this.attachDisplayResizeObserver(),this.updateCanvasScale(),requestAnimationFrame(()=>this.focus())}moveHost(_){if(this.disposed||!this.root)return!1;if(this.releasePressedKeys(),this.container=_,!HD(this.root,_))return!1;return this.afterAttachToHost(),!0}async preparePopoutTransfer(){return QD(this.targetId,this.authPassword)}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var X7={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===i1||$.startsWith(`${i1}/`)?9000:!1},mount(_,$){return new eY(_,$)}};import{classHighlighter as WD,highlightTree as OD,StreamLanguage as v0,cssLanguage as zD,cppLanguage as AD,goLanguage as JD,htmlLanguage as kD,javascriptLanguage as MD,jsxLanguage as TD,tsxLanguage as yD,typescriptLanguage as wD,jsonLanguage as ID,markdownLanguage as xD,pythonLanguage as CD,rustLanguage as PD,StandardSQL as RD,xmlLanguage as fD,yamlLanguage as SD,dockerFile as gD,powerShell as uD,ruby as bD,shell as vD,swift as mD,toml as cD,clojure as hD,cmake as lD,coffeeScript as pD,crystal as rD,cypher as nD,d as dD,diff as oD,eiffel as iD,elm as sD,erlang as aD,factor as tD,forth as eD,fortran as _H,gas as $H,gherkin as jH,groovy as GH,haskell as YH,haxe as XH,http as ZH,jinja2 as LH,julia as qH,liveScript as VH,lua as QH,mathematica as KH,fSharp as BH,nginx as FH,octave as NH,oz as UH,pascal as EH,perl as DH,properties as HH,protobuf as WH,pug as OH,puppet as zH,r as AH,sas as JH,sass as kH,scheme as MH,smalltalk as TH,solr as yH,sparql as wH,stex as IH,stylus as xH,tcl as CH,textile as PH,turtle as RH,vb as fH,verilog as SH,vhdl as gH,wast as uH,webIDL as bH,xQuery as vH}from"#editor-vendor/codemirror";function O4(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var mH={js:"JavaScript",javascript:"JavaScript",ts:"TypeScript",typescript:"TypeScript",jsx:"JSX",tsx:"TSX",py:"Python",python:"Python",sh:"Shell",shell:"Shell",bash:"Bash",zsh:"Zsh",ps1:"PowerShell",powershell:"PowerShell",md:"Markdown",markdown:"Markdown",yml:"YAML",yaml:"YAML",json:"JSON",html:"HTML",css:"CSS",sql:"SQL",go:"Go",c:"C",cc:"C++",cpp:"C++","c++":"C++",cxx:"C++",h:"C/C++",hh:"C++",hpp:"C++",hxx:"C++",rust:"Rust",rs:"Rust",ruby:"Ruby",swift:"Swift",toml:"TOML",dockerfile:"Dockerfile",asm:"Gas",clj:"Clojure",clojure:"Clojure",cmake:"CMake",coffee:"CoffeeScript",coffeescript:"CoffeeScript",conf:"nginx",cr:"Crystal",crystal:"Crystal",cypher:"Cypher",d:"D",diff:"Diff",eiffel:"Eiffel",elm:"Elm",erl:"Erlang",erlang:"Erlang",f90:"Fortran",f95:"Fortran",factor:"Factor",feature:"Gherkin",forth:"Forth",fortran:"Fortran",fsharp:"ML",gas:"Gas",gherkin:"Gherkin",groovy:"Groovy",haskell:"Haskell",haxe:"Haxe",hs:"Haskell",http:"HTTP",hx:"Haxe",ini:"Properties",jade:"Pug",jinja:"Jinja2",jinja2:"Jinja2",jl:"Julia",julia:"Julia",latex:"LaTeX",livescript:"LiveScript",ls:"LiveScript",lua:"Lua",mathematica:"Mathematica",matlab:"Octave",ml:"ML",nginx:"nginx",ocaml:"ML",octave:"Octave",oz:"Oz",pas:"Pascal",pascal:"Pascal",patch:"Diff",perl:"Perl",pl:"Perl",pm:"Perl",pp:"Puppet",properties:"Properties",proto:"Protobuf",protobuf:"Protobuf",pug:"Pug",puppet:"Puppet",r:"R",rq:"SPARQL",s:"Gas",sas:"SAS",sass:"Sass",scheme:"Scheme",scm:"Scheme",scss:"Sass",smalltalk:"Smalltalk",sml:"ML",sparql:"SPARQL",st:"Smalltalk",styl:"Stylus",stylus:"Stylus",sv:"Verilog",tcl:"Tcl",tex:"LaTeX",textile:"Textile",ttl:"Turtle",turtle:"Turtle",vb:"VB",verilog:"Verilog",vhdl:"VHDL",wasm:"WebAssembly",wast:"WebAssembly",webidl:"WebIDL",wl:"Mathematica",xq:"XQuery",xquery:"XQuery"},cH=v0.define(vD).parser,hH=v0.define(uD).parser,lH=v0.define(gD).parser,pH=v0.define(bD).parser,rH=v0.define(mD).parser,nH=v0.define(cD).parser,_X=v0.define(hD).parser,dH=v0.define(lD).parser,$X=v0.define(pD).parser,jX=v0.define(rD).parser,oH=v0.define(nD).parser,iH=v0.define(dD).parser,GX=v0.define(oD).parser,sH=v0.define(iD).parser,aH=v0.define(sD).parser,YX=v0.define(aD).parser,tH=v0.define(tD).parser,eH=v0.define(eD).parser,Z7=v0.define(_H).parser,L7=v0.define($H).parser,XX=v0.define(jH).parser,_W=v0.define(GH).parser,ZX=v0.define(YH).parser,LX=v0.define(XH).parser,$W=v0.define(ZH).parser,qX=v0.define(LH).parser,VX=v0.define(qH).parser,QX=v0.define(VH).parser,jW=v0.define(QH).parser,KX=v0.define(KH).parser,$6=v0.define(BH).parser,GW=v0.define(FH).parser,BX=v0.define(NH).parser,YW=v0.define(UH).parser,FX=v0.define(EH).parser,q7=v0.define(DH).parser,NX=v0.define(HH).parser,UX=v0.define(WH).parser,EX=v0.define(OH).parser,DX=v0.define(zH).parser,XW=v0.define(AH).parser,ZW=v0.define(JH).parser,HX=v0.define(kH).parser,WX=v0.define(MH).parser,OX=v0.define(TH).parser,LW=v0.define(yH).parser,zX=v0.define(wH).parser,V7=v0.define(IH).parser,AX=v0.define(xH).parser,qW=v0.define(CH).parser,VW=v0.define(PH).parser,JX=v0.define(RH).parser,QW=v0.define(fH).parser,kX=v0.define(SH).parser,KW=v0.define(gH).parser,MX=v0.define(uH).parser,BW=v0.define(bH).parser,TX=v0.define(vH).parser;function yX(_){let $=String(_||"").trim().toLowerCase();if(!$)return"text";return mH[$]||String(_||"").trim()}function FW(_){switch(String(_||"").trim().toLowerCase()){case"js":case"javascript":return MD.parser;case"ts":case"typescript":return wD.parser;case"jsx":return TD.parser;case"tsx":return yD.parser;case"py":case"python":return CD.parser;case"json":return ID.parser;case"css":return zD.parser;case"html":return kD.parser;case"xml":return fD.parser;case"yaml":case"yml":return SD.parser;case"md":case"markdown":return xD.parser;case"sql":return RD.language.parser;case"go":return JD.parser;case"c":case"cc":case"cpp":case"cxx":case"c++":case"h":case"hh":case"hpp":case"hxx":return AD.parser;case"sh":case"bash":case"shell":case"zsh":return cH;case"ps1":case"powershell":return hH;case"dockerfile":return lH;case"rb":case"ruby":return pH;case"rs":case"rust":return PD.parser;case"swift":return rH;case"toml":return nH;case"asm":return L7;case"clj":return _X;case"clojure":return _X;case"cmake":return dH;case"coffee":return $X;case"coffeescript":return $X;case"cr":return jX;case"crystal":return jX;case"cypher":return oH;case"d":return iH;case"diff":return GX;case"eiffel":return sH;case"elm":return aH;case"erl":return YX;case"erlang":return YX;case"f90":return Z7;case"f95":return Z7;case"factor":return tH;case"feature":return XX;case"forth":return eH;case"fortran":return Z7;case"fsharp":return $6;case"gas":return L7;case"gherkin":return XX;case"groovy":return _W;case"haskell":return ZX;case"haxe":return LX;case"hs":return ZX;case"http":return $W;case"hx":return LX;case"ini":return NX;case"jade":return EX;case"jinja":return qX;case"jinja2":return qX;case"jl":return VX;case"julia":return VX;case"latex":return V7;case"livescript":return QX;case"ls":return QX;case"lua":return jW;case"mathematica":return KX;case"matlab":return BX;case"ml":return $6;case"mllike":return $6;case"nginx":return GW;case"ocaml":return $6;case"octave":return BX;case"oz":return YW;case"pas":return FX;case"pascal":return FX;case"patch":return GX;case"perl":return q7;case"pl":return q7;case"pm":return q7;case"pp":return DX;case"properties":return NX;case"proto":return UX;case"protobuf":return UX;case"pug":return EX;case"puppet":return DX;case"r":return XW;case"rq":return zX;case"s":return L7;case"sas":return ZW;case"sass":return HX;case"scheme":return WX;case"scm":return WX;case"scss":return HX;case"smalltalk":return OX;case"sml":return $6;case"solr":return LW;case"sparql":return zX;case"st":return OX;case"stex":return V7;case"styl":return AX;case"stylus":return AX;case"sv":return kX;case"tcl":return qW;case"tex":return V7;case"textile":return VW;case"ttl":return JX;case"turtle":return JX;case"vb":return QW;case"verilog":return kX;case"vhdl":return KW;case"wasm":return MX;case"wast":return MX;case"webidl":return BW;case"wl":return KX;case"xq":return TX;case"xquery":return TX;default:return null}}function O2(_,$){let j=FW($);if(!j)return O4(_);let G=[];try{let Z=j.parse(_);OD(Z,WD,(L,V,q)=>{if(!q||L>=V)return;G.push({from:L,to:V,cls:q})})}catch{return O4(_)}if(!G.length)return O4(_);G.sort((Z,L)=>Z.from-L.from||Z.to-L.to);let Y=0,X="";for(let Z of G){if(Z.from>Y)X+=O4(_.slice(Y,Z.from));X+=`<span class="${O4(Z.cls)}">${O4(_.slice(Z.from,Z.to))}</span>`,Y=Math.max(Y,Z.to)}if(Y<_.length)X+=O4(_.slice(Y));return X}G6();var T2=/#(\w+)/g,yW=new Set(["strong","em","b","i","u","s","del","ins","sub","sup","mark","small","br","p","ul","ol","li","blockquote","ruby","rt","rp","span","input"]),wW=new Set(["a","abbr","blockquote","br","code","del","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","input","ins","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","small","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),IW=new Set(["class","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),uX={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"]),input:new Set(["type","checked","disabled"])},xW=new Set(["http:","https:","mailto:",""]);function CW(_,$){let j=String(_||"").toLowerCase(),G=String($||"").toLowerCase();if(!G||G.startsWith("on"))return!1;if(G.startsWith("data-")||G.startsWith("aria-"))return!0;return(uX[j]||new Set).has(G)||IW.has(G)}function D7(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function k4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let G=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!xW.has(G.protocol))return null;return G.href}catch{return null}}function bX(_,$={}){if(!_)return"";if($?.sanitize===!1)return _;let j=new DOMParser().parseFromString(_,"text/html"),G=[],Y=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),X;while(X=Y.nextNode())G.push(X);for(let Z of G){let L=Z.tagName.toLowerCase();if(!wW.has(L)){let q=Z.parentNode;if(!q)continue;while(Z.firstChild)q.insertBefore(Z.firstChild,Z);q.removeChild(Z);continue}let V=uX[L]||new Set;for(let q of Array.from(Z.attributes)){let K=q.name.toLowerCase(),Q=q.value;if(K.startsWith("on")){Z.removeAttribute(q.name);continue}if(CW(L,K)){if(K==="href"){let F=k4(Q);if(!F)Z.removeAttribute(q.name);else if(Z.setAttribute(q.name,F),L==="a"){if(!Z.getAttribute("rel"))Z.setAttribute("rel","noopener noreferrer");if(/^https?:\/\//i.test(F))Z.setAttribute("target","_blank")}}else if(K==="src"){let F=L==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(Q):Q,B=k4(F,{allowDataImage:L==="img"});if(!B)Z.removeAttribute(q.name);else Z.setAttribute(q.name,B)}continue}Z.removeAttribute(q.name)}}return j.body.innerHTML}function vX(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function Y6(_,$=2){if(!_)return _;let j=_;for(let G=0;G<$;G+=1){let Y=vX(j);if(Y===j)break;j=Y}return j}function PW(_){if(!_)return{text:"",frontmatter:null};let $=_.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!$.startsWith(`---
`))return{text:$,frontmatter:null};let j=$.split(`
`),G=-1;for(let Z=1;Z<j.length;Z+=1)if(/^(---|\.\.\.)\s*$/.test(j[Z])){G=Z;break}if(G<=0)return{text:$,frontmatter:null};let Y=j.slice(1,G).join(`
`);return{text:j.slice(G+1).join(`
`).replace(/^\n+/,""),frontmatter:Y}}function RW(_){let{text:$,frontmatter:j}=PW(_);if(j===null)return $;return["<!--frontmatter-block-start-->","```yaml",j,"```","<!--frontmatter-block-end-->",$].filter(Boolean).join(`

`)}function fW(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=[],Y=[],X=!1,Z=[];for(let L of j){if(!X&&L.trim().match(/^```mermaid\s*$/i)){X=!0,Z=[];continue}if(X&&L.trim().match(/^```\s*$/)){let V=G.length;G.push(Z.join(`
`)),Y.push(`@@MERMAID_BLOCK_${V}@@`),X=!1,Z=[];continue}if(X)Z.push(L);else Y.push(L)}if(X)Y.push("```mermaid"),Y.push(...Z);return{text:Y.join(`
`),blocks:G}}function SW(_){if(!_)return _;return Y6(_,5)}function gW(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let G of $)j+=String.fromCharCode(G);return btoa(j)}function uW(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let G=0;G<$.length;G+=1)j[G]=$.charCodeAt(G);return new TextDecoder().decode(j)}function bW(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,G)=>{let Y=Number(G),X=$[Y]??"",Z=SW(X);return`<div class="mermaid-container" data-mermaid="${gW(Z)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function mX(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}function vW(_){if(!_)return _;return _.replace(/<pre><code(?:\s+class="language-([A-Za-z0-9_+-]+)")?>([\s\S]*?)<\/code><\/pre>/g,(j,G,Y)=>{let X=String(G||"").trim().toLowerCase(),Z=Y6(Y,2),L=X||"plaintext",V=O2(Z,X);return`<pre><code class="hljs language-${D7(L)}">${V}</code></pre>`}).replace(/<!--frontmatter-block-start-->\s*<pre>/g,'<pre class="frontmatter-block">').replace(/<\/pre>\s*<!--frontmatter-block-end-->/g,"</pre>")}var mW={span:new Set(["title","class","lang","dir"]),input:new Set(["type","checked","disabled"])};function cW(_,$){let j=mW[_];if(!j||!$)return"";let G=[],Y=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,X;while(X=Y.exec($)){let Z=(X[1]||"").toLowerCase();if(!Z||Z.startsWith("on")||!j.has(Z))continue;let L=X[2]??X[3]??X[4]??"";G.push(` ${Z}="${D7(L)}"`)}return G.join("")}function cX(_){if(!_)return _;return _.replace(/&lt;((?:[^"'<>]|"[^"]*"|'[^']*')*?)(?:&gt;|>)/g,($,j)=>{let G=j.trim(),Y=G.startsWith("/"),X=Y?G.slice(1).trim():G,L=X.endsWith("/")?X.slice(0,-1).trim():X,[V=""]=L.split(/\s+/,1),q=V.toLowerCase();if(!q||!yW.has(q))return $;if(q==="br")return Y?"":"<br>";if(Y)return`</${q}>`;let K=L.slice(V.length).trim(),Q=cW(q,K);return`<${q}${Q}>`})}function hX(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,G)=>`<pre><code>${$(G)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,G)=>`<code>${$(G)}</code>`)}function lX(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),G=(X)=>X.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Y;while(Y=j.nextNode()){if(!Y.nodeValue)continue;let X=G(Y.nodeValue);if(X!==Y.nodeValue)Y.nodeValue=X}return $.body.innerHTML}function hW(_){if(!window.katex)return _;let $=(Z)=>vX(Z).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(Z)=>{let L=[],V=Z.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(q)=>{let K=L.length;return L.push(q),`@@CODE_BLOCK_${K}@@`});return V=V.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(q)=>{let K=L.length;return L.push(q),`@@CODE_INLINE_${K}@@`}),{html:V,blocks:L}},G=(Z,L)=>{if(!L.length)return Z;return Z.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(V,q)=>{let K=Number(q);return L[K]??""})},Y=j(_),X=Y.html;return X=X.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(Z,L,V)=>{try{let q=katex.renderToString($(V.trim()),{displayMode:!0,throwOnError:!1});return`${L}${q}`}catch(q){let K=q instanceof Error?q.message:String(q);return`<span class="math-error" title="${D7(K)}">${Z}</span>`}}),G(X,Y.blocks)}function lW(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),G=[],Y;while(Y=j.nextNode())G.push(Y);for(let X of G){let Z=X.nodeValue;if(!Z)continue;if(T2.lastIndex=0,!T2.test(Z))continue;T2.lastIndex=0;let L=X.parentElement;if(L&&(L.closest("a")||L.closest("code")||L.closest("pre")))continue;let V=Z.split(T2);if(V.length<=1)continue;let q=$.createDocumentFragment();V.forEach((K,Q)=>{if(Q%2===1){let F=$.createElement("a");F.setAttribute("href","#"),F.className="hashtag",F.setAttribute("data-hashtag",K),F.textContent=`#${K}`,q.appendChild(F)}else q.appendChild($.createTextNode(K))}),X.parentNode?.replaceChild(q,X)}return $.body.innerHTML}function pW(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=[],Y=!1;for(let X of j){if(!Y&&X.trim().match(/^```(?:math|katex|latex)\s*$/i)){Y=!0,G.push("$$");continue}if(Y&&X.trim().match(/^```\s*$/)){Y=!1,G.push("$$");continue}G.push(X)}return G.join(`
`)}function rW(_){let $=RW(_||""),j=pW($),{text:G,blocks:Y}=fW(j),X=Y6(G,2),L=mX(X).replace(/</g,"&lt;");return{safeHtml:cX(L),mermaidBlocks:Y}}function X1(_,$,j={}){if(!_)return"";let{safeHtml:G,mermaidBlocks:Y}=rW(_),X=window.marked?marked.parse(G,{headerIds:!1,mangle:!1}):G.replace(/\n/g,"<br>");return X=hX(X),X=lX(X),X=vW(X),X=hW(X),X=lW(X),X=bW(X,Y),X=bX(X,j),X}function X6(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=Y6($,2),Y=mX(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),X=cX(Y),Z=window.marked?marked.parse(X):X.replace(/\n/g,"<br>");return Z=hX(Z),Z=lX(Z),Z=bX(Z),Z}function nW(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,G,Y,X)=>{let Z=Y.trim().split(/\s+/).map((V)=>{let[q,K]=V.split(",").map(Number);return{x:q,y:K}});if(Z.length<3)return`<polyline${G}points="${Y}"${X}/>`;let L=[`M ${Z[0].x},${Z[0].y}`];for(let V=1;V<Z.length-1;V++){let q=Z[V-1],K=Z[V],Q=Z[V+1],F=K.x-q.x,B=K.y-q.y,U=Q.x-K.x,H=Q.y-K.y,D=Math.sqrt(F*F+B*B),E=Math.sqrt(U*U+H*H),M=Math.min($,D/2,E/2);if(M<0.5){L.push(`L ${K.x},${K.y}`);continue}let z=K.x-F/D*M,O=K.y-B/D*M,x=K.x+U/E*M,I=K.y+H/E*M,k=F*H-B*U>0?1:0;L.push(`L ${z},${O}`),L.push(`A ${M},${M} 0 0 ${k} ${x},${I}`)}return L.push(`L ${Z[Z.length-1].x},${Z[Z.length-1].y}`),`<path${G}d="${L.join(" ")}"${X}/>`})}async function W$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Y=gX()==="dark"?j["tokyo-night"]:j["github-light"],X=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let Z of X)try{let L=Z.dataset.mermaid,V=uW(L||""),q=Y6(V,2),K=await $(q,{...Y,transparent:!0});K=nW(K),Z.innerHTML=K,Z.removeAttribute("data-mermaid")}catch(L){console.error("Mermaid render error:",L);let V=document.createElement("pre");V.className="mermaid-error",V.textContent=`Diagram error: ${L.message}`,Z.innerHTML="",Z.appendChild(V),Z.removeAttribute("data-mermaid")}}T_();function $Z(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let G=new Date().getTime()-$.getTime(),Y=G/1000,X=86400000;if(G<X){if(Y<60)return"just now";if(Y<3600)return`${Math.floor(Y/60)}m`;return`${Math.floor(Y/3600)}h`}if(G<5*X){let V=$.toLocaleDateString(void 0,{weekday:"short"}),q=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${V} ${q}`}let Z=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),L=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${Z} ${L}`}function D6(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function t_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function x4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}function n$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function fO(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let G=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Y=G?.[1]||j,X=G?.[2]||"",Z=G?.[3]||"",L=String($||"").split("/").slice(0,-1).join("/"),q=Y.startsWith("/")?Y:`${L?`${L}/`:""}${Y}`,K=[];for(let F of q.split("/")){if(!F||F===".")continue;if(F===".."){if(K.length>0)K.pop();continue}K.push(F)}let Q=K.join("/");return`${U6(Q)}${X}${Z}`}function H6(_){return _?.preview||null}function SO(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),G=j>=0?$.slice(j+1):$,Y=G.lastIndexOf(".");if(Y<=0||Y===G.length-1)return"none";return G.slice(Y+1)}function gO(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function uO(_,$){let j=$?.path||_?.path||"",G=[];if($?.content_type)G.push(`<span><strong>type:</strong> ${n$($.content_type)}</span>`);if(typeof $?.size==="number")G.push(`<span><strong>size:</strong> ${n$(t_($.size))}</span>`);if($?.mtime)G.push(`<span><strong>modified:</strong> ${n$(x4($.mtime))}</span>`);if(G.push(`<span><strong>kind:</strong> ${n$(gO($))}</span>`),G.push(`<span><strong>extension:</strong> ${n$(SO(j))}</span>`),j)G.push(`<span><strong>path:</strong> ${n$(j)}</span>`);if($?.truncated)G.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${G.join("")}</div>`}function bO(_){let $=H6(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=uO(_,$);if($.kind==="image"){let G=$.url||($.path?U6($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${n$(G)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let G=X1($.text||"",null,{rewriteImageSrc:(Y)=>fO(Y,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${G}</div>`}return`${j}<pre class="workspace-preview-text"><code>${n$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class e7{container;context;disposed=!1;host;constructor(_,$){this.container=_,this.context=$,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=bO(this.context)}getContent(){let _=H6(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=H6(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var _9={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=H6(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new e7(_,$)}},$9={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return H6(_)||_?.path?1:!1},mount(_,$){return new e7(_,$)}};var vO=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),mO={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},cO={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function GZ(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function jZ(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class YZ{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document",Y=GZ(j),X=cO[Y]||"\uD83D\uDCC4",Z=mO[Y]||"Office Document",L=document.createElement("div");L.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",L.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${X}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${jZ(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${jZ(Z)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(L);let V=L.querySelector("#ov-open-tab");if(V)V.addEventListener("click",()=>{let q=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class XZ{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document",Y=`/workspace/raw?path=${encodeURIComponent(j)}`,X=`/office-viewer/?url=${encodeURIComponent(Y)}&name=${encodeURIComponent(G)}`;this.iframe=document.createElement("iframe"),this.iframe.src=X,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var j9={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=GZ(_?.path);if(!$||!vO.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new YZ(_,$);return new XZ(_,$)}};var hO=/\.(csv|tsv)$/i;function ZZ(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class LZ{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"table.csv",Y=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${ZZ(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${ZZ(Y)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let Z=X.querySelector("#csv-open-tab");if(Z)Z.addEventListener("click",()=>{let L=new CustomEvent("data-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(L)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class qZ{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/data-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var G9={id:"data-viewer",label:"Data Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!hO.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new LZ(_,$);return new qZ(_,$)}};var lO=/\.(html|htm)$/i,pO=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,rO=/\.(mp4|m4v|mov|webm|ogv)$/i,nO=/\.pdf$/i;function VZ(_){if(lO.test(_))return"html";if(pO.test(_))return"image";if(rO.test(_))return"video";if(nO.test(_))return"pdf";return null}function C4(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class QZ{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"index.html",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:48px;margin-bottom:12px;">\uD83C\uDF10</div>
                    <div style="font-size:14px;color:var(--text-primary,#e2e8f0);font-weight:500;margin-bottom:4px;">${C4(G)}</div>
                    <div style="font-size:12px;color:var(--text-secondary,#94a3b8);">HTML document</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${C4(j)}</div>
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
        `,_.appendChild(Y);let X=Y.querySelector("#html-open-tab");if(X)X.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("html-viewer:open-tab",{bubbles:!0,detail:{path:j}}))});let Z=Y.querySelector("#html-edit-btn");if(Z)Z.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("html-viewer:edit-source",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class KZ{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/html-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#fff;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}class BZ{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"image",Y=`/workspace/raw?path=${encodeURIComponent(j)}`,X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${C4(Y)}" alt="${C4(G)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${C4(G)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let Z=X.querySelector("#img-open-tab");if(Z)Z.addEventListener("click",()=>{let L=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(L)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class FZ{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}class NZ{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"video.mp4",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${C4(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let X=Y.querySelector("#video-open-tab");if(X)X.addEventListener("click",()=>{let Z=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class UZ{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}class EZ{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document.pdf",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${C4(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let X=Y.querySelector("#pdf-open-tab");if(X)X.addEventListener("click",()=>{let Z=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class DZ{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var dO={html:30,image:48,pdf:52,video:54},Y9={id:"web-viewer",label:"Web Viewer",icon:"eye",capabilities:["preview"],placement:"tabs",canHandle(_){let $=_?.path||"",j=VZ($);if(!j)return!1;return dO[j]??30},mount(_,$){let j=$?.path||"",G=VZ(j),Y=$?.mode==="view";switch(G){case"html":return Y?new QZ(_,$):new KZ(_,$);case"image":return Y?new BZ(_,$):new FZ(_,$);case"video":return Y?new NZ(_,$):new UZ(_,$);case"pdf":return Y?new EZ(_,$):new DZ(_,$);default:return _.textContent="Unsupported file type.",{dispose(){},resize(){},focus(){},setContent(){},getContent(){return null},isDirty(){return!1}}}}};T_();function oO(_){let $=_.includes(".")?_.slice(_.lastIndexOf(".")):"",j=_.includes(".")?_.slice(0,_.lastIndexOf(".")):_,G=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19);return`${j}.${G}${$}`}function HZ(_){let{path:$,getCurrentMtime:j,anchorParent:G,anchorBefore:Y,onReload:X,onSaveCopy:Z,onOverwrite:L,pollMs:V=3000,ownerDocument:q=document}=_,K=null,Q=null,F=!1,B=!1,U=!1;async function H(){if(B||U||F)return;let O=j();if(!O)return;try{let x=await o7($);if(B||U||!x?.mtime)return;if(x.mtime!==O)F=!0,E(),M()}catch(x){if(typeof console<"u")console.debug("[file-conflict-monitor] mtime poll skipped:",x)}}function D(){if(E(),B)return;K=setInterval(H,V)}function E(){if(K)clearInterval(K),K=null}function M(){if(Q||B)return;let O=q.createElement("div");O.className="editor-conflict-bar",O.innerHTML=`
      <span class="editor-conflict-text">File changed on disk</span>
      <div class="editor-conflict-actions">
        <button class="editor-conflict-btn" data-action="reload" title="Discard and reload from disk">Reload</button>
        <button class="editor-conflict-btn" data-action="save-copy" title="Save current content with a new name">Save copy</button>
        <button class="editor-conflict-btn" data-action="overwrite" title="Overwrite the disk version">Overwrite</button>
        <button class="editor-conflict-btn editor-conflict-dismiss" data-action="dismiss" title="Dismiss">×</button>
      </div>
    `,O.addEventListener("click",(x)=>{let I=x.target.closest("[data-action]");if(!I)return;let A=I.getAttribute("data-action");if(A==="reload")z(),X();else if(A==="save-copy"){let k=oO($);Z(k)}else if(A==="overwrite")z(),L();else if(A==="dismiss")z()}),Q=O,G.insertBefore(O,Y)}function z(){if(Q)Q.remove(),Q=null;F=!1,D()}return{start(){D()},stop(){E()},onSaved(O){F=!1,U=!1,D()},dispose(){if(B=!0,E(),Q)Q.remove(),Q=null}}}var iO=/\.mindmap\.ya?ml$/i,b2=String(Date.now());function sO(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function WZ(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function X9(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let G=document.querySelector(`script[src="${$}"]`);if(G)G.remove();return new Promise((Y,X)=>{let Z=document.createElement("script");Z.src=_,Z.dataset.src=$,Z.onload=()=>Y(),Z.onerror=()=>X(Error(`Failed to load ${_}`)),document.head.appendChild(Z)})}function aO(_){let $=_.split("?")[0],j=document.querySelector(`link[data-href="${$}"]`);if(j&&j.href.endsWith(_))return;document.querySelectorAll(`link[data-href="${$}"], link[href="${$}"]`).forEach((Y)=>Y.remove());let G=document.createElement("link");G.rel="stylesheet",G.href=_,G.dataset.href=$,document.head.appendChild(G)}function tO(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
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
    `,_.appendChild(G)}class OZ{container;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"mindmap",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83E\uDDE0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${sO(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Mindmap Editor</div>
                <button id="mm-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">Edit in Tab</button>
            </div>`,_.appendChild(Y),Y.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class zZ{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";currentMtime=null;conflictMonitor=null;themeListener=()=>{window.__mindmapEditor?.setTheme?.(WZ())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{let j=await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json();if(j?.mtime)this.currentMtime=j.mtime;return j?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,aO("/static/css/mindmap.css?v="+b2),await Promise.all([X9("/static/js/vendor/d3-mindmap.min.js?v="+b2),X9("/static/js/vendor/js-yaml.min.js?v="+b2)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),tO(this.mindmapEl);let j=WZ(),G=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await X9("/static/js/vendor/mindmap-editor.js?v="+b2),this.disposed)return;let Y=window.__mindmapEditor;if(!Y)throw Error("__mindmapEditor not found");if(Y.mount({content:$,isDark:j,onEdit:(X)=>{this.lastContent=X,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(X)},resolveImagePath:(X)=>{if(X.startsWith("data:")||X.startsWith("http"))return X;return`/workspace/raw?path=${encodeURIComponent(G+"/"+X)}`}}),this.pendingContent!==null)Y.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener),this.initConflictMonitor()}catch(Y){if(console.error("[mindmap] Failed to load mindmap renderer:",Y),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);let j=await $.json().catch(()=>({}));this.currentMtime=j?.mtime||this.currentMtime,this.conflictMonitor?.onSaved(this.currentMtime),this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}initConflictMonitor(){if(this.conflictMonitor?.dispose(),!this.filePath)return;this.conflictMonitor=HZ({path:this.filePath,getCurrentMtime:()=>this.currentMtime,anchorParent:this.container,anchorBefore:this.mindmapEl||this.container.firstElementChild,onReload:async()=>{try{let $=await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json();if(this.disposed)return;this.currentMtime=$?.mtime||null;let j=$?.text||"";this.lastContent=j;let G=window.__mindmapEditor;if(G?.update)G.update(j);this.dirty=!1,this.dirtyCallback?.(!1),this.conflictMonitor?.onSaved(this.currentMtime)}catch(_){console.error("[mindmap] Reload failed:",_)}},onSaveCopy:async(_)=>{try{await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,content:this.lastContent})})}catch($){console.error("[mindmap] Save copy failed:",$)}},onOverwrite:()=>this.saveToWorkspace(this.lastContent)}),this.conflictMonitor.start()}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,this.conflictMonitor?.dispose(),window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var Z9={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!iO.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new OZ(_,$);return new zZ(_,$)}};class AZ{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(G){console.warn("[tab-store] Change listener failed:",G)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((G)=>G!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let G=this.tabs.get(_);if(!G)return;if(this.tabs.delete(_),G.id=$,G.path=$,G.label=j||$.split("/").pop()||$,this.tabs.set($,G),this.mruOrder=this.mruOrder.map((Y)=>Y===_?$:Y),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((G)=>G.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((G)=>G.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var j_=new AZ;var O5=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};k0();function JZ(){let[_,$]=C(null),[j,G]=C({text:"",totalLines:0}),[Y,X]=C(""),[Z,L]=C({text:"",totalLines:0}),[V,q]=C(null),[K,Q]=C(null),[F,B]=C(null),U=u(null),H=u(0),D=u(!1),E=u(""),M=u(""),z=u(!1),O=u(0),x=u(null),I=u(null),A=u(null),k=u(null),W=u(!1),T=u(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:G,agentPlan:Y,setAgentPlan:X,agentThought:Z,setAgentThought:L,pendingRequest:V,setPendingRequest:q,currentTurnId:K,setCurrentTurnId:Q,steerQueuedTurnId:F,setSteerQueuedTurnId:B,lastAgentEventRef:U,lastSilenceNoticeRef:H,isAgentRunningRef:D,draftBufferRef:E,thoughtBufferRef:M,previewResyncPendingRef:z,previewResyncGenerationRef:O,pendingRequestRef:x,stalledPostIdRef:I,currentTurnIdRef:A,steerQueuedTurnIdRef:k,thoughtExpandedRef:W,draftExpandedRef:T}}k0();var eO=0.1,wZ=4,IZ=4,kZ=160,MZ=1600,TZ=200,yZ=1600;function O$(){if(typeof window>"u")return 0;return Number(window.innerWidth)||0}function xZ(_=O$()){return _>0?Math.floor(_*eO):0}function W6(_,$=O$(),j=0){let G=xZ($)+wZ+(j>0?IZ+Math.max(0,j):0),Y=$>0?Math.floor($-G):MZ;return Math.min(Math.max(Number(_)||0,kZ),Math.max(kZ,Math.min(MZ,Y)))}function O6(_,$=O$(),j=0){let G=xZ($)+IZ+(j>0?wZ+Math.max(0,j):0),Y=$>0?Math.floor($-G):yZ;return Math.min(Math.max(Number(_)||0,TZ),Math.max(TZ,Math.min(yZ,Y)))}function CZ({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:G}){let Y=u((K)=>{K.preventDefault();let Q=_.current;if(!Q)return;let F=K.clientX,B=$.current||280,U=K.currentTarget;U.classList.add("dragging"),Q.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let H=F,D=(M)=>{H=M.clientX;let z=W6(B+(M.clientX-F),O$(),j?.current||0);Q.style.setProperty("--sidebar-width",`${z}px`),$.current=z},E=()=>{let M=W6(B+(H-F),O$(),j?.current||0);$.current=M,U.classList.remove("dragging"),Q.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",V_("sidebarWidth",String(Math.round(M))),document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",D),document.addEventListener("mouseup",E)}).current,X=u((K)=>{K.preventDefault();let Q=_.current;if(!Q)return;let F=K.touches[0];if(!F)return;let B=F.clientX,U=$.current||280,H=K.currentTarget;H.classList.add("dragging"),Q.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let D=(M)=>{let z=M.touches[0];if(!z)return;M.preventDefault();let O=W6(U+(z.clientX-B),O$(),j?.current||0);Q.style.setProperty("--sidebar-width",`${O}px`),$.current=O},E=()=>{H.classList.remove("dragging"),Q.classList.remove("sidebar-resizing"),document.body.style.userSelect="",V_("sidebarWidth",String(Math.round($.current||U))),document.removeEventListener("touchmove",D),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)};document.addEventListener("touchmove",D,{passive:!1}),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E)}).current,Z=u((K)=>{K.preventDefault();let Q=_.current;if(!Q)return;let F=K.clientX,B=j.current||$.current||280,U=K.currentTarget;U.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let H=F,D=(M)=>{H=M.clientX;let z=O6(B+(M.clientX-F),O$(),$?.current||0);Q.style.setProperty("--editor-width",`${z}px`),j.current=z},E=()=>{let M=O6(B+(H-F),O$(),$?.current||0);j.current=M,U.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",V_("editorWidth",String(Math.round(M))),document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",D),document.addEventListener("mouseup",E)}).current,L=u((K)=>{K.preventDefault();let Q=_.current;if(!Q)return;let F=K.touches[0];if(!F)return;let B=F.clientX,U=j.current||$.current||280,H=K.currentTarget;H.classList.add("dragging"),document.body.style.userSelect="none";let D=(M)=>{let z=M.touches[0];if(!z)return;M.preventDefault();let O=O6(U+(z.clientX-B),O$(),$?.current||0);Q.style.setProperty("--editor-width",`${O}px`),j.current=O},E=()=>{H.classList.remove("dragging"),document.body.style.userSelect="",V_("editorWidth",String(Math.round(j.current||U))),document.removeEventListener("touchmove",D),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)};document.addEventListener("touchmove",D,{passive:!1}),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E)}).current,V=u((K)=>{K.preventDefault();let Q=_.current;if(!Q)return;let F=K.clientY,B=G?.current||200,U=K.currentTarget;U.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let H=F,D=(M)=>{H=M.clientY;let z=Math.min(Math.max(B-(M.clientY-F),100),window.innerHeight*0.5);if(Q.style.setProperty("--dock-height",`${z}px`),G)G.current=z;window.dispatchEvent(new CustomEvent("dock-resize"))},E=()=>{let M=Math.min(Math.max(B-(H-F),100),window.innerHeight*0.5);if(G)G.current=M;U.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",V_("dockHeight",String(Math.round(M))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",D),document.addEventListener("mouseup",E)}).current,q=u((K)=>{K.preventDefault();let Q=_.current;if(!Q)return;let F=K.touches[0];if(!F)return;let B=F.clientY,U=G?.current||200,H=K.currentTarget;H.classList.add("dragging"),document.body.style.userSelect="none";let D=(M)=>{let z=M.touches[0];if(!z)return;M.preventDefault();let O=Math.min(Math.max(U-(z.clientY-B),100),window.innerHeight*0.5);if(Q.style.setProperty("--dock-height",`${O}px`),G)G.current=O;window.dispatchEvent(new CustomEvent("dock-resize"))},E=()=>{H.classList.remove("dragging"),document.body.style.userSelect="",V_("dockHeight",String(Math.round(G?.current||U))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",D),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)};document.addEventListener("touchmove",D,{passive:!1}),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E)}).current;return{handleSplitterMouseDown:Y,handleSplitterTouchStart:X,handleEditorSplitterMouseDown:Z,handleEditorSplitterTouchStart:L,handleDockSplitterMouseDown:V,handleDockSplitterTouchStart:q}}k0();function L9(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},G=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Y=j[_]??window[G],X=Number(Y);return Number.isFinite(X)?X:$}catch{return $}}var PZ=L9("warning",30000),RZ=L9("finalize",120000),fZ=L9("refresh",30000),SZ=30000;function gZ(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function z6(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function uZ(_=30000){let[,$]=C(0);g(()=>{let j=setInterval(()=>$((G)=>G+1),_);return()=>clearInterval(j)},[_])}function bZ(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((G,Y)=>G+Math.max(1,Math.ceil(Y.length/$)),0)}function v2(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function _z(_){if(!_||typeof _!=="object")return null;let $=_.retry_at??_.retryAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function d$(_){if(!_||typeof _!=="object")return null;let $=_.last_event_at??_.lastEventAt??_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function z$(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function m2(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.tool_name??_.toolName;if(typeof j==="string"&&j.trim())return j.trim();let G=_.status;if(typeof G==="string"&&G.trim())return G.trim();return z$(_)?"Compacting context":"Working..."}function vZ(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,G=Math.floor($/60)%60,Y=Math.floor($/3600);if(Y>0)return`${Y}:${String(G).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${G}:${String(j).padStart(2,"0")}`}function A6(_,$=Date.now()){let j=v2(_);if(j===null)return null;return vZ(Math.max(0,$-j))}function mZ(_,$=Date.now()){let j=_z(_);if(j===null)return null;let G=j-$;if(G<=0)return"retrying now";return`retry in ${vZ(G)}`}k0();function jq(_={}){s1(_)}function Gq(){let[_,$]=C(!1);if(g(()=>{let Y=(Z)=>{let L=z5(Z?.detail?.section);if(L)try{window.__piclawSettingsRequestedSection=L}catch(V){}$(!0)};window.addEventListener("piclaw:open-settings",Y);let X=c2();if(X.open){if(X.section)try{window.__piclawSettingsRequestedSection=X.section}catch(Z){}$(!0)}return()=>window.removeEventListener("piclaw:open-settings",Y)},[]),!_)return null;let[j,G]=C(null);if(g(()=>{Promise.resolve().then(() => ($q(),_q)).then((Y)=>{G(()=>Y.SettingsDialogContent)})},[]),!j)return N`
            <div class="settings-dialog-backdrop" onClick=${()=>$(!1)}>
                <div class="settings-dialog settings-dialog-loading-shell" data-testid="settings-dialog">
                    <div class="settings-loading-shell-body">
                        <span class="settings-spinner"></span>
                        <span>Loading settings…</span>
                    </div>
                </div>
            </div>
        `;return N`
        <div class="settings-dialog-backdrop" onClick=${(Y)=>{if(Y.target===Y.currentTarget)$(!1)}}>
            <${j} onClose=${()=>$(!1)} />
        </div>
    `}k0();function PA(_,$){return new URL(String(_||""),$).toString()}function Yq(){let[_,$]=C(()=>typeof window>"u"?"http://localhost/":window.location.href);g(()=>{if(typeof window>"u")return;let Y=()=>$(window.location.href);return window.addEventListener("popstate",Y),()=>window.removeEventListener("popstate",Y)},[]);let j=f((Y,X={})=>{if(typeof window>"u")return;let{replace:Z=!1}=X||{},L=PA(Y,window.location.href);if(Z)window.history.replaceState(null,"",L);else window.history.pushState(null,"",L);$(window.location.href)},[]);return{locationParams:Z0(()=>new URL(_).searchParams,[_]),navigate:j}}k0();k0();function Xq(_,$,j,G){try{let Y=_?.getItem?.($),X=Y?Number(Y):Number.NaN;return Number.isFinite(X)&&X>=j?X:G}catch(Y){return G}}function R9(_,$,j){try{return _?.setItem?.($,String(Math.round(j))),!0}catch(G){return!1}}var RA=120,fA=100,f9=60,SA=220,S9="mdPreviewHeight";function gA(){return Xq(localStorage,S9,f9,SA)}function G8({getContent:_,subscribeContentChange:$,path:j,onClose:G}){let[Y,X]=C(""),[Z,L]=C(gA),V=u(null),q=u(null),K=u(null),Q=u(null),F=u(null),B=u(_),U=u($);return B.current=_,U.current=$,g(()=>{let E=!1,M=()=>{if(Q.current!==null)clearTimeout(Q.current),Q.current=null},z=()=>{if(F.current!==null)clearTimeout(F.current),F.current=null},O=(k)=>{if(E)return;if(k===K.current)return;K.current=k;try{let W=X1(k,null);X(W)}catch{X('<p style="color:var(--text-secondary)">Preview unavailable</p>')}},x=(k)=>{M(),Q.current=setTimeout(()=>{Q.current=null,O(k||"")},RA)},I=null,A=()=>{if(E||I)return;let k=typeof U.current==="function"?U.current((W)=>x(W||"")):null;if(typeof k==="function"){I=k;return}F.current=setTimeout(A,fA)};return O(B.current?.()||""),A(),()=>{if(E=!0,M(),z(),typeof I==="function")I()}},[j]),g(()=>{if(V.current&&Y)W$(V.current).catch((E)=>{console.debug("[markdown-preview] Mermaid rendering failed for the live preview.",E,{path:j})})},[Y]),N`
        <div
            class="md-preview-splitter"
            onMouseDown=${(E)=>{E.preventDefault();let M=E.clientY,z=q.current?.offsetHeight||Z,O=q.current?.parentElement,x=O?O.offsetHeight*0.7:500,I=E.currentTarget;I.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let A=(W)=>{let T=Math.min(Math.max(z-(W.clientY-M),f9),x);L(T)},k=()=>{I.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",R9(localStorage,S9,q.current?.offsetHeight||Z),document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",k)};document.addEventListener("mousemove",A),document.addEventListener("mouseup",k)}}
            onTouchStart=${(E)=>{E.preventDefault();let M=E.touches[0];if(!M)return;let z=M.clientY,O=q.current?.offsetHeight||Z,x=q.current?.parentElement,I=x?x.offsetHeight*0.7:500,A=E.currentTarget;A.classList.add("dragging"),document.body.style.userSelect="none";let k=(T)=>{let y=T.touches[0];if(!y)return;T.preventDefault();let J=Math.min(Math.max(O-(y.clientY-z),f9),I);L(J)},W=()=>{A.classList.remove("dragging"),document.body.style.userSelect="",R9(localStorage,S9,q.current?.offsetHeight||Z),document.removeEventListener("touchmove",k),document.removeEventListener("touchend",W),document.removeEventListener("touchcancel",W)};document.addEventListener("touchmove",k,{passive:!1}),document.addEventListener("touchend",W),document.addEventListener("touchcancel",W)}}
        ></div>
        <div class="md-preview-panel" ref=${q} style=${{height:Z+"px"}}>
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
                ref=${V}
                dangerouslySetInnerHTML=${{__html:Y}}
            />
        </div>
    `}function Zq(_){if(_.branchLoaderMode)return"branch-loader";if(_.panePopoutMode)return"pane-popout";return"main"}function uA(_){return _==="error"?"Could not open branch window":"Opening branch…"}function Lq(_){return N`
    <div class="app-shell chat-only">
      <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
        <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
          <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
            ${uA(_.status)}
          </h1>
          <p style=${{margin:0,lineHeight:1.6}}>${_.message}</p>
        </div>
      </div>
    </div>
  `}function qq(_){let{appShellRef:$,editorOpen:j,hidePanePopoutControls:G,panePopoutHasMenuActions:Y,panePopoutTitle:X,tabStripTabs:Z,tabStripActiveId:L,handleTabActivate:V,previewTabs:q,diffTabs:K,handleTabTogglePreview:Q,handleTabToggleDiff:F,editorContainerRef:B,getPaneContent:U,subscribePaneContentChange:H,panePopoutPath:D}=_,E=j&&!G&&Y,M=X?`Pane window controls for ${X}`:"Pane window controls";return N`
    <div class=${`app-shell pane-popout${j?" editor-open":""}`} ref=${$}>
      <div class="editor-pane-container pane-popout-container">
        ${E&&N`
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
                ${Z.length>1&&N`
                  <div class="pane-popout-controls-section">
                    <div class="pane-popout-controls-section-title">Open panes</div>
                    <div class="pane-popout-controls-list">
                      ${Z.map((z)=>N`
                        <button
                          type="button"
                          class=${`pane-popout-controls-item${z.id===L?" active":""}`}
                          onClick=${(O)=>{V(z.id),O.currentTarget.closest("details")?.removeAttribute("open")}}
                        >
                          ${z.label}
                        </button>
                      `)}
                    </div>
                  </div>
                `}
                ${L&&K.has(L)&&N`
                  <button
                    type="button"
                    class="pane-popout-controls-action"
                    onClick=${(z)=>{F(L),z.currentTarget.closest("details")?.removeAttribute("open")}}
                  >
                    Hide diff
                  </button>
                `}
                ${L&&q.has(L)&&N`
                  <button
                    type="button"
                    class="pane-popout-controls-action"
                    onClick=${(z)=>{Q(L),z.currentTarget.closest("details")?.removeAttribute("open")}}
                  >
                    Hide preview
                  </button>
                `}
              </div>
            </details>
          </div>
        `}
        ${j?N`<div class="editor-pane-host" ref=${B}></div>`:N`
            <div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
              <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
              <p style=${{margin:0,lineHeight:1.6}}>${D||"No pane path provided."}</p>
            </div>
          `}
        ${j&&L&&q.has(L)&&N`
          <${G8}
            getContent=${U}
            subscribeContentChange=${H}
            path=${L}
            onClose=${()=>Q(L)}
          />
        `}
      </div>
    </div>
  `}k0();k0();function Y8(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function bA(_,$){let j=Y8(_),G=Y8($);if(!G)return!1;return j.startsWith(G)||j.includes(G)}function w6(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function g9(_,$,j=Date.now(),G=700){let Y=_&&typeof _==="object"?_:{value:"",updatedAt:0},X=String($||"").trim().toLowerCase();if(!X)return{value:"",updatedAt:j};return{value:!Y.value||!Number.isFinite(Y.updatedAt)||j-Y.updatedAt>G?X:`${Y.value}${X}`,updatedAt:j}}function vA(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Y=((Number.isInteger($)?$:0)%j+j)%j,X=[];for(let Z=0;Z<j;Z+=1)X.push((Y+Z)%j);return X}function mA(_,$,j=0,G=(Y)=>Y){let Y=Y8($);if(!Y)return-1;let X=Array.isArray(_)?_:[],Z=vA(X.length,j),L=X.map((V)=>Y8(G(V)));for(let V of Z)if(L[V].startsWith(Y))return V;for(let V of Z)if(L[V].includes(Y))return V;return-1}function u9(_,$,j=-1,G=(Y)=>Y){let Y=Array.isArray(_)?_:[];if(j>=0&&j<Y.length){let X=G(Y[j]);if(bA(X,$))return j}return mA(Y,$,0,G)}T_();function X8(_){return String(_||"").trim().toLowerCase()}function b9(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return X8($[1]||"")}function cA(_){let $=new Set,j=[];for(let G of Array.isArray(_)?_:[]){let Y=X8(G?.agent_name);if(!Y||$.has(Y))continue;$.add(Y),j.push(G)}return j}function Vq(_,$,j={}){let G=b9($);if(G==null)return[];let Y=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return cA(_).filter((X)=>{if(Y&&X?.chat_jid===Y)return!1;return X8(X?.agent_name).startsWith(G)})}function v9(_){let $=X8(_);return $?`@${$} `:""}function Qq(_={}){if(_.searchMode)return!1;return Boolean(_.showSessionSwitcherButton)}function Kq(_,$,j={}){if(!_||_.isComposing)return!1;if(!Qq(j))return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function m9(_,$={}){if(!Qq($))return!1;return String(_||"")==="@"}function c9(_){let $=h9(_);return $?`@${$}`:""}function h9(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function Z8(_,$=""){let j=String(_||""),G=h9(j),Y=h9($);if(!j.trim())return{normalized:G,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!G)return{normalized:G,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let X=`@${G}`;if(G===Y)return{normalized:G,handle:X,canSubmit:!1,kind:"info",message:`Already using ${X}.`};if(G!==j.trim())return{normalized:G,handle:X,canSubmit:!0,kind:"info",message:`Will save as ${X}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:G,handle:X,canSubmit:!0,kind:"success",message:`Saving as ${X}.`}}function hA(_,$={}){let j=[],G=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Y=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(G&&Y===G)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function L8(_,$={}){let j=c9(_?.agent_name)||String(_?.chat_jid||"").trim(),G=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Y=hA(_,$);return Y.length>0?`${j} — ${G} • ${Y.join(" • ")}`:`${j} — ${G}`}function Bq(_,$,j){let G=c9(_),Y=c9($),X=String(j||"").trim();if(G&&Y&&G!==Y)return`Restored archived ${G} as ${Y} because ${G} is already in use.`;if(Y)return`Restored ${Y}.`;if(G)return`Restored ${G}.`;return`Restored ${X||"branch"}.`}function q8({steerQueued:_=!1,pulsing:$=!1}={}){let j=["turn-dot"];if(_)j.push("turn-dot-queued");if($)j.push("turn-dot-pulsing");return j.join(" ")}function l9({pulsing:_=!1}={}){let $=["compose-inline-status-dot"];if(_)$.push("compose-inline-status-dot-pulsing");return $.join(" ")}function I6(_,{isLastActivity:$=!1,pendingRequest:j=!1}={}){if(j)return"dot";if($)return"none";if(_?.type==="error")return"none";let G=typeof _?.type==="string"?_.type:"";if(Boolean(typeof _?.tool_name==="string"&&_.tool_name.trim()||_?.tool_args))return"spinner";if(_?.type==="intent")return"dot";if(G==="tool_call"||G==="tool_status"||G==="thinking"||G==="waiting")return"spinner";return"dot"}function Fq(_,$={}){return I6(_,$)==="dot"}k0();var Nq=350;function lA(_){return String(_||"Connecting").replace(/[-_]+/g," ").replace(/^./,($)=>$.toUpperCase())}function pA(_,$={}){let j=typeof _==="string"&&_.trim()?_.trim():"connecting";if(j==="connected")return{show:!1,statusClass:"connected",label:"Connected",title:"Connection: Connected"};if(j!=="disconnected"){let L=lA(j);return{show:!0,statusClass:j,label:L,title:`Connection: ${L}`}}let G=Number.isFinite(Number($?.delayMs))?Math.max(0,Number($.delayMs)):Nq,Y=Number.isFinite(Number($?.nowMs))?Number($.nowMs):Date.now(),X=Number.isFinite(Number($?.disconnectedAtMs))?Number($.disconnectedAtMs):Y;return Y-X>=G?{show:!0,statusClass:"disconnected",label:"Reconnecting",title:"Reconnecting"}:{show:!1,statusClass:"connecting",label:"Connecting",title:"Connecting"}}function p9(_,$={}){let j=Number.isFinite(Number($?.delayMs))?Math.max(0,Number($.delayMs)):Nq,[G,Y]=C(null),[X,Z]=C(()=>Date.now());return g(()=>{if(_==="disconnected"){let L=Date.now();Y((V)=>V??L),Z(L);return}Y(null),Z(Date.now())},[_]),g(()=>{if(_!=="disconnected"||G===null)return;let L=j-(Date.now()-G);if(L<=0)return;let V=0,q=0,K=setTimeout(()=>{if(typeof requestAnimationFrame!=="function"){Z(Date.now());return}V=requestAnimationFrame(()=>{q=requestAnimationFrame(()=>{Z(Date.now())})})},L);return()=>{if(clearTimeout(K),V)cancelAnimationFrame(V);if(q)cancelAnimationFrame(q)}},[_,G,j]),Z0(()=>pA(_,{delayMs:j,disconnectedAtMs:G,nowMs:X}),[_,j,G,X])}k0();function q1({prefix:_="file",label:$,title:j,onRemove:G,onClick:Y,removeTitle:X="Remove",icon:Z="file"}){let L=`${_}-file-pill`,V=`${_}-file-name`,q=`${_}-file-remove`,K=Z==="message"?N`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:Z==="folder"?N`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        </svg>`:N`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
        </svg>`;return N`
    <span class=${L} title=${j||$} onClick=${Y}>
      ${K}
      <span class=${V}>${$}</span>
      ${G&&N`
        <button
          class=${q}
          onClick=${(Q)=>{Q.preventDefault(),Q.stopPropagation(),G()}}
          title=${X}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}async function r9(_,$,j){if(typeof _!=="function")return!1;try{let G=await _($);if(!G)return!1;return j(G),!0}catch(G){return!1}}function rA(_={}){let $=_.navigator??(typeof navigator<"u"?navigator:null);if(!$)return!1;let j=String($.userAgent||"");if(/iPad|iPhone/.test(j))return!0;return $.platform==="MacIntel"&&Number($.maxTouchPoints||0)>1}function nA(_={}){let $=_.window??(typeof window<"u"?window:null);if(!$)return null;return $.SpeechRecognition||$.webkitSpeechRecognition||null}function n9(_={}){let $=_.window??(typeof window<"u"?window:null),j=typeof _.secureContext==="boolean"?_.secureContext:Boolean($?.isSecureContext),G=S1(_),Y=rA(_),X=nA(_);if(!j)return{mode:"unavailable",showButton:!1,canStart:!1,reason:"secure-context-required",title:"Voice input requires HTTPS",detail:"Native browser speech input needs a secure context (HTTPS or localhost).",recognitionCtor:null,ios:Y,standalone:G,secureContext:j};if(Y&&G)return{mode:"fallback",showButton:!0,canStart:!1,reason:"ios-standalone-fallback",title:"Use keyboard dictation",detail:"Speech input is intentionally downgraded in iPhone/iPad standalone web apps because browser-native recognition is not reliable there. Focus the compose box and use the keyboard dictation mic instead.",recognitionCtor:X,ios:Y,standalone:G,secureContext:j};if(!X){if(Y)return{mode:"fallback",showButton:!0,canStart:!1,reason:"ios-keyboard-dictation",title:"Use keyboard dictation",detail:"This browser does not expose native in-page speech recognition here. Focus the compose box and use the keyboard dictation mic instead.",recognitionCtor:null,ios:Y,standalone:G,secureContext:j};return{mode:"unavailable",showButton:!1,canStart:!1,reason:"unsupported",title:"Voice input unavailable",detail:"This browser does not expose native speech recognition in this context.",recognitionCtor:null,ios:Y,standalone:G,secureContext:j}}return{mode:"native",showButton:!0,canStart:!0,reason:"supported",title:"Start voice input",detail:Y?"Browser-native speech input is available here, but Safari/WebKit reliability may still vary.":"Browser-native speech input is available.",recognitionCtor:X,ios:Y,standalone:G,secureContext:j}}function Uq(_,$="",j=""){let G=String(_||""),Y=String($||"").trim(),X=String(j||"").trim(),Z=[Y,X].filter(Boolean).join(" ").trim();if(!Z)return G;if(!G)return Z;let L=/[\s\n]$/.test(G)?"":" ";return`${G}${L}${Z}`}function Eq(_,$=0){let j="",G="",Y=_&&typeof _.length==="number"?_:[];for(let X=Math.max(0,$);X<Y.length;X+=1){let Z=Y[X];if(!Z||!Z[0])continue;let L=String(Z[0].transcript||"").trim();if(!L)continue;if(Z.isFinal)j=`${j} ${L}`.trim();else G=`${G} ${L}`.trim()}return{finalText:j,interimText:G}}function d9(_,$=null){let j=String(_||"").trim().toLowerCase();switch(j){case"not-allowed":case"service-not-allowed":return $?.ios?"Microphone or speech-recognition permission was denied. On iPhone/iPad, using keyboard dictation may be more reliable.":"Microphone or speech-recognition permission was denied by the browser.";case"no-speech":return"No speech was detected. Try again and speak after the listening indicator appears.";case"audio-capture":return"The browser could not access a microphone for speech recognition.";case"network":return"The browser speech-recognition service reported a network or service failure.";case"aborted":return"Voice input was stopped.";default:return j?`Voice input failed (${j}).`:"Voice input failed."}}var dA=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking/effort level"},{name:"/effort",description:"Show or set thinking/effort level (alias for /thinking)"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/meters",description:"Toggle the top-right CPU/RAM HUD (/meters on|off|toggle)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/session-rotate",description:"Rotate the current persisted session into an archived file"},{name:"/rollup",description:"Merge the current branch chat back into its parent chat"},{name:"/clone",description:"Duplicate the current active branch into a new session"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/dream",description:"Run Dream memory maintenance over recent days (default 7)"},{name:"/tasks",description:"List scheduled tasks"},{name:"/scheduled",description:"List scheduled tasks"},{name:"/pair",description:"Manage remote peer connections (/pair request <url> | /pair list)"},{name:"/ask",description:"Send a prompt to a paired remote instance (/ask <instance_id|fingerprint> <prompt>)"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/exit",description:"Exit the current piclaw process immediately (Supervisor will restart it)"},{name:"/login",description:"Login to an AI model provider (OAuth or API key)"},{name:"/logout",description:"Logout from an AI model provider"},{name:"/settings",description:"Open the settings pane"},{name:"/help",description:"Open keyboard shortcuts help"},{name:"/commands",description:"List available commands"},{name:"/skill:",description:"Run a workspace skill (e.g. /skill:visual-artifact-generator, /skill:web-search)"}],Dq="piclaw_compose_history";function oA(_,$,j=!1){if(j)return{shouldApply:!1,nextToken:$,text:""};if(!_||typeof _!=="object")return{shouldApply:!1,nextToken:$,text:""};let G=typeof _.token==="string"?_.token:"",Y=typeof _.text==="string"?_.text:"";if(!G||G===$||!Y.trim())return{shouldApply:!1,nextToken:$,text:""};return{shouldApply:!0,nextToken:G,text:Y}}function iA(_="web:default"){let $=typeof _==="string"&&_.trim()?_.trim():"web:default";if($==="web:default")return Dq;return`${Dq}:${encodeURIComponent($)}`}function sA(_,$=null){let j=new Set,G=[];for(let Y of Array.isArray(_)?_:[]){let X=typeof Y?.chat_jid==="string"?Y.chat_jid.trim():"";if(!X||j.has(X))continue;if(!(typeof Y?.agent_name==="string"?Y.agent_name.trim():""))continue;j.add(X),G.push(Y)}return G.sort((Y,X)=>{let Z=Boolean(Y?.archived_at),L=Boolean(X?.archived_at);if(Z!==L)return Z?1:-1;let V=String(Y?.agent_name||"").trim(),q=String(X?.agent_name||"").trim(),K=V.localeCompare(q,void 0,{sensitivity:"base"});if(K!==0)return K;let Q=String(Y?.chat_jid||"").trim(),F=String(X?.chat_jid||"").trim();return Q.localeCompare(F,void 0,{sensitivity:"base"})}),G}function aA(_){return Boolean(_?.is_active&&!_?.archived_at)}function tA(_,$=null){let j=Array.isArray(_)?_:[],G=typeof $==="string"?$.trim():"";if(G){let X=j.findIndex((Z)=>{if(Z?.disabled)return!1;if(Z?.type!=="session")return!1;return(typeof Z?.chat?.chat_jid==="string"?Z.chat.chat_jid.trim():"")===G});if(X>=0)return X}let Y=j.findIndex((X)=>!X?.disabled);return Y>=0?Y:0}function Hq(_,$){let j=typeof $?.command?.message==="string"?$.command.message.trim():"";if(!$?.ui_only||!j)return null;let G=typeof _==="string"?_.trim():"";if(!G.startsWith("/"))return null;let Y=G.split(/\s+/).filter(Boolean),X=Y[0]?.toLowerCase()||"";if(!(Y.length>1)&&(X==="/model"||X==="/thinking"||X==="/effort"))return j;return null}function eA(_,$,j=!1){if(_)return{mode:"queue",className:"icon-btn send-btn queue-mode",title:"Queue follow-up (Enter)",ariaLabel:"Queue follow-up message",disabled:!$};return{mode:"send",className:"icon-btn send-btn",title:"Send (Enter)",ariaLabel:"Send message",disabled:!$}}function Wq(_,$,j={}){if(!_||j.searchMode)return!1;if(!(_.key===" "||_.key==="Spacebar"||_.code==="Space"))return!1;if(_.ctrlKey||_.metaKey||_.altKey||_.repeat)return!1;if(!j.speechButtonVisible||j.speechButtonActive)return!1;if(!j.canStartSpeech)return!1;return String($||"").trim().length===0}function _J(_,$){if(!$||!_)return!1;return _.key===" "||_.key==="Spacebar"||_.code==="Space"}function $J(_,$=!1){if(!_)return null;if($)return{mode:"compacting",className:"icon-btn send-btn abort-mode compacting-mode",title:"Compacting context — Stop response",ariaLabel:"Compacting context — Stop response",disabled:!1};return{mode:"abort",className:"icon-btn send-btn abort-mode",title:"Stop response",ariaLabel:"Stop response",disabled:!1}}function jJ(_){return _==="abort"||_==="compacting"}function GJ(_,$=0){if(_?.visible===!1)return{visible:!1,title:"",indicatorText:null,animateDot:!1,animateSpinner:!1};let j=typeof _?.message==="string"&&_.message.trim()?_.message.trim():null,G=_?.indicator&&typeof _.indicator==="object"?_.indicator:null;if(!j&&!G)return{visible:!1,title:"",indicatorText:null,animateDot:!1,animateSpinner:!1};if(G?.mode==="hidden")return{visible:Boolean(j),title:j||"Working…",indicatorText:null,animateDot:!1,animateSpinner:!1};if(G?.mode==="custom"&&Array.isArray(G.frames)&&G.frames.length>0){let Y=G.frames,X=Number.isFinite($)&&$>=0?Math.floor($)%Y.length:0;return{visible:!0,title:j||"Working…",indicatorText:Y[X],animateDot:!1,animateSpinner:!1}}return{visible:!0,title:j||"Working…",indicatorText:null,animateDot:!1,animateSpinner:!0}}function YJ({usage:_,onCompact:$,compactionLabel:j="",compactionTitle:G=""}){let Y=Math.min(100,Math.max(0,_.percent||0)),X=_.tokens,Z=_.contextWindow,L="Compact context",V=X!=null?`Context: ${x6(X)} / ${x6(Z)} tokens (${Y.toFixed(0)}%)`:`Context: ${Y.toFixed(0)}%`,q=typeof j==="string"?j.trim():"",K=typeof G==="string"?G.trim():"",Q=q?`${V} — ${K||"Smart compaction"} · ${q}`:`${V} — ${"Compact context"}`,F=9,B=2*Math.PI*9,U=Y/100*B,H=Y>90?"var(--context-red, #ef4444)":Y>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return N`
        <button
            class=${`compose-context-pie icon-btn${q?" is-compacting":""}`}
            type="button"
            title=${Q}
            aria-label=${q?`Smart compaction ${q}`:"Compact context"}
            onClick=${(D)=>{D.preventDefault(),D.stopPropagation(),$?.()}}
        >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke=${H}
                    stroke-width="2.5"
                    stroke-dasharray=${`${U} ${B}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
            ${q&&N`<span class="compose-context-pie-timer">${q}</span>`}
        </button>
    `}function x6(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function XJ(_){let $=Number(_?.tokens);return Number.isFinite($)&&$>0?$:null}function Oq(_,$){let j=Number(_?.contextWindow??_?.context_window),G=XJ($);if(!Number.isFinite(j)||j<=0||!Number.isFinite(G)||G<=0)return{blocked:!1,note:"",title:"",tokens:G??null,contextWindow:Number.isFinite(j)&&j>0?j:null};if(G<=j)return{blocked:!1,note:"",title:"",tokens:G,contextWindow:j};return{blocked:!0,note:"Current context won’t fit — compact first",title:`Current context uses ${x6(G)} tokens, but this model only fits ${x6(j)}. Compact first.`,tokens:G,contextWindow:j}}function o9(_){let $=Number(_);if(!Number.isFinite($)||$<=0)return"";return`${x6($)} ctx`}function ZJ(_,$){let j=typeof _==="string"?_.trim():"",G=o9($);if(!j)return G;if(!G)return j;return`${j} • ${G}`}function LJ(_,$="",j=""){let G=typeof _==="string"?_.trim():"";if(G)return G;let Y=typeof $==="string"?$.trim():"",X=typeof j==="string"?j.trim():"";if(Y&&X)return`${Y}/${X}`;return X||Y||""}function Jq(_){let $=Array.isArray(_?.model_options)?_.model_options:null,j=Array.isArray(_?.models)?_.models:[],G=$&&$.length>0?$:j,Y=[];for(let X of G){if(typeof X==="string"){let Q=X.trim();if(!Q)continue;let F=Q.indexOf("/"),B=F>0?Q.slice(0,F).trim():"",U=F>0?Q.slice(F+1).trim():Q;Y.push({label:Q,provider:B,id:U,name:null,contextWindow:null,reasoning:!1});continue}if(!X||typeof X!=="object")continue;let Z=typeof X.provider==="string"?X.provider.trim():"",L=typeof X.id==="string"?X.id.trim():"",V=LJ(X.label,Z,L);if(!V)continue;let q=typeof X.name==="string"&&X.name.trim()?X.name.trim():null,K=Number(X.context_window??X.contextWindow);Y.push({label:V,provider:Z,id:L,name:q,contextWindow:Number.isFinite(K)&&K>0?K:null,reasoning:Boolean(X.reasoning)})}return Y.sort((X,Z)=>X.label.localeCompare(Z.label,void 0,{sensitivity:"base"})),Y}function qJ(_){if(!_||typeof _!=="object")return"";return[_.label,_.provider,_.id,_.name,o9(_.contextWindow)].filter(Boolean).join(" ")}function VJ(_,$){let j=typeof _==="string"?_.trim():"";if(j)return{showPicker:!0,label:j,hasAvailableModels:!0};let G=Jq($).length>0;return{showPicker:G,label:G?"Select model":"",hasAvailableModels:G}}function V8(_){return(typeof _==="string"?_.trim():"")||null}function zq(_){return V8(_)?.toLowerCase()??null}function Aq(_,$){let j=zq(_),G=zq($);if(!j||!G)return!1;return j===G||j.endsWith(`/${G}`)||G.endsWith(`/${j}`)}function QJ(_,$){let j=$&&typeof $==="object"?$:{},G=V8(j.latest_response_model??j.response_model??j.responseModel??j.routed_model??j.routedModel);if(!G)return null;let Y=V8(j.latest_requested_model??j.requested_model??j.requestedModel??j.current??j.model??_);if(Y&&Aq(G,Y))return null;let X=V8(_??j.current??j.model);if(X&&Y&&!Aq(X,Y))return null;return{label:`Routed: ${G}`,title:Y?`Requested model: ${Y} • Routed model: ${G}`:`Routed model: ${G}`,requestedModel:Y,responseModel:G}}function KJ(_){if(!_)return _;let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!$.includes(" @ ")||!$.includes(`:
`))return _;let j=$.split(`
`),G=[],Y=0,X=!1;while(Y<j.length){let L=j[Y].trim();if(!L){Y+=1;continue}if(L==="Messages:"||L.startsWith("Channel:")||L.startsWith("Chat:")){X=!0,Y+=1;continue}if(/^[^\n]+\s@\s[^\n]+:$/.test(L)){X=!0,Y+=1;let V=[];while(Y<j.length){let q=j[Y],K=q.trim();if(/^[^\n]+\s@\s[^\n]+:$/.test(K))break;if(K.startsWith("Channel:")||K.startsWith("Chat:")||K==="Messages:")break;V.push(q.startsWith("  ")?q.slice(2):q),Y+=1}if(V.length>0)G.push(V.join(`
`).trim());continue}return _}return X&&G.length>0?G.filter(Boolean).join(`

`):_}function kq(_){let $=String(_||"").trim(),j=$.match(/^`([^`]+)`$/);return(j?j[1]:$).trim()}function BJ(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Files:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){G=q;break}if(G===-1)return{content:_,fileRefs:[]};let Y=[],X=G+1;for(;X<j.length;X+=1){let q=j[X];if(/^\s*-\s+/.test(q)){let K=kq(q.replace(/^\s*-\s+/,"").trim());if(K)Y.push(K)}else if(!q.trim())break;else break}if(Y.length===0)return{content:_,fileRefs:[]};let Z=j.slice(0,G),L=j.slice(X);return{content:[...Z,...L].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Y}}function FJ(_){if(!_)return{content:_,folderRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Folders:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){G=q;break}if(G===-1)return{content:_,folderRefs:[]};let Y=[],X=G+1;for(;X<j.length;X+=1){let q=j[X];if(/^\s*-\s+/.test(q)){let K=kq(q.replace(/^\s*-\s+/,"").trim());if(K)Y.push(K)}else if(!q.trim())break;else break}if(Y.length===0)return{content:_,folderRefs:[]};let Z=j.slice(0,G),L=j.slice(X);return{content:[...Z,...L].join(`
`).replace(/\n{3,}/g,`

`).trim(),folderRefs:Y}}function NJ(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Referenced messages:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){G=q;break}if(G===-1)return{content:_,messageRefs:[]};let Y=[],X=G+1;for(;X<j.length;X+=1){let q=j[X];if(/^\s*-\s+/.test(q)){let K=q.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(K)Y.push(K[1])}else if(!q.trim())break;else break}if(Y.length===0)return{content:_,messageRefs:[]};let Z=j.slice(0,G),L=j.slice(X);return{content:[...Z,...L].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Y}}function UJ(_){if(!_)return{content:_,attachmentRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Attachments:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){G=q;break}if(G===-1)return{content:_,attachmentRefs:[]};let Y=[],X=G+1;for(;X<j.length;X+=1){let q=j[X];if(/^\s*-\s+/.test(q)){let K=q.replace(/^\s*-\s+/,"").trim(),Q=K.match(/^attachment:(\d+)(?:\s*\((.+)\))?$/i);if(Q)Y.push({id:Q[1],label:(Q[2]||"").trim()||`attachment:${Q[1]}`,raw:K})}else if(!q.trim())break;else break}if(Y.length===0)return{content:_,attachmentRefs:[]};let Z=j.slice(0,G),L=j.slice(X);return{content:[...Z,...L].join(`
`).replace(/\n{3,}/g,`

`).trim(),attachmentRefs:Y}}function Mq(_){let $=KJ(_||""),j=BJ($||""),G=FJ(j.content||""),Y=NJ(G.content||""),X=UJ(Y.content||"");return{text:X.content||"",fileRefs:j.fileRefs,folderRefs:G.folderRefs,messageRefs:Y.messageRefs,attachmentRefs:X.attachmentRefs}}function EJ(_){let $=Mq(_),j=$.attachmentRefs.length>0?`Attachments:
${$.attachmentRefs.map((Y)=>`- ${Y.raw}`).join(`
`)}`:"";return{content:[String($.text||"").trim(),j].filter(Boolean).join(`

`).trim(),fileRefs:[...$.fileRefs],folderRefs:[...$.folderRefs],messageRefs:[...$.messageRefs],attachmentRefs:[...$.attachmentRefs]}}function DJ(_){let{queuedItem:$,buildDraft:j=EJ,onRemoveQueuedFollowup:G,setSubmitError:Y,setSubmitNotice:X,setMediaFiles:Z,onSetFileRefs:L,onSetFolderRefs:V,onSetMessageRefs:q,setContent:K,textareaRef:Q,resizeTextarea:F=()=>{},scheduleTimeout:B=(M,z=0)=>setTimeout(M,z),scheduleRaf:U=(M)=>requestAnimationFrame(M),logger:H=console}=_||{};if(!$)return!1;let D=j($?.content||""),E=D.content;return H?.info?.("[compose-box] Returning queued item to editor",{text:E?.slice(0,80),fileRefs:D.fileRefs?.length,folderRefs:D.folderRefs?.length,messageRefs:D.messageRefs?.length}),Y?.(null),X?.(null),Z?.([]),L?.(D.fileRefs),V?.(D.folderRefs),q?.(D.messageRefs),K?.(E),U(()=>{let M=Q?.current;if(!M)return;if(M.value=E,typeof M.dispatchEvent==="function")M.dispatchEvent(new Event("input",{bubbles:!0}));F();let z=E.length;M.selectionStart=z,M.selectionEnd=z,M.focus()}),B(()=>{try{G?.($)}catch(M){H?.warn?.("[compose-box] Failed to remove returned queued follow-up.",M)}},0),!0}function HJ({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onMoveQueuedFollowup:G,onReturnQueuedFollowup:Y,onOpenFilePill:X}){if(!Array.isArray(_)||_.length===0)return null;return N`
        <div class="compose-queue-stack">
            ${_.map((Z,L)=>{let V=typeof Z?.content==="string"?Z.content:"",q=Mq(V);if(!q.text.trim()&&q.fileRefs.length===0&&q.folderRefs.length===0&&q.messageRefs.length===0&&q.attachmentRefs.length===0)return null;let K=L>0,Q=L<_.length-1,F=!0;return N`
                    <div class="compose-queue-stack-item" data-testid="queue-item" role="listitem">
                        <div class="compose-queue-stack-content" title=${V}>
                            ${q.text.trim()&&N`<div class="compose-queue-stack-text">${q.text}</div>`}
                            ${(q.messageRefs.length>0||q.fileRefs.length>0||q.folderRefs.length>0||q.attachmentRefs.length>0)&&N`
                                <div class="compose-queue-stack-refs">
                                    ${q.messageRefs.map((B)=>N`
                                        <${q1}
                                            key=${"queue-msg-"+B}
                                            prefix="compose"
                                            label=${"msg:"+B}
                                            title=${"Message reference: "+B}
                                            icon="message"
                                        />
                                    `)}
                                    ${q.fileRefs.map((B)=>{let U=B.split("/").pop()||B;return N`
                                            <${q1}
                                                key=${"queue-file-"+B}
                                                prefix="compose"
                                                label=${U}
                                                title=${B}
                                                onClick=${()=>X?.(B)}
                                            />
                                        `})}
                                    ${q.folderRefs.map((B)=>{let U=B.split("/").pop()||B;return N`
                                            <${q1}
                                                key=${"queue-folder-"+B}
                                                prefix="compose"
                                                label=${U}
                                                title=${B}
                                                icon="folder"
                                                onClick=${()=>X?.(B)}
                                            />
                                        `})}
                                    ${q.attachmentRefs.map((B)=>N`
                                        <${q1}
                                            key=${"queue-attachment-"+B.id}
                                            prefix="compose"
                                            label=${B.label}
                                            title=${B.raw}
                                        />
                                    `)}
                                </div>
                            `}
                        </div>
                        <div class="compose-queue-stack-actions" role="group" aria-label="Queued follow-up controls">
                            ${_.length>1&&N`
                                <button
                                    class="compose-queue-stack-move-btn"
                                    data-action="move-up"
                                    type="button"
                                    title="Move up"
                                    aria-label="Move up in queue"
                                    disabled=${!K}
                                    onClick=${()=>K&&G?.(L,L-1)}
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
                                    disabled=${!Q}
                                    onClick=${()=>Q&&G?.(L,L+1)}
                                >
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </button>
                            `}
                            ${F&&N`
                                <button
                                    class="compose-queue-stack-move-btn queue-edit"
                                    data-action="edit"
                                    type="button"
                                    title="Edit in compose"
                                    aria-label="Return queued message to editor"
                                    onClick=${(B)=>{B.stopPropagation(),Y?.(Z)}}
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
                                onClick=${()=>$?.(Z)}
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
                                onClick=${()=>j?.(Z)}
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
    `}function Tq({onPost:_,onFocus:$,searchMode:j,searchScope:G="current",onSearch:Y,onSearchScopeChange:X,onEnterSearch:Z,onExitSearch:L,fileRefs:V=[],onRemoveFileRef:q,onClearFileRefs:K,folderRefs:Q=[],onRemoveFolderRef:F,onClearFolderRefs:B,messageRefs:U=[],onRemoveMessageRef:H,onClearMessageRefs:D,activeModel:E=null,agentModelsPayload:M=null,modelUsage:z=null,thinkingLevel:O=null,supportsThinking:x=!1,contextUsage:I=null,onContextCompact:A,notificationsEnabled:k=!1,notificationPermission:W="default",onToggleNotifications:T,onModelChange:y,onModelStateChange:J,activeEditorPath:P=null,onAttachEditorFile:R,onOpenFilePill:b,followupQueueItems:c=[],onInjectQueuedFollowup:r,onRemoveQueuedFollowup:e,onMoveQueuedFollowup:m,onSubmitIntercept:_0,onMessageResponse:H0,isAgentActive:Y0=!1,activeChatAgents:j0=[],currentChatJid:L0="web:default",connectionStatus:F0="connected",stateAccessFailed:h=!1,onSetFileRefs:$0,onSetFolderRefs:V0,onSetMessageRefs:O0,onSubmitError:a,onSwitchChat:X0,onRenameSession:W0,isRenameSessionInProgress:P0=!1,onCreateSession:p0,onCreateRootSession:u0,onDeleteSession:Y_,onPurgeArchivedSession:l0,onRestoreSession:a0,showQueueStack:R0=!0,statusNotice:i0=null,extensionWorkingState:m0=null,prefillRequest:e0=null}){let[s0,U_]=C(""),[X_,c0]=C(""),[z0,L_]=C(!1),[o0,H_]=C(!1),[E0,g0]=C("or"),[x0,n0]=C([]),[A_,Q_]=C(!1),[E_,N_]=C([]),[J_,x_]=C(0),[R_,W_]=C(!1),s_=u(null),[f_,q0]=C([]),[v,n]=C(0),[s,G0]=C(!1),[N0,T0]=C(!1),[J0,M0]=C(!1),[y0,h0]=C(!1),[S0,d0]=C([]),[__,I0]=C(0),[w0,D_]=C(0),[$_,d]=C(!1),[B0,r0]=C(!1),[G_,S_]=C(0),[U1,b_]=C(null),[A1,C_]=C(null),[k_,J1]=C(()=>n9()),[O_,M_]=C({kind:"idle",title:"",detail:""}),[k1,p_]=C(()=>Date.now()),[a_,e_]=C(0),F_=u(null),I1=u(null),E1=u(null),v1=u(null),M1=u(null),$$=u(null),p4=u(null),M$=u(null),_1=u({value:"",updatedAt:0}),c_=u(null),T1=u(""),D1=u(""),j1=u(""),T$=u(""),y$=u(!1),j$=u(!1),y_=u(!1),V1=u(0),w$=u(!1),r4=200,G$=iA(L0),n4=(w)=>{let l=new Set,i=[];for(let K0 of w||[]){if(typeof K0!=="string")continue;let f0=K0.trim();if(!f0||l.has(f0))continue;l.add(f0),i.push(f0)}return i},d4=(w=G$)=>{let l=O1(w);if(!l)return[];try{let i=JSON.parse(l);if(!Array.isArray(i))return[];return n4(i)}catch{return[]}},I$=(w,l=G$)=>{V_(l,JSON.stringify(w))},x$=u(d4(G$)),m1=u(-1),c1=u(""),o4=u("");g(()=>{x$.current=d4(G$),m1.current=-1,c1.current=""},[G$]),g(()=>{if(!j)return;fetch("/agent/settings-data").then((w)=>w.json()).then((w)=>{if(w?.searchMatchMode)g0(w.searchMatchMode)}).catch(()=>{})},[j]),g(()=>{let w=!1;return fetch(`/agent/commands?chat_jid=${encodeURIComponent(L0||"web:default")}`).then((i)=>i.ok?i.json():null).then((i)=>{if(w||!i?.commands)return;s_.current=i.commands.map((K0)=>({name:K0.name,description:K0.description||""}))}).catch((i)=>{console.debug("[compose] failed to fetch dynamic commands",i)}),()=>{w=!0}},[L0]),g(()=>{let w=oA(e0,o4.current,j);if(!w.shouldApply)return;o4.current=w.nextToken,b_(null),U_(w.text),D0(w.text),r_(w.text),requestAnimationFrame(()=>{C0();let l=F_.current;if(!l)return;try{l.focus({preventScroll:!0})}catch{l.focus()}let i=w.text.length;l.setSelectionRange?.(i,i)})},[e0,j]),g(()=>{J1(n9())},[]);let Q1=s0.trim()||x0.length>0||V.length>0||Q.length>0||U.length>0,g_=O_.kind!=="idle",i4=O_.kind==="requesting_permission"||O_.kind==="listening",x1=!j&&Boolean(k_?.showButton),C$=O_.kind==="requesting_permission"||O_.kind==="listening",s4=C$?"Stop voice input":k_?.title||"Voice input",v5=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),m5=typeof window<"u"&&typeof Notification<"u",L4=typeof window<"u"?Boolean(window.isSecureContext):!1,a4=m5&&L4&&W!=="denied",t4=W==="granted"&&k,K1=z$(i0),R$=m2(i0),q4=typeof i0?.detail==="string"&&i0.detail.trim()?i0.detail.trim():"",V4=K1?A6(i0,k1):null,C1=GJ(m0,a_),H1=m0?.indicator&&typeof m0.indicator==="object"?m0.indicator:null,c5=t4?"Disable notifications":"Enable notifications",Q4=x0.length>0||V.length>0||Q.length>0||U.length>0,Y$=p9(h?F0:"connected"),n_=Y$.label,f$=Y$.title,e4=eA(Y0,Q1,K1),X$=$J(Y0,K1),p6=(Array.isArray(j0)?j0:[]).filter((w)=>!w?.archived_at),v_=(()=>{for(let w of Array.isArray(j0)?j0:[]){let l=typeof w?.chat_jid==="string"?w.chat_jid.trim():"";if(l&&l===L0)return w}return null})(),$3=Boolean(v_&&v_.chat_jid===(v_.root_chat_jid||v_.chat_jid)),j3=Boolean($3&&(v_?.chat_jid||L0)==="web:default"),P1=(()=>{let w=typeof v_?.parent_branch_id==="string"?v_.parent_branch_id.trim():"",l=typeof v_?.branch_id==="string"?v_.branch_id.trim():"";if(!v_||!w||!l||v_.archived_at)return null;if((Array.isArray(j0)?j0:[]).filter((f0)=>{let B_=typeof f0?.parent_branch_id==="string"?f0.parent_branch_id.trim():"";return B_&&B_===l}).length>0)return null;return(Array.isArray(j0)?j0:[]).find((f0)=>{let B_=typeof f0?.branch_id==="string"?f0.branch_id.trim():"";return B_&&B_===w&&!f0?.archived_at})||null})(),K4=Z0(()=>sA(j0,L0),[j0,L0]),S$=K4.length>0,g$=S$&&typeof X0==="function",u$=S$&&typeof a0==="function",_5=Boolean(P0||w$.current),Z$=!j&&typeof W0==="function"&&!_5,L$=!j&&typeof p0==="function",B4=!j&&typeof u0==="function",F4=!j&&!Y0&&!B0&&Boolean(P1?.chat_jid),q$=!j&&typeof Y_==="function"&&!j3,r6=!j&&typeof l0==="function",V$=!j&&(g$||u$||Z$||L$||B4||F4||q$||r6),n6=VJ(E,M),h5=n6.showPicker,l5=n6.label,p5=x&&O?` (${O})`:"",G3=p5.trim()?`${O}`:"",S=QJ(E,M),p=typeof z?.hint_short==="string"?z.hint_short.trim():"",o=[G3||null,S?.label||null,p||null].filter(Boolean).join(" • "),t=[E?`Current model: ${l5}${p5}`:null,S?.title||null,z?.plan?`Plan: ${z.plan}`:null,p||null,z?.primary?.reset_description||null,z?.secondary?.reset_description||null].filter(Boolean),U0=N0?"Switching model…":t.join(" • ")||(h5?"Select a model (tap to open model picker)":`Current model: ${l5}${p5} (tap to open model picker)`),Q0=!j&&(h5||I&&I.percent!=null),A0=(w)=>{if(!w||typeof w!=="object")return;let l=w.model??w.current;if(typeof J==="function")J({...w,model:l??null,thinking_level:w.thinking_level??null,thinking_level_label:w.thinking_level_label??null,supports_thinking:w.supports_thinking,provider_usage:w.provider_usage??null});if(l&&typeof y==="function")y(l)},C0=(w)=>{let l=w||F_.current;if(!l)return;l.style.height="auto",l.style.height=`${l.scrollHeight}px`,l.style.overflowY="hidden"},D0=(w)=>{if(!w.startsWith("/")||w.includes(`
`)){W_(!1),N_([]);return}let l=w.toLowerCase().split(" ")[0];if(l.length<1){W_(!1),N_([]);return}let K0=(s_.current||dA).filter((f0)=>f0.name.startsWith(l)||f0.name.replace(/-/g,"").startsWith(l.replace(/-/g,"")));if(K0.length>0&&!(K0.length===1&&K0[0].name===l))G0(!1),q0([]),N_(K0),x_(0),W_(!0);else W_(!1),N_([])},t0=(w)=>{let l=s0,i=l.indexOf(" "),K0=i>=0?l.slice(i):"",f0=w.name+K0;U_(f0),W_(!1),N_([]),requestAnimationFrame(()=>{let B_=F_.current;if(!B_)return;let o_=f0.length;B_.selectionStart=o_,B_.selectionEnd=o_,B_.focus()})},r_=(w)=>{if(m9(w,{searchMode:j,showSessionSwitcherButton:V$})){G0(!1),q0([]);return}if(b9(w)==null){G0(!1),q0([]);return}let l=Vq(p6,w,{currentChatJid:L0});if(l.length>0&&!(l.length===1&&v9(l[0].agent_name).trim().toLowerCase()===String(w||"").trim().toLowerCase()))W_(!1),N_([]),q0(l),n(0),G0(!0);else G0(!1),q0([])},G1=(w)=>{let l=v9(w?.agent_name);if(!l)return;U_(l),G0(!1),q0([]),requestAnimationFrame(()=>{let i=F_.current;if(!i)return;let K0=l.length;i.selectionStart=K0,i.selectionEnd=K0,i.focus()})},Q$=()=>{if(j||!g$&&!u$&&!Z$&&!L$&&!q$)return!1;return _1.current={value:"",updatedAt:0},M0(!1),W_(!1),N_([]),G0(!1),q0([]),h0(!0),!0},ej=(w)=>{if(w?.preventDefault?.(),w?.stopPropagation?.(),j||!g$&&!u$&&!Z$&&!L$&&!q$)return;if(y0){_1.current={value:"",updatedAt:0},h0(!1);return}Q$()},_G=(w)=>{let l=typeof w==="string"?w.trim():"";if(h0(!1),!l||l===L0){requestAnimationFrame(()=>F_.current?.focus());return}X0?.(l)},$G=async(w)=>{let l=typeof w==="string"?w.trim():"";if(h0(!1),!l||typeof a0!=="function"){requestAnimationFrame(()=>F_.current?.focus());return}try{await a0(l)}catch(i){console.warn("Failed to restore session:",i),requestAnimationFrame(()=>F_.current?.focus())}},d_=Z0(()=>{let w=[];for(let l of K4){let i=Boolean(l?.archived_at),K0=typeof l?.agent_name==="string"?l.agent_name.trim():"",f0=typeof l?.chat_jid==="string"?l.chat_jid.trim():"";if(!K0||!f0)continue;w.push({type:"session",key:`session:${f0}`,label:`@${K0} — ${f0}${l?.is_active?" active":""}${i?" archived":""}`,chat:l,disabled:i?!u$:!g$})}if(L$)w.push({type:"action",key:"action:new",label:"New branch",action:"new",disabled:!1});if(B4)w.push({type:"action",key:"action:new-root",label:"New root session…",action:"new-root",disabled:!1});if(P1?.chat_jid)w.push({type:"action",key:"action:rollup",label:"Merge current w/ parent",action:"rollup",disabled:!F4});if(Z$)w.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:_5});if(q$)w.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return w},[K4,u$,g$,L$,B4,P1,F4,Z$,q$,_5]),jG=async(w)=>{if(w?.preventDefault)w.preventDefault();if(w?.stopPropagation)w.stopPropagation();if(typeof W0!=="function"||P0||w$.current)return;w$.current=!0,h0(!1);try{await W0()}catch(l){console.warn("Failed to rename session:",l)}finally{w$.current=!1}requestAnimationFrame(()=>F_.current?.focus())},GG=async()=>{if(typeof p0!=="function")return;h0(!1);try{await p0()}catch(w){console.warn("Failed to create session:",w)}requestAnimationFrame(()=>F_.current?.focus())},YG=async()=>{if(typeof u0!=="function")return;h0(!1);let w=typeof window<"u"?window.prompt("New root session handle (for example: ops)"):"",l=String(w||"").trim();if(!l){requestAnimationFrame(()=>F_.current?.focus());return}try{await u0(l)}catch(i){console.warn("Failed to create root session:",i)}requestAnimationFrame(()=>F_.current?.focus())},XG=async()=>{let w=typeof P1?.chat_jid==="string"?P1.chat_jid.trim():"";if(!w||B0||Y0)return;h0(!1),b_(null),C_(null),r0(!0);try{let l=await z1("default","/rollup",null,[],null,L0);H0?.(l),_?.(l);let i=l?.command;if(i?.status==="error"){let f0=i?.message||"Failed to merge current session with parent.";b_(f0),a?.(f0);return}let K0=typeof i?.rolled_up_to==="string"&&i.rolled_up_to.trim()?i.rolled_up_to.trim():w;X0?.(K0)}catch(l){let i=l?.message||"Failed to merge current session with parent.";b_(i),a?.(i),console.warn("Failed to merge session with parent:",l)}finally{r0(!1)}requestAnimationFrame(()=>F_.current?.focus())},ZG=async()=>{if(typeof Y_!=="function")return;h0(!1);try{await Y_(L0)}catch(w){console.warn("Failed to delete session:",w)}requestAnimationFrame(()=>F_.current?.focus())},b$=(w)=>{if(j)c0(w);else U_(w),D0(w),r_(w);requestAnimationFrame(()=>C0())},pN=(w)=>{let l=j?X_:s0,i=l&&!l.endsWith(`
`)?`
`:"",K0=`${l}${i}${w}`.trimStart();b$(K0)},Y3=f(()=>{requestAnimationFrame(()=>{let w=F_.current;if(!w)return;try{w.focus({preventScroll:!0})}catch{w.focus()}})},[]),h1=f(()=>{M_({kind:"idle",title:"",detail:""})},[]),X3=f((w=D1.current,l=j1.current)=>{if(j)return;b$(Uq(T1.current,w,l))},[j]),l1=f(()=>{y$.current=!0;let w=c_.current;if(!w){h1();return}try{w.stop()}catch{c_.current=null,h1()}},[h1]),Z3=f(()=>{if(b_(null),C_(null),c_.current){l1();return}if(!k_?.showButton)return;if(k_.mode==="fallback"){Y3(),M_({kind:"guidance",title:k_.title||"Use keyboard dictation",detail:k_.detail||"Use your keyboard dictation mic for voice input here."});return}if(!k_?.canStart||!k_?.recognitionCtor){M_({kind:"error",title:k_?.title||"Voice input unavailable",detail:k_?.detail||"This browser does not expose native speech recognition in this context."});return}try{let w=new k_.recognitionCtor;if(c_.current=w,T1.current=String(s0||""),D1.current="",j1.current="",T$.current="",y$.current=!1,w.lang=typeof navigator<"u"&&navigator.language?navigator.language:"en-US",w.interimResults=!0,w.continuous=!1,"maxAlternatives"in w)w.maxAlternatives=1;w.onstart=()=>{M_({kind:"listening",title:"Listening…",detail:"Speak now. Tap the mic again to stop."})},w.onresult=(l)=>{let{finalText:i,interimText:K0}=Eq(l?.results,l?.resultIndex||0);if(i)D1.current=`${D1.current} ${i}`.trim();j1.current=K0,X3(),M_({kind:"listening",title:"Listening…",detail:K0?`Heard: ${K0}`:"Speak now. Tap the mic again to stop."})},w.onerror=(l)=>{let i=String(l?.error||"").trim();if(T$.current=i,c_.current=null,j1.current="",i==="aborted"){h1();return}M_({kind:"error",title:"Voice input failed",detail:d9(i,k_)})},w.onend=()=>{let l=T$.current,i=y$.current,K0=Boolean(D1.current.trim()||j1.current.trim());if(c_.current=null,y$.current=!1,T$.current="",j1.current.trim())D1.current=`${D1.current} ${j1.current}`.trim(),j1.current="";if(K0)X3(D1.current,"");if(l&&l!=="aborted")return;if(!K0&&!i){M_({kind:"error",title:"No speech detected",detail:d9("no-speech",k_)});return}h1()},M_({kind:"requesting_permission",title:"Starting voice input…",detail:"Allow microphone access if the browser asks."}),Y3(),w.start()}catch(w){c_.current=null,M_({kind:"error",title:"Voice input failed",detail:w?.message||"Could not start native browser speech recognition."})}},[X3,h1,s0,Y3,k_,l1]),rN=(w)=>{let l=w?.command?.model_label;if(l)return l;let i=w?.command?.message;if(typeof i==="string"){let K0=i.match(/•\s+([^\n]+?)\s+\(current\)/);if(K0?.[1])return K0[1].trim()}return null},LG=async(w)=>{if(j||N0)return;b_(null),C_(null),T0(!0);try{let l=await z1("default",w,null,[],null,L0),i=rN(l);return A0({model:i??E??null,thinking_level:l?.command?.thinking_level,thinking_level_label:l?.command?.thinking_level_label,supports_thinking:l?.command?.supports_thinking}),await r9(I4,L0,A0),C_(Hq(w,l)),_?.(l),!0}catch(l){return console.error("Failed to switch model:",l),alert("Failed to switch model: "+l.message),!1}finally{T0(!1)}},nN=(w)=>{if(w.pointerType==="mouse")return;let l=F_.current?.value??(j?X_:s0);if(!Wq(w,l,{searchMode:j,speechButtonVisible:x1,speechButtonActive:C$,canStartSpeech:Boolean(k_?.canStart&&k_?.recognitionCtor)}))return;w.preventDefault(),j$.current=!0,y_.current=!0,Z3()},L3=(w)=>{if(!j$.current)return;if(w?.preventDefault?.(),j$.current=!1,c_.current)l1()},dN=(w)=>{if(y_.current){y_.current=!1,w.preventDefault();return}Z3()},oN=async()=>{await LG("/cycle-model")},q3=async(w)=>{let l=typeof w==="string"?w:typeof w?.label==="string"?w.label:"";if(!l||N0)return;let i=Oq(w,I);if(i.blocked){b_(null),C_(i.note);return}if(await LG(`/model ${l}`))M0(!1)},iN=(w)=>{if(!w||w.disabled)return;if(w.type==="session"){let l=w.chat;if(l?.archived_at)$G(l.chat_jid);else _G(l.chat_jid);return}if(w.type==="action"){if(w.action==="new"){GG();return}if(w.action==="new-root"){YG();return}if(w.action==="rollup"){XG();return}if(w.action==="rename"){jG();return}if(w.action==="delete")ZG()}},sN=(w)=>{w.preventDefault(),w.stopPropagation(),_1.current={value:"",updatedAt:0},h0(!1),M0((l)=>!l)},aN=async()=>{if(j)return;A?.(),await $5("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeFolderRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},tN=(w)=>{if(w==="queue"||w==="steer"||w==="auto")return w;return Y0?"queue":void 0},$5=async(w,l,i={})=>{let K0=typeof w==="string"?w:s0;if(/^\/settings\s*$/i.test(K0.trim())){U_(""),requestAnimationFrame(()=>C0()),s1();return}if(/^\/help\s*$/i.test(K0.trim())){U_(""),requestAnimationFrame(()=>C0()),s1({section:"keyboard"});return}let{includeMedia:f0=!0,includeFileRefs:B_=!0,includeFolderRefs:o_=!0,includeMessageRefs:h_=!0,clearAfterSubmit:R1=!0,recordHistory:y1=!0}=i||{},qG=typeof w==="string"?w:w&&typeof w?.target?.value==="string"?w.target.value:s0,VG=typeof qG==="string"?qG:"";if(!VG.trim()&&(f0?x0.length===0:!0)&&(B_?V.length===0:!0)&&(o_?Q.length===0:!0)&&(h_?U.length===0:!0))return;if(c_.current)l1();h1(),W_(!1),N_([]),G0(!1),q0([]),h0(!1),b_(null),C_(null);let d6=f0?[...x0]:[],o6=B_?[...V]:[],i6=o_?[...Q]:[],s6=h_?[...U]:[],N4=VG.trim();if(y1&&N4){let U4=x$.current,B1=n4(U4.filter((Q3)=>Q3!==N4));if(B1.push(N4),B1.length>200)B1.splice(0,B1.length-200);x$.current=B1,I$(B1),m1.current=-1,c1.current=""}let FU=()=>{if(f0)n0([...d6]);if(B_)$0?.(o6);if(o_)V0?.(i6);if(h_)O0?.(s6);U_(N4),requestAnimationFrame(()=>C0())};if(R1)U_(""),n0([]),K?.(),B?.(),D?.();(async()=>{try{let U4=await _0?.({content:N4,submitMode:l,fileRefs:o6,folderRefs:i6,messageRefs:s6,mediaFiles:d6});if(U4){_?.(U4);return}let B1=[];for(let K$ of d6){let a6=await v7(K$);B1.push(a6.id)}let Q3=o6.length?`Files:
${o6.map((K$)=>`- ${K$}`).join(`
`)}`:"",NU=i6.length?`Folders:
${i6.map((K$)=>`- ${K$}`).join(`
`)}`:"",UU=s6.length?`Referenced messages:
${s6.map((K$)=>`- message:${K$}`).join(`
`)}`:"",EU=B1.length?`Attachments:
${B1.map((K$,a6)=>{let HU=d6[a6]?.name||`attachment-${a6+1}`;return`- attachment:${K$} (${HU})`}).join(`
`)}`:"",DU=[N4,Q3,NU,UU,EU].filter(Boolean).join(`

`),v$=await z1("default",DU,null,B1,tN(l),L0);if(H0?.(v$),v$?.command)A0({model:v$.command.model_label??E??null,thinking_level:v$.command.thinking_level,thinking_level_label:v$.command.thinking_level_label,supports_thinking:v$.command.supports_thinking}),await r9(I4,L0,A0);C_(Hq(N4,v$)),_?.(v$)}catch(U4){if(R1)FU();let B1=U4?.message||"Failed to send message.";b_(B1),a?.(B1),console.error("Failed to post:",U4)}})()},eN=(w)=>{r?.(w)},_U=f((w)=>{DJ({queuedItem:w,onRemoveQueuedFollowup:e,setSubmitError:b_,setSubmitNotice:C_,setMediaFiles:n0,onSetFileRefs:$0,onSetFolderRefs:V0,onSetMessageRefs:O0,setContent:U_,textareaRef:F_,resizeTextarea:C0})},[e,$0,V0,O0,C0]),r5=f((w)=>{if(j||!J0&&!y0||w?.isComposing)return!1;let l=()=>{w.preventDefault?.(),w.stopPropagation?.()},i=()=>{_1.current={value:"",updatedAt:0}};if(w.key==="Escape"){if(l(),i(),J0)M0(!1);if(y0)h0(!1);return!0}if(J0){if(w.key==="ArrowDown"){if(l(),i(),S0.length>0)I0((K0)=>(K0+1)%S0.length);return!0}if(w.key==="ArrowUp"){if(l(),i(),S0.length>0)I0((K0)=>(K0-1+S0.length)%S0.length);return!0}if((w.key==="Enter"||w.key==="Tab")&&S0.length>0)return l(),i(),q3(S0[Math.max(0,Math.min(__,S0.length-1))]),!0;if(w6(w)&&S0.length>0){l();let K0=g9(_1.current,w.key);_1.current=K0;let f0=u9(S0,K0.value,__,(B_)=>qJ(B_));if(f0>=0)I0(f0);return!0}}if(y0){if(w.key==="ArrowDown"){if(l(),i(),d_.length>0)D_((K0)=>(K0+1)%d_.length);return!0}if(w.key==="ArrowUp"){if(l(),i(),d_.length>0)D_((K0)=>(K0-1+d_.length)%d_.length);return!0}if((w.key==="Enter"||w.key==="Tab")&&d_.length>0)return l(),i(),iN(d_[Math.max(0,Math.min(w0,d_.length-1))]),!0;if(w6(w)&&d_.length>0){l();let K0=g9(_1.current,w.key);_1.current=K0;let f0=u9(d_,K0.value,w0,(B_)=>B_.label);if(f0>=0)D_(f0);return!0}}return!1},[j,J0,y0,S0,__,d_,w0,q3]),$U=(w)=>{if(w.isComposing)return;if(j&&w.key==="Escape"){w.preventDefault(),c0(""),L?.();return}if(r5(w))return;let l=F_.current?.value??(j?X_:s0);if(Wq(w,l,{searchMode:j,speechButtonVisible:x1,speechButtonActive:C$,canStartSpeech:Boolean(k_?.canStart&&k_?.recognitionCtor)})){w.preventDefault(),j$.current=!0,Z3();return}if(Kq(w,l,{searchMode:j,showSessionSwitcherButton:V$})){w.preventDefault(),Q$();return}if(s&&f_.length>0){let i=F_.current?.value??(j?X_:s0);if(!String(i||"").match(/^@([a-zA-Z0-9_-]*)$/))G0(!1),q0([]);else{if(w.key==="ArrowDown"){w.preventDefault(),n((K0)=>(K0+1)%f_.length);return}if(w.key==="ArrowUp"){w.preventDefault(),n((K0)=>(K0-1+f_.length)%f_.length);return}if(w.key==="Tab"||w.key==="Enter"){w.preventDefault(),G1(f_[v]);return}if(w.key==="Escape"){w.preventDefault(),G0(!1),q0([]);return}}}if(R_&&E_.length>0){let i=F_.current?.value??(j?X_:s0);if(!String(i||"").startsWith("/"))W_(!1),N_([]);else{if(w.key==="ArrowDown"){w.preventDefault(),x_((K0)=>(K0+1)%E_.length);return}if(w.key==="ArrowUp"){w.preventDefault(),x_((K0)=>(K0-1+E_.length)%E_.length);return}if(w.key==="Tab"){w.preventDefault(),t0(E_[J_]);return}if(w.key==="Enter"&&!w.shiftKey){if(!l.includes(" ")){w.preventDefault();let f0=E_[J_];W_(!1),N_([]),$5(f0.name);return}}if(w.key==="Escape"){w.preventDefault(),W_(!1),N_([]);return}}}if(!j&&(w.key==="ArrowUp"||w.key==="ArrowDown")&&!w.metaKey&&!w.ctrlKey&&!w.altKey&&!w.shiftKey){let i=F_.current;if(!i)return;let K0=i.value||"",f0=i.selectionStart===0&&i.selectionEnd===0,B_=i.selectionStart===K0.length&&i.selectionEnd===K0.length;if(w.key==="ArrowUp"&&f0||w.key==="ArrowDown"&&B_){let o_=x$.current;if(!o_.length)return;w.preventDefault();let h_=m1.current;if(w.key==="ArrowUp"){if(h_===-1)c1.current=K0,h_=o_.length-1;else if(h_>0)h_-=1;m1.current=h_,b$(o_[h_]||"")}else{if(h_===-1)return;if(h_<o_.length-1)h_+=1,m1.current=h_,b$(o_[h_]||"");else m1.current=-1,b$(c1.current||""),c1.current=""}requestAnimationFrame(()=>{let R1=F_.current;if(!R1)return;let y1=R1.value.length;R1.selectionStart=y1,R1.selectionEnd=y1});return}}if(w.key==="Enter"&&!w.shiftKey&&(w.ctrlKey||w.metaKey)){if(w.preventDefault(),j){if(l.trim())Y?.(l.trim(),G,{images:z0,attachments:o0})}else $5(l,"steer");return}if(w.key==="Enter"&&!w.shiftKey){if(w.preventDefault(),j){if(l.trim())Y?.(l.trim(),G,{images:z0,attachments:o0})}else $5(l);return}if(w.key==="Escape"){if(J0||y0||R_||s)return;w.preventDefault(),F_.current?.blur()}},jU=(w)=>{if(_J(w,j$.current)){if(w.preventDefault(),j$.current=!1,c_.current)l1()}},V3=(w)=>{let l=Array.from(w||[]).filter((i)=>i instanceof File&&!String(i.name||"").startsWith(".DS_Store"));if(!l.length)return;n0((i)=>[...i,...l]),b_(null)},GU=(w)=>{V3(w.target.files),w.target.value=""},YU=(w)=>{if(j)return;w.preventDefault(),w.stopPropagation(),V1.current+=1,Q_(!0)},XU=(w)=>{if(j)return;if(w.preventDefault(),w.stopPropagation(),V1.current=Math.max(0,V1.current-1),V1.current===0)Q_(!1)},ZU=(w)=>{if(j)return;if(w.preventDefault(),w.stopPropagation(),w.dataTransfer)w.dataTransfer.dropEffect="copy";Q_(!0)},LU=(w)=>{if(j)return;w.preventDefault(),w.stopPropagation(),V1.current=0,Q_(!1),V3(w.dataTransfer?.files||[])},qU=(w)=>{if(j)return;let l=w.clipboardData?.items;if(!l||!l.length)return;let i=[];for(let K0 of l){if(K0.kind!=="file")continue;let f0=K0.getAsFile?.();if(f0)i.push(f0)}if(i.length>0)w.preventDefault(),V3(i)},VU=(w)=>{n0((l)=>l.filter((i,K0)=>K0!==w))},QU=()=>{b_(null),n0([]),K?.(),B?.(),D?.()},KU=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((w)=>{let{latitude:l,longitude:i,accuracy:K0}=w.coords,f0=`${l.toFixed(5)}, ${i.toFixed(5)}`,B_=Number.isFinite(K0)?` ±${Math.round(K0)}m`:"",o_=`https://maps.google.com/?q=${l},${i}`,h_=`Location: ${f0}${B_} ${o_}`;pN(h_)},(w)=>{let l=w?.message||"Unable to retrieve location.";alert(`Location error: ${l}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};g(()=>{if(!J0)return;_1.current={value:"",updatedAt:0},d(!0),I4(L0).then((w)=>{d0(Jq(w)),A0(w)}).catch((w)=>{console.warn("Failed to load model list:",w),d0([])}).finally(()=>{d(!1)})},[J0,E]),g(()=>{if(j)M0(!1),h0(!1),W_(!1),N_([]),G0(!1),q0([])},[j]),g(()=>{if(y0&&!V$)h0(!1)},[y0,V$]),g(()=>{if(!J0)return;let w=S0.findIndex((l)=>l?.label===E);I0(w>=0?w:0)},[J0,S0,E]),g(()=>{if(!y0)return;D_(tA(d_,L0)),_1.current={value:"",updatedAt:0}},[y0,L0,d_]),g(()=>{if(!J0)return;let w=(l)=>{let i=v1.current,K0=M1.current,f0=l.target;if(i&&i.contains(f0))return;if(K0&&K0.contains(f0))return;M0(!1)};return document.addEventListener("pointerdown",w),()=>document.removeEventListener("pointerdown",w)},[J0]),g(()=>{if(!y0)return;let w=(l)=>{let i=$$.current,K0=p4.current,f0=l.target;if(i&&i.contains(f0))return;if(K0&&K0.contains(f0))return;h0(!1)};return document.addEventListener("pointerdown",w),()=>document.removeEventListener("pointerdown",w)},[y0]),g(()=>{if(j||!J0&&!y0)return;let w=(l)=>{r5(l)};return document.addEventListener("keydown",w,!0),()=>document.removeEventListener("keydown",w,!0)},[j,J0,y0,r5]),g(()=>{if(!J0)return;let w=v1.current;w?.focus?.(),w?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[J0,__,S0]),g(()=>{if(!y0)return;let w=$$.current;w?.focus?.(),w?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[y0,w0,d_.length]),g(()=>{if(!s||!E1.current)return;E1.current.querySelector?.(".slash-item.active")?.scrollIntoView?.({block:"nearest"})},[s,v,f_.length]),g(()=>{if(!R_||!I1.current)return;I1.current.querySelector?.(".slash-item.active")?.scrollIntoView?.({block:"nearest"})},[R_,J_,E_.length]),g(()=>{let w=(i)=>{if(!i||typeof i!=="object")return!1;if(i.isContentEditable)return!0;if(typeof i.closest!=="function")return!1;return Boolean(i.closest('input, textarea, select, [contenteditable="true"], .compose-box, .compose-model-popup, .compose-session-popup, .settings-dialog, .workspace-sidebar, .editor-pane-container, .dock-panel, .timeline-menu-dropdown, .rename-branch-overlay, .agent-request-modal, .attachment-preview-modal, .vnc-pane-shell, .kanban-plugin, .mindmap-editor, .timeline-quick-actions'))},l=(i)=>{if(i.ctrlKey||i.metaKey||i.altKey)return;let K0=F_.current;if(!K0)return;let f0=document.activeElement===K0;if(i.key==="Escape"&&!f0&&!w(i.target)){i.preventDefault(),K0.focus();return}if(i.key==="/"&&!f0&&!w(i.target))i.preventDefault(),b$("/"),requestAnimationFrame(()=>{K0.focus(),K0.selectionStart=1,K0.selectionEnd=1,D0("/")})};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[]),g(()=>{let w=()=>{let B_=M$.current?.clientWidth||0;S_((o_)=>o_===B_?o_:B_)};w();let l=M$.current,i=0,K0=()=>{if(i)cancelAnimationFrame(i);i=requestAnimationFrame(()=>{i=0,w()})},f0=null;if(l&&typeof ResizeObserver<"u")f0=new ResizeObserver(()=>K0()),f0.observe(l);if(typeof window<"u")window.addEventListener("resize",K0);return()=>{if(i)cancelAnimationFrame(i);if(f0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",K0)}},[j,E,v_?.agent_name,V$,I?.percent]);let BU=(w)=>{let l=w.target.value;if(c_.current&&w?.isTrusted)l1();if(b_(null),C_(null),O_.kind==="guidance"||O_.kind==="error")h1();if(y0)h0(!1);if(C0(w.target),m9(l,{searchMode:j,showSessionSwitcherButton:V$})){b$(""),requestAnimationFrame(()=>{let i=F_.current;if(!i)return;i.value="",i.selectionStart=0,i.selectionEnd=0,i.focus()}),Q$();return}b$(l)};return g(()=>{requestAnimationFrame(()=>C0())},[s0,X_,j]),g(()=>{if(!j)return;if(c_.current)l1();return},[j,l1]),g(()=>{if(c_.current)l1();h1()},[L0,h1,l1]),g(()=>{return()=>{if(!c_.current)return;try{c_.current.stop()}catch(w){console.debug("[compose] failed to stop speech recognition during cleanup",w)}c_.current=null}},[]),g(()=>{if(!K1)return;p_(Date.now());let w=setInterval(()=>p_(Date.now()),1000);return()=>clearInterval(w)},[K1,i0?.started_at,i0?.startedAt]),g(()=>{if(e_(0),H1?.mode!=="custom"||!Array.isArray(H1.frames)||H1.frames.length<=1)return;let w=typeof H1.intervalMs==="number"&&Number.isFinite(H1.intervalMs)&&H1.intervalMs>0?H1.intervalMs:120,l=setInterval(()=>{e_((i)=>(i+1)%H1.frames.length)},w);return()=>clearInterval(l)},[H1]),g(()=>{if(j)return;r_(s0)},[p6,L0,s0,j]),N`
        <div class="compose-box" data-testid="compose-box">
            ${g_&&N`
                <div class=${`compose-inline-status compose-speech-status compose-speech-status-${O_.kind}`} role="status" aria-live="polite">
                    <div class="compose-inline-status-row">
                        <span class=${l9({pulsing:i4})} aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${O_.title}</span>
                    </div>
                    ${O_.detail&&N`<div class="compose-inline-status-detail">${O_.detail}</div>`}
                </div>
            `}
            ${R0&&!j&&N`
                <${HJ}
                    items=${c}
                    onInjectQueuedFollowup=${eN}
                    onRemoveQueuedFollowup=${e}
                    onMoveQueuedFollowup=${m}
                    onReturnQueuedFollowup=${_U}
                    onOpenFilePill=${b}
                />
            `}
            ${C1.visible&&N`
                <div class="compose-inline-status extension-working" role="status" aria-live="polite">
                    <div class="compose-inline-status-row">
                        ${C1.indicatorText?N`<span class="compose-inline-status-glyph" aria-hidden="true">${C1.indicatorText}</span>`:C1.animateSpinner?N`<div class="compose-inline-status-spinner" aria-hidden="true"></div>`:C1.animateDot?N`<span class=${l9({pulsing:!0})} aria-hidden="true"></span>`:null}
                        <span class="compose-inline-status-title">${C1.title}</span>
                    </div>
                </div>
            `}
            ${i0&&!K1&&N`
                <div
                    class="compose-inline-status"
                    role="status"
                    aria-live="polite"
                    title=${q4||""}
                >
                    <div class="compose-inline-status-row">
                        <div class="compose-inline-status-spinner" aria-hidden="true"></div>
                        <span class="compose-inline-status-title">${R$}</span>
                        ${V4&&N`<span class="compose-inline-status-elapsed">${V4}</span>`}
                    </div>
                    ${q4&&N`<div class="compose-inline-status-detail">${q4}</div>`}
                </div>
            `}
            ${A1&&N`
                <div class="compose-inline-status compose-command-notice" role="status" aria-live="polite">
                    <div class="compose-inline-status-detail compose-command-notice-text" dangerouslySetInnerHTML=${{__html:X1(A1)}}></div>
                </div>
            `}
            <div
                class=${`compose-input-wrapper${A_?" drag-active":""}`}
                onDragEnter=${YU}
                onDragOver=${ZU}
                onDragLeave=${XU}
                onDrop=${LU}
            >
                ${V$&&N`
                    <div
                        ref=${p4}
                        class="compose-session-trigger-group compose-session-trigger-top"
                    >
                        <button
                            type="button"
                            class=${`compose-session-trigger compose-session-trigger-pill${y0?" active":""}`}
                            data-testid="session-switcher"
                            onClick=${ej}
                            title=${v_?.chat_jid||L0}
                            aria-label=${v_?.agent_name?`Manage sessions for @${v_.agent_name}`:"Manage Sessions/Agents"}
                            aria-expanded=${y0?"true":"false"}
                        >
                            <span class="compose-current-agent-label active">${v_?.agent_name?`@${v_.agent_name}`:"Sessions"}</span>
                        </button>
                    </div>
                `}
                <div class="compose-input-main">
                    ${Q4&&N`
                        <div class="compose-file-refs">
                            ${U.map((w)=>{return N`
                                    <${q1}
                                        key=${"msg-"+w}
                                        prefix="compose"
                                        label=${"msg:"+w}
                                        title=${"Message reference: "+w}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>H?.(w)}
                                    />
                                `})}
                            ${V.map((w)=>{let l=w.split("/").pop()||w;return N`
                                    <${q1}
                                        prefix="compose"
                                        label=${l}
                                        title=${w}
                                        onClick=${()=>b?.(w)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>q?.(w)}
                                    />
                                `})}
                            ${Q.map((w)=>{let l=w.split("/").pop()||w;return N`
                                    <${q1}
                                        prefix="compose"
                                        label=${l}
                                        title=${w}
                                        icon="folder"
                                        onClick=${()=>b?.(w)}
                                        removeTitle="Remove folder hint"
                                        onRemove=${()=>F?.(w)}
                                    />
                                `})}
                            ${x0.map((w,l)=>{let i=w?.name||`attachment-${l+1}`;return N`
                                    <${q1}
                                        key=${i+l}
                                        prefix="compose"
                                        label=${i}
                                        title=${i}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>VU(l)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${QU}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    <textarea
                        ref=${F_}
                        data-testid="compose-input"
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?X_:s0}
                        onInput=${BU}
                        onKeyDown=${$U}
                        onKeyUp=${jU}
                        onPaste=${qU}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${s&&f_.length>0&&N`
                        <div class="slash-autocomplete" ref=${E1}>
                            ${f_.map((w,l)=>N`
                                <div
                                    key=${w.chat_jid||w.agent_name}
                                    class=${`slash-item${l===v?" active":""}`}
                                    onMouseDown=${(i)=>{i.preventDefault(),G1(w)}}
                                    onMouseEnter=${()=>n(l)}
                                >
                                    <span class="slash-name">@${w.agent_name}</span>
                                    <span class="slash-desc">${w.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${R_&&E_.length>0&&N`
                        <div class="slash-autocomplete" ref=${I1}>
                            ${E_.map((w,l)=>N`
                                <div
                                    key=${w.name}
                                    class=${`slash-item${l===J_?" active":""}`}
                                    onMouseDown=${(i)=>{i.preventDefault(),t0(w)}}
                                    onMouseEnter=${()=>x_(l)}
                                >
                                    <span class="slash-name">${w.name}</span>
                                    <span class="slash-desc">${w.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${J0&&!j&&N`
                        <div class="compose-model-popup" ref=${v1} tabIndex="-1" onKeyDown=${r5}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${$_&&N`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!$_&&S0.length===0&&N`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!$_&&S0.map((w,l)=>{let i=typeof w?.label==="string"?w.label:"",K0=o9(w?.contextWindow),f0=w?.name||null,B_=Oq(w,I);return N`
                                        <button
                                            key=${i}
                                            type="button"
                                            role="menuitem"
                                            class=${`compose-model-popup-item compose-model-popup-model-item${__===l?" active":""}${E===i?" current-model":""}${B_.blocked?" context-blocked":""}`}
                                            onClick=${()=>{q3(w)}}
                                            disabled=${N0||B_.blocked}
                                            title=${[i,f0,K0,B_.title].filter(Boolean).join(" • ")}
                                        >
                                            <span class="compose-model-popup-model-stack">
                                                <span class="compose-model-popup-model-label">${ZJ(i,w?.contextWindow)}${f0?N` <span class="compose-model-popup-model-subtitle">${f0}</span>`:""}</span>
                                                ${B_.blocked&&N`<span class="compose-model-popup-model-note">${B_.note}</span>`}
                                            </span>
                                        </button>
                                    `})}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{oN()}}
                                    disabled=${N0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${y0&&!j&&N`
                        <div class="compose-model-popup" data-testid="session-popup" ref=${$$} tabIndex="-1" onKeyDown=${r5}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${!S$&&N`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${S$&&K4.map((w,l)=>{let i=Boolean(w.archived_at),K0=w.chat_jid===(w.root_chat_jid||w.chat_jid),f0=!K0&&!w.is_active&&!i&&typeof Y_==="function",B_=i&&r6,o_=L8(w,{currentChatJid:L0});return N`
                                        <div key=${w.chat_jid} class=${`compose-model-popup-item-row${i?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item session-item${i?" archived":""}${w0===l?" active":""}`}
                                                data-testid="session-item"
                                                onClick=${()=>{if(i){$G(w.chat_jid);return}_G(w.chat_jid)}}
                                                disabled=${i?!u$:!g$}
                                                title=${i?`Restore archived ${`@${w.agent_name}`}`:`Switch to ${`@${w.agent_name}`}`}
                                            >
                                                <span style=${aA(w)?"font-weight:700":""}>${o_}</span>
                                            </button>
                                            <button
                                                type="button"
                                                class="compose-model-popup-item-popout"
                                                title=${`Open @${w.agent_name} in new window`}
                                                aria-label=${`Open @${w.agent_name} in new window`}
                                                onClick=${(h_)=>{h_.stopPropagation(),h0(!1);let R1=new URL(window.location.href);R1.searchParams.set("chat_jid",w.chat_jid),R1.searchParams.set("chat_only","1");let y1=document.createElement("a");y1.href=R1.toString(),y1.target="_blank",y1.rel="noopener",y1.style.display="none",document.body.appendChild(y1),y1.click(),y1.remove()}}
                                            >
                                                <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M6 2h8v8"/>
                                                    <path d="M14 2 7 9"/>
                                                    <path d="M12 9v5H2V4h5"/>
                                                </svg>
                                            </button>
                                            ${(f0||B_)&&N`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title=${B_?K0?"Permanently delete this archived session":"Permanently delete this archived branch":"Delete this branch"}
                                                    aria-label=${B_?K0?`Permanently delete archived session @${w.agent_name}`:`Permanently delete archived branch @${w.agent_name}`:`Delete @${w.agent_name}`}
                                                    onClick=${(h_)=>{if(h_.stopPropagation(),h0(!1),B_){l0?.(w.chat_jid);return}Y_(w.chat_jid)}}
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
                            ${(L$||B4||Z$||q$)&&N`
                                <div class="compose-model-popup-actions">
                                    ${L$&&N`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${d_.findIndex((w)=>w.key==="action:new")===w0?" active":""}`}
                                            onClick=${()=>{GG()}}
                                            title="Create a new branch from this chat"
                                        >
                                            New branch
                                        </button>
                                    `}
                                    ${B4&&N`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${d_.findIndex((w)=>w.key==="action:new-root")===w0?" active":""}`}
                                            onClick=${()=>{YG()}}
                                            title="Create a clean root session such as web:ops"
                                        >
                                            New root…
                                        </button>
                                    `}
                                    ${P1?.chat_jid&&N`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${d_.findIndex((w)=>w.key==="action:rollup")===w0?" active":""}`}
                                            onClick=${()=>{XG()}}
                                            title=${F4?`Merge this branch into ${P1.agent_name?`@${P1.agent_name}`:P1.chat_jid}`:"This branch cannot be merged while active or while it has children"}
                                            disabled=${!F4}
                                        >
                                            Merge current w/ parent
                                        </button>
                                    `}
                                    ${Z$&&N`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${d_.findIndex((w)=>w.key==="action:rename")===w0?" active":""}`}
                                            onClick=${(w)=>{jG(w)}}
                                            title="Rename the current session"
                                            disabled=${_5}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${q$&&N`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${d_.findIndex((w)=>w.key==="action:delete")===w0?" active":""}`}
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
                <div class="compose-footer" ref=${M$}>
                    ${Y$.show&&N`
                        <span class="compose-connection-status connection-status ${Y$.statusClass}" title=${f$}>
                            ${n_}
                        </span>
                    `}
                    ${Q0&&N`
                    <div class="compose-meta-row">
                        ${h5&&N`
                            <div class="compose-model-meta">
                                <button
                                    ref=${M1}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${U0}
                                    aria-label="Open model picker"
                                    onClick=${sN}
                                    disabled=${N0}
                                >
                                    ${N0?"Switching…":l5}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!N0&&o&&N`
                                        <span class="compose-model-usage-hint" title=${U0}>
                                            ${o}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&I&&I.percent!=null&&N`
                            <${YJ}
                                usage=${I}
                                onCompact=${aN}
                                compactionLabel=${K1?V4||"0:00":""}
                                compactionTitle=${K1?R$||"Smart compaction":""}
                            />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${j&&N`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${G}
                                onChange=${(w)=>X?.(w.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                        <label class="compose-search-filter-wrap" title="Only show messages with images">
                            <input type="checkbox" checked=${z0} onChange=${()=>L_((w)=>!w)} />
                            <span class="compose-search-filter-label">Images</span>
                        </label>
                        <label class="compose-search-filter-wrap" title="Only show messages with attachments">
                            <input type="checkbox" checked=${o0} onChange=${()=>H_((w)=>!w)} />
                            <span class="compose-search-filter-label">Attachments</span>
                        </label>
                        <button
                            class=${`compose-search-match-toggle ${E0==="and"?"active":""}`}
                            onClick=${()=>{let w=E0==="or"?"and":"or";g0(w),fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:w})}).catch((l)=>{})}}
                            title=${E0==="or"?"Any keyword (OR) — click for all keywords (AND)":"All keywords (AND) — click for any keyword (OR)"}
                            type="button"
                        >
                            ${E0==="or"?"OR":"AND"}
                        </button>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?L:Z}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?N`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:N`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${v5&&!j&&N`
                        <button
                            class="icon-btn location-btn"
                            onClick=${KU}
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
                    ${x1&&N`
                        <button
                            class=${`icon-btn voice-input-btn${C$?" active":""}${k_.mode==="fallback"?" fallback":""}`}
                            onClick=${dN}
                            onPointerDown=${nN}
                            onPointerUp=${L3}
                            onPointerCancel=${L3}
                            onPointerLeave=${L3}
                            title=${s4}
                            aria-label=${s4}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z" />
                                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                                <path d="M12 19v3" />
                            </svg>
                        </button>
                    `}
                    ${a4&&!j&&N`
                        <button
                            class=${`icon-btn notification-btn${t4?" active":""}`}
                            onClick=${T}
                            title=${c5}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&N`
                        ${P&&R&&N`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${R}
                                title=${`Attach open file: ${P}`}
                                type="button"
                                disabled=${V.includes(P)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${GU} />
                        </label>
                    `}
                    ${!j&&N`
                        <div class="compose-send-stack">
                                <button 
                                    class=${e4.className}
                                    data-testid="send-button"
                                    type="button"
                                    onClick=${()=>{$5()}}
                                    disabled=${e4.disabled}
                                    title=${e4.title}
                                    aria-label=${e4.ariaLabel}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                                </button>
                                ${X$&&N`
                                    <button 
                                        class=${X$.className}
                                        data-testid="stop-button"
                                        type="button"
                                        onClick=${()=>{if(jJ(X$.mode))$5("/abort","steer",{clearAfterSubmit:!1,includeMedia:!1,includeFileRefs:!1,includeFolderRefs:!1,includeMessageRefs:!1,recordHistory:!1})}}
                                        disabled=${X$.disabled}
                                        title=${X$.title}
                                        aria-label=${X$.ariaLabel}
                                    >
                                        ${X$.mode==="compacting"?N`
                                                <span class="compose-submit-spinner" aria-hidden="true">
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                                        <circle class="compose-submit-spinner-ring" cx="12" cy="12" r="10.5" stroke-width="2.25" stroke-linecap="round"></circle>
                                                        <rect class="compose-submit-spinner-stop" x="6" y="6" width="12" height="12" rx="0" fill="currentColor"></rect>
                                                    </svg>
                                                </span>
                                            `:N`<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16" rx="2.5"/></svg>`}
                                    </button>
                                `}
                        </div>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}k0();function yq({kind:_="hidden",onSetupProvider:$,onDismiss:j}){if(_==="hidden")return null;let G=_==="provider-missing",Y=G?"Instance needs setup":"Instance is configured",X=G?"This instance is not yet configured. Open Settings and set up AI providers/models to start sending requests.":"This instance looks configured. Review or update provider and model settings in Settings.";return N`
    <section class=${`oobe-panel oobe-panel-${_}`} aria-label="Getting started">
      <div class="oobe-panel-copy">
        <div class="oobe-panel-eyebrow">Getting started</div>
        <h2 class="oobe-panel-title">${Y}</h2>
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
  `}k0();function wq(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function Iq(_){return String(_||"").trim()||"web:default"}function xq(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function Cq(_){if(!_)return!1;return _.status!=="running"}function Pq(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function Rq({session:_,onClose:$,onInject:j,onRetry:G}){let Y=u(null),X=u(null),Z=_?.thinking?X6(_.thinking):"",L=_?.answer?X1(_.answer,null):"";if(g(()=>{if(Y.current&&Z)W$(Y.current).catch((H)=>{console.debug("[btw-panel] Mermaid rendering failed for BTW thinking content.",H)})},[Z]),g(()=>{if(X.current&&L)W$(X.current).catch((H)=>{console.debug("[btw-panel] Mermaid rendering failed for BTW answer content.",H)})},[L]),!_)return null;let V=_.status==="running",q=Boolean(String(_.answer||"").trim()),K=Boolean(String(_.thinking||"").trim()),Q=xq(_),F=Cq(_),B=!V&&q,U=V?"Thinking…":_.status==="error"?"Error":"Done";return N`
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

            ${_.question&&N`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&N`<div class="btw-block btw-error">${_.error}</div>`}
            ${K&&N`
                <details class="btw-block btw-thinking" open=${V?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${Y}
                        dangerouslySetInnerHTML=${{__html:Z}}
                    ></div>
                </details>
            `}
            ${Q&&N`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${X}
                        dangerouslySetInnerHTML=${{__html:L}}
                    ></div>
                </div>
            `}

            ${F&&N`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&N`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>G?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!B}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}k0();function i9(_,$){try{if(_)_.name=$;return!0}catch(j){return!1}}function s9(_,$){try{return _?.contentWindow?.postMessage?.($,"*"),!0}catch(j){return!1}}function WJ(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg"&&j!=="session_tree")return null;if(j==="html"){let Y=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Y?{kind:j,html:Y}:null}if(j==="svg"){let Y=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Y?{kind:j,svg:Y}:null}let G=$.tree&&typeof $.tree==="object"?$.tree:_?.tree&&typeof _.tree==="object"?_.tree:null;return{kind:j,tree:G}}function OJ(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",G=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Y=$.tree&&typeof $.tree==="object"?$.tree:_?.tree&&typeof _.tree==="object"?_.tree:null,X=$.kind||_?.kind||null,Z=X==="session_tree"?"session_tree":X==="svg"||j?"svg":"html";if(Z==="session_tree")return{kind:Z,tree:Y};if(Z==="svg")return j?{kind:Z,svg:j}:{kind:Z};return G?{kind:Z,html:G}:{kind:Z}}function _4(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function Z_(_){return typeof _==="string"&&_.trim()?_.trim():null}function Sq(_,$=!1){let G=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Y)=>typeof Y==="string").map((Y)=>Y.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(G))}var gq="__PICLAW_WIDGET_HOST__:";function fq(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function a9(_,$){if(!_||_.type!=="generated_widget")return null;let j=WJ(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:Sq(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function uq(_){if(!_||typeof _!=="object")return null;let $=OJ(_),j=Z_(_?.widget_id)||Z_(_?.widgetId)||Z_(_?.tool_call_id)||Z_(_?.toolCallId),G=Z_(_?.tool_call_id)||Z_(_?.toolCallId),Y=Z_(_?.turn_id)||Z_(_?.turnId),X=Z_(_?.title)||Z_(_?.name)||"Generated widget",Z=Z_(_?.subtitle)||"",L=Z_(_?.description)||Z,V=Z_(_?.status),q=V==="loading"||V==="streaming"||V==="final"||V==="error"?V:"streaming";return{title:X,subtitle:Z,description:L,originPostId:_4(_?.origin_post_id)??_4(_?.originPostId),originChatJid:Z_(_?.origin_chat_jid)||Z_(_?.originChatJid)||Z_(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:Sq(_?.capabilities,!0),source:"live",status:q,turnId:Y,toolCallId:G,width:_4(_?.width),height:_4(_?.height),error:Z_(_?.error)}}function bq(_){return a9(_,null)!==null}function N1(_){let $=Z_(_?.toolCallId)||Z_(_?.tool_call_id);if($)return $;let j=Z_(_?.widgetId)||Z_(_?.widget_id);if(j)return j;let G=_4(_?.originPostId)??_4(_?.origin_post_id);if(G!==null)return`post:${G}`;return null}function vq(_){let j=(_?.artifact||{}).kind||_?.kind||null,Y=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((X)=>typeof X==="string"&&X.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Y)}function mq(_){return vq(_)?"allow-downloads allow-scripts allow-same-origin allow-forms":"allow-downloads"}function Q8(_){return{title:Z_(_?.title)||"Generated widget",widgetId:Z_(_?.widgetId)||Z_(_?.widget_id),toolCallId:Z_(_?.toolCallId)||Z_(_?.tool_call_id),turnId:Z_(_?.turnId)||Z_(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:Z_(_?.status)||"final"}}function K8(_){return{...Q8(_),subtitle:Z_(_?.subtitle)||"",description:Z_(_?.description)||"",error:Z_(_?.error)||null,width:_4(_?.width),height:_4(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function B8(_){return`${gq}${JSON.stringify(K8(_))}`}function cq(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=Z_(_.text)||Z_(_.content)||Z_(_.message)||Z_(_.prompt)||Z_(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let G=Z_(j.text)||Z_(j.content)||Z_(j.message)||Z_(j.prompt)||Z_(j.value);if(G)return G}return null}function hq(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function lq(_){let $=Z_(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return Z_(_?.error)||"Widget failed to load.";if((_?.artifact?.kind||_?.kind)==="session_tree")return"Session tree widget is unavailable.";return"Widget artifact is missing or unsupported."}function zJ(_){let $=Q8(_);return`<script>
(function () {
  const meta = ${fq($)};
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

  const windowNamePrefix = ${fq(gq)};
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
</script>`}function pq(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,G=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Y=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",X=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",Z=j==="svg"?Y:G;if(!Z)return"";let L=vq(_),V=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src 'self' data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",L?"script-src 'unsafe-inline' 'self'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),q=j==="svg"?`<div class="widget-svg-shell">${Z}</div>`:Z,K=L?zJ(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${V}" />
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
${K}
</head>
<body>${q}</body>
</html>`}k0();function AJ(_){let $=new Map,j=[];for(let Z of _||[])$.set(Z.id,{...Z,children:[],depth:0});for(let Z of _||[]){let L=$.get(Z.id);if(!L)continue;let V=Z.parentId?$.get(Z.parentId):null;if(V)V.children.push(L);else j.push(L)}let G=new Set;for(let[,Z]of $){if(Z.role!=="assistant"||!Z.toolName)continue;if(Z.children.length!==1)continue;let L=Z.children[0];if(L.role!=="toolResult")continue;Z.resultDetail=L.detail||null,Z.resultLength=L.contentLength||0,Z.resultId=L.id,Z.merged=!0,Z.children=L.children;for(let V of Z.children)V.parentId=Z.id;G.add(L.id)}let Y=j.filter((Z)=>!G.has(Z.id)),X=[];for(let Z=Y.length-1;Z>=0;Z--)Y[Z].depth=0,X.push(Y[Z]);while(X.length>0){let Z=X.pop(),L=Z.children.length>1;for(let V=Z.children.length-1;V>=0;V--)Z.children[V].depth=L?Z.depth+1:Z.depth,X.push(Z.children[V])}return Y}function JJ(_){let $=[],j=[];for(let G=_.length-1;G>=0;G--)j.push(_[G]);while(j.length>0){let G=j.pop();$.push(G);for(let Y=G.children.length-1;Y>=0;Y--)j.push(G.children[Y])}return $}function rq(_){if(!_||_<=0)return"";if(_<1000)return`${_}`;if(_<1e6)return`${(_/1000).toFixed(1)}k`;return`${(_/1e6).toFixed(1)}M`}function y5(_){if(!_||_<=0)return"";if(_<1000)return`${_} chars`;if(_<1e6)return`${(_/1000).toFixed(1)}k chars`;return`${(_/1e6).toFixed(1)}M chars`}function kJ(_){let $=_.type;if($==="model_change")return{tag:"model",tagClass:"system",text:`${_.preview?.replace("[model ","").replace("]","")||""}`};if($==="thinking_level_change")return{tag:"thinking",tagClass:"system",text:_.preview?.replace("[thinking ","").replace("]","")||""};if($==="compaction")return{tag:"compaction",tagClass:"system",text:_.preview?.replace("[compaction: ","").replace("]","")||""};if($==="label")return{tag:"label",tagClass:"system",text:_.preview?.replace("[label ","").replace("]","")||""};if($==="session_info")return{tag:"session",tagClass:"system",text:_.preview?.replace("[session name ","").replace("]","")||""};if($==="branch_summary")return{tag:"summary",tagClass:"system",text:_.preview||""};if($!=="message")return{tag:$||"?",tagClass:"system",text:_.preview||""};let j=_.role||"message";if(_.merged&&_.toolName){let Y=(_.toolInput||"").split(`
`)[0],X=Y.length>120?Y.slice(0,119)+"…":Y;return{tag:_.toolName,tagClass:"tool",text:X||""}}if(j==="assistant"&&_.toolName){let Y=(_.toolInput||"").split(`
`)[0],X=Y.length>120?Y.slice(0,119)+"…":Y;return{tag:_.toolName,tagClass:"tool",text:X||"…"}}if(j==="toolResult"){let Y=(_.detail||"").split(`
`)[0],X=Y.length>120?Y.slice(0,119)+"…":Y;return{tag:`→ ${_.toolName||"result"}`,tagClass:"result",text:X}}if(j==="user"){let X=(_.previewText||_.detail||_.preview||"").replace(/^user:\s*"?/,"").replace(/"?\s*$/,"").split(`
`)[0];return{tag:"user",tagClass:"user",text:X.length>120?X.slice(0,119)+"…":X}}if(j==="assistant"){let X=(_.detail||_.preview||"").replace(/^assistant:\s*"?/,"").replace(/"?\s*$/,"").split(`
`)[0];return{tag:"assistant",tagClass:"assistant",text:X.length>120?X.slice(0,119)+"…":X}}return{tag:j,tagClass:"other",text:_.preview||""}}function MJ(_,$=!1){let j=typeof _==="string"?_.trim():"";if(!j)return null;return{text:$?`/tree ${j} --summarize`:`/tree ${j}`,navigateTargetId:j,summarize:Boolean($)}}function nq(_){let $=typeof _==="string"?_.trim():"";if(!$.startsWith("/tree"))return null;let j=$.split(/\s+/).filter(Boolean);if(j[0]!=="/tree")return null;let G=null,Y=!1;for(let X=1;X<j.length;X++){let Z=j[X];if(Z==="--summarize"){Y=!0;continue}if(!G&&!Z.startsWith("--"))G=Z}return G?{targetId:G,summarize:Y}:null}function TJ(_,$,j,G){let Y=Array.isArray(_)?_:[];if(Y.length===0)return null;let X=(L)=>typeof L==="string"&&Y.some((V)=>V?.id===L);if(X($))return $;if(X(j))return j;if(X(G))return G;let Z=Y.find((L)=>L?.active);if(Z?.id)return Z.id;return Y[0]?.id||null}function yJ(_){if(!_||typeof _!=="object")return null;let $=typeof _.type==="string"?_.type:"",j=typeof _.preview==="string"?_.preview.trim():"",G=typeof _.error==="string"?_.error.trim():"",Y=nq(j),X=j||"tree command";if($==="submit_pending")return{tone:"pending",text:Y?`Sending ${X}`:"Sending tree command…",refreshDelays:[]};if($==="submit_sent")return{tone:"info",text:Y?`Running ${X}`:"Tree command sent.",refreshDelays:Y?[500,1500,3500,8000]:[]};if($==="submit_queued")return{tone:"info",text:Y?`Queued ${X}`:"Tree command queued.",refreshDelays:Y?[1200,3200,7000,12000]:[]};if($==="submit_failed")return{tone:"error",text:G?`Tree command failed: ${G}`:"Tree command failed.",refreshDelays:[]};if($==="refresh_building")return{tone:"pending",text:"Refreshing widget…",refreshDelays:[]};if($==="refresh_failed")return{tone:"error",text:G?`Refresh failed: ${G}`:"Refresh failed.",refreshDelays:[]};if($==="refresh_dashboard"||$==="refresh_ack")return{tone:"success",text:"Widget refreshed.",refreshDelays:[]};return null}function dq({widget:_,onWidgetEvent:$}){let j=_?.artifact?.tree&&typeof _.artifact.tree==="object"?_.artifact.tree:null,G=typeof _?.originChatJid==="string"&&_.originChatJid.trim()?_.originChatJid.trim():null,Y=_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null,X=Y?.lastHostUpdate&&typeof Y.lastHostUpdate==="object"?Y.lastHostUpdate:null,[Z,L]=C(()=>({loading:!j,error:null,data:j})),[V,q]=C(()=>j?.leafId||null),[K,Q]=C(""),F=u(null),B=u(null),U=u(j?.leafId||null),H=u(null),D=u(""),E=async()=>{L((k)=>({...k,loading:!0,error:null}));try{let k=G?`?chat_jid=${encodeURIComponent(G)}`:"",W=await fetch(`/agent/session-tree${k}`,{method:"GET",credentials:"same-origin",headers:{Accept:"application/json"}}),T=await W.json().catch(()=>({}));if(!W.ok)throw Error(T?.error||`HTTP ${W.status}`);L({loading:!1,error:null,data:T})}catch(k){L((W)=>({loading:!1,error:k?.message||"Failed to load tree.",data:W?.data||j||null}))}};H.current=E,g(()=>{E()},[G]);let M=Z0(()=>{let k=Z.data;if(!k||!Array.isArray(k.nodes)||k.nodes.length===0)return[];return JJ(k.flat?AJ(k.nodes):k.nodes)},[Z.data]);g(()=>{let k=TJ(M,V,U.current,Z.data?.leafId||null);if(k!==V)q(k);if(U.current&&Z.data?.leafId===U.current)U.current=null},[M,V,Z.data?.leafId]);let z=Z0(()=>{let k=(K||"").trim().toLowerCase();if(!k)return M;return M.filter((W)=>{return[W.preview,W.toolInput,W.toolInputFull,W.detail,W.toolName,W.role,W.id,W.resultDetail,W.type,W.label].some((y)=>typeof y==="string"&&y.toLowerCase().includes(k))})},[M,K]),O=Z0(()=>z.find((k)=>k.id===V)||null,[z,V]),x=Z0(()=>yJ(X),[X?.type,X?.preview,X?.error,X?.submittedAt]);g(()=>{if(B.current)B.current.scrollIntoView({block:"center",behavior:"auto"})},[V,Z.data?.leafId,z.length]),g(()=>{let k=nq(X?.preview);if(k?.targetId)U.current=k.targetId;let W=x?.refreshDelays||[];if(!W.length)return;let T=[G||"",X?.type||"",X?.submittedAt||"",X?.preview||""].join("|");if(D.current===T)return;D.current=T;let y=W.map((J)=>setTimeout(()=>H.current?.(),J));return()=>y.forEach((J)=>clearTimeout(J))},[G,X?.type,X?.submittedAt,X?.preview,x?.refreshDelays]);let I=(k=!1)=>{let W=O?.id,T=MJ(W,k);if(!T)return;U.current=T.navigateTargetId,$?.({kind:"widget.submit",payload:T},_)},A=x?.tone||"info";return N`
        <div class="session-tree-widget">
            <div class="session-tree-toolbar">
                <div class="session-tree-toolbar-left">
                    <button class="session-tree-btn" type="button" onClick=${()=>E()} disabled=${Z.loading}>${Z.loading?"Loading…":"Refresh"}</button>
                    <input ref=${F}
                        class="st-search-input" type="text" placeholder="Filter\u2026"
                        value=${K}
                        onInput=${(k)=>Q(k.currentTarget.value)}
                        onKeyDown=${(k)=>{if(k.key==="Escape")Q(""),k.currentTarget.blur()}}
                    />
                    ${K&&N`<span class="session-tree-meta">${z.length} match${z.length!==1?"es":""}</span>`}
                    ${Z.error&&N`<span class="session-tree-error-inline">${Z.error}</span>`}
                </div>
                <div class="session-tree-toolbar-right">
                    ${x?.text&&N`<span class=${`session-tree-host-update ${A}`}>${x.text}</span>`}
                    ${Z.data?.capped&&N`<span class="session-tree-meta">Showing ${Z.data?.nodes?.length||0} of ${Z.data?.total||0}</span>`}
                    ${G&&N`<span class="session-tree-meta">${G}</span>`}
                </div>
            </div>

            <div class="session-tree-content">
                <div class="session-tree-list" role="tree" aria-label="Session tree">
                    ${Z.loading&&z.length===0&&!K&&N`<div class="session-tree-empty">Loading session tree\u2026</div>`}
                    ${!Z.loading&&z.length===0&&!K&&N`<div class="session-tree-empty">Session tree is empty.</div>`}
                    ${!Z.loading&&z.length===0&&K&&N`<div class="session-tree-empty">No entries match \u201c${K}\u201d</div>`}
                    ${z.map((k)=>{let W=V===k.id,T=`st-row${k.active?" active":""}${W?" selected":""}`,y=(k.children||[]).length>1,J=kJ(k);return N`
                            <button key=${k.id} ref=${k.active||W?B:null}
                                class=${T} type="button" role="treeitem" aria-selected=${W}
                                onClick=${()=>q(k.id)}>
                                <span class="st-indent" style=${`width:${(k.depth||0)*16+6}px`}></span>
                                <span class=${`st-dot${k.active?" active":y?" branch":""}`}></span>
                                <span class=${`st-tag ${J.tagClass}`}>${J.tag}</span>
                                <span class="st-text">${J.text}</span>
                                ${k.merged&&k.resultLength>0&&N`<span class="st-size">${rq(k.resultLength)}</span>`}
                                ${!k.merged&&k.contentLength>3000&&N`<span class="st-size">${rq(k.contentLength)}</span>`}
                                ${k.hasThinking&&N`<span class="st-badge thinking">\u{1F4AD}</span>`}
                                ${k.label&&N`<span class="st-label">${k.label}</span>`}
                                ${k.active&&N`<span class="st-active">\u25C0</span>`}
                            </button>
                        `})}
                </div>

                <aside class="session-tree-sidebar">
                    ${O?N`
                        <div class="st-side-section">
                            <div class="st-side-label">Entry</div>
                            <div class="st-side-mono">${O.id}${O.resultId?` → ${O.resultId}`:""}</div>
                        </div>
                        <div class="st-side-section">
                            <div class="st-side-label">Type</div>
                            <div class="st-side-value">${O.role||O.type||"entry"}${O.toolName?` → ${O.toolName}`:""}${O.merged?" (merged)":""}</div>
                        </div>
                        ${O.toolInputFull&&N`
                            <div class="st-side-section">
                                <div class="st-side-label">${O.toolName==="bash"?"Command":"Input"}</div>
                                <pre class="st-side-code">${O.toolInputFull}</pre>
                            </div>
                        `}
                        ${O.resultDetail&&N`
                            <div class="st-side-section">
                                <div class="st-side-label">Result${O.resultLength?` (${y5(O.resultLength)})`:""}</div>
                                <pre class="st-side-code">${O.resultDetail}</pre>
                            </div>
                        `}
                        ${O.detail&&!O.toolInput&&N`
                            <div class="st-side-section">
                                <div class="st-side-label">${O.role==="toolResult"?"Output":"Content"}${O.contentLength?` (${y5(O.contentLength)})`:""}</div>
                                <pre class="st-side-code">${O.detail}</pre>
                            </div>
                        `}
                        ${O.rawDetail&&N`
                            <div class="st-side-section">
                                <div class="st-side-label">Raw prompt${O.rawContentLength?` (${y5(O.rawContentLength)})`:""}</div>
                                <pre class="st-side-code">${O.rawDetail}</pre>
                            </div>
                        `}
                        ${O.timestamp&&N`
                            <div class="st-side-section">
                                <div class="st-side-label">Time</div>
                                <div class="st-side-value">${new Date(O.timestamp).toLocaleString()}</div>
                            </div>
                        `}
                        ${(O.contentLength>0||O.hasThinking)&&N`
                            <div class="st-side-section">
                                <div class="st-side-label">Size</div>
                                <div class="st-side-badges">
                                    ${O.contentLength>0&&N`<span class="st-pill">${y5(O.contentLength)} content</span>`}
                                    ${O.hasThinking&&N`<span class="st-pill thinking">${y5(O.thinkingLength)} thinking</span>`}
                                    ${O.merged&&O.resultLength>0&&N`<span class="st-pill">${y5(O.resultLength)} result</span>`}
                                </div>
                            </div>
                        `}
                        <div class="st-side-actions">
                            <button class="session-tree-btn primary" type="button" onClick=${()=>I(!1)}>Navigate here</button>
                            <button class="session-tree-btn" type="button" onClick=${()=>I(!0)}>Navigate + summarize</button>
                        </div>
                    `:N`<div class="session-tree-empty side">Select an entry to inspect.</div>`}
                </aside>
            </div>
        </div>
    `}function wJ(_=!1){return`floating-widget-backdrop${_?" maximized":""}`}function IJ(_=!1){return`floating-widget-pane${_?" maximized":""}`}function oq({widget:_,onClose:$,onWidgetEvent:j}){let G=u(null),Y=u(!1),[X,Z]=C(!1),L=N1(_),V=Z0(()=>pq(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(g(()=>{Z(!1)},[L]),g(()=>{if(!_)return;let O=(x)=>{if(x.key!=="Escape")return;if(X){Z(!1);return}$?.()};return document.addEventListener("keydown",O),()=>document.removeEventListener("keydown",O)},[X,_,$]),g(()=>{Y.current=!1},[V]),g(()=>{if(!_)return;let O=G.current;if(!O)return;let x=(T)=>{let y=B8(_),J=T==="widget.init"?Q8(_):K8(_);i9(O,y),s9(O,{__piclawGeneratedWidgetHost:!0,type:T,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:J})},I=()=>{x("widget.init"),x("widget.update")},A=()=>{Y.current=!0,I()};O.addEventListener("load",A);let W=[0,40,120,300,800].map((T)=>setTimeout(I,T));return()=>{O.removeEventListener("load",A),W.forEach((T)=>clearTimeout(T))}},[V,_?.widgetId,_?.toolCallId,_?.turnId]),g(()=>{if(!_)return;let O=G.current;if(!O?.contentWindow)return;let x=B8(_),I=K8(_);i9(O,x),s9(O,{__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:I});return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),g(()=>{if(!_)return;let O=(x)=>{let I=x?.data;if(!I||I.__piclawGeneratedWidget!==!0)return;let A=G.current,k=N1(_),W=N1({widgetId:I.widgetId,toolCallId:I.toolCallId});if(W&&k&&W!==k)return;if(!W&&A?.contentWindow&&x.source!==A.contentWindow)return;j?.(I,_)};return window.addEventListener("message",O),()=>window.removeEventListener("message",O)},[_,j]),!_)return null;let K=(_?.artifact||{}).kind||_?.kind||"html",Q=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",F=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",B=_?.source==="live"?"live":"timeline",U=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",H=B==="live"?`Live widget • ${U.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",D=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",E=!V,M=lq(_),z=mq(_);return N`
        <div class=${wJ(X)} onClick=${()=>$?.()}>
            <section
                class=${IJ(X)}
                aria-label=${Q}
                onClick=${(O)=>O.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${H} • ${K.toUpperCase()}</div>
                        <div class="floating-widget-title">${Q}</div>
                        ${(F||D)&&N`
                            <div class="floating-widget-subtitle">${F||D}</div>
                        `}
                    </div>
                    <div class="floating-widget-header-actions">
                        <button
                            class="floating-widget-action floating-widget-maximize"
                            type="button"
                            onClick=${()=>Z((O)=>!O)}
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
                    ${K==="session_tree"?N`<${dq} widget=${_} onWidgetEvent=${j} />`:E?N`<div class="floating-widget-empty">${M}</div>`:N`
                                <iframe
                                    ref=${G}
                                    class="floating-widget-frame"
                                    title=${Q}
                                    name=${B8(_)}
                                    sandbox=${z}
                                    allow="microphone; clipboard-read; clipboard-write"
                                    referrerpolicy="no-referrer"
                                    srcdoc=${V}
                                ></iframe>
                            `}
                </div>
            </section>
        </div>
    `}k0();h2();T_();A5();var xJ=new Set,iq=new Set,t9=new Set,g4=new Map,sq=!1,F8=null;function CJ(_=typeof window<"u"?window:null){let $=typeof _?.__piclawCurrentChatJid==="string"?_.__piclawCurrentChatJid.trim():"";if($)return $;try{let j=_?.location?.href||"http://localhost/",G=new URL(j).searchParams.get("chat_jid")?.trim()||"";if(G)return G}catch(j){}return"web:default"}function PJ(_,$){let j=typeof _==="string"?_.trim():"";if(!j)return null;try{return new URL(j,$).href}catch{return null}}function aq(_){if(!_||typeof _.id!=="string"||!_.id.trim())return!1;return q_.register(_),xJ.add(_.id),!0}function RJ(_){return aq(_)}function fJ(_){if(!_||typeof _.id!=="string"||!_.id.trim())return()=>{};return i$(_),iq.add(_.id),Q9(),()=>{cZ(_.id),iq.delete(_.id),Q9()}}function SJ(_){if(typeof _!=="function")return()=>{};return t9.add(_),()=>{t9.delete(_)}}function tq(_,$={}){let j=typeof _==="string"?_.trim():"";if(!j)return null;for(let G of[...t9].reverse())try{let Y=G(j,$);if(typeof Y==="string"&&Y.trim())return Y.trim()}catch(Y){console.warn("[addon-web] standalone tab URL resolver failed:",Y)}return null}function gJ(_){if(!_||typeof _.id!=="string"||!_.id.trim()||typeof _.match!=="function"||typeof _.buildFrameUrl!=="function")return()=>{};return g4.set(_.id,_),()=>{if(g4.get(_.id)===_)g4.delete(_.id)}}function N8(_,$){for(let j of Array.from(g4.values()).reverse())try{if(j.match(_,$))return j}catch(G){console.warn("[addon-web] attachment preview matcher failed:",G)}return null}function eq(_){let $=typeof _==="string"?_.trim():"";if(!$)return null;return g4.get($)?.label||null}function _V(_){let $=typeof _==="string"?_.trim():"";if(!$)return null;return g4.get($)?.note||null}function $V(_,$,j){let G=typeof _==="string"?_.trim():"";if(!G)return null;let Y=g4.get(G);if(!Y)return null;try{return Y.buildFrameUrl($,j)||null}catch(X){return console.warn("[addon-web] attachment preview URL builder failed:",X),null}}function uJ(_=typeof window<"u"?window:null){return{registerPane:RJ,registerWorkspacePane:aq,registerSettingsPane:fJ,registerStandaloneTabUrlResolver:SJ,registerAttachmentPreview:gJ,getCurrentChatJid:()=>CJ(_)}}function e9(_=typeof window<"u"?window:null){let $=uJ(_);if(!_||sq)return $;return _.__piclaw_web=$,_.__piclaw_registerPane=$.registerPane,_.__piclaw_registerWorkspacePane=$.registerWorkspacePane,_.__piclaw_registerSettingsPane=$.registerSettingsPane,_.__piclaw_registerStandaloneTabUrlResolver=$.registerStandaloneTabUrlResolver,_.__piclaw_registerAttachmentPreview=$.registerAttachmentPreview,_.__piclawSettingsPaneRegistry={registerSettingsPane:$.registerSettingsPane,notifySettingsPanesChanged:()=>_?.dispatchEvent?.(new CustomEvent("piclaw:settings-panes-changed"))},sq=!0,$}async function jV(_=typeof window<"u"?window:null){if(!_)return;if(F8)return F8;return F8=(async()=>{e9(_);try{let $=await fetch("/agent/addons/web-entries",{credentials:"same-origin"});if(!$.ok)return;let j=await $.json().catch(()=>null),G=Array.isArray(j?.entries)?j.entries:[],Y=_.location?.origin||"http://localhost";for(let X of G){let Z=PJ(X?.url,Y);if(!Z)continue;try{await import(Z)}catch(L){console.warn("[addon-web] Failed to load installed addon web entry:",Z,L)}}}catch($){console.warn("[addon-web] Failed to fetch installed addon web entries:",$)}})(),F8}var bJ=["\t",",",";","|"];function GV(_){return typeof _==="string"?_.trim().toLowerCase():""}function YV(_){return typeof _==="string"?_.split(";")[0]?.trim().toLowerCase()||"":""}function XV(_,$){let j=YV(_),G=GV($);return j==="text/csv"||j==="application/csv"||j==="text/tab-separated-values"||j==="text/tsv"||G.endsWith(".csv")||G.endsWith(".tsv")||G.endsWith(".tab")}function ZV(_,$){let j=YV(_),G=GV($);if(j==="text/tab-separated-values"||j==="text/tsv"||G.endsWith(".tsv")||G.endsWith(".tab"))return"\t";if(j==="text/csv"||j==="application/csv"||G.endsWith(".csv"))return",";return null}function vJ(_,$){let j=0,G=!1;for(let Y=0;Y<_.length;Y+=1){let X=_[Y];if(X==='"')if(G&&_[Y+1]==='"')Y+=1;else G=!G;else if(!G&&X===$)j+=1}return j}function mJ(_){let $=_.split(/\r?\n/).map((G)=>G.trimEnd()).filter((G)=>G.trim().length>0).slice(0,10),j={delimiter:"\t",score:-1};for(let G of bJ){let Y=$.map((V)=>vJ(V,G)).filter((V)=>V>0);if(!Y.length)continue;let X=Y.reduce((V,q)=>V+q,0)/Y.length,Z=Y.filter((V)=>Math.abs(V-X)<1).length/Y.length,L=X*Z*Y.length;if(L>j.score)j={delimiter:G,score:L}}return j.delimiter}function cJ(_,$,j){let G=[],Y=[],X="",Z=!1,L=!1,V=()=>{Y.push(X),X=""},q=()=>{if(V(),!(Y.length===1&&Y[0]===""&&G.length>0))G.push(Y);if(Y=[],G.length>=j)L=!0};for(let K=0;K<_.length;K+=1){if(L)break;let Q=_[K];if(Q==='"')if(Z&&_[K+1]==='"')X+='"',K+=1;else Z=!Z;else if(!Z&&Q===$)V();else if(!Z&&(Q===`
`||Q==="\r")){if(Q==="\r"&&_[K+1]===`
`)K+=1;q()}else X+=Q}if(!L&&(X.length>0||Y.length>0))q();return{rows:G,truncatedRows:L}}function hJ(_,$){return _.map((j)=>{let G=j.slice(0,$);while(G.length<$)G.push("");return G})}function LV(_,$={}){let j=Math.max(1,$.maxRows??500),G=Math.max(1,$.maxColumns??80),Y=$.delimiter||mJ(_),X=cJ(_,Y,j+1),Z=X.rows.slice(0,j),L=Z.reduce((D,E)=>Math.max(D,E.length),0),V=Math.min(Math.max(1,L),G),q=L>G,K=hJ(Z,V),Q=K[0]||[],F=K.slice(1),B=Q.some((D)=>D.trim().length>0)&&F.length>0,U=B?Q.map((D,E)=>D.trim()||`Column ${E+1}`):Array.from({length:V},(D,E)=>`Column ${E+1}`),H=B?F:K;return{delimiter:Y,headers:U,rows:H,columnCount:V,rowCount:H.length,truncatedRows:X.truncatedRows||X.rows.length>j,truncatedColumns:q}}var lJ=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/x-yaml","text/xml","text/yaml"]),pJ=new Set(["text/markdown"]),rJ=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),nJ=new Set(["application/eml","message/rfc822"]);function $4(_){return typeof _==="string"?_.trim().toLowerCase():""}function dJ(_){let $=$4(_);return!!$&&$.endsWith(".eml")}function oJ(_){let $=$4(_);return!!$&&$.endsWith(".pdf")}function iJ(_){let $=$4(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}var sJ=new Set(["application/zip","application/x-zip-compressed"]);function aJ(_){let $=$4(_);return!!$&&$.endsWith(".zip")}function tJ(_){let $=$4(_);return!!$&&($.endsWith(".html")||$.endsWith(".htm"))}function eJ(_){let $=$4(_);if(!$)return!1;return $.endsWith(".sh")||$.endsWith(".bash")||$.endsWith(".zsh")||$.endsWith(".sb")||$.endsWith(".yaml")||$.endsWith(".yml")}function C6(_,$){let j=N8(_,$);if(j?.id)return j.id;let G=$4(_);if(oJ($)||G==="application/pdf")return"pdf";if(iJ($)||rJ.has(G))return"office";if(dJ($)||nJ.has(G))return"eml";if(aJ($)||sJ.has(G))return"archive";if(tJ($)||G==="text/html")return"html";if(XV(G,$))return"delimited";if(eJ($))return"text";if(!G)return"unsupported";if(G.startsWith("video/"))return"video";if(G.startsWith("image/"))return"image";if(lJ.has(G)||G.startsWith("text/"))return"text";return"unsupported"}function qV(_){let $=$4(_);return pJ.has($)}function U8(_){switch(_){case"image":return"Image preview";case"video":return"Video player";case"pdf":return"PDF preview";case"office":return"Office viewer";case"eml":return"Email preview";case"html":return"HTML preview";case"text":return"Text preview";case"delimited":return"Table preview";case"archive":return"ZIP archive preview";default:return eq(_)||"Preview unavailable"}}var _k=new TextDecoder("utf-8",{fatal:!1});function w5(_,$){return _[$]|_[$+1]<<8}function u4(_,$){return(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24)>>>0}function VV(_,$,j){return _k.decode(_.subarray($,$+j))}function $k(_){let $=Math.max(0,_.length-65557);for(let j=_.length-22;j>=$;j-=1)if(u4(_,j)===101010256)return j;return-1}function jk(_,$){let j=Math.max(0,$-20);for(let G=j;G<=$-4;G+=1)if(u4(_,G)===117853008)return!0;return!1}function Gk(_){let $=new Set;for(let j of _){let G=j.path.replace(/\/+/g,"/");if(!G)continue;if(j.isDirectory){$.add(G.endsWith("/")?G.slice(0,-1):G);continue}let Y=G.split("/").filter(Boolean);if(Y.length<=1)continue;let X="";for(let Z=0;Z<Y.length-1;Z+=1)X=X?`${X}/${Y[Z]}`:Y[Z],$.add(X)}return $}function Yk(_){return String(_||"").replace(/\\/g,"/").trim()}function QV(_){switch(Number(_)){case 0:return"Stored";case 8:return"Deflate";case 9:return"Deflate64";case 12:return"BZIP2";case 14:return"LZMA";case 93:return"Zstandard";default:return`Method ${_}`}}function KV(_){let $=_ instanceof Uint8Array?_:_ instanceof ArrayBuffer?new Uint8Array(_):new Uint8Array(_.buffer,_.byteOffset,_.byteLength);if($.length<22)throw Error("ZIP archive is too small to contain a valid directory.");let j=$k($);if(j<0)throw Error("ZIP archive directory could not be found.");if(jk($,j))throw Error("ZIP64 archives are not previewable yet.");let G=w5($,j+10),Y=u4($,j+12),X=u4($,j+16);if(X+Y>$.length)throw Error("ZIP archive directory is truncated.");let Z=[],L=X,V=X+Y;while(L<V){if(L+46>$.length)throw Error("ZIP archive directory entry is truncated.");if(u4($,L)!==33639248)throw Error("ZIP archive directory contains an unexpected record.");let Q=w5($,L+8),F=w5($,L+10),B=u4($,L+20),U=u4($,L+24),H=w5($,L+28),D=w5($,L+30),E=w5($,L+32),M=L+46,z=M+H+D,O=z+E;if(O>$.length)throw Error("ZIP archive directory entry metadata is truncated.");let x=(Q&2048)===2048,I=Yk(VV($,M,H)),A=VV($,z,E),k=I.endsWith("/");if(I)Z.push({path:I,isDirectory:k,compressedSize:B,uncompressedSize:U,compressionMethod:F,comment:x?A:A});L=O}Z.sort((Q,F)=>{if(Q.isDirectory!==F.isDirectory)return Q.isDirectory?-1:1;return Q.path.localeCompare(F.path)});let q=Z.filter((Q)=>!Q.isDirectory),K=Gk(Z);return{entries:Z,summary:{fileCount:q.length,directoryCount:K.size,totalEntries:Z.length,compressedBytes:q.reduce((Q,F)=>Q+F.compressedSize,0),uncompressedBytes:q.reduce((Q,F)=>Q+F.uncompressedSize,0)}}}function BV(_){if(!_)return null;if(_.uncompressedBytes<=0)return null;let $=1-_.compressedBytes/_.uncompressedBytes;if(!Number.isFinite($))return null;return`${Math.round($*100)}% smaller`}var Xk="allow-scripts";function Zk(_=!1){return`image-modal attachment-preview-modal${_?" maximized":""}`}function Lk(_){if(!(_ instanceof Uint8Array)||_.length===0)return!0;let $=0,j=_.subarray(0,Math.min(_.length,4096));for(let G of j){if(G===0)return!1;if(G<32&&G!==9&&G!==10&&G!==13&&G!==12)$+=1}return $/j.length<0.02}function qk(_,$){let j=String(_?.content_type||"").trim().toLowerCase(),G=String($||"").trim().toLowerCase();if(j.startsWith("text/")||j==="application/json"||j==="application/xml")return!1;return j==="application/octet-stream"||G.endsWith(".sb")||G.endsWith(".sh")}function Vk(_){try{return new TextDecoder("utf-8",{fatal:!1}).decode(_)}catch{return new TextDecoder().decode(_)}}function Qk(_){if(_==="\t")return"Tab";if(_===",")return"Comma";if(_===";")return"Semicolon";if(_==="|")return"Pipe";return null}function Kk(_,$=null,j=null,G=null){let Y=_?.metadata?.size,X=_?.content_type||"application/octet-stream",Z=j?.summary||null;return[{label:"Type",value:X},{label:"Syntax",value:$},{label:"Delimiter",value:G?Qk(G.delimiter):null},{label:"Rows",value:G?`${G.rowCount}${G.truncatedRows?"+":""}`:null},{label:"Columns",value:G?`${G.columnCount}${G.truncatedColumns?"+":""}`:null},{label:"Entries",value:Z?String(Z.totalEntries):null},{label:"Files",value:Z?String(Z.fileCount):null},{label:"Folders",value:Z?String(Z.directoryCount):null},{label:"Compressed",value:Z?t_(Z.compressedBytes):null},{label:"Uncompressed",value:Z?t_(Z.uncompressedBytes):null},{label:"Savings",value:BV(Z)},{label:"Size",value:typeof Y==="number"?t_(Y):null},{label:"Added",value:_?.created_at?x4(_.created_at):null}].filter((L)=>L.value)}function Bk(_,$){let j=String(_?.content_type||"").trim().toLowerCase(),G=String($||"").trim().toLowerCase(),Y=G.split("/").pop()||G;if(G.endsWith(".yaml")||G.endsWith(".yml")||j==="text/yaml"||j==="application/yaml")return"yaml";if(G.endsWith(".json")||G.endsWith(".jsonl")||j==="application/json")return"json";if(G.endsWith(".xml")||G.endsWith(".svg")||j==="application/xml"||j==="text/xml"||j==="image/svg+xml")return"xml";if(G.endsWith(".html")||G.endsWith(".htm")||j==="text/html")return"html";if(G.endsWith(".css")||j==="text/css")return"css";if(G.endsWith(".ts")||G.endsWith(".tsx")||j==="text/typescript")return G.endsWith(".tsx")?"tsx":"ts";if(G.endsWith(".js")||G.endsWith(".jsx")||j==="text/javascript"||j==="application/javascript")return G.endsWith(".jsx")?"jsx":"js";if(G.endsWith(".py")||j==="text/x-python"||j==="application/x-python-code")return"python";if(G.endsWith(".go")||j==="text/x-go")return"go";if(G.endsWith(".c++")||G.endsWith(".cc")||G.endsWith(".cp")||G.endsWith(".cpp")||G.endsWith(".cxx")||G.endsWith(".hh")||G.endsWith(".hpp")||G.endsWith(".hxx")||j==="text/x-c++src"||j==="text/x-c++hdr")return"cpp";if(G.endsWith(".rb")||j==="text/x-ruby")return"ruby";if(G.endsWith(".rs")||j==="text/x-rustsrc")return"rust";if(G.endsWith(".ps1")||G.endsWith(".psm1")||G.endsWith(".psd1")||j==="text/x-powershell")return"powershell";if(Y==="dockerfile"||G.endsWith(".dockerfile"))return"dockerfile";if(G.endsWith(".md")||G.endsWith(".markdown")||j==="text/markdown")return"markdown";if(G.endsWith(".sh")||G.endsWith(".bash")||G.endsWith(".zsh")||Y===".bashrc"||Y===".bash_profile"||Y===".profile"||Y===".zshrc"||Y===".zprofile"||Y===".zshenv"||Y===".env"||Y.startsWith(".env.")||j==="text/x-shellscript")return"bash";if(G.endsWith(".sql"))return"sql";if(G.endsWith(".toml")||G.endsWith(".ini")||G.endsWith(".cfg")||G.endsWith(".conf")||G.endsWith(".properties")||j==="text/toml")return"toml";return null}function Fk(_,$,j){let G=encodeURIComponent($||`attachment-${_}`),Y=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Y}&name=${G}#media=${Y}&name=${G}`;if(j==="office"){let X=b1(_);return`/office-viewer/?url=${encodeURIComponent(X)}&name=${G}`}if(j==="eml")return`/eml-viewer/?media=${Y}&name=${G}`;return null}function FV({mediaId:_,info:$,onClose:j}){let G=$?.filename||`attachment-${_}`,Y=Z0(()=>N8($?.content_type,G),[$?.content_type,G]),X=Z0(()=>C6($?.content_type,G),[$?.content_type,G]),Z=Y?.label||U8(X),L=Z0(()=>qV($?.content_type),[$?.content_type]),[V,q]=C(X==="text"||X==="html"||X==="archive"||X==="delimited"),[K,Q]=C(""),[F,B]=C(null),[U,H]=C(null),[D,E]=C(null),[M,z]=C(!1),O=u(null),x=Z0(()=>Bk($,G),[$,G]),I=Z0(()=>x?yX(x):null,[x]),A=Z0(()=>Kk($,!L?I:null,F,U),[$,L,I,F,U]),k=Z0(()=>Y?$V(Y.id,_,G):Fk(_,G,X),[Y,_,G,X]),W=Z0(()=>_V(Y?.id||X),[Y?.id,X]),T=Z0(()=>{if(!L||!K)return"";return X1(K)},[L,K]),y=Z0(()=>{if(L||!K||!x)return"";return O2(K,x)},[L,K,x]);return g(()=>{let J=(P)=>{if(P.key!=="Escape")return;if(M){z(!1);return}j()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[M,j]),g(()=>{if(!O.current||!T)return;W$(O.current);return},[T]),g(()=>{let J=!1;async function P(){if(X!=="text"&&X!=="html"&&X!=="archive"&&X!=="delimited"){q(!1),E(null),Q(""),B(null),H(null);return}q(!0),E(null),Q(""),B(null),H(null);try{let R=await l7(_),b=new Uint8Array(await R.arrayBuffer());if(X==="text"||X==="html"||X==="delimited"){if(X==="text"&&qk($,G)&&!Lk(b))throw Error("Attachment does not appear to contain text content.");let r=Vk(b);if(!J){if(Q(r),X==="delimited")H(LV(r,{delimiter:ZV($?.content_type,G)}))}return}let c=KV(b);if(!J)B(c)}catch(R){if(!J){let b=R instanceof Error?R.message:String(R||"Unknown error");E(X==="archive"?`Failed to load ZIP preview. ${b}`:X==="delimited"?`Failed to load table preview. ${b}`:`Failed to load text preview. ${b}`)}}finally{if(!J)q(!1)}}return P(),()=>{J=!0}},[_,X,$?.content_type,G]),N`
        <${o$} className="attachment-preview-portal-root">
            <div class=${Zk(M)} onClick=${j}>
                <div class="attachment-preview-shell" onClick=${(J)=>{J.stopPropagation()}}>
                    <div class="attachment-preview-header">
                        <div class="attachment-preview-heading">
                            <div class="attachment-preview-title">${G}</div>
                            <div class="attachment-preview-subtitle">${Z}</div>
                        </div>
                        <div class="attachment-preview-header-actions">
                            <button
                                class="attachment-preview-zen"
                                type="button"
                                onClick=${()=>z((J)=>!J)}
                                title=${M?"Exit zen mode":"Enter zen mode"}
                                aria-label=${M?"Exit zen mode":"Enter zen mode"}
                                aria-pressed=${M?"true":"false"}
                            >
                                ${M?"Restore":"Maximize"}
                            </button>
                            ${k&&N`
                                <a
                                    href=${k}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="attachment-preview-download"
                                    onClick=${(J)=>J.stopPropagation()}
                                >
                                    Open in Tab
                                </a>
                            `}
                            <a
                                href=${b1(_)}
                                download=${G}
                                class="attachment-preview-download"
                                onClick=${(J)=>J.stopPropagation()}
                            >
                                Download
                            </a>
                            <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                        </div>
                    </div>
                    <div class="attachment-preview-body">
                        ${V&&N`<div class="attachment-preview-state">Loading preview…</div>`}
                        ${!V&&D&&N`<div class="attachment-preview-state">${D}</div>`}
                        ${!V&&!D&&X==="image"&&N`
                            <img class="attachment-preview-image" src=${b1(_)} alt=${G} />
                        `}
                        ${!V&&!D&&X==="video"&&N`
                            <video class="attachment-preview-video" src=${b1(_)} controls autoplay style="max-width:100%;max-height:100%;" />
                        `}
                        ${!V&&!D&&X==="html"&&N`
                            <iframe class="attachment-preview-frame" srcdoc=${K||""} sandbox=${Xk} title=${G}></iframe>
                        `}
                        ${!V&&!D&&(X==="pdf"||X==="office"||X==="eml"||Boolean(Y))&&k&&N`
                            <iframe class="attachment-preview-frame" src=${k} title=${G}></iframe>
                        `}
                        ${!V&&!D&&W&&N`
                            <div class="attachment-preview-readonly-note">${W}</div>
                        `}
                        ${!V&&!D&&X==="delimited"&&U&&N`
                            <div class="attachment-preview-delimited">
                                ${(U.truncatedRows||U.truncatedColumns)&&N`
                                    <div class="attachment-preview-delimited-note">
                                        Showing first ${U.rowCount} rows and ${U.columnCount} columns.
                                        Download the file for the complete dataset.
                                    </div>
                                `}
                                <div class="attachment-preview-delimited-table-wrap">
                                    <table class="attachment-preview-delimited-table">
                                        <thead>
                                            <tr>
                                                ${U.headers.map((J,P)=>N`
                                                    <th key=${`h-${P}`}>${J}</th>
                                                `)}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${U.rows.map((J,P)=>N`
                                                <tr key=${`r-${P}`}>
                                                    ${J.map((R,b)=>N`
                                                        <td key=${`c-${P}-${b}`}>${R}</td>
                                                    `)}
                                                </tr>
                                            `)}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        `}
                        ${!V&&!D&&X==="archive"&&F&&N`
                            <div class="attachment-preview-archive">
                                <div class="attachment-preview-archive-summary">
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Files</span>
                                        <strong class="attachment-preview-archive-card-value">${F.summary.fileCount}</strong>
                                    </div>
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Folders</span>
                                        <strong class="attachment-preview-archive-card-value">${F.summary.directoryCount}</strong>
                                    </div>
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Compressed</span>
                                        <strong class="attachment-preview-archive-card-value">${t_(F.summary.compressedBytes)}</strong>
                                    </div>
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Uncompressed</span>
                                        <strong class="attachment-preview-archive-card-value">${t_(F.summary.uncompressedBytes)}</strong>
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
                                            ${F.entries.map((J)=>N`
                                                <tr key=${J.path}>
                                                    <td class="attachment-preview-archive-name">${J.path}</td>
                                                    <td>${J.isDirectory?"Folder":"File"}</td>
                                                    <td>${J.isDirectory?"—":QV(J.compressionMethod)}</td>
                                                    <td>${J.isDirectory?"—":t_(J.compressedSize)}</td>
                                                    <td>${J.isDirectory?"—":t_(J.uncompressedSize)}</td>
                                                </tr>
                                            `)}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        `}
                        ${!V&&!D&&X==="text"&&L&&N`
                            <div
                                ref=${O}
                                class="attachment-preview-markdown post-content"
                                dangerouslySetInnerHTML=${{__html:T}}
                            />
                        `}
                        ${!V&&!D&&X==="text"&&!L&&y&&N`
                            <pre class="attachment-preview-text attachment-preview-code"><code dangerouslySetInnerHTML=${{__html:y}} /></pre>
                        `}
                        ${!V&&!D&&X==="text"&&!L&&!y&&N`
                            <pre class="attachment-preview-text">${K}</pre>
                        `}
                        ${!V&&!D&&X==="unsupported"&&N`
                            <div class="attachment-preview-state">
                                Preview is not available for this file type yet. You can still download it directly.
                            </div>
                        `}
                    </div>
                    <div class="attachment-preview-meta">
                        ${A.map((J)=>N`
                            <div class="attachment-preview-meta-item" key=${J.label}>
                                <span class="attachment-preview-meta-label">${J.label}</span>
                                <span class="attachment-preview-meta-value">${J.value}</span>
                            </div>
                        `)}
                    </div>
                </div>
            </div>
        </${o$}>
    `}k0();T_();i2();y9();function Nk(_){if(!_||typeof _!=="object")return!1;if(_.isContentEditable)return!0;if(typeof _.closest!=="function")return!1;return Boolean(_.closest(["input","textarea","select",'[contenteditable="true"]',".compose-box",".compose-model-popup",".compose-session-popup",".settings-dialog",".workspace-sidebar",".workspace-explorer",".editor-pane-container",".dock-panel",".timeline-menu-dropdown",".rename-branch-overlay",".agent-request-modal",".attachment-preview-modal",".vnc-pane-shell",".kanban-plugin",".mindmap-editor"].join(", ")))}function Uk(_){if(!_||typeof _!=="object")return!0;if(Nk(_))return!1;let $=String(_.tagName||"").toUpperCase();if($==="BODY"||$==="HTML")return!0;if(typeof _.closest!=="function")return!0;return Boolean(_.closest(".container, .timeline, .post, .post-body, .post-content, .agent-status-panel"))}function Ek(_){if(!w6(_))return!1;if(!Uk(_?.target))return!1;return!s$.some((j)=>J$(_,j.id))}function NV(_){let $=new URL(window.location.href);if(_)$.searchParams.delete("chat_only");else $.searchParams.set("chat_only","1");window.location.href=$.toString()}function Dk(_){let $=[],j=new Map(t$.map((Y)=>[Y.id,Y])),G=(Y,X={})=>{let Z=j.get(Y);if(!Z)return;$.push({...Z,...X})};if(G("toggle-workspace",{label:_.workspaceOpen?"Hide workspace":"Show workspace",description:_.workspaceOpen?"Hide the workspace sidebar.":"Show the workspace sidebar."}),!_.workspaceOpen&&!_.chatOnlyMode)G("open-explorer");if(G("toggle-chat-only",{label:_.chatOnlyMode?"Exit chat-only mode":"Chat-only mode",description:_.chatOnlyMode?"Return to the split workspace layout.":"Switch to the chat-only layout."}),typeof _.onOpenTerminalTab==="function")G("open-terminal-tab");if(typeof _.onOpenVncTab==="function")G("open-vnc-tab");if(typeof _.onToggleTerminalDock==="function")G("toggle-terminal-dock",{label:_.terminalVisible?"Hide terminal dock":"Show terminal dock",description:_.terminalVisible?"Hide the terminal dock.":"Show the terminal dock."});return G("open-settings"),$}function UV(_){if(_==="agent")return"Agents";if(_==="workspace")return"Workspace";return"Slash commands"}function Hk(_){if(_?.imageUrl)return N`<img class="timeline-quick-actions-item-avatar" src=${_.imageUrl} alt="" aria-hidden="true" />`;return N`<span class="timeline-quick-actions-item-placeholder" aria-hidden="true">${_?.visualHint||""}</span>`}function E8(_,$){return N`
        <span class="timeline-quick-actions-keyhint">
            <kbd>${$}</kbd>
            <span>${_}</span>
        </span>
    `}function Wk(_){let $=new URL(window.location.href);$.searchParams.set("chat_jid",_),$.searchParams.set("chat_only","1");let j=document.createElement("a");j.href=$.toString(),j.target="_blank",j.rel="noopener",j.style.display="none",document.body.appendChild(j),j.click(),j.remove()}function EV({activeChatAgents:_=[],currentChatJid:$="web:default",workspaceOpen:j=!1,chatOnlyMode:G=!1,terminalVisible:Y=!1,onSwitchChat:X,onToggleWorkspace:Z,onOpenTerminalTab:L,onOpenVncTab:V,onToggleTerminalDock:q,onPrefillCompose:K}){let[Q,F]=C(!1),[B,U]=C(""),[H,D]=C(0),[E,M]=C([]),[z,O]=C({workspaceCommands:null,slashCommands:null}),x=u(null),I=u(null),A=f(async()=>{try{let y=await B6();O(e$(y?.settings))}catch{O({workspaceCommands:null,slashCommands:null})}},[]);g(()=>{A()},[A]),g(()=>{let y=!1;return K6($).then((J)=>{if(y)return;M(Array.isArray(J?.commands)?J.commands:[])}).catch(()=>{if(y)return;M([])}),()=>{y=!0}},[$]);let k=Z0(()=>Dk({workspaceOpen:j,chatOnlyMode:G,terminalVisible:Y,onOpenTerminalTab:L,onOpenVncTab:V,onToggleTerminalDock:q}),[G,L,V,q,Y,j]),W=Z0(()=>fL({agents:_,workspaceCommands:k,slashCommands:E,settings:z,query:B}),[_,B,z,E,k]);if(g(()=>{if(W.length===0){D(-1);return}if(!B.trim()){D(0);return}let y=B.toLowerCase().replace(/^[@/]+/,"").trim();if(!y){D(0);return}let J=0,P=0;for(let R=0;R<W.length;R++){let b=W[R],c=(b.title||"").toLowerCase().replace(/^[@/]+/,"");if(c===y){J=R;break}let r=0;if(c.startsWith(y))r=3;else if(c.includes(y))r=2;else if((b.subtitle||"").toLowerCase().includes(y))r=1;if(r>P)P=r,J=R}D(J)},[W,B]),g(()=>{if(!Q)return;requestAnimationFrame(()=>I.current?.focus?.())},[Q]),g(()=>{let y=(P)=>{if(!Q){if(!Ek(P))return;P.preventDefault(),U(String(P.key||"")),D(0),F(!0);return}if(P.key==="Escape"){P.preventDefault(),F(!1),U("");return}if(P.key==="ArrowDown"){P.preventDefault(),D((R)=>W.length>0?(R+1+W.length)%W.length:0);return}if(P.key==="ArrowUp"){P.preventDefault(),D((R)=>W.length>0?(R-1+W.length)%W.length:0);return}if(P.key==="Enter"&&W[H]){P.preventDefault();let R=W[H],b=P.altKey;if(R){if(R.kind==="agent"&&R.chatJid)if(b)Wk(R.chatJid);else X?.(R.chatJid);else if(R.kind==="workspace"&&R.commandId){if(R.commandId==="toggle-workspace"||R.commandId==="open-explorer")Z?.();if(R.commandId==="toggle-chat-only")NV(G);if(R.commandId==="open-terminal-tab")L?.();if(R.commandId==="open-vnc-tab")V?.();if(R.commandId==="toggle-terminal-dock")q?.();if(R.commandId==="open-settings")window.dispatchEvent(new CustomEvent("piclaw:open-settings"))}else if(R.kind==="slash"&&R.commandName)K?.(R.commandName)}F(!1),U("")}},J=(P)=>{if(!Q)return;if(x.current?.contains(P.target))return;F(!1),U("")};return window.addEventListener("keydown",y,!0),document.addEventListener("pointerdown",J,!0),()=>{window.removeEventListener("keydown",y,!0),document.removeEventListener("pointerdown",J,!0)}},[G,H,W,L,V,K,X,q,Z,Q]),g(()=>{let y=(J)=>{let P=e$(J?.detail?.settings);if(J?.detail?.settings){O(P);return}A()};return window.addEventListener("focus",y),window.addEventListener("piclaw:quick-actions-settings-updated",y),()=>{window.removeEventListener("focus",y),window.removeEventListener("piclaw:quick-actions-settings-updated",y)}},[A]),!Q)return null;let T=null;return N`
        <div class="timeline-quick-actions-portal">
            <div class="timeline-quick-actions-overlay">
                <div class="timeline-quick-actions" ref=${x}>
                    <div class="timeline-quick-actions-header">
                        <div class="timeline-quick-actions-search-row">
                            <input
                                ref=${I}
                                class="timeline-quick-actions-input"
                                type="text"
                                value=${B}
                                placeholder="Type to jump to an agent, workspace action, or slash command…"
                                onInput=${(y)=>{U(y.currentTarget?.value||""),D(0)}}
                            />
                            <div class="timeline-quick-actions-hints" aria-hidden="true">
                                ${E8("Move","↑↓")}
                                ${E8("Select","↵")}
                                ${E8("Pop out","Alt+↵")}
                                ${E8("Close","Esc")}
                            </div>
                        </div>
                    </div>
                    <div class="timeline-quick-actions-list">
                        ${W.length===0&&N`<div class="timeline-quick-actions-empty">No quick actions match.</div>`}
                        ${W.map((y,J)=>{let P=y.kind!==T;return T=y.kind,N`
                                ${P&&N`<div class="timeline-quick-actions-section">${UV(y.kind)}</div>`}
                                <button
                                    key=${y.key}
                                    type="button"
                                    class=${`timeline-quick-actions-item timeline-quick-actions-item-${y.kind}${J===H?" active":""}`}
                                    onMouseEnter=${null}
                                    onClick=${()=>{if(y.kind==="agent"&&y.chatJid)X?.(y.chatJid);if(y.kind==="workspace"&&y.commandId==="toggle-workspace")Z?.();if(y.kind==="workspace"&&y.commandId==="open-explorer")Z?.();if(y.kind==="workspace"&&y.commandId==="toggle-chat-only")NV(G);if(y.kind==="workspace"&&y.commandId==="open-terminal-tab")L?.();if(y.kind==="workspace"&&y.commandId==="open-vnc-tab")V?.();if(y.kind==="workspace"&&y.commandId==="toggle-terminal-dock")q?.();if(y.kind==="workspace"&&y.commandId==="open-settings")window.dispatchEvent(new CustomEvent("piclaw:open-settings"));if(y.kind==="slash"&&y.commandName)K?.(y.commandName);F(!1),U("")}}
                                >
                                    <span class="timeline-quick-actions-item-media">
                                        ${Hk(y)}
                                    </span>
                                    <span class="timeline-quick-actions-item-copy">
                                        <span class="timeline-quick-actions-item-title-row">
                                            <span class="timeline-quick-actions-item-title">${y.title}</span>
                                            ${y.actionHint?N`<span class="timeline-quick-actions-item-action-hint">${y.actionHint}</span>`:null}
                                        </span>
                                        <span class="timeline-quick-actions-item-subtitle">${y.subtitle}</span>
                                    </span>
                                    <span class="timeline-quick-actions-item-category">${y.categoryLabel||UV(y.kind)}</span>
                                </button>
                            `})}
                    </div>
                </div>
            </div>
        </div>
    `}k0();function DV({workspaceOpen:_,toggleWorkspace:$,chatOnlyMode:j,onOpenTerminalTab:G,onOpenVncTab:Y,onToggleTerminal:X,terminalVisible:Z}){let[L,V]=C(!1),[q,K]=C({top:8,left:8}),Q=u(null),F=u(null),B=u(null);g(()=>{if(typeof document>"u")return;let E=document.createElement("div");return E.className="timeline-menu-portal in-chat",document.body.appendChild(E),B.current=E,()=>{E.remove(),B.current=null}},[]),g(()=>{let E=()=>{if(_){let O=document.querySelector(".workspace-sidebar");if(O){let x=O.getBoundingClientRect();K({top:x.top+8,left:x.left+8})}}else K({top:8,left:8})};E();let M=new ResizeObserver(E),z=document.querySelector(".workspace-sidebar");if(z)M.observe(z);return window.addEventListener("resize",E),()=>{M.disconnect(),window.removeEventListener("resize",E)}},[_]),g(()=>{if(B.current)B.current.className=`timeline-menu-portal ${_?"in-workspace":"in-chat"}`},[_]),g(()=>{if(!B.current)return;let E=B.current.style;E.top=`${q.top}px`,E.left=`${q.left}px`,E.right="auto"},[q]),g(()=>{if(!L)return;let E=(M)=>{if(Q.current?.contains(M.target))return;if(F.current?.contains(M.target))return;V(!1)};return document.addEventListener("mousedown",E,!0),()=>document.removeEventListener("mousedown",E,!0)},[L]),g(()=>{if(!L)return;let E=(M)=>{if(M.key==="Escape")V(!1)};return document.addEventListener("keydown",E),()=>document.removeEventListener("keydown",E)},[L]),g(()=>{V(!1)},[_]);let U=f((E)=>{V(!1),E?.()},[]),H=f(()=>{let E=new URL(window.location.href);if(j)E.searchParams.delete("chat_only");else E.searchParams.set("chat_only","1");window.location.href=E.toString()},[j]),D=N`
        <button ref=${F} class=${`timeline-menu-btn${L?" active":""}`}
            onClick=${()=>V((E)=>!E)} title="Menu" aria-label="Menu"
            aria-haspopup="menu" aria-expanded=${L?"true":"false"}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
        </button>
        ${L&&N`
            <div class="workspace-menu-dropdown timeline-menu-dropdown" ref=${Q} role="menu">
                <button class="workspace-menu-item" role="menuitem" onClick=${()=>U($)}>
                    ${_?"Hide workspace":"Show workspace"}
                </button>
                ${!_&&!j&&N`
                    <button class="workspace-menu-item" role="menuitem" onClick=${()=>U(()=>{$()})}>
                        Open explorer
                    </button>
                `}
                <button class=${`workspace-menu-item${j?" active":""}`} role="menuitem" onClick=${()=>U(H)}>
                    ${j?"Exit chat-only mode":"Chat-only mode"}
                </button>

                ${(G||Y||X)&&N`<div class="workspace-menu-separator"></div>`}
                ${G&&N`<button class="workspace-menu-item" role="menuitem" onClick=${()=>U(G)}>Open terminal in tab</button>`}
                ${Y&&N`<button class="workspace-menu-item" role="menuitem" onClick=${()=>U(Y)}>Open VNC in tab</button>`}
                ${X&&N`<button class="workspace-menu-item" role="menuitem" onClick=${()=>U(X)}>${Z?"Hide terminal dock":"Show terminal dock"}</button>`}

                <div class="workspace-menu-separator"></div>
                <button class="workspace-menu-item" role="menuitem" onClick=${()=>U(()=>window.dispatchEvent(new CustomEvent("piclaw:open-settings")))}>Settings</button>
            </div>
        `}
    `;return X5(()=>{if(B.current)F$(D,B.current)}),null}k0();T_();var HV="PiClaw";function _j(_,$,j=!1){let G=_||"PiClaw",Y=G.charAt(0).toUpperCase(),X=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],Z=Y.charCodeAt(0)%X.length,L=X[Z],V=G.trim().toLowerCase(),q=typeof $==="string"?$.trim():"",K=q?q:null,Q=j||V==="PiClaw".toLowerCase()||V==="pi";return{letter:Y,color:L,image:K||(Q?"/static/icon-192.png":null)}}function WV(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function OV(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function zV(_){if(!_)return null;if(typeof document<"u"){let X=document.documentElement,Z=X?.dataset?.colorTheme||"",L=X?.dataset?.tint||"",V=getComputedStyle(X).getPropertyValue("--accent-color")?.trim();if(V&&(L||Z&&Z!=="default"))return V}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),G=0;for(let X=0;X<j.length;X+=1)G=(G*31+j.charCodeAt(X))%2147483647;let Y=Math.abs(G)%$.length;return $[Y]}function $j(..._){for(let $ of _)if(typeof $==="string"&&$.trim())return $.trim();return null}function Ok(_){if(_.startsWith('"')&&_.endsWith('"')||_.startsWith("'")&&_.endsWith("'"))return _.slice(1,-1);return _}function AV(_){if(typeof _!=="string"||!_.trim())return null;let $=_.match(/^\s*cd\s+(.+?)(?:\s*(?:&&|;|\n))/s);if(!$?.[1])return null;return Ok($[1].trim())||null}function JV(_,$){let j=$&&typeof $==="object"?$:null;if(!j)return null;let G=$j(j.cwd,j.working_directory,j.workingDirectory);if(G)return G;let Y=$j(j.project_dir,j.projectDir,j.repo_path,j.repoPath);if(Y)return Y;let X=$j(j.command),Z=AV(X);if(Z)return Z;if(Array.isArray(j.commands))for(let L of j.commands){let V=AV(L);if(V)return V}return null}k0();var kV={right:"3 2 8 5 3 8",down:"2 3 8 3 5 8",up:"2 7 8 7 5 2",left:"7 2 2 5 7 8"};function MV(_){return _==="down"||_==="up"||_==="left"?_:"right"}function TV(_,$=""){return["ui-disclosure-triangle",`ui-disclosure-triangle-${_}`,$.trim()].filter(Boolean).join(" ")}function a1(_="right",$=""){let j=MV(_);return N`
    <svg class=${TV(j,$)} viewBox="0 0 10 10" aria-hidden="true" focusable="false">
      <polygon points=${kV[j]}></polygon>
    </svg>
  `}function jj(_="right",$=""){let j=MV(_);return`<svg class="${TV(j,$)}" viewBox="0 0 10 10" aria-hidden="true" focusable="false"><polygon points="${kV[j]}"></polygon></svg>`}var zk=N`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`,Ak=N`
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        <path d="M6 3v12"></path>
        <circle cx="18" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <path d="M18 9a9 9 0 0 1-9 9"></path>
    </svg>
`,Jk=N`
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M12 7v5l3 2"></path>
    </svg>
`,kk=1e4,yV=132;function Mk(_,$=yV){let j=Number.isFinite($)&&$>0?Math.floor($):yV;return String(_||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`).map((G)=>G.length>j?`${G.slice(0,j)}…`:G).join(`
`)}function Tk(_){return(Array.isArray(_)?_:_&&Array.isArray(_.status_hints)?_.status_hints:[]).filter((j)=>j&&typeof j==="object").map((j,G)=>({key:typeof j.key==="string"&&j.key.trim()?j.key.trim():`hint-${G}`,iconSvg:typeof j.icon_svg==="string"?j.icon_svg.trim():"",label:typeof j.label==="string"?j.label.trim():"",title:typeof j.title==="string"?j.title.trim():""})).filter((j)=>j.iconSvg&&j.label)}function yk(_){if(!(_ instanceof Set)||_.size===0)return null;let $=Array.from(_.values());for(let j=$.length-1;j>=0;j-=1){let G=$[j];if(G==="thought"||G==="draft")return G}return null}function wk(_){if(!Array.isArray(_)||_.length===0)return[];let $=new Map([["ssh",0]]);return _.map((j,G)=>({hint:j,index:G})).sort((j,G)=>{let Y=$.get(j.hint?.key)??100,X=$.get(G.hint?.key)??100;if(Y!==X)return Y-X;return j.index-G.index}).map((j)=>j.hint)}function Ik(_,$){let j=typeof _==="string"?_.trim():"",G=typeof $==="string"?$.trim():"";return[j?j.split(/[\\/]+/).filter(Boolean).pop()||j:"",G].filter(Boolean).join(" • ")}function wV(_){if(!_||typeof _!=="object")return!1;let $=typeof _.type==="string"?_.type:"",j=Boolean(_.last_activity||_.lastActivity),G=$==="tool_call"||$==="tool_status"||Boolean(_.tool_name||_.tool_args);if(!j&&!G)return!1;return d$(_)!==null}function IV(_){if(!_||typeof _!=="object")return!1;return _.type==="intent"&&v2(_)!==null}function xk(_,$=Date.now()){if(!Number.isFinite(_))return!1;return $-_>=kk}function Ck(_,$=Date.now()){if(!wV(_))return null;let j=d$(_);if(j===null||!xk(j,$))return null;let G=uV(new Date(j).toISOString(),$);return G?`${G} ago`:null}function Pk(_,$=Date.now()){if(!IV(_))return null;if(v2(_)===null)return null;return A6(_,$)}function xV(_){return typeof _==="string"&&/^streaming output\.{3}$/i.test(_.trim())}function Rk(_){if(typeof _!=="string")return"";return _.replace(/[…]+/g,".").replace(/\s+/g," ").trim().replace(/[\s:;,.!?-]+$/g,"").toLowerCase()}function fk(_){if(!_||typeof _!=="object")return!1;let $=typeof _.type==="string"?_.type:"";return $==="tool_call"||$==="tool_status"||Boolean(_.tool_name||_.toolName||_.tool_args||_.toolArgs)}function CV(_){if(!fk(_))return"";let $=_?.status||_?.tool_status||_?.toolStatus;if(xV($))return"";return Rk($)}function PV(_,$){let j=typeof _==="string"?_:"",G=typeof $==="string"?$.trim():"";if(!j||!G)return j;let Y=G.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return j.replace(new RegExp(`\\s*[:—-]\\s*${Y}\\s*$`,"i"),"")}function D8(_){return _?N`<span class="agent-tool-status-pill">${_}</span>`:null}function RV(_){let $=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"";if($)return $;let j=typeof(_?.tool_name||_?.toolName)==="string"?String(_.tool_name||_.toolName).trim():"";if(!j)return"";let[G]=SV(_);return G?`${j}: ${G}`:j}function Sk(_,$={}){let j=$?.isLastActivity??Boolean(_?.last_activity||_?.lastActivity),G=RV(_),Y=_?.status,X="";if(_?.type==="plan")X=G?`Planning: ${G}`:"Planning...";else if(_?.type==="tool_call")X=G?`Running: ${G}`:"Running tool...";else if(_?.type==="tool_status")X=G&&xV(Y)?G:G?`${G}: ${Y||"Working..."}`:Y||"Working...";else if(_?.type==="error")X=G||"Agent error";else X=G||Y||"Working...";if(!j)return X;if(X&&X!=="Working...")return`Recent activity: ${X}`;return"Last activity"}function gk(_){let $=_?.tool_name||_?.toolName||"";return typeof $==="string"?$.trim().toLowerCase():""}function uk(_){let $=typeof _==="string"?_.replace(/\s+/g," ").trim():"";if(!$)return"";let j=120;return $.length>j?`${$.slice(0,j)}…`:$}function fV(_){if(!_)return null;if(typeof _==="string")try{let $=JSON.parse(_);return fV($)}catch{return null}if(typeof _==="object"){let $=_,j=$.arguments||$.input||$.params||$.parameters||$.args||$.payload;return j&&typeof j==="object"?j:$}return null}function SV(_){let $=fV(_?.tool_args||_?.toolArgs);if(!$)return[];let j=[],G=(Y)=>{let X=uk(Y);if(X&&!j.includes(X))j.push(X)};if(G($.command),Array.isArray($.commands))G($.commands.filter((Y)=>typeof Y==="string").join(" && "));if(G($.path||$.filePath||$.target),Array.isArray($.paths))G($.paths.filter((Y)=>typeof Y==="string").join(", "));return G($.fileName||$.filename||$.file),G($.url),G($.query),j.sort((Y,X)=>X.length-Y.length)}function gV(_,$){let j=typeof _==="string"?_:"";if(!j)return null;let G=SV($);for(let Z of G){let L=j.indexOf(Z);if(L>=0)return{prefix:j.slice(0,L),argument:Z,suffix:j.slice(L+Z.length)}}let Y=gk($);if(!Y)return null;let X=j.match(/^([^:]+:\s*)(.+)$/is);if(!X||X[1].trim().replace(/:$/,"").toLowerCase()!==Y)return null;return{prefix:X[1],argument:X[2],suffix:""}}function bk(_,$){let j=$?.status||$?.tool_status||$?.toolStatus,G=CV($),Y=G?PV(_,j):typeof _==="string"?_:"",X=RV($),Z=gV(X,$);if(!Z?.argument)return G?N`${Y} ${D8(G)}`:Y;let L=Y.lastIndexOf(Z.argument);if(L<0)return G?N`${Y} ${D8(G)}`:Y;let V=L+Z.argument.length;return N`
        ${Y.slice(0,L)}<span class="agent-tool-argument">${Z.argument}</span>${Y.slice(V)}${G?N` ${D8(G)}`:""}
    `}function vk(_,$){let j=gV(_,$);if(!j?.argument)return _;let G=$?.status||$?.tool_status||$?.toolStatus,Y=CV($),X=Y?PV(j.suffix||"",G):j.suffix||"";return N`
        ${j.prefix}<span class="agent-tool-argument">${j.argument}</span>${X}${Y?N` ${D8(Y)}`:""}
    `}function uV(_,$=Date.now()){if(!_)return null;let j=$-new Date(_).getTime();if(!Number.isFinite(j)||j<0)return null;let G=Math.floor(j/1000),Y=Math.floor(G/3600),X=Math.floor(G%3600/60),Z=G%60;if(Y>0)return`${Y}h ${X}m`;if(X>0)return`${X}m ${Z}s`;return`${Z}s`}function Gj({status:_,draft:$,plan:j,thought:G,pendingRequest:Y,intent:X,extensionPanels:Z=[],pendingPanelActions:L=new Set,onExtensionPanelAction:V,turnId:q,steerQueued:K,onPanelToggle:Q,showCorePanels:F=!0,showExtensionPanels:B=!0}){let E=(v)=>{if(!v)return{text:"",totalLines:0,fullText:""};if(typeof v==="string"){let N0=v,T0=N0?N0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:N0,totalLines:T0,fullText:N0}}let n=v.text||"",s=v.fullText||v.full_text||n,G0=Number.isFinite(v.totalLines)?v.totalLines:s?s.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:n,totalLines:G0,fullText:s}},M=160,z=(v)=>String(v||"").replace(/<\/?internal>/gi,""),O=(v)=>{if(!v)return 1;return Math.max(1,Math.ceil(v.length/160))},x=(v,n,s,G0={})=>{let N0=(v||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!N0)return{text:"",omitted:0,totalLines:Number.isFinite(s)?s:0,visibleLines:0};let T0=N0.split(`
`),J0=G0.direction==="tail",M0=T0.length>n?(J0?T0.slice(-n):T0.slice(0,n)).join(`
`):N0,y0=Number.isFinite(s)?s:T0.reduce((d0,__)=>d0+O(__),0),h0=M0?M0.split(`
`).reduce((d0,__)=>d0+O(__),0):0,S0=Math.max(y0-h0,0);return{text:M0,omitted:S0,totalLines:y0,visibleLines:h0}},I=E(j),A=E(G),k=E($),W=E({text:_?.output_preview||_?.outputPreview||"",fullText:_?.output_preview||_?.outputPreview||"",totalLines:_?.output_total_lines||_?.outputTotalLines}),T=Boolean(I.text)||I.totalLines>0,y=Boolean(A.text)||A.totalLines>0,J=Boolean(k.fullText?.trim()||k.text?.trim()),P=Boolean(W.fullText?.trim()||W.text?.trim()),R=Boolean(_||J||T||y||P||Y||X),b=Array.isArray(Z)&&Z.length>0,[c,r]=C(new Set),[e,m]=C(null),[_0,H0]=C({}),Y0=u(new Map),[j0,L0]=C(()=>Date.now()),F0=(v)=>r((n)=>{let s=new Set(n),G0=!s.has(v);if(G0)s.add(v);else s.delete(v);if(typeof Q==="function")Q(v,G0);return s});g(()=>{r(new Set),m(null)},[q]),g(()=>{let v={},n=new Set(["thought","draft"]);for(let[s,G0]of Y0.current.entries()){if(!G0||typeof G0!=="object")continue;let N0=Number(G0.scrollHeight),T0=Number(G0.clientHeight);if(!Number.isFinite(N0)||!Number.isFinite(T0)||T0<=0)continue;if(N0>T0+1)v[s]=!0;if(n.has(s))G0.scrollTop=Math.max(0,N0-T0)}H0((s)=>{let G0=Object.keys(s||{}).filter((T0)=>s[T0]).sort(),N0=Object.keys(v).sort();if(G0.length===N0.length&&G0.every((T0,J0)=>T0===N0[J0]))return s;return v})},[k.fullText,k.text,A.fullText,A.text,W.fullText,W.text,c]),g(()=>{if(!(Array.isArray(Z)&&Z.some((s)=>s?.started_at||s?.last_activity_at)))return;let n=setInterval(()=>L0(Date.now()),1000);return()=>clearInterval(n)},[Z]);let h=Z0(()=>yk(c),[c]);g(()=>{if(!h||typeof document>"u")return;let v=(n)=>{if(n?.defaultPrevented)return;if(n?.key!=="Escape")return;if(n?.altKey||n?.ctrlKey||n?.metaKey||n?.shiftKey)return;let s=n?.target;if(s instanceof Element){if(s.closest?.('input, textarea, select, [contenteditable="true"]'))return;if(s.isContentEditable)return}if(r((G0)=>{if(!(G0 instanceof Set)||!G0.has(h))return G0;let N0=new Set(G0);return N0.delete(h),N0}),typeof Q==="function")Q(h,!1);n.preventDefault?.(),n.stopPropagation?.()};return document.addEventListener("keydown",v),()=>document.removeEventListener("keydown",v)},[h,Q]);let $0=z$(_),V0=Boolean(_?.last_activity||_?.lastActivity),O0=Z0(()=>wV(_),[_]),a=Z0(()=>IV(_),[_]),X0=Z0(()=>JV(_?.tool_name,_?.tool_args),[_?.tool_name,_?.tool_args]),[W0,P0]=C(null);g(()=>{if(!Boolean(a||_?.retry_at||_?.retryAt||O0))return;L0(Date.now());let n=setInterval(()=>L0(Date.now()),1000);return()=>clearInterval(n)},[O0,a,_?.retry_at,_?.retryAt,_?.last_event_at,_?.lastEventAt,_?.started_at,_?.startedAt,_?.type,_?.tool_name,_?.tool_args]),g(()=>{if(!(_?.type==="tool_call"||_?.type==="tool_status")||!X0){P0(null);return}let n=!0;return p7(X0).then((s)=>{if(!n)return;if(s?.branch)P0({branch:s.branch,repoPath:s.repo_path||null,path:X0});else P0(null)}).catch(()=>{if(n)P0(null)}),()=>{n=!1}},[_?.type,X0]);let p0=_?.turn_id||q,u0=zV(p0),Y_=(v)=>v,l0=Fq(_,{isLastActivity:V0}),a0=I6(_,{isLastActivity:V0}),R0=q8({steerQueued:K,pulsing:l0&&a0==="dot"&&!V0}),i0=I6(null,{pendingRequest:!0}),m0=(v)=>v==="warning"?"#f59e0b":v==="error"?"var(--danger-color)":v==="success"?"var(--success-color)":u0,e0=X?.kind||"info",s0=m0(e0),U_=m0(_?.kind||($0?"warning":"info")),X_=Sk(_,{isLastActivity:V0}),c0=Ck(_,j0),z0=W0?.repoPath||"",L_=W0?.branch||"",o0=W0?Ik(z0,L_):"",H_=Tk(_?.status_hints||_?.statusHints),E0=Z0(()=>wk(H_),[H_]),g0=Z0(()=>E0.filter((v)=>v?.key==="ssh"),[E0]),x0=Z0(()=>E0.filter((v)=>v?.key!=="ssh"),[E0]);if((!F||!R)&&(!B||!b))return null;let n0=({panelTitle:v,text:n,fullText:s,totalLines:G0,maxLines:N0,titleClass:T0,panelKey:J0})=>{let M0=c.has(J0),y0=s||n||"",h0=J0==="thought"||J0==="draft"?z(y0):y0,S0=typeof N0==="number",d0=J0==="tool-output",__=S0?x(h0,N0,G0,{direction:d0?"tail":"head"}):{text:h0||"",omitted:0,totalLines:Number.isFinite(G0)?G0:0},I0=d0&&!M0?Mk(__.text):h0;if(!h0&&!(Number.isFinite(__.totalLines)&&__.totalLines>0))return null;let w0=`agent-thinking-body${S0?" agent-thinking-body-collapsible":""}`,D_=S0?`--agent-thinking-collapsed-lines: ${N0};`:"",$_=S0&&__.omitted>0,d=Boolean(J0&&_0[J0]),B0=$_||d,G_=(!M0&&B0||M0&&B0)&&N`
            <button
                class="agent-thinking-truncation"
                onClick=${()=>F0(J0)}
                title=${M0?`Show fewer ${v} lines`:`Show more ${v}`}
            >
                <span class="agent-thinking-truncation-arrow" aria-hidden="true">${a1(M0?"up":"down")}</span>
                <span>${M0?"less":"more…"}</span>
            </button>
        `;return N`
            <div
                class="agent-thinking"
                data-expanded=${M0?"true":"false"}
                data-collapsible=${S0?"true":"false"}
                data-panel-key=${J0||""}
                style=${u0?`--turn-color: ${u0};`:""}
            >
                <div class="agent-thinking-title ${T0||""}">
                    ${u0&&N`<span class=${R0} aria-hidden="true"></span>`}
                    ${v}
                    ${G_}
                </div>
                <div
                    class=${w0}
                    style=${D_}
                    ref=${(S_)=>{if(!J0)return;if(S_)Y0.current.set(J0,S_);else Y0.current.delete(J0)}}
                    dangerouslySetInnerHTML=${{__html:X6(I0)}}
                />
            </div>
        `},A_=Y?.tool_call?.title,Q_=A_?`Awaiting approval: ${A_}`:"Awaiting approval",E_=Pk(_,j0),N_=(v,n,s=null)=>{let G0=m2(v),N0=mZ(v,j0),T0=[s,N0].filter(Boolean).join(" · "),J0=q8({steerQueued:K,pulsing:z$(v)||Boolean(N0)}),M0=I6(v);return N`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${n?`--turn-color: ${n};`:""}
                title=${v?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${n&&M0==="dot"&&N`<span class=${J0} aria-hidden="true"></span>`}
                    ${M0==="spinner"&&N`<div class="agent-status-spinner" aria-hidden="true"></div>`}
                    <span class="agent-thinking-title-text">${vk(G0,v)}</span>
                    ${T0&&N`<span class="agent-status-elapsed">${T0}</span>`}
                </div>
                ${v.detail&&N`<div class="agent-thinking-body">${v.detail}</div>`}
            </div>
        `},J_=(v,n,s,G0,N0,T0,J0,M0=8,y0=8)=>{let h0=Math.max(N0-G0,0.000000001),S0=Math.max(n-M0*2,1),d0=Math.max(s-y0*2,1),__=Math.max(J0-T0,1),I0=J0===T0?n/2:M0+(v.run-T0)/__*S0,w0=y0+(d0-(v.value-G0)/h0*d0);return{x:I0,y:w0}},x_=(v,n,s,G0,N0,T0,J0,M0=8,y0=8)=>{if(!Array.isArray(v)||v.length===0)return"";return v.map((h0,S0)=>{let{x:d0,y:__}=J_(h0,n,s,G0,N0,T0,J0,M0,y0);return`${S0===0?"M":"L"} ${d0.toFixed(2)} ${__.toFixed(2)}`}).join(" ")},R_=(v,n="")=>{if(!Number.isFinite(v))return"—";return`${Math.abs(v)>=100?v.toFixed(0):v.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${n}`},W_=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],s_=(v,n)=>{let s=W_;if(!Array.isArray(s)||s.length===0)return"var(--accent-color)";if(s.length===1||!Number.isFinite(n)||n<=1)return s[0];let N0=Math.max(0,Math.min(Number.isFinite(v)?v:0,n-1))/Math.max(1,n-1)*(s.length-1),T0=Math.floor(N0),J0=Math.min(s.length-1,T0+1),M0=N0-T0,y0=s[T0],h0=s[J0];if(!h0||T0===J0||M0<=0.001)return y0;if(M0>=0.999)return h0;let S0=Math.round((1-M0)*1000)/10,d0=Math.round(M0*1000)/10;return`color-mix(in oklab, ${y0} ${S0}%, ${h0} ${d0}%)`},f_=(v,n="autoresearch")=>{let s=Array.isArray(v)?v.map((I0)=>({...I0,points:Array.isArray(I0?.points)?I0.points.filter((w0)=>Number.isFinite(w0?.value)&&Number.isFinite(w0?.run)):[]})).filter((I0)=>I0.points.length>0):[],G0=s.map((I0,w0)=>({...I0,color:s_(w0,s.length)}));if(G0.length===0)return null;let N0=320,T0=120,J0=G0.flatMap((I0)=>I0.points),M0=J0.map((I0)=>I0.value),y0=J0.map((I0)=>I0.run),h0=Math.min(...M0),S0=Math.max(...M0),d0=Math.min(...y0),__=Math.max(...y0);return N`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${G0.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${N0} ${T0}`} preserveAspectRatio="none" aria-hidden="true">
                        ${G0.map((I0)=>{let w0=I0?.key||I0?.label||"series",D_=e?.panelKey===n&&e?.seriesKey===w0;return N`
                                <g key=${w0}>
                                    <path
                                        class=${`agent-series-chart-line${D_?" is-hovered":""}`}
                                        d=${x_(I0.points,N0,T0,h0,S0,d0,__)}
                                        style=${`--agent-series-color: ${I0.color};`}
                                        onMouseEnter=${()=>m({panelKey:n,seriesKey:w0})}
                                        onMouseLeave=${()=>m(($_)=>$_?.panelKey===n&&$_?.seriesKey===w0?null:$_)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${G0.flatMap((I0)=>{let w0=typeof I0?.unit==="string"?I0.unit:"",D_=I0?.key||I0?.label||"series";return I0.points.map(($_,d)=>{let B0=J_($_,N0,T0,h0,S0,d0,__);return N`
                                    <button
                                        key=${`${D_}-point-${d}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${I0.color}; left:${B0.x/N0*100}%; top:${B0.y/T0*100}%;`}
                                        onMouseEnter=${()=>m({panelKey:n,seriesKey:D_,run:$_.run,value:$_.value,unit:w0})}
                                        onMouseLeave=${()=>m((r0)=>r0?.panelKey===n?null:r0)}
                                        onFocus=${()=>m({panelKey:n,seriesKey:D_,run:$_.run,value:$_.value,unit:w0})}
                                        onBlur=${()=>m((r0)=>r0?.panelKey===n?null:r0)}
                                        aria-label=${`${I0?.label||"Series"} ${R_($_.value,w0)} at run ${$_.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${G0.map((I0)=>{let w0=I0.points[I0.points.length-1]?.value,D_=typeof I0?.unit==="string"?I0.unit:"",$_=I0?.key||I0?.label||"series",d=e?.panelKey===n&&e?.seriesKey===$_?e:null,B0=d&&Number.isFinite(d.value)?d.value:w0,r0=d&&typeof d.unit==="string"?d.unit:D_,G_=d&&Number.isFinite(d.run)?d.run:null;return N`
                            <div key=${`${$_}-legend`} class=${`agent-series-legend-item${d?" is-hovered":""}`} style=${`--agent-series-color: ${I0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${I0.color};`}></span>
                                <span class="agent-series-legend-label">${I0?.label||"Series"}</span>
                                ${G_!==null&&N`<span class="agent-series-legend-run">run ${G_}</span>`}
                                <span class="agent-series-legend-value">${R_(B0,r0)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},q0=(v)=>{if(!v)return null;let n=typeof v?.key==="string"?v.key:`panel-${Math.random()}`,s=c.has(n),G0=v?.title||"Extension status",N0=v?.collapsed_text||"",T0=String(v?.state||"").replace(/[-_]+/g," ").replace(/^./,(B0)=>B0.toUpperCase()),J0=m0(v?.state==="completed"?"success":v?.state==="failed"?"error":v?.state==="stopped"?"warning":"info"),M0=q8({steerQueued:K,pulsing:v?.state==="running"}),y0=typeof v?.detail_markdown==="string"?v.detail_markdown.trim():"",h0=typeof v?.last_run_text==="string"?v.last_run_text.trim():"",S0=typeof v?.tmux_command==="string"?v.tmux_command.trim():"",d0=Array.isArray(v?.series)?v.series:[],__=Array.isArray(v?.actions)?v.actions:[],I0=v?.started_at?A6(v,j0):null,w0=N0,D_=Boolean(y0||S0||I0),$_=Boolean(y0||d0.length>0||S0),d=[G0,w0].filter(Boolean).join(" — ");return N`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${s?"true":"false"}
                style=${J0?`--turn-color: ${J0};`:""}
                title=${!s?d||G0:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>$_?F0(n):null}
                    >
                        ${J0&&N`<span class=${M0} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${G0}</span>
                        ${w0&&N`<span class="agent-thinking-title-meta">${w0}</span>`}
                        ${I0&&N`<span class="agent-status-elapsed">${I0}</span>`}
                    </button>
                    ${(__.length>0||$_)&&N`
                        <div class="agent-thinking-tools-inline">
                            ${__.length>0&&N`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${__.map((B0)=>{let r0=`${n}:${B0?.key||""}`,G_=L?.has?.(r0);return N`
                                            <button
                                                key=${r0}
                                                class=${`agent-thinking-action-btn${B0?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>V?.(v,B0)}
                                                disabled=${Boolean(G_)}
                                            >
                                                ${G_?"Working…":B0?.label||"Run"}
                                            </button>
                                        `})}
                                </div>
                            `}
                            ${$_&&N`
                                <button
                                    class="agent-thinking-corner-toggle agent-thinking-corner-toggle-inline"
                                    type="button"
                                    aria-label=${`${s?"Collapse":"Expand"} ${G0}`}
                                    title=${s?"Collapse details":"Expand details"}
                                    onClick=${()=>F0(n)}
                                >
                                    ${a1(s?"down":"up")}
                                </button>
                            `}
                        </div>
                    `}
                </div>
                ${s&&N`
                    <div class=${`agent-thinking-autoresearch-layout${D_?"":" chart-only"}`}>
                        ${D_&&N`
                            <div class="agent-thinking-autoresearch-meta-stack">
                                ${I0&&N`
                                    <div class="agent-thinking-autoresearch-elapsed">
                                        <span title="Experiment duration">⏱ ${I0}</span>
                                        ${v?.last_activity_at&&v?.state==="running"&&N`<span title="Since last activity">⟳ ${uV(v.last_activity_at)} ago</span>`}
                                    </div>
                                `}
                                ${y0&&N`
                                    <div
                                        class="agent-thinking-body agent-thinking-autoresearch-detail"
                                        dangerouslySetInnerHTML=${{__html:X6(y0)}}
                                    />
                                `}
                                ${S0&&N`
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
                                                onClick=${()=>V?.(v,{key:"copy_tmux",action_type:"autoresearch.copy_tmux",label:"Copy tmux"})}
                                            >
                                                ${zk}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                        ${d0.length>0?N`
                                <div class="agent-series-chart-stack">
                                    ${f_(d0,n)}
                                    ${h0&&N`<div class="agent-series-chart-note">${h0}</div>`}
                                </div>
                            `:N`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return N`
        <div class="agent-status-panel">
            ${F&&X&&N_(X,s0)}
            ${B&&Array.isArray(Z)&&Z.map((v)=>q0(v))}
            ${F&&_?.type==="intent"&&N_(_,U_,E_)}
            ${F&&Y&&N`
                <div class="agent-status agent-status-request" aria-live="polite" style=${u0?`--turn-color: ${u0};`:""}>
                    ${i0==="dot"&&N`<span class=${R0} aria-hidden="true"></span>`}
                    ${i0==="spinner"&&N`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${Q_}</span>
                </div>
            `}
            ${F&&T&&n0({panelTitle:Y_("Planning"),text:I.text,fullText:I.fullText,totalLines:I.totalLines,panelKey:"plan"})}
            ${F&&J&&n0({panelTitle:Y_("Draft"),text:k.text,fullText:k.fullText,totalLines:k.totalLines,maxLines:9,titleClass:"thought",panelKey:"draft"})}
            ${F&&y&&n0({panelTitle:Y_("Thoughts"),text:A.text,fullText:A.fullText,totalLines:A.totalLines,maxLines:9,titleClass:"thought",panelKey:"thought"})}
            ${F&&P&&n0({panelTitle:Y_("Output"),text:W.text,fullText:W.fullText,totalLines:W.totalLines,maxLines:6,titleClass:"tool-output",panelKey:"tool-output"})}
            ${F&&_&&_?.type!=="intent"&&N`
                <div class=${`agent-status${V0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}${o0||H_.length>0||c0?" agent-status-multiline":""}`} aria-live="polite" style=${u0?`--turn-color: ${u0};`:""}>
                    ${u0&&l0&&N`<span class=${R0} aria-hidden="true"></span>`}
                    ${_?.type==="error"?N`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:a0==="spinner"&&N`<div class="agent-status-spinner"></div>`}
                    <div class="agent-status-copy">
                        <span class="agent-status-text">${bk(X_,_)}</span>
                        ${(o0||E0.length>0||c0)&&N`
                            <span class="agent-status-meta-row">
                                ${g0.map((v)=>N`
                                    <span key=${v.key} class="agent-status-hint-row" title=${v.title||v.label}>
                                        <span class="agent-status-hint-icon" dangerouslySetInnerHTML=${{__html:v.iconSvg}}></span>
                                        <span class="agent-status-hint-label">${v.label}</span>
                                    </span>
                                `)}
                                ${o0&&N`
                                    <span class="agent-status-git-row" title=${X0||o0}>
                                        <span class="agent-status-git-icon">${Ak}</span>
                                        <span class="agent-status-git-label">
                                            ${z0&&N`<span class="agent-status-git-part">${z0}</span>`}
                                            ${z0&&L_&&N`<span class="agent-status-git-separator" aria-hidden="true">•</span>`}
                                            ${L_&&N`<span class="agent-status-git-part">${L_}</span>`}
                                        </span>
                                    </span>
                                `}
                                ${x0.map((v)=>N`
                                    <span key=${v.key} class="agent-status-hint-row" title=${v.title||v.label}>
                                        <span class="agent-status-hint-icon" dangerouslySetInnerHTML=${{__html:v.iconSvg}}></span>
                                        <span class="agent-status-hint-label">${v.label}</span>
                                    </span>
                                `)}
                                ${c0&&N`
                                    <span class="agent-status-hint-row agent-status-activity-row" title=${`${V0?"Recent activity":"Last event"} ${c0}`}>
                                        <span class="agent-status-hint-icon">${Jk}</span>
                                        <span class="agent-status-hint-label">${c0}</span>
                                    </span>
                                `}
                            </span>
                        `}
                    </div>
                </div>
            `}
        </div>
    `}function bV({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:G,options:Y,chat_jid:X}=_,Z=G?.title||"Agent Request",L=G?.kind||"other",V=G?.rawInput||{},q=V.command||V.commands&&V.commands[0]||null,K=V.diff||null,Q=V.fileName||V.path||null,F=G?.description||V.description||V.explanation||null,U=(Array.isArray(G?.locations)?G.locations:[]).map((z)=>z?.path).filter((z)=>Boolean(z)),H=Array.from(new Set([Q,...U].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:G,options:Y});let D=async(z)=>{try{await W5(j,z,X||null),$()}catch(O){console.error("Failed to respond to agent request:",O)}},E=async()=>{try{await c7(Z,`Auto-approved: ${Z}`),await W5(j,"approved",X||null),$()}catch(z){console.error("Failed to add to whitelist:",z)}},M=Y&&Y.length>0;return N`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${Z}</div>
                </div>
                ${(F||q||K||H.length>0)&&N`
                    <div class="agent-request-body">
                        ${F&&N`
                            <div class="agent-request-description">${F}</div>
                        `}
                        ${H.length>0&&N`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${H.map((z,O)=>N`<li key=${O}>${z}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${q&&N`
                            <pre class="agent-request-command">${q}</pre>
                        `}
                        ${K&&N`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${K}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${M?Y.map((z)=>N`
                            <button 
                                key=${z.optionId||z.id||String(z)}
                                class="agent-request-btn ${z.kind==="allow_once"||z.kind==="allow_always"?"primary":""}"
                                onClick=${()=>D(z.optionId||z.id||z)}
                            >
                                ${z.name||z.label||z.optionId||z.id||String(z)}
                            </button>
                        `):N`
                        <button class="agent-request-btn primary" onClick=${()=>D("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>D("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${E}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}k0();k0();T_();function P6(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>P6($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${P6(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function vV(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:P6(j)})).filter(($)=>$.value)}function mk(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function Yj(_){if(!Array.isArray(_))return[];return _.filter(mk)}function H8(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let G=P6(j);return G?`Card submission: ${$} — ${G}`:`Card submission: ${$}`}if(typeof j==="object"){let Y=vV(j).map(({key:X,value:Z})=>`${X}: ${Z}`);return Y.length>0?`Card submission: ${$} — ${Y.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function mV(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=vV(_.data),G=j.length>0?j.slice(0,2).map(({key:X,value:Z})=>`${X}: ${Z}`).join(", "):P6(_.data)||null,Y=j.length;return{title:$,summary:G,fields:j,fieldCount:Y,submittedAt:_.submitted_at}}function P_(_){return typeof _==="string"?_.trim():""}function cV(_){return _.map(($)=>String($||"").trim()).filter(Boolean).join(`

`).replace(/\n{3,}/g,`

`).trim()}function ck(_,$){let j=[],G=[],Y=[];if(_.forEach((X,Z)=>{if(!X||typeof X!=="object")return;let L=P_(X.type);if(L==="text"){let V=P_(X.text)||P_(X.content);if(V)j.push(V);return}if(L==="resource_link"){let V=P_(X.uri),q=P_(X.title)||P_(X.name)||V;if(V&&q)j.push(q===V?V:`[${q}](${V})`);return}if(L==="resource"){let V=P_(X.title)||P_(X.name)||P_(X.uri)||"Embedded resource",q=P_(X.text);if(q)j.push(`### ${V}

\`\`\`
${q}
\`\`\``);else j.push(`### ${V}`);return}if(L==="generated_widget"){let V=P_(X.title)||P_(X.name)||"Generated widget",q=P_(X.description)||P_(X.subtitle);j.push(cV([`### ${V}`,q]));return}if(L==="adaptive_card"&&P_(X.fallback_text)){j.push(P_(X.fallback_text));return}if(L==="adaptive_card_submission"){let V=H8(X);if(P_(V))j.push(P_(V));return}if(L==="file"){let V=P_(X.name)||P_(X.filename)||P_(X.title)||`attachment:${$[Z]??Z+1}`;G.push(`- ${V}`);return}if(L==="image"||!L){let V=P_(X.name)||P_(X.filename)||P_(X.title)||`attachment:${$[Z]??Z+1}`;Y.push(`- ${V}`)}}),Y.length>0)j.push(`Images:
${Y.join(`
`)}`);if(G.length>0)j.push(`Attachments:
${G.join(`
`)}`);return cV(j)}function W8(_){let $=_?.data||{},j=typeof $.content==="string"?$.content.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd():"";if(j.trim())return j;let G=Array.isArray($.content_blocks)?$.content_blocks:[],Y=Array.isArray($.media_ids)?$.media_ids:[];return ck(G,Y)}function hV(_,$,j){try{return _.setAttribute($,j),!0}catch(G){return!1}}function lV(_,$){try{return _[$]=!0,!0}catch(j){return!1}}function pV(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;if(hV(j,"aria-disabled","true"),hV(j,"tabindex","-1"),"disabled"in j)lV(j,"disabled");if("readOnly"in j)lV(j,"readOnly")}}function hk(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let G=j[1].length===3?j[1].split("").map((Y)=>`${Y}${Y}`).join(""):j[1];return{r:parseInt(G.slice(0,2),16),g:parseInt(G.slice(2,4),16),b:parseInt(G.slice(4,6),16)}}function lk(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let G=Number(j[1]),Y=Number(j[2]),X=Number(j[3]);if(![G,Y,X].every((Z)=>Number.isFinite(Z)))return null;return{r:G,g:Y,b:X}}function rV(_){return hk(_)||lk(_)}function O8(_){let $=(X)=>{let Z=X/255;return Z<=0.03928?Z/12.92:((Z+0.055)/1.055)**2.4},j=$(_.r),G=$(_.g),Y=$(_.b);return 0.2126*j+0.7152*G+0.0722*Y}function pk(_,$){let j=Math.max(O8(_),O8($)),G=Math.min(O8(_),O8($));return(j+0.05)/(G+0.05)}function rk(_,$,j="#ffffff"){let G=rV(_);if(!G)return j;let Y=j,X=-1;for(let Z of $){let L=rV(Z);if(!L)continue;let V=pk(G,L);if(V>X)Y=Z,X=V}return Y}function Xj(){let _=getComputedStyle(document.documentElement),$=(U,H)=>{for(let D of U){let E=_.getPropertyValue(D).trim();if(E)return E}return H},j=$(["--text-primary","--color-text"],"#0f1419"),G=$(["--text-secondary","--color-text-muted"],"#536471"),Y=$(["--bg-primary","--color-bg-primary"],"#ffffff"),X=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),Z=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),L=$(["--accent-color","--color-accent"],"#1d9bf0"),V=$(["--success-color","--color-success"],"#00ba7c"),q=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),K=$(["--danger-color","--color-error"],"#f4212e"),Q=$(["--border-color","--color-border"],"#eff3f4"),F=$(["--font-family"],"system-ui, sans-serif"),B=rk(L,[j,Y],j);return{fg:j,fgMuted:G,bgPrimary:Y,bg:X,bgEmphasis:Z,accent:L,good:V,warning:q,attention:K,border:Q,fontFamily:F,buttonTextColor:B}}function nV(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:G,accent:Y,good:X,warning:Z,attention:L,border:V,fontFamily:q}=Xj();return{fontFamily:q,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Y,subtle:Y},good:{default:X,subtle:X},warning:{default:Z,subtle:Z},attention:{default:L,subtle:L}}},emphasis:{backgroundColor:G,foregroundColors:{default:{default:_,subtle:$},accent:{default:Y,subtle:Y},good:{default:X,subtle:X},warning:{default:Z,subtle:Z},attention:{default:L,subtle:L}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:V},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var nk=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),dV=!1,z8=null,oV=!1;function Zj(_){_.querySelector(".adaptive-card-notice")?.remove()}function dk(_,$,j="error"){Zj(_);let G=document.createElement("div");G.className=`adaptive-card-notice adaptive-card-notice-${j}`,G.textContent=$,_.appendChild(G)}function ok(_,$=(j)=>X1(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function ik(_=($)=>X1($,null)){return($,j)=>{try{let G=ok($,_);j.outputHtml=G.outputHtml,j.didProcess=G.didProcess}catch(G){console.error("[adaptive-card] Failed to process markdown:",G),j.outputHtml=String($??""),j.didProcess=!1}}}function sk(_){if(oV||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=ik(),oV=!0}async function ak(){if(dV)return;if(z8)return z8;return z8=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{dV=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),z8}function tk(){return globalThis.AdaptiveCards}function ek(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function _M(_){return nk.has(_)}function qj(_){if(!Array.isArray(_))return[];return _.filter(ek)}function $M(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",G=(typeof _?.url==="string"?_.url:"")||void 0,Y=_?.data??void 0;return{type:$,title:j,data:Y,url:G,raw:_}}function Lj(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>Lj($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,G])=>`${j}: ${Lj(G)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function jM(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return Lj($);return typeof $==="string"?$:String($)}function GM(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,G=(Y)=>{if(Array.isArray(Y))return Y.map((L)=>G(L));if(!Y||typeof Y!=="object")return Y;let Z={...Y};if(typeof Z.id==="string"&&Z.id in j&&String(Z.type||"").startsWith("Input."))Z.value=jM(Z.type,j[Z.id],Z);for(let[L,V]of Object.entries(Z))if(Array.isArray(V)||V&&typeof V==="object")Z[L]=G(V);return Z};return G(_)}function YM(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function XM(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,G=j&&typeof j.title==="string"?j.title.trim():"",Y=YM(_.completed_at||j?.submitted_at),X=[G||null,Y||null].filter(Boolean).join(" · ")||null;return{label:$,detail:X}}async function iV(_,$,j){if(!_M($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await ak()}catch(G){return console.error("[adaptive-card] Failed to load SDK:",G),!1}try{let G=tk();sk(G);let Y=new G.AdaptiveCard,X=Xj();Y.hostConfig=new G.HostConfig(nV());let Z=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,L=$.state==="active"?$.payload:GM($.payload,Z);Y.parse(L),Y.onExecuteAction=(K)=>{let Q=$M(K);if(j?.onAction)Zj(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(Q)).catch((F)=>{console.error("[adaptive-card] Action failed:",F);let B=F instanceof Error?F.message:String(F||"Action failed.");dk(_,B||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",Q)};let V=Y.render();if(!V)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",X.buttonTextColor);let q=XM($);if(q){_.classList.add("adaptive-card-finished");let K=document.createElement("div");K.className=`adaptive-card-status adaptive-card-status-${$.state}`;let Q=document.createElement("span");if(Q.className="adaptive-card-status-label",Q.textContent=q.label,K.appendChild(Q),q.detail){let F=document.createElement("span");F.className="adaptive-card-status-detail",F.textContent=q.detail,K.appendChild(F)}_.appendChild(K)}if(Zj(_),_.appendChild(V),q)pV(V);return!0}catch(G){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,G),!1}}k0();h2();function sV({src:_,onClose:$}){return g(()=>{let j=(G)=>{if(G.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),N`
        <${o$} className="image-modal-portal-root">
            <div class="image-modal" onClick=${$}>
                <img src=${_} alt="Full size" />
            </div>
        </${o$}>
    `}var A8=0,Vj=null,R6={activePostId:null,speaking:!1},Qj=new Set;function Bj(_={}){return _.window??(typeof window<"u"?window:null)}function aV(_={}){return Bj(_)?.speechSynthesis||null}function Kj(){let _={...R6};for(let $ of Qj)try{$(_)}catch(j){console.warn("[post-speech] playback listener failed:",j)}}function Fj(){return{...R6}}function tV(_){if(typeof _!=="function")return()=>{};return Qj.add(_),_(Fj()),()=>Qj.delete(_)}function eV(_={}){let $=Bj(_);return Boolean($&&$.speechSynthesis&&typeof $.SpeechSynthesisUtterance==="function")}function _Q(_){let $=W8(_);if(!$)return"";return String($).replace(/```[\s\S]*?```/g," Code block omitted. ").replace(/`([^`]+)`/g,"$1").replace(/!\[([^\]]*)\]\(([^)]+)\)/g,"$1").replace(/\[([^\]]+)\]\(([^)]+)\)/g,"$1").replace(/^#{1,6}\s+/gm,"").replace(/^>\s?/gm,"").replace(/^[-*+]\s+/gm,"• ").replace(/\n{3,}/g,`

`).replace(/\n\n+/g,". ").replace(/\s+/g," ").replace(/\s+([.,;:!?])/g,"$1").trim().slice(0,1600)}function $Q(_={}){let $=aV(_);if(A8+=1,Vj=null,R6={activePostId:null,speaking:!1},$)try{$.cancel()}catch(j){console.warn("[post-speech] cancel failed:",j)}Kj()}function jQ(_,$,j={}){let G=Bj(j),Y=aV(j);if(!G||!Y||typeof G.SpeechSynthesisUtterance!=="function")return!1;let X=String($||"").trim();if(!X)return!1;let Z=A8+1;A8=Z;try{Y.cancel()}catch{}let L=new G.SpeechSynthesisUtterance(X);Vj=L,R6={activePostId:_,speaking:!0},Kj();let V=()=>{if(Z!==A8)return;Vj=null,R6={activePostId:null,speaking:!1},Kj()};L.onend=V,L.onerror=V;try{return Y.speak(L),!0}catch(q){return console.warn("[post-speech] speak failed:",q),V(),!1}}async function YQ(_,$){try{return await _?.writeText?.($),!0}catch(j){return!1}}function Nj(_,$){let j=typeof $?.text==="string"?$.text:"",G=typeof $?.html==="string"?$.html:"";if(!_||!j||typeof _.createElement!=="function"||typeof _.execCommand!=="function")return!1;let Y=null,X=!1,Z=(L)=>{let V=L?.clipboardData;if(!V||typeof V.setData!=="function")return;if(V.setData("text/plain",j),G)V.setData("text/html",G);if(typeof L.preventDefault==="function")L.preventDefault();X=!0};try{if(Y=_.createElement("textarea"),Y.value=j,typeof Y.setAttribute==="function")Y.setAttribute("readonly","");if(Y.style)Y.style.position="fixed",Y.style.opacity="0",Y.style.pointerEvents="none";if(_.body?.appendChild?.(Y),typeof Y.select==="function")Y.select();if(typeof Y.setSelectionRange==="function")Y.setSelectionRange(0,Y.value.length);_.addEventListener?.("copy",Z,!0);let L=_.execCommand("copy");return Boolean(X||L)}catch{return!1}finally{if(_.removeEventListener?.("copy",Z,!0),Y)_.body?.removeChild?.(Y)}}function GQ(_){if(!_||typeof _!=="object")return null;let $=_;if(typeof $.nodeType==="number"&&$.nodeType===3)return $.parentNode||null;return $}function XQ(_,$){let j=_?.clipboardData,G=$?.root,Y=$?.selection;if(!j||typeof j.setData!=="function"||!G||!Y)return!1;if(Y.isCollapsed)return!1;let X=!1;if(Number(Y.rangeCount||0)>0&&typeof Y.getRangeAt==="function")try{let V=Y.getRangeAt(0);if(V&&typeof V.intersectsNode==="function")X=Boolean(V.intersectsNode(G))}catch{X=!1}if(!X&&typeof G.contains==="function"){let V=GQ(Y.anchorNode),q=GQ(Y.focusNode);X=Boolean(V&&G.contains(V)||q&&G.contains(q))}if(!X)return!1;let L=typeof Y.toString==="function"?String(Y.toString()||"").replace(/\u00a0/g," "):"";if(!L)return!1;return j.setData("text/plain",L),_?.preventDefault?.(),!0}function ZQ(_,$){try{return Boolean(_?.getItem?.($))}catch(j){return!1}}function LQ(_,$,j){try{return _?.setItem?.($,j),!0}catch(G){return!1}}function qQ(_,$){let j=typeof _==="string"&&_.trim()?_.trim():null;if(j)return j;if(!$)return null;try{return new URL($).hostname}catch(G){return $}}function ZM({mediaId:_,onPreview:$}){let[j,G]=C(null);if(g(()=>{R2(_).then(G).catch((q)=>{console.warn("[post] Failed to load attachment metadata for file card:",_,q)})},[_]),!j)return null;let Y=j.filename||"file",X=j.metadata?.size,Z=X?t_(X):"",V=C6(j.content_type,j.filename)!=="unsupported";return N`
        <div class="file-attachment" onClick=${(q)=>q.stopPropagation()}>
            <a href=${b1(_)} download=${Y} class="file-attachment-main">
                <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
                <div class="file-info">
                    <span class="file-name">${Y}</span>
                    <span class="file-meta-row">
                        ${Z&&N`<span class="file-size">${Z}</span>`}
                        ${j.content_type&&N`<span class="file-size">${j.content_type}</span>`}
                    </span>
                </div>
                <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
            </a>
            ${V&&N`
                <button
                    class="file-attachment-preview"
                    type="button"
                    onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),$?.({mediaId:_,info:j})}}
                >
                    Preview
                </button>
            `}
        </div>
    `}function LM(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="recovery_marker"&&$.recovered)}function qM(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="timeout_marker"&&($.timed_out??!0))}function VM(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="turn_outcome_marker")}function QM(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="peer_message")}function KM(_){return String(_||"").split(/[:/]/).filter(Boolean).pop()||"agent"}function VQ(_){let $=QM(_)[0]||null;if(!$)return null;let j=typeof $.source_chat_jid==="string"?$.source_chat_jid.trim():"",G=typeof $.source_agent_name==="string"&&$.source_agent_name.trim()?$.source_agent_name.trim():KM(j),Y=typeof $.target_chat_jid==="string"?$.target_chat_jid.trim():"",X=typeof $.target_agent_name==="string"?$.target_agent_name.trim():"",Z=typeof $.body==="string"?$.body:"";return{block:$,sourceChatJid:j,sourceAgentName:G,targetChatJid:Y,targetAgentName:X,body:Z}}function BM(_,$){let j=VQ($),G=typeof _==="string"?_:"";if(!j)return G;if(j.body&&j.body.trim())return j.body;let Y=j.sourceAgentName?j.sourceAgentName.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):"[^\\s>]+",X=j.sourceChatJid?j.sourceChatJid.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):"[^>\\n]+";return G.replace(new RegExp(`^from:\\s+@${Y}\\s+<jid:${X}>\\s*\\n\\n`,"i"),"")||G}var FM={context_recover:"context limit exceeded",rate_limit:"rate limit hit",api_error:"API error",timeout:"request timeout",overloaded:"service overloaded",connection:"connection error"};function NM(_){let $=Number(_?.attempts_used||0),j=String(_?.classifier||"").trim(),G=FM[j]||(j?j.replace(/_/g," "):""),Y=["Recovered automatically"];if($>1)Y[0]=`Recovered after ${$} attempts`;if(G)Y.push(G);return Y.join(" — ")}function UM(_){let $=typeof _?.tool_action_summary==="string"?_.tool_action_summary.trim():"",j=_?.draft_recovered?" Showing recovered draft.":"";return $?`Turn timed out — ${$}${j}`:`Turn timed out before the model finished responding${j}`}function EM({marker:_}){let[$,j]=C(!1),G=f((Q)=>{Q.stopPropagation(),j((F)=>!F)},[]),Y=typeof _?.title==="string"?_.title.trim():"",X=typeof _?.detail==="string"?_.detail.trim():"",Z=typeof _?.tool_action_summary==="string"?_.tool_action_summary.trim():"",L=_?.draft_recovered,V=String(_?.severity||"warning"),q=Z||Y||String(_?.label||_?.kind||"issue"),K=Boolean(X||Y&&Z);return N`
        <div class=${`post-outcome-pill post-outcome-pill-${V}`}>
            <div class="post-outcome-pill-header" onClick=${K?G:void 0}>
                ${K&&N`
                    <span class="post-outcome-pill-toggle" aria-hidden="true">${a1($?"down":"right")}</span>
                `}
                <span class="post-outcome-pill-label">${q}</span>
                ${L&&N`<span class="post-outcome-pill-badge">draft recovered</span>`}
            </div>
            ${$&&K&&N`
                <div class="post-outcome-pill-detail">
                    ${Y&&N`<div><strong>${Y}</strong></div>`}
                    ${X&&X!==Y&&N`<div>${X}</div>`}
                </div>
            `}
        </div>
    `}function DM({attachment:_,onPreview:$}){let j=Number(_?.id),[G,Y]=C(null);g(()=>{if(!Number.isFinite(j))return;R2(j).then(Y).catch((K)=>{console.warn("[post] Failed to load attachment metadata for attachment pill:",j,K)});return},[j]);let X=G?.filename||_.label||`attachment-${_.id}`,Z=Number.isFinite(j)?b1(j):null,L=C6(G?.content_type,G?.filename||_?.label),V=U8(L),q=L!=="unsupported";return N`
        <span class="attachment-pill" title=${X}>
            ${Z?N`
                    <a href=${Z} download=${X} class="attachment-pill-main" onClick=${(K)=>K.stopPropagation()}>
                        <${q1}
                            prefix="post"
                            label=${_.label}
                            title=${X}
                        />
                    </a>
                `:N`
                    <${q1}
                        prefix="post"
                        label=${_.label}
                        title=${X}
                    />
                `}
            ${Number.isFinite(j)&&G&&q&&N`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${V}
                    onClick=${(K)=>{K.preventDefault(),K.stopPropagation(),$?.({mediaId:j,info:G})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function J8({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:G}=_,Y=G?x4(G):null;return N`
        <div class="content-annotations">
            ${$&&$.length>0&&N`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&N`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${Y&&N`
                <span class="content-annotation">Updated: ${Y}</span>
            `}
        </div>
    `}function HM({block:_}){let $=_.title||_.name||_.uri,j=_.description,G=_.size?t_(_.size):"",Y=_.mime_type||"",X=zM(Y),Z=k4(_.uri);return N`
        <a
            href=${Z||"#"}
            class="resource-link"
            target=${Z?"_blank":void 0}
            rel=${Z?"noopener noreferrer":void 0}
            onClick=${(L)=>L.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${X}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&N`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${Y&&N`<span>${Y}</span>`}
                    ${G&&N`<span>${G}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function WM({block:_}){let[$,j]=C(!1),G=_.uri||"Embedded resource",Y=_.text||"",X=Boolean(_.data),Z=_.mime_type||"";return N`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(L)=>{L.preventDefault(),L.stopPropagation(),j(!$)}}>
                ${a1($?"down":"right")} ${G}
            </button>
            ${$&&N`
                ${Y&&N`<pre class="resource-embed-content">${Y}</pre>`}
                ${X&&N`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${Z&&N`<span class="resource-embed-blob-meta">${Z}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(L)=>{L.preventDefault(),L.stopPropagation();let V=new Blob([Uint8Array.from(atob(_.data),(Q)=>Q.charCodeAt(0))],{type:Z||"application/octet-stream"}),q=URL.createObjectURL(V),K=document.createElement("a");K.href=q,K.download=G.split("/").pop()||"resource",K.click(),URL.revokeObjectURL(q)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function OM({block:_,post:$,onOpenWidget:j}){if(!_)return null;let G=a9(_,$),Y=bq(_),X=G?.artifact?.kind||_?.artifact?.kind||_?.kind||null,Z=G?.title||_.title||_.name||"Generated widget",L=G?.description||_.description||_.subtitle||"",V=_.open_label||"Open widget",q=u(!1),K=(Q)=>{if(Q)Q.preventDefault(),Q.stopPropagation();if(!G)return;j?.(G)};return g(()=>{if(!_?.auto_open||!G||!Y||q.current)return;let Q=$?.timestamp?new Date($.timestamp).getTime():0;if(Q&&Date.now()-Q>1e4)return;let F=`widget_opened_${_.widget_id||$?.id||""}`;if(ZQ(sessionStorage,F))return;q.current=!0,LQ(sessionStorage,F,"1"),j?.(G)},[_?.auto_open,G,Y]),N`
        <div class="generated-widget-launch" onClick=${(Q)=>Q.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${X?` • ${String(X).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${Z}</div>
            </div>
            ${L&&N`<div class="generated-widget-launch-description">${L}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!Y}
                    onClick=${K}
                    title=${Y?"Open widget in a floating pane with a zen-mode toggle":"Unsupported widget artifact"}
                >
                    ${V}
                </button>
                <span class="generated-widget-launch-note">
                    ${Y?"Opens in a dismissible floating pane with a zen-mode toggle.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function zM(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function AM(_){let $=k4(_,{allowDataImage:!0});return $?{backgroundImage:`url("${$}")`}:void 0}function JM({preview:_}){let $=k4(_.url),j=AM(_.image),G=qQ(_.site_name,$);return N`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(Y)=>Y.stopPropagation()}
            style=${j}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${G||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&N`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function kM(_,$){return typeof _==="string"?_:""}var QQ=1800,MM=40,TM=24576,yM=16,wM=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,IM=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,xM=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`,CM=`
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
</style>`;function PM(_,$={}){let j=typeof _==="string"?_:"",G=j?j.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`):[],Y=new TextEncoder().encode(j).byteLength,X=Number.isFinite($.lineThreshold)?$.lineThreshold:MM,Z=Number.isFinite($.byteThreshold)?$.byteThreshold:TM,L=G.length>X||Y>Z,V=Math.min(G.length,Number.isFinite($.previewLines)?$.previewLines:yM);return{shouldCollapse:L,lineCount:G.length,byteLength:Y,visibleLines:V,omittedLines:Math.max(0,G.length-V)}}async function KQ(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(Nj(document,{text:$}))return!0;if(await YQ(navigator.clipboard,$))return!0;try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let G=document.execCommand("copy");return document.body.removeChild(j),G}catch{return!1}}async function RM(_){let $=typeof _==="string"?_:"";if(!$)return!1;let j=X1($,null),G=`<html><head>${CM}</head><body>${j}</body></html>`;if(Nj(document,{text:$,html:G}))return!0;if(navigator.clipboard?.write&&typeof ClipboardItem<"u")try{let Y=new ClipboardItem({"text/plain":new Blob([$],{type:"text/plain"}),"text/html":new Blob([G],{type:"text/html"})});return await navigator.clipboard.write([Y]),!0}catch(Y){console.warn("[post] Rich clipboard write failed, falling back to plain text copy.",Y)}return KQ($)}function fM(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Z)=>Z.querySelector("code"));if($.length===0)return()=>{};let j=new Map,G=[],Y=(Z)=>{let L=window.getSelection?.();if(!L||L.isCollapsed)return;for(let V of $)if(XQ(Z,{root:V,selection:L}))return};document.addEventListener("copy",Y,!0),G.push(()=>document.removeEventListener("copy",Y,!0));let X=(Z,L)=>{let V=L||"idle";if(Z.dataset.copyState=V,V==="success")Z.innerHTML=IM,Z.setAttribute("aria-label","Copied"),Z.setAttribute("title","Copied"),Z.classList.add("is-success"),Z.classList.remove("is-error");else if(V==="error")Z.innerHTML=xM,Z.setAttribute("aria-label","Copy failed"),Z.setAttribute("title","Copy failed"),Z.classList.add("is-error"),Z.classList.remove("is-success");else Z.innerHTML=wM,Z.setAttribute("aria-label","Copy code"),Z.setAttribute("title","Copy code"),Z.classList.remove("is-success","is-error")};return $.forEach((Z)=>{let L=document.createElement("div");L.className="post-code-block";let V=Z.querySelector("code"),q=PM(V?.textContent||"");if(q.shouldCollapse){L.classList.add("post-code-block-collapsed"),L.style.setProperty("--post-code-preview-lines",String(q.visibleLines));let F=document.createElement("button");F.type="button",F.className="post-code-expand-btn";let B=()=>{let H=L.classList.contains("post-code-block-expanded");F.innerHTML=H?`${jj("up")} <span>Collapse output</span>`:`${jj("right")} <span>Expand output · ${q.lineCount.toLocaleString()} lines · ${t_(q.byteLength)}${q.omittedLines?` · ${q.omittedLines.toLocaleString()} hidden`:""}</span>`,F.setAttribute("aria-expanded",H?"true":"false")},U=(H)=>{H.preventDefault(),H.stopPropagation(),L.classList.toggle("post-code-block-expanded"),B()};F.addEventListener("click",U),B(),L.appendChild(F),G.push(()=>F.removeEventListener("click",U))}Z.parentNode?.insertBefore(L,Z),L.appendChild(Z);let K=document.createElement("button");K.type="button",K.className="post-code-copy-btn",X(K,"idle"),L.appendChild(K);let Q=async(F)=>{F.preventDefault(),F.stopPropagation();let U=Z.querySelector("code")?.textContent||"",H=await KQ(U);X(K,H?"success":"error");let D=j.get(K);if(D)clearTimeout(D);let E=setTimeout(()=>{X(K,"idle"),j.delete(K)},QQ);j.set(K,E)};K.addEventListener("click",Q),G.push(()=>{K.removeEventListener("click",Q);let F=j.get(K);if(F)clearTimeout(F);if(L.parentNode)L.parentNode.insertBefore(Z,L),L.remove()})}),()=>{G.forEach((Z)=>Z())}}function BQ(_){let $=String(_||"").trim(),j=$.match(/^`([^`]+)`$/);return(j?j[1]:$).trim()}function SM(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Files:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){G=q;break}if(G===-1)return{content:_,fileRefs:[]};let Y=[],X=G+1;for(;X<j.length;X+=1){let q=j[X];if(/^\s*-\s+/.test(q)){let K=BQ(q.replace(/^\s*-\s+/,"").trim());if(K)Y.push(K)}else if(!q.trim())break;else break}if(Y.length===0)return{content:_,fileRefs:[]};let Z=j.slice(0,G),L=j.slice(X),V=[...Z,...L].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,fileRefs:Y}}function gM(_){if(!_)return{content:_,folderRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Folders:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){G=q;break}if(G===-1)return{content:_,folderRefs:[]};let Y=[],X=G+1;for(;X<j.length;X+=1){let q=j[X];if(/^\s*-\s+/.test(q)){let K=BQ(q.replace(/^\s*-\s+/,"").trim());if(K)Y.push(K)}else if(!q.trim())break;else break}if(Y.length===0)return{content:_,folderRefs:[]};let Z=j.slice(0,G),L=j.slice(X),V=[...Z,...L].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,folderRefs:Y}}function uM(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Referenced messages:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){G=q;break}if(G===-1)return{content:_,messageRefs:[]};let Y=[],X=G+1;for(;X<j.length;X+=1){let q=j[X];if(/^\s*-\s+/.test(q)){let Q=q.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(Q)Y.push(Q[1])}else if(!q.trim())break;else break}if(Y.length===0)return{content:_,messageRefs:[]};let Z=j.slice(0,G),L=j.slice(X),V=[...Z,...L].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,messageRefs:Y}}function bM(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let q=0;q<j.length;q+=1){let K=j[q].trim();if((K==="Images:"||K==="Attachments:")&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){G=q;break}}if(G===-1)return{content:_,attachments:[]};let Y=[],X=G+1;for(;X<j.length;X+=1){let q=j[X];if(/^\s*-\s+/.test(q)){let K=q.replace(/^\s*-\s+/,"").trim(),Q=K.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||K.match(/^attachment:([^\s]+)\s+(.+)$/i);if(Q){let F=Q[1],B=(Q[2]||"").trim()||F;Y.push({id:F,label:B,raw:K})}else Y.push({id:null,label:K,raw:K})}else if(!q.trim())break;else break}if(Y.length===0)return{content:_,attachments:[]};let Z=j.slice(0,G),L=j.slice(X),V=[...Z,...L].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,attachments:Y}}function vM(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function mM(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let G=j.map(vM).sort((K,Q)=>Q.length-K.length),Y=new RegExp(`(${G.join("|")})`,"gi"),X=new RegExp(`^(${G.join("|")})$`,"i"),Z=new DOMParser().parseFromString(_,"text/html"),L=Z.createTreeWalker(Z.body,NodeFilter.SHOW_TEXT),V=[],q;while(q=L.nextNode())V.push(q);for(let K of V){let Q=K.nodeValue;if(!Q||!Y.test(Q)){Y.lastIndex=0;continue}Y.lastIndex=0;let F=K.parentElement;if(F&&F.closest("code, pre, script, style"))continue;let B=Q.split(Y).filter((H)=>H!=="");if(B.length===0)continue;let U=Z.createDocumentFragment();for(let H of B)if(X.test(H)){let D=Z.createElement("mark");D.className="search-highlight-term",D.textContent=H,U.appendChild(D)}else U.appendChild(Z.createTextNode(H));K.parentNode.replaceChild(U,K)}return Z.body.innerHTML}function FQ({post:_,onClick:$,onHashtagClick:j,onMessageRef:G,onScrollToMessage:Y,agentName:X,agentAvatarUrl:Z,userName:L,userAvatarUrl:V,userAvatarBackground:q,onDelete:K,isThreadReply:Q,isThreadPrev:F,isThreadNext:B,isRemoving:U,highlightQuery:H,onFileRef:D,onOpenWidget:E,onOpenAttachmentPreview:M}){let[z,O]=C(null),[x,I]=C("idle"),[A,k]=C(()=>Fj()),W=u(null),T=u(null),y=_.data,J=y.type==="agent_response",P=L||"You",R=J?X||HV:P,b=typeof _.chat_agent_name==="string"?_.chat_agent_name.trim():"",c=Boolean(J&&H&&b&&b!==R),r=J?_j(X,Z,!0):_j(P,V),e=typeof q==="string"?q.trim().toLowerCase():"",m=!J&&r.image&&(e==="clear"||e==="transparent"),_0=J&&Boolean(r.image),H0=`background-color: ${m||_0?"transparent":r.color}`,Y0=y.content_meta,j0=Boolean(Y0?.truncated),L0=Boolean(Y0?.preview),F0=j0&&!L0,h=j0?{originalLength:Number.isFinite(Y0?.original_length)?Y0.original_length:y.content?y.content.length:0,maxLength:Number.isFinite(Y0?.max_length)?Y0.max_length:0}:null,$0=y.content_blocks||[],V0=y.media_ids||[],O0=VQ($0),a=Boolean(O0?.sourceAgentName),X0=kM(y.content,y.link_previews);X0=BM(X0,$0);let{content:W0,fileRefs:P0}=SM(X0),{content:p0,folderRefs:u0}=gM(W0),{content:Y_,messageRefs:l0}=uM(p0),a0=(d)=>{d?.preventDefault?.(),d?.stopPropagation?.(),G?.(_.id,_.chat_jid||null)},R0=(d)=>{if(d.key==="Enter"||d.key===" ")a0(d)},{content:i0,attachments:m0}=bM(Y_);X0=i0;let e0=qj($0),s0=Yj($0),X_=LM($0)[0]||null,z0=qM($0)[0]||null,o0=VM($0)[0]||null,H_=e0.length===1&&typeof e0[0]?.fallback_text==="string"?e0[0].fallback_text.trim():"",E0=s0.length===1?H8(s0[0]).trim():"",g0=Boolean(H_)&&X0?.trim()===H_||Boolean(E0)&&X0?.trim()===E0,x0=Boolean(X0)&&!F0&&!g0,n0=typeof H==="string"?H.trim():"",A_=Z0(()=>{if(!X0||g0)return"";let d=X1(X0,j);return n0?mM(d,n0):d},[X0,g0,n0]),Q_=Z0(()=>W8(_),[_]),E_=Z0(()=>eV(),[]),N_=Z0(()=>_Q(_),[_]),J_=Boolean(A.speaking&&A.activePostId===_.id),x_=(d,B0)=>{d.stopPropagation(),O(b1(B0))},R_=(d)=>{M?.(d)},W_=(d)=>{d.stopPropagation(),K?.(_)},s_=async(d)=>{d.stopPropagation();let B0=await RM(Q_);if(I(B0?"success":"error"),T.current)clearTimeout(T.current);T.current=setTimeout(()=>{T.current=null,I("idle")},QQ)},f_=(d)=>{if(d.stopPropagation(),J_){$Q();return}jQ(_.id,N_)},q0=(d,B0)=>{let r0=new Set;if(!d||B0.length===0)return{content:d,usedIds:r0};return{content:d.replace(/attachment:([^\s)"']+)/g,(S_,U1,b_,A1)=>{let C_=U1.replace(/^\/+/,""),J1=B0.find((M_)=>M_.name&&M_.name.toLowerCase()===C_.toLowerCase()&&!r0.has(M_.id))||B0.find((M_)=>!r0.has(M_.id));if(!J1)return S_;if(r0.add(J1.id),A1.slice(Math.max(0,b_-2),b_)==="](")return`/media/${J1.id}`;return J1.name||"attachment"}),usedIds:r0}},v=[],n=[],s=[],G0=[],N0=[],T0=[],J0=[],M0=0;if($0.length>0)$0.forEach((d)=>{if(d?.type==="text"&&d.annotations)J0.push(d.annotations);if(d?.type==="generated_widget")T0.push(d);else if(d?.type==="resource_link")G0.push(d);else if(d?.type==="resource")N0.push(d);else if(d?.type==="file"){let B0=V0[M0++];if(B0)n.push(B0),s.push({id:B0,name:d?.name||d?.filename||d?.title})}else if(d?.type==="image"||!d?.type){let B0=V0[M0++];if(B0){let r0=typeof d?.mime_type==="string"?d.mime_type:void 0;v.push({id:B0,annotations:d?.annotations,mimeType:r0}),s.push({id:B0,name:d?.name||d?.filename||d?.title})}}});else if(V0.length>0){let d=m0.length>0;V0.forEach((B0,r0)=>{let G_=m0[r0]||null;if(s.push({id:B0,name:G_?.label||null}),d)n.push(B0);else v.push({id:B0,annotations:null})})}if(m0.length>0)m0.forEach((d)=>{if(!d?.id)return;let B0=s.find((r0)=>String(r0.id)===String(d.id));if(B0&&!B0.name)B0.name=d.label});let{content:y0,usedIds:h0}=q0(X0,s);X0=y0;let S0=v.filter(({id:d})=>!h0.has(d)),d0=n.filter((d)=>!h0.has(d)),__=m0.length>0?m0.map((d,B0)=>({id:d.id||`attachment-${B0+1}`,label:d.label||`attachment-${B0+1}`})):s.map((d,B0)=>({id:d.id,label:d.name||`attachment-${B0+1}`})),I0=Z0(()=>qj($0),[$0]),w0=Z0(()=>Yj($0),[$0]),D_=Z0(()=>{return I0.map((d)=>`${d.card_id}:${d.state}`).join("|")},[I0]);g(()=>{if(!W.current)return;return W$(W.current),fM(W.current)},[A_]),g(()=>{return tV((d)=>{k(d)})},[]),g(()=>()=>{if(T.current)clearTimeout(T.current)},[]);let $_=u(null);return g(()=>{if(!$_.current||I0.length===0)return;let d=$_.current;d.innerHTML="";for(let B0 of I0){let r0=document.createElement("div");d.appendChild(r0),iV(r0,B0,{onAction:async(G_)=>{if(G_.type==="Action.OpenUrl"){let S_=k4(G_.url||"");if(!S_)throw Error("Invalid URL");window.open(S_,"_blank","noopener,noreferrer");return}if(G_.type==="Action.Submit"){await m7({post_id:_.id,thread_id:y.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:B0.card_id,action:{type:G_.type,title:G_.title||"",data:G_.data}});return}console.warn("[post] unsupported adaptive card action:",G_.type,G_)}}).catch((G_)=>{console.error("[post] adaptive card render error:",G_),r0.textContent=B0.fallback_text||"Card failed to render."})}},[D_,_.id]),N`
        <div id=${`post-${_.id}`} class="post ${J?"agent-post":""} ${Q?"thread-reply":""} ${F?"thread-prev":""} ${B?"thread-next":""} ${U?"removing":""}" onClick=${$}>
            <div class="post-avatar ${J?"agent-avatar":""} ${r.image?"has-image":""}" style=${H0}>
                ${r.image?N`<img src=${r.image} alt=${R} />`:r.letter}
            </div>
            <div class="post-body">
                <div class="post-actions">
                    ${J&&E_&&N_&&N`
                        <button
                            class=${`post-action-btn post-speak-btn${J_?" is-active":""}`}
                            type="button"
                            title=${J_?"Stop reading aloud":"Read aloud"}
                            aria-label=${J_?"Stop reading aloud":"Read aloud"}
                            onClick=${f_}
                        >
                            ${J_?N`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="6" y="6" width="12" height="12" rx="2"></rect></svg>`:N`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18 6a8.5 8.5 0 0 1 0 12"></path></svg>`}
                        </button>
                    `}
                    <button
                        class=${`post-action-btn post-copy-btn${x==="success"?" is-success":x==="error"?" is-error":""}`}
                        type="button"
                        title=${x==="success"?"Copied":x==="error"?"Copy failed":"Copy message"}
                        aria-label=${x==="success"?"Copied":x==="error"?"Copy failed":"Copy message"}
                        onClick=${s_}
                        disabled=${!Q_}
                    >
                        ${x==="success"?N`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 6L9 17l-5-5"></path></svg>`:x==="error"?N`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9"></circle><path d="M9 9l6 6M15 9l-6 6"></path></svg>`:N`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="9" y="9" width="10" height="10" rx="2"></rect><path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path></svg>`}
                    </button>
                    <button
                        class="post-action-btn post-delete-btn"
                        type="button"
                        title="Delete message"
                        aria-label="Delete message"
                        onClick=${W_}
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="post-meta">
                    <span class="post-author">${R}</span>
                    ${a&&N`
                        <span
                            class="post-chat-agent-tag"
                            title=${`From ${O0?.sourceChatJid||""}`.trim()}
                        >
                            @${O0?.sourceAgentName}
                        </span>
                    `}
                    ${c&&N`
                        <span
                            class="post-chat-agent-tag"
                            role="button"
                            tabIndex="0"
                            style="cursor:pointer"
                            title=${`Open ${b} and reference this message`}
                            onClick=${a0}
                            onKeyDown=${R0}
                        >
                            @${b}
                        </span>
                    `}
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${a0}>${$Z(_.timestamp)}</a>
                    ${X_&&N`
                        <span
                            class="post-recovery-chip"
                            title=${NM(X_)}
                        >
                            recovered
                        </span>
                    `}
                    ${z0&&N`
                        <span
                            class="post-recovery-chip post-timeout-chip"
                            title=${UM(z0)}
                        >
                            timeout
                        </span>
                    `}
                    ${o0&&N`
                        <span
                            class=${`post-recovery-chip post-outcome-chip post-outcome-chip-${String(o0.severity||"warning")}${o0.kind==="tool_budget"?" post-outcome-chip-tool-budget":""}`}
                            title=${String(o0.label||o0.kind||"issue")}
                        >
                            ${String(o0.label||o0.kind||"issue")}
                        </span>
                    `}
                </div>
                ${o0&&N`
                    <${EM} marker=${o0} />
                `}
                ${F0&&h&&N`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${D6(h.originalLength)} chars
                            ${h.maxLength?N` • Display limit: ${D6(h.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${L0&&h&&N`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${D6(h.maxLength)} of ${D6(h.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(P0.length>0||u0.length>0||l0.length>0||__.length>0)&&N`
                    <div class="post-file-refs">
                        ${l0.map((d)=>{let B0=(r0)=>{if(r0.preventDefault(),r0.stopPropagation(),Y)Y(d,_.chat_jid||null);else{let G_=document.getElementById("post-"+d);if(G_)G_.scrollIntoView({behavior:"smooth",block:"center"}),G_.classList.add("post-highlight"),setTimeout(()=>G_.classList.remove("post-highlight"),2000)}};return N`
                                <a href=${`#msg-${d}`} class="post-msg-pill-link" onClick=${B0}>
                                    <${q1}
                                        prefix="post"
                                        label=${"msg:"+d}
                                        title=${"Message "+d}
                                        icon="message"
                                        onClick=${B0}
                                    />
                                </a>
                            `})}
                        ${P0.map((d)=>{let B0=d.split("/").pop()||d;return N`
                                <${q1}
                                    prefix="post"
                                    label=${B0}
                                    title=${d}
                                    onClick=${()=>D?.(d)}
                                />
                            `})}
                        ${u0.map((d)=>{let B0=d.split("/").pop()||d;return N`
                                <${q1}
                                    prefix="post"
                                    label=${B0}
                                    title=${d}
                                    icon="folder"
                                />
                            `})}
                        ${__.map((d)=>N`
                            <${DM}
                                key=${d.id}
                                attachment=${d}
                                onPreview=${R_}
                            />
                        `)}
                    </div>
                `}
                ${x0&&N`
                    <div 
                        ref=${W}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:A_}}
                        onClick=${(d)=>{if(d.target.classList.contains("hashtag")){d.preventDefault(),d.stopPropagation();let B0=d.target.dataset.hashtag;if(B0)j?.(B0)}else if(d.target.tagName==="IMG")d.preventDefault(),d.stopPropagation(),O(d.target.src)}}
                    />
                `}
                ${I0.length>0&&N`
                    <div ref=${$_} class="post-adaptive-cards" />
                `}
                ${w0.length>0&&N`
                    <div class="post-adaptive-card-submissions">
                        ${w0.map((d,B0)=>{let r0=mV(d),G_=`${d.card_id}-${B0}`;return N`
                                <div key=${G_} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${r0.title}</span>
                                        </div>
                                    </div>
                                    ${r0.fields.length>0&&N`
                                        <div class="adaptive-card-submission-fields">
                                            ${r0.fields.map((S_)=>N`
                                                <span class="adaptive-card-submission-field" title=${`${S_.key}: ${S_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${S_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${S_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${x4(r0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${T0.length>0&&N`
                    <div class="generated-widget-launches">
                        ${T0.map((d,B0)=>N`
                            <${OM}
                                key=${d.widget_id||d.id||`${_.id}-widget-${B0}`}
                                block=${d}
                                post=${_}
                                onOpenWidget=${E}
                            />
                        `)}
                    </div>
                `}
                ${J0.length>0&&N`
                    ${J0.map((d,B0)=>N`
                        <${J8} key=${B0} annotations=${d} />
                    `)}
                `}
                ${S0.length>0&&N`
                    <div class="media-preview">
                        ${S0.map(({id:d,mimeType:B0})=>{let G_=typeof B0==="string"&&B0.toLowerCase().startsWith("image/svg")?b1(d):h7(d);return N`
                                <img
                                    key=${d}
                                    src=${G_}
                                    alt="Media"
                                    loading="lazy"
                                    decoding="async"
                                    onClick=${(S_)=>x_(S_,d)}
                                />
                            `})}
                    </div>
                `}
                ${S0.length>0&&N`
                    ${S0.map(({annotations:d},B0)=>N`
                        ${d&&N`<${J8} key=${B0} annotations=${d} />`}
                    `)}
                `}
                ${d0.length>0&&N`
                    <div class="file-attachments">
                        ${d0.map((d)=>N`
                            <${ZM} key=${d} mediaId=${d} onPreview=${R_} />
                        `)}
                    </div>
                `}
                ${G0.length>0&&N`
                    <div class="resource-links">
                        ${G0.map((d,B0)=>N`
                            <div key=${B0}>
                                <${HM} block=${d} />
                                <${J8} annotations=${d.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${N0.length>0&&N`
                    <div class="resource-embeds">
                        ${N0.map((d,B0)=>N`
                            <div key=${B0}>
                                <${WM} block=${d} />
                                <${J8} annotations=${d.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${y.link_previews?.length>0&&N`
                    <div class="link-previews">
                        ${y.link_previews.map((d,B0)=>N`
                            <${JM} key=${B0} preview=${d} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${z&&N`<${sV} src=${z} onClose=${()=>O(null)} />`}

    `}function NQ({posts:_,hasMore:$,onLoadMore:j,onPostClick:G,onHashtagClick:Y,onMessageRef:X,onScrollToMessage:Z,onFileRef:L,onOpenWidget:V,onOpenAttachmentPreview:q,emptyMessage:K,timelineRef:Q,agents:F,user:B,onDeletePost:U,reverse:H=!0,removingPostIds:D,searchQuery:E}){let[M,z]=C(!1),O=u(null),x=typeof IntersectionObserver<"u",I=f(async()=>{if(!j||!$||M)return;z(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{z(!1)}},[$,M,j]),A=f((b)=>{let{scrollTop:c,scrollHeight:r,clientHeight:e}=b.target,m=H?r-e-c:c,_0=Math.max(300,e);if(m<_0)I()},[H,I]);g(()=>{if(!x)return;let b=O.current,c=Q?.current;if(!b||!c)return;let r=300,e=new IntersectionObserver((m)=>{for(let _0 of m){if(!_0.isIntersecting)continue;I()}},{root:c,rootMargin:`${r}px 0px ${r}px 0px`,threshold:0});return e.observe(b),()=>e.disconnect()},[x,$,j,Q,I]);let k=u(I);if(k.current=I,g(()=>{if(x)return;if(!Q?.current)return;let{scrollTop:b,scrollHeight:c,clientHeight:r}=Q.current,e=H?c-r-b:b,m=Math.max(300,r);if(e<m)k.current?.()},[x,_,$,H,Q]),g(()=>{if(!Q?.current)return;if(!$||M)return;let{scrollTop:b,scrollHeight:c,clientHeight:r}=Q.current,e=H?c-r-b:b,m=Math.max(300,r);if(c<=r+1||e<m)k.current?.()},[_,$,M,H,Q]),!_)return N`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return N`
            <div class="timeline" ref=${Q}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${K||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let W=_.slice().sort((b,c)=>b.id-c.id),T=(b)=>{let c=b?.data?.thread_id;if(c===null||c===void 0||c==="")return null;let r=Number(c);return Number.isFinite(r)?r:null},y=new Map;for(let b=0;b<W.length;b+=1){let c=W[b],r=Number(c?.id),e=T(c);if(e!==null){let m=y.get(e)||{anchorIndex:-1,replyIndexes:[]};m.replyIndexes.push(b),y.set(e,m)}else if(Number.isFinite(r)){let m=y.get(r)||{anchorIndex:-1,replyIndexes:[]};m.anchorIndex=b,y.set(r,m)}}let J=new Map;for(let[b,c]of y.entries()){let r=new Set;if(c.anchorIndex>=0)r.add(c.anchorIndex);for(let e of c.replyIndexes)r.add(e);J.set(b,Array.from(r).sort((e,m)=>e-m))}let P=W.map((b,c)=>{let r=T(b);if(r===null)return{hasThreadPrev:!1,hasThreadNext:!1};let e=J.get(r);if(!e||e.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let m=e.indexOf(c);if(m<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:m>0,hasThreadNext:m<e.length-1}}),R=N`<div class="timeline-sentinel" ref=${O}></div>`;return N`
        <div class="timeline ${H?"reverse":"normal"}" ref=${Q} onScroll=${A}>
            <div class="timeline-content">
                ${H?R:null}
                ${W.map((b,c)=>{let r=Boolean(b.data?.thread_id&&b.data.thread_id!==b.id),e=D?.has?.(b.id),m=P[c]||{};return N`
                    <${FQ}
                        key=${b.id}
                        post=${b}
                        isThreadReply=${r}
                        isThreadPrev=${m.hasThreadPrev}
                        isThreadNext=${m.hasThreadNext}
                        isRemoving=${e}
                        highlightQuery=${E}
                        agentName=${WV(b.data?.agent_id,F||{})}
                        agentAvatarUrl=${OV(b.data?.agent_id,F||{})}
                        userName=${B?.name||B?.user_name}
                        userAvatarUrl=${B?.avatar_url||B?.avatarUrl||B?.avatar}
                        userAvatarBackground=${B?.avatar_background||B?.avatarBackground}
                        onClick=${()=>G?.(b)}
                        onHashtagClick=${Y}
                        onMessageRef=${X}
                        onScrollToMessage=${Z}
                        onFileRef=${L}
                        onOpenWidget=${V}
                        onDelete=${U}
                        onOpenAttachmentPreview=${q}
                    />
                `})}
                ${H?null:R}
            </div>
        </div>
    `}k0();T_();function UQ(_){try{return _?.focus?.(),_?.select?.(),!0}catch($){return!1}}var k8="workspaceExplorerScale",cM=["compact","default","comfortable"],hM=new Set(cM),lM={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function EQ(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return hM.has(j)?j:$}function Uj(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),G=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||G&&j}}function pM(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function rM(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function Ej(_={}){let $=pM(_),j=_.stored?EQ(_.stored,$):$;return rM(j,_)}function DQ(_){return lM[EQ(_)]}z9();function nM(_){if(!_||_.kind!=="text")return!1;let $=Number(_.size);return!Number.isFinite($)||$<=262144}function Dj(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let G=$({path:j,mode:"edit"});if(!G||typeof G!=="object")return!1;return G.id!=="editor"}function HQ(_,$,j={}){let G=j.resolvePane;if(Dj(_,G))return!0;return nM($)}var JQ=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function dM(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return Dj($,(j)=>q_.resolve(j))}function kQ(_,$,j,G=0,Y=[]){if(!j&&JQ(_))return Y;if(!_)return Y;if(Y.push({node:_,depth:G}),_.type==="dir"&&_.children&&$.has(_.path))for(let X of _.children)kQ(X,$,j,G+1,Y);return Y}function WQ(_,$,j){if(!_)return"";let G=[],Y=(X)=>{if(!j&&JQ(X))return;if(G.push(X.type==="dir"?`d:${X.path}`:`f:${X.path}`),X.children&&$?.has(X.path))for(let Z of X.children)Y(Z)};return Y(_),G.join("|")}function zj(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,G=Array.isArray($.children)?$.children:null;if(!G)return _;let Y=j?new Map(j.map((L)=>[L?.path,L])):new Map,X=!j||j.length!==G.length,Z=G.map((L)=>{let V=zj(Y.get(L.path),L);if(V!==Y.get(L.path))X=!0;return V});return X?{...$,children:Z}:_}function Wj(_,$,j){if(!_)return _;if(_.path===$)return zj(_,j);if(!Array.isArray(_.children))return _;let G=!1,Y=_.children.map((X)=>{let Z=Wj(X,$,j);if(Z!==X)G=!0;return Z});return G?{..._,children:Y}:_}var MQ=4,Hj=14,oM=16;function TQ(_){if(!_)return 0;if(_.type==="file"){let G=Math.max(0,Number(_.size)||0);return _.__bytes=G,G}let $=Array.isArray(_.children)?_.children:[],j=0;for(let G of $)j+=TQ(G);return _.__bytes=j,j}function yQ(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),G={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=MQ)return G;let Y=Array.isArray(_.children)?_.children:[],X=[];for(let L of Y){let V=Math.max(0,Number(L?.__bytes??L?.size??0));if(V<=0)continue;if(L.type==="dir")X.push({kind:"dir",node:L,size:V});else X.push({kind:"file",name:L.name,path:L.path,size:V})}X.sort((L,V)=>V.size-L.size);let Z=X;if(X.length>Hj){let L=X.slice(0,Hj-1),V=X.slice(Hj-1),q=V.reduce((K,Q)=>K+Q.size,0);L.push({kind:"other",name:`+${V.length} more`,path:`${G.path}/[other]`,size:q}),Z=L}return G.children=Z.map((L)=>{if(L.kind==="dir")return yQ(L.node,$+1);return{name:L.name,path:L.path,size:L.size,children:[]}}),G}function OQ(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function wQ(_,$,j){let G=((_+Math.PI/2)*180/Math.PI+360)%360,Y=j?Math.max(30,70-$*10):Math.max(34,66-$*8),X=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${G.toFixed(1)} ${Y}% ${X}%)`}function M8(_,$,j,G){return{x:_+j*Math.cos(G),y:$+j*Math.sin(G)}}function Aj(_,$,j,G,Y,X){let Z=Math.PI*2-0.0001,L=X-Y>Z?Y+Z:X,V=M8(_,$,G,Y),q=M8(_,$,G,L),K=M8(_,$,j,L),Q=M8(_,$,j,Y),F=L-Y>Math.PI?1:0;return[`M ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,`A ${G} ${G} 0 ${F} 1 ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,`L ${K.x.toFixed(3)} ${K.y.toFixed(3)}`,`A ${j} ${j} 0 ${F} 0 ${Q.x.toFixed(3)} ${Q.y.toFixed(3)}`,"Z"].join(" ")}var IQ={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function xQ(_,$,j){let G=[],Y=[],X=Math.max(0,Number($)||0),Z=(L,V,q,K)=>{let Q=Array.isArray(L?.children)?L.children:[];if(!Q.length)return;let F=Math.max(0,Number(L.size)||0);if(F<=0)return;let B=q-V,U=V;Q.forEach((H,D)=>{let E=Math.max(0,Number(H.size)||0);if(E<=0)return;let M=E/F,z=U,O=D===Q.length-1?q:U+B*M;if(U=O,O-z<0.003)return;let x=IQ[K];if(x){let I=wQ(z,K,j);if(G.push({key:H.path,path:H.path,label:H.name,size:E,color:I,depth:K,startAngle:z,endAngle:O,innerRadius:x[0],outerRadius:x[1],d:Aj(120,120,x[0],x[1],z,O)}),K===1)Y.push({key:H.path,name:H.name,size:E,pct:X>0?E/X*100:0,color:I})}if(K<MQ)Z(H,z,O,K+1)})};return Z(_,-Math.PI/2,Math.PI*3/2,1),{segments:G,legend:Y}}function Oj(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let G of j){let Y=Oj(G,$);if(Y)return Y}return null}function CQ(_,$,j,G){if(!j||j<=0)return{segments:[],legend:[]};let Y=IQ[1];if(!Y)return{segments:[],legend:[]};let X=-Math.PI/2,Z=Math.PI*3/2,L=wQ(X,1,G),q=`${$||"."}/[files]`;return{segments:[{key:q,path:q,label:_,size:j,color:L,depth:1,startAngle:X,endAngle:Z,innerRadius:Y[0],outerRadius:Y[1],d:Aj(120,120,Y[0],Y[1],X,Z)}],legend:[{key:q,name:_,size:j,pct:100,color:L}]}}function zQ(_,$=!1,j=!1){if(!_)return null;let G=TQ(_),Y=yQ(_,0),X=Y.size||G,{segments:Z,legend:L}=xQ(Y,X,j);if(!Z.length&&X>0){let V=CQ("[files]",Y.path,X,j);Z=V.segments,L=V.legend}return{root:Y,totalSize:X,segments:Z,legend:L,truncated:$,isDarkTheme:j}}function iM({payload:_}){if(!_)return null;let[$,j]=C(null),[G,Y]=C(_?.root?.path||"."),[X,Z]=C(()=>[_?.root?.path||"."]),[L,V]=C(!1);g(()=>{let T=_?.root?.path||".";Y(T),Z([T]),j(null)},[_?.root?.path,_?.totalSize]),g(()=>{if(!G)return;V(!0);let T=setTimeout(()=>V(!1),180);return()=>clearTimeout(T)},[G]);let q=Z0(()=>{return Oj(_.root,G)||_.root},[_?.root,G]),K=q?.size||_.totalSize||0,{segments:Q,legend:F}=Z0(()=>{let T=xQ(q,K,_.isDarkTheme);if(T.segments.length>0)return T;if(K<=0)return T;let y=q?.children?.length?"Total":"[files]";return CQ(y,q?.path||_?.root?.path||".",K,_.isDarkTheme)},[q,K,_.isDarkTheme,_?.root?.path]),[B,U]=C(Q),H=u(new Map),D=u(0);g(()=>{let T=H.current,y=new Map(Q.map((b)=>[b.key,b])),J=performance.now(),P=220,R=(b)=>{let c=Math.min(1,(b-J)/220),r=c*(2-c),e=Q.map((m)=>{let H0=T.get(m.key)||{startAngle:m.startAngle,endAngle:m.startAngle,innerRadius:m.innerRadius,outerRadius:m.innerRadius},Y0=($0,V0)=>$0+(V0-$0)*r,j0=Y0(H0.startAngle,m.startAngle),L0=Y0(H0.endAngle,m.endAngle),F0=Y0(H0.innerRadius,m.innerRadius),h=Y0(H0.outerRadius,m.outerRadius);return{...m,d:Aj(120,120,F0,h,j0,L0)}});if(U(e),c<1)D.current=requestAnimationFrame(R)};if(D.current)cancelAnimationFrame(D.current);return D.current=requestAnimationFrame(R),H.current=y,()=>{if(D.current)cancelAnimationFrame(D.current)}},[Q]);let E=B.length?B:Q,M=K>0?t_(K):"0 B",z=q?.name||"",x=(z&&z!=="."?z:"Total")||"Total",I=M,A=X.length>1,k=(T)=>{if(!T?.path)return;let y=Oj(_.root,T.path);if(!y||!Array.isArray(y.children)||y.children.length===0)return;Z((J)=>[...J,y.path]),Y(y.path),j(null)},W=()=>{if(!A)return;Z((T)=>{let y=T.slice(0,-1);return Y(y[y.length-1]||_?.root?.path||"."),y}),j(null)};return N`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${L?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${q?.path||_?.root?.path||"."}`}
                data-segments=${E.length}
                data-base-size=${K}>
                ${E.map((T)=>N`
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
                        <title>${T.label} — ${t_(T.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${A?" is-drill":""}`}
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
            ${F.length>0&&N`
                <div class="workspace-folder-starburst-legend">
                    ${F.slice(0,8).map((T)=>N`
                        <div key=${T.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${T.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${T.name}>${T.name}</span>
                            <span class="workspace-folder-starburst-size">${t_(T.size)}</span>
                            <span class="workspace-folder-starburst-pct">${T.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&N`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function AQ(_){if(typeof document>"u"||!_)return;let $=document.createElement("a");$.href=_,$.setAttribute("download",""),$.rel="noopener",$.style.display="none",document.body.appendChild($),$.click(),$.remove()}function PQ(_){switch(_?.state){case"indexing":return"Indexing workspace…";case"ready":return"Workspace index ready";case"stale":return"Workspace index may be stale";case"failed":return"Workspace index failed";case"never_indexed":return"Workspace index not built yet";default:return"Checking workspace index…"}}function sM(_){if(!_)return"Workspace index status";let $=[PQ(_)];if(_.last_indexed_at)$.push(`Last indexed: ${_.last_indexed_at}`);if(typeof _.indexed_file_count==="number")$.push(`Indexed files: ${_.indexed_file_count}`);if(Array.isArray(_.roots)&&_.roots.length)$.push(`Roots: ${_.roots.join(", ")}`);if(_.last_error)$.push(`Error: ${_.last_error}`);return $.join(`
`)}function aM(_){let $=_?.target;if($&&typeof $==="object")return $;return $?.parentElement||null}function tM(_){return Boolean(_?.closest?.(".workspace-node-icon, .workspace-label-text"))}function eM(_,$=null){let j=aM(_),G=j?.closest?.(".workspace-row");if(!G)return null;let Y=G.dataset.type,X=G.dataset.path;if(!X||X===".")return null;if($===X)return null;let Z=_?.touches?.[0];if(!Z)return null;return{type:Y,path:X,dragPath:tM(j)?X:null,startX:Z.clientX,startY:Z.clientY}}function RQ({onFileSelect:_,onFolderSelect:$,visible:j=!0,active:G=void 0,onOpenEditor:Y,onOpenTerminalTab:X,onOpenVncTab:Z,onToggleTerminal:L,terminalVisible:V=!1}){let[q,K]=C(null),[Q,F]=C(new Set(["."])),[B,U]=C(null),[H,D]=C(null),[E,M]=C(""),[z,O]=C(null),[,x]=C(null),[I,A]=C(!0),[k,W]=C(!1),[T,y]=C(null),[J,P]=C(()=>E$("workspaceShowHidden",!1)),[R,b]=C(!1),[c,r]=C(null),[e,m]=C(null),[_0,H0]=C(null),[Y0,j0]=C(!1),[L0,F0]=C(null),[h,$0]=C(null),[V0,O0]=C(null),[a,X0]=C(!1),[W0,P0]=C(()=>k5()),[p0,u0]=C(()=>OQ()),[Y_,l0]=C(()=>Ej({stored:O1(k8),...Uj()})),[a0,R0]=C(!1),i0=Math.max(15000,(Number(W0?.refreshIntervalSec)||60)*1000),m0=Math.max(0,Number(W0?.folderPreviewDepth)||0),e0=u(Q),s0=u(""),U_=u(null),X_=u(0),c0=u(new Set),z0=u(null),L_=u(null),o0=u(new Map),H_=u(_),E0=u($),g0=u(Y),x0=u(null),n0=u(null),A_=u(null),Q_=u(null),E_=u(null),N_=u(null),J_=u("."),x_=u(0),R_=u({path:null,dragging:!1,startX:0,startY:0}),W_=u({path:null,dragging:!1,startX:0,startY:0}),s_=u({path:null,timer:0}),f_=u(!1),q0=u(0),v=u(new Map),n=u(null),s=u(null),G0=u(null),N0=u(null),T0=u(null),J0=u(null),M0=u(J),y0=u(j),h0=u(G??j),S0=u(0),d0=u(_0),__=u(R),I0=u(c),w0=u(null),D_=u({x:0,y:0}),$_=u(0),d=u(null),B0=u(B),r0=u(H),G_=u(null),S_=u(z);H_.current=_,E0.current=$,g0.current=Y,g(()=>{e0.current=Q},[Q]),g(()=>{M0.current=J},[J]),g(()=>{y0.current=j},[j]),g(()=>{h0.current=G??j},[G,j]),g(()=>{d0.current=_0},[_0]);let U1=f(()=>{if(!x_.current)return;clearTimeout(x_.current),x_.current=0},[]);g(()=>()=>U1(),[U1]),g(()=>{if(typeof window>"u")return;let S=()=>{l0(Ej({stored:O1(k8),...Uj()}))};S();let p=()=>S(),o=()=>S(),t=(D0)=>{if(!D0||D0.key===null||D0.key===k8)S()};window.addEventListener("resize",p),window.addEventListener("focus",o),window.addEventListener("storage",t);let U0=window.matchMedia?.("(pointer: coarse)"),Q0=window.matchMedia?.("(hover: none)"),A0=(D0,t0)=>{if(!D0)return;if(D0.addEventListener)D0.addEventListener("change",t0);else if(D0.addListener)D0.addListener(t0)},C0=(D0,t0)=>{if(!D0)return;if(D0.removeEventListener)D0.removeEventListener("change",t0);else if(D0.removeListener)D0.removeListener(t0)};return A0(U0,p),A0(Q0,p),()=>{window.removeEventListener("resize",p),window.removeEventListener("focus",o),window.removeEventListener("storage",t),C0(U0,p),C0(Q0,p)}},[]),g(()=>{if(typeof window>"u")return;let S=()=>{P0(k5())},p=(U0)=>{if(!U0||U0.key===null||U0.key===a2||U0.key===t2)S()},o=()=>S(),t=(U0)=>{let Q0=U0?.detail?.settings;if(Q0&&typeof Q0==="object"){P0({refreshIntervalSec:Number(Q0.refreshIntervalSec)||60,folderPreviewDepth:Math.max(0,Number(Q0.folderPreviewDepth)||0)});return}S()};return window.addEventListener("focus",o),window.addEventListener("storage",p),window.addEventListener(s2,t),()=>{window.removeEventListener("focus",o),window.removeEventListener("storage",p),window.removeEventListener(s2,t)}},[]),g(()=>{let S=(p)=>{let o=p?.detail?.path;if(!o)return;let t=o.split("/"),U0=[];for(let Q0=1;Q0<t.length;Q0++)U0.push(t.slice(0,Q0).join("/"));if(U0.length)F((Q0)=>{let A0=new Set(Q0);A0.add(".");for(let C0 of U0)A0.add(C0);return A0});U(o),requestAnimationFrame(()=>{let Q0=document.querySelector(`[data-path="${CSS.escape(o)}"]`);if(Q0)Q0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",S),()=>window.removeEventListener("workspace-reveal-path",S)},[]),g(()=>{__.current=R},[R]),g(()=>{I0.current=c},[c]),g(()=>{B0.current=B},[B]),g(()=>{r0.current=H},[H]),g(()=>{S_.current=z},[z]),g(()=>{if(typeof window>"u"||typeof document>"u")return;let S=()=>u0(OQ());S();let p=window.matchMedia?.("(prefers-color-scheme: dark)"),o=()=>S();if(p?.addEventListener)p.addEventListener("change",o);else if(p?.addListener)p.addListener(o);let t=typeof MutationObserver<"u"?new MutationObserver(()=>S()):null;if(t?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)t?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(p?.removeEventListener)p.removeEventListener("change",o);else if(p?.removeListener)p.removeListener(o);t?.disconnect()}},[]),g(()=>{if(!H)return;let S=E_.current;if(!S)return;let p=requestAnimationFrame(()=>{UQ(S)});return()=>cancelAnimationFrame(p)},[H]),g(()=>{if(!a0)return;let S=(o)=>{let t=o?.target;if(!(t instanceof Element))return;if(T0.current?.contains(t))return;if(J0.current?.contains(t))return;R0(!1)},p=(o)=>{if(o?.key==="Escape")R0(!1),J0.current?.focus?.()};return document.addEventListener("mousedown",S),document.addEventListener("touchstart",S,{passive:!0}),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",S),document.removeEventListener("touchstart",S),document.removeEventListener("keydown",p)}},[a0]);let b_=async(S,p={})=>{let o=Boolean(p?.autoOpen),t=String(S||"").trim();W(!0),O(null),x(null);try{let U0=await d7(t,20000);if(o&&t&&HQ(t,U0,{resolvePane:(Q0)=>q_.resolve(Q0)}))return g0.current?.(t,U0),U0;return O(U0),U0}catch(U0){let Q0={error:U0.message||"Failed to load preview"};return O(Q0),Q0}finally{W(!1)}};x0.current=b_;let A1=f(async()=>{try{let S=await r7("all");return O0(S),S}catch(S){return console.warn("[workspace-explorer] Failed to load workspace index status:",S),null}},[]);L_.current=A1;let C_=f(()=>{L_.current?.()},[]),k_=async()=>{if(!y0.current)return;try{let S=await F6("",1,M0.current),p=WQ(S.root,e0.current,M0.current);if(p===s0.current){A(!1);return}if(s0.current=p,U_.current=S.root,!X_.current)X_.current=requestAnimationFrame(()=>{X_.current=0,K((o)=>zj(o,U_.current)),A(!1)})}catch(S){y(S.message||"Failed to load workspace"),A(!1)}},J1=async(S)=>{if(!S)return;if(c0.current.has(S))return;c0.current.add(S);try{let p=await F6(S,1,M0.current);K((o)=>Wj(o,S,p.root))}catch(p){y(p.message||"Failed to load workspace")}finally{c0.current.delete(S)}};n0.current=J1;let O_=f(()=>{let S=B;if(!S)return".";let p=o0.current?.get(S);if(p&&p.type==="dir")return p.path;if(S==="."||!S.includes("/"))return".";let o=S.split("/");return o.pop(),o.join("/")||"."},[B]),M_=f((S)=>{let p=S?.closest?.(".workspace-row");if(!p)return null;let o=p.dataset.path,t=p.dataset.type;if(!o)return null;if(t==="dir")return o;if(o.includes("/")){let U0=o.split("/");return U0.pop(),U0.join("/")||"."}return"."},[]),k1=f((S)=>{return M_(S?.target||null)},[M_]),p_=f((S)=>{d0.current=S,H0(S)},[]),a_=f(()=>{let S=s_.current;if(S?.timer)clearTimeout(S.timer);s_.current={path:null,timer:0}},[]),e_=f((S)=>{if(!S||S==="."){a_();return}let p=o0.current?.get(S);if(!p||p.type!=="dir"){a_();return}if(e0.current?.has(S)){a_();return}if(s_.current?.path===S)return;a_();let o=setTimeout(()=>{s_.current={path:null,timer:0},n0.current?.(S),F((t)=>{let U0=new Set(t);return U0.add(S),U0})},600);s_.current={path:S,timer:o}},[a_]),F_=f((S,p)=>{if(D_.current={x:S,y:p},$_.current)return;$_.current=requestAnimationFrame(()=>{$_.current=0;let o=w0.current;if(!o)return;let t=D_.current;o.style.transform=`translate(${t.x+12}px, ${t.y+12}px)`})},[]),I1=f((S)=>{if(!S)return;let o=(o0.current?.get(S)?.name||S.split("/").pop()||S).trim();if(!o)return;m({path:S,label:o})},[]),E1=f(()=>{if(m(null),$_.current)cancelAnimationFrame($_.current),$_.current=0;if(w0.current)w0.current.style.transform="translate(-9999px, -9999px)"},[]),v1=f((S)=>{if(!S)return".";let p=o0.current?.get(S);if(p&&p.type==="dir")return p.path;if(S==="."||!S.includes("/"))return".";let o=S.split("/");return o.pop(),o.join("/")||"."},[]),M1=f(()=>{D(null),M("")},[]),$$=f((S)=>{if(!S)return;let o=(o0.current?.get(S)?.name||S.split("/").pop()||S).trim();if(!o||S===".")return;D(S),M(o)},[]),p4=f(async()=>{let S=r0.current;if(!S)return;let p=(E||"").trim();if(!p){M1();return}let o=o0.current?.get(S),t=(o?.name||S.split("/").pop()||S).trim();if(p===t){M1();return}try{let Q0=(await s7(S,p))?.path||S,A0=S.includes("/")?S.split("/").slice(0,-1).join("/")||".":".";if(M1(),y(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:S,newPath:Q0,type:o?.type||"file"}})),o?.type==="dir")F((C0)=>{let D0=new Set;for(let t0 of C0)if(t0===S)D0.add(Q0);else if(t0.startsWith(`${S}/`))D0.add(`${Q0}${t0.slice(S.length)}`);else D0.add(t0);return D0});if(U(Q0),o?.type==="dir")O(null),W(!1),x(null);else x0.current?.(Q0);n0.current?.(A0),C_()}catch(U0){y(U0?.message||"Failed to rename file")}},[M1,E,C_]),M$=f(async(S)=>{let t=S||".";for(let U0=0;U0<50;U0+=1){let A0=`untitled${U0===0?"":`-${U0}`}.md`;try{let D0=(await i7(t,A0,""))?.path||(t==="."?A0:`${t}/${A0}`);if(t&&t!==".")F((t0)=>new Set([...t0,t]));U(D0),y(null),n0.current?.(t),x0.current?.(D0),C_();return}catch(C0){if(C0?.status===409||C0?.code==="file_exists")continue;y(C0?.message||"Failed to create file");return}}y("Failed to create file (untitled name already in use).")},[]),_1=f((S)=>{if(S?.stopPropagation?.(),Y0)return;let p=v1(B0.current);M$(p)},[Y0,v1,M$]);g(()=>{if(typeof window>"u")return;let S=(p)=>{let o=p?.detail?.updates||[];if(!Array.isArray(o)||o.length===0)return;K((C0)=>{let D0=C0;for(let t0 of o){if(!t0?.root)continue;if(!D0||t0.path==="."||!t0.path)D0=t0.root;else D0=Wj(D0,t0.path,t0.root)}if(D0)s0.current=WQ(D0,e0.current,M0.current);return A(!1),D0});let t=B0.current;if(Boolean(t)&&o.some((C0)=>{let D0=C0?.path||"";if(!D0||D0===".")return!0;return t===D0||t.startsWith(`${D0}/`)||D0.startsWith(`${t}/`)}))v.current.clear();if(C_(),!t||!S_.current)return;let Q0=o0.current?.get(t);if(Q0&&Q0.type==="dir")return;if(o.some((C0)=>{let D0=C0?.path||"";if(!D0||D0===".")return!0;return t===D0||t.startsWith(`${D0}/`)}))x0.current?.(t)};return window.addEventListener("workspace-update",S),()=>window.removeEventListener("workspace-update",S)},[]),z0.current=k_;let c_=u(()=>{if(typeof window>"u")return;let S=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),p=h0.current??y0.current,o=document.visibilityState!=="hidden"&&(p||S.matches&&y0.current);N6(o,M0.current).catch((t)=>{console.debug("[workspace-explorer] Workspace visibility ping failed.",t,{visible:o,showHidden:M0.current})})}).current,T1=u(0),D1=u(()=>{if(T1.current)clearTimeout(T1.current);T1.current=setTimeout(()=>{T1.current=0,c_()},250)}).current;g(()=>{if(y0.current)z0.current?.(),L_.current?.();D1()},[j,G]),g(()=>{z0.current(),L_.current?.();let S=setInterval(()=>{z0.current(),L_.current?.()},i0);return()=>clearInterval(S)},[i0]),g(()=>{c_();let S=z4("previewHeight",null),p=Number.isFinite(S)?Math.min(Math.max(S,80),600):280;if(q0.current=p,A_.current)A_.current.style.setProperty("--preview-height",`${p}px`);let o=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),t=()=>D1();if(o.addEventListener)o.addEventListener("change",t);else if(o.addListener)o.addListener(t);return document.addEventListener("visibilitychange",t),()=>{if(X_.current)cancelAnimationFrame(X_.current),X_.current=0;if(o.removeEventListener)o.removeEventListener("change",t);else if(o.removeListener)o.removeListener(t);if(document.removeEventListener("visibilitychange",t),T1.current)clearTimeout(T1.current),T1.current=0;N6(!1,M0.current).catch((U0)=>{console.debug("[workspace-explorer] Workspace visibility teardown ping failed.",U0,{showHidden:M0.current})})}},[]);let j1=Z0(()=>kQ(q,Q,J),[q,Q,J]),T$=Z0(()=>new Map(j1.map((S)=>[S.node.path,S.node])),[j1]),y$=Z0(()=>DQ(Y_),[Y_]);o0.current=T$;let y_=(B?o0.current.get(B):null)?.type==="dir";g(()=>{if(!B||!y_){$0(null),n.current=null,s.current=null;return}if(m0<=0){$0({loading:!1,error:null,payload:null,disabled:!0}),n.current=null,s.current=null;return}let S=B,p=`${J?"hidden":"visible"}:${m0}:${B}`,o=v.current,t=o.get(p);if(t?.root){o.delete(p),o.set(p,t);let A0=zQ(t.root,Boolean(t.truncated),p0);if(A0)n.current=A0,s.current=B,$0({loading:!1,error:null,payload:A0,disabled:!1});return}let U0=n.current,Q0=s.current;$0({loading:!0,error:null,payload:Q0===B?U0:null,disabled:!1}),F6(B,m0,J).then((A0)=>{if(B0.current!==S)return;let C0={root:A0?.root,truncated:Boolean(A0?.truncated)};o.delete(p),o.set(p,C0);while(o.size>oM){let t0=o.keys().next().value;if(!t0)break;o.delete(t0)}let D0=zQ(C0.root,C0.truncated,p0);n.current=D0,s.current=B,$0({loading:!1,error:null,payload:D0,disabled:!1})}).catch((A0)=>{if(B0.current!==S)return;$0({loading:!1,error:A0?.message||"Failed to load folder size chart",payload:Q0===B?U0:null,disabled:!1})})},[B,y_,J,p0,m0]);let V1=Boolean(z&&z.kind==="text"&&!y_&&(!z.size||z.size<=262144)),w$=V1?"Open in editor":z?.size>262144?"File too large to edit":"File is not editable",r4=Boolean(B&&!y_&&dM(B)),G$=Boolean(B&&B!=="."),n4=Boolean(B&&!y_),d4=Boolean(B&&!y_),I$=B&&y_?g2(B,J):null,x$=PQ(V0),m1=sM(V0),c1=V0?.state||"never_indexed",o4=c1!=="ready",Q1=f(()=>R0(!1),[]),g_=f(async(S)=>{Q1();try{await S?.()}catch(p){console.warn("[workspace-explorer] Header menu action failed:",p)}},[Q1]),i4=f(async(S)=>{S?.stopPropagation?.(),X0(!0),O0((p)=>({scope:"all",last_indexed_at:p?.last_indexed_at||null,last_error:null,indexed_file_count:p?.indexed_file_count||0,roots:p?.roots||[],updated_at:p?.updated_at||null,state:"indexing"}));try{let p=await n7("all");O0(p),y(null),s0.current="",z0.current?.()}catch(p){let o=p?.message||"Failed to reindex workspace";O0((t)=>({scope:"all",last_indexed_at:t?.last_indexed_at||null,last_error:o,indexed_file_count:t?.indexed_file_count||0,roots:t?.roots||[],updated_at:t?.updated_at||null,state:"failed"})),y(o)}finally{X0(!1)}},[]);g(()=>{let S=G0.current;if(N0.current)N0.current.dispose(),N0.current=null;if(!S)return;if(S.innerHTML="",!B||y_||!z||z.error)return;let p={path:B,content:typeof z.text==="string"?z.text:void 0,mtime:z.mtime,size:z.size,preview:z,mode:"view"},o=q_.resolve(p)||q_.get("workspace-preview-default");if(!o)return;let t=o.mount(S,p);return N0.current=t,()=>{if(N0.current===t)t.dispose(),N0.current=null;S.innerHTML=""}},[B,y_,z]);let x1=(S)=>{let p=S?.target;if(p instanceof Element)return p;return p?.parentElement||null},C$=(S)=>{return Boolean(S?.closest?.(".workspace-node-icon, .workspace-label-text"))},s4=(S)=>{if(!S)return!1;if(S.closest?.('input, textarea, [contenteditable="true"]'))return!0;return Boolean(S.isContentEditable)},v5=u((S)=>{let p=x1(S),o=p?.closest?.("[data-path]");if(!o)return;let t=o.dataset.path;if(!t||t===".")return;let U0=Boolean(p?.closest?.("button"))||Boolean(p?.closest?.("a"))||Boolean(p?.closest?.("input")),Q0=Boolean(p?.closest?.(".workspace-caret"));if(U0||Q0)return;if(r0.current===t)return;$$(t)}).current,m5=u((S)=>{if(f_.current){f_.current=!1;return}let p=x1(S),o=p?.closest?.("[data-path]");if(Q_.current?.focus?.(),!o)return;let t=o.dataset.path,U0=o.dataset.type,Q0=Boolean(p?.closest?.(".workspace-caret")),A0=Boolean(p?.closest?.("button"))||Boolean(p?.closest?.("a"))||Boolean(p?.closest?.("input")),C0=B0.current===t,D0=r0.current;if(D0){if(D0===t)return;M1()}if(U0==="dir"){if(G_.current=null,U(t),O(null),x(null),W(!1),!e0.current.has(t))n0.current?.(t);if(C0&&!Q0)return;F((r_)=>{let G1=new Set(r_);if(G1.has(t))G1.delete(t);else G1.add(t);return G1})}else{G_.current=null,U(t);let t0=o0.current.get(t);if(t0)H_.current?.(t0.path,t0);if(!A0&&!Q0)x0.current?.(t)}}).current,L4=u(()=>{s0.current="",z0.current(),L_.current?.(),Array.from(e0.current||[]).filter((p)=>p&&p!==".").forEach((p)=>n0.current?.(p))}).current,P$=u(()=>{G_.current=null,U(null),O(null),x(null),W(!1)}).current,a4=u(()=>{P((S)=>{let p=!S;if(typeof window<"u")V_("workspaceShowHidden",String(p));return M0.current=p,N6(!0,p).catch((t)=>{console.debug("[workspace-explorer] Workspace visibility refresh after toggling hidden files failed.",t,{showHidden:p})}),s0.current="",z0.current?.(),Array.from(e0.current||[]).filter((t)=>t&&t!==".").forEach((t)=>n0.current?.(t)),p})}).current,t4=u((S)=>{if(x1(S)?.closest?.("[data-path]"))return;P$()}).current,K1=f(async(S)=>{if(!S)return;let p=S.split("/").pop()||S;if(!window.confirm(`Delete "${p}"? This cannot be undone.`))return;try{await t7(S);let t=S.includes("/")?S.split("/").slice(0,-1).join("/")||".":".";if(B0.current===S)P$();n0.current?.(t),y(null),C_()}catch(t){O((U0)=>({...U0||{},error:t.message||"Failed to delete file"}))}},[P$]),R$=f((S)=>{let p=Q_.current;if(!p||!S||typeof CSS>"u"||typeof CSS.escape!=="function")return;p.querySelector(`[data-path="${CSS.escape(S)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),q4=f((S)=>{let p=x1(S);if(r0.current||s4(p))return;let o=j1;if(!o||o.length===0)return;let t=B?o.findIndex((U0)=>U0.node.path===B):-1;if(S.key==="ArrowDown"){S.preventDefault();let U0=Math.min(t+1,o.length-1),Q0=o[U0];if(!Q0)return;if(U(Q0.node.path),Q0.node.type!=="dir")H_.current?.(Q0.node.path,Q0.node),x0.current?.(Q0.node.path);else O(null),W(!1),x(null);R$(Q0.node.path);return}if(S.key==="ArrowUp"){S.preventDefault();let U0=t<=0?0:t-1,Q0=o[U0];if(!Q0)return;if(U(Q0.node.path),Q0.node.type!=="dir")H_.current?.(Q0.node.path,Q0.node),x0.current?.(Q0.node.path);else O(null),W(!1),x(null);R$(Q0.node.path);return}if(S.key==="ArrowRight"&&t>=0){let U0=o[t];if(U0?.node?.type==="dir"&&!Q.has(U0.node.path))S.preventDefault(),n0.current?.(U0.node.path),F((Q0)=>new Set([...Q0,U0.node.path]));return}if(S.key==="ArrowLeft"&&t>=0){let U0=o[t];if(U0?.node?.type==="dir"&&Q.has(U0.node.path))S.preventDefault(),F((Q0)=>{let A0=new Set(Q0);return A0.delete(U0.node.path),A0});return}if(S.key==="Enter"&&t>=0){S.preventDefault();let U0=o[t];if(!U0)return;let Q0=U0.node.path;if(U0.node.type==="dir"){if(!e0.current.has(Q0))n0.current?.(Q0);F((C0)=>{let D0=new Set(C0);if(D0.has(Q0))D0.delete(Q0);else D0.add(Q0);return D0}),O(null),x(null),W(!1)}else H_.current?.(Q0,U0.node),x0.current?.(Q0);return}if((S.key==="Delete"||S.key==="Backspace")&&t>=0){let U0=o[t];if(!U0||U0.node.type==="dir")return;S.preventDefault(),K1(U0.node.path);return}if(S.key==="Escape")S.preventDefault(),P$()},[P$,K1,Q,j1,R$,B]),V4=f((S)=>{let p=eM(S,r0.current);if(!p)return;R_.current={path:p.dragPath,dragging:!1,startX:p.startX,startY:p.startY}},[]),C1=f(()=>{let S=R_.current;if(S?.dragging&&S.path){let p=d0.current||O_(),o=d.current;if(typeof o==="function")o(S.path,p)}R_.current={path:null,dragging:!1,startX:0,startY:0},S0.current=0,b(!1),r(null),p_(null),a_(),E1()},[O_,E1,p_,a_]),H1=f((S)=>{let p=R_.current,o=S?.touches?.[0];if(!o||!p?.path)return;let t=Math.abs(o.clientX-p.startX),U0=Math.abs(o.clientY-p.startY),Q0=t>8||U0>8;if(!p.dragging&&Q0)p.dragging=!0,b(!0),r("move"),I1(p.path);if(p.dragging){S.preventDefault(),F_(o.clientX,o.clientY);let A0=document.elementFromPoint(o.clientX,o.clientY),C0=M_(A0)||O_();if(d0.current!==C0)p_(C0);e_(C0)}},[M_,O_,I1,F_,p_,e_]),c5=u((S)=>{S.preventDefault();let p=A_.current;if(!p)return;let o=S.clientY,t=q0.current||280,U0=S.currentTarget;U0.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let Q0=o,A0=(D0)=>{Q0=D0.clientY;let t0=p.clientHeight-80,r_=Math.min(Math.max(t-(D0.clientY-o),80),t0);p.style.setProperty("--preview-height",`${r_}px`),q0.current=r_},C0=()=>{let D0=p.clientHeight-80,t0=Math.min(Math.max(t-(Q0-o),80),D0);q0.current=t0,U0.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",V_("previewHeight",String(Math.round(t0))),document.removeEventListener("mousemove",A0),document.removeEventListener("mouseup",C0)};document.addEventListener("mousemove",A0),document.addEventListener("mouseup",C0)}).current,Q4=u((S)=>{S.preventDefault();let p=A_.current;if(!p)return;let o=S.touches[0];if(!o)return;let t=o.clientY,U0=q0.current||280,Q0=S.currentTarget;Q0.classList.add("dragging"),document.body.style.userSelect="none";let A0=(D0)=>{let t0=D0.touches[0];if(!t0)return;D0.preventDefault();let r_=p.clientHeight-80,G1=Math.min(Math.max(U0-(t0.clientY-t),80),r_);p.style.setProperty("--preview-height",`${G1}px`),q0.current=G1},C0=()=>{Q0.classList.remove("dragging"),document.body.style.userSelect="",V_("previewHeight",String(Math.round(q0.current||U0))),document.removeEventListener("touchmove",A0),document.removeEventListener("touchend",C0),document.removeEventListener("touchcancel",C0)};document.addEventListener("touchmove",A0,{passive:!1}),document.addEventListener("touchend",C0),document.addEventListener("touchcancel",C0)}).current,Y$=f((S=B)=>{if(!S)return;AQ(S2(S))},[B]),n_=async()=>{if(!B||y_)return;await K1(B)},f$=(S)=>{return Array.from(S?.dataTransfer?.types||[]).includes("Files")},e4=f((S)=>{if(!f$(S))return;if(S.preventDefault(),S0.current+=1,!__.current)b(!0);r("upload");let p=k1(S)||O_();p_(p),e_(p)},[O_,k1,p_,e_]),X$=f((S)=>{if(!f$(S))return;if(S.preventDefault(),S.dataTransfer)S.dataTransfer.dropEffect="copy";if(!__.current)b(!0);if(I0.current!=="upload")r("upload");let p=k1(S)||O_();if(d0.current!==p)p_(p);e_(p)},[O_,k1,p_,e_]),p6=f((S)=>{if(!f$(S))return;if(S.preventDefault(),S0.current=Math.max(0,S0.current-1),S0.current===0)b(!1),r(null),p_(null),a_()},[p_,a_]),v_=f(async(S,p=".")=>{let o=Array.from(S||[]);if(o.length===0)return;let t=p&&p!==""?p:".",U0=t!=="."?t:"workspace root";U1(),j0(!0),F0({current:0,total:o.length,name:"",percent:0,done:!1,error:null});try{let Q0=null;for(let A0=0;A0<o.length;A0++){let C0=o[A0],D0=C0?.name||`file ${A0+1}`;F0((r_)=>({...r_,current:A0+1,name:D0,percent:0}));let t0=(r_)=>F0((G1)=>({...G1,percent:r_.percent}));try{Q0=await f2(C0,t,{onProgress:t0})}catch(r_){let G1=r_?.status,Q$=r_?.code;if(G1===409||Q$==="file_exists"){if(!window.confirm(`"${D0}" already exists in ${U0}. Overwrite?`))continue;Q0=await f2(C0,t,{overwrite:!0,onProgress:t0})}else throw r_}}if(Q0?.path)G_.current=Q0.path,U(Q0.path),x0.current?.(Q0.path);n0.current?.(t),C_(),F0((A0)=>({...A0,done:!0})),U1(),x_.current=window.setTimeout(()=>{x_.current=0,F0(null)},1500)}catch(Q0){y(Q0.message||"Failed to upload file"),F0((A0)=>A0?{...A0,error:Q0.message||"Upload failed"}:null),U1(),x_.current=window.setTimeout(()=>{x_.current=0,F0(null)},4000)}finally{j0(!1)}},[U1]),$3=f(async(S,p)=>{if(!S)return;let o=o0.current?.get(S);if(!o)return;let t=p&&p!==""?p:".",U0=S.includes("/")?S.split("/").slice(0,-1).join("/")||".":".";if(t===U0)return;try{let A0=(await a7(S,t))?.path||S;if(o.type==="dir")F((C0)=>{let D0=new Set;for(let t0 of C0)if(t0===S)D0.add(A0);else if(t0.startsWith(`${S}/`))D0.add(`${A0}${t0.slice(S.length)}`);else D0.add(t0);return D0});if(U(A0),o.type==="dir")O(null),W(!1),x(null);else x0.current?.(A0);n0.current?.(U0),n0.current?.(t),C_()}catch(Q0){y(Q0?.message||"Failed to move entry")}},[]);d.current=$3;let j3=f(async(S)=>{if(!f$(S))return;S.preventDefault(),S0.current=0,b(!1),r(null),H0(null),a_();let p=Array.from(S?.dataTransfer?.files||[]);if(p.length===0)return;let o=d0.current||k1(S)||O_();await v_(p,o)},[O_,k1,v_]),P1=f((S)=>{if(S?.stopPropagation?.(),Y0)return;let p=S?.currentTarget?.dataset?.uploadTarget||".";J_.current=p,N_.current?.click()},[Y0]),K4=f((S)=>{S?.preventDefault?.(),S?.stopPropagation?.();let p=S?.currentTarget?.dataset?.folderHintTarget||B0.current||".";if(!p)return;E0.current?.(p,o0.current.get(p))},[]),S$=f(()=>{if(Y0)return;let S=B0.current,p=S?o0.current?.get(S):null;J_.current=p?.type==="dir"?p.path:".",N_.current?.click()},[Y0]),g$=f(()=>{g_(()=>_1(null))},[g_,_1]),u$=f(()=>{g_(()=>S$())},[g_,S$]),_5=f(()=>{g_(()=>L4())},[g_,L4]),Z$=f(()=>{g_(()=>a4())},[g_,a4]),L$=f(()=>{if(!B||!r4)return;g_(()=>g0.current?.(B,z))},[g_,B,r4,z]),B4=f(()=>{if(!B||!V1)return;g_(()=>g0.current?.(B,z))},[g_,B,V1,z]),F4=f(()=>{if(!B||B===".")return;g_(()=>$$(B))},[g_,B,$$]),q$=f(()=>{if(!B||y_)return;g_(()=>n_())},[g_,B,y_,n_]),r6=f(()=>{if(!B||y_)return;g_(()=>Y$())},[g_,B,y_,Y$]),V$=f(()=>{if(!I$)return;Q1(),AQ(I$)},[Q1,I$]),n6=f(()=>{Q1(),X?.()},[Q1,X]),h5=f(()=>{Q1(),Z?.()},[Q1,Z]),l5=f(()=>{Q1(),L?.()},[Q1,L]),p5=f((S)=>{if(!S||S.button!==0)return;let p=S.currentTarget;if(!p||!p.dataset)return;let o=p.dataset.path;if(!o||o===".")return;if(r0.current===o)return;let t=x1(S);if(t?.closest?.("button, a, input, .workspace-caret"))return;if(!C$(t))return;S.preventDefault(),W_.current={path:o,dragging:!1,startX:S.clientX,startY:S.clientY};let U0=(A0)=>{let C0=W_.current;if(!C0?.path)return;let D0=Math.abs(A0.clientX-C0.startX),t0=Math.abs(A0.clientY-C0.startY),r_=D0>4||t0>4;if(!C0.dragging&&r_)C0.dragging=!0,f_.current=!0,b(!0),r("move"),I1(C0.path),F_(A0.clientX,A0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(C0.dragging){A0.preventDefault(),F_(A0.clientX,A0.clientY);let G1=document.elementFromPoint(A0.clientX,A0.clientY),Q$=M_(G1)||O_();if(d0.current!==Q$)p_(Q$);e_(Q$)}},Q0=()=>{document.removeEventListener("mousemove",U0),document.removeEventListener("mouseup",Q0);let A0=W_.current;if(A0?.dragging&&A0.path){let C0=d0.current||O_(),D0=d.current;if(typeof D0==="function")D0(A0.path,C0)}W_.current={path:null,dragging:!1,startX:0,startY:0},S0.current=0,b(!1),r(null),p_(null),a_(),E1(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{f_.current=!1},0)};document.addEventListener("mousemove",U0),document.addEventListener("mouseup",Q0)},[M_,O_,I1,F_,E1,p_,e_,a_]),G3=f(async(S)=>{let p=Array.from(S?.target?.files||[]);if(p.length===0)return;let o=J_.current||".";if(await v_(p,o),J_.current=".",S?.target)S.target.value=""},[v_]);return N`
        <aside
            class=${`workspace-sidebar${R?" workspace-drop-active":""}`}
            data-workspace-scale=${Y_}
            ref=${A_}
            onDragEnter=${e4}
            onDragOver=${X$}
            onDragLeave=${p6}
            onDrop=${j3}
        >
            <input type="file" multiple style="display:none" ref=${N_} onChange=${G3} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${J0}
                            class=${`workspace-menu-button${a0?" active":""}`}
                            onClick=${(S)=>{S.stopPropagation(),R0((p)=>!p)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${a0?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${a0&&N`
                            <div class="workspace-menu-dropdown" ref=${T0} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${g$} disabled=${Y0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${u$} disabled=${Y0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${_5}>Refresh tree</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${()=>g_(()=>i4())} disabled=${a}>
                                    ${a?"Reindexing workspace…":"Reindex workspace"}
                                </button>
                                <button class=${`workspace-menu-item${J?" active":""}`} role="menuitem" onClick=${Z$}>
                                    ${J?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${(X||Z||L)&&N`<div class="workspace-menu-separator"></div>`}
                                ${X&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${n6}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Z&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${h5}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${L&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${l5}>
                                        ${V?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}

                                ${B&&N`<div class="workspace-menu-separator"></div>`}
                                ${r4&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${L$}>Open in tab</button>
                                `}
                                ${B&&!y_&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${B4} disabled=${!V1}>Open in editor</button>
                                `}
                                ${G$&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${F4}>Rename selected</button>
                                `}
                                ${d4&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${r6}>Download selected file</button>
                                `}
                                ${I$&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${V$}>Download selected folder (zip)</button>
                                `}
                                ${n4&&N`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${q$}>Delete selected file</button>
                                `}
                                <div class="workspace-menu-separator"></div>
                                <button class="workspace-menu-item" role="menuitem" onClick=${()=>{R0(!1),window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:{section:"workspace"}}))}}>Settings</button>
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${_1} title="New file" disabled=${Y0}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${L4} title="Refresh tree">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            ${o4&&N`
                <div class="workspace-index-status-row">
                    <div class=${`workspace-index-status-chip state-${c1}`} title=${m1}>
                        <span class="workspace-index-status-dot" aria-hidden="true"></span>
                        <span>${x$}</span>
                    </div>
                </div>
            `}
            <div class="workspace-tree" onClick=${t4}>
                ${L0&&N`
                    <div class="workspace-upload-strip">
                        <div class="workspace-upload-strip-text">
                            ${L0.error?N`<span class="workspace-upload-strip-error">${L0.error}</span>`:L0.done?N`<span>Done</span>`:N`<span>${L0.total>1?`Uploading ${L0.current}/${L0.total}: ${L0.name}`:`Uploading ${L0.name}`}${L0.percent>0?` (${L0.percent}%)`:"…"}</span>`}
                        </div>
                        ${!L0.done&&!L0.error&&N`
                            <div class="workspace-upload-strip-bar">
                                <div class="workspace-upload-strip-fill" style=${`width:${L0.percent||0}%`}></div>
                            </div>
                        `}
                    </div>
                `}
                ${I&&N`<div class="workspace-loading">Loading…</div>`}
                ${T&&N`<div class="workspace-error">${T}</div>`}
                ${q&&N`
                    <div
                        class="workspace-tree-list"
                        ref=${Q_}
                        tabIndex="0"
                        onClick=${m5}
                        onDblClick=${v5}
                        onKeyDown=${q4}
                        onTouchStart=${V4}
                        onTouchEnd=${C1}
                        onTouchMove=${H1}
                        onTouchCancel=${C1}
                    >
                        ${j1.map(({node:S,depth:p})=>{let o=S.type==="dir",t=S.path===B,U0=S.path===H,Q0=o&&Q.has(S.path),A0=_0&&S.path===_0,C0=Array.isArray(S.children)&&S.children.length>0?S.children.length:Number(S.child_count)||0;return N`
                                <div
                                    key=${S.path}
                                    class=${`workspace-row${t?" selected":""}${A0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+p*y$.indentPx}px`}}
                                    data-path=${S.path}
                                    data-type=${S.type}
                                    onMouseDown=${p5}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${o?a1(Q0?"down":"right"):null}
                                    </span>
                                    <svg class=${`workspace-node-icon${o?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${o?N`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:N`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${U0?N`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${E_}
                                                value=${E}
                                                onInput=${(D0)=>M(D0?.target?.value||"")}
                                                onKeyDown=${(D0)=>{if(D0.stopPropagation(),D0.key==="Enter")D0.preventDefault(),p4();else if(D0.key==="Escape")D0.preventDefault(),M1()}}
                                                onBlur=${M1}
                                                onClick=${(D0)=>D0.stopPropagation()}
                                            />
                                        `:N`<span class="workspace-label"><span class="workspace-label-text">${S.name}</span></span>`}
                                    ${o&&!Q0&&C0>0&&N`
                                        <span class="workspace-count">${C0}</span>
                                    `}
                                    ${o&&N`
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
                                            onClick=${P1}
                                            disabled=${Y0}
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
            ${B&&N`
                <div class="workspace-preview-splitter-h" onMouseDown=${c5} onTouchStart=${Q4}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${B}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${_1} title="New file" disabled=${Y0}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!y_&&N`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>V1&&g0.current?.(B,z)}
                                    title=${w$}
                                    disabled=${!V1}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${n_}
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
                            ${y_?N`
                                    <button
                                        class="workspace-download"
                                        data-folder-hint-target=${B}
                                        onClick=${K4}
                                        title="Add folder hint to compose"
                                        aria-label=${`Add folder hint for ${B}`}
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                            <path d="M12 11v6"/>
                                            <path d="M9 14h6"/>
                                        </svg>
                                    </button>
                                    <button class="workspace-download" onClick=${S$}
                                        title="Upload files to this folder" disabled=${Y0}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${g2(B,J)} download
                                        title="Download folder as zip" onClick=${(S)=>S.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:N`<a class="workspace-download" href=${S2(B)} download
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
                    ${k&&N`<div class="workspace-loading">Loading preview…</div>`}
                    ${z?.error&&N`<div class="workspace-error">${z.error}</div>`}
                    ${y_&&N`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${h?.disabled&&N`<div class="workspace-preview-text">Folder size preview scanning is disabled in Workspace settings.</div>`}
                        ${h?.loading&&N`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${h?.error&&N`<div class="workspace-error">${h.error}</div>`}
                        ${h?.payload&&h.payload.segments?.length>0&&N`
                            <${iM} payload=${h.payload} />
                        `}
                        ${h?.payload&&(!h.payload.segments||h.payload.segments.length===0)&&N`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${z&&!z.error&&!y_&&N`
                        <div class="workspace-preview-body" ref=${G0}></div>
                    `}
                </div>
            `}
            ${e&&N`
                <div class="workspace-drag-ghost" ref=${w0}>${e.label}</div>
            `}
        </aside>
    `}k0();var _T=new Set(["html-viewer","kanban-editor","mindmap-editor"]);function T8(_,$,j){let G=String(_||"").trim();if(!G)return null;if($)return $;if(typeof j!=="function")return null;return j({path:G,mode:"edit"})?.id||null}function fQ(_,$,j){let G=T8(_,$,j);return G!=null&&_T.has(G)}function SQ(_,$,j){return T8(_,$,j)==="html-viewer"?"Edit":"Edit Source"}function gQ(_,$,j){return T8(_,$,j)==="editor"}var $T=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,jT=/\.(csv|tsv)$/i,GT=/\.pdf$/i,YT=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function XT(_,{hasPopOutTab:$=!1}={}){let j=typeof _==="string"?_.trim():"";if(!j)return null;let G=tq(j,{hasPopOutTab:$});if(G)return G;if($T.test(j)){let Y="/workspace/raw?path="+encodeURIComponent(j),X=j.split("/").pop()||"document";return"/office-viewer/?url="+encodeURIComponent(Y)+"&name="+encodeURIComponent(X)}if(jT.test(j))return"/data-viewer/?path="+encodeURIComponent(j);if(GT.test(j))return"/workspace/raw?path="+encodeURIComponent(j);if(YT.test(j))return"/image-viewer/?path="+encodeURIComponent(j);return null}function uQ({tabs:_,activeId:$,onActivate:j,onClose:G,onCloseOthers:Y,onCloseAll:X,onTogglePin:Z,onTogglePreview:L,onToggleDiff:V,onEditSource:q,previewTabs:K,diffTabs:Q,paneOverrides:F,detachedTabs:B,onReattachTab:U,onToggleDock:H,dockVisible:D,onToggleZen:E,zenMode:M,onPopOutTab:z}){let[O,x]=C(null),I=u(null);g(()=>{if(!O)return;let m=(_0)=>{if(_0.type==="keydown"&&_0.key!=="Escape")return;x(null)};return document.addEventListener("click",m),document.addEventListener("keydown",m),()=>{document.removeEventListener("click",m),document.removeEventListener("keydown",m)}},[O]),g(()=>{let m=(_0)=>{if(_0.ctrlKey&&_0.key==="Tab"){if(_0.preventDefault(),!_.length)return;let H0=_.findIndex((Y0)=>Y0.id===$);if(_0.shiftKey){let Y0=_[(H0-1+_.length)%_.length];j?.(Y0.id)}else{let Y0=_[(H0+1)%_.length];j?.(Y0.id)}return}if((_0.ctrlKey||_0.metaKey)&&_0.key==="w"){let H0=document.querySelector(".editor-pane");if(H0&&H0.contains(document.activeElement)){if(_0.preventDefault(),$)G?.($)}}};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[_,$,j,G]);let A=f((m,_0)=>{if(m.button===0){j?.(_0);return}if(m.button===1)m.preventDefault(),G?.(_0)},[j,G]),k=f((m,_0)=>{if(m.defaultPrevented)return;if(m.button===0)j?.(_0)},[j]),W=f((m,_0)=>{m.preventDefault(),x({id:_0,x:m.clientX,y:m.clientY})},[]),T=f((m)=>{m.stopPropagation()},[]),y=f((m,_0)=>{m.preventDefault(),m.stopPropagation(),G?.(_0)},[G]);g(()=>{if(!$||!I.current)return;let m=I.current.querySelector(".tab-item.active");if(m)m.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let J=f((m)=>{if(!(F instanceof Map))return null;return F.get(m)||null},[F]),P=Z0(()=>_.find((m)=>m.id===O?.id)||null,[O?.id,_]),R=Z0(()=>{let m=O?.id;if(!m)return!1;return fQ(m,J(m),(_0)=>q_.resolve(_0))},[O?.id,J]),b=Z0(()=>{let m=O?.id;if(!m)return"Edit Source";return SQ(m,J(m),(_0)=>q_.resolve(_0))},[O?.id,J]),c=Z0(()=>{let m=O?.id;if(!m||!(B instanceof Map))return!1;return B.has(m)},[O?.id,B]),r=Z0(()=>{let m=O?.id;if(!m||!(Q instanceof Set))return!1;return Q.has(m)},[O?.id,Q]),e=Z0(()=>{let m=O?.id;if(!m)return!1;let _0=_.find((Y0)=>Y0.id===m)||null;if(!_0)return!1;return gQ(m,J(m),(Y0)=>q_.resolve(Y0))&&Boolean(_0.dirty||r)},[O?.id,r,J,_]);if(!_.length)return null;return N`
        <div class="tab-strip" ref=${I} role="tablist">
            ${_.map((m)=>N`
                <div
                    key=${m.id}
                    class=${`tab-item${m.id===$?" active":""}${m.dirty?" dirty":""}${m.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${m.id===$}
                    title=${m.path}
                    onMouseDown=${(_0)=>A(_0,m.id)}
                    onClick=${(_0)=>k(_0,m.id)}
                    onContextMenu=${(_0)=>W(_0,m.id)}
                >
                    ${m.pinned&&N`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${m.label}</span>
                    ${B instanceof Map&&B.has(m.id)&&N`
                        <span class="tab-detached-badge" aria-label="Detached" title="Open in separate window">↗</span>
                    `}
                    <button
                        type="button"
                        class="tab-close"
                        onPointerDown=${T}
                        onMouseDown=${T}
                        onClick=${(_0)=>y(_0,m.id)}
                        title=${m.dirty?"Unsaved changes":"Close"}
                        aria-label=${m.dirty?"Unsaved changes":`Close ${m.label}`}
                    >
                        ${m.dirty?N`<span class="tab-dirty-dot" aria-hidden="true"></span>`:N`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${H&&N`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${D?" active":""}`}
                    onClick=${H}
                    title=${`${D?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${D?"Hide":"Show"} terminal`}
                    aria-pressed=${D?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
            ${E&&N`
                <button
                    class=${`tab-strip-zen-toggle${M?" active":""}`}
                    onClick=${E}
                    title=${`${M?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${M?"Exit":"Enter"} zen mode`}
                    aria-pressed=${M?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${M?N`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:N`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${O&&N`
            <div class="tab-context-menu" style=${{left:O.x+"px",top:O.y+"px"}}>
                <button onClick=${()=>{G?.(O.id),x(null)}}>Close</button>
                <button onClick=${()=>{Y?.(O.id),x(null)}}>Close Others</button>
                <button onClick=${()=>{X?.(),x(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{Z?.(O.id),x(null)}}>
                    ${P?.pinned?"Unpin":"Pin"}
                </button>
                ${R&&q&&N`
                    <button onClick=${()=>{q(O.id),x(null)}}>${b}</button>
                `}
                ${c&&U&&N`
                    <button onClick=${()=>{U(O.id),x(null)}}>Reattach</button>
                `}
                ${z&&!c&&N`
                    <button onClick=${()=>{let m=_.find((_0)=>_0.id===O.id);z(O.id,m?.label),x(null)}}>Open in Window</button>
                `}
                ${e&&V&&N`
                    <hr />
                    <button onClick=${()=>{j?.(O.id),V(O.id),x(null)}}>${r?"Hide Diff":"Compare to Saved"}</button>
                `}
                ${L&&/\.(md|mdx|markdown)$/i.test(O.id)&&N`
                    <hr />
                    <button onClick=${()=>{L(O.id),x(null)}}>
                        ${K?.has(O.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${(()=>{let m=XT(O.id,{hasPopOutTab:typeof z==="function"});if(!m)return null;return N`
                        <hr />
                        <button onClick=${()=>{window.open(m,"_blank","noopener"),x(null)}}>Open in New Tab</button>
                    `})()}
            </div>
        `}
    `}k0();T_();r2();function b4(_,$=30){let j=Array.isArray(_)?_.map((G)=>Number(G)).filter((G)=>Number.isFinite(G)):[];return j.length>$?j.slice(j.length-$):j}function y8(_,$=30){return b4(_,$).map((j)=>Math.max(0,Math.min(100,j)))}function I5(_,$=56,j=16,G={}){let Y=b4(_);if(Y.length===0)return"";let X=Number.isFinite(G.min)?Number(G.min):Math.min(...Y),Z=Number.isFinite(G.max)?Number(G.max):Math.max(...Y);if(!(Z>X)){let L=(j/2).toFixed(2);return`M 0 ${L} L ${$} ${L}`}if(Y.length===1){let L=(Y[0]-X)/(Z-X),V=(j-L*j).toFixed(2);return`M 0 ${V} L ${$} ${V}`}return Y.map((L,V)=>{let q=V/(Y.length-1||1)*$,K=(L-X)/(Z-X),Q=j-K*j;return`${V===0?"M":"L"} ${q.toFixed(2)} ${Q.toFixed(2)}`}).join(" ")}function j4(_){return`${Math.round(Number(_)||0)}%`}function Jj(_){let $=Number(_);if(!Number.isFinite($)||$<=0)return"0B";let j=["B","K","M","G","T"],G=0,Y=$;while(Y>=1024&&G<j.length-1)Y/=1024,G+=1;let X=Y>=100||G===0?0:Y>=10?0:1;return`${Y.toFixed(X)}${j[G]}`}function ZT(_){let $=[`CPU ${j4(_?.cpu_percent)}`,`RAM ${j4(_?.ram_percent)}`];if(Number(_?.buffer_cache_bytes)>0)$.push(`BUF ${Jj(_?.buffer_cache_bytes)}`);if(vQ(_))$.push(`VRAM ${j4(_?.vram_percent)}`);if(Number.isFinite(Number(_?.swap_percent))&&Number(_?.swap_total_bytes)>0)$.push(`SWP ${j4(_?.swap_percent)}`);return $.join(" • ")}function bQ(_){return Number(_?.process_memory?.vm_rss_bytes)>0?Number(_.process_memory.vm_rss_bytes):Number(_?.process_memory?.rss_bytes)||0}function LT(_){return bQ(_)>0&&b4(_?.process_rss_series_bytes).length>0}function vQ(_){return _?.vram_percent!==null&&_?.vram_percent!==void 0&&Number.isFinite(Number(_?.vram_percent))&&Number(_?.vram_total_bytes)>0&&Number(_?.vram_used_bytes)>=0&&b4(_?.vram_series).length>0}function qT(){if(typeof window>"u"||typeof window.matchMedia!=="function")return!1;return window.matchMedia("(max-width: 900px)").matches}function mQ({mode:_="overlay"}){let[$,j]=C(()=>J6(!1)),[G,Y]=C(()=>nZ(!1)),[X,Z]=C(()=>qT()),[L,V]=C({cpu_percent:0,ram_percent:0,swap_percent:null,cpu_series:[],ram_series:[],swap_series:[],vram_percent:null,vram_series:[],vram_total_bytes:0,vram_used_bytes:0,gpu_provider:null,buffer_cache_bytes:null,buffer_cache_series_bytes:[],process_rss_series_bytes:[],process_memory:{rss_bytes:0,vm_rss_bytes:null},swap_total_bytes:0,swap_used_bytes:0,sample_interval_ms:2000,platform:""}),[q,K]=C(!1);g(()=>{let y=(P)=>{j(Boolean(P?.detail?.enabled))},J=(P)=>{Y(Boolean(P?.detail?.collapsed))};return window.addEventListener(R4,y),window.addEventListener(p2,J),()=>{window.removeEventListener(R4,y),window.removeEventListener(p2,J)}},[]),g(()=>{if(typeof window>"u"||typeof window.matchMedia!=="function")return;let y=window.matchMedia("(max-width: 900px)"),J=()=>Z(Boolean(y.matches));if(J(),typeof y.addEventListener==="function")return y.addEventListener("change",J),()=>y.removeEventListener("change",J);return y.addListener(J),()=>y.removeListener(J)},[]);let F=_==="overlay";g(()=>{if(!$||!F)return;let y=!1,J=0,P=async()=>{K((R)=>R||L.cpu_series.length>0?R:!0);try{let R=await A7();if(y)return;V({cpu_percent:Number(R?.cpu_percent)||0,ram_percent:Number(R?.ram_percent)||0,swap_percent:Number.isFinite(Number(R?.swap_percent))?Number(R?.swap_percent):null,vram_percent:Number.isFinite(Number(R?.vram_percent))?Number(R?.vram_percent):null,cpu_series:y8(R?.cpu_series),ram_series:y8(R?.ram_series),swap_series:y8(R?.swap_series),vram_series:y8(R?.vram_series),vram_total_bytes:Number(R?.vram_total_bytes)||0,vram_used_bytes:Number(R?.vram_used_bytes)||0,gpu_provider:typeof R?.gpu_provider==="string"&&R.gpu_provider.trim()?R.gpu_provider.trim():null,buffer_cache_bytes:Number.isFinite(Number(R?.buffer_cache_bytes))?Number(R?.buffer_cache_bytes):null,buffer_cache_series_bytes:b4(R?.buffer_cache_series_bytes),process_rss_series_bytes:b4(R?.process_rss_series_bytes),process_memory:{rss_bytes:Number(R?.process_memory?.rss_bytes)||0,vm_rss_bytes:Number.isFinite(Number(R?.process_memory?.vm_rss_bytes))?Number(R?.process_memory?.vm_rss_bytes):null},swap_total_bytes:Number(R?.swap_total_bytes)||0,swap_used_bytes:Number(R?.swap_used_bytes)||0,sample_interval_ms:Number(R?.sample_interval_ms)||2000,platform:String(R?.platform||"")})}catch{if(y)return}finally{if(!y)K(!1)}};return P(),J=window.setInterval(()=>{if(document?.visibilityState==="hidden")return;P()},Math.max(1000,Number(L.sample_interval_ms)||2000)),()=>{if(y=!0,J)window.clearInterval(J)}},[$,F]);let B=Z0(()=>I5(L.cpu_series,56,16,{min:0,max:100}),[L.cpu_series]),U=Z0(()=>I5(L.ram_series,56,16,{min:0,max:100}),[L.ram_series]),H=Z0(()=>I5(L.swap_series,56,16,{min:0,max:100}),[L.swap_series]),D=Z0(()=>I5(L.vram_series,56,16,{min:0,max:100}),[L.vram_series]),E=Z0(()=>I5(L.buffer_cache_series_bytes),[L.buffer_cache_series_bytes]),M=Z0(()=>I5(L.process_rss_series_bytes),[L.process_rss_series_bytes]),z=Number(L.buffer_cache_bytes)>0&&b4(L.buffer_cache_series_bytes).length>0,O=Number.isFinite(Number(L.swap_percent))&&L.swap_total_bytes>0,x=vQ(L),I=bQ(L),A=LT(L),k=Z0(()=>ZT(L),[L]);if(!$||!F)return null;let W=G?"Show system meters":q?"Updating system meters… Click to collapse.":"System meters — click to collapse.",T=(y)=>{y?.stopPropagation?.();let J=!G;Y(J),K9(J)};return N`
        <div class=${`system-meters-hud system-meters-hud-${_}${G?" is-collapsed":""}`} aria-live="polite">
            <button
                class="system-meters-card"
                type="button"
                title=${W}
                aria-label=${W}
                aria-expanded=${G?"false":"true"}
                onClick=${T}
            >
                ${G?N`<span class="system-meters-collapse-tab" aria-hidden="true">${a1("left")}</span>`:X?N`<span class="system-meters-compact-summary">${k}</span>`:N`
                            <div class="system-meters-row cpu">
                                <span class="system-meters-label">CPU</span>
                                <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                    <path d=${B}></path>
                                </svg>
                                <span class="system-meters-value">${j4(L.cpu_percent)}</span>
                            </div>
                            <div class="system-meters-row ram">
                                <span class="system-meters-label">RAM</span>
                                <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                    <path d=${U}></path>
                                </svg>
                                <span class="system-meters-value">${j4(L.ram_percent)}</span>
                            </div>
                            ${A&&N`
                                <div class="system-meters-row rss">
                                    <span class="system-meters-label">RSS</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${M}></path>
                                    </svg>
                                    <span class="system-meters-value">${Jj(I)}</span>
                                </div>
                            `}
                            ${x&&N`
                                <div class="system-meters-row vram" title=${L.gpu_provider?`GPU telemetry: ${L.gpu_provider}`:"GPU memory telemetry"}>
                                    <span class="system-meters-label">VRAM</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${D}></path>
                                    </svg>
                                    <span class="system-meters-value">${j4(L.vram_percent)}</span>
                                </div>
                            `}
                            ${z&&N`
                                <div class="system-meters-row buf">
                                    <span class="system-meters-label">BUF</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${E}></path>
                                    </svg>
                                    <span class="system-meters-value">${Jj(L.buffer_cache_bytes)}</span>
                                </div>
                            `}
                            ${O&&N`
                                <div class="system-meters-row swap">
                                    <span class="system-meters-label">SWP</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${H}></path>
                                    </svg>
                                    <span class="system-meters-value">${j4(L.swap_percent)}</span>
                                </div>
                            `}
                        `}
            </button>
        </div>
    `}function VT(_){let{workspaceOpen:$,editorOpen:j,chatOnlyMode:G,zenMode:Y}=_;return`app-shell${$?"":" workspace-collapsed"}${j?" editor-open":""}${G?" chat-only":""}${Y?" zen-mode":""}`}function QT(_){let $=_?.user_message?.id??_?.row_id;if($===null||$===void 0||$==="")return null;let j=Number($);return Number.isFinite(j)?j:null}function KT(_){let{id:$,scrollToBottom:j,getElementById:G=(q)=>document.getElementById(q),scheduleRaf:Y=(q)=>requestAnimationFrame(q),scheduleTimeout:X=(q,K)=>{setTimeout(q,K)},maxAttempts:Z=12}=_,L=(q)=>{q.scrollIntoView({behavior:"smooth",block:"center"}),q.classList.add("post-highlight"),X(()=>q.classList.remove("post-highlight"),2000)},V=(q)=>{let K=G(`post-${$}`);if(K){L(K);return}if(q<=0){j?.();return}Y(()=>{X(()=>V(q-1),40)})};V(Z)}function BT(_){let{response:$,viewStateRef:j,scrollToBottom:G,scrollPostedMessage:Y=(V)=>KT({id:V,scrollToBottom:G})}=_,{searchQuery:X,searchOpen:Z}=j.current||{};if(X||Z)return;let L=QT($);if(L){Y(L);return}G()}function cQ(_){let{appShellRef:$,workspaceOpen:j,editorOpen:G,chatOnlyMode:Y,zenMode:X,isRenameBranchFormOpen:Z,closeRenameCurrentBranchForm:L,handleRenameCurrentBranch:V,renameBranchNameDraft:q,renameBranchNameInputRef:K,setRenameBranchNameDraft:Q,renameBranchDraftState:F,isRenamingBranch:B,addFileRef:U,addFolderRef:H,openEditor:D,openTerminalTab:E,openVncTab:M,hasDockPanes:z,toggleDock:O,dockVisible:x,handleSplitterMouseDown:I,handleSplitterTouchStart:A,showEditorPaneContainer:k,tabStripTabs:W,tabStripActiveId:T,handleTabActivate:y,handleTabClose:J,handleTabCloseOthers:P,handleTabCloseAll:R,handleTabTogglePin:b,handleTabTogglePreview:c,handleTabToggleDiff:r,handleTabEditSource:e,handleReattachPane:m,previewTabs:_0,diffTabs:H0,tabPaneOverrides:Y0,toggleZenMode:j0,handlePopOutPane:L0,isWebAppMode:F0,editorContainerRef:h,editorInstanceRef:$0,detachedTabs:V0,activeDetachedTab:O0,detachedDockPane:a,handleDockSplitterMouseDown:X0,handleDockSplitterTouchStart:W0,TERMINAL_TAB_PATH:P0,dockContainerRef:p0,handleEditorSplitterMouseDown:u0,handleEditorSplitterTouchStart:Y_,searchQuery:l0,isIOSDevice:a0,currentBranchRecord:R0,currentChatJid:i0,currentChatBranches:m0,handleBranchPickerChange:e0,formatBranchPickerLabel:s0,openRenameCurrentBranchForm:U_,handlePruneCurrentBranch:X_,handlePurgeArchivedBranch:c0,currentHashtag:z0,handleBackToTimeline:L_,activeSearchScopeLabel:o0,oobePanelState:H_,composePrefillRequest:E0,requestComposePrefill:g0,handleOobeSetupProvider:x0,handleOobeShowModelPicker:n0,handleOobeOpenWorkspace:A_,handleDismissProviderMissingOobe:Q_,handleCompleteProviderReadyOobe:E_,posts:N_,isMainTimelineView:J_,hasMore:x_,loadMore:R_,timelineRef:W_,handleHashtagClick:s_,addMessageRef:f_,scrollToMessage:q0,openFileFromPill:v,openTimelineFileFromPill:n,handleDeletePost:s,handleOpenFloatingWidget:G0,agents:N0,userProfile:T0,removingPostIds:J0,agentStatus:M0,isCompactionStatus:y0,agentDraft:h0,agentPlan:S0,agentThought:d0,pendingRequest:__,intentToast:I0,currentTurnId:w0,steerQueued:D_,handlePanelToggle:$_,btwSession:d,closeBtwPanel:B0,handleBtwRetry:r0,handleBtwInject:G_,floatingWidget:S_,handleCloseFloatingWidget:U1,handleFloatingWidgetEvent:b_,attachmentPreview:A1,setAttachmentPreview:C_,extensionStatusPanels:k_,pendingExtensionPanelActions:J1,handleExtensionPanelAction:O_,searchOpen:M_,followupQueueItems:k1,handleInjectQueuedFollowup:p_,handleRemoveQueuedFollowup:a_,handleMoveQueuedFollowup:e_,viewStateRef:F_,loadPosts:I1,scrollToBottom:E1,searchScope:v1,handleSearch:M1,handleSearchScopeChange:$$,setSearchScope:p4,enterSearchMode:M$,exitSearchMode:_1,fileRefs:c_,removeFileRef:T1,clearFileRefs:D1,setFileRefsFromCompose:j1,folderRefs:T$,removeFolderRef:y$,clearFolderRefs:j$,setFolderRefsFromCompose:y_,messageRefs:V1,removeMessageRef:w$,clearMessageRefs:r4,setMessageRefsFromCompose:G$,handleCreateSessionFromCompose:n4,handleCreateRootSessionFromCompose:d4,handleRestoreBranch:I$,attachActiveEditorFile:x$,followupQueueCount:m1,handleBtwIntercept:c1,handleMessageResponse:o4,handleComposeSubmitError:Q1,isComposeBoxAgentActive:g_,activeChatAgents:i4,connectionStatus:x1,stateAccessFailed:C$,activeModel:s4,agentModelsPayload:v5,activeModelUsage:m5,activeThinkingLevel:L4,supportsThinking:P$,contextUsage:a4,extensionWorkingState:t4,notificationsEnabled:K1,notificationPermission:R$,handleToggleNotifications:q4,setActiveModel:V4,applyModelState:C1,setPendingRequest:H1,pendingRequestRef:c5,toggleWorkspace:Q4}=_,Y$=()=>{if(a0())return;E1()};return N`
    <div class=${VT({workspaceOpen:j,editorOpen:G,chatOnlyMode:Y,zenMode:X})} ref=${$}>
      <${mQ} mode="overlay" />
      ${Z&&N`
        <div class="rename-branch-overlay" onPointerDown=${(n_)=>{if(n_.target===n_.currentTarget)L()}}>
          <form
            class="rename-branch-panel"
            onSubmit=${(n_)=>{n_.preventDefault(),V(q)}}
          >
            <div class="rename-branch-title">Rename session</div>
            <input
              ref=${K}
              value=${q}
              onInput=${(n_)=>{let f$=n_.currentTarget?.value??"";Q(String(f$))}}
              onKeyDown=${(n_)=>{if(n_.key==="Escape")n_.preventDefault(),L()}}
              autocomplete="off"
              placeholder="Session handle (letters, numbers, - and _ only)"
            />
            <div class=${`rename-branch-help ${F.kind||"info"}`}>
              ${F.message}
            </div>
            <div class="rename-branch-actions">
              <button type="submit" class="compose-model-popup-btn primary" disabled=${B||!F.canSubmit}>
                ${B?"Renaming…":"Save"}
              </button>
              <button
                type="button"
                class="compose-model-popup-btn"
                onClick=${L}
                disabled=${B}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      `}
      ${!Y&&N`
        <${RQ}
          onFileSelect=${U}
          onFolderSelect=${H}
          visible=${j}
          active=${j||G}
          onOpenEditor=${D}
          onOpenTerminalTab=${E}
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
        <div class="workspace-splitter" onMouseDown=${I} onTouchStart=${A}></div>
      `}
      ${k&&N`
        <div class="editor-pane-container">
          ${X&&N`<div class="zen-hover-zone"></div>`}
          ${G&&N`
            <${uQ}
              tabs=${W}
              activeId=${T}
              onActivate=${y}
              onClose=${J}
              onCloseOthers=${P}
              onCloseAll=${R}
              onTogglePin=${b}
              onTogglePreview=${c}
              onToggleDiff=${r}
              onEditSource=${e}
              previewTabs=${_0}
              diffTabs=${H0}
              paneOverrides=${Y0}
              detachedTabs=${V0}
              onReattachTab=${m}
              onToggleDock=${z?O:void 0}
              dockVisible=${z&&x}
              onToggleZen=${j0}
              zenMode=${X}
              onPopOutTab=${F0?void 0:L0}
            />
          `}
          ${G&&O0&&N`
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
          ${G&&!O0&&N`<div class="editor-pane-host" ref=${h}></div>`}
          ${G&&!O0&&T&&_0.has(T)&&N`
            <${G8}
              getContent=${()=>$0.current?.getContent?.()}
              subscribeContentChange=${(n_)=>$0.current?.onContentChange?.(n_)}
              path=${T}
              onClose=${()=>c(T)}
            />
          `}
          ${z&&x&&N`<div class="dock-splitter" onMouseDown=${X0} onTouchStart=${W0}></div>`}
          ${z&&N`<div class=${`dock-panel${x?"":" hidden"}${G?"":" standalone"}`}>
            <div class="dock-panel-header">
              <span class="dock-panel-title">Terminal</span>
              <div class="dock-panel-actions">
                ${!F0&&!a&&N`
                  <button class="dock-panel-action" onClick=${()=>L0(P0,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2.25" y="2.25" width="8.5" height="8.5" rx="1.5"/>
                      <path d="M8.5 2.25h5.25v5.25"/>
                      <path d="M13.75 2.25 7.75 8.25"/>
                    </svg>
                  </button>
                `}
                ${a&&N`
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
            ${a?N`
                <div class="dock-panel-body dock-panel-body-detached">
                  <div class="editor-empty-state">
                    <div class="editor-empty-state-title">Terminal detached</div>
                    <div class="editor-empty-state-body">The terminal is open in another window.</div>
                    <div class="editor-empty-state-actions">
                      <button class="editor-empty-state-button" onClick=${()=>m(P0)}>Reattach here</button>
                    </div>
                  </div>
                </div>
              `:N`<div class="dock-panel-body" ref=${p0}></div>`}
          </div>`}
        </div>
        <div class="editor-splitter" onMouseDown=${u0} onTouchStart=${Y_}></div>
      `}
      <${DV}
        workspaceOpen=${j}
        toggleWorkspace=${Q4}
        chatOnlyMode=${Y}
        onOpenTerminalTab=${E}
        onOpenVncTab=${M}
        onToggleTerminal=${z?O:void 0}
        terminalVisible=${Boolean(z&&x)}
      />
      <${EV}
        activeChatAgents=${i4}
        currentChatJid=${i0}
        workspaceOpen=${j}
        chatOnlyMode=${Y}
        terminalVisible=${Boolean(z&&x)}
        onSwitchChat=${e0}
        onToggleWorkspace=${Q4}
        onOpenTerminalTab=${E}
        onOpenVncTab=${M}
        onToggleTerminalDock=${z?O:void 0}
        onPrefillCompose=${g0}
      />
      <div class="container">
        ${l0&&a0()&&N`<div class="search-results-spacer"></div>`}
        ${(z0||l0)&&N`
          <div class="hashtag-header">
            <button class="back-btn" onClick=${L_}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <span>${z0?`#${z0}`:`Search: ${l0} · ${o0}`}</span>
          </div>
        `}
        ${H_?.kind&&H_.kind!=="hidden"&&N`
          <${yq}
            kind=${H_.kind}
            onSetupProvider=${x0}
            onShowModelPicker=${n0}
            onOpenWorkspace=${A_}
            onDismiss=${H_.kind==="provider-missing"?Q_:E_}
          />
        `}
        <${NQ}
          posts=${N_}
          hasMore=${J_?x_:!1}
          onLoadMore=${J_?R_:void 0}
          timelineRef=${W_}
          onHashtagClick=${s_}
          onMessageRef=${f_}
          onScrollToMessage=${q0}
          onFileRef=${n||v}
          onPostClick=${void 0}
          onDeletePost=${s}
          onOpenWidget=${G0}
          onOpenAttachmentPreview=${C_}
          emptyMessage=${z0?`No posts with #${z0}`:l0?`No results for "${l0}"`:void 0}
          agents=${N0}
          user=${T0}
          reverse=${J_}
          removingPostIds=${J0}
          searchQuery=${l0}
        />
        <${Gj}
          status=${y0(M0)?null:M0}
          draft=${h0}
          plan=${S0}
          thought=${d0}
          pendingRequest=${__}
          intent=${I0}
          turnId=${w0}
          steerQueued=${D_}
          onPanelToggle=${$_}
          showExtensionPanels=${!1}
        />
        <${Rq}
          session=${d}
          onClose=${B0}
          onRetry=${r0}
          onInject=${G_}
        />
        <${oq}
          widget=${S_}
          onClose=${U1}
          onWidgetEvent=${b_}
        />
        ${A1&&N`
          <${FV}
            mediaId=${A1.mediaId}
            info=${A1.info}
            onClose=${()=>C_(null)}
          />
        `}
        <${Gq} />
        <${Gj}
          extensionPanels=${Array.from(k_.values())}
          pendingPanelActions=${J1}
          onExtensionPanelAction=${O_}
          turnId=${w0}
          steerQueued=${D_}
          onPanelToggle=${$_}
          showCorePanels=${!1}
        />
        <${Tq}
          onPost=${(n_)=>{BT({response:n_,viewStateRef:F_,scrollToBottom:E1})}}
          onFocus=${Y$}
          searchMode=${M_}
          searchScope=${v1}
          onSearch=${M1}
          onSearchScopeChange=${$$||p4}
          onEnterSearch=${M$}
          onExitSearch=${_1}
          fileRefs=${c_}
          onRemoveFileRef=${T1}
          onClearFileRefs=${D1}
          onSetFileRefs=${j1}
          folderRefs=${T$}
          onRemoveFolderRef=${y$}
          onClearFolderRefs=${j$}
          onSetFolderRefs=${y_}
          messageRefs=${V1}
          onRemoveMessageRef=${w$}
          onClearMessageRefs=${r4}
          onSetMessageRefs=${G$}
          onSwitchChat=${e0}
          onRenameSession=${V}
          isRenameSessionInProgress=${B}
          onCreateSession=${n4}
          onCreateRootSession=${d4}
          onDeleteSession=${X_}
          onPurgeArchivedSession=${c0}
          onRestoreSession=${I$}
          activeEditorPath=${Y?null:T}
          onAttachEditorFile=${Y?void 0:x$}
          onOpenFilePill=${v}
          followupQueueCount=${m1}
          followupQueueItems=${k1}
          onInjectQueuedFollowup=${p_}
          onRemoveQueuedFollowup=${a_}
          onMoveQueuedFollowup=${e_}
          onSubmitIntercept=${c1}
          onMessageResponse=${o4}
          onSubmitError=${Q1}
          isAgentActive=${g_}
          activeChatAgents=${i4}
          currentChatJid=${i0}
          connectionStatus=${x1}
          stateAccessFailed=${C$}
          activeModel=${s4}
          agentModelsPayload=${v5}
          modelUsage=${m5}
          thinkingLevel=${L4}
          supportsThinking=${P$}
          contextUsage=${a4}
          notificationsEnabled=${K1}
          notificationPermission=${R$}
          onToggleNotifications=${q4}
          onModelChange=${V4}
          onModelStateChange=${C1}
          statusNotice=${y0(M0)?M0:null}
          extensionWorkingState=${t4}
          prefillRequest=${E0}
        />
        <${bV}
          request=${__}
          onRespond=${()=>{H1(null),c5.current=null}}
        />
      </div>
    </div>
  `}function hQ(_){let{branchLoaderMode:$,panePopoutMode:j,branchLoaderState:G,panePopoutOptions:Y,mainShellOptions:X,renderers:Z}=_,L=Zq({branchLoaderMode:$,panePopoutMode:j}),V=Z?.renderBranchLoaderMode||Lq,q=Z?.renderPanePopoutMode||qq,K=Z?.renderMainShell||cQ;if(L==="branch-loader")return V(G);if(L==="pane-popout")return q(Y);return K(X)}var I8="piclaw_btw_session",pQ=900,lQ="__piclawRenameBranchFormLock__";function FT(){try{return import.meta.url}catch{return null}}function kj(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $==="1"||$==="true"||$==="yes"}function NT(_){try{let $=_?new URL(_).searchParams.get("v"):null;return $&&$.trim()?$.trim():null}catch{return null}}function w8(_,$,j=""){let G=_?.get?.($);return G&&G.trim()?G.trim():j}function rQ(_={}){let $=_.importMetaUrl===void 0?FT():_.importMetaUrl,j=_.document===void 0?typeof document<"u"?document:null:_.document,G=_.origin===void 0?typeof window<"u"?window.location.origin:"http://localhost":_.origin||"http://localhost",Y=NT($);if(Y)return Y;try{let Z=Array.from(j?.querySelectorAll?.('script[type="module"][src]')||[]).find((q)=>String(q?.getAttribute?.("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute?.("src")||"";if(!Z)return null;let V=new URL(Z,G).searchParams.get("v");return V&&V.trim()?V.trim():null}catch{return null}}function nQ(_={}){let $=_.window===void 0?typeof window<"u"?window:null:_.window;if(!$)return null;let j=$[lQ];if(j&&typeof j==="object")return j;let G={inFlight:!1,cooldownUntil:0};return $[lQ]=G,G}function dQ(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function oQ(_={}){let $=typeof _.readItem==="function"?_.readItem:O1,j=_.storageKey||I8,G=$(j);if(!G)return null;try{let Y=JSON.parse(G);if(!Y||typeof Y!=="object")return null;let X=typeof Y.question==="string"?Y.question:"",Z=typeof Y.answer==="string"?Y.answer:"",L=typeof Y.thinking==="string"?Y.thinking:"",V=typeof Y.error==="string"&&Y.error.trim()?Y.error:null,q=Y.status==="running"?"error":Y.status==="success"||Y.status==="error"?Y.status:"success";return{question:X,answer:Z,thinking:L,error:q==="error"?V||"BTW stream interrupted. You can retry.":V,model:null,status:q}}catch{return null}}function iQ(_,$={}){let j=$.defaultChatJid||"web:default",G=w8(_,"chat_jid",j),Y=kj(_?.get?.("chat_only")||_?.get?.("chat-only")),X=kj(_?.get?.("pane_popout")),Z=w8(_,"pane_path"),L=w8(_,"pane_label"),V=kj(_?.get?.("branch_loader")),q=w8(_,"branch_source_chat_jid",G);return{currentChatJid:G,chatOnlyMode:Y,panePopoutMode:X,panePopoutPath:Z,panePopoutLabel:L,branchLoaderMode:V,branchLoaderSourceChatJid:q}}function sQ(_,$){let j=Array.isArray(_)?_:[];return j.find((G)=>G?.id===$)||j[0]||null}function aQ(_,$){if(!$||!_||typeof _.get!=="function")return null;return _.get($)||null}function Mj(_,$,j){return _||$?.label||j||"Pane"}function tQ(_,$,j){return`${Mj(_,$,j)} · PiClaw`}function eQ(_,$,j,G){let Y=Array.isArray(_)?_.length:0,X=Boolean(G&&$?.has?.(G)),Z=Boolean(G&&j?.has?.(G));return Y>1||X||Z}function _K(_,$){let j=typeof _==="string"?_:"";return j===$||j.startsWith(`${$}/`)}function $K(_,$,j,G){return _===$&&!j||G}function jK(_,$,j,G,Y){return _||!$&&(j||G&&Y)}T_();function UT(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function L1(_,$,j){let G=_?.[$];return typeof G==="function"?G:UT($,j)}var GK=!1,YK=!1,XK=!1;function ET(_){if(!_||typeof _.setOptions!=="function")return;_.setOptions({breaks:!0,gfm:!0})}function DT(_=typeof window<"u"?window:null){if(!_||YK)return;let $=(j)=>{let G=String(j?.message||j?.error?.message||"").trim();if(!/ResizeObserver loop (completed with undelivered notifications|limit exceeded)/i.test(G)){if(!(G==="Script error."&&(j?.lineno===0||!j?.filename)))return}j.preventDefault?.(),j.stopImmediatePropagation?.()};_.addEventListener("error",$,!0),YK=!0}function HT(){q_.register(M3),q_.register($9),q_.register(_9),q_.register(j9),q_.register(G9),q_.register(Y9),q_.register(Z9),q_.register(X7),T3(),q_.register(R3),q_.register(f3)}function WT(_=typeof window<"u"?window:null){if(!_||XK)return;if(!_.isSecureContext)return;if(!("serviceWorker"in _.navigator))return;XK=!0,_.navigator.serviceWorker.register("/sw.js").catch(($)=>{console.warn("Failed to register app service worker:",$)})}async function ZK(){if(GK)return;let _=typeof window<"u"?window:null,$=_?_?.marked:null;if(ET($),DT(_),e9(_),_)try{let j=await Promise.resolve().then(() => (k0(),uG));_.__piclawPreactHtm=j,_.__piclawPreact=j}catch(j){}HT(),await jV(_),WT(_),GK=!0}function OT(_=E6){return{searchPosts:_.searchPosts,deletePost:_.deletePost,getAgents:_.getAgents,getAgentThought:_.getAgentThought,setAgentThoughtVisibility:_.setAgentThoughtVisibility,getAgentStatus:_.getAgentStatus,getWorkspaceFile:_.getWorkspaceFile,getThread:_.getThread,getTimeline:_.getTimeline,sendAgentMessage:_.sendAgentMessage,forkChatBranch:_.forkChatBranch,getAgentContext:L1(_,"getAgentContext",null),getAutoresearchStatus:L1(_,"getAutoresearchStatus",null),stopAutoresearch:L1(_,"stopAutoresearch",{status:"ok"}),dismissAutoresearch:L1(_,"dismissAutoresearch",{status:"ok"}),getAgentModels:L1(_,"getAgentModels",{current:null,models:[]}),completeInstanceOobe:L1(_,"completeInstanceOobe",{status:"ok"}),getActiveChatAgents:L1(_,"getActiveChatAgents",{chats:[]}),getChatBranches:L1(_,"getChatBranches",{chats:[]}),renameChatBranch:L1(_,"renameChatBranch",null),pruneChatBranch:L1(_,"pruneChatBranch",null),restoreChatBranch:L1(_,"restoreChatBranch",null),getAgentQueueState:L1(_,"getAgentQueueState",{count:0}),steerAgentQueueItem:L1(_,"steerAgentQueueItem",{removed:!1,queued:"steer"}),removeAgentQueueItem:L1(_,"removeAgentQueueItem",{removed:!1}),streamSidePrompt:L1(_,"streamSidePrompt",null)}}var LK=OT(E6);function qK(_){let{routing:$,paneRuntime:j,splitters:G,branchPaneActions:Y,timelineViewActions:X,composeReferenceActions:Z,sidepanelActions:L,shellState:V,agentState:q,composeState:K,modelState:Q}=_,F={appShellRef:V.appShellRef,editorOpen:V.editorOpen,hidePanePopoutControls:j.hidePanePopoutControls,panePopoutHasMenuActions:j.panePopoutHasMenuActions,panePopoutTitle:j.panePopoutTitle,tabStripTabs:V.tabStripTabs,tabStripActiveId:V.tabStripActiveId,handleTabActivate:V.handleTabActivate,previewTabs:V.previewTabs,diffTabs:V.diffTabs,handleTabTogglePreview:V.handleTabTogglePreview,handleTabToggleDiff:V.handleTabToggleDiff,editorContainerRef:j.editorContainerRef,getPaneContent:()=>j.editorInstanceRef?.current?.getContent?.(),subscribePaneContentChange:(U)=>j.editorInstanceRef?.current?.onContentChange?.(U),panePopoutPath:V.panePopoutPath,canReattachPane:j.canReattachPanePopout,handleReattachPane:j.requestPanePopoutReattach},B={appShellRef:V.appShellRef,workspaceOpen:V.workspaceOpen,editorOpen:V.editorOpen,chatOnlyMode:V.chatOnlyMode,zenMode:j.zenMode,isRenameBranchFormOpen:V.isRenameBranchFormOpen,closeRenameCurrentBranchForm:Y.closeRenameCurrentBranchForm,handleRenameCurrentBranch:Y.handleRenameCurrentBranch,renameBranchNameDraft:V.renameBranchNameDraft,renameBranchNameInputRef:V.renameBranchNameInputRef,setRenameBranchNameDraft:V.setRenameBranchNameDraft,renameBranchDraftState:V.renameBranchDraftState,isRenamingBranch:V.isRenamingBranch,hasDockPanes:j.hasDockPanes,toggleDock:j.toggleDock,dockVisible:j.dockVisible,showEditorPaneContainer:j.showEditorPaneContainer,toggleZenMode:j.toggleZenMode,isWebAppMode:V.isWebAppMode,editorContainerRef:j.editorContainerRef,editorInstanceRef:j.editorInstanceRef,dockContainerRef:j.dockContainerRef,detachedTabs:j.detachedTabs,activeDetachedTab:j.activeDetachedTab,detachedDockPane:j.detachedDockPane,TERMINAL_TAB_PATH:V.TERMINAL_TAB_PATH,isIOSDevice:V.isIOSDevice,currentBranchRecord:V.currentBranchRecord,currentChatJid:V.currentChatJid,currentChatBranches:V.currentChatBranches,formatBranchPickerLabel:V.formatBranchPickerLabel,activeSearchScopeLabel:V.activeSearchScopeLabel,currentHashtag:V.currentHashtag,searchQuery:V.searchQuery,oobePanelState:V.oobePanelState,composePrefillRequest:V.composePrefillRequest,requestComposePrefill:V.requestComposePrefill,handleOobeSetupProvider:V.handleOobeSetupProvider,handleOobeShowModelPicker:V.handleOobeShowModelPicker,handleOobeOpenWorkspace:V.handleOobeOpenWorkspace,handleDismissProviderMissingOobe:V.handleDismissProviderMissingOobe,handleCompleteProviderReadyOobe:V.handleCompleteProviderReadyOobe,posts:V.posts,hasMore:V.hasMore,loadMore:V.loadMore,timelineRef:V.timelineRef,agents:V.agents,userProfile:V.userProfile,removingPostIds:V.removingPostIds,extensionStatusPanels:V.extensionStatusPanels,pendingExtensionPanelActions:V.pendingExtensionPanelActions,searchOpen:V.searchOpen,followupQueueItems:V.followupQueueItems,viewStateRef:V.viewStateRef,loadPosts:V.loadPosts,scrollToBottom:V.scrollToBottom,searchScope:V.searchScope,tabStripTabs:V.tabStripTabs,tabStripActiveId:V.tabStripActiveId,handleTabActivate:V.handleTabActivate,previewTabs:V.previewTabs,diffTabs:V.diffTabs,handleTabTogglePreview:V.handleTabTogglePreview,handleTabToggleDiff:V.handleTabToggleDiff,panePopoutPath:V.panePopoutPath,tabPaneOverrides:V.tabPaneOverrides,handleTabClose:V.handleTabClose,handleTabCloseOthers:V.handleTabCloseOthers,handleTabCloseAll:V.handleTabCloseAll,handleTabTogglePin:V.handleTabTogglePin,handleTabEditSource:V.handleTabEditSource,handleReattachPane:j.reattachPane,openEditor:V.openEditor,openTerminalTab:V.openTerminalTab,openVncTab:V.openVncTab,fileRefs:K.fileRefs,folderRefs:K.folderRefs,messageRefs:K.messageRefs,followupQueueCount:K.followupQueueCount,attachmentPreview:K.attachmentPreview,setAttachmentPreview:K.setAttachmentPreview,extensionWorkingState:K.extensionWorkingState,activeChatAgents:Q.activeChatAgents,connectionStatus:Q.connectionStatus,stateAccessFailed:Q.stateAccessFailed,activeModel:Q.activeModel,activeModelUsage:Q.activeModelUsage,activeThinkingLevel:Q.activeThinkingLevel,supportsThinking:Q.supportsThinking,contextUsage:Q.contextUsage,notificationsEnabled:Q.notificationsEnabled,notificationPermission:Q.notificationPermission,handleToggleNotifications:Q.handleToggleNotifications,setActiveModel:Q.setActiveModel,applyModelState:Q.applyModelState,setPendingRequest:q.setPendingRequest,pendingRequestRef:q.pendingRequestRef,...G,...Y,...X,...Z,...L,...q,...K,...Q};return{branchLoaderMode:$.branchLoaderMode,panePopoutMode:$.panePopoutMode,branchLoaderState:$.branchLoaderState,panePopoutOptions:F,mainShellOptions:B}}function zT(_){let{steerQueuedTurnId:$,currentTurnId:j,agentStatus:G}=_;return Boolean($&&$===(G?.turn_id||j))}function VK(_){let $=zT({steerQueuedTurnId:_.agentState.steerQueuedTurnId,currentTurnId:_.agentState.currentTurnId,agentStatus:_.agentState.agentStatus});return qK({routing:{branchLoaderMode:_.routeState.branchLoaderMode,panePopoutMode:_.routeState.panePopoutMode,branchLoaderState:_.surface.branchLoaderState},paneRuntime:_.paneRuntime,splitters:_.splitters,branchPaneActions:_.orchestration.branchPaneActions,timelineViewActions:_.orchestration.timelineViewActions,composeReferenceActions:_.interaction.composeReferenceActions,sidepanelActions:_.orchestration.sidepanelActions,shellState:{appShellRef:_.surface.appShellRef,workspaceOpen:_.surface.workspaceOpen,editorOpen:_.editorState.editorOpen,chatOnlyMode:_.routeState.chatOnlyMode,isRenameBranchFormOpen:_.surface.isRenameBranchFormOpen,renameBranchNameDraft:_.surface.renameBranchNameDraft,renameBranchNameInputRef:_.surface.renameBranchNameInputRef,setRenameBranchNameDraft:_.surface.setRenameBranchNameDraft,renameBranchDraftState:_.surface.renameBranchDraftState,isRenamingBranch:_.surface.isRenamingBranch,isWebAppMode:_.surface.isWebAppMode,TERMINAL_TAB_PATH:_.helpers.terminalTabPath,isIOSDevice:_.helpers.isIOSDevice,currentBranchRecord:_.surface.currentBranchRecord,currentChatJid:_.routeState.currentChatJid,currentChatBranches:_.surface.currentChatBranches,formatBranchPickerLabel:_.helpers.formatBranchPickerLabel,activeSearchScopeLabel:_.surface.activeSearchScopeLabel,currentHashtag:_.surface.currentHashtag,searchQuery:_.surface.searchQuery,oobePanelState:_.surface.oobePanelState,composePrefillRequest:_.surface.composePrefillRequest,requestComposePrefill:_.surface.requestComposePrefill,handleOobeSetupProvider:_.surface.handleOobeSetupProvider,handleOobeShowModelPicker:_.surface.handleOobeShowModelPicker,handleOobeOpenWorkspace:_.surface.handleOobeOpenWorkspace,handleDismissProviderMissingOobe:_.surface.handleDismissProviderMissingOobe,handleCompleteProviderReadyOobe:_.surface.handleCompleteProviderReadyOobe,posts:_.timeline.posts,hasMore:_.timeline.hasMore,loadMore:_.timeline.loadMore,timelineRef:_.surface.timelineRef,agents:_.surface.agents,userProfile:_.surface.userProfile,removingPostIds:_.surface.removingPostIds,extensionStatusPanels:_.surface.extensionStatusPanels,pendingExtensionPanelActions:_.surface.pendingExtensionPanelActions,searchOpen:_.surface.searchOpen,followupQueueItems:_.surface.followupQueueItems,viewStateRef:_.surface.viewStateRef,loadPosts:_.timeline.loadPosts,scrollToBottom:_.timeline.scrollToBottom,searchScope:_.surface.searchScope,tabStripTabs:_.editorState.tabStripTabs,tabStripActiveId:_.editorState.tabStripActiveId,handleTabActivate:_.editorState.handleTabActivate,previewTabs:_.editorState.previewTabs,diffTabs:_.editorState.diffTabs,handleTabTogglePreview:_.editorState.handleTabTogglePreview,handleTabToggleDiff:_.editorState.handleTabToggleDiff,panePopoutPath:_.routeState.panePopoutPath,tabPaneOverrides:_.editorState.tabPaneOverrides,handleTabClose:_.editorState.handleTabClose,handleTabCloseOthers:_.editorState.handleTabCloseOthers,handleTabCloseAll:_.editorState.handleTabCloseAll,handleTabTogglePin:_.editorState.handleTabTogglePin,handleTabEditSource:_.editorState.handleTabEditSource,openEditor:_.editorState.openEditor,openTerminalTab:_.paneRuntime.openTerminalTab,openVncTab:_.paneRuntime.openVncTab},agentState:{agentStatus:_.agentState.agentStatus,isCompactionStatus:_.agentState.isCompactionStatus,agentDraft:_.agentState.agentDraft,agentPlan:_.agentState.agentPlan,agentThought:_.agentState.agentThought,pendingRequest:_.agentState.pendingRequest,intentToast:_.surface.intentToast,currentTurnId:_.agentState.currentTurnId,steerQueued:$,handlePanelToggle:_.interaction.handlePanelToggle,setPendingRequest:_.agentState.setPendingRequest,pendingRequestRef:_.agentState.pendingRequestRef,handleInjectQueuedFollowup:_.orchestration.followupActions.handleInjectQueuedFollowup,handleRemoveQueuedFollowup:_.orchestration.followupActions.handleRemoveQueuedFollowup,handleMoveQueuedFollowup:_.orchestration.followupActions.handleMoveQueuedFollowup},composeState:{btwSession:_.surface.btwSession,floatingWidget:_.surface.floatingWidget,fileRefs:_.surface.fileRefs,folderRefs:_.surface.folderRefs,messageRefs:_.surface.messageRefs,followupQueueCount:_.surface.followupQueueCount,attachmentPreview:_.surface.attachmentPreview,setAttachmentPreview:_.surface.setAttachmentPreview,handleMessageResponse:_.orchestration.followupActions.handleMessageResponse,isComposeBoxAgentActive:_.orchestration.isComposeBoxAgentActive,extensionWorkingState:_.surface.extensionWorkingState},modelState:{activeChatAgents:_.surface.activeChatAgents,connectionStatus:_.surface.connectionStatus,stateAccessFailed:_.surface.stateAccessFailed,activeModel:_.surface.activeModel,agentModelsPayload:_.surface.agentModelsPayload,activeModelUsage:_.surface.activeModelUsage,activeThinkingLevel:_.surface.activeThinkingLevel,supportsThinking:_.surface.supportsThinking,contextUsage:_.surface.contextUsage,notificationsEnabled:_.surface.notificationsEnabled,notificationPermission:_.surface.notificationPermission,handleToggleNotifications:_.surface.handleToggleNotifications,setActiveModel:_.surface.setActiveModel,applyModelState:_.orchestration.chatRefreshLifecycle.applyModelState}})}k0();var KK="(min-width: 1024px) and (orientation: landscape)";function Tj(_=typeof window<"u"?window:null){return _&&typeof _==="object"?_:null}function QK(_,$){let j=Tj(_);if(!j?.localStorage?.getItem)return null;try{let G=j.localStorage.getItem($);if(G===null)return null;return G==="true"}catch{return null}}function AT(_,$,j){let G=Tj(_);if(!G?.localStorage?.setItem)return;try{G.localStorage.setItem($,String(Boolean(j)))}catch{return}}function f6(_=typeof window<"u"?window:null){let $=Tj(_);if(!$?.matchMedia)return"desktop";return $.matchMedia("(min-width: 1024px) and (orientation: landscape)").matches?"desktop":"narrow"}function BK(_){return _==="narrow"?"workspaceOpen.narrow":"workspaceOpen.desktop"}function FK(_={}){let{runtime:$=typeof window<"u"?window:null,bucket:j=null,allowLegacyFallback:G=!1,defaultValue:Y=!1}=_,X=j||f6($),Z=BK(X),L=QK($,Z);if(typeof L==="boolean")return L;if(G&&X==="desktop"){let V=QK($,"workspaceOpen");if(typeof V==="boolean")return V}return Y}function NK(_,$={}){let{runtime:j=typeof window<"u"?window:null,bucket:G=null}=$,Y=G||f6(j);AT(j,BK(Y),Boolean(_))}G6();var JT=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function UK(_,$={}){let j=$.window??(typeof window<"u"?window:null),G=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Y=()=>{_(S1({window:j,navigator:G}))};Y();let Z=JT.map((L)=>{try{return j.matchMedia?.(L)??null}catch{return null}}).filter(Boolean).map((L)=>{if(typeof L.addEventListener==="function")return L.addEventListener("change",Y),()=>L.removeEventListener("change",Y);if(typeof L.addListener==="function")return L.addListener(Y),()=>L.removeListener(Y);return()=>{}});return j.addEventListener?.("focus",Y),j.addEventListener?.("pageshow",Y),()=>{for(let L of Z)L();j.removeEventListener?.("focus",Y),j.removeEventListener?.("pageshow",Y)}}function x8(_,$={}){let j=$.window??(typeof window<"u"?window:null),G=$.document??(typeof document<"u"?document:null);if(!j||!G||typeof _!=="function")return()=>{};let Y=()=>{if(G.visibilityState&&G.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Y),j.addEventListener?.("pageshow",Y),G.addEventListener?.("visibilitychange",Y),()=>{j.removeEventListener?.("focus",Y),j.removeEventListener?.("pageshow",Y),G.removeEventListener?.("visibilitychange",Y)}}function EK(_={}){return S1(_)&&F2(_)}function kT(_){let $=_?.activeElement;if(!$)return!1;let j=String($.tagName||$.nodeName||"").toLowerCase();if(j==="textarea"||j==="select")return!0;if(j==="input"){let G=String($.type||"text").toLowerCase();return!["button","checkbox","color","file","hidden","image","radio","range","reset","submit"].includes(G)}if($.isContentEditable===!0)return!0;if(typeof $.closest==="function")try{return Boolean($.closest('[contenteditable="true"], [contenteditable="plaintext-only"]'))}catch(G){console.debug("[mobile-viewport] Ignoring activeElement.closest failure during keyboard detection.",G)}return!1}function MT(_={},$={}){let j=_.window??(typeof window<"u"?window:null),G=Number(j?.visualViewport?.height||0),Y=Number(j?.innerHeight||0),X=Number.isFinite(G)&&G>0,Z=Number.isFinite(Y)&&Y>0;if(X){if($.keyboardActive===!0){let L=Number(j?.visualViewport?.offsetTop||0),V=G+Math.max(0,Number.isFinite(L)?L:0);return Math.round(V)}if($.ignoreStandaloneChromeGap===!0&&Z&&Y>G)return Math.round(Y);return Math.round(G)}if(Z)return Math.round(Y);return null}function TT(_={},$={}){if(!EK(_))return null;let j=_.window??(typeof window<"u"?window:null),G=_.document??(typeof document<"u"?document:null);if(!j||!G?.documentElement)return null;let Y=kT(G),X=MT({window:j},{ignoreStandaloneChromeGap:!0,keyboardActive:Y});if(X&&X>0)G.documentElement.style.setProperty("--app-height",`${X}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch(Z){console.debug("[mobile-viewport] Ignoring scrollTo failure during standalone viewport reset.",Z)}try{if(G.scrollingElement)G.scrollingElement.scrollTop=0,G.scrollingElement.scrollLeft=0;if(G.documentElement)G.documentElement.scrollTop=0,G.documentElement.scrollLeft=0;if(G.body)G.body.scrollTop=0,G.body.scrollLeft=0}catch(Z){console.debug("[mobile-viewport] Ignoring DOM scroll reset failure during standalone viewport sync.",Z)}}return X}function DK(_={}){if(!EK(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};j.documentElement?.style?.setProperty?.("--app-height","100vh");let G=0,Y=new Set,X=()=>{if(G)$.cancelAnimationFrame?.(G),G=0;for(let Q of Y)$.clearTimeout?.(Q);Y.clear()},Z=()=>{G=0,TT({window:$,document:j})},L=()=>{if(G)$.cancelAnimationFrame?.(G);G=$.requestAnimationFrame?.(Z)??0},V=()=>{L();for(let Q of[80,220,420]){let F=$.setTimeout?.(()=>{Y.delete(F),L()},Q);if(F!=null)Y.add(F)}},q=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;V()},K=$.visualViewport;return V(),$.addEventListener("focus",V),$.addEventListener("pageshow",V),$.addEventListener("resize",V),$.addEventListener("orientationchange",V),j.addEventListener("visibilitychange",q),j.addEventListener("focusin",V,!0),K?.addEventListener?.("resize",V),K?.addEventListener?.("scroll",V),()=>{X(),$.removeEventListener("focus",V),$.removeEventListener("pageshow",V),$.removeEventListener("resize",V),$.removeEventListener("orientationchange",V),j.removeEventListener("visibilitychange",q),j.removeEventListener("focusin",V,!0),K?.removeEventListener?.("resize",V),K?.removeEventListener?.("scroll",V)}}var yj="resume-layout-settling",yT=220,x5=new WeakMap;function wT(_){if(!_){V_(I8,"");return}V_(I8,JSON.stringify({question:_.question||"",answer:_.answer||"",thinking:_.thinking||"",error:_.error||null,status:_.status||"success"}))}function IT(_={}){if(_.panePopoutMode)return!1;let $=typeof _.search==="string"?_.search:"";return!/(?:^|[?&])pane_popout=1(?:&|$)/.test($)}function xT(_,$={}){if(!_)return()=>{};let{durationMs:j=yT,scheduleTimeout:G=setTimeout,clearScheduledTimeout:Y=clearTimeout}=$,X=x5.get(_);if(X)Y(X);_.classList.add(yj);let Z=G(()=>{if(x5.get(_)===Z)_.classList.remove(yj),x5.delete(_)},j);return x5.set(_,Z),()=>{let L=x5.get(_);if(L)Y(L),x5.delete(_);_.classList.remove(yj)}}function CT(_,$){if(!_?.getElementById)return;let j=encodeURIComponent(String($||"0")),G={"dynamic-manifest":`/manifest.json?v=${j}`,"dynamic-favicon":`/favicon.ico?v=${j}`,"dynamic-apple-touch-icon":`/apple-touch-icon.png?v=${j}`,"dynamic-apple-touch-icon-180":`/apple-touch-icon-180x180.png?v=${j}`,"dynamic-apple-touch-icon-167":`/apple-touch-icon-167x167.png?v=${j}`,"dynamic-apple-touch-icon-152":`/apple-touch-icon-152x152.png?v=${j}`,"dynamic-apple-touch-icon-precomposed":`/apple-touch-icon-precomposed.png?v=${j}`};for(let[Y,X]of Object.entries(G)){let Z=_.getElementById(Y);if(Z&&Z.href!==X)Z.href=X}}function HK(_){let{isRenameBranchFormOpen:$,renameBranchNameInputRef:j,appShellRef:G,setIsWebAppMode:Y,workspaceOpen:X,setWorkspaceOpen:Z,btwSession:L,agents:V,agentsRef:q,currentChatJid:K,activeChatJidRef:Q,userProfile:F,userProfileRef:B,brandingRef:U,panePopoutMode:H=!1}=_;uZ(30000),g(()=>{if(!$)return;requestAnimationFrame(()=>{if($)j.current?.focus?.(),j.current?.select?.()})},[$,j]),g(()=>SX(),[]),g(()=>UK(Y),[Y]),g(()=>{let M=()=>{},z=x8(()=>{E7(),M(),M=xT(G.current)});return()=>{z(),M()}},[G]);let D=u(f6());return g(()=>{NK(X,{bucket:D.current})},[X]),g(()=>{if(typeof window>"u"||!window.matchMedia)return;let M=window.matchMedia(KK),z=()=>{let O=f6(window);if(D.current===O)return;let x=D.current;if(D.current=O,x==="desktop"&&O==="narrow")Z(!1)};if(M.addEventListener)M.addEventListener("change",z);else if(M.addListener)M.addListener(z);return()=>{if(M.removeEventListener)M.removeEventListener("change",z);else if(M.removeListener)M.removeListener(z)}},[Z]),g(()=>DK(),[]),g(()=>{wT(L)},[L]),g(()=>{q.current=V||{}},[V,q]),g(()=>{Q.current=K},[Q,K]),g(()=>{B.current=F||{name:"You",avatar_url:null,avatar_background:null}},[F,B]),{applyBranding:f((M,z,O=null)=>{if(typeof document>"u")return;let x=(M||"").trim()||"PiClaw";if(U.current.title!==x){if(IT({panePopoutMode:H,search:typeof window<"u"?window.location.search:""})){document.title=x;let A=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(A&&A.getAttribute("content")!==x)A.setAttribute("content",x)}U.current.title=x}let I=z?`${z}|${O||""}`:"";if(U.current.avatarBase!==I){U.current.avatarBase=I;let A=O||Date.now();CT(document,A)}},[U])}}k0();function WK(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen&&!$.autoOpenEditor)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function wj(_){if(typeof _==="string")return _.trim();if(typeof _==="number")return Number.isFinite(_)?String(_):"";if(typeof _==="bigint")return String(_);return""}function C8(_,$){let j=Array.isArray(_)?_:[],G=wj($);if(!G)return j;if(j.includes(G))return j;return[...j,G]}function P8(_,$){let j=Array.isArray(_)?_:[],G=wj($);if(!G)return j;if(!j.includes(G))return j;return j.filter((Y)=>Y!==G)}function R8(_){if(!Array.isArray(_))return[];let $=[],j=new Set;for(let G of _){let Y=wj(G);if(!Y||j.has(Y))continue;j.add(Y),$.push(Y)}return $}async function OK(_){let{hashtag:$,setCurrentHashtag:j,setPosts:G,loadPosts:Y}=_;j($),G(null),await Y($)}async function zK(_){let{setCurrentHashtag:$,setSearchQuery:j,setPosts:G,loadPosts:Y}=_;$(null),j(null),G(null),await Y()}async function Ij(_){let{query:$,scope:j,currentChatJid:G,currentRootChatJid:Y,searchPosts:X,setSearchScope:Z,setSearchQuery:L,setCurrentHashtag:V,setPosts:q,setHasMore:K}=_,Q=typeof $==="string"?$.trim():"";if(!Q)return;let F=j==="root"||j==="all"?j:"current";Z(F),L(Q),V(null),q(null);try{let B=await X(Q,50,0,G,F,Y,_.filters);q(Array.isArray(B?.results)?B.results:[]),K(!1)}catch(B){console.error("Failed to search:",B),q([])}}async function AK(_){let{post:$,posts:j,currentChatJid:G,deletePost:Y,preserveTimelineScrollTop:X,setPosts:Z,setRemovingPostIds:L,hasMoreRef:V,loadMoreRef:q,confirm:K=(E)=>window.confirm(E),showAlert:Q=(E)=>alert(E),scheduleTimeout:F=(E,M)=>{setTimeout(E,M)}}=_;if(!$)return;let B=$.id,U=typeof $?.chat_jid==="string"&&$.chat_jid.trim()?$.chat_jid.trim():G,H=j?.filter((E)=>E?.data?.thread_id===B&&E?.id!==B).length||0;if(H>0){if(!K(`Delete this message and its ${H} replies?`))return}let D=(E)=>{if(!E.length)return;L((M)=>{let z=new Set(M);return E.forEach((O)=>z.add(O)),z}),F(()=>{if(X(()=>{Z((M)=>M?M.filter((z)=>!E.includes(z.id)):M)}),L((M)=>{let z=new Set(M);return E.forEach((O)=>z.delete(O)),z}),V.current)q.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let E=await Y(B,H>0,U);if(E?.ids?.length)D(E.ids)}catch(E){let M=E instanceof Error?E.message:String(E||"");if(H===0&&M.includes("Replies exist")){if(!K("Delete this message and its replies?"))return;let O=await Y(B,!0,U);if(O?.ids?.length)D(O.ids);return}console.error("Failed to delete post:",E),Q(`Failed to delete message: ${M}`)}}async function JK(_){let{id:$,targetChatJid:j,currentChatJid:G,getThread:Y,setPosts:X,getElementById:Z=(Q)=>document.getElementById(Q),scheduleRaf:L=(Q)=>requestAnimationFrame(Q),scheduleTimeout:V=(Q,F)=>{setTimeout(Q,F)}}=_,q=(Q)=>{Q.scrollIntoView({behavior:"smooth",block:"center"}),Q.classList.add("post-highlight"),V(()=>Q.classList.remove("post-highlight"),2000)},K=Z(`post-${$}`);if(K){q(K);return}try{let Q=typeof j==="string"&&j.trim()?j.trim():G,B=(await Y($,Q))?.thread?.[0];if(!B)return;X((U)=>{if(!U)return[B];if(U.some((H)=>H.id===B.id))return U;return[...U,B]}),L(()=>{V(()=>{let U=Z(`post-${$}`);if(U)q(U)},50)})}catch(Q){console.error("[scrollToMessage] Failed to fetch message",$,Q)}}function PT(_){if(typeof _==="string"&&_.trim())return _.trim();return"Could not send your message."}function RT(_){let{id:$,targetChatJid:j=null,currentChatJid:G,currentHashtag:Y=null,searchQuery:X=null,searchOpen:Z=!1,setCurrentHashtag:L,setSearchQuery:V,setSearchOpen:q,setMessageRefs:K,navigate:Q,chatOnlyMode:F,baseHref:B=typeof window<"u"?window.location.href:"http://localhost/"}=_,U=String($??"").trim();if(!U)return!1;let H=typeof j==="string"&&j.trim()?j.trim():G,D=H!==G,E=Boolean(Z||X||Y);if(!D&&!E)return K((M)=>C8(M,U)),!0;if(K([U]),L?.(null),V?.(null),q?.(!1),D&&typeof Q==="function"){let M=w1(B,H,{chatOnly:F});Q(M)}return!0}function kK(_){let{setIntentToast:$,intentToastTimerRef:j,editorOpen:G,openEditor:Y,resolvePane:X,tabStripActiveId:Z,setFileRefs:L,setFolderRefs:V,setMessageRefs:q,currentChatJid:K,currentHashtag:Q,searchQuery:F,searchOpen:B,setCurrentHashtag:U,setSearchQuery:H,setSearchOpen:D,navigate:E,chatOnlyMode:M,baseHref:z,getThread:O,setPosts:x}=_,I=f(()=>{if(j.current)clearTimeout(j.current),j.current=null;$(null)},[j,$]);g(()=>{return()=>{I()}},[I]);let A=f((h)=>{L(($0)=>C8($0,h))},[L]),k=f((h)=>{L(($0)=>P8($0,h))},[L]),W=f(()=>{L([])},[L]),T=f((h)=>{L(R8(h))},[L]),y=f((h)=>{V(($0)=>C8($0,h))},[V]),J=f((h)=>{V(($0)=>P8($0,h))},[V]),P=f(()=>{V([])},[V]),R=f((h)=>{V(R8(h))},[V]),b=f((h,$0=null,V0="info",O0=3000)=>{I(),$({title:h,detail:$0||null,kind:V0||"info"}),j.current=setTimeout(()=>{$((a)=>a?.title===h?null:a)},O0)},[I,j,$]),c=f((h,{autoOpenEditor:$0=!1}={})=>{let V0=WK(h,{editorOpen:G,autoOpenEditor:$0,resolvePane:X});if(V0.kind==="open"){Y(V0.path);return}if(V0.kind==="toast")b(V0.title,V0.detail,V0.level)},[G,Y,X,b]),r=f((h)=>{c(h,{autoOpenEditor:!1})},[c]),e=f((h)=>{c(h,{autoOpenEditor:!0})},[c]),m=f(()=>{let h=Z;if(h)A(h)},[A,Z]),_0=f((h,$0=null)=>{RT({id:h,targetChatJid:$0,currentChatJid:K,currentHashtag:Q,searchQuery:F,searchOpen:B,setCurrentHashtag:U,setSearchQuery:H,setSearchOpen:D,setMessageRefs:q,navigate:E,chatOnlyMode:M,baseHref:z})},[z,M,K,Q,E,B,F,U,q,D,H]),H0=f(async(h,$0=null)=>{await JK({id:h,targetChatJid:$0,currentChatJid:K,getThread:O,setPosts:x})},[K,O,x]),Y0=f((h)=>{q(($0)=>P8($0,h))},[q]),j0=f(()=>{q([])},[q]),L0=f((h)=>{q(R8(h))},[q]),F0=f((h)=>{b("Compose failed",PT(h),"error",5000)},[b]);return{clearIntentToast:I,addFileRef:A,removeFileRef:k,clearFileRefs:W,setFileRefsFromCompose:T,addFolderRef:y,removeFolderRef:J,clearFolderRefs:P,setFolderRefsFromCompose:R,showIntentToast:b,openFileFromPill:r,openTimelineFileFromPill:e,attachActiveEditorFile:m,addMessageRef:_0,scrollToMessage:H0,removeMessageRef:Y0,clearMessageRefs:j0,setMessageRefsFromCompose:L0,handleComposeSubmitError:F0}}k0();async function MK(_){let{panelKey:$,expanded:j,currentTurnIdRef:G,thoughtExpandedRef:Y,draftExpandedRef:X,setAgentThoughtVisibility:Z,getAgentThought:L,thoughtBufferRef:V,draftBufferRef:q,setAgentThought:K,setAgentDraft:Q}=_;if($!=="thought"&&$!=="draft")return;let F=G.current;if($==="thought"){if(Y.current=j,F)try{await Z(F,"thought",j)}catch(B){console.warn("Failed to update thought visibility:",B)}if(!j)return;try{let B=F?await L(F,"thought"):null;if(B?.text)V.current=B.text;K((U)=>({...U||{text:"",totalLines:0},fullText:V.current||U?.fullText||"",totalLines:Number.isFinite(B?.total_lines)?B.total_lines:U?.totalLines||0}))}catch(B){console.warn("Failed to fetch full thought:",B)}return}if(X.current=j,F)try{await Z(F,"draft",j)}catch(B){console.warn("Failed to update draft visibility:",B)}if(!j)return;try{let B=F?await L(F,"draft"):null;if(B?.text)q.current=B.text;Q((U)=>({...U||{text:"",totalLines:0},fullText:q.current||U?.fullText||"",totalLines:Number.isFinite(B?.total_lines)?B.total_lines:U?.totalLines||0}))}catch(B){console.warn("Failed to fetch full draft:",B)}}function fT(_){if(!_)return _;if(!(_.last_activity||_.lastActivity))return _;let{last_activity:$,lastActivity:j,...G}=_;return G}function ST(_){if(!_||typeof _!=="object")return{type:"active",last_activity:!0};return{..._,last_activity:!0}}function TK(_){let{lastActivityTtlMs:$,lastActivityTimerRef:j,lastActivityTokenRef:G,lastAgentEventRef:Y,lastSilenceNoticeRef:X,isAgentRunningRef:Z,setIsAgentTurnActive:L,setAgentStatus:V,draftBufferRef:q,thoughtBufferRef:K,pendingRequestRef:Q,lastAgentResponseRef:F,currentTurnIdRef:B,steerQueuedTurnIdRef:U,agentStatusRef:H,silentRecoveryRef:D,thoughtExpandedRef:E,draftExpandedRef:M,setCurrentTurnId:z,setSteerQueuedTurnId:O,currentTurnIdRefForPanel:x,setAgentThoughtVisibility:I,getAgentThought:A,setAgentThought:k,setAgentDraft:W}=_,T=f((c={})=>{let r=Number(c.atMs),e=Number.isFinite(r)&&r>0?r:Date.now();if(Y.current=e,c.running)Z.current=!0,L((m)=>m?m:!0);if(c.clearSilence)X.current=0},[Z,Y,X,L]),y=f(()=>{if(j.current)clearTimeout(j.current),j.current=null;G.current=0},[j,G]);g(()=>()=>{y()},[y]);let J=f(()=>{y(),V((c)=>fT(c))},[y,V]),P=f((c)=>{if(!c)return;y();let r=Date.now();G.current=r,V(ST(c)),j.current=setTimeout(()=>{if(G.current!==r)return;V((e)=>{if(!e||!(e.last_activity||e.lastActivity))return e;return null})},$)},[y,j,G,$,V]),R=f(()=>{Z.current=!1,L(!1),Y.current=null,X.current=0,q.current="",K.current="",Q.current=null,F.current=null,B.current=null,U.current=null,H.current=null,D.current={inFlight:!1,lastAttemptAt:0,turnId:null},y(),z(null),O(null),E.current=!1,M.current=!1},[H,y,B,q,M,Z,Y,F,X,Q,z,L,O,D,U,K,E]),b=f(async(c,r)=>{await MK({panelKey:c,expanded:r,currentTurnIdRef:x,thoughtExpandedRef:E,draftExpandedRef:M,setAgentThoughtVisibility:I,getAgentThought:A,thoughtBufferRef:K,draftBufferRef:q,setAgentThought:k,setAgentDraft:W})},[x,q,M,A,W,k,I,K,E]);return{noteAgentActivity:T,clearLastActivityTimer:y,clearLastActivityFlag:J,showLastActivity:P,clearAgentRunState:R,handlePanelToggle:b}}k0();function f8(_){return _?{..._}:{text:"",totalLines:0}}function yK(_){return Array.isArray(_)?_.map(($)=>({...$})):[]}function gT(_){return{inFlight:Boolean(_?.inFlight),lastAttemptAt:Number(_?.lastAttemptAt||0),turnId:typeof _?.turnId==="string"?_.turnId:null}}function uT(){return{agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}}function wK(_){return{agentStatus:_.agentStatus,agentDraft:f8(_.agentDraft),agentPlan:_.agentPlan||"",agentThought:f8(_.agentThought),pendingRequest:_.pendingRequest,currentTurnId:_.currentTurnId||null,steerQueuedTurnId:_.steerQueuedTurnId||null,isAgentTurnActive:Boolean(_.isAgentTurnActive),followupQueueItems:yK(_.followupQueueItems),activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:Boolean(_.supportsThinking),activeModelUsage:_.activeModelUsage,contextUsage:_.contextUsage,isAgentRunning:Boolean(_.isAgentRunning),wasAgentActive:Boolean(_.wasAgentActive),draftBuffer:_.draftBuffer||"",thoughtBuffer:_.thoughtBuffer||"",lastAgentEvent:_.lastAgentEvent||null,lastSilenceNotice:Number(_.lastSilenceNotice||0),lastAgentResponse:_.lastAgentResponse||null,currentTurnIdRef:_.currentTurnIdRef||null,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef||null,thoughtExpanded:Boolean(_.thoughtExpanded),draftExpanded:Boolean(_.draftExpanded),agentStatusRef:_.agentStatusRef||null,silentRecovery:gT(_.silentRecovery)}}function IK(_){let $=_.snapshot||uT(),{refs:j,setters:G}=_;return _.clearLastActivityTimer?.(),j.isAgentRunningRef.current=Boolean($.isAgentRunning),j.wasAgentActiveRef.current=Boolean($.wasAgentActive),G.setIsAgentTurnActive(Boolean($.isAgentTurnActive)),j.lastAgentEventRef.current=$.lastAgentEvent||null,j.lastSilenceNoticeRef.current=Number($.lastSilenceNotice||0),j.draftBufferRef.current=$.draftBuffer||"",j.thoughtBufferRef.current=$.thoughtBuffer||"",j.pendingRequestRef.current=$.pendingRequest||null,j.lastAgentResponseRef.current=$.lastAgentResponse||null,j.currentTurnIdRef.current=$.currentTurnIdRef||null,j.steerQueuedTurnIdRef.current=$.steerQueuedTurnIdRef||null,j.agentStatusRef.current=$.agentStatusRef||null,j.silentRecoveryRef.current=$.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},j.thoughtExpandedRef.current=Boolean($.thoughtExpanded),j.draftExpandedRef.current=Boolean($.draftExpanded),G.setAgentStatus($.agentStatus||null),G.setAgentDraft(f8($.agentDraft)),G.setAgentPlan($.agentPlan||""),G.setAgentThought(f8($.agentThought)),G.setPendingRequest($.pendingRequest||null),G.setCurrentTurnId($.currentTurnId||null),G.setSteerQueuedTurnId($.steerQueuedTurnId||null),G.setFollowupQueueItems(yK($.followupQueueItems)),G.setActiveModel($.activeModel||null),G.setActiveThinkingLevel($.activeThinkingLevel||null),G.setSupportsThinking(Boolean($.supportsThinking)),G.setActiveModelUsage($.activeModelUsage??null),G.setContextUsage($.contextUsage??null),$}function xj(_){return String(_||"").trim()||"web:default"}function xK({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function bT(_){return xK(_)}function vT(_){let $=String(_?.data?.content||"").trim();if($)return $.replace(/\s+/g," ").slice(0,200);if((Array.isArray(_?.data?.content_blocks)?_.data.content_blocks:[]).length>0)return"Sent an attachment.";return""}function CK(_){let{isAgentTurnActive:$,steerQueuedTurnId:j,currentTurnId:G,steerQueuedTurnIdRef:Y,setSteerQueuedTurnId:X,agentStatus:Z,agentDraft:L,agentPlan:V,agentThought:q,pendingRequest:K,pendingRequestRef:Q,followupQueueItems:F,activeModel:B,activeThinkingLevel:U,supportsThinking:H,activeModelUsage:D,contextUsage:E,isAgentRunningRef:M,wasAgentActiveRef:z,draftBufferRef:O,thoughtBufferRef:x,lastAgentEventRef:I,lastSilenceNoticeRef:A,lastAgentResponseRef:k,currentTurnIdRef:W,thoughtExpandedRef:T,draftExpandedRef:y,agentStatusRef:J,silentRecoveryRef:P,clearLastActivityTimer:R,setIsAgentTurnActive:b,setAgentStatus:c,setAgentDraft:r,setAgentPlan:e,setAgentThought:m,setPendingRequest:_0,setCurrentTurnId:H0,setFollowupQueueItems:Y0,setActiveModel:j0,setActiveThinkingLevel:L0,setSupportsThinking:F0,setActiveModelUsage:h,setContextUsage:$0,lastNotifiedIdRef:V0,agentsRef:O0,notify:a,shouldNotifyLocallyForChat:X0}=_,W0=f((l0)=>{if(!bT({remainingQueueCount:l0,steerQueuedTurnId:Y.current,currentTurnId:W.current,isAgentTurnActive:$}))return;Y.current=null,X(null)},[$,W,X,Y]),P0=f(()=>wK({agentStatus:Z,agentDraft:L,agentPlan:V,agentThought:q,pendingRequest:K,currentTurnId:G,steerQueuedTurnId:j,isAgentTurnActive:$,followupQueueItems:F,activeModel:B,activeThinkingLevel:U,supportsThinking:H,activeModelUsage:D,contextUsage:E,isAgentRunning:M.current,wasAgentActive:z.current,draftBuffer:O.current,thoughtBuffer:x.current,lastAgentEvent:I.current,lastSilenceNotice:A.current,lastAgentResponse:k.current,currentTurnIdRef:W.current,steerQueuedTurnIdRef:Y.current,thoughtExpanded:T.current,draftExpanded:y.current,agentStatusRef:J.current,silentRecovery:P.current}),[B,D,U,L,V,Z,q,E,G,F,$,K,j,H,M,z,O,x,I,A,k,W,Y,T,y,J,P]),p0=f((l0)=>{IK({snapshot:l0,clearLastActivityTimer:R,refs:{isAgentRunningRef:M,wasAgentActiveRef:z,lastAgentEventRef:I,lastSilenceNoticeRef:A,draftBufferRef:O,thoughtBufferRef:x,pendingRequestRef:Q,lastAgentResponseRef:k,currentTurnIdRef:W,steerQueuedTurnIdRef:Y,agentStatusRef:J,silentRecoveryRef:P,thoughtExpandedRef:T,draftExpandedRef:y},setters:{setIsAgentTurnActive:b,setAgentStatus:c,setAgentDraft:r,setAgentPlan:e,setAgentThought:m,setPendingRequest:_0,setCurrentTurnId:H0,setSteerQueuedTurnId:X,setFollowupQueueItems:Y0,setActiveModel:j0,setActiveThinkingLevel:L0,setSupportsThinking:F0,setActiveModelUsage:h,setContextUsage:$0}})},[J,R,W,O,y,M,I,k,A,Q,j0,h,L0,r,e,c,m,$0,H0,Y0,b,_0,X,F0,P,Y,x,T,z]),u0=f((l0)=>{if(!l0)return;if(W.current===l0)return;W.current=l0,P.current={inFlight:!1,lastAttemptAt:0,turnId:l0},H0(l0),Y.current=null,X(null),O.current="",x.current="",r({text:"",totalLines:0}),e(""),m({text:"",totalLines:0}),_0(null),Q.current=null,k.current=null,T.current=!1,y.current=!1},[W,O,y,k,Q,r,e,m,H0,_0,X,P,Y,x,T]),Y_=f((l0)=>{let a0=k.current;if(!a0||!a0.post)return;if(l0&&a0.turnId&&a0.turnId!==l0)return;let R0=a0.post,i0=typeof R0?.chat_jid==="string"&&R0.chat_jid.trim()?R0.chat_jid.trim():"";if(!i0||!X0(i0))return;if(R0.id&&V0.current===R0.id)return;let m0=vT(R0);if(!m0)return;V0.current=R0.id||V0.current,k.current=null;let e0=O0.current||{},U_=(R0?.data?.agent_id?e0[R0.data.agent_id]:null)?.name||"Pi";a(U_,m0,{sourceLabel:"Local"})},[O0,k,V0,a,X0]);return{clearQueuedSteerStateIfStale:W0,snapshotCurrentChatPaneState:P0,restoreChatPaneState:p0,setActiveTurn:u0,notifyForFinalResponse:Y_}}k0();function S8(_){return _?.turn_id||_?.turnId||null}function C5(_){if(typeof _?.text!=="string"||!_.text)return null;let $=Number.isFinite(_?.totalLines)?Number(_.totalLines):Number.isFinite(_?.total_lines)?Number(_.total_lines):0;return{text:_.text,totalLines:$}}function Cj(_,$){return typeof _?.text==="string"&&_.text.length>=$.length}function Pj(_,$){return Number.isFinite($)?Number($):_?_.replace(/\r\n/g,`
`).split(`
`).length:0}function g8(_,$){return{text:_,totalLines:Pj(_,$)}}function Rj(_,$){return{text:$?.text||"",totalLines:bZ(_),fullText:_}}function PK(_,$,j){return j==="replace"?$:`${_||""}${$}`}function RK(_,$){let j=_||"";if($?.reset)j="";if($?.delta)j+=String($.delta);return j}function fK(_,$){let j=_||"";if($?.reset)j="";if(typeof $?.delta==="string")j+=$.delta;return j}function t1(_){return!_?.currentHashtag&&!_?.searchQuery&&!_?.searchOpen}function SK(_,$,j){return Boolean($&&j&&(_==="new_post"||_==="new_reply"||_==="agent_response"))}function fj(_,$){return _&&$}function gK(_,$){if(!Array.isArray(_)||_.length===0)return[$];if(_.some((j)=>j?.id===$?.id))return _;return[..._,$]}function uK(_,$){if(!Array.isArray(_))return _;if(!_.some((j)=>j?.id===$?.id))return _;return _.map((j)=>j?.id===$?.id?$:j)}function bK(_,$){if(!Array.isArray(_))return _;let j=Array.isArray($)?$:[];if(j.length===0)return _;let G=new Set(j),Y=_.filter((X)=>!G.has(X?.id));return Y.length===_.length?_:Y}async function vK(_){let{currentChatJid:$,getAgentStatus:j,activeChatJidRef:G,wasAgentActiveRef:Y,viewStateRef:X,refreshTimeline:Z,clearAgentRunState:L,agentStatusRef:V,pendingRequestRef:q,thoughtBufferRef:K,draftBufferRef:Q,setAgentStatus:F,setAgentDraft:B,setAgentPlan:U,setAgentThought:H,setPendingRequest:D,setActiveTurn:E,noteAgentActivity:M,clearLastActivityFlag:z,onStateAccessResult:O}=_,x=$;try{let I=await j(x);if(O?.(!1),G.current!==x)return null;if(!I||I.status!=="active"||!I.data){if(Y.current&&t1(X.current))Z();return Y.current=!1,L(),V.current=null,F(null),B({text:"",totalLines:0}),U(""),H({text:"",totalLines:0}),D(null),q.current=null,I??null}Y.current=!0;let A=I.data;V.current=A;let k=S8(A);if(k)E(k);M({running:!0,clearSilence:!0,atMs:d$(A)??Date.now()}),z(),F(A);let W=C5(I.thought);if(W)H((y)=>{if(Cj(y,W.text))return y;return K.current=W.text,W});let T=C5(I.draft);if(T)B((y)=>{if(Cj(y,T.text))return y;return Q.current=T.text,T});return I}catch(I){return O?.(!0),console.warn("Failed to fetch agent status:",I),null}}async function mK(_){let{isAgentRunningRef:$,pendingRequestRef:j,currentTurnIdRef:G,silentRecoveryRef:Y,silenceRefreshMs:X,viewStateRef:Z,refreshTimeline:L,refreshQueueState:V,refreshAgentStatus:q,now:K=()=>Date.now()}=_;if(!$.current)return null;if(j.current)return null;let Q=G.current||null,F=Y.current,B=K();if(F.inFlight)return null;if(F.turnId===Q&&B-F.lastAttemptAt<X)return null;F.inFlight=!0,F.lastAttemptAt=B,F.turnId=Q;try{if(t1(Z.current))await L();return await V(),await q()}finally{F.inFlight=!1}}function mT(_){if(!_||typeof _!=="object")return!1;let $=typeof _.type==="string"?_.type:"";if($==="tool_call"||$==="tool_status"||$==="intent")return!0;return Boolean(_.tool_name||_.tool_args)}function cK(_){let{isAgentRunningRef:$,pendingRequestRef:j,lastAgentEventRef:G,lastSilenceNoticeRef:Y,agentStatusRef:X,silenceWarningMs:Z,silenceFinalizeMs:L,silenceRefreshMs:V,isCompactionStatus:q,setAgentStatus:K,reconcileSilentTurn:Q,now:F=()=>Date.now()}=_;if(!$.current)return;if(j.current)return;let B=G.current;if(!B)return;let U=F(),H=U-B,D=X.current,E=q(D),M=mT(D);if(H>=L){if(!E&&!M)K({type:"waiting",title:"Re-syncing after a quiet period…"});Q();return}if(H>=Z&&U-Y.current>=V){if(!E&&!M){let z=Math.floor(H/1000);K({type:"waiting",title:`Waiting for model… No events for ${z}s`})}Y.current=U,Q()}}function cT(_){if(!_||typeof _!=="object")return null;let $=typeof _.type==="string"?_.type:"",j=typeof _.title==="string"&&_.title.trim()?_.title.trim():null,G=typeof _.tool_name==="string"&&_.tool_name.trim()?_.tool_name.trim():null,Y=typeof _.status==="string"&&_.status.trim()?_.status.trim():null;if($==="tool_call")return{summary:`Timed out while running ${j||G||"tool"}`,title:j,toolName:G,statusText:Y};if($==="tool_status"){let X=j||G||"tool";return{summary:Y?`Timed out after ${X}: ${Y}`:`Timed out after ${X}`,title:j,toolName:G,statusText:Y}}if(G||j)return{summary:`Timed out after ${j||G||"tool"}`,title:j,toolName:G,statusText:Y};return null}function hK(_){let{isAgentRunningRef:$,lastSilenceNoticeRef:j,lastAgentEventRef:G,currentTurnIdRef:Y,thoughtExpandedRef:X,draftExpandedRef:Z,draftBufferRef:L,thoughtBufferRef:V,pendingRequestRef:q,lastAgentResponseRef:K,agentStatusRef:Q,stalledPostIdRef:F,scrollToBottomRef:B,setCurrentTurnId:U,setAgentDraft:H,setAgentPlan:D,setAgentThought:E,setPendingRequest:M,setAgentStatus:z,setPosts:O,dedupePosts:x,now:I=()=>Date.now(),nowIso:A=()=>new Date().toISOString()}=_;if(!$.current)return;let k=cT(Q.current);$.current=!1,j.current=0,G.current=null,Q.current=null,Y.current=null,U(null),X.current=!1,Z.current=!1;let W=(L.current||"").trim();if(L.current="",V.current="",D(""),E({text:"",totalLines:0}),M(null),q.current=null,K.current=null,!W){H({text:"",totalLines:0}),z({type:"error",title:"Response stalled - No content received"});return}H({text:W,totalLines:Pj(W,null),fullText:W});let T=W,y=I(),J=A(),P={id:y,timestamp:J,data:{type:"agent_response",content:T,content_blocks:[{type:"timeout_marker",timed_out:!0,title:"Timed out",tool_action_summary:k?.summary||"",tool_title:k?.title||"",tool_name:k?.toolName||"",tool_status:k?.statusText||"",draft_recovered:!0}],agent_id:"default",is_local_stall:!0}};F.current=y,O((R)=>R?x([...R,P]):[P]),B.current?.(),z(null)}function hT(_){let{stalledPostIdRef:$,setPosts:j}=_,G=$.current;if(!G)return;j((Y)=>Y?Y.filter((X)=>X.id!==G):Y),$.current=null}function lT(_){hK(_)}function lK(_){let{viewStateRef:$,currentHashtag:j,searchQuery:G,searchOpen:Y}=_;g(()=>{$.current={currentHashtag:j,searchQuery:G,searchOpen:Y}},[j,Y,G,$])}function pK(_){let{stalledPostIdRef:$,setPosts:j,isAgentRunningRef:G,lastSilenceNoticeRef:Y,lastAgentEventRef:X,currentTurnIdRef:Z,thoughtExpandedRef:L,draftExpandedRef:V,draftBufferRef:q,thoughtBufferRef:K,pendingRequestRef:Q,lastAgentResponseRef:F,agentStatusRef:B,scrollToBottomRef:U,setCurrentTurnId:H,setAgentDraft:D,setAgentPlan:E,setAgentThought:M,setPendingRequest:z,setAgentStatus:O,dedupePosts:x}=_,I=f(()=>{hT({stalledPostIdRef:$,setPosts:j})},[j,$]),A=f(()=>{lT({isAgentRunningRef:G,lastSilenceNoticeRef:Y,lastAgentEventRef:X,currentTurnIdRef:Z,thoughtExpandedRef:L,draftExpandedRef:V,draftBufferRef:q,thoughtBufferRef:K,pendingRequestRef:Q,lastAgentResponseRef:F,agentStatusRef:B,stalledPostIdRef:$,scrollToBottomRef:U,setCurrentTurnId:H,setAgentDraft:D,setAgentPlan:E,setAgentThought:M,setPendingRequest:z,setAgentStatus:O,setPosts:j,dedupePosts:x})},[Z,x,q,V,G,X,F,B,Y,Q,U,D,E,O,M,H,z,j,$,K,L]);return{removeStalledPost:I,finalizeStalledResponse:A}}function pT(_){let{removeFileRefRef:$,composeReferenceActions:j}=_;$.current=j.removeFileRef||null}function rT(_){return{applyBranding:_.applyBranding,composeReferenceActions:_.composeReferenceActions,..._.agentActivity,..._.chatPaneRuntime,recoveryCallbacks:_.recoveryCallbacks}}function rK(_){let{environment:$,composeReferences:j,agentActivity:G,chatPaneRuntime:Y,recovery:X,viewState:Z,removeFileRefRef:L}=_,{applyBranding:V}=HK($),q=kK(j);pT({removeFileRefRef:L,composeReferenceActions:q});let K=TK(G),Q=CK({...Y,clearLastActivityTimer:K.clearLastActivityTimer}),F=pK(X);return lK(Z),rT({applyBranding:V,composeReferenceActions:q,agentActivity:K,chatPaneRuntime:Q,recoveryCallbacks:F})}k0();k0();T_();var u8=new Map,Sj=new Map;function nK(){return Date.now()}function S6(_){return String(_||"").trim()}function dK(_,$=600000){return Boolean(_&&nK()-_.cachedAt<=$)}function nT(_){while(_.size>24){let $=_.keys().next().value;if(!$)break;_.delete($)}}function oK(_,$){return u8.delete(_),u8.set(_,$),nT(u8),$}function b8(_,$){let j=S6(_);if(!j)return null;let G={posts:Array.isArray($?.posts)?$.posts:[],has_more:Boolean($?.has_more),cachedAt:nK()};return oK(j,G)}function gj(_,$={}){let j=S6(_);if(!j)return null;let G=Number.isFinite($.maxAgeMs)?Number($.maxAgeMs):600000,Y=u8.get(j)||null;if(!dK(Y,G))return null;return oK(j,Y)}function iK(_,$,j=5){if(!Array.isArray(_))return[];let G=S6($),Y=Number.isFinite(j)?Math.max(1,Math.min(8,Number(j))):5,X=new Set,Z=[];for(let L of _){let V=S6(L?.chat_jid);if(!V||V===G||X.has(V))continue;if(X.add(V),Z.push(V),Z.length>=Y)break}return Z}async function sK(_){let $=Array.from(new Set((_.chatJids||[]).map((L)=>S6(L)).filter(Boolean)));if($.length===0)return;let j=Number.isFinite(_.maxAgeMs)?Number(_.maxAgeMs):600000,G=Number.isFinite(_.maxConcurrent)?Math.max(1,Math.min(4,Number(_.maxConcurrent))):2,Y=$.filter((L)=>!dK(gj(L,{maxAgeMs:j}),j)),X=0,Z=Array.from({length:Math.min(G,Y.length)},async()=>{while(X<Y.length){let L=Y[X++],V=Sj.get(L);if(V){await V;continue}let q=(async()=>{try{let K=await _.fetchTimeline(L);b8(L,K)}catch(K){console.debug("[app-timeline-cache] Ignoring timeline prewarm failure for a best-effort background fetch.",K,{chatJid:L})}finally{Sj.delete(L)}})();Sj.set(L,q),await q}});await Promise.all(Z)}function aK(_,$){let j=Array.isArray(_)?_:[],G=Array.isArray($)?$:null;if(!G)return j;if(G.length===0)return G;if(j.length===0)return G;let Y=1/0;for(let Z of G){let L=Z?.id;if(typeof L==="number"&&Number.isFinite(L)&&L<Y)Y=L}if(!Number.isFinite(Y))return O5([...G,...j]);let X=j.filter((Z)=>{let L=Z?.id;return typeof L==="number"&&Number.isFinite(L)&&L<Y});return O5([...G,...X])}function tK({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null,currentHashtag:G=null,searchQuery:Y=null}){let[X,Z]=C(null),[L,V]=C(!1),q=u(!1),K=u(null),Q=u(!1),F=u(null),B=u(null),U=u(0),H=u(0);g(()=>{q.current=L},[L]),g(()=>{B.current=X},[X]);let D=!G&&!Y,E=u(D);g(()=>{E.current=D},[D]),g(()=>{U.current+=1,Z(null),B.current=null,F.current=null,Q.current=!1,q.current=!1,V(!1),H.current=0},[j]);let M=f((k,W)=>{if(!D)return;b8(j,{posts:Array.isArray(k)?k:[],has_more:Boolean(W)})},[j,D]),z=f((k,W)=>{B.current=Array.isArray(k)?k:[],q.current=Boolean(W),Z(B.current),V(q.current),M(B.current,q.current)},[M]),O=f(async(k=null)=>{let W=U.current;try{if(k){let P=await z7(k,50,0,j);if(W!==U.current)return;Z(P.posts),V(!1);return}let T=(P)=>{if(W!==U.current)return;let R=Array.isArray(P?.posts)?P.posts:[],b=Boolean(P?.has_more);z(R,b)},y=gj(j);if(y){z(y.posts,y.has_more);let P=H.current;r$(10,null,j).then((R)=>{if(W!==U.current||H.current!==P)return;if(!E.current)return;let b=Array.isArray(R?.posts)?R.posts:[],c=Boolean(R?.has_more);z(aK(B.current,b),c)}).catch((R)=>{if(W!==U.current)return;console.error("Failed to refresh cached timeline:",R)});return}let J=await r$(10,null,j);T(J)}catch(T){if(W!==U.current)return;throw console.error("Failed to load posts:",T),T}},[j,z]),x=f(async()=>{let k=U.current;try{let W=await r$(10,null,j);if(k!==U.current)return;z(aK(B.current,W?.posts),Boolean(W?.has_more))}catch(W){if(k!==U.current)return;console.error("Failed to refresh timeline:",W)}},[j,z]),I=f(async(k={})=>{let W=U.current,T=B.current;if(!T||T.length===0)return;if(Q.current)return;let{preserveScroll:y=!0,preserveMode:J="top",allowRepeat:P=!1}=k,R=(r)=>{if(!y){r();return}if(J==="top")$(r);else _(r)},c=T.slice().sort((r,e)=>r.id-e.id)[0]?.id;if(!Number.isFinite(c))return;if(!P&&F.current===c)return;Q.current=!0,F.current=c;try{let r=await r$(10,c,j);if(W!==U.current)return;if(H.current+=1,r.posts.length>0)R(()=>{let e=O5([...r.posts,...B.current||[]]);z(e,r.has_more)});else z(B.current||[],!1)}catch(r){if(W!==U.current)return;console.error("Failed to load more posts:",r)}finally{if(W===U.current)Q.current=!1}},[j,_,$,z]);g(()=>{K.current=I},[I]);let A=f((k)=>{Z((W)=>{let T=typeof k==="function"?k(W):k;if(B.current=T,Array.isArray(T)){if(H.current+=1,D)b8(j,{posts:T,has_more:q.current})}return T})},[j,D]);return{posts:X,setPosts:A,hasMore:L,setHasMore:V,hasMoreRef:q,loadPosts:O,refreshTimeline:x,loadMore:I,loadMoreRef:K,loadingMoreRef:Q,lastBeforeIdRef:F}}k0();function dT(_){if(!_?.data?.is_bot_message)return!1;let $=_.data.content;return $==="Queued as a follow-up (one-at-a-time)."||$==="⁣"}function eK(_,$){if(!_||!Array.isArray(_))return _;let j=new Set($||[]),G=_.filter((Y)=>!j.has(Y?.id)&&!dT(Y));return G.length===_.length?_:G}function _B(_,$){let j=$||new Set;return Array.isArray(_)?_.map((G)=>({...G})).filter((G)=>!j.has(G.row_id)):[]}function $B(_,$){if(!Array.isArray(_)||!Array.isArray($))return!1;return _.length===$.length&&_.every((j,G)=>j?.row_id===$[G]?.row_id)}function G4(_,$){let j=Array.isArray(_)&&$!=null?_.filter((G)=>G?.row_id!==$):Array.isArray(_)?[..._]:[];return{items:j,remainingQueueCount:j.length}}function jB(_,$){let j=Array.isArray(_)?_:[],G=$?.row_id,Y=$?.content;if(G==null||typeof Y!=="string"||!Y.trim())return j;if(j.some((X)=>X?.row_id===G))return j;return[...j,{row_id:G,content:Y,timestamp:$?.timestamp||null,thread_id:$?.thread_id??null}]}function GB(_){if(!_||typeof _!=="object")return!1;if(_.queued==="followup"||_.queued==="steer")return!0;let $=_.command;return Boolean($&&typeof $==="object"&&($.queued_followup||$.queued_steer))}function oT(_,$=150){return Math.abs(_)<=$}function YB(_){let{timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G}=_,Y=f(()=>{let V=$.current;if(!V)return;if(oT(V.scrollTop))V.scrollTop=0},[$]),X=f((V)=>{let q=$.current;if(!q||typeof V!=="function"){V?.();return}let{currentHashtag:K,searchQuery:Q,searchOpen:F}=j.current||{},B=!((Q||F)&&!K),U=B?q.scrollHeight-q.scrollTop:q.scrollTop;V(),requestAnimationFrame(()=>{let H=$.current;if(!H)return;if(B){let D=Math.max(H.scrollHeight-U,0);H.scrollTop=D}else{let D=Math.max(H.scrollHeight-H.clientHeight,0),E=Math.min(U,D);H.scrollTop=E}})},[$,j]),Z=f((V)=>{let q=$.current;if(!q||typeof V!=="function"){V?.();return}let K=q.scrollTop;V(),requestAnimationFrame(()=>{let Q=$.current;if(!Q)return;let F=Math.max(Q.scrollHeight-Q.clientHeight,0);Q.scrollTop=Math.min(K,F)})},[$]),L=f((V)=>{return eK(V,G.current)},[G]);return{scrollToBottom:Y,preserveTimelineScroll:X,preserveTimelineScrollTop:Z,filterQueuedPosts:L}}function iT(_){let{rawPosts:$,filterQueuedPosts:j}=_;return j($)}function sT(_){_.scrollToBottomRef.current=_.scrollToBottom}function XB(_){let{timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G,currentChatJid:Y,currentHashtag:X,searchQuery:Z,followupQueueItems:L}=_,V=u(null),{scrollToBottom:q,preserveTimelineScroll:K,preserveTimelineScrollTop:Q,filterQueuedPosts:F}=YB({timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G});sT({scrollToBottomRef:V,scrollToBottom:q});let{posts:B,setPosts:U,hasMore:H,setHasMore:D,hasMoreRef:E,loadPosts:M,refreshTimeline:z,loadMore:O,loadMoreRef:x}=tK({preserveTimelineScroll:K,preserveTimelineScrollTop:Q,chatJid:Y,currentHashtag:X,searchQuery:Z}),I=Z0(()=>iT({rawPosts:B,followupQueueItems:L,filterQueuedPosts:F}),[F,L,B]);return{scrollToBottomRef:V,scrollToBottom:q,preserveTimelineScroll:K,preserveTimelineScrollTop:Q,rawPosts:B,setPosts:U,hasMore:H,setHasMore:D,hasMoreRef:E,loadPosts:M,refreshTimeline:z,loadMore:O,loadMoreRef:x,posts:I}}k0();function aT(_){let{currentHashtag:$,searchQuery:j,searchOpen:G}=_;return!$&&!j&&!G}function ZB(_){let{currentHashtag:$,searchQuery:j,searchOpen:G,searchScope:Y,currentChatJid:X,currentRootChatJid:Z,posts:L,loadPosts:V,searchPosts:q,setCurrentHashtag:K,setSearchQuery:Q,setSearchOpen:F,setSearchScope:B,setPosts:U,setHasMore:H,preserveTimelineScrollTop:D,setRemovingPostIds:E,deletePost:M,hasMoreRef:z,loadMoreRef:O}=_,x=f(async(P)=>{await OK({hashtag:P,setCurrentHashtag:K,setPosts:U,loadPosts:V})},[V,K,U]),I=f(async()=>{await zK({setCurrentHashtag:K,setSearchQuery:Q,setPosts:U,loadPosts:V})},[V,K,U,Q]),A=f(async(P,R=Y,b)=>{await Ij({query:P,scope:R,currentChatJid:X,currentRootChatJid:Z,searchPosts:q,setSearchScope:B,setSearchQuery:Q,setCurrentHashtag:K,setPosts:U,setHasMore:H,filters:b})},[X,Z,q,Y,K,H,U,Q,B]),k=f((P)=>{if(B(P),j&&j.trim())Ij({query:j,scope:P,currentChatJid:X,currentRootChatJid:Z,searchPosts:q,setSearchScope:B,setSearchQuery:Q,setCurrentHashtag:K,setPosts:U,setHasMore:H})},[X,Z,q,j,K,H,U,Q,B]),W=f(()=>{F(!0),Q(null),K(null),B("current"),U([])},[K,U,F,Q,B]),T=f(()=>{F(!1),Q(null),V()},[V,F,Q]),y=Z0(()=>aT({currentHashtag:$,searchQuery:j,searchOpen:G}),[$,G,j]),J=f(async(P)=>{await AK({post:P,posts:L,currentChatJid:X,deletePost:M,preserveTimelineScrollTop:D,setPosts:U,setRemovingPostIds:E,hasMoreRef:z,loadMoreRef:O})},[X,M,z,O,L,D,U,E]);return{handleHashtagClick:x,handleBackToTimeline:I,handleSearch:A,handleSearchScopeChange:k,enterSearchMode:W,exitSearchMode:T,isMainTimelineView:y,handleDeletePost:J}}k0();function uj(_){if(!Array.isArray(_?.content))return null;return _.content.find((j)=>j?.type==="status_panel"&&j?.panel)?.panel||null}function LB(_,$){let j=new Map(_),G=uj($);if(typeof $?.key==="string"&&$.key&&G)j.set($.key,G);else j.delete("autoresearch");return j}function qB(_,$){let j=typeof $?.key==="string"?$.key:"";if(!j)return _;let G=new Map(_),Y=uj($);if($?.options?.remove||!Y)G.delete(j);else G.set(j,Y);return G}function VB(_){if(_?.options?.remove)return!0;return uj(_)?.state!=="running"}function bj(_,$){return`${_}:${$}`}function QB(_,$,j){let G=bj($,j);if(_.has(G))return _;let Y=new Set(_);return Y.add(G),Y}function KB(_,$){if(!_.has($))return _;let j=new Set(_);return j.delete($),j}function v8(_,$){if(_.size===0)return _;let j=`${$}:`,G=new Set(Array.from(_).filter((Y)=>!String(Y).startsWith(j)));return G.size===_.size?_:G}async function BB(_){let $=typeof _.action?.action_type==="string"?_.action.action_type:"",j=typeof _.action?.key==="string"?_.action.key:"";if($==="autoresearch.stop")return await _.stopAutoresearch(_.currentChatJid,{generateReport:!0}),{refreshAutoresearchStatus:!0};if($==="autoresearch.dismiss")return await _.dismissAutoresearch(_.currentChatJid),{refreshAutoresearchStatus:!0};if($==="autoresearch.copy_tmux"){let G=typeof _.panel?.tmux_command==="string"?_.panel.tmux_command.trim():"";if(!G)throw Error("No tmux command available.");return await _.writeClipboard(G),{refreshAutoresearchStatus:!1,toast:{title:"Copied",detail:"tmux command copied to clipboard.",kind:"success"}}}throw Error(`Unsupported panel action: ${$||j}`)}var FB="piclaw:ctx:";function Y4(_){if(!_||typeof _!=="object")return null;let $=_,j=$.tokens==null?null:Number($.tokens),G=$.contextWindow==null?null:Number($.contextWindow),Y=$.percent==null?null:Number($.percent);return{tokens:Number.isFinite(j)?j:null,contextWindow:Number.isFinite(G)?G:null,percent:Number.isFinite(Y)?Y:null}}function v4(_,$){let j=Y4(_),G=Y4($);if(!j&&!G)return!0;if(!j||!G)return!1;return j.tokens===G.tokens&&j.contextWindow===G.contextWindow&&j.percent===G.percent}function P5(_,$){if(!_||!$||typeof $!=="object")return;if($.percent==null)return;try{V_(FB+_,JSON.stringify($))}catch(G){console.debug("[app-status-refresh] Ignoring best-effort context usage persistence failure.",G,{chatJid:_})}}function NB(_){if(!_)return null;return z2(FB+_)}async function UB(_){let{currentChatJid:$,queueRefreshGenRef:j,activeChatJidRef:G,dismissedQueueRowIdsRef:Y,getAgentQueueState:X,setFollowupQueueItems:Z,clearQueuedSteerStateIfStale:L}=_,V=++j.current,q=$;try{let K=await X(q);if(V!==j.current)return;if(G.current!==q)return;let Q=Y.current,F=Array.isArray(K?.items)?K.items:[],B=_B(F,Q);if(B.length){Z((U)=>$B(U,B)?U:B);return}if(F.length>0)return;Q.clear(),L(0),Z((U)=>U.length===0?U:[])}catch{if(V!==j.current)return;if(G.current!==q)return;Z((K)=>K.length===0?K:[])}}async function EB(_){let{currentChatJid:$,activeChatJidRef:j,getAgentContext:G,setContextUsage:Y}=_,X=$;try{let Z=Y4(await G(X));if(j.current!==X)return;if(Z&&Z.percent!=null)Y((L)=>v4(L,Z)?L:Z),P5(X,Z)}catch(Z){if(j.current!==X)return;console.warn("Failed to fetch agent context:",Z)}}async function DB(_){let{currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:G,setExtensionStatusPanels:Y,setPendingExtensionPanelActions:X}=_,Z=$;try{let L=await G(Z);if(j.current!==Z)return;Y((V)=>LB(V,L)),X((V)=>v8(V,"autoresearch"))}catch(L){if(j.current!==Z)return;console.warn("Failed to fetch autoresearch status:",L)}}function HB(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshQueueState:Y,refreshContextUsage:X,refreshAutoresearchStatus:Z}=_;$(),j(),G(),Y(),X(),Z()}function WB(_){let{viewStateRef:$,refreshTimeline:j,refreshModelAndQueueState:G}=_;if(t1($.current))j();G()}V6();var m8=new Map,c8=new Map,tT=250,OB=1500,zB=300000;function R5(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function eT(_,$){return`${_}:${$}`}function _y(_){for(let[$,j]of c8.entries())if(_-j>zB)c8.delete($)}function $y(_){for(let[$,j]of m8.entries()){if(j.inFlight)continue;if(!Number.isFinite(j.lastCompletedAt)||_-j.lastCompletedAt>zB)m8.delete($)}}function AB(_=R5()){_y(_),$y(_)}function JB(_){let{chatJid:$,nowMs:j=R5()}=_;if(!$)return;c8.set($,j),AB(j)}function g6(_,$=OB,j=R5()){if(!_)return!1;let G=c8.get(_);if(!Number.isFinite(G))return!1;return j-Number(G)<=$}async function k$(_){let{kind:$,chatJid:j,run:G,cooldownMs:Y=tT,activationWindowMs:X=OB,nowMs:Z=R5()}=_;AB(Z);let L=eT($,j),V=m8.get(L)||{inFlight:null,lastCompletedAt:Number.NaN,lastValue:null};if(m8.set(L,V),V.inFlight)return await V.inFlight;if(Boolean(I2("thread-switch",j)||g6(j,X,Z))&&Number.isFinite(V.lastCompletedAt)&&Z-V.lastCompletedAt<=Y)return V.lastValue;let K=Promise.resolve().then(G).then((Q)=>{return V.lastCompletedAt=R5(),V.lastValue=Q??null,V.inFlight=null,Q}).catch((Q)=>{throw V.lastCompletedAt=R5(),V.inFlight=null,Q});return V.inFlight=K,await K}function kB(_){let{serverVersion:$,currentAppAssetVersion:j,staleUiVersionRef:G,staleUiReloadScheduledRef:Y,tabStoreHasUnsaved:X,isAgentRunningRef:Z,pendingRequestRef:L,showIntentToast:V}=_,q=typeof $==="string"&&$.trim()?$.trim():null;if(!q||!j||q===j)return!1;if(G.current===q)return!0;G.current=q;let K=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!X()&&!K&&!Z.current&&!L.current&&!Y.current);return V("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0}function vj(_){let{currentHashtag:$,searchQuery:j,searchOpen:G}=_||{};return!$&&!j&&!G}function MB(_){let{currentChatJid:$,status:j,setConnectionStatus:G,setAgentStatus:Y,setAgentDraft:X,setAgentPlan:Z,setAgentThought:L,setPendingRequest:V,pendingRequestRef:q,clearAgentRunState:K,hasConnectedOnceRef:Q,viewStateRef:F,refreshTimeline:B,refreshAgentStatus:U,refreshQueueState:H,refreshContextUsage:D}=_;if(G(j),j!=="connected"){Y(null),X({text:"",totalLines:0}),Z(""),L({text:"",totalLines:0}),V(null),q.current=null,K();return}if(!Q.current){if(Q.current=!0,Y(null),X({text:"",totalLines:0}),Z(""),L({text:"",totalLines:0}),V(null),q.current=null,K(),g6($))return;if(vj(F.current))B();U(),H(),D();return}if(vj(F.current))B();U(),H(),D()}function TB(_){let{viewStateRef:$,isAgentActive:j,refreshTimeline:G,refreshQueueState:Y,refreshAgentStatus:X,refreshContextUsage:Z,refreshAutoresearchStatus:L}=_,V=vj($.current);if(j){if(V)G();Y(),X(),Z(),L();return}if(V)G();X(),Z(),L()}function jy(_){return Math.min(1000,Math.max(100,Math.floor(_/2)))}function yB(_){let{currentChatJid:$,activeChatJidRef:j,queueRefreshGenRef:G,dismissedQueueRowIdsRef:Y,getAgentQueueState:X,setFollowupQueueItems:Z,clearQueuedSteerStateIfStale:L,getAgentContext:V,setContextUsage:q,getAutoresearchStatus:K,setExtensionStatusPanels:Q,setPendingExtensionPanelActions:F,getAgentStatus:B,wasAgentActiveRef:U,viewStateRef:H,refreshTimeline:D,clearAgentRunState:E,agentStatusRef:M,pendingRequestRef:z,thoughtBufferRef:O,draftBufferRef:x,setAgentStatus:I,setAgentDraft:A,setAgentPlan:k,setAgentThought:W,setPendingRequest:T,setActiveTurn:y,noteAgentActivity:J,clearLastActivityFlag:P,isAgentRunningRef:R,currentTurnIdRef:b,silentRecoveryRef:c,silenceRefreshMs:r,lastAgentEventRef:e,lastSilenceNoticeRef:m,silenceWarningMs:_0,silenceFinalizeMs:H0,isCompactionStatus:Y0,serverVersionContext:j0,setConnectionStatus:L0,setStateAccessFailed:F0,setPendingRequestForConnection:h,hasConnectedOnceRef:$0}=_,V0=f(()=>{return k$({kind:"queue-state",chatJid:$,run:async()=>{return await UB({currentChatJid:$,queueRefreshGenRef:G,activeChatJidRef:j,dismissedQueueRowIdsRef:Y,getAgentQueueState:X,setFollowupQueueItems:Z,clearQueuedSteerStateIfStale:L}),null}})},[j,L,$,Y,X,G,Z]),O0=f(async()=>{await k$({kind:"context-usage",chatJid:$,run:async()=>{return await EB({currentChatJid:$,activeChatJidRef:j,getAgentContext:V,setContextUsage:q}),null}})},[j,$,V,q]),a=f(async()=>{await k$({kind:"autoresearch-status",chatJid:$,run:async()=>{return await DB({currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:K,setExtensionStatusPanels:Q,setPendingExtensionPanelActions:F}),null}})},[j,$,K,Q,F]),X0=f(async()=>{return await k$({kind:"agent-status",chatJid:$,run:async()=>{return await vK({currentChatJid:$,getAgentStatus:B,activeChatJidRef:j,wasAgentActiveRef:U,viewStateRef:H,refreshTimeline:D,clearAgentRunState:E,agentStatusRef:M,pendingRequestRef:z,thoughtBufferRef:O,draftBufferRef:x,setAgentStatus:I,setAgentDraft:A,setAgentPlan:k,setAgentThought:W,setPendingRequest:T,setActiveTurn:y,noteAgentActivity:J,clearLastActivityFlag:P,onStateAccessResult:F0})}})},[j,M,E,P,$,x,B,J,z,D,y,A,k,I,W,T,F0,O,H,U]),W0=f(async()=>{return await mK({isAgentRunningRef:R,pendingRequestRef:z,currentTurnIdRef:b,silentRecoveryRef:c,silenceRefreshMs:r,viewStateRef:H,refreshTimeline:D,refreshQueueState:V0,refreshAgentStatus:X0})},[b,R,z,X0,V0,D,r,c,H]);g(()=>{let u0=jy(_0),Y_=setInterval(()=>{cK({isAgentRunningRef:R,pendingRequestRef:z,lastAgentEventRef:e,lastSilenceNoticeRef:m,agentStatusRef:M,silenceWarningMs:_0,silenceFinalizeMs:H0,silenceRefreshMs:r,isCompactionStatus:Y0,setAgentStatus:I,reconcileSilentTurn:W0})},u0);return()=>clearInterval(Y_)},[M,R,Y0,e,m,z,W0,I,H0,r,_0]);let P0=f((u0)=>{return kB({serverVersion:u0,...j0})},[j0]),p0=f((u0)=>{if(u0==="connected")F0(!1);MB({currentChatJid:$,status:u0,setConnectionStatus:L0,setAgentStatus:I,setAgentDraft:A,setAgentPlan:k,setAgentThought:W,setPendingRequest:h,pendingRequestRef:z,clearAgentRunState:E,hasConnectedOnceRef:$0,viewStateRef:H,refreshTimeline:D,refreshAgentStatus:X0,refreshQueueState:V0,refreshContextUsage:O0})},[E,$,$0,z,X0,O0,V0,D,A,k,I,W,L0,h,F0,H]);return{refreshQueueState:V0,refreshContextUsage:O0,refreshAutoresearchStatus:a,refreshAgentStatus:X0,handleUiVersionDrift:P0,handleConnectionStatusChange:p0}}k0();function u6(_){return typeof _==="string"}function b6(_){return typeof _==="string"&&_.trim().length>0}function h8(_){if(!b6(_))return 0;let $=Date.parse(_);return Number.isFinite($)?$:0}function mj(_){if(!Array.isArray(_))return[];return _.filter(($)=>b6($?.chat_jid)&&b6($?.agent_name))}function wB(_){if(!Array.isArray(_))return[];return _.filter(($)=>u6($?.chat_jid)&&u6($?.agent_name))}function IB(_,$,j){if(!Array.isArray($)||$.length===0)return Array.isArray(_)?_:[];let G=new Map;if(Array.isArray(_)){for(let Z of _)if(u6(Z?.chat_jid))G.set(Z.chat_jid,Z)}let Y=$.map((Z)=>{if(!u6(Z?.chat_jid))return Z;let L=G.get(Z.chat_jid);return L?{...Z,...L,is_active:L.is_active??Z.is_active}:Z}),X=u6(j)?j:"";return Y.sort((Z,L)=>{if(Z.chat_jid===X&&L.chat_jid!==X)return-1;if(L.chat_jid===X&&Z.chat_jid!==X)return 1;let V=Boolean(Z.archived_at),q=Boolean(L.archived_at);if(V!==q)return V?1:-1;if(Boolean(Z.is_active)!==Boolean(L.is_active))return Z.is_active?-1:1;let K=h8(Z.updated_at)||h8(Z.created_at),Q=h8(L.updated_at)||h8(L.created_at);if(K!==Q)return Q-K;let F=b6(Z.agent_name)?Z.agent_name.trim():"",B=b6(L.agent_name)?L.agent_name.trim():"",U=F.localeCompare(B,void 0,{sensitivity:"base"});if(U!==0)return U;return String(Z.chat_jid).localeCompare(String(L.chat_jid))}),Y}var Gy={hasModel:!1,model:void 0,hasThinkingLevel:!1,thinkingLevel:null,thinkingLevelLabel:null,hasSupportsThinking:!1,supportsThinking:!1,hasProviderUsage:!1,providerUsage:null};function xB(_){if(!_||typeof _!=="object")return Gy;let $=_.model??_.current;return{hasModel:$!==void 0,model:$,hasThinkingLevel:_.thinking_level!==void 0,thinkingLevel:_.thinking_level??null,thinkingLevelLabel:_.thinking_level_label??_.thinking_level??null,hasSupportsThinking:_.supports_thinking!==void 0,supportsThinking:Boolean(_.supports_thinking),hasProviderUsage:_.provider_usage!==void 0,providerUsage:_.provider_usage??null}}function CB(_){let j=(Array.isArray(_)?_:[]).find((G)=>G?.id==="default");return{name:j?.name,avatarUrl:j?.avatar_url}}function PB(_,$){if(!_||typeof _!=="object")return null;let j=_.agent_id;if(!j)return null;let G=String(j),Y=_.agent_name,X=_.agent_avatar;if(!Y&&X===void 0)return null;let Z=$||{id:G},L=Z.name||null,V=Z.avatar_url??Z.avatarUrl??Z.avatar??null,q=!1,K=!1;if(Y&&Y!==Z.name)L=Y,q=!0;if(X!==void 0){let Q=typeof X==="string"?X.trim():null,F=typeof V==="string"?V.trim():null,B=Q||null;if(B!==(F||null))V=B,K=!0}if(!q&&!K)return null;return{agentId:G,nameChanged:q,avatarChanged:K,resolvedName:L,resolvedAvatar:V}}function RB(_,$){let j=typeof $?.name==="string"&&$.name.trim()?$.name.trim():"You",G=typeof $?.avatar_url==="string"?$.avatar_url.trim():null,Y=typeof $?.avatar_background==="string"&&$.avatar_background.trim()?$.avatar_background.trim():null;if(_.name===j&&_.avatar_url===G&&_.avatar_background===Y)return _;return{name:j,avatar_url:G,avatar_background:Y}}function fB(_,$){if(!$||typeof $!=="object")return _;let j=$.user_name??$.userName,G=$.user_avatar??$.userAvatar,Y=$.user_avatar_background??$.userAvatarBackground;if(j===void 0&&G===void 0&&Y===void 0)return _;let X=typeof j==="string"&&j.trim()?j.trim():_.name||"You",Z=G===void 0?_.avatar_url:typeof G==="string"&&G.trim()?G.trim():null,L=Y===void 0?_.avatar_background:typeof Y==="string"&&Y.trim()?Y.trim():null;if(_.name===X&&_.avatar_url===Z&&_.avatar_background===L)return _;return{name:X,avatar_url:Z,avatar_background:L}}async function gB(_){let{getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Y}=_;try{let X=await $();j(gZ(X));let Z=X?.user||{};G((V)=>RB(V,Z));let L=CB(X?.agents);Y(L.name,L.avatarUrl)}catch(X){console.warn("Failed to load agents:",X)}}function uB(_){let{payload:$,agentsRef:j,setAgents:G,applyBranding:Y}=_,X=PB($,$?.agent_id?j.current?.[String($.agent_id)]||{id:String($.agent_id)}:null);if(!X)return;if(G((Z)=>{let V={...Z[X.agentId]||{id:X.agentId}};if(X.nameChanged)V.name=X.resolvedName;if(X.avatarChanged)V.avatar_url=X.resolvedAvatar;return{...Z,[X.agentId]:V}}),X.agentId==="default")Y(X.resolvedName,X.resolvedAvatar,X.avatarChanged?Date.now():null)}function bB(_){let{payload:$,setUserProfile:j}=_;j((G)=>fB(G,$))}function SB(_,$){if(Object.is(_,$))return!0;try{return JSON.stringify(_)===JSON.stringify($)}catch{return!1}}function vB(_){let{payload:$,setActiveModel:j,setActiveThinkingLevel:G,setSupportsThinking:Y,setActiveModelUsage:X,setAgentModelsPayload:Z,setHasLoadedAgentModels:L}=_;if($&&typeof $==="object")Z?.((q)=>SB(q,$)?q:$),L?.(!0);let V=xB($);if(V.hasModel)j((q)=>Object.is(q,V.model)?q:V.model);if(V.hasThinkingLevel){let q=V.thinkingLevelLabel??V.thinkingLevel;G((K)=>Object.is(K,q)?K:q)}if(V.hasSupportsThinking)Y((q)=>q===V.supportsThinking?q:V.supportsThinking);if(V.hasProviderUsage)X((q)=>SB(q,V.providerUsage)?q:V.providerUsage)}async function mB(_){let{currentChatJid:$,getActiveChatAgents:j,getChatBranches:G,activeChatJidRef:Y,setActiveChatAgents:X}=_,Z=$;try{let[L,V]=await Promise.all([j().catch(()=>({chats:[]})),G(null,{includeArchived:!0}).catch(()=>({chats:[]}))]);if(Y.current!==Z)return[];let q=mj(L?.chats),K=mj(V?.chats),Q=IB(q,K,Z);return X(Q),Q}catch{if(Y.current!==Z)return[];return X([]),[]}}async function cB(_){let{currentRootChatJid:$,getChatBranches:j,setCurrentChatBranches:G}=_;try{let Y=await j($);G(wB(Y?.chats))}catch{G([])}}function hB(_){let{response:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshContextUsage:Y,refreshAutoresearchStatus:X,refreshQueueState:Z}=_;if(!$||typeof $!=="object")return;if(j(),G(),Y(),X(),GB($))Z()}function lB(_){let{readStoredNumber:$,sidebarWidthRef:j,shellElement:G,minWidth:Y=160,maxWidth:X=600,fallbackWidth:Z=280}=_,L=$("sidebarWidth",null),V=Number.isFinite(L)?Math.min(Math.max(Number(L),Y),X):Z;if(j.current=V,G)G.style.setProperty("--sidebar-width",`${V}px`);return V}async function pB(_){let{currentHashtag:$,searchQuery:j,searchScope:G,currentChatJid:Y,currentRootChatJid:X,loadPosts:Z,searchPosts:L,setPosts:V,setHasMore:q,scrollToBottom:K,isCancelled:Q,scheduleRaf:F=(O)=>{if(typeof requestAnimationFrame==="function"){requestAnimationFrame(O);return}setTimeout(O,0)},scheduleTimeout:B=(O,x)=>{setTimeout(O,x)},onTimelineLoadStart:U,onTimelineDataReady:H,onTimelineFirstPaint:D,onTimelineError:E}=_,M=(O)=>{if(Q())return;F(()=>{if(Q())return;F(()=>{if(Q())return;D?.(O)})})},z=()=>{if(Q())return;F(()=>{if(Q())return;B(()=>{if(Q())return;K()},0)})};if($){U?.({mode:"hashtag",hashtag:$});try{if(await Z($),Q())return;H?.({mode:"hashtag",hashtag:$}),M({mode:"hashtag"})}catch(O){if(Q())return;throw E?.(O,{mode:"hashtag",hashtag:$}),O}return}if(j){U?.({mode:"search",searchQuery:j,searchScope:G});try{let O=await L(j,50,0,Y,G,X);if(Q())return;V(Array.isArray(O?.results)?O.results:[]),q(!1),H?.({mode:"search",resultCount:Array.isArray(O?.results)?O.results.length:0}),M({mode:"search"})}catch(O){if(Q())return;E?.(O,{mode:"search",searchQuery:j,searchScope:G}),console.error("Failed to search:",O),V([]),q(!1)}return}U?.({mode:"timeline"});try{if(await Z(),Q())return;H?.({mode:"timeline"}),M({mode:"timeline"}),z()}catch(O){if(Q())return;E?.(O,{mode:"timeline"}),console.error("Failed to load timeline:",O)}}V6();T_();function Yy(_){let{refreshModelAndQueueState:$,refreshModelState:j,refreshActiveChatAgents:G,refreshCurrentChatBranches:Y,refreshQueueState:X,runImmediately:Z=!0,intervalMs:L=60000,scheduleInterval:V=(Q,F)=>setInterval(Q,F),clearScheduledInterval:q=(Q)=>clearInterval(Q)}=_;if(Z)$();let K=V(()=>{j(),G(),Y(),X()},L);return()=>{q(K)}}function Xy(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshQueueState:Y,refreshContextUsage:X,refreshAutoresearchStatus:Z,prewarmLimit:L=5}=_;$(),j({prewarmRecent:!0,prewarmLimit:L}),G(),Y(),X(),Z()}function Zy(_){let $=iK(_.chats,_.currentChatJid,_.prewarmLimit??5);if($.length===0)return;sK({chatJids:$,fetchTimeline:_.fetchTimeline??((j)=>r$(10,null,j))})}function rB(_){let{getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Y,readStoredNumber:X,sidebarWidthRef:Z,appShellRef:L,currentChatJid:V,currentRootChatJid:q,getAgentModels:K,getAgentContext:Q,getActiveChatAgents:F,getChatBranches:B,activeChatJidRef:U,setActiveChatAgents:H,setCurrentChatBranches:D,setActiveModel:E,setActiveThinkingLevel:M,setSupportsThinking:z,setActiveModelUsage:O,setAgentModelsPayload:x,setHasLoadedAgentModels:I,agentsRef:A,refreshQueueState:k,refreshContextUsage:W,refreshAutoresearchStatus:T,setContextUsage:y,setExtensionWorkingState:J}=_,P=f(async()=>{await gB({getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Y})},[Y,$,j,G]);g(()=>{P(),lB({readStoredNumber:X,sidebarWidthRef:Z,shellElement:L.current,maxWidth:W6(Number.POSITIVE_INFINITY)})},[L,P,X,Z]);let R=f((j0)=>{vB({payload:j0,setActiveModel:E,setActiveThinkingLevel:M,setSupportsThinking:z,setActiveModelUsage:O,setAgentModelsPayload:x,setHasLoadedAgentModels:I})},[E,O,M,x,I,z]),b=f(()=>I2("thread-switch",V),[V]),c=f(()=>{return k$({kind:"model-state",chatJid:V,run:async()=>{let j0=b();if(j0)Z1(j0,"runtime-hydration-start",{phase:"model-state"});let L0=V;try{let[h,$0]=await Promise.all([(async()=>{let O0=j0||b();if(O0)Z1(O0,"model-request-start",{chatJid:L0});let a=await K(L0);if(O0)Z1(O0,"model-request-ready",{chatJid:L0,hasCurrent:Boolean(a?.current),modelCount:Array.isArray(a?.models)?a.models.length:0});return a})(),Q(L0).catch(()=>null)]);if(U.current&&U.current!==L0)return null;R(h);let V0=Y4($0);if(V0&&V0.percent!=null)y((O0)=>v4(O0,V0)?O0:V0),P5(L0,V0)}catch{if(U.current&&U.current!==L0)return null;R(null)}let F0=j0||b();if(F0)Z1(F0,"runtime-hydration-ready",{chatJid:V}),x2(F0,["runtime-hydration-ready","timeline-first-paint"],"settled",{chatJid:V});return null}})},[U,R,V,Q,K,b,y]);g(()=>{JB({chatJid:V}),E(null),M(null),z(!1),O(null),I(!1),x(null),J({message:null,indicator:null,visible:!0});let j0=NB(V);if(j0)y(j0);else y(null);c()},[V,c,E,O,M,x,y,J,I,z]);let r=f((j0)=>{uB({payload:j0,agentsRef:A,setAgents:j,applyBranding:Y})},[A,Y,j]),e=f((j0)=>{bB({payload:j0,setUserProfile:G})},[G]),m=f((j0)=>{let L0=Boolean(j0?.prewarmRecent),F0=Number.isFinite(j0?.prewarmLimit)?Number(j0?.prewarmLimit):5;return k$({kind:"active-chat-agents",chatJid:V,run:async()=>{let h=b(),$0=await mB({currentChatJid:V,getActiveChatAgents:async()=>{if(h)Z1(h,"active-chat-list-request-start",{chatJid:V});let V0=await F(V);if(h)Z1(h,"active-chat-list-request-ready",{rowCount:Array.isArray(V0?.chats)?V0.chats.length:0});return V0},getChatBranches:async(V0,O0)=>{if(h)Z1(h,"branch-list-request-start",{rootChatJid:V0});let a=await B(V0,O0);if(h)Z1(h,"branch-list-request-ready",{rootChatJid:V0,rowCount:Array.isArray(a?.chats)?a.chats.length:0});return a},activeChatJidRef:U,setActiveChatAgents:H});if(L0)Zy({chats:$0,currentChatJid:V,prewarmLimit:F0});return null}})},[U,V,F,B,b,H]),_0=f(()=>{return k$({kind:"current-chat-branches",chatJid:V,run:async()=>{let j0=b();return await cB({currentRootChatJid:q,getChatBranches:async(L0,F0)=>{if(j0)Z1(j0,"root-branch-request-start",{rootChatJid:L0});let h=await B(L0,F0);if(j0)Z1(j0,"root-branch-request-ready",{rootChatJid:L0,rowCount:Array.isArray(h?.chats)?h.chats.length:0});return h},setCurrentChatBranches:D}),null}})},[V,q,B,b,D]),H0=f(()=>{HB({refreshModelState:c,refreshActiveChatAgents:m,refreshCurrentChatBranches:_0,refreshQueueState:k,refreshContextUsage:W,refreshAutoresearchStatus:T})},[m,T,W,_0,c,k]),Y0=f(()=>{Xy({refreshModelState:c,refreshActiveChatAgents:m,refreshCurrentChatBranches:_0,refreshQueueState:k,refreshContextUsage:W,refreshAutoresearchStatus:T,prewarmLimit:5})},[m,T,W,_0,c,k]);return g(()=>Yy({refreshModelAndQueueState:H0,refreshModelState:c,refreshActiveChatAgents:m,refreshCurrentChatBranches:_0,refreshQueueState:k,runImmediately:!1}),[m,_0,H0,c,k]),g(()=>{let j0=setInterval(()=>{c()},5000);return()=>clearInterval(j0)},[c]),{updateAgentProfile:r,updateUserProfile:e,applyModelState:R,refreshModelState:c,refreshActiveChatAgents:m,refreshCurrentChatBranches:_0,refreshModelAndQueueState:H0,refreshPostPaintThreadState:Y0}}k0();function Ly(_,$){let j=N1(_);return Boolean(_&&j===$)}function f5(_,$,j){if(!Ly(_,$))return _;return{..._,runtimeState:{..._?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:{},...j}}}function nB(_,$){return{..._,openedAt:$}}function dB(_){let $=N1(_);return{nextWidget:null,dismissedSessionKey:_?.source==="live"&&$?$:null}}function oB(_,$,j){let G=uq({...$,...$&&$.status?{}:{status:j.fallbackStatus||"streaming"}});if(!G)return _;let Y=N1(G);if(Y&&j.dismissedSessionKeys?.has(Y))return _;let X=N1(_),Z=Boolean(Y&&X&&Y===X),L={...Z&&_?.artifact?_.artifact:{},...G.artifact||{}};return{...Z&&_?_:{},...G,artifact:L,source:"live",originChatJid:G.originChatJid||j.currentChatJid,openedAt:Z&&_?.openedAt?_.openedAt:j.updatedAt,liveUpdatedAt:j.updatedAt}}function iB(_,$){if(!_||_?.source!=="live")return _||null;let j=N1($),G=N1(_);if(j&&G&&j!==G)return _;return null}function sB(_,$,j){return f5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,lastSubmitAt:j.submittedAt,lastHostUpdate:{type:"submit_pending",submittedAt:j.submittedAt,preview:j.submissionText||null}})}function cj(_,$,j){if(j.errorMessage)return f5(_,$,{lastHostUpdate:{type:"submit_failed",submittedAt:j.submittedAt,preview:j.submissionText,error:j.errorMessage}});return f5(_,$,{lastHostUpdate:{type:j.queued==="followup"?"submit_queued":"submit_sent",submittedAt:j.submittedAt,preview:j.submissionText,queued:j.queued||null}})}function aB(_,$,j){return f5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,...j.kind==="widget.ready"?{readyAt:j.eventAt,lastHostUpdate:{type:"ready_ack",at:j.eventAt}}:{},...j.kind==="widget.request_refresh"?{lastRefreshRequestAt:j.eventAt,refreshCount:j.nextRefreshCount,lastHostUpdate:{type:j.shouldBuildDashboard?"refresh_building":"refresh_ack",at:j.eventAt,count:j.nextRefreshCount,echo:j.payload||null}}:{}})}function tB(_,$,j){return f5(_,$,{dashboard:j.dashboard,lastHostUpdate:{type:"refresh_dashboard",at:j.at,count:j.count,echo:j.echo||null}})}function eB(_,$,j){return f5(_,$,{lastHostUpdate:{type:"refresh_failed",at:j.at,count:j.count,error:j.errorMessage}})}V6();function qy(_){let{setExtensionStatusPanels:$,setPendingExtensionPanelActions:j,setExtensionWorkingState:G}=_;$(new Map),j(new Set),G({message:null,indicator:null,visible:!0})}function _F(_){let{refreshAgentStatus:$,refreshPostPaintThreadState:j}=_;j(),$()}function $F(_){let{currentChatJid:$,currentRootChatJid:j,currentHashtag:G,searchQuery:Y,searchScope:X,loadPosts:Z,searchPosts:L,setPosts:V,setHasMore:q,scrollToBottom:K,setExtensionStatusPanels:Q,setPendingExtensionPanelActions:F,setExtensionWorkingState:B,paneStateOwnerChatJidRef:U,chatPaneStateByChatRef:H,snapshotCurrentChatPaneState:D,restoreChatPaneState:E,dismissedQueueRowIdsRef:M,refreshAgentStatus:z,viewStateRef:O,refreshTimeline:x,refreshModelAndQueueState:I,refreshPostPaintThreadState:A,setFloatingWidget:k,dismissedLiveWidgetKeysRef:W}=_;g(()=>{qy({setExtensionStatusPanels:Q,setPendingExtensionPanelActions:F,setExtensionWorkingState:B})},[$,Q,F,B]),g(()=>{let J=!1,P=iX("thread-switch",$,{currentRootChatJid:j,currentHashtag:G||null,searchQuery:Y||null,searchScope:X});return Z1(P,"route-effect-start",{currentChatJid:$,currentRootChatJid:j}),pB({currentHashtag:G,searchQuery:Y,searchScope:X,currentChatJid:$,currentRootChatJid:j,loadPosts:Z,searchPosts:L,setPosts:V,setHasMore:q,scrollToBottom:K,isCancelled:()=>J,onTimelineLoadStart:(R)=>{Z1(P,"timeline-load-start",R||null)},onTimelineDataReady:(R)=>{Z1(P,"timeline-data-ready",R||null)},onTimelineFirstPaint:(R)=>{Z1(P,"timeline-first-paint",R||null),x2(P,["runtime-hydration-ready","timeline-first-paint"],"settled",R||null),_F({refreshAgentStatus:z,refreshPostPaintThreadState:A})},onTimelineError:(R,b)=>{sX(P,R,"timeline-load-failed",b||null),_F({refreshAgentStatus:z,refreshPostPaintThreadState:A})}}),()=>{J=!0,aX(P,"route-effect-cancelled",{currentChatJid:$})}},[$,G,Y,X,j,Z,K,L,q,V,z,A]),g(()=>{let J=U.current||$;H.current.set(J,D())},[H,$,U,D]),g(()=>{let J=U.current||$;if(J===$)return;H.current.set(J,D()),U.current=$,M.current.clear(),E(H.current.get($)||null)},[H,$,M,U,E,D]);let T=f(()=>{WB({viewStateRef:O,refreshTimeline:x,refreshModelAndQueueState:I})},[I,x,O]),y=f((J,P="streaming")=>{let R=new Date().toISOString();k((b)=>oB(b,J,{fallbackStatus:P,currentChatJid:$,dismissedSessionKeys:W.current,updatedAt:R}))},[$,W,k]);return{refreshCurrentView:T,applyLiveGeneratedWidgetUpdate:y}}k0();k0();T_();function Vy({sse:_,onWake:$},j={}){let G=j.window??(typeof window<"u"?window:null),Y=j.document??(typeof document<"u"?document:null);if(!G||!Y||!_)return()=>{};let X=()=>{if(typeof _.forceReconnect==="function"){_.forceReconnect();return}_.reconnectIfNeeded()},Z=typeof j.useFocusReconnect==="boolean"?j.useFocusReconnect:!z6(),L=Y.visibilityState&&Y.visibilityState!=="visible",V=()=>{if(Y.visibilityState&&Y.visibilityState!=="visible")return L=!0,!0;return!1},q=()=>{if(V())return;if(L)L=!1,X(),$?.()},K=()=>{if(V())return;if(L){q();return}if(Z)_.reconnectIfNeeded()},Q=()=>{q()},F=()=>{q()};return G.addEventListener("focus",K),G.addEventListener("pageshow",Q),Y.addEventListener("visibilitychange",F),()=>{G.removeEventListener("focus",K),G.removeEventListener("pageshow",Q),Y.removeEventListener("visibilitychange",F)}}function jF({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:G,chatJid:Y}){let X=u(_);X.current=_;let Z=u($);Z.current=$;let L=u(j);L.current=j;let V=u(G);V.current=G,g(()=>{let q=new u2((Q,F)=>X.current(Q,F),(Q)=>Z.current(Q),{chatJid:Y});q.connect();let K=Vy({sse:q,onWake:()=>V.current?.()});return()=>{K(),q.disconnect()}},[Y])}G6();r2();function m4(_,$){return Boolean(_)&&Boolean($)&&_!==$}function S5(_,$){return Boolean(_)&&!Boolean($)}function GF(_,$){return _||$||null}function YF(_){switch(_){case"generated_widget_open":return{kind:"update",fallbackStatus:"loading",shouldAdoptTurn:!0};case"generated_widget_delta":return{kind:"update",fallbackStatus:"streaming",shouldAdoptTurn:!0};case"generated_widget_final":return{kind:"update",fallbackStatus:"final",shouldAdoptTurn:!0};case"generated_widget_error":return{kind:"update",fallbackStatus:"error",shouldAdoptTurn:!1};case"generated_widget_close":return{kind:"close",fallbackStatus:null,shouldAdoptTurn:!1};default:return{kind:null,fallbackStatus:null,shouldAdoptTurn:!1}}}function g5(_,$){let j=$?.row_id??$?.id;if(j==null||typeof j!=="string"&&typeof j!=="number")return null;let G=G4(_,j);return{rowId:j,items:G.items,remainingQueueCount:G.remainingQueueCount}}function hj(_){if(_==="steer")return{title:"Failed to steer message",detail:"The queued message could not be sent as steering."};return{title:"Failed to remove message",detail:"The queued message could not be removed."}}function Qy(_,$){return typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():$}function XF(_,$,j){return{isStatusPanelWidgetEvent:_==="extension_ui_widget"&&$?.options?.surface==="status-panel",eventChatJid:Qy($,j),panelKey:typeof $?.key==="string"?$.key:""}}function Ky(_,$){if(_!=="extension_ui_working_indicator")return;if(!Array.isArray($?.frames))return{mode:"default",frames:[],intervalMs:null};let j=$.frames.filter((X)=>typeof X==="string"),G=$.interval_ms??$.intervalMs,Y=typeof G==="number"&&Number.isFinite(G)&&G>0?G:null;if(j.length===0)return{mode:"hidden",frames:[],intervalMs:Y};return{mode:"custom",frames:j,intervalMs:Y}}function ZF(_,$,j){if($==="extension_ui_working_visible"){let Y=j?.visible!==!1;if(Y===_.visible)return;return{..._,visible:Y}}if($==="extension_ui_working")return{message:typeof j?.message==="string"&&j.message.trim()?j.message.trim():null,indicator:_.indicator,visible:_.visible};if($==="extension_ui_status"){if(j?.key==="context_usage")return;return{message:typeof j?.text==="string"&&j.text.trim()?j.text.trim():null,indicator:_.indicator,visible:_.visible}}let G=Ky($,j);if(G===void 0)return;return{message:_.message,indicator:G,visible:_.visible}}function LF(_,$){if(_!=="extension_ui_status")return null;if($?.key!=="context_usage")return null;let j=typeof $?.text==="string"?$.text.trim():"";if(!j)return null;try{let G=JSON.parse(j);if(!G||typeof G!=="object")return null;let Y=G,X=Y.tokens==null?null:Number(Y.tokens),Z=Y.contextWindow==null?null:Number(Y.contextWindow),L=Y.percent==null?null:Number(Y.percent);return{tokens:Number.isFinite(X)?X:null,contextWindow:Number.isFinite(Z)?Z:null,percent:Number.isFinite(L)?L:null,estimated:Y.estimated===!0,source:typeof Y.source==="string"?Y.source:null,phase:typeof Y.phase==="string"?Y.phase:null}}catch{return null}}function qF(_,$){if(_==="extension_ui_notify"&&typeof $?.message==="string")return{title:$.message,detail:null,kind:typeof $?.type==="string"&&$.type.trim()?$.type:"info"};if(_==="extension_ui_error"){let j=$?.error;return{title:"Extension UI error",detail:typeof j==="string"?j:j&&typeof j==="object"&&typeof j.error==="string"?j.error:j?String(j):"Unknown extension error",kind:"error",durationMs:5000}}return null}var By=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function VF(_){return By.has(String(_||"").trim())}function Fy(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function l8(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let G={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:G})),j.dispatchEvent(new CustomEvent(Fy(_),{detail:G})),!0}function QF(_,$,j){let G=$?.turn_id,Y=$?.chat_jid,X=typeof Y==="string"&&Y.trim()?Y.trim():null,Z=_==="connected"||_==="workspace_update";return{turnId:G,eventChatJid:X,isGlobalUiEvent:Z,isCurrentChatEvent:X?X===j:Z}}function KF(_){return _==="agent_draft_delta"||_==="agent_thought_delta"||_==="agent_draft"||_==="agent_thought"}function BF(_,$,j){let{currentChatJid:G,updateAgentProfile:Y,updateUserProfile:X,currentTurnIdRef:Z,activeChatJidRef:L,pendingRequestRef:V,draftBufferRef:q,thoughtBufferRef:K,previewResyncPendingRef:Q,previewResyncGenerationRef:F,steerQueuedTurnIdRef:B,thoughtExpandedRef:U,draftExpandedRef:H,draftThrottleRef:D,thoughtThrottleRef:E,viewStateRef:M,followupQueueItemsRef:z,dismissedQueueRowIdsRef:O,scrollToBottomRef:x,hasMoreRef:I,loadMoreRef:A,lastAgentResponseRef:k,wasAgentActiveRef:W,setActiveTurn:T,applyLiveGeneratedWidgetUpdate:y,setFloatingWidget:J,clearLastActivityFlag:P,handleUiVersionDrift:R,setAgentStatus:b,setAgentDraft:c,setAgentPlan:r,setAgentThought:e,setPendingRequest:m,clearAgentRunState:_0,getAgentStatus:H0,noteAgentActivity:Y0,showLastActivity:j0,refreshTimeline:L0,refreshModelAndQueueState:F0,refreshActiveChatAgents:h,refreshCurrentChatBranches:$0,notifyForFinalResponse:V0,setContextUsage:O0,refreshContextUsage:a,refreshQueueState:X0,setFollowupQueueItems:W0,clearQueuedSteerStateIfStale:P0,setSteerQueuedTurnId:p0,applyModelState:u0,getAgentContext:Y_,setExtensionStatusPanels:l0,setPendingExtensionPanelActions:a0,setExtensionWorkingState:R0,refreshActiveEditorFromWorkspace:i0,showIntentToast:m0,removeStalledPost:e0,setPosts:s0,preserveTimelineScrollTop:U_,openEditor:X_}=j,{turnId:c0,isCurrentChatEvent:z0}=QF(_,$,G);if(z0)Y($),X($);if(_==="ui_theme"){E5($);return}if(_==="ui_meters"){B9($);return}if(_==="ui_open_tab"){let E0=typeof $?.path==="string"?$.path.trim():"",g0=typeof $?.label==="string"?$.label.trim():void 0;if(E0==="piclaw://settings"){let x0=typeof $?.section==="string"?$.section.trim():"";window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:x0?{section:x0}:void 0}));return}if(E0&&typeof X_==="function")X_(E0,g0?{label:g0}:void 0);return}let L_=YF(_);if(L_.kind==="update"){if(!z0)return;if(L_.shouldAdoptTurn&&S5(c0,Z.current))T(c0);y($,L_.fallbackStatus||"streaming");return}if(L_.kind==="close"){if(!z0)return;J((E0)=>iB(E0,$));return}if(_?.startsWith("agent_")&&!KF(_))P();if(_==="connected"){if(R($?.app_asset_version))return;if($?.ui_theme){let x0=$.ui_theme.theme||"default",n0=$.ui_theme.tint||null;E5({theme:x0,tint:n0})}if($?.ui_meters)B9($.ui_meters);let E0=F.current+1;if(F.current=E0,Q.current=!0,q.current="",K.current="",b(null),c({text:"",totalLines:0}),r(""),e({text:"",totalLines:0}),R0({message:null,indicator:null,visible:!0}),m(null),V.current=null,_0(),g6(G)){if(F.current===E0)Q.current=!1;return}let g0=G;if(H0(g0).then((x0)=>{if(L.current!==g0)return;if(!x0||x0.status!=="active"||!x0.data)return;let n0=x0.data,A_=S8(n0);if(A_)T(A_);b(n0),Y0({clearSilence:!0,atMs:d$(n0)??Date.now()}),j0(n0);let Q_=C5(x0.thought);if(Q_)K.current=Q_.text,e(Q_);let E_=C5(x0.draft);if(E_)q.current=E_.text,c(E_)}).catch((x0)=>{console.warn("Failed to fetch agent status:",x0)}).finally(()=>{if(F.current===E0)Q.current=!1}),t1(M.current))L0();F0();return}if(_==="agent_status"){if(!z0){if($?.type==="done"||$?.type==="error")h(),$0();return}let E0=Y4($.context_usage);if(E0&&E0.percent!=null)O0((g0)=>v4(g0,E0)?g0:E0),P5(G,E0);if($.type==="context_usage")return;if($.type==="done"||$.type==="error"){if(m4(c0,Z.current))return;if($.type==="done"){if(V0(c0||Z.current),t1(M.current))L0()}if(a(),W.current=!1,_0(),O.current.clear(),h(),F0(),c({text:"",totalLines:0}),r(""),e({text:"",totalLines:0}),R0({message:null,indicator:null,visible:!0}),m(null),$.type==="error")b({type:"error",title:$.title||"Agent error"}),setTimeout(()=>b(null),8000);else b(null)}else{if(c0)T(c0);if(Y0({running:!0,clearSilence:!0,atMs:d$($)??Date.now()}),$.type==="thinking")q.current="",K.current="",c({text:"",totalLines:0}),r(""),e({text:"",totalLines:0});b($)}return}if(_==="agent_steer_queued"){if(!z0)return;if(m4(c0,Z.current))return;let E0=GF(c0,Z.current);if(!E0)return;B.current=E0,p0(E0);return}if(_==="agent_followup_queued"){if(!z0)return;W0((E0)=>jB(E0,$)),X0();return}if(_==="agent_followup_consumed"){if(!z0)return;let E0=g5(z.current,$);if(E0)P0(E0.remainingQueueCount),W0((g0)=>G4(g0,E0.rowId).items);if(X0(),t1(M.current))L0();return}if(_==="agent_followup_removed"){if(!z0)return;let E0=g5(z.current,$);if(E0)O.current.add(E0.rowId),P0(E0.remainingQueueCount),W0((g0)=>G4(g0,E0.rowId).items);X0();return}if(_==="agent_draft_delta"){if(!z0)return;if(Q.current)return;if(m4(c0,Z.current))return;if(S5(c0,Z.current))T(c0);Y0({running:!0,clearSilence:!0}),q.current=RK(q.current,$);let E0=Date.now();if(!D.current||E0-D.current>=100){D.current=E0;let g0=q.current;if(H.current)c((x0)=>Rj(g0,x0));else c(g8(g0,null))}return}if(_==="agent_draft"){if(!z0)return;if(Q.current)return;if(m4(c0,Z.current))return;if(S5(c0,Z.current))T(c0);Y0({running:!0,clearSilence:!0});let E0=$.text||"",g0=$.mode||($.kind==="plan"?"replace":"append");if($.kind==="plan")r((x0)=>PK(x0,E0,g0));else if(!H.current)q.current=E0,c(g8(E0,$.total_lines));return}if(_==="agent_thought_delta"){if(!z0)return;if(Q.current)return;if(m4(c0,Z.current))return;if(S5(c0,Z.current))T(c0);Y0({running:!0,clearSilence:!0}),K.current=fK(K.current,$);let E0=Date.now();if(U.current&&(!E.current||E0-E.current>=100)){E.current=E0;let g0=K.current;e((x0)=>Rj(g0,x0))}return}if(_==="agent_thought"){if(!z0)return;if(Q.current)return;if(m4(c0,Z.current))return;if(S5(c0,Z.current))T(c0);Y0({running:!0,clearSilence:!0});let E0=$.text||"";if(!U.current)K.current=E0,e(g8(E0,$.total_lines));return}if(_==="model_changed"){if(!z0)return;u0($);let E0=G;Y_(E0).then((g0)=>{if(L.current!==E0)return;let x0=Y4(g0);if(x0&&x0.percent!=null)O0((n0)=>v4(n0,x0)?n0:x0),P5(E0,x0)}).catch(()=>{if(L.current!==E0)return});return}let o0=XF(_,$,G);if(o0.isStatusPanelWidgetEvent){if(o0.eventChatJid!==G)return;if(!o0.panelKey)return;if(l0((E0)=>qB(E0,$)),VB($))a0((E0)=>v8(E0,o0.panelKey));l8(_,$);return}if(_==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:$}));i0($?.updates);return}if(VF(_)){if(_==="extension_ui_title"){h(),$0(),l8(_,$);return}if(!z0)return;let E0=LF(_,$);if(E0&&E0.percent!=null)O0((x0)=>v4(x0,E0)?x0:E0);R0((x0)=>{return ZF(x0,_,$)??x0}),l8(_,$);let g0=qF(_,$);if(g0)m0(g0.title,g0.detail,g0.kind,g0.durationMs);return}let H_=t1(M.current);if(_==="agent_response"){if(!z0)return;R0({message:null,indicator:null,visible:!0}),e0(),k.current={post:$,turnId:Z.current}}if(SK(_,z0,H_))s0((E0)=>gK(E0,$)),x.current?.();if(_==="interaction_updated"){if(!fj(z0,H_))return;s0((E0)=>uK(E0,$))}if(_==="interaction_deleted"){if(!fj(z0,H_))return;let E0=$?.ids||[];if(E0.length){if(U_(()=>{s0((g0)=>bK(g0,E0))}),I.current)A.current?.({preserveScroll:!0,preserveMode:"top"})}}}function Ny(_){return _?15000:60000}function FF(_){let{currentChatJid:$,posts:j,scrollToMessage:G,handleConnectionStatusChange:Y,loadPosts:X,refreshCurrentView:Z,updateAgentProfile:L,updateUserProfile:V,currentTurnIdRef:q,activeChatJidRef:K,pendingRequestRef:Q,draftBufferRef:F,thoughtBufferRef:B,previewResyncPendingRef:U,previewResyncGenerationRef:H,steerQueuedTurnIdRef:D,thoughtExpandedRef:E,draftExpandedRef:M,draftThrottleRef:z,thoughtThrottleRef:O,viewStateRef:x,followupQueueItemsRef:I,dismissedQueueRowIdsRef:A,scrollToBottomRef:k,hasMoreRef:W,loadMoreRef:T,lastAgentResponseRef:y,wasAgentActiveRef:J,setActiveTurn:P,applyLiveGeneratedWidgetUpdate:R,setFloatingWidget:b,clearLastActivityFlag:c,handleUiVersionDrift:r,setAgentStatus:e,setAgentDraft:m,setAgentPlan:_0,setAgentThought:H0,setPendingRequest:Y0,clearAgentRunState:j0,getAgentStatus:L0,noteAgentActivity:F0,showLastActivity:h,refreshTimeline:$0,refreshModelAndQueueState:V0,refreshActiveChatAgents:O0,refreshCurrentChatBranches:a,notifyForFinalResponse:X0,setContextUsage:W0,refreshContextUsage:P0,refreshQueueState:p0,setFollowupQueueItems:u0,clearQueuedSteerStateIfStale:Y_,setSteerQueuedTurnId:l0,applyModelState:a0,getAgentContext:R0,setExtensionStatusPanels:i0,setPendingExtensionPanelActions:m0,setExtensionWorkingState:e0,refreshActiveEditorFromWorkspace:s0,showIntentToast:U_,removeStalledPost:X_,setPosts:c0,preserveTimelineScrollTop:z0,openEditor:L_,finalizeStalledResponse:o0,connectionStatus:H_,agentStatus:E0,refreshAgentStatus:g0,refreshAutoresearchStatus:x0}=_,n0=f((Q_,E_)=>{BF(Q_,E_,{currentChatJid:$,updateAgentProfile:L,updateUserProfile:V,currentTurnIdRef:q,activeChatJidRef:K,pendingRequestRef:Q,draftBufferRef:F,thoughtBufferRef:B,previewResyncPendingRef:U,previewResyncGenerationRef:H,steerQueuedTurnIdRef:D,thoughtExpandedRef:E,draftExpandedRef:M,draftThrottleRef:z,thoughtThrottleRef:O,viewStateRef:x,followupQueueItemsRef:I,dismissedQueueRowIdsRef:A,scrollToBottomRef:k,hasMoreRef:W,loadMoreRef:T,lastAgentResponseRef:y,wasAgentActiveRef:J,setActiveTurn:P,applyLiveGeneratedWidgetUpdate:R,setFloatingWidget:b,clearLastActivityFlag:c,handleUiVersionDrift:r,setAgentStatus:e,setAgentDraft:m,setAgentPlan:_0,setAgentThought:H0,setPendingRequest:Y0,clearAgentRunState:j0,getAgentStatus:L0,noteAgentActivity:F0,showLastActivity:h,refreshTimeline:$0,refreshModelAndQueueState:V0,refreshActiveChatAgents:O0,refreshCurrentChatBranches:a,notifyForFinalResponse:X0,setContextUsage:W0,refreshContextUsage:P0,refreshQueueState:p0,setFollowupQueueItems:u0,clearQueuedSteerStateIfStale:Y_,setSteerQueuedTurnId:l0,applyModelState:a0,getAgentContext:R0,setExtensionStatusPanels:i0,setPendingExtensionPanelActions:m0,setExtensionWorkingState:e0,refreshActiveEditorFromWorkspace:s0,showIntentToast:U_,removeStalledPost:X_,setPosts:c0,preserveTimelineScrollTop:z0,openEditor:L_})},[K,R,a0,j0,c,Y_,$,q,A,F,M,z,I,R0,L0,r,W,y,T,F0,X0,Q,z0,H,U,O0,s0,P0,a,V0,p0,$0,X_,k,P,m,_0,e,H0,W0,i0,e0,b,u0,m0,Y0,c0,l0,U_,h,D,B,E,O,L,V,x,J,L_]);g(()=>{if(typeof window>"u")return;let Q_=window.__PICLAW_TEST_API||{};return Q_.emit=n0,Q_.reset=()=>{X_(),j0(),e(null),m({text:"",totalLines:0}),_0(""),H0({text:"",totalLines:0}),e0({message:null,indicator:null,visible:!0}),Y0(null)},Q_.finalize=()=>o0(),window.__PICLAW_TEST_API=Q_,()=>{if(window.__PICLAW_TEST_API===Q_)window.__PICLAW_TEST_API=void 0}},[j0,o0,n0,X_,m,_0,e,H0,e0,Y0]),jF({handleSseEvent:n0,handleConnectionStatusChange:Y,loadPosts:X,onWake:Z,chatJid:$}),g(()=>{if(!j||j.length===0)return;let Q_=location.hash;if(!Q_||!Q_.startsWith("#msg-"))return;let E_=Q_.slice(5);G(E_),history.replaceState(null,"",location.pathname+location.search)},[j,G]);let A_=E0!==null;g(()=>{if(H_!=="connected")return;let Q_=Ny(A_),E_=setInterval(()=>{TB({viewStateRef:x,isAgentActive:A_,refreshTimeline:$0,refreshQueueState:p0,refreshAgentStatus:g0,refreshContextUsage:P0,refreshAutoresearchStatus:x0})},Q_);return()=>clearInterval(E_)},[H_,A_,g0,x0,P0,p0,$0,x]),g(()=>{return x8(()=>{g0(),P0(),p0(),x0()})},[g0,x0,P0,p0])}function Uy(_){return{currentChatJid:_.currentChatJid,activeChatJidRef:_.activeChatJidRef,queueRefreshGenRef:_.queueRefreshGenRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,getAgentQueueState:_.getAgentQueueState,setFollowupQueueItems:_.setFollowupQueueItems,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,getAgentContext:_.getAgentContext,setContextUsage:_.setContextUsage,getAutoresearchStatus:_.getAutoresearchStatus,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,getAgentStatus:_.getAgentStatus,wasAgentActiveRef:_.wasAgentActiveRef,viewStateRef:_.viewStateRef,refreshTimeline:_.refreshTimeline,clearAgentRunState:_.clearAgentRunState,agentStatusRef:_.agentStatusRef,pendingRequestRef:_.pendingRequestRef,thoughtBufferRef:_.thoughtBufferRef,draftBufferRef:_.draftBufferRef,setAgentStatus:_.setAgentStatus,setAgentDraft:_.setAgentDraft,setAgentPlan:_.setAgentPlan,setAgentThought:_.setAgentThought,setPendingRequest:_.setPendingRequest,setActiveTurn:_.setActiveTurn,noteAgentActivity:_.noteAgentActivity,clearLastActivityFlag:_.clearLastActivityFlag,isAgentRunningRef:_.isAgentRunningRef,currentTurnIdRef:_.currentTurnIdRef,silentRecoveryRef:_.silentRecoveryRef,silenceRefreshMs:_.silenceRefreshMs,lastAgentEventRef:_.lastAgentEventRef,lastSilenceNoticeRef:_.lastSilenceNoticeRef,silenceWarningMs:_.silenceWarningMs,silenceFinalizeMs:_.silenceFinalizeMs,isCompactionStatus:_.isCompactionStatus,serverVersionContext:_.serverVersionContext,setConnectionStatus:_.setConnectionStatus,setStateAccessFailed:_.setStateAccessFailed,setPendingRequestForConnection:_.setPendingRequest,hasConnectedOnceRef:_.hasConnectedOnceRef}}function Ey(_){return{getAgents:_.getAgents,setAgents:_.setAgents,setUserProfile:_.setUserProfile,applyBranding:_.applyBranding,readStoredNumber:_.readStoredNumber,sidebarWidthRef:_.sidebarWidthRef,appShellRef:_.appShellRef,currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,getAgentModels:_.getAgentModels,getAgentContext:_.getAgentContext,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,activeChatJidRef:_.activeChatJidRef,setActiveChatAgents:_.setActiveChatAgents,setCurrentChatBranches:_.setCurrentChatBranches,setActiveModel:_.setActiveModel,setActiveThinkingLevel:_.setActiveThinkingLevel,setSupportsThinking:_.setSupportsThinking,setActiveModelUsage:_.setActiveModelUsage,setAgentModelsPayload:_.setAgentModelsPayload,setHasLoadedAgentModels:_.setHasLoadedAgentModels,agentsRef:_.agentsRef,refreshQueueState:_.refreshQueueState,refreshContextUsage:_.refreshContextUsage,refreshAutoresearchStatus:_.refreshAutoresearchStatus,setContextUsage:_.setContextUsage,setExtensionWorkingState:_.setExtensionWorkingState}}function Dy(_){return{currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,currentHashtag:_.currentHashtag,searchQuery:_.searchQuery,searchScope:_.searchScope,loadPosts:_.loadPosts,searchPosts:_.searchPosts,setPosts:_.setPosts,setHasMore:_.setHasMore,scrollToBottom:_.scrollToBottom,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,setExtensionWorkingState:_.setExtensionWorkingState,paneStateOwnerChatJidRef:_.paneStateOwnerChatJidRef,chatPaneStateByChatRef:_.chatPaneStateByChatRef,snapshotCurrentChatPaneState:_.snapshotCurrentChatPaneState,restoreChatPaneState:_.restoreChatPaneState,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,refreshQueueState:_.refreshQueueState,refreshAgentStatus:_.refreshAgentStatus,refreshContextUsage:_.refreshContextUsage,viewStateRef:_.viewStateRef,refreshTimeline:_.refreshTimeline,refreshModelAndQueueState:_.refreshModelAndQueueState,refreshPostPaintThreadState:_.refreshPostPaintThreadState,setFloatingWidget:_.setFloatingWidget,dismissedLiveWidgetKeysRef:_.dismissedLiveWidgetKeysRef}}function Hy(_){return{currentChatJid:_.currentChatJid,posts:_.posts,scrollToMessage:_.scrollToMessage,handleConnectionStatusChange:_.handleConnectionStatusChange,loadPosts:_.loadPosts,refreshCurrentView:_.refreshCurrentView,updateAgentProfile:_.updateAgentProfile,updateUserProfile:_.updateUserProfile,currentTurnIdRef:_.currentTurnIdRef,activeChatJidRef:_.activeChatJidRef,pendingRequestRef:_.pendingRequestRef,draftBufferRef:_.draftBufferRef,thoughtBufferRef:_.thoughtBufferRef,previewResyncPendingRef:_.previewResyncPendingRef,previewResyncGenerationRef:_.previewResyncGenerationRef,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef,thoughtExpandedRef:_.thoughtExpandedRef,draftExpandedRef:_.draftExpandedRef,draftThrottleRef:_.draftThrottleRef,thoughtThrottleRef:_.thoughtThrottleRef,viewStateRef:_.viewStateRef,followupQueueItemsRef:_.followupQueueItemsRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,scrollToBottomRef:_.scrollToBottomRef,hasMoreRef:_.hasMoreRef,loadMoreRef:_.loadMoreRef,lastAgentResponseRef:_.lastAgentResponseRef,wasAgentActiveRef:_.wasAgentActiveRef,setActiveTurn:_.setActiveTurn,applyLiveGeneratedWidgetUpdate:_.applyLiveGeneratedWidgetUpdate,setFloatingWidget:_.setFloatingWidget,clearLastActivityFlag:_.clearLastActivityFlag,handleUiVersionDrift:_.handleUiVersionDrift,setAgentStatus:_.setAgentStatus,setAgentDraft:_.setAgentDraft,setAgentPlan:_.setAgentPlan,setAgentThought:_.setAgentThought,setPendingRequest:_.setPendingRequest,clearAgentRunState:_.clearAgentRunState,getAgentStatus:_.getAgentStatus,noteAgentActivity:_.noteAgentActivity,showLastActivity:_.showLastActivity,refreshTimeline:_.refreshTimeline,refreshModelAndQueueState:_.refreshModelAndQueueState,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,notifyForFinalResponse:_.notifyForFinalResponse,setContextUsage:_.setContextUsage,refreshContextUsage:_.refreshContextUsage,refreshQueueState:_.refreshQueueState,setFollowupQueueItems:_.setFollowupQueueItems,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,setSteerQueuedTurnId:_.setSteerQueuedTurnId,applyModelState:_.applyModelState,getAgentContext:_.getAgentContext,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,setExtensionWorkingState:_.setExtensionWorkingState,refreshActiveEditorFromWorkspace:_.refreshActiveEditorFromWorkspace,showIntentToast:_.showIntentToast,removeStalledPost:_.removeStalledPost,setPosts:_.setPosts,preserveTimelineScrollTop:_.preserveTimelineScrollTop,finalizeStalledResponse:_.finalizeStalledResponse,connectionStatus:_.connectionStatus,agentStatus:_.agentStatus,refreshAgentStatus:_.refreshAgentStatus,refreshAutoresearchStatus:_.refreshAutoresearchStatus}}function NF(_){let $=yB(Uy(_)),j=rB(Ey({..._,refreshQueueState:$.refreshQueueState,refreshContextUsage:$.refreshContextUsage,refreshAutoresearchStatus:$.refreshAutoresearchStatus})),G=$F(Dy({..._,refreshQueueState:$.refreshQueueState,refreshAgentStatus:$.refreshAgentStatus,refreshContextUsage:$.refreshContextUsage,refreshModelAndQueueState:j.refreshModelAndQueueState,refreshPostPaintThreadState:j.refreshPostPaintThreadState}));return FF(Hy({..._,handleConnectionStatusChange:$.handleConnectionStatusChange,handleUiVersionDrift:$.handleUiVersionDrift,refreshCurrentView:G.refreshCurrentView,updateAgentProfile:j.updateAgentProfile,updateUserProfile:j.updateUserProfile,applyLiveGeneratedWidgetUpdate:G.applyLiveGeneratedWidgetUpdate,refreshModelAndQueueState:j.refreshModelAndQueueState,refreshActiveChatAgents:j.refreshActiveChatAgents,refreshCurrentChatBranches:j.refreshCurrentChatBranches,refreshContextUsage:$.refreshContextUsage,refreshQueueState:$.refreshQueueState,applyModelState:j.applyModelState,refreshAgentStatus:$.refreshAgentStatus,refreshAutoresearchStatus:$.refreshAutoresearchStatus})),{agentStatusLifecycle:$,chatRefreshLifecycle:j,viewRefreshLifecycle:G}}k0();var UF="piclaw:pane-host-transfer:",Wy=300000;function EF(_){try{return _?.localStorage??null}catch{return null}}function DF(_){return typeof _==="string"?_.trim():""}function HF(_){if(!_||typeof _!=="object"||Array.isArray(_))return null;return _}function Oy(_=Date.now()){return`pane-transfer-${_.toString(36)}-${Math.random().toString(36).slice(2,10)}`}function zy(_,$){try{return _?.removeItem($),!0}catch(j){return!1}}function Ay(_,$=globalThis,j=Date.now()){let G=EF($),Y=DF(_?.path),X=HF(_?.payload);if(!G||!Y||!X)return null;let Z=Oy(j);try{return G.setItem(`${UF}${Z}`,JSON.stringify({path:Y,payload:X,capturedAt:j})),Z}catch{return null}}function lj(_,$=globalThis,j=Date.now()){let G=typeof _==="string"?_.trim():"",Y=EF($);if(!G||!Y)return null;let X=`${UF}${G}`,Z="";try{Z=Y.getItem(X)||""}catch{return null}if(!Z)return null;zy(Y,X);try{let L=JSON.parse(Z),V=typeof L?.capturedAt==="number"&&Number.isFinite(L.capturedAt)?L.capturedAt:j;if(V+Wy<j)return null;let q=DF(L?.path),K=HF(L?.payload);if(!q||!K)return null;return{path:q,payload:K,capturedAt:V}}catch{return null}}function p8(_,$=globalThis,j=Date.now()){let G=Ay(_,$,j);return G?{pane_transfer:G}:null}function WF(_=globalThis,$=Date.now()){let j=Z5("pane_transfer",_);return lj(j,_,$)}function c4(_){return typeof _==="string"?_.trim():""}function Jy(_){return Boolean(_)&&typeof _.get==="function"&&typeof _.set==="function"&&typeof _.delete==="function"&&typeof _.entries==="function"}function pj(_){if(!_)return null;let $=_.__piclawPaneLiveTransferRegistry__;if(Jy($))return $;let j=new Map;return _.__piclawPaneLiveTransferRegistry__=j,j}function ky(_){try{return _?.(),!0}catch($){return!1}}function u5(_,$=typeof window<"u"?window:null){let j=pj($),G=c4(_?.panePath),Y=c4(_?.paneInstanceId),X=c4(_?.paneWindowId);if(!j||!G||!Y||!X||typeof _?.instance?.moveHost!=="function")return!1;return j.set(X,{..._,panePath:G,paneInstanceId:Y,paneWindowId:X,registeredAt:typeof _?.registeredAt==="number"?_.registeredAt:Date.now()}),!0}function OF(_,$=typeof window<"u"?window:null){let j=pj($),G=c4(_);if(!j||!G)return;for(let[Y,X]of j.entries())if(X?.panePath===G)j.delete(Y)}async function zF(_,$,j,G){let Y=pj(_),X=c4($?.panePath),Z=c4($?.paneInstanceId),L=c4($?.paneWindowId);if(!Y||!X||!Z||!L)return null;let V=Y.get(L)||null;if(!V)return null;if(V.panePath!==X||V.paneInstanceId!==Z)return null;if(typeof V.instance?.moveHost!=="function")return null;if(!await V.instance.moveHost(j,G))return null;return Y.delete(L),ky(V.releaseSourceHost),V.instance}i2();function v6(_){if(!_||typeof _!=="object")return!1;let $=_;if(typeof $.closest==="function"&&$.closest('input, textarea, select, [contenteditable="true"], .compose-box, .compose-model-popup, .compose-session-popup'))return!0;return Boolean($.isContentEditable)}function AF(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=_?.openTab,Y=_?.editSource,X=_?.popOutPane,Z=(K)=>{let Q=K?.detail?.path,F=typeof K?.detail?.label==="string"&&K.detail.label.trim()?K.detail.label.trim():void 0;if(Q)G?.(Q,F)},L=(K)=>{let Q=K?.detail?.path,F=typeof K?.detail?.label==="string"&&K.detail.label.trim()?K.detail.label.trim():void 0;if(Q)Y?.(Q,F)},V=(K)=>{let Q=K?.detail?.path,F=typeof K?.detail?.label==="string"&&K.detail.label.trim()?K.detail.label.trim():void 0;if(Q)X?.(Q,F)},q=["pane:open-tab","office-viewer:open-tab","data-viewer:open-tab","pdf-viewer:open-tab","image-viewer:open-tab","video-viewer:open-tab","html-viewer:open-tab","mindmap:open-tab","vnc:open-tab"];return q.forEach((K)=>j.addEventListener(K,Z)),j.addEventListener("html-viewer:edit-source",L),j.addEventListener("pane:popout",V),()=>{q.forEach((K)=>j.removeEventListener(K,Z)),j.removeEventListener("html-viewer:edit-source",L),j.removeEventListener("pane:popout",V)}}function JF(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=(Y)=>{if(v6(Y?.target))return;if(!J$(Y,"toggleDock"))return;Y.preventDefault?.(),_?.()};return j.addEventListener("keydown",G),()=>j.removeEventListener("keydown",G)}function kF(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=_?.toggleZenMode,Y=_?.exitZenMode,X=typeof _?.isZenModeActive==="function"?_.isZenModeActive:()=>Boolean(_?.zenMode),Z=(L)=>{if(J$(L,"toggleZenMode")){L.preventDefault?.(),G?.();return}if(v6(L?.target))return;if(L?.key==="Escape"&&X())L.preventDefault?.(),Y?.()};return j.addEventListener("keydown",Z),()=>j.removeEventListener("keydown",Z)}function MF(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=(Y)=>{if(v6(Y?.target))return;if(J$(Y,"previousChat")){Y.preventDefault?.(),_?.previousChat?.();return}if(J$(Y,"nextChat"))Y.preventDefault?.(),_?.nextChat?.()};return j.addEventListener("keydown",G),()=>j.removeEventListener("keydown",G)}function TF(_={}){let $=_.document??(typeof document<"u"?document:null);if(!$)return()=>{};let j=(G)=>{if(v6(G?.target))return;if(!J$(G,"openSettings"))return;G.preventDefault(),s1()};return $.addEventListener("keydown",j),()=>$.removeEventListener("keydown",j)}function yF(_={}){let $=_.document??(typeof document<"u"?document:null);if(!$)return()=>{};let j=(G)=>{if(v6(G?.target))return;if(!J$(G,"openHelp"))return;G.preventDefault(),s1({section:"keyboard"})};return $.addEventListener("keydown",j),()=>$.removeEventListener("keydown",j)}function wF(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,renameBranchInFlight:G,renameBranchLockUntil:Y,getFormLock:X,setRenameBranchNameDraft:Z,setIsRenameBranchFormOpen:L,now:V=Date.now()}=_;if(!$||!j?.chat_jid)return!1;let q=X?.()||null;if(!q)return!1;if(G||V<Number(Y||0)||q.inFlight||V<Number(q.cooldownUntil||0))return!1;return Z?.(j.agent_name||""),L?.(!0),!0}function IF(_){let{setIsRenameBranchFormOpen:$,setRenameBranchNameDraft:j}=_;$?.(!1),j?.("")}async function xF(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,nextName:G,openRenameForm:Y,renameBranchInFlightRef:X,renameBranchLockUntilRef:Z,getFormLock:L,setIsRenamingBranch:V,renameChatBranch:q,refreshActiveChatAgents:K,refreshCurrentChatBranches:Q,navigate:F,baseHref:B,chatOnlyMode:U,showIntentToast:H,closeRenameForm:D,now:E=()=>Date.now()}=_;if(!$||!j?.chat_jid)return!1;if(typeof G!=="string")return Y?.(),!1;let M=E(),z=L?.()||null;if(!z)return!1;if(X.current||M<Number(Z.current||0)||z.inFlight||M<Number(z.cooldownUntil||0))return!1;X.current=!0,z.inFlight=!0,V?.(!0);try{let O=j.agent_name||"",x=Z8(G,O);if(!x.canSubmit)return H?.("Could not rename session",x.message||"Enter a valid session handle.","warning",4000),!1;let I=x.normalized||O,A=await q(j.chat_jid,{agentName:I});await Promise.allSettled([K?.(),Q?.()]);let k=A?.branch?.agent_name||I||O;return H?.("Session renamed",`@${k}`,"info",3500),D?.(),!0}catch(O){let x=O instanceof Error?O.message:String(O||"Could not rename session."),I=/already in use/i.test(x||"")?`${x} Switch to or restore that existing session from the session manager.`:x;return H?.("Could not rename session",I||"Could not rename session.","warning",5000),!1}finally{X.current=!1,V?.(!1);let O=E()+pQ;Z.current=O;let x=L?.()||null;if(x)x.inFlight=!1,x.cooldownUntil=O}}async function CF(_){let{hasWindow:$=typeof window<"u",targetChatJid:j=null,currentChatJid:G,currentBranchRecord:Y,currentChatBranches:X=[],activeChatAgents:Z=[],pruneChatBranch:L,refreshActiveChatAgents:V,refreshCurrentChatBranches:q,showIntentToast:K,baseHref:Q,chatOnlyMode:F,navigate:B,confirm:U=(k)=>window.confirm(k)}=_;if(!$)return!1;let H=typeof j==="string"&&j.trim()?j.trim():"",D=typeof G==="string"&&G.trim()?G.trim():"",E=H||Y?.chat_jid||D;if(!E)return K?.("Could not prune branch","No active session is selected yet.","warning",4000),!1;let M=(Y?.chat_jid===E?Y:null)||X.find((k)=>k?.chat_jid===E)||Z.find((k)=>k?.chat_jid===E)||null,z=M?.chat_jid===(M?.root_chat_jid||M?.chat_jid),O=Boolean(z&&E==="web:default"),x=Boolean(z&&X.some((k)=>{let W=typeof k?.chat_jid==="string"?k.chat_jid.trim():"",T=typeof k?.root_chat_jid==="string"?k.root_chat_jid.trim():W;return W&&W!==E&&T===E&&!k?.archived_at}));if(O)return K?.("Cannot archive session","The default chat session cannot be archived.","warning",4000),!1;if(x)return K?.("Cannot archive session","Archive or delete the child branch sessions first.","warning",4500),!1;let I=`@${M?.agent_name||E}${M?.chat_jid?` — ${M.chat_jid}`:""}`;if(!U(z?`Archive ${I}?

This removes the session from the session picker. Chat history is preserved.`:`Prune ${I}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return!1;try{await L(E),await Promise.allSettled([V?.(),q?.()]);let k=z?"web:default":M?.root_chat_jid||"web:default";K?.(z?"Session archived":"Branch pruned",`${I} has been archived.`,"info",3000);let W=w1(Q,k,{chatOnly:F});return B?.(W),!0}catch(k){let W=k instanceof Error?k.message:String(k||"Could not prune branch.");return K?.("Could not prune branch",W||"Could not prune branch.","warning",5000),!1}}async function PF(_){let{targetChatJid:$,purgeChatBranch:j,currentChatBranches:G=[],refreshActiveChatAgents:Y,refreshCurrentChatBranches:X,showIntentToast:Z,confirm:L=(H)=>window.confirm(H)}=_,V=typeof $==="string"?$.trim():"";if(!V||typeof j!=="function")return!1;let q=G.find((H)=>H?.chat_jid===V)||null;if(!Boolean(q?.archived_at))return Z?.("Could not delete branch","Only archived sessions can be permanently deleted.","warning",4500),!1;let Q=Boolean(q?.chat_jid&&q.chat_jid===(q.root_chat_jid||q.chat_jid)),F=`@${q?.agent_name||V}`;if(!L(`Permanently delete ${F}?

This removes all chat history, token usage, cursor state, scheduled tasks, and session files for this ${Q?"session":"branch"}. It cannot be undone.`))return!1;try{return await j(V),await Promise.allSettled([Y?.(),X?.()]),Z?.(Q?"Archived session deleted":"Archived branch deleted",`${F} was permanently deleted.`,"info",4000),!0}catch(H){let D=H instanceof Error?H.message:String(H||`Could not permanently delete archived ${Q?"session":"branch"}.`);return Z?.("Could not delete branch",D||`Could not permanently delete archived ${Q?"session":"branch"}.`,"warning",5000),!1}}async function RF(_){let{targetChatJid:$,restoreChatBranch:j,currentChatBranches:G=[],refreshActiveChatAgents:Y,refreshCurrentChatBranches:X,showIntentToast:Z,baseHref:L,chatOnlyMode:V,navigate:q}=_,K=typeof $==="string"?$.trim():"";if(!K||typeof j!=="function")return!1;try{let Q=G.find((E)=>E?.chat_jid===K)||null,F=await j(K);await Promise.allSettled([Y?.(),X?.()]);let B=F?.branch,U=typeof B?.chat_jid==="string"&&B.chat_jid.trim()?B.chat_jid.trim():K,H=Bq(Q?.agent_name,B?.agent_name,U);Z?.("Branch restored",H,"info",4200);let D=w1(L,U,{chatOnly:V});return q?.(D),!0}catch(Q){let F=Q instanceof Error?Q.message:String(Q||"Could not restore branch.");return Z?.("Could not restore branch",F||"Could not restore branch.","warning",5000),!1}}async function fF(_){let{branchLoaderSourceChatJid:$,forkChatBranch:j,setBranchLoaderState:G,navigate:Y,baseHref:X,isCancelled:Z=()=>!1}=_;try{G?.({status:"running",message:"Preparing a new chat branch…"});let L=await j($);if(Z())return!1;let V=L?.branch,q=typeof V?.chat_jid==="string"&&V.chat_jid.trim()?V.chat_jid.trim():null;if(!q)throw Error("Branch fork did not return a chat id.");let K=w1(X,q,{chatOnly:!0});return Y?.(K,{replace:!0}),!0}catch(L){if(Z())return!1;return G?.({status:"error",message:D4(L)}),!1}}function gF(_){let{hasWindow:$=typeof window<"u",nextChatJid:j,currentChatJid:G,chatOnlyMode:Y,currentHref:X,navigate:Z}=_;if(!$)return!1;let L=typeof j==="string"?j.trim():"";if(!L||L===G)return!1;let V=w1(X,L,{chatOnly:Y});return Z?.(V),!0}function My(_){return typeof _==="string"?_.trim():""}function Ty(_){return new Promise(($)=>setTimeout($,_))}async function SF(_,$){if(typeof _?.beforeDetachFromHost!=="function")return;await _.beforeDetachFromHost({path:$,target:"popout"})}async function uF(_){let{panePath:$,tabStripActiveId:j,editorInstanceRef:G,dockInstanceRef:Y,terminalTabPath:X,activateTab:Z,getActiveTabId:L,resolveTab:V,buildEditorPopoutTransfer:q}=_,K=$===X&&Boolean(V?.($));if($===X&&!K){let H=Y.current;if(await SF(H,$),typeof H?.preparePopoutTransfer!=="function")return null;return await H.preparePopoutTransfer()}let Q=()=>My(L?.()??j),F=Q(),B=G.current;if(F!==$)Z?.($);let U=F===$?G.current:null;if(typeof U?.preparePopoutTransfer!=="function")for(let H=0;H<12;H+=1){if(H>0)await Ty(16);else await Promise.resolve();let D=Q(),E=G.current,M=D===$,z=E!==B;if(!M||typeof E?.preparePopoutTransfer!=="function")continue;if(F===$||z||H>0){U=E;break}}if(await SF(U,$),typeof U?.preparePopoutTransfer==="function"){let H=await U.preparePopoutTransfer();if(H)return H}return q?.($)??null}function bF(_){let{panePath:$,terminalTabPath:j,dockVisible:G,resolveTab:Y,closeTab:X,setDockVisible:Z}=_,L=Y($);if(L&&!L.dirty){X($);return}if($===j&&G)Z(!1)}function vF(_){let{hasWindow:$=typeof window<"u",editorOpen:j,shellElement:G,editorWidthRef:Y,dockHeightRef:X,sidebarWidthRef:Z,readStoredNumber:L}=_;if(!j||!$||!G)return;if(!Y.current){let V=L("editorWidth",null),q=Z.current||280,K=Number.isFinite(V)?Number(V):q;Y.current=O6(K,typeof window<"u"?window.innerWidth:0,Z.current||0)}if(G.style.setProperty("--editor-width",`${Y.current}px`),!X.current){let V=L("dockHeight",null);X.current=Number.isFinite(V)?Number(V):200}G.style.setProperty("--dock-height",`${X.current}px`)}T_();async function mF(_){if(typeof _!=="function")return null;try{return await _()}catch{return null}}async function cF(_){let{currentChatJid:$,chatOnlyMode:j,forkChatBranch:G,refreshActiveChatAgents:Y,refreshCurrentChatBranches:X,showIntentToast:Z,navigate:L,baseHref:V}=_;if(typeof L==="function")try{let q=v3(V,$,{chatOnly:j});return L(q),!0}catch(q){return Z?.("Could not create branch",D4(q),"warning",5000),!1}try{let K=(await G($))?.branch,Q=typeof K?.chat_jid==="string"&&K.chat_jid.trim()?K.chat_jid.trim():null;if(!Q)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([Y?.(),X?.()]);let F=K?.agent_name?`@${K.agent_name}`:Q;Z?.("New branch created",`Switched to ${F}.`,"info",2500);let B=w1(V,Q,{chatOnly:j});return L?.(B),!0}catch(q){return Z?.("Could not create branch",D4(q),"warning",5000),!1}}async function hF(_){let{rootName:$,chatOnlyMode:j,createRootChatSession:G,refreshActiveChatAgents:Y,refreshCurrentChatBranches:X,showIntentToast:Z,navigate:L,baseHref:V}=_,q=String($||"").trim();if(!q)return!1;try{let F=(await(typeof G==="function"?G:S7)(q))?.branch,B=typeof F?.chat_jid==="string"&&F.chat_jid.trim()?F.chat_jid.trim():null;if(!B)throw Error("Root session creation did not return a chat id.");await Promise.allSettled([Y?.(),X?.()]);let U=F?.agent_name?`@${F.agent_name}`:B;Z?.("Root session created",`Switched to ${U}.`,"info",2500);let H=w1(V,B,{chatOnly:j});return L?.(H),!0}catch(K){return Z?.("Could not create root session",D4(K),"warning",5000),!1}}async function lF(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,path:G,label:Y,showIntentToast:X,resolveSourceTransfer:Z,closeSourcePaneIfTransferred:L,onPaneWindowOpened:V,currentChatJid:q,baseHref:K}=_;if(!$||j)return!1;let Q=typeof G==="string"&&G.trim()?G.trim():"";if(!Q)return!1;let F=VY(Q);if(!F)return X?.("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000),!1;let B=S3(F);if(!B)return X?.("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000),!1;g3(B,{title:typeof Y==="string"&&Y.trim()?`Opening ${Y}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});try{let U=await Z?.(Q),H=Boolean(U&&Object.keys(U).length>0),D=qY(K,Q,{label:typeof Y==="string"&&Y.trim()?Y.trim():void 0,chatJid:q,params:U});if(u3(B,D),V?.(Q,B,U||null),H&&!V)L?.(Q);return!0}catch(U){b3(B);let H=U instanceof Error?U.message:"Could not transfer pane state to the new window.";return X?.("Could not open pane window",H,"warning",5000),!1}}async function pF(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,currentChatJid:G,currentRootChatJid:Y,forkChatBranch:X,getActiveChatAgents:Z,getChatBranches:L,setActiveChatAgents:V,setCurrentChatBranches:q,showIntentToast:K,baseHref:Q}=_;if(!$||j)return!1;let F=LY(G);if(!F)return K?.("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000),!1;if(F.mode==="tab"){let U=v3(Q,G,{chatOnly:!0});if(!window.open(U,F.target))return K?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;return!0}let B=S3(F);if(!B)return K?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;g3(B,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let H=(await X(G))?.branch,D=typeof H?.chat_jid==="string"&&H.chat_jid.trim()?H.chat_jid.trim():null;if(!D)throw Error("Branch fork did not return a chat id.");let E=await mF(()=>Z?.());if(E)V?.(Array.isArray(E?.chats)?E.chats:[]);let M=await mF(()=>L?.(Y));if(M)q?.(Array.isArray(M?.chats)?M.chats:[]);let z=w1(Q,D,{chatOnly:!0});return u3(B,z),!0}catch(U){return b3(B),K?.("Could not open branch window",D4(U),"error",5000),!1}}function yy(_){_(($)=>!$)}function wy(_){let{nextChatJid:$,currentChatJid:j,chatOnlyMode:G,navigate:Y,hasWindow:X=typeof window<"u",currentHref:Z=X?window.location.href:"http://localhost/"}=_;return gF({hasWindow:X,nextChatJid:$,currentChatJid:j,chatOnlyMode:G,currentHref:Z,navigate:Y})}function Iy(_){let{currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:G,getFormLock:Y,setRenameBranchNameDraft:X,setIsRenameBranchFormOpen:Z,hasWindow:L=typeof window<"u"}=_;return wF({hasWindow:L,currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:G,getFormLock:Y,setRenameBranchNameDraft:X,setIsRenameBranchFormOpen:Z})}function xy(_){IF(_)}async function Cy(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await xF({hasWindow:$,baseHref:String(j||"").trim()||($?window.location.href:"http://localhost/"),...G})}async function Py(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await CF({hasWindow:$,baseHref:j,...G})}async function Ry(_){await PF(_)}async function fy(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await RF({baseHref:j,...G})}function Sy(_){let{branchLoaderMode:$,branchLoaderSourceChatJid:j,forkChatBranch:G,setBranchLoaderState:Y,navigate:X,hasWindow:Z=typeof window<"u",baseHref:L=Z?window.location.href:"http://localhost/",runBranchLoaderImpl:V=fF}=_;if(!$||!Z)return;let q=!1;return V({branchLoaderSourceChatJid:j,forkChatBranch:G,setBranchLoaderState:Y,navigate:X,baseHref:L,isCancelled:()=>q}),()=>{q=!0}}async function gy(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await cF({baseHref:j,...G})}async function uy(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await hF({baseHref:j,...G})}async function by(_){let{isWebAppMode:$,path:j,label:G,showIntentToast:Y,currentChatJid:X,activateTab:Z,tabStripActiveId:L,editorInstanceRef:V,dockInstanceRef:q,terminalTabPath:K,tabPaneOverrides:Q,buildPaneDetachTransfer:F,registerDetachedPaneWindow:B,dockVisible:U,resolveTab:H,closeTab:D,setDockVisible:E,hasWindow:M=typeof window<"u",baseHref:z=M?window.location.href:"http://localhost/"}=_,O=F?.(j)||null;return await lF({hasWindow:M,isWebAppMode:$,path:j,label:G,showIntentToast:Y,currentChatJid:X,baseHref:z,resolveSourceTransfer:async(x)=>{let I=await uF({panePath:x,activateTab:Z,getActiveTabId:()=>j_.getActiveId(),tabStripActiveId:L,editorInstanceRef:V,dockInstanceRef:q,terminalTabPath:K,resolveTab:H,buildEditorPopoutTransfer:(T)=>{if(!T||T===K)return null;let y=V.current,J=typeof y?.getContent==="function"?y.getContent():void 0,P=typeof y?.isDirty==="function"?y.isDirty():!1,R=Q instanceof Map?Q.get(T)||null:null,b=j_.getViewState(T)||null;return Q2({path:T,content:P?J:void 0,paneOverrideId:R,viewState:b})}}),A=x===K&&!H(x)?q.current:V.current,k=typeof A?.exportHostTransferState==="function"?A.exportHostTransferState():null,W=k?p8({path:x,payload:k}):null;if(O?.paneInstanceId&&O?.paneWindowId&&A&&x!==K&&k?.kind!=="terminal")u5({panePath:x,paneInstanceId:O.paneInstanceId,paneWindowId:O.paneWindowId,instance:A,releaseSourceHost:()=>{if(x===K){if(q.current===A)q.current=null;if(V.current===A)V.current=null;return}if(V.current===A)V.current=null}});return{...I||{},...W||{},...O?.params||{}}},onPaneWindowOpened:B?(x,I,A)=>{B(x,G,I,A)}:void 0,closeSourcePaneIfTransferred:B?void 0:(x)=>{bF({panePath:x,terminalTabPath:K,dockVisible:U,resolveTab:H,closeTab:D,setDockVisible:E})}})}function vy(_){let{openEditor:$,popOutPane:j,watchPaneOpenEventsImpl:G=AF}=_;return G({openTab:(Y,X)=>$(Y,X?{label:X}:void 0),editSource:(Y,X)=>$(Y,{...X?{label:X}:{},paneOverrideId:"editor"}),popOutPane:(Y,X)=>{j(Y,X)}})}async function my(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await pF({hasWindow:$,baseHref:j,...G})}function cy(_){let{hasWindow:$=typeof window<"u",...j}=_;vF({hasWindow:$,...j})}function rF(_){let{setWorkspaceOpen:$,currentChatJid:j,chatOnlyMode:G,navigate:Y,currentBranchRecord:X,renameBranchInFlightRef:Z,renameBranchLockUntilRef:L,getFormLock:V,setRenameBranchNameDraft:q,setIsRenameBranchFormOpen:K,setIsRenamingBranch:Q,renameChatBranch:F,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:H,currentChatBranches:D,activeChatAgents:E,pruneChatBranch:M,purgeChatBranch:z,restoreChatBranch:O,branchLoaderMode:x,branchLoaderSourceChatJid:I,forkChatBranch:A,createRootChatSession:k,setBranchLoaderState:W,currentRootChatJid:T,isWebAppMode:y,getActiveChatAgents:J,getChatBranches:P,setActiveChatAgents:R,setCurrentChatBranches:b,openEditor:c,activateTab:r,tabStripActiveId:e,editorInstanceRef:m,dockInstanceRef:_0,terminalTabPath:H0,tabPaneOverrides:Y0,buildPaneDetachTransfer:j0,registerDetachedPaneWindow:L0,dockVisible:F0,resolveTab:h,closeTab:$0,setDockVisible:V0,editorOpen:O0,shellElement:a,editorWidthRef:X0,dockHeightRef:W0,sidebarWidthRef:P0,readStoredNumber:p0}=_,u0=f(()=>{yy($)},[$]),Y_=f((z0)=>{wy({nextChatJid:z0,currentChatJid:j,chatOnlyMode:G,navigate:Y})},[G,j,Y]),l0=f(()=>{Iy({currentBranchRecord:X,renameBranchInFlight:Z.current,renameBranchLockUntil:L.current,getFormLock:V,setRenameBranchNameDraft:q,setIsRenameBranchFormOpen:K})},[X,V,Z,L,K,q]),a0=f(()=>{xy({setIsRenameBranchFormOpen:K,setRenameBranchNameDraft:q})},[K,q]),R0=f(async(z0)=>{await Cy({currentBranchRecord:X,nextName:z0,openRenameForm:l0,renameBranchInFlightRef:Z,renameBranchLockUntilRef:L,getFormLock:V,setIsRenamingBranch:Q,renameChatBranch:F,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,navigate:Y,chatOnlyMode:G,showIntentToast:H,closeRenameForm:a0})},[a0,X,G,V,Y,l0,B,U,Z,L,F,Q,H]),i0=f(async(z0=null)=>{await Py({targetChatJid:z0,currentChatJid:j,currentBranchRecord:X,currentChatBranches:D,activeChatAgents:E,pruneChatBranch:M,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:H,chatOnlyMode:G,navigate:Y})},[E,G,X,D,j,Y,M,B,U,H]),m0=f(async(z0)=>{await Ry({targetChatJid:z0,purgeChatBranch:z,currentChatBranches:D,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:H})},[D,z,B,U,H]),e0=f(async(z0)=>{await fy({targetChatJid:z0,restoreChatBranch:O,currentChatBranches:D,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:H,chatOnlyMode:G,navigate:Y})},[G,D,Y,B,U,O,H]);g(()=>Sy({branchLoaderMode:x,branchLoaderSourceChatJid:I,forkChatBranch:A,setBranchLoaderState:W,navigate:Y}),[x,I,A,Y,W]);let s0=f(async()=>{await gy({currentChatJid:j,chatOnlyMode:G,forkChatBranch:A,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:H,navigate:Y})},[G,j,A,Y,B,U,H]),U_=f(async(z0)=>{await uy({rootName:z0,chatOnlyMode:G,createRootChatSession:k,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:H,navigate:Y})},[G,k,Y,B,U,H]),X_=f(async(z0,L_)=>{return await by({isWebAppMode:y,path:z0,label:L_,showIntentToast:H,currentChatJid:j,activateTab:r,tabStripActiveId:e,editorInstanceRef:m,dockInstanceRef:_0,terminalTabPath:H0,tabPaneOverrides:Y0,buildPaneDetachTransfer:j0,registerDetachedPaneWindow:L0,dockVisible:F0,resolveTab:h,closeTab:$0,setDockVisible:V0})},[r,j0,$0,j,_0,F0,m,y,L0,h,V0,H,Y0,e,H0]);g(()=>vy({openEditor:c,popOutPane:(z0,L_)=>{X_(z0,L_)}}),[X_,c]);let c0=f(async()=>{await my({isWebAppMode:y,currentChatJid:j,currentRootChatJid:T,forkChatBranch:A,getActiveChatAgents:J,getChatBranches:P,setActiveChatAgents:R,setCurrentChatBranches:b,showIntentToast:H})},[j,T,A,J,P,y,R,b,H]);return g(()=>{cy({editorOpen:O0,shellElement:a,editorWidthRef:X0,dockHeightRef:W0,sidebarWidthRef:P0,readStoredNumber:p0})},[W0,O0,X0,p0,a,P0]),{toggleWorkspace:u0,handleBranchPickerChange:Y_,openRenameCurrentBranchForm:l0,closeRenameCurrentBranchForm:a0,handleRenameCurrentBranch:R0,handlePruneCurrentBranch:i0,handlePurgeArchivedBranch:m0,handleRestoreBranch:e0,handleCreateSessionFromCompose:s0,handleCreateRootSessionFromCompose:U_,handlePopOutPane:X_,handlePopOutChat:c0}}k0();function X4(_){return _.status==="fulfilled"?_.value:null}function r8(_){return Math.max(0,Math.min(100,_))}function nF(_){let $=Array.isArray(_.timelinePayload?.posts)?_.timelinePayload.posts:Array.isArray(_.rawPosts)?_.rawPosts:[],j=$.length?$[$.length-1]:null,G=$.filter((D)=>D?.data?.is_bot_message).length,Y=$.filter((D)=>!D?.data?.is_bot_message).length,X=Number(_.queuePayload?.count??_.followupQueueItems?.length??0)||0,Z=Array.isArray(_.activeChatsPayload?.chats)?_.activeChatsPayload.chats.length:Array.isArray(_.activeChatAgents)?_.activeChatAgents.length:0,L=Array.isArray(_.branchesPayload?.chats)?_.branchesPayload.chats.length:Array.isArray(_.currentChatBranches)?_.currentChatBranches.length:0,V=Number(_.contextPayload?.percent??_.contextUsage?.percent??0)||0,q=Number(_.contextPayload?.tokens??_.contextUsage?.tokens??0)||0,K=Number(_.contextPayload?.contextWindow??_.contextUsage?.contextWindow??0)||0,Q=_.modelsPayload?.current??_.activeModel??null,F=_.modelsPayload?.thinking_level??_.activeThinkingLevel??null,B=_.modelsPayload?.supports_thinking??_.supportsThinking,U=_.statusPayload?.status||(_.isAgentTurnActive?"active":"idle"),H=_.statusPayload?.data?.type||_.statusPayload?.type||null;return{generatedAt:_.generatedAt,request:_.request,chat:{currentChatJid:_.currentChatJid,rootChatJid:_.currentRootChatJid,activeChats:Z,branches:L},agent:{status:U,phase:H,running:Boolean(_.isAgentTurnActive)},model:{current:Q,thinkingLevel:F,supportsThinking:Boolean(B)},context:{tokens:q,contextWindow:K,percent:V},queue:{count:X},timeline:{loadedPosts:$.length,botPosts:G,userPosts:Y,latestPostId:j?.id??null,latestTimestamp:j?.timestamp??null},bars:[{key:"context",label:"Context",value:r8(Math.round(V))},{key:"queue",label:"Queue",value:r8(X*18)},{key:"activeChats",label:"Active chats",value:r8(Z*12)},{key:"posts",label:"Timeline load",value:r8($.length*5)}]}}function dF(_){if(_==="followup")return{title:"Widget submission queued",detail:"The widget message was queued because the agent is busy.",kind:"info",durationMs:3500};return{title:"Widget submission sent",detail:"The widget message was sent to the chat.",kind:"info",durationMs:3500}}function oF(_){return{title:"Widget submission failed",detail:_||"Could not send the widget message.",kind:"warning",durationMs:5000}}function iF(_,$){return{shouldBuildDashboard:_?.buildDashboard!==!1,nextRefreshCount:Number($||0)+1}}function sF(){return{title:"Dashboard built",detail:"Live dashboard state pushed into the widget.",kind:"info",durationMs:3000}}function aF(_){return{title:"Dashboard build failed",detail:_||"Could not build dashboard.",kind:"warning",durationMs:5000}}function tF(){return{title:"Widget refresh requested",detail:"The widget received a host acknowledgement update.",kind:"info",durationMs:3000}}async function eF(_){let{requestPayload:$=null,currentChatJid:j,currentRootChatJid:G,getAgentStatus:Y,getAgentContext:X,getAgentQueueState:Z,getAgentModels:L,getActiveChatAgents:V,getChatBranches:q,getTimeline:K,rawPosts:Q,activeChatAgents:F,currentChatBranches:B,contextUsage:U,followupQueueItems:H,activeModel:D,activeThinkingLevel:E,supportsThinking:M,isAgentTurnActive:z}=_,[O,x,I,A,k,W,T]=await Promise.allSettled([Y(j),X(j),Z(j),L(j),V(),q(G),K(20,null,j)]);return nF({generatedAt:new Date().toISOString(),request:$,currentChatJid:j,currentRootChatJid:G,statusPayload:X4(O),contextPayload:X4(x),queuePayload:X4(I),modelsPayload:X4(A),activeChatsPayload:X4(k),branchesPayload:X4(W),timelinePayload:X4(T),rawPosts:Q,activeChatAgents:F,currentChatBranches:B,contextUsage:U,followupQueueItems:H,activeModel:D,activeThinkingLevel:E,supportsThinking:M,isAgentTurnActive:z})}function _N(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:Y,refreshQueueState:X,setFollowupQueueItems:Z,showIntentToast:L,steerAgentQueueItem:V}=_,q=g5(j.current,$);if(!q)return;let{rowId:K}=q;G.current.add(K),Z((Q)=>G4(Q,K).items),V(K,xj(Y)).then(()=>{X()}).catch((Q)=>{console.warn("[queue] Failed to steer queued item:",Q);let F=hj("steer");L(F.title,F.detail,"warning"),G.current.delete(K),X()})}function $N(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:Y,refreshQueueState:X,setFollowupQueueItems:Z,showIntentToast:L,clearQueuedSteerStateIfStale:V,removeAgentQueueItem:q}=_,K=g5(j.current,$);if(!K)return;let{rowId:Q}=K;G.current.add(Q),V?.(K.remainingQueueCount),Z((F)=>G4(F,Q).items),q(Q,xj(Y)).then(()=>{X()}).catch((F)=>{console.warn("[queue] Failed to remove queued item:",F);let B=hj("remove");L(B.title,B.detail,"warning"),G.current.delete(Q),X()})}function jN(_){let{widget:$,dismissedLiveWidgetKeysRef:j,setFloatingWidget:G}=_;if(!$||typeof $!=="object")return;let Y=N1($);if(Y)j.current.delete(Y);G(nB($,new Date().toISOString()))}function GN(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;j((G)=>{let Y=dB(G);if(Y.dismissedSessionKey)$.current.add(Y.dismissedSessionKey);return Y.nextWidget})}function YN(_){let{event:$,widget:j,currentChatJid:G,isComposeBoxAgentActive:Y,setFloatingWidget:X,handleCloseFloatingWidget:Z,handleMessageResponse:L,showIntentToast:V,sendAgentMessage:q,buildFloatingWidgetDashboardSnapshot:K}=_,Q=typeof $?.kind==="string"?$.kind:"",F=N1(j);if(!Q||!F)return;if(Q==="widget.close"){Z();return}if(Q==="widget.submit"){let B=cq($?.payload),U=hq($?.payload),H=new Date().toISOString();if(X((D)=>sB(D,F,{kind:Q,payload:$?.payload||null,submittedAt:H,submissionText:B})),!B){if(V("Widget submission received","The widget submitted data without a message payload yet.","info",3500),U)Z();return}(async()=>{try{let D=await q("default",B,null,[],Y?"queue":null,G);L(D),X((M)=>cj(M,F,{submittedAt:H,submissionText:B,queued:D?.queued||null}));let E=dF(D?.queued);if(V(E.title,E.detail,E.kind,E.durationMs),U)Z()}catch(D){X((M)=>cj(M,F,{submittedAt:H,submissionText:B,errorMessage:D?.message||"Could not send the widget message."}));let E=oF(D?.message);V(E.title,E.detail,E.kind,E.durationMs)}})();return}if(Q==="widget.ready"||Q==="widget.request_refresh"){let B=new Date().toISOString(),U=iF($?.payload||null,j?.runtimeState?.refreshCount);if(X((H)=>aB(H,F,{kind:Q,payload:$?.payload||null,eventAt:B,nextRefreshCount:U.nextRefreshCount,shouldBuildDashboard:U.shouldBuildDashboard})),Q==="widget.request_refresh")if(U.shouldBuildDashboard)(async()=>{try{let H=await K($?.payload||null);X((E)=>tB(E,F,{dashboard:H,at:new Date().toISOString(),count:U.nextRefreshCount,echo:$?.payload||null}));let D=sF();V(D.title,D.detail,D.kind,D.durationMs)}catch(H){X((E)=>eB(E,F,{errorMessage:H?.message||"Could not build dashboard.",at:new Date().toISOString(),count:U.nextRefreshCount}));let D=aF(H?.message);V(D.title,D.detail,D.kind,D.durationMs)}})();else{let H=tF();V(H.title,H.detail,H.kind,H.durationMs)}}}function hy(_,$=_N){$(_)}function ly(_,$=$N){$(_)}function py(_,$,j=hB){j({response:_,refreshActiveChatAgents:$.refreshActiveChatAgents,refreshCurrentChatBranches:$.refreshCurrentChatBranches,refreshContextUsage:$.refreshContextUsage,refreshAutoresearchStatus:$.refreshAutoresearchStatus,refreshQueueState:$.refreshQueueState})}function XN(_){let{currentChatJid:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,refreshQueueState:Y,setFollowupQueueItems:X,showIntentToast:Z,clearQueuedSteerStateIfStale:L,steerAgentQueueItem:V,removeAgentQueueItem:q,refreshActiveChatAgents:K,refreshCurrentChatBranches:Q,refreshContextUsage:F,refreshAutoresearchStatus:B}=_,U=f((M)=>{hy({queuedItem:M,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:$,refreshQueueState:Y,setFollowupQueueItems:X,showIntentToast:Z,steerAgentQueueItem:V,removeAgentQueueItem:q})},[$,G,j,Y,q,X,Z,V]),H=f((M)=>{ly({queuedItem:M,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:$,refreshQueueState:Y,setFollowupQueueItems:X,showIntentToast:Z,clearQueuedSteerStateIfStale:L,steerAgentQueueItem:V,removeAgentQueueItem:q})},[L,$,G,j,Y,q,X,Z,V]),D=f(async(M,z)=>{X((O)=>{if(!Array.isArray(O)||M<0||z<0||M>=O.length||z>=O.length||M===z)return O;let x=[...O],[I]=x.splice(M,1);return x.splice(z,0,I),x});try{let{reorderAgentQueueItem:O}=await Promise.resolve().then(() => (T_(),E6));await O(M,z,$)}catch(O){console.warn("Failed to persist queue reorder:",O),Y()}},[$,Y,X]),E=f((M)=>{py(M,{refreshActiveChatAgents:K,refreshCurrentChatBranches:Q,refreshContextUsage:F,refreshAutoresearchStatus:B,refreshQueueState:Y})},[K,B,F,Q,Y]);return{handleInjectQueuedFollowup:U,handleRemoveQueuedFollowup:H,handleMoveQueuedFollowup:D,handleMessageResponse:E}}k0();function ZN(_){let{btwAbortRef:$,setBtwSession:j}=_;if($.current)$.current.abort(),$.current=null;j(null)}async function LN(_){let{question:$,currentChatJid:j,streamSidePrompt:G,resolveBtwChatJid:Y,showIntentToast:X,btwAbortRef:Z,setBtwSession:L}=_,V=String($||"").trim();if(!V)return X("BTW needs a question","Usage: /btw <question>","warning"),!0;if(Z.current)Z.current.abort();let q=new AbortController;Z.current=q,L({question:V,answer:"",thinking:"",error:null,model:null,status:"running"});try{let K=await G(V,{signal:q.signal,chatJid:Y(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(Q)=>{if(Q==="side_prompt_start")L((F)=>F?{...F,status:"running"}:F)},onThinkingDelta:(Q)=>{L((F)=>F?{...F,thinking:`${F.thinking||""}${Q||""}`}:F)},onTextDelta:(Q)=>{L((F)=>F?{...F,answer:`${F.answer||""}${Q||""}`}:F)}});if(Z.current!==q)return!0;L((Q)=>Q?{...Q,answer:K?.result||Q.answer||"",thinking:K?.thinking||Q.thinking||"",model:K?.model||null,status:"success",error:null}:Q)}catch(K){if(q.signal.aborted)return!0;L((Q)=>Q?{...Q,status:"error",error:K?.payload?.error||K?.message||"BTW request failed."}:Q)}finally{if(Z.current===q)Z.current=null}return!0}async function qN(_){let{content:$,parseBtwCommand:j,closeBtwPanel:G,runBtwPrompt:Y,showIntentToast:X}=_,Z=j($);if(!Z)return!1;if(Z.type==="help")return X("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(Z.type==="clear")return G(),X("BTW cleared","Closed the side conversation panel.","info"),!0;if(Z.type==="ask")return await Y(Z.question),!0;return!1}async function VN(_){let{btwSession:$,buildBtwInjectionText:j,isComposeBoxAgentActive:G,currentChatJid:Y,sendAgentMessage:X,handleMessageResponse:Z,showIntentToast:L}=_,V=j($);if(!V)return!1;try{let q=await X("default",V,null,[],G?"queue":null,Y);return Z(q),L(q?.queued==="followup"?"BTW queued":"BTW injected",q?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500),!0}catch(q){return L("BTW inject failed",q?.message||"Could not inject BTW answer into chat.","warning"),!1}}async function ry(_){let $=typeof _==="string"?_:"";if(!$)return!1;let j=null;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch(G){j=G}try{let G=document.createElement("textarea");G.value=$,G.setAttribute("readonly",""),G.style.position="fixed",G.style.opacity="0",G.style.pointerEvents="none",document.body.appendChild(G),G.select(),G.setSelectionRange(0,G.value.length);let Y=document.execCommand("copy");return document.body.removeChild(G),Y}catch(G){return console.debug("[sidepanel] Clipboard copy failed after falling back from navigator.clipboard.",G,{clipboardApiAvailable:Boolean(navigator.clipboard?.writeText),clipboardApiError:j}),!1}}function ny(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;$.current.clear(),j(null)}function QN(_){let{currentChatJid:$,currentRootChatJid:j,isComposeBoxAgentActive:G,showIntentToast:Y,setPendingExtensionPanelActions:X,refreshAutoresearchStatus:Z,stopAutoresearch:L,dismissAutoresearch:V,streamSidePrompt:q,btwAbortRef:K,btwSession:Q,setBtwSession:F,sendAgentMessage:B,handleMessageResponse:U,dismissedLiveWidgetKeysRef:H,setFloatingWidget:D,getAgentStatus:E,getAgentContext:M,getAgentQueueState:z,getAgentModels:O,getActiveChatAgents:x,getChatBranches:I,getTimeline:A,rawPosts:k,activeChatAgents:W,currentChatBranches:T,contextUsage:y,followupQueueItemsRef:J,activeModel:P,activeThinkingLevel:R,supportsThinking:b,isAgentTurnActive:c}=_,r=f(async($0,V0)=>{let O0=typeof $0?.key==="string"?$0.key:"",a=typeof V0?.key==="string"?V0.key:"",X0=bj(O0,a);if(!O0||!a)return;X((W0)=>QB(W0,O0,a));try{let W0=await BB({panel:$0,action:V0,currentChatJid:$,stopAutoresearch:L,dismissAutoresearch:V,writeClipboard:async(P0)=>{if(!await ry(P0))throw Error("Clipboard access is unavailable.")}});if(W0.refreshAutoresearchStatus)Z();if(W0.toast)Y(W0.toast.title,W0.toast.detail,W0.toast.kind,W0.toast.durationMs)}catch(W0){Y("Panel action failed",W0?.message||"Could not complete that action.","warning")}finally{X((W0)=>KB(W0,X0))}},[$,V,Z,X,Y,L]),e=f(()=>{ZN({btwAbortRef:K,setBtwSession:F})},[K,F]),m=f(async($0)=>{return await LN({question:$0,currentChatJid:$,streamSidePrompt:q,resolveBtwChatJid:Iq,showIntentToast:Y,btwAbortRef:K,setBtwSession:F})},[K,$,F,Y,q]),_0=f(async({content:$0})=>{return await qN({content:$0,parseBtwCommand:wq,closeBtwPanel:e,runBtwPrompt:m,showIntentToast:Y})},[e,m,Y]),H0=f(()=>{if(Q?.question)m(Q.question)},[Q,m]),Y0=f(async()=>{await VN({btwSession:Q,buildBtwInjectionText:Pq,isComposeBoxAgentActive:G,currentChatJid:$,sendAgentMessage:B,handleMessageResponse:U,showIntentToast:Y})},[Q,$,U,G,B,Y]),j0=f(async($0=null)=>{return eF({requestPayload:$0,currentChatJid:$,currentRootChatJid:j,getAgentStatus:E,getAgentContext:M,getAgentQueueState:z,getAgentModels:O,getActiveChatAgents:x,getChatBranches:I,getTimeline:A,rawPosts:k,activeChatAgents:W,currentChatBranches:T,contextUsage:y,followupQueueItems:J.current,activeModel:P,activeThinkingLevel:R,supportsThinking:b,isAgentTurnActive:c})},[W,P,R,y,T,$,j,J,x,M,O,z,E,I,A,c,k,b]),L0=f(($0)=>{jN({widget:$0,dismissedLiveWidgetKeysRef:H,setFloatingWidget:D})},[H,D]),F0=f(()=>{GN({dismissedLiveWidgetKeysRef:H,setFloatingWidget:D})},[H,D]),h=f(($0,V0)=>{YN({event:$0,widget:V0,currentChatJid:$,isComposeBoxAgentActive:G,setFloatingWidget:D,handleCloseFloatingWidget:F0,handleMessageResponse:U,showIntentToast:Y,sendAgentMessage:B,buildFloatingWidgetDashboardSnapshot:j0})},[j0,$,F0,U,G,B,D,Y]);return g(()=>{ny({dismissedLiveWidgetKeysRef:H,setFloatingWidget:D})},[$,H,D]),{handleExtensionPanelAction:r,closeBtwPanel:e,handleBtwIntercept:_0,handleBtwRetry:H0,handleBtwInject:Y0,handleOpenFloatingWidget:L0,handleCloseFloatingWidget:F0,handleFloatingWidgetEvent:h}}k0();function dy(_){let{hasDockPanes:$,chatOnlyMode:j}=_;return Boolean($&&!j)}function oy(_){return!_}function KN(_){let{hasDockPanes:$,chatOnlyMode:j,toggleDock:G,toggleZenMode:Y,exitZenMode:X,zenMode:Z,previousChat:L,nextChat:V}=_;g(()=>{if(!dy({hasDockPanes:$,chatOnlyMode:j}))return;return JF(G)},[j,$,G]),g(()=>{if(!oy(j))return;return kF({toggleZenMode:Y,exitZenMode:X,zenMode:Z,isZenModeActive:()=>Z})},[j,X,Y,Z]),g(()=>{if(typeof L!=="function"&&typeof V!=="function")return;return MF({previousChat:L,nextChat:V})},[V,L]),g(()=>yF(),[]),g(()=>TF(),[])}function iy(_){return Boolean(_&&typeof _.closest==="function")}function BN(_=typeof window<"u"?window:null){if(!_||typeof _.getSelection!=="function")return!1;try{let $=_.getSelection();if(!$||$.isCollapsed)return!1;return String($.toString()||"").trim().length>0}catch{return!1}}function sy(){return{active:!1,horizontalLocked:!1,cancelled:!1,startX:0,startY:0,lastX:0,lastY:0,startedAt:0}}function ay(){return{lastTriggeredAt:0,accumX:0}}function rj(_){if(!_)return;_.active=!1,_.horizontalLocked=!1,_.cancelled=!1,_.startX=0,_.startY=0,_.lastX=0,_.lastY=0,_.startedAt=0}var ty=["input","textarea","select","button","label","a[href]",'[contenteditable="true"]','[role="button"]',"[data-no-chat-swipe]",".compose-box",".compose-model-popup",".compose-session-popup",".workspace-explorer",".editor-pane-container",".dock-panel",".terminal-pane-content",".attachment-preview-modal",".rename-branch-overlay",".agent-request-modal",".adaptive-card-container",".adaptive-card-container input",".adaptive-card-container textarea",".adaptive-card-container select",".adaptive-card-container button"].join(", "),ey=[".agent-thinking",".agent-status-panel",".agent-thinking-intent"].join(", ");function FN(_){if(!_||!iy(_))return!1;let $=_.closest(ty);if(!$)return!0;return Boolean($.closest(ey))}function UN(_,$){if(!Array.isArray(_))return $?[$]:[];let j=new Set,G=_.filter((X)=>Boolean(X&&typeof X==="object")).filter((X)=>{let Z=typeof X.chat_jid==="string"?X.chat_jid.trim():"";if(!Z||j.has(Z))return!1;if(X.archived_at)return!1;return j.add(Z),!0});G.sort((X,Z)=>{if(Boolean(X.is_active)!==Boolean(Z.is_active))return X.is_active?-1:1;return String(X.chat_jid).localeCompare(String(Z.chat_jid))});let Y=G.map((X)=>String(X.chat_jid).trim());if($&&!j.has($))Y.unshift($);return Y}function nj(_){let $=UN(_.candidates,_.currentChatJid);if($.length<=1)return null;let j=$.indexOf(_.currentChatJid);if(j<0)return $[0]??null;let G=_.direction==="next"?(j+1)%$.length:(j-1+$.length)%$.length;return $[G]??null}function NN(_,$){let j=_.find((Y)=>Y.chat_jid===$);if(!j)return $.replace(/^[^:]+:/,"");return(typeof j.agent_name==="string"?j.agent_name.trim():"")||$.replace(/^[^:]+:/,"")}function _w(_){let $=UN(_.candidates,_.currentChatJid);if($.length<=1)return{prev:null,next:null};let j=$.indexOf(_.currentChatJid);if(j<0)return{prev:null,next:null};let G=$[(j-1+$.length)%$.length],Y=$[(j+1)%$.length];return{prev:{chatJid:G,name:NN(_.candidates,G)},next:{chatJid:Y,name:NN(_.candidates,Y)}}}function $w(_){let $=Number.isFinite(_.minDistancePx)?Number(_.minDistancePx):72,j=Number.isFinite(_.axisRatio)?Number(_.axisRatio):1.35;return Math.abs(_.dx)>=$&&Math.abs(_.dx)>Math.abs(_.dy)*j}function jw(_){let $=document.querySelector(".chat-swipe-indicator");if(!$)$=document.createElement("div"),$.className="chat-swipe-indicator",$.innerHTML='<span class="chat-swipe-chevron"></span><span class="chat-swipe-name"></span>',document.body.appendChild($);return $}function Gw(_,$,j,G){let Y=Math.abs($),X=Math.min(Y/100,1),Z=Y>=72;_.style.display="flex",_.style.opacity=String(Math.min(X*2.5,1)),_.classList.toggle("chat-swipe-indicator--ready",Z);let L=$<0,V=L?G.next:G.prev,q=_.querySelector(".chat-swipe-chevron");if(q)q.textContent=L?"›":"‹",q.style.order=L?"2":"0";let K=_.querySelector(".chat-swipe-name");if(K)K.textContent=V?.name??""}function m6(_){_.style.display="none",_.style.opacity="0"}function EN(_){let{timelineRef:$,activeChatAgents:j,currentChatJid:G,onSwitch:Y,isIOSDevice:X,isLikelySafari:Z}=_,L=$.current;if(!L)return()=>{};let V=X(),q=typeof Z==="function"?Z():!1;if(!V&&!q)return()=>{};let K=sy(),Q=ay(),F=null,B={prev:null,next:null},U=!1;function H(){B=_w({candidates:j,currentChatJid:G})}H();function D(){if(!F)F=jw(L);return F}function E(k){let W=k==="next"?B.next:B.prev;if(W)Y(W.chatJid)}function M(k){U=String(k.pointerType||"").toLowerCase()==="pen"}function z(k){if(rj(K),H(),!V)return;if(k.touches.length!==1)return;if(U)return;if(BN())return;if(!FN(k.target))return;let W=k.touches[0];K.active=!0,K.startX=W.clientX,K.startY=W.clientY,K.lastX=W.clientX,K.lastY=W.clientY,K.startedAt=Date.now()}function O(k){if(!K.active||K.cancelled)return;if(BN()){K.cancelled=!0,m6(D());return}let W=k.touches[0];if(!W)return;K.lastX=W.clientX,K.lastY=W.clientY;let T=K.lastX-K.startX,y=K.lastY-K.startY;if(!K.horizontalLocked){if(Math.abs(y)>16&&Math.abs(y)>=Math.abs(T)){K.cancelled=!0,m6(D());return}if(Math.abs(T)>12&&Math.abs(T)>Math.abs(y)*1.15)K.horizontalLocked=!0}if(K.horizontalLocked){if(k.cancelable)k.preventDefault();Gw(D(),T,L.clientWidth,B)}}function x(){if(!K.active)return;let k=K.lastX-K.startX,W=K.lastY-K.startY,T=!K.cancelled&&$w({dx:k,dy:W});if(m6(D()),rj(K),T)E(k<0?"next":"prev")}function I(){m6(D()),rj(K)}function A(k){if(V)return;if(!q)return;if(!FN(k.target))return;let{deltaX:W,deltaY:T}=k;if(!Number.isFinite(W)||Math.abs(W)<72)return;if(Math.abs(W)<=Math.abs(T)*1.35)return;if(k.cancelable)k.preventDefault();let y=Date.now();if(y-Q.lastTriggeredAt<450)return;Q.lastTriggeredAt=y,E(W>0?"next":"prev")}return L.addEventListener("pointerdown",M,{passive:!0}),L.addEventListener("touchstart",z,{passive:!0}),L.addEventListener("touchmove",O,{passive:!1}),L.addEventListener("touchend",x,{passive:!0}),L.addEventListener("touchcancel",I,{passive:!0}),L.addEventListener("wheel",A,{passive:!1}),()=>{if(L.removeEventListener("pointerdown",M),L.removeEventListener("touchstart",z),L.removeEventListener("touchmove",O),L.removeEventListener("touchend",x),L.removeEventListener("touchcancel",I),L.removeEventListener("wheel",A),F)m6(F),F.remove(),F=null}}function Yw(_){return{currentChatJid:_.currentChatJid,followupQueueItemsRef:_.followupQueueItemsRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,refreshQueueState:_.refreshQueueState,setFollowupQueueItems:_.setFollowupQueueItems,showIntentToast:_.showIntentToast,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,steerAgentQueueItem:_.steerAgentQueueItem,removeAgentQueueItem:_.removeAgentQueueItem,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,refreshContextUsage:_.refreshContextUsage,refreshAutoresearchStatus:_.refreshAutoresearchStatus}}function Xw(_){return{currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,isComposeBoxAgentActive:_.isComposeBoxAgentActive,showIntentToast:_.showIntentToast,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,refreshAutoresearchStatus:_.refreshAutoresearchStatus,stopAutoresearch:_.stopAutoresearch,dismissAutoresearch:_.dismissAutoresearch,streamSidePrompt:_.streamSidePrompt,btwAbortRef:_.btwAbortRef,btwSession:_.btwSession,setBtwSession:_.setBtwSession,sendAgentMessage:_.sendAgentMessage,handleMessageResponse:_.handleMessageResponse,dismissedLiveWidgetKeysRef:_.dismissedLiveWidgetKeysRef,setFloatingWidget:_.setFloatingWidget,getAgentStatus:_.getAgentStatus,getAgentContext:_.getAgentContext,getAgentQueueState:_.getAgentQueueState,getAgentModels:_.getAgentModels,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,getTimeline:_.getTimeline,rawPosts:_.rawPosts,activeChatAgents:_.activeChatAgents,currentChatBranches:_.currentChatBranches,contextUsage:_.contextUsage,followupQueueItemsRef:_.followupQueueItemsRef,activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:_.supportsThinking,isAgentTurnActive:_.isAgentTurnActive}}function Zw(_){return{setWorkspaceOpen:_.setWorkspaceOpen,currentChatJid:_.currentChatJid,chatOnlyMode:_.chatOnlyMode,navigate:_.navigate,currentBranchRecord:_.currentBranchRecord,renameBranchInFlightRef:_.renameBranchInFlightRef,renameBranchLockUntilRef:_.renameBranchLockUntilRef,getFormLock:_.getFormLock,setRenameBranchNameDraft:_.setRenameBranchNameDraft,setIsRenameBranchFormOpen:_.setIsRenameBranchFormOpen,setIsRenamingBranch:_.setIsRenamingBranch,renameChatBranch:_.renameChatBranch,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,showIntentToast:_.showIntentToast,currentChatBranches:_.currentChatBranches,activeChatAgents:_.activeChatAgents,pruneChatBranch:_.pruneChatBranch,purgeChatBranch:_.purgeChatBranch,restoreChatBranch:_.restoreChatBranch,branchLoaderMode:_.branchLoaderMode,branchLoaderSourceChatJid:_.branchLoaderSourceChatJid,forkChatBranch:_.forkChatBranch,createRootChatSession:_.createRootChatSession,setBranchLoaderState:_.setBranchLoaderState,currentRootChatJid:_.currentRootChatJid,isWebAppMode:_.isWebAppMode,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,setActiveChatAgents:_.setActiveChatAgents,setCurrentChatBranches:_.setCurrentChatBranches,openEditor:_.openEditor,activateTab:_.activateTab,tabStripActiveId:_.tabStripActiveId,editorInstanceRef:_.editorInstanceRef,dockInstanceRef:_.dockInstanceRef,terminalTabPath:_.terminalTabPath,tabPaneOverrides:_.tabPaneOverrides,buildPaneDetachTransfer:_.buildPaneDetachTransfer,registerDetachedPaneWindow:_.registerDetachedPaneWindow,dockVisible:_.dockVisible,resolveTab:_.resolveTab,closeTab:_.closeTab,setDockVisible:_.setDockVisible,editorOpen:_.editorOpen,shellElement:_.shellElement,editorWidthRef:_.editorWidthRef,dockHeightRef:_.dockHeightRef,sidebarWidthRef:_.sidebarWidthRef,readStoredNumber:_.readStoredNumber}}function Lw(_){return{hasDockPanes:_.hasDockPanes,chatOnlyMode:_.chatOnlyMode,toggleDock:_.toggleDock,toggleZenMode:_.toggleZenMode,exitZenMode:_.exitZenMode,zenMode:_.zenMode,previousChat:()=>{let $=nj({candidates:_.activeChatAgents,currentChatJid:_.currentChatJid,direction:"prev"});if($)_.handleBranchPickerChange?.($)},nextChat:()=>{let $=nj({candidates:_.activeChatAgents,currentChatJid:_.currentChatJid,direction:"next"});if($)_.handleBranchPickerChange?.($)}}}function DN(_){let $=XN(Yw(_)),j=QN(Xw({..._,handleMessageResponse:$.handleMessageResponse})),G=rF(Zw(_));return KN(Lw({..._,handleBranchPickerChange:G.handleBranchPickerChange})),{followupActions:$,sidepanelActions:j,branchPaneActions:G}}function qw(_,$){return Boolean(_||$!==null)}function Vw(_){return{..._.agentStatusLifecycleBundle,..._.actionBundle,timelineViewActions:_.timelineViewActions,isComposeBoxAgentActive:_.isComposeBoxAgentActive}}function Qw(_,$){let{routeState:j,searchState:G,shellState:Y,timeline:X,interaction:Z,paneRuntime:L,refs:V,setters:q,services:K,helpers:Q}=_;return{currentChatJid:j.currentChatJid,activeChatJidRef:V.activeChatJidRef,queueRefreshGenRef:V.queueRefreshGenRef,dismissedQueueRowIdsRef:V.dismissedQueueRowIdsRef,getAgentQueueState:K.getAgentQueueState,setFollowupQueueItems:q.setFollowupQueueItems,clearQueuedSteerStateIfStale:Z.clearQueuedSteerStateIfStale,getAgentContext:K.getAgentContext,setContextUsage:q.setContextUsage,getAutoresearchStatus:K.getAutoresearchStatus,setExtensionStatusPanels:q.setExtensionStatusPanels,setPendingExtensionPanelActions:q.setPendingExtensionPanelActions,setExtensionWorkingState:q.setExtensionWorkingState,getAgentStatus:K.getAgentStatus,wasAgentActiveRef:V.wasAgentActiveRef,viewStateRef:V.viewStateRef,refreshTimeline:X.refreshTimeline,clearAgentRunState:Z.clearAgentRunState,agentStatusRef:V.agentStatusRef,pendingRequestRef:V.pendingRequestRef,thoughtBufferRef:V.thoughtBufferRef,draftBufferRef:V.draftBufferRef,previewResyncPendingRef:V.previewResyncPendingRef,previewResyncGenerationRef:V.previewResyncGenerationRef,setAgentStatus:q.setAgentStatus,setAgentDraft:q.setAgentDraft,setAgentPlan:q.setAgentPlan,setAgentThought:q.setAgentThought,setPendingRequest:q.setPendingRequest,setActiveTurn:Z.setActiveTurn,noteAgentActivity:Z.noteAgentActivity,showLastActivity:Z.showLastActivity,clearLastActivityFlag:Z.clearLastActivityFlag,isAgentRunningRef:V.isAgentRunningRef,currentTurnIdRef:V.currentTurnIdRef,silentRecoveryRef:V.silentRecoveryRef,silenceRefreshMs:K.silenceRefreshMs,lastAgentEventRef:V.lastAgentEventRef,lastSilenceNoticeRef:V.lastSilenceNoticeRef,silenceWarningMs:K.silenceWarningMs,silenceFinalizeMs:K.silenceFinalizeMs,isCompactionStatus:K.isCompactionStatus,serverVersionContext:{currentAppAssetVersion:K.currentAppAssetVersion,staleUiVersionRef:V.staleUiVersionRef,staleUiReloadScheduledRef:V.staleUiReloadScheduledRef,tabStoreHasUnsaved:K.tabStoreHasUnsaved,isAgentRunningRef:V.isAgentRunningRef,pendingRequestRef:V.pendingRequestRef,showIntentToast:$},setConnectionStatus:q.setConnectionStatus,setStateAccessFailed:q.setStateAccessFailed,hasConnectedOnceRef:V.hasConnectedOnceRef,getAgents:K.getAgents,setAgents:q.setAgents,setUserProfile:q.setUserProfile,applyBranding:Z.applyBranding,readStoredNumber:Q.readStoredNumber,sidebarWidthRef:V.sidebarWidthRef,appShellRef:V.appShellRef,currentRootChatJid:j.currentRootChatJid,getAgentModels:K.getAgentModels,getActiveChatAgents:K.getActiveChatAgents,getChatBranches:K.getChatBranches,setActiveChatAgents:q.setActiveChatAgents,setCurrentChatBranches:q.setCurrentChatBranches,setActiveModel:q.setActiveModel,setActiveThinkingLevel:q.setActiveThinkingLevel,setSupportsThinking:q.setSupportsThinking,setActiveModelUsage:q.setActiveModelUsage,setAgentModelsPayload:q.setAgentModelsPayload,setHasLoadedAgentModels:q.setHasLoadedAgentModels,agentsRef:V.agentsRef,currentHashtag:G.currentHashtag,searchQuery:G.searchQuery,searchScope:G.searchScope,loadPosts:X.loadPosts,searchPosts:K.searchPosts,setPosts:X.setPosts,setHasMore:X.setHasMore,scrollToBottom:X.scrollToBottom,paneStateOwnerChatJidRef:V.paneStateOwnerChatJidRef,chatPaneStateByChatRef:V.chatPaneStateByChatRef,snapshotCurrentChatPaneState:Z.snapshotCurrentChatPaneState,restoreChatPaneState:Z.restoreChatPaneState,setFloatingWidget:q.setFloatingWidget,dismissedLiveWidgetKeysRef:V.dismissedLiveWidgetKeysRef,posts:X.posts,scrollToMessage:Z.composeReferenceActions.scrollToMessage,draftThrottleRef:V.draftThrottleRef,thoughtThrottleRef:V.thoughtThrottleRef,followupQueueItemsRef:V.followupQueueItemsRef,scrollToBottomRef:X.scrollToBottomRef,hasMoreRef:X.hasMoreRef,loadMoreRef:X.loadMoreRef,lastAgentResponseRef:V.lastAgentResponseRef,notifyForFinalResponse:Z.notifyForFinalResponse,setSteerQueuedTurnId:q.setSteerQueuedTurnId,refreshActiveEditorFromWorkspace:L.refreshActiveEditorFromWorkspace,showIntentToast:$,removeStalledPost:Z.recoveryCallbacks.removeStalledPost,preserveTimelineScrollTop:X.preserveTimelineScrollTop,finalizeStalledResponse:()=>{q.setExtensionWorkingState({message:null,indicator:null,visible:!0}),Z.recoveryCallbacks.finalizeStalledResponse()},connectionStatus:Y.connectionStatus,agentStatus:K.agentStatus,thoughtExpandedRef:V.thoughtExpandedRef,draftExpandedRef:V.draftExpandedRef,steerQueuedTurnIdRef:V.steerQueuedTurnIdRef}}function HN(_){let{routeState:$,searchState:j,shellState:G,timeline:Y,interaction:X,paneRuntime:Z,refs:L,setters:V,services:q,helpers:K}=_,Q=X.composeReferenceActions.showIntentToast,F=ZB({currentHashtag:j.currentHashtag,searchQuery:j.searchQuery,searchOpen:j.searchOpen,searchScope:j.searchScope,currentChatJid:$.currentChatJid,currentRootChatJid:$.currentRootChatJid,posts:Y.posts,loadPosts:Y.loadPosts,searchPosts:q.searchPosts,setCurrentHashtag:j.setCurrentHashtag,setSearchQuery:j.setSearchQuery,setSearchOpen:j.setSearchOpen,setSearchScope:j.setSearchScope,setPosts:Y.setPosts,setHasMore:Y.setHasMore,preserveTimelineScrollTop:Y.preserveTimelineScrollTop,setRemovingPostIds:V.setRemovingPostIds,deletePost:q.deletePost,hasMoreRef:Y.hasMoreRef,loadMoreRef:Y.loadMoreRef}),B=NF(Qw(_,Q)),U=qw(q.isAgentTurnActive,q.agentStatus),H=DN({currentChatJid:$.currentChatJid,followupQueueItemsRef:L.followupQueueItemsRef,dismissedQueueRowIdsRef:L.dismissedQueueRowIdsRef,setFollowupQueueItems:V.setFollowupQueueItems,showIntentToast:Q,clearQueuedSteerStateIfStale:X.clearQueuedSteerStateIfStale,steerAgentQueueItem:q.steerAgentQueueItem,removeAgentQueueItem:q.removeAgentQueueItem,refreshQueueState:B.agentStatusLifecycle.refreshQueueState,refreshActiveChatAgents:B.chatRefreshLifecycle.refreshActiveChatAgents,refreshCurrentChatBranches:B.chatRefreshLifecycle.refreshCurrentChatBranches,refreshContextUsage:B.agentStatusLifecycle.refreshContextUsage,refreshAutoresearchStatus:B.agentStatusLifecycle.refreshAutoresearchStatus,currentRootChatJid:$.currentRootChatJid,isComposeBoxAgentActive:U,setPendingExtensionPanelActions:V.setPendingExtensionPanelActions,stopAutoresearch:q.stopAutoresearch,dismissAutoresearch:q.dismissAutoresearch,streamSidePrompt:q.streamSidePrompt,btwAbortRef:L.btwAbortRef,btwSession:G.btwSession,setBtwSession:V.setBtwSession,sendAgentMessage:q.sendAgentMessage,dismissedLiveWidgetKeysRef:L.dismissedLiveWidgetKeysRef,setFloatingWidget:V.setFloatingWidget,getAgentStatus:q.getAgentStatus,getAgentContext:q.getAgentContext,getAgentQueueState:q.getAgentQueueState,getAgentModels:q.getAgentModels,getActiveChatAgents:q.getActiveChatAgents,getChatBranches:q.getChatBranches,getTimeline:q.getTimeline,rawPosts:Y.rawPosts,activeChatAgents:G.activeChatAgents,currentChatBranches:G.currentChatBranches,contextUsage:G.contextUsage,activeModel:G.activeModel,activeThinkingLevel:G.activeThinkingLevel,supportsThinking:G.supportsThinking,isAgentTurnActive:q.isAgentTurnActive,chatOnlyMode:$.chatOnlyMode,navigate:$.navigate,setWorkspaceOpen:G.setWorkspaceOpen,currentBranchRecord:G.currentBranchRecord,renameBranchInFlightRef:L.renameBranchInFlightRef,renameBranchLockUntilRef:L.renameBranchLockUntilRef,getFormLock:K.getFormLock,setRenameBranchNameDraft:V.setRenameBranchNameDraft,setIsRenameBranchFormOpen:V.setIsRenameBranchFormOpen,setIsRenamingBranch:V.setIsRenamingBranch,renameChatBranch:q.renameChatBranch,pruneChatBranch:q.pruneChatBranch,purgeChatBranch:q.purgeChatBranch,restoreChatBranch:q.restoreChatBranch,branchLoaderMode:$.branchLoaderMode,branchLoaderSourceChatJid:$.branchLoaderSourceChatJid,forkChatBranch:q.forkChatBranch,createRootChatSession:q.createRootChatSession,setBranchLoaderState:V.setBranchLoaderState,isWebAppMode:$.isWebAppMode,setActiveChatAgents:V.setActiveChatAgents,setCurrentChatBranches:V.setCurrentChatBranches,openEditor:q.openEditor,tabStripActiveId:q.tabStripActiveId,editorInstanceRef:Z.editorInstanceRef,dockInstanceRef:Z.dockInstanceRef,terminalTabPath:q.terminalTabPath,tabPaneOverrides:q.tabPaneOverrides,buildPaneDetachTransfer:Z.buildPaneDetachTransfer,registerDetachedPaneWindow:Z.registerDetachedPaneWindow,dockVisible:Z.dockVisible,resolveTab:q.resolveTab,closeTab:q.closeTab,setDockVisible:Z.setDockVisible,editorOpen:q.editorOpen,shellElement:L.appShellRef.current,editorWidthRef:L.editorWidthRef,dockHeightRef:L.dockHeightRef,sidebarWidthRef:L.sidebarWidthRef,readStoredNumber:K.readStoredNumber,hasDockPanes:Z.hasDockPanes,toggleDock:Z.toggleDock,toggleZenMode:Z.toggleZenMode,exitZenMode:Z.exitZenMode,zenMode:Z.zenMode});return Vw({agentStatusLifecycleBundle:B,actionBundle:H,timelineViewActions:F,isComposeBoxAgentActive:U})}k0();T_();k0();function WN(_){try{return _?.focus?.(),!0}catch($){return!1}}function c6(_,$){if(!_||!$)return null;try{return _.getItem($)}catch{return null}}function dj(_,$,j){if(!_||!$)return;try{_.setItem($,j)}catch{return}}function ON(_,$){if(!_||!$)return;try{_.removeItem($)}catch{return}}function zN(_="piclaw"){try{if(typeof crypto<"u"&&typeof crypto.randomUUID==="function")return`${_}-${crypto.randomUUID()}`}catch($){console.debug("[notification-delivery-coordinator] crypto.randomUUID threw; falling back to Math.random-based id.",$)}return`${_}-${Math.random().toString(36).slice(2)}-${Date.now().toString(36)}`}function Z4(_=typeof window<"u"?window:null){let $=_?.localStorage,j=c6($,"piclaw.notifications.deviceId");if(j)return j;let G=zN("device");return dj($,"piclaw.notifications.deviceId",G),c6($,"piclaw.notifications.deviceId")||G}function h6(_=typeof window<"u"?window:null){let $=_?.sessionStorage,j=c6($,"piclaw.notifications.clientId");if(j)return j;let G=_?.__PICLAW_NOTIFICATION_CLIENT_ID__;if(typeof G==="string"&&G.trim())return G.trim();let Y=zN("client");if(dj($,"piclaw.notifications.clientId",Y),_)_.__PICLAW_NOTIFICATION_CLIENT_ID__=c6($,"piclaw.notifications.clientId")||Y;return _?.__PICLAW_NOTIFICATION_CLIENT_ID__||Y}function AN(_,$){return`piclaw.notifications.presence.${String(_||"").trim()}:${String($||"").trim()}`}function oj(_={}){let $=_.runtimeWindow??(typeof window<"u"?window:null),j=_.runtimeDocument??(typeof document<"u"?document:null),G=typeof _.chatJid==="string"&&_.chatJid.trim()?_.chatJid.trim():"",Y=typeof _.deviceId==="string"&&_.deviceId.trim()?_.deviceId.trim():Z4($),X=typeof _.clientId==="string"&&_.clientId.trim()?_.clientId.trim():h6($),Z=Number.isFinite(_.updatedAtMs)?Number(_.updatedAtMs):Date.now(),L=Boolean(typeof j?.hasFocus==="function"?j.hasFocus():!0),q=String(j?.visibilityState||"").trim().toLowerCase()==="hidden"?"hidden":"visible";return{deviceId:Y,clientId:X,chatJid:G,visibilityState:q,hasFocus:L,updatedAtMs:Z}}function JN(_,$=typeof window<"u"?window:null){let j=$?.localStorage,G=typeof _?.deviceId==="string"?_.deviceId.trim():"",Y=typeof _?.clientId==="string"?_.clientId.trim():"",X=typeof _?.chatJid==="string"?_.chatJid.trim():"";if(!j||!G||!Y||!X)return!1;return dj(j,AN(G,Y),JSON.stringify({deviceId:G,clientId:Y,chatJid:X,visibilityState:_.visibilityState==="hidden"?"hidden":"visible",hasFocus:Boolean(_.hasFocus),updatedAtMs:Number.isFinite(_.updatedAtMs)?Number(_.updatedAtMs):Date.now()})),!0}function kN(_,$=typeof window<"u"?window:null){let j=$?.localStorage,G=typeof _?.deviceId==="string"?_.deviceId.trim():"",Y=typeof _?.clientId==="string"?_.clientId.trim():"";if(!j||!G||!Y)return!1;return ON(j,AN(G,Y)),!0}function Kw(_={}){let $=_.runtimeWindow??(typeof window<"u"?window:null),j=$?.localStorage,G=typeof _.deviceId==="string"&&_.deviceId.trim()?_.deviceId.trim():Z4($),Y=Number.isFinite(_.nowMs)?Number(_.nowMs):Date.now(),X=Number.isFinite(_.ttlMs)?Number(_.ttlMs):120000;if(!j||!G)return[];let Z=`piclaw.notifications.presence.${G}:`,L=[],V=[];for(let q=0;q<j.length;q+=1){let K=j.key(q);if(!K||!K.startsWith(Z))continue;let Q=c6(j,K);if(!Q){V.push(K);continue}try{let F=JSON.parse(Q),B=Number(F?.updatedAtMs);if(!Number.isFinite(B)||Y-B>X){V.push(K);continue}let U=typeof F?.chatJid==="string"?F.chatJid.trim():"",H=typeof F?.clientId==="string"?F.clientId.trim():"";if(!U||!H){V.push(K);continue}L.push({deviceId:G,clientId:H,chatJid:U,visibilityState:F?.visibilityState==="hidden"?"hidden":"visible",hasFocus:Boolean(F?.hasFocus),updatedAtMs:B})}catch{V.push(K)}}return V.forEach((q)=>ON(j,q)),L.sort((q,K)=>q.clientId.localeCompare(K.clientId))}function MN(_={}){let $=oj(_),j=$.chatJid;if(!j)return!1;let G=Kw({runtimeWindow:_.runtimeWindow,deviceId:$.deviceId,nowMs:$.updatedAtMs,ttlMs:_.ttlMs}).filter((Z)=>Z.chatJid===j&&Z.clientId!==$.clientId),Y=[$,...G];if(Y.some((Z)=>Z.visibilityState==="visible"))return!1;let X=[...Y].sort((Z,L)=>Z.clientId.localeCompare(L.clientId))[0]||null;return Boolean(X&&X.clientId===$.clientId)}function Bw(_=typeof window<"u"?window:null){return Boolean(_?.__PICLAW_NOTIFICATION_SOURCE_LABELS_ENABLED__)}function Fw(_,$="",j=typeof window<"u"?window:null){let G=typeof _==="string"&&_.trim()?_.trim():"PiClaw",Y=Bw(j)&&typeof $==="string"?$.trim():"";return Y?`${G} [${Y}]`:G}function Nw(_){let $=String(_||"").replace(/-/g,"+").replace(/_/g,"/"),j=$.padEnd(Math.ceil($.length/4)*4,"="),G=atob(j),Y=new Uint8Array(G.length);for(let X=0;X<G.length;X+=1)Y[X]=G.charCodeAt(X);return Y}function n8(_=typeof window<"u"?window:null){if(!_||!_.isSecureContext)return!1;return"serviceWorker"in _.navigator&&"PushManager"in _}async function yN(_){return await _.navigator.serviceWorker.register("/sw.js",{updateViaCache:"none"}),await _.navigator.serviceWorker.ready}async function Uw(_){let $=await yN(_),j=await $.pushManager.getSubscription();if(j)return j;let G=await g7(),Y=typeof G?.publicKey==="string"?G.publicKey.trim():"";if(!Y)throw Error("Missing web push public key.");return $.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Nw(Y)})}async function TN(_,$){if(!n8(_))return!1;let j=await Uw(_);return await u7(j.toJSON?j.toJSON():j,{deviceId:$}),!0}async function Ew(_,$){if(!n8(_))return!1;let G=await(await yN(_)).pushManager.getSubscription();if(!G)return!1;let Y=G.toJSON?G.toJSON():G;try{await b7(Y,{deviceId:$})}catch(X){console.warn("Failed to remove web push subscription from the server:",X)}try{await G.unsubscribe()}catch(X){console.warn("Failed to unsubscribe from web push notifications:",X)}return!0}function Dw(_,$={}){let j=$.runtimeWindow??(typeof window<"u"?window:null);if(!j?.fetch)return Promise.resolve(!1);return j.fetch("/agent/push/presence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_),keepalive:Boolean($.keepalive)}).then(()=>!0).catch(()=>!1)}function Hw(_,$=typeof window<"u"?window:null){try{if($?.navigator?.sendBeacon){let j=new Blob([JSON.stringify(_)],{type:"application/json"});return $.navigator.sendBeacon("/agent/push/presence",j)}}catch(j){console.debug("[use-notifications] Ignoring sendBeacon failure for best-effort notification presence teardown.",j,{hasNavigator:Boolean($?.navigator)})}return!1}function wN(_={}){let $=typeof _?.chatJid==="string"&&_.chatJid.trim()?_.chatJid.trim():"web:default",[j,G]=C(!1),[Y,X]=C("default"),Z=u(!1),L=u(null),V=u(null);g(()=>{let B=E$("notificationsEnabled",!1);if(Z.current=B,G(B),typeof window<"u")L.current=Z4(window),V.current=h6(window);if(typeof Notification>"u")return;let U=Notification.permission;if(X(U),U==="denied"&&B){Z.current=!1,G(!1),V_("notificationsEnabled","false");return}if(U==="granted"&&B&&typeof window<"u"&&n8(window))TN(window,L.current||Z4(window)).catch((H)=>{console.warn("Failed to refresh stored web push subscription:",H)})},[]),g(()=>{Z.current=j},[j]),g(()=>{if(typeof window>"u"||typeof document>"u")return;let B=L.current||Z4(window),U=V.current||h6(window);L.current=B,V.current=U;let H=(z=!0,O="fetch")=>{let x=oj({chatJid:$,runtimeWindow:window,runtimeDocument:document,deviceId:B,clientId:U});if(z)JN(x,window);else kN({deviceId:B,clientId:U},window);let I={device_id:B,client_id:U,chat_jid:$,visibility_state:x.visibilityState,has_focus:x.hasFocus,active:z};if(!z&&O==="beacon"&&Hw(I,window))return;Dw(I,{runtimeWindow:window,keepalive:!z||O==="keepalive"})},D=()=>H(!0),E=()=>H(!1,"beacon");H(!0);let M=setInterval(()=>H(!0),15000);return document.addEventListener("visibilitychange",D),window.addEventListener("focus",D),window.addEventListener("blur",D),window.addEventListener("pageshow",D),window.addEventListener("pagehide",E),window.addEventListener("beforeunload",E),()=>{clearInterval(M),document.removeEventListener("visibilitychange",D),window.removeEventListener("focus",D),window.removeEventListener("blur",D),window.removeEventListener("pageshow",D),window.removeEventListener("pagehide",E),window.removeEventListener("beforeunload",E),H(!1,"beacon")}},[$]);let q=f(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let B=Notification.requestPermission();if(B&&typeof B.then==="function")return B;return Promise.resolve(B)}catch(B){return console.debug("[use-notifications] Notification permission request threw; returning default permission state.",B),Promise.resolve("default")}},[]),K=f(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){X("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let H=await q();if(X(H||"default"),H!=="granted"){Z.current=!1,G(!1),V_("notificationsEnabled","false");return}}let B=!Z.current;Z.current=B,G(B),V_("notificationsEnabled",String(B));let U=L.current||Z4(window);if(L.current=U,n8(window))try{if(B)await TN(window,U);else await Ew(window,U)}catch(H){if(console.warn("Failed to sync web push notifications:",H),B)alert("Notifications were enabled, but web push setup failed. If you are on iPhone or iPad, reopen PiClaw from the Home Screen and try again.")}},[q]),Q=f((B,U,H={})=>{if(!Z.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let D=new Notification(Fw(B,H?.sourceLabel||"",window),{body:U});return D.onclick=()=>{WN(window)},!0}catch(D){return console.debug("[use-notifications] Local notification creation failed.",D,{title:typeof B==="string"?B:null}),!1}},[]),F=f((B)=>{if(typeof window>"u"||typeof document>"u")return!1;return MN({chatJid:typeof B==="string"&&B.trim()?B.trim():$,runtimeWindow:window,runtimeDocument:document,deviceId:L.current||Z4(window),clientId:V.current||h6(window)})},[$]);return{notificationsEnabled:j,notificationPermission:Y,toggleNotifications:K,notify:Q,shouldNotifyLocallyForChat:F}}function Ww(_){let{activeChatAgents:$,currentChatBranches:j,currentChatJid:G}=_,Y=j.find((X)=>X?.chat_jid===G);if(Y)return Y;return $.find((X)=>X?.chat_jid===G)||null}function Ow(_){return{status:_?"running":"idle",message:_?"Preparing a new chat branch…":""}}function zw(_,$){let j=typeof $?.root_chat_jid==="string"?$.root_chat_jid.trim():"";if(j)return j;let G=typeof _==="string"?_.trim():"";if(!G)return"web:default";let Y=G.indexOf(":branch:");if(Y<=0)return G;return G.slice(0,Y)||G}function IN(_){let{currentChatJid:$,branchLoaderMode:j}=_,[G,Y]=C("disconnected"),[X,Z]=C(!1),[L,V]=C(()=>S1()),[q,K]=C(null),[Q,F]=C(null),[B,U]=C(!1),[H,D]=C("current"),[E,M]=C([]),[z,O]=C([]),[x,I]=C([]),[A,k]=C(null),[W,T]=C({}),[y,J]=C(null),[P,R]=C(null),[b,c]=C(!1),[r,e]=C(null),[m,_0]=C(null),[H0,Y0]=C(!1),[j0,L0]=C([]),[F0,h]=C([]),[$0,V0]=C(null),[O0,a]=C(()=>new Map),[X0,W0]=C(()=>new Set),[P0,p0]=C(()=>({message:null,indicator:null,visible:!0})),[u0,Y_]=C([]),[l0,a0]=C(!1),[R0,i0]=C(()=>oQ()),[m0,e0]=C(null),[s0,U_]=C(null),X_=u(new Set),c0=Z0(()=>Ww({activeChatAgents:j0,currentChatBranches:F0,currentChatJid:$}),[j0,F0,$]),z0=Z0(()=>zw($,c0),[c0,$]),L_=dQ(H),[o0,H_]=C(()=>Ow(j)),E0=u0.length,g0=u(new Set),x0=u([]),n0=u(new Set),A_=u(0),Q_=u({inFlight:!1,lastAttemptAt:0,turnId:null});g0.current=new Set(u0.map((v1)=>v1.row_id)),x0.current=u0;let{notificationsEnabled:E_,notificationPermission:N_,toggleNotifications:J_,notify:x_,shouldNotifyLocallyForChat:R_}=wN({chatJid:$}),[W_,s_]=C(()=>new Set),[f_,q0]=C(()=>FK({allowLegacyFallback:!0,defaultValue:!1})),[v,n]=C({name:"You",avatar_url:null,avatar_background:null}),s=u(null),G0=u(!1),N0=u(!1),T0=u(!1),J0=u(null),M0=u($),y0=u(new Map),h0=u($),S0=u(0),d0=u(0),__=u({}),I0=u({name:null,avatar_url:null}),w0=u({currentHashtag:null,searchQuery:null,searchOpen:!1}),D_=u(null),$_=u(null),d=u(0),B0=u(0),r0=u(0),G_=u(null),S_=u(null),U1=u(null),b_=u(null),A1=u(0),C_=u({title:null,avatarBase:null}),k_=u(null),J1=u(!1),[O_,M_]=C(!1),k1=u(0),[p_,a_]=C(!1),[e_,F_]=C(""),I1=Z0(()=>Z8(e_,c0?.agent_name||""),[c0?.agent_name,e_]),E1=u(null);return{connectionStatus:G,setConnectionStatus:Y,stateAccessFailed:X,setStateAccessFailed:Z,isWebAppMode:L,setIsWebAppMode:V,currentHashtag:q,setCurrentHashtag:K,searchQuery:Q,setSearchQuery:F,searchOpen:B,setSearchOpen:U,searchScope:H,setSearchScope:D,fileRefs:E,setFileRefs:M,folderRefs:z,setFolderRefs:O,messageRefs:x,setMessageRefs:I,intentToast:A,setIntentToast:k,agents:W,setAgents:T,activeModel:y,setActiveModel:J,activeThinkingLevel:P,setActiveThinkingLevel:R,supportsThinking:b,setSupportsThinking:c,activeModelUsage:r,setActiveModelUsage:e,agentModelsPayload:m,setAgentModelsPayload:_0,hasLoadedAgentModels:H0,setHasLoadedAgentModels:Y0,activeChatAgents:j0,setActiveChatAgents:L0,currentChatBranches:F0,setCurrentChatBranches:h,contextUsage:$0,setContextUsage:V0,extensionStatusPanels:O0,setExtensionStatusPanels:a,pendingExtensionPanelActions:X0,setPendingExtensionPanelActions:W0,extensionWorkingState:P0,setExtensionWorkingState:p0,followupQueueItems:u0,setFollowupQueueItems:Y_,isAgentTurnActive:l0,setIsAgentTurnActive:a0,btwSession:R0,setBtwSession:i0,floatingWidget:m0,setFloatingWidget:e0,attachmentPreview:s0,setAttachmentPreview:U_,dismissedLiveWidgetKeysRef:X_,currentBranchRecord:c0,currentRootChatJid:z0,activeSearchScopeLabel:L_,branchLoaderState:o0,setBranchLoaderState:H_,followupQueueCount:E0,followupQueueRowIdsRef:g0,followupQueueItemsRef:x0,dismissedQueueRowIdsRef:n0,queueRefreshGenRef:A_,silentRecoveryRef:Q_,notificationsEnabled:E_,notificationPermission:N_,handleToggleNotifications:J_,notify:x_,shouldNotifyLocallyForChat:R_,removingPostIds:W_,setRemovingPostIds:s_,workspaceOpen:f_,setWorkspaceOpen:q0,userProfile:v,setUserProfile:n,staleUiVersionRef:s,staleUiReloadScheduledRef:G0,hasConnectedOnceRef:N0,wasAgentActiveRef:T0,agentStatusRef:J0,activeChatJidRef:M0,chatPaneStateByChatRef:y0,paneStateOwnerChatJidRef:h0,draftThrottleRef:S0,thoughtThrottleRef:d0,agentsRef:__,userProfileRef:I0,viewStateRef:w0,timelineRef:D_,appShellRef:$_,sidebarWidthRef:d,editorWidthRef:B0,dockHeightRef:r0,lastNotifiedIdRef:G_,lastAgentResponseRef:S_,btwAbortRef:U1,lastActivityTimerRef:b_,lastActivityTokenRef:A1,brandingRef:C_,intentToastTimerRef:k_,renameBranchInFlightRef:J1,isRenamingBranch:O_,setIsRenamingBranch:M_,renameBranchLockUntilRef:k1,isRenameBranchFormOpen:p_,setIsRenameBranchFormOpen:a_,renameBranchNameDraft:e_,setRenameBranchNameDraft:F_,renameBranchDraftState:I1,renameBranchNameInputRef:E1}}k0();k0();function Aw(_,$,j,G){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Y=!1,X=new Map;for(let[Z,L]of _.entries()){let V=Z;if(G==="dir"){if(Z===$)V=j,Y=!0;else if(Z.startsWith(`${$}/`))V=`${j}${Z.slice($.length)}`,Y=!0}else if(Z===$)V=j,Y=!0;X.set(V,L)}return Y?X:_}function xN(_,$,j,G){if(!(_ instanceof Set)||_.size===0||!$||!j)return _;let Y=!1,X=new Set;for(let Z of _.values()){let L=Z;if(G==="dir"){if(Z===$)L=j,Y=!0;else if(Z.startsWith(`${$}/`))L=`${j}${Z.slice($.length)}`,Y=!0}else if(Z===$)L=j,Y=!0;X.add(L)}return Y?X:_}function CN({onTabClosed:_}={}){let $=u(_);$.current=_;let[j,G]=C(()=>j_.getTabs()),[Y,X]=C(()=>j_.getActiveId()),[Z,L]=C(()=>j_.getTabs().length>0);g(()=>{return j_.onChange((J,P)=>{G(J),X(P),L(J.length>0)})},[]);let[V,q]=C(()=>new Set),[K,Q]=C(()=>new Set),[F,B]=C(()=>new Map),U=f((J)=>{q((P)=>{let R=new Set(P);if(R.has(J))R.delete(J);else R.add(J);return R})},[]),H=f((J)=>{q((P)=>{if(!P.has(J))return P;let R=new Set(P);return R.delete(J),R})},[]),D=f((J)=>{Q((P)=>{if(!P.has(J))return P;let R=new Set(P);return R.delete(J),R})},[]),E=f((J)=>{B((P)=>{if(!P.has(J))return P;let R=new Map(P);return R.delete(J),R})},[]),M=f((J,P={})=>{if(!J)return;let R=typeof P?.paneOverrideId==="string"&&P.paneOverrideId.trim()?P.paneOverrideId.trim():null,b={path:J,mode:"edit"};try{if(!(R?q_.get(R):q_.resolve(b))){if(!q_.get("editor")){console.warn(`[openEditor] No pane handler for: ${J}`);return}}}catch(m){console.warn(`[openEditor] paneRegistry.resolve() error for "${J}":`,m)}let c=typeof P?.label==="string"&&P.label.trim()?P.label.trim():void 0,r=P?.viewState&&typeof P.viewState==="object"?P.viewState:null,e=P?.diffMode==="saved"?"saved":null;if(j_.open(J,c),r)j_.saveViewState(J,r);if(R)B((m)=>{if(m.get(J)===R)return m;let _0=new Map(m);return _0.set(J,R),_0});if(e==="saved")Q((m)=>{if(m.has(J))return m;let _0=new Set(m);return _0.add(J),_0})},[]),z=f(()=>{let J=j_.getActiveId();if(J){let P=j_.get(J);if(P?.dirty){if(!window.confirm(`"${P.label}" has unsaved changes. Close anyway?`))return}j_.close(J),H(J),D(J),E(J),$.current?.(J)}},[D,E,H]),O=f((J)=>{let P=j_.get(J);if(P?.dirty){if(!window.confirm(`"${P.label}" has unsaved changes. Close anyway?`))return}j_.close(J),H(J),D(J),E(J),$.current?.(J)},[D,E,H]),x=f((J)=>{j_.activate(J)},[]),I=f((J)=>{let P=j_.getTabs().filter((c)=>c.id!==J&&!c.pinned),R=P.filter((c)=>c.dirty).length;if(R>0){if(!window.confirm(`${R} unsaved tab${R>1?"s":""} will be closed. Continue?`))return}let b=P.map((c)=>c.id);j_.closeOthers(J),b.forEach((c)=>{H(c),D(c),E(c),$.current?.(c)})},[D,E,H]),A=f(()=>{let J=j_.getTabs().filter((b)=>!b.pinned),P=J.filter((b)=>b.dirty).length;if(P>0){if(!window.confirm(`${P} unsaved tab${P>1?"s":""} will be closed. Continue?`))return}let R=J.map((b)=>b.id);j_.closeAll(),R.forEach((b)=>{H(b),D(b),E(b),$.current?.(b)})},[D,E,H]),k=f((J)=>{j_.togglePin(J)},[]),W=f((J)=>{if(!J)return;Q((P)=>{let R=new Set(P);if(R.has(J))R.delete(J);else R.add(J);return R}),j_.activate(J)},[]),T=f((J)=>{if(!J)return;B((P)=>{if(P.get(J)==="editor")return P;let R=new Map(P);return R.set(J,"editor"),R}),j_.activate(J)},[]),y=f(()=>{let J=j_.getActiveId();if(J)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:J}}))},[]);return g(()=>{let J=(P)=>{let{oldPath:R,newPath:b,type:c}=P.detail||{};if(!R||!b)return;if(c==="dir"){for(let r of j_.getTabs())if(r.path===R||r.path.startsWith(`${R}/`)){let e=`${b}${r.path.slice(R.length)}`;j_.rename(r.id,e)}}else j_.rename(R,b);q((r)=>xN(r,R,b,c)),Q((r)=>xN(r,R,b,c)),B((r)=>Aw(r,R,b,c))};return window.addEventListener("workspace-file-renamed",J),()=>window.removeEventListener("workspace-file-renamed",J)},[]),g(()=>{let J=(P)=>{if(j_.hasUnsaved())P.preventDefault(),P.returnValue=""};return window.addEventListener("beforeunload",J),()=>window.removeEventListener("beforeunload",J)},[]),{editorOpen:Z,tabStripTabs:j,tabStripActiveId:Y,previewTabs:V,diffTabs:K,tabPaneOverrides:F,openEditor:M,closeEditor:z,handleTabClose:O,handleTabActivate:x,handleTabCloseOthers:I,handleTabCloseAll:A,handleTabTogglePin:k,handleTabTogglePreview:U,handleTabToggleDiff:W,handleTabEditSource:T,revealInExplorer:y}}k0();function e1(_){return typeof _==="string"&&_.trim()?_.trim():null}function Jw(_=globalThis){try{return typeof _?.crypto?.randomUUID==="function"?_.crypto.randomUUID():null}catch($){return null}}function h4(_="pane"){let $=Jw();if($)return`${_}-${$}`;return`${_}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function PN(_){let $=e1(_?.paneInstanceId),j=e1(_?.paneWindowId);if(!$||!j)return{};let G=e1(_?.paneSourceWindowId);return{pane_instance_id:$,pane_window_id:j,...G?{pane_source_window_id:G}:{}}}function RN(_={}){let $=new URLSearchParams(_.search||"");return{panePath:e1($.get("pane_path"))||e1(_.panePath),paneLabel:e1($.get("pane_label"))||e1(_.paneLabel),paneInstanceId:e1($.get("pane_instance_id")),paneWindowId:e1($.get("pane_window_id")),paneSourceWindowId:e1($.get("pane_source_window_id"))}}function l4(_){return Boolean(_?.panePath&&_?.paneInstanceId&&_?.paneWindowId)}function _$(_){return typeof _==="string"&&_.trim()?_.trim():null}function fN(_){let $=_$(_?.panePath),j=_$(_?.paneInstanceId),G=_$(_?.ownerWindowId);if(!$||!j||!G)return null;let Y=_$(_?.now)||new Date().toISOString();return{panePath:$,paneInstanceId:j,ownerWindowId:G,detachedAt:Y,requestedAt:Y,label:_$(_?.label),sourceWindowId:_$(_?.sourceWindowId)}}function ij(_,$){if(!_||!$)return!1;return _$($.panePath)===_.panePath&&_$($.paneInstanceId)===_.paneInstanceId&&_$($.paneWindowId)===_.ownerWindowId}function sj(_,$){if(!_)return null;return{panePath:_.panePath,paneInstanceId:_.paneInstanceId,ownerWindowId:_.ownerWindowId,detachedAt:_$($)||new Date().toISOString(),label:_.label||null}}function d8(_){try{return _?.close?.(),!0}catch($){return!1}}function aj(_,$,j){try{return _?.postMessage?.($,j),!0}catch(G){return!1}}function kw(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;if(_.openTabIds?.has($))return!0;if(_.pendingDetachedTabPaths?.has?.($))return!0;if(_.detachedTabPaths?.has?.($))return!0;if($===_.terminalTabPath)return Boolean(_.hasPendingDetachedDockPane||_.hasDetachedDockPane);return!1}function SN(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return;let j=_?.sourceHost==="dock"?"dock":"tab";if($===_.terminalTabPath&&j==="dock"){_.setDockVisible?.(!1);return}_.closeTab?.($)}var Mw=400;function Tw(_){let $=Array.isArray(_?.changed_paths)?_.changed_paths.map((G)=>typeof G==="string"?G.trim():"").filter(Boolean):[];if($.length>0)return $;let j=typeof _?.path==="string"?_.path.trim():"";return j?[j]:["."]}function yw(_,$){if(!_)return!1;if(!Array.isArray($)||$.length===0)return!0;return $.some((j)=>{return Tw(j).some((Y)=>Y==="."||Y===_)})}async function gN(_,$){if(typeof _?.afterAttachToHost!=="function")return;await _.afterAttachToHost($)}function ww(_=typeof document<"u"?document:null){if(!_)return!0;let $=typeof _.visibilityState==="string"?_.visibilityState:"";return!$||$==="visible"}function s8(_=typeof navigator<"u"?navigator:null){if(!_)return!1;let $=String(_.userAgent||""),j=String(_.vendor||""),G=/AppleWebKit/i.test($),Y=/Safari/i.test($),X=/Chrome|Chromium|CriOS|EdgiOS|EdgA|Edg\//i.test($),Z=/FxiOS/i.test($);return G&&(j.includes("Apple")||Y)&&!X&&!Z}function uN(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;if($!==_.terminalTabPath)return!1;if((_?.reason==="message"?"message":"closed-window")==="closed-window")return!0;return _?.allowLiveTransfer===!1}function o8(_){if(!uN(_))return!1;return s8(_?.runtimeNavigator)}function i8(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$||$!==_?.terminalTabPath)return!1;return s8(_?.runtimeNavigator)}function b5(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;return $!==_?.terminalTabPath}function Iw(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return null;let j=_?.runtime??globalThis,G=typeof _?.nowMs==="number"?_.nowMs:Date.now(),Y=typeof _?.paneInstanceId==="string"?_.paneInstanceId.trim():"",X=typeof _?.paneOverrideId==="string"?_.paneOverrideId.trim():"",Z=typeof _?.terminalTabPath==="string"?_.terminalTabPath:"piclaw://terminal",L=_?.allowLiveTransfer!==!1,V=_?.instance||null,q=typeof V?.exportHostTransferState==="function"?V.exportHostTransferState():null,K=$===Z,Q=q&&!K?p8({path:$,payload:q},j,G):null,F=null;if($!==Z){let B=q&&typeof q==="object"?typeof q.mtime==="string"?q.mtime:q.mtime===null?null:void 0:void 0,U=typeof V?.isDirty==="function"?V.isDirty():!1,H=typeof V?.getContent==="function"?V.getContent():void 0;F=Q2({path:$,content:U?H:void 0,mtime:B,paneOverrideId:X||null,viewState:_?.viewState||null},j,G)}return{type:"piclaw-pane-reattach-request",panePath:$,...Y?{paneInstanceId:Y}:{},...F?.editor_popout?{editorPopoutToken:F.editor_popout}:{},...Q?.pane_transfer?{paneTransferToken:Q.pane_transfer}:{},...K&&q?{paneTransferPayload:q}:{},...L?{}:{allowLiveTransfer:!1}}}function xw(_){let $=typeof _?.payload?.panePath==="string"?_.payload.panePath.trim():"";if(!$)return null;let j=_?.runtime??globalThis,G=typeof _?.nowMs==="number"?_.nowMs:Date.now(),Y=typeof _?.payload?.paneInstanceId==="string"&&_.payload.paneInstanceId.trim()?_.payload.paneInstanceId.trim():null,X=typeof _?.payload?.editorPopoutToken==="string"?_.payload.editorPopoutToken.trim():"",Z=typeof _?.payload?.paneTransferToken==="string"?_.payload.paneTransferToken.trim():"",L=_?.payload?.paneTransferPayload&&typeof _.payload.paneTransferPayload==="object"&&!Array.isArray(_.payload.paneTransferPayload)?_.payload.paneTransferPayload:null,V=X?y3(X,j,G):null,q=L?{panePath:$,path:$,payload:L,capturedAt:G}:Z?lj(Z,j,G):null;return{panePath:$,paneInstanceId:Y,editorTransfer:V?.path===$?V:null,hostTransfer:q?.path===$?q:null,allowLiveTransfer:_?.payload?.allowLiveTransfer!==!1}}function bN(_){let{panePopoutMode:$,panePopoutPath:j,panePopoutLabel:G,chatOnlyMode:Y,editorOpen:X,tabStripTabs:Z,tabStripActiveId:L,previewTabs:V,diffTabs:q,tabPaneOverrides:K,terminalTabPath:Q,vncTabPrefix:F,openEditor:B,closeEditor:U,getWorkspaceFile:H}=_,D=u(null),E=u(null),M=u(null),z=u(null),O=u((()=>{if(!$)return null;let q0=Z5("editor_popout");return y3(q0)})()),x=u((()=>{if(!$)return null;return WF()})()),I=u(RN({search:typeof window<"u"?window.location.search:"",panePath:j,paneLabel:G})),A=u(I.current.paneWindowId||h4("pane-window")),k=u(new Map),W=u(new Map),T=u(new Map),y=u(new Map),J=u(!1),P=u(new Map),R=u(h4("pane-instance")),b=u(new Map),c=u(new Map),r=u(new Set),[e,m]=C(()=>new Map),_0=u(e);_0.current=e;let[H0,Y0]=C(()=>new Map),j0=u(H0);j0.current=H0;let[L0,F0]=C(null),h=u(L0);h.current=L0;let[$0,V0]=C(null),O0=u($0);O0.current=$0;let a=q_.getDockPanes().length>0,[X0,W0]=C(!1),P0=f(()=>W0((q0)=>!q0),[]),p0=f(()=>{B(Q,{label:"Terminal"})},[B,Q]),u0=f(()=>{B(F,{label:"VNC"})},[B,F]),Y_=f((q0)=>{let v=typeof q0==="string"?q0.trim():"";if(!v)return h4("pane-instance");if(v===Q&&!j_.get(v)){if(!R.current)R.current=h4("pane-instance");return R.current}let s=P.current.get(v);if(s)return s;let G0=h4("pane-instance");return P.current.set(v,G0),G0},[Q]),l0=Z0(()=>!$&&L?H0.get(L)||null:null,[H0,$,L]),a0=!$?$0:null,R0=f((q0)=>{if(!q0)return;OF(q0),c.current.delete(q0),r.current.delete(q0),F0((v)=>v?.panePath===q0?null:v),m((v)=>{if(!v.has(q0))return v;let n=new Map(v);return n.delete(q0),n})},[]),i0=f((q0)=>{if(!q0)return;b.current.delete(q0),c.current.delete(q0),r.current.delete(q0),R0(q0),V0((v)=>v?.panePath===q0?null:v),Y0((v)=>{if(!v.has(q0))return v;let n=new Map(v);return n.delete(q0),n})},[R0]),m0=f((q0,v={})=>{let n=typeof q0==="string"?q0.trim():"";if(!n)return!1;if(i8({panePath:n,terminalTabPath:Q}))return!1;let s=b.current.get(n),G0=Boolean(j0.current.get(n)),N0=Boolean(O0.current?.panePath===n);if(i0(n),n===Q&&N0&&!G0)W0(!0);else if(n===Q&&G0)B(n,{label:"Terminal"});else if(j_.get(n))j_.activate(n);else B(n);if(v.closeDetachedWindow!==!1&&s&&typeof s.close==="function")d8(s);return!0},[i0,B,W0,Q]),e0=f(()=>{if($)return;if(!ww())return;let q0=Date.now();for(let[v,n]of c.current.entries()){if(n>q0)continue;c.current.delete(v),m0(v,{closeDetachedWindow:!1})}},[$,m0]),s0=f((q0,v={})=>{let n=typeof q0==="string"?q0.trim():"";if(!n)return!1;let s={panePath:n,terminalTabPath:Q,allowLiveTransfer:v.allowLiveTransfer,reason:v.reason};if(o8(s))return b.current.delete(n),c.current.delete(n),r.current.add(n),!0;if(!uN(s))return m0(n,{closeDetachedWindow:!1});return c.current.set(n,Date.now()+Mw),e0(),!0},[e0,m0,Q]),U_=f((q0)=>{let v=typeof q0==="string"?q0.trim():"";if(!v)return null;let n=Y_(v),s=h4("pane-window");return{paneInstanceId:n,paneWindowId:s,params:PN({paneInstanceId:n,paneWindowId:s,paneSourceWindowId:A.current})}},[Y_]),X_=f((q0,v,n,s)=>{let G0=typeof q0==="string"?q0.trim():"";if(!G0||!s)return;let N0=fN({panePath:G0,paneInstanceId:s.pane_instance_id,ownerWindowId:s.pane_window_id,sourceWindowId:s.pane_source_window_id,label:v});if(!N0)return;if(b.current.set(G0,n||null),G0===Q&&!j_.get(G0)){F0(N0);return}m((J0)=>{let M0=new Map(J0);return M0.set(G0,N0),M0})},[Q]),c0=f((q0,v)=>{let n=typeof q0?.panePath==="string"?q0.panePath.trim():"";if(!n)return!1;let s=b.current.get(n);if(s&&v&&s!==v)return!1;let G0=_0.current.get(n)||null;if(ij(G0,q0)){let y0=E.current,h0=b5({panePath:n,terminalTabPath:Q});if(h0&&y0&&typeof y0.moveHost==="function")u5({panePath:n,paneInstanceId:G0.paneInstanceId,paneWindowId:G0.ownerWindowId,instance:y0,releaseSourceHost:()=>{if(E.current===y0)E.current=null}});if(h0&&E.current)E.current=null;let S0=sj(G0);if(!S0)return!1;return m((d0)=>{if(!d0.has(n))return d0;let __=new Map(d0);return __.delete(n),__}),Y0((d0)=>{let __=new Map(d0);return __.set(n,S0),__}),SN({panePath:n,terminalTabPath:Q,closeTab:(d0)=>j_.close(d0),sourceHost:"tab"}),!0}if(n!==Q)return!1;let N0=h.current,T0=z.current,J0=b5({panePath:n,terminalTabPath:Q});if(J0&&N0&&T0&&typeof T0.moveHost==="function")u5({panePath:n,paneInstanceId:N0.paneInstanceId,paneWindowId:N0.ownerWindowId,instance:T0,releaseSourceHost:()=>{if(z.current===T0)z.current=null}});if(J0&&z.current)z.current=null;if(!ij(N0,q0))return!1;let M0=sj(N0);if(!M0)return!1;return F0(null),V0(M0),SN({panePath:n,terminalTabPath:Q,setDockVisible:W0,sourceHost:"dock"}),!0},[W0,Q]),z0=f((q0=!1,v=!0)=>{if(!$)return!1;let n=I.current;if(!l4(n))return!1;if(typeof window>"u"||!window.opener||window.opener.closed)return!1;if(J.current){if(q0)d8(window);return!0}let s=n.panePath||j,G0=s===Q?z.current||E.current:E.current,N0=v&&b5({panePath:s,terminalTabPath:Q}),T0=Iw({panePath:s,paneInstanceId:n.paneInstanceId,paneOverrideId:s===Q?null:typeof K?.get==="function"?K.get(s)||null:null,terminalTabPath:Q,viewState:s===Q?null:j_.getViewState(s)||null,allowLiveTransfer:N0,instance:G0});if(!T0)return!1;if(N0&&T0.paneTransferToken&&typeof G0?.moveHost==="function"){if(z.current===G0)z.current=null;if(E.current===G0)E.current=null}if(!aj(window.opener,T0,window.location.origin))return!1;if(J.current=!0,q0)d8(window);return!0},[$,j,K,Q]),L_=f(()=>z0(!0,!0),[z0]);g(()=>{if(!$||typeof window>"u")return;let q0=()=>{let v=I.current,n=l4(v)?v.panePath||j||"":"";if(o8({panePath:n,terminalTabPath:Q,allowLiveTransfer:!1,reason:"closed-window"}))return;z0(!1,!1)};return window.addEventListener("pagehide",q0),window.addEventListener("beforeunload",q0),()=>{window.removeEventListener("pagehide",q0),window.removeEventListener("beforeunload",q0)}},[$,z0]);let o0=Z0(()=>sQ(Z,L),[L,Z]),H_=Z0(()=>aQ(K,L),[K,L]),E0=Z0(()=>Mj(G,o0,j),[o0,G,j]),g0=Z0(()=>L&&q.has(L)?"saved":null,[q,L]),x0=u(g0);g(()=>{x0.current=g0},[g0]);let n0=Z0(()=>eQ(Z,V,q,L),[q,V,L,Z]),A_=Z0(()=>_K(j,F),[j,F]),Q_=Z0(()=>$K(j,Q,n0,A_),[A_,n0,j,Q]),E_=jK($,Y,X,a,X0),[N_,J_]=C(!1),x_=u(!1),R_=f(()=>{if(!X||Y)return;if(x_.current=X0,X0)W0(!1);J_(!0)},[Y,X0,X]),W_=f(()=>{if(!N_)return;if(J_(!1),x_.current)W0(!0),x_.current=!1},[N_]),s_=f(()=>{if(N_){W_();return}R_()},[R_,W_,N_]);g(()=>{if(N_&&!X)W_()},[X,W_,N_]),g(()=>{let q0=new Set(Z.map((s)=>s.id)),v=new Set(_0.current.keys()),n=new Set(j0.current.keys());for(let s of Array.from(P.current.keys()))if(!kw({panePath:s,openTabIds:q0,pendingDetachedTabPaths:v,detachedTabPaths:n,terminalTabPath:Q,hasPendingDetachedDockPane:Boolean(h.current),hasDetachedDockPane:Boolean(O0.current)}))P.current.delete(s)},[Z,Q]),g(()=>{if($||typeof window>"u")return;let q0=(v)=>{if(v.origin!==window.location.origin)return;let n=v.data;if(!n||typeof n!=="object")return;if(n.type==="piclaw-pane-detach-claim"){c0({panePath:n.panePath,paneInstanceId:n.paneInstanceId,paneWindowId:n.paneWindowId},v.source);return}if(n.type!=="piclaw-pane-reattach-request")return;let s=xw({payload:n}),G0=s?.panePath||"";if(!G0)return;if(s?.editorTransfer)k.current.set(G0,s.editorTransfer);if(s?.hostTransfer)if(W.current.set(G0,s.hostTransfer),s.allowLiveTransfer&&v.source)T.current.set(G0,v.source);else T.current.delete(G0);let N0=j0.current.get(G0)||null,T0=G0===Q?O0.current:null,J0=b5({panePath:G0,terminalTabPath:Q}),M0=N0||T0;if(!M0)return;if(s?.paneInstanceId&&s.paneInstanceId!==M0.paneInstanceId)return;if(i8({panePath:G0,terminalTabPath:Q})){T.current.delete(G0),y.current.delete(G0),W.current.delete(G0),k.current.delete(G0);return}if(s?.hostTransfer&&s.allowLiveTransfer&&J0)y.current.set(G0,{panePath:G0,paneInstanceId:M0.paneInstanceId,paneWindowId:M0.ownerWindowId});else y.current.delete(G0);if(o8({panePath:G0,terminalTabPath:Q,allowLiveTransfer:s?.allowLiveTransfer,reason:"message"})){T.current.delete(G0),b.current.delete(G0),c.current.delete(G0),r.current.add(G0);return}s0(G0,{allowLiveTransfer:s?.allowLiveTransfer,reason:"message"})};return window.addEventListener("message",q0),()=>window.removeEventListener("message",q0)},[c0,$,s0,Q]),g(()=>{if($||typeof window>"u"||typeof document>"u")return;let q0=()=>e0();window.addEventListener("focus",q0),window.addEventListener("pageshow",q0),document.addEventListener("visibilitychange",q0);let v=setInterval(()=>{e0();for(let[n,s]of b.current.entries()){if(!s||!s.closed)continue;if(n===Q?Boolean(h.current):_0.current.has(n)){b.current.delete(n),R0(n);continue}if(i8({panePath:n,terminalTabPath:Q})){i0(n);continue}if(o8({panePath:n,terminalTabPath:Q,allowLiveTransfer:!1,reason:"closed-window"})){b.current.delete(n),c.current.delete(n),r.current.add(n);continue}if(r.current.has(n)){b.current.delete(n);continue}s0(n,{allowLiveTransfer:!1,reason:"closed-window"})}},750);return()=>{window.removeEventListener("focus",q0),window.removeEventListener("pageshow",q0),document.removeEventListener("visibilitychange",q0),clearInterval(v)}},[i0,R0,e0,$,s0,Q]),g(()=>{if(!$||!j)return;if(j_.getActiveId()===j)return;let v=O.current?.path===j?O.current:null,n=x.current?.path===j?x.current:null;B(j,{...G?{label:G}:{},...v?.paneOverrideId?{paneOverrideId:v.paneOverrideId}:{},...v?.viewState?{viewState:v.viewState}:{},...n?.payload?.diffMode?{diffMode:n.payload.diffMode}:{}})},[B,G,$,j]),g(()=>{if(!$)return;let q0=I.current;if(!l4(q0))return;if(typeof window>"u"||!window.opener||window.opener.closed)return;aj(window.opener,{type:"piclaw-pane-detach-claim",panePath:q0.panePath,paneInstanceId:q0.paneInstanceId,paneWindowId:q0.paneWindowId},window.location.origin)},[$]),g(()=>{let q0=D.current;if(!q0)return;if(E.current)E.current.dispose(),E.current=null;let v=L;if(!v)return;if(!$&&l0?.panePath===v){q0.innerHTML="";return}let n=O.current?.path===v?O.current:null,s=k.current.get(v)||null,G0=n||s,N0=x.current?.path===v?x.current:null,T0=W.current.get(v)||null,J0=N0||T0,M0=H_||G0?.paneOverrideId||null,y0=J0?.payload?{...J0.payload}:null;if(x0.current)y0={...y0||{},diffMode:x0.current};else if(y0&&"diffMode"in y0)delete y0.diffMode;let h0={path:v,mode:"edit",...G0?.content!==void 0?{content:G0.content}:{},...G0?.mtime!==void 0?{mtime:G0.mtime}:{},...y0?{transferState:y0}:{}},S0=(M0?q_.get(M0):null)||q_.resolve(h0)||q_.get("editor");if(!S0){q0.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let d0=null,__=!1,I0=(w0)=>{d0=w0,E.current=w0,w0.onDirtyChange?.((d)=>{j_.setDirty(v,d)}),w0.onSaveRequest?.(()=>{}),w0.onClose?.(()=>{U()});let D_=j_.getViewState(v);if(D_&&typeof w0.restoreViewState==="function")requestAnimationFrame(()=>w0.restoreViewState(D_));if(typeof w0.onViewStateChange==="function")w0.onViewStateChange((d)=>{j_.saveViewState(v,d)});let $_=I.current;if($&&l4($_)&&typeof w0?.moveHost==="function"&&b5({panePath:v,terminalTabPath:Q}))u5({panePath:v,paneInstanceId:$_.paneInstanceId||"",paneWindowId:$_.paneWindowId||"",instance:w0,releaseSourceHost:()=>{if(z.current===w0)z.current=null;if(E.current===w0)E.current=null}});gN(w0,{path:v,hostMode:$?"popout":"main",transferState:y0}).catch((d)=>{console.warn("[pane-attach] afterAttachToHost failed:",d)}),requestAnimationFrame(()=>w0.focus?.())};return(async()=>{let w0=I.current,D_=$&&l4(w0)&&w0.panePath===v?{panePath:v,paneInstanceId:w0.paneInstanceId||"",paneWindowId:w0.paneWindowId||""}:null,$_=y.current.get(v)||null,d=b5({panePath:v,terminalTabPath:Q})?D_||$_:null,B0=$?typeof window<"u"&&window.opener&&!window.opener.closed?window.opener:null:T.current.get(v)||null,r0=$?"popout":"main";if(J0&&d&&B0)try{let G_=await zF(B0,d,q0,{path:v,hostMode:r0,transferState:y0});if(!__&&G_){if(I0(G_),n)O.current=null;if(s)k.current.delete(v);if(N0)x.current=null;if(T0)W.current.delete(v);T.current.delete(v),y.current.delete(v);return}}catch(G_){console.warn("[pane-live-transfer] Failed to claim live pane instance:",G_)}if(__)return;if(I0(S0.mount(q0,h0)),n)O.current=null;if(s)k.current.delete(v);if(N0)x.current=null;if(T0)W.current.delete(v);T.current.delete(v),y.current.delete(v)})(),()=>{if(__=!0,E.current===d0)d0.dispose(),E.current=null}},[l0,H_,U,$,L]),g(()=>{let q0=L,v=E.current;if(!q0||typeof v?.setDiffMode!=="function")return;v.setDiffMode(g0)},[g0,L]);let f_=f(async(q0)=>{let v=typeof L==="string"?L.trim():"",n=E.current;if(!v||!n?.setContent)return;if(typeof n.isDirty==="function"&&n.isDirty())return;if(!yw(v,q0))return;try{let s=await H(v,1e6,"edit"),G0=typeof s?.text==="string"?s.text:"",N0=typeof s?.mtime==="string"&&s.mtime.trim()?s.mtime.trim():new Date().toISOString();n.setContent(G0,N0)}catch(s){console.warn("[workspace_update] Failed to refresh active pane:",s)}},[H,L]);return g(()=>{let q0=M.current;if(z.current)z.current.dispose(),z.current=null;if(!q0||!a||!X0)return;if(!$&&a0?.panePath===Q){q0.innerHTML="";return}let v=q_.getDockPanes()[0];if(!v){q0.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let n=x.current?.path===Q?x.current:null,s=W.current.get(Q)||null,G0=n||s,N0=v.mount(q0,{mode:"view",...G0?.payload?{transferState:G0.payload}:{}});if(z.current=N0,gN(N0,{path:Q,hostMode:$?"popout":"main",transferState:G0?.payload||null}).catch((T0)=>{console.warn("[pane-attach] afterAttachToHost failed:",T0)}),n)x.current=null;if(s)W.current.delete(Q);return requestAnimationFrame(()=>N0.focus?.()),()=>{if(z.current===N0)N0.dispose(),z.current=null}},[a0,X0,a,$,Q]),{editorContainerRef:D,editorInstanceRef:E,dockContainerRef:M,dockInstanceRef:z,hasDockPanes:a,dockVisible:X0,setDockVisible:W0,toggleDock:P0,openTerminalTab:p0,openVncTab:u0,panePopoutTitle:E0,panePopoutHasMenuActions:n0,hidePanePopoutControls:Q_,showEditorPaneContainer:E_,zenMode:N_,exitZenMode:W_,toggleZenMode:s_,refreshActiveEditorFromWorkspace:f_,detachedTabs:H0,activeDetachedTab:l0,detachedDockPane:a0,buildPaneDetachTransfer:U_,registerDetachedPaneWindow:X_,reattachPane:m0,requestPanePopoutReattach:L_,canReattachPanePopout:$&&l4(I.current)&&!i8({panePath:j||"",terminalTabPath:Q})}}function Cw(_){return{removeFileRefRef:_.removeFileRefRef,editorState:_.editorState,paneRuntime:_.paneRuntime}}function vN(_){let $=u(null),j=CN({onTabClosed:(Y)=>$.current?.(Y)}),G=bN({panePopoutMode:_.panePopoutMode,panePopoutPath:_.panePopoutPath,panePopoutLabel:_.panePopoutLabel,chatOnlyMode:_.chatOnlyMode,editorOpen:j.editorOpen,tabStripTabs:j.tabStripTabs,tabStripActiveId:j.tabStripActiveId,previewTabs:j.previewTabs,diffTabs:j.diffTabs,tabPaneOverrides:j.tabPaneOverrides,terminalTabPath:_.terminalTabPath,vncTabPrefix:_.vncTabPrefix,openEditor:j.openEditor,closeEditor:j.closeEditor,getWorkspaceFile:_.getWorkspaceFile});return Cw({removeFileRefRef:$,editorState:j,paneRuntime:G})}T_();var t8=1280,e8=820;function a8(_){if(typeof _!=="number"||!Number.isFinite(_)||_<=0)return null;return _}function l6(_){return typeof _==="string"&&_.trim()?_.trim():null}function Pw(_){let $=l6(_);if(!$)return!1;if($.startsWith("/")||$.startsWith("\\"))return!1;if($.includes("://"))return!1;if($==="."||$===".."||$.startsWith("../"))return!1;return!0}function Rw(_){if(_.isMobile)return!1;let $=a8(_.windowWidth),j=a8(_.windowHeight);if($===null||j===null)return!1;if($<t8||j<e8)return!1;let G=a8(_.screenWidth),Y=a8(_.screenHeight);if(G!==null&&G<t8)return!1;if(Y!==null&&Y<e8)return!1;return!0}function fw(_){let $=_?.navigator,j=String($?.userAgent||""),G=Number($?.maxTouchPoints||0);return(typeof _?.matchMedia==="function"?Boolean(_.matchMedia("(pointer: coarse)")?.matches):!1)||G>1||/Android|iPhone|iPad|iPod/i.test(j)}function Sw(_){if(!_||_.kind!=="custom")return null;let $=l6(_.request_id),j=_.options&&typeof _.options==="object"?_.options:null;if(!$||!j||j.action!=="open_workspace_file")return null;let G=l6(j.path);if(!Pw(G))return null;let Y=j.target==="tab"?"tab":"popout";return{requestId:$,chatJid:l6(_.chat_jid),path:G,label:l6(j.label),target:Y}}async function gw(_,$,j){await W5(_,$,j||void 0)}async function mN(_,$){let j=Sw(_?.detail?.payload);if(!j)return!1;if(j.chatJid&&j.chatJid!==$.currentChatJid)return!1;let G=$.respond||gw,Y=$.windowObject||(typeof window<"u"?window:void 0),X={width:Number(Y?.innerWidth||0)||void 0,height:Number(Y?.innerHeight||0)||void 0},Z={width:t8,height:e8};if(j.target==="popout"){if(!Rw({windowWidth:Y?.innerWidth,windowHeight:Y?.innerHeight,screenWidth:Y?.screen?.availWidth,screenHeight:Y?.screen?.availHeight,isMobile:fw(Y)}))return $.showIntentToast?.("Editor popout unavailable",`Need at least ${t8}×${e8} viewport space for a separate editor window.`,"warning",4500),await G(j.requestId,{ok:!1,opened:!1,reason:"insufficient_screen_space",detail:"Browser viewport is too small for a separate editor window.",target:j.target,path:j.path,viewport:X,minimum_viewport:Z},j.chatJid),!0;let V=await $.popOutPane(j.path,j.label);return await G(j.requestId,{ok:V,opened:V,reason:V?void 0:"popout_failed",detail:V?void 0:"The browser blocked the editor popout window.",target:j.target,path:j.path},j.chatJid),!0}return $.openEditor(j.path),await G(j.requestId,{ok:!0,opened:!0,target:j.target,path:j.path},j.chatJid),!0}var tj="piclaw:oobe:provider-missing:dismissed";function uw(_){if(!_||typeof _!=="object")return 0;let $=Array.isArray(_.model_options)?_.model_options.filter(Boolean):[];if($.length>0)return $.length;return(Array.isArray(_.models)?_.models.filter((G)=>typeof G==="string"&&G.trim()):[]).length}function bw(_){if(!_||typeof _!=="object")return!1;let $=_.current;return typeof $==="string"&&$.trim().length>0}function cN(_){let{panePopoutMode:$=!1,modelsLoaded:j,modelPayload:G,providerMissingDismissed:Y=!1}=_,X=uw(G),Z=X>0,L=bw(G),V=Z||L;if($||!j)return{kind:"hidden",hasAvailableModels:Z,availableModelCount:X,hasConfiguredModelHint:L};if(V)return{kind:"hidden",hasAvailableModels:Z,availableModelCount:X,hasConfiguredModelHint:L};return{kind:Y?"hidden":"provider-missing",hasAvailableModels:Z,availableModelCount:X,hasConfiguredModelHint:L}}var vw=rQ();await ZK();var{searchPosts:mw,deletePost:cw,getAgents:hw,getAgentThought:hN,setAgentThoughtVisibility:lN,getAgentStatus:lw,getAgentContext:pw,getAutoresearchStatus:rw,stopAutoresearch:nw,dismissAutoresearch:dw,getAgentModels:ow,getActiveChatAgents:iw,getChatBranches:sw,renameChatBranch:aw,pruneChatBranch:tw,purgeChatBranch:ew,restoreChatBranch:_I,getAgentQueueState:$I,steerAgentQueueItem:jI,removeAgentQueueItem:GI,streamSidePrompt:YI,getWorkspaceFile:XI,getThread:ZI,getTimeline:LI,sendAgentMessage:qI,forkChatBranch:VI,createRootChatSession:QI}=LK;function KI({locationParams:_,navigate:$}){let{currentChatJid:j,chatOnlyMode:G,panePopoutMode:Y,panePopoutPath:X,panePopoutLabel:Z,branchLoaderMode:L,branchLoaderSourceChatJid:V}=Z0(()=>iQ(_),[_]);g(()=>{if(typeof window>"u")return;window.__piclawCurrentChatJid=j,window.dispatchEvent?.(new CustomEvent("piclaw:current-chat-changed",{detail:{chatJid:j}}))},[j]);let q=IN({currentChatJid:j,branchLoaderMode:L}),[K,Q]=C(()=>E$(tj,!1)),[F,B]=C(null),U=f((R0)=>{let i0=typeof R0==="string"?R0:"";if(!i0.trim())return;B({token:`prefill-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,text:i0})},[]),{agentStatus:H,setAgentStatus:D,agentDraft:E,setAgentDraft:M,agentPlan:z,setAgentPlan:O,agentThought:x,setAgentThought:I,pendingRequest:A,setPendingRequest:k,currentTurnId:W,setCurrentTurnId:T,steerQueuedTurnId:y,setSteerQueuedTurnId:J,lastAgentEventRef:P,lastSilenceNoticeRef:R,isAgentRunningRef:b,draftBufferRef:c,thoughtBufferRef:r,previewResyncPendingRef:e,previewResyncGenerationRef:m,pendingRequestRef:_0,stalledPostIdRef:H0,currentTurnIdRef:Y0,steerQueuedTurnIdRef:j0,thoughtExpandedRef:L0,draftExpandedRef:F0}=JZ(),h=vN({panePopoutMode:Y,panePopoutPath:X,panePopoutLabel:Z,chatOnlyMode:G,terminalTabPath:q5,vncTabPrefix:i1,getWorkspaceFile:XI}),$0=XB({timelineRef:q.timelineRef,viewStateRef:q.viewStateRef,followupQueueRowIdsRef:q.followupQueueRowIdsRef,currentChatJid:j,currentHashtag:q.currentHashtag,searchQuery:q.searchQuery,followupQueueItems:q.followupQueueItems,onIdentity:f((R0)=>{if(!R0)return;let{assistant_name:i0,assistant_avatar_url:m0}=R0;if(i0||m0)q.setAgents((c0)=>{let z0=c0.default||{id:"default"},L_=i0&&!z0.name,o0=m0&&!z0.avatar_url;if(!L_&&!o0)return c0;return{...c0,["default"]:{...z0,...L_?{name:i0}:{},...o0?{avatar_url:m0}:{}}}});let{user_name:e0,user_avatar_url:s0,user_avatar_background:U_}=R0;if(e0||s0||U_)q.setUserProfile((X_)=>{let c0=e0&&!X_.name,z0=s0&&!X_.avatar_url,L_=U_&&!X_.avatar_background;if(!c0&&!z0&&!L_)return X_;return{...X_,...c0?{name:e0}:{},...z0?{avatar_url:s0}:{},...L_?{avatar_background:U_}:{}}})},[q.setAgents,q.setUserProfile])}),V0=rK({environment:{isRenameBranchFormOpen:q.isRenameBranchFormOpen,renameBranchNameInputRef:q.renameBranchNameInputRef,appShellRef:q.appShellRef,setIsWebAppMode:q.setIsWebAppMode,workspaceOpen:q.workspaceOpen,setWorkspaceOpen:q.setWorkspaceOpen,btwSession:q.btwSession,agents:q.agents,agentsRef:q.agentsRef,currentChatJid:j,activeChatJidRef:q.activeChatJidRef,userProfile:q.userProfile,userProfileRef:q.userProfileRef,brandingRef:q.brandingRef,panePopoutMode:Y},composeReferences:{setIntentToast:q.setIntentToast,intentToastTimerRef:q.intentToastTimerRef,editorOpen:h.editorState.editorOpen,openEditor:h.editorState.openEditor,resolvePane:(R0)=>q_.resolve(R0),tabStripActiveId:h.editorState.tabStripActiveId,setFileRefs:q.setFileRefs,setFolderRefs:q.setFolderRefs,setMessageRefs:q.setMessageRefs,currentChatJid:j,currentHashtag:q.currentHashtag,searchQuery:q.searchQuery,searchOpen:q.searchOpen,setCurrentHashtag:q.setCurrentHashtag,setSearchQuery:q.setSearchQuery,setSearchOpen:q.setSearchOpen,navigate:$,chatOnlyMode:G,getThread:ZI,setPosts:$0.setPosts},agentActivity:{lastActivityTtlMs:SZ,lastActivityTimerRef:q.lastActivityTimerRef,lastActivityTokenRef:q.lastActivityTokenRef,lastAgentEventRef:P,lastSilenceNoticeRef:R,isAgentRunningRef:b,setIsAgentTurnActive:q.setIsAgentTurnActive,setAgentStatus:D,draftBufferRef:c,thoughtBufferRef:r,pendingRequestRef:_0,lastAgentResponseRef:q.lastAgentResponseRef,currentTurnIdRef:Y0,steerQueuedTurnIdRef:j0,agentStatusRef:q.agentStatusRef,silentRecoveryRef:q.silentRecoveryRef,thoughtExpandedRef:L0,draftExpandedRef:F0,setCurrentTurnId:T,setSteerQueuedTurnId:J,currentTurnIdRefForPanel:Y0,setAgentThoughtVisibility:lN,getAgentThought:hN,setAgentThought:I,setAgentDraft:M},chatPaneRuntime:{isAgentTurnActive:q.isAgentTurnActive,steerQueuedTurnId:y,currentTurnId:W,steerQueuedTurnIdRef:j0,setSteerQueuedTurnId:J,agentStatus:H,agentDraft:E,agentPlan:z,agentThought:x,pendingRequest:A,pendingRequestRef:_0,followupQueueItems:q.followupQueueItems,activeModel:q.activeModel,activeThinkingLevel:q.activeThinkingLevel,supportsThinking:q.supportsThinking,activeModelUsage:q.activeModelUsage,contextUsage:q.contextUsage,isAgentRunningRef:b,wasAgentActiveRef:q.wasAgentActiveRef,draftBufferRef:c,thoughtBufferRef:r,lastAgentEventRef:P,lastSilenceNoticeRef:R,lastAgentResponseRef:q.lastAgentResponseRef,currentTurnIdRef:Y0,thoughtExpandedRef:L0,draftExpandedRef:F0,agentStatusRef:q.agentStatusRef,silentRecoveryRef:q.silentRecoveryRef,setIsAgentTurnActive:q.setIsAgentTurnActive,setAgentStatus:D,setAgentDraft:M,setAgentPlan:O,setAgentThought:I,setPendingRequest:k,setCurrentTurnId:T,setFollowupQueueItems:q.setFollowupQueueItems,setActiveModel:q.setActiveModel,setActiveThinkingLevel:q.setActiveThinkingLevel,setSupportsThinking:q.setSupportsThinking,setActiveModelUsage:q.setActiveModelUsage,setContextUsage:q.setContextUsage,lastNotifiedIdRef:q.lastNotifiedIdRef,agentsRef:q.agentsRef,notify:q.notify,shouldNotifyLocallyForChat:q.shouldNotifyLocallyForChat},recovery:{isAgentRunningRef:b,lastSilenceNoticeRef:R,lastAgentEventRef:P,currentTurnIdRef:Y0,thoughtExpandedRef:L0,draftExpandedRef:F0,draftBufferRef:c,thoughtBufferRef:r,pendingRequestRef:_0,lastAgentResponseRef:q.lastAgentResponseRef,agentStatusRef:q.agentStatusRef,stalledPostIdRef:H0,scrollToBottomRef:$0.scrollToBottomRef,setCurrentTurnId:T,setAgentDraft:M,setAgentPlan:O,setAgentThought:I,setPendingRequest:k,setAgentStatus:D,setPosts:$0.setPosts,dedupePosts:O5},viewState:{viewStateRef:q.viewStateRef,currentHashtag:q.currentHashtag,searchQuery:q.searchQuery,searchOpen:q.searchOpen},removeFileRefRef:h.removeFileRefRef}),O0=CZ({appShellRef:q.appShellRef,sidebarWidthRef:q.sidebarWidthRef,editorWidthRef:q.editorWidthRef,dockHeightRef:q.dockHeightRef}),{chatRefreshLifecycle:a,timelineViewActions:X0,isComposeBoxAgentActive:W0,followupActions:P0,sidepanelActions:p0,branchPaneActions:u0}=HN({routeState:{currentChatJid:j,currentRootChatJid:q.currentRootChatJid,chatOnlyMode:G,navigate:$,branchLoaderMode:L,branchLoaderSourceChatJid:V,isWebAppMode:q.isWebAppMode},searchState:{currentHashtag:q.currentHashtag,setCurrentHashtag:q.setCurrentHashtag,searchQuery:q.searchQuery,setSearchQuery:q.setSearchQuery,searchOpen:q.searchOpen,setSearchOpen:q.setSearchOpen,searchScope:q.searchScope,setSearchScope:q.setSearchScope},shellState:{activeChatAgents:q.activeChatAgents,currentChatBranches:q.currentChatBranches,currentBranchRecord:q.currentBranchRecord,contextUsage:q.contextUsage,activeModel:q.activeModel,activeThinkingLevel:q.activeThinkingLevel,supportsThinking:q.supportsThinking,activeModelUsage:q.activeModelUsage,connectionStatus:q.connectionStatus,notificationsEnabled:q.notificationsEnabled,notificationPermission:q.notificationPermission,workspaceOpen:q.workspaceOpen,setWorkspaceOpen:q.setWorkspaceOpen,userProfile:q.userProfile,agents:q.agents,removingPostIds:q.removingPostIds,btwSession:q.btwSession},timeline:$0,interaction:V0,paneRuntime:h.paneRuntime,refs:{activeChatJidRef:q.activeChatJidRef,queueRefreshGenRef:q.queueRefreshGenRef,dismissedQueueRowIdsRef:q.dismissedQueueRowIdsRef,wasAgentActiveRef:q.wasAgentActiveRef,viewStateRef:q.viewStateRef,agentStatusRef:q.agentStatusRef,pendingRequestRef:_0,thoughtBufferRef:r,draftBufferRef:c,previewResyncPendingRef:e,previewResyncGenerationRef:m,isAgentRunningRef:b,currentTurnIdRef:Y0,silentRecoveryRef:q.silentRecoveryRef,lastAgentEventRef:P,lastSilenceNoticeRef:R,staleUiVersionRef:q.staleUiVersionRef,staleUiReloadScheduledRef:q.staleUiReloadScheduledRef,hasConnectedOnceRef:q.hasConnectedOnceRef,sidebarWidthRef:q.sidebarWidthRef,appShellRef:q.appShellRef,agentsRef:q.agentsRef,paneStateOwnerChatJidRef:q.paneStateOwnerChatJidRef,chatPaneStateByChatRef:q.chatPaneStateByChatRef,dismissedLiveWidgetKeysRef:q.dismissedLiveWidgetKeysRef,draftThrottleRef:q.draftThrottleRef,thoughtThrottleRef:q.thoughtThrottleRef,followupQueueItemsRef:q.followupQueueItemsRef,lastAgentResponseRef:q.lastAgentResponseRef,thoughtExpandedRef:L0,draftExpandedRef:F0,steerQueuedTurnIdRef:j0,btwAbortRef:q.btwAbortRef,renameBranchInFlightRef:q.renameBranchInFlightRef,renameBranchLockUntilRef:q.renameBranchLockUntilRef,editorWidthRef:q.editorWidthRef,dockHeightRef:q.dockHeightRef},setters:{setFollowupQueueItems:q.setFollowupQueueItems,setContextUsage:q.setContextUsage,setExtensionStatusPanels:q.setExtensionStatusPanels,setPendingExtensionPanelActions:q.setPendingExtensionPanelActions,setExtensionWorkingState:q.setExtensionWorkingState,setAgentStatus:D,setAgentDraft:M,setAgentPlan:O,setAgentThought:I,setPendingRequest:k,setConnectionStatus:q.setConnectionStatus,setStateAccessFailed:q.setStateAccessFailed,setAgents:q.setAgents,setUserProfile:q.setUserProfile,setActiveChatAgents:q.setActiveChatAgents,setCurrentChatBranches:q.setCurrentChatBranches,setActiveModel:q.setActiveModel,setActiveThinkingLevel:q.setActiveThinkingLevel,setSupportsThinking:q.setSupportsThinking,setActiveModelUsage:q.setActiveModelUsage,setAgentModelsPayload:q.setAgentModelsPayload,setHasLoadedAgentModels:q.setHasLoadedAgentModels,setHasMore:$0.setHasMore,setFloatingWidget:q.setFloatingWidget,setSteerQueuedTurnId:J,setRemovingPostIds:q.setRemovingPostIds,setBtwSession:q.setBtwSession,setWorkspaceOpen:q.setWorkspaceOpen,setRenameBranchNameDraft:q.setRenameBranchNameDraft,setIsRenameBranchFormOpen:q.setIsRenameBranchFormOpen,setIsRenamingBranch:q.setIsRenamingBranch},services:{searchPosts:mw,deletePost:cw,getAgentQueueState:$I,getAgentContext:pw,getAutoresearchStatus:rw,getAgentStatus:lw,getAgents:hw,getAgentModels:ow,getActiveChatAgents:iw,getChatBranches:sw,getTimeline:LI,stopAutoresearch:nw,dismissAutoresearch:dw,streamSidePrompt:YI,sendAgentMessage:qI,renameChatBranch:aw,pruneChatBranch:tw,purgeChatBranch:ew,restoreChatBranch:_I,forkChatBranch:VI,createRootChatSession:QI,steerAgentQueueItem:jI,removeAgentQueueItem:GI,getAgentThought:hN,setAgentThoughtVisibility:lN,silenceRefreshMs:fZ,silenceWarningMs:PZ,silenceFinalizeMs:RZ,isCompactionStatus:z$,currentAppAssetVersion:vw,tabStoreHasUnsaved:()=>j_.hasUnsaved(),agentStatus:H,isAgentTurnActive:q.isAgentTurnActive,openEditor:h.editorState.openEditor,activateTab:h.editorState.handleTabActivate,tabStripActiveId:h.editorState.tabStripActiveId,terminalTabPath:q5,resolveTab:(R0)=>j_.get(R0),closeTab:h.editorState.handleTabClose,editorOpen:h.editorState.editorOpen},helpers:{getFormLock:nQ,readStoredNumber:z4}});g(()=>{return EN({timelineRef:q.timelineRef,activeChatAgents:q.activeChatAgents,currentChatJid:j,onSwitch:(R0)=>u0.handleBranchPickerChange(R0),isIOSDevice:z6,isLikelySafari:s8})},[q.timelineRef,q.activeChatAgents,j,u0.handleBranchPickerChange]);let Y_=Z0(()=>cN({panePopoutMode:Y,modelsLoaded:q.hasLoadedAgentModels,modelPayload:q.agentModelsPayload,providerMissingDismissed:K}),[Y,q.hasLoadedAgentModels,q.agentModelsPayload,K]),l0=f(()=>{jq()},[]),a0=f(()=>{Q(!0),V_(tj,"true")},[]);return g(()=>{if(!Y||typeof document>"u")return;document.title=tQ(Z,h.paneRuntime.activePaneTab,X)},[h.paneRuntime.activePaneTab,Z,Y,X]),g(()=>{if(typeof window>"u")return;let R0=(i0)=>{mN(i0,{currentChatJid:j,openEditor:h.editorState.openEditor,popOutPane:u0.handlePopOutPane,showIntentToast:V0.composeReferenceActions.showIntentToast})};return window.addEventListener("piclaw-extension-ui:request",R0),()=>{window.removeEventListener("piclaw-extension-ui:request",R0)}},[u0.handlePopOutPane,j,V0.composeReferenceActions.showIntentToast,h.editorState.openEditor]),hQ(VK({routeState:{branchLoaderMode:L,panePopoutMode:Y,currentChatJid:j,chatOnlyMode:G,panePopoutPath:X},paneRuntime:h.paneRuntime,splitters:O0,orchestration:{branchPaneActions:u0,timelineViewActions:X0,sidepanelActions:p0,followupActions:P0,chatRefreshLifecycle:a,isComposeBoxAgentActive:W0},interaction:V0,timeline:$0,surface:{...q,oobePanelState:Y_,composePrefillRequest:F,requestComposePrefill:U,handleOobeSetupProvider:l0,handleOobeShowModelPicker:l0,handleOobeOpenWorkspace:l0,handleDismissProviderMissingOobe:a0},editorState:h.editorState,agentState:{agentStatus:H,agentDraft:E,agentPlan:z,agentThought:x,pendingRequest:A,currentTurnId:W,steerQueuedTurnId:y,setPendingRequest:k,pendingRequestRef:_0,isCompactionStatus:z$},helpers:{formatBranchPickerLabel:L8,isIOSDevice:z6,terminalTabPath:q5}}))}function BI(){let{locationParams:_,navigate:$}=Yq();return N`<${KI} locationParams=${_} navigate=${$} />`}var _3=document.getElementById("app");if(typeof window<"u")window.__PICLAW_APP_BOOTED__=!1;if(_3){if(F$(null,_3),_3.replaceChildren(),F$(N`<${BI} />`,_3),typeof window<"u")window.__PICLAW_APP_BOOTED__=!0}

//# debugId=74DADCAA0AF8724E64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
