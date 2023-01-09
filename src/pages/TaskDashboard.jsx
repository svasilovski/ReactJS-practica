import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import TaskListComponent from '../components/container/task_list';

const Taskdashboard = () => {
    const navigate = useNavigate();

    const user = localStorage.getItem('user') || null;

    useEffect(() => {
        if (!user) {
            navigate('/');
        }
    });

    return <TaskListComponent user={user} />;
};

export default Taskdashboard;
