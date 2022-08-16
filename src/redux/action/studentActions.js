const getAllStudents = () => ({
    type:"GET_ALL_STUDENTS",
});

const addSelectedStudents = (datas) => ({
    type:"ADD_SELECTED_STUDENTS",
    values:datas
});

export {getAllStudents,addSelectedStudents};