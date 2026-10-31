export interface Source {
    id: string | null;
    name: string;
}

export enum ApiStatus {
    Ok = 'ok',
    Error = 'error',
}

export interface Article {
    source: Source;
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}

export interface ArticleResponse {
    status: ApiStatus;
    totalResults: number;
    articles: Article[];
}

export interface SourceDetails {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface SourcesResponse {
    status: ApiStatus;
    sources: SourceDetails[];
}
