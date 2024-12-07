import styled from "styled-components";

export const Container = styled.div`
    max-width: 100%;
    max-height: 100%;
    margin: 0 auto;
`
export const NavHeader = styled.div`
    display: flex;
    padding: 24px 2rem;
    align-items: center;
    background-color: rgba(242, 244, 247, 1);
    
    .noActive{
        color: black;
    };
    
    .active{
        color: rgba(216, 67, 67, 1);
    }
`
export const Nav = styled.nav`
    position: absolute;
    display: flex;
    width: 95%;
    justify-content: center;
    gap: 20px;
    //.basketItem{
    //    left: -100%;
    //}
`
export const BgImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const BgImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scaleX(-1);
`;

export const OverlayContent = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 25%;
    gap: 40px;
    transform: translate(-50%, -50%);
    color: white;
    div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    };
    h1 {
        font-size: 48px;
        font-weight: 600;
        line-height: 32px;
    }
    h3 {
        font-size: 24px;
        font-weight: 600;
        line-height: 32px;
    }
    button {
        width: 173px;
        height: 56px;
        background-color: rgba(228, 72, 72, 1);
        text-align: center;
        border-radius: 200px;
        &:hover {
            background-color: rgba(216, 67, 67, 1);
        }
    }
`;
// Catalog Page
export const CatalogContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 3rem 4rem;
`;
// Sidebar
export const FilterSidebar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 360px;
`;
export const LocationsContainer = styled.div`
   display: flex;
    flex-direction: column;
    gap: 8px;
    
    p{
        color: rgba(16, 24, 40, 0.6);
    };
`;
export const LocationInput = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    height: 56px;
    border-radius: 12px;
    padding-left: 20px;
    padding-right: 20px;

    background-color: rgba(247, 247, 247, 1);

    input {
        width: 100%;
    }
;

    img {
        width: 20px;
        height: 20px;
    }
;
`;
// Filters Campers
export const FiltersContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    
    p{
        font-size: 16px;
      color: rgba(71, 84, 103, 1);  
    };
`;
// Vehicle Container
export const VehicleEquipmentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    
    p{
        color: rgba(16, 24, 40, 1);
        font-size: 20px;
        font-weight: 600;
    };
`;
export const Line = styled.div`
    width: 360px;
    height: 1px;
    background-color: rgba(218, 221, 225, 1);
`;
export const VehicleContainerButtons = styled.div`
   display: flex;
    flex-wrap: wrap;
    gap: 12px;
`;
export const VehicleButton = styled.button<{ isActive: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: 112px;
    height: 96px;
    border-radius: 12px;
    border: 2px solid ${({isActive})=> isActive ? 'rgba(228, 72, 72, 1)' : 'lightgrey'};
`;
export const VehicleTypeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    p{
        color: rgba(16, 24, 40, 1);
        font-size: 20px;
        font-weight: 600;
    };
`;
export const SearchButton = styled.button`
    width: 166px;
    height: 56px;
    border-radius: 200px;
    background-color: rgba(228, 72, 72, 1);
    
    p{
        font-size: 16px;
        color: white;
    };
`;
// Catalog Campers
export const MainCatalogCampers = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 4rem;
    flex: 1;
    gap: 32px;
`;
export const Camper = styled.div`
    display: flex;
    gap: 24px;
    padding: 24px;
    width: 888px;
    height: 368px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 20px;
    border: 1px solid rgba(218, 221, 225, 1);
`;
export const ImageCamper = styled.img`
    width: 292px;
    height: 320px;
    border-radius: 10px;
`;
export const DescriptionCamper = styled.div`
    display: flex;
    flex-direction: column;
    width: 524px;
    height: 320px;
    gap: 24px;
    .description-text {
        font-size: 16px;
        font-weight: 400;
        color: rgba(71, 84, 103, 1);
    };
`;
export const HeaderDescriptionCamper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    .name-price {
        display: flex;
        justify-content: space-between;
        
        p{
            display: flex;
            align-items: center;
            gap: 13px;
            color: rgba(16, 24, 40, 1);
            font-size: 24px;
            font-weight: 600;
        };
    };
    .rating-location {
        display: flex;
        gap: 16px;
        
        p{
            display: flex;
            align-items: center;
            gap: 5px;
            color: rgba(16, 24, 40, 1);
            font-weight: 400;
            font-size: 16px;
        };
    };
`;
export const FeaturesContainer = styled.div`
    width: 524px;
