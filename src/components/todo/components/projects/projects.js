import React, {useState} from "react";
import {addTodoAction} from "../../../../store/todo";
import {getProjects} from "../../../../store/project/selectors";
import {addProjectAction, removeProjectAction} from "../../../../store/project/actions";
import {connect} from "react-redux";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";

export const Projects = () => {
    const [value, setValue] = useState();
    const onChange = (event) => {
        setValue(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
    }

    const createProject = () => {}
    const removeProject = (projectId) => () => {}

    return (
        <div>
            <h1>Projects</h1>

            <ul></ul>

            <form onSubmit={onSubmit}>
                <input type="text" onChange={(event) => onChange(event)} value={value} />
                <button>send</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    projects: addProjectAction,
    removeProject: removeProjectAction
})

// const mapDispatchToProps = (dispatch) => ({
//     addProject: (project) => dispatch(addProjectAction(project)),
//     removeProject: (projectID) => dispatch(removeProjectAction(projectID))
// })

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
