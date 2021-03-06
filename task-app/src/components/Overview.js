import React from 'react';

const Overview = (props) => {
    const { tasks, deleteClicked } = props;
        return (
            <div>
                <h1>Tasks</h1>
                    {tasks.map(
                        (task) => {
                        return (
                            <div data-id={task.id} key={task.id}>
                                <span>{task.num} - {task.input}</span>
                                <button type="button" onClick={deleteClicked}>Delete</button>
                            </div>
                        );
                    }
                    )}
                    <br></br>
            </div>
        );
};

export default Overview;