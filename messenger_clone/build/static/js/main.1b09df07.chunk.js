(this.webpackJsonpmessenger_clone=this.webpackJsonpmessenger_clone||[]).push([[0],{44:function(e,a,t){e.exports=t(73)},49:function(e,a,t){},50:function(e,a,t){},67:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAEH0lEQVR4nO2cwWsUVxzHv7/Jdi1ZQ4R0Wahotbe6WBG9SGlCiFmIm1bWkEs9agUpFKpCimDdnFopoYTiRfQfiJiNaCSJFJL1Jnqwh7ZH8SYiaF0Py87Mr4ekooIz4868+c3u/D6HhWXezHx5H+a9N/NmHqAoiqIoiqIoiqIoiqKkBXrfHYYnloqOYx8nwiiIdoCRM5ArOggvwfwQoBXXpct3rh/6SzrS6wQWUJycyw44vTPEdBJAj8FMJnEAXGzkC2fuX9rfkg4DBBRQnJzLftTKLYJw0HSgmLjdyBfKSZBgBSk04PTOdFHlA8Bo35PHv0qHAAJcAcMTS0XXdR6gc5udd2Ez+PN6bfxvyRC+VwC7zrfovsoHgAyBjkuH8BcAjMYRRIiSdIAAfQBvNx9DjE+kAwQQQJvNxxCjTzpAoFGQYg4VIIwKEEYFCKMChFEBwqgAYVSAMCpAGBUgjAoQJiMdIOkMVRbZs0DIOWe9AsLCyAFUBPCDZfGfQ5XF2X0n7n0QdHcVEC09AL7f/OTxYlAJKsAMgeecVYAhGPhusHLzM79yKsAcgeacVYBZfOecVYBZfOecVYBZfOecVYAwKkAYFSCMChBGBQijAoRRAcKkXcC/XhvHxm5tMh0g7QIeeW18/mFPv+kAqRbAoCWv7VlyPjWdIc0CbMtyrngVcMF7TIdIs4DfV6999Y9XAWIaMR0irQJWGvnClFeBUmk5B7hjpoOkTYAN4LdGvjDu941wM+d8E8fXQSl4LYUbAD0k5mWXcCXIZ6nFybksbP4xjnSRCiDC9Op8uRrlMSXI27lTDBgfAQERCmBGda1Wno7qeFIMVW4cYKAa1/ki6QOYUa0vdH7lf/H19Y8B6yoA43fA/xNaABGmu6HyBw8vb8v0ZJYAbI3zvKEEMKPaDW3+UOXGAbLsuwB2x33utvsAIkx3epu/sQzPaQDnEWOz8zptCej00U6ptJxr9raOwqYpUDyjnXcRRMBzAK+eCnZa5Rcn57L9dv+WTa69ky3sZWC4idahpCzB4CuAGeeJMLP+B+dWa+Wfowzg+/59WOz1H/eN3u69l8ozhm8nXF8oz2bQLGTQLKwtRFv5SsA+4I/akaemg6SVtD2MSxxJEPBCOoAkCRDAnvOy3U4CBNCKdAJJxAW4Ll3G+oq2qURcwMZ3tRelc0ghLgAAGvnCGQC3pXNIkAgB9y/tbzXyhTIBs9i4d00Lybkn3+DLw7d2WRYfA1ACeEdSntm0y1qt7FnHiROQdAYrN6cI9EvQ8n4CEtEEdRL12vgFRnRvTKiANohSggpok6gkqIAQRCFBBYQkrAQVEAFhJKiAiKjXxi8Q4e23RJ757acCImR1vlwF4ywAF4AD4p+kM6WSkcr8wEhlfkA6h6IoiqIoiqIoiqIkj/8AWgoYixMHlskAAAAASUVORK5CYII="},68:function(e,a,t){},73:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(13),c=t.n(r),o=(t(49),t(40)),m=t(32),i=(t(50),t(30)),l=t.n(i),A=l.a.initializeApp({apiKey:"AIzaSyAnCE24THkOe5JsfEXLhZrHGQcsMWVSEsk",authDomain:"kareem-messenger-clone.firebaseapp.com",databaseURL:"https://kareem-messenger-clone.firebaseio.com",projectId:"kareem-messenger-clone",storageBucket:"kareem-messenger-clone.appspot.com",messagingSenderId:"184491847756",appId:"1:184491847756:web:dff1249f601b26476004e9",measurementId:"G-KVS8XFWCGQ"}).firestore(),g=t(97),d=t(94),u=t(93),p=t(95),f=t(21),B=t(39);var E=function(e){var a=t(67),n=[["#3F51B5","#FF4B2B"],["#3F51B5","#3F51B5"]];return s.a.createElement("div",null,s.a.createElement("img",{src:a,alt:"logo",height:"100",width:"100",style:{marginTop:20}}),s.a.createElement(f.Gradient,{gradients:n,property:"text",element:"h1",angle:"30deg",className:"h1_messenger"},e.app_name),s.a.createElement(f.Gradient,{gradients:n,property:"text",element:"h4",angle:"30deg",className:"h4_credits"},"Done by Kareem Krayem"))},C=(t(68),t(91)),v=t(96),k=t(92),h=Object(n.forwardRef)((function(e,a){var t,n=e.message;return t=e.username===n.username,s.a.createElement("div",{ref:a,className:"message ".concat(t&&"message__user")},s.a.createElement(C.a,{className:"username"},!t&&"".concat(n.username||"Unknown"," ")),s.a.createElement(v.a,{className:t?"message__userCard":"message__guestCard"},s.a.createElement(k.a,null,s.a.createElement(C.a,{className:"text"},n.message))))}));var I=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)([]),i=Object(m.a)(c,2),C=i[0],v=i[1],k=Object(n.useState)(""),I=Object(m.a)(k,2),w=I[0],y=I[1];return Object(n.useEffect)((function(){y(prompt("Please enter your name."))}),[]),Object(n.useEffect)((function(){A.collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){v(e.docs.map((function(e){return{id:e.id,message:e.data()}})))}))}),[]),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"App"},s.a.createElement(E,{app_name:"Messenger"}),s.a.createElement(f.Gradient,{gradients:[["#3F51B5","#FF4B2B"],["#e53935","#3F51B5"]],property:"text",element:"h4",angle:"30deg",className:"welcome_message"},"Welcome ",w),s.a.createElement("form",{className:"app__form"},s.a.createElement(g.a,{className:"app__formControl"},s.a.createElement(d.a,{className:"app__input",placeholder:"Enter a message..",color:"primary",value:t,onChange:function(e){return r(e.target.value)}}),s.a.createElement(u.a,{disabled:!t,variant:"contained",type:"submit",color:"primary",className:"app__iconButton",onClick:function(e){e.preventDefault(),A.collection("messages").add({message:t,username:w,timestamp:l.a.firestore.FieldValue.serverTimestamp()}),v([].concat(Object(o.a)(C),[{username:w,message:t}])),r("")}},s.a.createElement(p.a,null)))),s.a.createElement(B.a,null,C.map((function(e){var a=e.message,t=e.id;return s.a.createElement(h,{key:t,username:w,message:a})})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.1b09df07.chunk.js.map