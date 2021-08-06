const storeLocally = () => {
  const name = document.querySelector('#full-name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  const formDataObject = {
    name,
    email,
    message,
  };

  const stringifiedData = JSON.stringify(formDataObject);

  localStorage.setItem('formDataObject', stringifiedData);
};

const formDataObject = localStorage.getItem('formDataObject');
if (formDataObject) {
  const refinedFormDataObject = JSON.parse(formDataObject);
  document.querySelector('#full-name').value = refinedFormDataObject.name;
  document.querySelector('#email').value = refinedFormDataObject.email;
  document.querySelector('#message').value = refinedFormDataObject.message;
}
const allFields = Array.from(document.querySelectorAll('.store'));
allFields.map((field) => {
  field.addEventListener('keyup', storeLocally);
  return true;
});
