import Image from "next/image";
import bannerOverlay from "../../assets/images/banner-overlay.png"
import arrowicon from "../../assets/images/arrow-btn-icon.png"
import Link from "next/link";
import BannerCards from "./BannerCards";

interface Button {
    label: string;
    link: string;
}

interface HomeBannerProps {
    title: string;
    subtitle?: string;
    buttons?: Button[];
}

const HomeBanner: React.FC<HomeBannerProps> = ({ title, subtitle, buttons = [] }) => {
    return (
        <div className="homebanner-wrap"
        // style={{ backgroundImage: `url(${bannerImage.src})` }}
        >
           
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="homebanner-content">
                            {subtitle && <h5>{subtitle}</h5>}
                            <h4>{title}</h4>
                            {buttons.length > 0 && (
                                <div className="btns-wrap">
                                    {buttons.map((btn, index) => (
                                        <Link key={index} href={btn.link} className="banner-btn">
                                            {btn.label}
                                            <div className="icon-wrap">
                                                <Image src={arrowicon} alt="arrow"></Image>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

          
        </div>
    );
};

export default HomeBanner;
