// You can add interactivity here. For example, an FAQ accordion:

document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});