`;
export const FeaturesList = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
`;
export const FeaturesItem = styled.li`
    display: flex;
    padding: 14px 18px;
    background-color: rgba(242, 244, 247, 1);
    border-radius: 100px;
    text-transform: capitalize;
    align-items: center;
    gap: 10px;
`;
export const ShowMore = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 166px;
    height: 56px;
    background-color: rgba(228, 72, 72, 1);
    color: rgba(255, 255, 255, 1);
    font-size: 16px;
    border-radius: 200px;
`;
export const LoadMore = styled.button`
    width: 145px;
    height: 56px;
    border-radius: 200px;
    background-color: white;
    border: 1px solid lightgray;
`;
// Camper Details
export const CamperDetails = styled.div`
    padding: 48px 64px;
    .description-text {
        width: 1000px;
    }
    .navigate-list {
        display: flex;
        gap: 40px;
        margin-top: 60px;
        margin-bottom: 24px;
        
        .navigate-item {
            font-size: 20px;
            font-weight: 600;
            color: rgba(16, 24, 40, 1);

            .navigate-link {
                text-decoration: none;
                padding-bottom: 21.2px;
                border-bottom: 5px solid transparent;
                transition: border-color 0.3s ease;
            }

            .navigate-link-active {
                border-bottom: 5px solid rgba(228, 72, 72, 1);
                padding-bottom: 21.2px;
                font-weight: bold;
            }
        }
    }
`;
export const HeaderDescriptionCamperDetails = styled.div`
    .name-price {
        display: flex;
        flex-direction: column;
        gap: 10px;
        
        p{
            display: flex;
            align-items: center;
            gap: 13px;
            color: rgba(16, 24, 40, 1);
            font-size: 24px;
            font-weight: 600;
        };
    };
    .rating-location {
        display: flex;
        gap: 16px;
        
        p{
            display: flex;
            align-items: center;
            gap: 5px;
            color: rgba(16, 24, 40, 1);
            font-weight: 400;
            font-size: 16px;
        };
    };
`;
export const Images = styled.div`
    display: flex;
    gap: 50px;
    justify-content: flex-start;
`;
export const OutletFormContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const FormikContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 641px;
    height: 588px;
    padding: 44px 57px;
    border-radius: 10px;
    border: 1px lightgray solid;
    gap: 24px;

    div {
        h1 {
            font-size: 20px;
            font-weight: 600;
            color: rgba(16, 24, 40, 1)
        }
        p{
            font-weight: 400;
            font-size: 16px;
            color: rgba(108, 113, 123, 1);
            margin-top: 8px;
        }
    }

    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 14px;

        .form-input {
            width: 100%;
            height: 60px;
            border-radius: 12px;
            padding: 18px;
            background-color: rgba(247, 247, 247, 1);
        }
        .input-comments-form{
            text-align: left; /* Вирівнювання тексту по лівому краю */
            vertical-align: top;
            height: 118px;
            resize: none;
        }

        button {
            margin-top: 10px;
            display: flex;
            width: 166px;
            height: 56px;
            border-radius: 200px;
            background-color: rgba(228, 72, 72, 1);
            color: white;
            align-items: center;
            justify-content: center;
        }
    }
`;
export const FeaturesBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 641px;
    height: 588px;
    padding: 44px 57px;
    border-radius: 10px;
    background-color: rgba(247, 247, 247, 1);
    gap: 24px;
`;
export const VehicleDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 100px;
    h1{
        margin-bottom: 10px;
    }
    p{
        width: 527px;
        display: flex;
        justify-content: space-between;
    }
`;
export const ReviewsBlock = styled.div`
    width: 641px;
    height: 588px;
    padding: 44px 57px;
    ul{
        display: flex;
        flex-direction: column;
        gap: 44px;
        .review-header{
            display: flex;
            gap: 16px;
            align-items: center;
        }
        .avatar{
            display: flex;
            width: 60px;
            height: 60px;
            border-radius: 60px;
            background-color: #F2F4F7;
            align-items: center;
            justify-content: center;
            color: #E44848;
        }
        .rating{
            display: flex;
            gap: 4px;
            margin-top: 4px;
        }
        .comment{
            margin-top: 16px;
        }
    }
`;
export const BasketIcon = styled.img`
    width: 20px;
    height: 20px;
`;
export const BasketComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    flex: 1;
    gap: 32px;
`;
