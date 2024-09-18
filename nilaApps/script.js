function submitForm() {
    // Get form elements
    const courseCode = document.getElementById('courseCode').value;
    const courseName = document.getElementById('courseName').value;
    const courseType = document.getElementById('courseType').value;
    const coursePeriod = document.getElementById('coursePeriod').value;
    const credits = document.getElementById('credits').value;

    // Validate the inputs
    if (!courseCode || !courseName || !courseType || !coursePeriod || !credits) {
        alert('Please fill in all required fields.');
        return;
    }

    // Prepare the report content
    const reportContent = `
        <strong>Course Code:</strong> ${courseCode} <br>
        <strong>Course Name:</strong> ${courseName} <br>
        <strong>Course Type:</strong> ${courseType} <br>
        <strong>Course Period:</strong> ${coursePeriod} <br>
        <strong>Credits:</strong> ${credits} <br>
    `;

    // Update the report section
    document.getElementById('reportContent').innerHTML = reportContent;

    // Clear the form
    document.getElementById('evaluation-form').reset();
}
