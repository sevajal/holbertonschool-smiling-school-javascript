$.ajax({
    url: 'https://smileschool-api.hbtn.info/quotes',
    beforeSend: () => {
        $('#quotes').append('\
            <div class="loader"></div>\
        ');
    },
    success: (response) => {
        if (response.length > 0) {
            $('#quotes').empty();
            $('#quotes').append('\
            <div class="container">\
                <div class="carousel-inner">\
                </div>\
                <a href="#quotes" class="carousel-control-prev" role="button" data-slide="prev">\
                    <span class="control-btn" aria-hidden="true">\
                        <img src="./images/arrow_white_left.png" alt="Arrow to left" width="35px" height="65px">\
                    </span>\
                    <span class="sr-only">Previous</span>\
                </a>\
                <a href="#quotes" class="carousel-control-next" role="button" data-slide="next">\
                    <span class="control-btn" aria-hidden="true">\
                        <img src="./images/arrow_white_right.png" alt="Arrow to right" width="35px" height="65px">\
                    </span>\
                    <span class="sr-only">Next</span>\
                </a>\
            </div>');
            for (let i = 0; i < response.length; i++) {
                const quoteObject = response[i];
                $('#quotes .container .carousel-inner').append(`\
                <div class="carousel-item">\
                    <div class="w-75 mx-auto d-flex flex-column flex-sm-row justify-content-center">\
                        <div class="mx-auto my-3">\
                            <img class="profile-img rounded-circle" src="${quoteObject.pic_url}" alt="${quoteObject.name} profile pic" width="200px" height="200px">\
                        </div>\
                        <div class="mx-4 my-auto">\
                            <p class="text-white">${quoteObject.text}</p>\
                            <h5 class="text-white font-weight-bold">${quoteObject.name}</h5>\
                            <p class="text-white">${quoteObject.title}</p>\
                        </div>\
                    </div>\
                </div>`);
                if (i == 0) {
                    $('#quotes .container .carousel-inner .carousel-item').addClass('active');
                }
            }
        }
    }
});
