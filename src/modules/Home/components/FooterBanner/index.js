import React, {useEffect, useState} from 'react';
import { Container, Banner, Confira, TextoConfira } from './styles'
import services from '../../../../services';

const FooterBanner = () => {

    const [banner, setBanner] = useState([]);

    useEffect(async ()=>{
    
        var response;

        try{
            response = await services.getFooterBanner();
            
        console.log(response);
        }catch(error){
            console.log(error);
        }
    
        const { data, status } = response;

        setBanner(data);

    }, [])    

    return(
        
        <Container>
            <Banner source={{uri:banner?.config.url || ""}}/>
            

            <Confira>
                <TextoConfira>Confira</TextoConfira>
            </Confira>    
        </Container>
    )
}
export default FooterBanner;