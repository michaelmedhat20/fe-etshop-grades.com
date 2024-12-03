// Fetch student data from JSON file
fetch("studentsData.json")
    .then(response => response.json())
    .then(data => {
        const students = data.students;

        document.getElementById("gradeForm").addEventListener("submit", (event) => {
            event.preventDefault();

            const studentID = document.getElementById("studentID").value;
            const userCode = document.getElementById("userCode").value;

            const student = students[studentID];

            if (student && student.code === userCode) {
                document.getElementById("result").innerText = ` الاسم: ${student.name} \nنتيجة الامتحان : ${student.grades}`;
            } else {
                document.getElementById("result").innerText = "البيانات غير صحيحة";
            }
        });
    })
    .catch(error => console.error("Error fetching student data:", error));
