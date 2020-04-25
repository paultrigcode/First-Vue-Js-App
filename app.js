const app = new Vue({
	el:'#app',
	data: {
		title:"My Todo App",
		newTodo:"",
		todos:[],

	},
	methods:{
		addTodo(){
			this.todos.push({
				title:this.newTodo,
				done:false
			});
			this.newTodo=""
		},
		removeTodo(todo){
			const todoindex= this.todos.indexOf(todo);
			this.todos.splice(todoindex,1);
		},
		allDone(){
			 this.todos.forEach(todo => {
			 	todo.done=true;
			 })
		}
	}

});