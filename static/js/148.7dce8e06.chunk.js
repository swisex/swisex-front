"use strict";(self.webpackChunkswisex_front=self.webpackChunkswisex_front||[]).push([[148],{14354:function(e,t,n){n.d(t,{a:function(){return a}});var r=n(62949);function a(e,t){var n=e.append("foreignObject").attr("width","100000"),a=n.append("xhtml:div");a.attr("xmlns","http://www.w3.org/1999/xhtml");var l=t.label;switch(typeof l){case"function":a.insert(l);break;case"object":a.insert((function(){return l}));break;default:a.html(l)}r.bg(a,t.labelStyle),a.style("display","inline-block"),a.style("white-space","nowrap");var o=a.node().getBoundingClientRect();return n.attr("width",o.width).attr("height",o.height),n}},62949:function(e,t,n){n.d(t,{$p:function(){return d},O1:function(){return o},WR:function(){return p},bF:function(){return l},bg:function(){return s}});var r=n(26759),a=n(9884);function l(e,t){return!!e.children(t).length}function o(e){return c(e.v)+":"+c(e.w)+":"+c(e.name)}var i=/:/g;function c(e){return e?String(e).replace(i,"\\:"):""}function s(e,t){t&&e.attr("style",t)}function d(e,t,n){t&&e.attr("class",t).attr("class",n+" "+e.attr("class"))}function p(e,t){var n=t.graph();if(r.Z(n)){var l=n.transition;if(a.Z(l))return l(e)}return e}},80148:function(e,t,n){n.d(t,{a:function(){return v},f:function(){return k}});var r=n(74165),a=n(15861),l=n(37762),o=n(48433),i=n(13501),c=n(58971),s=n(46010),d=n(14354),p=n(36046),u=n(96697),b=function(e,t){return p.Z.lang.round(u.Z.parse(e)[t])},f=n(56896),w={},h=function(e,t,n,r,a,o){var i=r.select('[id="'.concat(n,'"]'));Object.keys(e).forEach((function(n){var r=e[n],s="default";r.classes.length>0&&(s=r.classes.join(" ")),s+=" flowchart-label";var p,u=(0,c.k)(r.styles),b=void 0!==r.text?r.text:r.id;if(c.l.info("vertex",r,r.labelType),"markdown"===r.labelType)c.l.info("vertex",r,r.labelType);else if((0,c.n)((0,c.c)().flowchart.htmlLabels)){var f={label:b.replace(/fa[blrs]?:fa-[\w-]+/g,(function(e){return"<i class='".concat(e.replace(":"," "),"'></i>")}))};(p=(0,d.a)(i,f).node()).parentNode.removeChild(p)}else{var w=a.createElementNS("http://www.w3.org/2000/svg","text");w.setAttribute("style",u.labelStyle.replace("color:","fill:"));var h,g=b.split(c.e.lineBreakRegex),y=(0,l.Z)(g);try{for(y.s();!(h=y.n()).done;){var k=h.value,v=a.createElementNS("http://www.w3.org/2000/svg","tspan");v.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),v.setAttribute("dy","1em"),v.setAttribute("x","1"),v.textContent=k,w.appendChild(v)}}catch(S){y.e(S)}finally{y.f()}p=w}var x=0,m="";switch(r.type){case"round":x=5,m="rect";break;case"square":case"group":default:m="rect";break;case"diamond":m="question";break;case"hexagon":m="hexagon";break;case"odd":case"odd_right":m="rect_left_inv_arrow";break;case"lean_right":m="lean_right";break;case"lean_left":m="lean_left";break;case"trapezoid":m="trapezoid";break;case"inv_trapezoid":m="inv_trapezoid";break;case"circle":m="circle";break;case"ellipse":m="ellipse";break;case"stadium":m="stadium";break;case"subroutine":m="subroutine";break;case"cylinder":m="cylinder";break;case"doublecircle":m="doublecircle"}t.setNode(r.id,{labelStyle:u.labelStyle,shape:m,labelText:b,labelType:r.labelType,rx:x,ry:x,class:s,style:u.style,id:r.id,link:r.link,linkTarget:r.linkTarget,tooltip:o.db.getTooltip(r.id)||"",domId:o.db.lookUpDomId(r.id),haveCallback:r.haveCallback,width:"group"===r.type?500:void 0,dir:r.dir,type:r.type,props:r.props,padding:(0,c.c)().flowchart.padding}),c.l.info("setNode",{labelStyle:u.labelStyle,labelType:r.labelType,shape:m,labelText:b,rx:x,ry:x,class:s,style:u.style,id:r.id,domId:o.db.lookUpDomId(r.id),width:"group"===r.type?500:void 0,type:r.type,dir:r.dir,props:r.props,padding:(0,c.c)().flowchart.padding})}))},g=function(e,t,n){c.l.info("abc78 edges = ",e);var r,a,l=0,o={};if(void 0!==e.defaultStyle){var s=(0,c.k)(e.defaultStyle);r=s.style,a=s.labelStyle}e.forEach((function(n){l++;var s="L-"+n.start+"-"+n.end;void 0===o[s]?(o[s]=0,c.l.info("abc78 new entry",s,o[s])):(o[s]++,c.l.info("abc78 new entry",s,o[s]));var d=s+"-"+o[s];c.l.info("abc78 new link id to be used is",s,d,o[s]);var p="LS-"+n.start,u="LE-"+n.end,b={style:"",labelStyle:""};switch(b.minlen=n.length||1,"arrow_open"===n.type?b.arrowhead="none":b.arrowhead="normal",b.arrowTypeStart="arrow_open",b.arrowTypeEnd="arrow_open",n.type){case"double_arrow_cross":b.arrowTypeStart="arrow_cross";case"arrow_cross":b.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":b.arrowTypeStart="arrow_point";case"arrow_point":b.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":b.arrowTypeStart="arrow_circle";case"arrow_circle":b.arrowTypeEnd="arrow_circle"}var f="",h="";switch(n.stroke){case"normal":f="fill:none;",void 0!==r&&(f=r),void 0!==a&&(h=a),b.thickness="normal",b.pattern="solid";break;case"dotted":b.thickness="normal",b.pattern="dotted",b.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":b.thickness="thick",b.pattern="solid",b.style="stroke-width: 3.5px;fill:none;";break;case"invisible":b.thickness="invisible",b.pattern="solid",b.style="stroke-width: 0;fill:none;"}if(void 0!==n.style){var g=(0,c.k)(n.style);f=g.style,h=g.labelStyle}b.style=b.style+=f,b.labelStyle=b.labelStyle+=h,void 0!==n.interpolate?b.curve=(0,c.o)(n.interpolate,i.c_6):void 0!==e.defaultInterpolate?b.curve=(0,c.o)(e.defaultInterpolate,i.c_6):b.curve=(0,c.o)(w.curve,i.c_6),void 0===n.text?void 0!==n.style&&(b.arrowheadStyle="fill: #333"):(b.arrowheadStyle="fill: #333",b.labelpos="c"),b.labelType=n.labelType,b.label=n.text.replace(c.e.lineBreakRegex,"\n"),void 0===n.style&&(b.style=b.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),b.labelStyle=b.labelStyle.replace("color:","fill:"),b.id=d,b.classes="flowchart-link "+p+" "+u,t.setEdge(n.start,n.end,b,l)}))},y=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n,a,d){var p,u,b,f,w,y,k,v,x,m,S,T,_,C,E,B,A,L,N,Z,D,j,z,I,O;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(c.l.info("Drawing flowchart"),void 0===(p=d.db.getDirection())&&(p="TD"),u=(0,c.c)(),b=u.securityLevel,f=u.flowchart,w=f.nodeSpacing||50,y=f.rankSpacing||50,"sandbox"===b&&(k=(0,i.Ys)("#i"+n)),v="sandbox"===b?(0,i.Ys)(k.nodes()[0].contentDocument.body):(0,i.Ys)("body"),x="sandbox"===b?k.nodes()[0].contentDocument:document,m=new o.k({multigraph:!0,compound:!0}).setGraph({rankdir:p,nodesep:w,ranksep:y,marginx:0,marginy:0}).setDefaultEdgeLabel((function(){return{}})),T=d.db.getSubGraphs(),c.l.info("Subgraphs - ",T),_=T.length-1;_>=0;_--)S=T[_],c.l.info("Subgraph - ",S),d.db.addVertex(S.id,{text:S.title,type:S.labelType},"group",void 0,S.classes,S.dir);for(C=d.db.getVertices(),E=d.db.getEdges(),c.l.info("Edges",E),B=0,B=T.length-1;B>=0;B--)for(S=T[B],(0,i.td_)("cluster").append("text"),A=0;A<S.nodes.length;A++)c.l.info("Setting up subgraphs",S.nodes[A],S.id),m.setParent(S.nodes[A],S.id);return h(C,m,n,v,x,d),g(E,m),L=v.select('[id="'.concat(n,'"]')),N=v.select("#"+n+" g"),e.next=24,(0,s.r)(N,m,["point","circle","cross"],"flowchart",n);case 24:if(c.u.insertTitle(L,"flowchartTitleText",f.titleTopMargin,d.db.getDiagramTitle()),(0,c.p)(m,L,f.diagramPadding,f.useMaxWidth),d.db.indexNodes("subGraph"+B),!f.htmlLabels){Z=x.querySelectorAll('[id="'+n+'"] .edgeLabel .label'),D=(0,l.Z)(Z);try{for(D.s();!(j=D.n()).done;)z=j.value,I=z.getBBox(),(O=x.createElementNS("http://www.w3.org/2000/svg","rect")).setAttribute("rx",0),O.setAttribute("ry",0),O.setAttribute("width",I.width),O.setAttribute("height",I.height),z.insertBefore(O,z.firstChild)}catch(t){D.e(t)}finally{D.f()}}Object.keys(C).forEach((function(e){var t=C[e];if(t.link){var r=(0,i.Ys)("#"+n+' [id="'+e+'"]');if(r){var a=x.createElementNS("http://www.w3.org/2000/svg","a");a.setAttributeNS("http://www.w3.org/2000/svg","class",t.classes.join(" ")),a.setAttributeNS("http://www.w3.org/2000/svg","href",t.link),a.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===b?a.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):t.linkTarget&&a.setAttributeNS("http://www.w3.org/2000/svg","target",t.linkTarget);var l=r.insert((function(){return a}),":first-child"),o=r.select(".label-container");o&&l.append((function(){return o.node()}));var c=r.select(".label");c&&l.append((function(){return c.node()}))}}}));case 30:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),k={setConf:function(e){for(var t=0,n=Object.keys(e);t<n.length;t++){var r=n[t];w[r]=e[r]}},addVertices:h,addEdges:g,getClasses:function(e,t){return t.db.getClasses()},draw:y},v=function(e){return".label {\n    font-family: ".concat(e.fontFamily,";\n    color: ").concat(e.nodeTextColor||e.textColor,";\n  }\n  .cluster-label text {\n    fill: ").concat(e.titleColor,";\n  }\n  .cluster-label span,p {\n    color: ").concat(e.titleColor,";\n  }\n\n  .label text,span,p {\n    fill: ").concat(e.nodeTextColor||e.textColor,";\n    color: ").concat(e.nodeTextColor||e.textColor,";\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ").concat(e.mainBkg,";\n    stroke: ").concat(e.nodeBorder,";\n    stroke-width: 1px;\n  }\n  .flowchart-label text {\n    text-anchor: middle;\n  }\n  // .flowchart-label .text-outer-tspan {\n  //   text-anchor: middle;\n  // }\n  // .flowchart-label .text-inner-tspan {\n  //   text-anchor: start;\n  // }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ").concat(e.arrowheadColor,";\n  }\n\n  .edgePath .path {\n    stroke: ").concat(e.lineColor,";\n    stroke-width: 2.0px;\n  }\n\n  .flowchart-link {\n    stroke: ").concat(e.lineColor,";\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ").concat(e.edgeLabelBackground,";\n    rect {\n      opacity: 0.5;\n      background-color: ").concat(e.edgeLabelBackground,";\n      fill: ").concat(e.edgeLabelBackground,";\n    }\n    text-align: center;\n  }\n\n  /* For html labels only */\n  .labelBkg {\n    background-color: ").concat(function(e,t){var n=b,r=n(e,"r"),a=n(e,"g"),l=n(e,"b");return f.Z(r,a,l,t)}(e.edgeLabelBackground,.5),";\n    // background-color: \n  }\n\n  .cluster rect {\n    fill: ").concat(e.clusterBkg,";\n    stroke: ").concat(e.clusterBorder,";\n    stroke-width: 1px;\n  }\n\n  .cluster text {\n    fill: ").concat(e.titleColor,";\n  }\n\n  .cluster span,p {\n    color: ").concat(e.titleColor,";\n  }\n  /* .cluster div {\n    color: ").concat(e.titleColor,";\n  } */\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: ").concat(e.fontFamily,";\n    font-size: 12px;\n    background: ").concat(e.tertiaryColor,";\n    border: 1px solid ").concat(e.border2,";\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .flowchartTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ").concat(e.textColor,";\n  }\n")}}}]);
//# sourceMappingURL=148.7dce8e06.chunk.js.map