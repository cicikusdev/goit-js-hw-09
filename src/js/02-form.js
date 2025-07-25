const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

// Sayfa açıldığında localStorage’dan veriyi al
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email || '';
  form.elements.message.value = formData.message || '';
}

// input’larda değişiklik olunca localStorage’a yaz
form.addEventListener('input', (e) => {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// submit olunca veriyi yaz, localStorage ve formu temizle
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const { email, message } = form.elements;

  if (!email.value.trim() || !message.value.trim()) {
    alert('Boş yer bırakma.');
    return;
  }

  console.log({
    email: email.value.trim(),
    message: message.value.trim(),
  });

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = { email: '', message: '' };
});
