import AppLoader from './appLoader';
import { SourcesResponse, ArticleResponse } from '../../types/news-api';
import { callbackFn } from './loader';

class AppController extends AppLoader {
    getSources(callback: callbackFn<SourcesResponse>): void {
        super.getResp<SourcesResponse>(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: MouseEvent | KeyboardEvent, callback: callbackFn<ArticleResponse>): void {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId!);
                    super.getResp<ArticleResponse>(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId!,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
