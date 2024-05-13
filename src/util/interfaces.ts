export interface validationError {
    type: string,
    value: string,
    msg: string,
    path: string,
    localtion: string
}

export interface article {
    title: string,
    pubDate: string,
    link: string,
    guid: string,
    author: string,
    thumbnail: string,
    description: string
}