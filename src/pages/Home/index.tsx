import {BgImage, BgImageContainer, OverlayContent} from "../../app/styles/styled-components.tsx";
import {useNavigate} from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();

    const handleViewCatalog = () => {
      navigate('/campers');
    }

  return (
      <BgImageContainer>
          <BgImage src={'https://www.figma.com/file/6vTbzaB3EPgOreQz2jOJJe/image/66b3d74b24c0292d5f6fc639a2ab802af8888c21'}/>
          <OverlayContent>
              <div>
                  <h1>Campers of your dreams</h1>
                  <h3>You can find everything you want in our catalog</h3>
              </div>
              <button onClick={handleViewCatalog}>
                  View Now
              </button>
          </OverlayContent>
      </BgImageContainer>
  );
}
