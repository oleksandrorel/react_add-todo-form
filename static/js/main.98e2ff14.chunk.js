(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(9),i=a.n(s),o=a(11),c=a(2),l=a(3),m=a(6),u=a(5),d=a(7),p=(a(17),a(10)),h=a.n(p),b=(a(18),a(1)),g=a.n(b);a(21);function y(e){var t=e.user;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"user"},"Responsible person:"," ",r.a.createElement("span",{className:"userName"},t.name)))}g.a.number,g.a.number,g.a.string,g.a.bool,g.a.shape({name:g.a.string}),a(22);function f(e){var t=e.title,a=e.completed,n=e.user,s=a?"Completed":"Not completed yet";return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"title"},"Todo:"," ",t),r.a.createElement("p",null,"Status:"," ",r.a.createElement("span",{className:a?"completed":"notCompleted"},s)),r.a.createElement(y,{user:n}))}function v(e){var t=e.todos;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement("div",{key:e.id,className:h()("row",{even:e.id%2===0})},r.a.createElement(f,e))})))}var k=a(4),C=(a(23),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={title:"",user:"",titleCheck:!0,userCheck:!0},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(k.a)({},n,r))},e.checkInputs=function(){var t=e.state,a=t.title,n=t.user,r=e.props,s=r.usersList,i=r.todosList,o=r.addTodo,c=s.find((function(e){return e.name===n})),l={title:e.state.title,id:i.length+1,completed:!1,user:c};a&&n&&(o(l),e.clearForm()),a||e.setState({titleCheck:!1}),n||e.setState({userCheck:!1})},e.clearForm=function(){e.setState({title:"",user:"",titleCheck:!0,userCheck:!0})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.title,n=t.user,s=t.titleCheck,i=t.userCheck,o=this.props.usersList;return r.a.createElement("div",{className:"addForm"},r.a.createElement("h1",{className:"header"},"React add TODO form"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.checkInputs()}},r.a.createElement("p",{className:"inputHeader"},"Title of todo:"),!s&&!a&&r.a.createElement("p",{className:"wrnMessage"},"Add a title, please"),r.a.createElement("input",{type:"text",name:"title",placeholder:"Title",value:a,onChange:this.handleChange}),r.a.createElement("p",{className:"inputHeader"},"User of todo:"),!i&&!n&&r.a.createElement("p",{className:"wrnMessage"},"Select a user, please"),r.a.createElement("select",{name:"user",value:n,onChange:this.handleChange},r.a.createElement("option",{value:""},"Choose a user"),o.map((function(e){return r.a.createElement("option",{key:e.id},e.name)}))),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"btn"},"To add")))}}]),a}(r.a.Component)),E=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],w=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}].map((function(e){return Object(d.a)(Object(d.a)({},e),{},{user:E.find((function(t){return t.id===e.userId}))})})),S=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={todosList:w},e.addTodo=function(t){e.setState((function(e){return{todosList:[].concat(Object(o.a)(e.todosList),[t])}}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.todosList;return r.a.createElement("div",{className:"App"},r.a.createElement(C,{todosList:e,usersList:E,addTodo:this.addTodo}),r.a.createElement(v,{todos:e}))}}]),a}(r.a.Component);i.a.render(r.a.createElement(S,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.98e2ff14.chunk.js.map