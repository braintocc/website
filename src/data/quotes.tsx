import Traslate, { translate } from '@docusaurus/Translate';

const QUOTES = [
  {
    thumbnail: 'https://avatars.githubusercontent.com/u/3071208?v=4',
    name: 'Alvaro Lorente',
    title: translate({message: "Founder", id: "site.quote.alvaro.title"}),
    text: (
      <p>
        
        <Traslate id="site.quote.alvaro.text">I got tired of using 20 applications to manage my digital live, and my social interactions.
        All solutions out there where either made for developers or required substantial effort.
        Hope you enjoy this product, and any feedback will be Welcome.</Traslate>
        
      </p>
    ),
  },
];

export default QUOTES;