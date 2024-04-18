function setupGallery(){
    const thumbs = document.querySelectorAll('.thumbs-img');
    const mainImage = document.getElementById('gallery-picture');
    const title = document.getElementById('gallery-title');
    const description = document.getElementById('gallery-description');

    thumbs.forEach(function(thumb){
        thumb.addEventListener('mouseover', function(){
            mainImage.src = thumb.src;
            mainImage.src = thumb.alt;

            title.textContent = thumb.getAttribute('data-title');
            description.textContent = thumb.getAttribute('data-description');
        });
    });
}
setupGallery();
