export enum ReviewsSource {
    DoubleGis,
    Yandex,
}

export type ReviewsData = {
    text: string
    author: string
    source: ReviewsSource
}