(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(25),o=n.n(i),r=(n(67),n(16)),s=n(5),l=n(38),j=n(4),u=n(6),b=n.n(u),d=(n(87),"https://api.themoviedb.org/3/"),h="http://image.tmdb.org/t/p/",O=n(1);var v=function(e){return Object(O.jsx)("div",{children:Object(O.jsx)("div",{style:{width:"100%",height:"500px",background:"url('".concat(e.image,"')"),backgroundSize:"100% cover",position:"relative"},children:Object(O.jsxs)("div",{className:"movie_info",style:{position:"absolute",color:"#fff"},children:[Object(O.jsx)("h2",{style:{color:"#fff"},children:e.title}),Object(O.jsx)("p",{children:e.release}),Object(O.jsx)("p",{children:e.rate}),Object(O.jsx)("p",{children:e.desc})]})})})},f=n(106);var p=function(e){return e.landingpage?Object(O.jsx)(f.a,{lg:6,md:8,xs:24,children:Object(O.jsx)("div",{style:{position:"relative"},children:Object(O.jsx)("a",{href:"/movie/".concat(e.movieId),children:Object(O.jsx)("img",{src:e.image,alt:e.title,style:{width:"100%",height:"100%"}})})})}):Object(O.jsx)(f.a,{lg:6,md:8,xs:24,children:Object(O.jsxs)("div",{style:{position:"relative"},children:[Object(O.jsx)("img",{src:e.image,alt:e.title,style:{width:"100%",height:"100%"}}),Object(O.jsx)("p",{children:e.name}),Object(O.jsx)("p",{children:e.character})]})})},m=n(105),x=n(47).movieAPI,g={loginStatus:!1};var y=Object(s.f)((function(e){var t=Object(c.useState)([]),n=Object(j.a)(t,2),i=n[0],o=n[1],r=Object(c.useState)(null),s=Object(j.a)(r,2),u=s[0],f=s[1],y=Object(c.useState)(0),_=Object(j.a)(y,2),S=_[0],w=_[1];Object(c.useEffect)((function(){b.a.get("/api/users/auth").then((function(e){e.data.isAuth?g.loginStatus=!0:g.loginStatus=!1}));var e="".concat(d,"movie/popular?api_key=").concat(x,"&language=en-US&page=1");E(e)}),[]);var E=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){o([].concat(Object(l.a)(i),Object(l.a)(e.results))),f(e.results[0]),w(e.page)}))};return Object(O.jsxs)("div",{className:"landing_page",children:[Object(O.jsxs)("div",{className:"intro_box",children:[Object(O.jsx)("h2",{children:"Thank you for visiting !"}),Object(O.jsx)("div",{className:"btn_box",children:g.loginStatus?Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{onClick:function(){b.a.get("/api/users/logout").then((function(t){t.data.success?e.history.push("/login"):alert("failed to logout")}))},children:"LOGOUT"}),Object(O.jsx)("button",{children:Object(O.jsx)("a",{href:"/fav",children:"FAVORITE"})})]}):Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{children:Object(O.jsx)("a",{href:"/register",children:"REGISTER"})}),Object(O.jsx)("button",{children:Object(O.jsx)("a",{href:"/login",children:"LOGIN"})})]})})]}),Object(O.jsx)("div",{className:"movie_box",children:Object(O.jsxs)("div",{className:"latest_movie",children:[u&&Object(O.jsx)(v,{title:u.original_title,rate:u.vote_average,release:u.release_date,desc:u.overview,image:"".concat(h,"w1280").concat(u.backdrop_path)}),Object(O.jsx)("h2",{children:"Moive by Latest"}),Object(O.jsx)(m.a,{gutter:[16,16],children:i&&i.map((function(e,t){return Object(O.jsx)(a.a.Fragment,{children:Object(O.jsx)(p,{landingpage:!0,image:e.poster_path?"".concat(h,"w500").concat(e.poster_path):null,movieId:e.id,title:e.title})},t)}))}),Object(O.jsx)("button",{className:"btn_load",onClick:function(){var e="".concat(d,"movie/popular?api_key=").concat(x,"&language=en-US&page=").concat(S+1);E(e)},children:"Load More"})]})})]})})),_=n(15),S="login_user",w="register_user",E="auth_user";function k(){var e=b.a.get("/api/users/auth").then((function(e){return e.data}));return{type:E,payload:e}}n(95);var I=Object(s.f)((function(e){var t=Object(_.b)(),n=Object(c.useState)(""),a=Object(j.a)(n,2),i=a[0],o=a[1],r=Object(c.useState)(""),s=Object(j.a)(r,2),l=s[0],u=s[1];return Object(O.jsx)("div",{children:Object(O.jsxs)("form",{onSubmit:function(n){n.preventDefault(),t(function(e){var t=b.a.post("/api/users/login",e).then((function(e){return e.data}));return{type:S,payload:t}}({email:i,password:l})).then((function(t){t.payload.loginSuccess?e.history.push("/"):alert("error")}))},children:[Object(O.jsx)("label",{children:"Email"}),Object(O.jsx)("input",{type:"email",value:i,onChange:function(e){o(e.currentTarget.value)}}),Object(O.jsx)("label",{children:"Password"}),Object(O.jsx)("input",{type:"password",value:l,onChange:function(e){u(e.currentTarget.value)}}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{type:"submit",children:"Login"})]})})}));n(96);var T=Object(s.f)((function(e){var t=Object(_.b)(),n=Object(c.useState)(""),a=Object(j.a)(n,2),i=a[0],o=a[1],r=Object(c.useState)(""),s=Object(j.a)(r,2),l=s[0],u=s[1],d=Object(c.useState)(""),h=Object(j.a)(d,2),v=h[0],f=h[1],p=Object(c.useState)(""),m=Object(j.a)(p,2),x=m[0],g=m[1];return Object(O.jsx)("div",{children:Object(O.jsxs)("form",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh"},onSubmit:function(n){if(n.preventDefault(),v!==x)return alert("incorrect password, try again");t(function(e){var t=b.a.post("/api/users/register",e).then((function(e){return e.data}));return{type:w,payload:t}}({email:i,password:v,name:l})).then((function(t){t.payload.success?e.history.push("/login"):alert("Failed to sign up :/")}))},children:[Object(O.jsx)("label",{children:"Name"}),Object(O.jsx)("input",{type:"text",value:l,onChange:function(e){u(e.currentTarget.value)}}),Object(O.jsx)("label",{children:"Email"}),Object(O.jsx)("input",{type:"email",value:i,onChange:function(e){o(e.currentTarget.value)}}),Object(O.jsx)("label",{children:"Password"}),Object(O.jsx)("input",{type:"password",value:v,onChange:function(e){f(e.currentTarget.value)}}),Object(O.jsx)("label",{children:"ConfirmPassword"}),Object(O.jsx)("input",{type:"password",value:x,onChange:function(e){g(e.currentTarget.value)}}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{type:"submit",children:"Register"})]})})})),C=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;function a(a){var i=Object(_.b)();return Object(c.useEffect)((function(){i(k()).then((function(e){console.log(e),e.payload.isAuth?(n&&!e.payload.isAdmin||!1===t)&&a.history.push("/"):t&&a.history.push("/")}))}),[]),Object(O.jsx)(e,{})}return a},N=n(104);var R=function(e){var t=e.movie,n=e.genre;return Object(O.jsxs)(N.b,{bordered:!0,children:[Object(O.jsx)(N.b.item,{label:"Title",children:t.title}),Object(O.jsx)(N.b.item,{label:"Release",children:t.release_date}),Object(O.jsxs)(N.b.item,{label:"Runtime",children:[t.runtime,"minutes"]}),Object(O.jsxs)(N.b.item,{label:"Rating",children:[t.vote_average,"/10"]}),Object(O.jsx)(N.b.item,{label:"Genre",children:n.map((function(e,t){return Object(O.jsxs)("span",{children:[e.name," "]},t)}))})]})};var F=function(e){var t=e.movieId,n=e.movieInfo.title,a=e.movieInfo.backdrop_path,i=e.movieInfo.runtime,o=document.cookie.split("=")[1],r=Object(c.useState)(0),s=Object(j.a)(r,2),l=s[0],u=s[1],d=Object(c.useState)(!1),h=Object(j.a)(d,2),v=h[0],f=h[1],p={theUser:o,movieId:t,movieTitle:n,moviePic:a,movieRuntime:i};return Object(c.useEffect)((function(){b.a.post("/api/fav/fav-num",p).then((function(e){e.data.success?(console.log(e.data),u(e.data.favNum)):alert("failed to get your favorite information")})),b.a.post("/api/fav/getFav",{theUser:document.cookie.split("=")[1]}).then((function(e){e.data.success?1==e.data.favorites.length?(console.log("you you did"),f(!0)):f(!1):alert("failed to get your favorite movies")}))}),[]),Object(O.jsx)("div",{children:Object(O.jsx)("button",{onClick:function(){o?v?b.a.post("/api/fav/removeFav",p).then((function(e){e.data.success?(console.log(e.data,"remove"),f(!v),u(l-1)):alert("failed to add")})):b.a.post("/api/fav/addFav",p).then((function(e){e.data.success?(f(!v),u(l+1)):alert("failed to remove")})):alert("To like this movie, Please Login")},style:{position:"relative",width:"100px",paddingRight:"25px",backgroundColor:"rgb(233, 76, 76)"},children:v?" Liked ".concat(l):"like it?"})})},P=n(47).movieAPI;var D=Object(s.f)((function(e){var t=e.match.params.movieId,n=Object(c.useState)(null),i=Object(j.a)(n,2),o=i[0],r=i[1],s="".concat(d,"movie/").concat(t,"?api_key=").concat(P,"&language=en-US&page=1");Object(c.useEffect)((function(){fetch(s).then((function(e){return e.json()})).then((function(e){console.log("mian",e),r(e)}))}),[]);var l=Object(c.useState)([]),u=Object(j.a)(l,2),b=u[0],f=u[1],x=Object(c.useState)([]),g=Object(j.a)(x,2),y=g[0],_=g[1],S=Object(c.useState)([]),w=Object(j.a)(S,2),E=w[0],k=w[1],I=Object(c.useState)(!1),T=Object(j.a)(I,2),C=T[0],N=T[1];return Object(c.useEffect)((function(){var e="".concat(d,"movie/").concat(t,"/credits?api_key=").concat(P),n="".concat(d,"movie/").concat(t,"?api_key=").concat(P);fetch(n).then((function(e){return e.json()})).then((function(e){f(e),_(e.genres)})),fetch(e).then((function(e){return e.json()})).then((function(e){k(e.cast),console.log("crew",e.cast)}))}),[]),Object(O.jsxs)("div",{children:[o&&Object(O.jsx)(v,{title:o.original_title,rate:o.vote_average,release:o.release_date,desc:o.overview,image:"".concat(h,"w1280").concat(o.backdrop_path)}),Object(O.jsxs)("div",{style:{width:"90%",margin:"0 auto"},children:[Object(O.jsx)("h2",{children:"Movie Info"}),Object(O.jsx)(R,{movie:b,genre:y}),Object(O.jsxs)("div",{className:"btn_box",style:{display:"flex",justifyContent:"center",margin:"15px 0"},children:[Object(O.jsx)("button",{onClick:function(){N(!C)},children:"View Casts"}),Object(O.jsx)(F,{movieInfo:b,movieId:t})]}),C&&Object(O.jsx)(m.a,{gutter:[16,16],children:E&&E.map((function(e,t){return Object(O.jsx)(a.a.Fragment,{children:Object(O.jsx)(p,{image:e.profile_path?"".concat(h,"w500").concat(e.profile_path):"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",name:e.name,character:e.character})},t)}))})]})]})}));var L=Object(s.f)((function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],i=t[1];function o(){b.a.post("/api/fav/getFav",{theUser:document.cookie.split("=")[1]}).then((function(e){e.data.success?i(e.data.favorites):alert("failed to get your favorite movies")}))}return Object(c.useEffect)((function(){o()}),[]),Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"Favorite Movies"}),n&&n.map((function(e,t){return Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsx)("img",{src:"".concat(h,"w400").concat(e.moviePic)}),Object(O.jsx)("p",{children:e.movieTitle}),Object(O.jsx)("p",{children:e.movieRuntime}),Object(O.jsx)("button",{onClick:function(){return function(e){b.a.post("/api/fav/deleteFav",e).then((function(e){e.data.success?o():alert("failed to get your favorite movies")}))}(e)},children:"Remove"})]},t)}))]})}));var U=function(){return Object(O.jsx)(r.a,{children:Object(O.jsx)("div",{children:Object(O.jsxs)(s.c,{children:[Object(O.jsx)(s.a,{exact:!0,path:"/",component:C(y,null,!0)}),Object(O.jsx)(s.a,{exact:!0,path:"/login",component:C(I,!1)}),Object(O.jsx)(s.a,{exact:!0,path:"/register",component:C(T,!1)}),Object(O.jsx)(s.a,{exact:!0,path:"/movie/:movieId",component:C(D,null)}),Object(O.jsx)(s.a,{exact:!0,path:"/fav",component:C(L,!0)})]})})})},A=(n(97),n(24)),V=n(59),M=n.n(V),G=n(60),X=n(18),H=Object(A.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(X.a)(Object(X.a)({},e),{},{loginSuccess:t.payload});case w:return Object(X.a)(Object(X.a)({},e),{},{register:t.payload});case E:return Object(X.a)(Object(X.a)({},e),{},{userData:t.payload});default:return e}}}),K=H,W=Object(A.a)(M.a,G.a)(A.c);o.a.render(Object(O.jsx)(_.a,{store:W(K,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),children:Object(O.jsx)(U,{})}),document.getElementById("root"))},47:function(e,t,n){e.exports=n(89)},67:function(e,t,n){},87:function(e,t,n){},89:function(e,t){e.exports={movieAPI:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).MOVIE_API}},95:function(e,t,n){},96:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.5bcbac77.chunk.js.map