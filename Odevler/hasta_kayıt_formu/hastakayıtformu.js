document.getElementById('patientForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const tcno = document.getElementById('tcno').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    const patientData = {
        name: name,
        surname : surname,
        tcno: tcno,
        phone: phone,
        address: address
    };

    if (tcno.length !== 11) {
        alert('TC Kimlik numarası 11 haneli olmalıdır.');
        return;
    }
    
    if (name.length < 2 || surname.length < 2) {
        alert('Ad ve soyad en az 2 karakter olmalıdır.');
        return;
    }

    // LocalStorage'dan mevcut verileri al veya boş bir dizi oluştur
    let patientList = JSON.parse(localStorage.getItem('patientList')) || [];

    // Yeni hastayı listeye ekle
    patientList.push(patientData);

    // Tüm listeyi LocalStorage'a kaydet
    localStorage.setItem('patientList', JSON.stringify(patientList));

    alert('Hasta bilgileri kaydedildi.');
    document.getElementById('patientForm').reset();
});

