export module cardTypes {
  export interface HomeCard {
    imageURKIDs: number;
    imageAlt?: string;
    cardTitle?: string;
    cardDescription?: string;
    buttonTitle?: string;
    buttonLink?: any;
    externalLink?: boolean;
  }
}
