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
		projectData: [
        ],
		tasks: []	

	},
	methods: {
		requestProject(project){
			/*console.log("From Root = "+project.id);*/

			var url = "/projects/getIndividualProject/"+project.id;

			axios.get(url).then(response => {
				this.projectData = response.data;				
                console.log(response.data);

				
			});
		},
		addProject(project) {
            /*console.log(project);
            this.messages.push(message);*/

            var nanobar = new Nanobar({
            	classname: 'nanobar',
            	target: document.getElementById('main-loading-bar')
            });

            var addProjectConfig = {
            	onUploadProgress: function(progressEvent) {
            		var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
            		/*console.log(percentCompleted);*/
            		nanobar.go(percentCompleted);
            	}
            };

            axios.post('/projects/addProject', project, addProjectConfig).then(response => {
            	/*console.log(response.data);
            	this.myProjects = response.data;*/
            	this.myProjects.push(response.data);

            	humane.log([response.data.name, "Added"], {
            		timeout: 2000,
            		clickToClose: true
            	});
            }).catch(function (err) {
              humane.log("Something went wrong, please try again.", {
                timeout: 2000,
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