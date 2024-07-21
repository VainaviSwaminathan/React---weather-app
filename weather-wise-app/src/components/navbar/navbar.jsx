import './navbar.css'

function Navbar() {
    return (
        <nav>
            <h1 className="font">WeatherWise</h1>
            <div>
                <div id="search_container">
                    <span className="material-symbols-outlined">
                        search
                    </span>
                    <input id="search" type="text" placeholder='Enter city name' />
                    <button>Search</button>
                </div>
                <span class="material-symbols-outlined">
                    help
                </span>
            </div>

        </nav>
    )
}

export { Navbar }