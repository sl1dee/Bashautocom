import React, {lazy, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {Loader} from "@consta/uikit/Loader";

const TypesOfJobsBodyRepair  = lazy(() => import( "../../components/types-of-jobs-body-repair/types-of-jobs-body-repair"));
const OurWorksBodyRepair  = lazy(() => import( "../../components/our-works/our-works-body-repair/our-works-body-repair"));
const LogoGrid  = lazy(() => import( "../../components/LogoGrid/LogoGrid"));
const LoyaltyProgram  = lazy(() => import( "../../components/loyalty-program/loyalty-program"));
const DealerAndServiceCenters  = lazy(() => import( "../../components/dealer-and-service-centers/dealer-and-service-centers"));
const PromoSlider = lazy(() => import('../../components/PromoSlider/PromoSlider'));
const RentCatalog  = lazy(() => import( "../../components/RentCatalog/RentCatalog"));
const RentAdditional  = lazy(() => import( "../../components/RentAdditional/RentAdditional"));
const CallbackForm  = lazy(() => import( "../../components/callback/callbackForm/callbackForm"));
const Contacts  = lazy(() => import( "../../components/Contacts/Contacts"));

export default function BlockBuildPage(){
    const location = useLocation();

    const [blocks, setBlocks] = useState(null);

    function getBlocks(){
        setBlocks(null);
        fetch(`/data${location.pathname}.json`)
            .then(response=> response.json())
            .then(result => setBlocks(result));
    }

    useEffect( () => {
        window.scrollTo({top: 0, left: 0, behavior: 'instant'});
        getBlocks();
    }, [location.pathname])

    return blocks
    ? <>
            {
                blocks.map((block, index) => {
                    switch (block.alias) {
                        case 'TypesOfJobsBodyRepair':
                            return <TypesOfJobsBodyRepair title={block.title}
                                                          typesList={block.value}
                                                          key={index}/>
                        case 'OurWorksBodyRepair':
                            return <OurWorksBodyRepair title={block.title}
                                                       ourWorksList={block.value}
                                                       key={index}/>
                        case 'LogoGrid':
                            return <LogoGrid title={block.title}
                                             viewTabs={block.viewTabs}
                                             logos={block.value}
                                             key={index}/>
                        case 'LoyaltyProgram':
                            return <LoyaltyProgram textList={block.value}
                                                   key={index}/>
                        case 'DealerAndServiceCenters':
                            return <DealerAndServiceCenters key={index}
                                                            title={block.title}
                                                            cardList={block.value}
                                                            comboboxValues={block.brands}
                                                            items={block.cities}/>

                        case 'PromoSlider':
                            return <PromoSlider bannerList={block.value}
                                                key={index}/>
                        case 'RentCatalog':
                            return <RentCatalog key={index}
                                                title={block.title}
                                                rentCatalogLIst={block.value}/>
                        case 'RentAdditional':
                            return <RentAdditional key={index}
                                                   title={block.title}
                                                   rentAdditionalList={block.value}/>
                        case 'CallbackForm':
                            return <CallbackForm key={index}
                                                 title={block.title}
                                                 buttonText={block.buttonText}
                                                 description={block.description}
                                                 image={block.image}
                                                 backround={block.background}
                                                 mobileTitle={block.mobileTitle}
                                                 fields={block.fields}/>
                        case 'Contacts':
                            return <Contacts key={index}/>
                    }
                })
            }
        </>
    : <div className='h-100 w-100 d-flex align-items-center justify-content-center' style={{minHeight: 500}}><Loader/></div>

}