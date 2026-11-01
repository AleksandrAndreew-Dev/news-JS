import News from './news/news';
import Sources from './sources/sources';
import { ArticleResponse, SourcesResponse, ApiStatus } from '../../types/news-api';

export class AppView {
    protected news: News;
    protected sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: ArticleResponse): void {
        if (data.status !== ApiStatus.Ok) {
            console.error(`Failed to load news: ${data.status}`);
            return;
        }
        const values = data.articles ?? [];
        this.news.draw(values);
    }

    drawSources(data: SourcesResponse): void {
        if (data.status !== ApiStatus.Ok) {
            console.error(`Failed to load sources: ${data.status}`);
            return;
        }
        const values = data.sources ?? [];
        this.sources.draw(values);
    }
}

export default AppView;
