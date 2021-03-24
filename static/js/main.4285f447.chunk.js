(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{13:function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},28:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),o=n.n(r),s=n(14),i=n(3),u=n(4),l=n(6),m=n(5),b=n(11),d=n.n(b),h=n(12),j=n(7),f=n.n(j),C=n(0),p=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(C.jsxs)("form",{onSubmit:this.handleSubmit,className:f.a.form,children:[Object(C.jsxs)("label",{children:["Name",Object(C.jsx)("input",{className:f.a.inputName,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange})]}),Object(C.jsxs)("label",{children:["Number",Object(C.jsx)("input",{type:"tel",name:"number",required:!0,value:this.state.number,onChange:this.handleChange})]}),Object(C.jsx)("button",{type:"submit",disabled:!this.state.name||!this.state.number,className:f.a.formBtn,children:"Add Contact"})]})}}]),n}(a.Component),O=function(t){var e=t.value,n=t.onChange;return Object(C.jsxs)("label",{children:["Find contacts by name",Object(C.jsx)("br",{}),Object(C.jsx)("input",{type:"text",value:e,onChange:n})]})},v=n(9),x=n.n(v),g=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(C.jsx)("ul",{className:x.a.ContactsList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(C.jsxs)("li",{className:x.a.ContactsItem,children:[a,": ",c,Object(C.jsx)("button",{type:"button",onClick:function(){n(e)},children:"Delete"})]},e)}))})},_=n(13),y=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:_,filter:""},t.addContact=function(e){var n=e.name,a=e.number;if(t.state.contacts.some((function(t){return t.name===n})))console.log(alert("".concat(n," is already in contacts")));else{var c={id:d.a.generate(),name:n,number:a};t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(s.a)(e))}}))}},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getFilteredContacts=function(){var e=t.state.filter.toLowerCase();return t.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.getFilteredContacts();return Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)("h1",{children:"Phonebook"}),Object(C.jsx)(p,{onSubmit:this.addContact}),Object(C.jsx)("h2",{children:"Contacts"}),Object(C.jsx)(O,{value:this.state.filter,onChange:this.changeFilter}),Object(C.jsx)(g,{contacts:t,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);n(28),n(29);o.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(y,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={form:"ContactsForm_form__3SatM",inputName:"ContactsForm_inputName__loaYC",formBtn:"ContactsForm_formBtn__eivWr"}},9:function(t,e,n){t.exports={ContactsList:"ContactList_ContactsList__2b42H",ContactsItem:"ContactList_ContactsItem__26JLH"}}},[[30,1,2]]]);
//# sourceMappingURL=main.4285f447.chunk.js.map