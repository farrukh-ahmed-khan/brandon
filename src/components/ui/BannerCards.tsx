import Image, { StaticImageData } from 'next/image'

import React from 'react'
import Link from 'next/link'



interface BannerCardProps {
    title?: string
    subtitle?: string
    image?: StaticImageData
    buttonText?: string
    buttonLink?: string
    icon?: StaticImageData
}

const BannerCards: React.FC<BannerCardProps> = ({
    title = 'Find Relief',
    subtitle = 'For Anxiety',
    image,
    buttonText = 'Learn More',
    buttonLink = '#',
    icon,
}) => {
    return (
        <div className="banner-card">
            <div className="content">
                <h5>{title}</h5>
                <h4>{subtitle}</h4>
            </div>
            <div className="img-wrap">
                <div className="overlay"></div>
                <div className="img">
                    {image && <Image src={image} alt="product" />}
                </div>
                <div className="btns-wrap">
                    <Link href={buttonLink} className="banner-btn">
                        {buttonText}
                        <div className="icon-wrap">
                            {icon && <Image src={icon} alt="arrow icon" />}
                        </div>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default BannerCards
