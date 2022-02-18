(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{49:function(e,t,n){e.exports=n.p+"static/media/logo.06e73328.svg"},55:function(e,t,n){e.exports=n(65)},60:function(e,t,n){},61:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a,o,c,r,i=n(3),l=n.n(i),d=n(48),s=n.n(d),u=n(49),m=n.n(u),p=(n(60),n(52)),b=n(76),k=n(74),v=n(73),E=n(33),f=n(75),y=Object(f.a)(a||(a=Object(E.a)(["\n  query GetTodos {\n    todos {\n      id\n      task\n      completed\n    }\n  }\n"]))),j=Object(f.a)(o||(o=Object(E.a)(["\n  mutation($task: String!) {\n    insert_todos_one(object: { task: $task }) {\n      id\n      task\n      completed\n    }\n  }\n"]))),O=(Object(f.a)(c||(c=Object(E.a)(["\n  mutation($id: Int!, $completed: Boolean!) {\n    update_todos_by_pk(\n      pk_columns: { id: $id }\n      _set: { completed: $completed }\n    ) {\n      id\n    }\n  }\n"]))),Object(f.a)(r||(r=Object(E.a)(["\n  mutation($id: Int!) {\n    delete_todos_by_pk(id: $id) {\n      id\n    }\n  }\n"])))),g=n(9),h=n(71),w=(n(61),function(e){var t=e.todo,n=Object(h.a)(O),a=Object(g.a)(n,1)[0];return l.a.createElement("div",{key:t.id,className:"task"},l.a.createElement("input",{type:"checkbox",checked:t.completed,onChange:function(){return(e=t).id,void e.completed;var e}}),l.a.createElement("span",{className:t.completed?"completed":""},t.task),l.a.createElement("button",{type:"submit",onClick:function(){return e=t.id,void a({variables:{id:e},optimisticResponse:!0,update:function(t){var n=t.readQuery({query:y}).todos.filter(function(t){return t.id!==e});t.writeQuery({query:y,data:{todos:n}})}});var e}},"remove"))}),_=(n(63),function(){var e=Object(v.a)(y),t=e.loading,n=e.error,a=e.data;return t?l.a.createElement("div",{className:"tasks"},"Loading..."):n?l.a.createElement("div",{className:"tasks"},"Error!"):l.a.createElement("div",{className:"tasks"},a.todos.map(function(e){return l.a.createElement(w,{key:e.id,todo:e})}))}),N=n(23),$=(n(64),function(e,t){var n=t.data,a=e.readQuery({query:y}),o=n.insert_todos_one;e.writeQuery({query:y,data:{todos:[].concat(Object(N.a)(a.todos),[o])}})}),q=function(){var e=Object(i.useState)(""),t=Object(g.a)(e,2),n=t[0],a=t[1],o=Object(h.a)(j,{update:$}),c=Object(g.a)(o,1)[0],r=function(){c({variables:{task:n}}),a("")};return l.a.createElement("div",null,l.a.createElement("input",{type:"text",placeholder:"Add a new task",className:"taskInput",value:n,onChange:function(e){return a(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&r()}}),l.a.createElement("button",{onClick:r},"Add"))},A=new p.a({uri:"https://fair-blowfish-97.hasura.app/v1/graphql",cache:new b.a});var x=function(){return l.a.createElement(k.a,{client:A},l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("img",{src:m.a,className:"App-logo",alt:"logo"}),l.a.createElement("p",null,"ToDo App")),l.a.createElement("br",null),l.a.createElement(q,null),l.a.createElement(_,null)))};s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(x,null)),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.fb984441.chunk.js.map