(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9208:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9985)}])},9985:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var l=n(5893),o=n(24),s=n(7294),r=n(8239),u=n(2237),c=n(1290);let i=()=>{let[e,t]=(0,s.useState)(0),[n,o]=(0,s.useState)(0),r=async e=>{let n=await c.x.player.$post({body:e});t(n.PlayerPos.x),o(n.PlayerPos.y)};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u.Hf,{width:720,height:720,children:(0,l.jsx)(u.mh,{children:(0,l.jsx)(u.Cd,{x:e,y:n,stroke:"black",fill:"black",radius:50})})}),(0,l.jsx)("button",{onClick:()=>{r({PlayerPos:{x:e,y:n},MoveInput:"down"}),console.log(n)},children:"down"}),(0,l.jsx)("button",{onClick:()=>{r({PlayerPos:{x:e,y:n},MoveInput:"up"}),console.log(n)},children:"up"}),(0,l.jsx)("button",{onClick:()=>{r({PlayerPos:{x:e,y:n},MoveInput:"left"}),console.log(n)},children:"left"}),(0,l.jsx)("button",{onClick:()=>{r({PlayerPos:{x:e,y:n},MoveInput:"right"}),console.log(n)},children:"right"})]})};var a=n(3377),h=n(5371);let x=()=>{let[e]=(0,o.KO)(h.L),[t,n]=(0,s.useState)(),[u,x]=(0,s.useState)(""),d=async()=>{let e=await c.x.tasks.$get().catch(a.F);null!==e&&n(e)};return((0,s.useEffect)(()=>{d()},[]),t&&e)?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(i,{})}):(0,l.jsx)(r.g,{visible:!0})};var d=x}},function(e){e.O(0,[237,774,888,179],function(){return e(e.s=9208)}),_N_E=e.O()}]);