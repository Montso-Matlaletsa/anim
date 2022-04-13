import { ImageProps } from "react-native";

export const BACKGROUND_COLOR = '#F1F1F1'

export interface PageInterface extends Pick<ImageProps, 'source'>{
    title: string;
    description: string;
}

export const PAGES: PageInterface[]=[
    {
        title: 'Samurai',
        description: 'A durable featured deck with a menacing face of a samurai at the center of the ui',
        source: require('./assets/1.jpeg')
    },
    {
        title: 'Reject',
        description: 'A durable featured deck with a menacing face of a samurai at the center of the ui',
        source: require('./assets/2.jpeg')
    },
    {
        title: 'Great Wave',
        description: 'A durable featured deck with a menacing face of a samurai at the center of the ui',
        source: require('./assets/3.jpeg')
    },
]

export const WORDS = ["What's Up", "Mobile", "Devs"]

export interface IHabitContent extends Pick<ImageProps, 'source'> {
    title: string;
    description: string;
    habitCollectionId: number;
    moreText?:string;
    order: string;
}

export const Habits:IHabitContent[]=[
    {
        title: 'Africa Code',
        description: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ips',
        habitCollectionId: 1,
        source: require('./assets/3.jpeg'),
        order: 'image-first'
    },
    {
        title: 'Preseve Africa',
        description: "500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editor",
        habitCollectionId: 1,
        source: require('./assets/3.webp'),
        order: 'description-first'
    },
    {
        title: 'Safe Nairobi',
        description: ' Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
        habitCollectionId: 1,
        source: require('./assets/4.webp'),
        moreText: 'More Text',
        order: 'image-first'
    },
    {
        title: 'Africa Safari',
        description: '500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
        habitCollectionId: 1,
        source: require('./assets/6.jpeg'),
        order: 'image-first'
    },
    {
        title: 'Botswana',
        description: '500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Conte',
        habitCollectionId: 1,
        source: require('./assets/7.webp'),
        order: 'description-first'
    },
    {
        title: 'Lesotho',
        description: '500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap inike Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
        habitCollectionId: 1,
        source: require('./assets/8.jpeg'),
        order: 'description-first'
    },
]