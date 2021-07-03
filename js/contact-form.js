document.querySelector("#contact").addEventListener('submit', 
(e) => {
    e.preventDefault();
    e.target.elements.name.value = ''
    e.target.elements.email.value = ''
    e.target.elements.subject.value = ''
    e.target.elements.message.value = ''
});
