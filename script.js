function getDOB() {
    
    const dobInput = document.getElementById('dateOfBirth').value;
    const currentDateInput = document.getElementById('currentDate').value;

    if(!dobInput || !currentDateInput)
    {
        alert('Please entet date of birth and Current date!')
        return;
    }

    const dob = new Date(dobInput);
    const currentDate = new Date(currentDateInput);

    let age = currentDate.getFullYear() - dob.getFullYear();
    let months = currentDate.getMonth() - dob.getMonth();
    const monthDiffenerce = currentDate.getMonth() - dob.getMonth();

    if(monthDiffenerce < 0 || (monthDiffenerce === 0 && currentDate.getDate() < dob.getDate()))
    {
        age--;
    }

    document.getElementById('result').textContent = `Your age is ${age} years and  ${months} months.`;

}