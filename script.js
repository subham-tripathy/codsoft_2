const skillBTN = document.getElementById('skillBTN');
const educationBTN = document.getElementById('educationBTN');
const certificationBTN = document.getElementById('certificationBTN');

const skillDiv = document.getElementById('skill');
const educationDiv = document.getElementById('education');
const certificationDiv = document.getElementById('certification');







skillBTN.addEventListener('click', () => {
    skillBTN.style.borderBottom = '1px solid white';
    educationBTN.style.borderBottom = 'none';
    certificationBTN.style.borderBottom = 'none';

    skillDiv.style.display = 'block';
    educationDiv.style.display = 'none';
    certificationDiv.style.display = 'none';
})


educationBTN.addEventListener('click', () => {
    skillBTN.style.borderBottom = 'none';
    educationBTN.style.borderBottom = '1px solid white';
    certificationBTN.style.borderBottom = 'none';

    skillDiv.style.display = 'none';
    educationDiv.style.display = 'block';
    certificationDiv.style.display = 'none';
})


certificationBTN.addEventListener('click', () => {
    skillBTN.style.borderBottom = 'none';
    educationBTN.style.borderBottom = 'none';
    certificationBTN.style.borderBottom = '1px solid white';

    skillDiv.style.display = 'none';
    educationDiv.style.display = 'none';
    certificationDiv.style.display = 'block';
})