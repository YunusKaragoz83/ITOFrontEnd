document.addEventListener('DOMContentLoaded', function() {
    const patientList = JSON.parse(localStorage.getItem('patientList')) || [];
    const tableBody = document.getElementById('patientTable').getElementsByTagName('tbody')[0];

    patientList.forEach((patient, index) => {
        const row = tableBody.insertRow();
        const nameCell = row.insertCell();
        const surnameCell = row.insertCell();
        const tcnoCell = row.insertCell();
        const phoneCell = row.insertCell();
        const addressCell = row.insertCell();
        const deleteCell = row.insertCell();

        nameCell.textContent = patient.name;
        surnameCell.textContent = patient.surname;
        tcnoCell.textContent = patient.tcno;
        phoneCell.textContent = patient.phone;
        addressCell.textContent = patient.address;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Sil';
        deleteButton.addEventListener('click', function() {
            patientList.splice(index, 1);
            localStorage.setItem('patientList', JSON.stringify(patientList));
            tableBody.deleteRow(row.rowIndex - 1);
        });
        deleteCell.appendChild(deleteButton);
    });
});