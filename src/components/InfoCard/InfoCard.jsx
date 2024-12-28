import { Link } from "react-router-dom"
import './InfoCard.css'


export const InfoCard = ({ title, url, urlTitle, description, img, LinkTo }) => {

    return (
        <div className="mt-5 card-style container">
            <div className="d-flex align-items-start gap-2">
                <div className="card-img-back">
                    <img className="card-img rounded-circle" src={img} />
                </div>
                <div className="d-flex flex-column card-top-block-info">
                    <p className="card-url-title">{urlTitle}</p>
                    <div className="d-flex">
                        <p className="card-url pe-2">{url}</p>

                        <div>
                            <span class="material-symbols-outlined text-secondary icon-more-vert">
                                more_vert
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Link className="card-title" to={LinkTo}>{title}</Link>
            <p className="card-description">{description}</p>
        </div>
    )
}
