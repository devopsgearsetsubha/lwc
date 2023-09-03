import { LightningElement } from 'lwc';
import CAROUSEL_IMAGES from '@salesforce/resourceUrl/carousel';
export default class Parentcomponentcarousel extends LightningElement {
 slides=[
    {
        image:`${CAROUSEL_IMAGES}/carousel/virat.jpg`,
        heading:'Virat Kohli',
        description:'Virat Kohli had a dream. A dream like every other young kid in India to represent the country in the gentleman’s game. It is this vigor and fervor for the game of cricket that has helped this extremely talented young boy from Delhi to scale great heights at a very young age.'
    },
    {
        image:`${CAROUSEL_IMAGES}/carousel/sharma.jpg`,
        heading:'Sharma',
        description:'Popularly known as the Hitman for his hard hitting skills, Rohit Sharma is a gifted batsman and an immensely talented cricketer who is pleasing on the eye with his elegance and ability to time the ball. Each time Rohit Sharma walks out to bat, the word “talent” features more often than not amongst his fans and the cricketing circles.'
    },
    {
        image:`${CAROUSEL_IMAGES}/carousel/ashwin.jpg`,
        heading:'Ashwin',
        description:'R Ashwin shot to limelight after an impressive season for the Chennai Super Kings in the India Premier League in 2010. His ability to thrive on crunch situations and bowl with variety caught the eye of the selectors who saw in him a potential to be India’s lead spinner in the future.'
    }
 ]

    
}