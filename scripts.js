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

$.ajax({
    url: 'https://smileschool-api.hbtn.info/popular-tutorials',
    beforeSend: () => {
        $('#tutorial-carousel').append('\
            <div class="loader"></div>\
        ');
    },
    success: (response) => {
        $('#tutorial-carousel').empty();
        $('#tutorial-carousel').append('\
            <div class="carousel-inner d-sm-flex p-5">\
            </div>\
            <a href="#tutorial-carousel" class="carousel-control-prev w-auto ml-2 ml-sm-4" role="button" data-slide="prev">\
                <span class="control-btn" aria-hidden="true">\
                    <img src="./images/arrow_black_left.png" alt="Arrow_black_left" width="35px" height="65px">\
                </span>\
                <span class="sr-only">Previous</span>\
            </a>\
            <a href="#tutorial-carousel" class="carousel-control-next w-auto mr-2 mr-sm-4" role="button" data-slide="next">\
                <span class="control-btn" aria-hidden="true">\
                    <img src="./images/arrow_black_right.png" alt="Arrow_black_right" width="35px" height="65px">\
                </span>\
                <span class="sr-only">Next</span>\
            </a>\
        ');

        for (let i = 0; i < response.length; i++) {
            const tutorialObject = response[i];
            $('#tutorial-carousel .carousel-inner').append(`\
            <div class="carousel-item">
                <div class="card border-0 mx-5">
                    <div class="card-img-top">
                        <div class="thumbnail d-flex py-4 justify-content-center" style="background-image: url('${tutorialObject.thumb_url}')"> 
                            <img src="./images/play.png" alt="Play" class="play-btn mt-3" width="75px" height="75px">
                        </div>    
                    </div>
                    <div class="card-body">
                        <h5 class="card-title font-weight-bold">${tutorialObject.title}</h5>
                        <p class="card-text">${tutorialObject['sub-title']}</p>
                        <div class="profile-line">
                            <img src="${tutorialObject.author_pic_url}" class="rounded-circle mr-2" alt=" profile pic" width="40px" height="40px">
                            <strong>${tutorialObject.author}</strong>
                        </div>
                        <div class="d-flex justify-content-between mt-2">
                            <div class="stars-${tutorialObject.id}">
                            </div>
                            <div class="duration">
                                <strong>${tutorialObject.duration}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`);

            for (let j = 1; j <= 5; j++) {
                if (j <= tutorialObject.star) {
                    $(`#tutorial-carousel .stars-${tutorialObject.id}`).append('<img src="./images/star_on.png" alt="Star on" width="15px" height="15px">');
                } else {
                    $(`#tutorial-carousel .stars-${tutorialObject.id}`).append('<img src="./images/star_off.png" alt="Star off" width="15px" height="15px">');
                }
            };

            if (i == 0) {
                $('#tutorial-carousel .carousel-inner .carousel-item').addClass('active');
            }
        };

        const carouselWidth = $(".tutorials-section #tutorial-carousel .carousel-inner")[0].scrollWidth;
        const cardWidth = $("#tutorial-carousel .carousel-inner .carousel-item").width();
        let scrollPosition = 0;
    
        $("#tutorial-carousel .carousel-control-next").on("click", function () {
            if (scrollPosition < (carouselWidth - cardWidth * 2)) {
                scrollPosition += cardWidth;
                $("#tutorial-carousel .carousel-inner").animate({ scrollLeft: scrollPosition }, 500);
            }
        });
    
        $("#tutorial-carousel .carousel-control-prev").on("click", function () {
            if (scrollPosition > 0) {
              scrollPosition -= cardWidth;
              $("#tutorial-carousel .carousel-inner").animate({ scrollLeft: scrollPosition }, 500);
            }
        });
    }
});
