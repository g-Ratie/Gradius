(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[378],{6558:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test",function(){return s(2131)}])},2131:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return y}});var o=s(5893),n=s(24),l=s(5371),a=s(8239),r=s(7294),c=s(2237),i=s(1290),u=s(4607),d=s.n(u);let _=()=>{let[e,t]=(0,r.useState)(0),[s,n]=(0,r.useState)(300),[l,a]=(0,r.useState)(500),[u,_]=(0,r.useState)(300),[x,y]=(0,r.useState)([]),[h,p]=(0,r.useState)([]),f=async e=>{let s=await i.x.player.$post({body:e});t(s.PlayerPos.x),n(s.PlayerPos.y)};(0,r.useEffect)(()=>{let e=async()=>{let e={EnemyPos:{x:l,y:u},radius:75},t=await i.x.enemy.$post({body:e});a(t.EnemyPos.x),_(t.EnemyPos.y);let s=[...x,e];y(s)},t=setInterval(e,500);return()=>{clearInterval(t)}},[l,u,x]);let b=async()=>{let t=await i.x.player.shoot.$post({body:{PlayerPos:{x:e,y:s},MoveInput:"none"}}),o=[...h,t];p(o)};return(0,r.useEffect)(()=>{let e=()=>{let e=h.map(e=>({...e,x:e.x+e.speed}));p(e)},t=requestAnimationFrame(e);return()=>{cancelAnimationFrame(t)}},[h]),(0,r.useEffect)(()=>{let e=function(e,t){for(let s=0;s<e.length;s++)for(let o=0;o<t.length;o++){let n=e[s].x-t[o].EnemyPos.x,l=e[s].y-t[o].EnemyPos.y,a=Math.sqrt(n*n+l*l);if(a<e[s].radius+t[o].radius-10)return e.splice(s,1),t.splice(o,1),console.log("hit",e.splice(s,1),t.splice(o,1)),{Bullets:e,Enemys:t}}return{Bullets:e,Enemys:t}}(h,x);p(e.Bullets),y(e.Enemys)},[h,x]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{style:{display:"inline-block",border:"solid"},children:(0,o.jsx)(c.Hf,{width:1e3,height:1e3,stroke:"black",children:(0,o.jsxs)(c.mh,{children:[(0,o.jsx)(c.Cd,{x:e,y:s,stroke:"black",fill:"blue",radius:50}),(0,o.jsx)(c.Cd,{x:l,y:u,stroke:"black",fill:"red",radius:75}),h.map((e,t)=>(0,o.jsx)(c.Cd,{x:e.x,y:e.y,stroke:"black",fill:"green",radius:e.radius},t))]})})}),(0,o.jsxs)("div",{className:d().board,children:[(0,o.jsxs)("div",{className:d().container,children:[(0,o.jsx)("div",{className:d().button}),(0,o.jsx)("div",{className:"".concat(d().button," ").concat(d().up),onClick:()=>{f({PlayerPos:{x:e,y:s},MoveInput:"up"}),console.log(s)}}),(0,o.jsx)("div",{className:d().button}),(0,o.jsx)("div",{className:"".concat(d().button," ").concat(d().left),onClick:()=>{f({PlayerPos:{x:e,y:s},MoveInput:"left"}),console.log(s)}}),(0,o.jsx)("div",{className:d().button,children:"〇"}),(0,o.jsx)("div",{className:"".concat(d().button," ").concat(d().right),onClick:()=>{f({PlayerPos:{x:e,y:s},MoveInput:"right"}),console.log(s)}}),(0,o.jsx)("div",{className:d().button}),(0,o.jsx)("div",{className:"".concat(d().button," ").concat(d().down),onClick:()=>{f({PlayerPos:{x:e,y:s},MoveInput:"down"}),console.log(s)}}),(0,o.jsx)("div",{className:d().button})]}),(0,o.jsx)("div",{className:d().shoot,onClick:()=>{b(),console.log(s)},children:"shoot"})]})]})},x=()=>{let[e]=(0,n.KO)(l.L);return e?(0,o.jsx)(_,{}):(0,o.jsx)(a.g,{visible:!0})};var y=x},4607:function(e){e.exports={container:"test_container__hfwMK",button:"test_button__Y5B6Q",shoot:"test_shoot__nwVU6",board:"test_board__R0dud",up:"test_up__tuNg3",left:"test_left__bSKdk",right:"test_right__a89_B",down:"test_down__lL7gQ",upperLeft:"test_upperLeft__1CDko",upperRight:"test_upperRight__mhmNK",lowerLeft:"test_lowerLeft__4zM_6",lowerRight:"test_lowerRight__bb5Xa"}}},function(e){e.O(0,[237,774,888,179],function(){return e(e.s=6558)}),_N_E=e.O()}]);