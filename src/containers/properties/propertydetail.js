import React, { Fragment } from 'react';
import propertyData from '../../data/properties.json'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./properties.css";
import TextComponent from "../../components/ui/textcomponent";
import ListComponent from "../../components/ui/listcomponent";
import MapComponent from "../../components/ui/mapcomponent";

const PropertyDetail = (props) => {
    const path = props.location.pathname.split('/');
    const category = path[path.length - 2];
    const index = path[path.length - 1];
    let property ;
    for (let i  in propertyData){
        if (propertyData[i].id === category){
            property = propertyData[i]['data'][index];
            break;
        }
    }
     let propertyImages = property.images.map(item => {
         return `${window.location.protocol}//${window.location.host}/image_folder/projects/${item}`
    });
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return(
        <Fragment>
            <div className='container' style={{ marginTop: '110px'}}>
                <div className='property_detail'>
                    <TextComponent className={'property-title'} text={property.title}/>
                    <div className='slider'>
                        <Slider {...settings}>
                            {propertyImages.map(img => {
                                return (
                                    <img src={img} />
                                )
                            })}
                        </Slider>
                    </div>
                        <TextComponent className={'property-description'} text={property.description}/>
                        <div className='more_detailing'>
                            <ListComponent className='highlights' list={property.highlights} />
                            <ListComponent className='area-sizes' list={property.area-sizes} />
                            <TextComponent className='address' text={property.address}/>
                            <TextComponent className='cost' text={property.cost}/>
                        </div>
                    <div className='geo_location'>
                        <MapComponent />
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default PropertyDetail;