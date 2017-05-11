/**
* First we will load all of this project's JavaScript dependencies which
* includes Vue and other libraries. It is a great starting point when
* building robust, powerful web applications using Vue and Laravel.
*/

require('./bootstrap');

window.Vue = require('vue');

/**
* Next, we will create a fresh Vue application instance and attach it to
* the page. Then, you may begin adding components to this application
* or customize the JavaScript scaffolding to fit your unique needs.
*/

Vue.component('example', require('./components/Example.vue'));
Vue.component('add-project', require('./components/AddProjectForm.vue'));

Vue.component('my-projects', require('./components/MyProjects.vue'));
Vue.component('other-projects', require('./components/OtherProjects.vue'));
Vue.component('project', require('./components/Project.vue'));


Vue.component('project-detail', require('./components/ProjectDetail.vue'));
Vue.component('task-list', require('./components/TaskList.vue'));
Vue.component('task', require('./components/Task.vue'));

const app = new Vue({
	el: '#app',
	data: {
		myProjects:[],
		otherProjects:[],
		projectData: [],
		tasks: []
		/*tasks: [
		{
			name: "Main Task 1"
		},
		{
			name: "Main Task 2",
			children: [
			{name: "Child Task 2.1"},
			{
				name: "Child Task 2.2",
				children: [
				{name: "Child Task 2.2.1"},
				{name: "Child Task 2.2.2"}
				]
			}
			]
		},
		{
			name: "Main Task 3",
			children: [
			{name: "Child Task 3.1"},
			{name: "Child Task 3.2"}
			]
		},
		{
			name: "Main Task 4"
		}
		]*/

	},
	methods: {
		requestProject(project){
			// console.log("From Root = "+project.id);
			var requestProjectConfig = {
				onprogress: function(progressEvent) {
					var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total);
					console.log(percentCompleted);
				},
				onerror: function(event){
					console.log(event);
				},
				ontimeout: function(event){
					console.log(event);
				}
			};

			var url = "/projects/getIndividualProject/"+project.id;



			axios.get(url, requestProjectConfig).then(response => {
				// this.projectData = response.data;
				console.log(response);
				// console.log(requestProjectConfig);
				humane.log("Getting Project Data of " +project.id+ " from database.", {
					timeout: 4000,
					clickToClose: true
				});
			});
		},
		addProject(project) {
            /*console.log(project);
            this.messages.push(message);*/
            var addProjectConfig = {
            	onUploadProgress: function(progressEvent) {
            		var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
            		console.log(percentCompleted);
            	}
            };

            axios.post('/projects/addProject', project, addProjectConfig)
            .then(response => {
            	/*console.log(response.data);
            	this.myProjects = response.data;*/
            	this.myProjects.push(response.data);

            	humane.log("New Project - "+response.data.name+" Added.", {
					timeout: 10000,
					clickToClose: true
				});
            });
        }
    },
    created(){
    	console.log("Root Component Created.");		

    	axios.get('/projects/getMyProjects').then(response => {
            // console.log(response);
            this.myProjects = response.data;
        });
    	axios.get('/projects/getOtherProjects').then(response => {
            // console.log(response);
            // this.otherProjects = response.data;
        });
    }

});