// callback ajax tanpa jquery
const searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", () => {
    function getDataMovies(url, success, error) {
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    success(xhr.response);
                } else if (xhr.status === 404) {
                    error();
                }
            }
        }

        xhr.open("GET", url);
        xhr.send();
    }

    const inputKeyword = document.querySelector(".input-keyword");

    getDataMovies("http://www.omdbapi.com/?apikey=d76044a2&s=" + inputKeyword.value,
        results => {
            const movies = JSON.parse(results).Search;
            let cards = "";
            movies.forEach(m => {
                cards += showCards(m);
            });

            const movieContainer = document.querySelector(".movie-container");
            movieContainer.innerHTML = cards;

            //! ketika tombol detail di klik
            const modalDetail = document.querySelectorAll(".modal-detail-button");

            modalDetail.forEach(button => {
                button.addEventListener("click", function () {
                    function getDetailMovies(url, success, error) {
                        let xhr = new XMLHttpRequest();

                        xhr.onreadystatechange = function () {
                            if (xhr.readyState === 4) {
                                if (xhr.status === 200) {
                                    success(xhr.response);
                                } else if (xhr.status === 404) {
                                    error();
                                }
                            }
                        }

                        xhr.open("GET", url);
                        xhr.send();
                    }

                    getDetailMovies("http://www.omdbapi.com/?apikey=d76044a2&i=" + this.getAttribute("data-imdbid"),
                        detailMovie => {
                            const movie = JSON.parse(detailMovie)
                            const detail = showMovieDetail(movie);
                            const modalBody = document.querySelector(".modal-body");
                            modalBody.innerHTML = detail;
                        }, (e) => {
                            console.log(e);
                        }
                    )
                })
            })

        }, (e) => {
            console.log(e);
        }
    )
})

// callback ajax dengan jquery

// $(".search-button").on("click", function () {
//     $.ajax({
//         url: "http://www.omdbapi.com/?apikey=d76044a2&s=" + $('.input-keyword').val(),
//         success: results => {
//             const movies = results.Search;
//             let cards = "";
//             movies.forEach(m => {
//                 cards += showCards(m);
//             });
//             $(".movie-container").html(cards);

//             //! ketika tombol detail diklik
//             $(".modal-detail-button").on("click", function (e) {
//                 e.preventDefault();
//                 $.ajax({
//                     url: "http://www.omdbapi.com/?apikey=d76044a2&i=" + $(this).data("imdbid"),
//                     success: m => {
//                         const movieDetail = showMovieDetail(m)
//                         $(".modal-body").html(movieDetail);
//                     },
//                     error: (e) => {
//                         console.log(e.responsText);
//                     }
//                 })
//             });
//         },
//         error: (e) => {
//             console.log(e.responsText);
//         }
//     });
// })


function showCards(m) {
    return `<div class="col-md-4 my-3">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${m.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#dataDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>`
};

function showMovieDetail(m) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" alt="" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <h4>${m.Title}</h4>
                            </li>
                            <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
                            <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
                            <li class="list-group-item"><strong>Writer : </strong>${m.Writer}</li>
                            <li class="list-group-item"><strong>Plot : </strong><br>${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`
};