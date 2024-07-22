import './map.css'

function Map({ src }) {
    return (
        <>
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe width="600" height="300" id="gmap_canvas"
                        src={src} frameBorder="0"
                        scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                    <a href="https://123movies-to.org"></a><br />
                    <a href="https://www.embedgooglemap.net"></a>
                </div>
            </div>
        </>
    )
}

export { Map }