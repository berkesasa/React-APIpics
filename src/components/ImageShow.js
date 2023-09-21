
function ImageShow ({image}) {
    return (
        <div className="rounded-2xl overflow-hidden shadow-lg">
            <img className="h-[150px] w-full object-cover" src={image.urls.small} alt={image.alt_description} />
        </div>
    )
}

export default ImageShow;