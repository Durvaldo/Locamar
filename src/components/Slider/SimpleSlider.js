import Slider from "react-slick";

const SimpleSlider = ({imagens, className}) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider className={className} {...settings}>
            {imagens.map((imagem) => (
                <img className="w-full h-64 object-contain" src={imagem} key={imagem} />
            ))}
        </Slider>
    );
}

export default SimpleSlider