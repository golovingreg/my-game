(this["webpackJsonpmy-game"]=this["webpackJsonpmy-game"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),c=a.n(r),o=(a(12),a(1)),i=a(2),s=a(4),u=a(3),m=(a(13),{set:[4,6,8,10,12,20],bigRoll:function(e,t){for(var a=[],n=0;n<e;n++)m.set.forEach((function(e){t===e&&a.push(Math.floor(Math.random()*(t-1))+1)}));return a},roll:function(e){var t;return m.set.forEach((function(a){e===a&&(t=Math.floor(Math.random()*(e-1))+1)})),t}}),h=m,d={name:"Dragon",str:12,def:5,hp:50,wis:10,dex:10},E=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={hp:50,def:d.def,str:d.str,dex:d.dex,wis:d.wis},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Your enemy:"),l.a.createElement("ul",null,l.a.createElement("li",null,d.name),l.a.createElement("li",null,"HP: ",this.state.hp),l.a.createElement("li",null,"Defense: ",this.state.def),l.a.createElement("li",null,"Strength: ",this.state.str),l.a.createElement("li",null,"Dexterity: ",this.state.dex),l.a.createElement("li",null,"Wisdom: ",this.state.wis)))}}]),a}(n.Component),f=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={hp:50,def:5,str:12,dex:10,wis:10},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"log"},l.a.createElement("div",null,l.a.createElement("h1",null,"Battle log will be displayed here if you encounter an enemy. Attack doesn't work for now")),l.a.createElement("div",null,l.a.createElement("h2",null,"Your enemy:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Dragon"),l.a.createElement("li",null,"HP: ",this.state.hp),l.a.createElement("li",null,"Defense: ",this.state.def),l.a.createElement("li",null,"Strength: ",this.state.str),l.a.createElement("li",null,"Dexterity: ",this.state.dex),l.a.createElement("li",null,"Wisdom: ",this.state.wis))))}}]),a}(n.Component),y=function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Hello, noble knight! Here your journey starts."),l.a.createElement("h3",null,"For now you can only fight a dragon with your simple attack, or"),l.a.createElement("h3",null,"go and look at the beautiful mountains! You decide:"))},p=function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"There you go:"),l.a.createElement("img",{src:"https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg",alt:"mountain",style:{width:"500px"}}))},v=function(e){var t=e.display;return"story"===t?l.a.createElement(y,null):"story2"===t?l.a.createElement(p,null):"battle"===t?l.a.createElement(f,null):void 0},b={name:"Knight",str:18,def:10,hp:30,wis:10,dex:10},g=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={hp:b.hp,def:b.def,str:b.str,dex:b.dex,wis:b.wis},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Your character:"),l.a.createElement("ul",null,l.a.createElement("li",null,b.name),l.a.createElement("li",null,"HP: ",this.state.hp),l.a.createElement("li",null,"Defense: ",this.state.def),l.a.createElement("li",null,"Strength: ",this.state.str),l.a.createElement("li",null,"Dexterity: ",this.state.dex),l.a.createElement("li",null,"Wisdom: ",this.state.wis)))}}]),a}(l.a.Component),k=function(e){var t=e.display,a=e.toBattle,n=e.toStory,r=e.toStory2,c=e.attack;return"story"===t?l.a.createElement("div",{className:"actionsPanel"},l.a.createElement("button",{onClick:a},"Fight the dragon!"),l.a.createElement("button",{onClick:r},"Look at the mountains")):"story2"===t?l.a.createElement("div",{className:"actionsPanel"},l.a.createElement("button",{onClick:n},"I'm tired, let's go back")):"battle"===t?l.a.createElement("div",{className:"actionsPanel"},l.a.createElement("button",{onclick:c},"Attack"),l.a.createElement("button",{onClick:n},"Flee")):void 0},w=function(){return l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,"Change character"),l.a.createElement("li",null,"Restart journey"),l.a.createElement("li",null,"Log Out"),l.a.createElement("li",null,"Contact us")))},j=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).toBattle=function(){e.setState({display:"battle"})},e.toStory=function(){e.setState({display:"story"})},e.toStory2=function(){e.setState({display:"story2"})},e.attack=function(){var e;h.roll(20)>E.state.def?(e=h.roll(6)+g.state.str/2,E.state.hp=E.state.hp-e):console.log("block")},e.state={display:"story"},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:"part"},l.a.createElement(v,{attack:this.attack,display:this.state.display})),l.a.createElement("div",{className:"part"},l.a.createElement(g,null)),l.a.createElement("div",{className:"part"},l.a.createElement(k,{toBattle:this.toBattle,toStory:this.toStory,toStory2:this.toStory2,attack:this.attack,display:this.state.display})),l.a.createElement("div",{className:"part"},l.a.createElement(w,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.15e1323a.chunk.js.map