<template lang="html">
    <div class="project-detail">
        <header style="padding: 0px; background-color: #fff">
            <div class="viewBtn-list btn-group btn-group-justified" data-toggle="buttons" style="border-radius: 0px">
                <a href="#" class="viewBtn btn btn-sm btn-primary active" id="taskList">
                    <i class="fa fa-lg fa-list" aria-hidden="true"></i> <span class="hidden-sm hidden-xs"> Task List</span>
                </a>
                <!--
                <a href="#" class="viewBtn btn btn-sm btn-primary" id="yourTask">
                    <i class="fa fa-lg fa-star" aria-hidden="true"></i> <span class="hidden-sm hidden-xs"> Your Tasks</span>
                </a>
                <a href="#" class="viewBtn btn btn-sm btn-primary" id="members">
                    <i class="fa fa-lg fa-users" aria-hidden="true"></i> <span class="hidden-sm hidden-xs"> Members</span>
                </a>
                <a href="#" class="viewBtn btn btn-sm btn-primary" id="projectFiles">
                    <i class="fa fa-folder-open" aria-hidden="true"></i> <span class="hidden-sm hidden-xs"> Files</span>
                </a>
                -->
                <a href="#" class="viewBtn btn btn-sm btn-primary" id="gantt">
                    <i class="fa fa-lg fa-tasks" aria-hidden="true"></i> <span class="hidden-sm hidden-xs"> Gantt Chart</span>
                </a>
                <a href="#" class="viewBtn btn btn-sm btn-primary" id="projectInfo">
                    <i class="fa fa-lg fa-book" aria-hidden="true"></i> <span class="hidden-sm hidden-xs"> Project Info</span>
                </a>
            </div>
        </header>

        <div id="mainContent"  style="position: relative; max-height: 600px; height: 100%;">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 projectView" id='taskListView'>
                <h4 class="page-header" style="margin-top: 25px; margin-bottom: 15px;">Task List</h4>

                <div class="row">
                    <div class="pull-right" style="margin-right: 10px;"> 
                        <button type="button" style="margin-bottom: 8px" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#addTaskModal">
                            <i class="fa fa-plus" aria-hidden="true"></i> Add Task
                        </button>
                    </div>
                </div>
                <hr style="margin-bottom: 15px; margin-top: 15px;">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="taskList">
                        <task-list :projectdata="projectdata"></task-list>
                        <task></task>
                    </div>
                </div>                
            </div>
            
            <!--
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 projectView" style="display:none;" id='yourTaskView'>
                <h4 class="page-header" style="margin-top: 30px">Your Tasks</h4>
            </div>

            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 projectView" style="display:none;" id='membersView'>
                <h4 class="page-header" style="margin-top: 30px">Members</h4>

                <div class="row">
                    <div class="pull-right">
                        <button type="button" style="margin-bottom: 8px" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#addMember">
                            <i class="fa fa-user" aria-hidden="true"></i> Add Member
                        </button>
                    </div>
                </div>

                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="memberList">
                </div>
            </div>

            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 projectView" style="display:none;" id='projectFilesView'>
                <h4 class="page-header" style="margin-top: 30px">Files</h4>
            </div>
            -->

            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 projectView" style="display:none;" id='ganttView'>
                <h4 class="page-header" style="margin-top: 30px">Gantt Chart</h4>
            </div>

            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 projectView" style="display:none;" id='projectInfoView'>
                <h4 class="page-header" style="margin-top: 30px">Project Information</h4>

                <div class="row">
                    <div class="pull-right">
                        <button type="button" style="margin-bottom: 8px" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#addMember">
                            <i class="fa fa-retweet" aria-hidden="true"></i> Update
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="addTaskModal" tabindex="-1" role="dialog" aria-labelledby="addTaskLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="myModalLabel">Add Task</h4>
                    </div>

                    <form class="form-horizontal" method="POST">
                        <div class="modal-body">
                            <div class="row">
                                <input type="hidden" name="project_id" value="">
                                <div class="form-group">
                                    <label for="parent" style="text-align: right;" class="col-md-4 control-label">Parent Task</label>
                    
                                    <div class="col-md-6">
                                        <select id="parentTasks" class="form-control input-sm" name="parent" value="">
                                            <option value="0">None</option>
                                        </select>
                                    </div>
                                </div>
                    
                                <div class="form-group">
                                    <label for="name" style="text-align: right;" class="col-md-4 control-label">Task</label>
                    
                                    <div class="col-md-6">
                                        <input id="name" type="text" class="form-control input-sm" name="name" value="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-sm btn-danger" data-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-sm btn-primary">Add</button>
                        </div>
                    </form>
                    -->
                </div>
            </div>
        </div>

        <div class="modal fade" id="addMember" tabindex="-1" role="dialog" aria-labelledby="addMemberLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="myModalLabel">Add Member</h4>
                    </div>

                    <form class="form-horizontal" method="POST">
                        <div class="modal-body">
                            <div class="row">
                                <input type="hidden" name="project_id" value="">
                                <div class="form-group">
                                    <label for="parent" style="text-align: right;" class="col-md-4 control-label">Parent Task</label>

                                    <div class="col-md-6">
                                        <select id="parent" class="form-control input-sm" name="parent" value="">
                                            <option value="0">None</option>


                                        </select>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="name" style="text-align: right;" class="col-md-4 control-label">Task</label>

                                    <div class="col-md-6">
                                        <input id="name" type="text" class="form-control input-sm" name="name" value="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-sm btn-danger" data-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-sm btn-primary">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        props: ['projectdata'],
        mounted() {
            console.log(this.projectData);
        }
    }
</script>
