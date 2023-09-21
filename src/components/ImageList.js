import ImageShow from "./ImageShow";

function ImageList({ images }) {

    const renderedImages = images.map((image) => {
        return <ImageShow key={image.id} image={image} />
    })

    return <div className="grid max-md:grid-cols-2 md:max-lg:grid-cols-3 lg:grid-cols-5 max-md:gap-5 md:gap-10 container">{renderedImages}</div>
}

export default ImageList;