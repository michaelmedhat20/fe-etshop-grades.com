// Mock data
const students = {
    "273": { code: "30502061301194", grades: "50/50" },
    "124": { code: "pass124", grades: "B, C, A" }
};

document.getElementById("gradeForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const studentID = document.getElementById("studentID").value;
    const userCode = document.getElementById("userCode").value;

    const student = students[studentID];

    if (student && student.code === userCode) {
        document.getElementById("result").innerText = `نتيجة الامتحان: ${student.grades}`;
    } else {
        document.getElementById("result").innerText = "البيانات غير صحيحة";
    }
});
          