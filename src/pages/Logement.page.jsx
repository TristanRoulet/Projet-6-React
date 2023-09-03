import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Carousel from "../components/Slideshow.component";
import Menu from "../components/Menu.component";
import Tag from "../components/Tag.component";
import Rating from "../components/Rating.component";

export default function Logement(props) {
  const { logementsData } = props;
  const { id } = useParams();
  const [logement, setLogement] = useState({});
  const [menuIndex, openMenu] = useState(null);

  const toggleMenu = (index) => {
    if (menuIndex === index) {
      openMenu(null)
    } else {
      openMenu(index)
    }
  }
  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLogement = async () => {
      const response = await logementsData.find(
        (logement) => logement.id === id
      );
      if (!response || response.length < 1) {
        return navigate("/404");
      }
      return setLogement(response);
    };

    fetchLogement();
  }, [logementsData, id, navigate]);

  if (Object.keys(logement).length <= 0) {
    return (
      <div className="loading-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  } else {
    return (
      <div className="logement">
        <Carousel images={logement.pictures} />
        <div className="infos">
          <div className="infos-1">
            <h1 className="logement-title">{logement.title}</h1>

            <p className="logement-location">{logement.location}</p>

            {logement.tags && (
              <div className="tags-container">
                {logement.tags.map((tag, index) => {
                  return <Tag key={index} tag={tag} />;
                })}
              </div>
            )}
          </div>

          <div className="infos-2">
            <div className="rating-note">
              <Rating note={logement.rating} />
            </div>

            {logement.host && (
              <div className="host">
                <p className="host-name">
                  {logement.host.name.replace(" ", "\n")}
                </p>
                <div
                  className="host-photo"
                  style={{
                    background: `url(${logement.host.picture}), #C4C4C4`,
                  }}
                ></div>
              </div>
            )}
          </div>
        </div>

        <div className="logement-menus">
          <Menu title="Description" description={logement.description}  isOpen={menuIndex === 0} onClick={() => toggleMenu(0)} />
          <Menu title="Équipements" description={logement.equipments && logement.equipments.join("\n")} isOpen={menuIndex === 1} onClick={() => toggleMenu(1)} />
        </div>
      </div>
    );
  }
}
