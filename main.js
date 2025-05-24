const moviesData = [
            {
                id: 1,
                title: "Home Alone",
                year: 1990,
                director: "Chris Columbus",
                rating: 7.6,
                poster: "https://lumiere-a.akamaihd.net/v1/images/image_ed8d7a4e.jpeg?region=0%2C0%2C800%2C1200",
                genre: ["Comedy", "Family"],
                runtime: 103,
                description: "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation."
            },
            {
                id: 2,
                title: "Love Actually",
                year: 2003,
                director: "Richard Curtis",
                rating: 7.6,
                poster: "https://static.cinemagia.ro/img/resize/db/movie/00/48/79/love-actually-252657l-600x0-w-de7ee682.jpg",
                genre: ["Comedy", "Drama", "Romance"],
                runtime: 135,
                description: "Follows the lives of eight very different couples dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London."
            },
            {
                id: 3,
                title: "Elf",
                year: 2003,
                director: "Jon Favreau",
                rating: 6.9,
                poster: "https://thewildgameevergreen.com/wp-content/uploads/2020/11/elf-movie-poster.jpg",
                genre: ["Comedy", "Family", "Fantasy"],
                runtime: 97,
                description: "After discovering he is a human, a man raised as an elf at the North Pole decides to travel to New York City to locate his real father."
            },
            {
                id: 4,
                title: "It's a Wonderful Life",
                year: 1946,
                director: "Frank Capra",
                rating: 8.6,
                poster: "https://www.themoviedb.org/t/p/w500/mV3VcmMJN6Zwahj42dy9WwPUyRI.jpg",
                genre: ["Drama", "Family", "Fantasy"],
                runtime: 130,
                description: "An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed."
            },
            {
                id: 5,
                title: "The Polar Express",
                year: 2004,
                director: "Robert Zemeckis",
                rating: 6.6,
                poster: "https://m.media-amazon.com/images/M/MV5BMTM1NTU0NTE4MV5BMl5BanBnXkFtZTcwMTQ0MjEzMw@@._V1_.jpg",
                genre: ["Animation", "Adventure", "Family"],
                runtime: 100,
                description: "On Christmas Eve, a young boy embarks on a magical adventure to the North Pole on the Polar Express, while learning about friendship, bravery, and the spirit of Christmas."
            },
            {
                id: 6,
                title: "A Christmas Carol",
                year: 1984,
                director: "Clive Donner",
                rating: 7.9,
                poster: "https://www.themoviedb.org/t/p/w500/kGmpIkjVRWHQ97AiEXC0pLt5VtY.jpg",
                genre: ["Drama", "Family", "Fantasy"],
                runtime: 100,
                description: "An old bitter miser is given a chance for redemption when he is haunted by ghosts on Christmas Eve."
            },
            {
                id: 7,
                title: "How the Grinch Stole Christmas",
                year: 2000,
                director: "Ron Howard",
                rating: 6.2,
                poster: "https://m.media-amazon.com/images/M/MV5BNWNiNTczNzEtMjQyZC00MjFmLTkzMDMtODk4ZGMyZmE0N2E4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
                genre: ["Comedy", "Family", "Fantasy"],
                runtime: 104,
                description: "On the outskirts of Whoville lives a green, revenge-seeking Grinch who plans to ruin Christmas for all of the citizens of the town."
            }
        ];

        // Enhanced Application Class with Modern JavaScript Features
        class ChristmasMoviesApp {
            constructor() {
                this.movies = [...moviesData];
                this.originalOrder = [...moviesData];
                this.currentSort = 'default';
                this.init();
            }

            init() {
                this.setupEventListeners();
                this.renderMovies();
                this.calculateStats();
                this.addLoadingAnimations();
            }

            setupEventListeners() {
                // Enhanced menu functionality
                const menuButton = document.getElementById('menuButton');
                const dropdownMenu = document.getElementById('dropdownMenu');

                menuButton.addEventListener('click', (e) => {
                    e.stopPropagation();
                    dropdownMenu.classList.toggle('show');
                    menuButton.textContent = dropdownMenu.classList.contains('show') ? 'Menu ▲' : 'Menu ▼';
                });

                // Close dropdown when clicking outside
                document.addEventListener('click', (e) => {
                    if (!menuButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
                        dropdownMenu.classList.remove('show');
                        menuButton.textContent = 'Menu ▼';
                    }
                });

                // Enhanced sort functionality
                document.querySelectorAll('[data-sort]').forEach(button => {
                    button.addEventListener('click', (e) => {
                        const sortType = e.target.dataset.sort;
                        this.sortMovies(sortType);
                        this.updateActiveButton(e.target);
                    });
                });

                // Keyboard navigation
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape') {
                        dropdownMenu.classList.remove('show');
                        menuButton.textContent = 'Menu ▼';
                    }
                });
            }

            renderMovies() {
                const grid = document.getElementById('moviesGrid');
                grid.innerHTML = '';

                this.movies.forEach((movie, index) => {
                    const movieCard = this.createMovieCard(movie, index);
                    grid.appendChild(movieCard);
                });

                this.addMovieInteractions();
            }

            createMovieCard(movie, index) {
                const card = document.createElement('div');
                card.className = 'movie-card fade-in';
                card.style.animationDelay = `${index * 0.1}s`;
                
                card.innerHTML = `
                    <div class="movie-header">
                        <div>
                            <h3 class="movie-title">${movie.title}</h3>
                            <div class="movie-director">Directed by ${movie.director}</div>
                        </div>
                        <div class="imdb-score" title="IMDB Rating">
                            ⭐ ${movie.rating}
                        </div>
                    </div>
                    
                    <div class="movie-details">
                        <div class="movie-year" data-year="${movie.year}">
                            📅 Released in ${movie.year}
                        </div>
                    </div>
                    
                    <div class="movie-poster-container">
                        <img 
                            class="movie-poster" 
                            src="${movie.poster}" 
                            alt="${movie.title} poster"
                            loading="lazy"
                            data-movie-id="${movie.id}"
                        />
                    </div>
                `;

                return card;
            }

            addMovieInteractions() {
                const posters = document.querySelectorAll('.movie-poster');
                const yearElements = document.querySelectorAll('.movie-year');

                posters.forEach((poster, index) => {
                    const yearElement = yearElements[index];
                    
                    poster.addEventListener('mouseenter', () => {
                        yearElement.classList.add('show');
                        poster.style.filter = 'brightness(1.1)';
                    });

                    poster.addEventListener('mouseleave', () => {
                        yearElement.classList.remove('show');
                        poster.style.filter = 'brightness(1)';
                    });

                    poster.addEventListener('click', () => {
                        this.showMovieDetails(poster.dataset.movieId);
                    });
                });
            }

            showMovieDetails(movieId) {
                const movie = this.movies.find(m => m.id == movieId);
                if (movie) {
                    alert(`🎬 ${movie.title}\n\n📅 Year: ${movie.year}\n🎭 Director: ${movie.director}\n⭐ IMDB: ${movie.rating}/10\n🎭 Genre: ${movie.genre.join(', ')}\n⏱️ Runtime: ${movie.runtime} minutes\n\n📝 ${movie.description}`);
                }
            }

            sortMovies(sortType) {
                this.currentSort = sortType;
                
                switch(sortType) {
                    case 'rating':
                        this.movies.sort((a, b) => b.rating - a.rating);
                        break;
                    case 'year':
                        this.movies.sort((a, b) => b.year - a.year);
                        break;
                    case 'title':
                        this.movies.sort((a, b) => a.title.localeCompare(b.title));
                        break;
                    default:
                        this.movies = [...this.originalOrder];
                }
                
                this.renderMovies();
            }

            updateActiveButton(activeButton) {
                document.querySelectorAll('.control-button').forEach(btn => {
                    btn.classList.remove('active');
                });
                activeButton.classList.add('active');
            }

            calculateStats() {
                const avgRating = (this.movies.reduce((sum, movie) => sum + movie.rating, 0) / this.movies.length).toFixed(1);
                const years = this.movies.map(m => m.year);
                const yearSpan = Math.max(...years) - Math.min(...years);
                const topRated = Math.max(...this.movies.map(m => m.rating));

                document.getElementById('avgRating').textContent = avgRating;
                document.getElementById('yearSpan').textContent = yearSpan;
                document.getElementById('totalMovies').textContent = this.movies.length;
                document.getElementById('topRated').textContent = topRated;
            }

            addLoadingAnimations() {
                // Add staggered animation delays
                const cards = document.querySelectorAll('.movie-card');
                cards.forEach((card, index) => {
                    card.style.animationDelay = `${index * 0.15}s`;
                });
            }
        }

        // Initialize the application when DOM is ready
        document.addEventListener('DOMContentLoaded', () => {
            new ChristmasMoviesApp();
        });

        // Add some festive console messages for developers
        console.log('🎄 Christmas Movies App Loaded Successfully!');
        console.log('🎬 Built with modern JavaScript ES6+ features');
        console.log('✨ Features: Responsive Design, Interactive Sorting, Hover Effects');
